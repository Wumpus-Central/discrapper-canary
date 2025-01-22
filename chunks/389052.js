r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(278074),
    s = r(442837),
    l = r(481060),
    u = r(194359),
    c = r(922611),
    d = r(478923),
    f = r(681678),
    p = r(699516),
    h = r(594174),
    _ = r(388032);
function m(e) {
    let { user: n, color: r, guildId: i, channelId: m, onBlock: g, onIgnore: E, onUnblock: v, location: y = 'ContextMenu' } = e,
        { id: b } = n,
        I = (0, s.e7)(
            [h.default],
            () => {
                var e;
                return (null === (e = h.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === b;
            },
            [b]
        ),
        T = (0, s.e7)([p.Z], () => p.Z.isBlocked(b), [b]),
        S = (0, c.Do)({ location: 'use-block-user-item-web' }),
        A = (0, o.EQ)({
            isStealthRemediationEnabled: S,
            isBlocked: T
        })
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !0
                },
                () => 'default'
            )
            .with(
                {
                    isStealthRemediationEnabled: !0,
                    isBlocked: !1
                },
                () => 'danger'
            )
            .otherwise(() => r);
    return I
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'block',
              color: null != A ? A : 'default',
              label: T ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
              action: T
                  ? () => {
                        null == v || v(), u.Z.unblockUser(b, { location: y }), f.Z.showUnblockSuccessToast(b, null != m ? m : void 0);
                    }
                  : () => {
                        (0, l.openModal)((e) =>
                            (0, a.jsx)(d.Z, {
                                ...e,
                                user: n,
                                guildId: i,
                                channelId: m,
                                onBlock: g,
                                onIgnore: E,
                                location: y
                            })
                        );
                    }
          });
}
