"use strict";
n.d(t, { Gq: () => J, WE: () => q, qn: () => z, Ay: () => Y });
var l,
    i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    o = n(17928),
    c = n(661531),
    u = n(990078),
    d = n(939249),
    h = n(834730),
    m = n(106236),
    p = n(777666),
    f = n(403581),
    g = n(7807),
    x = n(922016),
    C = n(983851),
    A = n(885574),
    E = n(967198),
    I = n(287809),
    y = n(824744),
    v = n(927578),
    S = n(704591),
    N = n(14400),
    j = n(862482),
    _ = n(821609),
    T = n(686956),
    b = n(624793),
    R = n(861626),
    O = n(34337),
    L = n(796774),
    w = n(807348),
    M = n(805945),
    k = n(71393),
    P = n(725807);
n(801541);
var D = n(889137);
n(980504);
var U = n(985018),
    V =
        (((l = {})[(l.JOIN_GUILD = 0)] = "JOIN_GUILD"),
        (l[(l.GET_NITRO = 1)] = "GET_NITRO"),
        (l[(l.NONE = 2)] = "NONE"),
        l),
    G = n(788868),
    F = n(652215),
    H = n(532340);
function W(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await T.A.joinGuild(t), T.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return l === V.GET_NITRO
        ? (0, i.jsx)(P.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: F.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: G.pe.TIER_2,
              size: j.$n.Sizes.SMALL,
              color: j.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: U.intl.string(U.t.pj0XBN) },
          })
        : l === V.JOIN_GUILD
          ? (0, i.jsx)(_.$, {
                variant: "primary",
                size: "sm",
                text: U.intl.string(U.t.riu2R5),
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
        { sound: r, channel: u, closePopout: d, refreshPosition: m } = e,
        f = "0" === r.guildId,
        g = (0, o.bG)([k.A], () => k.A.getGuild(r.guildId)),
        x = !f && null != g,
        [C, A] = s.useState(),
        E = (0, S.tj)({ location: "SoundmojiGuildInfo" }),
        y = f || x || null != C || !E,
        [N, j] = s.useState(!y);
    s.useEffect(() => {
        y ||
            (j(!0),
            (0, L.nh)(r.soundId, r.guildId)
                .then((e) => {
                    A(e);
                })
                .finally(() => {
                    j(!1), m();
                }));
    }, [m, y, r.guildId, r.soundId]);
    let { buttonType: _, description: T } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser()))),
            (l = (0, S.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== u?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (x || null == C ? 2 : 0) : 1), [t, n, l, x, C]),
                description: s.useMemo(() => {
                    let e = null != C;
                    return (0, D.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: x,
                        isGuildDiscoverable: e,
                        isSoundFromDifferentGuild: a,
                        canSendSoundmojis: l,
                        isDefaultSound: t,
                    })
                        .with({ canSendSoundmojis: !1 }, () => U.intl.string(U.t.x2kyyJ))
                        .with({ isDefaultSound: !0 }, () => U.intl.string(U.t.AabHep))
                        .with({ isInGuild: !1, isGuildDiscoverable: !1 }, () => U.intl.string(U.t.MRYt06))
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            U.intl.string(U.t.p17MQJ),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !0, isSoundFromDifferentGuild: !0 }, () =>
                            U.intl.string(U.t.Lkbm5s),
                        )
                        .with({ hasSoundmojiPermissions: !0, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            U.intl.string(U.t.GTJmaS),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !0, isSoundFromDifferentGuild: !1 }, () =>
                            U.intl.string(U.t["sj/imS"]),
                        )
                        .with(
                            {
                                hasSoundmojiPermissions: !1,
                                isInGuild: !0,
                                isSoundFromDifferentGuild: !0,
                                canSendSoundmojis: !0,
                            },
                            () => U.intl.string(U.t["3Ru2/x"]),
                        )
                        .with({ hasSoundmojiPermissions: !1, isInGuild: !1, isGuildDiscoverable: !0 }, () =>
                            U.intl.string(U.t.qRkWhZ),
                        )
                        .exhaustive();
                }, [t, C, n, x, a, l]),
            }),
        P = _ === V.JOIN_GUILD,
        G = !f && N,
        F = s.useMemo(
            () => (x ? b.GO.createFromGuildRecord(g) : null != C ? b.GO.createFromDiscoverableGuild(C) : void 0),
            [g, x, C],
        );
    return G
        ? (0, i.jsx)(O.Y0, {})
        : (0, i.jsxs)("div", {
              className: H.op,
              children: [
                  (0, i.jsxs)(O.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: H.g4,
                              children: [
                                  (0, i.jsx)(M.Ay, {
                                      buttonOverlay: w.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(h.E, { variant: "text-sm/normal", children: T }),
                              ],
                          }),
                          null != F &&
                              (0, i.jsxs)("div", {
                                  className: H.Qe,
                                  children: [
                                      (0, i.jsx)(h.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: H.x$,
                                          children: x ? U.intl.string(U.t.tGDabk) : U.intl.string(U.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: H.Ff,
                                          children: (0, i.jsx)(R.G7, {
                                              expressionSourceGuild: F,
                                              hasJoinedExpressionSourceGuild: x,
                                              isDisplayingJoinGuildButtonInPopout: P,
                                          }),
                                      }),
                                      (0, i.jsx)(W, { buttonType: _, discoverableGuildId: C?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: H.aZ }),
              ],
          });
}
var K = n(757718);
function z() {
    let { volume: e, onVolumeChange: t } = (0, N.A)();
    return (0, i.jsxs)(d.D, {
        className: H.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(h.E, { variant: "text-sm/normal", children: U.intl.string(U.t["2JbvKw"]) }),
            (0, i.jsx)(m.A, { onValueChange: t, className: H.aw, initialValue: (0, y.M)(e), maxValue: 100 }),
        ],
    });
}
function Z(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, S.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([I.default], () => v.Ay.canUseSoundboardEverywhere(I.default.getCurrentUser())),
        a = (0, o.bG)([E.A], () => E.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !l
        ? (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: H.aZ })
        : (0, i.jsxs)("div", {
              className: H.Mq,
              children: [
                  (0, i.jsx)("div", { className: H.Nh }),
                  (0, i.jsxs)("div", {
                      className: H.Pc,
                      children: [
                          (0, i.jsx)(f.t, { size: "xxs", color: "white", className: H.aJ }),
                          (0, i.jsx)(h.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: H.sD,
                              children: U.intl.string(U.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: H.KD }),
                      ],
                  }),
              ],
          });
}
function q(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(H.op, H.kX),
        children: [
            (0, i.jsx)(Z, { sound: t }),
            (0, i.jsxs)("div", {
                className: H.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: H.tn,
                        children: [
                            (0, i.jsx)(g.J, { size: "sm", className: H.nR }),
                            (0, i.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: H.tn,
                        children: (0, i.jsx)(h.E, { variant: "text-sm/normal", children: U.intl.string(U.t.D6eYmf) }),
                    }),
                ],
            }),
        ],
    });
}
function J(e) {
    let { renderPopout: t, position: n, tooltipText: l, children: a, setTooltipShowing: r, clickableClassName: o } = e,
        [c, h] = s.useState(!1),
        [m, p] = s.useState(String(Date.now())),
        f = s.useCallback(
            (e) => {
                e.stopPropagation(), h(!c);
            },
            [c],
        ),
        g = s.useCallback(() => {
            p(String(Date.now()));
        }, []),
        C = s.useRef(null);
    s.useEffect(() => {
        c ? C.current?.focus() : C.current?.blur(), r?.(c);
    }, [c, r]);
    let A = !c;
    return (0, i.jsx)(x.Y, {
        targetElementRef: C,
        renderPopout: (e) =>
            (0, i.jsx)(d.D, {
                onClick: (e) => e.stopPropagation(),
                onMouseOver: (e) => e.stopPropagation(),
                children: t({ ...e, refreshPosition: g }),
            }),
        align: "center",
        nudgeAlignIntoViewport: !0,
        position: n,
        shouldShow: c,
        onRequestClose: () => h(!1),
        animationPosition: "bottom",
        positionKey: m,
        scrollBehavior: "close",
        children: (e) =>
            (0, i.jsx)(u.m, {
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
                    innerRef: C,
                    "aria-label": l,
                    onClick: f,
                    className: o,
                    children: a,
                }),
            }),
    });
}
function Y(e) {
    let { sound: t, channel: n, setTooltipShowing: l } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(J, {
                setTooltipShowing: l,
                renderPopout: () => (0, i.jsx)(z, {}),
                tooltipText: U.intl.string(U.t["19lt24"]),
                position: "top",
                children: (0, i.jsx)(C.H, { size: "md", color: "currentColor", className: K.Wo }),
            }),
            (0, i.jsx)(J, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(B, { sound: t, channel: n, ...e }),
                tooltipText: U.intl.string(U.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(A.m, { size: "md", color: "currentColor", className: K.Wo }),
            }),
        ],
    });
}
