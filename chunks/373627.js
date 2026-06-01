a.d(s, { default: () => em });
var l = a(627968),
    i = a(64700),
    r = a(503698),
    n = a.n(r),
    t = a(512750),
    d = a(17928),
    o = a(935462),
    c = a(315629),
    m = a(534514),
    u = a(279449),
    x = a(661531),
    h = a(834730),
    j = a(885574),
    v = a(645619),
    g = a(503852),
    N = a(43594),
    p = a(363487),
    C = a(490557),
    f = a(521100),
    k = a(328006),
    y = a(334840),
    w = a(48736),
    b = a(741561),
    I = a(319756),
    _ = a(203656),
    A = a(525104),
    E = a(176201),
    G = a(178758),
    P = a(652215),
    z = a(743981),
    S = a(375708),
    D = a(252137),
    L = a(979282);
function M() {
    let [e, s] = i.useState(() => {
            let e = Math.floor(Math.random() * G.Oz.length);
            return { primary_color: G.Oz[e].start, secondary_color: G.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: r } = (0, f.v5)({
            colorStrings: (0, E.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: D.kL,
        children: [
            (0, l.jsx)("div", {
                className: D.zC,
                children: (0, l.jsx)(I.V, {
                    avatar: k.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: n()(r, L.q),
                    message: S.intl.string(S.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(w.default, {
                defaultColor: P.TGz,
                colors: G.Oz,
                value: e.primary_color,
                secondaryValue: e.secondary_color ?? void 0,
                onChange: (a) => s({ ...e, primary_color: a }),
                onChangeGradientColors: (e) => s({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function T(e) {
    let { guildId: s } = e,
        [a, r] = i.useState(z.bl.HEART),
        n = (0, A.A)(),
        t = i.useMemo(() => ({ unlockedBadges: n.unlockedBadges.slice(0, 10), lockedBadges: [] }), [n]);
    return (0, l.jsxs)("div", {
        className: D.kL,
        children: [
            (0, l.jsx)("div", {
                className: D.zC,
                children: (0, l.jsx)(I.V, {
                    avatar: y.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: S.intl.string(S.t["6OSasb"]),
                    decorations: (0, l.jsx)(_.M, { guildId: s, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(b.y, { selectedBadge: a, onBadgeClicked: r, badgeCollection: t }),
        ],
    });
}
var O = a(975571),
    V = a(853513),
    B = a(182184);
function U(e) {
    let { powerup: s } = e;
    return s.skuId === t.FB
        ? (0, l.jsx)(h.E, {
              className: B.C,
              variant: "text-sm/medium",
              children: S.intl.format(V.default.fXE30d, { helpDeskArticle: O.A.getArticleURL(P.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
var F = a(438874),
    R = a(722523),
    $ = a(459192),
    H = a(821609),
    q = a(104510),
    J = a(470934),
    Q = a(898190),
    W = a(249286),
    Z = a(933337);
function Y(e) {
    let { guildId: s, powerup: a, isActive: r, onError: n } = e,
        { onActivate: t, isLoading: d, error: o } = (0, W.A)(s, a),
        { isLoading: c, error: m } = (0, Q.A)(s, a),
        u = (0, Z.A)(s, a),
        { disabled: x, reason: h } = (0, J.A)(s, a, r);
    i.useEffect(() => {
        n?.(o ?? m);
    }, [o, m, n]);
    let j = d || c;
    return r
        ? (0, l.jsx)($.u, {
              body: S.intl.formatToPlainString(V.default["5HQUzD"], { boostCount: a.cost }),
              shouldShow: null == h,
              children: (0, l.jsx)(H.$, {
                  variant: "secondary",
                  size: "md",
                  fullWidth: !0,
                  disabled: x,
                  loading: j,
                  onClick: u,
                  text: S.intl.string(S.t.R9GHya),
                  "aria-label": h ?? S.intl.string(S.t.R9GHya),
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
              text: S.intl.string(S.t.JFfins),
              "aria-label": h ?? S.intl.string(S.t.JFfins),
          });
}
var K = a(509434),
    X = a(979523);
function ee(e) {
    let { guildId: s, onPreviewOpen: a } = e,
        r = i.useCallback(() => {
            (0, X.m)(s, a);
        }, [s, a]);
    return (0, l.jsx)(H.$, {
        variant: "secondary",
        size: "md",
        fullWidth: !0,
        icon: K.I,
        iconPosition: "end",
        text: S.intl.string(S.t.uw9zI7),
        onClick: r,
    });
}
var es = a(439156),
    ea = a(344445);
function el(e) {
    let { className: s, guildId: a, powerup: i, expressiveCta: r, onClose: d, onError: o } = e,
        { showToggleButton: c, showConfigureButton: m, isPowerupActive: u } = (0, F.A)(a, i);
    if (i.skuId === t.d0)
        return (0, l.jsx)("div", {
            className: n()(ea.kL, s),
            children: (0, l.jsxs)("div", {
                className: ea.m6,
                children: [
                    c &&
                        !u &&
                        (0, l.jsx)("div", {
                            className: ea.PV,
                            children: (0, l.jsx)(ee, { guildId: a, onPreviewOpen: d }),
                        }),
                    c &&
                        (0, l.jsx)("div", {
                            className: ea.PV,
                            children: (0, l.jsx)(Y, { guildId: a, powerup: i, isActive: u, onError: o }),
                        }),
                    m && (0, l.jsx)(R.GU, { className: ea.PV, guildId: a, powerup: i }),
                ],
            }),
        });
    let x = !m;
    return (0, l.jsxs)("div", {
        className: n()(ea.kL, s),
        children: [
            c && (0, l.jsx)(es.A, { guildId: a, powerup: i, onError: o, grow: x, compact: !x, expressiveCta: r }),
            m && (0, l.jsx)(R.GU, { guildId: a, powerup: i }),
        ],
    });
}
var ei = a(111159),
    er = a(533148),
    en = a(927573),
    et = a(320969);
function ed() {
    let [e, s] = i.useState("");
    return (0, l.jsxs)("div", {
        className: et.kL,
        children: [
            (0, l.jsxs)("div", {
                className: et.qJ,
                children: [
                    (0, l.jsxs)("div", {
                        className: et.B0,
                        children: [
                            (0, l.jsx)("div", {
                                className: et.my,
                                children: (0, l.jsx)(ei.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, l.jsxs)("div", {
                                className: et.w7,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: et.oG,
                                        children: [
                                            (0, l.jsx)("div", { className: et.sg }),
                                            (0, l.jsx)("div", { className: et.It }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: et.Qc,
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: et.pc,
                                                children: `${en.mu}/`,
                                            }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: et.Po,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: et.H3,
                                        children: [
                                            (0, l.jsx)("div", { className: et.ns }),
                                            (0, l.jsxs)("div", {
                                                className: et.uP,
                                                children: [
                                                    (0, l.jsx)("div", { className: et.sV }),
                                                    (0, l.jsxs)("div", {
                                                        className: et.xS,
                                                        children: [
                                                            (0, l.jsx)("div", { className: et.jd }),
                                                            (0, l.jsx)("div", { className: et.r$ }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", { className: et.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(er.A, { autoFocus: !0, value: e, onChange: s }),
                ],
            }),
            (0, l.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: et.ed,
                children: S.intl.string(V.default.u5iNbz),
            }),
        ],
    });
}
var eo = a(568065),
    ec = a(973606);
function em(e) {
    let { guildId: s, powerup: a, ...r } = e,
        [f, k] = i.useState(void 0),
        y = i.useMemo(() => {
            switch (a.skuId) {
                case t.SL:
                    return (0, l.jsx)(T, { guildId: s });
                case t.aN:
                    return (0, l.jsx)(M, {});
                case t.FB:
                    return (0, l.jsx)(ed, {});
                default:
                    return;
            }
        }, [a, s]);
    (0, g.Z)(s, a, g.q.DETAIL);
    let w = (0, p.A)(s),
        b = "refresh_expressive_cta" === (0, N.D)("GuildPowerupPerkModal"),
        I = eo.wr[a.skuId],
        _ = null != I ? eo.a8[I] : null,
        A = (0, d.bG)([v.A], () => v.A.getStateForGuild(s)),
        E = null != _ ? A?.allPowerups[_] : null;
    return a.skuId === t.d0
        ? (0, l.jsx)(o.EO, {
              "data-migration-pending": !0,
              className: n()(ec.yl, ec._v),
              size: o.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: (0, l.jsx)(o.$m, {
                  "data-migration-pending": !0,
                  className: ec.aH,
                  scrollbarType: "none",
                  children: (0, l.jsxs)("div", {
                      className: ec.lR,
                      children: [
                          (0, l.jsx)(o.s_, {
                              "data-migration-pending": !0,
                              className: n()(ec.VN, ec.$W),
                              onClick: r.onClose,
                          }),
                          (0, l.jsx)(c.h, {
                              className: ec.ZJ,
                              children: (0, l.jsx)(C.l, { className: ec.a, powerup: a }),
                          }),
                          (0, l.jsxs)("div", {
                              className: ec.gp,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: ec.cv,
                                      children: [
                                          (0, l.jsx)(m.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsxs)("div", {
                                              className: ec.uy,
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
                                                      children: S.intl.format(S.t.gDsyB9, { numSubscriptions: a.cost }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(h.E, {
                                      color: "text-subtle",
                                      variant: "redesign/heading-18/medium",
                                      children: a.description,
                                  }),
                                  null != f &&
                                      (0, l.jsx)(h.E, {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: f,
                                      }),
                              ],
                          }),
                          w &&
                              (0, l.jsx)(el, {
                                  className: ec.oe,
                                  guildId: s,
                                  powerup: a,
                                  expressiveCta: b,
                                  onClose: r.onClose,
                                  onError: k,
                              }),
                      ],
                  }),
              }),
          })
        : (0, l.jsxs)(o.EO, {
              "data-migration-pending": !0,
              className: ec.yl,
              size: o.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: [
                  (0, l.jsxs)(o.$m, {
                      "data-migration-pending": !0,
                      className: ec._F,
                      scrollbarType: "none",
                      children: [
                          (0, l.jsxs)("div", {
                              className: ec.pz,
                              children: [
                                  (0, l.jsx)(c.h, {
                                      className: ec.Rp,
                                      children: (0, l.jsx)(C.l, { className: ec.UZ, powerup: a }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: ec.hQ,
                                      children: [
                                          (0, l.jsx)(m.D, { variant: "heading-xl/extrabold", children: a.title }),
                                          (0, l.jsx)(h.E, {
                                              className: ec.h_,
                                              variant: "text-sm/normal",
                                              children: a.description,
                                          }),
                                          null != a.deactivationCooldownPeriodDays &&
                                              a.deactivationCooldownPeriodDays > 0 &&
                                              (0, l.jsxs)("div", {
                                                  className: ec.sh,
                                                  children: [
                                                      (0, l.jsx)(j.m, { size: "xs", color: x.A.colors.TEXT_MUTED }),
                                                      (0, l.jsx)(h.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-muted",
                                                          children: S.intl.formatToPlainString(V.default.GMhQcE, {
                                                              cooldownDays: a.deactivationCooldownPeriodDays,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          null != E &&
                                              (0, l.jsx)(h.E, {
                                                  className: ec.h_,
                                                  variant: "text-sm/normal",
                                                  children: S.intl.formatToPlainString(V.default.NAFGkH, {
                                                      level: E.title,
                                                  }),
                                              }),
                                          (0, l.jsx)(U, { powerup: a }),
                                          null != f &&
                                              (0, l.jsx)(h.E, {
                                                  className: ec.z3,
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/semibold",
                                                  children: f,
                                              }),
                                          w &&
                                              (0, l.jsx)(el, {
                                                  className: ec.qr,
                                                  guildId: s,
                                                  powerup: a,
                                                  expressiveCta: b,
                                                  onClose: r.onClose,
                                                  onError: k,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                          null != y && (0, l.jsx)("div", { className: ec._9, children: y }),
                      ],
                  }),
                  (0, l.jsx)(o.s_, { "data-migration-pending": !0, className: ec.VN, onClick: r.onClose }),
              ],
          });
}
