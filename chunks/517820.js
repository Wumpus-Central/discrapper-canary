n.d(t, { Z: () => V });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(913527),
    o = n.n(s),
    c = n(722770),
    d = n(320285),
    u = n(688813),
    m = n(442837),
    _ = n(692547),
    h = n(481060),
    p = n(256638),
    g = n(385499),
    f = n(528011),
    x = n(533244),
    C = n(825829),
    v = n(226192),
    E = n(36459),
    I = n(434404),
    N = n(518950),
    S = n(347475),
    T = n(592125),
    b = n(271383),
    A = n(594174),
    j = n(464891),
    y = n(348238),
    Z = n(83561),
    R = n(834129),
    L = n(981631),
    P = n(674563),
    k = n(388032),
    M = n(403498);
function O() {
    return (0, i.jsx)('div', { className: M.dot });
}
function D(e) {
    let { message: t, compact: n } = e,
        { notificationType: l } = (0, C.FL)(t);
    switch (l) {
        case C.nj:
        case d.p.RAID:
            return (0, i.jsx)(B, {
                message: t,
                compact: n
            });
        case d.p.MENTION_RAID:
            return (0, i.jsx)(G, {
                message: t,
                compact: n
            });
        case d.p.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(U, {
                message: t,
                compact: n
            });
        case d.p.INTERACTION_BLOCKED:
            return (0, i.jsx)(F, { compact: n });
        default:
            return (0, i.jsx)(w, { compact: n });
    }
}
function w(e) {
    let { compact: t } = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(h.P4T, {
                    size: 'xs',
                    color: _.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: k.intl.string(k.t.VdZCcH)
                })
            ]
        }),
        content: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.intl.string(k.t.NxHYX1)
        })
    });
}
function F(e) {
    let { compact: t } = e;
    return (0, i.jsx)(H, {
        compact: t,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(h.P4T, {
                    size: 'xs',
                    color: _.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: k.intl.string(k.t['2qTBw8'])
                })
            ]
        }),
        content: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.intl.string(k.t.Dc9wCg)
        })
    });
}
function U(e) {
    var t;
    let { message: n, compact: a } = e,
        r = A.default.getUser((0, C.Sw)(n)),
        s = null === (t = T.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        c = null != s && null != r ? b.ZP.getMember(s, r.id) : null,
        {
            avatarSrc: d,
            avatarDecorationSrc: u,
            eventHandlers: m
        } = (0, N.Z)({
            user: r,
            guildId: s,
            size: 12
        });
    return (0, i.jsx)(H, {
        compact: a,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(h.bgT, {
                    size: 'xs',
                    color: _.Z.colors.TEXT_POSITIVE.css
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: k.intl.string(k.t.lVLiFh)
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: M.dotSeparatedRow,
            children: [
                (0, i.jsx)('div', {
                    className: M.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != r &&
                        (0, i.jsxs)(l.Fragment, {
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: k.intl.string(k.t.qlFrXV)
                                }),
                                (0, i.jsx)(h.yRy, {
                                    renderPopout: function (e) {
                                        return null == r
                                            ? (0, i.jsx)(i.Fragment, {})
                                            : (0, i.jsx)(S.Z, {
                                                  ...e,
                                                  userId: r.id,
                                                  user: r,
                                                  guildId: s,
                                                  channelId: n.channel_id,
                                                  messageId: n.id
                                              });
                                    },
                                    children: (e) =>
                                        (0, i.jsxs)(h.P3F, {
                                            className: M.alertsEnabledSubHeaderAvatarUsername,
                                            ...e,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    ...m,
                                                    children: (0, i.jsx)(h.qEK, {
                                                        src: d,
                                                        avatarDecoration: u,
                                                        size: h.EFr.SIZE_16,
                                                        'aria-label': 'TODO'
                                                    })
                                                }),
                                                (0, i.jsxs)(h.Text, {
                                                    variant: 'text-xs/medium',
                                                    style: { color: null != c.colorString ? c.colorString : _.Z.colors.TEXT_NORMAL.css },
                                                    children: [' ', '@', r.username]
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                }),
                (0, i.jsx)(O, {}),
                (0, i.jsx)(h.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: o()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.intl.string(k.t['QV/8u7'])
        })
    });
}
function B(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: r, raidDatetime: s, dmsSent: d, raidType: p, resolvedReason: g } = (0, C.FL)(n),
        E = (0, m.e7)([T.Z], () => T.Z.getChannel(n.channel_id), [n.channel_id]),
        I = null !== (t = null == E ? void 0 : E.guild_id) && void 0 !== t ? t : null,
        { shouldShowIncidentActions: N } = (0, f.mI)(I),
        S = (0, y.sR)(n.author.id, n.channel_id),
        b = l.useCallback(() => {
            let e = null == E ? void 0 : E.guild_id;
            null != e && (0, v.kW)(n.id, e);
        }, [n.id, E]),
        A = p === u.$.DM_RAID,
        j = A ? h.P4T : h.b6m;
    return (0, i.jsx)(H, {
        compact: a,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(j, {
                    size: 'xs',
                    color: _.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: A ? k.intl.string(k.t['8+lHUV']) : k.intl.string(k.t.xMwcwc)
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: M.dotSeparatedRow,
            children: [
                null != r &&
                    (0, i.jsx)(h.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: k.intl.format(k.t['4ylIio'], { joinCount: r })
                    }),
                null != d &&
                    (0, i.jsx)(h.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: k.intl.format(k.t['5C8Mh4'], { dmsSent: d })
                    }),
                null != s &&
                    (0, i.jsxs)(l.Fragment, {
                        children: [
                            (0, i.jsx)(O, {}),
                            (0, i.jsx)(h.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-normal',
                                children: o()(s).fromNow()
                            })
                        ]
                    })
            ]
        }),
        content:
            null != s
                ? (0, i.jsx)(h.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: k.intl.format(k.t['4QIIZm'], { dateTime: s.toLocaleString(k.intl.currentLocale, x.pQ) })
                  })
                : null,
        footerButtons: N
            ? (0, i.jsxs)('div', {
                  className: M.dotSeparatedRow,
                  children: [
                      (0, i.jsx)(h.zxk, {
                          onClick: (e) => {
                              S(e);
                          },
                          color: h.zxk.Colors.LINK,
                          look: h.zxk.Looks.LINK,
                          size: h.zxk.Sizes.SMALL,
                          className: M.buttonStyle,
                          children: (0, i.jsxs)('div', {
                              className: M.footerAction,
                              children: [
                                  (0, i.jsx)(h.b7C, {
                                      size: 'xs',
                                      color: c.Z.BLUE_345,
                                      className: M.footerIcon
                                  }),
                                  (0, i.jsx)(h.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: k.intl.string(k.t.DEoVWV)
                                  })
                              ]
                          })
                      }),
                      (0, i.jsx)(O, {}),
                      (0, i.jsx)(h.zxk, {
                          onClick: b,
                          color: h.zxk.Colors.LINK,
                          look: h.zxk.Looks.LINK,
                          size: h.zxk.Sizes.SMALL,
                          className: M.buttonStyle,
                          children: (0, i.jsx)('div', {
                              className: M.footerAction,
                              children: (0, i.jsx)(h.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, C.ge)(g)
                              })
                          })
                      })
                  ]
              })
            : null
    });
}
function G(e) {
    var t;
    let { message: n, compact: a } = e,
        r = null === (t = T.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        { raidDatetime: s, decisionId: c, suspiciousMentionActivityUntil: d } = (0, C.FL)(n);
    return (0, i.jsx)(H, {
        compact: a,
        header: (0, i.jsxs)(l.Fragment, {
            children: [
                (0, i.jsx)(h.P4T, {
                    size: 'xs',
                    color: _.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(h.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: k.intl.string(k.t.C2uIXF)
                })
            ]
        }),
        subheader: (0, i.jsx)('div', {
            className: M.dotSeparatedRow,
            children:
                null != s &&
                (0, i.jsx)(h.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: o()(s).fromNow()
                })
        }),
        content: (0, i.jsx)(h.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.intl.string(k.t.SWIWER)
        }),
        footerButtons: (0, i.jsxs)('div', {
            className: M.dotSeparatedRow,
            children: [
                (0, i.jsx)(h.zxk, {
                    onClick: function () {
                        null != r &&
                            null != c &&
                            (0, E.UE)(r, c, () => {
                                (0, p.c)(d), (0, E.T9)(r);
                            });
                    },
                    color: h.zxk.Colors.LINK,
                    look: h.zxk.Looks.LINK,
                    size: h.zxk.Sizes.SMALL,
                    className: M.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: M.footerAction,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: k.intl.string(k.t.oX14Eh)
                        })
                    })
                }),
                (0, i.jsx)(O, {}),
                (0, i.jsx)(h.zxk, {
                    onClick: function () {
                        null != r && I.Z.open(r, L.pNK.GUILD_AUTOMOD, void 0, L.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: h.zxk.Colors.LINK,
                    look: h.zxk.Looks.LINK,
                    size: h.zxk.Sizes.SMALL,
                    className: M.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: M.footerAction,
                        children: (0, i.jsx)(h.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: k.intl.string(k.t['1R7QIy'])
                        })
                    })
                })
            ]
        })
    });
}
function H(e) {
    let { compact: t, header: n, subheader: l, content: a, footerButtons: s } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: r()(M.embedCard, { [M.compact]: t }),
            children: [
                (0, i.jsxs)('div', {
                    className: M.cardContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: M.cardHeaderContianer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: M.cardHeader,
                                    children: n
                                }),
                                null != l &&
                                    (0, i.jsx)('div', {
                                        className: M.subheader,
                                        children: l
                                    })
                            ]
                        }),
                        a
                    ]
                }),
                null != s &&
                    (0, i.jsx)('div', {
                        className: r()(M.centeredRowContainer, M.cardFooter, { [M.compact]: t }),
                        children: s
                    })
            ]
        })
    });
}
function V(e) {
    let { id: t, compact: n, message: l, channel: a } = e,
        {
            avatarSrc: s,
            eventHandlers: { onMouseEnter: o, onMouseLeave: c }
        } = (0, Z.m)(!0),
        { notificationType: u } = (0, C.FL)(l),
        m = null == u || u === d.p.RAID;
    return (0, i.jsx)('div', {
        onMouseEnter: o,
        onMouseLeave: c,
        children: (0, i.jsx)(R.Z, {
            className: r()(M.mainContainer, { [M.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(Z.S, { src: s }),
            iconContainerClassName: M.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: r()(M.content, { [M.compact]: n }),
                children: [
                    (0, i.jsx)(j.nD, {
                        message: l,
                        messageClassname: M.spanCorrection,
                        className: r()(M.usernameContainer, M.spanCorrection, { [M.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: M.spanCorrection,
                            children: [
                                (0, i.jsx)(h.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: M.username,
                                    children: k.intl.string(k.t.hG1StL)
                                }),
                                (0, i.jsx)(g.Z, {
                                    type: P.Hb.SYSTEM_DM,
                                    className: M.systemTag
                                }),
                                m &&
                                    (0, i.jsx)(h.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: M.spanCorrection,
                                        children: k.intl.string(k.t.ufawc3)
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', { className: M.flexLineBreak }),
                    (0, i.jsx)(D, {
                        message: l,
                        compact: n
                    })
                ]
            })
        })
    });
}
