n.d(t, {
    k: function () {
        return _;
    }
});
var i,
    r,
    s = n(200651),
    a = n(192379),
    l = n(557533),
    o = n.n(l),
    c = n(640149),
    d = n(92221);
function u(e, t, n) {
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
let m = {
        VERTICAL: c.flexVertical,
        HORIZONTAL: c.flexHorizontal,
        HORIZONTAL_REVERSE: c.flexHorizontalReverse
    },
    g = {
        START: c.flexJustifyStart,
        END: c.flexJustifyEnd,
        CENTER: c.flexJustifyCenter,
        BETWEEN: c.flexJustifyBetween,
        AROUND: c.flexJustifyAround
    },
    h = {
        NO_WRAP: c.flexNowrap,
        WRAP: c.flexWrap,
        WRAP_REVERSE: c.flexWrapReverse
    },
    p = {
        START: c.flexAlignStart,
        END: c.flexAlignEnd,
        CENTER: c.flexAlignCenter,
        STRETCH: c.flexAlignStretch
    },
    x = {
        SMALL: d.flexGutterSmall,
        LARGE: d.flexGutterLarge
    };
class f extends (i = a.PureComponent) {
    render() {
        let { children: e, className: t, shrink: n, grow: i, basis: r, style: l, wrap: c, ...u } = this.props,
            m = {
                style: {
                    flexGrow: i,
                    flexShrink: n,
                    flexBasis: r,
                    ...l
                },
                className: t === d.flexChild ? t : o()(d.flexChild, t),
                ...u
            };
        if (!c && 'string' != typeof e && 1 === a.Children.count(e)) {
            let n = a.Children.only(e);
            return (
                (m.style = {
                    ...m.style,
                    ...n.props.style
                }),
                (m.className = o()(n.props.className, t)),
                a.cloneElement(n, m)
            );
        }
        return (0, s.jsx)('div', {
            ...m,
            children: e
        });
    }
}
u(f, 'defaultProps', {
    className: d.flexChild,
    style: {},
    wrap: !1
});
class _ extends (r = a.PureComponent) {
    render() {
        let { children: e, className: t, direction: n, justify: i, align: r, wrap: a, shrink: l, grow: c, basis: u, style: m, gutter: g, ...h } = this.props,
            p = {
                flexShrink: l,
                flexGrow: c,
                flexBasis: u,
                ...m
            };
        return (0, s.jsx)('div', {
            style: p,
            className: o()(d.flex, n, i, r, a, g, t),
            ...h,
            children: e
        });
    }
}
u(_, 'Child', f),
    u(_, 'Direction', m),
    u(_, 'Align', p),
    u(_, 'Justify', g),
    u(_, 'Wrap', h),
    u(_, 'Gutter', x),
    u(_, 'defaultProps', {
        direction: m.HORIZONTAL,
        justify: g.START,
        align: p.STRETCH,
        wrap: h.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    });
