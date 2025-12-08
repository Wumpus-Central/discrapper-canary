n.d(t, { Z: () => ea }), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(91192),
    u = n(442837),
    d = n(692547),
    f = n(28664),
    p = n(481060),
    _ = n(287734),
    m = n(607070),
    h = n(385499),
    g = n(313889),
    E = n(825829),
    b = n(226192),
    y = n(36459),
    O = n(336197),
    v = n(359110),
    S = n(726033),
    I = n(496675),
    T = n(594174),
    A = n(5192),
    C = n(51144),
    N = n(937889),
    P = n(739566),
    R = n(779125),
    w = n(890410),
    D = n(464891),
    x = n(507418),
    L = n(348238),
    j = n(38267),
    M = n(83561),
    k = n(834129),
    U = n(959517),
    G = n(981631),
    Z = n(674563),
    B = n(590433),
    F = n(388032),
    V = n(545869);
function H(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function Y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                H(e, t, n[t]);
            });
    }
    return e;
}
function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : W(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = q(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function Q(e, t) {
    let { popouts: n, selected: r, setPopout: a } = (0, j.Z)(e.id, U.d$),
        { usernameProfile: o, avatarProfile: s } = n,
        l = (0, L.wq)(e.author.id, t.id),
        c = (0, L.RN)(e.author.id, t.id, e.id),
        u = (0, L.XO)(e, t, o, a);
    return {
        selected: r,
        onContextMenu: l,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, L.R9)(s, a),
        onPopoutRequestClose: i.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [a],
        ),
        renderPopout: x.Z,
        showAvatarPopout: s,
        showUsernamePopout: o,
    };
}
function X(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    S.Z,
                    K(Y({}, i), {
                        user: t,
                        currentUser: n,
                        guildId: e.guild_id,
                        channelId: e.id,
                    }),
                );
    }, [e, t, n]);
}
function J(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)("div", {
        className: o()(V.footerContainer, n, { [V.compact]: i }),
        children: t,
    });
}
function $(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: o()(V.annotationRow, n),
        children: t,
    });
}
function ee(e) {
    switch (e) {
        case g.d.DELETE_USER_MESSAGE:
            return (0, r.jsx)(p.XHJ, {
                size: "xs",
                color: "currentColor",
                className: V.alertActionIcon,
            });
        case g.d.SET_COMPLETED:
            return (0, r.jsx)(p.dz2, {
                size: "xs",
                color: "currentColor",
                className: o()(V.alertActionIcon, V.alertActionSetCompletedIcon),
            });
        case g.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(p.U65, {
                size: "xs",
                color: "currentColor",
                className: V.alertActionIcon,
            });
        default:
            return null;
    }
}
function et(e, t, n) {
    var r;
    let i = null != (r = A.ZP.getNickname(n, null, t)) ? r : C.ZP.getUserTag(t),
        a = l()(e.ts),
        o = "".concat(i, " ").concat(a.fromNow());
    try {
        switch (parseInt(e.actionType)) {
            case g.d.DELETE_USER_MESSAGE:
                return F.intl.formatToPlainString(F.t.BtKE9h, {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            case g.d.SET_COMPLETED:
                return F.intl.formatToPlainString(F.t.dyo9US, {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            case g.d.SUBMIT_FEEDBACK:
                return F.intl.formatToPlainString(F.t["C9/kIO"], {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            default:
                return o;
        }
    } catch (e) {
        return o;
    }
}
function en(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, u.e7)([T.default], () => T.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return ee(e);
        let a = et(t, i, n);
        return (0, r.jsx)(f.u, {
            text: a,
            children: ee(e),
        });
    } catch (e) {
        return null;
    }
}
function er(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        i = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, r.jsx)("div", {
        className: V.alertActionsIconContainer,
        children: i.map((e) =>
            (0, r.jsx)(
                en,
                {
                    alertAction: e,
                    guildId: n,
                },
                e.actionType,
            ),
        ),
    });
}
let ei = i.memo(function (e) {
    let t,
        { message: n, channel: i, embedChannel: a, compact: o, interactionUserId: s } = e,
        l = Q(n, i),
        c = X(i, n.author),
        u = (0, P.ZP)(n),
        d = (0, D.CF)(
            Y(
                {
                    message: n,
                    channel: i,
                    author: u,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: o,
                },
                l,
            ),
            c,
        ),
        f = () => d,
        _ = T.default.getUser(s),
        m = Q(n, i),
        h = X(i, _, T.default.getCurrentUser());
    if (null != _) {
        let e = (0, P.ij)(_, i),
            r = (0, D.CF)(
                Y(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: o,
                    },
                    m,
                ),
                h,
            );
        t = () => r;
    }
    let g = () =>
        (0, r.jsx)("div", {
            className: V.channelNameContainer,
            children: (0, r.jsx)(R.Z, {
                channel: a,
                className: V.channelName,
                openChatWithoutConnecting: !0,
            }),
        });
    return (0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        color: "header-primary",
        tag: "span",
        className: V.spanCorrection,
        children: (0, E.Mq)(n, a, g, f, t),
    });
});
function ea(e) {
    var t;
    let { id: n, compact: a, message: s, channel: l } = e,
        {
            avatarSrc: f,
            eventHandlers: { onMouseEnter: S, onMouseLeave: T },
        } = (0, M.m)(!0),
        A = (0, c.JA)(null != n ? n : ""),
        { onFocus: C } = A,
        P = z(A, ["onFocus"]),
        { isFocused: R, handleFocus: x, handleBlur: j } = (0, L.bb)(C),
        U = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        H = (0, u.e7)([I.Z], () => I.Z.can(G.Plq.MANAGE_MESSAGES, l), [l]),
        {
            ruleName: W,
            embedChannel: q,
            decisionId: X,
            keywordMatchedContent: ee,
            keyword: et,
            content: en,
            flaggedMessageId: ea,
            timeoutDuration: eo,
            decisionReason: es,
            alertActionsExecution: el,
            quarantineType: ec,
            interactionUserId: eu,
        } = (0, E.ZP)(s),
        ed = i.useMemo(() => (0, N.k$)(en, ee, l.id), [en, ee, l]),
        ef = Q(s, l),
        { selected: ep } = ef,
        e_ = z(ef, ["selected"]),
        em = ep || (U && R),
        eh = (e) => {
            var t;
            null == (t = e_.onContextMenuModerateUser) || t.call(e_, e);
        },
        eg = i.useCallback(() => {
            (0, b._s)(s.id, en, X, l);
        }, [s.id, en, X, l]),
        eE = i.useCallback(
            (e) => {
                null != ea &&
                    null != q &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, O.Z)(G.Z5c.CHANNEL(null == q ? void 0 : q.guild_id, null == q ? void 0 : q.id, ea)));
            },
            [q, ea],
        ),
        eb = i.useCallback(
            (e) => {
                null != q &&
                    (_.default.selectChannel({
                        guildId: q.guild_id,
                        channelId: e,
                        messageId: s.id,
                    }),
                    (0, v.Kh)(e));
            },
            [s, q],
        ),
        ey = i.useCallback(() => {
            (0, y.Xx)(s.id, l, g.d.DELETE_USER_MESSAGE);
        }, [l, s.id]),
        eO = (0, B.getFriendlyDurationString)(Number(eo)),
        ev = null != es,
        eS = H && null != ea && (null == el || !el.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        eI =
            s.embeds.length > 0
                ? null == (t = s.embeds[0].fields.find((e) => "channel_id" === e.rawName))
                    ? void 0
                    : t.rawValue
                : null,
        eT = null != eI;
    return (0, r.jsx)("div", {
        onMouseEnter: S,
        onMouseLeave: T,
        children: (0, r.jsx)(k.Z, {
            className: o()(V.mainContainer, { [V.compact]: a }),
            iconNode: a ? null : (0, r.jsx)(M.S, { src: f }),
            iconContainerClassName: V.iconContainer,
            compact: a,
            children: (0, r.jsxs)("div", {
                className: o()(V.content, { [V.compact]: a }),
                children: [
                    (0, r.jsx)(D.nD, {
                        message: s,
                        messageClassname: V.spanCorrection,
                        className: o()(V.usernameContainer, V.spanCorrection, { [V.compact]: a }),
                        username: (0, r.jsxs)("div", {
                            className: V.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.username,
                                    children: F.intl.string(F.t.hG1StD),
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: Z.Hb.SYSTEM_DM,
                                    className: V.systemTag,
                                }),
                                (0, r.jsx)(ei, {
                                    message: s,
                                    channel: l,
                                    embedChannel: q,
                                    compact: a,
                                    interactionUserId: eu,
                                }),
                            ],
                        }),
                        compact: a,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: o()(V.messageContent, { [V.compact]: a }),
                        children: (0, r.jsx)(
                            w.Z,
                            K(Y({}, P), {
                                message: s,
                                channel: q,
                                content: ed,
                                compact: a,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: o()(V.embedCard, {
                                    [V.compact]: a,
                                    [V.selected]: em,
                                    [V.isClickable]: null != ea && null != q,
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: V.centeredRowContainer,
                                            children: [
                                                null != et &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                children: F.intl.format(F.t.SYIUTR, { keyword: et }),
                                                            }),
                                                            (0, r.jsx)("div", { className: o()(V.dot, V.dotMargin) }),
                                                        ],
                                                    }),
                                                null != W &&
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: F.intl.format(F.t.ZoOyKB, { ruleName: W }),
                                                    }),
                                                null != eO &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", { className: o()(V.dot, V.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: V.__invalid_footerText,
                                                                children: F.intl.format(F.t["3LYql6"], {
                                                                    duration: eO,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", { className: o()(V.dot, V.dotMargin) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: V.titleCase,
                                                                children: F.intl.format(F.t["26bB2M"], {
                                                                    reason: (0, E.hU)(ec),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        ev
                                            ? (0, r.jsx)($, {
                                                  children: (0, r.jsx)(p.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      tag: "span",
                                                      children: es,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                popoutProps: e_,
                                zalgo: !0,
                                onFocus: x,
                                onBlur: j,
                                onClick: eE,
                            }),
                        ),
                    }),
                    (0, r.jsx)(J, {
                        compact: a,
                        children: (0, r.jsxs)("div", {
                            className: o()(V.centeredRowContainer, V.buttonContainer, { [V.compact]: a }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: V.footerAction,
                                    children: [
                                        (0, r.jsx)(p.b7C, {
                                            size: "xs",
                                            color: d.Z.unsafe_rawColors.BRAND_500.css,
                                            className: V.footerIcon,
                                        }),
                                        (0, r.jsx)(p.Avr, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: F.intl.string(F.t.DEoVWZ),
                                            onClick: eh,
                                        }),
                                    ],
                                }),
                                eT
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: V.dot }),
                                              (0, r.jsx)("div", {
                                                  className: V.footerAction,
                                                  children: (0, r.jsx)(p.Avr, {
                                                      onClick: () => eb(eI),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: F.intl.string(F.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsx)("div", { className: V.dot }),
                                (0, r.jsx)("div", {
                                    className: V.footerAction,
                                    children: (0, r.jsx)(p.Avr, {
                                        onClick: eg,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: F.intl.string(F.t["94JbM3"]),
                                    }),
                                }),
                                eS
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: V.dot }),
                                              (0, r.jsx)("div", {
                                                  className: V.footerAction,
                                                  children: (0, r.jsx)(p.Avr, {
                                                      onClick: ey,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: F.intl.string(F.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != el
                                    ? (0, r.jsx)(er, {
                                          alertActionsExecution: el,
                                          guildId: l.guild_id,
                                      })
                                    : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
