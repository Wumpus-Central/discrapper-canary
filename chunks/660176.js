n.d(t, { A: () => V });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(989349),
    o = n.n(s),
    d = n(718564),
    c = n(348963),
    u = n(311907),
    m = n(827734),
    _ = n(397927),
    h = n(709066),
    p = n(585510),
    g = n(903093),
    A = n(785823),
    f = n(449585),
    x = n(137207),
    E = n(997509),
    C = n(916768),
    I = n(854627),
    T = n(342296),
    v = n(734057),
    N = n(696451),
    S = n(287809),
    b = n(643204),
    y = n(112758),
    j = n(809115),
    R = n(888675),
    L = n(652215),
    M = n(705751),
    O = n(985018),
    P = n(234054);
function D() {
    return (0, i.jsx)("div", { className: P.Om });
}
function k(e) {
    let { message: t, compact: n } = e,
        { notificationType: l } = (0, A.Bk)(t);
    switch (l) {
        case A.ZA:
        case d.W.RAID:
            return (0, i.jsx)(B, { message: t, compact: n });
        case d.W.MENTION_RAID:
            return (0, i.jsx)(F, { message: t, compact: n });
        case d.W.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(G, { message: t, compact: n });
        case d.W.INTERACTION_BLOCKED:
            return (0, i.jsx)(w, { compact: n });
        default:
            return (0, i.jsx)(U, { compact: n });
    }
}
function U(e) {
    let { compact: t } = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(_.EpV, { size: "xs", color: m.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: O.intl.string(O.t.VdZCcC),
                }),
            ],
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t["NxHYX/"]),
        }),
    });
}
function w(e) {
    let { compact: t } = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(_.EpV, { size: "xs", color: m.A.colors.TEXT_DEFAULT.css }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: O.intl.string(O.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t.Dc9wCp),
        }),
    });
}
function G(e) {
    let { message: t, compact: n } = e,
        a = S.default.getUser((0, A.ZD)(t)),
        r = v.A.getBasicChannel(t.channel_id)?.guild_id,
        s = null != r && null != a ? N.Ay.getMember(r, a.id) : null,
        { avatarSrc: d, avatarDecorationSrc: c, eventHandlers: u } = (0, I.A)({ userId: a?.id, guildId: r, size: 12 }),
        h = l.useRef(null);
    return (0, i.jsx)(H, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(_.Hnu, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_POSITIVE.css }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: O.intl.string(O.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: P.Ns,
            children: [
                (0, i.jsx)("div", {
                    className: P.gk,
                    children:
                        null != s &&
                        null != a &&
                        (0, i.jsxs)(l.Fragment, {
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: O.intl.string(O.t.qlFrXW),
                                }),
                                (0, i.jsx)(T.A, {
                                    targetElementRef: h,
                                    user: a,
                                    guildId: r,
                                    channelId: t.channel_id,
                                    messageId: t.id,
                                    children: (e) =>
                                        (0, i.jsxs)(_.DUT, {
                                            innerRef: h,
                                            className: P.rI,
                                            ...e,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    ...u,
                                                    children: (0, i.jsx)(_.euF, {
                                                        src: d,
                                                        avatarDecoration: c,
                                                        size: _._3J.SIZE_16,
                                                        "aria-label": "TODO",
                                                    }),
                                                }),
                                                (0, i.jsxs)(_.Text, {
                                                    variant: "text-xs/medium",
                                                    style: {
                                                        color:
                                                            null != s.colorString
                                                                ? s.colorString
                                                                : m.A.colors.TEXT_DEFAULT.css,
                                                    },
                                                    children: [" ", "@", a.username],
                                                }),
                                            ],
                                        }),
                                }),
                            ],
                        }),
                }),
                (0, i.jsx)(D, {}),
                (0, i.jsx)(_.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(t.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t["QV/8u5"]),
        }),
    });
}
function B(e) {
    let { message: t, compact: n } = e,
        { joinAttempts: a, raidDatetime: r, dmsSent: s, raidType: d, resolvedReason: h } = (0, A.Bk)(t),
        x = (0, u.bG)([v.A], () => v.A.getChannel(t.channel_id), [t.channel_id]),
        E = x?.guild_id ?? null,
        { shouldShowIncidentActions: C } = (0, p.Li)(E),
        I = (0, y.Am)(t.author.id, t.channel_id),
        T = l.useCallback(() => {
            let e = x?.guild_id;
            null != e && (0, f.is)(t.id, e);
        }, [t.id, x]),
        N = d === c.p.DM_RAID,
        S = N ? _.EpV : _.EF8;
    return (0, i.jsx)(H, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(S, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: N ? O.intl.string(O.t["8+lHUb"]) : O.intl.string(O.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, i.jsxs)("div", {
            className: P.Ns,
            children: [
                null != a &&
                    (0, i.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: O.intl.format(O.t["4ylIiu"], { joinCount: a }),
                    }),
                null != s &&
                    (0, i.jsx)(_.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: O.intl.format(O.t["5C8Mh3"], { dmsSent: s }),
                    }),
                null != r &&
                    (0, i.jsxs)(l.Fragment, {
                        children: [
                            (0, i.jsx)(D, {}),
                            (0, i.jsx)(_.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: o()(r).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != r
                ? (0, i.jsx)(_.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: O.intl.format(O.t["4QIIZl"], {
                          dateTime: r.toLocaleString(O.intl.currentLocale, g.yc),
                      }),
                  })
                : null,
        footerButtons: C
            ? (0, i.jsxs)("div", {
                  className: P.OZ,
                  children: [
                      (0, i.jsxs)("div", {
                          className: P.AX,
                          children: [
                              (0, i.jsx)(_.lmn, {
                                  size: "xs",
                                  color: m.A.unsafe_rawColors.BRAND_500.css,
                                  className: P.Dq,
                              }),
                              (0, i.jsx)(_.QWc, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: O.intl.string(O.t.DEoVWZ),
                                  onClick: (e) => {
                                      I(e);
                                  },
                              }),
                          ],
                      }),
                      (0, i.jsx)(D, {}),
                      (0, i.jsx)("div", {
                          className: P.AX,
                          children: (0, i.jsx)(_.QWc, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, A.Oj)(h),
                              onClick: T,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function F(e) {
    let { message: t, compact: n } = e,
        a = v.A.getBasicChannel(t.channel_id)?.guild_id,
        { raidDatetime: r, decisionId: s, suspiciousMentionActivityUntil: d } = (0, A.Bk)(t);
    return (0, i.jsx)(H, {
        compact: n,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(_.EpV, { size: "xs", color: m.A.colors.TEXT_FEEDBACK_CRITICAL.css }),
                (0, i.jsx)(_.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: O.intl.string(O.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, i.jsx)("div", {
            className: P.Ns,
            children:
                null != r &&
                (0, i.jsx)(_.Text, { variant: "text-xs/medium", color: "text-default", children: o()(r).fromNow() }),
        }),
        content: (0, i.jsx)(_.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: O.intl.string(O.t.SWIWEV),
        }),
        footerButtons: (0, i.jsxs)("div", {
            className: P.OZ,
            children: [
                (0, i.jsx)("div", {
                    className: P.AX,
                    children: (0, i.jsx)(_.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: O.intl.string(O.t.oX14El),
                        onClick: function () {
                            null != a &&
                                null != s &&
                                (0, x.W5)(a, s, () => {
                                    (0, C.w)(d), (0, x.wu)(a);
                                });
                        },
                    }),
                }),
                (0, i.jsx)(D, {}),
                (0, i.jsx)("div", {
                    className: P.AX,
                    children: (0, i.jsx)(_.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: O.intl.string(O.t["1R7QIx"]),
                        onClick: function () {
                            null != a && E.A.open(a, L.BEX.GUILD_AUTOMOD, void 0, L.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}
function H(e) {
    let { compact: t, header: n, subheader: l, content: a, footerButtons: s } = e;
    return (0, i.jsxs)("div", {
        className: r()(P.gD, { [P.oE]: t }),
        children: [
            (0, i.jsxs)("div", {
                className: P.Ux,
                children: [
                    (0, i.jsxs)("div", {
                        className: P.LN,
                        children: [
                            (0, i.jsx)("div", { className: P.MY, children: n }),
                            null != l && (0, i.jsx)("div", { className: P.m_, children: l }),
                        ],
                    }),
                    a,
                ],
            }),
            null != s && (0, i.jsx)("div", { className: r()(P.Y4, P.UX, { [P.oE]: t }), children: s }),
        ],
    });
}
function V(e) {
    let { id: t, compact: n, message: l, channel: a } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c },
        } = (0, j.a)(!0),
        { notificationType: u } = (0, A.Bk)(l),
        m = null == u || u === d.W.RAID;
    return (0, i.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, i.jsx)(R.A, {
            className: r()(P.rs, { [P.oE]: n }),
            iconNode: n ? null : (0, i.jsx)(j.l, { src: s }),
            iconContainerClassName: P.zc,
            compact: n,
            children: (0, i.jsxs)("div", {
                className: r()(P.Qs, { [P.oE]: n }),
                children: [
                    (0, i.jsx)(b.ix, {
                        message: l,
                        messageClassname: P.he,
                        className: r()(P.QV, P.he, { [P.oE]: n }),
                        username: (0, i.jsxs)("div", {
                            className: P.he,
                            children: [
                                (0, i.jsx)(_.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: P.Xh,
                                    children: O.intl.string(O.t.hG1StD),
                                }),
                                (0, i.jsx)(h.A, { type: M.nu.SYSTEM_DM, className: P.Al }),
                                m &&
                                    (0, i.jsx)(_.Text, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: P.he,
                                        children: O.intl.string(O.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, i.jsx)("div", { className: P.BZ }),
                    (0, i.jsx)(k, { message: l, compact: n }),
                ],
            }),
        }),
    });
}
