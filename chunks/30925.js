"use strict";
a.d(t, { A: () => O });
var l = a(627968),
    i = a(64700),
    r = a(503698),
    n = a.n(r),
    s = a(311907),
    o = a(366010),
    d = a(935462),
    c = a(43990),
    u = a(834730),
    _ = a(629584),
    h = a(943255),
    m = a(575181),
    p = a(736653),
    g = a(780898),
    f = a(512213),
    b = a(141468),
    A = a(963852),
    x = a(763754),
    v = a(20851),
    C = a(919395),
    E = a(287070),
    y = a(101058),
    I = a(836602),
    N = a(950191),
    S = a(686189),
    T = a(946356),
    w = a(954571),
    j = a(975571),
    R = a(652215),
    L = a(996988),
    k = a(864386),
    M = a(985018),
    P = a(471260);
function O(e) {
    let {
            user: t,
            guild: a,
            displayName: r,
            selectedFontId: _,
            selectedEffectId: h,
            selectedColors: m,
            onClose: O,
        } = e,
        U = (0, p.Ay)(),
        B = (0, o.M)(U),
        [F, G] = (0, i.useState)(B),
        H = (0, N.Ay)(t.id, null),
        { bannerSrc: V } = (0, S.A)({ displayProfile: H, size: 413, canAnimate: !1 }),
        W = (0, s.cf)([I.A], () => I.A.getPendingChanges(a?.id)),
        Y = (0, y.V7)({ userId: t.id, image: W.pendingAvatar }),
        { userNameplate: Z, guildNameplate: z, pendingNameplate: J } = (0, C.rv)(t, a?.id),
        K = (0, g.WK)(z);
    F && !B ? (U = R.NJ8.DARK) : !F && B && (U = R.NJ8.LIGHT);
    let $ = (0, i.useCallback)(() => {
            w.default.track(R.HAw.DISPLAY_NAME_STYLES_CLOSED), O();
        }, [O]),
        q = (0, i.useCallback)((e) => {
            G(e === R.NJ8.DARK), w.default.track(R.HAw.DISPLAY_NAME_STYLES_THEME_TOGGLE, { dark: e === R.NJ8.DARK });
        }, []),
        Q = (0, i.useMemo)(
            () => ({ ...(0, x.FT)(t, null), nick: r, displayNameStyles: { fontId: _, effectId: h, colors: m } }),
            [t, _, h, m, r],
        );
    return (0, l.jsxs)("div", {
        className: P._l,
        children: [
            (0, l.jsx)(d.rQ, {
                "data-migration-pending": !0,
                separator: !1,
                className: P.bV,
                children: (0, l.jsx)(d.s_, { "data-migration-pending": !0, onClick: $, innerClassName: P.b }),
            }),
            null != V &&
                (0, l.jsx)(T.A, {
                    user: t,
                    displayProfile: H,
                    themeType: L.d.MODAL_V2,
                    className: P.LX,
                    forceUserTheme: !0,
                    children: (0, l.jsx)("div", { className: P.b8, style: { backgroundImage: `url(${V})` } }),
                }),
            (0, l.jsx)(c.N, {
                theme: U,
                children: (e) =>
                    (0, l.jsxs)("div", {
                        className: n()(P.cq, e),
                        inert: !0,
                        children: [
                            (0, l.jsx)(E.A, {
                                user: t,
                                guild: a,
                                ...W,
                                pendingAvatar: Y,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: Q.displayNameStyles,
                                canUsePremiumCustomization: !0,
                                disabledInputs: !0,
                                hideCustomStatus: !0,
                                hideBioSection: !0,
                                containerClassName: P.ME,
                                interactive: !1,
                                hideExampleButton: !0,
                            }),
                            (0, l.jsx)(v.A, {
                                author: Q,
                                message: (0, b.rh)({
                                    ...(0, A.Ay)({ channelId: "1337", content: M.intl.string(k.default.h5Cuej) }),
                                    state: R.cmJ.SENT,
                                    id: "0",
                                }),
                                isGroupStart: !0,
                                hideSimpleEmbedContent: !0,
                                hideGuildTag: !0,
                                className: P.OT,
                                previewGuildId: a?.id,
                            }),
                            (0, l.jsx)(f.A, {
                                user: t,
                                guildId: a?.id,
                                nameplate: J,
                                nameplateData: null == J ? (K ?? Z) : void 0,
                                pendingGlobalName: r,
                                pendingDisplayNameStyles: Q.displayNameStyles,
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
                        children: M.intl.format(k.default.prQba8, {
                            helpArticleLink: j.A.getArticleURL(R.MVz.DISPLAY_NAME_STYLES),
                        }),
                    }),
                    (0, l.jsx)(D, { darkPreview: F, onToggleTheme: q }),
                ],
            }),
        ],
    });
}
function D(e) {
    let { darkPreview: t, onToggleTheme: a } = e,
        i = t ? R.NJ8.DARK : R.NJ8.LIGHT;
    return (0, l.jsx)(_.I, {
        className: P.xr,
        optionClassName: P.$C,
        options: [
            {
                name: "",
                tooltip: M.intl.string(M.t.b8Cei3),
                value: R.NJ8.DARK,
                icon: h.Z,
                className: i === R.NJ8.DARK ? P.iB : void 0,
            },
            {
                name: "",
                tooltip: M.intl.string(M.t.K2sFfo),
                value: R.NJ8.LIGHT,
                icon: m.F,
                className: i === R.NJ8.LIGHT ? P.iB : void 0,
            },
        ],
        value: i,
        onChange: (e) => {
            let { value: t } = e;
            return a(t);
        },
        look: "pill",
    });
}
