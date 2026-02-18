n.d(t, { p: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(522160),
    o = n(110259),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(964486),
    A = n(793574),
    p = n(688810),
    m = n(139286),
    g = n(713517),
    _ = n(644836),
    f = n(71393),
    x = n(576705),
    C = n(954571),
    E = n(778768),
    I = n(652215),
    N = n(985018),
    b = n(430023),
    S = n(77615);
let T = (e) => 1 - Math.pow(1 - e, 4);
function v(e) {
    let { channel: t, onClose: s } = e,
        v = l.useRef(null),
        [y, j] = l.useState(!1),
        R = l.useRef(null),
        O = l.useRef(null),
        [L, M] = l.useState(0),
        { analyticsLocations: D } = (0, p.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, m.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: D },
    });
    let G = (0, d.bG)([x.A], () => x.A.can(I.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { standardPopoverGap: U } = (0, _.FS)({ guildId: t.guild_id, location: "VoiceInviteSuggestionsButton" }),
        P = (0, d.bG)([f.A], () => f.A.getGuild(t.guild_id)),
        [w, k] = l.useState(!1),
        V = l.useRef(null),
        { isHoveringOrFocusing: B } = (0, g.A)(G ? v : V),
        [H, F] = l.useState(!1),
        K = B || H,
        W = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                C.default.track(I.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: D,
                }),
                    j(!1),
                    s?.();
            },
            [t, s, D],
        ),
        Y = l.useCallback(() => {
            null != P &&
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: P, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [P, t]),
        [z, X] = (0, u.zhh)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: T, clamp: !0 },
        })),
        q = l.useCallback(
            (e) => {
                k(!0), X({ to: { height: "0px" }, onRest: () => W(e) });
            },
            [X, W],
        ),
        J = l.useCallback(
            () => (
                null != R.current && clearTimeout(R.current),
                (R.current = setTimeout(() => q("timeout"), 1e4)),
                M((e) => e + 1),
                () => {
                    null != R.current && clearTimeout(R.current);
                }
            ),
            [q],
        ),
        Q = l.useCallback(
            () => (
                null != O.current && clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    j(!1);
                }, 150)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            ),
            [],
        );
    (0, h.Ay)(J),
        l.useEffect(() => {
            if (!K) {
                J(), Q();
                return;
            }
            null != R.current && clearTimeout(R.current), null != O.current && clearTimeout(O.current), j(!0);
        }, [K, J, Q]);
    let $ = l.useCallback(() => {
            j(!0);
        }, []),
        Z = l.useCallback(() => {
            j(!1), F(!1);
        }, []);
    return G
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: v,
              shouldShow: y,
              position: "right",
              align: "top",
              spacing: U ?? 8,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(E.w, { channel: t, onHoverOrFocus: F, ...e }),
              onRequestOpen: $,
              onRequestClose: Z,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(r.animated.div, {
                      className: b.lY,
                      style: z,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: v,
                          className: a()({ [b.vk]: !w }, S.q7, S.L9, S.vk),
                          "aria-disabled": w,
                          "aria-label": N.intl.string(N.t.F3qiJr),
                          onClick: Y,
                          ...n,
                          children: (0, i.jsxs)("div", {
                              className: a()(b.Qs, S.Qs),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: b.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, i.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(b.O1, { [b.Ft]: K }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: b.qB }),
                                                      (0, i.jsx)("circle", { className: b.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${L}`,
                                          ),
                                          (0, i.jsx)(u.Rvf, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(b.Hk, b.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(c.m_, {
                                      text: N.intl.string(N.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: b.Pf,
                                          lineClamp: 1,
                                          children: N.intl.string(N.t["EE+P0H"]),
                                      }),
                                  }),
                                  B
                                      ? (0, i.jsx)(u.DUT, {
                                            className: b.VN,
                                            onClick: (e) => {
                                                e.stopPropagation(), q("user_explicit");
                                            },
                                            "aria-label": N.intl.string(N.t.cpT0Cq),
                                            children: (0, i.jsx)(u.PGe, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: b.Kk,
                                            }),
                                        })
                                      : (0, i.jsx)(u._BQ, { size: "xs", color: "currentColor", className: b.Kk }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
