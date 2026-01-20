n.d(t, { default: () => B });
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
    b = n(72703),
    A = n(782818),
    y = n(442552),
    j = n(430824),
    C = n(914010),
    v = n(594174),
    x = n(626135),
    E = n(267642),
    O = n(74538),
    N = n(621961),
    S = n(884858),
    T = n(981631),
    R = n(486324),
    P = n(869783),
    w = n(388032),
    F = n(570162);
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
function D(e) {
    let { guildFeature: t, guild: n } = e;
    if (null == t || null == n) return;
    let r = (0, E._p)(t),
        a = n.features.has(t);
    if (null == r) return;
    let l = (0, E.nW)(r);
    return a
        ? w.intl.formatToPlainString(w.t.u3L3TX, { levelName: l })
        : w.intl.formatToPlainString(w.t["r/v25U"], { levelName: l });
}
function k(e) {
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
function L(e) {
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
                                    text: w.intl.string(w.t["5AFxuK"]),
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
                (0, r.jsx)(k, {
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
        p = D({
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
                        (0, r.jsx)(L, {
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
function M(e) {
    let { uploadType: t, guild: n, handleOpenGIFPickerModal: a } = e,
        { shouldAnimate: l, onMouseEnter: i, onMouseLeave: s } = (0, y.Z)(),
        o = (0, N.Kq)(t),
        c = (0, N.C6)(t, { isGIF: !0 }),
        d = D({
            guildFeature: c,
            guild: n,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(u.P3F, {
                className: F.option,
                onClick: a,
                "aria-label": w.intl.string(w.t["xsC+/y"]),
                onMouseEnter: i,
                onMouseLeave: s,
                children: [
                    (0, r.jsx)(I, { shouldAnimate: l }),
                    (0, r.jsx)(L, {
                        icon: (0, r.jsx)(u.OUq, {
                            size: "md",
                            color: "currentColor",
                        }),
                        label: w.intl.string(w.t["xsC+/y"]),
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
function B(e) {
    let {
            transitionState: t,
            onClose: l,
            onComplete: i,
            uploadType: o,
            maxFileSizeBytes: p,
            showUpsellHeader: g,
            filters: y,
            analyticsLocation: E,
            analyticsLocations: N = [],
            imageSpecifications: Z,
            modalTitle: I = w.intl.string(w.t.DToW4e),
            uploadOptionTitle: D = w.intl.string(w.t["MsUY/S"]),
            allowRecentAvatarsSelection: k = !0,
        } = e,
        L = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        B = (0, s.e7)([C.Z], () => C.Z.getGuildId()),
        H = (0, s.e7)([j.Z], () => j.Z.getGuild(B)),
        V = (0, u.vRw)(),
        G = o === R.pC.AVATAR || o === R.pC.BANNER,
        z = !O.ZP.canUseAnimatedAvatar(L) && o === R.pC.AVATAR,
        q = (0, m.M)(!G),
        { analyticsLocations: W, newestAnalyticsLocation: X } = (0, f.ZP)(N, d.Z.SELECT_IMAGE_MODAL),
        Y = a.useCallback(
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
        J = a.useCallback(
            (e, t) => {
                if (t.type === P.m.MP4)
                    return Y({
                        imageUri: e,
                        file: t,
                    });
                (0, u.ZDy)(
                    async () => {
                        let { default: a } = await Promise.all([n.e("30409"), n.e("59732"), n.e("2624")]).then(
                            n.bind(n, 712451),
                        );
                        return (n) =>
                            (0, r.jsx)(
                                a,
                                _(
                                    {
                                        imageUri: e,
                                        file: t,
                                        onCrop: Y,
                                        uploadType: o,
                                        showUpsellHeader: g,
                                        analyticsPage: null == E ? void 0 : E.page,
                                    },
                                    n,
                                ),
                            );
                    },
                    { contextKey: V },
                );
            },
            [null == E ? void 0 : E.page, V, Y, g, o],
        ),
        K = a.useCallback(() => {
            (0, S.Z)(p);
        }, [p]),
        Q = a.useCallback(() => {
            (0, u.ZDy)(
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
                                        return Y({
                                            imageUri: t,
                                            file: n,
                                            isFromTenor: !0,
                                        });
                                    },
                                    showUpsellHeader: g,
                                    analyticsPage: null == E ? void 0 : E.page,
                                },
                                t,
                            ),
                        );
                },
                { contextKey: V },
            );
        }, [null == E ? void 0 : E.page, V, Y, g, o]);
    a.useEffect(() => {
        z &&
            x.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: W,
            }),
            x.default.track(T.rMx.OPEN_MODAL, {
                type: T.jXE.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: E,
                location_stack: W,
                upload_type: o,
            });
    }, [z, E, W, o]);
    let $ = g && q,
        ee = k && o === R.pC.AVATAR;
    return (0, r.jsx)(c.u_l, {
        transitionState: t,
        onClose: l,
        size: "md",
        title: I,
        actions: [],
        children: (0, r.jsxs)("div", {
            className: F.modalContent,
            children: [
                (0, r.jsxs)("div", {
                    className: F.imageSelectionSection,
                    children: [
                        (0, r.jsxs)("ul", {
                            className: F.optionsList,
                            "aria-label": w.intl.string(w.t.iBnqtQ),
                            children: [
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)(U, {
                                        label: D,
                                        uploadType: o,
                                        guild: H,
                                        handleOpenImageEditingModal: J,
                                        maxFileSizeBytes: p,
                                        filters: y,
                                        handleFileSizeError: K,
                                    }),
                                }),
                                (0, r.jsx)("li", {
                                    children: (0, r.jsx)(M, {
                                        uploadType: o,
                                        guild: H,
                                        handleOpenGIFPickerModal: Q,
                                    }),
                                }),
                            ],
                        }),
                        null != Z
                            ? (0, r.jsx)(u.Text, {
                                  className: F.imageSpecifications,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: Z,
                              })
                            : null,
                    ],
                }),
                ee && (0, r.jsx)(A.Z, { onComplete: Y }),
                $ &&
                    (0, r.jsx)(h.Z, {
                        uploadType: o,
                        analyticsSource: X,
                        showUpsell: !0,
                        position: "inline",
                        className: F.premiumUpsell,
                    }),
            ],
        }),
    });
}
