n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(358458),
    s = n(481060),
    c = n(110924),
    u = n(988980),
    d = n(157813),
    p = n(314897),
    f = n(131951),
    h = n(585483),
    m = n(807705),
    g = n(27457),
    b = n(111248),
    _ = n(312703),
    y = n(796638),
    C = n(981631),
    v = n(354459),
    x = n(394024),
    O = n(597843);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function j(e, t) {
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
            showParticipants: D = !0,
            className: k,
            width: L,
            height: U,
            layout: B,
            idle: F,
        } = e,
        V = f.Z.getVideoComponent(),
        H = p.default.getId(),
        [G, W] = i.useState(null),
        z = (0, c.Z)(G),
        [q, Y] = i.useState(!0),
        [K, X] = i.useState(!1),
        J = R.type === v.fO.ACTIVITY,
        Q = (0, u.Z)(J ? R.applicationId : void 0),
        $ = !J && null != R.streamId,
        ee = U <= 2 * P + 144,
        et = D && !ee,
        en = (0, c.Z)(et),
        er = B === C.AEg.MINIMUM || B === C.AEg.NORMAL,
        ei = !ee && (!er || J),
        el = (0, m.Z)(ei, 100),
        ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        eo = 0;
    (J || et) && (eo += 72), J && !et && (ei ? (eo += 48) : (eo += 8)), et && (eo += 0.5 * P + 8);
    let es = i.useMemo(
            () => (J && Q ? L / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S),
            [$, G, J, L, U, eo, Q],
        ),
        ec = U - 2 * eo,
        eu = J && Q ? L : ec * es,
        ed = Math.floor(Math.min(L, eu) / es),
        ep = U > L / es + 72 + P + 8;
    (n = et || J ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2)),
        i.useEffect(() => {
            let e = setTimeout(() => {
                Y(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let ef = q || null == z,
        eh = ef ? "animate-never" : "animate-always",
        em = (0, s.q_F)(
            {
                value: +!!et,
                delay: ep || !et ? 0 : 100,
                config: j(E({}, o.config.stiff), { clamp: !0 }),
                onStart: () => X(!0),
                onChange: () => h.S.dispatch(C.CkL.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), h.S.dispatch(C.CkL.REMEASURE_TARGET);
                },
            },
            eh,
        ),
        eg = (0, s.q_F)(
            {
                value: +!!et,
                config: j(E({}, o.config.stiff), { clamp: !0 }),
            },
            eh,
        ),
        eb = (0, s.q_F)(
            {
                value: eu,
                config: j(E({}, o.config.stiff), { clamp: !0 }),
            },
            (en === et && eg.value.idle && !el) || ea || ef ? "animate-never" : "animate-always",
        ),
        e_ = (0, s.q_F)(
            {
                value: n,
                config: j(E({}, o.config.stiff), { clamp: !0 }),
            },
            eh,
        ),
        ey = (0, s.Yzy)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: j(E({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            eh,
        ),
        eC = i.useCallback((e) => {
            W(e), Y(!1);
        }, []),
        ev = et ? [] : (0, _.n3)(T, R, H),
        { visibleParticipants: ex, participantTileWidth: eO } = (0, y.ZB)(L, N);
    return (0, r.jsxs)("div", {
        className: a()(O.root, x.flexCenter, k),
        children: [
            (0, r.jsxs)("div", {
                className: O.tileWrapper,
                style: { opacity: $ && q ? 0 : 1 },
                children: [
                    (0, r.jsxs)(o.animated.div, {
                        className: O.videoFrame,
                        style: { top: eg.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, r.jsx)(o.animated.div, {
                                style: { width: eb.value },
                                className: O.videoWrapper,
                                children: (0, r.jsx)("div", {
                                    className: x.videoSizer,
                                    style: { aspectRatio: es },
                                    children: ey((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: eu >= L || ec >= U,
                                                          channel: M,
                                                          className: x.focusedVideo,
                                                          videoComponent: V,
                                                          width: L,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: eC,
                                                          inCall: w,
                                                          popoutType: A,
                                                      }),
                                                  },
                                                  i,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            ei
                                ? (0, r.jsx)(o.animated.div, {
                                      className: a()(O.actionRow, { [O.idle]: F }),
                                      style: { bottom: e_.value },
                                      children: (0, r.jsx)(d.Z, {
                                          channelId: M.id,
                                          isParticipantsOpen: D,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(o.animated.div, {
                        className: O.participantsWrapperAnimated,
                        style: {
                            translateY: em.value.to((e) => (e * P) / 2),
                            opacity: em.value,
                            visibility: em.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, r.jsx)(y.ZP, {
                            channel: M,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: Z,
                            participants: ex,
                            participantTileWidth: eO,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutType: A,
                            paused: K || !D,
                        }),
                    }),
                ],
            }),
            ev.length > 0
                ? (0, r.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: L,
                      height: U,
                      channel: M,
                      participants: ev,
                      onSelectParticipant: l,
                  })
                : null,
        ],
    });
}
