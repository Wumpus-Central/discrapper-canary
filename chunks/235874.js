r.d(n, {
    K: function () {
        return v;
    },
    y: function () {
        return E;
    }
});
var i,
    a,
    o = r(411104);
var s = r(47120);
var l = r(200651),
    u = r(192379),
    c = r(922770),
    d = r(493773),
    f = r(930295),
    p = r(126306),
    h = r(588921);
function _(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
!(function (e) {
    (e.NONE = '1'), (e.TRANSLATE = '2'), (e.SCALE = '3'), (e.FADE = '4');
})(i || (i = {}));
let m = Object.freeze({
    2: p.l.Types.TRANSLATE,
    3: p.l.Types.SCALE,
    4: p.l.Types.FADE
});
function g(e) {
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
class E extends (a = u.Component) {
    render() {
        let { children: e, shouldShow: n, position: r, onRequestOpen: i, onRequestClose: a, align: o, autoInvert: s, fixed: u, nudgeAlignIntoViewport: c, useRawTargetDimensions: d, spacing: p, onShiftClick: h, positionKey: _, preload: m, disablePointerEvents: E, ignoreModalClicks: v, closeOnScroll: y, useMouseEnter: b, renderPopout: I, layerContext: T, clickTrap: S = !1 } = this.props;
        return (0, l.jsx)(f.H, {
            ref: this.ref,
            preload: m,
            position: r,
            align: null != o ? o : g(r),
            autoInvert: s,
            fixed: u,
            nudgeAlignIntoViewport: c,
            useRawTargetDimensions: d,
            renderPopout: this.renderPopout,
            spacing: p,
            shouldShow: null != I && n,
            onRequestOpen: i,
            onRequestClose: a,
            onShiftClick: h,
            positionKey: _,
            disablePointerEvents: E,
            ignoreModalClicks: v,
            closeOnScroll: y,
            useMouseEnter: b,
            layerContext: T,
            clickTrap: S,
            children: e
        });
    }
    constructor(...e) {
        super(...e),
            _(this, 'ref', u.createRef()),
            _(this, 'renderPopout', (e) => {
                let { renderPopout: n, animation: r, animationPosition: i } = this.props;
                switch ((null != i && null != e.position && (e.position = i), r)) {
                    case '2':
                    case '3':
                    case '4':
                        return (0, l.jsx)(p.l, {
                            position: e.position,
                            type: m[r],
                            children: n(e)
                        });
                    case '1':
                        return n(e);
                }
                throw Error('Unsupported animation config: '.concat(JSON.stringify(r)));
            });
    }
}
function v(e) {
    let { renderPopout: n, ...r } = e,
        i = u.useRef(null),
        [a, o] = u.useState(0);
    function s() {
        return p(), (0, l.jsx)(l.Fragment, {});
    }
    u.useLayoutEffect(() => {
        if (a > 0) {
            var e, n, r, o, s;
            null === (s = i.current) || void 0 === s || null === (o = s.ref) || void 0 === o || null === (r = o.current) || void 0 === r || null === (n = r.layerRef) || void 0 === n || null === (e = n.current) || void 0 === e || e.updatePosition();
        }
    }, [a]),
        (0, d.Z)(() => {
            let e = setTimeout(n, 20 + 20 * Math.random());
            return () => clearTimeout(e);
        });
    let f = u.useRef(!1);
    async function p() {
        if (!f.current) {
            f.current = !0;
            let e = setTimeout(() => {
                    g(() => _), o((e) => e + 1);
                }, 300),
                r = await n();
            g(() => r), o((e) => e + 1), clearTimeout(e);
        }
    }
    function _() {
        var e, n, r, a;
        let o = null === (a = i.current) || void 0 === a ? void 0 : null === (r = a.ref) || void 0 === r ? void 0 : null === (n = r.current) || void 0 === n ? void 0 : null === (e = n.domElementRef) || void 0 === e ? void 0 : e.current,
            s = Math.max(100, null == o ? 100 : o.offsetWidth - 20);
        return (0, l.jsx)('div', {
            className: h.loader,
            style: { width: s },
            children: (0, l.jsx)(c.$, {})
        });
    }
    let [m, g] = u.useState(() => s),
        v = u.useRef(s);
    return (
        u.useEffect(() => {
            v.current = s;
        }),
        u.useEffect(() => {
            f.current
                ? n().then((e) => {
                      g(() => e), o((e) => e + 1);
                  })
                : g(v.current);
        }, [n]),
        (0, l.jsx)(E, {
            ref: i,
            ...r,
            renderPopout: m
        })
    );
}
_(E, 'Animation', i),
    _(E, 'defaultProps', {
        position: 'right',
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        spacing: 8,
        animation: '2',
        positionKey: void 0
    }),
    (v.Animation = i);
