n.d(t, { A: () => O });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(876230),
    o = n(866665),
    u = n(176781),
    c = n(834730),
    d = n(939249),
    m = n(429913),
    p = n(769015),
    h = n(409626),
    f = n(692969),
    g = n(202163),
    x = n(287809),
    y = n(58703),
    v = n(403362),
    N = n(331446),
    E = n(829648),
    A = n(375708),
    w = n(447177);
function j(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, m.h)(t),
        { gameRecord: a } = (0, g.A)(t),
        s = (0, f.A)({ applicationId: t, location: "ClipEmbed", source: h.GameProfileSources.ClipEmbed }),
        o = a?.name ?? i?.name;
    if (null == o) return null;
    let u = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(p.A, { game: a ?? i, size: p.M.XXSMALL, className: w.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: w.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: o,
                }),
            ],
        }),
        x =
            null != s
                ? (0, l.jsx)(d.D, { className: r()(w.Nn, w.On), onClick: s, children: u })
                : (0, l.jsx)("span", { className: w.Nn, children: u });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            x,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let O = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: d,
            guildId: m,
            className: p,
            activeLayer: h,
            playerState: f = s.Q6.PAUSED,
            isControlBarExpanded: g = !0,
            isFullScreen: O = !1,
            showTextContent: C = !0,
        } = e,
        S = (0, a.yK)([x.default], () => n.map((e) => x.default.getUser(e)).filter(v.Vq) ?? []),
        V = null != t ? (0, y.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: r()(w.oK, { [w.pd]: f === s.Q6.PLAYING && !g, [w.aS]: O }, p),
        children: [
            (0, l.jsx)("div", { className: w.Lu }),
            (0, l.jsxs)("div", {
                className: w.s$,
                children: [
                    (0, l.jsxs)("div", {
                        className: w.yR,
                        children: [
                            (0, l.jsxs)("div", {
                                className: w.$,
                                children: [
                                    (0, l.jsx)(o.m, {
                                        asContainer: !0,
                                        text: A.intl.string(A.t["/fgfWh"]),
                                        children: (0, l.jsx)(u.x, { className: w.gr, size: "xs", color: "white" }),
                                    }),
                                    C &&
                                        (0, l.jsx)(c.E, {
                                            className: w.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != d && d.length > 0 ? d : A.intl.string(A.t.Cyxddp),
                                        }),
                                ],
                            }),
                            C &&
                                (null != i || null != V) &&
                                (0, l.jsxs)("div", {
                                    className: w.yu,
                                    children: [
                                        (0, l.jsx)(j, { applicationId: i, hasTrailingDate: null != V }),
                                        null != V &&
                                            (0, l.jsx)(c.E, {
                                                className: w.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: V,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    S.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: w.HD,
                            role: "group",
                            "aria-label": A.intl.string(A.t.WTozwe),
                            children: [
                                S.slice(0, 4).map((e) =>
                                    (0, l.jsx)(E.A, { layerContext: h, user: e, guildId: m }, e.id),
                                ),
                                S.length > 4 &&
                                    (0, l.jsx)(N.w, {
                                        layerContext: h,
                                        participants: S,
                                        maxVisibleParticipants: 4,
                                        guildId: m,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
