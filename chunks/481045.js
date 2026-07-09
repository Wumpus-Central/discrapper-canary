e.d(i, { L7: () => g, qA: () => m });
var n = e(627968),
    r = e(17928);
if (21552 == e.j) var s = e(939249);
if (21552 == e.j) var l = e(320448);
if (21552 == e.j) var a = e(661531);
if (21552 == e.j) var c = e(834730);
var d = e(885386),
    o = e(780964),
    u = e(766075),
    f = e(711014),
    C = e(115063),
    h = e(365258),
    j = e(926418),
    x = e(900640),
    p = e(375708),
    v = e(31054);
function g() {
    (0, u.openUserSettings)(o.X.ACTIVITY_PRIVACY_PANEL);
}
function k(t) {
    let { children: i, onClick: e } = t;
    return (0, n.jsxs)(s.D, {
        className: v.E1,
        onClick: e,
        children: [
            (0, n.jsx)("div", { className: v.j3, children: i }),
            (0, n.jsx)(l._, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function m(t) {
    let { onClosePopout: i } = t,
        e = d.tz.useSetting(),
        s = (0, r.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()),
        l = (0, C.Kk)(),
        a = s.filter((t) => !l.has(t)),
        o = (0, h.AB)(a);
    return 0 === s.length
        ? null
        : (0, n.jsxs)(k, {
              onClick: () => {
                  i(), g();
              },
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "text-sm/semibold",
                      children: p.intl.string(e ? x.default["3GrhnF"] : x.default["54ycKJ"]),
                  }),
                  (0, n.jsx)(j.l, { guildIds: o, prioritizeSelectedGuild: !0 }),
              ],
          });
}
