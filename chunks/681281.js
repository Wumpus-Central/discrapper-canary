n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(990078),
    c = n(778712),
    d = n(834730),
    u = n(548411),
    p = n(939249),
    h = n(22231),
    m = n(192308),
    A = n(254138),
    x = n(661531),
    g = n(730134),
    f = n(440594),
    C = n(429913),
    y = n(47167),
    E = n(882840),
    N = n(713654),
    v = n(611371),
    j = n(769015),
    I = n(408822),
    T = n(360729),
    _ = n(508654),
    S = n(647090),
    R = n(961314),
    P = n(58736),
    b = n(742589),
    O = n(376352),
    L = n(353428),
    D = n(46054),
    M = n(527549),
    w = n(665691),
    U = n(241756),
    V = n(313961),
    k = n(532622),
    B = n(416528),
    H = n(136523),
    G = n(806931),
    F = n(375708),
    z = n(662731),
    W = n(82644),
    Y = n(992595);
function K(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, U.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.A, { className: W.my, size: c._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(d.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function X(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, _.Qs)(a.id),
        r = null != s ? (0, S.G3)(s) : null,
        o = null != s;
    if (l?.type === G.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(P.Ay.Divider, { className: W.yF }),
                    (0, i.jsx)(j.A, { game: n, className: W.RI }),
                    (0, i.jsx)(d.E, {
                        className: W.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, f.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === G.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(P.Ay.Divider, { className: W.yF }),
                (0, i.jsx)(K, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(O.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(R.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: W.kL, children: t });
}
function Z(e) {
    let { channel: t, guild: a, appContext: c, inCall: g, isChatOpen: f, exitFullScreen: j, guildRoomVisible: _ } = e,
        { focusedParticipant: S } = (0, r.cf)(
            [V.A],
            () => ({
                focusedParticipant: V.A.getSelectedParticipant(t.id),
                participantsOpen: V.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        { enabled: R } = T.A.useExperiment({ guildId: a?.id, location: "ChannelCallHeader" }),
        O = R && !_,
        U = (0, y.Ay)(t),
        K = O ? F.intl.string(z.default.f7g0DK) : _ ? `${U} \xb7 ${F.intl.string(z.default.wRLmM0)}` : U,
        Z = O ? u.Z : (0, N.gU)(t),
        [q] = (0, C.A)(S?.type === G.lp.ACTIVITY ? [S.applicationId] : []),
        $ = F.intl.string(F.t.BVZqJl);
    t.isDM() ? ($ = F.intl.string(F.t.jN2DfZ)) : t.isGroupDM() && ($ = F.intl.string(F.t["e5y+gm"]));
    let Q = (0, E.l)(t),
        J = t.isGuildVoice() && g && null != Q && Q.length > 0,
        ee = (0, k.Ay)(t),
        et = J
            ? (0, i.jsx)("div", {
                  className: W.Ke,
                  children: (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: F.intl.string(F.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: ee,
                      children: (0, i.jsxs)(p.D, {
                          className: s()(W.WH, { [W.BI]: ee }),
                          onClick: ee
                              ? function () {
                                    (0, m.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: H.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  className: s()(W.Gh, Y.PT, { [W.BI]: ee }),
                                  children: D.A.parseVoiceChannelStatus(Q, !0, { channelId: t.id }),
                              }),
                              ee &&
                                  (0, i.jsx)(h.R, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: s()(W.rD, W.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        en = (0, w.bG)({ channelId: t.id }),
        ei = l.useCallback(() => {
            O && (0, I.zD)(t.id);
        }, [O, t.id]);
    return (0, i.jsxs)("div", {
        className: W.SC,
        children: [
            (0, i.jsxs)(P.Ay, {
                onDoubleClick: b.I,
                transparent: !0,
                className: W.jr,
                innerClassName: W.gi,
                toolbarClassName: W.KE,
                childrenBottom: et,
                toolbar: (0, i.jsx)(B.A, {
                    channel: t,
                    appContext: c,
                    inCall: g,
                    isChatOpen: f,
                    exitFullScreen: j,
                    focusedApplication: q,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: _,
                }),
                children: [
                    (0, i.jsx)(P.Ay.Title, {
                        wrapperClassName: W.DD,
                        onClick: O ? ei : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != Z
                                    ? (0, i.jsx)(P.Ay.ChannelIcon, {
                                          icon: Z,
                                          "aria-label": $,
                                          color: O ? "white" : void 0,
                                      })
                                    : null,
                                K,
                                R && (0, i.jsx)(v.A, { className: W.vW }),
                                en &&
                                    (0, i.jsx)(o.m, {
                                        text: F.intl.string(F.t.QyZ4Td),
                                        children: (0, i.jsx)(A.m, {
                                            size: "xs",
                                            "aria-label": F.intl.string(F.t.VHXh8a),
                                            color: x.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: W.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(L.i$, { channel: t, guild: a }),
                    (0, i.jsx)(X, { focusedApplication: q, focusedParticipant: S, channel: t }),
                ],
            }),
            (0, i.jsx)(M.A, { channelId: t.id }),
        ],
    });
}
