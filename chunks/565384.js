n.d(t, {
    Ez: () => h,
    Ps: () => u,
    Xo: () => _,
    dT: () => f,
    dw: () => d,
    k$: () => p
}),
    n(47120);
var r = n(372793),
    i = n(990547),
    o = n(731965);
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
let l = Object.freeze({
        debugTrackedData: null,
        impressions: []
    }),
    c = (0, r.F)((e) => l),
    u = (e) => {
        (0, o.j)(() => {
            c.setState((t) => ({
                impressions: [...t.impressions, e]
            }));
        });
    },
    d = (e) => {
        (0, o.j)(() => {
            c.setState((t) => ({ impressions: t.impressions.filter((t) => t.sequenceId !== e.sequenceId) }));
        });
    },
    f = (e, t) => {
        (0, o.j)(() => {
            c.setState(() => ({ debugTrackedData: s({ name: e }, t) }));
        });
    },
    _ = c;
function p() {
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
