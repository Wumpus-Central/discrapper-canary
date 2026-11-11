a.d(s, { default: () => ey });
var t = a(477900),
    l = a(582128),
    i = a(503698),
    r = a.n(i),
    n = a(858899),
    c = a(834730),
    d = a(224640),
    o = a(534514),
    u = a(404778),
    m = a(143129),
    v = a(821609),
    N = a(815021),
    A = a(350972),
    y = a(644235),
    E = a(871162),
    P = a(16371),
    h = a(262560),
    p = a(855986),
    x = a(778712),
    S = a(97808),
    g = a(432005),
    f = a(963852),
    j = a(763754),
    I = a(20851),
    L = a(527212),
    _ = a(915614),
    T = a(290863),
    C = a(652215),
    b = a(236814),
    B = a(996988),
    k = a(701256),
    M = a(792996),
    D = a(880068);
let O = x._3.SIZE_80;
function G(e) {
    let { user: s, displayNameStyles: a, appIconId: i } = e,
        r = (0, L.Ay)(s.id, null),
        n = (0, p.bG)([T.A], () => T.A.getStatus(s.id)),
        d = s.globalName ?? s.username,
        o = (0, b.gG)(i),
        u = l.useMemo(
            () =>
                (0, g.rh)({
                    ...(0, f.Ay)({ channelId: "1337", content: M.intl.string(k.default["U/irIt"]) }),
                    state: C.cmJ.SENT,
                    id: "0",
                }),
            [],
        ),
        m = l.useMemo(() => ({ ...(0, j.FT)(s, null), nick: d, displayNameStyles: a }), [s, d, a]);
    return (0, t.jsxs)("div", {
        className: D.VH,
        inert: !0,
        children: [
            (0, t.jsxs)("div", {
                className: D.Kq,
                children: [
                    (0, t.jsx)(_.A, { user: s, displayProfile: r, themeType: B.d.POPOUT, className: D.vK }),
                    (0, t.jsx)(S.eu, {
                        className: D.my,
                        src: s.getAvatarURL(void 0, (0, x.FT)(O)),
                        size: O,
                        status: n,
                        "aria-hidden": !0,
                    }),
                    (0, t.jsx)("div", {
                        className: D.vR,
                        children: (0, t.jsx)(c.E, {
                            tag: "div",
                            variant: "heading-xl/semibold",
                            color: "none",
                            children: (0, t.jsx)(P.A, { userName: d, displayNameStyles: a, inProfile: !0 }),
                        }),
                    }),
                ],
            }),
            null != o && (0, t.jsx)("img", { className: D.Z2, src: o.iconSource, alt: "" }),
            (0, t.jsx)("div", {
                className: D.W1,
                children: (0, t.jsx)(I.A, {
                    author: m,
                    message: u,
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
    K = a(506988),
    J = a(287809),
    R = a(448645),
    X = a(332560),
    W = a(145359),
    Q = a(739776),
    $ = a(773527),
    q = a(535229),
    V = a(47671),
    Z = a(471865),
    ee = a(631670);
async function es(e) {
    let s = await (0, ee._L)({ displayNameStyles: e });
    return s?.ok === !0;
}
var ea = a(397504),
    et = a(270746),
    el = a(973654),
    ei = a(413599),
    er = a(859034),
    en = a(211824),
    ec = a(185928),
    ed = a(385803);
let eo = { fontId: Y.x.DEFAULT, effectId: U.z.SOLID, colors: [] };
function eu(e) {
    return (0, W.Lz)(e, "HexagonCampaignPerksModal") === en.S9.SELECTABLE;
}
var em = a(617605);
let ev = { overrideSettings: !0 },
    eN = (0, y.FK)(ed.eJ),
    eA = (0, y.FK)({ ...ed.eJ, angle: 127 });
function ey(e) {
    let { transitionState: s, onClose: a, returnRef: i, sourceQuestContent: y, savingRef: x } = e,
        {
            user: S,
            selection: g,
            selectablePerks: f,
            setPerkSelected: j,
            isReentry: I,
            isSaving: L,
            previewDisplayNameStyles: _,
            previewAppIconId: T,
            apply: C,
        } = (function (e) {
            let { sourceQuestContent: s, savingRef: a } = e,
                t = (0, p.bG)([J.default], () => J.default.getCurrentUser()),
                i = (0, p.bG)([z.A], () => z.A.getCurrentDesktopIcon()),
                r = (0, p.bG)([Q.A], () => Q.A.hasAppliedPerk),
                n = (0, p.bG)([Q.A], () => Q.A.previousPerkValues),
                { analyticsLocations: c } = (0, w.Ay)(F.A.QUEST_HOME_PAGE),
                d = eu(en.vB.CLIENT_THEME),
                o = eu(en.vB.DISPLAY_NAME_STYLE),
                u = eu(en.vB.APP_ICON),
                m = l.useMemo(
                    () => ({ [en.vB.CLIENT_THEME]: d, [en.vB.DISPLAY_NAME_STYLE]: o, [en.vB.APP_ICON]: u }),
                    [d, o, u],
                ),
                [v] = l.useState(r),
                [N, y] = l.useState({}),
                E = l.useMemo(() => ({ ...m, ...N }), [m, N]),
                [P, h] = l.useState(!1),
                x = l.useCallback((e, s) => {
                    y((a) => ({ ...a, [e]: s }));
                }, []),
                S = t?.displayNameStyles ?? eo,
                g = R.Ay.canUsePremiumProfileCustomization(t),
                f = l.useMemo(() => (g ? { ...S, fontId: en.vl } : { ...eo, fontId: en.vl }), [g, S]),
                j = (0, $.Jy)(t?.displayNameStyles)
                    ? ((0, $.Qv)({
                          currentDisplayNameStyles: t?.displayNameStyles,
                          previousDisplayNameStyles: n.displayNameStyles,
                          canUsePremiumProfileCustomization: g,
                      }) ?? eo)
                    : S,
                I = E[en.vB.DISPLAY_NAME_STYLE] ? f : j,
                L = (0, $.z9)(i) ? (n.appIconId ?? A.LW.DEFAULT) : i,
                _ = E[en.vB.APP_ICON] ? A.aS.HEXAGON : L;
            l.useEffect(() => {
                (0, X.TW)({ content: K.uF.AD_PERK_MODAL, sourceQuestContent: s });
            }, [s]);
            let T = l.useCallback(async () => {
                if (null == t || a.current) return null;
                ((a.current = !0), h(!0));
                let e = !1;
                try {
                    e = await (async function (e) {
                        let { selection: s, displayNameStyles: a, analyticsLocations: t } = e,
                            l = z.A.getCurrentDesktopIcon(),
                            i = {
                                [en.vB.CLIENT_THEME]: (0, $.oB)(V.A.gradientPreset?.id),
                                [en.vB.APP_ICON]: (0, $.z9)(l),
                                [en.vB.DISPLAY_NAME_STYLE]: (0, $.Jy)(J.default.getCurrentUser()?.displayNameStyles),
                            },
                            { previousPerkValues: r } = Q.A;
                        ((0, ea.P)(), (0, Z.Lo)(l), (0, Z.WT)());
                        let n = Object.values(en.vB).filter((e) => s[e] && !i[e]),
                            c = Object.values(en.vB).filter((e) => !s[e] && i[e]);
                        if (n.length > 0 && !(await (0, Z.Br)(n[0]))) return !1;
                        let d = {
                                [en.vB.CLIENT_THEME]: () => (
                                    (0, ea.e)({ theme: ed.eJ.theme, backgroundGradientPresetId: ed.eJ.id }, t),
                                    Promise.resolve(!0)
                                ),
                                [en.vB.APP_ICON]: () => ((0, q.C)(A.aS.HEXAGON), Promise.resolve(!0)),
                                [en.vB.DISPLAY_NAME_STYLE]: () => es(a),
                            },
                            o = { previousPerkValues: r, analyticsLocations: t };
                        return (
                            await Promise.all([
                                ...n.map(async (e) => {
                                    let s = await d[e]();
                                    return (s && (0, Z.VN)(e), s);
                                }),
                                ...c.map((e) =>
                                    (function (e, s) {
                                        let { previousPerkValues: a, analyticsLocations: t } = s;
                                        switch (e) {
                                            case en.vB.CLIENT_THEME:
                                                if ((0, er.v)()) {
                                                    for (let e of [ec.Fc.LIGHT, ec.Fc.DARK].filter((e) =>
                                                        (0, $.oB)(
                                                            ei.A.getSyncedClientTheme(e)?.backgroundGradientPresetId,
                                                        ),
                                                    )) {
                                                        let s = ei.A.themePreferenceForSystemTheme(e);
                                                        ((0, el.qX)(e, { theme: s }),
                                                            (0, et.X8)({
                                                                isPersisted: !0,
                                                                analyticsLocations: t,
                                                                themeName: `${e}-mode-${s}`,
                                                            }));
                                                    }
                                                    return Promise.resolve(!0);
                                                }
                                                return ((0, ea.e)(a.clientTheme ?? en.I$, t), Promise.resolve(!0));
                                            case en.vB.APP_ICON:
                                                return ((0, q.C)(a.appIconId ?? en.u), Promise.resolve(!0));
                                            case en.vB.DISPLAY_NAME_STYLE: {
                                                let e = J.default.getCurrentUser();
                                                return es(
                                                    (0, $.Qv)({
                                                        currentDisplayNameStyles: e?.displayNameStyles,
                                                        previousDisplayNameStyles: a.displayNameStyles,
                                                        canUsePremiumProfileCustomization:
                                                            R.Ay.canUsePremiumProfileCustomization(e),
                                                    }),
                                                );
                                            }
                                        }
                                    })(e, o),
                                ),
                            ])
                        ).every(Boolean);
                    })({ selection: E, displayNameStyles: f, analyticsLocations: c });
                } catch {
                    e = !1;
                }
                return (
                    (a.current = !1),
                    h(!1),
                    e &&
                        (0, X.Cy)({
                            perks: Object.values(en.vB).filter((e) => E[e]),
                            content: K.uF.AD_PERK_MODAL,
                            sourceQuestContent: s,
                        }),
                    e
                );
            }, [t, E, f, c, s, a]);
            return {
                user: t,
                selection: E,
                selectablePerks: m,
                setPerkSelected: x,
                isReentry: v,
                isSaving: P,
                previewDisplayNameStyles: I,
                previewAppIconId: _,
                apply: T,
            };
        })({ sourceQuestContent: y, savingRef: x }),
        B = l.useCallback(async () => {
            let e = await C();
            if (null != e) {
                if (!e) return void (0, n.P0)({ text: M.intl.string(M.t.F8FvUy), variant: "critical" });
                (a(),
                    Object.values(g).some(Boolean) &&
                        (0, n.P0)({ text: M.intl.string(k.default.fX2UkH), variant: "success" }));
            }
        }, [C, a, g]);
    if (null == S) return null;
    let D = M.intl.string(k.default.rZmLDm),
        O = (0, b.gG)(A.aS.HEXAGON),
        U = [
            {
                perk: en.vB.CLIENT_THEME,
                label: M.intl.string(k.default.TTUKuI),
                icon: (0, t.jsx)("div", { className: em.aL, style: { backgroundImage: eN } }),
            },
            {
                perk: en.vB.DISPLAY_NAME_STYLE,
                label: M.intl.string(M.t.NEzEws),
                icon: (0, t.jsx)("div", {
                    className: r()(em.aL, em.Xf),
                    children: (0, t.jsx)(c.E, {
                        variant: "body-md/normal",
                        color: "text-overlay-light",
                        children: (0, t.jsx)(P.A, { userName: "Gg", displayNameStyles: en.AA }),
                    }),
                }),
            },
            {
                perk: en.vB.APP_ICON,
                label: M.intl.string(M.t.RPh2ou),
                icon:
                    null != O
                        ? (0, t.jsx)("img", { className: em.aL, src: O.iconSource, alt: "" })
                        : (0, t.jsx)("div", { className: em.aL }),
            },
        ];
    return (0, t.jsx)(E.l.Provider, {
        value: ev,
        children: (0, t.jsx)(d.d, {
            transitionState: s,
            onClose: a,
            returnRef: i,
            size: "lg",
            dismissable: !L,
            "aria-label": D,
            children: (0, t.jsxs)("div", {
                className: em.zr,
                children: [
                    (0, t.jsxs)("div", {
                        className: em.pz,
                        children: [
                            (0, t.jsx)("div", {
                                className: em.vK,
                                "aria-hidden": !0,
                                children: (0, t.jsx)("img", {
                                    className: em._e,
                                    src: "/assets/6b10b43fa13abe64.jpg",
                                    alt: "",
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: em.wx,
                                children: [
                                    (0, t.jsx)("div", { children: (0, t.jsx)(h.A, {}) }),
                                    (0, t.jsx)(o.D, {
                                        variant: "heading-lg/semibold",
                                        color: "text-strong",
                                        children: D,
                                    }),
                                    (0, t.jsx)(H.A, {}),
                                ],
                            }),
                            (0, t.jsx)(u.c, { gap: 24 }),
                            (0, t.jsx)("div", {
                                className: em.Ge,
                                children: U.map((e) => {
                                    let { perk: s, label: a, icon: l } = e;
                                    return (0, t.jsxs)(
                                        "div",
                                        {
                                            className: em.nM,
                                            children: [
                                                l,
                                                (0, t.jsx)("div", {
                                                    className: em.L6,
                                                    children: (0, t.jsx)(m.d, {
                                                        label: a,
                                                        checked: g[s],
                                                        disabled: L || !f[s],
                                                        onChange: (e) => j(s, e),
                                                    }),
                                                }),
                                            ],
                                        },
                                        s,
                                    );
                                }),
                            }),
                            (0, t.jsx)("div", {
                                className: em.qr,
                                children: (0, t.jsx)(v.$, {
                                    variant: "primary",
                                    fullWidth: !0,
                                    text: M.intl.string(I ? M.t["R3BPH+"] : M.t["1Qm822"]),
                                    onClick: B,
                                    loading: L,
                                    disabled: L,
                                }),
                            }),
                        ],
                    }),
                    (0, t.jsxs)("div", {
                        className: em.EN,
                        children: [
                            g[en.vB.CLIENT_THEME] &&
                                (0, t.jsx)("div", {
                                    className: em.S6,
                                    style: { backgroundImage: eA },
                                    "aria-hidden": !0,
                                }),
                            (0, t.jsx)("div", { className: em.Px, "aria-hidden": !0 }),
                            (0, t.jsx)("img", { className: em.wm, src: "/assets/c7421e5032f29f65.png", alt: "" }),
                            (0, t.jsx)("div", {
                                className: em.b,
                                children: (0, t.jsx)(N.J, { variant: "overlay-secondary", onClick: a, disabled: L }),
                            }),
                            (0, t.jsx)(G, { user: S, displayNameStyles: _, appIconId: T }),
                        ],
                    }),
                ],
            }),
        }),
    });
}
