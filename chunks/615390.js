n.d(t, {
    A: () => h,
});
var r = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    i = n(311907),
    s = n(694705),
    o = n(734057),
    c = n(207963),
    u = n(681168),
    d = n(158611);

function m(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function p(e) {
    let { contentInventoryEntry: t, channel: n } = e,
        { parsedEntry: l } = (0, s.v)();
    return (0, r.jsx)(
        u.A,
        f(m({}, l), {
            entry: t,
            channel: n,
        }),
    );
}

function h(e) {
    let t = (0, c.jc)();
    a()(
        null != t,
        "Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?",
    );
    let { channelId: n } = t,
        l = (0, i.bG)([o.A], () => o.A.getChannel(n));
    return (
        a()(null != l, "channel must be defined"),
        (0, r.jsx)(s.f, {
            location: d.Z.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, r.jsx)(
                p,
                f(m({}, e), {
                    channel: l,
                }),
            ),
        })
    );
}
