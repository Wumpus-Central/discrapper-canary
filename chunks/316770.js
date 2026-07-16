l.d(t, { A: () => v });
var e = l(627968),
    n = l(503698),
    s = l.n(n),
    a = l(17928),
    d = l(939249),
    o = l(834730),
    r = l(661531),
    c = l(730852),
    A = l(963027),
    u = l(47167),
    h = l(378570),
    x = l(345942),
    g = l(790535),
    m = l(576705),
    p = l(531648),
    j = l(10862),
    C = l(818348),
    N = l(375708),
    _ = l(514566);
function v(i) {
    let { channel: t, guild: l, onAction: n, onClose: v } = i,
        f = (0, u.Ay)(t),
        O = (0, a.bG)([m.A], () => t.isPrivate() || m.A.can(C.xB.CONNECT, t));
    return (0, e.jsxs)("div", {
        children: [
            (0, e.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: _.CT,
                children: [
                    (0, e.jsx)(j.A, { channel: t, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: _.Ow }),
                    O
                        ? (0, e.jsx)(d.D, {
                              className: s()(_.sd, _.mG),
                              onClick: (i) => {
                                  i.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, g.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, h.iN)(t.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      v?.();
                              },
                              "aria-label": (0, A.Ay)({ channel: t }),
                              children: f,
                          })
                        : f,
                ],
            }),
            null == l
                ? null
                : (0, e.jsx)(p.A, {
                      variant: "text-xs/normal",
                      text: N.intl.formatToPlainString(N.t["hq/Qze"], { guildName: l.name }),
                      onClick: (i) => {
                          i.stopPropagation(), (0, x.u)(l.id), n?.({ action: "OPEN_VOICE_GUILD" }), v?.();
                      },
                      className: _.J5,
                  }),
        ],
    });
}
