n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(617498),
    o = n(939249),
    c = n(17928),
    d = n(866323),
    u = n(175841),
    h = n(734057),
    p = n(309010),
    m = n(927813),
    A = n(935208),
    f = n(446243),
    x = n(558076),
    g = n(872772),
    C = n(360729),
    y = n(884863),
    j = n(662731),
    v = n(375708),
    E = n(564009),
    N = n(880872),
    I = n(849351),
    T = n(572316),
    b = n(192063);
let _ = {
        0: { src: T.A, alt: j.default.IrukuA },
        1: { src: I.A, alt: j.default.yITFQ7 },
        2: { src: N.A, alt: j.default.uUhyVw },
    },
    R = 30 * m.A.Millis.MINUTE,
    S = m.A.Millis.HOUR;
function P(e) {
    let t = (function (e) {
        if (null != e) return null != e.updatedAt ? e.updatedAt.getTime() : A.default.extractTimestamp(e.objectId);
    })(e);
    if (null == t) return { stage: 0, timeUntilNextStage: null };
    let n = Date.now() - t;
    return n < R
        ? { stage: 0, timeUntilNextStage: R - n }
        : n < S
          ? { stage: 1, timeUntilNextStage: S - n }
          : { stage: 2, timeUntilNextStage: null };
}
function L(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: c, disabled: h, plantWidth: p } = e,
        [m, A] = l.useState(P(a).stage),
        x = l.useRef([]),
        C = l.useCallback(
            (e) => {
                if (x.current.length > 0 || e === m) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(m, e);
                (x.current = n), A(t);
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
                    let e = x.current.shift();
                    null != e && A(e);
                },
            },
            "respect-motion-settings",
        ),
        I = l.useCallback(() => {
            let { stage: e } = P(a);
            C(e);
        }, [a, C]);
    l.useEffect(() => {
        let { stage: e, timeUntilNextStage: t } = P(a),
            n = setTimeout(() => I(), (null != a && m > e) || null == t ? 0 : t);
        return () => {
            clearTimeout(n);
        };
    }, [a, m, I]);
    let T = l.useCallback(() => {
        a?.objectId != null && (0, f.Xh)(t, n, a.objectId, { object_type: g.N.PLANT });
    }, [a, t, n]);
    return (0, i.jsxs)(y.T, {
        centerSingleItem: !0,
        children: [
            (0, i.jsx)(y.T.Trigger, {
                children: (e) => {
                    let { ref: t, onClick: n, ...l } = e;
                    return (0, i.jsxs)(o.D, {
                        className: s()(E.CV, E.AA, h && E.r9),
                        style: { left: `${c.x}%`, bottom: `${c.y}%`, width: `${p}px` },
                        innerRef: (e) => {
                            t.current = e;
                        },
                        onClick: h ? void 0 : n,
                        "aria-disabled": h,
                        ...l,
                        children: [
                            N((e, t) => {
                                let { src: n, alt: l } = _[t],
                                    a = t === m;
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
                                alt: v.intl.string(j.default.cPQCeg),
                                draggable: !1,
                            }),
                        ],
                    });
                },
            }),
            (0, i.jsx)(y.T.Popup, {
                "aria-label": v.intl.string(j.default.B0gnKP),
                children: (0, i.jsx)(y.T.Item, {
                    icon: u.B,
                    text: v.intl.string(j.default.aduS3B),
                    selected: !1,
                    onClick: T,
                }),
            }),
        ],
    });
}
function O(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: E.CV,
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: E.zs, src: T.A, alt: v.intl.string(j.default.IrukuA), draggable: !1 }),
            (0, i.jsx)("img", { className: E.tB, src: b.A, alt: v.intl.string(j.default.cPQCeg), draggable: !1 }),
        ],
    });
}
function w(e) {
    let { channelId: t, plants: n, plantConfig: a, roomWidth: s, roomHeight: r, aspectRatio: o } = e,
        d = (0, c.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        u = a.map((e, t) => ({ plantPosition: e, plant: n[t] })),
        { interactionsEnabled: m } = C.A.useExperiment({ guildId: d, location: "GuildRoomPlants" }),
        A = (0, c.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
        f = (0, c.bG)([x.A], () => null != x.A.getPendingNote(t)),
        g = (s / r > o ? r * o : s) * 0.0625;
    return (l.useEffect(() => {
        m &&
            Object.values(_).forEach((e) => {
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
                            L,
                            { guildId: d, channelId: t, plant: l, plantPosition: a, disabled: !A || f, plantWidth: g },
                            `${l?.objectId}-${n}`,
                        )
                      : (0, i.jsx)(O, { plantPosition: a, plantWidth: g }, n);
              }),
          });
}
