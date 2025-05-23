n.d(t, {
    R: () => M,
    Z: () => z
}),
    n(388685);
var i = n(255367),
    r = n(73800),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(393238),
    p = n(358221),
    h = n(352978),
    f = n(522474),
    m = n(27457),
    g = n(796638),
    y = n(592125),
    O = n(131951),
    v = n(944486),
    b = n(237997),
    E = n(136015),
    _ = n(444295),
    x = n(906037),
    S = n(353038),
    I = n(804570),
    j = n(461393),
    C = n(340101),
    N = n(501787),
    w = n(981631),
    Z = n(65154),
    P = n(388032),
    T = n(884751);
function k(e) {
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
function D(e, t) {
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
let A = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: o } = e,
            l = null == (t = n.user) ? void 0 : t.id;
        return (0, a.e7)([O.Z], () => null != n.user && null != o && null != r && O.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(m.ZP, k({}, e));
    }),
    R = r.memo(function (e) {
        let { context: t = Z.Yn.DEFAULT, participants: o, locked: l, channel: a, width: s, height: u, shouldDisplay: d } = e,
            p = r.useCallback(
                (e, r) => {
                    let o = e.user;
                    (0, _.Ws)(w.Odu.VIDEO, {
                        type: _.Qu.CAMERA,
                        value: _.bk.SETTINGS_OPENED,
                        userId: null == o ? void 0 : o.id
                    }),
                        (0, c.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    D(k({}, n), {
                                        user: o,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, _.Ws)(w.Odu.VIDEO, {
                                                type: _.Qu.GO_LIVE,
                                                value: _.bk.ENABLED,
                                                userId: null == o ? void 0 : o.id
                                            });
                                        }
                                    })
                                );
                        });
                },
                [t]
            ),
            f = (0, _.ee)(
                () =>
                    new Set(
                        o.map((e) => {
                            var t;
                            return null == (t = e.user) ? void 0 : t.id;
                        })
                    ),
                [o]
            );
        r.useEffect(() => {
            d &&
                (0, _.zi)(w.Odu.VIDEO, {
                    locked: b.default.isInstanceLocked(),
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
            children: o.map((e) =>
                (0, i.jsx)(
                    A,
                    {
                        participant: e,
                        width: s,
                        className: T.tile,
                        containerStyle: m,
                        fit: h.L.COVER,
                        channel: a,
                        inPopout: !0,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: l ? void 0 : p,
                        forceIdle: l,
                        paused: !d,
                        inOverlayPopout: !0,
                        context: t
                    },
                    e.id
                )
            )
        });
    }),
    L = r.memo(function (e) {
        let { context: t = Z.Yn.DEFAULT, participants: n, participantsVersion: o, locked: a, widget: c, channel: u, width: d, height: p, showEmpty: h = !0, containerRef: f } = e,
            m = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal,
            g = n.length > 0 && null != t && null != u && (!a || c.pinned);
        r.useEffect(() => {
            (0, x.m3)(
                {
                    locked: a,
                    pinned: c.pinned,
                    widget: c.type,
                    isPreviewingInGame: !1
                },
                g
            );
        }, [a, c, g]);
        let y = r.useMemo(() => ({ opacity: c.opacity }), [c.opacity]),
            O = r.useMemo(
                () =>
                    l()({
                        [T.videoList]: !0,
                        [T.vertical]: !m,
                        [T.hidden]: !g && a
                    }),
                [m, g, a]
            );
        return 0 !== n.length || a
            ? null == u
                ? null
                : (0, i.jsx)('div', {
                      ref: f,
                      className: O,
                      style: y,
                      children: (0, i.jsx)(R, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: u,
                          width: d,
                          height: p,
                          shouldDisplay: g,
                          participantsVersion: o
                      })
                  })
            : h
              ? (0, i.jsx)('div', {
                    ref: f,
                    children: (0, i.jsx)(I.E, {
                        emptyText: P.intl.string(P.t['aTiM4+']),
                        icon: s.Odl,
                        absolute: !0
                    })
                })
              : null;
    }),
    M = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: o } = e;
        if (!(0, C.js)(t)) return n;
        let l = 'boolean' != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r,
            s = l
                ? {
                      width: Math.max(n.width, N.vZ),
                      height: Math.min(n.height, 2 * N.mo + a)
                  }
                : {
                      height: Math.max(n.height, N.vZ),
                      width: Math.min(n.width, 2 * N.mo + a)
                  },
            c = {
                maxWidth: 0.75 * o.maxX,
                maxHeight: 0.75 * o.maxY
            };
        return (0, j.h)(s, c);
    };
function z(e) {
    var t, n, o, l;
    let s = (0, a.e7)([v.Z, y.Z], () => y.Z.getChannel(v.Z.getVoiceChannelId())),
        c = 2 * e.padding + 2 * e.borderWidth,
        h = null == s ? void 0 : s.id,
        [m, O] = (0, a.e7)([p.Z], () => (null == h ? [[], 0] : [p.Z.getVideoParticipants(h), p.Z.getParticipantsVersion(h)]), [h], E.Q),
        b = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: _ = e.width - c, height: x = e.height - c, ref: I } = (0, d.ZP)(e.locked, e.widget.pinned),
        { participantTileWidth: j, visibleParticipants: C } = (0, g.ZB)(b ? _ : x, m, {
            tileWidth: N.vZ,
            tileMinWidth: N.mo,
            tileMargin: N.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: O
        }),
        w = (0, a.e7)([f.Z], () => f.Z.getWindowState(N.$J)),
        Z = {
            id: e.widget.id,
            containerSize: {
                containerHeight: x,
                containerWidth: _
            },
            sizeOffset: c,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: null != (t = null == w ? void 0 : w.width) ? t : e.width - c,
                maxY: null != (n = null == w ? void 0 : w.height) ? n : e.height - c,
                minX: 0,
                minY: 0
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (o = null == w ? void 0 : w.height) ? o : e.height,
                right: null != (l = null == w ? void 0 : w.width) ? l : e.width
            }
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                o = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i
                },
                l = r.useRef(o);
            r.useLayoutEffect(() => void (l.current = o)),
                r.useLayoutEffect(() => {
                    let { size: e, id: n, containerWidth: i, containerHeight: r, widget: o, widgetLayoutSpecs: a } = l.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: s, height: c } = M(
                        D(k({}, a), {
                            widget: o,
                            operation: S.B.RESIZE_NORTH,
                            computedSize: {
                                width: r,
                                height: i
                            },
                            originSize: {
                                width: r,
                                height: i
                            }
                        })
                    );
                    (0, u.nv)({
                        widgetId: n,
                        size: {
                            fixed: !0,
                            width: s,
                            height: c
                        }
                    });
                }, [t]);
        })({
            horizontal: b,
            widget: e.widget,
            widgetLayoutSpecs: Z
        }),
        (0, i.jsx)(
            L,
            D(k({}, e), {
                channel: s,
                participants: C,
                participantsVersion: O,
                width: b ? j : null != _ ? _ : e.width,
                height: b ? (null != x ? x : e.height) : j,
                containerRef: I
            })
        )
    );
}
