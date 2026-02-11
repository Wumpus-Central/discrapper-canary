n.d(t, { A: () => W, D: () => K });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
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
    N = n(919706),
    I = n(616356),
    y = n(961350),
    v = n(734057),
    b = n(430452),
    j = n(531685),
    R = n(200749),
    M = n(70171),
    D = n(566331),
    O = n(768088),
    L = n(256195),
    P = (n(729365), n(399849)),
    w = n(275731),
    k = n(345812),
    U = n(652215),
    G = n(806931),
    F = n(731854),
    H = n(985018),
    B = n(707511);
let V = new g.A("StreamTile");
function K(e) {
    let { participant: t, selected: n, focused: l, idle: s, width: a, premiumIndicator: o } = e,
        c = (0, r.bG)([I.A], () => I.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, k.V)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(w.A, { participant: t }),
            l || null == c || c.state === U.XYD.ENDED || c.state === U.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: p.Ay.Sizes.SMALL,
                      className: B.Ok,
                      participant: t,
                      showQuality: !d && !s,
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
            onVideoResize: s,
            fit: p,
            popoutType: g,
            width: S,
            focused: w,
            wrapperClassName: k,
            paused: K = !1,
            idle: W = !1,
            controlsBottom: z,
        } = e,
        Y = b.Ay.getVideoComponent(),
        q = (0, r.bG)([y.default], () => y.default.getId()),
        J = (0, _.A)(),
        { stream: $, user: Z, streamId: X } = t,
        Q = (0, r.bG)([v.A], () => v.A.getChannel($.channelId)),
        ee = (0, r.bG)([I.A], () => I.A.getActiveStreamForUser(Z.id, $.guildId), [Z.id, $.guildId]),
        { defaultWatchMultipleStreams: et } = (0, E.W)({ location: "StreamTile" }),
        en = (0, r.bG)([I.A], () => I.A.getAllActiveStreams().length > 0),
        ei = (0, r.bG)([j.A], () => j.A.isFocused()),
        el = ee?.ownerId === q,
        es = el && !ei && g === A.N.NO_POPOUT,
        ea = null != ee ? (0, C.A)(ee, Z, Z.id === q, es) : null,
        er = S < 195;
    (0, h.Ay)(() => {
        !en && Q?.isGuildStageVoice() && !el && ((0, u.A9)($), d.A.updateStageStreamSize($.channelId, !1));
    });
    let eo = (0, f.u)(F.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            V.info(
                `Stream Tile State - activeStream: ${null != ee} | selected: ${n} | Video: ${null != Y} | MediaEngine: ${b.Ay.supports(F.O5.VIDEO)}`,
            );
        }, [Y, ee, n]),
        J)
    )
        return (0, i.jsx)(P.A, { stream: t.stream, isSmall: er, selected: n, isSelfStream: Z.id === q });
    if (ee?.state === U.XYD.ENDED) return (0, i.jsx)(D.A, { selected: n, stream: ee, width: S });
    if (null != eo || ee?.state === U.XYD.FAILED)
        return (0, i.jsx)(O.A, { avError: eo?.type, avErrorContext: eo, selected: n, stream: t.stream, width: S });
    if (t.type === G.lp.HIDDEN_STREAM) return (0, i.jsx)(L.A, { selected: n, participant: t, width: S });
    if (!(null != ee && !n && null != Y && b.Ay.supports(F.O5.VIDEO)))
        return (0, i.jsxs)("div", {
            className: a()(B.Qs, B.Rh, { [B.EX]: er }),
            children: [
                (0, i.jsx)(x.A, {
                    noImage: !0,
                    noText: !0,
                    className: a()(B.HL, { [B.gH]: null == ee }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: B.lO,
                                  children: (0, i.jsx)(c.Button, {
                                      variant: "secondary",
                                      size: er ? "sm" : "md",
                                      text: S < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"]),
                                  }),
                              }),
                              en && !et
                                  ? (0, i.jsx)("div", {
                                        className: a()(B.lO, B.EU),
                                        children: (0, i.jsx)(o.m_, {
                                            text: H.intl.string(H.t.wCrzut),
                                            children: (0, i.jsx)(c.K0, {
                                                variant: "secondary",
                                                size: er ? "sm" : "md",
                                                icon: c.vAm,
                                                "aria-label": H.intl.string(H.t.wCrzut),
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
                (0, i.jsx)(
                    T.A,
                    {
                        enableZoom: w,
                        onResize: s,
                        wrapperClassName: a()(g !== A.N.CALL_TILE ? B.tN : void 0, k),
                        className: B.Qs,
                        streamId: X,
                        videoComponent: Y,
                        fit: p,
                        paused: K || ee?.state === U.XYD.PAUSED || es,
                        videoSpinnerContext: el ? m.u.SELF_STREAM : m.u.REMOTE_STREAM,
                        userId: Z.id,
                        streamKey: t.id,
                        controlsBottom: z,
                        idle: W,
                    },
                    X,
                ),
                null != ea ? (0, i.jsx)(N.A, { size: (0, R.J)(S), ...ea }) : null,
                (0, i.jsx)(M.A, { stream: $, popoutType: g }),
            ],
        });
}
