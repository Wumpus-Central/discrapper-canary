n.d(t, { A: () => E });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(735438),
    o = n(494012),
    c = n(821578),
    d = n(734057),
    u = n(446243),
    p = n(920639),
    h = n(558076),
    m = n(913481),
    A = n(232571),
    x = n(212053),
    g = n(519342),
    f = n(207274),
    C = n(971954),
    y = n(937591);
function E(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: E, aspectRatio: v } = C.iX[c.I.DEFAULT],
        { width: j = 0, height: N = 0, ref: I } = (0, o.Ay)(),
        T = j / N > v;
    return (
        l.useEffect(() => {
            (0, p.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(h.A.getRoom(t), h.i),
                n = d.A.getChannel(t)?.guild_id;
            e || null == n || (0, u.z5)(n, t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: y.kL,
            children: [
                (0, i.jsx)("img", { className: y.Sl, src: a, alt: "", ref: I }),
                (0, i.jsxs)("div", {
                    className: s()(y.hk, { [y.Nb]: T }),
                    style: { aspectRatio: v },
                    children: [
                        E.map((e, n) =>
                            (0, i.jsx)(
                                A.A,
                                { channelId: t, name: e.name, x: e.position.x, y: e.position.y, roomWidth: j },
                                n,
                            ),
                        ),
                        (0, i.jsx)(g.A, { channelId: t, roomWidth: j }),
                        (0, i.jsx)(x.A, { channelId: t, popoutType: n, aspectRatio: v }),
                        (0, i.jsx)(f.A, { channelId: t }),
                        (0, i.jsx)(m.A, { channelId: t, roomWidth: j, aspectRatio: v }),
                    ],
                }),
            ],
        })
    );
}
