"use strict";
n.d(t, {
    $V: () => C,
    Fg: () => g,
    KM: () => T,
    LE: () => D,
    M: () => O,
    O8: () => I,
    b: () => R,
    c2: () => w,
    f: () => P,
    gh: () => b,
    ku: () => m,
    mS: () =>
        function e(t, n) {
            let r = n ?? g(t);
            if (r === p.LO.NONE) return !1;
            if (
                t.attachments?.some((e) => C({ type: E.D.Attachment, media: e }, r)) ||
                t.embeds?.some((e) => C({ type: E.D.Embed, media: e }, r)) ||
                (null != t.components && y(t.components).some((e) => C({ type: E.D.GenericMedia, media: e }, r)))
            )
                return !0;
            let i = null;
            if (
                ("messageSnapshots" in t
                    ? (i = t.messageSnapshots)
                    : "message_snapshots" in t && (i = t.message_snapshots),
                null == i || 0 === i.length)
            )
                return !1;
            for (let t of i) if (e(t.message, r)) return !0;
            return !1;
        },
    nx: () => U,
    qo: () => v,
    s9: () => N,
    y5: () => S,
}),
    n(938796),
    n(321073);
var r = n(665260),
    i = n(873298),
    s = n(155718),
    a = n(865116),
    o = n(427930),
    l = n(731068),
    u = n(734057),
    d = n(320501),
    c = n(994500),
    _ = n(287809),
    f = n(403362),
    E = n(930125),
    h = n(900819),
    p = n(811602);
