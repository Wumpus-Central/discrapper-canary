n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(231239),
    s = n(129293),
    o = n(388905),
    c = n(703656),
    u = n(108427),
    d = n(844800),
    h = n(580497),
    p = n(981631),
    m = n(388032),
    g = n(894892);
function f(e) {
    let { location: t } = e,
        [f, _] = i.useState(!1),
        { verifySuccess: x, verifyErrors: b, redirectGuildId: v } = (0, l.e7)([d.Z], () => d.Z.getState());
    i.useEffect(() => {
        let e = (0, s.Z)(t);
        a.Z.verify(e), (0, u.e)("verify_hub_email");
    }, [t]);
    let E = () => {
        (0, h.Z)(v), _(!0);
    };
    return f
        ? (0, r.jsxs)(o.ZP, {
              children: [
                  (0, r.jsx)(o.Dx, {
                      className: g.title,
                      children: m.intl.string(m.t.csrAMD),
                  }),
                  (0, r.jsx)(o.DK, {
                      className: g.subtitle,
                      children: m.intl.string(m.t["m1+IBg"]),
                  }),
                  (0, r.jsx)(o.zx, {
                      className: g.spacedButton,
                      onClick: () => (0, c.uL)(p.Z5c.CHANNEL(v)),
                      children: m.intl.string(m.t.fIv16O),
                  }),
              ],
          })
        : x
          ? (0, r.jsxs)(o.ZP, {
                children: [
                    (0, r.jsx)(o.Ee, {
                        className: g.image,
                        src: n(73962),
                    }),
                    (0, r.jsx)(o.Dx, {
                        className: g.title,
                        children: m.intl.string(m.t.dAfGb2),
                    }),
                    (0, r.jsx)(o.zx, {
                        onClick: E,
                        children: m.intl.string(m.t.uJWIj4),
                    }),
                ],
            })
          : null != b
            ? (0, r.jsxs)(o.ZP, {
                  children: [
                      (0, r.jsx)(o.Ee, {
                          className: g.image,
                          src: n(375673),
                      }),
                      (0, r.jsx)(o.Dx, {
                          className: g.title,
                          children: m.intl.string(m.t.PCgG39),
                      }),
                      (0, r.jsx)(o.DK, {
                          className: g.subtitle,
                          children: m.intl.string(m.t.tQpeAw),
                      }),
                      (0, r.jsx)(o.zx, {
                          onClick: E,
                          children: m.intl.string(m.t.uJWIj4),
                      }),
                  ],
              })
            : (0, r.jsxs)(o.ZP, {
                  children: [
                      (0, r.jsx)(o.Ee, {
                          className: g.image,
                          src: n(892235),
                      }),
                      (0, r.jsx)(o.Dx, {
                          className: g.title,
                          children: m.intl.string(m.t["0c8+5u"]),
                      }),
                      (0, r.jsx)(o.DK, {
                          className: g.subtitle,
                          children: m.intl.string(m.t.ULTCBA),
                      }),
                      (0, r.jsx)(o.zx, {
                          submitting: !0,
                          color: o.zx.Colors.PRIMARY,
                      }),
                  ],
              });
}
l.ZP.initialize();
