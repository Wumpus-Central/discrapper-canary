n.d(t, { Z: () => Q });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(91192),
    d = n(722770),
    u = n(442837),
    m = n(481060),
    _ = n(287734),
    h = n(607070),
    p = n(385499),
    g = n(313889),
    f = n(825829),
    x = n(226192),
    C = n(36459),
    v = n(336197),
    E = n(359110),
    I = n(347475),
    N = n(496675),
    S = n(594174),
    T = n(5192),
    b = n(51144),
    A = n(937889),
    j = n(739566),
    y = n(779125),
    Z = n(890410),
    R = n(464891),
    L = n(507418),
    P = n(348238),
    k = n(38267),
    M = n(83561),
    O = n(834129),
    D = n(959517),
    w = n(981631),
    F = n(674563),
    U = n(590433),
    B = n(388032),
    G = n(182620);
function H(e, t) {
    let { popouts: n, selected: i, setPopout: a } = (0, k.Z)(e.id, D.d$),
        { usernameProfile: r, avatarProfile: s } = n,
        o = (0, P.wq)(e.author.id, t.id),
        c = (0, P.RN)(e.author.id, t.id, e.id),
        d = (0, P.XO)(e, t, r, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, P.R9)(s, a),
        onPopoutRequestClose: l.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [a]
        ),
        renderPopout: L.Z,
        showAvatarPopout: s,
        showUsernamePopout: r
    };
}
function V(e, t) {
    return l.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(I.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function z(e) {
    let { children: t, className: n, compact: l } = e;
    return (0, i.jsx)('div', {
        className: r()(G.footerContainer, n, { [G.compact]: l }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: r()(G.annotationRow, n),
        children: t
    });
}
function K(e, t) {
    switch (e) {
        case g.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(m.XHJ, {
                size: 'xs',
                color: 'currentColor',
                className: G.alertActionIcon,
                ...t
            });
        case g.d.SET_COMPLETED:
            return (0, i.jsx)(m.dz2, {
                size: 'xs',
                color: 'currentColor',
                className: r()(G.alertActionIcon, G.alertActionSetCompletedIcon),
                ...t
            });
        case g.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(m.U65, {
                size: 'xs',
                color: 'currentColor',
                className: r()(G.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function Y(e) {
    let { alertAction: t, guildId: n } = e,
        l = (0, u.e7)([S.default], () => S.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == l) return K(e, {});
        let a = (function (e, t, n) {
            var i;
            let l = null !== (i = T.ZP.getNickname(n, null, t)) && void 0 !== i ? i : b.ZP.getUserTag(t),
                a = o()(e.ts),
                r = ''.concat(l, ' ').concat(a.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case g.d.DELETE_USER_MESSAGE:
                        return B.intl.formatToPlainString(B.t.BtKE9v, {
                            userName: l,
                            timestamp: a.fromNow()
                        });
                    case g.d.SET_COMPLETED:
                        return B.intl.formatToPlainString(B.t.dyo9UV, {
                            userName: l,
                            timestamp: a.fromNow()
                        });
                    case g.d.SUBMIT_FEEDBACK:
                        return B.intl.formatToPlainString(B.t['C9/kIC'], {
                            userName: l,
                            timestamp: a.fromNow()
                        });
                    default:
                        return r;
                }
            } catch (e) {
                return r;
            }
        })(t, l, n);
        return (0, i.jsx)(m.ua7, {
            text: a,
            children: (t) => K(e, t)
        });
    } catch (e) {
        return null;
    }
}
function X(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        l = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: l.map((e) =>
            (0, i.jsx)(
                Y,
                {
                    alertAction: e,
                    guildId: n
                },
                e.actionType
            )
        )
    });
}
let q = l.memo(function (e) {
    let t,
        { message: n, channel: l, embedChannel: a, compact: r, interactionUserId: s } = e,
        o = H(n, l),
        c = V(l, n.author),
        d = (0, j.ZP)(n),
        u = (0, R.CF)(
            {
                message: n,
                channel: l,
                author: d,
                guildId: null == l ? void 0 : l.guild_id,
                compact: r,
                ...o
            },
            c
        ),
        _ = S.default.getUser(s),
        h = H(n, l),
        p = V(l, _);
    if (null != _) {
        let e = (0, j.ij)(_, l),
            i = (0, R.CF)(
                {
                    message: n,
                    channel: l,
                    author: e,
                    guildId: null == l ? void 0 : l.guild_id,
                    compact: r,
                    ...h
                },
                p
            );
        t = () => i;
    }
    return (0, i.jsx)(m.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: G.spanCorrection,
        children: (0, f.Mq)(
            n,
            a,
            () =>
                (0, i.jsx)('div', {
                    className: G.channelNameContainer,
                    children: (0, i.jsx)(y.Z, {
                        channel: a,
                        className: G.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => u,
            t
        )
    });
});
function Q(e) {
    var t;
    let { id: n, compact: a, message: s, channel: o } = e,
        {
            avatarSrc: I,
            eventHandlers: { onMouseEnter: S, onMouseLeave: T }
        } = (0, M.m)(!0),
        { onFocus: b, ...j } = (0, c.JA)(null != n ? n : ''),
        { isFocused: y, handleFocus: L, handleBlur: k } = (0, P.bb)(b),
        D = (0, u.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        V = (0, u.e7)([N.Z], () => N.Z.can(w.Plq.MANAGE_MESSAGES, o), [o]),
        { ruleName: K, embedChannel: Y, decisionId: Q, keywordMatchedContent: J, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: el, quarantineType: ea, interactionUserId: er } = (0, f.ZP)(s),
        es = l.useMemo(() => (0, A.k$)(ee, J, o.id), [ee, J, o]),
        { selected: eo, ...ec } = H(s, o),
        ed = l.useCallback(() => {
            (0, x._s)(s.id, ee, Q, o);
        }, [s.id, ee, Q, o]),
        eu = l.useCallback(
            (e) => {
                null != et && null != Y && (e.stopPropagation(), e.preventDefault(), (0, v.Z)(w.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, et)));
            },
            [Y, et]
        ),
        em = l.useCallback(
            (e) => {
                null != Y &&
                    (_.default.selectChannel({
                        guildId: Y.guild_id,
                        channelId: e,
                        messageId: s.id
                    }),
                    (0, E.Kh)(e));
            },
            [s, Y]
        ),
        e_ = l.useCallback(() => {
            (0, C.Xx)(s.id, o, g.d.DELETE_USER_MESSAGE);
        }, [o, s.id]),
        eh = (0, U.L9)(Number(en)),
        ep = null != ei,
        eg = V && null != et && (null == el || !el.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        ef = s.embeds.length > 0 ? (null === (t = s.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        ex = null != ef;
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: T,
        children: (0, i.jsx)(O.Z, {
            className: r()(G.mainContainer, { [G.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(M.S, { src: I }),
            iconContainerClassName: G.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: r()(G.content, { [G.compact]: a }),
                children: [
                    (0, i.jsx)(R.nD, {
                        message: s,
                        messageClassname: G.spanCorrection,
                        className: r()(G.usernameContainer, G.spanCorrection, { [G.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: B.intl.string(B.t.hG1StL)
                                }),
                                (0, i.jsx)(p.Z, {
                                    type: F.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, i.jsx)(q, {
                                    message: s,
                                    channel: o,
                                    embedChannel: Y,
                                    compact: a,
                                    interactionUserId: er
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: r()(G.messageContent, { [G.compact]: a }),
                        children: (0, i.jsx)(Z.Z, {
                            ...j,
                            message: s,
                            channel: Y,
                            content: es,
                            compact: a,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(G.embedCard, {
                                [G.compact]: a,
                                [G.selected]: eo || (D && y),
                                [G.isClickable]: null != et && null != Y
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: G.centeredRowContainer,
                                        children: [
                                            null != $ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            children: B.intl.format(B.t.SYIUTU, { keyword: $ })
                                                        }),
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, i.jsx)(m.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: B.intl.format(B.t.ZoOyKC, { ruleName: K })
                                                }),
                                            null != eh &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.__invalid_footerText,
                                                            children: B.intl.format(B.t['3LYql5'], { duration: eh })
                                                        })
                                                    ]
                                                }),
                                            null != ea &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: r()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.titleCase,
                                                            children: B.intl.format(B.t['26bB2N'], { reason: (0, f.hU)(ea) })
                                                        })
                                                    ]
                                                })
                                        ]
                                    }),
                                    ep
                                        ? (0, i.jsx)(W, {
                                              children: (0, i.jsx)(m.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'text-normal',
                                                  tag: 'span',
                                                  children: ei
                                              })
                                          })
                                        : null
                                ]
                            }),
                            popoutProps: ec,
                            zalgo: !0,
                            onFocus: L,
                            onBlur: k,
                            onClick: eu
                        })
                    }),
                    (0, i.jsx)(z, {
                        compact: a,
                        children: (0, i.jsxs)('div', {
                            className: r()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: a }),
                            children: [
                                (0, i.jsx)(m.zxk, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ec.onContextMenuModerateUser) || void 0 === t || t.call(ec, e);
                                    },
                                    color: m.zxk.Colors.LINK,
                                    look: m.zxk.Looks.LINK,
                                    size: m.zxk.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: G.footerAction,
                                        children: [
                                            (0, i.jsx)(m.b7C, {
                                                size: 'xs',
                                                color: d.Z.BLUE_345,
                                                className: G.footerIcon
                                            }),
                                            (0, i.jsx)(m.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: B.intl.string(B.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                ex
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.zxk, {
                                                  onClick: () => em(ef),
                                                  color: m.zxk.Colors.LINK,
                                                  look: m.zxk.Looks.LINK,
                                                  size: m.zxk.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: B.intl.string(B.t.jtkj09)
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(m.zxk, {
                                    onClick: ed,
                                    color: m.zxk.Colors.LINK,
                                    look: m.zxk.Looks.LINK,
                                    size: m.zxk.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: B.intl.string(B.t['94JbMz'])
                                        })
                                    })
                                }),
                                eg
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.zxk, {
                                                  onClick: e_,
                                                  color: m.zxk.Colors.LINK,
                                                  look: m.zxk.Looks.LINK,
                                                  size: m.zxk.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: B.intl.string(B.t['3A52tb'])
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != el
                                    ? (0, i.jsx)(X, {
                                          alertActionsExecution: el,
                                          guildId: o.guild_id
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
