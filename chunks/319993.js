"use strict";
n.d(t, { Gq: () => q, WE: () => $, qn: () => K, Ay: () => Z });
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
    f = n(106236),
    h = n(777666),
    p = n(403581),
    E = n(7807),
    m = n(922016),
    g = n(983851),
    A = n(885574),
    I = n(967198),
    T = n(287809),
    S = n(824744),
    N = n(927578),
    y = n(704591),
    C = n(885386),
    v = n(862482),
    O = n(821609),
    R = n(66834),
    b = n(624793),
    D = n(861626),
    L = n(34337),
    w = n(796774),
    M = n(807348),
    P = n(805945),
    x = n(71393),
    U = n(725807);
n(801541);
var k = n(889137);
n(980504);
var G = n(375708),
    F =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    V = n(788868),
    B = n(652215),
    H = n(532340);
function j(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await R.A.joinGuild(t), R.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return i === F.GET_NITRO
        ? (0, r.jsx)(U.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: B.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: V.pe.TIER_2,
              size: v.$n.Sizes.SMALL,
              color: v.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: G.intl.string(G.t.pj0XBN) },
          })
        : i === F.JOIN_GUILD
          ? (0, r.jsx)(O.$, {
                variant: "primary",
                size: "sm",
                text: G.intl.string(G.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function Y(e) {
    let t,
        n,
        i,
        a,
        { sound: o, channel: c, closePopout: d, refreshPosition: f } = e,
        p = "0" === o.guildId,
        E = (0, l.bG)([x.A], () => x.A.getGuild(o.guildId)),
        m = !p && null != E,
        [g, A] = s.useState(),
        I = (0, y.tj)({ location: "SoundmojiGuildInfo" }),
        S = p || m || null != g || !I,
        [C, v] = s.useState(!S);
    s.useEffect(() => {
        S ||
            (v(!0),
            (0, w.nh)(o.soundId, o.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    v(!1), f();
                }));
    }, [f, S, o.guildId, o.soundId]);
    let { buttonType: O, description: R } =
            ((t = "0" === o.guildId),
            (n = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser()))),
            (i = (0, y.tj)({ location: "useSoundmojiGuildInfoData" })),
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
        U = O === F.JOIN_GUILD,
        V = !p && C,
        B = s.useMemo(
            () => (m ? b.GO.createFromGuildRecord(E) : null != g ? b.GO.createFromDiscoverableGuild(g) : void 0),
            [E, m, g],
        );
    return V
        ? (0, r.jsx)(L.Y0, {})
        : (0, r.jsxs)("div", {
              className: H.op,
              children: [
                  (0, r.jsxs)(L.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, r.jsx)(P.Ay, {
                                      buttonOverlay: M.If.NONE,
                                      sound: o,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(_.E, { variant: "text-sm/normal", children: R }),
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
                                          children: (0, r.jsx)(D.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: m,
                                              isDisplayingJoinGuildButtonInPopout: U,
                                          }),
                                      }),
                                      (0, r.jsx)(j, { buttonType: O, discoverableGuildId: g?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(h.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var W = n(757718);
function K() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = s.useState(C.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: s.useCallback((e) => {
                let n = (0, S.w)(e);
                t(n), C.HO.updateSetting(n);
            }, []),
        };
    })();
    return (0, r.jsxs)(d.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(_.E, { variant: "text-sm/normal", children: G.intl.string(G.t["2JbvKw"]) }),
            (0, r.jsx)(f.A, { onValueChange: t, className: H.aw, initialValue: (0, S.M)(e), maxValue: 100 }),
        ],
    });
}
function z(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, y.tj)({ location: "SoundmojiBanner" }),
        s = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser())),
        a = (0, l.bG)([I.A], () => I.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !i
        ? (0, r.jsx)(h.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, r.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, r.jsx)("div", { className: H.Nh }),
                  (0, r.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, r.jsx)(p.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, r.jsx)(_.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: H.sD,
                              children: G.intl.string(G.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(h.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
                      ],
                  }),
              ],
          });
}
function $(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: o()(H.op, H.kX),
        children: [
            (0, r.jsx)(z, { sound: t }),
            (0, r.jsxs)("div", {
                className: H.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: H.tn,
                        children: [
                            (0, r.jsx)(E.J, { size: "sm", className: H.nR }),
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
        [f, h] = s.useState(String(Date.now())),
        p = s.useCallback(
            (e) => {
                e.stopPropagation(), _(!u);
            },
            [u],
        ),
        E = s.useCallback(() => {
            h(String(Date.now()));
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
                children: t({ ...e, refreshPosition: E }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: u,
        onRequestClose: () => _(!1),
        animationPosition: "bottom",
        positionKey: f,
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
                    onClick: p,
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
                children: (0, r.jsx)(g.H, { size: "md", color: "currentColor", className: W.Wo }),
            }),
            (0, r.jsx)(q, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, r.jsx)(Y, { sound: t, channel: n, ...e }),
                tooltipText: G.intl.string(G.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(A.m, { size: "md", color: "currentColor", className: W.Wo }),
            }),
        ],
    });
}
