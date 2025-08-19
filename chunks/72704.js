n.d(t, { Z: () => r }), n(388685);
var i = n(951288),
    l = n(481060),
    o = n(825185);
function r(e) {
    let { node: t } = e,
        { useValue: n, setValue: r, useTitle: s, useSubtitle: a, useOptions: u, renderOptionLabel: c } = t,
        d = s(),
        f = null == a ? void 0 : a(),
        g = n(),
        v = u();
    return (0, i.jsx)(l.xJW, {
        title: d,
        className: o.selectContainer,
        children: (0, i.jsxs)("div", {
            className: o.selectContent,
            children: [
                null != f &&
                    (0, i.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: f,
                    }),
                (0, i.jsx)(l.q4e, {
                    value: g,
                    onChange: (e) => r(e),
                    options: v,
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
