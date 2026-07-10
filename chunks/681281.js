n.d(t, { A: () => $ });
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
    f = n(730134),
    g = n(440594),
    C = n(793574),
    j = n(429913),
    y = n(47167),
    v = n(882840),
    E = n(713654),
    N = n(611371),
    I = n(769015),
    T = n(446243),
    _ = n(920639),
    S = n(360729),
    b = n(508654),
    R = n(974930),
    P = n(961314),
    O = n(58736),
    L = n(742589),
    w = n(376352),
    D = n(353428),
    M = n(46054),
    U = n(527549),
    V = n(665691),
    k = n(241756),
    B = n(313961),
    G = n(532622),
    H = n(416528),
    F = n(136523),
    z = n(806931),
    W = n(375708),
    Y = n(662731),
    K = n(82644),
    X = n(992595);
function Z(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, k.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: K.my, size: c._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(d.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function q(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, b.Qs)(a.id),
        r = null != s ? (0, R.G3)(s) : null,
        o = null != s;
    if (l?.type === z.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O.Ay.Divider, { className: K.yF }),
                    (0, i.jsx)(I.A, { game: n, className: K.RI }),
                    (0, i.jsx)(d.E, {
                        className: K.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, g.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === z.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(O.Ay.Divider, { className: K.yF }),
                (0, i.jsx)(Z, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(w.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(P.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: K.kL, children: t });
}
function $(e) {
    let { channel: t, guild: a, appContext: c, inCall: f, isChatOpen: g, exitFullScreen: I, guildRoomVisible: b } = e,
        { focusedParticipant: R } = (0, r.cf)(
            [B.A],
            () => ({
                focusedParticipant: B.A.getSelectedParticipant(t.id),
                participantsOpen: B.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        { enabled: P } = S.A.useExperiment({ guildId: a?.id, location: "ChannelCallHeader" }),
        w = P && !b,
        k = (0, y.Ay)(t),
        Z = w ? W.intl.string(Y.default.f7g0DK) : b ? `${k} \xb7 ${W.intl.string(Y.default.wRLmM0)}` : k,
        $ = w ? u.Z : (0, E.gU)(t),
        [Q] = (0, j.A)(R?.type === z.lp.ACTIVITY ? [R.applicationId] : []),
        J = W.intl.string(W.t.BVZqJl);
    t.isDM() ? (J = W.intl.string(W.t.jN2DfZ)) : t.isGroupDM() && (J = W.intl.string(W.t["e5y+gm"]));
    let ee = (0, v.l)(t),
        et = t.isGuildVoice() && f && null != ee && ee.length > 0,
        en = (0, G.Ay)(t),
        ei = et
            ? (0, i.jsx)("div", {
                  className: K.Ke,
                  children: (0, i.jsx)(o.m, {
                      asContainer: !0,
                      text: W.intl.string(W.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: en,
                      children: (0, i.jsxs)(h.D, {
                          className: s()(K.WH, { [K.BI]: en }),
                          onClick: en
                              ? function () {
                                    (0, m.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: F.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  className: s()(K.Gh, X.PT, { [K.BI]: en }),
                                  children: M.A.parseVoiceChannelStatus(ee, !0, { channelId: t.id }),
                              }),
                              en &&
                                  (0, i.jsx)(p.R, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: s()(K.rD, K.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        el = (0, V.bG)({ channelId: t.id }),
        ea = l.useCallback(() => {
            w &&
                ((0, T.zD)(t.id),
                (0, _.yt)({ channelId: t.id, guildId: t.guild_id, location: C.A.CHANNEL_CALL, guildRoomOpen: !0 }));
        }, [w, t.id, t.guild_id]);
    return (0, i.jsxs)("div", {
        className: K.SC,
        children: [
            (0, i.jsxs)(O.Ay, {
                onDoubleClick: L.I,
                transparent: !0,
                className: K.jr,
                innerClassName: K.gi,
                toolbarClassName: K.KE,
                childrenBottom: ei,
                toolbar: (0, i.jsx)(H.A, {
                    channel: t,
                    appContext: c,
                    inCall: f,
                    isChatOpen: g,
                    exitFullScreen: I,
                    focusedApplication: Q,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: b,
                }),
                children: [
                    (0, i.jsx)(O.Ay.Title, {
                        wrapperClassName: K.DD,
                        onClick: w ? ea : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != $
                                    ? (0, i.jsx)(O.Ay.ChannelIcon, {
                                          icon: $,
                                          "aria-label": J,
                                          color: w ? "white" : void 0,
                                      })
                                    : null,
                                Z,
                                P && (0, i.jsx)(N.A, { className: K.vW }),
                                el &&
                                    (0, i.jsx)(o.m, {
                                        text: W.intl.string(W.t.QyZ4Td),
                                        children: (0, i.jsx)(A.m, {
                                            size: "xs",
                                            "aria-label": W.intl.string(W.t.VHXh8a),
                                            color: x.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: K.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(D.i$, { channel: t, guild: a }),
                    (0, i.jsx)(q, { focusedApplication: Q, focusedParticipant: R, channel: t }),
                ],
            }),
            (0, i.jsx)(U.A, { channelId: t.id }),
        ],
    });
}
