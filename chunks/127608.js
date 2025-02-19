n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(388032);
function a(e, t, n) {
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u() {
    function e() {
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('74023').then(n.bind(n, 431583));
            return (t) => (0, r.jsx)(e, s({ source: 'Screenshare Unavailable' }, t));
        });
    }
    (0, i.ZDy)(async () => {
        let { default: t } = await n.e('67753').then(n.bind(n, 873809));
        return (n) =>
            (0, r.jsx)(
                t,
                c(s({}, n), {
                    header: o.NW.string(o.t.GFr0GR),
                    body: o.NW.string(o.t.QSk6Ex),
                    confirmText: o.NW.string(o.t.BK8LKy),
                    onConfirm: e
                })
            );
    });
}
