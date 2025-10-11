n.d(t, { i: () => W }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(442837),
    o = n(704215),
    s = n(780384),
    c = n(481060),
    u = n(596454),
    d = n(515753),
    p = n(410030),
    f = n(607070),
    h = n(100527),
    g = n(906732),
    m = n(821982),
    b = n(377171),
    _ = n(243778),
    O = n(633302),
    E = n(567400),
    v = n(153066),
    y = n(335131),
    I = n(364111),
    C = n(729700),
    S = n(827360),
    T = n(681435),
    N = n(81136),
    j = n(302800),
    P = n(215023),
    x = n(981631),
    A = n(921944),
    Z = n(388032),
    w = n(677372);
function L(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let k = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(c.IGR, {
            className: w.newBadge,
            color: null != t ? t : b.Z.STATUS_DANGER_BACKGROUND,
            text: Z.intl.string(Z.t.y2b7CA),
        });
    },
    M = () => {
        let { noCache: e, includeUnpublished: t } = (0, N.Z)();
        return (
            (0, I.E)(
                P.AW.HOME,
                {
                    noCache: e,
                    includeUnpublished: t,
                    includeBundles: !0,
                },
                void 0,
                !0,
            ),
            null
        );
    },
    U = (e) => {
        var {
                selected: t,
                locationState: n,
                icon: a,
                onClick: o,
                collectibleShopTab: s,
                onMouseEnter: u,
                onMouseLeave: p,
                children: f,
            } = e,
            m = D(e, [
                "selected",
                "locationState",
                "icon",
                "onClick",
                "collectibleShopTab",
                "onMouseEnter",
                "onMouseLeave",
                "children",
            ]);
        let b = (0, l.JA)("shop"),
            _ = h.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: O } = (0, g.ZP)(_),
            [E, v] = i.useState(!1),
            I = i.useCallback(() => {
                void 0 !== o && o(),
                    void 0 !== s &&
                        (0, y.mK)({
                            openInLayer: !1,
                            tab: s,
                            analyticsLocations: O,
                            analyticsSource: _,
                        }),
                    v(!0),
                    (0, y.Sm)({
                        analyticsSource: _,
                        analyticsLocations: O,
                    });
            }, [_, O, o, v, s]),
            C = x.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                E && (0, r.jsx)(M, {}),
                (0, r.jsx)(
                    d.Qj,
                    R(
                        L(
                            {
                                selected: t,
                                route: C,
                                icon: null != a ? a : c.EOn,
                                text: Z.intl.string(Z.t.pWG4zc),
                                locationState: n,
                            },
                            b,
                            m,
                        ),
                        {
                            onMouseEnter: u,
                            onMouseLeave: p,
                            onClick: I,
                            children: f,
                        },
                    ),
                ),
            ],
        });
    },
    G = (e) => (0, r.jsx)(U, R(L({}, e), { children: (0, r.jsx)(k, {}) })),
    B = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, m.Z)(i, c.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            s = null == (t = n.body) ? void 0 : t.call(n),
            u = null == s || "" === s;
        return (0, r.jsxs)("div", {
            className: w.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: w.avatarContainer,
                    children: (0, r.jsx)(c.qEK, {
                        className: w.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: c.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: w.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(c.Heading, {
                            variant: u ? "heading-sm/medium" : "heading-sm/bold",
                            children: o,
                        }),
                        !u &&
                            (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                className: w.marketingBadgeTooltipContent,
                                children: s,
                            }),
                    ],
                }),
            ],
        });
    }),
    H = (e) => {
        let t, n;
        var l,
            o,
            u,
            d,
            h,
            g,
            m,
            b,
            _,
            O,
            E,
            y,
            { displayOptions: I } = e,
            C = D(e, ["displayOptions"]);
        let S = (0, a.e7)([f.Z], () => f.Z.useReducedMotion),
            [T, N] = i.useState(0),
            [j, P] = i.useState(!1),
            x = (0, p.ZP)(),
            A = (0, s.wj)(x);
        j
            ? A
                ? ((t = null == (l = I.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered),
                  (n = null == (u = I.entrypointBackgroundStyle) || null == (o = u.hovered) ? void 0 : o.dark))
                : ((t = null == (d = I.entryPointBackgroundAssets) ? void 0 : d.srcLightHovered),
                  (n = null == (g = I.entrypointBackgroundStyle) || null == (h = g.hovered) ? void 0 : h.light))
            : A
              ? ((t = null == (m = I.entryPointBackgroundAssets) ? void 0 : m.srcDark),
                (n = null == (_ = I.entrypointBackgroundStyle) || null == (b = _.resting) ? void 0 : b.dark))
              : ((t = null == (O = I.entryPointBackgroundAssets) ? void 0 : O.srcLight),
                (n = null == (y = I.entrypointBackgroundStyle) || null == (E = y.resting) ? void 0 : E.light));
        let M = i.useCallback(
                (e) => {
                    I.assetIds.length > 0 && N((e) => (e + 1) % I.assetIds.length), P(!0), null == e || e();
                },
                [I.assetIds.length],
            ),
            G = i.useCallback((e) => {
                P(!1), null == e || e();
            }, []),
            H = I.title();
        return (0, r.jsx)(c.ua7, {
            "data-migration-pending": !0,
            text: (0, r.jsx)(B, {
                displayOptions: I,
                assetId: I.assetIds[T],
                reducedMotion: S,
            }),
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof H ? H : Z.intl.string(Z.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    U,
                    R(
                        L(
                            R(
                                L(
                                    {
                                        className:
                                            null != I.entryPointClassName ? (0, v.l)(w, I.entryPointClassName) : void 0,
                                    },
                                    C,
                                ),
                                { icon: I.entryPointIcon },
                            ),
                            e,
                        ),
                        {
                            onMouseEnter: () => M(e.onMouseEnter),
                            onMouseLeave: () => G(e.onMouseLeave),
                            children: [
                                (0, r.jsx)("div", {
                                    className: w.marketingButtonBackground,
                                    style: { background: n },
                                    children:
                                        null != t &&
                                        (0, r.jsx)("img", {
                                            src: t,
                                            className: w.marketingButtonBackgroundImage,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(k, { color: I.badgeColor }),
                            ],
                        },
                    ),
                ),
        });
    },
    V = (e) => {
        var { displayOptions: t } = e,
            n = D(e, ["displayOptions"]);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = O.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(c.Text, {
                variant: "text-sm/medium",
                className: w.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(u.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(c.ua7, {
            "data-migration-pending": !0,
            text: l,
            tooltipClassName: w.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) => (0, r.jsx)(U, R(L({}, n, e), { children: (0, r.jsx)(k, { color: t.badgeColor }) })),
        });
    },
    F = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: a } = e,
            o = D(e, ["displayOptions", "dismissContent"]);
        let c = i.useRef(null),
            u = (0, p.ZP)(),
            d = (0, s.wj)(u),
            f = l.entryPointBackgroundAssets,
            h = l.entrypointBackgroundStyle,
            g = d ? (null == f ? void 0 : f.srcDarkHovered) : null == f ? void 0 : f.srcLightHovered,
            m = d
                ? null == h || null == (t = h.hovered)
                    ? void 0
                    : t.dark
                : null == h || null == (n = h.hovered)
                  ? void 0
                  : n.light;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    U,
                    R(L({}, o), {
                        onClick: () => a(A.L.TAKE_ACTION),
                        listItemRef: c,
                        children: [
                            (0, r.jsx)("div", {
                                className: w.marketingButtonBackground,
                                style: null != m ? { background: m } : void 0,
                                children:
                                    null != g &&
                                    (0, r.jsx)("img", {
                                        src: g,
                                        className: w.marketingButtonBackgroundImage,
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, r.jsx)(k, {}),
                        ],
                    }),
                ),
                (0, r.jsx)(C.Z, {
                    displayOptions: l,
                    targetElementRef: c,
                    onClick: () => a(A.L.TAKE_ACTION),
                    onRequestClose: () => a(A.L.USER_DISMISS),
                }),
            ],
        });
    },
    z = (e) => {
        var { dismissContent: t } = e,
            n = D(e, ["dismissContent"]);
        let l = i.useRef(null);
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(
                    U,
                    R(L({}, n), {
                        onClick: () => t(A.L.TAKE_ACTION),
                        listItemRef: l,
                    }),
                ),
                (0, r.jsx)(S.Z, {
                    targetElementRef: l,
                    onClick: () => t(A.L.TAKE_ACTION),
                    onRequestClose: () => t(A.L.USER_DISMISS),
                }),
            ],
        });
    },
    W = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: s } = (0, T.Z)(),
            u = (0, E.Y)({ location: "CollectiblesShopButton" }),
            d = !(0, c.$sL)() && u,
            [p, f] = (0, _.US)(d ? [o.z.WISHLIST_SHOP_BUTTON_POPOVER] : []),
            h = {
                selected: t,
                locationState: i,
                onClick: () => {
                    s(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case j.k2.TOOLTIP:
                    return (0, r.jsx)(V, R(L({}, h), { displayOptions: a }));
                case j.k2.COACHTIP:
                    return (0, r.jsx)(H, R(L({}, h), { displayOptions: a }));
                case j.k2.BADGE:
                    return (0, r.jsx)(G, L({}, h));
                case j.k2.COACHMARK:
                    return (0, r.jsx)(F, R(L({ dismissContent: s }, h), { displayOptions: a }));
            }
        return p === o.z.WISHLIST_SHOP_BUTTON_POPOVER
            ? (0, r.jsx)(z, R(L({}, h), { dismissContent: f }))
            : (0, r.jsx)(U, L({}, h));
    };
