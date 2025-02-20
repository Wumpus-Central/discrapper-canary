n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(231239),
    l = n(129293),
    s = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    p = n(981631),
    _ = n(388032),
    g = n(809256);
function f(e) {
    let { location: t } = e,
        [f, m] = i.useState(!1),
        { verifySuccess: b, verifyErrors: N, redirectGuildId: x } = (0, o.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, l.Z)(t);
        a.Z.verify(e), (0, u.e)('verify_hub_email');
    }, [t]);
    let v = () => {
        (0, h.Z)(x), m(!0);
    };
    return f
        ? (0, r.jsxs)(s.ZP, {
              children: [
                  (0, r.jsx)(s.Dx, {
                      className: g.title,
                      children: _.NW.string(_.t.csrAMD)
                  }),
                  (0, r.jsx)(s.DK, {
                      className: g.subtitle,
                      children: _.NW.string(_.t['m1+IBg'])
                  }),
                  (0, r.jsx)(s.zx, {
                      className: g.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(x)),
                      children: _.NW.string(_.t.fIv16O)
                  })
              ]
          })
        : b
          ? (0, r.jsxs)(s.ZP, {
                children: [
                    (0, r.jsx)(s.Ee, {
                        className: g.image,
                        src: n(73962)
                    }),
                    (0, r.jsx)(s.Dx, {
                        className: g.title,
                        children: _.NW.string(_.t.dAfGb2)
                    }),
                    (0, r.jsx)(s.zx, {
                        onClick: v,
                        children: _.NW.string(_.t.uJWIj4)
                    })
                ]
            })
          : null != N
            ? (0, r.jsxs)(s.ZP, {
                  children: [
                      (0, r.jsx)(s.Ee, {
                          className: g.image,
                          src: n(375673)
                      }),
                      (0, r.jsx)(s.Dx, {
                          className: g.title,
                          children: _.NW.string(_.t.PCgG39)
                      }),
                      (0, r.jsx)(s.DK, {
                          className: g.subtitle,
                          children: _.NW.string(_.t.tQpeAw)
                      }),
                      (0, r.jsx)(s.zx, {
                          onClick: v,
                          children: _.NW.string(_.t.uJWIj4)
                      })
                  ]
              })
            : (0, r.jsxs)(s.ZP, {
                  children: [
                      (0, r.jsx)(s.Ee, {
                          className: g.image,
                          src: n(892235)
                      }),
                      (0, r.jsx)(s.Dx, {
                          className: g.title,
                          children: _.NW.string(_.t['0c8+5u'])
                      }),
                      (0, r.jsx)(s.DK, {
                          className: g.subtitle,
                          children: _.NW.string(_.t.ULTCBA)
                      }),
                      (0, r.jsx)(s.zx, {
                          submitting: !0,
                          color: s.zx.Colors.PRIMARY
                      })
                  ]
              });
}
o.ZP.initialize();
