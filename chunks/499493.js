r.d(t, { Z: () => x });
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    s = r(442837),
    o = r(481060),
    c = r(592125),
    u = r(944486),
    d = r(594174),
    m = r(5192),
    g = r(178762),
    f = r(91140),
    p = r(297781),
    O = r(388032),
    E = r(152790),
    h = r(263930);
let x = (e) => {
    let { entry: t, onClose: r, onReaction: a, onRequestOpen: x, disableActivityProfileLinks: v, customCTA: j, popoutClassname: b, popoutPosition: I = 'right' } = e,
        y = i.useRef(null),
        _ = (0, s.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        P = (0, s.e7)([d.default], () => d.default.getUser(t.author_id)),
        { nick: S, avatar: N } = i.useMemo(() => {
            let e = null == P ? void 0 : P.getAvatarURL(null == _ ? void 0 : _.guild_id, 48, !1);
            return {
                nick: m.ZP.getName(null == _ ? void 0 : _.guild_id, null == _ ? void 0 : _.id, P),
                avatar: e
            };
        }, [P, _]);
    return null == P
        ? null
        : (0, n.jsx)(o.yRy, {
              targetElementRef: y,
              position: I,
              renderPopout: (e) => {
                  let { closePopout: i, updatePosition: l } = e;
                  return (0, n.jsx)('div', {
                      className: b,
                      children: (0, n.jsx)(g.J, {
                          entry: t,
                          closePopout: i,
                          updatePopoutPosition: l,
                          onReaction: () => {
                              null == a || a(), r(), i();
                          },
                          onUserPopoutClosed: () => i(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: v
                      })
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == x || x();
              },
              children: (e) => {
                  var r, i;
                  return (0, n.jsx)(
                      o.P3F,
                      ((r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = null != arguments[t] ? arguments[t] : {},
                                  n = Object.keys(r);
                              'function' == typeof Object.getOwnPropertySymbols &&
                                  (n = n.concat(
                                      Object.getOwnPropertySymbols(r).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                      })
                                  )),
                                  n.forEach(function (t) {
                                      var n;
                                      (n = r[t]),
                                          t in e
                                              ? Object.defineProperty(e, t, {
                                                    value: n,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0
                                                })
                                              : (e[t] = n);
                                  });
                          }
                          return e;
                      })({ innerRef: y }, e)),
                      (i = i =
                          {
                              className: E.profileEntryCard,
                              children: (0, n.jsx)(o.tEY, {
                                  offset: {
                                      top: 4,
                                      bottom: 4,
                                      left: 4,
                                      right: 4
                                  },
                                  children: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)('img', {
                                              className: E.avatar,
                                              src: N,
                                              alt: O.intl.formatToPlainString(O.t.IzVXxc, { userName: S })
                                          }),
                                          (0, n.jsx)('div', {
                                              className: E.playerInfo,
                                              children: (0, n.jsxs)('div', {
                                                  className: l()(h.column, h.gapXs),
                                                  children: [
                                                      (0, n.jsx)(o.Text, {
                                                          variant: 'text-md/medium',
                                                          color: 'text-primary',
                                                          lineClamp: 1,
                                                          children: S
                                                      }),
                                                      (0, n.jsx)(p.Gk, {
                                                          location: p.Gt.APP_LAUNCHER,
                                                          children: f.W.map((e, r) => (0, n.jsx)(e, { entry: t }, r))
                                                      })
                                                  ]
                                              })
                                          }),
                                          null != j
                                              ? j
                                              : (0, n.jsx)('div', {
                                                    className: E.reactions,
                                                    children: (0, n.jsx)(o.n$P, { size: 'sm' })
                                                })
                                      ]
                                  })
                              })
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                          : (function (e, t) {
                                var r = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(e);
                                    r.push.apply(r, n);
                                }
                                return r;
                            })(Object(i)).forEach(function (e) {
                                Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                            }),
                      r)
                  );
              }
          });
};
