n.d(t, { p: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(382222),
    o = n(110259),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(964486),
    A = n(793574),
    _ = n(688810),
    m = n(139286),
    g = n(713517),
    p = n(71393),
    f = n(576705),
    x = n(954571),
    E = n(778768),
    I = n(652215);
n(281405);
var C = n(985018),
    N = n(426114),
    T = n(805098);
let S = (e) => 1 - Math.pow(1 - e, 4);
function b(e) {
    let { channel: t, onClose: s } = e,
        b = l.useRef(null),
        [y, v] = l.useState(!1),
        j = l.useRef(null),
        R = l.useRef(null),
        [O, L] = l.useState(0),
        { analyticsLocations: M } = (0, _.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, m.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: M },
    });
    let D = (0, c.bG)([f.A], () => f.A.can(I.xBc.CREATE_INSTANT_INVITE, t), [t]),
        U = (0, c.bG)([p.A], () => p.A.getGuild(t.guild_id)),
        [G, P] = l.useState(!1),
        k = l.useRef(null),
        { isHoveringOrFocusing: w } = (0, g.A)(D ? b : k),
        [B, V] = l.useState(!1),
        H = w || B,
        F = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                x.default.track(I.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: M,
                }),
                    v(!1),
                    s?.();
            },
            [t, s, M],
        ),
        K = l.useCallback(() => {
            null != U &&
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("89886")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: U, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [U, t]),
        [W, Y] = (0, u.zhh)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: S, clamp: !0 },
        })),
        z = l.useCallback(
            (e) => {
                P(!0), Y({ to: { height: "0px" }, onRest: () => F(e) });
            },
            [Y, F],
        ),
        q = l.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => z("timeout"), 1e4)),
                L((e) => e + 1),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [z],
        ),
        X = l.useCallback(
            () => (
                null != R.current && clearTimeout(R.current),
                (R.current = setTimeout(() => {
                    v(!1);
                }, 150)),
                () => {
                    null != R.current && clearTimeout(R.current);
                }
            ),
            [],
        );
    (0, h.Ay)(q),
        l.useEffect(() => {
            if (!H) {
                q(), X();
                return;
            }
            null != j.current && clearTimeout(j.current), null != R.current && clearTimeout(R.current), v(!0);
        }, [H, q, X]);
    let J = l.useCallback(() => {
            v(!0);
        }, []),
        Q = l.useCallback(() => {
            v(!1), V(!1);
        }, []);
    return D
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: b,
              shouldShow: y,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(E.w, { channel: t, onHoverOrFocus: V, ...e }),
              onRequestOpen: J,
              onRequestClose: Q,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(r.animated.div, {
                      className: N.lY,
                      style: W,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: b,
                          className: a()({ [N.vk]: !G }, T.q7, T.L9, T.vk),
                          "aria-disabled": G,
                          "aria-label": C.intl.string(C.t.F3qiJr),
                          onClick: K,
                          ...n,
                          children: (0, i.jsxs)("div", {
                              className: a()(N.Qs, T.Qs),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: N.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, i.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(N.O1, { [N.Ft]: H }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: N.qB }),
                                                      (0, i.jsx)("circle", { className: N.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${O}`,
                                          ),
                                          (0, i.jsx)(u.Rvf, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(N.Hk, N.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(d.m_, {
                                      text: C.intl.string(C.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: N.Pf,
                                          lineClamp: 1,
                                          children: C.intl.string(C.t["EE+P0H"]),
                                      }),
                                  }),
                                  w
                                      ? (0, i.jsx)(u.DUT, {
                                            className: N.VN,
                                            onClick: (e) => {
                                                e.stopPropagation(), z("user_explicit");
                                            },
                                            "aria-label": C.intl.string(C.t.cpT0Cq),
                                            children: (0, i.jsx)(u.PGe, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: N.Kk,
                                            }),
                                        })
                                      : (0, i.jsx)(u._BQ, { size: "xs", color: "currentColor", className: N.Kk }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
