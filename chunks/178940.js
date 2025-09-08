n.d(t, { X: () => u });
var r = n(951288),
    i = n(647438),
    a = n(877371),
    o = n(330406),
    s = n(965048);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e) {
    let { disabled: t, displayOnly: n, label: l, value: u, onChange: d } = e,
        f = (0, a.A)("Checkbox"),
        _ = i.useCallback(
            (e) => {
                let t = { currentTarget: { checked: e } };
                null == d || d(t, e);
            },
            [d],
        );
    return f
        ? (0, r.jsx)(o.C, {
              disabled: t,
              displayOnly: n,
              checked: u,
              onChange: _,
              label: l,
          })
        : (0, r.jsx)(s.$q, c({}, e));
}
