n.d(t, { Z: () => o }), n(388685);
var r = n(951288),
    l = n(481060);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: i, useSubtitle: a, useOptions: s, renderOptionLabel: c } = t,
        u = i(),
        d = null == a ? void 0 : a(),
        f = n(),
        b = s();
    return (0, r.jsx)(l.q4e, {
        label: u,
        description: d,
        value: f,
        onChange: (e) => o(e),
        options: b,
        renderOptionLabel: null != c ? c : void 0,
        renderOptionValue:
            null != c
                ? (e) => {
                      let [t] = e;
                      return c(t);
                  }
                : void 0,
    });
}
