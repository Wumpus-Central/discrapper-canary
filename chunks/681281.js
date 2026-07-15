n.d(t, { A: () => Q });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(990078),
    c = n(778712),
    d = n(834730),
    u = n(548411),
    h = n(939249),
    p = n(22231),
    m = n(192308),
    A = n(254138),
    x = n(661531),
    g = n(730134),
    f = n(440594),
    C = n(793574),
    j = n(429913),
    y = n(47167),
    v = n(882840),
    E = n(713654),
    N = n(611371),
    I = n(769015),
    T = n(208971),
    b = n(446243),
    _ = n(920639),
    S = n(360729),
    R = n(508654),
    P = n(974930),
    O = n(961314),
    L = n(58736),
    w = n(742589),
    D = n(376352),
    M = n(353428),
    U = n(46054),
    V = n(527549),
    k = n(665691),
    B = n(241756),
    G = n(313961),
    H = n(532622),
    F = n(416528),
    z = n(136523),
    W = n(806931),
    Y = n(375708),
    K = n(662731),
    X = n(82644),
    Z = n(992595);
function $(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, B.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(g.A, { className: X.my, size: c._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(d.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function q(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, R.Qs)(a.id),
        r = null != s ? (0, P.G3)(s) : null,
        o = null != s;
    if (l?.type === W.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(L.Ay.Divider, { className: X.yF }),
                    (0, i.jsx)(I.A, { game: n, className: X.RI }),
                    (0, i.jsx)(d.E, {
                        className: X.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, f.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === W.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(L.Ay.Divider, { className: X.yF }),
                (0, i.jsx)($, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(D.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(O.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: X.kL, children: t });
}
function Q(e) {
    let { channel: t, guild: a, appContext: c, inCall: g, isChatOpen: f, exitFullScreen: I, guildRoomVisible: R } = e,
        { focusedParticipant: P } = (0, r.cf)(
            [G.A],
            () => ({
                focusedParticipant: G.A.getSelectedParticipant(t.id),
                participantsOpen: G.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        { enabled: O } = S.A.useExperiment({ guildId: a?.id, location: "ChannelCallHeader" }),
        D = O && !R,
        B = (0, y.Ay)(t),
        $ = D ? Y.intl.string(K.default.f7g0DK) : R ? `${B} \xb7 ${Y.intl.string(K.default.wRLmM0)}` : B,
        Q = D ? u.Z : (0, E.gU)(t),
        [J] = (0, j.A)(P?.type === W.lp.ACTIVITY ? [P.applicationId] : []),
        ee = Y.intl.string(Y.t.BVZqJl);
    t.isDM() ? (ee = Y.intl.string(Y.t.jN2DfZ)) : t.isGroupDM() && (ee = Y.intl.string(Y.t["e5y+gm"]));
    let et = (0, T.G)((0, v.l)(t)),
        en = t.isGuildVoice() && g && null != et && et.length > 0,
        ei = (0, H.Ay)(t),
        el = en
            ? (0, i.jsx)("div", {
                  className: X.Ke,
                  children: (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: Y.intl.string(Y.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: ei,
                      children: (0, i.jsxs)(h.D, {
                          className: s()(X.WH, { [X.BI]: ei }),
                          onClick: ei
                              ? function () {
                                    (0, m.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: z.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  className: s()(X.Gh, Z.PT, { [X.BI]: ei }),
                                  children: U.A.parseVoiceChannelStatus(et, !0, { channelId: t.id }),
                              }),
                              ei &&
                                  (0, i.jsx)(p.R, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: s()(X.rD, X.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        ea = (0, k.bG)({ channelId: t.id }),
        es = l.useCallback(() => {
            D &&
                ((0, b.zD)(t.id),
                (0, _.yt)({ channelId: t.id, guildId: t.guild_id, location: C.A.CHANNEL_CALL, guildRoomOpen: !0 }));
        }, [D, t.id, t.guild_id]);
    return (0, i.jsxs)("div", {
        className: X.SC,
        children: [
            (0, i.jsxs)(L.Ay, {
                onDoubleClick: w.I,
                transparent: !0,
                className: X.jr,
                innerClassName: X.gi,
                toolbarClassName: X.KE,
                childrenBottom: el,
                toolbar: (0, i.jsx)(F.A, {
                    channel: t,
                    appContext: c,
                    inCall: g,
                    isChatOpen: f,
                    exitFullScreen: I,
                    focusedApplication: J,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: R,
                }),
                children: [
                    (0, i.jsx)(L.Ay.Title, {
                        wrapperClassName: X.DD,
                        onClick: D ? es : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != Q
                                    ? (0, i.jsx)(L.Ay.ChannelIcon, {
                                          icon: Q,
                                          "aria-label": ee,
                                          color: D ? "white" : void 0,
                                      })
                                    : null,
                                $,
                                O && (0, i.jsx)(N.A, { className: X.vW }),
                                ea &&
                                    (0, i.jsx)(o.m, {
                                        text: Y.intl.string(Y.t.QyZ4Td),
                                        children: (0, i.jsx)(A.m, {
                                            size: "xs",
                                            "aria-label": Y.intl.string(Y.t.VHXh8a),
                                            color: x.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: X.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(M.i$, { channel: t, guild: a }),
                    (0, i.jsx)(q, { focusedApplication: J, focusedParticipant: P, channel: t }),
                ],
            }),
            (0, i.jsx)(V.A, { channelId: t.id }),
        ],
    });
}
