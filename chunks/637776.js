n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(231239),
    o = n(129293),
    s = n(388905),
    c = n(703656),
    d = n(108427),
    u = n(844800),
    h = n(580497),
    _ = n(981631),
    g = n(388032),
    m = n(195496);
function p(e) {
    let { location: t } = e,
        [p, f] = r.useState(!1),
        { verifySuccess: E, verifyErrors: x, redirectGuildId: I } = (0, l.e7)([u.Z], () => u.Z.getState());
    r.useEffect(() => {
        let e = (0, o.Z)(t);
        a.Z.verify(e), (0, d.e)('verify_hub_email');
    }, [t]);
    let C = () => {
        (0, h.Z)(I), f(!0);
    };
    return p
        ? (0, i.jsxs)(s.ZP, {
              children: [
                  (0, i.jsx)(s.Dx, {
                      className: m.title,
                      children: g.intl.string(g.t.csrAMD)
                  }),
                  (0, i.jsx)(s.DK, {
                      className: m.subtitle,
                      children: g.intl.string(g.t['m1+IBg'])
                  }),
                  (0, i.jsx)(s.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(_.Z5c.CHANNEL(I)),
                      children: g.intl.string(g.t.fIv16O)
                  })
              ]
          })
        : E
          ? (0, i.jsxs)(s.ZP, {
                children: [
                    (0, i.jsx)(s.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(s.Dx, {
                        className: m.title,
                        children: g.intl.string(g.t.dAfGb2)
                    }),
                    (0, i.jsx)(s.zx, {
                        onClick: C,
                        children: g.intl.string(g.t.uJWIj4)
                    })
                ]
            })
          : null != x
            ? (0, i.jsxs)(s.ZP, {
                  children: [
                      (0, i.jsx)(s.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(s.Dx, {
                          className: m.title,
                          children: g.intl.string(g.t.PCgG39)
                      }),
                      (0, i.jsx)(s.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.tQpeAw)
                      }),
                      (0, i.jsx)(s.zx, {
                          onClick: C,
                          children: g.intl.string(g.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(s.ZP, {
                  children: [
                      (0, i.jsx)(s.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(s.Dx, {
                          className: m.title,
                          children: g.intl.string(g.t['0c8+5u'])
                      }),
                      (0, i.jsx)(s.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.ULTCBA)
                      }),
                      (0, i.jsx)(s.zx, {
                          submitting: !0,
                          color: s.zx.Colors.PRIMARY
                      })
                  ]
              });
}
l.ZP.initialize();
