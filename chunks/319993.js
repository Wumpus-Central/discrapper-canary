"use strict";
n.d(t, { Gq: () => q, WE: () => z, qn: () => K, Ay: () => Z });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    u = n(661531),
    c = n(990078),
    d = n(939249),
    _ = n(834730),
    h = n(106236),
    f = n(812993),
    E = n(403581),
    p = n(7807),
    m = n(922016),
    g = n(983851),
    A = n(885574),
    I = n(967198),
    T = n(287809),
    S = n(824744),
    N = n(428262),
    C = n(926972),
    y = n(885386),
    O = n(862482),
    R = n(821609),
    v = n(66834),
    b = n(624793),
    L = n(639245),
    D = n(34337),
    w = n(796774),
    P = n(807348),
    M = n(805945),
    x = n(71393),
    U = n(725807);
n(801541);
var k = n(889137);
n(980504);
var G = n(375708),
    V =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    F = n(202541),
    B = n(652215),
    H = n(532340);
function j(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await v.A.joinGuild(t), v.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return i === V.GET_NITRO
        ? (0, r.jsx)(U.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: B.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: F.pe.TIER_2,
              size: O.$n.Sizes.SMALL,
              color: O.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: G.intl.string(G.t.pj0XBN) },
          })
        : i === V.JOIN_GUILD
          ? (0, r.jsx)(R.$, {
                variant: "primary",
                size: "sm",
                text: G.intl.string(G.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function W(e) {
    let t,
        n,
        i,
        a,
        { sound: o, channel: c, closePopout: d, refreshPosition: h } = e,
        E = "0" === o.guildId,
        p = (0, l.bG)([x.A], () => x.A.getGuild(o.guildId)),
        m = !E && null != p,
        [g, A] = s.useState(),
        I = (0, C.tj)({ location: "SoundmojiGuildInfo" }),
        S = E || m || null != g || !I,
        [y, O] = s.useState(!S);
    s.useEffect(() => {
        S ||
            (O(!0),
            (0, w.nh)(o.soundId, o.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    O(!1), h();
                }));
    }, [h, S, o.guildId, o.soundId]);
    let { buttonType: R, description: v } =
            ((t = "0" === o.guildId),
            (n = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser()))),
            (i = (0, C.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = o.guildId !== c?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !i ? 2 : n ? (m || null == g ? 2 : 0) : 1), [t, n, i, m, g]),
                description: s.useMemo(() => {
                    let e = null != g;
                    return (0, k.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: m,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: i,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => G.intl.string(G.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => G.intl.string(G.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => G.intl.string(G.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            G.intl.string(G.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            G.intl.string(G.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            G.intl.string(G.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            G.intl.string(G.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => G.intl.string(G.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            G.intl.string(G.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, g, n, m, a, i]),
            }),
        U = R === V.JOIN_GUILD,
        F = !E && y,
        B = s.useMemo(
            () => (m ? b.GO.createFromGuildRecord(p) : null != g ? b.GO.createFromDiscoverableGuild(g) : void 0),
            [p, m, g],
        );
    return F
        ? (0, r.jsx)(D.Y0, {})
        : (0, r.jsxs)("div", {
              className: H.op,
              children: [
                  (0, r.jsxs)(D.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, r.jsx)(M.Ay, {
                                      buttonOverlay: P.If.NONE,
                                      sound: o,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(_.E, { variant: "text-sm/normal", children: v }),
                              ],
                          }),
                          null != B &&
                              (0, r.jsxs)("div", {
                                  className: H.Qe,
                                  children: [
                                      (0, r.jsx)(_.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: H.x$,
                                          children: m ? G.intl.string(G.t.tGDabk) : G.intl.string(G.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: H.Ff,
                                          children: (0, r.jsx)(L.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: m,
                                              isDisplayingJoinGuildButtonInPopout: U,
                                          }),
                                      }),
                                      (0, r.jsx)(j, { buttonType: R, discoverableGuildId: g?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(f.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var Y = n(757718);
function K() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = s.useState(y.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: s.useCallback((e) => {
                let n = (0, S.w)(e);
                t(n), y.HO.updateSetting(n);
            }, []),
        };
    })();
    return (0, r.jsxs)(d.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(_.E, { variant: "text-sm/normal", children: G.intl.string(G.t["2JbvKw"]) }),
            (0, r.jsx)(h.A, { onValueChange: t, className: H.aw, initialValue: (0, S.M)(e), maxValue: 100 }),
        ],
    });
}
function $(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, C.tj)({ location: "SoundmojiBanner" }),
        s = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser())),
        a = (0, l.bG)([I.A], () => I.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !i
        ? (0, r.jsx)(f.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, r.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, r.jsx)("div", { className: H.Nh }),
                  (0, r.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, r.jsx)(E.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, r.jsx)(_.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: H.sD,
                              children: G.intl.string(G.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(f.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
                      ],
                  }),
              ],
          });
}
function z(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: o()(H.op, H.kX),
        children: [
            (0, r.jsx)($, { sound: t }),
            (0, r.jsxs)("div", {
                className: H.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: H.tn,
                        children: [
                            (0, r.jsx)(p.J, { size: "sm", className: H.nR }),
                            (0, r.jsx)(_.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: H.tn,
                        children: (0, r.jsx)(_.E, { variant: "text-sm/normal", children: G.intl.string(G.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { renderPopout: t, position: n, tooltipText: i, children: a, setTooltipShowing: o, clickableClassName: l } = e,
        [u, _] = s.useState(!1),
        [h, f] = s.useState(String(Date.now())),
        E = s.useCallback(
            (e) => {
                e.stopPropagation(), _(!u);
            },
            [u],
        ),
        p = s.useCallback(() => {
            f(String(Date.now()));
        }, []),
        g = s.useRef(null);
    s.useEffect(() => {
        u ? g.current?.focus() : g.current?.blur(), o?.(u);
    }, [u, o]);
    let A = !u;
    return (0, r.jsx)(m.Y, {
        targetElementRef: g,
        renderPopout: (e) =>
            (0, r.jsx)(d.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: u,
        onRequestClose: () => _(!1),
        animationPosition: "bottom",
        positionKey: h,
        scrollBehavior: "close",
        children: (e) =>
            (0, r.jsx)(c.m, {
                onTooltipHide: () => {
                    A && o?.(!1);
                },
                onTooltipShow: () => {
                    A && o?.(!0);
                },
                text: i,
                position: "top",
                shouldShow: A,
                children: (0, r.jsx)(d.D, {
                    ...e,
                    innerRef: g,
                    "aria-label": i,
                    onClick: E,
                    className: l,
                    children: a,
                }),
            }),
    });
}
function Z(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(q, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(K, {}),
                tooltipText: G.intl.string(G.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(g.H, { size: "md", color: "currentColor", className: Y.Wo }),
            }),
            (0, r.jsx)(q, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, r.jsx)(W, { sound: t, channel: n, ...e }),
                tooltipText: G.intl.string(G.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(A.m, { size: "md", color: "currentColor", className: Y.Wo }),
            }),
        ],
    });
}
