"use strict";
n.d(t, { A: () => u }), n(667532), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(783878),
    a = n(927813),
    r = n(879631),
    o = n(652215),
    d = n(985018),
    c = n(818050);
function u(e) {
    let { label: t, helperText: n, hideLabel: u, channel: h, onChange: g } = e,
        [m, x] = i.useState(null),
        p = h.rateLimitPerUser,
        A = i.useMemo(() => {
            let e = [...(m ?? o.s_7)];
            return (
                e.includes(p) || e.unshift(p), e.map((e) => ({ id: e.toString(), label: (0, r.$)(e, !1), value: e }))
            );
        }, [m, p]),
        f = i.useCallback(
            (e) => {
                g(e), x(null);
            },
            [g],
        ),
        b = i.useCallback((e) => {
            if ("" === e) return void x(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void x(null);
            n <= o.WA1 && t.push(n);
            let l = n * a.A.Seconds.MINUTE;
            l <= o.WA1 && t.push(l);
            let i = n * a.A.Seconds.HOUR;
            i <= o.WA1 && t.push(i), x(t);
        }, []),
        _ = i.useCallback(() => {
            x(null);
        }, []);
    return (0, l.jsx)("div", {
        className: c.QB,
        children: (0, l.jsx)(s.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: u,
            helperText: n,
            value: p,
            onSelectionChange: f,
            onQueryChange: (e) => b(e.target.value),
            options: A,
            onBlur: _,
            placeholder: d.intl.string(d.t.dBqQu4),
        }),
    });
}
