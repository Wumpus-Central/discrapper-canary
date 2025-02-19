n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(695346),
    o = n(981631);
function l(e, t) {
    a.qF.getSetting()
        ? (0, i.ZDy)(
              async () => {
                  let { default: t } = await Promise.all([n.e('50506'), n.e('68880'), n.e('23217'), n.e('84605'), n.e('25292'), n.e('51269'), n.e('8016'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('78447'), n.e('97349'), n.e('55186'), n.e('17938'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('76540'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('84335'), n.e('28467'), n.e('22173'), n.e('68445'), n.e('46906'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('49508'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('85574'), n.e('38599'), n.e('67671'), n.e('48923'), n.e('30419'), n.e('99839'), n.e('18824'), n.e('60691'), n.e('624'), n.e('17961'), n.e('84466'), n.e('71864'), n.e('27805'), n.e('62983')]).then(n.bind(n, 601572));
                  return (n) => {
                      var i, a;
                      return (0, r.jsx)(
                          t,
                          ((i = (function (e) {
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
                              ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(a)).forEach(function (e) {
                                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                }),
                          i)
                      );
                  };
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: t === o.IlC.POPOUT ? i.u1M : i.z1l
              }
          )
        : null == e || e();
}
