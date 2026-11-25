var l = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    s = n(855986),
    o = n(834730),
    u = n(140735),
    c = n(773669),
    d = n(574520),
    m = n(583846),
    A = n(809854),
    p = n(358509);
function h(e) {
    let {
            entry: t,
            inline: n = !1,
            textColor: a,
            textTabularNumbers: s = !0,
            hovered: c = !1,
            scaleFontToUserSetting: d = !1,
        } = e,
        { now: h } = (0, A.e)(c),
        { timestamp: f, a11yTimeStamp: g } = i.useMemo(
            () => ({ timestamp: (0, m.W6)(t, h), a11yTimeStamp: (0, m.U3)(t, h) }),
            [t, h],
        );
    return (0, l.jsxs)(o.E, {
        className: r()(p.$N, { [p.E1]: n }),
        variant: "body-xs/normal",
        tabularNumbers: s,
        color: a,
        scaleFontToUserSetting: d,
        children: [
            (0, l.jsx)(u.A, { tag: "span", role: "timer", children: g }),
            (0, l.jsx)("span", { "aria-hidden": "true", children: f }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { entry: t, textColor: n, hovered: i = !1, scaleFontToUserSetting: a = !1 } = e,
                r = (0, m.Hd)(t),
                A = (0, s.bG)([c.default], () => c.default.locale),
                p = (0, s.bG)([d.A], () => d.A.getMatchingActivity(t)),
                f = p?.timestamps?.start ?? p?.created_at;
            if (null != f)
                return (0, l.jsx)(h, { entry: { start: f }, textColor: n, hovered: i, scaleFontToUserSetting: a });
            if (r) return (0, l.jsx)(h, { entry: t, textColor: n, hovered: i, scaleFontToUserSetting: a });
            let g = (0, m.aJ)(t, A),
                x = (0, m.aJ)(t, A, void 0, { formatSet: m.sg });
            return (0, l.jsxs)(o.E, {
                variant: "body-xs/normal",
                color: n,
                lineClamp: 1,
                scaleFontToUserSetting: a,
                children: [
                    (0, l.jsx)(u.A, { tag: "span", children: x }),
                    (0, l.jsx)("span", { "aria-hidden": "true", children: g }),
                ],
            });
        },
        z: h,
    },
);
