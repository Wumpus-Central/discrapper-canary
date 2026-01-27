n.d(t, {
    A: () => W,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(989349),
    o = n.n(s),
    c = n(718564),
    u = n(348963),
    d = n(311907),
    p = n(827734),
    m = n(397927),
    f = n(709066),
    g = n(585510),
    h = n(903093),
    _ = n(785823),
    b = n(449585),
    A = n(137207),
    y = n(997509),
    v = n(916768),
    x = n(854627),
    O = n(342296),
    E = n(734057),
    j = n(696451),
    C = n(287809),
    I = n(643204),
    S = n(112758),
    T = n(809115),
    N = n(888675),
    P = n(652215),
    w = n(705751),
    R = n(985018),
    D = n(234054);

function L(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function k() {
    return (0, r.jsx)("div", {
        className: D.Om,
    });
}

function U(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, _.Bk)(t);
    switch (i) {
        case _.ZA:
        case c.W.RAID:
            return (0, r.jsx)(H, {
                message: t,
                compact: n,
            });
        case c.W.MENTION_RAID:
            return (0, r.jsx)(V, {
                message: t,
                compact: n,
            });
        case c.W.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(F, {
                message: t,
                compact: n,
            });
        case c.W.INTERACTION_BLOCKED:
            return (0, r.jsx)(B, {
                compact: n,
            });
        default:
            return (0, r.jsx)(G, {
                compact: n,
            });
    }
}

function G(e) {
    let { compact: t } = e;
    return (0, r.jsx)(z, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "xs",
                    color: p.A.colors.TEXT_DEFAULT.css,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: R.intl.string(R.t.VdZCcC),
                }),
            ],
        }),
        content: (0, r.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t["NxHYX/"]),
        }),
    });
}

function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(z, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "xs",
                    color: p.A.colors.TEXT_DEFAULT.css,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-default",
                    children: R.intl.string(R.t["2qTBw/"]),
                }),
            ],
        }),
        content: (0, r.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t.Dc9wCp),
        }),
    });
}

function F(e) {
    var t;
    let { message: n, compact: l } = e,
        a = C.default.getUser((0, _.ZD)(n)),
        s = null == (t = E.A.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != s && null != a ? j.Ay.getMember(s, a.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: f,
        } = (0, x.A)({
            userId: null == a ? void 0 : a.id,
            guildId: s,
            size: 12,
        }),
        g = i.useRef(null);
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(m.Hnu, {
                    size: "xs",
                    color: p.A.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-positive",
                    children: R.intl.string(R.t.lVLiFp),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: D.Ns,
            children: [
                (0, r.jsx)("div", {
                    className: D.gk,
                    children:
                        null != c &&
                        null != a &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-default",
                                    children: R.intl.string(R.t.qlFrXW),
                                }),
                                (0, r.jsx)(O.A, {
                                    targetElementRef: g,
                                    user: a,
                                    guildId: s,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            m.DUT,
                                            M(
                                                L(
                                                    {
                                                        innerRef: g,
                                                        className: D.rI,
                                                    },
                                                    e,
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            "div",
                                                            M(L({}, f), {
                                                                children: (0, r.jsx)(m.euF, {
                                                                    src: u,
                                                                    avatarDecoration: d,
                                                                    size: m._3J.SIZE_16,
                                                                    "aria-label": "TODO",
                                                                }),
                                                            }),
                                                        ),
                                                        (0, r.jsxs)(m.Text, {
                                                            variant: "text-xs/medium",
                                                            style: {
                                                                color:
                                                                    null != c.colorString
                                                                        ? c.colorString
                                                                        : p.A.colors.TEXT_DEFAULT.css,
                                                            },
                                                            children: [" ", "@", a.username],
                                                        }),
                                                    ],
                                                },
                                            ),
                                        ),
                                }),
                            ],
                        }),
                }),
                (0, r.jsx)(k, {}),
                (0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(n.timestamp).fromNow(),
                }),
            ],
        }),
        content: (0, r.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t["QV/8u5"]),
        }),
    });
}

