l.d(t, { A: () => C });
var e = l(477900),
    n = l(503698),
    s = l.n(n),
    a = l(17928),
    d = l(939249),
    o = l(834730),
    r = l(661531),
    c = l(730852),
    u = l(963027),
    A = l(47167),
    h = l(378570),
    x = l(345942),
    g = l(790535),
    m = l(576705),
    p = l(531648),
    j = l(10862),
    N = l(818348),
    _ = l(375708),
    v = l(260155);
function C(i) {
    let { channel: t, guild: l, onAction: n, onClose: C } = i,
        f = (0, A.Ay)(t),
        O = (0, a.bG)([m.A], () => t.isPrivate() || m.A.can(N.xB.CONNECT, t));
    return (0, e.jsxs)("div", {
        children: [
            (0, e.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: v.CT,
                children: [
                    (0, e.jsx)(j.A, { channel: t, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: v.Ow }),
                    O
                        ? (0, e.jsx)(d.D, {
                              className: s()(v.sd, v.mG),
                              onClick: (i) => {
                                  i.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, g.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, h.iN)(t.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      C?.();
                              },
                              "aria-label": (0, u.Ay)({ channel: t }),
                              children: f,
                          })
                        : f,
                ],
            }),
            null == l
                ? null
                : (0, e.jsx)(p.A, {
                      variant: "text-xs/normal",
                      text: _.intl.formatToPlainString(_.t["hq/Qze"], { guildName: l.name }),
                      onClick: (i) => {
                          i.stopPropagation(), (0, x.u)(l.id), n?.({ action: "OPEN_VOICE_GUILD" }), C?.();
                      },
                      className: v.J5,
                  }),
        ],
    });
}
