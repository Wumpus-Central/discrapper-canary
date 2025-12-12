n.d(t, {
    R: () => z,
    Z: () => V,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(393238),
    f = n(358221),
    h = n(598006),
    p = n(352978),
    m = n(522474),
    g = n(27457),
    b = n(796638),
    y = n(592125),
    O = n(131951),
    v = n(944486),
    E = n(237997),
    S = n(136015),
    x = n(444295),
    I = n(906037),
    C = n(353038),
    j = n(804570),
    _ = n(461393),
    Z = n(340101),
    N = n(501787),
    w = n(981631),
    T = n(65154),
    P = n(388032),
    A = n(926927);
function k(e) {
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
let R = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: l } = e,
            a = null == (t = n.user) ? void 0 : t.id;
        return (0, o.e7)([O.Z], () => null != n.user && null != l && null != r && O.Z.isLocalVideoDisabled(a, l), [
            a,
            n.user,
            l,
            r,
        ])
            ? null
            : (0, i.jsx)(g.ZP, k({}, e));
    }),
    L = r.memo(function (e) {
        let {
                context: t = T.Yn.DEFAULT,
                participants: l,
                locked: a,
                channel: o,
                width: s,
                height: u,
                shouldDisplay: d,
            } = e,
            f = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, x.Ws)(w.Odu.VIDEO, {
                        type: x.Qu.CAMERA,
                        value: x.bk.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id,
                    }),
                        (0, c.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    D(k({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, x.Ws)(w.Odu.VIDEO, {
                                                type: x.Qu.GO_LIVE,
                                                value: x.bk.ENABLED,
                                                userId: null == l ? void 0 : l.id,
                                            });
                                        },
                                    }),
                                );
                        });
                },
                [t],
            ),
            m = (0, x.ee)(
                () =>
                    new Set(
                        l.map((e) => {
                            var t;
                            return null == (t = e.user) ? void 0 : t.id;
                        }),
                    ),
                [l],
            );
        r.useEffect(() => {
            d &&
                (0, x.zi)(w.Odu.VIDEO, {
                    locked: E.default.isInstanceLocked(),
                    shownUserIds: Array.from(m),
                    liveUserIds: Array.from(m),
                    contentInventoryIds: [],
                });
        }, [m, d]);
        let g = r.useMemo(
            () => ({
                width: s,
                height: u,
            }),
            [s, u],
        );
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    R,
                    {
                        participant: e,
                        width: s,
                        className: A.tile,
                        containerStyle: g,
                        fit: p.L.COVER,
                        channel: o,
                        popoutType: h.P.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: a ? void 0 : f,
                        forceIdle: a,
                        paused: !d,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    M = r.memo(function (e) {
        let {
                context: t = T.Yn.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: o,
                widget: c,
                channel: u,
                width: d,
                height: f,
                showEmpty: h = !0,
                containerRef: p,
            } = e,
            m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal,
            g = n.length > 0 && null != t && null != u && (!o || c.pinned);
        r.useEffect(() => {
            (0, I.m3)(
                {
                    locked: o,
                    pinned: c.pinned,
                    widget: c.type,
                    isPreviewingInGame: !1,
                },
                g,
            );
        }, [o, c, g]);
        let b = r.useMemo(() => ({ opacity: c.opacity }), [c.opacity]),
            y = r.useMemo(
                () =>
                    a()({
                        [A.videoList]: !0,
                        [A.vertical]: !m,
                        [A.hidden]: !g && o,
                    }),
                [m, g, o],
            );
        return 0 !== n.length || o
            ? null == u
                ? null
                : (0, i.jsx)("div", {
                      ref: p,
                      className: y,
                      style: b,
                      children: (0, i.jsx)(L, {
                          context: t,
                          participants: n,
                          locked: o,
                          channel: u,
                          width: d,
                          height: f,
                          shouldDisplay: g,
                          participantsVersion: l,
                      }),
                  })
            : h
              ? (0, i.jsx)("div", {
                    ref: p,
                    children: (0, i.jsx)(j.E, {
                        emptyText: P.intl.string(P.t.aTiM42),
                        icon: s.Odl,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    z = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, Z.js)(t)) return n;
        let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            o = 2 * i + 2 * r,
            s = a
                ? {
                      width: Math.max(n.width, N.vZ),
                      height: Math.min(n.height, 2 * N.mo + o),
                  }
                : {
                      height: Math.max(n.height, N.vZ),
                      width: Math.min(n.width, 2 * N.mo + o),
                  },
            c = {
                maxWidth: 0.75 * l.maxX,
                maxHeight: 0.75 * l.maxY,
            };
        return (0, _.hJ)(s, c);
    };
function V(e) {
    var t, n, l, a;
    let s = (0, o.e7)([v.Z, y.Z], () => y.Z.getChannel(v.Z.getVoiceChannelId())),
        c = 2 * e.padding + 2 * e.borderWidth,
        h = null == s ? void 0 : s.id,
        [p, g] = (0, o.e7)(
            [f.Z],
            () => (null == h ? [[], 0] : [f.Z.getVideoParticipants(h), f.Z.getParticipantsVersion(h)]),
            [h],
            S.Q,
        ),
        O = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: E = e.width - c, height: x = e.height - c, ref: I } = (0, d.ZP)(e.locked, e.widget.pinned),
        { participantTileWidth: j, visibleParticipants: _ } = (0, b.ZB)(O ? E : x, p, {
            tileWidth: N.vZ,
            tileMinWidth: N.mo,
            tileMargin: N.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: g,
        }),
        Z = (0, o.e7)([m.Z], () => m.Z.getWindowState(N.$J)),
        w = {
            id: e.widget.id,
            containerSize: {
                containerHeight: x,
                containerWidth: E,
            },
            sizeOffset: c,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: null != (t = null == Z ? void 0 : Z.width) ? t : e.width - c,
                maxY: null != (n = null == Z ? void 0 : Z.height) ? n : e.height - c,
                minX: 0,
                minY: 0,
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (l = null == Z ? void 0 : Z.height) ? l : e.height,
                right: null != (a = null == Z ? void 0 : Z.width) ? a : e.width,
            },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                l = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                a = r.useRef(l);
            r.useLayoutEffect(() => void (a.current = l)),
                r.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: l,
                        widgetLayoutSpecs: o,
                    } = a.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: s, height: c } = z(
                        D(k({}, o), {
                            widget: l,
                            operation: C.B.RESIZE_NORTH,
                            computedSize: {
                                width: r,
                                height: i,
                            },
                            originSize: {
                                width: r,
                                height: i,
                            },
                        }),
                    );
                    (0, u.nv)({
                        widgetId: n,
                        size: {
                            fixed: !0,
                            width: s,
                            height: c,
                        },
                    });
                }, [t]);
        })({
            horizontal: O,
            widget: e.widget,
            widgetLayoutSpecs: w,
        }),
        (0, i.jsx)(
            M,
            D(k({}, e), {
                channel: s,
                participants: _,
                participantsVersion: g,
                width: O ? j : null != E ? E : e.width,
                height: O ? (null != x ? x : e.height) : j,
                containerRef: I,
            }),
        )
    );
}
