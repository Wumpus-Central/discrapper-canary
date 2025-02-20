n.d(t, {
    F9: () => b,
    Zb: () => g,
    cA: () => m,
    e$: () => E,
    ll: () => y
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(686546),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    f = n(5192),
    p = n(192918),
    _ = n(388032),
    h = n(62545);
function m() {
    return (0, r.jsx)('div', {
        className: h.container,
        'aria-hidden': !0
    });
}
function g(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: o()(h.container, h.openOnHover, { [h.selected]: n }),
        children: t
    });
}
function E(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: h.infoSection,
        children: t
    });
}
function v(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: h.facePile,
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
                          className: h.facePileItem,
                          children: a
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: h.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: a
                      },
                      e.id
                  );
        })
    });
}
function b(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: o = 3 } = e,
        l = i.author_id,
        m = (0, a.e7)([d.default], () => d.default.getUser(l)),
        { displayParticipants: g, participant1: E, participant2: b, numOtherParticipants: y } = (0, p.Z)(i, o),
        O = (0, a.e7)([c.ZP], () => c.ZP.getMember(t, l)),
        S = (0, a.e7)(
            [u.Z],
            () => {
                var e;
                return (null == O ? void 0 : O.colorRoleId) != null ? (null === (e = u.Z.getRole(t, O.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [t, O]
        );
    if (null == m) return null;
    let I = null == O ? void 0 : O.colorString,
        T = f.ZP.getName(t, n, m);
    return (0, r.jsxs)('div', {
        className: h.userSection,
        children: [
            (0, r.jsx)(v, {
                users: g,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.PUh, {
                color: null != I ? I : void 0,
                roleName: S,
                name: T,
                className: h.userName,
                'aria-hidden': !0
            }),
            y > 0
                ? (0, r.jsx)('div', {
                      className: h.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: h.additionalParticipantBadgeText,
                          children: ['+', y]
                      })
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: _.NW.format(_.t.rH95Gh, {
                    user0: f.ZP.getName(t, n, E),
                    user1: f.ZP.getName(t, n, b),
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
        className: h.contentTitle,
        lineClamp: 1,
        children: t
    });
}
