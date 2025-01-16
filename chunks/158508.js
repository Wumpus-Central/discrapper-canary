r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651);
r(192379);
var s = r(442837),
    o = r(704215),
    l = r(481060),
    u = r(194359),
    c = r(377171),
    d = r(243778),
    f = r(922611),
    _ = r(240515),
    h = r(699516),
    p = r(594174),
    m = r(921944),
    g = r(388032),
    E = r(469619);
function v() {
    return (0, a.jsx)(l.TextBadge, {
        color: c.Z.BG_BRAND,
        text: g.intl.string(g.t.y2b7CA)
    });
}
function I(e) {
    let { user: n, guildId: r, channelId: i, onBlock: c, onIgnore: I, onUnignore: T, location: b = 'ContextMenu' } = e,
        { id: y } = n,
        S = (0, s.e7)(
            [p.default],
            () => {
                var e;
                return (null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === y;
            },
            [y]
        ),
        { isIgnored: A, isBlocked: N } = (0, s.cj)(
            [h.Z],
            () => ({
                isIgnored: h.Z.isIgnored(y),
                isBlocked: h.Z.isBlocked(y)
            }),
            [y]
        ),
        C = (0, f.Do)({ location: 'use-block-user-item-web' }),
        R = C ? [o.z.IGNORE_USER_NEW_BADGE] : [],
        [O, D] = (0, d.US)(R),
        L = O === o.z.IGNORE_USER_NEW_BADGE;
    return !C || S || N
        ? null
        : (0, a.jsx)(l.MenuItem, {
              id: 'ignore',
              color: 'default',
              label: A
                  ? g.intl.string(g.t['8wXU9P'])
                  : (0, a.jsxs)('div', {
                        className: E.label,
                        children: [g.intl.string(g.t.ytCpKi), L ? (0, a.jsx)(v, {}) : null]
                    }),
              action: A
                  ? () => {
                        null == T || T(), u.Z.unignoreUser(y, null != b ? b : 'use-ignore-user-item-web', null != i ? i : void 0);
                    }
                  : () => {
                        L && D(m.L.TAKE_ACTION),
                            (0, l.openModal)((e) =>
                                (0, a.jsx)(_.Z, {
                                    ...e,
                                    guildId: r,
                                    channelId: i,
                                    user: n,
                                    onIgnore: I,
                                    onBlock: c,
                                    location: b
                                })
                            );
                    }
          });
}
