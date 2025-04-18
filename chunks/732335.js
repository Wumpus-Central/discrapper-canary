n.d(t, { Z: () => u }), n(388685), n(290780), n(539854);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(70956),
    a = n(129724),
    o = n(981631),
    c = n(388032),
    d = n(20493);
function u(e) {
    let { channel: t, onChange: n } = e,
        [u, h] = r.useState(null),
        g = t.rateLimitPerUser,
        m = r.useMemo(() => {
            let e = [...(null != u ? u : o.BiE)];
            return (
                e.includes(g) || e.unshift(g),
                e.map((e) => ({
                    label: (0, a.A)(e, !1),
                    value: e
                }))
            );
        }, [u, g]),
        p = r.useCallback(
            (e) => {
                n(e), h(null);
            },
            [n]
        ),
        f = r.useCallback((e) => {
            if ('' === e) return void h(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void h(null);
            n <= o.GI0 && t.push(n);
            let i = n * s.Z.Seconds.MINUTE;
            i <= o.GI0 && t.push(i);
            let r = n * s.Z.Seconds.HOUR;
            r <= o.GI0 && t.push(r), h(t);
        }, []),
        x = r.useCallback(() => {
            h(null);
        }, []);
    return (0, i.jsx)(l.VcW, {
        className: d.marginBottom8,
        value: g,
        onChange: p,
        onSearchChange: f,
        options: m,
        onBlur: x,
        placeholder: c.NW.string(c.t.dBqQu7)
    });
}
