n.d(t, {
    A: () => g,
});
var l = n(627968),
    r = n(64700),
    a = n(311907),
    i = n(397927),
    s = n(761640),
    o = n(706752),
    c = n(744432),
    u = n(829887),
    E = n(486974),
    d = n(985018),
    _ = n(438536);

function g(e) {
    let { userId: t, guildId: n } = e,
        g = (0, a.bG)([s.Ay], () => s.Ay.getGuildSidebarState(n), [n]),
        { messagesCount: A, linksCount: T, mediaCount: f } = (0, c.u5)(t, n),
        h = new Intl.NumberFormat(d.intl.currentLocale).format(A),
        I = new Intl.NumberFormat(d.intl.currentLocale).format(T),
        O = new Intl.NumberFormat(d.intl.currentLocale).format(f),
        N = r.useCallback(
            async (e) => {
                if (null == g) return;
                let l = (0, c.ry)(t, e, {
                    include_nsfw: !0,
                });
                await (0, o.z)(n, t, g.baseChannelId, {
                    modViewPanel: E.g.MESSAGE_HISTORY,
                    additionalSearchQuery: l,
                });
            },
            [n, g, t],
        );
    return (0, l.jsx)(i.D0$, {
        label: d.intl.string(d.t.vCn2Tn),
        children: (0, l.jsxs)(u.SQ, {
            children: [
                (0, l.jsx)(u.RU, {
                    icon: (0, l.jsx)(i.oyn, {
                        size: "custom",
                        color: "currentColor",
                        width: u.mb,
                        height: u.mb,
                    }),
                    name: (0, l.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t.OIgYlQ),
                    }),
                    description:
                        A === c.zu
                            ? (0, l.jsx)(i.y$y, {
                                  type: i.tVU.SPINNING_CIRCLE,
                                  className: _.S,
                              })
                            : (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: h,
                              }),
                    onNavigate: A > 0 ? () => N(c.SA.MESSAGES) : void 0,
                }),
                (0, l.jsx)(u.RU, {
                    icon: (0, l.jsx)(i.qYV, {
                        size: "custom",
                        width: u.mb,
                        height: u.mb,
                    }),
                    name: (0, l.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t.DFSvTt),
                    }),
                    description:
                        T === c.zu
                            ? (0, l.jsx)(i.y$y, {
                                  type: i.tVU.SPINNING_CIRCLE,
                                  className: _.S,
                              })
                            : (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: I,
                              }),
                    onNavigate: T > 0 ? () => N(c.SA.LINKS) : void 0,
                }),
                (0, l.jsx)(u.RU, {
                    icon: (0, l.jsx)(i.sYc, {
                        size: "custom",
                        width: u.mb,
                        height: u.mb,
                    }),
                    name: (0, l.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t["Aw9+/M"]),
                    }),
                    description:
                        f === c.zu
                            ? (0, l.jsx)(i.y$y, {
                                  type: i.tVU.SPINNING_CIRCLE,
                                  className: _.S,
                              })
                            : (0, l.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: O,
                              }),
                    onNavigate: f > 0 ? () => N(c.SA.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
