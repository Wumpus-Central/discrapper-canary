s.d(t, { A: () => y });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(575593),
    o = s(440703),
    c = s(311907),
    u = s(462887),
    d = s(187322),
    m = s(534514),
    _ = s(834730),
    h = s(765671),
    x = s(736653),
    f = s(162232),
    b = s(607470),
    p = s(287809),
    A = s(954571),
    g = s(341915),
    E = s(890687),
    C = s(579473),
    j = s(590202),
    v = s(734736),
    N = s(247455),
    T = s(57718),
    S = s(652215),
    L = s(985018),
    I = s(659249);
let y = (0, l.memo)(function (e) {
    let { quest: t } = e,
        [s, a] = (0, l.useState)(!1),
        [y, O] = (0, l.useState)(24),
        [R, P] = (0, l.useState)(!1),
        Q = (0, l.useRef)(null),
        k = (0, l.useRef)(null),
        w = (0, l.useRef)(null),
        M = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        { ref: D, height: U = 0 } = (0, h.Ay)(),
        q = (0, x.Ay)(),
        B = (0, E.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        F = t.userStatus?.claimedTier ?? 0,
        H = t.config.rewards[F],
        V = H?.type === o.l.FRACTIONAL_PREMIUM,
        W = H?.type === o.l.COLLECTIBLE,
        Y = H?.type === o.l.VIRTUAL_CURRENCY,
        G = H?.collectibleProduct?.items?.[0],
        z = G?.type === i.R.AVATAR_DECORATION ? G : null,
        $ = l.useMemo(
            () =>
                null == H
                    ? null
                    : !0 === Y && t.userStatus?.orbQuantityClaimed != null
                      ? L.intl.format(L.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : H.name,
            [H, Y, t],
        );
    (0, h.i4)(Q, (e) => {
        let { height: t } = e;
        if (!W || null == t || null == k.current || null == Q.current || null == w.current) return;
        let s = Q.current.getBoundingClientRect(),
            n = k.current.getBoundingClientRect(),
            l = w.current.getBoundingClientRect();
        O((n.top - s.top - l.height) / 2);
    });
    let K = (0, u.M)(q),
        J = l.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Z = l.useMemo(() => (0, C.tW)(t, C.fY.REWARD), [t]),
        X = s ? U + 8 : 0,
        { content_position: ee, row_index: et, ...es } = (0, j.fF)(g.uF.TROPHY_CASE_CARD),
        en = () => {
            a(!0), A.default.track(S.HAw.QUEST_HOVER, { quest_id: t.id, ...es });
        },
        el = () => {
            a(!1);
        },
        ea = (e) => {
            P(!0), A.default.track(S.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == H || R
        ? null
        : (0, n.jsx)(d.vN, {
              children: (0, n.jsxs)("div", {
                  ref: Q,
                  tabIndex: 0,
                  onFocus: en,
                  onBlur: el,
                  onMouseEnter: en,
                  onMouseLeave: el,
                  className: r()(I.kL, { [I.yo]: s }),
                  children: [
                      null != M &&
                          W &&
                          null != z &&
                          (0, n.jsx)("div", {
                              ref: w,
                              className: I.FX,
                              style: { top: y },
                              children: (0, n.jsx)(f.A, {
                                  avatarDecorationOverride: z,
                                  user: M,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      V
                          ? (0, n.jsx)(v.A, { className: I.Sl })
                          : Y
                            ? (0, n.jsx)(N.A, {
                                  className: I.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Z.isAnimated
                              ? (0, n.jsx)(b.A, {
                                    className: I.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: Z.url,
                                        type: Z.mimetype ?? void 0,
                                        onError: () => ea(Z.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: I.Sl,
                                    src: Z.url,
                                    alt: t.config.messages.questName,
                                    onError: () => ea(Z.url),
                                }),
                      (0, n.jsx)("div", { className: r()(I.Lw, { [I.en]: K, [I.So]: !K }) }),
                      (0, n.jsx)("div", {
                          ref: k,
                          className: I.r$,
                          style: { transform: `translateY(-${X}px)` },
                          children: (0, n.jsx)(T.Ay, {
                              logotypeClassName: r()(I.wm, { [I.A0]: J }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: D,
                          className: I.zH,
                          children: [
                              (0, n.jsx)(m.D, {
                                  className: I.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: L.intl.format(L.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(_.E, {
                                  variant: "text-sm/medium",
                                  color: K ? "text-muted" : "always-white",
                                  style: { opacity: K ? 1 : 0.75 },
                                  children: L.intl.format(L.t["kXVcV+"], { reward: $, claimedDate: B }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
