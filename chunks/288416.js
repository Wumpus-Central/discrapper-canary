s.d(a, { default: () => Y });
var r = s(627968),
    l = s(64700),
    n = s(512750),
    t = s(17928),
    o = s(935462),
    i = s(315629),
    d = s(534514),
    c = s(834730),
    _ = s(885574),
    u = s(661531),
    m = s(645619),
    p = s(503852),
    g = s(43594),
    x = s(363487),
    h = s(490557),
    f = s(503698),
    b = s.n(f),
    v = s(36075),
    C = s(328006),
    k = s(334840),
    j = s(48736),
    N = s(741561),
    w = s(319756),
    y = s(203656),
    A = s(525104),
    I = s(176201),
    E = s(178758),
    S = s(652215),
    D = s(743981),
    P = s(985018),
    L = s(252137),
    B = s(979282);
function T() {
    let [e, a] = l.useState(() => {
            let e = Math.floor(Math.random() * E.Oz.length);
            return { primary_color: E.Oz[e].start, secondary_color: E.Oz[e].end, tertiary_color: null };
        }),
        { gradientStyle: s, gradientClassname: n } = (0, v.v5)({
            colorStrings: (0, I.K3)(e),
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: !0,
        });
    return (0, r.jsxs)("div", {
        className: L.kL,
        children: [
            (0, r.jsx)("div", {
                className: L.zC,
                children: (0, r.jsx)(w.V, {
                    avatar: C.A,
                    username: "Cherry",
                    usernameStyle: s,
                    usernameClassName: b()(n, B.q),
                    message: P.intl.string(P.t["6OSasb"]),
                }),
            }),
            (0, r.jsx)(j.default, {
                defaultColor: S.TGz,
                colors: E.Oz,
                value: e.primary_color,
                secondaryValue: e.secondary_color ?? void 0,
                onChange: (s) => a({ ...e, primary_color: s }),
                onChangeGradientColors: (e) => a({ primary_color: e[0], secondary_color: e[1], tertiary_color: null }),
                isGradient: !0,
            }),
        ],
    });
}
function z(e) {
    let { guildId: a } = e,
        [s, n] = l.useState(D.bl.HEART),
        t = (0, A.A)(),
        o = l.useMemo(() => ({ unlockedBadges: t.unlockedBadges.slice(0, 10), lockedBadges: [] }), [t]);
    return (0, r.jsxs)("div", {
        className: L.kL,
        children: [
            (0, r.jsx)("div", {
                className: L.zC,
                children: (0, r.jsx)(w.V, {
                    avatar: k.A,
                    username: "Roka",
                    usernameStyle: { color: "var(--brand-400)" },
                    message: P.intl.string(P.t["6OSasb"]),
                    decorations: (0, r.jsx)(y.M, { guildId: a, tag: "GGEZ", badge: s }),
                }),
            }),
            (0, r.jsx)(N.y, { selectedBadge: s, onBadgeClicked: n, badgeCollection: o }),
        ],
    });
}
var G = s(975571),
    M = s(853513),
    H = s(182184);
function U(e) {
    let { powerup: a } = e;
    return a.skuId === n.FB
        ? (0, r.jsx)(c.E, {
              className: H.C,
              variant: "text-sm/medium",
              children: P.intl.format(M.default.fXE30d, { helpDeskArticle: G.A.getArticleURL(S.MVz.GUILD_VANITY_URL) }),
          })
        : null;
}
var $ = s(438874),
    O = s(722523),
    R = s(439156),
    V = s(344445);
function Q(e) {
    let { className: a, guildId: s, powerup: l, expressiveCta: n, onError: t } = e,
        { showToggleButton: o, showConfigureButton: i } = (0, $.A)(s, l),
        d = !i;
    return (0, r.jsxs)("div", {
        className: b()(V.k, a),
        children: [
            o && (0, r.jsx)(R.A, { guildId: s, powerup: l, onError: t, grow: d, compact: !d, expressiveCta: n }),
            i && (0, r.jsx)(O.GU, { guildId: s, powerup: l }),
        ],
    });
}
var q = s(111159),
    F = s(533148),
    Z = s(927573),
    W = s(320969);
