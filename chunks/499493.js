n.d(t, { Z: () => v });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(592125),
    u = n(944486),
    d = n(594174),
    p = n(5192),
    m = n(178762),
    f = n(91140),
    h = n(297781),
    b = n(388032),
    _ = n(152790),
    y = n(263930);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = (e) => {
    let { entry: t, onClose: n, onReaction: l, onRequestOpen: v, disableActivityProfileLinks: g, customCTA: N, popoutClassname: j, popoutPosition: P = 'right' } = e,
        E = r.useRef(null),
        O = (0, a.e7)([u.Z, c.Z], () => c.Z.getChannel(u.Z.getChannelId())),
        A = (0, a.e7)([d.default], () => d.default.getUser(t.author_id)),
        { nick: I, avatar: S } = r.useMemo(() => {
            let e = null == A ? void 0 : A.getAvatarURL(null == O ? void 0 : O.guild_id, 48, !1);
            return {
                nick: p.ZP.getName(null == O ? void 0 : O.guild_id, null == O ? void 0 : O.id, A),
                avatar: e
            };
        }, [A, O]);
    return null == A
        ? null
        : (0, i.jsx)(s.yRy, {
              targetElementRef: E,
              position: P,
              renderPopout: (e) => {
                  let { closePopout: r, updatePosition: o } = e;
                  return (0, i.jsx)('div', {
                      className: j,
                      children: (0, i.jsx)(m.J, {
                          entry: t,
                          closePopout: r,
                          updatePopoutPosition: o,
                          onReaction: () => {
                              null == l || l(), n(), r();
                          },
                          onUserPopoutClosed: () => r(),
                          disableGameProfileLinks: !0,
                          disableActivityProfileLinks: g
                      })
                  });
              },
              positionKey: "'content-entry-".concat(t.id),
              onRequestOpen: () => {
                  null == v || v();
              },
              children: (e) => {
                  let n =
                      null != N
                          ? C(x({}, e), {
                                onClick: () => {}
                            })
                          : e;
                  return (0, i.jsx)(
                      s.P3F,
                      C(x({ innerRef: E }, n), {
                          className: _.profileEntryCard,
                          children: (0, i.jsx)(s.tEY, {
                              offset: {
                                  top: 4,
                                  bottom: 4,
                                  left: 4,
                                  right: 4
                              },
                              children: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('img', {
                                          className: _.avatar,
                                          src: S,
                                          alt: b.NW.formatToPlainString(b.t.IzVXxc, { userName: I })
                                      }),
                                      (0, i.jsx)('div', {
                                          className: _.playerInfo,
                                          children: (0, i.jsxs)('div', {
                                              className: o()(y.column, y.gapXs),
                                              children: [
                                                  (0, i.jsx)(s.Text, {
                                                      variant: 'text-md/medium',
                                                      color: 'text-primary',
                                                      lineClamp: 1,
                                                      children: I
                                                  }),
                                                  (0, i.jsx)(h.Gk, {
                                                      location: h.Gt.GAME_PROFILE,
                                                      children: f.W.map((e, n) => (0, i.jsx)(e, { entry: t }, n))
                                                  })
                                              ]
                                          })
                                      }),
                                      null != N
                                          ? N
                                          : (0, i.jsx)('div', {
                                                className: _.reactions,
                                                children: (0, i.jsx)(s.n$P, { size: 'sm' })
                                            })
                                  ]
                              })
                          })
                      })
                  );
              }
          });
};
