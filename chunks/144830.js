s.d(t, { A: () => w });
var n = s(627968),
    i = s(64700),
    l = s(503698),
    a = s.n(l),
    o = s(311907),
    r = s(990078),
    c = s(397927),
    d = s(442433),
    u = s(212245),
    m = s(964486),
    x = s(793574),
    p = s(688810),
    g = s(607470),
    A = s(421838),
    v = s(891540),
    f = s(738011),
    N = s(954571),
    h = s(486020),
    j = s(661191),
    O = s(965162),
    _ = s(957153),
    D = s(577718),
    I = s(652215),
    C = s(897513),
    T = s(339984),
    E = s(788868),
    b = s(985018),
    S = s(943374);
function U(e) {
    let {
        icon: t,
        onClick: s,
        text: i,
        children: l,
        className: o,
        selected: r = !1,
        disabled: d = !1,
        onMouseLeave: u,
        onBlur: m,
    } = e;
    return (0, n.jsxs)(c.DUT, {
        className: a()(o, S.gf, { [S.JI]: r, [S.A7]: d }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : s,
        children: [
            r ? (0, n.jsx)("div", { className: S.SH }) : null,
            (0, n.jsxs)("div", {
                className: S.kV,
                children: [
                    l,
                    (0, n.jsxs)("div", {
                        className: S.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: S.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(c.Text, {
                                className: S.V7,
                                color: "none",
                                variant: "text-sm/normal",
                                children: i,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { option: t, source: s, isAnimated: l } = e,
        [a, o] = i.useState(!1);
    if (
        (i.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !l || null == t)
    )
        return (0, n.jsx)("div", { className: S.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, h.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: S.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function y(e) {
    let {
            option: t,
            source: l,
            selected: r = !1,
            onSelectOption: m,
            isAnimatedImage: h,
            isVideo: j,
            hotspotLocation: _,
        } = e,
        D = (0, u.p)(),
        { analyticsLocations: C } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        T = (0, o.bG)([v.A], () => null != _ && v.A.hasHotspot(_)),
        U = i.useCallback((e) => {
            if (!(0, f.u)(e)) throw e;
        }, []),
        y = j
            ? (0, n.jsx)(g.A, { className: S.PQ, src: l, loop: !0, playOnHover: !0, muted: !0, onPlayError: U })
            : (0, n.jsx)(k, { isAnimated: h, option: (0, O.d1)(t) ? t : void 0, source: l });
    function P() {
        null != _ &&
            T &&
            (A.sF(_),
            N.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: E.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: D.location,
                location_stack: C,
            }));
    }
    return (0, n.jsxs)(c.DUT, {
        className: a()(S.gf, { [S.JI]: r }),
        onClick: () => m(t),
        onContextMenu: (e) =>
            (0, d.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: r });
            }),
        children: [
            r ? (0, n.jsx)("div", { className: S.SH }) : null,
            (0, n.jsx)("div", { onFocus: P, onMouseEnter: P, className: S.kV, children: y }),
            j || h
                ? (0, n.jsx)("div", {
                      className: S.uZ,
                      children: (0, n.jsx)(c.udU, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            T && (0, n.jsx)(c.LpS, { text: b.intl.string(b.t.y2b7CA), className: S.$5 }),
        ],
    });
}
function P() {
    return (0, n.jsxs)("div", {
        className: S.j1,
        children: [
            (0, n.jsx)(c.tvc, { size: "md", color: "currentColor", className: S.eo }),
            (0, n.jsx)(c.Text, { variant: "text-sm/normal", children: b.intl.string(b.t["T+yRY3"]) }),
        ],
    });
}
function M(e) {
    let { onClick: t, tooltipText: s, disabled: i = !1 } = e,
        l = (0, o.bG)([v.A], () => v.A.hasHotspot(C._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        A.sF(C._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let d = l ? b.intl.string(b.t["5TUJOv"]) : s;
    return (0, n.jsx)(r.m, {
        text: d,
        children: (0, n.jsxs)("div", {
            className: S.$g,
            children: [
                (0, n.jsxs)(U, {
                    className: S.__invalid_backgroundOptionBlurred,
                    disabled: i,
                    icon: c.XGR,
                    onClick: t,
                    onMouseLeave: a,
                    onBlur: a,
                    text: (0, n.jsxs)("div", {
                        className: S.Us,
                        children: [
                            (0, n.jsx)(c.tvc, { size: "md", color: "currentColor", className: S.PK }),
                            (0, n.jsx)("div", { className: S.kr, children: b.intl.string(b.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: S.eD }), (0, n.jsx)("div", { className: S.G5 })],
                }),
                l && (0, n.jsx)(c.LpS, { text: b.intl.string(b.t.y2b7CA), className: S.$5 }),
            ],
        }),
    });
}
function B(e) {
    let { onClick: t } = e,
        s = (0, u.p)(),
        { analyticsLocations: i } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, m.Ay)(() => {
            N.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: E.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: i,
            });
        }),
        (0, n.jsx)(M, { onClick: t, tooltipText: b.intl.string(b.t["IqE0T/"]) })
    );
}
function L(e) {
    let { onAddBackgroundImage: t, disabled: i } = e,
        l = (0, c.k34)(),
        a = i ? b.intl.formatToPlainString(b.t.ykGFeD, { maxCustomBackgrounds: 25 }) : b.intl.string(b.t.Qx0tFc),
        o = [{ name: b.intl.string(b.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)(M, {
        disabled: i,
        onClick: function () {
            (0, c.mMO)(
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("81028"),
                        s.e("79149"),
                        s.e("53653"),
                        s.e("90796"),
                    ]).then(s.bind(s, 551028));
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: D.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: i } = e;
                                return t(s, n, i);
                            },
                            uploadType: T.HL.VIDEO_BACKGROUND,
                            filters: o,
                            modalTitle: b.intl.string(b.t.yG2pUi),
                            imageSpecifications: b.intl.string(b.t["72OaxN"]),
                            uploadOptionTitle: b.intl.string(b.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: l },
            );
        },
        tooltipText: a,
    });
}
function w(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: l,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: d,
        } = e,
        u = i.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? j.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        m = u.length >= 25,
        { analyticsLocations: g } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_OPTIONS),
        A = Object.values((0, _.A)()).sort((e, t) => D.sl[e.id] - D.sl[t.id]);
    return (0, n.jsx)(p.f5, {
        value: g,
        children: (0, n.jsxs)("div", {
            className: S.to,
            children: [
                (0, n.jsx)(U, {
                    selected: null == l,
                    icon: c.KTN,
                    onClick: () => a(null),
                    text: b.intl.string(b.t.fUdMeO),
                }),
                (0, n.jsx)(U, {
                    selected: "blur" === l,
                    icon: c.fBX,
                    onClick: () => a("blur"),
                    text: b.intl.string(b.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: S.LJ }),
                }),
                t ? (0, n.jsx)(L, { onAddBackgroundImage: d, disabled: m }) : (0, n.jsx)(B, { onClick: o }),
                u.map((e) => {
                    let t = (0, h.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              r.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(P, {}),
                                  "aria-label": b.intl.string(b.t["T+yRY3"]),
                                  children: (0, n.jsx)(
                                      y,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, O.d1)(l) && l.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, h.q6)(e.asset),
                                          isAnimatedImage: (0, h.VI)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                A.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        r.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, n.jsx)(
                                y,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: l === e.id,
                                    onSelectOption: a,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                },
                                e.id,
                            ),
                        },
                        e.id,
                    );
                }),
            ],
        }),
    });
}
