n.d(t, {
    A: () => T,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(575593),
    o = n(440703),
    c = n(311907),
    u = n(582754),
    d = n(397927),
    p = n(765671),
    f = n(736653),
    h = n(291661),
    A = n(607470),
    g = n(287809),
    m = n(954571),
    b = n(216456),
    _ = n(341915),
    E = n(890687),
    O = n(579473),
    y = n(734736),
    I = n(247455),
    v = n(57718),
    S = n(652215),
    C = n(985018),
    N = n(834600);
let T = (0, i.memo)(function (e) {
    var t, n, l, T, j, x;
    let { quest: P } = e,
        [w, L] = (0, i.useState)(!1),
        [R, D] = (0, i.useState)(24),
        [M, k] = (0, i.useState)(!1),
        U = (0, i.useRef)(null),
        G = (0, i.useRef)(null),
        V = (0, i.useRef)(null),
        B = (0, c.bG)([g.default], () => g.default.getCurrentUser()),
        { ref: H, height: F = 0 } = (0, p.Ay)(),
        Y = (0, f.Ay)(),
        K = (0, E.S5)(null == (l = P.userStatus) ? void 0 : l.claimedAt, {
            month: "numeric",
            day: "numeric",
        }),
        z = null != (t = null == (T = P.userStatus) ? void 0 : T.claimedTier) ? t : 0,
        W = P.config.rewards[z],
        q = (null == W ? void 0 : W.type) === o.l.FRACTIONAL_PREMIUM,
        Q = (null == W ? void 0 : W.type) === o.l.COLLECTIBLE,
        X = (null == W ? void 0 : W.type) === o.l.VIRTUAL_CURRENCY,
        Z = null == W || null == (x = W.collectibleProduct) || null == (j = x.items) ? void 0 : j[0],
        J = (null == Z ? void 0 : Z.type) === s.R.AVATAR_DECORATION ? Z : null;
    (0, p.i4)(U, (e) => {
        let { height: t } = e;
        if (!Q || null == t || null == G.current || null == U.current || null == V.current) return;
        let n = U.current.getBoundingClientRect(),
            r = G.current.getBoundingClientRect(),
            i = V.current.getBoundingClientRect();
        D((r.top - n.top - i.height) / 2);
    });
    let $ = (0, u.Mw)(Y),
        ee = (0, i.useMemo)(() => null != P.config.cosponsorMetadata, [P]),
        et = (0, i.useMemo)(() => (0, O.tW)(P, O.fY.REWARD), [P]),
        en = w ? F + 8 : 0,
        er = (0, b.fF)(_.uF.TROPHY_CASE_CARD),
        { content_position: ei, row_index: el } = er,
        ea = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    return i;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                    (r = n[i]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(er, ["content_position", "row_index"]),
        es = () => {
            L(!0),
                m.default.track(
                    S.HAw.QUEST_HOVER,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            quest_id: P.id,
                        },
                        ea,
                    ),
                );
        },
        eo = () => {
            L(!1);
        },
        ec = (e) => {
            k(!0),
                m.default.track(S.HAw.QUEST_ASSET_LOADING_FAILURE, {
                    source: e,
                    asset_id: e,
                    quest_id: P.id,
                });
        };
    return null == W || M
        ? null
        : (0, r.jsx)(d.vN3, {
              children: (0, r.jsxs)("div", {
                  ref: U,
                  tabIndex: 0,
                  onFocus: es,
                  onBlur: eo,
                  onMouseEnter: es,
                  onMouseLeave: eo,
                  className: a()(N.kL, {
                      [N.yo]: w,
                  }),
                  children: [
                      null != B &&
                          Q &&
                          null != J &&
                          (0, r.jsx)("div", {
                              ref: V,
                              className: N.FX,
                              style: {
                                  top: R,
                              },
                              children: (0, r.jsx)(h.A, {
                                  avatarDecorationOverride: J,
                                  user: B,
                                  guildId: null,
                                  animateOnHover: !w,
                              }),
                          }),
                      q
                          ? (0, r.jsx)(y.A, {
                                className: N.Sl,
                            })
                          : X
                            ? (0, r.jsx)(I.A, {
                                  className: N.Sl,
                                  isAnimated: w,
                                  questName: P.config.messages.questName,
                              })
                            : et.isAnimated
                              ? (0, r.jsx)(A.A, {
                                    className: N.JU,
                                    autoPlay: !1,
                                    children: (0, r.jsx)("source", {
                                        src: et.url,
                                        type: null != (n = et.mimetype) ? n : void 0,
                                        onError: () => ec(et.url),
                                    }),
                                })
                              : (0, r.jsx)("img", {
                                    className: N.Sl,
                                    src: et.url,
                                    alt: P.config.messages.questName,
                                    onError: () => ec(et.url),
                                }),
                      (0, r.jsx)("div", {
                          className: a()(N.Lw, {
                              [N.en]: $,
                              [N.So]: !$,
                          }),
                      }),
                      (0, r.jsx)("div", {
                          ref: G,
                          className: N.r$,
                          style: {
                              transform: "translateY(-".concat(en, "px)"),
                          },
                          children: (0, r.jsx)(v.Ay, {
                              logotypeClassName: a()(N.wm, {
                                  [N.A0]: ee,
                              }),
                              quest: P,
                              withGameTile: !1,
                          }),
                      }),
                      (0, r.jsxs)("div", {
                          ref: H,
                          className: N.zH,
                          children: [
                              (0, r.jsx)(d.Heading, {
                                  className: N.DD,
                                  variant: "heading-md/semibold",
                                  color: "always-white",
                                  children: C.intl.format(C.t.EAYZAr, {
                                      questName: P.config.messages.questName,
                                  }),
                              }),
                              (0, r.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: $ ? "text-muted" : "always-white",
                                  style: {
                                      opacity: $ ? 1 : 0.75,
                                  },
                                  children: C.intl.format(C.t["kXVcV+"], {
                                      reward: W.name,
                                      claimedDate: K,
                                  }),
                              }),
                          ],
                      }),
                  ],
              }),
          });
});
