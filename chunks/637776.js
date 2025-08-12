n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(231239),
    s = n(129293),
    a = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    p = n(981631),
    f = n(388032),
    m = n(306293);
function g(e) {
    let { location: t } = e,
        [g, _] = i.useState(!1),
        { verifySuccess: x, verifyErrors: b, redirectGuildId: E } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, s.Z)(t);
        o.Z.verify(e), (0, u.e)("verify_hub_email");
    }, [t]);
    let v = () => {
        (0, h.Z)(E), _(!0);
    };
    return g
        ? (0, r.jsxs)(a.ZP, {
              children: [
                  (0, r.jsx)(a.Dx, {
                      className: m.title,
                      children: f.intl.string(f.t.csrAMD),
                  }),
                  (0, r.jsx)(a.DK, {
                      className: m.subtitle,
                      children: f.intl.string(f.t["m1+IBg"]),
                  }),
                  (0, r.jsx)(a.zx, {
                      className: m.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(E)),
                      children: f.intl.string(f.t.fIv16O),
                  }),
              ],
          })
        : x
          ? (0, r.jsxs)(a.ZP, {
                children: [
                    (0, r.jsx)(a.Ee, {
                        className: m.image,
                        src: n(73962),
                    }),
                    (0, r.jsx)(a.Dx, {
                        className: m.title,
                        children: f.intl.string(f.t.dAfGb2),
                    }),
                    (0, r.jsx)(a.zx, {
                        onClick: v,
                        children: f.intl.string(f.t.uJWIj4),
                    }),
                ],
            })
          : null != b
            ? (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: m.image,
                          src: n(375673),
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: m.title,
                          children: f.intl.string(f.t.PCgG39),
                      }),
                      (0, r.jsx)(a.DK, {
                          className: m.subtitle,
                          children: f.intl.string(f.t.tQpeAw),
                      }),
                      (0, r.jsx)(a.zx, {
                          onClick: v,
                          children: f.intl.string(f.t.uJWIj4),
                      }),
                  ],
              })
            : (0, r.jsxs)(a.ZP, {
                  children: [
                      (0, r.jsx)(a.Ee, {
                          className: m.image,
                          src: n(892235),
                      }),
                      (0, r.jsx)(a.Dx, {
                          className: m.title,
                          children: f.intl.string(f.t["0c8+5u"]),
                      }),
                      (0, r.jsx)(a.DK, {
                          className: m.subtitle,
                          children: f.intl.string(f.t.ULTCBA),
                      }),
                      (0, r.jsx)(a.zx, {
                          submitting: !0,
                          color: a.zx.Colors.PRIMARY,
                      }),
                  ],
              });
}
l.ZP.initialize();
