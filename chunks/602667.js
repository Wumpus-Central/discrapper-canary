n.d(t, { A: () => m }), n(388685);
var r = n(473749),
    i = n(907331),
    a = n(228577),
    o = n(442837),
    s = n(110924),
    l = n(451478),
    c = n(915750);
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
            o = a !== (0, s.Z)(a);
        return {
            visible: a,
            visibleChanged: o,
            reference: (0, i.O)((e) => n(e), c.PI),
        };
    },
    h = () => {
        let e = (0, o.e7)([l.Z], () => l.Z.isFocused()),
            t = (0, s.Z)(e),
            n = e !== t;
        return {
            focused: e,
            focusedChanged: n,
        };
    },
    m = r.memo(function (e) {
        let { focused: t, focusedChanged: n } = h(),
            { visible: i, visibleChanged: o, reference: s } = _(e.overrideVisibility),
            { key: l, adContentIds: u } = (0, c.$I)(e),
            f = p(d({}, e), {
                focused: t,
                focusedChanged: n,
                visible: i,
                visibleChanged: o,
                reference: s,
            });
        return "questOrQuests" in e
            ? (0, r.createElement)(
                  c.ui,
                  p(d({}, f), {
                      key: l,
                      adContentIds: u,
                      adCreativeType: a.E.QUEST,
                  }),
              )
            : (0, r.createElement)(
                  c.ui,
                  p(d({}, f), {
                      key: l,
                      adContentIds: u,
                      adCreativeType: e.adCreativeType,
                  }),
              );
    });
