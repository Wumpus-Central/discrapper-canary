n.d(t, { Z: () => P }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(200100),
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
    y = n(981631),
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
let N = 16 / 9,
    I = 8 + C.cF;
function P(e) {
    var t;
    let n,
        { onSelectParticipant: l, onContextMenuParticipant: P, onFullscreenParticipant: S, participants: Z, filteredParticipants: T, popoutWindow: A, inCall: w, channel: R, selectedParticipant: k, showParticipants: M = !0, className: L, paused: D, width: W, height: U, layout: B, idle: H } = e,
        F = null != A,
        G = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [z, Y] = i.useState(null),
        [q, K] = i.useState(!0),
        [X, Q] = i.useState(!1),
        J = k.type === x.fO.ACTIVITY || k.type === x.fO.PRESENCE_EMBEDDED_ACTIVITY,
        $ = (0, u.Z)(J ? k.applicationId : void 0),
        ee = !J && null != k.streamId,
        et = U <= 2 * I + 144,
        en = M && !et,
        er = (0, c.Z)(en),
        ei = B === y.AEg.MINIMUM || B === y.AEg.NORMAL,
        el = !et && (!ei || J),
        eo = (0, m.Z)(el, 100),
        ea = (null != (t = (0, c.Z)(k.id)) ? t : k.id) !== k.id,
        es = 0;
    (J || en) && (es += 72), J && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * I + 8);
    let ec = i.useMemo(() => (J && $ ? W / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : N), [ee, z, J, W, U, es, $]),
        eu = U - 2 * es,
        ed = J && $ ? W : eu * ec,
        ep = Math.floor(Math.min(W, ed) / ec),
        eh = U > W / ec + 72 + I + 8;
    (n = en || J ? (en ? -16 : -8) : 40 + Math.max(0, 72 - (U - ep) / 2)),
        i.useEffect(() => {
            let e = setTimeout(() => {
                K(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let ef = q ? 'animate-never' : 'animate-always',
        em = (0, s.q_F)(
            {
                value: +!!en,
                delay: eh || !en ? 0 : 100,
                config: E(O({}, a.config.stiff), { clamp: !0 }),
                onStart: () => Q(!0),
                onChange: () => f.S.dispatch(y.CkL.REMEASURE_TARGET),
                onRest: () => {
                    Q(!1), f.S.dispatch(y.CkL.REMEASURE_TARGET);
                }
            },
            ef
        ),
        eg = (0, s.q_F)(
            {
                value: +!!en,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            ef
        ),
        eb = (0, s.q_F)(
            {
                value: ed,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            (er === en && eg.value.idle && !eo) || ea || q ? 'animate-never' : 'animate-always'
        ),
        e_ = (0, s.q_F)(
            {
                value: n,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            ef
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
            ef
        ),
        ey = i.useCallback((e) => {
            Y(e), K(!1);
        }, []),
        ex = en || D ? [] : (0, _.n3)(Z, k, V),
        { visibleParticipants: ev, participantTileWidth: ej } = (0, C.ZB)(W, T);
    return (0, r.jsxs)('div', {
        className: o()(j.root, v.flexCenter, L),
        children: [
            (0, r.jsxs)('div', {
                className: j.tileWrapper,
                style: { opacity: ee && q ? 0 : 1 },
                children: [
                    (0, r.jsxs)(a.animated.div, {
                        className: j.videoFrame,
                        style: { top: eg.value.to((e) => (-e * I) / 2) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: { width: eb.value },
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
                                                          noBorder: ed >= W || eu >= U,
                                                          channel: R,
                                                          className: v.focusedVideo,
                                                          videoComponent: G,
                                                          paused: D,
                                                          width: W,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: S,
                                                          onContextMenu: P,
                                                          onVideoResize: ey,
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
                                      className: o()(j.actionRow, { [j.idle]: H }),
                                      style: { bottom: e_.value },
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
                            translateY: em.value.to((e) => (e * I) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, r.jsx)(C.ZP, {
                            channel: R,
                            onClick: l,
                            onContextMenu: P,
                            onDoubleClick: S,
                            participants: ev,
                            participantTileWidth: ej,
                            selectedParticipantId: k.id,
                            inCall: w,
                            paused: D || X || !M,
                            popoutWindow: A
                        })
                    })
                ]
            }),
            ex.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: P,
                      width: W,
                      height: U,
                      channel: R,
                      participants: ex,
                      onSelectParticipant: l
                  })
                : null
        ]
    });
}
