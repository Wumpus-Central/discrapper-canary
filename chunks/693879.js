l.d(t, { A: () => p, z: () => f });
var n = l(477900),
    a = l(582128),
    s = l(503698),
    i = l.n(s),
    r = l(17928),
    o = l(834730),
    u = l(140735),
    c = l(773669),
    m = l(574520),
    d = l(583846),
    v = l(809854),
    x = l(358509);
function f(e) {
    let {
            entry: t,
            inline: l = !1,
            textColor: s,
            textTabularNumbers: r = !0,
            hovered: c = !1,
            scaleFontToUserSetting: m = !1,
        } = e,
        { now: f } = (0, v.e)(c),
        { timestamp: p, a11yTimeStamp: h } = a.useMemo(
            () => ({ timestamp: (0, d.W6)(t, f), a11yTimeStamp: (0, d.U3)(t, f) }),
            [t, f],
        );
    return (0, n.jsxs)(o.E, {
        className: i()(x.$N, { [x.E1]: l }),
        variant: "text-xs/normal",
        tabularNumbers: r,
        color: s,
        scaleFontToUserSetting: m,
        children: [
            (0, n.jsx)(u.A, { tag: "span", role: "timer", children: h }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: p }),
        ],
    });
}
let p = function (e) {
    let { entry: t, textColor: l, hovered: a = !1, scaleFontToUserSetting: s = !1 } = e,
        i = (0, d.Hd)(t),
        v = (0, r.bG)([c.default], () => c.default.locale),
        x = (0, r.bG)([m.A], () => m.A.getMatchingActivity(t)),
        p = x?.timestamps?.start ?? x?.created_at;
    if (null != p) return (0, n.jsx)(f, { entry: { start: p }, textColor: l, hovered: a, scaleFontToUserSetting: s });
    if (i) return (0, n.jsx)(f, { entry: t, textColor: l, hovered: a, scaleFontToUserSetting: s });
    let h = (0, d.aJ)(t, v),
        _ = (0, d.aJ)(t, v, void 0, { formatSet: d.sg });
    return (0, n.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: l,
        lineClamp: 1,
        scaleFontToUserSetting: s,
        children: [
            (0, n.jsx)(u.A, { tag: "span", children: _ }),
            (0, n.jsx)("span", { "aria-hidden": "true", children: h }),
        ],
    });
};
