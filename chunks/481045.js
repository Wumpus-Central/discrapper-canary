n.d(t, { L7: () => g, qA: () => f });
var i = n(627968),
    l = n(311907),
    s = n(397927),
    a = n(253932),
    r = n(780964),
    o = n(840065),
    d = n(711014),
    c = n(115063),
    u = n(365258),
    h = n(704037),
    A = n(536482),
    _ = n(985018),
    m = n(830910);
let g = () => {
    (0, o.openUserSettings)(r.X.ACTIVITY_PRIVACY_PANEL);
};
function p(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(s.DUT, {
        className: m.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: m.j3, children: t }),
            (0, i.jsx)(s._BQ, { color: s.LU0.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function f(e) {
    let { onClosePopout: t } = e,
        n = a.tz.useSetting(),
        r = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        o = (0, c.Kk)(),
        m = r.filter((e) => !o.has(e)),
        f = (0, u.AB)(m);
    return 0 === r.length
        ? null
        : (0, i.jsxs)(p, {
              onClick: () => {
                  t(), g();
              },
              children: [
                  (0, i.jsx)(s.Text, {
                      variant: "text-sm/semibold",
                      children: _.intl.string(n ? A.default["3GrhnF"] : A.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(h.l, { guildIds: f, prioritizeSelectedGuild: !0 }),
              ],
          });
}
