"use strict";
n.d(t, { A: () => Q });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(989349),
    o = n.n(a),
    c = n(718564),
    u = n(348963),
    d = n(311907),
    _ = n(827734),
    E = n(695366),
    A = n(834730),
    m = n(848847),
    I = n(939249),
    T = n(97808),
    N = n(778712),
    g = n(953822),
    p = n(231483),
    C = n(123292),
    f = n(709066),
    h = n(585510),
    R = n(903093),
    S = n(785823),
    O = n(449585),
    x = n(137207),
    M = n(997509),
    D = n(916768),
    P = n(854627),
    U = n(342296),
    y = n(734057),
    L = n(696451),
    v = n(287809),
    j = n(643204),
    k = n(112758),
    b = n(809115),
    G = n(888675),
    w = n(652215),
    B = n(705751),
    H = n(985018),
    F = n(393239);
function X() {
    return (0, i.jsx)("div", { className: F.Om });
}
function q(e) {
    let { message: t, compact: n } = e,
        { notificationType: r } = (0, S.Bk)(t);
    switch (r) {
        case S.ZA:
        case c.W.RAID:
            return (0, i.jsx)(Y, { message: t, compact: n });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(z, { message: t, compact: n });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(W, { message: t, compact: n });
        case c.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(K, { compact: n });
        default:
            return (0, i.jsx)(V, { compact: n });
    }
}
function V(e) {
    let { compact: t } = e;
    return (0, i.jsx)(J, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.E, { size: "xs", color: _.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(A.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: H.intl.string(H.t.VdZCcC),
                }),
            ],
        }),
        content: (0, i.jsx)(A.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(H.t["NxHYX/"]),
        }),
    });
}
function K(e) {
    let { compact: t } = e;
    return (0, i.jsx)(J, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.E, { size: "xs", color: _.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(A.E, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: H.intl.string(H.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, i.jsx)(A.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(H.t.Dc9wCp),
        }),
    });
}
function W(e) {
    let { message: t, compact: n } = e,
        l = v.default.getUser((0, S.ZD)(t)),
        s = y.A.getBasicChannel(t.channel_id)?.guild_id,
        a = null != s && null != l ? L.Ay.getMember(s, l.id) : null,
        { avatarSrc: c, avatarDecorationSrc: u, eventHandlers: d } = (0, P.A)({ userId: l?.id, guildId: s, size: 12 }),
        E = r.useRef(null);
    return (0, i.jsx)(J, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(m.H, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, i.jsx)(A.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: H.intl.string(H.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: F.Ns,
            children: [
                (0, i.jsx)("div", {
                    className: F.gk,
                    children:
                        null != a &&
                        null != l &&
                        (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: H.intl.string(H.t.qlFrXW),
                                }),
                                (0, i.jsx)(U.A, {
                                    targetElementRef: E,
                                    user: l,
                                    guildId: s,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, i.jsxs)(I.D, {
                                            innerRef: E,
                                            className: F.rI,
                                            ...e,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    ...d,
                                                    children: (0, i.jsx)(T.eu, {
                                                        src: c,
                                                        avatarDecoration: u,
                                                        size: N._3.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, i.jsxs)(A.E, {
                                                    variant: "text-xs/medium",
                                                    style: {
                                                        color:
                                                            null != a.colorString
                                                                ? a.colorString
                                                                : _.A.colors.TEXT_DEFAULT.css,
                                                    },
                                                    children: [" ", "@", l.username],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                }),
                (0, i.jsx)(X, {}),
                (0, i.jsx)(A.E, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, i.jsx)(A.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(H.t["QV/8u5"]),
        }),
    });
}
function Y(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: l, raidDatetime: s, dmsSent: a, raidType: c, resolvedReason: m } = (0, S.Bk)(t),
        I = (0, d.bG)([y.A], () => y.A.getChannel(t.channel_id), [t.channel_id]),
        T = I?.guild_id ?? null,
        { shouldShowIncidentActions: N } = (0, h.Li)(T),
        f = (0, k.Am)(t.author.id, t.channel_id),
        x = r.useCallback(() => {
            let e = I?.guild_id;
            null != e && (0, O.is)(t.id, e);
        }, [t.id, I]),
        M = c === u.p.DM_RAID,
        D = M ? E.E : g.E;
    return (0, i.jsx)(J, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(D, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(A.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: M ? H.intl.string(H.t["8+lHUb"]) : H.intl.string(H.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: F.Ns,
            children: [
                null != l &&
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: H.intl.format(H.t["4ylIiu"], { joinCount: l }),
                    }),
                null != a &&
                    (0, i.jsx)(A.E, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: H.intl.format(H.t["5C8Mh3"], { dmsSent: a }),
                    }),
                null != s &&
                    (0, i.jsxs)(r.Fragment, {
                        children: [
                            (0, i.jsx)(X, {}),
                            (0, i.jsx)(A.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: o()(s).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != s
                ? (0, i.jsx)(A.E, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: H.intl.format(H.t["4QIIZl"], {
                          dateTime: s.toLocaleString(H.intl.currentLocale, R.yc),
                      }),
                  })
                : null,
        footerButtons: N
            ? (0, i.jsxs)("div", {
                  className: F.OZ,
                  children: [
                      (0, i.jsxs)("div", {
                          className: F.AX,
                          children: [
                              (0, i.jsx)(p.l, {
                                  size: "xs",
                                  color: _.A.unsafe_rawColors.BRAND_500.css,
                                  className: F.Dq,
                              }),
                              (0, i.jsx)(C.Q, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: H.intl.string(H.t.DEoVWZ),
                                  onClick: (e) => {
                                      f(e);
                                  },
                              }),
                          ],
                      }),
                      (0, i.jsx)(X, {}),
                      (0, i.jsx)("div", {
                          className: F.AX,
                          children: (0, i.jsx)(C.Q, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, S.Oj)(m),
                              onClick: x,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function z(e) {
    let { message: t, compact: n } = e,
        l = y.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: s, decisionId: a, suspiciousMentionActivityUntil: c } = (0, S.Bk)(t);
    return (0, i.jsx)(J, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.E, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(A.E, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: H.intl.string(H.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, i.jsx)("div", {
            className: F.Ns,
            children:
                null != s &&
                (0, i.jsx)(A.E, { variant: "text-xs/medium", color: "text-default", children: o()(s).fromNow() }),
        }),
        content: (0, i.jsx)(A.E, {
            variant: "text-md/normal",
            color: "text-muted",
            children: H.intl.string(H.t.SWIWEV),
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: F.OZ,
            children: [
                (0, i.jsx)("div", {
                    className: F.AX,
                    children: (0, i.jsx)(C.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: H.intl.string(H.t.oX14El),
                        onClick: function () {
                            null != l &&
                                null != a &&
                                (0, x.W5)(l, a, () => {
                                    (0, D.w)(c), (0, x.wu)(l);
                                });
                        },
                    }),
                }),
                (0, i.jsx)(X, {}),
                (0, i.jsx)("div", {
                    className: F.AX,
                    children: (0, i.jsx)(C.Q, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: H.intl.string(H.t["1R7QIx"]),
                        onClick: function () {
                            null != l && M.A.open(l, w.BEX.GUILD_AUTOMOD, void 0, w.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function J(e) {
    let { compact: t, header: n, subheader: r, content: l, footerButtons: a } = e;
    return (0, i.jsxs)("div", {
        className: s()(F.gD, { [F.oE]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, i.jsxs)("div", {
                        className: F.LN,
                        children: [
                            (0, i.jsx)("div", { className: F.MY, children: n }),
                            null != r && (0, i.jsx)("div", { className: F.m_, children: r }),
                        ],
                    }),
                    l,
                ],
            }),
            null != a && (0, i.jsx)("div", { className: s()(F.Y4, F.UX, { [F.oE]: t }), children: a }),
        ],
    });
}
function Q(e) {
    let { id: t, compact: n, message: r, channel: l } = e,
        {
            avatarSrc: a,
            eventHandlers: { onMouseEnter: o, onMouseLeave: u },
        } = (0, b.a)(!0),
        { notificationType: d } = (0, S.Bk)(r),
        _ = null == d || d === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: u,
        children: (0, i.jsx)(G.A, {
            className: s()(F.rs, { [F.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(b.l, { src: a }),
            iconContainerClassName: F.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: s()(F.Qs, { [F.oE]: n }),
                children: [
                    (0, i.jsx)(j.ix, {
                        message: r,
                        messageClassname: F.he,
                        className: s()(F.QV, F.he, { [F.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: F.he,
                            children: [
                                (0, i.jsx)(A.E, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: F.Xh,
                                    children: H.intl.string(H.t.hG1StD),
                                }),
                                (0, i.jsx)(f.A, { type: B.nu.SYSTEM_DM, className: F.Al }),
                                _ &&
                                    (0, i.jsx)(A.E, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: F.he,
                                        children: H.intl.string(H.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", { className: F.BZ }),
                    (0, i.jsx)(q, { message: r, compact: n }),
                ],
            }),
        }),
    });
}
