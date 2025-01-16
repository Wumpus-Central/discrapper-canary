t.d(n, {
    Z: function () {
        return C;
    },
    _: function () {
        return R;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    u = t.n(r),
    a = t(91192),
    s = t(442837),
    I = t(481060),
    o = t(43267),
    T = t(933557),
    _ = t(471445),
    d = t(111028),
    c = t(727429),
    N = t(810123),
    E = t(690221),
    S = t(430824),
    O = t(158776),
    f = t(111583),
    m = t(594174),
    P = t(998502),
    g = t(981631),
    h = t(490897),
    M = t(831746),
    D = t(193877);
let U = {
    SELECTED: D.modeSelected,
    CONNECTED: D.modeConnected,
    UNREAD_IMPORTANT: D.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
    MUTED: D.modeMuted,
    LOCKED: D.modeLocked
};
function p(e) {
    e.preventDefault(), e.stopPropagation();
}
let A = P.ZP.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar;
function v(e) {
    let { channel: n } = e;
    return (0, l.jsx)(A, {
        src: (0, o.x)(n),
        'aria-hidden': !0,
        size: I.AvatarSizes.SIZE_20
    });
}
function V(e) {
    let { channel: n } = e,
        t = (0, s.e7)([m.default], () => m.default.getUser(null == n ? void 0 : n.recipients[0])),
        i = (0, s.e7)([f.Z], () => !(null == t || null == n || n.isMultiUserDM()) && null != f.Z.getTypingUsers(null == n ? void 0 : n.id)[null == t ? void 0 : t.id]),
        { status: r, isMobile: u } = (0, s.cj)([O.Z], () =>
            null == t || null == n || n.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: O.Z.getStatus(t.id),
                      isMobile: O.Z.isMobileOnline(t.id)
                  }
        );
    return (0, l.jsx)(A, {
        size: I.AvatarSizes.SIZE_20,
        src: null == t ? void 0 : t.getAvatarURL(void 0, 40),
        status: r,
        isMobile: u,
        isTyping: i,
        'aria-label': null == t ? void 0 : t.username,
        statusTooltip: !0
    });
}
let R = (e) => {
    let { className: n, channel: t, locked: i, hasActiveThreads: r, withGuildIcon: a } = e,
        o = (0, s.e7)([S.Z], () => S.Z.getGuild(t.guild_id), [t.guild_id]),
        T = t.type === g.d4z.DM || t.type === g.d4z.GROUP_DM,
        d = null;
    if (a && null != o && !T)
        d = (0, l.jsx)(N.Z, {
            size: N.E.SMALL_32,
            className: D.iconContainerWithGuildIcon,
            iconClassName: D.iconWithGuildIcon,
            channel: t,
            guild: o,
            locked: i,
            hasActiveThreads: r
        });
    else {
        let e = (function (e, n, t) {
            switch (e.type) {
                case g.d4z.DM:
                    return function () {
                        return (0, l.jsx)(V, { channel: e });
                    };
                case g.d4z.GROUP_DM:
                    return function () {
                        return (0, l.jsx)(v, { channel: e });
                    };
                default:
                    return (0, _.KS)(e, n, t);
            }
        })(t, o, {
            locked: i,
            hasActiveThreads: r
        });
        if (null == e) return null;
        d = (0, l.jsx)(e, {
            color: 'currentColor',
            className: u()(D.icon, n)
        });
    }
    let c = a ? (null == o ? void 0 : o.name) : (0, _.bT)(t, o, i, r),
        E = a && null != o ? ''.concat(o.name, ' - ').concat(c, ' icon') : ''.concat(c, ' icon');
    return (0, l.jsx)(I.Tooltip, {
        text: c,
        delay: 500,
        children: (e) =>
            (0, l.jsx)('div', {
                ...e,
                role: 'img',
                'aria-label': E,
                className: u()(D.iconContainer),
                children: d
            })
    });
};
function C(e) {
    var n;
    let {
            channel: t,
            name: r,
            muted: s,
            selected: o,
            connected: _,
            unread: N,
            locked: S,
            hasActiveThreads: O,
            onClick: f,
            onMouseDown: m,
            onMouseUp: P,
            onContextMenu: A,
            connectDragPreview: v,
            className: V,
            iconClassName: C,
            subtitle: L,
            subtitleColor: x,
            channel: { type: y },
            onMouseEnter: Z,
            onMouseLeave: G,
            'aria-label': H,
            children: z,
            guild: b,
            channelTypeOverride: j,
            forceInteractable: k,
            mentionCount: F,
            resolvedUnreadSetting: Y,
            isFavoriteSuggestion: w,
            withGuildIcon: q,
            hasActiveEvent: B = !1
        } = e,
        X = Y === h.i.ALL_MESSAGES || (null != F && F > 0),
        { role: W, ...J } = (0, a.JA)(t.id),
        K = i.useRef(null),
        Q = i.useRef(null),
        $ = (0, c.Z)(t),
        ee = g.Z5c.CHANNEL($, t.id),
        en = (0, T.ZP)(t),
        et = t.isGuildVocal(),
        el = (0, l.jsx)('div', {
            className: u()({ [D.favoritesSuggestion]: w }),
            ref: Q,
            children: (0, l.jsxs)(E.Z, {
                role: et && !_ ? 'button' : 'link',
                href: et ? void 0 : ee,
                target: '_blank',
                ref: K,
                className: D.link,
                onClick: () => (null == f ? void 0 : f(t)),
                ...J,
                'aria-label': H,
                focusProps: { enabled: !1 },
                children: [
                    (0, l.jsxs)('div', {
                        className: D.linkTop,
                        children: [
                            (0, l.jsx)(R, {
                                className: C,
                                channel: t,
                                guild: b,
                                hasActiveThreads: O,
                                locked: S,
                                withGuildIcon: q
                            }),
                            (0, l.jsx)(d.Z, {
                                className: u()(D.name, { [D.activeEvent]: B }),
                                'aria-hidden': !0,
                                children: null == r ? en : r
                            }),
                            i.Children.count(z) > 0
                                ? (0, l.jsx)('div', {
                                      onClick: p,
                                      className: D.children,
                                      children: z
                                  })
                                : null
                        ]
                    }),
                    null != L
                        ? (0, l.jsx)('div', {
                              className: u()(D.linkBottom, { [D.withGuildIcon]: q }),
                              children: (0, l.jsx)(I.Text, {
                                  color: null != x ? x : 'text-muted',
                                  variant: 'text-xs/medium',
                                  className: D.subtitle,
                                  children: L
                              })
                          })
                        : null
                ]
            })
        });
    return (0, l.jsx)(I.FocusRing, {
        focusTarget: K,
        ringTarget: Q,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, l.jsxs)('div', {
            className: u()(
                V,
                null != f || null != P || null != m || k ? D.wrapper : D.notInteractive,
                (() => {
                    if (o) return u()(M.selectedChannel, U.SELECTED);
                    if (_) return u()(M.selectedChannel, U.CONNECTED);
                    if (S) return U.LOCKED;
                    if (s) return U.MUTED;
                    if (N) return X ? U.UNREAD_IMPORTANT : U.UNREAD_LESS_IMPORTANT;
                    return null;
                })(),
                (function (e) {
                    switch (e) {
                        case g.d4z.GUILD_STAGE_VOICE:
                        case g.d4z.GUILD_VOICE:
                            return D.typeVoice;
                        case g.d4z.ANNOUNCEMENT_THREAD:
                        case g.d4z.PUBLIC_THREAD:
                        case g.d4z.PRIVATE_THREAD:
                            return D.typeThread;
                        case g.d4z.GUILD_ANNOUNCEMENT:
                        case g.d4z.GUILD_TEXT:
                        case g.d4z.GUILD_STORE:
                        case g.d4z.GUILD_FORUM:
                        case g.d4z.GUILD_MEDIA:
                        default:
                            return D.typeDefault;
                    }
                })(null != j ? j : y)
            ),
            onMouseUp: (e) => (null == P ? void 0 : P(e, t)),
            onMouseDown: (e) => (null == m ? void 0 : m(e, t)),
            onContextMenu: (e) => (null == A ? void 0 : A(e, t)),
            onMouseEnter: Z,
            onMouseLeave: G,
            children: [s || !N ? null : (0, l.jsx)('div', { className: u()(D.unread, X ? D.unreadImportant : void 0) }), null !== (n = null == v ? void 0 : v(el)) && void 0 !== n ? n : el]
        })
    });
}
