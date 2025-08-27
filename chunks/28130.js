n.d(t, { default: () => B });
var r = n(951288),
    a = n(647438),
    l = n(120356),
    i = n.n(l),
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
    x = n(430824),
    A = n(914010),
    C = n(594174),
    v = n(626135),
    O = n(267642),
    E = n(74538),
    N = n(621961),
    S = n(884858),
    w = n(981631),
    P = n(486324),
    T = n(869783),
    R = n(388032),
    _ = n(133495);
function F(e) {
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
function D(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, r.jsx)("div", {
        className: _.gifGrid,
        children: Z.map((e) =>
            (0, r.jsx)(
                "div",
                {
                    className: _.gif,
                    style: { backgroundImage: "url(".concat(t ? e.gif : e.png, ")") },
                },
                e.gif,
            ),
        ),
    });
}
function I(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, O._p)(t),
        a = n.features.has(t);
    if (null == r) return;
    let l = (0, O.nW)(r);
    return a
        ? R.intl.formatToPlainString(R.t.u3L3TU, { levelName: l })
        : R.intl.formatToPlainString(R.t["r/v25e"], { levelName: l });
}
function k(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)("div", {
        className: _.boostingPill,
        children: (0, r.jsx)(f.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0,
        }),
    });
}
function M(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: s } = e,
        u = null != l && null != a;
    return (0, r.jsxs)("div", {
        className: i()(_.optionDescription, { [_.hasBoostingPill]: u }),
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: _.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(c.Text, {
                        variant: "text-sm/semibold",
                        className: i()(_.optionLabelText, { [_.hasPremiumIcon]: s }),
                        children: [
                            s &&
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: R.intl.string(R.t["5AFxuL"]),
                                    children: (0, r.jsx)(c.SrA, {
                                        size: "xs",
                                        color: "currentColor",
                                        className: _.premiumWheel,
                                    }),
                                }),
                            n,
                        ],
                    }),
                ],
            }),
            u &&
                (0, r.jsx)(k, {
                    guild: l,
                    guildFeature: a,
                }),
        ],
    });
}
function L(e) {
    let {
            label: t,
            uploadType: n,
            guild: a,
            maxFileSizeBytes: l,
            filters: s,
            handleOpenImageEditingModal: o,
            handleFileSizeError: u,
        } = e,
        d = (0, N.GY)(n),
        f = (0, N.C6)(n, { isGIF: !1 }),
        g = I({
            guildFeature: f,
            guild: a,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.tEY, {
                within: !0,
                children: (0, r.jsxs)("div", {
                    className: i()(_.option, _.imageUploadOption),
                    children: [
                        (0, r.jsx)(M, {
                            icon: (0, r.jsx)(c.FmF, {
                                size: "md",
                                color: "currentColor",
                            }),
                            label: t,
                            guildFeature: f,
                            guild: a,
                            shouldShowPremiumIcon: d,
                        }),
                        (0, r.jsx)(p.ZP, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: o,
                            maxFileSizeBytes: l,
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
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: s } = (0, y.Z)(),
        o = (0, N.Kq)(t),
        u = (0, N.C6)(t, { isGIF: !0 }),
        d = I({
            guildFeature: u,
            guild: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.P3F, {
                className: _.option,
                onClick: a,
                "aria-label": R.intl.string(R.t["xsC+//"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(D, { shouldAnimate: l }),
                    (0, r.jsx)(M, {
                        icon: (0, r.jsx)(c.OUq, {
                            size: "md",
                            color: "currentColor",
                        }),
                        label: R.intl.string(R.t["xsC+//"]),
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
            onClose: l,
            onComplete: i,
            uploadType: o,
            maxFileSizeBytes: f,
            showUpsellHeader: p,
            filters: y,
            analyticsLocation: O,
            analyticsLocations: N = [],
            imageSpecifications: Z,
            modalTitle: D = R.intl.string(R.t.DToW4e),
            uploadOptionTitle: I = R.intl.string(R.t["MsUY/f"]),
            allowRecentAvatarsSelection: k = !0,
        } = e,
        M = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
        B = (0, s.e7)([A.Z], () => A.Z.getGuildId()),
        H = (0, s.e7)([x.Z], () => x.Z.getGuild(B)),
        V = (0, c.vRw)(),
        z = o === P.pC.AVATAR || o === P.pC.BANNER,
        G = !E.ZP.canUseAnimatedAvatar(M) && o === P.pC.AVATAR,
        q = (0, g.M)(!z),
        W = (0, h.T)({ location: "NewSelectImageModal" }) && k,
        { analyticsLocations: X, newestAnalyticsLocation: Y } = (0, d.ZP)(N, u.Z.SELECT_IMAGE_MODAL),
        J = a.useCallback(
            (e) => {
                let { assetOrigin: t = b.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: s = !1 } = e;
                l(),
                    i({
                        assetOrigin: t,
                        imageUri: n,
                        file: r,
                        originalAsset: a,
                        isFromTenor: s,
                    });
            },
            [l, i],
        ),
        K = a.useCallback(
            (e, t) => {
                if (t.type === T.m.MP4)
                    return J({
                        imageUri: e,
                        file: t,
                    });
                (0, c.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e("59732"), n.e("11866")]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                F(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: J,
                                        uploadType: o,
                                        showUpsellHeader: p,
                                        analyticsPage: null == O ? void 0 : O.page,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: V },
                );
            },
            [null == O ? void 0 : O.page, V, J, p, o],
        ),
        $ = a.useCallback(() => {
            (0, S.Z)(f);
        }, [f]),
        Q = a.useCallback(() => {
            (0, c.ZDy)(
                async () => {
                    let { default: e } = await n.e("72891").then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            F(
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
                                    analyticsPage: null == O ? void 0 : O.page,
                                },
                                t,
                            ),
                        );
                },
                { contextKey: V },
            );
        }, [null == O ? void 0 : O.page, V, J, p, o]);
    a.useEffect(() => {
        G &&
            v.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: X,
            }),
            v.default.track(w.rMx.OPEN_MODAL, {
                type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: O,
                location_stack: X,
                upload_type: o,
            });
    }, [G, O, X, o]);
    let ee = p && q,
        et = o === P.pC.AVATAR && W;
    return (0, r.jsxs)(c.Y0X, {
        transitionState: t,
        size: c.CgR.DYNAMIC,
        className: _.modal,
        parentComponent: "SelectImageModal",
        children: [
            (0, r.jsxs)(c.xBx, {
                className: _.modalHeader,
                separator: !1,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: "heading-lg/semibold",
                        children: D,
                    }),
                    (0, r.jsx)(c.olH, {
                        onClick: l,
                        className: _.modalCloseButton,
                    }),
                ],
            }),
            (0, r.jsxs)(c.hzk, {
                className: _.modalContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: _.imageSelectionSection,
                        children: [
                            (0, r.jsxs)("ul", {
                                className: _.optionsList,
                                "aria-label": R.intl.string(R.t.iBnqtb),
                                children: [
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(L, {
                                            label: I,
                                            uploadType: o,
                                            guild: H,
                                            handleOpenImageEditingModal: K,
                                            maxFileSizeBytes: f,
                                            filters: y,
                                            handleFileSizeError: $,
                                        }),
                                    }),
                                    (0, r.jsx)("li", {
                                        children: (0, r.jsx)(U, {
                                            uploadType: o,
                                            guild: H,
                                            handleOpenGIFPickerModal: Q,
                                        }),
                                    }),
                                ],
                            }),
                            null != Z
                                ? (0, r.jsx)(c.Text, {
                                      className: _.imageSpecifications,
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
                            className: _.premiumUpsell,
                        }),
                ],
            }),
        ],
    });
}
