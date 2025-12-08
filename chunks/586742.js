n.d(t, {
    R: () => V,
    Z: () => z,
}),
    n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(239091),
    c = n(765250),
    d = n(393238),
    h = n(358221),
    p = n(598006),
    f = n(352978),
    m = n(522474),
    g = n(27457),
    O = n(796638),
    y = n(592125),
    E = n(131951),
    v = n(944486),
    b = n(237997),
    S = n(136015),
    x = n(444295),
    j = n(906037),
    I = n(353038),
    C = n(804570),
    Z = n(461393),
    N = n(340101),
    w = n(501787),
    T = n(981631),
    _ = n(65154),
    P = n(388032),
    A = n(59122);
function D(e) {
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
function R(e, t) {
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
let k = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: l } = e,
            o = null == (t = n.user) ? void 0 : t.id;
        return (0, a.e7)([E.Z], () => null != n.user && null != l && null != r && E.Z.isLocalVideoDisabled(o, l), [
            o,
            n.user,
            l,
            r,
        ])
            ? null
            : (0, i.jsx)(g.ZP, D({}, e));
    }),
    L = r.memo(function (e) {
        let {
                context: t = _.Yn.DEFAULT,
                participants: l,
                locked: o,
                channel: a,
                width: s,
                height: c,
                shouldDisplay: d,
            } = e,
            h = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, x.Ws)(T.Odu.VIDEO, {
                        type: x.Qu.CAMERA,
                        value: x.bk.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id,
                    }),
                        (0, u.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    R(D({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, x.Ws)(T.Odu.VIDEO, {
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
                (0, x.zi)(T.Odu.VIDEO, {
                    locked: b.default.isInstanceLocked(),
                    shownUserIds: Array.from(m),
                    liveUserIds: Array.from(m),
                    contentInventoryIds: [],
                });
        }, [m, d]);
        let g = r.useMemo(
            () => ({
                width: s,
                height: c,
            }),
            [s, c],
        );
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    k,
                    {
                        participant: e,
                        width: s,
                        className: A.tile,
                        containerStyle: g,
                        fit: f.L.COVER,
                        channel: a,
                        popoutType: p.P.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: o ? void 0 : h,
                        forceIdle: o,
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
                context: t = _.Yn.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: a,
                widget: u,
                channel: c,
                width: d,
                height: h,
                showEmpty: p = !0,
                containerRef: f,
            } = e,
            m = "boolean" != typeof u.meta.horizontal || u.meta.horizontal,
            g = n.length > 0 && null != t && null != c && (!a || u.pinned);
        r.useEffect(() => {
            (0, j.m3)(
                {
                    locked: a,
                    pinned: u.pinned,
                    widget: u.type,
                    isPreviewingInGame: !1,
                },
                g,
            );
        }, [a, u, g]);
        let O = r.useMemo(() => ({ opacity: u.opacity }), [u.opacity]),
            y = r.useMemo(
                () =>
                    o()({
                        [A.videoList]: !0,
                        [A.vertical]: !m,
                        [A.hidden]: !g && a,
                    }),
                [m, g, a],
            );
        return 0 !== n.length || a
            ? null == c
                ? null
                : (0, i.jsx)("div", {
                      ref: f,
                      className: y,
                      style: O,
                      children: (0, i.jsx)(L, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: c,
                          width: d,
                          height: h,
                          shouldDisplay: g,
                          participantsVersion: l,
                      }),
                  })
            : p
              ? (0, i.jsx)("div", {
                    ref: f,
                    children: (0, i.jsx)(C.E, {
                        emptyText: P.intl.string(P.t.aTiM42),
                        icon: s.Odl,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    V = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, N.js)(t)) return n;
        let o = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * r,
            s = o
                ? {
                      width: Math.max(n.width, w.vZ),
                      height: Math.min(n.height, 2 * w.mo + a),
                  }
                : {
                      height: Math.max(n.height, w.vZ),
                      width: Math.min(n.width, 2 * w.mo + a),
                  },
            u = {
                maxWidth: 0.75 * l.maxX,
                maxHeight: 0.75 * l.maxY,
            };
        return (0, Z.hJ)(s, u);
    };
function z(e) {
    var t, n, l, o;
    let s = (0, a.e7)([v.Z, y.Z], () => y.Z.getChannel(v.Z.getVoiceChannelId())),
        u = 2 * e.padding + 2 * e.borderWidth,
        p = null == s ? void 0 : s.id,
        [f, g] = (0, a.e7)(
            [h.Z],
            () => (null == p ? [[], 0] : [h.Z.getVideoParticipants(p), h.Z.getParticipantsVersion(p)]),
            [p],
            S.Q,
        ),
        E = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: b = e.width - u, height: x = e.height - u, ref: j } = (0, d.ZP)(e.locked, e.widget.pinned),
        { participantTileWidth: C, visibleParticipants: Z } = (0, O.ZB)(E ? b : x, f, {
            tileWidth: w.vZ,
            tileMinWidth: w.mo,
            tileMargin: w.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: g,
        }),
        N = (0, a.e7)([m.Z], () => m.Z.getWindowState(w.$J)),
        T = {
            id: e.widget.id,
            containerSize: {
                containerHeight: x,
                containerWidth: b,
            },
            sizeOffset: u,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: null != (t = null == N ? void 0 : N.width) ? t : e.width - u,
                maxY: null != (n = null == N ? void 0 : N.height) ? n : e.height - u,
                minX: 0,
                minY: 0,
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (l = null == N ? void 0 : N.height) ? l : e.height,
                right: null != (o = null == N ? void 0 : N.width) ? o : e.width,
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
                o = r.useRef(l);
            r.useLayoutEffect(() => void (o.current = l)),
                r.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: l,
                        widgetLayoutSpecs: a,
                    } = o.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: s, height: u } = V(
                        R(D({}, a), {
                            widget: l,
                            operation: I.B.RESIZE_NORTH,
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
                    (0, c.nv)({
                        widgetId: n,
                        size: {
                            fixed: !0,
                            width: s,
                            height: u,
                        },
                    });
                }, [t]);
        })({
            horizontal: E,
            widget: e.widget,
            widgetLayoutSpecs: T,
        }),
        (0, i.jsx)(
            M,
            R(D({}, e), {
                channel: s,
                participants: Z,
                participantsVersion: g,
                width: E ? C : null != b ? b : e.width,
                height: E ? (null != x ? x : e.height) : C,
                containerRef: j,
            }),
        )
    );
}
