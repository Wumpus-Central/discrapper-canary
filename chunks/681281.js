n.d(t, { A: () => G });
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
    f = n(47167),
    C = n(882840),
    y = n(713654),
    E = n(137177),
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
    b = n(241756),
    L = n(313961),
    M = n(532622),
    D = n(416528),
    U = n(136523),
    w = n(806931),
    V = n(375708),
    B = n(82644),
    k = n(992595);
function H(e) {
    let { user: t, channel: n, stream: l, color: a } = e,
        s = (0, b.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.A, { className: B.my, size: o._3.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(c.E, { variant: "text-md/medium", color: a, lineClamp: 1, children: s }),
              ],
          });
}
function F(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: a } = e,
        s = (0, N.Qs)(a.id),
        r = null != s ? (0, j.G3)(s) : null,
        o = null != s;
    if (l?.type === w.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(I.Ay.Divider, { className: B.yF }),
                    (0, i.jsx)(E.A, { game: n, className: B.RI }),
                    (0, i.jsx)(c.E, {
                        className: B.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, x.A)(n.name),
                    }),
                ],
            }));
    else if (l?.type === w.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(I.Ay.Divider, { className: B.yF }),
                (0, i.jsx)(H, { user: e, channel: a, stream: n, color: "text-strong" }),
                (0, i.jsx)(_.F, { user: e, stream: n, channel: a }),
            ],
        });
    } else o && (t = (0, i.jsx)(v.A, { guildEvent: s, recurrenceId: r }));
    return (0, i.jsx)("div", { className: B.kL, children: t });
}
function G(e) {
    let { channel: t, guild: l, appContext: o, inCall: A, isChatOpen: x, exitFullScreen: E } = e,
        { focusedParticipant: N } = (0, s.cf)(
            [L.A],
            () => ({
                focusedParticipant: L.A.getSelectedParticipant(t.id),
                participantsOpen: L.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        j = (0, f.Ay)(t),
        v = (0, y.gU)(t),
        [_] = (0, g.A)(N?.type === w.lp.ACTIVITY ? [N.applicationId] : []),
        b = V.intl.string(V.t.BVZqJl);
    t.isDM() ? (b = V.intl.string(V.t.jN2DfZ)) : t.isGroupDM() && (b = V.intl.string(V.t["e5y+gm"]));
    let H = (0, C.l)(t),
        G = t.isGuildVoice() && A && null != H && H.length > 0,
        z = (0, M.Ay)(t),
        W = G
            ? (0, i.jsx)("div", {
                  className: B.Ke,
                  children: (0, i.jsx)(r.m, {
                      asContainer: !0,
                      text: V.intl.string(V.t.Mgpxiw),
                      delay: 500,
                      position: "bottom",
                      shouldShow: z,
                      children: (0, i.jsxs)(d.D, {
                          className: a()(B.WH, { [B.BI]: z }),
                          onClick: z
                              ? function () {
                                    (0, h.openModalLazy)(
                                        async () => {
                                            let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                            return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                        },
                                        { modalKey: U.m },
                                    );
                                }
                              : void 0,
                          children: [
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/normal",
                                  className: a()(B.Gh, k.PT, { [B.BI]: z }),
                                  children: S.A.parseVoiceChannelStatus(H, !0, { channelId: t.id }),
                              }),
                              z &&
                                  (0, i.jsx)(u.R, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: a()(B.rD, B.BI),
                                      width: 14,
                                      height: 14,
                                  }),
                          ],
                      }),
                  }),
              })
            : null,
        Y = (0, O.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: B.SC,
        children: [
            (0, i.jsxs)(I.Ay, {
                onDoubleClick: T.I,
                transparent: !0,
                className: B.jr,
                innerClassName: B.gi,
                toolbarClassName: B.KE,
                childrenBottom: W,
                toolbar: (0, i.jsx)(D.A, {
                    channel: t,
                    appContext: o,
                    inCall: A,
                    isChatOpen: x,
                    exitFullScreen: E,
                    focusedApplication: _,
                    shouldShowHeaderParticipants: !0,
                }),
                children: [
                    (0, i.jsx)(I.Ay.Title, {
                        wrapperClassName: B.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != v ? (0, i.jsx)(I.Ay.ChannelIcon, { icon: v, "aria-label": b }) : null,
                                j,
                                Y &&
                                    (0, i.jsx)(r.m, {
                                        text: V.intl.string(V.t.QyZ4Td),
                                        children: (0, i.jsx)(p.m, {
                                            size: "xs",
                                            "aria-label": V.intl.string(V.t.VHXh8a),
                                            color: m.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: B.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(R.i$, { channel: t, guild: l }),
                    (0, i.jsx)(F, { focusedApplication: _, focusedParticipant: N, channel: t }),
                ],
            }),
            (0, i.jsx)(P.A, { channelId: t.id }),
        ],
    });
}
