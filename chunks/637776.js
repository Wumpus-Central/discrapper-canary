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
    m = n(981631),
    p = n(388032);
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
              title: p.intl.string(p.t.csrAMJ),
              subtitle: p.intl.string(p.t["m1+IBn"]),
              buttonText: p.intl.string(p.t.fIv16B),
              onButtonClick: () => (0, u.uL)(m.Z5c.CHANNEL(E)),
          })
        : _
          ? (0, r.jsx)(c.Z, {
                title: p.intl.string(p.t["dAfGb+"]),
                buttonText: p.intl.string(p.t["uJWIj/"]),
                onButtonClick: v,
                image: (0, r.jsx)(l.Om, { alt: p.intl.string(p.t["dAfGb+"]) }),
            })
          : null != x
            ? (0, r.jsx)(c.Z, {
                  title: p.intl.string(p.t["PCgG3+"]),
                  subtitle: p.intl.string(p.t.tQpeA3),
                  buttonText: p.intl.string(p.t["uJWIj/"]),
                  onButtonClick: v,
              })
            : (0, r.jsx)(c.Z, {
                  title: p.intl.string(p.t["0c8+5n"]),
                  subtitle: p.intl.string(p.t.ULTCBE),
                  loading: !0,
              });
}
s.ZP.initialize();
