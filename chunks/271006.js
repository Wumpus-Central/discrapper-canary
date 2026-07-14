n.d(t, { A: () => L }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(580929),
    o = n(939249),
    c = n(17928),
    d = n(866323),
    u = n(175841),
    h = n(734057),
    p = n(309010),
    m = n(927813),
    A = n(935208),
    x = n(446243),
    g = n(872772),
    f = n(360729),
    C = n(884863),
    j = n(662731),
    y = n(375708),
    v = n(755873),
    E = n(880872),
    N = n(849351),
    I = n(572316),
    T = n(192063);
let b = {
        0: { src: I.A, alt: j.default.IrukuA },
        1: { src: N.A, alt: j.default.yITFQ7 },
        2: { src: E.A, alt: j.default.uUhyVw },
    },
    _ = 30 * m.A.Millis.MINUTE,
    S = m.A.Millis.HOUR;
function R(e) {
    let t = (function (e) {
        if (null != e) return null != e.updatedAt ? e.updatedAt.getTime() : A.default.extractTimestamp(e.objectId);
    })(e);
    if (null == t) return { stage: 0, timeUntilNextStage: null };
    let n = Date.now() - t;
    return n < _
        ? { stage: 0, timeUntilNextStage: _ - n }
        : n < S
          ? { stage: 1, timeUntilNextStage: S - n }
          : { stage: 2, timeUntilNextStage: null };
}
function P(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: c, disabled: h, plantWidth: p } = e,
        [m, A] = l.useState(R(a).stage),
        f = l.useRef([]),
        E = l.useCallback(
            (e) => {
                if (f.current.length > 0 || e === m) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(m, e);
                (f.current = n), A(t);
            },
            [m],
        ),
        N = (0, d.p)(
            m,
            {
                initial: { opacity: 1 },
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 1e3 },
                onRest: () => {
                    let e = f.current.shift();
                    null != e && A(e);
                },
            },
            "respect-motion-settings",
        ),
        I = l.useCallback(() => {
            let { stage: e } = R(a);
            E(e);
        }, [a, E]);
    l.useEffect(() => {
        let { stage: e, timeUntilNextStage: t } = R(a),
            n = setTimeout(() => I(), (null != a && m > e) || null == t ? 0 : t);
        return () => {
            clearTimeout(n);
        };
    }, [a, m, I]);
    let _ = l.useCallback(() => {
        a?.objectId != null && (0, x.Xh)(t, n, a.objectId, { object_type: g.N.PLANT });
    }, [a, t, n]);
    return (0, i.jsxs)(C.T, {
        centerSingleItem: !0,
        children: [
            (0, i.jsx)(C.T.Trigger, {
                children: (e) => {
                    let { ref: t, onClick: n, ...l } = e;
                    return (0, i.jsxs)(o.D, {
                        className: s()(v.CV, v.AA, h && v.r9),
                        style: { left: `${c.x}%`, bottom: `${c.y}%`, width: `${p}px` },
                        innerRef: (e) => {
                            t.current = e;
                        },
                        onClick: h ? void 0 : n,
                        "aria-disabled": h,
                        ...l,
                        children: [
                            N((e, t) => {
                                let { src: n, alt: l } = b[t],
                                    a = t === m;
                                return (0, i.jsx)(r.animated.img, {
                                    className: s()(v.zs, { [v.tB]: !a }),
                                    style: { opacity: e.opacity },
                                    src: n,
                                    alt: y.intl.string(l),
                                    draggable: !1,
                                });
                            }),
                            (0, i.jsx)("img", {
                                className: v.tB,
                                src: T.A,
                                alt: y.intl.string(j.default.cPQCeg),
                                draggable: !1,
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(C.T.Popup, {
                "aria-label": y.intl.string(j.default.B0gnKP),
                children: (0, i.jsx)(C.T.Item, {
                    icon: u.B,
                    text: y.intl.string(j.default.aduS3B),
                    selected: !1,
                    onClick: _,
                }),
            }),
        ],
    });
}
function O(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: v.CV,
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: v.zs, src: I.A, alt: y.intl.string(j.default.IrukuA), draggable: !1 }),
            (0, i.jsx)("img", { className: v.tB, src: T.A, alt: y.intl.string(j.default.cPQCeg), draggable: !1 }),
        ],
    });
}
function L(e) {
    let { channelId: t, plants: n, plantConfig: a, roomWidth: s, roomHeight: r, aspectRatio: o } = e,
        d = (0, c.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        u = a.map((e, t) => ({ plantPosition: e, plant: n[t] })),
        { experimental: m } = f.A.useExperiment({ guildId: d, location: "GuildRoomPlants" }),
        A = (0, c.bG)([p.A], () => p.A.getVoiceChannelId() === t),
        x = (s / r > o ? r * o : s) * 0.0625;
    return (l.useEffect(() => {
        m &&
            Object.values(b).forEach((e) => {
                let { src: t } = e;
                new Image().src = t;
            });
    }, [m]),
    null == d)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: u.map((e, n) => {
                  let { plant: l, plantPosition: a } = e;
                  return m
                      ? (0, i.jsx)(
                            P,
                            { guildId: d, channelId: t, plant: l, plantPosition: a, disabled: !A, plantWidth: x },
                            `${l?.objectId}-${n}`,
                        )
                      : (0, i.jsx)(O, { plantPosition: a, plantWidth: x }, n);
              }),
          });
}
