n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 24, height: a = 24, color: l = 'currentColor' } = e,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['width', 'height', 'color']);
    return (0, r.jsx)(
        'svg',
        ((t = (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, (0, i.Z)(o))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 20 20',
                children: (0, r.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    fill: l,
                    d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM7.5 5.5V6.17157C7.5 6.30418 7.55268 6.43136 7.64645 6.52513L10 8.87868L12.3536 6.52513C12.4473 6.43136 12.5 6.30418 12.5 6.17157V5.5H7.5ZM6.58579 7.58579L9 10L6.58579 12.4142C6.21071 12.7893 6 13.298 6 13.8284V15C6 15.5523 6.44772 16 7 16L13 16C13.5523 16 14 15.5523 14 15V13.8284C14 13.298 13.7893 12.7893 13.4142 12.4142L11 10L13.4142 7.58579C13.7893 7.21071 14 6.70201 14 6.17157V5C14 4.44772 13.5523 4 13 4H7C6.44772 4 6 4.44772 6 5V6.17157C6 6.70201 6.21071 7.21071 6.58579 7.58579Z'
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
