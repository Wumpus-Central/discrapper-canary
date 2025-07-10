n.d(t, { Z: () => K });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(722770),
    u = n(320285),
    d = n(688813),
    p = n(442837),
    m = n(692547),
    f = n(755721),
    _ = n(481060),
    g = n(256638),
    h = n(385499),
    b = n(528011),
    E = n(533244),
    y = n(825829),
    x = n(226192),
    C = n(36459),
    v = n(434404),
    O = n(518950),
    j = n(670188),
    I = n(592125),
    S = n(271383),
    T = n(594174),
    N = n(464891),
    P = n(348238),
    A = n(605568),
    w = n(834129),
    Z = n(981631),
    R = n(674563),
    L = n(388032),
    D = n(126759);
function M(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function k(e, t) {
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
function U() {
    return (0, r.jsx)('div', { className: D.dot });
}
function F(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, y.FL)(t);
    switch (i) {
        case y.nj:
        case u.p.RAID:
            return (0, r.jsx)(V, {
                message: t,
                compact: n
            });
        case u.p.MENTION_RAID:
            return (0, r.jsx)(z, {
                message: t,
                compact: n
            });
        case u.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(H, {
                message: t,
                compact: n
            });
        case u.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(G, { compact: n });
        default:
            return (0, r.jsx)(B, { compact: n });
    }
}
function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(W, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(_.P4T, {
                    size: 'xs',
                    color: m.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: L.intl.string(L.t.VdZCcH)
                })
            ]
        }),
        content: (0, r.jsx)(_.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: L.intl.string(L.t.NxHYX1)
        })
    });
}
function G(e) {
    let { compact: t } = e;
    return (0, r.jsx)(W, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(_.P4T, {
                    size: 'xs',
                    color: m.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: L.intl.string(L.t['2qTBw8'])
                })
            ]
        }),
        content: (0, r.jsx)(_.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: L.intl.string(L.t.Dc9wCg)
        })
    });
}
function H(e) {
    var t;
    let { message: n, compact: l } = e,
        a = T.default.getUser((0, y.Sw)(n)),
        o = null == (t = I.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != o && null != a ? S.ZP.getMember(o, a.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: p
        } = (0, O.Z)({
            userId: null == a ? void 0 : a.id,
            guildId: o,
            size: 12
        }),
        f = i.useRef(null);
    return (0, r.jsx)(W, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(_.bgT, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_FEEDBACK_POSITIVE.css
                }),
                (0, r.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-feedback-positive',
                    children: L.intl.string(L.t.lVLiFh)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: D.dotSeparatedRow,
            children: [
                (0, r.jsx)('div', {
                    className: D.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != a &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: L.intl.string(L.t.qlFrXV)
                                }),
                                (0, r.jsx)(j.Z, {
                                    targetElementRef: f,
                                    user: a,
                                    guildId: o,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            _.P3F,
                                            k(
                                                M(
                                                    {
                                                        innerRef: f,
                                                        className: D.alertsEnabledSubHeaderAvatarUsername
                                                    },
                                                    e
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            'div',
                                                            k(M({}, p), {
                                                                children: (0, r.jsx)(_.qEK, {
                                                                    src: u,
                                                                    avatarDecoration: d,
                                                                    size: _.EFr.SIZE_16,
                                                                    'aria-label': 'TODO'
                                                                })
                                                            })
                                                        ),
                                                        (0, r.jsxs)(_.Text, {
                                                            variant: 'text-xs/medium',
                                                            style: { color: null != c.colorString ? c.colorString : m.Z.colors.TEXT_DEFAULT.css },
                                                            children: [' ', '@', a.username]
                                                        })
                                                    ]
                                                }
                                            )
                                        )
                                })
                            ]
                        })
                }),
                (0, r.jsx)(U, {}),
                (0, r.jsx)(_.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-default',
                    children: s()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, r.jsx)(_.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: L.intl.string(L.t['QV/8u7'])
        })
    });
}
function V(e) {
    var t;
    let { message: n, compact: l } = e,
        { joinAttempts: a, raidDatetime: o, dmsSent: u, raidType: g, resolvedReason: h } = (0, y.FL)(n),
        C = (0, p.e7)([I.Z], () => I.Z.getChannel(n.channel_id), [n.channel_id]),
        v = null != (t = null == C ? void 0 : C.guild_id) ? t : null,
        { shouldShowIncidentActions: O } = (0, b.mI)(v),
        j = (0, P.sR)(n.author.id, n.channel_id),
        S = i.useCallback(() => {
            let e = null == C ? void 0 : C.guild_id;
            null != e && (0, x.kW)(n.id, e);
        }, [n.id, C]),
        T = g === d.$.DM_RAID,
        N = T ? _.P4T : _.b6m;
    return (0, r.jsx)(W, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(N, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: T ? L.intl.string(L.t['8+lHUV']) : L.intl.string(L.t.xMwcwc)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: D.dotSeparatedRow,
            children: [
                null != a &&
                    (0, r.jsx)(_.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-default',
                        children: L.intl.format(L.t['4ylIio'], { joinCount: a })
                    }),
                null != u &&
                    (0, r.jsx)(_.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-default',
                        children: L.intl.format(L.t['5C8Mh4'], { dmsSent: u })
                    }),
                null != o &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(U, {}),
                            (0, r.jsx)(_.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-default',
                                children: s()(o).fromNow()
                            })
                        ]
                    })
            ]
        }),
        content:
            null != o
                ? (0, r.jsx)(_.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: L.intl.format(L.t['4QIIZm'], { dateTime: o.toLocaleString(L.intl.currentLocale, E.pQ) })
                  })
                : null,
        footerButtons: O
            ? (0, r.jsxs)('div', {
                  className: D.dotSeparatedRow,
                  children: [
                      (0, r.jsx)(f.zx, {
                          onClick: (e) => {
                              j(e);
                          },
                          color: f.zx.Colors.LINK,
                          look: f.zx.Looks.LINK,
                          size: f.zx.Sizes.SMALL,
                          className: D.buttonStyle,
                          children: (0, r.jsxs)('div', {
                              className: D.footerAction,
                              children: [
                                  (0, r.jsx)(_.b7C, {
                                      size: 'xs',
                                      color: c.Z.BLUE_345,
                                      className: D.footerIcon
                                  }),
                                  (0, r.jsx)(_.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: L.intl.string(L.t.DEoVWV)
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(U, {}),
                      (0, r.jsx)(f.zx, {
                          onClick: S,
                          color: f.zx.Colors.LINK,
                          look: f.zx.Looks.LINK,
                          size: f.zx.Sizes.SMALL,
                          className: D.buttonStyle,
                          children: (0, r.jsx)('div', {
                              className: D.footerAction,
                              children: (0, r.jsx)(_.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, y.ge)(h)
                              })
                          })
                      })
                  ]
              })
            : null
    });
}
function z(e) {
    var t;
    let { message: n, compact: l } = e,
        a = null == (t = I.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: o, decisionId: c, suspiciousMentionActivityUntil: u } = (0, y.FL)(n);
    return (0, r.jsx)(W, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(_.P4T, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(_.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: L.intl.string(L.t.C2uIXF)
                })
            ]
        }),
        subheader: (0, r.jsx)('div', {
            className: D.dotSeparatedRow,
            children:
                null != o &&
                (0, r.jsx)(_.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-default',
                    children: s()(o).fromNow()
                })
        }),
        content: (0, r.jsx)(_.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: L.intl.string(L.t.SWIWER)
        }),
        footerButtons: (0, r.jsxs)('div', {
            className: D.dotSeparatedRow,
            children: [
                (0, r.jsx)(f.zx, {
                    onClick: function () {
                        null != a &&
                            null != c &&
                            (0, C.UE)(a, c, () => {
                                ((0, g.c)(u), (0, C.T9)(a));
                            });
                    },
                    color: f.zx.Colors.LINK,
                    look: f.zx.Looks.LINK,
                    size: f.zx.Sizes.SMALL,
                    className: D.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: D.footerAction,
                        children: (0, r.jsx)(_.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: L.intl.string(L.t.oX14Eh)
                        })
                    })
                }),
                (0, r.jsx)(U, {}),
                (0, r.jsx)(f.zx, {
                    onClick: function () {
                        null != a && v.Z.open(a, Z.pNK.GUILD_AUTOMOD, void 0, Z.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: f.zx.Colors.LINK,
                    look: f.zx.Looks.LINK,
                    size: f.zx.Sizes.SMALL,
                    className: D.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: D.footerAction,
                        children: (0, r.jsx)(_.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: L.intl.string(L.t['1R7QIy'])
                        })
                    })
                })
            ]
        })
    });
}
function W(e) {
    let { compact: t, header: n, subheader: i, content: l, footerButtons: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(D.embedCard, { [D.compact]: t }),
        children: [
            (0, r.jsxs)('div', {
                className: D.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: D.cardHeaderContianer,
                        children: [
                            (0, r.jsx)('div', {
                                className: D.cardHeader,
                                children: n
                            }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: D.subheader,
                                    children: i
                                })
                        ]
                    }),
                    l
                ]
            }),
            null != o &&
                (0, r.jsx)('div', {
                    className: a()(D.centeredRowContainer, D.cardFooter, { [D.compact]: t }),
                    children: o
                })
        ]
    });
}
function K(e) {
    let { id: t, compact: n, message: i, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: s, onMouseLeave: c }
        } = (0, A.m)(!0),
        { notificationType: d } = (0, y.FL)(i),
        p = null == d || d === u.p.RAID;
    return (0, r.jsx)('div', {
        onMouseEnter: s,
        onMouseLeave: c,
        children: (0, r.jsx)(w.Z, {
            className: a()(D.mainContainer, { [D.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(A.S, { src: o }),
            iconContainerClassName: D.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: a()(D.content, { [D.compact]: n }),
                children: [
                    (0, r.jsx)(N.nD, {
                        message: i,
                        messageClassname: D.spanCorrection,
                        className: a()(D.usernameContainer, D.spanCorrection, { [D.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: D.spanCorrection,
                            children: [
                                (0, r.jsx)(_.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: D.username,
                                    children: L.intl.string(L.t.hG1StL)
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: R.Hb.SYSTEM_DM,
                                    className: D.systemTag
                                }),
                                p &&
                                    (0, r.jsx)(_.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: D.spanCorrection,
                                        children: L.intl.string(L.t.ufawc3)
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', { className: D.flexLineBreak }),
                    (0, r.jsx)(F, {
                        message: i,
                        compact: n
                    })
                ]
            })
        })
    });
}
