n.d(t, { Z: () => I }), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(13941),
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
    C = n(312703),
    y = n(796638),
    _ = n(981631),
    v = n(354459),
    x = n(394024),
    O = n(597843);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = 16 / 9,
    P = 8 + y.cF;
function I(e) {
    var t;
    let n,
        {
            onSelectParticipant: l,
            onContextMenuParticipant: I,
            onFullscreenParticipant: Z,
            participants: T,
            filteredParticipants: N,
            popoutType: A,
            inCall: w,
            channel: M,
            selectedParticipant: R,
            showParticipants: L = !0,
            className: D,
            width: k,
            height: U,
            layout: B,
            idle: H,
        } = e,
        F = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [G, z] = r.useState(null),
        W = (0, c.Z)(G),
        [q, Y] = r.useState(!0),
        [K, X] = r.useState(!1),
        J = R.type === v.fO.ACTIVITY,
        Q = (0, u.Z)(J ? R.applicationId : void 0),
        $ = !J && null != R.streamId,
        ee = U <= 2 * P + 144,
        et = L && !ee,
        en = (0, c.Z)(et),
        ei = B === _.AEg.MINIMUM || B === _.AEg.NORMAL,
        er = !ee && (!ei || J),
        el = (0, m.Z)(er, 100),
        ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        eo = 0;
    (J || et) && (eo += 72), J && !et && (er ? (eo += 48) : (eo += 8)), et && (eo += 0.5 * P + 8);
    let es = r.useMemo(
            () => (J && Q ? k / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S),
            [$, G, J, k, U, eo, Q],
        ),
        ec = U - 2 * eo,
        eu = J && Q ? k : ec * es,
        ed = Math.floor(Math.min(k, eu) / es),
        ep = U > k / es + 72 + P + 8;
    (n = et || J ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2)),
        r.useEffect(() => {
            let e = setTimeout(() => {
                Y(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let eh = q || null == W,
        ef = eh ? "animate-never" : "animate-always",
        em = (0, s.q_F)(
            {
                value: +!!et,
                delay: ep || !et ? 0 : 100,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
                onStart: () => X(!0),
                onChange: () => f.S.dispatch(_.CkL.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), f.S.dispatch(_.CkL.REMEASURE_TARGET);
                },
            },
            ef,
        ),
        eg = (0, s.q_F)(
            {
                value: +!!et,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            ef,
        ),
        eb = (0, s.q_F)(
            {
                value: eu,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            (en === et && eg.value.idle && !el) || ea || eh ? "animate-never" : "animate-always",
        ),
        eC = (0, s.q_F)(
            {
                value: n,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            ef,
        ),
        ey = (0, s.Yzy)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(j({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            ef,
        ),
        e_ = r.useCallback((e) => {
            z(e), Y(!1);
        }, []),
        ev = et ? [] : (0, C.n3)(T, R, V),
        { visibleParticipants: ex, participantTileWidth: eO } = (0, y.ZB)(k, N);
    return (0, i.jsxs)("div", {
        className: a()(O.root, x.flexCenter, D),
        children: [
            (0, i.jsxs)("div", {
                className: O.tileWrapper,
                style: { opacity: $ && q ? 0 : 1 },
                children: [
                    (0, i.jsxs)(o.animated.div, {
                        className: O.videoFrame,
                        style: { top: eg.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, i.jsx)(o.animated.div, {
                                style: { width: eb.value },
                                className: O.videoWrapper,
                                children: (0, i.jsx)("div", {
                                    className: x.videoSizer,
                                    style: { aspectRatio: es },
                                    children: ey((e, t, n) => {
                                        let { key: r } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: eu >= k || ec >= U,
                                                          channel: M,
                                                          className: x.focusedVideo,
                                                          videoComponent: F,
                                                          width: k,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: e_,
                                                          inCall: w,
                                                          popoutType: A,
                                                      }),
                                                  },
                                                  r,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            er
                                ? (0, i.jsx)(o.animated.div, {
                                      className: a()(O.actionRow, { [O.idle]: H }),
                                      style: { bottom: eC.value },
                                      children: (0, i.jsx)(d.Z, {
                                          channelId: M.id,
                                          isParticipantsOpen: L,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, i.jsx)(o.animated.div, {
                        className: O.participantsWrapperAnimated,
                        style: {
                            translateY: em.value.to((e) => (e * P) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(y.ZP, {
                            channel: M,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: Z,
                            participants: ex,
                            participantTileWidth: eO,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutType: A,
                            paused: K || !L,
                        }),
                    }),
                ],
            }),
            ev.length > 0
                ? (0, i.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: k,
                      height: U,
                      channel: M,
                      participants: ev,
                      onSelectParticipant: l,
                  })
                : null,
        ],
    });
}
