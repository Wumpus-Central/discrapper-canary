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
                    let { default: t } = await n.e("91018").then(n.bind(n, 601572));
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
