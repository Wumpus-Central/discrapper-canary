n.d(t, { A: () => m });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(920639),
    c = n(232571),
    d = n(212053),
    u = n(519342),
    p = n(765402),
    h = n(937591);
function m(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: m, aspectRatio: A } = p.iX[p.I3.DEFAULT],
        { width: x = 0, height: g = 0, ref: f } = (0, r.Ay)(),
        C = x / g > A;
    return (
        l.useEffect(() => {
            (0, o.zR)({ channelId: t });
        }, [t]),
        (0, i.jsxs)("div", {
            className: h.kL,
            children: [
                (0, i.jsx)("img", { className: h.Sl, src: a, alt: "", ref: f }),
                (0, i.jsxs)("div", {
                    className: s()(h.hk, { [h.Nb]: C }),
                    style: { aspectRatio: A },
                    children: [
                        m.map((e, n) =>
                            (0, i.jsx)(
                                c.A,
                                { channelId: t, name: e.name, x: e.position.x, y: e.position.y, roomWidth: x },
                                n,
                            ),
                        ),
                        (0, i.jsx)(u.A, { channelId: t, roomWidth: x }),
                        (0, i.jsx)(d.A, { channelId: t, popoutType: n, aspectRatio: A }),
                    ],
                }),
            ],
        })
    );
}
