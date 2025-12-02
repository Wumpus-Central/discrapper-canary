n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
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
              title: m.intl.string(m.t.csrAMJ),
              subtitle: m.intl.string(m.t["m1+IBn"]),
              buttonText: m.intl.string(m.t.fIv16B),
              onButtonClick: () => (0, u.uL)(p.Z5c.CHANNEL(E)),
          })
        : _
          ? (0, r.jsx)(c.Z, {
                title: m.intl.string(m.t["dAfGb+"]),
                buttonText: m.intl.string(m.t["uJWIj/"]),
                onButtonClick: v,
                image: (0, r.jsx)(l.dQ, { alt: m.intl.string(m.t["dAfGb+"]) }),
            })
          : null != x
            ? (0, r.jsx)(c.Z, {
                  title: m.intl.string(m.t["PCgG3+"]),
                  subtitle: m.intl.string(m.t.tQpeA3),
                  buttonText: m.intl.string(m.t["uJWIj/"]),
                  onButtonClick: v,
              })
            : (0, r.jsx)(c.Z, {
                  title: m.intl.string(m.t["0c8+5n"]),
                  subtitle: m.intl.string(m.t.ULTCBE),
                  loading: !0,
              });
}
s.ZP.initialize();
