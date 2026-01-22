n.d(t, { n: () => d }), n(747238), n(896048);
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(147925),
    s = n(159452);
function o(e) {
    let { text: t } = e;
    return (0, a.jsx)("span", {
        className: s.IR,
        children: t.split("").map((e, t) =>
            (0, a.jsx)(
                "span",
                {
                    className: s.ZF,
                    style: { "--custom-letter-index": t },
                    children: e,
                },
                t,
            ),
        ),
    });
}
function c(e) {
    let { text: t } = e;
    return (0, a.jsx)("span", {
        className: s.IR,
        children: "\u2B50 "
            .concat(t)
            .split("")
            .map((e, t) =>
                (0, a.jsx)(
                    "span",
                    {
                        className: s.EC,
                        style: { "--custom-letter-index": t },
                        children: e,
                    },
                    t,
                ),
            ),
    });
}
function d(e) {
    let { title: t, initExpanded: n, highlightMode: d = "none", children: u } = e,
        [m, p] = l.useState(n),
        h = l.useCallback(() => {
            p(!m);
        }, [m]),
        f = "root" === d ? "status-warning" : "status-positive",
        x = (e) =>
            "migrated" === d
                ? (0, a.jsx)(i.Text, {
                      variant: e,
                      children: (0, a.jsx)(o, { text: t }),
                  })
                : "migrated-root" === d
                  ? (0, a.jsx)(i.Text, {
                        variant: e,
                        children: (0, a.jsx)(c, { text: t }),
                    })
                  : (0, a.jsx)(i.Text, {
                        variant: e,
                        color: f,
                        children: t,
                    });
    return null == u
        ? (0, a.jsx)("div", {
              className: s.NF,
              children: x("text-md/normal"),
          })
        : (0, a.jsxs)("div", {
              className: s.NF,
              children: [
                  (0, a.jsxs)(i.DUT, {
                      className: s.jr,
                      onClick: h,
                      children: [
                          x("text-md/bold"),
                          (0, a.jsx)(r.A, {
                              direction: m ? r.A.Directions.DOWN : r.A.Directions.RIGHT,
                              className: s.D,
                          }),
                      ],
                  }),
                  m &&
                      (0, a.jsx)("div", {
                          className: s.m4,
                          children: u,
                      }),
              ],
          });
}
