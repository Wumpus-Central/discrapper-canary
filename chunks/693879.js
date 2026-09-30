n.d(t, { A: () => g, z: () => f });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(574520),
    m = n(583846),
    h = n(809854),
    p = n(358509);
function f(e) {
    let {
            entry: t,
            inline: n = !1,
            textColor: s,
            textTabularNumbers: a = !0,
            hovered: c = !1,
            scaleFontToUserSetting: d = !1,
        } = e,
        { now: f } = (0, h.e)(c),
        { timestamp: g, a11yTimeStamp: x } = i.useMemo(
            () => ({ timestamp: (0, m.W6)(t, f), a11yTimeStamp: (0, m.U3)(t, f) }),
            [t, f],
        );
    return (0, l.jsxs)(o.E, {
        className: r()(p.$N, { [p.E1]: n }),
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
        r = (0, m.Hd)(t),
        h = (0, a.bG)([c.default], () => c.default.locale),
        p = (0, a.bG)([d.A], () => d.A.getMatchingActivity(t)),
        g = p?.timestamps?.start ?? p?.created_at;
    if (null != g) return (0, l.jsx)(f, { entry: { start: g }, textColor: n, hovered: i, scaleFontToUserSetting: s });
    if (r) return (0, l.jsx)(f, { entry: t, textColor: n, hovered: i, scaleFontToUserSetting: s });
    let x = (0, m.aJ)(t, h),
        A = (0, m.aJ)(t, h, void 0, { formatSet: m.sg });
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
