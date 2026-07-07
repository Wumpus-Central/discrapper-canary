l.d(s, { default: () => eQ });
var a = l(627968),
    t = l(64700),
    i = l(503698),
    n = l.n(i),
    r = l(562708),
    o = l(508425),
    d = l(559949),
    c = l(17928),
    u = l(52133),
    m = l(935462),
    x = l(534514),
    h = l(793574),
    N = l(688810),
    f = l(139286),
    g = l(919395),
    A = l(71393),
    p = l(287809),
    j = l(174459),
    E = l(871162),
    S = l(248778),
    C = l(750656);
let v = [...C.re, ...C.gz];
function I() {
    let e = (0, S.ux)("effect-order");
    return t.useMemo(() => (e ? v : C.re), [e]);
}
let _ = [
        d.x.DEFAULT,
        d.x.ZILLA_SLAB,
        d.x.CHERRY_BOMB,
        d.x.CHICLE,
        d.x.MUSEO_MODERNO,
        d.x.NEO_CASTEL,
        d.x.PIXELIFY,
        d.x.SINISTRE,
    ],
    L = [..._, ...C._k];
function T() {
    let e = (0, S.ux)("font-order");
    return t.useMemo(() => (e ? L : _), [e]);
}
var b = l(945096),
    y = l(898985),
    k = l(430571),
    D = l(207803),
    M = l(84540),
    O = l(652215),
    R = l(836602),
    P = l(696451),
    G = l(427262),
    U = l(403581),
    H = l(661531),
    z = l(48736),
    Y = l(887129),
    w = l(837381),
    F = l(741918),
    J = l(317097),
    W = l(990078),
    B = l(922016),
    $ = l(939249),
    K = l(22231),
    X = l(933832),
    V = l(13759);
function Z(e) {
    let { colors: s, selected: l, onSelect: t, listItemId: i, "aria-label": n } = e,
        r = (0, w.rm)(i);
    return (0, a.jsxs)("button", {
        type: "button",
        className: V.nf,
        onClick: t,
        "aria-label": n,
        ...r,
        children: [
            s.map((e, s) => (0, a.jsx)("div", { className: V._4, style: { background: (0, J.Hl)(e) } }, s)),
            l && (0, a.jsx)(X.A, { className: V.z6, size: "md", color: "currentColor" }),
        ],
    });
}
var q = l(247366),
    Q = l(315710),
    ee = l(650583),
    es = l(25597);
let el = [0, 60, 120, 180, 240, 300, 360];
function ea(e) {
    let { value: s, onChange: l, hueToColor: i, onConfirm: r, "aria-label": o, className: d } = e,
        c = (0, b.xo)((0, J.tf)(s).h),
        u = t.useRef(null);
    (0, Q.tj)(u);
    let m = t.useCallback((e) => l(i((0, b.xo)(e))), [l, i]),
        x = t.useCallback((e) => m(e.h), [m]),
        h = t.useMemo(() => `linear-gradient(to right, ${el.map((e) => (0, J.Hl)(i(e))).join(", ")})`, [i]),
        N = t.useMemo(
            () =>
                function (e) {
                    let { hsl: s } = e;
                    return (0, a.jsx)("div", { className: es.Wn, style: { background: (0, J.Hl)(i(s.h)) } });
                },
            [i],
        ),
        f = t.useCallback(
            (e) => {
                switch (e.key) {
                    case ee.dh.ARROW_LEFT:
                    case ee.dh.ARROW_DOWN:
                        m(c - 5);
                        break;
                    case ee.dh.ARROW_RIGHT:
                    case ee.dh.ARROW_UP:
                        m(c + 5);
                        break;
                    case ee.dh.HOME:
                        m(0);
                        break;
                    case ee.dh.END:
                        m(359);
                        break;
                    case ee.dh.ENTER:
                    case ee.dh.SPACE:
                        if (null == r) return;
                        r();
                        break;
                    default:
                        return;
                }
                e.preventDefault();
            },
            [c, m, r],
        );
    return (0, a.jsx)("div", {
        ref: u,
        className: n()(es.kL, d),
        children: (0, a.jsx)("div", {
            className: es.SP,
            style: { "--custom-hue-track": h },
            role: "slider",
            tabIndex: 0,
            "aria-label": o,
            "aria-valuemin": 0,
            "aria-valuemax": 360,
            "aria-valuenow": Math.round(c),
            onKeyDown: f,
            children: (0, a.jsx)(q.Hue, {
                hsl: { h: c, s: 1, l: 0.5 },
                direction: "horizontal",
                pointer: N,
                onChange: x,
            }),
        }),
    });
}
var et = l(864386),
    ei = l(375708),
    en = l(637495);
