n.d(t, {
    Z: function () {
        return N;
    }
});
var i = n(200651),
    l = n(192379),
    o = n(120356),
    r = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(239091),
    u = n(765250),
    d = n(393238),
    h = n(358221),
    f = n(933557),
    p = n(352978),
    m = n(27457),
    v = n(796638),
    x = n(592125),
    g = n(131951),
    C = n(944486),
    Z = n(906037),
    _ = n(804570),
    I = n(501787),
    j = n(65154),
    E = n(388032),
    b = n(334551);
function w(e) {
    var t;
    let { participant: n, channel: l, context: o } = e,
        r = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([g.Z], () => null != n.user && null != o && null != l && g.Z.isLocalVideoDisabled(r, o), [r, n.user, o, l]) ? null : (0, i.jsx)(m.ZP, { ...e });
}
function k(e) {
    let { context: t = j.Yn.DEFAULT, participants: o, locked: a, widget: u, channel: d, width: h, height: f, containerRef: m } = e,
        v = (e, l) => {
            (0, c.jW)(l, async () => {
                let { default: l } = await Promise.all([n.e('79695'), n.e('69220'), n.e('76747')]).then(n.bind(n, 881351));
                return (n) =>
                    (0, i.jsx)(l, {
                        ...n,
                        user: e.user,
                        showMediaItems: !0,
                        mediaEngineContext: t
                    });
            });
        },
        x = o.length > 0 && null != t && null != d && (!a || u.pinned);
    l.useEffect(() => {
        (0, Z.m3)(
            {
                locked: a,
                pinned: u.pinned,
                widget: u.type,
                isPreviewingInGame: !1
            },
            x
        );
    }, [a, u, x]);
    let g = 'boolean' != typeof u.meta.horizontal || u.meta.horizontal;
    return 0 !== o.length || a
        ? null == d
            ? null
            : (0, i.jsx)('div', {
                  ref: m,
                  className: r()({
                      [b.videoList]: !0,
                      [b.vertical]: !g,
                      [b.hidden]: !x && a
                  }),
                  style: { opacity: u.opacity },
                  children: o.map((e) =>
                      (0, i.jsx)(
                          w,
                          {
                              participant: e,
                              width: h,
                              className: b.tile,
                              containerStyle: {
                                  width: h,
                                  height: f
                              },
                              fit: p.L.COVER,
                              channel: d,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: a ? void 0 : v,
                              forceIdle: a,
                              paused: !x,
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
                emptyText: E.intl.string(E.t['aTiM4+']),
                icon: s.VideoIcon,
                absolute: !0
            });
}
function N(e) {
    let t = (0, a.e7)([C.Z, x.Z], () => x.Z.getChannel(C.Z.getVoiceChannelId())),
        n = (0, f.ZP)(t),
        o = (0, a.Wu)([h.Z], () => (null != t ? h.Z.getVideoParticipants(t.id) : [])),
        r = (0, a.e7)([h.Z], () => (null != t ? h.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: c, height: p, ref: m } = (0, d.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: g, visibleParticipants: Z } = (0, v.ZB)(s ? (null != c ? c : e.width) : null != p ? p : e.height, o, {
            tileWidth: I.OVERLAY_TILE_WIDTH,
            tileMinWidth: I.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: I.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: r
        }),
        _ = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        j = l.useRef(_);
    return (
        l.useLayoutEffect(() => void (j.current = _)),
        l.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = j.current;
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
        (0, i.jsx)(k, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: Z,
            participantsVersion: r,
            width: s ? g : null != c ? c : e.width,
            height: s ? (null != p ? p : e.height) : g,
            containerRef: m
        })
    );
}
