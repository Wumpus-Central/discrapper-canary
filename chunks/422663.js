n.d(t, {
    VS: () => j,
    oh: () => p,
    ok: () => x,
});
var l = n(951288);
n(647438);
var a = n(120356),
    i = n.n(a),
    r = n(512722),
    s = n.n(r),
    o = n(603113),
    u = n(481060),
    c = n(183369),
    d = n(401561),
    m = n(388032),
    v = n(946410);
function f(e) {
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
function g(e) {
    let { onNext: t } = (0, c.aj)();
    return (0, l.jsx)(
        u.zxk,
        f(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatS0"]),
                onClick: t,
                icon: u.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function b(e) {
    let { onNext: t, stepLoading: n, portkeyInstance: a, availableBoostCount: i, planCost: r } = (0, c.aj)(),
        s = r > 0 && i < r,
        o =
            r > 0
                ? null != a
                    ? m.intl.string(d.default["1fogMj"])
                    : s
                      ? m.intl.string(d.default.MPNPJS)
                      : m.intl.string(d.default.ShxV5e)
                : m.intl.string(m.t.K344S0);
    return (0, l.jsx)(
        u.zxk,
        f(
            {
                variant: s || r > 0 ? "expressive" : "primary",
                text: o,
                onClick: t,
                icon: s || r > 0 ? u.$Eu : void 0,
                iconPosition: "start",
                loading: n,
            },
            e,
        ),
    );
}
function p(e) {
    var t;
    let { stepAction: n } = (0, c.aj)(),
        a = null == n || null == (t = n.onNext) ? void 0 : t.type;
    switch (a) {
        case "go-to-step":
            return (0, l.jsx)(g, f({}, e));
        case "save":
            return (0, l.jsx)(b, f({}, e));
        default:
            s()(null != a, "Invalid stepType ".concat(a));
    }
}
function j(e) {
    var t, n, a;
    let i,
        { onBack: r, stepAction: o } = (0, c.aj)(),
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
            u.zxk,
            ((n = f({}, e)),
            (a = a =
                {
                    variant: "secondary",
                    text: i,
                    onClick: r,
                    icon: "go-to-step" === d ? u.whL : void 0,
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
        { footerNode: r, step: s } = (0, c.aj)();
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
