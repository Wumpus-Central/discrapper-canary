n.d(t, {
    Dv: () => l,
    Gq: () => s,
    Gx: () => g,
    XX: () => c,
    bX: () => d,
    bY: () => u,
    iG: () => p,
    ut: () => i
}),
    n(781311);
var r = n(446108),
    o = n(901461),
    a = n(981631);
function i(e) {
    return 'message-content-'.concat(e.id);
}
function s(e) {
    return 'message-reply-context-'.concat(e.id);
}
function c(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function l(e) {
    return 'message-timestamp-'.concat(e.id);
}
function u(e) {
    return 'message-reactions-'.concat(e.id);
}
function d(e) {
    return 'message-accessories-'.concat(e.id);
}
function p(e, t, n) {
    let u = e.type === a.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        g = e.attachments.length > 0,
        m = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        _ = e.hasFlag(a.iLy.HAS_THREAD),
        b = p || g || m || f || _ || e.type === a.uaV.THREAD_CREATED,
        h = p && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        y = e.type !== a.uaV.DEFAULT || (!h && '' !== e.content),
        v = (0, o.Z)(e),
        O = !v && (null == n ? void 0 : n.hasTimestamp) !== !1,
        x = c(e, t),
        j = s(e),
        C = v ? '' : ''.concat(u ? j : x, ' ').concat(r.Z0);
    if (y) {
        let t = i(e);
        C += ' '.concat(t);
    }
    if (b) {
        let t = d(e);
        C += ' '.concat(t);
    }
    if (O) {
        let t = l(e);
        C += ' '.concat(r.fy, ' ').concat(t);
    }
    return C.trim();
}
function g(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(r.Mb, ' ').concat(t);
}
