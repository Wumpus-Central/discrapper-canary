n.d(t, { R: () => m }), n(896048);
var r = n(64700),
    i = n(172218),
    a = n(323889),
    s = n(311907),
    o = n(475743),
    l = n(531685),
    c = n(906822);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = (e) => {
        let [t, n] = r.useState(!1),
            a = null != e ? e : t,
            s = a !== (0, o.A)(a);
        return {
            visible: a,
            visibleChanged: s,
            reference: (0, i.K)((e) => n(e), c.ur),
        };
    },
    h = () => {
        let e = (0, s.bG)([l.A], () => l.A.isFocused()),
            t = (0, o.A)(e),
            n = e !== t;
        return {
            focused: e,
            focusedChanged: n,
        };
    },
    m = r.memo(function (e) {
        let { focused: t, focusedChanged: n } = h(),
            { visible: i, visibleChanged: s, reference: o } = _(e.overrideVisibility),
            { key: l, adContentIds: u } = (0, c.RC)(e),
            f = p(d({}, e), {
                focused: t,
                focusedChanged: n,
                visible: i,
                visibleChanged: s,
                reference: o,
            });
        return "questOrQuests" in e
            ? (0, r.createElement)(
                  c.bK,
                  p(d({}, f), {
                      key: l,
                      adContentIds: u,
                      adCreativeType: a.p.QUEST,
                  }),
              )
            : (0, r.createElement)(
                  c.bK,
                  p(d({}, f), {
                      key: l,
                      adContentIds: u,
                      adCreativeType: e.adCreativeType,
                  }),
              );
    });
