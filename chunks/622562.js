n.d(t, { E: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(442837),
    c = n(110924),
    u = n(819640),
    d = n(316234);
function _(e) {
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
let E = (e, t) => (void 0 !== t && t > e ? t : e);
function p(e) {
    var { children: t, style: n, className: l, key: p, offsetControlRef: h } = e;
    let {
            offsets: f,
            updateElementOffsets: m,
            updateElementOffsetsWithPolling: O
        } = (function (e) {
            let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: r, onGetBoundingRect: l = () => {}, debounceTime: o = 60, minimumOffsets: d } = e,
                [p, h] = i.useState(null),
                { hasLayers: f } = (0, a.cj)([u.Z], () => ({ hasLayers: u.Z.hasLayers() })),
                m = i.useCallback(() => {
                    let e = t.current;
                    return null === e
                        ? {
                              height: 0,
                              width: 0
                          }
                        : {
                              height: e.offsetHeight,
                              width: e.offsetWidth
                          };
                }, [t]),
                O = i.useCallback(() => {
                    let e = t.current;
                    if (null === e) return r;
                    let i = _({}, n(m())),
                        o = e.getBoundingClientRect();
                    return void 0 !== i.top && (i.top = E(o.top + i.top, null == d ? void 0 : d.top)), void 0 !== i.left && (i.left = E(o.left + i.left, null == d ? void 0 : d.left)), void 0 !== i.right && (i.right = E(window.innerWidth - o.right + i.right, null == d ? void 0 : d.right)), void 0 !== i.bottom && (i.bottom = E(window.innerHeight - o.bottom + i.bottom, null == d ? void 0 : d.bottom)), l(o), i;
                }, [n, r, m, d, t, l]),
                N = i.useCallback(() => {
                    let e = O();
                    return (0, s.isEqual)(e, p) || h(e), e;
                }, [O, p]);
            i.useEffect(() => {
                N();
            }, [N]);
            let g = (0, c.Z)(f),
                I = i.useRef(null),
                C = i.useRef(0),
                b = i.useCallback(() => {
                    (null === I.current || C.current >= 3) &&
                        (I.current = setInterval(() => {
                            if (C.current >= 5) {
                                clearInterval(I.current), (I.current = null), (C.current = 0);
                                return;
                            }
                            N(), C.current++;
                        }, 200));
                }, [N]);
            i.useEffect(() => {
                g && !f && b();
            }, [N, b, f, g]);
            let T = i.useMemo(
                () =>
                    (0, s.debounce)(() => {
                        N();
                    }, o),
                [N, o]
            );
            return (
                i.useEffect(
                    () => (
                        window.addEventListener('resize', T),
                        () => {
                            window.removeEventListener('resize', T);
                        }
                    ),
                    [T]
                ),
                {
                    offsets: p,
                    getElementDimensions: m,
                    getElementOffsets: O,
                    updateElementOffsets: N,
                    updateElementOffsetsWithPolling: b
                }
            );
        })(
            _(
                {},
                (function (e, t) {
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
                })(e, ['children', 'style', 'className', 'key', 'offsetControlRef'])
            )
        ),
        N = _({}, f, n);
    return (i.useEffect(() => {
        void 0 !== h &&
            (h.current = {
                updateElementOffsets: m,
                updateElementOffsetsWithPolling: O
            });
    }, [m, O, h]),
    null === f)
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: N,
                  className: o()(d.wrapper, l),
                  children: t
              },
              p
          );
}
p.displayName = 'ElementFixedOffsetContentWrapper';
