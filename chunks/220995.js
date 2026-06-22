t.d(i, { p: () => k });
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(308186),
    d = t(562708),
    o = t(17928),
    u = t(990078),
    c = t(192308),
    m = t(717421),
    A = t(922016),
    g = t(939249),
    h = t(283973),
    p = t(834730),
    I = t(789645),
    f = t(320448),
    v = t(775602),
    x = t(793574),
    S = t(688810),
    _ = t(139286),
    E = t(713517),
    N = t(71393),
    y = t(576705),
    C = t(174459),
    b = t(778768),
    j = t(652215);
t(281405);
var T = t(375708),
    O = t(89682),
    G = t(80442);
let P = (e) => 1 - Math.pow(1 - e, 4);
function k(e) {
    let { channel: i, onClose: s } = e,
        k = l.useRef(null),
        V = l.useRef(null),
        [w, D] = l.useState(!1),
        [R, U] = l.useState(0),
        { analyticsLocations: M } = (0, S.Ay)(x.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: M },
    });
    let L = (0, o.bG)([y.A], () => y.A.can(j.xBc.CREATE_INSTANT_INVITE, i), [i]),
        F = (0, o.bG)([N.A], () => N.A.getGuild(i.guild_id)),
        z = (0, o.bG)([v.Ay], () => v.Ay.useReducedMotion),
        [K, B] = l.useState(!1),
        Y = l.useRef(null),
        q = (0, E.M)(L ? k : Y),
        [$, H] = l.useState(!1),
        { isFocusing: W } = (0, E.A)(V),
        [Z, J] = l.useState(!1),
        X = q || $ || Z,
        Q = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                C.default.track(j.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    location_stack: M,
                }),
                    D(!1),
                    s?.();
            },
            [i.id, i.guild_id, s, M],
        ),
        ee = l.useCallback(() => {
            null != F &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("82314"),
                        t.e("80339"),
                        t.e("59957"),
                        t.e("28136"),
                        t.e("16084"),
                        t.e("22547"),
                    ]).then(t.bind(t, 1310));
                    return (t) => (0, n.jsx)(e, { ...t, guild: F, channel: i, source: j.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [F, i]),
        [ei, et] = (0, m.z)(() => ({
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
        if (X) return void D(!0);
        let e = setTimeout(() => {
            D(!1);
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
            D(!0);
        }, []),
        ea = l.useCallback(() => {
            D(!1), H(!1), Z && (J(!1), k.current?.focus());
        }, [Z]);
    return L
        ? (0, n.jsx)(A.Y, {
              targetElementRef: k,
              shouldShow: w,
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
                      children: (0, n.jsx)(g.D, {
                          innerRef: k,
                          className: a()({ [O.vk]: !K }, G.q7, G.L9, G.vk),
                          focusProps: { offset: { right: 4 } },
                          "aria-disabled": K,
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
                                                    `voice-invite-suggestions-timer-${R}`,
                                                ),
                                          (0, n.jsx)(h.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(O.Hk, O.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(u.m, {
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
                                      ref: V,
                                      children: q
                                          ? (0, n.jsx)(g.D, {
                                                className: O.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), en("user_explicit");
                                                },
                                                "aria-label": T.intl.string(T.t.cpT0Cq),
                                                children: (0, n.jsx)(I.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: O.Kk,
                                                }),
                                            })
                                          : (0, n.jsx)(g.D, {
                                                onClick: (e) => {
                                                    e.stopPropagation(), J(!0);
                                                },
                                                children: (0, n.jsx)(f._, {
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
