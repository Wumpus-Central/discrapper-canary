n.d(t, { $: () => g }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(974213),
    s = n(568385),
    o = n(150934),
    l = n(452027),
    c = n(460890),
    u = n(2441);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = m(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function g(e) {
    var t, n;
    let { onChange: d, options: p, selectedValues: m, disabled: g = !1 } = e,
        E = h(e, ["onChange", "options", "selectedValues", "disabled"]),
        b = i.useContext(c.VO),
        y =
            null == b || null == (n = b.experiments) || null == (t = n.enabledExperiments)
                ? void 0
                : t.includes("mana-toggle-inputs"),
        O = (e) => {
            null == d || d(e);
        },
        A = (e, t) => {
            let n = t ? [...m, e] : m.filter((t) => t !== e);
            null == d || d(n);
        };
    return (0, r.jsx)(
        l.D,
        _(f({}, E), {
            role: "group",
            children: y
                ? (0, r.jsx)(a.$Q, {
                      className: u.O,
                      value: m.map(String),
                      onChange: O,
                      "data-mana-component": "checkbox-group",
                      isDisabled: g,
                      children: p.map((e) =>
                          (0, r.jsx)(
                              s.J,
                              {
                                  disabled: g || e.disabled,
                                  checked: m.includes(e.value),
                                  label: e.label,
                                  value: e.value,
                                  description: e.description,
                                  leadingIcon: e.leadingIcon,
                              },
                              String(e.value),
                          ),
                      ),
                  })
                : (0, r.jsx)("div", {
                      className: u.O,
                      children: p.map((e) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: u.I,
                                  children: (0, r.jsx)(o.K, {
                                      disabled: g || e.disabled,
                                      checked: m.includes(e.value),
                                      label: e.label,
                                      description: e.description,
                                      leadingIcon: e.leadingIcon,
                                      onChange: (t) => A(e.value, t),
                                  }),
                              },
                              String(e.value),
                          ),
                      ),
                  }),
        }),
    );
}
