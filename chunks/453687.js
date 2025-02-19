n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => p,
    XX: () => o,
    bX: () => d,
    bY: () => u,
    iG: () => m,
    ut: () => i
}),
    n(566702);
var a = n(446108),
    r = n(901461),
    l = n(981631);
function i(e) {
    return 'message-content-'.concat(e.id);
}
function s(e) {
    return 'message-reply-context-'.concat(e.id);
}
function o(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function c(e) {
    return 'message-timestamp-'.concat(e.id);
}
function u(e) {
    return 'message-reactions-'.concat(e.id);
}
function d(e) {
    return 'message-accessories-'.concat(e.id);
}
function m(e, t, n) {
    let u = e.type === l.uaV.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        p = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        g = e.codedLinks.length > 0,
        _ = e.hasFlag(l.iLy.HAS_THREAD),
        f = m || p || h || g || _ || e.type === l.uaV.THREAD_CREATED,
        b = m && e.content === e.embeds[0].url && e.embeds[0].type === l.hBH.GIFV,
        y = e.type !== l.uaV.DEFAULT || (!b && '' !== e.content),
        E = (0, r.Z)(e),
        I = !E && (null == n ? void 0 : n.hasTimestamp) !== !1,
        v = o(e, t),
        S = s(e),
        C = E ? '' : ''.concat(u ? S : v, ' ').concat(a.Z0);
    if (y) {
        let t = i(e);
        C += ' '.concat(t);
    }
    if (f) {
        let t = d(e);
        C += ' '.concat(t);
    }
    if (I) {
        let t = c(e);
        C += ' '.concat(a.fy, ' ').concat(t);
    }
    return C.trim();
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(a.Mb, ' ').concat(t);
}
