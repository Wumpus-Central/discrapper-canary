n.d(e, { A: () => _ });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(34188),
    o = n(192308),
    a = n(658575),
    s = n(123791),
    c = n(622543),
    d = n(993401),
    u = n(985018);
function p(t) {
    let { user: e, onClick: n, ...l } = t;
    return (
        (0, s.C)(e.id),
        (0, i.jsx)(d.FD, {
            action: "PRESS_APP_STOREFRONT",
            icon: r.U,
            text: u.intl.string(u.t.V7j5aZ),
            onClick: n,
            variant: "primary",
            ...l,
        })
    );
}
function _(t) {
    let { user: e, guildId: r, ...s } = t,
        d = (0, l.bG)([c.A], () => c.A.getUserProfile(e.id)?.application),
        u = (0, a.G)(d?.id ?? "");
    return null != d && u
        ? (0, i.jsx)(p, {
              user: e,
              guildId: r,
              onClick: () => {
                  (0, o.openModalLazy)(async () => {
                      let { default: t } = await Promise.all([
                          n.e("61943"),
                          n.e("28367"),
                          n.e("27411"),
                          n.e("12721"),
                          n.e("58283"),
                          n.e("8087"),
                          n.e("55057"),
                          n.e("60471"),
                          n.e("48563"),
                          n.e("27355"),
                          n.e("67876"),
                          n.e("374"),
                          n.e("33563"),
                          n.e("87760"),
                      ]).then(n.bind(n, 719847));
                      return (e) => (0, i.jsx)(t, { appId: d.id, guildId: r, ...e });
                  });
              },
              ...s,
          })
        : null;
}
