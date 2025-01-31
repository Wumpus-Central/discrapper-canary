n.d(t, {
    Z: () => o,
    _: () => l
});
var i = n(399606),
    r = n(695346),
    a = n(496675),
    s = n(981631);
function o(e, t) {
    switch (e) {
        case s.A2N.ALWAYS:
            return !0;
        case s.A2N.IF_MODERATOR:
            return t;
        case s.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, i.e7)([a.Z], () => a.Z.can(s.Plq.MANAGE_MESSAGES, e));
    return !o(r.cC.useSetting(), t);
}
