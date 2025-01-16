var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(893776),
    o = n(129293),
    a = n(388905),
    c = n(108427),
    d = n(314897),
    u = n(388032),
    h = n(232186);
t.Z = (e) => {
    let { location: t } = e,
        { verifyFailed: g, verifySucceeded: m } = (0, s.cj)([d.default], () => ({
            verifyFailed: d.default.didVerifyFail(),
            verifySucceeded: d.default.didVerifySucceed()
        }));
    return (r.useEffect(() => {
        let e = (0, o.Z)(t);
        null != e && l.Z.authorizePayment(e), (0, c.e)('authorize_payment');
    }, [t]),
    g)
        ? (0, i.jsxs)(a.ZP, {
              children: [
                  (0, i.jsx)('img', {
                      alt: '',
                      src: n(375673),
                      className: h.marginBottom20
                  }),
                  (0, i.jsx)(a.Dx, {
                      className: h.marginBottom8,
                      children: u.intl.string(u.t.GHRpub)
                  }),
                  (0, i.jsx)(a.DK, {
                      className: h.marginBottom40,
                      children: u.intl.string(u.t['1nO55u'])
                  })
              ]
          })
        : m
          ? (0, i.jsxs)(a.ZP, {
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        src: n(73962),
                        className: h.marginBottom20
                    }),
                    (0, i.jsx)(a.Dx, {
                        className: h.marginBottom8,
                        children: u.intl.string(u.t['ihHX5+'])
                    }),
                    (0, i.jsx)(a.DK, {
                        className: h.marginBottom40,
                        children: u.intl.string(u.t.pGPCv7)
                    })
                ]
            })
          : (0, i.jsxs)(a.ZP, {
                children: [(0, i.jsx)(a.Hh, {}), (0, i.jsx)(a.Dx, { children: u.intl.string(u.t.T3vC7u) })]
            });
};
