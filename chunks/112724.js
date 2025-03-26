n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(393903);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    d = {
        width: '100%',
        height: '100%',
        flex: 1
    };
function f(e) {
    return i.forwardRef(function (t, n) {
        let [a, l] = i.useState({
                width: 0,
                height: 0
            }),
            f = i.useCallback((e) => {
                if (null != e) {
                    let { width: t, height: n } = e.getBoundingClientRect();
                    l({
                        width: t,
                        height: n
                    });
                }
            }, []),
            _ = (0, o.y)(f);
        return (
            i.useImperativeHandle(n, () => ({
                triggerResize: () => {
                    f(_.current);
                }
            })),
            (0, r.jsx)('div', {
                ref: _,
                style: u,
                children: (0, r.jsx)(
                    e,
                    c(s({}, t), {
                        width: a.width,
                        height: a.height,
                        style: d
                    })
                )
            })
        );
    });
}
