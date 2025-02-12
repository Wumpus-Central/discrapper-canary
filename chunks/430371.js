n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(642128),
    o = n(481060),
    c = n(110924),
    d = n(988980),
    u = n(157813),
    h = n(314897),
    p = n(131951),
    m = n(585483),
    f = n(807705),
    g = n(27457),
    _ = n(111248),
    C = n(312703),
    x = n(796638),
    v = n(981631),
    E = n(354459),
    I = n(671289),
    b = n(557605);
let Z = 16 / 9,
    N = 8 + x.cF;
function T(e) {
    var t;
    let n,
        { onSelectParticipant: a, onContextMenuParticipant: T, onFullscreenParticipant: S, participants: j, filteredParticipants: y, popoutWindow: A, inCall: P, channel: R, selectedParticipant: M, showParticipants: L = !0, className: k, paused: O, width: D, height: w, layout: U, idle: B } = e,
        F = null != A,
        H = p.Z.getVideoComponent(),
        G = h.default.getId(),
        [V, z] = l.useState(null),
        [W, Y] = l.useState(!0),
        [q, K] = l.useState(!1),
        X = M.type === E.fO.ACTIVITY || M.type === E.fO.PRESENCE_EMBEDDED_ACTIVITY,
        J = (0, d.Z)(X ? M.applicationId : void 0),
        Q = !X && null != M.streamId,
        $ = w <= 2 * N + 144,
        ee = L && !$,
        et = (0, c.Z)(ee),
        en = U === v.AEg.MINIMUM || U === v.AEg.NORMAL,
        ei = !$ && (!en || X),
        el = (0, f.Z)(ei, 100),
        ea = (null !== (t = (0, c.Z)(M.id)) && void 0 !== t ? t : M.id) !== M.id,
        er = 0;
    (X || ee) && (er += 72), X && !ee && (ei ? (er += 48) : (er += 8)), ee && (er += 0.5 * N + 8);
    let es = l.useMemo(() => (X && J ? D / (w - 2 * er) : Q && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : Z), [Q, V, X, D, w, er, J]),
        eo = w - 2 * er,
        ec = X && J ? D : eo * es,
        ed = Math.floor(Math.min(D, ec) / es),
        eu = w > D / es + 72 + N + 8;
    (n = ee || X ? (ee ? -16 : -8) : 40 + Math.max(0, 72 - (w - ed) / 2)),
        l.useEffect(() => {
            let e = setTimeout(() => {
                Y(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let eh = (0, o.q_F)(
            {
                value: ee ? 1 : 0,
                delay: eu || !ee ? 0 : 100,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                },
                onStart: () => K(!0),
                onChange: () => m.S.dispatch(v.CkL.REMEASURE_TARGET),
                onRest: () => {
                    K(!1), m.S.dispatch(v.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        ep = (0, o.q_F)(
            {
                value: ee ? 1 : 0,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        em = (0, o.q_F)(
            {
                value: ec,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            (et === ee && ep.value.idle && !el) || ea ? 'animate-never' : 'animate-always'
        ),
        ef = (0, o.q_F)(
            {
                value: n,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        eg = (0, o.Yzy)(
            M,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: {
                    ...s.config.stiff,
                    clamp: !0
                },
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        ),
        e_ = l.useCallback((e) => {
            z(e), Y(!1);
        }, []),
        eC = ee || O ? [] : (0, C.n3)(j, M, G),
        { visibleParticipants: ex, participantTileWidth: ev } = (0, x.ZB)(D, y);
    return (0, i.jsxs)('div', {
        className: r()(b.root, I.flexCenter, k),
        children: [
            (0, i.jsxs)('div', {
                className: b.tileWrapper,
                style: { opacity: Q && W ? 0 : 1 },
                children: [
                    (0, i.jsxs)(s.animated.div, {
                        className: b.videoFrame,
                        style: { top: ep.value.to((e) => (-e * N) / 2) },
                        children: [
                            (0, i.jsx)(s.animated.div, {
                                style: { width: em.value },
                                className: b.videoWrapper,
                                children: (0, i.jsx)('div', {
                                    className: r()(I.videoSizer),
                                    style: { aspectRatio: es },
                                    children: eg((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  s.animated.div,
                                                  {
                                                      className: I.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ec >= D || eo >= w,
                                                          channel: R,
                                                          className: I.focusedVideo,
                                                          videoComponent: H,
                                                          paused: O,
                                                          width: D,
                                                          participant: t,
                                                          onClick: a,
                                                          onDoubleClick: S,
                                                          onContextMenu: T,
                                                          onVideoResize: e_,
                                                          inCall: P,
                                                          inPopout: F
                                                      })
                                                  },
                                                  l
                                              )
                                            : null;
                                    })
                                })
                            }),
                            ei
                                ? (0, i.jsx)(s.animated.div, {
                                      className: r()(b.actionRow, { [b.idle]: B }),
                                      style: { bottom: ef.value },
                                      children: (0, i.jsx)(u.Z, {
                                          channelId: R.id,
                                          isParticipantsOpen: L,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(s.animated.div, {
                        className: b.participantsWrapperAnimated,
                        style: {
                            translateY: eh.value.to((e) => (e * N) / 2),
                            opacity: eh.value,
                            visibility: eh.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, i.jsx)(x.ZP, {
                            channel: R,
                            onClick: a,
                            onContextMenu: T,
                            onDoubleClick: S,
                            participants: ex,
                            participantTileWidth: ev,
                            selectedParticipantId: M.id,
                            inCall: P,
                            paused: O || q || !L,
                            popoutWindow: A
                        })
                    })
                ]
            }),
            eC.length > 0
                ? (0, i.jsx)(_.Z, {
                      onContextMenuParticipant: T,
                      width: D,
                      height: w,
                      channel: R,
                      participants: eC
                  })
                : null
        ]
    });
}
