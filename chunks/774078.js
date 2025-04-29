n.d(t, { Z: () => s });
var r = n(192379),
    i = n(931609),
    o = n(55935),
    a = n(745735);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, o.TD)(Date.now(), e),
        c = (0, i.Z)(),
        u = (0, r.useCallback)(() => {
            (0 === l.days && 0 === l.hours && 0 === l.minutes && 0 === l.seconds) || s || (c(), null == n || n());
        }, [l, s, c, n]);
    return (0, a.Z)(u, s ? null : t), l;
}
