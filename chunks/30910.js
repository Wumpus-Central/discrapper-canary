n.d(t, {
    $b: () => b,
    c_: () => _,
    o2: () => x,
});
var l = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    r = n(512722),
    s = n.n(r),
    u = n(603113),
    o = n(481060),
    c = n(343312),
    d = n(732031),
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
    let { onNext: t } = (0, c.JL)();
    return (0, l.jsx)(
        o.Button,
        g(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: t,
                icon: o.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function p(e) {
    let { onNext: t, stepLoading: n, gameServerInstance: i, availableBoostCount: a, planCost: r } = (0, c.JL)(),
        s = r > 0 && a < r,
        u =
            r > 0
                ? null != i
                    ? m.intl.string(d.default.e3Q5Kz)
                    : m.intl.string(d.default["cmSy/b"])
                : m.intl.string(m.t.K344S7);
    return (0, l.jsx)(
        o.Button,
        g(
            {
                variant: s || r > 0 ? "expressive" : "primary",
                text: u,
                onClick: t,
                icon: s || r > 0 ? o.Ucv : void 0,
                iconPosition: "start",
                loading: n,
            },
            e,
        ),
    );
}
function b(e) {
    var t;
    let { stepAction: n } = (0, c.JL)(),
        i = null == n || null == (t = n.onNext) ? void 0 : t.type;
    switch (i) {
        case "go-to-step":
            return (0, l.jsx)(f, g({}, e));
        case "save":
            return (0, l.jsx)(p, g({}, e));
        default:
            s()(null != i, "Invalid stepType ".concat(i));
    }
}
function _(e) {
    var t, n, i;
    let a,
        { onBack: r, stepAction: u } = (0, c.JL)(),
        d = null == u || null == (t = u.onBack) ? void 0 : t.type;
    switch (d) {
        case "go-to-step":
            a = m.intl.string(m.t["13/7kX"]);
            break;
        case "close":
            a = m.intl.string(m.t.cpT0Cq);
    }
    return (
        s()(null != a, "Invalid stepType ".concat(d)),
        (0, l.jsx)(
            o.Button,
            ((n = g({}, e)),
            (i = i =
                {
                    variant: "secondary",
                    text: a,
                    onClick: r,
                    icon: "go-to-step" === d ? o.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, l);
                      }
                      return n;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            n),
        )
    );
}
function x(e) {
    let { step: t, className: n, children: i } = e,
        { footerNode: r, step: s } = (0, c.JL)();
    return null == r || s !== t
        ? null
        : u.createPortal(
              (0, l.jsx)("div", {
                  className: a()(v.footer, n),
                  children: i,
              }),
              r,
              t,
          );
}
