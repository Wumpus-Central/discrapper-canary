n.d(t, {
    K: () => _,
    S: () => p,
}),
    n(228524);
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(834730),
    o = n(568385),
    l = n(27192);

function c(e, t, n) {
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

function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}

function d(e, t) {
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

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e) {
    var t, n;
    let s = i.useContext(a.VO);
    return (
        null == s || null == (n = s.experiments) || null == (t = n.enabledExperiments)
            ? void 0
            : t.includes("mana-toggle-inputs")
    )
        ? (0, r.jsx)(o.J, u({}, e))
        : (0, r.jsx)(_, u({}, e));
}

function _(e) {
    let { label: t, checked: n, onChange: a, labelType: o = "primary", description: c, leadingIcon: d } = e,
        p =
            null != t && "" !== t
                ? (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsxs)("div", {
                              style: {
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "8px",
                              },
                              children: [
                                  null != d &&
                                      i.createElement(d, {
                                          size: "sm",
                                          color: "currentColor",
                                          "aria-hidden": !0,
                                          focusable: !1,
                                      }),
                                  (0, r.jsx)(s.E, {
                                      variant: "text-md/normal",
                                      color: "primary" === o ? "text-strong" : "text-subtle",
                                      children: t,
                                  }),
                              ],
                          }),
                          null != c &&
                              "" !== c &&
                              (0, r.jsx)(s.E, {
                                  variant: "text-sm/normal",
                                  color: "text-subtle",
                                  style: {
                                      marginTop: "4px",
                                  },
                                  children: c,
                              }),
                      ],
                  })
                : null;
    return (0, r.jsx)(
        l.Kj,
        f(u({}, e), {
            value: n,
            onChange: (e, t) => (null == a ? void 0 : a(t)),
            children: p,
        }),
    );
}
