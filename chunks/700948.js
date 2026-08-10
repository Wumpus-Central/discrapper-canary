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
    f = n(446243),
    A = n(920639),
    x = n(558076),
    g = n(872772),
    y = n(913481),
    C = n(711478),
    j = n(487048),
    v = n(232571),
    E = n(109591),
    N = n(519342),
    I = n(241215),
    b = n(207274),
    T = n(956480),
    _ = n(189998),
    R = n(662731),
    S = n(375708),
    L = n(886943);
function P(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        P = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: w, backgroundBlurred: O, seats: M, aspectRatio: D, plants: U, screen: k, getName: V } = _.iX[P],
        { width: G = 0, height: B = 0, ref: F } = (0, c.Ay)(),
        H = G / B > D,
        z = H ? B * D : G,
        W = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        $ = W ? (0, _.bf)(D, H) : 1,
        Y = l.useRef(null),
        K = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        X = (0, u.bG)([x.A], () => x.A.getRoomObjects(t)),
        q = K.size,
        Z = Math.max(0, M.length - K.size),
        Q = X.get(g.N.NOTE)?.length ?? 0,
        J = U.length + 1 + Q;
    return (
        (0, T.A)(t, K),
        l.useEffect(() => {
            (0, A.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(x.A.getRoom(t), x.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, f.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: L.kL,
            style: {
                backgroundImage: `url(${W ? O : w})`,
                backgroundSize: H ? `auto ${100 * $}%` : `${100 * $}% auto`,
            },
            ref: F,
            role: "region",
            "aria-label": V(),
            children: W
                ? (0, i.jsx)(I.A, { channelId: t, popoutType: n, width: G, height: B })
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
                              className: s()(L.hk, { [L.Nb]: H }),
                              style: { aspectRatio: D },
                              ref: Y,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: Y,
                                  children: [
                                      (0, i.jsx)(j.A, { channelId: t, corners: k, roomWidth: z }),
                                      (0, i.jsx)(N.A, { channelId: t, roomWidth: z }),
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
                                              (0, i.jsx)(b.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(y.A, { channelId: t, roomWidth: z }),
                                      (0, i.jsx)(E.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: Y,
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
