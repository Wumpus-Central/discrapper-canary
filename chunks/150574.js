s.d(t, { A: () => I });
var n = s(627968),
    l = s(64700),
    a = s(503698),
    r = s.n(a),
    i = s(575593),
    o = s(440703),
    c = s(311907),
    u = s(462887),
    d = s(187322),
    _ = s(534514),
    m = s(834730),
    h = s(765671),
    x = s(736653),
    f = s(162232),
    E = s(607470),
    p = s(287809),
    g = s(954571),
    A = s(341915),
    C = s(890687),
    b = s(579473),
    j = s(590202),
    v = s(734736),
    N = s(247455),
    T = s(57718),
    S = s(652215),
    O = s(985018),
    L = s(659249);
let I = (0, l.memo)(function (e) {
    let { quest: t } = e,
        [s, a] = (0, l.useState)(!1),
        [I, y] = (0, l.useState)(24),
        [R, Q] = (0, l.useState)(!1),
        H = (0, l.useRef)(null),
        M = (0, l.useRef)(null),
        P = (0, l.useRef)(null),
        U = (0, c.bG)([p.default], () => p.default.getCurrentUser()),
        { ref: F, height: k = 0 } = (0, h.Ay)(),
        w = (0, x.Ay)(),
        q = (0, C.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        D = t.userStatus?.claimedTier ?? 0,
        B = t.config.rewards[D],
        V = B?.type === o.l.FRACTIONAL_PREMIUM,
        W = B?.type === o.l.COLLECTIBLE,
        Y = B?.type === o.l.VIRTUAL_CURRENCY,
        G = B?.collectibleProduct?.items?.[0],
        z = G?.type === i.R.AVATAR_DECORATION ? G : null,
        $ = l.useMemo(
            () =>
                null == B
                    ? null
                    : !0 === Y && t.userStatus?.orbQuantityClaimed != null
                      ? O.intl.format(O.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : B.name,
            [B, Y, t],
        );
    (0, h.i4)(H, (e) => {
        let { height: t } = e;
        if (!W || null == t || null == M.current || null == H.current || null == P.current) return;
        let s = H.current.getBoundingClientRect(),
            n = M.current.getBoundingClientRect(),
            l = P.current.getBoundingClientRect();
        y((n.top - s.top - l.height) / 2);
    });
    let K = (0, u.M)(w),
        J = l.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Z = l.useMemo(() => (0, b.tW)(t, b.fY.REWARD), [t]),
        X = s ? k + 8 : 0,
        { content_position: ee, row_index: et, ...es } = (0, j.fF)(A.uF.TROPHY_CASE_CARD),
        en = () => {
            a(!0), g.default.track(S.HAw.QUEST_HOVER, { quest_id: t.id, ...es });
        },
        el = () => {
            a(!1);
        },
        ea = (e) => {
            Q(!0), g.default.track(S.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == B || R
        ? null
        : (0, n.jsx)(d.vN, {
              children: (0, n.jsxs)("div", {
                  ref: H,
                  tabIndex: 0,
                  onFocus: en,
                  onBlur: el,
                  onMouseEnter: en,
                  onMouseLeave: el,
                  className: r()(L.kL, { [L.yo]: s }),
                  children: [
                      null != U &&
                          W &&
                          null != z &&
                          (0, n.jsx)("div", {
                              ref: P,
                              className: L.FX,
                              style: { top: I },
                              children: (0, n.jsx)(f.A, {
                                  avatarDecorationOverride: z,
                                  user: U,
                                  guildId: null,
                                  animateOnHover: !s,
                              }),
                          }),
                      V
                          ? (0, n.jsx)(v.A, { className: L.Sl })
                          : Y
                            ? (0, n.jsx)(N.A, {
                                  className: L.Sl,
                                  isAnimated: s,
                                  questName: t.config.messages.questName,
                              })
                            : Z.isAnimated
                              ? (0, n.jsx)(E.A, {
                                    className: L.JU,
                                    autoPlay: !1,
                                    children: (0, n.jsx)("source", {
                                        src: Z.url,
                                        type: Z.mimetype ?? void 0,
                                        onError: () => ea(Z.url),
                                    }),
                                })
                              : (0, n.jsx)("img", {
                                    className: L.Sl,
                                    src: Z.url,
                                    alt: t.config.messages.questName,
                                    onError: () => ea(Z.url),
                                }),
                      (0, n.jsx)("div", { className: r()(L.Lw, { [L.en]: K, [L.So]: !K }) }),
                      (0, n.jsx)("div", {
                          ref: M,
                          className: L.r$,
                          style: { transform: `translateY(-${X}px)` },
                          children: (0, n.jsx)(T.Ay, {
                              logotypeClassName: r()(L.wm, { [L.A0]: J }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          ref: F,
                          className: L.zH,
                          children: [
                              (0, n.jsx)(_.D, {
                                  className: L.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: O.intl.format(O.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, n.jsx)(m.E, {
                                  variant: "text-sm/medium",
                                  color: K ? "text-muted" : "always-white",
                                  style: { opacity: K ? 1 : 0.75 },
                                  children: O.intl.format(O.t["kXVcV+"], { reward: $, claimedDate: q }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
