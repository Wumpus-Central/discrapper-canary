"use strict";
n.d(t, { A: () => E, z: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(574520),
    _ = n(751765),
    h = n(809854),
    f = n(322836);
let p = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: s,
                textTabularNumbers: o = !0,
                hovered: c = !1,
                scaleFontToUserSetting: d = !1,
            } = e,
            { now: p } = (0, h.e)(c),
            { timestamp: E, a11yTimeStamp: m } = r.useMemo(
                () => ({ timestamp: (0, _.W6)(t, p), a11yTimeStamp: (0, _.U3)(t, p) }),
                [t, p],
            );
        return (0, i.jsxs)(l.E, {
            className: a()(f.$N, { [f.E1]: n }),
            variant: "text-xs/normal",
            tabularNumbers: o,
            color: s,
            scaleFontToUserSetting: d,
            children: [
                (0, i.jsx)(u.A, { tag: "span", role: "timer", children: m }),
                (0, i.jsx)("span", { "aria-hidden": "true", children: E }),
            ],
        });
    },
    E = (e) => {
        let { entry: t, textColor: n, hovered: r = !1, scaleFontToUserSetting: s = !1 } = e,
            a = (0, _.Hd)(t),
            u = (0, o.bG)([c.default], () => c.default.locale),
            h = (0, o.bG)([d.A], () => d.A.getMatchingActivity(t)),
            f = h?.timestamps?.start ?? h?.created_at;
        return null != f
            ? (0, i.jsx)(p, { entry: { start: f }, textColor: n, hovered: r, scaleFontToUserSetting: s })
            : a
              ? (0, i.jsx)(p, { entry: t, textColor: n, hovered: r, scaleFontToUserSetting: s })
              : (0, i.jsx)(l.E, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: s,
                    children: (0, _.aJ)(t, u),
                });
    };
