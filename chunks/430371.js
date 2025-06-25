n.d(t, { Z: () => P }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(695469),
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
    x = n(981631),
    C = n(354459),
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
    S = 8 + y.cF;
function P(e) {
    var t;
    let n,
        { onSelectParticipant: l, onContextMenuParticipant: P, onFullscreenParticipant: Z, participants: N, filteredParticipants: T, popoutWindow: A, inCall: w, channel: R, selectedParticipant: M, showParticipants: k = !0, className: D, width: L, height: U, layout: B, idle: F } = e,
        G = null != A,
        H = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [z, W] = i.useState(null),
        Y = (0, c.Z)(z),
        [q, K] = i.useState(!0),
        [X, Q] = i.useState(!1),
        J = M.type === C.fO.ACTIVITY,
        $ = (0, u.Z)(J ? M.applicationId : void 0),
        ee = !J && null != M.streamId,
        et = U <= 2 * S + 144,
        en = k && !et,
        er = (0, c.Z)(en),
        ei = B === x.AEg.MINIMUM || B === x.AEg.NORMAL,
        el = !et && (!ei || J),
        ea = (0, m.Z)(el, 100),
        eo = (null != (t = (0, c.Z)(M.id)) ? t : M.id) !== M.id,
        es = 0;
    (J || en) && (es += 72), J && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * S + 8);
    let ec = i.useMemo(() => (J && $ ? L / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : I), [ee, z, J, L, U, es, $]),
        eu = U - 2 * es,
        ed = J && $ ? L : eu * ec,
        ep = Math.floor(Math.min(L, ed) / ec),
        eh = U > L / ec + 72 + S + 8;
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
                config: E(O({}, o.config.stiff), { clamp: !0 }),
                onStart: () => Q(!0),
                onChange: () => f.S.dispatch(x.CkL.REMEASURE_TARGET),
                onRest: () => {
                    Q(!1), f.S.dispatch(x.CkL.REMEASURE_TARGET);
                }
            },
            em
        ),
        eb = (0, s.q_F)(
            {
                value: +!!en,
                config: E(O({}, o.config.stiff), { clamp: !0 })
            },
            em
        ),
        e_ = (0, s.q_F)(
            {
                value: ed,
                config: E(O({}, o.config.stiff), { clamp: !0 })
            },
            (er === en && eb.value.idle && !ea) || eo || ef ? 'animate-never' : 'animate-always'
        ),
        ey = (0, s.q_F)(
            {
                value: n,
                config: E(O({}, o.config.stiff), { clamp: !0 })
            },
            em
        ),
        ex = (0, s.Yzy)(
            M,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(O({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            em
        ),
        eC = i.useCallback((e) => {
            W(e), K(!1);
        }, []),
        ev = en ? [] : (0, _.n3)(N, M, V),
        { visibleParticipants: ej, participantTileWidth: eO } = (0, y.ZB)(L, T);
    return (0, r.jsxs)('div', {
        className: a()(j.root, v.flexCenter, D),
        children: [
            (0, r.jsxs)('div', {
                className: j.tileWrapper,
                style: { opacity: ee && q ? 0 : 1 },
                children: [
                    (0, r.jsxs)(o.animated.div, {
                        className: j.videoFrame,
                        style: { top: eb.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, r.jsx)(o.animated.div, {
                                style: { width: e_.value },
                                className: j.videoWrapper,
                                children: (0, r.jsx)('div', {
                                    className: v.videoSizer,
                                    style: { aspectRatio: ec },
                                    children: ex((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: v.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ed >= L || eu >= U,
                                                          channel: R,
                                                          className: v.focusedVideo,
                                                          videoComponent: H,
                                                          width: L,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: P,
                                                          onVideoResize: eC,
                                                          inCall: w,
                                                          inPopout: G
                                                      })
                                                  },
                                                  i
                                              )
                                            : null;
                                    })
                                })
                            }),
                            el
                                ? (0, r.jsx)(o.animated.div, {
                                      className: a()(j.actionRow, { [j.idle]: F }),
                                      style: { bottom: ey.value },
                                      children: (0, r.jsx)(d.Z, {
                                          channelId: R.id,
                                          isParticipantsOpen: k,
                                          isVertical: !0
                                      })
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(o.animated.div, {
                        className: j.participantsWrapperAnimated,
                        style: {
                            translateY: eg.value.to((e) => (e * S) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, r.jsx)(y.ZP, {
                            channel: R,
                            onClick: l,
                            onContextMenu: P,
                            onDoubleClick: Z,
                            participants: ej,
                            participantTileWidth: eO,
                            selectedParticipantId: M.id,
                            inCall: w,
                            popoutWindow: A,
                            paused: X || !k
                        })
                    })
                ]
            }),
            ev.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: P,
                      width: L,
                      height: U,
                      channel: R,
                      participants: ev,
                      onSelectParticipant: l
                  })
                : null
        ]
    });
}
