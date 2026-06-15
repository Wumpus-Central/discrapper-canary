t.d(i, { p: () => P });
var n = t(627968),
    l = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(922139),
    d = t(562708),
    u = t(17928),
    c = t(990078),
    o = t(192308),
    m = t(717421),
    A = t(922016),
    g = t(939249),
    h = t(283973),
    p = t(834730),
    I = t(789645),
    v = t(320448),
    f = t(964486),
    x = t(775602),
    S = t(793574),
    _ = t(688810),
    E = t(139286),
    N = t(713517),
    y = t(71393),
    C = t(576705),
    b = t(174459),
    j = t(778768),
    T = t(652215);
t(281405);
var O = t(375708),
    G = t(89682),
    k = t(80442);
let V = (e) => 1 - Math.pow(1 - e, 4);
function P(e) {
    let { channel: i, onClose: s } = e,
        P = l.useRef(null),
        R = l.useRef(null),
        [w, D] = l.useState(!1),
        U = l.useRef(null),
        M = l.useRef(null),
        [F, L] = l.useState(0),
        { analyticsLocations: z } = (0, _.Ay)(S.A.VOICE_INVITE_SUGGESTIONS);
    (0, E.A)({
        name: d.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: d.ImpressionTypes.VIEW,
        properties: { voice_channel_id: i.id, voice_guild_id: i.guild_id, location_stack: z },
    });
    let K = (0, u.bG)([C.A], () => C.A.can(T.xBc.CREATE_INSTANT_INVITE, i), [i]),
        B = (0, u.bG)([y.A], () => y.A.getGuild(i.guild_id)),
        Y = (0, u.bG)([x.Ay], () => x.Ay.useReducedMotion),
        [q, H] = l.useState(!1),
        $ = l.useRef(null),
        { isHoveringOrFocusing: W } = (0, N.A)(K ? P : $),
        [Z, J] = l.useState(!1),
        { isFocusing: X } = (0, N.A)(R),
        Q = W || Z,
        ee = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                b.default.track(T.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: i.id,
                    guild_id: i.guild_id,
                    location_stack: z,
                }),
                    D(!1),
                    s?.();
            },
            [i, s, z],
        ),
        ei = l.useCallback(() => {
            null != B &&
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        t.e("6683"),
                        t.e("59957"),
                        t.e("28136"),
                        t.e("16084"),
                        t.e("22547"),
                    ]).then(t.bind(t, 1310));
                    return (t) => (0, n.jsx)(e, { ...t, guild: B, channel: i, source: T.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [B, i]),
        [et, en] = (0, m.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: V, clamp: !0 },
        })),
        el = l.useCallback(
            (e) => {
                H(!0), en({ to: { height: "0px" }, onRest: () => ee(e) });
            },
            [en, ee],
        ),
        es = l.useCallback(() => {
            null != U.current && clearTimeout(U.current);
            let e = () => {
                null != U.current && clearTimeout(U.current);
            };
            return Y || ((U.current = setTimeout(() => el("timeout"), 1e4)), L((e) => e + 1)), e;
        }, [el, Y]),
        ea = l.useCallback(
            () => (
                null != M.current && clearTimeout(M.current),
                (M.current = setTimeout(() => {
                    D(!1);
                }, 150)),
                () => {
                    null != M.current && clearTimeout(M.current);
                }
            ),
            [],
        );
    (0, f.Ay)(es),
        l.useEffect(() => {
            if (!Q) {
                let e = es(),
                    i = ea();
                return () => {
                    e?.(), i?.();
                };
            }
            null != U.current && clearTimeout(U.current), null != M.current && clearTimeout(M.current), D(!0);
        }, [Q, es, ea]);
    let er = l.useCallback(() => {
            D(!0);
        }, []),
        ed = l.useCallback(() => {
            D(!1), J(!1);
        }, []);
    return K
        ? (0, n.jsx)(A.Y, {
              targetElementRef: P,
              shouldShow: w,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, n.jsx)(j.w, { channel: i, onHoverOrFocus: J, ...e }),
              onRequestOpen: er,
              onRequestClose: ed,
              children: (e) => {
                  let { onClick: i, ...t } = e;
                  return (0, n.jsx)(r.animated.div, {
                      className: G.lY,
                      style: et,
                      children: (0, n.jsx)(g.D, {
                          innerRef: P,
                          className: a()({ [G.vk]: !q }, k.q7, k.L9, k.vk),
                          focusProps: { offset: { right: 4 } },
                          "aria-disabled": q,
                          "aria-label": O.intl.string(O.t.F3qiJr),
                          onClick: ei,
                          ignoreKeyPress: X,
                          ...t,
                          children: (0, n.jsxs)("div", {
                              className: a()(G.Qs, k.Qs),
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: G.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          Y
                                              ? null
                                              : (0, n.jsxs)(
                                                    "svg",
                                                    {
                                                        className: a()(G.O1, { [G.Ft]: Q }),
                                                        viewBox: "0 0 24 24",
                                                        style: {
                                                            "--custom-voice-invite-suggestions-timer-duration": 1e4,
                                                        },
                                                        children: [
                                                            (0, n.jsx)("circle", { className: G.qB }),
                                                            (0, n.jsx)("circle", { className: G.hN }),
                                                        ],
                                                    },
                                                    `voice-invite-suggestions-timer-${F}`,
                                                ),
                                          (0, n.jsx)(h.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(G.Hk, G.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(c.m, {
                                      text: O.intl.string(O.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, n.jsx)(p.E, {
                                          variant: "text-sm/medium",
                                          className: G.Pf,
                                          lineClamp: 1,
                                          children: O.intl.string(O.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, n.jsx)("div", {
                                      ref: R,
                                      children: W
                                          ? (0, n.jsx)(g.D, {
                                                className: G.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), el("user_explicit");
                                                },
                                                "aria-label": O.intl.string(O.t.cpT0Cq),
                                                children: (0, n.jsx)(I.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: G.Kk,
                                                }),
                                            })
                                          : (0, n.jsx)(v._, { size: "xs", color: "currentColor", className: G.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
