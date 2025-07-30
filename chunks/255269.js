n.d(t, {
    Z: () => c,
    _: () => l
});
var a = n(399606),
    o = n(695346),
    i = n(496675),
    r = n(981631);
function c(e, t) {
    switch (e) {
        case r.A2N.ALWAYS:
            return !0;
        case r.A2N.IF_MODERATOR:
            return t;
        case r.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.can(r.Plq.MANAGE_MESSAGES, e));
    return !c(o.cC.useSetting(), t);
}
