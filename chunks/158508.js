r.d(n, {
    Z: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var o = r(442837),
    s = r(704215),
    l = r(481060),
    u = r(194359),
    c = r(377171),
    d = r(243778),
    f = r(922611),
    p = r(240515),
    h = r(699516),
    _ = r(594174),
    m = r(921944),
    g = r(388032),
    E = r(469619);
function v() {
    return (0, a.jsx)(l.TextBadge, {
        color: c.Z.BG_BRAND,
        text: g.intl.string(g.t.y2b7CA)
    });
}
function y(e) {
    let { user: n, guildId: r, channelId: i, onBlock: c, onIgnore: y, onUnignore: b, location: I = 'ContextMenu' } = e,
        { id: T } = n,
        S = (0, o.e7)(
            [_.default],
            () => {
                var e;
                return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === T;
            },
            [T]
        ),
        { isIgnored: A, isBlocked: C } = (0, o.cj)(
            [h.Z],
            () => ({
                isIgnored: h.Z.isIgnored(T),
                isBlocked: h.Z.isBlocked(T)
            }),
            [T]
        ),
        N = (0, f.Do)({ location: 'use-block-user-item-web' }),
        R = N ? [s.z.IGNORE_USER_NEW_BADGE] : [],
        [O, D] = (0, d.US)(R),
        x = O === s.z.IGNORE_USER_NEW_BADGE;
    return !N || S || C
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'ignore',
              color: 'default',
              label: A
                  ? g.intl.string(g.t['8wXU9P'])
                  : (0, a.jsxs)('div', {
                        className: E.label,
                        children: [g.intl.string(g.t.ytCpKi), x ? (0, a.jsx)(v, {}) : null]
                    }),
              action: A
                  ? () => {
                        null == b || b(), u.Z.unignoreUser(T, null != I ? I : 'use-ignore-user-item-web', null != i ? i : void 0);
                    }
                  : () => {
                        x && D(m.L.TAKE_ACTION),
                            (0, l.openModal)((e) =>
                                (0, a.jsx)(p.Z, {
                                    ...e,
                                    guildId: r,
                                    channelId: i,
                                    user: n,
                                    onIgnore: y,
                                    onBlock: c,
                                    location: I
                                })
                            );
                    }
          });
}
