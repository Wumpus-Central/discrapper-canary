n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(512969),
    o = n(990547),
    a = n(213609);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var t,
        { impressionName: n, impressionProperties: s, disableTrack: u } = e,
        d = c(e, ['impressionName', 'impressionProperties', 'disableTrack']);
    let f = s;
    return (
        'function' == typeof f && (f = f(d)),
        (0, a.Z)(
            {
                type: o.ImpressionTypes.PAGE,
                name: n,
                properties: f
            },
            { disableTrack: u },
            [null == (t = d.location) ? void 0 : t.pathname]
        ),
        (0, r.jsx)(i.AW, l({}, d))
    );
}
