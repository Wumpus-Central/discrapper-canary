n.d(t, {
    a: () => O,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(609425),
    o = n(922301),
    u = n(750112),
    c = n(534400),
    d = n(342296),
    h = n(481947),
    p = n(616356),
    f = n(287809),
    g = n(977997),
    m = n(403362),
    y = n(562153),
    A = n(996439),
    v = n(876891),
    b = n(652215),
    E = n(905777);
let O = r.memo(function (e) {
    let { channelId: t, guildId: n, userId: O, onDoubleClick: x } = e,
        _ = r.useRef(null),
        [S, I] = r.useState(!1),
        j = (0, l.bG)([f.default], () => f.default.getUser(O), [O]),
        T = (function (e, t) {
            let [n] = (0, l.bG)(
                [g.A],
                () => {
                    var n;
                    return [null != (n = g.A.getVoiceStateForChannel(e, t)) ? n : null, g.A.getVoiceStateVersion()];
                },
                [e, t],
                A.D,
            );
            return n;
        })(t, O),
        C = (0, s.A)({
            userId: O,
            guildId: n,
        }),
        N = (0, l.bG)([p.A], () => null != n && null != p.A.getStreamForUser(O, n), [n, O]),
        w = (0, y.tx)(null != n ? n : void 0, t, j),
        P = (0, v.Pe)({
            user: null != j ? j : null,
            guildId: n,
            channelId: t,
        }),
        D = r.useCallback(
            (e) => {
                (0, m.Vq)(j) && null != T && P(e);
            },
            [P, j, T],
        );
    return (0, m.Vq)(j) && null != T
        ? (0, i.jsx)(d.A, {
              targetElementRef: _,
              user: j,
              guildId: null != n ? n : void 0,
              channelId: t,
              appContext: b.BRT.OVERLAY,
              shouldShow: S,
              onRequestClose: () => I(!1),
              spacing: 24,
              children: (e) => {
                  var t, r;
                  return (0, i.jsx)(
                      a.DUT,
                      ((t = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {},
                                  i = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (i = i.concat(
                                      Object.getOwnPropertySymbols(n).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                      }),
                                  )),
                                  i.forEach(function (t) {
                                      var i;
                                      (i = n[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: i,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[t] = i);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (r = r =
                          {
                              innerRef: _,
                              className: E.gD,
                              onDoubleClick: x,
                              onContextMenu: D,
                              onClick: (e) => {
                                  e.preventDefault(), e.stopPropagation(), I(!0);
                              },
                              children: (0, i.jsxs)("div", {
                                  className: E.h6,
                                  children: [
                                      (0, i.jsx)(a.euF, {
                                          src: j.getAvatarURL(null != n ? n : void 0, 24),
                                          size: a._3J.SIZE_24,
                                          "aria-label": w,
                                      }),
                                      (0, i.jsxs)("div", {
                                          className: E.rg,
                                          children: [
                                              (0, i.jsx)(u.A, {
                                                  userName: w,
                                                  displayNameStyles: C,
                                                  effectDisplayType: o.G.STATIC,
                                                  textClassName: E.m2,
                                              }),
                                              (0, i.jsx)(c.Ay, {
                                                  userId: O,
                                                  disableGuildProfile: !0,
                                              }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", {
                                          className: E.ZA,
                                          onDoubleClick: x,
                                          children: (0, i.jsx)(h.Kc, {
                                              guildId: null != n ? n : void 0,
                                              user: j,
                                              video: T.selfVideo,
                                              isStreaming: N,
                                              className: E.ZA,
                                              iconClassName: E.Ow,
                                              isWatching: !1,
                                              localMute: !1,
                                              localVideoDisabled: !1,
                                              mute: T.isVoiceMuted(),
                                              deaf: T.isVoiceDeafened(),
                                              serverMute: T.mute || T.suppress,
                                              serverDeaf: T.deaf,
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
                                    var i = Object.getOwnPropertySymbols(e);
                                    n.push.apply(n, i);
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
