n.d(t, {
    $b: () => p,
    c_: () => j,
    o2: () => x,
});
var l = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    r = n(512722),
    s = n.n(r),
    o = n(603113),
    c = n(481060),
    u = n(343312),
    d = n(948208),
    m = n(388032),
    v = n(467078);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function f(e) {
    let { onNext: t } = (0, u.JL)();
    return (0, l.jsx)(
        c.Button,
        g(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatS0"]),
                onClick: t,
                icon: c.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function b(e) {
    let { onNext: t, stepLoading: n, gameServerInstance: a, availableBoostCount: i, planCost: r } = (0, u.JL)(),
        s = r > 0 && i < r,
        o =
            r > 0
                ? null != a
                    ? m.intl.string(d.default.e3Q5Ky)
                    : s
                      ? m.intl.string(d.default.H4tu7u)
                      : m.intl.string(d.default["cmSy/f"])
                : m.intl.string(m.t.K344S0);
    return (0, l.jsx)(
        c.Button,
        g(
            {
                variant: s || r > 0 ? "expressive" : "primary",
                text: o,
                onClick: t,
                icon: s || r > 0 ? c.Ucv : void 0,
                iconPosition: "start",
                loading: n,
            },
            e,
        ),
    );
}
function p(e) {
    var t;
    let { stepAction: n } = (0, u.JL)(),
        a = null == n || null == (t = n.onNext) ? void 0 : t.type;
    switch (a) {
        case "go-to-step":
            return (0, l.jsx)(f, g({}, e));
        case "save":
            return (0, l.jsx)(b, g({}, e));
        default:
            s()(null != a, "Invalid stepType ".concat(a));
    }
}
function j(e) {
    var t, n, a;
    let i,
        { onBack: r, stepAction: o } = (0, u.JL)(),
        d = null == o || null == (t = o.onBack) ? void 0 : t.type;
    switch (d) {
        case "go-to-step":
            i = m.intl.string(m.t["13/7kZ"]);
            break;
        case "close":
            i = m.intl.string(m.t.cpT0Cg);
    }
    return (
        s()(null != i, "Invalid stepType ".concat(d)),
        (0, l.jsx)(
            c.Button,
            ((n = g({}, e)),
            (a = a =
                {
                    variant: "secondary",
                    text: i,
                    onClick: r,
                    icon: "go-to-step" === d ? c.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            n),
        )
    );
}
function x(e) {
    let { step: t, className: n, children: a } = e,
        { footerNode: r, step: s } = (0, u.JL)();
    return null == r || s !== t
        ? null
        : o.createPortal(
              (0, l.jsx)("div", {
                  className: i()(v.footer, n),
                  children: a,
              }),
              r,
              t,
          );
}
