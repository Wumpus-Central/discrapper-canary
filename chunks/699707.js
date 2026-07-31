n.d(t, { A: () => T });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(560952),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    h = n(80051),
    p = n(280450),
    m = n(293246),
    A = n(625494),
    f = n(220144),
    x = n(175203),
    g = n(306852),
    C = n(947580),
    y = n(163432),
    j = n(652215),
    v = n(806931),
    E = n(562200),
    N = n(227486);
let I = 16 / 9,
    b = 8 + y.Vp;
function T(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: a,
            onFullscreenParticipant: T,
            participants: R,
            filteredParticipants: _,
            popoutType: S,
            inCall: P,
            channel: L,
            selectedParticipant: w,
            showParticipants: O = !0,
            className: M,
            width: D,
            height: U,
            layout: k,
            idle: V,
        } = e,
        G = m.Ay.getVideoComponent(),
        B = p.default.getId(),
        [H, F] = l.useState(null),
        z = (0, d.Ay)(H),
        [W, Y] = l.useState(!0),
        [K, X] = l.useState(!1),
        Z = w.type === v.lp.ACTIVITY,
        $ = (0, u.A)(Z ? w.applicationId : void 0),
        q = !Z && null != w.streamId,
        Q = U <= 2 * b + 144,
        J = O && !Q,
        ee = (0, d.Ay)(J),
        et = k === j.DUB.MINIMUM || k === j.DUB.NORMAL,
        en = !Q && (!et || Z),
        ei = (0, f.A)(en, 100),
        el = ((0, d.Ay)(w.id) ?? w.id) !== w.id,
        ea = 0;
    (Z || J) && (ea += 72), Z && !J && (en ? (ea += 48) : (ea += 8)), J && (ea += 0.5 * b + 8);
    let es = l.useMemo(
            () => (Z && $ ? D / (U - 2 * ea) : q && null != H && H.width > 0 && H.height > 0 ? H.width / H.height : I),
            [q, H, Z, D, U, ea, $],
        ),
        er = U - 2 * ea,
        eo = Z && $ ? D : er * es,
        ec = Math.floor(Math.min(D, eo) / es),
        ed = U > D / es + 72 + b + 8;
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
    let eh = W || null == z,
        ep = eh ? "animate-never" : "animate-always",
        em = (0, o.z)(
            {
                value: +!!J,
                delay: ed || !J ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => X(!0),
                onChange: () => A._.dispatch(j.jej.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), A._.dispatch(j.jej.REMEASURE_TARGET);
                },
            },
            ep,
        ),
        eA = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, ep),
        ef = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && eA.value.idle && !ei) || el || eh ? "animate-never" : "animate-always",
        ),
        ex = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, ep),
        eg = (0, c.p)(
            w,
            {
                keys: (e) => e?.id,
                config: { ...r.config.stiff, clamp: !0 },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            ep,
        ),
        eC = l.useCallback((e) => {
            F(e), Y(!1);
        }, []),
        ey = J ? [] : (0, C.Cf)(R, w, B),
        { visibleParticipants: ej, participantTileWidth: ev } = (0, y.i4)(D, _);
    return (0, i.jsxs)("div", {
        className: s()(N.zr, E.tR, M),
        children: [
            (0, i.jsxs)("div", {
                className: N.QX,
                style: { opacity: q && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: N.pc,
                        style: { top: eA.value.to((e) => (-e * b) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: ef.value },
                                className: N.tN,
                                children: (0, i.jsx)("div", {
                                    className: E.xS,
                                    style: { aspectRatio: es },
                                    children: eg((e, t, l) => {
                                        let { key: s } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: E.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(x.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= D || er >= U,
                                                          channel: L,
                                                          className: E.JS,
                                                          videoComponent: G,
                                                          width: D,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: T,
                                                          onContextMenu: a,
                                                          onVideoResize: eC,
                                                          inCall: P,
                                                          popoutType: S,
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
                                      className: s()(N.$l, { [N.N7]: V }),
                                      style: { bottom: ex.value },
                                      children: (0, i.jsx)(h.A, {
                                          channelId: L.id,
                                          isParticipantsOpen: O,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: N.Vx,
                        style: {
                            translateY: em.value.to((e) => (e * b) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(y.Ay, {
                            channel: L,
                            onClick: n,
                            onContextMenu: a,
                            onDoubleClick: T,
                            participants: ej,
                            participantTileWidth: ev,
                            selectedParticipantId: w.id,
                            inCall: P,
                            popoutType: S,
                            paused: K || !O,
                        }),
                    }),
                ],
            }),
            ey.length > 0
                ? (0, i.jsx)(g.A, {
                      onContextMenuParticipant: a,
                      width: D,
                      height: U,
                      channel: L,
                      participants: ey,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
