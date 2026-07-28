n.d(t, { A: () => Q });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(17928),
    o = n(778712),
    c = n(834730),
    d = n(548411),
    u = n(866665),
    h = n(939249),
    p = n(22231),
    m = n(192308),
    A = n(254138),
    f = n(661531),
    x = n(730134),
    g = n(440594),
    C = n(793574),
    y = n(429913),
    j = n(47167),
    v = n(882840),
    E = n(713654),
    N = n(611371),
    I = n(769015),
    T = n(208971),
    b = n(446243),
    _ = n(920639),
    R = n(360729),
    S = n(508654),
    P = n(974930),
    L = n(961314),
    O = n(58736),
    w = n(742589),
    M = n(376352),
    D = n(131047),
    U = n(46054),
    k = n(527549),
    V = n(665691),
    G = n(241756),
    B = n(313961),
    H = n(532622),
    F = n(416528),
    z = n(136523),
    W = n(806931),
    Y = n(375708),
    K = n(662731),
    X = n(129564),
    $ = n(742715);
function Z(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, G.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.A, { className: X.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function q(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, S.Qs)(a.id),
        r = null != s ? (0, P.G3)(s) : null,
        o = null != s;
    if (l?.type === W.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O.Ay.Divider, { className: X.yF }),
                    (0, i.jsx)(I.A, { game: n, className: X.RI }),
                    (0, i.jsx)(c.E, {
                        className: X.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, g.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === W.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.Ay.Divider, { className: X.yF }),
                (0, i.jsx)(Z, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(M.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(L.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: X.kL, children: t });
}
function Q(e) {
    let { channel: t, guild: a, appContext: o, inCall: x, isChatOpen: g, exitFullScreen: I, guildRoomVisible: S } = e,
        { focusedParticipant: P } = (0, r.cf)(
            [B.A],
            () => ({
                focusedParticipant: B.A.getSelectedParticipant(t.id),
                participantsOpen: B.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        { enabled: L } = R.A.useExperiment({ guildId: a?.id, location: "ChannelCallHeader" }),
        M = L && !S,
        G = (0, j.Ay)(t),
        Z = M ? Y.intl.string(K.default.f7g0DK) : S ? `${G} \xb7 ${Y.intl.string(K.default.wRLmM0)}` : G,
        Q = M ? d.Z : (0, E.gU)(t),
        [J] = (0, y.A)(P?.type === W.lp.ACTIVITY ? [P.applicationId] : []),
        ee = Y.intl.string(Y.t.BVZqJl);
    t.isDM() ? (ee = Y.intl.string(Y.t.jN2DfZ)) : t.isGroupDM() && (ee = Y.intl.string(Y.t["e5y+gm"]));
    let et = (0, T.G)((0, v.l)(t)),
        en = t.isGuildVoice() && x && null != et && et.length > 0,
        ei = (0, H.Ay)(t),
        el = en
            ? (0, i.jsx)("div", {
                  className: X.Ke,
                  children: (0, i.jsx)(u.m, {
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
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  className: s()(X.Gh, $.PT, { [X.BI]: ei }),
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
        ea = (0, V.bG)({ channelId: t.id }),
        es = l.useCallback(() => {
            M &&
                ((0, b.zD)(t.id),
                (0, _.yt)({ channelId: t.id, guildId: t.guild_id, location: C.A.CHANNEL_CALL, guildRoomOpen: !0 }));
        }, [M, t.id, t.guild_id]);
    return (0, i.jsxs)("div", {
        className: X.SC,
        children: [
            (0, i.jsxs)(O.Ay, {
                onDoubleClick: w.I,
                transparent: !0,
                className: X.jr,
                innerClassName: X.gi,
                toolbarClassName: X.KE,
                childrenBottom: el,
                toolbar: (0, i.jsx)(F.A, {
                    channel: t,
                    appContext: o,
                    inCall: x,
                    isChatOpen: g,
                    exitFullScreen: I,
                    focusedApplication: J,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: S,
                }),
                children: [
                    (0, i.jsx)(O.Ay.Title, {
                        wrapperClassName: X.DD,
                        onClick: M ? es : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != Q
                                    ? (0, i.jsx)(O.Ay.ChannelIcon, {
                                          icon: Q,
                                          "aria-label": ee,
                                          color: M ? "white" : void 0,
                                      })
                                    : null,
                                Z,
                                L && (0, i.jsx)(N.A, { className: X.vW }),
                                ea &&
                                    (0, i.jsx)(u.m, {
                                        text: Y.intl.string(Y.t.QyZ4Td),
                                        children: (0, i.jsx)(A.m, {
                                            size: "xs",
                                            "aria-label": Y.intl.string(Y.t.VHXh8a),
                                            color: f.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: X.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(D.i$, { channel: t, guild: a }),
                    (0, i.jsx)(q, { focusedApplication: J, focusedParticipant: P, channel: t }),
                ],
            }),
            (0, i.jsx)(k.A, { channelId: t.id }),
        ],
    });
}
