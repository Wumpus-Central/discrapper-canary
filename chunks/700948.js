n.d(t, { A: () => R });
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
    p = n(734057),
    m = n(446243),
    f = n(920639),
    A = n(558076),
    x = n(913481),
    g = n(711478),
    C = n(487048),
    y = n(232571),
    j = n(519342),
    I = n(241215),
    v = n(207274),
    E = n(956480),
    N = n(189998),
    b = n(662731),
    _ = n(375708),
    T = n(886943);
function R(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        R = (0, u.bG)([A.A], () => A.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: S, backgroundBlurred: L, seats: O, aspectRatio: P, plants: w, screen: M, getName: D } = N.iX[R],
        { width: U = 0, height: V = 0, ref: k } = (0, c.Ay)(),
        G = U / V > P,
        B = G ? V * P : U,
        F = (0, u.bG)([A.A], () => A.A.getVideoOverlayVisibility()),
        z = F ? (0, N.bf)(P, G) : 1,
        H = l.useRef(null),
        W = (0, u.bG)([A.A], () => A.A.getRoomUsers(t)),
        $ = (0, u.bG)([A.A], () => A.A.getNotes(t)),
        Y = W.size,
        K = Math.max(0, O.length - W.size),
        q = w.length + 1 + $.length;
    return (
        (0, E.A)(t, W, $),
        l.useEffect(() => {
            (0, f.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(A.A.getRoom(t), A.i),
                n = p.A.getChannel(t)?.guild_id;
            e || null == n || (0, m.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: T.kL,
            style: {
                backgroundImage: `url(${F ? L : S})`,
                backgroundSize: G ? `auto ${100 * z}%` : `${100 * z}% auto`,
            },
            ref: k,
            role: "region",
            "aria-label": D(),
            children: F
                ? (0, i.jsx)(I.A, {
                      channelId: t,
                      popoutType: n,
                      width: U,
                      height: V,
                      idle: a,
                      onClose: () => (0, m.UV)(!1, t),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: _.intl.formatToPlainString(b.default["/l5Wn+"], {
                                  seatedCount: Y,
                                  openSeatCount: K,
                                  objectCount: q,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(T.hk, { [T.Nb]: G }),
                              style: { aspectRatio: P },
                              ref: H,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: H,
                                  children: [
                                      (0, i.jsx)(C.A, { channelId: t, corners: M, roomWidth: B }),
                                      (0, i.jsx)(j.A, { channelId: t, roomWidth: B }),
                                      (0, i.jsx)("div", {
                                          role: "list",
                                          "aria-label": _.intl.string(b.default.F9DcvR),
                                          children: O.map((e, n) =>
                                              (0, i.jsx)(
                                                  y.A,
                                                  {
                                                      channelId: t,
                                                      x: e.position.x,
                                                      y: e.position.y,
                                                      label: e.getLabel(),
                                                      roomWidth: B,
                                                  },
                                                  n,
                                              ),
                                          ),
                                      }),
                                      (0, i.jsxs)("div", {
                                          role: "list",
                                          "aria-label": _.intl.string(b.default.JYlbK5),
                                          children: [
                                              (0, i.jsx)(g.A, { channelId: t, plantConfig: w, roomWidth: B }),
                                              (0, i.jsx)(v.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(x.A, { channelId: t, roomWidth: B }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
