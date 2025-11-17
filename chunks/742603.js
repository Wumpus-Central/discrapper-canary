n.d(t, { Z: () => V }), n(388685);
var i = n(54381);
n(473749);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(28664),
    s = n(481060),
    c = n(99690),
    u = n(657305),
    d = n(835473),
    p = n(12498),
    h = n(933557),
    f = n(471445),
    m = n(925329),
    g = n(554747),
    b = n(854698),
    y = n(897669),
    C = n(665149),
    v = n(984370),
    _ = n(910611),
    x = n(728285),
    j = n(454585),
    O = n(134483),
    E = n(210975),
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
    L = n(231338),
    k = n(388032),
    D = n(39219),
    U = n(430864);
function B(e) {
    let { focusedParticipant: t, channel: n } = e,
        r = (0, x.bp)(),
        l = (0, a.e7)([I.Z], () => I.Z.getLayout(n.id, r));
    return (0, i.jsx)(P.Z, {
        children: (0, i.jsx)(A.Z, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: r === R.IlC.POPOUT || l === R.AEg.FULL_SCREEN,
        }),
    });
}
function H(e) {
    let { user: t, channel: n, stream: r, color: l } = e,
        a = (0, S.Z)(n, t, r);
    return null == t || null == r
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.Z, {
                      className: D.avatar,
                      size: s.EFr.SIZE_24,
                      user: t,
                      animate: !1,
                  }),
                  (0, i.jsx)(s.Text, {
                      className: D.playingText,
                      variant: "text-md/medium",
                      color: l,
                      children: a,
                  }),
              ],
          });
}
function F(e) {
    let t,
        { focusedApplication: n, focusedParticipant: r, channel: l } = e,
        a = (0, T.Z)(l, !0),
        o = (0, g.qY)(l.id),
        c = null != o ? (0, b.DK)(o) : null,
        d = null != o;
    if ((null == r ? void 0 : r.type) === M.fO.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(C.ZP.Divider, { className: D.divider }),
                    (0, i.jsx)(m.Z, {
                        game: n,
                        className: D.activityIcon,
                    }),
                    (0, i.jsx)(s.Text, {
                        className: D.playingText,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, u.Z)(n.name),
                    }),
                    a &&
                        (0, i.jsx)(B, {
                            channel: l,
                            focusedParticipant: r,
                        }),
                ],
            }));
    else if ((null == r ? void 0 : r.type) === M.fO.STREAM) {
        let e = r.user,
            n = r.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(C.ZP.Divider, { className: D.divider }),
                (0, i.jsx)(H, {
                    user: e,
                    channel: l,
                    stream: n,
                    color: a ? "header-primary" : "none",
                }),
                a &&
                    (0, i.jsx)(B, {
                        channel: l,
                        focusedParticipant: r,
                    }),
            ],
        });
    } else
        d &&
            (t = (0, i.jsx)(y.Z, {
                guildEvent: o,
                recurrenceId: c,
            }));
    return (0, i.jsx)("div", {
        className: D.container,
        children: t,
    });
}
function V(e) {
    let { channel: t, guild: r, appContext: c, inCall: u, isChatOpen: m, exitFullScreen: g } = e,
        { focusedParticipant: b } = (0, a.cj)(
            [I.Z],
            () => ({
                focusedParticipant: I.Z.getSelectedParticipant(t.id),
                participantsOpen: I.Z.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        y = (0, h.ZP)(t),
        x = (0, f.KS)(t),
        [S] = (0, d.Z)((null == b ? void 0 : b.type) === M.fO.ACTIVITY ? [b.applicationId] : []),
        P = k.intl.string(k.t.BVZqJl);
    t.isDM() ? (P = k.intl.string(k.t.jN2DfZ)) : t.isGroupDM() && (P = k.intl.string(k.t["e5y+gm"]));
    let T = (0, a.e7)([p.Z], () => p.Z.getChannelStatus(t)),
        A = t.isGuildVoice() && u && null != T && T.length > 0,
        R = (0, Z.ZP)(t),
        B = A
            ? (0, i.jsx)(o.u, {
                  asContainer: !0,
                  text: k.intl.string(k.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: R,
                  children: (0, i.jsxs)(s.P3F, {
                      className: l()(D.channelStatusClickable, { [D.hoverable]: R }),
                      onClick: R
                          ? function () {
                                (0, s.ZDy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                                        return (n) =>
                                            (0, i.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            i = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (i = i.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            i.forEach(function (t) {
                                                                var i;
                                                                (i = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: i,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = i);
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
                          (0, i.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              className: l()(D.channelStatus, U.markup, { [D.hoverable]: R }),
                              children: j.Z.parseVoiceChannelStatus(T, !0, { channelId: t.id }),
                          }),
                          R &&
                              (0, i.jsx)(s.vdY, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: l()(D.pencilIcon, D.hoverable),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        H = (0, E.m$)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: D.subtitleContainer,
        children: [
            (0, i.jsx)(s.f6W, {
                theme: L.BR.DARK,
                children: (e) =>
                    (0, i.jsxs)(C.ZP, {
                        onDoubleClick: v.O,
                        transparent: !0,
                        className: l()(e, D.headerBar),
                        innerClassName: D.headerBarChildren,
                        toolbarClassName: D.toolbar,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(N.Z, {
                            channel: t,
                            appContext: c,
                            inCall: u,
                            isChatOpen: m,
                            exitFullScreen: g,
                        }),
                        children: [
                            (0, i.jsx)(C.ZP.Title, {
                                wrapperClassName: D.title,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != x
                                            ? (0, i.jsx)(C.ZP.ChannelIcon, {
                                                  icon: x,
                                                  "aria-label": P,
                                              })
                                            : null,
                                        y,
                                        H &&
                                            (0, i.jsx)(o.u, {
                                                text: k.intl.string(k.t.QyZ4Td),
                                                children: (0, i.jsx)(s.tQf, {
                                                    size: "xs",
                                                    "aria-label": k.intl.string(k.t.VHXh8a),
                                                    color: s.TVs.colors.INTERACTIVE_NORMAL,
                                                    className: D.secureFramesIcon,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(_.TS, {
                                channel: t,
                                guild: r,
                            }),
                            (0, i.jsx)(F, {
                                focusedApplication: S,
                                focusedParticipant: b,
                                channel: t,
                            }),
                        ],
                    }),
            }),
            (0, i.jsx)(O.Z, { channelId: t.id }),
        ],
    });
}
