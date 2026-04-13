n.d(t, { a: () => v });
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(397927),
    a = n(429913),
    o = n(609425),
    u = n(922301),
    d = n(750112),
    c = n(769015),
    h = n(534400),
    g = n(342296),
    m = n(481947),
    f = n(616356),
    A = n(290863),
    I = n(287809),
    E = n(977997),
    p = n(403362),
    _ = n(562153),
    S = n(996439),
    x = n(67103),
    T = n(70191),
    N = n(652215),
    C = n(664674);
let v = l.memo(function (e) {
    let { channelId: t, guildId: n, userId: v, onDoubleClick: y, onContextMenu: M } = e,
        R = l.useRef(null),
        [D, b] = l.useState(!1),
        O = (0, r.bG)([I.default], () => I.default.getUser(v), [v]),
        w = (function (e, t) {
            let [n] = (0, r.bG)(
                [E.A],
                () => [E.A.getVoiceStateForChannel(e, t) ?? null, E.A.getVoiceStateVersion()],
                [e, t],
                S.D,
            );
            return n;
        })(t, v),
        j = (0, o.A)({ userId: v, guildId: n }),
        U = (0, r.bG)([f.A], () => null != n && null != f.A.getStreamForUser(v, n), [n, v]),
        L = (0, r.bG)([A.A], () => A.A.findActivity(v, T.A), [v]),
        k = (0, a.h)(L?.application_id),
        G = (0, _.tx)(n ?? void 0, t, O),
        P = l.useCallback(
            (e) => {
                (0, p.Vq)(O) && null != w && M?.({ type: x.K.VOICE_USER, event: e, user: O, channelId: t });
            },
            [t, M, O, w],
        );
    return (0, p.Vq)(O) && null != w
        ? (0, i.jsx)(g.default, {
              targetElementRef: R,
              user: O,
              guildId: n ?? void 0,
              channelId: t,
              appContext: N.BRT.OVERLAY,
              shouldShow: D,
              onRequestClose: () => b(!1),
              spacing: 24,
              children: (e) =>
                  (0, i.jsx)(s.DUT, {
                      ...e,
                      innerRef: R,
                      className: C.gD,
                      onDoubleClick: y,
                      onContextMenu: P,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), b(!0);
                      },
                      children: (0, i.jsxs)("div", {
                          className: C.h6,
                          children: [
                              (0, i.jsx)(s.euF, {
                                  src: O.getAvatarURL(n ?? void 0, 24),
                                  size: s._3J.SIZE_24,
                                  "aria-label": G,
                              }),
                              (0, i.jsxs)(s.Text, {
                                  className: C.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, i.jsx)(d.A, {
                                          userName: G,
                                          displayNameStyles: j,
                                          effectDisplayType: u.G.STATIC,
                                          textClassName: C.m2,
                                      }),
                                      (0, i.jsx)(h.Ay, { userId: v, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, i.jsx)("div", {
                                  className: C.ZA,
                                  onDoubleClick: y,
                                  children: (0, i.jsx)(m.Kc, {
                                      guildId: n ?? void 0,
                                      user: O,
                                      video: w.selfVideo,
                                      isStreaming: U,
                                      className: C.ZA,
                                      iconClassName: C.Ow,
                                      isWatching: !1,
                                      localMute: !1,
                                      localVideoDisabled: !1,
                                      mute: w.isVoiceMuted(),
                                      deaf: w.isVoiceDeafened(),
                                      serverMute: w.mute || w.suppress,
                                      serverDeaf: w.deaf,
                                      disabled: !1,
                                  }),
                              }),
                              null != k ? (0, i.jsx)(c.A, { game: k, size: c.M.XSMALL, className: C.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
