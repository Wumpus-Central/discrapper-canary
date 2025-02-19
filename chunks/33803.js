n.d(t, { Z: () => ee }), n(230036);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(913527),
    s = n.n(l),
    c = n(91192),
    d = n(722770),
    u = n(442837),
    p = n(481060),
    m = n(287734),
    f = n(607070),
    h = n(385499),
    g = n(313889),
    _ = n(825829),
    b = n(226192),
    v = n(36459),
    y = n(336197),
    x = n(359110),
    O = n(347475),
    E = n(496675),
    j = n(594174),
    N = n(5192),
    C = n(51144),
    I = n(937889),
    S = n(739566),
    P = n(779125),
    T = n(890410),
    A = n(464891),
    w = n(507418),
    Z = n(348238),
    k = n(38267),
    R = n(83561),
    L = n(834129),
    D = n(959517),
    M = n(981631),
    W = n(674563),
    F = n(590433),
    U = n(388032),
    B = n(237166);
function G(e) {
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
function H(e, t) {
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
function V(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    let { popouts: n, selected: r, setPopout: a } = (0, k.Z)(e.id, D.d$),
        { usernameProfile: o, avatarProfile: l } = n,
        s = (0, Z.wq)(e.author.id, t.id),
        c = (0, Z.RN)(e.author.id, t.id, e.id),
        d = (0, Z.XO)(e, t, o, a);
    return {
        selected: r,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: d,
        onClickAvatar: (0, Z.R9)(l, a),
        onPopoutRequestClose: i.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1
                }),
            [a]
        ),
        renderPopout: w.Z,
        showAvatarPopout: l,
        showUsernamePopout: o
    };
}
function K(e, t) {
    return i.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, r.jsx)(
                    O.Z,
                    H(G({}, n), {
                        userId: t.id,
                        user: t,
                        channelId: e.id,
                        guildId: e.guild_id
                    })
                );
    }, [e, t]);
}
function Y(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)('div', {
        className: o()(B.footerContainer, n, { [B.compact]: i }),
        children: t
    });
}
function X(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: o()(B.annotationRow, n),
        children: t
    });
}
function q(e, t) {
    switch (e) {
        case g.d.DELETE_USER_MESSAGE:
            return (0, r.jsx)(
                p.XHJ,
                G(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: B.alertActionIcon
                    },
                    t
                )
            );
        case g.d.SET_COMPLETED:
            return (0, r.jsx)(
                p.dz2,
                G(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: o()(B.alertActionIcon, B.alertActionSetCompletedIcon)
                    },
                    t
                )
            );
        case g.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(
                p.U65,
                G(
                    {
                        size: 'xs',
                        color: 'currentColor',
                        className: o()(B.alertActionIcon)
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
        i = (0, u.e7)([j.default], () => j.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return q(e, {});
        let a = (function (e, t, n) {
            var r;
            let i = null !== (r = N.ZP.getNickname(n, null, t)) && void 0 !== r ? r : C.ZP.getUserTag(t),
                a = s()(e.ts),
                o = ''.concat(i, ' ').concat(a.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case g.d.DELETE_USER_MESSAGE:
                        return U.NW.formatToPlainString(U.t.BtKE9v, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case g.d.SET_COMPLETED:
                        return U.NW.formatToPlainString(U.t.dyo9UV, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case g.d.SUBMIT_FEEDBACK:
                        return U.NW.formatToPlainString(U.t['C9/kIC'], {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    default:
                        return o;
                }
            } catch (e) {
                return o;
            }
        })(t, i, n);
        return (0, r.jsx)(p.ua7, {
            text: a,
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
        className: B.alertActionsIconContainer,
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
        { message: n, channel: i, embedChannel: a, compact: o, interactionUserId: l } = e,
        s = z(n, i),
        c = K(i, n.author),
        d = (0, S.ZP)(n),
        u = (0, A.CF)(
            G(
                {
                    message: n,
                    channel: i,
                    author: d,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: o
                },
                s
            ),
            c
        ),
        m = j.default.getUser(l),
        f = z(n, i),
        h = K(i, m);
    if (null != m) {
        let e = (0, S.ij)(m, i),
            r = (0, A.CF)(
                G(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: o
                    },
                    f
                ),
                h
            );
        t = () => r;
    }
    return (0, r.jsx)(p.Text, {
        variant: 'text-md/normal',
        color: 'header-primary',
        tag: 'span',
        className: B.spanCorrection,
        children: (0, _.Mq)(
            n,
            a,
            () =>
                (0, r.jsx)('div', {
                    className: B.channelNameContainer,
                    children: (0, r.jsx)(P.Z, {
                        channel: a,
                        className: B.channelName,
                        openChatWithoutConnecting: !0
                    })
                }),
            () => u,
            t
        )
    });
});
function ee(e) {
    var t;
    let { id: n, compact: a, message: l, channel: s } = e,
        {
            avatarSrc: O,
            eventHandlers: { onMouseEnter: j, onMouseLeave: N }
        } = (0, R.m)(!0),
        C = (0, c.JA)(null != n ? n : ''),
        { onFocus: S } = C,
        P = V(C, ['onFocus']),
        { isFocused: w, handleFocus: k, handleBlur: D } = (0, Z.bb)(S),
        K = (0, u.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        q = (0, u.e7)([E.Z], () => E.Z.can(M.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: Q, embedChannel: ee, decisionId: et, keywordMatchedContent: en, keyword: er, content: ei, flaggedMessageId: ea, timeoutDuration: eo, decisionReason: el, alertActionsExecution: es, quarantineType: ec, interactionUserId: ed } = (0, _.ZP)(l),
        eu = i.useMemo(() => (0, I.k$)(ei, en, s.id), [ei, en, s]),
        ep = z(l, s),
        { selected: em } = ep,
        ef = V(ep, ['selected']),
        eh = i.useCallback(() => {
            (0, b._s)(l.id, ei, et, s);
        }, [l.id, ei, et, s]),
        eg = i.useCallback(
            (e) => {
                null != ea && null != ee && (e.stopPropagation(), e.preventDefault(), (0, y.Z)(M.Z5c.CHANNEL(null == ee ? void 0 : ee.guild_id, null == ee ? void 0 : ee.id, ea)));
            },
            [ee, ea]
        ),
        e_ = i.useCallback(
            (e) => {
                null != ee &&
                    (m.default.selectChannel({
                        guildId: ee.guild_id,
                        channelId: e,
                        messageId: l.id
                    }),
                    (0, x.Kh)(e));
            },
            [l, ee]
        ),
        eb = i.useCallback(() => {
            (0, v.Xx)(l.id, s, g.d.DELETE_USER_MESSAGE);
        }, [s, l.id]),
        ev = (0, F.L9)(Number(eo)),
        ey = null != el,
        ex = q && null != ea && (null == es || !es.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        eO = l.embeds.length > 0 ? (null === (t = l.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) || void 0 === t ? void 0 : t.rawValue) : null,
        eE = null != eO;
    return (0, r.jsx)('div', {
        onMouseEnter: j,
        onMouseLeave: N,
        children: (0, r.jsx)(L.Z, {
            className: o()(B.mainContainer, { [B.compact]: a }),
            iconNode: a ? null : (0, r.jsx)(R.S, { src: O }),
            iconContainerClassName: B.iconContainer,
            compact: a,
            children: (0, r.jsxs)('div', {
                className: o()(B.content, { [B.compact]: a }),
                children: [
                    (0, r.jsx)(A.nD, {
                        message: l,
                        messageClassname: B.spanCorrection,
                        className: o()(B.usernameContainer, B.spanCorrection, { [B.compact]: a }),
                        username: (0, r.jsxs)('div', {
                            className: B.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: B.username,
                                    children: U.NW.string(U.t.hG1StL)
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: W.Hb.SYSTEM_DM,
                                    className: B.systemTag
                                }),
                                (0, r.jsx)($, {
                                    message: l,
                                    channel: s,
                                    embedChannel: ee,
                                    compact: a,
                                    interactionUserId: ed
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: o()(B.messageContent, { [B.compact]: a }),
                        children: (0, r.jsx)(
                            T.Z,
                            H(G({}, P), {
                                message: l,
                                channel: ee,
                                content: eu,
                                compact: a,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: o()(B.embedCard, {
                                    [B.compact]: a,
                                    [B.selected]: em || (K && w),
                                    [B.isClickable]: null != ea && null != ee
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: B.centeredRowContainer,
                                            children: [
                                                null != er &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                children: U.NW.format(U.t.SYIUTU, { keyword: er })
                                                            }),
                                                            (0, r.jsx)('div', { className: o()(B.dot, B.dotMargin) })
                                                        ]
                                                    }),
                                                null != Q &&
                                                    (0, r.jsx)(p.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        children: U.NW.format(U.t.ZoOyKC, { ruleName: Q })
                                                    }),
                                                null != ev &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: o()(B.dot, B.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: B.__invalid_footerText,
                                                                children: U.NW.format(U.t['3LYql5'], { duration: ev })
                                                            })
                                                        ]
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: o()(B.dot, B.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: B.titleCase,
                                                                children: U.NW.format(U.t['26bB2N'], { reason: (0, _.hU)(ec) })
                                                            })
                                                        ]
                                                    })
                                            ]
                                        }),
                                        ey
                                            ? (0, r.jsx)(X, {
                                                  children: (0, r.jsx)(p.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'text-normal',
                                                      tag: 'span',
                                                      children: el
                                                  })
                                              })
                                            : null
                                    ]
                                }),
                                popoutProps: ef,
                                zalgo: !0,
                                onFocus: k,
                                onBlur: D,
                                onClick: eg
                            })
                        )
                    }),
                    (0, r.jsx)(Y, {
                        compact: a,
                        children: (0, r.jsxs)('div', {
                            className: o()(B.centeredRowContainer, B.buttonContainer, { [B.compact]: a }),
                            children: [
                                (0, r.jsx)(p.zxk, {
                                    onClick: (e) => {
                                        var t;
                                        null === (t = ef.onContextMenuModerateUser) || void 0 === t || t.call(ef, e);
                                    },
                                    color: p.zxk.Colors.LINK,
                                    look: p.zxk.Looks.LINK,
                                    size: p.zxk.Sizes.SMALL,
                                    className: B.buttonStyle,
                                    children: (0, r.jsxs)('div', {
                                        className: B.footerAction,
                                        children: [
                                            (0, r.jsx)(p.b7C, {
                                                size: 'xs',
                                                color: d.Z.BLUE_345,
                                                className: B.footerIcon
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: U.NW.string(U.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                eE
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: B.dot }),
                                              (0, r.jsx)(p.zxk, {
                                                  onClick: () => e_(eO),
                                                  color: p.zxk.Colors.LINK,
                                                  look: p.zxk.Looks.LINK,
                                                  size: p.zxk.Sizes.SMALL,
                                                  className: B.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: B.footerAction,
                                                      children: (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: U.NW.string(U.t.jtkj09)
                                                      })
                                                  })
                                              })
                                          ]
                                      })
                                    : null,
                                (0, r.jsx)('div', { className: B.dot }),
                                (0, r.jsx)(p.zxk, {
                                    onClick: eh,
                                    color: p.zxk.Colors.LINK,
                                    look: p.zxk.Looks.LINK,
                                    size: p.zxk.Sizes.SMALL,
                                    className: B.buttonStyle,
                                    children: (0, r.jsx)('div', {
                                        className: B.footerAction,
                                        children: (0, r.jsx)(p.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-link',
                                            children: U.NW.string(U.t['94JbMz'])
                                        })
                                    })
                                }),
                                ex
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: B.dot }),
                                              (0, r.jsx)(p.zxk, {
                                                  onClick: eb,
                                                  color: p.zxk.Colors.LINK,
                                                  look: p.zxk.Looks.LINK,
                                                  size: p.zxk.Sizes.SMALL,
                                                  className: B.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: B.footerAction,
                                                      children: (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: U.NW.string(U.t['3A52tb'])
                                                      })
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