let m = () => Object.values(p.Jn).filter((e) => null == e.isEligible || e.isEligible?.()),
    g = (e) => {
        let { channelId: t, authorId: n } = U(e);
        return null == t || null == e ? p.LO.NONE : A(t, n);
    },
    A = (e, t) => {
        let n = _.default.getCurrentUser();
        if (null == n || t === n.id) return p.LO.NONE;
        let r = w(e, t, [u.A, c.A]);
        return null == r ? p.LO.NONE : I(r);
    },
    I = (e) => {
        let t = m();
        return null == e
            ? p.LO.NONE
            : D(t.map((t) => (P(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(f.Vq));
    };
function T(e) {
    let t = g(e);
    return S(e, t);
}
function S(e, t) {
    if (t === p.LO.NONE || null == e) return !1;
    if (
        e.attachments?.some((e) => R({ type: E.D.Attachment, media: e }, t).length > 0) ||
        e.embeds?.some((e) => R({ type: E.D.Embed, media: e }, t).length > 0)
    )
        return !0;
    let n = null;
    if (
        ("messageSnapshots" in e ? (n = e.messageSnapshots) : "message_snapshots" in e && (n = e.message_snapshots),
        null == n || 0 === n.length)
    )
        return !1;
    for (let e of n) if (S(e.message, t)) return !0;
    return !1;
}
function y(e) {
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
                    return e.components.flatMap(y);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, l.Uv)(e) : e));
}
function N(e) {
    return !(null != e.components && y(e.components).some((e) => e.loadingState === s.TD.LOADING)) && !0;
}
function O(e) {
    let t = g(e);
    if (t === p.LO.NONE) return { attachmentIds: [], embedIds: [] };
    let n = e.attachments?.filter((e) => C({ type: E.D.Attachment, media: e }, t)),
        r = e.embeds?.filter((e) => C({ type: E.D.Embed, media: e }, t));
    return {
        attachmentIds: n?.map((e) => e.id).filter(Boolean) ?? [],
        embedIds: r?.map((e, t) => `embed_${t}`).filter(Boolean) ?? [],
    };
}
function R(e, t) {
    if (t === p.LO.NONE) return [];
    let n = L(t);
    return 0 === n.length ? [] : n.filter((t) => b(t, e)).map((e) => p.Jn[e].obscureReason);
}
function v(e, t) {
    if (t === p.LO.NONE) return !1;
    let n = L(t);
    return 0 !== n.length && n.filter((t) => b(t, e)).length > 0;
}
function C(e, t) {
    var n, r, i, s, o, l, u;
    if (t === p.LO.NONE || a.Ay.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let d = L(t);
    if (0 === d.length) return !1;
    switch (e.type) {
        case E.D.Embed:
            return (
                (n = e.media),
                !(
                    0 === (r = d).length ||
                    null == n ||
                    0 === r.filter((e) => !b(e, { type: E.D.Embed, media: n })).length ||
                    ("video" in n && null != n.video && n.video?.width === 0 && n.video?.height === 0) ||
                    ("thumbnail" in n &&
                        null != n.thumbnail &&
                        n.thumbnail?.width === 0 &&
                        n.thumbnail?.height === 0) ||
                    ("image" in n && null != n.image && n.image?.width === 0 && n.image?.height === 0) ||
                    ("images" in n && n.images?.some((e) => null != e && 0 === e.width && 0 === e.height))
                ) &&
                    M(
                        null != (i = n).content_scan_version
                            ? i.content_scan_version
                            : null != i.contentScanVersion || null != i.contentScanVersion
                              ? i.contentScanVersion
                              : null,
                        r,
                    )
            );
        case E.D.Attachment:
            return (
                (s = e.media),
                0 !== (o = d).length &&
                    0 !== o.filter((e) => !b(e, { type: E.D.Attachment, media: s })).length &&
                    M(s.content_scan_version ?? s.contentScanVersion, o)
            );
        case E.D.GenericMedia:
            return (
                (l = e.media),
                0 !== (u = d).length &&
                    0 !== u.filter((e) => !b(e, { type: E.D.GenericMedia, media: l })).length &&
                    M(l.contentScanMetadata?.version, u)
            );
        default:
            return !1;
    }
}
function b(e, t) {
    if (null == e) return !1;
    let n = p.Jn[e];
    if (null != n.devSettingKey && a.Ay.get(n.devSettingKey)) return !0;
    switch (t.type) {
        case E.D.Embed:
            return (0, r.Lt)(t.media.flags ?? 0, n.embedFlag);
        case E.D.Attachment:
            return (0, r.Lt)(t.media.flags ?? 0, n.attachmentFlag);
        case E.D.GenericMedia:
            return (0, r.Lt)(t.media.contentScanMetadata?.flags ?? 0, n.genericMediaFlag);
        default:
            return !1;
    }
}
function D(e) {
    let t = p.LO.NONE;
    for (let n of e)
        switch (n) {
            case p.kn.EXPLICIT:
                t |= p.LO.EXPLICIT;
                break;
            case p.kn.GORE:
                t |= p.LO.GORE;
                break;
            case p.kn.SELF_HARM:
                t |= p.LO.SELF_HARM;
        }
    return t;
}
function L(e) {
    if (e === p.LO.NONE) return [];
    let t = [];
    for (let n of m()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function w(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.A, c.A],
        [r, i] = n,
        s = r.getChannel(e),
        a = _.default.getCurrentUser();
    return null == a || t === a.id || null == s
        ? null
        : s.isDM() || s.isGroupDM()
          ? null != t && i.getFriendIDs().includes(t)
              ? E.v.FRIEND_DM
              : E.v.NON_FRIEND_DM
          : E.v.GUILD;
}
function M(e, t) {
    let n = h.A.validContentScanVersion;
    return -1 !== e && (t.includes(p.kn.GORE) || t.includes(p.kn.SELF_HARM) ? null == e || e < n : null == e);
}
function P(e) {
    return null != e && [i.TO.BLOCK, i.TO.BLUR].includes(e);
}
function U(e) {
    let t = null,
        n = null;
    if (null == e) return { channelId: t, authorId: n };
    "channel_id" in e && (t = e.channel_id);
    let [r, i] =
        "messageReference" in e
            ? [e.messageReference, (0, o.A)(e)]
            : "message_reference" in e
              ? [e.message_reference, (0, o.m)(e)]
              : [];
    if (null != r && i) {
        if (null == r.message_id) return { channelId: t, authorId: n };
        let e = d.A.getMessage(r.channel_id, r.message_id);
        null != e && (n = e.author?.id);
    } else "author" in e ? (n = e.author?.id) : "author_id" in e && (n = e.author_id);
    return { channelId: t, authorId: n };
}
