n.d(t, { p: () => T });
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
    m = n(688810),
    p = n(139286),
    g = n(644836),
    _ = n(576705),
    f = n(954571),
    x = n(778768),
    C = n(582904),
    E = n(652215),
    I = n(985018),
    N = n(430023),
    b = n(77615);
let S = (e) => 1 - Math.pow(1 - e, 4);
function T(e) {
    let { channel: t, onClose: n } = e,
        s = l.useRef(null),
        [T, v] = l.useState(!1),
        y = l.useRef(null),
        j = l.useRef(null),
        [R, O] = l.useState(0),
        { analyticsLocations: L } = (0, m.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, p.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: L },
    });
    let M = (0, d.bG)([_.A], () => _.A.can(E.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { standardPopoverGap: D } = (0, g.FS)({ guildId: t.guild_id, location: "VoiceInviteSuggestionsButton" }),
        [G, U] = l.useState(!1),
        [P, w] = l.useState("unknown"),
        k = l.useRef(null),
        { isHoveringOrFocusing: V } = (0, C.L7)(M ? s : k),
        [B, H] = l.useState(!1),
        F = V || B,
        K = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                f.default.track(E.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: L,
                }),
                    v(!1),
                    n?.();
            },
            [t, n, L],
        ),
        W = (0, u.zhh)({
            from: { height: "0px" },
            to: { height: "32px" },
            reverse: G,
            config: { duration: 200, easing: S, clamp: !0 },
            onRest: () => {
                G && K(P);
            },
        }),
        Y = l.useCallback(function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
            U(!0), w(e);
        }, []),
        z = l.useCallback(
            () => (
                null != y.current && clearTimeout(y.current),
                (y.current = setTimeout(() => Y("timeout"), 1e4)),
                O((e) => e + 1),
                () => {
                    null != y.current && clearTimeout(y.current);
                }
            ),
            [Y],
        ),
        q = l.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => {
                    v(!1);
                }, 150)),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [],
        );
    (0, h.Ay)(z),
        l.useEffect(() => {
            if (!F) {
                z(), q();
                return;
            }
            null != y.current && clearTimeout(y.current), null != j.current && clearTimeout(j.current), v(!0);
        }, [F, z, q]);
    let X = l.useCallback(() => {
            v(!0);
        }, []),
        J = l.useCallback(() => {
            v(!1), H(!1);
        }, []);
    return M
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: s,
              shouldShow: T,
              position: "right",
              align: "top",
              spacing: D ?? 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(x.w, { channel: t, onHoverOrFocus: H, ...e }),
              onRequestOpen: X,
              onRequestClose: J,
              children: (e) =>
                  (0, i.jsx)(r.animated.div, {
                      className: N.lY,
                      style: W,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: s,
                          className: a()({ [N.vk]: !G }, b.q7, b.L9, b.vk),
                          "aria-disabled": G,
                          "aria-label": I.intl.string(I.t.F3qiJr),
                          ...e,
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
                                                  className: a()(N.O1, { [N.Ft]: F }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: N.qB }),
                                                      (0, i.jsx)("circle", { className: N.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${R}`,
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
                                  (0, i.jsx)(c.m_, {
                                      text: I.intl.string(I.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: N.Pf,
                                          lineClamp: 1,
                                          children: I.intl.string(I.t["EE+P0H"]),
                                      }),
                                  }),
                                  V
                                      ? (0, i.jsx)(u.DUT, {
                                            className: N.VN,
                                            onClick: () => Y("user_explicit"),
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
                  }),
          })
        : null;
}
