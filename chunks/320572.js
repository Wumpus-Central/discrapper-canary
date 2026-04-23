"use strict";
n.d(t, { Gq: () => q, WE: () => $, qn: () => K, Ay: () => X });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(17928),
    d = n(661531),
    _ = n(990078),
    u = n(939249),
    c = n(834730),
    E = n(106236),
    h = n(777666),
    m = n(403581),
    f = n(7807),
    g = n(922016),
    p = n(983851),
    A = n(885574),
    I = n(967198),
    T = n(287809),
    S = n(824744),
    N = n(927578),
    C = n(704591),
    R = n(14400),
    O = n(862482),
    y = n(821609),
    v = n(686956),
    D = n(624793),
    L = n(861626),
    b = n(34337),
    w = n(796774),
    P = n(807348),
    k = n(805945),
    M = n(71393),
    U = n(725807);
n(801541);
var x = n(889137);
n(980504);
var G = n(985018),
    V =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    F = n(788868),
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
          ? (0, r.jsx)(y.$, {
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
        { sound: o, channel: _, closePopout: u, refreshPosition: E } = e,
        m = "0" === o.guildId,
        f = (0, l.bG)([M.A], () => M.A.getGuild(o.guildId)),
        g = !m && null != f,
        [p, A] = s.useState(),
        I = (0, C.tj)({ location: "SoundmojiGuildInfo" }),
        S = m || g || null != p || !I,
        [R, O] = s.useState(!S);
    s.useEffect(() => {
        S ||
            (O(!0),
            (0, w.nh)(o.soundId, o.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    O(!1), E();
                }));
    }, [E, S, o.guildId, o.soundId]);
    let { buttonType: y, description: v } =
            ((t = "0" === o.guildId),
            (n = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser()))),
            (i = (0, C.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = o.guildId !== _?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !i ? 2 : n ? (g || null == p ? 2 : 0) : 1), [t, n, i, g, p]),
                description: s.useMemo(() => {
                    let e = null != p;
                    return (0, x.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: g,
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
                }, [t, p, n, g, a, i]),
            }),
        U = y === V.JOIN_GUILD,
        F = !m && R,
        B = s.useMemo(
            () => (g ? D.GO.createFromGuildRecord(f) : null != p ? D.GO.createFromDiscoverableGuild(p) : void 0),
            [f, g, p],
        );
    return F
        ? (0, r.jsx)(b.Y0, {})
        : (0, r.jsxs)("div", {
              className: H.op,
              children: [
                  (0, r.jsxs)(b.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, r.jsx)(k.Ay, {
                                      buttonOverlay: P.If.NONE,
                                      sound: o,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(c.E, { variant: "text-sm/normal", children: v }),
                              ],
                          }),
                          null != B &&
                              (0, r.jsxs)("div", {
                                  className: H.Qe,
                                  children: [
                                      (0, r.jsx)(c.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: H.x$,
                                          children: g ? G.intl.string(G.t.tGDabk) : G.intl.string(G.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: H.Ff,
                                          children: (0, r.jsx)(L.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: g,
                                              isDisplayingJoinGuildButtonInPopout: U,
                                          }),
                                      }),
                                      (0, r.jsx)(j, { buttonType: y, discoverableGuildId: p?.id, closePopout: u }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(h.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var Y = n(757718);
function K() {
    let { volume: e, onVolumeChange: t } = (0, R.A)();
    return (0, r.jsxs)(u.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(c.E, { variant: "text-sm/normal", children: G.intl.string(G.t["2JbvKw"]) }),
            (0, r.jsx)(E.A, { onValueChange: t, className: H.aw, initialValue: (0, S.M)(e), maxValue: 100 }),
        ],
    });
}
function z(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, C.tj)({ location: "SoundmojiBanner" }),
        s = (0, l.bG)([T.default], () => N.Ay.canUseSoundboardEverywhere(T.default.getCurrentUser())),
        a = (0, l.bG)([I.A], () => I.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !i
        ? (0, r.jsx)(h.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, r.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, r.jsx)("div", { className: H.Nh }),
                  (0, r.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, r.jsx)(m.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, r.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: H.sD,
                              children: G.intl.string(G.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(h.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
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
                            (0, r.jsx)(f.J, { size: "sm", className: H.nR }),
                            (0, r.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: H.tn,
                        children: (0, r.jsx)(c.E, { variant: "text-sm/normal", children: G.intl.string(G.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { renderPopout: t, position: n, tooltipText: i, children: a, setTooltipShowing: o, clickableClassName: l } = e,
        [d, c] = s.useState(!1),
        [E, h] = s.useState(String(Date.now())),
        m = s.useCallback(
            (e) => {
                e.stopPropagation(), c(!d);
            },
            [d],
        ),
        f = s.useCallback(() => {
            h(String(Date.now()));
        }, []),
        p = s.useRef(null);
    s.useEffect(() => {
        d ? p.current?.focus() : p.current?.blur(), o?.(d);
    }, [d, o]);
    let A = !d;
    return (0, r.jsx)(g.Y, {
        targetElementRef: p,
        renderPopout: (e) =>
            (0, r.jsx)(u.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: f }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => c(!1),
        animationPosition: "bottom",
        positionKey: E,
        scrollBehavior: "close",
        children: (e) =>
            (0, r.jsx)(_.m, {
                onTooltipHide: () => {
                    A && o?.(!1);
                },
                onTooltipShow: () => {
                    A && o?.(!0);
                },
                text: i,
                position: "top",
                shouldShow: A,
                children: (0, r.jsx)(u.D, {
                    ...e,
                    innerRef: p,
                    "aria-label": i,
                    onClick: m,
                    className: l,
                    children: a,
                }),
            }),
    });
}
function X(e) {
    let { sound: t, channel: n, setTooltipShowing: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(q, {
                setTooltipShowing: i,
                renderPopout: () => (0, r.jsx)(K, {}),
                tooltipText: G.intl.string(G.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(p.H, { size: "md", color: "currentColor", className: Y.Wo }),
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
