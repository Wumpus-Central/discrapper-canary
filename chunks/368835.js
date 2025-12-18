n.d(t, { Z: () => d }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(390551),
    s = n(130692),
    c = n(996606),
    u = n(72743);
let d = (e) => {
    let { seats: t, participant: n, participants: l, channel: d, idle: p } = e,
        f = t.find((e) => e.claimedBy === n.userId),
        h = null != f,
        [m, g] = r.useState(!1),
        b = (0, s.Z)(n),
        { x: y, y: C } = r.useMemo(() => {
            let e = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, n.position);
            if (h) {
                let t = o.Is[f.id - 1];
                null != t && ((e.x = t.x + t.player.x), (e.y = t.y + t.player.y - b.height));
            }
            return e;
        }, [n.position, f, h, b]);
    return (0, i.jsx)("div", {
        className: a()(u.participant, { [u.hovering]: m }),
        style: {
            transform: "translate3d(".concat(y, "px, ").concat(C, "px, 0)"),
            zIndex: C,
        },
        children:
            h &&
            (0, i.jsx)("div", {
                className: u.avatar,
                children: (0, i.jsx)(c.Z, {
                    seats: t,
                    claimedSeat: f,
                    participant: n,
                    participants: l,
                    channel: d,
                    idle: p,
                    flip: y > 1080,
                    handleHover: (e) => g(e),
                }),
            }),
    });
};
