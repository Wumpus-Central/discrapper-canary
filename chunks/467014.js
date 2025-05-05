n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    a = n(433355),
    s = n(189432),
    c = n(356778),
    u = n(776767),
    d = n(50493),
    p = n(388032),
    h = n(12740);
function f(e) {
    let { userId: t, guildId: n } = e,
        f = (0, l.e7)([a.ZP], () => a.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: m, linksCount: g, mediaCount: b } = (0, c.P2)(t, n),
        _ = new Intl.NumberFormat(p.intl.currentLocale).format(m),
        y = new Intl.NumberFormat(p.intl.currentLocale).format(g),
        C = new Intl.NumberFormat(p.intl.currentLocale).format(b),
        x = i.useCallback(
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
    return (0, r.jsx)(o.xJW, {
        title: p.intl.string(p.t.vCn2Tk),
        titleClassName: h.infoTitle,
        children: (0, r.jsxs)(u.WM, {
            children: [
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(o.kBi, {
                        size: 'custom',
                        color: 'currentColor',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: p.intl.string(p.t.OIgYlZ)
                    }),
                    description:
                        m === c.II
                            ? (0, r.jsx)(o.$jN, {
                                  type: o.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: _
                              }),
                    onNavigate: m > 0 ? () => x(c.mw.MESSAGES) : void 0
                }),
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(o.xPt, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: p.intl.string(p.t.DFSvTk)
                    }),
                    description:
                        g === c.II
                            ? (0, r.jsx)(o.$jN, {
                                  type: o.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: y
                              }),
                    onNavigate: g > 0 ? () => x(c.mw.LINKS) : void 0
                }),
                (0, r.jsx)(u._2, {
                    icon: (0, r.jsx)(o.Ka2, {
                        size: 'custom',
                        width: u.Mn,
                        height: u.Mn
                    }),
                    name: (0, r.jsx)(o.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: p.intl.string(p.t['Aw9+/P'])
                    }),
                    description:
                        b === c.II
                            ? (0, r.jsx)(o.$jN, {
                                  type: o.RAz.SPINNING_CIRCLE,
                                  className: h.loadingSpinner
                              })
                            : (0, r.jsx)(o.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: C
                              }),
                    onNavigate: b > 0 ? () => x(c.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
