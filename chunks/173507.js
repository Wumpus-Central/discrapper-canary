n.d(t, { Z: () => s });
var l = n(951288);
n(647438);
var i = n(481060),
    r = n(695346),
    a = n(981631);
function s(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.qF.getSetting() || s
        ? (0, i.ZDy)(
              async () => {
                  let { default: t } = await n.e("91018").then(n.bind(n, 601572));
                  return (n) => {
                      var i, r;
                      return (0, l.jsx)(
                          t,
                          ((i = (function (e) {
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
                          })({}, n)),
                          (r = r =
                              {
                                  onEnable: e,
                                  videoEnabled: !1,
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var l = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, l);
                                    }
                                    return n;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          i),
                      );
                  };
              },
              {
                  modalKey: "camera-preview",
                  contextKey: t === a.IlC.POPOUT ? i.u1M : i.z1l,
              },
          )
        : null == e || e();
}
