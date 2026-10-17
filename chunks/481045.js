i.d(e, { L7: () => g, qA: () => m });
var n = i(477900),
    s = i(17928);
if (221552 == i.j) var r = i(939249);
if (221552 == i.j) var l = i(320448);
if (221552 == i.j) var a = i(661531);
if (221552 == i.j) var c = i(834730);
var d = i(885386),
    u = i(780964),
    o = i(766075),
    f = i(711014),
    h = i(115063),
    j = i(365258),
    x = i(926418),
    v = i(968987),
    p = i(105292),
    C = i(599583);
function g() {
    (0, o.openUserSettings)(u.X.ACTIVITY_PRIVACY_PANEL);
}
function k(t) {
    let { children: e, onClick: i } = t;
    return (0, n.jsxs)(r.D, {
        className: C.E1,
        onClick: i,
        children: [
            (0, n.jsx)("div", { className: C.j3, children: e }),
            (0, n.jsx)(l._, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function m(t) {
    let { onClosePopout: e } = t,
        i = d.tz.useSetting(),
        r = (0, s.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()),
        l = (0, h.Kk)(),
        a = r.filter((t) => !l.has(t)),
        u = (0, j.AB)(a);
    return 0 === r.length
        ? null
        : (0, n.jsxs)(k, {
              onClick: () => {
                  (e(), g());
              },
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(i ? v.default["3GrhnF"] : v.default["54ycKJ"]),
                  }),
                  (0, n.jsx)(x.l, { guildIds: u, prioritizeSelectedGuild: !0 }),
              ],
          });
}
