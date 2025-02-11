n.d(t, { Db: () => o }), n(610138), n(216116), n(78328), n(815648), n(47120);
var l = n(192379),
    r = n(512969),
    i = n(37234),
    s = n(703656),
    a = n(981631);
function o() {
    let { search: e } = (0, r.TH)(),
        t = (0, r.UO)(),
        n = l.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        o = null != n ? parseInt(n, 10) : null;
    return {
        onClose: l.useCallback(() => {
            if (0 === o) {
                (0, s.op)(), (0, i.jN)(a.S9g.USER_SETTINGS);
                return;
            }
            if ((0, s.uv)()) {
                (0, s.op)();
                return;
            }
            (0, s.uL)(a.Z5c.APP);
        }, [o]),
        source: o,
        ...t
    };
}
