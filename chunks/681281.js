n.d(t, { A: () => w });
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
    p = n(508654),
    g = n(974930),
    f = n(961314),
    x = n(58736),
    E = n(742589),
    I = n(353428),
    C = n(46054),
    N = n(164203),
    T = n(665691),
    S = n(724759),
    b = n(123973),
    y = n(241756),
    v = n(313961),
    j = n(532622),
    R = n(546871),
    O = n(416528),
    L = n(136523),
    M = n(806931),
    D = n(985018),
    U = n(972708),
    G = n(782691);
function P(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, y.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: U.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: U.W$, variant: "text-md/medium", color: s, children: a }),
              ],
          });
}
function k(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: s, shouldShowHeaderParticipants: a = !0 } = e,
        r = (0, b.$F)(s),
        d = (0, p.Qs)(s.id),
        u = null != d ? (0, g.G3)(d) : null,
        h = null != d;
    if (l?.type === M.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.Ay.Divider, { className: U.yF }),
                    (0, i.jsx)(m.A, { game: n, className: U.RI }),
                    (0, i.jsx)(o.Text, {
                        className: U.W$,
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
                (0, i.jsx)(x.Ay.Divider, { className: U.yF }),
                (0, i.jsx)(P, { user: e, channel: s, stream: n, color: r ? "text-strong" : "none" }),
                a && r && (0, i.jsx)(R.A, { channel: s, focusedParticipant: l }),
            ],
        });
    } else h && (t = (0, i.jsx)(f.A, { guildEvent: d, recurrenceId: u }));
    return (0, i.jsx)("div", { className: U.kL, children: t });
}
function w(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: m, exitFullScreen: p } = e,
        g = (0, S.BF)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: f } = (0, a.cf)(
            [v.A],
            () => ({
                focusedParticipant: v.A.getSelectedParticipant(t.id),
                participantsOpen: v.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        b = (0, A.Ay)(t),
        y = (0, _.gU)(t),
        [R] = (0, u.A)(f?.type === M.lp.ACTIVITY ? [f.applicationId] : []),
        P = D.intl.string(D.t.BVZqJl);
    t.isDM() ? (P = D.intl.string(D.t.jN2DfZ)) : t.isGroupDM() && (P = D.intl.string(D.t["e5y+gm"]));
    let w = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        B = t.isGuildVoice() && c && null != w && w.length > 0,
        V = (0, j.Ay)(t),
        H = B
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: D.intl.string(D.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: V,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(U.WH, { [U.BI]: V }),
                      onClick: V
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
                              className: s()(U.Gh, G.PT, { [U.BI]: V }),
                              children: C.A.parseVoiceChannelStatus(w, !0, { channelId: t.id }),
                          }),
                          V &&
                              (0, i.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(U.rD, U.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        F = (0, T.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: U.SC,
        children: [
            (0, i.jsxs)(x.Ay, {
                onDoubleClick: E.I,
                transparent: !0,
                className: U.jr,
                innerClassName: U.gi,
                toolbarClassName: U.KE,
                childrenBottom: H,
                toolbar: (0, i.jsx)(O.A, {
                    channel: t,
                    appContext: d,
                    inCall: c,
                    isChatOpen: m,
                    exitFullScreen: p,
                    focusedApplication: R,
                    shouldShowHeaderParticipants: g,
                }),
                children: [
                    (0, i.jsx)(x.Ay.Title, {
                        wrapperClassName: U.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != y ? (0, i.jsx)(x.Ay.ChannelIcon, { icon: y, "aria-label": P }) : null,
                                b,
                                F &&
                                    (0, i.jsx)(r.m, {
                                        text: D.intl.string(D.t.QyZ4Td),
                                        children: (0, i.jsx)(o.m5V, {
                                            size: "xs",
                                            "aria-label": D.intl.string(D.t.VHXh8a),
                                            color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                            className: U.vW,
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(I.i$, { channel: t, guild: l }),
                    (0, i.jsx)(k, {
                        focusedApplication: R,
                        focusedParticipant: f,
                        channel: t,
                        shouldShowHeaderParticipants: !g,
                    }),
                ],
            }),
            (0, i.jsx)(N.A, { channelId: t.id }),
        ],
    });
}
