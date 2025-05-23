n.d(t, { Z: () => d }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(893776),
    a = n(129293),
    o = n(388905),
    s = n(108427),
    c = n(388032),
    u = n(971005);
function d(e) {
    let { location: t } = e,
        [d, g] = i.useState('submitting');
    return (i.useEffect(() => {
        (0, s.e)('authorize_payment');
        let e = (0, a.Z)(t);
        if (null == e) return void g('failed');
        (async () => {
            try {
                await l.Z.authorizePayment(e), g('succeeded');
            } catch (e) {
                g('failed');
            }
        })();
    }, [t]),
    'failed' === d)
        ? (0, r.jsxs)(o.ZP, {
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      src: n(375673),
                      className: u.marginBottom20
                  }),
                  (0, r.jsx)(o.Dx, {
                      className: u.marginBottom8,
                      children: c.intl.string(c.t.GHRpub)
                  }),
                  (0, r.jsx)(o.DK, {
                      className: u.marginBottom40,
                      children: c.intl.string(c.t['1nO55u'])
                  })
              ]
          })
        : 'succeeded' === d
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(73962),
                        className: u.marginBottom20
                    }),
                    (0, r.jsx)(o.Dx, {
                        className: u.marginBottom8,
                        children: c.intl.string(c.t['ihHX5+'])
                    }),
                    (0, r.jsx)(o.DK, {
                        className: u.marginBottom40,
                        children: c.intl.string(c.t.pGPCv7)
                    })
                ]
            })
          : (0, r.jsxs)(o.ZP, {
                children: [(0, r.jsx)(o.Hh, {}), (0, r.jsx)(o.Dx, { children: c.intl.string(c.t.T3vC7u) })]
            });
}
