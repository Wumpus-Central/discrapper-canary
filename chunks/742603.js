n.d(t, { Z: () => H }), n(47120);
var i = n(200651);
n(192379);
var l = n(120356),
    a = n.n(l),
    r = n(442837),
    s = n(481060),
    o = n(99690),
    c = n(40851),
    d = n(657305),
    u = n(835473),
    h = n(12498),
    p = n(933557),
    m = n(471445),
    f = n(925329),
    g = n(554747),
    _ = n(854698),
    C = n(897669),
    x = n(665149),
    v = n(984370),
    E = n(910611),
    I = n(454585),
    b = n(134483),
    Z = n(210975),
    N = n(809244),
    T = n(618158),
    S = n(358221),
    j = n(362721),
    y = n(887012),
    A = n(613548),
    P = n(221888),
    R = n(339340),
    M = n(354459),
    L = n(981631),
    k = n(231338),
    O = n(388032),
    D = n(27438),
    w = n(642367);
function U(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, c.bp)(),
        a = (0, r.e7)([S.Z], () => S.Z.getLayout(n.id, l));
    return (0, i.jsx)(T.Z, {
        children: (0, i.jsx)(P.Z, {
            className: D.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === L.IlC.POPOUT || a === L.AEg.FULL_SCREEN
        })
    });
}
function B(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        r = (0, N.Z)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      className: D.avatar,
                      size: s.EFr.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, i.jsx)(s.Text, {
                      className: D.playingText,
                      variant: 'text-md/medium',
                      color: a,
                      children: r
                  })
              ]
          });
}
function F(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        r = (0, y.Z)(a, !0),
        o = (0, g.qY)(a.id),
        c = null != o ? (0, _.DK)(o) : null,
        u = null != o;
    if ((null == l ? void 0 : l.type) === M.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.ZP.Divider, { className: D.divider }),
                    (0, i.jsx)(f.Z, {
                        game: n,
                        className: D.activityIcon
                    }),
                    (0, i.jsx)(s.Text, {
                        className: D.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, d.Z)(n.name)
                    }),
                    r &&
                        (0, i.jsx)(U, {
                            channel: a,
                            focusedParticipant: l
                        })
                ]
            }));
    else if ((null == l ? void 0 : l.type) === M.fO.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.ZP.Divider, { className: D.divider }),
                (0, i.jsx)(B, {
                    user: e,
                    channel: a,
                    stream: n,
                    color: r ? 'header-primary' : 'none'
                }),
                r &&
                    (0, i.jsx)(U, {
                        channel: a,
                        focusedParticipant: l
                    })
            ]
        });
    } else
        u &&
            (t = (0, i.jsx)(C.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, i.jsx)('div', {
        className: D.container,
        children: t
    });
}
function H(e) {
    let { channel: t, guild: l, appContext: o, inCall: c, isChatOpen: d, exitFullScreen: f } = e,
        { focusedParticipant: g } = (0, r.cj)(
            [S.Z],
            () => ({
                focusedParticipant: S.Z.getSelectedParticipant(t.id),
                participantsOpen: S.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        _ = (0, p.ZP)(t),
        C = (0, m.KS)(t),
        [N] = (0, u.Z)((null == g ? void 0 : g.type) === M.fO.ACTIVITY ? [g.applicationId] : []),
        T = O.intl.string(O.t.BVZqJi);
    t.isDM() ? (T = O.intl.string(O.t.jN2DfX)) : t.isGroupDM() && (T = O.intl.string(O.t['e5y+go']));
    let y = (0, r.e7)([h.Z], () => h.Z.getChannelStatus(t)),
        P = t.isGuildVoice() && c && null != y && y.length > 0,
        U = (0, j.ZP)(t),
        B = P
            ? (0, i.jsx)(s.ua7, {
                  text: O.intl.string(O.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: U,
                  children: (e) =>
                      (0, i.jsxs)(s.P3F, {
                          ...e,
                          className: a()(D.channelStatusClickable, { [D.hoverable]: U }),
                          onClick: U ? H : void 0,
                          children: [
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/normal',
                                  className: a()(D.channelStatus, w.markup, { [D.hoverable]: U }),
                                  children: I.Z.parseVoiceChannelStatus(y, !0, { channelId: t.id })
                              }),
                              U &&
                                  (0, i.jsx)(s.vdY, {
                                      size: 'custom',
                                      color: 'currentColor',
                                      className: a()(D.pencilIcon, D.hoverable),
                                      width: 14,
                                      height: 14
                                  })
                          ]
                      })
              })
            : null;
    function H() {
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) =>
                    (0, i.jsx)(e, {
                        channel: t,
                        ...n
                    });
            },
            { modalKey: R.a }
        );
    }
    let G = (0, Z.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, i.jsxs)('div', {
        className: D.subtitleContainer,
        children: [
            (0, i.jsx)(s.f6W, {
                theme: k.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(x.ZP, {
                        onDoubleClick: v.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(A.Z, {
                            inPopout: o === L.IlC.POPOUT,
                            channel: t,
                            appContext: o,
                            inCall: c,
                            isChatOpen: d,
                            exitFullScreen: f
                        }),
                        children: [
                            null != C
                                ? (0, i.jsx)(x.ZP.Icon, {
                                      icon: C,
                                      disabled: !0,
                                      'aria-label': T
                                  })
                                : null,
                            (0, i.jsx)(x.ZP.Title, {
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        _,
                                        G &&
                                            (0, i.jsx)(s.ua7, {
                                                text: O.intl.string(O.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, i.jsx)(s.tQf, {
                                                        ...e,
                                                        size: 'xs',
                                                        'aria-label': O.intl.string(O.t.VHXh8f),
                                                        color: s.TVs.colors.INTERACTIVE_NORMAL,
                                                        className: D.secureFramesIcon
                                                    })
                                            })
                                    ]
                                })
                            }),
                            (0, i.jsx)(E.TS, {
                                channel: t,
                                guild: l
                            }),
                            (0, i.jsx)(F, {
                                focusedApplication: N,
                                focusedParticipant: g,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, i.jsx)(b.Z, { channelId: t.id })
        ]
    });
}
