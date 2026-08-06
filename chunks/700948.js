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
    x = n(920639),
    f = n(558076),
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
        P = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: w, backgroundBlurred: O, seats: M, aspectRatio: D, plants: U, screen: k, getName: V } = _.iX[P],
        { width: G = 0, height: B = 0, ref: H } = (0, c.Ay)(),
        F = G / B > D,
        z = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        W = z ? (0, _.bf)(D, F) : 1,
        $ = l.useRef(null),
        Y = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        K = (0, u.bG)([f.A], () => f.A.getRoomObjects(t)),
        X = Y.size,
        Z = Math.max(0, M.length - Y.size),
        q = K.get(g.N.NOTE)?.length ?? 0,
        Q = U.length + 1 + q;
    return (
        l.useEffect(() => {
            (0, x.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(f.A.getRoom(t), f.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, A.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: L.kL,
            style: {
                backgroundImage: `url(${z ? O : w})`,
                backgroundSize: F ? `auto ${100 * W}%` : `${100 * W}% auto`,
            },
            ref: H,
            role: "region",
            "aria-label": V(),
            children: z
                ? (0, i.jsx)(b.A, { channelId: t, popoutType: n, width: G, height: B })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: S.intl.formatToPlainString(R.default["/l5Wn+"], {
                                  seatedCount: X,
                                  openSeatCount: Z,
                                  objectCount: Q,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(L.hk, { [L.Nb]: F }),
                              style: { aspectRatio: D },
                              ref: $,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: $,
                                  children: [
                                      (0, i.jsx)(j.A, {
                                          channelId: t,
                                          corners: k,
                                          roomWidth: G,
                                          roomHeight: B,
                                          aspectRatio: D,
                                      }),
                                      (0, i.jsx)(I.A, { channelId: t, roomWidth: G }),
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
                                                      roomWidth: G,
                                                  },
                                                  n,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsxs)("div", {
                                          role: "list",
                                          "aria-label": S.intl.string(R.default.JYlbK5),
                                          children: [
                                              (0, i.jsx)(C.A, {
                                                  channelId: t,
                                                  plantConfig: U,
                                                  roomWidth: G,
                                                  roomHeight: B,
                                                  aspectRatio: D,
                                              }),
                                              (0, i.jsx)(T.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(y.A, { channelId: t, roomWidth: G }),
                                      (0, i.jsx)(N.A, { channelId: t, popoutType: n, aspectRatio: D }),
                                      (0, i.jsx)(E.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: $,
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
