n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(497505),
    u = n(720293),
    c = n(602667),
    d = n(110551);
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
    let { ctaBtnLabel: t, title: n, subtitle: i, onCTAClick: l } = e;
    return (0, r.jsxs)('div', {
        className: d.endScreenCtaContainer,
        children: [
            (0, r.jsx)(C, {
                title: n,
                subtitle: i
            }),
            (0, r.jsx)(p, {
                label: t,
                icon: s.ArrowLargeRightIcon,
                onClick: l
            })
        ]
    });
}
function C(e) {
    let { title: t, subtitle: n } = e,
        i = '' !== (null != t ? t : '').trim(),
        l = '' !== (null != n ? n : '').trim();
    return i || l
        ? (0, r.jsxs)('div', {
              className: d.endScreenCtaTitleContainer,
              children: [
                  i &&
                      (0, r.jsx)(s.Heading, {
                          variant: 'heading-md/semibold',
                          className: d.endScreenCtaTitle,
                          children: t
                      }),
                  l &&
                      (0, r.jsx)(s.Heading, {
                          variant: 'heading-sm/normal',
                          className: d.endScreenCtaSubtitle,
                          children: n
                      })
              ]
          })
        : null;
}
function p(e) {
    let { label: t, icon: n, onClick: l, className: a } = e,
        [u, c] = i.useState(!1),
        m = () => {
            c(!0);
        },
        v = () => {
            c(!1);
        };
    return (0, r.jsxs)(s.Clickable, {
        className: o()(d.endScreenCtaBtn, d.accentOnHover, a),
        onMouseEnter: m,
        onMouseLeave: v,
        onFocus: m,
        onBlur: v,
        onClick: l,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: 'heading-md/semibold',
                className: d.endScreenCtaBtnTitle,
                children: t
            }),
            (0, r.jsx)(n, {
                size: 'md',
                color: u ? s.tokens.colors.WHITE : '#B5BAC1',
                className: d.endScreenIcon
            })
        ]
    });
}
t.Z = function (e) {
    let { quest: t, ctaBtnLabel: n, title: l, subtitle: o, onCTAClick: s } = e,
        a = i.useMemo(() => (0, u.z)(u.i.VIDEO_PLAYER_THUMBNAIL, t), [t]);
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
                        title: l,
                        subtitle: o,
                        ctaBtnLabel: n,
                        onCTAClick: s
                    })
                ]
            })
        ]
    });
};
