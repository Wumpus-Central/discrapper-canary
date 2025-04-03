n.d(t, { Z: () => _ }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(392711),
    l = n.n(a),
    o = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(317632),
    d = n(174767),
    p = n(240126),
    m = n(791914),
    f = n(326838),
    h = n(388032),
    g = n(175646);
function _(e) {
    let { setTab: t, badgeState: a, closePopout: _ } = e,
        x = (0, o.Wu)([u.Z], () => u.Z.getInvites()),
        y = (0, o.e7)([u.Z], () => u.Z.getInviteStatuses()),
        [E, v] = i.useMemo(
            () =>
                l().partition(x, (e) => {
                    var t;
                    return (null == (t = y[e.invite_id]) ? void 0 : t.joinable) !== !1 && (Date.now() - new Date(e.created_at).getTime()) / 1000 < e.ttl;
                }),
            [x, y]
        );
    return (i.useEffect(() => {
        (0, d.sJ)();
    }),
    0 === x.length)
        ? (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(m.Z, {
                      tab: s.X.GAME_INVITES,
                      setTab: t,
                      badgeState: a,
                      closePopout: _
                  }),
                  (0, r.jsx)('div', {
                      className: g.__invalid_emptyStateContainer,
                      children: (0, r.jsx)(p.Z, {
                          Icon: c.iWm,
                          header: h.NW.string(h.t.PbSPWV),
                          tip: h.NW.string(h.t.BxNbS0)
                      })
                  })
              ]
          })
        : (0, r.jsxs)('div', {
              className: g.container,
              children: [
                  (0, r.jsx)(m.Z, {
                      tab: s.X.GAME_INVITES,
                      setTab: t,
                      badgeState: a,
                      closePopout: _,
                      children: (0, r.jsx)(c.M0o, {
                          className: g.__invalid_deleteButton,
                          tooltip: h.NW.string(h.t.Zy3MR0),
                          color: c.YX$.SECONDARY,
                          icon: (0, r.jsx)(c.XHJ, { size: 'xs' }),
                          onClick: function () {
                              (0, c.ZDy)(async () => {
                                  let { default: e } = await n.e('13111').then(n.bind(n, 93756));
                                  return (t) => {
                                      var n, i;
                                      return (0, r.jsx)(
                                          e,
                                          ((n = (function (e) {
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
                                          })({}, t)),
                                          (i = i =
                                              {
                                                  onDelete: async () => {
                                                      await t.onClose();
                                                  }
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var r = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, r);
                                                    }
                                                    return n;
                                                })(Object(i)).forEach(function (e) {
                                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                }),
                                          n)
                                      );
                                  };
                              });
                          }
                      })
                  }),
                  (0, r.jsx)(c.h21, {
                      children: (0, r.jsxs)('div', {
                          className: g.invitesContainer,
                          children: [
                              E.length > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(b, { title: h.NW.string(h.t.yflAJS) }),
                                          (0, r.jsx)(r.Fragment, {
                                              children: E.map((e) =>
                                                  (0, r.jsx)(
                                                      f.Z,
                                                      {
                                                          invite: e,
                                                          expired: !1
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  }),
                              v.length > 0 &&
                                  (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(b, { title: h.NW.string(h.t.f0Ia4e) }),
                                          (0, r.jsx)(r.Fragment, {
                                              children: v.map((e) =>
                                                  (0, r.jsx)(
                                                      f.Z,
                                                      {
                                                          invite: e,
                                                          expired: !0
                                                      },
                                                      e.invite_id
                                                  )
                                              )
                                          })
                                      ]
                                  })
                          ]
                      })
                  })
              ]
          });
}
function b(e) {
    let { title: t } = e;
    return (0, r.jsxs)('div', {
        className: g.headerContainer,
        children: [
            (0, r.jsx)(c.Text, {
                className: g.headerTitle,
                variant: 'text-xs/semibold',
                color: 'interactive-normal',
                children: t
            }),
            (0, r.jsx)('div', { className: g.headerDivider })
        ]
    });
}
