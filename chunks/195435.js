n.d(t, { a: () => T });
var l = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(397927),
    a = n(609425),
    u = n(922301),
    o = n(750112),
    d = n(534400),
    c = n(342296),
    h = n(481947),
    g = n(616356),
    I = n(287809),
    E = n(977997),
    A = n(403362),
    f = n(562153),
    m = n(996439),
    S = n(67103),
    p = n(652215),
    N = n(905777);
let T = i.memo(function (e) {
    let { channelId: t, guildId: n, userId: T, onDoubleClick: _, onContextMenu: y } = e,
        C = i.useRef(null),
        [x, v] = i.useState(!1),
        M = (0, s.bG)([I.default], () => I.default.getUser(T), [T]),
        D = (function (e, t) {
            let [n] = (0, s.bG)(
                [E.A],
                () => [E.A.getVoiceStateForChannel(e, t) ?? null, E.A.getVoiceStateVersion()],
                [e, t],
                m.D,
            );
            return n;
        })(t, T),
        R = (0, a.A)({ userId: T, guildId: n }),
        U = (0, s.bG)([g.A], () => null != n && null != g.A.getStreamForUser(T, n), [n, T]),
        O = (0, f.tx)(n ?? void 0, t, M),
        G = i.useCallback(
            (e) => {
                (0, A.Vq)(M) && null != D && y?.({ type: S.K.VOICE_USER, event: e, user: M, channelId: t });
            },
            [t, y, M, D],
        );
    return (0, A.Vq)(M) && null != D
        ? (0, l.jsx)(c.A, {
              targetElementRef: C,
              user: M,
              guildId: n ?? void 0,
              channelId: t,
              appContext: p.BRT.OVERLAY,
              shouldShow: x,
              onRequestClose: () => v(!1),
              spacing: 24,
              children: (e) =>
                  (0, l.jsx)(r.DUT, {
                      ...e,
                      innerRef: C,
                      className: N.gD,
                      onDoubleClick: _,
                      onContextMenu: G,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), v(!0);
                      },
                      children: (0, l.jsxs)("div", {
                          className: N.h6,
                          children: [
                              (0, l.jsx)(r.euF, {
                                  src: M.getAvatarURL(n ?? void 0, 24),
                                  size: r._3J.SIZE_24,
                                  "aria-label": O,
                              }),
                              (0, l.jsxs)(r.Text, {
                                  className: N.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, l.jsx)(o.A, {
                                          userName: O,
                                          displayNameStyles: R,
                                          effectDisplayType: u.G.STATIC,
                                          textClassName: N.m2,
                                      }),
                                      (0, l.jsx)(d.Ay, { userId: T, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, l.jsx)("div", {
                                  className: N.ZA,
                                  onDoubleClick: _,
                                  children: (0, l.jsx)(h.Kc, {
                                      guildId: n ?? void 0,
                                      user: M,
                                      video: D.selfVideo,
                                      isStreaming: U,
                                      className: N.ZA,
                                      iconClassName: N.Ow,
                                      isWatching: !1,
                                      localMute: !1,
                                      localVideoDisabled: !1,
                                      mute: D.isVoiceMuted(),
                                      deaf: D.isVoiceDeafened(),
                                      serverMute: D.mute || D.suppress,
                                      serverDeaf: D.deaf,
                                      disabled: !1,
                                  }),
                              }),
                          ],
                      }),
                  }),
          })
        : null;
});
