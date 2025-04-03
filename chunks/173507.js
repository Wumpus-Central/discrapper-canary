n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(695346),
    a = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e, t) {
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = () =>
            (0, i.ZDy)(
                async () => {
                    let { default: t } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('84605'), n.e('25292'), n.e('95477'), n.e('90508'), n.e('11212'), n.e('22878'), n.e('13351'), n.e('35397'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('6208'), n.e('80284'), n.e('20875'), n.e('85574'), n.e('68631'), n.e('17938'), n.e('9710'), n.e('93602'), n.e('24967'), n.e('62117'), n.e('49508'), n.e('22646'), n.e('60691'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('48923'), n.e('76607'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('74669'), n.e('32'), n.e('19948'), n.e('87185'), n.e('50150'), n.e('96500')]).then(n.bind(n, 601572));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            u(l({}, n), {
                                onEnable: e,
                                videoEnabled: !1
                            })
                        );
                },
                {
                    modalKey: 'camera-preview',
                    contextKey: t === a.IlC.POPOUT ? i.u1M : i.z1l
                }
            );
    o.qF.getSetting() || s ? c() : null == e || e();
}
