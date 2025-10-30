n.d(t, { Z: () => z });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(722770),
    u = n(320285),
    d = n(688813),
    f = n(442837),
    _ = n(692547),
    p = n(481060),
    h = n(385499),
    m = n(528011),
    g = n(533244),
    E = n(825829),
    b = n(226192),
    y = n(36459),
    O = n(434404),
    v = n(369664),
    I = n(518950),
    T = n(670188),
    S = n(592125),
    A = n(271383),
    C = n(594174),
    N = n(464891),
    R = n(348238),
    P = n(83561),
    w = n(834129),
    D = n(981631),
    x = n(674563),
    L = n(388032),
    M = n(78642);
function k(e, t, n) {
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
function j(e) {
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
                k(e, t, n[t]);
            });
    }
    return e;
}
function U(e, t) {
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
function G(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : U(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function B() {
    return (0, r.jsx)("div", { className: M.dot });
}
function Z(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, E.FL)(t);
    switch (i) {
        case E.nj:
        case u.p.RAID:
            return (0, r.jsx)(Y, {
                message: t,
                compact: n,
            });
        case u.p.MENTION_RAID:
            return (0, r.jsx)(W, {
                message: t,
                compact: n,
            });
        case u.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(H, {
                message: t,
                compact: n,
            });
        case u.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(V, { compact: n });
        default:
            return (0, r.jsx)(F, { compact: n });
    }
}
function F(e) {
    let { compact: t } = e;
    return (0, r.jsx)(K, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: _.Z.colors.HEADER_SECONDARY.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "header-secondary",
                    children: L.intl.string(L.t.VdZCcC),
                }),
            ],
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t["NxHYX/"]),
        }),
    });
}
function V(e) {
    let { compact: t } = e;
    return (0, r.jsx)(K, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: _.Z.colors.HEADER_SECONDARY.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "header-secondary",
                    children: L.intl.string(L.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.Dc9wCp),
        }),
    });
}
function H(e) {
    var t;
    let { message: n, compact: a } = e,
        o = C.default.getUser((0, E.Sw)(n)),
        s = null == (t = S.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != s && null != o ? A.ZP.getMember(s, o.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: f,
        } = (0, I.Z)({
            userId: null == o ? void 0 : o.id,
            guildId: s,
            size: 12,
        }),
        h = i.useRef(null);
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.bgT, {
                    size: "xs",
                    color: _.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: L.intl.string(L.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: M.dotSeparatedRow,
            children: [
                (0, r.jsx)("div", {
                    className: M.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != o &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: L.intl.string(L.t.qlFrXW),
                                }),
                                (0, r.jsx)(T.Z, {
                                    targetElementRef: h,
                                    user: o,
                                    guildId: s,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            p.P3F,
                                            G(
                                                j(
                                                    {
                                                        innerRef: h,
                                                        className: M.alertsEnabledSubHeaderAvatarUsername,
                                                    },
                                                    e,
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            "div",
                                                            G(j({}, f), {
                                                                children: (0, r.jsx)(p.qEK, {
                                                                    src: u,
                                                                    avatarDecoration: d,
                                                                    size: p.EFr.SIZE_16,
                                                                    "aria-label": "TODO",
                                                                }),
                                                            }),
                                                        ),
                                                        (0, r.jsxs)(p.Text, {
                                                            variant: "text-xs/medium",
                                                            style: {
                                                                color:
                                                                    null != c.colorString
                                                                        ? c.colorString
                                                                        : _.Z.colors.TEXT_DEFAULT.css,
                                                            },
                                                            children: [" ", "@", o.username],
                                                        }),
                                                    ],
                                                },
                                            ),
                                        ),
                                }),
                            ],
                        }),
                }),
                (0, r.jsx)(B, {}),
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: l()(n.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t["QV/8u5"]),
        }),
    });
}
function Y(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: o, raidDatetime: s, dmsSent: u, raidType: h, resolvedReason: y } = (0, E.FL)(n),
        O = (0, f.e7)([S.Z], () => S.Z.getChannel(n.channel_id), [n.channel_id]),
        v = null != (t = null == O ? void 0 : O.guild_id) ? t : null,
        { shouldShowIncidentActions: I } = (0, m.mI)(v),
        T = (0, R.sR)(n.author.id, n.channel_id),
        A = (e) => {
            T(e);
        },
        C = i.useCallback(() => {
            let e = null == O ? void 0 : O.guild_id;
            null != e && (0, b.kW)(n.id, e);
        }, [n.id, O]),
        N = h === d.$.DM_RAID,
        P = N ? p.Mgn : p.b6m;
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(P, {
                    size: "xs",
                    color: _.Z.colors.TEXT_DANGER.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-danger",
                    children: N ? L.intl.string(L.t["8+lHUb"]) : L.intl.string(L.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: M.dotSeparatedRow,
            children: [
                null != o &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: L.intl.format(L.t["4ylIiu"], { joinCount: o }),
                    }),
                null != u &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: L.intl.format(L.t["5C8Mh3"], { dmsSent: u }),
                    }),
                null != s &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(B, {}),
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: l()(s).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != s
                ? (0, r.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: L.intl.format(L.t["4QIIZl"], {
                          dateTime: s.toLocaleString(L.intl.currentLocale, g.pQ),
                      }),
                  })
                : null,
        footerButtons: I
            ? (0, r.jsxs)("div", {
                  className: M.footerRow,
                  children: [
                      (0, r.jsxs)("div", {
                          className: M.footerAction,
                          children: [
                              (0, r.jsx)(p.b7C, {
                                  size: "xs",
                                  color: c.Z.BRAND,
                                  className: M.footerIcon,
                              }),
                              (0, r.jsx)(p.Avr, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: L.intl.string(L.t.DEoVWZ),
                                  onClick: A,
                              }),
                          ],
                      }),
                      (0, r.jsx)(B, {}),
                      (0, r.jsx)("div", {
                          className: M.footerAction,
                          children: (0, r.jsx)(p.Avr, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, E.ge)(y),
                              onClick: C,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function W(e) {
    var t;
    let { message: n, compact: a } = e,
        o = null == (t = S.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: s, decisionId: c, suspiciousMentionActivityUntil: u } = (0, E.FL)(n);
    function d() {
        null != o &&
            null != c &&
            (0, y.UE)(o, c, () => {
                (0, v.c)(u), (0, y.T9)(o);
            });
    }
    function f() {
        null != o && O.Z.open(o, D.pNK.GUILD_AUTOMOD, void 0, D.KsC.AUTOMOD_MENTION_SPAM);
    }
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: _.Z.colors.TEXT_DANGER.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-danger",
                    children: L.intl.string(L.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, r.jsx)("div", {
            className: M.dotSeparatedRow,
            children:
                null != s &&
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: l()(s).fromNow(),
                }),
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: L.intl.string(L.t.SWIWEV),
        }),
        footerButtons: (0, r.jsxs)("div", {
            className: M.footerRow,
            children: [
                (0, r.jsx)("div", {
                    className: M.footerAction,
                    children: (0, r.jsx)(p.Avr, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: L.intl.string(L.t.oX14El),
                        onClick: d,
                    }),
                }),
                (0, r.jsx)(B, {}),
                (0, r.jsx)("div", {
                    className: M.footerAction,
                    children: (0, r.jsx)(p.Avr, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: L.intl.string(L.t["1R7QIx"]),
                        onClick: f,
                    }),
                }),
            ],
        }),
    });
}
function K(e) {
    let { compact: t, header: n, subheader: i, content: a, footerButtons: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(M.embedCard, { [M.compact]: t }),
        children: [
            (0, r.jsxs)("div", {
                className: M.cardContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: M.cardHeaderContianer,
                        children: [
                            (0, r.jsx)("div", {
                                className: M.cardHeader,
                                children: n,
                            }),
                            null != i &&
                                (0, r.jsx)("div", {
                                    className: M.subheader,
                                    children: i,
                                }),
                        ],
                    }),
                    a,
                ],
            }),
            null != s &&
                (0, r.jsx)("div", {
                    className: o()(M.centeredRowContainer, M.cardFooter, { [M.compact]: t }),
                    children: s,
                }),
        ],
    });
}
function z(e) {
    let { id: t, compact: n, message: i, channel: a } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: l, onMouseLeave: c },
        } = (0, P.m)(!0),
        { notificationType: d } = (0, E.FL)(i),
        f = null == d || d === u.p.RAID;
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        onMouseLeave: c,
        children: (0, r.jsx)(w.Z, {
            className: o()(M.mainContainer, { [M.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(P.S, { src: s }),
            iconContainerClassName: M.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: o()(M.content, { [M.compact]: n }),
                children: [
                    (0, r.jsx)(N.nD, {
                        message: i,
                        messageClassname: M.spanCorrection,
                        className: o()(M.usernameContainer, M.spanCorrection, { [M.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: M.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: M.username,
                                    children: L.intl.string(L.t.hG1StD),
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: x.Hb.SYSTEM_DM,
                                    className: M.systemTag,
                                }),
                                f &&
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-md/normal",
                                        color: "header-primary",
                                        tag: "span",
                                        className: M.spanCorrection,
                                        children: L.intl.string(L.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", { className: M.flexLineBreak }),
                    (0, r.jsx)(Z, {
                        message: i,
                        compact: n,
                    }),
                ],
            }),
        }),
    });
}
