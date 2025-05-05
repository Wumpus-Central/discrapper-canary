n.d(t, {
    Ph: () => O,
    Tt: () => y,
    iL: () => b,
    nY: () => I,
    zx: () => S
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(688642),
    l = n(680732),
    c = n(84735),
    u = n(922770),
    d = n(388032),
    f = n(982456);
function _(e, t, n) {
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
                _(e, t, n[t]);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = {
        FILLED: f.lookFilled,
        OUTLINED: f.lookOutlined,
        LINK: f.lookLink,
        BLANK: f.lookBlank
    },
    y = {
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
    O = {
        NONE: '',
        TINY: f.sizeTiny,
        SMALL: f.sizeSmall,
        MEDIUM: f.sizeMedium,
        LARGE: f.sizeLarge,
        MIN: f.sizeMin,
        MAX: f.sizeMax,
        ICON: f.sizeIcon
    };
function v(e, t) {
    var n, r, i, a;
    let o = null == e ? void 0 : e.offset;
    return t === b.LINK || t === b.BLANK
        ? o
        : null == o
          ? -2
          : 'number' == typeof o
            ? o + 2
            : {
                  top: (null != (n = o.top) ? n : 0) - 2,
                  right: (null != (r = o.right) ? r : 0) - 2,
                  bottom: (null != (i = o.bottom) ? i : 0) - 2,
                  left: (null != (a = o.left) ? a : 0) - 2
              };
}
function I() {
    let { look: e = b.FILLED, color: t = y.BRAND, size: n = O.MEDIUM, fullWidth: r = !1, grow: i = !0, submitting: a = !1, disabled: s = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return o()(f.button, e, t, n, {
        [f.fullWidth]: r,
        [f.grow]: i,
        [f.submitting]: a && !s
    });
}
function S(e) {
    var { look: t = b.FILLED, color: n = y.BRAND, size: a = O.MEDIUM, fullWidth: s = !1, grow: _ = !0, disabled: h = !1, submitting: E = !1, type: S = 'button', style: T, wrapperClassName: A, className: N, innerClassName: C, onClick: R, onDoubleClick: P, onMouseDown: w, onMouseUp: D, onMouseEnter: L, onMouseLeave: x, onKeyDown: M, children: k, rel: j, buttonRef: U, focusProps: G, 'aria-label': B, submittingStartedLabel: V, submittingFinishedLabel: F } = e,
        Z = g(e, ['look', 'color', 'size', 'fullWidth', 'grow', 'disabled', 'submitting', 'type', 'style', 'wrapperClassName', 'className', 'innerClassName', 'onClick', 'onDoubleClick', 'onMouseDown', 'onMouseUp', 'onMouseEnter', 'onMouseLeave', 'onKeyDown', 'children', 'rel', 'buttonRef', 'focusProps', 'aria-label', 'submittingStartedLabel', 'submittingFinishedLabel']);
    let H = h || E,
        Y = H && (null != L || null != x),
        W = Y ? null : A,
        K = v(G, t),
        z = i.useRef(!1);
    i.useEffect(() => {
        !0 === E && ((z.current = !0), l.u.announce(null != V ? V : d.intl.string(d.t.pfChQk))), !1 === E && !0 === z.current && l.u.announce(null != F ? F : d.intl.string(d.t.SVPara));
    }, [E, V, F]);
    let q = (0, r.jsx)(
        c.t,
        m(p({}, G), {
            offset: K,
            children: (0, r.jsxs)(
                'button',
                m(p({}, H ? null : Z), {
                    'aria-label': B,
                    'aria-busy': !!E || void 0,
                    ref: U,
                    onClick: H ? (e) => e.preventDefault() : R,
                    onDoubleClick: H ? (e) => e.preventDefault() : P,
                    onMouseUp: h ? void 0 : D,
                    onMouseDown: h ? void 0 : w,
                    onMouseEnter: L,
                    onMouseLeave: x,
                    onKeyDown: h ? void 0 : M,
                    type: S,
                    disabled: h,
                    style: T,
                    rel: j,
                    className: o()(
                        N,
                        I({
                            look: t,
                            color: n,
                            size: a,
                            fullWidth: s,
                            grow: _,
                            submitting: E,
                            disabled: h
                        }),
                        W
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
                            className: o()(f.contents, C),
                            children: k
                        })
                    ]
                })
            )
        })
    );
    return Y
        ? (0, r.jsxs)('span', {
              className: o()(f.disabledButtonWrapper, A, a, {
                  [f.grow]: _,
                  [f.fullWidth]: s
              }),
              children: [
                  q,
                  (0, r.jsx)('span', {
                      onMouseEnter: L,
                      onMouseLeave: x,
                      className: f.disabledButtonOverlay
                  })
              ]
          })
        : q;
}
(S.Looks = b),
    (S.Colors = y),
    (S.Sizes = O),
    (S.Link = function (e) {
        var { look: t = b.FILLED, color: n = y.BRAND, size: i = O.MEDIUM, fullWidth: a = !1, grow: l = !0, style: c, className: u, innerClassName: d, to: _, onClick: h, onMouseDown: E, onMouseUp: v, children: I, rel: S } = e,
            T = g(e, ['look', 'color', 'size', 'fullWidth', 'grow', 'style', 'className', 'innerClassName', 'to', 'onClick', 'onMouseDown', 'onMouseUp', 'children', 'rel']);
        return (0, r.jsx)(
            s.rU,
            m(p({}, T), {
                to: _,
                onClick: h,
                onMouseUp: v,
                onMouseDown: E,
                style: c,
                rel: S,
                className: o()(u, f.button, t, n, i, {
                    [f.fullWidth]: a,
                    [f.grow]: l
                }),
                children: (0, r.jsx)('span', {
                    className: o()(f.contents, d),
                    children: I
                })
            })
        );
    });
