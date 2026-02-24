n.d(t, { default: () => p }), n(321073);
var s = n(627968),
    i = n(64700),
    l = n(158954),
    r = n(988506),
    a = n(397927),
    o = n(95396),
    u = n(842130),
    d = n(985018),
    c = n(684897);
let m = [r.ob.SUNDAY, r.ob.MONDAY, r.ob.TUESDAY, r.ob.WEDNESDAY, r.ob.THURSDAY, r.ob.FRIDAY, r.ob.SATURDAY];
function h(e) {
    return 60 * e.hours + e.minutes;
}
function f(e) {
    return new Intl.DateTimeFormat(d.intl.currentLocale, { hour: "numeric", minute: "2-digit" }).format(
        new Date(2025, 0, 1, e.hours, e.minutes),
    );
}
function x(e) {
    let [t, n] = e.split(":").map(Number);
    return { hours: t, minutes: n };
}
function b(e) {
    return `${e.hours}:${e.minutes}`;
}
function p(e) {
    let { transitionState: t, onClose: n, teenId: r } = e,
        [p, S] = i.useState({ hours: 22, minutes: 0 }),
        [j, E] = i.useState({ hours: 7, minutes: 0 }),
        [_, g] = i.useState(new Set()),
        [D, v] = i.useState(!1),
        C = i.useMemo(() => {
            let e;
            return (
                (e = new Intl.DateTimeFormat(d.intl.currentLocale, { weekday: "short" })),
                m.map((t, n) => e.format(new Date(2025, 0, 5 + n)))
            );
        }, []),
        T = i.useMemo(
            () =>
                (function () {
                    let e = [];
                    for (let t = 0; t < 24; t++)
                        for (let n = 0; n < 60; n += 30) {
                            let s = `${t}:${n}`,
                                i = { hours: t, minutes: n };
                            e.push({ id: s, value: s, label: f(i) });
                        }
                    return e;
                })(),
            [],
        ),
        w = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    for (let n = 0; n < 24; n++)
                        for (let s = 0; s < 60; s += 30)
                            if (n !== e.hours || s !== e.minutes) {
                                let e = `${n}:${s}`,
                                    i = { hours: n, minutes: s };
                                t.push({ id: e, value: e, label: f(i) });
                            }
                    return t;
                })(p),
            [p],
        ),
        y = h(p),
        R = h(j),
        k = async () => {
            v(!0);
            try {
                await (0, o.qP)(r, {
                    label: "",
                    start_time: { hours: p.hours, minutes: p.minutes, seconds: 0, nanos: 0 },
                    end_time: { hours: j.hours, minutes: j.minutes, seconds: 0, nanos: 0 },
                    days: Array.from(_),
                }),
                    n();
            } finally {
                v(!1);
            }
        },
        Y = {
            startTime: f(p),
            endTime: f(j),
            timeHook: (e, t) =>
                (0, s.jsx)(l.EYj, { variant: "text-sm/medium", color: "text-default", tag: "span", children: e }, t),
        },
        A = y > R ? d.intl.format(u.default.R87Y2K, Y) : d.intl.format(u.default.vX7xid, Y);
    return (0, s.jsx)(l.Modal, {
        transitionState: t,
        onClose: n,
        title: d.intl.string(u.default["w/ISB8"]),
        subtitle: d.intl.string(u.default.AcJ4ke),
        actions: [
            { variant: "secondary", text: d.intl.string(d.t["ETE/oC"]), onClick: n, disabled: D },
            { text: d.intl.string(u.default.pvcruO), onClick: k, disabled: 0 === _.size || y === R || D, loading: D },
        ],
        children: (0, s.jsxs)(l.BJc, {
            gap: 24,
            children: [
                (0, s.jsxs)(l.BJc, {
                    gap: 8,
                    children: [
                        (0, s.jsx)(l.EYj, {
                            variant: "text-sm/semibold",
                            children: d.intl.string(u.default["37z4a2"]),
                        }),
                        (0, s.jsxs)("div", {
                            className: c.ae,
                            children: [
                                (0, s.jsx)("div", {
                                    className: c.k3,
                                    children: (0, s.jsx)(l.l6P, {
                                        label: d.intl.string(u.default["37z4a2"]),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: T,
                                        value: b(p),
                                        onSelectionChange: (e) => {
                                            if (null != e) {
                                                let t = x(e);
                                                if ((S(t), h(t) === h(j))) {
                                                    let e = (h(t) + 30) % 1440;
                                                    E({ hours: Math.floor(e / 60), minutes: e % 60 });
                                                }
                                            }
                                        },
                                    }),
                                }),
                                (0, s.jsx)(l.EYj, {
                                    variant: "text-md/medium",
                                    children: d.intl.string(u.default.n2mCrR),
                                }),
                                (0, s.jsx)("div", {
                                    className: c.k3,
                                    children: (0, s.jsx)(l.l6P, {
                                        label: d.intl.string(u.default.n2mCrR),
                                        hideLabel: !0,
                                        selectionMode: "single",
                                        options: w,
                                        value: b(j),
                                        onSelectionChange: (e) => {
                                            null != e && E(x(e));
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsx)(l.cGx, {}),
                (0, s.jsxs)(l.BJc, {
                    gap: 8,
                    children: [
                        (0, s.jsxs)(l.BJc, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(l.EYj, {
                                    variant: "text-sm/semibold",
                                    children: d.intl.string(u.default.HaV0Sg),
                                }),
                                (0, s.jsx)(l.EYj, { variant: "text-sm/normal", color: "text-muted", children: A }),
                            ],
                        }),
                        (0, s.jsx)("div", {
                            className: c.kS,
                            children: m.map((e, t) => {
                                let n = _.has(e);
                                return (0, s.jsx)(
                                    a.DUT,
                                    {
                                        role: "button",
                                        "aria-pressed": n,
                                        className: `${c.ly} ${n ? c.wH : ""}`,
                                        onClick: () => {
                                            g((t) => {
                                                let n = new Set(t);
                                                return n.has(e) ? n.delete(e) : n.add(e), n;
                                            });
                                        },
                                        children: (0, s.jsx)(l.EYj, {
                                            variant: "text-sm/semibold",
                                            color: "currentColor",
                                            children: C[t],
                                        }),
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
