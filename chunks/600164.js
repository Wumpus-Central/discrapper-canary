var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(189180),
    u = r(652849);
let c = {
        VERTICAL: u.vertical,
        HORIZONTAL: l.horizontal,
        HORIZONTAL_REVERSE: l.horizontalReverse
    },
    d = {
        START: u.justifyStart,
        END: u.justifyEnd,
        CENTER: u.justifyCenter,
        BETWEEN: u.justifyBetween,
        AROUND: u.justifyAround
    },
    f = {
        START: u.alignStart,
        END: u.alignEnd,
        CENTER: u.alignCenter,
        STRETCH: u.alignStretch,
        BASELINE: u.alignBaseline
    },
    _ = {
        NO_WRAP: u.noWrap,
        WRAP: u.wrap,
        WRAP_REVERSE: u.wrapReverse
    },
    h = (e) => {
        let { children: n, className: r, shrink: s = 1, grow: u = 1, basis: c = 'auto', style: d, wrap: f = !1, ..._ } = e,
            h = {
                className: (r = null != r ? r : l.flexChild),
                style: {
                    flexGrow: u,
                    flexShrink: s,
                    flexBasis: c,
                    ...d
                },
                ..._
            };
        if (!f && 'string' != typeof n && 1 === a.Children.count(n)) {
            let e = a.Children.only(n);
            return (
                (h.style = {
                    ...h.style,
                    ...e.props.style
                }),
                (h.className = o()(e.props.className, r)),
                a.cloneElement(e, h)
            );
        }
        return (0, i.jsx)('div', {
            ...h,
            children: n
        });
    },
    p = (e) => {
        let { children: n, className: r, direction: a = c.HORIZONTAL, justify: s = d.START, align: u = f.STRETCH, wrap: h = _.NO_WRAP, shrink: p = 1, grow: m = 1, basis: g = 'auto', style: E, ...v } = e;
        return (0, i.jsx)('div', {
            style: {
                flexShrink: p,
                flexGrow: m,
                flexBasis: g,
                ...E
            },
            className: o()(l.flex, a, s, u, h, r),
            ...v,
            children: n
        });
    };
(p.Child = h), (p.Direction = c), (p.Align = f), (p.Justify = d), (p.Wrap = _), (n.Z = p);
