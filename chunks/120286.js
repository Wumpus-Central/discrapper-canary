"use strict";
n.d(t, { k: () => _ });
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(397927),
    o = n(496431),
    c = n(854818),
    d = n(985018),
    u = n(587496);
let g = { pink: "pinkCountdown" },
    _ = l.memo(function (e) {
        let { message: t, onClick: n, countdownEndDate: r, variant: _ } = e,
            m = l.useMemo(() => {
                if (null == r) return null;
                let e = r instanceof Date ? r : new Date(r);
                return isNaN(e.getTime()) ? null : e;
            }, [r]),
            h = (0, o.A)(m ?? 0, 1e3, void 0, null == m);
        if (null != m && Object.values(h).every((e) => 0 === e)) return null;
        let p = null != _ ? u[_] : void 0,
            f = null != _ ? u[g[_]] : void 0;
        return (0, s.jsx)(i.DUT, {
            className: a()(u.nagBar, p),
            onClick: n,
            "aria-label": d.intl.string(d.t["wjws+K"]),
            children: (0, s.jsxs)("div", {
                className: u.content,
                children: [
                    (0, s.jsx)(i.Text, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: u.message,
                        children: t,
                    }),
                    null != m && (0, s.jsx)(c.e, { endDate: m, size: "md", className: f, showSeconds: !0 }),
                ],
            }),
        });
    });
