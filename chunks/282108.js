"use strict";
n.d(t, {
    $V: () => D,
    Fg: () => A,
    KM: () => S,
    LE: () => w,
    M: () => R,
    O8: () => T,
    b: () => O,
    c2: () => x,
    f: () => F,
    gh: () => L,
    ku: () => g,
    mS: () => N,
    nx: () => V,
    qo: () => b,
    s9: () => C,
    y5: () => y,
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
    c = n(320501),
    d = n(994500),
    _ = n(287809),
    f = n(403362),
    p = n(930125),
    h = n(900819),
    m = n(811602);
let E = -1,
    g = () => Object.values(m.Jn).filter((e) => null == e.isEligible || e.isEligible?.()),
    A = (e) => {
        let { channelId: t, authorId: n } = V(e);
        return null == t || null == e ? m.LO.NONE : I(t, n);
    },
    I = (e, t) => {
        let n = _.default.getCurrentUser();
        if (null == n || t === n.id) return m.LO.NONE;
        let r = x(e, t, [u.A, d.A]);
        return null == r ? m.LO.NONE : T(r);
    },
    T = (e) => {
        let t = g();
        return null == e
            ? m.LO.NONE
            : w(t.map((t) => (F(t.getUserSettingsWithDefaults()[e]) ? t.harmType : null)).filter(f.Vq));
    };
function S(e) {
    let t = A(e);
    return y(e, t);
}
function y(e, t) {
    if (t === m.LO.NONE || null == e) return !1;
    if (
        e.attachments?.some((e) => O({ type: p.D.Attachment, media: e }, t).length > 0) ||
        e.embeds?.some((e) => O({ type: p.D.Embed, media: e }, t).length > 0)
    )
        return !0;
    let n = null;
    if (
        ("messageSnapshots" in e ? (n = e.messageSnapshots) : "message_snapshots" in e && (n = e.message_snapshots),
        null == n || 0 === n.length)
    )
        return !1;
    for (let e of n) if (y(e.message, t)) return !0;
    return !1;
}
function v(e) {
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
                    return e.components.flatMap(v);
                default:
                    return [];
            }
        })
        .map((e) => ("proxy_url" in e ? (0, l.Uv)(e) : e));
}
function N(e, t) {
    let n = t ?? A(e);
    if (n === m.LO.NONE) return !1;
    if (
        e.attachments?.some((e) => D({ type: p.D.Attachment, media: e }, n)) ||
        e.embeds?.some((e) => D({ type: p.D.Embed, media: e }, n)) ||
        (null != e.components && v(e.components).some((e) => D({ type: p.D.GenericMedia, media: e }, n)))
    )
        return !0;
    let r = null;
    if (
        ("messageSnapshots" in e ? (r = e.messageSnapshots) : "message_snapshots" in e && (r = e.message_snapshots),
        null == r || 0 === r.length)
    )
        return !1;
    for (let e of r) if (N(e.message, n)) return !0;
    return !1;
}
function C(e) {
    return !(null != e.components && v(e.components).some((e) => e.loadingState === s.TD.LOADING)) && !0;
}
function R(e) {
    let t = A(e);
    if (t === m.LO.NONE) return { attachmentIds: [], embedIds: [] };
    let n = e.attachments?.filter((e) => D({ type: p.D.Attachment, media: e }, t)),
        r = e.embeds?.filter((e) => D({ type: p.D.Embed, media: e }, t));
    return {
        attachmentIds: n?.map((e) => e.id).filter(Boolean) ?? [],
        embedIds: r?.map((e, t) => `embed_${t}`).filter(Boolean) ?? [],
    };
}
function O(e, t) {
    if (t === m.LO.NONE) return [];
    let n = M(t);
    return 0 === n.length ? [] : n.filter((t) => L(t, e)).map((e) => m.Jn[e].obscureReason);
}
function b(e, t) {
    if (t === m.LO.NONE) return !1;
    let n = M(t);
    return 0 !== n.length && n.filter((t) => L(t, e)).length > 0;
}
function D(e, t) {
    if (t === m.LO.NONE || a.Ay.get("explicit_media_redaction_ignore_pending_scan")) return !1;
    let n = M(t);
    if (0 === n.length) return !1;
    switch (e.type) {
        case p.D.Embed:
            return P(e.media, n);
        case p.D.Attachment:
            return k(e.media, n);
        case p.D.GenericMedia:
            return U(e.media, n);
        default:
            return !1;
    }
}
function L(e, t) {
    if (null == e) return !1;
    let n = m.Jn[e];
    if (null != n.devSettingKey && a.Ay.get(n.devSettingKey)) return !0;
    switch (t.type) {
        case p.D.Embed:
            return (0, r.Lt)(t.media.flags ?? 0, n.embedFlag);
        case p.D.Attachment:
            return (0, r.Lt)(t.media.flags ?? 0, n.attachmentFlag);
        case p.D.GenericMedia:
            return (0, r.Lt)(t.media.contentScanMetadata?.flags ?? 0, n.genericMediaFlag);
        default:
            return !1;
    }
}
function w(e) {
    let t = m.LO.NONE;
    for (let n of e)
        switch (n) {
            case m.kn.EXPLICIT:
                t |= m.LO.EXPLICIT;
                break;
            case m.kn.GORE:
                t |= m.LO.GORE;
                break;
            case m.kn.SELF_HARM:
                t |= m.LO.SELF_HARM;
        }
    return t;
}
function M(e) {
    if (e === m.LO.NONE) return [];
    let t = [];
    for (let n of g()) (e & n.bitmask) > 0 && t.push(n.harmType);
    return t;
}
function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [u.A, d.A],
        [r, i] = n,
        s = r.getChannel(e),
        a = _.default.getCurrentUser();
    return null == a || t === a.id || null == s
        ? null
        : s.isDM() || s.isGroupDM()
          ? null != t && i.getFriendIDs().includes(t)
              ? p.v.FRIEND_DM
              : p.v.NON_FRIEND_DM
          : p.v.GUILD;
}
function P(e, t) {
    return (
        !(
            0 === t.length ||
            null == e ||
            0 === t.filter((t) => !L(t, { type: p.D.Embed, media: e })).length ||
            ("video" in e && null != e.video && e.video?.width === 0 && e.video?.height === 0) ||
            ("thumbnail" in e && null != e.thumbnail && e.thumbnail?.width === 0 && e.thumbnail?.height === 0) ||
            ("image" in e && null != e.image && e.image?.width === 0 && e.image?.height === 0) ||
            ("images" in e && e.images?.some((e) => null != e && 0 === e.width && 0 === e.height))
        ) && G(B(e), t)
    );
}
function k(e, t) {
    return (
        0 !== t.length &&
        0 !== t.filter((t) => !L(t, { type: p.D.Attachment, media: e })).length &&
        G(e.content_scan_version ?? e.contentScanVersion, t)
    );
}
function U(e, t) {
    return (
        0 !== t.length &&
        0 !== t.filter((t) => !L(t, { type: p.D.GenericMedia, media: e })).length &&
        G(e.contentScanMetadata?.version, t)
    );
}
function G(e, t) {
    let n = h.A.validContentScanVersion;
    return e !== E && (t.includes(m.kn.GORE) || t.includes(m.kn.SELF_HARM) ? null == e || e < n : null == e);
}
function F(e) {
    return null != e && [i.TO.BLOCK, i.TO.BLUR].includes(e);
}
function V(e) {
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
        let e = c.A.getMessage(r.channel_id, r.message_id);
        null != e && (n = e.author?.id);
    } else "author" in e ? (n = e.author?.id) : "author_id" in e && (n = e.author_id);
    return { channelId: t, authorId: n };
}
function B(e) {
    return null != e.content_scan_version
        ? e.content_scan_version
        : null != e.contentScanVersion || null != e.contentScanVersion
          ? e.contentScanVersion
          : null;
}
