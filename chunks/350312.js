(n.d(t, { Z: () => O }), n(388685));
var r = n(255367),
    l = n(73800),
    o = n(120356),
    i = n.n(o),
    a = n(754700),
    s = n(481060),
    c = n(497505),
    u = n(720293),
    d = n(602667),
    m = n(604142);
function f(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)('img', {
              src: t.url,
              alt: '',
              className: m.endScreenImageBackground
          });
}
function p(e) {
    let { quest: t, asset: n, sourceQuestContent: l } = e;
    return null == n
        ? null
        : (0, r.jsx)(d.A, {
              questOrQuests: t,
              questContent: c.jn.VIDEO_MODAL_END_CARD,
              sourceQuestContent: l,
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
            (0, r.jsx)(E, {
                title: n,
                subtitle: l
            }),
            (0, r.jsx)(g, {
                label: t,
                icon: s.d4D,
                onClick: o
            })
        ]
    });
}
function E(e) {
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
function g(e) {
    let { label: t, icon: n, onClick: o, className: a } = e,
        [c, u] = l.useState(!1),
        d = () => {
            u(!0);
        },
        f = () => {
            u(!1);
        };
    return (0, r.jsxs)(s.P3F, {
        className: i()(m.endScreenCtaBtn, m.accentOnHover, a),
        onMouseEnter: d,
        onMouseLeave: f,
        onFocus: d,
        onBlur: f,
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
let O = function (e) {
    let { quest: t, ctaBtnLabel: n, title: o, subtitle: i, onCTAClick: s, sourceQuestContent: c } = e,
        d = l.useMemo(() => (0, u.z0)(t, a.X.WATCH_VIDEO, u.n1.VIDEO, u.O.THUMBNAIL), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f, { asset: d }),
            (0, r.jsx)('div', { className: m.endScreenOverlay }),
            (0, r.jsxs)('div', {
                className: m.endScreenContainer,
                children: [
                    (0, r.jsx)(p, {
                        quest: t,
                        asset: d,
                        sourceQuestContent: c
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
