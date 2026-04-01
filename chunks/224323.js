"use strict";
n.d(t, { A: () => y }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(735438),
    a = n.n(s),
    o = n(773690),
    l = n(835245),
    u = n(158954),
    c = n(311907),
    d = n(773669),
    _ = n(133636),
    f = n(376484),
    p = n(178090),
    h = n(346640),
    m = n(459324);
let E = 1,
    g = 3,
    A = -200,
    I = 1e3,
    T = 3;
function S() {
    let e = (0, c.bG)([d.default], () => d.default.locale),
        t = (0, c.bG)([_.A], () => _.A.getCounter(h.EC.ENEMY_DAMAGE)),
        n = (0, c.bG)([_.A], () => _.A.getNextCountersFetchTime()),
        [s, S] = (0, i.useState)(Date.now()),
        [y, v] = (0, i.useState)([]),
        C = n - s;
    (0, i.useEffect)(() => {
        let e = Date.now(),
            r = t.currentCount - t.previousCount,
            i = Math.floor((E / 100) * r),
            s = Math.floor((g / 100) * r),
            o = ((n - e) / 1e3) * T,
            u = [];
        for (; r > 0 && u.length < o && i > 0 && s > 0; ) {
            let e = Math.min(a().random(i, s), r);
            (r -= e), u.push({ id: (0, l.A)(), value: e, x: a().random(0, 100), y: a().random(0, 100) });
        }
        v(u), S(e);
    }, [t, n]);
    let N = (0, u.pnh)(y, {
        from: { opacity: 0, y: 0 },
        enter: [
            { opacity: 1, y: A / 2 },
            { opacity: 0, y: A },
        ],
        leave: { opacity: 0, y: A },
        trail: 0 !== y.length ? C / y.length : 0,
        config: { duration: I, easing: (e) => e },
        key: (e) => e.id,
    });
    return (0, r.jsx)(
        "div",
        {
            className: m.kL,
            children: N((t, n) =>
                (0, r.jsx)(
                    o.animated.div,
                    {
                        style: { ...t, top: `${n.y}%`, left: `${n.x}%` },
                        className: m.lS,
                        children: (0, r.jsxs)(p.A, {
                            className: m.Qq,
                            variant: "text-lg/normal",
                            outlined: !0,
                            children: ["-", (0, f.F)(n.value, e)],
                        }),
                    },
                    n.id,
                ),
            ),
        },
        s,
    );
}
function y() {
    let e = (0, c.bG)([_.A], () => _.A.getNextCountersFetchTime());
    return (0, r.jsx)(S, {}, e);
}
