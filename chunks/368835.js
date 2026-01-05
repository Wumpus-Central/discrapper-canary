n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(390551),
    l = n(130692),
    c = n(996606),
    u = n(72743);
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
        let { seats: t, participant: n, participants: a, channel: d, idle: _, enableAnimations: m = !0 } = e,
            h = t.find((e) => e.claimedBy === n.userId),
            g = null != h,
            [E, b] = i.useState(!1),
            y = (0, l.Z)(n),
            { x: O, y: v } = i.useMemo(() => {
                let e = f({}, n.position);
                if (g) {
                    let t = s.Is[h.id - 1];
                    null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - y.height));
                }
                return e;
            }, [n.position, h, g, y]);
        return (0, r.jsx)("div", {
            className: o()(u.participant, { [u.hovering]: E }),
            style: {
                transform: "translate3d(".concat(O, "px, ").concat(v, "px, 0)"),
                zIndex: v,
            },
            children:
                g &&
                (0, r.jsx)("div", {
                    className: u.avatar,
                    children: (0, r.jsx)(c.Z, {
                        seats: t,
                        claimedSeat: h,
                        participant: n,
                        participants: a,
                        channel: d,
                        idle: _,
                        flip: O > p,
                        handleHover: (e) => b(e),
                        enableAnimations: m,
                    }),
                }),
        });
    };
