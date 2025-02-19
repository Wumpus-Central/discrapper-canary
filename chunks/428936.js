n.d(t, { Z: () => h }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(399606),
    s = n(481060),
    c = n(823596),
    u = n(201070),
    d = n(893966),
    C = n(527379),
    m = n(388032),
    b = n(391274);
function p(e) {
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
function f(e, t) {
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
function h(e) {
    let { guildId: t, onPageChange: n } = e,
        [o, h] = l.useTransition(),
        j = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        g = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
        x = (0, u.$j)(t),
        v = l.useMemo(
            () =>
                c.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })),
            []
        ),
        y = new Intl.NumberFormat(m.NW.currentLocale).format(j),
        O = m.NW.formatToPlainString(m.t.RNDnQ0, { count: x ? '...' : y }),
        N = j > g.pageSize || x,
        _ = j > c.LU['0'];
    return (0, r.jsxs)('div', {
        className: a()(b.paginationContainer),
        children: [
            (0, r.jsx)('div', {
                className: a()(b.pageSizeSelection),
                children: _
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: m.NW.string(m.t.jNwLu7)
                              }),
                              (0, r.jsx)(s.PhF, {
                                  'aria-label': O,
                                  className: b.pageSizeInput,
                                  options: v,
                                  isSelected: (e) => e === g.pageSize,
                                  select: (e) => {
                                      h(() => {
                                          (0, C._o)(t, f(p({}, g), { pageSize: e }));
                                      });
                                  },
                                  serialize: (e) => ''.concat(e),
                                  popoutPosition: 'top',
                                  popoutWidth: 72
                              }),
                              (0, r.jsx)(s.ua7, {
                                  text: m.NW.string(m.t.ZTNur6),
                                  shouldShow: x,
                                  children: (e) =>
                                      (0, r.jsx)(
                                          s.Text,
                                          f(
                                              p(
                                                  {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      className: a()(b.pageLabel)
                                                  },
                                                  e
                                              ),
                                              { children: O }
                                          )
                                      )
                              })
                          ]
                      })
                    : (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: m.NW.format(m.t.GZpwMD, { count: j })
                      })
            }),
            (0, r.jsx)('div', {
                className: a()(b.pagination),
                children:
                    N &&
                    (0, r.jsx)(s.DsT, {
                        className: a()(b.paginationInput),
                        totalCount: j,
                        pageSize: g.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: g.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    h(() => {
                                        (0, C._o)(t, f(p({}, g), { currentPage: e }));
                                    });
                                });
                        },
                        maxVisiblePages: c.hW
                    })
            })
        ]
    });
}
