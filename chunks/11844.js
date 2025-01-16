var i = n(200651),
    r = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(975298),
    o = n(125529),
    c = n(879892),
    d = n(709586),
    u = n(267642),
    m = n(981631),
    g = n(388032),
    h = n(567710);
t.Z = function () {
    let e = r.useRef(null),
        { analyticsLocations: t } = (0, a.ZP)(),
        { fractionalState: p } = (0, l.Z)();
    function x(n) {
        null != e.current && (0, s.closeModal)(e.current),
            (0, c.u)({
                analyticsLocation: {
                    page: m.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: m.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: m.qAy.BUTTON_CTA,
                    objectType: m.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            });
    }
    async function f() {
        e.current = await (0, s.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSelectGuild: x
                    });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, s.closeModal)(e.current);
                }
            }
        );
    }
    let _ = (0, u.aq)({ fractionalState: p });
    return (0, i.jsxs)('div', {
        className: h.wrapper,
        children: [
            (0, i.jsx)(d.Z, {
                className: h.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(s.Text, {
                className: h.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: g.intl.format(g.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != _,
                            r = (0, i.jsx)(
                                s.Button,
                                {
                                    className: h.cta,
                                    disabled: n,
                                    color: s.Button.Colors.LINK,
                                    look: s.Button.Looks.LINK,
                                    onClick: n ? void 0 : f,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      text: _,
                                      'aria-label': _.toString(),
                                      children: (e) =>
                                          (0, i.jsx)('span', {
                                              ...e,
                                              children: r
                                          })
                                  },
                                  t
                              )
                            : r;
                    }
                })
            })
        ]
    });
};
