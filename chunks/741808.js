n.d(t, { X: () => x }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n(442837),
    c = n(110924),
    d = n(819640),
    u = n(89606);
function h(e) {
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
}
let m = (e, t) => (void 0 !== t && t > e ? t : e);
function x(e) {
    var { children: t, style: n, className: i, key: x } = e;
    let { offsets: p } = (function (e) {
            let { key: t, backgroundElementRef: n, getOffsetsRelativeToElement: r, fallbackAbsoluteOffsets: i, onGetBoundingRect: l = () => {}, debounceTime: u = 60, minimumOffsets: x } = e,
                { hasLayers: p } = (0, s.cj)([d.Z], () => ({ hasLayers: d.Z.hasLayers() })),
                [f, b] = a.useState(null),
                _ = a.useCallback(() => {
                    let e = n.current;
                    return null === e
                        ? {
                              height: 0,
                              width: 0
                          }
                        : {
                              height: e.offsetHeight,
                              width: e.offsetWidth
                          };
                }, [n]),
                g = a.useCallback(() => {
                    let e = n.current;
                    if (null === e) return i;
                    let t = h({}, r(_())),
                        a = e.getBoundingClientRect();
                    return void 0 !== t.top && (t.top = m(a.top + t.top, null == x ? void 0 : x.top)), void 0 !== t.left && (t.left = m(a.left + t.left, null == x ? void 0 : x.left)), void 0 !== t.right && (t.right = m(window.innerWidth - a.right + t.right, null == x ? void 0 : x.right)), void 0 !== t.bottom && (t.bottom = m(window.innerHeight - a.bottom + t.bottom, null == x ? void 0 : x.bottom)), (0, o.isEqual)(t, f) || b(t), l(a), t;
                }, [r, i, f, _, x, n, l]);
            a.useEffect(() => {
                g();
            }, [t, g]);
            let v = (0, c.Z)(p),
                j = a.useRef(null),
                C = a.useRef(0);
            a.useEffect(() => {
                v &&
                    !p &&
                    (null === j.current || C.current >= 3) &&
                    (j.current = setInterval(() => {
                        if (C.current >= 5) {
                            clearInterval(j.current), (j.current = null), (C.current = 0);
                            return;
                        }
                        g(), C.current++;
                    }, 200));
            }, [g, p, v]);
            let y = a.useMemo(
                () =>
                    (0, o.debounce)(() => {
                        g();
                    }, u),
                [g, u]
            );
            return (
                a.useEffect(
                    () => (
                        window.addEventListener('resize', y),
                        () => {
                            window.removeEventListener('resize', y);
                        }
                    ),
                    [y]
                ),
                {
                    offsets: f,
                    getElementDimensions: _,
                    updateElementOffsets: g
                }
            );
        })(
            h(
                {},
                (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        a = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                a = {},
                                i = Object.keys(e);
                            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                            return a;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
                    }
                    return a;
                })(e, ['children', 'style', 'className', 'key'])
            )
        ),
        f = h({}, p, n);
    return null === p
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: f,
                  className: l()(u.wrapper, i),
                  children: t
              },
              x
          );
}
x.displayName = 'ElementOffsetModalContentWrapper';
