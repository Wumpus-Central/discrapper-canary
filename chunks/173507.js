n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var o = n(481060),
    a = n(695346),
    i = n(981631);
function c(e, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a.qF.getSetting() || c
        ? (0, o.ZDy)(
              async () => {
                  let { default: t } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('11935'), n.e('25292'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('97349'), n.e('50963'), n.e('17938'), n.e('53937'), n.e('6380'), n.e('46097'), n.e('84335'), n.e('76540'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('18895'), n.e('40580'), n.e('88936'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('68241'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('85574'), n.e('39251'), n.e('48923'), n.e('30806'), n.e('30419'), n.e('88712'), n.e('18824'), n.e('60691'), n.e('1815'), n.e('45847'), n.e('40247'), n.e('26593'), n.e('27516'), n.e('93346')]).then(n.bind(n, 601572));
                  return (n) => {
                      var o, a;
                      return (0, r.jsx)(
                          t,
                          ((o = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      r = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (t) {
                                          var r;
                                          (r = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = r);
                                      });
                              }
                              return e;
                          })({}, n)),
                          (a = a =
                              {
                                  onEnable: e,
                                  videoEnabled: !1
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(a)).forEach(function (e) {
                                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                                }),
                          o)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: t === i.IlC.POPOUT ? o.u1M : o.z1l
              }
          )
        : null == e || e();
}
