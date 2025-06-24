n.d(t, { x: () => E }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(966649),
    l = n(793030),
    c = n(861066),
    u = n(304789),
    d = n(667137),
    f = n(185033),
    _ = n(388032),
    p = n(946598);
function h() {
    let { onClose: e } = (0, d.v)();
    return (0, r.jsx)(c.h, {
        variant: 'tertiary',
        icon: s.U,
        onClick: e,
        'aria-label': _.intl.string(f.default.WfH9io)
    });
}
function m(e) {
    let { leading: t, trailing: n, children: i } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: p.headerLeading,
                    children: t
                }),
            i,
            (0, r.jsxs)('div', {
                className: p.headerTrailing,
                children: [null != n && n, (0, r.jsx)(h, {})]
            })
        ]
    });
}
function g(e) {
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
                    className: o()(p.headerLeading, p.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: p.headerLeadingSpacer,
                    style: {
                        height: s,
                        width: c
                    }
                }),
                a,
                (0, r.jsx)('div', {
                    className: p.headerTrailingSpacer,
                    style: {
                        height: s,
                        width: c
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: f,
                    className: o()(p.headerTrailing, p.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(h, {})]
                })
            ]
        })
    );
}
function E(e) {
    let { gradientColor: t, image: n, title: i, titleTextVariant: a, body: s, alignCenter: c = !1, leading: f, trailing: _ } = e,
        { headingId: h } = (0, d.v)(),
        E = null != t,
        b = c ? g : m,
        y = (0, r.jsx)('header', {
            className: o()(p.header, p.section),
            children: (0, r.jsx)(b, {
                leading: f,
                trailing: _,
                children: (0, r.jsxs)(l.Kq, {
                    gap: 8,
                    className: o()(p.headerMain, { [p.headerMainCentered]: c }),
                    children: [
                        null != n &&
                            (0, r.jsx)('div', {
                                className: p.headerImage,
                                children: (0, r.jsx)('img', {
                                    src: n,
                                    alt: ''
                                })
                            }),
                        null != i &&
                            (0, r.jsx)(l.X6, {
                                id: h,
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
    return E
        ? (0, r.jsx)(u.$, {
              color: t,
              className: p.headerGradient,
              children: y
          })
        : y;
}
