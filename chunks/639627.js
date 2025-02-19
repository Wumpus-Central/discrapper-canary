n.d(t, { T: () => d });
var r = n(200651),
    i = n(192379),
    o = n(952265),
    a = n(813197);
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
let d = i.forwardRef(function (e, t) {
    let s = i.useRef(null);
    function c(t, i) {
        (0, o.ZD)(async () => {
            let { default: o } = await Promise.all([n.e('91689'), n.e('59732'), n.e('25005'), n.e('22682')]).then(n.bind(n, 73620));
            return (n) =>
                (0, r.jsx)(
                    o,
                    l(
                        {
                            imgURI: t,
                            file: i,
                            onCrop: e.onChange
                        },
                        n
                    )
                );
        });
    }
    return (
        i.useImperativeHandle(
            t,
            () => ({
                focus: () => null,
                activate: () => {
                    var e;
                    return null === (e = s.current) || void 0 === e || e.activateUploadDialogue(), !1;
                }
            }),
            []
        ),
        (0, r.jsx)('div', {
            style: { position: 'relative' },
            children: (0, r.jsx)(
                a.ZP,
                u(l({}, e), {
                    ref: s,
                    onChange: c
                })
            )
        })
    );
});
