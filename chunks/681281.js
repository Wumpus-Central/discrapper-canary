n.d(t, { A: () => F });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(311907),
    r = n(990078),
    o = n(397927),
    c = n(730134),
    d = n(440594),
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
    C = n(267102),
    N = n(46054),
    T = n(164203),
    S = n(665691),
    b = n(123973),
    y = n(241756),
    v = n(447404),
    j = n(313961),
    R = n(532622),
    O = n(416528),
    L = n(525788),
    M = n(136523),
    D = n(806931),
    U = n(652215),
    G = n(818348),
    P = n(985018),
    k = n(35471),
    w = n(830684);
function B(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, C.Us)(),
        s = (0, a.bG)([j.A], () => j.A.getLayout(n.id, l));
    return (0, i.jsx)(v.A, {
        children: (0, i.jsx)(L.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === U.BRT.POPOUT || s === U.DUB.FULL_SCREEN,
        }),
    });
}
function V(e) {
    let { user: t, channel: n, stream: l, color: s } = e,
        a = (0, y.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.A, { className: k.my, size: o._3J.SIZE_24, user: t, animate: !1 }),
                  (0, i.jsx)(o.Text, { className: k.W$, variant: "text-md/medium", color: s, children: a }),
              ],
          });
}
function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: s } = e,
        a = (0, b.$F)(s),
        r = (0, g.Qs)(s.id),
        c = null != r ? (0, p.G3)(r) : null,
        u = null != r;
    if (l?.type === D.lp.ACTIVITY)
        null != n &&
            (t = (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(x.Ay.Divider, { className: k.yF }),
                    (0, i.jsx)(m.A, { game: n, className: k.RI }),
                    (0, i.jsx)(o.Text, {
                        className: k.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, d.A)(n.name),
                    }),
                    a && (0, i.jsx)(B, { channel: s, focusedParticipant: l }),
                ],
            }));
    else if (l?.type === D.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(x.Ay.Divider, { className: k.yF }),
                (0, i.jsx)(V, { user: e, channel: s, stream: n, color: a ? "text-strong" : "none" }),
                a && (0, i.jsx)(B, { channel: s, focusedParticipant: l }),
            ],
        });
    } else u && (t = (0, i.jsx)(f.A, { guildEvent: r, recurrenceId: c }));
    return (0, i.jsx)("div", { className: k.kL, children: t });
}
function F(e) {
    let { channel: t, guild: l, appContext: c, inCall: d, isChatOpen: m, exitFullScreen: g } = e,
        { focusedParticipant: p } = (0, a.cf)(
            [j.A],
            () => ({
                focusedParticipant: j.A.getSelectedParticipant(t.id),
                participantsOpen: j.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        f = (0, A.Ay)(t),
        C = (0, _.gU)(t),
        [b] = (0, u.A)(p?.type === D.lp.ACTIVITY ? [p.applicationId] : []),
        y = P.intl.string(P.t.BVZqJl);
    t.isDM() ? (y = P.intl.string(P.t.jN2DfZ)) : t.isGroupDM() && (y = P.intl.string(P.t["e5y+gm"]));
    let v = (0, a.bG)([h.A], () => h.A.getChannelStatus(t)),
        L = t.isGuildVoice() && d && null != v && v.length > 0,
        U = (0, R.Ay)(t),
        B = L
            ? (0, i.jsx)(r.m, {
                  asContainer: !0,
                  text: P.intl.string(P.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: U,
                  children: (0, i.jsxs)(o.DUT, {
                      className: s()(k.WH, { [k.BI]: U }),
                      onClick: U
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
                              className: s()(k.Gh, w.PT, { [k.BI]: U }),
                              children: N.A.parseVoiceChannelStatus(v, !0, { channelId: t.id }),
                          }),
                          U &&
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
        V = (0, S.bG)({ channelId: t.id });
    return (0, i.jsxs)("div", {
        className: k.SC,
        children: [
            (0, i.jsx)(o.NPJ, {
                theme: G.NJ.DARK,
                children: (e) =>
                    (0, i.jsxs)(x.Ay, {
                        onDoubleClick: E.I,
                        transparent: !0,
                        className: s()(e, k.jr),
                        innerClassName: k.gi,
                        toolbarClassName: k.KE,
                        childrenBottom: B,
                        toolbar: (0, i.jsx)(O.A, {
                            channel: t,
                            appContext: c,
                            inCall: d,
                            isChatOpen: m,
                            exitFullScreen: g,
                        }),
                        children: [
                            (0, i.jsx)(x.Ay.Title, {
                                wrapperClassName: k.DD,
                                children: (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        null != C ? (0, i.jsx)(x.Ay.ChannelIcon, { icon: C, "aria-label": y }) : null,
                                        f,
                                        V &&
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
                            (0, i.jsx)(I.i$, { channel: t, guild: l }),
                            (0, i.jsx)(H, { focusedApplication: b, focusedParticipant: p, channel: t }),
                        ],
                    }),
            }),
            (0, i.jsx)(T.A, { channelId: t.id }),
        ],
    });
}
