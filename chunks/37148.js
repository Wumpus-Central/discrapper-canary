(n.d(t, {
    o: () => m,
    x: () => b
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(446673),
    c = n(146187),
    u = n(304789),
    d = n(751334),
    _ = n(667137),
    f = n(946598);
function p(e, t, n) {
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
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, _.v)();
    return (0, r.jsx)(c.P, {
        onClick: n,
        colorMix: t
    });
}
function g(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: f.headerLeading,
                    children: t
                }),
            a,
            (0, r.jsxs)('div', {
                className: f.headerTrailing,
                children: [null != n && n, (0, r.jsx)(m, { shouldColorMix: i })]
            })
        ]
    });
}
function E(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        _ = i.useRef(null),
        p = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != p && null != p.current) {
                    let n = p.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (d(Math.ceil(t)), c(Math.ceil(e)));
            });
            return (null != _.current && e.observe(_.current), null != p.current && e.observe(p.current), () => e.disconnect());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: _,
                    className: o()(f.headerLeading, f.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: f.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                s,
                (0, r.jsx)('div', {
                    className: f.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: p,
                    className: o()(f.headerTrailing, f.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(m, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function b(e) {
    let { gradientColor: t, graphic: n, badge: i, title: a, titleTextVariant: c, subtitle: p, alignCenter: m = !1, leading: b, trailing: y } = e,
        { headingId: O } = (0, _.v)(),
        v = null != t,
        I = m ? E : g,
        T =
            null != n &&
            (0, r.jsx)('div', {
                className: f.headerGraphic,
                children: (0, r.jsx)(d.z, h({}, n))
            }),
        S = (0, r.jsx)(s.X6, {
            id: O,
            variant: null != c ? c : 'heading-lg/semibold',
            color: 'text-primary',
            children: a
        }),
        A = (0, r.jsx)(s.xv, {
            variant: 'text-md/normal',
            color: 'text-secondary',
            children: p
        }),
        N = (0, r.jsx)('header', {
            className: o()(f.section, f.header, { [f.headerCentered]: m }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: f.headerLayout,
                        children: (0, r.jsx)(I, {
                            leading: b,
                            trailing: y,
                            hasGradient: v,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: f.headerMain,
                                children: [T, null == n && null != a && S]
                            })
                        })
                    }),
                    null != i && (0, r.jsx)(l.C, { badge: i }),
                    null != n && null != a && S,
                    null != p && A
                ]
            })
        });
    return v
        ? (0, r.jsx)(u.$, {
              color: t,
              className: f.headerGradient,
              children: N
          })
        : N;
}
