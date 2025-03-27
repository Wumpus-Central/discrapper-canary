r.d(t, {
    ZP: () => D,
    _W: () => R,
    ge: () => V,
    je: () => S
});
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i),
    o = r(91192),
    s = r(442837),
    h = r(481060),
    c = r(43267),
    v = r(933557),
    u = r(471445),
    d = r(111028),
    E = r(727429),
    f = r(810123),
    p = r(690221),
    M = r(430824),
    _ = r(158776),
    O = r(111583),
    g = r(594174),
    b = r(998502),
    A = r(981631),
    T = r(490897),
    Z = r(691878),
    N = r(853904);
function H(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
let j = {
    SELECTED: N.modeSelected,
    CONNECTED: N.modeConnected,
    UNREAD_IMPORTANT: N.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: N.modeUnreadLessImportant,
    MUTED: N.modeMuted,
    LOCKED: N.modeLocked
};
function I(e) {
    e.preventDefault(), e.stopPropagation();
}
let m = b.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK;
function V(e) {
    let { channel: t, size: r = h.EFr.SIZE_20 } = e;
    return (0, n.jsx)(m, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: r
    });
}
function S(e) {
    let { channel: t, size: r = h.EFr.SIZE_20 } = e,
        l = (0, s.e7)([g.default], () => g.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, s.e7)([O.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != O.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: a, isMobile: o } = (0, s.cj)([_.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: _.Z.getStatus(l.id),
                      isMobile: _.Z.isMobileOnline(l.id)
                  }
        );
    return (0, n.jsx)(m, {
        size: r,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: a,
        isMobile: o,
        isTyping: i,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let R = (e) => {
        let { className: t, containerClassName: r, channel: l, locked: i, hasActiveThreads: o, withGuildIcon: c } = e,
            v = (0, s.e7)([M.Z], () => M.Z.getGuild(l.guild_id), [l.guild_id]),
            d = l.type === A.d4z.DM || l.type === A.d4z.GROUP_DM,
            E = null;
        if (c && null != v && !d)
            E = (0, n.jsx)(f.Z, {
                size: f.E.SMALL_32,
                className: N.iconContainerWithGuildIcon,
                iconClassName: N.iconWithGuildIcon,
                channel: l,
                guild: v,
                locked: i,
                hasActiveThreads: o
            });
        else {
            let e = (function (e, t, r) {
                switch (e.type) {
                    case A.d4z.DM:
                        return function () {
                            return (0, n.jsx)(S, { channel: e });
                        };
                    case A.d4z.GROUP_DM:
                        return function () {
                            return (0, n.jsx)(V, { channel: e });
                        };
                    default:
                        return (0, u.KS)(e, t, r);
                }
            })(l, v, {
                locked: i,
                hasActiveThreads: o
            });
            if (null == e) return null;
            E = (0, n.jsx)(e, {
                color: 'currentColor',
                className: a()(N.icon, t)
            });
        }
        let p = c ? (null == v ? void 0 : v.name) : (0, u.bT)(l, v, i, o),
            _ = c && null != v ? ''.concat(v.name, ' - ').concat(p, ' icon') : ''.concat(p, ' icon');
        return (0, n.jsx)(h.ua7, {
            text: p,
            delay: 500,
            children: (e) =>
                (0, n.jsx)(
                    'div',
                    y(H({}, e), {
                        role: 'img',
                        'aria-label': _,
                        className: a()(N.iconContainer, r),
                        children: E
                    })
                )
        });
    },
    D = l.forwardRef(function (e, t) {
        var r;
        let {
                channel: i,
                name: s,
                muted: c,
                selected: u,
                connected: f,
                unread: M,
                locked: _,
                hasActiveThreads: O,
                onClick: g,
                onMouseDown: b,
                onMouseUp: m,
                onContextMenu: V,
                connectDragPreview: S,
                className: D,
                iconClassName: C,
                subtitle: x,
                subtitleColor: L,
                channel: { type: P },
                onMouseEnter: U,
                onMouseLeave: w,
                'aria-label': G,
                children: W,
                guild: F,
                channelTypeOverride: B,
                forceInteractable: k,
                mentionCount: z,
                resolvedUnreadSetting: K,
                isFavoriteSuggestion: Y,
                withGuildIcon: q,
                hasActiveEvent: X = !1
            } = e,
            J = K === T.i.ALL_MESSAGES || (null != z && z > 0),
            Q = (0, o.JA)(i.id),
            { role: $ } = Q,
            ee = (function (e, t) {
                if (null == e) return {};
                var r,
                    n,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var r,
                            n,
                            l = {},
                            i = Object.keys(e);
                        for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                }
                return l;
            })(Q, ['role']),
            et = l.useRef(null),
            er = l.useRef(null),
            en = (0, E.Z)(i),
            el = A.Z5c.CHANNEL(en, i.id),
            ei = (0, v.ZP)(i),
            ea = i.isGuildVocal(),
            eo = (0, n.jsx)('div', {
                className: a()({ [N.favoritesSuggestion]: Y }),
                ref: er,
                children: (0, n.jsxs)(
                    p.Z,
                    y(
                        H(
                            {
                                role: ea && !f ? 'button' : 'link',
                                href: ea ? void 0 : el,
                                target: '_blank',
                                ref: et,
                                className: N.link,
                                onClick: () => (null == g ? void 0 : g(i))
                            },
                            ee
                        ),
                        {
                            'aria-label': G,
                            focusProps: { enabled: !1 },
                            children: [
                                (0, n.jsxs)('div', {
                                    className: N.linkTop,
                                    children: [
                                        (0, n.jsx)(R, {
                                            className: C,
                                            channel: i,
                                            guild: F,
                                            hasActiveThreads: O,
                                            locked: _,
                                            withGuildIcon: q
                                        }),
                                        (0, n.jsx)(d.Z, {
                                            className: a()(N.name, { [N.activeEvent]: X }),
                                            'aria-hidden': !0,
                                            children: null == s ? ei : s
                                        }),
                                        l.Children.count(W) > 0
                                            ? (0, n.jsx)('div', {
                                                  onClick: I,
                                                  className: N.children,
                                                  children: W
                                              })
                                            : null
                                    ]
                                }),
                                null != x
                                    ? (0, n.jsx)('div', {
                                          className: a()(N.linkBottom, { [N.withGuildIcon]: q }),
                                          children: (0, n.jsx)(h.Text, {
                                              color: null != L ? L : 'text-muted',
                                              variant: 'text-xs/medium',
                                              className: N.subtitle,
                                              children: x
                                          })
                                      })
                                    : null
                            ]
                        }
                    )
                )
            });
        return (0, n.jsx)(h.tEY, {
            focusTarget: et,
            ringTarget: er,
            offset: {
                top: 2,
                bottom: 2,
                right: 4
            },
            children: (0, n.jsxs)('div', {
                ref: t,
                className: a()(
                    D,
                    null != g || null != m || null != b || k ? N.wrapper : N.notInteractive,
                    u ? a()(Z.selectedChannel, j.SELECTED) : f ? a()(Z.selectedChannel, j.CONNECTED) : _ ? j.LOCKED : c ? j.MUTED : M ? (J ? j.UNREAD_IMPORTANT : j.UNREAD_LESS_IMPORTANT) : null,
                    (function (e) {
                        switch (e) {
                            case A.d4z.GUILD_STAGE_VOICE:
                            case A.d4z.GUILD_VOICE:
                                return N.typeVoice;
                            case A.d4z.ANNOUNCEMENT_THREAD:
                            case A.d4z.PUBLIC_THREAD:
                            case A.d4z.PRIVATE_THREAD:
                                return N.typeThread;
                            case A.d4z.GUILD_ANNOUNCEMENT:
                            case A.d4z.GUILD_TEXT:
                            case A.d4z.GUILD_STORE:
                            case A.d4z.GUILD_FORUM:
                            case A.d4z.GUILD_MEDIA:
                            default:
                                return N.typeDefault;
                        }
                    })(null != B ? B : P)
                ),
                onMouseUp: (e) => (null == m ? void 0 : m(e, i)),
                onMouseDown: (e) => (null == b ? void 0 : b(e, i)),
                onContextMenu: (e) => (null == V ? void 0 : V(e, i)),
                onMouseEnter: U,
                onMouseLeave: w,
                children: [c || !M ? null : (0, n.jsx)('div', { className: a()(N.unread, J ? N.unreadImportant : void 0) }), null !== (r = null == S ? void 0 : S(eo)) && void 0 !== r ? r : eo]
            })
        });
    });
