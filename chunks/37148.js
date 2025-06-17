n.d(t, { x: () => g }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    o = n(197723),
    c = n(793030),
    s = n(84735),
    d = n(766646),
    u = n(667137),
    h = n(185033),
    x = n(388032),
    m = n(946598);
function b() {
    let { onClose: e } = (0, u.v)();
    return (0, r.jsx)(s.t, {
        children: (0, r.jsxs)('button', {
            className: m.closeButton,
            onClick: e,
            children: [
                (0, r.jsx)(d.n, { children: x.intl.string(h.default.WfH9io) }),
                (0, r.jsx)(o.D, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            ]
        })
    });
}
function p(e) {
    let { leading: t, trailing: n, children: l } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: m.headerLeading,
                    children: t
                }),
            l,
            (0, r.jsxs)('div', {
                className: m.headerTrailing,
                children: [null != n && n, (0, r.jsx)(b, {})]
            })
        ]
    });
}
function f(e) {
    let { leading: t, trailing: n, children: i } = e,
        [o, c] = l.useState(24),
        [s, d] = l.useState(24),
        u = l.useRef(null),
        h = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != u && null != u.current) {
                    let n = u.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != h && null != h.current) {
                    let n = h.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                d(Math.ceil(t)), c(Math.ceil(e));
            });
            return null != u.current && e.observe(u.current), null != h.current && e.observe(h.current), () => e.disconnect();
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: u,
                    className: a()(m.headerLeading, m.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: m.headerLeadingSpacer,
                    style: {
                        height: o,
                        width: s
                    }
                }),
                i,
                (0, r.jsx)('div', {
                    className: m.headerTrailingSpacer,
                    style: {
                        height: o,
                        width: s
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: h,
                    className: a()(m.headerTrailing, m.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(b, {})]
                })
            ]
        })
    );
}
function g(e) {
    let { title: t, titleTextVariant: n, body: l, alignCenter: i = !1, leading: o, trailing: s } = e,
        { headingId: d } = (0, u.v)();
    return (0, r.jsx)('header', {
        className: a()(m.header, m.section),
        children: (0, r.jsx)(i ? f : p, {
            leading: o,
            trailing: s,
            children: (0, r.jsxs)(c.Kq, {
                gap: 8,
                className: a()(m.headerMain, { [m.headerMainCentered]: i }),
                children: [
                    null != t &&
                        (0, r.jsx)(c.X6, {
                            id: d,
                            variant: null != n ? n : 'heading-lg/semibold',
                            color: 'text-primary',
                            children: t
                        }),
                    null != l &&
                        (0, r.jsx)(c.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: l
                        })
                ]
            })
        })
    });
}
