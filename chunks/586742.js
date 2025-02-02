n.d(t, { Z: () => w });
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    d = n(239091),
    c = n(765250),
    u = n(393238),
    h = n(358221),
    _ = n(933557),
    p = n(352978),
    g = n(27457),
    f = n(796638),
    m = n(592125),
    v = n(131951),
    x = n(944486),
    E = n(906037),
    Z = n(804570),
    C = n(501787),
    I = n(65154),
    S = n(388032),
    b = n(827202);
function y(e) {
    var t;
    let { participant: n, channel: l, context: r } = e,
        o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([v.Z], () => null != n.user && null != r && null != l && v.Z.isLocalVideoDisabled(o, r), [o, n.user, r, l]) ? null : (0, i.jsx)(g.ZP, { ...e });
}
function N(e) {
    let { context: t = I.Yn.DEFAULT, participants: r, locked: a, widget: c, channel: u, width: h, height: _, containerRef: g } = e,
        f = (e, l) => {
            (0, d.jW)(l, async () => {
                let { default: l } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        m = r.length > 0 && null != t && null != u && (!a || c.pinned);
    l.useEffect(() => {
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
    return 0 !== r.length || a
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: g,
                  className: o()({
                      [b.videoList]: !0,
                      [b.vertical]: !v,
                      [b.hidden]: !m && a
                  }),
                  style: { opacity: c.opacity },
                  children: r.map((e) =>
                      (0, i.jsx)(
                          y,
                          {
                              participant: e,
                              width: h,
                              className: b.tile,
                              containerStyle: {
                                  width: h,
                                  height: _
                              },
                              fit: p.L.COVER,
                              channel: u,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: a ? void 0 : f,
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
          : (0, i.jsx)(Z.E, {
                emptyText: S.intl.string(S.t['aTiM4+']),
                icon: s.Odl,
                absolute: !0
            });
}
function w(e) {
    let t = (0, a.e7)([x.Z, m.Z], () => m.Z.getChannel(x.Z.getVoiceChannelId())),
        n = (0, _.ZP)(t),
        r = (0, a.Wu)([h.Z], () => (null != t ? h.Z.getVideoParticipants(t.id) : [])),
        o = (0, a.e7)([h.Z], () => (null != t ? h.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: d, height: p, ref: g } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: v, visibleParticipants: E } = (0, f.ZB)(s ? (null != d ? d : e.width) : null != p ? p : e.height, r, {
            tileWidth: C.vZ,
            tileMinWidth: C.mo,
            tileMargin: C.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        Z = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        I = l.useRef(Z);
    return (
        l.useLayoutEffect(() => void (I.current = Z)),
        l.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = I.current;
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
        (0, i.jsx)(N, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: E,
            participantsVersion: o,
            width: s ? v : null != d ? d : e.width,
            height: s ? (null != p ? p : e.height) : v,
            containerRef: g
        })
    );
}
