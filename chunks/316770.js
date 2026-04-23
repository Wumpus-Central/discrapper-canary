i.d(t, { A: () => v });
var l = i(627968),
    n = i(503698),
    s = i.n(n),
    a = i(311907),
    d = i(939249),
    r = i(834730),
    o = i(827734),
    c = i(956793),
    u = i(963027),
    A = i(47167),
    h = i(378570),
    g = i(345942),
    x = i(323443),
    m = i(576705),
    C = i(531648),
    _ = i(10862),
    p = i(818348),
    N = i(985018),
    f = i(514566);
function v(e) {
    let { channel: t, guild: i, onAction: n, onClose: v } = e,
        j = (0, A.Ay)(t),
        E = (0, a.bG)([m.A], () => t.isPrivate() || m.A.can(p.xB.CONNECT, t));
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsxs)(r.E, {
                tag: "div",
                variant: "heading-sm/semibold",
                color: "text-default",
                className: f.CT,
                children: [
                    (0, l.jsx)(_.A, { channel: t, size: "xxs", color: o.A.colors.TEXT_DEFAULT, className: f.Ow }),
                    E
                        ? (0, l.jsx)(d.D, {
                              className: s()(f.sd, f.mG),
                              onClick: (e) => {
                                  e.stopPropagation(),
                                      t.isGuildStageVoice()
                                          ? (0, x.av)(t)
                                          : (c.default.selectVoiceChannel(t.id), (0, h.iN)(t.id)),
                                      n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                      v?.();
                              },
                              "aria-label": (0, u.Ay)({ channel: t }),
                              children: j,
                          })
                        : j,
                ],
            }),
            null == i
                ? null
                : (0, l.jsx)(C.A, {
                      variant: "text-xs/normal",
                      text: N.intl.formatToPlainString(N.t["hq/Qze"], { guildName: i.name }),
                      onClick: (e) => {
                          e.stopPropagation(), (0, g.u)(i.id), n?.({ action: "OPEN_VOICE_GUILD" }), v?.();
                      },
                  }),
        ],
    });
}
