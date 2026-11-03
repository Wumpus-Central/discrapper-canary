e.d(i, { L7: () => g, qA: () => m });
var n = e(477900),
    s = e(17928);
if (221552 == e.j) var r = e(939249);
if (221552 == e.j) var l = e(320448);
if (221552 == e.j) var a = e(661531);
if (221552 == e.j) var c = e(834730);
var d = e(253932),
    u = e(780964),
    o = e(766075),
    f = e(711014),
    h = e(115063),
    j = e(365258),
    v = e(926418),
    x = e(450216),
    p = e(105292),
    C = e(599583);
function g() {
    (0, o.openUserSettings)(u.X.ACTIVITY_PRIVACY_PANEL);
}
function k(t) {
    let { children: i, onClick: e } = t;
    return (0, n.jsxs)(r.D, {
        className: C.E1,
        onClick: e,
        children: [
            (0, n.jsx)("div", { className: C.j3, children: i }),
            (0, n.jsx)(l._, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
function m(t) {
    let { onClosePopout: i } = t,
        e = d.tz.useSetting(),
        r = (0, s.bG)([f.Ay], () => f.Ay.getFlattenedGuildIds()),
        l = (0, h.Kk)(),
        a = r.filter((t) => !l.has(t)),
        u = (0, j.AB)(a);
    return 0 === r.length
        ? null
        : (0, n.jsxs)(k, {
              onClick: () => {
                  (i(), g());
              },
              children: [
                  (0, n.jsx)(c.E, {
                      variant: "body-sm/semibold",
                      children: p.intl.string(e ? x.default["3GrhnF"] : x.default["54ycKJ"]),
                  }),
                  (0, n.jsx)(v.l, { guildIds: u, prioritizeSelectedGuild: !0 }),
              ],
          });
}
