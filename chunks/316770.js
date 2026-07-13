l.d(i, { A: () => v });
var e = l(627968),
    n = l(503698),
    s = l.n(n),
    a = l(17928),
    d = l(939249),
    o = l(834730),
    r = l(661531),
    c = l(730852),
    h = l(963027),
    x = l(47167),
    u = l(378570),
    g = l(345942),
    A = l(790535),
    p = l(576705),
    m = l(531648),
    _ = l(10862),
    N = l(818348),
    f = l(375708),
    j = l(514566);
function v(t) {
    let { channel: i, guild: l, onAction: n, onClose: v } = t,
        C = (0, x.Ay)(i),
        E = (0, a.bG)([p.A], () => i.isPrivate() || p.A.can(N.xB.CONNECT, i));
    return (0, e.jsxs)("div", {
        children: [
            (0, e.jsxs)(o.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: j.CT,
                children: [
                    (0, e.jsx)(_.A, { channel: i, size: "xxs", color: r.A.colors.TEXT_DEFAULT, className: j.Ow }),
                    E
                        ? (0, e.jsx)(d.D, {
                              className: s()(j.sd, j.mG),
                              onClick: (t) => {
                                  t.stopPropagation(),
                                      i.isGuildStageVoice()
                                          ? (0, A.av)(i)
                                          : (c.default.selectVoiceChannel(i.id), (0, u.iN)(i.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      v?.();
                              },
                              "aria-label": (0, h.Ay)({ channel: i }),
                              children: C,
                          })
                        : C,
                ],
            }),
            null == l
                ? null
                : (0, e.jsx)(m.A, {
                      variant: "text-xs/normal",
                      text: f.intl.formatToPlainString(f.t["hq/Qze"], { guildName: l.name }),
                      onClick: (t) => {
                          t.stopPropagation(), (0, g.u)(l.id), n?.({ action: "OPEN_VOICE_GUILD" }), v?.();
                      },
                  }),
        ],
    });
}
