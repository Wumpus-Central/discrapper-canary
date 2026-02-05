n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(563495),
    o = n(397927),
    d = n(475743),
    c = n(216418),
    u = n(80051),
    h = n(961350),
    A = n(430452),
    g = n(203982),
    m = n(220144),
    p = n(175203),
    _ = n(306852),
    x = n(947580),
    f = n(163432),
    E = n(652215),
    C = n(806931),
    I = n(403264),
    S = n(542411);
let b = 16 / 9,
    N = 8 + f.Vp;
function T(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: s,
            onFullscreenParticipant: T,
            participants: j,
            filteredParticipants: v,
            popoutType: y,
            inCall: R,
            channel: O,
            selectedParticipant: L,
            showParticipants: D = !0,
            className: M,
            width: G,
            height: U,
            layout: P,
            idle: k,
        } = e,
        w = A.A.getVideoComponent(),
        V = h.default.getId(),
        [B, H] = l.useState(null),
        F = (0, d.A)(B),
        [Y, W] = l.useState(!0),
        [K, z] = l.useState(!1),
        X = L.type === C.lp.ACTIVITY,
        q = (0, c.A)(X ? L.applicationId : void 0),
        J = !X && null != L.streamId,
        Q = U <= 2 * N + 144,
        Z = D && !Q,
        $ = (0, d.A)(Z),
        ee = P === E.DUB.MINIMUM || P === E.DUB.NORMAL,
        et = !Q && (!ee || X),
        en = (0, m.A)(et, 100),
        ei = ((0, d.A)(L.id) ?? L.id) !== L.id,
        el = 0;
    (X || Z) && (el += 72), X && !Z && (et ? (el += 48) : (el += 8)), Z && (el += 0.5 * N + 8);
    let es = l.useMemo(
            () => (X && q ? G / (U - 2 * el) : J && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : b),
            [J, B, X, G, U, el, q],
        ),
        ea = U - 2 * el,
        er = X && q ? G : ea * es,
        eo = Math.floor(Math.min(G, er) / es),
        ed = U > G / es + 72 + N + 8;
    t = Z || X ? (Z ? -16 : -8) : 40 + Math.max(0, 72 - (U - eo) / 2);
    let ec = 8 + Math.max(0, 72 - (U - eo) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eu = Y || null == F,
        eh = eu ? "animate-never" : "animate-always",
        eA = (0, o.zhh)(
            {
                value: +!!Z,
                delay: ed || !Z ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => z(!0),
                onChange: () => g._.dispatch(E.jej.REMEASURE_TARGET),
                onRest: () => {
                    z(!1), g._.dispatch(E.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        eg = (0, o.zhh)({ value: +!!Z, config: { ...r.config.stiff, clamp: !0 } }, eh),
        em = (0, o.zhh)(
            { value: er, config: { ...r.config.stiff, clamp: !0 } },
            ($ === Z && eg.value.idle && !en) || ei || eu ? "animate-never" : "animate-always",
        ),
        ep = (0, o.zhh)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, eh),
        e_ = (0, o.pnh)(
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
            H(e), W(!1);
        }, []),
        ef = Z ? [] : (0, x.Cf)(j, L, V),
        { visibleParticipants: eE, participantTileWidth: eC } = (0, f.i4)(G, v);
    return (0, i.jsxs)("div", {
        className: a()(S.zr, I.tR, M),
        children: [
            (0, i.jsxs)("div", {
                className: S.QX,
                style: { opacity: J && Y ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: S.pc,
                        style: { top: eg.value.to((e) => (-e * N) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: em.value },
                                className: S.tN,
                                children: (0, i.jsx)("div", {
                                    className: I.xS,
                                    style: { aspectRatio: es },
                                    children: e_((e, t, l) => {
                                        let { key: a } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: I.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(p.Ay, {
                                                          focused: !0,
                                                          noBorder: er >= G || ea >= U,
                                                          channel: O,
                                                          className: I.JS,
                                                          videoComponent: w,
                                                          width: G,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: T,
                                                          onContextMenu: s,
                                                          onVideoResize: ex,
                                                          inCall: R,
                                                          popoutType: y,
                                                          controlsBottom: ec,
                                                      }),
                                                  },
                                                  a,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            et
                                ? (0, i.jsx)(r.animated.div, {
                                      className: a()(S.$l, { [S.N7]: k }),
                                      style: { bottom: ep.value },
                                      children: (0, i.jsx)(u.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: D,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: S.Vx,
                        style: {
                            translateY: eA.value.to((e) => (e * N) / 2),
                            opacity: eA.value,
                            visibility: eA.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(f.Ay, {
                            channel: O,
                            onClick: n,
                            onContextMenu: s,
                            onDoubleClick: T,
                            participants: eE,
                            participantTileWidth: eC,
                            selectedParticipantId: L.id,
                            inCall: R,
                            popoutType: y,
                            paused: K || !D,
                        }),
                    }),
                ],
            }),
            ef.length > 0
                ? (0, i.jsx)(_.A, {
                      onContextMenuParticipant: s,
                      width: G,
                      height: U,
                      channel: O,
                      participants: ef,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
