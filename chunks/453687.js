n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => g,
    XX: () => l,
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
function l(e, t) {
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
function p(e, t, n) {
    let u = e.type === a.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        g = e.attachments.length > 0,
        m = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        b = e.hasFlag(a.iLy.HAS_THREAD),
        h = p || g || m || f || b || e.type === a.uaV.THREAD_CREATED,
        y = p && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        _ = e.type !== a.uaV.DEFAULT || (!y && '' !== e.content),
        O = (0, o.Z)(e),
        v = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
        j = l(e, t),
        x = s(e),
        P = O ? '' : ''.concat(u ? x : j, ' ').concat(r.Z0);
    if (_) {
        let t = i(e);
        P += ' '.concat(t);
    }
    if (h) {
        let t = d(e);
        P += ' '.concat(t);
    }
    if (v) {
        let t = c(e);
        P += ' '.concat(r.fy, ' ').concat(t);
    }
    return P.trim();
}
function g(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(r.Mb, ' ').concat(t);
}
