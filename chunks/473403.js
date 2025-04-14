n.d(t, {
    ZP: () => R,
    _W: () => Z,
    ge: () => w,
    je: () => x
});
var a = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(91192),
    c = n(442837),
    s = n(481060),
    u = n(43267),
    _ = n(933557),
    d = n(471445),
    f = n(111028),
    p = n(727429),
    m = n(810123),
    g = n(690221),
    I = n(430824),
    h = n(158776),
    v = n(111583),
    b = n(594174),
    y = n(998502),
    S = n(981631),
    E = n(490897),
    C = n(915887),
    A = n(768107);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = {
    SELECTED: A.modeSelected,
    CONNECTED: A.modeConnected,
    UNREAD_IMPORTANT: A.modeUnreadImportant,
    UNREAD_LESS_IMPORTANT: A.modeUnreadLessImportant,
    MUTED: A.modeMuted,
    LOCKED: A.modeLocked
};
function T(e) {
    e.preventDefault(), e.stopPropagation();
}
let L = y.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
function w(e) {
    let { channel: t, size: n = s.EFr.SIZE_20 } = e;
    return (0, a.jsx)(L, {
        src: (0, u.x)(t),
        'aria-hidden': !0,
        size: n
    });
}
function x(e) {
    let { channel: t, size: n = s.EFr.SIZE_20 } = e,
        r = (0, c.e7)([b.default], () => b.default.getUser(null == t ? void 0 : t.recipients[0])),
        i = (0, c.e7)([v.Z], () => !(null == r || null == t || t.isMultiUserDM()) && null != v.Z.getTypingUsers(null == t ? void 0 : t.id)[null == r ? void 0 : r.id]),
        { status: o, isMobile: l } = (0, c.cj)([h.Z], () =>
            null == r || null == t || t.isMultiUserDM()
                ? {
                      status: null,
                      isMobile: !1
                  }
                : {
                      status: h.Z.getStatus(r.id),
                      isMobile: h.Z.isMobileOnline(r.id)
                  }
        );
    return (0, a.jsx)(L, {
        size: n,
        src: null == r ? void 0 : r.getAvatarURL(void 0, 40),
        status: o,
        isMobile: l,
        isTyping: i,
        'aria-label': null == r ? void 0 : r.username,
        statusTooltip: !0
    });
}
let Z = (e) => {
        let { className: t, containerClassName: n, channel: r, locked: i, hasActiveThreads: l, withGuildIcon: u } = e,
            _ = (0, c.e7)([I.Z], () => I.Z.getGuild(r.guild_id), [r.guild_id]),
            f = r.type === S.d4z.DM || r.type === S.d4z.GROUP_DM,
            p = null;
        if (u && null != _ && !f)
            p = (0, a.jsx)(m.Z, {
                size: m.E.SMALL_32,
                className: A.iconContainerWithGuildIcon,
                iconClassName: A.iconWithGuildIcon,
                channel: r,
                guild: _,
                locked: i,
                hasActiveThreads: l
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case S.d4z.DM:
                        return function () {
                            return (0, a.jsx)(x, { channel: e });
                        };
                    case S.d4z.GROUP_DM:
                        return function () {
                            return (0, a.jsx)(w, { channel: e });
                        };
                    default:
                        return (0, d.KS)(e, t, n);
                }
            })(r, _, {
                locked: i,
                hasActiveThreads: l
            });
            if (null == e) return null;
            p = (0, a.jsx)(e, {
                color: 'currentColor',
                className: o()(A.icon, t)
            });
        }
        let g = u ? (null == _ ? void 0 : _.name) : (0, d.bT)(r, _, i, l),
            h = u && null != _ ? ''.concat(_.name, ' - ').concat(g, ' icon') : ''.concat(g, ' icon');
        return (0, a.jsx)(s.ua7, {
            text: g,
            delay: 500,
            children: (e) =>
                (0, a.jsx)(
                    'div',
                    P(N({}, e), {
                        role: 'img',
                        'aria-label': h,
                        className: o()(A.iconContainer, n),
                        children: p
                    })
                )
        });
    },
    R = r.forwardRef(function (e, t) {
        var n;
        let {
                channel: i,
                name: c,
                muted: u,
                selected: d,
                connected: m,
                unread: I,
                locked: h,
                hasActiveThreads: v,
                onClick: b,
                onMouseDown: y,
                onMouseUp: L,
                onContextMenu: w,
                connectDragPreview: x,
                className: R,
                iconClassName: D,
                subtitle: k,
                subtitleColor: G,
                channel: { type: j },
                onMouseEnter: M,
                onMouseLeave: B,
                'aria-label': U,
                children: W,
                guild: F,
                channelTypeOverride: V,
                forceInteractable: H,
                mentionCount: Q,
                resolvedUnreadSetting: z,
                isFavoriteSuggestion: q,
                withGuildIcon: Y,
                hasActiveEvent: X = !1
            } = e,
            K = z === E.i.ALL_MESSAGES || (null != Q && Q > 0),
            J = (0, l.JA)(i.id),
            { role: $ } = J,
            ee = (function (e, t) {
                if (null == e) return {};
                var n,
                    a,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            a,
                            r = {},
                            i = Object.keys(e);
                        for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                }
                return r;
            })(J, ['role']),
            et = r.useRef(null),
            en = r.useRef(null),
            ea = (0, p.Z)(i),
            er = S.Z5c.CHANNEL(ea, i.id),
            ei = (0, _.ZP)(i),
            eo = i.isGuildVocal(),
            el = (0, a.jsx)('div', {
                className: o()({ [A.favoritesSuggestion]: q }),
                ref: en,
                children: (0, a.jsxs)(
                    g.Z,
                    P(
                        N(
                            {
                                role: eo && !m ? 'button' : 'link',
                                href: eo ? void 0 : er,
                                target: '_blank',
                                ref: et,
                                className: A.link,
                                onClick: () => (null == b ? void 0 : b(i))
                            },
                            ee
                        ),
                        {
                            'aria-label': U,
                            focusProps: { enabled: !1 },
                            children: [
                                (0, a.jsxs)('div', {
                                    className: A.linkTop,
                                    children: [
                                        (0, a.jsx)(Z, {
                                            className: D,
                                            channel: i,
                                            guild: F,
                                            hasActiveThreads: v,
                                            locked: h,
                                            withGuildIcon: Y
                                        }),
                                        (0, a.jsx)(f.Z, {
                                            className: o()(A.name, { [A.activeEvent]: X }),
                                            'aria-hidden': !0,
                                            children: null == c ? ei : c
                                        }),
                                        r.Children.count(W) > 0
                                            ? (0, a.jsx)('div', {
                                                  onClick: T,
                                                  className: A.children,
                                                  children: W
                                              })
                                            : null
                                    ]
                                }),
                                null != k
                                    ? (0, a.jsx)('div', {
                                          className: o()(A.linkBottom, { [A.withGuildIcon]: Y }),
                                          children: (0, a.jsx)(s.Text, {
                                              color: null != G ? G : 'text-muted',
                                              variant: 'text-xs/medium',
                                              className: A.subtitle,
                                              children: k
                                          })
                                      })
                                    : null
                            ]
                        }
                    )
                )
            });
        return (0, a.jsx)(s.tEY, {
            focusTarget: et,
            ringTarget: en,
            offset: {
                top: 2,
                bottom: 2,
                right: 4
            },
            children: (0, a.jsxs)('div', {
                ref: t,
                className: o()(
                    R,
                    null != b || null != L || null != y || H ? A.wrapper : A.notInteractive,
                    (() => {
                        if (d) return o()(C.selectedChannel, O.SELECTED);
                        if (m) return o()(C.selectedChannel, O.CONNECTED);
                        if (h) return O.LOCKED;
                        if (u) return O.MUTED;
                        if (I)
                            if (K) return O.UNREAD_IMPORTANT;
                            else return O.UNREAD_LESS_IMPORTANT;
                        return null;
                    })(),
                    (function (e) {
                        switch (e) {
                            case S.d4z.GUILD_STAGE_VOICE:
                            case S.d4z.GUILD_VOICE:
                                return A.typeVoice;
                            case S.d4z.ANNOUNCEMENT_THREAD:
                            case S.d4z.PUBLIC_THREAD:
                            case S.d4z.PRIVATE_THREAD:
                                return A.typeThread;
                            case S.d4z.GUILD_ANNOUNCEMENT:
                            case S.d4z.GUILD_TEXT:
                            case S.d4z.GUILD_STORE:
                            case S.d4z.GUILD_FORUM:
                            case S.d4z.GUILD_MEDIA:
                            default:
                                return A.typeDefault;
                        }
                    })(null != V ? V : j)
                ),
                onMouseUp: (e) => (null == L ? void 0 : L(e, i)),
                onMouseDown: (e) => (null == y ? void 0 : y(e, i)),
                onContextMenu: (e) => (null == w ? void 0 : w(e, i)),
                onMouseEnter: M,
                onMouseLeave: B,
                children: [u || !I ? null : (0, a.jsx)('div', { className: o()(A.unread, K ? A.unreadImportant : void 0) }), null != (n = null == x ? void 0 : x(el)) ? n : el]
            })
        });
    });
