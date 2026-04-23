n.d(t, { A: () => L, r: () => P });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(311907),
    o = n(428689),
    d = n(442433),
    c = n(391973),
    u = n(765671),
    h = n(313961),
    m = n(164617),
    p = n(401901),
    g = n(87001),
    f = n(175203),
    _ = n(163432),
    x = n(734057),
    A = n(430452),
    E = n(309010),
    S = n(256415),
    I = n(996439),
    v = n(810412),
    b = n(799808),
    C = n(129537),
    T = n(412477),
    j = n(916494),
    y = n(897720),
    w = n(392164),
    N = n(652215),
    R = n(731854),
    M = n(985018),
    O = n(521380);
let k = r.memo(function (e) {
        let { participant: t, channel: n, context: r } = e,
            a = t.user?.id;
        return (0, l.bG)([A.Ay], () => null != t.user && null != r && null != n && A.Ay.isLocalVideoDisabled(a, r), [
            a,
            t.user,
            r,
            n,
        ])
            ? null
            : (0, i.jsx)(f.Ay, { ...e });
    }),
    D = r.memo(function (e) {
        let {
                context: t = R.x.DEFAULT,
                participants: a,
                locked: s,
                channel: l,
                width: o,
                height: c,
                shouldDisplay: u,
            } = e,
            h = r.useCallback(
                (e, r) => {
                    let a = e.user;
                    (0, v.YX)(N.uss.VIDEO, { type: v.Z5.CAMERA, value: v.IP.SETTINGS_OPENED, userId: a?.id }),
                        (0, d.L3)(r, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("87997")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: a,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, v.YX)(N.uss.VIDEO, {
                                            type: v.Z5.GO_LIVE,
                                            value: v.IP.ENABLED,
                                            userId: a?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            g = (0, v.Dk)(() => new Set(a.map((e) => e.user?.id)), [a]);
        r.useEffect(() => {
            u &&
                (0, v.Y)(N.uss.VIDEO, {
                    locked: S.default.isInstanceLocked(),
                    shownUserIds: Array.from(g),
                    liveUserIds: Array.from(g),
                    contentInventoryIds: [],
                });
        }, [g, u]);
        let f = r.useMemo(() => ({ width: o, height: c }), [o, c]);
        return (0, i.jsx)(i.Fragment, {
            children: a.map((e) =>
                (0, i.jsx)(
                    k,
                    {
                        participant: e,
                        width: o,
                        className: O.Vs,
                        containerStyle: f,
                        fit: p.$.COVER,
                        channel: l,
                        popoutType: m.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: s ? void 0 : h,
                        forceIdle: s,
                        paused: !u,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    z = r.memo(function (e) {
        let {
                context: t = R.x.DEFAULT,
                participants: n,
                participantsVersion: a,
                locked: l,
                widget: d,
                channel: c,
                width: u,
                height: h,
                showEmpty: m = !0,
                containerRef: p,
            } = e,
            g = "boolean" != typeof d.meta.horizontal || d.meta.horizontal,
            f = n.length > 0 && null != t && null != c && (!l || d.pinned);
        r.useEffect(() => {
            (0, b.j_)({ locked: l, pinned: d.pinned, widget: d.type, isPreviewingInGame: !1 }, f);
        }, [l, d, f]);
        let _ = r.useMemo(() => ({ opacity: d.opacity }), [d.opacity]),
            x = r.useMemo(() => s()({ [O.wb]: !0, [O.Vd]: !g, [O.R]: !f && l }), [g, f, l]);
        return 0 !== n.length || l
            ? null == c
                ? null
                : (0, i.jsx)("div", {
                      ref: p,
                      className: x,
                      style: _,
                      children: (0, i.jsx)(D, {
                          context: t,
                          participants: n,
                          locked: l,
                          channel: c,
                          width: u,
                          height: h,
                          shouldDisplay: f,
                          participantsVersion: a,
                      }),
                  })
            : m
              ? (0, i.jsx)("div", {
                    ref: p,
                    children: (0, i.jsx)(T.g, { emptyText: M.intl.string(M.t.aTiM42), icon: o.n, absolute: !0 }),
                })
              : null;
    }),
    P = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: r, containerSpecs: a } = e;
        if (!(0, y.cv)(t)) return n;
        let s = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            l = 2 * i + 2 * r,
            o = s
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + l) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + l) },
            d = { maxWidth: 0.75 * a.maxX, maxHeight: 0.75 * a.maxY };
        return (0, j.$G)(o, d);
    };
function L(e) {
    let t = (0, l.bG)([E.A, x.A], () => x.A.getChannel(E.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        a = t?.id,
        [s, o] = (0, l.bG)(
            [h.A],
            () => (null == a ? [[], 0] : [h.A.getVideoParticipants(a), h.A.getParticipantsVersion(a)]),
            [a],
            I.D,
        ),
        d = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: m = e.width - n, height: p = e.height - n, ref: f } = (0, u.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: A, visibleParticipants: S } = (0, _.i4)(d ? m : p, s, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o,
        }),
        v = (0, l.bG)([g.A], () => g.A.getWindowState(w.f)),
        b = {
            id: e.widget.id,
            containerSize: { containerHeight: p, containerWidth: m },
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
                a = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                s = r.useRef(a);
            r.useLayoutEffect(() => void (s.current = a)),
                r.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: r,
                        widget: a,
                        widgetLayoutSpecs: l,
                    } = s.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = P({
                        ...l,
                        widget: a,
                        operation: C.P.RESIZE_NORTH,
                        computedSize: { width: r, height: i },
                        originSize: { width: r, height: i },
                    });
                    (0, c.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: d, widget: e.widget, widgetLayoutSpecs: b }),
        (0, i.jsx)(z, {
            ...e,
            channel: t,
            participants: S,
            participantsVersion: o,
            width: d ? A : (m ?? e.width),
            height: d ? (p ?? e.height) : A,
            containerRef: f,
        })
    );
}
