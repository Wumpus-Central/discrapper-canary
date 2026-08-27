n.d(t, { A: () => T });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    s = n(17928),
    a = n(876230),
    u = n(866665),
    o = n(176781),
    c = n(834730),
    d = n(939249),
    f = n(429913),
    h = n(769015),
    m = n(409626),
    p = n(692969),
    g = n(202163),
    y = n(287809),
    v = n(58703),
    A = n(403362),
    E = n(331446),
    x = n(829648),
    C = n(375708),
    S = n(447177);
function I(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        r = (0, f.h)(t),
        { gameRecord: s } = (0, g.A)(t),
        a = (0, p.A)({ applicationId: t, location: "ClipEmbed", source: m.GameProfileSources.ClipEmbed }),
        u = s?.name ?? r?.name;
    if (null == u) return null;
    let o = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { game: s ?? r, size: h.M.XXSMALL, className: S.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: S.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        y =
            null != a
                ? (0, l.jsx)(d.D, { className: i()(S.Nn, S.On), onClick: a, children: o })
                : (0, l.jsx)("span", { className: S.Nn, children: o });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            y,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
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
        b = (0, s.yK)([y.default], () => n.map((e) => y.default.getUser(e)).filter(A.Vq) ?? []),
        w = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: i()(S.oK, { [S.pd]: p === a.Q6.PLAYING && !g, [S.aS]: T }, h),
        children: [
            (0, l.jsx)("div", { className: S.Lu }),
            (0, l.jsxs)("div", {
                className: S.s$,
                children: [
                    (0, l.jsxs)("div", {
                        className: S.yR,
                        children: [
                            (0, l.jsxs)("div", {
                                className: S.$,
                                children: [
                                    (0, l.jsx)(u.m, {
                                        asContainer: !0,
                                        text: C.intl.string(C.t["/fgfWh"]),
                                        children: (0, l.jsx)(o.x, { className: S.gr, size: "xs", color: "white" }),
                                    }),
                                    R &&
                                        (0, l.jsx)(c.E, {
                                            className: S.DD,
                                            variant: "text-md/semibold",
                                            color: "text-overlay-light",
                                            children: null != d && d.length > 0 ? d : C.intl.string(C.t.Cyxddp),
                                        }),
                                ],
                            }),
                            R &&
                                (null != r || null != w) &&
                                (0, l.jsxs)("div", {
                                    className: S.yu,
                                    children: [
                                        (0, l.jsx)(I, { applicationId: r, hasTrailingDate: null != w }),
                                        null != w &&
                                            (0, l.jsx)(c.E, {
                                                className: S.BR,
                                                variant: "text-sm/normal",
                                                color: "text-overlay-light",
                                                children: w,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                    b.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: S.HD,
                            role: "group",
                            "aria-label": C.intl.string(C.t.WTozwe),
                            children: [
                                b
                                    .slice(0, 4)
                                    .map((e) => (0, l.jsx)(x.A, { layerContext: m, user: e, guildId: f }, e.id)),
                                b.length > 4 &&
                                    (0, l.jsx)(E.w, {
                                        layerContext: m,
                                        participants: b,
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
