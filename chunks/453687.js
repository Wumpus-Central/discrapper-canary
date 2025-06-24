n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => m,
    XX: () => a,
    bX: () => d,
    bY: () => u,
    iG: () => p,
    ut: () => i
}),
    n(781311);
var r = n(446108),
    l = n(901461),
    o = n(981631);
function i(e) {
    return 'message-content-'.concat(e.id);
}
function s(e) {
    return 'message-reply-context-'.concat(e.id);
}
function a(e, t) {
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
    let u = e.type === o.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        m = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        b = e.components.length > 0,
        h = e.hasFlag(o.iLy.HAS_THREAD),
        O = p || m || g || f || h || b || e.type === o.uaV.THREAD_CREATED,
        y = p && e.content === e.embeds[0].url && e.embeds[0].type === o.hBH.GIFV,
        j = e.type !== o.uaV.DEFAULT || (!y && '' !== e.content),
        v = (0, l.Z)(e),
        P = !v && (null == n ? void 0 : n.hasTimestamp) !== !1,
        x = a(e, t),
        C = s(e),
        w = v ? '' : ''.concat(u ? C : x, ' ').concat(r.Z0);
    if (j) {
        let t = i(e);
        w += ' '.concat(t);
    }
    if (O) {
        let t = d(e);
        w += ' '.concat(t);
    }
    if (P) {
        let t = c(e);
        w += ' '.concat(r.fy, ' ').concat(t);
    }
    return w.trim();
}
function m(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(r.Mb, ' ').concat(t);
}
