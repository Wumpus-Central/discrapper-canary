n.d(t, { A: () => B });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    d = n(730134),
    c = n(440594),
    u = n(429913),
    h = n(309698),
    A = n(47167),
    _ = n(713654),
    m = n(769015),
    g = n(508654),
    p = n(974930),
    f = n(961314),
    x = n(58736),
    E = n(742589),
    I = n(353428),
    C = n(46054),
    N = n(164203),
    T = n(665691),
    S = n(724759),
    b = n(123973),
    v = n(241756),
    y = n(313961),
    j = n(532622),
    R = n(546871),
    O = n(416528),
    L = n(136523),
    M = n(806931),
    D = n(818348),
    U = n(985018),
    G = n(972708),
    P = n(782691);
function k(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, v.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: G.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: G.W$, variant: "text-md/medium", color: s, children: a }),
              ],
          });
}
function w(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: s, shouldShowHeaderParticipants: a = !0 } = e,
        r = (0, b.$F)(s),
        d = (0, g.Qs)(s.id),
        u = null != d ? (0, p.G3)(d) : null,
        h = null != d;
    if (l?.type === M.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.Ay.Divider, { className: G.yF }),
                    (0, i.jsx)(m.A, { game: n, className: G.RI }),
                    (0, i.jsx)(o.Text, {
                        className: G.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.A)(n.name),
                    }),
                    a && r && (0, i.jsx)(R.A, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === M.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Ay.Divider, { className: G.yF }),
                (0, i.jsx)(k, { user: e, channel: s, stream: n, color: r ? "text-strong" : "none" }),
                a && r && (0, i.jsx)(R.A, { channel: s, focusedParticipant: l }),
            ],
        });
    } else h && (t = (0, i.jsx)(f.A, { guildEvent: d, recurrenceId: u }));
    return (0, i.jsx)("div", { className: G.kL, children: t });
}
function B(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: m, exitFullScreen: g } = e,
        p = (0, S.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: f } = (0, a.cf)(
            [y.A],
            () => ({
                focusedParticipant: y.A.getSelectedParticipant(t.id),
                participantsOpen: y.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        b = (0, A.Ay)(t),
        v = (0, _.gU)(t),
        [R] = (0, u.A)(f?.type === M.lp.ACTIVITY ? [f.applicationId] : []),
        k = U.intl.string(U.t.BVZqJl);
    t.isDM() ? (k = U.intl.string(U.t.jN2DfZ)) : t.isGroupDM() && (k = U.intl.string(U.t["e5y+gm"]));
    let B = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        V = t.isGuildVoice() && c && null != B && B.length > 0,
        H = (0, j.Ay)(t),
        F = V
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: U.intl.string(U.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: H,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(G.WH, { [G.BI]: H }),
                      onClick: H
                          ? function () {
                                (0, o.mMO)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                    },
                                    { modalKey: L.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              className: s()(G.Gh, P.PT, { [G.BI]: H }),
                              children: C.A.parseVoiceChannelStatus(B, !0, { channelId: t.id }),
                          }),
                          H &&
                              (0, i.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(G.rD, G.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        W = (0, T.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: G.SC,
        children: [
            (0, i.jsx)(o.NPJ, {
                theme: D.NJ.DARK,
                children: (e) =>
                    (0, i.jsxs)(x.Ay, {
                        onDoubleClick: E.I,
                        transparent: !0,
                        className: s()(e, G.jr),
                        innerClassName: G.gi,
                        toolbarClassName: G.KE,
                        childrenBottom: F,
                        toolbar: (0, i.jsx)(O.A, {
                            channel: t,
                            appContext: d,
                            inCall: c,
                            isChatOpen: m,
                            exitFullScreen: g,
                            focusedApplication: R,
                            shouldShowHeaderParticipants: p,
                        }),
                        children: [
                            (0, i.jsx)(x.Ay.Title, {
                                wrapperClassName: G.DD,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != v ? (0, i.jsx)(x.Ay.ChannelIcon, { icon: v, "aria-label": k }) : null,
                                        b,
                                        W &&
                                            (0, i.jsx)(r.m, {
                                                text: U.intl.string(U.t.QyZ4Td),
                                                children: (0, i.jsx)(o.m5V, {
                                                    size: "xs",
                                                    "aria-label": U.intl.string(U.t.VHXh8a),
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    className: G.vW,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(I.i$, { channel: t, guild: l }),
                            (0, i.jsx)(w, {
                                focusedApplication: R,
                                focusedParticipant: f,
                                channel: t,
                                shouldShowHeaderParticipants: !p,
                            }),
                        ],
                    }),
            }),
            (0, i.jsx)(N.A, { channelId: t.id }),
        ],
    });
}
