n.d(t, { v: () => g });
var r = n(473749),
    i = n(442837),
    a = n(581883),
    o = n(592125),
    s = n(699516),
    l = n(594174),
    c = n(294509),
    u = n(629710),
    d = n(721360);
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
function m(e, t) {
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
function h(e, t) {
    let n = (0, u.AT)(),
        f = (0, i.e7)([l.default], () => l.default.getCurrentUser()),
        _ = (0, i.e7)([o.Z, s.Z], () => (0, u.hi)(e, t, [o.Z, s.Z])),
        h = (0, i.e7)(
            [a.Z],
            () => n.reduce((e, t) => m(p({}, e), { [t.harmType]: t.getProtoUserSettings(a.Z.settings) }), {}),
            [n],
            d.l,
        ),
        g = r.useMemo(
            () =>
                null == _ || t === (null == f ? void 0 : f.id) || null == f
                    ? []
                    : n
                          .map((e) => {
                              let t = h[e.harmType],
                                  n = null == _ ? null : e.getUserSettingsWithDefaults(t)[_];
                              return (0, u.aQ)(n) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [_, n, h, t, f],
        );
    return 0 === g.length ? c.qn.NONE : (0, u.Hz)(g);
}
function g(e) {
    let { channelId: t, authorId: n } = null == e ? {} : (0, u.px)(e);
    return h(t, n);
}
