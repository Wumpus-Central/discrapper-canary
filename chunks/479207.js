n.d(t, { A: () => G, r: () => M });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(311907),
    o = n(397927),
    d = n(442433),
    c = n(391973),
    u = n(765671),
    _ = n(313961),
    h = n(164617),
    m = n(401901),
    f = n(87001),
    p = n(175203),
    g = n(163432),
    A = n(734057),
    x = n(430452),
    I = n(309010),
    E = n(256415),
    b = n(996439),
    v = n(810412),
    S = n(799808),
    C = n(129537),
    y = n(412477),
    T = n(916494),
    N = n(897720),
    w = n(392164),
    L = n(652215),
    j = n(731854),
    O = n(985018),
    P = n(84425);
let R = a.memo(function (e) {
        let { participant: t, channel: n, context: a } = e,
            r = t.user?.id;
        return (0, s.bG)([x.Ay], () => null != t.user && null != a && null != n && x.Ay.isLocalVideoDisabled(r, a), [
            r,
            t.user,
            a,
            n,
        ])
            ? null
            : (0, i.jsx)(p.Ay, { ...e });
    }),
    D = a.memo(function (e) {
        let {
                context: t = j.x.DEFAULT,
                participants: r,
                locked: l,
                channel: s,
                width: o,
                height: c,
                shouldDisplay: u,
            } = e,
            _ = a.useCallback(
                (e, a) => {
                    let r = e.user;
                    (0, v.YX)(L.uss.VIDEO, { type: v.Z5.CAMERA, value: v.IP.SETTINGS_OPENED, userId: r?.id }),
                        (0, d.L3)(a, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("7202")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: r,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, v.YX)(L.uss.VIDEO, {
                                            type: v.Z5.GO_LIVE,
                                            value: v.IP.ENABLED,
                                            userId: r?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            f = (0, v.Dk)(() => new Set(r.map((e) => e.user?.id)), [r]);
        a.useEffect(() => {
            u &&
                (0, v.Y)(L.uss.VIDEO, {
                    locked: E.default.isInstanceLocked(),
                    shownUserIds: Array.from(f),
                    liveUserIds: Array.from(f),
                    contentInventoryIds: [],
                });
        }, [f, u]);
        let p = a.useMemo(() => ({ width: o, height: c }), [o, c]);
        return (0, i.jsx)(i.Fragment, {
            children: r.map((e) =>
                (0, i.jsx)(
                    R,
                    {
                        participant: e,
                        width: o,
                        className: P.Vs,
                        containerStyle: p,
                        fit: m.$.COVER,
                        channel: s,
                        popoutType: h.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: l ? void 0 : _,
                        forceIdle: l,
                        paused: !u,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    k = a.memo(function (e) {
        let {
                context: t = j.x.DEFAULT,
                participants: n,
                participantsVersion: r,
                locked: s,
                widget: d,
                channel: c,
                width: u,
                height: _,
                showEmpty: h = !0,
                containerRef: m,
            } = e,
            f = "boolean" != typeof d.meta.horizontal || d.meta.horizontal,
            p = n.length > 0 && null != t && null != c && (!s || d.pinned);
        a.useEffect(() => {
            (0, S.j_)({ locked: s, pinned: d.pinned, widget: d.type, isPreviewingInGame: !1 }, p);
        }, [s, d, p]);
        let g = a.useMemo(() => ({ opacity: d.opacity }), [d.opacity]),
            A = a.useMemo(() => l()({ [P.wb]: !0, [P.Vd]: !f, [P.R]: !p && s }), [f, p, s]);
        return 0 !== n.length || s
            ? null == c
                ? null
                : (0, i.jsx)("div", {
                      ref: m,
                      className: A,
                      style: g,
                      children: (0, i.jsx)(D, {
                          context: t,
                          participants: n,
                          locked: s,
                          channel: c,
                          width: u,
                          height: _,
                          shouldDisplay: p,
                          participantsVersion: r,
                      }),
                  })
            : h
              ? (0, i.jsx)("div", {
                    ref: m,
                    children: (0, i.jsx)(y.g, { emptyText: O.intl.string(O.t.aTiM42), icon: o.npA, absolute: !0 }),
                })
              : null;
    }),
    M = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: a, containerSpecs: r } = e;
        if (!(0, N.cv)(t)) return n;
        let l = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            s = 2 * i + 2 * a,
            o = l
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + s) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + s) },
            d = { maxWidth: 0.75 * r.maxX, maxHeight: 0.75 * r.maxY };
        return (0, T.$G)(o, d);
    };
function G(e) {
    let t = (0, s.bG)([I.A, A.A], () => A.A.getChannel(I.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        r = t?.id,
        [l, o] = (0, s.bG)(
            [_.A],
            () => (null == r ? [[], 0] : [_.A.getVideoParticipants(r), _.A.getParticipantsVersion(r)]),
            [r],
            b.D,
        ),
        d = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: h = e.width - n, height: m = e.height - n, ref: p } = (0, u.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: x, visibleParticipants: E } = (0, g.i4)(d ? h : m, l, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o,
        }),
        v = (0, s.bG)([f.A], () => f.A.getWindowState(w.f)),
        S = {
            id: e.widget.id,
            containerSize: { containerHeight: m, containerWidth: h },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: v?.width ?? e.width - n, maxY: v?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: v?.height ?? e.height, right: v?.width ?? e.width },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                r = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                l = a.useRef(r);
            a.useLayoutEffect(() => void (l.current = r)),
                a.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: a,
                        widget: r,
                        widgetLayoutSpecs: s,
                    } = l.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = M({
                        ...s,
                        widget: r,
                        operation: C.P.RESIZE_NORTH,
                        computedSize: { width: a, height: i },
                        originSize: { width: a, height: i },
                    });
                    (0, c.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: d, widget: e.widget, widgetLayoutSpecs: S }),
        (0, i.jsx)(k, {
            ...e,
            channel: t,
            participants: E,
            participantsVersion: o,
            width: d ? x : (h ?? e.width),
            height: d ? (m ?? e.height) : x,
            containerRef: p,
        })
    );
}
