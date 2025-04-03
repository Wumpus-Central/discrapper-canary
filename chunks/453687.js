n.d(t, {
    Dv: () => c,
    Gq: () => l,
    Gx: () => p,
    XX: () => s,
    bX: () => u,
    bY: () => d,
    iG: () => m,
    ut: () => o
}),
    n(566702);
var a = n(446108),
    i = n(901461),
    r = n(981631);
function o(e) {
    return 'message-content-'.concat(e.id);
}
function l(e) {
    return 'message-reply-context-'.concat(e.id);
}
function s(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function c(e) {
    return 'message-timestamp-'.concat(e.id);
}
function d(e) {
    return 'message-reactions-'.concat(e.id);
}
function u(e) {
    return 'message-accessories-'.concat(e.id);
}
function m(e, t, n) {
    let d = e.type === r.uaV.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        p = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        _ = e.hasFlag(r.iLy.HAS_THREAD),
        f = m || p || g || h || _ || e.type === r.uaV.THREAD_CREATED,
        b = m && e.content === e.embeds[0].url && e.embeds[0].type === r.hBH.GIFV,
        y = e.type !== r.uaV.DEFAULT || (!b && '' !== e.content),
        x = (0, i.Z)(e),
        C = !x && (null == n ? void 0 : n.hasTimestamp) !== !1,
        v = s(e, t),
        O = l(e),
        j = x ? '' : ''.concat(d ? O : v, ' ').concat(a.Z0);
    if (y) {
        let t = o(e);
        j += ' '.concat(t);
    }
    if (f) {
        let t = u(e);
        j += ' '.concat(t);
    }
    if (C) {
        let t = c(e);
        j += ' '.concat(a.fy, ' ').concat(t);
    }
    return j.trim();
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return ''.concat(a.Mb, ' ').concat(t);
}
