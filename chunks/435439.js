r.d(t, { Z: () => f });
var n = r(200651),
    l = r(481060),
    i = r(374129),
    o = r(639351),
    a = r(908841),
    c = r(410441),
    s = r(206583),
    u = r(388032);
let p = {
        [s.kG.SPOTIFY]: a.Z,
        [s.kG.CRUNCHYROLL]: l.omf,
        [s.kG.XBOX]: o.Z,
        [s.kG.PLAYSTATION]: i.Z
    },
    d = {
        [s.kG.SPOTIFY]: () => u.NW.string(u.t['0ZB/XF']),
        [s.kG.CRUNCHYROLL]: () => u.NW.string(u.t.jdJYX1),
        [s.kG.XBOX]: () => u.NW.string(u.t['Nfvo7+']),
        [s.kG.PLAYSTATION]: () => u.NW.string(u.t.fFl4jo)
    };
function f(e) {
    var t,
        r,
        l,
        { type: i, 'aria-label': o } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ['type', 'aria-label']);
    let s = p[i];
    if (null == s) return null;
    let u = null != o ? o : null == (l = d[i]) ? void 0 : l.call(d);
    return (0, n.jsx)(
        c.Z,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({ Icon: s }, a)),
        (r = r = { 'aria-label': u }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
