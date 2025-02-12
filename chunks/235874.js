n.d(t, {
    K: () => m,
    y: () => h
}),
    n(411104),
    n(47120);
var i,
    r = n(200651),
    a = n(192379),
    s = n(922770),
    o = n(493773),
    l = n(930295),
    u = n(126306),
    c = n(858325);
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
var f = (function (e) {
    return (e.NONE = '1'), (e.TRANSLATE = '2'), (e.SCALE = '3'), (e.FADE = '4'), e;
})(f || {});
let _ = Object.freeze({
    2: u.l.Types.TRANSLATE,
    3: u.l.Types.SCALE,
    4: u.l.Types.FADE
});
function p(e) {
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
class h extends (i = a.Component) {
    render() {
        let { children: e, shouldShow: t, position: n, onRequestOpen: i, onRequestClose: a, align: s, autoInvert: o, fixed: u, nudgeAlignIntoViewport: c, useRawTargetDimensions: d, spacing: f, onShiftClick: _, positionKey: h, overridePositionRef: m, preload: g, disablePointerEvents: E, ignoreModalClicks: v, closeOnScroll: y, useMouseEnter: I, renderPopout: T, layerContext: b, clickTrap: S = !1 } = this.props;
        return (0, r.jsx)(l.H, {
            ref: this.ref,
            overridePositionRef: m,
            preload: g,
            position: n,
            align: null != s ? s : p(n),
            autoInvert: o,
            fixed: u,
            nudgeAlignIntoViewport: c,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: f,
            shouldShow: null != T && t,
            onRequestOpen: i,
            onRequestClose: a,
            onShiftClick: _,
            positionKey: h,
            disablePointerEvents: E,
            ignoreModalClicks: v,
            closeOnScroll: y,
            useMouseEnter: I,
            layerContext: b,
            clickTrap: S,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', a.createRef()),
            d(this, 'renderPopout', (e) => {
                let { renderPopout: t, animation: n, animationPosition: i } = this.props;
                switch ((null != i && null != e.position && (e.position = i), n)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, r.jsx)(u.l, {
                            position: e.position,
                            type: _[n],
                            children: t(e)
                        });
                    case '1':
                        return t(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(n)));
            });
    }
}
function m(e) {
    let { renderPopout: t, ...n } = e,
        i = a.useRef(null),
        [l, u] = a.useState(0);
    function d() {
        return _(), (0, r.jsx)(r.Fragment, {});
    }
    a.useLayoutEffect(() => {
        if (l > 0) {
            var e, t, n, r, a;
            null === (a = i.current) || void 0 === a || null === (r = a.ref) || void 0 === r || null === (n = r.current) || void 0 === n || null === (t = n.layerRef) || void 0 === t || null === (e = t.current) || void 0 === e || e.updatePosition();
        }
    }, [l]),
        (0, o.ZP)(() => {
            let e = setTimeout(t, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let f = a.useRef(!1);
    async function _() {
        if (!f.current) {
            f.current = !0;
            let e = setTimeout(() => {
                    g(() => p), u((e) => e + 1);
                }, 300),
                n = await t();
            g(() => n), u((e) => e + 1), clearTimeout(e);
        }
    }
    function p() {
        var e, t, n, a;
        let o = null === (a = i.current) || void 0 === a ? void 0 : null === (n = a.ref) || void 0 === n ? void 0 : null === (t = n.current) || void 0 === t ? void 0 : null === (e = t.domElementRef) || void 0 === e ? void 0 : e.current,
            l = Math.max(100, null == o ? 100 : o.offsetWidth - 20);
        return (0, r.jsx)('div', {
            className: c.loader,
            style: { width: l },
            children: (0, r.jsx)(s.$, {})
        });
    }
    let [m, g] = a.useState(() => d),
        E = a.useRef(d);
    return (
        a.useEffect(() => {
            E.current = d;
        }),
        a.useEffect(() => {
            f.current
                ? t().then((e) => {
                      g(() => e), u((e) => e + 1);
                  })
                : g(E.current);
        }, [t]),
        (0, r.jsx)(h, {
            ref: i,
            ...n,
            renderPopout: m
        })
    );
}
d(h, 'Animation', f),
    d(h, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (m.Animation = f);
