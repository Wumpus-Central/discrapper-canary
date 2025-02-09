n.d(t, { Z: () => x });
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(906732),
    a = n(975298),
    o = n(125529),
    c = n(879892),
    d = n(709586),
    u = n(267642),
    h = n(981631),
    m = n(388032),
    g = n(20410);
let x = function () {
    let e = s.useRef(null),
        { analyticsLocations: t } = (0, r.ZP)(),
        { fractionalState: x } = (0, a.Z)();
    function _(n) {
        null != e.current && (0, l.Mr3)(e.current),
            (0, c.u)({
                analyticsLocation: {
                    page: h.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: h.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: h.qAy.BUTTON_CTA,
                    objectType: h.Qqv.BUY
                },
                analyticsLocations: t,
                guild: n
            });
    }
    async function p() {
        e.current = await (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 719228));
                return (t) =>
                    (0, i.jsx)(e, {
                        ...t,
                        onSelectGuild: _
                    });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, l.Mr3)(e.current);
                }
            }
        );
    }
    let E = (0, u.aq)({ fractionalState: x });
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, i.jsx)(d.Z, {
                className: g.boostIcon,
                width: 16,
                height: 16
            }),
            (0, i.jsx)(l.Text, {
                className: g.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: m.intl.format(m.t.kqC5vr, {
                    boostAnyGuildHook: (e, t) => {
                        let n = null != E,
                            s = (0, i.jsx)(
                                l.zxk,
                                {
                                    className: g.cta,
                                    disabled: n,
                                    color: l.zxk.Colors.LINK,
                                    look: l.zxk.Looks.LINK,
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
