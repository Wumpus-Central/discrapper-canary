"use strict";
s.d(t, { k: () => _ });
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(939249),
    o = s(834730),
    c = s(496431),
    d = s(854818),
    u = s(985018),
    g = s(893489);
let h = { pink: "pinkCountdown" },
    _ = l.memo(function (e) {
        let { message: t, onClick: s, countdownEndDate: r, variant: _ } = e,
            m = l.useMemo(() => {
                if (null == r) return null;
                let e = r instanceof Date ? r : new Date(r);
                return isNaN(e.getTime()) ? null : e;
            }, [r]),
            p = (0, c.A)(m ?? 0, 1e3, void 0, null == m);
        if (null != m && Object.values(p).every((e) => 0 === e)) return null;
        let f = null != _ ? g[_] : void 0,
            E = null != _ ? g[h[_]] : void 0;
        return (0, n.jsx)(i.D, {
            className: a()(g.nagBar, f),
            onClick: s,
            "aria-label": u.intl.string(u.t["wjws+K"]),
            children: (0, n.jsxs)("div", {
                className: g.content,
                children: [
                    (0, n.jsx)(o.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        className: g.message,
                        children: t,
                    }),
                    null != m && (0, n.jsx)(d.e, { endDate: m, size: "md", className: E, showSeconds: !0 }),
                ],
            }),
        });
    });
