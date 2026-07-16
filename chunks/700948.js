n.d(t, { A: () => I });
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
    x = n(913481),
    g = n(711478),
    f = n(232571),
    C = n(212053),
    j = n(519342),
    y = n(241215),
    v = n(207274),
    E = n(971954),
    N = n(937591);
function I(e) {
    let { channelId: t, popoutType: n } = e,
        { background: a, seats: I, aspectRatio: T, plants: _ } = E.iX[c.I.DEFAULT],
        { width: b = 0, height: S = 0, ref: R } = (0, o.Ay)(),
        P = b / S > T,
        O = (0, d.bG)([u.A], () => null != u.A.getSelectedParticipant(t));
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
            className: N.kL,
            ref: R,
            children: [
                (0, i.jsxs)("div", {
                    className: s()(N.hk, { [N.Nb]: P }),
                    style: { aspectRatio: T },
                    children: [
                        (0, i.jsx)("img", { className: N.Sl, src: a, alt: "" }),
                        (0, i.jsx)(g.A, { channelId: t, plantConfig: _, roomWidth: b, roomHeight: S, aspectRatio: T }),
                        I.map((e, n) =>
                            (0, i.jsx)(f.A, { channelId: t, x: e.position.x, y: e.position.y, roomWidth: b }, n),
                        ),
                        (0, i.jsx)(j.A, { channelId: t, roomWidth: b }),
                        (0, i.jsx)(v.A, { channelId: t }),
                        (0, i.jsx)(x.A, { channelId: t, roomWidth: b }),
                        !O && (0, i.jsx)(C.A, { channelId: t, popoutType: n, aspectRatio: T }),
                    ],
                }),
                O && (0, i.jsx)(y.A, { channelId: t, popoutType: n, width: b, height: S }),
            ],
        })
    );
}
