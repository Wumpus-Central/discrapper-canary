t.d(n, { Gq: () => F, WE: () => H, qn: () => J, Ay: () => q });
var s,
    i = t(477900),
    l = t(582128),
    a = t(503698),
    r = t.n(a),
    o = t(855986),
    c = t(939249),
    d = t(834730),
    u = t(893007),
    m = t(805251),
    h = t(403581),
    x = t(7807),
    j = t(265872),
    g = t(866665),
    p = t(983851),
    b = t(885574),
    N = t(967198),
    I = t(287809),
    f = t(824744),
    v = t(722178),
    C = t(926972),
    A = t(253932),
    E = t(862482),
    S = t(821609),
    y = t(778858),
    O = t(624793),
    T = t(767143),
    k = t(188645),
    _ = t(796774),
    R = t(807348),
    G = t(71393),
    P = t(725807);
t(801541);
var L = t(889137);
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
function V(e) {
    let { discoverableGuildId: n, closePopout: t, buttonType: s } = e,
        a = l.useCallback(async () => {
            if ((t(), null != n))
                try {
                    (await y.A.joinGuild(n), y.A.transitionToGuildSync(n));
                } catch {}
        }, [t, n]);
    return s === w.GET_NITRO
        ? (0, i.jsx)(P.A, {
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
          ? (0, i.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                text: M.intl.string(M.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function B(e) {
    let n,
        t,
        s,
        a,
        { sound: r, channel: c, closePopout: u, refreshPosition: h, renderSoundButton: x } = e,
        j = "0" === r.guildId,
        g = (0, o.bG)([G.A], () => G.A.getGuild(r.guildId)),
        p = !j && null != g,
        [b, N] = l.useState(),
        f = (0, C.t)({ location: "SoundmojiGuildInfo" }),
        A = j || p || null != b || !f,
        [E, S] = l.useState(!A);
    l.useEffect(() => {
        A ||
            (S(!0),
            (0, _.nh)(r.soundId, r.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    (S(!1), h());
                }));
    }, [h, A, r.guildId, r.soundId]);
    let { buttonType: y, description: P } =
            ((n = "0" === r.guildId),
            (t = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser()))),
            (s = (0, C.t)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== c?.guild_id),
            {
                buttonType: l.useMemo(() => (n || !s ? 2 : t ? (p || null == b ? 2 : 0) : 1), [n, t, s, p, b]),
                description: l.useMemo(() => {
                    let e = null != b;
                    return (0, L.YW)({
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
        D = y === w.JOIN_GUILD,
        U = !j && E,
        B = l.useMemo(
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
                                  (0, i.jsx)(d.E, { variant: "body-sm/normal", children: P }),
                              ],
                          }),
                          null != B &&
                              (0, i.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: p ? M.intl.string(M.t.tGDabk) : M.intl.string(M.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, i.jsx)(T.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: D,
                                              closePopout: u,
                                          }),
                                      }),
                                      (0, i.jsx)(V, { buttonType: y, discoverableGuildId: b?.id, closePopout: u }),
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
var K = t(948611);
function J() {
    let { volume: e, onVolumeChange: n } = (function () {
        let [e, n] = l.useState(A.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: l.useCallback((e) => {
                let t = (0, f.w)(e);
                (n(t), A.HO.updateSetting(t));
            }, []),
        };
    })();
    return (0, i.jsxs)(c.D, {
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(d.E, { variant: "body-sm/normal", children: M.intl.string(M.t["2JbvKw"]) }),
            (0, i.jsx)("div", {
                className: z.aw,
                children: (0, i.jsx)(u.A, {
                    "aria-label": M.intl.string(M.t["2JbvKw"]),
                    onChangeEnd: n,
                    defaultValue: (0, f.M)(e),
                    maxValue: 100,
                    formatValue: (e) => `${e.toFixed(0)}%`,
                }),
            }),
        ],
    });
}
function W(e) {
    let { sound: n, forceShowBetaLabel: t = !1 } = e,
        s = (0, C.t)({ location: "SoundmojiBanner" }),
        l = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
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
                          (0, i.jsx)(h.NitroWheelIcon, { size: "xxs", color: "white", className: z.aJ }),
                          (0, i.jsx)(d.E, {
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
function H(e) {
    let { sound: n } = e;
    return (0, i.jsxs)("div", {
        className: r()(z.op, z.kX),
        children: [
            (0, i.jsx)(W, { sound: n }),
            (0, i.jsxs)("div", {
                className: z.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.tn,
                        children: [
                            (0, i.jsx)(x.SoundboardIcon, { size: "sm", className: z.nR }),
                            (0, i.jsx)(d.E, { variant: "body-md/semibold", color: "text-strong", children: n.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: z.tn,
                        children: (0, i.jsx)(d.E, { variant: "body-sm/normal", children: M.intl.string(M.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function F(e) {
    let { renderPopout: n, position: t, tooltipText: s, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [d, u] = l.useState(!1),
        [m, h] = l.useState(String(Date.now())),
        x = l.useCallback(
            (e) => {
                (e.stopPropagation(), u(!d));
            },
            [d],
        ),
        p = l.useCallback(() => {
            h(String(Date.now()));
        }, []),
        b = l.useRef(null);
    l.useEffect(() => {
        (d ? b.current?.focus() : b.current?.blur(), r?.(d));
    }, [d, r]);
    let N = !d;
    return (0, i.jsx)(j.Y, {
        targetElementRef: b,
        renderPopout: (e) =>
            (0, i.jsx)(c.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: n({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: t,
        shouldShow: d,
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
                children: (0, i.jsx)(c.D, {
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
                renderPopout: () => (0, i.jsx)(J, {}),
                tooltipText: M.intl.string(M.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(p.VoiceNormalIcon, { size: "md", color: "currentColor", className: K.Wo }),
            }),
            (0, i.jsx)(F, {
                setTooltipShowing: s,
                renderPopout: (e) => (0, i.jsx)(B, { sound: n, channel: t, renderSoundButton: l, ...e }),
                tooltipText: M.intl.string(M.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(b.CircleInformationIcon, { size: "md", color: "currentColor", className: K.Wo }),
            }),
        ],
    });
}
