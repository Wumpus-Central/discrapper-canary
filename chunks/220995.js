i.d(t, { p: () => V });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(202091),
    d = i(562708),
    u = i(17928),
    o = i(192308),
    c = i(717421),
    A = i(922016),
    m = i(939249),
    g = i(283973),
    h = i(866665),
    p = i(834730),
    f = i(789645),
    I = i(320448),
    v = i(775602),
    S = i(793574),
    x = i(688810),
    _ = i(139286),
    E = i(713517),
    N = i(71393),
    y = i(576705),
    C = i(174459),
    j = i(778768),
    b = i(652215);
i(281405);
var T = i(375708),
    O = i(811041),
    G = i(254849);
function P(e) {
    return 1 - Math.pow(1 - e, 4);
}
function V(e) {
    let { channel: t, onClose: s } = e,
        V = l.useRef(null),
        k = l.useRef(null),
        [w, R] = l.useState(!1),
        [D, M] = l.useState(0),
        { analyticsLocations: U } = (0, x.Ay)(S.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: U },
    });
    let L = (0, u.bG)([y.A], () => y.A.can(b.xBc.CREATE_INSTANT_INVITE, t), [t]),
        F = (0, u.bG)([N.A], () => N.A.getGuild(t.guild_id)),
        z = (0, u.bG)([v.Ay], () => v.Ay.useReducedMotion),
        [B, K] = l.useState(!1),
        Y = l.useRef(null),
        q = (0, E.M)(L ? V : Y),
        [$, W] = l.useState(!1),
        { isFocusing: H } = (0, E.A)(k),
        [Z, J] = l.useState(!1),
        X = q || $ || Z,
        Q = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                (C.default.track(b.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: U,
                }),
                    R(!1),
                    s?.());
            },
            [t.id, t.guild_id, s, U],
        ),
        ee = l.useCallback(() => {
            null != F &&
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("683621"),
                        i.e("711162"),
                        i.e("159957"),
                        i.e("728136"),
                        i.e("216084"),
                        i.e("284819"),
                    ]).then(i.bind(i, 405342));
                    return (i) => (0, n.jsx)(e, { ...i, guild: F, channel: t, source: b.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [F, t]),
        [et, ei] = (0, c.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: P, clamp: !0 },
        })),
        en = l.useCallback(
            (e) => {
                (K(!0), ei({ to: { height: "0px" }, onRest: () => Q(e) }));
            },
            [ei, Q],
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
            null == el.current && (M((e) => e + 1), (el.current = Date.now())),
            () => {
                clearTimeout(e);
            }
        );
    }, [X, z, en]);
    let es = l.useCallback(() => {
            R(!0);
        }, []),
        ea = l.useCallback(() => {
            (R(!1), W(!1), Z && (J(!1), V.current?.focus()));
        }, [Z]);
    return L
        ? (0, n.jsx)(A.Y, {
              targetElementRef: V,
              shouldShow: w,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, n.jsx)(j.w, { channel: t, onHover: W, forceOpen: Z, ...e }),
              onRequestOpen: es,
              onRequestClose: ea,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, n.jsx)(r.animated.div, {
                      className: O.lY,
                      style: et,
                      children: (0, n.jsx)(m.D, {
                          innerRef: V,
                          className: a()({ [O.vk]: !B }, G.q7, G.L9, G.vk),
                          focusProps: { offset: { right: 4 } },
                          "aria-disabled": B,
                          "aria-label": T.intl.string(T.t.F3qiJr),
                          onClick: ee,
                          ignoreKeyPress: H,
                          ...i,
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
                                                    `voice-invite-suggestions-timer-${D}`,
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
                                      ref: k,
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
