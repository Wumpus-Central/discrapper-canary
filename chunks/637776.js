n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(231239),
    s = n(129293),
    o = n(388905),
    c = n(703656),
    d = n(108427),
    u = n(844800),
    h = n(580497),
    _ = n(981631),
    m = n(388032),
    g = n(757377);
function p(e) {
    let { location: t } = e,
        [p, f] = r.useState(!1),
        { verifySuccess: x, verifyErrors: E, redirectGuildId: I } = (0, a.e7)([u.Z], () => u.Z.getState());
    r.useEffect(() => {
        let e = (0, s.Z)(t);
        l.Z.verify(e), (0, d.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(I), f(!0);
    };
    return p
        ? (0, i.jsxs)(o.ZP, {
              children: [
                  (0, i.jsx)(o.Dx, {
                      className: g.title,
                      children: m.intl.string(m.t.csrAMD)
                  }),
                  (0, i.jsx)(o.DK, {
                      className: g.subtitle,
                      children: m.intl.string(m.t['m1+IBg'])
                  }),
                  (0, i.jsx)(o.zx, {
                      className: g.spacedButton,
                      onClick: () => (0, c.uL)(_.Z5c.CHANNEL(I)),
                      children: m.intl.string(m.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, i.jsxs)(o.ZP, {
                children: [
                    (0, i.jsx)(o.Ee, {
                        className: g.image,
                        src: n(73962)
                    }),
                    (0, i.jsx)(o.Dx, {
                        className: g.title,
                        children: m.intl.string(m.t.dAfGb2)
                    }),
                    (0, i.jsx)(o.zx, {
                        onClick: v,
                        children: m.intl.string(m.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: g.image,
                          src: n(375673)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: g.title,
                          children: m.intl.string(m.t.PCgG39)
                      }),
                      (0, i.jsx)(o.DK, {
                          className: g.subtitle,
                          children: m.intl.string(m.t.tQpeAw)
                      }),
                      (0, i.jsx)(o.zx, {
                          onClick: v,
                          children: m.intl.string(m.t.uJWIj4)
                      })
                  ]
              })
            : (0, i.jsxs)(o.ZP, {
                  children: [
                      (0, i.jsx)(o.Ee, {
                          className: g.image,
                          src: n(892235)
                      }),
                      (0, i.jsx)(o.Dx, {
                          className: g.title,
                          children: m.intl.string(m.t['0c8+5u'])
                      }),
                      (0, i.jsx)(o.DK, {
                          className: g.subtitle,
                          children: m.intl.string(m.t.ULTCBA)
                      }),
                      (0, i.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY
                      })
                  ]
              });
}
a.ZP.initialize();
