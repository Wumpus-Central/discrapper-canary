n.d(t, { Z: () => K });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(320285),
    u = n(688813),
    d = n(442837),
    f = n(692547),
    p = n(481060),
    _ = n(385499),
    m = n(528011),
    h = n(533244),
    g = n(825829),
    E = n(226192),
    b = n(36459),
    y = n(434404),
    O = n(369664),
    v = n(518950),
    S = n(670188),
    I = n(592125),
    T = n(271383),
    C = n(594174),
    A = n(464891),
    N = n(348238),
    P = n(83561),
    R = n(834129),
    w = n(981631),
    D = n(674563),
    x = n(388032),
    L = n(138851);
function j(e, t, n) {
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
function M(e) {
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
                j(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
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
function U(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function G() {
    return (0, r.jsx)("div", { className: L.dot });
}
function Z(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, g.FL)(t);
    switch (i) {
        case g.nj:
        case c.p.RAID:
            return (0, r.jsx)(H, {
                message: t,
                compact: n,
            });
        case c.p.MENTION_RAID:
            return (0, r.jsx)(Y, {
                message: t,
                compact: n,
            });
        case c.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(V, {
                message: t,
                compact: n,
            });
        case c.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(B, { compact: n });
        default:
            return (0, r.jsx)(F, { compact: n });
    }
}
function F(e) {
    let { compact: t } = e;
    return (0, r.jsx)(W, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: f.Z.colors.TEXT_DEFAULT.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: x.intl.string(x.t.VdZCcC),
                }),
            ],
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: x.intl.string(x.t["NxHYX/"]),
        }),
    });
}
function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(W, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: f.Z.colors.TEXT_DEFAULT.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: x.intl.string(x.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: x.intl.string(x.t.Dc9wCp),
        }),
    });
}
function V(e) {
    var t;
    let { message: n, compact: a } = e,
        o = C.default.getUser((0, g.Sw)(n)),
        s = null == (t = I.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != s && null != o ? T.ZP.getMember(s, o.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: _,
        } = (0, v.Z)({
            userId: null == o ? void 0 : o.id,
            guildId: s,
            size: 12,
        }),
        m = i.useRef(null);
    return (0, r.jsx)(W, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.bgT, {
                    size: "xs",
                    color: f.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: x.intl.string(x.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: L.dotSeparatedRow,
            children: [
                (0, r.jsx)("div", {
                    className: L.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != o &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: x.intl.string(x.t.qlFrXW),
                                }),
                                (0, r.jsx)(S.Z, {
                                    targetElementRef: m,
                                    user: o,
                                    guildId: s,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            p.P3F,
                                            U(
                                                M(
                                                    {
                                                        innerRef: m,
                                                        className: L.alertsEnabledSubHeaderAvatarUsername,
                                                    },
                                                    e,
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            "div",
                                                            U(M({}, _), {
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
                                                                        : f.Z.colors.TEXT_DEFAULT.css,
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
                (0, r.jsx)(G, {}),
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
            children: x.intl.string(x.t["QV/8u5"]),
        }),
    });
}
function H(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: o, raidDatetime: s, dmsSent: c, raidType: _, resolvedReason: b } = (0, g.FL)(n),
        y = (0, d.e7)([I.Z], () => I.Z.getChannel(n.channel_id), [n.channel_id]),
        O = null != (t = null == y ? void 0 : y.guild_id) ? t : null,
        { shouldShowIncidentActions: v } = (0, m.mI)(O),
        S = (0, N.sR)(n.author.id, n.channel_id),
        T = (e) => {
            S(e);
        },
        C = i.useCallback(() => {
            let e = null == y ? void 0 : y.guild_id;
            null != e && (0, E.kW)(n.id, e);
        }, [n.id, y]),
        A = _ === u.$.DM_RAID,
        P = A ? p.Mgn : p.b6m;
    return (0, r.jsx)(W, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(P, {
                    size: "xs",
                    color: f.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: A ? x.intl.string(x.t["8+lHUb"]) : x.intl.string(x.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: L.dotSeparatedRow,
            children: [
                null != o &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: x.intl.format(x.t["4ylIiu"], { joinCount: o }),
                    }),
                null != c &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: x.intl.format(x.t["5C8Mh3"], { dmsSent: c }),
                    }),
                null != s &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(G, {}),
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
                      children: x.intl.format(x.t["4QIIZl"], {
                          dateTime: s.toLocaleString(x.intl.currentLocale, h.pQ),
                      }),
                  })
                : null,
        footerButtons: v
            ? (0, r.jsxs)("div", {
                  className: L.footerRow,
                  children: [
                      (0, r.jsxs)("div", {
                          className: L.footerAction,
                          children: [
                              (0, r.jsx)(p.b7C, {
                                  size: "xs",
                                  color: f.Z.unsafe_rawColors.BRAND_500.css,
                                  className: L.footerIcon,
                              }),
                              (0, r.jsx)(p.Avr, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: x.intl.string(x.t.DEoVWZ),
                                  onClick: T,
                              }),
                          ],
                      }),
                      (0, r.jsx)(G, {}),
                      (0, r.jsx)("div", {
                          className: L.footerAction,
                          children: (0, r.jsx)(p.Avr, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, g.ge)(b),
                              onClick: C,
                          }),
                      }),
                  ],
              })
            : null,
    });
}
function Y(e) {
    var t;
    let { message: n, compact: a } = e,
        o = null == (t = I.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: s, decisionId: c, suspiciousMentionActivityUntil: u } = (0, g.FL)(n);
    function d() {
        null != o &&
            null != c &&
            (0, b.UE)(o, c, () => {
                (0, O.c)(u), (0, b.T9)(o);
            });
    }
    function _() {
        null != o && y.Z.open(o, w.pNK.GUILD_AUTOMOD, void 0, w.KsC.AUTOMOD_MENTION_SPAM);
    }
    return (0, r.jsx)(W, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Mgn, {
                    size: "xs",
                    color: f.Z.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: x.intl.string(x.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, r.jsx)("div", {
            className: L.dotSeparatedRow,
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
            children: x.intl.string(x.t.SWIWEV),
        }),
        footerButtons: (0, r.jsxs)("div", {
            className: L.footerRow,
            children: [
                (0, r.jsx)("div", {
                    className: L.footerAction,
                    children: (0, r.jsx)(p.Avr, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: x.intl.string(x.t.oX14El),
                        onClick: d,
                    }),
                }),
                (0, r.jsx)(G, {}),
                (0, r.jsx)("div", {
                    className: L.footerAction,
                    children: (0, r.jsx)(p.Avr, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: x.intl.string(x.t["1R7QIx"]),
                        onClick: _,
                    }),
                }),
            ],
        }),
    });
}
function W(e) {
    let { compact: t, header: n, subheader: i, content: a, footerButtons: s } = e;
    return (0, r.jsxs)("div", {
        className: o()(L.embedCard, { [L.compact]: t }),
        children: [
            (0, r.jsxs)("div", {
                className: L.cardContent,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.cardHeaderContianer,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.cardHeader,
                                children: n,
                            }),
                            null != i &&
                                (0, r.jsx)("div", {
                                    className: L.subheader,
                                    children: i,
                                }),
                        ],
                    }),
                    a,
                ],
            }),
            null != s &&
                (0, r.jsx)("div", {
                    className: o()(L.centeredRowContainer, L.cardFooter, { [L.compact]: t }),
                    children: s,
                }),
        ],
    });
}
function K(e) {
    let { id: t, compact: n, message: i, channel: a } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: l, onMouseLeave: u },
        } = (0, P.m)(!0),
        { notificationType: d } = (0, g.FL)(i),
        f = null == d || d === c.p.RAID;
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        onMouseLeave: u,
        children: (0, r.jsx)(R.Z, {
            className: o()(L.mainContainer, { [L.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(P.S, { src: s }),
            iconContainerClassName: L.iconContainer,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: o()(L.content, { [L.compact]: n }),
                children: [
                    (0, r.jsx)(A.nD, {
                        message: i,
                        messageClassname: L.spanCorrection,
                        className: o()(L.usernameContainer, L.spanCorrection, { [L.compact]: n }),
                        username: (0, r.jsxs)("div", {
                            className: L.spanCorrection,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: L.username,
                                    children: x.intl.string(x.t.hG1StD),
                                }),
                                (0, r.jsx)(_.Z, {
                                    type: D.Hb.SYSTEM_DM,
                                    className: L.systemTag,
                                }),
                                f &&
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: L.spanCorrection,
                                        children: x.intl.string(x.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", { className: L.flexLineBreak }),
                    (0, r.jsx)(Z, {
                        message: i,
                        compact: n,
                    }),
                ],
            }),
        }),
    });
}
