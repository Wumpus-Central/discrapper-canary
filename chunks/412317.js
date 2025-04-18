t.d(n, { Z: () => y });
var r = t(200651);
t(192379);
var o = t(481060),
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
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function h(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function I(e) {
    var { user: n, analyticsLocation: t } = e,
        o = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (t = i[r]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['user', 'analyticsLocation']);
    let i = (0, a.Y)({
        user: n,
        analyticsLocation: t
    });
    return 0 === i.length
        ? (0, r.jsx)(s.ef, h(m({}, o), { disabled: !0 }))
        : (0, r.jsx)(a.Z, {
              menuItems: i,
              children: (e) => (0, r.jsx)('div', h(m({}, e), { children: (0, r.jsx)(s.ef, m({}, o)) }))
          });
}
function g(e) {
    let { gameFriends: n, hasIncomingPendingGameFriends: t, hasOutgoingPendingGameFriends: o, user: i, analyticsLocation: l } = e,
        {
            onMouseEnter: s,
            ariaLabel: c,
            tooltipText: a,
            icon: u
        } = (0, d.N)({
            gameFriends: n,
            hasIncomingPendingGameFriends: t,
            hasOutgoingPendingGameFriends: o
        });
    return (0, r.jsx)(I, {
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
        { newestAnalyticsLocation: h } = (0, l.ZP)(),
        { gameFriends: y, hasOutgoingPendingGameFriends: j, hasIncomingPendingGameFriends: v } = (0, u.H)({ userId: t.id }),
        x = y.length > 0 || j || v;
    return n || a === f.OGo.BLOCKED
        ? null
        : a === f.OGo.FRIEND || t.bot
          ? (0, r.jsx)('div', {
                className: b.multipleButtons,
                children: (0, r.jsx)(c.c, {
                    userId: t.id,
                    onClose: m
                })
            })
          : a === f.OGo.NONE && x
            ? (0, r.jsxs)('div', {
                  className: b.multipleButtons,
                  children: [
                      (0, r.jsx)(g, {
                          user: t,
                          analyticsLocation: h,
                          gameFriends: y,
                          hasIncomingPendingGameFriends: v,
                          hasOutgoingPendingGameFriends: j
                      }),
                      (0, r.jsx)(c.c, {
                          userId: t.id,
                          onClose: m
                      })
                  ]
              })
            : a === f.OGo.PENDING_OUTGOING
              ? (0, r.jsxs)('div', {
                    className: b.multipleButtons,
                    children: [
                        (0, r.jsx)(I, {
                            icon: o.iHX,
                            tooltipText: p.NW.string(p.t.zz2i8v),
                            user: t,
                            analyticsLocation: h
                        }),
                        (0, r.jsx)(c.c, {
                            userId: t.id,
                            onClose: m
                        })
                    ]
                })
              : a === f.OGo.PENDING_INCOMING
                ? (0, r.jsxs)('div', {
                      className: b.multipleButtons,
                      children: [
                          (0, r.jsx)(I, {
                              icon: o.iHX,
                              tooltipText: p.NW.string(p.t.ZOFd1N),
                              user: t,
                              analyticsLocation: h
                          }),
                          (0, r.jsx)(c.c, {
                              userId: t.id,
                              onClose: m
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: b.multipleButtons,
                      children: [
                          (0, r.jsx)(c.v, {
                              userId: t.id,
                              onClose: m
                          }),
                          (0, r.jsx)(s.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: o.oLu,
                              text: p.NW.string(p.t['7815aW']),
                              color: o.zxk.Colors.BRAND,
                              onClick: () => {
                                  i.Z.addRelationship({
                                      userId: t.id,
                                      context: { location: h },
                                      friendToken: d
                                  });
                              }
                          })
                      ]
                  });
}
