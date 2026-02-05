l.d(t, { A: () => k });
var s = l(627968),
    a = l(64700),
    n = l(503698),
    i = l.n(n),
    r = l(311907),
    o = l(397927),
    d = l(736653),
    c = l(833336),
    u = l(141468),
    m = l(963852),
    _ = l(763754),
    x = l(20851),
    g = l(369496),
    h = l(550111),
    p = l(919395),
    f = l(287070),
    N = l(101058),
    A = l(836602),
    C = l(950191),
    j = l(686189),
    S = l(946356),
    T = l(954571),
    v = l(975571),
    E = l(652215),
    b = l(996988),
    L = l(927961),
    D = l(985018),
    I = l(635249);
function k(e) {
    let {
            user: t,
            guild: l,
            displayName: n,
            selectedFontId: k,
            selectedEffectId: y,
            selectedColors: w,
            onClose: R,
        } = e,
        G = (0, d.Ay)(),
        O = (0, o.Mwr)(G),
        [z, M] = (0, a.useState)(O),
        H = (0, C.Ay)(t.id, null),
        { bannerSrc: U } = (0, j.A)({ displayProfile: H, size: 413, canAnimate: !1 }),
        Y = (0, r.cf)([A.A, c.A], () => (null == l ? A.A.getPendingChanges() : c.A.getAllPending())),
        B = (0, N.V7)({ userId: t.id, image: Y.pendingAvatar }),
        { userNameplate: J, guildNameplate: F, pendingNameplate: V } = (0, p.rv)(t, l?.id),
        q = null != F ? (0, g.WK)(F) : void 0;
    z && !O ? (G = E.NJ8.DARK) : !z && O && (G = E.NJ8.LIGHT);
    let K = (0, a.useCallback)(() => {
            T.default.track(E.HAw.DISPLAY_NAME_STYLES_CLOSED), R();
        }, [R]),
        X = (0, a.useCallback)((e) => {
            M(e === E.NJ8.DARK), T.default.track(E.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === E.NJ8.DARK });
        }, []),
        Q = (0, a.useMemo)(
            () => ({ ...(0, _.FT)(t, null), nick: n, displayNameStyles: { fontId: k, effectId: y, colors: w } }),
            [t, k, y, w, n],
        );
    return (0, s.jsxs)("div", {
        className: I._l,
        children: [
            (0, s.jsx)(o.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: I.bV,
                children: (0, s.jsx)(o.s_y, { "data-migration-pending": !0, onClick: K, innerClassName: I.b }),
            }),
            null != U &&
                (0, s.jsx)(S.A, {
                    user: t,
                    displayProfile: H,
                    themeType: b.d.MODAL_V2,
                    className: I.LX,
                    forceUserTheme: !0,
                    children: (0, s.jsx)("div", { className: I.b8, style: { backgroundImage: `url(${U})` } }),
                }),
            (0, s.jsx)(o.NPJ, {
                theme: G,
                children: (e) =>
                    (0, s.jsxs)("div", {
                        className: i()(I.cq, e),
                        inert: !0,
                        children: [
                            (0, s.jsx)(f.A, {
                                user: t,
                                guild: l,
                                ...Y,
                                pendingAvatar: B,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: Q.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: I.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, s.jsx)(x.A, {
                                author: Q,
                                message: (0, u.rh)({
                                    ...(0, m.Ay)({ channelId: "1337", content: D.intl.string(L.default.h5Cuej) }),
                                    state: E.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: I.OT,
                                previewGuildId: l?.id,
                            }),
                            (0, s.jsx)(h.A, {
                                user: t,
                                guildId: l?.id,
                                nameplate: V,
                                nameplateData: null == V ? (q ?? J) : void 0,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: Q.displayNameStyles,
                                isHighlighted: !0,
                                className: I.qF,
                            }),
                        ],
                    }),
            }),
            (0, s.jsxs)("div", {
                className: I.dI,
                children: [
                    (0, s.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: D.intl.format(L.default.prQba8, {
                            helpArticleLink: v.A.getArticleURL(E.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, s.jsx)(P, { darkPreview: z, onToggleTheme: X }),
                ],
            }),
        ],
    });
}
function P(e) {
    let { darkPreview: t, onToggleTheme: l } = e,
        a = t ? E.NJ8.DARK : E.NJ8.LIGHT;
    return (0, s.jsx)(o.IzF, {
        className: I.xr,
        optionClassName: I.$C,
        options: [
            {
                name: "",
                tooltip: D.intl.string(D.t.b8Cei3),
                value: E.NJ8.DARK,
                icon: o.Zve,
                className: a === E.NJ8.DARK ? I.iB : void 0,
            },
            {
                name: "",
                tooltip: D.intl.string(D.t.K2sFfo),
                value: E.NJ8.LIGHT,
                icon: o.FVN,
                className: a === E.NJ8.LIGHT ? I.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return l(t);
        },
        look: "pill",
    });
}
