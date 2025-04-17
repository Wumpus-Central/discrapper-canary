t.d(n, { Z: () => c });
var r = t(200651);
t(192379);
var i = t(481060),
    o = t(695346),
    a = t(981631);
function c(e, n) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o.qF.getSetting() || c
        ? (0, i.ZDy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('94342'), t.e('86029'), t.e('16172'), t.e('84605'), t.e('25292'), t.e('90508'), t.e('95477'), t.e('22878'), t.e('13351'), t.e('91245'), t.e('74891'), t.e('6380'), t.e('46097'), t.e('8739'), t.e('18543'), t.e('58059'), t.e('28467'), t.e('20875'), t.e('86282'), t.e('22173'), t.e('30243'), t.e('37447'), t.e('53937'), t.e('76540'), t.e('23491'), t.e('80284'), t.e('15483'), t.e('91259'), t.e('17938'), t.e('93602'), t.e('27146'), t.e('49508'), t.e('22646'), t.e('60691'), t.e('25183'), t.e('64838'), t.e('3940'), t.e('2286'), t.e('27458'), t.e('64865'), t.e('78900'), t.e('74028'), t.e('88712'), t.e('30419'), t.e('18824'), t.e('82081'), t.e('44114'), t.e('62117'), t.e('36526'), t.e('87934'), t.e('56422'), t.e('26011'), t.e('87174'), t.e('21173')]).then(t.bind(t, 601572));
                  return (t) => {
                      var i, o;
                      return (0, r.jsx)(
                          n,
                          ((i = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      r = Object.keys(t);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (r = r.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      r.forEach(function (n) {
                                          var r;
                                          (r = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: r,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = r);
                                      });
                              }
                              return e;
                          })({}, t)),
                          (o = o =
                              {
                                  onEnable: e,
                                  videoEnabled: !1
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                              : (function (e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, r);
                                    }
                                    return t;
                                })(Object(o)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                                }),
                          i)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === a.IlC.POPOUT ? i.u1M : i.z1l
              }
          )
        : null == e || e();
}
