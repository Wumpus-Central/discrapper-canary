n.d(t, {
    F9: () => O,
    Zb: () => E,
    cA: () => g,
    e$: () => b,
    ll: () => v
});
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(884902),
    u = n(271383),
    d = n(485386),
    f = n(594174),
    _ = n(5192),
    p = n(192918),
    h = n(388032),
    m = n(522314);
function g() {
    return (0, r.jsx)('div', {
        className: m.container,
        'aria-hidden': !0
    });
}
function E(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: a()(m.container, m.openOnHover, { [m.selected]: n }),
        children: t
    });
}
function b(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: m.infoSection,
        children: t
    });
}
function y(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: m.facePile,
        children: t.map((e, a) => {
            let o = (0, r.jsx)(s.qEK, {
                src: e.getAvatarURL(n, 80),
                size: s.EFr.SIZE_16,
                'aria-label': i ? void 0 : e.username,
                'aria-hidden': i
            });
            return a === t.length - 1
                ? (0, r.jsx)(
                      'div',
                      {
                          className: m.facePileItem,
                          children: o
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: m.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: o
                      },
                      e.id
                  );
        })
    });
}
function O(e) {
    var t;
    let { guildId: n, channelId: i, entry: a, maxAvatars: l = 3 } = e,
        g = a.author_id,
        E = (0, o.e7)([f.default], () => f.default.getUser(g)),
        { displayParticipants: b, participant1: O, participant2: v, numOtherParticipants: I } = (0, p.Z)(a, l),
        T = (0, o.e7)([u.ZP], () => u.ZP.getMember(n, g)),
        S = (0, o.e7)(
            [d.Z],
            () => {
                var e;
                return (null == T ? void 0 : T.colorRoleId) != null ? (null == (e = d.Z.getRole(n, T.colorRoleId)) ? void 0 : e.name) : void 0;
            },
            [n, T]
        ),
        A = (0, c.X7)(n, g, null != (t = null == T ? void 0 : T.colorStrings) ? t : null);
    if (null == E) return null;
    let N = null == T ? void 0 : T.colorString,
        C = _.ZP.getName(n, i, E);
    return (0, r.jsxs)('div', {
        className: m.userSection,
        children: [
            (0, r.jsx)(y, {
                users: b,
                guildId: n,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.PUh, {
                colorString: null != N ? N : null,
                roleName: S,
                colorStrings: A,
                name: C,
                className: m.userName,
                'aria-hidden': !0
            }),
            I > 0
                ? (0, r.jsx)('div', {
                      className: m.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-default',
                          className: m.additionalParticipantBadgeText,
                          children: ['+', I]
                      })
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: h.intl.format(h.t.rH95Gh, {
                    user0: _.ZP.getName(n, i, O),
                    user1: _.ZP.getName(n, i, v),
                    countOthers: I,
                    name0Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function v(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.X6q, {
        color: 'text-default',
        variant: 'heading-sm/medium',
        className: m.contentTitle,
        lineClamp: 1,
        children: t
    });
}
