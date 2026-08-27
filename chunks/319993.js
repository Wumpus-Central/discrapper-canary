"use strict";
n.d(t, { Gq: () => q, WE: () => Y, qn: () => z, Ay: () => J });
var l,
    i = n(477900),
    s = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    u = n(661531),
    c = n(939249),
    d = n(834730),
    h = n(106236),
    m = n(812993),
    f = n(403581),
    p = n(7807),
    g = n(922016),
    x = n(866665),
    A = n(983851),
    C = n(885574),
    E = n(967198),
    I = n(287809),
    y = n(824744),
    S = n(158045),
    N = n(926972),
    v = n(885386),
    _ = n(862482),
    j = n(821609),
    T = n(66834),
    b = n(624793),
    R = n(639245),
    O = n(966245),
    M = n(796774),
    L = n(807348),
    k = n(805945),
    w = n(71393),
    P = n(725807);
n(801541);
var D = n(889137);
n(980504);
var U = n(375708),
    G =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    V = n(202541),
    F = n(652215),
    H = n(653131);
function B(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        r = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await T.A.joinGuild(t), T.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return l === G.GET_NITRO
        ? (0, i.jsx)(P.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: F.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: V.pe.TIER_2,
              size: _.$n.Sizes.SMALL,
              color: _.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: U.intl.string(U.t.pj0XBN) },
          })
        : l === G.JOIN_GUILD
          ? (0, i.jsx)(j.$, {
                variant: "primary",
                size: "sm",
                text: U.intl.string(U.t.riu2R5),
                fullWidth: !0,
                onClick: r,
            })
          : null;
}
function W(e) {
    let t,
        n,
        l,
        r,
        { sound: a, channel: c, closePopout: h, refreshPosition: f } = e,
        p = "0" === a.guildId,
        g = (0, o.bG)([w.A], () => w.A.getGuild(a.guildId)),
        x = !p && null != g,
        [A, C] = s.useState(),
        E = (0, N.tj)({ location: "SoundmojiGuildInfo" }),
        y = p || x || null != A || !E,
        [v, _] = s.useState(!y);
    s.useEffect(() => {
        y ||
            (_(!0),
            (0, M.nh)(a.soundId, a.guildId)
                .then((e) => {
                    C(e);
                })
                .finally(() => {
                    _(!1), f();
                }));
    }, [f, y, a.guildId, a.soundId]);
    let { buttonType: j, description: T } =
            ((t = "0" === a.guildId),
            (n = (0, o.bG)([I.default], () => S.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser()))),
            (l = (0, N.tj)({ location: "useSoundmojiGuildInfoData" })),
            (r = a.guildId !== c?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (x || null == A ? 2 : 0) : 1), [t, n, l, x, A]),
                description: s.useMemo(() => {
                    let e = null != A;
                    return (0, D.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: x,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: r,
                        canSendSoundmojis: l,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => U.intl.string(U.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => U.intl.string(U.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => U.intl.string(U.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            U.intl.string(U.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            U.intl.string(U.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            U.intl.string(U.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            U.intl.string(U.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => U.intl.string(U.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            U.intl.string(U.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, A, n, x, r, l]),
            }),
        P = j === G.JOIN_GUILD,
        V = !p && v,
        F = s.useMemo(
            () => (x ? b.GO.createFromGuildRecord(g) : null != A ? b.GO.createFromDiscoverableGuild(A) : void 0),
            [g, x, A],
        );
    return V
        ? (0, i.jsx)(O.Y0, {})
        : (0, i.jsxs)("div", {
              className: H.op,
              children: [
                  (0, i.jsxs)(O.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, i.jsx)(k.Ay, {
                                      buttonOverlay: L.If.NONE,
                                      sound: a,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(d.E, { variant: "text-sm/normal", children: T }),
                              ],
                          }),
                          null != F &&
                              (0, i.jsxs)("div", {
                                  className: H.Qe,
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: H.x$,
                                          children: x ? U.intl.string(U.t.tGDabk) : U.intl.string(U.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: H.Ff,
                                          children: (0, i.jsx)(R.G7, {
                                              expressionSourceGuild: F,
                                              hasJoinedExpressionSourceGuild: x,
                                              isDisplayingJoinGuildButtonInPopout: P,
                                              closePopout: h,
                                          }),
                                      }),
                                      (0, i.jsx)(B, { buttonType: j, discoverableGuildId: A?.id, closePopout: h }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)(m.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var K = n(948611);
function z() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = s.useState(v.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: s.useCallback((e) => {
                let n = (0, y.w)(e);
                t(n), v.HO.updateSetting(n);
            }, []),
        };
    })();
    return (0, i.jsxs)(c.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: U.intl.string(U.t["2JbvKw"]) }),
            (0, i.jsx)(h.A, { onValueChange: t, className: H.aw, initialValue: (0, y.M)(e), maxValue: 100 }),
        ],
    });
}
function Z(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, N.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([I.default], () => S.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
        r = (0, o.bG)([E.A], () => E.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === r || !l
        ? (0, i.jsx)(m.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, i.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, i.jsx)("div", { className: H.Nh }),
                  (0, i.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, i.jsx)(f.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: H.sD,
                              children: U.intl.string(U.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(m.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: a()(H.op, H.kX),
        children: [
            (0, i.jsx)(Z, { sound: t }),
            (0, i.jsxs)("div", {
                className: H.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: H.tn,
                        children: [
                            (0, i.jsx)(p.J, { size: "sm", className: H.nR }),
                            (0, i.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: H.tn,
                        children: (0, i.jsx)(d.E, { variant: "text-sm/normal", children: U.intl.string(U.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { renderPopout: t, position: n, tooltipText: l, children: r, setTooltipShowing: a, clickableClassName: o } = e,
        [u, d] = s.useState(!1),
        [h, m] = s.useState(String(Date.now())),
        f = s.useCallback(
            (e) => {
                e.stopPropagation(), d(!u);
            },
            [u],
        ),
        p = s.useCallback(() => {
            m(String(Date.now()));
        }, []),
        A = s.useRef(null);
    s.useEffect(() => {
        u ? A.current?.focus() : A.current?.blur(), a?.(u);
    }, [u, a]);
    let C = !u;
    return (0, i.jsx)(g.Y, {
        targetElementRef: A,
        renderPopout: (e) =>
            (0, i.jsx)(c.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: u,
        onRequestClose: () => d(!1),
        animationPosition: "bottom",
        positionKey: h,
        scrollBehavior: "close",
        children: (e) =>
            (0, i.jsx)(x.m, {
                onTooltipHide: () => {
                    C && a?.(!1);
                },
                onTooltipShow: () => {
                    C && a?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: C,
                children: (0, i.jsx)(c.D, {
                    ...e,
                    innerRef: A,
                    "aria-label": l,
                    onClick: f,
                    className: o,
                    children: r,
                }),
            }),
    });
}
function J(e) {
    let { sound: t, channel: n, setTooltipShowing: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(z, {}),
                tooltipText: U.intl.string(U.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(A.H, { size: "md", color: "currentColor", className: K.Wo }),
            }),
            (0, i.jsx)(q, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(W, { sound: t, channel: n, ...e }),
                tooltipText: U.intl.string(U.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(C.CircleInformationIcon, { size: "md", color: "currentColor", className: K.Wo }),
            }),
        ],
    });
}
