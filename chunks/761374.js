n.d(t, { Z: () => C }), n(388685), n(642613);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
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
    x = n(388032),
    S = n(965365);
let I = [];
function C(e) {
    var t, n, C, j;
    let {
            id: w,
            widget: N,
            size: Z,
            locked: T,
            padding: P,
            borderWidth: A,
            opacity: D,
            horizontal: k,
            pinned: R,
            anchorTop: L,
            anchorLeft: M,
            showEmpty: z = !0,
        } = e,
        V = k ? E.C5.HORIZONTAL : E.C5.VERTICAL,
        U = V === E.C5.VERTICAL,
        W = (0, l.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(w);
            return !!(0, E.ZL)(t) && !T && (null == (e = t.meta.showAllStreams) || e);
        }, [w, T]),
        G = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        B = (0, l.e7)([f.Z], () => f.Z.getChannel(G)),
        H = (0, l.e7)([h.default], () => h.default.getId()),
        {
            streamParticipants: F,
            activeStreams: Y,
            participantsVersion: Q,
        } = ((C = (L && U) || (M && k)),
        (j = (!L && U) || (!M && k)),
        (0, l.cj)([p.Z, c.Z], () => {
            if (null == G)
                return {
                    streamParticipants: I,
                    participantsVersion: -1,
                    activeStreams: new Set(),
                };
            let e = new Set(p.Z.getAllActiveStreamsForChannel(G).map((e) => (0, u.V9)(e))),
                t = (t) => e.has((0, u.V9)(t.stream)),
                n = c.Z.getStreamParticipants(G).filter((e) => e.user.id !== H && (!!W || t(e)));
            return (
                n.sort((e, n) => {
                    if (C) {
                        if (t(e) && !t(n)) return -1;
                        if (!t(e) && t(n)) return 1;
                    } else if (j) {
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
        }, [G, H, W, C, j])),
        K = F.length,
        X = (0, l.e7)([d.Z], () => d.Z.getWindowState(_.$J), []),
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
            isVertical: U,
            widgetSize: Z,
        }),
        ei = {
            id: w,
            widget: N,
            layout: V,
            participants: F.length,
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
        streamParticipants: F,
        layout: V,
        widgetLayoutSpecs: ei,
    });
    let er = null == B || (0 === Y.size && T) || (0 === K && !T);
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
                        emptyText: x.intl.string(x.t["T6+rX1"]),
                        icon: o.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: S.goLiveGridContainer,
                style: { opacity: D },
                ref: et,
                children: (0, i.jsx)(v.Z, {
                    widgetId: w,
                    tileWidth: q,
                    tileHeight: J,
                    locked: T,
                    layout: V,
                    activeStreams: Y,
                    streamParticipants: F,
                    participantsVersion: Q,
                    pinned: R,
                    padding: P,
                }),
            });
}
