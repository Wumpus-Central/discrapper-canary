n.d(t, {
    k: () => f,
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(397927),
    o = n(496431),
    c = n(854818),
    u = n(985018),
    d = n(587496);
let g = {
        pink: "pinkCountdown",
    },
    f = l.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: s, variant: f } = e,
            m = l.useMemo(() => {
                if (null == s) return null;
                let e = s instanceof Date ? s : new Date(s);
                return isNaN(e.getTime()) ? null : e;
            }, [s]),
            p = (0, o.A)(null != m ? m : 0, 1e3, void 0, null == m);
        if (null != m && Object.values(p).every((e) => 0 === e)) return null;
        let _ = null != f ? d[f] : void 0,
            b = null != f ? d[g[f]] : void 0;
        return (0, r.jsx)(i.DUT, {
            className: a()(d.nagBar, _),
            onClick: n,
            "aria-label": u.intl.string(u.t.zMqLH9),
            children: (0, r.jsxs)("div", {
                className: d.content,
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: d.message,
                        children: t,
                    }),
                    null != m &&
                        (0, r.jsx)(c.e, {
                            endDate: m,
                            size: "md",
                            className: b,
                            showSeconds: !0,
                        }),
                ],
            }),
        });
    });
