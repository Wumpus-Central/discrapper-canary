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
    _ = n(922016),
    x = n(983851),
    C = n(885574),
    A = n(967198),
    E = n(287809),
    I = n(824744),
    v = n(927578),
    y = n(704591),
    b = n(14400),
    S = n(862482),
    N = n(821609),
    j = n(686956),
    T = n(624793),
    w = n(861626),
    R = n(34337),
    L = n(796774),
    k = n(807348),
    M = n(805945),
    O = n(71393),
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
    B = n(532340);
function H(e) {
    let { discoverableGuildId: t, closePopout: n, buttonType: l } = e,
        a = s.useCallback(async () => {
            if ((n(), null != t))
                try {
                    await j.A.joinGuild(t), j.A.transitionToGuildSync(t);
                } catch {}
        }, [n, t]);
    return l === V.GET_NITRO
        ? (0, i.jsx)(P.A, {
              fullWidth: !0,
              showGradient: !0,
              premiumModalAnalyticsLocation: { section: F.JJy.PREMIUM_SOUNDMOJI_GUILD_INFO_POPOUT },
              subscriptionTier: G.pe.TIER_2,
              size: S.$n.Sizes.SMALL,
              color: S.$n.Colors.CUSTOM,
              onClick: n,
              textOptions: { textOverride: U.intl.string(U.t.pj0XBN) },
          })
        : l === V.JOIN_GUILD
          ? (0, i.jsx)(N.$, {
                variant: "primary",
                size: "sm",
                text: U.intl.string(U.t.riu2R5),
                fullWidth: !0,
                onClick: a,
            })
          : null;
}
function W(e) {
    let t,
        n,
        l,
        a,
        { sound: r, channel: u, closePopout: d, refreshPosition: m } = e,
        f = "0" === r.guildId,
        g = (0, o.bG)([O.A], () => O.A.getGuild(r.guildId)),
        _ = !f && null != g,
        [x, C] = s.useState(),
        A = (0, y.tj)({ location: "SoundmojiGuildInfo" }),
        I = f || _ || null != x || !A,
        [b, S] = s.useState(!I);
    s.useEffect(() => {
        I ||
            (S(!0),
            (0, L.nh)(r.soundId, r.guildId)
                .then((e) => {
                    C(e);
                })
                .finally(() => {
                    S(!1), m();
                }));
    }, [m, I, r.guildId, r.soundId]);
    let { buttonType: N, description: j } =
            ((t = "0" === r.guildId),
            (n = (0, o.bG)([E.default], () => v.Ay.canUseSoundboardEverywhere(E.default.getCurrentUser()))),
            (l = (0, y.tj)({ location: "useSoundmojiGuildInfoData" })),
            (a = r.guildId !== u?.guild_id),
            {
                buttonType: s.useMemo(() => (t || !l ? 2 : n ? (_ || null == x ? 2 : 0) : 1), [t, n, l, _, x]),
                description: s.useMemo(() => {
                    let e = null != x;
                    return (0, D.YW)({
                        hasSoundmojiPermissions: n,
                        isInGuild: _,
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
                }, [t, x, n, _, a, l]),
            }),
        P = N === V.JOIN_GUILD,
        G = !f && b,
        F = s.useMemo(
            () => (_ ? T.GO.createFromGuildRecord(g) : null != x ? T.GO.createFromDiscoverableGuild(x) : void 0),
            [g, _, x],
        );
    return G
        ? (0, i.jsx)(R.Y0, {})
        : (0, i.jsxs)("div", {
              className: B.op,
              children: [
                  (0, i.jsxs)(R.Uq, {
                      children: [
                          (0, i.jsxs)("div", {
                              className: B.g4,
                              children: [
                                  (0, i.jsx)(M.Ay, {
                                      buttonOverlay: k.If.NONE,
                                      sound: r,
                                      channel: void 0,
                                      isSoundmoji: !0,
                                      onSelectItem: () => {},
                                  }),
                                  (0, i.jsx)(h.E, { variant: "text-sm/normal", children: j }),
                              ],
                          }),
                          null != F &&
                              (0, i.jsxs)("div", {
                                  className: B.Qe,
                                  children: [
                                      (0, i.jsx)(h.E, {
                                          variant: "eyebrow",
                                          color: "text-muted",
                                          className: B.x$,
                                          children: _ ? U.intl.string(U.t.tGDabk) : U.intl.string(U.t.rnOmOa),
                                      }),
                                      (0, i.jsx)("div", {
                                          className: B.Ff,
                                          children: (0, i.jsx)(w.G7, {
                                              expressionSourceGuild: F,
                                              hasJoinedExpressionSourceGuild: _,
                                              isDisplayingJoinGuildButtonInPopout: P,
                                          }),
                                      }),
                                      (0, i.jsx)(H, { buttonType: N, discoverableGuildId: x?.id, closePopout: d }),
                                  ],
                              }),
                      ],
                  }),
                  (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: B.aZ }),
              ],
          });
}
var K = n(757718);
function z() {
    let { volume: e, onVolumeChange: t } = (0, b.A)();
    return (0, i.jsxs)(d.D, {
        className: B.xJ,
        onClick: (e) => e.stopPropagation(),
        children: [
            (0, i.jsx)(h.E, { variant: "text-sm/normal", children: U.intl.string(U.t["2JbvKw"]) }),
            (0, i.jsx)(m.A, { onValueChange: t, className: B.aw, initialValue: (0, I.M)(e), maxValue: 100 }),
        ],
    });
}
function Z(e) {
    let { sound: t, forceShowBetaLabel: n = !1 } = e,
        l = (0, y.tj)({ location: "SoundmojiBanner" }),
        s = (0, o.bG)([E.default], () => v.Ay.canUseSoundboardEverywhere(E.default.getCurrentUser())),
        a = (0, o.bG)([A.A], () => A.A.getGuildId());
    return n || s || "0" === t.guildId || t.guildId === a || !l
        ? (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: B.aZ })
        : (0, i.jsxs)("div", {
              className: B.Mq,
              children: [
                  (0, i.jsx)("div", { className: B.Nh }),
                  (0, i.jsxs)("div", {
                      className: B.Pc,
                      children: [
                          (0, i.jsx)(f.t, { size: "xxs", color: "white", className: B.aJ }),
                          (0, i.jsx)(h.E, {
                              variant: "text-xs/medium",
                              color: "always-white",
                              className: B.sD,
                              children: U.intl.string(U.t["BMw+7I"]),
                          }),
                          (0, i.jsx)(p.Lp, { text: "BETA", color: c.A.colors.BACKGROUND_BRAND.css, className: B.KD }),
                      ],
                  }),
              ],
          });
}
function q(e) {
    let { sound: t } = e;
    return (0, i.jsxs)("div", {
        className: r()(B.op, B.kX),
        children: [
            (0, i.jsx)(Z, { sound: t }),
            (0, i.jsxs)("div", {
                className: B.Br,
                children: [
                    (0, i.jsxs)("div", {
                        className: B.tn,
                        children: [
                            (0, i.jsx)(g.J, { size: "sm", className: B.nR }),
                            (0, i.jsx)(h.E, { variant: "text-md/semibold", color: "text-strong", children: t.name }),
                        ],
                    }),
                    (0, i.jsx)("div", {
                        className: B.tn,
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
        x = s.useRef(null);
    s.useEffect(() => {
        c ? x.current?.focus() : x.current?.blur(), r?.(c);
    }, [c, r]);
    let C = !c;
    return (0, i.jsx)(_.Y, {
        targetElementRef: x,
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
                    C && r?.(!1);
                },
                onTooltipShow: () => {
                    C && r?.(!0);
                },
                text: l,
                position: "top",
                shouldShow: C,
                children: (0, i.jsx)(d.D, {
                    ...e,
                    innerRef: x,
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
                children: (0, i.jsx)(x.H, { size: "md", color: "currentColor", className: K.Wo }),
            }),
            (0, i.jsx)(J, {
                setTooltipShowing: l,
                renderPopout: (e) => (0, i.jsx)(W, { sound: t, channel: n, ...e }),
                tooltipText: U.intl.string(U.t["KVbJU/"]),
                position: "right",
                children: (0, i.jsx)(C.m, { size: "md", color: "currentColor", className: K.Wo }),
            }),
        ],
    });
}
