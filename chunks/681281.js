n.d(t, { A: () => ee });
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
    y = n(47167),
    j = n(882840),
    I = n(713654),
    N = n(611371),
    v = n(769015),
    E = n(208971),
    b = n(446243),
    _ = n(920639),
    T = n(558076),
    S = n(360729),
    R = n(508654),
    L = n(974930),
    O = n(961314),
    P = n(58736),
    M = n(742589),
    w = n(376352),
    U = n(353428),
    D = n(46054),
    V = n(322338),
    k = n(665691),
    G = n(241756),
    B = n(488947),
    F = n(637443),
    z = n(198052),
    H = n(532622),
    W = n(416528),
    Y = n(136523),
    $ = n(806931),
    K = n(375708),
    X = n(270103),
    q = n(776811),
    Z = n(165648);
function Q(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, G.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(f.A, { className: q.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function J(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, R.Qs)(a.id),
        r = null != s ? (0, L.G3)(s) : null,
        o = null != s;
    if (l?.type === $.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(P.Ay.Divider, { className: q.yF }),
                    (0, i.jsx)(v.A, { game: n, className: q.RI }),
                    (0, i.jsx)(c.E, {
                        className: q.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, x.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === $.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(P.Ay.Divider, { className: q.yF }),
                (0, i.jsx)(Q, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(w.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(O.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: q.kL, children: t });
}
function ee(e) {
    let { channel: t, guild: a, appContext: o, inCall: f, isChatOpen: x, exitFullScreen: v, guildRoomVisible: R } = e,
        L = (0, r.bG)([z.A], () => z.A.getSelectedParticipant(t.id), [t.id]),
        { enabled: O } = (0, S.mf)({ guildId: a?.id, location: "ChannelCallHeader" }),
        w = (0, r.bG)([T.A], () => T.A.getVideoOverlayVisibility()),
        G = (0, F.kM)(t) && (0, B.F)(o),
        Q = O && !R && !G,
        ee = (0, y.Ay)(t),
        et = Q ? K.intl.string(X.default.f7g0DK) : R ? `${ee} \xb7 ${K.intl.string(X.default.wRLmM0)}` : ee,
        en = Q ? d.Z : (0, I.gU)(t),
        [ei] = (0, C.A)(L?.type === $.lp.ACTIVITY ? [L.applicationId] : []),
        el = K.intl.string(K.t.BVZqJl);
    t.isDM() ? (el = K.intl.string(K.t.jN2DfZ)) : t.isGroupDM() && (el = K.intl.string(K.t["e5y+gm"]));
    let ea = (0, E.G)((0, j.l)(t)),
        es = t.isGuildVoice() && f && null != ea && ea.length > 0,
        er = (0, H.Ay)(t),
        eo = es
            ? (0, i.jsx)("div", {
                  className: q.Ke,
                  children: (0, i.jsx)(u.m, {
                      text: K.intl.string(K.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: er,
                      children: (0, i.jsx)(h.D, {
                          className: s()(q.WH, { [q.BI]: er }),
                          onClick: er
                              ? function () {
                                    (0, p.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: Y.m },
                                    );
                                }
                              : void 0,
                          children: (0, i.jsx)(c.E, {
                              variant: "text-xs/normal",
                              className: s()(q.Gh, Z.PT),
                              children: D.A.parseVoiceChannelStatus(ea, !0, { channelId: t.id }),
                          }),
                      }),
                  }),
              })
            : null,
        ec = (0, k.bG)({ channelId: t.id }),
        ed = l.useCallback(() => {
            Q &&
                (w
                    ? (0, b.UV)(!1, t.id)
                    : ((0, b.zD)(t.id),
                      (0, _.yt)({
                          channelId: t.id,
                          guildId: t.guild_id,
                          location: g.A.CHANNEL_CALL,
                          guildRoomOpen: !0,
                      })));
        }, [Q, t.id, t.guild_id, w]);
    return (0, i.jsxs)("div", {
        className: q.SC,
        children: [
            (0, i.jsxs)(P.Ay, {
                onDoubleClick: M.I,
                transparent: !0,
                className: q.jr,
                innerClassName: q.gi,
                toolbarClassName: q.KE,
                childrenBottom: eo,
                toolbar: (0, i.jsx)(W.A, {
                    channel: t,
                    appContext: o,
                    inCall: f,
                    isChatOpen: x,
                    exitFullScreen: v,
                    focusedApplication: ei,
                    shouldShowHeaderParticipants: !0,
                    guildRoomVisible: R,
                    guildRoomVideoOverlayVisible: w,
                }),
                children: [
                    (0, i.jsx)(P.Ay.Title, {
                        wrapperClassName: q.DD,
                        onClick: Q ? ed : void 0,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != en
                                    ? (0, i.jsx)(P.Ay.ChannelIcon, {
                                          icon: en,
                                          "aria-label": el,
                                          color: Q ? "white" : void 0,
                                      })
                                    : null,
                                et,
                                O && (0, i.jsx)(N.A, { className: q.vW }),
                                ec &&
                                    (0, i.jsx)(u.m, {
                                        text: K.intl.string(K.t.QyZ4Td),
                                        children: (0, i.jsx)(m.m, {
                                            size: "xs",
                                            "aria-label": K.intl.string(K.t.VHXh8a),
                                            color: A.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: q.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(U.i$, { channel: t, guild: a }),
                    (0, i.jsx)(J, { focusedApplication: ei, focusedParticipant: L, channel: t }),
                ],
            }),
            (0, i.jsx)(V.A, { channelId: t.id }),
        ],
    });
}
