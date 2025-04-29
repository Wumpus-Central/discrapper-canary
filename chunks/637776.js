n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(231239),
    o = n(129293),
    a = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    p = n(981631),
    g = n(388032),
    f = n(742834);
function m(e) {
    let { location: t } = e,
        [m, _] = i.useState(!1),
        { verifySuccess: x, verifyErrors: E, redirectGuildId: b } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, o.Z)(t);
        s.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(b), _(!0);
    };
    return m
        ? (0, r.jsxs)(a.ZP, {
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: f.title,
                      children: g.intl.string(g.t.csrAMD)
                  }),
                  (0, r.jsx)(a.DK, {
                      className: f.subtitle,
                      children: g.intl.string(g.t['m1+IBg'])
                  }),
                  (0, r.jsx)(a.zx, {
                      className: f.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(b)),
                      children: g.intl.string(g.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, r.jsxs)(a.ZP, {
                children: [
                    (0, r.jsx)(a.Ee, {
                        className: f.image,
                        src: n(73962)
                    }),
                    (0, r.jsx)(a.Dx, {
                        className: f.title,
                        children: g.intl.string(g.t.dAfGb2)
                    }),
                    (0, r.jsx)(a.zx, {
                        onClick: v,
                        children: g.intl.string(g.t.uJWIj4)
                    })
                ]
            })
          : null != E
            ? (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: f.image,
                          src: n(375673)
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: f.title,
                          children: g.intl.string(g.t.PCgG39)
                      }),
                      (0, r.jsx)(a.DK, {
                          className: f.subtitle,
                          children: g.intl.string(g.t.tQpeAw)
                      }),
                      (0, r.jsx)(a.zx, {
                          onClick: v,
                          children: g.intl.string(g.t.uJWIj4)
                      })
                  ]
              })
            : (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: f.image,
                          src: n(892235)
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: f.title,
                          children: g.intl.string(g.t['0c8+5u'])
                      }),
                      (0, r.jsx)(a.DK, {
                          className: f.subtitle,
                          children: g.intl.string(g.t.ULTCBA)
                      }),
                      (0, r.jsx)(a.zx, {
                          submitting: !0,
                          color: a.zx.Colors.PRIMARY
                      })
                  ]
              });
}
l.ZP.initialize();
