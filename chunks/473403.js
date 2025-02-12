n.d(t, {
    Z: () => P,
    _: () => v
});
var r = n(200651),
    l = n(192379),
    i = n(120356),
    a = n.n(i),
    s = n(91192),
    o = n(442837),
    E = n(481060),
    u = n(43267),
    c = n(933557),
    _ = n(471445),
    d = n(111028),
    A = n(727429),
    T = n(810123),
    I = n(690221),
    N = n(430824),
    g = n(158776),
    O = n(111583),
    R = n(594174),
    S = n(998502),
    U = n(981631),
    f = n(490897),
    D = n(952107),
    L = n(397923);
let C = {
    SELECTED: L.modeSelected,
    CONNECTED: L.modeConnected,
    UNREAD_IMPORTANT: L.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: L.modeUnreadLessImportant,
    MUTED: L.modeMuted,
    LOCKED: L.modeLocked
};
function M(e) {
    e.preventDefault(), e.stopPropagation();
}
let h = S.ZP.getEnableHardwareAcceleration() ? E.Xo$ : E.qEK;
function p(e) {
    let { channel: t } = e;
    return (0, r.jsx)(h, {
        src: (0, u.x)(t),
        'aria-hidden': !0,
        size: E.EFr.SIZE_20
    });
}
function m(e) {
    let { channel: t } = e,
        n = (0, o.e7)([R.default], () => R.default.getUser(null == t ? void 0 : t.recipients[0])),
        l = (0, o.e7)([O.Z], () => !(null == n || null == t || t.isMultiUserDM()) && null != O.Z.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]),
        { status: i, isMobile: a } = (0, o.cj)([g.Z], () =>
            null == n || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: g.Z.getStatus(n.id),
                      isMobile: g.Z.isMobileOnline(n.id)
                  }
        );
    return (0, r.jsx)(h, {
        size: E.EFr.SIZE_20,
        src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
        status: i,
        isMobile: a,
        isTyping: l,
        'aria-label': null == n ? void 0 : n.username,
        statusTooltip: !0
    });
}
let v = (e) => {
    let { className: t, channel: n, locked: l, hasActiveThreads: i, withGuildIcon: s } = e,
        u = (0, o.e7)([N.Z], () => N.Z.getGuild(n.guild_id), [n.guild_id]),
        c = n.type === U.d4z.DM || n.type === U.d4z.GROUP_DM,
        d = null;
    if (s && null != u && !c)
        d = (0, r.jsx)(T.Z, {
            size: T.E.SMALL_32,
            className: L.iconContainerWithGuildIcon,
            iconClassName: L.iconWithGuildIcon,
            channel: n,
            guild: u,
            locked: l,
            hasActiveThreads: i
        });
    else {
        let e = (function (e, t, n) {
            switch (e.type) {
                case U.d4z.DM:
                    return function () {
                        return (0, r.jsx)(m, { channel: e });
                    };
                case U.d4z.GROUP_DM:
                    return function () {
                        return (0, r.jsx)(p, { channel: e });
                    };
                default:
                    return (0, _.KS)(e, t, n);
            }
        })(n, u, {
            locked: l,
            hasActiveThreads: i
        });
        if (null == e) return null;
        d = (0, r.jsx)(e, {
            color: 'currentColor',
            className: a()(L.icon, t)
        });
    }
    let A = s ? (null == u ? void 0 : u.name) : (0, _.bT)(n, u, l, i),
        I = s && null != u ? ''.concat(u.name, ' - ').concat(A, ' icon') : ''.concat(A, ' icon');
    return (0, r.jsx)(E.ua7, {
        text: A,
        delay: 500,
        children: (e) =>
            (0, r.jsx)('div', {
                ...e,
                role: 'img',
                'aria-label': I,
                className: a()(L.iconContainer),
                children: d
            })
    });
};
function P(e) {
    var t;
    let {
            channel: n,
            name: i,
            muted: o,
            selected: u,
            connected: _,
            unread: T,
            locked: N,
            hasActiveThreads: g,
            onClick: O,
            onMouseDown: R,
            onMouseUp: S,
            onContextMenu: h,
            connectDragPreview: p,
            className: m,
            iconClassName: P,
            subtitle: b,
            subtitleColor: x,
            channel: { type: G },
            onMouseEnter: F,
            onMouseLeave: V,
            'aria-label': y,
            children: B,
            guild: j,
            channelTypeOverride: z,
            forceInteractable: H,
            mentionCount: k,
            resolvedUnreadSetting: w,
            isFavoriteSuggestion: K,
            withGuildIcon: Z,
            hasActiveEvent: W = !1
        } = e,
        Y = w === f.i.ALL_MESSAGES || (null != k && k > 0),
        { role: q, ...X } = (0, s.JA)(n.id),
        J = l.useRef(null),
        Q = l.useRef(null),
        $ = (0, A.Z)(n),
        ee = U.Z5c.CHANNEL($, n.id),
        et = (0, c.ZP)(n),
        en = n.isGuildVocal(),
        er = (0, r.jsx)('div', {
            className: a()({ [L.favoritesSuggestion]: K }),
            ref: Q,
            children: (0, r.jsxs)(I.Z, {
                role: en && !_ ? 'button' : 'link',
                href: en ? void 0 : ee,
                target: '_blank',
                ref: J,
                className: L.link,
                onClick: () => (null == O ? void 0 : O(n)),
                ...X,
                'aria-label': y,
                focusProps: { enabled: !1 },
                children: [
                    (0, r.jsxs)('div', {
                        className: L.linkTop,
                        children: [
                            (0, r.jsx)(v, {
                                className: P,
                                channel: n,
                                guild: j,
                                hasActiveThreads: g,
                                locked: N,
                                withGuildIcon: Z
                            }),
                            (0, r.jsx)(d.Z, {
                                className: a()(L.name, { [L.activeEvent]: W }),
                                'aria-hidden': !0,
                                children: null == i ? et : i
                            }),
                            l.Children.count(B) > 0
                                ? (0, r.jsx)('div', {
                                      onClick: M,
                                      className: L.children,
                                      children: B
                                  })
                                : null
                        ]
                    }),
                    null != b
                        ? (0, r.jsx)('div', {
                              className: a()(L.linkBottom, { [L.withGuildIcon]: Z }),
                              children: (0, r.jsx)(E.Text, {
                                  color: null != x ? x : 'text-muted',
                                  variant: 'text-xs/medium',
                                  className: L.subtitle,
                                  children: b
                              })
                          })
                        : null
                ]
            })
        });
    return (0, r.jsx)(E.tEY, {
        focusTarget: J,
        ringTarget: Q,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: a()(
                m,
                null != O || null != S || null != R || H ? L.wrapper : L.notInteractive,
                u ? a()(D.selectedChannel, C.SELECTED) : _ ? a()(D.selectedChannel, C.CONNECTED) : N ? C.LOCKED : o ? C.MUTED : T ? (Y ? C.UNREAD_IMPORTANT : C.UNREAD_LESS_IMPORTANT) : null,
                (function (e) {
                    switch (e) {
                        case U.d4z.GUILD_STAGE_VOICE:
                        case U.d4z.GUILD_VOICE:
                            return L.typeVoice;
                        case U.d4z.ANNOUNCEMENT_THREAD:
                        case U.d4z.PUBLIC_THREAD:
                        case U.d4z.PRIVATE_THREAD:
                            return L.typeThread;
                        case U.d4z.GUILD_ANNOUNCEMENT:
                        case U.d4z.GUILD_TEXT:
                        case U.d4z.GUILD_STORE:
                        case U.d4z.GUILD_FORUM:
                        case U.d4z.GUILD_MEDIA:
                        default:
                            return L.typeDefault;
                    }
                })(null != z ? z : G)
            ),
            onMouseUp: (e) => (null == S ? void 0 : S(e, n)),
            onMouseDown: (e) => (null == R ? void 0 : R(e, n)),
            onContextMenu: (e) => (null == h ? void 0 : h(e, n)),
            onMouseEnter: F,
            onMouseLeave: V,
            children: [o || !T ? null : (0, r.jsx)('div', { className: a()(L.unread, Y ? L.unreadImportant : void 0) }), null !== (t = null == p ? void 0 : p(er)) && void 0 !== t ? t : er]
        })
    });
}
