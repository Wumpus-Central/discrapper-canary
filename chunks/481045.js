var n = e(477900),
    s = e(855986);
if (221552 == e.j) var r = e(939249);
if (221552 == e.j) var l = e(320448);
if (221552 == e.j) var a = e(646514);
if (221552 == e.j) var c = e(834730);
var d = e(253932),
    o = e(780964),
    u = e(766075),
    h = e(711014),
    f = e(115063),
    j = e(365258),
    v = e(926418),
    x = e(966756),
    C = e(792996),
    g = e(599583);
function p() {
    (0, u.openUserSettings)(o.X.ACTIVITY_PRIVACY_PANEL);
}
function m(t) {
    let { children: i, onClick: e } = t;
    return (0, n.jsxs)(r.D, {
        className: g.E1,
        onClick: e,
        children: [
            (0, n.jsx)("div", { className: g.j3, children: i }),
            (0, n.jsx)(l.ChevronSmallRightIcon, { color: a.A.colors.TEXT_SUBTLE, size: "xs" }),
        ],
    });
}
e.d(
    i,
    {},
    {
        L7: p,
        qA: function (t) {
            let { onClosePopout: i } = t,
                e = d.tz.useSetting(),
                r = (0, s.bG)([h.Ay], () => h.Ay.getFlattenedGuildIds()),
                l = (0, f.Kk)(),
                a = r.filter((t) => !l.has(t)),
                o = (0, j.AB)(a);
            return 0 === r.length
                ? null
                : (0, n.jsxs)(m, {
                      onClick: () => {
                          (i(), p());
                      },
                      children: [
                          (0, n.jsx)(c.E, {
                              variant: "body-sm/semibold",
                              children: C.intl.string(e ? x.default["3GrhnF"] : x.default["54ycKJ"]),
                          }),
                          (0, n.jsx)(v.l, { guildIds: o, prioritizeSelectedGuild: !0 }),
                      ],
                  });
        },
    },
);
