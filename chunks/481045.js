n.d(t, { L7: () => E, qA: () => I });
var i = n(627968),
    l = n(311907),
    s = n(939249),
    a = n(320448),
    r = n(827734),
    o = n(834730),
    d = n(253932),
    c = n(780964),
    u = n(858897),
    h = n(711014),
    A = n(115063),
    _ = n(365258),
    m = n(704037),
    g = n(395277),
    p = n(985018),
    f = n(141710);
let E = () => {
    (0, u.openUserSettings)(c.X.ACTIVITY_PRIVACY_PANEL);
};
function x(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(s.D, {
        className: f.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: f.j3, children: t }),
            (0, i.jsx)(a._, { color: r.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function I(e) {
    let { onClosePopout: t } = e,
        n = d.tz.useSetting(),
        s = (0, l.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
        a = (0, A.Kk)(),
        r = s.filter((e) => !a.has(e)),
        c = (0, _.AB)(r);
    return 0 === s.length
        ? null
        : (0, i.jsxs)(x, {
              onClick: () => {
                  t(), E();
              },
              children: [
                  (0, i.jsx)(o.E, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(n ? g.default["3GrhnF"] : g.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(m.l, { guildIds: c, prioritizeSelectedGuild: !0 }),
              ],
          });
}
