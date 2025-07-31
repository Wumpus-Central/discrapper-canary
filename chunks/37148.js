(n.d(t, {
    o: () => m,
    x: () => I
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(793030),
    l = n(186325),
    c = n(226690),
    u = n(446673),
    d = n(146187),
    _ = n(834023),
    f = n(304789),
    p = n(667137),
    h = n(946598);
function m(e) {
    let { shouldColorMix: t = !1 } = e,
        { onClose: n } = (0, p.v)();
    return (0, r.jsx)(d.P, {
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
                    className: h.headerLeading,
                    children: t
                }),
            a,
            (0, r.jsxs)('div', {
                className: h.headerTrailing,
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
                    className: o()(h.headerLeading, h.headerLeadingAbsolute),
                    children: t
                }),
                (0, r.jsx)('div', {
                    className: h.headerLeadingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                s,
                (0, r.jsx)('div', {
                    className: h.headerTrailingSpacer,
                    style: {
                        height: l,
                        width: u
                    }
                }),
                (0, r.jsxs)('div', {
                    ref: f,
                    className: o()(h.headerTrailing, h.headerTrailingAbsolute),
                    children: [null != n && n, (0, r.jsx)(m, { shouldColorMix: a })]
                })
            ]
        })
    );
}
function b(e) {
    return 'src' in e && 'string' == typeof e.src;
}
function y(e) {
    return 'lottie' in e && null != e;
}
function O(e) {
    return 'type' in e && 'number' == typeof e.type;
}
function v(e) {
    let { graphic: t } = e,
        { reducedMotion: n } = i.useContext(l.S);
    return null == t
        ? null
        : b(t)
          ? (0, r.jsx)('img', {
                src: t.src,
                alt: '',
                draggable: !1
            })
          : y(t)
            ? (0, r.jsx)(c.F, {
                  autoplay: !0,
                  shouldAnimate: !n.enabled,
                  importData: t.lottie,
                  className: h.lottie
              })
            : O(t)
              ? (0, r.jsx)(_.gM, { data: t })
              : null;
}
function I(e) {
    let { gradientColor: t, graphic: n, badge: i, title: a, titleTextVariant: l, subtitle: c, alignCenter: d = !1, leading: _, trailing: m } = e,
        { headingId: b } = (0, p.v)(),
        y = null != t,
        O = d ? E : g,
        I = (0, r.jsx)('div', {
            className: h.headerGraphic,
            children: (0, r.jsx)(v, { graphic: n })
        }),
        T = (0, r.jsx)(s.X6, {
            id: b,
            variant: null != l ? l : 'heading-lg/semibold',
            color: 'text-primary',
            children: a
        }),
        S = (0, r.jsx)(s.xv, {
            variant: 'text-md/normal',
            color: 'text-secondary',
            children: c
        }),
        A = (0, r.jsx)('header', {
            className: o()(h.section, h.header, { [h.headerCentered]: d }),
            children: (0, r.jsxs)(s.Kq, {
                gap: 8,
                children: [
                    (0, r.jsx)('div', {
                        className: h.headerLayout,
                        children: (0, r.jsx)(O, {
                            leading: _,
                            trailing: m,
                            hasGradient: y,
                            children: (0, r.jsxs)(s.Kq, {
                                gap: 8,
                                className: h.headerMain,
                                children: [null != n && I, null == n && null != a && T]
                            })
                        })
                    }),
                    null != i && (0, r.jsx)(u.C, { badge: i }),
                    null != n && null != a && T,
                    null != c && S
                ]
            })
        });
    return y
        ? (0, r.jsx)(f.$, {
              color: t,
              className: h.headerGradient,
              children: A
          })
        : A;
}
