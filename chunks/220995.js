n.d(t, {
    p: () => C,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(92674),
    o = n(110259),
    c = n(311907),
    u = n(435371),
    d = n(397927),
    p = n(964486),
    h = n(793574),
    g = n(688810),
    f = n(139286),
    m = n(576705),
    b = n(954571),
    A = n(778768),
    y = n(582904),
    O = n(652215),
    j = n(985018),
    x = n(430023),
    _ = n(77615);

function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let E = (e) => 1 - Math.pow(1 - e, 4);

function C(e) {
    let { channel: t, onClose: n } = e,
        i = l.useRef(null),
        [C, S] = l.useState(!1),
        I = l.useRef(null),
        N = l.useRef(null),
        [T, P] = l.useState(0),
        { analyticsLocations: w } = (0, g.Ay)(h.A.VOICE_INVITE_SUGGESTIONS);
    (0, f.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: {
            voice_channel_id: t.id,
            voice_guild_id: t.guild_id,
            location_stack: w,
        },
    });
    let R = (0, c.bG)([m.A], () => m.A.can(O.xBc.CREATE_INSTANT_INVITE, t), [t]),
        [D, L] = l.useState(!1),
        [M, G] = l.useState("unknown"),
        k = l.useRef(null),
        { isHoveringOrFocusing: U } = (0, y.L7)(R ? i : k),
        [V, B] = l.useState(!1),
        H = U || V,
        F = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                b.default.track(O.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: w,
                }),
                    S(!1),
                    null == n || n();
            },
            [t, n, w],
        ),
        Y = (0, d.zhh)({
            from: {
                height: "0px",
            },
            to: {
                height: "".concat(32, "px"),
            },
            reverse: D,
            config: {
                duration: 200,
                easing: E,
                clamp: !0,
            },
            onRest: () => {
                D && F(M);
            },
        }),
        K = l.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            L(!0), G(e);
        }, []),
        W = l.useCallback(
            () => (
                null != I.current && clearTimeout(I.current),
                (I.current = setTimeout(() => K("timeout"), 1e4)),
                P((e) => e + 1),
                () => {
                    null != I.current && clearTimeout(I.current);
                }
            ),
            [K],
        ),
        z = l.useCallback(
            () => (
                null != N.current && clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    S(!1);
                }, 150)),
                () => {
                    null != N.current && clearTimeout(N.current);
                }
            ),
            [],
        );
    (0, p.Ay)(W),
        l.useEffect(() => {
            if (!H) {
                W(), z();
                return;
            }
            null != I.current && clearTimeout(I.current), null != N.current && clearTimeout(N.current), S(!0);
        }, [H, W, z]);
    let X = l.useCallback(() => {
            S(!0);
        }, []),
        q = l.useCallback(() => {
            S(!1), B(!1);
        }, []);
    return R
        ? (0, r.jsx)(d.YNO, {
              targetElementRef: i,
              shouldShow: C,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) =>
                  (0, r.jsx)(
                      A.w,
                      v(
                          {
                              channel: t,
                              onHoverOrFocus: B,
                          },
                          e,
                      ),
                  ),
              onRequestOpen: X,
              onRequestClose: q,
              children: (e) => {
                  var t, n;
                  return (0, r.jsx)(a.animated.div, {
                      className: x.lY,
                      style: Y,
                      children: (0, r.jsx)(
                          d.DUT,
                          ((t = v(
                              {
                                  innerRef: i,
                                  className: s()(
                                      {
                                          [x.vk]: !D,
                                      },
                                      _.q7,
                                      _.L9,
                                      _.vk,
                                  ),
                                  "aria-disabled": D,
                                  "aria-label": j.intl.string(j.t.F3qiJr),
                              },
                              e,
                          )),
                          (n = n =
                              {
                                  children: (0, r.jsxs)("div", {
                                      className: s()(x.Qs, _.Qs),
                                      children: [
                                          (0, r.jsxs)("div", {
                                              className: x.R4,
                                              style: {
                                                  "--custom-voice-invite-suggestions-timer-size": 24,
                                              },
                                              children: [
                                                  (0, r.jsxs)(
                                                      "svg",
                                                      {
                                                          className: s()(x.O1, {
                                                              [x.Ft]: H,
                                                          }),
                                                          viewBox: "0 0 ".concat(24, " ").concat(24),
                                                          style: {
                                                              "--custom-voice-invite-suggestions-timer-duration": 1e4,
                                                          },
                                                          children: [
                                                              (0, r.jsx)("circle", {
                                                                  className: x.qB,
                                                              }),
                                                              (0, r.jsx)("circle", {
                                                                  className: x.hN,
                                                              }),
                                                          ],
                                                      },
                                                      "voice-invite-suggestions-timer-".concat(T),
                                                  ),
                                                  (0, r.jsx)(d.Rvf, {
                                                      size: "custom",
                                                      width: 14,
                                                      height: 14,
                                                      color: "currentColor",
                                                      className: s()(x.Hk, x.Kk),
                                                  }),
                                              ],
                                          }),
                                          (0, r.jsx)(u.m_, {
                                              text: j.intl.string(j.t["EE+P0H"]),
                                              overflowOnly: !0,
                                              children: (0, r.jsx)(d.Text, {
                                                  variant: "text-sm/medium",
                                                  className: x.Pf,
                                                  lineClamp: 1,
                                                  children: j.intl.string(j.t["EE+P0H"]),
                                              }),
                                          }),
                                          U
                                              ? (0, r.jsx)(d.DUT, {
                                                    className: x.VN,
                                                    onClick: () => K("user_explicit"),
                                                    "aria-label": j.intl.string(j.t.cpT0Cq),
                                                    children: (0, r.jsx)(d.PGe, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: x.Kk,
                                                    }),
                                                })
                                              : (0, r.jsx)(d._BQ, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: x.Kk,
                                                }),
                                      ],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(n)).forEach(function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                }),
                          t),
                      ),
                  });
              },
          })
        : null;
}
