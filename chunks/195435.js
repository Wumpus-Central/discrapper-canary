n.d(t, { a: () => x });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(429913),
    u = n(609425),
    o = n(922301),
    d = n(750112),
    c = n(769015),
    h = n(534400),
    g = n(342296),
    I = n(481947),
    A = n(616356),
    f = n(290863),
    E = n(287809),
    m = n(977997),
    S = n(403362),
    p = n(562153),
    N = n(996439),
    T = n(67103),
    _ = n(70191),
    C = n(652215),
    y = n(796487);
let x = i.memo(function (e) {
    let { channelId: t, guildId: n, userId: x, onDoubleClick: M, onContextMenu: v } = e,
        D = i.useRef(null),
        [R, U] = i.useState(!1),
        O = (0, r.bG)([E.default], () => E.default.getUser(x), [x]),
        G = (function (e, t) {
            let [n] = (0, r.bG)(
                [m.A],
                () => [m.A.getVoiceStateForChannel(e, t) ?? null, m.A.getVoiceStateVersion()],
                [e, t],
                N.D,
            );
            return n;
        })(t, x),
        w = (0, u.A)({ userId: x, guildId: n }),
        F = (0, r.bG)([A.A], () => null != n && null != A.A.getStreamForUser(x, n), [n, x]),
        L = (0, r.bG)([f.A], () => f.A.findActivity(x, _.A), [x]),
        b = (0, a.h)(L?.application_id),
        k = (0, p.tx)(n ?? void 0, t, O),
        P = i.useCallback(
            (e) => {
                (0, S.Vq)(O) && null != G && v?.({ type: T.K.VOICE_USER, event: e, user: O, channelId: t });
            },
            [t, v, O, G],
        );
    return (0, S.Vq)(O) && null != G
        ? (0, l.jsx)(g.A, {
              targetElementRef: D,
              user: O,
              guildId: n ?? void 0,
              channelId: t,
              appContext: C.BRT.OVERLAY,
              shouldShow: R,
              onRequestClose: () => U(!1),
              spacing: 24,
              children: (e) =>
                  (0, l.jsx)(s.DUT, {
                      ...e,
                      innerRef: D,
                      className: y.gD,
                      onDoubleClick: M,
                      onContextMenu: P,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), U(!0);
                      },
                      children: (0, l.jsxs)("div", {
                          className: y.h6,
                          children: [
                              (0, l.jsx)(s.euF, {
                                  src: O.getAvatarURL(n ?? void 0, 24),
                                  size: s._3J.SIZE_24,
                                  "aria-label": k,
                              }),
                              (0, l.jsxs)(s.Text, {
                                  className: y.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, l.jsx)(d.A, {
                                          userName: k,
                                          displayNameStyles: w,
                                          effectDisplayType: o.G.STATIC,
                                          textClassName: y.m2,
                                      }),
                                      (0, l.jsx)(h.Ay, { userId: x, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, l.jsx)("div", {
                                  className: y.ZA,
                                  onDoubleClick: M,
                                  children: (0, l.jsx)(I.Kc, {
                                      guildId: n ?? void 0,
                                      user: O,
                                      video: G.selfVideo,
                                      isStreaming: F,
                                      className: y.ZA,
                                      iconClassName: y.Ow,
                                      isWatching: !1,
                                      localMute: !1,
                                      localVideoDisabled: !1,
                                      mute: G.isVoiceMuted(),
                                      deaf: G.isVoiceDeafened(),
                                      serverMute: G.mute || G.suppress,
                                      serverDeaf: G.deaf,
                                      disabled: !1,
                                  }),
                              }),
                              null != b ? (0, l.jsx)(c.A, { game: b, size: c.M.XSMALL, className: y.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
