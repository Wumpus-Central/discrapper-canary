n.d(t, { A: () => P, r: () => k });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(442433),
    u = n(391973),
    c = n(765671),
    h = n(313961),
    g = n(164617),
    m = n(401901),
    p = n(87001),
    A = n(175203),
    x = n(163432),
    f = n(734057),
    E = n(430452),
    S = n(309010),
    I = n(256415),
    T = n(996439),
    v = n(810412),
    C = n(799808),
    j = n(129537),
    y = n(412477),
    w = n(916494),
    _ = n(897720),
    O = n(392164),
    N = n(652215),
    b = n(731854),
    R = n(985018),
    M = n(144660);
let L = s.memo(function (e) {
        let { participant: t, channel: n, context: s } = e,
            l = t.user?.id;
        return (0, a.bG)([E.Ay], () => null != t.user && null != s && null != n && E.Ay.isLocalVideoDisabled(l, s), [
            l,
            t.user,
            s,
            n,
        ])
            ? null
            : (0, i.jsx)(A.Ay, { ...e });
    }),
    z = s.memo(function (e) {
        let {
                context: t = b.x.DEFAULT,
                participants: l,
                locked: r,
                channel: a,
                width: o,
                height: u,
                shouldDisplay: c,
            } = e,
            h = s.useCallback(
                (e, s) => {
                    let l = e.user;
                    (0, v.YX)(N.uss.VIDEO, { type: v.Z5.CAMERA, value: v.IP.SETTINGS_OPENED, userId: l?.id }),
                        (0, d.L3)(s, async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("87997"), n.e("77012")]).then(
                                n.bind(n, 180812),
                            );
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    user: l,
                                    mediaEngineContext: t,
                                    onWatchStream: () => {
                                        (0, v.YX)(N.uss.VIDEO, {
                                            type: v.Z5.GO_LIVE,
                                            value: v.IP.ENABLED,
                                            userId: l?.id,
                                        });
                                    },
                                });
                        });
                },
                [t],
            ),
            p = (0, v.Dk)(() => new Set(l.map((e) => e.user?.id)), [l]);
        s.useEffect(() => {
            c &&
                (0, v.Y)(N.uss.VIDEO, {
                    locked: I.default.isInstanceLocked(),
                    shownUserIds: Array.from(p),
                    liveUserIds: Array.from(p),
                    contentInventoryIds: [],
                });
        }, [p, c]);
        let A = s.useMemo(() => ({ width: o, height: u }), [o, u]);
        return (0, i.jsx)(i.Fragment, {
            children: l.map((e) =>
                (0, i.jsx)(
                    L,
                    {
                        participant: e,
                        width: o,
                        className: M.Vs,
                        containerStyle: A,
                        fit: m.$.COVER,
                        channel: a,
                        popoutType: g.N.OVERLAY,
                        inCall: !0,
                        noBorder: !0,
                        onContextMenu: r ? void 0 : h,
                        forceIdle: r,
                        paused: !c,
                        context: t,
                    },
                    e.id,
                ),
            ),
        });
    }),
    D = s.memo(function (e) {
        let {
                context: t = b.x.DEFAULT,
                participants: n,
                participantsVersion: l,
                locked: a,
                widget: d,
                channel: u,
                width: c,
                height: h,
                showEmpty: g = !0,
                containerRef: m,
            } = e,
            p = "boolean" != typeof d.meta.horizontal || d.meta.horizontal,
            A = n.length > 0 && null != t && null != u && (!a || d.pinned);
        s.useEffect(() => {
            (0, C.j_)({ locked: a, pinned: d.pinned, widget: d.type, isPreviewingInGame: !1 }, A);
        }, [a, d, A]);
        let x = s.useMemo(() => ({ opacity: d.opacity }), [d.opacity]),
            f = s.useMemo(() => r()({ [M.wb]: !0, [M.Vd]: !p, [M.R]: !A && a }), [p, A, a]);
        return 0 !== n.length || a
            ? null == u
                ? null
                : (0, i.jsx)("div", {
                      ref: m,
                      className: f,
                      style: x,
                      children: (0, i.jsx)(z, {
                          context: t,
                          participants: n,
                          locked: a,
                          channel: u,
                          width: c,
                          height: h,
                          shouldDisplay: A,
                          participantsVersion: l,
                      }),
                  })
            : g
              ? (0, i.jsx)("div", {
                    ref: m,
                    children: (0, i.jsx)(y.g, { emptyText: R.intl.string(R.t.aTiM42), icon: o.npA, absolute: !0 }),
                })
              : null;
    }),
    k = (e) => {
        let { widget: t, computedSize: n, borderWidth: i, padding: s, containerSpecs: l } = e;
        if (!(0, _.cv)(t)) return n;
        let r = "boolean" != typeof t.meta.horizontal || t.meta.horizontal,
            a = 2 * i + 2 * s,
            o = r
                ? { width: Math.max(n.width, 192), height: Math.min(n.height, 240 + a) }
                : { height: Math.max(n.height, 192), width: Math.min(n.width, 240 + a) },
            d = { maxWidth: 0.75 * l.maxX, maxHeight: 0.75 * l.maxY };
        return (0, w.$G)(o, d);
    };
function P(e) {
    let t = (0, a.bG)([S.A, f.A], () => f.A.getChannel(S.A.getVoiceChannelId())),
        n = 2 * e.padding + 2 * e.borderWidth,
        l = t?.id,
        [r, o] = (0, a.bG)(
            [h.A],
            () => (null == l ? [[], 0] : [h.A.getVideoParticipants(l), h.A.getParticipantsVersion(l)]),
            [l],
            T.D,
        ),
        d = "boolean" != typeof e.widget.meta.horizontal || e.widget.meta.horizontal,
        { width: g = e.width - n, height: m = e.height - n, ref: A } = (0, c.Ay)(e.locked, e.widget.pinned),
        { participantTileWidth: E, visibleParticipants: I } = (0, x.i4)(d ? g : m, r, {
            tileWidth: 192,
            tileMinWidth: 120,
            tileMargin: 4,
            limit: 8,
            cropSelfVideo: !0,
            version: o,
        }),
        v = (0, a.bG)([p.A], () => p.A.getWindowState(O.f)),
        C = {
            id: e.widget.id,
            containerSize: { containerHeight: m, containerWidth: g },
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
                l = {
                    id: n.id,
                    size: n.size,
                    containerWidth: i.containerSize.containerWidth,
                    containerHeight: i.containerSize.containerHeight,
                    widget: n,
                    widgetLayoutSpecs: i,
                },
                r = s.useRef(l);
            s.useLayoutEffect(() => void (r.current = l)),
                s.useLayoutEffect(() => {
                    let {
                        size: e,
                        id: n,
                        containerWidth: i,
                        containerHeight: s,
                        widget: l,
                        widgetLayoutSpecs: a,
                    } = r.current;
                    if (!((t && e.height > e.width) || (!t && e.width > e.height))) return;
                    let { width: o, height: d } = k({
                        ...a,
                        widget: l,
                        operation: j.P.RESIZE_NORTH,
                        computedSize: { width: s, height: i },
                        originSize: { width: s, height: i },
                    });
                    (0, u.Ju)({ widgetId: n, size: { fixed: !0, width: o, height: d } });
                }, [t]);
        })({ horizontal: d, widget: e.widget, widgetLayoutSpecs: C }),
        (0, i.jsx)(D, {
            ...e,
            channel: t,
            participants: I,
            participantsVersion: o,
            width: d ? E : (g ?? e.width),
            height: d ? (m ?? e.height) : E,
            containerRef: A,
        })
    );
}
