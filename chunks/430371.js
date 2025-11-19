n.d(t, { Z: () => I }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(790519),
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
    y = n(312703),
    C = n(796638),
    v = n(981631),
    _ = n(354459),
    x = n(394024),
    j = n(597843);
function O(e) {
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
    P = 8 + C.cF;
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
            className: k,
            width: D,
            height: U,
            layout: B,
            idle: H,
        } = e,
        F = h.Z.getVideoComponent(),
        V = p.default.getId(),
        [G, z] = r.useState(null),
        W = (0, c.Z)(G),
        [q, K] = r.useState(!0),
        [Y, X] = r.useState(!1),
        J = R.type === _.fO.ACTIVITY,
        Q = (0, u.Z)(J ? R.applicationId : void 0),
        $ = !J && null != R.streamId,
        ee = U <= 2 * P + 144,
        et = L && !ee,
        en = (0, c.Z)(et),
        ei = B === v.AEg.MINIMUM || B === v.AEg.NORMAL,
        er = !ee && (!ei || J),
        el = (0, m.Z)(er, 100),
        ea = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        eo = 0;
    (J || et) && (eo += 72), J && !et && (er ? (eo += 48) : (eo += 8)), et && (eo += 0.5 * P + 8);
    let es = r.useMemo(
            () => (J && Q ? D / (U - 2 * eo) : $ && null != G && G.width > 0 && G.height > 0 ? G.width / G.height : S),
            [$, G, J, D, U, eo, Q],
        ),
        ec = U - 2 * eo,
        eu = J && Q ? D : ec * es,
        ed = Math.floor(Math.min(D, eu) / es),
        ep = U > D / es + 72 + P + 8;
    n = et || J ? (et ? -16 : -8) : 40 + Math.max(0, 72 - (U - ed) / 2);
    let eh = 8 + Math.max(0, 72 - (U - ed) / 2);
    r.useEffect(() => {
        let e = setTimeout(() => {
            K(!1);
        }, 250);
        return () => {
            clearTimeout(e);
        };
    }, []);
    let ef = q || null == W,
        em = ef ? "animate-never" : "animate-always",
        eg = (0, s.q_F)(
            {
                value: +!!et,
                delay: ep || !et ? 0 : 100,
                config: E(O({}, o.config.stiff), { clamp: !0 }),
                onStart: () => X(!0),
                onChange: () => f.S.dispatch(v.CkL.REMEASURE_TARGET),
                onRest: () => {
                    X(!1), f.S.dispatch(v.CkL.REMEASURE_TARGET);
                },
            },
            em,
        ),
        eb = (0, s.q_F)(
            {
                value: +!!et,
                config: E(O({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        ey = (0, s.q_F)(
            {
                value: eu,
                config: E(O({}, o.config.stiff), { clamp: !0 }),
            },
            (en === et && eb.value.idle && !el) || ea || ef ? "animate-never" : "animate-always",
        ),
        eC = (0, s.q_F)(
            {
                value: n,
                config: E(O({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        ev = (0, s.Yzy)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(O({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            em,
        ),
        e_ = r.useCallback((e) => {
            z(e), K(!1);
        }, []),
        ex = et ? [] : (0, y.n3)(T, R, V),
        { visibleParticipants: ej, participantTileWidth: eO } = (0, C.ZB)(D, N);
    return (0, i.jsxs)("div", {
        className: a()(j.root, x.flexCenter, k),
        children: [
            (0, i.jsxs)("div", {
                className: j.tileWrapper,
                style: { opacity: $ && q ? 0 : 1 },
                children: [
                    (0, i.jsxs)(o.animated.div, {
                        className: j.videoFrame,
                        style: { top: eb.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, i.jsx)(o.animated.div, {
                                style: { width: ey.value },
                                className: j.videoWrapper,
                                children: (0, i.jsx)("div", {
                                    className: x.videoSizer,
                                    style: { aspectRatio: es },
                                    children: ev((e, t, n) => {
                                        let { key: r } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: eu >= D || ec >= U,
                                                          channel: M,
                                                          className: x.focusedVideo,
                                                          videoComponent: F,
                                                          width: D,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: e_,
                                                          inCall: w,
                                                          popoutType: A,
                                                          controlsBottom: eh,
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
                                      className: a()(j.actionRow, { [j.idle]: H }),
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
                        className: j.participantsWrapperAnimated,
                        style: {
                            translateY: eg.value.to((e) => (e * P) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, i.jsx)(C.ZP, {
                            channel: M,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: Z,
                            participants: ej,
                            participantTileWidth: eO,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutType: A,
                            paused: Y || !L,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, i.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: D,
                      height: U,
                      channel: M,
                      participants: ex,
                      onSelectParticipant: l,
                  })
                : null,
        ],
    });
}
