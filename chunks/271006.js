n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(580929),
    o = n(939249),
    c = n(17928),
    d = n(866323),
    u = n(175841),
    h = n(834730),
    p = n(734057),
    m = n(309010),
    A = n(927813),
    x = n(935208),
    g = n(446243),
    f = n(872772),
    C = n(360729),
    j = n(884863),
    y = n(662731),
    v = n(375708),
    E = n(755873),
    N = n(880872),
    I = n(849351),
    T = n(572316),
    b = n(192063);
let _ = {
        0: { src: T.A, alt: y.default.IrukuA },
        1: { src: I.A, alt: y.default.yITFQ7 },
        2: { src: N.A, alt: y.default.uUhyVw },
    },
    S = 30 * A.A.Millis.MINUTE,
    R = A.A.Millis.HOUR;
function P(e) {
    let t = (function (e) {
        if (null != e) return null != e.updatedAt ? e.updatedAt.getTime() : x.default.extractTimestamp(e.objectId);
    })(e);
    if (null == t) return { stage: 0, timeUntilNextStage: null };
    let n = Date.now() - t;
    return n < S
        ? { stage: 0, timeUntilNextStage: S - n }
        : n < R
          ? { stage: 1, timeUntilNextStage: R - n }
          : { stage: 2, timeUntilNextStage: null };
}
function O(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: c, disabled: p, plantWidth: m } = e,
        [A, x] = l.useState(P(a).stage),
        C = l.useRef([]),
        N = l.useCallback(
            (e) => {
                if (C.current.length > 0 || e === A) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(A, e);
                (C.current = n), x(t);
            },
            [A],
        ),
        I = (0, d.p)(
            A,
            {
                initial: { opacity: 1 },
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 1e3 },
                onRest: () => {
                    let e = C.current.shift();
                    null != e && x(e);
                },
            },
            "respect-motion-settings",
        ),
        T = l.useCallback(() => {
            let { stage: e } = P(a);
            N(e);
        }, [a, N]);
    l.useEffect(() => {
        let { stage: e, timeUntilNextStage: t } = P(a),
            n = setTimeout(() => T(), (null != a && A > e) || null == t ? 0 : t);
        return () => {
            clearTimeout(n);
        };
    }, [a, A, T]);
    let S = l.useCallback(() => {
        a?.objectId != null && (0, g.Xh)(t, n, a.objectId, { object_type: f.N.PLANT });
    }, [a, t, n]);
    return (0, i.jsxs)(j.T, {
        centerSingleItem: !0,
        children: [
            (0, i.jsx)(j.T.Trigger, {
                children: (e) => {
                    let { ref: t, onClick: n, ...l } = e;
                    return (0, i.jsxs)(o.D, {
                        className: s()(E.CV, E.AA, p && E.r9),
                        style: { left: `${c.x}%`, bottom: `${c.y}%`, width: `${m}px` },
                        innerRef: (e) => {
                            t.current = e;
                        },
                        onClick: p ? void 0 : n,
                        "aria-disabled": p,
                        ...l,
                        children: [
                            I((e, t) => {
                                let { src: n, alt: l } = _[t],
                                    a = t === A;
                                return (0, i.jsx)(r.animated.img, {
                                    className: s()(E.zs, { [E.tB]: !a }),
                                    style: { opacity: e.opacity },
                                    src: n,
                                    alt: v.intl.string(l),
                                    draggable: !1,
                                });
                            }),
                            (0, i.jsx)("img", {
                                className: E.tB,
                                src: b.A,
                                alt: v.intl.string(y.default.cPQCeg),
                                draggable: !1,
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(j.T.Popup, {
                "aria-label": v.intl.string(y.default.B0gnKP),
                children: (0, i.jsx)(j.T.Item, {
                    icon: (0, i.jsx)(u.B, { size: "xs", color: "currentColor" }),
                    onClick: S,
                    children: (0, i.jsx)(h.E, { variant: "text-md/normal", children: v.intl.string(y.default.aduS3B) }),
                }),
            }),
        ],
    });
}
function L(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: E.CV,
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: E.zs, src: T.A, alt: v.intl.string(y.default.IrukuA), draggable: !1 }),
            (0, i.jsx)("img", { className: E.tB, src: b.A, alt: v.intl.string(y.default.cPQCeg), draggable: !1 }),
        ],
    });
}
function w(e) {
    let { channelId: t, plants: n, plantConfig: a, roomWidth: s, roomHeight: r, aspectRatio: o } = e,
        d = (0, c.bG)([p.A], () => p.A.getChannel(t)?.guild_id),
        u = a.map((e, t) => ({ plantPosition: e, plant: n[t] })),
        { experimental: h } = C.A.useExperiment({ guildId: d, location: "GuildRoomPlants" }),
        A = (0, c.bG)([m.A], () => m.A.getVoiceChannelId() === t),
        x = (s / r > o ? r * o : s) * 0.0625;
    return (l.useEffect(() => {
        h &&
            Object.values(_).forEach((e) => {
                let { src: t } = e;
                new Image().src = t;
            });
    }, [h]),
    null == d)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, n) => {
                  let { plant: l, plantPosition: a } = e;
                  return h
                      ? (0, i.jsx)(
                            O,
                            { guildId: d, channelId: t, plant: l, plantPosition: a, disabled: !A, plantWidth: x },
                            `${l?.objectId}-${n}`,
                        )
                      : (0, i.jsx)(L, { plantPosition: a, plantWidth: x }, n);
              }),
          });
}
