n.d(t, {
    S$: () => b,
    yj: () => y,
});
var r = n(54381),
    i = n(442837),
    l = n(481060),
    a = n(695346),
    o = n(313789),
    s = n(518596),
    c = n(771845),
    u = n(88658),
    d = n(782896),
    f = n(981631),
    h = n(512929),
    p = n(388032),
    g = n(507179);
let b = () => {
    (0, s.openUserSettings)(o.n.ACTIVITY_PRIVACY_PANEL, { section: f.oAB.ACTIVITY_PRIVACY });
};
function m(e) {
    let { children: t, onClick: n } = e;
    return (0, r.jsxs)(l.P3F, {
        className: g.chevronButton,
        onClick: n,
        children: [
            (0, r.jsx)("div", {
                className: g.chevronButtonContent,
                children: t,
            }),
            (0, r.jsx)(l.Fbu, {
                color: l.TVs.colors.TEXT_SUBTLE,
                size: "xs",
            }),
        ],
    });
}
function y(e) {
    let { onClosePopout: t } = e,
        n = a.G6.useSetting(),
        o = (0, i.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        s = (0, u._o)(),
        f = o.filter((e) => !s.has(e));
    return 0 === o.length
        ? null
        : (0, r.jsxs)(m, {
              onClick: () => {
                  t(), b();
              },
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(n ? h.default["3GrhnF"] : h.default["54ycKJ"]),
                  }),
                  (0, r.jsx)(d.c, { guildIds: f }),
              ],
          });
}
