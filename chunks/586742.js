n.d(t, { Z: () => k });
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
    C = n(981631),
    I = n(65154),
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
    let { context: t = I.Yn.DEFAULT, participants: o, locked: a, widget: u, channel: d, width: p, height: f, containerRef: g } = e,
        _ = (e, r) => {
            let o = e.user;
            (0, y.Ws)(C.Odu.VIDEO, {
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
                                mediaEngineContext: t
                            })
                        );
                });
        },
        m = o.length > 0 && null != t && null != d && (!a || u.pinned);
    r.useEffect(() => {
        (0, E.m3)(
            {
                locked: a,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            m
        );
    }, [a, u, m]);
    let v = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return 0 !== o.length || a
        ? null == d
            ? null
            : (0, i.jsx)('div', {
                  ref: g,
                  className: l()({
                      [w.videoList]: !0,
                      [w.vertical]: !v,
                      [w.hidden]: !m && a
                  }),
                  style: { opacity: u.opacity },
                  children: o.map((e) =>
                      (0, i.jsx)(
                          P,
                          {
                              participant: e,
                              width: p,
                              className: w.tile,
                              containerStyle: {
                                  width: p,
                                  height: f
                              },
                              fit: h.L.COVER,
                              channel: d,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: a ? void 0 : _,
                              forceIdle: a,
                              paused: !m,
                              inOverlayPopout: !0,
                              context: t
                          },
                          e.id
                      )
                  )
              })
        : a
          ? null
          : (0, i.jsx)('div', {
                ref: g,
                children: (0, i.jsx)(x.E, {
                    emptyText: j.NW.string(j.t['aTiM4+']),
                    icon: s.Odl,
                    absolute: !0
                })
            });
}
function k(e) {
    let t = (0, a.e7)([O.Z, m.Z], () => m.Z.getChannel(O.Z.getVoiceChannelId())),
        n = (0, f.ZP)(t),
        o = null == t ? void 0 : t.id,
        l = (0, a.Wu)([p.Z], () => (null != o ? p.Z.getVideoParticipants(o) : [])),
        s = (0, a.e7)([p.Z], () => (null != o ? p.Z.getParticipantsVersion(o) : 0)),
        c = (0, a.Wu)(
            [p.Z],
            () =>
                null == o
                    ? []
                    : p.Z.getVideoParticipants(o).map((e) => {
                          var t;
                          return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                      }),
            [o]
        ),
        h = e.widget.pinned || !e.locked;
    r.useEffect(() => {
        h &&
            (0, y.zi)(C.Odu.VIDEO, {
                locked: b.Z.isInstanceLocked(),
                shownUserIds: c,
                liveUserIds: c,
                contentInventoryIds: []
            });
    }, [c, h]);
    let g = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: v, height: E, ref: x } = (0, d.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: I, visibleParticipants: j } = (0, _.ZB)(g ? (null != v ? v : e.width) : null != E ? E : e.height, l, {
            tileWidth: S.vZ,
            tileMinWidth: S.mo,
            tileMargin: S.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: s
        }),
        w = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        P = r.useRef(w);
    return (
        r.useLayoutEffect(() => void (P.current = w)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = P.current;
            ((g && e.height > e.width) || (!g && e.width > e.height)) &&
                (0, u.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [g]),
        (0, i.jsx)(
            T,
            N(Z({}, e), {
                channel: t,
                title: null != n ? n : '',
                participants: j,
                participantsVersion: s,
                width: g ? I : null != v ? v : e.width,
                height: g ? (null != E ? E : e.height) : I,
                containerRef: x
            })
        )
    );
}
