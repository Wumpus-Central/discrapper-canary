a.d(s, { default: () => em });
var l = a(477900),
    t = a(582128),
    i = a(503698),
    r = a.n(i),
    n = a(858899),
    d = a(834730),
    c = a(224640),
    u = a(534514),
    o = a(404778),
    m = a(143129),
    v = a(821609),
    N = a(815021),
    A = a(350972),
    x = a(644235),
    E = a(871162),
    h = a(16371),
    g = a(262560),
    j = a(855986),
    p = a(778712),
    y = a(97808),
    S = a(432005),
    P = a(963852),
    f = a(763754),
    I = a(20851),
    b = a(527212),
    L = a(915614),
    _ = a(290863),
    T = a(652215),
    C = a(236814),
    B = a(996988),
    k = a(701256),
    M = a(792996),
    D = a(880068);
let O = p._3.SIZE_80;
function G(e) {
    let { user: s, displayNameStyles: a, appIconId: i } = e,
        r = (0, b.Ay)(s.id, null),
        n = (0, j.bG)([_.A], () => _.A.getStatus(s.id)),
        c = s.globalName ?? s.username,
        u = (0, C.gG)(i),
        o = t.useMemo(
            () =>
                (0, S.rh)({
                    ...(0, P.Ay)({ channelId: "1337", content: M.intl.string(k.default["U/irIt"]) }),
                    state: T.cmJ.SENT,
                    id: "0",
                }),
            [],
        ),
        m = t.useMemo(() => ({ ...(0, f.FT)(s, null), nick: c, displayNameStyles: a }), [s, c, a]);
    return (0, l.jsxs)("div", {
        className: D.VH,
        inert: !0,
        children: [
            (0, l.jsxs)("div", {
                className: D.Kq,
                children: [
                    (0, l.jsx)(L.A, { user: s, displayProfile: r, themeType: B.d.POPOUT, className: D.vK }),
                    (0, l.jsx)(y.eu, {
                        className: D.my,
                        src: s.getAvatarURL(void 0, (0, p.FT)(O)),
                        size: O,
                        status: n,
                        "aria-hidden": !0,
                    }),
                    (0, l.jsx)("div", {
                        className: D.vR,
                        children: (0, l.jsx)(d.E, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "none",
                            children: (0, l.jsx)(h.A, { userName: c, displayNameStyles: a, inProfile: !0 }),
                        }),
                    }),
                ],
            }),
            null != u && (0, l.jsx)("img", { className: D.Z2, src: u.iconSource, alt: "" }),
            (0, l.jsx)("div", {
                className: D.W1,
                children: (0, l.jsx)(I.A, {
                    author: m,
                    message: o,
                    isGroupStart: !0,
                    hideSimpleEmbedContent: !0,
                    hideGuildTag: !0,
                }),
            }),
        ],
    });
}
var H = a(455207),
    U = a(508425),
    Y = a(559949),
    F = a(793574),
    w = a(688810),
    z = a(526162),
    J = a(506988),
    K = a(287809),
    R = a(448645),
    W = a(332560),
    X = a(145359),
    Z = a(739776),
    Q = a(773527),
    V = a(535229),
    q = a(47671),
    $ = a(471865),
    ee = a(114862),
    es = a(397504),
    ea = a(773240),
    el = a(211824),
    et = a(385803);
let ei = { fontId: Y.x.DEFAULT, effectId: U.z.SOLID, colors: [] };
function er(e) {
    return (0, X.Lz)(e, "HexagonCampaignPerksModal") === el.S9.SELECTABLE;
}
var en = a(617605),
    ed = a(218064);
let ec = { overrideSettings: !0 },
    eu = (0, x.FK)(et.eJ),
    eo = (0, x.FK)({ ...et.eJ, angle: 127 });
