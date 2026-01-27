n.d(t, {
    A: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(253932),
    o = n(652215);

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
            (0, i.mMO)(
                async () => {
                    let { default: t } = await Promise.all([
                        n.e("54809"),
                        n.e("87093"),
                        n.e("38939"),
                        n.e("94700"),
                        n.e("3795"),
                        n.e("28936"),
                        n.e("40215"),
                        n.e("40396"),
                        n.e("13088"),
                        n.e("48330"),
                        n.e("92414"),
                        n.e("62175"),
                        n.e("97283"),
                        n.e("94857"),
                        n.e("7034"),
                        n.e("20941"),
                        n.e("37372"),
                        n.e("67923"),
                        n.e("3183"),
                        n.e("92917"),
                        n.e("2292"),
                        n.e("45586"),
                        n.e("62733"),
                        n.e("22726"),
                        n.e("83518"),
                        n.e("5152"),
                        n.e("21425"),
                        n.e("52199"),
                        n.e("3911"),
                        n.e("34749"),
                        n.e("44667"),
                        n.e("7803"),
                        n.e("84704"),
                        n.e("67646"),
                        n.e("60667"),
                        n.e("35195"),
                        n.e("5066"),
                        n.e("15172"),
                        n.e("48142"),
                        n.e("70690"),
                    ]).then(n.bind(n, 308229));
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
                    contextKey: t === o.BRT.POPOUT ? i.KX8 : i.SYi,
                },
            );
    a.bm.getSetting() || s ? c() : null == e || e();
}
