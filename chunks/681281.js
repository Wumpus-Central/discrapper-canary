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
    E = n(58736),
    x = n(742589),
    I = n(376352),
    C = n(353428),
    N = n(46054),
    T = n(164203),
    S = n(665691),
    b = n(724759),
    y = n(241756),
    v = n(313961),
    R = n(532622),
    j = n(546871),
    O = n(416528),
    L = n(136523),
    M = n(806931),
    D = n(985018),
    U = n(82644),
    G = n(992595);
function P(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, y.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: U.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { variant: "text-md/medium", color: s, lineClamp: 1, children: a }),
              ],
          });
}
function k(e) {
    let t,
        {
            focusedApplication: n,
            focusedParticipant: l,
            channel: s,
            shouldShowHeaderParticipants: a = !0,
            shouldShowCommerceStreamHeader: r = !1,
        } = e,
        d = (0, p.Qs)(s.id),
        u = null != d ? (0, g.G3)(d) : null,
        h = null != d;
    if (l?.type === M.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(E.Ay.Divider, { className: U.yF }),
                    (0, i.jsx)(m.A, { game: n, className: U.RI }),
                    (0, i.jsx)(o.Text, {
                        className: U.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.A)(n.name),
                    }),
                    a && (0, i.jsx)(j.A, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === M.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.Ay.Divider, { className: U.yF }),
                (0, i.jsx)(P, { user: e, channel: s, stream: n, color: "text-strong" }),
                a && (0, i.jsx)(j.A, { channel: s, focusedParticipant: l }),
                r && (0, i.jsx)(I.F, { user: e, stream: n, channel: s }),
            ],
        });
    } else h && (t = (0, i.jsx)(f.A, { guildEvent: d, recurrenceId: u }));
    return (0, i.jsx)("div", { className: U.kL, children: t });
}
function w(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: m, exitFullScreen: p } = e,
        g = (0, b.B)({ location: "channel_call_header_toolbar" }),
        { focusedParticipant: f } = (0, a.cf)(
            [v.A],
            () => ({
                focusedParticipant: v.A.getSelectedParticipant(t.id),
                participantsOpen: v.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        I = (0, A.Ay)(t),
        y = (0, _.gU)(t),
        [j] = (0, u.A)(f?.type === M.lp.ACTIVITY ? [f.applicationId] : []),
        P = D.intl.string(D.t.BVZqJl);
    t.isDM() ? (P = D.intl.string(D.t.jN2DfZ)) : t.isGroupDM() && (P = D.intl.string(D.t["e5y+gm"]));
    let w = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        B = t.isGuildVoice() && c && null != w && w.length > 0,
        V = (0, R.Ay)(t),
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
                              children: N.A.parseVoiceChannelStatus(w, !0, { channelId: t.id }),
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
        F = (0, S.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: U.SC,
        children: [
            (0, i.jsxs)(E.Ay, {
                onDoubleClick: x.I,
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
                    focusedApplication: j,
                    shouldShowHeaderParticipants: g,
                }),
                children: [
                    (0, i.jsx)(E.Ay.Title, {
                        wrapperClassName: U.DD,
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                null != y ? (0, i.jsx)(E.Ay.ChannelIcon, { icon: y, "aria-label": P }) : null,
                                I,
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
                    (0, i.jsx)(C.i$, { channel: t, guild: l }),
                    (0, i.jsx)(k, {
                        focusedApplication: j,
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
