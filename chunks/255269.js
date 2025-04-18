n.d(t, {
    Z: () => s,
    _: () => l
});
var r = n(399606),
    i = n(695346),
    a = n(496675),
    o = n(981631);
function s(e, t) {
    switch (e) {
        case o.A2N.ALWAYS:
            return !0;
        case o.A2N.IF_MODERATOR:
            return t;
        case o.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, r.e7)([a.Z], () => a.Z.can(o.Plq.MANAGE_MESSAGES, e));
    return !s(i.cC.useSetting(), t);
}
