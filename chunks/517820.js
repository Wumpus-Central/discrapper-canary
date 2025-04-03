n.d(t, { Z: () => z });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(913527),
    s = n.n(o),
    c = n(722770),
    u = n(320285),
    d = n(688813),
    p = n(442837),
    m = n(692547),
    f = n(481060),
    h = n(256638),
    g = n(385499),
    _ = n(528011),
    b = n(533244),
    x = n(825829),
    y = n(226192),
    E = n(36459),
    v = n(434404),
    O = n(518950),
    N = n(347475),
    j = n(592125),
    C = n(271383),
    I = n(594174),
    S = n(464891),
    T = n(348238),
    P = n(83561),
    A = n(834129),
    w = n(981631),
    Z = n(674563),
    k = n(388032),
    R = n(126759);
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e, t) {
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
    return (0, r.jsx)('div', { className: R.dot });
}
function W(e) {
    let { message: t, compact: n } = e,
        { notificationType: i } = (0, x.FL)(t);
    switch (i) {
        case x.nj:
        case u.p.RAID:
            return (0, r.jsx)(G, {
                message: t,
                compact: n
            });
        case u.p.MENTION_RAID:
            return (0, r.jsx)(H, {
                message: t,
                compact: n
            });
        case u.p.ACTIVITY_ALERTS_ENABLED:
            return (0, r.jsx)(B, {
                message: t,
                compact: n
            });
        case u.p.INTERACTION_BLOCKED:
            return (0, r.jsx)(F, { compact: n });
        default:
            return (0, r.jsx)(U, { compact: n });
    }
}
function U(e) {
    let { compact: t } = e;
    return (0, r.jsx)(V, {
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
                    children: k.NW.string(k.t.VdZCcH)
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.NW.string(k.t.NxHYX1)
        })
    });
}
function F(e) {
    let { compact: t } = e;
    return (0, r.jsx)(V, {
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
                    children: k.NW.string(k.t['2qTBw8'])
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.NW.string(k.t.Dc9wCg)
        })
    });
}
function B(e) {
    var t;
    let { message: n, compact: a } = e,
        l = I.default.getUser((0, x.Sw)(n)),
        o = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        c = null != o && null != l ? C.ZP.getMember(o, l.id) : null,
        {
            avatarSrc: u,
            avatarDecorationSrc: d,
            eventHandlers: p
        } = (0, O.Z)({
            user: l,
            guildId: o,
            size: 12
        });
    return (0, r.jsx)(V, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.bgT, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_POSITIVE.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-positive',
                    children: k.NW.string(k.t.lVLiFh)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: R.dotSeparatedRow,
            children: [
                (0, r.jsx)('div', {
                    className: R.alertsEnabledSubHeader,
                    children:
                        null != c &&
                        null != l &&
                        (0, r.jsxs)(i.Fragment, {
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-normal',
                                    children: k.NW.string(k.t.qlFrXV)
                                }),
                                (0, r.jsx)(f.yRy, {
                                    renderPopout: function (e) {
                                        return null == l
                                            ? (0, r.jsx)(r.Fragment, {})
                                            : (0, r.jsx)(
                                                  N.Z,
                                                  L(D({}, e), {
                                                      userId: l.id,
                                                      user: l,
                                                      guildId: o,
                                                      channelId: n.channel_id,
                                                      messageId: n.id
                                                  })
                                              );
                                    },
                                    children: (e) =>
                                        (0, r.jsxs)(
                                            f.P3F,
                                            L(D({ className: R.alertsEnabledSubHeaderAvatarUsername }, e), {
                                                children: [
                                                    (0, r.jsx)(
                                                        'div',
                                                        L(D({}, p), {
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
                                                        style: { color: null != c.colorString ? c.colorString : m.Z.colors.TEXT_NORMAL.css },
                                                        children: [' ', '@', l.username]
                                                    })
                                                ]
                                            })
                                        )
                                })
                            ]
                        })
                }),
                (0, r.jsx)(M, {}),
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: s()(n.timestamp).fromNow()
                })
            ]
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.NW.string(k.t['QV/8u7'])
        })
    });
}
function G(e) {
    var t;
    let { message: n, compact: a } = e,
        { joinAttempts: l, raidDatetime: o, dmsSent: u, raidType: h, resolvedReason: g } = (0, x.FL)(n),
        E = (0, p.e7)([j.Z], () => j.Z.getChannel(n.channel_id), [n.channel_id]),
        v = null != (t = null == E ? void 0 : E.guild_id) ? t : null,
        { shouldShowIncidentActions: O } = (0, _.mI)(v),
        N = (0, T.sR)(n.author.id, n.channel_id),
        C = i.useCallback(() => {
            let e = null == E ? void 0 : E.guild_id;
            null != e && (0, y.kW)(n.id, e);
        }, [n.id, E]),
        I = h === d.$.DM_RAID,
        S = I ? f.P4T : f.b6m;
    return (0, r.jsx)(V, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(S, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: I ? k.NW.string(k.t['8+lHUV']) : k.NW.string(k.t.xMwcwc)
                })
            ]
        }),
        subheader: (0, r.jsxs)('div', {
            className: R.dotSeparatedRow,
            children: [
                null != l &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: k.NW.format(k.t['4ylIio'], { joinCount: l })
                    }),
                null != u &&
                    (0, r.jsx)(f.Text, {
                        variant: 'text-xs/medium',
                        color: 'text-normal',
                        children: k.NW.format(k.t['5C8Mh4'], { dmsSent: u })
                    }),
                null != o &&
                    (0, r.jsxs)(i.Fragment, {
                        children: [
                            (0, r.jsx)(M, {}),
                            (0, r.jsx)(f.Text, {
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
                ? (0, r.jsx)(f.Text, {
                      variant: 'text-md/normal',
                      color: 'text-muted',
                      children: k.NW.format(k.t['4QIIZm'], { dateTime: o.toLocaleString(k.NW.currentLocale, b.pQ) })
                  })
                : null,
        footerButtons: O
            ? (0, r.jsxs)('div', {
                  className: R.dotSeparatedRow,
                  children: [
                      (0, r.jsx)(f.zxk, {
                          onClick: (e) => {
                              N(e);
                          },
                          color: f.zxk.Colors.LINK,
                          look: f.zxk.Looks.LINK,
                          size: f.zxk.Sizes.SMALL,
                          className: R.buttonStyle,
                          children: (0, r.jsxs)('div', {
                              className: R.footerAction,
                              children: [
                                  (0, r.jsx)(f.b7C, {
                                      size: 'xs',
                                      color: c.Z.BLUE_345,
                                      className: R.footerIcon
                                  }),
                                  (0, r.jsx)(f.Text, {
                                      variant: 'text-xs/medium',
                                      color: 'text-link',
                                      children: k.NW.string(k.t.DEoVWV)
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(M, {}),
                      (0, r.jsx)(f.zxk, {
                          onClick: C,
                          color: f.zxk.Colors.LINK,
                          look: f.zxk.Looks.LINK,
                          size: f.zxk.Sizes.SMALL,
                          className: R.buttonStyle,
                          children: (0, r.jsx)('div', {
                              className: R.footerAction,
                              children: (0, r.jsx)(f.Text, {
                                  variant: 'text-xs/medium',
                                  color: 'text-link',
                                  children: (0, x.ge)(g)
                              })
                          })
                      })
                  ]
              })
            : null
    });
}
function H(e) {
    var t;
    let { message: n, compact: a } = e,
        l = null == (t = j.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
        { raidDatetime: o, decisionId: c, suspiciousMentionActivityUntil: u } = (0, x.FL)(n);
    return (0, r.jsx)(V, {
        compact: a,
        header: (0, r.jsxs)(i.Fragment, {
            children: [
                (0, r.jsx)(f.P4T, {
                    size: 'xs',
                    color: m.Z.colors.TEXT_DANGER.css
                }),
                (0, r.jsx)(f.Text, {
                    variant: 'text-md/semibold',
                    color: 'text-danger',
                    children: k.NW.string(k.t.C2uIXF)
                })
            ]
        }),
        subheader: (0, r.jsx)('div', {
            className: R.dotSeparatedRow,
            children:
                null != o &&
                (0, r.jsx)(f.Text, {
                    variant: 'text-xs/medium',
                    color: 'text-normal',
                    children: s()(o).fromNow()
                })
        }),
        content: (0, r.jsx)(f.Text, {
            variant: 'text-md/normal',
            color: 'text-muted',
            children: k.NW.string(k.t.SWIWER)
        }),
        footerButtons: (0, r.jsxs)('div', {
            className: R.dotSeparatedRow,
            children: [
                (0, r.jsx)(f.zxk, {
                    onClick: function () {
                        null != l &&
                            null != c &&
                            (0, E.UE)(l, c, () => {
                                (0, h.c)(u), (0, E.T9)(l);
                            });
                    },
                    color: f.zxk.Colors.LINK,
                    look: f.zxk.Looks.LINK,
                    size: f.zxk.Sizes.SMALL,
                    className: R.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: R.footerAction,
                        children: (0, r.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: k.NW.string(k.t.oX14Eh)
                        })
                    })
                }),
                (0, r.jsx)(M, {}),
                (0, r.jsx)(f.zxk, {
                    onClick: function () {
                        null != l && v.Z.open(l, w.pNK.GUILD_AUTOMOD, void 0, w.KsC.AUTOMOD_MENTION_SPAM);
                    },
                    color: f.zxk.Colors.LINK,
                    look: f.zxk.Looks.LINK,
                    size: f.zxk.Sizes.SMALL,
                    className: R.buttonStyle,
                    children: (0, r.jsx)('div', {
                        className: R.footerAction,
                        children: (0, r.jsx)(f.Text, {
                            variant: 'text-xs/medium',
                            color: 'text-link',
                            children: k.NW.string(k.t['1R7QIy'])
                        })
                    })
                })
            ]
        })
    });
}
function V(e) {
    let { compact: t, header: n, subheader: i, content: a, footerButtons: o } = e;
    return (0, r.jsxs)('div', {
        className: l()(R.embedCard, { [R.compact]: t }),
        children: [
            (0, r.jsxs)('div', {
                className: R.cardContent,
                children: [
                    (0, r.jsxs)('div', {
                        className: R.cardHeaderContianer,
                        children: [
                            (0, r.jsx)('div', {
                                className: R.cardHeader,
                                children: n
                            }),
                            null != i &&
                                (0, r.jsx)('div', {
                                    className: R.subheader,
                                    children: i
                                })
                        ]
                    }),
                    a
                ]
            }),
            null != o &&
                (0, r.jsx)('div', {
                    className: l()(R.centeredRowContainer, R.cardFooter, { [R.compact]: t }),
                    children: o
                })
        ]
    });
}
function z(e) {
    let { id: t, compact: n, message: i, channel: a } = e,
        {
            avatarSrc: o,
            eventHandlers: { onMouseEnter: s, onMouseLeave: c }
        } = (0, P.m)(!0),
        { notificationType: d } = (0, x.FL)(i),
        p = null == d || d === u.p.RAID;
    return (0, r.jsx)('div', {
        onMouseEnter: s,
        onMouseLeave: c,
        children: (0, r.jsx)(A.Z, {
            className: l()(R.mainContainer, { [R.compact]: n }),
            iconNode: n ? null : (0, r.jsx)(P.S, { src: o }),
            iconContainerClassName: R.iconContainer,
            compact: n,
            children: (0, r.jsxs)('div', {
                className: l()(R.content, { [R.compact]: n }),
                children: [
                    (0, r.jsx)(S.nD, {
                        message: i,
                        messageClassname: R.spanCorrection,
                        className: l()(R.usernameContainer, R.spanCorrection, { [R.compact]: n }),
                        username: (0, r.jsxs)('div', {
                            className: R.spanCorrection,
                            children: [
                                (0, r.jsx)(f.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: R.username,
                                    children: k.NW.string(k.t.hG1StL)
                                }),
                                (0, r.jsx)(g.Z, {
                                    type: Z.Hb.SYSTEM_DM,
                                    className: R.systemTag
                                }),
                                p &&
                                    (0, r.jsx)(f.Text, {
                                        variant: 'text-md/normal',
                                        color: 'header-primary',
                                        tag: 'span',
                                        className: R.spanCorrection,
                                        children: k.NW.string(k.t.ufawc3)
                                    })
                            ]
                        }),
                        compact: n,
                        showTimestamp: !0
                    }),
                    (0, r.jsx)('div', { className: R.flexLineBreak }),
                    (0, r.jsx)(W, {
                        message: i,
                        compact: n
                    })
                ]
            })
        })
    });
}
