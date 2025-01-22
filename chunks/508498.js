n.d(t, {
    Db: function () {
        return d;
    }
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var r,
    i,
    l = n(192379),
    s = n(512969),
    a = n(37234),
    o = n(703656),
    c = n(981631);
function d() {
    let { search: e } = (0, s.TH)(),
        t = (0, s.UO)(),
        n = l.useMemo(() => new URLSearchParams(e), [e]).get('source'),
        r = null != n ? parseInt(n, 10) : null;
    return {
        onClose: l.useCallback(() => {
            if (0 === r) {
                (0, o.op)(), (0, a.jN)(c.S9g.USER_SETTINGS);
                return;
            }
            if ((0, o.uv)()) {
                (0, o.op)();
                return;
            }
            (0, o.uL)(c.Z5c.APP);
        }, [r]),
        source: r,
        ...t
    };
}
((i = r || (r = {}))[(i.SETTINGS = 0)] = 'SETTINGS'), (i[(i.CHANGELOG = 1)] = 'CHANGELOG'), (i[(i.DM_LIST = 2)] = 'DM_LIST');
