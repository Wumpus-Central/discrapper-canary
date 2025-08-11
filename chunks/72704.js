n.d(t, { Z: () => o }), n(388685);
var i = n(255367),
    l = n(481060),
    s = n(353215);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: r, useOptions: u, renderOptionLabel: c } = t,
        d = a(),
        f = null == r ? void 0 : r(),
        g = n(),
        m = u();
    return (0, i.jsx)(l.xJW, {
        title: d,
        className: s.selectContainer,
        children: (0, i.jsxs)("div", {
            className: s.selectContent,
            children: [
                null != f &&
                    (0, i.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: f,
                    }),
                (0, i.jsx)(l.q4e, {
                    value: g,
                    onChange: (e) => o(e),
                    options: m,
                    renderOptionLabel: null != c ? c : void 0,
                    renderOptionValue:
                        null != c
                            ? (e) => {
                                  let [t] = e;
                                  return c(t);
                              }
                            : void 0,
                }),
            ],
        }),
    });
}
