n.d(t, {
    F9: () => y,
    Zb: () => g,
    cA: () => m,
    e$: () => E,
    ll: () => I
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(686546),
    u = n(271383),
    c = n(430824),
    d = n(594174),
    f = n(5192),
    _ = n(192918),
    p = n(388032),
    h = n(830677);
function m() {
    return (0, i.jsx)('div', {
        className: h.container,
        'aria-hidden': !0
    });
}
function g(e) {
    let { children: t, selected: n } = e;
    return (0, i.jsx)('div', {
        className: a()(h.container, h.openOnHover, { [h.selected]: n }),
        children: t
    });
}
function E(e) {
    let { children: t } = e;
    return (0, i.jsx)('div', {
        className: h.infoSection,
        children: t
    });
}
function v(e) {
    let { users: t, guildId: n, 'aria-hidden': r } = e;
    return (0, i.jsx)('div', {
        className: h.facePile,
        children: t.map((e, a) => {
            let s = (0, i.jsx)(o.qEK, {
                src: e.getAvatarURL(n, 80),
                size: o.EFr.SIZE_16,
                'aria-label': r ? void 0 : e.username,
                'aria-hidden': r
            });
            return a === t.length - 1
                ? (0, i.jsx)(
                      'div',
                      {
                          className: h.facePileItem,
                          children: s
                      },
                      e.id
                  )
                : (0, i.jsx)(
                      l.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: h.facePileItem,
                          mask: l.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s
                      },
                      e.id
                  );
        })
    });
}
function y(e) {
    let { guildId: t, channelId: n, entry: r, maxAvatars: a = 3 } = e,
        l = r.author_id,
        m = (0, s.e7)([d.default], () => d.default.getUser(l)),
        { displayParticipants: g, participant1: E, participant2: y, numOtherParticipants: I } = (0, _.Z)(r, a),
        b = (0, s.e7)([u.ZP], () => u.ZP.getMember(t, l)),
        T = (0, s.e7)(
            [c.Z],
            () => {
                var e;
                return (null == b ? void 0 : b.colorRoleId) != null ? (null === (e = c.Z.getRole(t, b.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [t, b]
        );
    if (null == m) return null;
    let S = null == b ? void 0 : b.colorString,
        A = f.ZP.getName(t, n, m);
    return (0, i.jsxs)('div', {
        className: h.userSection,
        children: [
            (0, i.jsx)(v, {
                users: g,
                guildId: t,
                'aria-hidden': !0
            }),
            (0, i.jsx)(o.PUh, {
                color: null != S ? S : void 0,
                roleName: T,
                name: A,
                className: h.userName,
                'aria-hidden': !0
            }),
            I > 0
                ? (0, i.jsx)('div', {
                      className: h.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, i.jsxs)(o.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: h.additionalParticipantBadgeText,
                          children: ['+', I]
                      })
                  })
                : null,
            (0, i.jsx)(o.nn4, {
                children: p.intl.format(p.t.rH95Gh, {
                    user0: f.ZP.getName(t, n, E),
                    user1: f.ZP.getName(t, n, y),
                    countOthers: I,
                    name0Hook: (e, t) => (0, i.jsx)('span', { children: e }, t),
                    name1Hook: (e, t) => (0, i.jsx)('span', { children: e }, t),
                    countOthersHook: (e, t) => (0, i.jsx)('span', { children: e }, t)
                })
            })
        ]
    });
}
function I(e) {
    let { children: t } = e;
    return (0, i.jsx)(o.X6q, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: h.contentTitle,
        lineClamp: 1,
        children: t
    });
}
