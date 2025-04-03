n.d(t, { Z: () => y });
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(91192),
    l = n(442837),
    s = n(481060),
    c = n(209613),
    d = n(430824),
    u = n(855981),
    m = n(55543),
    p = n(693546),
    f = n(826581),
    x = n(246364),
    h = n(328977),
    b = n(571728),
    j = n(762660),
    _ = n(388032),
    g = n(766879);
let v = () => null;
function C(e) {
    let { status: t } = e,
        n = _.NW.string(_.t['/wqiSk']),
        a = _.NW.string(_.t.o47YZm);
    switch (t) {
        case x.wB.REJECTED:
            (n = _.NW.string(_.t['7YSJ6e'])), (a = _.NW.string(_.t.i05OUV));
            break;
        case x.wB.APPROVED:
            (n = _.NW.string(_.t.bv82GR)), (a = _.NW.string(_.t.D4OUHR));
            break;
        default:
            (n = _.NW.string(_.t['/wqiSk'])), (a = _.NW.string(_.t.o47YZm));
    }
    return (0, r.jsxs)('div', {
        className: g.emptyContainer,
        children: [
            (0, r.jsxs)('div', {
                className: g.emptyIcon,
                children: [
                    (0, r.jsx)(m.Z, { className: g.star }),
                    (0, r.jsx)(s.dz2, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.checkmark
                    }),
                    (0, r.jsx)(u.Z, { className: g.plus })
                ]
            }),
            (0, r.jsx)(s.X6q, {
                variant: 'heading-xl/semibold',
                children: n
            }),
            (0, r.jsx)(s.Text, {
                color: 'header-secondary',
                className: g.emptyBody,
                variant: 'text-sm/normal',
                children: a
            })
        ]
    });
}
let y = function (e) {
    var t;
    let { applicationStatus: n, guildJoinRequests: a, guildId: u, onScroll: m, listRef: y, atMaxMemberCapacity: N } = e,
        T = (0, l.e7)([d.Z], () => d.Z.getGuild(u), [u]),
        I = (0, l.e7)([f.Z], () => f.Z.isFetching()),
        w = I ? [a.length + 25] : [a.length],
        O = (0, h.L)({ guildId: u }),
        P = null != (t = (0, b.A)({ guildId: u })) ? t : 0,
        R = (0, c.Z)('guild-join-requests'),
        E = (e) => {
            let { row: t } = e,
                o = a[t];
            return null == o
                ? (0, r.jsx)(j.h, {}, t)
                : (0, r.jsx)(
                      j.C,
                      {
                          className: i()({
                              [g.selected]: O === o,
                              [g.siblingSelected]: O === a[t - 1]
                          }),
                          guild: T,
                          guildJoinRequest: o,
                          onClick: () => p.Z.setSelectedGuildJoinRequest(u, o),
                          applicationStatus: n,
                          atMaxMemberCapacity: N
                      },
                      ''.concat(o.userId, '-').concat(o.applicationStatus, '-').concat(t)
                  );
        };
    return I || 0 !== a.length
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  0 !== P &&
                      n === x.wB.SUBMITTED &&
                      (0, r.jsx)(s.Text, {
                          className: g.title,
                          variant: 'text-xs/semibold',
                          color: 'header-secondary',
                          children: (function (e, t) {
                              let n = t.toLocaleString();
                              switch (e) {
                                  case x.wB.SUBMITTED:
                                      return _.NW.formatToPlainString(_.t['s/46en'], { count: n });
                                  case x.wB.REJECTED:
                                      return _.NW.formatToPlainString(_.t['9voQIC'], { count: n });
                                  case x.wB.APPROVED:
                                      return _.NW.formatToPlainString(_.t['8hLZsb'], { count: n });
                                  default:
                                      return '';
                              }
                          })(n, P).toUpperCase()
                      }),
                  (0, r.jsx)(o.bG, {
                      navigator: R,
                      children: (0, r.jsx)(o.SJ, {
                          children: (e) => {
                              var { ref: t, role: n } = e,
                                  a = (function (e, t) {
                                      if (null == e) return {};
                                      var n,
                                          r,
                                          a = (function (e, t) {
                                              if (null == e) return {};
                                              var n,
                                                  r,
                                                  a = {},
                                                  i = Object.keys(e);
                                              for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                                              return a;
                                          })(e, t);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                                      }
                                      return a;
                                  })(e, ['ref', 'role']);
                              return (0, r.jsx)(
                                  s.aVo,
                                  (function (e) {
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
                                  })(
                                      {
                                          innerRole: n,
                                          innerAriaLabel: _.NW.string(_.t['9Oq93t']),
                                          ref: (e) => {
                                              var n;
                                              (y.current = e), (t.current = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null);
                                          },
                                          paddingTop: 0,
                                          paddingBottom: 16,
                                          sectionHeight: 0,
                                          rowHeight: 64,
                                          renderSection: v,
                                          renderRow: E,
                                          sections: w,
                                          onScroll: m,
                                          fade: !0
                                      },
                                      a
                                  ),
                                  'guild-application-review'
                              );
                          }
                      })
                  })
              ]
          })
        : (0, r.jsx)(C, { status: n });
};
