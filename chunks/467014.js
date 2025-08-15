t.d(e, { Z: () => u });
var n = t(255367),
    r = t(73800),
    l = t(442837),
    i = t(481060),
    a = t(433355),
    s = t(189432),
    o = t(356778),
    g = t(776767),
    c = t(50493),
    f = t(388032),
    v = t(87819);
function u(A) {
    let { userId: e, guildId: t } = A,
        u = (0, l.e7)([a.ZP], () => a.ZP.getGuildSidebarState(t), [t]),
        { messagesCount: h, linksCount: d, mediaCount: E } = (0, o.P2)(e, t),
        C = new Intl.NumberFormat(f.intl.currentLocale).format(h),
        B = new Intl.NumberFormat(f.intl.currentLocale).format(d),
        w = new Intl.NumberFormat(f.intl.currentLocale).format(E),
        D = r.useCallback(
            async (A) => {
                if (null == u) return;
                let n = (0, o.Ow)(e, A, { include_nsfw: !0 });
                await (0, s.r)(t, e, u.baseChannelId, {
                    modViewPanel: c.k.MESSAGE_HISTORY,
                    additionalSearchQuery: n,
                });
            },
            [t, u, e],
        );
    return (0, n.jsx)(i.xJW, {
        title: f.intl.string(f.t.vCn2Tk),
        titleClassName: v.infoTitle,
        children: (0, n.jsxs)(g.WM, {
            children: [
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.kBi, {
                        size: "custom",
                        color: "currentColor",
                        width: g.Mn,
                        height: g.Mn,
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: f.intl.string(f.t.OIgYlZ),
                    }),
                    description:
                        h === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: v.loadingSpinner,
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: C,
                              }),
                    onNavigate: h > 0 ? () => D(o.mw.MESSAGES) : void 0,
                }),
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.xPt, {
                        size: "custom",
                        width: g.Mn,
                        height: g.Mn,
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: f.intl.string(f.t.DFSvTk),
                    }),
                    description:
                        d === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: v.loadingSpinner,
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: B,
                              }),
                    onNavigate: d > 0 ? () => D(o.mw.LINKS) : void 0,
                }),
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.Ka2, {
                        size: "custom",
                        width: g.Mn,
                        height: g.Mn,
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        children: f.intl.string(f.t["Aw9+/P"]),
                    }),
                    description:
                        E === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: v.loadingSpinner,
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
                                  children: w,
                              }),
                    onNavigate: E > 0 ? () => D(o.mw.MEDIA) : void 0,
                }),
            ],
        }),
    });
}
