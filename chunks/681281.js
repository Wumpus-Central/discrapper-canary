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
    m = n(713654),
    p = n(769015),
    g = n(508654),
    _ = n(974930),
    f = n(961314),
    x = n(58736),
    C = n(742589),
    E = n(353428),
    I = n(267102),
    N = n(46054),
    b = n(164203),
    S = n(665691),
    T = n(123973),
    v = n(241756),
    y = n(447404),
    j = n(313961),
    R = n(532622),
    O = n(416528),
    L = n(525788),
    M = n(136523),
    D = n(806931),
    G = n(652215),
    U = n(818348),
    P = n(985018),
    w = n(597217),
    k = n(206314);
function V(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, I.Us)(),
        s = (0, a.bG)([j.A], () => j.A.getLayout(n.id, l));
    return (0, i.jsx)(y.A, {
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
        a = (0, v.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.A, { className: w.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: w.W$, variant: "text-md/medium", color: s, children: a }),
              ],
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: s } = e,
        a = (0, T.$F)(s),
        r = (0, g.Qs)(s.id),
        d = null != r ? (0, _.G3)(r) : null,
        u = null != r;
    if (l?.type === D.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.Ay.Divider, { className: w.yF }),
                    (0, i.jsx)(p.A, { game: n, className: w.RI }),
                    (0, i.jsx)(o.Text, {
                        className: w.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, c.A)(n.name),
                    }),
                    a && (0, i.jsx)(V, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === D.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Ay.Divider, { className: w.yF }),
                (0, i.jsx)(B, { user: e, channel: s, stream: n, color: a ? "text-strong" : "none" }),
                a && (0, i.jsx)(V, { channel: s, focusedParticipant: l }),
            ],
        });
    } else u && (t = (0, i.jsx)(f.A, { guildEvent: r, recurrenceId: d }));
    return (0, i.jsx)("div", { className: w.kL, children: t });
}
function F(e) {
    let { channel: t, guild: l, appContext: d, inCall: c, isChatOpen: p, exitFullScreen: g } = e,
        { focusedParticipant: _ } = (0, a.cf)(
            [j.A],
            () => ({
                focusedParticipant: j.A.getSelectedParticipant(t.id),
                participantsOpen: j.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        f = (0, A.Ay)(t),
        I = (0, m.gU)(t),
        [T] = (0, u.A)(_?.type === D.lp.ACTIVITY ? [_.applicationId] : []),
        v = P.intl.string(P.t.BVZqJl);
    t.isDM() ? (v = P.intl.string(P.t.jN2DfZ)) : t.isGroupDM() && (v = P.intl.string(P.t["e5y+gm"]));
    let y = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        L = t.isGuildVoice() && c && null != y && y.length > 0,
        G = (0, R.Ay)(t),
        V = L
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: P.intl.string(P.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: G,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(w.WH, { [w.BI]: G }),
                      onClick: G
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
                              className: s()(w.Gh, k.PT, { [w.BI]: G }),
                              children: N.A.parseVoiceChannelStatus(y, !0, { channelId: t.id }),
                          }),
                          G &&
                              (0, i.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: s()(w.rD, w.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        B = (0, S.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: w.SC,
        children: [
            (0, i.jsx)(o.NPJ, {
                theme: U.NJ.DARK,
                children: (e) =>
                    (0, i.jsxs)(x.Ay, {
                        onDoubleClick: C.I,
                        transparent: !0,
                        className: s()(e, w.jr),
                        innerClassName: w.gi,
                        toolbarClassName: w.KE,
                        childrenBottom: V,
                        toolbar: (0, i.jsx)(O.A, {
                            channel: t,
                            appContext: d,
                            inCall: c,
                            isChatOpen: p,
                            exitFullScreen: g,
                        }),
                        children: [
                            (0, i.jsx)(x.Ay.Title, {
                                wrapperClassName: w.DD,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != I ? (0, i.jsx)(x.Ay.ChannelIcon, { icon: I, "aria-label": v }) : null,
                                        f,
                                        B &&
                                            (0, i.jsx)(r.m, {
                                                text: P.intl.string(P.t.QyZ4Td),
                                                children: (0, i.jsx)(o.m5V, {
                                                    size: "xs",
                                                    "aria-label": P.intl.string(P.t.VHXh8a),
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    className: w.vW,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, i.jsx)(E.i$, { channel: t, guild: l }),
                            (0, i.jsx)(H, { focusedApplication: T, focusedParticipant: _, channel: t }),
                        ],
                    }),
            }),
            (0, i.jsx)(b.A, { channelId: t.id }),
        ],
    });
}
