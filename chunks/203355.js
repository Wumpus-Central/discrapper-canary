n.d(t, {
    A: () => z,
    D: () => W,
});
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(435371),
    c = n(397927),
    u = n(367513),
    d = n(401843),
    f = n(964486),
    p = n(684339),
    b = n(164617),
    g = n(402216),
    m = n(626584),
    h = n(525505),
    A = n(753727),
    y = n(315606),
    _ = n(638480),
    E = n(607407),
    v = n(872363),
    O = n(901690),
    x = n(351073),
    S = n(919706),
    N = n(616356),
    C = n(961350),
    j = n(734057),
    T = n(430452),
    I = n(531685),
    w = n(200749),
    R = n(70171),
    P = n(566331),
    D = n(768088),
    k = n(256195),
    L = (n(729365), n(399849)),
    M = n(275731),
    U = n(345812),
    V = n(652215),
    F = n(806931),
    G = n(731854),
    H = n(985018),
    B = n(707511);
let Y = new m.A("StreamTile");

function W(e) {
    let { participant: t, selected: n, focused: r, idle: i, width: a, premiumIndicator: o } = e,
        c = (0, s.bG)([N.A], () => N.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        u = (0, U.V)(a);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            n || r
                ? null
                : (0, l.jsx)(M.A, {
                      participant: t,
                  }),
            r || null == c || c.state === V.XYD.ENDED || c.state === V.XYD.FAILED
                ? null
                : (0, l.jsx)(v.A, {
                      size: g.Ay.Sizes.SMALL,
                      className: B.Ok,
                      participant: t,
                      showQuality: !u && !i,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}

function z(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: i,
            fit: g,
            popoutType: m,
            width: v,
            focused: M,
            wrapperClassName: U,
            paused: W = !1,
            idle: z = !1,
            controlsBottom: K,
        } = e,
        X = T.A.getVideoComponent(),
        Z = (0, s.bG)([C.default], () => C.default.getId()),
        J = (0, A.A)(),
        { stream: q, user: Q, streamId: $ } = t,
        ee = (0, s.bG)([j.A], () => j.A.getChannel(q.channelId)),
        et = (0, s.bG)([N.A], () => N.A.getActiveStreamForUser(Q.id, q.guildId), [Q.id, q.guildId]),
        { defaultWatchMultipleStreams: en } = (0, y.W)({
            location: "StreamTile",
        }),
        el = (0, s.bG)([N.A], () => N.A.getAllActiveStreams().length > 0),
        er = (0, s.bG)([I.A], () => I.A.isFocused()),
        ei = (null == et ? void 0 : et.ownerId) === Z,
        ea = ei && !er && m === b.N.NO_POPOUT,
        es = null != et ? (0, _.A)(et, Q, Q.id === Z, ea) : null,
        eo = v < 195;
    (0, f.Ay)(() => {
        !el &&
            (null == ee ? void 0 : ee.isGuildStageVoice()) &&
            !ei &&
            ((0, d.A9)(q), u.A.updateStageStreamSize(q.channelId, !1));
    });
    let ec = (0, h.u)(G.x.STREAM, t.user.id);
    if (
        (r.useEffect(() => {
            Y.info(
                "Stream Tile State - activeStream: "
                    .concat(null != et, " | selected: ")
                    .concat(n, " | Video: ")
                    .concat(null != X, " | MediaEngine: ")
                    .concat(T.A.supports(G.O5.VIDEO)),
            );
        }, [X, et, n]),
        J)
    )
        return (0, l.jsx)(L.A, {
            stream: t.stream,
            isSmall: eo,
            selected: n,
            isSelfStream: Q.id === Z,
        });
    if ((null == et ? void 0 : et.state) === V.XYD.ENDED)
        return (0, l.jsx)(P.A, {
            selected: n,
            stream: et,
            width: v,
        });
    if (null != ec || (null == et ? void 0 : et.state) === V.XYD.FAILED)
        return (0, l.jsx)(D.A, {
            avError: null == ec ? void 0 : ec.type,
            avErrorContext: ec,
            selected: n,
            stream: t.stream,
            width: v,
        });
    if (t.type === F.lp.HIDDEN_STREAM)
        return (0, l.jsx)(k.A, {
            selected: n,
            participant: t,
            width: v,
        });
    if (!(null != et && !n && null != X && T.A.supports(G.O5.VIDEO)))
        return (0, l.jsxs)("div", {
            className: a()(B.Qs, B.Rh, {
                [B.EX]: eo,
            }),
            children: [
                (0, l.jsx)(E.A, {
                    noImage: !0,
                    noText: !0,
                    className: a()(B.HL, {
                        [B.gH]: null == et,
                    }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)("div", {
                                  className: B.lO,
                                  children: (0, l.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: eo ? "sm" : "md",
                                      text: v < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"]),
                                  }),
                              }),
                              el && !en
                                  ? (0, l.jsx)("div", {
                                        className: a()(B.lO, B.EU),
                                        children: (0, l.jsx)(o.m_, {
                                            text: H.intl.string(H.t.wCrzut),
                                            children: (0, l.jsx)(c.K0, {
                                                variant: "secondary",
                                                size: eo ? "sm" : "md",
                                                icon: c.vAm,
                                                "aria-label": H.intl.string(H.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(),
                                                        (0, d.A9)(t.stream, {
                                                            forceMultiple: !0,
                                                        });
                                                },
                                            }),
                                        }),
                                    })
                                  : null,
                          ],
                      }),
            ],
        });
    else
        return (0, l.jsxs)(l.Fragment, {
            children: [
                null != ee
                    ? (0, l.jsx)(x.A, {
                          focused: M,
                          channelId: ee.id,
                          guildId: ee.guild_id,
                          streamerId: Q.id,
                          hasScreenMessage: null != es,
                          stream: q,
                      })
                    : null,
                (0, l.jsx)(
                    O.A,
                    {
                        enableZoom: M,
                        onResize: i,
                        wrapperClassName: a()(m !== b.N.CALL_TILE ? B.tN : void 0, U),
                        className: B.Qs,
                        streamId: $,
                        videoComponent: X,
                        fit: g,
                        paused: W || (null == et ? void 0 : et.state) === V.XYD.PAUSED || ea,
                        videoSpinnerContext: ei ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
                        userId: Q.id,
                        streamKey: t.id,
                        controlsBottom: K,
                        idle: z,
                    },
                    $,
                ),
                null != es
                    ? (0, l.jsx)(
                          S.A,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      l = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      l.forEach(function (t) {
                                          var l;
                                          (l = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = l);
                                      });
                              }
                              return e;
                          })(
                              {
                                  size: (0, w.J)(v),
                              },
                              es,
                          ),
                      )
                    : null,
                (0, l.jsx)(R.A, {
                    stream: q,
                    popoutType: m,
                }),
            ],
        });
}
