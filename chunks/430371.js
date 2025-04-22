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
    S = 8 + y.cF;
function P(e) {
    var t;
    let n,
        { onSelectParticipant: l, onContextMenuParticipant: P, onFullscreenParticipant: Z, participants: N, filteredParticipants: T, popoutWindow: A, inCall: w, channel: R, selectedParticipant: k, showParticipants: M = !0, className: L, paused: D, width: U, height: B, layout: G, idle: F } = e,
        H = null != A,
        V = h.Z.getVideoComponent(),
        z = p.default.getId(),
        [W, Y] = i.useState(null),
        q = (0, c.Z)(W),
        [K, X] = i.useState(!0),
        [Q, J] = i.useState(!1),
        $ = k.type === x.fO.ACTIVITY || k.type === x.fO.PRESENCE_EMBEDDED_ACTIVITY,
        ee = (0, u.Z)($ ? k.applicationId : void 0),
        et = !$ && null != k.streamId,
        en = B <= 2 * S + 144,
        er = M && !en,
        ei = (0, c.Z)(er),
        el = G === C.AEg.MINIMUM || G === C.AEg.NORMAL,
        eo = !en && (!el || $),
        ea = (0, m.Z)(eo, 100),
        es = (null != (t = (0, c.Z)(k.id)) ? t : k.id) !== k.id,
        ec = 0;
    ($ || er) && (ec += 72), $ && !er && (eo ? (ec += 48) : (ec += 8)), er && (ec += 0.5 * S + 8);
    let eu = i.useMemo(() => ($ && ee ? U / (B - 2 * ec) : et && null != W && W.width > 0 && W.height > 0 ? W.width / W.height : I), [et, W, $, U, B, ec, ee]),
        ed = B - 2 * ec,
        ep = $ && ee ? U : ed * eu,
        eh = Math.floor(Math.min(U, ep) / eu),
        ef = B > U / eu + 72 + S + 8;
    (n = er || $ ? (er ? -16 : -8) : 40 + Math.max(0, 72 - (B - eh) / 2)),
        i.useEffect(() => {
            let e = setTimeout(() => {
                X(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let em = K || null == q,
        eg = em ? 'animate-never' : 'animate-always',
        eb = (0, s.q_F)(
            {
                value: +!!er,
                delay: ef || !er ? 0 : 100,
                config: E(O({}, a.config.stiff), { clamp: !0 }),
                onStart: () => J(!0),
                onChange: () => f.S.dispatch(C.CkL.REMEASURE_TARGET),
                onRest: () => {
                    J(!1), f.S.dispatch(C.CkL.REMEASURE_TARGET);
                }
            },
            eg
        ),
        e_ = (0, s.q_F)(
            {
                value: +!!er,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            eg
        ),
        ey = (0, s.q_F)(
            {
                value: ep,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            (ei === er && e_.value.idle && !ea) || es || em ? 'animate-never' : 'animate-always'
        ),
        eC = (0, s.q_F)(
            {
                value: n,
                config: E(O({}, a.config.stiff), { clamp: !0 })
            },
            eg
        ),
        ex = (0, s.Yzy)(
            k,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(O({}, a.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 }
            },
            eg
        ),
        ev = i.useCallback((e) => {
            Y(e), X(!1);
        }, []),
        ej = er || D ? [] : (0, _.n3)(N, k, z),
        { visibleParticipants: eO, participantTileWidth: eE } = (0, y.ZB)(U, T);
    return (0, r.jsxs)('div', {
        className: o()(j.root, v.flexCenter, L),
        children: [
            (0, r.jsxs)('div', {
                className: j.tileWrapper,
                style: { opacity: et && K ? 0 : 1 },
                children: [
                    (0, r.jsxs)(a.animated.div, {
                        className: j.videoFrame,
                        style: { top: e_.value.to((e) => (-e * S) / 2) },
                        children: [
                            (0, r.jsx)(a.animated.div, {
                                style: { width: ey.value },
                                className: j.videoWrapper,
                                children: (0, r.jsx)('div', {
                                    className: v.videoSizer,
                                    style: { aspectRatio: eu },
                                    children: ex((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  a.animated.div,
                                                  {
                                                      className: v.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ep >= U || ed >= B,
                                                          channel: R,
                                                          className: v.focusedVideo,
                                                          videoComponent: V,
                                                          paused: D,
                                                          width: U,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: P,
                                                          onVideoResize: ev,
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
                            eo
                                ? (0, r.jsx)(a.animated.div, {
                                      className: o()(j.actionRow, { [j.idle]: F }),
                                      style: { bottom: eC.value },
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
                            translateY: eb.value.to((e) => (e * S) / 2),
                            opacity: eb.value,
                            visibility: eb.value.to((e) => (0 === e ? 'hidden' : 'visible'))
                        },
                        children: (0, r.jsx)(y.ZP, {
                            channel: R,
                            onClick: l,
                            onContextMenu: P,
                            onDoubleClick: Z,
                            participants: eO,
                            participantTileWidth: eE,
                            selectedParticipantId: k.id,
                            inCall: w,
                            paused: D || Q || !M,
                            popoutWindow: A
                        })
                    })
                ]
            }),
            ej.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: P,
                      width: U,
                      height: B,
                      channel: R,
                      participants: ej,
                      onSelectParticipant: l
                  })
                : null
        ]
    });
}
