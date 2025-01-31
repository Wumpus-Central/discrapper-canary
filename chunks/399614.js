n.d(t, { Z: () => x });
var i = n(200651),
    r = n(192379),
    l = n(399606),
    s = n(481060),
    a = n(710344),
    o = n(734893),
    c = n(8426),
    d = n(969632),
    u = n(922112),
    m = n(388032),
    h = n(934842);
let g = [],
    x = function (e) {
        let { guildId: t } = e,
            x = (0, l.Wu)([d.Z], () => {
                var e;
                return null !== (e = d.Z.getSettings().resourceChannels) && void 0 !== e ? e : g;
            }),
            p = r.useMemo(
                () =>
                    x.map((e) => ({
                        ...e,
                        id: e.channelId
                    })),
                [x]
            ),
            { handleDragStart: _, handleDragReset: C, handleDragComplete: f } = (0, a.Z)(p, c.lq),
            v = r.useCallback(
                (e, n) => {
                    let i = d.Z.getSettings();
                    null != i &&
                        ((0, c.r2)(e),
                        (0, c.oo)(t, i).then(() => {
                            (0, c.mM)(t, e.channelId, n);
                        }));
                },
                [t]
            ),
            N = r.useCallback(() => {
                if (null != t)
                    return (0, s.ZDy)(async () => {
                        let { default: e } = await n.e('84725').then(n.bind(n, 462499));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guildId: t,
                                onSave: c.r2,
                                onIconUpload: v
                            });
                    });
            }, [t, v]);
        return (0, i.jsxs)('div', {
            className: h.editResources,
            children: [
                x.map((e, n) =>
                    (0, i.jsx)(
                        u.Z,
                        {
                            guildId: t,
                            resourceChannel: e,
                            index: n,
                            onDragStart: _,
                            onDragReset: C,
                            onDragComplete: f
                        },
                        e.channelId
                    )
                ),
                x.length < o.x3 &&
                    (0, i.jsxs)(s.P3F, {
                        className: h.addActionItem,
                        onClick: N,
                        children: [
                            (0, i.jsx)(s.oFk, {
                                size: 'xs',
                                color: 'currentColor'
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'none',
                                children: m.intl.string(m.t['w9/qGR'])
                            })
                        ]
                    })
            ]
        });
    };
