n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(382222),
    o = n(397927),
    d = n(475743),
    u = n(652896),
    c = n(256415),
    h = n(810412),
    g = n(433560),
    m = n(324093),
    p = n(916494),
    A = n(897720),
    x = n(652215),
    E = n(456847);
let f = { mass: 1, tension: 250, friction: 18, clamp: !0 },
    S = s.memo(function (e) {
        let {
                widgetId: t,
                tileWidth: n,
                tileHeight: l,
                layout: S,
                locked: I,
                activeStreams: T,
                streamParticipants: v,
                participantsVersion: C,
                pinned: j,
                padding: y,
            } = e,
            w = v.map((e) => ({
                participant: e,
                key: e.user.id,
                width: n,
                height: l,
                locked: I,
                widgetId: t,
                pinned: j,
            })),
            O = (0, d.A)(n),
            _ = (0, d.A)(I),
            N = S === A.IV.VERTICAL,
            b = I || _ !== I || O !== n,
            R = s.useMemo(() => {
                let e = 0,
                    t = 0;
                return N
                    ? w.map((t, n) => ({ ...t, y: (e += t.height + (n > 0 ? y : 0)) - t.height, x: 0 }))
                    : w.map((e, n) => ({ ...e, x: (t += e.width + (n > 0 ? y : 0)) - e.width, y: 0 }));
            }, [w, y, N]),
            M = s.useMemo(
                () =>
                    0 === R.length
                        ? (0, p.uc)(m.Ub)
                        : R.reduce((e, t) => e + t.height, 0) + (N ? y * (R.length - 1) : 0),
                [R, N, y],
            ),
            L = s.useMemo(
                () => (0 === R.length ? m.Ub : R.reduce((e, t) => e + t.width, 0) + (N ? 0 : y * (R.length - 1))),
                [R, N, y],
            ),
            z = (0, o.pnh)(
                R,
                {
                    key: (e) => e.key,
                    from: { height: 0, opacity: 0 },
                    leave: { height: 0, opacity: 0 },
                    enter: (e) => {
                        let { x: t, y: n, width: i, height: s } = e;
                        return { x: t, y: n, width: i, height: s, opacity: 1 };
                    },
                    update: (e) => {
                        let { x: t, y: n, width: i, height: s } = e;
                        return { x: t, y: n, width: i, height: s };
                    },
                    config: f,
                    trail: 100 * !b,
                },
                b ? "animate-never" : "respect-motion-settings",
            ),
            D = (0, h.Dk)(() => new Set(v.map((e) => e.user.id)), [v, C]),
            k = (0, h.Dk)(() => new Set(v.filter((e) => T.has((0, u._z)(e.stream))).map((e) => e.user.id)), [v, T, C]);
        return (
            s.useEffect(() => {
                0 !== D.size &&
                    (0, h.Y)(x.uss.GO_LIVE, {
                        locked: c.default.isInstanceLocked(),
                        shownUserIds: Array.from(D),
                        liveUserIds: Array.from(k),
                        contentInventoryIds: [],
                    });
            }, [D, k]),
            (0, i.jsx)("div", {
                className: r()({ [E.UT]: !0, [E.Vd]: N, [E.xM]: !N }),
                style: N ? { height: M } : { width: L },
                children: z((e, t, s, r) =>
                    (0, i.jsx)(a.animated.div, {
                        className: E.ux,
                        style: Object.assign({}, e, { width: n, height: l, zIndex: w.length - r }),
                        children: ((e) => {
                            let { participant: t, width: n, locked: s, widgetId: l, pinned: r } = e;
                            return (0, i.jsx)("div", {
                                className: E.iA,
                                children: (0, i.jsx)(
                                    g.d,
                                    { participant: t, width: n, locked: s, widgetId: l, pinned: r },
                                    t.user.id,
                                ),
                            });
                        })(t),
                    }),
                ),
            })
        );
    });
