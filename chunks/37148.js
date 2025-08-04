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
    f = n(667137),
    _ = n(946598);
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
        { onClose: n } = (0, f.v)();
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
                    className: _.headerLeading,
                    children: t
                }),
            a,
            (0, r.jsxs)('div', {
                className: _.headerTrailing,
                children: [null != n && n, (0, r.jsx)(m, { shouldColorMix: i })]
            })
        ]
    });
}
function E(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        f = i.useRef(null),
        p = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != p && null != p.current) {
                    let n = p.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (d(Math.ceil(t)), c(Math.ceil(e)));
            });
            return (null != f.current && e.observe(f.current), null != p.current && e.observe(p.current), () => e.disconnect());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: f,
                    className: o()(_.headerLeading, _.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: _.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                s,
                (0, r.jsx)('div', {
                    className: _.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: p,
                    className: o()(_.headerTrailing, _.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(m, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function b(e) {
    let { gradientColor: t, graphic: n, badge: i, title: a, titleTextVariant: c, subtitle: p, alignCenter: m = !1, leading: b, trailing: y } = e,
        { headingId: O } = (0, f.v)(),
        v = null != t,
        I = m ? E : g,
        T =
            null != n &&
            (0, r.jsx)('div', {
                className: _.headerGraphic,
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
            className: o()(_.section, _.header, { [_.headerCentered]: m }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: _.headerLayout,
                        children: (0, r.jsx)(I, {
                            leading: b,
                            trailing: y,
                            hasGradient: v,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: _.headerMain,
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
              className: _.headerGradient,
              children: N
          })
        : N;
}
