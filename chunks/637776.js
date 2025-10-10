n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    s = n(970683),
    a = n(231239),
    o = n(129293),
    c = n(80206),
    u = n(703656),
    d = n(108427),
    h = n(844800),
    g = n(580497),
    m = n(981631),
    p = n(388032);
function f(e) {
    let { location: t } = e,
        [n, f] = i.useState(!1),
        { verifySuccess: _, verifyErrors: x, redirectGuildId: E } = (0, l.e7)([h.Z], () => h.Z.getState());
    i.useEffect(() => {
        let e = (0, o.Z)(t);
        a.Z.verify(e), (0, d.e)("verify_hub_email");
    }, [t]);
    let v = () => {
        (0, g.Z)(E), f(!0);
    };
    return n
        ? (0, r.jsx)(c.Z, {
              title: p.intl.string(p.t.csrAMD),
              subtitle: p.intl.string(p.t["m1+IBg"]),
              buttonText: p.intl.string(p.t.fIv16O),
              onButtonClick: () => (0, u.uL)(m.Z5c.CHANNEL(E)),
          })
        : _
          ? (0, r.jsx)(c.Z, {
                title: p.intl.string(p.t.dAfGb2),
                buttonText: p.intl.string(p.t.uJWIj4),
                onButtonClick: v,
                image: (0, r.jsx)(s.Om, { alt: p.intl.string(p.t.dAfGb2) }),
            })
          : null != x
            ? (0, r.jsx)(c.Z, {
                  title: p.intl.string(p.t.PCgG39),
                  subtitle: p.intl.string(p.t.tQpeAw),
                  buttonText: p.intl.string(p.t.uJWIj4),
                  onButtonClick: v,
              })
            : (0, r.jsx)(c.Z, {
                  title: p.intl.string(p.t["0c8+5u"]),
                  subtitle: p.intl.string(p.t.ULTCBA),
                  loading: !0,
              });
}
l.ZP.initialize();
