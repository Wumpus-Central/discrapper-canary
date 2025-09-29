n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(488290),
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
    _ = n(981631),
    v = n(354459),
    x = n(450906),
    O = n(74246);
function j(e) {
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
            popoutWindow: A,
            inCall: w,
            channel: M,
            selectedParticipant: R,
            showParticipants: k = !0,
            className: L,
            width: D,
            height: U,
            layout: B,
            idle: F,
        } = e,
        H = null != A,
        V = h.Z.getVideoComponent(),
        G = p.default.getId(),
        [z, W] = i.useState(null),
        q = (0, c.Z)(z),
        [Y, K] = i.useState(!0),
        [X, J] = i.useState(!1),
        Q = R.type === v.fO.ACTIVITY,
        $ = (0, u.Z)(Q ? R.applicationId : void 0),
        ee = !Q && null != R.streamId,
        et = U <= 2 * P + 144,
        en = k && !et,
        er = (0, c.Z)(en),
        ei = B === _.AEg.MINIMUM || B === _.AEg.NORMAL,
        el = !et && (!ei || Q),
        ea = (0, m.Z)(el, 100),
        eo = (null != (t = (0, c.Z)(R.id)) ? t : R.id) !== R.id,
        es = 0;
    (Q || en) && (es += 72), Q && !en && (el ? (es += 48) : (es += 8)), en && (es += 0.5 * P + 8);
    let ec = i.useMemo(
            () => (Q && $ ? D / (U - 2 * es) : ee && null != z && z.width > 0 && z.height > 0 ? z.width / z.height : S),
            [ee, z, Q, D, U, es, $],
        ),
        eu = U - 2 * es,
        ed = Q && $ ? D : eu * ec,
        ep = Math.floor(Math.min(D, ed) / ec),
        eh = U > D / ec + 72 + P + 8;
    (n = en || Q ? (en ? -16 : -8) : 40 + Math.max(0, 72 - (U - ep) / 2)),
        i.useEffect(() => {
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
        ey = (0, s.q_F)(
            {
                value: ed,
                config: E(j({}, o.config.stiff), { clamp: !0 }),
            },
            (er === en && eb.value.idle && !ea) || eo || ef ? "animate-never" : "animate-always",
        ),
        eC = (0, s.q_F)(
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
        ev = i.useCallback((e) => {
            W(e), K(!1);
        }, []),
        ex = en ? [] : (0, y.n3)(T, R, G),
        { visibleParticipants: eO, participantTileWidth: ej } = (0, C.ZB)(D, N);
    return (0, r.jsxs)("div", {
        className: a()(O.root, x.flexCenter, L),
        children: [
            (0, r.jsxs)("div", {
                className: O.tileWrapper,
                style: { opacity: ee && Y ? 0 : 1 },
                children: [
                    (0, r.jsxs)(o.animated.div, {
                        className: O.videoFrame,
                        style: { top: eb.value.to((e) => (-e * P) / 2) },
                        children: [
                            (0, r.jsx)(o.animated.div, {
                                style: { width: ey.value },
                                className: O.videoWrapper,
                                children: (0, r.jsx)("div", {
                                    className: x.videoSizer,
                                    style: { aspectRatio: ec },
                                    children: e_((e, t, n) => {
                                        let { key: i } = n;
                                        return null != t
                                            ? (0, r.jsx)(
                                                  o.animated.div,
                                                  {
                                                      className: x.videoWrapperAnimated,
                                                      style: e,
                                                      children: (0, r.jsx)(g.ZP, {
                                                          focused: !0,
                                                          noBorder: ed >= D || eu >= U,
                                                          channel: M,
                                                          className: x.focusedVideo,
                                                          videoComponent: V,
                                                          width: D,
                                                          participant: t,
                                                          onClick: l,
                                                          onDoubleClick: Z,
                                                          onContextMenu: I,
                                                          onVideoResize: ev,
                                                          inCall: w,
                                                          inPopout: H,
                                                      }),
                                                  },
                                                  i,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                            el
                                ? (0, r.jsx)(o.animated.div, {
                                      className: a()(O.actionRow, { [O.idle]: F }),
                                      style: { bottom: eC.value },
                                      children: (0, r.jsx)(d.Z, {
                                          channelId: M.id,
                                          isParticipantsOpen: k,
                                          isVertical: !0,
                                      }),
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(o.animated.div, {
                        className: O.participantsWrapperAnimated,
                        style: {
                            translateY: eg.value.to((e) => (e * P) / 2),
                            opacity: eg.value,
                            visibility: eg.value.to((e) => (0 === e ? "hidden" : "visible")),
                        },
                        children: (0, r.jsx)(C.ZP, {
                            channel: M,
                            onClick: l,
                            onContextMenu: I,
                            onDoubleClick: Z,
                            participants: eO,
                            participantTileWidth: ej,
                            selectedParticipantId: R.id,
                            inCall: w,
                            popoutWindow: A,
                            paused: X || !k,
                        }),
                    }),
                ],
            }),
            ex.length > 0
                ? (0, r.jsx)(b.Z, {
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
