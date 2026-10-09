n.d(t, { A: () => f, z: () => v });
var r = n(477900),
    i = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(17928),
    o = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(574520),
    h = n(583846),
    A = n(809854),
    p = n(358509);
function v(e) {
    let {
            entry: t,
            inline: n = !1,
            textColor: a,
            textTabularNumbers: s = !0,
            hovered: c = !1,
            scaleFontToUserSetting: d = !1,
        } = e,
        { now: v } = (0, A.e)(c),
        { timestamp: f, a11yTimeStamp: g } = i.useMemo(
            () => ({ timestamp: (0, h.W6)(t, v), a11yTimeStamp: (0, h.U3)(t, v) }),
            [t, v],
        );
    return (0, r.jsxs)(o.E, {
        className: l()(p.$N, { [p.E1]: n }),
        variant: "text-xs/normal",
        tabularNumbers: s,
        color: a,
        scaleFontToUserSetting: d,
        children: [
            (0, r.jsx)(u.A, { tag: "span", role: "timer", children: g }),
            (0, r.jsx)("span", { "aria-hidden": "true", children: f }),
        ],
    });
}
let f = function (e) {
    let { entry: t, textColor: n, hovered: i = !1, scaleFontToUserSetting: a = !1 } = e,
        l = (0, h.Hd)(t),
        A = (0, s.bG)([c.default], () => c.default.locale),
        p = (0, s.bG)([d.A], () => d.A.getMatchingActivity(t)),
        f = p?.timestamps?.start ?? p?.created_at;
    if (null != f) return (0, r.jsx)(v, { entry: { start: f }, textColor: n, hovered: i, scaleFontToUserSetting: a });
    if (l) return (0, r.jsx)(v, { entry: t, textColor: n, hovered: i, scaleFontToUserSetting: a });
    let g = (0, h.aJ)(t, A),
        m = (0, h.aJ)(t, A, void 0, { formatSet: h.sg });
    return (0, r.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: n,
        lineClamp: 1,
        scaleFontToUserSetting: a,
        children: [
            (0, r.jsx)(u.A, { tag: "span", children: m }),
            (0, r.jsx)("span", { "aria-hidden": "true", children: g }),
        ],
    });
};
