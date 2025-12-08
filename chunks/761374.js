n.d(t, { Z: () => C }), n(388685), n(642613);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(13245),
    s = n(493773),
    u = n(358221),
    c = n(569545),
    d = n(522474),
    h = n(199902),
    p = n(314897),
    f = n(592125),
    m = n(355863),
    g = n(944486),
    O = n(837268),
    y = n(804570),
    E = n(350663),
    v = n(752802),
    b = n(68286),
    S = n(340101),
    x = n(501787),
    j = n(388032),
    I = n(965365);
function C(e) {
    var t, n;
    let {
            id: C,
            widget: Z,
            size: N,
            locked: w,
            padding: T,
            borderWidth: _,
            opacity: P,
            horizontal: A,
            pinned: D,
            anchorTop: R,
            anchorLeft: k,
            showEmpty: L = !0,
        } = e,
        M = A ? S.C5.HORIZONTAL : S.C5.VERTICAL,
        V = M === S.C5.VERTICAL,
        z = (0, l.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(C);
            return !!(0, S.ZL)(t) && !w && (null == (e = t.meta.showAllStreams) || e);
        }, [C, w]),
        U = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        W = (0, l.e7)([f.Z], () => f.Z.getChannel(U)),
        {
            streamParticipants: G,
            activeStreams: F,
            participantsVersion: H,
        } = (function (e, t, n, i, o) {
            let a = (0, l.Wu)([h.Z], () => (null == e ? [] : h.Z.getAllActiveStreamsForChannel(e))),
                s = r.useMemo(() => new Set(a.map((e) => (0, c.V9)(e))), [a]),
                d = (0, l.e7)([u.Z], () => (null == e ? -1 : u.Z.getParticipantsVersion(e)));
            return {
                streamParticipants: (0, l.Wu)([u.Z, h.Z], () => {
                    if (null == e) return [];
                    function r(e) {
                        return s.has((0, c.V9)(e.stream));
                    }
                    let l = u.Z.getStreamParticipants(e).filter((e) => {
                        if (e.user.id === t) return !1;
                        let i = h.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
                        return !(null != i && v.q.has(i.state)) && (!!n || r(e));
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
            z,
            (R && V) || (k && A),
            (!R && V) || (!k && A),
        ),
        Y = G.length,
        B = (0, l.e7)([d.Z], () => d.Z.getWindowState(x.$J), []),
        {
            tileWidth: Q,
            tileHeight: K,
            widgetWidth: X,
            widgetHeight: J,
            containerRef: q,
            containerMinMaxSizes: $,
        } = (0, b.Bz)({
            tileCount: Y,
            padding: T,
            borderWidth: _,
            isVertical: V,
            widgetSize: N,
        }),
        ee = {
            id: C,
            widget: Z,
            layout: M,
            participants: G.length,
            padding: T,
            borderWidth: _,
            widgetMinMaxSizes: $,
            containerSize: {
                width: X,
                height: J,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == B ? void 0 : B.height) ? t : J,
                right: null != (n = null == B ? void 0 : B.width) ? n : X,
            },
            locked: w,
        };
    (0, b.Dl)({
        id: C,
        streamParticipants: G,
        layout: M,
        widgetLayoutSpecs: ee,
    });
    let et = null == W || (0 === F.size && w) || (0 === Y && !w);
    return (r.useEffect(() => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et);
    }, [et]),
    (0, s.ZP)(() => () => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (et || !D) && w)
        ? null
        : et && !w
          ? L
              ? w
                  ? null
                  : (0, i.jsx)(y.E, {
                        emptyText: j.intl.string(j.t["T6+rXy"]),
                        icon: o.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: I.goLiveGridContainer,
                style: { opacity: P },
                ref: q,
                children: (0, i.jsx)(E.Z, {
                    widgetId: C,
                    tileWidth: Q,
                    tileHeight: K,
                    locked: w,
                    layout: M,
                    activeStreams: F,
                    streamParticipants: G,
                    participantsVersion: H,
                    pinned: D,
                    padding: T,
                }),
            });
}
