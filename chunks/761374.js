n.d(t, { Z: () => I }), n(388685), n(642613);
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
    v = n(68286),
    b = n(340101),
    S = n(501787),
    x = n(388032),
    j = n(965365);
function I(e) {
    var t, n;
    let {
            id: I,
            widget: C,
            size: Z,
            locked: w,
            padding: N,
            borderWidth: T,
            opacity: _,
            horizontal: P,
            pinned: D,
            anchorTop: A,
            anchorLeft: R,
            showEmpty: k = !0,
        } = e,
        L = P ? b.C5.HORIZONTAL : b.C5.VERTICAL,
        M = L === b.C5.VERTICAL,
        V = (0, l.e7)([m.Z], () => {
            var e;
            let t = m.Z.getWidget(I);
            return !!(0, b.ZL)(t) && !w && (null == (e = t.meta.showAllStreams) || e);
        }, [I, w]),
        z = (0, l.e7)([g.Z], () => g.Z.getVoiceChannelId()),
        U = (0, l.e7)([f.Z], () => f.Z.getChannel(z)),
        {
            streamParticipants: W,
            activeStreams: G,
            participantsVersion: H,
        } = (function (e, t, n, i, o) {
            let a = (0, l.Wu)([p.Z], () => (null == e ? [] : p.Z.getAllActiveStreamsForChannel(e))),
                s = r.useMemo(() => new Set(a.map((e) => (0, c.V9)(e))), [a]),
                d = (0, l.e7)([u.Z], () => (null == e ? -1 : u.Z.getParticipantsVersion(e)));
            return {
                streamParticipants: (0, l.Wu)([u.Z], () => {
                    if (null == e) return [];
                    function r(e) {
                        return s.has((0, c.V9)(e.stream));
                    }
                    let l = u.Z.getStreamParticipants(e).filter((e) => e.user.id !== t && (!!n || r(e)));
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
            z,
            (0, l.e7)([h.default], () => h.default.getId()),
            V,
            (A && M) || (R && P),
            (!A && M) || (!R && P),
        ),
        F = W.length,
        Y = (0, l.e7)([d.Z], () => d.Z.getWindowState(S.$J), []),
        {
            tileWidth: B,
            tileHeight: Q,
            widgetWidth: K,
            widgetHeight: X,
            containerRef: q,
            containerMinMaxSizes: J,
        } = (0, v.Bz)({
            tileCount: F,
            padding: N,
            borderWidth: T,
            isVertical: M,
            widgetSize: Z,
        }),
        $ = {
            id: I,
            widget: C,
            layout: L,
            participants: W.length,
            padding: N,
            borderWidth: T,
            widgetMinMaxSizes: J,
            containerSize: {
                width: K,
                height: X,
            },
            orientedPosition: {
                top: 0,
                left: 0,
                bottom: null != (t = null == Y ? void 0 : Y.height) ? t : X,
                right: null != (n = null == Y ? void 0 : Y.width) ? n : K,
            },
            locked: w,
        };
    (0, v.Dl)({
        id: I,
        streamParticipants: W,
        layout: L,
        widgetLayoutSpecs: $,
    });
    let ee = null == U || (0 === G.size && w) || (0 === F && !w);
    return (r.useEffect(() => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !ee);
    }, [ee]),
    (0, s.ZP)(() => () => {
        a.Z.setGpuBoostRequested(O.zS.OVERLAY_VIDEO_STREAM_RENDERING, !1);
    }),
    (ee || !D) && w)
        ? null
        : ee && !w
          ? k
              ? w
                  ? null
                  : (0, i.jsx)(y.E, {
                        emptyText: x.intl.string(x.t["T6+rX1"]),
                        icon: o.hGI,
                        absolute: !0,
                    })
              : null
          : (0, i.jsx)("div", {
                className: j.goLiveGridContainer,
                style: { opacity: _ },
                ref: q,
                children: (0, i.jsx)(E.Z, {
                    widgetId: I,
                    tileWidth: B,
                    tileHeight: Q,
                    locked: w,
                    layout: L,
                    activeStreams: G,
                    streamParticipants: W,
                    participantsVersion: H,
                    pinned: D,
                    padding: N,
                }),
            });
}
