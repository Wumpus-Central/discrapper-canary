n.d(t, { A: () => _ }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(572808),
    l = n(9045),
    c = n(944766),
    u = n(489990);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
let p = 1080,
    _ = (e) => {
        let { seats: t, participant: n, participants: a, channel: d, idle: _, enableAnimations: h = !0 } = e,
            m = t.find((e) => e.claimedBy === n.userId),
            g = null != m,
            [E, b] = i.useState(!1),
            y = (0, l.A)(n),
            { x: O, y: A } = i.useMemo(() => {
                let e = f({}, n.position);
                if (g) {
                    let t = o.dG[m.id - 1];
                    null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - y.height));
                }
                return e;
            }, [n.position, m, g, y]);
        return (0, r.jsx)("div", {
            className: s()(u.Wp, { [u.lv]: E }),
            style: {
                transform: "translate3d(".concat(O, "px, ").concat(A, "px, 0)"),
                zIndex: A,
            },
            children:
                g &&
                (0, r.jsx)("div", {
                    className: u.my,
                    children: (0, r.jsx)(c.A, {
                        seats: t,
                        claimedSeat: m,
                        participant: n,
                        participants: a,
                        channel: d,
                        idle: _,
                        flip: O > p,
                        handleHover: (e) => b(e),
                        enableAnimations: h,
                    }),
                }),
        });
    };
