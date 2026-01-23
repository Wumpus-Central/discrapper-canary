n.d(t, {
    R: () => g,
}),
    n(896048);
var r = n(64700),
    i = n(172218),
    a = n(323889),
    s = n(311907),
    o = n(475743),
    l = n(531685),
    c = n(266569),
    u = n(971649);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
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

function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(23766);
let h = (e) => {
        let [t, n] = r.useState(!1),
            a = null != e ? e : t,
            s = a !== (0, o.A)(a);
        return {
            visible: a,
            visibleChanged: s,
            reference: (0, i.K)((e) => n(e), 0.5),
        };
    },
    m = () => {
        let e = (0, s.bG)([l.A], () => l.A.isFocused()),
            t = (0, o.A)(e),
            n = e !== t;
        return {
            focused: e,
            focusedChanged: n,
        };
    },
    g = r.memo(function (e) {
        let { focused: t, focusedChanged: n } = m(),
            { visible: i, visibleChanged: s, reference: o } = h(e.overrideVisibility),
            { key: l, adContentIds: d } = (0, u.RC)(e),
            p = _(f({}, e), {
                focused: t,
                focusedChanged: n,
                visible: i,
                visibleChanged: s,
                reference: o,
            });
        return "questOrQuests" in e
            ? (0, r.createElement)(
                  c.xs,
                  _(f({}, p), {
                      key: l,
                      adContentIds: d,
                      adCreativeType: a.p.QUEST,
                  }),
              )
            : (0, r.createElement)(
                  c.xs,
                  _(f({}, p), {
                      key: l,
                      adContentIds: d,
                      adCreativeType: e.adCreativeType,
                  }),
              );
    });
