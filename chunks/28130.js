n.d(t, { default: () => B });
var r = n(54381),
    l = n(473749),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(28664),
    c = n(481060),
    u = n(100527),
    d = n(906732),
    f = n(807582),
    p = n(813197),
    g = n(222062),
    m = n(530329),
    h = n(373230),
    b = n(72703),
    j = n(782818),
    y = n(442552),
    A = n(430824),
    x = n(914010),
    C = n(594174),
    v = n(626135),
    E = n(267642),
    O = n(74538),
    N = n(621961),
    S = n(884858),
    T = n(981631),
    w = n(486324),
    P = n(869783),
    R = n(388032),
    F = n(727448);
function _(e) {
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
let Z = [
    {
        gif: n(495682),
        png: n(458060),
    },
    {
        gif: n(842786),
        png: n(460790),
    },
    {
        gif: n(578831),
        png: n(642193),
    },
    {
        gif: n(145908),
        png: n(690695),
    },
];
function I(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)("div", {
        className: F.gifGrid,
        children: Z.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: F.gif,
                    style: { backgroundImage: "url(".concat(t ? e.gif : e.png, ")") },
                },
                e.gif,
            ),
        ),
    });
}
function k(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, E._p)(t),
        l = n.features.has(t);
    if (null == r) return;
    let a = (0, E.nW)(r);
    return l
        ? R.intl.formatToPlainString(R.t.u3L3TX, { levelName: a })
        : R.intl.formatToPlainString(R.t["r/v25U"], { levelName: a });
}
function D(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)("div", {
        className: F.boostingPill,
        children: (0, r.jsx)(f.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0,
        }),
    });
}
function M(e) {
    let { icon: t, label: n, guildFeature: l, guild: a, shouldShowPremiumIcon: s } = e,
        u = null != a && null != l;
    return (0, r.jsxs)("div", {
        className: i()(F.optionDescription, { [F.hasBoostingPill]: u }),
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: F.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(c.Text, {
                        variant: "text-sm/semibold",
                        className: i()(F.optionLabelText, { [F.hasPremiumIcon]: s }),
                        children: [
                            s &&
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: R.intl.string(R.t["5AFxuK"]),
                                    children: (0, r.jsx)(c.SrA, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: F.premiumWheel,
                                    }),
                                }),
                            n,
                        ],
                    }),
                ],
            }),
            u &&
                (0, r.jsx)(D, {
                    guild: a,
                    guildFeature: l,
                }),
        ],
    });
}
function L(e) {
    let {
            label: t,
            uploadType: n,
            guild: l,
            maxFileSizeBytes: a,
            filters: s,
            handleOpenImageEditingModal: o,
            handleFileSizeError: u,
        } = e,
        d = (0, N.GY)(n),
        f = (0, N.C6)(n, { isGIF: !1 }),
        g = k({
            guildFeature: f,
            guild: l,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.tEY, {
                within: !0,
                children: (0, r.jsxs)("div", {
                    className: i()(F.option, F.imageUploadOption),
                    children: [
                        (0, r.jsx)(M, {
                            icon: (0, r.jsx)(c.FmF, {
                                size: "md",
                                color: "currentColor",
                            }),
                            label: t,
                            guildFeature: f,
                            guild: l,
                            shouldShowPremiumIcon: d,
                        }),
                        (0, r.jsx)(p.ZP, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: o,
                            maxFileSizeBytes: a,
                            onFileSizeError: u,
                            filters: s,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != g && (0, r.jsx)(c.nn4, { children: g }),
        ],
    });
}
function U(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: l } = e,
        { shouldAnimate: a, onMouseEnter: i, onMouseLeave: s } = (0, y.Z)(),
        o = (0, N.Kq)(t),
        u = (0, N.C6)(t, { isGIF: !0 }),
        d = k({
            guildFeature: u,
            guild: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.P3F, {
                className: F.option,
                onClick: l,
                "aria-label": R.intl.string(R.t["xsC+/y"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(I, { shouldAnimate: a }),
                    (0, r.jsx)(M, {
                        icon: (0, r.jsx)(c.OUq, {
                            size: "md",
                            color: "currentColor",
                        }),
                        label: R.intl.string(R.t["xsC+/y"]),
                        guildFeature: u,
                        guild: n,
                        shouldShowPremiumIcon: o,
                    }),
                ],
            }),
            null != d && (0, r.jsx)(c.nn4, { children: d }),
        ],
    });
}
function B(e) {
    let {
            transitionState: t,
            onClose: a,
            onComplete: i,
            uploadType: o,
            maxFileSizeBytes: f,
            showUpsellHeader: p,
            filters: y,
            analyticsLocation: E,
            analyticsLocations: N = [],
            imageSpecifications: Z,
            modalTitle: I = R.intl.string(R.t.DToW4e),
            uploadOptionTitle: k = R.intl.string(R.t["MsUY/S"]),
            allowRecentAvatarsSelection: D = !0,
        } = e,
        M = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        B = (0, s.e7)([x.Z], () => x.Z.getGuildId()),
        H = (0, s.e7)([A.Z], () => A.Z.getGuild(B)),
        V = (0, c.vRw)(),
        G = o === w.pC.AVATAR || o === w.pC.BANNER,
        z = !O.ZP.canUseAnimatedAvatar(M) && o === w.pC.AVATAR,
        q = (0, g.M)(!G),
        W = (0, h.T)({ location: "NewSelectImageModal" }) && D,
        { analyticsLocations: X, newestAnalyticsLocation: Y } = (0, d.ZP)(N, u.Z.SELECT_IMAGE_MODAL),
        J = l.useCallback(
            (e) => {
                let { assetOrigin: t = b.q.NEW_ASSET, imageUri: n, file: r, originalAsset: l, isFromTenor: s = !1 } = e;
                a(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: l,
                        isFromTenor: s,
                    });
            },
            [a, i],
        ),
        K = l.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4)
                    return J({
                        imageUri: e,
                        file: t,
                    });
                (0, c.ZDy)(
                    async () => {
                        let { default: l } = await Promise.all([n.e("59732"), n.e("96033")]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                l,
                                _(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: J,
                                        uploadType: o,
                                        showUpsellHeader: p,
                                        analyticsPage: null == E ? void 0 : E.page,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: V },
                );
            },
            [null == E ? void 0 : E.page, V, J, p, o],
        ),
        Q = l.useCallback(() => {
            (0, S.Z)(f);
        }, [f]),
        $ = l.useCallback(() => {
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await n.e("72891").then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            _(
                                {
                                    uploadType: o,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return J({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0,
                                        });
                                    },
                                    showUpsellHeader: p,
                                    analyticsPage: null == E ? void 0 : E.page,
                                },
                                t,
                            ),
                        );
                },
                { contextKey: V },
            );
        }, [null == E ? void 0 : E.page, V, J, p, o]);
    l.useEffect(() => {
        z &&
            v.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: X,
            }),
            v.default.track(T.rMx.OPEN_MODAL, {
                type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: E,
                location_stack: X,
                upload_type: o,
            });
    }, [z, E, X, o]);
    let ee = p && q,
        et = o === w.pC.AVATAR && W;
    return (0, r.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: F.modal,
        parentComponent: "SelectImageModal",
        children: [
            (0, r.jsxs)(c.xBx, {
                className: F.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(c.Heading, {
                        variant: "heading-lg/semibold",
                        children: I,
                    }),
                    (0, r.jsx)(c.olH, {
                        onClick: a,
                        className: F.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(c.hzk, {
                className: F.modalContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: F.imageSelectionSection,
                        children: [
                            (0, r.jsxs)("ul", {
                                className: F.optionsList,
                                "aria-label": R.intl.string(R.t.iBnqtQ),
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(L, {
                                            label: k,
                                            uploadType: o,
                                            guild: H,
                                            handleOpenImageEditingModal: K,
                                            maxFileSizeBytes: f,
                                            filters: y,
                                            handleFileSizeError: Q,
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(U, {
                                            uploadType: o,
                                            guild: H,
                                            handleOpenGIFPickerModal: $,
                                        }),
                                    }),
                                ],
                            }),
                            null != Z
                                ? (0, r.jsx)(c.Text, {
                                      className: F.imageSpecifications,
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: Z,
                                  })
                                : null,
                        ],
                    }),
                    et && (0, r.jsx)(j.Z, { onComplete: J }),
                    ee &&
                        (0, r.jsx)(m.Z, {
                            uploadType: o,
                            analyticsSource: Y,
                            showUpsell: !0,
                            position: "inline",
                            showShadow: !1,
                            className: F.premiumUpsell,
                        }),
                ],
            }),
        ],
    });
}
