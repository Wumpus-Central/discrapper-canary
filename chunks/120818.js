n.d(t, { T: () => v });
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(481060),
    s = n(44315),
    c = n(563534),
    d = n(846121),
    u = n(703656),
    h = n(259580),
    p = n(981631),
    m = n(176505),
    g = n(388032),
    f = n(326252);
function _(e, t) {
    return (0, i.jsx)(
        o.Text,
        {
            variant: 'text-xs/bold',
            color: 'text-normal',
            children: e
        },
        t
    );
}
let v = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
        v = (0, a.e7)([d.Z], () => d.Z.getCompletedActions(t.id)),
        C = l.useMemo(() => {
            if (null == n || null == v) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != v[t.channelId] && e++;
                }),
                e
            );
        }, [v, n]),
        x = null == n ? 0 : n.length,
        I = (0, r.JA)('progress-bar-'.concat(t.id));
    return (0, i.jsxs)('li', {
        children: [
            (0, i.jsxs)(o.P3F, {
                ...I,
                role: 'button',
                focusProps: { offset: { right: 4 } },
                className: f.progressBarContainer,
                onClick: function () {
                    (0, u.uL)(p.Z5c.CHANNEL(t.id, m.oC.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: f.progressBarText,
                        children: [
                            (0, i.jsx)(o.X6q, {
                                variant: 'heading-sm/bold',
                                children: g.intl.string(g.t.SnrR39)
                            }),
                            (0, i.jsxs)('div', {
                                className: f.rightContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        className: f.rightText,
                                        children: g.intl.format(g.t.eqZ1lZ, {
                                            numberHook: _,
                                            total: x.toString(),
                                            completed: C.toString()
                                        })
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: f.arrow,
                                        width: 16,
                                        height: 16,
                                        direction: h.Z.Directions.RIGHT
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Exd, {
                        className: f.progressBar,
                        foregroundGradientColor: [(0, s.Lq)(p.Ilk.GREEN_300), (0, s.Lq)(p.Ilk.GREEN_230)],
                        percent: (C / x) * 100 + 3,
                        animate: !0
                    })
                ]
            }),
            (0, i.jsx)('div', {
                role: 'separator',
                className: f.divider
            })
        ]
    });
});
