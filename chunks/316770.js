"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(503698),
    s = n.n(r),
    a = n(17928),
    o = n(939249),
    l = n(834730),
    u = n(661531),
    c = n(730852),
    d = n(963027),
    _ = n(47167),
    f = n(378570),
    h = n(345942),
    p = n(790535),
    E = n(576705),
    m = n(531648),
    g = n(10862),
    A = n(818348),
    I = n(375708),
    T = n(514566);
function S(e) {
    let { channel: t, guild: n, onAction: r, onClose: S } = e,
        N = (0, _.Ay)(t),
        y = (0, a.bG)([E.A], () => t.isPrivate() || E.A.can(A.xB.CONNECT, t));
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsxs)(l.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: T.CT,
                children: [
                    (0, i.jsx)(g.A, { channel: t, size: "xxs", color: u.A.colors.TEXT_DEFAULT, className: T.Ow }),
                    y
                        ? (0, i.jsx)(o.D, {
                              className: s()(T.sd, T.mG),
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, p.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, f.iN)(t.id)),
                                      r?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      S?.();
                              },
                              "aria-label": (0, d.Ay)({ channel: t }),
                              children: N,
                          })
                        : N,
                ],
            }),
            null == n
                ? null
                : (0, i.jsx)(m.A, {
                      variant: "text-xs/normal",
                      text: I.intl.formatToPlainString(I.t["hq/Qze"], { guildName: n.name }),
                      onClick: (e) => {
                          e.stopPropagation(), (0, h.u)(n.id), r?.({ action: "OPEN_VOICE_GUILD" }), S?.();
                      },
                  }),
        ],
    });
}
