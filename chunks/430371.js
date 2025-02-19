n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(642128),
    s = n(481060),
    c = n(110924),
    u = n(988980),
    d = n(157813),
    p = n(314897),
    h = n(131951),
    f = n(585483),
    m = n(807705),
    g = n(27457),
    b = n(111248),
    _ = n(312703),
    C = n(796638),
    v = n(981631),
    y = n(354459),
    x = n(633563),
    j = n(386228);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = 16 / 9,
    P = 8 + C.cF;
function I(e) {
    var t;
    let n,
        { onSelectParticipant: l, onContextMenuParticipant: I, onFullscreenParticipant: S, participants: Z, filteredParticipants: T, popoutWindow: A, inCall: w, channel: R, selectedParticipant: k, showParticipants: M = !0, className: L, paused: D, width: W, height: U, layout: B, idle: F } = e,
        H = null != A,
        G = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [z, q] = i.useState(null),
        [Y, K] = i.useState(!0),
        [X, J] = i.useState(!1),
        Q = k.type === y.fO.ACTIVITY || k.type === y.fO.PRESENCE_EMBEDDED_ACTIVITY,
        $ = (0, u.Z)(Q ? k.applicationId : void 0),
        ee = !Q && null != k.streamId,
        et = U <= 2 * P + 144,
        en = M && !et,
        er = (0, c.Z)(en),
        ei = B === v.AEg.MINIMUM || B === v.AEg.NORMAL,
        el = !et && (!ei || Q),
        eo = (0, m.Z)(el, 100),
        ea = (null !== (t = (0, c.Z)(k.id)) && void 0 !== t ? t : k.id) !== k.id,
        es = 0;
    (Q || en) && (es += 72), Q && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * P + 8);
    let ec = i.useMemo(() => (Q && $ ? W / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : E), [ee, z, Q, W, U, es, $]),
        eu = U - 2 * es,
        ed = Q && $ ? W : eu * ec,
        ep = Math.floor(Math.min(W, ed) / ec),
        eh = U > W / ec + 72 + P + 8;
    (n = en || Q ? (en ? -16 : -8) : 40 + Math.max(0, 72 - (U - ep) / 2)),
        i.useEffect(() => {
            let e = setTimeout(() => {
                K(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let ef = (0, s.q_F)(
            {
                value: +!!en,
                delay: eh || !en ? 0 : 100,
                config: N(O({}, a.config.stiff), { clamp: !0 }),
                onStart: () => J(!0),
                onChange: () => f.S.dispatch(v.CkL.REMEASURE_TARGET),
                onRest: () => {
                    J(!1), f.S.dispatch(v.CkL.REMEASURE_TARGET);
                }
            },
            'animate-always'
        ),
        em = (0, s.q_F)(
            {
                value: +!!en,
                config: N(O({}, a.config.stiff), { clamp: !0 })
            },
            'animate-always'
        ),
        eg = (0, s.q_F)(
            {
                value: ed,
                config: N(O({}, a.config.stiff), { clamp: !0 })
            },
            (er === en && em.value.idle && !eo) || ea ? 'animate-never' : 'animate-always'
        ),
        eb = (0, s.q_F)(
            {
                value: n,
                config: N(O({}, a.config.stiff), { clamp: !0 })
            },
            'animate-always'
        ),
        e_ = (0, s.Yzy)(
            k,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: N(O({}, a.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            'animate-always'
        ),
        eC = i.useCallback((e) => {
            q(e), K(!1);
        }, []),
        ev = en || D ? [] : (0, _.n3)(Z, k, V),
        { visibleParticipants: ey, participantTileWidth: ex } = (0, C.ZB)(W, T);
    return (0, r.jsxs)('div', {
        className: o()(j.root, x.flexCenter, L),
        children: [
            (0, r.jsxs)('div', {
                className: j.tileWrapper,
                style: { opacity: ee && Y ? 0 : 1 },
                children: [
                    (0, r.jsxs)(a.animated.div, {
                        className: j.videoFrame,
                        style: { top: em.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: { width: eg.value },
                                className: j.videoWrapper,
                                children: (0, r.jsx)('div', {
                                    className: o()(x.videoSizer),
                                    style: { aspectRatio: ec },
                                    children: e_((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ed >= W || eu >= U,
                                                          channel: R,
                                                          className: x.focusedVideo,
                                                          videoComponent: G,
                                                          paused: D,
                                                          width: W,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: S,
                                                          onContextMenu: I,
                                                          onVideoResize: eC,
                                                          inCall: w,
                                                          inPopout: H
                                                      })
                                                  },
                                                  i
                                              )
                                            : null;
                                    })
                                })
                            }),
                            el
                                ? (0, r.jsx)(a.animated.div, {
                                      className: o()(j.actionRow, { [j.idle]: F }),
                                      style: { bottom: eb.value },
                                      children: (0, r.jsx)(d.Z, {
                                          channelId: R.id,
                                          isParticipantsOpen: M,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(a.animated.div, {
                        className: j.participantsWrapperAnimated,
                        style: {
                            translateY: ef.value.to((e) => (e * P) / 2),
                            opacity: ef.value,
                            visibility: ef.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, r.jsx)(C.ZP, {
                            channel: R,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: S,
                            participants: ey,
                            participantTileWidth: ex,
                            selectedParticipantId: k.id,
                            inCall: w,
                            paused: D || X || !M,
                            popoutWindow: A
                        })
                    })
                ]
            }),
            ev.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: W,
                      height: U,
                      channel: R,
                      participants: ev
                  })
                : null
        ]
    });
}
