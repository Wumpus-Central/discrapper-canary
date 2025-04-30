n.d(t, { T: () => f });
var r = n(200651),
    i = n(192379),
    o = n(670596),
    a = n(952265),
    s = n(813197);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = i.forwardRef(function (e, t) {
    let { onInteraction: l, onChange: u } = e,
        f = i.useRef(null);
    function _(e, t) {
        (0, a.ZD)(async () => {
            let { default: i } = await Promise.all([n.e('91689'), n.e('59732'), n.e('48389')]).then(n.bind(n, 712451));
            return (n) =>
                (0, r.jsx)(
                    i,
                    c(
                        {
                            imageUri: e,
                            file: t,
                            onCrop: u
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
                    return null == l || l(o.U.IMAGE_UPLOAD), null == (e = f.current) || e.activateUploadDialogue(), !1;
                }
            }),
            [l]
        ),
        (0, r.jsx)('div', {
            style: { position: 'relative' },
            children: (0, r.jsx)(
                s.ZP,
                d(c({}, e), {
                    ref: f,
                    onChange: _
                })
            )
        })
    );
});
