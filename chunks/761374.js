n.d(t, { Z: () => j }), n(388685), n(642613);
var i = n(951288),
    r = n(647438),
    o = n(442837),
    l = n(481060),
    a = n(13245),
    s = n(493773),
    c = n(358221),
    u = n(569545),
    d = n(522474),
    p = n(199902),
    h = n(314897),
    f = n(592125),
    m = n(355863),
    g = n(944486),
    y = n(837268),
    O = n(804570),
    v = n(350663),
    b = n(68286),
    E = n(340101),
    _ = n(501787),
    S = n(388032),
    x = n(965365);
let I = [];
function j(e) {
    var t, n, j, C;
    let {
            id: w,
            widget: N,
            size: Z,
            locked: T,
            padding: P,
            borderWidth: A,
            opacity: k,
            horizontal: D,
            pinned: R,
            anchorTop: L,
            anchorLeft: M,
            showEmpty: z = !0,
        } = e,
        U = D ? E.C5.HORIZONTAL : E.C5.VERTICAL,
        V = U === E.C5.VERTICAL,
        W = (0, o.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(w);
            return !!(0, E.ZL)(t) && !T && (null == (e = t.meta.showAllStreams) || e);
        }, [w, T]),
        G = (0, o.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        F = (0, o.e7)([f.Z], () => f.Z.getChannel(G)),
        B = (0, o.e7)([h.default], () => h.default.getId()),
        {
            streamParticipants: H,
            activeStreams: Y,
            participantsVersion: Q,
        } = ((j = (L && V) || (M && D)),
        (C = (!L && V) || (!M && D)),
        (0, o.cj)([p.Z, c.Z], () => {
            if (null == G)
                return {
                    streamParticipants: I,
                    participantsVersion: -1,
                    activeStreams: new Set(),
                };
            let e = new Set(p.Z.getAllActiveStreamsForChannel(G).map((e) => (0, u.V9)(e))),
                t = (t) => e.has((0, u.V9)(t.stream)),
                n = c.Z.getStreamParticipants(G).filter((e) => e.user.id !== B && (!!W || t(e)));
            return (
                n.sort((e, n) => {
                    if (j) {
                        if (t(e) && !t(n)) return -1;
                        if (!t(e) && t(n)) return 1;
                    } else if (C) {
                        if (t(e) && !t(n)) return 1;
                        if (!t(e) && t(n)) return -1;
                    }
                    return e.user.username.localeCompare(n.user.username);
                }),
                {
                    streamParticipants: n,
                    activeStreams: e,
                    participantsVersion: c.Z.getParticipantsVersion(G),
                }
            );
        }, [G, B, W, j, C])),
        K = H.length,
        X = (0, o.e7)([d.Z], () => d.Z.getWindowState(_.$J)),
        {
            tileWidth: q,
            tileHeight: J,
            widgetWidth: $,
            widgetHeight: ee,
            containerRef: et,
            containerMinMaxSizes: en,
        } = (0, b.Bz)({
            tileCount: K,
            padding: P,
            borderWidth: A,
            windowWidth: null == X ? void 0 : X.width,
            windowHeight: null == X ? void 0 : X.height,
            isVertical: V,
            widgetSize: Z,
        }),
        ei = {
            id: w,
            widget: N,
            layout: U,
            participants: H.length,
            padding: P,
            borderWidth: A,
            widgetMinMaxSizes: en,
            containerSize: {
                width: $,
                height: ee,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == X ? void 0 : X.height) ? t : ee,
                right: null != (n = null == X ? void 0 : X.width) ? n : $,
            },
            locked: T,
        };
    (0, b.Dl)({
        id: w,
        streamParticipants: H,
        layout: U,
        widgetLayoutSpecs: ei,
    });
    let er = null == F || (0 === Y.size && T) || (0 === K && !T);
    return (r.useEffect(() => {
        a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !er);
    }, [er]),
    (0, s.ZP)(() => () => {
        a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (er || !R) && T)
        ? null
        : er && !T
          ? z
              ? T
                  ? null
                  : (0, i.jsx)(O.E, {
                        emptyText: S.intl.string(S.t["T6+rX1"]),
                        icon: l.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: x.goLiveGridContainer,
                style: { opacity: k },
                ref: et,
                children: (0, i.jsx)(v.Z, {
                    widgetId: w,
                    tileWidth: q,
                    tileHeight: J,
                    locked: T,
                    layout: U,
                    activeStreams: Y,
                    streamParticipants: H,
                    participantsVersion: Q,
                    pinned: R,
                    padding: P,
                }),
            });
}
