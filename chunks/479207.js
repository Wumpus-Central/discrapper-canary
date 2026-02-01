n.d(t, {
    A: () => V,
    r: () => G,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(397927),
    u = n(442433),
    c = n(391973),
    d = n(765671),
    h = n(313961),
    p = n(164617),
    f = n(401901),
    g = n(87001),
    m = n(175203),
    y = n(163432),
    A = n(734057),
    v = n(430452),
    b = n(309010),
    E = n(256415),
    O = n(996439),
    x = n(810412),
    _ = n(799808),
    S = n(129537),
    I = n(412477),
    j = n(916494),
    T = n(897720),
    C = n(392164),
    N = n(652215),
    w = n(731854),
    P = n(985018),
    D = n(384339);

function R(e) {
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

function k(e, t) {
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
let M = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: l } = e,
            a = null == (t = n.user) ? void 0 : t.id;
        return (0, s.bG)([v.A], () => null != n.user && null != l && null != r && v.A.isLocalVideoDisabled(a, l), [
            a,
            n.user,
            l,
            r,
        ])
            ? null
            : (0, i.jsx)(m.Ay, R({}, e));
    }),
    L = r.memo(function (e) {
        let {
                context: t = w.x.DEFAULT,
                participants: l,
                locked: a,
                channel: s,
                width: o,
                height: c,
                shouldDisplay: d,
            } = e,
            h = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, x.YX)(N.uss.VIDEO, {
                        type: x.Z5.CAMERA,
                        value: x.IP.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id,
                    }),
                        (0, u.L3)(r, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    k(R({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, x.YX)(N.uss.VIDEO, {
                                                type: x.Z5.GO_LIVE,
                                                value: x.IP.ENABLED,
                                                userId: null == l ? void 0 : l.id,
                                            });
                                        },
                                    }),
                                );
                        });
                },
                [t],
            ),
            g = (0, x.Dk)(
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
                (0, x.Y)(N.uss.VIDEO, {
                    locked: E.default.isInstanceLocked(),
                    shownUserIds: Array.from(g),
                    liveUserIds: Array.from(g),
                    contentInventoryIds: [],
                });
        }, [g, d]);
        let m = r.useMemo(
            () => ({
                width: o,
                height: c,
            }),
            [o, c],
        );
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    M,
                    {
                        participant: e,
                        width: o,
                        className: D.Vs,
                        containerStyle: m,
                        fit: f.$.COVER,
                        channel: s,
                        popoutType: p.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: a ? void 0 : h,
                        forceIdle: a,
                        paused: !d,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    U = r.memo(function (e) {
        let {
                context: t = w.x.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: s,
                widget: u,
                channel: c,
                width: d,
                height: h,
                showEmpty: p = !0,
                containerRef: f,
            } = e,
            g = "boolean" != typeof u.meta.horizontal || u.meta.horizontal,
            m = n.length > 0 && null != t && null != c && (!s || u.pinned);
        r.useEffect(() => {
            (0, _.j_)(
                {
                    locked: s,
                    pinned: u.pinned,
                    widget: u.type,
                    isPreviewingInGame: !1,
                },
                m,
            );
        }, [s, u, m]);
        let y = r.useMemo(
                () => ({
                    opacity: u.opacity,
                }),
                [u.opacity],
            ),
            A = r.useMemo(
                () =>
                    a()({
                        [D.wb]: !0,
                        [D.Vd]: !g,
                        [D.R]: !m && s,
                    }),
                [g, m, s],
            );
        return 0 !== n.length || s
            ? null == c
                ? null
                : (0, i.jsx)("div", {
                      ref: f,
                      className: A,
                      style: y,
                      children: (0, i.jsx)(L, {
                          context: t,
                          participants: n,
                          locked: s,
                          channel: c,
                          width: d,
                          height: h,
                          shouldDisplay: m,
                          participantsVersion: l,
                      }),
                  })
            : p
              ? (0, i.jsx)("div", {
                    ref: f,
                    children: (0, i.jsx)(I.g, {
                        emptyText: P.intl.string(P.t.aTiM42),
                        icon: o.npA,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    G = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, T.cv)(t)) return n;
        let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            s = 2 * i + 2 * r,
            o = a
                ? {
                      width: Math.max(n.width, 192),
                      height: Math.min(n.height, 240 + s),
                  }
                : {
                      height: Math.max(n.height, 192),
                      width: Math.min(n.width, 240 + s),
                  },
            u = {
                maxWidth: 0.75 * l.maxX,
                maxHeight: 0.75 * l.maxY,
            };
        return (0, j.$G)(o, u);
    };

function V(e) {
    var t, n, l, a;
    let o = (0, s.bG)([b.A, A.A], () => A.A.getChannel(b.A.getVoiceChannelId())),
        u = 2 * e.padding + 2 * e.borderWidth,
        p = null == o ? void 0 : o.id,
        [f, m] = (0, s.bG)(
            [h.A],
            () => (null == p ? [[], 0] : [h.A.getVideoParticipants(p), h.A.getParticipantsVersion(p)]),
            [p],
            O.D,
        ),
        v = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: E = e.width - u, height: x = e.height - u, ref: _ } = (0, d.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: I, visibleParticipants: j } = (0, y.i4)(v ? E : x, f, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: m,
        }),
        T = (0, s.bG)([g.A], () => g.A.getWindowState(C.f)),
        N = {
            id: e.widget.id,
            containerSize: {
                containerHeight: x,
                containerWidth: E,
            },
            sizeOffset: u,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: null != (t = null == T ? void 0 : T.width) ? t : e.width - u,
                maxY: null != (n = null == T ? void 0 : T.height) ? n : e.height - u,
                minX: 0,
                minY: 0,
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (l = null == T ? void 0 : T.height) ? l : e.height,
                right: null != (a = null == T ? void 0 : T.width) ? a : e.width,
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
                        widgetLayoutSpecs: s,
                    } = a.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: u } = G(
                        k(R({}, s), {
                            widget: l,
                            operation: S.P.RESIZE_NORTH,
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
                    (0, c.Ju)({
                        widgetId: n,
                        size: {
                            fixed: !0,
                            width: o,
                            height: u,
                        },
                    });
                }, [t]);
        })({
            horizontal: v,
            widget: e.widget,
            widgetLayoutSpecs: N,
        }),
        (0, i.jsx)(
            U,
            k(R({}, e), {
                channel: o,
                participants: j,
                participantsVersion: m,
                width: v ? I : null != E ? E : e.width,
                height: v ? (null != x ? x : e.height) : I,
                containerRef: _,
            }),
        )
    );
}
