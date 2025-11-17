n.d(t, { Z: () => C }), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(13245),
    s = n(493773),
    c = n(358221),
    u = n(569545),
    d = n(522474),
    h = n(199902),
    p = n(314897),
    f = n(592125),
    m = n(355863),
    g = n(944486),
    y = n(837268),
    O = n(804570),
    v = n(350663),
    E = n(752802),
    b = n(68286),
    _ = n(340101),
    S = n(501787),
    x = n(388032),
    I = n(965365);
function C(e) {
    var t, n;
    let {
            id: C,
            widget: j,
            size: N,
            locked: Z,
            padding: w,
            borderWidth: T,
            opacity: P,
            horizontal: A,
            pinned: D,
            anchorTop: k,
            anchorLeft: R,
            showEmpty: L = !0,
        } = e,
        M = A ? _.C5.HORIZONTAL : _.C5.VERTICAL,
        z = M === _.C5.VERTICAL,
        V = (0, l.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(C);
            return !!(0, _.ZL)(t) && !Z && (null == (e = t.meta.showAllStreams) || e);
        }, [C, Z]),
        U = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        W = (0, l.e7)([f.Z], () => f.Z.getChannel(U)),
        {
            streamParticipants: G,
            activeStreams: F,
            participantsVersion: B,
        } = (function (e, t, n, i, o) {
            let a = (0, l.Wu)([h.Z], () => (null == e ? [] : h.Z.getAllActiveStreamsForChannel(e))),
                s = r.useMemo(() => new Set(a.map((e) => (0, u.V9)(e))), [a]),
                d = (0, l.e7)([c.Z], () => (null == e ? -1 : c.Z.getParticipantsVersion(e)));
            return {
                streamParticipants: (0, l.Wu)([c.Z, h.Z], () => {
                    if (null == e) return [];
                    function r(e) {
                        return s.has((0, u.V9)(e.stream));
                    }
                    let l = c.Z.getStreamParticipants(e).filter((e) => {
                        if (e.user.id === t) return !1;
                        let i = h.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
                        return !(null != i && E.q.has(i.state)) && (!!n || r(e));
                    });
                    return (
                        l.sort((e, t) => {
                            if (i) {
                                if (r(e) && !r(t)) return -1;
                                if (!r(e) && r(t)) return 1;
                            } else if (o) {
                                if (r(e) && !r(t)) return 1;
                                if (!r(e) && r(t)) return -1;
                            }
                            return e.user.username.localeCompare(t.user.username);
                        }),
                        l
                    );
                }, [e, s, t, n, i, o]),
                activeStreams: s,
                participantsVersion: d,
            };
        })(
            U,
            (0, l.e7)([p.default], () => p.default.getId()),
            V,
            (k && z) || (R && A),
            (!k && z) || (!R && A),
        ),
        H = G.length,
        Y = (0, l.e7)([d.Z], () => d.Z.getWindowState(S.$J), []),
        {
            tileWidth: Q,
            tileHeight: K,
            widgetWidth: X,
            widgetHeight: J,
            containerRef: q,
            containerMinMaxSizes: $,
        } = (0, b.Bz)({
            tileCount: H,
            padding: w,
            borderWidth: T,
            isVertical: z,
            widgetSize: N,
        }),
        ee = {
            id: C,
            widget: j,
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
            locked: Z,
        };
    (0, b.Dl)({
        id: C,
        streamParticipants: G,
        layout: M,
        widgetLayoutSpecs: ee,
    });
    let et = null == W || (0 === F.size && Z) || (0 === H && !Z);
    return (r.useEffect(() => {
        a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et);
    }, [et]),
    (0, s.ZP)(() => () => {
        a.Z.setGpuBoostRequested(y.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (et || !D) && Z)
        ? null
        : et && !Z
          ? L
              ? Z
                  ? null
                  : (0, i.jsx)(O.E, {
                        emptyText: x.intl.string(x.t["T6+rXy"]),
                        icon: o.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: I.goLiveGridContainer,
                style: { opacity: P },
                ref: q,
                children: (0, i.jsx)(v.Z, {
                    widgetId: C,
                    tileWidth: Q,
                    tileHeight: K,
                    locked: Z,
                    layout: M,
                    activeStreams: F,
                    streamParticipants: G,
                    participantsVersion: B,
                    pinned: D,
                    padding: w,
                }),
            });
}
