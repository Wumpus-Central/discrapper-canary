n.d(t, {
    Z: () => x,
    _: () => P
});
var r = n(200651),
    l = n(192379),
    a = n(120356),
    i = n.n(a),
    o = n(91192),
    s = n(442837),
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
    R = n(594174),
    f = n(998502),
    S = n(981631),
    p = n(490897),
    U = n(436804),
    D = n(81503);
function C(e) {
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
let h = {
    SELECTED: D.modeSelected,
    CONNECTED: D.modeConnected,
    UNREAD_IMPORTANT: D.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: D.modeUnreadLessImportant,
    MUTED: D.modeMuted,
    LOCKED: D.modeLocked
};
function m(e) {
    e.preventDefault(), e.stopPropagation();
}
let M = f.ZP.getEnableHardwareAcceleration() ? E.Xo$ : E.qEK;
function v(e) {
    let { channel: t } = e;
    return (0, r.jsx)(M, {
        src: (0, c.x)(t),
        'aria-hidden': !0,
        size: E.EFr.SIZE_20
    });
}
function b(e) {
    let { channel: t } = e,
        n = (0, s.e7)([R.default], () => R.default.getUser(null == t ? void 0 : t.recipients[0])),
        l = (0, s.e7)([g.Z], () => !(null == n || null == t || t.isMultiUserDM()) && null != g.Z.getTypingUsers(null == t ? void 0 : t.id)[null == n ? void 0 : n.id]),
        { status: a, isMobile: i } = (0, s.cj)([O.Z], () =>
            null == n || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: O.Z.getStatus(n.id),
                      isMobile: O.Z.isMobileOnline(n.id)
                  }
        );
    return (0, r.jsx)(M, {
        size: E.EFr.SIZE_20,
        src: null == n ? void 0 : n.getAvatarURL(void 0, 40),
        status: a,
        isMobile: i,
        isTyping: l,
        'aria-label': null == n ? void 0 : n.username,
        statusTooltip: !0
    });
}
let P = (e) => {
    let { className: t, channel: n, locked: l, hasActiveThreads: a, withGuildIcon: o } = e,
        c = (0, s.e7)([I.Z], () => I.Z.getGuild(n.guild_id), [n.guild_id]),
        u = n.type === S.d4z.DM || n.type === S.d4z.GROUP_DM,
        d = null;
    if (o && null != c && !u)
        d = (0, r.jsx)(T.Z, {
            size: T.E.SMALL_32,
            className: D.iconContainerWithGuildIcon,
            iconClassName: D.iconWithGuildIcon,
            channel: n,
            guild: c,
            locked: l,
            hasActiveThreads: a
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
        })(n, c, {
            locked: l,
            hasActiveThreads: a
        });
        if (null == e) return null;
        d = (0, r.jsx)(e, {
            color: 'currentColor',
            className: i()(D.icon, t)
        });
    }
    let A = o ? (null == c ? void 0 : c.name) : (0, _.bT)(n, c, l, a),
        N = o && null != c ? ''.concat(c.name, ' - ').concat(A, ' icon') : ''.concat(A, ' icon');
    return (0, r.jsx)(E.ua7, {
        text: A,
        delay: 500,
        children: (e) =>
            (0, r.jsx)(
                'div',
                L(C({}, e), {
                    role: 'img',
                    'aria-label': N,
                    className: i()(D.iconContainer),
                    children: d
                })
            )
    });
};
function x(e) {
    var t;
    let {
            channel: n,
            name: a,
            muted: s,
            selected: c,
            connected: _,
            unread: T,
            locked: I,
            hasActiveThreads: O,
            onClick: g,
            onMouseDown: R,
            onMouseUp: f,
            onContextMenu: M,
            connectDragPreview: v,
            className: b,
            iconClassName: x,
            subtitle: y,
            subtitleColor: j,
            channel: { type: G },
            onMouseEnter: F,
            onMouseLeave: W,
            'aria-label': B,
            children: w,
            guild: z,
            channelTypeOverride: k,
            forceInteractable: V,
            mentionCount: H,
            resolvedUnreadSetting: K,
            isFavoriteSuggestion: Z,
            withGuildIcon: q,
            hasActiveEvent: Y = !1
        } = e,
        X = K === p.i.ALL_MESSAGES || (null != H && H > 0),
        J = (0, o.JA)(n.id),
        { role: Q } = J,
        $ = (function (e, t) {
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
        })(J, ['role']),
        ee = l.useRef(null),
        et = l.useRef(null),
        en = (0, A.Z)(n),
        er = S.Z5c.CHANNEL(en, n.id),
        el = (0, u.ZP)(n),
        ea = n.isGuildVocal(),
        ei = (0, r.jsx)('div', {
            className: i()({ [D.favoritesSuggestion]: Z }),
            ref: et,
            children: (0, r.jsxs)(
                N.Z,
                L(
                    C(
                        {
                            role: ea && !_ ? 'button' : 'link',
                            href: ea ? void 0 : er,
                            target: '_blank',
                            ref: ee,
                            className: D.link,
                            onClick: () => (null == g ? void 0 : g(n))
                        },
                        $
                    ),
                    {
                        'aria-label': B,
                        focusProps: { enabled: !1 },
                        children: [
                            (0, r.jsxs)('div', {
                                className: D.linkTop,
                                children: [
                                    (0, r.jsx)(P, {
                                        className: x,
                                        channel: n,
                                        guild: z,
                                        hasActiveThreads: O,
                                        locked: I,
                                        withGuildIcon: q
                                    }),
                                    (0, r.jsx)(d.Z, {
                                        className: i()(D.name, { [D.activeEvent]: Y }),
                                        'aria-hidden': !0,
                                        children: null == a ? el : a
                                    }),
                                    l.Children.count(w) > 0
                                        ? (0, r.jsx)('div', {
                                              onClick: m,
                                              className: D.children,
                                              children: w
                                          })
                                        : null
                                ]
                            }),
                            null != y
                                ? (0, r.jsx)('div', {
                                      className: i()(D.linkBottom, { [D.withGuildIcon]: q }),
                                      children: (0, r.jsx)(E.Text, {
                                          color: null != j ? j : 'text-muted',
                                          variant: 'text-xs/medium',
                                          className: D.subtitle,
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
        focusTarget: ee,
        ringTarget: et,
        offset: {
            top: 2,
            bottom: 2,
            right: 4
        },
        children: (0, r.jsxs)('div', {
            className: i()(
                b,
                null != g || null != f || null != R || V ? D.wrapper : D.notInteractive,
                c ? i()(U.selectedChannel, h.SELECTED) : _ ? i()(U.selectedChannel, h.CONNECTED) : I ? h.LOCKED : s ? h.MUTED : T ? (X ? h.UNREAD_IMPORTANT : h.UNREAD_LESS_IMPORTANT) : null,
                (function (e) {
                    switch (e) {
                        case S.d4z.GUILD_STAGE_VOICE:
                        case S.d4z.GUILD_VOICE:
                            return D.typeVoice;
                        case S.d4z.ANNOUNCEMENT_THREAD:
                        case S.d4z.PUBLIC_THREAD:
                        case S.d4z.PRIVATE_THREAD:
                            return D.typeThread;
                        case S.d4z.GUILD_ANNOUNCEMENT:
                        case S.d4z.GUILD_TEXT:
                        case S.d4z.GUILD_STORE:
                        case S.d4z.GUILD_FORUM:
                        case S.d4z.GUILD_MEDIA:
                        default:
                            return D.typeDefault;
                    }
                })(null != k ? k : G)
            ),
            onMouseUp: (e) => (null == f ? void 0 : f(e, n)),
            onMouseDown: (e) => (null == R ? void 0 : R(e, n)),
            onContextMenu: (e) => (null == M ? void 0 : M(e, n)),
            onMouseEnter: F,
            onMouseLeave: W,
            children: [s || !T ? null : (0, r.jsx)('div', { className: i()(D.unread, X ? D.unreadImportant : void 0) }), null !== (t = null == v ? void 0 : v(ei)) && void 0 !== t ? t : ei]
        })
    });
}
