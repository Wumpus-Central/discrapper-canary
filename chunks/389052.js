n.d(t, { Z: () => p }), n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(922611),
    u = n(681678),
    c = n(699516),
    d = n(594174),
    f = n(981631),
    _ = n(388032);
function p(e) {
    let { user: t, color: p, guildId: h, channelId: m, onBlock: g, onIgnore: E, onUnblock: v, location: y = 'ContextMenu', appContext: I = f.IlC.APP } = e,
        { id: T } = t,
        b = (0, a.e7)(
            [d.default],
            () => {
                var e;
                return (null === (e = d.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T;
            },
            [T]
        ),
        S = (0, a.e7)([c.Z], () => c.Z.isBlocked(T), [T]),
        A = (0, l.Do)({ location: 'use-block-user-item-web' }),
        N = (0, r.EQ)({
            isStealthRemediationEnabled: A,
            isBlocked: S
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
            .otherwise(() => p);
    return b
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'block',
              color: null != N ? N : 'default',
              label: S ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
              action: S
                  ? () => {
                        null == v || v(), o.Z.unblockUser(T, { location: y }), u.Z.showUnblockSuccessToast(T, null != m ? m : void 0);
                    }
                  : () => {
                        (0, s.ZDy)(
                            async () => {
                                let { default: e } = await n.e('97652').then(n.bind(n, 478923));
                                return (n) =>
                                    (0, i.jsx)(e, {
                                        ...n,
                                        user: t,
                                        guildId: h,
                                        channelId: m,
                                        onBlock: g,
                                        onIgnore: E,
                                        location: y
                                    });
                            },
                            { contextKey: (0, s.VnL)(I) }
                        );
                    }
          });
}
