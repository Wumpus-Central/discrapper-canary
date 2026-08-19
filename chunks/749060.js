l.d(t, { A: () => h });
var n = l(477900),
    i = l(582128),
    C = l(702841),
    s = l(834730),
    a = l(691885),
    r = l(866665),
    d = l(932793),
    o = l(233693),
    c = l(144073),
    u = l(151781),
    m = l(221950),
    H = l(375708),
    x = l(58636);
function h(e) {
    let { guildId: t, onPageChange: l } = e,
        [h, g] = i.useTransition(),
        f = (0, C.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        j = (0, C.cf)([u.A], () => u.A.getPaginationStateByGuildId(t), [t]),
        p = (0, c.Ms)(t),
        v = i.useMemo(() => o.MO.map((e) => ({ id: e.toString(), value: e, label: Number(e).toLocaleString() })), []),
        V = new Intl.NumberFormat(H.intl.currentLocale).format(f),
        A = H.intl.formatToPlainString(H.t["RNDnQ/"], { count: p ? "..." : V }),
        M = f > j.pageSize || p,
        L = f > o.MO["0"];
    return (0, n.jsxs)("div", {
        className: x.Ej,
        children: [
            (0, n.jsx)("div", {
                className: x.PO,
                children: L
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(s.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: H.intl.string(H.t.jNwLu2),
                              }),
                              (0, n.jsx)(a.l, {
                                  selectionMode: "single",
                                  label: A,
                                  hideLabel: !0,
                                  options: v,
                                  value: j.pageSize,
                                  onSelectionChange: function (e) {
                                      g(() => {
                                          (0, m.Cw)(t, { ...j, pageSize: e });
                                      });
                                  },
                              }),
                              (0, n.jsx)(r.m, {
                                  text: H.intl.string(H.t.ZTNur7),
                                  shouldShow: p,
                                  children: (0, n.jsx)(s.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      className: x.Qh,
                                      children: A,
                                  }),
                              }),
                          ],
                      })
                    : (0, n.jsx)(s.E, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: H.intl.format(H.t.GZpwME, { count: f }),
                      }),
            }),
            (0, n.jsx)("div", {
                className: x.X$,
                children:
                    M &&
                    (0, n.jsx)(d.m, {
                        className: x.JV,
                        totalCount: f,
                        pageSize: j.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: j.currentPage,
                        onPageChange: function (e) {
                            l?.(e),
                                requestIdleCallback(() => {
                                    g(() => {
                                        (0, m.Cw)(t, { ...j, currentPage: e });
                                    });
                                });
                        },
                        maxVisiblePages: o.NB,
                    }),
            }),
        ],
    });
}
