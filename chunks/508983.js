n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    _ = n(990078),
    A = n(397927),
    m = n(956793),
    E = n(775602),
    T = n(709066),
    I = n(845625),
    N = n(785823),
    g = n(449585),
    f = n(137207),
    C = n(22007),
    h = n(378570),
    p = n(589022),
    S = n(576705),
    x = n(287809),
    R = n(562153),
    O = n(427262),
    M = n(465364),
    D = n(763754),
    L = n(901057),
    U = n(936044),
    P = n(643204),
    v = n(535421),
    y = n(112758),
    j = n(754459),
    k = n(809115),
    b = n(888675),
    G = n(381941),
    H = n(652215),
    w = n(705751),
    F = n(200700),
    B = n(985018),
    V = n(96476);
function X(e, t) {
    let { popouts: n, selected: i, setPopout: a } = (0, j.A)(e.id, G.Fd),
        { usernameProfile: r, avatarProfile: s } = n,
        o = (0, y.r4)(e.author.id, t.id),
        c = (0, y.UY)(e.author.id, t.id, e.id),
        u = (0, y.m)(e, t, r, a);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, y.Jo)(s, a),
        onPopoutRequestClose: l.useCallback(
            () => a({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [a],
        ),
        renderPopout: v.A,
        showAvatarPopout: s,
        showUsernamePopout: r,
    };
}
function q(e, t, n) {
    return l.useMemo(() => {
        if (null != t && null != n)
            return (l) => (0, i.jsx)(p.A, { ...l, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function K(e) {
    let { children: t, className: n, compact: l } = e;
    return (0, i.jsx)("div", { className: r()(V.xQ, n, { [V.oE]: l }), children: t });
}
function Y(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: r()(V.A3, n), children: t });
}
function W(e) {
    switch (e) {
        case I.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(A.ucK, { size: "xs", color: "currentColor", className: V.yr });
        case I.G.SET_COMPLETED:
            return (0, i.jsx)(A.A9s, { size: "xs", color: "currentColor", className: r()(V.yr, V.r0) });
        case I.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(A.iFK, { size: "xs", color: "currentColor", className: V.yr });
        default:
            return null;
    }
}
function J(e) {
    let { alertAction: t, guildId: n } = e,
        l = (0, u.bG)([x.default], () => x.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == l) return W(e);
        let a = (function (e, t, n) {
            let i = R.Ay.getNickname(n, null, t) ?? O.Ay.getUserTag(t),
                l = o()(e.ts),
                a = `${i} ${l.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case I.G.DELETE_USER_MESSAGE:
                        return B.intl.formatToPlainString(B.t.BtKE9h, { userName: i, timestamp: l.fromNow() });
                    case I.G.SET_COMPLETED:
                        return B.intl.formatToPlainString(B.t.dyo9US, { userName: i, timestamp: l.fromNow() });
                    case I.G.SUBMIT_FEEDBACK:
                        return B.intl.formatToPlainString(B.t["C9/kIO"], { userName: i, timestamp: l.fromNow() });
                    default:
                        return a;
                }
            } catch (e) {
                return a;
            }
        })(t, l, n);
        return (0, i.jsx)(_.m, { text: a, children: W(e) });
    } catch (e) {
        return null;
    }
}
function z(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        l = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)("div", {
        className: V.q_,
        children: l.map((e) => (0, i.jsx)(J, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let Q = l.memo(function (e) {
    let t,
        { message: n, channel: l, embedChannel: a, compact: r, interactionUserId: s } = e,
        o = X(n, l),
        c = q(l, n.author),
        u = (0, D.Ay)(n),
        d = (0, P.tO)({ message: n, channel: l, author: u, guildId: l?.guild_id, compact: r, ...o }, c),
        _ = x.default.getUser(s),
        m = X(n, l),
        E = q(l, _, x.default.getCurrentUser());
    if (null != _) {
        let e = (0, D.FT)(_, l),
            i = (0, P.tO)({ message: n, channel: l, author: e, guildId: l?.guild_id, compact: r, ...m }, E);
        t = () => i;
    }
    return (0, i.jsx)(A.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: V.he,
        children: (0, N.fu)(
            n,
            a,
            () =>
                (0, i.jsx)("div", {
                    className: V.aT,
                    children: (0, i.jsx)(L.A, { channel: a, className: V.HA, openChatWithoutConnecting: !0 }),
                }),
            () => d,
            t,
        ),
    });
});
function Z(e) {
    let { id: t, compact: n, message: a, channel: s } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: _, onMouseLeave: p },
        } = (0, k.a)(!0),
        { onFocus: x, ...R } = (0, c.rm)(t ?? ""),
        { isFocused: O, handleFocus: D, handleBlur: L } = (0, y.G8)(x),
        v = (0, u.bG)([E.A], () => E.A.keyboardModeEnabled),
        j = (0, u.bG)([S.A], () => S.A.can(H.xBc.MANAGE_MESSAGES, s), [s]),
        {
            ruleName: G,
            embedChannel: q,
            decisionId: W,
            keywordMatchedContent: J,
            keyword: Z,
            content: $,
            flaggedMessageId: ee,
            timeoutDuration: et,
            decisionReason: en,
            alertActionsExecution: ei,
            quarantineType: el,
            interactionUserId: ea,
        } = (0, N.Ay)(a),
        er = l.useMemo(() => (0, M.Tz)($, J, s.id), [$, J, s]),
        { selected: es, ...eo } = X(a, s),
        ec = l.useCallback(() => {
            (0, g.w2)(a.id, $, W, s);
        }, [a.id, $, W, s]),
        eu = l.useCallback(
            (e) => {
                null != ee &&
                    null != q &&
                    (e.stopPropagation(), e.preventDefault(), (0, C.A)(H.BVt.CHANNEL(q?.guild_id, q?.id, ee)));
            },
            [q, ee],
        ),
        ed = l.useCallback(
            (e) => {
                null != q &&
                    (m.default.selectChannel({ guildId: q.guild_id, channelId: e, messageId: a.id }), (0, h.iN)(e));
            },
            [a, q],
        ),
        e_ = l.useCallback(() => {
            (0, f.E5)(a.id, s, I.G.DELETE_USER_MESSAGE);
        }, [s, a.id]),
        eA = (0, F.getFriendlyDurationString)(Number(et)),
        em = null != en,
        eE = j && null != ee && (null == ei || !ei.actions.hasOwnProperty(I.G.DELETE_USER_MESSAGE)),
        eT = a.embeds.length > 0 ? a.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        eI = null != eT;
    return (0, i.jsx)("div", {
        onMouseEnter: _,
        onMouseLeave: p,
        children: (0, i.jsx)(b.A, {
            className: r()(V.rs, { [V.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(k.l, { src: o }),
            iconContainerClassName: V.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(V.Qs, { [V.oE]: n }),
                children: [
                    (0, i.jsx)(P.ix, {
                        message: a,
                        messageClassname: V.he,
                        className: r()(V.QV, V.he, { [V.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: V.he,
                            children: [
                                (0, i.jsx)(A.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.Xh,
                                    children: B.intl.string(B.t.hG1StD),
                                }),
                                (0, i.jsx)(T.A, { type: w.nu.SYSTEM_DM, className: V.Al }),
                                (0, i.jsx)(Q, {
                                    message: a,
                                    channel: s,
                                    embedChannel: q,
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
                        children: (0, i.jsx)(U.A, {
                            ...R,
                            message: a,
                            channel: q,
                            content: er,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: r()(V.gD, {
                                [V.oE]: n,
                                [V.wH]: es || (v && O),
                                [V.JD]: null != ee && null != q,
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: V.Y4,
                                        children: [
                                            null != Z &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(A.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: B.intl.format(B.t.SYIUTR, { keyword: Z }),
                                                        }),
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                    ],
                                                }),
                                            null != G &&
                                                (0, i.jsx)(A.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: B.intl.format(B.t.ZoOyKB, { ruleName: G }),
                                                }),
                                            null != eA &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(A.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.__invalid_footerText,
                                                            children: B.intl.format(B.t["3LYql6"], { duration: eA }),
                                                        }),
                                                    ],
                                                }),
                                            null != el &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: r()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(A.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.nx,
                                                            children: B.intl.format(B.t["26bB2M"], {
                                                                reason: (0, N.o2)(el),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    em
                                        ? (0, i.jsx)(Y, {
                                              children: (0, i.jsx)(A.Text, {
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
                            onFocus: D,
                            onBlur: L,
                            onClick: eu,
                        }),
                    }),
                    (0, i.jsx)(K, {
                        compact: n,
                        children: (0, i.jsxs)("div", {
                            className: r()(V.Y4, V.UD, { [V.oE]: n }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: V.AX,
                                    children: [
                                        (0, i.jsx)(A.lmn, {
                                            size: "xs",
                                            color: d.A.unsafe_rawColors.BRAND_500.css,
                                            className: V.Dq,
                                        }),
                                        (0, i.jsx)(A.QWc, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: B.intl.string(B.t.DEoVWZ),
                                            onClick: (e) => {
                                                eo.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                eI
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(A.QWc, {
                                                      onClick: () => ed(eT),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: B.intl.string(B.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)("div", { className: V.Om }),
                                (0, i.jsx)("div", {
                                    className: V.AX,
                                    children: (0, i.jsx)(A.QWc, {
                                        onClick: ec,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: B.intl.string(B.t["94JbM3"]),
                                    }),
                                }),
                                eE
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(A.QWc, {
                                                      onClick: e_,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: B.intl.string(B.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != ei ? (0, i.jsx)(z, { alertActionsExecution: ei, guildId: s.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
