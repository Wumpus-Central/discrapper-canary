(n.d(t, { Z: () => ee }), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    p = n(481060),
    m = n(287734),
    f = n(607070),
    _ = n(385499),
    g = n(313889),
    h = n(825829),
    b = n(226192),
    E = n(36459),
    C = n(336197),
    O = n(359110),
    y = n(726033),
    v = n(496675),
    x = n(594174),
    I = n(5192),
    j = n(51144),
    S = n(937889),
    T = n(739566),
    N = n(779125),
    P = n(890410),
    A = n(464891),
    w = n(507418),
    Z = n(348238),
    R = n(38267),
    D = n(605568),
    L = n(834129),
    M = n(959517),
    k = n(981631),
    U = n(674563),
    F = n(590433),
    B = n(388032),
    G = n(860918);
function H(e) {
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
function V(e, t) {
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
function z(e, t) {
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
function W(e, t) {
    let { popouts: n, selected: r, setPopout: l } = (0, R.Z)(e.id, M.d$),
        { usernameProfile: a, avatarProfile: o } = n,
        s = (0, Z.wq)(e.author.id, t.id),
        c = (0, Z.RN)(e.author.id, t.id, e.id),
        u = (0, Z.XO)(e, t, a, l);
    return {
        selected: r,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, Z.R9)(o, l),
        onPopoutRequestClose: i.useCallback(
            () =>
                l({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [l]
        ),
        renderPopout: w.Z,
        showAvatarPopout: o,
        showUsernamePopout: a
    };
}
function K(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    y.Z,
                    V(H({}, i), {
                        user: t,
                        currentUser: n,
                        guildId: e.guild_id,
                        channelId: e.id
                    })
                );
    }, [e, t, n]);
}
function Y(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)('div', {
        className: a()(G.footerContainer, n, { [G.compact]: i }),
        children: t
    });
}
function X(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: a()(G.annotationRow, n),
        children: t
    });
}
function q(e, t) {
    switch (e) {
        case g.d.DELETE_USER_MESSAGE:
            return (0, r.jsx)(
                p.XHJ,
                H(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: G.alertActionIcon
                    },
                    t
                )
            );
        case g.d.SET_COMPLETED:
            return (0, r.jsx)(
                p.dz2,
                H(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: a()(G.alertActionIcon, G.alertActionSetCompletedIcon)
                    },
                    t
                )
            );
        case g.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(
                p.U65,
                H(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: G.alertActionIcon
                    },
                    t
                )
            );
        default:
            return null;
    }
}
function Q(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, d.e7)([x.default], () => x.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return q(e, {});
        let l = (function (e, t, n) {
            var r;
            let i = null != (r = I.ZP.getNickname(n, null, t)) ? r : j.ZP.getUserTag(t),
                l = s()(e.ts),
                a = ''.concat(i, ' ').concat(l.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case g.d.DELETE_USER_MESSAGE:
                        return B.intl.formatToPlainString(B.t.BtKE9v, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case g.d.SET_COMPLETED:
                        return B.intl.formatToPlainString(B.t.dyo9UV, {
                            userName: i,
                            timestamp: l.fromNow()
                        });
                    case g.d.SUBMIT_FEEDBACK:
                        return B.intl.formatToPlainString(B.t['C9/kIC'], {
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
        return (0, r.jsx)(p.ua7, {
            text: l,
            children: (t) => q(e, t)
        });
    } catch (e) {
        return null;
    }
}
function J(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, r.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: i.map((e) =>
            (0, r.jsx)(
                Q,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let $ = i.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: l, compact: a, interactionUserId: o } = e,
        s = W(n, i),
        c = K(i, n.author),
        u = (0, T.ZP)(n),
        d = (0, A.CF)(
            H(
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
        m = x.default.getUser(o),
        f = W(n, i),
        _ = K(i, m, x.default.getCurrentUser());
    if (null != m) {
        let e = (0, T.ij)(m, i),
            r = (0, A.CF)(
                H(
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
    return (0, r.jsx)(p.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: G.spanCorrection,
        children: (0, h.Mq)(
            n,
            l,
            () =>
                (0, r.jsx)('div', {
                    className: G.channelNameContainer,
                    children: (0, r.jsx)(N.Z, {
                        channel: l,
                        className: G.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => d,
            t
        )
    });
});
function ee(e) {
    var t;
    let { id: n, compact: l, message: o, channel: s } = e,
        {
            avatarSrc: y,
            eventHandlers: { onMouseEnter: x, onMouseLeave: I }
        } = (0, D.m)(!0),
        j = (0, c.JA)(null != n ? n : ''),
        { onFocus: T } = j,
        N = z(j, ['onFocus']),
        { isFocused: w, handleFocus: R, handleBlur: M } = (0, Z.bb)(T),
        K = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        q = (0, d.e7)([v.Z], () => v.Z.can(k.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: Q, embedChannel: ee, decisionId: et, keywordMatchedContent: en, keyword: er, content: ei, flaggedMessageId: el, timeoutDuration: ea, decisionReason: eo, alertActionsExecution: es, quarantineType: ec, interactionUserId: eu } = (0, h.ZP)(o),
        ed = i.useMemo(() => (0, S.k$)(ei, en, s.id), [ei, en, s]),
        ep = W(o, s),
        { selected: em } = ep,
        ef = z(ep, ['selected']),
        e_ = i.useCallback(() => {
            (0, b._s)(o.id, ei, et, s);
        }, [o.id, ei, et, s]),
        eg = i.useCallback(
            (e) => {
                null != el && null != ee && (e.stopPropagation(), e.preventDefault(), (0, C.Z)(k.Z5c.CHANNEL(null == ee ? void 0 : ee.guild_id, null == ee ? void 0 : ee.id, el)));
            },
            [ee, el]
        ),
        eh = i.useCallback(
            (e) => {
                null != ee &&
                    (m.default.selectChannel({
                        guildId: ee.guild_id,
                        channelId: e,
                        messageId: o.id
                    }),
                    (0, O.Kh)(e));
            },
            [o, ee]
        ),
        eb = i.useCallback(() => {
            (0, E.Xx)(o.id, s, g.d.DELETE_USER_MESSAGE);
        }, [s, o.id]),
        eE = (0, F.L9)(Number(ea)),
        eC = null != eo,
        eO = q && null != el && (null == es || !es.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        ey = o.embeds.length > 0 ? (null == (t = o.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) ? void 0 : t.rawValue) : null,
        ev = null != ey;
    return (0, r.jsx)('div', {
        onMouseEnter: x,
        onMouseLeave: I,
        children: (0, r.jsx)(L.Z, {
            className: a()(G.mainContainer, { [G.compact]: l }),
            iconNode: l ? null : (0, r.jsx)(D.S, { src: y }),
            iconContainerClassName: G.iconContainer,
            compact: l,
            children: (0, r.jsxs)('div', {
                className: a()(G.content, { [G.compact]: l }),
                children: [
                    (0, r.jsx)(A.nD, {
                        message: o,
                        messageClassname: G.spanCorrection,
                        className: a()(G.usernameContainer, G.spanCorrection, { [G.compact]: l }),
                        username: (0, r.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: B.intl.string(B.t.hG1StL)
                                }),
                                (0, r.jsx)(_.Z, {
                                    type: U.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, r.jsx)($, {
                                    message: o,
                                    channel: s,
                                    embedChannel: ee,
                                    compact: l,
                                    interactionUserId: eu
                                })
                            ]
                        }),
                        compact: l,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: a()(G.messageContent, { [G.compact]: l }),
                        children: (0, r.jsx)(
                            P.Z,
                            V(H({}, N), {
                                message: o,
                                channel: ee,
                                content: ed,
                                compact: l,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: a()(G.embedCard, {
                                    [G.compact]: l,
                                    [G.selected]: em || (K && w),
                                    [G.isClickable]: null != el && null != ee
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: G.centeredRowContainer,
                                            children: [
                                                null != er &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                children: B.intl.format(B.t.SYIUTU, { keyword: er })
                                                            }),
                                                            (0, r.jsx)('div', { className: a()(G.dot, G.dotMargin) })
                                                        ]
                                                    }),
                                                null != Q &&
                                                    (0, r.jsx)(p.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        children: B.intl.format(B.t.ZoOyKC, { ruleName: Q })
                                                    }),
                                                null != eE &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: G.__invalid_footerText,
                                                                children: B.intl.format(B.t['3LYql5'], { duration: eE })
                                                            })
                                                        ]
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: G.titleCase,
                                                                children: B.intl.format(B.t['26bB2N'], { reason: (0, h.hU)(ec) })
                                                            })
                                                        ]
                                                    })
                                            ]
                                        }),
                                        eC
                                            ? (0, r.jsx)(X, {
                                                  children: (0, r.jsx)(p.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'text-default',
                                                      tag: 'span',
                                                      children: eo
                                                  })
                                              })
                                            : null
                                    ]
                                }),
                                popoutProps: ef,
                                zalgo: !0,
                                onFocus: R,
                                onBlur: M,
                                onClick: eg
                            })
                        )
                    }),
                    (0, r.jsx)(Y, {
                        compact: l,
                        children: (0, r.jsxs)('div', {
                            className: a()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: l }),
                            children: [
                                (0, r.jsxs)('div', {
                                    className: G.footerAction,
                                    children: [
                                        (0, r.jsx)(p.b7C, {
                                            size: 'xs',
                                            color: u.Z.BRAND,
                                            className: G.footerIcon
                                        }),
                                        (0, r.jsx)(p.Avr, {
                                            variant: 'primary',
                                            size: 'sm',
                                            textVariant: 'text-xs/normal',
                                            text: B.intl.string(B.t.DEoVWV),
                                            onClick: (e) => {
                                                var t;
                                                null == (t = ef.onContextMenuModerateUser) || t.call(ef, e);
                                            }
                                        })
                                    ]
                                }),
                                ev
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: G.dot }),
                                              (0, r.jsx)('div', {
                                                  className: G.footerAction,
                                                  children: (0, r.jsx)(p.Avr, {
                                                      onClick: () => eh(ey),
                                                      variant: 'primary',
                                                      size: 'sm',
                                                      textVariant: 'text-xs/normal',
                                                      text: B.intl.string(B.t.jtkj09)
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsx)('div', { className: G.dot }),
                                (0, r.jsx)('div', {
                                    className: G.footerAction,
                                    children: (0, r.jsx)(p.Avr, {
                                        onClick: e_,
                                        variant: 'primary',
                                        size: 'sm',
                                        textVariant: 'text-xs/normal',
                                        text: B.intl.string(B.t['94JbMz'])
                                    })
                                }),
                                eO
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: G.dot }),
                                              (0, r.jsx)('div', {
                                                  className: G.footerAction,
                                                  children: (0, r.jsx)(p.Avr, {
                                                      onClick: eb,
                                                      variant: 'primary',
                                                      size: 'sm',
                                                      textVariant: 'text-xs/normal',
                                                      text: B.intl.string(B.t['3A52tb'])
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != es
                                    ? (0, r.jsx)(J, {
                                          alertActionsExecution: es,
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
