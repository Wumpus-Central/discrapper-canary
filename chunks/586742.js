n.d(t, { Z: () => k });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    d = n(239091),
    c = n(765250),
    u = n(393238),
    h = n(358221),
    _ = n(933557),
    p = n(352978),
    f = n(27457),
    g = n(796638),
    m = n(592125),
    v = n(131951),
    E = n(944486),
    I = n(237997),
    x = n(444295),
    C = n(906037),
    S = n(804570),
    Z = n(501787),
    y = n(981631),
    b = n(65154),
    O = n(388032),
    N = n(499484);
function T(e) {
    var t;
    let { participant: n, channel: r, context: l } = e,
        o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([v.Z], () => null != n.user && null != l && null != r && v.Z.isLocalVideoDisabled(o, l), [o, n.user, l, r]) ? null : (0, i.jsx)(f.ZP, { ...e });
}
function w(e) {
    let { context: t = b.Yn.DEFAULT, participants: l, locked: a, widget: c, channel: u, width: h, height: _, containerRef: f } = e,
        g = (e, r) => {
            let l = e.user;
            (0, x.Ws)(y.Odu.VIDEO, {
                type: x.Qu.CAMERA,
                value: x.bk.SETTINGS_OPENED,
                userId: null == l ? void 0 : l.id
            }),
                (0, d.jW)(r, async () => {
                    let { default: e } = await Promise.all([n.e('79695'), n.e('6524')]).then(n.bind(n, 27900));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            user: l,
                            mediaEngineContext: t
                        });
                });
        },
        m = l.length > 0 && null != t && null != u && (!a || c.pinned);
    r.useEffect(() => {
        (0, C.m3)(
            {
                locked: a,
                pinned: c.pinned,
                widget: c.type,
                isPreviewingInGame: !1
            },
            m
        );
    }, [a, c, m]);
    let v = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal;
    return 0 !== l.length || a
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: f,
                  className: o()({
                      [N.videoList]: !0,
                      [N.vertical]: !v,
                      [N.hidden]: !m && a
                  }),
                  style: { opacity: c.opacity },
                  children: l.map((e) =>
                      (0, i.jsx)(
                          T,
                          {
                              participant: e,
                              width: h,
                              className: N.tile,
                              containerStyle: {
                                  width: h,
                                  height: _
                              },
                              fit: p.L.COVER,
                              channel: u,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: a ? void 0 : g,
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
                ref: f,
                children: (0, i.jsx)(S.E, {
                    emptyText: O.intl.string(O.t['aTiM4+']),
                    icon: s.Odl,
                    absolute: !0
                })
            });
}
function k(e) {
    let t = (0, a.e7)([E.Z, m.Z], () => m.Z.getChannel(E.Z.getVoiceChannelId())),
        n = (0, _.ZP)(t),
        l = null == t ? void 0 : t.id,
        o = (0, a.Wu)([h.Z], () => (null != l ? h.Z.getVideoParticipants(l) : [])),
        s = (0, a.e7)([h.Z], () => (null != l ? h.Z.getParticipantsVersion(l) : 0)),
        d = (0, a.Wu)(
            [h.Z],
            () =>
                null == l
                    ? []
                    : h.Z.getVideoParticipants(l).map((e) => {
                          var t;
                          return null === (t = e.user) || void 0 === t ? void 0 : t.id;
                      }),
            [l]
        ),
        p = e.widget.pinned || !e.locked;
    r.useEffect(() => {
        p &&
            (0, x.zi)(y.Odu.VIDEO, {
                locked: I.Z.isInstanceLocked(),
                shownUserIds: d,
                liveUserIds: d,
                contentInventoryIds: []
            });
    }, [d, p]);
    let f = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: v, height: C, ref: S } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: b, visibleParticipants: O } = (0, g.ZB)(f ? (null != v ? v : e.width) : null != C ? C : e.height, o, {
            tileWidth: Z.vZ,
            tileMinWidth: Z.mo,
            tileMargin: Z.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: s
        }),
        N = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        T = r.useRef(N);
    return (
        r.useLayoutEffect(() => void (T.current = N)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = T.current;
            ((f && e.height > e.width) || (!f && e.width > e.height)) &&
                (0, c.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [f]),
        (0, i.jsx)(w, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: O,
            participantsVersion: s,
            width: f ? b : null != v ? v : e.width,
            height: f ? (null != C ? C : e.height) : b,
            containerRef: S
        })
    );
}
