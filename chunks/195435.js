n.d(t, {
    a: () => v,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(609425),
    o = n(922301),
    u = n(750112),
    c = n(534400),
    d = n(342296),
    h = n(481947),
    g = n(616356),
    f = n(287809),
    p = n(977997),
    I = n(403362),
    m = n(562153),
    E = n(996439),
    A = n(67103),
    y = n(652215),
    S = n(905777);
let v = r.memo(function (e) {
    let { channelId: t, guildId: n, userId: v, onDoubleClick: O, onContextMenu: b } = e,
        N = r.useRef(null),
        [T, _] = r.useState(!1),
        C = (0, i.bG)([f.default], () => f.default.getUser(v), [v]),
        x = (function (e, t) {
            let [n] = (0, i.bG)(
                [p.A],
                () => {
                    var n;
                    return [null != (n = p.A.getVoiceStateForChannel(e, t)) ? n : null, p.A.getVoiceStateVersion()];
                },
                [e, t],
                E.D,
            );
            return n;
        })(t, v),
        D = (0, a.A)({
            userId: v,
            guildId: n,
        }),
        M = (0, i.bG)([g.A], () => null != n && null != g.A.getStreamForUser(v, n), [n, v]),
        j = (0, m.tx)(null != n ? n : void 0, t, C),
        w = r.useCallback(
            (e) => {
                (0, I.Vq)(C) &&
                    null != x &&
                    (null == b ||
                        b({
                            type: A.K.VOICE_USER,
                            event: e,
                            user: C,
                            channelId: t,
                        }));
            },
            [t, b, C, x],
        );
    return (0, I.Vq)(C) && null != x
        ? (0, l.jsx)(d.A, {
              targetElementRef: N,
              user: C,
              guildId: null != n ? n : void 0,
              channelId: t,
              appContext: y.BRT.OVERLAY,
              shouldShow: T,
              onRequestClose: () => _(!1),
              spacing: 24,
              children: (e) => {
                  var t, r;
                  return (0, l.jsx)(
                      s.DUT,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  l = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (l = l.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  l.forEach(function (t) {
                                      var l;
                                      (l = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: l,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = l);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (r = r =
                          {
                              innerRef: N,
                              className: S.gD,
                              onDoubleClick: O,
                              onContextMenu: w,
                              onClick: (e) => {
                                  e.preventDefault(), e.stopPropagation(), _(!0);
                              },
                              children: (0, l.jsxs)("div", {
                                  className: S.h6,
                                  children: [
                                      (0, l.jsx)(s.euF, {
                                          src: C.getAvatarURL(null != n ? n : void 0, 24),
                                          size: s._3J.SIZE_24,
                                          "aria-label": j,
                                      }),
                                      (0, l.jsxs)(s.Text, {
                                          className: S.rg,
                                          variant: "text-sm/medium",
                                          color: "text-subtle",
                                          children: [
                                              (0, l.jsx)(u.A, {
                                                  userName: j,
                                                  displayNameStyles: D,
                                                  effectDisplayType: o.G.STATIC,
                                                  textClassName: S.m2,
                                              }),
                                              (0, l.jsx)(c.Ay, {
                                                  userId: v,
                                                  disableGuildProfile: !0,
                                              }),
                                          ],
                                      }),
                                      (0, l.jsx)("div", {
                                          className: S.ZA,
                                          onDoubleClick: O,
                                          children: (0, l.jsx)(h.Kc, {
                                              guildId: null != n ? n : void 0,
                                              user: C,
                                              video: x.selfVideo,
                                              isStreaming: M,
                                              className: S.ZA,
                                              iconClassName: S.Ow,
                                              isWatching: !1,
                                              localMute: !1,
                                              localVideoDisabled: !1,
                                              mute: x.isVoiceMuted(),
                                              deaf: x.isVoiceDeafened(),
                                              serverMute: x.mute || x.suppress,
                                              serverDeaf: x.deaf,
                                              disabled: !1,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : (function (e, t) {
                                var n = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var l = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, l);
                                }
                                return n;
                            })(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            }),
                      t),
                  );
              },
          })
        : null;
});
