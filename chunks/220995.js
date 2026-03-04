"use strict";
n.d(t, { p: () => v });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(396181),
    o = n(110259),
    c = n(311907),
    d = n(435371),
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
    S = n(430023),
    b = n(77615);
let T = (e) => 1 - Math.pow(1 - e, 4);
function v(e) {
    let { channel: t, onClose: l } = e,
        v = s.useRef(null),
        [y, j] = s.useState(!1),
        R = s.useRef(null),
        O = s.useRef(null),
        [L, M] = s.useState(0),
        { analyticsLocations: D } = (0, p.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, m.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: D },
    });
    let G = (0, c.bG)([x.A], () => x.A.can(I.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { standardPopoverGap: U } = (0, _.FS)({ guildId: t.guild_id, location: "VoiceInviteSuggestionsButton" }),
        P = (0, c.bG)([f.A], () => f.A.getGuild(t.guild_id)),
        [w, k] = s.useState(!1),
        V = s.useRef(null),
        { isHoveringOrFocusing: B } = (0, g.A)(G ? v : V),
        [H, F] = s.useState(!1),
        K = B || H,
        W = s.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                C.default.track(I.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: D,
                }),
                    j(!1),
                    l?.();
            },
            [t, l, D],
        ),
        Y = s.useCallback(() => {
            null != P &&
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("74918")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: P, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [P, t]),
        [z, q] = (0, u.zhh)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: T, clamp: !0 },
        })),
        X = s.useCallback(
            (e) => {
                k(!0), q({ to: { height: "0px" }, onRest: () => W(e) });
            },
            [q, W],
        ),
        J = s.useCallback(
            () => (
                null != R.current && clearTimeout(R.current),
                (R.current = setTimeout(() => X("timeout"), 1e4)),
                M((e) => e + 1),
                () => {
                    null != R.current && clearTimeout(R.current);
                }
            ),
            [X],
        ),
        Q = s.useCallback(
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
        s.useEffect(() => {
            if (!K) {
                J(), Q();
                return;
            }
            null != R.current && clearTimeout(R.current), null != O.current && clearTimeout(O.current), j(!0);
        }, [K, J, Q]);
    let $ = s.useCallback(() => {
            j(!0);
        }, []),
        Z = s.useCallback(() => {
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
                      className: S.lY,
                      style: z,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: v,
                          className: a()({ [S.vk]: !w }, b.q7, b.L9, b.vk),
                          "aria-disabled": w,
                          "aria-label": N.intl.string(N.t.F3qiJr),
                          onClick: Y,
                          ...n,
                          children: (0, i.jsxs)("div", {
                              className: a()(S.Qs, b.Qs),
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: S.R4,
                                      style: { "--custom-voice-invite-suggestions-timer-size": 24 },
                                      children: [
                                          (0, i.jsxs)(
                                              "svg",
                                              {
                                                  className: a()(S.O1, { [S.Ft]: K }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: S.qB }),
                                                      (0, i.jsx)("circle", { className: S.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${L}`,
                                          ),
                                          (0, i.jsx)(u.Rvf, {
                                              size: "custom",
                                              width: 14,
                                              height: 14,
                                              color: "currentColor",
                                              className: a()(S.Hk, S.Kk),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)(d.m_, {
                                      text: N.intl.string(N.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: S.Pf,
                                          lineClamp: 1,
                                          children: N.intl.string(N.t["EE+P0H"]),
                                      }),
                                  }),
                                  B
                                      ? (0, i.jsx)(u.DUT, {
                                            className: S.VN,
                                            onClick: (e) => {
                                                e.stopPropagation(), X("user_explicit");
                                            },
                                            "aria-label": N.intl.string(N.t.cpT0Cq),
                                            children: (0, i.jsx)(u.PGe, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: S.Kk,
                                            }),
                                        })
                                      : (0, i.jsx)(u._BQ, { size: "xs", color: "currentColor", className: S.Kk }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
