n.d(t, {
    A: () => z,
    r: () => U,
}),
    n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    o = n(311907),
    s = n(397927),
    c = n(442433),
    u = n(391973),
    d = n(765671),
    p = n(313961),
    h = n(164617),
    f = n(401901),
    m = n(87001),
    g = n(175203),
    y = n(163432),
    A = n(734057),
    O = n(430452),
    E = n(309010),
    v = n(256415),
    b = n(996439),
    S = n(810412),
    x = n(799808),
    j = n(129537),
    I = n(412477),
    N = n(916494),
    w = n(897720),
    T = n(392164),
    C = n(652215),
    _ = n(731854),
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

function L(e, t) {
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
            a = null == (t = n.user) ? void 0 : t.id;
        return (0, o.bG)([O.A], () => null != n.user && null != l && null != r && O.A.isLocalVideoDisabled(a, l), [
            a,
            n.user,
            l,
            r,
        ])
            ? null
            : (0, i.jsx)(g.Ay, R({}, e));
    }),
    M = r.memo(function (e) {
        let {
                context: t = _.x.DEFAULT,
                participants: l,
                locked: a,
                channel: o,
                width: s,
                height: u,
                shouldDisplay: d,
            } = e,
            p = r.useCallback(
                (e, r) => {
                    let l = e.user;
                    (0, S.YX)(C.uss.VIDEO, {
                        type: S.Z5.CAMERA,
                        value: S.IP.SETTINGS_OPENED,
                        userId: null == l ? void 0 : l.id,
                    }),
                        (0, c.L3)(r, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("3795"), n.e("87997")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    L(R({}, n), {
                                        user: l,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, S.YX)(C.uss.VIDEO, {
                                                type: S.Z5.GO_LIVE,
                                                value: S.IP.ENABLED,
                                                userId: null == l ? void 0 : l.id,
                                            });
                                        },
                                    }),
                                );
                        });
                },
                [t],
            ),
            m = (0, S.Dk)(
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
                (0, S.Y)(C.uss.VIDEO, {
                    locked: v.default.isInstanceLocked(),
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
                    k,
                    {
                        participant: e,
                        width: s,
                        className: D.Vs,
                        containerStyle: g,
                        fit: f.$.COVER,
                        channel: o,
                        popoutType: h.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: a ? void 0 : p,
                        forceIdle: a,
                        paused: !d,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    V = r.memo(function (e) {
        let {
                context: t = _.x.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: o,
                widget: c,
                channel: u,
                width: d,
                height: p,
                showEmpty: h = !0,
                containerRef: f,
            } = e,
            m = "boolean" != typeof c.meta.horizontal || c.meta.horizontal,
            g = n.length > 0 && null != t && null != u && (!o || c.pinned);
        r.useEffect(() => {
            (0, x.j_)(
                {
                    locked: o,
                    pinned: c.pinned,
                    widget: c.type,
                    isPreviewingInGame: !1,
                },
                g,
            );
        }, [o, c, g]);
        let y = r.useMemo(
                () => ({
                    opacity: c.opacity,
                }),
                [c.opacity],
            ),
            A = r.useMemo(
                () =>
                    a()({
                        [D.wb]: !0,
                        [D.Vd]: !m,
                        [D.R]: !g && o,
                    }),
                [m, g, o],
            );
        return 0 !== n.length || o
            ? null == u
                ? null
                : (0, i.jsx)("div", {
                      ref: f,
                      className: A,
                      style: y,
                      children: (0, i.jsx)(M, {
                          context: t,
                          participants: n,
                          locked: o,
                          channel: u,
                          width: d,
                          height: p,
                          shouldDisplay: g,
                          participantsVersion: l,
                      }),
                  })
            : h
              ? (0, i.jsx)("div", {
                    ref: f,
                    children: (0, i.jsx)(I.g, {
                        emptyText: P.intl.string(P.t.aTiM42),
                        icon: s.npA,
                        absolute: !0,
                    }),
                })
              : null;
    }),
    U = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: l } = e;
        if (!(0, w.cv)(t)) return n;
        let a = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            o = 2 * i + 2 * r,
            s = a
                ? {
                      width: Math.max(n.width, 192),
                      height: Math.min(n.height, 240 + o),
                  }
                : {
                      height: Math.max(n.height, 192),
                      width: Math.min(n.width, 240 + o),
                  },
            c = {
                maxWidth: 0.75 * l.maxX,
                maxHeight: 0.75 * l.maxY,
            };
        return (0, N.$G)(s, c);
    };

function z(e) {
    var t, n, l, a;
    let s = (0, o.bG)([E.A, A.A], () => A.A.getChannel(E.A.getVoiceChannelId())),
        c = 2 * e.padding + 2 * e.borderWidth,
        h = null == s ? void 0 : s.id,
        [f, g] = (0, o.bG)(
            [p.A],
            () => (null == h ? [[], 0] : [p.A.getVideoParticipants(h), p.A.getParticipantsVersion(h)]),
            [h],
            b.D,
        ),
        O = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: v = e.width - c, height: S = e.height - c, ref: x } = (0, d.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: I, visibleParticipants: N } = (0, y.i4)(O ? v : S, f, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: g,
        }),
        w = (0, o.bG)([m.A], () => m.A.getWindowState(T.f)),
        C = {
            id: e.widget.id,
            containerSize: {
                containerHeight: S,
                containerWidth: v,
            },
            sizeOffset: c,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: {
                maxX: null != (t = null == w ? void 0 : w.width) ? t : e.width - c,
                maxY: null != (n = null == w ? void 0 : w.height) ? n : e.height - c,
                minX: 0,
                minY: 0,
            },
            widget: e.widget,
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (l = null == w ? void 0 : w.height) ? l : e.height,
                right: null != (a = null == w ? void 0 : w.width) ? a : e.width,
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
                    let { width: s, height: c } = U(
                        L(R({}, o), {
                            widget: l,
                            operation: j.P.RESIZE_NORTH,
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
                    (0, u.Ju)({
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
            widgetLayoutSpecs: C,
        }),
        (0, i.jsx)(
            V,
            L(R({}, e), {
                channel: s,
                participants: N,
                participantsVersion: g,
                width: O ? I : null != v ? v : e.width,
                height: O ? (null != S ? S : e.height) : I,
                containerRef: x,
            }),
        )
    );
}
