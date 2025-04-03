n.d(t, { Z: () => u }), n(47120), n(733860), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(70956),
    a = n(129724),
    o = n(981631),
    c = n(388032),
    d = n(20493);
function u(e) {
    let { channel: t, onChange: n } = e,
        [u, h] = i.useState(null),
        g = t.rateLimitPerUser,
        m = i.useMemo(() => {
            let e = [...(null != u ? u : o.BiE)];
            return (
                e.includes(g) || e.unshift(g),
                e.map((e) => ({
                    label: (0, a.A)(e, !1),
                    value: e
                }))
            );
        }, [u, g]),
        p = i.useCallback(
            (e) => {
                n(e), h(null);
            },
            [n]
        ),
        f = i.useCallback((e) => {
            if ('' === e) return void h(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void h(null);
            n <= o.GI0 && t.push(n);
            let r = n * s.Z.Seconds.MINUTE;
            r <= o.GI0 && t.push(r);
            let i = n * s.Z.Seconds.HOUR;
            i <= o.GI0 && t.push(i), h(t);
        }, []),
        x = i.useCallback(() => {
            h(null);
        }, []);
    return (0, r.jsx)(l.VcW, {
        className: d.marginBottom8,
        value: g,
        onChange: p,
        onSearchChange: f,
        options: m,
        onBlur: x,
        placeholder: c.NW.string(c.t.dBqQu7)
    });
}
