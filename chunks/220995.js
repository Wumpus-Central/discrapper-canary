i.d(t, { p: () => k });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(873174),
    d = i(562708),
    o = i(17928),
    u = i(990078),
    c = i(192308),
    m = i(717421),
    h = i(922016),
    g = i(939249),
    A = i(283973),
    p = i(834730),
    I = i(789645),
    x = i(320448),
    v = i(964486),
    f = i(793574),
    E = i(688810),
    N = i(139286),
    _ = i(713517),
    S = i(71393),
    y = i(576705),
    C = i(174459),
    j = i(778768),
    b = i(652215);
i(281405);
var T = i(375708),
    O = i(89682),
    G = i(80442);
let V = (e) => 1 - Math.pow(1 - e, 4);
function k(e) {
    let { channel: t, onClose: s } = e,
        k = l.useRef(null),
        R = l.useRef(null),
        [w, P] = l.useState(!1),
        U = l.useRef(null),
        D = l.useRef(null),
        [M, L] = l.useState(0),
        { analyticsLocations: H } = (0, E.Ay)(f.A.VOICE_INVITE_SUGGESTIONS);
    (0, N.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: H },
    });
    let F = (0, o.bG)([y.A], () => y.A.can(b.xBc.CREATE_INSTANT_INVITE, t), [t]),
        z = (0, o.bG)([S.A], () => S.A.getGuild(t.guild_id)),
        [K, Y] = l.useState(!1),
        q = l.useRef(null),
        { isHoveringOrFocusing: B } = (0, _.A)(F ? k : q),
        [W, $] = l.useState(!1),
        { isFocusing: Z } = (0, _.A)(R),
        J = B || W,
        X = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                C.default.track(b.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: H,
                }),
                    P(!1),
                    s?.();
            },
            [t, s, H],
        ),
        Q = l.useCallback(() => {
            null != z &&
                (0, c.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("7017"),
                        i.e("57750"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, n.jsx)(e, { ...i, guild: z, channel: t, source: b.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [z, t]),
        [ee, et] = (0, m.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: V, clamp: !0 },
        })),
        ei = l.useCallback(
            (e) => {
                Y(!0), et({ to: { height: "0px" }, onRest: () => X(e) });
            },
            [et, X],
        ),
        en = l.useCallback(
            () => (
                null != U.current && clearTimeout(U.current),
                (U.current = setTimeout(() => ei("timeout"), 1e4)),
                L((e) => e + 1),
                () => {
                    null != U.current && clearTimeout(U.current);
                }
            ),
            [ei],
        ),
        el = l.useCallback(
            () => (
                null != D.current && clearTimeout(D.current),
                (D.current = setTimeout(() => {
                    P(!1);
                }, 150)),
                () => {
                    null != D.current && clearTimeout(D.current);
                }
            ),
            [],
        );
    (0, v.Ay)(en),
        l.useEffect(() => {
            if (!J) {
                en(), el();
                return;
            }
            null != U.current && clearTimeout(U.current), null != D.current && clearTimeout(D.current), P(!0);
        }, [J, en, el]);
    let es = l.useCallback(() => {
            P(!0);
        }, []),
        ea = l.useCallback(() => {
            P(!1), $(!1);
        }, []);
    return F
        ? (0, n.jsx)(h.Y, {
              targetElementRef: k,
              shouldShow: w,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, n.jsx)(j.w, { channel: t, onHoverOrFocus: $, ...e }),
              onRequestOpen: es,
              onRequestClose: ea,
              children: (e) => {
                  let { onClick: t, ...i } = e;
                  return (0, n.jsx)(r.animated.div, {
                      className: O.lY,
                      style: ee,
                      children: (0, n.jsx)(g.D, {
                          innerRef: k,
                          className: a()({ [O.vk]: !K }, G.q7, G.L9, G.vk),
                          "aria-disabled": K,
                          "aria-label": T.intl.string(T.t.F3qiJr),
                          onClick: Q,
                          ignoreKeyPress: Z,
                          ...i,
                          children: (0, n.jsxs)("div", {
                              className: a()(O.Qs, G.Qs),
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: O.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, n.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(O.O1, { [O.Ft]: J }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, n.jsx)("circle", { className: O.qB }),
                                                      (0, n.jsx)("circle", { className: O.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${M}`,
                                          ),
                                          (0, n.jsx)(A.R, {
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
                                      ref: R,
                                      children: B
                                          ? (0, n.jsx)(g.D, {
                                                className: O.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), ei("user_explicit");
                                                },
                                                "aria-label": T.intl.string(T.t.cpT0Cq),
                                                children: (0, n.jsx)(I.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: O.Kk,
                                                }),
                                            })
                                          : (0, n.jsx)(x._, { size: "xs", color: "currentColor", className: O.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
