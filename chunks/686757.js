n.d(t, {
    SD: () => p,
    Vm: () => u,
    eE: () => f,
    g$: () => _,
    u5: () => d,
    uJ: () => h,
}),
    n(896048);
var r = n(265690),
    i = n(110259),
    a = n(121894);
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
function o(e) {
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
let l = Object.freeze({
        debugTrackedData: null,
        impressions: [],
    }),
    c = (0, r.h)((e) => l),
    u = (e) => {
        (0, a.r)(() => {
            c.setState((t) => ({
                impressions: [...t.impressions, e],
            }));
        });
    },
    d = (e) => {
        (0, a.r)(() => {
            c.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    f = (e, t) => {
        (0, a.r)(() => {
            c.setState(() => ({ debugTrackedData: o({ name: e }, t) }));
        });
    },
    p = c;
function _() {
    let e = {};
    return (
        c.getState().impressions.forEach((t) => {
            t.type === i.ImpressionTypes.PAGE ? (e.page = t.name) : (e.section = t.name);
        }),
        e
    );
}
function h() {
    return c.getState().impressions;
}
