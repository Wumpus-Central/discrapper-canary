"use strict";
n.d(t, { L7: () => A, qA: () => T });
var i = n(627968),
    r = n(17928),
    s = n(939249),
    a = n(320448),
    o = n(661531),
    l = n(834730),
    u = n(885386),
    c = n(780964),
    d = n(858897),
    _ = n(711014),
    f = n(115063),
    h = n(365258),
    p = n(926418),
    E = n(395277),
    m = n(375708),
    g = n(141710);
let A = () => {
    (0, d.openUserSettings)(c.X.ACTIVITY_PRIVACY_PANEL);
};
function I(e) {
    let { children: t, onClick: n } = e;
    return (0, i.jsxs)(s.D, {
        className: g.E1,
        onClick: n,
        children: [
            (0, i.jsx)("div", { className: g.j3, children: t }),
            (0, i.jsx)(a._, { color: o.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function T(e) {
    let { onClosePopout: t } = e,
        n = u.tz.useSetting(),
        s = (0, r.bG)([_.Ay], () => _.Ay.getFlattenedGuildIds()),
        a = (0, f.Kk)(),
        o = s.filter((e) => !a.has(e)),
        c = (0, h.AB)(o);
    return 0 === s.length
        ? null
        : (0, i.jsxs)(I, {
              onClick: () => {
                  t(), A();
              },
              children: [
                  (0, i.jsx)(l.E, {
                      variant: "text-sm/semibold",
                      children: m.intl.string(n ? E.default["3GrhnF"] : E.default["54ycKJ"]),
                  }),
                  (0, i.jsx)(p.l, { guildIds: c, prioritizeSelectedGuild: !0 }),
              ],
          });
}
