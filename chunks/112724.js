n.d(t, { Z: () => _ }), n(388685);
var r = n(200651),
    i = n(192379),
    o = n(393903),
    a = n(448986);
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
let d = {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    f = {
        width: '100%',
        height: '100%',
        flex: 1
    };
function _(e) {
    return i.forwardRef(function (t, n) {
        let [s, c] = i.useState({
                width: 0,
                height: 0
            }),
            _ = (0, a.Z)((e) => {
                if (null != e) {
                    let { width: t, height: n } = e;
                    c({
                        width: t,
                        height: n
                    });
                }
            }),
            p = (0, a.Z)((e) => {
                _(e.contentRect);
            }),
            h = (0, o.y)(p);
        return (
            i.useImperativeHandle(n, () => ({
                triggerResize: () => {
                    var e;
                    _(null == (e = h.current) ? void 0 : e.getBoundingClientRect());
                }
            })),
            (0, r.jsx)('div', {
                ref: h,
                style: d,
                children: (0, r.jsx)(
                    e,
                    u(l({}, t), {
                        width: s.width,
                        height: s.height,
                        style: f
                    })
                )
            })
        );
    });
}
