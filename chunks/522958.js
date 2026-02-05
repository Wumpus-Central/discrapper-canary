n.d(t, { n: () => c });
var a = n(627968),
    s = n(64700),
    i = n(397927),
    l = n(147925),
    r = n(159452);
function o(e) {
    let { text: t } = e;
    return (0, a.jsx)("span", {
        className: r.IR,
        children: t
            .split("")
            .map((e, t) =>
                (0, a.jsx)("span", { className: r.ZF, style: { "--custom-letter-index": t }, children: e }, t),
            ),
    });
}
function d(e) {
    let { text: t } = e,
        n = `⭐ ${t}`;
    return (0, a.jsx)("span", {
        className: r.IR,
        children: n
            .split("")
            .map((e, t) =>
                (0, a.jsx)("span", { className: r.EC, style: { "--custom-letter-index": t }, children: e }, t),
            ),
    });
}
function c(e) {
    let { title: t, initExpanded: n, highlightMode: c = "none", children: u } = e,
        [m, h] = s.useState(n),
        x = s.useCallback(() => {
            h(!m);
        }, [m]),
        p = "root" === c ? "status-warning" : "status-positive",
        g = (e) =>
            "migrated" === c
                ? (0, a.jsx)(i.Text, { variant: e, children: (0, a.jsx)(o, { text: t }) })
                : "migrated-root" === c
                  ? (0, a.jsx)(i.Text, { variant: e, children: (0, a.jsx)(d, { text: t }) })
                  : (0, a.jsx)(i.Text, { variant: e, color: p, children: t });
    return null == u
        ? (0, a.jsx)("div", { className: r.NF, children: g("text-md/normal") })
        : (0, a.jsxs)("div", {
              className: r.NF,
              children: [
                  (0, a.jsxs)(i.DUT, {
                      className: r.jr,
                      onClick: x,
                      children: [
                          g("text-md/bold"),
                          (0, a.jsx)(l.A, {
                              direction: m ? l.A.Directions.DOWN : l.A.Directions.RIGHT,
                              className: r.D,
                          }),
                      ],
                  }),
                  m && (0, a.jsx)("div", { className: r.m4, children: u }),
              ],
          });
}
