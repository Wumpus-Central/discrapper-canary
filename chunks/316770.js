e.d(t, { A: () => N });
var l = e(627968),
    n = e(503698),
    s = e.n(n),
    a = e(17928),
    d = e(939249),
    o = e(834730),
    r = e(661531),
    c = e(730852),
    A = e(963027),
    u = e(47167),
    h = e(378570),
    x = e(345942),
    g = e(790535),
    m = e(576705),
    p = e(531648),
    j = e(10862),
    _ = e(818348),
    C = e(375708),
    v = e(514566);
function N(i) {
    let { channel: t, guild: e, onAction: n, onClose: N } = i,
        f = (0, u.Ay)(t),
        O = (0, a.bG)([m.A], () => t.isPrivate() || m.A.can(_.xB.CONNECT, t));
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: v.CT,
                children: [
                    (0, l.jsx)(j.A, { channel: t, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: v.Ow }),
                    O
                        ? (0, l.jsx)(d.D, {
                              className: s()(v.sd, v.mG),
                              onClick: (i) => {
                                  i.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, g.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, h.iN)(t.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      N?.();
                              },
                              "aria-label": (0, A.Ay)({ channel: t }),
                              children: f,
                          })
                        : f,
                ],
            }),
            null == e
                ? null
                : (0, l.jsx)(p.A, {
                      variant: "text-xs/normal",
                      text: C.intl.formatToPlainString(C.t["hq/Qze"], { guildName: e.name }),
                      onClick: (i) => {
                          i.stopPropagation(), (0, x.u)(e.id), n?.({ action: "OPEN_VOICE_GUILD" }), N?.();
                      },
                  }),
        ],
    });
}
