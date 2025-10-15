t.d(n, {
    $b: () => p,
    c_: () => j,
    o2: () => x,
});
var l = t(951288);
t(647438);
var a = t(120356),
    i = t.n(a),
    r = t(512722),
    s = t.n(r),
    o = t(603113),
    u = t(481060),
    c = t(343312),
    d = t(948208),
    m = t(388032),
    v = t(467078);
function g(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function f(e) {
    let { onNext: n } = (0, c.JL)();
    return (0, l.jsx)(
        u.Button,
        g(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatS0"]),
                onClick: n,
                icon: u.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function b(e) {
    let { onNext: n, stepLoading: t, gameServerInstance: a, availableBoostCount: i, planCost: r } = (0, c.JL)(),
        s = r > 0 && i < r,
        o =
            r > 0
                ? null != a
                    ? m.intl.string(d.default.e3Q5Ky)
                    : m.intl.string(d.default["cmSy/f"])
                : m.intl.string(m.t.K344S0);
    return (0, l.jsx)(
        u.Button,
        g(
            {
                variant: s || r > 0 ? "expressive" : "primary",
                text: o,
                onClick: n,
                icon: s || r > 0 ? u.Ucv : void 0,
                iconPosition: "start",
                loading: t,
            },
            e,
        ),
    );
}
function p(e) {
    var n;
    let { stepAction: t } = (0, c.JL)(),
        a = null == t || null == (n = t.onNext) ? void 0 : n.type;
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
    var n, t, a;
    let i,
        { onBack: r, stepAction: o } = (0, c.JL)(),
        d = null == o || null == (n = o.onBack) ? void 0 : n.type;
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
            u.Button,
            ((t = g({}, e)),
            (a = a =
                {
                    variant: "secondary",
                    text: i,
                    onClick: r,
                    icon: "go-to-step" === d ? u.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, l);
                      }
                      return t;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            t),
        )
    );
}
function x(e) {
    let { step: n, className: t, children: a } = e,
        { footerNode: r, step: s } = (0, c.JL)();
    return null == r || s !== n
        ? null
        : o.createPortal(
              (0, l.jsx)("div", {
                  className: i()(v.footer, t),
                  children: a,
              }),
              r,
              n,
          );
}
