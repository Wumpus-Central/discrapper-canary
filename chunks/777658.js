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
    let { user: t, location: n = 'ContextMenu', onFriendRequestSent: f, onFriendRemove: _ } = e,
        { id: p, username: h, bot: m } = t,
        g = (0, a.e7)(
            [c.default],
            () => {
                var e;
                return (null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === p;
            },
            [p]
        ),
        E = (0, l.p0)(p),
        [v, y] = (0, a.Wu)([u.Z], () => [u.Z.isFriend(p), u.Z.isBlocked(p)], [p]),
        [I, b] = r.useState(!1);
    if (m || g) return null;
    function T() {
        (0, s.h7j)((e) =>
            (0, i.jsx)(s.ConfirmModal, {
                header: d.intl.formatToPlainString(d.t.fPLvZW, { name: h }),
                confirmText: d.intl.string(d.t.cvSt1N),
                cancelText: d.intl.string(d.t['ETE/oK']),
                onConfirm: () => {
                    o.Z.removeFriend(p, { location: n }), b(!1), null == _ || _();
                },
                ...e,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: d.intl.format(d.t.l5FFq6, { name: h })
                })
            })
        );
    }
    if (v)
        return (0, i.jsx)(s.sNh, {
            id: 'remove-friend',
            label: d.intl.string(d.t.cvSt1N),
            action: T
        });
    {
        let e = E.length > 0 ? d.t.tfnAkJ : d.t.w5uwoK;
        return (0, i.jsx)(s.sNh, {
            id: 'add-friend',
            label: I ? d.intl.string(d.t.xMH6vL) : d.intl.string(e),
            action: () => {
                I ||
                    (o.Z.addRelationship({
                        userId: p,
                        context: { location: n }
                    }),
                    b(!0),
                    null == f || f());
            },
            disabled: y || (I && !v)
        });
    }
}
