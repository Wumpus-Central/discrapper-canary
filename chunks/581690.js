n.d(t, {
    c: function () {
        return C;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(198993),
    l = n(885006),
    c = n(981631),
    s = n(388032),
    d = n(459881);
let u = n(412998),
    f = n(515695),
    h = ''.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split('//')[1]).concat(c.Z5c.ACTIVATE),
    p = ''.concat(location.protocol, '//').concat(h);
function x(e) {
    let { text: t = '' } = e,
        [n, l] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => l(!0)), (e.onerror = () => l(!0));
        }, [f]),
        (0, a.jsx)(a.Fragment, {
            children:
                '' !== t && n
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(i.ZP, {
                                  size: 288,
                                  text: t
                              }),
                              (0, a.jsx)('div', {
                                  className: d.qrcodeOverlay,
                                  children: (0, a.jsx)('img', {
                                      src: f,
                                      alt: ''
                                  })
                              })
                          ]
                      })
                    : (0, a.jsx)('div', {
                          className: d.qrcodeSpinner,
                          children: (0, a.jsx)(o.Spinner, { type: o.Spinner.Type.WANDERING_CUBES })
                      })
        })
    );
}
let C = (e) => {
    var t, n;
    let { code: r } = e,
        { width: i, height: c } = (0, l.Z)();
    if (null == r || 0 === r.length) return null;
    return (0, a.jsxs)('div', {
        className: d.panel,
        style: { zoom: Math.min(i / 1460, c / 1080, 1) },
        children: [
            (0, a.jsx)('div', {
                className: d.panelHeader,
                children: (0, a.jsx)('div', { className: d.logo })
            }),
            (0, a.jsxs)('div', {
                className: d.panelContent,
                children: [
                    (0, a.jsxs)('div', {
                        className: d.qrcodeContent,
                        children: [
                            (0, a.jsx)('div', {
                                className: d.qrcodeCard,
                                children: (0, a.jsx)(x, { text: ((n = r), ''.concat(p, '?user_code=').concat(encodeURIComponent(n))) })
                            }),
                            (0, a.jsxs)('div', {
                                className: d.qrcodeText,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/semibold',
                                        color: 'header-primary',
                                        className: d.qrcodeTextHeading,
                                        children: s.intl.string(s.t.llDCiY)
                                    }),
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/normal',
                                        color: 'header-secondary',
                                        children: s.intl.string(s.t.JfHzXF)
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: d.dividerContent,
                        children: [
                            (0, a.jsx)('div', { className: d.divider }),
                            (0, a.jsx)(o.Heading, {
                                variant: 'heading-lg/semibold',
                                color: 'header-primary',
                                className: d.dividerText,
                                children: s.intl.string(s.t.arEHn5)
                            }),
                            (0, a.jsx)('div', { className: d.divider })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: d.fallbackContent,
                        children: [
                            (0, a.jsxs)('div', {
                                className: d.fallbackContentTextGroup,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/semibold',
                                        color: 'header-primary',
                                        className: d.fallbackContentHeading,
                                        children: s.intl.string(s.t.Eu8rJy)
                                    }),
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/normal',
                                        color: 'header-secondary',
                                        children: s.intl.string(s.t.BkEMJy)
                                    })
                                ]
                            }),
                            (0, a.jsxs)('div', {
                                className: d.fallbackContentAction,
                                children: [
                                    (0, a.jsx)(o.Heading, {
                                        variant: 'heading-xxl/semibold',
                                        color: 'header-primary',
                                        className: d.fallbackContentHeading,
                                        children: h
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: d.fallbackContentTextGroup,
                                        children: [
                                            (0, a.jsx)(o.Heading, {
                                                variant: 'heading-xxl/normal',
                                                color: 'header-secondary',
                                                children: s.intl.string(s.t.RyDxBQ)
                                            }),
                                            (0, a.jsx)(o.Heading, {
                                                variant: 'heading-xxl/bold',
                                                color: 'header-primary',
                                                className: d.fallbackContentCode,
                                                children: null === (t = r.match(/.{1,4}/g)) || void 0 === t ? void 0 : t.join(' ')
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, a.jsx)('img', {
                        className: d.wumpus,
                        src: u,
                        alt: ''
                    })
                ]
            })
        ]
    });
};
