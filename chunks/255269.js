n.d(t, {
    Z: () => r,
    _: () => l
});
var a = n(399606),
    o = n(695346),
    i = n(496675),
    c = n(981631);
function r(e, t) {
    switch (e) {
        case c.A2N.ALWAYS:
            return !0;
        case c.A2N.IF_MODERATOR:
            return t;
        case c.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.can(c.Plq.MANAGE_MESSAGES, e));
    return !r(o.cC.useSetting(), t);
}
