n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(419354),
    o = n(866323),
    d = n(475743),
    c = n(652896),
    u = n(256415),
    h = n(810412),
    m = n(433560),
    p = n(324093),
    g = n(916494),
    f = n(897720),
    _ = n(652215),
    x = n(220959);
let A = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    E = r.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: a,
                layout: E,
                locked: S,
                activeStreams: I,
                streamParticipants: v,
                participantsVersion: b,
                pinned: C,
                padding: T,
            } = e,
            j = v.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: a,
                locked: S,
                widgetId: t,
                pinned: C,
            })),
            y = (0, d.A)(n),
            w = (0, d.A)(S),
            N = E === f.IV.VERTICAL,
            R = S || w !== S || y !== n,
            M = r.useMemo(() => {
                let e = 0,
                    t = 0;
                return N
                    ? j.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? T : 0)) - t.height, x: 0 }))
                    : j.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? T : 0)) - e.width, y: 0 }));
            }, [j, T, N]),
            O = r.useMemo(
                () =>
                    0 === M.length
                        ? (0, g.uc)(p.Ub)
                        : M.reduce((e, t) => e + t.height, 0) + (N ? T * (M.length - 1) : 0),
                [M, N, T],
            ),
            k = r.useMemo(
                () => (0 === M.length ? p.Ub : M.reduce((e, t) => e + t.width, 0) + (N ? 0 : T * (M.length - 1))),
                [M, N, T],
            ),
            D = (0, o.p)(
                M,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: r } = e;
                        return { x: t, y: n, width: i, height: r };
                    },
                    config: A,
                    trail: 100 * !R,
                },
                R ? "animate-never" : "respect-motion-settings",
            ),
            z = (0, h.Dk)(() => new Set(v.map((e) => e.user.id)), [v, b]),
            P = (0, h.Dk)(() => new Set(v.filter((e) => I.has((0, c._z)(e.stream))).map((e) => e.user.id)), [v, I, b]);
        return (
            r.useEffect(() => {
                0 !== z.size &&
                    (0, h.Y)(_.uss.GO_LIVE, {
                        locked: u.default.isInstanceLocked(),
                        shownUserIds: Array.from(z),
                        liveUserIds: Array.from(P),
                        contentInventoryIds: [],
                    });
            }, [z, P]),
            (0, i.jsx)("div", {
                className: s()({ [x.UT]: !0, [x.Vd]: N, [x.xM]: !N }),
                style: N ? { height: O } : { width: k },
                children: D((e, t, r, s) =>
                    (0, i.jsx)(l.animated.div, {
                        className: x.ux,
                        style: Object.assign({}, e, { width: n, height: a, zIndex: j.length - s }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: r, widgetId: a, pinned: s } = e;
                            return (0, i.jsx)("div", {
                                className: x.iA,
                                children: (0, i.jsx)(
                                    m.d,
                                    { participant: t, width: n, locked: r, widgetId: a, pinned: s },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
