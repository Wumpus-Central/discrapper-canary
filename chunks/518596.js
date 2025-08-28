n.d(t, { Z: () => c });
var r = n(951288),
    i = n(481060),
    l = n(570140),
    a = n(37234),
    o = n(526665),
    s = n(981631);
function c() {
    var e;
    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    let t = arguments.length > 1 ? arguments[1] : void 0;
    l.Z.dispatch({
        type: "USER_SETTINGS_MODAL_OPEN",
        section: null != (e = null == t ? void 0 : t.section) ? e : null,
        subsection: null == t ? void 0 : t.subsection,
        openWithoutBackstack: !1,
    }),
        (0, o.yP)("openUserSettings")
            ? (0, i.ZDy)(
                  async () => {
                      let { default: e } = await Promise.all([n.e("5550"), n.e("51651")]).then(n.bind(n, 245286));
                      return (t) =>
                          (0, r.jsx)(
                              e,
                              (function (e) {
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
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, t),
                          );
                  },
                  { modalKey: "USER_SETTINGS_MODAL_MODAL_KEY" },
              )
            : (0, a.jN)(s.S9g.USER_SETTINGS);
}
