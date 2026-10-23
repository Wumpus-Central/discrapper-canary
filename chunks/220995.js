t.d(i, { p: () => P });
var n = t(477900),
    l = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(941143),
    d = t(562708),
    o = t(17928),
    u = t(192308),
    c = t(717421),
    A = t(265872),
    m = t(939249),
    g = t(283973),
    h = t(866665),
    p = t(834730),
    f = t(789645),
    I = t(320448),
    v = t(775602),
    S = t(793574),
    x = t(688810),
    _ = t(139286),
    E = t(713517),
    N = t(71393),
    y = t(576705),
    C = t(174459),
    b = t(778768),
    j = t(652215);
t(281405);
var T = t(105292),
    O = t(811041),
    G = t(254849);
function V(e) {
    return 1 - Math.pow(1 - e, 4);
}
function P(e) {
    let { channel: i, onClose: s } = e,
        P = l.useRef(null),
        w = l.useRef(null),
        [k, R] = l.useState(!1),
        [M, U] = l.useState(0),
        { analyticsLocations: D } = (0, x.Ay)(S.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: D },
    });
    let L = (0, o.bG)([y.A], () => y.A.can(j.xBc.CREATE_INSTANT_INVITE, i), [i]),
        F = (0, o.bG)([N.A], () => N.A.getGuild(i.guild_id)),
        z = (0, o.bG)([v.Ay], () => v.Ay.useReducedMotion),
        [B, K] = l.useState(!1),
        Y = l.useRef(null),
        q = (0, E.M)(L ? P : Y),
        [$, H] = l.useState(!1),
        { isFocusing: W } = (0, E.A)(w),
        [Z, J] = l.useState(!1),
        X = q || $ || Z,
        Q = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                (C.default.track(j.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    location_stack: D,
                }),
                    R(!1),
                    s?.());
            },
            [i.id, i.guild_id, s, D],
        ),
        ee = l.useCallback(() => {
            null != F &&
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("683621"),
                        t.e("711162"),
                        t.e("919170"),
                        t.e("159957"),
                        t.e("728136"),
                        t.e("216084"),
                        t.e("284819"),
                    ]).then(t.bind(t, 405342));
                    return (t) => (0, n.jsx)(e, { ...t, guild: F, channel: i, source: j.PE1.VOICE_INVITE_SUGGESTIONS });
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
        if (X) return void R(!0);
        let e = setTimeout(() => {
            R(!1);
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
            R(!0);
        }, []),
        ea = l.useCallback(() => {
            (R(!1), H(!1), Z && (J(!1), P.current?.focus()));
        }, [Z]);
    return L
        ? (0, n.jsx)(A.Y, {
              targetElementRef: P,
              shouldShow: k,
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
                      className: O.lY,
                      style: ei,
                      children: (0, n.jsx)(m.D, {
                          innerRef: P,
                          className: a()({ [O.vk]: !B }, G.q7, G.L9, G.vk),
                          focusProps: { offset: { right: 4 } },
                          "aria-disabled": B,
                          "aria-label": T.intl.string(T.t.F3qiJr),
                          onClick: ee,
                          ignoreKeyPress: W,
                          ...t,
                          children: (0, n.jsxs)("div", {
                              className: a()(O.Qs, G.Qs),
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: O.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          z
                                              ? null
                                              : (0, n.jsxs)(
                                                    "svg",
                                                    {
                                                        className: a()(O.O1, { [O.Ft]: X }),
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            "--custom-voice-invite-suggestions-timer-duration": 1e4,
                                                        },
                                                        children: [
                                                            (0, n.jsx)("circle", { className: O.qB }),
                                                            (0, n.jsx)("circle", { className: O.hN }),
                                                        ],
                                                    },
                                                    `voice-invite-suggestions-timer-${M}`,
                                                ),
                                          (0, n.jsx)(g.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(O.Hk, O.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(h.m, {
                                      text: T.intl.string(T.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, n.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          className: O.Pf,
                                          lineClamp: 1,
                                          children: T.intl.string(T.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      ref: w,
                                      children: q
                                          ? (0, n.jsx)(m.D, {
                                                className: O.VN,
                                                onClick: (e) => {
                                                    (e.stopPropagation(), en("user_explicit"));
                                                },
                                                "aria-label": T.intl.string(T.t.cpT0Cq),
                                                children: (0, n.jsx)(f.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: O.Kk,
                                                }),
                                            })
                                          : (0, n.jsx)(m.D, {
                                                onClick: (e) => {
                                                    (e.stopPropagation(), J(!0));
                                                },
                                                children: (0, n.jsx)(I._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: O.Kk,
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
