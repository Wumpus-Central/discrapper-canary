n.d(t, { Z: () => o }), n(388685);
var r = n(54381),
    l = n(481060),
    i = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: c, useOptions: s, renderOptionLabel: u } = t,
        d = a(),
        f = null == c ? void 0 : c(),
        b = n(),
        p = s();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(l.q4e, {
            label: d,
            description: f,
            value: b,
            onChange: (e) => o(e),
            options: p,
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
