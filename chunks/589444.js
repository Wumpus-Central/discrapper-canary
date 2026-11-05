t.d(l, { go: () => h, HP: () => C, PJ: () => b, r8: () => v });
var n = t(477900);
t(582128);
var a = t(503698),
    u = t.n(a),
    r = t(331322),
    s = t(834730),
    i = t(237528),
    c = t(97808),
    o = t(778712),
    d = t(427262),
    f = t(475458),
    p = t(104299),
    y = t(951178),
    g = t(191850),
    A = t(792996);
let m = [
    [y.q7.APP_CHANNEL, g.default.bHLrO8],
    [y.q7.ACTIVITY, g.default["hp+8nc"]],
    [y.q7.VOICE_CHANNEL, g.default["4V2QWl"]],
    [y.q7.PROFILE_WIDGET, g.default.oJ06Po],
    [y.q7.OVERLAY, g.default.Qbnej2],
    [y.q7.APPLICATION_COMMANDS, g.default.pEwndv],
    [y.q7.BOT, g.default.HWOzBW],
    [y.q7.AUTOMOD, g.default.gsIXM9],
];
var _ = t(83246);
function h(e) {
    let { application: l } = e,
        t = l.getCoverImageURL(864);
    return null == t ? null : (0, n.jsx)("img", { alt: "", src: t, className: _.Iv });
}
function b(e) {
    let { application: l, descriptionLineClamp: t } = e,
        a = l.getIconURL(96),
        i = l.description?.trim() ?? "";
    return (0, n.jsxs)("div", {
        className: _.D_,
        children: [
            null != a
                ? (0, n.jsx)("img", { alt: "", src: a, className: u()(_.Kk, _.Dp) })
                : (0, n.jsx)(p.A, { applicationId: l.id, name: l.name, glyphSize: 24, className: _.Kk }),
            (0, n.jsxs)(r.B, {
                gap: 4,
                className: _.zH,
                children: [
                    (0, n.jsx)(s.E, {
                        variant: "body-md/semibold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: l.name,
                    }),
                    i.length > 0
                        ? (0, n.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-default",
                              lineClamp: t,
                              children: i,
                          })
                        : null,
                ],
            }),
        ],
    });
}
function v(e) {
    var l;
    let { project: t } = e,
        a =
            ((l = t.supported_surfaces ?? []),
            m
                .filter((e) => {
                    let [t] = e;
                    return l.includes(t);
                })
                .map((e) => {
                    let [, l] = e;
                    return A.intl.string(l);
                }));
    return 0 === a.length
        ? null
        : (0, n.jsx)("ul", {
              className: _.XP,
              "aria-label": A.intl.string(g.default["cF++B3"]),
              children: a.map((e) => (0, n.jsx)("li", { children: (0, n.jsx)(i.v, { text: e }) }, e)),
          });
}
function C(e) {
    let { project: l, guildId: t } = e,
        { creator: a } = (0, f.yv)(l);
    return null == a
        ? null
        : (0, n.jsxs)("div", {
              className: _.xL,
              children: [
                  (0, n.jsx)(c.eu, { src: a.getAvatarURL(t, 40), size: o._3.SIZE_20, "aria-hidden": !0 }),
                  (0, n.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-default",
                      lineClamp: 1,
                      children: A.intl.format(g.default["6/x9LD"], { name: (0, d.mG)(a) }),
                  }),
              ],
          });
}
