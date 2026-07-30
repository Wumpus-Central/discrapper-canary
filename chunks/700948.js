n.d(t, { A: () => P });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n(64659),
    c = n(494012),
    d = n(821578),
    u = n(17928),
    h = n(259678),
    p = n(313961),
    m = n(734057),
    A = n(446243),
    f = n(920639),
    x = n(558076),
    g = n(872772),
    C = n(913481),
    y = n(711478),
    j = n(232571),
    v = n(109591),
    E = n(212053),
    N = n(519342),
    I = n(241215),
    b = n(207274),
    T = n(971954),
    R = n(662731),
    _ = n(375708),
    S = n(886943);
function P(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        P = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: L, seats: w, aspectRatio: O, plants: M, getName: D } = T.iX[P],
        { width: U = 0, height: k = 0, ref: V } = (0, c.Ay)(),
        G = U / k > O,
        B = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        H = l.useRef(null),
        F = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        z = (0, u.bG)([x.A], () => x.A.getRoomObjects(t)),
        W = F.size,
        Y = Math.max(0, w.length - F.size),
        K = z.get(g.N.NOTE)?.length ?? 0,
        X = M.length + 1 + K;
    return (
        l.useEffect(() => {
            (0, f.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(x.A.getRoom(t), x.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, A.z5)(n, t);
        }, [t]),
        (0, i.jsxs)("div", {
            className: S.kL,
            ref: V,
            role: "region",
            "aria-label": D(),
            children: [
                (0, i.jsx)(o.s, {
                    children: _.intl.formatToPlainString(R.default["/l5Wn+"], {
                        seatedCount: W,
                        openSeatCount: Y,
                        objectCount: X,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: s()(S.hk, { [S.Nb]: G }),
                    style: { aspectRatio: O },
                    ref: H,
                    children: (0, i.jsxs)(h.xp, {
                        containerRef: H,
                        children: [
                            (0, i.jsx)("img", { className: S.Sl, src: L, alt: "" }),
                            (0, i.jsx)(N.A, { channelId: t, roomWidth: U }),
                            (0, i.jsx)("div", {
                                role: "list",
                                "aria-label": _.intl.string(R.default.F9DcvR),
                                children: w.map((e, n) =>
                                    (0, i.jsx)(
                                        j.A,
                                        {
                                            channelId: t,
                                            x: e.position.x,
                                            y: e.position.y,
                                            label: e.getLabel(),
                                            roomWidth: U,
                                        },
                                        n,
                                    ),
                                ),
                            }),
                            (0, i.jsxs)("div", {
                                role: "list",
                                "aria-label": _.intl.string(R.default.JYlbK5),
                                children: [
                                    (0, i.jsx)(y.A, {
                                        channelId: t,
                                        plantConfig: M,
                                        roomWidth: U,
                                        roomHeight: k,
                                        aspectRatio: O,
                                    }),
                                    (0, i.jsx)(b.A, { channelId: t }),
                                ],
                            }),
                            (0, i.jsx)(C.A, { channelId: t, roomWidth: U }),
                            !B && (0, i.jsx)(E.A, { channelId: t, popoutType: n, aspectRatio: O }),
                            (0, i.jsx)(v.A, { channelId: t, popoutType: n, seatsRef: H, controlsIdle: a, height: k }),
                        ],
                    }),
                }),
                B && (0, i.jsx)(I.A, { channelId: t, popoutType: n, width: U, height: k }),
            ],
        })
    );
}
