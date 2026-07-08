n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(494012),
    o = n(920639),
    c = n(913481),
    d = n(232571),
    u = n(212053),
    p = n(519342),
    h = n(207274),
    m = n(683864),
    A = n(937591);
function x(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: x, aspectRatio: g } = m.iX[m.I3.DEFAULT],
        { width: f = 0, height: C = 0, ref: y } = (0, r.Ay)(),
        E = f / C > g;
    return (
        l.useEffect(() => {
            (0, o.zR)({ channelId: t });
        }, [t]),
        (0, i.jsxs)("div", {
            className: A.kL,
            children: [
                (0, i.jsx)("img", { className: A.Sl, src: a, alt: "", ref: y }),
                (0, i.jsxs)("div", {
                    className: s()(A.hk, { [A.Nb]: E }),
                    style: { aspectRatio: g },
                    children: [
                        x.map((e, n) =>
                            (0, i.jsx)(
                                d.A,
                                { channelId: t, name: e.name, x: e.position.x, y: e.position.y, roomWidth: f },
                                n,
                            ),
                        ),
                        (0, i.jsx)(p.A, { channelId: t, roomWidth: f }),
                        (0, i.jsx)(u.A, { channelId: t, popoutType: n, aspectRatio: g }),
                        (0, i.jsx)(h.A, { channelId: t }),
                        (0, i.jsx)(c.A, { channelId: t, roomWidth: f, aspectRatio: g }),
                    ],
                }),
            ],
        })
    );
}
