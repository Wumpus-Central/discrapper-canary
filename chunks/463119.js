n.d(t, { i: () => B }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    a = n(442837),
    o = n(780384),
    s = n(481060),
    c = n(596454),
    u = n(515753),
    d = n(410030),
    p = n(607070),
    f = n(100527),
    h = n(906732),
    g = n(821982),
    m = n(377171),
    b = n(633302),
    _ = n(153066),
    O = n(335131),
    E = n(364111),
    y = n(729700),
    v = n(681435),
    I = n(81136),
    C = n(302800),
    S = n(215023),
    N = n(981631),
    T = n(921944),
    P = n(388032),
    j = n(677372);
function x(e) {
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
function A(e, t) {
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
function Z(e, t) {
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
let w = (e) => {
        let { color: t } = e;
        return (0, r.jsx)(s.IGR, {
            className: j.newBadge,
            color: null != t ? t : m.Z.STATUS_DANGER_BACKGROUND,
            text: P.intl.string(P.t.y2b7CA),
        });
    },
    L = () => {
        let { noCache: e, includeUnpublished: t } = (0, I.Z)();
        return (
            (0, E.E)(
                S.AW.HOME,
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
    R = (e) => {
        var {
                selected: t,
                locationState: n,
                icon: a,
                onClick: o,
                collectibleShopTab: c,
                onMouseEnter: d,
                onMouseLeave: p,
                children: g,
            } = e,
            m = Z(e, [
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
            _ = f.Z.HOME_PAGE_SHOP_TAB,
            { analyticsLocations: E } = (0, h.ZP)(_),
            [y, v] = i.useState(!1),
            I = i.useCallback(() => {
                void 0 !== o && o(),
                    void 0 !== c &&
                        (0, O.mK)({
                            openInLayer: !1,
                            tab: c,
                            analyticsLocations: E,
                            analyticsSource: _,
                        }),
                    v(!0),
                    (0, O.Sm)({
                        analyticsSource: _,
                        analyticsLocations: E,
                    });
            }, [_, E, o, v, c]),
            C = N.Z5c.COLLECTIBLES_SHOP;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                y && (0, r.jsx)(L, {}),
                (0, r.jsx)(
                    u.Qj,
                    A(
                        x(
                            {
                                selected: t,
                                route: C,
                                icon: null != a ? a : s.EOn,
                                text: P.intl.string(P.t.pWG4zc),
                                locationState: n,
                            },
                            b,
                            m,
                        ),
                        {
                            onMouseEnter: d,
                            onMouseLeave: p,
                            onClick: I,
                            children: g,
                        },
                    ),
                ),
            ],
        });
    },
    D = (e) => (0, r.jsx)(R, A(x({}, e), { children: (0, r.jsx)(w, {}) })),
    k = i.memo(function (e) {
        var t;
        let { displayOptions: n, assetId: i, reducedMotion: l = !1 } = e,
            a = null != i ? (0, g.Z)(i, s.EFr.SIZE_80, !l) : void 0,
            o = n.title(),
            c = null == (t = n.body) ? void 0 : t.call(n),
            u = null == c || "" === c;
        return (0, r.jsxs)("div", {
            className: j.shopMarketingTooltipContent,
            children: [
                (0, r.jsx)("div", {
                    className: j.avatarContainer,
                    children: (0, r.jsx)(s.qEK, {
                        className: j.avatar,
                        src: n.imageSrc,
                        avatarDecoration: a,
                        size: s.EFr.SIZE_80,
                        "aria-hidden": !0,
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: j.shopMarketingTooltipText,
                    children: [
                        (0, r.jsx)(s.X6q, {
                            variant: u ? "heading-sm/medium" : "heading-sm/bold",
                            children: o,
                        }),
                        !u &&
                            (0, r.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                className: j.marketingBadgeTooltipContent,
                                children: c,
                            }),
                    ],
                }),
            ],
        });
    }),
    M = (e) => {
        let t, n;
        var l,
            c,
            u,
            f,
            h,
            g,
            m,
            b,
            O,
            E,
            y,
            v,
            { displayOptions: I } = e,
            C = Z(e, ["displayOptions"]);
        let S = (0, a.e7)([p.Z], () => p.Z.useReducedMotion),
            [N, T] = i.useState(0),
            [L, D] = i.useState(!1),
            M = (0, d.ZP)(),
            U = (0, o.wj)(M);
        L
            ? U
                ? ((t = null == (l = I.entryPointBackgroundAssets) ? void 0 : l.srcDarkHovered),
                  (n = null == (u = I.entrypointBackgroundStyle) || null == (c = u.hovered) ? void 0 : c.dark))
                : ((t = null == (f = I.entryPointBackgroundAssets) ? void 0 : f.srcLightHovered),
                  (n = null == (g = I.entrypointBackgroundStyle) || null == (h = g.hovered) ? void 0 : h.light))
            : U
              ? ((t = null == (m = I.entryPointBackgroundAssets) ? void 0 : m.srcDark),
                (n = null == (O = I.entrypointBackgroundStyle) || null == (b = O.resting) ? void 0 : b.dark))
              : ((t = null == (E = I.entryPointBackgroundAssets) ? void 0 : E.srcLight),
                (n = null == (v = I.entrypointBackgroundStyle) || null == (y = v.resting) ? void 0 : y.light));
        let G = i.useCallback(
                (e) => {
                    I.assetIds.length > 0 && T((e) => (e + 1) % I.assetIds.length), D(!0), null == e || e();
                },
                [I.assetIds.length],
            ),
            B = i.useCallback((e) => {
                D(!1), null == e || e();
            }, []),
            V = I.title();
        return (0, r.jsx)(s.ua7, {
            text: (0, r.jsx)(k, {
                displayOptions: I,
                assetId: I.assetIds[N],
                reducedMotion: S,
            }),
            tooltipClassName: j.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            allowOverflow: !0,
            hideOnClick: !1,
            "aria-label": "string" == typeof V ? V : P.intl.string(P.t.rSXaxc),
            children: (e) =>
                (0, r.jsxs)(
                    R,
                    A(
                        x(
                            A(
                                x(
                                    {
                                        className:
                                            null != I.entryPointClassName ? (0, _.l)(j, I.entryPointClassName) : void 0,
                                    },
                                    C,
                                ),
                                { icon: I.entryPointIcon },
                            ),
                            e,
                        ),
                        {
                            onMouseEnter: () => G(e.onMouseEnter),
                            onMouseLeave: () => B(e.onMouseLeave),
                            children: [
                                (0, r.jsx)("div", {
                                    className: j.marketingButtonBackground,
                                    style: { background: n },
                                    children:
                                        null != t &&
                                        (0, r.jsx)("img", {
                                            src: t,
                                            className: j.marketingButtonBackgroundImage,
                                            alt: "",
                                            "aria-hidden": !0,
                                        }),
                                }),
                                (0, r.jsx)(w, { color: I.badgeColor }),
                            ],
                        },
                    ),
                ),
        });
    },
    U = (e) => {
        var { displayOptions: t } = e,
            n = Z(e, ["displayOptions"]);
        let l = i.useMemo(() => {
            var e;
            let n = null != t.emojiName ? (null == (e = b.ZP.getByName(t.emojiName)) ? void 0 : e.surrogates) : null;
            return (0, r.jsxs)(s.Text, {
                variant: "text-sm/medium",
                className: j.marketingBadgeTooltipContent,
                children: [null != n && (0, r.jsx)(c.Z, { emojiName: n }), t.title()],
            });
        }, [t]);
        return (0, r.jsx)(s.ua7, {
            text: l,
            tooltipClassName: j.marketingBadgeTooltip,
            position: "right",
            delay: 100,
            hideOnClick: !1,
            "aria-label": t.title(),
            children: (e) => (0, r.jsx)(R, A(x({}, n, e), { children: (0, r.jsx)(w, { color: t.badgeColor }) })),
        });
    },
    G = (e) => {
        var t,
            n,
            { displayOptions: l, dismissContent: a } = e,
            s = Z(e, ["displayOptions", "dismissContent"]);
        let c = i.useRef(null),
            u = (0, d.ZP)(),
            p = (0, o.wj)(u),
            f = l.entryPointBackgroundAssets,
            h = l.entrypointBackgroundStyle,
            g = p ? (null == f ? void 0 : f.srcDarkHovered) : null == f ? void 0 : f.srcLightHovered,
            m = p
                ? null == h || null == (t = h.hovered)
                    ? void 0
                    : t.dark
                : null == h || null == (n = h.hovered)
                  ? void 0
                  : n.light;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)(
                    R,
                    A(x({}, s), {
                        onClick: () => a(T.L.TAKE_ACTION),
                        listItemRef: c,
                        children: [
                            (0, r.jsx)("div", {
                                className: j.marketingButtonBackground,
                                style: null != m ? { background: m } : void 0,
                                children:
                                    null != g &&
                                    (0, r.jsx)("img", {
                                        src: g,
                                        className: j.marketingButtonBackgroundImage,
                                        alt: "",
                                        "aria-hidden": !0,
                                    }),
                            }),
                            (0, r.jsx)(w, {}),
                        ],
                    }),
                ),
                (0, r.jsx)(y.Z, {
                    displayOptions: l,
                    targetElementRef: c,
                    onClick: () => a(T.L.TAKE_ACTION),
                    onRequestClose: () => a(T.L.USER_DISMISS),
                }),
            ],
        });
    },
    B = (e) => {
        let { selected: t, onClick: n, locationState: i, listItemRef: l } = e,
            { shopButtonDisplayOptions: a, dismissShopButtonDC: o } = (0, v.Z)(),
            s = {
                selected: t,
                locationState: i,
                onClick: () => {
                    o(), null == n || n();
                },
                listItemRef: l,
            };
        if (null != a)
            switch (a.type) {
                case C.k2.TOOLTIP:
                    return (0, r.jsx)(U, A(x({}, s), { displayOptions: a }));
                case C.k2.COACHTIP:
                    return (0, r.jsx)(M, A(x({}, s), { displayOptions: a }));
                case C.k2.BADGE:
                    return (0, r.jsx)(D, x({}, s));
                case C.k2.COACHMARK:
                    return (0, r.jsx)(G, A(x({ dismissContent: o }, s), { displayOptions: a }));
            }
        return (0, r.jsx)(R, x({}, s));
    };
