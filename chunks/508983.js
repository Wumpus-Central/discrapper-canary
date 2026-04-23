"use strict";
n.d(t, { A: () => ei });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    _ = n(990078),
    E = n(241326),
    A = n(933832),
    m = n(138134),
    I = n(834730),
    T = n(231483),
    N = n(123292),
    g = n(956793),
    p = n(775602),
    C = n(709066),
    f = n(845625),
    R = n(785823),
    h = n(449585),
    S = n(137207),
    O = n(22007),
    x = n(378570),
    M = n(589022),
    D = n(576705),
    P = n(287809),
    U = n(562153),
    y = n(427262),
    L = n(465364),
    v = n(763754),
    j = n(901057),
    k = n(936044),
    b = n(643204),
    G = n(535421),
    w = n(112758),
    B = n(754459),
    H = n(809115),
    F = n(888675),
    X = n(381941),
    q = n(652215),
    V = n(705751),
    K = n(200700),
    W = n(985018),
    Y = n(609836);
function z(e, t) {
    let { popouts: n, selected: i, setPopout: l } = (0, B.A)(e.id, X.Fd),
        { usernameProfile: s, avatarProfile: a } = n,
        o = (0, w.r4)(e.author.id, t.id),
        c = (0, w.UY)(e.author.id, t.id, e.id),
        u = (0, w.m)(e, t, s, l);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, w.Jo)(a, l),
        onPopoutRequestClose: r.useCallback(
            () => l({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [l],
        ),
        renderPopout: G.A,
        showAvatarPopout: a,
        showUsernamePopout: s,
    };
}
function J(e, t, n) {
    return r.useMemo(() => {
        if (null != t && null != n)
            return (r) => (0, i.jsx)(M.A, { ...r, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function Q(e) {
    let { children: t, className: n, compact: r } = e;
    return (0, i.jsx)("div", { className: s()(Y.xQ, n, { [Y.oE]: r }), children: t });
}
function Z(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: s()(Y.A3, n), children: t });
}
function $(e) {
    switch (e) {
        case f.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(E.u, { size: "xs", color: "currentColor", className: Y.yr });
        case f.G.SET_COMPLETED:
            return (0, i.jsx)(A.A, { size: "xs", color: "currentColor", className: s()(Y.yr, Y.r0) });
        case f.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(m.i, { size: "xs", color: "currentColor", className: Y.yr });
        default:
            return null;
    }
}
function ee(e) {
    let { alertAction: t, guildId: n } = e,
        r = (0, u.bG)([P.default], () => P.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == r) return $(e);
        let l = (function (e, t, n) {
            let i = U.Ay.getNickname(n, null, t) ?? y.Ay.getUserTag(t),
                r = o()(e.ts),
                l = `${i} ${r.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case f.G.DELETE_USER_MESSAGE:
                        return W.intl.formatToPlainString(W.t.BtKE9h, { userName: i, timestamp: r.fromNow() });
                    case f.G.SET_COMPLETED:
                        return W.intl.formatToPlainString(W.t.dyo9US, { userName: i, timestamp: r.fromNow() });
                    case f.G.SUBMIT_FEEDBACK:
                        return W.intl.formatToPlainString(W.t["C9/kIO"], { userName: i, timestamp: r.fromNow() });
                    default:
                        return l;
                }
            } catch (e) {
                return l;
            }
        })(t, r, n);
        return (0, i.jsx)(_.m, { text: l, children: $(e) });
    } catch (e) {
        return null;
    }
}
function et(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        r = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)("div", {
        className: Y.q_,
        children: r.map((e) => (0, i.jsx)(ee, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let en = r.memo(function (e) {
    let t,
        { message: n, channel: r, embedChannel: l, compact: s, interactionUserId: a } = e,
        o = z(n, r),
        c = J(r, n.author),
        u = (0, v.Ay)(n),
        d = (0, b.tO)({ message: n, channel: r, author: u, guildId: r?.guild_id, compact: s, ...o }, c),
        _ = P.default.getUser(a),
        E = z(n, r),
        A = J(r, _, P.default.getCurrentUser());
    if (null != _) {
        let e = (0, v.FT)(_, r),
            i = (0, b.tO)({ message: n, channel: r, author: e, guildId: r?.guild_id, compact: s, ...E }, A);
        t = () => i;
    }
    return (0, i.jsx)(I.E, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: Y.he,
        children: (0, R.fu)(
            n,
            l,
            () =>
                (0, i.jsx)("div", {
                    className: Y.aT,
                    children: (0, i.jsx)(j.A, { channel: l, className: Y.HA, openChatWithoutConnecting: !0 }),
                }),
            () => d,
            t,
        ),
    });
});
function ei(e) {
    let { id: t, compact: n, message: l, channel: a } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: _, onMouseLeave: E },
        } = (0, H.a)(!0),
        { onFocus: A, ...m } = (0, c.rm)(t ?? ""),
        { isFocused: M, handleFocus: P, handleBlur: U } = (0, w.G8)(A),
        y = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled),
        v = (0, u.bG)([D.A], () => D.A.can(q.xBc.MANAGE_MESSAGES, a), [a]),
        {
            ruleName: j,
            embedChannel: G,
            decisionId: B,
            keywordMatchedContent: X,
            keyword: J,
            content: $,
            flaggedMessageId: ee,
            timeoutDuration: ei,
            decisionReason: er,
            alertActionsExecution: el,
            quarantineType: es,
            interactionUserId: ea,
        } = (0, R.Ay)(l),
        eo = r.useMemo(() => (0, L.Tz)($, X, a.id), [$, X, a]),
        { selected: ec, ...eu } = z(l, a),
        ed = r.useCallback(() => {
            (0, h.w2)(l.id, $, B, a);
        }, [l.id, $, B, a]),
        e_ = r.useCallback(
            (e) => {
                null != ee &&
                    null != G &&
                    (e.stopPropagation(), e.preventDefault(), (0, O.A)(q.BVt.CHANNEL(G?.guild_id, G?.id, ee)));
            },
            [G, ee],
        ),
        eE = r.useCallback(
            (e) => {
                null != G &&
                    (g.default.selectChannel({ guildId: G.guild_id, channelId: e, messageId: l.id }), (0, x.iN)(e));
            },
            [l, G],
        ),
        eA = r.useCallback(() => {
            (0, S.E5)(l.id, a, f.G.DELETE_USER_MESSAGE);
        }, [a, l.id]),
        em = (0, K.getFriendlyDurationString)(Number(ei)),
        eI = null != er,
        eT = v && null != ee && (null == el || !el.actions.hasOwnProperty(f.G.DELETE_USER_MESSAGE)),
        eN = l.embeds.length > 0 ? l.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        eg = null != eN;
    return (0, i.jsx)("div", {
        onMouseEnter: _,
        onMouseLeave: E,
        children: (0, i.jsx)(F.A, {
            className: s()(Y.rs, { [Y.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(H.l, { src: o }),
            iconContainerClassName: Y.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(Y.Qs, { [Y.oE]: n }),
                children: [
                    (0, i.jsx)(b.ix, {
                        message: l,
                        messageClassname: Y.he,
                        className: s()(Y.QV, Y.he, { [Y.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: Y.he,
                            children: [
                                (0, i.jsx)(I.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: Y.Xh,
                                    children: W.intl.string(W.t.hG1StD),
                                }),
                                (0, i.jsx)(C.A, { type: V.nu.SYSTEM_DM, className: Y.Al }),
                                (0, i.jsx)(en, {
                                    message: l,
                                    channel: a,
                                    embedChannel: G,
                                    compact: n,
                                    interactionUserId: ea,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: s()(Y.BK, { [Y.oE]: n }),
                        children: (0, i.jsx)(k.A, {
                            ...m,
                            message: l,
                            channel: G,
                            content: eo,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: s()(Y.gD, {
                                [Y.oE]: n,
                                [Y.wH]: ec || (y && M),
                                [Y.JD]: null != ee && null != G,
                            }),
                            childrenAccessories: (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: Y.Y4,
                                        children: [
                                            null != J &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(I.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: W.intl.format(W.t.SYIUTR, { keyword: J }),
                                                        }),
                                                        (0, i.jsx)("div", { className: s()(Y.Om, Y.Gx) }),
                                                    ],
                                                }),
                                            null != j &&
                                                (0, i.jsx)(I.E, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: W.intl.format(W.t.ZoOyKB, { ruleName: j }),
                                                }),
                                            null != em &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: s()(Y.Om, Y.Gx) }),
                                                        (0, i.jsx)(I.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: Y.__invalid_footerText,
                                                            children: W.intl.format(W.t["3LYql6"], { duration: em }),
                                                        }),
                                                    ],
                                                }),
                                            null != es &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: s()(Y.Om, Y.Gx) }),
                                                        (0, i.jsx)(I.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: Y.nx,
                                                            children: W.intl.format(W.t["26bB2M"], {
                                                                reason: (0, R.o2)(es),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    eI
                                        ? (0, i.jsx)(Z, {
                                              children: (0, i.jsx)(I.E, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  children: er,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            popoutProps: eu,
                            zalgo: !0,
                            onFocus: P,
                            onBlur: U,
                            onClick: e_,
                        }),
                    }),
                    (0, i.jsx)(Q, {
                        compact: n,
                        children: (0, i.jsxs)("div", {
                            className: s()(Y.Y4, Y.UD, { [Y.oE]: n }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: Y.AX,
                                    children: [
                                        (0, i.jsx)(T.l, {
                                            size: "xs",
                                            color: d.A.unsafe_rawColors.BRAND_500.css,
                                            className: Y.Dq,
                                        }),
                                        (0, i.jsx)(N.Q, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: W.intl.string(W.t.DEoVWZ),
                                            onClick: (e) => {
                                                eu.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                eg
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: Y.Om }),
                                              (0, i.jsx)("div", {
                                                  className: Y.AX,
                                                  children: (0, i.jsx)(N.Q, {
                                                      onClick: () => eE(eN),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: W.intl.string(W.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)("div", { className: Y.Om }),
                                (0, i.jsx)("div", {
                                    className: Y.AX,
                                    children: (0, i.jsx)(N.Q, {
                                        onClick: ed,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: W.intl.string(W.t["94JbM3"]),
                                    }),
                                }),
                                eT
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: Y.Om }),
                                              (0, i.jsx)("div", {
                                                  className: Y.AX,
                                                  children: (0, i.jsx)(N.Q, {
                                                      onClick: eA,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: W.intl.string(W.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != el ? (0, i.jsx)(et, { alertActionsExecution: el, guildId: a.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
