n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(497505),
    u = n(720293),
    c = n(602667),
    d = n(835153);
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
function v(e) {
    let { quest: t, asset: n } = e;
    return null == n
        ? null
        : (0, r.jsx)(c.A, {
              questOrQuests: t,
              questContent: a.jn.VIDEO_MODAL_END_CARD,
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
function E(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: i } = e;
    return (0, r.jsxs)('div', {
        className: d.endScreenCtaContainer,
        children: [
            (0, r.jsx)(p, {
                title: n,
                subtitle: l
            }),
            (0, r.jsx)(C, {
                label: t,
                icon: o.d4D,
                onClick: i
            })
        ]
    });
}
function p(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)('div', {
        className: d.endScreenCtaTitleContainer,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-md/semibold',
                className: d.endScreenCtaTitle,
                children: t
            }),
            (0, r.jsx)(o.X6q, {
                variant: 'heading-sm/normal',
                className: d.endScreenCtaSubtitle,
                children: n
            })
        ]
    });
}
function C(e) {
    let { label: t, icon: n, onClick: i, className: a } = e,
        [u, c] = l.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsxs)(o.P3F, {
        className: s()(d.endScreenCtaBtn, d.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: i,
        children: [
            (0, r.jsx)(o.X6q, {
                variant: 'heading-md/semibold',
                className: d.endScreenCtaBtnTitle,
                children: t
            }),
            (0, r.jsx)(n, {
                size: 'md',
                color: u ? o.TVs.colors.WHITE : '#B5BAC1',
                className: d.endScreenIcon
            })
        ]
    });
}
let f = function (e) {
    let { quest: t, ctaBtnLabel: n, title: i, subtitle: s, onCTAClick: o } = e,
        a = l.useMemo(() => (0, u.z)(u.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m, { asset: a }),
            (0, r.jsx)('div', { className: d.endScreenOverlay }),
            (0, r.jsxs)('div', {
                className: d.endScreenContainer,
                children: [
                    (0, r.jsx)(v, {
                        quest: t,
                        asset: a
                    }),
                    (0, r.jsx)(E, {
                        title: i,
                        subtitle: s,
                        ctaBtnLabel: n,
                        onCTAClick: o
                    })
                ]
            })
        ]
    });
};
