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
    g = n(402216),
    p = n(626584),
    f = n(525505),
    _ = n(753727),
    E = n(315606),
    C = n(638480),
    x = n(607407),
    S = n(872363),
    T = n(901690),
    I = n(919706),
    N = n(616356),
    v = n(961350),
    y = n(734057),
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
let V = new p.A("StreamTile");
function K(e) {
    let { participant: t, selected: n, focused: l, idle: s, width: a, premiumIndicator: o } = e,
        c = (0, r.bG)([N.A], () => N.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        d = (0, k.V)(a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(w.A, { participant: t }),
            l || null == c || c.state === U.XYD.ENDED || c.state === U.XYD.FAILED
                ? null
                : (0, i.jsx)(S.A, {
                      size: g.Ay.Sizes.SMALL,
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
            fit: g,
            popoutType: p,
            width: S,
            wrapperClassName: w,
            paused: k = !1,
        } = e,
        K = b.Ay.getVideoComponent(),
        W = (0, r.bG)([v.default], () => v.default.getId()),
        z = (0, _.A)(),
        { stream: Y, user: q, streamId: J } = t,
        $ = (0, r.bG)([y.A], () => y.A.getChannel(Y.channelId)),
        Z = (0, r.bG)([N.A], () => N.A.getActiveStreamForUser(q.id, Y.guildId), [q.id, Y.guildId]),
        { defaultWatchMultipleStreams: X } = (0, E.W)({ location: "StreamTile" }),
        Q = (0, r.bG)([N.A], () => N.A.getAllActiveStreams().length > 0),
        ee = (0, r.bG)([j.A], () => j.A.isFocused()),
        et = Z?.ownerId === W,
        en = et && !ee && p === A.N.NO_POPOUT,
        ei = null != Z ? (0, C.A)(Z, q, q.id === W, en) : null,
        el = S < 195;
    (0, h.Ay)(() => {
        !Q && $?.isGuildStageVoice() && !et && ((0, u.A9)(Y), d.A.updateStageStreamSize(Y.channelId, !1));
    });
    let es = (0, f.u)(F.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            V.info(
                `Stream Tile State - activeStream: ${null != Z} | selected: ${n} | Video: ${null != K} | MediaEngine: ${b.Ay.supports(F.O5.VIDEO)}`,
            );
        }, [K, Z, n]),
        z)
    )
        return (0, i.jsx)(P.A, { stream: t.stream, isSmall: el, selected: n, isSelfStream: q.id === W });
    if (Z?.state === U.XYD.ENDED) return (0, i.jsx)(D.A, { selected: n, stream: Z, width: S });
    if (null != es || Z?.state === U.XYD.FAILED)
        return (0, i.jsx)(O.A, { avError: es?.type, avErrorContext: es, selected: n, stream: t.stream, width: S });
    if (t.type === G.lp.HIDDEN_STREAM) return (0, i.jsx)(L.A, { selected: n, participant: t, width: S });
    if (!(null != Z && !n && null != K && b.Ay.supports(F.O5.VIDEO)))
        return (0, i.jsxs)("div", {
            className: a()(B.Qs, B.Rh, { [B.EX]: el }),
            children: [
                (0, i.jsx)(x.A, {
                    noImage: !0,
                    noText: !0,
                    className: a()(B.HL, { [B.gH]: null == Z }),
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
                                      size: el ? "sm" : "md",
                                      text: S < 175 ? H.intl.string(H.t.I6JG46) : H.intl.string(H.t["7Xq/nV"]),
                                  }),
                              }),
                              Q && !X
                                  ? (0, i.jsx)("div", {
                                        className: a()(B.lO, B.EU),
                                        children: (0, i.jsx)(o.m_, {
                                            text: H.intl.string(H.t.wCrzut),
                                            children: (0, i.jsx)(c.K0, {
                                                variant: "secondary",
                                                size: el ? "sm" : "md",
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
                        onResize: s,
                        wrapperClassName: a()(p !== A.N.CALL_TILE ? B.tN : void 0, w),
                        className: B.Qs,
                        streamId: J,
                        videoComponent: K,
                        fit: g,
                        paused: k || Z?.state === U.XYD.PAUSED || en,
                        videoSpinnerContext: et ? m.u.SELF_STREAM : m.u.REMOTE_STREAM,
                        userId: q.id,
                        streamKey: t.id,
                    },
                    J,
                ),
                null != ei ? (0, i.jsx)(I.A, { size: (0, R.J)(S), ...ei }) : null,
                (0, i.jsx)(M.A, { stream: Y, popoutType: p }),
            ],
        });
}
