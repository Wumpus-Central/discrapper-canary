n.d(t, { Z: () => A });
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(481060),
    a = n(433355),
    o = n(189432),
    u = n(356778),
    c = n(776767),
    E = n(50493),
    d = n(388032),
    _ = n(87819);
function A(e) {
    let { userId: t, guildId: n } = e,
        A = (0, i.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: T, linksCount: I, mediaCount: m } = (0, u.P2)(t, n),
        g = new Intl.NumberFormat(d.intl.currentLocale).format(T),
        N = new Intl.NumberFormat(d.intl.currentLocale).format(I),
        h = new Intl.NumberFormat(d.intl.currentLocale).format(m),
        O = l.useCallback(
            async (e) => {
                if (null == A) return;
                let r = (0, u.Ow)(t, e, { include_nsfw: !0 });
                await (0, o.r)(n, t, A.baseChannelId, {
                    modViewPanel: E.k.MESSAGE_HISTORY,
                    additionalSearchQuery: r,
                });
            },
            [n, A, t],
        );
    return (0, r.jsx)(s.gNt, {
        label: d.intl.string(d.t.vCn2Tn),
        children: (0, r.jsxs)(c.WM, {
            children: [
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(s.kBi, {
                        size: "custom",
                        color: "currentColor",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t.OIgYlQ),
                    }),
                    description:
                        T === u.II
                            ? (0, r.jsx)(s.$jN, {
                                  type: s.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(s.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: g,
                              }),
                    onNavigate: T > 0 ? () => O(u.mw.MESSAGES) : void 0,
                }),
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(s.xPt, {
                        size: "custom",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t.DFSvTt),
                    }),
                    description:
                        I === u.II
                            ? (0, r.jsx)(s.$jN, {
                                  type: s.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(s.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: N,
                              }),
                    onNavigate: I > 0 ? () => O(u.mw.LINKS) : void 0,
                }),
                (0, r.jsx)(c._2, {
                    icon: (0, r.jsx)(s.Ka2, {
                        size: "custom",
                        width: c.Mn,
                        height: c.Mn,
                    }),
                    name: (0, r.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: d.intl.string(d.t["Aw9+/M"]),
                    }),
                    description:
                        m === u.II
                            ? (0, r.jsx)(s.$jN, {
                                  type: s.RAz.SPINNING_CIRCLE,
                                  className: _.loadingSpinner,
                              })
                            : (0, r.jsx)(s.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: h,
                              }),
                    onNavigate: m > 0 ? () => O(u.mw.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
