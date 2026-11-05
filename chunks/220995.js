var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(120692),
    d = t(613412),
    o = t(855986),
    u = t(192308),
    c = t(717421),
    A = t(265872),
    m = t(939249),
    g = t(283973),
    h = t(866665),
    f = t(834730),
    p = t(789645),
    I = t(320448),
    v = t(775602),
    S = t(793574),
    _ = t(688810),
    x = t(139286),
    y = t(713517),
    E = t(71393),
    N = t(576705),
    C = t(129230),
    b = t(778768),
    j = t(652215);
t(281405);
var T = t(792996),
    G = t(811041),
    O = t(254849);
function V(e) {
    return 1 - Math.pow(1 - e, 4);
}
t.d(
    i,
    {},
    {
        p: function (e) {
            let { channel: i, onClose: s } = e,
                P = l.useRef(null),
                w = l.useRef(null),
                [k, U] = l.useState(!1),
                [R, M] = l.useState(0),
                { analyticsLocations: D } = (0, _.Ay)(S.A.VOICE_INVITE_SUGGESTIONS);
            (0, x.A)({
                name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
                type: d.ImpressionTypes.VIEW,
                properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: D },
            });
            let L = (0, o.bG)([N.A], () => N.A.can(j.xBc.CREATE_INSTANT_INVITE, i), [i]),
                F = (0, o.bG)([E.A], () => E.A.getGuild(i.guild_id)),
                z = (0, o.bG)([v.Ay], () => v.Ay.useReducedMotion),
                [B, K] = l.useState(!1),
                Y = l.useRef(null),
                q = (0, y.M)(L ? P : Y),
                [H, $] = l.useState(!1),
                { isFocusing: W } = (0, y.A)(w),
                [Z, J] = l.useState(!1),
                X = q || H || Z,
                Q = l.useCallback(
                    function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                        (C.default.track(j.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                            reason: e,
                            channel_id: i.id,
                            guild_id: i.guild_id,
                            location_stack: D,
                        }),
                            U(!1),
                            s?.());
                    },
                    [i.id, i.guild_id, s, D],
                ),
                ee = l.useCallback(() => {
                    null != F &&
                        (0, u.mM)(async () => {
                            let { default: e } = await Promise.all([
                                t.e(683621),
                                t.e(711162),
                                t.e(919170),
                                t.e(159957),
                                t.e(728136),
                                t.e(680029),
                                t.e(635864),
                                t.e(447864),
                                t.e(794704),
                            ]).then(t.bind(t, 137811));
                            return (t) =>
                                (0, n.jsx)(e, { ...t, guild: F, channel: i, source: j.PE1.VOICE_INVITE_SUGGESTIONS });
                        });
                }, [F, i]),
                [ei, et] = (0, c.z)(() => ({
                    from: { height: "0px" },
                    to: { height: "32px" },
                    config: { duration: 200, easing: V, clamp: !0 },
                })),
                en = l.useCallback(
                    (e) => {
                        (K(!0), et({ to: { height: "0px" }, onRest: () => Q(e) }));
                    },
                    [et, Q],
                );
            l.useEffect(() => {
                if (X) return void U(!0);
                let e = setTimeout(() => {
                    U(!1);
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
                    null == el.current && (M((e) => e + 1), (el.current = Date.now())),
                    () => {
                        clearTimeout(e);
                    }
                );
            }, [X, z, en]);
            let es = l.useCallback(() => {
                    U(!0);
                }, []),
                ea = l.useCallback(() => {
                    (U(!1), $(!1), Z && (J(!1), P.current?.focus()));
                }, [Z]);
            return L
                ? (0, n.jsx)(A.Y, {
                      targetElementRef: P,
                      shouldShow: k,
                      position: "right",
                      align: "top",
                      spacing: 17,
                      popoutKey: "voice-invite-suggestions-button",
                      renderPopout: (e) => (0, n.jsx)(b.w, { channel: i, onHover: $, forceOpen: Z, ...e }),
                      onRequestOpen: es,
                      onRequestClose: ea,
                      children: (e) => {
                          let { onClick: i, ...t } = e;
                          return (0, n.jsx)(r.animated.div, {
                              className: G.lY,
                              style: ei,
                              children: (0, n.jsx)(m.D, {
                                  innerRef: P,
                                  className: a()({ [G.vk]: !B }, O.q7, O.L9, O.vk),
                                  focusProps: { offset: { right: 4 } },
                                  "aria-disabled": B,
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
                                                            `voice-invite-suggestions-timer-${R}`,
                                                        ),
                                                  (0, n.jsx)(g.UserPlusIcon, {
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
                                              children: (0, n.jsx)(f.E, {
                                                  variant: "body-sm/medium",
                                                  className: G.Pf,
                                                  lineClamp: 1,
                                                  children: T.intl.string(T.t["EE+P0H"]),
                                              }),
                                          }),
                                          (0, n.jsx)("div", {
                                              ref: w,
                                              children: q
                                                  ? (0, n.jsx)(m.D, {
                                                        className: G.VN,
                                                        onClick: (e) => {
                                                            (e.stopPropagation(), en("user_explicit"));
                                                        },
                                                        "aria-label": T.intl.string(T.t.cpT0Cq),
                                                        children: (0, n.jsx)(p.XSmallIcon, {
                                                            size: "xs",
                                                            color: "currentColor",
                                                            className: G.Kk,
                                                        }),
                                                    })
                                                  : (0, n.jsx)(m.D, {
                                                        onClick: (e) => {
                                                            (e.stopPropagation(), J(!0));
                                                        },
                                                        children: (0, n.jsx)(I.ChevronSmallRightIcon, {
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
        },
    },
);
