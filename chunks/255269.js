r.d(n, {
    Z: function () {
        return l;
    },
    _: function () {
        return u;
    }
});
var i = r(399606),
    a = r(695346),
    o = r(496675),
    s = r(981631);
function l(e, n) {
    switch (e) {
        case s.A2N.ALWAYS:
            return !0;
        case s.A2N.IF_MODERATOR:
            return n;
        case s.A2N.ON_CLICK:
        default:
            return !1;
    }
}
function u(e) {
    let n = (0, i.e7)([o.Z], () => o.Z.can(s.Plq.MANAGE_MESSAGES, e));
    return !l(a.cC.useSetting(), n);
}
