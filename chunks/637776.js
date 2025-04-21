n.d(t, { Z: () => f }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(231239),
    o = n(129293),
    a = n(388905),
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
        { verifySuccess: x, verifyErrors: b, redirectGuildId: E } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, o.Z)(t);
        s.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(E), _(!0);
    };
    return f
        ? (0, r.jsxs)(a.ZP, {
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: p.intl.string(p.t.csrAMD)
                  }),
                  (0, r.jsx)(a.DK, {
                      className: m.subtitle,
                      children: p.intl.string(p.t['m1+IBg'])
                  }),
                  (0, r.jsx)(a.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(g.Z5c.CHANNEL(E)),
                      children: p.intl.string(p.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, r.jsxs)(a.ZP, {
                children: [
                    (0, r.jsx)(a.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, r.jsx)(a.Dx, {
                        className: m.title,
                        children: p.intl.string(p.t.dAfGb2)
                    }),
                    (0, r.jsx)(a.zx, {
                        onClick: v,
                        children: p.intl.string(p.t.uJWIj4)
                    })
                ]
            })
          : null != b
            ? (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t.PCgG39)
                      }),
                      (0, r.jsx)(a.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.tQpeAw)
                      }),
                      (0, r.jsx)(a.zx, {
                          onClick: v,
                          children: p.intl.string(p.t.uJWIj4)
                      })
                  ]
              })
            : (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: m.title,
                          children: p.intl.string(p.t['0c8+5u'])
                      }),
                      (0, r.jsx)(a.DK, {
                          className: m.subtitle,
                          children: p.intl.string(p.t.ULTCBA)
                      }),
                      (0, r.jsx)(a.zx, {
                          submitting: !0,
                          color: a.zx.Colors.PRIMARY
                      })
                  ]
              });
}
l.ZP.initialize();
