n.d(t, { x: () => b }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(197723),
    l = n(793030),
    c = n(84735),
    u = n(766646),
    d = n(304789),
    f = n(667137),
    _ = n(185033),
    p = n(388032),
    h = n(946598);
function m() {
    let { onClose: e } = (0, f.v)();
    return (0, r.jsx)(c.t, {
        children: (0, r.jsxs)('button', {
            className: h.closeButton,
            onClick: e,
            children: [
                (0, r.jsx)(u.n, { children: p.intl.string(_.default.WfH9io) }),
                (0, r.jsx)(s.D, {
                    size: 'md',
                    color: 'currentColor',
                    'aria-hidden': !0
                })
            ]
        })
    });
}
function g(e) {
    let { leading: t, trailing: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: h.headerLeading,
                    children: t
                }),
            i,
            (0, r.jsxs)('div', {
                className: h.headerTrailing,
                children: [null != n && n, (0, r.jsx)(m, {})]
            })
        ]
    });
}
function E(e) {
    let { leading: t, trailing: n, children: a } = e,
        [s, l] = i.useState(24),
        [c, u] = i.useState(24),
        d = i.useRef(null),
        f = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != d && null != d.current) {
                    let n = d.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    (e = Math.max(e, n.height)), (t = Math.max(t, n.width));
                }
                u(Math.ceil(t)), l(Math.ceil(e));
            });
            return null != d.current && e.observe(d.current), null != f.current && e.observe(f.current), () => e.disconnect();
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: d,
                    className: o()(h.headerLeading, h.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: h.headerLeadingSpacer,
                    style: {
                        height: s,
                        width: c
                    }
                }),
                a,
                (0, r.jsx)('div', {
                    className: h.headerTrailingSpacer,
                    style: {
                        height: s,
                        width: c
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: f,
                    className: o()(h.headerTrailing, h.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(m, {})]
                })
            ]
        })
    );
}
function b(e) {
    let { gradientColor: t, image: n, title: i, titleTextVariant: a, body: s, alignCenter: c = !1, leading: u, trailing: _ } = e,
        { headingId: p } = (0, f.v)(),
        m = null != t,
        b = c ? E : g,
        y = (0, r.jsx)('header', {
            className: o()(h.header, h.section),
            children: (0, r.jsx)(b, {
                leading: u,
                trailing: _,
                children: (0, r.jsxs)(l.Kq, {
                    gap: 8,
                    className: o()(h.headerMain, { [h.headerMainCentered]: c }),
                    children: [
                        null != n &&
                            (0, r.jsx)('div', {
                                className: h.headerImage,
                                children: (0, r.jsx)('img', {
                                    src: n,
                                    alt: ''
                                })
                            }),
                        null != i &&
                            (0, r.jsx)(l.X6, {
                                id: p,
                                variant: null != a ? a : 'heading-lg/semibold',
                                color: 'text-primary',
                                children: i
                            }),
                        null != s &&
                            (0, r.jsx)(l.xv, {
                                variant: 'text-md/normal',
                                color: 'text-secondary',
                                children: s
                            })
                    ]
                })
            })
        });
    return m
        ? (0, r.jsx)(d.$, {
              color: t,
              className: h.headerGradient,
              children: y
          })
        : y;
}
