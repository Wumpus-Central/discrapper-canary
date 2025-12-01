n.d(t, { Z: () => o }), n(388685);
var r = n(54381),
    l = n(481060),
    i = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: s, useOptions: c, renderOptionLabel: u } = t,
        d = a(),
        f = null == s ? void 0 : s(),
        p = n(),
        b = c();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(l.q4e, {
            label: d,
            description: f,
            value: p,
            onChange: (e) => o(e),
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
    });
}
