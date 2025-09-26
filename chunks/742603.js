n.d(t, { Z: () => G }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(481060),
    s = n(99690),
    c = n(657305),
    u = n(835473),
    d = n(12498),
    p = n(933557),
    h = n(471445),
    f = n(925329),
    m = n(554747),
    g = n(954313),
    b = n(897669),
    y = n(665149),
    C = n(984370),
    _ = n(910611),
    v = n(728285),
    x = n(454585),
    O = n(134483),
    j = n(210975),
    E = n(809244),
    S = n(618158),
    P = n(358221),
    I = n(362721),
    Z = n(887012),
    T = n(613548),
    N = n(221888),
    A = n(339340),
    w = n(354459),
    M = n(981631),
    R = n(231338),
    k = n(388032),
    L = n(39219),
    D = n(430864);
function U(e) {
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
        i = (0, v.bp)(),
        l = (0, a.e7)([P.Z], () => P.Z.getLayout(n.id, i));
    return (0, r.jsx)(S.Z, {
        children: (0, r.jsx)(N.Z, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: i === M.IlC.POPOUT || l === M.AEg.FULL_SCREEN,
        }),
    });
}
function H(e) {
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
                      animate: !1,
                  }),
                  (0, r.jsx)(o.Text, {
                      className: L.playingText,
                      variant: "text-md/medium",
                      color: l,
                      children: a,
                  }),
              ],
          });
}
function V(e) {
    let t,
        { focusedApplication: n, focusedParticipant: i, channel: l } = e,
        a = (0, Z.Z)(l, !0),
        s = (0, m.qY)(l.id),
        u = null != s ? (0, g.DK)(s) : null,
        d = null != s;
    if ((null == i ? void 0 : i.type) === w.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.ZP.Divider, { className: L.divider }),
                    (0, r.jsx)(f.Z, {
                        game: n,
                        className: L.activityIcon,
                    }),
                    (0, r.jsx)(o.Text, {
                        className: L.playingText,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.Z)(n.name),
                    }),
                    a &&
                        (0, r.jsx)(F, {
                            channel: l,
                            focusedParticipant: i,
                        }),
                ],
            }));
    else if ((null == i ? void 0 : i.type) === w.fO.STREAM) {
        let e = i.user,
            n = i.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.ZP.Divider, { className: L.divider }),
                (0, r.jsx)(H, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: a ? "header-primary" : "none",
                }),
                a &&
                    (0, r.jsx)(F, {
                        channel: l,
                        focusedParticipant: i,
                    }),
            ],
        });
    } else
        d &&
            (t = (0, r.jsx)(b.Z, {
                guildEvent: s,
                recurrenceId: u,
            }));
    return (0, r.jsx)("div", {
        className: L.container,
        children: t,
    });
}
function G(e) {
    let { channel: t, guild: i, appContext: s, inCall: c, isChatOpen: f, exitFullScreen: m } = e,
        { focusedParticipant: g } = (0, a.cj)(
            [P.Z],
            () => ({
                focusedParticipant: P.Z.getSelectedParticipant(t.id),
                participantsOpen: P.Z.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        b = (0, p.ZP)(t),
        v = (0, h.KS)(t),
        [E] = (0, u.Z)((null == g ? void 0 : g.type) === w.fO.ACTIVITY ? [g.applicationId] : []),
        S = k.intl.string(k.t.BVZqJi);
    t.isDM() ? (S = k.intl.string(k.t.jN2DfX)) : t.isGroupDM() && (S = k.intl.string(k.t["e5y+go"]));
    let Z = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        N = t.isGuildVoice() && c && null != Z && Z.length > 0,
        M = (0, I.ZP)(t),
        F = N
            ? (0, r.jsx)(o.ua7, {
                  text: k.intl.string(k.t.Mgpxi4),
                  delay: 500,
                  position: "bottom",
                  shouldShow: M,
                  children: (e) =>
                      (0, r.jsxs)(
                          o.P3F,
                          B(U({}, e), {
                              className: l()(L.channelStatusClickable, { [L.hoverable]: M }),
                              onClick: M ? H : void 0,
                              children: [
                                  (0, r.jsx)(o.Text, {
                                      variant: "text-xs/normal",
                                      className: l()(L.channelStatus, D.markup, { [L.hoverable]: M }),
                                      children: x.Z.parseVoiceChannelStatus(Z, !0, { channelId: t.id }),
                                  }),
                                  M &&
                                      (0, r.jsx)(o.vdY, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: l()(L.pencilIcon, L.hoverable),
                                          width: 14,
                                          height: 14,
                                      }),
                              ],
                          }),
                      ),
              })
            : null;
    function H() {
        (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) => (0, r.jsx)(e, U({ channel: t }, n));
            },
            { modalKey: A.a },
        );
    }
    let G = (0, j.m$)({ channelId: t.id });
    return (0, r.jsxs)("div", {
        className: L.subtitleContainer,
        children: [
            (0, r.jsx)(o.f6W, {
                theme: R.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(y.ZP, {
                        onDoubleClick: C.O,
                        transparent: !0,
                        className: l()(e, L.headerBar),
                        innerClassName: L.headerBarChildren,
                        toolbarClassName: L.toolbar,
                        childrenBottom: F,
                        toolbar: (0, r.jsx)(T.Z, {
                            channel: t,
                            appContext: s,
                            inCall: c,
                            isChatOpen: f,
                            exitFullScreen: m,
                        }),
                        children: [
                            (0, r.jsx)(y.ZP.Title, {
                                wrapperClassName: L.title,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != v
                                            ? (0, r.jsx)(y.ZP.ChannelIcon, {
                                                  icon: v,
                                                  "aria-label": S,
                                              })
                                            : null,
                                        b,
                                        G &&
                                            (0, r.jsx)(o.ua7, {
                                                text: k.intl.string(k.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        o.tQf,
                                                        B(U({}, e), {
                                                            size: "xs",
                                                            "aria-label": k.intl.string(k.t.VHXh8f),
                                                            color: o.TVs.colors.INTERACTIVE_NORMAL,
                                                            className: L.secureFramesIcon,
                                                        }),
                                                    ),
                                            }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(_.TS, {
                                channel: t,
                                guild: i,
                            }),
                            (0, r.jsx)(V, {
                                focusedApplication: E,
                                focusedParticipant: g,
                                channel: t,
                            }),
                        ],
                    }),
            }),
            (0, r.jsx)(O.Z, { channelId: t.id }),
        ],
    });
}
