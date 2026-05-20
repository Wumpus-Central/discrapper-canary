i.d(t, { p: () => R });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(873174),
    d = i(562708),
    u = i(17928),
    c = i(990078),
    o = i(192308),
    m = i(717421),
    h = i(922016),
    A = i(939249),
    g = i(283973),
    p = i(834730),
    I = i(789645),
    x = i(320448),
    v = i(964486),
    f = i(793574),
    E = i(688810),
    _ = i(139286),
    N = i(713517),
    S = i(71393),
    C = i(576705),
    y = i(174459),
    j = i(778768),
    T = i(652215);
i(281405);
var b = i(375708),
    O = i(89682),
    G = i(80442);
let V = (e) => 1 - Math.pow(1 - e, 4);
function R(e) {
    let { channel: t, onClose: s } = e,
        R = l.useRef(null),
        k = l.useRef(null),
        [P, D] = l.useState(!1),
        U = l.useRef(null),
        w = l.useRef(null),
        [M, L] = l.useState(0),
        { analyticsLocations: H } = (0, E.Ay)(f.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: H },
    });
    let F = (0, u.bG)([C.A], () => C.A.can(T.xBc.CREATE_INSTANT_INVITE, t), [t]),
        z = (0, u.bG)([S.A], () => S.A.getGuild(t.guild_id)),
        [Y, B] = l.useState(!1),
        K = l.useRef(null),
        { isHoveringOrFocusing: q } = (0, N.A)(F ? R : K),
        [W, $] = l.useState(!1),
        { isFocusing: Z } = (0, N.A)(k),
        J = q || W,
        X = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                y.default.track(T.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: H,
                }),
                    D(!1),
                    s?.();
            },
            [t, s, H],
        ),
        Q = l.useCallback(() => {
            null != z &&
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        i.e("44710"),
                        i.e("59957"),
                        i.e("28136"),
                        i.e("16084"),
                        i.e("22547"),
                    ]).then(i.bind(i, 1310));
                    return (i) => (0, n.jsx)(e, { ...i, guild: z, channel: t, source: T.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [z, t]),
        [ee, et] = (0, m.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: V, clamp: !0 },
        })),
        ei = l.useCallback(
            (e) => {
                B(!0), et({ to: { height: "0px" }, onRest: () => X(e) });
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
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    D(!1);
                }, 150)),
                () => {
                    null != w.current && clearTimeout(w.current);
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
            null != U.current && clearTimeout(U.current), null != w.current && clearTimeout(w.current), D(!0);
        }, [J, en, el]);
    let es = l.useCallback(() => {
            D(!0);
        }, []),
        ea = l.useCallback(() => {
            D(!1), $(!1);
        }, []);
    return F
        ? (0, n.jsx)(h.Y, {
              targetElementRef: R,
              shouldShow: P,
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
                      children: (0, n.jsx)(A.D, {
                          innerRef: R,
                          className: a()({ [O.vk]: !Y }, G.q7, G.L9, G.vk),
                          "aria-disabled": Y,
                          "aria-label": b.intl.string(b.t.F3qiJr),
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
                                          (0, n.jsx)(g.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(O.Hk, O.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(c.m, {
                                      text: b.intl.string(b.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, n.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          className: O.Pf,
                                          lineClamp: 1,
                                          children: b.intl.string(b.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      ref: k,
                                      children: q
                                          ? (0, n.jsx)(A.D, {
                                                className: O.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), ei("user_explicit");
                                                },
                                                "aria-label": b.intl.string(b.t.cpT0Cq),
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
