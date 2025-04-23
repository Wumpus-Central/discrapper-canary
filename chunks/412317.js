t.d(n, { Z: () => m });
var l = t(200651);
t(192379);
var r = t(481060),
    i = t(194359),
    o = t(906732),
    s = t(475413),
    u = t(934861),
    a = t(156518),
    c = t(690501),
    d = t(562831),
    f = t(981631),
    p = t(388032),
    g = t(940427);
function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function v(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function h(e) {
    var { user: n, analyticsLocation: t } = e,
        r = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['user', 'analyticsLocation']);
    let i = (0, a.Y)({
        user: n,
        analyticsLocation: t
    });
    return 0 === i.length
        ? (0, l.jsx)(s.ef, v(b({}, r), { disabled: !0 }))
        : (0, l.jsx)(a.Z, {
              menuItems: i,
              children: (e) => (0, l.jsx)('div', v(b({}, e), { children: (0, l.jsx)(s.ef, b({}, r)) }))
          });
}
function j(e) {
    let { gameFriends: n, hasIncomingPendingGameFriends: t, hasOutgoingPendingGameFriends: r, user: i, analyticsLocation: o } = e,
        {
            onMouseEnter: s,
            ariaLabel: u,
            tooltipText: a,
            icon: d
        } = (0, c.N)({
            gameFriends: n,
            hasIncomingPendingGameFriends: t,
            hasOutgoingPendingGameFriends: r
        });
    return (0, l.jsx)(h, {
        tooltipText: a,
        ariaLabel: u,
        icon: d,
        onMouseEnter: s,
        user: i,
        analyticsLocation: o
    });
}
function m(e) {
    let { isCurrentUser: n, user: t, relationshipType: a, friendToken: c, onClose: b } = e,
        { newestAnalyticsLocation: v } = (0, o.ZP)(),
        { gameFriends: m, hasOutgoingPendingGameFriends: O, hasIncomingPendingGameFriends: y } = (0, d.H)({ userId: t.id }),
        Z = m.length > 0 || O || y;
    return n || a === f.OGo.BLOCKED
        ? null
        : a === f.OGo.FRIEND || t.bot
          ? (0, l.jsx)('div', {
                className: g.multipleButtons,
                children: (0, l.jsx)(u.c, {
                    userId: t.id,
                    onClose: b
                })
            })
          : a === f.OGo.NONE && Z
            ? (0, l.jsxs)('div', {
                  className: g.multipleButtons,
                  children: [
                      (0, l.jsx)(j, {
                          user: t,
                          analyticsLocation: v,
                          gameFriends: m,
                          hasIncomingPendingGameFriends: y,
                          hasOutgoingPendingGameFriends: O
                      }),
                      (0, l.jsx)(u.c, {
                          userId: t.id,
                          onClose: b
                      })
                  ]
              })
            : a === f.OGo.PENDING_OUTGOING
              ? (0, l.jsxs)('div', {
                    className: g.multipleButtons,
                    children: [
                        (0, l.jsx)(h, {
                            icon: r.iHX,
                            tooltipText: p.intl.string(p.t.zz2i8v),
                            user: t,
                            analyticsLocation: v
                        }),
                        (0, l.jsx)(u.c, {
                            userId: t.id,
                            onClose: b
                        })
                    ]
                })
              : a === f.OGo.PENDING_INCOMING
                ? (0, l.jsxs)('div', {
                      className: g.multipleButtons,
                      children: [
                          (0, l.jsx)(h, {
                              icon: r.iHX,
                              tooltipText: p.intl.string(p.t.ZOFd1N),
                              user: t,
                              analyticsLocation: v
                          }),
                          (0, l.jsx)(u.c, {
                              userId: t.id,
                              onClose: b
                          })
                      ]
                  })
                : (0, l.jsxs)('div', {
                      className: g.multipleButtons,
                      children: [
                          (0, l.jsx)(u.v, {
                              userId: t.id,
                              onClose: b
                          }),
                          (0, l.jsx)(s.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: r.oLu,
                              text: p.intl.string(p.t['7815aW']),
                              color: r.zxk.Colors.BRAND,
                              onClick: () => {
                                  i.Z.addRelationship({
                                      userId: t.id,
                                      context: { location: v },
                                      friendToken: c
                                  });
                              }
                          })
                      ]
                  });
}
