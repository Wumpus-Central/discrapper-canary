n.d(t, { Z: () => m }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    o = n(970683),
    s = n(231239),
    a = n(129293),
    c = n(80206),
    u = n(703656),
    d = n(108427),
    h = n(844800),
    f = n(580497),
    p = n(981631),
    g = n(388032);
function m(e) {
    let { location: t } = e,
        [n, m] = i.useState(!1),
        { verifySuccess: _, verifyErrors: x, redirectGuildId: v } = (0, l.e7)([h.Z], () => h.Z.getState());
    i.useEffect(() => {
        let e = (0, a.Z)(t);
        s.Z.verify(e), (0, d.e)("verify_hub_email");
    }, [t]);
    let E = () => {
        (0, f.Z)(v), m(!0);
    };
    return n
        ? (0, r.jsx)(c.Z, {
              title: g.intl.string(g.t.csrAMD),
              subtitle: g.intl.string(g.t["m1+IBg"]),
              buttonText: g.intl.string(g.t.fIv16O),
              onButtonClick: () => (0, u.uL)(p.Z5c.CHANNEL(v)),
          })
        : _
          ? (0, r.jsx)(c.Z, {
                title: g.intl.string(g.t.dAfGb2),
                buttonText: g.intl.string(g.t.uJWIj4),
                onButtonClick: E,
                image: (0, r.jsx)(o.dQ, { alt: g.intl.string(g.t.dAfGb2) }),
            })
          : null != x
            ? (0, r.jsx)(c.Z, {
                  title: g.intl.string(g.t.PCgG39),
                  subtitle: g.intl.string(g.t.tQpeAw),
                  buttonText: g.intl.string(g.t.uJWIj4),
                  onButtonClick: E,
              })
            : (0, r.jsx)(c.Z, {
                  title: g.intl.string(g.t["0c8+5u"]),
                  subtitle: g.intl.string(g.t.ULTCBA),
                  loading: !0,
              });
}
l.ZP.initialize();
