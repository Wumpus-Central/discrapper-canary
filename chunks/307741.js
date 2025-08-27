n.d(t, { ZP: () => S });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(26732),
    d = n(406763),
    f = n(893642),
    _ = n(768581),
    p = n(814225),
    h = n(810568),
    m = n(168524),
    g = n(715318),
    E = n(388032),
    b = n(488463);
function y(e) {
    let { detectedGame: t } = e,
        n = i.useMemo(() => {
            if (null == t) return "";
            let { artwork: e, screenshots: n } = t;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * e.length);
                return e[t];
            }
            if (n.length > 0) {
                let e = Math.floor(Math.random() * n.length);
                return n[e];
            }
            return "";
        }, [t]);
    return (0, r.jsx)("div", {
        className: b.gameArtHero,
        style:
            null != n && n.length > 0
                ? { backgroundImage: 'url("'.concat(n, '")') }
                : { backgroundColor: c.TVs.colors.BG_BRAND.css },
    });
}
function O(e) {
    let { application: t } = e,
        n = null == t ? void 0 : t.getIconURL(160, _.$k ? "webp" : "png");
    return (0, r.jsx)("div", {
        className: b.iconContainer,
        children:
            null != n && n.length > 0
                ? (0, r.jsx)("img", {
                      className: b.gameIcon,
                      src: n,
                      height: 80,
                      alt: E.intl.formatToPlainString(E.t["nh+jWl"], { game: t.name }),
                  })
                : (0, r.jsx)(c.IMN, {
                      size: "lg",
                      className: b.gameIconFallback,
                      color: c.TVs.colors.BACKGROUND_SURFACE_HIGH,
                      style: { backgroundColor: c.TVs.colors.BG_BRAND.css },
                  }),
    });
}
function v(e) {
    var t;
    let { application: n, detectedGame: a } = e,
        o = i.useMemo(() => (null == a ? void 0 : a.genres.map(p.P3).join(", ")), [a]),
        l = null != (t = a.name) ? t : null == n ? void 0 : n.name;
    return (0, r.jsxs)("div", {
        className: b.headingContainer,
        children: [
            (0, r.jsx)(s.X6, {
                variant: "heading-lg/bold",
                color: "header-primary",
                children: l,
            }),
            (0, r.jsx)(s.xv, {
                variant: "text-xs/medium",
                color: "text-secondary",
                children: o,
            }),
        ],
    });
}
function I(e) {
    var t;
    let { detectedGame: n, openFullGameProfile: i } = e;
    return (0, r.jsxs)("div", {
        className: b.bodyContainer,
        children: [
            (0, r.jsxs)("div", {
                className: b.summaryContainer,
                children: [
                    (0, r.jsx)(s.xv, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        lineClamp: 3,
                        children: null != (t = n.summaryLocalized) ? t : n.summary,
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: b.clickable,
                        onClick: i,
                        children: (0, r.jsx)(s.xv, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: E.intl.string(E.t.lBeKY2),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(c.zxk, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                text: "View Game Profile",
                fullWidth: !0,
            }),
        ],
    });
}
function T(e) {
    let { application: t } = e,
        n = i.useMemo(() => (0, h.fP)(), []),
        a = (0, l.e7)([f.Z], () => f.Z.getMute(t.id)),
        o = i.useMemo(() => (a ? E.intl.string(E.t.tpvw4e) : E.intl.string(E.t["6EwEws"])), [a]);
    return (0, r.jsxs)("div", {
        className: b.actionButtonsContainer,
        children: [
            (0, r.jsx)(c.DY3, {
                element: "span",
                text: o,
                "aria-label": o,
                delay: 750,
                children: (0, r.jsx)(c.P3F, {
                    className: b.actionButton,
                    "aria-label": o,
                    onClick: () => {
                        (0, u.Eq)({
                            gameName: t.name,
                            applicationId: t.id,
                            label: a ? u.$_.UNMUTED : u.$_.MUTED,
                            source: u.UE.MINI_GAME_PROFILE_BELL_ICON,
                        }),
                            (0, d.X)(t.id, !a);
                    },
                    children: a
                        ? (0, r.jsx)(c.owu, {
                              size: "xs",
                              color: c.TVs.colors.WHITE,
                          })
                        : (0, r.jsx)(c.Dkj, {
                              size: "xs",
                              color: c.TVs.colors.WHITE,
                          }),
                }),
            }),
            (0, r.jsx)(g.Z, {
                applicationId: t.id,
                viewId: n,
                className: b.actionButton,
            }),
        ],
    });
}
function S(e) {
    let { application: t, detectedGame: n, className: a, onClose: s } = e,
        l = (0, m.Z)(
            {
                location: "MiniGameProfile",
                applicationId: t.id,
                source: h.m1.MiniGameProfile,
                trackEntryPointImpression: !0,
                sourceUserId: void 0,
            },
            {},
        ),
        c = i.useCallback(
            (e) => {
                null == s || s(), null == l || l(e);
            },
            [s, l],
        );
    return (0, r.jsxs)("div", {
        className: o()(b.container, a),
        children: [
            (0, r.jsx)(y, { detectedGame: n }),
            (0, r.jsx)(T, { application: t }),
            (0, r.jsx)(O, { application: t }),
            (0, r.jsx)(v, {
                application: t,
                detectedGame: n,
            }),
            (0, r.jsx)(I, {
                application: t,
                detectedGame: n,
                openFullGameProfile: c,
            }),
        ],
    });
}
