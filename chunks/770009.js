r.d(t, { Z: () => O });
var n = r(200651);
r(192379);
var l = r(512722),
    i = r.n(l),
    o = r(442837),
    a = r(52396),
    c = r(592125),
    s = r(970184),
    u = r(151200),
    p = r(96513);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function b(e) {
    let { contentInventoryEntry: t, channel: r } = e,
        { parsedEntry: l } = (0, a.B)();
    return (0, n.jsx)(
        u.Z,
        f(d({}, l), {
            entry: t,
            channel: r
        })
    );
}
function O(e) {
    let t = (0, s.CJ)();
    i()(null != t, 'Component context is not defined. Did you forget to wrap your component in a ComponentStateContextProvider?');
    let { channelId: r } = t,
        l = (0, o.e7)([c.Z], () => c.Z.getChannel(r));
    return (
        i()(null != l, 'channel must be defined'),
        (0, n.jsx)(a.r, {
            location: p._.EMBED,
            entry: e.contentInventoryEntry,
            channel: l,
            errorFallback: null,
            children: (0, n.jsx)(b, f(d({}, e), { channel: l }))
        })
    );
}
