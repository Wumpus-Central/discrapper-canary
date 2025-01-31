n.d(t, { Z: () => k });
var i = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(239091),
    d = n(765250),
    u = n(393238),
    h = n(358221),
    _ = n(933557),
    m = n(352978),
    g = n(27457),
    p = n(796638),
    f = n(592125),
    x = n(131951),
    v = n(944486),
    C = n(906037),
    b = n(804570),
    Z = n(501787),
    I = n(65154),
    j = n(388032),
    w = n(827202);
function y(e) {
    var t;
    let { participant: n, channel: r, context: o } = e,
        a = null === (t = n.user) || void 0 === t ? void 0 : t.id;
    return (0, l.e7)([x.Z], () => null != n.user && null != o && null != r && x.Z.isLocalVideoDisabled(a, o), [a, n.user, o, r]) ? null : (0, i.jsx)(g.ZP, { ...e });
}
function E(e) {
    let { context: t = I.Yn.DEFAULT, participants: o, locked: l, widget: d, channel: u, width: h, height: _, containerRef: g } = e,
        p = (e, r) => {
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
        f = o.length > 0 && null != t && null != u && (!l || d.pinned);
    r.useEffect(() => {
        (0, C.m3)(
            {
                locked: l,
                pinned: d.pinned,
                widget: d.type,
                isPreviewingInGame: !1
            },
            f
        );
    }, [l, d, f]);
    let x = 'boolean' != typeof d.meta.horizontal || d.meta.horizontal;
    return 0 !== o.length || l
        ? null == u
            ? null
            : (0, i.jsx)('div', {
                  ref: g,
                  className: a()({
                      [w.videoList]: !0,
                      [w.vertical]: !x,
                      [w.hidden]: !f && l
                  }),
                  style: { opacity: d.opacity },
                  children: o.map((e) =>
                      (0, i.jsx)(
                          y,
                          {
                              participant: e,
                              width: h,
                              className: w.tile,
                              containerStyle: {
                                  width: h,
                                  height: _
                              },
                              fit: m.L.COVER,
                              channel: u,
                              inPopout: !0,
                              inCall: !0,
                              noBorder: !0,
                              onContextMenu: l ? void 0 : p,
                              forceIdle: l,
                              paused: !f,
                              inOverlayPopout: !0,
                              context: t
                          },
                          e.id
                      )
                  )
              })
        : l
          ? null
          : (0, i.jsx)(b.E, {
                emptyText: j.intl.string(j.t['aTiM4+']),
                icon: s.Odl,
                absolute: !0
            });
}
function k(e) {
    let t = (0, l.e7)([v.Z, f.Z], () => f.Z.getChannel(v.Z.getVoiceChannelId())),
        n = (0, _.ZP)(t),
        o = (0, l.Wu)([h.Z], () => (null != t ? h.Z.getVideoParticipants(t.id) : [])),
        a = (0, l.e7)([h.Z], () => (null != t ? h.Z.getParticipantsVersion(t.id) : 0)),
        s = 'boolean' != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: c, height: m, ref: g } = (0, u.Z)(e.locked, e.widget.pinned),
        { participantTileWidth: x, visibleParticipants: C } = (0, p.ZB)(s ? (null != c ? c : e.width) : null != m ? m : e.height, o, {
            tileWidth: Z.vZ,
            tileMinWidth: Z.mo,
            tileMargin: Z.F$,
            limit: 8,
            cropSelfVideo: !0,
            version: a
        }),
        b = {
            id: e.widget.id,
            size: e.widget.size,
            containerWidth: e.width,
            containerHeight: e.height
        },
        I = r.useRef(b);
    return (
        r.useLayoutEffect(() => void (I.current = b)),
        r.useLayoutEffect(() => {
            let { size: e, id: t, containerWidth: n, containerHeight: i } = I.current;
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
        (0, i.jsx)(E, {
            ...e,
            channel: t,
            title: null != n ? n : '',
            participants: C,
            participantsVersion: a,
            width: s ? x : null != c ? c : e.width,
            height: s ? (null != m ? m : e.height) : x,
            containerRef: g
        })
    );
}
