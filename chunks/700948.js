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
    T = n(189998),
    _ = n(1195),
    R = n(375708),
    S = n(923932);
function L(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        L = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        {
            background: O,
            backgroundBlurred: P,
            seats: M,
            aspectRatio: w,
            plants: D,
            ducky: U,
            screen: V,
            getName: k,
        } = T.iX[L],
        { width: G = 0, height: B = 0, ref: F } = (0, c.Ay)(),
        H = G / B > w,
        z = H ? B * w : G,
        W = (0, u.bG)([f.A], () => f.A.getVideoOverlayVisibility()),
        $ = W ? (0, T.bf)(w, H) : 1,
        Y = l.useRef(null),
        K = l.useRef(null),
        q = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        X = (0, u.bG)([f.A], () => f.A.getNotes(t)),
        Z = q.size,
        Q = Math.max(0, M.length - q.size),
        J = D.length + +(null != U) + X.length,
        [ee, et] = l.useState(!1),
        en = l.useMemo(() => ({ isMenuOpen: ee, setMenuOpen: et }), [ee, et]);
    (0, b.A)(t, q, X);
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
        (0, i.jsx)("div", {
            className: S.kL,
            style: {
                backgroundImage: `url(${W ? P : O})`,
                backgroundSize: H ? `auto ${100 * $}%` : `${100 * $}% auto`,
            },
            ref: F,
            role: "region",
            "aria-label": k(),
            children: W
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
                              style: { aspectRatio: w },
                              ref: Y,
                              children: (0, i.jsx)(x.t.Provider, {
                                  value: en,
                                  children: (0, i.jsxs)(g.bE, {
                                      channelId: t,
                                      containerRef: K,
                                      roomWidth: z,
                                      children: [
                                          (0, i.jsxs)(h.xp, {
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
                                                              children: M.map((e, n) =>
                                                                  (0, i.jsx)(
                                                                      I.A,
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
                                                                  (0, i.jsx)(y.A, {
                                                                      channelId: t,
                                                                      plantConfig: D,
                                                                      roomWidth: z,
                                                                  }),
                                                                  null != U &&
                                                                      (0, i.jsx)(E.A, { channelId: t, position: U }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(C.A, { channelId: t, roomWidth: z }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, i.jsx)("div", {
                                              className: s()(S.N5, { [S.ns]: ee }),
                                              "aria-hidden": !0,
                                          }),
                                      ],
                                  }),
                              }),
                          }),
                      ],
                  }),
        })
    );
}
