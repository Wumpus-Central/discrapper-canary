"use strict";
n.d(t, { A: () => _, z: () => g });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(834730),
    c = n(140735),
    u = n(773669),
    d = n(352139),
    h = n(583846),
    m = n(982805),
    p = n(809854),
    f = n(322836);
let g = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: a = !0,
                textFontCode: u = !0,
                hovered: d = !1,
                bold: g = !1,
                scaleFontToUserSetting: _ = !1,
            } = e,
            { now: x } = (0, p.e)(d),
            { enabled: A } = m.e.useConfig({ location: "active_timestamp" }),
            { timestamp: C, a11yTimeStamp: E } = l.useMemo(
                () => ({ timestamp: (0, h.W6)(t, x), a11yTimeStamp: (0, h.U3)(t, x) }),
                [t, x],
            );
        return (0, i.jsxs)(o.E, {
            className: r()({ [f.$N]: !!A || u, [f.Cr]: !A && g, [f.E1]: n }),
            variant: A ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: a,
            color: s,
            scaleFontToUserSetting: _,
            children: [
                (0, i.jsx)(c.A, { tag: "span", role: "timer", children: E }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: C }),
            ],
        });
    },
    _ = (e) => {
        let { entry: t, textColor: n, hovered: l = !1, bold: s = !1, scaleFontToUserSetting: r = !1 } = e,
            c = (0, h.Hd)(t),
            m = (0, a.bG)([u.default], () => u.default.locale),
            p = (0, a.bG)([d.A], () => d.A.getMatchingActivity(t)),
            f = p?.timestamps?.start ?? p?.created_at;
        return null != f
            ? (0, i.jsx)(g, { entry: { start: f }, textColor: n, hovered: l, bold: s, scaleFontToUserSetting: r })
            : c
              ? (0, i.jsx)(g, { entry: t, textColor: n, hovered: l, bold: s, scaleFontToUserSetting: r })
              : (0, i.jsx)(o.E, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: r,
                    children: (0, h.aJ)(t, m),
                });
    };
