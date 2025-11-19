n.d(t, { Z: () => f }), n(704826), n(35282), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(660199),
    o = n(40786),
    s = n(392850);
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
            : o.Z.getCurrentConfig({ location: "renderElement" }, { autoTrackExposure: !1 }).enabled
              ? (0, r.jsx)(_, d(c({}, t), { timestamp: e.parsed }))
              : null
        : null;
}
function _(e) {
    var t;
    let { timestamp: n, replace: o } = e,
        l = (e) => {
            let { timestamp: t, format: r } = e,
                i = null != t ? Math.floor(t.getTime() / 1000) : n.timestamp,
                s = null != r ? r : n.format;
            o((0, a.He)(i, s));
        };
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(i.Wrb, {
                value: n.parsed,
                onSelect: (e) => {
                    l({ timestamp: e.toDate() });
                },
            }),
            (0, r.jsx)(i.MGJ, {
                value: n.parsed,
                onChange: (e) => {
                    l({ timestamp: e.toDate() });
                },
            }),
            (0, r.jsx)(i.FXm, {
                options: Object.entries(a.Qh).map((e) => {
                    let [t, r] = e;
                    return {
                        name: r(n.parsed),
                        value: t,
                    };
                }),
                value: null != (t = n.format) ? t : a.K_,
                onChange: (e) => {
                    l({ format: e });
                },
            }),
        ],
    });
}
