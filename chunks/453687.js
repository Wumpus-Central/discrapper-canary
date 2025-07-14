(n.d(t, {
    Dv: () => s,
    Gq: () => c,
    Gx: () => p,
    XX: () => l,
    bX: () => d,
    bY: () => u,
    iG: () => m,
    ut: () => r
}),
    n(781311));
var a = n(446108),
    o = n(901461),
    i = n(981631);
function r(e) {
    return 'message-content-'.concat(e.id);
}
function c(e) {
    return 'message-reply-context-'.concat(e.id);
}
function l(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function s(e) {
    return 'message-timestamp-'.concat(e.id);
}
function u(e) {
    return 'message-reactions-'.concat(e.id);
}
function d(e) {
    return 'message-accessories-'.concat(e.id);
}
function m(e, t, n) {
    let u = e.type === i.uaV.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        p = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        f = e.codedLinks.length > 0,
        g = e.components.length > 0,
        b = e.hasFlag(i.iLy.HAS_THREAD),
        h = m || p || _ || f || b || g || e.type === i.uaV.THREAD_CREATED,
        T = m && e.content === e.embeds[0].url && e.embeds[0].type === i.hBH.GIFV,
        y = e.type !== i.uaV.DEFAULT || (!T && '' !== e.content),
        C = (0, o.Z)(e),
        v = !C && (null == n ? void 0 : n.hasTimestamp) !== !1,
        x = l(e, t),
        O = c(e),
        I = C ? '' : ''.concat(u ? O : x, ' ').concat(a.Z0);
    if (y) {
        let t = r(e);
        I += ' '.concat(t);
    }
    if (h) {
        let t = d(e);
        I += ' '.concat(t);
    }
    if (v) {
        let t = s(e);
        I += ' '.concat(a.fy, ' ').concat(t);
    }
    return I.trim();
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(a.Mb, ' ').concat(t);
}
