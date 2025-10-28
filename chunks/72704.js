n.d(t, { Z: () => i }), n(388685);
var r = n(951288),
    o = n(481060),
    l = n(550964);
function i(e) {
    let { node: t } = e,
        { useValue: n, setValue: i, useTitle: a, useSubtitle: c, useOptions: s, renderOptionLabel: u } = t,
        d = a(),
        f = null == c ? void 0 : c(),
        b = n(),
        p = s();
    return (0, r.jsx)(l.X, {
        children: (0, r.jsx)(o.q4e, {
            label: d,
            description: f,
            value: b,
            onChange: (e) => i(e),
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
