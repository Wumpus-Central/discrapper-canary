n.d(t, { Gq: () => $, WE: () => Y, qn: () => W, Ay: () => q });
var l,
    i = n(477900),
    s = n(582128),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    u = n(661531),
    d = n(939249),
    c = n(834730),
    m = n(299163),
    x = n(812993),
    h = n(403581),
    j = n(7807),
    g = n(922016),
    p = n(866665),
    f = n(983851),
    A = n(885574),
    N = n(967198),
    I = n(287809),
    v = n(824744),
    b = n(158045),
    E = n(926972),
    S = n(885386),
    C = n(862482),
    T = n(821609),
    y = n(66834),
    O = n(624793),
    _ = n(639245),
    R = n(188645),
    G = n(796774),
    k = n(807348),
    P = n(817232),
    M = n(71393),
    D = n(725807);
n(801541);
var L = n(889137);
n(980504);
var w = n(375708),
    U =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    z = n(202541),
    B = n(652215),
    V = n(653131);
function F(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    (await y.A.joinGuild(t), y.A.transitionToGuildSync(t));
                } catch {}
        }, [n, t]);
    return l === U.GET_NITRO
        ? (0, i.jsx)(D.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: B.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: z.pe.TIER_2,
              size: C.$n.Sizes.SMALL,
              color: C.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: w.intl.string(w.t.pj0XBN) },
          })
        : l === U.JOIN_GUILD
          ? (0, i.jsx)(T.$, {
                variant: "primary",
                size: "sm",
                text: w.intl.string(w.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function J(e) {
    let t,
        n,
        l,
        a,
        { sound: r, channel: d, closePopout: m, refreshPosition: h } = e,
        j = "0" === r.guildId,
        g = (0, o.bG)([M.A], () => M.A.getGuild(r.guildId)),
        p = !j && null != g,
        [f, A] = s.useState(),
        N = (0, E.tj)({ location: "SoundmojiGuildInfo" }),
        v = j || p || null != f || !N,
        [S, C] = s.useState(!v);
    s.useEffect(() => {
        v ||
            (C(!0),
            (0, G.nh)(r.soundId, r.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    (C(!1), h());
                }));
    }, [h, v, r.guildId, r.soundId]);
    let { buttonType: T, description: y } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([I.default], () => b.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser()))),
            (l = (0, E.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== d?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (p || null == f ? 2 : 0) : 1), [t, n, l, p, f]),
                description: s.useMemo(() => {
                    let e = null != f;
                    return (0, L.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: p,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: l,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => w.intl.string(w.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => w.intl.string(w.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => w.intl.string(w.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            w.intl.string(w.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            w.intl.string(w.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            w.intl.string(w.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            w.intl.string(w.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => w.intl.string(w.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            w.intl.string(w.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, f, n, p, a, l]),
            }),
        D = T === U.JOIN_GUILD,
        z = !j && S,
        B = s.useMemo(
            () => (p ? O.GO.createFromGuildRecord(g) : null != f ? O.GO.createFromDiscoverableGuild(f) : void 0),
            [g, p, f],
        );
    return z
        ? (0, i.jsx)(R.Y0, {})
        : (0, i.jsxs)("div", {
              className: V.op,
              children: [
                  (0, i.jsxs)(R.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: V.g4,
                              children: [
                                  (0, i.jsx)(P.Ay, {
                                      buttonOverlay: k.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(c.E, { variant: "text-sm/normal", children: y }),
                              ],
                          }),
                          null != B &&
                              (0, i.jsxs)("div", {
                                  className: V.Qe,
                                  children: [
                                      (0, i.jsx)(c.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: V.x$,
                                          children: p ? w.intl.string(w.t.tGDabk) : w.intl.string(w.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: V.Ff,
                                          children: (0, i.jsx)(_.G7, {
                                              expressionSourceGuild: B,
                                              hasJoinedExpressionSourceGuild: p,
                                              isDisplayingJoinGuildButtonInPopout: D,
                                              closePopout: m,
                                          }),
                                      }),
                                      (0, i.jsx)(F, { buttonType: T, discoverableGuildId: f?.id, closePopout: m }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)(x.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: V.aZ }),
              ],
          });
}
var H = n(948611);
function W() {
    let { volume: e, onVolumeChange: t } = (function () {
        let [e, t] = s.useState(S.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: s.useCallback((e) => {
                let n = (0, v.w)(e);
                (t(n), S.HO.updateSetting(n));
            }, []),
        };
    })();
    return (0, i.jsxs)(d.D, {
        className: V.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(c.E, { variant: "text-sm/normal", children: w.intl.string(w.t["2JbvKw"]) }),
            (0, i.jsx)(m.A, { onValueChange: t, className: V.aw, initialValue: (0, v.M)(e), maxValue: 100 }),
        ],
    });
}
function K(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, E.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([I.default], () => b.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
        a = (0, o.bG)([N.A], () => N.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !l
        ? (0, i.jsx)(x.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: V.aZ })
        : (0, i.jsxs)("div", {
              className: V.Mq,
              children: [
                  (0, i.jsx)("div", { className: V.Nh }),
                  (0, i.jsxs)("div", {
                      className: V.Pc,
                      children: [
                          (0, i.jsx)(h.t, { size: "xxs", color: "white", className: V.aJ }),
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/medium",
                              color: "text-overlay-light",
                              className: V.sD,
                              children: w.intl.string(w.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(x.Lp, { text: "BETA", color: u.A.colors.BACKGROUND_BRAND.css, className: V.KD }),
                      ],
                  }),
              ],
          });
}
function Y(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(V.op, V.kX),
        children: [
            (0, i.jsx)(K, { sound: t }),
            (0, i.jsxs)("div", {
                className: V.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: V.tn,
                        children: [
                            (0, i.jsx)(j.J, { size: "sm", className: V.nR }),
                            (0, i.jsx)(c.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: V.tn,
                        children: (0, i.jsx)(c.E, { variant: "text-sm/normal", children: w.intl.string(w.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function $(e) {
    let { renderPopout: t, position: n, tooltipText: l, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [u, c] = s.useState(!1),
        [m, x] = s.useState(String(Date.now())),
        h = s.useCallback(
            (e) => {
                (e.stopPropagation(), c(!u));
            },
            [u],
        ),
        j = s.useCallback(() => {
            x(String(Date.now()));
        }, []),
        f = s.useRef(null);
    s.useEffect(() => {
        (u ? f.current?.focus() : f.current?.blur(), r?.(u));
    }, [u, r]);
    let A = !u;
    return (0, i.jsx)(g.Y, {
        targetElementRef: f,
        renderPopout: (e) =>
            (0, i.jsx)(d.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: j }),
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
            (0, i.jsx)(p.m, {
                onTooltipHide: () => {
                    A && r?.(!1);
                },
                onTooltipShow: () => {
                    A && r?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: A,
                children: (0, i.jsx)(d.D, {
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
function q(e) {
    let { sound: t, channel: n, setTooltipShowing: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)($, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(W, {}),
                tooltipText: w.intl.string(w.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(f.H, { size: "md", color: "currentColor", className: H.Wo }),
            }),
            (0, i.jsx)($, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(J, { sound: t, channel: n, ...e }),
                tooltipText: w.intl.string(w.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(A.CircleInformationIcon, { size: "md", color: "currentColor", className: H.Wo }),
            }),
        ],
    });
}
