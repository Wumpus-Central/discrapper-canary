n.d(t, { Z: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(893776),
    a = n(129293),
    l = n(388905),
    s = n(108427),
    c = n(388032),
    u = n(20493);
function d(e) {
    let { location: t } = e,
        [d, p] = i.useState('submitting');
    return (i.useEffect(() => {
        (0, s.e)('authorize_payment');
        let e = (0, a.Z)(t);
        if (null == e) return void p('failed');
        (async () => {
            try {
                await o.Z.authorizePayment(e), p('succeeded');
            } catch (e) {
                p('failed');
            }
        })();
    }, [t]),
    'failed' === d)
        ? (0, r.jsxs)(l.ZP, {
              children: [
                  (0, r.jsx)('img', {
                      alt: '',
                      src: n(375673),
                      className: u.marginBottom20
                  }),
                  (0, r.jsx)(l.Dx, {
                      className: u.marginBottom8,
                      children: c.NW.string(c.t.GHRpub)
                  }),
                  (0, r.jsx)(l.DK, {
                      className: u.marginBottom40,
                      children: c.NW.string(c.t['1nO55u'])
                  })
              ]
          })
        : 'succeeded' === d
          ? (0, r.jsxs)(l.ZP, {
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        src: n(73962),
                        className: u.marginBottom20
                    }),
                    (0, r.jsx)(l.Dx, {
                        className: u.marginBottom8,
                        children: c.NW.string(c.t['ihHX5+'])
                    }),
                    (0, r.jsx)(l.DK, {
                        className: u.marginBottom40,
                        children: c.NW.string(c.t.pGPCv7)
                    })
                ]
            })
          : (0, r.jsxs)(l.ZP, {
                children: [(0, r.jsx)(l.Hh, {}), (0, r.jsx)(l.Dx, { children: c.NW.string(c.t.T3vC7u) })]
            });
}
