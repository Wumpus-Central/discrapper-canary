n.d(t, {
    k: function () {
        return x;
    }
});
var i,
    r,
    a = n(200651),
    s = n(192379),
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
let g = {
        VERTICAL: c.flexVertical,
        HORIZONTAL: c.flexHorizontal,
        HORIZONTAL_REVERSE: c.flexHorizontalReverse
    },
    m = {
        START: c.flexJustifyStart,
        END: c.flexJustifyEnd,
        CENTER: c.flexJustifyCenter,
        BETWEEN: c.flexJustifyBetween,
        AROUND: c.flexJustifyAround
    },
    f = {
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
    _ = {
        SMALL: d.flexGutterSmall,
        LARGE: d.flexGutterLarge
    };
class h extends (i = s.PureComponent) {
    render() {
        let { children: e, className: t, shrink: n, grow: i, basis: r, style: l, wrap: c, ...u } = this.props,
            g = {
                style: {
                    flexGrow: i,
                    flexShrink: n,
                    flexBasis: r,
                    ...l
                },
                className: t === d.flexChild ? t : o()(d.flexChild, t),
                ...u
            };
        if (!c && 'string' != typeof e && 1 === s.Children.count(e)) {
            let n = s.Children.only(e);
            return (
                (g.style = {
                    ...g.style,
                    ...n.props.style
                }),
                (g.className = o()(n.props.className, t)),
                s.cloneElement(n, g)
            );
        }
        return (0, a.jsx)('div', {
            ...g,
            children: e
        });
    }
}
u(h, 'defaultProps', {
    className: d.flexChild,
    style: {},
    wrap: !1
});
class x extends (r = s.PureComponent) {
    render() {
        let { children: e, className: t, direction: n, justify: i, align: r, wrap: s, shrink: l, grow: c, basis: u, style: g, gutter: m, ...f } = this.props,
            p = {
                flexShrink: l,
                flexGrow: c,
                flexBasis: u,
                ...g
            };
        return (0, a.jsx)('div', {
            style: p,
            className: o()(d.flex, n, i, r, s, m, t),
            ...f,
            children: e
        });
    }
}
u(x, 'Child', h),
    u(x, 'Direction', g),
    u(x, 'Align', p),
    u(x, 'Justify', m),
    u(x, 'Wrap', f),
    u(x, 'Gutter', _),
    u(x, 'defaultProps', {
        direction: g.HORIZONTAL,
        justify: m.START,
        align: p.STRETCH,
        wrap: f.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    });
