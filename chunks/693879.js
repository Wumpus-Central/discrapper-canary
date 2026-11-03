r.d(e, { A: () => A, z: () => f });
var n = r(477900),
    a = r(582128),
    s = r(503698),
    i = r.n(s),
    l = r(17928),
    o = r(834730),
    c = r(140735),
    d = r(773669),
    u = r(574520),
    h = r(583846),
    p = r(809854),
    m = r(358509);
function f(t) {
    let {
            entry: e,
            inline: r = !1,
            textColor: s,
            textTabularNumbers: l = !0,
            hovered: d = !1,
            scaleFontToUserSetting: u = !1,
        } = t,
        { now: f } = (0, p.e)(d),
        { timestamp: A, a11yTimeStamp: x } = a.useMemo(
            () => ({ timestamp: (0, h.W6)(e, f), a11yTimeStamp: (0, h.U3)(e, f) }),
            [e, f],
        );
    return (0, n.jsxs)(o.E, {
        className: i()(m.$N, { [m.E1]: r }),
        variant: "body-xs/normal",
        tabularNumbers: l,
        color: s,
        scaleFontToUserSetting: u,
        children: [
            (0, n.jsx)(c.A, { tag: "span", role: "timer", children: x }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: A }),
        ],
    });
}
let A = function (t) {
    let { entry: e, textColor: r, hovered: a = !1, scaleFontToUserSetting: s = !1 } = t,
        i = (0, h.Hd)(e),
        p = (0, l.bG)([d.default], () => d.default.locale),
        m = (0, l.bG)([u.A], () => u.A.getMatchingActivity(e)),
        A = m?.timestamps?.start ?? m?.created_at;
    if (null != A) return (0, n.jsx)(f, { entry: { start: A }, textColor: r, hovered: a, scaleFontToUserSetting: s });
    if (i) return (0, n.jsx)(f, { entry: e, textColor: r, hovered: a, scaleFontToUserSetting: s });
    let x = (0, h.aJ)(e, p),
        S = (0, h.aJ)(e, p, void 0, { formatSet: h.sg });
    return (0, n.jsxs)(o.E, {
        variant: "body-xs/normal",
        color: r,
        lineClamp: 1,
        scaleFontToUserSetting: s,
        children: [
            (0, n.jsx)(c.A, { tag: "span", children: S }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: x }),
        ],
    });
};
