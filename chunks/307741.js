n.d(t, { ZP: () => T });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(442837),
    c = n(481060),
    u = n(406763),
    d = n(893642),
    f = n(768581),
    _ = n(814225),
    p = n(810568),
    h = n(168524),
    m = n(715318),
    g = n(388032),
    E = n(488463);
function b(e) {
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
        className: E.gameArtHero,
        style: { backgroundImage: 'url("'.concat(n, '")') },
    });
}
function y(e) {
    let { application: t } = e,
        n = null == t ? void 0 : t.getIconURL(160, f.$k ? "webp" : "png");
    return (0, r.jsx)("div", {
        className: E.iconContainer,
        children:
            null != n &&
            (0, r.jsx)("img", {
                className: E.gameIcon,
                src: n,
                height: 80,
                alt: g.intl.formatToPlainString(g.t["nh+jWl"], { game: t.name }),
            }),
    });
}
function O(e) {
    var t;
    let { application: n, detectedGame: a } = e,
        o = i.useMemo(() => (null == a ? void 0 : a.genres.map(_.P3).join(", ")), [a]),
        l = null != (t = a.name) ? t : null == n ? void 0 : n.name;
    return (0, r.jsxs)("div", {
        className: E.headingContainer,
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
function v(e) {
    var t;
    let { detectedGame: n, openFullGameProfile: i } = e;
    return (0, r.jsxs)("div", {
        className: E.bodyContainer,
        children: [
            (0, r.jsxs)("div", {
                className: E.summaryContainer,
                children: [
                    (0, r.jsx)(s.xv, {
                        variant: "text-sm/medium",
                        color: "text-primary",
                        lineClamp: 3,
                        children: null != (t = n.summaryLocalized) ? t : n.summary,
                    }),
                    (0, r.jsx)(c.P3F, {
                        className: E.clickable,
                        onClick: i,
                        children: (0, r.jsx)(s.xv, {
                            variant: "text-xs/normal",
                            color: "text-secondary",
                            children: g.intl.string(g.t.lBeKY2),
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
function I(e) {
    let { application: t } = e,
        n = i.useMemo(() => (0, p.fP)(), []),
        a = (0, l.e7)([d.Z], () => d.Z.getMute(t.id)),
        o = i.useMemo(() => (a ? g.intl.string(g.t.tpvw4e) : g.intl.string(g.t["6EwEws"])), [a]);
    return (0, r.jsxs)("div", {
        className: E.actionButtonsContainer,
        children: [
            (0, r.jsx)(c.DY3, {
                element: "span",
                text: o,
                "aria-label": o,
                delay: 750,
                children: (0, r.jsx)(c.P3F, {
                    className: E.actionButton,
                    "aria-label": o,
                    onClick: () => (0, u.X)(t.id, !a),
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
            (0, r.jsx)(m.Z, {
                applicationId: t.id,
                viewId: n,
                className: E.actionButton,
            }),
        ],
    });
}
function T(e) {
    let { application: t, detectedGame: n, className: a, onClose: s } = e,
        l = (0, h.Z)(
            {
                location: "MiniGameProfile",
                applicationId: t.id,
                source: p.m1.MiniGameProfile,
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
        className: o()(E.container, a),
        children: [
            (0, r.jsx)(b, { detectedGame: n }),
            (0, r.jsx)(I, { application: t }),
            (0, r.jsx)(y, { application: t }),
            (0, r.jsx)(O, {
                application: t,
                detectedGame: n,
            }),
            (0, r.jsx)(v, {
                application: t,
                detectedGame: n,
                openFullGameProfile: c,
            }),
        ],
    });
}
