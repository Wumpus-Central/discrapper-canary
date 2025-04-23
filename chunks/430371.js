n.d(t, { Z: () => S }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(272573),
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
    y = n(796638),
    C = n(981631),
    x = n(354459),
    v = n(363987),
    j = n(999976);
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
function E(e, t) {
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
let I = 16 / 9,
    P = 8 + y.cF;
function S(e) {
    var t;
    let n,
        { onSelectParticipant: l, onContextMenuParticipant: S, onFullscreenParticipant: Z, participants: N, filteredParticipants: T, popoutWindow: A, inCall: w, channel: R, selectedParticipant: k, showParticipants: M = !0, className: L, width: D, height: U, layout: B, idle: G } = e,
        F = null != A,
        H = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [z, W] = i.useState(null),
        Y = (0, c.Z)(z),
        [q, K] = i.useState(!0),
        [X, Q] = i.useState(!1),
        J = k.type === x.fO.ACTIVITY || k.type === x.fO.PRESENCE_EMBEDDED_ACTIVITY,
        $ = (0, u.Z)(J ? k.applicationId : void 0),
        ee = !J && null != k.streamId,
        et = U <= 2 * P + 144,
        en = M && !et,
        er = (0, c.Z)(en),
        ei = B === C.AEg.MINIMUM || B === C.AEg.NORMAL,
        el = !et && (!ei || J),
        eo = (0, m.Z)(el, 100),
        ea = (null != (t = (0, c.Z)(k.id)) ? t : k.id) !== k.id,
        es = 0;
    (J || en) && (es += 72), J && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * P + 8);
    let ec = i.useMemo(() => (J && $ ? D / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : I), [ee, z, J, D, U, es, $]),
        eu = U - 2 * es,
        ed = J && $ ? D : eu * ec,
        ep = Math.floor(Math.min(D, ed) / ec),
        eh = U > D / ec + 72 + P + 8;
    (n = en || J ? (en ? -16 : -8) : 40 + Math.max(0, 72 - (U - ep) / 2)),
        i.useEffect(() => {
            let e = setTimeout(() => {
                K(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let ef = q || null == Y,
        em = ef ? 'animate-never' : 'animate-always',
        eg = (0, s.q_F)(
            {
                value: +!!en,
                delay: eh || !en ? 0 : 100,
                config: E(O({}, a.config.stiff), { clamp: !0 }),
                onStart: () => Q(!0),
                onChange: () => f.S.dispatch(C.CkL.REMEASURE_TARGET),
                onRest: () => {
                    Q(!1), f.S.dispatch(C.CkL.REMEASURE_TARGET);
                }
            },
            em
        ),
        eb = (0, s.q_F)(
            {
                value: +!!en,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            em
        ),
        e_ = (0, s.q_F)(
            {
                value: ed,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            (er === en && eb.value.idle && !eo) || ea || ef ? 'animate-never' : 'animate-always'
        ),
        ey = (0, s.q_F)(
            {
                value: n,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            em
        ),
        eC = (0, s.Yzy)(
            k,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(O({}, a.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            em
        ),
        ex = i.useCallback((e) => {
            W(e), K(!1);
        }, []),
        ev = en ? [] : (0, _.n3)(N, k, V),
        { visibleParticipants: ej, participantTileWidth: eO } = (0, y.ZB)(D, T);
    return (0, r.jsxs)('div', {
        className: o()(j.root, v.flexCenter, L),
        children: [
            (0, r.jsxs)('div', {
                className: j.tileWrapper,
                style: { opacity: ee && q ? 0 : 1 },
                children: [
                    (0, r.jsxs)(a.animated.div, {
                        className: j.videoFrame,
                        style: { top: eb.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: { width: e_.value },
                                className: j.videoWrapper,
                                children: (0, r.jsx)('div', {
                                    className: v.videoSizer,
                                    style: { aspectRatio: ec },
                                    children: eC((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: v.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ed >= D || eu >= U,
                                                          channel: R,
                                                          className: v.focusedVideo,
                                                          videoComponent: H,
                                                          width: D,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: S,
                                                          onVideoResize: ex,
                                                          inCall: w,
                                                          inPopout: F
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
                                      className: o()(j.actionRow, { [j.idle]: G }),
                                      style: { bottom: ey.value },
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
                            translateY: eg.value.to((e) => (e * P) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, r.jsx)(y.ZP, {
                            channel: R,
                            onClick: l,
                            onContextMenu: S,
                            onDoubleClick: Z,
                            participants: ej,
                            participantTileWidth: eO,
                            selectedParticipantId: k.id,
                            inCall: w,
                            popoutWindow: A,
                            paused: X || !M
                        })
                    })
                ]
            }),
            ev.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: S,
                      width: D,
                      height: U,
                      channel: R,
                      participants: ev,
                      onSelectParticipant: l
                  })
                : null
        ]
    });
}
