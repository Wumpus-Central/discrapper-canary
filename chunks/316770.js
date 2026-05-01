l.d(i, { A: () => v });
var t = l(627968),
    n = l(503698),
    s = l.n(n),
    a = l(17928),
    d = l(939249),
    o = l(834730),
    r = l(661531),
    c = l(956793),
    A = l(963027),
    h = l(47167),
    u = l(378570),
    x = l(345942),
    g = l(790535),
    m = l(576705),
    j = l(531648),
    p = l(10862),
    C = l(818348),
    _ = l(985018),
    N = l(514566);
function v(e) {
    let { channel: i, guild: l, onAction: n, onClose: v } = e,
        f = (0, h.Ay)(i),
        O = (0, a.bG)([m.A], () => i.isPrivate() || m.A.can(C.xB.CONNECT, i));
    return (0, t.jsxs)("div", {
        children: [
            (0, t.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: N.CT,
                children: [
                    (0, t.jsx)(p.A, { channel: i, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: N.Ow }),
                    O
                        ? (0, t.jsx)(d.D, {
                              className: s()(N.sd, N.mG),
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      i.isGuildStageVoice()
                                          ? (0, g.av)(i)
                                          : (c.default.selectVoiceChannel(i.id), (0, u.iN)(i.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      v?.();
                              },
                              "aria-label": (0, A.Ay)({ channel: i }),
                              children: f,
                          })
                        : f,
                ],
            }),
            null == l
                ? null
                : (0, t.jsx)(j.A, {
                      variant: "text-xs/normal",
                      text: _.intl.formatToPlainString(_.t["hq/Qze"], { guildName: l.name }),
                      onClick: (e) => {
                          e.stopPropagation(), (0, x.u)(l.id), n?.({ action: "OPEN_VOICE_GUILD" }), v?.();
                      },
                  }),
        ],
    });
}
