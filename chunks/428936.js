n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(399606),
    o = n(199849),
    a = n(28664),
    s = n(481060),
    c = n(823596),
    u = n(201070),
    d = n(893966),
    C = n(527379),
    m = n(388032),
    b = n(671408);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function p(e, t) {
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
        [h, g] = l.useTransition(),
        j = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        x = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
        v = (0, u.$j)(t),
        y = l.useMemo(
            () =>
                c.LU.map((e) => ({
                    value: e,
                    label: Number(e).toLocaleString(),
                })),
            [],
        ),
        O = new Intl.NumberFormat(m.intl.currentLocale).format(j),
        H = m.intl.formatToPlainString(m.t["RNDnQ/"], { count: v ? "..." : O }),
        _ = j > x.pageSize || v,
        w = j > c.LU["0"];
    return (0, r.jsxs)("div", {
        className: b.paginationContainer,
        children: [
            (0, r.jsx)("div", {
                className: b.pageSizeSelection,
                children: w
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: m.intl.string(m.t.jNwLu2),
                              }),
                              (0, r.jsx)(o.B6, {
                                  "aria-label": H,
                                  className: b.pageSizeInput,
                                  options: y,
                                  isSelected: (e) => e === x.pageSize,
                                  select: (e) => {
                                      g(() => {
                                          (0, C._o)(t, p(f({}, x), { pageSize: e }));
                                      });
                                  },
                                  serialize: (e) => "".concat(e),
                                  popoutPosition: "top",
                                  popoutWidth: 72,
                              }),
                              (0, r.jsx)(a.u, {
                                  text: m.intl.string(m.t.ZTNur7),
                                  shouldShow: v,
                                  children: (0, r.jsx)(s.Text, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      className: b.pageLabel,
                                      children: H,
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: m.intl.format(m.t.GZpwME, { count: j }),
                      }),
            }),
            (0, r.jsx)("div", {
                className: b.pagination,
                children:
                    _ &&
                    (0, r.jsx)(s.DsT, {
                        className: b.paginationInput,
                        totalCount: j,
                        pageSize: x.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: x.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    g(() => {
                                        (0, C._o)(t, p(f({}, x), { currentPage: e }));
                                    });
                                });
                        },
                        maxVisiblePages: c.hW,
                    }),
            }),
        ],
    });
}
