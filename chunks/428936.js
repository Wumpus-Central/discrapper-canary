n.d(t, { Z: () => p }), n(388685);
var r = n(200651),
    l = n(192379),
    o = n(399606),
    i = n(481060),
    a = n(823596),
    s = n(201070),
    c = n(893966),
    u = n(527379),
    C = n(388032),
    d = n(673285);
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
                a.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })),
            []
        ),
        O = new Intl.NumberFormat(C.NW.currentLocale).format(h),
        y = C.NW.formatToPlainString(C.t.RNDnQ0, { count: g ? '...' : O }),
        v = h > j.pageSize || g,
        N = h > a.LU['0'];
    return (0, r.jsxs)('div', {
        className: d.paginationContainer,
        children: [
            (0, r.jsx)('div', {
                className: d.pageSizeSelection,
                children: N
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: C.NW.string(C.t.jNwLu7)
                              }),
                              (0, r.jsx)(i.PhF, {
                                  'aria-label': y,
                                  className: d.pageSizeInput,
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
                              (0, r.jsx)(i.ua7, {
                                  text: C.NW.string(C.t.ZTNur6),
                                  shouldShow: g,
                                  children: (e) =>
                                      (0, r.jsx)(
                                          i.Text,
                                          b(
                                              m(
                                                  {
                                                      variant: 'text-md/normal',
                                                      color: 'text-muted',
                                                      className: d.pageLabel
                                                  },
                                                  e
                                              ),
                                              { children: y }
                                          )
                                      )
                              })
                          ]
                      })
                    : (0, r.jsx)(i.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: C.NW.format(C.t.GZpwMD, { count: h })
                      })
            }),
            (0, r.jsx)('div', {
                className: d.pagination,
                children:
                    v &&
                    (0, r.jsx)(i.DsT, {
                        className: d.paginationInput,
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
                        maxVisiblePages: a.hW
                    })
            })
        ]
    });
}
