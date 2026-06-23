"use strict";
n.d(t, {
    $V: () => R,
    Fg: () => g,
    KM: () => I,
    LE: () => b,
    M: () => C,
    O8: () => A,
    b: () => N,
    c2: () => L,
    f: () => M,
    gh: () => O,
    ku: () => m,
    mS: () =>
        function e(t, n) {
            let i = n ?? g(t);
            if (i === E.LO.NONE) return !1;
            if (
                t.attachments?.some((e) => R({ type: f.D.Attachment, media: e }, i)) ||
                t.embeds?.some((e) => R({ type: f.D.Embed, media: e }, i)) ||
                (null != t.components && S(t.components).some((e) => R({ type: f.D.GenericMedia, media: e }, i)))
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
    nx: () => P,
    qo: () => v,
    s9: () => y,
    y5: () => T,
}),
    n(938796),
    n(321073);
var i = n(665260),
    r = n(873298),
    s = n(155718),
    a = n(865116),
    o = n(427930),
    l = n(731068),
    u = n(734057),
    c = n(232835),
    d = n(994500),
    _ = n(287809),
    h = n(403362),
    f = n(930125),
    p = n(900019),
    E = n(811602);
function m() {
    return Object.values(E.Jn).filter((e) => null == e.isEligible || e.isEligible?.());
}
function g(e) {
    let { channelId: t, authorId: n } = P(e);
    return null == t || null == e
        ? E.LO.NONE
        : (function (e, t) {
              let n = _.default.getCurrentUser();
              if (null == n || t === n.id) return E.LO.NONE;
              let i = L(e, t, [u.A, d.A]);
              return null == i ? E.LO.NONE : A(i);
          })(t, n);
}
function A(e) {
    let t = m();
    return null == e
        ? E.LO.NONE
        : b(t.map((t) => (M(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(h.Vq));
}
function I(e) {
    let t = g(e);
    return T(e, t);
}
function T(e, t) {
    if (t === E.LO.NONE || null == e) return !1;
    if (
        e.attachments?.some((e) => N({ type: f.D.Attachment, media: e }, t).length > 0) ||
        e.embeds?.some((e) => N({ type: f.D.Embed, media: e }, t).length > 0)
    )
        return !0;
    let n = null;
    if (
        ("messageSnapshots" in e ? (n = e.messageSnapshots) : "message_snapshots" in e && (n = e.message_snapshots),
        null == n || 0 === n.length)
    )
        return !1;
    for (let e of n) if (T(e.message, t)) return !0;
    return !1;
}
function S(e) {
    return (Array.isArray(e) ? e : [e])
        .flatMap((e) => {
            switch (e.type) {
                case s.I5.MEDIA_GALLERY:
                    return e.items.map((e) => e.media);
                case s.I5.THUMBNAIL:
                    return e.media;
                case s.I5.FILE:
                    return e.file;
                case s.I5.SECTION:
                case s.I5.ACTION_ROW:
                case s.I5.CONTAINER:
                    return e.components.flatMap(S);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, l.Uv)(e) : e));
}
function y(e) {
    return !(null != e.components && S(e.components).some((e) => e.loadingState === s.TD.LOADING)) && !0;
}
function C(e) {
    let t = g(e);
    if (t === E.LO.NONE) return { attachmentIds: [], embedIds: [] };
    let n = e.attachments?.filter((e) => R({ type: f.D.Attachment, media: e }, t)),
        i = e.embeds?.filter((e) => R({ type: f.D.Embed, media: e }, t));
    return {
        attachmentIds: n?.map((e) => e.id).filter(Boolean) ?? [],
        embedIds: i?.map((e, t) => `embed_${t}`).filter(Boolean) ?? [],
    };
}
function N(e, t) {
    if (t === E.LO.NONE) return [];
    let n = D(t);
    return 0 === n.length ? [] : n.filter((t) => O(t, e)).map((e) => E.Jn[e].obscureReason);
}
function v(e, t) {
    if (t === E.LO.NONE) return !1;
    let n = D(t);
    return 0 !== n.length && n.filter((t) => O(t, e)).length > 0;
}
function R(e, t) {
    var n, i, r, s, o, l, u;
    if (t === E.LO.NONE || a.Ay.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let c = D(t);
    if (0 === c.length) return !1;
    switch (e.type) {
        case f.D.Embed:
            return (
                (n = e.media),
                !(
                    0 === (i = c).length ||
                    null == n ||
                    0 === i.filter((e) => !O(e, { type: f.D.Embed, media: n })).length ||
                    ("video" in n && null != n.video && n.video?.width === 0 && n.video?.height === 0) ||
                    ("thumbnail" in n &&
                        null != n.thumbnail &&
                        n.thumbnail?.width === 0 &&
                        n.thumbnail?.height === 0) ||
                    ("image" in n && null != n.image && n.image?.width === 0 && n.image?.height === 0) ||
                    ("images" in n && n.images?.some((e) => null != e && 0 === e.width && 0 === e.height))
                ) &&
                    w(
                        null != (r = n).content_scan_version
                            ? r.content_scan_version
                            : null != r.contentScanVersion || null != r.contentScanVersion
                              ? r.contentScanVersion
                              : null,
                        i,
                    )
            );
        case f.D.Attachment:
            return (
                (s = e.media),
                0 !== (o = c).length &&
                    0 !== o.filter((e) => !O(e, { type: f.D.Attachment, media: s })).length &&
                    w(s.content_scan_version ?? s.contentScanVersion, o)
            );
        case f.D.GenericMedia:
            return (
                (l = e.media),
                0 !== (u = c).length &&
                    0 !== u.filter((e) => !O(e, { type: f.D.GenericMedia, media: l })).length &&
                    w(l.contentScanMetadata?.version, u)
            );
        default:
            return !1;
    }
}
function O(e, t) {
    if (null == e) return !1;
    let n = E.Jn[e];
    if (null != n.devSettingKey && a.Ay.get(n.devSettingKey)) return !0;
    switch (t.type) {
        case f.D.Embed:
            return (0, i.Lt)(t.media.flags ?? 0, n.embedFlag);
        case f.D.Attachment:
            return (0, i.Lt)(t.media.flags ?? 0, n.attachmentFlag);
        case f.D.GenericMedia:
            return (0, i.Lt)(t.media.contentScanMetadata?.flags ?? 0, n.genericMediaFlag);
        default:
            return !1;
    }
}
function b(e) {
    let t = E.LO.NONE;
    for (let n of e)
        switch (n) {
            case E.kn.EXPLICIT:
                t |= E.LO.EXPLICIT;
                break;
            case E.kn.GORE:
                t |= E.LO.GORE;
                break;
            case E.kn.SELF_HARM:
                t |= E.LO.SELF_HARM;
        }
    return t;
}
function D(e) {
    if (e === E.LO.NONE) return [];
    let t = [];
    for (let n of m()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function L(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.A, d.A],
        [i, r] = n,
        s = i.getChannel(e),
        a = _.default.getCurrentUser();
    return null == a || t === a.id || null == s
        ? null
        : s.isDM() || s.isGroupDM()
          ? null != t && r.getFriendIDs().includes(t)
              ? f.v.FRIEND_DM
              : f.v.NON_FRIEND_DM
          : f.v.GUILD;
}
function w(e, t) {
    let n = p.A.validContentScanVersion;
    return -1 !== e && (t.includes(E.kn.GORE) || t.includes(E.kn.SELF_HARM) ? null == e || e < n : null == e);
}
function M(e) {
    return null != e && [r.TO.BLOCK, r.TO.BLUR].includes(e);
}
function P(e) {
    let t = null,
        n = null;
    if (null == e) return { channelId: t, authorId: n };
    "channel_id" in e && (t = e.channel_id);
    let [i, r] =
        "messageReference" in e
            ? [e.messageReference, (0, o.A)(e)]
            : "message_reference" in e
              ? [e.message_reference, (0, o.m)(e)]
              : [];
    if (null != i && r) {
        if (null == i.message_id) return { channelId: t, authorId: n };
        let e = c.A.getMessage(i.channel_id, i.message_id);
        null != e && (n = e.author?.id);
    } else "author" in e ? (n = e.author?.id) : "author_id" in e && (n = e.author_id);
    return { channelId: t, authorId: n };
}
