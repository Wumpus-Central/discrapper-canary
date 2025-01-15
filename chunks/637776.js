n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(231239),
    o = n(129293),
    a = n(388905),
    c = n(703656),
    d = n(108427),
    u = n(844800),
    h = n(580497),
    g = n(981631),
    m = n(388032),
    f = n(815458);
function p(e) {
    let { location: t } = e,
        [p, x] = r.useState(!1),
        { verifySuccess: _, verifyErrors: E, redirectGuildId: I } = (0, s.e7)([u.Z], () => u.Z.getState());
    r.useEffect(() => {
        let e = (0, o.Z)(t);
        l.Z.verify(e), (0, d.e)('verify_hub_email');
    }, [t]);
    let N = () => {
        (0, h.Z)(I), x(!0);
    };
    return p
        ? (0, i.jsxs)(a.ZP, {
              children: [
                  (0, i.jsx)(a.Dx, {
                      className: f.title,
                      children: m.intl.string(m.t.csrAMD)
                  }),
                  (0, i.jsx)(a.DK, {
                      className: f.subtitle,
                      children: m.intl.string(m.t['m1+IBg'])
                  }),
                  (0, i.jsx)(a.zx, {
                      className: f.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(I)),
                      children: m.intl.string(m.t.fIv16O)
                  })
              ]
          })
        : _
          ? (0, i.jsxs)(a.ZP, {
                children: [
                    (0, i.jsx)(a.Ee, {
                        className: f.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(a.Dx, {
                        className: f.title,
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, i.jsx)(a.zx, {
                        onClick: N,
                        children: m.intl.string(m.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, i.jsxs)(a.ZP, {
                  children: [
                      (0, i.jsx)(a.Ee, {
                          className: f.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(a.Dx, {
                          className: f.title,
                          children: m.intl.string(m.t.PCgG39)
                      }),
                      (0, i.jsx)(a.DK, {
                          className: f.subtitle,
                          children: m.intl.string(m.t.tQpeAw)
                      }),
                      (0, i.jsx)(a.zx, {
                          onClick: N,
                          children: m.intl.string(m.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(a.ZP, {
                  children: [
                      (0, i.jsx)(a.Ee, {
                          className: f.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(a.Dx, {
                          className: f.title,
                          children: m.intl.string(m.t['0c8+5u'])
                      }),
                      (0, i.jsx)(a.DK, {
                          className: f.subtitle,
                          children: m.intl.string(m.t.ULTCBA)
                      }),
                      (0, i.jsx)(a.zx, {
                          submitting: !0,
                          color: a.zx.Colors.PRIMARY
                      })
                  ]
              });
}
s.ZP.initialize();
