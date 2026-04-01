"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(64700),
    i = n(735438),
    s = n(530212),
    a = n(621823),
    o = n(278880),
    l = n(905228),
    u = n(790225),
    c = n(610223),
    d = n(599891),
    _ = n(346640);
let f = 1e3,
    p = [
        d.tE.Glyph1,
        d.tE.Glyph2,
        d.tE.Glyph3,
        d.tE.Glyph4,
        d.tE.Glyph5,
        d.tE.Glyph6,
        d.tE.Glyph7,
        d.tE.Glyph8,
        d.tE.Glyph9,
        d.tE.Glyph10,
        d.tE.Glyph11,
        d.tE.Glyph12,
    ],
    h = 3,
    m = _.KG[_.$6.HEALER];
function E() {
    let e = (0, i.sampleSize)(p, 3).map((e) => ({ glyph: e, flipped: !1 })),
        t = (0, i.shuffle)([...e, ...e, ...e]);
    return [t.slice(0, 3), t.slice(3, 6), t.slice(-3)];
}
function g(e) {
    let t = (0, r.useRef)(!0),
        [n, i] = (0, r.useState)(E()),
        [d, _] = (0, r.useState)([]),
        p = (0, r.useRef)(!0),
        g = (0, r.useRef)(null),
        A = (0, c.W)(s.A),
        I = (0, c.W)(o.A),
        T = (0, c.W)(a.A),
        S = (0, r.useCallback)(
            (r, s) => {
                let a = n[r][s];
                if (a.flipped || !p.current) return;
                let o = n.map((e) => [...e]),
                    c = [];
                if (
                    (o.forEach((e) =>
                        e.forEach((e) => {
                            e.flipped && !d.some((t) => t === e.glyph) && c.push(e.glyph);
                        }),
                    ),
                    c.length < h && ((o[r][s] = { ...a, flipped: !0 }), c.push(a.glyph), i(o)),
                    c.length === h)
                )
                    if (c.every((e) => e === c[0])) {
                        let n = [...d, c[0]];
                        _(n), I(), n.length === m && (e(), t.current && (0, u.__)(l.R.THREE));
                    } else
                        (t.current = !1),
                            T(),
                            (o = n.map((e) =>
                                e.map((e) => ({ ...e, flipped: !!d.some((t) => t === e.glyph) && e.flipped })),
                            )),
                            (p.current = !1),
                            (g.current = setTimeout(() => {
                                i(o), (p.current = !0);
                            }, f));
                else A();
            },
            [n, d, e, A, T, I],
        );
    return (
        (0, r.useEffect)(
            () => () => {
                null !== g.current && clearTimeout(g.current);
            },
            [],
        ),
        { grid: n, matchesFound: d, onClick: S }
    );
}
