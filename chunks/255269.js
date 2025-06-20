n.d(t, {
    Z: () => o,
    _: () => c
});
var a = n(399606),
    i = n(695346),
    r = n(496675),
    l = n(981631);
function o(e, t) {
    switch (e) {
        case l.A2N.ALWAYS:
            return !0;
        case l.A2N.IF_MODERATOR:
            return t;
        case l.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function c(e) {
    let t = (0, a.e7)([r.Z], () => r.Z.can(l.Plq.MANAGE_MESSAGES, e));
    return !o(i.cC.useSetting(), t);
}
