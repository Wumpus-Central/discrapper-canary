n.d(t, { A: () => A });
var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(17928),
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
    E = n(403362),
    N = n(331446),
    O = n(829648),
    C = n(185973),
    j = n(105292),
    S = n(447177);
function w(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, p.h)(t),
        { gameRecord: r } = (0, x.A)(t),
        s = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: f.GameProfileSources.ClipEmbed }),
        u = r?.name ?? i?.name;
    if (null == u) return null;
    let d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { game: r ?? i, size: h.M.XXSMALL, className: S.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: S.mO,
                    variant: "text-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        m =
            null != s
                ? (0, l.jsx)(o.D, { className: a()(S.Nn, S.On), onClick: s, children: d })
                : (0, l.jsx)("span", { className: S.Nn, children: d });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m,
            !0 === n && (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let A = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: p,
            guildId: h,
            className: f,
            activeLayer: g,
            playerState: x = s.Q6.PAUSED,
            isControlBarExpanded: A = !0,
            isFullScreen: b = !1,
            showTextContent: k = !0,
            isGridView: R = !1,
            setIsGridView: I,
        } = e,
        T = (0, r.yK)([y.default], () => n.map((e) => y.default.getUser(e)).filter(E.Vq) ?? []),
        V = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: a()(S.oK, { [S.pd]: x === s.Q6.PLAYING && !A, [S.aS]: b }, f),
        children: [
            (0, l.jsx)("div", { className: S.Lu }),
            (0, l.jsxs)("div", {
                className: S.s$,
                children: [
                    R &&
                        A &&
                        (0, l.jsxs)(o.D, {
                            className: S.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), I?.(!1));
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
                    !R &&
                        (0, l.jsxs)("div", {
                            className: S.yR,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: S.$,
                                    children: [
                                        (0, l.jsx)(d.m, {
                                            asContainer: !0,
                                            text: j.intl.string(j.t["/fgfWh"]),
                                            children: (0, l.jsx)(m.x, { className: S.gr, size: "xs", color: "white" }),
                                        }),
                                        k &&
                                            (0, l.jsx)(c.E, {
                                                className: S.DD,
                                                variant: "text-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != p && p.length > 0 ? p : j.intl.string(j.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                k &&
                                    (null != i || null != V) &&
                                    (0, l.jsxs)("div", {
                                        className: S.yu,
                                        children: [
                                            (0, l.jsx)(w, { applicationId: i, hasTrailingDate: null != V }),
                                            null != V &&
                                                (0, l.jsx)(c.E, {
                                                    className: S.BR,
                                                    variant: "text-sm/normal",
                                                    color: "text-overlay-light",
                                                    children: V,
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    !R &&
                        T.length > 0 &&
                        (0, l.jsxs)("div", {
                            className: S.HD,
                            role: "group",
                            "aria-label": j.intl.string(j.t.WTozwe),
                            children: [
                                T.slice(0, 4).map((e) =>
                                    (0, l.jsx)(O.A, { layerContext: g, user: e, guildId: h }, e.id),
                                ),
                                T.length > 4 &&
                                    (0, l.jsx)(N.w, {
                                        layerContext: g,
                                        participants: T,
                                        maxVisibleParticipants: 4,
                                        overflowLabel: j.intl.formatToPlainString(C.default.CJ0I6C, {
                                            count: T.length - 4,
                                        }),
                                        guildId: h,
                                    }),
                            ],
                        }),
                ],
            }),
        ],
    });
};
