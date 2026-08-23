"use strict";
n.d(t, {
    $V: () => L,
    Fg: () => p,
    KM: () => m,
    LE: () => D,
    M: () => C,
    O8: () => T,
    b: () => R,
    c2: () => b,
    f: () => P,
    gh: () => y,
    ku: () => f,
    mS: () =>
        function e(t, n) {
            let i = n ?? p(t);
            if (i === I.LO.NONE) return !1;
            if (
                t.attachments?.some((e) => L({ type: A.D.Attachment, media: e }, i)) ||
                t.embeds?.some((e) => L({ type: A.D.Embed, media: e }, i)) ||
                (null != t.components && S(t.components).some((e) => L({ type: A.D.GenericMedia, media: e }, i)))
            )
                return !0;
            let r = null;
            if (
                ("messageSnapshots" in t
                    ? (r = t.messageSnapshots)
                    : "message_snapshots" in t && (r = t.message_snapshots),
                null == r || 0 === r.length)
            )
                return !1;
            for (let t of r) if (e(t.message, i)) return !0;
            return !1;
        },
    nx: () => U,
    qo: () => O,
    s9: () => N,
    y5: () => g,
}),
    n(938796),
    n(321073);
var i = n(665260),
    r = n(873298),
    a = n(155718),
    s = n(865116),
    l = n(427930),
    o = n(731068),
    d = n(734057),
    c = n(232835),
    u = n(994500),
    _ = n(287809),
    E = n(403362),
    A = n(930125),
    h = n(900019),
    I = n(811602);
