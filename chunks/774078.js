n.d(t, { Z: () => s });
var r = n(73800),
    i = n(710251),
    a = n(55935),
    o = n(745735);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, a.TD)(Date.now(), e),
        c = (0, i.Z)(),
        u = (0, r.useCallback)(() => {
            let t = (0, a.TD)(Date.now(), e);
            (0 === t.days && 0 === t.hours && 0 === t.minutes && 0 === t.seconds) || s || (c(), null == n || n());
        }, [e, s, c, n]);
    return ((0, o.Z)(u, s ? null : t), l);
}
