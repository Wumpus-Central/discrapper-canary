n.d(t, {
    S$: () => m,
    yj: () => _,
});
var r = n(54381),
    i = n(442837),
    l = n(481060),
    o = n(695346),
    a = n(313789),
    s = n(518596),
    c = n(771845),
    u = n(88658),
    d = n(782896),
    p = n(981631),
    f = n(361742),
    h = n(388032),
    g = n(95049);
let m = () => {
    (0, s.openUserSettings)(a.n.ACTIVITY_PRIVACY_PANEL, { section: p.oAB.ACTIVITY_PRIVACY });
};
function b(e) {
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
                color: l.TVs.colors.TEXT_SECONDARY,
                size: "xs",
            }),
        ],
    });
}
function _(e) {
    let { onClosePopout: t } = e,
        n = o.G6.useSetting(),
        a = (0, i.e7)([c.ZP], () => c.ZP.getFlattenedGuildIds()),
        s = (0, u._o)(),
        p = a.filter((e) => !s.has(e));
    return 0 === a.length
        ? null
        : (0, r.jsxs)(b, {
              onClick: () => {
                  t(), m();
              },
              children: [
                  (0, r.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: h.intl.string(n ? f.default["3GrhnF"] : f.default["54ycKJ"]),
                  }),
                  (0, r.jsx)(d.c, { guildIds: p }),
              ],
          });
}
