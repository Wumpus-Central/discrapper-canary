var n = l(477900),
    i = l(582128),
    s = l(164636),
    C = l(834730),
    a = l(691885),
    r = l(866665),
    d = l(662203),
    o = l(233693),
    c = l(811977),
    u = l(406318),
    m = l(221950),
    h = l(792996),
    H = l(58636);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { guildId: t, onPageChange: l } = e,
                [g, x] = i.useTransition(),
                f = (0, s.bG)([u.A], () => u.A.getEstimatedMemberSearchCountByGuildId(t), [t]),
                j = (0, s.cf)([u.A], () => u.A.getPaginationStateByGuildId(t), [t]),
                p = (0, c.Ms)(t),
                v = i.useMemo(
                    () => o.MO.map((e) => ({ id: e.toString(), value: e, label: Number(e).toLocaleString() })),
                    [],
                ),
                V = new Intl.NumberFormat(h.intl.currentLocale).format(f),
                b = h.intl.formatToPlainString(h.t["RNDnQ/"], { count: p ? "..." : V }),
                A = f > j.pageSize || p,
                M = f > o.MO["0"];
            return (0, n.jsxs)("div", {
                className: H.Ej,
                children: [
                    (0, n.jsx)("div", {
                        className: H.PO,
                        children: M
                            ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(C.E, {
                                          variant: "body-md/normal",
                                          color: "text-muted",
                                          children: h.intl.string(h.t.jNwLu2),
                                      }),
                                      (0, n.jsx)("div", {
                                          className: H.H9,
                                          children: (0, n.jsx)(a.l, {
                                              selectionMode: "single",
                                              label: b,
                                              hideLabel: !0,
                                              fullWidth: !0,
                                              options: v,
                                              value: j.pageSize,
                                              onSelectionChange: function (e) {
                                                  x(() => {
                                                      (0, m.Cw)(t, { ...j, pageSize: e });
                                                  });
                                              },
                                          }),
                                      }),
                                      (0, n.jsx)(r.m, {
                                          text: h.intl.string(h.t.ZTNur7),
                                          shouldShow: p,
                                          children: (0, n.jsx)(C.E, {
                                              variant: "body-md/normal",
                                              color: "text-muted",
                                              className: H.Qh,
                                              children: b,
                                          }),
                                      }),
                                  ],
                              })
                            : (0, n.jsx)(C.E, {
                                  variant: "body-md/normal",
                                  color: "text-muted",
                                  children: h.intl.format(h.t.GZpwME, { count: f }),
                              }),
                    }),
                    (0, n.jsx)("div", {
                        className: H.X$,
                        children:
                            A &&
                            (0, n.jsx)(d.m, {
                                className: H.JV,
                                totalCount: f,
                                pageSize: j.pageSize,
                                disablePaginationGap: !0,
                                hideMaxPage: !0,
                                currentPage: j.currentPage,
                                onPageChange: function (e) {
                                    (l?.(e),
                                        requestIdleCallback(() => {
                                            x(() => {
                                                (0, m.Cw)(t, { ...j, currentPage: e });
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
