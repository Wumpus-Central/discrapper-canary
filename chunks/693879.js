"use strict";
n.d(t, { A: () => g, z: () => p });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(574520),
    h = n(583846),
    m = n(809854),
    f = n(907996);
function p(e) {
    let {
            entry: t,
            inline: n = !1,
            textColor: s,
            textTabularNumbers: a = !0,
            hovered: c = !1,
            scaleFontToUserSetting: d = !1,
        } = e,
        { now: p } = (0, m.e)(c),
        { timestamp: g, a11yTimeStamp: x } = i.useMemo(
            () => ({ timestamp: (0, h.W6)(t, p), a11yTimeStamp: (0, h.U3)(t, p) }),
            [t, p],
        );
    return (0, l.jsxs)(o.E, {
        className: r()(f.$N, { [f.E1]: n }),
        variant: "text-xs/normal",
        tabularNumbers: a,
        color: s,
        scaleFontToUserSetting: d,
        children: [
            (0, l.jsx)(u.A, { tag: "span", role: "timer", children: x }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: g }),
        ],
    });
}
let g = function (e) {
    let { entry: t, textColor: n, hovered: i = !1, scaleFontToUserSetting: s = !1 } = e,
        r = (0, h.Hd)(t),
        m = (0, a.bG)([c.default], () => c.default.locale),
        f = (0, a.bG)([d.A], () => d.A.getMatchingActivity(t)),
        g = f?.timestamps?.start ?? f?.created_at;
    if (null != g) return (0, l.jsx)(p, { entry: { start: g }, textColor: n, hovered: i, scaleFontToUserSetting: s });
    if (r) return (0, l.jsx)(p, { entry: t, textColor: n, hovered: i, scaleFontToUserSetting: s });
    let x = (0, h.aJ)(t, m),
        A = (0, h.aJ)(t, m, void 0, { formatSet: h.sg });
    return (0, l.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: n,
        lineClamp: 1,
        scaleFontToUserSetting: s,
        children: [
            (0, l.jsx)(u.A, { tag: "span", children: A }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: x }),
        ],
    });
};
