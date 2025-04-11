n.d(t, {
    F9: () => v,
    Zb: () => E,
    cA: () => g,
    e$: () => b,
    ll: () => O
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(884902),
    u = n(271383),
    d = n(430824),
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
        className: o()(m.container, m.openOnHover, { [m.selected]: n }),
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
        children: t.map((e, o) => {
            let a = (0, r.jsx)(s.qEK, {
                src: e.getAvatarURL(n, 80),
                size: s.EFr.SIZE_16,
                'aria-label': i ? void 0 : e.username,
                'aria-hidden': i
            });
            return o === t.length - 1
                ? (0, r.jsx)(
                      'div',
                      {
                          className: m.facePileItem,
                          children: a
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
                          children: a
                      },
                      e.id
                  );
        })
    });
}
function v(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: o = 3 } = e,
        l = i.author_id,
        g = (0, a.e7)([f.default], () => f.default.getUser(l)),
        { displayParticipants: E, participant1: b, participant2: v, numOtherParticipants: O } = (0, p.Z)(i, o),
        I = (0, a.e7)([u.ZP], () => u.ZP.getMember(t, l)),
        S = (0, a.e7)(
            [d.Z],
            () => {
                var e;
                return (null == I ? void 0 : I.colorRoleId) != null ? (null == (e = d.Z.getRole(t, I.colorRoleId)) ? void 0 : e.name) : void 0;
            },
            [t, I]
        ),
        T = (0, c.X)(t, null == I ? void 0 : I.colorStrings);
    if (null == g) return null;
    let N = null == I ? void 0 : I.colorString,
        A = _.ZP.getName(t, n, g);
    return (0, r.jsxs)('div', {
        className: m.userSection,
        children: [
            (0, r.jsx)(y, {
                users: E,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.PUh, {
                color: null != N ? N : void 0,
                roleName: S,
                roleColors: T,
                name: A,
                className: m.userName,
                'aria-hidden': !0
            }),
            O > 0
                ? (0, r.jsx)('div', {
                      className: m.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: m.additionalParticipantBadgeText,
                          children: ['+', O]
                      })
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: h.NW.format(h.t.rH95Gh, {
                    user0: _.ZP.getName(t, n, b),
                    user1: _.ZP.getName(t, n, v),
                    countOthers: O,
                    name0Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function O(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.X6q, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: m.contentTitle,
        lineClamp: 1,
        children: t
    });
}
