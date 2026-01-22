n.d(t, { A: () => z });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    c = n(718564),
    u = n(348963),
    d = n(311907),
    f = n(827734),
    p = n(397927),
    _ = n(709066),
    h = n(585510),
    m = n(903093),
    g = n(785823),
    E = n(449585),
    b = n(137207),
    y = n(997509),
    O = n(916768),
    A = n(854627),
    v = n(342296),
    S = n(734057),
    I = n(696451),
    T = n(287809),
    C = n(643204),
    N = n(112758),
    R = n(809115),
    w = n(888675),
    P = n(652215),
    D = n(705751),
    x = n(985018),
    L = n(234054);
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
    return (0, r.jsx)("div", { className: L.Om });
}
function V(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, g.Bk)(t);
    switch (i) {
        case g.ZA:
        case c.W.RAID:
            return (0, r.jsx)(Y, {
                message: t,
                compact: n,
            });
        case c.W.MENTION_RAID:
            return (0, r.jsx)(W, {
                message: t,
                compact: n,
            });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(H, {
                message: t,
                compact: n,
            });
        case c.W.INTERACTION_BLOCKED:
            return (0, r.jsx)(B, { compact: n });
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
                (0, r.jsx)(p.EpV, {
                    size: "xs",
                    color: f.A.colors.TEXT_DEFAULT.css,
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
    return (0, r.jsx)(K, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.EpV, {
                    size: "xs",
                    color: f.A.colors.TEXT_DEFAULT.css,
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
function H(e) {
    var t;
    let { message: n, compact: a } = e,
        s = T.default.getUser((0, g.ZD)(n)),
        o = null == (t = S.A.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != o && null != s ? I.Ay.getMember(o, s.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: _,
        } = (0, A.A)({
            userId: null == s ? void 0 : s.id,
            guildId: o,
            size: 12,
        }),
        h = i.useRef(null);
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.Hnu, {
                    size: "xs",
                    color: f.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: x.intl.string(x.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: L.Ns,
            children: [
                (0, r.jsx)("div", {
                    className: L.gk,
                    children:
                        null != c &&
                        null != s &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: x.intl.string(x.t.qlFrXW),
                                }),
                                (0, r.jsx)(v.A, {
                                    targetElementRef: h,
                                    user: s,
                                    guildId: o,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            p.DUT,
                                            U(
                                                M(
                                                    {
                                                        innerRef: h,
                                                        className: L.rI,
                                                    },
                                                    e,
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            "div",
                                                            U(M({}, _), {
                                                                children: (0, r.jsx)(p.euF, {
                                                                    src: u,
                                                                    avatarDecoration: d,
                                                                    size: p._3J.SIZE_16,
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
                                                                        : f.A.colors.TEXT_DEFAULT.css,
                                                            },
                                                            children: [" ", "@", s.username],
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
function Y(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: s, raidDatetime: o, dmsSent: c, raidType: _, resolvedReason: b } = (0, g.Bk)(n),
        y = (0, d.bG)([S.A], () => S.A.getChannel(n.channel_id), [n.channel_id]),
        O = null != (t = null == y ? void 0 : y.guild_id) ? t : null,
        { shouldShowIncidentActions: A } = (0, h.Li)(O),
        v = (0, N.Am)(n.author.id, n.channel_id),
        I = (e) => {
            v(e);
        },
        T = i.useCallback(() => {
            let e = null == y ? void 0 : y.guild_id;
            null != e && (0, E.is)(n.id, e);
        }, [n.id, y]),
        C = _ === u.p.DM_RAID,
        R = C ? p.EpV : p.EF8;
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(R, {
                    size: "xs",
                    color: f.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: C ? x.intl.string(x.t["8+lHUb"]) : x.intl.string(x.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: L.Ns,
            children: [
                null != s &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: x.intl.format(x.t["4ylIiu"], { joinCount: s }),
                    }),
                null != c &&
                    (0, r.jsx)(p.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: x.intl.format(x.t["5C8Mh3"], { dmsSent: c }),
                    }),
                null != o &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(G, {}),
                            (0, r.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                children: l()(o).fromNow(),
                            }),
                        ],
                    }),
            ],
        }),
        content:
            null != o
                ? (0, r.jsx)(p.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: x.intl.format(x.t["4QIIZl"], {
                          dateTime: o.toLocaleString(x.intl.currentLocale, m.yc),
                      }),
                  })
                : null,
        footerButtons: A
            ? (0, r.jsxs)("div", {
                  className: L.OZ,
                  children: [
                      (0, r.jsxs)("div", {
                          className: L.AX,
                          children: [
                              (0, r.jsx)(p.lmn, {
                                  size: "xs",
                                  color: f.A.unsafe_rawColors.BRAND_500.css,
                                  className: L.Dq,
                              }),
                              (0, r.jsx)(p.QWc, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: x.intl.string(x.t.DEoVWZ),
                                  onClick: I,
                              }),
                          ],
                      }),
                      (0, r.jsx)(G, {}),
                      (0, r.jsx)("div", {
                          className: L.AX,
                          children: (0, r.jsx)(p.QWc, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, g.Oj)(b),
                              onClick: T,
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
        s = null == (t = S.A.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: o, decisionId: c, suspiciousMentionActivityUntil: u } = (0, g.Bk)(n);
    function d() {
        null != s &&
            null != c &&
            (0, b.W5)(s, c, () => {
                (0, O.w)(u), (0, b.wu)(s);
            });
    }
    function _() {
        null != s && y.A.open(s, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM);
    }
    return (0, r.jsx)(K, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(p.EpV, {
                    size: "xs",
                    color: f.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(p.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: x.intl.string(x.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, r.jsx)("div", {
            className: L.Ns,
            children:
                null != o &&
                (0, r.jsx)(p.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: l()(o).fromNow(),
                }),
        }),
        content: (0, r.jsx)(p.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: x.intl.string(x.t.SWIWEV),
        }),
        footerButtons: (0, r.jsxs)("div", {
            className: L.OZ,
            children: [
                (0, r.jsx)("div", {
                    className: L.AX,
                    children: (0, r.jsx)(p.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: x.intl.string(x.t.oX14El),
                        onClick: d,
                    }),
                }),
                (0, r.jsx)(G, {}),
                (0, r.jsx)("div", {
                    className: L.AX,
                    children: (0, r.jsx)(p.QWc, {
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
function K(e) {
    let { compact: t, header: n, subheader: i, content: a, footerButtons: o } = e;
    return (0, r.jsxs)("div", {
        className: s()(L.gD, { [L.oE]: t }),
        children: [
            (0, r.jsxs)("div", {
                className: L.Ux,
                children: [
                    (0, r.jsxs)("div", {
                        className: L.LN,
                        children: [
                            (0, r.jsx)("div", {
                                className: L.MY,
                                children: n,
                            }),
                            null != i &&
                                (0, r.jsx)("div", {
                                    className: L.m_,
                                    children: i,
                                }),
                        ],
                    }),
                    a,
                ],
            }),
            null != o &&
                (0, r.jsx)("div", {
                    className: s()(L.Y4, L.UX, { [L.oE]: t }),
                    children: o,
                }),
        ],
    });
}
function z(e) {
    let { id: t, compact: n, message: i, channel: a } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: l, onMouseLeave: u },
        } = (0, R.a)(!0),
        { notificationType: d } = (0, g.Bk)(i),
        f = null == d || d === c.W.RAID;
    return (0, r.jsx)("div", {
        onMouseEnter: l,
        onMouseLeave: u,
        children: (0, r.jsx)(w.A, {
            className: s()(L.rs, { [L.oE]: n }),
            iconNode: n ? null : (0, r.jsx)(R.l, { src: o }),
            iconContainerClassName: L.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: s()(L.Qs, { [L.oE]: n }),
                children: [
                    (0, r.jsx)(C.ix, {
                        message: i,
                        messageClassname: L.he,
                        className: s()(L.QV, L.he, { [L.oE]: n }),
                        username: (0, r.jsxs)("div", {
                            className: L.he,
                            children: [
                                (0, r.jsx)(p.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: L.Xh,
                                    children: x.intl.string(x.t.hG1StD),
                                }),
                                (0, r.jsx)(_.A, {
                                    type: D.nu.SYSTEM_DM,
                                    className: L.Al,
                                }),
                                f &&
                                    (0, r.jsx)(p.Text, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: L.he,
                                        children: x.intl.string(x.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", { className: L.BZ }),
                    (0, r.jsx)(V, {
                        message: i,
                        compact: n,
                    }),
                ],
            }),
        }),
    });
}
