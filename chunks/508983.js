"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(989349),
    o = n.n(l),
    c = n(837381),
    u = n(311907),
    d = n(827734),
    _ = n(990078),
    E = n(397927),
    A = n(956793),
    m = n(775602),
    I = n(709066),
    T = n(845625),
    N = n(785823),
    g = n(449585),
    p = n(137207),
    C = n(22007),
    f = n(378570),
    h = n(589022),
    S = n(576705),
    R = n(287809),
    x = n(562153),
    O = n(427262),
    M = n(465364),
    D = n(763754),
    U = n(901057),
    P = n(936044),
    L = n(643204),
    v = n(535421),
    y = n(112758),
    b = n(754459),
    k = n(809115),
    j = n(888675),
    G = n(381941),
    F = n(652215),
    H = n(705751),
    B = n(200700),
    w = n(985018),
    V = n(609836);
function X(e, t) {
    let { popouts: n, selected: i, setPopout: s } = (0, b.A)(e.id, G.Fd),
        { usernameProfile: a, avatarProfile: l } = n,
        o = (0, y.r4)(e.author.id, t.id),
        c = (0, y.UY)(e.author.id, t.id, e.id),
        u = (0, y.m)(e, t, a, s);
    return {
        selected: i,
        onContextMenu: o,
        onContextMenuModerateUser: c,
        onClickUsername: u,
        onClickAvatar: (0, y.Jo)(l, s),
        onPopoutRequestClose: r.useCallback(
            () => s({ usernameProfile: !1, avatarProfile: !1, referencedUsernameProfile: !1 }),
            [s],
        ),
        renderPopout: v.A,
        showAvatarPopout: l,
        showUsernamePopout: a,
    };
}
function q(e, t, n) {
    return r.useMemo(() => {
        if (null != t && null != n)
            return (r) => (0, i.jsx)(h.A, { ...r, user: t, currentUser: n, guildId: e.guild_id, channelId: e.id });
    }, [e, t, n]);
}
function K(e) {
    let { children: t, className: n, compact: r } = e;
    return (0, i.jsx)("div", { className: a()(V.xQ, n, { [V.oE]: r }), children: t });
}
function Y(e) {
    let { children: t, className: n } = e;
    return (0, i.jsx)("div", { className: a()(V.A3, n), children: t });
}
function W(e) {
    switch (e) {
        case T.G.DELETE_USER_MESSAGE:
            return (0, i.jsx)(E.ucK, { size: "xs", color: "currentColor", className: V.yr });
        case T.G.SET_COMPLETED:
            return (0, i.jsx)(E.A9s, { size: "xs", color: "currentColor", className: a()(V.yr, V.r0) });
        case T.G.SUBMIT_FEEDBACK:
            return (0, i.jsx)(E.iFK, { size: "xs", color: "currentColor", className: V.yr });
        default:
            return null;
    }
}
function J(e) {
    let { alertAction: t, guildId: n } = e,
        r = (0, u.bG)([R.default], () => R.default.getUser(t.actor), [t.actor]);
    try {
        let e = parseInt(t.actionType);
        if (null == r) return W(e);
        let s = (function (e, t, n) {
            let i = x.Ay.getNickname(n, null, t) ?? O.Ay.getUserTag(t),
                r = o()(e.ts),
                s = `${i} ${r.fromNow()}`;
            try {
                switch (parseInt(e.actionType)) {
                    case T.G.DELETE_USER_MESSAGE:
                        return w.intl.formatToPlainString(w.t.BtKE9h, { userName: i, timestamp: r.fromNow() });
                    case T.G.SET_COMPLETED:
                        return w.intl.formatToPlainString(w.t.dyo9US, { userName: i, timestamp: r.fromNow() });
                    case T.G.SUBMIT_FEEDBACK:
                        return w.intl.formatToPlainString(w.t["C9/kIO"], { userName: i, timestamp: r.fromNow() });
                    default:
                        return s;
                }
            } catch (e) {
                return s;
            }
        })(t, r, n);
        return (0, i.jsx)(_.m, { text: s, children: W(e) });
    } catch (e) {
        return null;
    }
}
function z(e) {
    let { alertActionsExecution: t, guildId: n } = e,
        r = Object.values(t.actions).sort((e, t) => (e.actionType < t.actionType ? 1 : -1));
    return (0, i.jsx)("div", {
        className: V.q_,
        children: r.map((e) => (0, i.jsx)(J, { alertAction: e, guildId: n }, e.actionType)),
    });
}
let Q = r.memo(function (e) {
    let t,
        { message: n, channel: r, embedChannel: s, compact: a, interactionUserId: l } = e,
        o = X(n, r),
        c = q(r, n.author),
        u = (0, D.Ay)(n),
        d = (0, L.tO)({ message: n, channel: r, author: u, guildId: r?.guild_id, compact: a, ...o }, c),
        _ = R.default.getUser(l),
        A = X(n, r),
        m = q(r, _, R.default.getCurrentUser());
    if (null != _) {
        let e = (0, D.FT)(_, r),
            i = (0, L.tO)({ message: n, channel: r, author: e, guildId: r?.guild_id, compact: a, ...A }, m);
        t = () => i;
    }
    return (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        tag: "span",
        className: V.he,
        children: (0, N.fu)(
            n,
            s,
            () =>
                (0, i.jsx)("div", {
                    className: V.aT,
                    children: (0, i.jsx)(U.A, { channel: s, className: V.HA, openChatWithoutConnecting: !0 }),
                }),
            () => d,
            t,
        ),
    });
});
function Z(e) {
    let { id: t, compact: n, message: s, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: _, onMouseLeave: h },
        } = (0, k.a)(!0),
        { onFocus: R, ...x } = (0, c.rm)(t ?? ""),
        { isFocused: O, handleFocus: D, handleBlur: U } = (0, y.G8)(R),
        v = (0, u.bG)([m.A], () => m.A.keyboardModeEnabled),
        b = (0, u.bG)([S.A], () => S.A.can(F.xBc.MANAGE_MESSAGES, l), [l]),
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
            quarantineType: er,
            interactionUserId: es,
        } = (0, N.Ay)(s),
        ea = r.useMemo(() => (0, M.Tz)($, J, l.id), [$, J, l]),
        { selected: el, ...eo } = X(s, l),
        ec = r.useCallback(() => {
            (0, g.w2)(s.id, $, W, l);
        }, [s.id, $, W, l]),
        eu = r.useCallback(
            (e) => {
                null != ee &&
                    null != q &&
                    (e.stopPropagation(), e.preventDefault(), (0, C.A)(F.BVt.CHANNEL(q?.guild_id, q?.id, ee)));
            },
            [q, ee],
        ),
        ed = r.useCallback(
            (e) => {
                null != q &&
                    (A.default.selectChannel({ guildId: q.guild_id, channelId: e, messageId: s.id }), (0, f.iN)(e));
            },
            [s, q],
        ),
        e_ = r.useCallback(() => {
            (0, p.E5)(s.id, l, T.G.DELETE_USER_MESSAGE);
        }, [l, s.id]),
        eE = (0, B.getFriendlyDurationString)(Number(et)),
        eA = null != en,
        em = b && null != ee && (null == ei || !ei.actions.hasOwnProperty(T.G.DELETE_USER_MESSAGE)),
        eI = s.embeds.length > 0 ? s.embeds[0].fields.find((e) => "channel_id" === e.rawName)?.rawValue : null,
        eT = null != eI;
    return (0, i.jsx)("div", {
        onMouseEnter: _,
        onMouseLeave: h,
        children: (0, i.jsx)(j.A, {
            className: a()(V.rs, { [V.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(k.l, { src: o }),
            iconContainerClassName: V.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(V.Qs, { [V.oE]: n }),
                children: [
                    (0, i.jsx)(L.ix, {
                        message: s,
                        messageClassname: V.he,
                        className: a()(V.QV, V.he, { [V.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: V.he,
                            children: [
                                (0, i.jsx)(E.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: V.Xh,
                                    children: w.intl.string(w.t.hG1StD),
                                }),
                                (0, i.jsx)(I.A, { type: H.nu.SYSTEM_DM, className: V.Al }),
                                (0, i.jsx)(Q, {
                                    message: s,
                                    channel: l,
                                    embedChannel: q,
                                    compact: n,
                                    interactionUserId: es,
                                }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", {
                        className: a()(V.BK, { [V.oE]: n }),
                        children: (0, i.jsx)(P.A, {
                            ...x,
                            message: s,
                            channel: q,
                            content: ea,
                            compact: n,
                            withFooter: !0,
                            hideTimestamp: !0,
                            className: a()(V.gD, {
                                [V.oE]: n,
                                [V.wH]: el || (v && O),
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
                                                        (0, i.jsx)(E.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            children: w.intl.format(w.t.SYIUTR, { keyword: Z }),
                                                        }),
                                                        (0, i.jsx)("div", { className: a()(V.Om, V.Gx) }),
                                                    ],
                                                }),
                                            null != G &&
                                                (0, i.jsx)(E.Text, {
                                                    variant: "text-xs/medium",
                                                    color: "text-muted",
                                                    tag: "span",
                                                    children: w.intl.format(w.t.ZoOyKB, { ruleName: G }),
                                                }),
                                            null != eE &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: a()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(E.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.__invalid_footerText,
                                                            children: w.intl.format(w.t["3LYql6"], { duration: eE }),
                                                        }),
                                                    ],
                                                }),
                                            null != er &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)("div", { className: a()(V.Om, V.Gx) }),
                                                        (0, i.jsx)(E.Text, {
                                                            variant: "text-xs/medium",
                                                            color: "text-muted",
                                                            tag: "span",
                                                            className: V.nx,
                                                            children: w.intl.format(w.t["26bB2M"], {
                                                                reason: (0, N.o2)(er),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    eA
                                        ? (0, i.jsx)(Y, {
                                              children: (0, i.jsx)(E.Text, {
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
                            onBlur: U,
                            onClick: eu,
                        }),
                    }),
                    (0, i.jsx)(K, {
                        compact: n,
                        children: (0, i.jsxs)("div", {
                            className: a()(V.Y4, V.UD, { [V.oE]: n }),
                            children: [
                                (0, i.jsxs)("div", {
                                    className: V.AX,
                                    children: [
                                        (0, i.jsx)(E.lmn, {
                                            size: "xs",
                                            color: d.A.unsafe_rawColors.BRAND_500.css,
                                            className: V.Dq,
                                        }),
                                        (0, i.jsx)(E.QWc, {
                                            variant: "primary",
                                            size: "sm",
                                            textVariant: "text-xs/normal",
                                            text: w.intl.string(w.t.DEoVWZ),
                                            onClick: (e) => {
                                                eo.onContextMenuModerateUser?.(e);
                                            },
                                        }),
                                    ],
                                }),
                                eT
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(E.QWc, {
                                                      onClick: () => ed(eI),
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: w.intl.string(w.t.jtkj06),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                (0, i.jsx)("div", { className: V.Om }),
                                (0, i.jsx)("div", {
                                    className: V.AX,
                                    children: (0, i.jsx)(E.QWc, {
                                        onClick: ec,
                                        variant: "primary",
                                        size: "sm",
                                        textVariant: "text-xs/normal",
                                        text: w.intl.string(w.t["94JbM3"]),
                                    }),
                                }),
                                em
                                    ? (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)("div", { className: V.Om }),
                                              (0, i.jsx)("div", {
                                                  className: V.AX,
                                                  children: (0, i.jsx)(E.QWc, {
                                                      onClick: e_,
                                                      variant: "primary",
                                                      size: "sm",
                                                      textVariant: "text-xs/normal",
                                                      text: w.intl.string(w.t["3A52tY"]),
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != ei ? (0, i.jsx)(z, { alertActionsExecution: ei, guildId: l.guild_id }) : null,
                            ],
                        }),
                    }),
                ],
            }),
        }),
    });
}
