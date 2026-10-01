a.d(s, { default: () => eu });
var l = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    t = a(512750),
    o = a(17928),
    d = a(935462),
    c = a(315629),
    m = a(297264),
    u = a(279449),
    x = a(661531),
    h = a(834730),
    j = a(885574),
    v = a(37537),
    g = a(645619),
    N = a(503852),
    p = a(43594),
    C = a(363487),
    f = a(490557),
    k = a(36075),
    y = a(328006),
    w = a(334840),
    I = a(48736),
    _ = a(741561),
    b = a(483625),
    A = a(203656),
    E = a(525104),
    G = a(176201),
    P = a(178758),
    z = a(652215),
    S = a(743981),
    D = a(375708),
    M = a(684),
    L = a(420667);
function T() {
    let [e, s] = i.useState(() => {
            let e = Math.floor(Math.random() * P.Oz.length);
            return { primary_color: P.Oz[e].colors[0], secondary_color: P.Oz[e].colors[1], tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: r } = (0, k.v5)({
            colorStrings: (0, G.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsx)("div", {
                className: M.zC,
                children: (0, l.jsx)(b.V, {
                    avatar: y.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: n()(r, L.q),
                    message: D.intl.string(D.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(I.default, {
                defaultColor: z.TGz,
                colors: P.Oz,
                value: e.primary_color,
                gradientColors: null != e.secondary_color ? [e.primary_color, e.secondary_color] : void 0,
                onChange: (a) => s({ ...e, primary_color: a }),
                onChangeGradientColors: (e) => s({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function O(e) {
    let { guildId: s } = e,
        [a, r] = i.useState(S.bl.HEART),
        n = (0, E.A)(),
        t = i.useMemo(() => ({ unlockedBadges: n.unlockedBadges.slice(0, 10), lockedBadges: [] }), [n]);
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsx)("div", {
                className: M.zC,
                children: (0, l.jsx)(b.V, {
                    avatar: w.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: D.intl.string(D.t["6OSasb"]),
                    decorations: (0, l.jsx)(A.M, { guildId: s, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(_.y, { selectedBadge: a, onBadgeClicked: r, badgeCollection: t }),
        ],
    });
}
var B = a(975571),
    V = a(25525),
    R = a(427629);
function U(e) {
    let { powerup: s } = e;
    return s.skuId === t.FB
        ? (0, l.jsx)(h.E, {
              className: R.C,
              variant: "text-sm/medium",
              children: D.intl.format(V.default.fXE30d, { helpDeskArticle: B.A.getArticleURL(z.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
var F = a(438874),
    $ = a(722523),
    H = a(821609),
    q = a(104510),
    J = a(683063),
    Q = a(470934),
    W = a(898190),
    Z = a(249286),
    Y = a(933337);
function K(e) {
    let { guildId: s, powerup: a, isActive: r, onError: n } = e,
        { onActivate: t, isLoading: o, error: d } = (0, Z.A)(s, a),
        { isLoading: c, error: m } = (0, W.A)(s, a),
        u = (0, Y.A)(s, a),
        { disabled: x, reason: h } = (0, Q.A)(s, a, r);
    i.useEffect(() => {
        n?.(d ?? m);
    }, [d, m, n]);
    let j = o || c;
    return r
        ? (0, l.jsx)(J.u, {
              body: D.intl.formatToPlainString(V.default["5HQUzD"], { boostCount: a.cost }),
              shouldShow: null == h,
              children: (0, l.jsx)(H.$, {
                  variant: "secondary",
                  size: "md",
                  fullWidth: !0,
                  disabled: x,
                  loading: j,
                  onClick: u,
                  text: D.intl.string(D.t.R9GHya),
                  "aria-label": h ?? D.intl.string(D.t.R9GHya),
              }),
          })
        : (0, l.jsx)(H.$, {
              variant: "primary",
              size: "md",
              fullWidth: !0,
              disabled: x,
              loading: j,
              onClick: () => t(),
              icon: q._,
              iconPosition: "start",
              text: D.intl.string(D.t.JFfins),
              "aria-label": h ?? D.intl.string(D.t.JFfins),
          });
}
var X = a(509434),
    ee = a(979523);
function es(e) {
    let { guildId: s, onPreviewOpen: a } = e,
        r = i.useCallback(() => {
            (0, ee.m)(s, a);
        }, [s, a]);
    return (0, l.jsx)(H.$, {
        variant: "secondary",
        size: "md",
        fullWidth: !0,
        icon: X.I,
        iconPosition: "end",
        text: D.intl.string(D.t.uw9zI7),
        onClick: r,
    });
}
var ea = a(439156),
    el = a(189540);
function ei(e) {
    let { className: s, guildId: a, powerup: i, expressiveCta: r, onClose: o, onError: d } = e,
        { showToggleButton: c, showConfigureButton: m, isPowerupActive: u } = (0, F.A)(a, i);
    if (i.skuId === t.d0)
        return (0, l.jsx)("div", {
            className: n()(el.kL, s),
            children: (0, l.jsxs)("div", {
                className: el.m6,
                children: [
                    c &&
                        !u &&
                        (0, l.jsx)("div", {
                            className: el.PV,
                            children: (0, l.jsx)(es, { guildId: a, onPreviewOpen: o }),
                        }),
                    c &&
                        (0, l.jsx)("div", {
                            className: el.PV,
                            children: (0, l.jsx)(K, { guildId: a, powerup: i, isActive: u, onError: d }),
                        }),
                    m && (0, l.jsx)($.GU, { className: el.PV, guildId: a, powerup: i }),
                ],
            }),
        });
    let x = !m;
    return (0, l.jsxs)("div", {
        className: n()(el.kL, s),
        children: [
            c && (0, l.jsx)(ea.A, { guildId: a, powerup: i, onError: d, grow: x, compact: !x, expressiveCta: r }),
            m && (0, l.jsx)($.GU, { guildId: a, powerup: i }),
        ],
    });
}
var er = a(111159),
    en = a(533148),
    et = a(927573),
    eo = a(531374);
function ed() {
    let [e, s] = i.useState("");
    return (0, l.jsxs)("div", {
        className: eo.kL,
        children: [
            (0, l.jsxs)("div", {
                className: eo.qJ,
                children: [
                    (0, l.jsxs)("div", {
                        className: eo.B0,
                        children: [
                            (0, l.jsx)("div", {
                                className: eo.my,
                                children: (0, l.jsx)(er.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, l.jsxs)("div", {
                                className: eo.w7,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: eo.oG,
                                        children: [
                                            (0, l.jsx)("div", { className: eo.sg }),
                                            (0, l.jsx)("div", { className: eo.It }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: eo.Qc,
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: eo.pc,
                                                children: `${et.mu}/`,
                                            }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: eo.Po,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: eo.H3,
                                        children: [
                                            (0, l.jsx)("div", { className: eo.ns }),
                                            (0, l.jsxs)("div", {
                                                className: eo.uP,
                                                children: [
                                                    (0, l.jsx)("div", { className: eo.sV }),
                                                    (0, l.jsxs)("div", {
                                                        className: eo.xS,
                                                        children: [
                                                            (0, l.jsx)("div", { className: eo.jd }),
                                                            (0, l.jsx)("div", { className: eo.r$ }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", { className: eo.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(en.A, { autoFocus: !0, value: e, onChange: s }),
                ],
            }),
            (0, l.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: eo.ed,
                children: D.intl.string(V.default.u5iNbz),
            }),
        ],
    });
}
var ec = a(568065),
    em = a(911371);
function eu(e) {
    let { guildId: s, powerup: a, ...r } = e,
        [k, y] = i.useState(void 0),
        w = i.useMemo(() => {
            switch (a.skuId) {
                case t.SL:
                    return (0, l.jsx)(O, { guildId: s });
                case t.aN:
                    return (0, l.jsx)(T, {});
                case t.FB:
                    return (0, l.jsx)(ed, {});
                default:
                    return;
            }
        }, [a, s]);
    (0, N.Z)(s, a, N.q.DETAIL);
    let I = (0, C.A)(s),
        _ = (0, p.D)("GuildPowerupPerkModal"),
        b = (0, v.c)("GuildPowerupPerkModal"),
        A = "refresh_expressive_cta" === _,
        E = ec.wr[a.skuId],
        G = null != E ? ec.a8[E] : null,
        P = (0, o.bG)([g.A], () => g.A.getStateForGuild(s)),
        z = null != G ? P?.allPowerups[G] : null;
    return a.skuId === t.d0
        ? (0, l.jsx)(d.EO, {
              "data-migration-pending": !0,
              className: n()(em.yl, em._v),
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: (0, l.jsx)(d.$m, {
                  "data-migration-pending": !0,
                  className: n()(em.aH, { [em.GR]: !I }),
                  scrollbarType: "none",
                  children: (0, l.jsxs)("div", {
                      className: em.lR,
                      children: [
                          (0, l.jsx)(d.s_, {
                              "data-migration-pending": !0,
                              className: n()(em.VN, em.$W),
                              onClick: r.onClose,
                          }),
                          (0, l.jsx)(c.h, {
                              className: em.ZJ,
                              children: (0, l.jsx)(f.l, { className: em.a, powerup: a }),
                          }),
                          (0, l.jsxs)("div", {
                              className: em.gp,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: em.cv,
                                      children: [
                                          (0, l.jsx)(m.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsxs)("div", {
                                              className: em.uy,
                                              children: [
                                                  (0, l.jsx)(u.d, {
                                                      size: "custom",
                                                      width: 20,
                                                      height: 20,
                                                      color: x.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  }),
                                                  (0, l.jsx)(h.E, {
                                                      color: "text-muted",
                                                      variant: "redesign/heading-18/medium",
                                                      children: D.intl.format(D.t.gDsyB9, { numSubscriptions: a.cost }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(h.E, {
                                      color: b ? void 0 : "text-subtle",
                                      variant: b ? "text-md/normal" : "redesign/heading-18/medium",
                                      children: a.description,
                                  }),
                                  null != k &&
                                      (0, l.jsx)(h.E, {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: k,
                                      }),
                              ],
                          }),
                          I &&
                              (0, l.jsx)(ei, {
                                  className: em.oe,
                                  guildId: s,
                                  powerup: a,
                                  expressiveCta: A,
                                  onClose: r.onClose,
                                  onError: y,
                              }),
                      ],
                  }),
              }),
          })
        : (0, l.jsxs)(d.EO, {
              "data-migration-pending": !0,
              className: em.yl,
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: [
                  (0, l.jsxs)(d.$m, {
                      "data-migration-pending": !0,
                      className: em._F,
                      scrollbarType: "none",
                      children: [
                          (0, l.jsxs)("div", {
                              className: em.pz,
                              children: [
                                  (0, l.jsx)(c.h, {
                                      className: em.Rp,
                                      children: (0, l.jsx)(f.l, { className: em.UZ, powerup: a }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: em.hQ,
                                      children: [
                                          (0, l.jsx)(m.D, { variant: "heading-xl/extrabold", children: a.title }),
                                          (0, l.jsx)(h.E, {
                                              className: em.h_,
                                              variant: b ? "text-md/normal" : "text-sm/normal",
                                              children: a.description,
                                          }),
                                          null != a.deactivationCooldownPeriodDays &&
                                              a.deactivationCooldownPeriodDays > 0 &&
                                              (0, l.jsxs)("div", {
                                                  className: em.sh,
                                                  children: [
                                                      (0, l.jsx)(j.CircleInformationIcon, {
                                                          size: "xs",
                                                          color: x.A.colors.TEXT_MUTED,
                                                      }),
                                                      (0, l.jsx)(h.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-muted",
                                                          children: D.intl.formatToPlainString(V.default.GMhQcE, {
                                                              cooldownDays: a.deactivationCooldownPeriodDays,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          null != z &&
                                              (0, l.jsx)(h.E, {
                                                  className: em.h_,
                                                  variant: "text-sm/normal",
                                                  children: D.intl.formatToPlainString(V.default.NAFGkH, {
                                                      level: z.title,
                                                  }),
                                              }),
                                          (0, l.jsx)(U, { powerup: a }),
                                          null != k &&
                                              (0, l.jsx)(h.E, {
                                                  className: em.z3,
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/semibold",
                                                  children: k,
                                              }),
                                          I &&
                                              (0, l.jsx)(ei, {
                                                  className: em.qr,
                                                  guildId: s,
                                                  powerup: a,
                                                  expressiveCta: A,
                                                  onClose: r.onClose,
                                                  onError: y,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                          null != w && (0, l.jsx)("div", { className: em._9, children: w }),
                      ],
                  }),
                  (0, l.jsx)(d.s_, { "data-migration-pending": !0, className: em.VN, onClick: r.onClose }),
              ],
          });
}
