n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(399606),
    a = n(481060),
    i = n(823596),
    s = n(201070),
    c = n(893966),
    u = n(527379),
    d = n(388032),
    C = n(673285);
function m(e) {
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
function b(e, t) {
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
function p(e) {
    let { guildId: t, onPageChange: n } = e,
        [p, f] = l.useTransition(),
        h = (0, o.e7)([c.Z], () => c.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        j = (0, o.cj)([c.Z], () => c.Z.getPaginationStateByGuildId(t), [t]),
        g = (0, s.$j)(t),
        x = l.useMemo(
            () =>
                i.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })),
            []
        ),
        y = new Intl.NumberFormat(d.NW.currentLocale).format(h),
        v = d.NW.formatToPlainString(d.t.RNDnQ0, { count: g ? '...' : y }),
        O = h > j.pageSize || g,
        N = h > i.LU['0'];
    return (0, r.jsxs)('div', {
        className: C.paginationContainer,
        children: [
            (0, r.jsx)('div', {
                className: C.pageSizeSelection,
                children: N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: d.NW.string(d.t.jNwLu7)
                              }),
                              (0, r.jsx)(a.PhF, {
                                  'aria-label': v,
                                  className: C.pageSizeInput,
                                  options: x,
                                  isSelected: (e) => e === j.pageSize,
                                  select: (e) => {
                                      f(() => {
                                          (0, u._o)(t, b(m({}, j), { pageSize: e }));
                                      });
                                  },
                                  serialize: (e) => ''.concat(e),
                                  popoutPosition: 'top',
                                  popoutWidth: 72
                              }),
                              (0, r.jsx)(a.ua7, {
                                  text: d.NW.string(d.t.ZTNur6),
                                  shouldShow: g,
                                  children: (e) =>
                                      (0, r.jsx)(
                                          a.Text,
                                          b(
                                              m(
                                                  {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      className: C.pageLabel
                                                  },
                                                  e
                                              ),
                                              { children: v }
                                          )
                                      )
                              })
                          ]
                      })
                    : (0, r.jsx)(a.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: d.NW.format(d.t.GZpwMD, { count: h })
                      })
            }),
            (0, r.jsx)('div', {
                className: C.pagination,
                children:
                    O &&
                    (0, r.jsx)(a.DsT, {
                        className: C.paginationInput,
                        totalCount: h,
                        pageSize: j.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: j.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    f(() => {
                                        (0, u._o)(t, b(m({}, j), { currentPage: e }));
                                    });
                                });
                        },
                        maxVisiblePages: i.hW
                    })
            })
        ]
    });
}
