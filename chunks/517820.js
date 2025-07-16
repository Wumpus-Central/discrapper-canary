n.d(t, { Z: () => W });
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
    f = n(481060),
    _ = n(256638),
    h = n(385499),
    g = n(528011),
    b = n(533244),
    E = n(825829),
    y = n(226192),
    x = n(36459),
    C = n(434404),
    v = n(518950),
    O = n(670188),
    j = n(592125),
    I = n(271383),
    S = n(594174),
    T = n(464891),
    N = n(348238),
    P = n(605568),
    A = n(834129),
    w = n(981631),
    Z = n(674563),
    R = n(388032),
    L = n(126759);
function k(e) {
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
function D(e, t) {
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
function M() {
    return (0, r.jsx)('div', { className: L.dot });
}
function U(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, E.FL)(t);
    switch (i) {
        case E.nj:
        case u.p.RAID:
            return (0, r.jsx)(H, {
                message: t,
                compact: n
            });
        case u.p.MENTION_RAID:
            return (0, r.jsx)(V, {
                message: t,
                compact: n
            });
        case u.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(G, {
                message: t,
                compact: n
            });
        case u.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(B, { compact: n });
        default:
            return (0, r.jsx)(F, { compact: n });
    }
}
function F(e) {
    let { compact: t } = e;
    return (0, r.jsx)(z, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.P4T, {
                    size: 'xs',
                    color: m.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: R.intl.string(R.t.VdZCcH)
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: R.intl.string(R.t.NxHYX1)
        })
    });
}
function B(e) {
    let { compact: t } = e;
    return (0, r.jsx)(z, {
        compact: t,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.P4T, {
                    size: 'xs',
                    color: m.Z.colors.HEADER_SECONDARY.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: R.intl.string(R.t['2qTBw8'])
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: R.intl.string(R.t.Dc9wCg)
        })
    });
}
function G(e) {
    var t;
    let { message: n, compact: l } = e,
        a = S.default.getUser((0, E.Sw)(n)),
        o = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != o && null != a ? I.ZP.getMember(o, a.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: p
        } = (0, v.Z)({
            userId: null == a ? void 0 : a.id,
            guildId: o,
            size: 12
        }),
        _ = i.useRef(null);
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.bgT, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_FEEDBACK_POSITIVE.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-feedback-positive',
                    children: R.intl.string(R.t.lVLiFh)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: L.dotSeparatedRow,
            children: [
                (0, r.jsx)('div', {
                    className: L.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != a &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-default',
                                    children: R.intl.string(R.t.qlFrXV)
                                }),
                                (0, r.jsx)(O.Z, {
                                    targetElementRef: _,
                                    user: a,
                                    guildId: o,
                                    channelId: n.channel_id,
                                    messageId: n.id,
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            f.P3F,
                                            D(
                                                k(
                                                    {
                                                        innerRef: _,
                                                        className: L.alertsEnabledSubHeaderAvatarUsername
                                                    },
                                                    e
                                                ),
                                                {
                                                    children: [
                                                        (0, r.jsx)(
                                                            'div',
                                                            D(k({}, p), {
                                                                children: (0, r.jsx)(f.qEK, {
                                                                    src: u,
                                                                    avatarDecoration: d,
                                                                    size: f.EFr.SIZE_16,
                                                                    'aria-label': 'TODO'
                                                                })
                                                            })
                                                        ),
                                                        (0, r.jsxs)(f.Text, {
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
                (0, r.jsx)(M, {}),
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-default',
                    children: s()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: R.intl.string(R.t['QV/8u7'])
        })
    });
}
function H(e) {
    var t;
    let { message: n, compact: l } = e,
        { joinAttempts: a, raidDatetime: o, dmsSent: u, raidType: _, resolvedReason: h } = (0, E.FL)(n),
        x = (0, p.e7)([j.Z], () => j.Z.getChannel(n.channel_id), [n.channel_id]),
        C = null != (t = null == x ? void 0 : x.guild_id) ? t : null,
        { shouldShowIncidentActions: v } = (0, g.mI)(C),
        O = (0, N.sR)(n.author.id, n.channel_id),
        I = i.useCallback(() => {
            let e = null == x ? void 0 : x.guild_id;
            null != e && (0, y.kW)(n.id, e);
        }, [n.id, x]),
        S = _ === d.$.DM_RAID,
        T = S ? f.P4T : f.b6m;
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(T, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: S ? R.intl.string(R.t['8+lHUV']) : R.intl.string(R.t.xMwcwc)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: L.dotSeparatedRow,
            children: [
                null != a &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-default',
                        children: R.intl.format(R.t['4ylIio'], { joinCount: a })
                    }),
                null != u &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-default',
                        children: R.intl.format(R.t['5C8Mh4'], { dmsSent: u })
                    }),
                null != o &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(M, {}),
                            (0, r.jsx)(f.Text, {
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
                ? (0, r.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: R.intl.format(R.t['4QIIZm'], { dateTime: o.toLocaleString(R.intl.currentLocale, b.pQ) })
                  })
                : null,
        footerButtons: v
            ? (0, r.jsxs)('div', {
                  className: L.footerRow,
                  children: [
                      (0, r.jsxs)('div', {
                          className: L.footerAction,
                          children: [
                              (0, r.jsx)(f.b7C, {
                                  size: 'xs',
                                  color: c.Z.BRAND,
                                  className: L.footerIcon
                              }),
                              (0, r.jsx)(f.Avr, {
                                  variant: 'primary',
                                  size: 'sm',
                                  textVariant: 'text-xs/medium',
                                  text: R.intl.string(R.t.DEoVWV),
                                  onClick: (e) => {
                                      O(e);
                                  }
                              })
                          ]
                      }),
                      (0, r.jsx)(M, {}),
                      (0, r.jsx)('div', {
                          className: L.footerAction,
                          children: (0, r.jsx)(f.Avr, {
                              variant: 'primary',
                              textVariant: 'text-xs/medium',
                              size: 'sm',
                              text: (0, E.ge)(h),
                              onClick: I
                          })
                      })
                  ]
              })
            : null
    });
}
function V(e) {
    var t;
    let { message: n, compact: l } = e,
        a = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: o, decisionId: c, suspiciousMentionActivityUntil: u } = (0, E.FL)(n);
    return (0, r.jsx)(z, {
        compact: l,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.P4T, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: R.intl.string(R.t.C2uIXF)
                })
            ]
        }),
        subheader: (0, r.jsx)('div', {
            className: L.dotSeparatedRow,
            children:
                null != o &&
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-default',
                    children: s()(o).fromNow()
                })
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: R.intl.string(R.t.SWIWER)
        }),
        footerButtons: (0, r.jsxs)('div', {
            className: L.footerRow,
            children: [
                (0, r.jsx)('div', {
                    className: L.footerAction,
                    children: (0, r.jsx)(f.Avr, {
                        variant: 'primary',
                        textVariant: 'text-xs/medium',
                        size: 'sm',
                        text: R.intl.string(R.t.oX14Eh),
                        onClick: function () {
                            null != a &&
                                null != c &&
                                (0, x.UE)(a, c, () => {
                                    ((0, _.c)(u), (0, x.T9)(a));
                                });
                        }
                    })
                }),
                (0, r.jsx)(M, {}),
                (0, r.jsx)('div', {
                    className: L.footerAction,
                    children: (0, r.jsx)(f.Avr, {
                        variant: 'primary',
                        textVariant: 'text-xs/medium',
                        size: 'sm',
                        text: R.intl.string(R.t['1R7QIy']),
                        onClick: function () {
                            null != a && C.Z.open(a, w.pNK.GUILD_AUTOMOD, void 0, w.KsC.AUTOMOD_MENTION_SPAM);
                        }
                    })
                })
            ]
        })
    });
}
function z(e) {
    let { compact: t, header: n, subheader: i, content: l, footerButtons: o } = e;
    return (0, r.jsxs)('div', {
        className: a()(L.embedCard, { [L.compact]: t }),
        children: [
            (0, r.jsxs)('div', {
                className: L.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: L.cardHeaderContianer,
                        children: [
                            (0, r.jsx)('div', {
                                className: L.cardHeader,
                                children: n
                            }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: L.subheader,
                                    children: i
                                })
                        ]
                    }),
                    l
                ]
            }),
            null != o &&
                (0, r.jsx)('div', {
                    className: a()(L.centeredRowContainer, L.cardFooter, { [L.compact]: t }),
                    children: o
                })
        ]
    });
}
function W(e) {
    let { id: t, compact: n, message: i, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: s, onMouseLeave: c }
        } = (0, P.m)(!0),
        { notificationType: d } = (0, E.FL)(i),
        p = null == d || d === u.p.RAID;
    return (0, r.jsx)('div', {
        onMouseEnter: s,
        onMouseLeave: c,
        children: (0, r.jsx)(A.Z, {
            className: a()(L.mainContainer, { [L.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(P.S, { src: o }),
            iconContainerClassName: L.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: a()(L.content, { [L.compact]: n }),
                children: [
                    (0, r.jsx)(T.nD, {
                        message: i,
                        messageClassname: L.spanCorrection,
                        className: a()(L.usernameContainer, L.spanCorrection, { [L.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: L.spanCorrection,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: L.username,
                                    children: R.intl.string(R.t.hG1StL)
                                }),
                                (0, r.jsx)(h.Z, {
                                    type: Z.Hb.SYSTEM_DM,
                                    className: L.systemTag
                                }),
                                p &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: L.spanCorrection,
                                        children: R.intl.string(R.t.ufawc3)
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', { className: L.flexLineBreak }),
                    (0, r.jsx)(U, {
                        message: i,
                        compact: n
                    })
                ]
            })
        })
    });
}
