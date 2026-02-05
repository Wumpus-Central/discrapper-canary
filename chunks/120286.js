"use strict";
s.d(t, { k: () => m });
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(397927),
    o = s(496431),
    c = s(854818),
    d = s(985018),
    u = s(587496);
let g = { pink: "pinkCountdown" },
    m = r.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: l, variant: m } = e,
            _ = r.useMemo(() => {
                if (null == l) return null;
                let e = l instanceof Date ? l : new Date(l);
                return isNaN(e.getTime()) ? null : e;
            }, [l]),
            h = (0, o.A)(_ ?? 0, 1e3, void 0, null == _);
        if (null != _ && Object.values(h).every((e) => 0 === e)) return null;
        let p = null != m ? u[m] : void 0,
            f = null != m ? u[g[m]] : void 0;
        return (0, n.jsx)(i.DUT, {
            className: a()(u.nagBar, p),
            onClick: s,
            "aria-label": d.intl.string(d.t.zMqLH9),
            children: (0, n.jsxs)("div", {
                className: u.content,
                children: [
                    (0, n.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: u.message,
                        children: t,
                    }),
                    null != _ && (0, n.jsx)(c.e, { endDate: _, size: "md", className: f, showSeconds: !0 }),
                ],
            }),
        });
    });
