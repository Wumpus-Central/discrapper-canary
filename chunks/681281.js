n.d(t, { A: () => en });
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
    p = n(192308),
    m = n(254138),
    A = n(661531),
    f = n(730134),
    x = n(440594),
    g = n(793574),
    C = n(429913),
    j = n(47167),
    y = n(882840),
    I = n(713654),
    N = n(611371),
    E = n(769015),
    v = n(208971),
    b = n(446243),
    _ = n(920639),
    S = n(558076),
    T = n(360729),
    R = n(508654),
    O = n(974930),
    L = n(961314),
    P = n(58736),
    w = n(742589),
    M = n(376352),
    U = n(353428),
    D = n(46054),
    V = n(322338),
    G = n(665691),
    k = n(410828),
    B = n(366265),
    F = n(241756),
    z = n(488947),
    H = n(637443),
    W = n(198052),
    Y = n(532622),
    $ = n(416528),
    K = n(136523),
    X = n(806931),
    q = n(660183),
    Z = n(270103),
    Q = n(776811),
    J = n(165648);
function ee(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, F.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: Q.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function et(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, R.Qs)(a.id),
        r = null != s ? (0, O.G3)(s) : null,
        o = null != s;
    if (l?.type === X.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(P.Ay.Divider, { className: Q.yF }),
                    (0, i.jsx)(E.A, { game: n, className: Q.RI }),
                    (0, i.jsx)(c.E, {
                        className: Q.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, x.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === X.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(P.Ay.Divider, { className: Q.yF }),
                (0, i.jsx)(ee, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(M.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(L.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: Q.kL, children: t });
}
function en(e) {
    let {
            channel: t,
            guild: a,
            appContext: o,
            inCall: f,
            isChatOpen: x,
            isStageAudienceSidebarOpen: E,
            exitFullScreen: R,
            guildRoomVisible: O,
        } = e,
        L = (0, r.bG)([W.A], () => W.A.getSelectedParticipant(t.id), [t.id]),
        { enabled: M } = (0, T.mf)({ guildId: a?.id, location: "ChannelCallHeader" }),
        F = M && !t.isGuildStageVoice(),
        ee = (0, r.bG)([S.A], () => S.A.getVideoOverlayVisibility()),
        en = (0, H.kM)(t) && (0, z.F)(o),
        ei = F && !O && !en,
        el = (0, j.Ay)(t),
        ea = t.isGuildStageVoice(),
        es = (0, k.nd)(t),
        er = ei ? q.intl.string(Z.default.f7g0DK) : O ? `${el} \xb7 ${q.intl.string(Z.default.wRLmM0)}` : (es ?? el),
        eo = ei ? d.Z : (0, I.gU)(t),
        [ec] = (0, C.A)(L?.type === X.lp.ACTIVITY ? [L.applicationId] : []),
        ed = q.intl.string(q.t.BVZqJl);
    ea
        ? (ed = q.intl.string(q.t.EErMzA))
        : t.isDM()
          ? (ed = q.intl.string(q.t.jN2DfZ))
          : t.isGroupDM() && (ed = q.intl.string(q.t["e5y+gm"]));
    let eu = (0, v.G)((0, y.l)(t)),
        eh = t.isGuildVoice() && f && null != eu && eu.length > 0,
        ep = (0, Y.Ay)(t),
        em = eh
            ? (0, i.jsx)("div", {
                  className: Q.Ke,
                  children: (0, i.jsx)(u.m, {
                      text: q.intl.string(q.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: ep,
                      children: (0, i.jsx)(h.D, {
                          className: s()(Q.WH, { [Q.BI]: ep }),
                          onClick: ep
                              ? function () {
                                    (0, p.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: K.m },
                                    );
                                }
                              : void 0,
                          children: (0, i.jsx)(c.E, {
                              variant: "text-xs/normal",
                              className: s()(Q.Gh, J.PT),
                              children: D.A.parseVoiceChannelStatus(eu, !0, { channelId: t.id }),
                          }),
                      }),
                  }),
              })
            : null,
        eA = (0, G.bG)({ channelId: t.id }),
        ef = l.useCallback(() => {
            ei &&
                (ee
                    ? (0, b.UV)(!1, t.id)
                    : ((0, b.zD)(t.id),
                      (0, _.yt)({
                          channelId: t.id,
                          guildId: t.guild_id,
                          location: g.A.CHANNEL_CALL,
                          guildRoomOpen: !0,
                      })));
        }, [ei, t.id, t.guild_id, ee]);
    return (0, i.jsxs)("div", {
        className: Q.SC,
        children: [
            (0, i.jsxs)(P.Ay, {
                onDoubleClick: w.I,
                transparent: !0,
                className: Q.jr,
                innerClassName: Q.gi,
                toolbarClassName: Q.KE,
                childrenBottom: em,
                toolbar: (0, i.jsx)($.A, {
                    channel: t,
                    appContext: o,
                    inCall: f,
                    isChatOpen: x,
                    isStageAudienceSidebarOpen: E,
                    exitFullScreen: R,
                    focusedApplication: ec,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: O,
                    guildRoomVideoOverlayVisible: ee,
                }),
                children: [
                    (0, i.jsx)(P.Ay.Title, {
                        wrapperClassName: Q.DD,
                        onClick: ei ? ef : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != eo
                                    ? (0, i.jsx)(P.Ay.ChannelIcon, {
                                          icon: eo,
                                          "aria-label": ed,
                                          color: ei ? "white" : void 0,
                                      })
                                    : null,
                                er,
                                F && (0, i.jsx)(N.A, { className: Q.q0 }),
                                eA &&
                                    (0, i.jsx)(u.m, {
                                        text: q.intl.string(q.t.QyZ4Td),
                                        children: (0, i.jsx)(m.m, {
                                            size: "xs",
                                            "aria-label": q.intl.string(q.t.VHXh8a),
                                            color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: Q.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    ea
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(P.Ay.Divider, { className: Q.yF }),
                                  (0, i.jsx)(k.Pb, { channel: t }),
                              ],
                          })
                        : null,
                    (0, i.jsx)(U.i$, { channel: t, guild: a }),
                    (0, i.jsx)(et, { focusedApplication: ec, focusedParticipant: L, channel: t }),
                ],
            }),
            ea && (0, i.jsx)(B.A, { channel: t }),
            (0, i.jsx)(V.A, { channelId: t.id }),
        ],
    });
}
