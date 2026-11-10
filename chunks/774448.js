var l = t(477900);
t(582128);
var e = t(855986),
    a = t(165862),
    d = t(477782),
    r = t(442433),
    s = t(5180),
    c = t(71393),
    u = t(33760),
    o = t(114129),
    b = t(792996);
t.d(
    i,
    {},
    {
        default: function (n) {
            let { tab: i, onSelect: t, onRequestClose: g } = n,
                h = (0, u.ES)(i),
                p = "channel" === i.kind ? i.guildId : null,
                x = (0, e.bG)([c.A], () => c.A.getGuild(p)?.name ?? "", [p]),
                j =
                    h?.kind === "guild"
                        ? b.intl.formatToPlainString(b.t.WTK5lb, {
                              guildName: (0, s.ai)(h.guildId) ? b.intl.string(b.t.wMWyci) : x,
                          })
                        : b.intl.string(b.t.EzL9ih);
            return (0, l.jsxs)(a.W, {
                "data-menu-migrated": !0,
                navId: "channel-tab-context",
                onClose: r.Z_,
                "aria-label": b.intl.string(b.t.dd5Eyn),
                onSelect: t,
                children: [
                    (0, l.jsx)(d.rX, {
                        children: i.pinned
                            ? (0, l.jsx)(d.Dr, {
                                  id: "unpin-tab",
                                  label: b.intl.string(b.t.LvKSA8),
                                  action: () => (0, o.RL)(i.id, !1, "context_menu"),
                              })
                            : (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(d.Dr, {
                                          id: "pin-tab",
                                          label: b.intl.string(b.t.Aiucjd),
                                          action: () => (0, o.RL)(i.id, !0, "context_menu"),
                                      }),
                                      null != h &&
                                          (0, l.jsx)(d.Dr, {
                                              id: "pin-tab-to-scope",
                                              label: j,
                                              action: () => (0, o.RL)(i.id, !0, "context_menu", h),
                                          }),
                                  ],
                              }),
                    }),
                    (0, l.jsx)(d.rX, {
                        children: (0, l.jsx)(d.Dr, { id: "close-tab", label: b.intl.string(b.t.In6PEK), action: g }),
                    }),
                ],
            });
        },
    },
);
