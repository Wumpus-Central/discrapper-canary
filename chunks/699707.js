var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(120692),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    h = n(80051),
    p = n(46653),
    m = n(754712),
    A = n(188567),
    f = n(220144),
    g = n(175203),
    x = n(306852),
    C = n(947580),
    y = n(163432),
    I = n(652215),
    j = n(806931),
    v = n(804273),
    N = n(517689);
let E = 16 / 9;
n.d(
    t,
    {},
    {
        A: function (e) {
            let t,
                {
                    onSelectParticipant: n,
                    onContextMenuParticipant: a,
                    onFullscreenParticipant: b,
                    participants: S,
                    filteredParticipants: T,
                    popoutType: _,
                    inCall: R,
                    channel: O,
                    selectedParticipant: L,
                    showParticipants: P = !0,
                    className: w,
                    width: M,
                    height: U,
                    layout: D,
                    idle: V,
                } = e,
                G = m.Ay.getVideoComponent(),
                k = p.default.getId(),
                [B, F] = l.useState(null),
                z = (0, d.Ay)(B),
                [H, W] = l.useState(!0),
                [$, Y] = l.useState(!1),
                K = L.type === j.lp.ACTIVITY,
                X = (0, u.A)(K ? L.applicationId : void 0),
                q = !K && null != L.streamId,
                Z = U <= 384,
                Q = P && !Z,
                J = (0, d.Ay)(Q),
                ee = D === I.DUB.MINIMUM || D === I.DUB.NORMAL,
                et = !Z && (!ee || K),
                en = (0, f.A)(et, 100),
                ei = ((0, d.Ay)(L.id) ?? L.id) !== L.id,
                el = 0;
            ((K || Q) && (el += 72), K && !Q && (et ? (el += 48) : (el += 8)), Q && (el += 68));
            let ea = l.useMemo(
                    () =>
                        K && X
                            ? M / (U - 2 * el)
                            : q && null != B && B.width > 0 && B.height > 0
                              ? B.width / B.height
                              : E,
                    [q, B, K, M, U, el, X],
                ),
                es = U - 2 * el,
                er = K && X ? M : es * ea,
                eo = Math.floor(Math.min(M, er) / ea),
                ec = U > M / ea + 72 + 120 + 8;
            t = Q || K ? (Q ? -16 : -8) : 40 + Math.max(0, 72 - (U - eo) / 2);
            let ed = Math.max(0, 72 - (U - eo) / 2);
            l.useEffect(() => {
                let e = setTimeout(() => {
                    W(!1);
                }, 250);
                return () => {
                    clearTimeout(e);
                };
            }, []);
            let eu = H || null == z,
                eh = eu ? "animate-never" : "animate-always",
                ep = (0, o.z)(
                    {
                        value: +!!Q,
                        delay: ec || !Q ? 0 : 100,
                        config: { ...r.config.stiff, clamp: !0 },
                        onStart: () => Y(!0),
                        onChange: () => A._.dispatch(I.jej.REMEASURE_TARGET),
                        onRest: () => {
                            (Y(!1), A._.dispatch(I.jej.REMEASURE_TARGET));
                        },
                    },
                    eh,
                ),
                em = (0, o.z)({ value: +!!Q, config: { ...r.config.stiff, clamp: !0 } }, eh),
                eA = (0, o.z)(
                    { value: er, config: { ...r.config.stiff, clamp: !0 } },
                    (J === Q && em.value.idle && !en) || ei || eu ? "animate-never" : "animate-always",
                ),
                ef = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, eh),
                eg = (0, c.p)(
                    L,
                    {
                        keys: (e) => e?.id,
                        config: { ...r.config.stiff, clamp: !0 },
                        initial: null,
                        from: { opacity: 0 },
                        enter: { opacity: 1 },
                        leave: { opacity: 0 },
                    },
                    eh,
                ),
                ex = l.useCallback((e) => {
                    (F(e), W(!1));
                }, []),
                eC = Q ? [] : (0, C.Cf)(S, L, k),
                { visibleParticipants: ey, participantTileWidth: eI } = (0, y.i)(M, T);
            return (0, i.jsxs)("div", {
                className: s()(N.zr, v.tR, w),
                children: [
                    (0, i.jsxs)("div", {
                        className: N.QX,
                        style: { opacity: q && H ? 0 : 1 },
                        children: [
                            (0, i.jsxs)(r.animated.div, {
                                className: N.pc,
                                style: { top: em.value.to((e) => -(120 * e) / 2) },
                                children: [
                                    (0, i.jsx)(r.animated.div, {
                                        style: { width: eA.value },
                                        className: N.tN,
                                        children: (0, i.jsx)("div", {
                                            className: v.xS,
                                            style: { aspectRatio: ea },
                                            children: eg((e, t, l) => {
                                                let { key: s } = l;
                                                return null != t
                                                    ? (0, i.jsx)(
                                                          r.animated.div,
                                                          {
                                                              className: v.qX,
                                                              style: e,
                                                              children: (0, i.jsx)(g.Ay, {
                                                                  focused: !0,
                                                                  noBorder: er >= M || es >= U,
                                                                  channel: O,
                                                                  className: v.JS,
                                                                  videoComponent: G,
                                                                  width: M,
                                                                  participant: t,
                                                                  onClick: n,
                                                                  onDoubleClick: b,
                                                                  onContextMenu: a,
                                                                  onVideoResize: ex,
                                                                  inCall: R,
                                                                  popoutType: _,
                                                                  controlsBottom: ed,
                                                              }),
                                                          },
                                                          s,
                                                      )
                                                    : null;
                                            }),
                                        }),
                                    }),
                                    et
                                        ? (0, i.jsx)(r.animated.div, {
                                              className: s()(N.$l, { [N.N7]: V }),
                                              style: { bottom: ef.value },
                                              children: (0, i.jsx)(h.A, {
                                                  channelId: O.id,
                                                  isParticipantsOpen: P,
                                                  isVertical: !0,
                                              }),
                                          })
                                        : null,
                                ],
                            }),
                            (0, i.jsx)(r.animated.div, {
                                className: N.Vx,
                                style: {
                                    translateY: ep.value.to((e) => (120 * e) / 2),
                                    opacity: ep.value,
                                    visibility: ep.value.to((e) => (0 === e ? "hidden" : "visible")),
                                },
                                children: (0, i.jsx)(y.A, {
                                    channel: O,
                                    onClick: n,
                                    onContextMenu: a,
                                    onDoubleClick: b,
                                    participants: ey,
                                    participantTileWidth: eI,
                                    selectedParticipantId: L.id,
                                    inCall: R,
                                    popoutType: _,
                                    paused: $ || !P,
                                }),
                            }),
                        ],
                    }),
                    eC.length > 0
                        ? (0, i.jsx)(x.A, {
                              onContextMenuParticipant: a,
                              width: M,
                              height: U,
                              channel: O,
                              participants: eC,
                              onSelectParticipant: n,
                          })
                        : null,
                ],
            });
        },
    },
);
