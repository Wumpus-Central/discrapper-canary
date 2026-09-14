n.d(t, { A: () => O });
var l = n(477900);
n(582128);
var i = n(503698),
    r = n.n(i),
    a = n(17928),
    s = n(876230),
    o = n(939249),
    u = n(477155),
    c = n(834730),
    d = n(866665),
    m = n(176781),
    p = n(429913),
    h = n(769015),
    f = n(409626),
    g = n(692969),
    x = n(202163),
    y = n(287809),
    v = n(58703),
    N = n(403362),
    E = n(331446),
    A = n(829648),
    j = n(375708),
    w = n(447177);
function C(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, p.h)(t),
        { gameRecord: a } = (0, x.A)(t),
        s = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: f.GameProfileSources.ClipEmbed }),
        u = a?.name ?? i?.name;
    if (null == u) return null;
    let d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { game: a ?? i, size: h.M.XXSMALL, className: w.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: w.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        m =
            null != s
                ? (0, l.jsx)(o.D, { className: r()(w.Nn, w.On), onClick: s, children: d })
                : (0, l.jsx)("span", { className: w.Nn, children: d });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let O = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: p,
            guildId: h,
            className: f,
            activeLayer: g,
            playerState: x = s.Q6.PAUSED,
            isControlBarExpanded: O = !0,
            isFullScreen: k = !1,
            showTextContent: S = !0,
            isGridView: V = !1,
            setIsGridView: W,
        } = e,
        b = (0, a.yK)([y.default], () => n.map((e) => y.default.getUser(e)).filter(N.Vq) ?? []),
        I = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: r()(w.oK, { [w.pd]: x === s.Q6.PLAYING && !O, [w.aS]: k }, f),
        children: [
            (0, l.jsx)("div", { className: w.Lu }),
            (0, l.jsxs)("div", {
                className: w.s$,
                children: [
                    V &&
                        O &&
                        (0, l.jsxs)(o.D, {
                            className: w.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), W?.(!1));
                            },
                            children: [
                                (0, l.jsx)(u.r, { color: "white", size: "xs" }),
                                (0, l.jsx)(c.E, {
                                    variant: "text-md/semibold",
                                    color: "text-overlay-light",
                                    children: "Back to single mode",
                                }),
                            ],
                        }),
                    !V &&
                        (0, l.jsxs)("div", {
                            className: w.yR,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: w.$,
                                    children: [
                                        (0, l.jsx)(d.m, {
                                            asContainer: !0,
                                            text: j.intl.string(j.t["/fgfWh"]),
                                            children: (0, l.jsx)(m.x, { className: w.gr, size: "xs", color: "white" }),
                                        }),
                                        S &&
                                            (0, l.jsx)(c.E, {
                                                className: w.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != p && p.length > 0 ? p : j.intl.string(j.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                S &&
                                    (null != i || null != I) &&
                                    (0, l.jsxs)("div", {
                                        className: w.yu,
                                        children: [
                                            (0, l.jsx)(C, { applicationId: i, hasTrailingDate: null != I }),
                                            null != I &&
                                                (0, l.jsx)(c.E, {
                                                    className: w.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: I,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !V &&
                        b.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: w.HD,
                            role: "group",
                            "aria-label": j.intl.string(j.t.WTozwe),
                            children: [
                                b
                                    .slice(0, 4)
                                    .map((e) => (0, l.jsx)(A.A, { layerContext: g, user: e, guildId: h }, e.id)),
                                b.length > 4 &&
                                    (0, l.jsx)(E.w, {
                                        layerContext: g,
                                        participants: b,
                                        maxVisibleParticipants: 4,
                                        guildId: h,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
