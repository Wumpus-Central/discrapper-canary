n.d(e, { go: () => v, HP: () => b, PJ: () => I, r8: () => _ });
var t = n(477900);
n(582128);
var a = n(503698),
    u = n.n(a),
    i = n(331322),
    r = n(834730),
    s = n(237528),
    c = n(97808),
    o = n(778712),
    d = n(427262),
    f = n(475458),
    p = n(104299),
    g = n(951178),
    y = n(191850),
    h = n(792996);
let A = [
    [g.q7.APP_CHANNEL, y.default.bHLrO8],
    [g.q7.ACTIVITY, y.default["hp+8nc"]],
    [g.q7.VOICE_CHANNEL, y.default["4V2QWl"]],
    [g.q7.PROFILE_WIDGET, y.default.oJ06Po],
    [g.q7.OVERLAY, y.default.Qbnej2],
    [g.q7.APPLICATION_COMMANDS, y.default.pEwndv],
    [g.q7.BOT, y.default.HWOzBW],
    [g.q7.AUTOMOD, y.default.gsIXM9],
];
var m = n(83246);
function v(l) {
    let { application: e } = l,
        n = e.getCoverImageURL(864);
    return null == n ? null : (0, t.jsx)("img", { alt: "", src: n, className: m.Iv });
}
function I(l) {
    let { application: e, descriptionLineClamp: n } = l,
        a = e.getIconURL(96),
        s = e.description?.trim() ?? "";
    return (0, t.jsxs)("div", {
        className: m.D_,
        children: [
            null != a
                ? (0, t.jsx)("img", { alt: "", src: a, className: u()(m.Kk, m.Dp) })
                : (0, t.jsx)(p.A, { applicationId: e.id, name: e.name, glyphSize: 24, className: m.Kk }),
            (0, t.jsxs)(i.B, {
                gap: 4,
                className: m.zH,
                children: [
                    (0, t.jsx)(r.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: e.name,
                    }),
                    s.length > 0
                        ? (0, t.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              lineClamp: n,
                              children: s,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function _(l) {
    var e;
    let { project: n } = l,
        a =
            ((e = n.supported_surfaces ?? []),
            A.filter((l) => {
                let [n] = l;
                return e.includes(n);
            }).map((l) => {
                let [, e] = l;
                return h.intl.string(e);
            }));
    return 0 === a.length
        ? null
        : (0, t.jsx)("ul", {
              className: m.XP,
              "aria-label": h.intl.string(y.default["cF++B3"]),
              children: a.map((l) => (0, t.jsx)("li", { children: (0, t.jsx)(s.v, { text: l }) }, l)),
          });
}
function b(l) {
    let { project: e, guildId: n } = l,
        { creator: a } = (0, f.yv)(e);
    return null == a
        ? null
        : (0, t.jsxs)("div", {
              className: m.xL,
              children: [
                  (0, t.jsx)(c.eu, { src: a.getAvatarURL(n, 40), size: o._3.SIZE_20, "aria-hidden": !0 }),
                  (0, t.jsx)(r.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: 1,
                      children: h.intl.format(y.default["6/x9LD"], { name: (0, d.mG)(a) }),
                  }),
              ],
          });
}
