n.d(t, {
    A: () => B,
}),
    n(896048);
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(311907),
    s = n(990078),
    o = n(397927),
    c = n(730134),
    u = n(440594),
    d = n(429913),
    f = n(309698),
    p = n(47167),
    h = n(713654),
    b = n(769015),
    g = n(508654),
    m = n(974930),
    A = n(961314),
    y = n(58736),
    O = n(742589),
    j = n(353428),
    v = n(267102),
    x = n(46054),
    E = n(164203),
    _ = n(665691),
    C = n(241756),
    S = n(447404),
    I = n(313961),
    N = n(532622),
    T = n(780642),
    P = n(416528),
    w = n(525788),
    R = n(136523),
    D = n(806931),
    M = n(652215),
    L = n(818348),
    G = n(985018),
    k = n(597217),
    U = n(206314);

function V(e) {
    let { focusedParticipant: t, channel: n } = e,
        l = (0, v.Us)(),
        i = (0, a.bG)([I.A], () => I.A.getLayout(n.id, l));
    return (0, r.jsx)(S.A, {
        children: (0, r.jsx)(w.A, {
            participant: t,
            maxVisibleUsers: 5,
            guildId: n.getGuildId(),
            channelId: n.id,
            disableInteraction: l === M.BRT.POPOUT || i === M.DUB.FULL_SCREEN,
        }),
    });
}

function F(e) {
    let { user: t, channel: n, stream: l, color: i } = e,
        a = (0, C.A)(n, t, l);
    return null == t || null == l
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(c.A, {
                      className: k.my,
                      size: o._3J.SIZE_24,
                      user: t,
                      animate: !1,
                  }),
                  (0, r.jsx)(o.Text, {
                      className: k.W$,
                      variant: "text-md/medium",
                      color: i,
                      children: a,
                  }),
              ],
          });
}

function H(e) {
    let t,
        { focusedApplication: n, focusedParticipant: l, channel: i } = e,
        a = (0, T.A)(i, !0),
        s = (0, g.Qs)(i.id),
        c = null != s ? (0, m.G3)(s) : null,
        d = null != s;
    if ((null == l ? void 0 : l.type) === D.lp.ACTIVITY)
        null != n &&
            (t = (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(y.Ay.Divider, {
                        className: k.yF,
                    }),
                    (0, r.jsx)(b.A, {
                        game: n,
                        className: k.RI,
                    }),
                    (0, r.jsx)(o.Text, {
                        className: k.W$,
                        variant: "text-md/normal",
                        color: "none",
                        children: (0, u.A)(n.name),
                    }),
                    a &&
                        (0, r.jsx)(V, {
                            channel: i,
                            focusedParticipant: l,
                        }),
                ],
            }));
    else if ((null == l ? void 0 : l.type) === D.lp.STREAM) {
        let e = l.user,
            n = l.stream;
        t = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(y.Ay.Divider, {
                    className: k.yF,
                }),
                (0, r.jsx)(F, {
                    user: e,
                    channel: i,
                    stream: n,
                    color: a ? "text-strong" : "none",
                }),
                a &&
                    (0, r.jsx)(V, {
                        channel: i,
                        focusedParticipant: l,
                    }),
            ],
        });
    } else
        d &&
            (t = (0, r.jsx)(A.A, {
                guildEvent: s,
                recurrenceId: c,
            }));
    return (0, r.jsx)("div", {
        className: k.kL,
        children: t,
    });
}

