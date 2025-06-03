t.d(n, { Z: () => l });
var i = t(255367);
t(73800);
var r = t(481060),
    o = t(695346),
    a = t(981631);
function l(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o.qF.getSetting() || l
        ? (0, r.ZDy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('14006'), t.e('68856'), t.e('16172'), t.e('70791'), t.e('25292'), t.e('90508'), t.e('22878'), t.e('13351'), t.e('62134'), t.e('74891'), t.e('6380'), t.e('46097'), t.e('8739'), t.e('18543'), t.e('58059'), t.e('28467'), t.e('86282'), t.e('17938'), t.e('28767'), t.e('30243'), t.e('37447'), t.e('53937'), t.e('76540'), t.e('23491'), t.e('80284'), t.e('15483'), t.e('36087'), t.e('93602'), t.e('19027'), t.e('94136'), t.e('49508'), t.e('22646'), t.e('25183'), t.e('64838'), t.e('3940'), t.e('60691'), t.e('2286'), t.e('40694'), t.e('89387'), t.e('88622'), t.e('87040'), t.e('88712'), t.e('30419'), t.e('66317'), t.e('18824'), t.e('82081'), t.e('8787'), t.e('62117'), t.e('90202'), t.e('86133'), t.e('6325'), t.e('22237')]).then(t.bind(t, 601572));
                  return (t) => {
                      var r, o;
                      return (0, i.jsx)(
                          n,
                          ((r = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      i = Object.keys(t);
                                  'function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (n) {
                                          var i;
                                          (i = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = i);
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
                              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                              : (function (e, n) {
                                    var t = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        t.push.apply(t, i);
                                    }
                                    return t;
                                })(Object(o)).forEach(function (e) {
                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                                }),
                          r)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === a.IlC.POPOUT ? r.u1M : r.z1l
              }
          )
        : null == e || e();
}
