(n.d(t, { Z: () => et }), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    p = n(755721),
    m = n(481060),
    f = n(287734),
    _ = n(607070),
    g = n(385499),
    h = n(313889),
    b = n(825829),
    E = n(226192),
    y = n(36459),
    x = n(336197),
    C = n(359110),
    v = n(726033),
    O = n(496675),
    j = n(594174),
    I = n(5192),
    S = n(51144),
    T = n(937889),
    N = n(739566),
    P = n(779125),
    A = n(890410),
    w = n(464891),
    Z = n(507418),
    R = n(348238),
    L = n(38267),
    D = n(605568),
    M = n(834129),
    k = n(959517),
    U = n(981631),
    F = n(674563),
    B = n(590433),
    G = n(388032),
    H = n(860918);
function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function z(e, t) {
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
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function K(e, t) {
    let { popouts: n, selected: r, setPopout: l } = (0, L.Z)(e.id, k.d$),
        { usernameProfile: a, avatarProfile: o } = n,
        s = (0, R.wq)(e.author.id, t.id),
        c = (0, R.RN)(e.author.id, t.id, e.id),
        u = (0, R.XO)(e, t, a, l);
    return {
        selected: r,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, R.R9)(o, l),
        onPopoutRequestClose: i.useCallback(
            () =>
                l({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [l]
        ),
        renderPopout: Z.Z,
        showAvatarPopout: o,
        showUsernamePopout: a
    };
}
function Y(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    v.Z,
                    z(V({}, i), {
                        user: t,
                        currentUser: n,
                        guildId: e.guild_id,
                        channelId: e.id
                    })
                );
    }, [e, t, n]);
}
function X(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)('div', {
        className: a()(H.footerContainer, n, { [H.compact]: i }),
        children: t
    });
}
function q(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: a()(H.annotationRow, n),
        children: t
    });
}
function Q(e, t) {
    switch (e) {
        case h.d.DELETE_USER_MESSAGE:
            return (0, r.jsx)(
                m.XHJ,
                V(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: H.alertActionIcon
                    },
                    t
                )
            );
        case h.d.SET_COMPLETED:
            return (0, r.jsx)(
                m.dz2,
                V(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: a()(H.alertActionIcon, H.alertActionSetCompletedIcon)
                    },
                    t
                )
            );
        case h.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(
                m.U65,
                V(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: H.alertActionIcon
                    },
                    t
                )
            );
        default:
            return null;
    }
}
function J(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, d.e7)([j.default], () => j.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return Q(e, {});
        let l = (function (e, t, n) {
            var r;
            let i = null != (r = I.ZP.getNickname(n, null, t)) ? r : S.ZP.getUserTag(t),
                l = s()(e.ts),
                a = ''.concat(i, ' ').concat(l.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case h.d.DELETE_USER_MESSAGE:
                        return G.intl.formatToPlainString(G.t.BtKE9v, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case h.d.SET_COMPLETED:
                        return G.intl.formatToPlainString(G.t.dyo9UV, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case h.d.SUBMIT_FEEDBACK:
                        return G.intl.formatToPlainString(G.t['C9/kIC'], {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, i, n);
        return (0, r.jsx)(m.ua7, {
            text: l,
            children: (t) => Q(e, t)
        });
    } catch (e) {
        return null;
    }
}
function $(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, r.jsx)('div', {
        className: H.alertActionsIconContainer,
        children: i.map((e) =>
            (0, r.jsx)(
                J,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let ee = i.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: l, compact: a, interactionUserId: o } = e,
        s = K(n, i),
        c = Y(i, n.author),
        u = (0, N.ZP)(n),
        d = (0, w.CF)(
            V(
                {
                    message: n,
                    channel: i,
                    author: u,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: a
                },
                s
            ),
            c
        ),
        p = j.default.getUser(o),
        f = K(n, i),
        _ = Y(i, p, j.default.getCurrentUser());
    if (null != p) {
        let e = (0, N.ij)(p, i),
            r = (0, w.CF)(
                V(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: a
                    },
                    f
                ),
                _
            );
        t = () => r;
    }
    return (0, r.jsx)(m.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: H.spanCorrection,
        children: (0, b.Mq)(
            n,
            l,
            () =>
                (0, r.jsx)('div', {
                    className: H.channelNameContainer,
                    children: (0, r.jsx)(P.Z, {
                        channel: l,
                        className: H.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function et(e) {
    var t;
    let { id: n, compact: l, message: o, channel: s } = e,
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: j, onMouseLeave: I }
        } = (0, D.m)(!0),
        S = (0, c.JA)(null != n ? n : ''),
        { onFocus: N } = S,
        P = W(S, ['onFocus']),
        { isFocused: Z, handleFocus: L, handleBlur: k } = (0, R.bb)(N),
        Y = (0, d.e7)([_.Z], () => _.Z.keyboardModeEnabled),
        Q = (0, d.e7)([O.Z], () => O.Z.can(U.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: J, embedChannel: et, decisionId: en, keywordMatchedContent: er, keyword: ei, content: el, flaggedMessageId: ea, timeoutDuration: eo, decisionReason: es, alertActionsExecution: ec, quarantineType: eu, interactionUserId: ed } = (0, b.ZP)(o),
        ep = i.useMemo(() => (0, T.k$)(el, er, s.id), [el, er, s]),
        em = K(o, s),
        { selected: ef } = em,
        e_ = W(em, ['selected']),
        eg = i.useCallback(() => {
            (0, E._s)(o.id, el, en, s);
        }, [o.id, el, en, s]),
        eh = i.useCallback(
            (e) => {
                null != ea && null != et && (e.stopPropagation(), e.preventDefault(), (0, x.Z)(U.Z5c.CHANNEL(null == et ? void 0 : et.guild_id, null == et ? void 0 : et.id, ea)));
            },
            [et, ea]
        ),
        eb = i.useCallback(
            (e) => {
                null != et &&
                    (f.default.selectChannel({
                        guildId: et.guild_id,
                        channelId: e,
                        messageId: o.id
                    }),
                    (0, C.Kh)(e));
            },
            [o, et]
        ),
        eE = i.useCallback(() => {
            (0, y.Xx)(o.id, s, h.d.DELETE_USER_MESSAGE);
        }, [s, o.id]),
        ey = (0, B.L9)(Number(eo)),
        ex = null != es,
        eC = Q && null != ea && (null == ec || !ec.actions.hasOwnProperty(h.d.DELETE_USER_MESSAGE)),
        ev = o.embeds.length > 0 ? (null == (t = o.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) ? void 0 : t.rawValue) : null,
        eO = null != ev;
    return (0, r.jsx)('div', {
        onMouseEnter: j,
        onMouseLeave: I,
        children: (0, r.jsx)(M.Z, {
            className: a()(H.mainContainer, { [H.compact]: l }),
            iconNode: l ? null : (0, r.jsx)(D.S, { src: v }),
            iconContainerClassName: H.iconContainer,
            compact: l,
            children: (0, r.jsxs)('div', {
                className: a()(H.content, { [H.compact]: l }),
                children: [
                    (0, r.jsx)(w.nD, {
                        message: o,
                        messageClassname: H.spanCorrection,
                        className: a()(H.usernameContainer, H.spanCorrection, { [H.compact]: l }),
                        username: (0, r.jsxs)('div', {
                            className: H.spanCorrection,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: H.username,
                                    children: G.intl.string(G.t.hG1StL)
                                }),
                                (0, r.jsx)(g.Z, {
                                    type: F.Hb.SYSTEM_DM,
                                    className: H.systemTag
                                }),
                                (0, r.jsx)(ee, {
                                    message: o,
                                    channel: s,
                                    embedChannel: et,
                                    compact: l,
                                    interactionUserId: ed
                                })
                            ]
                        }),
                        compact: l,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(H.messageContent, { [H.compact]: l }),
                        children: (0, r.jsx)(
                            A.Z,
                            z(V({}, P), {
                                message: o,
                                channel: et,
                                content: ep,
                                compact: l,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: a()(H.embedCard, {
                                    [H.compact]: l,
                                    [H.selected]: ef || (Y && Z),
                                    [H.isClickable]: null != ea && null != et
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: H.centeredRowContainer,
                                            children: [
                                                null != ei &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(m.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                children: G.intl.format(G.t.SYIUTU, { keyword: ei })
                                                            }),
                                                            (0, r.jsx)('div', { className: a()(H.dot, H.dotMargin) })
                                                        ]
                                                    }),
                                                null != J &&
                                                    (0, r.jsx)(m.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        children: G.intl.format(G.t.ZoOyKC, { ruleName: J })
                                                    }),
                                                null != ey &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: a()(H.dot, H.dotMargin) }),
                                                            (0, r.jsx)(m.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: H.__invalid_footerText,
                                                                children: G.intl.format(G.t['3LYql5'], { duration: ey })
                                                            })
                                                        ]
                                                    }),
                                                null != eu &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: a()(H.dot, H.dotMargin) }),
                                                            (0, r.jsx)(m.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: H.titleCase,
                                                                children: G.intl.format(G.t['26bB2N'], { reason: (0, b.hU)(eu) })
                                                            })
                                                        ]
                                                    })
                                            ]
                                        }),
                                        ex
                                            ? (0, r.jsx)(q, {
                                                  children: (0, r.jsx)(m.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'text-default',
                                                      tag: 'span',
                                                      children: es
                                                  })
                                              })
                                            : null
                                    ]
                                }),
                                popoutProps: e_,
                                zalgo: !0,
                                onFocus: L,
                                onBlur: k,
                                onClick: eh
                            })
                        )
                    }),
                    (0, r.jsx)(X, {
                        compact: l,
                        children: (0, r.jsxs)('div', {
                            className: a()(H.centeredRowContainer, H.buttonContainer, { [H.compact]: l }),
                            children: [
                                (0, r.jsx)(p.zx, {
                                    onClick: (e) => {
                                        var t;
                                        null == (t = e_.onContextMenuModerateUser) || t.call(e_, e);
                                    },
                                    color: p.zx.Colors.LINK,
                                    look: p.zx.Looks.LINK,
                                    size: p.zx.Sizes.SMALL,
                                    className: H.buttonStyle,
                                    children: (0, r.jsxs)('div', {
                                        className: H.footerAction,
                                        children: [
                                            (0, r.jsx)(m.b7C, {
                                                size: 'xs',
                                                color: u.Z.BLUE_345,
                                                className: H.footerIcon
                                            }),
                                            (0, r.jsx)(m.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: G.intl.string(G.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                eO
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: H.dot }),
                                              (0, r.jsx)(p.zx, {
                                                  onClick: () => eb(ev),
                                                  color: p.zx.Colors.LINK,
                                                  look: p.zx.Looks.LINK,
                                                  size: p.zx.Sizes.SMALL,
                                                  className: H.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: H.footerAction,
                                                      children: (0, r.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: G.intl.string(G.t.jtkj09)
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsx)('div', { className: H.dot }),
                                (0, r.jsx)(p.zx, {
                                    onClick: eg,
                                    color: p.zx.Colors.LINK,
                                    look: p.zx.Looks.LINK,
                                    size: p.zx.Sizes.SMALL,
                                    className: H.buttonStyle,
                                    children: (0, r.jsx)('div', {
                                        className: H.footerAction,
                                        children: (0, r.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: G.intl.string(G.t['94JbMz'])
                                        })
                                    })
                                }),
                                eC
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: H.dot }),
                                              (0, r.jsx)(p.zx, {
                                                  onClick: eE,
                                                  color: p.zx.Colors.LINK,
                                                  look: p.zx.Looks.LINK,
                                                  size: p.zx.Sizes.SMALL,
                                                  className: H.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: H.footerAction,
                                                      children: (0, r.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: G.intl.string(G.t['3A52tb'])
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != ec
                                    ? (0, r.jsx)($, {
                                          alertActionsExecution: ec,
                                          guildId: s.guild_id
                                      })
                                    : null
                            ]
                        })
                    })
                ]
            })
        })
    });
}
