n.d(t, { Z: () => A }), n(47120);
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
    f = n(933557),
    h = n(352978),
    g = n(27457),
    _ = n(796638),
    m = n(592125),
    v = n(131951),
    O = n(944486),
    b = n(237997),
    y = n(444295),
    E = n(906037),
    x = n(804570),
    S = n(501787),
    I = n(981631),
    C = n(65154),
    j = n(388032),
    w = n(772630);
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
function N(e, t) {
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
function P(e) {
    var t;
    let { participant: n, channel: r, context: o } = e,
        l = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([v.Z], () => null != n.user && null != o && null != r && v.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(g.ZP, Z({}, e));
}
function T(e) {
    let { context: t = C.Yn.DEFAULT, participants: o, locked: l, channel: a, width: s, height: u, shouldDisplay: d } = e,
        p = (e, r) => {
            let o = e.user;
            (0, y.Ws)(I.Odu.VIDEO, {
                type: y.Qu.CAMERA,
                value: y.bk.SETTINGS_OPENED,
                userId: null == o ? void 0 : o.id
            }),
                (0, c.jW)(r, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                    return (n) =>
                        (0, i.jsx)(
                            e,
                            N(Z({}, n), {
                                user: o,
                                mediaEngineContext: t,
                                onWatchStream: () => {
                                    (0, y.Ws)(I.Odu.VIDEO, {
                                        type: y.Qu.GO_LIVE,
                                        value: y.bk.ENABLED,
                                        userId: null == o ? void 0 : o.id
                                    });
                                }
                            })
                        );
                });
        },
        f = (0, y.ee)(
            () =>
                new Set(
                    o.map((e) => {
                        var t;
                        return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                    })
                ),
            [o]
        );
    return (
        r.useEffect(() => {
            d &&
                (0, y.zi)(I.Odu.VIDEO, {
                    locked: b.Z.isInstanceLocked(),
                    shownUserIds: Array.from(f),
                    liveUserIds: Array.from(f),
                    contentInventoryIds: []
                });
        }, [f, d]),
        (0, i.jsx)(i.Fragment, {
            children: o.map((e) =>
                (0, i.jsx)(
                    P,
                    {
                        participant: e,
                        width: s,
                        className: w.tile,
                        containerStyle: {
                            width: s,
                            height: u
                        },
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
        })
    );
}
function k(e) {
    let { context: t = C.Yn.DEFAULT, participants: n, participantsVersion: o, locked: a, widget: c, channel: u, width: d, height: p, showEmpty: f = !0, containerRef: h } = e,
        g = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal,
        _ = n.length > 0 && null != t && null != u && (!a || c.pinned);
    return (r.useEffect(() => {
        (0, E.m3)(
            {
                locked: a,
                pinned: c.pinned,
                widget: c.type,
                isPreviewingInGame: !1
            },
            _
        );
    }, [a, c, _]),
    0 !== n.length || a)
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: h,
                  className: l()({
                      [w.videoList]: !0,
                      [w.vertical]: !g,
                      [w.hidden]: !_ && a
                  }),
                  style: { opacity: c.opacity },
                  children: (0, i.jsx)(T, {
                      context: t,
                      participants: n,
                      locked: a,
                      channel: u,
                      width: d,
                      height: p,
                      shouldDisplay: _,
                      participantsVersion: o
                  })
              })
        : f
          ? a
              ? null
              : (0, i.jsx)('div', {
                    ref: h,
                    children: (0, i.jsx)(x.E, {
                        emptyText: j.NW.string(j.t['aTiM4+']),
                        icon: s.Odl,
                        absolute: !0
                    })
                })
          : null;
}
function A(e) {
    let t = (0, a.e7)([O.Z, m.Z], () => m.Z.getChannel(O.Z.getVoiceChannelId())),
        n = (0, f.ZP)(t),
        o = null == t ? void 0 : t.id,
        l = (0, a.Wu)([p.Z], () => (null != o ? p.Z.getVideoParticipants(o) : [])),
        s = (0, a.e7)([p.Z], () => (null != o ? p.Z.getParticipantsVersion(o) : 0)),
        c = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: h, height: g, ref: v } = (0, d.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: b, visibleParticipants: y } = (0, _.ZB)(c ? (null != h ? h : e.width) : null != g ? g : e.height, l, {
            tileWidth: S.vZ,
            tileMinWidth: S.mo,
            tileMargin: S.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: s
        }),
        E = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        x = r.useRef(E);
    return (
        r.useLayoutEffect(() => void (x.current = E)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = x.current;
            ((c && e.height > e.width) || (!c && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [c]),
        (0, i.jsx)(
            k,
            N(Z({}, e), {
                channel: t,
                title: null != n ? n : '',
                participants: y,
                participantsVersion: s,
                width: c ? b : null != h ? h : e.width,
                height: c ? (null != g ? g : e.height) : b,
                containerRef: v
            })
        )
    );
}
