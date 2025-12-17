n.d(t, { Z: () => I }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(236726),
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
    C = n(312703),
    y = n(796638),
    v = n(981631),
    x = n(354459),
    O = n(676465),
    E = n(112370);
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
function S(e, t) {
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
let _ = 16 / 9,
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
            layout: V,
            idle: F,
        } = e,
        H = f.Z.getVideoComponent(),
        B = p.default.getId(),
        [G, z] = r.useState(null),
        W = (0, c.Z)(G),
        [q, K] = r.useState(!0),
        [Y, X] = r.useState(!1),
        J = R.type === x.fO.ACTIVITY,
        Q = (0, u.Z)(J ? R.applicationId : void 0),
        $ = !J && null != R.streamId,
        ee = U <= 2 * P + 144,
        et = L && !ee,
        en = (0, c.Z)(et),
        ei = V === v.AEg.MINIMUM || V === v.AEg.NORMAL,
        er = !ee && (!ei || J),
        el = (0, m.Z)(er, 100),
        ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        eo = 0;
    (J || et) && (eo += 72), J && !et && (er ? (eo += 48) : (eo += 8)), et && (eo += 0.5 * P + 8);
    let es = r.useMemo(
            () => (J && Q ? k / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : _),
            [$, G, J, k, U, eo, Q],
        ),
        ec = U - 2 * eo,
        eu = J && Q ? k : ec * es,
        ed = Math.floor(Math.min(k, eu) / es),
        ep = U > k / es + 72 + P + 8;
    n = et || J ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2);
    let ef = 8 + Math.max(0, 72 - (U - ed) / 2);
    r.useEffect(() => {
        let e = setTimeout(() => {
            K(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let eh = q || null == W,
        em = eh ? "animate-never" : "animate-always",
        eg = (0, s.q_F)(
            {
                value: +!!et,
                delay: ep || !et ? 0 : 100,
                config: S(j({}, o.config.stiff), { clamp: !0 }),
                onStart: () => X(!0),
                onChange: () => h.S.dispatch(v.CkL.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), h.S.dispatch(v.CkL.REMEASURE_TARGET);
                },
            },
            em,
        ),
        eb = (0, s.q_F)(
            {
                value: +!!et,
                config: S(j({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        eC = (0, s.q_F)(
            {
                value: eu,
                config: S(j({}, o.config.stiff), { clamp: !0 }),
            },
            (en === et && eb.value.idle && !el) || ea || eh ? "animate-never" : "animate-always",
        ),
        ey = (0, s.q_F)(
            {
                value: n,
                config: S(j({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        ev = (0, s.Yzy)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: S(j({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            em,
        ),
        ex = r.useCallback((e) => {
            z(e), K(!1);
        }, []),
        eO = et ? [] : (0, C.n3)(T, R, B),
        { visibleParticipants: eE, participantTileWidth: ej } = (0, y.ZB)(k, N);
    return (0, i.jsxs)("div", {
        className: a()(E.root, O.flexCenter, D),
        children: [
            (0, i.jsxs)("div", {
                className: E.tileWrapper,
                style: { opacity: $ && q ? 0 : 1 },
                children: [
                    (0, i.jsxs)(o.animated.div, {
                        className: E.videoFrame,
                        style: { top: eb.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, i.jsx)(o.animated.div, {
                                style: { width: eC.value },
                                className: E.videoWrapper,
                                children: (0, i.jsx)("div", {
                                    className: O.videoSizer,
                                    style: { aspectRatio: es },
                                    children: ev((e, t, n) => {
                                        let { key: r } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: O.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: eu >= k || ec >= U,
                                                          channel: M,
                                                          className: O.focusedVideo,
                                                          videoComponent: H,
                                                          width: k,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: ex,
                                                          inCall: w,
                                                          popoutType: A,
                                                          controlsBottom: ef,
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
                                      className: a()(E.actionRow, { [E.idle]: F }),
                                      style: { bottom: ey.value },
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
                        className: E.participantsWrapperAnimated,
                        style: {
                            translateY: eg.value.to((e) => (e * P) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(y.ZP, {
                            channel: M,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: Z,
                            participants: eE,
                            participantTileWidth: ej,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutType: A,
                            paused: Y || !L,
                        }),
                    }),
                ],
            }),
            eO.length > 0
                ? (0, i.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: k,
                      height: U,
                      channel: M,
                      participants: eO,
                      onSelectParticipant: l,
                  })
                : null,
        ],
    });
}
