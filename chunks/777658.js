n.d(t, { Z: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(699516),
    u = n(594174),
    c = n(388032);
function d(e) {
    let { user: t, location: n = 'ContextMenu', onFriendRequestSent: d, onFriendRemove: f } = e,
        { id: _, username: p, bot: h } = t,
        m = (0, a.e7)(
            [u.default],
            () => {
                var e;
                return (null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === _;
            },
            [_]
        ),
        [g, E] = (0, a.Wu)([l.Z], () => [l.Z.isFriend(_), l.Z.isBlocked(_)], [_]),
        [v, y] = r.useState(!1);
    if (h || m) return null;
    function I() {
        (0, s.h7j)((e) =>
            (0, i.jsx)(s.ConfirmModal, {
                header: c.intl.formatToPlainString(c.t.fPLvZW, { name: p }),
                confirmText: c.intl.string(c.t.cvSt1N),
                cancelText: c.intl.string(c.t['ETE/oK']),
                onConfirm: () => {
                    o.Z.removeFriend(_, { location: n }), y(!1), null == f || f();
                },
                ...e,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-md/normal',
                    children: c.intl.format(c.t.l5FFq6, { name: p })
                })
            })
        );
    }
    return g
        ? (0, i.jsx)(s.sNh, {
              id: 'remove-friend',
              label: c.intl.string(c.t.cvSt1N),
              action: I
          })
        : (0, i.jsx)(s.sNh, {
              id: 'add-friend',
              label: v ? c.intl.string(c.t.xMH6vL) : c.intl.string(c.t.w5uwoK),
              action: () => {
                  v ||
                      (o.Z.addRelationship({
                          userId: _,
                          context: { location: n }
                      }),
                      y(!0),
                      null == d || d());
              },
              disabled: E || (v && !g)
          });
}
