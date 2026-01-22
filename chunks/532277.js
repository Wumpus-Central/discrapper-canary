n.d(t, { A: () => u }), n(896048), n(667532), n(321073);
var l = n(627968),
    i = n(64700),
    r = n(397927),
    s = n(927813),
    a = n(879631),
    o = n(652215),
    c = n(985018),
    d = n(473169);
function u(e) {
    let { label: t, helperText: n, hideLabel: u, channel: h, onChange: g } = e,
        [m, f] = i.useState(null),
        p = h.rateLimitPerUser,
        b = i.useMemo(() => {
            let e = [...(null != m ? m : o.s_7)];
            return (
                e.includes(p) || e.unshift(p),
                e.map((e) => ({
                    id: e.toString(),
                    label: (0, a.$)(e, !1),
                    value: e,
                }))
            );
        }, [m, p]),
        x = i.useCallback(
            (e) => {
                g(e), f(null);
            },
            [g],
        ),
        j = i.useCallback((e) => {
            if ("" === e) return void f(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void f(null);
            n <= o.WA1 && t.push(n);
            let l = n * s.A.Seconds.MINUTE;
            l <= o.WA1 && t.push(l);
            let i = n * s.A.Seconds.HOUR;
            i <= o.WA1 && t.push(i), f(t);
        }, []),
        A = i.useCallback(() => {
            f(null);
        }, []);
    return (0, l.jsx)("div", {
        className: d.QB,
        children: (0, l.jsx)(r.ZiE, {
            selectionMode: "single",
            label: t,
            hideLabel: u,
            helperText: n,
            value: p,
            onSelectionChange: x,
            onQueryChange: (e) => j(e.target.value),
            options: b,
            onBlur: A,
            placeholder: c.intl.string(c.t.dBqQu4),
        }),
    });
}
