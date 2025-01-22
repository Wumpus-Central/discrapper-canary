var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
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
    p = {
        NO_WRAP: u.noWrap,
        WRAP: u.wrap,
        WRAP_REVERSE: u.wrapReverse
    },
    h = (e) => {
        let { children: n, className: r, shrink: o = 1, grow: u = 1, basis: c = 'auto', style: d, wrap: f = !1, ...p } = e,
            h = {
                className: (r = null != r ? r : l.flexChild),
                style: {
                    flexGrow: u,
                    flexShrink: o,
                    flexBasis: c,
                    ...d
                },
                ...p
            };
        if (!f && 'string' != typeof n && 1 === a.Children.count(n)) {
            let e = a.Children.only(n);
            return (
                (h.style = {
                    ...h.style,
                    ...e.props.style
                }),
                (h.className = s()(e.props.className, r)),
                a.cloneElement(e, h)
            );
        }
        return (0, i.jsx)('div', {
            ...h,
            children: n
        });
    },
    _ = (e) => {
        let { children: n, className: r, direction: a = c.HORIZONTAL, justify: o = d.START, align: u = f.STRETCH, wrap: h = p.NO_WRAP, shrink: _ = 1, grow: m = 1, basis: g = 'auto', style: E, ...v } = e;
        return (0, i.jsx)('div', {
            style: {
                flexShrink: _,
                flexGrow: m,
                flexBasis: g,
                ...E
            },
            className: s()(l.flex, a, o, u, h, r),
            ...v,
            children: n
        });
    };
(_.Child = h), (_.Direction = c), (_.Align = f), (_.Justify = d), (_.Wrap = p), (n.Z = _);
