r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(192379),
    a = r(931609),
    o = r(55935),
    s = r(745735);
function l(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        r = arguments.length > 2 ? arguments[2] : void 0,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, o.TD)(Date.now(), e),
        c = (0, a.Z)(),
        d = (0, i.useCallback)(() => {
            if ((0 !== u.days || 0 !== u.hours || 0 !== u.minutes || 0 !== u.seconds) && !l) c(), null == r || r();
        }, [u, l, c, r]);
    return (0, s.Z)(d, l ? null : n), u;
}
