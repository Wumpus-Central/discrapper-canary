n.d(t, { default: () => H });
var r = n(54381),
    a = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(28664),
    c = n(159691),
    u = n(481060),
    d = n(100527),
    f = n(906732),
    p = n(807582),
    g = n(813197),
    m = n(222062),
    h = n(530329),
    b = n(373230),
    A = n(72703),
    y = n(782818),
    j = n(442552),
    C = n(430824),
    v = n(914010),
    x = n(594174),
    E = n(626135),
    O = n(267642),
    S = n(74538),
    N = n(621961),
    T = n(884858),
    w = n(981631),
    R = n(486324),
    P = n(869783),
    _ = n(388032),
    F = n(133495);
function Z(e) {
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
let I = [
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
        className: F.gifGrid,
        children: I.map((e) =>
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
    let r = (0, O._p)(t),
        a = n.features.has(t);
    if (null == r) return;
    let l = (0, O.nW)(r);
    return a
        ? _.intl.formatToPlainString(_.t.u3L3TX, { levelName: l })
        : _.intl.formatToPlainString(_.t["r/v25U"], { levelName: l });
}
function L(e) {
    let { guildFeature: t, guild: n } = e;
    return (0, r.jsx)("div", {
        className: F.boostingPill,
        children: (0, r.jsx)(p.Z, {
            guildFeature: t,
            guild: n,
            hideTooltip: !0,
        }),
    });
}
function M(e) {
    let { icon: t, label: n, guildFeature: a, guild: l, shouldShowPremiumIcon: s } = e,
        c = null != l && null != a;
    return (0, r.jsxs)("div", {
        className: i()(F.optionDescription, { [F.hasBoostingPill]: c }),
        "aria-hidden": !0,
        children: [
            (0, r.jsxs)("div", {
                className: F.optionIconAndLabel,
                children: [
                    t,
                    (0, r.jsxs)(u.Text, {
                        variant: "text-sm/semibold",
                        className: i()(F.optionLabelText, { [F.hasPremiumIcon]: s }),
                        children: [
                            s &&
                                (0, r.jsx)(o.u, {
                                    asContainer: !0,
                                    text: _.intl.string(_.t["5AFxuK"]),
                                    children: (0, r.jsx)(u.SrA, {
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
            c &&
                (0, r.jsx)(L, {
                    guild: l,
                    guildFeature: a,
                }),
        ],
    });
}
function U(e) {
    let {
            label: t,
            uploadType: n,
            guild: a,
            maxFileSizeBytes: l,
            filters: s,
            handleOpenImageEditingModal: o,
            handleFileSizeError: c,
        } = e,
        d = (0, N.GY)(n),
        f = (0, N.C6)(n, { isGIF: !1 }),
        p = k({
            guildFeature: f,
            guild: a,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.tEY, {
                within: !0,
                children: (0, r.jsxs)("div", {
                    className: i()(F.option, F.imageUploadOption),
                    children: [
                        (0, r.jsx)(M, {
                            icon: (0, r.jsx)(u.FmF, {
                                size: "md",
                                color: "currentColor",
                            }),
                            label: t,
                            guildFeature: f,
                            guild: a,
                            shouldShowPremiumIcon: d,
                        }),
                        (0, r.jsx)(g.ZP, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: o,
                            maxFileSizeBytes: l,
                            onFileSizeError: c,
                            filters: s,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != p && (0, r.jsx)(u.nn4, { children: p }),
        ],
    });
}
function B(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: s } = (0, j.Z)(),
        o = (0, N.Kq)(t),
        c = (0, N.C6)(t, { isGIF: !0 }),
        d = k({
            guildFeature: c,
            guild: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.P3F, {
                className: F.option,
                onClick: a,
                "aria-label": _.intl.string(_.t["xsC+/y"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(D, { shouldAnimate: l }),
                    (0, r.jsx)(M, {
                        icon: (0, r.jsx)(u.OUq, {
                            size: "md",
                            color: "currentColor",
                        }),
                        label: _.intl.string(_.t["xsC+/y"]),
                        guildFeature: c,
                        guild: n,
                        shouldShowPremiumIcon: o,
                    }),
                ],
            }),
            null != d && (0, r.jsx)(u.nn4, { children: d }),
        ],
    });
}
function H(e) {
    let {
            transitionState: t,
            onClose: l,
            onComplete: i,
            uploadType: o,
            maxFileSizeBytes: p,
            showUpsellHeader: g,
            filters: j,
            analyticsLocation: O,
            analyticsLocations: N = [],
            imageSpecifications: I,
            modalTitle: D = _.intl.string(_.t.DToW4e),
            uploadOptionTitle: k = _.intl.string(_.t["MsUY/S"]),
            allowRecentAvatarsSelection: L = !0,
        } = e,
        M = (0, s.e7)([x.default], () => x.default.getCurrentUser()),
        H = (0, s.e7)([v.Z], () => v.Z.getGuildId()),
        V = (0, s.e7)([C.Z], () => C.Z.getGuild(H)),
        G = (0, u.vRw)(),
        z = o === R.pC.AVATAR || o === R.pC.BANNER,
        q = !S.ZP.canUseAnimatedAvatar(M) && o === R.pC.AVATAR,
        W = (0, m.M)(!z),
        X = (0, b.T)({ location: "NewSelectImageModal" }) && L,
        { analyticsLocations: Y, newestAnalyticsLocation: J } = (0, f.ZP)(N, d.Z.SELECT_IMAGE_MODAL),
        K = a.useCallback(
            (e) => {
                let { assetOrigin: t = A.q.NEW_ASSET, imageUri: n, file: r, originalAsset: a, isFromTenor: s = !1 } = e;
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
        Q = a.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4)
                    return K({
                        imageUri: e,
                        file: t,
                    });
                (0, u.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e("59732"), n.e("11866")]).then(n.bind(n, 712451));
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                Z(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: K,
                                        uploadType: o,
                                        showUpsellHeader: g,
                                        analyticsPage: null == O ? void 0 : O.page,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: G },
                );
            },
            [null == O ? void 0 : O.page, G, K, g, o],
        ),
        $ = a.useCallback(() => {
            (0, T.Z)(p);
        }, [p]),
        ee = a.useCallback(() => {
            (0, u.ZDy)(
                async () => {
                    let { default: e } = await n.e("72891").then(n.bind(n, 195297));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            Z(
                                {
                                    uploadType: o,
                                    onComplete: (e) => {
                                        let { imageUri: t, file: n } = e;
                                        return K({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0,
                                        });
                                    },
                                    showUpsellHeader: g,
                                    analyticsPage: null == O ? void 0 : O.page,
                                },
                                t,
                            ),
                        );
                },
                { contextKey: G },
            );
        }, [null == O ? void 0 : O.page, G, K, g, o]);
    a.useEffect(() => {
        q &&
            E.default.track(w.rMx.PREMIUM_UPSELL_VIEWED, {
                type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: Y,
            }),
            E.default.track(w.rMx.OPEN_MODAL, {
                type: w.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: O,
                location_stack: Y,
                upload_type: o,
            });
    }, [q, O, Y, o]);
    let et = g && W,
        en = o === R.pC.AVATAR && X;
    return (0, r.jsx)(c.u_l, {
        transitionState: t,
        onClose: l,
        size: "md",
        title: D,
        actions: [],
        children: (0, r.jsxs)("div", {
            className: F.modalContent,
            children: [
                (0, r.jsxs)("div", {
                    className: F.imageSelectionSection,
                    children: [
                        (0, r.jsxs)("ul", {
                            className: F.optionsList,
                            "aria-label": _.intl.string(_.t.iBnqtQ),
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)(U, {
                                        label: k,
                                        uploadType: o,
                                        guild: V,
                                        handleOpenImageEditingModal: Q,
                                        maxFileSizeBytes: p,
                                        filters: j,
                                        handleFileSizeError: $,
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)(B, {
                                        uploadType: o,
                                        guild: V,
                                        handleOpenGIFPickerModal: ee,
                                    }),
                                }),
                            ],
                        }),
                        null != I
                            ? (0, r.jsx)(u.Text, {
                                  className: F.imageSpecifications,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: I,
                              })
                            : null,
                    ],
                }),
                en && (0, r.jsx)(y.Z, { onComplete: K }),
                et &&
                    (0, r.jsx)(h.Z, {
                        uploadType: o,
                        analyticsSource: J,
                        showUpsell: !0,
                        position: "inline",
                        showShadow: !1,
                        className: F.premiumUpsell,
                    }),
            ],
        }),
    });
}
