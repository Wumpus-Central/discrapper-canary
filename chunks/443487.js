r.d(n, {
    F9: function () {
        return b;
    },
    Zb: function () {
        return E;
    },
    cA: function () {
        return g;
    },
    e$: function () {
        return v;
    },
    ll: function () {
        return I;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(686546),
    c = r(271383),
    d = r(430824),
    f = r(594174),
    p = r(5192),
    h = r(192918),
    _ = r(388032),
    m = r(830677);
function g() {
    return (0, i.jsx)('div', {
        className: m.container,
        'aria-hidden': !0
    });
}
function E(e) {
    let { children: n, selected: r } = e;
    return (0, i.jsx)('div', {
        className: o()(m.container, m.openOnHover, { [m.selected]: r }),
        children: n
    });
}
function v(e) {
    let { children: n } = e;
    return (0, i.jsx)('div', {
        className: m.infoSection,
        children: n
    });
}
function y(e) {
    let { users: n, guildId: r, 'aria-hidden': a } = e;
    return (0, i.jsx)('div', {
        className: m.facePile,
        children: n.map((e, o) => {
            let s = (0, i.jsx)(l.Avatar, {
                src: e.getAvatarURL(r, 80),
                size: l.AvatarSizes.SIZE_16,
                'aria-label': a ? void 0 : e.username,
                'aria-hidden': a
            });
            return o === n.length - 1
                ? (0, i.jsx)(
                      'div',
                      {
                          className: m.facePileItem,
                          children: s
                      },
                      e.id
                  )
                : (0, i.jsx)(
                      u.ZP,
                      {
                          width: 16,
                          height: 16,
                          className: m.facePileItem,
                          mask: u.ZP.Masks.CONTENT_INVENTORY_CARD_FACE_PILE_AVATAR,
                          children: s
                      },
                      e.id
                  );
        })
    });
}
function b(e) {
    let { guildId: n, channelId: r, entry: a, maxAvatars: o = 3 } = e,
        u = a.author_id,
        g = (0, s.e7)([f.default], () => f.default.getUser(u)),
        { displayParticipants: E, participant1: v, participant2: b, numOtherParticipants: I } = (0, h.Z)(a, o),
        T = (0, s.e7)([c.ZP], () => c.ZP.getMember(n, u)),
        S = (0, s.e7)(
            [d.Z],
            () => {
                var e;
                return (null == T ? void 0 : T.colorRoleId) != null ? (null === (e = d.Z.getRole(n, T.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [n, T]
        );
    if (null == g) return null;
    let A = null == T ? void 0 : T.colorString,
        C = p.ZP.getName(n, r, g);
    return (0, i.jsxs)('div', {
        className: m.userSection,
        children: [
            (0, i.jsx)(y, {
                users: E,
                guildId: n,
                'aria-hidden': !0
            }),
            (0, i.jsx)(l.NameWithRole, {
                color: null != A ? A : void 0,
                roleName: S,
                name: C,
                className: m.userName,
                'aria-hidden': !0
            }),
            I > 0
                ? (0, i.jsx)('div', {
                      className: m.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, i.jsxs)(l.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: m.additionalParticipantBadgeText,
                          children: ['+', I]
                      })
                  })
                : null,
            (0, i.jsx)(l.HiddenVisually, {
                children: _.intl.format(_.t.rH95Gh, {
                    user0: p.ZP.getName(n, r, v),
                    user1: p.ZP.getName(n, r, b),
                    countOthers: I,
                    name0Hook: (e, n) => (0, i.jsx)('span', { children: e }, n),
                    name1Hook: (e, n) => (0, i.jsx)('span', { children: e }, n),
                    countOthersHook: (e, n) => (0, i.jsx)('span', { children: e }, n)
                })
            })
        ]
    });
}
function I(e) {
    let { children: n } = e;
    return (0, i.jsx)(l.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: m.contentTitle,
        lineClamp: 1,
        children: n
    });
}
