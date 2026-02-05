"use strict";
n.d(t, { A: () => u }), n(667532), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(927813),
    r = n(879631),
    o = n(652215),
    d = n(985018),
    c = n(473169);
function u(e) {
    let { label: t, helperText: n, hideLabel: u, channel: h, onChange: g } = e,
        [m, x] = i.useState(null),
        A = h.rateLimitPerUser,
        f = i.useMemo(() => {
            let e = [...(m ?? o.s_7)];
            return (
                e.includes(A) || e.unshift(A), e.map((e) => ({ id: e.toString(), label: (0, r.$)(e, !1), value: e }))
            );
        }, [m, A]),
        p = i.useCallback(
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
        C = i.useCallback(() => {
            x(null);
        }, []);
    return (0, l.jsx)("div", {
        className: c.QB,
        children: (0, l.jsx)(s.ZiE, {
            selectionMode: "single",
            label: t,
            hideLabel: u,
            helperText: n,
            value: A,
            onSelectionChange: p,
            onQueryChange: (e) => b(e.target.value),
            options: f,
            onBlur: C,
            placeholder: d.intl.string(d.t.dBqQu4),
        }),
    });
}
