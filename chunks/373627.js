a.d(e, { default: () => sc });
var l = a(477900),
    i = a(582128),
    r = a(503698),
    n = a.n(r),
    o = a(512750),
    d = a(17928),
    t = a(935462),
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
    y = a(36075),
    C = a(328006),
    b = a(334840),
    f = a(48736),
    I = a(741561),
    A = a(483625),
    k = a(203656),
    w = a(525104),
    E = a(176201),
    _ = a(178758),
    G = a(652215),
    z = a(743981),
    P = a(105292),
    S = a(684),
    T = a(420667);
function D() {
    let [s, e] = i.useState(() => {
            let s = Math.floor(Math.random() * _.Oz.length);
            return { primary_color: _.Oz[s].colors[0], secondary_color: _.Oz[s].colors[1], tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: r } = (0, y.v5)({
            colorStrings: (0, E.K3)(s),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: S.kL,
        children: [
            (0, l.jsx)("div", {
                className: S.zC,
                children: (0, l.jsx)(A.V, {
                    avatar: C.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: n()(r, T.q),
                    message: P.intl.string(P.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(f.default, {
                defaultColor: G.TGz,
                colors: _.Oz,
                value: s.primary_color,
                gradientColors: null != s.secondary_color ? [s.primary_color, s.secondary_color] : void 0,
                onChange: (a) => e({ ...s, primary_color: a }),
                onChangeGradientColors: (s) => e({ primary_color: s[0], secondary_color: s[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function L(s) {
    let { guildId: e } = s,
        [a, r] = i.useState(z.bl.HEART),
        n = (0, w.A)(),
        o = i.useMemo(() => ({ unlockedBadges: n.unlockedBadges.slice(0, 10), lockedBadges: [] }), [n]);
    return (0, l.jsxs)("div", {
        className: S.kL,
        children: [
            (0, l.jsx)("div", {
                className: S.zC,
                children: (0, l.jsx)(A.V, {
                    avatar: b.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: P.intl.string(P.t["6OSasb"]),
                    decorations: (0, l.jsx)(k.M, { guildId: e, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(I.y, { selectedBadge: a, onBadgeClicked: r, badgeCollection: o }),
        ],
    });
}
var M = a(975571),
    O = a(959456),
    V = a(427629);
function B(s) {
    let { powerup: e } = s;
    return e.skuId === o.FB
        ? (0, l.jsx)(h.E, {
              className: V.C,
              variant: "body-sm/medium",
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
function Z(s) {
    let { guildId: e, powerup: a, isActive: r, onError: n } = s,
        { onActivate: o, isLoading: d, error: t } = (0, Q.A)(e, a),
        { isLoading: c, error: u } = (0, J.A)(e, a),
        m = (0, W.A)(e, a),
        { disabled: x, reason: h } = (0, q.A)(e, a, r);
    i.useEffect(() => {
        n?.(t ?? u);
    }, [t, u, n]);
    let j = d || c;
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
              onClick: () => o(),
              icon: H._,
              iconPosition: "start",
              text: P.intl.string(P.t.JFfins),
              "aria-label": h ?? P.intl.string(P.t.JFfins),
          });
}
var Y = a(509434),
    K = a(979523);
function X(s) {
    let { guildId: e, onPreviewOpen: a } = s,
        r = i.useCallback(() => {
            (0, K.m)(e, a);
        }, [e, a]);
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
var ss = a(439156),
    se = a(189540);
function sa(s) {
    let { className: e, guildId: a, powerup: i, onClose: r, onError: d } = s,
        { showToggleButton: t, showConfigureButton: c, isPowerupActive: u } = (0, R.A)(a, i);
    if (i.skuId === o.d0)
        return (0, l.jsx)("div", {
            className: n()(se.kL, e),
            children: (0, l.jsxs)("div", {
                className: se.m6,
                children: [
                    t &&
                        !u &&
                        (0, l.jsx)("div", {
                            className: se.PV,
                            children: (0, l.jsx)(X, { guildId: a, onPreviewOpen: r }),
                        }),
                    t &&
                        (0, l.jsx)("div", {
                            className: se.PV,
                            children: (0, l.jsx)(Z, { guildId: a, powerup: i, isActive: u, onError: d }),
                        }),
                    c && (0, l.jsx)(F.GU, { className: se.PV, guildId: a, powerup: i }),
                ],
            }),
        });
    let m = !c;
    return (0, l.jsxs)("div", {
        className: n()(se.kL, e),
        children: [
            t && (0, l.jsx)(ss.A, { guildId: a, powerup: i, onError: d, grow: m, compact: !m }),
            c && (0, l.jsx)(F.GU, { guildId: a, powerup: i }),
        ],
    });
}
var sl = a(111159),
    si = a(533148),
    sr = a(927573),
    sn = a(531374);
function so() {
    let [s, e] = i.useState("");
    return (0, l.jsxs)("div", {
        className: sn.kL,
        children: [
            (0, l.jsxs)("div", {
                className: sn.qJ,
                children: [
                    (0, l.jsxs)("div", {
                        className: sn.B0,
                        children: [
                            (0, l.jsx)("div", {
                                className: sn.my,
                                children: (0, l.jsx)(sl.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, l.jsxs)("div", {
                                className: sn.w7,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: sn.oG,
                                        children: [
                                            (0, l.jsx)("div", { className: sn.sg }),
                                            (0, l.jsx)("div", { className: sn.It }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: sn.Qc,
                                        children: [
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "text-muted",
                                                className: sn.pc,
                                                children: `${sr.mu}/`,
                                            }),
                                            (0, l.jsx)(h.E, {
                                                variant: "body-sm/medium",
                                                color: "text-link",
                                                className: sn.Po,
                                                children: s,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: sn.H3,
                                        children: [
                                            (0, l.jsx)("div", { className: sn.ns }),
                                            (0, l.jsxs)("div", {
                                                className: sn.uP,
                                                children: [
                                                    (0, l.jsx)("div", { className: sn.sV }),
                                                    (0, l.jsxs)("div", {
                                                        className: sn.xS,
                                                        children: [
                                                            (0, l.jsx)("div", { className: sn.jd }),
                                                            (0, l.jsx)("div", { className: sn.r$ }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", { className: sn.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(si.A, { autoFocus: !0, value: s, onChange: e }),
                ],
            }),
            (0, l.jsx)(h.E, {
                variant: "body-xs/normal",
                color: "text-muted",
                className: sn.ed,
                children: P.intl.string(O.default.u5iNbz),
            }),
        ],
    });
}
var sd = a(568065),
    st = a(911371);
function sc(s) {
    let { guildId: e, powerup: a, ...r } = s,
        [y, C] = i.useState(void 0),
        b = i.useMemo(() => {
            switch (a.skuId) {
                case o.SL:
                    return (0, l.jsx)(L, { guildId: e });
                case o.aN:
                    return (0, l.jsx)(D, {});
                case o.FB:
                    return (0, l.jsx)(so, {});
                default:
                    return;
            }
        }, [a, e]);
    (0, g.Z)(e, a, g.q.DETAIL);
    let f = (0, N.A)(e),
        I = sd.wr[a.skuId],
        A = null != I ? sd.a8[I] : null,
        k = (0, d.bG)([v.A], () => v.A.getStateForGuild(e)),
        w = null != A ? k?.allPowerups[A] : null;
    return a.skuId === o.d0
        ? (0, l.jsx)(t.EO, {
              "data-migration-pending": !0,
              className: n()(st.yl, st._v),
              size: t.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: (0, l.jsx)(t.$m, {
                  "data-migration-pending": !0,
                  className: n()(st.aH, { [st.GR]: !f }),
                  scrollbarType: "none",
                  children: (0, l.jsxs)("div", {
                      className: st.lR,
                      children: [
                          (0, l.jsx)(t.s_, {
                              "data-migration-pending": !0,
                              className: n()(st.VN, st.$W),
                              onClick: r.onClose,
                          }),
                          (0, l.jsx)(c.h, {
                              className: st.ZJ,
                              children: (0, l.jsx)(p.l, { className: st.a, powerup: a }),
                          }),
                          (0, l.jsxs)("div", {
                              className: st.gp,
                              children: [
                                  (0, l.jsxs)("div", {
                                      className: st.cv,
                                      children: [
                                          (0, l.jsx)(u.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsxs)("div", {
                                              className: st.uy,
                                              children: [
                                                  (0, l.jsx)(m.d, {
                                                      size: "custom",
                                                      width: 20,
                                                      height: 20,
                                                      color: x.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                                                  }),
                                                  (0, l.jsx)(h.E, {
                                                      tag: "div",
                                                      color: "text-muted",
                                                      variant: "heading-md/medium",
                                                      children: P.intl.format(P.t.gDsyB9, { numSubscriptions: a.cost }),
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                                  (0, l.jsx)(h.E, { variant: "body-md/normal", children: a.description }),
                                  null != y &&
                                      (0, l.jsx)(h.E, {
                                          color: "text-feedback-critical",
                                          variant: "body-sm/semibold",
                                          children: y,
                                      }),
                              ],
                          }),
                          f &&
                              (0, l.jsx)(sa, {
                                  className: st.oe,
                                  guildId: e,
                                  powerup: a,
                                  onClose: r.onClose,
                                  onError: C,
                              }),
                      ],
                  }),
              }),
          })
        : (0, l.jsxs)(t.EO, {
              "data-migration-pending": !0,
              className: st.yl,
              size: t.rI.DYNAMIC,
              ...r,
              parentComponent: "GuildPowerupPerkModal",
              children: [
                  (0, l.jsxs)(t.$m, {
                      "data-migration-pending": !0,
                      className: st._F,
                      scrollbarType: "none",
                      children: [
                          (0, l.jsxs)("div", {
                              className: st.pz,
                              children: [
                                  (0, l.jsx)(c.h, {
                                      className: st.Rp,
                                      children: (0, l.jsx)(p.l, { className: st.UZ, powerup: a }),
                                  }),
                                  (0, l.jsxs)("div", {
                                      className: st.hQ,
                                      children: [
                                          (0, l.jsx)(u.D, { variant: "heading-xl/semibold", children: a.title }),
                                          (0, l.jsx)(h.E, {
                                              className: st.h_,
                                              variant: "body-md/normal",
                                              children: a.description,
                                          }),
                                          null != a.deactivationCooldownPeriodDays &&
                                              a.deactivationCooldownPeriodDays > 0 &&
                                              (0, l.jsxs)("div", {
                                                  className: st.sh,
                                                  children: [
                                                      (0, l.jsx)(j.CircleInformationIcon, {
                                                          size: "xs",
                                                          color: x.A.colors.TEXT_MUTED,
                                                      }),
                                                      (0, l.jsx)(h.E, {
                                                          variant: "body-sm/medium",
                                                          color: "text-muted",
                                                          children: P.intl.formatToPlainString(O.default.GMhQcE, {
                                                              cooldownDays: a.deactivationCooldownPeriodDays,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                          null != w &&
                                              (0, l.jsx)(h.E, {
                                                  className: st.h_,
                                                  variant: "body-sm/normal",
                                                  children: P.intl.formatToPlainString(O.default.NAFGkH, {
                                                      level: w.title,
                                                  }),
                                              }),
                                          (0, l.jsx)(B, { powerup: a }),
                                          null != y &&
                                              (0, l.jsx)(h.E, {
                                                  className: st.z3,
                                                  color: "text-feedback-critical",
                                                  variant: "body-sm/semibold",
                                                  children: y,
                                              }),
                                          f &&
                                              (0, l.jsx)(sa, {
                                                  className: st.qr,
                                                  guildId: e,
                                                  powerup: a,
                                                  onClose: r.onClose,
                                                  onError: C,
                                              }),
                                      ],
                                  }),
                              ],
                          }),
                          null != b && (0, l.jsx)("div", { className: st._9, children: b }),
                      ],
                  }),
                  (0, l.jsx)(t.s_, { "data-migration-pending": !0, className: st.VN, onClick: r.onClose }),
              ],
          });
}
