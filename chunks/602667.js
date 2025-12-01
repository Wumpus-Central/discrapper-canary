n.d(t, { A: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(907331),
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
        let [t, n] = i.useState(!1),
            r = null != e ? e : t,
            o = r !== (0, s.Z)(r);
        return {
            visible: r,
            visibleChanged: o,
            reference: (0, a.O)((e) => n(e), c.PI),
        };
    },
    m = () => {
        let e = (0, o.e7)([l.Z], () => l.Z.isFocused()),
            t = (0, s.Z)(e),
            n = e !== t;
        return {
            focused: e,
            focusedChanged: n,
        };
    },
    h = i.memo(function (e) {
        let { focused: t, focusedChanged: n } = m(),
            { visible: i, visibleChanged: a, reference: o } = _(e.overrideVisibility);
        return (0, r.jsx)(
            c.ui,
            p(d({}, e), {
                focused: t,
                focusedChanged: n,
                visible: i,
                visibleChanged: a,
                reference: o,
            }),
            (0, c.B5)(e.questOrQuests, e.questContent),
        );
    });
