n.d(t, { Z: () => q }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(99690),
    u = n(40851),
    d = n(657305),
    f = n(835473),
    _ = n(12498),
    p = n(933557),
    h = n(471445),
    m = n(925329),
    g = n(554747),
    E = n(854698),
    b = n(897669),
    y = n(665149),
    O = n(984370),
    v = n(910611),
    I = n(454585),
    T = n(134483),
    S = n(210975),
    A = n(809244),
    N = n(937995),
    C = n(618158),
    R = n(358221),
    P = n(362721),
    w = n(887012),
    D = n(613548),
    L = n(221888),
    x = n(339340),
    M = n(354459),
    k = n(981631),
    j = n(231338),
    U = n(388032),
    G = n(39219),
    B = n(430864);
function Z(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function F(e) {
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
                Z(e, t, n[t]);
            });
    }
    return e;
}
function V(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function H(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let Y = 5;
function W(e) {
    let { focusedParticipant: t, channel: n } = e,
        i = (0, u.bp)(),
        o = (0, s.e7)([R.Z], () => R.Z.getLayout(n.id, i));
    return (0, r.jsx)(C.Z, {
        children: (0, r.jsx)(L.Z, {
            participant: t,
            maxVisibleUsers: Y,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: i === k.IlC.POPOUT || o === k.AEg.FULL_SCREEN,
        }),
    });
}
function K(e) {
    let { user: t, channel: n, stream: i, color: o } = e,
        a = (0, A.Z)(n, t, i);
    return null == t || null == i
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.Z, {
                      className: G.avatar,
                      size: l.EFr.SIZE_24,
                      user: t,
                      animate: !1,
                  }),
                  (0, r.jsx)(l.Text, {
                      className: G.playingText,
                      variant: "text-md/medium",
                      color: o,
                      children: a,
                  }),
              ],
          });
}
function z(e) {
    let t,
        { focusedApplication: n, focusedParticipant: i, channel: o } = e,
        a = (0, w.Z)(o, !0),
        s = (0, g.qY)(o.id),
        c = null != s ? (0, E.DK)(s) : null,
        u = null != s;
    if ((null == i ? void 0 : i.type) === M.fO.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.ZP.Divider, { className: G.divider }),
                    (0, r.jsx)(m.Z, {
                        game: n,
                        className: G.activityIcon,
                    }),
                    (0, r.jsx)(l.Text, {
                        className: G.playingText,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, d.Z)(n.name),
                    }),
                    a &&
                        (0, r.jsx)(W, {
                            channel: o,
                            focusedParticipant: i,
                        }),
                ],
            }));
    else if ((null == i ? void 0 : i.type) === M.fO.STREAM) {
        let e = i.user,
            n = i.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.ZP.Divider, { className: G.divider }),
                (0, r.jsx)(K, {
                    user: e,
                    channel: o,
                    stream: n,
                    color: a ? "header-primary" : "none",
                }),
                a &&
                    (0, r.jsx)(W, {
                        channel: o,
                        focusedParticipant: i,
                    }),
            ],
        });
    } else
        u &&
            (t = (0, r.jsx)(b.Z, {
                guildEvent: s,
                recurrenceId: c,
            }));
    return (0, r.jsx)("div", {
        className: G.container,
        children: t,
    });
}
function q(e) {
    let { channel: t, guild: o, appContext: c, inCall: u, isChatOpen: d, exitFullScreen: m } = e,
        { focusedParticipant: g } = (0, s.cj)(
            [R.Z],
            () => ({
                focusedParticipant: R.Z.getSelectedParticipant(t.id),
                participantsOpen: R.Z.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        E = i.useContext(N.h9),
        b = (0, p.ZP)(t),
        A = (0, h.KS)(t),
        [C] = (0, f.Z)((null == g ? void 0 : g.type) === M.fO.ACTIVITY ? [g.applicationId] : []),
        w = U.intl.string(U.t.BVZqJi);
    t.isDM() ? (w = U.intl.string(U.t.jN2DfX)) : t.isGroupDM() && (w = U.intl.string(U.t["e5y+go"]));
    let L = (0, s.e7)([_.Z], () => _.Z.getChannelStatus(t)),
        k = t.isGuildVoice() && u && null != L && L.length > 0,
        Z = (0, P.ZP)(t),
        V = k
            ? (0, r.jsx)(l.ua7, {
                  text: U.intl.string(U.t.Mgpxi4),
                  delay: 500,
                  position: "bottom",
                  shouldShow: Z,
                  children: (e) =>
                      (0, r.jsxs)(
                          l.P3F,
                          H(F({}, e), {
                              className: a()(G.channelStatusClickable, { [G.hoverable]: Z }),
                              onClick: Z ? Y : void 0,
                              children: [
                                  (0, r.jsx)(l.Text, {
                                      variant: "text-xs/normal",
                                      className: a()(G.channelStatus, B.markup, { [G.hoverable]: Z }),
                                      children: I.Z.parseVoiceChannelStatus(L, !0, { channelId: t.id }),
                                  }),
                                  Z &&
                                      (0, r.jsx)(l.vdY, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: a()(G.pencilIcon, G.hoverable),
                                          width: 14,
                                          height: 14,
                                      }),
                              ],
                          }),
                      ),
              })
            : null;
    function Y() {
        (0, l.ZDy)(
            async () => {
                let { default: e } = await Promise.resolve().then(n.bind(n, 339340));
                return (n) => (0, r.jsx)(e, F({ channel: t }, n));
            },
            { modalKey: x.a },
        );
    }
    let W = (0, S.m$)({ channelId: t.id });
    return (0, r.jsxs)("div", {
        className: G.subtitleContainer,
        children: [
            (0, r.jsx)(l.f6W, {
                theme: j.BR.DARK,
                children: (e) =>
                    (0, r.jsxs)(y.ZP, {
                        onDoubleClick: O.O,
                        transparent: !0,
                        showToolbar: !E,
                        className: a()(e, G.headerBar),
                        innerClassName: G.headerBarChildren,
                        toolbarClassName: G.toolbar,
                        childrenBottom: V,
                        toolbar: (0, r.jsx)(D.Z, {
                            channel: t,
                            appContext: c,
                            inCall: u,
                            isChatOpen: d,
                            exitFullScreen: m,
                        }),
                        children: [
                            (0, r.jsx)(y.ZP.Title, {
                                wrapperClassName: G.title,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != A
                                            ? (0, r.jsx)(y.ZP.ChannelIcon, {
                                                  icon: A,
                                                  "aria-label": w,
                                              })
                                            : null,
                                        b,
                                        W &&
                                            (0, r.jsx)(l.ua7, {
                                                text: U.intl.string(U.t.QyZ4TU),
                                                children: (e) =>
                                                    (0, r.jsx)(
                                                        l.tQf,
                                                        H(F({}, e), {
                                                            size: "xs",
                                                            "aria-label": U.intl.string(U.t.VHXh8f),
                                                            color: l.TVs.colors.INTERACTIVE_NORMAL,
                                                            className: G.secureFramesIcon,
                                                        }),
                                                    ),
                                            }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(v.TS, {
                                channel: t,
                                guild: o,
                            }),
                            (0, r.jsx)(z, {
                                focusedApplication: C,
                                focusedParticipant: g,
                                channel: t,
                            }),
                        ],
                    }),
            }),
            (0, r.jsx)(T.Z, { channelId: t.id }),
        ],
    });
}
