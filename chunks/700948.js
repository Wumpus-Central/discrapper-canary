n.d(t, { A: () => A });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(920639),
    c = n(232571),
    d = n(212053),
    u = n(519342),
    p = n(207274),
    h = n(683864),
    m = n(937591);
function A(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: A, aspectRatio: x } = h.iX[h.I3.DEFAULT],
        { width: g = 0, height: f = 0, ref: C } = (0, r.Ay)(),
        y = g / f > x;
    return (
        l.useEffect(() => {
            (0, o.zR)({ channelId: t });
        }, [t]),
        (0, i.jsxs)("div", {
            className: m.kL,
            children: [
                (0, i.jsx)("img", { className: m.Sl, src: a, alt: "", ref: C }),
                (0, i.jsxs)("div", {
                    className: s()(m.hk, { [m.Nb]: y }),
                    style: { aspectRatio: x },
                    children: [
                        A.map((e, n) =>
                            (0, i.jsx)(
                                c.A,
                                { channelId: t, name: e.name, x: e.position.x, y: e.position.y, roomWidth: g },
                                n,
                            ),
                        ),
                        (0, i.jsx)(u.A, { channelId: t, roomWidth: g }),
                        (0, i.jsx)(d.A, { channelId: t, popoutType: n, aspectRatio: x }),
                        (0, i.jsx)(p.A, { channelId: t }),
                    ],
                }),
            ],
        })
    );
}
