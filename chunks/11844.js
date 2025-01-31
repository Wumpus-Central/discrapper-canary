n.d(t, { Z: () => _ });
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(906732),
    a = n(975298),
    o = n(125529),
    c = n(879892),
    d = n(709586),
    u = n(267642),
    m = n(981631),
    h = n(388032),
    g = n(567710);
let _ = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, l.ZP)(),
        { fractionalState: _ } = (0, a.Z)();
    function x(n) {
        null != e.current && (0, r.Mr3)(e.current),
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
    async function p() {
        e.current = await (0, r.ZDy)(
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
                    null != e.current && (0, r.Mr3)(e.current);
                }
            }
        );
    }
    let E = (0, u.aq)({ fractionalState: _ });
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, i.jsx)(d.Z, {
                className: g.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(r.Text, {
                className: g.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: h.intl.format(h.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != E,
                            s = (0, i.jsx)(
                                r.zxk,
                                {
                                    className: g.cta,
                                    disabled: n,
                                    color: r.zxk.Colors.LINK,
                                    look: r.zxk.Looks.LINK,
                                    onClick: n ? void 0 : p,
                                    children: e
                                },
                                t
                            );
                        return n
                            ? (0, i.jsx)(
                                  o.Z,
                                  {
                                      text: E,
                                      'aria-label': E.toString(),
                                      children: (e) =>
                                          (0, i.jsx)('span', {
                                              ...e,
                                              children: s
                                          })
                                  },
                                  t
                              )
                            : s;
                    }
                })
            })
        ]
    });
};
