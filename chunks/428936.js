n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var l = n(200651),
    o = n(192379),
    i = n(120356),
    a = n.n(i),
    r = n(399606),
    s = n(481060),
    c = n(823596),
    C = n(201070),
    d = n(893966),
    u = n(527379),
    m = n(388032),
    h = n(77714);
function x(e) {
    let { guildId: t, onPageChange: n } = e,
        [i, x] = o.useTransition(),
        b = (0, r.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        f = (0, r.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
        g = (0, C.$j)(t),
        p = o.useMemo(
            () =>
                c.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString()
                })),
            []
        ),
        H = new Intl.NumberFormat(m.intl.currentLocale).format(b),
        j = m.intl.formatToPlainString(m.t.RNDnQ0, { count: g ? '...' : H }),
        v = b > f.pageSize || g,
        N = b > c.LU['0'];
    return (0, l.jsxs)('div', {
        className: a()(h.paginationContainer),
        children: [
            (0, l.jsx)('div', {
                className: a()(h.pageSizeSelection),
                children: N
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(s.Text, {
                                  variant: 'text-md/normal',
                                  color: 'text-muted',
                                  children: m.intl.string(m.t.jNwLu7)
                              }),
                              (0, l.jsx)(s.Select, {
                                  'aria-label': j,
                                  className: h.pageSizeInput,
                                  options: p,
                                  isSelected: (e) => e === f.pageSize,
                                  select: (e) => {
                                      x(() => {
                                          (0, u._o)(t, {
                                              ...f,
                                              pageSize: e
                                          });
                                      });
                                  },
                                  serialize: (e) => ''.concat(e),
                                  popoutPosition: 'top',
                                  popoutWidth: 72
                              }),
                              (0, l.jsx)(s.Tooltip, {
                                  text: m.intl.string(m.t.ZTNur6),
                                  shouldShow: g,
                                  children: (e) =>
                                      (0, l.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          color: 'text-muted',
                                          className: a()(h.pageLabel),
                                          ...e,
                                          children: j
                                      })
                              })
                          ]
                      })
                    : (0, l.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          color: 'text-muted',
                          children: m.intl.format(m.t.GZpwMD, { count: b })
                      })
            }),
            (0, l.jsx)('div', {
                className: a()(h.pagination),
                children:
                    v &&
                    (0, l.jsx)(s.Paginator, {
                        className: a()(h.paginationInput),
                        totalCount: b,
                        pageSize: f.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: f.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    x(() => {
                                        (0, u._o)(t, {
                                            ...f,
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
