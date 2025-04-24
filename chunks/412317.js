n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var o = n(481060),
    l = n(194359),
    i = n(906732),
    c = n(475413),
    u = n(934861),
    s = n(156518),
    a = n(690501),
    d = n(562831),
    f = n(981631),
    b = n(388032),
    p = n(940427);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    var { user: t, analyticsLocation: n } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['user', 'analyticsLocation']);
    let l = (0, s.Y)({
        user: t,
        analyticsLocation: n
    });
    return 0 === l.length
        ? (0, r.jsx)(c.ef, g(O({}, o), { disabled: !0 }))
        : (0, r.jsx)(s.Z, {
              menuItems: l,
              children: (e) => (0, r.jsx)('div', g(O({}, e), { children: (0, r.jsx)(c.ef, O({}, o)) }))
          });
}
function j(e) {
    let { gameFriends: t, hasIncomingPendingGameFriends: n, hasOutgoingPendingGameFriends: o, user: l, analyticsLocation: i } = e,
        {
            onMouseEnter: c,
            ariaLabel: u,
            tooltipText: s,
            icon: d
        } = (0, a.N)({
            gameFriends: t,
            hasIncomingPendingGameFriends: n,
            hasOutgoingPendingGameFriends: o
        });
    return (0, r.jsx)(y, {
        tooltipText: s,
        ariaLabel: u,
        icon: d,
        onMouseEnter: c,
        user: l,
        analyticsLocation: i
    });
}
function v(e) {
    let { isCurrentUser: t, user: n, relationshipType: s, friendToken: a, autoFocus: O, onClose: g } = e,
        { newestAnalyticsLocation: v } = (0, i.ZP)(),
        { gameFriends: h, hasOutgoingPendingGameFriends: m, hasIncomingPendingGameFriends: P } = (0, d.H)({ userId: n.id }),
        x = h.length > 0 || m || P;
    return t || s === f.OGo.BLOCKED
        ? null
        : s === f.OGo.FRIEND || n.bot
          ? (0, r.jsx)('div', {
                className: p.multipleButtons,
                children: (0, r.jsx)(u.c, {
                    userId: n.id,
                    onClose: g,
                    autoFocus: O
                })
            })
          : s === f.OGo.NONE && x
            ? (0, r.jsxs)('div', {
                  className: p.multipleButtons,
                  children: [
                      (0, r.jsx)(j, {
                          user: n,
                          analyticsLocation: v,
                          gameFriends: h,
                          hasIncomingPendingGameFriends: P,
                          hasOutgoingPendingGameFriends: m
                      }),
                      (0, r.jsx)(u.c, {
                          userId: n.id,
                          onClose: g,
                          autoFocus: O
                      })
                  ]
              })
            : s === f.OGo.PENDING_OUTGOING
              ? (0, r.jsxs)('div', {
                    className: p.multipleButtons,
                    children: [
                        (0, r.jsx)(y, {
                            icon: o.iHX,
                            tooltipText: b.intl.string(b.t.zz2i8v),
                            user: n,
                            analyticsLocation: v
                        }),
                        (0, r.jsx)(u.c, {
                            userId: n.id,
                            onClose: g,
                            autoFocus: O
                        })
                    ]
                })
              : s === f.OGo.PENDING_INCOMING
                ? (0, r.jsxs)('div', {
                      className: p.multipleButtons,
                      children: [
                          (0, r.jsx)(y, {
                              icon: o.iHX,
                              tooltipText: b.intl.string(b.t.ZOFd1N),
                              user: n,
                              analyticsLocation: v
                          }),
                          (0, r.jsx)(u.c, {
                              userId: n.id,
                              onClose: g,
                              autoFocus: O
                          })
                      ]
                  })
                : (0, r.jsxs)('div', {
                      className: p.multipleButtons,
                      children: [
                          (0, r.jsx)(u.v, {
                              userId: n.id,
                              onClose: g
                          }),
                          (0, r.jsx)(c.tG, {
                              action: 'SEND_FRIEND_REQUEST',
                              icon: o.oLu,
                              text: b.intl.string(b.t['7815aW']),
                              color: o.zxk.Colors.BRAND,
                              autoFocus: O,
                              onClick: () => {
                                  l.Z.addRelationship({
                                      userId: n.id,
                                      context: { location: v },
                                      friendToken: a
                                  });
                              }
                          })
                      ]
                  });
}
