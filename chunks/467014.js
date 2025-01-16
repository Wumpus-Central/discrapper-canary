n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(433355),
    o = n(189432),
    c = n(356778),
    d = n(776767),
    u = n(50493),
    h = n(388032),
    p = n(758570);
function m(e) {
    let { userId: t, guildId: n } = e,
        m = (0, r.e7)([s.ZP], () => s.ZP.getGuildSidebarState(n), [n]),
        { messagesCount: f, linksCount: g, mediaCount: C } = (0, c.P2)(t, n),
        x = new Intl.NumberFormat(h.intl.currentLocale).format(f),
        v = new Intl.NumberFormat(h.intl.currentLocale).format(g),
        _ = new Intl.NumberFormat(h.intl.currentLocale).format(C),
        I = l.useCallback(
            async (e) => {
                if (null == m) return;
                let i = (0, c.Ow)(t, e);
                await (0, o.r)(n, t, m.baseChannelId, {
                    modViewPanel: u.k.MESSAGE_HISTORY,
                    additionalSearchQuery: i
                });
            },
            [n, m, t]
        );
    return (0, i.jsx)(a.FormItem, {
        title: h.intl.string(h.t.vCn2Tk),
        titleClassName: p.infoTitle,
        children: (0, i.jsxs)(d.WM, {
            children: [
                (0, i.jsx)(d._2, {
                    icon: (0, i.jsx)(a.ChatIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: d.Mn,
                        height: d.Mn
                    }),
                    name: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t.OIgYlZ)
                    }),
                    description:
                        f === c.II
                            ? (0, i.jsx)(a.Spinner, {
                                  type: a.SpinnerTypes.SPINNING_CIRCLE,
                                  className: p.loadingSpinner
                              })
                            : (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: x
                              }),
                    onNavigate: f > 0 ? () => I(c.mw.MESSAGES) : void 0
                }),
                (0, i.jsx)(d._2, {
                    icon: (0, i.jsx)(a.LinkIcon, {
                        size: 'custom',
                        width: d.Mn,
                        height: d.Mn
                    }),
                    name: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t.DFSvTk)
                    }),
                    description:
                        g === c.II
                            ? (0, i.jsx)(a.Spinner, {
                                  type: a.SpinnerTypes.SPINNING_CIRCLE,
                                  className: p.loadingSpinner
                              })
                            : (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: v
                              }),
                    onNavigate: g > 0 ? () => I(c.mw.LINKS) : void 0
                }),
                (0, i.jsx)(d._2, {
                    icon: (0, i.jsx)(a.ImagesIcon, {
                        size: 'custom',
                        width: d.Mn,
                        height: d.Mn
                    }),
                    name: (0, i.jsx)(a.Text, {
                        variant: 'text-sm/semibold',
                        color: 'text-normal',
                        children: h.intl.string(h.t['Aw9+/P'])
                    }),
                    description:
                        C === c.II
                            ? (0, i.jsx)(a.Spinner, {
                                  type: a.SpinnerTypes.SPINNING_CIRCLE,
                                  className: p.loadingSpinner
                              })
                            : (0, i.jsx)(a.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: _
                              }),
                    onNavigate: C > 0 ? () => I(c.mw.MEDIA) : void 0
                })
            ]
        })
    });
}
