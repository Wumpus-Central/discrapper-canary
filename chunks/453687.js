n.d(t, {
    Dv: () => c,
    Gq: () => s,
    Gx: () => p,
    XX: () => l,
    bX: () => d,
    bY: () => u,
    iG: () => f,
    ut: () => o,
}),
    n(781311);
var r = n(446108),
    i = n(901461),
    a = n(981631);
function o(e) {
    return "message-content-".concat(e.id);
}
function s(e) {
    return "message-reply-context-".concat(e.id);
}
function l(e, t) {
    let n = null != t ? t : e.id;
    return "message-username-".concat(n);
}
function c(e) {
    return "message-timestamp-".concat(e.id);
}
function u(e) {
    return "message-reactions-".concat(e.id);
}
function d(e) {
    return "message-accessories-".concat(e.id);
}
function f(e, t, n) {
    let u = e.type === a.uaV.REPLY && null != e.messageReference,
        f = e.embeds.length > 0,
        p = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        m = e.codedLinks.length > 0,
        h = e.components.length > 0,
        g = e.hasFlag(a.iLy.HAS_THREAD),
        E = f || p || _ || m || g || h || e.type === a.uaV.THREAD_CREATED,
        b = f && e.content === e.embeds[0].url && e.embeds[0].type === a.hBH.GIFV,
        y = e.type !== a.uaV.DEFAULT || (!b && "" !== e.content),
        O = (0, i.Z)(e),
        v = !O && (null == n ? void 0 : n.hasTimestamp) !== !1,
        S = !O,
        I = l(e, t),
        T = s(e),
        C = u ? T : I,
        A = S ? "".concat(C, " ").concat(r.Z0) : "";
    if (y) {
        let t = o(e);
        A += " ".concat(t);
    }
    if (E) {
        let t = d(e);
        A += " ".concat(t);
    }
    if (v) {
        let t = c(e);
        A += " ".concat(r.fy, " ").concat(t);
    }
    return A.trim();
}
function p(e) {
    if (0 === e.reactions.length) return;
    let t = u(e);
    return "".concat(r.Mb, " ").concat(t);
}
