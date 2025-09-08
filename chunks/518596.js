n.d(t, {
    I: () => p,
    Z: () => h,
});
var r = n(951288),
    i = n(481060),
    a = n(570140),
    o = n(37234),
    s = n(313789),
    l = n(526665),
    c = n(981631);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = "USER_SETTINGS_MODAL_MODAL_KEY";
function h() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s.n.ACCOUNT_PANEL,
        u = arguments.length > 1 ? arguments[1] : void 0;
    a.Z.dispatch({
        type: "USER_SETTINGS_MODAL_OPEN",
        section: null != (e = null == u ? void 0 : u.section) ? e : null,
        subsection: null == u ? void 0 : u.subsection,
        openWithoutBackstack: !1,
    }),
        (0, l.yP)("openUserSettings")
            ? (0, i.ZDy)(
                  async () => {
                      let { default: e } = await n.e("47129").then(n.bind(n, 245286));
                      return (n) => (0, r.jsx)(e, _(d({}, n), { target: t }));
                  },
                  { modalKey: p },
              )
            : (0, o.jN)(c.S9g.USER_SETTINGS);
}
