n.d(t, { A: () => S });
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
    x = n(856660),
    g = n(913481),
    C = n(711478),
    y = n(487048),
    j = n(232571),
    I = n(519342),
    v = n(241215),
    N = n(207274),
    E = n(956480),
    b = n(189998),
    _ = n(1195),
    T = n(375708),
    R = n(923932);
function S(e) {
    let { channelId: t, popoutType: n, idle: a } = e,
        S = (0, u.bG)([A.A], () => A.A.getRoom(t)?.background ?? d.I.DEFAULT),
        { background: L, backgroundBlurred: O, seats: P, aspectRatio: M, plants: w, screen: D, getName: U } = b.iX[S],
        { width: V = 0, height: k = 0, ref: G } = (0, c.Ay)(),
        B = V / k > M,
        F = B ? k * M : V,
        z = (0, u.bG)([A.A], () => A.A.getVideoOverlayVisibility()),
        H = z ? (0, b.bf)(M, B) : 1,
        W = l.useRef(null),
        $ = (0, u.bG)([A.A], () => A.A.getRoomUsers(t)),
        Y = (0, u.bG)([A.A], () => A.A.getNotes(t)),
        K = $.size,
        q = Math.max(0, P.length - $.size),
        X = w.length + 1 + Y.length,
        [Z, Q] = l.useState(!1),
        J = l.useMemo(() => ({ isMenuOpen: Z, setMenuOpen: Q }), [Z, Q]);
    return (
        (0, E.A)(t, $, Y),
        l.useEffect(() => {
            (0, f.zR)({ channelId: t });
        }, [t]),
        l.useEffect(() => {
            let e = !(0, r.isEqual)(A.A.getRoom(t), A.i),
                n = p.A.getChannel(t)?.guild_id;
            e || null == n || (0, m.z5)(n, t);
        }, [t]),
        (0, i.jsx)("div", {
            className: R.kL,
            style: {
                backgroundImage: `url(${z ? O : L})`,
                backgroundSize: B ? `auto ${100 * H}%` : `${100 * H}% auto`,
            },
            ref: G,
            role: "region",
            "aria-label": U(),
            children: z
                ? (0, i.jsx)(v.A, {
                      channelId: t,
                      popoutType: n,
                      width: V,
                      height: k,
                      idle: a,
                      onClose: () => (0, m.UV)(!1, t),
                  })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(o.s, {
                              children: T.intl.formatToPlainString(_.default["/l5Wn+"], {
                                  seatedCount: K,
                                  openSeatCount: q,
                                  objectCount: X,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              className: s()(R.hk, { [R.Nb]: B }),
                              style: { aspectRatio: M },
                              ref: W,
                              children: (0, i.jsxs)(x.t.Provider, {
                                  value: J,
                                  children: [
                                      (0, i.jsxs)(h.xp, {
                                          containerRef: W,
                                          children: [
                                              (0, i.jsx)(y.A, { channelId: t, corners: D, roomWidth: F }),
                                              (0, i.jsx)(I.A, { channelId: t, roomWidth: F }),
                                              (0, i.jsx)("div", {
                                                  role: "list",
                                                  "aria-label": T.intl.string(_.default.F9DcvR),
                                                  children: P.map((e, n) =>
                                                      (0, i.jsx)(
                                                          j.A,
                                                          {
                                                              channelId: t,
                                                              x: e.position.x,
                                                              y: e.position.y,
                                                              label: e.getLabel(),
                                                              roomWidth: F,
                                                          },
                                                          n,
                                                      ),
                                                  ),
                                              }),
                                              (0, i.jsxs)("div", {
                                                  role: "list",
                                                  "aria-label": T.intl.string(_.default.JYlbK5),
                                                  children: [
                                                      (0, i.jsx)(C.A, { channelId: t, plantConfig: w, roomWidth: F }),
                                                      (0, i.jsx)(N.A, { channelId: t }),
                                                  ],
                                              }),
                                              (0, i.jsx)(g.A, { channelId: t, roomWidth: F }),
                                          ],
                                      }),
                                      (0, i.jsx)("div", { className: s()(R.N5, { [R.ns]: Z }), "aria-hidden": !0 }),
                                  ],
                              }),
                          }),
                      ],
                  }),
        })
    );
}
