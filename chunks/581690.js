n.d(t, { c: () => m }), n(35282), n(388685);
var r = n(200651),
    a = n(192379),
    o = n(481060),
    l = n(198993),
    i = n(885006),
    s = n(981631),
    c = n(388032),
    d = n(679895);
let u = n(412998),
    f = n(515695),
    p = ''.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split('//')[1]).concat(s.Z5c.ACTIVATE),
    h = ''.concat(location.protocol, '//').concat(p);
function x(e) {
    let { text: t = '' } = e,
        [n, i] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = new Image();
            (e.src = f), (e.onload = () => i(!0)), (e.onerror = () => i(!0));
        }, [f]),
        '' !== t && n
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(l.ZP, {
                          size: 288,
                          text: t
                      }),
                      (0, r.jsx)('div', {
                          className: d.qrcodeOverlay,
                          children: (0, r.jsx)('img', {
                              src: f,
                              alt: ''
                          })
                      })
                  ]
              })
            : (0, r.jsx)('div', {
                  className: d.qrcodeSpinner,
                  children: (0, r.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES })
              })
    );
}
let m = (e) => {
    var t;
    let { code: n } = e,
        { width: a, height: l } = (0, i.Z)();
    return null == n || 0 === n.length
        ? null
        : (0, r.jsxs)('div', {
              className: d.panel,
              style: { zoom: Math.min(a / 1460, l / 1080, 1) },
              children: [
                  (0, r.jsx)('div', {
                      className: d.panelHeader,
                      children: (0, r.jsx)('div', { className: d.logo })
                  }),
                  (0, r.jsxs)('div', {
                      className: d.panelContent,
                      children: [
                          (0, r.jsxs)('div', {
                              className: d.qrcodeContent,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: d.qrcodeCard,
                                      children: (0, r.jsx)(x, { text: ''.concat(h, '?user_code=').concat(encodeURIComponent(n)) })
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: d.qrcodeText,
                                      children: [
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.qrcodeTextHeading,
                                              children: c.intl.string(c.t.llDCiY)
                                          }),
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-xxl/normal',
                                              color: 'header-secondary',
                                              children: c.intl.string(c.t.JfHzXF)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: d.dividerContent,
                              children: [
                                  (0, r.jsx)('div', { className: d.divider }),
                                  (0, r.jsx)(o.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: d.dividerText,
                                      children: c.intl.string(c.t.arEHn5)
                                  }),
                                  (0, r.jsx)('div', { className: d.divider })
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: d.fallbackContent,
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: d.fallbackContentTextGroup,
                                      children: [
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.fallbackContentHeading,
                                              children: c.intl.string(c.t.Eu8rJy)
                                          }),
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-xxl/normal',
                                              color: 'header-secondary',
                                              children: c.intl.string(c.t.BkEMJy)
                                          })
                                      ]
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: d.fallbackContentAction,
                                      children: [
                                          (0, r.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.fallbackContentHeading,
                                              children: p
                                          }),
                                          (0, r.jsxs)('div', {
                                              className: d.fallbackContentTextGroup,
                                              children: [
                                                  (0, r.jsx)(o.X6q, {
                                                      variant: 'heading-xxl/normal',
                                                      color: 'header-secondary',
                                                      children: c.intl.string(c.t.RyDxBQ)
                                                  }),
                                                  (0, r.jsx)(o.X6q, {
                                                      variant: 'heading-xxl/bold',
                                                      color: 'header-primary',
                                                      className: d.fallbackContentCode,
                                                      children: null == (t = n.match(/.{1,4}/g)) ? void 0 : t.join(' ')
                                                  })
                                              ]
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, r.jsx)('img', {
                              className: d.wumpus,
                              src: u,
                              alt: ''
                          })
                      ]
                  })
              ]
          });
};
