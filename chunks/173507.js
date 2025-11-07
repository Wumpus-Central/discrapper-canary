n.d(t, { Z: () => s });
var i = n(951288);
n(647438);
var l = n(481060),
    r = n(695346),
    a = n(981631);
function s(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.qF.getSetting() || s
        ? (0, l.ZDy)(
              async () => {
                  let { default: t } = await n.e("91018").then(n.bind(n, 601572));
                  return (n) => {
                      var l, r;
                      return (0, i.jsx)(
                          t,
                          ((l = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = i);
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
                              ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e));
                                }),
                          l),
                      );
                  };
              },
              {
                  modalKey: "camera-preview",
                  contextKey: t === a.IlC.POPOUT ? l.u1M : l.z1l,
              },
          )
        : null == e || e();
}