function f() {
    return Object.values(I.Jn).filter((e) => null == e.isEligible || e.isEligible?.());
}
function p(e) {
    let { channelId: t, authorId: n } = U(e);
    return null == t || null == e
        ? I.LO.NONE
        : (function (e, t) {
              let n = _.default.getCurrentUser();
              if (null == n || t === n.id) return I.LO.NONE;
              let i = b(e, t, [d.A, u.A]);
              return null == i ? I.LO.NONE : T(i);
          })(t, n);
}
function T(e) {
    let t = f();
    return null == e
        ? I.LO.NONE
        : D(t.map((t) => (P(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(E.Vq));
}
function m(e) {
    let t = p(e);
    return g(e, t);
}
function g(e, t) {
    if (t === I.LO.NONE || null == e) return !1;
    if (
        e.attachments?.some((e) => R({ type: A.D.Attachment, media: e }, t).length > 0) ||
        e.embeds?.some((e) => R({ type: A.D.Embed, media: e }, t).length > 0)
    )
        return !0;
    let n = null;
    if (
        ("messageSnapshots" in e ? (n = e.messageSnapshots) : "message_snapshots" in e && (n = e.message_snapshots),
        null == n || 0 === n.length)
    )
        return !1;
    for (let e of n) if (g(e.message, t)) return !0;
    return !1;
}
function S(e) {
    return (Array.isArray(e) ? e : [e])
        .flatMap((e) => {
            switch (e.type) {
                case a.I5.MEDIA_GALLERY:
                    return e.items.map((e) => e.media);
                case a.I5.THUMBNAIL:
                    return e.media;
                case a.I5.FILE:
                    return e.file;
                case a.I5.SECTION:
                case a.I5.ACTION_ROW:
                case a.I5.CONTAINER:
                    return e.components.flatMap(S);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, o.Uv)(e) : e));
}
function N(e) {
    return !(null != e.components && S(e.components).some((e) => e.loadingState === a.TD.LOADING)) && !0;
}
function C(e) {
    let t = p(e);
    if (t === I.LO.NONE) return { attachmentIds: [], embedIds: [] };
    let n = e.attachments?.filter((e) => L({ type: A.D.Attachment, media: e }, t)),
        i = e.embeds?.filter((e) => L({ type: A.D.Embed, media: e }, t));
    return {
        attachmentIds: n?.map((e) => e.id).filter(Boolean) ?? [],
        embedIds: i?.map((e, t) => `embed_${t}`).filter(Boolean) ?? [],
    };
}
function R(e, t) {
    if (t === I.LO.NONE) return [];
    let n = v(t);
    return 0 === n.length ? [] : n.filter((t) => y(t, e)).map((e) => I.Jn[e].obscureReason);
}
function O(e, t) {
    if (t === I.LO.NONE) return !1;
    let n = v(t);
    return 0 !== n.length && n.filter((t) => y(t, e)).length > 0;
}
function L(e, t) {
    var n, i, r, a, l, o, d;
    if (t === I.LO.NONE || s.Ay.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let c = v(t);
    if (0 === c.length) return !1;
    switch (e.type) {
        case A.D.Embed:
            return (
                (n = e.media),
                !(
                    0 === (i = c).length ||
                    null == n ||
                    0 === i.filter((e) => !y(e, { type: A.D.Embed, media: n })).length ||
                    ("video" in n && null != n.video && n.video?.width === 0 && n.video?.height === 0) ||
                    ("thumbnail" in n &&
                        null != n.thumbnail &&
                        n.thumbnail?.width === 0 &&
                        n.thumbnail?.height === 0) ||
                    ("image" in n && null != n.image && n.image?.width === 0 && n.image?.height === 0) ||
                    ("images" in n && n.images?.some((e) => null != e && 0 === e.width && 0 === e.height))
                ) &&
                    M(
                        null != (r = n).content_scan_version
                            ? r.content_scan_version
                            : null != r.contentScanVersion || null != r.contentScanVersion
                              ? r.contentScanVersion
                              : null,
                        i,
                    )
            );
        case A.D.Attachment:
            return (
                (a = e.media),
                0 !== (l = c).length &&
                    0 !== l.filter((e) => !y(e, { type: A.D.Attachment, media: a })).length &&
                    M(a.content_scan_version ?? a.contentScanVersion, l)
            );
        case A.D.GenericMedia:
            return (
                (o = e.media),
                0 !== (d = c).length &&
                    0 !== d.filter((e) => !y(e, { type: A.D.GenericMedia, media: o })).length &&
                    M(o.contentScanMetadata?.version, d)
            );
        default:
            return !1;
    }
}
function y(e, t) {
    if (null == e) return !1;
    let n = I.Jn[e];
    if (null != n.devSettingKey && s.Ay.get(n.devSettingKey)) return !0;
    switch (t.type) {
        case A.D.Embed:
            return (0, i.Lt)(t.media.flags ?? 0, n.embedFlag);
        case A.D.Attachment:
            return (0, i.Lt)(t.media.flags ?? 0, n.attachmentFlag);
        case A.D.GenericMedia:
            return (0, i.Lt)(t.media.contentScanMetadata?.flags ?? 0, n.genericMediaFlag);
        default:
            return !1;
    }
}
function D(e) {
    let t = I.LO.NONE;
    for (let n of e)
        switch (n) {
            case I.kn.EXPLICIT:
                t |= I.LO.EXPLICIT;
                break;
            case I.kn.GORE:
                t |= I.LO.GORE;
                break;
            case I.kn.SELF_HARM:
                t |= I.LO.SELF_HARM;
        }
    return t;
}
function v(e) {
    if (e === I.LO.NONE) return [];
    let t = [];
    for (let n of f()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function b(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [d.A, u.A],
        [i, r] = n,
        a = i.getChannel(e),
        s = _.default.getCurrentUser();
    return null == s || t === s.id || null == a
        ? null
        : a.isDM() || a.isGroupDM()
          ? null != t && r.getFriendIDs().includes(t)
              ? A.v.FRIEND_DM
              : A.v.NON_FRIEND_DM
          : A.v.GUILD;
}
function M(e, t) {
    let n = h.A.validContentScanVersion;
    return -1 !== e && (t.includes(I.kn.GORE) || t.includes(I.kn.SELF_HARM) ? null == e || e < n : null == e);
}
function P(e) {
    return null != e && [r.TO.BLOCK, r.TO.BLUR].includes(e);
}
function U(e) {
    let t = null,
        n = null;
    if (null == e) return { channelId: t, authorId: n };
    "channel_id" in e && (t = e.channel_id);
    let [i, r] =
        "messageReference" in e
            ? [e.messageReference, (0, l.A)(e)]
            : "message_reference" in e
              ? [e.message_reference, (0, l.m)(e)]
              : [];
    if (null != i && r) {
        if (null == i.message_id) return { channelId: t, authorId: n };
        let e = c.A.getMessage(i.channel_id, i.message_id);
        null != e && (n = e.author?.id);
    } else "author" in e ? (n = e.author?.id) : "author_id" in e && (n = e.author_id);
    return { channelId: t, authorId: n };
}
