n.d(t, { Z: () => f }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(442837),
    l = n(970683),
    a = n(231239),
    o = n(129293),
    c = n(80206),
    u = n(703656),
    d = n(108427),
    h = n(844800),
    g = n(580497),
    p = n(981631),
    m = n(388032);
function f(e) {
    let { location: t } = e,
        [n, f] = i.useState(!1),
        { verifySuccess: _, verifyErrors: x, redirectGuildId: E } = (0, s.e7)([h.Z], () => h.Z.getState());
    i.useEffect(() => {
        let e = (0, o.Z)(t);
        a.Z.verify(e), (0, d.e)("verify_hub_email");
    }, [t]);
    let v = () => {
        (0, g.Z)(E), f(!0);
    };
    return n
        ? (0, r.jsx)(c.Z, {
              title: m.intl.string(m.t.csrAMD),
              subtitle: m.intl.string(m.t["m1+IBg"]),
              buttonText: m.intl.string(m.t.fIv16O),
              onButtonClick: () => (0, u.uL)(p.Z5c.CHANNEL(E)),
          })
        : _
          ? (0, r.jsx)(c.Z, {
                title: m.intl.string(m.t.dAfGb2),
                buttonText: m.intl.string(m.t.uJWIj4),
                onButtonClick: v,
                image: (0, r.jsx)(l.Om, { alt: m.intl.string(m.t.dAfGb2) }),
            })
          : null != x
            ? (0, r.jsx)(c.Z, {
                  title: m.intl.string(m.t.PCgG39),
                  subtitle: m.intl.string(m.t.tQpeAw),
                  buttonText: m.intl.string(m.t.uJWIj4),
                  onButtonClick: v,
              })
            : (0, r.jsx)(c.Z, {
                  title: m.intl.string(m.t["0c8+5u"]),
                  subtitle: m.intl.string(m.t.ULTCBA),
                  loading: !0,
              });
}
s.ZP.initialize();
