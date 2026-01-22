n.d(t, {
    A: () => f,
}),
    n(747238),
    n(812715),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(379418),
    s = n(900090),
    o = n(194845);

function l(e, t, n) {
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

function c(e) {
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

function f(e, t) {
    return "type" in e
        ? "timestamp" !== e.type
            ? null
            : s.A.getCurrentConfig(
                    {
                        location: "renderElement",
                    },
                    {
                        autoTrackExposure: !1,
                    },
                ).enabled
              ? (0, r.jsx)(
                    p,
                    d(c({}, t), {
                        timestamp: e.parsed,
                    }),
                )
              : null
        : null;
}

function p(e) {
    var t;
    let { timestamp: n, replace: s } = e,
        l = (e) => {
            let { timestamp: t, format: r } = e,
                i = null != t ? Math.floor(t.getTime() / 1e3) : n.timestamp,
                o = null != r ? r : n.format;
            s((0, a.tf)(i, o));
        };
    return (0, r.jsxs)("div", {
        className: o.k,
        children: [
            (0, r.jsx)(i.J3s, {
                value: n.parsed,
                onSelect: (e) => {
                    l({
                        timestamp: e.toDate(),
                    });
                },
            }),
            (0, r.jsx)(i.czz, {
                value: n.parsed,
                onChange: (e) => {
                    l({
                        timestamp: e.toDate(),
                    });
                },
            }),
            (0, r.jsx)(i.z6M, {
                options: Object.entries(a.kx).map((e) => {
                    let [t, r] = e;
                    return {
                        name: r(n.parsed),
                        value: t,
                    };
                }),
                value: null != (t = n.format) ? t : a.$z,
                onChange: (e) => {
                    l({
                        format: e,
                    });
                },
            }),
        ],
    });
}
