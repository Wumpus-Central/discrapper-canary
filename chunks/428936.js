l.d(t, { Z: () => x }), l(47120);
var n = l(200651),
    a = l(192379),
    i = l(120356),
    o = l.n(i),
    s = l(399606),
    r = l(481060),
    c = l(823596),
    C = l(201070),
    d = l(893966),
    u = l(527379),
    m = l(388032),
    h = l(77714);
function x(e) {
    let { guildId: t, onPageChange: l } = e,
        [i, x] = a.useTransition(),
        g = (0, s.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        H = (0, s.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
        b = (0, C.$j)(t),
        p = a.useMemo(
            () =>
                c.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })),
            []
        ),
        _ = new Intl.NumberFormat(m.intl.currentLocale).format(g),
        j = m.intl.formatToPlainString(m.t.RNDnQ0, { count: b ? '...' : _ }),
        f = g > H.pageSize || b,
        v = g > c.LU['0'];
    return (0, n.jsxs)('div', {
        className: o()(h.paginationContainer),
        children: [
            (0, n.jsx)('div', {
                className: o()(h.pageSizeSelection),
                children: v
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(r.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: m.intl.string(m.t.jNwLu7)
                              }),
                              (0, n.jsx)(r.PhF, {
                                  'aria-label': j,
                                  className: h.pageSizeInput,
                                  options: p,
                                  isSelected: (e) => e === H.pageSize,
                                  select: (e) => {
                                      x(() => {
                                          (0, u._o)(t, {
                                              ...H,
                                              pageSize: e
                                          });
                                      });
                                  },
                                  serialize: (e) => ''.concat(e),
                                  popoutPosition: 'top',
                                  popoutWidth: 72
                              }),
                              (0, n.jsx)(r.ua7, {
                                  text: m.intl.string(m.t.ZTNur6),
                                  shouldShow: b,
                                  children: (e) =>
                                      (0, n.jsx)(r.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          className: o()(h.pageLabel),
                                          ...e,
                                          children: j
                                      })
                              })
                          ]
                      })
                    : (0, n.jsx)(r.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: m.intl.format(m.t.GZpwMD, { count: g })
                      })
            }),
            (0, n.jsx)('div', {
                className: o()(h.pagination),
                children:
                    f &&
                    (0, n.jsx)(r.DsT, {
                        className: o()(h.paginationInput),
                        totalCount: g,
                        pageSize: H.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: H.currentPage,
                        onPageChange: (e) => {
                            null == l || l(e),
                                requestIdleCallback(() => {
                                    x(() => {
                                        (0, u._o)(t, {
                                            ...H,
                                            currentPage: e
                                        });
                                    });
                                });
                        },
                        maxVisiblePages: c.hW
                    })
            })
        ]
    });
}
