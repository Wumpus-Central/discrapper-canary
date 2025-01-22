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
    f = n(388032),
    m = n(841094);
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
                      className: m.title,
                      children: f.intl.string(f.t.csrAMD)
                  }),
                  (0, i.jsx)(a.DK, {
                      className: m.subtitle,
                      children: f.intl.string(f.t['m1+IBg'])
                  }),
                  (0, i.jsx)(a.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(I)),
                      children: f.intl.string(f.t.fIv16O)
                  })
              ]
          })
        : _
          ? (0, i.jsxs)(a.ZP, {
                children: [
                    (0, i.jsx)(a.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(a.Dx, {
                        className: m.title,
                        children: f.intl.string(f.t.dAfGb2)
                    }),
                    (0, i.jsx)(a.zx, {
                        onClick: N,
                        children: f.intl.string(f.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, i.jsxs)(a.ZP, {
                  children: [
                      (0, i.jsx)(a.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(a.Dx, {
                          className: m.title,
                          children: f.intl.string(f.t.PCgG39)
                      }),
                      (0, i.jsx)(a.DK, {
                          className: m.subtitle,
                          children: f.intl.string(f.t.tQpeAw)
                      }),
                      (0, i.jsx)(a.zx, {
                          onClick: N,
                          children: f.intl.string(f.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(a.ZP, {
                  children: [
                      (0, i.jsx)(a.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(a.Dx, {
                          className: m.title,
                          children: f.intl.string(f.t['0c8+5u'])
                      }),
                      (0, i.jsx)(a.DK, {
                          className: m.subtitle,
                          children: f.intl.string(f.t.ULTCBA)
                      }),
                      (0, i.jsx)(a.zx, {
                          submitting: !0,
                          color: a.zx.Colors.PRIMARY
                      })
                  ]
              });
}
s.ZP.initialize();
