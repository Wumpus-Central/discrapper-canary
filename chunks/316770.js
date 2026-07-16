"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(503698),
    a = n.n(r),
    s = n(17928),
    l = n(939249),
    o = n(834730),
    d = n(661531),
    c = n(730852),
    u = n(963027),
    _ = n(47167),
    E = n(378570),
    A = n(345942),
    h = n(790535),
    I = n(576705),
    f = n(531648),
    p = n(10862),
    T = n(818348),
    m = n(375708),
    g = n(514566);
function S(e) {
    let { channel: t, guild: n, onAction: r, onClose: S } = e,
        N = (0, _.Ay)(t),
        C = (0, s.bG)([I.A], () => t.isPrivate() || I.A.can(T.xB.CONNECT, t));
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: g.CT,
                children: [
                    (0, i.jsx)(p.A, { channel: t, size: "xxs", color: d.A.colors.TEXT_DEFAULT, className: g.Ow }),
                    C
                        ? (0, i.jsx)(l.D, {
                              className: a()(g.sd, g.mG),
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, h.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, E.iN)(t.id)),
                                      r?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      S?.();
                              },
                              "aria-label": (0, u.Ay)({ channel: t }),
                              children: N,
                          })
                        : N,
                ],
            }),
            null == n
                ? null
                : (0, i.jsx)(f.A, {
                      variant: "text-xs/normal",
                      text: m.intl.formatToPlainString(m.t["hq/Qze"], { guildName: n.name }),
                      onClick: (e) => {
                          e.stopPropagation(), (0, A.u)(n.id), r?.({ action: "OPEN_VOICE_GUILD" }), S?.();
                      },
                      className: g.J5,
                  }),
        ],
    });
}
