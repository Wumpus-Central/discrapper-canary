a.d(s, { default: () => W });
var l = a(627968),
    r = a(64700),
    i = a(512750),
    t = a(17928),
    n = a(935462),
    d = a(315629),
    c = a(534514),
    o = a(834730),
    m = a(885574),
    u = a(661531),
    x = a(645619),
    h = a(503852),
    j = a(43594),
    v = a(363487),
    N = a(490557),
    p = a(503698),
    g = a.n(p),
    C = a(521100),
    k = a(328006),
    y = a(334840),
    f = a(48736),
    _ = a(741561),
    w = a(319756),
    A = a(203656),
    E = a(525104),
    G = a(176201),
    b = a(178758),
    S = a(652215),
    z = a(743981),
    I = a(375708),
    P = a(252137),
    D = a(979282);
function M() {
    let [e, s] = r.useState(() => {
            let e = Math.floor(Math.random() * b.Oz.length);
            return { primary_color: b.Oz[e].start, secondary_color: b.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: a, gradientClassname: i } = (0, C.v5)({
            colorStrings: (0, G.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, l.jsxs)("div", {
        className: P.kL,
        children: [
            (0, l.jsx)("div", {
                className: P.zC,
                children: (0, l.jsx)(w.V, {
                    avatar: k.A,
                    username: "Cherry",
                    usernameStyle: a,
                    usernameClassName: g()(i, D.q),
                    message: I.intl.string(I.t["6OSasb"]),
                }),
            }),
            (0, l.jsx)(f.default, {
                defaultColor: S.TGz,
                colors: b.Oz,
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
        [a, i] = r.useState(z.bl.HEART),
        t = (0, E.A)(),
        n = r.useMemo(() => ({ unlockedBadges: t.unlockedBadges.slice(0, 10), lockedBadges: [] }), [t]);
    return (0, l.jsxs)("div", {
        className: P.kL,
        children: [
            (0, l.jsx)("div", {
                className: P.zC,
                children: (0, l.jsx)(w.V, {
                    avatar: y.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: I.intl.string(I.t["6OSasb"]),
                    decorations: (0, l.jsx)(A.M, { guildId: s, tag: "GGEZ", badge: a }),
                }),
            }),
            (0, l.jsx)(_.y, { selectedBadge: a, onBadgeClicked: i, badgeCollection: n }),
        ],
    });
}
var B = a(975571),
    L = a(853513),
    O = a(182184);
function V(e) {
    let { powerup: s } = e;
    return s.skuId === i.FB
        ? (0, l.jsx)(o.E, {
              className: O.C,
              variant: "text-sm/medium",
              children: I.intl.format(L.default.fXE30d, { helpDeskArticle: B.A.getArticleURL(S.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
var F = a(438874),
    U = a(722523),
    R = a(439156),
    q = a(344445);
function H(e) {
    let { className: s, guildId: a, powerup: r, expressiveCta: i, onError: t } = e,
        { showToggleButton: n, showConfigureButton: d } = (0, F.A)(a, r),
        c = !d;
    return (0, l.jsxs)("div", {
        className: g()(q.k, s),
        children: [
            n && (0, l.jsx)(R.A, { guildId: a, powerup: r, onError: t, grow: c, compact: !c, expressiveCta: i }),
            d && (0, l.jsx)(U.GU, { guildId: a, powerup: r }),
        ],
    });
}
var Q = a(111159),
    Z = a(533148),
    $ = a(927573),
    X = a(320969);
function Y() {
    let [e, s] = r.useState("");
    return (0, l.jsxs)("div", {
        className: X.kL,
        children: [
            (0, l.jsxs)("div", {
                className: X.qJ,
                children: [
                    (0, l.jsxs)("div", {
                        className: X.B0,
                        children: [
                            (0, l.jsx)("div", {
                                className: X.my,
                                children: (0, l.jsx)(Q.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, l.jsxs)("div", {
                                className: X.w7,
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: X.oG,
                                        children: [
                                            (0, l.jsx)("div", { className: X.sg }),
                                            (0, l.jsx)("div", { className: X.It }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: X.Qc,
                                        children: [
                                            (0, l.jsx)(o.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: X.pc,
                                                children: `${$.mu}/`,
                                            }),
                                            (0, l.jsx)(o.E, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: X.Po,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, l.jsxs)("div", {
                                        className: X.H3,
                                        children: [
                                            (0, l.jsx)("div", { className: X.ns }),
                                            (0, l.jsxs)("div", {
                                                className: X.uP,
                                                children: [
                                                    (0, l.jsx)("div", { className: X.sV }),
                                                    (0, l.jsxs)("div", {
                                                        className: X.xS,
                                                        children: [
                                                            (0, l.jsx)("div", { className: X.jd }),
                                                            (0, l.jsx)("div", { className: X.r$ }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)("div", { className: X.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, l.jsx)(Z.A, { autoFocus: !0, value: e, onChange: s }),
                ],
            }),
            (0, l.jsx)(o.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: X.ed,
                children: I.intl.string(L.default.u5iNbz),
            }),
        ],
    });
}
var J = a(568065),
    K = a(973606);
function W(e) {
    let { guildId: s, powerup: a, ...p } = e,
        [g, C] = r.useState(void 0),
        k = r.useMemo(() => {
            switch (a.skuId) {
                case i.SL:
                    return (0, l.jsx)(T, { guildId: s });
                case i.aN:
                    return (0, l.jsx)(M, {});
                case i.FB:
                    return (0, l.jsx)(Y, {});
                default:
                    return;
            }
        }, [a, s]);
    (0, h.Z)(s, a, h.q.DETAIL);
    let y = (0, v.A)(s),
        f = (0, j.D)("GuildPowerupPerkModal"),
        _ = J.wr[a.skuId],
        w = null != _ ? J.a8[_] : null,
        A = (0, t.bG)([x.A], () => x.A.getStateForGuild(s)),
        E = null != w ? A?.allPowerups[w] : null;
    return (0, l.jsxs)(n.EO, {
        "data-migration-pending": !0,
        className: K.yl,
        size: n.rI.DYNAMIC,
        ...p,
        parentComponent: "GuildPowerupPerkModal",
        children: [
            (0, l.jsxs)(n.$m, {
                "data-migration-pending": !0,
                className: K._F,
                scrollbarType: "none",
                children: [
                    (0, l.jsxs)("div", {
                        className: K.pz,
                        children: [
                            (0, l.jsx)(d.h, {
                                className: K.Rp,
                                children: (0, l.jsx)(N.l, { className: K.UZ, powerup: a }),
                            }),
                            (0, l.jsxs)("div", {
                                className: K.hQ,
                                children: [
                                    (0, l.jsx)(c.D, { variant: "heading-xl/extrabold", children: a.title }),
                                    (0, l.jsx)(o.E, {
                                        className: K.h_,
                                        variant: "text-sm/normal",
                                        children: a.description,
                                    }),
                                    null != a.deactivationCooldownPeriodDays &&
                                        a.deactivationCooldownPeriodDays > 0 &&
                                        (0, l.jsxs)("div", {
                                            className: K.sh,
                                            children: [
                                                (0, l.jsx)(m.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
                                                (0, l.jsx)(o.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: I.intl.formatToPlainString(L.default.GMhQcE, {
                                                        cooldownDays: a.deactivationCooldownPeriodDays,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    null != E &&
                                        (0, l.jsx)(o.E, {
                                            className: K.h_,
                                            variant: "text-sm/normal",
                                            children: I.intl.formatToPlainString(L.default.NAFGkH, { level: E.title }),
                                        }),
                                    (0, l.jsx)(V, { powerup: a }),
                                    null != g &&
                                        (0, l.jsx)(o.E, {
                                            className: K.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: g,
                                        }),
                                    y &&
                                        (0, l.jsx)(H, {
                                            className: K.qr,
                                            guildId: s,
                                            powerup: a,
                                            expressiveCta: "refresh_expressive_cta" === f,
                                            onError: C,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    null != k && (0, l.jsx)("div", { className: K._9, children: k }),
                ],
            }),
            (0, l.jsx)(n.s_, { "data-migration-pending": !0, className: K.VN, onClick: p.onClose }),
        ],
    });
}
