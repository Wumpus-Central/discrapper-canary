n.d(t, { A: () => L });
var i = n(477900),
    l = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(435558),
    o = n(467324),
    c = n(494012),
    d = n(821578),
    u = n(17928),
    h = n(259678),
    p = n(734057),
    m = n(446243),
    A = n(920639),
    f = n(558076),
    x = n(856660),
    g = n(544299),
    C = n(913481),
    y = n(711478),
    j = n(487048),
    I = n(232571),
    N = n(519342),
    v = n(241215),
    E = n(207274),
    b = n(956480),
    T = n(761583),
    _ = n(1195),
    R = n(375708),
    S = n(923932);
function L(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        L = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        {
            background: O,
            backgroundBlurred: P,
            seats: w,
            aspectRatio: M,
            plants: U,
            duck: D,
            screen: V,
            getName: k,
        } = T.iX[L],
        { width: G = 0, height: B = 0, ref: F } = (0, c.Ay)(),
        H = G / B > M,
        z = H ? B * M : G,
        W = (0, u.bG)([f.A], () => f.A.getVideoOverlayVisibility()),
        $ = W ? (0, T.bf)(M, H) : 1,
        Y = l.useRef(null),
        K = l.useRef(null),
        X = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        q = (0, u.bG)([f.A], () => f.A.getNotes(t)),
        Z = X.size,
        Q = Math.max(0, Object.values(w).length - X.size),
        J = U.length + +(null != D) + q.length,
        [ee, et] = l.useState(!1),
        en = l.useMemo(() => ({ isMenuOpen: ee, setMenuOpen: et }), [ee, et]);
    (0, b.A)(t, X, q);
    let ei = (0, g.Y1)(t),
        el = R.intl.string(ei ? _.default.F9DcvR : _.default["sV/+Cu"]);
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
            className: S.kL,
            style: {
                backgroundImage: `url(${W ? P : O})`,
                backgroundSize: H ? `auto ${100 * $}%` : `${100 * $}% auto`,
            },
            ref: F,
            role: "region",
            "aria-label": k(),
            children: [
                W
                    ? (0, i.jsx)(v.A, {
                          channelId: t,
                          popoutType: n,
                          width: G,
                          height: B,
                          idle: a,
                          onClose: () => (0, m.UV)(!1, t),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.s, {
                                  children: R.intl.formatToPlainString(_.default["/l5Wn+"], {
                                      seatedCount: Z,
                                      openSeatCount: Q,
                                      objectCount: J,
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: s()(S.hk, { [S.Nb]: H }),
                                  style: { aspectRatio: M },
                                  ref: Y,
                                  children: (0, i.jsx)(x.t.Provider, {
                                      value: en,
                                      children: (0, i.jsx)(g.bE, {
                                          channelId: t,
                                          containerRef: K,
                                          roomWidth: z,
                                          children: (0, i.jsxs)(h.xp, {
                                              containerRef: Y,
                                              children: [
                                                  (0, i.jsx)(j.A, { channelId: t, corners: V, roomWidth: z }),
                                                  (0, i.jsxs)("div", {
                                                      ref: K,
                                                      children: [
                                                          (0, i.jsx)(N.A, { channelId: t, roomWidth: z }),
                                                          (0, i.jsx)("div", {
                                                              role: "list",
                                                              "aria-label": el,
                                                              children: Object.entries(w).map((e) => {
                                                                  let [n, l] = e;
                                                                  return (0, i.jsx)(
                                                                      I.A,
                                                                      {
                                                                          channelId: t,
                                                                          x: l.position.x,
                                                                          y: l.position.y,
                                                                          label: l.getLabel(),
                                                                          roomWidth: z,
                                                                          seat: parseInt(n),
                                                                      },
                                                                      n,
                                                                  );
                                                              }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              role: "list",
                                                              "aria-label": R.intl.string(_.default.JYlbK5),
                                                              children: [
                                                                  (0, i.jsx)(y.A, {
                                                                      channelId: t,
                                                                      plantConfig: U,
                                                                      roomWidth: z,
                                                                  }),
                                                                  null != D &&
                                                                      (0, i.jsx)(E.A, {
                                                                          channelId: t,
                                                                          position: D.position,
                                                                      }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(C.A, { channelId: t, roomWidth: z }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                (0, i.jsx)("div", { className: s()(S.N5, { [S.ns]: ee }), "aria-hidden": !0 }),
            ],
        })
    );
}
