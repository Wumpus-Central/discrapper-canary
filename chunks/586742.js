n.d(t, {
    Z: function () {
        return b;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(239091),
    c = n(765250),
    u = n(393238),
    d = n(358221),
    h = n(933557),
    f = n(352978),
    p = n(27457),
    m = n(796638),
    v = n(592125),
    g = n(131951),
    x = n(944486),
    C = n(906037),
    Z = n(501787),
    _ = n(65154),
    I = n(334551);
function j(e) {
    var t;
    let { participant: n, channel: l, context: r } = e,
        o = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, a.e7)([g.Z], () => null != n.user && null != r && null != l && g.Z.isLocalVideoDisabled(o, r), [o, n.user, r, l]) ? null : (0, i.jsx)(p.ZP, { ...e });
}
function E(e) {
    let { context: t = _.Yn.DEFAULT, participants: r, locked: a, widget: c, channel: u, width: d, height: h, containerRef: p } = e,
        m = (e, l) => {
            (0, s.jW)(l, async () => {
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
        v = r.length > 0 && null != t && null != u && (!a || c.pinned);
    l.useEffect(() => {
        (0, C.m3)(
            {
                locked: a,
                pinned: c.pinned,
                widget: c.type,
                isPreviewingInGame: !1
            },
            v
        );
    }, [a, c, v]);
    let g = 'boolean' != typeof c.meta.horizontal || c.meta.horizontal;
    return null == u
        ? null
        : (0, i.jsx)('div', {
              ref: p,
              className: o()({
                  [I.videoList]: !0,
                  [I.vertical]: !g,
                  [I.hidden]: !v && a
              }),
              style: { opacity: c.opacity },
              children: r.map((e) =>
                  (0, i.jsx)(
                      j,
                      {
                          participant: e,
                          width: d,
                          className: I.tile,
                          containerStyle: {
                              width: d,
                              height: h
                          },
                          fit: f.L.COVER,
                          channel: u,
                          inPopout: !0,
                          inCall: !0,
                          noBorder: !0,
                          onContextMenu: a ? void 0 : m,
                          forceIdle: a,
                          paused: !v,
                          inOverlayPopout: !0,
                          context: t
                      },
                      e.id
                  )
              )
          });
}
function b(e) {
    let t = (0, a.e7)([x.Z, v.Z], () => v.Z.getChannel(x.Z.getVoiceChannelId())),
        n = (0, h.ZP)(t),
        r = (0, a.Wu)([d.Z], () => (null != t ? d.Z.getVideoParticipants(t.id) : [])),
        o = (0, a.e7)([d.Z], () => (null != t ? d.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: f, height: p, ref: g } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: C, visibleParticipants: _ } = (0, m.ZB)(s ? (null != f ? f : e.width) : null != p ? p : e.height, r, {
            tileWidth: Z.OVERLAY_TILE_WIDTH,
            tileMinWidth: Z.OVERLAY_TILE_MIN_WIDTH,
            tileMargin: Z.OVERLAY_TILE_MARGIN,
            limit: 8,
            cropSelfVideo: !0,
            version: o
        }),
        I = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        j = l.useRef(I);
    return (
        l.useLayoutEffect(() => void (j.current = I)),
        l.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = j.current;
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
        (0, i.jsx)(E, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: _,
            participantsVersion: o,
            width: s ? C : null != f ? f : e.width,
            height: s ? (null != p ? p : e.height) : C,
            containerRef: g
        })
    );
}
