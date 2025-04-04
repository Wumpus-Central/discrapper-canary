n.d(t, {
    F9: () => O,
    Zb: () => b,
    cA: () => g,
    e$: () => E,
    ll: () => y
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    a = n(686546),
    c = n(884902),
    u = n(271383),
    d = n(430824),
    p = n(594174),
    _ = n(5192),
    f = n(192918),
    h = n(388032),
    m = n(522314);
function g() {
    return (0, r.jsx)('div', {
        className: m.container,
        'aria-hidden': !0
    });
}
function b(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: o()(m.container, m.openOnHover, { [m.selected]: n }),
        children: t
    });
}
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: m.infoSection,
        children: t
    });
}
function C(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: m.facePile,
        children: t.map((e, o) => {
            let l = (0, r.jsx)(s.qEK, {
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
                          children: l
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      a.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: m.facePileItem,
                          mask: a.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: l
                      },
                      e.id
                  );
        })
    });
}
function O(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: o = 3 } = e,
        a = i.author_id,
        g = (0, l.e7)([p.default], () => p.default.getUser(a)),
        { displayParticipants: b, participant1: E, participant2: O, numOtherParticipants: y } = (0, f.Z)(i, o),
        v = (0, l.e7)([u.ZP], () => u.ZP.getMember(t, a)),
        N = (0, l.e7)(
            [d.Z],
            () => {
                var e;
                return (null == v ? void 0 : v.colorRoleId) != null ? (null == (e = d.Z.getRole(t, v.colorRoleId)) ? void 0 : e.name) : void 0;
            },
            [t, v]
        ),
        S = (0, c.E)(t, null == v ? void 0 : v.colorStrings);
    if (null == g) return null;
    let x = null == v ? void 0 : v.colorString,
        I = _.ZP.getName(t, n, g);
    return (0, r.jsxs)('div', {
        className: m.userSection,
        children: [
            (0, r.jsx)(C, {
                users: b,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.PUh, {
                color: null != x ? x : void 0,
                roleName: N,
                roleGradient: S,
                name: I,
                className: m.userName,
                'aria-hidden': !0
            }),
            y > 0
                ? (0, r.jsx)('div', {
                      className: m.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: m.additionalParticipantBadgeText,
                          children: ['+', y]
                      })
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: h.NW.format(h.t.rH95Gh, {
                    user0: _.ZP.getName(t, n, E),
                    user1: _.ZP.getName(t, n, O),
                    countOthers: y,
                    name0Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, r.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, r.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function y(e) {
    let { children: t } = e;
    return (0, r.jsx)(s.X6q, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: m.contentTitle,
        lineClamp: 1,
        children: t
    });
}
