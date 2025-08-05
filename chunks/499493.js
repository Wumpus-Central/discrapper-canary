r.d(t, { Z: () => h });
var n = r(255367),
    a = r(73800),
    i = r(120356),
    l = r.n(i),
    o = r(442837),
    s = r(481060),
    c = r(592125),
    d = r(944486),
    u = r(594174),
    m = r(5192),
    g = r(178762),
    p = r(91140),
    f = r(297781),
    x = r(388032),
    j = r(152790),
    v = r(263930);
let h = (e) => {
    let { entry: t, onClose: r, onReaction: i, onRequestOpen: h, disableActivityProfileLinks: b, customCTA: O, popoutClassname: y, popoutPosition: _ = 'right' } = e,
        w = a.useRef(null),
        I = (0, o.e7)([d.Z, c.Z], () => c.Z.getChannel(d.Z.getChannelId())),
        P = (0, o.e7)([u.default], () => u.default.getUser(t.author_id)),
        { nick: E, avatar: S } = a.useMemo(() => {
            let e = null == P ? void 0 : P.getAvatarURL(null == I ? void 0 : I.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == I ? void 0 : I.guild_id, null == I ? void 0 : I.id, P),
                avatar: e
            };
        }, [P, I]);
    return null == P
        ? null
        : (0, n.jsx)(s.yRy, {
              targetElementRef: w,
              position: _,
              renderPopout: (e) => {
                  let { closePopout: a, updatePosition: l } = e;
                  return (0, n.jsx)('div', {
                      className: y,
                      children: (0, n.jsx)(g.J, {
                          entry: t,
                          closePopout: a,
                          updatePopoutPosition: l,
                          onReaction: () => {
                              (null == i || i(), r(), a());
                          },
                          onUserPopoutClosed: () => a(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: b
                      })
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == h || h();
              },
              children: (e) => {
                  var r, a;
                  return (0, n.jsx)(
                      s.P3F,
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              ('function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      ((n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n));
                                  }));
                          }
                          return e;
                      })({ innerRef: w }, e)),
                      (a = a =
                          {
                              className: j.profileEntryCard,
                              children: (0, n.jsx)(s.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  },
                                  children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('img', {
                                              className: j.avatar,
                                              src: S,
                                              alt: x.intl.formatToPlainString(x.t.IzVXxc, { userName: E })
                                          }),
                                          (0, n.jsx)('div', {
                                              className: j.playerInfo,
                                              children: (0, n.jsxs)('div', {
                                                  className: l()(v.column, v.gapXs),
                                                  children: [
                                                      (0, n.jsx)(s.Text, {
                                                          variant: 'text-md/medium',
                                                          color: 'text-primary',
                                                          lineClamp: 1,
                                                          children: E
                                                      }),
                                                      (0, n.jsx)(f.Gk, {
                                                          location: f.Gt.APP_LAUNCHER,
                                                          children: p.W.map((e, r) => (0, n.jsx)(e, { entry: t }, r))
                                                      })
                                                  ]
                                              })
                                          }),
                                          null != O
                                              ? O
                                              : (0, n.jsx)('div', {
                                                    className: j.reactions,
                                                    children: (0, n.jsx)(s.n$P, { size: 'sm' })
                                                })
                                      ]
                                  })
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(a)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                            }),
                      r)
                  );
              }
          });
};
