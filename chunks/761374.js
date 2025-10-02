n.d(t, { Z: () => C }), n(388685), n(642613);
var i = n(951288),
    r = n(647438),
    l = n(442837),
    o = n(481060),
    a = n(13245),
    s = n(493773),
    u = n(358221),
    c = n(569545),
    d = n(522474),
    p = n(199902),
    h = n(314897),
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
    I = n(491426);
function C(e) {
    var t, n;
    let {
            id: C,
            widget: Z,
            size: w,
            locked: N,
            padding: T,
            borderWidth: _,
            opacity: P,
            horizontal: D,
            pinned: A,
            anchorTop: R,
            anchorLeft: k,
            showEmpty: L = !0,
        } = e,
        M = D ? S.C5.HORIZONTAL : S.C5.VERTICAL,
        V = M === S.C5.VERTICAL,
        z = (0, l.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(C);
            return !!(0, S.ZL)(t) && !N && (null == (e = t.meta.showAllStreams) || e);
        }, [C, N]),
        U = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        W = (0, l.e7)([f.Z], () => f.Z.getChannel(U)),
        {
            streamParticipants: G,
            activeStreams: F,
            participantsVersion: H,
        } = (function (e, t, n, i, o) {
            let a = (0, l.Wu)([p.Z], () => (null == e ? [] : p.Z.getAllActiveStreamsForChannel(e))),
                s = r.useMemo(() => new Set(a.map((e) => (0, c.V9)(e))), [a]),
                d = (0, l.e7)([u.Z], () => (null == e ? -1 : u.Z.getParticipantsVersion(e)));
            return {
                streamParticipants: (0, l.Wu)([u.Z, p.Z], () => {
                    if (null == e) return [];
                    function r(e) {
                        return s.has((0, c.V9)(e.stream));
                    }
                    let l = u.Z.getStreamParticipants(e).filter((e) => {
                        if (e.user.id === t) return !1;
                        let i = p.Z.getActiveStreamForUser(e.user.id, e.stream.guildId);
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
            (0, l.e7)([h.default], () => h.default.getId()),
            z,
            (R && V) || (k && D),
            (!R && V) || (!k && D),
        ),
        Y = G.length,
        B = (0, l.e7)([d.Z], () => d.Z.getWindowState(x.$J), []),
        {
            tileWidth: Q,
            tileHeight: X,
            widgetWidth: K,
            widgetHeight: J,
            containerRef: q,
            containerMinMaxSizes: $,
        } = (0, b.Bz)({
            tileCount: Y,
            padding: T,
            borderWidth: _,
            isVertical: V,
            widgetSize: w,
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
                width: K,
                height: J,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == B ? void 0 : B.height) ? t : J,
                right: null != (n = null == B ? void 0 : B.width) ? n : K,
            },
            locked: N,
        };
    (0, b.Dl)({
        id: C,
        streamParticipants: G,
        layout: M,
        widgetLayoutSpecs: ee,
    });
    let et = null == W || (0 === F.size && N) || (0 === Y && !N);
    return (r.useEffect(() => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !et);
    }, [et]),
    (0, s.ZP)(() => () => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (et || !A) && N)
        ? null
        : et && !N
          ? L
              ? N
                  ? null
                  : (0, i.jsx)(y.E, {
                        emptyText: j.intl.string(j.t["T6+rX1"]),
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
                    tileHeight: X,
                    locked: N,
                    layout: M,
                    activeStreams: F,
                    streamParticipants: G,
                    participantsVersion: H,
                    pinned: A,
                    padding: T,
                }),
            });
}
