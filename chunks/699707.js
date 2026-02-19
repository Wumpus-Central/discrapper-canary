"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(475539),
    o = n(397927),
    c = n(475743),
    d = n(216418),
    u = n(80051),
    h = n(961350),
    A = n(430452),
    p = n(203982),
    g = n(220144),
    m = n(175203),
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
            onContextMenuParticipant: l,
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
        [B, H] = s.useState(null),
        F = (0, c.A)(B),
        [K, W] = s.useState(!0),
        [Y, z] = s.useState(!1),
        X = L.type === E.lp.ACTIVITY,
        q = (0, d.A)(X ? L.applicationId : void 0),
        J = !X && null != L.streamId,
        Q = U <= 2 * S + 144,
        $ = M && !Q,
        Z = (0, c.A)($),
        ee = P === C.DUB.MINIMUM || P === C.DUB.NORMAL,
        et = !Q && (!ee || X),
        en = (0, g.A)(et, 100),
        ei = ((0, c.A)(L.id) ?? L.id) !== L.id,
        es = 0;
    (X || $) && (es += 72), X && !$ && (et ? (es += 48) : (es += 8)), $ && (es += 0.5 * S + 8);
    let el = s.useMemo(
            () => (X && q ? G / (U - 2 * es) : J && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : N),
            [J, B, X, G, U, es, q],
        ),
        er = U - 2 * es,
        ea = X && q ? G : er * el,
        eo = Math.floor(Math.min(G, ea) / el),
        ec = U > G / el + 72 + S + 8;
    t = $ || X ? ($ ? -16 : -8) : 40 + Math.max(0, 72 - (U - eo) / 2);
    let ed = Math.max(0, 72 - (U - eo) / 2);
    s.useEffect(() => {
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
                delay: ec || !$ ? 0 : 100,
                config: { ...a.config.stiff, clamp: !0 },
                onStart: () => z(!0),
                onChange: () => p._.dispatch(C.jej.REMEASURE_TARGET),
                onRest: () => {
                    z(!1), p._.dispatch(C.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        ep = (0, o.zhh)({ value: +!!$, config: { ...a.config.stiff, clamp: !0 } }, eh),
        eg = (0, o.zhh)(
            { value: ea, config: { ...a.config.stiff, clamp: !0 } },
            (Z === $ && ep.value.idle && !en) || ei || eu ? "animate-never" : "animate-always",
        ),
        em = (0, o.zhh)({ value: t, config: { ...a.config.stiff, clamp: !0 } }, eh),
        e_ = (0, o.pnh)(
            L,
            {
                keys: (e) => e?.id,
                config: { ...a.config.stiff, clamp: !0 },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            eh,
        ),
        ef = s.useCallback((e) => {
            H(e), W(!1);
        }, []),
        ex = $ ? [] : (0, f.Cf)(v, L, V),
        { visibleParticipants: eC, participantTileWidth: eE } = (0, x.i4)(G, y);
    return (0, i.jsxs)("div", {
        className: r()(b.zr, I.tR, D),
        children: [
            (0, i.jsxs)("div", {
                className: b.QX,
                style: { opacity: J && K ? 0 : 1 },
                children: [
                    (0, i.jsxs)(a.animated.div, {
                        className: b.pc,
                        style: { top: ep.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, i.jsx)(a.animated.div, {
                                style: { width: eg.value },
                                className: b.tN,
                                children: (0, i.jsx)("div", {
                                    className: I.xS,
                                    style: { aspectRatio: el },
                                    children: e_((e, t, s) => {
                                        let { key: r } = s;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: I.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(m.Ay, {
                                                          focused: !0,
                                                          noBorder: ea >= G || er >= U,
                                                          channel: O,
                                                          className: I.JS,
                                                          videoComponent: k,
                                                          width: G,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: T,
                                                          onContextMenu: l,
                                                          onVideoResize: ef,
                                                          inCall: R,
                                                          popoutType: j,
                                                          controlsBottom: ed,
                                                      }),
                                                  },
                                                  r,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            et
                                ? (0, i.jsx)(a.animated.div, {
                                      className: r()(b.$l, { [b.N7]: w }),
                                      style: { bottom: em.value },
                                      children: (0, i.jsx)(u.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: M,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(a.animated.div, {
                        className: b.Vx,
                        style: {
                            translateY: eA.value.to((e) => (e * S) / 2),
                            opacity: eA.value,
                            visibility: eA.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(x.Ay, {
                            channel: O,
                            onClick: n,
                            onContextMenu: l,
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
                      onContextMenuParticipant: l,
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
