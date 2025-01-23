t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    r = t(442837),
    a = t(481060),
    u = t(194359),
    o = t(699516),
    d = t(594174),
    s = t(388032);
function c(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ContextMenu',
        { id: t, username: c, bot: Z } = e,
        f = (0, r.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === t;
            },
            [t]
        ),
        [g, m] = (0, r.Wu)([o.Z], () => [o.Z.isFriend(t), o.Z.isBlocked(t)], [t]),
        [M, v] = i.useState(!1);
    return Z || f
        ? null
        : g
          ? (0, l.jsx)(a.MenuItem, {
                id: 'remove-friend',
                label: s.intl.string(s.t.cvSt1N),
                action: function () {
                    (0, a.openModal)((e) =>
                        (0, l.jsx)(a.ConfirmModal, {
                            header: s.intl.formatToPlainString(s.t.fPLvZW, { name: c }),
                            confirmText: s.intl.string(s.t.cvSt1N),
                            cancelText: s.intl.string(s.t['ETE/oK']),
                            onConfirm: () => {
                                u.Z.removeFriend(t, { location: n }), v(!1);
                            },
                            ...e,
                            children: (0, l.jsx)(a.Text, {
                                variant: 'text-md/normal',
                                children: s.intl.format(s.t.l5FFq6, { name: c })
                            })
                        })
                    );
                }
            })
          : (0, l.jsx)(a.MenuItem, {
                id: 'add-friend',
                label: M ? s.intl.string(s.t.xMH6vL) : s.intl.string(s.t.w5uwoK),
                action: () => {
                    !M &&
                        (u.Z.addRelationship({
                            userId: t,
                            context: { location: n }
                        }),
                        v(!0));
                },
                disabled: m || (M && !g)
            });
}
