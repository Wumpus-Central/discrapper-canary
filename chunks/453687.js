n.d(t, {
    Dv: () => u,
    Gq: () => o,
    Gx: () => _,
    XX: () => l,
    bX: () => d,
    bY: () => c,
    iG: () => f,
    ut: () => s
});
var i = n(446108),
    r = n(901461),
    a = n(981631);
function s(e) {
    return 'message-content-'.concat(e.id);
}
function o(e) {
    return 'message-reply-context-'.concat(e.id);
}
function l(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function u(e) {
    return 'message-timestamp-'.concat(e.id);
}
function c(e) {
    return 'message-reactions-'.concat(e.id);
}
function d(e) {
    return 'message-accessories-'.concat(e.id);
}
function f(e, t, n) {
    let c = e.type === a.uaV.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        _ = e.attachments.length > 0,
        p = e.stickerItems.length > 0,
        h = e.codedLinks.length > 0,
        m = e.hasFlag(a.iLy.HAS_THREAD),
        g = f || _ || p || h || m || e.type === a.uaV.THREAD_CREATED,
        E = f && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        v = e.type !== a.uaV.DEFAULT || (!E && '' !== e.content),
        y = (0, r.Z)(e),
        I = !y && (null == n ? void 0 : n.hasTimestamp) !== !1,
        b = !y,
        T = l(e, t),
        S = o(e),
        A = c ? S : T,
        N = b ? ''.concat(A, ' ').concat(i.Z0) : '';
    if (v) {
        let t = s(e);
        N += ' '.concat(t);
    }
    if (g) {
        let t = d(e);
        N += ' '.concat(t);
    }
    if (I) {
        let t = u(e);
        N += ' '.concat(i.fy, ' ').concat(t);
    }
    return N.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = c(e);
    return ''.concat(i.Mb, ' ').concat(t);
}
