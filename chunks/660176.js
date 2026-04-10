"use strict";
n.d(t, { A: () => V });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(989349),
    c = n.n(a),
    o = n(718564),
    u = n(348963),
    d = n(311907),
    _ = n(827734),
    E = n(397927),
    A = n(709066),
    m = n(585510),
    I = n(903093),
    T = n(785823),
    g = n(449585),
    N = n(137207),
    f = n(997509),
    p = n(916768),
    C = n(854627),
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
function j() {
    return (0, i.jsx)("div", { className: y.Om });
}
function k(e) {
    let { message: t, compact: n } = e,
        { notificationType: r } = (0, T.Bk)(t);
    switch (r) {
        case T.ZA:
        case o.W.RAID:
            return (0, i.jsx)(F, { message: t, compact: n });
        case o.W.MENTION_RAID:
            return (0, i.jsx)(w, { message: t, compact: n });
        case o.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(H, { message: t, compact: n });
        case o.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(G, { compact: n });
        default:
            return (0, i.jsx)(b, { compact: n });
    }
}
function b(e) {
    let { compact: t } = e;
    return (0, i.jsx)(B, {
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
    return (0, i.jsx)(B, {
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
function H(e) {
    let { message: t, compact: n } = e,
        s = x.default.getUser((0, T.ZD)(t)),
        l = S.A.getBasicChannel(t.channel_id)?.guild_id,
        a = null != l && null != s ? R.Ay.getMember(l, s.id) : null,
        { avatarSrc: o, avatarDecorationSrc: u, eventHandlers: d } = (0, C.A)({ userId: s?.id, guildId: l, size: 12 }),
        A = r.useRef(null);
    return (0, i.jsx)(B, {
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
                        null != a &&
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
                                    guildId: l,
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
                                                        src: o,
                                                        avatarDecoration: u,
                                                        size: E._3J.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, i.jsxs)(E.Text, {
                                                    variant: "text-xs/medium",
                                                    style: {
                                                        color:
                                                            null != a.colorString
                                                                ? a.colorString
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
                (0, i.jsx)(j, {}),
                (0, i.jsx)(E.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: c()(t.timestamp).fromNow(),
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
function F(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: s, raidDatetime: l, dmsSent: a, raidType: o, resolvedReason: A } = (0, T.Bk)(t),
        N = (0, d.bG)([S.A], () => S.A.getChannel(t.channel_id), [t.channel_id]),
        f = N?.guild_id ?? null,
        { shouldShowIncidentActions: p } = (0, m.Li)(f),
        C = (0, M.Am)(t.author.id, t.channel_id),
        h = r.useCallback(() => {
            let e = N?.guild_id;
            null != e && (0, g.is)(t.id, e);
        }, [t.id, N]),
        R = o === u.p.DM_RAID,
        x = R ? E.EpV : E.EF8;
    return (0, i.jsx)(B, {
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
                null != a &&
                    (0, i.jsx)(E.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: v.intl.format(v.t["5C8Mh3"], { dmsSent: a }),
                    }),
                null != l &&
                    (0, i.jsxs)(r.Fragment, {
                        children: [
                            (0, i.jsx)(j, {}),
                            (0, i.jsx)(E.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: c()(l).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != l
                ? (0, i.jsx)(E.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: v.intl.format(v.t["4QIIZl"], {
                          dateTime: l.toLocaleString(v.intl.currentLocale, I.yc),
                      }),
                  })
                : null,
        footerButtons: p
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
                                      C(e);
                                  },
                              }),
                          ],
                      }),
                      (0, i.jsx)(j, {}),
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
function w(e) {
    let { message: t, compact: n } = e,
        s = S.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: l, decisionId: a, suspiciousMentionActivityUntil: o } = (0, T.Bk)(t);
    return (0, i.jsx)(B, {
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
                null != l &&
                (0, i.jsx)(E.Text, { variant: "text-xs/medium", color: "text-default", children: c()(l).fromNow() }),
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
                                null != a &&
                                (0, N.W5)(s, a, () => {
                                    (0, p.w)(o), (0, N.wu)(s);
                                });
                        },
                    }),
                }),
                (0, i.jsx)(j, {}),
                (0, i.jsx)("div", {
                    className: y.AX,
                    children: (0, i.jsx)(E.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: v.intl.string(v.t["1R7QIx"]),
                        onClick: function () {
                            null != s && f.A.open(s, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function B(e) {
    let { compact: t, header: n, subheader: r, content: s, footerButtons: a } = e;
    return (0, i.jsxs)("div", {
        className: l()(y.gD, { [y.oE]: t }),
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
            null != a && (0, i.jsx)("div", { className: l()(y.Y4, y.UX, { [y.oE]: t }), children: a }),
        ],
    });
}
function V(e) {
    let { id: t, compact: n, message: r, channel: s } = e,
        {
            avatarSrc: a,
            eventHandlers: { onMouseEnter: c, onMouseLeave: u },
        } = (0, D.a)(!0),
        { notificationType: d } = (0, T.Bk)(r),
        _ = null == d || d === o.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: c,
        onMouseLeave: u,
        children: (0, i.jsx)(U.A, {
            className: l()(y.rs, { [y.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(D.l, { src: a }),
            iconContainerClassName: y.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: l()(y.Qs, { [y.oE]: n }),
                children: [
                    (0, i.jsx)(O.ix, {
                        message: r,
                        messageClassname: y.he,
                        className: l()(y.QV, y.he, { [y.oE]: n }),
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
