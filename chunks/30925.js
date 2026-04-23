a.d(t, { A: () => R });
var l = a(627968),
    n = a(64700),
    s = a(503698),
    r = a.n(s),
    i = a(311907),
    o = a(366010),
    c = a(935462),
    d = a(43990),
    u = a(834730),
    m = a(629584),
    _ = a(943255),
    h = a(575181),
    p = a(736653),
    f = a(780898),
    g = a(512213),
    x = a(141468),
    A = a(963852),
    v = a(763754),
    N = a(20851),
    C = a(919395),
    b = a(287070),
    S = a(101058),
    E = a(836602),
    j = a(950191),
    y = a(686189),
    T = a(946356),
    I = a(954571),
    w = a(975571),
    D = a(652215),
    k = a(996988),
    L = a(864386),
    M = a(985018),
    P = a(471260);
function R(e) {
    let {
            user: t,
            guild: a,
            displayName: s,
            selectedFontId: m,
            selectedEffectId: _,
            selectedColors: h,
            onClose: R,
        } = e,
        G = (0, p.Ay)(),
        H = (0, o.M)(G),
        [O, Y] = (0, n.useState)(H),
        B = (0, j.Ay)(t.id, null),
        { bannerSrc: z } = (0, y.A)({ displayProfile: B, size: 413, canAnimate: !1 }),
        V = (0, i.cf)([E.A], () => E.A.getPendingChanges(a?.id)),
        F = (0, S.V7)({ userId: t.id, image: V.pendingAvatar }),
        { userNameplate: Z, guildNameplate: J, pendingNameplate: Q } = (0, C.rv)(t, a?.id),
        W = (0, f.WK)(J);
    O && !H ? (G = D.NJ8.DARK) : !O && H && (G = D.NJ8.LIGHT);
    let $ = (0, n.useCallback)(() => {
            I.default.track(D.HAw.DISPLAY_NAME_STYLES_CLOSED), R();
        }, [R]),
        q = (0, n.useCallback)((e) => {
            Y(e === D.NJ8.DARK), I.default.track(D.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === D.NJ8.DARK });
        }, []),
        X = (0, n.useMemo)(
            () => ({ ...(0, v.FT)(t, null), nick: s, displayNameStyles: { fontId: m, effectId: _, colors: h } }),
            [t, m, _, h, s],
        );
    return (0, l.jsxs)("div", {
        className: P._l,
        children: [
            (0, l.jsx)(c.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.bV,
                children: (0, l.jsx)(c.s_, { "data-migration-pending": !0, onClick: $, innerClassName: P.b }),
            }),
            null != z &&
                (0, l.jsx)(T.A, {
                    user: t,
                    displayProfile: B,
                    themeType: k.d.MODAL_V2,
                    className: P.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: P.b8, style: { backgroundImage: `url(${z})` } }),
                }),
            (0, l.jsx)(d.N, {
                theme: G,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: r()(P.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(b.A, {
                                user: t,
                                guild: a,
                                ...V,
                                pendingAvatar: F,
                                pendingGlobalName: s,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: P.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, l.jsx)(N.A, {
                                author: X,
                                message: (0, x.rh)({
                                    ...(0, A.Ay)({ channelId: "1337", content: M.intl.string(L.default.h5Cuej) }),
                                    state: D.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: P.OT,
                                previewGuildId: a?.id,
                            }),
                            (0, l.jsx)(g.A, {
                                user: t,
                                guildId: a?.id,
                                nameplate: Q,
                                nameplateData: null == Q ? (W ?? Z) : void 0,
                                pendingGlobalName: s,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                isHighlighted: !0,
                                className: P.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: P.dI,
                children: [
                    (0, l.jsx)(u.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: M.intl.format(L.default.prQba8, {
                            helpArticleLink: w.A.getArticleURL(D.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(U, { darkPreview: O, onToggleTheme: q }),
                ],
            }),
        ],
    });
}
function U(e) {
    let { darkPreview: t, onToggleTheme: a } = e,
        n = t ? D.NJ8.DARK : D.NJ8.LIGHT;
    return (0, l.jsx)(m.I, {
        className: P.xr,
        optionClassName: P.$C,
        options: [
            {
                name: "",
                tooltip: M.intl.string(M.t.b8Cei3),
                value: D.NJ8.DARK,
                icon: _.Z,
                className: n === D.NJ8.DARK ? P.iB : void 0,
            },
            {
                name: "",
                tooltip: M.intl.string(M.t.K2sFfo),
                value: D.NJ8.LIGHT,
                icon: h.F,
                className: n === D.NJ8.LIGHT ? P.iB : void 0,
            },
        ],
        value: n,
        onChange: (e) => {
            let { value: t } = e;
            return a(t);
        },
        look: "pill",
    });
}
