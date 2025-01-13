n.d(t, {
    Z: function () {
        return q;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    d = n(722770),
    u = n(442837),
    m = n(481060),
    h = n(287734),
    f = n(607070),
    p = n(385499),
    _ = n(313889),
    g = n(825829),
    E = n(226192),
    C = n(36459),
    I = n(336197),
    x = n(359110),
    N = n(347475),
    v = n(496675),
    T = n(594174),
    S = n(5192),
    A = n(51144),
    b = n(937889),
    j = n(739566),
    R = n(779125),
    Z = n(890410),
    P = n(464891),
    L = n(507418),
    y = n(348238),
    O = n(38267),
    M = n(83561),
    k = n(834129),
    D = n(959517),
    B = n(981631),
    U = n(674563),
    w = n(590433),
    F = n(388032),
    G = n(657733);
function V(e, t) {
    let { popouts: n, selected: i, setPopout: l } = (0, O.Z)(e.id, D.d$),
        { usernameProfile: a, avatarProfile: o } = n,
        s = (0, y.wq)(e.author.id, t.id),
        c = (0, y.RN)(e.author.id, t.id, e.id),
        d = (0, y.XO)(e, t, a, l),
        u = (0, y.R9)(o, l);
    return {
        selected: i,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: u,
        onPopoutRequestClose: r.useCallback(
            () =>
                l({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [l]
        ),
        renderPopout: L.Z,
        showAvatarPopout: o,
        showUsernamePopout: a
    };
}
function H(e, t) {
    return r.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, i.jsx)(N.Z, {
                    ...n,
                    userId: t.id,
                    user: t,
                    channelId: e.id,
                    guildId: e.guild_id
                });
    }, [e, t]);
}
function z(e) {
    let { children: t, className: n, compact: r } = e;
    return (0, i.jsx)('div', {
        className: a()(G.footerContainer, n, { [G.compact]: r }),
        children: t
    });
}
function W(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: a()(G.annotationRow, n),
        children: t
    });
}
function K(e, t) {
    switch (e) {
        case _.d.DELETE_USER_MESSAGE:
            return (0, i.jsx)(m.TrashIcon, {
                size: 'xs',
                color: 'currentColor',
                className: G.alertActionIcon,
                ...t
            });
        case _.d.SET_COMPLETED:
            return (0, i.jsx)(m.CheckmarkLargeIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a()(G.alertActionIcon, G.alertActionSetCompletedIcon),
                ...t
            });
        case _.d.SUBMIT_FEEDBACK:
            return (0, i.jsx)(m.FlagIcon, {
                size: 'xs',
                color: 'currentColor',
                className: a()(G.alertActionIcon),
                ...t
            });
        default:
            return null;
    }
}
function Y(e) {
    let { alertAction: t, guildId: n } = e,
        r = (0, u.e7)([T.default], () => T.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == r) return K(e, {});
        let l = (function (e, t, n) {
            var i;
            let r = null !== (i = S.ZP.getNickname(n, null, t)) && void 0 !== i ? i : A.ZP.getUserTag(t),
                l = s()(e.ts),
                a = ''.concat(r, ' ').concat(l.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case _.d.DELETE_USER_MESSAGE:
                        return F.intl.formatToPlainString(F.t.BtKE9v, {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    case _.d.SET_COMPLETED:
                        return F.intl.formatToPlainString(F.t.dyo9UV, {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    case _.d.SUBMIT_FEEDBACK:
                        return F.intl.formatToPlainString(F.t['C9/kIC'], {
                            userName: r,
                            timestamp: l.fromNow()
                        });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, r, n);
        return (0, i.jsx)(m.Tooltip, {
            text: l,
            children: (t) => K(e, t)
        });
    } catch (e) {
        return null;
    }
}
function X(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        r = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)('div', {
        className: G.alertActionsIconContainer,
        children: r.map((e) =>
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
let Q = r.memo(function (e) {
    let t,
        { message: n, channel: r, embedChannel: l, compact: a, interactionUserId: o } = e,
        s = V(n, r),
        c = H(r, n.author),
        d = (0, j.ZP)(n),
        u = (0, P.CF)(
            {
                message: n,
                channel: r,
                author: d,
                guildId: null == r ? void 0 : r.guild_id,
                compact: a,
                ...s
            },
            c
        ),
        h = T.default.getUser(o),
        f = V(n, r),
        p = H(r, h);
    if (null != h) {
        let e = (0, j.ij)(h, r),
            i = (0, P.CF)(
                {
                    message: n,
                    channel: r,
                    author: e,
                    guildId: null == r ? void 0 : r.guild_id,
                    compact: a,
                    ...f
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
        children: (0, g.Mq)(
            n,
            l,
            () =>
                (0, i.jsx)('div', {
                    className: G.channelNameContainer,
                    children: (0, i.jsx)(R.Z, {
                        channel: l,
                        className: G.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => u,
            t
        )
    });
});
function q(e) {
    var t;
    let { id: n, compact: l, message: o, channel: s } = e,
        {
            avatarSrc: N,
            eventHandlers: { onMouseEnter: T, onMouseLeave: S }
        } = (0, M.m)(!0),
        { onFocus: A, ...j } = (0, c.JA)(null != n ? n : ''),
        { isFocused: R, handleFocus: L, handleBlur: O } = (0, y.bb)(A),
        D = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        H = (0, u.e7)([v.Z], () => v.Z.can(B.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: K, embedChannel: Y, decisionId: q, keywordMatchedContent: J, keyword: $, content: ee, flaggedMessageId: et, timeoutDuration: en, decisionReason: ei, alertActionsExecution: er, quarantineType: el, interactionUserId: ea } = (0, g.ZP)(o),
        eo = r.useMemo(() => (0, b.k$)(ee, J, s.id), [ee, J, s]),
        { selected: es, ...ec } = V(o, s),
        ed = r.useCallback(() => {
            (0, E._s)(o.id, ee, q, s);
        }, [o.id, ee, q, s]),
        eu = r.useCallback(
            (e) => {
                if (null != et && null != Y) e.stopPropagation(), e.preventDefault(), (0, I.Z)(B.Z5c.CHANNEL(null == Y ? void 0 : Y.guild_id, null == Y ? void 0 : Y.id, et));
            },
            [Y, et]
        ),
        em = r.useCallback(
            (e) => {
                null != Y &&
                    (h.default.selectChannel({
                        guildId: Y.guild_id,
                        channelId: e,
                        messageId: o.id
                    }),
                    (0, x.Kh)(e));
            },
            [o, Y]
        ),
        eh = r.useCallback(() => {
            (0, C.Xx)(o.id, s, _.d.DELETE_USER_MESSAGE);
        }, [s, o.id]),
        ef = (0, w.L9)(Number(en)),
        ep = null != ei,
        e_ = H && null != et && (null == er || !er.actions.hasOwnProperty(_.d.DELETE_USER_MESSAGE)),
        eg = o.embeds.length > 0 ? (null === (t = o.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eE = null != eg;
    return (0, i.jsx)('div', {
        onMouseEnter: T,
        onMouseLeave: S,
        children: (0, i.jsx)(k.Z, {
            className: a()(G.mainContainer, { [G.compact]: l }),
            iconNode: l ? null : (0, i.jsx)(M.S, { src: N }),
            iconContainerClassName: G.iconContainer,
            compact: l,
            children: (0, i.jsxs)('div', {
                className: a()(G.content, { [G.compact]: l }),
                children: [
                    (0, i.jsx)(P.nD, {
                        message: o,
                        messageClassname: G.spanCorrection,
                        className: a()(G.usernameContainer, G.spanCorrection, { [G.compact]: l }),
                        username: (0, i.jsxs)('div', {
                            className: G.spanCorrection,
                            children: [
                                (0, i.jsx)(m.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: G.username,
                                    children: F.intl.string(F.t.hG1StL)
                                }),
                                (0, i.jsx)(p.Z, {
                                    type: U.Hb.SYSTEM_DM,
                                    className: G.systemTag
                                }),
                                (0, i.jsx)(Q, {
                                    message: o,
                                    channel: s,
                                    embedChannel: Y,
                                    compact: l,
                                    interactionUserId: ea
                                })
                            ]
                        }),
                        compact: l,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: a()(G.messageContent, { [G.compact]: l }),
                        children: (0, i.jsx)(Z.Z, {
                            ...j,
                            message: o,
                            channel: Y,
                            content: eo,
                            compact: l,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: a()(G.embedCard, {
                                [G.compact]: l,
                                [G.selected]: es || (D && R),
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
                                                            children: F.intl.format(F.t.SYIUTU, { keyword: $ })
                                                        }),
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) })
                                                    ]
                                                }),
                                            null != K &&
                                                (0, i.jsx)(m.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    tag: 'span',
                                                    children: F.intl.format(F.t.ZoOyKC, { ruleName: K })
                                                }),
                                            null != ef &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.__invalid_footerText,
                                                            children: F.intl.format(F.t['3LYql5'], { duration: ef })
                                                        })
                                                    ]
                                                }),
                                            null != el &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)('div', { className: a()(G.dot, G.dotMargin) }),
                                                        (0, i.jsx)(m.Text, {
                                                            variant: 'text-xs/medium',
                                                            color: 'text-muted',
                                                            tag: 'span',
                                                            className: G.titleCase,
                                                            children: F.intl.format(F.t['26bB2N'], { reason: (0, g.hU)(el) })
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
                            onBlur: O,
                            onClick: eu
                        })
                    }),
                    (0, i.jsx)(z, {
                        compact: l,
                        children: (0, i.jsxs)('div', {
                            className: a()(G.centeredRowContainer, G.buttonContainer, { [G.compact]: l }),
                            children: [
                                (0, i.jsx)(m.Button, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ec.onContextMenuModerateUser) || void 0 === t || t.call(ec, e);
                                    },
                                    color: m.Button.Colors.LINK,
                                    look: m.Button.Looks.LINK,
                                    size: m.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsxs)('div', {
                                        className: G.footerAction,
                                        children: [
                                            (0, i.jsx)(m.ShieldIcon, {
                                                size: 'xs',
                                                color: d.Z.BLUE_345,
                                                className: G.footerIcon
                                            }),
                                            (0, i.jsx)(m.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.intl.string(F.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                eE
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.Button, {
                                                  onClick: () => em(eg),
                                                  color: m.Button.Colors.LINK,
                                                  look: m.Button.Looks.LINK,
                                                  size: m.Button.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.intl.string(F.t.jtkj09)
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, i.jsx)('div', { className: G.dot }),
                                (0, i.jsx)(m.Button, {
                                    onClick: ed,
                                    color: m.Button.Colors.LINK,
                                    look: m.Button.Looks.LINK,
                                    size: m.Button.Sizes.SMALL,
                                    className: G.buttonStyle,
                                    children: (0, i.jsx)('div', {
                                        className: G.footerAction,
                                        children: (0, i.jsx)(m.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: F.intl.string(F.t['94JbMz'])
                                        })
                                    })
                                }),
                                e_
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)('div', { className: G.dot }),
                                              (0, i.jsx)(m.Button, {
                                                  onClick: eh,
                                                  color: m.Button.Colors.LINK,
                                                  look: m.Button.Looks.LINK,
                                                  size: m.Button.Sizes.SMALL,
                                                  className: G.buttonStyle,
                                                  children: (0, i.jsx)('div', {
                                                      className: G.footerAction,
                                                      children: (0, i.jsx)(m.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.intl.string(F.t['3A52tb'])
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                null != er
                                    ? (0, i.jsx)(X, {
                                          alertActionsExecution: er,
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
