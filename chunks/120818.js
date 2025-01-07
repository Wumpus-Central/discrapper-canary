n.d(t, {
    T: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(481060),
    s = n(44315),
    c = n(563534),
    u = n(846121),
    d = n(703656),
    h = n(259580),
    p = n(981631),
    f = n(176505),
    m = n(388032),
    g = n(47622);
function v(e, t) {
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
let C = l.memo(function (e) {
    let { guild: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.getNewMemberActions(t.id), [t.id]),
        C = (0, a.e7)([u.Z], () => u.Z.getCompletedActions(t.id)),
        x = l.useMemo(() => {
            if (null == n || null == C) return 0;
            let e = 0;
            return (
                n.forEach((t) => {
                    null != C[t.channelId] && e++;
                }),
                e
            );
        }, [C, n]),
        I = null == n ? 0 : n.length,
        _ = (0, r.JA)('progress-bar-'.concat(t.id));
    return (0, i.jsxs)('li', {
        children: [
            (0, i.jsxs)(o.Clickable, {
                ..._,
                role: 'button',
                focusProps: { offset: { right: 4 } },
                className: g.progressBarContainer,
                onClick: function () {
                    (0, d.uL)(p.Z5c.CHANNEL(t.id, f.oC.GUILD_HOME));
                },
                children: [
                    (0, i.jsxs)('div', {
                        className: g.progressBarText,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                variant: 'heading-sm/bold',
                                children: m.intl.string(m.t.SnrR39)
                            }),
                            (0, i.jsxs)('div', {
                                className: g.rightContainer,
                                children: [
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        color: 'text-muted',
                                        className: g.rightText,
                                        children: m.intl.format(m.t.eqZ1lZ, {
                                            numberHook: v,
                                            total: I.toString(),
                                            completed: x.toString()
                                        })
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        className: g.arrow,
                                        width: 16,
                                        height: 16,
                                        direction: h.Z.Directions.RIGHT
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)(o.Progress, {
                        className: g.progressBar,
                        foregroundGradientColor: [(0, s.Lq)(p.Ilk.GREEN_300), (0, s.Lq)(p.Ilk.GREEN_230)],
                        percent: (x / I) * 100 + 3,
                        animate: !0
                    })
                ]
            }),
            (0, i.jsx)('div', {
                role: 'separator',
                className: g.divider
            })
        ]
    });
});
