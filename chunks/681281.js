n.d(t, { A: () => W });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(17928),
    r = n(990078),
    o = n(778712),
    c = n(834730),
    d = n(939249),
    u = n(22231),
    h = n(192308),
    p = n(254138),
    m = n(661531),
    A = n(730134),
    x = n(440594),
    g = n(429913),
    C = n(47167),
    f = n(882840),
    E = n(713654),
    y = n(137177),
    N = n(508654),
    j = n(647090),
    v = n(961314),
    I = n(58736),
    T = n(742589),
    _ = n(376352),
    R = n(353428),
    S = n(46054),
    P = n(961974),
    O = n(665691),
    b = n(724759),
    L = n(241756),
    M = n(313961),
    D = n(532622),
    U = n(546871),
    w = n(416528),
    V = n(136523),
    B = n(806931),
    k = n(375708),
    H = n(82644),
    F = n(992595);
function G(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, L.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.A, { className: H.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function z(e) {
    let t,
        {
            focusedApplication: n,
            focusedParticipant: l,
            channel: a,
            shouldShowHeaderParticipants: s = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        o = (0, N.Qs)(a.id),
        d = null != o ? (0, j.G3)(o) : null,
        u = null != o;
    if (l?.type === B.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(I.Ay.Divider, { className: H.yF }),
                    (0, i.jsx)(y.A, { game: n, className: H.RI }),
                    (0, i.jsx)(c.E, {
                        className: H.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, x.A)(n.name),
                    }),
                    s && (0, i.jsx)(U.A, { channel: a, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === B.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.Ay.Divider, { className: H.yF }),
                (0, i.jsx)(G, { user: e, channel: a, stream: n, color: "text-strong" }),
                s && (0, i.jsx)(U.A, { channel: a, focusedParticipant: l }),
                r && (0, i.jsx)(_.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else u && (t = (0, i.jsx)(v.A, { guildEvent: o, recurrenceId: d }));
    return (0, i.jsx)("div", { className: H.kL, children: t });
}
function W(e) {
    let { channel: t, guild: l, appContext: o, inCall: A, isChatOpen: x, exitFullScreen: y } = e,
        N = (0, b.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: j } = (0, s.cf)(
            [M.A],
            () => ({
                focusedParticipant: M.A.getSelectedParticipant(t.id),
                participantsOpen: M.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        v = (0, C.Ay)(t),
        _ = (0, E.gU)(t),
        [L] = (0, g.A)(j?.type === B.lp.ACTIVITY ? [j.applicationId] : []),
        U = k.intl.string(k.t.BVZqJl);
    t.isDM() ? (U = k.intl.string(k.t.jN2DfZ)) : t.isGroupDM() && (U = k.intl.string(k.t["e5y+gm"]));
    let G = (0, f.l)(t),
        W = t.isGuildVoice() && A && null != G && G.length > 0,
        Y = (0, D.Ay)(t),
        K = W
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: k.intl.string(k.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: Y,
                  children: (0, i.jsxs)(d.D, {
                      className: a()(H.WH, { [H.BI]: Y }),
                      onClick: Y
                          ? function () {
                                (0, h.openModalLazy)(
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
                              className: a()(H.Gh, F.PT, { [H.BI]: Y }),
                              children: S.A.parseVoiceChannelStatus(G, !0, { channelId: t.id }),
                          }),
                          Y &&
                              (0, i.jsx)(u.R, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: a()(H.rD, H.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        X = (0, O.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: H.SC,
        children: [
            (0, i.jsxs)(I.Ay, {
                onDoubleClick: T.I,
                transparent: !0,
                className: H.jr,
                innerClassName: H.gi,
                toolbarClassName: H.KE,
                childrenBottom: K,
                toolbar: (0, i.jsx)(w.A, {
                    channel: t,
                    appContext: o,
                    inCall: A,
                    isChatOpen: x,
                    exitFullScreen: y,
                    focusedApplication: L,
                    shouldShowHeaderParticipants: N,
                }),
                children: [
                    (0, i.jsx)(I.Ay.Title, {
                        wrapperClassName: H.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != _ ? (0, i.jsx)(I.Ay.ChannelIcon, { icon: _, "aria-label": U }) : null,
                                v,
                                X &&
                                    (0, i.jsx)(r.m, {
                                        text: k.intl.string(k.t.QyZ4Td),
                                        children: (0, i.jsx)(p.m, {
                                            size: "xs",
                                            "aria-label": k.intl.string(k.t.VHXh8a),
                                            color: m.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: H.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(R.i$, { channel: t, guild: l }),
                    (0, i.jsx)(z, {
                        focusedApplication: L,
                        focusedParticipant: j,
                        channel: t,
                        shouldShowHeaderParticipants: !N,
                        shouldShowCommerceStreamHeader: N,
                    }),
                ],
            }),
            (0, i.jsx)(P.A, { channelId: t.id }),
        ],
    });
}
