a.d(t, { default: () => V });
var n = a(627968),
    s = a(64700),
    r = a(503698),
    l = a.n(r),
    i = a(311907),
    c = a(990078),
    u = a(732955),
    o = a(397927),
    d = a(793574),
    A = a(688810),
    h = a(753838),
    f = a(946274),
    g = a(702211),
    m = a(699576),
    x = a(392107),
    C = a(778576),
    p = a(45837),
    E = a(71393),
    T = a(967198),
    N = a(287809),
    R = a(954571),
    j = a(473145),
    v = a(927578),
    b = a(854896),
    y = a(2553),
    _ = a(652215),
    F = a(339984),
    S = a(693591),
    L = a(985018),
    H = a(254875);
let w = [
    { gif: a(203736), png: a(775788) },
    { gif: a(640237), png: a(689006) },
    { gif: a(964805), png: a(533798) },
    { gif: a(322821), png: a(891814) },
];
function I(e) {
    let { shouldAnimate: t = !0 } = e;
    return (0, n.jsx)("div", {
        className: H.p8,
        children: w.map((e) =>
            (0, n.jsx)("div", { className: H.nX, style: { backgroundImage: `url(${t ? e.gif : e.png})` } }, e.gif),
        ),
    });
}
function U(e) {
    let { guildFeature: t, guild: a } = e;
    if (null == t || null == a) return;
    let n = (0, j.Ys)(t),
        s = a.features.has(t);
    if (null == n) return;
    let r = (0, j.gb)(n);
    return s
        ? L.intl.formatToPlainString(L.t.u3L3TX, { levelName: r })
        : L.intl.formatToPlainString(L.t["r/v25U"], { levelName: r });
}
function k(e) {
    let { guildFeature: t, guild: a } = e;
    return (0, n.jsx)("div", {
        className: H.x9,
        children: (0, n.jsx)(h.A, { guildFeature: t, guild: a, hideTooltip: !0 }),
    });
}
function M(e) {
    let { icon: t, label: a, guildFeature: s, guild: r, shouldShowPremiumIcon: i } = e,
        u = null != r && null != s;
    return (0, n.jsxs)("div", {
        className: l()(H.q3, { [H.j5]: u }),
        "aria-hidden": !0,
        children: [
            (0, n.jsxs)("div", {
                className: H.Mn,
                children: [
                    t,
                    (0, n.jsxs)(o.Text, {
                        variant: "text-sm/semibold",
                        className: l()(H.xo, { [H.Fy]: i }),
                        children: [
                            i &&
                                (0, n.jsx)(c.m, {
                                    asContainer: !0,
                                    text: L.intl.string(L.t["5AFxuK"]),
                                    children: (0, n.jsx)(o.tvc, { size: "xs", color: "currentColor", className: H.T$ }),
                                }),
                            a,
                        ],
                    }),
                ],
            }),
            u && (0, n.jsx)(k, { guild: r, guildFeature: s }),
        ],
    });
}
function O(e) {
    let {
            label: t,
            uploadType: a,
            guild: s,
            maxFileSizeBytes: r,
            filters: i,
            handleOpenImageEditingModal: c,
            handleFileSizeError: u,
        } = e,
        d = (0, b.CK)(a),
        A = (0, b.VS)(a, { isGIF: !1 }),
        h = U({ guildFeature: A, guild: s });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(o.vN3, {
                within: !0,
                children: (0, n.jsxs)("div", {
                    className: l()(H.uK, H.kU),
                    children: [
                        (0, n.jsx)(M, {
                            icon: (0, n.jsx)(o.XGR, { size: "md", color: "currentColor" }),
                            label: t,
                            guildFeature: A,
                            guild: s,
                            shouldShowPremiumIcon: d,
                        }),
                        (0, n.jsx)(f.Ay, {
                            "aria-label": t,
                            tabIndex: 0,
                            onChange: c,
                            maxFileSizeBytes: r,
                            onFileSizeError: u,
                            filters: i,
                            multiple: !1,
                        }),
                    ],
                }),
            }),
            null != h && (0, n.jsx)(o.AC4, { children: h }),
        ],
    });
}
function D(e) {
    let { uploadType: t, guild: a, handleOpenGIFPickerModal: s } = e,
        { shouldAnimate: r, onMouseEnter: l, onMouseLeave: i } = (0, p.A)(),
        c = (0, b.xc)(t),
        u = (0, b.VS)(t, { isGIF: !0 }),
        d = U({ guildFeature: u, guild: a });
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.DUT, {
                className: H.uK,
                onClick: s,
                "aria-label": L.intl.string(L.t["xsC+/y"]),
                onMouseEnter: l,
                onMouseLeave: i,
                children: [
                    (0, n.jsx)(I, { shouldAnimate: r }),
                    (0, n.jsx)(M, {
                        icon: (0, n.jsx)(o.Osp, { size: "md", color: "currentColor" }),
                        label: L.intl.string(L.t["xsC+/y"]),
                        guildFeature: u,
                        guild: a,
                        shouldShowPremiumIcon: c,
                    }),
                ],
            }),
            null != d && (0, n.jsx)(o.AC4, { children: d }),
        ],
    });
}
function V(e) {
    let {
            transitionState: t,
            onClose: r,
            onComplete: l,
            uploadType: c,
            maxFileSizeBytes: h,
            showUpsellHeader: f,
            filters: p,
            analyticsLocation: j,
            analyticsLocations: b = [],
            imageSpecifications: w,
            modalTitle: I = L.intl.string(L.t.DToW4e),
            uploadOptionTitle: U = L.intl.string(L.t["MsUY/S"]),
            allowRecentAvatarsSelection: k = !0,
        } = e,
        M = (0, i.bG)([N.default], () => N.default.getCurrentUser()),
        V = (0, i.bG)([T.A], () => T.A.getGuildId()),
        G = (0, i.bG)([E.A], () => E.A.getGuild(V)),
        P = (0, o.k34)(),
        B = c === F.HL.AVATAR || c === F.HL.BANNER,
        z = !v.Ay.canUseAnimatedAvatar(M) && c === F.HL.AVATAR,
        J = (0, g.b)(!B),
        { analyticsLocations: q } = (0, A.Ay)(b, d.A.SELECT_IMAGE_MODAL),
        K = s.useCallback(
            (e) => {
                let { assetOrigin: t = x.E.NEW_ASSET, imageUri: a, file: n, originalAsset: s, isFromTenor: i = !1 } = e;
                r(), l({ assetOrigin: t, imageUri: a, file: n, originalAsset: s, isFromTenor: i });
            },
            [r, l],
        ),
        W = s.useCallback(
            (e, t) => {
                if (t.type === S.a.MP4) return K({ imageUri: e, file: t });
                (0, o.mMO)(
                    async () => {
                        let { default: s } = await Promise.all([a.e("35929"), a.e("74571"), a.e("29077")]).then(
                            a.bind(a, 142630),
                        );
                        return (a) =>
                            (0, n.jsx)(s, {
                                imageUri: e,
                                file: t,
                                onCrop: K,
                                uploadType: c,
                                showUpsellHeader: f,
                                analyticsPage: j?.page,
                                ...a,
                            });
                    },
                    { contextKey: P },
                );
            },
            [j?.page, P, K, f, c],
        ),
        X = s.useCallback(() => {
            (0, y.A)(h);
        }, [h]),
        Z = s.useCallback(() => {
            (0, o.mMO)(
                async () => {
                    let { default: e } = await a.e("87916").then(a.bind(a, 682503));
                    return (t) =>
                        (0, n.jsx)(e, {
                            uploadType: c,
                            onComplete: (e) => {
                                let { imageUri: t, file: a } = e;
                                return K({ imageUri: t, file: a, isFromTenor: !0 });
                            },
                            showUpsellHeader: f,
                            analyticsPage: j?.page,
                            ...t,
                        });
                },
                { contextKey: P },
            );
        }, [j?.page, P, K, f, c]);
    s.useEffect(() => {
        z &&
            R.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
                type: _.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location_stack: q,
            }),
            R.default.track(_.HAw.OPEN_MODAL, {
                type: _.JJy.UPLOAD_FILE_OR_CHOOSE_GIF_MODAL,
                location: j,
                location_stack: q,
                upload_type: c,
            });
    }, [z, j, q, c]);
    let $ = f && J,
        Y = k && c === F.HL.AVATAR;
    return (0, n.jsx)(u.aFV, {
        transitionState: t,
        onClose: r,
        size: "md",
        title: I,
        actions: [],
        children: (0, n.jsxs)("div", {
            className: H.jE,
            children: [
                (0, n.jsxs)("div", {
                    className: H.pd,
                    children: [
                        (0, n.jsxs)("ul", {
                            className: H.f9,
                            "aria-label": L.intl.string(L.t.iBnqtQ),
                            children: [
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(O, {
                                        label: U,
                                        uploadType: c,
                                        guild: G,
                                        handleOpenImageEditingModal: W,
                                        maxFileSizeBytes: h,
                                        filters: p,
                                        handleFileSizeError: X,
                                    }),
                                }),
                                (0, n.jsx)("li", {
                                    children: (0, n.jsx)(D, { uploadType: c, guild: G, handleOpenGIFPickerModal: Z }),
                                }),
                            ],
                        }),
                        null != w
                            ? (0, n.jsx)(o.Text, {
                                  className: H.KQ,
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: w,
                              })
                            : null,
                    ],
                }),
                Y && (0, n.jsx)(C.A, { onComplete: K }),
                $ && (0, n.jsx)(m.A, { uploadType: c, showUpsell: !0, position: "inline", className: H.Lu }),
            ],
        }),
    });
}
