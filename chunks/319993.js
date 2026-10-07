n.d(t, { Gq: () => K, WE: () => W, qn: () => J, Ay: () => Y });
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
    G = n(71393),
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
    w = n(202541),
    U = n(652215),
    z = n(653131);
function B(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await T.A.joinGuild(t), T.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return l === D.GET_NITRO
        ? (0, i.jsx)(P.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: U.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: w.pe.TIER_2,
              size: S.$n.Sizes.SMALL,
              color: S.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: L.intl.string(L.t.pj0XBN) },
          })
        : l === D.JOIN_GUILD
          ? (0, i.jsx)(C.$, {
                variant: "primary",
                size: "sm",
                text: L.intl.string(L.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function V(e) {
    let t,
        n,
        l,
        a,
        { sound: r, channel: u, closePopout: c, refreshPosition: x, renderSoundButton: h } = e,
        j = "0" === r.guildId,
        g = (0, o.bG)([G.A], () => G.A.getGuild(r.guildId)),
        p = !j && null != g,
        [f, A] = s.useState(),
        I = (0, b.tj)({ location: "SoundmojiGuildInfo" }),
        E = j || p || null != f || !I,
        [S, C] = s.useState(!E);
    s.useEffect(() => {
        E ||
            (C(!0),
            (0, R.nh)(r.soundId, r.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    (C(!1), x());
                }));
    }, [x, E, r.guildId, r.soundId]);
    let { buttonType: T, description: P } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([N.default], () => v.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser()))),
            (l = (0, b.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== u?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (p || null == f ? 2 : 0) : 1), [t, n, l, p, f]),
                description: s.useMemo(() => {
                    let e = null != f;
                    return (0, M.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: p,
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
                }, [t, f, n, p, a, l]),
            }),
        w = T === D.JOIN_GUILD,
        U = !j && S,
        V = s.useMemo(
            () => (p ? y.GO.createFromGuildRecord(g) : null != f ? y.GO.createFromDiscoverableGuild(f) : void 0),
            [g, p, f],
        );
    return U
        ? (0, i.jsx)(_.Y0, {})
        : (0, i.jsxs)("div", {
              className: z.op,
              children: [
                  (0, i.jsxs)(_.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: z.g4,
                              children: [
                                  h({
                                      buttonOverlay: k.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(d.E, { variant: "text-sm/normal", children: P }),
                              ],
                          }),
                          null != V &&
                              (0, i.jsxs)("div", {
                                  className: z.Qe,
                                  children: [
                                      (0, i.jsx)(d.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: z.x$,
                                          children: p ? L.intl.string(L.t.tGDabk) : L.intl.string(L.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: z.Ff,
                                          children: (0, i.jsx)(O.G7, {
                                              expressionSourceGuild: V,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: w,
                                              closePopout: c,
                                          }),
                                      }),
                                      (0, i.jsx)(B, { buttonType: T, discoverableGuildId: f?.id, closePopout: c }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)("div", {
                      className: z.aZ,
                      children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                  }),
              ],
          });
}
var F = n(948611);
function J() {
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
        className: z.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(d.E, { variant: "text-sm/normal", children: L.intl.string(L.t["2JbvKw"]) }),
            (0, i.jsx)(c.A, { onValueChange: t, className: z.aw, initialValue: (0, I.M)(e), maxValue: 100 }),
        ],
    });
}
function H(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, b.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([N.default], () => v.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser())),
        a = (0, o.bG)([A.A], () => A.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !l
        ? (0, i.jsx)("div", {
              className: z.aZ,
              children: (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
          })
        : (0, i.jsxs)("div", {
              className: z.Mq,
              children: [
                  (0, i.jsx)("div", { className: z.Nh }),
                  (0, i.jsxs)("div", {
                      className: z.Pc,
                      children: [
                          (0, i.jsx)(x.t, { size: "xxs", color: "white", className: z.aJ }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: z.sD,
                              children: L.intl.string(L.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(m.E, { type: { text: "BETA" }, variant: "brand" }),
                      ],
                  }),
              ],
          });
}
function W(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(z.op, z.kX),
        children: [
            (0, i.jsx)(H, { sound: t }),
            (0, i.jsxs)("div", {
                className: z.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: z.tn,
                        children: [
                            (0, i.jsx)(h.J, { size: "sm", className: z.nR }),
                            (0, i.jsx)(d.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: z.tn,
                        children: (0, i.jsx)(d.E, { variant: "text-sm/normal", children: L.intl.string(L.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
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
function Y(e) {
    let { sound: t, channel: n, setTooltipShowing: l, renderSoundButton: s } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(K, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(J, {}),
                tooltipText: L.intl.string(L.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(p.H, { size: "md", color: "currentColor", className: F.Wo }),
            }),
            (0, i.jsx)(K, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(V, { sound: t, channel: n, renderSoundButton: s, ...e }),
                tooltipText: L.intl.string(L.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(f.CircleInformationIcon, { size: "md", color: "currentColor", className: F.Wo }),
            }),
        ],
    });
}
