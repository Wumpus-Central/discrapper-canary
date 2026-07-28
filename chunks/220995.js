t.d(i, { p: () => k });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(461376),
    d = t(562708),
    u = t(17928),
    o = t(192308),
    c = t(717421),
    A = t(922016),
    m = t(939249),
    g = t(283973),
    h = t(866665),
    p = t(834730),
    f = t(789645),
    I = t(320448),
    v = t(775602),
    x = t(793574),
    S = t(688810),
    _ = t(139286),
    E = t(713517),
    N = t(71393),
    y = t(576705),
    C = t(174459),
    b = t(556387),
    j = t(652215);
t(281405);
var T = t(375708),
    G = t(797210),
    O = t(79362);
function P(e) {
    return 1 - Math.pow(1 - e, 4);
}
function k(e) {
    let { channel: i, onClose: s } = e,
        k = l.useRef(null),
        V = l.useRef(null),
        [R, w] = l.useState(!1),
        [D, U] = l.useState(0),
        { analyticsLocations: M } = (0, S.Ay)(x.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: M },
    });
    let L = (0, u.bG)([y.A], () => y.A.can(j.xBc.CREATE_INSTANT_INVITE, i), [i]),
        F = (0, u.bG)([N.A], () => N.A.getGuild(i.guild_id)),
        z = (0, u.bG)([v.Ay], () => v.Ay.useReducedMotion),
        [K, B] = l.useState(!1),
        Y = l.useRef(null),
        $ = (0, E.M)(L ? k : Y),
        [q, H] = l.useState(!1),
        { isFocusing: W } = (0, E.A)(V),
        [Z, J] = l.useState(!1),
        X = $ || q || Z,
        Q = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                C.default.track(j.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    location_stack: M,
                }),
                    w(!1),
                    s?.();
            },
            [i.id, i.guild_id, s, M],
        ),
        ee = l.useCallback(() => {
            null != F &&
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("27574"),
                        t.e("21149"),
                        t.e("59957"),
                        t.e("28136"),
                        t.e("16084"),
                        t.e("22547"),
                    ]).then(t.bind(t, 1310));
                    return (t) => (0, n.jsx)(e, { ...t, guild: F, channel: i, source: j.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [F, i]),
        [ei, et] = (0, c.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: P, clamp: !0 },
        })),
        en = l.useCallback(
            (e) => {
                B(!0), et({ to: { height: "0px" }, onRest: () => Q(e) });
            },
            [et, Q],
        );
    l.useEffect(() => {
        if (X) return void w(!0);
        let e = setTimeout(() => {
            w(!1);
        }, 150);
        return () => {
            clearTimeout(e);
        };
    }, [X]);
    let el = l.useRef(null);
    l.useEffect(() => {
        if (X || z) {
            el.current = null;
            return;
        }
        let e = setTimeout(
            () => en("timeout"),
            null != el.current ? Math.max(1e4 - (Date.now() - el.current), 0) : 1e4,
        );
        return (
            null == el.current && (U((e) => e + 1), (el.current = Date.now())),
            () => {
                clearTimeout(e);
            }
        );
    }, [X, z, en]);
    let es = l.useCallback(() => {
            w(!0);
        }, []),
        ea = l.useCallback(() => {
            w(!1), H(!1), Z && (J(!1), k.current?.focus());
        }, [Z]);
    return L
        ? (0, n.jsx)(A.Y, {
              targetElementRef: k,
              shouldShow: R,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, n.jsx)(b.w, { channel: i, onHover: H, forceOpen: Z, ...e }),
              onRequestOpen: es,
              onRequestClose: ea,
              children: (e) => {
                  let { onClick: i, ...t } = e;
                  return (0, n.jsx)(r.animated.div, {
                      className: G.lY,
                      style: ei,
                      children: (0, n.jsx)(m.D, {
                          innerRef: k,
                          className: a()({ [G.vk]: !K }, O.ZJ, O.L9, O.vk),
                          focusProps: { offset: { right: 4 } },
                          "aria-disabled": K,
                          "aria-label": T.intl.string(T.t.F3qiJr),
                          onClick: ee,
                          ignoreKeyPress: W,
                          ...t,
                          children: (0, n.jsxs)("div", {
                              className: a()(G.Qs, O.Qs),
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: G.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          z
                                              ? null
                                              : (0, n.jsxs)(
                                                    "svg",
                                                    {
                                                        className: a()(G.O1, { [G.Ft]: X }),
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            "--custom-voice-invite-suggestions-timer-duration": 1e4,
                                                        },
                                                        children: [
                                                            (0, n.jsx)("circle", { className: G.qB }),
                                                            (0, n.jsx)("circle", { className: G.hN }),
                                                        ],
                                                    },
                                                    `voice-invite-suggestions-timer-${D}`,
                                                ),
                                          (0, n.jsx)(g.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(G.Hk, G.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(h.m, {
                                      text: T.intl.string(T.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, n.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          className: G.Pf,
                                          lineClamp: 1,
                                          children: T.intl.string(T.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      ref: V,
                                      children: $
                                          ? (0, n.jsx)(m.D, {
                                                className: G.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), en("user_explicit");
                                                },
                                                "aria-label": T.intl.string(T.t.cpT0Cq),
                                                children: (0, n.jsx)(f.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: G.Kk,
                                                }),
                                            })
                                          : (0, n.jsx)(m.D, {
                                                onClick: (e) => {
                                                    e.stopPropagation(), J(!0);
                                                },
                                                children: (0, n.jsx)(I._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: G.Kk,
                                                }),
                                            }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
