n.d(t, { A: () => W, D: () => V });
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
    g = n(402216),
    p = n(626584),
    _ = n(525505),
    f = n(753727),
    E = n(638480),
    C = n(607407),
    x = n(872363),
    S = n(901690),
    I = n(919706),
    T = n(616356),
    v = n(961350),
    N = n(734057),
    y = n(430452),
    b = n(531685),
    j = n(200749),
    R = n(70171),
    M = n(566331),
    L = n(768088),
    O = n(256195),
    D = n(399849),
    P = n(275731),
    U = n(345812),
    k = n(652215),
    w = n(806931),
    G = n(731854),
    F = n(985018),
    H = n(633916);
let B = new p.A("StreamTile");
function V(e) {
    let { participant: t, selected: n, focused: l, idle: a, width: s, premiumIndicator: o } = e,
        c = (0, r.bG)([T.A], () => T.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, U.VE)(s);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(P.A, { participant: t }),
            l || null == c || c.state === k.XYD.ENDED || c.state === k.XYD.FAILED
                ? null
                : (0, i.jsx)(x.A, {
                      size: g.Ay.Sizes.SMALL,
                      className: H.Ok,
                      participant: t,
                      showQuality: !d && !a,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function W(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: a,
            fit: g,
            popoutType: p,
            width: x,
            wrapperClassName: P,
            paused: U = !1,
        } = e,
        V = y.Ay.getVideoComponent(),
        W = (0, r.bG)([v.default], () => v.default.getId()),
        K = (0, f.A)(),
        { stream: z, user: Y, streamId: J } = t,
        q = (0, r.bG)([N.A], () => N.A.getChannel(z.channelId)),
        $ = (0, r.bG)([T.A], () => T.A.getActiveStreamForUser(Y.id, z.guildId), [Y.id, z.guildId]),
        Z = (0, r.bG)([T.A], () => T.A.getAllActiveStreams().length > 0),
        X = (0, r.bG)([b.A], () => b.A.isFocused()),
        Q = $?.ownerId === W,
        ee = Q && !X && p === A.N.NO_POPOUT,
        et = null != $ ? (0, E.A)($, Y, Y.id === W, ee) : null,
        en = x < 195;
    (0, h.Ay)(() => {
        !Z && q?.isGuildStageVoice() && !Q && ((0, u.A9)(z), d.A.updateStageStreamSize(z.channelId, !1));
    });
    let ei = (0, _.u)(G.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            B.info(
                `Stream Tile State - activeStream: ${null != $} | selected: ${n} | Video: ${null != V} | MediaEngine: ${y.Ay.supports(G.O5.VIDEO)}`,
            );
        }, [V, $, n]),
        K)
    )
        return (0, i.jsx)(D.A, { stream: t.stream, isSmall: en, selected: n, isSelfStream: Y.id === W });
    if ($?.state === k.XYD.ENDED) return (0, i.jsx)(M.A, { selected: n, stream: $, width: x });
    if (null != ei || $?.state === k.XYD.FAILED)
        return (0, i.jsx)(L.A, { avError: ei?.type, avErrorContext: ei, selected: n, stream: t.stream, width: x });
    if (t.type === w.lp.HIDDEN_STREAM) return (0, i.jsx)(O.A, { selected: n, participant: t, width: x });
    if (null != $ && !n && null != V && y.Ay.supports(G.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    S.A,
                    {
                        onResize: a,
                        wrapperClassName: s()(p !== A.N.CALL_TILE ? H.tN : void 0, P),
                        className: H.Qs,
                        streamId: J,
                        videoComponent: V,
                        fit: g,
                        paused: U || $?.state === k.XYD.PAUSED || ee,
                        videoSpinnerContext: Q ? m.u.SELF_STREAM : m.u.REMOTE_STREAM,
                        userId: Y.id,
                        streamKey: t.id,
                    },
                    J,
                ),
                null != et ? (0, i.jsx)(I.A, { size: (0, j.J)(x), ...et }) : null,
                (0, i.jsx)(R.A, { stream: z, popoutType: p }),
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: s()(H.Qs, H.Rh, { [H.EX]: en }),
            children: [
                (0, i.jsx)(C.A, {
                    noImage: !0,
                    noText: !0,
                    className: s()(H.HL, { [H.gH]: null == $ }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: H.lO,
                                  children: (0, i.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: en ? "sm" : "md",
                                      text: x < 175 ? F.intl.string(F.t.I6JG46) : F.intl.string(F.t["7Xq/nV"]),
                                  }),
                              }),
                              Z
                                  ? (0, i.jsx)("div", {
                                        className: s()(H.lO, H.EU),
                                        children: (0, i.jsx)(o.m_, {
                                            text: F.intl.string(F.t.wCrzut),
                                            children: (0, i.jsx)(c.K0, {
                                                variant: "secondary",
                                                size: en ? "sm" : "md",
                                                icon: c.vAm,
                                                "aria-label": F.intl.string(F.t.wCrzut),
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
}
