n.d(t, { A: () => w });
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
    N = n(212053),
    I = n(519342),
    b = n(241215),
    T = n(207274),
    _ = n(956480),
    R = n(189998),
    S = n(662731),
    L = n(375708),
    P = n(886943);
function w(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        w = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: O, backgroundBlurred: M, seats: D, aspectRatio: U, plants: k, screen: V, getName: G } = R.iX[w],
        { width: B = 0, height: H = 0, ref: F } = (0, c.Ay)(),
        z = B / H > U,
        W = z ? H * U : B,
        $ = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        K = $ ? (0, R.bf)(U, z) : 1,
        Y = l.useRef(null),
        X = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        q = (0, u.bG)([x.A], () => x.A.getRoomObjects(t)),
        Z = X.size,
        Q = Math.max(0, D.length - X.size),
        J = q.get(g.N.NOTE)?.length ?? 0,
        ee = k.length + 1 + J;
    return (
        (0, _.A)(t, X),
        l.useEffect(() => {
            (0, A.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(x.A.getRoom(t), x.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, f.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: P.kL,
            style: {
                backgroundImage: `url(${$ ? M : O})`,
                backgroundSize: z ? `auto ${100 * K}%` : `${100 * K}% auto`,
            },
            ref: F,
            role: "region",
            "aria-label": G(),
            children: $
                ? (0, i.jsx)(b.A, { channelId: t, popoutType: n, width: B, height: H })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: L.intl.formatToPlainString(S.default["/l5Wn+"], {
                                  seatedCount: Z,
                                  openSeatCount: Q,
                                  objectCount: ee,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(P.hk, { [P.Nb]: z }),
                              style: { aspectRatio: U },
                              ref: Y,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: Y,
                                  children: [
                                      (0, i.jsx)(j.A, { channelId: t, corners: V, roomWidth: W }),
                                      (0, i.jsx)(I.A, { channelId: t, roomWidth: W }),
                                      (0, i.jsx)("div", {
                                          role: "list",
                                          "aria-label": L.intl.string(S.default.F9DcvR),
                                          children: D.map((e, n) =>
                                              (0, i.jsx)(
                                                  v.A,
                                                  {
                                                      channelId: t,
                                                      x: e.position.x,
                                                      y: e.position.y,
                                                      label: e.getLabel(),
                                                      roomWidth: W,
                                                  },
                                                  n,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsxs)("div", {
                                          role: "list",
                                          "aria-label": L.intl.string(S.default.JYlbK5),
                                          children: [
                                              (0, i.jsx)(C.A, { channelId: t, plantConfig: k, roomWidth: W }),
                                              (0, i.jsx)(T.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(y.A, { channelId: t, roomWidth: W }),
                                      (0, i.jsx)(N.A, { channelId: t, popoutType: n, aspectRatio: U }),
                                      (0, i.jsx)(E.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: Y,
                                          controlsIdle: a,
                                          height: H,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
