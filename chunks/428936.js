n.d(t, { Z: () => p }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(399606),
    o = n(28664),
    a = n(481060),
    s = n(823596),
    c = n(201070),
    d = n(893966),
    u = n(527379),
    C = n(388032),
    m = n(399158);
function b(e) {
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
function p(e) {
    let { guildId: t, onPageChange: n } = e,
        [p, h] = l.useTransition(),
        g = (0, i.e7)([d.Z], () => d.Z.getEstimatedMemberSearchCountByGuildId(t), [t]),
        j = (0, i.cj)([d.Z], () => d.Z.getPaginationStateByGuildId(t), [t]),
        x = (0, c.$j)(t),
        v = l.useMemo(
            () =>
                s.LU.map((e) => ({
                    id: e.toString(),
                    value: e,
                    label: Number(e).toLocaleString(),
                })),
            [],
        ),
        O = new Intl.NumberFormat(C.intl.currentLocale).format(g),
        y = C.intl.formatToPlainString(C.t["RNDnQ/"], { count: x ? "..." : O }),
        H = g > j.pageSize || x,
        w = g > s.LU["0"];
    return (0, r.jsxs)("div", {
        className: m.paginationContainer,
        children: [
            (0, r.jsx)("div", {
                className: m.pageSizeSelection,
                children: w
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: C.intl.string(C.t.jNwLu2),
                              }),
                              (0, r.jsx)(a.PhF, {
                                  selectionMode: "single",
                                  label: y,
                                  hideLabel: !0,
                                  options: v,
                                  value: j.pageSize,
                                  onSelectionChange: (e) => {
                                      h(() => {
                                          (0, u._o)(t, f(b({}, j), { pageSize: e }));
                                      });
                                  },
                              }),
                              (0, r.jsx)(o.u, {
                                  text: C.intl.string(C.t.ZTNur7),
                                  shouldShow: x,
                                  children: (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      className: m.pageLabel,
                                      children: y,
                                  }),
                              }),
                          ],
                      })
                    : (0, r.jsx)(a.Text, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: C.intl.format(C.t.GZpwME, { count: g }),
                      }),
            }),
            (0, r.jsx)("div", {
                className: m.pagination,
                children:
                    H &&
                    (0, r.jsx)(a.DsT, {
                        className: m.paginationInput,
                        totalCount: g,
                        pageSize: j.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: j.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    h(() => {
                                        (0, u._o)(t, f(b({}, j), { currentPage: e }));
                                    });
                                });
                        },
                        maxVisiblePages: s.hW,
                    }),
            }),
        ],
    });
}
