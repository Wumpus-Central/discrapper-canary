n.d(t, {
    Z: () => c,
    _: () => l
});
var a = n(399606),
    i = n(695346),
    o = n(496675),
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
    let t = (0, a.e7)([o.Z], () => o.Z.can(r.Plq.MANAGE_MESSAGES, e));
    return !c(i.cC.useSetting(), t);
}
