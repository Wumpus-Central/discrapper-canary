n.d(t, { A: () => $, k: () => U });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(990078),
    d = n(834730),
    o = n(289873),
    c = n(534514),
    u = n(885574),
    m = n(793574),
    v = n(546385),
    g = n(363487),
    b = n(397400),
    x = n(17928),
    f = n(459192),
    j = n(821609),
    p = n(492349),
    h = n(939249),
    C = n(410212),
    I = n(146793),
    k = n(522055),
    S = n(225180),
    N = n(192308),
    A = n(853513),
    y = n(375708),
    P = n(980876);
function T(e) {
    let { guildId: t, gameInstance: a, cost: s } = e;
    return (0, l.jsx)(f.u, {
        "aria-label": y.intl.string(A.default.TZsu1U),
        title: y.intl.string(A.default.TZsu1U),
        body: y.intl.formatToPlainString(A.default["5HQUzD"], { boostCount: s }),
        children: (0, l.jsx)("div", {
            className: P.vI,
            children: (0, l.jsx)(j.$, {
                icon: { type: "icon", asset: p.x },
                text: s.toString(),
                variant: "secondary",
                size: "sm",
                "aria-label": y.intl.string(A.default.TZsu1U),
                onClick: (e) => {
                    e.stopPropagation(),
                        (0, N.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("31920"),
                                n.e("36723"),
                                n.e("31203"),
                                n.e("69149"),
                                n.e("3345"),
                                n.e("34598"),
                                n.e("49379"),
                                n.e("86794"),
                                n.e("32140"),
                            ]).then(n.bind(n, 608391));
                            return (n) => (0, l.jsx)(e, { guildId: t, gameInstance: a, ...n });
                        });
                },
            }),
        }),
    });
}
function G(e) {
    let { guildId: t, gameInstance: n, onClick: s } = e,
        r = (0, x.bG)([k.A], () => k.A.getStateForGuild(t)),
        d = a.useMemo(() => r?.entitlements?.[n.entitlementId], [r?.entitlements, n.entitlementId]),
        o = d?.ends_at != null,
        u = (0, C.A)(d),
        m = (0, S.A)(n.gameId, "icon"),
        v = (0, g.A)(t);
    return null == u
        ? null
        : (0, l.jsxs)(h.D, {
              className: i()(P.LO, { [P.r9]: !v }),
              onClick: v ? () => s(n) : void 0,
              "aria-disabled": !v,
              children: [
                  (0, l.jsx)("img", { className: P.Sl, alt: "", src: m }),
                  (0, l.jsxs)("div", {
                      className: P.FS,
                      children: [
                          (0, l.jsx)(c.D, { variant: "heading-sm/semibold", children: n.name }),
                          o
                              ? (0, l.jsx)(I.P5, { dateString: d.ends_at })
                              : (0, l.jsx)(I.TG, { text: y.intl.string(A.default.FFLkmx) }),
                      ],
                  }),
                  v && (0, l.jsx)(T, { guildId: t, gameInstance: n, cost: u }),
              ],
          });
}
var E = n(895770),
    L = n(752975),
    _ = n(509790),
    O = n(548392),
    D = n(800007),
    w = n(576709),
    B = n(51158);
function U() {
    return (0, l.jsx)(v.A, {
        className: B.Bq,
        children: (0, l.jsx)(d.E, {
            variant: "text-sm/medium",
            children: y.intl.formatToPlainString(w.default.xta2U9, { maxInstances: D.ZI }),
        }),
    });
}
function $() {
    let {
        guildId: e,
        gameServerGames: t,
        instances: n,
        gameServerInstance: s,
        setGameServerInstance: v,
        setCurrentGame: x,
        onNext: f,
    } = (0, _.bv)();
    (0, b.ft)(e, null == s ? "create" : "edit");
    let j = a.useCallback(
            (e) => {
                x(e), f();
            },
            [x, f],
        ),
        p = a.useCallback(
            (e) => {
                v(e), f();
            },
            [v, f],
        ),
        h = n.length >= D.ZI,
        C = n.length > 0,
        I = (0, g.A)(e);
    return 0 === Object.values(t).length
        ? (0, l.jsx)("div", { className: B.g4, children: (0, l.jsx)(o.y, { type: o.t.SPINNING_CIRCLE }) })
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  C &&
                      (0, l.jsxs)("div", {
                          className: B.yn,
                          children: [
                              (0, l.jsx)(c.D, {
                                  variant: "heading-md/semibold",
                                  children: y.intl.string(w.default.BOWmmT),
                              }),
                              (0, l.jsx)("div", {
                                  className: B.Hy,
                                  children: n.map((t, n) =>
                                      (0, l.jsx)(
                                          G,
                                          { guildId: e, gameInstance: t, onClick: p },
                                          `instance-${t.id}-${n}`,
                                      ),
                                  ),
                              }),
                              h && (0, l.jsx)(U, {}),
                          ],
                      }),
                  (0, l.jsxs)("div", {
                      className: i()(B.yn, { [B.r9]: h }),
                      children: [
                          C &&
                              (0, l.jsx)(c.D, {
                                  variant: "heading-md/semibold",
                                  children: y.intl.string(w.default.NIwDqW),
                              }),
                          (0, l.jsx)("div", {
                              className: B.Y_,
                              children: Object.values(t).map((t, n) =>
                                  (0, l.jsx)(
                                      r.m,
                                      {
                                          asContainer: !0,
                                          text: t.disabled
                                              ? y.intl.formatToPlainString(w.default.uVpJYf, { gameName: t.name })
                                              : null,
                                          position: "top",
                                          children: (0, l.jsx)(E.A, {
                                              guildId: e,
                                              game: t,
                                              variant: h || !I || t.disabled ? E.e.DISABLED : E.e.CLICKABLE,
                                              onClick: j,
                                              location: m.A.GAME_SERVER_SETUP_MODAL,
                                          }),
                                      },
                                      `game-${t.id}-${n}`,
                                  ),
                              ),
                          }),
                      ],
                  }),
                  (0, l.jsxs)(O.N4, {
                      step: D.HS.SELECT_GAME,
                      className: B.xQ,
                      children: [
                          (0, l.jsxs)("div", {
                              className: B.UW,
                              children: [
                                  (0, l.jsx)(u.m, { size: "sm" }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/medium",
                                      children: y.intl.string(w.default["5DjxXm"]),
                                  }),
                              ],
                          }),
                          (0, l.jsx)(L.A, {}),
                      ],
                  }),
              ],
          });
}