function B(e) {
    let { channel: t, guild: l, appContext: c, inCall: u, isChatOpen: b, exitFullScreen: g } = e,
        { focusedParticipant: m } = (0, a.cf)(
            [I.A],
            () => ({
                focusedParticipant: I.A.getSelectedParticipant(t.id),
                participantsOpen: I.A.getParticipantsOpen(t.id),
            }),
            [t.id],
        ),
        A = (0, p.Ay)(t),
        v = (0, h.gU)(t),
        [C] = (0, d.A)((null == m ? void 0 : m.type) === D.lp.ACTIVITY ? [m.applicationId] : []),
        S = G.intl.string(G.t.BVZqJl);
    t.isDM() ? (S = G.intl.string(G.t.jN2DfZ)) : t.isGroupDM() && (S = G.intl.string(G.t["e5y+gm"]));
    let T = (0, a.bG)([f.A], () => f.A.getChannelStatus(t)),
        w = t.isGuildVoice() && u && null != T && T.length > 0,
        M = (0, N.Ay)(t),
        V = w
            ? (0, r.jsx)(s.m, {
                  asContainer: !0,
                  text: G.intl.string(G.t.Mgpxiw),
                  delay: 500,
                  position: "bottom",
                  shouldShow: M,
                  children: (0, r.jsxs)(o.DUT, {
                      className: i()(k.WH, {
                          [k.BI]: M,
                      }),
                      onClick: M
                          ? function () {
                                (0, o.mMO)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 136523));
                                        return (n) =>
                                            (0, r.jsx)(
                                                e,
                                                (function (e) {
                                                    for (var t = 1; t < arguments.length; t++) {
                                                        var n = null != arguments[t] ? arguments[t] : {},
                                                            r = Object.keys(n);
                                                        "function" == typeof Object.getOwnPropertySymbols &&
                                                            (r = r.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                    return Object.getOwnPropertyDescriptor(n, e)
                                                                        .enumerable;
                                                                }),
                                                            )),
                                                            r.forEach(function (t) {
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0,
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })(
                                                    {
                                                        channel: t,
                                                    },
                                                    n,
                                                ),
                                            );
                                    },
                                    {
                                        modalKey: R.m,
                                    },
                                );
                            }
                          : void 0,
                      children: [
                          (0, r.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              className: i()(k.Gh, U.PT, {
                                  [k.BI]: M,
                              }),
                              children: x.A.parseVoiceChannelStatus(T, !0, {
                                  channelId: t.id,
                              }),
                          }),
                          M &&
                              (0, r.jsx)(o.R2l, {
                                  size: "custom",
                                  color: "currentColor",
                                  className: i()(k.rD, k.BI),
                                  width: 14,
                                  height: 14,
                              }),
                      ],
                  }),
              })
            : null,
        F = (0, _.bG)({
            channelId: t.id,
        });
    return (0, r.jsxs)("div", {
        className: k.SC,
        children: [
            (0, r.jsx)(o.NPJ, {
                theme: L.NJ.DARK,
                children: (e) =>
                    (0, r.jsxs)(y.Ay, {
                        onDoubleClick: O.I,
                        transparent: !0,
                        className: i()(e, k.jr),
                        innerClassName: k.gi,
                        toolbarClassName: k.KE,
                        childrenBottom: V,
                        toolbar: (0, r.jsx)(P.A, {
                            channel: t,
                            appContext: c,
                            inCall: u,
                            isChatOpen: b,
                            exitFullScreen: g,
                        }),
                        children: [
                            (0, r.jsx)(y.Ay.Title, {
                                wrapperClassName: k.DD,
                                children: (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        null != v
                                            ? (0, r.jsx)(y.Ay.ChannelIcon, {
                                                  icon: v,
                                                  "aria-label": S,
                                              })
                                            : null,
                                        A,
                                        F &&
                                            (0, r.jsx)(s.m, {
                                                text: G.intl.string(G.t.QyZ4Td),
                                                children: (0, r.jsx)(o.m5V, {
                                                    size: "xs",
                                                    "aria-label": G.intl.string(G.t.VHXh8a),
                                                    color: o.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
                                                    className: k.vW,
                                                }),
                                            }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)(j.i$, {
                                channel: t,
                                guild: l,
                            }),
                            (0, r.jsx)(H, {
                                focusedApplication: C,
                                focusedParticipant: m,
                                channel: t,
                            }),
                        ],
                    }),
            }),
            (0, r.jsx)(E.A, {
                channelId: t.id,
            }),
        ],
    });
}
