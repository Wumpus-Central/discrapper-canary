n.d(t, { Z: () => D }), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(393238),
    p = n(358221),
    f = n(352978),
    h = n(27457),
    m = n(796638),
    g = n(592125),
    y = n(131951),
    O = n(944486),
    v = n(237997),
    b = n(136015),
    E = n(444295),
    _ = n(906037),
    I = n(804570),
    x = n(501787),
    j = n(981631),
    S = n(65154),
    C = n(388032),
    N = n(884751);
function Z(e) {
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
function w(e, t) {
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
let P = r.memo(function (e) {
        var t;
        let { participant: n, channel: r, context: o } = e,
            l = null == (t = n.user) ? void 0 : t.id;
        return (0, a.e7)([y.Z], () => null != n.user && null != o && null != r && y.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(h.ZP, Z({}, e));
    }),
    T = r.memo(function (e) {
        let { context: t = S.Yn.DEFAULT, participants: o, locked: l, channel: a, width: s, height: u, shouldDisplay: d } = e,
            p = r.useCallback(
                (e, r) => {
                    let o = e.user;
                    (0, E.Ws)(j.Odu.VIDEO, {
                        type: E.Qu.CAMERA,
                        value: E.bk.SETTINGS_OPENED,
                        userId: null == o ? void 0 : o.id
                    }),
                        (0, c.jW)(r, async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                            return (n) =>
                                (0, i.jsx)(
                                    e,
                                    w(Z({}, n), {
                                        user: o,
                                        mediaEngineContext: t,
                                        onWatchStream: () => {
                                            (0, E.Ws)(j.Odu.VIDEO, {
                                                type: E.Qu.GO_LIVE,
                                                value: E.bk.ENABLED,
                                                userId: null == o ? void 0 : o.id
                                            });
                                        }
                                    })
                                );
                        });
                },
                [t]
            ),
            h = (0, E.ee)(
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
                (0, E.zi)(j.Odu.VIDEO, {
                    locked: v.default.isInstanceLocked(),
                    shownUserIds: Array.from(h),
                    liveUserIds: Array.from(h),
                    contentInventoryIds: []
                });
        }, [h, d]);
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
                    P,
                    {
                        participant: e,
                        width: s,
                        className: N.tile,
                        containerStyle: m,
                        fit: f.L.COVER,
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
    k = r.memo(function (e) {
        let { context: t = S.Yn.DEFAULT, participants: n, participantsVersion: o, locked: a, widget: c, channel: u, width: d, height: p, showEmpty: f = !0, containerRef: h } = e,
            m = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal,
            g = n.length > 0 && null != t && null != u && (!a || c.pinned);
        r.useEffect(() => {
            (0, _.m3)(
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
                        [N.videoList]: !0,
                        [N.vertical]: !m,
                        [N.hidden]: !g && a
                    }),
                [m, g, a]
            );
        return 0 !== n.length || a
            ? null == u
                ? null
                : (0, i.jsx)('div', {
                      ref: h,
                      className: O,
                      style: y,
                      children: (0, i.jsx)(T, {
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
            : f
              ? (0, i.jsx)('div', {
                    ref: h,
                    children: (0, i.jsx)(I.E, {
                        emptyText: C.intl.string(C.t['aTiM4+']),
                        icon: s.Odl,
                        absolute: !0
                    })
                })
              : null;
    });
function D(e) {
    let t = (0, a.e7)([O.Z, g.Z], () => g.Z.getChannel(O.Z.getVoiceChannelId())),
        n = null == t ? void 0 : t.id,
        [o, l] = (0, a.e7)([p.Z], () => (null == n ? [[], 0] : [p.Z.getVideoParticipants(n), p.Z.getParticipantsVersion(n)]), [n], b.Q),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: c, height: f, ref: h } = (0, d.ZP)(e.locked, e.widget.pinned),
        { participantTileWidth: y, visibleParticipants: v } = (0, m.ZB)(s ? (null != c ? c : e.width) : null != f ? f : e.height, o, {
            tileWidth: x.vZ,
            tileMinWidth: x.mo,
            tileMargin: x.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: l
        }),
        E = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        _ = r.useRef(E);
    return (
        r.useLayoutEffect(() => void (_.current = E)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = _.current;
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
            k,
            w(Z({}, e), {
                channel: t,
                participants: v,
                participantsVersion: l,
                width: s ? y : null != c ? c : e.width,
                height: s ? (null != f ? f : e.height) : y,
                containerRef: h
            })
        )
    );
}
