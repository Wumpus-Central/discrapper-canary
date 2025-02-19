n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(772848),
    l = n(211266),
    o = n(325767);
function a(e) {
    var t,
        n,
        { width: a = 16, height: s = 16, color: c = 'currentColor', foreground: u, background: d } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['width', 'height', 'color', 'foreground', 'background']);
    let h = (0, l.Z)(() => (0, i.Z)());
    return (0, r.jsxs)(
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
        })({}, (0, o.Z)(p))),
        (n = n =
            {
                width: a,
                height: s,
                viewBox: '0 0 24 24',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsxs)('g', {
                        'clip-path': 'url('.concat(h, ')'),
                        children: [
                            (0, r.jsx)('path', {
                                className: d,
                                fill: c,
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M2 11.001C2 6.03838 6.0374 2.00098 11 2.00098C15.9626 2.00098 20 6.03838 20 11.001L19.9998 11.0656C19.6455 11.0286 19.2787 11.0545 18.9141 11.152L16 11.9309V10H12V6H10V10H6V12H10V16H12V12H15.7414L14.8983 12.2253C13.2976 12.6532 12.3468 14.2976 12.7747 15.8983L13.25 17.6767V19.7163C12.5306 19.9021 11.7766 20.001 11 20.001C6.0374 20.001 2 15.9636 2 11.001Z'
                            }),
                            (0, r.jsx)('path', {
                                className: u,
                                fill: c,
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M23.9427 15.2691L23.387 13.1944C23.1569 12.335 22.274 11.825 21.415 12.0553L15.1938 13.723C14.3349 13.9533 13.8251 14.8366 14.0553 15.696L14.5014 17.3618L14.4968 18.4357L14.4968 21.3891C14.4968 22.2788 15.2177 23 16.107 23L22.5477 23C23.4369 23 24.1578 22.2788 24.1578 21.3891V18.1673H16.107L16.1362 17.3618L23.9427 15.2691ZM19.5725 15.3288L18.0491 15.7372L18.0212 14.0769L19.5446 13.6685L19.5725 15.3288ZM20.6413 15.0423L22.628 14.5097L22.3502 13.4723C22.2735 13.1859 21.9792 13.0159 21.6928 13.0926L20.6134 13.382L20.6413 15.0423ZM16.9524 14.3634L16.9803 16.0237L15.37 16.4554L15.0921 15.418C15.0154 15.1316 15.1853 14.8371 15.4716 14.7604L16.9524 14.3634Z'
                            })
                        ]
                    }),
                    (0, r.jsx)('defs', {
                        children: (0, r.jsx)('clipPath', {
                            id: h,
                            children: (0, r.jsx)('rect', {
                                width: '24',
                                height: '24',
                                fill: 'white'
                            })
                        })
                    })
                ]
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
