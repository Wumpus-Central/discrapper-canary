n.d(t, { A: () => Z, D: () => B });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(990078),
    d = n(821609),
    c = n(408278),
    u = n(622631),
    _ = n(367513),
    f = n(401843),
    m = n(964486),
    p = n(684339),
    g = n(164617),
    h = n(402216),
    A = n(626584),
    x = n(525505),
    v = n(753727),
    I = n(638480),
    E = n(607407),
    C = n(872363),
    j = n(901690),
    N = n(919706),
    y = n(616356),
    b = n(961350),
    S = n(734057),
    w = n(430452),
    T = n(531685),
    k = n(200749),
    R = n(70171),
    L = n(566331),
    D = n(768088),
    M = n(256195),
    O = n(399849),
    F = n(275731),
    V = n(345812),
    P = n(652215),
    G = n(806931),
    H = n(731854),
    U = n(985018),
    W = n(391308);
let z = new A.A("StreamTile");
function B(e) {
    let { participant: t, selected: n, focused: l, idle: a, width: r, premiumIndicator: o } = e,
        d = (0, s.bG)([y.A], () => y.A.getActiveStreamForUser(t.user.id, t.stream.guildId)),
        c = (0, V.VE)(r);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n || l ? null : (0, i.jsx)(F.A, { participant: t }),
            l || null == d || d.state === P.XYD.ENDED || d.state === P.XYD.FAILED
                ? null
                : (0, i.jsx)(C.A, {
                      size: h.Ay.Sizes.SMALL,
                      className: W.Ok,
                      participant: t,
                      showQuality: !c && !a,
                      isUpsellEnabled: !1,
                      premiumIndicator: o,
                  }),
        ],
    });
}
function Z(e) {
    let {
            participant: t,
            selected: n,
            onVideoResize: a,
            fit: h,
            popoutType: A,
            width: C,
            wrapperClassName: F,
            paused: V = !1,
        } = e,
        B = w.Ay.getVideoComponent(),
        Z = (0, s.bG)([b.default], () => b.default.getId()),
        Y = (0, v.A)(),
        { stream: $, user: Q, streamId: K } = t,
        X = (0, s.bG)([S.A], () => S.A.getChannel($.channelId)),
        q = (0, s.bG)([y.A], () => y.A.getActiveStreamForUser(Q.id, $.guildId), [Q.id, $.guildId]),
        J = (0, s.bG)([y.A], () => y.A.getAllActiveStreams().length > 0),
        ee = (0, s.bG)([T.A], () => T.A.isFocused()),
        et = q?.ownerId === Z,
        en = et && !ee && A === g.N.NO_POPOUT,
        ei = null != q ? (0, I.A)(q, Q, Q.id === Z, en) : null,
        el = C < 195;
    (0, m.Ay)(() => {
        !J && X?.isGuildStageVoice() && !et && ((0, f.A9)($), _.A.updateStageStreamSize($.channelId, !1));
    });
    let ea = (0, x.u)(H.x.STREAM, t.user.id);
    if (
        (l.useEffect(() => {
            z.info(
                `Stream Tile State - activeStream: ${null != q} | selected: ${n} | Video: ${null != B} | MediaEngine: ${w.Ay.supports(H.O5.VIDEO)}`,
            );
        }, [B, q, n]),
        Y)
    )
        return (0, i.jsx)(O.A, { stream: t.stream, isSmall: el, selected: n, isSelfStream: Q.id === Z });
    if (q?.state === P.XYD.ENDED) return (0, i.jsx)(L.A, { selected: n, stream: q, width: C });
    if (null != ea || q?.state === P.XYD.FAILED)
        return (0, i.jsx)(D.A, { avError: ea?.type, avErrorContext: ea, selected: n, stream: t.stream, width: C });
    if (t.type === G.lp.HIDDEN_STREAM) return (0, i.jsx)(M.A, { selected: n, participant: t, width: C });
    if (null != q && !n && null != B && w.Ay.supports(H.O5.VIDEO))
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(
                    j.A,
                    {
                        onResize: a,
                        wrapperClassName: r()(A !== g.N.CALL_TILE ? W.tN : void 0, F),
                        className: W.Qs,
                        streamId: K,
                        videoComponent: B,
                        fit: h,
                        paused: V || q?.state === P.XYD.PAUSED || en,
                        videoSpinnerContext: et ? p.u.SELF_STREAM : p.u.REMOTE_STREAM,
                        userId: Q.id,
                        streamKey: t.id,
                    },
                    K,
                ),
                null != ei ? (0, i.jsx)(N.A, { size: (0, k.J)(C), ...ei }) : null,
                (0, i.jsx)(R.A, { stream: $, popoutType: A }),
            ],
        });
    else
        return (0, i.jsxs)("div", {
            className: r()(W.Qs, W.Rh, { [W.EX]: el }),
            children: [
                (0, i.jsx)(E.A, {
                    noImage: !0,
                    noText: !0,
                    className: r()(W.HL, { [W.gH]: null == q }),
                    stream: t.stream,
                }),
                n
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: W.lO,
                                  children: (0, i.jsx)(d.$, {
                                      variant: "secondary",
                                      size: el ? "sm" : "md",
                                      text: C < 175 ? U.intl.string(U.t.I6JG46) : U.intl.string(U.t["7Xq/nV"]),
                                  }),
                              }),
                              J
                                  ? (0, i.jsx)("div", {
                                        className: r()(W.lO, W.EU),
                                        children: (0, i.jsx)(o.m, {
                                            text: U.intl.string(U.t.wCrzut),
                                            children: (0, i.jsx)(c.K, {
                                                variant: "secondary",
                                                size: el ? "sm" : "md",
                                                icon: u.v,
                                                "aria-label": U.intl.string(U.t.wCrzut),
                                                onClick: (e) => {
                                                    e.stopPropagation(), (0, f.A9)(t.stream, { forceMultiple: !0 });
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
