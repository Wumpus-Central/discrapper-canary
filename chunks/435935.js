n.d(t, { k: () => E });
var i,
    r,
    a = n(200651),
    s = n(192379),
    o = n(557533),
    l = n.n(o),
    u = n(640149),
    c = n(92221);
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
let f = {
        VERTICAL: u.flexVertical,
        HORIZONTAL: u.flexHorizontal,
        HORIZONTAL_REVERSE: u.flexHorizontalReverse
    },
    _ = {
        START: u.flexJustifyStart,
        END: u.flexJustifyEnd,
        CENTER: u.flexJustifyCenter,
        BETWEEN: u.flexJustifyBetween,
        AROUND: u.flexJustifyAround
    },
    p = {
        NO_WRAP: u.flexNowrap,
        WRAP: u.flexWrap,
        WRAP_REVERSE: u.flexWrapReverse
    },
    h = {
        START: u.flexAlignStart,
        END: u.flexAlignEnd,
        CENTER: u.flexAlignCenter,
        STRETCH: u.flexAlignStretch
    },
    m = {
        SMALL: c.flexGutterSmall,
        LARGE: c.flexGutterLarge
    };
class g extends (i = s.PureComponent) {
    render() {
        let { children: e, className: t, shrink: n, grow: i, basis: r, style: o, wrap: u, ...d } = this.props,
            f = {
                style: {
                    flexGrow: i,
                    flexShrink: n,
                    flexBasis: r,
                    ...o
                },
                className: t === c.flexChild ? t : l()(c.flexChild, t),
                ...d
            };
        if (!u && 'string' != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (f.style = {
                    ...f.style,
                    ...n.props.style
                }),
                (f.className = l()(n.props.className, t)),
                s.cloneElement(n, f)
            );
        }
        return (0, a.jsx)('div', {
            ...f,
            children: e
        });
    }
}
d(g, 'defaultProps', {
    className: c.flexChild,
    style: {},
    wrap: !1
});
class E extends (r = s.PureComponent) {
    render() {
        let { children: e, className: t, direction: n, justify: i, align: r, wrap: s, shrink: o, grow: u, basis: d, style: f, gutter: _, ...p } = this.props,
            h = {
                flexShrink: o,
                flexGrow: u,
                flexBasis: d,
                ...f
            };
        return (0, a.jsx)('div', {
            style: h,
            className: l()(c.flex, n, i, r, s, _, t),
            ...p,
            children: e
        });
    }
}
d(E, 'Child', g),
    d(E, 'Direction', f),
    d(E, 'Align', h),
    d(E, 'Justify', _),
    d(E, 'Wrap', p),
    d(E, 'Gutter', m),
    d(E, 'defaultProps', {
        direction: f.HORIZONTAL,
        justify: _.START,
        align: h.STRETCH,
        wrap: p.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    });
