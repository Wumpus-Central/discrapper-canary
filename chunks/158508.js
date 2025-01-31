n.d(t, { Z: () => E }), n(47120);
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(704215),
    s = n(481060),
    o = n(194359),
    l = n(377171),
    u = n(243778),
    c = n(922611),
    d = n(240515),
    f = n(699516),
    _ = n(594174),
    p = n(921944),
    h = n(388032),
    m = n(469619);
function g() {
    return (0, i.jsx)(s.IGR, {
        color: l.Z.BG_BRAND,
        text: h.intl.string(h.t.y2b7CA)
    });
}
function E(e) {
    let { user: t, guildId: n, channelId: l, onBlock: E, onIgnore: v, onUnignore: y, location: I = 'ContextMenu' } = e,
        { id: b } = t,
        T = (0, r.e7)(
            [_.default],
            () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === b;
            },
            [b]
        ),
        { isIgnored: S, isBlocked: A } = (0, r.cj)(
            [f.Z],
            () => ({
                isIgnored: f.Z.isIgnored(b),
                isBlocked: f.Z.isBlocked(b)
            }),
            [b]
        ),
        N = (0, c.Do)({ location: 'use-block-user-item-web' }),
        C = N ? [a.z.IGNORE_USER_NEW_BADGE] : [],
        [R, O] = (0, u.US)(C),
        D = R === a.z.IGNORE_USER_NEW_BADGE;
    return !N || T || A
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'ignore',
              color: 'default',
              label: S
                  ? h.intl.string(h.t['8wXU9P'])
                  : (0, i.jsxs)('div', {
                        className: m.label,
                        children: [h.intl.string(h.t.ytCpKi), D ? (0, i.jsx)(g, {}) : null]
                    }),
              action: S
                  ? () => {
                        null == y || y(), o.Z.unignoreUser(b, null != I ? I : 'use-ignore-user-item-web', null != l ? l : void 0);
                    }
                  : () => {
                        D && O(p.L.TAKE_ACTION),
                            (0, s.h7j)((e) =>
                                (0, i.jsx)(d.Z, {
                                    ...e,
                                    guildId: n,
                                    channelId: l,
                                    user: t,
                                    onIgnore: v,
                                    onBlock: E,
                                    location: I
                                })
                            );
                    }
          });
}
