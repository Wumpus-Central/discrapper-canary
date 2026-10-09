n.d(t, { Gq: () => W, WE: () => K, qn: () => J, Ay: () => $ });
var l,
    s = n(477900),
    i = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(939249),
    c = n(834730),
    d = n(299163),
    m = n(508770),
    x = n(403581),
    h = n(7807),
    j = n(922016),
    p = n(866665),
    g = n(983851),
    f = n(885574),
    N = n(967198),
    I = n(287809),
    A = n(824744),
    v = n(158045),
    b = n(926972),
    S = n(885386),
    E = n(862482),
    C = n(821609),
    T = n(66834),
    y = n(624793),
    O = n(639245),
    k = n(188645),
    G = n(796774),
    _ = n(807348),
    R = n(71393),
    P = n(725807);
n(801541);
var M = n(889137);
n(980504);
var L = n(660183),
    D =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    U = n(202541),
    w = n(652215),
    z = n(653131);
function V(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = i.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await T.A.joinGuild(t), T.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return l === D.GET_NITRO
        ? (0, s.jsx)(P.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: w.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: U.pe.TIER_2,
              size: E.$n.Sizes.SMALL,
              color: E.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
          })
        : l === D.JOIN_GUILD
          ? (0, s.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                text: L.intl.string(L.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function B(e) {
    let t,
        n,
        l,
        a,
        { sound: r, channel: u, closePopout: d, refreshPosition: x, renderSoundButton: h } = e,
        j = "0" === r.guildId,
        p = (0, o.bG)([R.A], () => R.A.getGuild(r.guildId)),
        g = !j && null != p,
        [f, N] = i.useState(),
        A = (0, b.tj)({ location: "SoundmojiGuildInfo" }),
        S = j || g || null != f || !A,
        [E, C] = i.useState(!S);
    i.useEffect(() => {
        S ||
            (C(!0),
            (0, G.nh)(r.soundId, r.guildId)
                .then((e) => {
                    N(e);
                })
                .finally(() => {
                    (C(!1), x());
                }));
    }, [x, S, r.guildId, r.soundId]);
    let { buttonType: T, description: P } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser()))),
            (l = (0, b.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== u?.guild_id),
            {
                buttonType: i.useMemo(() => (t || !l ? 2 : n ? (g || null == f ? 2 : 0) : 1), [t, n, l, g, f]),
                description: i.useMemo(() => {
                    let e = null != f;
                    return (0, M.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: g,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: l,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => L.intl.string(L.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => L.intl.string(L.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => L.intl.string(L.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            L.intl.string(L.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            L.intl.string(L.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            L.intl.string(L.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            L.intl.string(L.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => L.intl.string(L.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            L.intl.string(L.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, f, n, g, a, l]),
            }),
        U = T === D.JOIN_GUILD,
        w = !j && E,
        B = i.useMemo(
            () => (g ? y.GO.createFromGuildRecord(p) : null != f ? y.GO.createFromDiscoverableGuild(f) : void 0),
            [p, g, f],
        );
    return w
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
                                      buttonOverlay: _.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, s.jsx)(c.E, { variant: "text-sm/normal", children: P }),
                              ],
                          }),
                          null != B &&
                              (0, s.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, s.jsx)(c.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: g ? L.intl.string(L.t.tGDabk) : L.intl.string(L.t.rnOmOa),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, s.jsx)(O.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: g,
                                              isDisplayingJoinGuildButtonInPopout: U,
                                              closePopout: d,
                                          }),
                                      }),
                                      (0, s.jsx)(V, { buttonType: T, discoverableGuildId: f?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: z.aZ,
                      children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                  }),
              ],
          });
}
var F = n(948611);
function J() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = i.useState(S.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: i.useCallback((e) => {
                let n = (0, A.w)(e);
                (t(n), S.HO.updateSetting(n));
            }, []),
        };
    })();
    return (0, s.jsxs)(u.D, {
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, s.jsx)(c.E, { variant: "text-sm/normal", children: L.intl.string(L.t["2JbvKw"]) }),
            (0, s.jsx)(d.A, { onValueChange: t, className: z.aw, initialValue: (0, A.M)(e), maxValue: 100 }),
        ],
    });
}
function H(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, b.tj)({ location: "SoundmojiBanner" }),
        i = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
        a = (0, o.bG)([N.A], () => N.A.getGuildId());
    return n || i || "0" === t.guildId || t.guildId === a || !l
        ? (0, s.jsx)("div", {
              className: z.aZ,
              children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
          })
        : (0, s.jsxs)("div", {
              className: z.Mq,
              children: [
                  (0, s.jsx)("div", { className: z.Nh }),
                  (0, s.jsxs)("div", {
                      className: z.Pc,
                      children: [
                          (0, s.jsx)(x.t, { size: "xxs", color: "white", className: z.aJ }),
                          (0, s.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: z.sD,
                              children: L.intl.string(L.t["BMw+7I"]),
                          }),
                          (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                      ],
                  }),
              ],
          });
}
function K(e) {
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
                            (0, s.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: z.tn,
                        children: (0, s.jsx)(c.E, { variant: "text-sm/normal", children: L.intl.string(L.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function W(e) {
    let { renderPopout: t, position: n, tooltipText: l, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [c, d] = i.useState(!1),
        [m, x] = i.useState(String(Date.now())),
        h = i.useCallback(
            (e) => {
                (e.stopPropagation(), d(!c));
            },
            [c],
        ),
        g = i.useCallback(() => {
            x(String(Date.now()));
        }, []),
        f = i.useRef(null);
    i.useEffect(() => {
        (c ? f.current?.focus() : f.current?.blur(), r?.(c));
    }, [c, r]);
    let N = !c;
    return (0, s.jsx)(j.Y, {
        targetElementRef: f,
        renderPopout: (e) =>
            (0, s.jsx)(u.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: g }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: c,
        onRequestClose: () => d(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, s.jsx)(p.m, {
                onTooltipHide: () => {
                    N && r?.(!1);
                },
                onTooltipShow: () => {
                    N && r?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: N,
                children: (0, s.jsx)(u.D, {
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
    let { sound: t, channel: n, setTooltipShowing: l, renderSoundButton: i } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(W, {
                setTooltipShowing: l,
                renderPopout: () => (0, s.jsx)(J, {}),
                tooltipText: L.intl.string(L.t["19lt24"]),
                position: "top",
                children: (0, s.jsx)(g.H, { size: "md", color: "currentColor", className: F.Wo }),
            }),
            (0, s.jsx)(W, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, s.jsx)(B, { sound: t, channel: n, renderSoundButton: i, ...e }),
                tooltipText: L.intl.string(L.t["KVbJU/"]),
                position: "right",
                children: (0, s.jsx)(f.CircleInformationIcon, { size: "md", color: "currentColor", className: F.Wo }),
            }),
        ],
    });
}
