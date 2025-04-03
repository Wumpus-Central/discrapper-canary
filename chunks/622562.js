n.d(t, {
    E9: () => y,
    fu: () => E
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(442837),
    c = n(110924),
    u = n(819640),
    d = n(513755);
function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let m = (e, t) => (void 0 !== t && t > e ? t : e),
    g = (e) =>
        null === e
            ? null
            : {
                  top: e.top,
                  bottom: e.bottom,
                  left: e.left,
                  right: e.right
              };
function E(e) {
    let { onGetElementDimensionsAndBoundingRect: t, targetElementRef: n, shouldPollPositionOnMount: r, positionControlRef: o, debounceTime: a } = e,
        { hasLayers: d } = (0, l.cj)([u.Z], () => ({ hasLayers: u.Z.hasLayers() })),
        f = i.useRef(null),
        _ = i.useCallback(() => {
            let e = n.current;
            if (null === e)
                return {
                    height: 0,
                    width: 0,
                    elementBoundingRect: null,
                    hasElementPositionChanged: !1
                };
            let t = e.getBoundingClientRect(),
                r = !(0, s.isEqual)(g(t), g(f.current));
            return (
                (f.current = t),
                {
                    height: e.offsetHeight,
                    width: e.offsetWidth,
                    elementBoundingRect: t,
                    hasElementPositionChanged: r
                }
            );
        }, [n]),
        p = i.useCallback(() => t(_()), [t, _]),
        h = i.useMemo(
            () =>
                (0, s.debounce)(() => {
                    p();
                }, a),
            [p, a]
        );
    i.useEffect(
        () => (
            window.addEventListener('resize', h),
            () => {
                window.removeEventListener('resize', h);
            }
        ),
        [h]
    );
    let m = (0, c.Z)(d),
        E = i.useRef(null),
        b = i.useRef(0),
        y = i.useCallback(() => {
            (null === E.current || b.current >= 5) &&
                (null != E.current && clearInterval(E.current),
                (E.current = setInterval(() => {
                    if (b.current >= 10) {
                        clearInterval(E.current), (E.current = null), (b.current = 0);
                        return;
                    }
                    p(), b.current++;
                }, 200)));
        }, [p]);
    return (
        i.useEffect(() => {
            r ? y() : p();
        }, [r, y, p]),
        i.useEffect(() => {
            m && !d && y();
        }, [y, d, m]),
        i.useEffect(() => {
            void 0 !== o &&
                (o.current = {
                    getElementDimensionsAndBoundingRect: _,
                    updateElementPosition: p,
                    updateElementPositionWithPolling: y
                });
        }, [p, y, _, o]),
        { getElementDimensionsAndBoundingRect: _ }
    );
}
function b(e) {
    let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: r, minimumOffsets: o, positionControlRef: a, onGetBoundingRect: l = () => {}, debounceTime: c = 60 } = e,
        [u, d] = i.useState(null);
    return (
        E({
            onGetElementDimensionsAndBoundingRect: i.useCallback(
                (e) => {
                    let { height: t, width: i, elementBoundingRect: a } = e;
                    if (null == a) return r;
                    let c = _(
                        {},
                        n({
                            height: t,
                            width: i
                        })
                    );
                    return void 0 !== c.top && (c.top = m(a.top + c.top, null == o ? void 0 : o.top)), void 0 !== c.left && (c.left = m(a.left + c.left, null == o ? void 0 : o.left)), void 0 !== c.right && (c.right = m(window.innerWidth - a.right + c.right, null == o ? void 0 : o.right)), void 0 !== c.bottom && (c.bottom = m(window.innerHeight - a.bottom + c.bottom, null == o ? void 0 : o.bottom)), l(a), (0, s.isEqual)(c, u) || d(c), c;
                },
                [u, n, r, o, l]
            ),
            targetElementRef: t,
            positionControlRef: a,
            debounceTime: c
        }),
        { offsets: u }
    );
}
function y(e) {
    var { children: t, style: n, className: i, key: o } = e;
    let { offsets: s } = b(_({}, p(e, ['children', 'style', 'className', 'key']))),
        l = _({}, s, n);
    return null === s
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: l,
                  className: a()(d.wrapper, i),
                  children: t
              },
              o
          );
}
y.displayName = 'ElementFixedOffsetContentWrapper';
