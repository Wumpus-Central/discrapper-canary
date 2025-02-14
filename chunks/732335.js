n.d(t, { Z: () => u }), n(47120), n(733860), n(653041);
var i = n(200651),
    l = n(192379),
    s = n(481060),
    a = n(70956),
    r = n(129724),
    o = n(981631),
    d = n(388032),
    c = n(483938);
function u(e) {
    let { channel: t, onChange: n } = e,
        [u, h] = l.useState(null),
        m = t.rateLimitPerUser,
        g = l.useMemo(() => {
            let e = [...(null != u ? u : o.BiE)];
            return (
                e.includes(m) || e.unshift(m),
                e.map((e) => ({
                    label: (0, r.A)(e, !1),
                    value: e
                }))
            );
        }, [u, m]),
        p = l.useCallback(
            (e) => {
                n(e), h(null);
            },
            [n]
        ),
        x = l.useCallback((e) => {
            if ('' === e) {
                h(null);
                return;
            }
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) {
                h(null);
                return;
            }
            n <= o.GI0 && t.push(n);
            let i = n * a.Z.Seconds.MINUTE;
            i <= o.GI0 && t.push(i);
            let l = n * a.Z.Seconds.HOUR;
            l <= o.GI0 && t.push(l), h(t);
        }, []),
        f = l.useCallback(() => {
            h(null);
        }, []);
    return (0, i.jsx)(s.VcW, {
        className: c.marginBottom8,
        value: m,
        onChange: p,
        onSearchChange: x,
        options: g,
        onBlur: f,
        placeholder: d.intl.string(d.t.dBqQu7)
    });
}
