n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => h,
    XX: () => o,
    bX: () => d,
    bY: () => u,
    iG: () => f,
    ut: () => i
}),
    n(781311);
var l = n(446108),
    r = n(901461),
    a = n(981631);
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
function f(e, t, n) {
    let u = e.type === a.uaV.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        h = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        g = e.codedLinks.length > 0,
        m = e.hasFlag(a.iLy.HAS_THREAD),
        p = f || h || _ || g || m || e.type === a.uaV.THREAD_CREATED,
        b = f && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        E = e.type !== a.uaV.DEFAULT || (!b && '' !== e.content),
        y = (0, r.Z)(e),
        I = !y && (null == n ? void 0 : n.hasTimestamp) !== !1,
        S = o(e, t),
        A = s(e),
        O = y ? '' : ''.concat(u ? A : S, ' ').concat(l.Z0);
    if (E) {
        let t = i(e);
        O += ' '.concat(t);
    }
    if (p) {
        let t = d(e);
        O += ' '.concat(t);
    }
    if (I) {
        let t = c(e);
        O += ' '.concat(l.fy, ' ').concat(t);
    }
    return O.trim();
}
function h(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(l.Mb, ' ').concat(t);
}
