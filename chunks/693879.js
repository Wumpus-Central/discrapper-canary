"use strict";
n.d(t, { A: () => I, z: () => h });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(834730),
    d = n(140735),
    c = n(773669),
    u = n(574520),
    _ = n(583846),
    E = n(809854),
    A = n(907996);
function h(e) {
    let {
            entry: t,
            inline: n = !1,
            textColor: a,
            textTabularNumbers: l = !0,
            hovered: c = !1,
            scaleFontToUserSetting: u = !1,
        } = e,
        { now: h } = (0, E.e)(c),
        { timestamp: I, a11yTimeStamp: f } = r.useMemo(
            () => ({ timestamp: (0, _.W6)(t, h), a11yTimeStamp: (0, _.U3)(t, h) }),
            [t, h],
        );
    return (0, i.jsxs)(o.E, {
        className: s()(A.$N, { [A.E1]: n }),
        variant: "text-xs/normal",
        tabularNumbers: l,
        color: a,
        scaleFontToUserSetting: u,
        children: [
            (0, i.jsx)(d.A, { tag: "span", role: "timer", children: f }),
            (0, i.jsx)("span", { "aria-hidden": "true", children: I }),
        ],
    });
}
let I = function (e) {
    let { entry: t, textColor: n, hovered: r = !1, scaleFontToUserSetting: a = !1 } = e,
        s = (0, _.Hd)(t),
        d = (0, l.bG)([c.default], () => c.default.locale),
        E = (0, l.bG)([u.A], () => u.A.getMatchingActivity(t)),
        A = E?.timestamps?.start ?? E?.created_at;
    return null != A
        ? (0, i.jsx)(h, { entry: { start: A }, textColor: n, hovered: r, scaleFontToUserSetting: a })
        : s
          ? (0, i.jsx)(h, { entry: t, textColor: n, hovered: r, scaleFontToUserSetting: a })
          : (0, i.jsx)(o.E, {
                variant: "text-xs/normal",
                color: n,
                lineClamp: 1,
                scaleFontToUserSetting: a,
                children: (0, _.aJ)(t, d),
            });
};
