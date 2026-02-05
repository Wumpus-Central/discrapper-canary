n.d(t, { A: () => z, D: () => K });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(435371),
    c = n(397927),
    d = n(367513),
    u = n(401843),
    h = n(964486),
    m = n(684339),
    A = n(164617),
    p = n(402216),
    g = n(626584),
    f = n(525505),
    _ = n(753727),
    E = n(315606),
    C = n(638480),
    x = n(607407),
    S = n(872363),
    T = n(901690),
    I = n(351073),
    N = n(919706),
    v = n(616356),
    y = n(961350),
    b = n(734057),
    R = n(430452),
    j = n(531685),
    M = n(200749),
    D = n(70171),
    O = n(566331),
    L = n(768088),
    P = n(256195),
    w = (n(729365), n(399849)),
    k = n(275731),
    U = n(345812),
    G = n(652215),
    F = n(806931),
    H = n(731854),
    B = n(985018),
    V = n(707511);
let W = new g.A("StreamTile");
function K(e) {
    let { participant: t, selected: n, focused: l, idle: a, width: s, premiumIndicator: o } = e,
        c = (0, r.bG)([v.A], () => v.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, U.V)(s);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(k.A, { participant: t }),
            l || null == c || c.state === G.XYD.ENDED || c.state === G.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: p.Ay.Sizes.SMALL,
                      className: V.Ok,
                      participant: t,
                      showQuality: !d && !a,
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
            onVideoResize: a,
            fit: p,
            popoutType: g,
            width: S,
            focused: k,
            wrapperClassName: U,
            paused: K = !1,
            idle: z = !1,
            controlsBottom: Y,
        } = e,
        q = R.A.getVideoComponent(),
        J = (0, r.bG)([y.default], () => y.default.getId()),
        $ = (0, _.A)(),
        { stream: Z, user: X, streamId: Q } = t,
        ee = (0, r.bG)([b.A], () => b.A.getChannel(Z.channelId)),
        et = (0, r.bG)([v.A], () => v.A.getActiveStreamForUser(X.id, Z.guildId), [X.id, Z.guildId]),
        { defaultWatchMultipleStreams: en } = (0, E.W)({ location: "StreamTile" }),
        ei = (0, r.bG)([v.A], () => v.A.getAllActiveStreams().length > 0),
        el = (0, r.bG)([j.A], () => j.A.isFocused()),
        ea = et?.ownerId === J,
        es = ea && !el && g === A.N.NO_POPOUT,
        er = null != et ? (0, C.A)(et, X, X.id === J, es) : null,
        eo = S < 195;
    (0, h.Ay)(() => {
        !ei && ee?.isGuildStageVoice() && !ea && ((0, u.A9)(Z), d.A.updateStageStreamSize(Z.channelId, !1));
    });
    let ec = (0, f.u)(H.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            W.info(
                `Stream Tile State - activeStream: ${null != et} | selected: ${n} | Video: ${null != q} | MediaEngine: ${R.A.supports(H.O5.VIDEO)}`,
            );
        }, [q, et, n]),
        $)
    )
        return (0, i.jsx)(w.A, { stream: t.stream, isSmall: eo, selected: n, isSelfStream: X.id === J });
    if (et?.state === G.XYD.ENDED) return (0, i.jsx)(O.A, { selected: n, stream: et, width: S });
    if (null != ec || et?.state === G.XYD.FAILED)
        return (0, i.jsx)(L.A, { avError: ec?.type, avErrorContext: ec, selected: n, stream: t.stream, width: S });
    if (t.type === F.lp.HIDDEN_STREAM) return (0, i.jsx)(P.A, { selected: n, participant: t, width: S });
    if (!(null != et && !n && null != q && R.A.supports(H.O5.VIDEO)))
        return (0, i.jsxs)("div", {
            className: s()(V.Qs, V.Rh, { [V.EX]: eo }),
            children: [
                (0, i.jsx)(x.A, {
                    noImage: !0,
                    noText: !0,
                    className: s()(V.HL, { [V.gH]: null == et }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: V.lO,
                                  children: (0, i.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: eo ? "sm" : "md",
                                      text: S < 175 ? B.intl.string(B.t.I6JG46) : B.intl.string(B.t["7Xq/nV"]),
                                  }),
                              }),
                              ei && !en
                                  ? (0, i.jsx)("div", {
                                        className: s()(V.lO, V.EU),
                                        children: (0, i.jsx)(o.m_, {
                                            text: B.intl.string(B.t.wCrzut),
                                            children: (0, i.jsx)(c.K0, {
                                                variant: "secondary",
                                                size: eo ? "sm" : "md",
                                                icon: c.vAm,
                                                "aria-label": B.intl.string(B.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, u.A9)(t.stream, { forceMultiple: !0 });
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                null != ee
                    ? (0, i.jsx)(I.A, {
                          focused: k,
                          channelId: ee.id,
                          guildId: ee.guild_id,
                          streamerId: X.id,
                          hasScreenMessage: null != er,
                          stream: Z,
                      })
                    : null,
                (0, i.jsx)(
                    T.A,
                    {
                        enableZoom: k,
                        onResize: a,
                        wrapperClassName: s()(g !== A.N.CALL_TILE ? V.tN : void 0, U),
                        className: V.Qs,
                        streamId: Q,
                        videoComponent: q,
                        fit: p,
                        paused: K || et?.state === G.XYD.PAUSED || es,
                        videoSpinnerContext: ea ? m.u.SELF_STREAM : m.u.REMOTE_STREAM,
                        userId: X.id,
                        streamKey: t.id,
                        controlsBottom: Y,
                        idle: z,
                    },
                    Q,
                ),
                null != er ? (0, i.jsx)(N.A, { size: (0, M.J)(S), ...er }) : null,
                (0, i.jsx)(D.A, { stream: Z, popoutType: g }),
            ],
        });
}
