n.d(t, {
    P: () => g,
});
var r = n(64700),
    i = n(311907),
    a = n(617617),
    s = n(734057),
    o = n(994500),
    l = n(287809),
    c = n(811602),
    u = n(282108),
    d = n(975214);

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

function m(e, t) {
    let n = (0, u.ku)(),
        f = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        _ = (0, i.bG)([s.A, o.A], () => (0, u.c2)(e, t, [s.A, o.A])),
        m = (0, i.bG)(
            [a.A],
            () =>
                n.reduce(
                    (e, t) =>
                        h(p({}, e), {
                            [t.harmType]: t.getProtoUserSettings(a.A.settings),
                        }),
                    {},
                ),
            [n],
            d.M,
        ),
        g = r.useMemo(
            () =>
                null == _ || t === (null == f ? void 0 : f.id) || null == f
                    ? []
                    : n
                          .map((e) => {
                              let t = m[e.harmType],
                                  n = null == _ ? null : e.getUserSettingsWithDefaults(t)[_];
                              return (0, u.f)(n) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [_, n, m, t, f],
        );
    return 0 === g.length ? c.LO.NONE : (0, u.LE)(g);
}

function g(e) {
    let { channelId: t, authorId: n } = null == e ? {} : (0, u.nx)(e);
    return m(t, n);
}
