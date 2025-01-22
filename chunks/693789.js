r.d(n, {
    Ph: function () {
        return m;
    },
    Tt: function () {
        return _;
    },
    ZP: function () {
        return y;
    },
    iL: function () {
        return h;
    },
    nY: function () {
        return E;
    },
    zx: function () {
        return v;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(568611),
    u = r(680732),
    c = r(84735),
    d = r(922770),
    f = r(388032),
    p = r(161399);
let h = {
        FILLED: p.lookFilled,
        OUTLINED: p.lookOutlined,
        LINK: p.lookLink,
        BLANK: p.lookBlank
    },
    _ = {
        BRAND: p.colorBrand,
        BRAND_INVERTED: p.colorBrandInverted,
        RED: p.colorRed,
        GREEN: p.colorGreen,
        PRIMARY: p.colorPrimary,
        LINK: p.colorLink,
        WHITE: p.colorWhite,
        TRANSPARENT: p.colorTransparent,
        CUSTOM: ''
    },
    m = {
        NONE: '',
        TINY: p.sizeTiny,
        SMALL: p.sizeSmall,
        MEDIUM: p.sizeMedium,
        LARGE: p.sizeLarge,
        MIN: p.sizeMin,
        MAX: p.sizeMax,
        ICON: p.sizeIcon
    };
function g(e, n) {
    var r, i, a, o;
    let s = null == e ? void 0 : e.offset;
    if (n === h.LINK || n === h.BLANK) return s;
    if (null == s) return -2;
    if ('number' == typeof s) return s + 2;
    return {
        top: (null !== (r = s.top) && void 0 !== r ? r : 0) - 2,
        right: (null !== (i = s.right) && void 0 !== i ? i : 0) - 2,
        bottom: (null !== (a = s.bottom) && void 0 !== a ? a : 0) - 2,
        left: (null !== (o = s.left) && void 0 !== o ? o : 0) - 2
    };
}
function E() {
    let { look: e = h.FILLED, color: n = _.BRAND, size: r = m.MEDIUM, fullWidth: i = !1, grow: a = !0, submitting: o = !1, disabled: l = !1 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s()(p.button, e, n, r, {
        [p.fullWidth]: i,
        [p.grow]: a,
        [p.submitting]: o && !l
    });
}
function v(e) {
    let { look: n = h.FILLED, color: r = _.BRAND, size: o = m.MEDIUM, fullWidth: l = !1, grow: v = !0, disabled: y = !1, submitting: b = !1, type: I = 'button', style: T, wrapperClassName: S, className: A, innerClassName: C, onClick: N, onDoubleClick: R, onMouseDown: O, onMouseUp: D, onMouseEnter: x, onMouseLeave: L, onKeyDown: w, children: P, rel: M, buttonRef: k, focusProps: U, 'aria-label': B, submittingStartedLabel: G, submittingFinishedLabel: Z, ...F } = e,
        V = y || b,
        j = V && (null != x || null != L),
        H = j ? null : S,
        Y = g(U, n),
        W = a.useRef(!1);
    a.useEffect(() => {
        !0 === b && ((W.current = !0), u.u.announce(null != G ? G : f.intl.string(f.t.pfChQk))), !1 === b && !0 === W.current && u.u.announce(null != Z ? Z : f.intl.string(f.t.SVPara));
    }, [b, G, Z]);
    let K = (0, i.jsx)(c.t, {
        ...U,
        offset: Y,
        children: (0, i.jsxs)('button', {
            ...(V ? null : F),
            'aria-label': B,
            'aria-busy': !!b || void 0,
            ref: k,
            onClick: V ? (e) => e.preventDefault() : N,
            onDoubleClick: V ? (e) => e.preventDefault() : R,
            onMouseUp: y ? void 0 : D,
            onMouseDown: y ? void 0 : O,
            onMouseEnter: x,
            onMouseLeave: L,
            onKeyDown: y ? void 0 : w,
            type: I,
            disabled: y,
            style: T,
            rel: M,
            className: s()(
                A,
                E({
                    look: n,
                    color: r,
                    size: o,
                    fullWidth: l,
                    grow: v,
                    submitting: b,
                    disabled: y
                }),
                H
            ),
            children: [
                b && !y
                    ? (0, i.jsx)(d.$, {
                          type: d.$.Type.PULSING_ELLIPSIS,
                          className: p.spinner,
                          itemClassName: p.spinnerItem
                      })
                    : null,
                (0, i.jsx)('div', {
                    className: s()(p.contents, C),
                    children: P
                })
            ]
        })
    });
    return j
        ? (0, i.jsxs)('span', {
              className: s()(p.disabledButtonWrapper, S, o, {
                  [p.grow]: v,
                  [p.fullWidth]: l
              }),
              children: [
                  K,
                  (0, i.jsx)('span', {
                      onMouseEnter: x,
                      onMouseLeave: L,
                      className: p.disabledButtonOverlay
                  })
              ]
          })
        : K;
}
function y(e) {
    let { look: n = h.FILLED, color: r = _.BRAND, size: a = m.MEDIUM, fullWidth: o = !1, grow: u = !0, style: c, className: d, innerClassName: f, to: g, onClick: E, onMouseDown: v, onMouseUp: y, children: b, rel: I, ...T } = e;
    return (0, i.jsx)(l.rU, {
        ...T,
        to: g,
        onClick: E,
        onMouseUp: y,
        onMouseDown: v,
        style: c,
        rel: I,
        className: s()(d, p.button, n, r, a, {
            [p.fullWidth]: o,
            [p.grow]: u
        }),
        children: (0, i.jsx)('span', {
            className: s()(p.contents, f),
            children: b
        })
    });
}
(v.Looks = h), (v.Colors = _), (v.Sizes = m), (v.Link = y);
