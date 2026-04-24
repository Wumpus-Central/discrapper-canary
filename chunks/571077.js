n.d(e, { A: () => A });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(34188),
    a = n(192308),
    o = n(658575),
    s = n(123791),
    c = n(841595),
    u = n(993401),
    d = n(985018);
function p(t) {
    let { user: e, onClick: n, ...l } = t;
    return (
        (0, s.C)(e.id),
        (0, i.jsx)(u.FD, {
            action: "PRESS_APP_STOREFRONT",
            icon: r.U,
            text: d.intl.string(d.t.V7j5aZ),
            onClick: n,
            variant: "primary",
            ...l,
        })
    );
}
function A(t) {
    let { user: e, guildId: r, ...s } = t,
        u = (0, l.bG)([c.A], () => c.A.getUserProfile(e.id)?.application),
        d = (0, o.G)(u?.id ?? "");
    return null != u && d
        ? (0, i.jsx)(p, {
              user: e,
              guildId: r,
              onClick: () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("32292"),
                          n.e("28367"),
                          n.e("45174"),
                          n.e("85519"),
                          n.e("87963"),
                          n.e("37266"),
                          n.e("55057"),
                          n.e("76021"),
                          n.e("63229"),
                          n.e("31988"),
                          n.e("55343"),
                          n.e("40142"),
                          n.e("48900"),
                          n.e("10567"),
                          n.e("43436"),
                          n.e("22802"),
                          n.e("54865"),
                          n.e("85384"),
                          n.e("42984"),
                      ]).then(n.bind(n, 719847));
                      return (e) => (0, i.jsx)(t, { appId: u.id, guildId: r, ...e });
                  });
              },
              ...s,
          })
        : null;
}
