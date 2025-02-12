n.d(t, {
    Dv: () => c,
    Gq: () => r,
    Gx: () => _,
    XX: () => o,
    bX: () => u,
    bY: () => d,
    iG: () => m,
    ut: () => s
});
var a = n(446108),
    l = n(901461),
    i = n(981631);
function s(e) {
    return 'message-content-'.concat(e.id);
}
function r(e) {
    return 'message-reply-context-'.concat(e.id);
}
function o(e, t) {
    let n = null != t ? t : e.id;
    return 'message-username-'.concat(n);
}
function c(e) {
    return 'message-timestamp-'.concat(e.id);
}
function d(e) {
    return 'message-reactions-'.concat(e.id);
}
function u(e) {
    return 'message-accessories-'.concat(e.id);
}
function m(e, t, n) {
    let d = e.type === i.uaV.REPLY && null != e.messageReference,
        m = e.embeds.length > 0,
        _ = e.attachments.length > 0,
        h = e.stickerItems.length > 0,
        g = e.codedLinks.length > 0,
        p = e.hasFlag(i.iLy.HAS_THREAD),
        f = m || _ || h || g || p || e.type === i.uaV.THREAD_CREATED,
        E = m && e.content === e.embeds[0].url && e.embeds[0].type === i.hBH.GIFV,
        I = e.type !== i.uaV.DEFAULT || (!E && '' !== e.content),
        C = (0, l.Z)(e),
        x = !C && (null == n ? void 0 : n.hasTimestamp) !== !1,
        A = o(e, t),
        S = r(e),
        T = C ? '' : ''.concat(d ? S : A, ' ').concat(a.Z0);
    if (I) {
        let t = s(e);
        T += ' '.concat(t);
    }
    if (f) {
        let t = u(e);
        T += ' '.concat(t);
    }
    if (x) {
        let t = c(e);
        T += ' '.concat(a.fy, ' ').concat(t);
    }
    return T.trim();
}
function _(e) {
    if (0 === e.reactions.length) return;
    let t = d(e);
    return ''.concat(a.Mb, ' ').concat(t);
}
