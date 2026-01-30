n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(770178),
    o = n(765548);

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
let d = {
        width: "100%",
        height: "100%",
        display: "flex",
    },
    f = {
        width: "100%",
        height: "100%",
        flex: 1,
    };

function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return i.forwardRef(function (n, s) {
        let [c, p] = i.useState({
                width: 0,
                height: 0,
            }),
            _ = (0, o.A)((e) => {
                if (null != e) {
                    let { width: t, height: n } = e;
                    p({
                        width: t,
                        height: n,
                    });
                }
            }),
            h = (0, o.A)((e) => {
                _(e.contentRect);
            }),
            m = (0, a.w)(h, [], t);
        return (
            i.useImperativeHandle(s, () => ({
                triggerResize: () => {
                    var e;
                    _(null == (e = m.current) ? void 0 : e.getBoundingClientRect());
                },
            })),
            (0, r.jsx)("div", {
                ref: m,
                style: d,
                children: (0, r.jsx)(
                    e,
                    u(l({}, n), {
                        width: c.width,
                        height: c.height,
                        style: f,
                    }),
                ),
            })
        );
    });
}
