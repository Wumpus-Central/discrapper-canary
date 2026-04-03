n.d(t, { A: () => y });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(575593),
    o = n(440703),
    d = n(311907),
    c = n(582754),
    u = n(397927),
    A = n(765671),
    h = n(736653),
    _ = n(162232),
    m = n(607470),
    p = n(287809),
    g = n(954571),
    E = n(341915),
    I = n(890687),
    f = n(579473),
    C = n(590202),
    T = n(734736),
    N = n(247455),
    S = n(57718),
    x = n(652215),
    v = n(985018),
    b = n(864833);
let y = (0, a.memo)(function (e) {
    let { quest: t } = e,
        [n, l] = (0, a.useState)(!1),
        [y, O] = (0, a.useState)(24),
        [L, R] = (0, a.useState)(!1),
        P = (0, a.useRef)(null),
        D = (0, a.useRef)(null),
        M = (0, a.useRef)(null),
        j = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { ref: w, height: U = 0 } = (0, A.Ay)(),
        G = (0, h.Ay)(),
        k = (0, I.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        V = t.userStatus?.claimedTier ?? 0,
        B = t.config.rewards[V],
        H = B?.type === o.l.FRACTIONAL_PREMIUM,
        F = B?.type === o.l.COLLECTIBLE,
        Y = B?.type === o.l.VIRTUAL_CURRENCY,
        W = B?.collectibleProduct?.items?.[0],
        K = W?.type === s.R.AVATAR_DECORATION ? W : null,
        q = a.useMemo(
            () =>
                null == B
                    ? null
                    : !0 === Y && t.userStatus?.orbQuantityClaimed != null
                      ? v.intl.format(v.t["nLXlh+"], { orbAmount: t.userStatus.orbQuantityClaimed })
                      : B.name,
            [B, Y, t],
        );
    (0, A.i4)(P, (e) => {
        let { height: t } = e;
        if (!F || null == t || null == D.current || null == P.current || null == M.current) return;
        let n = P.current.getBoundingClientRect(),
            i = D.current.getBoundingClientRect(),
            a = M.current.getBoundingClientRect();
        O((i.top - n.top - a.height) / 2);
    });
    let z = (0, c.Mw)(G),
        $ = a.useMemo(() => null != t.config.cosponsorMetadata, [t]),
        Q = a.useMemo(() => (0, f.tW)(t, f.fY.REWARD), [t]),
        X = n ? U + 8 : 0,
        { content_position: Z, row_index: J, ...ee } = (0, C.fF)(E.uF.TROPHY_CASE_CARD),
        et = () => {
            l(!0), g.default.track(x.HAw.QUEST_HOVER, { quest_id: t.id, ...ee });
        },
        en = () => {
            l(!1);
        },
        ei = (e) => {
            R(!0), g.default.track(x.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == B || L
        ? null
        : (0, i.jsx)(u.vN3, {
              children: (0, i.jsxs)("div", {
                  ref: P,
                  tabIndex: 0,
                  onFocus: et,
                  onBlur: en,
                  onMouseEnter: et,
                  onMouseLeave: en,
                  className: r()(b.kL, { [b.yo]: n }),
                  children: [
                      null != j &&
                          F &&
                          null != K &&
                          (0, i.jsx)("div", {
                              ref: M,
                              className: b.FX,
                              style: { top: y },
                              children: (0, i.jsx)(_.A, {
                                  avatarDecorationOverride: K,
                                  user: j,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      H
                          ? (0, i.jsx)(T.A, { className: b.Sl })
                          : Y
                            ? (0, i.jsx)(N.A, {
                                  className: b.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                              })
                            : Q.isAnimated
                              ? (0, i.jsx)(m.A, {
                                    className: b.JU,
                                    autoPlay: !1,
                                    children: (0, i.jsx)("source", {
                                        src: Q.url,
                                        type: Q.mimetype ?? void 0,
                                        onError: () => ei(Q.url),
                                    }),
                                })
                              : (0, i.jsx)("img", {
                                    className: b.Sl,
                                    src: Q.url,
                                    alt: t.config.messages.questName,
                                    onError: () => ei(Q.url),
                                }),
                      (0, i.jsx)("div", { className: r()(b.Lw, { [b.en]: z, [b.So]: !z }) }),
                      (0, i.jsx)("div", {
                          ref: D,
                          className: b.r$,
                          style: { transform: `translateY(-${X}px)` },
                          children: (0, i.jsx)(S.Ay, {
                              logotypeClassName: r()(b.wm, { [b.A0]: $ }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          ref: w,
                          className: b.zH,
                          children: [
                              (0, i.jsx)(u.Heading, {
                                  className: b.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: v.intl.format(v.t.EAYZAr, { questName: t.config.messages.questName }),
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: "text-sm/medium",
                                  color: z ? "text-muted" : "always-white",
                                  style: { opacity: z ? 1 : 0.75 },
                                  children: v.intl.format(v.t["kXVcV+"], { reward: q, claimedDate: k }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
