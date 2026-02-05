n.d(t, { p: () => N });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(92674),
    o = n(110259),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(964486),
    A = n(793574),
    g = n(688810),
    m = n(139286),
    p = n(576705),
    _ = n(954571),
    x = n(778768),
    f = n(582904),
    E = n(652215),
    C = n(985018),
    I = n(430023),
    S = n(77615);
let b = (e) => 1 - Math.pow(1 - e, 4);
function N(e) {
    let { channel: t, onClose: n } = e,
        s = l.useRef(null),
        [N, T] = l.useState(!1),
        j = l.useRef(null),
        v = l.useRef(null),
        [y, R] = l.useState(0),
        { analyticsLocations: O } = (0, g.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, m.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: O },
    });
    let L = (0, d.bG)([p.A], () => p.A.can(E.xBc.CREATE_INSTANT_INVITE, t), [t]),
        [D, M] = l.useState(!1),
        [G, U] = l.useState("unknown"),
        P = l.useRef(null),
        { isHoveringOrFocusing: k } = (0, f.L7)(L ? s : P),
        [w, V] = l.useState(!1),
        B = k || w,
        H = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                _.default.track(E.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: O,
                }),
                    T(!1),
                    n?.();
            },
            [t, n, O],
        ),
        F = (0, u.zhh)({
            from: { height: "0px" },
            to: { height: "32px" },
            reverse: D,
            config: { duration: 200, easing: b, clamp: !0 },
            onRest: () => {
                D && H(G);
            },
        }),
        Y = l.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            M(!0), U(e);
        }, []),
        W = l.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => Y("timeout"), 1e4)),
                R((e) => e + 1),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [Y],
        ),
        K = l.useCallback(
            () => (
                null != v.current && clearTimeout(v.current),
                (v.current = setTimeout(() => {
                    T(!1);
                }, 150)),
                () => {
                    null != v.current && clearTimeout(v.current);
                }
            ),
            [],
        );
    (0, h.Ay)(W),
        l.useEffect(() => {
            if (!B) {
                W(), K();
                return;
            }
            null != j.current && clearTimeout(j.current), null != v.current && clearTimeout(v.current), T(!0);
        }, [B, W, K]);
    let z = l.useCallback(() => {
            T(!0);
        }, []),
        X = l.useCallback(() => {
            T(!1), V(!1);
        }, []);
    return L
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: s,
              shouldShow: N,
              position: "right",
              align: "top",
              spacing: 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(x.w, { channel: t, onHoverOrFocus: V, ...e }),
              onRequestOpen: z,
              onRequestClose: X,
              children: (e) =>
                  (0, i.jsx)(r.animated.div, {
                      className: I.lY,
                      style: F,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: s,
                          className: a()({ [I.vk]: !D }, S.q7, S.L9, S.vk),
                          "aria-disabled": D,
                          "aria-label": C.intl.string(C.t.F3qiJr),
                          ...e,
                          children: (0, i.jsxs)("div", {
                              className: a()(I.Qs, S.Qs),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: I.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, i.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(I.O1, { [I.Ft]: B }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: I.qB }),
                                                      (0, i.jsx)("circle", { className: I.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${y}`,
                                          ),
                                          (0, i.jsx)(u.Rvf, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(I.Hk, I.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(c.m_, {
                                      text: C.intl.string(C.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: I.Pf,
                                          lineClamp: 1,
                                          children: C.intl.string(C.t["EE+P0H"]),
                                      }),
                                  }),
                                  k
                                      ? (0, i.jsx)(u.DUT, {
                                            className: I.VN,
                                            onClick: () => Y("user_explicit"),
                                            "aria-label": C.intl.string(C.t.cpT0Cq),
                                            children: (0, i.jsx)(u.PGe, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: I.Kk,
                                            }),
                                        })
                                      : (0, i.jsx)(u._BQ, { size: "xs", color: "currentColor", className: I.Kk }),
                              ],
                          }),
                      }),
                  }),
          })
        : null;
}
