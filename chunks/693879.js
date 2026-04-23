"use strict";
n.d(t, { A: () => m, z: () => E });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(352139),
    _ = n(583846),
    f = n(982805),
    p = n(809854),
    h = n(322836);
let E = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: o = !0,
                textFontCode: c = !0,
                hovered: d = !1,
                bold: E = !1,
                scaleFontToUserSetting: m = !1,
            } = e,
            { now: g } = (0, p.e)(d),
            { enabled: A } = f.e.useConfig({ location: "active_timestamp" }),
            { timestamp: I, a11yTimeStamp: T } = i.useMemo(
                () => ({ timestamp: (0, _.W6)(t, g), a11yTimeStamp: (0, _.U3)(t, g) }),
                [t, g],
            );
        return (0, r.jsxs)(l.E, {
            className: a()({ [h.$N]: !!A || c, [h.Cr]: !A && E, [h.E1]: n }),
            variant: A ? "text-xs/normal" : "text-xs/medium",
            tabularNumbers: o,
            color: s,
            scaleFontToUserSetting: m,
            children: [
                (0, r.jsx)(u.A, { tag: "span", role: "timer", children: T }),
                (0, r.jsx)("span", { "aria-hidden": "true", children: I }),
            ],
        });
    },
    m = (e) => {
        let { entry: t, textColor: n, hovered: i = !1, bold: s = !1, scaleFontToUserSetting: a = !1 } = e,
            u = (0, _.Hd)(t),
            f = (0, o.bG)([c.default], () => c.default.locale),
            p = (0, o.bG)([d.A], () => d.A.getMatchingActivity(t)),
            h = p?.timestamps?.start ?? p?.created_at;
        return null != h
            ? (0, r.jsx)(E, { entry: { start: h }, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
            : u
              ? (0, r.jsx)(E, { entry: t, textColor: n, hovered: i, bold: s, scaleFontToUserSetting: a })
              : (0, r.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: a,
                    children: (0, _.aJ)(t, f),
                });
    };
