"use strict";
n.d(t, { L7: () => p, qA: () => f });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(253932),
    a = n(780964),
    o = n(840065),
    c = n(711014),
    d = n(115063),
    u = n(365258),
    h = n(704037),
    A = n(730844),
    m = n(985018),
    _ = n(33595);
let p = () => {
    (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL);
};
function g(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(l.DUT, {
        className: _.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: _.j3, children: t }),
            (0, i.jsx)(l._BQ, { color: l.LU0.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function f(e) {
    let { onClosePopout: t } = e,
        n = r.tz.useSetting(),
        a = (0, s.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        o = (0, d.Kk)(),
        _ = a.filter((e) => !o.has(e)),
        f = (0, u.AB)(_);
    return 0 === a.length
        ? null
        : (0, i.jsxs)(g, {
              onClick: () => {
                  t(), p();
              },
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: m.intl.string(n ? A.default["3GrhnF"] : A.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(h.l, { guildIds: f, prioritizeSelectedGuild: !0 }),
              ],
          });
}
