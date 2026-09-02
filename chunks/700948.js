n.d(t, { A: () => O });
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
    b = n(70067),
    _ = n(956480),
    T = n(739820),
    S = n(1195),
    R = n(375708),
    L = n(923932);
function O(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        O = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        {
            background: P,
            backgroundBlurred: M,
            seats: w,
            aspectRatio: U,
            plants: D,
            duck: V,
            notePad: k,
            screen: G,
            getName: B,
        } = T.iX[O],
        { width: F = 0, height: z = 0, ref: H } = (0, c.Ay)(),
        W = F / z > U,
        $ = W ? z * U : F,
        Y = (0, u.bG)([f.A], () => f.A.getVideoOverlayVisibility()),
        K = Y ? (0, T.bf)(U, W) : 1,
        q = l.useRef(null),
        X = l.useRef(null),
        Z = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        Q = (0, u.bG)([f.A], () => f.A.getNotes(t)),
        J = Z.size,
        ee = Math.max(0, Object.values(w).length - Z.size),
        et = D.length + +(null != V) + +(null != k) + Q.length,
        [en, ei] = l.useState(!1),
        el = l.useMemo(() => ({ isMenuOpen: en, setMenuOpen: ei }), [en, ei]);
    (0, _.A)(t, Z, Q);
    let ea = (0, g.Y1)(t),
        es = R.intl.string(ea ? S.default.F9DcvR : S.default["sV/+Cu"]);
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
            className: L.kL,
            style: {
                backgroundImage: `url(${Y ? M : P})`,
                backgroundSize: W ? `auto ${100 * K}%` : `${100 * K}% auto`,
            },
            ref: H,
            role: "region",
            "aria-label": B(),
            children: [
                Y
                    ? (0, i.jsx)(v.A, {
                          channelId: t,
                          popoutType: n,
                          width: F,
                          height: z,
                          idle: a,
                          onClose: () => (0, m.UV)(!1, t),
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(o.s, {
                                  children: R.intl.formatToPlainString(S.default["/l5Wn+"], {
                                      seatedCount: J,
                                      openSeatCount: ee,
                                      objectCount: et,
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: s()(L.hk, { [L.Nb]: W }),
                                  style: { aspectRatio: U },
                                  ref: q,
                                  children: (0, i.jsx)(x.t.Provider, {
                                      value: el,
                                      children: (0, i.jsx)(g.bE, {
                                          channelId: t,
                                          containerRef: X,
                                          roomWidth: $,
                                          children: (0, i.jsxs)(h.xp, {
                                              containerRef: q,
                                              children: [
                                                  (0, i.jsx)(j.A, { channelId: t, corners: G, roomWidth: $ }),
                                                  (0, i.jsxs)("div", {
                                                      ref: X,
                                                      children: [
                                                          (0, i.jsx)(N.A, { channelId: t, roomWidth: $ }),
                                                          (0, i.jsx)("div", {
                                                              role: "list",
                                                              "aria-label": es,
                                                              children: Object.entries(w).map((e) => {
                                                                  let [n, l] = e;
                                                                  return (0, i.jsx)(
                                                                      I.A,
                                                                      {
                                                                          channelId: t,
                                                                          x: l.position.x,
                                                                          y: l.position.y,
                                                                          label: l.getLabel(),
                                                                          roomWidth: $,
                                                                          seat: parseInt(n),
                                                                      },
                                                                      n,
                                                                  );
                                                              }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              role: "list",
                                                              "aria-label": R.intl.string(S.default.JYlbK5),
                                                              children: [
                                                                  (0, i.jsx)(y.A, {
                                                                      channelId: t,
                                                                      plantConfig: D,
                                                                      roomWidth: $,
                                                                  }),
                                                                  null != V &&
                                                                      (0, i.jsx)(E.A, {
                                                                          channelId: t,
                                                                          position: V.position,
                                                                      }),
                                                                  null != k &&
                                                                      (0, i.jsx)(b.A, {
                                                                          channelId: t,
                                                                          asset: k.asset,
                                                                          position: k.position,
                                                                          width: k.width,
                                                                      }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(C.A, { channelId: t, roomWidth: $ }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                (0, i.jsx)("div", { className: s()(L.N5, { [L.ns]: en }), "aria-hidden": !0 }),
            ],
        })
    );
}
