t.d(n, { Gq: () => F, WE: () => W, qn: () => V, Ay: () => q });
var s,
    i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(855986),
    d = t(939249),
    c = t(834730),
    u = t(893007),
    m = t(805251),
    h = t(403581),
    x = t(7807),
    j = t(265872),
    g = t(866665),
    p = t(983851),
    b = t(885574),
    N = t(967198),
    f = t(287809),
    I = t(824744),
    v = t(722178),
    C = t(926972),
    A = t(253932),
    E = t(862482),
    y = t(821609),
    S = t(778858),
    O = t(624793),
    T = t(767143),
    k = t(188645),
    _ = t(796774),
    R = t(807348),
    L = t(71393),
    G = t(725807);
t(801541);
var P = t(889137);
t(980504);
var M = t(792996),
    w =
        (((s = {})[(s.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (s[(s.GET_NITRO = 1)] = "GET_NITRO"),
        (s[(s.NONE = 2)] = "NONE"),
        s),
    D = t(682901),
    U = t(652215),
    z = t(653131);
function B(e) {
    let { discoverableGuildId: n, closePopout: t, buttonType: s } = e,
        a = l.useCallback(async () => {
            if ((t(), null != n))
                try {
                    (await S.A.joinGuild(n), S.A.transitionToGuildSync(n));
                } catch {}
        }, [t, n]);
    return s === w.GET_NITRO
        ? (0, i.jsx)(G.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: U.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: D.pe.TIER_2,
              size: E.$n.Sizes.SMALL,
              color: E.$n.Colors.CUSTOM,
              onClick: t,
              textOptions: { textOverride: M.intl.string(M.t.pj0XBN) },
          })
        : s === w.JOIN_GUILD
          ? (0, i.jsx)(y.$, {
                variant: "primary",
                size: "sm",
                text: M.intl.string(M.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function K(e) {
    let n,
        t,
        s,
        a,
        { sound: r, channel: d, closePopout: u, refreshPosition: h, renderSoundButton: x } = e,
        j = "0" === r.guildId,
        g = (0, o.bG)([L.A], () => L.A.getGuild(r.guildId)),
        p = !j && null != g,
        [b, N] = l.useState(),
        I = (0, C.t)({ location: "SoundmojiGuildInfo" }),
        A = j || p || null != b || !I,
        [E, y] = l.useState(!A);
    l.useEffect(() => {
        A ||
            (y(!0),
            (0, _.nh)(r.soundId, r.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    (y(!1), h());
                }));
    }, [h, A, r.guildId, r.soundId]);
    let { buttonType: S, description: G } =
            ((n = "0" === r.guildId),
            (t = (0, o.bG)([f.default], () => v.Ay.canUseSoundboardEverywhere(f.default.getCurrentUser()))),
            (s = (0, C.t)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== d?.guild_id),
            {
                buttonType: l.useMemo(() => (n || !s ? 2 : t ? (p || null == b ? 2 : 0) : 1), [n, t, s, p, b]),
                description: l.useMemo(() => {
                    let e = null != b;
                    return (0, P.YW)({
                        hasSoundmojiPermissions: t,
                        isInGuild: p,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: s,
                        isDefaultSound: n,
                    })
                        .with({ canSendSoundmojis: !1 }, () => M.intl.string(M.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => M.intl.string(M.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => M.intl.string(M.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            M.intl.string(M.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            M.intl.string(M.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            M.intl.string(M.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            M.intl.string(M.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => M.intl.string(M.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            M.intl.string(M.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [n, b, t, p, a, s]),
            }),
        D = S === w.JOIN_GUILD,
        U = !j && E,
        K = l.useMemo(
            () => (p ? O.GO.createFromGuildRecord(g) : null != b ? O.GO.createFromDiscoverableGuild(b) : void 0),
            [g, p, b],
        );
    return U
        ? (0, i.jsx)(k.Y0, {})
        : (0, i.jsxs)("div", {
              className: z.op,
              children: [
                  (0, i.jsxs)(k.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: z.g4,
                              children: [
                                  x({
                                      buttonOverlay: R.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(c.E, { variant: "body-sm/normal", children: G }),
                              ],
                          }),
                          null != K &&
                              (0, i.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: p ? M.intl.string(M.t.tGDabk) : M.intl.string(M.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, i.jsx)(T.G7, {
                                              expressionSourceGuild: K,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: D,
                                              closePopout: u,
                                          }),
                                      }),
                                      (0, i.jsx)(B, { buttonType: S, discoverableGuildId: b?.id, closePopout: u }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: z.aZ,
                      children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                  }),
              ],
          });
}
var J = t(948611);
function V() {
    let { volume: e, onVolumeChange: n } = (function () {
        let [e, n] = l.useState(A.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: l.useCallback((e) => {
                let t = (0, I.w)(e);
                (n(t), A.HO.updateSetting(t));
            }, []),
        };
    })();
    return (0, i.jsxs)(d.D, {
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(c.E, { variant: "body-sm/normal", children: M.intl.string(M.t["2JbvKw"]) }),
            (0, i.jsx)("div", {
                className: z.aw,
                children: (0, i.jsx)(u.A, {
                    "aria-label": M.intl.string(M.t["2JbvKw"]),
                    onChangeEnd: n,
                    defaultValue: (0, I.M)(e),
                    maxValue: 100,
                    formatValue: (e) => `${e.toFixed(0)}%`,
                }),
            }),
        ],
    });
}
function H(e) {
    let { sound: n, forceShowBetaLabel: t = !1 } = e,
        s = (0, C.t)({ location: "SoundmojiBanner" }),
        l = (0, o.bG)([f.default], () => v.Ay.canUseSoundboardEverywhere(f.default.getCurrentUser())),
        a = (0, o.bG)([N.A], () => N.A.getGuildId());
    return t || l || "0" === n.guildId || n.guildId === a || !s
        ? (0, i.jsx)("div", {
              className: z.aZ,
              children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
          })
        : (0, i.jsxs)("div", {
              className: z.Mq,
              children: [
                  (0, i.jsx)("div", { className: z.Nh }),
                  (0, i.jsxs)("div", {
                      className: z.Pc,
                      children: [
                          (0, i.jsx)(h.t, { size: "xxs", color: "white", className: z.aJ }),
                          (0, i.jsx)(c.E, {
                              variant: "body-xs/medium",
                              color: "text-overlay-light",
                              className: z.sD,
                              children: M.intl.string(M.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { sound: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(z.op, z.kX),
        children: [
            (0, i.jsx)(H, { sound: n }),
            (0, i.jsxs)("div", {
                className: z.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.tn,
                        children: [
                            (0, i.jsx)(x.J, { size: "sm", className: z.nR }),
                            (0, i.jsx)(c.E, { variant: "body-md/semibold", color: "text-strong", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: z.tn,
                        children: (0, i.jsx)(c.E, { variant: "body-sm/normal", children: M.intl.string(M.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { renderPopout: n, position: t, tooltipText: s, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [c, u] = l.useState(!1),
        [m, h] = l.useState(String(Date.now())),
        x = l.useCallback(
            (e) => {
                (e.stopPropagation(), u(!c));
            },
            [c],
        ),
        p = l.useCallback(() => {
            h(String(Date.now()));
        }, []),
        b = l.useRef(null);
    l.useEffect(() => {
        (c ? b.current?.focus() : b.current?.blur(), r?.(c));
    }, [c, r]);
    let N = !c;
    return (0, i.jsx)(j.Y, {
        targetElementRef: b,
        renderPopout: (e) =>
            (0, i.jsx)(d.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: n({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: t,
        shouldShow: c,
        onRequestClose: () => u(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, i.jsx)(g.m, {
                onTooltipHide: () => {
                    N && r?.(!1);
                },
                onTooltipShow: () => {
                    N && r?.(!0);
                },
                text: s,
                position: "top",
                shouldShow: N,
                children: (0, i.jsx)(d.D, {
                    ...e,
                    innerRef: b,
                    "aria-label": s,
                    onClick: x,
                    className: o,
                    children: a,
                }),
            }),
    });
}
function q(e) {
    let { sound: n, channel: t, setTooltipShowing: s, renderSoundButton: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(F, {
                setTooltipShowing: s,
                renderPopout: () => (0, i.jsx)(V, {}),
                tooltipText: M.intl.string(M.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(p.H, { size: "md", color: "currentColor", className: J.Wo }),
            }),
            (0, i.jsx)(F, {
                setTooltipShowing: s,
                renderPopout: (e) => (0, i.jsx)(K, { sound: n, channel: t, renderSoundButton: l, ...e }),
                tooltipText: M.intl.string(M.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(b.CircleInformationIcon, { size: "md", color: "currentColor", className: J.Wo }),
            }),
        ],
    });
}
