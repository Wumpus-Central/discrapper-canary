n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => m,
    XX: () => l,
    bX: () => d,
    bY: () => u,
    iG: () => p,
    ut: () => r
});
var a = n(446108),
    o = n(901461),
    i = n(981631);
function r(e) {
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
    let u = e.type === i.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        m = e.attachments.length > 0,
        g = e.stickerItems.length > 0,
        _ = e.codedLinks.length > 0,
        h = e.hasFlag(i.iLy.HAS_THREAD),
        f = p || m || g || _ || h || e.type === i.uaV.THREAD_CREATED,
        C = p && e.content === e.embeds[0].url && e.embeds[0].type === i.hBH.GIFV,
        x = e.type !== i.uaV.DEFAULT || (!C && '' !== e.content),
        v = (0, o.Z)(e),
        b = !v && (null == n ? void 0 : n.hasTimestamp) !== !1,
        T = l(e, t),
        I = s(e),
        y = v ? '' : ''.concat(u ? I : T, ' ').concat(a.Z0);
    if (x) {
        let t = r(e);
        y += ' '.concat(t);
    }
    if (f) {
        let t = d(e);
        y += ' '.concat(t);
    }
    if (b) {
        let t = c(e);
        y += ' '.concat(a.fy, ' ').concat(t);
    }
    return y.trim();
}
function m(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return ''.concat(a.Mb, ' ').concat(t);
}
