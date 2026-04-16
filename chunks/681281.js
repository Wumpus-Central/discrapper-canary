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
    p = n(508654),
    g = n(974930),
    f = n(961314),
    E = n(58736),
    x = n(742589),
    I = n(376352),
    C = n(353428),
    N = n(46054),
    T = n(164203),
    S = n(665691),
    b = n(724759),
    y = n(123973),
    v = n(241756),
    R = n(313961),
    j = n(532622),
    O = n(546871),
    L = n(416528),
    M = n(136523),
    D = n(806931),
    U = n(985018),
    G = n(82644),
    P = n(992595);
function k(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, v.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: G.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { variant: "text-md/medium", color: s, lineClamp: 1, children: a }),
              ],
          });
}
function w(e) {
    let t,
        {
            focusedApplication: n,
            focusedParticipant: l,
            channel: s,
            shouldShowHeaderParticipants: a = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        d = (0, y.$F)(s),
        u = (0, p.Qs)(s.id),
        h = null != u ? (0, g.G3)(u) : null,
        A = null != u;
    if (l?.type === D.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(E.Ay.Divider, { className: G.yF }),
                    (0, i.jsx)(m.A, { game: n, className: G.RI }),
                    (0, i.jsx)(o.Text, {
                        className: G.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.A)(n.name),
                    }),
                    a && d && (0, i.jsx)(O.A, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === D.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.Ay.Divider, { className: G.yF }),
                (0, i.jsx)(k, { user: e, channel: s, stream: n, color: d ? "text-strong" : "none" }),
                a && d && (0, i.jsx)(O.A, { channel: s, focusedParticipant: l }),
                r && (0, i.jsx)(I.F, { user: e, stream: n, channel: s }),
            ],
        });
    } else A && (t = (0, i.jsx)(f.A, { guildEvent: u, recurrenceId: h }));
    return (0, i.jsx)("div", { className: G.kL, children: t });
}
function B(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: m, exitFullScreen: p } = e,
        g = (0, b.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: f } = (0, a.cf)(
            [R.A],
            () => ({
                focusedParticipant: R.A.getSelectedParticipant(t.id),
                participantsOpen: R.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        I = (0, A.Ay)(t),
        y = (0, _.gU)(t),
        [v] = (0, u.A)(f?.type === D.lp.ACTIVITY ? [f.applicationId] : []),
        O = U.intl.string(U.t.BVZqJl);
    t.isDM() ? (O = U.intl.string(U.t.jN2DfZ)) : t.isGroupDM() && (O = U.intl.string(U.t["e5y+gm"]));
    let k = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        B = t.isGuildVoice() && c && null != k && k.length > 0,
        V = (0, j.Ay)(t),
        H = B
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: U.intl.string(U.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: V,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(G.WH, { [G.BI]: V }),
                      onClick: V
                          ? function () {
                                (0, o.mMO)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                    },
                                    { modalKey: M.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              className: s()(G.Gh, P.PT, { [G.BI]: V }),
                              children: N.A.parseVoiceChannelStatus(k, !0, { channelId: t.id }),
                          }),
                          V &&
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
        F = (0, S.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: G.SC,
        children: [
            (0, i.jsxs)(E.Ay, {
                onDoubleClick: x.I,
                transparent: !0,
                className: G.jr,
                innerClassName: G.gi,
                toolbarClassName: G.KE,
                childrenBottom: H,
                toolbar: (0, i.jsx)(L.A, {
                    channel: t,
                    appContext: d,
                    inCall: c,
                    isChatOpen: m,
                    exitFullScreen: p,
                    focusedApplication: v,
                    shouldShowHeaderParticipants: g,
                }),
                children: [
                    (0, i.jsx)(E.Ay.Title, {
                        wrapperClassName: G.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != y ? (0, i.jsx)(E.Ay.ChannelIcon, { icon: y, "aria-label": O }) : null,
                                I,
                                F &&
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
                    (0, i.jsx)(C.i$, { channel: t, guild: l }),
                    (0, i.jsx)(w, {
                        focusedApplication: v,
                        focusedParticipant: f,
                        channel: t,
                        shouldShowHeaderParticipants: !g,
                        shouldShowCommerceStreamHeader: g,
                    }),
                ],
            }),
            (0, i.jsx)(T.A, { channelId: t.id }),
        ],
    });
}
