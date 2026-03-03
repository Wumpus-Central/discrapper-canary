"use strict";
n.d(t, { A: () => m, z: () => h });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(397927),
    u = n(773669),
    c = n(574520),
    d = n(583846),
    _ = n(977788),
    f = n(809854),
    p = n(181691);
let h = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: o = !0,
                textFontCode: u = !0,
                hovered: c = !1,
                bold: h = !1,
                scaleFontToUserSetting: m = !1,
            } = e,
            { now: E } = (0, f.e)(c),
            { enabled: g } = _.e.useConfig({ location: "active_timestamp" }),
            { timestamp: A, a11yTimeStamp: I } = i.useMemo(
                () => ({ timestamp: (0, d.W6)(t, E), a11yTimeStamp: (0, d.U3)(t, E) }),
                [t, E],
            );
        return (0, r.jsxs)(l.Text, {
            className: a()({ [p.$N]: !!g || u, [p.Cr]: !g && h, [p.E1]: n }),
            variant: g ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: o,
            color: s,
            scaleFontToUserSetting: m,
            children: [
                (0, r.jsx)(l.AC4, { tag: "span", role: "timer", children: I }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: A }),
            ],
        });
    },
    m = (e) => {
        let { entry: t, textColor: n, hovered: i = !1, bold: s = !1, scaleFontToUserSetting: a = !1 } = e,
            _ = (0, d.Hd)(t),
            f = (0, o.bG)([u.default], () => u.default.locale),
            p = (0, o.bG)([c.A], () => c.A.getMatchingActivity(t)),
            m = p?.timestamps?.start ?? p?.created_at;
        return null != m
            ? (0, r.jsx)(h, { entry: { start: m }, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
            : _
              ? (0, r.jsx)(h, { entry: t, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
              : (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: a,
                    children: (0, d.aJ)(t, f),
                });
    };
