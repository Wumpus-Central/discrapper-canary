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
    y = n(913481),
    C = n(711478),
    j = n(487048),
    v = n(232571),
    E = n(109591),
    N = n(212053),
    I = n(519342),
    b = n(241215),
    T = n(207274),
    _ = n(189998),
    R = n(662731),
    S = n(375708),
    L = n(886943);
function P(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        P = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: w, backgroundBlurred: O, seats: M, aspectRatio: D, plants: U, screen: k, getName: V } = _.iX[P],
        { width: G = 0, height: B = 0, ref: H } = (0, c.Ay)(),
        F = G / B > D,
        z = F ? B * D : G,
        W = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        $ = W ? (0, _.bf)(D, F) : 1,
        K = l.useRef(null),
        Y = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        X = (0, u.bG)([x.A], () => x.A.getRoomObjects(t)),
        q = Y.size,
        Z = Math.max(0, M.length - Y.size),
        Q = X.get(g.N.NOTE)?.length ?? 0,
        J = U.length + 1 + Q;
    return (
        l.useEffect(() => {
            (0, f.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(x.A.getRoom(t), x.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, A.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: L.kL,
            style: {
                backgroundImage: `url(${W ? O : w})`,
                backgroundSize: F ? `auto ${100 * $}%` : `${100 * $}% auto`,
            },
            ref: H,
            role: "region",
            "aria-label": V(),
            children: W
                ? (0, i.jsx)(b.A, { channelId: t, popoutType: n, width: G, height: B })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: S.intl.formatToPlainString(R.default["/l5Wn+"], {
                                  seatedCount: q,
                                  openSeatCount: Z,
                                  objectCount: J,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(L.hk, { [L.Nb]: F }),
                              style: { aspectRatio: D },
                              ref: K,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: K,
                                  children: [
                                      (0, i.jsx)(j.A, { channelId: t, corners: k, roomWidth: z }),
                                      (0, i.jsx)(I.A, { channelId: t, roomWidth: z }),
                                      (0, i.jsx)("div", {
                                          role: "list",
                                          "aria-label": S.intl.string(R.default.F9DcvR),
                                          children: M.map((e, n) =>
                                              (0, i.jsx)(
                                                  v.A,
                                                  {
                                                      channelId: t,
                                                      x: e.position.x,
                                                      y: e.position.y,
                                                      label: e.getLabel(),
                                                      roomWidth: z,
                                                  },
                                                  n,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsxs)("div", {
                                          role: "list",
                                          "aria-label": S.intl.string(R.default.JYlbK5),
                                          children: [
                                              (0, i.jsx)(C.A, { channelId: t, plantConfig: U, roomWidth: z }),
                                              (0, i.jsx)(T.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(y.A, { channelId: t, roomWidth: z }),
                                      (0, i.jsx)(N.A, { channelId: t, popoutType: n, aspectRatio: D }),
                                      (0, i.jsx)(E.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: K,
                                          controlsIdle: a,
                                          height: B,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
