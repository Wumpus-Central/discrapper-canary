n.d(t, {
    Z: function () {
        return w;
    }
});
var i = n(200651),
    r = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(765250),
    u = n(393238),
    h = n(358221),
    m = n(933557),
    p = n(352978),
    x = n(27457),
    f = n(796638),
    v = n(592125),
    g = n(131951),
    C = n(944486),
    Z = n(906037),
    _ = n(804570),
    b = n(501787),
    j = n(65154),
    I = n(388032),
    E = n(827202);
function k(e) {
    var t;
    let { participant: n, channel: r, context: o } = e,
        l = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([g.Z], () => null != n.user && null != o && null != r && g.Z.isLocalVideoDisabled(l, o), [l, n.user, o, r]) ? null : (0, i.jsx)(x.ZP, { ...e });
}
function N(e) {
    let { context: t = j.Yn.DEFAULT, participants: o, locked: a, widget: d, channel: u, width: h, height: m, containerRef: x } = e,
        f = (e, r) => {
            (0, c.jW)(r, async () => {
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
        v = o.length > 0 && null != t && null != u && (!a || d.pinned);
    r.useEffect(() => {
        (0, Z.m3)(
            {
                locked: a,
                pinned: d.pinned,
                widget: d.type,
                isPreviewingInGame: !1
            },
            v
        );
    }, [a, d, v]);
    let g = 'boolean' != typeof d.meta.horizontal || d.meta.horizontal;
    return 0 !== o.length || a
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: x,
                  className: l()({
                      [E.videoList]: !0,
                      [E.vertical]: !g,
                      [E.hidden]: !v && a
                  }),
                  style: { opacity: d.opacity },
                  children: o.map((e) =>
                      (0, i.jsx)(
                          k,
                          {
                              participant: e,
                              width: h,
                              className: E.tile,
                              containerStyle: {
                                  width: h,
                                  height: m
                              },
                              fit: p.L.COVER,
                              channel: u,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: a ? void 0 : f,
                              forceIdle: a,
                              paused: !v,
                              inOverlayPopout: !0,
                              context: t
                          },
                          e.id
                      )
                  )
              })
        : a
          ? null
          : (0, i.jsx)(_.E, {
                emptyText: I.intl.string(I.t['aTiM4+']),
                icon: s.VideoIcon,
                absolute: !0
            });
}
function w(e) {
    let t = (0, a.e7)([C.Z, v.Z], () => v.Z.getChannel(C.Z.getVoiceChannelId())),
        n = (0, m.ZP)(t),
        o = (0, a.Wu)([h.Z], () => (null != t ? h.Z.getVideoParticipants(t.id) : [])),
        l = (0, a.e7)([h.Z], () => (null != t ? h.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: c, height: p, ref: x } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: g, visibleParticipants: Z } = (0, f.ZB)(s ? (null != c ? c : e.width) : null != p ? p : e.height, o, {
            tileWidth: b.OVERLAY_TILE_WIDTH,
            tileMinWidth: b.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: b.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: l
        }),
        _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        j = r.useRef(_);
    return (
        r.useLayoutEffect(() => void (j.current = _)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = j.current;
            ((s && e.height > e.width) || (!s && e.width > e.height)) &&
                (0, d.nv)({
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
            participants: Z,
            participantsVersion: l,
            width: s ? g : null != c ? c : e.width,
            height: s ? (null != p ? p : e.height) : g,
            containerRef: x
        })
    );
}
