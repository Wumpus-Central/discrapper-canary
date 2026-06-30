n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(18005),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    p = n(80051),
    h = n(495544),
    m = n(472444),
    A = n(625494),
    x = n(220144),
    g = n(175203),
    f = n(306852),
    C = n(947580),
    y = n(163432),
    E = n(652215),
    N = n(806931),
    v = n(349488),
    j = n(196934);
let I = 16 / 9,
    T = 8 + y.Vp;
function _(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: a,
            onFullscreenParticipant: _,
            participants: S,
            filteredParticipants: R,
            popoutType: P,
            inCall: b,
            channel: O,
            selectedParticipant: L,
            showParticipants: D = !0,
            className: M,
            width: w,
            height: U,
            layout: V,
            idle: k,
        } = e,
        B = m.Ay.getVideoComponent(),
        H = h.default.getId(),
        [G, F] = l.useState(null),
        z = (0, d.A)(G),
        [W, Y] = l.useState(!0),
        [K, X] = l.useState(!1),
        Z = L.type === N.lp.ACTIVITY,
        q = (0, u.A)(Z ? L.applicationId : void 0),
        $ = !Z && null != L.streamId,
        Q = U <= 2 * T + 144,
        J = D && !Q,
        ee = (0, d.A)(J),
        et = V === E.DUB.MINIMUM || V === E.DUB.NORMAL,
        en = !Q && (!et || Z),
        ei = (0, x.A)(en, 100),
        el = ((0, d.A)(L.id) ?? L.id) !== L.id,
        ea = 0;
    (Z || J) && (ea += 72), Z && !J && (en ? (ea += 48) : (ea += 8)), J && (ea += 0.5 * T + 8);
    let es = l.useMemo(
            () => (Z && q ? w / (U - 2 * ea) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : I),
            [$, G, Z, w, U, ea, q],
        ),
        er = U - 2 * ea,
        eo = Z && q ? w : er * es,
        ec = Math.floor(Math.min(w, eo) / es),
        ed = U > w / es + 72 + T + 8;
    t = J || Z ? (J ? -16 : -8) : 40 + Math.max(0, 72 - (U - ec) / 2);
    let eu = Math.max(0, 72 - (U - ec) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            Y(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let ep = W || null == z,
        eh = ep ? "animate-never" : "animate-always",
        em = (0, o.z)(
            {
                value: +!!J,
                delay: ed || !J ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => X(!0),
                onChange: () => A._.dispatch(E.jej.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), A._.dispatch(E.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        eA = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, eh),
        ex = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && eA.value.idle && !ei) || el || ep ? "animate-never" : "animate-always",
        ),
        eg = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, eh),
        ef = (0, c.p)(
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
        eC = l.useCallback((e) => {
            F(e), Y(!1);
        }, []),
        ey = J ? [] : (0, C.Cf)(S, L, H),
        { visibleParticipants: eE, participantTileWidth: eN } = (0, y.i4)(w, R);
    return (0, i.jsxs)("div", {
        className: s()(j.zr, v.tR, M),
        children: [
            (0, i.jsxs)("div", {
                className: j.QX,
                style: { opacity: $ && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: j.pc,
                        style: { top: eA.value.to((e) => (-e * T) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: ex.value },
                                className: j.tN,
                                children: (0, i.jsx)("div", {
                                    className: v.xS,
                                    style: { aspectRatio: es },
                                    children: ef((e, t, l) => {
                                        let { key: s } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: v.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(g.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= w || er >= U,
                                                          channel: O,
                                                          className: v.JS,
                                                          videoComponent: B,
                                                          width: w,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: _,
                                                          onContextMenu: a,
                                                          onVideoResize: eC,
                                                          inCall: b,
                                                          popoutType: P,
                                                          controlsBottom: eu,
                                                      }),
                                                  },
                                                  s,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            en
                                ? (0, i.jsx)(r.animated.div, {
                                      className: s()(j.$l, { [j.N7]: k }),
                                      style: { bottom: eg.value },
                                      children: (0, i.jsx)(p.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: D,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: j.Vx,
                        style: {
                            translateY: em.value.to((e) => (e * T) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(y.Ay, {
                            channel: O,
                            onClick: n,
                            onContextMenu: a,
                            onDoubleClick: _,
                            participants: eE,
                            participantTileWidth: eN,
                            selectedParticipantId: L.id,
                            inCall: b,
                            popoutType: P,
                            paused: K || !D,
                        }),
                    }),
                ],
            }),
            ey.length > 0
                ? (0, i.jsx)(f.A, {
                      onContextMenuParticipant: a,
                      width: w,
                      height: U,
                      channel: O,
                      participants: ey,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