function X() {
    let [e, a] = l.useState("");
    return (0, r.jsxs)("div", {
        className: W.kL,
        children: [
            (0, r.jsxs)("div", {
                className: W.qJ,
                children: [
                    (0, r.jsxs)("div", {
                        className: W.B0,
                        children: [
                            (0, r.jsx)("div", {
                                className: W.my,
                                children: (0, r.jsx)(q.p, { size: "custom", width: 24, height: 24 }),
                            }),
                            (0, r.jsxs)("div", {
                                className: W.w7,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: W.oG,
                                        children: [
                                            (0, r.jsx)("div", { className: W.sg }),
                                            (0, r.jsx)("div", { className: W.It }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: W.Qc,
                                        children: [
                                            (0, r.jsx)(c.E, {
                                                variant: "text-sm/medium",
                                                color: "text-muted",
                                                className: W.pc,
                                                children: `${Z.mu}/`,
                                            }),
                                            (0, r.jsx)(c.E, {
                                                variant: "text-sm/medium",
                                                color: "text-link",
                                                className: W.Po,
                                                children: e,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: W.H3,
                                        children: [
                                            (0, r.jsx)("div", { className: W.ns }),
                                            (0, r.jsxs)("div", {
                                                className: W.uP,
                                                children: [
                                                    (0, r.jsx)("div", { className: W.sV }),
                                                    (0, r.jsxs)("div", {
                                                        className: W.xS,
                                                        children: [
                                                            (0, r.jsx)("div", { className: W.jd }),
                                                            (0, r.jsx)("div", { className: W.r$ }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", { className: W.bi }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, r.jsx)(F.A, { autoFocus: !0, value: e, onChange: a }),
                ],
            }),
            (0, r.jsx)(c.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: W.ed,
                children: P.intl.string(M.default.u5iNbz),
            }),
        ],
    });
}
var J = s(568065),
    K = s(973606);
function Y(e) {
    let { guildId: a, powerup: s, ...f } = e,
        [b, v] = l.useState(void 0),
        C = l.useMemo(() => {
            switch (s.skuId) {
                case n.SL:
                    return (0, r.jsx)(z, { guildId: a });
                case n.aN:
                    return (0, r.jsx)(T, {});
                case n.FB:
                    return (0, r.jsx)(X, {});
                default:
                    return;
            }
        }, [s, a]);
    (0, p.Z)(a, s, p.q.DETAIL);
    let k = (0, x.A)(a),
        j = (0, g.D)("GuildPowerupPerkModal"),
        N = J.wr[s.skuId],
        w = null != N ? J.a8[N] : null,
        y = (0, t.bG)([m.A], () => m.A.getStateForGuild(a)),
        A = null != w ? y?.allPowerups[w] : null;
    return (0, r.jsxs)(o.EO, {
        "data-migration-pending": !0,
        className: K.yl,
        size: o.rI.DYNAMIC,
        ...f,
        parentComponent: "GuildPowerupPerkModal",
        children: [
            (0, r.jsxs)(o.$m, {
                "data-migration-pending": !0,
                className: K._F,
                scrollbarType: "none",
                children: [
                    (0, r.jsxs)("div", {
                        className: K.pz,
                        children: [
                            (0, r.jsx)(i.h, {
                                className: K.Rp,
                                children: (0, r.jsx)(h.l, { className: K.UZ, powerup: s }),
                            }),
                            (0, r.jsxs)("div", {
                                className: K.hQ,
                                children: [
                                    (0, r.jsx)(d.D, { variant: "heading-xl/extrabold", children: s.title }),
                                    (0, r.jsx)(c.E, {
                                        className: K.h_,
                                        variant: "text-sm/normal",
                                        children: s.description,
                                    }),
                                    null != s.deactivationCooldownPeriodDays &&
                                        s.deactivationCooldownPeriodDays > 0 &&
                                        (0, r.jsxs)("div", {
                                            className: K.sh,
                                            children: [
                                                (0, r.jsx)(_.m, { size: "xs", color: u.A.colors.TEXT_MUTED }),
                                                (0, r.jsx)(c.E, {
                                                    variant: "text-sm/medium",
                                                    color: "text-muted",
                                                    children: P.intl.formatToPlainString(M.default.GMhQcE, {
                                                        cooldownDays: s.deactivationCooldownPeriodDays,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    null != A &&
                                        (0, r.jsx)(c.E, {
                                            className: K.h_,
                                            variant: "text-sm/normal",
                                            children: P.intl.formatToPlainString(M.default.NAFGkH, { level: A.title }),
                                        }),
                                    (0, r.jsx)(U, { powerup: s }),
                                    null != b &&
                                        (0, r.jsx)(c.E, {
                                            className: K.z3,
                                            color: "text-feedback-critical",
                                            variant: "text-sm/semibold",
                                            children: b,
                                        }),
                                    k &&
                                        (0, r.jsx)(Q, {
                                            className: K.qr,
                                            guildId: a,
                                            powerup: s,
                                            expressiveCta: "refresh_expressive_cta" === j,
                                            onError: v,
                                        }),
                                ],
                            }),
                        ],
                    }),
                    null != C && (0, r.jsx)("div", { className: K._9, children: C }),
                ],
            }),
            (0, r.jsx)(o.s_, { "data-migration-pending": !0, className: K.VN, onClick: f.onClose }),
        ],
    });
}
