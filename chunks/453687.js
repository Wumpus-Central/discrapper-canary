n.d(t, {
    Dv: () => c,
    Gq: () => l,
    Gx: () => g,
    XX: () => s,
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
        b = e.components.length > 0,
        h = e.hasFlag(a.iLy.HAS_THREAD),
        _ = p || g || m || f || h || b || e.type === a.uaV.THREAD_CREATED,
        y = p && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        v = e.type !== a.uaV.DEFAULT || (!y && '' !== e.content),
        O = (0, o.Z)(e),
        j = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
        x = s(e, t),
        C = l(e),
        P = O ? '' : ''.concat(u ? C : x, ' ').concat(r.Z0);
    if (v) {
        let t = i(e);
        P += ' '.concat(t);
    }
    if (_) {
        let t = d(e);
        P += ' '.concat(t);
    }
    if (j) {
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
