n.d(t, { ZP: () => A });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(28664),
    u = n(481060),
    d = n(26732),
    f = n(406763),
    _ = n(893642),
    p = n(768581),
    h = n(814225),
    m = n(810568),
    g = n(168524),
    E = n(715318),
    b = n(388032),
    y = n(488463);
function O(e) {
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
        className: y.gameArtHero,
        style:
            null != n && n.length > 0
                ? { backgroundImage: 'url("'.concat(n, '")') }
                : { backgroundColor: u.TVs.colors.BG_BRAND.css },
    });
}
function v(e) {
    let { application: t } = e,
        n = null == t ? void 0 : t.getIconURL(160, p.$k ? "webp" : "png");
    return (0, r.jsx)("div", {
        className: y.iconContainer,
        children:
            null != n && n.length > 0
                ? (0, r.jsx)("img", {
                      className: y.gameIcon,
                      src: n,
                      height: 80,
                      alt: b.intl.formatToPlainString(b.t["nh+jWk"], { game: t.name }),
                  })
                : (0, r.jsx)(u.IMN, {
                      size: "lg",
                      className: y.gameIconFallback,
                      color: u.TVs.colors.BACKGROUND_SURFACE_HIGH,
                      style: { backgroundColor: u.TVs.colors.BG_BRAND.css },
                  }),
    });
}
function I(e) {
    var t;
    let { application: n, detectedGame: a } = e,
        o = i.useMemo(() => (null == a ? void 0 : a.genres.map(h.P3).join(", ")), [a]),
        l = null != (t = a.name) ? t : null == n ? void 0 : n.name;
    return (0, r.jsxs)("div", {
        className: y.headingContainer,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: "heading-lg/bold",
                color: "header-primary",
                children: l,
            }),
            (0, r.jsx)(s.xvT, {
                variant: "text-xs/medium",
                color: "text-secondary",
                children: o,
            }),
        ],
    });
}
function T(e) {
    var t;
    let { detectedGame: n, openFullGameProfile: i } = e;
    return (0, r.jsxs)("div", {
        className: y.bodyContainer,
        children: [
            (0, r.jsxs)("div", {
                className: y.summaryContainer,
                children: [
                    (0, r.jsx)(s.xvT, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        lineClamp: 3,
                        children: null != (t = n.summaryLocalized) ? t : n.summary,
                    }),
                    (0, r.jsx)(u.P3F, {
                        className: y.clickable,
                        onClick: i,
                        children: (0, r.jsx)(s.xvT, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: b.intl.string(b.t.lBeKY2),
                        }),
                    }),
                ],
            }),
            (0, r.jsx)(u.Button, {
                variant: "secondary",
                size: "sm",
                onClick: i,
                text: "View Game Profile",
                fullWidth: !0,
            }),
        ],
    });
}
function S(e) {
    let { application: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getMute(t.id)),
        a = i.useMemo(() => (n ? b.intl.string(b.t.tpvw4T) : b.intl.string(b.t["6EwEwp"])), [n]);
    return (0, r.jsxs)("div", {
        className: y.actionButtonsContainer,
        children: [
            (0, r.jsx)(c.u, {
                asContainer: !0,
                tag: "span",
                text: a,
                "aria-label": a,
                delay: 750,
                children: (0, r.jsx)(u.P3F, {
                    className: y.actionButton,
                    "aria-label": a,
                    onClick: () => {
                        (0, d.Eq)({
                            gameName: t.name,
                            applicationId: t.id,
                            label: n ? d.$_.UNMUTED : d.$_.MUTED,
                            source: d.UE.MINI_GAME_PROFILE_BELL_ICON,
                        }),
                            (0, f.X)(t.id, !n);
                    },
                    children: n
                        ? (0, r.jsx)(u.owu, {
                              size: "xs",
                              color: u.TVs.colors.WHITE,
                          })
                        : (0, r.jsx)(u.Dkj, {
                              size: "xs",
                              color: u.TVs.colors.WHITE,
                          }),
                }),
            }),
            (0, r.jsx)(E.Z, {
                applicationId: t.id,
                className: y.actionButton,
            }),
        ],
    });
}
function A(e) {
    let { application: t, detectedGame: n, className: a, onClose: s } = e,
        l = (0, g.Z)(
            {
                location: "MiniGameProfile",
                applicationId: t.id,
                source: m.m1.MiniGameProfile,
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
        className: o()(y.container, a),
        children: [
            (0, r.jsx)(O, { detectedGame: n }),
            (0, r.jsx)(S, { application: t }),
            (0, r.jsx)(v, { application: t }),
            (0, r.jsx)(I, {
                application: t,
                detectedGame: n,
            }),
            (0, r.jsx)(T, {
                application: t,
                detectedGame: n,
                openFullGameProfile: c,
            }),
        ],
    });
}
