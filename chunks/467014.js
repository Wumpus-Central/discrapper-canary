t.d(e, { Z: () => h });
var n = t(255367),
    r = t(73800),
    l = t(442837),
    i = t(481060),
    s = t(433355),
    a = t(189432),
    o = t(356778),
    g = t(776767),
    v = t(50493),
    f = t(388032),
    c = t(12740);
function h(A) {
    let { userId: e, guildId: t } = A,
        h = (0, l.e7)([s.ZP], () => s.ZP.getGuildSidebarState(t), [t]),
        { messagesCount: u, linksCount: E, mediaCount: d } = (0, o.P2)(e, t),
        C = new Intl.NumberFormat(f.intl.currentLocale).format(u),
        B = new Intl.NumberFormat(f.intl.currentLocale).format(E),
        w = new Intl.NumberFormat(f.intl.currentLocale).format(d),
        D = r.useCallback(
            async (A) => {
                if (null == h) return;
                let n = (0, o.Ow)(e, A, { include_nsfw: !0 });
                await (0, a.r)(t, e, h.baseChannelId, {
                    modViewPanel: v.k.MESSAGE_HISTORY,
                    additionalSearchQuery: n
                });
            },
            [t, h, e]
        );
    return (0, n.jsx)(i.xJW, {
        title: f.intl.string(f.t.vCn2Tk),
        titleClassName: c.infoTitle,
        children: (0, n.jsxs)(g.WM, {
            children: [
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.kBi, {
                        size: 'custom',
                        color: 'currentColor',
                        width: g.Mn,
                        height: g.Mn
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: f.intl.string(f.t.OIgYlZ)
                    }),
                    description:
                        u === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: c.loadingSpinner
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: C
                              }),
                    onNavigate: u > 0 ? () => D(o.mw.MESSAGES) : void 0
                }),
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.xPt, {
                        size: 'custom',
                        width: g.Mn,
                        height: g.Mn
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: f.intl.string(f.t.DFSvTk)
                    }),
                    description:
                        E === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: c.loadingSpinner
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: B
                              }),
                    onNavigate: E > 0 ? () => D(o.mw.LINKS) : void 0
                }),
                (0, n.jsx)(g._2, {
                    icon: (0, n.jsx)(i.Ka2, {
                        size: 'custom',
                        width: g.Mn,
                        height: g.Mn
                    }),
                    name: (0, n.jsx)(i.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: f.intl.string(f.t['Aw9+/P'])
                    }),
                    description:
                        d === o.II
                            ? (0, n.jsx)(i.$jN, {
                                  type: i.RAz.SPINNING_CIRCLE,
                                  className: c.loadingSpinner
                              })
                            : (0, n.jsx)(i.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: w
                              }),
                    onNavigate: d > 0 ? () => D(o.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
