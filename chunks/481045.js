n.d(t, { L7: () => E, qA: () => x });
var i = n(627968),
    l = n(17928),
    s = n(939249),
    r = n(320448),
    a = n(661531),
    o = n(834730),
    d = n(253932),
    c = n(780964),
    u = n(858897),
    h = n(711014),
    A = n(115063),
    _ = n(365258),
    g = n(926418),
    m = n(395277),
    p = n(985018),
    f = n(141710);
let E = () => {
    (0, u.openUserSettings)(c.X.ACTIVITY_PRIVACY_PANEL);
};
function C(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(s.D, {
        className: f.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: f.j3, children: t }),
            (0, i.jsx)(r._, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function x(e) {
    let { onClosePopout: t } = e,
        n = d.tz.useSetting(),
        s = (0, l.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
        r = (0, A.Kk)(),
        a = s.filter((e) => !r.has(e)),
        c = (0, _.AB)(a);
    return 0 === s.length
        ? null
        : (0, i.jsxs)(C, {
              onClick: () => {
                  t(), E();
              },
              children: [
                  (0, i.jsx)(o.E, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(n ? m.default["3GrhnF"] : m.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(g.l, { guildIds: c, prioritizeSelectedGuild: !0 }),
              ],
          });
}
