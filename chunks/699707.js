n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(873174),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    h = n(80051),
    p = n(495544),
    m = n(235058),
    A = n(625494),
    x = n(220144),
    g = n(175203),
    C = n(306852),
    f = n(947580),
    E = n(163432),
    y = n(652215),
    N = n(806931),
    j = n(349488),
    v = n(196934);
let I = 16 / 9,
    T = 8 + E.Vp;
function _(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: a,
            onFullscreenParticipant: _,
            participants: R,
            filteredParticipants: S,
            popoutType: P,
            inCall: O,
            channel: b,
            selectedParticipant: L,
            showParticipants: M = !0,
            className: D,
            width: U,
            height: w,
            layout: V,
            idle: B,
        } = e,
        k = m.Ay.getVideoComponent(),
        H = p.default.getId(),
        [F, G] = l.useState(null),
        z = (0, d.A)(F),
        [W, Y] = l.useState(!0),
        [K, X] = l.useState(!1),
        Z = L.type === N.lp.ACTIVITY,
        q = (0, u.A)(Z ? L.applicationId : void 0),
        Q = !Z && null != L.streamId,
        $ = w <= 2 * T + 144,
        J = M && !$,
        ee = (0, d.A)(J),
        et = V === y.DUB.MINIMUM || V === y.DUB.NORMAL,
        en = !$ && (!et || Z),
        ei = (0, x.A)(en, 100),
        el = ((0, d.A)(L.id) ?? L.id) !== L.id,
        ea = 0;
    (Z || J) && (ea += 72), Z && !J && (en ? (ea += 48) : (ea += 8)), J && (ea += 0.5 * T + 8);
    let es = l.useMemo(
            () => (Z && q ? U / (w - 2 * ea) : Q && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : I),
            [Q, F, Z, U, w, ea, q],
        ),
        er = w - 2 * ea,
        eo = Z && q ? U : er * es,
        ec = Math.floor(Math.min(U, eo) / es),
        ed = w > U / es + 72 + T + 8;
    t = J || Z ? (J ? -16 : -8) : 40 + Math.max(0, 72 - (w - ec) / 2);
    let eu = Math.max(0, 72 - (w - ec) / 2);
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
                onChange: () => A._.dispatch(y.jej.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), A._.dispatch(y.jej.REMEASURE_TARGET);
                },
            },
            ep,
        ),
        eA = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, ep),
        ex = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && eA.value.idle && !ei) || el || eh ? "animate-never" : "animate-always",
        ),
        eg = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, ep),
        eC = (0, c.p)(
            L,
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
        ef = l.useCallback((e) => {
            G(e), Y(!1);
        }, []),
        eE = J ? [] : (0, f.Cf)(R, L, H),
        { visibleParticipants: ey, participantTileWidth: eN } = (0, E.i4)(U, S);
    return (0, i.jsxs)("div", {
        className: s()(v.zr, j.tR, D),
        children: [
            (0, i.jsxs)("div", {
                className: v.QX,
                style: { opacity: Q && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: v.pc,
                        style: { top: eA.value.to((e) => (-e * T) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: ex.value },
                                className: v.tN,
                                children: (0, i.jsx)("div", {
                                    className: j.xS,
                                    style: { aspectRatio: es },
                                    children: eC((e, t, l) => {
                                        let { key: s } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: j.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(g.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= U || er >= w,
                                                          channel: b,
                                                          className: j.JS,
                                                          videoComponent: k,
                                                          width: U,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: _,
                                                          onContextMenu: a,
                                                          onVideoResize: ef,
                                                          inCall: O,
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
                                      className: s()(v.$l, { [v.N7]: B }),
                                      style: { bottom: eg.value },
                                      children: (0, i.jsx)(h.A, {
                                          channelId: b.id,
                                          isParticipantsOpen: M,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: v.Vx,
                        style: {
                            translateY: em.value.to((e) => (e * T) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(E.Ay, {
                            channel: b,
                            onClick: n,
                            onContextMenu: a,
                            onDoubleClick: _,
                            participants: ey,
                            participantTileWidth: eN,
                            selectedParticipantId: L.id,
                            inCall: O,
                            popoutType: P,
                            paused: K || !M,
                        }),
                    }),
                ],
            }),
            eE.length > 0
                ? (0, i.jsx)(C.A, {
                      onContextMenuParticipant: a,
                      width: U,
                      height: w,
                      channel: b,
                      participants: eE,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
