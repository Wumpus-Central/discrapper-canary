n.d(t, { Z: () => p }), n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(922611),
    u = n(478923),
    c = n(681678),
    d = n(699516),
    f = n(594174),
    _ = n(388032);
function p(e) {
    let { user: t, color: n, guildId: p, channelId: h, onBlock: m, onIgnore: g, onUnblock: E, location: v = 'ContextMenu' } = e,
        { id: y } = t,
        I = (0, a.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === y;
            },
            [y]
        ),
        T = (0, a.e7)([d.Z], () => d.Z.isBlocked(y), [y]),
        b = (0, l.Do)({ location: 'use-block-user-item-web' }),
        S = (0, r.EQ)({
            isStealthRemediationEnabled: b,
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
            .otherwise(() => n);
    return I
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'block',
              color: null != S ? S : 'default',
              label: T ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
              action: T
                  ? () => {
                        null == E || E(), o.Z.unblockUser(y, { location: v }), c.Z.showUnblockSuccessToast(y, null != h ? h : void 0);
                    }
                  : () => {
                        (0, s.h7j)((e) =>
                            (0, i.jsx)(u.Z, {
                                ...e,
                                user: t,
                                guildId: p,
                                channelId: h,
                                onBlock: m,
                                onIgnore: g,
                                location: v
                            })
                        );
                    }
          });
}
