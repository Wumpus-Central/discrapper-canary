var n = e(477900),
    s = e(582128),
    r = e(858899),
    l = e(732159),
    a = e(253932),
    c = e(365258),
    d = e(929120),
    o = e(481045),
    u = e(792996);
e.d(
    i,
    {},
    {
        default: function (t) {
            let {
                    direction: i,
                    affectedGuildIds: e,
                    settingName: h,
                    mappedActivityValue: f,
                    onClose: j,
                    transitionState: v,
                } = t,
                x = i === c.AI.RESTRICTING,
                { title: C, subtitle: g, confirmText: p, toastContent: m } = (0, c.vz)(x, h),
                I = (0, s.useMemo)(
                    () => () => {
                        (a._Z.updateSetting(f), (0, c.gF)(i, e), (0, r.P0)({ text: m, variant: "success" }));
                    },
                    [f, i, e, m],
                ),
                k = (0, s.useCallback)(() => {
                    (j(), (0, o.L7)());
                }, [j]);
            return (0, n.jsx)(l.u, {
                title: C,
                subtitle: g,
                confirmText: p,
                cancelText: u.intl.string(u.t.X1rGEm),
                variant: "primary",
                onConfirm: I,
                onClose: j,
                transitionState: v,
                children: (0, n.jsx)(d.n, { guildIds: e, direction: i, onClick: k }),
            });
        },
    },
);
