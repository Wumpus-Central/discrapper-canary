n.d(t, { k: () => E });
var i,
    r,
    s = n(255367),
    a = n(73800),
    l = n(120356),
    o = n.n(l),
    c = n(742421),
    d = n(765890);
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
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
    }
    return r;
}
let h = {
        VERTICAL: c.flexVertical,
        HORIZONTAL: c.flexHorizontal,
        HORIZONTAL_REVERSE: c.flexHorizontalReverse
    },
    f = {
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
    x = {
        START: c.flexAlignStart,
        END: c.flexAlignEnd,
        CENTER: c.flexAlignCenter,
        STRETCH: c.flexAlignStretch
    },
    _ = {
        SMALL: d.flexGutterSmall,
        LARGE: d.flexGutterLarge
    };
class j extends (i = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, shrink: i, grow: r, basis: l, style: c, wrap: u } = e,
            h = g(e, ['children', 'className', 'shrink', 'grow', 'basis', 'style', 'wrap']),
            f = m(
                {
                    style: m(
                        {
                            flexGrow: r,
                            flexShrink: i,
                            flexBasis: l
                        },
                        c
                    ),
                    className: n === d.flexChild ? n : o()(d.flexChild, n)
                },
                h
            );
        if (!u && 'string' != typeof t && 1 === a.Children.count(t)) {
            let e = a.Children.only(t);
            return ((f.style = m({}, f.style, e.props.style)), (f.className = o()(e.props.className, n)), a.cloneElement(e, f));
        }
        return (0, s.jsx)('div', p(m({}, f), { children: t }));
    }
}
u(j, 'defaultProps', {
    className: d.flexChild,
    style: {},
    wrap: !1
});
class E extends (r = a.PureComponent) {
    render() {
        let e = this.props,
            { children: t, className: n, direction: i, justify: r, align: a, wrap: l, shrink: c, grow: u, basis: h, style: f, gutter: b } = e,
            x = g(e, ['children', 'className', 'direction', 'justify', 'align', 'wrap', 'shrink', 'grow', 'basis', 'style', 'gutter']),
            _ = m(
                {
                    flexShrink: c,
                    flexGrow: u,
                    flexBasis: h
                },
                f
            );
        return (0, s.jsx)(
            'div',
            p(
                m(
                    {
                        style: _,
                        className: o()(d.flex, i, r, a, l, b, n)
                    },
                    x
                ),
                { children: t }
            )
        );
    }
}
(u(E, 'Child', j),
    u(E, 'Direction', h),
    u(E, 'Align', x),
    u(E, 'Justify', f),
    u(E, 'Wrap', b),
    u(E, 'Gutter', _),
    u(E, 'defaultProps', {
        direction: h.HORIZONTAL,
        justify: f.START,
        align: x.STRETCH,
        wrap: b.WRAP,
        shrink: 1,
        grow: 1,
        basis: 'auto',
        style: {}
    }));
