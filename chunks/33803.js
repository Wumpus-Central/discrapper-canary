n.d(t, { Z: () => ea }), n(642613);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(91192),
    u = n(722770),
    d = n(442837),
    f = n(28664),
    _ = n(481060),
    p = n(287734),
    h = n(607070),
    m = n(385499),
    g = n(313889),
    E = n(825829),
    b = n(226192),
    y = n(36459),
    O = n(336197),
    v = n(359110),
    I = n(726033),
    T = n(496675),
    S = n(594174),
    A = n(5192),
    C = n(51144),
    N = n(937889),
    R = n(739566),
    P = n(779125),
    D = n(890410),
    w = n(464891),
    L = n(507418),
    x = n(348238),
    M = n(38267),
    k = n(83561),
    j = n(834129),
    U = n(959517),
    G = n(981631),
    B = n(674563),
    Z = n(590433),
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
function X(e, t) {
    let { popouts: n, selected: r, setPopout: a } = (0, M.Z)(e.id, U.d$),
        { usernameProfile: o, avatarProfile: s } = n,
        l = (0, x.wq)(e.author.id, t.id),
        c = (0, x.RN)(e.author.id, t.id, e.id),
        u = (0, x.XO)(e, t, o, a);
    return {
        selected: r,
        onContextMenu: l,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, x.R9)(s, a),
        onPopoutRequestClose: i.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [a],
        ),
        renderPopout: L.Z,
        showAvatarPopout: s,
        showUsernamePopout: o,
    };
}
function Q(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    I.Z,
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
            return (0, r.jsx)(_.XHJ, {
                size: "xs",
                color: "currentColor",
                className: V.alertActionIcon,
            });
        case g.d.SET_COMPLETED:
            return (0, r.jsx)(_.dz2, {
                size: "xs",
                color: "currentColor",
                className: o()(V.alertActionIcon, V.alertActionSetCompletedIcon),
            });
        case g.d.SUBMIT_FEEDBACK:
            return (0, r.jsx)(_.U65, {
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
        i = (0, d.e7)([S.default], () => S.default.getUser(t.actor), [t.actor]);
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
        l = X(n, i),
        c = Q(i, n.author),
        u = (0, R.ZP)(n),
        d = (0, w.CF)(
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
        p = S.default.getUser(s),
        h = X(n, i),
        m = Q(i, p, S.default.getCurrentUser());
    if (null != p) {
        let e = (0, R.ij)(p, i),
            r = (0, w.CF)(
                Y(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: o,
                    },
                    h,
                ),
                m,
            );
        t = () => r;
    }
    let g = () =>
        (0, r.jsx)("div", {
            className: V.channelNameContainer,
            children: (0, r.jsx)(P.Z, {
                channel: a,
                className: V.channelName,
                openChatWithoutConnecting: !0,
            }),
        });
    return (0, r.jsx)(_.Text, {
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
            eventHandlers: { onMouseEnter: I, onMouseLeave: S },
        } = (0, k.m)(!0),
        A = (0, c.JA)(null != n ? n : ""),
        { onFocus: C } = A,
        R = z(A, ["onFocus"]),
        { isFocused: P, handleFocus: L, handleBlur: M } = (0, x.bb)(C),
        U = (0, d.e7)([h.Z], () => h.Z.keyboardModeEnabled),
        H = (0, d.e7)([T.Z], () => T.Z.can(G.Plq.MANAGE_MESSAGES, l), [l]),
        {
            ruleName: W,
            embedChannel: q,
            decisionId: Q,
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
        ef = X(s, l),
        { selected: e_ } = ef,
        ep = z(ef, ["selected"]),
        eh = e_ || (U && P),
        em = (e) => {
            var t;
            null == (t = ep.onContextMenuModerateUser) || t.call(ep, e);
        },
        eg = i.useCallback(() => {
            (0, b._s)(s.id, en, Q, l);
        }, [s.id, en, Q, l]),
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
                    (p.default.selectChannel({
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
        eO = (0, Z.getFriendlyDurationString)(Number(eo)),
        ev = null != es,
        eI = H && null != ea && (null == el || !el.actions.hasOwnProperty(g.d.DELETE_USER_MESSAGE)),
        eT =
            s.embeds.length > 0
                ? null == (t = s.embeds[0].fields.find((e) => "channel_id" === e.rawName))
                    ? void 0
                    : t.rawValue
                : null,
        eS = null != eT;
    return (0, r.jsx)("div", {
        onMouseEnter: I,
        onMouseLeave: S,
        children: (0, r.jsx)(j.Z, {
            className: o()(V.mainContainer, { [V.compact]: a }),
            iconNode: a ? null : (0, r.jsx)(k.S, { src: f }),
            iconContainerClassName: V.iconContainer,
            compact: a,
            children: (0, r.jsxs)("div", {
                className: o()(V.content, { [V.compact]: a }),
                children: [
                    (0, r.jsx)(w.nD, {
                        message: s,
                        messageClassname: V.spanCorrection,
                        className: o()(V.usernameContainer, V.spanCorrection, { [V.compact]: a }),
                        username: (0, r.jsxs)("div", {
                            className: V.spanCorrection,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.username,
                                    children: F.intl.string(F.t.hG1StD),
                                }),
                                (0, r.jsx)(m.Z, {
                                    type: B.Hb.SYSTEM_DM,
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
                            D.Z,
                            K(Y({}, R), {
                                message: s,
                                channel: q,
                                content: ed,
                                compact: a,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: o()(V.embedCard, {
                                    [V.compact]: a,
                                    [V.selected]: eh,
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
                                                            (0, r.jsx)(_.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                children: F.intl.format(F.t.SYIUTR, { keyword: et }),
                                                            }),
                                                            (0, r.jsx)("div", { className: o()(V.dot, V.dotMargin) }),
                                                        ],
                                                    }),
                                                null != W &&
                                                    (0, r.jsx)(_.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: F.intl.format(F.t.ZoOyKB, { ruleName: W }),
                                                    }),
                                                null != eO &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", { className: o()(V.dot, V.dotMargin) }),
                                                            (0, r.jsx)(_.Text, {
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
                                                            (0, r.jsx)(_.Text, {
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
                                                  children: (0, r.jsx)(_.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      tag: "span",
                                                      children: es,
                                                  }),
                                              })
                                            : null,
                                    ],
                                }),
                                popoutProps: ep,
                                zalgo: !0,
                                onFocus: L,
                                onBlur: M,
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
                                        (0, r.jsx)(_.b7C, {
                                            size: "xs",
                                            color: u.Z.BRAND,
                                            className: V.footerIcon,
                                        }),
                                        (0, r.jsx)(_.Avr, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: F.intl.string(F.t.DEoVWZ),
                                            onClick: em,
                                        }),
                                    ],
                                }),
                                eS
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: V.dot }),
                                              (0, r.jsx)("div", {
                                                  className: V.footerAction,
                                                  children: (0, r.jsx)(_.Avr, {
                                                      onClick: () => eb(eT),
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
                                    children: (0, r.jsx)(_.Avr, {
                                        onClick: eg,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: F.intl.string(F.t["94JbM3"]),
                                    }),
                                }),
                                eI
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: V.dot }),
                                              (0, r.jsx)("div", {
                                                  className: V.footerAction,
                                                  children: (0, r.jsx)(_.Avr, {
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
