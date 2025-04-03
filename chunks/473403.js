n.d(t, {
    ZP: () => y,
    _W: () => P,
    ge: () => b,
    je: () => v
});
var r = n(200651),
    l = n(192379),
    a = n(120356),
    s = n.n(a),
    i = n(91192),
    o = n(442837),
    E = n(481060),
    c = n(43267),
    u = n(933557),
    _ = n(471445),
    d = n(111028),
    A = n(727429),
    T = n(810123),
    N = n(690221),
    I = n(430824),
    O = n(158776),
    g = n(111583),
    f = n(594174),
    R = n(998502),
    p = n(981631),
    S = n(490897),
    h = n(915887),
    U = n(768107);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = {
    SELECTED: U.modeSelected,
    CONNECTED: U.modeConnected,
    UNREAD_IMPORTANT: U.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: U.modeUnreadLessImportant,
    MUTED: U.modeMuted,
    LOCKED: U.modeLocked
};
function m(e) {
    e.preventDefault(), e.stopPropagation();
}
let M = R.ZP.getEnableHardwareAcceleration() ? E.Xo$ : E.qEK;
function b(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e;
    return (0, r.jsx)(M, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function v(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e,
        l = (0, o.e7)([f.default], () => f.default.getUser(null == t ? void 0 : t.recipients[0])),
        a = (0, o.e7)([g.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != g.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: s, isMobile: i } = (0, o.cj)([O.Z], () =>
            null == l || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: O.Z.getStatus(l.id),
                      isMobile: O.Z.isMobileOnline(l.id)
                  }
        );
    return (0, r.jsx)(M, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: s,
        isMobile: i,
        isTyping: a,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let P = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: a, hasActiveThreads: i, withGuildIcon: c } = e,
            u = (0, o.e7)([I.Z], () => I.Z.getGuild(l.guild_id), [l.guild_id]),
            d = l.type === p.d4z.DM || l.type === p.d4z.GROUP_DM,
            A = null;
        if (c && null != u && !d)
            A = (0, r.jsx)(T.Z, {
                size: T.E.SMALL_32,
                className: U.iconContainerWithGuildIcon,
                iconClassName: U.iconWithGuildIcon,
                channel: l,
                guild: u,
                locked: a,
                hasActiveThreads: i
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case p.d4z.DM:
                        return function () {
                            return (0, r.jsx)(v, { channel: e });
                        };
                    case p.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(b, { channel: e });
                        };
                    default:
                        return (0, _.KS)(e, t, n);
                }
            })(l, u, {
                locked: a,
                hasActiveThreads: i
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: s()(U.icon, t)
            });
        }
        let N = c ? (null == u ? void 0 : u.name) : (0, _.bT)(l, u, a, i),
            O = c && null != u ? ''.concat(u.name, ' - ').concat(N, ' icon') : ''.concat(N, ' icon');
        return (0, r.jsx)(E.ua7, {
            text: N,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    L(D({}, e), {
                        role: 'img',
                        'aria-label': O,
                        className: s()(U.iconContainer, n),
                        children: A
                    })
                )
        });
    },
    y = l.forwardRef(function (e, t) {
        var n;
        let {
                channel: a,
                name: o,
                muted: c,
                selected: _,
                connected: T,
                unread: I,
                locked: O,
                hasActiveThreads: g,
                onClick: f,
                onMouseDown: R,
                onMouseUp: M,
                onContextMenu: b,
                connectDragPreview: v,
                className: y,
                iconClassName: x,
                subtitle: j,
                subtitleColor: G,
                channel: { type: F },
                onMouseEnter: W,
                onMouseLeave: B,
                'aria-label': w,
                children: z,
                guild: k,
                channelTypeOverride: V,
                forceInteractable: H,
                mentionCount: K,
                resolvedUnreadSetting: Z,
                isFavoriteSuggestion: Y,
                withGuildIcon: q,
                hasActiveEvent: X = !1
            } = e,
            J = Z === S.i.ALL_MESSAGES || (null != K && K > 0),
            Q = (0, i.JA)(a.id),
            { role: $ } = Q,
            ee = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    l = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l = {},
                            a = Object.keys(e);
                        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(Q, ['role']),
            et = l.useRef(null),
            en = l.useRef(null),
            er = (0, A.Z)(a),
            el = p.Z5c.CHANNEL(er, a.id),
            ea = (0, u.ZP)(a),
            es = a.isGuildVocal(),
            ei = (0, r.jsx)('div', {
                className: s()({ [U.favoritesSuggestion]: Y }),
                ref: en,
                children: (0, r.jsxs)(
                    N.Z,
                    L(
                        D(
                            {
                                role: es && !T ? 'button' : 'link',
                                href: es ? void 0 : el,
                                target: '_blank',
                                ref: et,
                                className: U.link,
                                onClick: () => (null == f ? void 0 : f(a))
                            },
                            ee
                        ),
                        {
                            'aria-label': w,
                            focusProps: { enabled: !1 },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: U.linkTop,
                                    children: [
                                        (0, r.jsx)(P, {
                                            className: x,
                                            channel: a,
                                            guild: k,
                                            hasActiveThreads: g,
                                            locked: O,
                                            withGuildIcon: q
                                        }),
                                        (0, r.jsx)(d.Z, {
                                            className: s()(U.name, { [U.activeEvent]: X }),
                                            'aria-hidden': !0,
                                            children: null == o ? ea : o
                                        }),
                                        l.Children.count(z) > 0
                                            ? (0, r.jsx)('div', {
                                                  onClick: m,
                                                  className: U.children,
                                                  children: z
                                              })
                                            : null
                                    ]
                                }),
                                null != j
                                    ? (0, r.jsx)('div', {
                                          className: s()(U.linkBottom, { [U.withGuildIcon]: q }),
                                          children: (0, r.jsx)(E.Text, {
                                              color: null != G ? G : 'text-muted',
                                              variant: 'text-xs/medium',
                                              className: U.subtitle,
                                              children: j
                                          })
                                      })
                                    : null
                            ]
                        }
                    )
                )
            });
        return (0, r.jsx)(E.tEY, {
            focusTarget: et,
            ringTarget: en,
            offset: {
                top: 2,
                bottom: 2,
                right: 4
            },
            children: (0, r.jsxs)('div', {
                ref: t,
                className: s()(
                    y,
                    null != f || null != M || null != R || H ? U.wrapper : U.notInteractive,
                    (() => {
                        if (_) return s()(h.selectedChannel, C.SELECTED);
                        if (T) return s()(h.selectedChannel, C.CONNECTED);
                        if (O) return C.LOCKED;
                        if (c) return C.MUTED;
                        if (I)
                            if (J) return C.UNREAD_IMPORTANT;
                            else return C.UNREAD_LESS_IMPORTANT;
                        return null;
                    })(),
                    (function (e) {
                        switch (e) {
                            case p.d4z.GUILD_STAGE_VOICE:
                            case p.d4z.GUILD_VOICE:
                                return U.typeVoice;
                            case p.d4z.ANNOUNCEMENT_THREAD:
                            case p.d4z.PUBLIC_THREAD:
                            case p.d4z.PRIVATE_THREAD:
                                return U.typeThread;
                            case p.d4z.GUILD_ANNOUNCEMENT:
                            case p.d4z.GUILD_TEXT:
                            case p.d4z.GUILD_STORE:
                            case p.d4z.GUILD_FORUM:
                            case p.d4z.GUILD_MEDIA:
                            default:
                                return U.typeDefault;
                        }
                    })(null != V ? V : F)
                ),
                onMouseUp: (e) => (null == M ? void 0 : M(e, a)),
                onMouseDown: (e) => (null == R ? void 0 : R(e, a)),
                onContextMenu: (e) => (null == b ? void 0 : b(e, a)),
                onMouseEnter: W,
                onMouseLeave: B,
                children: [c || !I ? null : (0, r.jsx)('div', { className: s()(U.unread, J ? U.unreadImportant : void 0) }), null != (n = null == v ? void 0 : v(ei)) ? n : ei]
            })
        });
    });
