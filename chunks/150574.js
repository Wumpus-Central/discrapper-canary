n.d(t, { A: () => y });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(575593),
    o = n(440703),
    d = n(311907),
    c = n(582754),
    u = n(397927),
    A = n(765671),
    h = n(736653),
    _ = n(291661),
    m = n(607470),
    p = n(287809),
    g = n(954571),
    E = n(341915),
    f = n(890687),
    I = n(579473),
    C = n(590202),
    N = n(734736),
    T = n(247455),
    S = n(57718),
    x = n(652215),
    v = n(985018),
    b = n(834600);
let y = (0, r.memo)(function (e) {
    let { quest: t } = e,
        [n, a] = (0, r.useState)(!1),
        [y, L] = (0, r.useState)(24),
        [O, R] = (0, r.useState)(!1),
        P = (0, r.useRef)(null),
        j = (0, r.useRef)(null),
        D = (0, r.useRef)(null),
        w = (0, d.bG)([p.default], () => p.default.getCurrentUser()),
        { ref: M, height: U = 0 } = (0, A.Ay)(),
        G = (0, h.Ay)(),
        k = (0, f.S5)(t.userStatus?.claimedAt, { month: "numeric", day: "numeric" }),
        V = t.userStatus?.claimedTier ?? 0,
        B = t.config.rewards[V],
        H = B?.type === o.l.FRACTIONAL_PREMIUM,
        F = B?.type === o.l.COLLECTIBLE,
        Y = B?.type === o.l.VIRTUAL_CURRENCY,
        W = B?.collectibleProduct?.items?.[0],
        q = W?.type === s.R.AVATAR_DECORATION ? W : null;
    (0, A.i4)(P, (e) => {
        let { height: t } = e;
        if (!F || null == t || null == j.current || null == P.current || null == D.current) return;
        let n = P.current.getBoundingClientRect(),
            i = j.current.getBoundingClientRect(),
            r = D.current.getBoundingClientRect();
        L((i.top - n.top - r.height) / 2);
    });
    let z = (0, c.Mw)(G),
        K = (0, r.useMemo)(() => null != t.config.cosponsorMetadata, [t]),
        $ = (0, r.useMemo)(() => (0, I.tW)(t, I.fY.REWARD), [t]),
        Q = n ? U + 8 : 0,
        { content_position: X, row_index: Z, ...J } = (0, C.fF)(E.uF.TROPHY_CASE_CARD),
        ee = () => {
            a(!0), g.default.track(x.HAw.QUEST_HOVER, { quest_id: t.id, ...J });
        },
        et = () => {
            a(!1);
        },
        en = (e) => {
            R(!0), g.default.track(x.HAw.QUEST_ASSET_LOADING_FAILURE, { source: e, asset_id: e, quest_id: t.id });
        };
    return null == B || O
        ? null
        : (0, i.jsx)(u.vN3, {
              children: (0, i.jsxs)("div", {
                  ref: P,
                  tabIndex: 0,
                  onFocus: ee,
                  onBlur: et,
                  onMouseEnter: ee,
                  onMouseLeave: et,
                  className: l()(b.kL, { [b.yo]: n }),
                  children: [
                      null != w &&
                          F &&
                          null != q &&
                          (0, i.jsx)("div", {
                              ref: D,
                              className: b.FX,
                              style: { top: y },
                              children: (0, i.jsx)(_.A, {
                                  avatarDecorationOverride: q,
                                  user: w,
                                  guildId: null,
                                  animateOnHover: !n,
                              }),
                          }),
                      H
                          ? (0, i.jsx)(N.A, { className: b.Sl })
                          : Y
                            ? (0, i.jsx)(T.A, {
                                  className: b.Sl,
                                  isAnimated: n,
                                  questName: t.config.messages.questName,
                              })
                            : $.isAnimated
                              ? (0, i.jsx)(m.A, {
                                    className: b.JU,
                                    autoPlay: !1,
                                    children: (0, i.jsx)("source", {
                                        src: $.url,
                                        type: $.mimetype ?? void 0,
                                        onError: () => en($.url),
                                    }),
                                })
                              : (0, i.jsx)("img", {
                                    className: b.Sl,
                                    src: $.url,
                                    alt: t.config.messages.questName,
                                    onError: () => en($.url),
                                }),
                      (0, i.jsx)("div", { className: l()(b.Lw, { [b.en]: z, [b.So]: !z }) }),
                      (0, i.jsx)("div", {
                          ref: j,
                          className: b.r$,
                          style: { transform: `translateY(-${Q}px)` },
                          children: (0, i.jsx)(S.Ay, {
                              logotypeClassName: l()(b.wm, { [b.A0]: K }),
                              quest: t,
                              withGameTile: !1,
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          ref: M,
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
                                  children: v.intl.format(v.t["kXVcV+"], { reward: B.name, claimedDate: k }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
