n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(522160),
    o = n(397927),
    d = n(475743),
    c = n(216418),
    u = n(80051),
    h = n(961350),
    A = n(430452),
    p = n(203982),
    m = n(220144),
    g = n(175203),
    _ = n(306852),
    f = n(947580),
    x = n(163432),
    C = n(652215),
    E = n(806931),
    I = n(403264),
    b = n(542411);
let N = 16 / 9,
    S = 8 + x.Vp;
function T(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: s,
            onFullscreenParticipant: T,
            participants: v,
            filteredParticipants: y,
            popoutType: j,
            inCall: R,
            channel: O,
            selectedParticipant: L,
            showParticipants: M = !0,
            className: D,
            width: G,
            height: U,
            layout: P,
            idle: w,
        } = e,
        k = A.Ay.getVideoComponent(),
        V = h.default.getId(),
        [B, H] = l.useState(null),
        F = (0, d.A)(B),
        [K, W] = l.useState(!0),
        [Y, z] = l.useState(!1),
        q = L.type === E.lp.ACTIVITY,
        X = (0, c.A)(q ? L.applicationId : void 0),
        J = !q && null != L.streamId,
        Q = U <= 2 * S + 144,
        $ = M && !Q,
        Z = (0, d.A)($),
        ee = P === C.DUB.MINIMUM || P === C.DUB.NORMAL,
        et = !Q && (!ee || q),
        en = (0, m.A)(et, 100),
        ei = ((0, d.A)(L.id) ?? L.id) !== L.id,
        el = 0;
    (q || $) && (el += 72), q && !$ && (et ? (el += 48) : (el += 8)), $ && (el += 0.5 * S + 8);
    let es = l.useMemo(
            () => (q && X ? G / (U - 2 * el) : J && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : N),
            [J, B, q, G, U, el, X],
        ),
        ea = U - 2 * el,
        er = q && X ? G : ea * es,
        eo = Math.floor(Math.min(G, er) / es),
        ed = U > G / es + 72 + S + 8;
    t = $ || q ? ($ ? -16 : -8) : 40 + Math.max(0, 72 - (U - eo) / 2);
    let ec = 8 + Math.max(0, 72 - (U - eo) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            W(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eu = K || null == F,
        eh = eu ? "animate-never" : "animate-always",
        eA = (0, o.zhh)(
            {
                value: +!!$,
                delay: ed || !$ ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => z(!0),
                onChange: () => p._.dispatch(C.jej.REMEASURE_TARGET),
                onRest: () => {
                    z(!1), p._.dispatch(C.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        ep = (0, o.zhh)({ value: +!!$, config: { ...r.config.stiff, clamp: !0 } }, eh),
        em = (0, o.zhh)(
            { value: er, config: { ...r.config.stiff, clamp: !0 } },
            (Z === $ && ep.value.idle && !en) || ei || eu ? "animate-never" : "animate-always",
        ),
        eg = (0, o.zhh)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, eh),
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
        ef = l.useCallback((e) => {
            H(e), W(!1);
        }, []),
        ex = $ ? [] : (0, f.Cf)(v, L, V),
        { visibleParticipants: eC, participantTileWidth: eE } = (0, x.i4)(G, y);
    return (0, i.jsxs)("div", {
        className: a()(b.zr, I.tR, D),
        children: [
            (0, i.jsxs)("div", {
                className: b.QX,
                style: { opacity: J && K ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: b.pc,
                        style: { top: ep.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: em.value },
                                className: b.tN,
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
                                                      children: (0, i.jsx)(g.Ay, {
                                                          focused: !0,
                                                          noBorder: er >= G || ea >= U,
                                                          channel: O,
                                                          className: I.JS,
                                                          videoComponent: k,
                                                          width: G,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: T,
                                                          onContextMenu: s,
                                                          onVideoResize: ef,
                                                          inCall: R,
                                                          popoutType: j,
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
                                      className: a()(b.$l, { [b.N7]: w }),
                                      style: { bottom: eg.value },
                                      children: (0, i.jsx)(u.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: M,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: b.Vx,
                        style: {
                            translateY: eA.value.to((e) => (e * S) / 2),
                            opacity: eA.value,
                            visibility: eA.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(x.Ay, {
                            channel: O,
                            onClick: n,
                            onContextMenu: s,
                            onDoubleClick: T,
                            participants: eC,
                            participantTileWidth: eE,
                            selectedParticipantId: L.id,
                            inCall: R,
                            popoutType: j,
                            paused: Y || !M,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, i.jsx)(_.A, {
                      onContextMenuParticipant: s,
                      width: G,
                      height: U,
                      channel: O,
                      participants: ex,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