let er = () => Promise.resolve();
function eo(e) {
    let { selectedColors: s, setSelectedColors: l, className: i } = e,
        [r, o] = t.useState(!1),
        d = t.useRef(null),
        c = s[0] ?? O.TGz,
        m = t.useCallback((e) => l((0, b.cf)(e)), [l]),
        x = C.lU.findIndex((e) => (0, u.v)(e, s)),
        h = x >= 0,
        N = s.length > 0 ? s : (0, b.cf)(c),
        f = ei.intl.string(et.default["6OxgN7"]),
        g = ei.intl.string(ei.t["FHBa/1"]),
        A = (0, Y.Ay)({
            id: "gummy-color-picker",
            isEnabled: !0,
            orientation: F.Gl.HORIZONTAL,
            scrollToStart: er,
            scrollToEnd: er,
        });
    return (0, a.jsx)(w.hD, {
        navigator: A,
        children: (0, a.jsx)(w.PR, {
            children: (e) => {
                let { ref: s, ...t } = e;
                return (0, a.jsxs)("div", {
                    className: n()(en.kL, i),
                    ref: s,
                    ...t,
                    children: [
                        (0, a.jsxs)("div", {
                            className: en.Ix,
                            children: [
                                (0, a.jsx)("div", {
                                    className: n()(en.yB, { [en.EI]: h }),
                                    children:
                                        !h &&
                                        N.map((e, s) =>
                                            (0, a.jsx)(
                                                "div",
                                                { className: en._4, style: { background: (0, J.Hl)(e) } },
                                                s,
                                            ),
                                        ),
                                }),
                                (0, a.jsx)("div", {
                                    className: en.fX,
                                    children: (0, a.jsx)(B.Y, {
                                        targetElementRef: d,
                                        position: "top",
                                        align: "left",
                                        shouldShow: r,
                                        onRequestOpen: () => o(!0),
                                        onRequestClose: () => o(!1),
                                        renderPopout: () =>
                                            (0, a.jsx)(ea, {
                                                value: h ? O.TGz : c,
                                                onChange: m,
                                                hueToColor: b.UZ,
                                                onConfirm: () => o(!1),
                                                "aria-label": g,
                                            }),
                                        children: (e) =>
                                            (0, a.jsx)(W.m, {
                                                text: g,
                                                position: "top",
                                                ariaHidden: !0,
                                                children: (0, a.jsx)("div", {
                                                    ...e,
                                                    ref: d,
                                                    className: en.r9,
                                                    children: (0, a.jsx)(w.tG, {
                                                        id: "custom",
                                                        children: (e) =>
                                                            (0, a.jsx)($.D, {
                                                                ...e,
                                                                className: en.Vz,
                                                                "aria-label": g,
                                                                children: (0, a.jsx)(K.R, {
                                                                    size: "custom",
                                                                    width: 18,
                                                                    height: 18,
                                                                    color: "currentColor",
                                                                    className: en.IZ,
                                                                }),
                                                            }),
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        C.lU.map((e, s) =>
                            (0, a.jsx)(
                                Z,
                                {
                                    listItemId: `gummy-preset-${s}`,
                                    colors: e,
                                    selected: x === s,
                                    onSelect: () => l([...e]),
                                    "aria-label": `${f} ${s + 1}`,
                                },
                                s,
                            ),
                        ),
                    ],
                });
            },
        }),
    });
}
var ed = l(250229),
    ec = l(257170);
function eu(e) {
    let { selectedColors: s, setSelectedColors: l, defaultColor: i, selectedEffectId: n, className: r } = e,
        d = (0, b.as)(n) > 1,
        c = n === o.z.PRISM ? 210 : 104,
        u = (0, t.useMemo)(() => (0, C.ii)(n).map((e) => ({ colors: e, name: "" })), [n]),
        m = (0, t.useCallback)(
            (e) => {
                l([e]), j.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: e === i, colors: [e] });
            },
            [l, i],
        ),
        h = (0, t.useCallback)(
            (e) => {
                l(e), j.default.track(O.HAw.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: !1, colors: e });
            },
            [l],
        );
    return (0, a.jsxs)("div", {
        className: r,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    ei.intl.string(et.default.JOpi7z),
                    (0, a.jsx)(U.t, { size: "xs", color: H.A.colors.TEXT_DEFAULT }),
                ],
            }),
            n === o.z.GUMMY
                ? (0, a.jsx)(eo, { selectedColors: s, setSelectedColors: h })
                : (0, a.jsx)(z.default, {
                      className: ed.Ei,
                      colorContainerClassName: ed.rx,
                      defaultColor: i,
                      colors: d ? u : C.Jl,
                      value: s[0],
                      gradientColors: s,
                      onChange: m,
                      onChangeGradientColors: h,
                      isGradient: d,
                      gradientWidth: `${c}px`,
                      gradientDegrees: 90,
                      allowBlackCustomColor: !0,
                      customPickerPosition: "top",
                  }),
        ],
    });
}
var em = l(834730),
    ex = l(922301),
    eh = l(660184),
    eN = l(700090);
function ef(e) {
    let { selectedEffectId: s, setSelectedEffectId: l, className: t } = e,
        i = I(),
        n = Math.ceil(i.length / 2);
    return (0, a.jsxs)("div", {
        className: t,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    ei.intl.string(et.default["1wilM1"]),
                    (0, a.jsx)(U.t, { size: "xs", color: H.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ec.fh,
                style: { "--custom-dns-tile-columns": n },
                children: i.map((e) => (0, a.jsx)(eg, { effectId: e, selected: e === s, onClick: () => l(e) }, e)),
            }),
        ],
    });
}
function eg(e) {
    let { effectId: s, selected: l, onClick: t } = e,
        i = (0, y._)(s),
        r = C.gz.includes(s);
    return (0, a.jsxs)($.D, {
        className: n()(eN.Tw, { [eN.wH]: l }),
        onClick: t,
        children: [
            (0, a.jsx)(eh.A, {
                userName: i.name,
                effectDisplayType: ex.G.STATIC,
                displayNameStyles: i.previewStyles,
                textClassName: eN.tr,
                inProfile: !0,
            }),
            r &&
                (0, a.jsx)(em.E, {
                    variant: "text-xxs/normal",
                    color: "text-subtle",
                    className: ec.hn,
                    children: ei.intl.string(ei.t.oW0eUd),
                }),
        ],
    });
}
var eA = l(885574),
    ep = l(73392),
    ej = l(699006);
function eE(e) {
    let { selectedFontId: s, setSelectedFontId: l, displayName: t, className: i } = e,
        r = T(),
        o = s !== d.x.DEFAULT,
        c = (0, b.Xr)(t),
        u = Math.ceil(r.length / 2);
    return (0, a.jsxs)("div", {
        className: i,
        children: [
            (0, a.jsxs)(x.D, {
                variant: "heading-md/semibold",
                className: ec.sU,
                children: [
                    ei.intl.string(et.default.nP0ngb),
                    (0, a.jsx)(U.t, { size: "xs", color: H.A.colors.TEXT_DEFAULT }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ec.fh,
                style: { "--custom-dns-tile-columns": u },
                children: r.map((e) => {
                    let t = (0, ep.p)(e),
                        i = e === s,
                        r = C._k.includes(e),
                        o = ei.intl.string(t.name);
                    return (0, a.jsx)(
                        W.m,
                        {
                            text: o,
                            asContainer: !0,
                            children: (0, a.jsxs)($.D, {
                                className: n()(ej.SO, { [ej.wH]: i }),
                                onClick: () => l(e),
                                "aria-label": r ? `${o}, ${ei.intl.string(ei.t.oW0eUd)}` : o,
                                children: [
                                    (0, a.jsx)(em.E, {
                                        variant: "text-lg/semibold",
                                        color: i ? "text-strong" : "text-default",
                                        className: n()(ej.FH, t.className),
                                        children: "Gg",
                                    }),
                                    r &&
                                        (0, a.jsx)(em.E, {
                                            variant: "text-xxs/normal",
                                            color: "text-subtle",
                                            className: ec.hn,
                                            children: ei.intl.string(ei.t.oW0eUd),
                                        }),
                                ],
                            }),
                        },
                        e,
                    );
                }),
            }),
            o &&
                c &&
                (0, a.jsxs)("div", {
                    className: ej.Lb,
                    children: [
                        (0, a.jsx)(eA.m, { size: "lg" }),
                        (0, a.jsx)(em.E, {
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children: ei.intl.string(et.default["+O1xL2"]),
                        }),
                    ],
                }),
        ],
    });
}
var eS = l(821609),
    eC = l(908803),
    ev = l(87719),
    eI = l(465794),
    e_ = l(757036),
    eL = l(202541),
    eT = l(277041);
function eb(e) {
    let { onApply: s, onSurpriseMe: l, onClose: t, canApply: i } = e,
        n = (0, e_.L)(eL.PremiumTypes.TIER_2),
        r = (0, a.jsx)(eS.$, {
            variant: "secondary",
            size: "md",
            onClick: l,
            icon: { type: "rive", asset: eC.m, riveProps: { dataBinding: { fill: H.A.colors.ICON_STRONG } } },
            text: ei.intl.string(et.default.NOGFds),
        }),
        o = (0, a.jsxs)("div", {
            className: eT.k0,
            children: [
                r,
                (0, a.jsx)(W.m, {
                    text: ei.intl.string(et.default.cVTpnj),
                    shouldShow: !i,
                    children: (0, a.jsx)(eS.$, {
                        onClick: s,
                        disabled: !i,
                        text: ei.intl.string(ei.t["1Qm822"]),
                        variant: "primary",
                        size: "md",
                        fullWidth: !0,
                    }),
                }),
            ],
        }),
        d = (0, a.jsxs)("div", {
            className: eT.UX,
            children: [
                (0, a.jsxs)("div", {
                    className: eT.iQ,
                    children: [
                        (0, a.jsx)(W.m, {
                            text: ei.intl.string(ei.t["5AFxuK"]),
                            children: (0, a.jsx)(U.t, { size: "md", color: H.A.colors.ICON_STRONG }),
                        }),
                        (0, a.jsx)(em.E, {
                            variant: "text-md/medium",
                            color: "text-default",
                            className: eT.h_,
                            children: ei.intl.format(et.default.PWf0xS, {
                                onClickNitro: () => {
                                    j.default.track(O.HAw.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, ev.x)(t);
                                },
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eT.UD,
                    children: [
                        r,
                        (0, a.jsx)(eI.A, {
                            premiumModalAnalyticsLocation: {
                                section: O.JJy.DISPLAY_NAME_STYLES_MODAL_FOOTER,
                                object: O.ZSU.PREMIUM_UPSELL_BUTTON,
                            },
                            subscriptionTier: eL.pe.TIER_2,
                        }),
                    ],
                }),
            ],
        });
    return (0, a.jsx)(m.jl, { "data-migration-pending": !0, className: eT.qr, children: n ? o : d });
}
var ey = l(366010),
    ek = l(43990),
    eD = l(629584),
    eM = l(943255),
    eO = l(575181),
    eR = l(736653),
    eP = l(780898),
    eG = l(344346),
    eU = l(320095),
    eH = l(963852),
    ez = l(763754),
    eY = l(20851),
    ew = l(986687),
    eF = l(101058),
    eJ = l(999291),
    eW = l(686189),
    eB = l(946356),
    e$ = l(975571),
    eK = l(996988),
    eX = l(471260);
function eV(e) {
    let {
            user: s,
            guild: l,
            displayName: i,
            selectedFontId: r,
            selectedEffectId: o,
            selectedColors: d,
            onClose: u,
        } = e,
        x = (0, eR.Ay)(),
        h = (0, ey.M)(x),
        [N, f] = (0, t.useState)(h),
        A = (0, eJ.Ay)(s.id, null),
        { bannerSrc: p } = (0, eW.A)({ displayProfile: A, size: 413, canAnimate: !1 }),
        E = (0, c.cf)([R.A], () => R.A.getPendingChanges(l?.id)),
        S = (0, eF.V7)({ userId: s.id, image: E.pendingAvatar }),
        { userNameplate: C, guildNameplate: v, pendingNameplate: I } = (0, g.rv)(s, l?.id),
        _ = (0, eP.WK)(v);
    N && !h ? (x = O.NJ8.DARK) : !N && h && (x = O.NJ8.LIGHT);
    let L = (0, t.useCallback)(() => {
            j.default.track(O.HAw.DISPLAY_NAME_STYLES_CLOSED), u();
        }, [u]),
        T = (0, t.useCallback)((e) => {
            f(e === O.NJ8.DARK), j.default.track(O.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === O.NJ8.DARK });
        }, []),
        b = (0, t.useMemo)(
            () => ({ ...(0, ez.FT)(s, null), nick: i, displayNameStyles: { fontId: r, effectId: o, colors: d } }),
            [s, r, o, d, i],
        );
    return (0, a.jsxs)("div", {
        className: eX._l,
        children: [
            (0, a.jsx)(m.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: eX.bV,
                children: (0, a.jsx)(m.s_, { "data-migration-pending": !0, onClick: L, innerClassName: eX.b }),
            }),
            null != p &&
                (0, a.jsx)(eB.A, {
                    user: s,
                    displayProfile: A,
                    themeType: eK.d.MODAL_V2,
                    className: eX.LX,
                    forceUserTheme: !0,
                    children: (0, a.jsx)("div", { className: eX.b8, style: { backgroundImage: `url(${p})` } }),
                }),
            (0, a.jsx)(ek.N, {
                theme: x,
                children: (e) =>
                    (0, a.jsxs)("div", {
                        className: n()(eX.cq, e),
                        inert: !0,
                        children: [
                            (0, a.jsx)(ew.A, {
                                user: s,
                                guild: l,
                                ...E,
                                pendingAvatar: S,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: b.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: eX.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                                hideProfileFrame: !0,
                            }),
                            (0, a.jsx)(eY.A, {
                                author: b,
                                message: (0, eU.rh)({
                                    ...(0, eH.Ay)({ channelId: "1337", content: ei.intl.string(et.default.h5Cuej) }),
                                    state: O.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: eX.OT,
                                previewGuildId: l?.id,
                            }),
                            (0, a.jsx)(eG.A, {
                                user: s,
                                guildId: l?.id,
                                nameplate: I,
                                nameplateData: null == I ? (_ ?? C) : void 0,
                                pendingGlobalName: i,
                                pendingDisplayNameStyles: b.displayNameStyles,
                                isHighlighted: !0,
                                className: eX.qF,
                            }),
                        ],
                    }),
            }),
            (0, a.jsxs)("div", {
                className: eX.dI,
                children: [
                    (0, a.jsx)(em.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: ei.intl.format(et.default.prQba8, {
                            helpArticleLink: e$.A.getArticleURL(O.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, a.jsx)(eZ, { darkPreview: N, onToggleTheme: T }),
                ],
            }),
        ],
    });
}
function eZ(e) {
    let { darkPreview: s, onToggleTheme: l } = e,
        t = s ? O.NJ8.DARK : O.NJ8.LIGHT;
    return (0, a.jsx)(eD.I, {
        className: eX.xr,
        optionClassName: eX.$C,
        options: [
            {
                name: "",
                tooltip: ei.intl.string(ei.t.b8Cei3),
                value: O.NJ8.DARK,
                icon: eM.Z,
                className: t === O.NJ8.DARK ? eX.iB : void 0,
            },
            {
                name: "",
                tooltip: ei.intl.string(ei.t.K2sFfo),
                value: O.NJ8.LIGHT,
                icon: eO.F,
                className: t === O.NJ8.LIGHT ? eX.iB : void 0,
            },
        ],
        value: t,
        onChange: (e) => {
            let { value: s } = e;
            return l(s);
        },
        look: "pill",
    });
}
var eq = l(511698);
function eQ(e) {
    let s,
        { transitionState: l, analyticsLocations: i, guildId: C, onClose: v, returnRef: _ } = e,
        L = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        U =
            ((s = G.Ay.useName(L)),
            (0, c.bG)([R.A, P.Ay], () => {
                let e = R.A.getPendingChanges(C);
                return null != C ? (e.pendingNickname ?? P.Ay.getNick(C, L?.id)) : e.pendingGlobalName;
            }, [C, L]) ??
                s ??
                ""),
        H = (0, c.bG)([A.A], () => A.A.getGuild(C)),
        { userDisplayNameStyles: z, guildDisplayNameStyles: Y, pendingDisplayNameStyles: w } = (0, g.B0)(L, C),
        F = void 0 !== w ? w : (Y ?? z),
        [J, W] = t.useState(F?.fontId ?? d.x.DEFAULT),
        [B, $] = t.useState(F?.effectId ?? o.z.SOLID),
        K = (0, b.as)(B) > 1,
        X = (0, y._)(B),
        V = (0, k.A)(),
        Z = F?.colors ?? [],
        [q, Q] = t.useState(Z.length > 0 && !K ? Z[0] : X.defaultColors[0]),
        [ee, es] = t.useState(() => (Z.length > 0 && K ? { [B]: Z } : {})),
        el = t.useMemo(() => ee[B] ?? V[B], [ee, B, V]);
    (0, f.A)(
        { type: r.ImpressionTypes.POPOUT, name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL },
        { trackOnInitialLoad: !0 },
    );
    let { analyticsLocations: ea } = (0, N.Ay)(i, h.A.EDIT_DISPLAY_NAME_STYLES_MODAL),
        en = t.useMemo(() => (K ? el : [q]), [K, el, q]),
        er = t.useMemo(() => J !== F?.fontId || B !== F?.effectId || !(0, u.v)(en, F?.colors ?? []), [F, J, B, en]),
        eo = (0, S.ux)("DisplayNameStylesModal"),
        ed = T(),
        ec = I(),
        em = (function (e) {
            let {
                hasChanges: s,
                selectedFontId: l,
                selectedEffectId: a,
                selectedColors: i,
                defaultColor: n,
                guildId: r,
                isTryItOut: c,
                onClose: u,
            } = e;
            return t.useCallback(() => {
                if (s) {
                    let e = i;
                    a === o.z.SOLID && i.length > 0 && i[0] === n && (e = []);
                    let s = { fontId: l, effectId: a, colors: e };
                    c ? (0, D.EW)(s) : (0, M.p)({ guildId: r, displayNameStyles: s }),
                        j.default.track(O.HAw.DISPLAY_NAME_STYLES_APPLIED, {
                            font_name: d.x[l],
                            effect_name: o.z[a],
                            colors: i,
                        }),
                        u?.();
                }
            }, [s, l, a, i, n, u, r, c]);
        })({
            hasChanges: er,
            selectedFontId: J,
            selectedEffectId: B,
            selectedColors: en,
            defaultColor: X.defaultColors[0],
            guildId: C,
            onClose: v,
        }),
        ex = t.useCallback(() => {
            let { fontId: e, effectId: s, colors: l } = (0, b.gN)(ed, ec);
            W(e),
                $(s),
                (0, b.as)(s) > 1 ? es((e) => ({ ...e, [s]: l })) : Q(l[0]),
                j.default.track(O.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME);
        }, [ed, ec, es, Q]),
        eh = t.useCallback(
            (e) => {
                K ? es((s) => ({ ...s, [B]: e })) : Q(e[0]);
            },
            [K, B, es, Q],
        );
    return null == L
        ? null
        : (0, a.jsx)(N.f5, {
              value: ea,
              children: (0, a.jsx)(E.l.Provider, {
                  value: { overrideSettings: !0 },
                  children: (0, a.jsxs)(m.EO, {
                      "data-migration-pending": !0,
                      transitionState: l,
                      size: m.rI.LARGE,
                      parentComponent: "DisplayNameStylesModal",
                      className: n()(eq.CR, { [eq.st]: eo }),
                      returnRef: _,
                      children: [
                          (0, a.jsxs)(m.$m, {
                              "data-migration-pending": !0,
                              className: n()(eq.jE, { [eq.st]: eo }),
                              style: { overflow: "hidden auto" },
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: eq.w1,
                                      children: [
                                          (0, a.jsx)(m.rQ, {
                                              "data-migration-pending": !0,
                                              separator: !1,
                                              className: eq.bV,
                                              children: (0, a.jsx)(x.D, {
                                                  variant: "heading-lg/semibold",
                                                  children: ei.intl.string(et.default.ZPMAlX),
                                              }),
                                          }),
                                          (0, a.jsx)(eE, {
                                              selectedFontId: J,
                                              setSelectedFontId: W,
                                              displayName: U,
                                              className: eq._,
                                          }),
                                          (0, a.jsx)(ef, {
                                              selectedEffectId: B,
                                              setSelectedEffectId: $,
                                              className: eq._,
                                          }),
                                          (0, a.jsx)(eu, {
                                              selectedColors: en,
                                              setSelectedColors: eh,
                                              selectedEffectId: B,
                                              className: eq._,
                                              defaultColor: X.defaultColors[0],
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(eV, {
                                      user: L,
                                      guild: H,
                                      displayName: U,
                                      selectedFontId: J,
                                      selectedEffectId: B,
                                      selectedColors: B === o.z.SOLID && (0, u.v)(en, X.defaultColors) ? [] : en,
                                      onClose: v,
                                  }),
                              ],
                          }),
                          (0, a.jsx)(eb, {
                              onApply: em,
                              onSurpriseMe: ex,
                              onClose: v,
                              canApply: er,
                              analyticsLocations: ea,
                          }),
                      ],
                  }),
              }),
          });
}
