n.d(t, { A: () => T });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n(494012),
    c = n(821578),
    d = n(17928),
    u = n(313961),
    p = n(734057),
    h = n(446243),
    m = n(920639),
    A = n(558076),
    f = n(913481),
    x = n(711478),
    g = n(232571),
    C = n(109591),
    y = n(212053),
    j = n(519342),
    v = n(241215),
    E = n(207274),
    N = n(971954),
    I = n(886943);
function T(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        { background: T, seats: b, aspectRatio: _, plants: R } = N.iX[c.I.DEFAULT],
        { width: S = 0, height: P = 0, ref: L } = (0, o.Ay)(),
        O = S / P > _,
        w = (0, d.bG)([u.A], () => null != u.A.getSelectedParticipant(t)),
        M = l.useRef(null);
    return (
        l.useEffect(() => {
            (0, m.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(A.A.getRoom(t), A.i),
                n = p.A.getChannel(t)?.guild_id;
            e || null == n || (0, h.z5)(n, t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: I.kL,
            ref: L,
            children: [
                (0, i.jsxs)("div", {
                    className: s()(I.hk, { [I.Nb]: O }),
                    style: { aspectRatio: _ },
                    ref: M,
                    children: [
                        (0, i.jsx)("img", { className: I.Sl, src: T, alt: "" }),
                        (0, i.jsx)(x.A, { channelId: t, plantConfig: R, roomWidth: S, roomHeight: P, aspectRatio: _ }),
                        b.map((e, n) =>
                            (0, i.jsx)(g.A, { channelId: t, x: e.position.x, y: e.position.y, roomWidth: S }, n),
                        ),
                        (0, i.jsx)(j.A, { channelId: t, roomWidth: S }),
                        (0, i.jsx)(E.A, { channelId: t }),
                        (0, i.jsx)(f.A, { channelId: t, roomWidth: S }),
                        !w && (0, i.jsx)(y.A, { channelId: t, popoutType: n, aspectRatio: _ }),
                        (0, i.jsx)(C.A, { channelId: t, popoutType: n, seatsRef: M, controlsIdle: a, height: P }),
                    ],
                }),
                w && (0, i.jsx)(v.A, { channelId: t, popoutType: n, width: S, height: P }),
            ],
        })
    );
}
