"use strict";
n.d(t, { p: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(497766),
    o = n(110259),
    c = n(311907),
    d = n(435371),
    u = n(397927),
    h = n(964486),
    A = n(793574),
    m = n(688810),
    _ = n(139286),
    p = n(713517),
    g = n(71393),
    f = n(576705),
    x = n(954571),
    C = n(778768),
    E = n(652215);
n(281405);
var I = n(985018),
    N = n(430023),
    b = n(77615);
let S = (e) => 1 - Math.pow(1 - e, 4);
function T(e) {
    let { channel: t, onClose: l } = e,
        T = s.useRef(null),
        [v, y] = s.useState(!1),
        j = s.useRef(null),
        R = s.useRef(null),
        [O, L] = s.useState(0),
        { analyticsLocations: M } = (0, m.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, _.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: M },
    });
    let D = (0, c.bG)([f.A], () => f.A.can(E.xBc.CREATE_INSTANT_INVITE, t), [t]),
        G = (0, c.bG)([g.A], () => g.A.getGuild(t.guild_id)),
        [U, P] = s.useState(!1),
        w = s.useRef(null),
        { isHoveringOrFocusing: k } = (0, p.A)(D ? T : w),
        [V, B] = s.useState(!1),
        H = k || V,
        F = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                x.default.track(E.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: M,
                }),
                    y(!1),
                    l?.();
            },
            [t, l, M],
        ),
        K = s.useCallback(() => {
            null != G &&
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: G, channel: t, source: E.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [G, t]),
        [W, Y] = (0, u.zhh)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: S, clamp: !0 },
        })),
        z = s.useCallback(
            (e) => {
                P(!0), Y({ to: { height: "0px" }, onRest: () => F(e) });
            },
            [Y, F],
        ),
        q = s.useCallback(
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
        X = s.useCallback(
            () => (
                null != R.current && clearTimeout(R.current),
                (R.current = setTimeout(() => {
                    y(!1);
                }, 150)),
                () => {
                    null != R.current && clearTimeout(R.current);
                }
            ),
            [],
        );
    (0, h.Ay)(q),
        s.useEffect(() => {
            if (!H) {
                q(), X();
                return;
            }
            null != j.current && clearTimeout(j.current), null != R.current && clearTimeout(R.current), y(!0);
        }, [H, q, X]);
    let J = s.useCallback(() => {
            y(!0);
        }, []),
        Q = s.useCallback(() => {
            y(!1), B(!1);
        }, []);
    return D
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: T,
              shouldShow: v,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(C.w, { channel: t, onHoverOrFocus: B, ...e }),
              onRequestOpen: J,
              onRequestClose: Q,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(r.animated.div, {
                      className: N.lY,
                      style: W,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: T,
                          className: a()({ [N.vk]: !U }, b.q7, b.L9, b.vk),
                          "aria-disabled": U,
                          "aria-label": I.intl.string(I.t.F3qiJr),
                          onClick: K,
                          ...n,
                          children: (0, i.jsxs)("div", {
                              className: a()(N.Qs, b.Qs),
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
                                      text: I.intl.string(I.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: N.Pf,
                                          lineClamp: 1,
                                          children: I.intl.string(I.t["EE+P0H"]),
                                      }),
                                  }),
                                  k
                                      ? (0, i.jsx)(u.DUT, {
                                            className: N.VN,
                                            onClick: (e) => {
                                                e.stopPropagation(), z("user_explicit");
                                            },
                                            "aria-label": I.intl.string(I.t.cpT0Cq),
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
