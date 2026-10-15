r.d(e, { A: () => f, z: () => x });
var n = r(477900),
    a = r(582128),
    s = r(503698),
    i = r.n(s),
    l = r(17928),
    o = r(834730),
    c = r(140735),
    u = r(773669),
    d = r(574520),
    h = r(583846),
    p = r(809854),
    m = r(358509);
function x(t) {
    let {
            entry: e,
            inline: r = !1,
            textColor: s,
            textTabularNumbers: l = !0,
            hovered: u = !1,
            scaleFontToUserSetting: d = !1,
        } = t,
        { now: x } = (0, p.e)(u),
        { timestamp: f, a11yTimeStamp: A } = a.useMemo(
            () => ({ timestamp: (0, h.W6)(e, x), a11yTimeStamp: (0, h.U3)(e, x) }),
            [e, x],
        );
    return (0, n.jsxs)(o.E, {
        className: i()(m.$N, { [m.E1]: r }),
        variant: "text-xs/normal",
        tabularNumbers: l,
        color: s,
        scaleFontToUserSetting: d,
        children: [
            (0, n.jsx)(c.A, { tag: "span", role: "timer", children: A }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: f }),
        ],
    });
}
let f = function (t) {
    let { entry: e, textColor: r, hovered: a = !1, scaleFontToUserSetting: s = !1 } = t,
        i = (0, h.Hd)(e),
        p = (0, l.bG)([u.default], () => u.default.locale),
        m = (0, l.bG)([d.A], () => d.A.getMatchingActivity(e)),
        f = m?.timestamps?.start ?? m?.created_at;
    if (null != f) return (0, n.jsx)(x, { entry: { start: f }, textColor: r, hovered: a, scaleFontToUserSetting: s });
    if (i) return (0, n.jsx)(x, { entry: e, textColor: r, hovered: a, scaleFontToUserSetting: s });
    let A = (0, h.aJ)(e, p),
        S = (0, h.aJ)(e, p, void 0, { formatSet: h.sg });
    return (0, n.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: r,
        lineClamp: 1,
        scaleFontToUserSetting: s,
        children: [
            (0, n.jsx)(c.A, { tag: "span", children: S }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: A }),
        ],
    });
};
