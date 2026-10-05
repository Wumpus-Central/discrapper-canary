n.d(t, { Gq: () => Y, WE: () => K, qn: () => H, Ay: () => $ });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(939249),
    d = n(834730),
    c = n(299163),
    m = n(508770),
    x = n(403581),
    h = n(7807),
    j = n(922016),
    g = n(866665),
    p = n(983851),
    f = n(885574),
    A = n(967198),
    N = n(287809),
    I = n(824744),
    v = n(158045),
    b = n(926972),
    E = n(885386),
    S = n(862482),
    C = n(821609),
    T = n(66834),
    y = n(624793),
    O = n(639245),
    _ = n(188645),
    R = n(796774),
    k = n(807348),
    G = n(817232),
    P = n(71393),
    M = n(725807);
n(801541);
var L = n(889137);
n(980504);
var D = n(375708),
    w =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    U = n(202541),
    z = n(652215),
    V = n(653131);
function B(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await T.A.joinGuild(t), T.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return l === w.GET_NITRO
        ? (0, i.jsx)(M.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: z.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: U.pe.TIER_2,
              size: S.$n.Sizes.SMALL,
              color: S.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: D.intl.string(D.t.pj0XBN) },
          })
        : l === w.JOIN_GUILD
          ? (0, i.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                text: D.intl.string(D.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function F(e) {
    let t,
        n,
        l,
        a,
        { sound: r, channel: u, closePopout: c, refreshPosition: x } = e,
        h = "0" === r.guildId,
        j = (0, o.bG)([P.A], () => P.A.getGuild(r.guildId)),
        g = !h && null != j,
        [p, f] = s.useState(),
        A = (0, b.tj)({ location: "SoundmojiGuildInfo" }),
        I = h || g || null != p || !A,
        [E, S] = s.useState(!I);
    s.useEffect(() => {
        I ||
            (S(!0),
            (0, R.nh)(r.soundId, r.guildId)
                .then((e) => {
                    f(e);
                })
                .finally(() => {
                    (S(!1), x());
                }));
    }, [x, I, r.guildId, r.soundId]);
    let { buttonType: C, description: T } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([N.default], () => v.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser()))),
            (l = (0, b.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== u?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (g || null == p ? 2 : 0) : 1), [t, n, l, g, p]),
                description: s.useMemo(() => {
                    let e = null != p;
                    return (0, L.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: g,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: l,
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
                }, [t, p, n, g, a, l]),
            }),
        M = C === w.JOIN_GUILD,
        U = !h && E,
        z = s.useMemo(
            () => (g ? y.GO.createFromGuildRecord(j) : null != p ? y.GO.createFromDiscoverableGuild(p) : void 0),
            [j, g, p],
        );
    return U
        ? (0, i.jsx)(_.Y0, {})
        : (0, i.jsxs)("div", {
              className: V.op,
              children: [
                  (0, i.jsxs)(_.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: V.g4,
                              children: [
                                  (0, i.jsx)(G.Ay, {
                                      buttonOverlay: k.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(d.E, { variant: "text-sm/normal", children: T }),
                              ],
                          }),
                          null != z &&
                              (0, i.jsxs)("div", {
                                  className: V.Qe,
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: V.x$,
                                          children: g ? D.intl.string(D.t.tGDabk) : D.intl.string(D.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: V.Ff,
                                          children: (0, i.jsx)(O.G7, {
                                              expressionSourceGuild: z,
                                              hasJoinedExpressionSourceGuild: g,
                                              isDisplayingJoinGuildButtonInPopout: M,
                                              closePopout: c,
                                          }),
                                      }),
                                      (0, i.jsx)(B, { buttonType: C, discoverableGuildId: p?.id, closePopout: c }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: V.aZ,
                      children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                  }),
              ],
          });
}
var J = n(948611);
function H() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = s.useState(E.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: s.useCallback((e) => {
                let n = (0, I.w)(e);
                (t(n), E.HO.updateSetting(n));
            }, []),
        };
    })();
    return (0, i.jsxs)(u.D, {
        className: V.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: D.intl.string(D.t["2JbvKw"]) }),
            (0, i.jsx)(c.A, { onValueChange: t, className: V.aw, initialValue: (0, I.M)(e), maxValue: 100 }),
        ],
    });
}
function W(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, b.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([N.default], () => v.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser())),
        a = (0, o.bG)([A.A], () => A.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !l
        ? (0, i.jsx)("div", {
              className: V.aZ,
              children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
          })
        : (0, i.jsxs)("div", {
              className: V.Mq,
              children: [
                  (0, i.jsx)("div", { className: V.Nh }),
                  (0, i.jsxs)("div", {
                      className: V.Pc,
                      children: [
                          (0, i.jsx)(x.t, { size: "xxs", color: "white", className: V.aJ }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: V.sD,
                              children: D.intl.string(D.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                      ],
                  }),
              ],
          });
}
function K(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(V.op, V.kX),
        children: [
            (0, i.jsx)(W, { sound: t }),
            (0, i.jsxs)("div", {
                className: V.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: V.tn,
                        children: [
                            (0, i.jsx)(h.J, { size: "sm", className: V.nR }),
                            (0, i.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: V.tn,
                        children: (0, i.jsx)(d.E, { variant: "text-sm/normal", children: D.intl.string(D.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function Y(e) {
    let { renderPopout: t, position: n, tooltipText: l, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [d, c] = s.useState(!1),
        [m, x] = s.useState(String(Date.now())),
        h = s.useCallback(
            (e) => {
                (e.stopPropagation(), c(!d));
            },
            [d],
        ),
        p = s.useCallback(() => {
            x(String(Date.now()));
        }, []),
        f = s.useRef(null);
    s.useEffect(() => {
        (d ? f.current?.focus() : f.current?.blur(), r?.(d));
    }, [d, r]);
    let A = !d;
    return (0, i.jsx)(j.Y, {
        targetElementRef: f,
        renderPopout: (e) =>
            (0, i.jsx)(u.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: p }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: d,
        onRequestClose: () => c(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, i.jsx)(g.m, {
                onTooltipHide: () => {
                    A && r?.(!1);
                },
                onTooltipShow: () => {
                    A && r?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: A,
                children: (0, i.jsx)(u.D, {
                    ...e,
                    innerRef: f,
                    "aria-label": l,
                    onClick: h,
                    className: o,
                    children: a,
                }),
            }),
    });
}
function $(e) {
    let { sound: t, channel: n, setTooltipShowing: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(Y, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(H, {}),
                tooltipText: D.intl.string(D.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(p.H, { size: "md", color: "currentColor", className: J.Wo }),
            }),
            (0, i.jsx)(Y, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(F, { sound: t, channel: n, ...e }),
                tooltipText: D.intl.string(D.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(f.CircleInformationIcon, { size: "md", color: "currentColor", className: J.Wo }),
            }),
        ],
    });
}
