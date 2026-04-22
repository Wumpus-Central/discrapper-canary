n.d(t, { A: () => W });
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(311907),
    r = n(990078),
    o = n(778712),
    c = n(834730),
    d = n(939249),
    u = n(22231),
    p = n(192308),
    h = n(254138),
    _ = n(827734),
    m = n(730134),
    A = n(440594),
    x = n(429913),
    f = n(47167),
    g = n(882840),
    C = n(713654),
    y = n(769015),
    v = n(508654),
    E = n(974930),
    N = n(961314),
    I = n(58736),
    j = n(742589),
    T = n(376352),
    b = n(353428),
    S = n(46054),
    R = n(164203),
    P = n(665691),
    O = n(724759),
    w = n(241756),
    L = n(313961),
    D = n(532622),
    M = n(546871),
    U = n(416528),
    V = n(136523),
    k = n(806931),
    B = n(985018),
    H = n(188628),
    F = n(168147);
function G(e) {
    let { user: t, channel: n, stream: a, color: l } = e,
        s = (0, w.A)(n, t, a);
    return null == t || null == a
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(m.A, { className: H.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: l, lineClamp: 1, children: s }),
              ],
          });
}
function z(e) {
    let t,
        {
            focusedApplication: n,
            focusedParticipant: a,
            channel: l,
            shouldShowHeaderParticipants: s = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        o = (0, v.Qs)(l.id),
        d = null != o ? (0, E.G3)(o) : null,
        u = null != o;
    if (a?.type === k.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(I.Ay.Divider, { className: H.yF }),
                    (0, i.jsx)(y.A, { game: n, className: H.RI }),
                    (0, i.jsx)(c.E, {
                        className: H.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, A.A)(n.name),
                    }),
                    s && (0, i.jsx)(M.A, { channel: l, focusedParticipant: a }),
                ],
            }));
    else if (a?.type === k.lp.STREAM) {
        let e = a.user,
            n = a.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.Ay.Divider, { className: H.yF }),
                (0, i.jsx)(G, { user: e, channel: l, stream: n, color: "text-strong" }),
                s && (0, i.jsx)(M.A, { channel: l, focusedParticipant: a }),
                r && (0, i.jsx)(T.F, { user: e, stream: n, channel: l }),
            ],
        });
    } else u && (t = (0, i.jsx)(N.A, { guildEvent: o, recurrenceId: d }));
    return (0, i.jsx)("div", { className: H.kL, children: t });
}
function W(e) {
    let { channel: t, guild: a, appContext: o, inCall: m, isChatOpen: A, exitFullScreen: y } = e,
        v = (0, O.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: E } = (0, s.cf)(
            [L.A],
            () => ({
                focusedParticipant: L.A.getSelectedParticipant(t.id),
                participantsOpen: L.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        N = (0, f.Ay)(t),
        T = (0, C.gU)(t),
        [w] = (0, x.A)(E?.type === k.lp.ACTIVITY ? [E.applicationId] : []),
        M = B.intl.string(B.t.BVZqJl);
    t.isDM() ? (M = B.intl.string(B.t.jN2DfZ)) : t.isGroupDM() && (M = B.intl.string(B.t["e5y+gm"]));
    let G = (0, g.l)(t),
        W = t.isGuildVoice() && m && null != G && G.length > 0,
        Y = (0, D.Ay)(t),
        K = W
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: B.intl.string(B.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: Y,
                  children: (0, i.jsxs)(d.D, {
                      className: l()(H.WH, { [H.BI]: Y }),
                      onClick: Y
                          ? function () {
                                (0, p.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                    },
                                    { modalKey: V.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/normal",
                              className: l()(H.Gh, F.PT, { [H.BI]: Y }),
                              children: S.A.parseVoiceChannelStatus(G, !0, { channelId: t.id }),
                          }),
                          Y &&
                              (0, i.jsx)(u.R, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: l()(H.rD, H.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        X = (0, P.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: H.SC,
        children: [
            (0, i.jsxs)(I.Ay, {
                onDoubleClick: j.I,
                transparent: !0,
                className: H.jr,
                innerClassName: H.gi,
                toolbarClassName: H.KE,
                childrenBottom: K,
                toolbar: (0, i.jsx)(U.A, {
                    channel: t,
                    appContext: o,
                    inCall: m,
                    isChatOpen: A,
                    exitFullScreen: y,
                    focusedApplication: w,
                    shouldShowHeaderParticipants: v,
                }),
                children: [
                    (0, i.jsx)(I.Ay.Title, {
                        wrapperClassName: H.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != T ? (0, i.jsx)(I.Ay.ChannelIcon, { icon: T, "aria-label": M }) : null,
                                N,
                                X &&
                                    (0, i.jsx)(r.m, {
                                        text: B.intl.string(B.t.QyZ4Td),
                                        children: (0, i.jsx)(h.m, {
                                            size: "xs",
                                            "aria-label": B.intl.string(B.t.VHXh8a),
                                            color: _.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: H.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(b.i$, { channel: t, guild: a }),
                    (0, i.jsx)(z, {
                        focusedApplication: w,
                        focusedParticipant: E,
                        channel: t,
                        shouldShowHeaderParticipants: !v,
                        shouldShowCommerceStreamHeader: v,
                    }),
                ],
            }),
            (0, i.jsx)(R.A, { channelId: t.id }),
        ],
    });
}
