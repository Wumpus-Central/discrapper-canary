n.d(t, {
    Z: function () {
        return H;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(913527),
    s = n.n(o),
    c = n(722770),
    d = n(320285),
    u = n(688813),
    m = n(442837),
    h = n(692547),
    f = n(481060),
    p = n(256638),
    _ = n(385499),
    g = n(528011),
    E = n(533244),
    C = n(825829),
    I = n(226192),
    x = n(36459),
    N = n(434404),
    v = n(518950),
    T = n(347475),
    S = n(592125),
    A = n(271383),
    b = n(594174),
    j = n(464891),
    R = n(348238),
    Z = n(83561),
    P = n(834129),
    L = n(981631),
    y = n(674563),
    O = n(388032),
    M = n(403498);
function k() {
    return (0, i.jsx)('div', { className: M.dot });
}
function D(e) {
    let { message: t, compact: n } = e,
        { notificationType: r } = (0, C.FL)(t);
    switch (r) {
        case C.nj:
        case d.p.RAID:
            return (0, i.jsx)(F, {
                message: t,
                compact: n
            });
        case d.p.MENTION_RAID:
            return (0, i.jsx)(G, {
                message: t,
                compact: n
            });
        case d.p.ACTIVITY_ALERTS_ENABLED:
            return (0, i.jsx)(w, {
                message: t,
                compact: n
            });
        case d.p.INTERACTION_BLOCKED:
            return (0, i.jsx)(U, { compact: n });
        default:
            return (0, i.jsx)(B, { compact: n });
    }
}
function B(e) {
    let { compact: t } = e;
    return (0, i.jsx)(V, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: h.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: O.intl.string(O.t.VdZCcH)
                })
            ]
        }),
        content: (0, i.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: O.intl.string(O.t.NxHYX1)
        })
    });
}
function U(e) {
    let { compact: t } = e;
    return (0, i.jsx)(V, {
        compact: t,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: h.Z.colors.HEADER_SECONDARY.css
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'header-secondary',
                    children: O.intl.string(O.t['2qTBw8'])
                })
            ]
        }),
        content: (0, i.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: O.intl.string(O.t.Dc9wCg)
        })
    });
}
function w(e) {
    var t;
    let { message: n, compact: l } = e,
        a = b.default.getUser((0, C.Sw)(n)),
        o = null === (t = S.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        c = null != o && null != a ? A.ZP.getMember(o, a.id) : null,
        {
            avatarSrc: d,
            avatarDecorationSrc: u,
            eventHandlers: m
        } = (0, v.Z)({
            user: a,
            guildId: o,
            size: 12
        });
    return (0, i.jsx)(V, {
        compact: l,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(f.SettingsInfoIcon, {
                    size: 'xs',
                    color: h.Z.colors.TEXT_POSITIVE.css
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: O.intl.string(O.t.lVLiFh)
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
                        null != a &&
                        (0, i.jsxs)(r.Fragment, {
                            children: [
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: O.intl.string(O.t.qlFrXV)
                                }),
                                (0, i.jsx)(f.Popout, {
                                    renderPopout: function (e) {
                                        return null == a
                                            ? (0, i.jsx)(i.Fragment, {})
                                            : (0, i.jsx)(T.Z, {
                                                  ...e,
                                                  userId: a.id,
                                                  user: a,
                                                  guildId: o,
                                                  channelId: n.channel_id,
                                                  messageId: n.id
                                              });
                                    },
                                    children: (e) =>
                                        (0, i.jsxs)(f.Clickable, {
                                            className: M.alertsEnabledSubHeaderAvatarUsername,
                                            ...e,
                                            children: [
                                                (0, i.jsx)('div', {
                                                    ...m,
                                                    children: (0, i.jsx)(f.Avatar, {
                                                        src: d,
                                                        avatarDecoration: u,
                                                        size: f.AvatarSizes.SIZE_16,
                                                        'aria-label': 'TODO'
                                                    })
                                                }),
                                                (0, i.jsxs)(f.Text, {
                                                    variant: 'text-xs/medium',
                                                    style: { color: null != c.colorString ? c.colorString : h.Z.colors.TEXT_NORMAL.css },
                                                    children: [' ', '@', a.username]
                                                })
                                            ]
                                        })
                                })
                            ]
                        })
                }),
                (0, i.jsx)(k, {}),
                (0, i.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: s()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, i.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: O.intl.string(O.t['QV/8u7'])
        })
    });
}
function F(e) {
    var t;
    let { message: n, compact: l } = e,
        { joinAttempts: a, raidDatetime: o, dmsSent: d, raidType: p, resolvedReason: _ } = (0, C.FL)(n),
        x = (0, m.e7)([S.Z], () => S.Z.getChannel(n.channel_id), [n.channel_id]),
        N = null !== (t = null == x ? void 0 : x.guild_id) && void 0 !== t ? t : null,
        { shouldShowIncidentActions: v } = (0, g.mI)(N),
        T = (0, R.sR)(n.author.id, n.channel_id),
        A = r.useCallback(() => {
            let e = null == x ? void 0 : x.guild_id;
            null != e && (0, I.kW)(n.id, e);
        }, [n.id, x]),
        b = p === u.$.DM_RAID,
        j = b ? f.CircleWarningIcon : f.ChatWarningIcon;
    return (0, i.jsx)(V, {
        compact: l,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(j, {
                    size: 'xs',
                    color: h.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: b ? O.intl.string(O.t['8+lHUV']) : O.intl.string(O.t.xMwcwc)
                })
            ]
        }),
        subheader: (0, i.jsxs)('div', {
            className: M.dotSeparatedRow,
            children: [
                null != a &&
                    (0, i.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: O.intl.format(O.t['4ylIio'], { joinCount: a })
                    }),
                null != d &&
                    (0, i.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: O.intl.format(O.t['5C8Mh4'], { dmsSent: d })
                    }),
                null != o &&
                    (0, i.jsxs)(r.Fragment, {
                        children: [
                            (0, i.jsx)(k, {}),
                            (0, i.jsx)(f.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-normal',
                                children: s()(o).fromNow()
                            })
                        ]
                    })
            ]
        }),
        content:
            null != o
                ? (0, i.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: O.intl.format(O.t['4QIIZm'], { dateTime: o.toLocaleString(O.intl.currentLocale, E.pQ) })
                  })
                : null,
        footerButtons: v
            ? (0, i.jsxs)('div', {
                  className: M.dotSeparatedRow,
                  children: [
                      (0, i.jsx)(f.Button, {
                          onClick: (e) => {
                              T(e);
                          },
                          color: f.Button.Colors.LINK,
                          look: f.Button.Looks.LINK,
                          size: f.Button.Sizes.SMALL,
                          className: M.buttonStyle,
                          children: (0, i.jsxs)('div', {
                              className: M.footerAction,
                              children: [
                                  (0, i.jsx)(f.ShieldIcon, {
                                      size: 'xs',
                                      color: c.Z.BLUE_345,
                                      className: M.footerIcon
                                  }),
                                  (0, i.jsx)(f.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: O.intl.string(O.t.DEoVWV)
                                  })
                              ]
                          })
                      }),
                      (0, i.jsx)(k, {}),
                      (0, i.jsx)(f.Button, {
                          onClick: A,
                          color: f.Button.Colors.LINK,
                          look: f.Button.Looks.LINK,
                          size: f.Button.Sizes.SMALL,
                          className: M.buttonStyle,
                          children: (0, i.jsx)('div', {
                              className: M.footerAction,
                              children: (0, i.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, C.ge)(_)
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
    let { message: n, compact: l } = e,
        a = null === (t = S.Z.getBasicChannel(n.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        { raidDatetime: o, decisionId: c, suspiciousMentionActivityUntil: d } = (0, C.FL)(n);
    return (0, i.jsx)(V, {
        compact: l,
        header: (0, i.jsxs)(r.Fragment, {
            children: [
                (0, i.jsx)(f.CircleWarningIcon, {
                    size: 'xs',
                    color: h.Z.colors.TEXT_DANGER.css
                }),
                (0, i.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: O.intl.string(O.t.C2uIXF)
                })
            ]
        }),
        subheader: (0, i.jsx)('div', {
            className: M.dotSeparatedRow,
            children:
                null != o &&
                (0, i.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: s()(o).fromNow()
                })
        }),
        content: (0, i.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: O.intl.string(O.t.SWIWER)
        }),
        footerButtons: (0, i.jsxs)('div', {
            className: M.dotSeparatedRow,
            children: [
                (0, i.jsx)(f.Button, {
                    onClick: function () {
                        null != a &&
                            null != c &&
                            (0, x.UE)(a, c, () => {
                                (0, p.c)(d), (0, x.T9)(a);
                            });
                    },
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    size: f.Button.Sizes.SMALL,
                    className: M.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: M.footerAction,
                        children: (0, i.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: O.intl.string(O.t.oX14Eh)
                        })
                    })
                }),
                (0, i.jsx)(k, {}),
                (0, i.jsx)(f.Button, {
                    onClick: function () {
                        null != a && N.Z.open(a, L.pNK.GUILD_AUTOMOD, void 0, L.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: f.Button.Colors.LINK,
                    look: f.Button.Looks.LINK,
                    size: f.Button.Sizes.SMALL,
                    className: M.buttonStyle,
                    children: (0, i.jsx)('div', {
                        className: M.footerAction,
                        children: (0, i.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: O.intl.string(O.t['1R7QIy'])
                        })
                    })
                })
            ]
        })
    });
}
function V(e) {
    let { compact: t, header: n, subheader: r, content: l, footerButtons: o } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: a()(M.embedCard, { [M.compact]: t }),
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
                                null != r &&
                                    (0, i.jsx)('div', {
                                        className: M.subheader,
                                        children: r
                                    })
                            ]
                        }),
                        l
                    ]
                }),
                null != o &&
                    (0, i.jsx)('div', {
                        className: a()(M.centeredRowContainer, M.cardFooter, { [M.compact]: t }),
                        children: o
                    })
            ]
        })
    });
}
function H(e) {
    let { id: t, compact: n, message: r, channel: l } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: s, onMouseLeave: c }
        } = (0, Z.m)(!0),
        { notificationType: u } = (0, C.FL)(r),
        m = null == u || u === d.p.RAID;
    return (0, i.jsx)('div', {
        onMouseEnter: s,
        onMouseLeave: c,
        children: (0, i.jsx)(P.Z, {
            className: a()(M.mainContainer, { [M.compact]: n }),
            iconNode: n ? null : (0, i.jsx)(Z.S, { src: o }),
            iconContainerClassName: M.iconContainer,
            compact: n,
            children: (0, i.jsxs)('div', {
                className: a()(M.content, { [M.compact]: n }),
                children: [
                    (0, i.jsx)(j.nD, {
                        message: r,
                        messageClassname: M.spanCorrection,
                        className: a()(M.usernameContainer, M.spanCorrection, { [M.compact]: n }),
                        username: (0, i.jsxs)('div', {
                            className: M.spanCorrection,
                            children: [
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: M.username,
                                    children: O.intl.string(O.t.hG1StL)
                                }),
                                (0, i.jsx)(_.Z, {
                                    type: y.Hb.SYSTEM_DM,
                                    className: M.systemTag
                                }),
                                m &&
                                    (0, i.jsx)(f.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: M.spanCorrection,
                                        children: O.intl.string(O.t.ufawc3)
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', { className: M.flexLineBreak }),
                    (0, i.jsx)(D, {
                        message: r,
                        compact: n
                    })
                ]
            })
        })
    });
}
