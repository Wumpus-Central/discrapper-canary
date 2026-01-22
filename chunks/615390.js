n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(311907),
    o = n(694705),
    l = n(734057),
    c = n(207963),
    u = n(681168),
    d = n(158611);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { contentInventoryEntry: t, channel: n } = e,
        { parsedEntry: i } = (0, o.v)();
    return (0, r.jsx)(
        u.A,
        h(p({}, i), {
            entry: t,
            channel: n,
        }),
    );
}
function g(e) {
    let t = (0, c.jc)();
    a()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        i = (0, s.bG)([l.A], () => l.A.getChannel(n));
    return (
        a()(null != i, "channel must be defined"),
        (0, r.jsx)(o.f, {
            location: d.Z.EMBED,
            entry: e.contentInventoryEntry,
            channel: i,
            errorFallback: null,
            children: (0, r.jsx)(m, h(p({}, e), { channel: i })),
        })
    );
}
