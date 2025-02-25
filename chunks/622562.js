n.d(t, { E: () => E }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(442837),
    c = n(110924),
    u = n(819640),
    d = n(316234);
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
function p(e) {
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
function _(e, t) {
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
let m = (e, t) => (void 0 !== t && t > e ? t : e);
function g(e) {
    let { backgroundElementRef: t, getOffsetsRelativeToElement: n, fallbackAbsoluteOffsets: r, onGetBoundingRect: o = () => {}, debounceTime: a = 60, minimumOffsets: d } = e,
        [f, _] = i.useState(null),
        { hasLayers: h } = (0, l.cj)([u.Z], () => ({ hasLayers: u.Z.hasLayers() })),
        g = i.useCallback(() => {
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
        E = i.useCallback(() => {
            let e = t.current;
            if (null === e) return r;
            let i = p({}, n(g())),
                a = e.getBoundingClientRect();
            return void 0 !== i.top && (i.top = m(a.top + i.top, null == d ? void 0 : d.top)), void 0 !== i.left && (i.left = m(a.left + i.left, null == d ? void 0 : d.left)), void 0 !== i.right && (i.right = m(window.innerWidth - a.right + i.right, null == d ? void 0 : d.right)), void 0 !== i.bottom && (i.bottom = m(window.innerHeight - a.bottom + i.bottom, null == d ? void 0 : d.bottom)), o(a), i;
        }, [n, r, g, d, t, o]),
        v = i.useCallback(() => {
            let e = E();
            return (0, s.isEqual)(e, f) || _(e), e;
        }, [E, f]);
    i.useEffect(() => {
        v();
    }, [v]);
    let b = (0, c.Z)(h),
        y = i.useRef(null),
        O = i.useRef(0),
        S = i.useCallback(() => {
            (null === y.current || O.current >= 3) &&
                (y.current = setInterval(() => {
                    if (O.current >= 5) {
                        clearInterval(y.current), (y.current = null), (O.current = 0);
                        return;
                    }
                    v(), O.current++;
                }, 200));
        }, [v]);
    i.useEffect(() => {
        b && !h && S();
    }, [v, S, h, b]);
    let I = i.useMemo(
        () =>
            (0, s.debounce)(() => {
                v();
            }, a),
        [v, a]
    );
    return (
        i.useEffect(
            () => (
                window.addEventListener('resize', I),
                () => {
                    window.removeEventListener('resize', I);
                }
            ),
            [I]
        ),
        {
            offsets: f,
            getElementDimensions: g,
            getElementOffsets: E,
            updateElementOffsets: v,
            updateElementOffsetsWithPolling: S
        }
    );
}
function E(e) {
    var { children: t, style: n, className: o, key: s, offsetControlRef: l } = e;
    let { offsets: c, updateElementOffsets: u, updateElementOffsetsWithPolling: f } = g(p({}, _(e, ['children', 'style', 'className', 'key', 'offsetControlRef']))),
        h = p({}, c, n);
    return (i.useEffect(() => {
        void 0 !== l &&
            (l.current = {
                updateElementOffsets: u,
                updateElementOffsetsWithPolling: f
            });
    }, [u, f, l]),
    null === c)
        ? null
        : (0, r.jsx)(
              'div',
              {
                  style: h,
                  className: a()(d.wrapper, o),
                  children: t
              },
              s
          );
}
E.displayName = 'ElementFixedOffsetContentWrapper';
