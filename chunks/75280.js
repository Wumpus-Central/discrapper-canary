n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(40153),
    o = n(397927),
    d = n(475743),
    u = n(652896),
    c = n(256415),
    h = n(810412),
    A = n(433560),
    m = n(324093),
    g = n(916494),
    p = n(897720),
    f = n(652215),
    _ = n(578950);
let E = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    x = l.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: a,
                layout: x,
                locked: S,
                activeStreams: I,
                streamParticipants: T,
                participantsVersion: C,
                pinned: y,
                padding: v,
            } = e,
            N = T.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: a,
                locked: S,
                widgetId: t,
                pinned: y,
            })),
            O = (0, d.A)(n),
            j = (0, d.A)(S),
            b = x === p.IV.VERTICAL,
            w = S || j !== S || O !== n,
            L = l.useMemo(() => {
                let e = 0,
                    t = 0;
                return b
                    ? N.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? v : 0)) - t.height, x: 0 }))
                    : N.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? v : 0)) - e.width, y: 0 }));
            }, [N, v, b]),
            R = l.useMemo(
                () =>
                    0 === L.length
                        ? (0, g.uc)(m.Ub)
                        : L.reduce((e, t) => e + t.height, 0) + (b ? v * (L.length - 1) : 0),
                [L, b, v],
            ),
            D = l.useMemo(
                () => (0 === L.length ? m.Ub : L.reduce((e, t) => e + t.width, 0) + (b ? 0 : v * (L.length - 1))),
                [L, b, v],
            ),
            M = (0, o.pnh)(
                L,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: l } = e;
                        return { x: t, y: n, width: i, height: l, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: l } = e;
                        return { x: t, y: n, width: i, height: l };
                    },
                    config: E,
                    trail: 100 * !w,
                },
                w ? "animate-never" : "respect-motion-settings",
            ),
            k = (0, h.Dk)(() => new Set(T.map((e) => e.user.id)), [T, C]),
            z = (0, h.Dk)(() => new Set(T.filter((e) => I.has((0, u._z)(e.stream))).map((e) => e.user.id)), [T, I, C]);
        return (
            l.useEffect(() => {
                0 !== k.size &&
                    (0, h.Y)(f.uss.GO_LIVE, {
                        locked: c.default.isInstanceLocked(),
                        shownUserIds: Array.from(k),
                        liveUserIds: Array.from(z),
                        contentInventoryIds: [],
                    });
            }, [k, z]),
            (0, i.jsx)("div", {
                className: s()({ [_.UT]: !0, [_.Vd]: b, [_.xM]: !b }),
                style: b ? { height: R } : { width: D },
                children: M((e, t, l, s) =>
                    (0, i.jsx)(r.animated.div, {
                        className: _.ux,
                        style: Object.assign({}, e, { width: n, height: a, zIndex: N.length - s }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: l, widgetId: a, pinned: s } = e;
                            return (0, i.jsx)("div", {
                                className: _.iA,
                                children: (0, i.jsx)(
                                    A.d,
                                    { participant: t, width: n, locked: l, widgetId: a, pinned: s },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
