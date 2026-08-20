l.d(t, { A: () => R }), l(321073);
var n = l(477900),
    a = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(834730),
    o = l(343032),
    c = l(713608),
    u = l(17928),
    d = l(661531),
    m = l(459192),
    h = l(7807),
    f = l(565645),
    x = l(287809),
    v = l(562153),
    p = l(260612),
    g = l(953727),
    j = l(696016),
    b = l(711918),
    C = l(375708),
    y = l(931540);
function N(e) {
    let { icon: t, title: l, body: a, position: i, compact: r } = e;
    return (0, n.jsx)(m.u, {
        title: l,
        body: a,
        position: "top",
        children: (0, n.jsx)("div", {
            className: s()(y.H, { [y.c]: r }),
            style: { left: `${i}%` },
            children: (0, n.jsx)(t, { size: "refresh_sm", color: d.A.colors.ICON_DEFAULT }),
        }),
    });
}
let E = {
    [j.Gy.LAUGHTER]: { icon: o.i, title: b.default.bTC23D },
    [j.Gy.SHOUTING]: {
        icon: function (e) {
            let {
                    size: t = "md",
                    width: l,
                    height: a,
                    color: i = d.A.colors.INTERACTIVE_ICON_DEFAULT,
                    colorClass: s = "",
                    ...r
                } = e,
                o = (0, p.J)(t),
                c = o?.width ?? l,
                u = o?.height ?? a,
                m = "string" == typeof i ? i : i.css;
            return (0, n.jsxs)("svg", {
                ...(0, g.A)(r),
                width: c,
                height: u,
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    (0, n.jsx)("path", {
                        d: "M8.00002 8.00033C7.30688 8.00033 6.73728 8.79367 6.67277 9.80803C7.07947 9.93174 7.5283 10.0003 8.00002 10.0003C8.47174 10.0003 8.92057 9.93174 9.32727 9.80803C9.26276 8.79367 8.69315 8.00033 8.00002 8.00033Z",
                        fill: m,
                        className: s,
                    }),
                    (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M15.3334 8.00033C15.3334 12.0504 12.0502 15.3337 8.00008 15.3337C3.94999 15.3337 0.666748 12.0504 0.666748 8.00033C0.666748 3.95024 3.94999 0.666992 8.00008 0.666992C12.0502 0.666992 15.3334 3.95024 15.3334 8.00033ZM3.4038 4.36885C3.56846 4.03953 3.9689 3.90605 4.29822 4.07071L6.29822 5.07071C6.52408 5.18364 6.66675 5.41448 6.66675 5.66699C6.66675 5.91951 6.52408 6.15035 6.29822 6.26328L4.29822 7.26328C3.9689 7.42794 3.56846 7.29445 3.4038 6.96514C3.23914 6.63582 3.37262 6.23537 3.70194 6.07071L4.50937 5.66699L3.70194 5.26328C3.37262 5.09862 3.23914 4.69817 3.4038 4.36885ZM11.7019 4.07071C12.0313 3.90605 12.4317 4.03953 12.5964 4.36885C12.761 4.69817 12.6275 5.09862 12.2982 5.26328L11.4908 5.66699L12.2982 6.07071C12.6275 6.23537 12.761 6.63582 12.5964 6.96514C12.4317 7.29445 12.0313 7.42794 11.7019 7.26328L9.70194 6.26328C9.47608 6.15035 9.33341 5.91951 9.33341 5.66699C9.33341 5.41448 9.47608 5.18364 9.70194 5.07071L11.7019 4.07071ZM10.6667 10.0003C10.6667 11.8413 9.47284 13.3337 8.00008 13.3337C6.52732 13.3337 5.33341 11.8413 5.33341 10.0003C5.33341 8.15938 6.52732 6.66699 8.00008 6.66699C9.47284 6.66699 10.6667 8.15938 10.6667 10.0003Z",
                        fill: m,
                        className: s,
                    }),
                ],
            });
        },
        title: b.default["3gqpuo"],
    },
};
function w(e, t, l, a) {
    let { icon: i, title: s } = E[e];
    return (0, n.jsx)(
        N,
        { icon: i, title: C.intl.string(s), body: C.intl.string(b.default["ry+jxm"]), position: l, compact: a },
        t,
    );
}
function k(e) {
    let { signal: t, guildId: l, position: a, compact: i } = e,
        r = (0, u.bG)([x.default], () => x.default.getUser(t.userId)),
        o = (0, v.tx)(l, null, r);
    return null == t.emojiId && null == t.emojiName
        ? (0, n.jsx)(N, { icon: h.J, title: t.name, body: o, position: a, compact: i })
        : (0, n.jsx)(m.u, {
              title: t.name,
              body: o,
              position: "top",
              children: (0, n.jsx)("div", {
                  className: s()(y.H, { [y.c]: i }),
                  style: { left: `${a}%` },
                  children: (0, n.jsx)(f.A, {
                      emojiId: t.emojiId ?? null,
                      emojiName: t.emojiName ?? null,
                      animated: t.emojiAnimated,
                      size: "reaction",
                  }),
              }),
          });
}
let A = a.memo(function (e) {
    let { clip: t, videoLength: l, compact: i = !1 } = e,
        s = t.audioEvents,
        r = null != s,
        o = a.useMemo(
            () =>
                r
                    ? t.timeline.filter((e) => {
                          var t;
                          return (t = e.signal.type) !== j.Gy.LAUGHTER && t !== j.Gy.SHOUTING;
                      })
                    : (function (e) {
                          let t = e
                                  .filter((e) => e.signal.type === j.Gy.LAUGHTER && e.signal.confidence > 0.8)
                                  .sort((e, t) => e.timestamp - t.timestamp),
                              l = new Set(),
                              n = 0;
                          for (let e = 1; e <= t.length; e++)
                              (e < t.length && t[e].timestamp - t[e - 1].timestamp < 2500) ||
                                  (e - n >= 2 && l.add(t[e - 1]), (n = e));
                          return e.filter((e) => e.signal.type !== j.Gy.LAUGHTER || l.has(e));
                      })(t.timeline),
            [t.timeline, r],
        );
    function u(e) {
        if (null == l || l <= 0 || t.decision?.timestamp == null) return null;
        let n = (e - (t.decision?.timestamp - t.length)) / 1e3;
        return n < 0 || n > l ? null : (n / l) * 100;
    }
    return [
        ...(r
            ? s.map(function (e, t) {
                  let l = u(e.peakMs);
                  return null == l ? null : w(e.type, `audio-${e.peakMs}-${e.type}-${t}`, l, i);
              })
            : []),
        ...o.map(function (e) {
            if (e.signal.hiddenFromTimeline) return null;
            let l = u(e.timestamp);
            if (null == l) return null;
            let a = `${e.timestamp}-${e.signal.type}`;
            switch (e.signal.type) {
                case j.Gy.LAUGHTER:
                    return w(j.Gy.LAUGHTER, a, l, i);
                case j.Gy.SHOUTING:
                    return w(j.Gy.SHOUTING, a, l, i);
                case j.Gy.GAME_EVENT:
                    return (0, n.jsx)(
                        N,
                        {
                            icon: c.q,
                            title: e.signal.title ?? "",
                            body: C.intl.string(b.default["347DBb"]),
                            position: l,
                            compact: i,
                        },
                        a,
                    );
                case j.Gy.SOUNDBOARD:
                    if (!e.signal.playing) return null;
                    return (0, n.jsx)(k, { signal: e.signal, guildId: t.guildId, position: l, compact: i }, a);
                default:
                    return null;
            }
        }),
    ];
});
var L = l(590936);
let R = a.memo(function (e) {
    let { videoLength: t, clip: l, onMouseDown: i, noBottomMargin: o = !1, compact: c = !1 } = e,
        { timeNotches: u, subNotches: d } = a.useMemo(() => {
            let e;
            if (null == t || t <= 0) return { timeNotches: [], subNotches: [] };
            let l = [],
                n = t / 6;
            e =
                n <= 1
                    ? 1
                    : n <= 2
                      ? 2
                      : n <= 5
                        ? 5
                        : n <= 10
                          ? 10
                          : n <= 15
                            ? 15
                            : n <= 20
                              ? 20
                              : n <= 30
                                ? 30
                                : 10 * Math.round(n / 10);
            for (let n = 0; n <= t; n += e) {
                let e = (n / t) * 100;
                l.push({ time: n, position: e });
            }
            (0 === l.length || l[l.length - 1].time < t - 2) && l.push({ time: t, position: 100 });
            let a = [],
                i = e / 5;
            for (let e = i; e < t; e += i)
                if (!l.some((t) => 0.01 > Math.abs(t.time - e))) {
                    let l = (e / t) * 100;
                    a.push({ position: l });
                }
            return { timeNotches: l, subNotches: a };
        }, [t]);
    return (0, n.jsx)("div", {
        className: s()(L.ZX, { [L.dZ]: o, [L.oE]: c }),
        onMouseDown: i,
        children: (0, n.jsxs)("div", {
            className: L.QY,
            children: [
                d.map((e, t) =>
                    (0, n.jsx)(
                        "div",
                        {
                            className: L.MJ,
                            style: { left: `${e.position}%` },
                            children: (0, n.jsx)("div", { className: L.p }),
                        },
                        `sub-${t}`,
                    ),
                ),
                u.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.Cv,
                            style: { left: `${e.position}%` },
                            children: [
                                (0, n.jsx)("div", { className: L.d9 }),
                                (0, n.jsxs)(r.E, {
                                    variant: "text-xxs/normal",
                                    color: "text-muted",
                                    className: L.Mz,
                                    children: [Math.round(e.time), "s"],
                                }),
                            ],
                        },
                        t,
                    ),
                ),
                (0, n.jsx)(A, { clip: l, videoLength: t, compact: c }),
            ],
        }),
    });
});
