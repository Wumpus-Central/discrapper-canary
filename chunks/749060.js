n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(417597),
    o = n(990078),
    a = n(397927),
    s = n(233693),
    c = n(343969),
    d = n(266047),
    u = n(221950),
    C = n(985018),
    f = n(656930);
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
function m(e, t) {
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
        [p, j] = l.useTransition(),
        g = (0, i.bG)([d.A], () => d.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        h = (0, i.cf)([d.A], () => d.A.getPaginationStateByGuildId(t), [t]),
        x = (0, c.Ms)(t),
        y = l.useMemo(
            () =>
                s.MO.map((e) => ({
                    id: e.toString(),
                    value: e,
                    label: Number(e).toLocaleString(),
                })),
            [],
        ),
        O = new Intl.NumberFormat(C.intl.currentLocale).format(g),
        v = C.intl.formatToPlainString(C.t["RNDnQ/"], { count: x ? "..." : O }),
        H = g > h.pageSize || x,
        w = g > s.MO["0"];
    return (0, r.jsxs)("div", {
        className: f.Ej,
        children: [
            (0, r.jsx)("div", {
                className: f.PO,
                children: w
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: C.intl.string(C.t.jNwLu2),
                              }),
                              (0, r.jsx)(a.l6P, {
                                  selectionMode: "single",
                                  label: v,
                                  hideLabel: !0,
                                  options: y,
                                  value: h.pageSize,
                                  onSelectionChange: (e) => {
                                      j(() => {
                                          (0, u.Cw)(t, m(b({}, h), { pageSize: e }));
                                      });
                                  },
                              }),
                              (0, r.jsx)(o.m, {
                                  text: C.intl.string(C.t.ZTNur7),
                                  shouldShow: x,
                                  children: (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      className: f.Qh,
                                      children: v,
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
                className: f.X$,
                children:
                    H &&
                    (0, r.jsx)(a.mgR, {
                        className: f.JV,
                        totalCount: g,
                        pageSize: h.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: h.currentPage,
                        onPageChange: (e) => {
                            null == n || n(e),
                                requestIdleCallback(() => {
                                    j(() => {
                                        (0, u.Cw)(t, m(b({}, h), { currentPage: e }));
                                    });
                                });
                        },
                        maxVisiblePages: s.NB,
                    }),
            }),
        ],
    });
}
