n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(695346),
    a = n(981631);
function c(e, t) {
    let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    o.qF.getSetting() || c
        ? (0, r.ZDy)(
              async () => {
                  let { default: t } = await Promise.all([n.e('14006'), n.e('66549'), n.e('8381'), n.e('95355'), n.e('8895'), n.e('70791'), n.e('70274'), n.e('25292'), n.e('8016'), n.e('80417'), n.e('31978'), n.e('22878'), n.e('74891'), n.e('85372'), n.e('6380'), n.e('28467'), n.e('8739'), n.e('16766'), n.e('86282'), n.e('24037'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('44421'), n.e('30424'), n.e('76540'), n.e('40694'), n.e('94313'), n.e('66005'), n.e('24022'), n.e('94136'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('27458'), n.e('17218'), n.e('67501'), n.e('83075'), n.e('88712'), n.e('30419'), n.e('66317'), n.e('89001'), n.e('18824'), n.e('22243'), n.e('58636'), n.e('12769'), n.e('81409'), n.e('6307')]).then(n.bind(n, 601572));
                  return (n) => {
                      var r, o;
                      return (0, i.jsx)(
                          t,
                          ((r = (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      i = Object.keys(n);
                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                      (i = i.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          })
                                      )),
                                      i.forEach(function (t) {
                                          var i;
                                          ((i = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: i,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0
                                                    })
                                                  : (e[t] = i));
                                      }));
                              }
                              return e;
                          })({}, n)),
                          (o = o =
                              {
                                  onEnable: e,
                                  videoEnabled: !1
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var i = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, i);
                                    }
                                    return n;
                                })(Object(o)).forEach(function (e) {
                                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
                                }),
                          r)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: t === a.IlC.POPOUT ? r.u1M : r.z1l
              }
          )
        : null == e || e();
}
