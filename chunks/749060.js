var n = l(477900),
    i = l(582128),
    s = l(164636),
    a = l(834730),
    C = l(691885),
    r = l(866665),
    d = l(662203),
    o = l(233693),
    c = l(811977),
    u = l(406318),
    m = l(221950),
    h = l(792996),
    g = l(58636);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, onPageChange: l } = e,
                [f, x] = i.useTransition(),
                H = (0, s.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
                p = (0, s.cf)([u.A], () => u.A.getPaginationStateByGuildId(t), [t]),
                j = (0, c.Ms)(t),
                v = i.useMemo(
                    () => o.MO.map((e) => ({ id: e.toString(), value: e, label: Number(e).toLocaleString() })),
                    [],
                ),
                b = new Intl.NumberFormat(h.intl.currentLocale).format(H),
                A = h.intl.formatToPlainString(h.t["RNDnQ/"], { count: j ? "..." : b }),
                M = H > p.pageSize || j,
                V = H > o.MO["0"];
            return (0, n.jsxs)("div", {
                className: g.Ej,
                children: [
                    (0, n.jsx)("div", {
                        className: g.PO,
                        children: V
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(a.E, {
                                          variant: "body-md/normal",
                                          color: "text-muted",
                                          children: h.intl.string(h.t.jNwLu2),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: g.H9,
                                          children: (0, n.jsx)(C.l, {
                                              selectionMode: "single",
                                              label: A,
                                              hideLabel: !0,
                                              fullWidth: !0,
                                              options: v,
                                              value: p.pageSize,
                                              onSelectionChange: function (e) {
                                                  x(() => {
                                                      (0, m.Cw)(t, { ...p, pageSize: e });
                                                  });
                                              },
                                          }),
                                      }),
                                      (0, n.jsx)(r.m, {
                                          text: h.intl.string(h.t.ZTNur7),
                                          shouldShow: j,
                                          children: (0, n.jsx)(a.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              className: g.Qh,
                                              children: A,
                                          }),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)(a.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: h.intl.format(h.t.GZpwME, { count: H }),
                              }),
                    }),
                    (0, n.jsx)("div", {
                        className: g.X$,
                        children:
                            M &&
                            (0, n.jsx)(d.m, {
                                className: g.JV,
                                totalCount: H,
                                pageSize: p.pageSize,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: p.currentPage,
                                onPageChange: function (e) {
                                    (l?.(e),
                                        requestIdleCallback(() => {
                                            x(() => {
                                                (0, m.Cw)(t, { ...p, currentPage: e });
                                            });
                                        }));
                                },
                                maxVisiblePages: 7,
                            }),
                    }),
                ],
            });
        },
    },
);
