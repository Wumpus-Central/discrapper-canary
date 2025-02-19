n.d(t, { Z: () => G }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(481060),
    s = n(99690),
    c = n(40851),
    u = n(657305),
    d = n(835473),
    p = n(12498),
    h = n(933557),
    f = n(471445),
    m = n(925329),
    g = n(554747),
    b = n(854698),
    _ = n(897669),
    C = n(665149),
    v = n(984370),
    y = n(910611),
    x = n(454585),
    j = n(134483),
    O = n(210975),
    N = n(809244),
    E = n(618158),
    P = n(358221),
    I = n(362721),
    S = n(887012),
    Z = n(613548),
    T = n(221888),
    A = n(339340),
    w = n(354459),
    R = n(981631),
    k = n(231338),
    M = n(388032),
    L = n(767789),
    D = n(368365);
function W(e) {
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
function U(e, t) {
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
function B(e) {
    let { focusedParticipant: t, channel: n } = e,
        i = (0, c.bp)(),
        l = (0, o.e7)([P.Z], () => P.Z.getLayout(n.id, i));
    return (0, r.jsx)(E.Z, {
        children: (0, r.jsx)(T.Z, {
            className: L.participants,
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: i === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN
        })
    });
}
function F(e) {
    let { user: t, channel: n, stream: i, color: l } = e,
        o = (0, N.Z)(n, t, i);
    return null == t || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      className: L.avatar,
                      size: a.EFr.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, r.jsx)(a.Text, {
                      className: L.playingText,
                      variant: 'text-md/medium',
                      color: l,
                      children: o
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: i, channel: l } = e,
        o = (0, S.Z)(l, !0),
        s = (0, g.qY)(l.id),
        c = null != s ? (0, b.DK)(s) : null,
        d = null != s;
    if ((null == i ? void 0 : i.type) === w.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(C.ZP.Divider, { className: L.divider }),
                    (0, r.jsx)(m.Z, {
                        game: n,
                        className: L.activityIcon
                    }),
                    (0, r.jsx)(a.Text, {
                        className: L.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, u.Z)(n.name)
                    }),
                    o &&
                        (0, r.jsx)(B, {
                            channel: l,
                            focusedParticipant: i
                        })
                ]
            }));
    else if ((null == i ? void 0 : i.type) === w.fO.STREAM) {
        let e = i.user,
            n = i.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(C.ZP.Divider, { className: L.divider }),
                (0, r.jsx)(F, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: o ? 'header-primary' : 'none'
                }),
                o &&
                    (0, r.jsx)(B, {
                        channel: l,
                        focusedParticipant: i
                    })
            ]
        });
    } else
        d &&
            (t = (0, r.jsx)(_.Z, {
                guildEvent: s,
                recurrenceId: c
            }));
    return (0, r.jsx)('div', {
        className: L.container,
        children: t
    });
}
function G(e) {
    let { channel: t, guild: i, appContext: s, inCall: c, isChatOpen: u, exitFullScreen: m } = e,
        { focusedParticipant: g } = (0, o.cj)(
            [P.Z],
            () => ({
                focusedParticipant: P.Z.getSelectedParticipant(t.id),
                participantsOpen: P.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        b = (0, h.ZP)(t),
        _ = (0, f.KS)(t),
        [N] = (0, d.Z)((null == g ? void 0 : g.type) === w.fO.ACTIVITY ? [g.applicationId] : []),
        E = M.NW.string(M.t.BVZqJi);
    t.isDM() ? (E = M.NW.string(M.t.jN2DfX)) : t.isGroupDM() && (E = M.NW.string(M.t['e5y+go']));
    let S = (0, o.e7)([p.Z], () => p.Z.getChannelStatus(t)),
        T = t.isGuildVoice() && c && null != S && S.length > 0,
        B = (0, I.ZP)(t),
        F = T
            ? (0, r.jsx)(a.ua7, {
                  text: M.NW.string(M.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: B,
                  children: (e) =>
                      (0, r.jsxs)(
                          a.P3F,
                          U(W({}, e), {
                              className: l()(L.channelStatusClickable, { [L.hoverable]: B }),
                              onClick: B ? G : void 0,
                              children: [
                                  (0, r.jsx)(a.Text, {
                                      variant: 'text-xs/normal',
                                      className: l()(L.channelStatus, D.markup, { [L.hoverable]: B }),
                                      children: x.Z.parseVoiceChannelStatus(S, !0, { channelId: t.id })
                                  }),
                                  B &&
                                      (0, r.jsx)(a.vdY, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: l()(L.pencilIcon, L.hoverable),
                                          width: 14,
                                          height: 14
                                      })
                              ]
                          })
                      )
              })
            : null;
    function G() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) => (0, r.jsx)(e, W({ channel: t }, n));
            },
            { modalKey: A.a }
        );
    }
    let V = (0, O.m$)({
        channelId: t.id,
        location: 'ChannelCallHeader'
    });
    return (0, r.jsxs)('div', {
        className: L.subtitleContainer,
        children: [
            (0, r.jsx)(a.f6W, {
                theme: k.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(C.ZP, {
                        onDoubleClick: v.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: F,
                        toolbar: (0, r.jsx)(Z.Z, {
                            inPopout: s === R.IlC.POPOUT,
                            channel: t,
                            appContext: s,
                            inCall: c,
                            isChatOpen: u,
                            exitFullScreen: m
                        }),
                        children: [
                            null != _
                                ? (0, r.jsx)(C.ZP.Icon, {
                                      icon: _,
                                      disabled: !0,
                                      'aria-label': E
                                  })
                                : null,
                            (0, r.jsx)(C.ZP.Title, {
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        b,
                                        V &&
                                            (0, r.jsx)(a.ua7, {
                                                text: M.NW.string(M.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        a.tQf,
                                                        U(W({}, e), {
                                                            size: 'xs',
                                                            'aria-label': M.NW.string(M.t.VHXh8f),
                                                            color: a.TVs.colors.INTERACTIVE_NORMAL,
                                                            className: L.secureFramesIcon
                                                        })
                                                    )
                                            })
                                    ]
                                })
                            }),
                            (0, r.jsx)(y.TS, {
                                channel: t,
                                guild: i
                            }),
                            (0, r.jsx)(H, {
                                focusedApplication: N,
                                focusedParticipant: g,
                                channel: t
                            })
                        ]
                    })
            }),
            (0, r.jsx)(j.Z, { channelId: t.id })
        ]
    });
}
