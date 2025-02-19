n.d(t, {
    Ph: () => y,
    Tt: () => b,
    iL: () => v,
    nY: () => S,
    zx: () => I
});
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(568611),
    l = n(680732),
    c = n(84735),
    u = n(922770),
    d = n(388032),
    f = n(348367);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
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
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let v = {
        FILLED: f.lookFilled,
        OUTLINED: f.lookOutlined,
        LINK: f.lookLink,
        BLANK: f.lookBlank
    },
    b = {
        BRAND: f.colorBrand,
        BRAND_INVERTED: f.colorBrandInverted,
        RED: f.colorRed,
        GREEN: f.colorGreen,
        PRIMARY: f.colorPrimary,
        LINK: f.colorLink,
        WHITE: f.colorWhite,
        TRANSPARENT: f.colorTransparent,
        CUSTOM: ''
    },
    y = {
        NONE: '',
        TINY: f.sizeTiny,
        SMALL: f.sizeSmall,
        MEDIUM: f.sizeMedium,
        LARGE: f.sizeLarge,
        MIN: f.sizeMin,
        MAX: f.sizeMax,
        ICON: f.sizeIcon
    };
function O(e, t) {
    var n, r, i, o;
    let a = null == e ? void 0 : e.offset;
    return t === v.LINK || t === v.BLANK
        ? a
        : null == a
          ? -2
          : 'number' == typeof a
            ? a + 2
            : {
                  top: (null !== (n = a.top) && void 0 !== n ? n : 0) - 2,
                  right: (null !== (r = a.right) && void 0 !== r ? r : 0) - 2,
                  bottom: (null !== (i = a.bottom) && void 0 !== i ? i : 0) - 2,
                  left: (null !== (o = a.left) && void 0 !== o ? o : 0) - 2
              };
}
function S() {
    let { look: e = v.FILLED, color: t = b.BRAND, size: n = y.MEDIUM, fullWidth: r = !1, grow: i = !0, submitting: o = !1, disabled: s = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return a()(f.button, e, t, n, {
        [f.fullWidth]: r,
        [f.grow]: i,
        [f.submitting]: o && !s
    });
}
function I(e) {
    var { look: t = v.FILLED, color: n = b.BRAND, size: o = y.MEDIUM, fullWidth: s = !1, grow: p = !0, disabled: h = !1, submitting: E = !1, type: I = 'button', style: T, wrapperClassName: N, className: A, innerClassName: C, onClick: R, onDoubleClick: P, onMouseDown: w, onMouseUp: D, onMouseEnter: x, onMouseLeave: L, onKeyDown: M, children: k, rel: j, buttonRef: U, focusProps: G, 'aria-label': B, submittingStartedLabel: Z, submittingFinishedLabel: F } = e,
        V = g(e, ['look', 'color', 'size', 'fullWidth', 'grow', 'disabled', 'submitting', 'type', 'style', 'wrapperClassName', 'className', 'innerClassName', 'onClick', 'onDoubleClick', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave', 'onKeyDown', 'children', 'rel', 'buttonRef', 'focusProps', 'aria-label', 'submittingStartedLabel', 'submittingFinishedLabel']);
    let H = h || E,
        W = H && (null != x || null != L),
        Y = W ? null : N,
        K = O(G, t),
        z = i.useRef(!1);
    i.useEffect(() => {
        !0 === E && ((z.current = !0), l.u.announce(null != Z ? Z : d.NW.string(d.t.pfChQk))), !1 === E && !0 === z.current && l.u.announce(null != F ? F : d.NW.string(d.t.SVPara));
    }, [E, Z, F]);
    let q = (0, r.jsx)(
        c.t,
        m(_({}, G), {
            offset: K,
            children: (0, r.jsxs)(
                'button',
                m(_({}, H ? null : V), {
                    'aria-label': B,
                    'aria-busy': !!E || void 0,
                    ref: U,
                    onClick: H ? (e) => e.preventDefault() : R,
                    onDoubleClick: H ? (e) => e.preventDefault() : P,
                    onMouseUp: h ? void 0 : D,
                    onMouseDown: h ? void 0 : w,
                    onMouseEnter: x,
                    onMouseLeave: L,
                    onKeyDown: h ? void 0 : M,
                    type: I,
                    disabled: h,
                    style: T,
                    rel: j,
                    className: a()(
                        A,
                        S({
                            look: t,
                            color: n,
                            size: o,
                            fullWidth: s,
                            grow: p,
                            submitting: E,
                            disabled: h
                        }),
                        Y
                    ),
                    children: [
                        E && !h
                            ? (0, r.jsx)(u.$, {
                                  type: u.$.Type.PULSING_ELLIPSIS,
                                  className: f.spinner,
                                  itemClassName: f.spinnerItem
                              })
                            : null,
                        (0, r.jsx)('div', {
                            className: a()(f.contents, C),
                            children: k
                        })
                    ]
                })
            )
        })
    );
    return W
        ? (0, r.jsxs)('span', {
              className: a()(f.disabledButtonWrapper, N, o, {
                  [f.grow]: p,
                  [f.fullWidth]: s
              }),
              children: [
                  q,
                  (0, r.jsx)('span', {
                      onMouseEnter: x,
                      onMouseLeave: L,
                      className: f.disabledButtonOverlay
                  })
              ]
          })
        : q;
}
function T(e) {
    var { look: t = v.FILLED, color: n = b.BRAND, size: i = y.MEDIUM, fullWidth: o = !1, grow: l = !0, style: c, className: u, innerClassName: d, to: p, onClick: h, onMouseDown: E, onMouseUp: O, children: S, rel: I } = e,
        T = g(e, ['look', 'color', 'size', 'fullWidth', 'grow', 'style', 'className', 'innerClassName', 'to', 'onClick', 'onMouseDown', 'onMouseUp', 'children', 'rel']);
    return (0, r.jsx)(
        s.rU,
        m(_({}, T), {
            to: p,
            onClick: h,
            onMouseUp: O,
            onMouseDown: E,
            style: c,
            rel: I,
            className: a()(u, f.button, t, n, i, {
                [f.fullWidth]: o,
                [f.grow]: l
            }),
            children: (0, r.jsx)('span', {
                className: a()(f.contents, d),
                children: S
            })
        })
    );
}
(I.Looks = v), (I.Colors = b), (I.Sizes = y), (I.Link = T);
