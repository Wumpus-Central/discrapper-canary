i.d(t, { A: () => tI }), i(321073), i(667532);
var l = i(627968),
    n = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    d = i(451988),
    c = i(717558),
    u = i(933958),
    o = i(627363),
    m = i(429913),
    h = i(313961),
    g = i(550946),
    p = i(962392),
    A = i(123924),
    x = i(110259),
    v = i(990078),
    I = i(192308),
    f = i(717421),
    N = i(922016),
    E = i(939249),
    _ = i(283973),
    j = i(834730),
    S = i(789645),
    y = i(320448),
    C = i(964486),
    b = i(793574),
    T = i(688810),
    k = i(139286),
    O = i(713517),
    G = i(71393),
    P = i(576705),
    V = i(954571),
    w = i(284009),
    R = i.n(w),
    U = i(177953),
    D = i(133171),
    M = i(652215),
    L = i(778712),
    F = i(97808),
    H = i(863610),
    z = i(376728),
    K = i(774300),
    q = i(566903),
    Y = i(714114),
    W = i(864436),
    B = i(835072),
    $ = i(47167),
    Z = i(854627),
    J = i(10862),
    X = i(164891),
    Q = i(135635),
    ee = i(696451),
    et = i(958590),
    ei = i(290863),
    el = i(427262),
    en = i(112905),
    es = i(985018),
    ea = i(176277),
    er = i(824078),
    ed = i(518229);
