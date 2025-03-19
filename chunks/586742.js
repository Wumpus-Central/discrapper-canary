n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(393238),
    p = n(358221),
    h = n(352978),
    f = n(27457),
    m = n(796638),
    g = n(592125),
    O = n(131951),
    v = n(944486),
    y = n(237997),
    E = n(136015),
    b = n(444295),
    j = n(906037),
    x = n(804570),
    I = n(501787),
    S = n(981631),
    C = n(65154),
    N = n(388032),
    Z = n(989424);
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function P(e, t) {
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
let _ = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: l } = e,
            o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
        return (0, a.e7)([O.Z], () => null != n.user && null != l && null != r && O.Z.isLocalVideoDisabled(o, l), [o, n.user, l, r]) ? null : (0, i.jsx)(f.ZP, w({}, e));
    }),
    T = r.memo(function (e) {
        let { context: t = C.Yn.DEFAULT, participants: l, locked: o, channel: a, width: s, height: u, shouldDisplay: d } = e,
            p = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, b.Ws)(S.Odu.VIDEO, {
                        type: b.Qu.CAMERA,
                        value: b.bk.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id
                    }),
                        (0, c.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    P(w({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, b.Ws)(S.Odu.VIDEO, {
                                                type: b.Qu.GO_LIVE,
                                                value: b.bk.ENABLED,
                                                userId: null == l ? void 0 : l.id
                                            });
                                        }
                                    })
                                );
                        });
                },
                [t]
            ),
            f = (0, b.ee)(
                () =>
                    new Set(
                        l.map((e) => {
                            var t;
                            return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                        })
                    ),
                [l]
            );
        r.useEffect(() => {
            d &&
                (0, b.zi)(S.Odu.VIDEO, {
                    locked: y.default.isInstanceLocked(),
                    shownUserIds: Array.from(f),
                    liveUserIds: Array.from(f),
                    contentInventoryIds: []
                });
        }, [f, d]);
        let m = r.useMemo(
            () => ({
                width: s,
                height: u
            }),
            [s, u]
        );
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    _,
                    {
                        participant: e,
                        width: s,
                        className: Z.tile,
                        containerStyle: m,
                        fit: h.L.COVER,
                        channel: a,
                        inPopout: !0,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: o ? void 0 : p,
                        forceIdle: o,
                        paused: !d,
                        inOverlayPopout: !0,
                        context: t
                    },
                    e.id
                )
            )
        });
    }),
    D = r.memo(function (e) {
        let { context: t = C.Yn.DEFAULT, participants: n, participantsVersion: l, locked: a, widget: c, channel: u, width: d, height: p, showEmpty: h = !0, containerRef: f } = e,
            m = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal,
            g = n.length > 0 && null != t && null != u && (!a || c.pinned);
        r.useEffect(() => {
            (0, j.m3)(
                {
                    locked: a,
                    pinned: c.pinned,
                    widget: c.type,
                    isPreviewingInGame: !1
                },
                g
            );
        }, [a, c, g]);
        let O = r.useMemo(() => ({ opacity: c.opacity }), [c.opacity]),
            v = r.useMemo(
                () =>
                    o()({
                        [Z.videoList]: !0,
                        [Z.vertical]: !m,
                        [Z.hidden]: !g && a
                    }),
                [m, g, a]
            );
        return 0 !== n.length || a
            ? null == u
                ? null
                : (0, i.jsx)('div', {
                      ref: f,
                      className: v,
                      style: O,
                      children: (0, i.jsx)(T, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: u,
                          width: d,
                          height: p,
                          shouldDisplay: g,
                          participantsVersion: l
                      })
                  })
            : h
              ? (0, i.jsx)('div', {
                    ref: f,
                    children: (0, i.jsx)(x.E, {
                        emptyText: N.NW.string(N.t['aTiM4+']),
                        icon: s.Odl,
                        absolute: !0
                    })
                })
              : null;
    });
function k(e) {
    let t = (0, a.e7)([v.Z, g.Z], () => g.Z.getChannel(v.Z.getVoiceChannelId())),
        n = null == t ? void 0 : t.id,
        [l, o] = (0, a.e7)([p.Z], () => (null == n ? [[], 0] : [p.Z.getVideoParticipants(n), p.Z.getParticipantsVersion(n)]), [n], E.Q),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: c, height: h, ref: f } = (0, d.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: O, visibleParticipants: y } = (0, m.ZB)(s ? (null != c ? c : e.width) : null != h ? h : e.height, l, {
            tileWidth: I.vZ,
            tileMinWidth: I.mo,
            tileMargin: I.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        b = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        j = r.useRef(b);
    return (
        r.useLayoutEffect(() => void (j.current = b)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = j.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [s]),
        (0, i.jsx)(
            D,
            P(w({}, e), {
                channel: t,
                participants: y,
                participantsVersion: o,
                width: s ? O : null != c ? c : e.width,
                height: s ? (null != h ? h : e.height) : O,
                containerRef: f
            })
        )
    );
}
