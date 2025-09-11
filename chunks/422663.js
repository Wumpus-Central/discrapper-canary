t.d(n, {
    VS: () => b,
    oh: () => x,
    ok: () => j,
});
var i = t(951288);
t(647438);
var r = t(120356),
    a = t.n(r),
    l = t(512722),
    o = t.n(l),
    s = t(603113),
    c = t(481060),
    d = t(183369),
    u = t(440589),
    m = t(388032),
    g = t(698339);
function p(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function f(e) {
    let { onNext: n } = (0, d.aj)();
    return (0, i.jsx)(
        c.zxk,
        p(
            {
                variant: "primary",
                text: m.intl.string(m.t["3PatS0"]),
                onClick: n,
                icon: c.ZSh,
                iconPosition: "end",
            },
            e,
        ),
    );
}
function v(e) {
    let { onNext: n, stepLoading: t, portkeyInstance: r, availableBoostCount: a, planCost: l } = (0, d.aj)(),
        o = l > 0 && a < l,
        s =
            l > 0
                ? null != r
                    ? m.intl.string(u.default["1fogMj"])
                    : o
                      ? m.intl.string(u.default.MPNPJS)
                      : m.intl.string(u.default.ShxV5e)
                : m.intl.string(m.t.K344S0);
    return (0, i.jsx)(
        c.zxk,
        p(
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
function x(e) {
    var n;
    let { stepAction: t } = (0, d.aj)(),
        r = null == t || null == (n = t.onNext) ? void 0 : n.type;
    switch (r) {
        case "go-to-step":
            return (0, i.jsx)(f, p({}, e));
        case "save":
            return (0, i.jsx)(v, p({}, e));
        default:
            o()(null != r, "Invalid stepType ".concat(r));
    }
}
function b(e) {
    var n, t, r;
    let a,
        { onBack: l, stepAction: s } = (0, d.aj)(),
        u = null == s || null == (n = s.onBack) ? void 0 : n.type;
    switch (u) {
        case "go-to-step":
            a = m.intl.string(m.t["13/7kZ"]);
            break;
        case "close":
            a = m.intl.string(m.t.cpT0Cg);
    }
    return (
        o()(null != a, "Invalid stepType ".concat(u)),
        (0, i.jsx)(
            c.zxk,
            ((t = p({}, e)),
            (r = r =
                {
                    variant: "secondary",
                    text: a,
                    onClick: l,
                    icon: "go-to-step" === u ? c.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, i);
                      }
                      return t;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t),
        )
    );
}
function j(e) {
    let { step: n, className: t, children: r } = e,
        { footerNode: l, step: o } = (0, d.aj)();
    return null == l || o !== n
        ? null
        : s.createPortal(
              (0, i.jsx)("div", {
                  className: a()(g.footer, t),
                  children: r,
              }),
              l,
              n,
          );
}
