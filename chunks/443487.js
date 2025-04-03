n.d(t, {
    F9: () => C,
    Zb: () => b,
    cA: () => m,
    e$: () => g,
    ll: () => O
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    l = n(442837),
    s = n(481060),
    a = n(686546),
    c = n(271383),
    u = n(430824),
    d = n(594174),
    p = n(5192),
    _ = n(192918),
    f = n(388032),
    h = n(522314);
function m() {
    return (0, r.jsx)('div', {
        className: h.container,
        'aria-hidden': !0
    });
}
function b(e) {
    let { children: t, selected: n } = e;
    return (0, r.jsx)('div', {
        className: o()(h.container, h.openOnHover, { [h.selected]: n }),
        children: t
    });
}
function g(e) {
    let { children: t } = e;
    return (0, r.jsx)('div', {
        className: h.infoSection,
        children: t
    });
}
function E(e) {
    let { users: t, guildId: n, 'aria-hidden': i } = e;
    return (0, r.jsx)('div', {
        className: h.facePile,
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
                          className: h.facePileItem,
                          children: l
                      },
                      e.id
                  )
                : (0, r.jsx)(
                      a.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: h.facePileItem,
                          mask: a.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: l
                      },
                      e.id
                  );
        })
    });
}
function C(e) {
    let { guildId: t, channelId: n, entry: i, maxAvatars: o = 3 } = e,
        a = i.author_id,
        m = (0, l.e7)([d.default], () => d.default.getUser(a)),
        { displayParticipants: b, participant1: g, participant2: C, numOtherParticipants: O } = (0, _.Z)(i, o),
        y = (0, l.e7)([c.ZP], () => c.ZP.getMember(t, a)),
        v = (0, l.e7)(
            [u.Z],
            () => {
                var e;
                return (null == y ? void 0 : y.colorRoleId) != null ? (null == (e = u.Z.getRole(t, y.colorRoleId)) ? void 0 : e.name) : void 0;
            },
            [t, y]
        );
    if (null == m) return null;
    let N = null == y ? void 0 : y.colorString,
        S = p.ZP.getName(t, n, m);
    return (0, r.jsxs)('div', {
        className: h.userSection,
        children: [
            (0, r.jsx)(E, {
                users: b,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, r.jsx)(s.PUh, {
                color: null != N ? N : void 0,
                roleName: v,
                name: S,
                className: h.userName,
                'aria-hidden': !0
            }),
            O > 0
                ? (0, r.jsx)('div', {
                      className: h.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, r.jsxs)(s.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: h.additionalParticipantBadgeText,
                          children: ['+', O]
                      })
                  })
                : null,
            (0, r.jsx)(s.nn4, {
                children: f.NW.format(f.t.rH95Gh, {
                    user0: p.ZP.getName(t, n, g),
                    user1: p.ZP.getName(t, n, C),
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
        className: h.contentTitle,
        lineClamp: 1,
        children: t
    });
}
