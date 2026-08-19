n.d(t, { A: () => J });
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
    f = n(254138),
    A = n(661531),
    x = n(730134),
    g = n(440594),
    C = n(793574),
    y = n(429913),
    j = n(47167),
    I = n(882840),
    v = n(174355),
    N = n(611371),
    E = n(769015),
    b = n(208971),
    _ = n(446243),
    T = n(920639),
    R = n(558076),
    S = n(360729),
    L = n(508654),
    O = n(974930),
    P = n(961314),
    M = n(58736),
    w = n(742589),
    D = n(376352),
    U = n(131047),
    V = n(46054),
    k = n(322338),
    G = n(665691),
    B = n(241756),
    F = n(198052),
    z = n(532622),
    H = n(416528),
    W = n(136523),
    $ = n(806931),
    Y = n(375708),
    K = n(662731),
    q = n(129564),
    X = n(742715);
function Z(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, B.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(x.A, { className: q.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function Q(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, L.Qs)(a.id),
        r = null != s ? (0, O.G3)(s) : null,
        o = null != s;
    if (l?.type === $.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(M.Ay.Divider, { className: q.yF }),
                    (0, i.jsx)(E.A, { game: n, className: q.RI }),
                    (0, i.jsx)(c.E, {
                        className: q.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, g.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === $.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(M.Ay.Divider, { className: q.yF }),
                (0, i.jsx)(Z, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(D.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(P.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: q.kL, children: t });
}
function J(e) {
    let { channel: t, guild: a, appContext: o, inCall: x, isChatOpen: g, exitFullScreen: E, guildRoomVisible: L } = e,
        O = (0, r.bG)([F.A], () => F.A.getSelectedParticipant(t.id), [t.id]),
        { enabled: P } = S.A.useExperiment({ guildId: a?.id, location: "ChannelCallHeader" }),
        D = (0, r.bG)([R.A], () => R.A.getVideoOverlayVisibility()),
        B = P && !L,
        Z = (0, j.Ay)(t),
        J = B ? Y.intl.string(K.default.f7g0DK) : L ? `${Z} \xb7 ${Y.intl.string(K.default.wRLmM0)}` : Z,
        ee = B ? d.Z : (0, v.gU)(t),
        [et] = (0, y.A)(O?.type === $.lp.ACTIVITY ? [O.applicationId] : []),
        en = Y.intl.string(Y.t.BVZqJl);
    t.isDM() ? (en = Y.intl.string(Y.t.jN2DfZ)) : t.isGroupDM() && (en = Y.intl.string(Y.t["e5y+gm"]));
    let ei = (0, b.G)((0, I.l)(t)),
        el = t.isGuildVoice() && x && null != ei && ei.length > 0,
        ea = (0, z.Ay)(t),
        es = el
            ? (0, i.jsx)("div", {
                  className: q.Ke,
                  children: (0, i.jsx)(u.m, {
                      asContainer: !0,
                      text: Y.intl.string(Y.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: ea,
                      children: (0, i.jsxs)(h.D, {
                          className: s()(q.WH, { [q.BI]: ea }),
                          onClick: ea
                              ? function () {
                                    (0, m.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: W.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  className: s()(q.Gh, X.PT, { [q.BI]: ea }),
                                  children: V.A.parseVoiceChannelStatus(ei, !0, { channelId: t.id }),
                              }),
                              ea &&
                                  (0, i.jsx)(p.PencilIcon, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: s()(q.rD, q.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        er = (0, G.bG)({ channelId: t.id }),
        eo = l.useCallback(() => {
            B &&
                (D
                    ? (0, _.UV)(!1, t.id)
                    : ((0, _.zD)(t.id),
                      (0, T.yt)({
                          channelId: t.id,
                          guildId: t.guild_id,
                          location: C.A.CHANNEL_CALL,
                          guildRoomOpen: !0,
                      })));
        }, [B, t.id, t.guild_id, D]);
    return (0, i.jsxs)("div", {
        className: q.SC,
        children: [
            (0, i.jsxs)(M.Ay, {
                onDoubleClick: w.I,
                transparent: !0,
                className: q.jr,
                innerClassName: q.gi,
                toolbarClassName: q.KE,
                childrenBottom: es,
                toolbar: (0, i.jsx)(H.A, {
                    channel: t,
                    appContext: o,
                    inCall: x,
                    isChatOpen: g,
                    exitFullScreen: E,
                    focusedApplication: et,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: L,
                    guildRoomVideoOverlayVisible: D,
                }),
                children: [
                    (0, i.jsx)(M.Ay.Title, {
                        wrapperClassName: q.DD,
                        onClick: B ? eo : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != ee
                                    ? (0, i.jsx)(M.Ay.ChannelIcon, {
                                          icon: ee,
                                          "aria-label": en,
                                          color: B ? "white" : void 0,
                                      })
                                    : null,
                                J,
                                P && (0, i.jsx)(N.A, { className: q.vW }),
                                er &&
                                    (0, i.jsx)(u.m, {
                                        text: Y.intl.string(Y.t.QyZ4Td),
                                        children: (0, i.jsx)(f.m, {
                                            size: "xs",
                                            "aria-label": Y.intl.string(Y.t.VHXh8a),
                                            color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: q.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(U.i$, { channel: t, guild: a }),
                    (0, i.jsx)(Q, { focusedApplication: et, focusedParticipant: O, channel: t }),
                ],
            }),
            (0, i.jsx)(k.A, { channelId: t.id }),
        ],
    });
}
