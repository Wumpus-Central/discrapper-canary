n.d(t, {
    E9: () => h,
    fu: () => p
}),
    n(388685);
var r = n(255367),
    l = n(73800),
    a = n(120356),
    i = n.n(a),
    o = n(392711),
    s = n(442837),
    c = n(110924),
    u = n(819640),
    f = n(513755);
function d(e) {
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
let b = (e, t) => (void 0 !== t && t > e ? t : e),
    m = (e) =>
        null === e
            ? null
            : {
                  top: e.top,
                  bottom: e.bottom,
                  left: e.left,
                  right: e.right
              };
function p(e) {
    let { onGetElementDimensionsAndBoundingRect: t, targetElementRef: n, shouldPollPositionOnMount: r, positionControlRef: a, debounceTime: i } = e,
        { hasLayers: f } = (0, s.cj)([u.Z], () => ({ hasLayers: u.Z.hasLayers() })),
        d = l.useRef(null),
        b = l.useCallback(() => {
            let e = n.current;
            if (null === e)
                return {
                    height: 0,
                    width: 0,
                    elementBoundingRect: null,
                    hasElementPositionChanged: !1
                };
            let t = e.getBoundingClientRect(),
                r = !(0, o.isEqual)(m(t), m(d.current));
            return (
                (d.current = t),
                {
                    height: e.offsetHeight,
                    width: e.offsetWidth,
                    elementBoundingRect: t,
                    hasElementPositionChanged: r
                }
            );
        }, [n]),
        p = l.useCallback(() => t(b()), [t, b]),
        h = l.useMemo(
            () =>
                (0, o.debounce)(() => {
                    p();
                }, i),
            [p, i]
        );
    l.useEffect(
        () => (
            window.addEventListener('resize', h),
            () => {
                window.removeEventListener('resize', h);
            }
        ),
        [h]
    );
    let g = (0, c.Z)(f),
        v = l.useRef(null),
        O = l.useRef(0),
        y = l.useCallback(() => {
            (null === v.current || O.current >= 5) &&
                (null != v.current && clearInterval(v.current),
                (v.current = setInterval(() => {
                    if (O.current >= 10) {
                        clearInterval(v.current), (v.current = null), (O.current = 0);
                        return;
                    }
                    p(), O.current++;
                }, 200)));
        }, [p]);
    return (
        l.useEffect(() => {
            r ? y() : p();
        }, [r, y, p]),
        l.useEffect(() => {
            g && !f && y();
        }, [y, f, g]),
        l.useEffect(() => {
            void 0 !== a &&
                (a.current = {
                    getElementDimensionsAndBoundingRect: b,
                    updateElementPosition: p,
                    updateElementPositionWithPolling: y
                });
        }, [p, y, b, a]),
        { getElementDimensionsAndBoundingRect: b }
    );
}
function h(e) {
    var { children: t, style: n, className: a, key: s } = e;
    let { offsets: c } = (function (e) {
            let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: r, minimumOffsets: a, positionControlRef: i, onGetBoundingRect: s = () => {}, debounceTime: c = 60 } = e,
                [u, f] = l.useState(null);
            return (
                p({
                    onGetElementDimensionsAndBoundingRect: l.useCallback(
                        (e) => {
                            let { height: t, width: l, elementBoundingRect: i } = e;
                            if (null == i) return r;
                            let c = d(
                                {},
                                n({
                                    height: t,
                                    width: l
                                })
                            );
                            return void 0 !== c.top && (c.top = b(i.top + c.top, null == a ? void 0 : a.top)), void 0 !== c.left && (c.left = b(i.left + c.left, null == a ? void 0 : a.left)), void 0 !== c.right && (c.right = b(window.innerWidth - i.right + c.right, null == a ? void 0 : a.right)), void 0 !== c.bottom && (c.bottom = b(window.innerHeight - i.bottom + c.bottom, null == a ? void 0 : a.bottom)), s(i), (0, o.isEqual)(c, u) || f(c), c;
                        },
                        [u, n, r, a, s]
                    ),
                    targetElementRef: t,
                    positionControlRef: i,
                    debounceTime: c
                }),
                { offsets: u }
            );
        })(
            d(
                {},
                (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                a = Object.keys(e);
                            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                            return l;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    }
                    return l;
                })(e, ['children', 'style', 'className', 'key'])
            )
        ),
        u = d({}, c, n);
    return null === c
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: u,
                  className: i()(f.wrapper, a),
                  children: t
              },
              s
          );
}
h.displayName = 'ElementFixedOffsetContentWrapper';
