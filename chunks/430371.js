n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(666912),
    o = n(481060),
    c = n(110924),
    d = n(988980),
    u = n(157813),
    h = n(314897),
    p = n(131951),
    m = n(585483),
    f = n(807705),
    g = n(27457),
    C = n(111248),
    x = n(312703),
    v = n(796638),
    _ = n(981631),
    I = n(354459),
    E = n(288135),
    b = n(290187);
let Z = 16 / 9,
    N = 8 + v.cF;
function S(e) {
    var t;
    let n,
        { onSelectParticipant: r, onContextMenuParticipant: S, onFullscreenParticipant: T, participants: j, filteredParticipants: A, popoutWindow: y, inCall: P, channel: M, selectedParticipant: R, showParticipants: L = !0, className: k, paused: O, width: D, height: w, layout: B, idle: U } = e,
        H = null != y,
        G = p.Z.getVideoComponent(),
        F = h.default.getId(),
        [V, z] = l.useState(null),
        [W, K] = l.useState(!0),
        [Y, q] = l.useState(!1),
        X = R.type === I.fO.ACTIVITY,
        J = (0, d.Z)(R.id),
        Q = !X && null != R.streamId,
        $ = w <= 2 * N + 144,
        ee = L && !$,
        et = (0, c.Z)(ee),
        en = B === _.AEg.MINIMUM || B === _.AEg.NORMAL,
        ei = !$ && (!en || X),
        el = (0, f.Z)(ei, 100),
        er = (null !== (t = (0, c.Z)(R.id)) && void 0 !== t ? t : R.id) !== R.id,
        ea = 0;
    (X || ee) && (ea += 72), X && !ee && (ei ? (ea += 48) : (ea += 8)), ee && (ea += 0.5 * N + 8);
    let es = l.useMemo(() => (X && J ? D / (w - 2 * ea) : Q && null != V && V.width > 0 && V.height > 0 ? V.width / V.height : Z), [Q, V, X, D, w, ea, J]),
        eo = w - 2 * ea,
        ec = X && J ? D : eo * es,
        ed = Math.floor(Math.min(D, ec) / es),
        eu = w > D / es + 72 + N + 8;
    (n = ee || X ? (ee ? -16 : -8) : 40 + Math.max(0, 72 - (w - ed) / 2)),
        l.useEffect(() => {
            let e = setTimeout(() => {
                K(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let eh = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                delay: eu || !ee ? 0 : 100,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                },
                onStart: () => q(!0),
                onChange: () => m.S.dispatch(_.CkL.REMEASURE_TARGET),
                onRest: () => {
                    q(!1), m.S.dispatch(_.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        ep = (0, o.useSpring)(
            {
                value: ee ? 1 : 0,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        em = (0, o.useSpring)(
            {
                value: ec,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            (et === ee && ep.value.idle && !el) || er ? 'animate-never' : 'animate-always'
        ),
        ef = (0, o.useSpring)(
            {
                value: n,
                config: {
                    ...s.config.stiff,
                    clamp: !0
                }
            },
            'animate-always'
        ),
        eg = (0, o.useTransition)(
            R,
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
        eC = l.useCallback((e) => {
            z(e), K(!1);
        }, []),
        ex = ee || O ? [] : (0, x.n3)(j, R, F),
        { visibleParticipants: ev, participantTileWidth: e_ } = (0, v.ZB)(D, A);
    return (0, i.jsxs)('div', {
        className: a()(b.root, E.flexCenter, k),
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
                                    className: a()(E.videoSizer),
                                    style: { aspectRatio: es },
                                    children: eg((e, t, n) => {
                                        let { key: l } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  s.animated.div,
                                                  {
                                                      className: E.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ec >= D || eo >= w,
                                                          channel: M,
                                                          className: E.focusedVideo,
                                                          videoComponent: G,
                                                          paused: O,
                                                          width: D,
                                                          participant: t,
                                                          onClick: r,
                                                          onDoubleClick: T,
                                                          onContextMenu: S,
                                                          onVideoResize: eC,
                                                          inCall: P,
                                                          inPopout: H
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
                                      className: a()(b.actionRow, { [b.idle]: U }),
                                      style: { bottom: ef.value },
                                      children: (0, i.jsx)(u.Z, {
                                          channelId: M.id,
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
                        children: (0, i.jsx)(v.ZP, {
                            channel: M,
                            onClick: r,
                            onContextMenu: S,
                            onDoubleClick: T,
                            participants: ev,
                            participantTileWidth: e_,
                            selectedParticipantId: R.id,
                            inCall: P,
                            paused: O || Y || !L,
                            popoutWindow: y
                        })
                    })
                ]
            }),
            ex.length > 0
                ? (0, i.jsx)(C.Z, {
                      onContextMenuParticipant: S,
                      width: D,
                      height: w,
                      channel: M,
                      participants: ex
                  })
                : null
        ]
    });
}
