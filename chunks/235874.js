n.d(t, {
    K: () => y,
    y: () => b
}),
    n(411104),
    n(47120),
    n(26686);
var r,
    i = n(200651),
    o = n(192379),
    a = n(922770),
    s = n(493773),
    l = n(930295),
    c = n(126306),
    u = n(57271);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
var g = (function (e) {
    return (e.NONE = '1'), (e.TRANSLATE = '2'), (e.SCALE = '3'), (e.FADE = '4'), e;
})(g || {});
let E = Object.freeze({
    2: c.l.Types.TRANSLATE,
    3: c.l.Types.SCALE,
    4: c.l.Types.FADE
});
function v(e) {
    switch (e) {
        case 'top':
        case 'bottom':
            return 'left';
        case 'left':
        case 'right':
            return 'top';
        case 'center':
        case 'window_center':
            return 'center';
    }
    throw Error('Unexpected position: '.concat(e));
}
class b extends (r = o.Component) {
    render() {
        let { children: e, shouldShow: t, position: n, onRequestOpen: r, onRequestClose: o, align: a, autoInvert: s, fixed: c, nudgeAlignIntoViewport: u, useRawTargetDimensions: d, spacing: f, onShiftClick: p, positionKey: _, overridePositionRef: h, preload: m, disablePointerEvents: g, ignoreModalClicks: E, closeOnScroll: b, useMouseEnter: y, renderPopout: O, layerContext: S, clickTrap: I = !1 } = this.props;
        return (0, i.jsx)(l.H, {
            ref: this.ref,
            overridePositionRef: h,
            preload: m,
            position: n,
            align: null != a ? a : v(n),
            autoInvert: s,
            fixed: c,
            nudgeAlignIntoViewport: u,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: f,
            shouldShow: null != O && t,
            onRequestOpen: r,
            onRequestClose: o,
            onShiftClick: p,
            positionKey: _,
            disablePointerEvents: g,
            ignoreModalClicks: E,
            closeOnScroll: b,
            useMouseEnter: y,
            layerContext: S,
            clickTrap: I,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', o.createRef()),
            d(this, 'renderPopout', (e) => {
                let { renderPopout: t, animation: n, animationPosition: r } = this.props;
                switch ((null != r && null != e.position && (e.position = r), n)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, i.jsx)(c.l, {
                            position: e.position,
                            type: E[n],
                            children: t(e)
                        });
                    case '1':
                        return t(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(n)));
            });
    }
}
function y(e) {
    var { renderPopout: t } = e,
        n = h(e, ['renderPopout']);
    let r = o.useRef(null),
        [l, c] = o.useState(0);
    function d() {
        return m(), (0, i.jsx)(i.Fragment, {});
    }
    o.useLayoutEffect(() => {
        if (l > 0) {
            var e, t, n, i, o;
            null === (o = r.current) || void 0 === o || null === (i = o.ref) || void 0 === i || null === (n = i.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition();
        }
    }, [l]),
        (0, s.ZP)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let p = o.useRef(!1);
    async function m() {
        if (!p.current) {
            p.current = !0;
            let e = setTimeout(() => {
                    v(() => g), c((e) => e + 1);
                }, 300),
                n = await t();
            v(() => n), c((e) => e + 1), clearTimeout(e);
        }
    }
    function g() {
        var e, t, n, o;
        let s = null === (o = r.current) || void 0 === o ? void 0 : null === (n = o.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
            l = Math.max(100, null == s ? 100 : s.offsetWidth - 20);
        return (0, i.jsx)('div', {
            className: u.loader,
            style: { width: l },
            children: (0, i.jsx)(a.$, {})
        });
    }
    let [E, v] = o.useState(() => d),
        y = o.useRef(d);
    return (
        o.useEffect(() => {
            y.current = d;
        }),
        o.useEffect(() => {
            p.current
                ? t().then((e) => {
                      v(() => e), c((e) => e + 1);
                  })
                : v(y.current);
        }, [t]),
        (0, i.jsx)(b, _(f({ ref: r }, n), { renderPopout: E }))
    );
}
d(b, 'Animation', g),
    d(b, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (y.Animation = g);
