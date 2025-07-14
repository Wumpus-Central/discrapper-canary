(n.d(t, {
    Dv: () => c,
    Gq: () => a,
    Gx: () => m,
    XX: () => s,
    bX: () => d,
    bY: () => u,
    iG: () => p,
    ut: () => i
}),
    n(781311));
var r = n(446108),
    o = n(901461),
    l = n(981631);
function i(e) {
    return 'message-content-'.concat(e.id);
}
function a(e) {
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
    let u = e.type === l.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        m = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        b = e.components.length > 0,
        h = e.hasFlag(l.iLy.HAS_THREAD),
        O = p || m || g || f || h || b || e.type === l.uaV.THREAD_CREATED,
        y = p && e.content === e.embeds[0].url && e.embeds[0].type === l.hBH.GIFV,
        v = e.type !== l.uaV.DEFAULT || (!y && '' !== e.content),
        j = (0, o.Z)(e),
        P = !j && (null == n ? void 0 : n.hasTimestamp) !== !1,
        x = s(e, t),
        C = a(e),
        w = j ? '' : ''.concat(u ? C : x, ' ').concat(r.Z0);
    if (v) {
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
