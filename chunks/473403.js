n.d(t, {
    ZP: () => x,
    _W: () => P,
    ge: () => v,
    je: () => b
});
var r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(91192),
    i = n(442837),
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
    R = n(111583),
    g = n(594174),
    f = n(998502),
    S = n(981631),
    p = n(490897),
    h = n(915887),
    U = n(768107);
function L(e) {
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
function D(e, t) {
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
function M(e) {
    e.preventDefault(), e.stopPropagation();
}
let m = f.ZP.getEnableHardwareAcceleration() ? E.Xo$ : E.qEK;
function v(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e;
    return (0, r.jsx)(m, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function b(e) {
    let { channel: t, size: n = E.EFr.SIZE_20 } = e,
        l = (0, i.e7)([g.default], () => g.default.getUser(null == t ? void 0 : t.recipients[0])),
        s = (0, i.e7)([R.Z], () => !(null == l || null == t || t.isMultiUserDM()) && null != R.Z.getTypingUsers(null == t ? void 0 : t.id)[null == l ? void 0 : l.id]),
        { status: a, isMobile: o } = (0, i.cj)([O.Z], () =>
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
    return (0, r.jsx)(m, {
        size: n,
        src: null == l ? void 0 : l.getAvatarURL(void 0, 40),
        status: a,
        isMobile: o,
        isTyping: s,
        'aria-label': null == l ? void 0 : l.username,
        statusTooltip: !0
    });
}
let P = (e) => {
        let { className: t, containerClassName: n, channel: l, locked: s, hasActiveThreads: o, withGuildIcon: c } = e,
            u = (0, i.e7)([I.Z], () => I.Z.getGuild(l.guild_id), [l.guild_id]),
            d = l.type === S.d4z.DM || l.type === S.d4z.GROUP_DM,
            A = null;
        if (c && null != u && !d)
            A = (0, r.jsx)(T.Z, {
                size: T.E.SMALL_32,
                className: U.iconContainerWithGuildIcon,
                iconClassName: U.iconWithGuildIcon,
                channel: l,
                guild: u,
                locked: s,
                hasActiveThreads: o
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case S.d4z.DM:
                        return function () {
                            return (0, r.jsx)(b, { channel: e });
                        };
                    case S.d4z.GROUP_DM:
                        return function () {
                            return (0, r.jsx)(v, { channel: e });
                        };
                    default:
                        return (0, _.KS)(e, t, n);
                }
            })(l, u, {
                locked: s,
                hasActiveThreads: o
            });
            if (null == e) return null;
            A = (0, r.jsx)(e, {
                color: 'currentColor',
                className: a()(U.icon, t)
            });
        }
        let N = c ? (null == u ? void 0 : u.name) : (0, _.bT)(l, u, s, o),
            O = c && null != u ? ''.concat(u.name, ' - ').concat(N, ' icon') : ''.concat(N, ' icon');
        return (0, r.jsx)(E.ua7, {
            text: N,
            delay: 500,
            children: (e) =>
                (0, r.jsx)(
                    'div',
                    D(L({}, e), {
                        role: 'img',
                        'aria-label': O,
                        className: a()(U.iconContainer, n),
                        children: A
                    })
                )
        });
    },
    x = l.forwardRef(function (e, t) {
        var n;
        let {
                channel: s,
                name: i,
                muted: c,
                selected: _,
                connected: T,
                unread: I,
                locked: O,
                hasActiveThreads: R,
                onClick: g,
                onMouseDown: f,
                onMouseUp: m,
                onContextMenu: v,
                connectDragPreview: b,
                className: x,
                iconClassName: j,
                subtitle: y,
                subtitleColor: G,
                channel: { type: F },
                onMouseEnter: W,
                onMouseLeave: z,
                'aria-label': B,
                children: w,
                guild: H,
                channelTypeOverride: k,
                forceInteractable: V,
                mentionCount: K,
                resolvedUnreadSetting: Z,
                isFavoriteSuggestion: Y,
                withGuildIcon: q,
                hasActiveEvent: X = !1
            } = e,
            J = Z === p.i.ALL_MESSAGES || (null != K && K > 0),
            Q = (0, o.JA)(s.id),
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
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                        return l;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                }
                return l;
            })(Q, ['role']),
            et = l.useRef(null),
            en = l.useRef(null),
            er = (0, A.Z)(s),
            el = S.Z5c.CHANNEL(er, s.id),
            es = (0, u.ZP)(s),
            ea = s.isGuildVocal(),
            eo = (0, r.jsx)('div', {
                className: a()({ [U.favoritesSuggestion]: Y }),
                ref: en,
                children: (0, r.jsxs)(
                    N.Z,
                    D(
                        L(
                            {
                                role: ea && !T ? 'button' : 'link',
                                href: ea ? void 0 : el,
                                target: '_blank',
                                ref: et,
                                className: U.link,
                                onClick: () => (null == g ? void 0 : g(s))
                            },
                            ee
                        ),
                        {
                            'aria-label': B,
                            focusProps: { enabled: !1 },
                            children: [
                                (0, r.jsxs)('div', {
                                    className: U.linkTop,
                                    children: [
                                        (0, r.jsx)(P, {
                                            className: j,
                                            channel: s,
                                            guild: H,
                                            hasActiveThreads: R,
                                            locked: O,
                                            withGuildIcon: q
                                        }),
                                        (0, r.jsx)(d.Z, {
                                            className: a()(U.name, { [U.activeEvent]: X }),
                                            'aria-hidden': !0,
                                            children: null == i ? es : i
                                        }),
                                        l.Children.count(w) > 0
                                            ? (0, r.jsx)('div', {
                                                  onClick: M,
                                                  className: U.children,
                                                  children: w
                                              })
                                            : null
                                    ]
                                }),
                                null != y
                                    ? (0, r.jsx)('div', {
                                          className: a()(U.linkBottom, { [U.withGuildIcon]: q }),
                                          children: (0, r.jsx)(E.Text, {
                                              color: null != G ? G : 'text-muted',
                                              variant: 'text-xs/medium',
                                              className: U.subtitle,
                                              children: y
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
                className: a()(
                    x,
                    null != g || null != m || null != f || V ? U.wrapper : U.notInteractive,
                    (() => {
                        if (_) return a()(h.selectedChannel, C.SELECTED);
                        if (T) return a()(h.selectedChannel, C.CONNECTED);
                        if (O) return C.LOCKED;
                        if (c) return C.MUTED;
                        if (I)
                            if (J) return C.UNREAD_IMPORTANT;
                            else return C.UNREAD_LESS_IMPORTANT;
                        return null;
                    })(),
                    (function (e) {
                        switch (e) {
                            case S.d4z.GUILD_STAGE_VOICE:
                            case S.d4z.GUILD_VOICE:
                                return U.typeVoice;
                            case S.d4z.ANNOUNCEMENT_THREAD:
                            case S.d4z.PUBLIC_THREAD:
                            case S.d4z.PRIVATE_THREAD:
                                return U.typeThread;
                            case S.d4z.GUILD_ANNOUNCEMENT:
                            case S.d4z.GUILD_TEXT:
                            case S.d4z.GUILD_STORE:
                            case S.d4z.GUILD_FORUM:
                            case S.d4z.GUILD_MEDIA:
                            default:
                                return U.typeDefault;
                        }
                    })(null != k ? k : F)
                ),
                onMouseUp: (e) => (null == m ? void 0 : m(e, s)),
                onMouseDown: (e) => (null == f ? void 0 : f(e, s)),
                onContextMenu: (e) => (null == v ? void 0 : v(e, s)),
                onMouseEnter: W,
                onMouseLeave: z,
                children: [c || !I ? null : (0, r.jsx)('div', { className: a()(U.unread, J ? U.unreadImportant : void 0) }), null != (n = null == b ? void 0 : b(eo)) ? n : eo]
            })
        });
    });
