l.d(t, {
    k: () => b,
});
var n = l(627968),
    r = l(64700),
    s = l(503698),
    a = l.n(s),
    i = l(397927),
    o = l(496431),
    c = l(854818),
    u = l(985018),
    d = l(587496);
let f = {
        pink: "pinkCountdown",
    },
    b = r.memo(function (e) {
        let { message: t, onClick: l, countdownEndDate: s, variant: b } = e,
            g = r.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            m = (0, o.A)(null != g ? g : 0, 1e3, void 0, null == g);
        if (null != g && Object.values(m).every((e) => 0 === e)) return null;
        let p = null != b ? d[b] : void 0,
            h = null != b ? d[f[b]] : void 0;
        return (0, n.jsx)(i.DUT, {
            className: a()(d.nagBar, p),
            onClick: l,
            "aria-label": u.intl.string(u.t.zMqLH9),
            children: (0, n.jsxs)("div", {
                className: d.content,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: d.message,
                        children: t,
                    }),
                    null != g &&
                        (0, n.jsx)(c.e, {
                            endDate: g,
                            size: "md",
                            className: h,
                        }),
                ],
            }),
        });
    });
