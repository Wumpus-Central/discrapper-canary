n.d(t, {
    Z: () => s,
    _: () => l
});
var r = n(399606),
    i = n(695346),
    o = n(496675),
    a = n(981631);
function s(e, t) {
    switch (e) {
        case a.A2N.ALWAYS:
            return !0;
        case a.A2N.IF_MODERATOR:
            return t;
        case a.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function l(e) {
    let t = (0, r.e7)([o.Z], () => o.Z.can(a.Plq.MANAGE_MESSAGES, e));
    return !s(i.cC.useSetting(), t);
}
