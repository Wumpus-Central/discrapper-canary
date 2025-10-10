n.d(t, { Z: () => i }), n(388685);
var r = n(951288),
    l = n(481060),
    o = n(825185);
function i(e) {
    let { node: t } = e,
        { useValue: n, setValue: i, useTitle: a, useSubtitle: s, useOptions: c, renderOptionLabel: u } = t,
        d = a(),
        f = null == s ? void 0 : s(),
        m = n(),
        b = c();
    return (0, r.jsx)(l.xJW, {
        title: d,
        className: o.selectContainer,
        children: (0, r.jsxs)("div", {
            className: o.selectContent,
            children: [
                null != f &&
                    (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: f,
                    }),
                (0, r.jsx)(l.q4e, {
                    value: m,
                    onChange: (e) => i(e),
                    options: b,
                    renderOptionLabel: null != u ? u : void 0,
                    renderOptionValue:
                        null != u
                            ? (e) => {
                                  let [t] = e;
                                  return u(t);
                              }
                            : void 0,
                }),
            ],
        }),
    });
}
