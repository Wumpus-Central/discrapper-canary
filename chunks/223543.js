n.d(t, { Z: () => u }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(893776),
    l = n(129293),
    s = n(388905),
    o = n(108427),
    c = n(388032),
    d = n(483938);
function u(e) {
    let { location: t } = e,
        [u, h] = r.useState('submitting');
    return (r.useEffect(() => {
        (0, o.e)('authorize_payment');
        let e = (0, l.Z)(t);
        if (null == e) {
            h('failed');
            return;
        }
        (async () => {
            try {
                await a.Z.authorizePayment(e), h('succeeded');
            } catch (e) {
                h('failed');
            }
        })();
    }, [t]),
    'failed' === u)
        ? (0, i.jsxs)(s.ZP, {
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      src: n(375673),
                      className: d.marginBottom20
                  }),
                  (0, i.jsx)(s.Dx, {
                      className: d.marginBottom8,
                      children: c.intl.string(c.t.GHRpub)
                  }),
                  (0, i.jsx)(s.DK, {
                      className: d.marginBottom40,
                      children: c.intl.string(c.t['1nO55u'])
                  })
              ]
          })
        : 'succeeded' === u
          ? (0, i.jsxs)(s.ZP, {
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(73962),
                        className: d.marginBottom20
                    }),
                    (0, i.jsx)(s.Dx, {
                        className: d.marginBottom8,
                        children: c.intl.string(c.t['ihHX5+'])
                    }),
                    (0, i.jsx)(s.DK, {
                        className: d.marginBottom40,
                        children: c.intl.string(c.t.pGPCv7)
                    })
                ]
            })
          : (0, i.jsxs)(s.ZP, {
                children: [(0, i.jsx)(s.Hh, {}), (0, i.jsx)(s.Dx, { children: c.intl.string(c.t.T3vC7u) })]
            });
}
