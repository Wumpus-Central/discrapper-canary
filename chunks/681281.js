n.d(t, { A: () => el });
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
    N = n(522265),
    v = n(649045),
    E = n(611371),
    b = n(769015),
    S = n(208971),
    T = n(446243),
    _ = n(920639),
    R = n(558076),
    O = n(360729),
    L = n(508654),
    P = n(974930),
    M = n(961314),
    w = n(58736),
    U = n(742589),
    D = n(376352),
    V = n(353428),
    G = n(46054),
    k = n(322338),
    B = n(665691),
    F = n(410828),
    z = n(366265),
    H = n(241756),
    W = n(708416),
    Y = n(488947),
    $ = n(198052),
    K = n(532622),
    X = n(416528),
    q = n(136523),
    Z = n(806931),
    Q = n(105292),
    J = n(618922),
    ee = n(776811),
    et = n(165648);
function en(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, H.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: ee.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function ei(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, L.Qs)(a.id),
        r = null != s ? (0, P.G3)(s) : null,
        o = null != s;
    if (l?.type === Z.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(w.Ay.Divider, { className: ee.yF }),
                    (0, i.jsx)(b.A, {
                        game: n,
                        className: ee.RI,
                        unknownGameIconFallback:
                            null != n.conjureProjectId
                                ? (0, i.jsx)(v.A, {
                                      applicationId: n.id,
                                      name: n.name,
                                      glyphSize: (0, N.w)(24).glyphSize,
                                      className: ee.RI,
                                  })
                                : void 0,
                    }),
                    (0, i.jsx)(c.E, {
                        className: ee.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, x.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === Z.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.Ay.Divider, { className: ee.yF }),
                (0, i.jsx)(en, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(D.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(M.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: ee.kL, children: t });
}
function el(e) {
    let {
            channel: t,
            guild: a,
            appContext: o,
            inCall: f,
            isChatOpen: x,
            isStageAudienceSidebarOpen: N,
            exitFullScreen: v,
            guildRoomVisible: b,
        } = e,
        L = (0, r.bG)([$.A], () => $.A.getSelectedParticipant(t.id), [t.id]),
        { enabled: P } = (0, O.mf)({ guildId: a?.id, location: "ChannelCallHeader" }),
        M = P && !t.isGuildStageVoice(),
        D = (0, r.bG)([R.A], () => R.A.getVideoOverlayVisibility()),
        H = (0, W.kM)(t) && (0, Y.F)(o),
        en = M && !b && !H,
        el = (0, j.Ay)(t),
        ea = t.isGuildStageVoice(),
        es = (0, F.nd)(t),
        er = en ? Q.intl.string(J.default.f7g0DK) : b ? `${el} \xb7 ${Q.intl.string(J.default.wRLmM0)}` : (es ?? el),
        eo = en ? d.Z : (0, I.gU)(t),
        [ec] = (0, C.A)(L?.type === Z.lp.ACTIVITY ? [L.applicationId] : []),
        ed = Q.intl.string(Q.t.BVZqJl);
    ea
        ? (ed = Q.intl.string(Q.t.EErMzA))
        : t.isDM()
          ? (ed = Q.intl.string(Q.t.jN2DfZ))
          : t.isGroupDM() && (ed = Q.intl.string(Q.t["e5y+gm"]));
    let eu = (0, S.G)((0, y.l)(t)),
        eh = t.isGuildVoice() && f && null != eu && eu.length > 0,
        ep = (0, K.Ay)(t),
        em = eh
            ? (0, i.jsx)("div", {
                  className: ee.Ke,
                  children: (0, i.jsx)(u.m, {
                      text: Q.intl.string(Q.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: ep,
                      children: (0, i.jsx)(h.D, {
                          className: s()(ee.WH, { [ee.BI]: ep }),
                          onClick: ep
                              ? function () {
                                    (0, p.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: q.m },
                                    );
                                }
                              : void 0,
                          children: (0, i.jsx)(c.E, {
                              variant: "text-xs/normal",
                              className: s()(ee.Gh, et.PT),
                              children: G.A.parseVoiceChannelStatus(eu, !0, { channelId: t.id }),
                          }),
                      }),
                  }),
              })
            : null,
        eA = (0, B.bG)({ channelId: t.id }),
        ef = l.useCallback(() => {
            en &&
                (D
                    ? (0, T.UV)(!1, t.id)
                    : ((0, T.zD)(t.id),
                      (0, _.yt)({
                          channelId: t.id,
                          guildId: t.guild_id,
                          location: g.A.CHANNEL_CALL,
                          guildRoomOpen: !0,
                      })));
        }, [en, t.id, t.guild_id, D]);
    return (0, i.jsxs)("div", {
        className: ee.SC,
        children: [
            (0, i.jsxs)(w.Ay, {
                onDoubleClick: U.I,
                transparent: !0,
                className: ee.jr,
                innerClassName: ee.gi,
                toolbarClassName: ee.KE,
                childrenBottom: em,
                toolbar: (0, i.jsx)(X.A, {
                    channel: t,
                    appContext: o,
                    inCall: f,
                    isChatOpen: x,
                    isStageAudienceSidebarOpen: N,
                    exitFullScreen: v,
                    focusedApplication: ec,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: b,
                    guildRoomVideoOverlayVisible: D,
                }),
                children: [
                    (0, i.jsx)(w.Ay.Title, {
                        wrapperClassName: ee.DD,
                        onClick: en ? ef : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != eo
                                    ? (0, i.jsx)(w.Ay.ChannelIcon, {
                                          icon: eo,
                                          "aria-label": ed,
                                          color: en ? "white" : void 0,
                                      })
                                    : null,
                                er,
                                M && (0, i.jsx)(E.A, { className: ee.q0 }),
                                eA &&
                                    (0, i.jsx)(u.m, {
                                        text: Q.intl.string(Q.t.QyZ4Td),
                                        children: (0, i.jsx)(m.m, {
                                            size: "xs",
                                            "aria-label": Q.intl.string(Q.t.VHXh8a),
                                            color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: ee.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    ea
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(w.Ay.Divider, { className: ee.yF }),
                                  (0, i.jsx)(F.Pb, { channel: t }),
                              ],
                          })
                        : null,
                    (0, i.jsx)(V.i$, { channel: t, guild: a }),
                    (0, i.jsx)(ei, { focusedApplication: ec, focusedParticipant: L, channel: t }),
                ],
            }),
            ea && (0, i.jsx)(z.A, { channel: t }),
            (0, i.jsx)(k.A, { channelId: t.id }),
        ],
    });
}
