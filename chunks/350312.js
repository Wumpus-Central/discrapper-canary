n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    l = n(192379),
    o = n(120356),
    i = n.n(o),
    a = n(481060),
    s = n(497505),
    c = n(720293),
    u = n(602667),
    d = n(604142);
function m(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('img', {
              src: t.url,
              alt: '',
              className: d.endScreenImageBackground
          });
}
function p(e) {
    let { quest: t, asset: n } = e;
    return null == n
        ? null
        : (0, r.jsx)(u.A, {
              questOrQuests: t,
              questContent: s.jn.VIDEO_MODAL_END_CARD,
              children: (e) =>
                  (0, r.jsx)('img', {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: 'Video thumbnail',
                      className: d.endScreenCard
                  })
          });
}
function f(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: o } = e;
    return (0, r.jsxs)('div', {
        className: d.endScreenCtaContainer,
        children: [
            (0, r.jsx)(v, {
                title: n,
                subtitle: l
            }),
            (0, r.jsx)(g, {
                label: t,
                icon: a.d4D,
                onClick: o
            })
        ]
    });
}
function v(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)('div', {
        className: d.endScreenCtaTitleContainer,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-md/semibold',
                className: d.endScreenCtaTitle,
                children: t
            }),
            (0, r.jsx)(a.X6q, {
                variant: 'heading-sm/normal',
                className: d.endScreenCtaSubtitle,
                children: n
            })
        ]
    });
}
function g(e) {
    let { label: t, icon: n, onClick: o, className: s } = e,
        [c, u] = l.useState(!1),
        m = () => {
            u(!0);
        },
        p = () => {
            u(!1);
        };
    return (0, r.jsxs)(a.P3F, {
        className: i()(d.endScreenCtaBtn, d.accentOnHover, s),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: o,
        children: [
            (0, r.jsx)(a.X6q, {
                variant: 'heading-md/semibold',
                className: d.endScreenCtaBtnTitle,
                children: t
            }),
            (0, r.jsx)(n, {
                size: 'md',
                color: c ? a.TVs.colors.WHITE : '#B5BAC1',
                className: d.endScreenIcon
            })
        ]
    });
}
let b = function (e) {
    let { quest: t, ctaBtnLabel: n, title: o, subtitle: i, onCTAClick: a } = e,
        s = l.useMemo(() => (0, c.z)(c.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, { asset: s }),
            (0, r.jsx)('div', { className: d.endScreenOverlay }),
            (0, r.jsxs)('div', {
                className: d.endScreenContainer,
                children: [
                    (0, r.jsx)(p, {
                        quest: t,
                        asset: s
                    }),
                    (0, r.jsx)(f, {
                        title: o,
                        subtitle: i,
                        ctaBtnLabel: n,
                        onCTAClick: a
                    })
                ]
            })
        ]
    });
};
