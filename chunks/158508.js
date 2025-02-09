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
    d = n(699516),
    f = n(594174),
    _ = n(981631),
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
    let { user: t, guildId: l, channelId: E, onBlock: v, onIgnore: y, onUnignore: I, location: T = 'ContextMenu', appContext: b = _.IlC.APP } = e,
        { id: S } = t,
        A = (0, r.e7)(
            [f.default],
            () => {
                var e;
                return (null === (e = f.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === S;
            },
            [S]
        ),
        { isIgnored: N, isBlocked: C } = (0, r.cj)(
            [d.Z],
            () => ({
                isIgnored: d.Z.isIgnored(S),
                isBlocked: d.Z.isBlocked(S)
            }),
            [S]
        ),
        R = (0, c.Do)({ location: 'use-block-user-item-web' }),
        O = R ? [a.z.IGNORE_USER_NEW_BADGE] : [],
        [D, L] = (0, u.US)(O),
        x = D === a.z.IGNORE_USER_NEW_BADGE;
    return !R || A || C
        ? null
        : (0, i.jsx)(s.sNh, {
              id: 'ignore',
              color: 'default',
              label: N
                  ? h.intl.string(h.t['8wXU9P'])
                  : (0, i.jsxs)('div', {
                        className: m.label,
                        children: [h.intl.string(h.t.ytCpKi), x ? (0, i.jsx)(g, {}) : null]
                    }),
              action: N
                  ? () => {
                        null == I || I(), o.Z.unignoreUser(S, null != T ? T : 'use-ignore-user-item-web', null != E ? E : void 0);
                    }
                  : () => {
                        x && L(p.L.TAKE_ACTION),
                            (0, s.ZDy)(
                                async () => {
                                    let { default: e } = await n.e('97652').then(n.bind(n, 240515));
                                    return (n) =>
                                        (0, i.jsx)(e, {
                                            ...n,
                                            guildId: l,
                                            channelId: E,
                                            user: t,
                                            onIgnore: y,
                                            onBlock: v,
                                            location: T
                                        });
                                },
                                { contextKey: (0, s.VnL)(b) }
                            );
                    }
          });
}
