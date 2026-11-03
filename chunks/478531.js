n.d(t, { A: () => w });
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
    y = n(202163),
    x = n(287809),
    v = n(58703),
    E = n(403362),
    N = n(331446),
    O = n(829648),
    C = n(185973),
    b = n(105292),
    j = n(447177);
function S(e) {
    let { applicationId: t, hasTrailingDate: n } = e,
        i = (0, p.h)(t),
        { gameRecord: r } = (0, y.Ay)(t),
        s = (0, g.A)({ applicationId: t, location: "ClipEmbed", source: f.GameProfileSources.ClipEmbed }),
        u = r?.name ?? i?.name;
    if (null == u) return null;
    let d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(h.A, { game: r ?? i, size: h.M.XXSMALL, className: j.Gt, allowUnknownGameIcon: !1 }),
                (0, l.jsx)(c.E, {
                    className: j.mO,
                    variant: "body-sm/normal",
                    color: "text-overlay-light",
                    children: u,
                }),
            ],
        }),
        m =
            null != s
                ? (0, l.jsx)(o.D, { className: a()(j.Nn, j.On), onClick: s, children: d })
                : (0, l.jsx)("span", { className: j.Nn, children: d });
    return (0, l.jsxs)(l.Fragment, {
        children: [
            m,
            !0 === n && (0, l.jsx)(c.E, { variant: "body-sm/normal", color: "text-overlay-light", children: "\xb7" }),
        ],
    });
}
let w = function (e) {
    let {
            createdAt: t,
            participantIds: n,
            applicationId: i,
            title: p,
            guildId: h,
            className: f,
            activeLayer: g,
            playerState: y = s.Q6.PAUSED,
            isControlBarExpanded: w = !0,
            isFullScreen: A = !1,
            showTextContent: k = !0,
            isGridView: R = !1,
            setIsGridView: I,
        } = e,
        T = (0, r.yK)([x.default], () => n.map((e) => x.default.getUser(e)).filter(E.Vq) ?? []),
        V = null != t ? (0, v.Fe)(new Date(t)) : null;
    return (0, l.jsxs)("div", {
        className: a()(j.oK, { [j.pd]: y === s.Q6.PLAYING && !w, [j.aS]: A }, f),
        children: [
            (0, l.jsx)("div", { className: j.Lu }),
            (0, l.jsxs)("div", {
                className: j.s$,
                children: [
                    R &&
                        w &&
                        (0, l.jsxs)(o.D, {
                            className: j.i9,
                            onClick: function (e) {
                                (e.stopPropagation(), I?.(!1));
                            },
                            children: [
                                (0, l.jsx)(u.r, { color: "white", size: "xs" }),
                                (0, l.jsx)(c.E, {
                                    variant: "body-md/semibold",
                                    color: "text-overlay-light",
                                    children: "Back to single mode",
                                }),
                            ],
                        }),
                    !R &&
                        (0, l.jsxs)("div", {
                            className: j.yR,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: j.$,
                                    children: [
                                        (0, l.jsx)(d.m, {
                                            asContainer: !0,
                                            text: b.intl.string(b.t["/fgfWh"]),
                                            children: (0, l.jsx)(m.x, { className: j.gr, size: "xs", color: "white" }),
                                        }),
                                        k &&
                                            (0, l.jsx)(c.E, {
                                                className: j.DD,
                                                variant: "body-md/semibold",
                                                color: "text-overlay-light",
                                                children: null != p && p.length > 0 ? p : b.intl.string(b.t.Cyxddp),
                                            }),
                                    ],
                                }),
                                k &&
                                    (null != i || null != V) &&
                                    (0, l.jsxs)("div", {
                                        className: j.yu,
                                        children: [
                                            (0, l.jsx)(S, { applicationId: i, hasTrailingDate: null != V }),
                                            null != V &&
                                                (0, l.jsx)(c.E, {
                                                    className: j.BR,
                                                    variant: "body-sm/normal",
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
                            className: j.HD,
                            role: "group",
                            "aria-label": b.intl.string(b.t.WTozwe),
                            children: [
                                T.slice(0, 4).map((e) =>
                                    (0, l.jsx)(O.A, { layerContext: g, user: e, guildId: h }, e.id),
                                ),
                                T.length > 4 &&
                                    (0, l.jsx)(N.w, {
                                        layerContext: g,
                                        participants: T,
                                        maxVisibleParticipants: 4,
                                        overflowLabel: b.intl.formatToPlainString(C.default.CJ0I6C, {
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
