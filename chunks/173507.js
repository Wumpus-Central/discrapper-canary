n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(695346),
    a = n(981631);
function c(e, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.qF.getSetting() || c
        ? (0, o.ZDy)(
              async () => {
                  let { default: t } = await Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('22878'), n.e('13351'), n.e('91245'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('20875'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('78228'), n.e('37447'), n.e('53937'), n.e('23491'), n.e('76540'), n.e('80284'), n.e('85574'), n.e('91259'), n.e('17938'), n.e('9710'), n.e('93602'), n.e('52066'), n.e('62117'), n.e('49508'), n.e('22646'), n.e('60691'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('27458'), n.e('41851'), n.e('49843'), n.e('84926'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('70371'), n.e('68031'), n.e('93594'), n.e('90118'), n.e('47347'), n.e('69313'), n.e('19477')]).then(n.bind(n, 601572));
                  return (n) => {
                      var o, i;
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
                          (i = i =
                              {
                                  onEnable: e,
                                  videoEnabled: !1
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          o)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: t === a.IlC.POPOUT ? o.u1M : o.z1l
              }
          )
        : null == e || e();
}
