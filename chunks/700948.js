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
    h = n(559106),
    p = n(734057),
    m = n(446243),
    A = n(920639),
    f = n(558076),
    x = n(856660),
    g = n(544299),
    C = n(913481),
    j = n(711478),
    y = n(487048),
    I = n(232571),
    N = n(519342),
    E = n(241215),
    v = n(207274),
    b = n(70067),
    _ = n(956480),
    S = n(739820),
    T = n(977241),
    R = n(105292),
    O = n(923932);
function L(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        L = (0, u.bG)([f.A], () => f.A.getRoom(t)?.background ?? d.I.DEFAULT),
        {
            background: P,
            backgroundBlurred: M,
            seats: w,
            aspectRatio: U,
            plants: D,
            duck: V,
            notePad: G,
            screen: k,
            getName: B,
        } = S.iX[L],
        { width: F = 0, height: z = 0, ref: H } = (0, c.Ay)(),
        W = F / z > U,
        Y = W ? z * U : F,
        $ = (0, u.bG)([f.A], () => f.A.getVideoOverlayVisibility()),
        K = $ ? (0, S.bf)(U, W) : 1,
        X = l.useRef(null),
        q = l.useRef(null),
        Z = (0, u.bG)([f.A], () => f.A.getRoomUsers(t)),
        Q = (0, u.bG)([f.A], () => f.A.getNotes(t)),
        J = Z.size,
        ee = Math.max(0, Object.values(w).length - Z.size),
        et = D.length + +(null != V) + +(null != G) + Q.length,
        [en, ei] = l.useState(!1),
        el = l.useMemo(() => ({ isMenuOpen: en, setMenuOpen: ei }), [en, ei]);
    (0, _.A)(t, Z, Q);
    let ea = (0, g.Y1)(t),
        es = R.intl.string(ea ? T.default.F9DcvR : T.default["sV/+Cu"]);
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
            className: O.kL,
            style: {
                backgroundImage: `url(${$ ? M : P})`,
                backgroundSize: W ? `auto ${100 * K}%` : `${100 * K}% auto`,
            },
            ref: H,
            role: "region",
            "aria-label": B(),
            children: [
                $
                    ? (0, i.jsx)(E.A, {
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
                                  children: R.intl.formatToPlainString(T.default["/l5Wn+"], {
                                      seatedCount: J,
                                      openSeatCount: ee,
                                      objectCount: et,
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: s()(O.hk, { [O.Nb]: W }),
                                  style: { aspectRatio: U },
                                  ref: X,
                                  children: (0, i.jsx)(x.t.Provider, {
                                      value: el,
                                      children: (0, i.jsx)(g.bE, {
                                          channelId: t,
                                          containerRef: q,
                                          roomWidth: Y,
                                          children: (0, i.jsxs)(h.xp, {
                                              containerRef: X,
                                              children: [
                                                  (0, i.jsx)(y.A, { channelId: t, corners: k, roomWidth: Y }),
                                                  (0, i.jsxs)("div", {
                                                      ref: q,
                                                      children: [
                                                          (0, i.jsx)(N.A, { channelId: t, roomWidth: Y }),
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
                                                                          roomWidth: Y,
                                                                          seat: parseInt(n),
                                                                      },
                                                                      n,
                                                                  );
                                                              }),
                                                          }),
                                                          (0, i.jsxs)("div", {
                                                              role: "list",
                                                              "aria-label": R.intl.string(T.default.JYlbK5),
                                                              children: [
                                                                  (0, i.jsx)(j.A, {
                                                                      channelId: t,
                                                                      plantConfig: D,
                                                                      roomWidth: Y,
                                                                  }),
                                                                  null != V &&
                                                                      (0, i.jsx)(v.A, {
                                                                          channelId: t,
                                                                          position: V.position,
                                                                      }),
                                                                  null != G &&
                                                                      (0, i.jsx)(b.A, {
                                                                          channelId: t,
                                                                          asset: G.asset,
                                                                          position: G.position,
                                                                          width: G.width,
                                                                      }),
                                                              ],
                                                          }),
                                                          (0, i.jsx)(C.A, { channelId: t, roomWidth: Y }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                      }),
                                  }),
                              }),
                          ],
                      }),
                (0, i.jsx)("div", { className: s()(O.N5, { [O.ns]: en }), "aria-hidden": !0 }),
            ],
        })
    );
}
