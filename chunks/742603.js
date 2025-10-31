n.d(t, { Z: () => H }), n(388685);
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    o = n(28664),
    s = n(481060),
    c = n(99690),
    u = n(657305),
    d = n(835473),
    p = n(12498),
    f = n(933557),
    h = n(471445),
    m = n(925329),
    g = n(554747),
    b = n(954313),
    _ = n(897669),
    y = n(665149),
    C = n(984370),
    v = n(910611),
    O = n(728285),
    x = n(454585),
    E = n(134483),
    j = n(210975),
    S = n(809244),
    P = n(618158),
    I = n(358221),
    Z = n(362721),
    T = n(887012),
    N = n(613548),
    A = n(221888),
    w = n(339340),
    M = n(354459),
    R = n(981631),
    D = n(231338),
    L = n(388032),
    k = n(39219),
    U = n(430864);
function B(e) {
    let { focusedParticipant: t, channel: n } = e,
        i = (0, O.bp)(),
        l = (0, a.e7)([I.Z], () => I.Z.getLayout(n.id, i));
    return (0, r.jsx)(P.Z, {
        children: (0, r.jsx)(A.Z, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: i === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN,
        }),
    });
}
function F(e) {
    let { user: t, channel: n, stream: i, color: l } = e,
        a = (0, S.Z)(n, t, i);
    return null == t || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: k.avatar,
                      size: s.EFr.SIZE_24,
                      user: t,
                      animate: !1,
                  }),
                  (0, r.jsx)(s.Text, {
                      className: k.playingText,
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
        a = (0, T.Z)(l, !0),
        o = (0, g.qY)(l.id),
        c = null != o ? (0, b.DK)(o) : null,
        d = null != o;
    if ((null == i ? void 0 : i.type) === M.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.ZP.Divider, { className: k.divider }),
                    (0, r.jsx)(m.Z, {
                        game: n,
                        className: k.activityIcon,
                    }),
                    (0, r.jsx)(s.Text, {
                        className: k.playingText,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, u.Z)(n.name),
                    }),
                    a &&
                        (0, r.jsx)(B, {
                            channel: l,
                            focusedParticipant: i,
                        }),
                ],
            }));
    else if ((null == i ? void 0 : i.type) === M.fO.STREAM) {
        let e = i.user,
            n = i.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.ZP.Divider, { className: k.divider }),
                (0, r.jsx)(F, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: a ? "header-primary" : "none",
                }),
                a &&
                    (0, r.jsx)(B, {
                        channel: l,
                        focusedParticipant: i,
                    }),
            ],
        });
    } else
        d &&
            (t = (0, r.jsx)(_.Z, {
                guildEvent: o,
                recurrenceId: c,
            }));
    return (0, r.jsx)("div", {
        className: k.container,
        children: t,
    });
}
function H(e) {
    let { channel: t, guild: i, appContext: c, inCall: u, isChatOpen: m, exitFullScreen: g } = e,
        { focusedParticipant: b } = (0, a.cj)(
            [I.Z],
            () => ({
                focusedParticipant: I.Z.getSelectedParticipant(t.id),
                participantsOpen: I.Z.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        _ = (0, f.ZP)(t),
        O = (0, h.KS)(t),
        [S] = (0, d.Z)((null == b ? void 0 : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []),
        P = L.intl.string(L.t.BVZqJl);
    t.isDM() ? (P = L.intl.string(L.t.jN2DfZ)) : t.isGroupDM() && (P = L.intl.string(L.t["e5y+gm"]));
    let T = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
        A = t.isGuildVoice() && u && null != T && T.length > 0,
        R = (0, Z.ZP)(t),
        B = A
            ? (0, r.jsx)(o.u, {
                  asContainer: !0,
                  text: L.intl.string(L.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: R,
                  children: (0, r.jsxs)(s.P3F, {
                      className: l()(k.channelStatusClickable, { [k.hoverable]: R }),
                      onClick: R
                          ? function () {
                                (0, s.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
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
                                                })({ channel: t }, n),
                                            );
                                    },
                                    { modalKey: w.a },
                                );
                            }
                          : void 0,
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              className: l()(k.channelStatus, U.markup, { [k.hoverable]: R }),
                              children: x.Z.parseVoiceChannelStatus(T, !0, { channelId: t.id }),
                          }),
                          R &&
                              (0, r.jsx)(s.vdY, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: l()(k.pencilIcon, k.hoverable),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        F = (0, j.m$)({ channelId: t.id });
    return (0, r.jsxs)("div", {
        className: k.subtitleContainer,
        children: [
            (0, r.jsx)(s.f6W, {
                theme: D.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(y.ZP, {
                        onDoubleClick: C.O,
                        transparent: !0,
                        className: l()(e, k.headerBar),
                        innerClassName: k.headerBarChildren,
                        toolbarClassName: k.toolbar,
                        childrenBottom: B,
                        toolbar: (0, r.jsx)(N.Z, {
                            channel: t,
                            appContext: c,
                            inCall: u,
                            isChatOpen: m,
                            exitFullScreen: g,
                        }),
                        children: [
                            (0, r.jsx)(y.ZP.Title, {
                                wrapperClassName: k.title,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != O
                                            ? (0, r.jsx)(y.ZP.ChannelIcon, {
                                                  icon: O,
                                                  "aria-label": P,
                                              })
                                            : null,
                                        _,
                                        F &&
                                            (0, r.jsx)(o.u, {
                                                text: L.intl.string(L.t.QyZ4Td),
                                                children: (0, r.jsx)(s.tQf, {
                                                    size: "xs",
                                                    "aria-label": L.intl.string(L.t.VHXh8a),
                                                    color: s.TVs.colors.INTERACTIVE_NORMAL,
                                                    className: k.secureFramesIcon,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(v.TS, {
                                channel: t,
                                guild: i,
                            }),
                            (0, r.jsx)(V, {
                                focusedApplication: S,
                                focusedParticipant: b,
                                channel: t,
                            }),
                        ],
                    }),
            }),
            (0, r.jsx)(E.Z, { channelId: t.id }),
        ],
    });
}
