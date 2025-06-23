n.d(t, { Z: () => V }), n(388685);
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
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
    y = n(665149),
    C = n(984370),
    x = n(910611),
    v = n(454585),
    j = n(134483),
    O = n(210975),
    E = n(809244),
    I = n(618158),
    P = n(358221),
    S = n(362721),
    Z = n(887012),
    N = n(613548),
    T = n(221888),
    A = n(339340),
    w = n(354459),
    R = n(981631),
    M = n(231338),
    k = n(388032),
    L = n(610633),
    D = n(73433);
function U(e) {
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
function B(e, t) {
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
function F(e) {
    let { focusedParticipant: t, channel: n } = e,
        i = (0, c.bp)(),
        l = (0, a.e7)([P.Z], () => P.Z.getLayout(n.id, i));
    return (0, r.jsx)(I.Z, {
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
function G(e) {
    let { user: t, channel: n, stream: i, color: l } = e,
        a = (0, E.Z)(n, t, i);
    return null == t || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(s.Z, {
                      className: L.avatar,
                      size: o.EFr.SIZE_24,
                      user: t,
                      animate: !1
                  }),
                  (0, r.jsx)(o.Text, {
                      className: L.playingText,
                      variant: 'text-md/medium',
                      color: l,
                      children: a
                  })
              ]
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: i, channel: l } = e,
        a = (0, Z.Z)(l, !0),
        s = (0, g.qY)(l.id),
        c = null != s ? (0, b.DK)(s) : null,
        d = null != s;
    if ((null == i ? void 0 : i.type) === w.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.ZP.Divider, { className: L.divider }),
                    (0, r.jsx)(m.Z, {
                        game: n,
                        className: L.activityIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        className: L.playingText,
                        variant: 'text-md/normal',
                        color: 'none',
                        children: (0, u.Z)(n.name)
                    }),
                    a &&
                        (0, r.jsx)(F, {
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
                (0, r.jsx)(y.ZP.Divider, { className: L.divider }),
                (0, r.jsx)(G, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: a ? 'header-primary' : 'none'
                }),
                a &&
                    (0, r.jsx)(F, {
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
function V(e) {
    let { channel: t, guild: i, appContext: s, inCall: c, isChatOpen: u, exitFullScreen: m } = e,
        { focusedParticipant: g } = (0, a.cj)(
            [P.Z],
            () => ({
                focusedParticipant: P.Z.getSelectedParticipant(t.id),
                participantsOpen: P.Z.getParticipantsOpen(t.id)
            }),
            [t.id]
        ),
        b = (0, h.ZP)(t),
        _ = (0, f.KS)(t),
        [E] = (0, d.Z)((null == g ? void 0 : g.type) === w.fO.ACTIVITY ? [g.applicationId] : []),
        I = k.intl.string(k.t.BVZqJi);
    t.isDM() ? (I = k.intl.string(k.t.jN2DfX)) : t.isGroupDM() && (I = k.intl.string(k.t['e5y+go']));
    let Z = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
        T = t.isGuildVoice() && c && null != Z && Z.length > 0,
        F = (0, S.ZP)(t),
        G = T
            ? (0, r.jsx)(o.ua7, {
                  text: k.intl.string(k.t.Mgpxi4),
                  delay: 500,
                  position: 'bottom',
                  shouldShow: F,
                  children: (e) =>
                      (0, r.jsxs)(
                          o.P3F,
                          B(U({}, e), {
                              className: l()(L.channelStatusClickable, { [L.hoverable]: F }),
                              onClick: F ? V : void 0,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: 'text-xs/normal',
                                      className: l()(L.channelStatus, D.markup, { [L.hoverable]: F }),
                                      children: v.Z.parseVoiceChannelStatus(Z, !0, { channelId: t.id })
                                  }),
                                  F &&
                                      (0, r.jsx)(o.vdY, {
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
    function V() {
        (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) => (0, r.jsx)(e, U({ channel: t }, n));
            },
            { modalKey: A.a }
        );
    }
    let z = (0, O.m$)({ channelId: t.id });
    return (0, r.jsxs)('div', {
        className: L.subtitleContainer,
        children: [
            (0, r.jsx)(o.f6W, {
                theme: M.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(y.ZP, {
                        onDoubleClick: C.O,
                        transparent: !0,
                        className: e,
                        childrenBottom: G,
                        toolbar: (0, r.jsx)(N.Z, {
                            inPopout: s === R.IlC.POPOUT,
                            channel: t,
                            appContext: s,
                            inCall: c,
                            isChatOpen: u,
                            exitFullScreen: m
                        }),
                        children: [
                            null != _
                                ? (0, r.jsx)(y.ZP.Icon, {
                                      icon: _,
                                      disabled: !0,
                                      'aria-label': I
                                  })
                                : null,
                            (0, r.jsx)(y.ZP.Title, {
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        b,
                                        z &&
                                            (0, r.jsx)(o.ua7, {
                                                text: k.intl.string(k.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        o.tQf,
                                                        B(U({}, e), {
                                                            size: 'xs',
                                                            'aria-label': k.intl.string(k.t.VHXh8f),
                                                            color: o.TVs.colors.INTERACTIVE_NORMAL,
                                                            className: L.secureFramesIcon
                                                        })
                                                    )
                                            })
                                    ]
                                })
                            }),
                            (0, r.jsx)(x.TS, {
                                channel: t,
                                guild: i
                            }),
                            (0, r.jsx)(H, {
                                focusedApplication: E,
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
