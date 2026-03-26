s.d(t, { A: () => I });
var l = s(627968),
    a = s(64700),
    n = s(503698),
    i = s.n(n),
    r = s(311907),
    o = s(397927),
    d = s(736653),
    c = s(780898),
    u = s(512213),
    m = s(141468),
    _ = s(963852),
    x = s(763754),
    p = s(20851),
    h = s(919395),
    g = s(287070),
    f = s(101058),
    N = s(836602),
    C = s(950191),
    A = s(686189),
    j = s(946356),
    S = s(954571),
    T = s(975571),
    v = s(652215),
    E = s(996988),
    b = s(927961),
    L = s(985018),
    D = s(635249);
function I(e) {
    let {
            user: t,
            guild: s,
            displayName: n,
            selectedFontId: I,
            selectedEffectId: y,
            selectedColors: P,
            onClose: w,
        } = e,
        R = (0, d.Ay)(),
        G = (0, o.Mwr)(R),
        [O, z] = (0, a.useState)(G),
        M = (0, C.Ay)(t.id, null),
        { bannerSrc: H } = (0, A.A)({ displayProfile: M, size: 413, canAnimate: !1 }),
        U = (0, r.cf)([N.A], () => N.A.getPendingChanges(s?.id)),
        Y = (0, f.V7)({ userId: t.id, image: U.pendingAvatar }),
        { userNameplate: B, guildNameplate: J, pendingNameplate: F } = (0, h.rv)(t, s?.id),
        V = (0, c.WK)(J);
    O && !G ? (R = v.NJ8.DARK) : !O && G && (R = v.NJ8.LIGHT);
    let q = (0, a.useCallback)(() => {
            S.default.track(v.HAw.DISPLAY_NAME_STYLES_CLOSED), w();
        }, [w]),
        K = (0, a.useCallback)((e) => {
            z(e === v.NJ8.DARK), S.default.track(v.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === v.NJ8.DARK });
        }, []),
        X = (0, a.useMemo)(
            () => ({ ...(0, x.FT)(t, null), nick: n, displayNameStyles: { fontId: I, effectId: y, colors: P } }),
            [t, I, y, P, n],
        );
    return (0, l.jsxs)("div", {
        className: D._l,
        children: [
            (0, l.jsx)(o.rQ0, {
                "data-migration-pending": !0,
                separator: !1,
                className: D.bV,
                children: (0, l.jsx)(o.s_y, { "data-migration-pending": !0, onClick: q, innerClassName: D.b }),
            }),
            null != H &&
                (0, l.jsx)(j.A, {
                    user: t,
                    displayProfile: M,
                    themeType: E.d.MODAL_V2,
                    className: D.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: D.b8, style: { backgroundImage: `url(${H})` } }),
                }),
            (0, l.jsx)(o.NPJ, {
                theme: R,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: i()(D.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(g.A, {
                                user: t,
                                guild: s,
                                ...U,
                                pendingAvatar: Y,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: D.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, l.jsx)(p.A, {
                                author: X,
                                message: (0, m.rh)({
                                    ...(0, _.Ay)({ channelId: "1337", content: L.intl.string(b.default.h5Cuej) }),
                                    state: v.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: D.OT,
                                previewGuildId: s?.id,
                            }),
                            (0, l.jsx)(u.A, {
                                user: t,
                                guildId: s?.id,
                                nameplate: F,
                                nameplateData: null == F ? (V ?? B) : void 0,
                                pendingGlobalName: n,
                                pendingDisplayNameStyles: X.displayNameStyles,
                                isHighlighted: !0,
                                className: D.qF,
                            }),
                        ],
                    }),
            }),
            (0, l.jsxs)("div", {
                className: D.dI,
                children: [
                    (0, l.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: L.intl.format(b.default.prQba8, {
                            helpArticleLink: T.A.getArticleURL(v.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(k, { darkPreview: O, onToggleTheme: K }),
                ],
            }),
        ],
    });
}
function k(e) {
    let { darkPreview: t, onToggleTheme: s } = e,
        a = t ? v.NJ8.DARK : v.NJ8.LIGHT;
    return (0, l.jsx)(o.IzF, {
        className: D.xr,
        optionClassName: D.$C,
        options: [
            {
                name: "",
                tooltip: L.intl.string(L.t.b8Cei3),
                value: v.NJ8.DARK,
                icon: o.Zve,
                className: a === v.NJ8.DARK ? D.iB : void 0,
            },
            {
                name: "",
                tooltip: L.intl.string(L.t.K2sFfo),
                value: v.NJ8.LIGHT,
                icon: o.FVN,
                className: a === v.NJ8.LIGHT ? D.iB : void 0,
            },
        ],
        value: a,
        onChange: (e) => {
            let { value: t } = e;
            return s(t);
        },
        look: "pill",
    });
}
