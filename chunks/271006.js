n(321073);
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(120692),
    o = n(855986),
    d = n(866323),
    c = n(939249),
    u = n(400492),
    h = n(734057),
    p = n(309010),
    m = n(927813),
    A = n(811091),
    f = n(303227),
    g = n(920639),
    x = n(538638),
    C = n(558076),
    y = n(872772),
    j = n(360729),
    I = n(544299),
    N = n(687782),
    v = n(792996),
    E = n(96674),
    b = n(880872),
    S = n(849351),
    _ = n(572316),
    T = n(192063);
let R = {
        0: { src: _.A, alt: N.default.IrukuA, heightPx: 723 },
        1: { src: S.A, alt: N.default.yITFQ7, heightPx: 593 },
        2: { src: b.A, alt: N.default.uUhyVw, heightPx: 490 },
    },
    O = 30 * m.A.Millis.MINUTE,
    P = m.A.Millis.HOUR;
function L(e) {
    let t = (function (e) {
        if (null != e) return null != e.updatedAt ? e.updatedAt.getTime() : A.default.extractTimestamp(e.objectId);
    })(e);
    if (null == t) return { stage: 0, timeUntilNextStage: null };
    let n = Date.now() - t;
    return n < O
        ? { stage: 0, timeUntilNextStage: O - n }
        : n < P
          ? { stage: 1, timeUntilNextStage: P - n }
          : { stage: 2, timeUntilNextStage: null };
}
function M(e) {
    let { guildId: t, channelId: n, plant: a, plantPosition: o, disabled: h, plantWidth: p } = e,
        [m, A] = l.useState(L(a).stage),
        [C, j] = l.useState(null),
        N = l.useRef([]),
        b = l.useCallback(
            (e) => {
                if (N.current.length > 0 || e === m) return;
                let [t, ...n] = (function (e, t) {
                    let n = t > e ? 1 : -1,
                        i = [];
                    for (let l = e + n; l !== t + n; l += n) i.push(l);
                    return i;
                })(m, e);
                ((N.current = n), A(t));
            },
            [m],
        ),
        S = (0, d.p)(
            m,
            {
                initial: { opacity: 1 },
                from: { opacity: 0 },
                enter: { opacity: 1 },
                leave: { opacity: 0 },
                config: { duration: 1e3 },
                onRest: () => {
                    let e = N.current.shift();
                    null != e && A(e);
                },
            },
            "respect-motion-settings",
        ),
        _ = l.useCallback(() => {
            let { stage: e } = L(a);
            b(e);
        }, [a, b]);
    l.useEffect(() => {
        let { stage: e, timeUntilNextStage: t } = L(a),
            n = null != a && m > e;
        if (n && null != C) return;
        let i = setTimeout(() => _(), n || null == t ? 0 : t);
        return () => {
            clearTimeout(i);
        };
    }, [a, m, _, C]);
    let O = l.useCallback(() => {
            a?.objectId != null &&
                ((0, u.Ak)("hang_status_select", 0.1),
                j(m),
                (0, f.Xh)(t, n, a.objectId, { object_type: y.N.PLANT }).catch((e) => (0, x.b)()),
                (0, g.Ql)({ guildId: t, channelId: n, interactionType: "plant_watered" }));
        }, [a, t, n, m]),
        P = (0, I.Sb)({ position: { x: o.x, y: 100 - o.y }, targetLabel: v.intl.string(R[m].alt) });
    return (0, i.jsxs)(c.D, {
        className: s()(E.CV, E.AA, h && E.r9),
        style: { left: `${o.x}%`, bottom: `${o.y}%`, width: `${p}px` },
        onClick: h ? void 0 : O,
        "aria-disabled": h && null == P,
        role: "listitem",
        "aria-label": v.intl.string(R[m].alt),
        ...P,
        children: [
            S((e, t) => {
                let n,
                    l,
                    { src: a, heightPx: o } = R[t],
                    d = t === m;
                return (0, i.jsx)(r.animated.img, {
                    className: s()(E.zs, { [E.tB]: !d, [E.eA]: t === C }),
                    style: {
                        opacity: e.opacity,
                        ...(t === C
                            ? {
                                  transformOrigin:
                                      ((n = `${((144 / 274) * 100).toFixed(2)}%`),
                                      (l = `${(((o - 255) / o) * 100).toFixed(2)}%`),
                                      `${n} ${l}`),
                              }
                            : {}),
                    },
                    onAnimationEnd: t === C ? () => j(null) : void 0,
                    src: a,
                    alt: "",
                    "aria-hidden": !0,
                    draggable: !1,
                });
            }),
            (0, i.jsx)("img", { className: E.tB, src: T.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
function w(e) {
    let { plantPosition: t, plantWidth: n } = e;
    return (0, i.jsxs)("div", {
        className: E.CV,
        role: "listitem",
        "aria-label": v.intl.string(N.default.IrukuA),
        style: { left: `${t.x}%`, bottom: `${t.y}%`, width: `${n}px` },
        children: [
            (0, i.jsx)("img", { className: E.zs, src: _.A, alt: "", "aria-hidden": !0, draggable: !1 }),
            (0, i.jsx)("img", { className: E.tB, src: T.A, alt: "", "aria-hidden": !0, draggable: !1 }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { channelId: t, plants: n, plantConfig: a, roomWidth: s } = e,
                r = (0, o.bG)([h.A], () => h.A.getChannel(t)?.guild_id),
                d = a.map((e, t) => ({ plantData: e, plant: n[t] })),
                { interactionsEnabled: c } = (0, j.mf)({ guildId: r, location: "GuildRoomPlants" }),
                u = (0, o.bG)([p.Ay], () => p.Ay.getVoiceChannelId() === t),
                m = (0, o.bG)([C.A], () => null != C.A.getPendingNote(t)),
                A = 0.0625 * s;
            return (l.useEffect(() => {
                c &&
                    Object.values(R).forEach((e) => {
                        let { src: t } = e;
                        new Image().src = t;
                    });
            }, [c]),
            null == r)
                ? null
                : (0, i.jsx)(i.Fragment, {
                      children: d.map((e, n) => {
                          let { plant: l, plantData: a } = e;
                          return c
                              ? (0, i.jsx)(
                                    M,
                                    {
                                        guildId: r,
                                        channelId: t,
                                        plant: l,
                                        plantPosition: { x: a.x, y: a.y },
                                        disabled: !u || m,
                                        plantWidth: A,
                                    },
                                    `${l?.objectId}-${n}`,
                                )
                              : (0, i.jsx)(w, { plantPosition: { x: a.x, y: a.y }, plantWidth: A }, n);
                      }),
                  });
        },
    },
);
