"use strict";
n.d(t, { Gq: () => q, WE: () => z, qn: () => K, Ay: () => Z });
var i,
    r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    o = n(17928),
    d = n(661531),
    c = n(939249),
    u = n(834730),
    _ = n(106236),
    E = n(812993),
    A = n(403581),
    h = n(7807),
    I = n(922016),
    f = n(866665),
    p = n(983851),
    T = n(885574),
    m = n(967198),
    g = n(287809),
    S = n(824744),
    N = n(428262),
    C = n(926972),
    R = n(885386),
    O = n(862482),
    L = n(821609),
    D = n(66834),
    y = n(624793),
    v = n(639245),
    b = n(34337),
    M = n(796774),
    P = n(807348),
    U = n(805945),
    w = n(71393),
    G = n(725807);
n(801541);
var x = n(889137);
n(980504);
var k = n(375708),
    F =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    V = n(202541),
    B = n(652215),
    H = n(532340);
function j(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
        s = a.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await D.A.joinGuild(t), D.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return i === F.GET_NITRO
        ? (0, r.jsx)(G.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: B.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: V.pe.TIER_2,
              size: O.$n.Sizes.SMALL,
              color: O.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: k.intl.string(k.t.pj0XBN) },
          })
        : i === F.JOIN_GUILD
          ? (0, r.jsx)(L.$, {
                variant: "primary",
                size: "sm",
                text: k.intl.string(k.t.riu2R5),
                fullWidth: !0,
                onClick: s,
            })
          : null;
}
function W(e) {
    let t,
        n,
        i,
        s,
        { sound: l, channel: c, closePopout: _, refreshPosition: A } = e,
        h = "0" === l.guildId,
        I = (0, o.bG)([w.A], () => w.A.getGuild(l.guildId)),
        f = !h && null != I,
        [p, T] = a.useState(),
        m = (0, C.tj)({ location: "SoundmojiGuildInfo" }),
        S = h || f || null != p || !m,
        [R, O] = a.useState(!S);
    a.useEffect(() => {
        S ||
            (O(!0),
            (0, M.nh)(l.soundId, l.guildId)
                .then((e) => {
                    T(e);
                })
                .finally(() => {
                    O(!1), A();
                }));
    }, [A, S, l.guildId, l.soundId]);
    let { buttonType: L, description: D } =
            ((t = "0" === l.guildId),
            (n = (0, o.bG)([g.default], () => N.Ay.canUseSoundboardEverywhere(g.default.getCurrentUser()))),
            (i = (0, C.tj)({ location: "useSoundmojiGuildInfoData" })),
            (s = l.guildId !== c?.guild_id),
            {
                buttonType: a.useMemo(() => (t || !i ? 2 : n ? (f || null == p ? 2 : 0) : 1), [t, n, i, f, p]),
                description: a.useMemo(() => {
                    let e = null != p;
                    return (0, x.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: f,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: s,
                        canSendSoundmojis: i,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => k.intl.string(k.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => k.intl.string(k.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => k.intl.string(k.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            k.intl.string(k.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            k.intl.string(k.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            k.intl.string(k.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            k.intl.string(k.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => k.intl.string(k.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            k.intl.string(k.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, p, n, f, s, i]),
            }),
        G = L === F.JOIN_GUILD,
        V = !h && R,
        B = a.useMemo(
            () => (f ? y.GO.createFromGuildRecord(I) : null != p ? y.GO.createFromDiscoverableGuild(p) : void 0),
            [I, f, p],
        );
    return V
        ? (0, r.jsx)(b.Y0, {})
        : (0, r.jsxs)("div", {
              className: H.op,
              children: [
                  (0, r.jsxs)(b.Uq, {
                      children: [
                          (0, r.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, r.jsx)(U.Ay, {
                                      buttonOverlay: P.If.NONE,
                                      sound: l,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, r.jsx)(u.E, { variant: "text-sm/normal", children: D }),
                              ],
                          }),
                          null != B &&
                              (0, r.jsxs)("div", {
                                  className: H.Qe,
                                  children: [
                                      (0, r.jsx)(u.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: H.x$,
                                          children: f ? k.intl.string(k.t.tGDabk) : k.intl.string(k.t.rnOmOa),
                                      }),
                                      (0, r.jsx)("div", {
                                          className: H.Ff,
                                          children: (0, r.jsx)(v.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: f,
                                              isDisplayingJoinGuildButtonInPopout: G,
                                              closePopout: _,
                                          }),
                                      }),
                                      (0, r.jsx)(j, { buttonType: L, discoverableGuildId: p?.id, closePopout: _ }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsx)(E.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var Y = n(757718);
function K() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = a.useState(R.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: a.useCallback((e) => {
                let n = (0, S.w)(e);
                t(n), R.HO.updateSetting(n);
            }, []),
        };
    })();
    return (0, r.jsxs)(c.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(u.E, { variant: "text-sm/normal", children: k.intl.string(k.t["2JbvKw"]) }),
            (0, r.jsx)(_.A, { onValueChange: t, className: H.aw, initialValue: (0, S.M)(e), maxValue: 100 }),
        ],
    });
}
function $(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, C.tj)({ location: "SoundmojiBanner" }),
        a = (0, o.bG)([g.default], () => N.Ay.canUseSoundboardEverywhere(g.default.getCurrentUser())),
        s = (0, o.bG)([m.A], () => m.A.getGuildId());
    return n || a || "0" === t.guildId || t.guildId === s || !i
        ? (0, r.jsx)(E.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, r.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, r.jsx)("div", { className: H.Nh }),
                  (0, r.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, r.jsx)(A.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, r.jsx)(u.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: H.sD,
                              children: k.intl.string(k.t["BMw+7I"]),
                          }),
                          (0, r.jsx)(E.Lp, { text: "BETA", color: d.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
                      ],
                  }),
              ],
          });
}
function z(e) {
    let { sound: t } = e;
    return (0, r.jsxs)("div", {
        className: l()(H.op, H.kX),
        children: [
            (0, r.jsx)($, { sound: t }),
            (0, r.jsxs)("div", {
                className: H.Br,
                children: [
                    (0, r.jsxs)("div", {
                        className: H.tn,
                        children: [
                            (0, r.jsx)(h.J, { size: "sm", className: H.nR }),
                            (0, r.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, r.jsx)("div", {
                        className: H.tn,
                        children: (0, r.jsx)(u.E, { variant: "text-sm/normal", children: k.intl.string(k.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function q(e) {
    let { renderPopout: t, position: n, tooltipText: i, children: s, setTooltipShowing: l, clickableClassName: o } = e,
        [d, u] = a.useState(!1),
        [_, E] = a.useState(String(Date.now())),
        A = a.useCallback(
            (e) => {
                e.stopPropagation(), u(!d);
            },
            [d],
        ),
        h = a.useCallback(() => {
            E(String(Date.now()));
        }, []),
        p = a.useRef(null);
    a.useEffect(() => {
        d ? p.current?.focus() : p.current?.blur(), l?.(d);
    }, [d, l]);
    let T = !d;
    return (0, r.jsx)(I.Y, {
        targetElementRef: p,
        renderPopout: (e) =>
            (0, r.jsx)(c.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: h }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => u(!1),
        animationPosition: "bottom",
        positionKey: _,
        scrollBehavior: "close",
        children: (e) =>
            (0, r.jsx)(f.m, {
                onTooltipHide: () => {
                    T && l?.(!1);
                },
                onTooltipShow: () => {
                    T && l?.(!0);
                },
                text: i,
                position: "top",
                shouldShow: T,
                children: (0, r.jsx)(c.D, {
                    ...e,
                    innerRef: p,
                    "aria-label": i,
                    onClick: A,
                    className: o,
                    children: s,
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
                tooltipText: k.intl.string(k.t["19lt24"]),
                position: "top",
                children: (0, r.jsx)(p.H, { size: "md", color: "currentColor", className: Y.Wo }),
            }),
            (0, r.jsx)(q, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, r.jsx)(W, { sound: t, channel: n, ...e }),
                tooltipText: k.intl.string(k.t["KVbJU/"]),
                position: "right",
                children: (0, r.jsx)(T.m, { size: "md", color: "currentColor", className: Y.Wo }),
            }),
        ],
    });
}
