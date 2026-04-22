n.d(t, { p: () => G });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(517738),
    o = n(110259),
    d = n(311907),
    c = n(990078),
    u = n(192308),
    h = n(717421),
    A = n(265872),
    _ = n(939249),
    m = n(283973),
    g = n(834730),
    p = n(789645),
    f = n(320448),
    E = n(964486),
    x = n(793574),
    I = n(688810),
    C = n(139286),
    b = n(713517),
    N = n(71393),
    S = n(576705),
    v = n(954571),
    T = n(778768),
    y = n(652215);
n(281405);
var R = n(985018),
    j = n(89682),
    L = n(80442);
let O = (e) => 1 - Math.pow(1 - e, 4);
function G(e) {
    let { channel: t, onClose: s } = e,
        G = l.useRef(null),
        D = l.useRef(null),
        [M, U] = l.useState(!1),
        P = l.useRef(null),
        w = l.useRef(null),
        [k, V] = l.useState(0),
        { analyticsLocations: B } = (0, I.Ay)(x.A.VOICE_INVITE_SUGGESTIONS);
    (0, C.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: B },
    });
    let H = (0, d.bG)([S.A], () => S.A.can(y.xBc.CREATE_INSTANT_INVITE, t), [t]),
        F = (0, d.bG)([N.A], () => N.A.getGuild(t.guild_id)),
        [W, Y] = l.useState(!1),
        K = l.useRef(null),
        { isHoveringOrFocusing: z } = (0, b.A)(H ? G : K),
        [q, X] = l.useState(!1),
        { isFocusing: Q } = (0, b.A)(D),
        J = z || q,
        Z = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                v.default.track(y.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: B,
                }),
                    U(!1),
                    s?.();
            },
            [t, s, B],
        ),
        $ = l.useCallback(() => {
            null != F &&
                (0, u.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: F, channel: t, source: y.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [F, t]),
        [ee, et] = (0, h.z)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: O, clamp: !0 },
        })),
        en = l.useCallback(
            (e) => {
                Y(!0), et({ to: { height: "0px" }, onRest: () => Z(e) });
            },
            [et, Z],
        ),
        ei = l.useCallback(
            () => (
                null != P.current && clearTimeout(P.current),
                (P.current = setTimeout(() => en("timeout"), 1e4)),
                V((e) => e + 1),
                () => {
                    null != P.current && clearTimeout(P.current);
                }
            ),
            [en],
        ),
        el = l.useCallback(
            () => (
                null != w.current && clearTimeout(w.current),
                (w.current = setTimeout(() => {
                    U(!1);
                }, 150)),
                () => {
                    null != w.current && clearTimeout(w.current);
                }
            ),
            [],
        );
    (0, E.Ay)(ei),
        l.useEffect(() => {
            if (!J) {
                ei(), el();
                return;
            }
            null != P.current && clearTimeout(P.current), null != w.current && clearTimeout(w.current), U(!0);
        }, [J, ei, el]);
    let es = l.useCallback(() => {
            U(!0);
        }, []),
        ea = l.useCallback(() => {
            U(!1), X(!1);
        }, []);
    return H
        ? (0, i.jsx)(A.Y, {
              targetElementRef: G,
              shouldShow: M,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(T.w, { channel: t, onHoverOrFocus: X, ...e }),
              onRequestOpen: es,
              onRequestClose: ea,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(r.animated.div, {
                      className: j.lY,
                      style: ee,
                      children: (0, i.jsx)(_.D, {
                          innerRef: G,
                          className: a()({ [j.vk]: !W }, L.q7, L.L9, L.vk),
                          "aria-disabled": W,
                          "aria-label": R.intl.string(R.t.F3qiJr),
                          onClick: $,
                          ignoreKeyPress: Q,
                          ...n,
                          children: (0, i.jsxs)("div", {
                              className: a()(j.Qs, L.Qs),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: j.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, i.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(j.O1, { [j.Ft]: J }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: j.qB }),
                                                      (0, i.jsx)("circle", { className: j.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${k}`,
                                          ),
                                          (0, i.jsx)(m.R, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(j.Hk, j.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(c.m, {
                                      text: R.intl.string(R.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(g.E, {
                                          variant: "text-sm/medium",
                                          className: j.Pf,
                                          lineClamp: 1,
                                          children: R.intl.string(R.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: D,
                                      children: z
                                          ? (0, i.jsx)(_.D, {
                                                className: j.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), en("user_explicit");
                                                },
                                                "aria-label": R.intl.string(R.t.cpT0Cq),
                                                children: (0, i.jsx)(p.P, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: j.Kk,
                                                }),
                                            })
                                          : (0, i.jsx)(f._, { size: "xs", color: "currentColor", className: j.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
