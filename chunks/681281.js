"use strict";
n.d(t, { A: () => F });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(990078),
    o = n(397927),
    c = n(730134),
    d = n(440594),
    u = n(429913),
    h = n(309698),
    A = n(47167),
    m = n(713654),
    _ = n(769015),
    p = n(508654),
    g = n(974930),
    f = n(961314),
    x = n(58736),
    E = n(742589),
    C = n(353428),
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
    w = n(35471),
    k = n(830684);
function V(e) {
    let { focusedParticipant: t, channel: n } = e,
        s = (0, I.Us)(),
        l = (0, r.bG)([j.A], () => j.A.getLayout(n.id, s));
    return (0, i.jsx)(y.A, {
        children: (0, i.jsx)(L.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: s === G.BRT.POPOUT || l === G.DUB.FULL_SCREEN,
        }),
    });
}
function B(e) {
    let { user: t, channel: n, stream: s, color: l } = e,
        r = (0, v.A)(n, t, s);
    return null == t || null == s
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.A, { className: w.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: w.W$, variant: "text-md/medium", color: l, children: r }),
              ],
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: s, channel: l } = e,
        r = (0, T.$F)(l),
        a = (0, p.Qs)(l.id),
        c = null != a ? (0, g.G3)(a) : null,
        u = null != a;
    if (s?.type === D.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.Ay.Divider, { className: w.yF }),
                    (0, i.jsx)(_.A, { game: n, className: w.RI }),
                    (0, i.jsx)(o.Text, {
                        className: w.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, d.A)(n.name),
                    }),
                    r && (0, i.jsx)(V, { channel: l, focusedParticipant: s }),
                ],
            }));
    else if (s?.type === D.lp.STREAM) {
        let e = s.user,
            n = s.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Ay.Divider, { className: w.yF }),
                (0, i.jsx)(B, { user: e, channel: l, stream: n, color: r ? "text-strong" : "none" }),
                r && (0, i.jsx)(V, { channel: l, focusedParticipant: s }),
            ],
        });
    } else u && (t = (0, i.jsx)(f.A, { guildEvent: a, recurrenceId: c }));
    return (0, i.jsx)("div", { className: w.kL, children: t });
}
function F(e) {
    let { channel: t, guild: s, appContext: c, inCall: d, isChatOpen: _, exitFullScreen: p } = e,
        { focusedParticipant: g } = (0, r.cf)(
            [j.A],
            () => ({
                focusedParticipant: j.A.getSelectedParticipant(t.id),
                participantsOpen: j.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        f = (0, A.Ay)(t),
        I = (0, m.gU)(t),
        [T] = (0, u.A)(g?.type === D.lp.ACTIVITY ? [g.applicationId] : []),
        v = P.intl.string(P.t.BVZqJl);
    t.isDM() ? (v = P.intl.string(P.t.jN2DfZ)) : t.isGroupDM() && (v = P.intl.string(P.t["e5y+gm"]));
    let y = (0, r.bG)([h.A], () => h.A.getChannelStatus(t)),
        L = t.isGuildVoice() && d && null != y && y.length > 0,
        G = (0, R.Ay)(t),
        V = L
            ? (0, i.jsx)(a.m, {
                  asContainer: !0,
                  text: P.intl.string(P.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: G,
                  children: (0, i.jsxs)(o.DUT, {
                      className: l()(w.WH, { [w.BI]: G }),
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
                              className: l()(w.Gh, k.PT, { [w.BI]: G }),
                              children: N.A.parseVoiceChannelStatus(y, !0, { channelId: t.id }),
                          }),
                          G &&
                              (0, i.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: l()(w.rD, w.BI),
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
                        onDoubleClick: E.I,
                        transparent: !0,
                        className: l()(e, w.jr),
                        innerClassName: w.gi,
                        toolbarClassName: w.KE,
                        childrenBottom: V,
                        toolbar: (0, i.jsx)(O.A, {
                            channel: t,
                            appContext: c,
                            inCall: d,
                            isChatOpen: _,
                            exitFullScreen: p,
                        }),
                        children: [
                            (0, i.jsx)(x.Ay.Title, {
                                wrapperClassName: w.DD,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != I ? (0, i.jsx)(x.Ay.ChannelIcon, { icon: I, "aria-label": v }) : null,
                                        f,
                                        B &&
                                            (0, i.jsx)(a.m, {
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
                            (0, i.jsx)(C.i$, { channel: t, guild: s }),
                            (0, i.jsx)(H, { focusedApplication: T, focusedParticipant: g, channel: t }),
                        ],
                    }),
            }),
            (0, i.jsx)(b.A, { channelId: t.id }),
        ],
    });
}
