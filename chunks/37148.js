n.d(e, { x: () => T }), n(388685);
var i = n(255367),
    r = n(73800),
    l = n(120356),
    a = n.n(l),
    d = n(197723),
    s = n(793030),
    o = n(84735),
    c = n(766646),
    u = n(667137),
    p = n(185033),
    _ = n(388032),
    g = n(946598);
function m() {
    let { onClose: t } = (0, u.v)();
    return (0, i.jsx)(o.t, {
        children: (0, i.jsxs)('button', {
            className: g.closeButton,
            onClick: t,
            children: [
                (0, i.jsx)(c.n, { children: _.intl.string(p.default.WfH9io) }),
                (0, i.jsx)(d.D, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            ]
        })
    });
}
function h(t) {
    let { leading: e, trailing: n, children: r } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != e &&
                (0, i.jsx)('div', {
                    className: g.headerLeading,
                    children: e
                }),
            r,
            (0, i.jsxs)('div', {
                className: g.headerTrailing,
                children: [null != n && n, (0, i.jsx)(m, {})]
            })
        ]
    });
}
function E(t) {
    let { leading: e, trailing: n, children: l } = t,
        [d, s] = r.useState(24),
        [o, c] = r.useState(24),
        u = r.useRef(null),
        p = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let t = new ResizeObserver(() => {
                let t = 0,
                    e = 0;
                if (null != u && null != u.current) {
                    let n = u.current.getBoundingClientRect();
                    (t = Math.max(t, n.height)), (e = Math.max(e, n.width));
                }
                if (null != p && null != p.current) {
                    let n = p.current.getBoundingClientRect();
                    (t = Math.max(t, n.height)), (e = Math.max(e, n.width));
                }
                c(Math.ceil(e)), s(Math.ceil(t));
            });
            return null != u.current && t.observe(u.current), null != p.current && t.observe(p.current), () => t.disconnect();
        }, []),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    ref: u,
                    className: a()(g.headerLeading, g.headerLeadingAbsolute),
                    children: e
                }),
                (0, i.jsx)('div', {
                    className: g.headerLeadingSpacer,
                    style: {
                        height: d,
                        width: o
                    }
                }),
                l,
                (0, i.jsx)('div', {
                    className: g.headerTrailingSpacer,
                    style: {
                        height: d,
                        width: o
                    }
                }),
                (0, i.jsxs)('div', {
                    ref: p,
                    className: a()(g.headerTrailing, g.headerTrailingAbsolute),
                    children: [null != n && n, (0, i.jsx)(m, {})]
                })
            ]
        })
    );
}
function T(t) {
    let { title: e, titleTextVariant: n, body: r, alignCenter: l = !1, leading: d, trailing: o } = t,
        { headingId: c } = (0, u.v)();
    return (0, i.jsx)('header', {
        className: a()(g.header, g.section),
        children: (0, i.jsx)(l ? E : h, {
            leading: d,
            trailing: o,
            children: (0, i.jsxs)(s.Kq, {
                gap: 8,
                className: a()(g.headerMain, { [g.headerMainCentered]: l }),
                children: [
                    null != e &&
                        (0, i.jsx)(s.X6, {
                            id: c,
                            variant: null != n ? n : 'heading-lg/semibold',
                            color: 'text-primary',
                            children: e
                        }),
                    null != r &&
                        (0, i.jsx)(s.xv, {
                            variant: 'text-md/normal',
                            color: 'text-secondary',
                            children: r
                        })
                ]
            })
        })
    });
}
