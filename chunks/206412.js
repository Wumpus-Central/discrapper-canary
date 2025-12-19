n.d(t, { r: () => d }), n(35282), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(481060),
    l = n(259580),
    s = n(478152);
function o(e) {
    let { text: t } = e;
    return (0, a.jsx)("span", {
        className: s.holidayText,
        children: t.split("").map((e, t) =>
            (0, a.jsx)(
                "span",
                {
                    className: s.holidayLetter,
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
        className: s.holidayText,
        children: "\u2B50 "
            .concat(t)
            .split("")
            .map((e, t) =>
                (0, a.jsx)(
                    "span",
                    {
                        className: s.rootMigratedLetter,
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
        [m, p] = r.useState(n),
        h = r.useCallback(() => {
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
              className: s.settingNode,
              children: x("text-md/normal"),
          })
        : (0, a.jsxs)("div", {
              className: s.settingNode,
              children: [
                  (0, a.jsxs)(i.P3F, {
                      className: s.headerBar,
                      onClick: h,
                      children: [
                          x("text-md/bold"),
                          (0, a.jsx)(l.Z, {
                              direction: m ? l.Z.Directions.DOWN : l.Z.Directions.RIGHT,
                              className: s.headerCaret,
                          }),
                      ],
                  }),
                  m &&
                      (0, a.jsx)("div", {
                          className: s.settingNodeChildren,
                          children: u,
                      }),
              ],
          });
}
