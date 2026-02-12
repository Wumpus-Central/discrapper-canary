s.d(t, { A: () => w });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(311907),
    r = s(990078),
    c = s(397927),
    d = s(442433),
    u = s(212245),
    m = s(964486),
    x = s(793574),
    p = s(688810),
    A = s(607470),
    g = s(421838),
    f = s(891540),
    j = s(738011),
    N = s(954571),
    _ = s(486020),
    h = s(661191),
    O = s(965162),
    E = s(957153),
    v = s(577718),
    I = s(652215),
    T = s(897513),
    C = s(339984),
    S = s(788868),
    k = s(985018),
    b = s(151e3);
function y(e) {
    let {
        icon: t,
        onClick: s,
        text: l,
        children: i,
        className: o,
        selected: r = !1,
        disabled: d = !1,
        onMouseLeave: u,
        onBlur: m,
    } = e;
    return (0, n.jsxs)(c.DUT, {
        className: a()(o, b.gf, { [b.JI]: r, [b.A7]: d }),
        onMouseLeave: u,
        onBlur: m,
        onClick: d ? void 0 : s,
        children: [
            r ? (0, n.jsx)("div", { className: b.SH }) : null,
            (0, n.jsxs)("div", {
                className: b.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: b.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: b.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(c.Text, {
                                className: b.V7,
                                color: "none",
                                variant: "text-sm/normal",
                                children: l,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: b.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, _.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: b.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function U(e) {
    let {
            option: t,
            source: i,
            selected: r = !1,
            onSelectOption: m,
            isAnimatedImage: _,
            isVideo: h,
            hotspotLocation: E,
        } = e,
        v = (0, u.p)(),
        { analyticsLocations: T } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        C = (0, o.bG)([f.A], () => null != E && f.A.hasHotspot(E)),
        y = l.useCallback((e) => {
            if (!(0, j.u)(e)) throw e;
        }, []),
        U = h
            ? (0, n.jsx)(A.A, { className: b.PQ, src: i, loop: !0, playOnHover: !0, muted: !0, onPlayError: y })
            : (0, n.jsx)(D, { isAnimated: _, option: (0, O.d1)(t) ? t : void 0, source: i });
    function B() {
        null != E &&
            C &&
            (g.sF(E),
            N.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: S.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: v.location,
                location_stack: T,
            }));
    }
    return (0, n.jsxs)(c.DUT, {
        className: a()(b.gf, { [b.JI]: r }),
        onClick: () => m(t),
        onContextMenu: (e) =>
            (0, d.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: r });
            }),
        children: [
            r ? (0, n.jsx)("div", { className: b.SH }) : null,
            (0, n.jsx)("div", { onFocus: B, onMouseEnter: B, className: b.kV, children: U }),
            h || _
                ? (0, n.jsx)("div", {
                      className: b.uZ,
                      children: (0, n.jsx)(c.udU, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            C && (0, n.jsx)(c.LpS, { text: k.intl.string(k.t.y2b7CA), className: b.$5 }),
        ],
    });
}
function B() {
    return (0, n.jsxs)("div", {
        className: b.j1,
        children: [
            (0, n.jsx)(c.tvc, { size: "md", color: "currentColor", className: b.eo }),
            (0, n.jsx)(c.Text, { variant: "text-sm/normal", children: k.intl.string(k.t["T+yRY3"]) }),
        ],
    });
}
function M(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        i = (0, o.bG)([f.A], () => f.A.hasHotspot(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function a() {
        g.sF(T._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let d = i ? k.intl.string(k.t["5TUJOv"]) : s;
    return (0, n.jsx)(r.m, {
        text: d,
        children: (0, n.jsxs)("div", {
            className: b.$g,
            children: [
                (0, n.jsxs)(y, {
                    className: b.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: c.XGR,
                    onClick: t,
                    onMouseLeave: a,
                    onBlur: a,
                    text: (0, n.jsxs)("div", {
                        className: b.Us,
                        children: [
                            (0, n.jsx)(c.tvc, { size: "md", color: "currentColor", className: b.PK }),
                            (0, n.jsx)("div", { className: b.kr, children: k.intl.string(k.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: b.eD }), (0, n.jsx)("div", { className: b.G5 })],
                }),
                i && (0, n.jsx)(c.LpS, { text: k.intl.string(k.t.y2b7CA), className: b.$5 }),
            ],
        }),
    });
}
function P(e) {
    let { onClick: t } = e,
        s = (0, u.p)(),
        { analyticsLocations: l } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, m.Ay)(() => {
            N.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                type: S.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)(M, { onClick: t, tooltipText: k.intl.string(k.t["IqE0T/"]) })
    );
}
function L(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, c.k34)(),
        a = l ? k.intl.formatToPlainString(k.t.ykGFeD, { maxCustomBackgrounds: 25 }) : k.intl.string(k.t.Qx0tFc),
        o = [{ name: k.intl.string(k.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)(M, {
        disabled: l,
        onClick: function () {
            (0, c.mMO)(
                async () => {
                    let { default: e } = await Promise.all([s.e("59701"), s.e("53653"), s.e("8261")]).then(
                        s.bind(s, 551028),
                    );
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: v.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: C.HL.VIDEO_BACKGROUND,
                            filters: o,
                            modalTitle: k.intl.string(k.t.yG2pUi),
                            imageSpecifications: k.intl.string(k.t["72OaxN"]),
                            uploadOptionTitle: k.intl.string(k.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: a,
    });
}
function w(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: d,
        } = e,
        u = l.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? h.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        m = u.length >= 25,
        { analyticsLocations: A } = (0, p.Ay)(x.A.VIDEO_BACKGROUND_OPTIONS),
        g = Object.values((0, E.A)()).sort((e, t) => v.sl[e.id] - v.sl[t.id]);
    return (0, n.jsx)(p.f5, {
        value: A,
        children: (0, n.jsxs)("div", {
            className: b.to,
            children: [
                (0, n.jsx)(y, {
                    selected: null == i,
                    icon: c.KTN,
                    onClick: () => a(null),
                    text: k.intl.string(k.t.fUdMeO),
                }),
                (0, n.jsx)(y, {
                    selected: "blur" === i,
                    icon: c.fBX,
                    onClick: () => a("blur"),
                    text: k.intl.string(k.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: b.LJ }),
                }),
                t ? (0, n.jsx)(L, { onAddBackgroundImage: d, disabled: m }) : (0, n.jsx)(P, { onClick: o }),
                u.map((e) => {
                    let t = (0, _.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              r.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(B, {}),
                                  "aria-label": k.intl.string(k.t["T+yRY3"]),
                                  children: (0, n.jsx)(
                                      U,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, O.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, _.q6)(e.asset),
                                          isAnimatedImage: (0, _.VI)(e.asset),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                g.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        r.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            children: (0, n.jsx)(
                                U,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
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
