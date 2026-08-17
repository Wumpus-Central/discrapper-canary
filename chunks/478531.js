n.d(t, { A: () => T });
var l = n(477900);
n(582128);
var r = n(503698),
    s = n.n(r),
    i = n(17928),
    a = n(876230),
    u = n(866665),
    c = n(176781),
    o = n(834730),
    d = n(939249),
    f = n(429913),
    h = n(769015),
    m = n(409626),
    p = n(692969),
    g = n(202163),
    A = n(287809),
    v = n(58703),
    C = n(403362),
    E = n(331446),
    I = n(829648),
    y = n(375708),
    x = n(156980);
function S(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, f.h)(t),
        { gameRecord: i } = (0, g.A)(t),
        a = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: m.GameProfileSources.ClipEmbed }),
        u = i?.name ?? r?.name;
    if (null == u) return null;
    let c = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { game: i ?? r, size: h.M.XXSMALL, className: x.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(o.E, {
                    className: x.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        A =
            null != a
                ? (0, l.jsx)(d.D, { className: s()(x.Nn, x.On), onClick: a, children: c })
                : (0, l.jsx)("span", { className: x.Nn, children: c });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            A,
            !0 === n && (0, l.jsx)(o.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let T = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: r,
            title: d,
            guildId: f,
            className: h,
            activeLayer: m,
            playerState: p = a.Q6.PAUSED,
            isControlBarExpanded: g = !0,
            isFullScreen: T = !1,
            showTextContent: R = !0,
        } = e,
        _ = (0, i.yK)([A.default], () => n.map((e) => A.default.getUser(e)).filter(C.Vq) ?? []),
        b = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: s()(x.oK, { [x.pd]: p === a.Q6.PLAYING && !g, [x.aS]: T }, h),
        children: [
            (0, l.jsx)("div", { className: x.Lu }),
            (0, l.jsxs)("div", {
                className: x.s$,
                children: [
                    (0, l.jsxs)("div", {
                        className: x.yR,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.$,
                                children: [
                                    (0, l.jsx)(u.m, {
                                        asContainer: !0,
                                        text: y.intl.string(y.t["/fgfWh"]),
                                        children: (0, l.jsx)(c.x, { className: x.gr, size: "xs", color: "white" }),
                                    }),
                                    R &&
                                        (0, l.jsx)(o.E, {
                                            className: x.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != d && d.length > 0 ? d : y.intl.string(y.t.Cyxddp),
                                        }),
                                ],
                            }),
                            R &&
                                (null != r || null != b) &&
                                (0, l.jsxs)("div", {
                                    className: x.yu,
                                    children: [
                                        (0, l.jsx)(S, { applicationId: r, hasTrailingDate: null != b }),
                                        null != b &&
                                            (0, l.jsx)(o.E, {
                                                className: x.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: b,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    _.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: x.HD,
                            role: "group",
                            "aria-label": y.intl.string(y.t.WTozwe),
                            children: [
                                _.slice(0, 4).map((e) =>
                                    (0, l.jsx)(I.A, { layerContext: m, user: e, guildId: f }, e.id),
                                ),
                                _.length > 4 &&
                                    (0, l.jsx)(E.w, {
                                        layerContext: m,
                                        participants: _,
                                        maxVisibleParticipants: 4,
                                        guildId: f,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
