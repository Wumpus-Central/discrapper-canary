"use strict";
n.d(t, { A: () => R }), n(321073);
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(867913),
    o = n(497284),
    l = n(905228),
    u = n(790225),
    c = n(610223),
    d = n(346640);
let _ = 1e3 / 60,
    f = d.KG[d.$6.TANK],
    p = 100,
    h = 700,
    m = 1e3,
    E = 1.4,
    g = 2.4,
    A = 70,
    I = 163,
    T = 96,
    S = 138,
    y = 20,
    v = 500,
    C = 100;
var N = (function (e) {
    return (e.LEFT = "ArrowLeft"), (e.RIGHT = "ArrowRight"), e;
})(N || {});
function R(e) {
    let t = (0, r.useRef)(!0),
        n = (0, r.useRef)(null),
        i = (0, r.useRef)(Date.now()),
        d = (0, r.useRef)([]),
        [R, O] = (0, r.useState)([]),
        b = (0, r.useRef)(0),
        D = (0, r.useRef)(0),
        [L, w] = (0, r.useState)(0),
        M = (0, r.useRef)({ x: window.innerWidth / 2, y: window.innerHeight - T }),
        [x, P] = (0, r.useState)(M.current),
        k = (0, r.useRef)(!1),
        U = (0, c.W)(a.A),
        G = (0, c.W)(o.A),
        F = (0, r.useCallback)(
            () => ({
                x: s().random(p, window.innerWidth - p),
                y: -I,
                speed: s().random(h, m),
                hitAt: null,
                blockedAt: null,
            }),
            [],
        ),
        V = (0, r.useCallback)(() => {
            let e = Date.now(),
                n = (e - i.current) / 1e3;
            P(M.current);
            let r = s().random(E, g);
            e - b.current > 1e3 / r && D.current < f && (d.current.push(F()), (b.current = e));
            let a = 0;
            (d.current = d.current
                .map((e) => {
                    if (null != e.hitAt || null != e.blockedAt) return e;
                    let r = e.y + I >= window.innerHeight,
                        i =
                            e.y + I >= M.current.y &&
                            e.y + I <= M.current.y + y &&
                            e.x + A > M.current.x &&
                            e.x < M.current.x + S;
                    return (
                        i ? ((a += 1), U()) : r && (G(), (t.current = !1)),
                        {
                            ...e,
                            y: r || i ? e.y : e.y + e.speed * n,
                            hitAt: r ? Date.now() : e.hitAt,
                            blockedAt: i ? Date.now() : e.blockedAt,
                        }
                    );
                })
                .filter((t) => {
                    let n = t.y < window.innerHeight,
                        r = t.hitAt ?? t.blockedAt,
                        i = null == r || e < r + v;
                    return n && i;
                })),
                O(d.current),
                (D.current += a),
                (D.current = Math.min(D.current, f)),
                w(D.current),
                (i.current = e);
        }, [F, U, G]);
    return (
        (0, r.useEffect)(() => {
            let e = setInterval(V, _);
            return () => clearInterval(e);
        }, [V]),
        (0, r.useEffect)(() => {
            let e = (e) => {
                let t = n.current?.getBoundingClientRect();
                null == t || ((k.current = !1), (M.current = { x: e.clientX - S / 2, y: t.bottom - T }));
            };
            return window.addEventListener("mousemove", e), () => window.removeEventListener("mousemove", e);
        }, []),
        (0, r.useEffect)(() => {
            let e = (e) => {
                let t = n.current?.getBoundingClientRect();
                if (null == t) return;
                let r = e.key;
                if (!Object.values(N).includes(r)) return;
                k.current = !0;
                let i = "ArrowLeft" === r ? -C : C;
                M.current = { x: Math.min(Math.max(0, M.current.x + i), t.width - S), y: t.bottom - T };
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
        }, []),
        (0, r.useEffect)(() => {
            L >= f && (e(), (d.current = []), O([]), t.current && (0, u.__)(l.R.FOUR));
        }, [L, e]),
        {
            projectiles: R,
            projectileBlockedCount: L,
            blocksRequired: f,
            shieldPosition: x,
            containerRef: n,
            didWinGame: L >= f,
            shouldTransition: k.current,
        }
    );
}
