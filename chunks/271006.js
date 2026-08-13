n.d(t, { A: () => M }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(159265),
    o = n(939249),
    c = n(17928),
    d = n(866323),
    u = n(400492),
    h = n(734057),
    p = n(309010),
    m = n(927813),
    A = n(935208),
    f = n(446243),
    x = n(920639),
    g = n(538638),
    C = n(558076),
    y = n(872772),
    j = n(360729),
    I = n(662731),
    v = n(375708),
    E = n(564009),
    N = n(880872),
    b = n(849351),
    T = n(572316),
    _ = n(192063);
let R = {
        0: { src: T.A, alt: I.default.IrukuA, heightPx: 723 },
        1: { src: b.A, alt: I.default.yITFQ7, heightPx: 593 },
        2: { src: N.A, alt: I.default.uUhyVw, heightPx: 490 },
    },
    S = 30 * m.A.Millis.MINUTE,
    L = m.A.Millis.HOUR;
function P(e) {
    let t = (function (e) {
        if (null != e) return null != e.updatedAt ? e.updatedAt.getTime() : A.default.extractTimestamp(e.objectId);
    })(e);
    if (null == t) return { stage: 0, timeUntilNextStage: null };
    let n = Date.now() - t;
    return n < S
        ? { stage: 0, timeUntilNextStage: S - n }
        : n < L
          ? { stage: 1, timeUntilNextStage: L - n }
          : { stage: 2, timeUntilNextStage: null };
}
function O(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: c, disabled: h, plantWidth: p } = e,
        [m, A] = l.useState(P(a).stage),
        [C, j] = l.useState(null),
        I = l.useRef([]),
        N = l.useCallback(
            (e) => {
                if (I.current.length > 0 || e === m) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(m, e);
                (I.current = n), A(t);
            },
            [m],
        ),
        b = (0, d.p)(
            m,
            {
                initial: { opacity: 1 },
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 1e3 },
                onRest: () => {
                    let e = I.current.shift();
                    null != e && A(e);
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
            n = null != a && m > e;
        if (n && null != C) return;
        let i = setTimeout(() => T(), n || null == t ? 0 : t);
        return () => {
            clearTimeout(i);
        };
    }, [a, m, T, C]);
    let S = l.useCallback(() => {
        a?.objectId != null &&
            ((0, u.Ak)("hang_status_select", 0.1),
            j(m),
            (0, f.Xh)(t, n, a.objectId, { object_type: y.N.PLANT }).catch((e) => (0, g.b)()),
            (0, x.Ql)({ guildId: t, channelId: n, interactionType: "plant_watered" }));
    }, [a, t, n, m]);
    return (0, i.jsxs)(o.D, {
        className: s()(E.CV, E.AA, h && E.r9),
        style: { left: `${c.x}%`, bottom: `${c.y}%`, width: `${p}px` },
        onClick: h ? void 0 : S,
        "aria-disabled": h,
        role: "listitem",
        "aria-label": v.intl.string(R[m].alt),
        children: [
            b((e, t) => {
                let n,
                    { src: l, heightPx: a } = R[t],
                    o = t === m;
                return (0, i.jsx)(r.animated.img, {
                    className: s()(E.zs, { [E.tB]: !o, [E.eA]: t === C }),
                    style: {
                        opacity: e.opacity,
                        ...(t === C
                            ? { transformOrigin: ((n = `${(((a - 255) / a) * 100).toFixed(2)}%`), `52.55% ${n}`) }
                            : {}),
                    },
                    onAnimationEnd: t === C ? () => j(null) : void 0,
                    src: l,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                });
            }),
            (0, i.jsx)("img", { className: E.tB, src: _.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
function w(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: E.CV,
        role: "listitem",
        "aria-label": v.intl.string(I.default.IrukuA),
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: E.zs, src: T.A, alt: "", "aria-hidden": !0, draggable: !1 }),
            (0, i.jsx)("img", { className: E.tB, src: _.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
function M(e) {
    let { channelId: t, plants: n, plantConfig: a, roomWidth: s } = e,
        r = (0, c.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        o = a.map((e, t) => ({ plantPosition: e, plant: n[t] })),
        { interactionsEnabled: d } = j.A.useExperiment({ guildId: r, location: "GuildRoomPlants" }),
        u = (0, c.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
        m = (0, c.bG)([C.A], () => null != C.A.getPendingNote(t)),
        A = 0.0625 * s;
    return (l.useEffect(() => {
        d &&
            Object.values(R).forEach((e) => {
                let { src: t } = e;
                new Image().src = t;
            });
    }, [d]),
    null == r)
        ? null
        : (0, i.jsx)(i.Fragment, {
              children: o.map((e, n) => {
                  let { plant: l, plantPosition: a } = e;
                  return d
                      ? (0, i.jsx)(
                            O,
                            { guildId: r, channelId: t, plant: l, plantPosition: a, disabled: !u || m, plantWidth: A },
                            `${l?.objectId}-${n}`,
                        )
                      : (0, i.jsx)(w, { plantPosition: a, plantWidth: A }, n);
              }),
          });
}
