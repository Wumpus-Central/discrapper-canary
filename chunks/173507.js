t.d(n, { Z: () => c });
var i = t(255367);
t(73800);
var r = t(481060),
    o = t(695346),
    a = t(981631);
function c(e, n) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o.qF.getSetting() || c
        ? (0, r.ZDy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('14006'), t.e('8381'), t.e('49645'), t.e('8895'), t.e('70791'), t.e('25292'), t.e('22878'), t.e('80417'), t.e('31978'), t.e('74891'), t.e('85372'), t.e('6380'), t.e('28467'), t.e('8739'), t.e('7839'), t.e('86282'), t.e('17938'), t.e('38626'), t.e('30243'), t.e('37447'), t.e('53937'), t.e('44421'), t.e('23491'), t.e('76540'), t.e('61216'), t.e('95336'), t.e('11509'), t.e('94136'), t.e('49508'), t.e('22646'), t.e('64838'), t.e('25183'), t.e('3940'), t.e('40694'), t.e('36006'), t.e('88622'), t.e('94363'), t.e('88712'), t.e('30419'), t.e('66317'), t.e('18824'), t.e('91372'), t.e('41343'), t.e('51164'), t.e('22454'), t.e('7766')]).then(t.bind(t, 601572));
                  return (t) => {
                      var r, o;
                      return (0, i.jsx)(
                          n,
                          ((r = (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      i = Object.keys(t);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (n) {
                                          var i;
                                          ((i = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[n] = i));
                                      }));
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
