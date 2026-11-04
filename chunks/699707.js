n.d(t, { A: () => S });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(29477),
    o = n(717421),
    d = n(866323),
    c = n(475743),
    u = n(216418),
    h = n(80051),
    p = n(280450),
    m = n(999926),
    A = n(625494),
    f = n(220144),
    g = n(175203),
    x = n(306852),
    C = n(947580),
    y = n(163432),
    j = n(652215),
    I = n(806931),
    N = n(804273),
    v = n(517689);
let E = 16 / 9,
    b = 8 + y.Vp;
function S(e) {
    let t,
        {
            onSelectParticipant: n,
            onContextMenuParticipant: a,
            onFullscreenParticipant: S,
            participants: T,
            filteredParticipants: _,
            popoutType: R,
            inCall: O,
            channel: P,
            selectedParticipant: L,
            showParticipants: M = !0,
            className: w,
            width: U,
            height: D,
            layout: V,
            idle: G,
        } = e,
        k = m.Ay.getVideoComponent(),
        B = p.default.getId(),
        [F, z] = l.useState(null),
        H = (0, c.Ay)(F),
        [W, Y] = l.useState(!0),
        [$, K] = l.useState(!1),
        X = L.type === I.lp.ACTIVITY,
        q = (0, u.A)(X ? L.applicationId : void 0),
        Z = !X && null != L.streamId,
        Q = D <= 2 * b + 144,
        J = M && !Q,
        ee = (0, c.Ay)(J),
        et = V === j.DUB.MINIMUM || V === j.DUB.NORMAL,
        en = !Q && (!et || X),
        ei = (0, f.A)(en, 100),
        el = ((0, c.Ay)(L.id) ?? L.id) !== L.id,
        ea = 0;
    ((X || J) && (ea += 72), X && !J && (en ? (ea += 48) : (ea += 8)), J && (ea += 0.5 * b + 8));
    let es = l.useMemo(
            () => (X && q ? U / (D - 2 * ea) : Z && null != F && F.width > 0 && F.height > 0 ? F.width / F.height : E),
            [Z, F, X, U, D, ea, q],
        ),
        er = D - 2 * ea,
        eo = X && q ? U : er * es,
        ed = Math.floor(Math.min(U, eo) / es),
        ec = D > U / es + 72 + b + 8;
    t = J || X ? (J ? -16 : -8) : 40 + Math.max(0, 72 - (D - ed) / 2);
    let eu = Math.max(0, 72 - (D - ed) / 2);
    l.useEffect(() => {
        let e = setTimeout(() => {
            Y(!1);
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
                delay: ec || !J ? 0 : 100,
                config: { ...r.config.stiff, clamp: !0 },
                onStart: () => K(!0),
                onChange: () => A._.dispatch(j.jej.REMEASURE_TARGET),
                onRest: () => {
                    (K(!1), A._.dispatch(j.jej.REMEASURE_TARGET));
                },
            },
            ep,
        ),
        eA = (0, o.z)({ value: +!!J, config: { ...r.config.stiff, clamp: !0 } }, ep),
        ef = (0, o.z)(
            { value: eo, config: { ...r.config.stiff, clamp: !0 } },
            (ee === J && eA.value.idle && !ei) || el || eh ? "animate-never" : "animate-always",
        ),
        eg = (0, o.z)({ value: t, config: { ...r.config.stiff, clamp: !0 } }, ep),
        ex = (0, d.p)(
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
        eC = l.useCallback((e) => {
            (z(e), Y(!1));
        }, []),
        ey = J ? [] : (0, C.Cf)(T, L, B),
        { visibleParticipants: ej, participantTileWidth: eI } = (0, y.i4)(U, _);
    return (0, i.jsxs)("div", {
        className: s()(v.zr, N.tR, w),
        children: [
            (0, i.jsxs)("div", {
                className: v.QX,
                style: { opacity: Z && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(r.animated.div, {
                        className: v.pc,
                        style: { top: eA.value.to((e) => (-e * b) / 2) },
                        children: [
                            (0, i.jsx)(r.animated.div, {
                                style: { width: ef.value },
                                className: v.tN,
                                children: (0, i.jsx)("div", {
                                    className: N.xS,
                                    style: { aspectRatio: es },
                                    children: ex((e, t, l) => {
                                        let { key: s } = l;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  r.animated.div,
                                                  {
                                                      className: N.qX,
                                                      style: e,
                                                      children: (0, i.jsx)(g.Ay, {
                                                          focused: !0,
                                                          noBorder: eo >= U || er >= D,
                                                          channel: P,
                                                          className: N.JS,
                                                          videoComponent: k,
                                                          width: U,
                                                          participant: t,
                                                          onClick: n,
                                                          onDoubleClick: S,
                                                          onContextMenu: a,
                                                          onVideoResize: eC,
                                                          inCall: O,
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
                                      className: s()(v.$l, { [v.N7]: G }),
                                      style: { bottom: eg.value },
                                      children: (0, i.jsx)(h.A, {
                                          channelId: P.id,
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
                            translateY: em.value.to((e) => (e * b) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(y.Ay, {
                            channel: P,
                            onClick: n,
                            onContextMenu: a,
                            onDoubleClick: S,
                            participants: ej,
                            participantTileWidth: eI,
                            selectedParticipantId: L.id,
                            inCall: O,
                            popoutType: R,
                            paused: $ || !M,
                        }),
                    }),
                ],
            }),
            ey.length > 0
                ? (0, i.jsx)(x.A, {
                      onContextMenuParticipant: a,
                      width: U,
                      height: D,
                      channel: P,
                      participants: ey,
                      onSelectParticipant: n,
                  })
                : null,
        ],
    });
}
