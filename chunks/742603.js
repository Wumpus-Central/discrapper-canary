(n.d(t, { Z: () => W }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(99690),
    u = n(40851),
    d = n(657305),
    p = n(835473),
    h = n(12498),
    f = n(933557),
    m = n(471445),
    g = n(925329),
    b = n(554747),
    _ = n(854698),
    y = n(897669),
    C = n(665149),
    x = n(984370),
    v = n(910611),
    j = n(454585),
    O = n(134483),
    E = n(210975),
    S = n(809244),
    P = n(937995),
    I = n(618158),
    Z = n(358221),
    T = n(362721),
    N = n(887012),
    A = n(613548),
    w = n(221888),
    R = n(339340),
    M = n(354459),
    D = n(981631),
    k = n(231338),
    L = n(388032),
    U = n(610633),
    B = n(73433);
function F(e) {
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
function H(e, t) {
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
function G(e) {
    let { focusedParticipant: t, channel: n } = e,
        i = (0, u.bp)(),
        l = (0, o.e7)([Z.Z], () => Z.Z.getLayout(n.id, i));
    return (0, r.jsx)(I.Z, {
        children: (0, r.jsx)(w.Z, {
            className: U.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: i === D.IlC.POPOUT || l === D.AEg.FULL_SCREEN
        })
    });
}
function V(e) {
    let { user: t, channel: n, stream: i, color: l } = e,
        a = (0, S.Z)(n, t, i);
    return null == t || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: U.avatar,
                      size: s.EFr.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, r.jsx)(s.Text, {
                      className: U.playingText,
                      variant: 'text-md/medium',
                      color: l,
                      children: a
                  })
              ]
          });
}
function z(e) {
    let t,
        { focusedApplication: n, focusedParticipant: i, channel: l } = e,
        a = (0, N.Z)(l, !0),
        o = (0, b.qY)(l.id),
        c = null != o ? (0, _.DK)(o) : null,
        u = null != o;
    if ((null == i ? void 0 : i.type) === M.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(C.ZP.Divider, { className: U.divider }),
                    (0, r.jsx)(g.Z, {
                        game: n,
                        className: U.activityIcon
                    }),
                    (0, r.jsx)(s.Text, {
                        className: U.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, d.Z)(n.name)
                    }),
                    a &&
                        (0, r.jsx)(G, {
                            channel: l,
                            focusedParticipant: i
                        })
                ]
            }));
    else if ((null == i ? void 0 : i.type) === M.fO.STREAM) {
        let e = i.user,
            n = i.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.ZP.Divider, { className: U.divider }),
                (0, r.jsx)(V, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: a ? 'header-primary' : 'none'
                }),
                a &&
                    (0, r.jsx)(G, {
                        channel: l,
                        focusedParticipant: i
                    })
            ]
        });
    } else
        u &&
            (t = (0, r.jsx)(y.Z, {
                guildEvent: o,
                recurrenceId: c
            }));
    return (0, r.jsx)('div', {
        className: U.container,
        children: t
    });
}
function W(e) {
    let { channel: t, guild: l, appContext: c, inCall: u, isChatOpen: d, exitFullScreen: g } = e,
        { focusedParticipant: b } = (0, o.cj)(
            [Z.Z],
            () => ({
                focusedParticipant: Z.Z.getSelectedParticipant(t.id),
                participantsOpen: Z.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        _ = i.useContext(P.h9),
        y = (0, f.ZP)(t),
        S = (0, m.KS)(t),
        [I] = (0, p.Z)((null == b ? void 0 : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []),
        N = L.intl.string(L.t.BVZqJi);
    t.isDM() ? (N = L.intl.string(L.t.jN2DfX)) : t.isGroupDM() && (N = L.intl.string(L.t['e5y+go']));
    let w = (0, o.e7)([h.Z], () => h.Z.getChannelStatus(t)),
        D = t.isGuildVoice() && u && null != w && w.length > 0,
        G = (0, T.ZP)(t),
        V = D
            ? (0, r.jsx)(s.ua7, {
                  text: L.intl.string(L.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: G,
                  children: (e) =>
                      (0, r.jsxs)(
                          s.P3F,
                          H(F({}, e), {
                              className: a()(U.channelStatusClickable, { [U.hoverable]: G }),
                              onClick: G ? W : void 0,
                              children: [
                                  (0, r.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      className: a()(U.channelStatus, B.markup, { [U.hoverable]: G }),
                                      children: j.Z.parseVoiceChannelStatus(w, !0, { channelId: t.id })
                                  }),
                                  G &&
                                      (0, r.jsx)(s.vdY, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: a()(U.pencilIcon, U.hoverable),
                                          width: 14,
                                          height: 14
                                      })
                              ]
                          })
                      )
              })
            : null;
    function W() {
        (0, s.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) => (0, r.jsx)(e, F({ channel: t }, n));
            },
            { modalKey: R.a }
        );
    }
    let Y = (0, E.m$)({ channelId: t.id });
    return (0, r.jsxs)('div', {
        className: U.subtitleContainer,
        children: [
            (0, r.jsx)(s.f6W, {
                theme: k.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(C.ZP, {
                        onDoubleClick: x.O,
                        transparent: !0,
                        showToolbar: !_,
                        className: e,
                        childrenBottom: V,
                        toolbar: (0, r.jsx)(A.Z, {
                            channel: t,
                            appContext: c,
                            inCall: u,
                            isChatOpen: d,
                            exitFullScreen: g
                        }),
                        children: [
                            null != S
                                ? (0, r.jsx)(C.ZP.ChannelIcon, {
                                      icon: S,
                                      'aria-label': N
                                  })
                                : null,
                            (0, r.jsx)(C.ZP.Title, {
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        y,
                                        Y &&
                                            (0, r.jsx)(s.ua7, {
                                                text: L.intl.string(L.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        s.tQf,
                                                        H(F({}, e), {
                                                            size: 'xs',
                                                            'aria-label': L.intl.string(L.t.VHXh8f),
                                                            color: s.TVs.colors.INTERACTIVE_NORMAL,
                                                            className: U.secureFramesIcon
                                                        })
                                                    )
                                            })
                                    ]
                                })
                            }),
                            (0, r.jsx)(v.TS, {
                                channel: t,
                                guild: l
                            }),
                            (0, r.jsx)(z, {
                                focusedApplication: I,
                                focusedParticipant: b,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, r.jsx)(O.Z, { channelId: t.id })
        ]
    });
}
