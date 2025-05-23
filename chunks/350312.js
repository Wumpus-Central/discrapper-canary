n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(754700),
    s = n(481060),
    c = n(497505),
    u = n(720293),
    d = n(602667),
    m = n(117531);
function p(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('img', {
              src: t.url,
              alt: '',
              className: m.endScreenImageBackground
          });
}
function f(e) {
    let { quest: t, asset: n } = e;
    return null == n
        ? null
        : (0, r.jsx)(d.A, {
              questOrQuests: t,
              questContent: c.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: 'Video thumbnail',
                      className: m.endScreenCard
                  })
          });
}
function v(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: o } = e;
    return (0, r.jsxs)('div', {
        className: m.endScreenCtaContainer,
        children: [
            (0, r.jsx)(g, {
                title: n,
                subtitle: l
            }),
            (0, r.jsx)(b, {
                label: t,
                icon: s.d4D,
                onClick: o
            })
        ]
    });
}
function g(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)('div', {
        className: m.endScreenCtaTitleContainer,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: m.endScreenCtaTitle,
                children: t
            }),
            (0, r.jsx)(s.X6q, {
                variant: 'heading-sm/normal',
                className: m.endScreenCtaSubtitle,
                children: n
            })
        ]
    });
}
function b(e) {
    let { label: t, icon: n, onClick: o, className: a } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsxs)(s.P3F, {
        className: i()(m.endScreenCtaBtn, m.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: p,
        onFocus: d,
        onBlur: p,
        onClick: o,
        children: [
            (0, r.jsx)(s.X6q, {
                variant: 'heading-md/semibold',
                className: m.endScreenCtaBtnTitle,
                children: t
            }),
            (0, r.jsx)(n, {
                size: 'md',
                color: c ? s.TVs.colors.WHITE : '#B5BAC1',
                className: m.endScreenIcon
            })
        ]
    });
}
let E = function (e) {
    let { quest: t, ctaBtnLabel: n, title: o, subtitle: i, onCTAClick: s } = e,
        c = l.useMemo(() => (0, u.z0)(t, a.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(p, { asset: c }),
            (0, r.jsx)('div', { className: m.endScreenOverlay }),
            (0, r.jsxs)('div', {
                className: m.endScreenContainer,
                children: [
                    (0, r.jsx)(f, {
                        quest: t,
                        asset: c
                    }),
                    (0, r.jsx)(v, {
                        title: o,
                        subtitle: i,
                        ctaBtnLabel: n,
                        onCTAClick: s
                    })
                ]
            })
        ]
    });
};
