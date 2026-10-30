n.d(t, { Gq: () => W, WE: () => F, qn: () => B, Ay: () => X });
var i,
    s = n(477900),
    l = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    d = n(939249),
    u = n(834730),
    c = n(893007),
    m = n(62010),
    x = n(403581),
    h = n(7807),
    j = n(265872),
    g = n(866665),
    p = n(983851),
    N = n(885574),
    f = n(967198),
    b = n(287809),
    I = n(824744),
    v = n(24482),
    E = n(926972),
    A = n(253932),
    C = n(862482),
    S = n(821609),
    O = n(66834),
    y = n(624793),
    T = n(639245),
    k = n(188645),
    P = n(796774),
    L = n(807348),
    _ = n(71393),
    R = n(725807);
n(801541);
var G = n(889137);
n(980504);
var M = n(105292),
    D =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    w = n(202541),
    U = n(652215),
    z = n(653131);
function J(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
        a = l.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await O.A.joinGuild(t), O.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return i === D.GET_NITRO
        ? (0, s.jsx)(R.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: U.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: w.pe.TIER_2,
              size: C.$n.Sizes.SMALL,
              color: C.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: M.intl.string(M.t.pj0XBN) },
          })
        : i === D.JOIN_GUILD
          ? (0, s.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                text: M.intl.string(M.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function V(e) {
    let t,
        n,
        i,
        a,
        { sound: r, channel: d, closePopout: c, refreshPosition: x, renderSoundButton: h } = e,
        j = "0" === r.guildId,
        g = (0, o.bG)([_.A], () => _.A.getGuild(r.guildId)),
        p = !j && null != g,
        [N, f] = l.useState(),
        I = (0, E.t)({ location: "SoundmojiGuildInfo" }),
        A = j || p || null != N || !I,
        [C, S] = l.useState(!A);
    l.useEffect(() => {
        A ||
            (S(!0),
            (0, P.nh)(r.soundId, r.guildId)
                .then((e) => {
                    f(e);
                })
                .finally(() => {
                    (S(!1), x());
                }));
    }, [x, A, r.guildId, r.soundId]);
    let { buttonType: O, description: R } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([b.default], () => v.Ay.canUseSoundboardEverywhere(b.default.getCurrentUser()))),
            (i = (0, E.t)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== d?.guild_id),
            {
                buttonType: l.useMemo(() => (t || !i ? 2 : n ? (p || null == N ? 2 : 0) : 1), [t, n, i, p, N]),
                description: l.useMemo(() => {
                    let e = null != N;
                    return (0, G.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: p,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: i,
                        isDefaultSound: t,
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
                }, [t, N, n, p, a, i]),
            }),
        w = O === D.JOIN_GUILD,
        U = !j && C,
        V = l.useMemo(
            () => (p ? y.GO.createFromGuildRecord(g) : null != N ? y.GO.createFromDiscoverableGuild(N) : void 0),
            [g, p, N],
        );
    return U
        ? (0, s.jsx)(k.Y0, {})
        : (0, s.jsxs)("div", {
              className: z.op,
              children: [
                  (0, s.jsxs)(k.Uq, {
                      children: [
                          (0, s.jsxs)("div", {
                              className: z.g4,
                              children: [
                                  h({
                                      buttonOverlay: L.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, s.jsx)(u.E, { variant: "text-sm/normal", children: R }),
                              ],
                          }),
                          null != V &&
                              (0, s.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, s.jsx)(u.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: p ? M.intl.string(M.t.tGDabk) : M.intl.string(M.t.rnOmOa),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, s.jsx)(T.G7, {
                                              expressionSourceGuild: V,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: w,
                                              closePopout: c,
                                          }),
                                      }),
                                      (0, s.jsx)(J, { buttonType: O, discoverableGuildId: N?.id, closePopout: c }),
                                  ],
                              }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: z.aZ,
                      children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                  }),
              ],
          });
}
var K = n(948611);
function B() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = l.useState(A.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: l.useCallback((e) => {
                let n = (0, I.w)(e);
                (t(n), A.HO.updateSetting(n));
            }, []),
        };
    })();
    return (0, s.jsxs)(d.D, {
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, s.jsx)(u.E, { variant: "text-sm/normal", children: M.intl.string(M.t["2JbvKw"]) }),
            (0, s.jsx)("div", {
                className: z.aw,
                children: (0, s.jsx)(c.A, {
                    "aria-label": M.intl.string(M.t["2JbvKw"]),
                    onChangeEnd: t,
                    defaultValue: (0, I.M)(e),
                    maxValue: 100,
                    formatValue: (e) => `${e.toFixed(0)}%`,
                }),
            }),
        ],
    });
}
function H(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, E.t)({ location: "SoundmojiBanner" }),
        l = (0, o.bG)([b.default], () => v.Ay.canUseSoundboardEverywhere(b.default.getCurrentUser())),
        a = (0, o.bG)([f.A], () => f.A.getGuildId());
    return n || l || "0" === t.guildId || t.guildId === a || !i
        ? (0, s.jsx)("div", {
              className: z.aZ,
              children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
          })
        : (0, s.jsxs)("div", {
              className: z.Mq,
              children: [
                  (0, s.jsx)("div", { className: z.Nh }),
                  (0, s.jsxs)("div", {
                      className: z.Pc,
                      children: [
                          (0, s.jsx)(x.t, { size: "xxs", color: "white", className: z.aJ }),
                          (0, s.jsx)(u.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: z.sD,
                              children: M.intl.string(M.t["BMw+7I"]),
                          }),
                          (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                      ],
                  }),
              ],
          });
}
function F(e) {
    let { sound: t } = e;
    return (0, s.jsxs)("div", {
        className: r()(z.op, z.kX),
        children: [
            (0, s.jsx)(H, { sound: t }),
            (0, s.jsxs)("div", {
                className: z.Br,
                children: [
                    (0, s.jsxs)("div", {
                        className: z.tn,
                        children: [
                            (0, s.jsx)(h.J, { size: "sm", className: z.nR }),
                            (0, s.jsx)(u.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: z.tn,
                        children: (0, s.jsx)(u.E, { variant: "text-sm/normal", children: M.intl.string(M.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { renderPopout: t, position: n, tooltipText: i, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [u, c] = l.useState(!1),
        [m, x] = l.useState(String(Date.now())),
        h = l.useCallback(
            (e) => {
                (e.stopPropagation(), c(!u));
            },
            [u],
        ),
        p = l.useCallback(() => {
            x(String(Date.now()));
        }, []),
        N = l.useRef(null);
    l.useEffect(() => {
        (u ? N.current?.focus() : N.current?.blur(), r?.(u));
    }, [u, r]);
    let f = !u;
    return (0, s.jsx)(j.Y, {
        targetElementRef: N,
        renderPopout: (e) =>
            (0, s.jsx)(d.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: u,
        onRequestClose: () => c(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, s.jsx)(g.m, {
                onTooltipHide: () => {
                    f && r?.(!1);
                },
                onTooltipShow: () => {
                    f && r?.(!0);
                },
                text: i,
                position: "top",
                shouldShow: f,
                children: (0, s.jsx)(d.D, {
                    ...e,
                    innerRef: N,
                    "aria-label": i,
                    onClick: h,
                    className: o,
                    children: a,
                }),
            }),
    });
}
function X(e) {
    let { sound: t, channel: n, setTooltipShowing: i, renderSoundButton: l } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(W, {
                setTooltipShowing: i,
                renderPopout: () => (0, s.jsx)(B, {}),
                tooltipText: M.intl.string(M.t["19lt24"]),
                position: "top",
                children: (0, s.jsx)(p.H, { size: "md", color: "currentColor", className: K.Wo }),
            }),
            (0, s.jsx)(W, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, s.jsx)(V, { sound: t, channel: n, renderSoundButton: l, ...e }),
                tooltipText: M.intl.string(M.t["KVbJU/"]),
                position: "right",
                children: (0, s.jsx)(N.CircleInformationIcon, { size: "md", color: "currentColor", className: K.Wo }),
            }),
        ],
    });
}
