t.d(n, { Gq: () => K, WE: () => J, qn: () => F, Ay: () => $ });
var l,
    s = t(477900),
    a = t(582128),
    i = t(503698),
    r = t.n(i),
    o = t(855986),
    u = t(939249),
    c = t(834730),
    d = t(893007),
    m = t(805251),
    x = t(403581),
    h = t(7807),
    p = t(265872),
    j = t(866665),
    g = t(983851),
    f = t(885574),
    v = t(967198),
    N = t(287809),
    I = t(824744),
    b = t(448645),
    E = t(926972),
    A = t(253932),
    C = t(862482),
    T = t(821609),
    y = t(778858),
    _ = t(624793),
    S = t(767143),
    O = t(188645),
    R = t(796774),
    M = t(807348),
    k = t(71393),
    G = t(725807);
t(801541);
var P = t(889137);
t(980504);
var D = t(792996),
    w =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    L = t(682901),
    U = t(652215),
    B = t(653131);
function z(e) {
    let { discoverableGuildId: n, closePopout: t, buttonType: l } = e,
        i = a.useCallback(async () => {
            if ((t(), null != n))
                try {
                    (await y.A.joinGuild(n), y.A.transitionToGuildSync(n));
                } catch {}
        }, [t, n]);
    return l === w.GET_NITRO
        ? (0, s.jsx)(G.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: U.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: L.pe.TIER_2,
              size: C.$n.Sizes.SMALL,
              color: C.$n.Colors.CUSTOM,
              onClick: t,
              textOptions: { textOverride: D.intl.string(D.t.pj0XBN) },
          })
        : l === w.JOIN_GUILD
          ? (0, s.jsx)(T.$, {
                variant: "primary",
                size: "sm",
                text: D.intl.string(D.t.riu2R5),
                fullWidth: !0,
                onClick: i,
            })
          : null;
}
function V(e) {
    let n,
        t,
        l,
        i,
        { sound: r, channel: u, closePopout: d, refreshPosition: x, renderSoundButton: h } = e,
        p = "0" === r.guildId,
        j = (0, o.bG)([k.A], () => k.A.getGuild(r.guildId)),
        g = !p && null != j,
        [f, v] = a.useState(),
        I = (0, E.t)({ location: "SoundmojiGuildInfo" }),
        A = p || g || null != f || !I,
        [C, T] = a.useState(!A);
    a.useEffect(() => {
        A ||
            (T(!0),
            (0, R.nh)(r.soundId, r.guildId)
                .then((e) => {
                    v(e);
                })
                .finally(() => {
                    (T(!1), x());
                }));
    }, [x, A, r.guildId, r.soundId]);
    let { buttonType: y, description: G } =
            ((n = "0" === r.guildId),
            (t = (0, o.bG)([N.default], () => b.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser()))),
            (l = (0, E.t)({ location: "useSoundmojiGuildInfoData" })),
            (i = r.guildId !== u?.guild_id),
            {
                buttonType: a.useMemo(() => (n || !l ? 2 : t ? (g || null == f ? 2 : 0) : 1), [n, t, l, g, f]),
                description: a.useMemo(() => {
                    let e = null != f;
                    return (0, P.YW)({
                        hasSoundmojiPermissions: t,
                        isInGuild: g,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: i,
                        canSendSoundmojis: l,
                        isDefaultSound: n,
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
                }, [n, f, t, g, i, l]),
            }),
        L = y === w.JOIN_GUILD,
        U = !p && C,
        V = a.useMemo(
            () => (g ? _.GO.createFromGuildRecord(j) : null != f ? _.GO.createFromDiscoverableGuild(f) : void 0),
            [j, g, f],
        );
    return U
        ? (0, s.jsx)(O.Y0, {})
        : (0, s.jsxs)("div", {
              className: B.op,
              children: [
                  (0, s.jsxs)(O.Uq, {
                      children: [
                          (0, s.jsxs)("div", {
                              className: B.g4,
                              children: [
                                  h({
                                      buttonOverlay: M.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, s.jsx)(c.E, { variant: "body-sm/normal", children: G }),
                              ],
                          }),
                          null != V &&
                              (0, s.jsxs)("div", {
                                  className: B.Qe,
                                  children: [
                                      (0, s.jsx)(c.E, {
                                          variant: "body-sm/medium",
                                          color: "text-muted",
                                          className: B.x$,
                                          children: g ? D.intl.string(D.t.tGDabk) : D.intl.string(D.t.rnOmOa),
                                      }),
                                      (0, s.jsx)("div", {
                                          className: B.Ff,
                                          children: (0, s.jsx)(S.G7, {
                                              expressionSourceGuild: V,
                                              hasJoinedExpressionSourceGuild: g,
                                              isDisplayingJoinGuildButtonInPopout: L,
                                              closePopout: d,
                                          }),
                                      }),
                                      (0, s.jsx)(z, { buttonType: y, discoverableGuildId: f?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, s.jsx)("div", {
                      className: B.aZ,
                      children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                  }),
              ],
          });
}
var W = t(948611);
function F() {
    let { volume: e, onVolumeChange: n } = (function () {
        let [e, n] = a.useState(A.HO.getSetting());
        return {
            volume: e,
            onVolumeChange: a.useCallback((e) => {
                let t = (0, I.w)(e);
                (n(t), A.HO.updateSetting(t));
            }, []),
        };
    })();
    return (0, s.jsxs)(u.D, {
        className: B.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, s.jsx)(c.E, { variant: "body-sm/normal", children: D.intl.string(D.t["2JbvKw"]) }),
            (0, s.jsx)("div", {
                className: B.aw,
                children: (0, s.jsx)(d.A, {
                    "aria-label": D.intl.string(D.t["2JbvKw"]),
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
        l = (0, E.t)({ location: "SoundmojiBanner" }),
        a = (0, o.bG)([N.default], () => b.Ay.canUseSoundboardEverywhere(N.default.getCurrentUser())),
        i = (0, o.bG)([v.A], () => v.A.getGuildId());
    return t || a || "0" === n.guildId || n.guildId === i || !l
        ? (0, s.jsx)("div", {
              className: B.aZ,
              children: (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
          })
        : (0, s.jsxs)("div", {
              className: B.Mq,
              children: [
                  (0, s.jsx)("div", { className: B.Nh }),
                  (0, s.jsxs)("div", {
                      className: B.Pc,
                      children: [
                          (0, s.jsx)(x.NitroWheelIcon, { size: "xxs", color: "white", className: B.aJ }),
                          (0, s.jsx)(c.E, {
                              variant: "body-xs/medium",
                              color: "text-overlay-light",
                              className: B.sD,
                              children: D.intl.string(D.t["BMw+7I"]),
                          }),
                          (0, s.jsx)(m.E, { type: { text: "BETA" }, variant: "primary" }),
                      ],
                  }),
              ],
          });
}
function J(e) {
    let { sound: n } = e;
    return (0, s.jsxs)("div", {
        className: r()(B.op, B.kX),
        children: [
            (0, s.jsx)(H, { sound: n }),
            (0, s.jsxs)("div", {
                className: B.Br,
                children: [
                    (0, s.jsxs)("div", {
                        className: B.tn,
                        children: [
                            (0, s.jsx)(h.SoundboardIcon, { size: "sm", className: B.nR }),
                            (0, s.jsx)(c.E, { variant: "body-md/semibold", color: "text-strong", children: n.name }),
                        ],
                    }),
                    (0, s.jsx)("div", {
                        className: B.tn,
                        children: (0, s.jsx)(c.E, { variant: "body-sm/normal", children: D.intl.string(D.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function K(e) {
    let { renderPopout: n, position: t, tooltipText: l, children: i, setTooltipShowing: r, clickableClassName: o } = e,
        [c, d] = a.useState(!1),
        [m, x] = a.useState(String(Date.now())),
        h = a.useCallback(
            (e) => {
                (e.stopPropagation(), d(!c));
            },
            [c],
        ),
        g = a.useCallback(() => {
            x(String(Date.now()));
        }, []),
        f = a.useRef(null);
    a.useEffect(() => {
        (c ? f.current?.focus() : f.current?.blur(), r?.(c));
    }, [c, r]);
    let v = !c;
    return (0, s.jsx)(p.Y, {
        targetElementRef: f,
        renderPopout: (e) =>
            (0, s.jsx)(u.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: n({ ...e, refreshPosition: g }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: t,
        shouldShow: c,
        onRequestClose: () => d(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, s.jsx)(j.m, {
                onTooltipHide: () => {
                    v && r?.(!1);
                },
                onTooltipShow: () => {
                    v && r?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: v,
                children: (0, s.jsx)(u.D, {
                    ...e,
                    innerRef: f,
                    "aria-label": l,
                    onClick: h,
                    className: o,
                    children: i,
                }),
            }),
    });
}
function $(e) {
    let { sound: n, channel: t, setTooltipShowing: l, renderSoundButton: a } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(K, {
                setTooltipShowing: l,
                renderPopout: () => (0, s.jsx)(F, {}),
                tooltipText: D.intl.string(D.t["19lt24"]),
                position: "top",
                children: (0, s.jsx)(g.VoiceNormalIcon, { size: "md", color: "currentColor", className: W.Wo }),
            }),
            (0, s.jsx)(K, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, s.jsx)(V, { sound: n, channel: t, renderSoundButton: a, ...e }),
                tooltipText: D.intl.string(D.t["KVbJU/"]),
                position: "right",
                children: (0, s.jsx)(f.CircleInformationIcon, { size: "md", color: "currentColor", className: W.Wo }),
            }),
        ],
    });
}
