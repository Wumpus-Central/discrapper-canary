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
    T = n(4264),
    R = n(662731),
    _ = n(375708),
    S = n(886943);
function P(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        P = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: L, backgroundBlurred: w, seats: O, aspectRatio: M, plants: D, getName: U } = T.iX[P],
        { width: k = 0, height: V = 0, ref: G } = (0, c.Ay)(),
        B = k / V > M,
        H = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        F = H ? (0, T.bf)(M, B) : 1,
        z = l.useRef(null),
        W = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        Y = (0, u.bG)([x.A], () => x.A.getRoomObjects(t)),
        K = W.size,
        X = Math.max(0, O.length - W.size),
        $ = Y.get(g.N.NOTE)?.length ?? 0,
        Z = D.length + 1 + $;
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
            className: S.kL,
            style: {
                backgroundImage: `url(${H ? w : L})`,
                backgroundSize: B ? `auto ${100 * F}%` : `${100 * F}% auto`,
            },
            ref: G,
            role: "region",
            "aria-label": U(),
            children: H
                ? (0, i.jsx)(I.A, { channelId: t, popoutType: n, width: k, height: V })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: _.intl.formatToPlainString(R.default["/l5Wn+"], {
                                  seatedCount: K,
                                  openSeatCount: X,
                                  objectCount: Z,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(S.hk, { [S.Nb]: B }),
                              style: { aspectRatio: M },
                              ref: z,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: z,
                                  children: [
                                      (0, i.jsx)(N.A, { channelId: t, roomWidth: k }),
                                      (0, i.jsx)("div", {
                                          role: "list",
                                          "aria-label": _.intl.string(R.default.F9DcvR),
                                          children: O.map((e, n) =>
                                              (0, i.jsx)(
                                                  j.A,
                                                  {
                                                      channelId: t,
                                                      x: e.position.x,
                                                      y: e.position.y,
                                                      label: e.getLabel(),
                                                      roomWidth: k,
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
                                                  plantConfig: D,
                                                  roomWidth: k,
                                                  roomHeight: V,
                                                  aspectRatio: M,
                                              }),
                                              (0, i.jsx)(b.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(C.A, { channelId: t, roomWidth: k }),
                                      (0, i.jsx)(E.A, { channelId: t, popoutType: n, aspectRatio: M }),
                                      (0, i.jsx)(v.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: z,
                                          controlsIdle: a,
                                          height: V,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
