n.d(t, { A: () => _ });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(221877),
    o = n(717421),
    c = n(866323),
    d = n(475743),
    u = n(216418),
    h = n(80051),
    p = n(280450),
    m = n(453028),
    f = n(625494),
    A = n(220144),
    x = n(175203),
    g = n(306852),
    C = n(947580),
    y = n(163432),
    j = n(652215),
    I = n(806931),
    v = n(804273),
    N = n(517689);
let E = 16 / 9,
    b = 8 + y.Vp;
function _(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: a,
            onFullscreenParticipant: _,
            participants: T,
            filteredParticipants: R,
            popoutType: S,
            inCall: L,
            channel: O,
            selectedParticipant: P,
            showParticipants: M = !0,
            className: w,
            width: D,
            height: U,
            layout: V,
            idle: k,
        } = e,
        G = m.Ay.getVideoComponent(),
        B = p.default.getId(),
        [F, z] = l.useState(null),
        H = (0, d.Ay)(F),
        [W, $] = l.useState(!0),
        [Y, K] = l.useState(!1),
        q = P.type === I.lp.ACTIVITY,
        X = (0, u.A)(q ? P.applicationId : void 0),
        Z = !q && null != P.streamId,
        Q = U <= 2 * b + 144,
        J = M && !Q,
        ee = (0, d.Ay)(J),
        et = V === j.DUB.MINIMUM || V === j.DUB.NORMAL,
        en = !Q && (!et || q),
        ei = (0, A.A)(en, 100),
        el = ((0, d.Ay)(P.id) ?? P.id) !== P.id,
        ea = 0;
    (q || J) && (ea += 72), q && !J && (en ? (ea += 48) : (ea += 8)), J && (ea += 0.5 * b + 8);
    let es = l.useMemo(
            () => (q && X ? D / (U - 2 * ea) : Z && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : E),
            [Z, F, q, D, U, ea, X],
        ),
        er = U - 2 * ea,
        eo = q && X ? D : er * es,
        ec = Math.floor(Math.min(D, eo) / es),
        ed = U > D / es + 72 + b + 8;
    t = J || q ? (J ? -16 : -8) : 40 + Math.max(0, 72 - (U - ec) / 2);
    let eu = Math.max(0, 72 - (U - ec) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            $(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eh = W || null == H,
        ep = eh ? "animate-never" : "animate-always",
        em = (0, o.z)(
            {
                value: +!!J,
                delay: ed || !J ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => K(!0),
                onChange: () => f._.dispatch(j.jej.REMEASURE_TARGET),
                onRest: () => {
                    K(!1), f._.dispatch(j.jej.REMEASURE_TARGET);
                },
            },
            ep,
        ),
        ef = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, ep),
        eA = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && ef.value.idle && !ei) || el || eh ? "animate-never" : "animate-always",
        ),
        ex = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, ep),
        eg = (0, c.p)(
            P,
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
            z(e), $(!1);
        }, []),
        ey = J ? [] : (0, C.Cf)(T, P, B),
        { visibleParticipants: ej, participantTileWidth: eI } = (0, y.i4)(D, R);
    return (0, i.jsxs)("div", {
        className: s()(N.zr, v.tR, w),
        children: [
            (0, i.jsxs)("div", {
                className: N.QX,
                style: { opacity: Z && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: N.pc,
                        style: { top: ef.value.to((e) => (-e * b) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: eA.value },
                                className: N.tN,
                                children: (0, i.jsx)("div", {
                                    className: v.xS,
                                    style: { aspectRatio: es },
                                    children: eg((e, t, l) => {
                                        let { key: s } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: v.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(x.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= D || er >= U,
                                                          channel: O,
                                                          className: v.JS,
                                                          videoComponent: G,
                                                          width: D,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: _,
                                                          onContextMenu: a,
                                                          onVideoResize: eC,
                                                          inCall: L,
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
                                      className: s()(N.$l, { [N.N7]: k }),
                                      style: { bottom: ex.value },
                                      children: (0, i.jsx)(h.A, {
                                          channelId: O.id,
                                          isParticipantsOpen: M,
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
                            channel: O,
                            onClick: n,
                            onContextMenu: a,
                            onDoubleClick: _,
                            participants: ej,
                            participantTileWidth: eI,
                            selectedParticipantId: P.id,
                            inCall: L,
                            popoutType: S,
                            paused: Y || !M,
                        }),
                    }),
                ],
            }),
            ey.length > 0
                ? (0, i.jsx)(g.A, {
                      onContextMenuParticipant: a,
                      width: D,
                      height: U,
                      channel: O,
                      participants: ey,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
