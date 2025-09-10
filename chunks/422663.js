t.d(n, {
    VS: () => b,
    oh: () => j,
    ok: () => h,
});
var r = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
    l = t(512722),
    o = t.n(l),
    s = t(603113),
    c = t(481060),
    d = t(183369),
    u = t(985862),
    m = t(401561),
    g = t(388032),
    p = t(946410);
function f(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function v(e) {
    let { onNext: n } = (0, d.aj)();
    return (0, r.jsx)(
        c.zxk,
        f(
            {
                variant: "primary",
                text: g.intl.string(g.t["3PatS0"]),
                onClick: n,
                icon: c.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function x(e) {
    let { onNext: n, stepLoading: t, portkeyInstance: i, availableBoostCount: a } = (0, d.aj)(),
        l = (0, u.Z)(),
        o = l > 0 && a < l,
        s =
            l > 0
                ? null != i
                    ? g.intl.string(m.default["1fogMj"])
                    : o
                      ? g.intl.string(m.default.MPNPJS)
                      : g.intl.string(m.default.ShxV5e)
                : g.intl.string(g.t.K344S0);
    return (0, r.jsx)(
        c.zxk,
        f(
            {
                variant: o || l > 0 ? "expressive" : "primary",
                text: s,
                onClick: n,
                icon: o || l > 0 ? c.$Eu : void 0,
                iconPosition: "start",
                loading: t,
            },
            e,
        ),
    );
}
function j(e) {
    var n;
    let { stepAction: t } = (0, d.aj)(),
        i = null == t || null == (n = t.onNext) ? void 0 : n.type;
    switch (i) {
        case "go-to-step":
            return (0, r.jsx)(v, f({}, e));
        case "save":
            return (0, r.jsx)(x, f({}, e));
        default:
            o()(null != i, "Invalid stepType ".concat(i));
    }
}
function b(e) {
    var n, t, i;
    let a,
        { onBack: l, stepAction: s } = (0, d.aj)(),
        u = null == s || null == (n = s.onBack) ? void 0 : n.type;
    switch (u) {
        case "go-to-step":
            a = g.intl.string(g.t["13/7kZ"]);
            break;
        case "close":
            a = g.intl.string(g.t.cpT0Cg);
    }
    return (
        o()(null != a, "Invalid stepType ".concat(u)),
        (0, r.jsx)(
            c.zxk,
            ((t = f({}, e)),
            (i = i =
                {
                    variant: "secondary",
                    text: a,
                    onClick: l,
                    icon: "go-to-step" === u ? c.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, r);
                      }
                      return t;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            t),
        )
    );
}
function h(e) {
    let { step: n, className: t, children: i } = e,
        { footerNode: l, step: o } = (0, d.aj)();
    return null == l || o !== n
        ? null
        : s.createPortal(
              (0, r.jsx)("div", {
                  className: a()(p.footer, t),
                  children: i,
              }),
              l,
              n,
          );
}
