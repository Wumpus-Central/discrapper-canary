(n.d(t, { x: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(146187),
    c = n(304789),
    u = n(667137),
    d = n(946598);
function f(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, u.v)();
    return (0, r.jsx)(l.P, {
        onClick: n,
        colorMix: t
    });
}
function _(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: d.headerLeading,
                    children: t
                }),
            a,
            (0, r.jsxs)('div', {
                className: d.headerTrailing,
                children: [null != n && n, (0, r.jsx)(f, { shouldColorMix: i })]
            })
        ]
    });
}
function p(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, _] = i.useState(24),
        p = i.useRef(null),
        h = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != p && null != p.current) {
                    let n = p.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != h && null != h.current) {
                    let n = h.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (_(Math.ceil(t)), c(Math.ceil(e)));
            });
            return (null != p.current && e.observe(p.current), null != h.current && e.observe(h.current), () => e.disconnect());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: p,
                    className: o()(d.headerLeading, d.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: d.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                s,
                (0, r.jsx)('div', {
                    className: d.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: h,
                    className: o()(d.headerTrailing, d.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(f, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function h(e) {
    let { gradientColor: t, graphic: n, heading: i, headingTextVariant: a, body: l, alignCenter: f = !1, leading: h, trailing: m } = e,
        { headingId: g } = (0, u.v)(),
        E = null != t,
        b = f ? p : _,
        y = (0, r.jsx)('div', {
            className: d.headerGraphic,
            children: (0, r.jsx)('img', {
                src: n,
                alt: '',
                draggable: !1
            })
        }),
        O = (0, r.jsx)(s.X6, {
            id: g,
            variant: null != a ? a : 'heading-lg/semibold',
            color: 'text-primary',
            children: i
        }),
        v = (0, r.jsx)(s.xv, {
            variant: 'text-md/normal',
            color: 'text-secondary',
            children: l
        }),
        I = (0, r.jsx)('header', {
            className: o()(d.section, d.header, { [d.headerCentered]: f }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: d.headerLayout,
                        children: (0, r.jsx)(b, {
                            leading: h,
                            trailing: m,
                            hasGradient: E,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: d.headerMain,
                                children: [null != n && y, null == n && null != i && O]
                            })
                        })
                    }),
                    null != n && null != i && O,
                    null != l && v
                ]
            })
        });
    return E
        ? (0, r.jsx)(c.$, {
              color: t,
              className: d.headerGradient,
              children: I
          })
        : I;
}
