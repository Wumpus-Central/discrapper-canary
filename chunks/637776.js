(n.d(t, { Z: () => f }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(231239),
    a = n(129293),
    o = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    p = n(981631),
    g = n(388032),
    m = n(742834);
function f(e) {
    let { location: t } = e,
        [f, _] = i.useState(!1),
        { verifySuccess: x, verifyErrors: b, redirectGuildId: E } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, a.Z)(t);
        (s.Z.verify(e), (0, u.e)('verify_hub_email'));
    }, [t]);
    let v = () => {
        ((0, h.Z)(E), _(!0));
    };
    return f
        ? (0, r.jsxs)(o.ZP, {
              children: [
                  (0, r.jsx)(o.Dx, {
                      className: m.title,
                      children: g.intl.string(g.t.csrAMD)
                  }),
                  (0, r.jsx)(o.DK, {
                      className: m.subtitle,
                      children: g.intl.string(g.t['m1+IBg'])
                  }),
                  (0, r.jsx)(o.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(E)),
                      children: g.intl.string(g.t.fIv16O)
                  })
              ]
          })
        : x
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(o.Ee, {
                        className: m.image,
                        src: n(73962)
                    }),
                    (0, r.jsx)(o.Dx, {
                        className: m.title,
                        children: g.intl.string(g.t.dAfGb2)
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: v,
                        children: g.intl.string(g.t.uJWIj4)
                    })
                ]
            })
          : null != b
            ? (0, r.jsxs)(o.ZP, {
                  children: [
                      (0, r.jsx)(o.Ee, {
                          className: m.image,
                          src: n(375673)
                      }),
                      (0, r.jsx)(o.Dx, {
                          className: m.title,
                          children: g.intl.string(g.t.PCgG39)
                      }),
                      (0, r.jsx)(o.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.tQpeAw)
                      }),
                      (0, r.jsx)(o.zx, {
                          onClick: v,
                          children: g.intl.string(g.t.uJWIj4)
                      })
                  ]
              })
            : (0, r.jsxs)(o.ZP, {
                  children: [
                      (0, r.jsx)(o.Ee, {
                          className: m.image,
                          src: n(892235)
                      }),
                      (0, r.jsx)(o.Dx, {
                          className: m.title,
                          children: g.intl.string(g.t['0c8+5u'])
                      }),
                      (0, r.jsx)(o.DK, {
                          className: m.subtitle,
                          children: g.intl.string(g.t.ULTCBA)
                      }),
                      (0, r.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY
                      })
                  ]
              });
}
l.ZP.initialize();
