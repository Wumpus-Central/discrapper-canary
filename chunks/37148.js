(n.d(t, { x: () => v }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(186325),
    c = n(226690),
    u = n(146187),
    d = n(834023),
    _ = n(304789),
    f = n(667137),
    p = n(946598);
function h(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, f.v)();
    return (0, r.jsx)(u.P, {
        onClick: n,
        colorMix: t
    });
}
function m(e) {
    let { leading: t, trailing: n, hasGradient: i, children: a } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != t &&
                (0, r.jsx)('div', {
                    className: p.headerLeading,
                    children: t
                }),
            a,
            (0, r.jsxs)('div', {
                className: p.headerTrailing,
                children: [null != n && n, (0, r.jsx)(h, { shouldColorMix: i })]
            })
        ]
    });
}
function g(e) {
    let { leading: t, trailing: n, hasGradient: a, children: s } = e,
        [l, c] = i.useState(24),
        [u, d] = i.useState(24),
        _ = i.useRef(null),
        f = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = new ResizeObserver(() => {
                let e = 0,
                    t = 0;
                if (null != _ && null != _.current) {
                    let n = _.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                if (null != f && null != f.current) {
                    let n = f.current.getBoundingClientRect();
                    ((e = Math.max(e, n.height)), (t = Math.max(t, n.width)));
                }
                (d(Math.ceil(t)), c(Math.ceil(e)));
            });
            return (null != _.current && e.observe(_.current), null != f.current && e.observe(f.current), () => e.disconnect());
        }, []),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    ref: _,
                    className: o()(p.headerLeading, p.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: p.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                s,
                (0, r.jsx)('div', {
                    className: p.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: f,
                    className: o()(p.headerTrailing, p.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(h, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function E(e) {
    return 'src' in e && 'string' == typeof e.src;
}
function b(e) {
    return 'lottie' in e && null != e;
}
function y(e) {
    return 'type' in e && 'number' == typeof e.type;
}
function O(e) {
    let { graphic: t } = e,
        { reducedMotion: n } = i.useContext(l.S);
    return null == t
        ? null
        : E(t)
          ? (0, r.jsx)('img', {
                src: t.src,
                alt: '',
                draggable: !1
            })
          : b(t)
            ? (0, r.jsx)(c.F, {
                  autoplay: !0,
                  shouldAnimate: !n.enabled,
                  importData: t.lottie,
                  className: p.lottie
              })
            : y(t)
              ? (0, r.jsx)(d.gM, { data: t })
              : null;
}
function v(e) {
    let { gradientColor: t, graphic: n, title: i, titleTextVariant: a, subtitle: l, alignCenter: c = !1, leading: u, trailing: d } = e,
        { headingId: h } = (0, f.v)(),
        E = null != t,
        b = c ? g : m,
        y = (0, r.jsx)('div', {
            className: p.headerGraphic,
            children: (0, r.jsx)(O, { graphic: n })
        }),
        v = (0, r.jsx)(s.X6, {
            id: h,
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
            className: o()(p.section, p.header, { [p.headerCentered]: c }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: p.headerLayout,
                        children: (0, r.jsx)(b, {
                            leading: u,
                            trailing: d,
                            hasGradient: E,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: p.headerMain,
                                children: [null != n && y, null == n && null != i && v]
                            })
                        })
                    }),
                    null != n && null != i && v,
                    null != l && I
                ]
            })
        });
    return E
        ? (0, r.jsx)(_.$, {
              color: t,
              className: p.headerGradient,
              children: T
          })
        : T;
}
