"use strict";
n.d(t, { L7: () => m, qA: () => f });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(253932),
    a = n(780964),
    o = n(840065),
    c = n(711014),
    d = n(115063),
    u = n(704037),
    h = n(652215),
    A = n(536482),
    p = n(985018),
    g = n(259533);
let m = () => {
    (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL, { section: h.nc_.ACTIVITY_PRIVACY });
};
function _(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(l.DUT, {
        className: g.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: g.j3, children: t }),
            (0, i.jsx)(l._BQ, { color: l.LU0.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function f(e) {
    let { onClosePopout: t } = e,
        n = r.tz.useSetting(),
        a = (0, s.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()),
        o = (0, d.Kk)(),
        h = a.filter((e) => !o.has(e));
    return 0 === a.length
        ? null
        : (0, i.jsxs)(_, {
              onClick: () => {
                  t(), m();
              },
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(n ? A.default["3GrhnF"] : A.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(u.l, { guildIds: h }),
              ],
          });
}
