r.d(n, {
    F9: function () {
        return T;
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
        return b;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(686546),
    c = r(271383),
    d = r(430824),
    f = r(594174),
    _ = r(5192),
    h = r(192918),
    p = r(388032),
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
        className: s()(m.container, m.openOnHover, { [m.selected]: r }),
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
function I(e) {
    let { users: n, guildId: r, 'aria-hidden': a } = e;
    return (0, i.jsx)('div', {
        className: m.facePile,
        children: n.map((e, s) => {
            let o = (0, i.jsx)(l.Avatar, {
                src: e.getAvatarURL(r, 80),
                size: l.AvatarSizes.SIZE_16,
                'aria-label': a ? void 0 : e.username,
                'aria-hidden': a
            });
            return s === n.length - 1
                ? (0, i.jsx)(
                      'div',
                      {
                          className: m.facePileItem,
                          children: o
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
                          children: o
                      },
                      e.id
                  );
        })
    });
}
function T(e) {
    let { guildId: n, channelId: r, entry: a, maxAvatars: s = 3 } = e,
        u = a.author_id,
        g = (0, o.e7)([f.default], () => f.default.getUser(u)),
        { displayParticipants: E, participant1: v, participant2: T, numOtherParticipants: b } = (0, h.Z)(a, s),
        y = (0, o.e7)([c.ZP], () => c.ZP.getMember(n, u)),
        S = (0, o.e7)(
            [d.Z],
            () => {
                var e;
                return (null == y ? void 0 : y.colorRoleId) != null ? (null === (e = d.Z.getRole(n, y.colorRoleId)) || void 0 === e ? void 0 : e.name) : void 0;
            },
            [n, y]
        );
    if (null == g) return null;
    let A = null == y ? void 0 : y.colorString,
        N = _.ZP.getName(n, r, g);
    return (0, i.jsxs)('div', {
        className: m.userSection,
        children: [
            (0, i.jsx)(I, {
                users: E,
                guildId: n,
                'aria-hidden': !0
            }),
            (0, i.jsx)(l.NameWithRole, {
                color: null != A ? A : void 0,
                roleName: S,
                name: N,
                className: m.userName,
                'aria-hidden': !0
            }),
            b > 0
                ? (0, i.jsx)('div', {
                      className: m.additionalParticipantBadge,
                      'aria-hidden': !0,
                      children: (0, i.jsxs)(l.Text, {
                          variant: 'text-xxs/medium',
                          color: 'text-normal',
                          className: m.additionalParticipantBadgeText,
                          children: ['+', b]
                      })
                  })
                : null,
            (0, i.jsx)(l.HiddenVisually, {
                children: p.intl.format(p.t.rH95Gh, {
                    user0: _.ZP.getName(n, r, v),
                    user1: _.ZP.getName(n, r, T),
                    countOthers: b,
                    name0Hook: (e, n) => (0, i.jsx)('span', { children: e }, n),
                    name1Hook: (e, n) => (0, i.jsx)('span', { children: e }, n),
                    countOthersHook: (e, n) => (0, i.jsx)('span', { children: e }, n)
                })
            })
        ]
    });
}
function b(e) {
    let { children: n } = e;
    return (0, i.jsx)(l.Heading, {
        color: 'text-normal',
        variant: 'heading-sm/medium',
        className: m.contentTitle,
        lineClamp: 1,
        children: n
    });
}
