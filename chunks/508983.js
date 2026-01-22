n.d(t, { A: () => ea }), n(638769);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    f = n(990078),
    p = n(397927),
    _ = n(956793),
    h = n(775602),
    m = n(709066),
    g = n(845625),
    E = n(785823),
    b = n(449585),
    y = n(137207),
    O = n(22007),
    A = n(378570),
    v = n(589022),
    S = n(576705),
    I = n(287809),
    T = n(562153),
    C = n(427262),
    N = n(465364),
    R = n(763754),
    w = n(901057),
    P = n(936044),
    D = n(643204),
    x = n(535421),
    L = n(112758),
    j = n(754459),
    M = n(809115),
    k = n(888675),
    U = n(381941),
    G = n(652215),
    V = n(705751),
    F = n(200700),
    B = n(985018),
    H = n(906135);
function Y(e, t, n) {
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
function W(e) {
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
                Y(e, t, n[t]);
            });
    }
    return e;
}
function K(e, t) {
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
function z(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : K(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = X(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function Z(e, t) {
    let { popouts: n, selected: r, setPopout: a } = (0, j.A)(e.id, U.Fd),
        { usernameProfile: s, avatarProfile: o } = n,
        l = (0, L.r4)(e.author.id, t.id),
        c = (0, L.UY)(e.author.id, t.id, e.id),
        u = (0, L.m)(e, t, s, a);
    return {
        selected: r,
        onContextMenu: l,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, L.Jo)(o, a),
        onPopoutRequestClose: i.useCallback(
            () =>
                a({
                    usernameProfile: !1,
                    avatarProfile: !1,
                    referencedUsernameProfile: !1,
                }),
            [a],
        ),
        renderPopout: x.A,
        showAvatarPopout: o,
        showUsernamePopout: s,
    };
}
function Q(e, t, n) {
    return i.useMemo(() => {
        if (null != t && null != n)
            return (i) =>
                (0, r.jsx)(
                    v.A,
                    z(W({}, i), {
                        user: t,
                        currentUser: n,
                        guildId: e.guild_id,
                        channelId: e.id,
                    }),
                );
    }, [e, t, n]);
}
function $(e) {
    let { children: t, className: n, compact: i } = e;
    return (0, r.jsx)("div", {
        className: s()(H.xQ, n, { [H.oE]: i }),
        children: t,
    });
}
function J(e) {
    let { children: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: s()(H.A3, n),
        children: t,
    });
}
function ee(e) {
    switch (e) {
        case g.G.DELETE_USER_MESSAGE:
            return (0, r.jsx)(p.ucK, {
                size: "xs",
                color: "currentColor",
                className: H.yr,
            });
        case g.G.SET_COMPLETED:
            return (0, r.jsx)(p.A9s, {
                size: "xs",
                color: "currentColor",
                className: s()(H.yr, H.r0),
            });
        case g.G.SUBMIT_FEEDBACK:
            return (0, r.jsx)(p.iFK, {
                size: "xs",
                color: "currentColor",
                className: H.yr,
            });
        default:
            return null;
    }
}
function et(e, t, n) {
    var r;
    let i = null != (r = T.Ay.getNickname(n, null, t)) ? r : C.Ay.getUserTag(t),
        a = l()(e.ts),
        s = "".concat(i, " ").concat(a.fromNow());
    try {
        switch (parseInt(e.actionType)) {
            case g.G.DELETE_USER_MESSAGE:
                return B.intl.formatToPlainString(B.t.BtKE9h, {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            case g.G.SET_COMPLETED:
                return B.intl.formatToPlainString(B.t.dyo9US, {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            case g.G.SUBMIT_FEEDBACK:
                return B.intl.formatToPlainString(B.t["C9/kIO"], {
                    userName: i,
                    timestamp: a.fromNow(),
                });
            default:
                return s;
        }
    } catch (e) {
        return s;
    }
}
function en(e) {
    let { alertAction: t, guildId: n } = e,
        i = (0, u.bG)([I.default], () => I.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == i) return ee(e);
        let a = et(t, i, n);
        return (0, r.jsx)(f.m, {
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
        className: H.q_,
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
        { message: n, channel: i, embedChannel: a, compact: s, interactionUserId: o } = e,
        l = Z(n, i),
        c = Q(i, n.author),
        u = (0, R.Ay)(n),
        d = (0, D.tO)(
            W(
                {
                    message: n,
                    channel: i,
                    author: u,
                    guildId: null == i ? void 0 : i.guild_id,
                    compact: s,
                },
                l,
            ),
            c,
        ),
        f = () => d,
        _ = I.default.getUser(o),
        h = Z(n, i),
        m = Q(i, _, I.default.getCurrentUser());
    if (null != _) {
        let e = (0, R.FT)(_, i),
            r = (0, D.tO)(
                W(
                    {
                        message: n,
                        channel: i,
                        author: e,
                        guildId: null == i ? void 0 : i.guild_id,
                        compact: s,
                    },
                    h,
                ),
                m,
            );
        t = () => r;
    }
    let g = () =>
        (0, r.jsx)("div", {
            className: H.aT,
            children: (0, r.jsx)(w.A, {
                channel: a,
                className: H.HA,
                openChatWithoutConnecting: !0,
            }),
        });
    return (0, r.jsx)(p.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: H.he,
        children: (0, E.fu)(n, a, g, f, t),
    });
});
function ea(e) {
    var t;
    let { id: n, compact: a, message: o, channel: l } = e,
        {
            avatarSrc: f,
            eventHandlers: { onMouseEnter: v, onMouseLeave: I },
        } = (0, M.a)(!0),
        T = (0, c.rm)(null != n ? n : ""),
        { onFocus: C } = T,
        R = q(T, ["onFocus"]),
        { isFocused: w, handleFocus: x, handleBlur: j } = (0, L.G8)(C),
        U = (0, u.bG)([h.A], () => h.A.keyboardModeEnabled),
        Y = (0, u.bG)([S.A], () => S.A.can(G.xBc.MANAGE_MESSAGES, l), [l]),
        {
            ruleName: K,
            embedChannel: X,
            decisionId: Q,
            keywordMatchedContent: ee,
            keyword: et,
            content: en,
            flaggedMessageId: ea,
            timeoutDuration: es,
            decisionReason: eo,
            alertActionsExecution: el,
            quarantineType: ec,
            interactionUserId: eu,
        } = (0, E.Ay)(o),
        ed = i.useMemo(() => (0, N.Tz)(en, ee, l.id), [en, ee, l]),
        ef = Z(o, l),
        { selected: ep } = ef,
        e_ = q(ef, ["selected"]),
        eh = ep || (U && w),
        em = (e) => {
            var t;
            null == (t = e_.onContextMenuModerateUser) || t.call(e_, e);
        },
        eg = i.useCallback(() => {
            (0, b.w2)(o.id, en, Q, l);
        }, [o.id, en, Q, l]),
        eE = i.useCallback(
            (e) => {
                null != ea &&
                    null != X &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (0, O.A)(G.BVt.CHANNEL(null == X ? void 0 : X.guild_id, null == X ? void 0 : X.id, ea)));
            },
            [X, ea],
        ),
        eb = i.useCallback(
            (e) => {
                null != X &&
                    (_.default.selectChannel({
                        guildId: X.guild_id,
                        channelId: e,
                        messageId: o.id,
                    }),
                    (0, A.iN)(e));
            },
            [o, X],
        ),
        ey = i.useCallback(() => {
            (0, y.E5)(o.id, l, g.G.DELETE_USER_MESSAGE);
        }, [l, o.id]),
        eO = (0, F.getFriendlyDurationString)(Number(es)),
        eA = null != eo,
        ev = Y && null != ea && (null == el || !el.actions.hasOwnProperty(g.G.DELETE_USER_MESSAGE)),
        eS =
            o.embeds.length > 0
                ? null == (t = o.embeds[0].fields.find((e) => "channel_id" === e.rawName))
                    ? void 0
                    : t.rawValue
                : null,
        eI = null != eS;
    return (0, r.jsx)("div", {
        onMouseEnter: v,
        onMouseLeave: I,
        children: (0, r.jsx)(k.A, {
            className: s()(H.rs, { [H.oE]: a }),
            iconNode: a ? null : (0, r.jsx)(M.l, { src: f }),
            iconContainerClassName: H.zc,
            compact: a,
            children: (0, r.jsxs)("div", {
                className: s()(H.Qs, { [H.oE]: a }),
                children: [
                    (0, r.jsx)(D.ix, {
                        message: o,
                        messageClassname: H.he,
                        className: s()(H.QV, H.he, { [H.oE]: a }),
                        username: (0, r.jsxs)("div", {
                            className: H.he,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: H.Xh,
                                    children: B.intl.string(B.t.hG1StD),
                                }),
                                (0, r.jsx)(m.A, {
                                    type: V.nu.SYSTEM_DM,
                                    className: H.Al,
                                }),
                                (0, r.jsx)(ei, {
                                    message: o,
                                    channel: l,
                                    embedChannel: X,
                                    compact: a,
                                    interactionUserId: eu,
                                }),
                            ],
                        }),
                        compact: a,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: s()(H.BK, { [H.oE]: a }),
                        children: (0, r.jsx)(
                            P.A,
                            z(W({}, R), {
                                message: o,
                                channel: X,
                                content: ed,
                                compact: a,
                                withFooter: !0,
                                hideTimestamp: !0,
                                className: s()(H.gD, {
                                    [H.oE]: a,
                                    [H.wH]: eh,
                                    [H.JD]: null != ea && null != X,
                                }),
                                childrenAccessories: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: H.Y4,
                                            children: [
                                                null != et &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                children: B.intl.format(B.t.SYIUTR, { keyword: et }),
                                                            }),
                                                            (0, r.jsx)("div", { className: s()(H.Om, H.Gx) }),
                                                        ],
                                                    }),
                                                null != K &&
                                                    (0, r.jsx)(p.Text, {
                                                        variant: "text-xs/medium",
                                                        color: "text-muted",
                                                        tag: "span",
                                                        children: B.intl.format(B.t.ZoOyKB, { ruleName: K }),
                                                    }),
                                                null != eO &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", { className: s()(H.Om, H.Gx) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: H.__invalid_footerText,
                                                                children: B.intl.format(B.t["3LYql6"], {
                                                                    duration: eO,
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                null != ec &&
                                                    (0, r.jsxs)(r.Fragment, {
                                                        children: [
                                                            (0, r.jsx)("div", { className: s()(H.Om, H.Gx) }),
                                                            (0, r.jsx)(p.Text, {
                                                                variant: "text-xs/medium",
                                                                color: "text-muted",
                                                                tag: "span",
                                                                className: H.nx,
                                                                children: B.intl.format(B.t["26bB2M"], {
                                                                    reason: (0, E.o2)(ec),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        eA
                                            ? (0, r.jsx)(J, {
                                                  children: (0, r.jsx)(p.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      tag: "span",
                                                      children: eo,
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
                    (0, r.jsx)($, {
                        compact: a,
                        children: (0, r.jsxs)("div", {
                            className: s()(H.Y4, H.UD, { [H.oE]: a }),
                            children: [
                                (0, r.jsxs)("div", {
                                    className: H.AX,
                                    children: [
                                        (0, r.jsx)(p.lmn, {
                                            size: "xs",
                                            color: d.A.unsafe_rawColors.BRAND_500.css,
                                            className: H.Dq,
                                        }),
                                        (0, r.jsx)(p.QWc, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: B.intl.string(B.t.DEoVWZ),
                                            onClick: em,
                                        }),
                                    ],
                                }),
                                eI
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: H.Om }),
                                              (0, r.jsx)("div", {
                                                  className: H.AX,
                                                  children: (0, r.jsx)(p.QWc, {
                                                      onClick: () => eb(eS),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: B.intl.string(B.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, r.jsx)("div", { className: H.Om }),
                                (0, r.jsx)("div", {
                                    className: H.AX,
                                    children: (0, r.jsx)(p.QWc, {
                                        onClick: eg,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: B.intl.string(B.t["94JbM3"]),
                                    }),
                                }),
                                ev
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)("div", { className: H.Om }),
                                              (0, r.jsx)("div", {
                                                  className: H.AX,
                                                  children: (0, r.jsx)(p.QWc, {
                                                      onClick: ey,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: B.intl.string(B.t["3A52tY"]),
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
