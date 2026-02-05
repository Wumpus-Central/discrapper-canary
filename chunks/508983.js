n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    d = n(837381),
    c = n(311907),
    u = n(827734),
    m = n(990078),
    _ = n(397927),
    h = n(956793),
    p = n(775602),
    g = n(709066),
    A = n(845625),
    f = n(785823),
    x = n(449585),
    E = n(137207),
    C = n(22007),
    I = n(378570),
    T = n(589022),
    v = n(576705),
    N = n(287809),
    S = n(562153),
    b = n(427262),
    y = n(465364),
    j = n(763754),
    R = n(901057),
    L = n(936044),
    M = n(643204),
    O = n(535421),
    P = n(112758),
    D = n(754459),
    k = n(809115),
    U = n(888675),
    w = n(381941),
    G = n(652215),
    B = n(705751),
    F = n(200700),
    H = n(985018),
    V = n(906135);
function z(e, t) {
    let { popouts: n, selected: i, setPopout: a } = (0, D.A)(e.id, w.Fd),
        { usernameProfile: r, avatarProfile: s } = n,
        o = (0, P.r4)(e.author.id, t.id),
        d = (0, P.UY)(e.author.id, t.id, e.id),
        c = (0, P.m)(e, t, r, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: d,
        onClickUsername: c,
        onClickAvatar: (0, P.Jo)(s, a),
        onPopoutRequestClose: l.useCallback(
            () => a({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [a],
        ),
        renderPopout: O.A,
        showAvatarPopout: s,
        showUsernamePopout: r,
    };
}
function W(e, t, n) {
    return l.useMemo(() => {
        if (null != t && null != n)
            return (l) => (0, i.jsx)(T.A, { ...l, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function Y(e) {
    let { children: t, className: n, compact: l } = e;
    return (0, i.jsx)("div", { className: r()(V.xQ, n, { [V.oE]: l }), children: t });
}
function q(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: r()(V.A3, n), children: t });
}
function K(e) {
    switch (e) {
        case A.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(_.ucK, { size: "xs", color: "currentColor", className: V.yr });
        case A.G.SET_COMPLETED:
            return (0, i.jsx)(_.A9s, { size: "xs", color: "currentColor", className: r()(V.yr, V.r0) });
        case A.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(_.iFK, { size: "xs", color: "currentColor", className: V.yr });
        default:
            return null;
    }
}
function Q(e) {
    let { alertAction: t, guildId: n } = e,
        l = (0, c.bG)([N.default], () => N.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == l) return K(e);
        let a = (function (e, t, n) {
            let i = S.Ay.getNickname(n, null, t) ?? b.Ay.getUserTag(t),
                l = o()(e.ts),
                a = `${i} ${l.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case A.G.DELETE_USER_MESSAGE:
                        return H.intl.formatToPlainString(H.t.BtKE9h, { userName: i, timestamp: l.fromNow() });
                    case A.G.SET_COMPLETED:
                        return H.intl.formatToPlainString(H.t.dyo9US, { userName: i, timestamp: l.fromNow() });
                    case A.G.SUBMIT_FEEDBACK:
                        return H.intl.formatToPlainString(H.t["C9/kIO"], { userName: i, timestamp: l.fromNow() });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, l, n);
        return (0, i.jsx)(m.m, { text: a, children: K(e) });
    } catch (e) {
        return null;
    }
}
function J(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        l = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)("div", {
        className: V.q_,
        children: l.map((e) => (0, i.jsx)(Q, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let X = l.memo(function (e) {
    let t,
        { message: n, channel: l, embedChannel: a, compact: r, interactionUserId: s } = e,
        o = z(n, l),
        d = W(l, n.author),
        c = (0, j.Ay)(n),
        u = (0, M.tO)({ message: n, channel: l, author: c, guildId: l?.guild_id, compact: r, ...o }, d),
        m = N.default.getUser(s),
        h = z(n, l),
        p = W(l, m, N.default.getCurrentUser());
    if (null != m) {
        let e = (0, j.FT)(m, l),
            i = (0, M.tO)({ message: n, channel: l, author: e, guildId: l?.guild_id, compact: r, ...h }, p);
        t = () => i;
    }
    return (0, i.jsx)(_.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: V.he,
        children: (0, f.fu)(
            n,
            a,
            () =>
                (0, i.jsx)("div", {
                    className: V.aT,
                    children: (0, i.jsx)(R.A, { channel: a, className: V.HA, openChatWithoutConnecting: !0 }),
                }),
            () => u,
            t,
        ),
    });
});
function Z(e) {
    let { id: t, compact: n, message: a, channel: s } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: m, onMouseLeave: T },
        } = (0, k.a)(!0),
        { onFocus: N, ...S } = (0, d.rm)(t ?? ""),
        { isFocused: b, handleFocus: j, handleBlur: R } = (0, P.G8)(N),
        O = (0, c.bG)([p.A], () => p.A.keyboardModeEnabled),
        D = (0, c.bG)([v.A], () => v.A.can(G.xBc.MANAGE_MESSAGES, s), [s]),
        {
            ruleName: w,
            embedChannel: W,
            decisionId: K,
            keywordMatchedContent: Q,
            keyword: Z,
            content: $,
            flaggedMessageId: ee,
            timeoutDuration: et,
            decisionReason: en,
            alertActionsExecution: ei,
            quarantineType: el,
            interactionUserId: ea,
        } = (0, f.Ay)(a),
        er = l.useMemo(() => (0, y.Tz)($, Q, s.id), [$, Q, s]),
        { selected: es, ...eo } = z(a, s),
        ed = l.useCallback(() => {
            (0, x.w2)(a.id, $, K, s);
        }, [a.id, $, K, s]),
        ec = l.useCallback(
            (e) => {
                null != ee &&
                    null != W &&
                    (e.stopPropagation(), e.preventDefault(), (0, C.A)(G.BVt.CHANNEL(W?.guild_id, W?.id, ee)));
            },
            [W, ee],
        ),
        eu = l.useCallback(
            (e) => {
                null != W &&
                    (h.default.selectChannel({ guildId: W.guild_id, channelId: e, messageId: a.id }), (0, I.iN)(e));
            },
            [a, W],
        ),
        em = l.useCallback(() => {
            (0, E.E5)(a.id, s, A.G.DELETE_USER_MESSAGE);
        }, [s, a.id]),
        e_ = (0, F.getFriendlyDurationString)(Number(et)),
        eh = null != en,
        ep = D && null != ee && (null == ei || !ei.actions.hasOwnProperty(A.G.DELETE_USER_MESSAGE)),
        eg = a.embeds.length > 0 ? a.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        eA = null != eg;
    return (0, i.jsx)("div", {
        onMouseEnter: m,
        onMouseLeave: T,
        children: (0, i.jsx)(U.A, {
            className: r()(V.rs, { [V.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(k.l, { src: o }),
            iconContainerClassName: V.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(V.Qs, { [V.oE]: n }),
                children: [
                    (0, i.jsx)(M.ix, {
                        message: a,
                        messageClassname: V.he,
                        className: r()(V.QV, V.he, { [V.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: V.he,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.Xh,
                                    children: H.intl.string(H.t.hG1StD),
                                }),
                                (0, i.jsx)(g.A, { type: B.nu.SYSTEM_DM, className: V.Al }),
                                (0, i.jsx)(X, {
                                    message: a,
                                    channel: s,
                                    embedChannel: W,
                                    compact: n,
                                    interactionUserId: ea,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: r()(V.BK, { [V.oE]: n }),
                        children: (0, i.jsx)(L.A, {
                            ...S,
                            message: a,
                            channel: W,
                            content: er,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(V.gD, {
                                [V.oE]: n,
                                [V.wH]: es || (O && b),
                                [V.JD]: null != ee && null != W,
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: V.Y4,
                                        children: [
                                            null != Z &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(_.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: H.intl.format(H.t.SYIUTR, { keyword: Z }),
                                                        }),
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                    ],
                                                }),
                                            null != w &&
                                                (0, i.jsx)(_.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: H.intl.format(H.t.ZoOyKB, { ruleName: w }),
                                                }),
                                            null != e_ &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.__invalid_footerText,
                                                            children: H.intl.format(H.t["3LYql6"], { duration: e_ }),
                                                        }),
                                                    ],
                                                }),
                                            null != el &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(_.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.nx,
                                                            children: H.intl.format(H.t["26bB2M"], {
                                                                reason: (0, f.o2)(el),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    eh
                                        ? (0, i.jsx)(q, {
                                              children: (0, i.jsx)(_.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  children: en,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            popoutProps: eo,
                            zalgo: !0,
                            onFocus: j,
                            onBlur: R,
                            onClick: ec,
                        }),
                    }),
                    (0, i.jsx)(Y, {
                        compact: n,
                        children: (0, i.jsxs)("div", {
                            className: r()(V.Y4, V.UD, { [V.oE]: n }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: V.AX,
                                    children: [
                                        (0, i.jsx)(_.lmn, {
                                            size: "xs",
                                            color: u.A.unsafe_rawColors.BRAND_500.css,
                                            className: V.Dq,
                                        }),
                                        (0, i.jsx)(_.QWc, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: H.intl.string(H.t.DEoVWZ),
                                            onClick: (e) => {
                                                eo.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                eA
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(_.QWc, {
                                                      onClick: () => eu(eg),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: H.intl.string(H.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)("div", { className: V.Om }),
                                (0, i.jsx)("div", {
                                    className: V.AX,
                                    children: (0, i.jsx)(_.QWc, {
                                        onClick: ed,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: H.intl.string(H.t["94JbM3"]),
                                    }),
                                }),
                                ep
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(_.QWc, {
                                                      onClick: em,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: H.intl.string(H.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != ei ? (0, i.jsx)(J, { alertActionsExecution: ei, guildId: s.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
