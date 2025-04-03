n.d(t, { Z: () => ee }), n(230036);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    p = n(481060),
    m = n(287734),
    f = n(607070),
    h = n(385499),
    g = n(313889),
    _ = n(825829),
    b = n(226192),
    x = n(36459),
    y = n(336197),
    E = n(359110),
    v = n(347475),
    O = n(496675),
    N = n(594174),
    j = n(5192),
    C = n(51144),
    I = n(937889),
    S = n(739566),
    T = n(779125),
    P = n(890410),
    A = n(464891),
    w = n(507418),
    Z = n(348238),
    k = n(38267),
    R = n(83561),
    D = n(834129),
    L = n(959517),
    M = n(981631),
    W = n(674563),
    U = n(590433),
    F = n(388032),
    B = n(860918);
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
    let { popouts: n, selected: r, setPopout: a } = (0, k.Z)(e.id, L.d$),
        { usernameProfile: l, avatarProfile: o } = n,
        s = (0, Z.wq)(e.author.id, t.id),
        c = (0, Z.RN)(e.author.id, t.id, e.id),
        u = (0, Z.XO)(e, t, l, a);
    return {
        selected: r,
        onContextMenu: s,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, Z.R9)(o, a),
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
        showAvatarPopout: o,
        showUsernamePopout: l
    };
}
function K(e, t) {
    return i.useMemo(() => {
        if (null != t)
            return (n) =>
                (0, r.jsx)(
                    v.Z,
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
        className: l()(B.footerContainer, n, { [B.compact]: i }),
        children: t
    });
}
function X(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)('div', {
        className: l()(B.annotationRow, n),
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
                        className: l()(B.alertActionIcon, B.alertActionSetCompletedIcon)
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
                        className: B.alertActionIcon
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
        i = (0, d.e7)([N.default], () => N.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return q(e, {});
        let a = (function (e, t, n) {
            var r;
            let i = null != (r = j.ZP.getNickname(n, null, t)) ? r : C.ZP.getUserTag(t),
                a = s()(e.ts),
                l = ''.concat(i, ' ').concat(a.fromNow());
            try {
                switch (parseInt(e.actionType)) {
                    case g.d.DELETE_USER_MESSAGE:
                        return F.NW.formatToPlainString(F.t.BtKE9v, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case g.d.SET_COMPLETED:
                        return F.NW.formatToPlainString(F.t.dyo9UV, {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    case g.d.SUBMIT_FEEDBACK:
                        return F.NW.formatToPlainString(F.t['C9/kIC'], {
                            userName: i,
                            timestamp: a.fromNow()
                        });
                    default:
                        return l;
                }
            } catch (e) {
                return l;
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
        { message: n, channel: i, embedChannel: a, compact: l, interactionUserId: o } = e,
        s = z(n, i),
        c = K(i, n.author),
        u = (0, S.ZP)(n),
        d = (0, A.CF)(
            G(
                {
                    message: n,
                    channel: i,
                    author: u,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: l
                },
                s
            ),
            c
        ),
        m = N.default.getUser(o),
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
                        compact: l
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
                    children: (0, r.jsx)(T.Z, {
                        channel: a,
                        className: B.channelName,
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
    let { id: n, compact: a, message: o, channel: s } = e,
        {
            avatarSrc: v,
            eventHandlers: { onMouseEnter: N, onMouseLeave: j }
        } = (0, R.m)(!0),
        C = (0, c.JA)(null != n ? n : ''),
        { onFocus: S } = C,
        T = V(C, ['onFocus']),
        { isFocused: w, handleFocus: k, handleBlur: L } = (0, Z.bb)(S),
        K = (0, d.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        q = (0, d.e7)([O.Z], () => O.Z.can(M.Plq.MANAGE_MESSAGES, s), [s]),
        { ruleName: Q, embedChannel: ee, decisionId: et, keywordMatchedContent: en, keyword: er, content: ei, flaggedMessageId: ea, timeoutDuration: el, decisionReason: eo, alertActionsExecution: es, quarantineType: ec, interactionUserId: eu } = (0, _.ZP)(o),
        ed = i.useMemo(() => (0, I.k$)(ei, en, s.id), [ei, en, s]),
        ep = z(o, s),
        { selected: em } = ep,
        ef = V(ep, ['selected']),
        eh = i.useCallback(() => {
            (0, b._s)(o.id, ei, et, s);
        }, [o.id, ei, et, s]),
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
                        messageId: o.id
                    }),
                    (0, E.Kh)(e));
            },
            [o, ee]
        ),
        eb = i.useCallback(() => {
            (0, x.Xx)(o.id, s, g.d.DELETE_USER_MESSAGE);
        }, [s, o.id]),
        ex = (0, U.L9)(Number(el)),
        ey = null != eo,
        eE = q && null != ea && (null == es || !es.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        ev = o.embeds.length > 0 ? (null == (t = o.embeds[0].fields.find((e) => 'channel_id' === e.rawName)) ? void 0 : t.rawValue) : null,
        eO = null != ev;
    return (0, r.jsx)('div', {
        onMouseEnter: N,
        onMouseLeave: j,
        children: (0, r.jsx)(D.Z, {
            className: l()(B.mainContainer, { [B.compact]: a }),
            iconNode: a ? null : (0, r.jsx)(R.S, { src: v }),
            iconContainerClassName: B.iconContainer,
            compact: a,
            children: (0, r.jsxs)('div', {
                className: l()(B.content, { [B.compact]: a }),
                children: [
                    (0, r.jsx)(A.nD, {
                        message: o,
                        messageClassname: B.spanCorrection,
                        className: l()(B.usernameContainer, B.spanCorrection, { [B.compact]: a }),
                        username: (0, r.jsxs)('div', {
                            className: B.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: B.username,
                                    children: F.NW.string(F.t.hG1StL)
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: W.Hb.SYSTEM_DM,
                                    className: B.systemTag
                                }),
                                (0, r.jsx)($, {
                                    message: o,
                                    channel: s,
                                    embedChannel: ee,
                                    compact: a,
                                    interactionUserId: eu
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', {
                        className: l()(B.messageContent, { [B.compact]: a }),
                        children: (0, r.jsx)(
                            P.Z,
                            H(G({}, T), {
                                message: o,
                                channel: ee,
                                content: ed,
                                compact: a,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: l()(B.embedCard, {
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
                                                                children: F.NW.format(F.t.SYIUTU, { keyword: er })
                                                            }),
                                                            (0, r.jsx)('div', { className: l()(B.dot, B.dotMargin) })
                                                        ]
                                                    }),
                                                null != Q &&
                                                    (0, r.jsx)(p.Text, {
                                                        variant: 'text-xs/medium',
                                                        color: 'text-muted',
                                                        tag: 'span',
                                                        children: F.NW.format(F.t.ZoOyKC, { ruleName: Q })
                                                    }),
                                                null != ex &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: l()(B.dot, B.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: B.__invalid_footerText,
                                                                children: F.NW.format(F.t['3LYql5'], { duration: ex })
                                                            })
                                                        ]
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)('div', { className: l()(B.dot, B.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: 'text-xs/medium',
                                                                color: 'text-muted',
                                                                tag: 'span',
                                                                className: B.titleCase,
                                                                children: F.NW.format(F.t['26bB2N'], { reason: (0, _.hU)(ec) })
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
                                                      children: eo
                                                  })
                                              })
                                            : null
                                    ]
                                }),
                                popoutProps: ef,
                                zalgo: !0,
                                onFocus: k,
                                onBlur: L,
                                onClick: eg
                            })
                        )
                    }),
                    (0, r.jsx)(Y, {
                        compact: a,
                        children: (0, r.jsxs)('div', {
                            className: l()(B.centeredRowContainer, B.buttonContainer, { [B.compact]: a }),
                            children: [
                                (0, r.jsx)(p.zxk, {
                                    onClick: (e) => {
                                        var t;
                                        null == (t = ef.onContextMenuModerateUser) || t.call(ef, e);
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
                                                color: u.Z.BLUE_345,
                                                className: B.footerIcon
                                            }),
                                            (0, r.jsx)(p.Text, {
                                                variant: 'text-xs/normal',
                                                color: 'text-link',
                                                children: F.NW.string(F.t.DEoVWV)
                                            })
                                        ]
                                    })
                                }),
                                eO
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)('div', { className: B.dot }),
                                              (0, r.jsx)(p.zxk, {
                                                  onClick: () => e_(ev),
                                                  color: p.zxk.Colors.LINK,
                                                  look: p.zxk.Looks.LINK,
                                                  size: p.zxk.Sizes.SMALL,
                                                  className: B.buttonStyle,
                                                  children: (0, r.jsx)('div', {
                                                      className: B.footerAction,
                                                      children: (0, r.jsx)(p.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'text-link',
                                                          children: F.NW.string(F.t.jtkj09)
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
                                            children: F.NW.string(F.t['94JbMz'])
                                        })
                                    })
                                }),
                                eE
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
                                                          children: F.NW.string(F.t['3A52tb'])
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
