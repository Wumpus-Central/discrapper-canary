t.d(n, {
    VS: () => v,
    oh: () => g,
    ok: () => j,
});
var a = t(951288);
t(647438);
var i = t(120356),
    r = t.n(i),
    l = t(512722),
    s = t.n(l),
    o = t(603113),
    c = t(481060),
    d = t(183369),
    u = t(401561),
    m = t(388032),
    p = t(946410);
function x(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                var a;
                (a = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = a);
            });
    }
    return e;
}
function g(e) {
    var n, t;
    let i,
        { onNext: r, stepAction: l, stepLoading: o } = (0, d.aj)(),
        p = null == l || null == (n = l.onNext) ? void 0 : n.type;
    switch (p) {
        case "go-to-step":
            i = m.intl.string(m.t["3PatS0"]);
            break;
        case "purchase":
            i = m.intl.string(u.default.MPNPJS);
            break;
        case "save":
            i = m.intl.string(m.t.R3BPHx);
    }
    return (
        s()(null != i, "Invalid stepType ".concat(p)),
        (0, a.jsx)(
            c.zxk,
            x(
                {
                    variant: "purchase" === p ? "expressive" : "primary",
                    text: i,
                    onClick: r,
                    icon: (null == l || null == (t = l.onNext) ? void 0 : t.type) === "go-to-step" ? c.ZSh : void 0,
                    iconPosition: "end",
                    loading: o,
                },
                e,
            ),
        )
    );
}
function v(e) {
    var n, t, i;
    let r,
        { onBack: l, stepAction: o } = (0, d.aj)(),
        u = null == o || null == (n = o.onBack) ? void 0 : n.type;
    switch (u) {
        case "go-to-step":
            r = m.intl.string(m.t["13/7kZ"]);
            break;
        case "close":
            r = m.intl.string(m.t.cpT0Cg);
    }
    return (
        s()(null != r, "Invalid stepType ".concat(u)),
        (0, a.jsx)(
            c.zxk,
            ((t = x({}, e)),
            (i = i =
                {
                    variant: "secondary",
                    text: r,
                    onClick: l,
                    icon: "go-to-step" === u ? c.whL : void 0,
                    iconPosition: "start",
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : (function (e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, a);
                      }
                      return t;
                  })(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  }),
            t),
        )
    );
}
function j(e) {
    let { step: n, className: t, children: i } = e,
        { footerNode: l, step: s } = (0, d.aj)();
    return null == l || s !== n
        ? null
        : o.createPortal(
              (0, a.jsx)("div", {
                  className: r()(p.footer, t),
                  children: i,
              }),
              l,
              n,
          );
}
