n.d(t, {
    Z: function () {
        return b;
    },
    _: function () {
        return v;
    }
});
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(91192),
    o = n(442837),
    E = n(481060),
    u = n(43267),
    c = n(933557),
    d = n(471445),
    _ = n(111028),
    A = n(727429),
    T = n(810123),
    I = n(690221),
    N = n(430824),
    f = n(158776),
    g = n(111583),
    O = n(594174),
    R = n(998502),
    S = n(981631),
    D = n(490897),
    h = n(831746),
    p = n(193877);
let U = {
    SELECTED: p.modeSelected,
    CONNECTED: p.modeConnected,
    UNREAD_IMPORTANT: p.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: p.modeUnreadLessImportant,
    MUTED: p.modeMuted,
    LOCKED: p.modeLocked
};
function C(e) {
    e.preventDefault(), e.stopPropagation();
}
let L = R.ZP.getEnableHardwareAcceleration() ? E.AnimatedAvatar : E.Avatar;
function M(e) {
    let { channel: t } = e;
    return (0, r.jsx)(L, {
        src: (0, u.x)(t),
        'aria-hidden': !0,
        size: E.AvatarSizes.SIZE_20
    });
}
function m(e) {
    let { channel: t } = e,
        n = (0, o.e7)([O.default], () => O.default.getUser(null == t ? void 0 : t.recipients[0])),
        l = (0, o.e7)([g.Z], () => !(null == n || null == t || t.isMultiUserDM()) && null != g.Z.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]),
        { status: i, isMobile: s } = (0, o.cj)([f.Z], () =>
            null == n || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: f.Z.getStatus(n.id),
                      isMobile: f.Z.isMobileOnline(n.id)
                  }
        );
    return (0, r.jsx)(L, {
        size: E.AvatarSizes.SIZE_20,
        src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
        status: i,
        isMobile: s,
        isTyping: l,
        'aria-label': null == n ? void 0 : n.username,
        statusTooltip: !0
    });
}
let v = (e) => {
    let { className: t, channel: n, locked: l, hasActiveThreads: i, withGuildIcon: a } = e,
        u = (0, o.e7)([N.Z], () => N.Z.getGuild(n.guild_id), [n.guild_id]),
        c = n.type === S.d4z.DM || n.type === S.d4z.GROUP_DM,
        _ = null;
    if (a && null != u && !c)
        _ = (0, r.jsx)(T.Z, {
            size: T.E.SMALL_32,
            className: p.iconContainerWithGuildIcon,
            iconClassName: p.iconWithGuildIcon,
            channel: n,
            guild: u,
            locked: l,
            hasActiveThreads: i
        });
    else {
        let e = (function (e, t, n) {
            switch (e.type) {
                case S.d4z.DM:
                    return function () {
                        return (0, r.jsx)(m, { channel: e });
                    };
                case S.d4z.GROUP_DM:
                    return function () {
                        return (0, r.jsx)(M, { channel: e });
                    };
                default:
                    return (0, d.KS)(e, t, n);
            }
        })(n, u, {
            locked: l,
            hasActiveThreads: i
        });
        if (null == e) return null;
        _ = (0, r.jsx)(e, {
            color: 'currentColor',
            className: s()(p.icon, t)
        });
    }
    let A = a ? (null == u ? void 0 : u.name) : (0, d.bT)(n, u, l, i),
        I = a && null != u ? ''.concat(u.name, ' - ').concat(A, ' icon') : ''.concat(A, ' icon');
    return (0, r.jsx)(E.Tooltip, {
        text: A,
        delay: 500,
        children: (e) =>
            (0, r.jsx)('div', {
                ...e,
                role: 'img',
                'aria-label': I,
                className: s()(p.iconContainer),
                children: _
            })
    });
};
function b(e) {
    var t;
    let {
            channel: n,
            name: i,
            muted: o,
            selected: u,
            connected: d,
            unread: T,
            locked: N,
            hasActiveThreads: f,
            onClick: g,
            onMouseDown: O,
            onMouseUp: R,
            onContextMenu: L,
            connectDragPreview: M,
            className: m,
            iconClassName: b,
            subtitle: P,
            subtitleColor: x,
            channel: { type: G },
            onMouseEnter: F,
            onMouseLeave: y,
            'aria-label': j,
            children: V,
            guild: B,
            channelTypeOverride: z,
            forceInteractable: H,
            mentionCount: k,
            resolvedUnreadSetting: w,
            isFavoriteSuggestion: Z,
            withGuildIcon: K,
            hasActiveEvent: W = !1
        } = e,
        Y = w === D.i.ALL_MESSAGES || (null != k && k > 0),
        { role: q, ...X } = (0, a.JA)(n.id),
        J = l.useRef(null),
        Q = l.useRef(null),
        $ = (0, A.Z)(n),
        ee = S.Z5c.CHANNEL($, n.id),
        et = (0, c.ZP)(n),
        en = n.isGuildVocal(),
        er = (0, r.jsx)('div', {
            className: s()({ [p.favoritesSuggestion]: Z }),
            ref: Q,
            children: (0, r.jsxs)(I.Z, {
                role: en && !d ? 'button' : 'link',
                href: en ? void 0 : ee,
                target: '_blank',
                ref: J,
                className: p.link,
                onClick: () => (null == g ? void 0 : g(n)),
                ...X,
                'aria-label': j,
                focusProps: { enabled: !1 },
                children: [
                    (0, r.jsxs)('div', {
                        className: p.linkTop,
                        children: [
                            (0, r.jsx)(v, {
                                className: b,
                                channel: n,
                                guild: B,
                                hasActiveThreads: f,
                                locked: N,
                                withGuildIcon: K
                            }),
                            (0, r.jsx)(_.Z, {
                                className: s()(p.name, { [p.activeEvent]: W }),
                                'aria-hidden': !0,
                                children: null == i ? et : i
                            }),
                            l.Children.count(V) > 0
                                ? (0, r.jsx)('div', {
                                      onClick: C,
                                      className: p.children,
                                      children: V
                                  })
                                : null
                        ]
                    }),
                    null != P
                        ? (0, r.jsx)('div', {
                              className: s()(p.linkBottom, { [p.withGuildIcon]: K }),
                              children: (0, r.jsx)(E.Text, {
                                  color: null != x ? x : 'text-muted',
                                  variant: 'text-xs/medium',
                                  className: p.subtitle,
                                  children: P
                              })
                          })
                        : null
                ]
            })
        });
    return (0, r.jsx)(E.FocusRing, {
        focusTarget: J,
        ringTarget: Q,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: s()(
                m,
                null != g || null != R || null != O || H ? p.wrapper : p.notInteractive,
                (() => {
                    if (u) return s()(h.selectedChannel, U.SELECTED);
                    if (d) return s()(h.selectedChannel, U.CONNECTED);
                    if (N) return U.LOCKED;
                    if (o) return U.MUTED;
                    if (T) return Y ? U.UNREAD_IMPORTANT : U.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case S.d4z.GUILD_STAGE_VOICE:
                        case S.d4z.GUILD_VOICE:
                            return p.typeVoice;
                        case S.d4z.ANNOUNCEMENT_THREAD:
                        case S.d4z.PUBLIC_THREAD:
                        case S.d4z.PRIVATE_THREAD:
                            return p.typeThread;
                        case S.d4z.GUILD_ANNOUNCEMENT:
                        case S.d4z.GUILD_TEXT:
                        case S.d4z.GUILD_STORE:
                        case S.d4z.GUILD_FORUM:
                        case S.d4z.GUILD_MEDIA:
                        default:
                            return p.typeDefault;
                    }
                })(null != z ? z : G)
            ),
            onMouseUp: (e) => (null == R ? void 0 : R(e, n)),
            onMouseDown: (e) => (null == O ? void 0 : O(e, n)),
            onContextMenu: (e) => (null == L ? void 0 : L(e, n)),
            onMouseEnter: F,
            onMouseLeave: y,
            children: [o || !T ? null : (0, r.jsx)('div', { className: s()(p.unread, Y ? p.unreadImportant : void 0) }), null !== (t = null == M ? void 0 : M(er)) && void 0 !== t ? t : er]
        })
    });
}
