n.d(t, { k: () => I });
var r,
    i,
    a = n(200651),
    o = n(192379),
    s = n(120356),
    l = n.n(s),
    c = n(742421),
    u = n(765890);
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
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = {
        VERTICAL: c.flexVertical,
        HORIZONTAL: c.flexHorizontal,
        HORIZONTAL_REVERSE: c.flexHorizontalReverse
    },
    E = {
        START: c.flexJustifyStart,
        END: c.flexJustifyEnd,
        CENTER: c.flexJustifyCenter,
        BETWEEN: c.flexJustifyBetween,
        AROUND: c.flexJustifyAround
    },
    b = {
        NO_WRAP: c.flexNowrap,
        WRAP: c.flexWrap,
        WRAP_REVERSE: c.flexWrapReverse
    },
    y = {
        START: c.flexAlignStart,
        END: c.flexAlignEnd,
        CENTER: c.flexAlignCenter,
        STRETCH: c.flexAlignStretch
    },
    v = {
        SMALL: u.flexGutterSmall,
        LARGE: u.flexGutterLarge
    };
class O extends (r = o.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, shrink: r, grow: i, basis: s, style: c, wrap: d } = e,
            _ = h(e, ['children', 'className', 'shrink', 'grow', 'basis', 'style', 'wrap']),
            m = f(
                {
                    style: f(
                        {
                            flexGrow: i,
                            flexShrink: r,
                            flexBasis: s
                        },
                        c
                    ),
                    className: n === u.flexChild ? n : l()(u.flexChild, n)
                },
                _
            );
        if (!d && 'string' != typeof t && 1 === o.Children.count(t)) {
            let e = o.Children.only(t);
            return (m.style = f({}, m.style, e.props.style)), (m.className = l()(e.props.className, n)), o.cloneElement(e, m);
        }
        return (0, a.jsx)('div', p(f({}, m), { children: t }));
    }
}
d(O, 'defaultProps', {
    className: u.flexChild,
    style: {},
    wrap: !1
});
class I extends (i = o.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, direction: r, justify: i, align: o, wrap: s, shrink: c, grow: d, basis: _, style: m, gutter: g } = e,
            E = h(e, ['children', 'className', 'direction', 'justify', 'align', 'wrap', 'shrink', 'grow', 'basis', 'style', 'gutter']),
            b = f(
                {
                    flexShrink: c,
                    flexGrow: d,
                    flexBasis: _
                },
                m
            );
        return (0, a.jsx)(
            'div',
            p(
                f(
                    {
                        style: b,
                        className: l()(u.flex, r, i, o, s, g, n)
                    },
                    E
                ),
                { children: t }
            )
        );
    }
}
d(I, 'Child', O),
    d(I, 'Direction', g),
    d(I, 'Align', y),
    d(I, 'Justify', E),
    d(I, 'Wrap', b),
    d(I, 'Gutter', v),
    d(I, 'defaultProps', {
        direction: g.HORIZONTAL,
        justify: E.START,
        align: y.STRETCH,
        wrap: b.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    });
