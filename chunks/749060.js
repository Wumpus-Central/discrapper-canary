l.d(t, { A: () => g });
var n = l(627968),
    i = l(64700),
    a = l(417597),
    s = l(990078),
    C = l(834730),
    r = l(691885),
    o = l(158142),
    d = l(233693),
    c = l(343969),
    u = l(266047),
    m = l(221950),
    h = l(985018),
    x = l(639075);
function g(e) {
    let { guildId: t, onPageChange: l } = e,
        [g, H] = i.useTransition(),
        _ = (0, a.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
        p = (0, a.cf)([u.A], () => u.A.getPaginationStateByGuildId(t), [t]),
        f = (0, c.Ms)(t),
        j = i.useMemo(() => d.MO.map((e) => ({ id: e.toString(), value: e, label: Number(e).toLocaleString() })), []),
        b = new Intl.NumberFormat(h.intl.currentLocale).format(_),
        A = h.intl.formatToPlainString(h.t["RNDnQ/"], { count: f ? "..." : b }),
        v = _ > p.pageSize || f,
        V = _ > d.MO["0"];
    return (0, n.jsxs)("div", {
        className: x.Ej,
        children: [
            (0, n.jsx)("div", {
                className: x.PO,
                children: V
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(C.E, {
                                  variant: "text-md/normal",
                                  color: "text-muted",
                                  children: h.intl.string(h.t.jNwLu2),
                              }),
                              (0, n.jsx)(r.l, {
                                  selectionMode: "single",
                                  label: A,
                                  hideLabel: !0,
                                  options: j,
                                  value: p.pageSize,
                                  onSelectionChange: (e) => {
                                      H(() => {
                                          (0, m.Cw)(t, { ...p, pageSize: e });
                                      });
                                  },
                              }),
                              (0, n.jsx)(s.m, {
                                  text: h.intl.string(h.t.ZTNur7),
                                  shouldShow: f,
                                  children: (0, n.jsx)(C.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      className: x.Qh,
                                      children: A,
                                  }),
                              }),
                          ],
                      })
                    : (0, n.jsx)(C.E, {
                          variant: "text-md/normal",
                          color: "text-muted",
                          children: h.intl.format(h.t.GZpwME, { count: _ }),
                      }),
            }),
            (0, n.jsx)("div", {
                className: x.X$,
                children:
                    v &&
                    (0, n.jsx)(o.m, {
                        className: x.JV,
                        totalCount: _,
                        pageSize: p.pageSize,
                        disablePaginationGap: !0,
                        hideMaxPage: !0,
                        currentPage: p.currentPage,
                        onPageChange: (e) => {
                            l?.(e),
                                requestIdleCallback(() => {
                                    H(() => {
                                        (0, m.Cw)(t, { ...p, currentPage: e });
                                    });
                                });
                        },
                        maxVisiblePages: d.NB,
                    }),
            }),
        ],
    });
}
