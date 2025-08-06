n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    o = n(399606),
    a = n(481060),
    s = n(125268),
    l = n(673125),
    c = n(871499),
    u = n(304388),
    d = n(388032);
function f(e, t, n) {
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
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function p(e) {
    if (null == e) throw TypeError('Cannot destructure ' + e);
    return e;
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            }));
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E() {
    let e = (0, o.e7)([l.Z], () => !l.Z.visibleOverlayCanvas),
        t = i.useRef(null);
    return (0, r.jsx)(u.Z, {
        renderPopout: () => null,
        popoutTargetRef: t,
        children: (n) => {
            var i = _({}, p(n));
            return (0, r.jsx)(
                c.Z,
                g(h({}, i), {
                    buttonRef: t,
                    label: d.intl.string(d.t.Cuo44O),
                    isActive: e,
                    iconComponent: a.tEF,
                    onClick: s.LT
                })
            );
        }
    });
}
