"use strict";
n.d(t, { L7: () => _, qA: () => x });
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
    A = n(652215),
    p = n(730844),
    g = n(985018),
    m = n(247307);
let _ = () => {
    (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL, { section: A.nc_.ACTIVITY_PRIVACY });
};
function f(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(l.DUT, {
        className: m.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: m.j3, children: t }),
            (0, i.jsx)(l._BQ, { color: l.LU0.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function x(e) {
    let { onClosePopout: t } = e,
        n = r.tz.useSetting(),
        a = (0, s.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        o = (0, d.Kk)(),
        A = a.filter((e) => !o.has(e)),
        m = (0, u.AB)(A);
    return 0 === a.length
        ? null
        : (0, i.jsxs)(f, {
              onClick: () => {
                  t(), _();
              },
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: g.intl.string(n ? p.default["3GrhnF"] : p.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(h.l, { guildIds: m, prioritizeSelectedGuild: !0 }),
              ],
          });
}
