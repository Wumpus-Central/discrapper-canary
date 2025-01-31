n.d(t, { Z: () => o });
var i = n(192379),
    r = n(931609),
    a = n(55935),
    s = n(745735);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
        n = arguments.length > 2 ? arguments[2] : void 0,
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (0, a.TD)(Date.now(), e),
        u = (0, r.Z)(),
        c = (0, i.useCallback)(() => {
            (0 !== l.days || 0 !== l.hours || 0 !== l.minutes || 0 !== l.seconds) && !o && (u(), null == n || n());
        }, [l, o, u, n]);
    return (0, s.Z)(c, o ? null : t), l;
}
