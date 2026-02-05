n.d(t, { A: () => V, r: () => z });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    d = n(442433),
    u = n(391973),
    c = n(765671),
    h = n(313961),
    A = n(164617),
    m = n(401901),
    g = n(87001),
    p = n(175203),
    f = n(163432),
    _ = n(734057),
    E = n(430452),
    x = n(309010),
    S = n(256415),
    I = n(996439),
    T = n(810412),
    C = n(799808),
    v = n(129537),
    y = n(412477),
    N = n(916494),
    O = n(897720),
    b = n(392164),
    j = n(652215),
    w = n(731854),
    L = n(985018),
    R = n(384339);
let D = l.memo(function (e) {
        let { participant: t, channel: n, context: l } = e,
            a = t.user?.id;
        return (0, r.bG)([E.A], () => null != t.user && null != l && null != n && E.A.isLocalVideoDisabled(a, l), [
            a,
            t.user,
            l,
            n,
        ])
            ? null
            : (0, i.jsx)(p.Ay, { ...e });
    }),
    M = l.memo(function (e) {
        let {
                context: t = w.x.DEFAULT,
                participants: a,
                locked: s,
                channel: r,
                width: o,
                height: u,
                shouldDisplay: c,
            } = e,
            h = l.useCallback(
                (e, l) => {
                    let a = e.user;
                    (0, T.YX)(j.uss.VIDEO, { type: T.Z5.CAMERA, value: T.IP.SETTINGS_OPENED, userId: a?.id }),
                        (0, d.L3)(l, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("99871")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: a,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, T.YX)(j.uss.VIDEO, {
                                            type: T.Z5.GO_LIVE,
                                            value: T.IP.ENABLED,
                                            userId: a?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            g = (0, T.Dk)(() => new Set(a.map((e) => e.user?.id)), [a]);
        l.useEffect(() => {
            c &&
                (0, T.Y)(j.uss.VIDEO, {
                    locked: S.default.isInstanceLocked(),
                    shownUserIds: Array.from(g),
                    liveUserIds: Array.from(g),
                    contentInventoryIds: [],
                });
        }, [g, c]);
        let p = l.useMemo(() => ({ width: o, height: u }), [o, u]);
        return (0, i.jsx)(i.Fragment, {
            children: a.map((e) =>
                (0, i.jsx)(
                    D,
                    {
                        participant: e,
                        width: o,
                        className: R.Vs,
                        containerStyle: p,
                        fit: m.$.COVER,
                        channel: r,
                        popoutType: A.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: s ? void 0 : h,
                        forceIdle: s,
                        paused: !c,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    k = l.memo(function (e) {
        let {
                context: t = w.x.DEFAULT,
                participants: n,
                participantsVersion: a,
                locked: r,
                widget: d,
                channel: u,
                width: c,
                height: h,
                showEmpty: A = !0,
                containerRef: m,
            } = e,
            g = "boolean" != typeof d.meta.horizontal || d.meta.horizontal,
            p = n.length > 0 && null != t && null != u && (!r || d.pinned);
        l.useEffect(() => {
            (0, C.j_)({ locked: r, pinned: d.pinned, widget: d.type, isPreviewingInGame: !1 }, p);
        }, [r, d, p]);
        let f = l.useMemo(() => ({ opacity: d.opacity }), [d.opacity]),
            _ = l.useMemo(() => s()({ [R.wb]: !0, [R.Vd]: !g, [R.R]: !p && r }), [g, p, r]);
        return 0 !== n.length || r
            ? null == u
                ? null
                : (0, i.jsx)("div", {
                      ref: m,
                      className: _,
                      style: f,
                      children: (0, i.jsx)(M, {
                          context: t,
                          participants: n,
                          locked: r,
                          channel: u,
                          width: c,
                          height: h,
                          shouldDisplay: p,
                          participantsVersion: a,
                      }),
                  })
            : A
              ? (0, i.jsx)("div", {
                    ref: m,
                    children: (0, i.jsx)(y.g, { emptyText: L.intl.string(L.t.aTiM42), icon: o.npA, absolute: !0 }),
                })
              : null;
    }),
    z = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: l, containerSpecs: a } = e;
        if (!(0, O.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            r = 2 * i + 2 * l,
            o = s
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + r) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + r) },
            d = { maxWidth: 0.75 * a.maxX, maxHeight: 0.75 * a.maxY };
        return (0, N.$G)(o, d);
    };
function V(e) {
    let t = (0, r.bG)([x.A, _.A], () => _.A.getChannel(x.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        a = t?.id,
        [s, o] = (0, r.bG)(
            [h.A],
            () => (null == a ? [[], 0] : [h.A.getVideoParticipants(a), h.A.getParticipantsVersion(a)]),
            [a],
            I.D,
        ),
        d = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: A = e.width - n, height: m = e.height - n, ref: p } = (0, c.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: E, visibleParticipants: S } = (0, f.i4)(d ? A : m, s, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o,
        }),
        T = (0, r.bG)([g.A], () => g.A.getWindowState(b.f)),
        C = {
            id: e.widget.id,
            containerSize: { containerHeight: m, containerWidth: A },
            sizeOffset: n,
            padding: e.padding,
            borderWidth: e.borderWidth,
            containerSpecs: { maxX: T?.width ?? e.width - n, maxY: T?.height ?? e.height - n, minX: 0, minY: 0 },
            widget: e.widget,
            orientedPosition: { top: 0, left: 0, bottom: T?.height ?? e.height, right: T?.width ?? e.width },
        };
    return (
        !(function (e) {
            let { horizontal: t, widget: n, widgetLayoutSpecs: i } = e,
                a = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                s = l.useRef(a);
            l.useLayoutEffect(() => void (s.current = a)),
                l.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: l,
                        widget: a,
                        widgetLayoutSpecs: r,
                    } = s.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = z({
                        ...r,
                        widget: a,
                        operation: v.P.RESIZE_NORTH,
                        computedSize: { width: l, height: i },
                        originSize: { width: l, height: i },
                    });
                    (0, u.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: d, widget: e.widget, widgetLayoutSpecs: C }),
        (0, i.jsx)(k, {
            ...e,
            channel: t,
            participants: S,
            participantsVersion: o,
            width: d ? E : (A ?? e.width),
            height: d ? (m ?? e.height) : E,
            containerRef: p,
        })
    );
}
