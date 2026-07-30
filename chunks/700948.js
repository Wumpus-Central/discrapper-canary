n.d(t, { A: () => S });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n(64659),
    c = n(494012),
    d = n(821578),
    u = n(17928),
    h = n(313961),
    p = n(734057),
    m = n(446243),
    A = n(920639),
    f = n(558076),
    x = n(872772),
    g = n(913481),
    C = n(711478),
    y = n(232571),
    j = n(109591),
    v = n(212053),
    E = n(519342),
    N = n(241215),
    I = n(207274),
    b = n(971954),
    T = n(662731),
    _ = n(375708),
    R = n(886943);
function S(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        S = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: P, seats: L, aspectRatio: w, plants: O, getName: M } = b.iX[S],
        { width: D = 0, height: U = 0, ref: k } = (0, c.Ay)(),
        V = D / U > w,
        G = (0, u.bG)([h.A], () => null != h.A.getSelectedParticipant(t)),
        B = l.useRef(null),
        H = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        F = (0, u.bG)([f.A], () => f.A.getRoomObjects(t)),
        z = H.size,
        W = Math.max(0, L.length - H.size),
        Y = F.get(x.N.NOTE)?.length ?? 0,
        K = O.length + 1 + Y;
    return (
        l.useEffect(() => {
            (0, A.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(f.A.getRoom(t), f.i),
                n = p.A.getChannel(t)?.guild_id;
            e || null == n || (0, m.z5)(n, t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: R.kL,
            ref: k,
            role: "region",
            "aria-label": M(),
            children: [
                (0, i.jsx)(o.s, {
                    children: _.intl.formatToPlainString(T.default["/l5Wn+"], {
                        seatedCount: z,
                        openSeatCount: W,
                        objectCount: K,
                    }),
                }),
                (0, i.jsxs)("div", {
                    className: s()(R.hk, { [R.Nb]: V }),
                    style: { aspectRatio: w },
                    ref: B,
                    children: [
                        (0, i.jsx)("img", { className: R.Sl, src: P, alt: "" }),
                        (0, i.jsx)(E.A, { channelId: t, roomWidth: D }),
                        (0, i.jsx)("div", {
                            role: "list",
                            "aria-label": _.intl.string(T.default.F9DcvR),
                            children: L.map((e, n) =>
                                (0, i.jsx)(
                                    y.A,
                                    {
                                        channelId: t,
                                        x: e.position.x,
                                        y: e.position.y,
                                        label: e.getLabel(),
                                        roomWidth: D,
                                    },
                                    n,
                                ),
                            ),
                        }),
                        (0, i.jsxs)("div", {
                            role: "list",
                            "aria-label": _.intl.string(T.default.JYlbK5),
                            children: [
                                (0, i.jsx)(C.A, {
                                    channelId: t,
                                    plantConfig: O,
                                    roomWidth: D,
                                    roomHeight: U,
                                    aspectRatio: w,
                                }),
                                (0, i.jsx)(I.A, { channelId: t }),
                            ],
                        }),
                        (0, i.jsx)(g.A, { channelId: t, roomWidth: D }),
                        !G && (0, i.jsx)(v.A, { channelId: t, popoutType: n, aspectRatio: w }),
                        (0, i.jsx)(j.A, { channelId: t, popoutType: n, seatsRef: B, controlsIdle: a, height: U }),
                    ],
                }),
                G && (0, i.jsx)(N.A, { channelId: t, popoutType: n, width: D, height: U }),
            ],
        })
    );
}
