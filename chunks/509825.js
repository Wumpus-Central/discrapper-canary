(n.r(t), n.d(t, { default: () => hK }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(17928),
    u = n(858899),
    c = n(458518),
    d = n(976860),
    m = n(696451),
    f = n(71393),
    h = n(576705),
    p = n(666476),
    g = n(989145),
    x = n(291815);
(n(323874), n(14289), n(35956));
var v = n(77729),
    j = n(723702),
    b = n(264572).Buffer;
async function y(e, t) {
    if (j.isPlatformEmbedded) {
        let n = b.from(await e.arrayBuffer());
        if ("function" == typeof v.A.fileManager.saveWithDialog2) await v.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await v.A.fileManager.saveWithDialog(n, t);
            } catch {}
        return;
    }
    let n = URL.createObjectURL(e);
    try {
        let e = document.createElement("a");
        ((e.href = n), (e.download = t), (e.rel = "noopener"), e.click());
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(n), 0);
    }
}
var k = n(688954);
class w extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function C(e, t) {
    let n = await (0, k.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new w(n.status);
    return await n.blob();
}
var N = n(261425),
    A = n(105292);
async function S(e, t, n) {
    (0, x.ensureConnection)(e);
    let l = await (0, g.vX)(e, t);
    (0, x.sendUserMessage)(e, n, [l]);
}
function E(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, p.Oq)(e.size, t)
        ? null
        : A.intl.formatToPlainString(N.default.ThxcOX, { size: (0, p.sM)((0, p.Ju)(t)) });
}
async function I(e, t) {
    let n,
        l =
            ((n = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === n ? "conjure" : n}.zip`),
        r = await C(e, l);
    await y(r, l);
}
function M(e) {
    let t = i.useRef(null),
        n = i.useCallback(
            (t) => {
                let n = t.target.files?.[0] ?? null;
                ((t.target.value = ""), null != n && e(n));
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, a.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.tar.bz2,.tar.xz,application/zip,application/gzip,application/x-tar,application/x-bzip2,application/x-xz",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: n,
        }),
    };
}
var _ = n(639519),
    P = n(361504);
let T = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    R = { main: T, subagent: T, thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    $ = { main: L, subagent: L, thinking: R.thinking },
    D = { tier: "balanced", provider: "openai" },
    z = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function F(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var O = n(950305),
    q = n(548118);
let U = "user";
var G = n(371169),
    B = n(260498),
    K = n(941985),
    V = n(16619),
    H = n(845329);
n(321073);
var W = n(503698),
    X = n.n(W),
    J = n(97893),
    Y = n(364522),
    Q = n(834730),
    Z = n(103557),
    ee = n(691885),
    et = n(821609),
    en = n(789645),
    el = n(289873),
    er = n(152367),
    ea = n(661531),
    ei = n(742589),
    es = n(265872),
    eo = n(980707),
    eu = n(477782),
    ec = n(81369),
    ed = n(664121);
let em = [
    { value: "user", icon: O.UserIcon, nameMessage: N.default.s1TsXl },
    { value: "guild", icon: ed.R, nameMessage: N.default.LlLIJw },
];
function ef(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = M(i.useCallback((e) => n(e, "user"), [n])),
        s = M(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: es.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eo.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": A.intl.string(N.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eu.rX, {
                            label: A.intl.string(N.default.NyVn6T),
                            children: em
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: A.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eu.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(et.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: ec.H,
                        text: A.intl.string(N.default.NJGZA3),
                        loading: t,
                        disabled: t,
                        "aria-haspopup": "menu",
                        "aria-expanded": r,
                    });
                },
            }),
            r.input,
            s.input,
        ],
    });
}
var eh = n(939249);
function ep(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(eh.D, {
        "aria-disabled": l,
        "aria-label": n,
        className: t,
        onClick: l ? void 0 : r,
        children: i,
    });
}
var eg = n(865665),
    ex = n(373913);
let ev = { x: 5, y: 7 },
    ej = { x: 5, y: 4 };
function eb(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: ex.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eg.C, { area: 64, radius: n, color: ea.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ey = n(864970),
    ek = n(707554),
    ew = n(297264),
    eC = n(770178),
    eN = n(765548),
    eA = n(276602),
    eS = n(885576),
    eE = n(662429);
let eI = "heading-xxl/semibold",
    eM = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eN.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eC.w)(l, [], { fireOnMount: !0 }),
        s = (0, o.bG)([eA.A], () => eA.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || eM) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((eM = !0), e.current?.play());
                }, 400));
        }
        let a = document.fonts;
        return (
            null == a ? r() : a.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(r, r),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [s, t]);
    let u = (0, o.bG)([eS.A], () => eS.A.isIdle()),
        c = i.useRef(u);
    i.useEffect(() => {
        let t = c.current && !u;
        ((c.current = u), t && eM && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = A.intl.string(N.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eE.x,
        children: t
            ? (0, a.jsx)(ek.H, { children: (0, a.jsx)(ey.o, { ref: e, text: d, variant: eI, delay: null }) })
            : (0, a.jsx)(ew.D, { variant: eI, children: d }),
    });
}
var eP = n(900797),
    eT = n(320448),
    eR = n(866665),
    eL = n(783977),
    e$ = n(344587),
    eD = n(534554),
    ez = n(392208),
    eF = n(837984),
    eO = n(359589),
    eq = n(254575);
function eU(e) {
    let [t, n] = i.useState(e),
        [l, r] = i.useState(!1),
        [a, s] = i.useState(e);
    return (
        a !== e && (s(e), e ? n(!0) : r(!1)),
        i.useEffect(() => {
            if (e || !t) return;
            let l = setTimeout(() => n(!1), 150);
            return () => clearTimeout(l);
        }, [e, t]),
        i.useEffect(() => {
            if (!t || !e) return;
            let n = 0,
                l = requestAnimationFrame(() => {
                    n = requestAnimationFrame(() => r(!0));
                });
            return () => {
                (cancelAnimationFrame(l), cancelAnimationFrame(n));
            };
        }, [t, e]),
        { mounted: t, entered: l }
    );
}
function eG(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = eU(d),
        h = ez.P.indexOf(t.tier),
        p = d ? eP.t : eT._,
        g = ez.P.map(eD.D0),
        x = (0, eD.Tc)(t.tier),
        { text: v, phase: j } = (0, e$.Q)(x);
    return (0, a.jsx)("div", {
        className: eq.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: X()(eq.t$, { [eq.Zr]: u && c, [eq.GF]: !u }),
            role: "dialog",
            "aria-label": A.intl.string(N.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: X()(eq.Nr, eq.uO, { [eq.Zr]: d && f.entered, [eq.GF]: !d }),
                          children: (0, a.jsx)(eO.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${eq.Nr} ${eq.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eq.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: eq.y6,
                                    "aria-expanded": d,
                                    "aria-label": A.intl.string(N.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: A.intl.string(N.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: eq.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(Q.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: X()(eq.Z, { [eq.xQ]: "exit" === j, [eq.lm]: "enter" === j }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eq.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eq.Nb,
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(N.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(N.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eF.A, {
                                    activeIndex: h,
                                    stops: g,
                                    ariaLabel: A.intl.string(N.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = ez.P[e];
                                        null != n && n !== t.tier && s((0, eD.CM)((0, eD.j6)(t, n)));
                                    },
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eB(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, eO.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = eU(f);
    return (0, a.jsx)(es.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eG, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: m,
                placement: t,
                open: f,
                entered: g,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(eR.m, {
                text: A.intl.string(N.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(eh.D, {
                    innerRef: c,
                    className: o ?? eq.hZ,
                    "aria-label": A.intl.string(N.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eL.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eK = n(434279),
    eV = n(140735),
    eH = n(442433),
    eW = n(314116),
    eX = n(652215),
    eJ = n(746080),
    eY = n(855793),
    eQ = n(287809),
    eZ = n(427262),
    e0 = n(245179),
    e1 = n(503275);
function e2(e) {
    let t = e?.id,
        n = e?.owner_user_id,
        l = (0, o.yK)(
            [e0.A],
            () =>
                null == t
                    ? []
                    : [
                          ...new Set(
                              e0.A.getMessages(t)
                                  .flatMap((e) => (null != e.user_id && e.user_id !== n ? [e.user_id] : []))
                                  .reverse(),
                          ),
                      ],
            [t, n],
        );
    i.useEffect(() => {
        null != n && ((0, e1.Y_)(n), l.forEach(e1.Y_));
    }, [n, l]);
    let r = (0, o.bG)([eQ.default], () => (null == n ? null : eQ.default.getUser(n)), [n]),
        a = (0, o.yK)([eQ.default], () => l.map((e) => eQ.default.getUser(e)).filter((e) => null != e), [l]);
    return i.useMemo(() => ({ creator: r ?? null, collaborators: a }), [r, a]);
}
var e3 = n(782603),
    e5 = n(780338),
    e4 = n(782134),
    e6 = n(113494),
    e7 = n(663417),
    e8 = n(70688),
    e9 = n(173936),
    te = n(473935),
    tt = n(625903),
    tn = n(408278),
    tl = n(365199),
    tr = n(7437),
    ta = n(147036),
    ti = n(957565),
    ts = n(785389),
    to = n(123917),
    tu = n(860402);
let tc = new Set();
var td = n(329356),
    tm = n(442331),
    tf = n(616334),
    th = n(189714),
    tp = n(733791),
    tg = n(189213),
    tx = n(331322),
    tv = n(192308),
    tj = n(664619),
    tb = n(706935);
function ty(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === l,
        p = h ? (0, tp.fI)(n) : (0, tp.Kd)(n),
        g = h ? null : (0, tp.L4)(n),
        x = (0, tp.Mi)(n),
        v = h
            ? A.intl.formatToPlainString(N.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(N.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tj.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(A.intl.string(h ? N.default["0XDHob"] : N.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tp.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tg.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tp.WX)((0, tb.tb)(N.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tp.J)(n) : A.intl.string(N.default["8OKM1N"]),
        "aria-label": v,
        notice: null == m ? void 0 : { message: m, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: A.intl.string(h ? N.default.aC42bN : N.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(tx.B, {
            gap: 12,
            children: [
                p.length > 0 || null != g
                    ? (0, a.jsx)(tb.Ay, {
                          items: p,
                          optionalItem:
                              null == g
                                  ? void 0
                                  : { item: g, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function tk(e) {
    (0, tv.openModal)((t) => (0, a.jsx)(ty, { ...t, ...e }));
}
var tw = n(587895);
function tC(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, c] = i.useState(null),
        d = (0, o.bG)([tw.A], () => tw.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        m = A.intl.formatToPlainString(N.default.m8KWic, { app: d });
    async function f() {
        (r(!0), c(null));
        let e = await (0, tj.R_)(t.id);
        (r(!1), e)
            ? ((0, u.P0)({ text: A.intl.formatToPlainString(N.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : c(A.intl.string(N.default["rE/0SD"]));
    }
    return (0, a.jsx)(tg.a, {
        ...n,
        role: "alertdialog",
        title: m,
        subtitle: A.intl.string(N.default.wve4kB),
        "aria-label": m,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(N.default.GqcQyH),
                variant: "critical-primary",
                loading: l,
                disabled: l,
                onClick: () => {
                    f().catch(() => {});
                },
            },
        ],
    });
}
var tN = n(552821);
let tA = [];
function tS(e) {
    (0, u.P0)({ text: e, variant: "critical" });
}
function tE(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: c,
            onExport: d,
            onImport: m,
            onRemix: f,
            onConnectTool: h,
            onHistory: p,
            onRefresh: g,
            isRefreshing: x = !1,
            onTogglePreviewPaused: v,
            previewPaused: j = !1,
            previewPauseDisabled: b = !1,
            onClose: y,
            refreshApplicationId: k,
            previewProjectId: w,
            onCloseMenu: C,
        } = e,
        S = (0, th.iI)(t),
        E = i.useContext(td.bI),
        { pending: I, refresh: M } = (0, tr.A)(k ?? null),
        { pending: _, connect: P } = (function (e, t) {
            let [n, l] = i.useState(tc),
                r = i.useRef(tc),
                a = i.useCallback((e) => {
                    ((r.current = (0, ts.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, ts.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tu.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, to.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, ts.rq)(l.error)
                                          ? A.intl.string(N.default["jCQ/1B"])
                                          : A.intl.string(N.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(w ?? null, tS),
        T = (0, o.bG)([tm.A], () => (null == w ? tA : tm.A.getDeclaredConnections(w))),
        R = i.useMemo(() => (0, ts.Xl)(T), [T]),
        L = (0, tp.Bs)(t),
        $ = (0, tp.CU)(t) && s,
        D = (0, o.bG)(
            [B.Ay],
            () => {
                let e = B.Ay.getProject(t);
                return null != e && (0, B.jf)(e);
            },
            [t],
        ),
        z = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: A.intl.string(N.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(N.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(N.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != k, refreshPending: I, offers: R, connectPending: _ }),
        F = i.useMemo(() => new Map(T.map((e) => [e.type, e])), [T]),
        O = null != f && c,
        q = s && null != m,
        U = O || null != d || q || null != h || null != p,
        K = ti.p5 && null != l,
        V = ti.p5,
        H = S ? e3.BellIcon : e5.BellSlashIcon,
        W = j ? e4.PlayIcon : e6.PauseIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: C,
        onSelect: C,
        children: [
            null != g || null != v || null != y
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "refresh",
                                    icon: e7.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e7.RefreshIcon },
                                    label: A.intl.string(N.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: W,
                                    leadingAccessory: { type: "icon", icon: W },
                                    label: A.intl.string(j ? N.default.ZKd2Cw : N.default.VHxerm),
                                    disabled: b,
                                    action: v,
                                })
                              : null,
                          null != y
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "close",
                                    icon: e8.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e8.DoorExitIcon },
                                    label: A.intl.string(N.default["/TlGcK"]),
                                    action: y,
                                })
                              : null,
                      ],
                  })
                : null,
            z.length > 0
                ? (0, a.jsx)(eu.rX, {
                      children: z.map((e) =>
                          (0, a.jsx)(
                              eu.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void M();
                                      let t = null == e.connectionType ? null : F.get(e.connectionType);
                                      null != t && P(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.Dr, {
                    id: "mute",
                    label: A.intl.string(S ? N.default.s9rCuH : N.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, th.$L)(t, !S),
                }),
            }),
            U
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: A.intl.string(N.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: A.intl.string(N.default.WsEEP7), action: d })
                              : null,
                          q
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: A.intl.string(N.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(N.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: A.intl.string(N.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            V
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          K
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: e9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: e9.LinkIcon },
                                    action: () =>
                                        (0, ti.C)((0, ta.n)(l, eJ.VV.CONJURE, t), () =>
                                            (0, u.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eu.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string(N.default["nm/zuU"]),
                              icon: te.L,
                              leadingAccessory: { type: "icon", icon: te.L },
                              action: () =>
                                  (0, ti.C)(t, () =>
                                      (0, u.P0)({ text: A.intl.string(N.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "settings",
                                    label: A.intl.string(N.default.FzfmQ8),
                                    icon: tt.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tt.SettingsIcon },
                                    action: () =>
                                        (0, tf.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: E,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(N.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tk({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(N.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tv.openModal)((t) => (0, a.jsx)(tC, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "delete",
                                    label: A.intl.string(A.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != L) tk({ project: e, target: L, action: "delete" });
                                        else
                                            (0, eW.A)({
                                                title: A.intl.formatToPlainString(N.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(N.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
                                                        (0, u.P0)({
                                                            text: A.intl.string(N.default["0XDHob"]),
                                                            variant: "critical",
                                                        }),
                                                    );
                                                },
                                            });
                                    },
                                })
                              : null,
                      ],
                  })
                : null,
        ],
    });
}
function tI(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tE, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tN.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, a.jsx)(tn.K, {
                                  icon: tl.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": A.intl.string(A.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ei.A.Icon, {
                              icon: tl.MoreHorizontalIcon,
                              tooltip: A.intl.string(A.t["UKOtz+"]),
                              "aria-label": A.intl.string(A.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var tM = n(497183),
    t_ = n(104171),
    tP = n(286739);
function tT(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: X()(tP.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(t_.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: t_.DN.SIZE_16 }),
    });
}
var tR = n(217846),
    tL = n(536637),
    t$ = n.n(tL),
    tD = n(941650);
function tz(e) {
    let t,
        n,
        l,
        r,
        s,
        { project: c, guildId: m, onSelect: h, onRemix: p, shared: g = !1 } = e,
        x =
            ((t = c.id),
            (n = c.name),
            (l = i.useRef(!1)),
            (r = i.useCallback(() => {
                l.current ||
                    ((l.current = !0),
                    (0, u.P0)({ text: A.intl.formatToPlainString(N.default.aN2JdD, { name: n }) }),
                    I(t, n)
                        .catch((e) => {
                            let n;
                            (console.error("[conjure] project export failed", t, e),
                                (0, u.P0)({
                                    text:
                                        409 === (n = e instanceof w ? e.status : null)
                                            ? A.intl.string(N.default["9oqbEw"])
                                            : 404 === n
                                              ? A.intl.string(N.default["0W8uLq"])
                                              : A.intl.string(N.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            l.current = !1;
                        }));
            }, [t, n])),
            {
                onExport: r,
                onImport: (s = M(
                    i.useCallback(
                        (e) => {
                            let l = E(e);
                            null != l
                                ? (0, u.P0)({ text: l, variant: "critical" })
                                : (0, eW.A)({
                                      title: A.intl.formatToPlainString(N.default["Gm+u1+"], { name: n }),
                                      subtitle: A.intl.string(N.default.M7H3sJ),
                                      confirmText: A.intl.string(N.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, d.pX)(eX.BVt.CHANNEL(m, eJ.VV.CONJURE, t));
                                          try {
                                              await S(t, e, A.intl.string(N.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(N.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [t, n, m],
                    ),
                )).open,
                importInput: s.input,
            }),
        v =
            null == c.updated_at
                ? null
                : A.intl.formatToPlainString(N.default.AXydi3, { time: t$()(c.updated_at).fromNow() }),
        j = (0, eK.wu)(c),
        b =
            (0, o.bG)([f.A], () => (null == j ? null : (f.A.getGuild(j)?.name ?? null)), [j]) ??
            A.intl.string(N.default["3QFps8"]),
        y = (0, o.bG)([B.Ay], () => B.Ay.isProjectDeleting(c.id), [c.id]),
        k = (function (e) {
            let { creator: t, collaborators: n } = e2(e);
            return i.useMemo(
                () =>
                    null == t
                        ? null
                        : {
                              creator: t,
                              collaborators: n,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? A.intl.formatToPlainString(N.default.t5RWBS, { creator: e })
                                      : A.intl.formatToPlainString(N.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? A.intl.formatToPlainString(A.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? A.intl.formatToPlainString(A.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? A.intl.formatToPlainString(A.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : A.intl.formatToPlainString(A.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, eZ.mG)(t),
                                  n.map((e) => (0, eZ.mG)(e)),
                              ),
                          },
                [t, n],
            );
        })(g ? c : null),
        C = i.useId(),
        _ = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: tD.j1, children: c.name }),
        P = {
            projectId: c.id,
            projectName: c.name,
            guildId: m,
            projectGuildId: c.guild_id,
            isOwner: (0, B.PV)(c),
            canRemix: (0, B.H_)(c),
            onRemix: p,
            onExport: x.onExport,
            onImport: x.onImport,
        };
    return (0, a.jsxs)("div", {
        className: X()(tD.OY, { [tD.Wy]: y }),
        "aria-busy": y,
        children: [
            (0, a.jsx)(eY.Ay, { projectId: c.id }),
            y ? null : (0, a.jsx)(tR.a, { projectId: c.id }),
            (0, a.jsxs)(eh.D, {
                className: tD.W6,
                onClick: y ? void 0 : h,
                onMouseDown: y
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, G.tf)(c.id);
                      },
                onContextMenu: function (e) {
                    y || (0, eH.jA)(e, () => (0, a.jsx)(tE, { ...P, onCloseMenu: eH.Z_ }));
                },
                tabIndex: y ? -1 : void 0,
                "aria-describedby": null != k ? C : void 0,
                children: [
                    (0, a.jsx)(tM.A, { project: c, size: "card", className: tD.VJ }),
                    (0, a.jsxs)("div", {
                        className: tD.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tD.Ub,
                                children: [
                                    null != k ? (0, a.jsx)(eR.m, { text: k.label, ariaHidden: !0, children: _ }) : _,
                                    null == k || y ? null : (0, a.jsx)(tT, { creator: k, className: tD.rb }),
                                    y ? null : (0, a.jsx)(tR.n, { projectId: c.id, className: tD.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tD.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tD.Wb,
                                        children: y ? A.intl.string(N.default.Yh5pAc) : b,
                                    }),
                                    null == v || y
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tD.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tD.zM,
                                                      children: v,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != k ? (0, a.jsx)(eV.A, { id: C, children: k.label }) : null,
            (0, a.jsx)("div", {
                className: tD.M2,
                children: y
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tD.Pl,
                          children: [(0, a.jsx)(tI, { ...P, trigger: "iconButton" }), x.importInput],
                      }),
            }),
        ],
    });
}
var tF = n(246338);
let tO = "user",
    tq = "no-server",
    tU = new Map();
function tG(e) {
    return tU.get(e) ?? null;
}
function tB(e) {
    switch (e) {
        case "all":
        case tO:
        case tq:
            return null;
        default:
            return e;
    }
}
function tK(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tO:
            return "user" === e.install_scope;
        case tq:
            return null == (0, eK.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tV = n(506774);
let tH = "ConjureProjectsPanelOpen";
function tW() {
    return tV.w.get(tH) ?? null;
}
function tX(e) {
    return `ConjureProjectsPanel:${e}`;
}
var tJ = n(95264),
    tY = n(631417);
function tQ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = A.intl.string(N.default.FzfmQ8);
    return (0, a.jsx)(ei.A, {
        hideSearch: !0,
        toolbar: n,
        className: tY.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tY.QF,
            children: [
                (0, a.jsx)(er.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ea.A.colors.TEXT_STRONG,
                    className: tY.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(ei.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(ei.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(eR.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(eh.D, {
                              className: tY.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tM.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ei.A.Title, { className: tY.Qw, wrapperClassName: tY.DD, children: t }),
            ],
        }),
    });
}
var tZ = n(683071),
    t0 = n(47167),
    t1 = n(808728),
    t2 = n(994500);
let t3 = "conjuring-help";
var t5 = n(173114);
function t4() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, o.cf)([eQ.default, f.A, t1.Ay, t2.A], () => {
                let e = eQ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eX.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = t1.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, t0.m1)(t, eQ.default, t2.A) === t3;
                    });
                    if (null != n) return { isStaff: e, guildId: t.id, channelId: n.channel.id };
                }
                return { isStaff: e, guildId: null, channelId: null };
            });
            return e
                ? null != t && null != n
                    ? { kind: "channel", guildId: t, channelId: n }
                    : { kind: "url", url: "https://i.dis.gd/conjuring-access" }
                : null;
        })(),
        t = i.useCallback(() => {
            null != e &&
                ("channel" === e.kind
                    ? (0, d.pX)(eX.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, to.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t5.l,
              children: (0, a.jsx)(tZ.w, {
                  type: "info",
                  iconAlign: "center",
                  message: A.intl.format(N.default["6anmu1"], { channel: t3, onNavigate: t }),
                  role: "none",
              }),
          });
}
var t6 = n(606128),
    t7 = n(323140);
function t8(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: s,
            createError: c,
            createDisabled: d,
            conjureTarget: m,
            onConjureTargetChange: h,
            eligibleGuilds: p,
            modelSettings: g,
            onModelSettingsChange: x,
            onSelectProject: v,
            onIdeaChange: j,
            onCreate: b,
            onCreateFromTemplate: y,
            onStartTemplate: k,
            onSubmitTemplate: w,
            onCancelTemplate: C,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, _] = i.useState(() => ({ guildId: r, filter: tG(r) })),
        T = (M.guildId === r ? M.filter : tG(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tU.set(r, e), _({ guildId: r, filter: e }));
            },
            [r],
        ),
        F = (0, o.yK)(
            [f.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = f.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        K = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: er.D, label: A.intl.string(N.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tO, leading: O.UserIcon, label: A.intl.string(N.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tq, leading: ed.R, label: A.intl.string(N.default["3QFps8"]) },
                ...F.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [F],
        ),
        V = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tB(T);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [T],
        );
    i.useEffect(() => {
        let e = tB(T);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [T]);
    let H = i.useMemo(() => V.filter((e) => tK(e, T)).sort(eK.Ds), [V, T]),
        W = i.useMemo(
            () => [
                {
                    label: A.intl.string(N.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: U,
                            label: A.intl.string(N.default.UPLaGM),
                            leading: O.UserIcon,
                        },
                        ...p.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [p],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tK(e, T))
                    .slice()
                    .sort(eK.Ds),
            [t, T],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tF.Ot)(e, r)
                    ? v(e.id)
                    : (0, u.P0)({ text: A.intl.string(N.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = A.intl.string(N.default.ab1sMf),
        ec = [A.intl.string(N.default["9w+Chc"]), A.intl.string(N.default.WAvmdq), A.intl.string(N.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: A.intl.string(N.default.lGLnE8),
                description: A.intl.string(N.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: A.intl.string(N.default.uJKQTs),
                description: A.intl.string(N.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: A.intl.string(N.default.iF5Oru), description: A.intl.string(N.default.NbDDO6) },
        ],
        eh = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: p,
                        onStart: (t) => k(e, t),
                        onSubmit: (t, n, l) => w(e, t, n, l),
                        onCancel: C,
                        onSkip: S,
                    }),
                    (0, tv.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("817855")]).then(
                                n.bind(n, 461122),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                y(e);
            },
            [p, r, C, y, S, k, w],
        ),
        eg = A.intl.string(N.default.zzYLlW),
        ex =
            (i.useEffect(() => {
                (0, G.b8)();
            }, []),
            (0, o.bG)([B.Ay], () => {
                let e = B.Ay.getMaxProjects();
                return null != e && B.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - B.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = A.intl.string(N.default["2XcV3x"]),
        ek = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ew = tB(T) ?? r,
        eC = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ew), [ew]),
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eA, eS] = i.useState(tW),
        eE = i.useMemo(() => tV.w.get(tX(r)) ?? !1, [r]),
        eI = "success" === eN,
        eM = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tK(e, r)),
        eP = eA ?? (!!eM || "error" === eN || (!eI && eE));
    i.useEffect(() => {
        eI && tV.w.set(tX(r), eM);
    }, [eI, eM, r]);
    let eT = i.useCallback((e) => {
            (tV.w.set(tH, e), eS(e));
        }, []),
        eR = i.useCallback(() => eT(!eP), [eT, eP]),
        eL = i.useCallback(() => eT(!1), [eT]),
        e$ = A.intl.string(N.default.kar7jh),
        eD = eP ? e$ : A.intl.string(N.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: X()(t7.nj, t7.a0, t6.T),
        children: (0, a.jsxs)("div", {
            className: t7.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t7.ps,
                    children: [
                        (0, a.jsx)(tQ, {
                            title: A.intl.string(N.default.uk6jhJ),
                            actions: (0, a.jsx)(ei.A.Icon, {
                                icon: J.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eP,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(Y.Ip, {
                            className: t7.Yy,
                            children: (0, a.jsx)("div", {
                                className: t7.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: X()(t7.Qs, t7.Ix),
                                    children: [
                                        (0, a.jsx)(t4, {}),
                                        (0, a.jsx)(e_, {}),
                                        (0, a.jsxs)("section", {
                                            className: t7.WI,
                                            "aria-label": eg,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t7.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eg,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(N.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t7.Aw,
                                                    radius: ev,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t7.EA,
                                                                children: (0, a.jsxs)(ep, {
                                                                    disabled: s,
                                                                    ariaLabel: A.intl.formatToPlainString(
                                                                        N.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: X()(t7.nx, t7.rz),
                                                                    onClick: () => eh(e),
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t7.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t7.BK,
                                                                            variant: "text-sm/normal",
                                                                            color: "text-subtle",
                                                                            children: e.description,
                                                                        }),
                                                                    ],
                                                                }),
                                                            },
                                                            e.id,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsxs)("section", {
                                            className: t7.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t7.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(N.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t7.Aw,
                                                    radius: ej,
                                                    children: ec.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t7.EA,
                                                                children: (0, a.jsx)(ep, {
                                                                    disabled: s,
                                                                    className: t7.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Q.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t7.un,
                                                                        children: e,
                                                                    }),
                                                                }),
                                                            },
                                                            e,
                                                        ),
                                                    ),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        }),
                        (0, a.jsx)("div", {
                            className: t7.Yl,
                            children: (0, a.jsxs)("div", {
                                className: X()(t7.Qs, t7.DA),
                                children: [
                                    (0, a.jsx)(Z.f, {
                                        label: eu,
                                        hideLabel: !0,
                                        rows: 3,
                                        value: l,
                                        placeholder: eu,
                                        error: c,
                                        onChange: j,
                                        onKeyDown: ek,
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: t7.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t7.gH,
                                                children: (0, a.jsx)(ee.l, {
                                                    selectionMode: "single",
                                                    label: A.intl.string(N.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: A.intl.string(N.default.NyVn6T),
                                                    options: W,
                                                    value: m,
                                                    onSelectionChange: h,
                                                    disabled: s,
                                                }),
                                            }),
                                            null != ex
                                                ? (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === ex ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === ex
                                                              ? A.intl.string(N.default.s28pGG)
                                                              : A.intl.formatToPlainString(N.default.Wy5aK4, {
                                                                    count: ex,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eB, {
                                                settings: g ?? D,
                                                tiers: z,
                                                choices: (0, P.b)()
                                                    ? {
                                                          main: [...R.main, ...$.main],
                                                          subagent: [...R.subagent, ...$.subagent],
                                                          thinking: R.thinking,
                                                      }
                                                    : R,
                                                disabled: s,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)(et.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: A.intl.string(A.t.CumH4u),
                                                disabled: d,
                                                loading: s,
                                                onClick: () => b(),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        children: A.intl.string(N.default.NvvCzX),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t7.pA,
                    hidden: !eP,
                    "aria-label": A.intl.string(N.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t7.IR,
                            children: [
                                (0, a.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t7.RM,
                                    children: A.intl.string(N.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t7.Ss,
                                    children: [
                                        (0, a.jsx)(ef, { importing: I, onImport: E }),
                                        (0, a.jsx)(ei.A.Icon, {
                                            icon: en.P,
                                            tooltip: e$,
                                            "aria-label": e$,
                                            onClick: eL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(Y.Ip, {
                            className: t7.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t7.Vw,
                                    children: (0, a.jsx)(ee.l, {
                                        selectionMode: "single",
                                        label: A.intl.string(N.default.U6TqU9),
                                        hideLabel: !0,
                                        options: K,
                                        value: T,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t7.wE,
                                    children: A.intl.string(N.default.JQpNkh),
                                }),
                                ("unattempted" === eC || "loading" === eC) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t7.E8, children: (0, a.jsx)(el.y, {}) })
                                    : "error" === eC && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t7.E8,
                                            children: [
                                                (0, a.jsx)(Q.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t7.JS,
                                                    children: A.intl.string(N.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(et.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: A.intl.string(N.default["WFJ/vb"]),
                                                    onClick: () => (0, G.hF)(ew),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t7.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t7.ST,
                                                  children: [
                                                      (0, a.jsx)(er.D, { size: "lg", color: ea.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t7.sI,
                                                          children: A.intl.string(N.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t7.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      tz,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tJ.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                H.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t7.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t7.uc,
                                                  children: [
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: A.intl.string(N.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: A.intl.string(N.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t7.Dq,
                                                  children: H.map((e) =>
                                                      (0, a.jsx)(
                                                          tz,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tJ.A)(e, r),
                                                              shared: !0,
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var t9 = n(478016),
    ne = n(604525),
    nt = n(92446),
    nn = n(534890),
    nl = n(646270),
    nr = n(31300),
    na = n(831453),
    ni = n(270593),
    ns = n(839214);
let no = Object.freeze({ x: 0.5, y: 0.5 });
function nu(e) {
    return "" !== e.trim();
}
function nc(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function nd(e) {
    let { kind: t, name: n } = nc(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nm(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let nf = "[conjure:selected] ",
    nh = " \u2014 ";
function np(e) {
    if (!e.startsWith(nf)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nf.length),
        a = r.indexOf(nh),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let ng = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nx = new Map(),
    nv = new Set();
function nj(e) {
    return nx.get(e) ?? ng;
}
function nb(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nx.set(e, t) : nx.delete(e), [...nv]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function ny(e) {
    let t = nj(e);
    t.active || nb(e, { ...t, active: !0 });
}
function nk(e) {
    let t = nj(e);
    t.active && nb(e, { ...t, active: !1 });
}
function nw(e) {
    nx.has(e) && nb(e, ng);
}
function nC(e, t) {
    let n = nj(e);
    n.active && nb(e, { ...n, context: t });
}
function nN(e, t) {
    return null != t && e.authorId === t;
}
function nA(e) {
    return (
        nv.add(e),
        () => {
            nv.delete(e);
        }
    );
}
function nS(e) {
    let t = i.useCallback(() => (null == e ? ng : nj(e)), [e]);
    return i.useSyncExternalStore(nA, t, t);
}
(n(134528), n(947204));
let nE = { past: [], present: [], future: [] };
function nI(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function nM(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function n_(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => nM(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: nM(e.from, t, n), to: nM(e.to, t, n) };
        case "text":
            return { ...e, at: nM(e.at, t, n) };
    }
}
function nP(e) {
    return e.some((e) => "erase" !== e.kind);
}
function nT(e, t) {
    switch (e.kind) {
        case "marker":
            return e.points.length > 1;
        case "erase":
            return e.points.length > 0;
        case "circle":
        case "square": {
            let n = e.width * t.width;
            return Math.abs(e.to.x - e.from.x) * t.width >= n && Math.abs(e.to.y - e.from.y) * t.height >= n;
        }
        case "text":
            return "" !== e.text.trim();
    }
}
function nR(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function nL(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function n$(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => nL(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = nL(e.from, t),
                l = nL(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = nL(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function nD(e) {
    return nP(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let nz = [3, 6, 12],
    nF = [10, 20, 40],
    nO = (0, ns.D)(() => ({ byProject: {} })),
    nq = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nE,
        sketchDismissedFor: null,
    };
function nU(e) {
    return nO.getState().byProject[e] ?? null;
}
function nG(e, t) {
    let n = nU(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = nO.getState();
    nO.setState({ byProject: { ...r, [e]: l } });
}
function nB(e) {
    if (null == nU(e)) return;
    let { [e]: t, ...n } = nO.getState().byProject;
    (nO.setState({ byProject: n }), nw(e));
}
function nK(e, t) {
    null != nU(e) &&
        (nG(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? ny(e) : nk(e));
}
function nV(e, t) {
    nG(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return nI(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return nI(
                        e,
                        e.present.map((e) => (e.id === t.id ? n_(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : nI(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : nI(e, []);
                case "undo": {
                    let t = e.past.at(-1);
                    if (null == t) return e;
                    return { past: e.past.slice(0, -1), present: t, future: [e.present, ...e.future] };
                }
                case "redo": {
                    let [t, ...n] = e.future;
                    if (null == t) return e;
                    return { past: [...e.past, e.present], present: t, future: n };
                }
            }
        })(e.history, t);
        return n === e.history ? e : { ...e, history: n };
    });
}
function nH(e) {
    return nO.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var nW = n(39416);
function nX(e) {
    let { enabled: t, onLongPress: n, children: l } = e,
        [r] = i.useState(() =>
            (function () {
                let e = null,
                    t = !1;
                function n() {
                    (null != e && clearTimeout(e), (e = null));
                }
                function l() {
                    (n(), (t = !1));
                }
                return {
                    press: (n) => {
                        (l(),
                            (e = setTimeout(() => {
                                ((e = null), (t = !0), n());
                            }, 500)));
                    },
                    release: () => {
                        (n(), t && (e = setTimeout(l, 0)));
                    },
                    cancel: l,
                    takeClick: () => {
                        let e = !t;
                        return ((t = !1), e);
                    },
                };
            })(),
        );
    return (
        i.useEffect(() => r.cancel, [r]),
        (0, a.jsx)("span", {
            className: nW.i5,
            onPointerDown: (e) => {
                t && 0 === e.button ? r.press(n) : r.cancel();
            },
            onPointerUp: r.release,
            onPointerLeave: (e) => {
                0 !== e.buttons && r.cancel();
            },
            onPointerCancel: r.cancel,
            onClickCapture: (e) => {
                r.takeClick() || (e.preventDefault(), e.stopPropagation());
            },
            children: l,
        })
    );
}
let nJ = new Set(),
    nY = null;
function nQ(e, t) {
    let n = i.useRef(t);
    (i.useLayoutEffect(() => {
        n.current = t;
    }),
        i.useEffect(() => {
            if (null == e) return;
            let t = (t) => {
                t === e && n.current();
            };
            return (
                nJ.add(t),
                () => {
                    nJ.delete(t);
                }
            );
        }, [e]));
}
var nZ = n(885386);
function n0() {
    return nZ.Q_.useSetting() || !1;
}
var n1 = n(573083),
    n2 = n(128761),
    n3 = n(12177),
    n5 = n(744627),
    n4 = n(513845),
    n6 = n(802905),
    n7 = n(951178);
let n8 = { width: 320, height: 240 };
var n9 = n(855859),
    le = n(238490),
    lt = n(991690),
    ln = n(696645);
function ll(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function lr(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, ln.X)(e.surface)
                : A.intl.formatToPlainString(N.default["6xVl+N"], {
                      surface: (0, ln.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return A.intl.string(N.default.y5GiL1);
        case "overlay":
            return A.intl.string(N.default["2940LX"]);
        case "bot":
            return A.intl.string(N.default.tjpaGN);
    }
}
var la = n(939398),
    li = n(86147),
    ls = n(729475),
    lo = n(91242),
    lu = n(156548),
    lc = n(869146),
    ld = n(475815),
    lm = n(165610);
function lf(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lu.cR)(t?.id ?? null),
        r = (0, n1.Zv)(n),
        i = (0, o.bG)(
            [lc.A, lo.A],
            () => null != t && lc.A.getWindowOpen(eX.MLl.ACTIVITY_POPOUT) && lo.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lm.x1)(t) || i || r) return null;
    let s = (0, lu.fl)(t.id);
    if (null == s || !(0, ld.Ub)(s)) return null;
    let u = A.intl.string(l ? A.t.Z7MyNB : A.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? li.z : ls.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lu.U8)(t.id),
    });
}
var lh = n(559106),
    lp = n(847374),
    lg = n(704745);
function lx(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = A.intl.string(N.default.I2ucou);
    return (0, a.jsx)(es.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eo.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eu.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = ll(e);
                        return (0, a.jsx)(
                            eu.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: lr(e),
                                checked: t === ll(n),
                                action: () => {
                                    (l(e), u());
                                },
                            },
                            t,
                        );
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { onClick: l, ...r } = e,
                { isShown: i } = t;
            return (0, a.jsx)(lh.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lg.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(N.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: lr(n),
                        }),
                        (0, a.jsx)(lp.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lv = n(324641),
    lj = n(627363),
    lb = n(153207),
    ly = n(803101),
    lk = n(226178),
    lw = n(625180),
    lC = n(672929),
    lN = n(111534),
    lA = n(754027),
    lS = n(457827),
    lE = n(722701),
    lI = n(949616),
    lM = n(962998),
    l_ = n(535466),
    lP = n(321032),
    lT = n(277085);
function lR(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, l_.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lT.p)(b),
        k = h ?? u;
    function w() {
        (r(), o());
    }
    async function C(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, td.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? w() : x(A.intl.string(N.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: C,
        children: (0, a.jsx)(tg.a, {
            transitionState: s,
            onClose: o,
            title: A.intl.string(N.default.OmOWDq),
            subtitle: A.intl.string(N.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: A.intl.string(N.default["bz/M68"]), variant: "secondary", onClick: w, disabled: v },
                {
                    text: A.intl.string(N.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != y,
                },
            ],
            children: (0, a.jsxs)(tx.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lP.r, {
                        iconURL: k,
                        onIconChange: (e) => {
                            (p(e), x(null));
                        },
                        name: c,
                        nameError: y,
                        onNameChange: d,
                        description: m,
                        onDescriptionChange: f,
                        disabled: v,
                    }),
                    null != g
                        ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: g })
                        : null,
                ],
            }),
        }),
    });
}
var lL = n(516288);
function l$(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lL.t)(t, n);
    return (0, a.jsx)(tg.a, {
        transitionState: r,
        onClose: i,
        title: s.title,
        subtitle: s.body,
        size: "sm",
        actions:
            null == s.cancel
                ? [{ text: s.action, variant: "primary", onClick: i }]
                : [
                      { text: s.cancel, variant: "secondary", onClick: i },
                      {
                          text: s.action,
                          variant: "primary",
                          onClick: () => {
                              (i(), l?.());
                          },
                      },
                  ],
    });
}
let lD = {
    showPublishBlocked: function (e, t, n) {
        (0, tv.openModal)((l) => (0, a.jsx)(l$, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tv.openModal)(
                (t) =>
                    (0, a.jsx)(lR, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    showError: (e) => (0, u.P0)({ text: e, variant: "critical" }),
};
var lz = n(58736),
    lF = n(333007),
    lO = n(621466),
    lq = n(775121),
    lU = n(826745),
    lG = n(285796),
    lB = n(73153);
let lK = [],
    lV = 1,
    lH = (0, ns.D)(() => ({ draftsByProject: {} }));
function lW(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lK;
}
function lX(e, t) {
    return lW(lH.getState(), e, t);
}
function lJ(e, t, n) {
    let { draftsByProject: l } = lH.getState();
    lH.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function lY(e, t, n, l) {
    let r = lX(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (lJ(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function lQ(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function lZ(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && lQ(e, t.ref.id));
}
function l0(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lH.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lK) n ? lZ(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lH.setState({ draftsByProject: i });
}
function l1(e) {
    return A.intl.formatToPlainString(N.default.JZ59Bo, { size: (0, p.sM)((0, p.Ju)(e)) });
}
function l2(e, t) {
    let n = lX(e, t);
    if (0 !== n.length) {
        for (let t of n) lZ(e, t);
        lJ(e, t, lK);
    }
}
function l3(e, t) {
    let n = lX(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (lJ(e, t, lK), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function l5(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = lX(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? l3(e, "chat") : [];
    (0, x.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(lB.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lH.getState().draftsByProject)) l0(e, { deleteFromWorker: !0 });
}),
    lB.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        l0(t, { deleteFromWorker: !1 });
    }));
var l4 = n(922329);
async function l6(e) {
    let t = new Worker(new URL("/assets/" + n.u("638664"), n.b));
    try {
        let n = await new Promise((n) => {
            (t.addEventListener("message", (e) => {
                let { data: t } = e;
                return n(t);
            }),
                t.addEventListener("error", () => n(null)),
                t.addEventListener("messageerror", () => n(null)),
                t.postMessage(e));
        });
        if (null == n) return null;
        return new File([n], `${e.name.replace(/\.png$/i, "")}.webp`, {
            type: "image/webp",
            lastModified: e.lastModified,
        });
    } finally {
        t.terminate();
    }
}
var l7 = n(153171);
function l8(e, t, n, l) {
    let r = lX(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lV++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (lJ(e, t, [
            ...lX(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void lY(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    lY(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  lY(e, t, n.localId, { status: "error", errorText: A.intl.string(N.default.E7dS5n) }),
                              p.o2 - 3e5,
                          )
                        : lQ(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        lY(e, t, n.localId, { status: "error", errorText: A.intl.string(N.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= 10)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: A.intl.formatToPlainString(N.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, p.Oq)(e.size, t))
                return "image/png" === t && e.size <= p.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await l6(e).catch(() => null);
                              return null != n && (0, p.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: l1(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: l1(t) } };
            let a = p.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function l9(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lH.useState((e) => lW(e, t, n)),
        a = i.useCallback((e) => l8(t, n, e, l), [t, n, l]),
        s = i.useCallback(
            (e) => {
                if (e.defaultPrevented) return;
                let t = Array.from(e.clipboardData?.files ?? []);
                0 !== t.length && (e.preventDefault(), a(t));
            },
            [a],
        ),
        o = i.useCallback(
            (e) => {
                let l, r;
                null != (r = (l = lX(t, n)).find((t) => t.localId === e)) &&
                    (lZ(t, r),
                    lJ(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => l3(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function re(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(l4.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: l7.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: l7.o1,
                onClick: () => n(t.localId),
                "aria-label": A.intl.string(N.default.Slam9g),
                children: (0, a.jsx)(lG.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var rt = n(470779);
function rn(e) {
    let {
            projectId: t,
            at: n,
            bounds: l,
            kind: r,
            value: s,
            onChange: o,
            onSubmit: u,
            onDismiss: c,
            canSubmit: d,
            closing: m,
            onUploadFile: f,
            anchor: h = "chip",
            allowAttachments: p = !0,
            placeholder: g,
            label: x,
        } = e,
        {
            drafts: v,
            addFiles: j,
            pasteFiles: b,
            removeDraft: y,
            settled: k,
            takeRefs: w,
        } = l9({ projectId: t, surface: "design", onUploadFile: f }),
        C = i.useRef(null),
        S = (d || v.length > 0) && k && !m,
        E = i.useCallback(() => {
            if (!S) return;
            let e = w();
            u(e.length > 0 ? e : void 0);
        }, [S, w, u]),
        [I, M] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => M(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let _ = i.useRef(null),
        [P, T] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => T({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let R = P?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        z = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - R - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: X()(rt.M0, { [rt.ho]: I && !m, [rt.ET]: m }),
        style: { left: D, top: z },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: C,
                              type: "file",
                              multiple: !0,
                              className: rt.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (j(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(eR.m, {
                              position: "bottom",
                              text: A.intl.string(N.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: rt.tY,
                                  onClick: () => C.current?.click(),
                                  "aria-label": A.intl.string(N.default.lgvqSB),
                                  children: (0, a.jsx)(ec.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rt.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(lU.y, {
                autoFocus: !0,
                rows: 1,
                className: rt.hF,
                value: s,
                placeholder: g ?? ("" === r ? A.intl.string(N.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? A.intl.string(N.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !p ? void 0 : b,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), E());
                },
            }),
            v.length > 0
                ? (0, a.jsx)("div", {
                      className: rt.ZO,
                      children: v.map((e) => (0, a.jsx)(re, { draft: e, onRemove: y }, e.localId)),
                  })
                : null,
        ],
    });
}
function rl(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rr(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function ra(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rl(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rl(e());
                l((e) => (rr(e, t) ? e : t));
            }
            n();
            let r = window.setInterval(n, 250);
            return (
                window.addEventListener("resize", n),
                () => {
                    (window.clearInterval(r), window.removeEventListener("resize", n));
                }
            );
        }, [t, e]),
        n
    );
}
var ri = n(876798),
    rs = n(48507),
    ro = n(193885),
    ru = n(744898),
    rc = n(803656),
    rd = n(241326),
    rm = n(972213);
function rf(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rh(e, t, n) {
    return {
        id: e,
        value: t,
        label: n,
        icon: function (e) {
            let { colorClass: n } = e;
            return (0, a.jsx)("svg", {
                className: n,
                width: 20,
                height: 20,
                viewBox: "0 0 24 24",
                "aria-hidden": !0,
                children: (0, a.jsx)("circle", {
                    cx: 12,
                    cy: 12,
                    r: 8,
                    fill: t,
                    stroke: "currentColor",
                    strokeWidth: 1.5,
                }),
            });
        },
    };
}
let rp = rh("red", rf(ea.A.unsafe_rawColors.RED_400), () => A.intl.string(N.default.tvXfjt)),
    rg = [
        rp,
        rh("yellow", rf(ea.A.unsafe_rawColors.YELLOW_300), () => A.intl.string(N.default.FYuaJ1)),
        rh("green", rf(ea.A.unsafe_rawColors.GREEN_360), () => A.intl.string(N.default["Vv+paS"])),
        rh("blue", rf(ea.A.unsafe_rawColors.BLUE_345), () => A.intl.string(N.default.k9b1QJ)),
        rh("white", rf(ea.A.unsafe_rawColors.WHITE), () => A.intl.string(N.default["1sOXwH"])),
    ];
function rx(e) {
    return rg.find((t) => t.id === e) ?? rp;
}
function rv(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinecap: "round",
            strokeLinejoin: "round",
        }),
    });
}
function rj(e) {
    let { colorClass: t } = e;
    return (0, a.jsxs)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: [
            (0, a.jsx)("path", {
                d: "M10 4H5.5A1.5 1.5 0 0 0 4 5.5V10M4 14v4.5A1.5 1.5 0 0 0 5.5 20H10M14 4h4.5A1.5 1.5 0 0 1 20 5.5V10",
                stroke: "currentColor",
                strokeWidth: 1.8,
                strokeLinecap: "round",
            }),
            (0, a.jsx)("path", { d: "M13 13v8l2.3-2.2 1.6 3.2 1.6-.8-1.6-3.1 3.1-.1L13 13Z", fill: "currentColor" }),
        ],
    });
}
function rb(e) {
    let { colorClass: t } = e;
    return (0, a.jsx)("svg", {
        className: t,
        width: 20,
        height: 20,
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": !0,
        children: (0, a.jsx)("path", {
            d: "M14.5 4.5 20 10l-8.5 8.5H7L4 15.5a1.5 1.5 0 0 1 0-2.1L14.5 4.5ZM9.5 9.5l5.5 5.5M7 18.5h13",
            stroke: "currentColor",
            strokeWidth: 1.8,
            strokeLinejoin: "round",
        }),
    });
}
function ry(e) {
    return function (t) {
        let { colorClass: n } = t;
        return (0, a.jsx)("svg", {
            className: n,
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            "aria-hidden": !0,
            children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: e / 2, fill: "currentColor" }),
        });
    };
}
let rk = nz.map((e) => ry(Math.min(16, e + 3))),
    rw = nF.map((e) => ry(Math.min(16, e / 2.5))),
    rC = [N.default.jZtZUr, N.default.cTQdD0, N.default.J3ucEg],
    rN = {
        circle: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeWidth: 2 }),
                });
            },
            label: () => A.intl.string(N.default.oIZQbm),
        },
        square: {
            icon: function (e) {
                let { colorClass: t } = e;
                return (0, a.jsx)("svg", {
                    className: t,
                    width: 20,
                    height: 20,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": !0,
                    children: (0, a.jsx)("rect", {
                        x: 5,
                        y: 5,
                        width: 14,
                        height: 14,
                        rx: 1.5,
                        stroke: "currentColor",
                        strokeWidth: 2,
                    }),
                });
            },
            label: () => A.intl.string(N.default.ARNVr7),
        },
    };
function rA(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nW.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(ri.k, {
                icon: t,
                size: "sm",
                variant: "icon-only",
                pressed: l,
                "aria-label": n,
                onClick: r,
            }),
        }),
    });
}
function rS(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tn.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rE(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: nW.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: nW.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rI(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rx(n.colorId),
        h = rN[u],
        p = A.intl.string(N.default.hUm825),
        g = A.intl.string(N.default.n5IA3a),
        x = A.intl.string(N.default.r5dX6t),
        v = A.intl.string(N.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nW.t$,
        children: [
            (0, a.jsx)("div", {
                className: nW.NT,
                children: (0, a.jsx)(rA, {
                    icon: rj,
                    label: A.intl.string(N.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => nK(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nW.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": A.intl.string(N.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rA, {
                        icon: rv,
                        label: A.intl.string(N.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => nK(t, "move"),
                    }),
                    (0, a.jsx)(rA, {
                        icon: rs.x,
                        label: A.intl.string(N.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => nK(t, "text"),
                    }),
                    (0, a.jsx)(rE, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rA, {
                                icon: ro.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (nK(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rk.map((n, l) =>
                                (0, a.jsx)(
                                    rA,
                                    {
                                        icon: n,
                                        label: A.intl.string(rC[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nG(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nk(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rE, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rA, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (nK(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rN).map((n) =>
                                (0, a.jsx)(
                                    rA,
                                    {
                                        icon: rN[n].icon,
                                        label: rN[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (nK(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rE, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rA, {
                                icon: rb,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (nK(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rw.map((n, l) =>
                                (0, a.jsx)(
                                    rA,
                                    {
                                        icon: n,
                                        label: A.intl.string(rC[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nG(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nk(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rE, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rS, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rg.map((n) =>
                                (0, a.jsx)(
                                    rA,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                nG(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: nW.Gz, role: "separator" }),
                    (0, a.jsx)(rS, {
                        icon: ru.e,
                        label: A.intl.string((0, j.isMac)() ? N.default["j/XmBQ"] : N.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rS, {
                        icon: rc.U,
                        label: A.intl.string((0, j.isMac)() ? N.default.C7jhpn : N.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rS, {
                        icon: rd.TrashIcon,
                        label: A.intl.string(N.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nW.Gz, role: "separator" }),
                    (0, a.jsx)(rS, { icon: rm.XLargeIcon, label: A.intl.string(N.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rM = ea.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function r_(e, t, n) {
    function l(e) {
        return e * n.width;
    }
    function r(e) {
        return e * n.height;
    }
    for (let n of ((e.lineCap = "round"), (e.lineJoin = "round"), t))
        switch (
            ((e.globalCompositeOperation = "erase" === n.kind ? "destination-out" : "source-over"),
            "erase" !== n.kind && ((e.strokeStyle = n.color), (e.fillStyle = n.color)),
            n.kind)
        ) {
            case "marker":
            case "erase": {
                let [t, ...a] = n.points;
                if (null == t) break;
                for (let i of ((e.lineWidth = l(n.width)),
                e.beginPath(),
                e.moveTo(l(t.x), r(t.y)),
                0 === a.length && e.lineTo(l(t.x), r(t.y)),
                a))
                    e.lineTo(l(i.x), r(i.y));
                e.stroke();
                break;
            }
            case "square":
                ((e.lineWidth = l(n.width)),
                    e.strokeRect(
                        l(Math.min(n.from.x, n.to.x)),
                        r(Math.min(n.from.y, n.to.y)),
                        l(Math.abs(n.to.x - n.from.x)),
                        r(Math.abs(n.to.y - n.from.y)),
                    ));
                break;
            case "circle":
                ((e.lineWidth = l(n.width)),
                    e.beginPath(),
                    e.ellipse(
                        l((n.from.x + n.to.x) / 2),
                        r((n.from.y + n.to.y) / 2),
                        l(Math.abs(n.to.x - n.from.x) / 2),
                        r(Math.abs(n.to.y - n.from.y) / 2),
                        0,
                        0,
                        2 * Math.PI,
                    ),
                    e.stroke());
                break;
            case "text": {
                let t = l(n.size);
                ((e.font = `600 ${t}px sans-serif`),
                    (e.textBaseline = "top"),
                    (e.lineWidth = 0.18 * t),
                    (e.strokeStyle = rM),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rP(e) {
    if ("u" > typeof OffscreenCanvas) {
        let t = new OffscreenCanvas(e.width, e.height),
            n = t.getContext("2d");
        return null == n
            ? null
            : { canvas: t, ctx: n, toBlob: () => t.convertToBlob({ type: "image/webp", quality: 0.92 }) };
    }
    let t = document.createElement("canvas");
    ((t.width = e.width), (t.height = e.height));
    let n = t.getContext("2d");
    return null == n ? null : { canvas: t, ctx: n, toBlob: () => new Promise((e) => t.toBlob(e, "image/webp", 0.92)) };
}
async function rT(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rP(e),
            r = rP(e);
        if (null == l || null == r) return null;
        return (r_(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rR = new Map(),
    rL = new Map(),
    r$ = (0, ns.D)(() => ({ byMessageKey: {} }));
function rD(e, t) {
    let { [e]: n, ...l } = r$.getState().byMessageKey;
    r$.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rz(e, t) {
    null == t ? rR.delete(e) : rR.set(e, t);
}
function rF(e) {
    return rR.get(e)?.() ?? Promise.resolve(null);
}
let rO = { dx: 0, dy: 0 },
    rq = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rU = 1;
function rG(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = nH(s),
        { active: u } = nS(s),
        c = (0, tv.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => nB(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && ny(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rB, { projectId: s, state: o, resolveIframe: r });
}
function rB(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = ra(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, x] = i.useState(rO),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        C = i.useRef(null),
        S = i.useRef(0),
        { tool: E, history: I } = n,
        M = rx(n.colorId),
        _ = "pick" !== E,
        P = "marker" === n.tool ? nz[n.markerSize] : "eraser" === n.tool ? nF[n.eraserSize] : null,
        T = "move" === E ? (I.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(j.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            k.current = s;
        }, [s]));
    let L = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lv.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, lF.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lv.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rz(t, L), () => rz(t, null)), [t, L]);
    let $ = i.useCallback(
        (e) => {
            ((C.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = w.current,
                            t = C.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(S.current), []);
    let D = i.useCallback(() => {
        let e = v.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = y.current,
            s = null == i ? I.present : I.present.map((e) => (e.id === i.id ? n_(e, p.dx, p.dy) : e)),
            o = b.current;
        r_(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, I.present, p]);
    i.useLayoutEffect(D, [D]);
    let z = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        F = i.useCallback(() => {
            let e = k.current;
            if (null == e || null == r) return;
            k.current = null;
            let n = {
                id: `mark-${rU++}`,
                kind: "text",
                color: M.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (nT(n, r) && nV(t, { type: "commit", shape: n }), o(null));
        }, [t, M, r]),
        O = i.useCallback(() => {
            ((k.current = null), o(null));
        }, []),
        q = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != k.current) return void F();
                let t = z(e);
                switch (E) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == T ? null : n$(T, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? T
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = nL(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => nL(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (nR(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = nL(e.from, n),
                                                                  r = nL(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => nR(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = nL(e.from, n),
                                                                  r = nL(e.to, n),
                                                                  a = Math.abs(r.x - t.x) / 2,
                                                                  i = Math.abs(r.y - t.y) / 2;
                                                              if (0 === a || 0 === i) return !1;
                                                              let s = (t.x + r.x) / 2,
                                                                  o = (t.y + r.y) / 2;
                                                              return (
                                                                  Math.abs(
                                                                      Math.hypot((l.x - s) / a, (l.y - o) / i) - 1,
                                                                  ) <=
                                                                  (6 + (e.width * n.width) / 2) / Math.min(a, i)
                                                              );
                                                          }
                                                          case "text": {
                                                              let t = n$(e, n);
                                                              return (
                                                                  l.x >= t.x - 6 &&
                                                                  l.x <= t.x + t.width + 6 &&
                                                                  l.y >= t.y - 6 &&
                                                                  l.y <= t.y + t.height + 6
                                                              );
                                                          }
                                                      }
                                                  })(e[l], t, n)
                                              )
                                                  return e[l];
                                          return null;
                                      })(I.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (y.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!nP(I.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rU++}`,
                                kind: "erase",
                                width: nF[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rU++}`,
                                kind: "marker",
                                color: M.value,
                                width: nz[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rU++}`,
                                kind: E,
                                color: M.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                D();
            },
            [r, E, M, T, I.present, n.markerSize, n.eraserSize, z, F, D],
        ),
        U = i.useCallback(
            (e) => {
                $(e);
                let t = z(e),
                    n = y.current;
                if (null != n) return void x({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = b.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (b.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (b.current = { ...l, to: t }),
                    D());
            },
            [z, $, D],
        ),
        G = i.useCallback(() => {
            v.current?.removeAttribute("data-dragging");
            let e = y.current;
            if (null != e) {
                ((y.current = null), x(rO), nV(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = b.current;
            ((b.current = null), null != n && null != r && nT(n, r) ? nV(t, { type: "commit", shape: n }) : D());
        }, [t, r, p, D]),
        B = i.useCallback(() => nB(t), [t]),
        K = i.useCallback(() => nV(t, { type: "undo" }), [t]),
        V = i.useCallback(() => nV(t, { type: "redo" }), [t]),
        H = i.useCallback(() => nV(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: E, selected: T, exit: B, undo: K, redo: V });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: E, selected: T, exit: B, undo: K, redo: V };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, lO.Cw)((0, lO.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != k.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = W.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? h(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), nV(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rq[s];
                null != o && (e.preventDefault(), nK(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (_) return (lq.A.disable(), () => lq.A.enable());
        }, [_]),
        null == r)
    )
        return null;
    let X = Math.max(8, r.left - d - 8),
        J = null == T ? null : n$(null == y.current ? T : n_(T, p.dx, p.dy), r);
    return (0, lF.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: nW.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: nW.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: v,
                            className: nW.Ji,
                            "data-tool": E,
                            "data-interactive": _ && !u ? "" : void 0,
                            "aria-label": A.intl.string(N.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: q,
                            onPointerEnter: $,
                            onPointerLeave: () => $(null),
                            onPointerMove: U,
                            onPointerUp: G,
                            onPointerCancel: G,
                        }),
                        null == P || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: w,
                                  className: nW.V$,
                                  "data-tool": E,
                                  "data-color": M.id,
                                  style: { width: P, height: P },
                                  "aria-hidden": !0,
                              }),
                        null == J
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nW.r1,
                                  style: { left: J.x, top: J.y, width: J.width, height: J.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: nW.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: nW.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: nW.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: nW.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rn, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: A.intl.string(N.default["8gX1lw"]),
                          label: A.intl.string(N.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: F,
                          onUploadFile: (e) => (0, g.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: j,
                    className: nW.ej,
                    style: { left: X, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rI, { projectId: t, state: n, onExit: B, onUndo: K, onRedo: V, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var rK = n(308081),
    rV = n(689175),
    rH = n(65593),
    rW = n(218394),
    rX = n(115982),
    rJ = n(886540);
function rY(e) {
    return !(0, rJ.BL)(e) && !0 !== e.stopRequested;
}
var rQ = n(104317),
    rZ = n(643278),
    r0 = n(566424),
    r1 = n(683063),
    r2 = n(138212);
function r3(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: X()(r2.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: X()(r2.wx, null != n && r2.o5, i),
                children: [
                    (0, a.jsx)(Q.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var r5 = n(148590);
function r4(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function r6(e) {
    let {
            title: t,
            meta: n,
            superseded: l = !1,
            showLabel: r,
            hideLabel: s,
            bodyClassName: o,
            beforeBody: u,
            children: c,
            ...d
        } = e,
        m = i.useId(),
        [f, h] = i.useState(!l),
        [p, g] = i.useState(l);
    p !== l && (g(l), h(!l));
    let x = i.useCallback(() => h((e) => !e), []),
        v = f ? lp.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(r3, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: r5.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eh.D, {
                                className: r5.L$,
                                onClick: x,
                                "aria-expanded": f,
                                "aria-controls": m,
                                "aria-label": f ? s : r,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: f ? void 0 : r5.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: X()(r5.rf, o), hidden: !f, children: c })],
    });
}
var r7 = n(883646);
let r8 = [];
function r9(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: X()(r7.xL, {
            [r7.Vb]: "in_progress" === t,
            [r7.cT]: "completed" === t,
            [r7.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return A.intl.string(N.default.KvBdun);
                case "in_progress":
                    return A.intl.string(N.default["m5G9+S"]);
                case "unfinished":
                    return A.intl.string(N.default.lRpwhD);
                default:
                    return A.intl.string(N.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(el.y, {
                type: el.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: r7.Qd,
                itemClassName: r7.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: r7.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: r7.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ae(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : r8), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [m, f] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let p = o.slice(0, 3),
        g = o.length - p.length;
    return (0, a.jsxs)("span", {
        className: r7.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r1.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: r7.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: r7.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function at(e) {
    let t,
        { todos: n, provisional: l, agents: r, live: s = !0 } = e,
        o = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [r, a] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                r !== t && (a(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        u =
            ((t = (r ?? r8).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(
                () =>
                    (function (e) {
                        let t = new Map();
                        for (let n of e) {
                            if (null == n.todoId || "" === n.todoId) continue;
                            let e = t.get(n.todoId);
                            null != e ? e.push(n) : t.set(n.todoId, [n]);
                        }
                        return t;
                    })(r ?? r8),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: r7.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: X()(r7.AS, { [r7.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(r9, { status: n }),
                            (0, a.jsx)(Q.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: r7.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: r7.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ae, { agents: u.get(e.id) ?? r8, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: r7.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(r9, { status: "pending" }),
                          (0, a.jsx)(Q.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: r7.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: r7.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function an(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = A.intl.formatToPlainString(N.default["P/I+JW"], { completed: o, total: u }),
        d = A.intl.formatToPlainString(N.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(r6, {
        title: A.intl.string(N.default.RtzECX),
        meta: (0, a.jsx)(r4, { children: c }),
        superseded: s,
        showLabel: A.intl.string(N.default.RKyN9q),
        hideLabel: A.intl.string(N.default.xydHoj),
        className: r7.Nr,
        bodyClassName: r7.rf,
        beforeBody: r && !s ? (0, a.jsx)(eV.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(at, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var al = n(308665),
    ar = n(59678),
    aa = n(903847);
function ai(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, h] = i.useState(c),
        [p, g] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    (j !== c && (b(c), null != n ? (m(n), h(!0)) : (g(!1), v(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => g(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [y, k] = i.useState(!1),
        [w, C] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? k(!0) : C(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => C(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        M = i.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: aa.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: X()(aa.vK, { [aa.ho]: p && c, [aa.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: X()(aa.Rk, ar.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r0.A, {
                                        glyph: (0, a.jsx)(al.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eh.D, {
                                    className: aa.pZ,
                                    onClick: u,
                                    "aria-label": A.intl.string(N.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: X()(aa.Rk, ar.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r0.A, {
                                            glyph: (0, a.jsx)(al.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(eR.m, {
                                    text: A.intl.string(N.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eh.D, {
                                        className: aa.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": A.intl.string(N.default.RtzECX),
                                        children: (0, a.jsx)(rZ.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  y && I
                      ? (0, a.jsx)("div", {
                            className: X()(aa.vB, { [aa.pg]: x && w, [aa.ui]: !x }),
                            children: (0, a.jsx)(an, {
                                todos: l,
                                provisional: s,
                                agents: o,
                                live: r,
                                announceProgress: !1,
                            }),
                        })
                      : null,
              ],
          })
        : null;
}
var as = n(890497);
function ao(e) {
    let t = (0, V.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var au = n(382541);
async function ac(e, t, n) {
    let [l, r] = await Promise.all([(0, au.dv)(t), (0, au.dv)(e)]),
        a = await fetch(`${l.baseUrl}/agent/app-build-request?${new URLSearchParams({ ticket: l.ticket })}`, {
            method: "POST",
            body: JSON.stringify({ caller_ticket: r.ticket, prompt: n }),
        });
    if (!a.ok) throw Error(`app build request failed: ${a.status}`);
}
var ad = n(29073),
    am = n(590077);
function af(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r } = e,
        s = (function (e, t, n) {
            let l = ao(e),
                [r, a] = i.useState(null),
                [s, o] = i.useState(t.prompt),
                [u, c] = i.useState(!1),
                [d, m] = i.useState(!1),
                f = l.some((e) => e.projectId === t.project_id) ? t.project_id : null,
                h = r ?? f ?? null,
                p = l.find((e) => e.projectId === h) ?? null,
                g = s.trim(),
                x = n && !u && null != p && "" !== g,
                v = i.useCallback(() => {
                    x &&
                        null != p &&
                        (c(!0),
                        m(!1),
                        ac(e, p.projectId, g).then(
                            () => {
                                let t;
                                return l5(
                                    e,
                                    ((t = A.intl.formatToPlainString(N.default.jZlNst, {
                                        name: p.name,
                                        projectId: p.projectId,
                                    })),
                                    `${t}

${g}`),
                                );
                            },
                            () => {
                                (c(!1), m(!0));
                            },
                        ));
                }, [x, e, p, g]);
            return {
                projects: l,
                targetId: h,
                setTargetId: a,
                prompt: s,
                setPrompt: o,
                sending: u,
                failed: d,
                canSubmit: x,
                submit: v,
            };
        })(t, n, l),
        o = i.useMemo(
            () =>
                s.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [s.projects],
        ),
        u = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: X()(ad.nd, ad.jx),
        "aria-labelledby": u,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: ad.wx,
                children: [
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        id: u,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: ad.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tn.K, {
                        icon: en.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: r,
                        "aria-label": A.intl.string(N.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: am.r,
                children: [
                    0 === o.length
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.TbbzW5),
                          })
                        : (0, a.jsx)(as.Z, {
                              label: A.intl.string(N.default["29gr8j"]),
                              placeholder: A.intl.string(N.default.twlOb6),
                              options: o,
                              selectionMode: "single",
                              value: s.targetId,
                              onSelectionChange: s.setTargetId,
                              disabled: s.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(Z.f, {
                        label: A.intl.string(N.default.XZNsDA),
                        value: s.prompt,
                        onChange: s.setPrompt,
                        maxLength: 4e3,
                        disabled: s.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: s.failed ? A.intl.string(N.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ad.qr,
                children: (0, a.jsx)("div", {
                    className: ad.zt,
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(N.default.gG4j6o),
                        disabled: !s.canSubmit,
                        loading: s.sending,
                        onClick: s.submit,
                    }),
                }),
            }),
        ],
    });
}
var ah = n(658675),
    ap = n(22231),
    ag = n(123292),
    ax = n(734057);
function av(e) {
    return 0 === e.options.length && null == e.input;
}
let aj = {
        [eX.rbe.GUILD_TEXT]: "text",
        [eX.rbe.GUILD_VOICE]: "voice",
        [eX.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eX.rbe.GUILD_STAGE_VOICE]: "stage",
        [eX.rbe.GUILD_FORUM]: "forum",
        [eX.rbe.GUILD_MEDIA]: "media",
    },
    ab = { channel: "#", role: "@", user: "@", project: "" },
    ay = {
        channel: [N.default["9+dfPT"], N.default.pGSJqE],
        role: [N.default["2VkCoD"], N.default.c8YlX8],
        user: [N.default.GZIAxl, N.default["4bptbQ"]],
        project: [N.default.twlOb6, N.default.twlOb6],
    };
function ak(e, t) {
    return A.intl.string(ay[e][+!!t]);
}
var aw = n(155078);
function aC(e) {
    return e.options.some((e) => null != e.image);
}
let aN = [];
async function aA(e, t) {
    await (0, k.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aS(e, t) {
    return {
        image: e,
        selected: t,
        busy: null,
        error: null,
        onPick: () => void 0,
        onRemove: () => void 0,
        onUpload: () => void 0,
        onLink: () => Promise.resolve(!1),
    };
}
var aE = n(300344),
    aI = n(614733),
    aM = n(904363),
    a_ = n(950902),
    aP = n(384017);
function aT(e) {
    let {
            guildId: t,
            question: n,
            value: l,
            disabled: r,
            onChange: i,
            onFocus: s,
            onBlur: o,
            options: u,
            placeholder: c,
            onQueryChange: d,
            matchSorterOptions: m,
        } = e,
        f = !0 === n.multi_select,
        h = l.map((e) => e.id);
    function p(e) {
        var t, r;
        return (
            (t = n.input ?? "channel"),
            (r = (e) => u.find((t) => t.value === e)?.label),
            e.slice(0, 10).map((e) => ({
                id: e,
                name: r(e) ?? l.find((t) => t.id === e)?.name ?? e,
                ...(function (e, t) {
                    if ("channel" === e) {
                        var n;
                        let l = null == (n = ax.A.getChannel(t)?.type) ? void 0 : aj[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = eQ.default.getUser(t)?.username;
                        return { kind: e, ...(null == n ? {} : { username: n }) };
                    }
                    return { kind: e };
                })(t, e),
            }))
        );
    }
    let g = {
        options: u,
        placeholder: c,
        disabled: r,
        onQueryChange: d,
        matchSorterOptions: m,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: aP.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(as.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(as.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aR(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aE.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aT, { ...l, guildId: t, options: r, placeholder: ak("channel", !0 === l.question.multi_select) });
}
function aL(e) {
    let { guildId: t, ...n } = e,
        l = (0, aM.A)(t);
    return (0, a.jsx)(aT, { ...n, guildId: t, options: l, placeholder: ak("role", !0 === n.question.multi_select) });
}
function a$(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aI.A)(t);
    return (0, a.jsx)(aT, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: ak("user", !0 === n.question.multi_select),
    });
}
function aD(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ao(t),
        s = i.useMemo(
            () =>
                r.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [r],
        );
    return 0 === s.length ? n : (0, a.jsx)(aT, { ...l, options: s, placeholder: ak("project", !1) });
}
function az(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, a_.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aD, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aR, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aL, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(a$, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aF = n(87221),
    aO = n(144228),
    aq = n(26430),
    aU = n(750943),
    aG = n(95477),
    aB = n(256905);
function aK(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, g.PK)(e, t).then(
                    (e) => {
                        n || l(e);
                    },
                    () => {
                        n || (0 === s ? o(1) : a(!0));
                    },
                ),
                () => {
                    n = !0;
                }
            );
        }, [e, t, s]),
        {
            src: n,
            gone: r,
            handleError: i.useCallback(() => {
                (l(null),
                    (0, g.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
var aV = n(907702);
function aH(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = aK(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: X()(aV.Gt, aV.b6),
              children: [
                  (0, a.jsx)(aF.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: A.intl.string(N.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: X()(aV.Gt, { [aV.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aV.Sl,
                            onLoad: (e) => {
                                d(s);
                                let { naturalWidth: t, naturalHeight: n } = e.currentTarget;
                                t > 0 && n > 0 && r({ width: t, height: n });
                            },
                            onError: u,
                            draggable: !1,
                        })
                      : null,
          });
}
function aW(e) {
    let t,
        n,
        {
            projectId: l,
            option: r,
            multi: i,
            selected: s,
            disabled: o,
            reachable: u,
            tabbable: c,
            onPick: d,
            onView: m,
            onArrow: f,
            onMeasured: h,
            onRemove: p,
        } = e,
        g = A.intl.formatToPlainString(N.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: X()(aV.Vs, { [aV.Q9]: s, [aV.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: aV.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": A.intl.formatToPlainString(N.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: aV.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aH, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: aV.Gt }),
                            (0, a.jsx)("span", {
                                className: aV.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ah.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(aO.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aV.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aw.E)(t) : "")
                                ? (function (e) {
                                      let t = e.toLowerCase().split(".");
                                      if (t.length < 2 || /^\d+$/.test(t[t.length - 1]) || e.includes(":")) return e;
                                      let [n, l] = t.slice(-2),
                                          r = t.length > 2 && 2 === l.length && n.length <= 3;
                                      return t.slice(r ? -3 : -2).join(".");
                                  })(n)
                                : r.label,
                    }),
                ],
            }),
            null != p
                ? (0, a.jsx)("span", {
                      className: aV.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: A.intl.string(N.default.HQEXJM),
                          children: (0, a.jsx)(tn.K, {
                              icon: rd.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": A.intl.string(N.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aV.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: A.intl.string(N.default["4/eeDD"]),
                            children: (0, a.jsx)(tn.K, {
                                icon: aq._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": g,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function aX(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, g.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, aB.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = p.current.get(t[n].id);
                                    return {
                                        type: "IMAGE",
                                        url: e,
                                        original: e,
                                        alt: t[n].label,
                                        ...(null != r
                                            ? ((l = Math.max(1, 480 / Math.max(r.width, r.height))),
                                              { width: Math.round(r.width * l), height: Math.round(r.height * l) })
                                            : {}),
                                    };
                                }),
                                startingIndex: l,
                                shouldHideMediaOptions: !0,
                                location: "ConjureClarificationImageOptions",
                            });
                        },
                        () => {},
                    );
            },
            [m, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (m.findIndex((t) => t.id === e.id) + t + m.length) % m.length,
                    l = m[n];
                (v(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: A.intl.string(N.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aV.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: X()(aV.fF, "gallery" === f ? aV.nV : aV.nM, { [aV.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            aW,
                            {
                                projectId: n,
                                option: e,
                                multi: d,
                                selected: r.includes(e.id),
                                disabled: s,
                                reachable: o,
                                tabbable: d || e.id === j,
                                onPick: (e) => {
                                    (v(e.id), u(e));
                                },
                                onView: b,
                                onArrow: y,
                                onMeasured: (t) => p.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != k
                        ? (0, a.jsx)(
                              aW,
                              {
                                  projectId: n,
                                  option: k,
                                  multi: d,
                                  selected: c.selected,
                                  disabled: s,
                                  reachable: o,
                                  tabbable: !0,
                                  onPick: c.onPick,
                                  onView: () => void 0,
                                  onArrow: () => void 0,
                                  onMeasured: () => void 0,
                                  onRemove: c.onRemove,
                              },
                              k.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(aJ, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: A.intl.string(/\bicons?\b/i.test(l.question) ? N.default.qU4WN6 : N.default.cbMDDB),
            }),
        ],
    });
}
function aJ(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function x() {
        "" !== d.trim() &&
            null == h &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: aV.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aV.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aU.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(et.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: e9.LinkIcon,
                              text: A.intl.string(N.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: aV.Fg,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        onChange: (e) => {
                            var l, r;
                            let a = e.currentTarget.files?.[0];
                            ((e.currentTarget.value = ""),
                                null != a &&
                                    n.onUpload(
                                        ((l = a.name),
                                        (r = a.type),
                                        (0, p.Oq)(a.size, r)
                                            ? (0, g.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: l1(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aV.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aV.Hs,
                              children: (0, a.jsx)(aG.k, {
                                  label: A.intl.string(N.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: A.intl.string(N.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), x())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == h && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: aV.gd,
                              children: [
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(N.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(ag.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: A.intl.string(N.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      "data-conjure-own-image-error": !0,
                      children: n.error.text,
                  })
                : null,
        ],
    });
}
function aY(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: X()(aP.uK, { [aP.ue]: l, [aP.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": A.intl.formatToPlainString(c ? N.default["2p6UFz"] : N.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: aP.dy, children: (0, a.jsx)(ah.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aP.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aP.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aP.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aP.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(Q.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            c
                ? (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: aP.rM,
                      children: A.intl.string(N.default.zku6r1),
                  })
                : null,
        ],
    });
}
function aQ(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aC(n)
        ? (0, a.jsx)(aX, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      aY,
                      {
                          option: e,
                          position: t + 1,
                          disabled: r,
                          selected: u ? l.includes(e.id) : void 0,
                          onPick: s,
                          reachable: i,
                      },
                      e.id,
                  ),
              ),
          });
}
let aZ = [],
    a0 = [];
function a1(e) {
    let {
            projectId: t,
            question: n,
            draft: l,
            selected: r,
            direction: i,
            disabled: s,
            ownImage: o,
            ownSelected: u,
        } = e,
        c = "" === l.trim() ? null : l,
        d = !0 === n.multi_select;
    return (0, a.jsxs)("div", {
        className: X()(aP.Ge, aP.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aP.aK,
                      children: A.intl.string(N.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(aQ, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aS(o, u),
            }),
            aC(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aP.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aP.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(ap.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: X()(aP.Pu, aP.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a2(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [h, p] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(0),
        [w, C] = i.useState(null),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(!1),
        T = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        z = null == r,
        F = l.questions.length,
        O = Math.min(y, F - 1),
        q = l.questions[O],
        [U, G] = i.useState({ id: q.id, expanded: !1 }),
        B = U.id === q.id && U.expanded,
        [K, V] = i.useState(null),
        H = c[q.id] ?? "",
        W = !0 === q.multi_select,
        J = aC(q),
        Y = W ? (m[q.id] ?? aZ) : ((t = o[q.id]), t?.kind === "option" ? [t.optionId] : aN),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = A.intl.string(N.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                m = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                f = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            f = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return aS(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function x(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let v = t[d];
                        function j(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, g.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === v ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: x(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, g.Vm)(e, h.attachment.id).catch(() => void 0),
                                    r((e) => {
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }),
                                    u((e) => ({ ...e, [d]: !1 })),
                                    n((e) => {
                                        if (e[d]?.kind !== "image") return e;
                                        let { [d]: t, ...n } = e;
                                        return n;
                                    }));
                            },
                            onUpload: (e) => {
                                (p({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? p({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : j({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: A.intl.string(N.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, g.gm)(e, t).then(
                                    (e) => (j({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : A.intl.string(N.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, m, n, a],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, o, u),
        ee = Z.imageFor(q.id),
        el = Z.selectedFor(q),
        { text: er, phase: ea } = (0, e$.Q)(q.question),
        ei = er === q.question,
        es = ei && K?.id === q.id && K.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            V((t) => (t?.id === q.id && t.truncated === e ? t : { id: q.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, q.id, B]);
    let eo = A.intl.string(B ? A.t.iTcuma : A.t.dcl9MQ),
        eu = i.useCallback(
            (e) => {
                var t;
                if (null == r) return;
                let a = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== a) {
                    let i;
                    ((t = () => {
                        let t;
                        return r(
                            a,
                            (t = l.questions.flatMap((t) => {
                                let n = e[t.id];
                                if (null == n || "" === n.text.trim()) return [];
                                let l = "option" === n.kind ? [n.optionId] : "multi" === n.kind ? n.optionIds : [],
                                    r =
                                        "custom" === n.kind
                                            ? n.text.trim()
                                            : "multi" === n.kind || "entities" === n.kind
                                              ? n.custom
                                              : void 0,
                                    a = "entities" === n.kind ? n.entities : [],
                                    i = "entities" === n.kind && a.length > 0 ? n.guildId : void 0,
                                    s = "image" === n.kind || "multi" === n.kind ? n.attachment : void 0;
                                return [
                                    {
                                        question_id: t.id,
                                        option_ids: l,
                                        ...(null != r && "" !== r ? { custom: r } : {}),
                                        ...(null != s ? { attachment_id: s.id } : {}),
                                        ...(a.length > 0 ? { entities: a } : {}),
                                        ...(null != i ? { guild_id: i } : {}),
                                    },
                                ];
                            })).length > 0
                                ? { clarification_id: l.id, answers: t }
                                : null,
                            l.questions.flatMap((t) => {
                                let n = e[t.id];
                                return null == n || "" === n.text.trim()
                                    ? []
                                    : "image" === n.kind || ("multi" === n.kind && null != n.attachment)
                                      ? [n.attachment]
                                      : [];
                            }),
                        );
                    }),
                        0 ===
                        (i = l.questions.flatMap((t) => {
                            let n = e[t.id];
                            return !0 === t.link && n?.kind === "entities" ? n.entities.map((e) => e.id) : [];
                        })).length
                            ? t()
                            : Promise.allSettled(i.map((e) => aA(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ec = i.useCallback(
            (e, t) => {
                D.current += 1;
                let n = D.current;
                (C({ direction: t, moves: n }),
                    E({ question: q, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    P(!0),
                    k(e));
            },
            [H, ee, el, q, Y],
        ),
        ed = i.useCallback(() => {
            let e = T.current,
                t = $.current;
            null != e && null != t && M({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = T.current,
            t = $.current;
        if (null == e || null == t) return;
        ed();
        let n = new ResizeObserver(ed);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ed]);
    let em = w?.moves;
    i.useEffect(() => {
        if (null == em) return;
        let e = setTimeout(() => E(null), 400),
            t = setTimeout(() => P(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [em]);
    let ef = i.useCallback(
            (e) => {
                if (z) return;
                let t = { ...o, [q.id]: e };
                u(t);
                let n =
                    O < l.questions.length - 1
                        ? O + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, O);
                null == n ? eu(t) : ec(n, n < O ? "back" : "forward");
            },
            [o, l, z, O, q.id, eu, ec],
        ),
        ep = i.useCallback(() => {
            z || 0 === O || ec(O - 1, "back");
        }, [z, O, ec]),
        eg = O > 0 && !z,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [q.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                J ? z || u((e) => ({ ...e, [q.id]: t })) : ef(t);
            },
            [z, J, q.id, ef],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return W
                ? ((e = ev(q)),
                  (t = H.trim()),
                  (n = q.options.filter((e) => Y.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Y,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [H, W, ev, q, Y]),
        eb = h[q.id] ?? a0,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != q.input
                ? ((e = q.input),
                  (t = x[q.id]),
                  (n = H.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(ab[e]) ? t.name : `${ab[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, q.id, q.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [q.id]: e })), v((e) => ({ ...e, [q.id]: t })));
            },
            [q.id],
        ),
        ew = i.useCallback(() => b(!0), []),
        eC = i.useCallback(() => b(!1), []),
        eN = Z.controlsFor(q, z),
        eA = i.useCallback(() => {
            if (null != ey) {
                "" !== ey.text && ef(ey);
                return;
            }
            if (null != ej) {
                "" !== ej.text && ef(ej);
                return;
            }
            let e = H.trim();
            "" !== e && ef({ kind: "custom", text: e });
        }, [H, ej, ey, ef]),
        [eS, eE] = i.useState(!1),
        [eI, eM] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eE(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let e_ = i.useCallback(() => {
            null != s && (eM(!0), setTimeout(s, 150));
        }, [s]),
        eT = i.useMemo(
            () =>
                null != ey
                    ? "" !== ey.text
                        ? ey
                        : null
                    : null != ej
                      ? "" !== ej.text
                          ? ej
                          : null
                      : "" !== H.trim()
                        ? { kind: "custom", text: H.trim() }
                        : (o[q.id] ?? null),
            [o, H, ej, ey, q.id],
        ),
        eL = null != eT && !z,
        eD = O === F - 1,
        ez = i.useCallback(() => {
            null == eT || z || ef(eT);
        }, [z, eT, ef]),
        eF = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, lO.vq)(e.target, HTMLTextAreaElement) ||
                    (0, lO.vq)(e.target, HTMLInputElement) ||
                    ((!(0, lO.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eg
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), ez())));
            },
            [eg, eL, ep, ez],
        ),
        eO = J
            ? null
            : (0, a.jsxs)("div", {
                  className: aP.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aP.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(ap.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lU.y, {
                          value: H,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [q.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eA());
                          },
                          placeholder: A.intl.string(av(q) ? N.default.yLN1x6 : N.default["tOC+tn"]),
                          "aria-label": A.intl.formatToPlainString(N.default["4JeYPB"], { question: q.question }),
                          disabled: z,
                          rows: 1,
                          className: aP.Pu,
                          "data-conjure-clarification-other": q.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: X()(aP.$O, { [aP.fI]: eS && !eI, [aP.Oh]: eI }),
        role: "dialog",
        "aria-label": q.question,
        "data-conjure-clarification": l.id,
        "data-state": z ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !_ ? "true" : void 0,
        "data-step": O,
        tabIndex: -1,
        onKeyDown: eF,
        children: [
            (0, a.jsxs)("div", {
                className: aP.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: T,
                        className: aP.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${q.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: X()(ad.TK, aP.R_, { [aP.TB]: "exit" === ea, [aP.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: ad.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tn.K, {
                                              icon: B ? eP.t : lp.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: q.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${q.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(eh.D, {
                                      className: X()(ad.gb, ad.Q7),
                                      onClick: e_,
                                      "aria-label": A.intl.string(N.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(en.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: aP.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: aP.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: aP.Ge,
                                    role: "group",
                                    "aria-labelledby": `${q.id}-label`,
                                    "data-direction": w?.direction,
                                    "data-parity": null == w ? void 0 : w.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aP.aK,
                                                  children: A.intl.string(N.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(aQ, {
                                            projectId: n,
                                            question: q,
                                            selected: Y,
                                            disabled: z,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [q.id]:
                                                                  ((n = t[q.id] ?? aZ),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  q.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eN,
                                        }),
                                        null != q.input
                                            ? (0, a.jsx)(az, {
                                                  projectId: n,
                                                  question: q,
                                                  value: eb,
                                                  disabled: z,
                                                  onChange: ek,
                                                  onFocus: ew,
                                                  onBlur: eC,
                                                  fallback: !1 === q.allow_custom ? eO : null,
                                              })
                                            : null,
                                        !1 === q.allow_custom ? null : eO,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          a1,
                                          {
                                              projectId: n,
                                              question: S.question,
                                              draft: S.draft,
                                              selected: S.selected,
                                              ownImage: S.ownImage,
                                              ownSelected: S.ownSelected,
                                              direction: S.direction,
                                              disabled: z,
                                          },
                                          S.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            F > 1 || W || J || null != q.input || av(q)
                ? (0, a.jsxs)("div", {
                      className: ad.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  F > 1
                                      ? A.intl.formatToPlainString(N.default.yzYUjq, { index: O + 1, total: F })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: ad.zt,
                              children: [
                                  eg
                                      ? (0, a.jsx)(ag.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(N.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(eD ? A.t.geKm7t : N.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: ez,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eD ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var a3 = n(557744),
    a5 = n(223347),
    a4 = n(894443),
    a6 = n(525530);
function a7(e, t) {
    return (
        null != t &&
        (e.keys ?? []).some((e) => {
            let n = t.schema.find((t) => t.key === e);
            if (null == n) return !1;
            if ("secret" === n.type) return t.secrets.find((t) => t.name === e)?.set !== !0;
            let l = t.values[e];
            return null == l || "" === l;
        })
    );
}
var a8 = n(572253),
    a9 = n(411236);
function ie(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : A.intl.string(N.default.XuOf5s);
    return (0, a.jsx)(a8.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(et.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: A.intl.string(N.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: a9.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: A.intl.string(N.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: a9.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: X()(ad.nd, ad.jx),
                      "aria-label": A.intl.string(N.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: ad.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: ad.TK,
                                      children: A.intl.string(N.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: X()(ad.gb, ad.Q7),
                                      onClick: l,
                                      "aria-label": A.intl.string(N.default["iq+Pte"]),
                                      children: (0, a.jsx)(en.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: a9.DQ,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: ad.qr,
                              children: (0, a.jsx)("div", { className: ad.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var it = n(874421),
    il = n(932111),
    ir = n(404373),
    ia = n(435558),
    ii = n.n(ia);
let is = "ConjureComposerDrafts";
function io() {
    return tV.w.get(is) ?? {};
}
let iu = new Map(),
    ic = ii().throttle(() => {
        if (0 === iu.size) return;
        let e = io();
        for (let [t, n] of iu) "" === n ? delete e[t] : (e[t] = n);
        (iu.clear(), tV.w.set(is, e));
    }, 1e3);
class id extends o.Ay.Store {
    getDraft(e) {
        let t = iu.get(e);
        return null != t ? t : (io()[e] ?? "");
    }
}
let im = new id(lB.h, {
    LOGOUT: function () {
        return (iu.clear(), ic.cancel(), tV.w.remove(is), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (iu.set(t, n), ic(), "" === n && ic.flush(), !1);
    },
});
function ih(e) {
    return "" !== im.getDraft(e).trim();
}
var ip = n(29080);
function ig(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, rX.B4)(r),
        c = u.filter((e) => "message" === e.type).at(-1),
        d =
            !i &&
            null != c &&
            ((t = c.content),
            (n = t.trim()),
            (l = a.trim()),
            "" !== n && "" !== l && (n === l || (t.length >= 16e3 && l.startsWith(n))))
                ? c
                : null,
        m = u.filter((e) => e !== d),
        f = m.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: m,
        lastStreamedMessage: f,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, rX.Lf)(r) }),
    };
}
var ix = n(520521),
    iv = n(216306),
    ij = n(60160),
    ib = n(16634),
    iy = n(651438);
function ik(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, rX.SY)(n.steps),
        d = u ? (0, iy.Q)(n) : (0, iv.R)(o),
        m = u ? c : void 0,
        f =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: ar.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            ib.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === c },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: ar.iq,
                                      children: (0, a.jsx)(ij.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r0.A, {
        glyph: (0, a.jsx)(r1.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, iv.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ar.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
var iw = n(998445),
    iC = n(643210),
    iN = n(648127),
    iA = n(372795),
    iS = n(163897);
let iE = "conjure-browser-viewer";
function iI(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iC.A],
            () =>
                n.flatMap((e) => {
                    let n = iC.A.getTab(t, e);
                    return null == n ? [] : [n];
                }),
            [t, n],
        );
    if (0 === l.length) return null;
    let r = l.map((e) => {
        let { session: t } = e;
        return t.id;
    });
    return (0, a.jsx)("ul", {
        className: iS.kR,
        "aria-label": A.intl.string(N.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iM, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iM(e) {
    let { projectId: t, tab: l, sessionIds: r } = e,
        [s, o] = (function () {
            let [e, t] = i.useState(null),
                [n, l] = i.useState(!1);
            return (
                i.useEffect(() => {
                    if (null == e) return;
                    let t = new IntersectionObserver(
                        (e) => {
                            let [t] = e;
                            return l(t?.isIntersecting ?? !1);
                        },
                        { rootMargin: "200px" },
                    );
                    return (t.observe(e), () => t.disconnect());
                }, [e]),
                [t, n]
            );
        })(),
        u = (0, tv.useHasModalOpen)(iE),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, iN.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: X()(iS.Nr, f && iS.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tv.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iE },
                )
            );
        },
        "aria-label": A.intl.formatToPlainString(N.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: iS.Gt,
                children: [
                    (0, a.jsx)(iA.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iS.Ji,
                        "aria-label": A.intl.formatToPlainString(N.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iS.qf,
                              children: (0, a.jsx)(iw.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iS.HS,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: A.intl.string(N.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iS.pG,
                children: [
                    (0, a.jsx)("span", { className: X()(iS.W9, f && iS.oM) }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: h,
                    }),
                ],
            }),
        ],
    });
}
var i_ = n(268409);
let iP = new WeakMap(),
    iT = new WeakMap();
function iR(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        s = i.useMemo(
            () =>
                (function (e, t) {
                    let n = new Map();
                    for (let t of [...e.steps, ...e.tasks.flatMap((e) => e.steps)])
                        for (let e of t.browserSessions) n.has(e) || n.set(e, t.segment);
                    return [...n]
                        .filter((e) => {
                            let [, n] = e;
                            return null == t || n === t;
                        })
                        .map((e) => {
                            let [t] = e;
                            return t;
                        });
                })(l, r),
            [l, r],
        ),
        u = (0, o.yK)(
            [e0.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iP.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iT.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iT.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iP.set(e, n), n);
                })(e0.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: i_.h, children: (0, a.jsx)(iI, { projectId: t, sessionIds: u }) });
}
var iL = n(469393);
function i$(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n2.lG)(t.authored_at);
    return (0, a.jsx)(r3, {
        title: A.intl.string(N.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iL.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iL.z,
                    children: [
                        (0, a.jsx)(Q.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(et.$, {
                          variant: "secondary",
                          size: "sm",
                          text: A.intl.string(N.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iD = n(155718);
function iz(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iF = ["command", "user_command", "message_command", "message"],
    iO = new Set([iD.kc.CHAT, iD.kc.USER, iD.kc.MESSAGE]);
function iq(e) {
    return e.type ?? iD.kc.CHAT;
}
function iU(e) {
    return iO.has(iq(e));
}
function iG(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iB(e, t) {
    let n = iF.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iG(e)), ...n.filter(iG)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iG(r) || l.push(r);
    }
    return iF.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function iK(e, t, n) {
    let l = e.bot?.example_exchanges ?? [],
        r = { kind: "event", user: "", bot: n.event };
    if ("events" === t) {
        let e = l.slice(0, 3).map((e) => {
            let { bot: t } = e;
            return "" !== t.trim() ? { ...r, bot: t } : r;
        });
        return e.length > 0 ? e : [r];
    }
    let a = l.flatMap((e) => {
            let { user: n, bot: l } = e;
            return "" === n.trim()
                ? []
                : [
                      {
                          kind: "messages" !== t && n.trimStart().startsWith("/") ? "command" : "message",
                          user: n,
                          bot: l,
                      },
                  ];
        }),
        i = { kind: "message", user: n.message, bot: n.reply };
    if ("messages" === t && 0 === a.length) return [i];
    let s = e.commands.filter(iU).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (iq(e)) {
                    case iD.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case iD.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(iG),
        u = a.length > 0 ? iB([...a, ...o], !0) : iB("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var iV = n(377941),
    iH = n.n(iV);
function iW(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function iX(e) {
    return e.type === iD.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === iD.kc.USER || e.type === iD.kc.MESSAGE
          ? ""
          : "/";
}
let iJ = {
        [n7.q7.APP_CHANNEL]: N.default["3/aHX6"],
        [n7.q7.VOICE_CHANNEL]: N.default["3/aHX6"],
        [n7.q7.ACTIVITY]: N.default["3/aHX6"],
        [n7.q7.OVERLAY]: N.default["rPpf5/"],
        [n7.q7.PROFILE_WIDGET]: null,
        [n7.q7.AUTOMOD]: null,
        [n7.q7.BOT]: null,
        [n7.q7.APPLICATION_COMMANDS]: null,
    },
    iY = [n7.q7.ACTIVITY, n7.q7.APP_CHANNEL, n7.q7.VOICE_CHANNEL, n7.q7.OVERLAY];
function iQ(e) {
    return iY.find((t) => iz(e, t)) ?? null;
}
var iZ = n(176999),
    i0 = (((l = {}).IMAGE = "image"), l),
    i1 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i2 = n(598748),
    i3 = n(773669);
let i5 = [],
    i4 = {},
    i6 = {};
function i7(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function i8(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i0.IMAGE,
        visibility: i1.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var i9 = n(127258),
    se = n(803306),
    st = n(320095),
    sn = n(963852),
    sl = n(95701),
    sr = n(889227);
let sa = new sl.nA({ id: "1337", guild_id: "1337", type: eX.rbe.GUILD_TEXT, name: "preview" });
function si(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eQ.default], () => eQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, se.nj)(new sr.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let ss = /^@\S+/;
var so = n(97808),
    su = n(778712),
    sc = n(486020),
    sd = n(46054),
    sm = n(200700);
let sf = {
        alert: { label: () => A.intl.string(N.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => A.intl.string(N.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => A.intl.string(N.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => A.intl.string(N.default.RGzFNK), blockedStyle: !1 },
    },
    sh = {
        blocked: { label: () => A.intl.string(N.default.YdnZ8q), tone: "red" },
        alert: { label: () => A.intl.string(N.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => A.intl.string(N.default.RGzFNK), tone: "green" },
    },
    sp = ["blocked", "alert", "allowed"],
    sg = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sx(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : A.intl.formatToPlainString(A.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sm.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? A.intl.formatToPlainString(A.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? A.intl.formatToPlainString(A.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? A.intl.formatToPlainString(A.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? A.intl.formatToPlainString(A.t.opVZ9q, { mins: n / 60 })
                                      : A.intl.formatToPlainString(A.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var sv = n(984097),
    sj = n(13673);
let sb = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sy(e) {
    let { example: t } = e,
        n = sx(t);
    return null == n
        ? null
        : (0, a.jsx)(Q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let sk = ["glazedgamer", "sprinkles", "donutking"];
function sw(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sf[n.outcome];
    return (0, a.jsxs)("li", {
        className: X()(sv.nM, { [X()(sv.HV, sj.DX)]: s }),
        children: [
            (0, a.jsx)(eV.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sv.my,
                children: (0, a.jsx)(so.eu, {
                    src: (0, sc.AE)(void 0, void 0),
                    size: su._3.SIZE_24,
                    "aria-label": A.intl.string(N.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sv.fw,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sd.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sy, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sC(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sh[t.section],
        s = new Set(t.examples.map(sx)),
        o = 1 === s.size ? t.examples.map(sx)[0] : null;
    return (0, a.jsxs)("div", {
        className: sv.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sv.RZ,
                children: [
                    (0, a.jsx)(Q.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sb[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: sv.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      children: o,
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, a.jsx)("ul", {
                className: sv.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sw, { example: e, username: sk[(n + t) % sk.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sN(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            sp
                .map((e) => ({ section: e, examples: t.filter((t) => sg[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sv.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sv.hk,
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    sC,
                    {
                        group: e,
                        firstIndex: l.slice(0, t).reduce((e, t) => {
                            let { examples: n } = t;
                            return e + n.length;
                        }, 0),
                    },
                    e.section,
                ),
            ),
        ],
    });
}
var sA = n(276293),
    sS = n(460905),
    sE = n(110384),
    sI = n(633018),
    sM = n(763754),
    s_ = n(217424),
    sP = n(194085),
    sT = n(20851),
    sR = n(692508),
    sL = n(798819);
function s$(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: X()(sL.item, sL.labelContainer, sL.colorDefault, {
            [sL.focused]: !0 === t.highlighted,
            [sL.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sL.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sL.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: X()(sL.label, sR.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sL.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sL.icon }),
                  })
                : null,
        ],
    });
}
function sD(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: X()(t, sR.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: A.intl.string(A.t["5IEsGx"]), icon: sE.W, muted: !0 }
                : { label: A.intl.string(A.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: X()(sL.menu, sR.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sL.scroller,
            children: [
                (0, a.jsx)(s$, { item: s }),
                (0, a.jsx)("div", { className: sL.separator }),
                (0, a.jsx)(s$, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var sz = n(381941);
function sF() {}
function sO(e) {
    let t,
        n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        f,
        h,
        { projectId: p, exchanges: g } = e,
        {
            items: x,
            botIcon: v,
            appIconSrc: j,
        } = ((t = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser())),
        (n = (0, o.bG)([B.Ay], () => B.Ay.getProject(p))),
        (l = n?.application_id),
        (r = (0, o.bG)([tw.A], () => tw.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? A.intl.string(N.default.JEYq8M)),
        (u = (0, o.bG)([eQ.default], () => (null != l ? eQ.default.getUser(l) : void 0), [l])),
        (d = si("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = si("31338", A.intl.string(N.default["9iAOsw"]), { discriminator: "0003" })),
        (h = si("31339", (0, eZ.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == h || null == m || null == f
                        ? []
                        : (function (e, t, n) {
                              var l, r, a;
                              let { bot: i, currentUser: s, viewer: o, member: u } = t,
                                  c = [];
                              function d(e, t) {
                                  let {
                                          interactionName: n,
                                          messageType: l,
                                          menu: r,
                                      } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                      a = String(c.length + 1),
                                      i = (0, st.rh)({
                                          ...(0, sn.Ay)({
                                              channelId: sa.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eX.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eX.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: i9.G.APPLICATION_COMMAND,
                                                        user: (0, sn.Vi)(s),
                                                    },
                                                }
                                              : {}),
                                      });
                                  c.push({ key: a, record: i, isCommandReply: null != n, menu: r });
                              }
                              for (let t of e)
                                  switch (t.kind) {
                                      case "command":
                                          d(t.bot, i, {
                                              interactionName: t.user.trim().replace(/^\//, "").split(/\s+/)[0] ?? "",
                                              messageType: eX.lAJ.CHAT_INPUT_COMMAND,
                                          });
                                          break;
                                      case "user_command":
                                      case "message_command": {
                                          let e = "user_command" === t.kind;
                                          (d(e ? n.memberMessage : n.targetMessage, e ? u : s, {
                                              menu: { target: e ? "user" : "message", commandName: t.user },
                                          }),
                                              d(t.bot, i, {
                                                  interactionName: t.user,
                                                  messageType: eX.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(ss, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              g,
                              { bot: m, currentUser: t, viewer: h, member: f },
                              {
                                  targetMessage: A.intl.string(N.default["y+QYes"]),
                                  memberMessage: A.intl.string(N.default.BUTRDc),
                              },
                          ),
                [g, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = sa.name;
    return (0, a.jsxs)("div", {
        className: sR.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sR.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sA.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: X()(sR.TE, `group-spacing-${sz.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sR.Rz : void 0,
                            children: [
                                (0, a.jsx)(sT.A, {
                                    message: n,
                                    channel: sa,
                                    author: (0, sM.FT)(n.author, sa),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(s_.A, { message: n, channel: sa }) : void 0,
                                    usernameClassName: r?.target === "user" ? sR.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sR.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sP.Ay, {
                                              children: [
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t.lfIHs4),
                                                      icon: sS.n,
                                                      onClick: sF,
                                                  }),
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t["5IEsGx"]),
                                                      icon: sE.W,
                                                      onClick: sF,
                                                  }),
                                                  (0, a.jsx)(sP.qv, {
                                                      label: A.intl.string(A.t["UKOtz+"]),
                                                      icon: tl.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sF,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sR.ET : sR.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sD, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: j,
                                          }),
                                      })
                                    : null,
                            ],
                        },
                        t,
                    );
                }),
            }),
            (0, a.jsxs)("div", {
                className: sR.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sI.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: A.intl.formatToPlainString(A.t["8lzR/R"], { channel: `#${b}` }),
                    }),
                ],
            }),
        ],
    });
}
var sq = n(332173);
function sU(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sq.A, { children: ["/", t] });
}
function sG(e) {
    let { text: t, commandNames: n } = e,
        l = (function (e, t) {
            if (null == t) return null;
            let n = [],
                l = 0;
            for (let r of e.matchAll(t)) {
                let t = (r.index ?? 0) + r[1].length;
                (t > l && n.push({ kind: "text", text: e.slice(l, t), start: l }),
                    n.push({ kind: "command", name: r[2], start: t }),
                    (l = t + 1 + r[2].length));
            }
            return 0 === n.length ? null : (l < e.length && n.push({ kind: "text", text: e.slice(l), start: l }), n);
        })(
            t,
            i.useMemo(
                () =>
                    (function (e) {
                        if (0 === e.length) return null;
                        let t = [...e].sort((e, t) => t.length - e.length).map(iH());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sU, { name: e.name }, e.start) : e.text));
}
n(827669);
var sB = n(687966),
    sK = n(757789),
    sV = n(26137),
    sH = n(430392),
    sW = n(231483),
    sX = n(323384);
let sJ = {
    frame: N.default.Z2bt4u,
    overlay_widget: N.default["0mGHfU"],
    user_widget: N.default.Jipr29,
    bot: N.default.EbvC13,
    commands: N.default.EbvC13,
    automod: N.default.tiMvei,
};
var sY = n(573634);
let sQ = {
    frame: sB.GameControllerIcon,
    overlay_widget: sK.V,
    user_widget: sV.r,
    bot: sH.RobotIcon,
    commands: sH.RobotIcon,
    automod: sW.ShieldIcon,
};
function sZ(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: X()(sY.e7, l),
        children: [(0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function s0(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: sY.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: sY.jw,
                    children: (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        tag: "span",
                        children: e,
                    }),
                },
                e,
            ),
        ),
    });
}
function s1(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: sY.lj,
        children: [
            (0, a.jsx)("span", {
                className: X()(sY.Vo, sY.G),
                children: (0, a.jsx)(sX.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: sY.aV,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function s2(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: sY.wZ,
        children: t.map((e, t) => {
            let n = iX(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(sU, { name: e.name })
                                : (0, a.jsx)(sq.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function s3(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: sY.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: sY.Aw,
                    children: (0, a.jsx)(Q.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(sG, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function s5(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? sX.k : sQ[t.kind],
        u = A.intl.string(s ? N.default.BM4Ymz : sJ[t.kind]);
    return (0, a.jsxs)("section", {
        className: sY.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: sY.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: sY.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: sY.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(sG, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(s3, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: sY.PG, children: r }) : null,
        ],
    });
}
function s4(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: sY.aN,
        children: [
            (0, a.jsxs)("div", {
                className: sY.Lv,
                children: [(0, a.jsx)(ew.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
            }),
            ((t = o.experiences ?? []),
            (n = t
                .filter((e) => {
                    let { kind: t } = e;
                    return "commands" === t;
                })
                .flatMap((e) => {
                    let { changes: t } = e;
                    return t.filter(
                        (e) =>
                            !(function (e, t) {
                                if (0 === t.length) return !1;
                                let n = t.map(iH()).join("|");
                                return RegExp(`(?<![\\p{L}\\p{N}/.:])/(?:${n})(?![\\p{L}\\p{N}_-])`, "iu").test(e);
                            })(e, c),
                    );
                })),
            (l = t.find((e) => {
                let { kind: t } = e;
                return "bot" === t;
            })),
            t.flatMap((e) =>
                "commands" === e.kind
                    ? null != l
                        ? []
                        : [{ experience: e, bullets: n }]
                    : e === l
                      ? [{ experience: e, bullets: [...e.changes, ...n] }]
                      : [{ experience: e, bullets: e.changes }],
            )).map((e) => {
                let { experience: t, bullets: n } = e;
                return (0, a.jsxs)(
                    i.Fragment,
                    {
                        children: [
                            (0, a.jsx)("div", { className: sY.yF, role: "separator" }),
                            (0, a.jsx)(s5, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = A.intl.string(N.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(n7.q7.APP_CHANNEL)) {
                                                    let r = e.app_channel_names ?? [];
                                                    l = (
                                                        null != t.app_channels && t.app_channels.length > 0
                                                            ? t.app_channels
                                                            : r.length > 0
                                                              ? r.map((e) => ({ name: e }))
                                                              : [
                                                                    {
                                                                        name: t.name
                                                                            .toLowerCase()
                                                                            .replace(/[^\p{L}\p{N}]+/gu, "-")
                                                                            .replace(/^-+|-+$/g, ""),
                                                                    },
                                                                ]
                                                    ).map((e) => {
                                                        let { name: t, description: l } = e,
                                                            r = l?.trim() ?? "";
                                                        return { name: t, description: "" !== r ? r : n };
                                                    });
                                                }
                                                return {
                                                    channels: l,
                                                    launchableAnywhere: t.surfaces.includes(n7.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(n7.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        sZ,
                                                        {
                                                            className: sY.Iw,
                                                            caption: A.intl.formatToPlainString(N.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: sY.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        s1,
                                                                        { name: t, description: n },
                                                                        t,
                                                                    );
                                                                }),
                                                            }),
                                                        },
                                                        "channels",
                                                    ),
                                                );
                                            let r = [
                                                ...(n.usableInVoice ? [A.intl.string(N.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [A.intl.string(N.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            sZ,
                                                            {
                                                                caption: A.intl.string(N.default.MY6UGJ),
                                                                children: (0, a.jsx)(s0, { labels: r }),
                                                            },
                                                            "features",
                                                        ),
                                                    ),
                                                l
                                            );
                                        case "bot":
                                        case "commands":
                                            return [
                                                ...(0 === e.commands.length
                                                    ? []
                                                    : [
                                                          (0, a.jsx)(
                                                              sZ,
                                                              {
                                                                  caption: A.intl.string(A.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(s2, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: N.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: N.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [{ key: t, caption: A.intl.string(n), labels: l.map(iW) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            sZ,
                                                            { caption: n, children: (0, a.jsx)(s0, { labels: l }) },
                                                            t,
                                                        );
                                                    }),
                                            ];
                                        default:
                                            return [];
                                    }
                                })(o, t),
                                commandNames: c,
                            }),
                        ],
                    },
                    t.id,
                );
            }),
        ],
    });
}
var s6 = n(633075),
    s7 = n(946356),
    s8 = n(58216),
    s9 = n(27399);
function oe(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        r = i.useMemo(() => new s6.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: s9.H,
              children: (0, a.jsx)(s7.A.Overlay, {
                  className: s9.w,
                  children: (0, a.jsx)(s8.A, {
                      user: l,
                      widget: r,
                      allowEditing: !1,
                      disableInteraction: !0,
                      interactiveLinks: !0,
                      disableCTA: !0,
                      rendererProps: n,
                  }),
              }),
          });
}
var ot = n(443863);
function on(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = aK(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, aB.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "ConjureChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(eh.D, {
              className: ot.xX,
              onClick: c,
              "aria-label": A.intl.string(N.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: ot.sN, onError: u }) : null,
          });
}
function ol(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = iz(c, n7.q7.APPLICATION_COMMANDS)),
            (l =
                iz(c, n7.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(iU)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : iK(c, l, {
                              message: A.intl.string(N.default.J7qggf),
                              reply: A.intl.string(N.default.nqYtiy),
                              event: A.intl.string(N.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = i6 } = t,
                r = (0, o.bG)([i3.default], () => i3.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(i4);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, g.PK)(e, l.id).then(
                                            (e) => [n, e],
                                            () => null,
                                        );
                                    }),
                                ).then(
                                    (e) => {
                                        r || l(Object.fromEntries(e.filter((e) => null != e)));
                                    },
                                    () => {},
                                ),
                                () => {
                                    r = !0;
                                }
                            );
                        }, [e, t]),
                        n
                    );
                })(e, l.images),
                u = i.useMemo(
                    () =>
                        null == n
                            ? null
                            : (function (e, t, n, l) {
                                  let r = {};
                                  for (let [t, n] of Object.entries(e.surfaces))
                                      null != n &&
                                          (r[t] = (function (e) {
                                              let t = {};
                                              for (let [n, l] of Object.entries(e.components)) {
                                                  let e = {};
                                                  for (let [t, n] of Object.entries(l.fields))
                                                      e[t] = {
                                                          ...i7(n),
                                                          ...(null != n.fallback ? { fallback: i7(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = iZ.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[i2.m.WIDGET_TOP] || null == i[i2.m.WIDGET_BOTTOM]
                                      ? null
                                      : {
                                            locale: l,
                                            surfaceConfigs: i,
                                            isLoading: !1,
                                            hasIdentity: !0,
                                            resolutionContext: {
                                                data: (function (e, t, n) {
                                                    let l = (function (e) {
                                                            let t = new Map();
                                                            for (let n of Object.values(e.surfaces))
                                                                for (let e of Object.values(n?.components ?? {}))
                                                                    for (let n of Object.values(e.fields))
                                                                        "data" !== n.value_type ||
                                                                            t.has(n.value) ||
                                                                            t.set(n.value, n.presentation_type);
                                                            return t;
                                                        })(e),
                                                        r = {};
                                                    for (let [e, a] of Object.entries(t.sample_data ?? {}))
                                                        if ("image" === l.get(e)) {
                                                            let t = n[String(a)];
                                                            null != t &&
                                                                (r[e] = {
                                                                    type: iZ.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: iZ.oG.NUMBER, value: a })
                                                                : (r[e] = { type: iZ.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(i8),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i5,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        x = c.what_changed?.trim() ?? "",
        v =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iX(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = iQ(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(iU)
                    ? iK({ ...c, bot: void 0 }, "commands", {
                          message: A.intl.string(N.default.J7qggf),
                          reply: A.intl.string(N.default.nqYtiy),
                          event: A.intl.string(N.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([B.Ay], () => B.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? A.intl.formatToPlainString(N.default.YZ3qJs, { version: d.version })
                : A.intl.string(N.default["3b6e7o"]),
        w = p ? (0, a.jsx)(r4, { children: A.intl.string(N.default.hF2c41) }) : null;
    return (0, a.jsxs)(r6, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: A.intl.string(N.default.yD8EJS),
        hideLabel: A.intl.string(N.default.nSPGNb),
        bodyClassName: ot.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: ot.Qs,
                children: (0, a.jsx)(s4, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(sG, { text: c.summary, commandNames: v }),
                            }),
                            "" !== x
                                ? (0, a.jsxs)("section", {
                                      className: ot.uW,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: A.intl.string(N.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(sG, { text: x, commandNames: v }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    proposal: c,
                    renderPreview: function (e) {
                        switch (e.kind) {
                            case "frame":
                            case "overlay_widget":
                                let t;
                                return e.id === j && null != c.design_image
                                    ? (0, a.jsx)(on, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: A.intl.string(null == (t = iQ(c)) ? N.default["3/aHX6"] : iJ[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(oe, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sN, { automod: c.automod })
                                    : null;
                            case "commands":
                            case "bot": {
                                let t = (function (e, t, n) {
                                    var l;
                                    let r;
                                    if ("commands" === e.kind) return n;
                                    let a = (e.example_exchanges ?? [])
                                        .filter((e) => {
                                            let { bot: t } = e;
                                            return "" !== t.trim();
                                        })
                                        .slice(0, 3)
                                        .map((e) => {
                                            let { user: t, bot: n } = e,
                                                l = t.trim();
                                            return "" === l
                                                ? { kind: "event", user: "", bot: n }
                                                : { kind: l.startsWith("/") ? "command" : "message", user: l, bot: n };
                                        });
                                    return (
                                        (l = a.length > 0 ? a : t),
                                        (r = l.some((e) => "command" === e.kind || iG(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(sO, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: v,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: ot.qr,
                      children: [
                          (0, a.jsx)(et.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(N.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: A.intl.string(N.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var or = n(289565);
function oa(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: or.m, children: n })
        : (0, a.jsxs)("div", {
              className: or.Z,
              children: [
                  n,
                  (0, a.jsx)(eR.m, {
                      text: A.intl.string(A.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tn.K, {
                          "aria-label": A.intl.string(A.t.WAI6xu),
                          icon: en.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function oi(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function os(e, t) {
    return null != e && oi(t, e.status);
}
let oo = new WeakMap();
function ou(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tx.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tx.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(et.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(tx.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: A.intl.string(N.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(q.Ay, { guild: l, size: q.Ay.Sizes.SMOL }),
                              (0, a.jsx)(Q.E, {
                                  variant: "text-sm/medium",
                                  color: "text-default",
                                  lineClamp: 1,
                                  children: (function (e) {
                                      let t = Array.from(e);
                                      if (t.length <= 24) return e;
                                      let n = t.slice(0, 23).join("");
                                      return `${n.trimEnd()}\u{2026}`;
                                  })(l.name),
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
}
function oc(e) {
    let { projectId: t, cta: n } = e,
        l = (0, td.Ay)(t);
    return null != l && os(l, n)
        ? (0, a.jsx)(oa, {
              children: (0, a.jsxs)(tx.B, {
                  gap: 8,
                  align: "start",
                  children: [
                      "new_ui" === n.reason
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: A.intl.string(N.default["9ZqzLo"]),
                            })
                          : null,
                      (0, a.jsx)(ou, { publish: l }),
                      "new_ui" !== n.reason
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(N.default.SifbJM),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var od = n(303345),
    om = n(44255),
    of = n(416473),
    oh = n(289830);
function op(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [B.Ay],
                    () => {
                        let t = B.Ay.getProject(e);
                        return null != t && (0, B.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, of.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof od.A ? e.message : A.intl.string(N.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? A.intl.formatToPlainString(N.default.orZDqY, { time: (0, om.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, om.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(r3, {
        title: A.intl.string(N.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: oh.r,
            children: [
                (0, a.jsxs)("div", {
                    className: oh.z,
                    children: [
                        (0, a.jsx)(Q.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(N.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: A.intl.string(N.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(et.$, {
                          variant: "secondary",
                          size: "sm",
                          text: A.intl.string(N.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var og = n(989271);
function ox(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: X()(og.nM, { [og.f1]: s, [og.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": A.intl.formatToPlainString(N.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: og.jo,
                children: [
                    n
                        ? (0, a.jsx)(t9.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: og.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: og.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function ov(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(r3, {
        title: A.intl.string(N.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ox,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oj = n(530557),
    ob = n(872162),
    oy = n(628284),
    ok = n(564963),
    ow = n(202723);
function oC(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oj.R })), [r.fields]),
        d = (0, ok.bB)(l, s),
        m = X()(ow.Lo, { [ow.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(Q.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: A.intl.string(N.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: m,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: A.intl.string(N.default.HCQvpO),
                        }),
                        (0, a.jsx)(ob.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: ow.Lo,
                      children: (0, a.jsx)(ob.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: m,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ow.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: ow.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(oy.y, {
                                            size: "xs",
                                            color: ea.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: A.intl.string(N.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(ob.C, { label: A.intl.string(N.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: ow.Lo,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: A.intl.string(null != o ? N.default.O0QIqj : N.default.HCQvpO),
                        }),
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : A.intl.string(N.default.MPGSHL),
                        }),
                        (0, a.jsx)(ob.C, { label: A.intl.string(N.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: ow.sq,
                            children: (0, a.jsx)(et.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: A.intl.string(N.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var oN = n(919790),
    oA = n(183011);
let oS = [],
    oE = new Set();
function oI(e) {
    oE.has(e) ||
        (oE.add(e),
        (0, g.Y7)(e)
            .then((t) => {
                lB.h.dispatch({
                    type: "CONJURE_STORED_ATTACHMENTS_FETCHED",
                    projectId: e,
                    attachments: [...t].reverse(),
                });
            })
            .catch((e) => {
                console.error("[conjure] stored attachment list failed", e);
            })
            .finally(() => oE.delete(e)));
}
var oM = n(514042);
function o_(e) {
    let { projectId: t, file: n, className: l } = e;
    return null != t && null != n && p.XB.has(n.content_type)
        ? (0, a.jsx)(oP, { projectId: t, attachmentId: n.id, className: l })
        : (0, a.jsx)(oM.FileIcon, { size: "xs", color: "currentColor", className: l });
}
function oP(e) {
    let { projectId: t, attachmentId: n, className: l } = e,
        { src: r, gone: i, handleError: s } = aK(t, n);
    return null == r || i
        ? (0, a.jsx)(oM.FileIcon, { size: "xs", color: "currentColor", className: l })
        : (0, a.jsx)("img", { src: r, alt: "", className: l, onError: s });
}
var oT = n(587041);
function oR(e) {
    let t,
        n,
        { attachmentId: l } = e,
        r = i.useContext(il.Fu),
        s =
            ((n = null == (t = (0, o.bG)([oA.A], () => oA.A.getAttachment(l), [l]))),
            i.useEffect(() => {
                !n ||
                    null == r ||
                    oA.A.wasLookedUp(l) ||
                    (lB.h.dispatch({ type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId: l }), oI(r));
            }, [n, r, l]),
            t);
    return (0, a.jsxs)("span", {
        className: oT.P,
        children: [
            (0, a.jsx)(o_, { projectId: r, file: s, className: oT.x }),
            s?.name ?? A.intl.string(N.default.ff9Q4C),
        ],
    });
}
let oL = ii().once(() =>
    sd.A.reactParserFor({
        ...sd.A.defaultRules,
        conjureFile: (0, il.hL)((e, t) => (0, a.jsx)(oR, { attachmentId: e }, t)),
    }),
);
function o$() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return oL()(...t);
}
var oD = n(971824),
    oz = n(162052),
    oF = n(165648);
function oO(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            turnActive: r = l,
            checklistSuperseded: s = !1,
            durationMs: o,
            interrupted: u = !1,
            todos: c,
            provisionalTodo: d,
            segment: m,
            hostsChecklist: f = !0,
            reportsDuration: h = !0,
            closed: p = !1,
            segmentDurationMs: g,
        } = e,
        x = i.useMemo(() => (0, rX.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == m
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === m),
                          tasks: x.tasks.filter((e) => e.task.segment === m),
                      },
            [x, m],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: ar.pj,
            "data-live": !1,
            children: (0, a.jsx)(r0.A, {
                glyph: (0, a.jsx)(ip.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: A.intl.string(N.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, rX.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = (0, ix.n)(k.map((e) => e.taskId)),
        C = !p && (l || k.some((e) => "running" === e.task.status)),
        S = (0, iy.k)(k);
    return (0, a.jsxs)("ol", {
        className: ar.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(rQ.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: p,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? (0, ix.p)(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          ik,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < k.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(iR, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ar.YO,
                      children: (0, a.jsx)(an, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oq(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            planVersion: s,
            ideas: o,
            attachments: u,
            secretRequest: c,
            secretRequestId: d,
            secretRequestAwaiting: m,
            secretRequestStatus: f = "open",
            settingsRequest: h,
            publishCta: p,
            onPickIdea: g,
            pickedIdeaIds: x,
            onApprovePlan: v,
            sideReply: j = !1,
            sideReplyAcknowledges: b,
            hoistedProse: y = !1,
            hoistedAttachmentsHost: k,
            restoreProposal: w,
            onRestoreProposal: C,
            publishScheduleProposal: S,
            publishScheduleProposalCurrent: E = !1,
        } = e,
        I = i.useMemo(
            () => ig({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: M, lastStreamedMessage: _, showsClosingMessage: P, closingContent: T } = I,
        R = (y ? k : void 0) ?? I.attachmentsHost,
        L = P && !y,
        $ = null == u ? null : (0, a.jsx)(oN.A, { projectId: t, attachments: u }),
        D = null == $ ? null : (0, a.jsx)("div", { className: ar.MT, children: $ }),
        z = j
            ? (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return A.intl.string(N.default.Mv5OmK);
                          case "queued":
                              return A.intl.string(N.default["Po/2mi"]);
                          case "restarting":
                              return A.intl.string(N.default.Vj0woh);
                          default:
                              return A.intl.string(N.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ar.ue,
        children: [
            M.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: ar.dO,
                      children: M.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ar.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oF.PT,
                                          children: o$(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === R && e === _ ? D : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(ol, { projectId: t, proposal: r, version: s, onApprove: v })
                : L
                  ? (0, a.jsxs)("div", {
                        className: X()(ar.ky, oz.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: X()(oF.PT, ar.cW),
                                children: o$(T, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === R ? D : null,
                            z,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: X()(ar.ky, oz.XR, { [oD.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(oC, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != h
                ? (0, a.jsx)("div", {
                      className: X()(ar.ky, oz.XR),
                      children: (0, a.jsx)(ie, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== R && ("closing" !== R || L) ? null : $,
            null != p ? (0, a.jsx)(oc, { projectId: t, cta: p }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(ov, { ideas: o, pickedIdeaIds: x, onPick: g }) : null,
            null != w ? (0, a.jsx)(i$, { proposal: w, onRestore: C }) : null,
            null != S ? (0, a.jsx)(op, { projectId: t, proposal: S, current: E }) : null,
            L ? null : z,
        ],
    });
}
var oU = n(146806),
    oG = n(477262),
    oB = n(432017),
    oK = n(475358),
    oV = n(717400),
    oH = n(663341),
    oW = n(559647),
    oX = n(775602),
    oJ = n(655098),
    oY = n(234320),
    oQ = n(191023);
function oZ(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(l4.p, {
        name: A.intl.string(N.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nW.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oQ.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nW.OY,
                    children: (0, a.jsx)(ap.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(Q.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: A.intl.string(N.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: l7.o1,
            onClick: () => {
                nG(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": A.intl.string(N.default.N852dj),
            children: (0, a.jsx)(lG.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function o0(e) {
    let { send: t } = e;
    return (0, a.jsxs)(l4.p, {
        compact: !0,
        name: A.intl.string(N.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: A.intl.string(N.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: l7.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(ag.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: A.intl.string(N.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var o1 = n(901173),
    o2 = n(280450),
    o3 = n(659280),
    o5 = n(351906),
    o4 = n(322915);
function o6(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([o5.A], () => o5.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      o3.Ay.User,
                      {
                          index: t,
                          user: e.user,
                          nick: null,
                          status: null,
                          hidePersonalInformation: u,
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.user.id,
                  )
                : (0, a.jsx)(
                      o3.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(o_, { projectId: n, file: e.file, className: o4.Vk }),
                          selected: t === r,
                          onHover: i,
                          onClick: s,
                      },
                      e.file.id,
                  ),
        ),
        f = l.findIndex((e) => "file" === e.kind),
        h = -1 === f ? m : m.slice(0, f),
        p = -1 === f ? [] : m.slice(f);
    return (0, a.jsx)(o3.Ay, {
        id: t,
        className: o4.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": A.intl.string(N.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(o7, { titleId: c, title: A.intl.string(N.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(o7, { titleId: d, title: A.intl.string(N.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function o7(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(Q.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: o4.Gf, children: n }),
            l,
        ],
    });
}
var o8 = n(719442),
    o9 = n(355622),
    ue = n(408018),
    ut = n(186306),
    un = n(323350),
    ul = n(35277),
    ur = n(820066),
    ua = n(683167),
    ui = n(267102);
let us = (0, sl.createChannelRecord)({ id: "1", type: eX.rbe.DM });
function uo(e) {
    let t = ur.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uu(e) {
    return (0, un.WO)(ur.VW.richValue(e), { mode: "raw" });
}
function uc(e, t) {
    ((e.children = (0, ue.x7)(t)), (e.selection = uo(e)), e.onChange());
}
function ud(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(il.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(oR, { attachmentId: r }), n] });
}
var um = n(497437);
let uf = [
        {
            id: "add-images-videos",
            label: N.default["51+9lc"],
            icon: oG.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: N.default["10ljr2"],
            icon: oB.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: N.default.aotDee, icon: ec.H, accept: "" },
    ],
    uh = "text-md/normal",
    up = null;
function ug(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [h, p] = i.useState(0),
        [g, x] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
    (i.useLayoutEffect(() => {
        let e = u.current,
            t = e?.parentElement;
        if (null == e || null == t) return;
        let n = d.current;
        function l() {
            let e = u.current,
                t = e?.parentElement;
            if (null == e || null == t) return;
            let l = c.current;
            if (null == l) return;
            let r = parseFloat(getComputedStyle(t).columnGap),
                a = Number.isNaN(r) ? 0 : r,
                i = e.offsetWidth,
                s = l.offsetWidth + a;
            (p(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            x({
                frontFrom: 1e3 * (0, oU._R)(m),
                frontTo: 1e3 * (0, oU._R)(h),
                backFrom: 1e3 * (0, oU.T)(m),
                backTo: 1e3 * (0, oU.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [v, j] = i.useState(0),
        [b, y] = i.useState(null),
        k = i.useRef(!1),
        w = i.useCallback(() => {
            (y(k.current ? (n ? "through" : "out") : n ? "in" : null), j((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        k.current = n;
    }, [n, t]);
    let C = "in" === b ? g.backFrom : g.frontFrom,
        S = "out" === b ? g.frontTo : g.backTo,
        E = (0, o.bG)([oX.Ay], () => oX.Ay.useReducedMotion),
        I = t === A.intl.string(N.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: X()(um.VT, { [um.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${C}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - C)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != b ? v % 2 : void 0,
            "data-wipe-kind": l ? (b ?? void 0) : void 0,
            children: (0, a.jsx)(oK.e, { shortcut: "tab", className: um.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: uh,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: X()(um.xM, { [um.s2]: l }),
                onStart: w,
                onComplete: () => s(t),
            }),
            _(um.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: um.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: uh, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: um.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: uh, tag: "span", className: um.xM, children: t }),
                          _(um.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let ux = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                running: l,
                restoring: r = !1,
                onSend: s,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: m,
                suggestion: f,
                questionOpen: h = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(ui.Ay),
                    [n] = i.useState(() => {
                        let n = (0, o8.ie)();
                        return (
                            (n.children = (0, ue.x7)(e)),
                            (n.selection = uo(n)),
                            (0, ua.a)({
                                editor: n,
                                chatInputType: o9.oU.GENERIC_RICH_TEXTAREA,
                                channel: us,
                                windowContext: t,
                                previewMarkdown: !0,
                                updateState: (e, t, n) => {
                                    let { value: l, selection: r } = n;
                                    (void 0 !== l && (e.children = l), null != r && (e.selection = r), e.onChange());
                                },
                            }),
                            (function (e) {
                                let { onChange: t } = e;
                                e.onChange = () => {
                                    let n = [];
                                    for (let [t, l] of ur.VW.nodes(e, { at: [], match: ur.l5.isText }))
                                        for (let e of t.text.matchAll(il.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        ut.o.withMergedEntry(e, () =>
                                            ur.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    ul.b.textToVoid(
                                                        e,
                                                        { type: "hostInlineVoid", raw: t, children: [{ text: "" }] },
                                                        {
                                                            anchor: { path: l, offset: r },
                                                            focus: { path: l, offset: a },
                                                        },
                                                    );
                                            }),
                                        ),
                                        t());
                                };
                            })(n),
                            n
                        );
                    });
                return (i.useLayoutEffect(() => n.onChange(), [n]), n);
            })(im.getDraft(t)),
            [k, w] = i.useState(() => uu(y)),
            C = i.useRef(k),
            [S, E] = i.useState(null),
            I = i.useCallback(() => {
                let e = uu(y);
                e !== C.current &&
                    ((C.current = e),
                    lB.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                E(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !ur.ZF.isCollapsed(t)) return null;
                        let [n] = ur.VW.node(e, t.anchor.path);
                        return ur.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            M = i.useCallback((e) => uc(y, e), [y]),
            _ = "" !== k.trim();
        i.useEffect(() => v?.(_), [_, v]);
        let P = i.useRef(t);
        i.useLayoutEffect(() => {
            P.current !== t && ((P.current = t), uc(y, im.getDraft(t)));
        }, [y, t]);
        let T = (0, o.bG)([oX.Ay], () => oX.Ay.isSubmitButtonEnabled),
            [R, L] = i.useState(!1);
        i.useEffect(() => {
            l || L(!1);
        }, [l]);
        let $ = i.useRef(null),
            {
                drafts: D,
                addFiles: z,
                pasteFiles: F,
                removeDraft: O,
                settled: q,
                takeRefs: U,
            } = l9({ projectId: t, surface: "chat", onUploadFile: c }),
            G = nO.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && nD(n);
            }),
            K = "" !== k.trim() || D.length > 0 || p || G,
            V = n && K && q,
            [H, W] = i.useState(null);
        i.useEffect(() => {
            if (null == H) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => W(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [H]);
        let X = (function (e) {
                let { creator: t, collaborators: n } = e2((0, o.bG)([B.Ay], () => B.Ay.getProject(e), [e])),
                    l = (0, o.bG)([o2.default], () => o2.default.getId());
                return i.useMemo(
                    () => [...(null != t ? [t] : []), ...n].filter((e) => e.id !== l && !e.bot),
                    [t, n, l],
                );
            })(t),
            J = (0, o.bG)([oA.A], () => oA.A.getAttachments(t) ?? oS, [t]),
            [Y, Q] = i.useState(null),
            [Z, ee] = i.useState(0),
            et = i.useMemo(() => (null != S && n ? (0, o1.OG)(S, S.length) : null), [S, n]),
            en = et?.start ?? null;
        i.useEffect(() => {
            null == en ? Q(null) : oI(t);
        }, [en, t]);
        let el = en === Y ? null : et,
            er = i.useMemo(() => (null == el ? [] : (0, o1.l$)(X, J, el.text)), [el, X, J]),
            ea = el?.text;
        i.useEffect(() => ee(0), [ea]);
        let ei = er.length > 0,
            ec = Math.min(Z, Math.max(0, er.length - 1)),
            ed = i.useId(),
            em = i.useCallback(
                (e) => {
                    let t = er[e];
                    null != el &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (ul.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                ul.b.insertText(e, `${n} `));
                        })(y, el.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [er, el, y],
            ),
            ef = i.useCallback(() => {
                if (!V) return;
                let e = U(),
                    n = G
                        ? (function (e) {
                              let t = nU(e);
                              if (null == t || !nD(t)) return null;
                              let n = t.history.present,
                                  l = rF(e);
                              return (
                                  nG(e, (e) => ({ ...e, history: nE, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, x.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rL.set(i, s),
                                          (s.job = (function (e) {
                                              let t = 0,
                                                  n = null,
                                                  l = null,
                                                  r = null,
                                                  a = !1,
                                                  i = !1,
                                                  s = !1;
                                              async function o() {
                                                  if (!(a || i || s)) {
                                                      ((a = !0), e.update("uploading", l));
                                                      try {
                                                          if (((n ??= await e.capture(t++)), null == n))
                                                              throw Error("capture failed");
                                                          if (((l ??= await e.composite(n)), null == l))
                                                              throw Error("composite failed");
                                                          if (
                                                              (null == r || (await e.isStaged(r)) || (r = null),
                                                              s ||
                                                                  (e.update("uploading", l),
                                                                  (r ??= await e.upload(l)),
                                                                  s))
                                                          )
                                                              return;
                                                          if (!e.send(r)) throw Error("send failed");
                                                          ((i = !0), e.update("sent", l));
                                                      } catch {
                                                          s || e.update("failed", l);
                                                      } finally {
                                                          a = !1;
                                                      }
                                                  }
                                              }
                                              function u() {
                                                  o().catch(() => {});
                                              }
                                              return (
                                                  u(),
                                                  {
                                                      retry: u,
                                                      cancel: () => {
                                                          s = !0;
                                                      },
                                                  }
                                              );
                                          })({
                                              capture: (t) => (0 === t ? l : rF(e)),
                                              composite: (e) => rT(e, n),
                                              upload: (t) =>
                                                  (0, g.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, g.n6)(e, t.id),
                                              send: (n) => (0, x.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rD(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rL.delete(i),
                                                          window.setTimeout(() => {
                                                              (rD(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(k, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == up && (up = document.createElement("canvas").getContext("2d"));
                    let i = up;
                    if (null == i) return a;
                    let s = getComputedStyle(e);
                    i.font = "" !== s.font ? s.font : `${s.fontWeight} ${s.fontSize} ${s.fontFamily}`;
                    let o =
                        t > 0
                            ? t
                            : ((l = parseFloat(s.paddingInlineStart)),
                              (r = parseFloat(s.paddingInlineEnd)),
                              e.clientWidth - (Number.isNaN(l) ? 0 : l) - (Number.isNaN(r) ? 0 : r));
                    if (o <= 0 || i.measureText(a).width <= o) return a;
                    let u = 0,
                        c = a.length;
                    for (; u < c;) {
                        let e = Math.ceil((u + c) / 2);
                        i.measureText(a.slice(0, e)).width <= o ? (u = e) : (c = e - 1);
                    }
                    let d = a.slice(0, u),
                        m = d.lastIndexOf(" ");
                    return (m > 0 ? d.slice(0, m) : d).trimEnd();
                })(uj(eb.current), eM.current, (0, o1.Lj)(k));
                ("" !== l && W(l), M(""), Q(null));
            }, [V, G, t, k, s, U, M]),
            eh = i.useCallback(
                (e) => {
                    (e.preventDefault(), ef());
                },
                [ef],
            ),
            ep = i.useCallback(() => {
                null == u || R || (L(!0), u());
            }, [u, R]),
            eg = null == f || "" !== k || !n || r || p ? null : f,
            ex = i.useCallback(
                (e) => {
                    if (ei && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = er.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), ee((ec + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), em(ec));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), Q(el?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !R) {
                        (e.preventDefault(), e.stopPropagation(), ep());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eg) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), M(eg));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), ef());
                },
                [ef, d, l, u, R, ep, eg, M, ei, er.length, ec, em, el],
            ),
            ev = i.useCallback(
                (e) => {
                    n && F(e);
                },
                [n, F],
            );
        (0, oY.Vo)({
            event: eX.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ev(t);
            },
        });
        let ej = i.useCallback(
                (e) => {
                    (z(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [z],
            ),
            eb = i.useRef(null),
            ey = i.useRef(null),
            ek = i.useCallback((e) => {
                let t = $.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [ew, eC] = i.useState(0),
            [eN, eA] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void eA(!1);
            let e = uj(eb.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eC(t);
            }
            eA(!0);
            let t = setTimeout(() => eA(!1), uv);
            return () => clearTimeout(t);
        }, [k]);
        let eS = i.useMemo(() => ({ "--custom-glow-x": `${ew}px` }), [ew]),
            eE = eN ? ` ${um.EB}` : "",
            eI = r
                ? A.intl.string(N.default.qqlUiW)
                : n
                  ? p
                      ? A.intl.string(N.default.knUjL3)
                      : h
                        ? A.intl.string(N.default.IevBEw)
                        : A.intl.string(l ? N.default["0BJa/0"] : N.default.TEeU7z)
                  : A.intl.string(N.default.zZ9NgM),
            eM = i.useRef(0),
            e_ = i.useRef(null),
            eP = i.useCallback((e) => {
                if ((e_.current?.disconnect(), null == e)) return;
                eM.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eM.current = e.clientWidth;
                });
                (t.observe(e), (e_.current = t));
            }, []),
            eT = i.useId(),
            e$ = i.useId(),
            eD = null != eg,
            ez = H ?? eg ?? eI,
            eF = "" === k && "" !== ez;
        return (0, a.jsxs)("form", {
            onSubmit: eh,
            className: um.DA,
            children: [
                ei
                    ? (0, a.jsx)(o6, {
                          id: ed,
                          projectId: t,
                          suggestions: er,
                          selectedIndex: ec,
                          onHover: ee,
                          onSelect: em,
                      })
                    : null,
                D.length > 0 || G
                    ? (0, a.jsxs)("div", {
                          className: um.lN,
                          children: [
                              D.map((e) => (0, a.jsx)(re, { draft: e, onRemove: O }, e.localId)),
                              G ? (0, a.jsx)(oZ, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${um.wg} ${um.LP}${eE}`, style: eS, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${um.wg} ${um.L3}${eE}`, style: eS, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: um.VA,
                    ref: eb,
                    children: [
                        (0, a.jsx)("input", {
                            ref: $,
                            type: "file",
                            multiple: !0,
                            onChange: ej,
                            className: um.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(es.Y, {
                            targetElementRef: ey,
                            position: "top",
                            align: "left",
                            animation: es.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eo.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eu.rX, {
                                        children: [
                                            uf.map((e) =>
                                                (0, a.jsx)(
                                                    eu.Dr,
                                                    {
                                                        id: e.id,
                                                        label: A.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => ek(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "import-project",
                                                      label: A.intl.string(N.default["p/k5i7"]),
                                                      iconLeft: oV.q,
                                                      leadingAccessory: { type: "icon", icon: oV.q },
                                                      action: m,
                                                  })
                                                : null,
                                        ],
                                    }),
                                });
                            },
                            children: (e, t) => {
                                let { isShown: l } = t;
                                return (0, a.jsx)("button", {
                                    ...e,
                                    ref: ey,
                                    type: "button",
                                    className: `${um.Y0} ${um.nu}`,
                                    disabled: !n,
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(oH.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: um.Qu,
                                    }),
                                });
                            },
                        }),
                        eF
                            ? (0, a.jsx)("div", {
                                  ref: eP,
                                  className: um.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(ug, { text: ez, offering: eD && null == H, typed: null != H }),
                              })
                            : null,
                        (0, a.jsx)(eV.A, { id: e$, children: A.intl.string(N.default.ldNl9x) }),
                        (0, a.jsx)(il.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(oJ.A, {
                                editor: y,
                                containerClassName: um.sq,
                                className: um.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: I,
                                onBlur: () => E(null),
                                onKeyDown: ex,
                                onPaste: ev,
                                renderExtraElement: ud,
                                "aria-labelledby": e$,
                                "aria-describedby": eF ? eT : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": ei,
                                "aria-controls": ei ? ed : void 0,
                                "aria-activedescendant": ei ? ((0, o3.aI)(ec) ?? void 0) : void 0,
                            }),
                        }),
                        eF ? (0, a.jsx)(eV.A, { id: eT, children: eI }) : null,
                        (0, a.jsx)("div", {
                            className: um.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: A.intl.string(N.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${um.Y0} ${um.$E}`,
                                              disabled: R,
                                              onClick: ep,
                                              "aria-label": A.intl.string(N.default.wiguT0),
                                              children: (0, a.jsx)(ip.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : j?.tierSettings != null && null != b
                                      ? (0, a.jsx)(eB, {
                                            settings: j.tierSettings,
                                            tiers: j.tiers,
                                            choices: j.choices,
                                            disabled: !n,
                                            onChange: b,
                                            className: `${um.Y0} ${um.$E}`,
                                            icon: (0, a.jsx)(eL.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        T
                            ? (0, a.jsxs)("div", {
                                  className: um.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: um.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: um.rt,
                                          disabled: !V,
                                          "aria-label": A.intl.string(N.default.rxW2cl),
                                          children: (0, a.jsx)(oW.SendMessageIcon, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  ],
                              })
                            : null,
                    ],
                }),
            ],
        });
    }),
    uv = 1500;
function uj(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var ub = n(709753),
    uy = n(540338),
    uk = n(986109);
let uw = i.createContext(null);
function uC(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(uw),
        [d, m] = i.useState(() => oX.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        f = i.useCallback((e) => {
            e.target === e.currentTarget && m(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: u,
        onAnimationEnd: d ? void 0 : f,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: X()(uk.xk, { [uk.g5]: d, [uk.Qo]: s, [uk.q3]: o }),
        children: n,
    });
}
let uN = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    uA = new Map();
function uS(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function uE(e, t) {
    return null != e && e > 0 && e < t;
}
let uI = "ideas",
    uM = "live_behind",
    u_ = "conjureTipDismissals",
    uP = new Set(),
    uT = new Set(),
    uR = 0;
function uL() {
    let e = tV.w.get(u_);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function u$(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return uP.has(((n = e.id), `${t}:${n}`));
        case "app":
            return uL().app[t]?.includes(e.id) === !0;
        case "forever":
            return uL().forever.includes(e.id);
    }
}
function uD(e) {
    return (uT.add(e), () => uT.delete(e));
}
let uz = [12e4, 6e4];
var uF = n(292771);
function uO(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([oX.Ay], () => oX.Ay.useReducedMotion),
        [r, s] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        s([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let c = i.useRef(null),
        d = i.useRef(null),
        m = i.useRef(null),
        f = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = c.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = d.current,
            s = m.current,
            o = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((d.current = h), (m.current = o));
        let p = f.current !== u;
        if (((f.current = u), !p || l || null == s || null == i || null == a || null == h)) return;
        let g = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${g})`,
                    transformOrigin: "top left",
                },
                { transform: "none", transformOrigin: "top left" },
            ],
            { duration: 260, easing: "cubic-bezier(0.2, 0, 0, 1)" },
        ),
            n.animate([{ height: `${s}px` }, { height: `${o}px` }], {
                duration: 260,
                easing: "cubic-bezier(0.2, 0, 0, 1)",
            }));
    });
    let h = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: uF.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: X()(uF.qd, e.leaving ? uF.dv : uF.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var uq = n(443865),
    uU = n(247171);
function uG(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: X()(uU.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: X()(uU.gutter, uU[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: uU.content, children: i }),
        ],
    });
}
var uB = n(716502);
function uK(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uG, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: uB.Nr,
        children: (0, a.jsxs)("section", {
            className: uB.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uB.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": A.intl.string(A.t.WAI6xu),
                                  icon: en.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
function uV(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: uB.DD,
        children: t,
    });
}
function uH(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: uB.rf,
        children: t,
    });
}
function uW(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uB.o1, children: t });
}
let uX = {
    ...uN,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uK, {
            icon: uq.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(uV, { children: A.intl.string(N.default.OJlbhX) }),
                (0, a.jsx)(uH, { children: A.intl.string(N.default["3vJBni"]) }),
                (0, a.jsx)(uW, {
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(N.default["U/bLzU"]),
                        disabled: null == n,
                        onClick: () => {
                            (l?.(), n?.());
                        },
                    }),
                }),
            ],
        });
    },
};
var uJ = n(830205);
function uY(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(uG, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uJ.aK,
        children: (0, a.jsxs)("div", {
            className: uJ.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uJ.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uJ.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tn.K, {
                                  "aria-label": A.intl.string(A.t.WAI6xu),
                                  icon: en.P,
                                  variant: "icon-only",
                                  size: "sm",
                                  onClick: n,
                              }),
                          }),
                      })
                    : null,
            ],
        }),
    });
}
var uQ = n(95635);
let uZ = [
    {
        id: uM,
        priority: 2,
        resolve: function (e) {
            let { turn: t, publish: n, draftHasText: l, idleMs: r } = e;
            return null == t ||
                l ||
                null == n ||
                n.publishing ||
                !n.isUpdate ||
                null != n.disabledReason ||
                r < 12e4 ||
                (null != t.publishCta && os(n, t.publishCta)) ||
                uE(e.messagesSinceShown(uM), 10)
                ? null
                : "hint";
        },
        dismissal: "session",
        render: (e, t) => {
            let {
                context: { publish: n },
                dismiss: l,
            } = t;
            return null != n
                ? (0, a.jsx)(uY, {
                      icon: uQ.UploadIcon,
                      onDismiss: l,
                      children: A.intl.format(N.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uX,
    {
        id: uI,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(uN) ||
                0 === e.messagesSinceShown(uN.id) ||
                uE(e.messagesSinceShown(uI), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(uY, {
                icon: uq.LightbulbIcon,
                onDismiss: l,
                children: A.intl.format(N.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var u0 = n(817921);
function u1(e) {
    let { projectId: t, messages: n, draftHasText: l, onAskForIdeas: r } = e,
        s = (function (e, t, n, l, r) {
            var a;
            let s,
                u,
                c,
                d,
                m,
                f,
                h,
                p,
                g =
                    ((s = (0, td.Ay)(t)),
                    (u = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id)),
                    (m = (function (e, t) {
                        let [n, l] = i.useState(() => Date.now());
                        return (
                            i.useEffect(() => {
                                if (null == e) return;
                                let r = (function (e, t, n, l) {
                                    let r = t.map((t) => e + t);
                                    if (r.some((e) => e > n && e <= l)) return 0;
                                    let a = r.filter((e) => e > l);
                                    return a.length > 0 ? Math.min(...a) - l : null;
                                })(e, t, n, Date.now());
                                if (null == r) return;
                                let a = setTimeout(() => l(Date.now()), r);
                                return () => clearTimeout(a);
                            }, [e, t, n]),
                            n
                        );
                    })(
                        (d =
                            null != (c = n.at(-1))
                                ? Math.max(c.created_at, c.finished_at ?? 0, c.settled_at ?? 0)
                                : null),
                        uz,
                    )),
                    (h =
                        null ==
                            (f = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--) {
                                    let n = e[t];
                                    if (
                                        "publish_notice" !== n.kind &&
                                        "project_event" !== n.kind &&
                                        "context_boundary" !== n.kind
                                    ) {
                                        if ("user" === n.role) return null;
                                        if ((0, rJ.BL)(n)) return n;
                                        if (!(0, rJ.B0)(e, t)) break;
                                    }
                                }
                                return null;
                            })(n)) ||
                        null != (a = f).awaitingUser ||
                        null != a.secretRequest ||
                        null != a.settingsRequest ||
                        (a.intake?.questions.length ?? 0) > 0
                            ? null
                            : f),
                    {
                        projectId: t,
                        turn: h,
                        publish: s,
                        draftHasText: l,
                        idleMs: null != d ? Math.max(0, m - d) : 0,
                        hasPublished:
                            null !=
                            (p = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        justRemixed: c?.projectEvent?.type === "remixed",
                        publishedSinceLastMessage: null != p && 0 === uS(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = uA.get(`${t}:${e}`);
                            return null != l ? uS(n, l, u) : null;
                        },
                        isDismissed: (e) => u$(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(uD, () => uR);
            let { callout: x, hint: v } = (function (e, t, n) {
                    let l = { callout: null, hint: null };
                    for (let r of [...e].sort((e, t) => t.priority - e.priority)) {
                        if (null != l.callout && null != l.hint) break;
                        if (n(r)) continue;
                        let e = r.resolve(t);
                        null != e &&
                            ("hint" === e
                                ? (l.hint ??= { tip: r, presentation: e })
                                : (l.callout ??= { tip: r, presentation: e }));
                    }
                    return l;
                })(e, g, (e) => u$(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uA.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: g,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || u$(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  uP.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = uL();
                                                  tV.w.set(
                                                      u_,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (uR++, uT.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(uZ, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uC, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: u0.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uO, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var u2 = n(52133),
    u3 = n(732159),
    u5 = n(888366),
    u4 = n(862026),
    u6 = n(291192);
function u7(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, u4.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: u6.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: u6.Sp,
                children: [
                    (0, a.jsx)("span", { className: u6.q3 }),
                    (0, a.jsxs)("span", {
                        className: u6.g8,
                        children: [
                            (0, a.jsx)(u5.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: u6.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: u6.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(ag.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tv.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(u3.u, {
                                                                    ...t,
                                                                    title: A.intl.string(N.default["i+xjZM"]),
                                                                    subtitle: A.intl.string(N.default.fMBZmD),
                                                                    confirmText: A.intl.string(N.default.i5f3Uo),
                                                                    onConfirm: e,
                                                                }),
                                                            ),
                                                        ))
                                                      : s.onPress();
                                              },
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                    null != r.note
                        ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
function u8(e) {
    return (0, o.bG)([B.Ay, tw.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (tw.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var u9 = n(951465),
    ce = n(369455);
function ct(e) {
    let { projectId: t, notice: n } = e,
        l = u8(t),
        r = (0, o.bG)([B.Ay, f.A], () => {
            let e = B.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (f.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(Q.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            A.intl.format(
                !0 === n.channel_skipped
                    ? N.default.ev23Cw
                    : n.update
                      ? N.default.gQzuLC
                      : null == r
                        ? N.default.MOrR29
                        : N.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(cn, { projectId: t, notice: n }) : null,
        ],
    });
}
function cn(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(td.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lE.A, B.Ay],
                    () => {
                        let r = lE.A.getPublishStatus(e),
                            a = B.Ay.getProject(e);
                        return {
                            sent:
                                null == l ? null : (r?.patchNotesSent?.find((e) => e.publishedRevision === l) ?? null),
                            canOffer:
                                null != l &&
                                t.update &&
                                l === r?.publishedRevision &&
                                null != n &&
                                null != a &&
                                "user" !== a.install_scope &&
                                (0, B.jf)(a),
                        };
                    },
                    [e, l, t.update, n],
                );
            return null != r
                ? { state: "sent", sent: r }
                : a && null != l && null != n
                  ? { state: "offer", publishedRevision: l, fallbackGuildId: n }
                  : null;
        })(t, n);
    return null == l
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  " ",
                  "sent" === l.state
                      ? A.intl.format(N.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eh.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ce.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(eX.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : A.intl.format(N.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = B.Ay.getProject(e),
                                        a = null == r ? null : (0, td.KL)(r, l);
                                    return null == r || null == a
                                        ? null
                                        : {
                                              projectId: e,
                                              guildId: a,
                                              applicationId: r.application_id,
                                              projectName: r.name,
                                              publishedRevision: n,
                                          };
                                })(t, l);
                                null != e && (0, u9.A)(e);
                            },
                        }),
              ],
          });
}
var cl = n(940874),
    cr = n(565645),
    ca = n(187308),
    ci = n(981879);
function cs(e) {
    let { reaction: t } = e;
    return (0, a.jsx)("div", {
        className: ci.H,
        children: (0, a.jsx)(cr.A, {
            emojiId: t.emojiId,
            emojiName: t.emoji,
            animated: t.animated,
            shouldAnimate: !0,
            alt: (0, ca.pW)(t),
            size: "reaction",
        }),
    });
}
n(775443);
var co = n(616e3),
    cu = n(155899),
    cc = n(521981),
    cd = n(491182),
    cm = n(438729),
    cf = n(622868),
    ch = n(448368),
    cp = n(837528),
    cg = n(470964),
    cx = n(715628),
    cv = n(752636),
    cj = n(9842),
    cb = n(589022),
    cy = n(967198),
    ck = n(531685);
let cw = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cC(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cN(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cA(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cN(e, t),
        a = e.codePointAt(t);
    if (
        (null != a &&
            (8205 === a ||
                (a >= 65024 && a <= 65039) ||
                (a >= 127995 && a <= 127999) ||
                (a >= 768 && a <= 879) ||
                (a >= 8400 && a <= 8447) ||
                (a >= 65056 && a <= 65071) ||
                (a >= 917536 && a <= 917631))) ||
        8205 === r
    )
        return !0;
    if (cC(r) && cC(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cC(cN(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cS(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([oX.Ay], () => oX.Ay.useReducedMotion),
        r = n && !l,
        [a, s] = i.useState(() => ({ target: e, length: e.length })),
        u = a;
    (u.target !== e &&
        (u = {
            target: e,
            length: r
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let r = Math.min(l, t.length),
                          a = 0;
                      for (; a < r && e.charCodeAt(a) === t.charCodeAt(a);) a++;
                      for (; a > 0 && cA(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && s(u));
    let c = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let m = i.useRef(0),
        f = i.useRef(0);
    (i.useEffect(() => {
        if (c)
            return (
                (f.current = 0),
                (m.current = requestAnimationFrame(function e(t) {
                    let n = 0 === f.current ? 32 : t - f.current;
                    if (n >= 32) {
                        f.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    r = Math.min(Math.max(n, 0), t.length),
                                    a = t.length - r;
                                if (a <= 0) return r;
                                if (a > 900) return t.length;
                                let i = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, a / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && cw.has(e.charAt(l - 1));) l--;
                                    return cw.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cA(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    m.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(m.current)
            );
    }, [c]),
        i.useEffect(() => {
            if (c)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [c]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var cE = n(624479),
    cI = n(890377),
    cM = n(180227);
function c_(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: X()(cM.QE, { [cM.Rn]: t }),
              children: (0, a.jsx)(sP.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sP.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function cP(e) {
    return ti.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: A.intl.string(A.t.JrGD7E), icon: cE.CopyIcon, onClick: () => (0, ti.C)(e) }]
        : [];
}
function cT(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: A.intl.string(N.default.CXtLD2),
                          tooltip: A.intl.string(N.default.DOb1HM),
                          icon: cI.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: A.intl.string(N.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(c_, { groupStart: n, actions: [...r, ...cP(t)] });
}
function cR(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: A.intl.string(N.default.H8Jfhu), icon: ru.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nt.BugIcon, onClick: r }];
    return (0, a.jsx)(c_, { groupStart: n, actions: [...i, ...cP(t), ...s] });
}
let cL = (0, sl.createChannelRecord)({ id: "conjure-builder", type: eX.rbe.DM }),
    c$ = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cD(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: X()(cM.Yq, { [cM.x1]: t }), children: e });
}
function cz(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let cF = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function cO(e, t, n) {
    let { content: l } = (0, cg.A)(e, cF),
        r = i.useMemo(() => ((0, il.aW)(e.content) ? (0, cc.z2)(o$, e, cF).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: cL, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cm.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cx.A)(s, r);
}
function cq(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cp.m)(e, cL, t.usernameProfile, l),
        u = (0, cp.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cy.A], () => cy.A.getGuildId()),
        d = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cb.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: c ?? void 0,
    };
}
function cU(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, il.aW)(n.content)
                          ? (0, cc.z2)(o$, n, e).content
                          : (0, cc.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cM.GV,
                              children: [
                                  (0, a.jsx)(ne.x, {
                                      className: cM.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          t,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, o.cf)(
            [t2.A],
            () => ({
                isReplyAuthorBlocked: t2.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t2.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sM.X4)(n),
        m = (0, sM.X4)(t),
        f = cq(n);
    return (0, a.jsx)(ch.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: cL,
        referencedMessage: { state: cj.a.LOADED, message: n },
        content: s,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: c,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: f.renderPopout,
        showAvatarPopout: f.showAvatarPopout,
        showUsernamePopout: f.showUsernamePopout,
        onClickAvatar: f.onClickAvatar,
        onClickUsername: f.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: f.onPopoutRequestClose,
    });
}
function cG(e) {
    let { message: t, author: n } = e,
        l = cq(t);
    return (0, a.jsx)(cf.Ay, {
        message: t,
        channel: cL,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function cB(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, e1.vm)(l),
        c = i.useMemo(() => (0, sM.FT)(u, null), [u]),
        d = i.useMemo(() => np(t), [t]),
        m = d?.body ?? t,
        f = (0, o1.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sn.Ay)({ channelId: cL.id, content: m, author: u });
            return (0, st.rh)({ ...e, timestamp: cz(n, e.timestamp), state: eX.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              cK,
              {
                  message: h,
                  author: c,
                  content: m,
                  selected: d?.label,
                  accessories: r,
                  groupStart: s,
                  onQueuedAction: o,
              },
              f,
          );
}
function cK(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = cO(t, l);
    return (0, a.jsx)(cd.A, {
        className: cM.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cG, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cM.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cM.GV,
                              children: [
                                  (0, a.jsx)(ne.x, {
                                      className: cM.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cM.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cD(i, "" !== l),
        childrenButtons: (0, a.jsx)(cT, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cV(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: u = !0,
            streaming: c = !1,
            buttons: d,
        } = e,
        { text: m, revealing: f } = cS(t, { streaming: (0, o.bG)([ck.A], () => c && ck.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sM.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, e1.vm)(g),
        v = i.useMemo(() => (null == r ? null : np(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sn.Ay)({ channelId: cL.id, content: v?.body ?? r.content, author: x });
            return (0, st.rh)({ ...e, id: r.id, timestamp: cz(r.createdAt, e.timestamp), state: eX.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: cL.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sn.Ay)({ channelId: cL.id, content: "", author: c$ })),
        k = i.useMemo(
            () =>
                (0, st.rh)({
                    ...y,
                    timestamp: cz(n, y.timestamp),
                    state: eX.cmJ.SENT,
                    ...(null != b ? { type: eX.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        C = i.useMemo(
            () => (0, cv.A)({ message: k, channel: cL, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        N = cO(w, m, cM.OS);
    return (0, a.jsxs)("div", {
        className: cM.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cd.A, {
                className: cM.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(cU, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: C,
                childrenMessageContent: N,
                childrenAccessories: cD(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cM.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(sX.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cH(e) {
    let { onSelect: t, onClose: n = eH.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eu.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eu.Dr, {
                          id: "restore-version",
                          label: A.intl.string(N.default.H8Jfhu),
                          icon: ru.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eu.Dr, { id: "view-trace", label: "View Trace", icon: nt.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cW(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: s,
            pickedIdeaIds: u,
            secretRequestAwaiting: c,
            secretRequestStatus: d,
            settingsFloating: m = !1,
            isNewest: f = !1,
            onPickIdea: h,
            onApprovePlan: p,
            onRestoreVersion: g,
        } = e,
        x = n.message,
        v =
            null != g
                ? "assistant" !== x.role || null == x.sourceSha
                    ? null
                    : {
                          sha: x.sourceSha,
                          authorName: "",
                          authorEmail: "",
                          authoredAt: new Date(x.created_at).toISOString(),
                          subject: x.content,
                      }
                : null,
        j = null != v && null != g ? () => cX(v, g) : void 0,
        b =
            ((t =
                n0() && "assistant" === x.role && (0, rJ.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [co.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : co.A.getTimingTraces(l).findLast((e) => {
                                  let { name: n, spans: l } = e;
                                  return "turn" === n && l.find((e) => null == e.parent)?.attrs?.turn_id === t;
                              });
                    return null == e || e.live ? null : e.id;
                },
                [l, t],
            )),
        y =
            null != b
                ? () =>
                      (function (e, t) {
                          for (let n of ((nY = { projectId: e, traceId: t }), [...nJ])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uC, {
        rowKey: n.key,
        role: "assistant",
        continuation: !n.groupStart,
        onContextMenu:
            null != j || null != y
                ? (e) => {
                      var t, n, l;
                      return (
                          (t = e),
                          (n = j),
                          (l = y),
                          void (0, eH.jA)(t, (e) => (0, a.jsx)(cH, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cV, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(cR, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(oq, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: s,
                interrupted: !0 === x.interrupted,
                hoistedProse: !0,
                hoistedAttachmentsHost: n.attachmentsHost,
                sideReply: n.sideReply,
                sideReplyAcknowledges: x.acknowledges,
                active: n.active,
                ideas: n.active ? void 0 : x.ideas,
                pickedIdeaIds: null == x.ideas ? void 0 : u,
                attachments: x.attachments,
                secretRequest: n.active ? void 0 : x.secretRequest,
                secretRequestId: x.render_id,
                secretRequestAwaiting: c,
                secretRequestStatus: d,
                settingsRequest: n.active || m ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              cX(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  g,
                              )
                        : void 0,
            }),
        }),
    });
}
function cX(e, t) {
    (0, cu.F)({ onConfirm: () => t(e) });
}
var cJ = n(288539);
function cY(e, t, n) {
    return (0, a.jsx)(cJ.A, { userId: e, content: `@${t}` }, n);
}
function cQ(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, e1.Y_)(l), [l]);
            let r = (0, o.bG)([eQ.default], () => (null == l ? null : eQ.default.getUser(l)), [l]),
                a = (0, eZ.tx)(r),
                s = u8(e),
                u =
                    (0, o.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? A.intl.string(N.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? A.intl.format(N.default.Lwsrhg, { app: s, server: u })
                        : A.intl.format(N.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? A.intl.format(N.default.mT7EQG, { app: s, server: u })
                        : A.intl.format(N.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? A.intl.format(N.default["4LVIeo"], { app: s, server: u })
                        : A.intl.format(N.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? A.intl.format(N.default["4VQfid"], { channel: e, server: u })
                        : A.intl.format(N.default.RlMIJN, { channel: e, server: u, ...c });
                }
                case "remixed":
                    return A.intl.format(N.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, cY),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([tm.A], () => null != t && t.length > 0 && a7({ keys: t }, tm.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: A.intl.string(N.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(ie, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let cZ = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    r$.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, il.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cB, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(oN.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(o0, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(cs, { reaction: o.agentReaction })
                                                  : null,
                                          ],
                                      })
                                    : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, cl.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(oN.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oO, {
                            projectId: l,
                            steps: o.steps,
                            segment: n.segment,
                            active: n.active,
                            closed: n.closed,
                            segmentDurationMs: n.segmentDurationMs,
                            reportsDuration: n.reportsDuration,
                            hostsChecklist: n.hostsChecklist,
                            turnActive: n.turnActive,
                            checklistSuperseded: n.checklistSuperseded,
                            durationMs: null != o.finished_at ? o.finished_at - o.created_at : void 0,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(ct, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cV, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cQ, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(u7, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oO, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uC, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oO, {
                            projectId: l,
                            steps: c0,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cW, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, u2.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, u2.A)(e.row, t.row, ["message"]) &&
                e.row.kind === t.row.kind &&
                (function (e, t, n) {
                    if (t === n) return !0;
                    switch (e) {
                        case "user":
                            return (
                                t.id === n.id &&
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.user_id === n.user_id &&
                                t.agentReaction === n.agentReaction &&
                                t.attachments === n.attachments &&
                                t.disposition === n.disposition
                            );
                        case "prose":
                            return t.created_at === n.created_at && t.attachments === n.attachments;
                        case "publishNotice":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.publishNotice === n.publishNotice
                            );
                        case "projectEvent":
                            return (
                                t.content === n.content &&
                                t.created_at === n.created_at &&
                                t.projectEvent === n.projectEvent
                            );
                        case "contextBoundary":
                            return t.contextSwitch === n.contextSwitch;
                        default:
                            return !1;
                    }
                })(e.row.kind, e.row.message, t.row.message) &&
                (0, u2.A)(e.replyTo, t.replyTo) &&
                (0, u2.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    c0 = [],
    c1 = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    c2 = new WeakMap();
function c3(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function c5(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let c4 = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: s,
            draftHasText: u,
            onApprovePlan: c,
            floatingSettingsMessageId: d,
            liveClarificationId: m,
            onRestoreVersion: f,
            scrollerRef: h,
            stickToBottomRef: p,
            pinned: g,
            onUnpin: v,
            handleRef: j,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [k, w] = i.useState(null),
        C = i.useCallback((e) => {
            ((y.current = e), w(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, o.bG)([lE.A], () => lE.A.getPublishStatus(t)),
        P = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id),
        T = i.useMemo(() => {
            let e;
            return (function (e, t) {
                let n = [],
                    l = (function (e) {
                        let t = new Set(),
                            n = !1;
                        for (let l = e.length - 1; l >= 0; l--) {
                            let r = e[l];
                            null != r &&
                                null !=
                                    (function (e) {
                                        if ("assistant" !== e.role) return null;
                                        let t = (0, rX.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = c2.get(r);
                    if (null != i && i.superseded === e && i.liveCard === a) {
                        n.push(...i.planned);
                        continue;
                    }
                    let s = (function (e, t, n) {
                        let l = [];
                        function r(e, t) {
                            l.push({ row: e, groupable: { key: e.key, ...t } });
                        }
                        if ("user" === e.role)
                            return (
                                r(
                                    { kind: "user", key: e.render_id, message: e, groupStart: !1 },
                                    { actor: "user", authorId: e.user_id, boundary: void 0 },
                                ),
                                l
                            );
                        if ("publish_notice" === e.kind) {
                            let t = `${e.render_id}:publish`;
                            return (
                                r(
                                    { kind: "publishNotice", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        if ("context_boundary" === e.kind) {
                            let t = `${e.render_id}:contextBoundary`;
                            return (
                                r(
                                    { kind: "contextBoundary", key: t, message: e, groupStart: !1 },
                                    { actor: null, boundary: t },
                                ),
                                l
                            );
                        }
                        if ("project_event" === e.kind) {
                            let t = `${e.render_id}:projectEvent`;
                            return (
                                r(
                                    { kind: "projectEvent", key: t, message: e, groupStart: !1 },
                                    { actor: "assistant", boundary: t },
                                ),
                                l
                            );
                        }
                        let a = !(0, rJ.BL)(e),
                            i = ig({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, rX.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, rX.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && c1.test(n.prose.content)) m = !0;
                            else if (null != n.prose && n.prose.key !== i.replyKey) {
                                let t = `${e.render_id}:${n.key}`;
                                r(
                                    {
                                        kind: "prose",
                                        key: t,
                                        message: e,
                                        groupStart: !1,
                                        content: n.prose.content,
                                        hostsAttachments:
                                            "streamed" === i.attachmentsHost &&
                                            n.prose.key === s &&
                                            null != e.attachments,
                                        streaming: a && n.index === d && !n.hasWork,
                                    },
                                    { actor: "assistant", boundary: t },
                                );
                            }
                            (n.hasWork || n.hasTodos) &&
                                r(
                                    {
                                        kind: "activity",
                                        key: `${e.render_id}:work-${n.index}`,
                                        message: e,
                                        groupStart: !1,
                                        segment: n.index,
                                        active: n.index === c,
                                        closed: n.index !== c,
                                        ...(null != n.durationMs ? { segmentDurationMs: n.durationMs } : {}),
                                        reportsDuration: n.index === u,
                                        hostsChecklist: n.hasTodos,
                                        turnActive: rY(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = c1.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || m || f
                                ? r(
                                      {
                                          kind: "interrupted",
                                          key: `${e.render_id}:interrupted`,
                                          message: e,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : o.every((e) => !e.hasTodos) &&
                                  (e.todos?.length ?? 0) > 0 &&
                                  r(
                                      {
                                          kind: "legacyTodos",
                                          key: `${e.render_id}:todos`,
                                          message: e,
                                          groupStart: !1,
                                          checklistSuperseded: t,
                                      },
                                      { actor: null, boundary: void 0 },
                                  ),
                            (i.showsClosingMessage && !f) ||
                                null != e.proposal ||
                                (null != e.clarification && !n) ||
                                null != e.restoreProposal ||
                                null != e.publishScheduleProposal ||
                                (!a &&
                                    (null != e.ideas ||
                                        null != e.publishCta ||
                                        null != e.secretRequest ||
                                        null != e.settingsRequest)) ||
                                "standalone" === i.attachmentsHost)
                        ) {
                            let t = `${e.render_id}:closing`;
                            r(
                                {
                                    kind: "closing",
                                    key: t,
                                    message: e,
                                    groupStart: !1,
                                    active: a,
                                    attachmentsHost: i.attachmentsHost,
                                    content: i.closingContent,
                                    sideReply: "side_reply" === e.kind,
                                },
                                {
                                    actor: "assistant",
                                    boundary: t,
                                    separate: null != e.proposal || null != e.clarification || "side_reply" === e.kind,
                                },
                            );
                        }
                        return l;
                    })(r, e, a);
                    (c2.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
                }
                let r = (function (e) {
                    let t,
                        n,
                        l = [],
                        r = null,
                        a = !1,
                        i = !1;
                    for (let s of e) {
                        if (null == s.actor) {
                            (l.push(!1), (r = null), (t = void 0), (a = !1), (i = !1), (n = void 0));
                            continue;
                        }
                        let e = !a || r !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || i;
                        (e && ((r = s.actor), (t = s.authorId), (a = !0), (i = !0 === s.separate), (n = s.boundary)),
                            l.push(e));
                    }
                    return l;
                })(n.map((e) => e.groupable));
                return n.map((e, t) => ({ ...e.row, groupStart: r[t] ?? !0 }));
            })(
                ((e = (function (e, t) {
                    for (let n = e.length - 1; n >= 0; n--) {
                        let l = e[n].publishCta;
                        if (null != l) return oi(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oo.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oo.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => T.map((e) => e.key), [T]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return c3(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : c5(e, t.endKey, t.end - 1) + 1,
                a = c5(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), c3(e, a, r));
        })(R, L, g),
        z = i.useRef(D),
        F = i.useRef(R),
        O = i.useRef(T),
        q = i.useRef(null),
        U = i.useRef(null),
        G = i.useRef(new Set()),
        B = i.useCallback(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null == e || null == t) return;
            let n = e.getBoundingClientRect().top,
                l = t.querySelectorAll("[data-conjure-row-key]"),
                r = 0,
                a = l.length - 1,
                i = null;
            for (; r <= a;) {
                let e = (r + a) >> 1;
                l[e].getBoundingClientRect().bottom > n ? ((i = l[e]), (a = e - 1)) : (r = e + 1);
            }
            let s = i?.dataset.conjureRowKey;
            q.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        K = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), c3(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), c3(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? c3(e, i, t.end) : null;
            })(F.current, z.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: p.current,
            });
            "older" === n ? (0, x.loadOlderHistory)(t) : null != n && $(n);
        }, [h, p, t]);
    i.useImperativeHandle(
        j,
        () => ({
            handleScroll() {
                (B(),
                    $((e) => {
                        let t = z.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    K());
            },
            recordAnchor: B,
            showLatest(e) {
                ((U.current = e ?? null), $(null));
            },
        }),
        [B, K],
    );
    let V = i.useRef(null),
        H = i.useCallback(
            (e) => {
                var n;
                let l;
                V.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (v(), $(z.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = O.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (v(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = F.current), c3(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, v, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && H(e);
    }, [T, H]),
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), p.current ? h.current?.scrollToBottom() : B());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, B, h, p]));
    let W = null == D.endKey;
    (i.useEffect(() => b?.(W), [W, b]),
        i.useLayoutEffect(() => {
            ((z.current = D), (F.current = R), (O.current = T));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = q.current;
                if (p.current) h.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = U.current;
                ((U.current = null), l?.(), B(), K());
            }
            G.current = new Set(R);
        }, [T, R, D.start, D.end, h, p, B, K]));
    let J = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, rJ.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        Y = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = null,
                        l = 0;
                    for (let r of e)
                        if ("assistant" === r.role) {
                            if ("plan_implemented" === r.kind) {
                                ((n = null), (l = 0));
                                continue;
                            }
                            null != r.proposal &&
                                (null != n && t.set(n, { version: l, superseded: !0 }),
                                (l += 1),
                                t.set(r.render_id, { version: l, superseded: !1 }),
                                (n = r.render_id));
                        }
                    return t;
                })(n),
            [n],
        ),
        Z = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map(),
                        n = new Set();
                    for (let l = e.length - 1; l >= 0; l--) {
                        let r = e[l];
                        if ("user" === r.role) {
                            n.add(r.content.trim());
                            continue;
                        }
                        if (null == r.ideas) continue;
                        let a = new Set();
                        for (let e of r.ideas) n.has(e.implementation_prompt.trim()) && a.add(e.id);
                        t.set(r.render_id, a);
                    }
                    return t;
                })(n),
            [n],
        ),
        ee = i.useMemo(
            () =>
                (function (e) {
                    let t = new Map();
                    for (let n of e)
                        "user" !== n.role ||
                            t.has(n.id) ||
                            t.set(n.id, {
                                id: n.id,
                                content: n.content,
                                ...(null != n.user_id ? { userId: n.user_id } : {}),
                                createdAt: n.created_at,
                            });
                    return t;
                })(n),
            [n],
        ),
        et = n.at(-1),
        en =
            (et?.role !== "assistant" || null == et.awaitingUser || null == et.secretRequest
                ? null
                : (0, rJ.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        er = (0, o.bG)([tm.A], () => tm.A.getSettings(t)?.secrets, [t]),
        ea = (0, ub.WT)(t),
        ei = i.useMemo(() => (0, ok.Mv)(n, er), [n, er]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: X()(uk.x7, uk.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uk.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? N.default.Td4Sf4 : N.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uk.x7,
            children: (0, a.jsx)(uC, { role: "assistant", children: (0, a.jsx)(cV, { content: A.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uw.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uk.x7,
            children: [
                T.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cZ,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && S === n.id,
                                currentUserId: "user" === e.kind ? P : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        cZ,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: H,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Z.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ei.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === J ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                W
                    ? ea.map((e) =>
                          (0, a.jsx)(
                              uC,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(cV, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uy.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && W
                    ? (0, a.jsx)(uC, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cV, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.string(N.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(u1, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var c6 = n(731084),
    c7 = n(823376),
    c8 = n(187447);
function c9(e) {
    let { activity: t, id: n } = e,
        l = (0, rW.j)(),
        { text: r, revealing: s } = cS(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: c8.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rV.Ch, {
                ref: o,
                className: c8.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: X()(oF.PT, c8.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sd.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var de = n(53659);
function dt(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: u = !1,
            publishPending: c = !1,
            publishing: d = !1,
            spoken: m,
            onSpokenChange: f,
        } = e,
        h = i.useRef(null),
        p = i.useId(),
        [g, x] = i.useState(null),
        v = (0, c6.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: u,
            publishPending: c,
            publishing: d,
        }),
        j = A.intl.string(v),
        b = v === c6.kx["0"],
        [y, k] = i.useState(m ?? j),
        w = (0, rW.j)();
    (l || (0, c6.E4)(j, y) || (!w && !b)) && y !== j && k(j);
    let C = i.useRef(j);
    (i.useEffect(() => {
        C.current = j;
    }, [j]),
        i.useEffect(() => {
            f?.(y);
        }, [y, f]));
    let S = i.useRef(null),
        E = i.useRef(y);
    i.useEffect(() => {
        E.current = y;
    }, [y]);
    let I = i.useRef(b),
        M = i.useRef(0);
    (i.useEffect(() => {
        ((I.current = b), !b && (0, c6.E8)(E.current) && k(C.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((M.current = (0, c6.E8)(E.current) ? M.current + 1 : 0), k((0, c6.Ov)(M.current)))
                    : C.current !== E.current
                      ? k(C.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, c6.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let _ = null != t && "" !== t.text,
        P = t?.session ?? null,
        T = _ && null != P && g === P,
        R = i.useCallback(() => {
            _ && null != P && x((e) => (e === P ? null : P));
        }, [_, P]),
        L = i.useCallback(() => x(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: h,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(c9, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: X()(de.hF, _ && de.Xd),
                "aria-label": A.intl.string(
                    r
                        ? N.default.qqlUiW
                        : v === N.default.j8tmjK
                          ? N.default.j8tmjK
                          : b
                            ? c6.kx["0"]
                            : N.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": A.intl.string(v),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: de.bl,
                        children: (0, a.jsx)(c7.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: de.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: c6.vg,
                                  delay: null,
                                  className: de.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: de.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var dn = n(85428),
    dl = n(885574),
    dr = n(242779),
    da = n(436804);
function di(e) {
    return e.toLocaleString();
}
function ds(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: da.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: da.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [di((0, dr.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    di(n.input_tokens),
                    " in \xb7 ",
                    di(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${di(n.cache_creation_input_tokens)} cache write \xb7 ${di(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function du(e) {
    let { project: t } = e,
        n = (0, dr.wU)(t.compaction),
        l = (0, dr.wU)(t.classifier),
        r = (0, dr.wV)(t.orchestrator, t.codegen),
        i = (0, dr.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: da.si,
        role: "dialog",
        "aria-label": A.intl.string(N.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: da.Q$,
                children: (0, a.jsxs)("div", {
                    className: da.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [di((0, dr.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default.ANCEo3), usage: n }),
            (0, a.jsx)(ds, { label: A.intl.string(N.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: da.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(N.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, dr.sj)(i) ? "\u2014" : `${Math.round(100 * (0, dr.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function dc(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(du, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: da.Y$,
                "aria-label": A.intl.string(N.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dl.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var dd = n(997421);
function dm(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: s,
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: m,
            projectUsage: f,
            connState: h,
        } = e,
        p = (0, n1.Zv)(t),
        g = (0, o.bG)([lE.A], () => lE.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, c6.E8)(e) || e === A.intl.string(N.default.mKK6wB) || e === A.intl.string(N.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, c6.uc)(f),
        y = null != s,
        k = s ?? (n ? l : void 0),
        w = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: dd.jf,
        children: [
            (0, a.jsxs)("div", {
                className: dd.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    w || u || p || g
                        ? (0, a.jsx)(dt, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: y,
                              recalling: u,
                              controlling: p,
                              publishPending: g && w,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: j,
                          })
                        : null,
                    null != k ? (0, a.jsx)(dn.A, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(dn.L, { startedAt: k }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: dd.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(dc, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": A.intl.formatToPlainString(N.default["tCo+ZM"], { status: (0, c6.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: dd.XF,
                      children: (0, c6.Db)(h),
                  }),
        ],
    });
}
let df = ["wheel", "touchstart", "pointerdown", "keydown"];
var dh = n(698638),
    dp = n(608711);
let dg = [A.intl.string(N.default["9w+Chc"]), A.intl.string(N.default.WAvmdq), A.intl.string(N.default.SKsrzl)];
function dx(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([e0.A], () => e0.A.getMessages(l), [l]),
        d = (0, o.bG)([x.default], () => x.default.getConnState(l), [l]),
        m = (0, o.bG)([e0.A], () => e0.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([e0.A], () => e0.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([e0.A], () => e0.A.isCompacting(l), [l]),
        v = (0, o.bG)([e0.A], () => e0.A.isSaving(l), [l]),
        j = (0, o.bG)([a3.A], () => a3.A.getModelSettings(l), [l]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: C,
            atBottom: S,
            unpin: E,
            releasePinHold: I,
            showsLatest: M,
            showsLatestRef: _,
            handleShowsLatestChange: P,
            updatePin: T,
        } = (function (e) {
            let t = i.useRef(!0),
                [n, l] = i.useState(!0),
                [r, a] = i.useState(!0),
                s = i.useRef(!1),
                o = i.useCallback(() => {
                    ((s.current = !0), (t.current = !1), l(!1));
                }, []),
                u = i.useCallback(() => {
                    s.current = !1;
                }, []),
                [c, d] = i.useState(!0),
                m = i.useRef(!0),
                f = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of df) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of df) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && m.current;
                t.current = i;
                let o = r > 1 || !m.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: m,
                handleShowsLatestChange: f,
                updatePin: h,
            };
        })(y),
        R = i.useCallback(() => {
            function e() {
                let e = b.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (I(), _.current ? e() : k.current?.showLatest(e));
        }, [I, _]),
        L = i.useCallback(() => {
            (T(), k.current?.handleScroll());
        }, [T]);
    (i.useLayoutEffect(() => {
        let e = b.current;
        if (null == e) return;
        let t = y.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            l = t?.getBoundingClientRect().height,
            r = new ResizeObserver((t) => {
                let r = !1;
                for (let a of t)
                    if (a.target === e) {
                        let e = a.contentRect.width;
                        if (e === n) continue;
                        ((n = e), (r = !0));
                    } else {
                        let e = a.contentRect.height;
                        if (e === l) continue;
                        ((l = e), (r = !0));
                    }
                r && (w.current ? y.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [w]),
        i.useEffect(() => {
            (0, x.ensureConnection)(l);
        }, [l]),
        (0, ir.E1)(l, (0, rW.j)()));
    let $ = nS(l),
        D = (function (e) {
            let t = (0, td.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: A.intl.format("channel" === s ? N.default["1cm4fj"] : N.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(l),
        z =
            ((t = (0, o.bG)([a4.A], () => a4.A.getFailure(l))),
            (n = i.useCallback(() => (0, a6.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: A.intl.format(N.default.Up6Ssw, { reason: t }),
                      retry: { text: A.intl.string(N.default["ywA+ET"]), onClick: n },
                  }),
        F = (0, o.bG)([a4.A], () => a4.A.getSetupStartedAt(l), [l]),
        O = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        q = i.useCallback(
            (e, t, n) => {
                let r = n ?? O;
                0 === $.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nu(e.comment)),
                                  a = [];
                              if (
                                  (a.push(
                                      `My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`,
                                  ),
                                  null != l)
                              ) {
                                  let e = l.title.trim(),
                                      t = "" !== e ? `${e} (${l.url})` : l.url;
                                  (a.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                                      a.push(
                                          "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                                      ));
                              }
                              r.forEach((e, t) => {
                                  let n;
                                  (a.push(""),
                                      a.push(`${t + 1}. ${nm(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: $.annotations, metaComment: e, context: $.context }),
                          t,
                      ),
                      nw(l));
            },
            [$, O, l],
        ),
        U = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rL)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, x.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rL.get(e);
                            (rL.delete(e), rD(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                e0.A.isThinking(l)) &&
                (0, x.interruptTurn)(l);
        }, [l]),
        G = i.useCallback((e) => l5(l, e.implementation_prompt), [l]),
        [B, K] = (function (e) {
            let [t, n] = i.useState(() => ih(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? ih(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        V = i.useCallback(() => O(A.intl.string(N.default["t5CN3+"])), [O]),
        H = i.useCallback((e, t, n) => l5(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        W = i.useCallback((e) => (0, a5.X)(l, e), [l]),
        X = i.useCallback((e) => (0, g.vX)(l, e), [l]),
        J = i.useCallback((e) => l8(l, "chat", Array.from(e), X), [l, X]),
        Y = i.useCallback(() => l5(l, A.intl.string(N.default.Zc7gML)), [l]),
        Z = r?.status === "restoring",
        ee = "open" === d && !Z,
        el = c[c.length - 1],
        er = null != el && "assistant" === el.role && null != el.proposal,
        [ea, ei] = i.useState(null),
        es = el?.clarification != null && el.clarification.id !== ea ? el.clarification : null,
        eo = i.useCallback(() => {
            null != es && ei(es.id);
        }, [es]),
        [eu, ec] = i.useState(null),
        ed =
            el?.appBuildRequest != null && null == es && (0, rJ.BL)(el) && el.appBuildRequest.id !== eu
                ? el.appBuildRequest
                : null,
        em = i.useCallback(() => {
            null != ed && ec(ed.id);
        }, [ed]),
        ef = (0, o.bG)([tm.A], () => tm.A.getSettings(l), [l]),
        [eh, ep] = i.useState(null),
        eg =
            null != el &&
            "assistant" === el.role &&
            null != el.settingsRequest &&
            (0, rJ.BL)(el) &&
            el.id !== eh &&
            a7(el.settingsRequest, ef)
                ? el
                : null,
        ex = eg?.settingsRequest ?? null,
        ev = i.useCallback(() => {
            null != eg && ep(eg.id);
        }, [eg]),
        ej = null != ex,
        [eb, ey] = i.useState(null),
        ek = es?.id ?? ed?.id ?? eg?.id;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eb?.firstElementChild;
        if (null == eb || null == e || !(0, lO.vq)(t, HTMLElement) || null == ek) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eb.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eb, ek, y, w]);
    let ew = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([e0.A], () => e0.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([e0.A], () => e0.A.isHistoryUnavailable(l), [l]),
            connState: d,
        }),
        eC = "loading" === ew && 0 === c.length,
        eN = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dg[e % dg.length];
        }, [l]),
        eA = er ? A.intl.string(N.default.Zc7gML) : "greeting" === ew && 0 === c.length ? eN : null,
        eS = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, rJ.BL)(t)) return t;
            }
        }, [c]),
        eE = null != eS,
        eI = null != eS ? (0, it.S)(eS) : void 0,
        eM = er && ee ? Y : void 0,
        e_ = i.useCallback(() => l5(l, A.intl.string(N.default.EMgIuY)), [l]),
        [eP, eT] = i.useState(null),
        [eL, e$] = i.useState(eE);
    (eL !== eE && (e$(eE), eE || eT(null)),
        i.useEffect(() => {
            if (!eE) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eT(null)
                        : eT(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eE, eS?.steps, M]));
    let eD = M ? eP : "bottom",
        ez = i.useMemo(() => (null != eS ? (0, rQ.b9)(eS.steps) : ""), [eS]),
        eF = i.useMemo(() => (null != eS ? ((0, rX.lt)(eS.steps) ?? eS.todos) : void 0), [eS]),
        eO = eS?.provisionalTodo,
        eq = null != eS && rY(eS),
        eU = i.useMemo(() => {
            var e;
            return null != eS ? ((e = eS.steps), (0, iy.k)((0, rX.Jf)(e, !0).tasks)) : void 0;
        }, [eS]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: dp.TE,
        children: [
            ee
                ? (0, a.jsx)(rH.A, {
                      title: A.intl.string(N.default.gy7byi),
                      description: A.intl.string(N.default["dkv/WO"]),
                      icons: dh.ir,
                      onDrop: J,
                  })
                : null,
            (0, a.jsx)(ai, {
                onJumpToActivity: R,
                line: ez,
                placement: eE && "top" === eD ? "top" : null,
                todos: eF,
                todosLive: eq,
                provisionalTodo: eO,
                agents: eU,
            }),
            (0, a.jsxs)("div", {
                className: dp.JX,
                children: [
                    (0, a.jsx)(rV.Ch, {
                        ref: y,
                        onScroll: L,
                        scrollbarGutter: eC ? "both-edges" : "stable",
                        className: [dp.N$, S ? null : dp.hB, ej ? dp.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(il.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(c4, {
                                projectId: l,
                                messages: c,
                                emptyState: ew,
                                floatingSettingsMessageId: eg?.id,
                                liveClarificationId: es?.id,
                                onPickIdea: ee ? G : void 0,
                                onAskForIdeas: ee ? V : void 0,
                                draftHasText: B,
                                onApprovePlan: ee ? e_ : void 0,
                                onRestoreVersion: Z || eE ? void 0 : s,
                                scrollerRef: y,
                                stickToBottomRef: w,
                                pinned: C,
                                onUnpin: E,
                                handleRef: k,
                                onShowsLatestChange: P,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: dp.NJ,
                        children: (0, a.jsx)(dm, {
                            projectId: l,
                            thinking: eE,
                            turnStartedAt: eI,
                            restoring: Z,
                            remixStartedAt: F,
                            recalling: eC,
                            thinkingActivity: h,
                            compacting: p,
                            saving: v,
                            projectUsage: m,
                            connState: d,
                        }),
                    }),
                    null == es
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ey,
                              className: ej ? `${dp.B5} ${dp.J9}` : dp.B5,
                              children: (0, a.jsx)(
                                  a2,
                                  { projectId: l, clarification: es, onSubmit: ee ? H : void 0, onDismiss: eo },
                                  es.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ey,
                              className: dp.B5,
                              children: (0, a.jsx)(
                                  af,
                                  { projectId: l, request: ed, canSend: ee, onDismiss: em },
                                  ed.id,
                              ),
                          }),
                    null == ex
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == es && null == ed ? ey : void 0,
                              className: dp.B5,
                              children: (0, a.jsx)(ie, { projectId: l, request: ex, onDismiss: ev }, eg?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dp.Jx,
                children: [
                    (0, a.jsx)(ai, {
                        onJumpToActivity: R,
                        line: ez,
                        placement: eE && "bottom" === eD ? "bottom" : null,
                        todos: eF,
                        todosLive: eq,
                        provisionalTodo: eO,
                        agents: eU,
                    }),
                    0 === $.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dp.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: A.intl.formatToPlainString(N.default["7b49dS"], {
                                          count: $.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: A.intl.string(N.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(et.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: A.intl.string(N.default["/zOv9+"]),
                                      onClick: () => nw(l),
                                  }),
                              ],
                          }),
                    null == z
                        ? null
                        : (0, a.jsx)("div", {
                              className: dp.qB,
                              children: (0, a.jsx)(tZ.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: z.message,
                                  action: z.retry,
                              }),
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dp.Db,
                              children: [
                                  (0, a.jsx)(tZ.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: dp.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: A.intl.string(A.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tn.K, {
                                              "aria-label": A.intl.string(A.t.WAI6xu),
                                              icon: en.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: D.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(ux, {
                        projectId: l,
                        canSend: ee,
                        running: eE,
                        restoring: Z,
                        onSend: q,
                        hasPendingContext: $.annotations.length > 0,
                        onInterrupt: ee ? U : void 0,
                        onUploadFile: X,
                        onImport: u,
                        onApprove: eM,
                        suggestion: eA,
                        questionOpen: null != es || null != ed || null != ex,
                        modelSettings: j,
                        onModelSettingsChange: W,
                        onDraftHasTextChange: K,
                    }),
                ],
            }),
        ],
    });
}
var dv = n(761508),
    dj = n(933294),
    db = n(207438),
    dy = n(683438);
function dk(e, t) {
    return String(e).padStart(t, "0");
}
function dw(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dk(l.getHours(), 2)}:${dk(l.getMinutes(), 2)}:${dk(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dk(l.getMilliseconds(), 3)}` : r;
}
var dC = n(667931);
let dN = {
        op: "Operation",
        model: "Model",
        tool: "Tool",
        setup: "Setup",
        worktree: "Git worktree",
        sandbox: "Sandbox",
        build: "Build",
        platform: "Platform",
        other: "Other",
    },
    dA = { running: "Running", ok: "Done", error: "Failed" };
function dS(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dE(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function dI(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function dM(e) {
    return dE(e.count > 1 ? e.totalMs : e.end - e.start);
}
let d_ = ["Arguments", "Result", "Usage", "Details"];
function dP(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function dT(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function dR(e) {
    let t = (0, dC.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dC.lp)(e) ? "interrupted" : "still running";
}
function dL(e) {
    return [dw(new Date(e.started_at).toISOString()) ?? "", dI(e.spans.length), (0, dC.Sj)((0, dC.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function d$(e) {
    let t = (0, dC.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dC.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += dD(r, "in")),
                (l.output += dD(r, "out")),
                (l.cacheRead += dD(r, "cache_read")),
                (l.cacheWrite += dD(r, "cache_write")),
                (l.costUsd += dD(r, "cost_usd"))));
    }
    let r = dC.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function dD(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dz = n(738188),
    dF = n(430993),
    dO = n(364840),
    dq = n(224640),
    dU = n(20742);
let dG = { collapsed: new Set(), revealed: new Set() };
var dB = n(872892);
let dK = {
    op: dB.Q,
    model: dB.i3,
    tool: dB.dH,
    setup: dB.kc,
    worktree: dB.Qx,
    sandbox: dB.QH,
    build: dB.F1,
    platform: dB.Op,
    other: dB.fv,
};
function dV(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      dI(t.calls, "model call"),
                      `${dS(t.input)} in`,
                      `${dS(t.output)} out`,
                      `${dS(t.cacheRead)} cache read`,
                      `${dS(t.cacheWrite)} cache write`,
                      dT(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: dB.M1,
        children: [
            (0, a.jsx)("div", {
                className: dB.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${dB.DJ} ${dK[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: dB.o1,
                children: dC.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dE(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: dB.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${dB.nf} ${dK[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: dN[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(Q.E, {
                                          variant: "text-xs/normal",
                                          color: "text-subtle",
                                          tabularNumbers: !0,
                                          children: l,
                                      }),
                            ],
                        },
                        e,
                    );
                }),
            }),
            null == n
                ? null
                : (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function dH(e) {
    return `conjure-perf-trace-${e}`;
}
function dW(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: dB.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${dB.p0} ${s + o > 85 ? dB.EU : dB.jh}`,
                children: i,
            }),
        ],
    });
}
function dX(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : lp.a,
        m = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        f = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${dB.$y} ${r ? dB.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: dB.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: dB.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: dB.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: dB.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${dB.nf} ${dK[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: dB.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: dB.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: dB.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dz.WarningIcon, { size: "xs", color: "currentColor", className: dB.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dW, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${dB.M0} ${dB.Nh}`
                    : t.running
                      ? `${dB.M0} ${dB.rF}`
                      : `${dB.M0} ${dK[t.category]}`,
                duration: dM(t),
            }),
        ],
    });
}
function dJ(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dH(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${dB.$y} ${l ? dB.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: dB.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: dB.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: dB.U9 }),
                    (0, a.jsx)("span", { className: `${dB.nf} ${dB.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: dB.MQ,
                        children: dI(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dW, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${dB.M0} ${dB.ab} ${dB.dL}`,
                duration: dE(t.totalMs),
            }),
        ],
    });
}
function dY(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: dB._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: dB.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${dB.nf} ${dK[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [dP("Start", `+${dE(e.start)}`), dP("Duration", dM(e))];
                      e.count > 1
                          ? t.push(
                                dP("Calls", String(e.count)),
                                dP("Longest call", dE(e.maxMs)),
                                dP("Spread over", dE(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(dP("Self time", dE(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(dP("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(dP("Notes", l.join(", "))),
                          null != e.span.error && t.push(dP("Error", e.span.error)));
                      let r = new Map();
                      for (let [t, n] of Object.entries({
                          ...e.span.attrs,
                          ...(1 === e.count ? e.span.details : null),
                      })) {
                          var a, i;
                          let l =
                                  ((a = e),
                                  "args" === (i = t) || i.startsWith("arg ")
                                      ? "Arguments"
                                      : "result" === i || "result_chars" === i
                                        ? "Result"
                                        : "model" === a.service
                                          ? "Usage"
                                          : "Details"),
                              s = "cost_usd" === t ? dT(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), dP(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...d_.flatMap((e) => {
                              let t = r.get(e);
                              return null == t ? [] : [{ title: e, rows: t }];
                          }),
                      ];
                  })(t).map((e) => {
                      let { title: t, rows: n } = e;
                      return (0, a.jsxs)(
                          i.Fragment,
                          {
                              children: [
                                  null == t
                                      ? null
                                      : (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: dB.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(Q.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: dB.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(Q.E, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            tabularNumbers: !0,
                                                            selectable: !0,
                                                            children: n,
                                                        }),
                                              ],
                                          },
                                          t,
                                      );
                                  }),
                              ],
                          },
                          t ?? "timing",
                      );
                  }),
              ],
          });
}
function dQ(e) {
    let { trace: t } = e,
        n = i.useMemo(() => d$(t), [t]);
    return (0, a.jsx)(dV, { stats: n });
}
function dZ(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dC.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? dG : (0, dC.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dC.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dC.x7)(t)), l((n) => (0, dC._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, dC.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dC.IE)(t, e);
                        null != n && l((e) => (0, dC.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dC.IE)(t, e);
                        null != n && l((e) => (0, dC.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, dC.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, dC.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dC.hB)(t));
                }, [t]),
                p = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: p?.kind === "node" ? p.node : null,
                toggle: u,
                reveal: c,
                expandSubtree: d,
                select: a,
                expandAll: m,
                collapseAll: f,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: m } = n,
        f = (0, dC.dj)(t),
        h = i.useMemo(() => (0, dC.nF)(f), [f]),
        p = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        g = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) m(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(dH(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dF.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: dB.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: dR(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: dL(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${dI(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dQ, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: dB.KE,
                        children: [
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(et.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: "Shift-click a span to expand everything under it.",
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        role: "tree",
                        tabIndex: 0,
                        "aria-label": "Spans",
                        "aria-activedescendant": null == o ? void 0 : dH(o),
                        className: dB.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: dB.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: dB.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: dB.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${dB.io} ${(e / f) * 100 > 85 ? dB.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dE(e),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                ],
                            }),
                            l.map((e) =>
                                "node" === e.kind
                                    ? (0, a.jsx)(
                                          dX,
                                          {
                                              node: e.node,
                                              extent: f,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: m,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(dJ, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dO.j, { children: (0, a.jsx)(dY, { node: s }) }),
        ],
    });
}
function d0(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([co.A], () => co.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dq.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(dU.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dF.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dZ, { trace: i }),
        ],
    });
}
let d1 = { running: dB.Vf, ok: dB.mo, error: dB.Sr };
function d2(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${dB.Om} ${d1[t]}`, role: "img", "aria-label": dA[t] });
}
function d3(e, t) {
    (0, tv.openModal)((n) => (0, a.jsx)(d0, { ...n, projectId: e, traceId: t }));
}
function d5(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => d3(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: dB.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: dB.sU,
                children: [
                    (0, a.jsx)(d2, { status: (0, dC.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: dB._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: dR(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: dL(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function d4(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            y(
                new Blob(
                    [
                        JSON.stringify({
                            kind: "conjure.timing_traces",
                            version: 1,
                            project_id: t,
                            exported_at: new Date().toISOString(),
                            traces: n,
                        }),
                    ],
                    { type: "application/json" },
                ),
                `conjure-traces-${t}.json`,
            ).catch((e) => {
                console.error("[conjure] trace export failed", t, e);
            });
        }, [t, n]);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eo.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eu.rX, {
                    children: (0, a.jsx)(eu.Dr, {
                        id: "export",
                        label: "Export as JSON",
                        disabled: 0 === n.length,
                        action: r,
                    }),
                }),
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(tn.K, {
                ...e,
                buttonRef: l,
                icon: tl.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function d6(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([co.A], () => co.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        s = i.useMemo(() => {
            let e;
            return "" === (e = l.trim().toLowerCase())
                ? n
                : n.filter((t) =>
                      (function (e) {
                          let t = [e.name];
                          for (let n of e.spans)
                              for (let e of (t.push(n.name, n.error ?? ""),
                              [...Object.values(n.attrs ?? {}), ...Object.values(n.details ?? {})]))
                                  t.push(String(e));
                          return t.join(" ").toLowerCase();
                      })(t).includes(e),
                  );
        }, [n, l]),
        u = i.useMemo(() => [...s].reverse(), [s]),
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(d$);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dC.BF.map((e) => ({
                            category: e,
                            ms: n((t) => t.categories.find((t) => t.category === e)?.ms ?? 0),
                        })),
                        busyMs: n((e) => e.busyMs),
                        model: {
                            calls: n((e) => e.model.calls),
                            input: n((e) => e.model.input),
                            output: n((e) => e.model.output),
                            cacheRead: n((e) => e.model.cacheRead),
                            cacheWrite: n((e) => e.model.cacheWrite),
                            costUsd: n((e) => e.model.costUsd),
                        },
                    };
                })(s),
            [s],
        );
    return 0 === n.length
        ? (0, a.jsxs)("div", {
              className: dB.Ie,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: dB.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: dB.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: dB.fH,
                              children: (0, a.jsx)(dy.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(d4, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rV.Ch, {
                      className: dB.XG,
                      children: [
                          (0, a.jsx)(dV, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: dB.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(d5, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function d7(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function d8(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function d9(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function me(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mt(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mn(e) {
    return A.intl.string("preview" === e ? N.default["2yLYlG"] : N.default.eiAi57);
}
let ml = ["all", "preview", "stable", "web"];
function mr(e) {
    switch (e.reason) {
        case "local":
            return A.intl.string(N.default.mUeKML);
        case "unconfigured":
            return A.intl.string(N.default.bGefb5);
        case "unauthorized":
            return A.intl.string(N.default.KLx6Bb);
        default:
            return null != e.detail
                ? A.intl.formatToPlainString(N.default.t09Q6q, { detail: e.detail })
                : A.intl.string(N.default["t+tG59"]);
    }
}
function ma(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : A.intl.formatToPlainString(N.default["XO/bN4"], {
              p50: d7(e.memory_p50_bytes ?? 0),
              p999: d7(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let mi = {
    db: () => N.default["7l+DFG"],
    db_preview: () => N.default.FAuffi,
    runtime: () => N.default["Gkl+ab"],
    runtime_preview: () => N.default.ynpJzv,
    bot: () => N.default["5/i0cj"],
    bot_preview: () => N.default.m2jsnw,
};
var ms = n(911608),
    mo = n(177427);
function mu(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mo.KE,
        children: [
            (0, a.jsx)("div", {
                className: mo.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(el.y, { type: el.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: A.intl.string(N.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.formatToPlainString(N.default.INVO50, { time: me(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: A.intl.string(N.default.oKEgiu), onClick: l }),
        ],
    });
}
function mc(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mo.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: mo.Gf, children: t }),
            n,
        ],
    });
}
function md(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mo.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mo.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mo.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mo.kS,
                        children: [
                            s,
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function mm(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mo.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mo.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(ms.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mo.dh : void 0,
            }),
        ],
    });
}
function mf(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(md, {
            label: A.intl.string(N.default.SXP7pD),
            value: A.intl.string(N.default.E5hKVi),
            hint: mr(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(md, {
            label: A.intl.string(N.default.SXP7pD),
            value: "\u2014",
            hint: A.intl.string(N.default.AGvoMJ),
        });
    let l = ma(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(md, { label: A.intl.string(N.default["H/X+FI"]), value: d8(n.cpu_ms) }),
            null != l && (0, a.jsx)(md, { label: A.intl.string(N.default.lmFmMO), value: l }),
        ],
    });
}
function mh(e) {
    let { analytics: t } = e,
        n = A.intl.string(N.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mc, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: mr(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? mi[t] : null) ? A.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mc, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: A.intl.string(N.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          md,
                          {
                              label: n,
                              value: A.intl.formatToPlainString(N.default["w/2voO"], { cpu: d8(t.cpu_ms) }),
                              hint: ma(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var mp = n(678708),
    mg = n(414499),
    mx = n(714800),
    mv = n(81466),
    mj = n(424383),
    mb = n(816943),
    my = n(268791),
    mk = n(872351),
    mw = n(708988),
    mC = n(150934),
    mN = n(417270);
let mA = "Restart Agent",
    mS = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function mE(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function mI(e, t) {
    return { label: e, value: null != t && "" !== t ? me(t) : "Unknown", icon: "calendar" };
}
function mM(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function m_(e, t, n, l) {
    let [r, a] = mS[n.status];
    return { label: e, value: `${mM(n.bytes)} of ${mM(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function mP(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = me(e.at);
    return e.ok
        ? { label: "Last Save", value: `OK (${e.status ?? "saved"})`, hint: t, icon: "save", state: "ok" }
        : {
              label: "Last Save",
              value: "Failed",
              hint: null != e.error ? `${t} \xb7 ${e.error}` : t,
              icon: "save",
              state: "error",
          };
}
let mT = { main: "Main vs Remote", wip: "WIP vs Remote" };
function mR(e) {
    let t = `container ${mE(e.local)} \xb7 remote ${mE(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: mT[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${d9(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${d9(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${d9(n)} Ahead, ${d9(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let mL = ["main", "wip"];
var m$ = n(400154);
let mD = {
        checkout: mp.FolderIcon,
        edit: ap.PencilIcon,
        remote: mg.h,
        commits: mx.e,
        calendar: mv.CalendarIcon,
        save: mj.L,
        objects: ed.R,
        download: mb.$,
        size: my.$,
        file: oM.FileIcon,
    },
    mz = {
        ok: [oy.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dz.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [lG.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [mk.z, ea.A.colors.ICON_MUTED],
        behind: [mw.M, ea.A.colors.ICON_MUTED],
    };
function mF(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([co.A], () => co.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, db.DK)(t), [t]),
        },
        l = (function (e) {
            let { pending: t, error: n, info: l, observedAt: r } = e;
            if (t) return { line: "Reading the repository", critical: !1 };
            if (null != n) return { line: n, critical: !0 };
            if (null == r) return { line: "", critical: !1 };
            let a = [];
            if (null != l) {
                l.running
                    ? null != l.localError
                        ? a.push([`Workspace unreadable: ${l.localError}`, !0])
                        : null != l.localWarning && a.push(["Read stopped early; some rows were not read", !0])
                    : a.push(["Workspace not running", !1]);
                let { status: e, error: t } = l.remote;
                ("missing" === e && a.push(["Remote repository missing", !0]),
                    "error" === e && a.push([`Remote read failed: ${t ?? "unknown error"}`, !0]),
                    "disabled" === e && a.push(["Source repositories are off", !1]));
            }
            return {
                line: [
                    `Updated ${me(r)}`,
                    ...a.map((e) => {
                        let [t] = e;
                        return t;
                    }),
                ].join(" \xb7 "),
                critical: a.some((e) => {
                    let [, t] = e;
                    return t;
                }),
            };
        })(n);
    return (0, a.jsxs)(mc, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: m$.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        role: "status",
                        color: l.critical ? "text-feedback-critical" : "text-muted",
                        children: l.line,
                    }),
            }),
            null != n.info &&
                (function (e) {
                    var t;
                    let n;
                    if (!e.running || null != e.localError) return [mP(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            mP(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : d9(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = mL.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(mR))
                        : l.push(
                              { label: "Main", value: mE(e.heads.main), icon: "remote" },
                              { label: "WIP", value: mE(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? d9(e.commits) : "Unknown", icon: "commits" },
                            mI("Oldest Commit", e.oldest),
                            mI("Newest Commit", e.newest),
                            mP(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${d9(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${d9(t.loose)} loose (${d7(t.looseBytes)}) \xb7 ${d9(t.packed)} packed in ${n} (${d7(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${d9(t.garbage)} garbage files` : void 0,
                                    icon: "objects",
                                }),
                            ));
                    let a = (function (e) {
                        if (null == e.partialClone) return null;
                        let t = { label: "Partial Clone", icon: "download" };
                        return e.partialClone
                            ? null == e.missingObjects
                                ? { ...t, value: "Yes", hint: "Counting objects not downloaded didn't finish in time." }
                                : {
                                      ...t,
                                      value: `Yes \xb7 ${d9(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                m_(
                                    "Repository Size",
                                    "size",
                                    e.localBytes,
                                    "Local copy: every commit, but only the file versions this container has read.",
                                ),
                            ),
                        null === e.largestFile
                            ? l.push({
                                  label: "Largest File",
                                  value: "Unknown",
                                  hint: "The scan for it didn't finish in time.",
                                  icon: "file",
                              })
                            : null != e.largestFile &&
                              l.push(
                                  m_("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = mD[r],
                        [o, u] = null != i ? mz[i] : [null, void 0];
                    return (0, a.jsx)(
                        md,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: ea.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function mO(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([co.A], () => co.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, db.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = co.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, db.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lB.h.dispatch({
                                    type: "CONJURE_RESTART_AGENT_RESULT",
                                    projectId: e,
                                    outcome: "timed_out",
                                    reason: "No new agent instance answered within 60 s",
                                    observedAt: new Date().toISOString(),
                                }),
                            Math.max(5e3, r + 6e4 - Date.now()),
                        );
                    return () => {
                        (clearInterval(n), clearTimeout(l));
                    };
                }, [e, r]));
            let u = i.useCallback(() => (0, db.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mA,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eW.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: m$.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: m$.nM,
                children: [
                    (0, a.jsx)(mC.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mN.RetryIcon,
                        text: mA,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                role: "status",
                color: "failed" === n.phase ? "text-feedback-critical" : "text-muted",
                children: (function (e) {
                    switch (e.phase) {
                        case "idle":
                            return "Starts a new agent instance; the container keeps running.";
                        case "pending":
                            return "Asking the worker to restart.";
                        case "restarting":
                            return "Restarting; waiting for a new instance to answer.";
                        case "restarted":
                            return `Restarted \xb7 new instance since ${me(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${me(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mq(e, t) {
    return (0, a.jsx)(md, {
        label: e,
        value: A.intl.formatToPlainString(N.default.yHJxuP, { count: d9((0, dr.aM)(t)) }),
        hint: `${d9(t.input_tokens)} in \xb7 ${d9(t.output_tokens)} out \xb7 ${d9(t.cache_read_input_tokens)} cache read`,
    });
}
function mU(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([co.A], () => co.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([co.A], () => co.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([co.A], () => co.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([co.A], () => co.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, db.Lj)(t), [t]),
        f = i.useCallback(() => (0, db.Lj)(t, !0), [t]),
        h = (0, o.bG)([co.A], () => co.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([e0.A], () => e0.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, db.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: m$.Mf,
        children: [
            (0, a.jsx)(mu, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mc, {
                title: A.intl.string(N.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default["9nqym2"]),
                                      value: d9((0, dr.a7)(x.cost_usd)),
                                      hint: A.intl.formatToPlainString(N.default.NCdUIh, { count: d9(x.turns) }),
                                  }),
                                  mq(A.intl.string(N.default.xtxP0e), x.orchestrator),
                                  mq(A.intl.string(N.default["9Sj3SX"]), x.codegen),
                                  mq(A.intl.string(N.default.ANCEo3), (0, dr.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(md, {
                                          label: A.intl.string(N.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${d9(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mc, {
                title: A.intl.string(N.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(N.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  mq(A.intl.string(N.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, dr.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mc, {
                title: A.intl.string(N.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mm, {
                                      label: A.intl.string(N.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: d9,
                                  }),
                                  (0, a.jsx)(md, {
                                      label: A.intl.string(N.default.mRbSns),
                                      value: `${d9(u.tokensBefore)} \u{2192} ${d9(u.tokensAfter)}`,
                                      hint: A.intl.formatToPlainString(N.default.Vq3skS, {
                                          count: d9(u.retainedMessages),
                                          time: me(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? A.intl.formatToPlainString(N.default.GMLCNv, { ceiling: d9(b) })
                                      : A.intl.string(N.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["4BX5KK"]),
                            value: `${d9(c.projected)} / ${d9(c.threshold)}`,
                            critical: !0,
                            hint: A.intl.formatToPlainString(N.default["6ngCax"], { time: me(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: m$.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(N.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return A.intl.string(N.default.wox6Ev);
                                    if ("pending" === e) return A.intl.string(N.default.OcPHQ1);
                                    let t = me(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return A.intl.formatToPlainString(N.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? N.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? N.default.YZb4hK
                                              : N.default.ZoUSVK;
                                    return A.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(et.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: A.intl.string(N.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: A.intl.string(N.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: m$.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(N.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: g,
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return A.intl.string(N.default.mlok8D);
                                    if ("pending" === e) return A.intl.string(N.default["1ugSyK"]);
                                    let t = me(e.observedAt);
                                    return A.intl.formatToPlainString(
                                        "restarted" === e.outcome ? N.default["76mfqO"] : N.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(mO, { projectId: t }),
                ],
            }),
            (0, a.jsx)(mF, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(mc, {
                    title: A.intl.string(N.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(md, {
                                        label: A.intl.string(N.default.CLXHAs),
                                        value: me(j.instance_since),
                                        hint: A.intl.string(N.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(md, { label: A.intl.string(N.default["8V8e1Z"]), value: d9(j.sockets) }),
                                    (0, a.jsx)(md, {
                                        label: A.intl.string(N.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? A.intl.string(N.default.Wv025I)
                                            : A.intl.string(N.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(md, {
                                            label: A.intl.string(N.default["3oUYnv"]),
                                            value: d9(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(mf, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(mc, {
                    title: A.intl.string(N.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default.IlDBN3),
                            value: d9(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["ZdzKR+"]),
                            value: A.intl.formatToPlainString(N.default.yHJxuP, { count: d9(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default.cIhN2W),
                            value: A.intl.formatToPlainString(N.default.yHJxuP, {
                                count: d9(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(md, {
                            label: A.intl.string(N.default["+fOn/q"]),
                            value: d9(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(md, { label: A.intl.string(N.default.kIHga0), value: d9(v.max_build_attempts) }),
                        (0, a.jsx)(md, { label: A.intl.string(N.default.Iw03yW), value: d9(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mG = n(237528),
    mB = n(629584),
    mK = n(531893);
function mV(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mK.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: A.intl.string(N.default.h1SE6R),
              }),
          });
}
function mH(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mK.qf,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: A.intl.string(N.default.h1SE6R),
                  }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: A.intl.string(N.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mK.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mW(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mK.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: A.intl.string(N.default.V7Ri8H),
              }),
          })
        : null;
}
var mX = n(109079);
let mJ = i.memo(function (e) {
    var t;
    let { entry: n, showSource: l } = e,
        [r, s] = i.useState(!1),
        o = i.useId(),
        u = i.useMemo(
            () =>
                (function (e) {
                    let t;
                    if (e.length > 16e3) return null;
                    let n = e.indexOf("{"),
                        l = e.indexOf("["),
                        r = -1 === n ? l : -1 === l ? n : Math.min(n, l);
                    if (-1 === r) return null;
                    let a = e.slice(r).trim();
                    if (a.length < 2) return null;
                    try {
                        t = JSON.parse(a);
                    } catch {
                        return null;
                    }
                    if ("object" != typeof t || null == t) return null;
                    let i = e.slice(0, r).trim(),
                        s = JSON.stringify(t, null, 2);
                    return Array.isArray(t)
                        ? { prefix: i, pretty: s, marker: "[\u2026]", size: t.length }
                        : { prefix: i, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                })(n.message),
            [n.message],
        ),
        c = "error" === n.level ? "text-feedback-critical" : "text-default";
    return (0, a.jsxs)("div", {
        className: mX.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: mX.Mt,
                selectable: !0,
                children: dw(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: mX.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mX.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mX.Cq, children: (0, a.jsx)(mG.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mX.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mG.v, { text: A.intl.string(N.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(Q.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(eh.D, {
                                      className: mX.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": A.intl.string(N.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(lp.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(eT._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(Q.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  A.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? N.default.kUhyUv : N.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(Q.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: mX.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/normal",
                              color: c,
                              selectable: !0,
                              children: n.message,
                          }),
                ],
            }),
        ],
    });
});
function mY(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dj.A], () => dj.A.getLogs(t), [t]),
        l = (0, o.bG)([dj.A], () => dj.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, c] = i.useState(""),
        d = i.useMemo(() => {
            let e;
            return (
                (e = u.trim().toLowerCase()),
                n.filter((t) => {
                    var n;
                    let { log: l } = t;
                    return (
                        "string" == typeof l.message &&
                        "string" == typeof l.level &&
                        "string" == typeof l.ts &&
                        ("all" === r ||
                            ("preview" === (n = l.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                        ("" === e ||
                            l.message.toLowerCase().includes(e) ||
                            l.level.includes(e) ||
                            (l.source?.toLowerCase().includes(e) ?? !1))
                    );
                })
            );
        }, [n, r, u]),
        m = i.useRef(null),
        f = i.useRef(!0);
    i.useEffect(() => {
        f.current && m.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = m.current;
            null != e && (f.current = 32 > e.getDistanceFromBottom());
        }, []),
        p = i.useMemo(
            () =>
                ml.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mn(e);
                            case "web":
                                return A.intl.string(N.default.IVzfVV);
                            default:
                                return A.intl.string(N.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mX.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mX.y4,
                children: [
                    (0, a.jsx)(mB.I, {
                        look: "pill",
                        "aria-label": A.intl.string(N.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mX.KT,
                        children: (0, a.jsx)(dy.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: A.intl.string(N.default["m2+37Y"]),
                            "aria-label": A.intl.string(N.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(mV, { state: l }),
            (0, a.jsxs)(rV.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mX.sx,
                children: [
                    (0, a.jsx)(mW, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mH, {
                              state: l,
                              emptyTitle: A.intl.string(N.default.S7qlPG),
                              emptyBody: A.intl.string(N.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(N.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mJ, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mQ(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mc, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: A.intl.string(N.default.umcjif),
                      }),
        })
    );
}
function mZ(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(md, {
                      label: A.intl.formatToPlainString(N.default["01ZMS4"], { env: mn(n) }),
                      value: ((t = l.connected), A.intl.string(t ? N.default.Wv025I : N.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(md, {
                      label: A.intl.string(N.default["z1dh+F"]),
                      value: d9(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${me(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(md, { label: A.intl.string(N.default.Iz5GnJ), value: d9(l.guild_count) }),
                  (0, a.jsx)(md, {
                      label: A.intl.string(N.default["7UqtNv"]),
                      value: d9(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? A.intl.formatToPlainString(N.default.MasSly, {
                                    code: l.last_close_code,
                                    time: me(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(md, {
                          label: A.intl.string(N.default["x3+JXJ"]),
                          value: d9(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(md, { label: mn(n), value: A.intl.string(N.default.lTHQss) });
}
function m0(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(md, {
        label: mn(t),
        value: A.intl.formatToPlainString(N.default["Xq+wHT"], {
            requests: d9(n.requests),
            failures: d9(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? A.intl.formatToPlainString(N.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: me(n.last_failure.at),
                  })
                : A.intl.formatToPlainString(N.default["7KlGT6"], { time: me(n.since) }),
    });
}
function m1(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(md, {
                label: A.intl.formatToPlainString(N.default["92gVTm"], { env: mn(t) }),
                value: d9(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    md,
                    {
                        label: A.intl.formatToPlainString(N.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? A.intl.formatToPlainString(N.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? A.intl.formatToPlainString(N.default.wxAWNv, { time: me(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function m2(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(md, {
        label: mn(t),
        value: A.intl.formatToPlainString(N.default.suAOj9, { calls: d9(n.calls), errors: d9(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function m3(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mc, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: A.intl.string(N.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mc, {
        title: t,
        children: [
            (0, a.jsx)(md, {
                label: A.intl.string(N.default.xtD4Zp),
                value: d9(n.requests),
                hint: A.intl.formatToPlainString(N.default["7KlGT6"], { time: me(n.since) }),
            }),
            (0, a.jsx)(md, { label: A.intl.string(N.default.gfRhR3), value: d9(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mm, {
                              label: A.intl.string(N.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: d8,
                          }),
                          (0, a.jsx)(md, {
                              label: A.intl.string(N.default.mSKImM),
                              value: d8(r),
                              hint: A.intl.formatToPlainString(N.default.JqMU05, {
                                  total: d8(n.cpu_ms_total),
                                  wall: d8(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(md, {
                      label: A.intl.string(N.default.LEJ5r3),
                      value: A.intl.string(N.default["2Ekb2b"]),
                      hint: A.intl.string(N.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(md, { label: A.intl.string(N.default.xvmL1D), value: d8(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(md, { label: A.intl.string(N.default["4sQYwH"]), value: d9(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(md, {
                label: A.intl.string(N.default.bQenOy),
                value: d9(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: A.intl.formatToPlainString(N.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(md, { label: A.intl.string(N.default.xgpn4Y), value: mt(n.build) }),
        ],
    });
}
function m5(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: A.intl.string(N.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: A.intl.string(N.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: A.intl.string(N.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mc, {
        title: A.intl.string(N.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(md, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(md, {
                                  label: A.intl.formatToPlainString(N.default.u7kJJ4, { env: n }),
                                  value: d7(l.r2_bytes),
                                  hint: A.intl.formatToPlainString(
                                      l.r2_truncated ? N.default.lH0oQw : N.default.m9h02S,
                                      { count: d9(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mm, {
                                      label: A.intl.formatToPlainString(N.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: d7,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function m4(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: m$.Mf,
        children: [
            (0, a.jsx)(mu, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(m3, {
                            title: A.intl.string(N.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m3, {
                            title: A.intl.string(N.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(m5, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mQ, {
                                title: A.intl.string(N.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mZ, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mQ, {
                                title: A.intl.string(N.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m0, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mQ, {
                                title: A.intl.string(N.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m1, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mQ, {
                                title: A.intl.string(N.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(m2, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mh, { analytics: t.analytics }),
                        (0, a.jsxs)(mc, {
                            title: A.intl.string(N.default.fQMpFp),
                            children: [
                                (0, a.jsx)(md, {
                                    label: A.intl.string(N.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mt(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(md, {
                                    label: A.intl.string(N.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mt(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var m6 = n(592465);
function m7(e) {
    let { projectId: t, onClose: n } = e,
        l = n0(),
        [r, s] = i.useState(() => (l && nY?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([co.A], () => co.A.getStatus(t), [t]),
        d = (0, o.bG)([co.A], () => co.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, db.R7)(t), (0, db.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nY || nY.projectId !== e) return null;
            let { traceId: t } = nY;
            return ((nY = null), t);
        })(t);
        return null != e && (d3(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        nQ(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, ti.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: co.A.getStatus(t),
                        last_turn_usage: co.A.getLastTurnUsage(t),
                        last_compaction: co.A.getLastCompaction(t),
                        last_compaction_decline: co.A.getLastCompactionDecline(t),
                        timing_traces: co.A.getTimingTraces(t),
                        logs: dj.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: A.intl.string(N.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        p = A.intl.string(N.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: m6.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(lz.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lz.Ay.Icon, {
                            icon: cE.CopyIcon,
                            tooltip: A.intl.string(N.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lz.Ay.Icon, { icon: en.P, tooltip: A.intl.string(A.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lz.Ay.ChannelIcon, { icon: nt.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lz.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: m6.rf,
                children: [
                    (0, a.jsxs)(dv.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": A.intl.string(N.default.RvvWIh),
                        className: m6.vR,
                        children: [
                            (0, a.jsx)(dv.V.Item, { id: "logs", children: A.intl.string(N.default["+VRYCm"]) }),
                            (0, a.jsx)(dv.V.Item, { id: "worker", children: A.intl.string(N.default["50D0FZ"]) }),
                            (0, a.jsx)(dv.V.Item, { id: "agent", children: A.intl.string(N.default.UkbTK1) }),
                            l ? (0, a.jsx)(dv.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mY, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(m4, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(d6, { projectId: t })
                            : (0, a.jsx)(mU, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var m8 = n(365912),
    m9 = n(873715);
function fe(e) {
    if (null == e || "string" != typeof e.ref || "string" != typeof e.tag) return null;
    let t = e.rect;
    if (
        null == t ||
        "number" != typeof t.x ||
        "number" != typeof t.y ||
        "number" != typeof t.width ||
        "number" != typeof t.height
    )
        return null;
    let n = {
        ref: e.ref,
        role: "string" == typeof e.role ? e.role : "",
        name: "string" == typeof e.name ? e.name : "",
        tag: e.tag,
        rect: { x: t.x, y: t.y, width: t.width, height: t.height },
    };
    return (
        "string" == typeof e.value && (n.value = e.value),
        "string" == typeof e.path && "" !== e.path && (n.path = e.path),
        "string" == typeof e.marker && (n.marker = e.marker),
        n
    );
}
n(884868);
let ft = Object.freeze({ x: -1, y: -1 });
function fn(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fe(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fl = n(192888);
function fr(e, t) {
    return (0, fl.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fn, () => ({ status: "failed" }));
}
var fa = n(108308);
let fi = { x: 25, y: 21 };
function fs(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fo(e, t, n, l) {
    let r = fs(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fu(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function fc(e) {
    let t = e.snapshot ?? e.results.find((e) => null != e.snapshot)?.snapshot;
    if (null == t || !Array.isArray(t.elements)) return null;
    let n = t.viewport?.width,
        l = t.viewport?.height;
    return "number" != typeof n || "number" != typeof l || n < 1
        ? null
        : {
              elements: t.elements,
              viewport: { width: n, height: l },
              url: "string" == typeof t.url ? t.url : "",
              title: "string" == typeof t.title ? t.title : "",
          };
}
function fd(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nS(u),
        m = (0, n1.Zv)(u),
        f = (0, tv.useHasAnyModalOpen)(),
        h = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        p = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [C, S] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        P = i.useRef(null),
        [T, R] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [F, O] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        V = c && !m && !f;
    null == D || (V && D.projectId === u) || z(null);
    let H = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != H) return () => l2(H, "design");
    }, [H]);
    let W = ra(r, V);
    i.useEffect(() => {
        if (!V || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, m9.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? fc(t.response) : null;
                    null == n ? w(!0) : (j(n), nC(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (y(!1), w(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [V, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!V || null == W || null == u) return;
        if (null == v) {
            X.current = W;
            return;
        }
        if (rr(X.current, W)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = W;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, m9.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = fc(e.response);
                        null != l && (j(l), nC(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fe(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nj(u)).active &&
                                0 !== r.size &&
                                nb(u, {
                                    ...n,
                                    annotations: n.annotations.map((e) => {
                                        let t = r.get(e.id);
                                        return null == t ? e : { ...e, target: t };
                                    }),
                                }));
                    });
                }));
        }, 200);
        return () => window.clearTimeout(e);
    }, [V, W, v, d, u, r]),
        i.useEffect(() => {
            if (!V)
                return () => {
                    (S(null), z(null), K(null), j(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        ee = i.useRef(!1),
        en = i.useRef(!1);
    i.useEffect(() => {
        ((en.current = V), V || ((J.current = null), (Y.current = null), (P.current = null), I(!1)));
    }, [V]);
    let el = i.useCallback(
            function e() {
                if (ee.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let n = r();
                null != n &&
                    ((ee.current = !0),
                    fr(n, t).then((t) => {
                        if (((ee.current = !1), en.current)) {
                            if ("picked" !== t.status || fx(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nc(t.target);
                                (R((t) => (fg(t, e) ? t : e)),
                                    S((e) => {
                                        var n;
                                        return ((n = t.target),
                                        null == e || null == n
                                            ? e === n
                                            : e.ref === n.ref &&
                                              e.rect.x === n.rect.x &&
                                              e.rect.y === n.rect.y &&
                                              e.rect.width === n.rect.width &&
                                              e.rect.height === n.rect.height)
                                            ? e
                                            : t.target;
                                    }));
                            }
                            e();
                        }
                    }));
            },
            [r],
        ),
        er = i.useCallback(() => {
            if (null == D) return;
            let e = !q.current;
            (O({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), z(null));
        }, [D]);
    (i.useEffect(() => {
        if (!U) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => G(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [U]),
        i.useEffect(() => {
            if (null == F) return;
            let e = setTimeout(() => O(null), fh);
            return () => clearTimeout(e);
        }, [F]));
    let ea = null == v || null == W || v.viewport.width < 1 ? 1 : W.width / v.viewport.width,
        ei = null != v || k,
        es = i.useMemo(() => v?.elements ?? [], [v]),
        eo = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eo.current = { rect: W, scale: ea };
    }, [W, ea]);
    let eu = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (l2(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nc(e) }));
            },
            [u],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ed = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = M.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = _.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ed);
    let em = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fp || Math.abs(e.clientY - D.at.y) > fp) && (q.current = !0);
                    return;
                }
                if (!ei) return void S(null);
                let t = ec(e, W);
                if (L) {
                    let e = (function (e, t, n) {
                            let l = null,
                                r = 1 / 0;
                            for (let a of e) {
                                let { x: e, y: i, width: s, height: o } = a.rect;
                                if (s < 1 || o < 1 || t < e || n < i || t > e + s || n > i + o) continue;
                                let u = s * o;
                                u < r && ((l = a), (r = u));
                            }
                            return l;
                        })(es, t.x, t.y),
                        n = null != e && fx(e, W, ea) ? null : e;
                    if (null != n) {
                        let e = nc(n);
                        R((t) => (fg(t, e) ? t : e));
                    }
                    S((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), el());
            },
            [W, ea, ei, ec, L, es, D, B, ed, el],
        ),
        ef = null == B ? null : d.find((e) => e.id === B.id),
        eh = V && (E || D?.target.marker != null || ef?.target.marker != null);
    i.useEffect(() => {
        if (eh)
            return () => {
                let e = r();
                null != e && fr(e, ft);
            };
    }, [eh, r]);
    let ep = i.useCallback(() => {
        (I(!1), S(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !ei || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = eo.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), el());
    }, [V, E, ei, L, D, B, el]);
    let eg = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (er(), K(null));
                    return;
                }
                if (null == C || null == W) return;
                let t = ec(e, W);
                eu(
                    C,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? no
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(C, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [C, W, ec, D, B, eu, er],
        ),
        ex = i.useCallback(() => {
            null != u && (S(null), null != nU(u) ? nB(u) : nw(u));
        }, [u]),
        ev = i.useCallback(() => {
            null != u &&
                (null != D
                    ? er()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : ex());
        }, [u, D, B, er, ex]),
        ej = i.useRef(ev),
        eb = i.useRef(u),
        ey = i.useRef(ex);
    i.useLayoutEffect(() => {
        ((ej.current = ev), (eb.current = u), (ey.current = ex));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (V)
            return (
                lq.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        lq.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, lO.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, m8.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == nU(eb.current)) && ey.current());
        }
    }, [V, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ev());
                    return;
                }
                if (null != D || null != B || 0 === es.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == C ? -1 : es.findIndex((e) => e.ref === C.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != C &&
                    (e.preventDefault(),
                    eu(C, no, { x: (W?.left ?? 0) + C.rect.x * ea, y: (W?.top ?? 0) + C.rect.y * ea }));
            },
            [u, D, B, es, C, eu, ev, W, ea],
        ),
        eC = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nu(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nc(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nf}${r}${nh}${nm(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        er(),
                        S(null)));
            },
            [u, D, er],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && nu(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nj(u)).annotations.find((t) => t.id === e)) &&
                        nN(l, p) &&
                        nb(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nj(u)).annotations.find((t) => t.id === e)) &&
                        nN(n, p) &&
                        nb(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eE = c
            ? b
                ? A.intl.string(N.default["Eb/YV9"])
                : k
                  ? A.intl.string(N.default.FD30bh)
                  : A.intl.formatToPlainString(N.default.dTSqLF, { count: d.length })
            : "",
        eI = V && null != W,
        eM = E && null == B,
        e_ = D?.target ?? ef?.target ?? null,
        eP = D ?? F,
        eT = D ?? (F?.instant === !0 ? null : F),
        eR =
            null != ef && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = fu(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fo(ef.target, ef.anchor, W, ea), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            fr(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, r]),
        (0, lF.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: fa.Li,
                children: [
                    (0, a.jsx)(eV.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: fa.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": A.intl.string(N.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != C && null == C.marker && null == D && null == B
                                      ? (0, a.jsx)(fv, { box: fs(C, W, ea) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: fa.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: fa.xz,
                                          "data-shown": null != C && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: fa.Ux,
                                              children: [
                                                  null == T
                                                      ? null
                                                      : (0, a.jsx)("span", { className: fa.Tl, children: T.kind }),
                                                  null == T || "" === T.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: fa.kh,
                                                            children: [" ", T.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: fa.Y,
                                      children: eM ? (0, a.jsx)("div", { className: fa.u }) : null,
                                  }),
                                  null == eT
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: fa.aZ,
                                            style: {
                                                transform: `translate3d(${eT.at.x + 20}px, ${eT.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: fa.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: fa.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: fa.Tl,
                                                            children: eT.label.kind,
                                                        }),
                                                        "" === eT.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: fa.kh,
                                                                  children: [" ", eT.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: fa.D0, style: fs(e_, W, ea), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fo(e.target, e.anchor, W, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: fa.xL,
                                              style: { ...fu(n, W), width: 24, height: 24 },
                                              "aria-label": A.intl.formatToPlainString(N.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nd(e.target),
                                              }),
                                              "aria-expanded": B?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == D && K(l);
                                              },
                                              onFocus: () => {
                                                  null == D && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), er(), K(l));
                                              },
                                              children: (0, a.jsx)(fm, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(rn, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: W,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && nu(eP.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: er,
                                            onUploadFile: eN,
                                            closing: null == D,
                                        }),
                                  null != ef && null != B && null != eR
                                      ? (0, a.jsxs)(ff, {
                                            point: eR,
                                            frame: W,
                                            authorId: ef.authorId,
                                            title: nd(ef.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(Z.f, {
                                                          autoFocus: !0,
                                                          label: A.intl.string(N.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: B.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...B, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eA());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: fa.aC,
                                                          children: ef.comment,
                                                      }),
                                                nN(ef, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: fa.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: fa.nv,
                                                                            children: A.intl.string(N.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(N.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(et.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nu(B.draft),
                                                                                  text: A.intl.string(N.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: A.intl.string(
                                                                                      N.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: ef.comment,
                                                                                      }),
                                                                              }),
                                                                    ],
                                                                }),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : null,
                              ],
                          })
                        : null,
                ],
            }),
            document.body,
        )
    );
}
function fm(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eQ.default], () => eQ.default.getUser(t), [t]);
    return (0, a.jsx)(so.eu, {
        src: null == n ? null : sc.Ay.getUserAvatarURL(n),
        size: su._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function ff(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(fi);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: y,
            top: k,
            originX: w,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: y, top: k, "--custom-conjure-card-origin-x": `${w}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: fa.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: fa.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: fa.ip, children: (0, a.jsx)(fm, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: fa.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: fa.zI, children: g }),
        ],
    });
}
let fh = 300,
    fp = 2;
function fg(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fx(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fv(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: fa.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fj = n(659723),
    fb = n(697744),
    fy = n(130324);
function fk(e) {
    let t = (0, fb.c)(),
        { events: n, getDuration: l } = t;
    i.useEffect(() => {
        let e = null,
            t = 0;
        return (
            (e = requestAnimationFrame(function r() {
                ((e = null), null != l()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(r));
            })),
            () => {
                null != e && cancelAnimationFrame(e);
            }
        );
    }, [n, l]);
    let r = (0, rW.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fw(e) {
    let { className: t } = e,
        { Component: n, events: l } = fk(3e4);
    return (0, a.jsxs)("div", {
        className: X()(t, fy.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fy.ol,
                children: A.intl.string(N.default.AyiQEp),
            }),
        ],
    });
}
var fC = n(251363),
    fN = n(944142),
    fA = n(532247),
    fS = n(501628);
function fE(e) {
    let { progress: t } = e,
        { Component: n } = fk(1500),
        l = nZ.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fS.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fS.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function fI(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fN.A], () => (s ? fN.A.getLiveReload(t) : null), [s, t]),
        c = (0, lC.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fA.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fA.QP)(e, s)));
            let m = (0, o.bG)(
                    [lo.A],
                    () => {
                        let e = lo.A.getFrame(n);
                        return (0, lm.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [n],
                ),
                f = i.useRef(m),
                h = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((f.current = m), m && (h.current = !0));
                }, [m]),
                i.useEffect(() => {
                    if (null == r) return;
                    function e() {
                        return a(null);
                    }
                    function t(t) {
                        null != t.target && t.target === (0, fC.ow)(null, n) && e();
                    }
                    ((h.current = f.current), document.addEventListener("load", t, !0));
                    let l = window.setTimeout(() => {
                            h.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", t, !0), window.clearTimeout(l), window.clearTimeout(i));
                    };
                }, [r, n]),
                r
            );
        })(d, m, c),
        h = m ? null : (0, fA.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eV.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fS.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(fE, { progress: h }),
                  })
                : null,
        ],
    });
}
var fM = n(357858),
    f_ = n(343030),
    fP = n(317608),
    fT = n(35367),
    fR = n(228946);
let fL = { width: 1 / 0, height: 1 / 0 };
function f$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fL;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var fD = n(702083);
function fz(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lN.A], () => ({
            mobile: lN.A.isBuilderPreviewMobile(),
            landscape: lN.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [s, u] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = r.current;
        if (null == e) return;
        function t() {
            if (null == e) return;
            let t = { width: e.clientWidth, height: e.clientHeight };
            u((e) => (e?.width === t.width && e.height === t.height ? e : t));
        }
        t();
        let n = new ResizeObserver(t);
        return (n.observe(e), () => n.disconnect());
    }, []);
    let c = null != s && s.width > 0 ? s : null,
        d = n ? f$(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: X()(fD.dw, { [fD.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: X()(fD.R9, { [fD.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var fF = n(347927);
function fO(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: X()(fF.Bf, l && fF.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fF.Ux,
                children: [
                    (0, a.jsx)(ew.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var fq = n(957272);
function fU(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, fT.A)({ applicationId: t, surface: n, launch: l });
    if (((0, fR.A)(t, n), s === fT.n.Launched)) {
        let e = (0, a.jsx)(fP.A, { frameId: i.id, level: f_.A.WithinAppContent, className: fq.Z7, overlay: r });
        return (0, lA.Q5)(n) ? (0, a.jsx)(fz, { children: e }) : e;
    }
    return (0, a.jsx)(fG, { state: s });
}
function fG(e) {
    let { state: t } = e;
    switch (t) {
        case fT.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fq.qs,
                children: (0, a.jsx)(fO, {
                    title: A.intl.string(N.default["9kpdo7"]),
                    body: A.intl.string(N.default.iIA8Nj),
                }),
            });
        case fT.n.NoApplication:
            return (0, a.jsx)(fw, { className: fq.qs });
        case fT.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fq.qs,
                children: (0, a.jsx)(fO, {
                    title: A.intl.string(N.default["7k4GyN"]),
                    body: A.intl.string(N.default.zdIy3R),
                }),
            });
        case fT.n.Error:
            return (0, a.jsxs)("div", {
                className: fq.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: A.intl.string(N.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: fq.tj,
                        children: A.intl.string(N.default.e6GiAZ),
                    }),
                ],
            });
        case fT.n.AwaitingLaunch:
        case fT.n.Loading:
            return (0, a.jsx)("div", { className: fq.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var fB = n(308528),
    fK = n(334738),
    fV = n(688438),
    fH = n(365971),
    fW = n(703462);
function fX(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fW.f,
        children: [
            (0, a.jsx)(sX.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fJ() {
    return (0, a.jsx)("div", { className: fW.f, children: (0, a.jsx)(el.y, {}) });
}
function fY(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, lj.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([ax.A], () => {
            if (null == u) return null;
            let e = ax.A.getDMFromUserId(u);
            return null != e ? ax.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && fB.A.preload(eX.ME, t);
        }, [t]),
        (n = (0, o.bG)([ck.A], () => ck.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fH.Xg)();
            return (
                (0, fK.yl)(t, e),
                () => {
                    (0, fK.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            fB.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(fJ, {})
        : null == u || f
          ? (0, a.jsx)(fX, { message: A.intl.string(N.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(fJ, {})
            : (0, a.jsx)("div", {
                  className: fW.g,
                  children: (0, a.jsx)(fV.A, { channel: c, guild: null, chatInputType: o9.oU.SIDEBAR }, c.id),
              });
}
var fQ = n(887909),
    fZ = n(570962),
    f0 = n(998475);
function f1(e) {
    let {
        label: t,
        title: n,
        subtitle: l,
        header: r,
        body: i,
        actions: s,
        nextStep: o,
        appDetails: u,
        hasContentBackground: c,
        noPadding: d,
        obscured: m,
    } = (0, fQ.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: f0.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: f0.rf,
                children: (0, a.jsx)(fZ.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: f0.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: f0.z3,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(Q.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-default",
                                                    children: l,
                                                })
                                              : null,
                                      ],
                                  })
                                : null,
                            r,
                            (0, a.jsxs)("div", {
                                className: X()(f0.Qs, c ? f0.cw : null, d ? f0.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: f0.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var f2 = n(765671),
    f3 = n(269094),
    f5 = n(714917),
    f4 = n(463660),
    f6 = n(582063);
let f7 = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function f8() {
    (0, u.P0)({ text: A.intl.string(N.default.jj3abP), variant: "critical" });
}
function f9(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = A.intl.string(N.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(he, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: f6.m2,
                        children: (0, a.jsx)(eR.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tn.K, {
                                "aria-label": r,
                                icon: tt.SettingsIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                                onClick: t,
                            }),
                        }),
                    });
                },
            }),
            (0, a.jsx)("input", {
                ref: l,
                type: "file",
                accept: f7.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (f7.includes(n.type)
                                ? n.size > p.aI
                                    ? (0, u.P0)({ text: A.intl.string(N.default.T8Spiu), variant: "critical" })
                                    : (0, f4.M$)(t, n).catch(f8)
                                : (0, u.P0)({ text: A.intl.string(N.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function he(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([f5.A], () => f5.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": A.intl.string(N.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eu.rX, {
                children: [
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: A.intl.string(N.default.uQpDky),
                        icon: aU.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: A.intl.string(N.default.AiAz8J),
                        icon: mN.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, f4.Og)(t).catch(f8));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.fP, {
                    id: "conjure-overlay-background-blur",
                    label: A.intl.string(N.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, f4.Y1)(t, !i) || f8();
                    },
                }),
            }),
        ],
    });
}
let ht = "/assets/7cec34541705c795.webp";
function hn(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, fT.A)({ applicationId: t, surface: lm.ZN });
    return (i.useEffect(() => {
        let e = (0, lm.VA)(t, lm.ZN);
        return () => (0, lS.r)(e);
    }, [t]),
    r.state !== fT.n.Launched)
        ? (0, a.jsx)(fG, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fG, { state: fT.n.Loading })
          : (0, a.jsx)(hl, { lifecycle: r, projectId: n, size: l });
}
function hl(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, f2.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: f6.JH,
        children: [
            (0, a.jsx)(hr, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: f6.dw,
                children: (0, a.jsx)("div", {
                    className: f6.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(f3.A, { frame: t.frame, application: t.application, className: f6.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(f9, { projectId: n }) : null,
        ],
    });
}
function hr(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([f5.A], () => (null != t ? f5.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, s] = i.useState(null),
        [u, c] = i.useState(null),
        [d, m] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => m(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, f4.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(ht);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? ht : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: X()(f6.LO, { [f6.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var ha = n(409478),
    hi = n(652227);
function hs(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            frameLaunchParams: r,
            previewReady: i,
            previewGate: s,
            availability: u,
            activeMode: c,
            widgetApplicationId: d,
            overlayWidgetSize: m = n8,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([a4.A], () => null != f && null != a4.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hi.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hi.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(f1, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hi.RG,
                      children: [
                          (0, le.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(ho, { projectId: f, onResume: g })
                                  : (0, a.jsx)(fU, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hi.qs,
                                        children: (0, a.jsx)(fO, {
                                            wide: !0,
                                            title: A.intl.string(N.default["08U+YO"]),
                                            body: A.intl.string(N.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(ha.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hn, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n ? (0, a.jsx)(fY, { previewApplicationId: n }) : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hi.qs, children: (0, a.jsx)(el.y, {}) })
              : (0, a.jsx)(fw, { className: hi.qs });
}
function ho(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, fM.Pu)(t),
        (0, a.jsx)("div", {
            className: hi.qs,
            children: (0, a.jsx)(fO, {
                wide: !0,
                title: A.intl.string(N.default.MMWEH2),
                body: A.intl.string(N.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: e4.PlayIcon,
                              text: A.intl.string(N.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hu = n(175841),
    hc = n(750506),
    hd = n(867193),
    hm = n(539197),
    hf = n(977020);
function hh(e) {
    let { projectId: t } = e,
        n = (0, hm.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hm.Ie)(e);
                        n((e) =>
                            null != e &&
                            e.left === t.left &&
                            e.top === t.top &&
                            e.width === t.width &&
                            e.height === t.height
                                ? e
                                : t,
                        );
                    }
                    t();
                    let l = window.setInterval(t, 250);
                    return (
                        window.addEventListener("resize", t),
                        () => {
                            (window.clearInterval(l), window.removeEventListener("resize", t));
                        }
                    );
                }, [e]),
                null == e ? null : t
            );
        })(n?.iframe ?? null);
    if (null == n || null == l) return null;
    let { left: r, top: s, width: o, height: u, scale: c } = l;
    function d(e, t) {
        return { "--custom-conjure-cursor-x": `${e * c}px`, "--custom-conjure-cursor-y": `${t * c}px` };
    }
    return (0, a.jsxs)("div", {
        className: hf.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hm.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: X()(hf.hN, hf.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: X()(hf.hN, hf.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: X()(hf.UE, { [hf.SP]: n.shown, [hf.Vq]: n.pressed, [hf.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hp = n(417760);
function hg(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([e0.A], () => null != e && e0.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, x.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, n1.CU)(n),
        c = "controlling" === t,
        d = A.intl.string(c ? (u ? N.default["VJW/5P"] : N.default["+hD2Iz"]) : N.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(et.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: A.intl.string(N.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: X()(hp.M0, hp.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(c7.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(hu.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: hp.ID, children: d }),
                  c ? (0, a.jsx)(eV.A, { children: A.intl.string(N.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hp.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hp.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hp.sp,
                      children: [
                          (0, a.jsx)(hu.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(c7.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hp.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hp.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hp.Rb,
                                            children: A.intl.string(N.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hp.lC, children: m }) : null,
              ],
          });
}
function hx(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, n1.Zv)(null != n && n === l ? t : null),
        u = (function (e) {
            let [t, n] = i.useState(e),
                [l, r] = i.useState(!1);
            return (e !== t && (n(e), r(!e)),
            i.useEffect(() => {
                if (!l) return;
                let e = setTimeout(() => r(!1), 2400);
                return () => clearTimeout(e);
            }, [l]),
            e)
                ? "controlling"
                : l
                  ? "handoff"
                  : "idle";
        })(o),
        c = (0, tv.useHasAnyModalOpen)(),
        d = (0, lu.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lu.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rl(r());
            f((t) => (rr(t, e) ? t : e));
            let t = null == h ? null : rl(h);
            (x((e) => (rr(e, t) ? e : t)), null != h && (0, hd.C)(h.getBoundingClientRect().height));
        }
        e();
        let t = window.setInterval(e, 250);
        window.addEventListener("resize", e);
        let n = null == h ? null : new ResizeObserver(e);
        return (
            null != h && n?.observe(h),
            () => {
                (window.clearInterval(t),
                    window.removeEventListener("resize", e),
                    n?.disconnect(),
                    null != h && (0, hd.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
        y = null != m && m.width < 420,
        k = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        w =
            null == m
                ? void 0
                : (function (e, t) {
                      if (null == t) return { left: e.left, top: e.top, width: e.width, height: e.height };
                      let n = Math.min(e.left, t.left),
                          l = Math.min(e.top, t.top);
                      return {
                          left: n,
                          top: l,
                          width: Math.max(e.left + e.width, t.left + t.width) - n,
                          height: Math.max(e.top + e.height, t.top + t.height) - l,
                      };
                  })(m, g),
        C = (function () {
            let [e] = i.useContext(hc.uY),
                [t] = i.useState(() => document.createElement("div"));
            return (
                i.useLayoutEffect(() => {
                    if (null != e) return (e.prepend(t), () => t.remove());
                }, [e, t]),
                null == e ? document.body : t
            );
        })();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            j
                ? (0, a.jsx)("div", {
                      ref: p,
                      className: hp.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hp.QF,
                          children: (0, a.jsx)(hg, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, lF.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(eV.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? A.intl.string(N.default.oWcemF)
                                : "handoff" === u
                                  ? A.intl.string(N.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, lF.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hp.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hp.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hh, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var hv = n(399503),
    hj = n(853555),
    hb = n(271982),
    hy = n(187645);
let hk = new Map(),
    hw = !1;
function hC() {
    let e = new Map();
    for (let t of new Set([...e0.A.getActivityOrderedProjectIds(), ...(0, n1.T7)()])) {
        if (!(e0.A.isThinking(t) || (0, n1.wK)(t)) || n6.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = B.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, lA.Rc)(t);
            return (0, lm.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hk]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hk.delete(t),
            n.unregisterLookup(),
            hb.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        hk.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hy.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hN(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hk.set(e, l),
                    (l.unregisterLookup = (0, hj.Ng)(e, () => (0, fC.n5)(n, t))),
                    hb.A.registerFrameTarget(t, n, f_.A.Backstage, void 0));
            })(t, n);
    for (let e of hk.values()) hN(e.element);
}
function hN(e) {
    let t = lN.A.isBuilderPreviewMobile();
    e.classList.toggle(hy.L, !t);
    let n = t ? f$(lN.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hA = n(873727),
    hS = n(147248),
    hE = n(418842),
    hI = n(363195),
    hM = n(818023);
let h_ = null;
var hP = n(517461),
    hT = n(761929),
    hR = n(487336);
function hL(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, hP.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, ia.clamp)(u, 360, n),
        m = (0, hT.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: hT.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        f = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), m(e));
            },
            [m],
        );
    return (0, a.jsxs)("div", {
        className: hR.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: hR.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: hR.kL, style: { width: d }, children: l }),
        ],
    });
}
var h$ = n(541940);
function hD(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            showsFrame: f,
            paused: h,
        } = e,
        [p, g] = i.useState(null),
        x = (0, lC.A)(l, s),
        v = x?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([hI.A], () => (0, hA.x4)(hI.A.theme)),
            l = (0, o.bG)([hS.A], () => hS.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([oX.Ay], () => ({
                reducedMotion: oX.Ay.useReducedMotion,
                fontScale: (0, hA.U0)(),
                highContrast: oX.Ay.isHighContrastModeEnabled,
                forcedColors: oX.Ay.useForcedColors,
                underlineLinks: oX.Ay.alwaysShowLinkDecorations,
            })),
            d = nZ.hH.useSetting(),
            m = (0, hE.C)(),
            f = (0, o.bG)(
                [lo.A, lN.A],
                () =>
                    lN.A.isBuilderPreviewMobile() &&
                    lo.A.getFrame(t)?.applicationId === lN.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fC.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hA.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fl.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, f, t, s, d, e, r, m, c]),
            j = i.useRef(v);
        i.useLayoutEffect(() => {
            j.current = v;
        });
        let b = i.useCallback(() => {
            h.current ||
                ((h.current = !0),
                queueMicrotask(() => {
                    ((h.current = !1), p.current || j.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (p.current = !1),
                () => {
                    p.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                b();
            }, [l, b]),
            i.useLayoutEffect(() => {
                (v(), b());
            }, [b, v]),
            i.useLayoutEffect(() => {
                let n = (0, fC.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fC.n5)(e, t) && ((x.current = null), b());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, b]),
            i.useEffect(() => {
                let e = new MutationObserver(b);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [b]));
    })(p, v),
        i.useEffect(() => {
            if (null != t) return (0, hj.Ng)(t, () => (0, fC.n5)(p, v));
        }, [t, p, v]));
    let j = i.useCallback(() => (0, fC.ow)(p, v), [p, v]),
        b = i.useCallback(() => (f ? (0, fC.ow)(p, v) : p), [f, p, v]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: X()(h$.Mh, c),
                children: [
                    u,
                    h
                        ? null
                        : (0, a.jsx)(hx, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: b,
                              frameId: v,
                          }),
                    (0, a.jsx)("div", { ref: g, className: h$.fm, children: d }),
                ],
            }),
            m,
            h
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fd, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: j,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rG, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: j }),
                      ],
                  }),
        ],
    });
}
function hz(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        onCloseChat: m,
        chatHeaderAction: f,
        onRestoreVersion: h,
        onImportProject: p,
        debugOpen: g = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: C,
        overlayWidgetSize: S,
        previewPaused: E = !1,
        onResumePreview: I,
    } = e;
    (0, hv.k)(t, C);
    let M = s.type === lt.U.MAIN || (0, lA.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lN.A], () => ({
            mobile: lN.A.isBuilderPreviewMobile(),
            landscape: lN.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? hM.aX.LANDSCAPE : hM.aX.PORTRAIT), (h_ = e));
                else {
                    if (h_ !== e) return;
                    ((l = hM.aX.UNHANDLED), (h_ = null));
                }
                lB.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let _ = i.useRef(null),
        [P, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rK.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rK.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, n4.HV)(l), () => (0, n4.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                hw ||
                    ((hw = !0),
                    e0.A.addChangeListener(hC),
                    B.Ay.addChangeListener(hC),
                    lo.A.addChangeListener(hC),
                    lN.A.addChangeListener(hC),
                    n6.A.addChangeListener(hC),
                    (0, n1.W3)(hC),
                    hC()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = _.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let R = Math.max(360, P - 320),
        L = d || M;
    return (0, a.jsx)("div", {
        ref: _,
        className: h$.LB,
        children: (0, a.jsx)(hD, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, le.yf)(k, w),
            paused: E,
            mainClassName: null == c ? void 0 : X()(h$.ez, { [h$.zt]: d }),
            content: (0, a.jsx)(hs, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: C,
                overlayWidgetSize: S,
                projectId: t,
                paused: E,
                onResume: I,
                frameOverlay: (0, a.jsx)(fI, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && L
                    ? (0, a.jsx)(hL, {
                          open: d,
                          maxWidth: R,
                          children: (0, a.jsx)("div", {
                              className: h$.cO,
                              children: g
                                  ? (0, a.jsx)(m7, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fj.A, { projectId: t }),
                                            (0, a.jsx)(lz.Ay, {
                                                "aria-label": A.intl.string(A.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(lz.Ay.Icon, {
                                                                  icon: en.P,
                                                                  tooltip: A.intl.string(N.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lz.Ay.Title, {
                                                    children: A.intl.string(A.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: h$.cb,
                                                children: (0, a.jsx)(
                                                    dx,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: h,
                                                        onImportProject: p,
                                                    },
                                                    t,
                                                ),
                                            }),
                                        ],
                                    }),
                          }),
                      })
                    : null,
        }),
    });
}
function hF(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [p, g] = i.useState(!0),
        [v, b] = i.useState(!1),
        y = n0(),
        k = i.useCallback(() => g(!0), []),
        w = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: C, handleRestoreVersion: I } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                o = i.useRef(!1);
            return (
                (a.current = r),
                i.useEffect(
                    () => (
                        (s.current = !0),
                        () => {
                            s.current = !1;
                        }
                    ),
                    [],
                ),
                {
                    restoreState: n,
                    handleRestoreVersion: i.useCallback(
                        function (n) {
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            if (null == e || o.current) return;
                            let c = e.id;
                            function d() {
                                return s.current && a.current === c;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, n3.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, u.P0)({
                                                        text: A.intl.formatToPlainString(N.default.Z4n6LX, {
                                                            title: (0, n2.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, n5.c)(c, r);
                                                null != e && (0, u.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", c, e),
                                                (0, u.P0)({
                                                    text: A.intl.string(N.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        d() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(c, w),
        _ = c?.id ?? null,
        {
            integrationStatus: P,
            isPreviewApplicationLoading: T,
            checkingIntegration: R,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: D,
            installAuthorizeProps: z,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [B.Ay, lb.A],
                    () => (null == r ? null : (B.Ay.getIntegrationStatus(r) ?? lb.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lj.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, le.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                g = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    s.current?.abort();
                    let e = new AbortController();
                    ((s.current = e), l(null));
                    try {
                        await ((0, G.CG)(r)?.catch(() => (0, G.U1)(r, e.signal)) ?? (0, G.U1)(r, e.signal));
                    } catch {
                    } finally {
                        e.signal.aborted || s.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    g(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [g],
            );
            let x = (0, ly.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ly.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await g();
                }, [g, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || m
                        ? null
                        : {
                              ...(0, lk.i)({ applicationId: t, application: c ?? null, guildId: x }),
                              onClose: () => {
                                  j();
                              },
                          };
                }, [m, j, x, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: m,
                previewReady: f,
                hasFrame: h,
                needsPermissionReview: p,
                installAuthorizeProps: b,
            };
        })(c, h),
        F =
            (0, o.bG)([lE.A], () => (null == _ ? void 0 : lE.A.getPublishStatus(_)?.previewAppChannels), [_]) ??
            P?.preview_app_channels,
        {
            availability: O,
            activeMode: q,
            setMode: U,
            frameSurface: K,
            frameSurfaceOptions: V,
            setFrameSurface: H,
            appChannel: W,
            setAppChannel: J,
            frameLaunchParams: Y,
            widgetApplicationId: Z,
        } = (0, la.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: P?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(n7.q7.OVERLAY) === !0,
            previewAppChannels: F,
        }),
        ee =
            ((t = (0, o.bG)(
                [e0.A],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(e0.A.getMessages(_)),
                [_],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : n8);
    ((0, n9.x)(_, (e) => {
        O.modes.includes(e) && U(e);
    }),
        nQ(_, () => {
            (g(!0), b(!0));
        }));
    let en = O.modes.includes("frame"),
        el = (0, o.bG)([n6.A], () => n6.A.isPaused(_), [_]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: es,
            mobilePreview: eo,
            mobilePreviewLabel: eu,
            handleToggleMobilePreview: ec,
            landscapePreview: ed,
            rotatePreviewLabel: em,
            handleRotatePreview: ef,
            previewSurface: eh,
            previewFrame: ep,
            isRefreshing: eg,
            handleRefresh: ex,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    frameSurface: l,
                    frameSurfaceOptions: r,
                    previewAppChannels: a,
                    setMode: s,
                    setFrameSurface: u,
                    setAppChannel: c,
                } = e,
                d = i.useMemo(
                    () =>
                        (function (e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            return e.flatMap((e) =>
                                "frame" === e
                                    ? t.flatMap((t) =>
                                          t === lt.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, r, a),
                    [n, r, a],
                ),
                m = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && c?.(e.appChannel)), s(e.mode));
                    },
                    [c, u, s],
                ),
                f = (0, o.bG)([lN.A], () => lN.A.isBuilderPreviewMobile()),
                h = A.intl.string(f ? N.default.tKGF0Q : N.default.peqEOY),
                p = i.useCallback(() => (0, n4.GG)(!f), [f]),
                g = (0, o.bG)([lN.A], () => lN.A.isBuilderPreviewLandscape()),
                x = A.intl.string(g ? N.default.tunI2l : N.default.DoNdjA),
                v = i.useCallback(() => (0, n4.Lw)(!g), [g]),
                j = (0, lA.jS)(t),
                b = i.useMemo(() => (0, lA.Op)(j, l), [j, l]),
                y = (0, lC.A)(t?.preview_application_id ?? null, b),
                k = (0, lm.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lw.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: p,
                landscapePreview: g,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: c,
            modes: O.modes,
            frameSurface: K,
            frameSurfaceOptions: V,
            previewAppChannels: F,
            setMode: U,
            setFrameSurface: H,
            setAppChannel: J,
        }),
        ev = p && !v,
        ej = A.intl.string(ev ? N.default.JD6Oit : N.default.xjJAQm),
        eb = i.useCallback(() => {
            if (v) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [v]),
        ey = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: ek,
            designFeedbackToggleRef: eC,
            agentDrivingPreview: eN,
            designFeedbackLabel: eA,
            handleToggleDesignFeedback: eS,
        } = (function (e, t, n) {
            let { active: l } = nS(e);
            i.useEffect(() => {
                null != e && l && !t && nw(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, n1.Zv)(e),
                s = A.intl.string(a ? N.default.Sme0T0 : l ? N.default.vn5Rzu : N.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nw(e);
                        (n(), ny(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, er, w),
        [eE] = i.useState(() => j.isPlatformEmbedded && (0, lv.qM)()),
        eI = null != nH(_);
    i.useEffect(() => {
        null != _ && eI && !er && nB(_);
    }, [_, eI, er]);
    let eM = i.useCallback(() => {
            null != _ &&
                (w(),
                (function (e) {
                    if (null != nU(e)) return;
                    let { byProject: t } = nO.getState();
                    nO.setState({ byProject: { ...t, [e]: nq } });
                })(_));
        }, [_, w]),
        e_ = i.useCallback(() => {
            null != _ && nB(_);
        }, [_]),
        eP = eI ? A.intl.string(N.default.tuQ5f3) : eA,
        eT = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eL = i.useCallback(() => b(!1), []),
        e$ = i.useCallback(() => {
            null != _ && (0, n4._j)(_);
        }, [_]),
        eD = i.useCallback(() => {
            null != _ && (el ? (0, n4._j)(_) : (0, n4.di)(_, ep?.id));
        }, [_, el, ep?.id]),
        ez = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ep?.id), (0, x.closeConnection)(e), (0, lS.r)(t)), f());
        }, [c, ep?.id, f]),
        eF =
            ((r = i.useCallback(() => {
                null != c && (k(), (0, x.sendUserMessage)(c.id, A.intl.string(N.default.oU20rd)));
            }, [c, k])),
            {
                onExport: r,
                onImport: (s = M(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = E(e);
                            null != n
                                ? (0, u.P0)({ text: n, variant: "critical" })
                                : (0, eW.A)({
                                      title: A.intl.formatToPlainString(N.default["Gm+u1+"], { name: c.name }),
                                      subtitle: A.intl.string(N.default.M7H3sJ),
                                      confirmText: A.intl.string(N.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          k();
                                          try {
                                              await S(t, e, A.intl.string(N.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(N.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [c, k],
                    ),
                )).open,
                importInput: s.input,
            }),
        eO = i.useCallback(() => {
            null != c && (0, tJ.A)(c, h);
        }, [c, h]),
        eq = (0, le.JR)(q, D)
            ? { type: "permissions", authorizeProps: z }
            : R && null == P
              ? { type: "checking" }
              : void 0,
        eU = (0, o.bG)([B.Ay], () => null != _ && B.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == c && m) || eU) && (0, d.bG)(eX.BVt.CHANNEL(h, eJ.VV.CONJURE));
    }, [h, c, m, eU]);
    let {
            publishOptions: eG,
            publish: eB,
            publishing: eK,
            confirmation: eV,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lD,
                        showConfirmation: (e) => {
                            (s(),
                                r(e),
                                (a.current = window.setTimeout(() => {
                                    ((a.current = null), r(null));
                                }, 1500)));
                        },
                    }),
                    [s],
                ),
                u = i.useMemo(() => ({ guildId: t, platform: o, busy: n }), [t, o, n]),
                c = (0, td.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(_, h, R || T),
        eH = (0, lI.L)(eB?.status ?? null),
        eY =
            null == eB
                ? null
                : (0, a.jsx)("div", {
                      className: t7.As,
                      onMouseDown:
                          null == _ || eB.disabled || eK
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, lM.dx)(_);
                                },
                      children: (0, a.jsx)(eR.m, {
                          text: eH,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eK ? hO : null != eV ? t9.U : void 0,
                              disabled: eB.disabled,
                              onClick: () => eB.run("header"),
                              text: eV ?? eB.label,
                          }),
                      }),
                  }),
        eQ = null == c ? void 0 : () => (0, tf.A)(c.id, { guildId: h, isPreview: !0, publishOptions: eG }),
        eZ = (0, a.jsx)(tQ, {
            title: c?.name ?? A.intl.string(N.default.G1WwgK),
            breadcrumb: { title: A.intl.string(N.default.uk6jhJ), onClick: f },
            project: c,
            onOpenProjectSettings: eQ,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t7.FO,
                          children: [
                              (0, a.jsx)(lx, {
                                  targets: ea,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(q, K, W),
                                  onChange: es,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === q
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: eo ? hG : hU,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            eo && "frame" === q
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: hB,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ed,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(nX, {
                                                enabled: eE && !eI && !eN && !el,
                                                onLongPress: eM,
                                                children: (0, a.jsx)(ei.A.Icon, {
                                                    ref: eC,
                                                    icon: ne.x,
                                                    iconClassName: t7.D8,
                                                    tooltip: eP,
                                                    "aria-label": eP,
                                                    selected: eI || ek,
                                                    disabled: el || (eN && !eI),
                                                    onClick: eI ? e_ : eS,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== q || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(ni.A, { frame: ep }),
                                            (0, a.jsx)(lf, { frame: ep, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: t7.YJ }),
                              y
                                  ? (0, a.jsx)(ei.A.Icon, {
                                        icon: nt.BugIcon,
                                        tooltip: A.intl.string(N.default.Mt5k9d),
                                        "aria-label": A.intl.string(N.default.Mt5k9d),
                                        selected: v,
                                        onClick: eT,
                                    })
                                  : null,
                              (0, a.jsx)(ei.A.Icon, {
                                  icon: tt.SettingsIcon,
                                  tooltip: A.intl.string(N.default.I2XSKe),
                                  "aria-label": A.intl.string(N.default.I2XSKe),
                                  onClick: eQ,
                              }),
                              (0, a.jsx)(tI, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: h,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, B.PV)(c),
                                  canRemix: (0, B.H_)(c),
                                  onRefresh: (0, lm.x1)(ep) ? ex : void 0,
                                  isRefreshing: eg,
                                  onTogglePreviewPaused: "frame" === q ? eD : void 0,
                                  previewPaused: el,
                                  previewPauseDisabled: !el && eN,
                                  onClose: ez,
                                  onExport: eF.onExport,
                                  onImport: eF.onImport,
                                  onRemix: eO,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tv.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("834460"),
                                                  n.e("960521"),
                                              ]).then(n.bind(n, 699760));
                                              return (n) => (0, a.jsx)(t, { ...n, projectId: e });
                                          })
                                      );
                                  },
                                  onHistory: () => {
                                      var e;
                                      return (
                                          (e = {
                                              projectId: c.id,
                                              installScope: c.install_scope,
                                              restoreDisabled: C?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tv.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("620019"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("526192"),
                                                  n.e("551087"),
                                              ]).then(n.bind(n, 438834));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      O.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== O.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ev
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: hq, tooltip: ej, "aria-label": ej, onClick: eb }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: X()(t7.nj, t6.T),
        children: [
            eF.importInput,
            (0, a.jsx)("main", {
                className: t7.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: t7.j5,
                              children: [
                                  eZ,
                                  (0, a.jsxs)("div", {
                                      className: t7.sD,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/semibold",
                                              children: A.intl.string(N.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: A.intl.string(N.default.fINulo),
                                          }),
                                          (0, a.jsx)(et.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: A.intl.string(N.default["WFJ/vb"]),
                                              onClick: () => (0, G.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(td.bI.Provider, {
                              value: eG,
                              children: (0, a.jsx)(
                                  hz,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eC,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Y,
                                      header: eZ,
                                      chatOpen: p,
                                      onCloseChat: ey,
                                      chatHeaderAction: eY,
                                      debugOpen: y && v,
                                      onCloseDebug: eL,
                                      onRestoreVersion: I,
                                      onImportProject: (0, B.PV)(c) ? eF.onImport : void 0,
                                      restoreState: C,
                                      previewReady: L,
                                      previewGate: eq,
                                      availability: O,
                                      activeMode: q,
                                      widgetApplicationId: Z,
                                      overlayWidgetSize: ee,
                                      previewPaused: el,
                                      onResumePreview: e$,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function hO() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t7.Hv, itemClassName: t7.C5 });
}
function hq(e) {
    return (0, a.jsx)(nn.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hU(e) {
    return (0, a.jsx)(nl.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hG(e) {
    return (0, a.jsx)(nr.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hB(e) {
    return (0, a.jsx)(na.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hK(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, o.yK)([B.Ay], () => B.Ay.getOwnedProjects()),
        s = (0, o.yK)([m.Ay], () => m.Ay.getSelfMember(n)?.roles ?? [], [n]),
        p = (0, o.bG)(
            [f.A, h.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && h.A.can(eX.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [g, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [k, w] = i.useState(null),
        C = (0, V.z9)("ConjureScreen"),
        [I, M] = i.useState(null),
        P = (0, c.o)().get(K.f_) === U;
    i.useEffect(() => {
        M(null);
    }, [n, P]);
    let T = i.useMemo(() => (!P && C.some((e) => e.id === n) ? n : U), [C, n, P]),
        R = I ?? T,
        L = R === U ? "user" : "guild",
        $ = R === U ? n : R,
        [z, O] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, s, p]),
        i.useEffect(() => {
            (0, G.dm)(n, j);
        }, [n, j]));
    let q = i.useCallback(
            async (e, t, n, l) => {
                let r = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(r, { templateId: l }),
                    (0, x.stageModelSettings)(r, z ?? D),
                    e(r),
                    (0, d.pX)(eX.BVt.CHANNEL(t, eJ.VV.CONJURE, r)),
                    v(""),
                    O(null));
            },
            [z],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? g).trim(),
                    n = F({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), w(null));
                    try {
                        await q((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, g, b],
        ),
        X = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), w(null));
                    try {
                        await q(
                            (t) => {
                                var n;
                                (0, x.sendUserMessage)(
                                    t,
                                    ((n = e.name),
                                    A.intl.formatToPlainString(N.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            $,
                            L,
                            e.id,
                        );
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, b],
        ),
        J = i.useCallback(
            async (e, t) => {
                let n = await (0, G.gA)({ guild_id: t, install_scope: "guild" });
                return (
                    (0, x.ensureConnection)(n, { templateId: e.id }),
                    (0, x.stageModelSettings)(n, z ?? D),
                    { projectId: n, intake: await (0, H.Yn)(n, e) }
                );
            },
            [z],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            (B.Ay.getProject(t)?.guild_id !== n &&
                (await (0, G.M7)(t, { guild_id: n, preview_guild_id: n }).catch((e) => {
                    throw new _.DS((0, _.hj)(e), (0, _.$k)(e));
                })),
                (0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, t)),
                O(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eX.BVt.CHANNEL(t, eJ.VV.CONJURE, e)), O(null));
            },
            [n],
        ),
        [ee, et] = i.useState(!1),
        en = i.useCallback(
            async (e, t) => {
                let l = E(e);
                if (null != l) return void (0, u.P0)({ text: l, variant: "critical" });
                et(!0);
                let r = null;
                try {
                    ((r = await (0, G.gA)({ guild_id: n, install_scope: t })),
                        (0, x.ensureConnection)(r),
                        (0, x.stageModelSettings)(r, z ?? D),
                        await S(r, e, A.intl.string(N.default["LUc7/5"])),
                        (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, r)),
                        O(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: A.intl.string(N.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, z],
        ),
        el = i.useCallback(
            (e) => {
                (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, d.pX)(eX.BVt.CHANNEL(n, eJ.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (v(e), w(null));
        }, []),
        ei = (0, o.bG)(
            [B.Ay],
            () => {
                if (null == j) return null;
                let e = B.Ay.getProject(j);
                return null == e || (0, B.PV)(e) || e.guild_id === n ? e : null;
            },
            [j, n],
        ),
        es = (0, o.bG)([B.Ay], () => B.Ay.hasFetchedGuildProjects(n), [n]);
    return null != j
        ? (0, a.jsx)(hF, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t8, {
              projects: r,
              modelSettings: z,
              onModelSettingsChange: O,
              idea: g,
              guildId: n,
              submitting: b,
              createError: k,
              createDisabled: "idea" === (t = F({ idea: g, installScope: L, submitting: b })) || "submitting" === t,
              onSelectProject: el,
              onIdeaChange: ea,
              onCreate: W,
              onCreateFromTemplate: X,
              onStartTemplate: J,
              onSubmitTemplate: Y,
              onCancelTemplate: Q,
              onSkipTemplate: Z,
              onImportNewProject: en,
              importing: ee,
              conjureTarget: R,
              onConjureTargetChange: M,
              eligibleGuilds: C,
          });
}
