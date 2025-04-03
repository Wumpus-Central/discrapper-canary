n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(695346),
    a = n(981631);
function c(e, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.qF.getSetting() || c
        ? (0, o.ZDy)(
              async () => {
                  let { default: t } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('84605'), n.e('25292'), n.e('95477'), n.e('90508'), n.e('11212'), n.e('22878'), n.e('13351'), n.e('35397'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('6208'), n.e('80284'), n.e('20875'), n.e('85574'), n.e('68631'), n.e('17938'), n.e('9710'), n.e('93602'), n.e('24967'), n.e('62117'), n.e('49508'), n.e('22646'), n.e('60691'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('76607'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('74669'), n.e('32'), n.e('19948'), n.e('87185'), n.e('50150'), n.e('20369')]).then(n.bind(n, 601572));
                  return (n) => {
                      var o, r;
                      return (0, i.jsx)(
                          t,
                          ((o = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          (i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i);
                                      });
                              }
                              return e;
                          })({}, n)),
                          (r = r =
                              {
                                  onEnable: e,
                                  videoEnabled: !1
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(r)).forEach(function (e) {
                                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
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