let ec = "VoiceInviteSuggestionsPopover";
function eu(e) {
    let { channel: t, onHoverOrFocus: s, setPopoutRef: r, closePopout: d } = e,
        c = n.useRef(null),
        u = (0, O.A)(c),
        o = (0, en.kt)({ channel: t }),
        { enabled: m } = X.A.useExperiment({ guildId: t.guild_id, location: "VoiceInviteSuggestionsPopover" }),
        { analyticsLocations: h } = (0, T.Ay)(b.A.VOICE_INVITE_SUGGESTIONS_POPOVER);
    (0, k.A)({
        name: x.ImpressionNames.VOICE_INVITE_SUGGESTIONS_POPOVER,
        type: x.ImpressionTypes.POPOUT,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: h },
    }),
        n.useEffect(() => {
            r?.(c.current);
        }, [r]),
        n.useEffect(() => {
            s?.(u.isHoveringOrFocusing);
        }, [s, u]);
    let g = n.useCallback(() => {
        let e = G.A.getGuild(t.guild_id);
        R()(null != e, "VoiceInviteSuggestionsPopover must be used in context of a guild"),
            (0, I.openModalLazy)(async () => {
                let { default: n } = await Promise.all([
                    i.e("80813"),
                    i.e("83818"),
                    i.e("59957"),
                    i.e("28136"),
                    i.e("16084"),
                    i.e("22547"),
                ]).then(i.bind(i, 1310));
                return (i) => (0, l.jsx)(n, { ...i, guild: e, channel: t, source: M.PE1.VOICE_INVITE_SUGGESTIONS });
            }),
            d();
    }, [t, d]);
    return (0, l.jsx)("div", {
        ref: c,
        "aria-label": es.intl.string(es.t.o53CL2),
        className: a()(er.popover, ea.oO),
        children: (0, l.jsxs)("div", {
            className: ea.vW,
            children: [
                m &&
                    (0, l.jsx)(j.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        className: ea.DD,
                        children: es.intl.string(es.t["EE+P0H"]),
                    }),
                (0, l.jsxs)("ul", {
                    className: ea.p_,
                    children: [
                        o.map((e) => (0, l.jsx)(eo, { channel: t, user: e, ringingEnabled: m }, e.id)),
                        (0, l.jsxs)(E.D, {
                            tag: "li",
                            onClick: g,
                            className: a()(ea.nM, ea.vk),
                            children: [
                                (0, l.jsx)("div", {
                                    className: ea.R4,
                                    children: (0, l.jsx)(U.n, { size: "custom", className: ea.Kk }),
                                }),
                                (0, l.jsx)(j.E, {
                                    variant: "text-sm/medium",
                                    className: ea.UU,
                                    lineClamp: 1,
                                    children: es.intl.string(es.t.NOP3Ry),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eo(e) {
    let { channel: t, user: i, ringingEnabled: s } = e,
        d = t.guild_id,
        c = n.useRef(null),
        u = (0, r.bG)([ee.Ay], () => ee.Ay.getMember(d, i.id), [d, i.id]),
        { isHoveringOrFocusing: o } = (0, O.A)(c),
        [m, h] = n.useState(null),
        {
            icon: g,
            iconColor: p,
            tooltipText: A,
            disabled: x,
            shouldHideButton: I,
            onClick: f,
        } = (0, Q.A)({ user: i, channel: t, location: ec }),
        {
            status: N,
            isMobileOnline: S,
            activities: y,
        } = (0, r.cf)(
            [ei.A],
            () => ({
                status: ei.A.getStatus(i.id, d),
                isMobileOnline: ei.A.isMobileOnline(i.id),
                activities: ei.A.getActivities(i.id, d),
            }),
            [i.id, d],
        ),
        { activityStatusText: C, activityStatusIcon: b } = n.useMemo(() => {
            let e = y.find((e) => e.type !== M.$pd.CUSTOM_STATUS && e.type !== M.$pd.HANG_STATUS);
            return { activityStatusText: (0, q.A)(e, !1), activityStatusIcon: null == e ? void 0 : (0, B.f)(e) };
        }, [y]),
        { voiceChannel: T } = (0, Y.A)({ userId: i.id }),
        k = (0, $.Ay)(T),
        G = (0, D.S3)(M.clD.ONLINE),
        V = "success" === m || "sending" === m,
        w = n.useCallback(
            (e) => {
                e.stopPropagation(), x || f();
            },
            [f, x],
        ),
        R = n.useCallback(async () => {
            if (V) return;
            async function e() {
                let e = et.A.getInvite(t.id, {}) ?? null;
                if (null == e) {
                    if (!P.A.can(M.xBc.CREATE_INSTANT_INVITE, t)) return null;
                    try {
                        await z.Ay.createInvite(t.id, {}, ec);
                    } catch (e) {
                        return null;
                    }
                    e = et.A.getInvite(t.id, {}) ?? null;
                }
                return e?.code ?? null;
            }
            h("sending");
            let l = await e();
            null == l
                ? h(null)
                : K.A.enqueue(
                      {
                          type: K.F.USER,
                          user: i,
                          inviteKey: l,
                          location: ec,
                          inviteAnalyticsMetadata: { source: M.PE1.VOICE_INVITE_SUGGESTIONS },
                      },
                      (e) => {
                          h(e ? "success" : null);
                      },
                  );
        }, [V, i, t]),
        {
            avatarDecorationSrc: U,
            avatarSrc: X,
            eventHandlers: en,
        } = (0, Z.A)({ userId: i.id, size: L._3.SIZE_24, animateOnHover: !o, guildId: d });
    if (null == u) return null;
    let er = el.Ay.getName(i),
        eu = es.intl.string(es.t.jYnGPG),
        eo = N !== M.clD.OFFLINE ? N : void 0,
        em = null != C.text,
        eh = null != T && null != k;
    return (0, l.jsxs)(E.D, {
        innerRef: c,
        tag: "li",
        className: a()(ea.nM, { [ea.vk]: !V }),
        "aria-disabled": V,
        onClick: R,
        "aria-label": eu,
        children: [
            (0, l.jsx)(F.eu, {
                className: ea.my,
                "aria-label": er,
                size: L._3.SIZE_24,
                src: X,
                avatarDecoration: U,
                status: eo,
                isMobile: S,
                ...en,
            }),
            (0, l.jsxs)("div", {
                className: ea.VW,
                children: [
                    (0, l.jsx)(j.E, { variant: "text-sm/medium", className: ea.UU, lineClamp: 1, children: er }),
                    (eh || em) &&
                        (0, l.jsxs)("div", {
                            className: ea.J2,
                            children: [
                                eh
                                    ? (0, l.jsx)(J.A, { size: "custom", color: G, channel: T, className: ea.RI })
                                    : null != b
                                      ? (0, l.jsx)(W.A, { icon: b, className: ea.RI })
                                      : null,
                                (0, l.jsx)(j.E, {
                                    variant: "text-xs/medium",
                                    color: "text-status-online",
                                    lineClamp: 1,
                                    children: eh ? k : C.text,
                                }),
                            ],
                        }),
                ],
            }),
            "sending" === m &&
                (0, l.jsx)("div", { className: ea.r$, children: (0, l.jsx)(H.n, { dotRadius: 2, themed: !0 }) }),
            "success" === m &&
                (0, l.jsx)(j.E, {
                    variant: "text-xs/medium",
                    color: "text-muted",
                    className: ea.h5,
                    lineClamp: 1,
                    children: es.intl.string(es.t["8BEiNn"]),
                }),
            null == m &&
                !s &&
                (0, l.jsx)("div", {
                    className: ea.SB,
                    children: (0, l.jsx)(_.R, { color: "currentColor", size: "sm", className: ea.Kk }),
                }),
            s &&
                !I &&
                (0, l.jsx)(v.m, {
                    text: A,
                    children: (0, l.jsx)(E.D, {
                        className: a()(ea.D9, ed.button, ed.secondary, { [ea.r9]: x }),
                        onClick: w,
                        "aria-disabled": x,
                        children: (0, l.jsx)(g, { size: "xxs", color: p, className: ea.Kk }),
                    }),
                }),
        ],
    });
}
i(281405);
var em = i(89682),
    eh = i(80442);
let eg = (e) => 1 - Math.pow(1 - e, 4);
function ep(e) {
    let { channel: t, onClose: s } = e,
        d = n.useRef(null),
        c = n.useRef(null),
        [u, o] = n.useState(!1),
        m = n.useRef(null),
        h = n.useRef(null),
        [g, p] = n.useState(0),
        { analyticsLocations: w } = (0, T.Ay)(b.A.VOICE_INVITE_SUGGESTIONS);
    (0, k.A)({
        name: x.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: x.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: w },
    });
    let R = (0, r.bG)([P.A], () => P.A.can(M.xBc.CREATE_INSTANT_INVITE, t), [t]),
        U = (0, r.bG)([G.A], () => G.A.getGuild(t.guild_id)),
        [D, L] = n.useState(!1),
        F = n.useRef(null),
        { isHoveringOrFocusing: H } = (0, O.A)(R ? d : F),
        [z, K] = n.useState(!1),
        { isFocusing: q } = (0, O.A)(c),
        Y = H || z,
        W = n.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                V.default.track(M.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: w,
                }),
                    o(!1),
                    s?.();
            },
            [t, s, w],
        ),
        B = n.useCallback(() => {
            null != U &&
                (0, I.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("80813"),
                        i.e("83818"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, l.jsx)(e, { ...i, guild: U, channel: t, source: M.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [U, t]),
        [$, Z] = (0, f.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: eg, clamp: !0 },
        })),
        J = n.useCallback(
            (e) => {
                L(!0), Z({ to: { height: "0px" }, onRest: () => W(e) });
            },
            [Z, W],
        ),
        X = n.useCallback(
            () => (
                null != m.current && clearTimeout(m.current),
                (m.current = setTimeout(() => J("timeout"), 1e4)),
                p((e) => e + 1),
                () => {
                    null != m.current && clearTimeout(m.current);
                }
            ),
            [J],
        ),
        Q = n.useCallback(
            () => (
                null != h.current && clearTimeout(h.current),
                (h.current = setTimeout(() => {
                    o(!1);
                }, 150)),
                () => {
                    null != h.current && clearTimeout(h.current);
                }
            ),
            [],
        );
    (0, C.Ay)(X),
        n.useEffect(() => {
            if (!Y) {
                X(), Q();
                return;
            }
            null != m.current && clearTimeout(m.current), null != h.current && clearTimeout(h.current), o(!0);
        }, [Y, X, Q]);
    let ee = n.useCallback(() => {
            o(!0);
        }, []),
        et = n.useCallback(() => {
            o(!1), K(!1);
        }, []);
    return R
        ? (0, l.jsx)(N.Y, {
              targetElementRef: d,
              shouldShow: u,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, l.jsx)(eu, { channel: t, onHoverOrFocus: K, ...e }),
              onRequestOpen: ee,
              onRequestClose: et,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, l.jsx)(A.animated.div, {
                      className: em.lY,
                      style: $,
                      children: (0, l.jsx)(E.D, {
                          innerRef: d,
                          className: a()({ [em.vk]: !D }, eh.q7, eh.L9, eh.vk),
                          "aria-disabled": D,
                          "aria-label": es.intl.string(es.t.F3qiJr),
                          onClick: B,
                          ignoreKeyPress: q,
                          ...i,
                          children: (0, l.jsxs)("div", {
                              className: a()(em.Qs, eh.Qs),
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: em.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, l.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(em.O1, { [em.Ft]: Y }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, l.jsx)("circle", { className: em.qB }),
                                                      (0, l.jsx)("circle", { className: em.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${g}`,
                                          ),
                                          (0, l.jsx)(_.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(em.Hk, em.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(v.m, {
                                      text: es.intl.string(es.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, l.jsx)(j.E, {
                                          variant: "text-sm/medium",
                                          className: em.Pf,
                                          lineClamp: 1,
                                          children: es.intl.string(es.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, l.jsx)("div", {
                                      ref: c,
                                      children: H
                                          ? (0, l.jsx)(E.D, {
                                                className: em.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), J("user_explicit");
                                                },
                                                "aria-label": es.intl.string(es.t.cpT0Cq),
                                                children: (0, l.jsx)(S.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: em.Kk,
                                                }),
                                            })
                                          : (0, l.jsx)(y._, { size: "xs", color: "currentColor", className: em.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
var eA = i(551826),
    ex = i(159426),
    ev = i(25528),
    eI = i(530804),
    ef = i(481947),
    eN = i(591346),
    eE = i(616356),
    e_ = i(495544),
    ej = i(969341),
    eS = i(528767),
    ey = i(485296),
    eC = i(977997),
    eb = i(406810),
    eT = i(442433),
    ek = i(609425),
    eO = i(73392),
    eG = i(769022),
    eP = i(287809),
    eV = i(562153),
    ew = i(595457),
    eR = i(601884);
function eU(e) {
    let { channel: t } = e,
        [s, d] = n.useState(!1),
        c = n.useRef(null),
        u = n.useRef(null);
    n.useEffect(
        () => () => {
            clearTimeout(u.current);
        },
        [],
    );
    let o = (0, r.bG)([eG.A, eP.default], () => {
            let e = eG.A.getLastLeftUserId(t.id);
            return null != e ? eP.default.getUser(e) : null;
        }, [t.id]),
        m = eV.Ay.useName(t.guild_id, t.id, o),
        h = (0, ek.A)({ userId: o?.id, guildId: t.guild_id }),
        g = (0, eO.a)({ displayNameStyles: h }),
        p = (e) => {
            e.preventDefault(),
                null != o &&
                    (0, eT.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            i.e("77598"),
                            i.e("23491"),
                            i.e("91388"),
                            i.e("26132"),
                            i.e("46652"),
                            i.e("93190"),
                            i.e("34552"),
                            i.e("55411"),
                            i.e("93103"),
                            i.e("13708"),
                            i.e("8757"),
                            i.e("89673"),
                            i.e("91007"),
                            i.e("68403"),
                            i.e("85968"),
                            i.e("76418"),
                            i.e("60195"),
                            i.e("21921"),
                            i.e("88342"),
                            i.e("66495"),
                            i.e("29787"),
                            i.e("97558"),
                            i.e("94000"),
                            i.e("42451"),
                            i.e("91994"),
                            i.e("98965"),
                            i.e("76665"),
                            i.e("35313"),
                            i.e("24198"),
                            i.e("39171"),
                            i.e("36564"),
                            i.e("792"),
                            i.e("45996"),
                            i.e("92822"),
                            i.e("52229"),
                            i.e("23427"),
                            i.e("49145"),
                            i.e("29422"),
                            i.e("9291"),
                            i.e("7059"),
                            i.e("96553"),
                            i.e("24240"),
                            i.e("43116"),
                            i.e("70314"),
                            i.e("70515"),
                            i.e("27435"),
                            i.e("66939"),
                            i.e("17334"),
                            i.e("84841"),
                        ]).then(i.bind(i, 107632));
                        return (i) => (0, l.jsx)(e, { ...i, user: o, guildId: t.guild_id, channel: t });
                    });
        },
        A = () => {
            clearTimeout(u.current), (u.current = setTimeout(() => d(!0), 100));
        },
        x = () => {
            clearTimeout(u.current), (u.current = setTimeout(() => d(!1), 100));
        };
    return null == o
        ? null
        : (0, l.jsx)(N.Y, {
              targetElementRef: c,
              position: "right",
              shouldShow: s,
              onRequestOpen: A,
              onRequestClose: x,
              useMouseEnter: !0,
              spacing: 17,
              renderPopout: () =>
                  (0, l.jsx)(ew.A, { channel: t, source: "ghost_user", onMouseEnter: A, onMouseLeave: x }),
              children: (e) => {
                  let { onClick: i, ...n } = e;
                  return (0, l.jsxs)(E.D, {
                      innerRef: c,
                      className: eR.nM,
                      "aria-haspopup": "dialog",
                      onClick: A,
                      onContextMenu: p,
                      ...n,
                      onMouseLeave: x,
                      children: [
                          (0, l.jsxs)("div", {
                              className: eR.R3,
                              children: [
                                  (0, l.jsx)(F.eu, {
                                      src: o.getAvatarURL(t.guild_id, 24),
                                      size: L._3.SIZE_24,
                                      "aria-hidden": !0,
                                      status: M.clD.INVISIBLE,
                                      statusColor: "currentColor",
                                  }),
                                  (0, l.jsx)(eb.O, { className: eR.SM }),
                              ],
                          }),
                          (0, l.jsx)(j.E, {
                              variant: "text-sm/normal",
                              className: eR.Pf,
                              children: es.intl.format(es.t.TlVwqn, {
                                  user: m,
                                  userHook: (e, t) =>
                                      (0, l.jsx)(
                                          j.E,
                                          {
                                              variant: "text-sm/semibold",
                                              className: a()(eR.Xh, g),
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                                  labelHook: (e, t) =>
                                      (0, l.jsx)(
                                          j.E,
                                          {
                                              variant: "text-sm/normal",
                                              className: eR.cp,
                                              color: "text-muted",
                                              children: e,
                                          },
                                          t,
                                      ),
                              }),
                          }),
                      ],
                  });
              },
          });
}
var eD = i(597601),
    eM = i(367513),
    eL = i(956793),
    eF = i(401843),
    eH = i(296216),
    ez = i(480890),
    eK = i(643501),
    eq = i(544105),
    eY = i(652896),
    eW = i(279250),
    eB = i(346846),
    e$ = i(342296),
    eZ = i(364522),
    eJ = i(80682),
    eX = i(461213),
    eQ = i(765379);
let e0 = (e) =>
    ([M.$pd.PLAYING, M.$pd.WATCHING].includes(e.type) &&
        [e.name, e.application_id, e.assets, e.state, e.details, e.party].some((e) => null != e)) ||
    e.type === M.$pd.LISTENING;
var e1 = i(685399),
    e2 = i(960076),
    e9 = i(323073),
    e3 = i(85451),
    e7 = i(268218),
    e5 = i(834757),
    e6 = i(727353),
    e8 = i(832163),
    e4 = i(565688),
    te = i(533562),
    tt = i(927813),
    ti = i(329554);
let tl = (0, i(600975).C)({
    kind: "guild",
    id: "2026-04_voice_user_duration",
    label: "Voice User Duration",
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Allow guild members to see each others duration in the channel list",
            config: { enabled: !0 },
        },
    ],
});
var tn = i(699976),
    ts = i(415679);
let ta = (0, e7.Fe)({
    createPromise: () =>
        Promise.all([
            i.e("77598"),
            i.e("25806"),
            i.e("9987"),
            i.e("93816"),
            i.e("69273"),
            i.e("80813"),
            i.e("77083"),
            i.e("63009"),
            i.e("25385"),
            i.e("45650"),
            i.e("97189"),
            i.e("48486"),
            i.e("27660"),
            i.e("73432"),
            i.e("85484"),
            i.e("63232"),
            i.e("28592"),
            i.e("61748"),
            i.e("55918"),
            i.e("91388"),
            i.e("15274"),
            i.e("79705"),
            i.e("66694"),
            i.e("69279"),
            i.e("23924"),
            i.e("15510"),
            i.e("48226"),
            i.e("20287"),
            i.e("28367"),
            i.e("35429"),
            i.e("10471"),
            i.e("40851"),
            i.e("64827"),
            i.e("30938"),
            i.e("23808"),
            i.e("11301"),
            i.e("60235"),
            i.e("61737"),
            i.e("79428"),
            i.e("29963"),
            i.e("47834"),
            i.e("98329"),
            i.e("20317"),
            i.e("84569"),
            i.e("2368"),
            i.e("27084"),
            i.e("24313"),
            i.e("48405"),
            i.e("63185"),
            i.e("19551"),
            i.e("84150"),
            i.e("45959"),
            i.e("18573"),
            i.e("55057"),
            i.e("37794"),
            i.e("26073"),
            i.e("7743"),
            i.e("34303"),
            i.e("48172"),
            i.e("28866"),
            i.e("54961"),
            i.e("8304"),
            i.e("58038"),
            i.e("93159"),
            i.e("55936"),
            i.e("11566"),
            i.e("21106"),
            i.e("31988"),
            i.e("94723"),
            i.e("62931"),
            i.e("81987"),
            i.e("58007"),
            i.e("5812"),
            i.e("17363"),
            i.e("34530"),
            i.e("28561"),
            i.e("9233"),
            i.e("69747"),
            i.e("54975"),
            i.e("21570"),
            i.e("49697"),
            i.e("77265"),
            i.e("71133"),
            i.e("77084"),
            i.e("96565"),
            i.e("37687"),
            i.e("95093"),
            i.e("62615"),
            i.e("48900"),
            i.e("60177"),
            i.e("21976"),
            i.e("1006"),
            i.e("79707"),
            i.e("27773"),
            i.e("20007"),
            i.e("99518"),
            i.e("55577"),
            i.e("59880"),
            i.e("78412"),
            i.e("9662"),
            i.e("80239"),
            i.e("23276"),
            i.e("54791"),
            i.e("255"),
            i.e("68479"),
            i.e("10567"),
            i.e("39286"),
            i.e("63645"),
            i.e("88343"),
            i.e("31445"),
            i.e("5636"),
            i.e("95444"),
            i.e("38472"),
            i.e("48720"),
            i.e("834"),
            i.e("33134"),
            i.e("77446"),
            i.e("84317"),
            i.e("25279"),
            i.e("67176"),
            i.e("20858"),
            i.e("54625"),
            i.e("18489"),
            i.e("77473"),
            i.e("166"),
            i.e("35996"),
            i.e("26574"),
            i.e("21856"),
            i.e("72963"),
            i.e("21930"),
            i.e("77467"),
            i.e("93461"),
            i.e("49013"),
            i.e("20965"),
            i.e("11133"),
            i.e("86313"),
            i.e("42324"),
            i.e("90779"),
            i.e("66523"),
            i.e("39808"),
            i.e("9763"),
            i.e("20667"),
        ]).then(i.bind(i, 963614)),
    webpackId: 963614,
});
function tr(e) {
    let { user: t, channel: i, activity: n, activityApplicationId: s, withGiftingBreadcrumb: a, onAction: r } = e,
        d = (0, l.jsx)(ti.A, { presenceActivity: n, channel: i, userId: t.id, onAction: r });
    return a && null != s
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  d,
                  (0, l.jsx)(ta, {
                      className: ts.L,
                      applicationId: s,
                      rewardOfferNoticeClassName: ts.Nh,
                      userIds: [t.id],
                      location: "voice_channel",
                      guildId: i.guild_id,
                      channelId: i.id,
                      numWishlistItems: 2,
                      cardSpec: tn.Z.SIZE_110,
                  }),
              ],
          })
        : d;
}
function td(e) {
    let { user: t, guildId: i, channelId: n } = e,
        s = (0, r.bG)([ee.Ay], () => ee.Ay.getMember(i, t.id)),
        a = el.Ay.useName(t),
        d = s?.nick ?? a,
        { avatarDecorationSrc: c, avatarSrc: u } = (0, Z.A)({ userId: t.id, size: L._3.SIZE_32, guildId: i }),
        {
            status: o,
            isMobileOnline: m,
            activities: h,
        } = (0, r.cf)([ei.A], () => ({
            status: ei.A.getStatus(t.id, i),
            isMobileOnline: ei.A.isMobileOnline(t.id),
            activities: ei.A.getActivities(t.id, i),
        })),
        g = (0, r.bG)([eC.A], () => eC.A.getVoiceStateForChannel(n, t.id)?.connectedAt),
        p = null != g ? new Date(g * tt.A.Millis.SECOND).getTime() : null;
    return (0, l.jsxs)("div", {
        className: ts.aq,
        children: [
            (0, l.jsxs)("div", {
                className: ts.kQ,
                children: [
                    (0, l.jsx)(F.eu, {
                        src: u,
                        size: L._3.SIZE_32,
                        "aria-label": d,
                        avatarDecoration: c,
                        status: (0, e2.A)(h) ? M.clD.STREAMING : o === M.clD.OFFLINE ? void 0 : o,
                        isMobile: m,
                        className: ts.my,
                    }),
                    (0, l.jsx)(j.E, { variant: "text-sm/medium", lineClamp: 1, children: d }),
                ],
            }),
            null != p && (0, l.jsx)(e3.z, { textColor: "text-feedback-positive", entry: { start: p } }),
        ],
    });
}
function tc(e) {
    let t,
        i,
        { channel: s, user: d, onAction: c, excludeActivity: u, onWatchStream: o } = e,
        m = n.useMemo(() => ({ [s.guild_id]: [d.id] }), [s.guild_id, d.id]);
    (0, eJ.Eq)(m, "VoiceUserActivities");
    let { enabled: h } = tl.useExperiment({ guildId: s.guild_id, location: "VoiceUserPopout" }),
        [g, p] = (0, r.yK)(
            [eE.A],
            () => [eE.A.getStreamForUser(d.id, s.getGuildId()), eE.A.getActiveStreamForUser(d.id, s.getGuildId())],
            [s, d.id],
        ),
        [A, x] = (0, r.yK)([eC.A, G.A, P.A, eK.default], () => (0, eW.eo)(s, eC.A, G.A, P.A, eK.default)),
        v = (0, r.bG)([e_.default], () => e_.default.getId()),
        I = (0, r.bG)([ei.A], () => (0, e5.nr)(g, ei.A), [g]),
        f = (0, e9.r9)() && (0, e9.UK)(s.id),
        N =
            ((t = (0, e1.Ay)(s)),
            (i = n.useMemo(() => t.filter((e) => e.embeddedActivity.userIds.has(d.id)), [t, d.id])),
            [...(0, e1.Rz)(i).values()]),
        E = (0, te.W)(),
        _ = (0, e4.m)({ location: "voice_channel_activities" }),
        j = (0, r.bG)([e8.A], () => e8.A.getDetectableIdsToApplicationIds()),
        S = u ?? I,
        y = (0, r.yK)([eX.A, ei.A, e_.default], () => {
            let e = d.id === e_.default.getId() ? eX.A.getActivities() : ei.A.getActivities(d.id),
                t = new Map();
            for (let i of e) {
                if (
                    !e0(i) ||
                    (0, eQ.A)(i) ||
                    (null != S &&
                        ((null != S.application_id && i.application_id === S.application_id) ||
                            (null != S.name && i.name === S.name)))
                )
                    continue;
                let e = i.application_id ?? i.name;
                null == e || t.has(e) || t.set(e, i);
            }
            return Array.from(t.values());
        }, [d.id, S]),
        C = null != g && null != o && !f,
        b = C || y.length > 0 || N.length > 0,
        T = b || h;
    if (
        (n.useEffect(() => {
            T &&
                V.default.track(M.HAw.OPEN_POPOUT, {
                    type: "Voice User Activities",
                    channel_id: s.id,
                    other_user_id: d.id,
                });
        }, [T, s.id, d.id]),
        !T)
    )
        return null;
    let k = (0, l.jsxs)(l.Fragment, {
        children: [
            C &&
                (0, l.jsx)(e6.P, {
                    stream: g,
                    activeStream: p,
                    streamActivity: I,
                    user: d,
                    currentUserId: v,
                    canWatch: A,
                    unavailableReason: x,
                    onWatchStream: o,
                    onAction: c,
                    showHeader: !0,
                }),
            N.map((e) =>
                (0, l.jsx)(
                    ti.A,
                    {
                        userId: d.id,
                        embeddedApp: e,
                        presenceActivity: e.presenceActivity ?? void 0,
                        channel: s,
                        onAction: c,
                    },
                    e.application.id,
                ),
            ),
            y.map((e) => {
                let t = E ?? e.application_id;
                return (0, l.jsx)(
                    tr,
                    {
                        user: d,
                        channel: s,
                        activityApplicationId: t,
                        activity: e,
                        withGiftingBreadcrumb: _ && null != t && null != j[t],
                        onAction: c,
                    },
                    e.application_id,
                );
            }),
        ],
    });
    return h
        ? (0, l.jsxs)("div", {
              className: a()(er.popover, ts.Db),
              children: [
                  (0, l.jsx)(td, { user: d, guildId: s.guild_id, channelId: s.id }),
                  b && (0, l.jsx)(eZ.Ip, { className: a()(er.popover, ts.XG), children: k }),
              ],
          })
        : (0, l.jsx)(eZ.Ip, { className: a()(er.popover, ts.kL), children: k });
}
var tu = i(325278),
    to = i(976358);
function tm(e) {
    let { numUsers: t } = e;
    return (0, l.jsx)("div", {
        className: to.BN,
        children: (0, l.jsxs)(j.E, { color: "text-muted", variant: "text-sm/medium", children: ["+", t] }),
    });
}
function th(e) {
    let { numAudience: t, collapsed: i } = e,
        n = i ? t : es.intl.formatToPlainString(es.t["+v2pN2"], { count: t });
    return (0, l.jsxs)("div", {
        className: a()(to.yJ, { [to.Nr]: i }),
        children: [
            (0, l.jsx)("div", {
                className: to.$L,
                children: (0, l.jsx)(eD.L, { size: "md", color: "currentColor", className: to.wG }),
            }),
            (0, l.jsx)(j.E, { color: "text-muted", variant: "text-sm/medium", children: n }),
        ],
    });
}
let tg = (0, eH.J)(function (e) {
    let {
            collapsed: t,
            user: s,
            channel: r,
            mute: d,
            localMute: c,
            localVideoDisabled: u,
            deaf: o,
            video: m,
            embeddedApplication: h,
            serverMute: g,
            serverDeaf: p,
            nick: A,
            ringing: x,
            speaking: I,
            disconnected: f,
            connectUserDragSource: E,
            canDrag: _,
            isStreaming: j,
            isWatching: S,
            isGuest: y,
            priority: C,
            showPreview: T,
            hidePreview: k,
            shouldShowHoverPopout: O,
            otherClientSessionType: V,
            voicePlatform: w,
            isSelfOnOtherClient: R = !1,
            tabIndex: U,
            isSelf: D,
            application: M,
        } = e,
        L = (0, $.Ay)(r),
        F = n.useRef(null),
        [H, z] = n.useState(!1),
        K = n.useRef(null),
        q = () => {
            z(!H);
        },
        Y = (e) => {
            W();
        },
        W = () => {
            clearTimeout(K.current), k?.(s.id);
        };
    n.useEffect(
        () => () => {
            clearTimeout(K.current);
        },
        [],
    );
    let B = () => {
            if (!j || !(0, eW.eo)(r, eC.A, G.A, P.A, eK.default)[0]) return;
            let e = { streamType: tu.U4.GUILD, ownerId: s.id, channelId: r.id, guildId: r.guild_id };
            e_.default.getId() !== s.id && eL.default.selectVoiceChannel(r.id),
                S ? ((0, eB.A)(e), eM.A.selectParticipant(e.channelId, (0, eY._z)(e))) : (0, eF.Nl)(e),
                k?.(s.id);
        },
        Z = (e) => {
            (0, eT.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("77598"),
                    i.e("23491"),
                    i.e("91388"),
                    i.e("26132"),
                    i.e("46652"),
                    i.e("93190"),
                    i.e("34552"),
                    i.e("55411"),
                    i.e("93103"),
                    i.e("13708"),
                    i.e("8757"),
                    i.e("89673"),
                    i.e("91007"),
                    i.e("68403"),
                    i.e("85968"),
                    i.e("76418"),
                    i.e("60195"),
                    i.e("21921"),
                    i.e("88342"),
                    i.e("66495"),
                    i.e("29787"),
                    i.e("97558"),
                    i.e("94000"),
                    i.e("42451"),
                    i.e("91994"),
                    i.e("98965"),
                    i.e("76665"),
                    i.e("35313"),
                    i.e("24198"),
                    i.e("39171"),
                    i.e("36564"),
                    i.e("792"),
                    i.e("45996"),
                    i.e("92822"),
                    i.e("52229"),
                    i.e("23427"),
                    i.e("49145"),
                    i.e("29422"),
                    i.e("9291"),
                    i.e("7059"),
                    i.e("96553"),
                    i.e("24240"),
                    i.e("43116"),
                    i.e("70314"),
                    i.e("70515"),
                    i.e("27435"),
                    i.e("66939"),
                    i.e("17334"),
                    i.e("84841"),
                ]).then(i.bind(i, 107632));
                return (t) =>
                    (0, l.jsx)(e, {
                        ...t,
                        user: s,
                        guildId: r.guild_id,
                        channel: r,
                        showMediaItems: !0,
                        showStageChannelItems: r.isGuildStageVoice(),
                        onInteraction: (0, ez.s)("GuildChannelUserContextMenu", b.A.VOICE_USER, { targetUserId: s.id }),
                    });
            });
        },
        J = (0, l.jsx)("div", {
            className: to.kZ,
            "data-dnd-name": L,
            onMouseEnter: R
                ? void 0
                : () => {
                      H || (K.current = setTimeout(() => T?.(s.id), 100));
                  },
            onMouseLeave: R ? void 0 : W,
            children: (0, l.jsx)(e$.A, {
                clickTrap: s?.id === eP.default.getCurrentUser()?.id && H,
                targetElementRef: F,
                user: s,
                guildId: r.guild_id,
                channelId: r.id,
                newAnalyticsLocations: [b.A.VOICE_USER],
                shouldShow: H,
                onRequestClose: () => z(!1),
                children: (e) => {
                    let i, n;
                    return (
                        (i = eq.hv.has(V ?? "")),
                        (n = {
                            user: s,
                            speaking: I,
                            disconnected: f,
                            mute: d,
                            localMute: c,
                            localVideoDisabled: u,
                            isStreaming: j,
                            isGuest: y,
                            video: m,
                            priority: C,
                            ringing: x,
                            deaf: o,
                            nick: A,
                            collapsed: t,
                            overlap: t,
                            serverMute: g,
                            serverDeaf: p,
                            tabIndex: U,
                            otherClientSessionType: V,
                            voicePlatform: w,
                            embeddedApplication: h,
                            avatarContainerClass: a()({ [to.dj]: !0 }),
                            disabled: R && !i,
                            selected: H,
                            onClick: i ? void 0 : q,
                            onDoubleClick: B,
                            onContextMenu: Z,
                            guildId: r.guild_id,
                            isSelf: D,
                            application: M,
                            channelId: r.id,
                        }),
                        R
                            ? (0, l.jsx)(v.m, {
                                  text:
                                      (function (e) {
                                          switch (e) {
                                              case eq.f$.XBOX:
                                                  return es.intl.string(es.t.T0uYK9);
                                              case eq.f$.PLAYSTATION:
                                                  return es.intl.string(es.t.FWAzS6);
                                          }
                                      })(V) ?? es.intl.string(es.t.IyYqqY),
                                  children: (0, l.jsx)(ef.Ay, { ref: F, ...n }),
                              })
                            : (0, l.jsx)(N.Y, {
                                  targetElementRef: F,
                                  position: "right",
                                  renderPopout: () =>
                                      (0, l.jsx)(tc, {
                                          channel: r,
                                          user: s,
                                          onAction: W,
                                          onWatchStream: j ? B : void 0,
                                      }),
                                  shouldShow: O && !H,
                                  onRequestClose: Y,
                                  spacing: 17,
                                  children: () =>
                                      (0, l.jsx)(ef.Ay, {
                                          ...n,
                                          ref: F,
                                          onMouseDown: e.onMouseDown,
                                          onKeyDown: e.onKeyDown,
                                      }),
                              })
                    );
                },
            }),
        });
    return _ ? E(J) : J;
});
var tp = i(31408),
    tA = i(588533);
let tx = n.memo((e) => {
    let { mute: t, deaf: i, user: n, channel: s, sessionId: a, nick: d } = e,
        p = n.id,
        A = (0, r.bG)([e_.default], () => e_.default.getId() === p, [p]),
        [x, v, I] = (0, r.yK)(
            [ej.Ay],
            () =>
                A
                    ? [
                          !ej.Ay.isSupported() || ej.Ay.isSelfMute() || ej.Ay.isSelfMutedTemporarily(),
                          ej.Ay.isSelfDeaf(),
                          !1,
                      ]
                    : [!ej.Ay.isSupported() || ej.Ay.isLocalMute(p), !1, ej.Ay.isLocalVideoDisabled(p)],
            [A, p],
        ),
        f = (0, r.bG)([ey.A], () => ey.A.isPrioritySpeaker(p)),
        N = (0, c.A)({ userId: p, checkSoundSharing: !0 }),
        E = (0, g.A)(s.guild_id, p),
        _ = (0, r.bG)([h.A], () => h.A.getGuildRingingUsers(s.id).has(p)),
        j = (0, r.bG)(
            [u.Ay],
            () =>
                u.Ay.getEmbeddedActivitiesForChannel(s.id).find((e) => {
                    let { userIds: t } = e;
                    return t.has(p);
                }),
            [p, s.id],
        ),
        S = (0, m.A)(null != j ? [j.applicationId] : []),
        y = (0, ev.Ay)(p, s.guild_id)[0],
        C = (0, o.YY)(y?.application_id).data ?? void 0,
        [b, T] = (0, r.yK)(
            [eE.A],
            () => [eE.A.getStreamForUser(p, s.getGuildId()), eE.A.getActiveStreamForUser(p, s.getGuildId())],
            [s, p],
        ),
        k = (0, r.bG)([eS.A], () => eS.A.getSessionById(a)),
        O = el.Ay.useName(n),
        G = (0, r.bG)([eC.A], () => eC.A.getVoicePlatformForChannel(s.id, p), [s.id, p]),
        P = (0, eI.uy)(s.id, p),
        { enableVCStatusIcons: V } = ex.m.useExperiment(
            { guildId: s.guild_id, location: "VoiceUsers" },
            { autoTrackExposure: y?.session_id != null },
        );
    return (0, l.jsx)(eA.A, {
        shakeLocation: tp.uD.VOICE_USER,
        isShaking: N,
        children: (0, l.jsx)(tg, {
            ...e,
            nick: d ?? O,
            canDrag: e.canDrag && !E,
            disconnected: P,
            otherClientSessionType: k?.clientInfo?.os,
            voicePlatform: G,
            localMute: x && !A,
            localVideoDisabled: I,
            mute: t || x,
            deaf: i || v,
            speaking: N,
            ringing: _,
            priority: f,
            embeddedApplication: S[0],
            isStreaming: null != b && b.channelId === s.id,
            isWatching: null != T && T.state !== M.XYD.ENDED,
            isGuest: E,
            isSelf: A,
            application: V && y?.session_id != null ? C : void 0,
        }),
    });
});
tx.displayName = "ConnectedVoiceUser";
let tv = [],
    tI = function (e) {
        let {
                allowPreviews: t = !0,
                allowDragging: i = !0,
                channel: s,
                voiceStates: c,
                collapsed: u,
                collapsedMax: o = 6,
                tabIndex: g,
                numAudience: A,
                withGuildIcon: x = !1,
                className: v,
                children: I,
                isThread: f = !1,
            } = e,
            [N, E] = n.useState(null),
            _ = n.useRef(null),
            j = (0, eI.$n)(s.id, c ?? tv),
            { showGhostUser: S } = (0, eN.G8)({ guildId: s.guild_id, location: "VoiceUsers" }),
            { shouldShow: y, dismiss: C } = (0, en.Z0)(s, { collapsed: u }),
            { placement: b } = (0, p.h)({ guildId: s.guild_id, location: "VoiceUsers" }, { autoTrackExposure: !0 }),
            T = n.useRef(
                new d.J_(50, () => {
                    E(_.current), (_.current = null);
                }),
            ),
            k = n.useRef(
                new d.J_(175, () => {
                    E(null);
                }),
            ),
            O = n.useCallback(
                (e) => {
                    t && (k.current.cancel(), (_.current = e), T.current.delay());
                },
                [t],
            ),
            G = n.useCallback(
                (e) => {
                    t && (T.current.cancel(), (_.current = null), k.current.delay());
                },
                [t],
            ),
            V = (0, r.yK)([ei.A], () => {
                if (u) return [];
                let e = new Set();
                return (
                    j?.forEach((t) => {
                        let { user: i } = t;
                        ei.A.getActivities(i.id, s.guild_id).forEach((t) => {
                            null != t.application_id && e.add(t.application_id);
                        });
                    }),
                    Array.from(e)
                );
            });
        (0, m.A)(V);
        let w = (() => {
            if (null == j || 0 === j.length) return null;
            let e = u && j.length > o + 1 ? j.slice(0, o) : j,
                t = h.A.getGuildRingingUsers(s.id),
                n = e.map((e) => {
                    let { user: n, nick: a, voiceState: r } = e,
                        d = t.has(n.id);
                    return (0, l.jsx)(
                        tx,
                        {
                            user: n,
                            nick: a,
                            isSelfOnOtherClient:
                                e_.default.getId() === n.id && r.sessionId !== e_.default.getSessionId(),
                            mute: r.isVoiceMuted(),
                            deaf: r.isVoiceDeafened(),
                            video: r.selfVideo,
                            serverMute: r.mute,
                            serverDeaf: r.deaf,
                            sessionId: r.sessionId ?? "",
                            channel: s,
                            collapsed: u,
                            canDrag: i && P.A.can(M.xBc.MOVE_MEMBERS, s),
                            showPreview: O,
                            hidePreview: G,
                            shouldShowHoverPopout: N === n.id,
                            tabIndex: g,
                        },
                        `voice-user-${n.id}-${d}`,
                    );
                });
            return (
                null != A && A > 0
                    ? n.push((0, l.jsx)(th, { collapsed: u, numAudience: A }))
                    : u && j.length > o + 1 && n.push((0, l.jsx)(tm, { numUsers: j.length - o })),
                S && !u && s.type === M.rbe.GUILD_VOICE && n.push((0, l.jsx)(eU, { channel: s }, "ghost-user")),
                y && "bottom" === b
                    ? n.push((0, l.jsx)(ep, { channel: s, onClose: C }, "voice-invite-suggestions-button"))
                    : y &&
                      "top" === b &&
                      n.unshift((0, l.jsx)(ep, { channel: s, onClose: C }, "voice-invite-suggestions-button")),
                n
            );
        })();
        return null == w && null == I
            ? null
            : (0, l.jsxs)(ef.Wr, {
                  className: a()(v, tA.p_, { [tA.yZ]: u, [tA.lY]: x, [tA.fT]: f }),
                  collapsed: u,
                  children: [w, I],
              });
    };
