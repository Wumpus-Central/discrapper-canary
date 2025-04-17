t.d(n, { Z: () => y });
var o = t(200651);
t(192379);
var r = t(481060),
    i = t(194359),
    l = t(906732),
    s = t(475413),
    c = t(934861),
    a = t(156518),
    d = t(690501),
    u = t(562831),
    f = t(981631),
    p = t(388032),
    b = t(940427);
function m(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function I(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, o);
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
                o,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        o,
                        r = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++) (t = i[o]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]);
            }
            return r;
        })(e, ['user', 'analyticsLocation']);
    let i = (0, a.Y)({
        user: n,
        analyticsLocation: t
    });
    return 0 === i.length
        ? (0, o.jsx)(s.ef, I(m({}, r), { disabled: !0 }))
        : (0, o.jsx)(a.Z, {
              menuItems: i,
              children: (e) => (0, o.jsx)('div', I(m({}, e), { children: (0, o.jsx)(s.ef, m({}, r)) }))
          });
}
function g(e) {
    let { gameFriends: n, hasIncomingPendingGameFriends: t, hasOutgoingPendingGameFriends: r, user: i, analyticsLocation: l } = e,
        {
            onMouseEnter: s,
            ariaLabel: c,
            tooltipText: a,
            icon: u
        } = (0, d.N)({
            gameFriends: n,
            hasIncomingPendingGameFriends: t,
            hasOutgoingPendingGameFriends: r
        });
    return (0, o.jsx)(h, {
        tooltipText: a,
        ariaLabel: c,
        icon: u,
        onMouseEnter: s,
        user: i,
        analyticsLocation: l
    });
}
function y(e) {
    let { isCurrentUser: n, user: t, relationshipType: a, friendToken: d, onClose: m } = e,
        { newestAnalyticsLocation: I } = (0, l.ZP)(),
        { gameFriends: y, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: v } = (0, u.H)({ userId: t.id }),
        x = y.length > 0 || j || v;
    return n || a === f.OGo.BLOCKED
        ? null
        : a === f.OGo.FRIEND || t.bot
          ? (0, o.jsx)('div', {
                className: b.multipleButtons,
                children: (0, o.jsx)(c.c, {
                    userId: t.id,
                    onClose: m
                })
            })
          : a === f.OGo.NONE && x
            ? (0, o.jsxs)('div', {
                  className: b.multipleButtons,
                  children: [
                      (0, o.jsx)(g, {
                          user: t,
                          analyticsLocation: I,
                          gameFriends: y,
                          hasIncomingPendingGameFriends: v,
                          hasOutgoingPendingGameFriends: j
                      }),
                      (0, o.jsx)(c.c, {
                          userId: t.id,
                          onClose: m
                      })
                  ]
              })
            : a === f.OGo.PENDING_OUTGOING
              ? (0, o.jsxs)('div', {
                    className: b.multipleButtons,
                    children: [
                        (0, o.jsx)(h, {
                            icon: r.iHX,
                            tooltipText: p.NW.string(p.t.zz2i8v),
                            user: t,
                            analyticsLocation: I
                        }),
                        (0, o.jsx)(c.c, {
                            userId: t.id,
                            onClose: m
                        })
                    ]
                })
              : a === f.OGo.PENDING_INCOMING
                ? (0, o.jsxs)('div', {
                      className: b.multipleButtons,
                      children: [
                          (0, o.jsx)(h, {
                              icon: r.iHX,
                              tooltipText: p.NW.string(p.t.ZOFd1N),
                              user: t,
                              analyticsLocation: I
                          }),
                          (0, o.jsx)(c.c, {
                              userId: t.id,
                              onClose: m
                          })
                      ]
                  })
                : (0, o.jsxs)('div', {
                      className: b.multipleButtons,
                      children: [
                          (0, o.jsx)(c.v, {
                              userId: t.id,
                              onClose: m
                          }),
                          (0, o.jsx)(s.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: r.oLu,
                              text: p.NW.string(p.t['7815aW']),
                              color: r.zxk.Colors.BRAND,
                              onClick: () => {
                                  i.Z.addRelationship({
                                      userId: t.id,
                                      context: { location: I },
                                      friendToken: d
                                  });
                              }
                          })
                      ]
                  });
}
