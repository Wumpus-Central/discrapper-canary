n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(231239),
    a = n(129293),
    s = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    g = n(981631),
    p = n(388032),
    m = n(742834);
function f(e) {
    let { location: t } = e,
        [f, _] = i.useState(!1),
        { verifySuccess: x, verifyErrors: E, redirectGuildId: b } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, a.Z)(t);
        o.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(b), _(!0);
    };
    return f
        ? (0, r.jsxs)(s.ZP, {
              children: [
                  (0, r.jsx)(s.Dx, {
                      className: m.title,
                      children: p.intl.string(p.t.csrAMD)
                  }),
                  (0, r.jsx)(s.DK, {
                      className: m.subtitle,
                      children: p.intl.string(p.t['m1+IBg'])
                  }),
                  (0, r.jsx)(s.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(b)),
                      children: p.intl.string(p.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, r.jsxs)(s.ZP, {
                children: [
                    (0, r.jsx)(s.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, r.jsx)(s.Dx, {
                        className: m.title,
                        children: p.intl.string(p.t.dAfGb2)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: v,
                        children: p.intl.string(p.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, r.jsxs)(s.ZP, {
                  children: [
                      (0, r.jsx)(s.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, r.jsx)(s.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t.PCgG39)
                      }),
                      (0, r.jsx)(s.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.tQpeAw)
                      }),
                      (0, r.jsx)(s.zx, {
                          onClick: v,
                          children: p.intl.string(p.t.uJWIj4)
                      })
                  ]
              })
            : (0, r.jsxs)(s.ZP, {
                  children: [
                      (0, r.jsx)(s.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, r.jsx)(s.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t['0c8+5u'])
                      }),
                      (0, r.jsx)(s.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.ULTCBA)
                      }),
                      (0, r.jsx)(s.zx, {
                          submitting: !0,
                          color: s.zx.Colors.PRIMARY
                      })
                  ]
              });
}
l.ZP.initialize();
