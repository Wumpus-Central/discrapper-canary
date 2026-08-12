n.d(t, { A: () => w }), n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(682577),
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
    g = n(558076),
    C = n(872772),
    y = n(360729),
    j = n(662731),
    I = n(375708),
    v = n(564009),
    E = n(880872),
    N = n(849351),
    b = n(572316),
    T = n(192063);
let _ = {
        0: { src: b.A, alt: j.default.IrukuA, heightPx: 723 },
        1: { src: N.A, alt: j.default.yITFQ7, heightPx: 593 },
        2: { src: E.A, alt: j.default.uUhyVw, heightPx: 490 },
    },
    R = 30 * m.A.Millis.MINUTE,
    S = m.A.Millis.HOUR;
function L(e) {
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
function P(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: c, disabled: h, plantWidth: p } = e,
        [m, A] = l.useState(L(a).stage),
        [g, y] = l.useState(null),
        j = l.useRef([]),
        E = l.useCallback(
            (e) => {
                if (j.current.length > 0 || e === m) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(m, e);
                (j.current = n), A(t);
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
                    let e = j.current.shift();
                    null != e && A(e);
                },
            },
            "respect-motion-settings",
        ),
        b = l.useCallback(() => {
            let { stage: e } = L(a);
            E(e);
        }, [a, E]);
    l.useEffect(() => {
        let { stage: e, timeUntilNextStage: t } = L(a),
            n = null != a && m > e;
        if (n && null != g) return;
        let i = setTimeout(() => b(), n || null == t ? 0 : t);
        return () => {
            clearTimeout(i);
        };
    }, [a, m, b, g]);
    let R = l.useCallback(() => {
        a?.objectId != null &&
            ((0, u.Ak)("hang_status_select", 0.1),
            y(m),
            (0, f.Xh)(t, n, a.objectId, { object_type: C.N.PLANT }),
            (0, x.Ql)({ guildId: t, channelId: n, interactionType: "plant_watered" }));
    }, [a, t, n, m]);
    return (0, i.jsxs)(o.D, {
        className: s()(v.CV, v.AA, h && v.r9),
        style: { left: `${c.x}%`, bottom: `${c.y}%`, width: `${p}px` },
        onClick: h ? void 0 : R,
        "aria-disabled": h,
        role: "listitem",
        "aria-label": I.intl.string(_[m].alt),
        children: [
            N((e, t) => {
                let n,
                    { src: l, heightPx: a } = _[t],
                    o = t === m;
                return (0, i.jsx)(r.animated.img, {
                    className: s()(v.zs, { [v.tB]: !o, [v.eA]: t === g }),
                    style: {
                        opacity: e.opacity,
                        ...(t === g
                            ? { transformOrigin: ((n = `${(((a - 255) / a) * 100).toFixed(2)}%`), `52.55% ${n}`) }
                            : {}),
                    },
                    onAnimationEnd: t === g ? () => y(null) : void 0,
                    src: l,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                });
            }),
            (0, i.jsx)("img", { className: v.tB, src: T.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
function O(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: v.CV,
        role: "listitem",
        "aria-label": I.intl.string(j.default.IrukuA),
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: v.zs, src: b.A, alt: "", "aria-hidden": !0, draggable: !1 }),
            (0, i.jsx)("img", { className: v.tB, src: T.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
function w(e) {
    let { channelId: t, plants: n, plantConfig: a, roomWidth: s } = e,
        r = (0, c.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
        o = a.map((e, t) => ({ plantPosition: e, plant: n[t] })),
        { interactionsEnabled: d } = y.A.useExperiment({ guildId: r, location: "GuildRoomPlants" }),
        u = (0, c.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
        m = (0, c.bG)([g.A], () => null != g.A.getPendingNote(t)),
        A = 0.0625 * s;
    return (l.useEffect(() => {
        d &&
            Object.values(_).forEach((e) => {
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
                            P,
                            { guildId: r, channelId: t, plant: l, plantPosition: a, disabled: !u || m, plantWidth: A },
                            `${l?.objectId}-${n}`,
                        )
                      : (0, i.jsx)(O, { plantPosition: a, plantWidth: A }, n);
              }),
          });
}
