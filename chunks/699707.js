n.d(t, { A: () => T });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(517738),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    p = n(80051),
    h = n(961350),
    _ = n(430452),
    m = n(203982),
    A = n(220144),
    x = n(175203),
    f = n(306852),
    g = n(947580),
    C = n(163432),
    y = n(652215),
    v = n(806931),
    E = n(349488),
    N = n(196934);
let I = 16 / 9,
    j = 8 + C.Vp;
function T(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: l,
            onFullscreenParticipant: T,
            participants: b,
            filteredParticipants: S,
            popoutType: R,
            inCall: P,
            channel: O,
            selectedParticipant: w,
            showParticipants: L = !0,
            className: D,
            width: M,
            height: U,
            layout: V,
            idle: k,
        } = e,
        B = _.Ay.getVideoComponent(),
        H = h.default.getId(),
        [F, G] = a.useState(null),
        z = (0, d.A)(F),
        [W, Y] = a.useState(!0),
        [K, X] = a.useState(!1),
        q = w.type === v.lp.ACTIVITY,
        Z = (0, u.A)(q ? w.applicationId : void 0),
        Q = !q && null != w.streamId,
        $ = U <= 2 * j + 144,
        J = L && !$,
        ee = (0, d.A)(J),
        et = V === y.DUB.MINIMUM || V === y.DUB.NORMAL,
        en = !$ && (!et || q),
        ei = (0, A.A)(en, 100),
        ea = ((0, d.A)(w.id) ?? w.id) !== w.id,
        el = 0;
    (q || J) && (el += 72), q && !J && (en ? (el += 48) : (el += 8)), J && (el += 0.5 * j + 8);
    let es = a.useMemo(
            () => (q && Z ? M / (U - 2 * el) : Q && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : I),
            [Q, F, q, M, U, el, Z],
        ),
        er = U - 2 * el,
        eo = q && Z ? M : er * es,
        ec = Math.floor(Math.min(M, eo) / es),
        ed = U > M / es + 72 + j + 8;
    t = J || q ? (J ? -16 : -8) : 40 + Math.max(0, 72 - (U - ec) / 2);
    let eu = Math.max(0, 72 - (U - ec) / 2);
    a.useEffect(() => {
        let e = setTimeout(() => {
            Y(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let ep = W || null == z,
        eh = ep ? "animate-never" : "animate-always",
        e_ = (0, o.z)(
            {
                value: +!!J,
                delay: ed || !J ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => X(!0),
                onChange: () => m._.dispatch(y.jej.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), m._.dispatch(y.jej.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        em = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, eh),
        eA = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && em.value.idle && !ei) || ea || ep ? "animate-never" : "animate-always",
        ),
        ex = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, eh),
        ef = (0, c.p)(
            w,
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
        eg = a.useCallback((e) => {
            G(e), Y(!1);
        }, []),
        eC = J ? [] : (0, g.Cf)(b, w, H),
        { visibleParticipants: ey, participantTileWidth: ev } = (0, C.i4)(M, S);
    return (0, i.jsxs)("div", {
        className: s()(N.zr, E.tR, D),
        children: [
            (0, i.jsxs)("div", {
                className: N.QX,
                style: { opacity: Q && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: N.pc,
                        style: { top: em.value.to((e) => (-e * j) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: eA.value },
                                className: N.tN,
                                children: (0, i.jsx)("div", {
                                    className: E.xS,
                                    style: { aspectRatio: es },
                                    children: ef((e, t, a) => {
                                        let { key: s } = a;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: E.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(x.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= M || er >= U,
                                                          channel: O,
                                                          className: E.JS,
                                                          videoComponent: B,
                                                          width: M,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: T,
                                                          onContextMenu: l,
                                                          onVideoResize: eg,
                                                          inCall: P,
                                                          popoutType: R,
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
                                      className: s()(N.$l, { [N.N7]: k }),
                                      style: { bottom: ex.value },
                                      children: (0, i.jsx)(p.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: L,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(r.animated.div, {
                        className: N.Vx,
                        style: {
                            translateY: e_.value.to((e) => (e * j) / 2),
                            opacity: e_.value,
                            visibility: e_.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(C.Ay, {
                            channel: O,
                            onClick: n,
                            onContextMenu: l,
                            onDoubleClick: T,
                            participants: ey,
                            participantTileWidth: ev,
                            selectedParticipantId: w.id,
                            inCall: P,
                            popoutType: R,
                            paused: K || !L,
                        }),
                    }),
                ],
            }),
            eC.length > 0
                ? (0, i.jsx)(f.A, {
                      onContextMenuParticipant: l,
                      width: M,
                      height: U,
                      channel: O,
                      participants: eC,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
