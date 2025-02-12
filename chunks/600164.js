n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(332076),
    l = n(801194);
let u = {
        VERTICAL: l.vertical,
        HORIZONTAL: o.horizontal,
        HORIZONTAL_REVERSE: o.horizontalReverse
    },
    c = {
        START: l.justifyStart,
        END: l.justifyEnd,
        CENTER: l.justifyCenter,
        BETWEEN: l.justifyBetween,
        AROUND: l.justifyAround
    },
    d = {
        START: l.alignStart,
        END: l.alignEnd,
        CENTER: l.alignCenter,
        STRETCH: l.alignStretch,
        BASELINE: l.alignBaseline
    },
    f = {
        NO_WRAP: l.noWrap,
        WRAP: l.wrap,
        WRAP_REVERSE: l.wrapReverse
    },
    _ = (e) => {
        let { children: t, className: n, shrink: a = 1, grow: l = 1, basis: u = 'auto', style: c, wrap: d = !1, ...f } = e,
            _ = {
                className: (n = null != n ? n : o.flexChild),
                style: {
                    flexGrow: l,
                    flexShrink: a,
                    flexBasis: u,
                    ...c
                },
                ...f
            };
        if (!d && 'string' != typeof t && 1 === r.Children.count(t)) {
            let e = r.Children.only(t);
            return (
                (_.style = {
                    ..._.style,
                    ...e.props.style
                }),
                (_.className = s()(e.props.className, n)),
                r.cloneElement(e, _)
            );
        }
        return (0, i.jsx)('div', {
            ..._,
            children: t
        });
    },
    p = (e) => {
        let { children: t, className: n, direction: r = u.HORIZONTAL, justify: a = c.START, align: l = d.STRETCH, wrap: _ = f.NO_WRAP, shrink: p = 1, grow: h = 1, basis: m = 'auto', style: g, ...E } = e;
        return (0, i.jsx)('div', {
            style: {
                flexShrink: p,
                flexGrow: h,
                flexBasis: m,
                ...g
            },
            className: s()(o.flex, r, a, l, _, n),
            ...E,
            children: t
        });
    };
(p.Child = _), (p.Direction = u), (p.Align = d), (p.Justify = c), (p.Wrap = f);
let h = p;
