"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(989349),
    o = n.n(l),
    c = n(718564),
    u = n(348963),
    d = n(311907),
    _ = n(827734),
    E = n(397927),
    A = n(709066),
    m = n(585510),
    I = n(903093),
    T = n(785823),
    N = n(449585),
    g = n(137207),
    p = n(997509),
    C = n(916768),
    f = n(854627),
    h = n(342296),
    S = n(734057),
    R = n(696451),
    x = n(287809),
    O = n(643204),
    M = n(112758),
    D = n(809115),
    U = n(888675),
    P = n(652215),
    L = n(705751),
    v = n(985018),
    y = n(240775);
function b() {
    return (0, i.jsx)("div", { className: y.Om });
}
function k(e) {
    let { message: t, compact: n } = e,
        { notificationType: r } = (0, T.Bk)(t);
    switch (r) {
        case T.ZA:
        case c.W.RAID:
            return (0, i.jsx)(H, { message: t, compact: n });
        case c.W.MENTION_RAID:
            return (0, i.jsx)(B, { message: t, compact: n });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(F, { message: t, compact: n });
        case c.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(G, { compact: n });
        default:
            return (0, i.jsx)(j, { compact: n });
    }
}
function j(e) {
    let { compact: t } = e;
    return (0, i.jsx)(w, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.EpV, { size: "xs", color: _.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: v.intl.string(v.t.VdZCcC),
                }),
            ],
        }),
        content: (0, i.jsx)(E.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t["NxHYX/"]),
        }),
    });
}
function G(e) {
    let { compact: t } = e;
    return (0, i.jsx)(w, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.EpV, { size: "xs", color: _.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: v.intl.string(v.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, i.jsx)(E.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t.Dc9wCp),
        }),
    });
}
function F(e) {
    let { message: t, compact: n } = e,
        s = x.default.getUser((0, T.ZD)(t)),
        a = S.A.getBasicChannel(t.channel_id)?.guild_id,
        l = null != a && null != s ? R.Ay.getMember(a, s.id) : null,
        { avatarSrc: c, avatarDecorationSrc: u, eventHandlers: d } = (0, f.A)({ userId: s?.id, guildId: a, size: 12 }),
        A = r.useRef(null);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.Hnu, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, i.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: v.intl.string(v.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: y.Ns,
            children: [
                (0, i.jsx)("div", {
                    className: y.gk,
                    children:
                        null != l &&
                        null != s &&
                        (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(E.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: v.intl.string(v.t.qlFrXW),
                                }),
                                (0, i.jsx)(h.A, {
                                    targetElementRef: A,
                                    user: s,
                                    guildId: a,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, i.jsxs)(E.DUT, {
                                            innerRef: A,
                                            className: y.rI,
                                            ...e,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    ...d,
                                                    children: (0, i.jsx)(E.euF, {
                                                        src: c,
                                                        avatarDecoration: u,
                                                        size: E._3J.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, i.jsxs)(E.Text, {
                                                    variant: "text-xs/medium",
                                                    style: {
                                                        color:
                                                            null != l.colorString
                                                                ? l.colorString
                                                                : _.A.colors.TEXT_DEFAULT.css,
                                                    },
                                                    children: [" ", "@", s.username],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                }),
                (0, i.jsx)(b, {}),
                (0, i.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, i.jsx)(E.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t["QV/8u5"]),
        }),
    });
}
function H(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: s, raidDatetime: a, dmsSent: l, raidType: c, resolvedReason: A } = (0, T.Bk)(t),
        g = (0, d.bG)([S.A], () => S.A.getChannel(t.channel_id), [t.channel_id]),
        p = g?.guild_id ?? null,
        { shouldShowIncidentActions: C } = (0, m.Li)(p),
        f = (0, M.Am)(t.author.id, t.channel_id),
        h = r.useCallback(() => {
            let e = g?.guild_id;
            null != e && (0, N.is)(t.id, e);
        }, [t.id, g]),
        R = c === u.p.DM_RAID,
        x = R ? E.EpV : E.EF8;
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(x, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: R ? v.intl.string(v.t["8+lHUb"]) : v.intl.string(v.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: y.Ns,
            children: [
                null != s &&
                    (0, i.jsx)(E.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: v.intl.format(v.t["4ylIiu"], { joinCount: s }),
                    }),
                null != l &&
                    (0, i.jsx)(E.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: v.intl.format(v.t["5C8Mh3"], { dmsSent: l }),
                    }),
                null != a &&
                    (0, i.jsxs)(r.Fragment, {
                        children: [
                            (0, i.jsx)(b, {}),
                            (0, i.jsx)(E.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: o()(a).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != a
                ? (0, i.jsx)(E.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: v.intl.format(v.t["4QIIZl"], {
                          dateTime: a.toLocaleString(v.intl.currentLocale, I.yc),
                      }),
                  })
                : null,
        footerButtons: C
            ? (0, i.jsxs)("div", {
                  className: y.OZ,
                  children: [
                      (0, i.jsxs)("div", {
                          className: y.AX,
                          children: [
                              (0, i.jsx)(E.lmn, {
                                  size: "xs",
                                  color: _.A.unsafe_rawColors.BRAND_500.css,
                                  className: y.Dq,
                              }),
                              (0, i.jsx)(E.QWc, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: v.intl.string(v.t.DEoVWZ),
                                  onClick: (e) => {
                                      f(e);
                                  },
                              }),
                          ],
                      }),
                      (0, i.jsx)(b, {}),
                      (0, i.jsx)("div", {
                          className: y.AX,
                          children: (0, i.jsx)(E.QWc, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, T.Oj)(A),
                              onClick: h,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function B(e) {
    let { message: t, compact: n } = e,
        s = S.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: a, decisionId: l, suspiciousMentionActivityUntil: c } = (0, T.Bk)(t);
    return (0, i.jsx)(w, {
        compact: n,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(E.EpV, { size: "xs", color: _.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(E.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: v.intl.string(v.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, i.jsx)("div", {
            className: y.Ns,
            children:
                null != a &&
                (0, i.jsx)(E.Text, { variant: "text-xs/medium", color: "text-default", children: o()(a).fromNow() }),
        }),
        content: (0, i.jsx)(E.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: v.intl.string(v.t.SWIWEV),
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: y.OZ,
            children: [
                (0, i.jsx)("div", {
                    className: y.AX,
                    children: (0, i.jsx)(E.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: v.intl.string(v.t.oX14El),
                        onClick: function () {
                            null != s &&
                                null != l &&
                                (0, g.W5)(s, l, () => {
                                    (0, C.w)(c), (0, g.wu)(s);
                                });
                        },
                    }),
                }),
                (0, i.jsx)(b, {}),
                (0, i.jsx)("div", {
                    className: y.AX,
                    children: (0, i.jsx)(E.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: v.intl.string(v.t["1R7QIx"]),
                        onClick: function () {
                            null != s && p.A.open(s, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function w(e) {
    let { compact: t, header: n, subheader: r, content: s, footerButtons: l } = e;
    return (0, i.jsxs)("div", {
        className: a()(y.gD, { [y.oE]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: y.Ux,
                children: [
                    (0, i.jsxs)("div", {
                        className: y.LN,
                        children: [
                            (0, i.jsx)("div", { className: y.MY, children: n }),
                            null != r && (0, i.jsx)("div", { className: y.m_, children: r }),
                        ],
                    }),
                    s,
                ],
            }),
            null != l && (0, i.jsx)("div", { className: a()(y.Y4, y.UX, { [y.oE]: t }), children: l }),
        ],
    });
}
function V(e) {
    let { id: t, compact: n, message: r, channel: s } = e,
        {
            avatarSrc: l,
            eventHandlers: { onMouseEnter: o, onMouseLeave: u },
        } = (0, D.a)(!0),
        { notificationType: d } = (0, T.Bk)(r),
        _ = null == d || d === c.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: u,
        children: (0, i.jsx)(U.A, {
            className: a()(y.rs, { [y.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(D.l, { src: l }),
            iconContainerClassName: y.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: a()(y.Qs, { [y.oE]: n }),
                children: [
                    (0, i.jsx)(O.ix, {
                        message: r,
                        messageClassname: y.he,
                        className: a()(y.QV, y.he, { [y.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: y.he,
                            children: [
                                (0, i.jsx)(E.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: y.Xh,
                                    children: v.intl.string(v.t.hG1StD),
                                }),
                                (0, i.jsx)(A.A, { type: L.nu.SYSTEM_DM, className: y.Al }),
                                _ &&
                                    (0, i.jsx)(E.Text, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: y.he,
                                        children: v.intl.string(v.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", { className: y.BZ }),
                    (0, i.jsx)(k, { message: r, compact: n }),
                ],
            }),
        }),
    });
}
