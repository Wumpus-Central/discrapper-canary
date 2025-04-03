n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(325767);
function l(e) {
    var t,
        n,
        { color: l = 'currentColor', foreground: s, backgroundColor: a = 'none' } = e,
        o = (function (e, t) {
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
        })(e, ['color', 'foreground', 'backgroundColor']);
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
        })({}, (0, i.Z)(o))),
        (n = n =
            {
                width: '272',
                height: '143',
                viewBox: '0 0 272 143',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('rect', {
                        className: s,
                        y: '15.5',
                        width: '272',
                        height: '112',
                        rx: '12',
                        fill: a
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '12',
                        y: '27.5',
                        width: '168',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '12',
                        y: '43.5',
                        width: '96',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '12',
                        y: '67.5',
                        width: '168',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '12',
                        y: '83.5',
                        width: '168',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '196',
                        y: '27.5',
                        width: '64',
                        height: '64',
                        rx: '8',
                        fill: l
                    }),
                    (0, r.jsx)('path', {
                        className: s,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z',
                        fill: '#C4C4C4'
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '12',
                        y: '107.5',
                        width: '32',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('circle', {
                        className: s,
                        opacity: '0.5',
                        cx: '54',
                        cy: '111.5',
                        r: '2',
                        fill: l,
                        fillOpacity: '0.48'
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        opacity: '0.5',
                        x: '64',
                        y: '107.5',
                        width: '32',
                        height: '8',
                        rx: '4',
                        fill: l
                    }),
                    (0, r.jsx)('rect', {
                        className: s,
                        x: '0.5',
                        y: '16',
                        width: '271',
                        height: '111',
                        rx: '11.5',
                        stroke: l,
                        strokeOpacity: '0.3'
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
