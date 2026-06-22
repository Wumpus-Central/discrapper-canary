n.d(t, { A: () => p });
var i = n(627968),
    l = n(503698),
    a = n.n(l),
    s = n(494012),
    r = n(232571),
    o = n(212053),
    c = n(519342),
    d = n(765402),
    u = n(937591);
function p(e) {
    let { channelId: t, popoutType: n } = e,
        { background: l, seats: p, aspectRatio: h } = d.iX[d.I3.DEFAULT],
        { width: m = 0, height: A = 0, ref: x } = (0, s.Ay)(),
        g = m / A > h;
    return (0, i.jsxs)("div", {
        className: u.kL,
        children: [
            (0, i.jsx)("img", { className: u.Sl, src: l, alt: "", ref: x }),
            (0, i.jsxs)("div", {
                className: a()(u.hk, { [u.Nb]: g }),
                style: { aspectRatio: h },
                children: [
                    p.map((e, n) =>
                        (0, i.jsx)(r.A, { channelId: t, x: e.position.x, y: e.position.y, roomWidth: m }, n),
                    ),
                    (0, i.jsx)(c.A, { channelId: t, roomWidth: m }),
                    (0, i.jsx)(o.A, { channelId: t, popoutType: n, aspectRatio: h }),
                ],
            }),
        ],
    });
}
