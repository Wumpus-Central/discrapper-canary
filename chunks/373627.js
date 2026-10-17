a.d(s, { default: () => eu });
var l = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    t = a(512750),
    o = a(17928),
    d = a(935462),
    c = a(315629),
    u = a(297264),
    m = a(279449),
    x = a(661531),
    h = a(834730),
    j = a(885574),
    v = a(37537),
    g = a(645619),
    N = a(503852),
    p = a(363487),
    C = a(72377),
    f = a(36075),
    y = a(328006),
    I = a(334840),
    k = a(48736),
    A = a(963942),
    w = a(483625),
    b = a(203656),
    E = a(525104),
    _ = a(176201),
    G = a(178758),
    P = a(652215),
    z = a(743981),
    S = a(105292),
    T = a(684),
    D = a(420667);
function L() {
    let [e, s] = i.useState(() => {
            let e = Math.floor(Math.random() * G.Oz.length);
            return { primary_color: G.Oz[e].colors[0], secondary_color: G.Oz[e].colors[1], tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: r } = (0, f.v5)({
            colorStrings: (0, _.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: T.kL,
        children: [
            (0, l.jsx)("div", {
                className: T.zC,
                children: (0, l.jsx)(w.V, {
                    avatar: y.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: n()(r, D.q),
                    message: S.intl.string(S.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(k.default, {
                defaultColor: P.TGz,
                colors: G.Oz,
                value: e.primary_color,
                gradientColors: null != e.secondary_color ? [e.primary_color, e.secondary_color] : void 0,
                onChange: (a) => s({ ...e, primary_color: a }),
                onChangeGradientColors: (e) => s({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function M(e) {
    let { guildId: s } = e,
        [a, r] = i.useState(z.bl.HEART),
        n = (0, E.A)(),
        t = i.useMemo(() => ({ unlockedBadges: n.unlockedBadges.slice(0, 10), lockedBadges: [] }), [n]);
    return (0, l.jsxs)("div", {
        className: T.kL,
        children: [
            (0, l.jsx)("div", {
                className: T.zC,
                children: (0, l.jsx)(w.V, {
                    avatar: I.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: S.intl.string(S.t["6OSasb"]),
                    decorations: (0, l.jsx)(b.M, { guildId: s, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(A.y, { selectedBadge: a, onBadgeClicked: r, badgeCollection: t }),
        ],
    });
}
var O = a(975571),
    V = a(356863),
    B = a(427629);
function R(e) {
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
    U = a(722523),
    H = a(821609),
    $ = a(104510),
    q = a(683063),
    J = a(470934),
    Q = a(898190),
    W = a(249286),
    Z = a(933337);
function Y(e) {
    let { guildId: s, powerup: a, isActive: r, onError: n } = e,
        { onActivate: t, isLoading: o, error: d } = (0, W.A)(s, a),
        { isLoading: c, error: u } = (0, Q.A)(s, a),
        m = (0, Z.A)(s, a),
        { disabled: x, reason: h } = (0, J.A)(s, a, r);
    i.useEffect(() => {
        n?.(d ?? u);
    }, [d, u, n]);
    let j = o || c;
    return r
        ? (0, l.jsx)(q.u, {
              body: S.intl.formatToPlainString(V.default["5HQUzD"], { boostCount: a.cost }),
              shouldShow: null == h,
              children: (0, l.jsx)(H.$, {
                  variant: "secondary",
                  size: "md",
                  fullWidth: !0,
                  disabled: x,
                  loading: j,
                  onClick: m,
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
              icon: $._,
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
    ea = a(189540);
function el(e) {
    let { className: s, guildId: a, powerup: i, onClose: r, onError: o } = e,
        { showToggleButton: d, showConfigureButton: c, isPowerupActive: u } = (0, F.A)(a, i);
    if (i.skuId === t.d0)
        return (0, l.jsx)("div", {
            className: n()(ea.kL, s),
            children: (0, l.jsxs)("div", {
                className: ea.m6,
                children: [
                    d &&
                        !u &&
                        (0, l.jsx)("div", {
                            className: ea.PV,
                            children: (0, l.jsx)(ee, { guildId: a, onPreviewOpen: r }),
                        }),
                    d &&
                        (0, l.jsx)("div", {
                            className: ea.PV,
                            children: (0, l.jsx)(Y, { guildId: a, powerup: i, isActive: u, onError: o }),
                        }),
                    c && (0, l.jsx)(U.GU, { className: ea.PV, guildId: a, powerup: i }),
                ],
            }),
        });
    let m = !c;
    return (0, l.jsxs)("div", {
        className: n()(ea.kL, s),
        children: [
            d && (0, l.jsx)(es.A, { guildId: a, powerup: i, onError: o, grow: m, compact: !m }),
            c && (0, l.jsx)(U.GU, { guildId: a, powerup: i }),
        ],
    });
}
var ei = a(111159),
    er = a(533148),
    en = a(927573),
    et = a(531374);
function eo() {
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
var ed = a(568065),
    ec = a(911371);
function eu(e) {
    let { guildId: s, powerup: a, ...r } = e,
        [f, y] = i.useState(void 0),
        I = i.useMemo(() => {
            switch (a.skuId) {
                case t.SL:
                    return (0, l.jsx)(M, { guildId: s });
                case t.aN:
                    return (0, l.jsx)(L, {});
                case t.FB:
                    return (0, l.jsx)(eo, {});
                default:
                    return;
            }
        }, [a, s]);
    (0, N.Z)(s, a, N.q.DETAIL);
    let k = (0, p.A)(s),
        A = (0, v.c)("GuildPowerupPerkModal"),
        w = ed.wr[a.skuId],
        b = null != w ? ed.a8[w] : null,
        E = (0, o.bG)([g.A], () => g.A.getStateForGuild(s)),
        _ = null != b ? E?.allPowerups[b] : null;
    return a.skuId === t.d0
        ? (0, l.jsx)(d.EO, {
              "data-migration-pending": !0,
              className: n()(ec.yl, ec._v),
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: (0, l.jsx)(d.$m, {
                  "data-migration-pending": !0,
                  className: n()(ec.aH, { [ec.GR]: !k }),
                  scrollbarType: "none",
                  children: (0, l.jsxs)("div", {
                      className: ec.lR,
                      children: [
                          (0, l.jsx)(d.s_, {
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
                                          (0, l.jsx)(u.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsxs)("div", {
                                              className: ec.uy,
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
                                                      children: S.intl.format(S.t.gDsyB9, { numSubscriptions: a.cost }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(h.E, {
                                      color: A ? void 0 : "text-subtle",
                                      variant: A ? "text-md/normal" : "redesign/heading-18/medium",
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
                          k &&
                              (0, l.jsx)(el, {
                                  className: ec.oe,
                                  guildId: s,
                                  powerup: a,
                                  onClose: r.onClose,
                                  onError: y,
                              }),
                      ],
                  }),
              }),
          })
        : (0, l.jsxs)(d.EO, {
              "data-migration-pending": !0,
              className: ec.yl,
              size: d.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: [
                  (0, l.jsxs)(d.$m, {
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
                                          (0, l.jsx)(u.D, { variant: "heading-xl/extrabold", children: a.title }),
                                          (0, l.jsx)(h.E, {
                                              className: ec.h_,
                                              variant: A ? "text-md/normal" : "text-sm/normal",
                                              children: a.description,
                                          }),
                                          null != a.deactivationCooldownPeriodDays &&
                                              a.deactivationCooldownPeriodDays > 0 &&
                                              (0, l.jsxs)("div", {
                                                  className: ec.sh,
                                                  children: [
                                                      (0, l.jsx)(j.CircleInformationIcon, {
                                                          size: "xs",
                                                          color: x.A.colors.TEXT_MUTED,
                                                      }),
                                                      (0, l.jsx)(h.E, {
                                                          variant: "text-sm/medium",
                                                          color: "text-muted",
                                                          children: S.intl.formatToPlainString(V.default.GMhQcE, {
                                                              cooldownDays: a.deactivationCooldownPeriodDays,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          null != _ &&
                                              (0, l.jsx)(h.E, {
                                                  className: ec.h_,
                                                  variant: "text-sm/normal",
                                                  children: S.intl.formatToPlainString(V.default.NAFGkH, {
                                                      level: _.title,
                                                  }),
                                              }),
                                          (0, l.jsx)(R, { powerup: a }),
                                          null != f &&
                                              (0, l.jsx)(h.E, {
                                                  className: ec.z3,
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/semibold",
                                                  children: f,
                                              }),
                                          k &&
                                              (0, l.jsx)(el, {
                                                  className: ec.qr,
                                                  guildId: s,
                                                  powerup: a,
                                                  onClose: r.onClose,
                                                  onError: y,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                          null != I && (0, l.jsx)("div", { className: ec._9, children: I }),
                      ],
                  }),
                  (0, l.jsx)(d.s_, { "data-migration-pending": !0, className: ec.VN, onClick: r.onClose }),
              ],
          });
}
