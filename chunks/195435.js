n.d(t, { a: () => D });
var l = n(627968),
    i = n(64700),
    r = n(311907),
    s = n(939249),
    a = n(97808),
    u = n(778712),
    o = n(834730),
    d = n(429913),
    c = n(609425),
    h = n(922301),
    g = n(750112),
    m = n(769015),
    I = n(534400),
    E = n(342296),
    A = n(481947),
    f = n(616356),
    p = n(290863),
    S = n(287809),
    N = n(977997),
    x = n(403362),
    T = n(562153),
    _ = n(996439),
    y = n(67103),
    v = n(70191),
    C = n(652215),
    R = n(567346);
let D = i.memo(function (e) {
    let { channelId: t, guildId: n, userId: D, onDoubleClick: b, onContextMenu: j } = e,
        M = i.useRef(null),
        [k, O] = i.useState(!1),
        w = (0, r.bG)([S.default], () => S.default.getUser(D), [D]),
        L = (function (e, t) {
            let [n] = (0, r.bG)(
                [N.A],
                () => [N.A.getVoiceStateForChannel(e, t) ?? null, N.A.getVoiceStateVersion()],
                [e, t],
                _.D,
            );
            return n;
        })(t, D),
        F = (0, c.A)({ userId: D, guildId: n }),
        G = (0, r.bG)([f.A], () => null != n && null != f.A.getStreamForUser(D, n), [n, D]),
        U = (0, r.bG)([p.A], () => p.A.findActivity(D, v.A), [D]),
        P = (0, d.h)(U?.application_id),
        V = (0, T.tx)(n ?? void 0, t, w),
        H = i.useCallback(
            (e) => {
                (0, x.Vq)(w) && null != L && j?.({ type: y.K.VOICE_USER, event: e, user: w, channelId: t });
            },
            [t, j, w, L],
        );
    return (0, x.Vq)(w) && null != L
        ? (0, l.jsx)(E.A, {
              targetElementRef: M,
              user: w,
              guildId: n ?? void 0,
              channelId: t,
              appContext: C.BRT.OVERLAY,
              shouldShow: k,
              onRequestClose: () => O(!1),
              spacing: 24,
              children: (e) =>
                  (0, l.jsx)(s.D, {
                      ...e,
                      innerRef: M,
                      className: R.gD,
                      onDoubleClick: b,
                      onContextMenu: H,
                      onClick: (e) => {
                          e.preventDefault(), e.stopPropagation(), O(!0);
                      },
                      children: (0, l.jsxs)("div", {
                          className: R.h6,
                          children: [
                              (0, l.jsx)(a.eu, {
                                  src: w.getAvatarURL(n ?? void 0, 24),
                                  size: u._3.SIZE_24,
                                  "aria-label": V,
                              }),
                              (0, l.jsxs)(o.E, {
                                  className: R.rg,
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  children: [
                                      (0, l.jsx)(g.A, {
                                          userName: V,
                                          displayNameStyles: F,
                                          effectDisplayType: h.G.STATIC,
                                          textClassName: R.m2,
                                      }),
                                      (0, l.jsx)(I.Ay, { userId: D, disableGuildProfile: !0 }),
                                  ],
                              }),
                              (0, l.jsx)("div", {
                                  className: R.ZA,
                                  onDoubleClick: b,
                                  children: (0, l.jsx)(A.Kc, {
                                      guildId: n ?? void 0,
                                      user: w,
                                      video: L.selfVideo,
                                      isStreaming: G,
                                      className: R.ZA,
                                      iconClassName: R.Ow,
                                      isWatching: !1,
                                      localMute: !1,
                                      localVideoDisabled: !1,
                                      mute: L.isVoiceMuted(),
                                      deaf: L.isVoiceDeafened(),
                                      serverMute: L.mute || L.suppress,
                                      serverDeaf: L.deaf,
                                      disabled: !1,
                                  }),
                              }),
                              null != P ? (0, l.jsx)(m.A, { game: P, size: m.M.XSMALL, className: R.IV }) : null,
                          ],
                      }),
                  }),
          })
        : null;
});
