n.d(t, {
    R: () => M,
    Z: () => V,
}),
    n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    u = n(239091),
    c = n(765250),
    d = n(393238),
    p = n(358221),
    h = n(352978),
    f = n(522474),
    m = n(27457),
    g = n(796638),
    O = n(592125),
    y = n(131951),
    v = n(944486),
    E = n(237997),
    S = n(136015),
    b = n(444295),
    x = n(906037),
    j = n(353038),
    I = n(804570),
    C = n(461393),
    Z = n(340101),
    w = n(501787),
    N = n(981631),
    T = n(65154),
    _ = n(388032),
    P = n(59122);
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
function A(e, t) {
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
            o = null == (t = n.user) ? void 0 : t.id;
        return (0, a.e7)([y.Z], () => null != n.user && null != l && null != r && y.Z.isLocalVideoDisabled(o, l), [
            o,
            n.user,
            l,
            r,
        ])
            ? null
            : (0, i.jsx)(m.ZP, D({}, e));
    }),
    k = r.memo(function (e) {
        let {
                context: t = T.Yn.DEFAULT,
                participants: l,
                locked: o,
                channel: a,
                width: s,
                height: c,
                shouldDisplay: d,
            } = e,
            p = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, b.Ws)(N.Odu.VIDEO, {
                        type: b.Qu.CAMERA,
                        value: b.bk.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id,
                    }),
                        (0, u.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e("79695"), n.e("6524")]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    A(D({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, b.Ws)(N.Odu.VIDEO, {
                                                type: b.Qu.GO_LIVE,
                                                value: b.bk.ENABLED,
                                                userId: null == l ? void 0 : l.id,
                                            });
                                        },
                                    }),
                                );
                        });
                },
                [t],
            ),
            f = (0, b.ee)(
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
                (0, b.zi)(N.Odu.VIDEO, {
                    locked: E.default.isInstanceLocked(),
                    shownUserIds: Array.from(f),
                    liveUserIds: Array.from(f),
                    contentInventoryIds: [],
                });
        }, [f, d]);
        let m = r.useMemo(
            () => ({
                width: s,
                height: c,
            }),
            [s, c],
        );
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    R,
                    {
                        participant: e,
                        width: s,
                        className: P.tile,
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
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    L = r.memo(function (e) {
        let {
                context: t = T.Yn.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: a,
                widget: u,
                channel: c,
                width: d,
                height: p,
                showEmpty: h = !0,
                containerRef: f,
            } = e,
            m = "boolean" != typeof u.meta.horizontal || u.meta.horizontal,
            g = n.length > 0 && null != t && null != c && (!a || u.pinned);
        r.useEffect(() => {
            (0, x.m3)(
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
                        [P.videoList]: !0,
                        [P.vertical]: !m,
                        [P.hidden]: !g && a,
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
                      children: (0, i.jsx)(k, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: c,
                          width: d,
                          height: p,
                          shouldDisplay: g,
                          participantsVersion: l,
                      }),
                  })
            : h
              ? (0, i.jsx)("div", {
                    ref: f,
                    children: (0, i.jsx)(I.E, {
                        emptyText: _.intl.string(_.t["aTiM4+"]),
                        icon: s.Odl,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    M = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, Z.js)(t)) return n;
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
        return (0, C.hJ)(s, u);
    };
function V(e) {
    var t, n, l, o;
    let s = (0, a.e7)([v.Z, O.Z], () => O.Z.getChannel(v.Z.getVoiceChannelId())),
        u = 2 * e.padding + 2 * e.borderWidth,
        h = null == s ? void 0 : s.id,
        [m, y] = (0, a.e7)(
            [p.Z],
            () => (null == h ? [[], 0] : [p.Z.getVideoParticipants(h), p.Z.getParticipantsVersion(h)]),
            [h],
            S.Q,
        ),
        E = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: b = e.width - u, height: x = e.height - u, ref: I } = (0, d.ZP)(e.locked, e.widget.pinned),
        { participantTileWidth: C, visibleParticipants: Z } = (0, g.ZB)(E ? b : x, m, {
            tileWidth: w.vZ,
            tileMinWidth: w.mo,
            tileMargin: w.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: y,
        }),
        N = (0, a.e7)([f.Z], () => f.Z.getWindowState(w.$J)),
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
                    let { width: s, height: u } = M(
                        A(D({}, a), {
                            widget: l,
                            operation: j.B.RESIZE_NORTH,
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
            L,
            A(D({}, e), {
                channel: s,
                participants: Z,
                participantsVersion: y,
                width: E ? C : null != b ? b : e.width,
                height: E ? (null != x ? x : e.height) : C,
                containerRef: I,
            }),
        )
    );
}
