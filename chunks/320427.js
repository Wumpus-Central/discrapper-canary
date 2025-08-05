n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    a = n(399606),
    o = n(481060),
    s = n(125268),
    l = n(673125),
    c = n(984063),
    u = n(871499),
    d = n(304388),
    f = n(388032);
function _(e, t, n) {
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
function p() {
    return (p =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function h(e) {
    if (null == e) throw TypeError('Cannot destructure ' + e);
    return e;
}
function m(e) {
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
                _(e, t, n[t]);
            }));
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function b() {
    let e = (0, a.e7)([l.Z], () => l.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === c.W.LINE,
        n = i.useRef(null),
        _ = () => {
            t ? (0, s.Bo)(null) : (0, s.Bo)({ type: c.W.LINE });
        };
    return (0, r.jsx)(d.Z, {
        renderPopout: () => null,
        popoutTargetRef: n,
        children: (e) => {
            var i = p({}, h(e));
            return (0, r.jsx)(
                u.Z,
                E(m({}, i), {
                    buttonRef: n,
                    label: f.intl.string(f.t.ZQCf9f),
                    isActive: t,
                    iconComponent: o.vdY,
                    onClick: _
                })
            );
        }
    });
}
