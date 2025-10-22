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
            popoutWindow: A,
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
        V = null != A,
        F = h.Z.getVideoComponent(),
        G = p.default.getId(),
        [z, W] = r.useState(null),
        q = (0, c.Z)(z),
        [Y, K] = r.useState(!0),
        [X, J] = r.useState(!1),
        Q = R.type === v.fO.ACTIVITY,
        $ = (0, u.Z)(Q ? R.applicationId : void 0),
        ee = !Q && null != R.streamId,
        et = U <= 2 * P + 144,
        en = L && !et,
        ei = (0, c.Z)(en),
        er = B === _.AEg.MINIMUM || B === _.AEg.NORMAL,
        el = !et && (!er || Q),
        ea = (0, m.Z)(el, 100),
        eo = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        es = 0;
    (Q || en) && (es += 72), Q && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * P + 8);
    let ec = r.useMemo(
            () => (Q && $ ? k / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : S),
            [ee, z, Q, k, U, es, $],
        ),
        eu = U - 2 * es,
        ed = Q && $ ? k : eu * ec,
        ep = Math.floor(Math.min(k, ed) / ec),
        eh = U > k / ec + 72 + P + 8;
    (n = en || Q ? (en ? -16 : -8) : 40 + Math.max(0, 72 - (U - ep) / 2)),
        r.useEffect(() => {
            let e = setTimeout(() => {
                K(!1);
            }, 250);
            return () => {
                clearTimeout(e);
            };
        }, []);
    let ef = Y || null == q,
        em = ef ? "animate-never" : "animate-always",
        eg = (0, s.q_F)(
            {
                value: +!!en,
                delay: eh || !en ? 0 : 100,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
                onStart: () => J(!0),
                onChange: () => f.S.dispatch(_.CkL.REMEASURE_TARGET),
                onRest: () => {
                    J(!1), f.S.dispatch(_.CkL.REMEASURE_TARGET);
                },
            },
            em,
        ),
        eb = (0, s.q_F)(
            {
                value: +!!en,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        eC = (0, s.q_F)(
            {
                value: ed,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            (ei === en && eb.value.idle && !ea) || eo || ef ? "animate-never" : "animate-always",
        ),
        ey = (0, s.q_F)(
            {
                value: n,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            em,
        ),
        e_ = (0, s.Yzy)(
            R,
            {
                keys: (e) => (null == e ? void 0 : e.id),
                config: E(j({}, o.config.stiff), { clamp: !0 }),
                initial: null,
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
            },
            em,
        ),
        ev = r.useCallback((e) => {
            W(e), K(!1);
        }, []),
        ex = en ? [] : (0, C.n3)(T, R, G),
        { visibleParticipants: eO, participantTileWidth: ej } = (0, y.ZB)(k, N);
    return (0, i.jsxs)("div", {
        className: a()(O.root, x.flexCenter, D),
        children: [
            (0, i.jsxs)("div", {
                className: O.tileWrapper,
                style: { opacity: ee && Y ? 0 : 1 },
                children: [
                    (0, i.jsxs)(o.animated.div, {
                        className: O.videoFrame,
                        style: { top: eb.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, i.jsx)(o.animated.div, {
                                style: { width: eC.value },
                                className: O.videoWrapper,
                                children: (0, i.jsx)("div", {
                                    className: x.videoSizer,
                                    style: { aspectRatio: ec },
                                    children: e_((e, t, n) => {
                                        let { key: r } = n;
                                        return null != t
                                            ? (0, i.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, i.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ed >= k || eu >= U,
                                                          channel: M,
                                                          className: x.focusedVideo,
                                                          videoComponent: F,
                                                          width: k,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: ev,
                                                          inCall: w,
                                                          inPopout: V,
                                                      }),
                                                  },
                                                  r,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            el
                                ? (0, i.jsx)(o.animated.div, {
                                      className: a()(O.actionRow, { [O.idle]: H }),
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
                        className: O.participantsWrapperAnimated,
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
                            participants: eO,
                            participantTileWidth: ej,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutWindow: A,
                            paused: X || !L,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, i.jsx)(b.Z, {
                      onContextMenuParticipant: I,
                      width: k,
                      height: U,
                      channel: M,
                      participants: ex,
                      onSelectParticipant: l,
                  })
                : null,
        ],
    });
}
