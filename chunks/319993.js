n.d(t, { Gq: () => W, WE: () => F, qn: () => K, Ay: () => X });
var i,
    s = n(477900),
    l = n(582128),
    r = n(503698),
    a = n.n(r),
    o = n(17928),
    c = n(939249),
    d = n(834730),
    u = n(205513),
    m = n(62010),
    x = n(403581),
    h = n(7807),
    j = n(265872),
    g = n(866665),
    p = n(983851),
    I = n(885574),
    N = n(967198),
    b = n(287809),
    f = n(824744),
    A = n(158045),
    E = n(926972),
    v = n(885386),
    C = n(862482),
    S = n(821609),
    O = n(66834),
    y = n(624793),
    T = n(639245),
    k = n(188645),
    P = n(796774),
    G = n(807348),
    _ = n(71393),
    R = n(725807);
n(801541);
var L = n(889137);
n(980504);
var D = n(105292),
    M =
        (((i = {})[(i.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (i[(i.GET_NITRO = 1)] = "GET_NITRO"),
        (i[(i.NONE = 2)] = "NONE"),
        i),
    w = n(202541),
    U = n(652215),
    z = n(653131);
function J(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: i } = e,
        r = l.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await O.A.joinGuild(t), O.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return i === M.GET_NITRO
        ? (0, s.jsx)(R.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: U.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: w.pe.TIER_2,
              size: C.$n.Sizes.SMALL,
              color: C.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: D.intl.string(D.t.pj0XBN) },
          })
        : i === M.JOIN_GUILD
          ? (0, s.jsx)(S.$, {
                variant: "primary",
                size: "sm",
                text: D.intl.string(D.t.riu2R5),
                fullWidth: !0,
                onClick: r,
            })
          : null;
}
function B(e) {
    let t,
        n,
        i,
        r,
        { sound: a, channel: c, closePopout: u, refreshPosition: x, renderSoundButton: h } = e,
        j = "0" === a.guildId,
        g = (0, o.bG)([_.A], () => _.A.getGuild(a.guildId)),
        p = !j && null != g,
        [I, N] = l.useState(),
        f = (0, E.t)({ location: "SoundmojiGuildInfo" }),
        v = j || p || null != I || !f,
        [C, S] = l.useState(!v);
    l.useEffect(() => {
        v ||
            (S(!0),
            (0, P.nh)(a.soundId, a.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    (S(!1), x());
                }));
    }, [x, v, a.guildId, a.soundId]);
    let { buttonType: O, description: R } =
            ((t = "0" === a.guildId),
            (n = (0, o.bG)([b.default], () => A.Ay.canUseSoundboardEverywhere(b.default.getCurrentUser()))),
            (i = (0, E.t)({ location: "useSoundmojiGuildInfoData" })),
            (r = a.guildId !== c?.guild_id),
            {
                buttonType: l.useMemo(() => (t || !i ? 2 : n ? (p || null == I ? 2 : 0) : 1), [t, n, i, p, I]),
                description: l.useMemo(() => {
                    let e = null != I;
                    return (0, L.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: p,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: r,
                        canSendSoundmojis: i,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => D.intl.string(D.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => D.intl.string(D.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => D.intl.string(D.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            D.intl.string(D.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            D.intl.string(D.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            D.intl.string(D.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            D.intl.string(D.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => D.intl.string(D.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            D.intl.string(D.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, I, n, p, r, i]),
            }),
        w = O === M.JOIN_GUILD,
        U = !j && C,
        B = l.useMemo(
            () => (p ? y.GO.createFromGuildRecord(g) : null != I ? y.GO.createFromDiscoverableGuild(I) : void 0),
            [g, p, I],
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
                                      buttonOverlay: G.If.NONE,
                                      sound: a,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, s.jsx)(d.E, { variant: "text-sm/normal", children: R }),
                              ],
                          }),
                          null != B &&
                              (0, s.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, s.jsx)(d.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: p ? D.intl.string(D.t.tGDabk) : D.intl.string(D.t.rnOmOa),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, s.jsx)(T.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: w,
                                              closePopout: u,
                                          }),
                                      }),
                                      (0, s.jsx)(J, { buttonType: O, discoverableGuildId: I?.id, closePopout: u }),
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
var V = n(948611);
function K() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = l.useState(v.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: l.useCallback((e) => {
                let n = (0, f.w)(e);
                (t(n), v.HO.updateSetting(n));
            }, []),
        };
    })();
    return (0, s.jsxs)(c.D, {
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, s.jsx)(d.E, { variant: "text-sm/normal", children: D.intl.string(D.t["2JbvKw"]) }),
            (0, s.jsx)(u.G, { onValueChange: t, className: z.aw, initialValue: (0, f.M)(e), maxValue: 100 }),
        ],
    });
}
function H(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        i = (0, E.t)({ location: "SoundmojiBanner" }),
        l = (0, o.bG)([b.default], () => A.Ay.canUseSoundboardEverywhere(b.default.getCurrentUser())),
        r = (0, o.bG)([N.A], () => N.A.getGuildId());
    return n || l || "0" === t.guildId || t.guildId === r || !i
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
                          (0, s.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: z.sD,
                              children: D.intl.string(D.t["BMw+7I"]),
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
        className: a()(z.op, z.kX),
        children: [
            (0, s.jsx)(H, { sound: t }),
            (0, s.jsxs)("div", {
                className: z.Br,
                children: [
                    (0, s.jsxs)("div", {
                        className: z.tn,
                        children: [
                            (0, s.jsx)(h.J, { size: "sm", className: z.nR }),
                            (0, s.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: z.tn,
                        children: (0, s.jsx)(d.E, { variant: "text-sm/normal", children: D.intl.string(D.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { renderPopout: t, position: n, tooltipText: i, children: r, setTooltipShowing: a, clickableClassName: o } = e,
        [d, u] = l.useState(!1),
        [m, x] = l.useState(String(Date.now())),
        h = l.useCallback(
            (e) => {
                (e.stopPropagation(), u(!d));
            },
            [d],
        ),
        p = l.useCallback(() => {
            x(String(Date.now()));
        }, []),
        I = l.useRef(null);
    l.useEffect(() => {
        (d ? I.current?.focus() : I.current?.blur(), a?.(d));
    }, [d, a]);
    let N = !d;
    return (0, s.jsx)(j.Y, {
        targetElementRef: I,
        renderPopout: (e) =>
            (0, s.jsx)(c.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => u(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, s.jsx)(g.m, {
                onTooltipHide: () => {
                    N && a?.(!1);
                },
                onTooltipShow: () => {
                    N && a?.(!0);
                },
                text: i,
                position: "top",
                shouldShow: N,
                children: (0, s.jsx)(c.D, {
                    ...e,
                    innerRef: I,
                    "aria-label": i,
                    onClick: h,
                    className: o,
                    children: r,
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
                renderPopout: () => (0, s.jsx)(K, {}),
                tooltipText: D.intl.string(D.t["19lt24"]),
                position: "top",
                children: (0, s.jsx)(p.H, { size: "md", color: "currentColor", className: V.Wo }),
            }),
            (0, s.jsx)(W, {
                setTooltipShowing: i,
                renderPopout: (e) => (0, s.jsx)(B, { sound: t, channel: n, renderSoundButton: l, ...e }),
                tooltipText: D.intl.string(D.t["KVbJU/"]),
                position: "right",
                children: (0, s.jsx)(I.CircleInformationIcon, { size: "md", color: "currentColor", className: V.Wo }),
            }),
        ],
    });
}