function H(e) {
    var t;
    let { message: n, compact: l } = e,
        { joinAttempts: a, raidDatetime: s, dmsSent: c, raidType: f, resolvedReason: A } = (0, _.Bk)(n),
        y = (0, d.bG)([E.A], () => E.A.getChannel(n.channel_id), [n.channel_id]),
        v = null != (t = null == y ? void 0 : y.guild_id) ? t : null,
        { shouldShowIncidentActions: x } = (0, g.Li)(v),
        O = (0, S.Am)(n.author.id, n.channel_id),
        j = i.useCallback(() => {
            let e = null == y ? void 0 : y.guild_id;
            null != e && (0, b.is)(n.id, e);
        }, [n.id, y]),
        C = f === u.p.DM_RAID,
        I = C ? m.EpV : m.EF8;
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(I, {
                    size: "xs",
                    color: p.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: C ? R.intl.string(R.t["8+lHUb"]) : R.intl.string(R.t.xMwcwV),
                }),
            ],
        }),
        subheader: (0, r.jsxs)("div", {
            className: D.Ns,
            children: [
                null != a &&
                    (0, r.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: R.intl.format(R.t["4ylIiu"], {
                            joinCount: a,
                        }),
                    }),
                null != c &&
                    (0, r.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-default",
                        children: R.intl.format(R.t["5C8Mh3"], {
                            dmsSent: c,
                        }),
                    }),
                null != s &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(k, {}),
                            (0, r.jsx)(m.Text, {
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
                ? (0, r.jsx)(m.Text, {
                      variant: "text-md/normal",
                      color: "text-muted",
                      children: R.intl.format(R.t["4QIIZl"], {
                          dateTime: s.toLocaleString(R.intl.currentLocale, h.yc),
                      }),
                  })
                : null,
        footerButtons: x
            ? (0, r.jsxs)("div", {
                  className: D.OZ,
                  children: [
                      (0, r.jsxs)("div", {
                          className: D.AX,
                          children: [
                              (0, r.jsx)(m.lmn, {
                                  size: "xs",
                                  color: p.A.unsafe_rawColors.BRAND_500.css,
                                  className: D.Dq,
                              }),
                              (0, r.jsx)(m.QWc, {
                                  variant: "primary",
                                  size: "sm",
                                  textVariant: "text-xs/medium",
                                  text: R.intl.string(R.t.DEoVWZ),
                                  onClick: (e) => {
                                      O(e);
                                  },
                              }),
                          ],
                      }),
                      (0, r.jsx)(k, {}),
                      (0, r.jsx)("div", {
                          className: D.AX,
                          children: (0, r.jsx)(m.QWc, {
                              variant: "primary",
                              textVariant: "text-xs/medium",
                              size: "sm",
                              text: (0, _.Oj)(A),
                              onClick: j,
                          }),
                      }),
                  ],
              })
            : null,
    });
}

