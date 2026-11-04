var n = e(477900),
    s = e(582128),
    r = e(858899),
    l = e(732159),
    a = e(253932),
    c = e(365258),
    d = e(929120),
    u = e(481045),
    o = e(792996);
e.d(
    i,
    {},
    {
        default: function (t) {
            let {
                    direction: i,
                    affectedGuildIds: e,
                    settingName: f,
                    mappedActivityValue: h,
                    onClose: j,
                    transitionState: v,
                } = t,
                x = i === c.AI.RESTRICTING,
                { title: p, subtitle: C, confirmText: g, toastContent: k } = (0, c.vz)(x, f),
                m = (0, s.useMemo)(
                    () => () => {
                        (a._Z.updateSetting(h), (0, c.gF)(i, e), (0, r.P0)({ text: k, variant: "success" }));
                    },
                    [h, i, e, k],
                ),
                A = (0, s.useCallback)(() => {
                    (j(), (0, u.L7)());
                }, [j]);
            return (0, n.jsx)(l.u, {
                title: p,
                subtitle: C,
                confirmText: g,
                cancelText: o.intl.string(o.t.X1rGEm),
                variant: "primary",
                onConfirm: m,
                onClose: j,
                transitionState: v,
                children: (0, n.jsx)(d.n, { guildIds: e, direction: i, onClick: A }),
            });
        },
    },
);
