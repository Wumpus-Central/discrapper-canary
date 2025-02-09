n.d(t, { Z: () => f }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(320582),
    u = n(699516),
    c = n(594174),
    d = n(388032);
function f(e) {
    let { user: t, location: f = 'ContextMenu', onFriendRequestSent: _, onFriendRemove: p, appContext: h } = e,
        { id: m, username: g, bot: E } = t,
        v = (0, a.e7)(
            [c.default],
            () => {
                var e;
                return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === m;
            },
            [m]
        ),
        y = (0, l.p0)(m),
        [I, T] = (0, a.Wu)([u.Z], () => [u.Z.isFriend(m), u.Z.isBlocked(m)], [m]),
        [b, S] = r.useState(!1);
    if (E || v) return null;
    function A() {
        (0, s.ZDy)(
            async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 878678));
                return (t) =>
                    (0, i.jsx)(e, {
                        header: d.intl.formatToPlainString(d.t.fPLvZW, { name: g }),
                        confirmText: d.intl.string(d.t.cvSt1N),
                        cancelText: d.intl.string(d.t['ETE/oK']),
                        onConfirm: () => {
                            o.Z.removeFriend(m, { location: f }), S(!1), null == p || p();
                        },
                        ...t,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-md/normal',
                            children: d.intl.format(d.t.l5FFq6, { name: g })
                        })
                    });
            },
            { contextKey: null != h ? (0, s.VnL)(h) : void 0 }
        );
    }
    if (I)
        return (0, i.jsx)(s.sNh, {
            id: 'remove-friend',
            label: d.intl.string(d.t.cvSt1N),
            action: A
        });
    {
        let e = y.length > 0 ? d.t.tfnAkJ : d.t.w5uwoK;
        return (0, i.jsx)(s.sNh, {
            id: 'add-friend',
            label: b ? d.intl.string(d.t.xMH6vL) : d.intl.string(e),
            action: () => {
                b ||
                    (o.Z.addRelationship({
                        userId: m,
                        context: { location: f }
                    }),
                    S(!0),
                    null == _ || _());
            },
            disabled: T || (b && !I)
        });
    }
}