function V(e) {
    var t;
    let { message: n, compact: l } = e,
        a = null == (t = E.A.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: s, decisionId: c, suspiciousMentionActivityUntil: u } = (0, _.Bk)(n);
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(m.EpV, {
                    size: "xs",
                    color: p.A.colors.TEXT_FEEDBACK_CRITICAL.css,
                }),
                (0, r.jsx)(m.Text, {
                    variant: "text-md/semibold",
                    color: "text-feedback-critical",
                    children: R.intl.string(R.t.C2uIXE),
                }),
            ],
        }),
        subheader: (0, r.jsx)("div", {
            className: D.Ns,
            children:
                null != s &&
                (0, r.jsx)(m.Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: o()(s).fromNow(),
                }),
        }),
        content: (0, r.jsx)(m.Text, {
            variant: "text-md/normal",
            color: "text-muted",
            children: R.intl.string(R.t.SWIWEV),
        }),
        footerButtons: (0, r.jsxs)("div", {
            className: D.OZ,
            children: [
                (0, r.jsx)("div", {
                    className: D.AX,
                    children: (0, r.jsx)(m.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: R.intl.string(R.t.oX14El),
                        onClick: function () {
                            null != a &&
                                null != c &&
                                (0, A.W5)(a, c, () => {
                                    (0, v.w)(u), (0, A.wu)(a);
                                });
                        },
                    }),
                }),
                (0, r.jsx)(k, {}),
                (0, r.jsx)("div", {
                    className: D.AX,
                    children: (0, r.jsx)(m.QWc, {
                        variant: "primary",
                        textVariant: "text-xs/medium",
                        size: "sm",
                        text: R.intl.string(R.t["1R7QIx"]),
                        onClick: function () {
                            null != a && y.A.open(a, P.BEX.GUILD_AUTOMOD, void 0, P.nd0.AUTOMOD_MENTION_SPAM);
                        },
                    }),
                }),
            ],
        }),
    });
}

function z(e) {
    let { compact: t, header: n, subheader: i, content: l, footerButtons: s } = e;
    return (0, r.jsxs)("div", {
        className: a()(D.gD, {
            [D.oE]: t,
        }),
        children: [
            (0, r.jsxs)("div", {
                className: D.Ux,
                children: [
                    (0, r.jsxs)("div", {
                        className: D.LN,
                        children: [
                            (0, r.jsx)("div", {
                                className: D.MY,
                                children: n,
                            }),
                            null != i &&
                                (0, r.jsx)("div", {
                                    className: D.m_,
                                    children: i,
                                }),
                        ],
                    }),
                    l,
                ],
            }),
            null != s &&
                (0, r.jsx)("div", {
                    className: a()(D.Y4, D.UX, {
                        [D.oE]: t,
                    }),
                    children: s,
                }),
        ],
    });
}

function W(e) {
    let { id: t, compact: n, message: i, channel: l } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: o, onMouseLeave: u },
        } = (0, T.a)(!0),
        { notificationType: d } = (0, _.Bk)(i),
        p = null == d || d === c.W.RAID;
    return (0, r.jsx)("div", {
        onMouseEnter: o,
        onMouseLeave: u,
        children: (0, r.jsx)(N.A, {
            className: a()(D.rs, {
                [D.oE]: n,
            }),
            iconNode: n
                ? null
                : (0, r.jsx)(T.l, {
                      src: s,
                  }),
            iconContainerClassName: D.zc,
            compact: n,
            children: (0, r.jsxs)("div", {
                className: a()(D.Qs, {
                    [D.oE]: n,
                }),
                children: [
                    (0, r.jsx)(I.ix, {
                        message: i,
                        messageClassname: D.he,
                        className: a()(D.QV, D.he, {
                            [D.oE]: n,
                        }),
                        username: (0, r.jsxs)("div", {
                            className: D.he,
                            children: [
                                (0, r.jsx)(m.Text, {
                                    variant: "text-md/normal",
                                    color: "text-brand",
                                    tag: "span",
                                    className: D.Xh,
                                    children: R.intl.string(R.t.hG1StD),
                                }),
                                (0, r.jsx)(f.A, {
                                    type: w.nu.SYSTEM_DM,
                                    className: D.Al,
                                }),
                                p &&
                                    (0, r.jsx)(m.Text, {
                                        variant: "text-md/normal",
                                        color: "text-strong",
                                        tag: "span",
                                        className: D.he,
                                        children: R.intl.string(R.t.ufawcw),
                                    }),
                            ],
                        }),
                        compact: n,
                        showTimestamp: !0,
                    }),
                    (0, r.jsx)("div", {
                        className: D.BZ,
                    }),
                    (0, r.jsx)(U, {
                        message: i,
                        compact: n,
                    }),
                ],
            }),
        }),
    });
}
