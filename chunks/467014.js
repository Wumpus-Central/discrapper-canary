n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(481060),
    o = n(433355),
    s = n(189432),
    c = n(356778),
    u = n(776767),
    d = n(50493),
    p = n(388032),
    h = n(12740);
function f(e) {
    let { userId: t, guildId: n } = e,
        f = (0, l.e7)([o.ZP], () => o.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: m, linksCount: g, mediaCount: b } = (0, c.P2)(t, n),
        _ = new Intl.NumberFormat(p.intl.currentLocale).format(m),
        y = new Intl.NumberFormat(p.intl.currentLocale).format(g),
        x = new Intl.NumberFormat(p.intl.currentLocale).format(b),
        C = i.useCallback(
            async (e) => {
                if (null == f) return;
                let r = (0, c.Ow)(t, e, { include_nsfw: !0 });
                await (0, s.r)(n, t, f.baseChannelId, {
                    modViewPanel: d.k.MESSAGE_HISTORY,
                    additionalSearchQuery: r
                });
            },
            [n, f, t]
        );
    return (0, r.jsx)(a.xJW, {
        title: p.intl.string(p.t.vCn2Tk),
        titleClassName: h.infoTitle,
        children: (0, r.jsxs)(u.WM, {
            children: [
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(a.kBi, {
                        size: 'custom',
                        color: 'currentColor',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: p.intl.string(p.t.OIgYlZ)
                    }),
                    description:
                        m === c.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: _
                              }),
                    onNavigate: m > 0 ? () => C(c.mw.MESSAGES) : void 0
                }),
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(a.xPt, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: p.intl.string(p.t.DFSvTk)
                    }),
                    description:
                        g === c.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: y
                              }),
                    onNavigate: g > 0 ? () => C(c.mw.LINKS) : void 0
                }),
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(a.Ka2, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-default',
                        children: p.intl.string(p.t['Aw9+/P'])
                    }),
                    description:
                        b === c.II
                            ? (0, r.jsx)(a.$jN, {
                                  type: a.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: x
                              }),
                    onNavigate: b > 0 ? () => C(c.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
