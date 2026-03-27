"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(880013),
    o = n(397927),
    c = n(475743),
    d = n(216418),
    u = n(80051),
    h = n(961350),
    A = n(430452),
    m = n(203982),
    _ = n(220144),
    p = n(175203),
    g = n(306852),
    f = n(947580),
    x = n(163432),
    E = n(652215),
    C = n(806931),
    I = n(610893),
    N = n(332741);
let b = 16 / 9,
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
        q = L.type === C.lp.ACTIVITY,
        X = (0, d.A)(q ? L.applicationId : void 0),
        J = !q && null != L.streamId,
        Q = U <= 2 * S + 144,
        $ = M && !Q,
        Z = (0, c.A)($),
        ee = P === E.DUB.MINIMUM || P === E.DUB.NORMAL,
        et = !Q && (!ee || q),
        en = (0, _.A)(et, 100),
        ei = ((0, c.A)(L.id) ?? L.id) !== L.id,
        es = 0;
    (q || $) && (es += 72), q && !$ && (et ? (es += 48) : (es += 8)), $ && (es += 0.5 * S + 8);
    let el = s.useMemo(
            () => (q && X ? G / (U - 2 * es) : J && null != B && B.width > 0 && B.height > 0 ? B.width / B.height : b),
            [J, B, q, G, U, es, X],
        ),
        er = U - 2 * es,
        ea = q && X ? G : er * el,
        eo = Math.floor(Math.min(G, ea) / el),
        ec = U > G / el + 72 + S + 8;
    t = $ || q ? ($ ? -16 : -8) : 40 + Math.max(0, 72 - (U - eo) / 2);
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
                onChange: () => m._.dispatch(E.jej.REMEASURE_TARGET),
                onRest: () => {
                    z(!1), m._.dispatch(E.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        em = (0, o.zhh)({ value: +!!$, config: { ...a.config.stiff, clamp: !0 } }, eh),
        e_ = (0, o.zhh)(
            { value: ea, config: { ...a.config.stiff, clamp: !0 } },
            (Z === $ && em.value.idle && !en) || ei || eu ? "animate-never" : "animate-always",
        ),
        ep = (0, o.zhh)({ value: t, config: { ...a.config.stiff, clamp: !0 } }, eh),
        eg = (0, o.pnh)(
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
        { visibleParticipants: eE, participantTileWidth: eC } = (0, x.i4)(G, y);
    return (0, i.jsxs)("div", {
        className: r()(N.zr, I.tR, D),
        children: [
            (0, i.jsxs)("div", {
                className: N.QX,
                style: { opacity: J && K ? 0 : 1 },
                children: [
                    (0, i.jsxs)(a.animated.div, {
                        className: N.pc,
                        style: { top: em.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, i.jsx)(a.animated.div, {
                                style: { width: e_.value },
                                className: N.tN,
                                children: (0, i.jsx)("div", {
                                    className: I.xS,
                                    style: { aspectRatio: el },
                                    children: eg((e, t, s) => {
                                        let { key: r } = s;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: I.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(p.Ay, {
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
                                      className: r()(N.$l, { [N.N7]: w }),
                                      style: { bottom: ep.value },
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
                        className: N.Vx,
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
                            participants: eE,
                            participantTileWidth: eC,
                            selectedParticipantId: L.id,
                            inCall: R,
                            popoutType: j,
                            paused: Y || !M,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, i.jsx)(g.A, {
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
