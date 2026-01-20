n.d(t, { Z: () => u }), n(388685), n(290780), n(539854);
var i = n(54381),
    l = n(473749),
    r = n(481060),
    a = n(70956),
    s = n(129724),
    o = n(981631),
    c = n(388032),
    d = n(478411);
function u(e) {
    let { label: t, helperText: n, hideLabel: u, channel: h, onChange: g } = e,
        [m, f] = l.useState(null),
        p = h.rateLimitPerUser,
        b = l.useMemo(() => {
            let e = [...(null != m ? m : o.BiE)];
            return (
                e.includes(p) || e.unshift(p),
                e.map((e) => ({
                    id: e.toString(),
                    label: (0, s.A)(e, !1),
                    value: e,
                }))
            );
        }, [m, p]),
        x = l.useCallback(
            (e) => {
                g(e), f(null);
            },
            [g],
        ),
        j = l.useCallback((e) => {
            if ("" === e) return void f(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void f(null);
            n <= o.GI0 && t.push(n);
            let i = n * a.Z.Seconds.MINUTE;
            i <= o.GI0 && t.push(i);
            let l = n * a.Z.Seconds.HOUR;
            l <= o.GI0 && t.push(l), f(t);
        }, []),
        v = l.useCallback(() => {
            f(null);
        }, []);
    return (0, i.jsx)("div", {
        className: d.marginBottom8,
        children: (0, i.jsx)(r.VcW, {
            selectionMode: "single",
            label: t,
            hideLabel: u,
            helperText: n,
            value: p,
            onSelectionChange: x,
            onQueryChange: (e) => j(e.target.value),
            options: b,
            onBlur: v,
            placeholder: c.intl.string(c.t.dBqQu4),
        }),
    });
}
