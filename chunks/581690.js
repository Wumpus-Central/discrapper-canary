n.d(t, { c: () => _ }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(481060),
    i = n(198993),
    l = n(885006),
    s = n(981631),
    c = n(388032),
    d = n(48769);
let u = n(412998),
    f = n(515695),
    h = ''.concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split('//')[1]).concat(s.Z5c.ACTIVATE),
    x = ''.concat(location.protocol, '//').concat(h);
function p(e) {
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
                          children: (0, a.jsx)(o.$jN, { type: o.$jN.Type.WANDERING_CUBES })
                      })
        })
    );
}
let _ = (e) => {
    var t;
    let { code: n } = e,
        { width: r, height: i } = (0, l.Z)();
    return null == n || 0 === n.length
        ? null
        : (0, a.jsxs)('div', {
              className: d.panel,
              style: { zoom: Math.min(r / 1460, i / 1080, 1) },
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
                                      children: (0, a.jsx)(p, { text: ''.concat(x, '?user_code=').concat(encodeURIComponent(n)) })
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: d.qrcodeText,
                                      children: [
                                          (0, a.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.qrcodeTextHeading,
                                              children: c.intl.string(c.t.llDCiY)
                                          }),
                                          (0, a.jsx)(o.X6q, {
                                              variant: 'heading-xxl/normal',
                                              color: 'header-secondary',
                                              children: c.intl.string(c.t.JfHzXF)
                                          })
                                      ]
                                  })
                              ]
                          }),
                          (0, a.jsxs)('div', {
                              className: d.dividerContent,
                              children: [
                                  (0, a.jsx)('div', { className: d.divider }),
                                  (0, a.jsx)(o.X6q, {
                                      variant: 'heading-lg/semibold',
                                      color: 'header-primary',
                                      className: d.dividerText,
                                      children: c.intl.string(c.t.arEHn5)
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
                                          (0, a.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.fallbackContentHeading,
                                              children: c.intl.string(c.t.Eu8rJy)
                                          }),
                                          (0, a.jsx)(o.X6q, {
                                              variant: 'heading-xxl/normal',
                                              color: 'header-secondary',
                                              children: c.intl.string(c.t.BkEMJy)
                                          })
                                      ]
                                  }),
                                  (0, a.jsxs)('div', {
                                      className: d.fallbackContentAction,
                                      children: [
                                          (0, a.jsx)(o.X6q, {
                                              variant: 'heading-xxl/semibold',
                                              color: 'header-primary',
                                              className: d.fallbackContentHeading,
                                              children: h
                                          }),
                                          (0, a.jsxs)('div', {
                                              className: d.fallbackContentTextGroup,
                                              children: [
                                                  (0, a.jsx)(o.X6q, {
                                                      variant: 'heading-xxl/normal',
                                                      color: 'header-secondary',
                                                      children: c.intl.string(c.t.RyDxBQ)
                                                  }),
                                                  (0, a.jsx)(o.X6q, {
                                                      variant: 'heading-xxl/bold',
                                                      color: 'header-primary',
                                                      className: d.fallbackContentCode,
                                                      children: null === (t = n.match(/.{1,4}/g)) || void 0 === t ? void 0 : t.join(' ')
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
