n.d(t, {
    E: () => p,
    F: () => h,
});
var r = n(54381),
    i = n(473749),
    a = n(402453),
    o = n(646116),
    s = n(957977);
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
function c() {
    return (c =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function u(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e;
}
function d(e) {
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
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    var t, n;
    let l = i.useContext(a.KJ);
    if (
        null == l || null == (n = l.experiments) || null == (t = n.enabledExperiments)
            ? void 0
            : t.includes("mana-toggle-inputs")
    )
        return (0, r.jsx)(o.C, d({}, e));
    let f = c({}, u(e)),
        p = e.options.map((e) =>
            _(d({}, e), {
                icon: e.leadingIcon,
                desc: e.desc,
            }),
        ),
        h = _(d({}, f), {
            options: p,
            errorMessage: e.errorMessage,
            onChange: null != e.onChange ? (t) => e.onChange(t.value) : void 0,
        });
    return (0, r.jsx)(s.Gu, d({}, h));
}
function h(e) {
    var t, n;
    let { disabled: l, checked: c, radioItemIconClassName: u } = e,
        d = i.useContext(a.KJ);
    return (
        null == d || null == (n = d.experiments) || null == (t = n.enabledExperiments)
            ? void 0
            : t.includes("mana-toggle-inputs")
    )
        ? (0, r.jsx)(o.M, {
              disabled: l,
              isSelected: c,
          })
        : (0, r.jsx)(s.DQ, {
              checked: c,
              disabled: l,
              radioItemIconClassName: u,
          });
}