function em(e) {
    let { transitionState: s, onClose: a, returnRef: i, sourceQuestContent: x, savingRef: p } = e,
        {
            user: y,
            selection: S,
            selectablePerks: P,
            setPerkSelected: f,
            isReentry: I,
            isSaving: b,
            previewDisplayNameStyles: L,
            previewAppIconId: _,
            apply: T,
        } = (function (e) {
            let { sourceQuestContent: s, savingRef: a } = e,
                l = (0, j.bG)([K.default], () => K.default.getCurrentUser()),
                i = (0, j.bG)([z.A], () => z.A.getCurrentDesktopIcon()),
                r = (0, j.bG)([Z.A], () => Z.A.hasAppliedPerk),
                n = (0, j.bG)([Z.A], () => Z.A.previousPerkValues),
                { analyticsLocations: d } = (0, w.Ay)(F.A.QUEST_HOME_PAGE),
                c = er(el.vB.CLIENT_THEME),
                u = er(el.vB.DISPLAY_NAME_STYLE),
                o = er(el.vB.APP_ICON),
                m = t.useMemo(
                    () => ({ [el.vB.CLIENT_THEME]: c, [el.vB.DISPLAY_NAME_STYLE]: u, [el.vB.APP_ICON]: o }),
                    [c, u, o],
                ),
                [v] = t.useState(r),
                [N, x] = t.useState({}),
                E = t.useMemo(() => ({ ...m, ...N }), [m, N]),
                [h, g] = t.useState(!1),
                p = t.useCallback((e, s) => {
                    x((a) => ({ ...a, [e]: s }));
                }, []),
                y = l?.displayNameStyles ?? ei,
                S = R.Ay.canUsePremiumProfileCustomization(l),
                P = t.useMemo(() => (S ? { ...y, fontId: el.vl } : { ...ei, fontId: el.vl }), [S, y]),
                f = (0, Q.Jy)(l?.displayNameStyles)
                    ? ((0, Q.Qv)({
                          currentDisplayNameStyles: l?.displayNameStyles,
                          previousDisplayNameStyles: n.displayNameStyles,
                          canUsePremiumProfileCustomization: S,
                      }) ?? ei)
                    : y,
                I = E[el.vB.DISPLAY_NAME_STYLE] ? P : f,
                b = (0, Q.z9)(i) ? (n.appIconId ?? A.LW.DEFAULT) : i,
                L = E[el.vB.APP_ICON] ? A.aS.HEXAGON : b;
            t.useEffect(() => {
                (0, W.TW)({ content: J.uF.AD_PERK_MODAL, sourceQuestContent: s });
            }, [s]);
            let _ = t.useCallback(async () => {
                if (null == l || a.current) return null;
                ((a.current = !0), g(!0));
                let e = !1;
                try {
                    e = await (async function (e) {
                        let { selection: s, displayNameStyles: a, analyticsLocations: l } = e,
                            t = z.A.getCurrentDesktopIcon(),
                            i = {
                                [el.vB.CLIENT_THEME]: (0, Q.oB)(q.A.gradientPreset?.id),
                                [el.vB.APP_ICON]: (0, Q.z9)(t),
                                [el.vB.DISPLAY_NAME_STYLE]: (0, Q.Jy)(K.default.getCurrentUser()?.displayNameStyles),
                            },
                            { previousPerkValues: r } = Z.A;
                        ((0, es.P)(), (0, $.Lo)(t), (0, $.WT)());
                        let n = Object.values(el.vB).filter((e) => s[e] && !i[e]),
                            d = Object.values(el.vB).filter((e) => !s[e] && i[e]);
                        if (n.length > 0 && !(await (0, $.Br)(n[0]))) return !1;
                        let c = {
                                [el.vB.CLIENT_THEME]: () => (
                                    (0, es.e)({ theme: et.eJ.theme, backgroundGradientPresetId: et.eJ.id }, l),
                                    Promise.resolve(!0)
                                ),
                                [el.vB.APP_ICON]: () => ((0, V.C)(A.aS.HEXAGON), Promise.resolve(!0)),
                                [el.vB.DISPLAY_NAME_STYLE]: () => (0, ee.F)(a),
                            },
                            u = { previousPerkValues: r, analyticsLocations: l };
                        return (
                            await Promise.all([
                                ...n.map(async (e) => {
                                    let s = await c[e]();
                                    return (s && (0, $.VN)(e), s);
                                }),
                                ...d.map((e) => (0, ea.ZG)(e, u)),
                            ])
                        ).every(Boolean);
                    })({ selection: E, displayNameStyles: P, analyticsLocations: d });
                } catch {
                    e = !1;
                }
                return (
                    (a.current = !1),
                    g(!1),
                    e &&
                        (0, W.Cy)({
                            perks: Object.values(el.vB).filter((e) => E[e]),
                            content: J.uF.AD_PERK_MODAL,
                            sourceQuestContent: s,
                        }),
                    e
                );
            }, [l, E, P, d, s, a]);
            return {
                user: l,
                selection: E,
                selectablePerks: m,
                setPerkSelected: p,
                isReentry: v,
                isSaving: h,
                previewDisplayNameStyles: I,
                previewAppIconId: L,
                apply: _,
            };
        })({ sourceQuestContent: x, savingRef: p }),
        B = t.useCallback(async () => {
            let e = await T();
            if (null != e) {
                if (!e) return void (0, n.P0)({ text: M.intl.string(M.t.F8FvUy), variant: "critical" });
                (a(),
                    Object.values(S).some(Boolean) &&
                        (0, n.P0)({ text: M.intl.string(k.default.fX2UkH), variant: "success" }));
            }
        }, [T, a, S]);
    if (null == y) return null;
    let D = M.intl.string(k.default.rZmLDm),
        O = (0, C.gG)(A.aS.HEXAGON),
        U = [
            {
                perk: el.vB.CLIENT_THEME,
                label: M.intl.string(k.default.TTUKuI),
                icon: (0, l.jsx)("div", { className: en.aL, style: { backgroundImage: eu } }),
            },
            {
                perk: el.vB.DISPLAY_NAME_STYLE,
                label: M.intl.string(M.t.NEzEws),
                icon: (0, l.jsx)("div", {
                    className: r()(en.aL, en.Xf),
                    children: (0, l.jsx)(d.E, {
                        variant: "body-md/normal",
                        color: "text-overlay-light",
                        children: (0, l.jsx)(h.A, { userName: "Gg", displayNameStyles: el.AA }),
                    }),
                }),
            },
            {
                perk: el.vB.APP_ICON,
                label: M.intl.string(M.t.RPh2ou),
                icon:
                    null != O
                        ? (0, l.jsx)("img", { className: en.aL, src: O.iconSource, alt: "" })
                        : (0, l.jsx)("div", { className: en.aL }),
            },
        ];
    return (0, l.jsx)(E.l.Provider, {
        value: ec,
        children: (0, l.jsx)(c.d, {
            transitionState: s,
            onClose: a,
            returnRef: i,
            size: "lg",
            dismissable: !b,
            "aria-label": D,
            children: (0, l.jsxs)("div", {
                className: en.zr,
                children: [
                    (0, l.jsxs)("div", {
                        className: en.pz,
                        children: [
                            (0, l.jsx)("div", {
                                className: en.vK,
                                "aria-hidden": !0,
                                children: (0, l.jsx)("img", {
                                    className: en._e,
                                    src: "/assets/6b10b43fa13abe64.jpg",
                                    alt: "",
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: en.wx,
                                children: [
                                    (0, l.jsx)("div", { children: (0, l.jsx)(g.A, {}) }),
                                    (0, l.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: D,
                                    }),
                                    (0, l.jsx)(H.A, {}),
                                ],
                            }),
                            (0, l.jsx)(o.c, { gap: 24 }),
                            (0, l.jsx)("div", {
                                className: en.Ge,
                                children: U.map((e) => {
                                    let { perk: s, label: a, icon: t } = e;
                                    return (0, l.jsxs)(
                                        "div",
                                        {
                                            className: en.nM,
                                            children: [
                                                t,
                                                (0, l.jsx)("div", {
                                                    className: en.L6,
                                                    children: (0, l.jsx)(m.d, {
                                                        label: a,
                                                        checked: S[s],
                                                        disabled: b || !P[s],
                                                        onChange: (e) => f(s, e),
                                                    }),
                                                }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: en.qr,
                                children: (0, l.jsx)(v.$, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: M.intl.string(I ? M.t["R3BPH+"] : M.t["1Qm822"]),
                                    onClick: B,
                                    loading: b,
                                    disabled: b,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsxs)("div", {
                        className: en.EN,
                        children: [
                            S[el.vB.CLIENT_THEME] &&
                                (0, l.jsx)("div", {
                                    className: en.S6,
                                    style: { backgroundImage: eo },
                                    "aria-hidden": !0,
                                }),
                            (0, l.jsx)("div", { className: en.Px, "aria-hidden": !0 }),
                            (0, l.jsx)("img", { className: en.wm, src: ed, alt: "" }),
                            (0, l.jsx)("div", {
                                className: en.b,
                                children: (0, l.jsx)(N.J, { variant: "overlay-secondary", onClick: a, disabled: b }),
                            }),
                            (0, l.jsx)(G, { user: y, displayNameStyles: L, appIconId: _ }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
