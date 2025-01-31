n.d(t, {
    Ph: () => h,
    Tt: () => p,
    iL: () => _,
    nY: () => g,
    zx: () => E
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(568611),
    l = n(680732),
    u = n(84735),
    c = n(922770),
    d = n(388032),
    f = n(161399);
let _ = {
        FILLED: f.lookFilled,
        OUTLINED: f.lookOutlined,
        LINK: f.lookLink,
        BLANK: f.lookBlank
    },
    p = {
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
    h = {
        NONE: '',
        TINY: f.sizeTiny,
        SMALL: f.sizeSmall,
        MEDIUM: f.sizeMedium,
        LARGE: f.sizeLarge,
        MIN: f.sizeMin,
        MAX: f.sizeMax,
        ICON: f.sizeIcon
    };
function m(e, t) {
    var n, i, r, a;
    let s = null == e ? void 0 : e.offset;
    return t === _.LINK || t === _.BLANK
        ? s
        : null == s
          ? -2
          : 'number' == typeof s
            ? s + 2
            : {
                  top: (null !== (n = s.top) && void 0 !== n ? n : 0) - 2,
                  right: (null !== (i = s.right) && void 0 !== i ? i : 0) - 2,
                  bottom: (null !== (r = s.bottom) && void 0 !== r ? r : 0) - 2,
                  left: (null !== (a = s.left) && void 0 !== a ? a : 0) - 2
              };
}
function g() {
    let { look: e = _.FILLED, color: t = p.BRAND, size: n = h.MEDIUM, fullWidth: i = !1, grow: r = !0, submitting: a = !1, disabled: o = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(f.button, e, t, n, {
        [f.fullWidth]: i,
        [f.grow]: r,
        [f.submitting]: a && !o
    });
}
function E(e) {
    let { look: t = _.FILLED, color: n = p.BRAND, size: a = h.MEDIUM, fullWidth: o = !1, grow: E = !0, disabled: v = !1, submitting: y = !1, type: I = 'button', style: b, wrapperClassName: T, className: S, innerClassName: A, onClick: N, onDoubleClick: C, onMouseDown: R, onMouseUp: O, onMouseEnter: D, onMouseLeave: x, onKeyDown: L, children: P, rel: w, buttonRef: M, focusProps: k, 'aria-label': U, submittingStartedLabel: G, submittingFinishedLabel: B, ...Z } = e,
        F = v || y,
        V = F && (null != D || null != x),
        j = V ? null : T,
        H = m(k, t),
        Y = r.useRef(!1);
    r.useEffect(() => {
        !0 === y && ((Y.current = !0), l.u.announce(null != G ? G : d.intl.string(d.t.pfChQk))), !1 === y && !0 === Y.current && l.u.announce(null != B ? B : d.intl.string(d.t.SVPara));
    }, [y, G, B]);
    let W = (0, i.jsx)(u.t, {
        ...k,
        offset: H,
        children: (0, i.jsxs)('button', {
            ...(F ? null : Z),
            'aria-label': U,
            'aria-busy': !!y || void 0,
            ref: M,
            onClick: F ? (e) => e.preventDefault() : N,
            onDoubleClick: F ? (e) => e.preventDefault() : C,
            onMouseUp: v ? void 0 : O,
            onMouseDown: v ? void 0 : R,
            onMouseEnter: D,
            onMouseLeave: x,
            onKeyDown: v ? void 0 : L,
            type: I,
            disabled: v,
            style: b,
            rel: w,
            className: s()(
                S,
                g({
                    look: t,
                    color: n,
                    size: a,
                    fullWidth: o,
                    grow: E,
                    submitting: y,
                    disabled: v
                }),
                j
            ),
            children: [
                y && !v
                    ? (0, i.jsx)(c.$, {
                          type: c.$.Type.PULSING_ELLIPSIS,
                          className: f.spinner,
                          itemClassName: f.spinnerItem
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: s()(f.contents, A),
                    children: P
                })
            ]
        })
    });
    return V
        ? (0, i.jsxs)('span', {
              className: s()(f.disabledButtonWrapper, T, a, {
                  [f.grow]: E,
                  [f.fullWidth]: o
              }),
              children: [
                  W,
                  (0, i.jsx)('span', {
                      onMouseEnter: D,
                      onMouseLeave: x,
                      className: f.disabledButtonOverlay
                  })
              ]
          })
        : W;
}
function v(e) {
    let { look: t = _.FILLED, color: n = p.BRAND, size: r = h.MEDIUM, fullWidth: a = !1, grow: l = !0, style: u, className: c, innerClassName: d, to: m, onClick: g, onMouseDown: E, onMouseUp: v, children: y, rel: I, ...b } = e;
    return (0, i.jsx)(o.rU, {
        ...b,
        to: m,
        onClick: g,
        onMouseUp: v,
        onMouseDown: E,
        style: u,
        rel: I,
        className: s()(c, f.button, t, n, r, {
            [f.fullWidth]: a,
            [f.grow]: l
        }),
        children: (0, i.jsx)('span', {
            className: s()(f.contents, d),
            children: y
        })
    });
}
(E.Looks = _), (E.Colors = p), (E.Sizes = h), (E.Link = v);
