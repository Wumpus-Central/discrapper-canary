(n.d(t, { x: () => y }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(186325),
    c = n(226690),
    u = n(146187),
    d = n(304789),
    _ = n(667137),
    f = n(946598);
function p(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, _.v)();
    return (0, r.jsx)(u.P, {
        onClick: n,
        colorMix: t
    });
}
function h(e) {
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
                children: [null != n && n, (0, r.jsx)(p, { shouldColorMix: i })]
            })
        ]
    });
}
function m(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        _ = i.useRef(null),
        h = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != h && null != h.current) {
                    let n = h.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (d(Math.ceil(t)), c(Math.ceil(e)));
            });
            return (null != _.current && e.observe(_.current), null != h.current && e.observe(h.current), () => e.disconnect());
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
                    ref: h,
                    className: o()(f.headerTrailing, f.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(p, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function g(e) {
    return 'src' in e && 'string' == typeof e.src;
}
function E(e) {
    return 'lottie' in e && null != e;
}
function b(e) {
    let { graphic: t } = e,
        { reducedMotion: n } = i.useContext(l.S);
    return null == t
        ? null
        : g(t)
          ? (0, r.jsx)('img', {
                src: t.src,
                alt: '',
                draggable: !1
            })
          : E(t)
            ? (0, r.jsx)(c.F, {
                  autoplay: !0,
                  shouldAnimate: !n.enabled,
                  importData: t.lottie,
                  className: f.lottie
              })
            : null;
}
function y(e) {
    let { gradientColor: t, graphic: n, title: i, titleTextVariant: a, subtitle: l, alignCenter: c = !1, leading: u, trailing: p } = e,
        { headingId: g } = (0, _.v)(),
        E = null != t,
        y = c ? m : h,
        O = (0, r.jsx)('div', {
            className: f.headerGraphic,
            children: (0, r.jsx)(b, { graphic: n })
        }),
        v = (0, r.jsx)(s.X6, {
            id: g,
            variant: null != a ? a : 'heading-lg/semibold',
            color: 'text-primary',
            children: i
        }),
        I = (0, r.jsx)(s.xv, {
            variant: 'text-md/normal',
            color: 'text-secondary',
            children: l
        }),
        T = (0, r.jsx)('header', {
            className: o()(f.section, f.header, { [f.headerCentered]: c }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: f.headerLayout,
                        children: (0, r.jsx)(y, {
                            leading: u,
                            trailing: p,
                            hasGradient: E,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: f.headerMain,
                                children: [null != n && O, null == n && null != i && v]
                            })
                        })
                    }),
                    null != n && null != i && v,
                    null != l && I
                ]
            })
        });
    return E
        ? (0, r.jsx)(d.$, {
              color: t,
              className: f.headerGradient,
              children: T
          })
        : T;
}
