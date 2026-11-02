a.d(s, { default: () => ec });
var l = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    t = a(512750),
    o = a(17928),
    d = a(935462),
    c = a(315629),
    u = a(534514),
    m = a(279449),
    x = a(661531),
    h = a(834730),
    j = a(885574),
    v = a(645619),
    g = a(503852),
    N = a(363487),
    p = a(72377),
    C = a(36075),
    f = a(328006),
    y = a(334840),
    I = a(48736),
    A = a(741561),
    k = a(483625),
    w = a(203656),
    E = a(525104),
    _ = a(176201),
    b = a(178758),
    G = a(652215),
    z = a(743981),
    P = a(105292),
    S = a(684),
    T = a(420667);
function D() {
    let [e, s] = i.useState(() => {
            let e = Math.floor(Math.random() * b.Oz.length);
            return { primary_color: b.Oz[e].colors[0], secondary_color: b.Oz[e].colors[1], tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: r } = (0, C.v5)({
            colorStrings: (0, _.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: S.kL,
        children: [
            (0, l.jsx)("div", {
                className: S.zC,
                children: (0, l.jsx)(k.V, {
                    avatar: f.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: n()(r, T.q),
                    message: P.intl.string(P.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(I.default, {
                defaultColor: G.TGz,
                colors: b.Oz,
                value: e.primary_color,
                gradientColors: null != e.secondary_color ? [e.primary_color, e.secondary_color] : void 0,
                onChange: (a) => s({ ...e, primary_color: a }),
                onChangeGradientColors: (e) => s({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function L(e) {
    let { guildId: s } = e,
        [a, r] = i.useState(z.bl.HEART),
        n = (0, E.A)(),
        t = i.useMemo(() => ({ unlockedBadges: n.unlockedBadges.slice(0, 10), lockedBadges: [] }), [n]);
    return (0, l.jsxs)("div", {
        className: S.kL,
        children: [
            (0, l.jsx)("div", {
                className: S.zC,
                children: (0, l.jsx)(k.V, {
                    avatar: y.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: P.intl.string(P.t["6OSasb"]),
                    decorations: (0, l.jsx)(w.M, { guildId: s, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(A.y, { selectedBadge: a, onBadgeClicked: r, badgeCollection: t }),
        ],
    });
}
var M = a(975571),
    O = a(959456),
    V = a(427629);
function B(e) {
    let { powerup: s } = e;
    return s.skuId === t.FB
        ? (0, l.jsx)(h.E, {
              className: V.C,
              variant: "text-sm/medium",
              children: P.intl.format(O.default.fXE30d, { helpDeskArticle: M.A.getArticleURL(G.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
var R = a(438874),
    F = a(722523),
    U = a(821609),
    H = a(104510),
    $ = a(683063),
    q = a(470934),
    J = a(898190),
    Q = a(249286),
    W = a(933337);
function Z(e) {
    let { guildId: s, powerup: a, isActive: r, onError: n } = e,
        { onActivate: t, isLoading: o, error: d } = (0, Q.A)(s, a),
        { isLoading: c, error: u } = (0, J.A)(s, a),
        m = (0, W.A)(s, a),
        { disabled: x, reason: h } = (0, q.A)(s, a, r);
    i.useEffect(() => {
        n?.(d ?? u);
    }, [d, u, n]);
    let j = o || c;
    return r
        ? (0, l.jsx)($.u, {
              body: P.intl.formatToPlainString(O.default["5HQUzD"], { boostCount: a.cost }),
              shouldShow: null == h,
              children: (0, l.jsx)(U.$, {
                  variant: "secondary",
                  size: "md",
                  fullWidth: !0,
                  disabled: x,
                  loading: j,
                  onClick: m,
                  text: P.intl.string(P.t.R9GHya),
                  "aria-label": h ?? P.intl.string(P.t.R9GHya),
              }),
          })
        : (0, l.jsx)(U.$, {
              variant: "primary",
              size: "md",
              fullWidth: !0,
              disabled: x,
              loading: j,
              onClick: () => t(),
              icon: H._,
              iconPosition: "start",
              text: P.intl.string(P.t.JFfins),
              "aria-label": h ?? P.intl.string(P.t.JFfins),
          });
}
var Y = a(509434),
    K = a(979523);
function X(e) {
    let { guildId: s, onPreviewOpen: a } = e,
        r = i.useCallback(() => {
            (0, K.m)(s, a);
        }, [s, a]);
    return (0, l.jsx)(U.$, {
        variant: "secondary",
        size: "md",
        fullWidth: !0,
        icon: Y.I,
        iconPosition: "end",
        text: P.intl.string(P.t.uw9zI7),
        onClick: r,
    });
}
var ee = a(439156),
    es = a(189540);
function ea(e) {
    let { className: s, guildId: a, powerup: i, onClose: r, onError: o } = e,
        { showToggleButton: d, showConfigureButton: c, isPowerupActive: u } = (0, R.A)(a, i);
    if (i.skuId === t.d0)
        return (0, l.jsx)("div", {
            className: n()(es.kL, s),
            children: (0, l.jsxs)("div", {
                className: es.m6,
                children: [
                    d &&
                        !u &&
                        (0, l.jsx)("div", {
                            className: es.PV,
                            children: (0, l.jsx)(X, { guildId: a, onPreviewOpen: r }),
                        }),
                    d &&
                        (0, l.jsx)("div", {
                            className: es.PV,
                            children: (0, l.jsx)(Z, { guildId: a, powerup: i, isActive: u, onError: o }),
                        }),
                    c && (0, l.jsx)(F.GU, { className: es.PV, guildId: a, powerup: i }),
                ],
            }),
        });
    let m = !c;
    return (0, l.jsxs)("div", {
        className: n()(es.kL, s),
        children: [
            d && (0, l.jsx)(ee.A, { guildId: a, powerup: i, onError: o, grow: m, compact: !m }),
            c && (0, l.jsx)(F.GU, { guildId: a, powerup: i }),
        ],
    });
}
var el = a(111159),
    ei = a(533148),
    er = a(927573),
    en = a(531374);
function et() {
    let [e, s] = i.useState("");
    return (0, l.jsxs)("div", {
        className: en.kL,
        children: [
            (0, l.jsxs)("div", {
                className: en.qJ,
                children: [
                    (0, l.jsxs)("div", {
                        className: en.B0,
                        children: [
                            (0, l.jsx)("div", {
                                className: en.my,
                                children: (0, l.jsx)(el.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, l.jsxs)("div", {
                                className: en.w7,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: en.oG,
                                        children: [
                                            (0, l.jsx)("div", { className: en.sg }),
                                            (0, l.jsx)("div", { className: en.It }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: en.Qc,
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: en.pc,
                                                children: `${er.mu}/`,
                                            }),
                                            (0, l.jsx)(h.E, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: en.Po,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: en.H3,
                                        children: [
                                            (0, l.jsx)("div", { className: en.ns }),
                                            (0, l.jsxs)("div", {
                                                className: en.uP,
                                                children: [
                                                    (0, l.jsx)("div", { className: en.sV }),
                                                    (0, l.jsxs)("div", {
                                                        className: en.xS,
                                                        children: [
                                                            (0, l.jsx)("div", { className: en.jd }),
                                                            (0, l.jsx)("div", { className: en.r$ }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", { className: en.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(ei.A, { autoFocus: !0, value: e, onChange: s }),
                ],
            }),
            (0, l.jsx)(h.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: en.ed,
                children: P.intl.string(O.default.u5iNbz),
            }),
        ],
    });
}
var eo = a(568065),
    ed = a(911371);
function ec(e) {
    let { guildId: s, powerup: a, ...r } = e,
        [C, f] = i.useState(void 0),
        y = i.useMemo(() => {
            switch (a.skuId) {
                case t.SL:
                    return (0, l.jsx)(L, { guildId: s });
                case t.aN:
                    return (0, l.jsx)(D, {});
                case t.FB:
                    return (0, l.jsx)(et, {});
                default:
                    return;
            }
        }, [a, s]);
    (0, g.Z)(s, a, g.q.DETAIL);
    let I = (0, N.A)(s),
        A = eo.wr[a.skuId],
        k = null != A ? eo.a8[A] : null,
        w = (0, o.bG)([v.A], () => v.A.getStateForGuild(s)),
        E = null != k ? w?.allPowerups[k] : null;
    return a.skuId === t.d0
        ? (0, l.jsx)(d.EO, {
              "data-migration-pending": !0,
              className: n()(ed.yl, ed._v),
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: (0, l.jsx)(d.$m, {
                  "data-migration-pending": !0,
                  className: n()(ed.aH, { [ed.GR]: !I }),
                  scrollbarType: "none",
                  children: (0, l.jsxs)("div", {
                      className: ed.lR,
                      children: [
                          (0, l.jsx)(d.s_, {
                              "data-migration-pending": !0,
                              className: n()(ed.VN, ed.$W),
                              onClick: r.onClose,
                          }),
                          (0, l.jsx)(c.h, {
                              className: ed.ZJ,
                              children: (0, l.jsx)(p.l, { className: ed.a, powerup: a }),
                          }),
                          (0, l.jsxs)("div", {
                              className: ed.gp,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: ed.cv,
                                      children: [
                                          (0, l.jsx)(u.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsxs)("div", {
                                              className: ed.uy,
                                              children: [
                                                  (0, l.jsx)(m.d, {
                                                      size: "custom",
                                                      width: 20,
                                                      height: 20,
                                                      color: x.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  }),
                                                  (0, l.jsx)(h.E, {
                                                      color: "text-muted",
                                                      variant: "redesign/heading-18/medium",
                                                      children: P.intl.format(P.t.gDsyB9, { numSubscriptions: a.cost }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(h.E, { variant: "text-md/normal", children: a.description }),
                                  null != C &&
                                      (0, l.jsx)(h.E, {
                                          color: "text-feedback-critical",
                                          variant: "text-sm/semibold",
                                          children: C,
                                      }),
                              ],
                          }),
                          I &&
                              (0, l.jsx)(ea, {
                                  className: ed.oe,
                                  guildId: s,
                                  powerup: a,
                                  onClose: r.onClose,
                                  onError: f,
                              }),
                      ],
                  }),
              }),
          })
        : (0, l.jsxs)(d.EO, {
              "data-migration-pending": !0,
              className: ed.yl,
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: [
                  (0, l.jsxs)(d.$m, {
                      "data-migration-pending": !0,
                      className: ed._F,
                      scrollbarType: "none",
                      children: [
                          (0, l.jsxs)("div", {
                              className: ed.pz,
                              children: [
                                  (0, l.jsx)(c.h, {
                                      className: ed.Rp,
                                      children: (0, l.jsx)(p.l, { className: ed.UZ, powerup: a }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: ed.hQ,
                                      children: [
                                          (0, l.jsx)(u.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsx)(h.E, {
                                              className: ed.h_,
                                              variant: "text-md/normal",
                                              children: a.description,
                                          }),
                                          null != a.deactivationCooldownPeriodDays &&
                                              a.deactivationCooldownPeriodDays > 0 &&
                                              (0, l.jsxs)("div", {
                                                  className: ed.sh,
                                                  children: [
                                                      (0, l.jsx)(j.CircleInformationIcon, {
                                                          size: "xs",
                                                          color: x.A.colors.TEXT_MUTED,
                                                      }),
                                                      (0, l.jsx)(h.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-muted",
                                                          children: P.intl.formatToPlainString(O.default.GMhQcE, {
                                                              cooldownDays: a.deactivationCooldownPeriodDays,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          null != E &&
                                              (0, l.jsx)(h.E, {
                                                  className: ed.h_,
                                                  variant: "text-sm/normal",
                                                  children: P.intl.formatToPlainString(O.default.NAFGkH, {
                                                      level: E.title,
                                                  }),
                                              }),
                                          (0, l.jsx)(B, { powerup: a }),
                                          null != C &&
                                              (0, l.jsx)(h.E, {
                                                  className: ed.z3,
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/semibold",
                                                  children: C,
                                              }),
                                          I &&
                                              (0, l.jsx)(ea, {
                                                  className: ed.qr,
                                                  guildId: s,
                                                  powerup: a,
                                                  onClose: r.onClose,
                                                  onError: f,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                          null != y && (0, l.jsx)("div", { className: ed._9, children: y }),
                      ],
                  }),
                  (0, l.jsx)(d.s_, { "data-migration-pending": !0, className: ed.VN, onClick: r.onClose }),
              ],
          });
}
