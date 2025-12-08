t.d(n, {
    $b: () => b,
    c_: () => _,
    o2: () => x,
});
var l = t(54381);
t(473749);
var i = t(120356),
    a = t.n(i),
    r = t(512722),
    s = t.n(r),
    u = t(24156),
    o = t(481060),
    c = t(343312),
    d = t(816632),
    m = t(388032),
    v = t(467078);
function f(e) {
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
function g(e) {
    let { onNext: n } = (0, c.JL)();
    return (0, l.jsx)(
        o.Button,
        f(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatSz"]),
                onClick: n,
                icon: o.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function p(e) {
    let { onNext: n, stepLoading: t, gameServerInstance: i, availableBoostCount: a, planCost: r } = (0, c.JL)(),
        s = r > 0 && a < r,
        u =
            r > 0
                ? null != i
                    ? m.intl.string(d.default.e3Q5Kz)
                    : m.intl.string(d.default["cmSy/b"])
                : m.intl.string(m.t.K344S7);
    return (0, l.jsx)(
        o.Button,
        f(
            {
                variant: s || r > 0 ? "expressive" : "primary",
                text: u,
                onClick: n,
                icon: s || r > 0 ? o.Ucv : void 0,
                iconPosition: "start",
                loading: t,
            },
            e,
        ),
    );
}
function b(e) {
    var n;
    let { stepAction: t } = (0, c.JL)(),
        i = null == t || null == (n = t.onNext) ? void 0 : n.type;
    switch (i) {
        case "go-to-step":
            return (0, l.jsx)(g, f({}, e));
        case "save":
            return (0, l.jsx)(p, f({}, e));
        default:
            s()(null != i, "Invalid stepType ".concat(i));
    }
}
function _(e) {
    var n, t, i;
    let a,
        { onBack: r, stepAction: u } = (0, c.JL)(),
        d = null == u || null == (n = u.onBack) ? void 0 : n.type;
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
            ((t = f({}, e)),
            (i = i =
                {
                    variant: "secondary",
                    text: a,
                    onClick: r,
                    icon: "go-to-step" === d ? o.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var l = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, l);
                      }
                      return t;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            t),
        )
    );
}
function x(e) {
    let { step: n, className: t, children: i } = e,
        { footerNode: r, step: s } = (0, c.JL)();
    return null == r || s !== n
        ? null
        : u.createPortal(
              (0, l.jsx)("div", {
                  className: a()(v.footer, t),
                  children: i,
              }),
              r,
              n,
          );
}
