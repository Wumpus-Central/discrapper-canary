s.d(t, { A: () => es });
var n = s(627968),
    l = s(64700),
    i = s(17928),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(428262),
    u = s(285918),
    m = s(912630),
    x = s(965162),
    p = s(413339),
    g = s(952572),
    A = s(503698),
    j = s.n(A),
    f = s(990078),
    N = s(939249),
    _ = s(834730),
    h = s(782134),
    E = s(812993),
    O = s(403581),
    I = s(750943),
    v = s(638495),
    C = s(428678),
    b = s(635739),
    k = s(442433),
    y = s(964486),
    S = s(793574),
    T = s(688810),
    D = s(607470),
    U = s(421838),
    L = s(891540),
    B = s(738011),
    M = s(174459),
    P = s(486020),
    w = s(935208),
    G = s(498559),
    R = s(577718),
    V = s(652215),
    H = s(897513),
    F = s(339984),
    W = s(788868),
    K = s(375708),
    z = s(941531);
function J(e) {
    let {
        icon: t,
        onClick: s,
        text: l,
        children: i,
        className: a,
        selected: o = !1,
        disabled: r = !1,
        onMouseLeave: c,
        onBlur: d,
    } = e;
    return (0, n.jsxs)(N.D, {
        className: j()(a, z.gf, { [z.JI]: o, [z.A7]: r }),
        onMouseLeave: c,
        onBlur: d,
        onClick: r ? void 0 : s,
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsxs)("div", {
                className: z.kV,
                children: [
                    i,
                    (0, n.jsxs)("div", {
                        className: z.fP,
                        children: [
                            (0, n.jsx)(t, {
                                className: z.ob,
                                color: "currentColor",
                                size: "custom",
                                width: 18,
                                height: 18,
                            }),
                            (0, n.jsx)(_.E, { className: z.V7, color: "none", variant: "text-sm/normal", children: l }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function Q(e) {
    let { option: t, source: s, isAnimated: i } = e,
        [a, o] = l.useState(!1);
    if (
        (l.useEffect(() => {
            new Image().src = s;
        }, [s]),
        !i || null == t)
    )
        return (0, n.jsx)("div", { className: z.PQ, style: { backgroundImage: `url(${s})` } });
    let r = (0, P.Bo)({ userId: t.user_id, assetId: t.id, assetHash: t.asset, size: 720, canAnimate: !1 });
    return (0, n.jsx)("img", {
        onMouseMove: () => o(!0),
        onMouseLeave: () => o(!1),
        className: z.PQ,
        src: a ? s : r,
        alt: t.id,
    });
}
function Y(e) {
    let {
            option: t,
            source: a,
            selected: o = !1,
            onSelectOption: c,
            isAnimatedImage: d,
            isVideo: u,
            hotspotLocation: m,
            ariaLabel: p,
        } = e,
        g = (0, r.p)(),
        { analyticsLocations: A } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_IMAGE_OPTION),
        f = (0, i.bG)([L.A], () => null != m && L.A.hasHotspot(m)),
        _ = l.useCallback((e) => {
            if (!(0, B.u)(e)) throw e;
        }, []),
        O = u
            ? (0, n.jsx)(D.A, { className: z.PQ, src: a, loop: !0, playOnHover: !0, muted: !0, onPlayError: _ })
            : (0, n.jsx)(Q, { isAnimated: d, option: (0, x.d1)(t) ? t : void 0, source: a });
    function I() {
        null != m &&
            f &&
            (U.sF(m),
            M.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,
                location: g.location,
                location_stack: A,
            }));
    }
    return (0, n.jsxs)(N.D, {
        className: j()(z.gf, { [z.JI]: o }),
        "aria-label": p,
        onClick: () => c(t),
        onContextMenu: (e) =>
            (0, k.L3)(e, async () => {
                let { default: e } = await s.e("22305").then(s.bind(s, 5752));
                return (s) => (0, n.jsx)(e, { ...s, backgroundOption: t, optionIsInUse: o });
            }),
        children: [
            o ? (0, n.jsx)("div", { className: z.SH }) : null,
            (0, n.jsx)("div", { onFocus: I, onMouseEnter: I, className: z.kV, children: O }),
            u || d
                ? (0, n.jsx)("div", {
                      className: z.uZ,
                      children: (0, n.jsx)(h.u, { size: "xxs", color: "currentColor" }),
                  })
                : null,
            f && (0, n.jsx)(E.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
        ],
    });
}
function Z() {
    return (0, n.jsxs)("div", {
        className: z.j1,
        children: [
            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.eo }),
            (0, n.jsx)(_.E, { variant: "text-sm/normal", children: K.intl.string(K.t["T+yRY3"]) }),
        ],
    });
}
function $(e) {
    let { onClick: t, tooltipText: s, disabled: l = !1 } = e,
        a = (0, i.bG)([L.A], () => L.A.hasHotspot(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW));
    function o() {
        U.sF(H._.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW);
    }
    let r = a ? K.intl.string(K.t["5TUJOv"]) : s;
    return (0, n.jsx)(f.m, {
        text: r,
        children: (0, n.jsxs)("div", {
            className: z.$g,
            children: [
                (0, n.jsxs)(J, {
                    className: z.__invalid_backgroundOptionBlurred,
                    disabled: l,
                    icon: I.X,
                    onClick: t,
                    onMouseLeave: o,
                    onBlur: o,
                    text: (0, n.jsxs)("div", {
                        className: z.Us,
                        children: [
                            (0, n.jsx)(O.t, { size: "md", color: "currentColor", className: z.PK }),
                            (0, n.jsx)("div", { className: z.kr, children: K.intl.string(K.t["1t7U8W"]) }),
                        ],
                    }),
                    children: [(0, n.jsx)("div", { className: z.eD }), (0, n.jsx)("div", { className: z.G5 })],
                }),
                a && (0, n.jsx)(E.Lp, { text: K.intl.string(K.t.y2b7CA), className: z.$5 }),
            ],
        }),
    });
}
function q(e) {
    let { onClick: t } = e,
        s = (0, r.p)(),
        { analyticsLocations: l } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_CUSTOM_UPSELL);
    return (
        (0, y.Ay)(() => {
            M.default.track(V.HAw.PREMIUM_UPSELL_VIEWED, {
                type: W.e.VIDEO_BACKGROUNDS_INLINE,
                location: s.location,
                location_stack: l,
            });
        }),
        (0, n.jsx)($, { onClick: t, tooltipText: K.intl.string(K.t["IqE0T/"]) })
    );
}
function X(e) {
    let { onAddBackgroundImage: t, disabled: l } = e,
        i = (0, v.k)(),
        o = l ? K.intl.formatToPlainString(K.t.ykGFeD, { maxCustomBackgrounds: 25 }) : K.intl.string(K.t.Qx0tFc),
        r = [{ name: K.intl.string(K.t["Sp2NF+"]), extensions: ["jpg", "jpeg", "png", "gif", "mp4"] }];
    return (0, n.jsx)($, {
        disabled: l,
        onClick: function () {
            (0, a.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        s.e("79465"),
                        s.e("3951"),
                        s.e("43662"),
                        s.e("50985"),
                        s.e("54048"),
                        s.e("99666"),
                        s.e("50015"),
                        s.e("62680"),
                        s.e("88559"),
                        s.e("21825"),
                        s.e("33902"),
                        s.e("99999"),
                        s.e("1555"),
                        s.e("29666"),
                        s.e("93513"),
                        s.e("47011"),
                        s.e("79149"),
                        s.e("90017"),
                        s.e("99150"),
                        s.e("60987"),
                    ]).then(s.bind(s, 902550));
                    return (s) =>
                        (0, n.jsx)(e, {
                            maxFileSizeBytes: R.G9,
                            onComplete: (e) => {
                                let { imageUri: s, file: n, isFromTenor: l } = e;
                                return t(s, n, l);
                            },
                            uploadType: F.HL.VIDEO_BACKGROUND,
                            filters: r,
                            modalTitle: K.intl.string(K.t.yG2pUi),
                            imageSpecifications: K.intl.string(K.t["72OaxN"]),
                            uploadOptionTitle: K.intl.string(K.t.xsW8u6),
                            showUpsellHeader: !0,
                            ...s,
                        });
                },
                { contextKey: i },
            );
        },
        tooltipText: o,
    });
}
function ee(e) {
    let {
            canUseCustomBackgrounds: t,
            customBackgroundOptions: s,
            selectedOption: i,
            onSelectOption: a,
            onUpsellClick: o,
            onAddBackgroundImage: r,
        } = e,
        c = l.useMemo(
            () =>
                s.sort((e, t) =>
                    null == e.last_used || null == t.last_used
                        ? w.default.compare(t.id, e.id)
                        : new Date(t.last_used).getTime() - new Date(e.last_used).getTime(),
                ),
            [s],
        ),
        d = c.length >= 25,
        { analyticsLocations: u } = (0, T.Ay)(S.A.VIDEO_BACKGROUND_OPTIONS),
        m = Object.values((0, G.A)()).sort((e, t) => R.sl[e.id] - R.sl[t.id]);
    return (0, n.jsx)(T.f5, {
        value: u,
        children: (0, n.jsxs)("div", {
            className: z.to,
            children: [
                (0, n.jsx)(J, {
                    selected: null == i,
                    icon: C.K,
                    onClick: () => a(null),
                    text: K.intl.string(K.t.fUdMeO),
                }),
                (0, n.jsx)(J, {
                    selected: "blur" === i,
                    icon: b.f,
                    onClick: () => a("blur"),
                    text: K.intl.string(K.t.LhSyL8),
                    children: (0, n.jsx)("div", { className: z.LJ }),
                }),
                t ? (0, n.jsx)(X, { onAddBackgroundImage: r, disabled: d }) : (0, n.jsx)(q, { onClick: o }),
                c.map((e) => {
                    let t = (0, P.Bo)({ userId: e.user_id, assetId: e.id, assetHash: e.asset, size: 720 });
                    return null == t
                        ? null
                        : (0, n.jsx)(
                              f.m,
                              {
                                  __unsupportedReactNodeAsText: (0, n.jsx)(Z, {}),
                                  "aria-label": K.intl.string(K.t["T+yRY3"]),
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(
                                      Y,
                                      {
                                          option: e,
                                          source: t,
                                          selected: (0, x.d1)(i) && i.id === e.id,
                                          onSelectOption: a,
                                          isVideo: (0, P.q6)(e.asset),
                                          isAnimatedImage: (0, P.VI)(e.asset),
                                          ariaLabel: K.intl.string(K.t["T+yRY3"]),
                                      },
                                      e.id,
                                  ),
                              },
                              e.id,
                          );
                }),
                m.map((e) => {
                    let t = !0 === e.isVideo;
                    return (0, n.jsx)(
                        f.m,
                        {
                            text: e.name,
                            "aria-label": e.name,
                            ariaHidden: !0,
                            children: (0, n.jsx)(
                                Y,
                                {
                                    option: e.id,
                                    source: e.source,
                                    selected: i === e.id,
                                    onSelectOption: a,
                                    isVideo: t,
                                    isAnimatedImage: !1,
                                    hotspotLocation: e.hotspotLocation,
                                    ariaLabel: e.name,
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
var et = s(693591);
function es(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: A,
            onSelectBackgroundOption: j,
            currentDeviceId: f,
            className: N,
        } = e,
        _ = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [h, E] = l.useState(null),
        O = (0, g.A)(),
        I = d.Ay.canUseCustomBackgrounds(_);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let v = (0, i.cf)([m.A], () => (I ? m.A.videoFilterAssets : {})),
        C = l.useMemo(() => Object.values(v).filter((e) => e.type === R.yZ.BACKGROUND), [v]),
        b = (0, r.p)(),
        k = { isVideoBackgroundSupported: O, onSelectBackgroundOption: j, selectedBackgroundOption: A },
        y = l.useRef(k);
    l.useEffect(() => {
        y.current = k;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = y.current;
            e ? (0, p.S1)(s, f, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [f]);
    let S = (e) => {
        j(e),
            (0, p.S1)(e, f, { location: b.location })
                .then(() => E(null))
                .catch(() => {
                    E(K.intl.string(K.t.ejrSLe)), (0, p.S1)(null, f, { location: b.location });
                });
    };
    return O
        ? (0, n.jsx)("div", {
              className: N,
              children: (0, n.jsx)(o.D, {
                  label: K.intl.string(K.t.lZTUPs),
                  errorMessage: h,
                  children: (0, n.jsx)(ee, {
                      canUseCustomBackgrounds: I,
                      customBackgroundOptions: C,
                      selectedOption: A,
                      onSelectOption: S,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await Promise.all([
                                  s.e("50568"),
                                  s.e("49623"),
                                  s.e("14127"),
                                  s.e("77083"),
                                  s.e("46461"),
                                  s.e("47944"),
                                  s.e("74414"),
                                  s.e("13495"),
                                  s.e("33287"),
                                  s.e("19709"),
                                  s.e("47754"),
                                  s.e("43147"),
                                  s.e("4394"),
                                  s.e("27252"),
                                  s.e("76167"),
                                  s.e("4080"),
                                  s.e("6026"),
                                  s.e("16287"),
                                  s.e("78022"),
                                  s.e("90862"),
                                  s.e("29877"),
                                  s.e("62203"),
                                  s.e("90266"),
                                  s.e("66633"),
                                  s.e("78014"),
                                  s.e("16918"),
                                  s.e("33730"),
                                  s.e("91483"),
                                  s.e("66434"),
                                  s.e("85566"),
                                  s.e("61558"),
                                  s.e("4207"),
                                  s.e("16192"),
                                  s.e("71413"),
                                  s.e("59914"),
                                  s.e("82655"),
                                  s.e("76821"),
                                  s.e("67687"),
                                  s.e("55642"),
                                  s.e("97271"),
                                  s.e("67865"),
                                  s.e("79989"),
                                  s.e("50842"),
                                  s.e("63867"),
                                  s.e("56405"),
                                  s.e("22513"),
                                  s.e("75120"),
                                  s.e("25508"),
                                  s.e("22256"),
                                  s.e("87261"),
                                  s.e("63160"),
                                  s.e("45554"),
                                  s.e("36761"),
                                  s.e("69292"),
                                  s.e("32993"),
                                  s.e("98488"),
                                  s.e("31591"),
                                  s.e("9399"),
                                  s.e("4704"),
                                  s.e("85497"),
                                  s.e("91024"),
                                  s.e("33865"),
                                  s.e("42309"),
                                  s.e("29351"),
                                  s.e("43233"),
                                  s.e("79760"),
                                  s.e("22796"),
                                  s.e("4276"),
                                  s.e("50180"),
                                  s.e("37497"),
                                  s.e("60193"),
                                  s.e("53684"),
                                  s.e("89050"),
                                  s.e("88610"),
                                  s.e("9396"),
                                  s.e("26564"),
                                  s.e("77529"),
                                  s.e("1055"),
                                  s.e("10061"),
                                  s.e("29944"),
                                  s.e("57766"),
                                  s.e("3951"),
                                  s.e("70736"),
                                  s.e("91552"),
                                  s.e("39865"),
                                  s.e("50870"),
                                  s.e("69213"),
                                  s.e("86650"),
                                  s.e("23036"),
                                  s.e("43608"),
                                  s.e("59731"),
                                  s.e("40690"),
                                  s.e("49993"),
                                  s.e("52196"),
                                  s.e("85899"),
                                  s.e("61322"),
                                  s.e("43031"),
                                  s.e("22656"),
                                  s.e("25964"),
                                  s.e("28379"),
                                  s.e("41737"),
                                  s.e("92330"),
                                  s.e("53233"),
                                  s.e("96901"),
                                  s.e("71796"),
                                  s.e("26913"),
                                  s.e("33600"),
                                  s.e("49645"),
                                  s.e("13233"),
                                  s.e("25339"),
                                  s.e("84454"),
                                  s.e("1887"),
                                  s.e("39995"),
                                  s.e("25568"),
                                  s.e("29272"),
                                  s.e("97391"),
                                  s.e("67332"),
                                  s.e("57114"),
                                  s.e("90059"),
                                  s.e("53552"),
                                  s.e("58127"),
                                  s.e("816"),
                                  s.e("43683"),
                                  s.e("59303"),
                                  s.e("31610"),
                                  s.e("83893"),
                                  s.e("70278"),
                                  s.e("16860"),
                                  s.e("56359"),
                                  s.e("63051"),
                                  s.e("99501"),
                                  s.e("59494"),
                                  s.e("67458"),
                                  s.e("58427"),
                                  s.e("20642"),
                                  s.e("3471"),
                                  s.e("57016"),
                                  s.e("72334"),
                                  s.e("41625"),
                                  s.e("7959"),
                                  s.e("60717"),
                                  s.e("10324"),
                                  s.e("85484"),
                                  s.e("2672"),
                                  s.e("31135"),
                                  s.e("55929"),
                                  s.e("26128"),
                                  s.e("11262"),
                                  s.e("34430"),
                                  s.e("33460"),
                                  s.e("82314"),
                                  s.e("25677"),
                                  s.e("85411"),
                                  s.e("88804"),
                                  s.e("89001"),
                                  s.e("54558"),
                                  s.e("55990"),
                                  s.e("73679"),
                                  s.e("35538"),
                                  s.e("73178"),
                                  s.e("61274"),
                                  s.e("41229"),
                                  s.e("31592"),
                                  s.e("28339"),
                                  s.e("97638"),
                                  s.e("22995"),
                                  s.e("70141"),
                                  s.e("24754"),
                                  s.e("72651"),
                                  s.e("29363"),
                                  s.e("88016"),
                                  s.e("38886"),
                                  s.e("84133"),
                                  s.e("30240"),
                                  s.e("78179"),
                                  s.e("96040"),
                                  s.e("57447"),
                                  s.e("27282"),
                                  s.e("7339"),
                                  s.e("90241"),
                                  s.e("37271"),
                                  s.e("92866"),
                                  s.e("50748"),
                                  s.e("4785"),
                                  s.e("53075"),
                                  s.e("51762"),
                                  s.e("91680"),
                                  s.e("57036"),
                                  s.e("57174"),
                                  s.e("44649"),
                                  s.e("207"),
                                  s.e("24199"),
                                  s.e("54048"),
                                  s.e("88941"),
                                  s.e("61379"),
                                  s.e("25693"),
                                  s.e("32606"),
                                  s.e("28154"),
                                  s.e("4369"),
                                  s.e("11523"),
                                  s.e("10004"),
                                  s.e("77473"),
                                  s.e("53930"),
                                  s.e("23353"),
                                  s.e("18943"),
                                  s.e("7167"),
                                  s.e("25279"),
                                  s.e("36320"),
                                  s.e("87306"),
                                  s.e("92789"),
                                  s.e("84967"),
                                  s.e("37687"),
                                  s.e("90889"),
                                  s.e("41043"),
                                  s.e("26780"),
                                  s.e("44265"),
                                  s.e("8304"),
                                  s.e("84103"),
                                  s.e("62875"),
                                  s.e("30920"),
                                  s.e("63095"),
                                  s.e("70653"),
                                  s.e("52266"),
                                  s.e("67858"),
                                  s.e("8892"),
                                  s.e("92583"),
                                  s.e("39810"),
                                  s.e("64615"),
                                  s.e("31825"),
                                  s.e("96443"),
                                  s.e("97526"),
                                  s.e("79525"),
                                  s.e("82069"),
                                  s.e("75134"),
                                  s.e("1462"),
                                  s.e("57598"),
                                  s.e("99666"),
                                  s.e("55184"),
                                  s.e("74926"),
                                  s.e("28866"),
                                  s.e("50015"),
                                  s.e("72442"),
                                  s.e("54282"),
                                  s.e("21574"),
                                  s.e("31445"),
                                  s.e("62931"),
                                  s.e("59880"),
                                  s.e("14805"),
                                  s.e("73547"),
                                  s.e("24761"),
                                  s.e("54791"),
                                  s.e("99593"),
                                  s.e("60658"),
                                  s.e("55314"),
                                  s.e("89094"),
                                  s.e("6338"),
                                  s.e("47834"),
                                  s.e("47555"),
                                  s.e("18573"),
                                  s.e("29177"),
                                  s.e("61935"),
                                  s.e("88990"),
                                  s.e("21856"),
                                  s.e("58038"),
                                  s.e("32551"),
                                  s.e("62680"),
                                  s.e("46909"),
                                  s.e("26803"),
                                  s.e("65743"),
                                  s.e("88559"),
                                  s.e("21825"),
                                  s.e("32079"),
                                  s.e("39665"),
                                  s.e("23532"),
                                  s.e("97270"),
                                  s.e("86949"),
                                  s.e("33902"),
                                  s.e("53614"),
                                  s.e("18401"),
                                  s.e("31145"),
                                  s.e("71577"),
                                  s.e("51243"),
                                  s.e("27773"),
                                  s.e("63618"),
                                  s.e("99999"),
                                  s.e("53374"),
                                  s.e("93158"),
                                  s.e("56313"),
                                  s.e("88740"),
                                  s.e("52073"),
                                  s.e("34691"),
                                  s.e("92731"),
                                  s.e("28152"),
                                  s.e("7962"),
                                  s.e("64325"),
                                  s.e("1555"),
                                  s.e("66901"),
                                  s.e("40716"),
                              ]).then(s.bind(s, 629959));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...b.location, object: V.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, u.F9)(e, R.yZ.BACKGROUND);
                                  S(n), (0, x.D1)(n, t.type === et.a.MP4, s), E(null);
                              } catch (e) {
                                  E(e.message);
                              }
                              n();
                          });
                      },
                  }),
              }),
          })
        : null;
}
