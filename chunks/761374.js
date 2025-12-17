n.d(t, { Z: () => j }), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
    a = n(442837),
    l = n(481060),
    o = n(13245),
    s = n(493773),
    c = n(358221),
    u = n(569545),
    d = n(522474),
    f = n(199902),
    h = n(314897),
    p = n(592125),
    m = n(355863),
    g = n(944486),
    b = n(837268),
    y = n(804570),
    O = n(350663),
    v = n(752802),
    E = n(68286),
    S = n(340101),
    x = n(501787),
    I = n(388032),
    C = n(230558);
function j(e) {
    var t, n;
    let {
            id: j,
            widget: _,
            size: Z,
            locked: N,
            padding: w,
            borderWidth: T,
            opacity: P,
            horizontal: A,
            pinned: k,
            anchorTop: D,
            anchorLeft: R,
            showEmpty: L = !0,
        } = e,
        M = A ? S.C5.HORIZONTAL : S.C5.VERTICAL,
        z = M === S.C5.VERTICAL,
        V = (0, a.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(j);
            return !!(0, S.ZL)(t) && !N && (null == (e = t.meta.showAllStreams) || e);
        }, [j, N]),
        U = (0, a.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        W = (0, a.e7)([p.Z], () => p.Z.getChannel(U)),
        {
            streamParticipants: G,
            activeStreams: F,
            participantsVersion: H,
        } = (function (e, t, n, i, l) {
            let o = (0, a.Wu)([f.Z], () => (null == e ? [] : f.Z.getAllActiveStreamsForChannel(e))),
                s = r.useMemo(() => new Set(o.map((e) => (0, u.V9)(e))), [o]),
                d = (0, a.e7)([c.Z], () => (null == e ? -1 : c.Z.getParticipantsVersion(e)));
            return {
                streamParticipants: (0, a.Wu)([c.Z, f.Z], () => {
                    if (null == e) return [];
                    function r(e) {
                        return s.has((0, u.V9)(e.stream));
                    }
                    let a = c.Z.getStreamParticipants(e).filter((e) => {
                        if (e.user.id === t) return !1;
                        let i = f.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
                        return !(null != i && v.q.has(i.state)) && (!!n || r(e));
                    });
                    return (
                        a.sort((e, t) => {
                            if (i) {
                                if (r(e) && !r(t)) return -1;
                                if (!r(e) && r(t)) return 1;
                            } else if (l) {
                                if (r(e) && !r(t)) return 1;
                                if (!r(e) && r(t)) return -1;
                            }
                            return e.user.username.localeCompare(t.user.username);
                        }),
                        a
                    );
                }, [e, s, t, n, i, l]),
                activeStreams: s,
                participantsVersion: d,
            };
        })(
            U,
            (0, a.e7)([h.default], () => h.default.getId()),
            V,
            (D && z) || (R && A),
            (!D && z) || (!R && A),
        ),
        B = G.length,
        Y = (0, a.e7)([d.Z], () => d.Z.getWindowState(x.$J), []),
        {
            tileWidth: Q,
            tileHeight: K,
            widgetWidth: X,
            widgetHeight: J,
            containerRef: q,
            containerMinMaxSizes: $,
        } = (0, E.Bz)({
            tileCount: B,
            padding: w,
            borderWidth: T,
            isVertical: z,
            widgetSize: Z,
        }),
        ee = {
            id: j,
            widget: _,
            layout: M,
            participants: G.length,
            padding: w,
            borderWidth: T,
            widgetMinMaxSizes: $,
            containerSize: {
                width: X,
                height: J,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == Y ? void 0 : Y.height) ? t : J,
                right: null != (n = null == Y ? void 0 : Y.width) ? n : X,
            },
            locked: N,
        };
    (0, E.Dl)({
        id: j,
        streamParticipants: G,
        layout: M,
        widgetLayoutSpecs: ee,
    });
    let et = null == W || (0 === F.size && N) || (0 === B && !N);
    return (r.useEffect(() => {
        o.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et);
    }, [et]),
    (0, s.ZP)(() => () => {
        o.Z.setGpuBoostRequested(b.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (et || !k) && N)
        ? null
        : et && !N
          ? L
              ? N
                  ? null
                  : (0, i.jsx)(y.E, {
                        emptyText: I.intl.string(I.t["T6+rXy"]),
                        icon: l.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: C.goLiveGridContainer,
                style: { opacity: P },
                ref: q,
                children: (0, i.jsx)(O.Z, {
                    widgetId: j,
                    tileWidth: Q,
                    tileHeight: K,
                    locked: N,
                    layout: M,
                    activeStreams: F,
                    streamParticipants: G,
                    participantsVersion: H,
                    pinned: k,
                    padding: w,
                }),
            });
}
