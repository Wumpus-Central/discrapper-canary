n.d(t, { p: () => b });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(407045),
    o = n(110259),
    d = n(311907),
    c = n(435371),
    u = n(397927),
    h = n(964486),
    A = n(793574),
    _ = n(688810),
    m = n(139286),
    p = n(713517),
    g = n(71393),
    f = n(576705),
    E = n(954571),
    x = n(778768),
    I = n(652215);
n(281405);
var C = n(985018),
    N = n(89682),
    T = n(80442);
let S = (e) => 1 - Math.pow(1 - e, 4);
function b(e) {
    let { channel: t, onClose: s } = e,
        b = l.useRef(null),
        y = l.useRef(null),
        [v, R] = l.useState(!1),
        j = l.useRef(null),
        O = l.useRef(null),
        [L, M] = l.useState(0),
        { analyticsLocations: D } = (0, _.Ay)(A.A.VOICE_INVITE_SUGGESTIONS);
    (0, m.A)({
        name: o.ImpressionNames.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT,
        type: o.ImpressionTypes.VIEW,
        properties: { voice_channel_id: t.id, voice_guild_id: t.guild_id, location_stack: D },
    });
    let U = (0, d.bG)([f.A], () => f.A.can(I.xBc.CREATE_INSTANT_INVITE, t), [t]),
        G = (0, d.bG)([g.A], () => g.A.getGuild(t.guild_id)),
        [P, k] = l.useState(!1),
        w = l.useRef(null),
        { isHoveringOrFocusing: B } = (0, p.A)(U ? b : w),
        [V, H] = l.useState(!1),
        { isFocusing: F } = (0, p.A)(y),
        W = B || V,
        K = l.useCallback(
            function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown";
                E.default.track(I.HAw.VOICE_INVITE_SUGGESTIONS_ENTRYPOINT_CLOSED, {
                    reason: e,
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    location_stack: D,
                }),
                    R(!1),
                    s?.();
            },
            [t, s, D],
        ),
        Y = l.useCallback(() => {
            null != G &&
                (0, u.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42738")]).then(
                        n.bind(n, 234355),
                    );
                    return (n) => (0, i.jsx)(e, { ...n, guild: G, channel: t, source: I.PE1.VOICE_INVITE_SUGGESTIONS });
                });
        }, [G, t]),
        [z, q] = (0, u.zhh)(() => ({
            from: { height: "0px" },
            to: { height: "32px" },
            config: { duration: 200, easing: S, clamp: !0 },
        })),
        X = l.useCallback(
            (e) => {
                k(!0), q({ to: { height: "0px" }, onRest: () => K(e) });
            },
            [q, K],
        ),
        $ = l.useCallback(
            () => (
                null != j.current && clearTimeout(j.current),
                (j.current = setTimeout(() => X("timeout"), 1e4)),
                M((e) => e + 1),
                () => {
                    null != j.current && clearTimeout(j.current);
                }
            ),
            [X],
        ),
        J = l.useCallback(
            () => (
                null != O.current && clearTimeout(O.current),
                (O.current = setTimeout(() => {
                    R(!1);
                }, 150)),
                () => {
                    null != O.current && clearTimeout(O.current);
                }
            ),
            [],
        );
    (0, h.Ay)($),
        l.useEffect(() => {
            if (!W) {
                $(), J();
                return;
            }
            null != j.current && clearTimeout(j.current), null != O.current && clearTimeout(O.current), R(!0);
        }, [W, $, J]);
    let Q = l.useCallback(() => {
            R(!0);
        }, []),
        Z = l.useCallback(() => {
            R(!1), H(!1);
        }, []);
    return U
        ? (0, i.jsx)(u.YNO, {
              targetElementRef: b,
              shouldShow: v,
              position: "right",
              align: "top",
              spacing: 17,
              popoutKey: "voice-invite-suggestions-button",
              renderPopout: (e) => (0, i.jsx)(x.w, { channel: t, onHoverOrFocus: H, ...e }),
              onRequestOpen: Q,
              onRequestClose: Z,
              children: (e) => {
                  let { onClick: t, ...n } = e;
                  return (0, i.jsx)(r.animated.div, {
                      className: N.lY,
                      style: z,
                      children: (0, i.jsx)(u.DUT, {
                          innerRef: b,
                          className: a()({ [N.vk]: !P }, T.q7, T.L9, T.vk),
                          "aria-disabled": P,
                          "aria-label": C.intl.string(C.t.F3qiJr),
                          onClick: Y,
                          ignoreKeyPress: F,
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
                                                  className: a()(N.O1, { [N.Ft]: W }),
                                                  viewBox: "0 0 24 24",
                                                  style: { "--custom-voice-invite-suggestions-timer-duration": 1e4 },
                                                  children: [
                                                      (0, i.jsx)("circle", { className: N.qB }),
                                                      (0, i.jsx)("circle", { className: N.hN }),
                                                  ],
                                              },
                                              `voice-invite-suggestions-timer-${L}`,
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
                                      text: C.intl.string(C.t["EE+P0H"]),
                                      overflowOnly: !0,
                                      children: (0, i.jsx)(u.Text, {
                                          variant: "text-sm/medium",
                                          className: N.Pf,
                                          lineClamp: 1,
                                          children: C.intl.string(C.t["EE+P0H"]),
                                      }),
                                  }),
                                  (0, i.jsx)("div", {
                                      ref: y,
                                      children: B
                                          ? (0, i.jsx)(u.DUT, {
                                                className: N.VN,
                                                onClick: (e) => {
                                                    e.stopPropagation(), X("user_explicit");
                                                },
                                                "aria-label": C.intl.string(C.t.cpT0Cq),
                                                children: (0, i.jsx)(u.PGe, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    className: N.Kk,
                                                }),
                                            })
                                          : (0, i.jsx)(u._BQ, { size: "xs", color: "currentColor", className: N.Kk }),
                                  }),
                              ],
                          }),
                      }),
                  });
              },
          })
        : null;
}
