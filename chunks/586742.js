n.d(t, { Z: () => N });
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
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
    x = n(944486),
    E = n(906037),
    C = n(804570),
    Z = n(501787),
    S = n(65154),
    I = n(388032),
    y = n(827202);
function b(e) {
    var t;
    let { participant: n, channel: r, context: o } = e,
        l = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([v.Z], () => null != n.user && null != o && null != r && v.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(f.ZP, { ...e });
}
function w(e) {
    let { context: t = S.Yn.DEFAULT, participants: o, locked: a, widget: c, channel: u, width: h, height: _, containerRef: f } = e,
        g = (e, r) => {
            (0, d.jW)(r, async () => {
                let { default: r } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(r, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        m = o.length > 0 && null != t && null != u && (!a || c.pinned);
    r.useEffect(() => {
        (0, E.m3)(
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
    return 0 !== o.length || a
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: f,
                  className: l()({
                      [y.videoList]: !0,
                      [y.vertical]: !v,
                      [y.hidden]: !m && a
                  }),
                  style: { opacity: c.opacity },
                  children: o.map((e) =>
                      (0, i.jsx)(
                          b,
                          {
                              participant: e,
                              width: h,
                              className: y.tile,
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
          : (0, i.jsx)(C.E, {
                emptyText: I.intl.string(I.t['aTiM4+']),
                icon: s.Odl,
                absolute: !0
            });
}
function N(e) {
    let t = (0, a.e7)([x.Z, m.Z], () => m.Z.getChannel(x.Z.getVoiceChannelId())),
        n = (0, _.ZP)(t),
        o = (0, a.Wu)([h.Z], () => (null != t ? h.Z.getVideoParticipants(t.id) : [])),
        l = (0, a.e7)([h.Z], () => (null != t ? h.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: d, height: p, ref: f } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: v, visibleParticipants: E } = (0, g.ZB)(s ? (null != d ? d : e.width) : null != p ? p : e.height, o, {
            tileWidth: Z.vZ,
            tileMinWidth: Z.mo,
            tileMargin: Z.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: l
        }),
        C = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        S = r.useRef(C);
    return (
        r.useLayoutEffect(() => void (S.current = C)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = S.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
                (0, c.nv)({
                    widgetId: t,
                    size: {
                        fixed: !0,
                        width: i,
                        height: n
                    }
                });
        }, [s]),
        (0, i.jsx)(w, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: E,
            participantsVersion: l,
            width: s ? v : null != d ? d : e.width,
            height: s ? (null != p ? p : e.height) : v,
            containerRef: f
        })
    );
}
