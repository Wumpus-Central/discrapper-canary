n.d(t, { A: () => F });
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
    g = n(713654),
    m = n(769015),
    p = n(508654),
    _ = n(974930),
    x = n(961314),
    f = n(58736),
    E = n(742589),
    C = n(353428),
    I = n(267102),
    S = n(46054),
    b = n(164203),
    N = n(665691),
    T = n(241756),
    j = n(447404),
    v = n(313961),
    y = n(532622),
    R = n(780642),
    O = n(416528),
    L = n(525788),
    D = n(136523),
    M = n(806931),
    G = n(652215),
    U = n(818348),
    P = n(985018),
    k = n(597217),
    w = n(206314);
function V(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, I.Us)(),
        s = (0, a.bG)([v.A], () => v.A.getLayout(n.id, l));
    return (0, i.jsx)(j.A, {
        children: (0, i.jsx)(L.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === G.BRT.POPOUT || s === G.DUB.FULL_SCREEN,
        }),
    });
}
function B(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, T.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: k.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: k.W$, variant: "text-md/medium", color: s, children: a }),
              ],
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: s } = e,
        a = (0, R.A)(s, !0),
        r = (0, p.Qs)(s.id),
        d = null != r ? (0, _.G3)(r) : null,
        u = null != r;
    if (l?.type === M.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(f.Ay.Divider, { className: k.yF }),
                    (0, i.jsx)(m.A, { game: n, className: k.RI }),
                    (0, i.jsx)(o.Text, {
                        className: k.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.A)(n.name),
                    }),
                    a && (0, i.jsx)(V, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === M.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(f.Ay.Divider, { className: k.yF }),
                (0, i.jsx)(B, { user: e, channel: s, stream: n, color: a ? "text-strong" : "none" }),
                a && (0, i.jsx)(V, { channel: s, focusedParticipant: l }),
            ],
        });
    } else u && (t = (0, i.jsx)(x.A, { guildEvent: r, recurrenceId: d }));
    return (0, i.jsx)("div", { className: k.kL, children: t });
}
function F(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: m, exitFullScreen: p } = e,
        { focusedParticipant: _ } = (0, a.cf)(
            [v.A],
            () => ({
                focusedParticipant: v.A.getSelectedParticipant(t.id),
                participantsOpen: v.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        x = (0, A.Ay)(t),
        I = (0, g.gU)(t),
        [T] = (0, u.A)(_?.type === M.lp.ACTIVITY ? [_.applicationId] : []),
        j = P.intl.string(P.t.BVZqJl);
    t.isDM() ? (j = P.intl.string(P.t.jN2DfZ)) : t.isGroupDM() && (j = P.intl.string(P.t["e5y+gm"]));
    let R = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        L = t.isGuildVoice() && c && null != R && R.length > 0,
        G = (0, y.Ay)(t),
        V = L
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: P.intl.string(P.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: G,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(k.WH, { [k.BI]: G }),
                      onClick: G
                          ? function () {
                                (0, o.mMO)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) => (0, i.jsx)(e, { channel: t, ...n });
                                    },
                                    { modalKey: D.m },
                                );
                            }
                          : void 0,
                      children: [
                          (0, i.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              className: s()(k.Gh, w.PT, { [k.BI]: G }),
                              children: S.A.parseVoiceChannelStatus(R, !0, { channelId: t.id }),
                          }),
                          G &&
                              (0, i.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(k.rD, k.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        B = (0, N.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: k.SC,
        children: [
            (0, i.jsx)(o.NPJ, {
                theme: U.NJ.DARK,
                children: (e) =>
                    (0, i.jsxs)(f.Ay, {
                        onDoubleClick: E.I,
                        transparent: !0,
                        className: s()(e, k.jr),
                        innerClassName: k.gi,
                        toolbarClassName: k.KE,
                        childrenBottom: V,
                        toolbar: (0, i.jsx)(O.A, {
                            channel: t,
                            appContext: d,
                            inCall: c,
                            isChatOpen: m,
                            exitFullScreen: p,
                        }),
                        children: [
                            (0, i.jsx)(f.Ay.Title, {
                                wrapperClassName: k.DD,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != I ? (0, i.jsx)(f.Ay.ChannelIcon, { icon: I, "aria-label": j }) : null,
                                        x,
                                        B &&
                                            (0, i.jsx)(r.m, {
                                                text: P.intl.string(P.t.QyZ4Td),
                                                children: (0, i.jsx)(o.m5V, {
                                                    size: "xs",
                                                    "aria-label": P.intl.string(P.t.VHXh8a),
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    className: k.vW,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(C.i$, { channel: t, guild: l }),
                            (0, i.jsx)(H, { focusedApplication: T, focusedParticipant: _, channel: t }),
                        ],
                    }),
            }),
            (0, i.jsx)(b.A, { channelId: t.id }),
        ],
    });
}
