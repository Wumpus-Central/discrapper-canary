var l = n(477900);
n(582128);
var r = n(834730),
    i = n(488412),
    a = n(667931),
    s = n(872892);
let o = {
    op: s.Q,
    model: s.i3,
    tool: s.dH,
    setup: s.kc,
    worktree: s.Qx,
    sandbox: s.QH,
    build: s.F1,
    platform: s.Op,
    other: s.fv,
};
n.d(
    t,
    {},
    {
        A: function (e) {
            let { stats: t } = e,
                n = (0, i.Jw)(t);
            return (0, l.jsxs)("div", {
                className: s.M1,
                children: [
                    (0, l.jsx)("div", {
                        className: s.Fc,
                        "aria-hidden": !0,
                        children: t.categories.map((e) => {
                            let { category: t, ms: n } = e;
                            return 0 === n
                                ? null
                                : (0, l.jsx)(
                                      "div",
                                      {
                                          className: `${s.DJ} ${o[t]}`,
                                          style: { "--custom-conjure-perf-trace-weight": String(n) },
                                      },
                                      t,
                                  );
                        }),
                    }),
                    (0, l.jsx)("div", {
                        className: s.o1,
                        children: a.BF.map((e) => {
                            let n = (0, i.qO)(t, e);
                            return (0, l.jsxs)(
                                "span",
                                {
                                    className: s.fI,
                                    children: [
                                        (0, l.jsx)("span", { className: `${s.nf} ${o[e]}` }),
                                        (0, l.jsx)(r.E, {
                                            variant: "body-xs/normal",
                                            color: "text-muted",
                                            children: i.Rx[e],
                                        }),
                                        null == n
                                            ? null
                                            : (0, l.jsx)(r.E, {
                                                  variant: "body-xs/normal",
                                                  color: "text-subtle",
                                                  tabularNumbers: !0,
                                                  children: n,
                                              }),
                                    ],
                                },
                                e,
                            );
                        }),
                    }),
                    null == n
                        ? null
                        : (0, l.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              tabularNumbers: !0,
                              children: n,
                          }),
                ],
            });
        },
        o: o,
    },
);
