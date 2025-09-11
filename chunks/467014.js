n.d(t, { Z: () => A });
var r = n(951288),
    l = n(647438),
    i = n(442837),
    a = n(481060),
    s = n(433355),
    o = n(189432),
    u = n(356778),
    c = n(776767),
    d = n(50493),
    E = n(388032),
    _ = n(152540);
function A(e) {
    let { userId: t, guildId: n } = e,
        A = (0, i.e7)([s.ZP], () => s.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: m, linksCount: T, mediaCount: I } = (0, u.P2)(t, n),
        g = new Intl.NumberFormat(E.intl.currentLocale).format(m),
        f = new Intl.NumberFormat(E.intl.currentLocale).format(T),
        h = new Intl.NumberFormat(E.intl.currentLocale).format(I),
        N = l.useCallback(
            async (e) => {
                if (null == A) return;
                let r = (0, u.Ow)(t, e, { include_nsfw: !0 });
                await (0, o.r)(n, t, A.baseChannelId, {
                    modViewPanel: d.k.MESSAGE_HISTORY,
                    additionalSearchQuery: r,
                });
            },
            [n, A, t],
        );
    return (0, r.jsx)(a.xJW, {
        title: E.intl.string(E.t.vCn2Tk),
        titleClassName: _.infoTitle,
        children: (0, r.jsxs)(c.WM, {
            children: [
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(a.kBi, {
                        size: "custom",
                        color: "currentColor",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(E.t.OIgYlZ),
                    }),
                    description:
                        m === u.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: g,
                              }),
                    onNavigate: m > 0 ? () => N(u.mw.MESSAGES) : void 0,
                }),
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(a.xPt, {
                        size: "custom",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(E.t.DFSvTk),
                    }),
                    description:
                        T === u.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: f,
                              }),
                    onNavigate: T > 0 ? () => N(u.mw.LINKS) : void 0,
                }),
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(a.Ka2, {
                        size: "custom",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: E.intl.string(E.t["Aw9+/P"]),
                    }),
                    description:
                        I === u.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: h,
                              }),
                    onNavigate: I > 0 ? () => N(u.mw.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
