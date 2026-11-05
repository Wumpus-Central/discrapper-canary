var e = t(477900),
    n = t(503698),
    s = t.n(n),
    a = t(855986),
    d = t(939249),
    o = t(834730),
    r = t(646514),
    c = t(597798),
    u = t(963027),
    A = t(47167),
    h = t(378570),
    x = t(345942),
    g = t(129095),
    C = t(576705),
    m = t(531648),
    j = t(10862),
    p = t(818348),
    v = t(792996),
    N = t(260155);
t.d(
    l,
    {},
    {
        A: function (i) {
            let { channel: l, guild: t, onAction: n, onClose: _ } = i,
                f = (0, A.Ay)(l),
                O = (0, a.bG)([C.A], () => l.isPrivate() || C.A.can(p.xB.CONNECT, l));
            return (0, e.jsxs)("div", {
                children: [
                    (0, e.jsxs)(o.E, {
                        tag: "div",
                        variant: "heading-xs/semibold",
                        color: "text-default",
                        className: N.CT,
                        children: [
                            (0, e.jsx)(j.A, {
                                channel: l,
                                size: "xxs",
                                color: r.A.colors.TEXT_DEFAULT,
                                className: N.Ow,
                            }),
                            O
                                ? (0, e.jsx)(d.D, {
                                      className: s()(N.sd, N.mG),
                                      onClick: (i) => {
                                          (i.stopPropagation(),
                                              l.isGuildStageVoice()
                                                  ? (0, g.av)(l)
                                                  : (c.default.selectVoiceChannel(l.id), (0, h.iN)(l.id)),
                                              n?.({ action: "OPEN_VOICE_CHANNEL" }),
                                              _?.());
                                      },
                                      "aria-label": (0, u.Ay)({ channel: l }),
                                      children: f,
                                  })
                                : f,
                        ],
                    }),
                    null == t
                        ? null
                        : (0, e.jsx)(m.A, {
                              variant: "body-xs/normal",
                              text: v.intl.formatToPlainString(v.t["hq/Qze"], { guildName: t.name }),
                              onClick: (i) => {
                                  (i.stopPropagation(), (0, x.u)(t.id), n?.({ action: "OPEN_VOICE_GUILD" }), _?.());
                              },
                              className: N.J5,
                          }),
                ],
            });
        },
    },
);
