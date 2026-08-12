n.d(t, { A: () => L });
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
    p = n(198052),
    m = n(734057),
    f = n(446243),
    A = n(920639),
    x = n(558076),
    g = n(913481),
    C = n(711478),
    y = n(487048),
    j = n(232571),
    I = n(109591),
    v = n(519342),
    E = n(241215),
    N = n(207274),
    b = n(956480),
    T = n(189998),
    _ = n(662731),
    R = n(375708),
    S = n(886943);
function L(e) {
    let { channelId: t, popoutType: n, controlsIdle: a } = e,
        L = (0, u.bG)([x.A], () => x.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: P, backgroundBlurred: O, seats: w, aspectRatio: M, plants: D, screen: U, getName: V } = T.iX[L],
        { width: k = 0, height: G = 0, ref: B } = (0, c.Ay)(),
        F = k / G > M,
        z = F ? G * M : k,
        H = (0, u.bG)([p.A], () => null != p.A.getSelectedParticipant(t)),
        W = H ? (0, T.bf)(M, F) : 1,
        $ = l.useRef(null),
        Y = (0, u.bG)([x.A], () => x.A.getRoomUsers(t)),
        K = (0, u.bG)([x.A], () => x.A.getNotes(t)),
        q = Y.size,
        X = Math.max(0, w.length - Y.size),
        Z = D.length + 1 + K.length;
    return (
        (0, b.A)(t, Y, K),
        l.useEffect(() => {
            (0, A.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(x.A.getRoom(t), x.i),
                n = m.A.getChannel(t)?.guild_id;
            e || null == n || (0, f.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: S.kL,
            style: {
                backgroundImage: `url(${H ? O : P})`,
                backgroundSize: F ? `auto ${100 * W}%` : `${100 * W}% auto`,
            },
            ref: B,
            role: "region",
            "aria-label": V(),
            children: H
                ? (0, i.jsx)(E.A, { channelId: t, popoutType: n, width: k, height: G })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: R.intl.formatToPlainString(_.default["/l5Wn+"], {
                                  seatedCount: q,
                                  openSeatCount: X,
                                  objectCount: Z,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(S.hk, { [S.Nb]: F }),
                              style: { aspectRatio: M },
                              ref: $,
                              children: (0, i.jsxs)(h.xp, {
                                  containerRef: $,
                                  children: [
                                      (0, i.jsx)(y.A, { channelId: t, corners: U, roomWidth: z }),
                                      (0, i.jsx)(v.A, { channelId: t, roomWidth: z }),
                                      (0, i.jsx)("div", {
                                          role: "list",
                                          "aria-label": R.intl.string(_.default.F9DcvR),
                                          children: w.map((e, n) =>
                                              (0, i.jsx)(
                                                  j.A,
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
                                          "aria-label": R.intl.string(_.default.JYlbK5),
                                          children: [
                                              (0, i.jsx)(C.A, { channelId: t, plantConfig: D, roomWidth: z }),
                                              (0, i.jsx)(N.A, { channelId: t }),
                                          ],
                                      }),
                                      (0, i.jsx)(g.A, { channelId: t, roomWidth: z }),
                                      (0, i.jsx)(I.A, {
                                          channelId: t,
                                          popoutType: n,
                                          seatsRef: $,
                                          controlsIdle: a,
                                          height: G,
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
