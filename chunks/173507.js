n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(695346),
    o = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
                    let { default: t } = await Promise.all([
                        n.e("14006"),
                        n.e("91584"),
                        n.e("85911"),
                        n.e("8895"),
                        n.e("70791"),
                        n.e("70274"),
                        n.e("25292"),
                        n.e("8016"),
                        n.e("80417"),
                        n.e("31978"),
                        n.e("22878"),
                        n.e("74891"),
                        n.e("85372"),
                        n.e("6380"),
                        n.e("28467"),
                        n.e("8739"),
                        n.e("86282"),
                        n.e("12830"),
                        n.e("17938"),
                        n.e("38626"),
                        n.e("30243"),
                        n.e("37447"),
                        n.e("53937"),
                        n.e("63575"),
                        n.e("34082"),
                        n.e("76540"),
                        n.e("40694"),
                        n.e("55719"),
                        n.e("91173"),
                        n.e("96750"),
                        n.e("54157"),
                        n.e("94136"),
                        n.e("49508"),
                        n.e("22646"),
                        n.e("64838"),
                        n.e("25183"),
                        n.e("79312"),
                        n.e("3940"),
                        n.e("27458"),
                        n.e("21046"),
                        n.e("81498"),
                        n.e("48091"),
                        n.e("88712"),
                        n.e("30419"),
                        n.e("66317"),
                        n.e("89001"),
                        n.e("18824"),
                        n.e("16766"),
                        n.e("88876"),
                        n.e("62332"),
                        n.e("30202"),
                        n.e("4067"),
                        n.e("31253"),
                        n.e("7171"),
                        n.e("35624"),
                        n.e("3500"),
                    ]).then(n.bind(n, 601572));
                    return (n) =>
                        (0, r.jsx)(
                            t,
                            u(l({}, n), {
                                onEnable: e,
                                videoEnabled: !1,
                            }),
                        );
                },
                {
                    modalKey: "camera-preview",
                    contextKey: t === o.IlC.POPOUT ? i.u1M : i.z1l,
                },
            );
    a.qF.getSetting() || s ? c() : null == e || e();
}
