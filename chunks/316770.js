e.d(t, { A: () => v });
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
    j = e(531648),
    p = e(10862),
    C = e(818348),
    N = e(375708),
    _ = e(514566);
function v(i) {
    let { channel: t, guild: e, onAction: n, onClose: v } = i,
        f = (0, u.Ay)(t),
        O = (0, a.bG)([m.A], () => t.isPrivate() || m.A.can(C.xB.CONNECT, t));
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: _.CT,
                children: [
                    (0, l.jsx)(p.A, { channel: t, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: _.Ow }),
                    O
                        ? (0, l.jsx)(d.D, {
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
            null == e
                ? null
                : (0, l.jsx)(j.A, {
                      variant: "text-xs/normal",
                      text: N.intl.formatToPlainString(N.t["hq/Qze"], { guildName: e.name }),
                      onClick: (i) => {
                          i.stopPropagation(), (0, x.u)(e.id), n?.({ action: "OPEN_VOICE_GUILD" }), v?.();
                      },
                  }),
        ],
    });
}
