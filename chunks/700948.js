n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n(494012),
    c = n(821578),
    d = n(734057),
    u = n(446243),
    h = n(920639),
    p = n(558076),
    m = n(913481),
    A = n(711478),
    x = n(232571),
    g = n(212053),
    f = n(519342),
    C = n(207274),
    j = n(971954),
    y = n(937591);
function v(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: v, aspectRatio: E, plants: N } = j.iX[c.I.DEFAULT],
        { width: I = 0, height: T = 0, ref: b } = (0, o.Ay)(),
        _ = I / T > E;
    return (
        l.useEffect(() => {
            (0, h.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(p.A.getRoom(t), p.i),
                n = d.A.getChannel(t)?.guild_id;
            e || null == n || (0, u.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: y.kL,
            ref: b,
            children: (0, i.jsxs)("div", {
                className: s()(y.hk, { [y.Nb]: _ }),
                style: { aspectRatio: E },
                children: [
                    (0, i.jsx)("img", { className: y.Sl, src: a, alt: "" }),
                    (0, i.jsx)(A.A, { channelId: t, plantConfig: N, roomWidth: I, roomHeight: T, aspectRatio: E }),
                    v.map((e, n) =>
                        (0, i.jsx)(x.A, { channelId: t, x: e.position.x, y: e.position.y, roomWidth: I }, n),
                    ),
                    (0, i.jsx)(f.A, { channelId: t, roomWidth: I }),
                    (0, i.jsx)(g.A, { channelId: t, popoutType: n, aspectRatio: E }),
                    (0, i.jsx)(C.A, { channelId: t }),
                    (0, i.jsx)(m.A, { channelId: t, roomWidth: I }),
                ],
            }),
        })
    );
}
