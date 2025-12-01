n.d(t, { c: () => g }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(735048),
    o = n(982125),
    s = n(595824),
    l = n(483566),
    c = n(402453),
    u = n(415957);
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function g(e) {
    var t,
        n,
        { onChange: d, options: p, selectedValues: h, disabled: g = !1 } = e,
        E = m(e, ["onChange", "options", "selectedValues", "disabled"]);
    let b = i.useContext(c.KJ),
        y =
            null == b || null == (n = b.experiments) || null == (t = n.enabledExperiments)
                ? void 0
                : t.includes("mana-toggle-inputs"),
        O = (e) => {
            null == d || d(e);
        },
        v = (e, t) => {
            let n = t ? [...h, e] : h.filter((t) => t !== e);
            null == d || d(n);
        };
    return (0, r.jsx)(
        l.g,
        _(f({}, E), {
            role: "group",
            children: y
                ? (0, r.jsx)(a.cO, {
                      className: u.group,
                      value: h.map(String),
                      onChange: O,
                      "data-mana-component": "checkbox-group",
                      isDisabled: g,
                      children: p.map((e) =>
                          (0, r.jsx)(
                              o.C,
                              {
                                  disabled: g || e.disabled,
                                  checked: h.includes(e.value),
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
                      className: u.group,
                      children: p.map((e) =>
                          (0, r.jsx)(
                              "div",
                              {
                                  className: u.backwardsCompatibleCheckbox,
                                  children: (0, r.jsx)(s.h, {
                                      disabled: g || e.disabled,
                                      checked: h.includes(e.value),
                                      label: e.label,
                                      description: e.description,
                                      leadingIcon: e.leadingIcon,
                                      onChange: (t) => v(e.value, t),
                                  }),
                              },
                              String(e.value),
                          ),
                      ),
                  }),
        }),
    );
}
