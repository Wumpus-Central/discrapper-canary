n.d(t, {
    Z: () => a,
    _: () => s
});
var r = n(399606),
    i = n(695346),
    l = n(496675),
    o = n(981631);
function a(e, t) {
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
function s(e) {
    let t = (0, r.e7)([l.Z], () => l.Z.can(o.Plq.MANAGE_MESSAGES, e));
    return !a(i.cC.useSetting(), t);
}
