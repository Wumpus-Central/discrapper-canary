n.d(t, {
    E: () => p,
    F: () => h,
});
var r = n(951288),
    i = n(647438),
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
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function p(e) {
    var t, n;
    let l = i.useContext(a.KJ);
    if (
        null == l || null == (n = l.experiments) || null == (t = n.enabledExperiments)
            ? void 0
            : t.includes("mana-toggle-inputs")
    ) {
        let t = d(c({}, e), {
            value: null != e.value ? String(e.value) : void 0,
            options: e.options.map((e) => d(c({}, e), { value: String(e.value) })),
            onChange:
                null != e.onChange
                    ? (t) => {
                          let n = e.options.find((e) => String(e.value) === t);
                          null != n && e.onChange(n.value);
                      }
                    : void 0,
        });
        return (0, r.jsx)(o.C, c({}, t));
    }
    let { size: u } = e,
        _ = f(e, ["size"]),
        p = e.options.map((e) => {
            var t, n;
            return d(c({}, e), {
                icon: e.leadingIcon,
                desc:
                    "string" == typeof e.desc
                        ? e.desc
                        : null != (n = null == (t = e.desc) ? void 0 : t.toString())
                          ? n
                          : null,
            });
        }),
        h = d(c({}, _), {
            options: p,
            errorMessage: e.errorMessage,
            onChange: null != e.onChange ? (t) => e.onChange(t.value) : void 0,
        });
    return (0, r.jsx)(s.Gu, c({}, h));
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
