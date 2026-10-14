(n.r(t), n.d(t, { default: () => hc }));
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
    x = n(723312);
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
async function N(e, t) {
    let n = await (0, k.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new w(n.status);
    return await n.blob();
}
var C = n(248675),
    A = n(660183);
async function S(e, t, n) {
    (0, x.ensureConnection)(e);
    let l = await (0, g.vX)(e, t);
    (0, x.sendUserMessage)(e, n, [l]);
}
function E(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, p.Oq)(e.size, t)
        ? null
        : A.intl.formatToPlainString(C.default.ThxcOX, { size: (0, p.sM)((0, p.Ju)(t)) });
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
            `${"" === n ? "vibegration" : n}.zip`),
        r = await N(e, l);
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
    T = n(361504);
let P = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    R = { main: P, subagent: P, thinking: ["low", "medium", "high", "xhigh", "max"] },
    L = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    $ = { main: L, subagent: L, thinking: R.thinking },
    D = { tier: "balanced", provider: "openai" },
    O = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function q(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var z = n(950305),
    F = n(548118);
let U = "user";
var G = n(371169),
    B = n(260498),
    K = n(941985),
    V = n(16619),
    H = n(952644);
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
    es = n(922016),
    eo = n(980707),
    eu = n(477782),
    ec = n(81369),
    ed = n(664121);
let em = [
    { value: "user", icon: z.UserIcon, nameMessage: C.default.s1TsXl },
    { value: "guild", icon: ed.R, nameMessage: C.default.LlLIJw },
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
                        "aria-label": A.intl.string(C.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eu.rX, {
                            label: A.intl.string(C.default.NyVn6T),
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
                        text: A.intl.string(C.default.NJGZA3),
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
    eN = n(770178),
    eC = n(765548),
    eA = n(595528),
    eS = n(885576),
    eE = n(662429);
let eI = "heading-xxl/semibold",
    eM = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eC.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eN.w)(l, [], { fireOnMount: !0 }),
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
    let d = A.intl.string(C.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eE.x,
        children: t
            ? (0, a.jsx)(ek.H, { children: (0, a.jsx)(ey.o, { ref: e, text: d, variant: eI, delay: null }) })
            : (0, a.jsx)(ew.D, { variant: eI, children: d }),
    });
}
var eT = n(900797),
    eP = n(320448),
    eR = n(866665),
    eL = n(783977),
    e$ = n(344587),
    eD = n(534554),
    eO = n(392208),
    eq = n(837984),
    ez = n(359589),
    eF = n(254575);
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
        h = eO.P.indexOf(t.tier),
        p = d ? eT.t : eP._,
        g = eO.P.map(eD.D0),
        x = (0, eD.Tc)(t.tier),
        { text: v, phase: j } = (0, e$.Q)(x);
    return (0, a.jsx)("div", {
        className: eF.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: X()(eF.t$, { [eF.Zr]: u && c, [eF.GF]: !u }),
            role: "dialog",
            "aria-label": A.intl.string(C.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: X()(eF.Nr, eF.uO, { [eF.Zr]: d && f.entered, [eF.GF]: !d }),
                          children: (0, a.jsx)(ez.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${eF.Nr} ${eF.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eF.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: eF.y6,
                                    "aria-expanded": d,
                                    "aria-label": A.intl.string(C.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: A.intl.string(C.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(p, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: eF.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(Q.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: X()(eF.Z, { [eF.xQ]: "exit" === j, [eF.lm]: "enter" === j }),
                                    children: v,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eF.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: eF.Nb,
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(C.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: A.intl.string(C.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eq.A, {
                                    activeIndex: h,
                                    stops: g,
                                    ariaLabel: A.intl.string(C.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = eO.P[e];
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
        [d, m] = (0, ez.FT)(t, s),
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
                text: A.intl.string(C.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(eh.D, {
                    innerRef: c,
                    className: o ?? eF.hZ,
                    "aria-label": A.intl.string(C.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eL.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eK = n(140735),
    eV = n(442433),
    eH = n(314116),
    eW = n(652215),
    eX = n(746080),
    eJ = n(855793),
    eY = n(434279),
    eQ = n(287809),
    eZ = n(427262),
    e0 = n(245179),
    e1 = n(803306);
let e2 = new Set(),
    e3 = new Map();
function e5(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function e7(e) {
    if (null == e || e2.has(e) || null != eQ.default.getUser(e)) return;
    let t = e3.get(e) ?? 0;
    t >= 3 ||
        (e3.set(e, t + 1),
        e2.add(e),
        e1
            .wz(e)
            .finally(() => e2.delete(e))
            .catch(() => {}));
}
var e6 = n(782603),
    e4 = n(780338),
    e8 = n(663417),
    e9 = n(70688),
    te = n(173936),
    tt = n(473935),
    tn = n(625903),
    tl = n(408278),
    tr = n(365199),
    ta = n(7437),
    ti = n(147036),
    ts = n(957565),
    to = n(785389),
    tu = n(123917),
    tc = n(860402);
let td = new Set();
var tm = n(329356),
    tf = n(442331),
    th = n(616334),
    tp = n(189714),
    tg = n(733791),
    tx = n(189213),
    tv = n(331322),
    tj = n(192308),
    tb = n(664619),
    ty = n(706935);
function tk(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === l,
        p = h ? (0, tg.fI)(n) : (0, tg.Kd)(n),
        g = h ? null : (0, tg.L4)(n),
        x = (0, tg.Mi)(n),
        v = h
            ? A.intl.formatToPlainString(C.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(C.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tb.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(A.intl.string(h ? C.default["0XDHob"] : C.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tg.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tx.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tg.WX)((0, ty.tb)(C.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tg.J)(n) : A.intl.string(C.default["8OKM1N"]),
        "aria-label": v,
        notice: null == m ? void 0 : { message: m, type: "critical" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: A.intl.string(h ? C.default.aC42bN : C.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(tv.B, {
            gap: 12,
            children: [
                p.length > 0 || null != g
                    ? (0, a.jsx)(ty.Ay, {
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
function tw(e) {
    (0, tj.openModal)((t) => (0, a.jsx)(tk, { ...t, ...e }));
}
var tN = n(587895);
function tC(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, c] = i.useState(null),
        d = (0, o.bG)([tN.A], () => tN.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        m = A.intl.formatToPlainString(C.default.m8KWic, { app: d });
    async function f() {
        (r(!0), c(null));
        let e = await (0, tb.R_)(t.id);
        (r(!1), e)
            ? ((0, u.P0)({ text: A.intl.formatToPlainString(C.default.b8LN7N, { app: d }), variant: "success" }),
              n.onClose())
            : c(A.intl.string(C.default["rE/0SD"]));
    }
    return (0, a.jsx)(tx.a, {
        ...n,
        role: "alertdialog",
        title: m,
        subtitle: A.intl.string(C.default.wve4kB),
        "aria-label": m,
        notice: null == s ? void 0 : { message: s, type: "critical" },
        actions: [
            { text: A.intl.string(A.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: A.intl.string(C.default.GqcQyH),
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
var tA = n(552821);
let tS = [];
function tE(e) {
    (0, u.P0)({ text: e, variant: "critical" });
}
function tI(e) {
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
            onClose: v,
            refreshApplicationId: j,
            previewProjectId: b,
            onCloseMenu: y,
        } = e,
        k = (0, tp.iI)(t),
        w = i.useContext(tm.bI),
        { pending: N, refresh: S } = (0, ta.A)(j ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(td),
                r = i.useRef(td),
                a = i.useCallback((e) => {
                    ((r.current = (0, to.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, to.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, tc.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tu.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, to.rq)(l.error)
                                          ? A.intl.string(C.default["jCQ/1B"])
                                          : A.intl.string(C.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(b ?? null, tE),
        M = (0, o.bG)([tf.A], () => (null == b ? tS : tf.A.getDeclaredConnections(b))),
        _ = i.useMemo(() => (0, to.Xl)(M), [M]),
        T = (0, tg.Bs)(t),
        P = (0, tg.CU)(t) && s,
        R = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: A.intl.string(C.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(C.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: A.intl.formatToPlainString(C.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != j, refreshPending: N, offers: _, connectPending: E }),
        L = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        $ = null != f && c,
        D = s && null != m,
        O = $ || null != d || D || null != h || null != p,
        q = ts.p5 && null != l,
        z = ts.p5,
        F = k ? e6.BellIcon : e4.BellSlashIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: y,
        onSelect: y,
        children: [
            null != g || null != v
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "refresh",
                                    icon: e8.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e8.RefreshIcon },
                                    label: A.intl.string(C.default["p4B/7M"]),
                                    disabled: x,
                                    action: g,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "close",
                                    icon: e9.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e9.DoorExitIcon },
                                    label: A.intl.string(C.default["/TlGcK"]),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            R.length > 0
                ? (0, a.jsx)(eu.rX, {
                      children: R.map((e) =>
                          (0, a.jsx)(
                              eu.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void S();
                                      let t = null == e.connectionType ? null : L.get(e.connectionType);
                                      null != t && I(t);
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
                    label: A.intl.string(k ? C.default.s9rCuH : C.default["a+i/As"]),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, tp.$L)(t, !k),
                }),
            }),
            O
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          $
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: A.intl.string(C.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: A.intl.string(C.default.WsEEP7), action: d })
                              : null,
                          D
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: A.intl.string(C.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(C.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != p
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: A.intl.string(C.default["3hIVou"]),
                                    action: p,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          q
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "copy-link",
                                    label: A.intl.string(A.t.WqhZss),
                                    icon: te.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: te.LinkIcon },
                                    action: () =>
                                        (0, ts.C)((0, ti.n)(l, eX.VV.CONJURE, t), () =>
                                            (0, u.P0)({ text: A.intl.string(A.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eu.Dr, {
                              id: "copy-project-id",
                              label: A.intl.string(C.default["nm/zuU"]),
                              icon: tt.L,
                              leadingAccessory: { type: "icon", icon: tt.L },
                              action: () =>
                                  (0, ts.C)(t, () =>
                                      (0, u.P0)({ text: A.intl.string(C.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || T?.canRemoveBot === !0
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          s
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "settings",
                                    label: A.intl.string(C.default.FzfmQ8),
                                    icon: tn.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tn.SettingsIcon },
                                    action: () =>
                                        (0, th.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: w,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(C.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tw({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          P
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "unpublish",
                                    label: A.intl.string(C.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = B.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tj.openModal)((t) => (0, a.jsx)(tC, { ...t, ...e })));
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
                                        if (null != e && null != T) tw({ project: e, target: T, action: "delete" });
                                        else
                                            (0, eH.A)({
                                                title: A.intl.formatToPlainString(C.default.CJBhb2, { name: n }),
                                                subtitle: A.intl.string(C.default["0OmrVn"]),
                                                confirmText: A.intl.string(A.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
                                                        (0, u.P0)({
                                                            text: A.intl.string(C.default["0XDHob"]),
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
function tM(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tI, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tA.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t["UKOtz+"]),
                              children: (0, a.jsx)(tl.K, {
                                  icon: tr.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": A.intl.string(A.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ei.A.Icon, {
                              icon: tr.MoreHorizontalIcon,
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
var t_ = n(497183),
    tT = n(104171),
    tP = n(286739);
function tR(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: X()(tP.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(tT.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: tT.DN.SIZE_16 }),
    });
}
var tL = n(217846),
    t$ = n(536637),
    tD = n.n(t$),
    tO = n(941650);
function tq(e) {
    var t;
    let n,
        l,
        r,
        s,
        c,
        m,
        h,
        p,
        g,
        x,
        { project: v, guildId: j, onSelect: b, onRemix: y, shared: k = !1 } = e,
        N =
            ((n = v.id),
            (l = v.name),
            (r = i.useRef(!1)),
            (s = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, u.P0)({ text: A.intl.formatToPlainString(C.default.aN2JdD, { name: l }) }),
                    I(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, u.P0)({
                                    text:
                                        409 === (t = e instanceof w ? e.status : null)
                                            ? A.intl.string(C.default["9oqbEw"])
                                            : 404 === t
                                              ? A.intl.string(C.default["0W8uLq"])
                                              : A.intl.string(C.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (c = M(
                    i.useCallback(
                        (e) => {
                            let t = E(e);
                            null != t
                                ? (0, u.P0)({ text: t, variant: "critical" })
                                : (0, eH.A)({
                                      title: A.intl.formatToPlainString(C.default["Gm+u1+"], { name: l }),
                                      subtitle: A.intl.string(C.default.M7H3sJ),
                                      confirmText: A.intl.string(C.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, d.pX)(eW.BVt.CHANNEL(j, eX.VV.CONJURE, n));
                                          try {
                                              await S(n, e, A.intl.string(C.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(C.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, j],
                    ),
                )).open,
                importInput: c.input,
            }),
        _ =
            null == v.updated_at
                ? null
                : A.intl.formatToPlainString(C.default.AXydi3, { time: tD()(v.updated_at).fromNow() }),
        T = (0, eY.wu)(v),
        P =
            (0, o.bG)([f.A], () => (null == T ? null : (f.A.getGuild(T)?.name ?? null)), [T]) ??
            A.intl.string(C.default["3QFps8"]),
        R = (0, o.bG)([B.Ay], () => B.Ay.isProjectDeleting(v.id), [v.id]),
        L =
            ((t = k ? v : null),
            (m = t?.id),
            (h = t?.owner_user_id),
            (p = (0, o.yK)(
                [e0.A],
                () =>
                    null == m
                        ? []
                        : [
                              ...new Set(
                                  e0.A.getMessages(m)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [m, h],
            )),
            i.useEffect(() => {
                null != h && (e7(h), p.forEach(e7));
            }, [h, p]),
            (g = (0, o.bG)([eQ.default], () => (null == h ? null : eQ.default.getUser(h)), [h])),
            (x = (0, o.yK)([eQ.default], () => p.map((e) => eQ.default.getUser(e)).filter((e) => null != e), [p])),
            i.useMemo(
                () =>
                    null == g
                        ? null
                        : {
                              creator: g,
                              collaborators: x,
                              label: (function (e, t) {
                                  let n;
                                  return 0 === t.length
                                      ? A.intl.formatToPlainString(C.default.t5RWBS, { creator: e })
                                      : A.intl.formatToPlainString(C.default["b5uCe/"], {
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
                                  (0, eZ.mG)(g),
                                  x.map((e) => (0, eZ.mG)(e)),
                              ),
                          },
                [g, x],
            )),
        $ = i.useId(),
        D = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: tO.j1, children: v.name }),
        O = {
            projectId: v.id,
            projectName: v.name,
            guildId: j,
            projectGuildId: v.guild_id,
            isOwner: (0, B.PV)(v),
            canRemix: (0, B.H_)(v),
            onRemix: y,
            onExport: N.onExport,
            onImport: N.onImport,
        };
    return (0, a.jsxs)("div", {
        className: X()(tO.OY, { [tO.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eJ.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tL.a, { projectId: v.id }),
            (0, a.jsxs)(eh.D, {
                className: tO.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eV.jA)(e, () => (0, a.jsx)(tI, { ...O, onCloseMenu: eV.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(t_.A, { project: v, size: "card", className: tO.VJ }),
                    (0, a.jsxs)("div", {
                        className: tO.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tO.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eR.m, { text: L.label, ariaHidden: !0, children: D }) : D,
                                    null == L || R ? null : (0, a.jsx)(tR, { creator: L, className: tO.rb }),
                                    R ? null : (0, a.jsx)(tL.n, { projectId: v.id, className: tO.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tO.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tO.Wb,
                                        children: R ? A.intl.string(C.default.Yh5pAc) : P,
                                    }),
                                    null == _ || R
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tO.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tO.zM,
                                                      children: _,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != L ? (0, a.jsx)(eK.A, { id: $, children: L.label }) : null,
            (0, a.jsx)("div", {
                className: tO.M2,
                children: R
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tO.Pl,
                          children: [(0, a.jsx)(tM, { ...O, trigger: "iconButton" }), N.importInput],
                      }),
            }),
        ],
    });
}
var tz = n(246338);
let tF = "user",
    tU = "no-server",
    tG = new Map();
function tB(e) {
    return tG.get(e) ?? null;
}
function tK(e) {
    switch (e) {
        case "all":
        case tF:
        case tU:
            return null;
        default:
            return e;
    }
}
function tV(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tF:
            return "user" === e.install_scope;
        case tU:
            return null == (0, eY.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tH = n(506774);
let tW = "VibegrationsProjectsPanelOpen";
function tX() {
    return tH.w.get(tW) ?? null;
}
function tJ(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tY = n(95264),
    tQ = n(631417);
function tZ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = A.intl.string(C.default.FzfmQ8);
    return (0, a.jsx)(ei.A, {
        hideSearch: !0,
        toolbar: n,
        className: tQ.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tQ.QF,
            children: [
                (0, a.jsx)(er.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ea.A.colors.TEXT_STRONG,
                    className: tQ.Kk,
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
                              className: tQ.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(t_.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ei.A.Title, { className: tQ.Qw, wrapperClassName: tQ.DD, children: t }),
            ],
        }),
    });
}
var t0 = n(683071),
    t1 = n(47167),
    t2 = n(808728),
    t3 = n(994500);
let t5 = "conjuring-help";
var t7 = n(173114);
function t6() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, o.cf)([eQ.default, f.A, t2.Ay, t3.A], () => {
                let e = eQ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eW.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = t2.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, t1.m1)(t, eQ.default, t3.A) === t5;
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
                    ? (0, d.pX)(eW.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tu.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t7.l,
              children: (0, a.jsx)(t0.w, {
                  type: "info",
                  iconAlign: "center",
                  message: A.intl.format(C.default["6anmu1"], { channel: t5, onNavigate: t }),
                  role: "static",
              }),
          });
}
var t4 = n(606128),
    t8 = n(323140);
function t9(e) {
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
            onCancelTemplate: N,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, _] = i.useState(() => ({ guildId: r, filter: tB(r) })),
        P = (M.guildId === r ? M.filter : tB(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tG.set(r, e), _({ guildId: r, filter: e }));
            },
            [r],
        ),
        q = (0, o.yK)(
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
                { id: "conjure-filter-all", value: "all", leading: er.D, label: A.intl.string(C.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tF, leading: z.UserIcon, label: A.intl.string(C.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tU, leading: ed.R, label: A.intl.string(C.default["3QFps8"]) },
                ...q.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [q],
        ),
        V = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tK(P);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [P],
        );
    i.useEffect(() => {
        let e = tK(P);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [P]);
    let H = i.useMemo(
            () =>
                V.filter((e) => tV(e, P)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, P],
        ),
        W = i.useMemo(
            () => [
                {
                    label: A.intl.string(C.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: U,
                            label: A.intl.string(C.default.UPLaGM),
                            leading: z.UserIcon,
                        },
                        ...p.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [p],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tV(e, P))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, P],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tz.Ot)(e, r)
                    ? v(e.id)
                    : (0, u.P0)({ text: A.intl.string(C.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = A.intl.string(C.default.ab1sMf),
        ec = [A.intl.string(C.default["9w+Chc"]), A.intl.string(C.default.WAvmdq), A.intl.string(C.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: A.intl.string(C.default.lGLnE8),
                description: A.intl.string(C.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: A.intl.string(C.default.uJKQTs),
                description: A.intl.string(C.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: A.intl.string(C.default.iF5Oru), description: A.intl.string(C.default.NbDDO6) },
        ],
        eh = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: p,
                        onStart: (t) => k(e.name, t),
                        onSubmit: (t, n, l) => w(e, t, n, l),
                        onCancel: N,
                        onSkip: S,
                    }),
                    (0, tj.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("881965"), n.e("166781")]).then(
                                n.bind(n, 790028),
                            );
                            return (n) => (0, a.jsx)(e, { ...n, ...t });
                        },
                        { modalKey: "ConjureTemplateWizardModal" },
                    ));
                }
                y(e);
            },
            [p, r, N, y, S, k, w],
        ),
        eg = A.intl.string(C.default.zzYLlW),
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
        ey = A.intl.string(C.default["2XcV3x"]),
        ek = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ew = tK(P) ?? r,
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ew), [ew]),
        eC = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eA, eS] = i.useState(tX),
        eE = i.useMemo(() => tH.w.get(tJ(r)) ?? !1, [r]),
        eI = "success" === eC,
        eM = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tV(e, r)),
        eT = eA ?? (!!eM || "error" === eC || (!eI && eE));
    i.useEffect(() => {
        eI && tH.w.set(tJ(r), eM);
    }, [eI, eM, r]);
    let eP = i.useCallback((e) => {
            (tH.w.set(tW, e), eS(e));
        }, []),
        eR = i.useCallback(() => eP(!eT), [eP, eT]),
        eL = i.useCallback(() => eP(!1), [eP]),
        e$ = A.intl.string(C.default.kar7jh),
        eD = eT ? e$ : A.intl.string(C.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: X()(t8.nj, t8.a0, t4.T),
        children: (0, a.jsxs)("div", {
            className: t8.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t8.ps,
                    children: [
                        (0, a.jsx)(tZ, {
                            title: A.intl.string(C.default.uk6jhJ),
                            actions: (0, a.jsx)(ei.A.Icon, {
                                icon: J.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eT,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(Y.Ip, {
                            className: t8.Yy,
                            children: (0, a.jsx)("div", {
                                className: t8.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: X()(t8.Qs, t8.Ix),
                                    children: [
                                        (0, a.jsx)(t6, {}),
                                        (0, a.jsx)(e_, {}),
                                        (0, a.jsxs)("section", {
                                            className: t8.WI,
                                            "aria-label": eg,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t8.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: eg,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(C.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t8.Aw,
                                                    radius: ev,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t8.EA,
                                                                children: (0, a.jsxs)(ep, {
                                                                    disabled: s,
                                                                    ariaLabel: A.intl.formatToPlainString(
                                                                        C.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: X()(t8.nx, t8.rz),
                                                                    onClick: () => eh(e),
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t8.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t8.BK,
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
                                            className: t8.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t8.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: A.intl.string(C.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t8.Aw,
                                                    radius: ej,
                                                    children: ec.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t8.EA,
                                                                children: (0, a.jsx)(ep, {
                                                                    disabled: s,
                                                                    className: t8.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Q.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t8.un,
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
                            className: t8.Yl,
                            children: (0, a.jsxs)("div", {
                                className: X()(t8.Qs, t8.DA),
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
                                        className: t8.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t8.gH,
                                                children: (0, a.jsx)(ee.l, {
                                                    selectionMode: "single",
                                                    label: A.intl.string(C.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: A.intl.string(C.default.NyVn6T),
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
                                                              ? A.intl.string(C.default.s28pGG)
                                                              : A.intl.formatToPlainString(C.default.Wy5aK4, {
                                                                    count: ex,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eB, {
                                                settings: g ?? D,
                                                tiers: O,
                                                choices: (0, T.b)()
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
                                        children: A.intl.string(C.default.NvvCzX),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t8.pA,
                    hidden: !eT,
                    "aria-label": A.intl.string(C.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t8.IR,
                            children: [
                                (0, a.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t8.RM,
                                    children: A.intl.string(C.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t8.Ss,
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
                            className: t8.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t8.Vw,
                                    children: (0, a.jsx)(ee.l, {
                                        selectionMode: "single",
                                        label: A.intl.string(C.default.U6TqU9),
                                        hideLabel: !0,
                                        options: K,
                                        value: P,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t8.wE,
                                    children: A.intl.string(C.default.JQpNkh),
                                }),
                                ("unattempted" === eN || "loading" === eN) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t8.E8, children: (0, a.jsx)(el.y, {}) })
                                    : "error" === eN && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t8.E8,
                                            children: [
                                                (0, a.jsx)(Q.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t8.JS,
                                                    children: A.intl.string(C.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(et.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: A.intl.string(C.default["WFJ/vb"]),
                                                    onClick: () => (0, G.hF)(ew),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t8.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t8.ST,
                                                  children: [
                                                      (0, a.jsx)(er.D, { size: "lg", color: ea.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t8.sI,
                                                          children: A.intl.string(C.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t8.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      tq,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tY.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                H.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t8.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t8.uc,
                                                  children: [
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: A.intl.string(C.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: A.intl.string(C.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t8.Dq,
                                                  children: H.map((e) =>
                                                      (0, a.jsx)(
                                                          tq,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tY.A)(e, r),
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
var ne = n(478016),
    nt = n(604525),
    nn = n(92446),
    nl = n(534890),
    nr = n(646270),
    na = n(31300),
    ni = n(831453),
    ns = n(270593),
    no = n(839214);
let nu = Object.freeze({ x: 0.5, y: 0.5 });
function nc(e) {
    return "" !== e.trim();
}
function nd(e) {
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
function nm(e) {
    let { kind: t, name: n } = nd(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nf(e) {
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
let nh = "[vibegrations:selected] ",
    np = " \u2014 ";
function ng(e) {
    if (!e.startsWith(nh)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nh.length),
        a = r.indexOf(np),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nx = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nv = new Map(),
    nj = new Set();
function nb(e) {
    return nv.get(e) ?? nx;
}
function ny(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nv.set(e, t) : nv.delete(e), [...nj]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function nk(e) {
    let t = nb(e);
    t.active || ny(e, { ...t, active: !0 });
}
function nw(e) {
    let t = nb(e);
    t.active && ny(e, { ...t, active: !1 });
}
function nN(e) {
    nv.has(e) && ny(e, nx);
}
function nC(e, t) {
    let n = nb(e);
    n.active && ny(e, { ...n, context: t });
}
function nA(e, t) {
    return null != t && e.authorId === t;
}
function nS(e) {
    return (
        nj.add(e),
        () => {
            nj.delete(e);
        }
    );
}
function nE(e) {
    let t = i.useCallback(() => (null == e ? nx : nb(e)), [e]);
    return i.useSyncExternalStore(nS, t, t);
}
(n(134528), n(947204));
let nI = { past: [], present: [], future: [] };
function nM(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n_(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function nT(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n_(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n_(e.from, t, n), to: n_(e.to, t, n) };
        case "text":
            return { ...e, at: n_(e.at, t, n) };
    }
}
function nP(e) {
    return e.some((e) => "erase" !== e.kind);
}
function nR(e, t) {
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
function nL(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function n$(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function nD(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => n$(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = n$(e.from, t),
                l = n$(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = n$(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function nO(e) {
    return nP(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let nq = [3, 6, 12],
    nz = [10, 20, 40],
    nF = (0, no.D)(() => ({ byProject: {} })),
    nU = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: nI,
        sketchDismissedFor: null,
    };
function nG(e) {
    return nF.getState().byProject[e] ?? null;
}
function nB(e, t) {
    let n = nG(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = nF.getState();
    nF.setState({ byProject: { ...r, [e]: l } });
}
function nK(e) {
    if (null == nG(e)) return;
    let { [e]: t, ...n } = nF.getState().byProject;
    (nF.setState({ byProject: n }), nN(e));
}
function nV(e, t) {
    null != nG(e) &&
        (nB(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nk(e) : nw(e));
}
function nH(e, t) {
    nB(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return nM(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return nM(
                        e,
                        e.present.map((e) => (e.id === t.id ? nT(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : nM(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : nM(e, []);
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
function nW(e) {
    return nF.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var nX = n(39416);
function nJ(e) {
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
            className: nX.i5,
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
let nY = new Set(),
    nQ = null;
function nZ(e, t) {
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
                nY.add(t),
                () => {
                    nY.delete(t);
                }
            );
        }, [e]));
}
var n0 = n(885386);
function n1() {
    return n0.Q_.useSetting() || !1;
}
var n2 = n(573083),
    n3 = n(128761),
    n5 = n(12177),
    n7 = n(967008),
    n6 = n(951178);
let n4 = { width: 320, height: 240 };
var n8 = n(855859),
    n9 = n(238490),
    le = n(991690),
    lt = n(696645);
function ln(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function ll(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, lt.XV)(e.surface)
                : A.intl.formatToPlainString(C.default["6xVl+N"], {
                      surface: (0, lt.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return A.intl.string(C.default.y5GiL1);
        case "overlay":
            return A.intl.string(C.default["2940LX"]);
        case "bot":
            return A.intl.string(C.default.tjpaGN);
    }
}
var lr = n(598748),
    la = n(294323),
    li = n(627363),
    ls = n(457827),
    lo = n(25451),
    lu = n(280450),
    lc = n(373677),
    ld = n(754027),
    lm = n(165610);
let lf = [];
var lh = n(86147),
    lp = n(729475),
    lg = n(91242),
    lx = n(869146),
    lv = n(475815),
    lj = n(621466);
function lb(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function ly(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, lj.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function lk(e) {
    return (0, lv.a3)(document, e);
}
function lw(e) {
    return i.useSyncExternalStore(lk, () => ly(e));
}
function lN(e) {
    let { frame: t, controlProjectId: n } = e,
        l = lw(t?.id ?? null),
        r = (0, n2.Zv)(n),
        i = (0, o.bG)(
            [lx.A, lg.A],
            () => null != t && lx.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT) && lg.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lm.x1)(t) || i || r) return null;
    let s = lb(t.id);
    if (null == s || !(0, lv.Ub)(s)) return null;
    let u = A.intl.string(l ? A.t.Z7MyNB : A.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? lh.z : lp.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = lb((e = t.id))) && (0, lv.Ub)(n) && (ly(e) ? (0, lv.sP)(n) : (0, lv.tl)(n));
        },
    });
}
var lC = n(559106),
    lA = n(847374),
    lS = n(704745);
function lE(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = A.intl.string(C.default.I2ucou);
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
                        let t = ln(e);
                        return (0, a.jsx)(
                            eu.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: ll(e),
                                checked: t === ln(n),
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
            return (0, a.jsx)(lC.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lS.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(C.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: ll(n),
                        }),
                        (0, a.jsx)(lA.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lI = n(324641),
    lM = n(803101),
    l_ = n(226178),
    lT = n(625180),
    lP = n(672929),
    lR = n(111534),
    lL = n(513845),
    l$ = n(722701),
    lD = n(949616),
    lO = n(535466),
    lq = n(321032),
    lz = n(277085);
function lF(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, lO.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lz.p)(b),
        k = h ?? u;
    function w() {
        (r(), o());
    }
    async function N(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, tm.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? w() : x(A.intl.string(C.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: N,
        children: (0, a.jsx)(tx.a, {
            transitionState: s,
            onClose: o,
            title: A.intl.string(C.default.OmOWDq),
            subtitle: A.intl.string(C.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: A.intl.string(C.default["bz/M68"]), variant: "secondary", onClick: w, disabled: v },
                {
                    text: A.intl.string(C.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != y,
                },
            ],
            children: (0, a.jsxs)(tv.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lq.r, {
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
var lU = n(516288);
function lG(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lU.t)(t, n);
    return (0, a.jsx)(tx.a, {
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
let lB = {
    showPublishBlocked: function (e, t, n) {
        (0, tj.openModal)((l) => (0, a.jsx)(lG, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tj.openModal)(
                (t) =>
                    (0, a.jsx)(lF, {
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
var lK = n(58736),
    lV = n(333007),
    lH = n(775121),
    lW = n(826745),
    lX = n(285796),
    lJ = n(73153);
let lY = [],
    lQ = 1,
    lZ = (0, no.D)(() => ({ draftsByProject: {} }));
function l0(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? lY;
}
function l1(e, t) {
    return l0(lZ.getState(), e, t);
}
function l2(e, t, n) {
    let { draftsByProject: l } = lZ.getState();
    lZ.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function l3(e, t, n, l) {
    let r = l1(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (l2(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function l5(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function l7(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && l5(e, t.ref.id));
}
function l6(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = lZ.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? lY) n ? l7(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    lZ.setState({ draftsByProject: i });
}
function l4(e) {
    return A.intl.formatToPlainString(C.default.JZ59Bo, { size: (0, p.sM)((0, p.Ju)(e)) });
}
function l8(e, t) {
    let n = l1(e, t);
    if (0 !== n.length) {
        for (let t of n) l7(e, t);
        l2(e, t, lY);
    }
}
function l9(e, t) {
    let n = l1(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (l2(e, t, lY), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function re(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = l1(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? l9(e, "chat") : [];
    (0, x.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(lJ.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(lZ.getState().draftsByProject)) l6(e, { deleteFromWorker: !0 });
}),
    lJ.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        l6(t, { deleteFromWorker: !1 });
    }));
var rt = n(922329);
async function rn(e) {
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
var rl = n(153171);
function rr(e, t, n, l) {
    let r = l1(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: lQ++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (l2(e, t, [
            ...l1(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void l3(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    l3(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  l3(e, t, n.localId, { status: "error", errorText: A.intl.string(C.default.E7dS5n) }),
                              p.o2 - 3e5,
                          )
                        : l5(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        l3(e, t, n.localId, { status: "error", errorText: A.intl.string(C.default["kUw/b1"]) }));
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
                        errorText: A.intl.formatToPlainString(C.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, p.Oq)(e.size, t))
                return "image/png" === t && e.size <= p.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await rn(e).catch(() => null);
                              return null != n && (0, p.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: l4(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: l4(t) } };
            let a = p.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function ra(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = lZ.useState((e) => l0(e, t, n)),
        a = i.useCallback((e) => rr(t, n, e, l), [t, n, l]),
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
                null != (r = (l = l1(t, n)).find((t) => t.localId === e)) &&
                    (l7(t, r),
                    l2(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => l9(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function ri(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(rt.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: rl.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: rl.o1,
                onClick: () => n(t.localId),
                "aria-label": A.intl.string(C.default.Slam9g),
                children: (0, a.jsx)(lX.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var rs = n(470779);
function ro(e) {
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
        } = ra({ projectId: t, surface: "design", onUploadFile: f }),
        N = i.useRef(null),
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
        [T, P] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = _.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => P({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let R = T?.height ?? 44,
        L = l.left + 8,
        $ = l.top + 8,
        D = Math.max(n.x, L),
        O = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - R - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: X()(rs.M0, { [rs.ho]: I && !m, [rs.ET]: m }),
        style: { left: D, top: O },
        "data-testid": "conjure-design-compose-bar",
        children: [
            p
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: N,
                              type: "file",
                              multiple: !0,
                              className: rs.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (j(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(eR.m, {
                              position: "bottom",
                              text: A.intl.string(C.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: rs.tY,
                                  onClick: () => N.current?.click(),
                                  "aria-label": A.intl.string(C.default.lgvqSB),
                                  children: (0, a.jsx)(ec.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rs.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(lW.y, {
                autoFocus: !0,
                rows: 1,
                className: rs.hF,
                value: s,
                placeholder: g ?? ("" === r ? A.intl.string(C.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? A.intl.string(C.default.KCYqWL),
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
                      className: rs.ZO,
                      children: v.map((e) => (0, a.jsx)(ri, { draft: e, onRemove: y }, e.localId)),
                  })
                : null,
        ],
    });
}
function ru(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rc(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rd(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? ru(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = ru(e());
                l((e) => (rc(e, t) ? e : t));
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
var rm = n(876798),
    rf = n(48507),
    rh = n(193885),
    rp = n(744898),
    rg = n(803656),
    rx = n(241326),
    rv = n(972213);
function rj(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rb(e, t, n) {
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
let ry = rb("red", rj(ea.A.unsafe_rawColors.RED_400), () => A.intl.string(C.default.tvXfjt)),
    rk = [
        ry,
        rb("yellow", rj(ea.A.unsafe_rawColors.YELLOW_300), () => A.intl.string(C.default.FYuaJ1)),
        rb("green", rj(ea.A.unsafe_rawColors.GREEN_360), () => A.intl.string(C.default["Vv+paS"])),
        rb("blue", rj(ea.A.unsafe_rawColors.BLUE_345), () => A.intl.string(C.default.k9b1QJ)),
        rb("white", rj(ea.A.unsafe_rawColors.WHITE), () => A.intl.string(C.default["1sOXwH"])),
    ];
function rw(e) {
    return rk.find((t) => t.id === e) ?? ry;
}
function rN(e) {
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
function rC(e) {
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
function rA(e) {
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
function rS(e) {
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
let rE = nq.map((e) => rS(Math.min(16, e + 3))),
    rI = nz.map((e) => rS(Math.min(16, e / 2.5))),
    rM = [C.default.jZtZUr, C.default.cTQdD0, C.default.J3ucEg],
    r_ = {
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
            label: () => A.intl.string(C.default.oIZQbm),
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
            label: () => A.intl.string(C.default.ARNVr7),
        },
    };
function rT(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nX.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rm.k, {
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
function rP(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(tl.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rR(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: nX.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: nX.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rL(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rw(n.colorId),
        h = r_[u],
        p = A.intl.string(C.default.hUm825),
        g = A.intl.string(C.default.n5IA3a),
        x = A.intl.string(C.default.r5dX6t),
        v = A.intl.string(C.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nX.t$,
        children: [
            (0, a.jsx)("div", {
                className: nX.NT,
                children: (0, a.jsx)(rT, {
                    icon: rC,
                    label: A.intl.string(C.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => nV(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: nX.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": A.intl.string(C.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rT, {
                        icon: rN,
                        label: A.intl.string(C.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => nV(t, "move"),
                    }),
                    (0, a.jsx)(rT, {
                        icon: rf.x,
                        label: A.intl.string(C.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => nV(t, "text"),
                    }),
                    (0, a.jsx)(rR, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: rh.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (nV(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rE.map((n, l) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n,
                                        label: A.intl.string(rM[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nw(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rR, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (nV(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(r_).map((n) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: r_[n].icon,
                                        label: r_[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (nV(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rR, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rT, {
                                icon: rA,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (nV(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rI.map((n, l) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n,
                                        label: A.intl.string(rM[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nw(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rR, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rP, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rk.map((n) =>
                                (0, a.jsx)(
                                    rT,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                nB(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: nX.Gz, role: "separator" }),
                    (0, a.jsx)(rP, {
                        icon: rp.e,
                        label: A.intl.string((0, j.isMac)() ? C.default["j/XmBQ"] : C.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rP, {
                        icon: rg.U,
                        label: A.intl.string((0, j.isMac)() ? C.default.C7jhpn : C.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rP, {
                        icon: rx.TrashIcon,
                        label: A.intl.string(C.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nX.Gz, role: "separator" }),
                    (0, a.jsx)(rP, { icon: rv.XLargeIcon, label: A.intl.string(C.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let r$ = ea.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rD(e, t, n) {
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
                    (e.strokeStyle = r$),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rO(e) {
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
async function rq(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rO(e),
            r = rO(e);
        if (null == l || null == r) return null;
        return (rD(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rz = new Map(),
    rF = new Map(),
    rU = (0, no.D)(() => ({ byMessageKey: {} }));
function rG(e, t) {
    let { [e]: n, ...l } = rU.getState().byMessageKey;
    rU.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rB(e, t) {
    null == t ? rz.delete(e) : rz.set(e, t);
}
function rK(e) {
    return rz.get(e)?.() ?? Promise.resolve(null);
}
let rV = { dx: 0, dy: 0 },
    rH = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rW = 1;
function rX(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = nW(s),
        { active: u } = nE(s),
        c = (0, tj.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => nK(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nk(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rJ, { projectId: s, state: o, resolveIframe: r });
}
function rJ(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rd(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, x] = i.useState(rV),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(null),
        S = i.useRef(0),
        { tool: E, history: I } = n,
        M = rw(n.colorId),
        _ = "pick" !== E,
        T = "marker" === n.tool ? nq[n.markerSize] : "eraser" === n.tool ? nz[n.eraserSize] : null,
        P = "move" === E ? (I.present.find((e) => e.id === f) ?? null) : null,
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
        let t = await (0, lI.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, lV.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rB(t, L), () => rB(t, null)), [t, L]);
    let $ = i.useCallback(
        (e) => {
            ((N.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === S.current &&
                    (S.current = requestAnimationFrame(() => {
                        S.current = 0;
                        let e = w.current,
                            t = N.current;
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
            s = null == i ? I.present : I.present.map((e) => (e.id === i.id ? nT(e, p.dx, p.dy) : e)),
            o = b.current;
        rD(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, I.present, p]);
    i.useLayoutEffect(D, [D]);
    let O = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        q = i.useCallback(() => {
            let e = k.current;
            if (null == e || null == r) return;
            k.current = null;
            let n = {
                id: `mark-${rW++}`,
                kind: "text",
                color: M.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (nR(n, r) && nH(t, { type: "commit", shape: n }), o(null));
        }, [t, M, r]),
        z = i.useCallback(() => {
            ((k.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != k.current) return void q();
                let t = O(e);
                switch (E) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == P ? null : nD(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = n$(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => n$(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (nL(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = n$(e.from, n),
                                                                  r = n$(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => nL(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = n$(e.from, n),
                                                                  r = n$(e.to, n),
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
                                                              let t = nD(e, n);
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
                                id: `mark-${rW++}`,
                                kind: "erase",
                                width: nz[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rW++}`,
                                kind: "marker",
                                color: M.value,
                                width: nq[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (b.current = {
                                id: `mark-${rW++}`,
                                kind: E,
                                color: M.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                D();
            },
            [r, E, M, P, I.present, n.markerSize, n.eraserSize, O, q, D],
        ),
        U = i.useCallback(
            (e) => {
                $(e);
                let t = O(e),
                    n = y.current;
                if (null != n) return void x({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = b.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (b.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (b.current = { ...l, to: t }),
                    D());
            },
            [O, $, D],
        ),
        G = i.useCallback(() => {
            v.current?.removeAttribute("data-dragging");
            let e = y.current;
            if (null != e) {
                ((y.current = null), x(rV), nH(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = b.current;
            ((b.current = null), null != n && null != r && nR(n, r) ? nH(t, { type: "commit", shape: n }) : D());
        }, [t, r, p, D]),
        B = i.useCallback(() => nK(t), [t]),
        K = i.useCallback(() => nH(t, { type: "undo" }), [t]),
        V = i.useCallback(() => nH(t, { type: "redo" }), [t]),
        H = i.useCallback(() => nH(t, { type: "clear" }), [t]),
        W = i.useRef({ tool: E, selected: P, exit: B, undo: K, redo: V });
    if (
        (i.useLayoutEffect(() => {
            W.current = { tool: E, selected: P, exit: B, undo: K, redo: V };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, lj.Cw)((0, lj.vq)(e.target, HTMLElement) ? e.target : null) ||
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
                    (e.preventDefault(), nH(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rH[s];
                null != o && (e.preventDefault(), nV(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (_) return (lH.A.disable(), () => lH.A.enable());
        }, [_]),
        null == r)
    )
        return null;
    let X = Math.max(8, r.left - d - 8),
        J = null == P ? null : nD(null == y.current ? P : nT(P, p.dx, p.dy), r);
    return (0, lV.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: nX.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: nX.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: v,
                            className: nX.Ji,
                            "data-tool": E,
                            "data-interactive": _ && !u ? "" : void 0,
                            "aria-label": A.intl.string(C.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: F,
                            onPointerEnter: $,
                            onPointerLeave: () => $(null),
                            onPointerMove: U,
                            onPointerUp: G,
                            onPointerCancel: G,
                        }),
                        null == T || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: w,
                                  className: nX.V$,
                                  "data-tool": E,
                                  "data-color": M.id,
                                  style: { width: T, height: T },
                                  "aria-hidden": !0,
                              }),
                        null == J
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nX.r1,
                                  style: { left: J.x, top: J.y, width: J.width, height: J.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: nX.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(ro, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: A.intl.string(C.default["8gX1lw"]),
                          label: A.intl.string(C.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: q,
                          onUploadFile: (e) => (0, g.vX)(t, e),
                          onDismiss: z,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: j,
                    className: nX.ej,
                    style: { left: X, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rL, { projectId: t, state: n, onExit: B, onUndo: K, onRedo: V, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var rY = n(308081);
function rQ(e) {
    lJ.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var rZ = n(689175),
    r0 = n(65593),
    r1 = n(218394),
    r2 = n(115982),
    r3 = n(886540);
function r5(e) {
    return !(0, r3.BL)(e) && !0 !== e.stopRequested;
}
var r7 = n(104317),
    r6 = n(643278),
    r4 = n(566424),
    r8 = n(683063),
    r9 = n(138212);
function ae(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: X()(r9.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: X()(r9.wx, null != n && r9.o5, i),
                children: [
                    (0, a.jsx)(Q.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var at = n(148590);
function an(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function al(e) {
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
        v = f ? lA.a : eP._,
        j = null != n || l;
    return (0, a.jsxs)(ae, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: at.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eh.D, {
                                className: at.L$,
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
        headerClassName: f ? void 0 : at.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: X()(at.rf, o), hidden: !f, children: c })],
    });
}
var ar = n(883646);
let aa = [];
function ai(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: X()(ar.xL, {
            [ar.Vb]: "in_progress" === t,
            [ar.cT]: "completed" === t,
            [ar.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return A.intl.string(C.default.KvBdun);
                case "in_progress":
                    return A.intl.string(C.default["m5G9+S"]);
                case "unfinished":
                    return A.intl.string(C.default.lRpwhD);
                default:
                    return A.intl.string(C.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(el.y, {
                type: el.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: ar.Qd,
                itemClassName: ar.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: ar.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: ar.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function as(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : aa), [n, t]),
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
        className: ar.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r8.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ar.MA,
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
                      className: ar.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function ao(e) {
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
            ((t = (r ?? aa).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? aa) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ar.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: X()(ar.AS, { [ar.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(ai, { status: n }),
                            (0, a.jsx)(Q.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: ar.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: ar.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(as, { agents: u.get(e.id) ?? aa, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: ar.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(ai, { status: "pending" }),
                          (0, a.jsx)(Q.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ar.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ar.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function au(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = A.intl.formatToPlainString(C.default["P/I+JW"], { completed: o, total: u }),
        d = A.intl.formatToPlainString(C.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(al, {
        title: A.intl.string(C.default.RtzECX),
        meta: (0, a.jsx)(an, { children: c }),
        superseded: s,
        showLabel: A.intl.string(C.default.RKyN9q),
        hideLabel: A.intl.string(C.default.xydHoj),
        className: ar.Nr,
        bodyClassName: ar.rf,
        beforeBody: r && !s ? (0, a.jsx)(eK.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(ao, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var ac = n(308665),
    ad = n(59678),
    am = n(903847);
function af(e) {
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
        [w, N] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? k(!0) : N(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        M = i.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: am.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: X()(am.vK, { [am.ho]: p && c, [am.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: X()(am.Rk, ad.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r4.A, {
                                        glyph: (0, a.jsx)(ac.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eh.D, {
                                    className: am.pZ,
                                    onClick: u,
                                    "aria-label": A.intl.string(C.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: X()(am.Rk, ad.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r4.A, {
                                            glyph: (0, a.jsx)(ac.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(eR.m, {
                                    text: A.intl.string(C.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eh.D, {
                                        className: am.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": A.intl.string(C.default.RtzECX),
                                        children: (0, a.jsx)(r6.ClipboardListIcon, {
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
                            className: X()(am.vB, { [am.pg]: x && w, [am.ui]: !x }),
                            children: (0, a.jsx)(au, {
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
var ah = n(890497);
function ap(e) {
    let t = (0, V.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var ag = n(382541);
async function ax(e, t, n) {
    let [l, r] = await Promise.all([(0, ag.d)(t), (0, ag.d)(e)]),
        a = await fetch(`${l.baseUrl}/agent/app-build-request?${new URLSearchParams({ ticket: l.ticket })}`, {
            method: "POST",
            body: JSON.stringify({ caller_ticket: r.ticket, prompt: n }),
        });
    if (!a.ok) throw Error(`app build request failed: ${a.status}`);
}
var av = n(29073),
    aj = n(590077);
function ab(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r } = e,
        s = (function (e, t, n) {
            let l = ap(e),
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
                        ax(e, p.projectId, g).then(
                            () => {
                                let t;
                                return re(
                                    e,
                                    ((t = A.intl.formatToPlainString(C.default.jZlNst, {
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
        className: X()(av.nd, av.jx),
        "aria-labelledby": u,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: av.wx,
                children: [
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        id: u,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: av.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(tl.K, {
                        icon: en.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: r,
                        "aria-label": A.intl.string(C.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aj.r,
                children: [
                    0 === o.length
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.TbbzW5),
                          })
                        : (0, a.jsx)(ah.Z, {
                              label: A.intl.string(C.default["29gr8j"]),
                              placeholder: A.intl.string(C.default.twlOb6),
                              options: o,
                              selectionMode: "single",
                              value: s.targetId,
                              onSelectionChange: s.setTargetId,
                              disabled: s.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(Z.f, {
                        label: A.intl.string(C.default.XZNsDA),
                        value: s.prompt,
                        onChange: s.setPrompt,
                        maxLength: 4e3,
                        disabled: s.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: s.failed ? A.intl.string(C.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: av.qr,
                children: (0, a.jsx)("div", {
                    className: av.zt,
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(C.default.gG4j6o),
                        disabled: !s.canSubmit,
                        loading: s.sending,
                        onClick: s.submit,
                    }),
                }),
            }),
        ],
    });
}
var ay = n(658675),
    ak = n(22231),
    aw = n(123292),
    aN = n(734057);
let aC = {
        [eW.rbe.GUILD_TEXT]: "text",
        [eW.rbe.GUILD_VOICE]: "voice",
        [eW.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eW.rbe.GUILD_STAGE_VOICE]: "stage",
        [eW.rbe.GUILD_FORUM]: "forum",
        [eW.rbe.GUILD_MEDIA]: "media",
    },
    aA = { channel: "#", role: "@", user: "@", project: "" },
    aS = {
        channel: [C.default["9+dfPT"], C.default.pGSJqE],
        role: [C.default["2VkCoD"], C.default.c8YlX8],
        user: [C.default.GZIAxl, C.default["4bptbQ"]],
        project: [C.default.twlOb6, C.default.twlOb6],
    };
function aE(e, t) {
    return A.intl.string(aS[e][+!!t]);
}
var aI = n(155078);
function aM(e) {
    return e.options.some((e) => null != e.image);
}
let a_ = [];
async function aT(e, t) {
    await (0, k.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aP(e, t) {
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
var aR = n(300344),
    aL = n(614733),
    a$ = n(904363),
    aD = n(950902),
    aO = n(384017);
function aq(e) {
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
                        let l = null == (n = aN.A.getChannel(t)?.type) ? void 0 : aC[n];
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
        className: aO.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ah.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ah.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function az(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aR.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aq, { ...l, guildId: t, options: r, placeholder: aE("channel", !0 === l.question.multi_select) });
}
function aF(e) {
    let { guildId: t, ...n } = e,
        l = (0, a$.A)(t);
    return (0, a.jsx)(aq, { ...n, guildId: t, options: l, placeholder: aE("role", !0 === n.question.multi_select) });
}
function aU(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aL.A)(t);
    return (0, a.jsx)(aq, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: aE("user", !0 === n.question.multi_select),
    });
}
function aG(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = ap(t),
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
    return 0 === s.length ? n : (0, a.jsx)(aq, { ...l, options: s, placeholder: aE("project", !1) });
}
function aB(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aD.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aG, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(az, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aF, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aU, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aK = n(87221),
    aV = n(144228),
    aH = n(26430),
    aW = n(750943),
    aX = n(95477),
    aJ = n(256905);
function aY(e, t) {
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
var aQ = n(907702);
function aZ(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = aY(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: X()(aQ.Gt, aQ.b6),
              children: [
                  (0, a.jsx)(aK.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: A.intl.string(C.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: X()(aQ.Gt, { [aQ.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aQ.Sl,
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
function a0(e) {
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
        g = A.intl.formatToPlainString(C.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: X()(aQ.Vs, { [aQ.Q9]: s, [aQ.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: aQ.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": A.intl.formatToPlainString(C.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: aQ.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aZ, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: aQ.Gt }),
                            (0, a.jsx)("span", {
                                className: aQ.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ay.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(aV.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aQ.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aI.E)(t) : "")
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
                      className: aQ.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: A.intl.string(C.default.HQEXJM),
                          children: (0, a.jsx)(tl.K, {
                              icon: rx.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: p,
                              disabled: o,
                              "aria-label": A.intl.string(C.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aQ.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: A.intl.string(C.default["4/eeDD"]),
                            children: (0, a.jsx)(tl.K, {
                                icon: aH._,
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
function a1(e) {
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
                            (0, aJ.R)({
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
                                location: "VibegrationsClarificationImageOptions",
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
                      label: A.intl.string(C.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aQ.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: X()(aQ.fF, "gallery" === f ? aQ.nV : aQ.nM, { [aQ.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            a0,
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
                              a0,
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
            (0, a.jsx)(a2, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: A.intl.string(/\bicons?\b/i.test(l.question) ? C.default.qU4WN6 : C.default.cbMDDB),
            }),
        ],
    });
}
function a2(e) {
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
        className: aQ.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aQ.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: aW.X,
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
                              icon: te.LinkIcon,
                              text: A.intl.string(C.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: aQ.Fg,
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
                                            : Promise.resolve({ errorText: l4(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aQ.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aQ.Hs,
                              children: (0, a.jsx)(aX.k, {
                                  label: A.intl.string(C.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: A.intl.string(C.default.AVhvn8),
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
                              className: aQ.gd,
                              children: [
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(C.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aw.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: A.intl.string(C.default.eXZL4X),
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
function a3(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: X()(aO.uK, { [aO.ue]: l, [aO.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": A.intl.formatToPlainString(c ? C.default["2p6UFz"] : C.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: aO.dy, children: (0, a.jsx)(ay.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aO.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aO.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aO.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aO.ed,
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
                      className: aO.rM,
                      children: A.intl.string(C.default.zku6r1),
                  })
                : null,
        ],
    });
}
function a5(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return aM(n)
        ? (0, a.jsx)(a1, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      a3,
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
let a7 = [],
    a6 = [];
function a4(e) {
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
        className: X()(aO.Ge, aO.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aO.aK,
                      children: A.intl.string(C.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(a5, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aP(o, u),
            }),
            aM(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aO.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aO.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(ak.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: X()(aO.Pu, aO.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a8(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [h, p] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(0),
        [w, N] = i.useState(null),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, T] = i.useState(!1),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        O = null == r,
        q = l.questions.length,
        z = Math.min(y, q - 1),
        F = l.questions[z],
        [U, G] = i.useState({ id: F.id, expanded: !1 }),
        B = U.id === F.id && U.expanded,
        [K, V] = i.useState(null),
        H = c[F.id] ?? "",
        W = !0 === F.multi_select,
        J = aM(F),
        Y = W ? (m[F.id] ?? a7) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : a_),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = A.intl.string(C.default.wTsP5l),
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
                        if (o) return aP(h, m(i));
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
                                                error: { source: "upload", text: A.intl.string(C.default["kUw/b1"]) },
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
                                                        : A.intl.string(C.default.l79PMc),
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
        ee = Z.imageFor(F.id),
        el = Z.selectedFor(F),
        { text: er, phase: ea } = (0, e$.Q)(F.question),
        ei = er === F.question,
        es = ei && K?.id === F.id && K.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            V((t) => (t?.id === F.id && t.truncated === e ? t : { id: F.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, F.id, B]);
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
                            : Promise.allSettled(i.map((e) => aT(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ec = i.useCallback(
            (e, t) => {
                D.current += 1;
                let n = D.current;
                (N({ direction: t, moves: n }),
                    E({ question: F, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    T(!0),
                    k(e));
            },
            [H, ee, el, F, Y],
        ),
        ed = i.useCallback(() => {
            let e = P.current,
                t = $.current;
            null != e && null != t && M({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = P.current,
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
            t = setTimeout(() => T(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [em]);
    let ef = i.useCallback(
            (e) => {
                if (O) return;
                let t = { ...o, [F.id]: e };
                u(t);
                let n =
                    z < l.questions.length - 1
                        ? z + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, z);
                null == n ? eu(t) : ec(n, n < z ? "back" : "forward");
            },
            [o, l, O, z, F.id, eu, ec],
        ),
        ep = i.useCallback(() => {
            O || 0 === z || ec(z - 1, "back");
        }, [O, z, ec]),
        eg = z > 0 && !O,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                J ? O || u((e) => ({ ...e, [F.id]: t })) : ef(t);
            },
            [O, J, F.id, ef],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return W
                ? ((e = ev(F)),
                  (t = H.trim()),
                  (n = F.options.filter((e) => Y.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Y,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [H, W, ev, F, Y]),
        eb = h[F.id] ?? a6,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != F.input
                ? ((e = F.input),
                  (t = x[F.id]),
                  (n = H.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(aA[e]) ? t.name : `${aA[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, F.id, F.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [F.id]: e })), v((e) => ({ ...e, [F.id]: t })));
            },
            [F.id],
        ),
        ew = i.useCallback(() => b(!0), []),
        eN = i.useCallback(() => b(!1), []),
        eC = Z.controlsFor(F, O),
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
        eP = i.useMemo(
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
                        : (o[F.id] ?? null),
            [o, H, ej, ey, F.id],
        ),
        eL = null != eP && !O,
        eD = z === q - 1,
        eO = i.useCallback(() => {
            null == eP || O || ef(eP);
        }, [O, eP, ef]),
        eq = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, lj.vq)(e.target, HTMLTextAreaElement) ||
                    (0, lj.vq)(e.target, HTMLInputElement) ||
                    ((!(0, lj.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && eg
                            ? (e.preventDefault(), ep())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), eO())));
            },
            [eg, eL, ep, eO],
        ),
        ez = J
            ? null
            : (0, a.jsxs)("div", {
                  className: aO.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aO.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(ak.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lW.y, {
                          value: H,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [F.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eA());
                          },
                          placeholder: A.intl.string(C.default["tOC+tn"]),
                          "aria-label": A.intl.formatToPlainString(C.default["4JeYPB"], { question: F.question }),
                          disabled: O,
                          rows: 1,
                          className: aO.Pu,
                          "data-conjure-clarification-other": F.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: X()(aO.$O, { [aO.fI]: eS && !eI, [aO.Oh]: eI }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": O ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !_ ? "true" : void 0,
        "data-step": z,
        tabIndex: -1,
        onKeyDown: eq,
        children: [
            (0, a.jsxs)("div", {
                className: aO.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: P,
                        className: aO.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: X()(av.TK, aO.R_, { [aO.TB]: "exit" === ea, [aO.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: av.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tl.K, {
                                              icon: B ? eT.t : lA.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: F.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${F.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(eh.D, {
                                      className: X()(av.gb, av.Q7),
                                      onClick: e_,
                                      "aria-label": A.intl.string(C.default.qVXlk0),
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
                        className: aO.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: aO.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: aO.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": w?.direction,
                                    "data-parity": null == w ? void 0 : w.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aO.aK,
                                                  children: A.intl.string(C.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(a5, {
                                            projectId: n,
                                            question: F,
                                            selected: Y,
                                            disabled: O,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? a7),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  F.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eC,
                                        }),
                                        null != F.input
                                            ? (0, a.jsx)(aB, {
                                                  projectId: n,
                                                  question: F,
                                                  value: eb,
                                                  disabled: O,
                                                  onChange: ek,
                                                  onFocus: ew,
                                                  onBlur: eN,
                                                  fallback: !1 === F.allow_custom ? ez : null,
                                              })
                                            : null,
                                        !1 === F.allow_custom ? null : ez,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          a4,
                                          {
                                              projectId: n,
                                              question: S.question,
                                              draft: S.draft,
                                              selected: S.selected,
                                              ownImage: S.ownImage,
                                              ownSelected: S.ownSelected,
                                              direction: S.direction,
                                              disabled: O,
                                          },
                                          S.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            q > 1 || W || J || null != F.input
                ? (0, a.jsxs)("div", {
                      className: av.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  q > 1
                                      ? A.intl.formatToPlainString(C.default.yzYUjq, { index: z + 1, total: q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: av.zt,
                              children: [
                                  eg
                                      ? (0, a.jsx)(aw.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(C.default.Pk5lfA),
                                            onClick: ep,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(eD ? A.t.geKm7t : C.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: eO,
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
var a9 = n(557744),
    ie = n(223347),
    it = n(894443),
    il = n(525530),
    ir = n(572253),
    ia = n(411236);
function ii(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : A.intl.string(C.default.XuOf5s);
    return (0, a.jsx)(ir.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(et.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: A.intl.string(C.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: ia.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: A.intl.string(C.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: ia.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: X()(av.nd, av.jx),
                      "aria-label": A.intl.string(C.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: av.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: av.TK,
                                      children: A.intl.string(C.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: X()(av.gb, av.Q7),
                                      onClick: l,
                                      "aria-label": A.intl.string(C.default["iq+Pte"]),
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
                              className: ia.DQ,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: av.qr,
                              children: (0, a.jsx)("div", { className: av.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var is = n(874421),
    io = n(404373),
    iu = n(435558),
    ic = n.n(iu);
let id = "VibegrationsComposerDrafts";
function im() {
    return tH.w.get(id) ?? {};
}
let ih = new Map(),
    ip = ic().throttle(() => {
        if (0 === ih.size) return;
        let e = im();
        for (let [t, n] of ih) "" === n ? delete e[t] : (e[t] = n);
        (ih.clear(), tH.w.set(id, e));
    }, 1e3);
class ig extends o.Ay.Store {
    getDraft(e) {
        let t = ih.get(e);
        return null != t ? t : (im()[e] ?? "");
    }
}
let ix = new ig(lJ.h, {
    LOGOUT: function () {
        return (ih.clear(), ip.cancel(), tH.w.remove(id), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ih.set(t, n), ip(), "" === n && ip.flush(), !1);
    },
});
function iv(e) {
    return "" !== ix.getDraft(e).trim();
}
var ij = n(29080),
    ib = n(46054);
function iy(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, r2.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, r2.Lf)(r) }),
    };
}
var ik = n(520521),
    iw = n(216306),
    iN = n(60160),
    iC = n(16634),
    iA = n(651438);
function iS(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, r2.SY)(n.steps),
        d = u ? (0, iA.Q)(n) : (0, iw.R)(o),
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
                                    className: ad.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            iC.A,
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
                                      className: ad.iq,
                                      children: (0, a.jsx)(iN.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r4.A, {
        glyph: (0, a.jsx)(r8.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, iw.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ad.nC,
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
var iE = n(998445),
    iI = n(643210),
    iM = n(648127),
    i_ = n(372795),
    iT = n(163897);
let iP = "conjure-browser-viewer";
function iR(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iI.A],
            () =>
                n.flatMap((e) => {
                    let n = iI.A.getTab(t, e);
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
        className: iT.kR,
        "aria-label": A.intl.string(C.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iL, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iL(e) {
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
        u = (0, tj.useHasModalOpen)(iP),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, iM.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: X()(iT.Nr, f && iT.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tj.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iP },
                )
            );
        },
        "aria-label": A.intl.formatToPlainString(C.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: iT.Gt,
                children: [
                    (0, a.jsx)(i_.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iT.Ji,
                        "aria-label": A.intl.formatToPlainString(C.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iT.qf,
                              children: (0, a.jsx)(iE.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iT.HS,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: A.intl.string(C.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iT.pG,
                children: [
                    (0, a.jsx)("span", { className: X()(iT.W9, f && iT.oM) }),
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
var i$ = n(268409);
let iD = new WeakMap(),
    iO = new WeakMap();
function iq(e) {
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
                    let t = iD.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iO.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iO.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iD.set(e, n), n);
                })(e0.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: i$.h, children: (0, a.jsx)(iR, { projectId: t, sessionIds: u }) });
}
var iz = n(469393);
function iF(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n3.lG)(t.authored_at);
    return (0, a.jsx)(ae, {
        title: A.intl.string(C.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iz.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iz.z,
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
                          text: A.intl.string(C.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var iU = n(377941),
    iG = n.n(iU);
function iB(e) {
    return "launch" === e.kind || 4 === e.type ? "\u21EA /" : 2 === e.type || 3 === e.type ? "" : "/";
}
let iK = {
    [n6.q7.APP_CHANNEL]: C.default.zrk93C,
    [n6.q7.VOICE_CHANNEL]: C.default.r5Ra0p,
    [n6.q7.ACTIVITY]: A.t.IC5Ann,
    [n6.q7.OVERLAY]: C.default.liTNf3,
    [n6.q7.PROFILE_WIDGET]: C.default["EswAi+"],
    [n6.q7.AUTOMOD]: C.default.DnWMLj,
    [n6.q7.BOT]: C.default.VFWfz1,
    [n6.q7.APPLICATION_COMMANDS]: C.default.w7JaEP,
};
function iV(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iH = {
        [n6.q7.APP_CHANNEL]: C.default["3/aHX6"],
        [n6.q7.VOICE_CHANNEL]: C.default["3/aHX6"],
        [n6.q7.ACTIVITY]: C.default["3/aHX6"],
        [n6.q7.OVERLAY]: C.default["rPpf5/"],
        [n6.q7.PROFILE_WIDGET]: null,
        [n6.q7.AUTOMOD]: null,
        [n6.q7.BOT]: null,
        [n6.q7.APPLICATION_COMMANDS]: null,
    },
    iW = [n6.q7.OVERLAY, n6.q7.ACTIVITY, n6.q7.APP_CHANNEL, n6.q7.VOICE_CHANNEL];
function iX(e) {
    return iW.find((t) => iV(e, t)) ?? null;
}
var iJ = n(155718);
let iY = ["command", "user_command", "message_command", "message"],
    iQ = new Set([iJ.kc.CHAT, iJ.kc.USER, iJ.kc.MESSAGE]);
function iZ(e) {
    return e.type ?? iJ.kc.CHAT;
}
function i0(e) {
    return "launch" !== e.kind && iQ.has(iZ(e));
}
function i1(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function i2(e, t) {
    let n = iY.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !i1(e)), ...n.filter(i1)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || i1(r) || l.push(r);
    }
    return iY.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let i3 = {
        [n6.q7.APP_CHANNEL]: C.default.NBUCvF,
        [n6.q7.VOICE_CHANNEL]: C.default.vrwvp8,
        [n6.q7.ACTIVITY]: C.default.oMJF0T,
        [n6.q7.OVERLAY]: C.default.u06zRd,
        [n6.q7.PROFILE_WIDGET]: C.default.NZrNII,
        [n6.q7.AUTOMOD]: C.default["bu0/4I"],
        [n6.q7.BOT]: C.default.Crinff,
        [n6.q7.APPLICATION_COMMANDS]: C.default.M3ty0r,
    },
    i5 = [
        n6.q7.APP_CHANNEL,
        n6.q7.ACTIVITY,
        n6.q7.OVERLAY,
        n6.q7.VOICE_CHANNEL,
        n6.q7.PROFILE_WIDGET,
        n6.q7.AUTOMOD,
        n6.q7.BOT,
        n6.q7.APPLICATION_COMMANDS,
    ];
var i7 = n(176999),
    i6 = (((l = {}).IMAGE = "image"), l),
    i4 = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i8 = n(773669);
let i9 = [],
    se = {},
    st = {};
function sn(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sl(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: i6.IMAGE,
        visibility: i4.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sr = n(127258),
    sa = n(320095),
    si = n(963852),
    ss = n(95701),
    so = n(889227);
let su = new ss.nA({ id: "1337", guild_id: "1337", type: eW.rbe.GUILD_TEXT, name: "preview" });
function sc(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eQ.default], () => eQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e1.nj)(new so.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sd = /^@\S+/;
var sm = n(231483),
    sf = n(628284),
    sh = n(97808),
    sp = n(778712),
    sg = n(809115),
    sx = n(486020),
    sv = n(200700);
let sj = {
        alert: { label: () => A.intl.string(C.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => A.intl.string(C.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => A.intl.string(C.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => A.intl.string(C.default.RGzFNK), blockedStyle: !1 },
    },
    sb = {
        blocked: { label: () => A.intl.string(C.default.YdnZ8q), tone: "red" },
        alert: { label: () => A.intl.string(C.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => A.intl.string(C.default.RGzFNK), tone: "green" },
    },
    sy = ["blocked", "alert", "allowed"],
    sk = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var sw = n(984097),
    sN = n(13673);
let sC = { blocked: sm.ShieldIcon, alert: e6.BellIcon, allowed: sf.y },
    sA = {
        blurple: { text: "text-brand", icon: ea.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: ea.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: ea.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function sS(e) {
    var t, n;
    let l,
        r,
        { example: i } = e,
        s =
            "" ===
            (r = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : A.intl.formatToPlainString(A.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, sv.getFriendlyDurationString)(n))
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
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : r;
    return null == s
        ? null
        : (0, a.jsx)(Q.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function sE(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = sj[n.outcome];
    return (0, a.jsxs)("li", {
        className: X()(sw.nM, { [X()(sw.HV, sN.DX)]: r }),
        children: [
            (0, a.jsx)(eK.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: sw.my,
                children: (0, a.jsx)(sh.eu, {
                    src: (0, sx.AE)(void 0, void 0),
                    size: sp._3.SIZE_24,
                    "aria-label": A.intl.string(C.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sw.fw,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), ib.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(sS, { example: n }),
                ],
            }),
        ],
    });
}
function sI(e) {
    let { group: t } = e,
        n = i.useId(),
        l = sb[t.section],
        r = sC[t.section],
        s = sA[l.tone];
    return (0, a.jsxs)("div", {
        className: sw.uW,
        children: [
            (0, a.jsxs)("div", {
                className: sw.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(Q.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: sw.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: sw.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(sE, { example: e }, t)),
            }),
        ],
    });
}
function sM() {
    let { avatarSrc: e, eventHandlers: t } = (0, sg.a)(!0);
    return (0, a.jsx)("span", {
        className: sw.Gy,
        ...t,
        children: (0, a.jsx)(sh.eu, { src: e, size: sp._3.SIZE_16, "aria-label": A.intl.string(A.t.hG1StD) }),
    });
}
function s_(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: sw.K1,
        children: ((t = n.examples),
        sy
            .map((e) => ({ section: e, examples: t.filter((t) => sk[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(sI, { group: e }, e.section)),
    });
}
var sT = n(276293),
    sP = n(460905),
    sR = n(110384),
    sL = n(633018),
    s$ = n(763754),
    sD = n(217424),
    sO = n(194085),
    sq = n(20851),
    sz = n(692508),
    sF = n(798819);
function sU(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: X()(sF.item, sF.labelContainer, sF.colorDefault, {
            [sF.focused]: !0 === t.highlighted,
            [sF.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sF.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sF.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: X()(sF.label, sz.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sF.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sF.icon }),
                  })
                : null,
        ],
    });
}
function sG(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: X()(t, sz.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: A.intl.string(A.t["5IEsGx"]), icon: sR.W, muted: !0 }
                : { label: A.intl.string(A.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: X()(sF.menu, sz.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sF.scroller,
            children: [
                (0, a.jsx)(sU, { item: s }),
                (0, a.jsx)("div", { className: sF.separator }),
                (0, a.jsx)(sU, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var sB = n(381941);
function sK() {}
function sV(e) {
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
        (r = (0, o.bG)([tN.A], () => tN.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? A.intl.string(C.default.JEYq8M)),
        (u = (0, o.bG)([eQ.default], () => (null != l ? eQ.default.getUser(l) : void 0), [l])),
        (d = sc("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sc("31338", A.intl.string(C.default["9iAOsw"]), { discriminator: "0003" })),
        (h = sc("31339", (0, eZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, sa.rh)({
                                          ...(0, si.Ay)({
                                              channelId: su.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eW.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eW.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: sr.G.APPLICATION_COMMAND,
                                                        user: (0, si.Vi)(s),
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
                                              messageType: eW.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eW.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(sd, `<@${i.id}>`)), s),
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
                                  targetMessage: A.intl.string(C.default["y+QYes"]),
                                  memberMessage: A.intl.string(C.default.BUTRDc),
                              },
                          ),
                [g, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = su.name;
    return (0, a.jsxs)("div", {
        className: sz.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sz.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sT.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: X()(sz.TE, `group-spacing-${sB.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sz.Rz : void 0,
                            children: [
                                (0, a.jsx)(sq.A, {
                                    message: n,
                                    channel: su,
                                    author: (0, s$.FT)(n.author, su),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sD.A, { message: n, channel: su }) : void 0,
                                    usernameClassName: r?.target === "user" ? sz.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sz.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sO.Ay, {
                                              children: [
                                                  (0, a.jsx)(sO.qv, {
                                                      label: A.intl.string(A.t.lfIHs4),
                                                      icon: sP.n,
                                                      onClick: sK,
                                                  }),
                                                  (0, a.jsx)(sO.qv, {
                                                      label: A.intl.string(A.t["5IEsGx"]),
                                                      icon: sR.W,
                                                      onClick: sK,
                                                  }),
                                                  (0, a.jsx)(sO.qv, {
                                                      label: A.intl.string(A.t["UKOtz+"]),
                                                      icon: tr.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sK,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sz.ET : sz.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sG, {
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
                className: sz.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sL.k, { size: "sm", color: "currentColor" }),
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
var sH = n(332173);
function sW(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sH.A, { children: ["/", t] });
}
function sX(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iG());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sW, { name: e.name }, e.start) : e.text));
}
n(827669);
var sJ = n(323384),
    sY = n(983851),
    sQ = n(794083),
    sZ = n(687966),
    s0 = n(26137),
    s1 = n(430392),
    s2 = n(775602),
    s3 = n(838815);
let s5 = {
    [n6.q7.APP_CHANNEL]: sJ.k,
    [n6.q7.VOICE_CHANNEL]: sY.H,
    [n6.q7.ACTIVITY]: sQ.b,
    [n6.q7.OVERLAY]: sZ.GameControllerIcon,
    [n6.q7.PROFILE_WIDGET]: s0.r,
    [n6.q7.AUTOMOD]: sm.ShieldIcon,
    [n6.q7.BOT]: s1.RobotIcon,
    [n6.q7.APPLICATION_COMMANDS]: sL.k,
};
function s7(e, t) {
    return null != e.preview ? (t[e.preview] ?? null) : null;
}
function s6(e) {
    let { preview: t, selected: n } = e;
    return (0, a.jsx)("span", {
        className: X()(s3.FF, { [s3.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)("span", { className: s3.j8, inert: !0, children: t.content }),
    });
}
function s4(e) {
    let { row: t } = e,
        n = s5[t.surface];
    return (0, a.jsx)("span", {
        className: s3.oL,
        "aria-hidden": !0,
        children: (0, a.jsx)(n, { size: "sm", color: "currentColor" }),
    });
}
function s8(e) {
    let { row: t, selected: n } = e,
        l = s5[t.surface];
    return (0, a.jsx)("span", {
        className: X()(s3.FF, s3.KI, { [s3.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)(l, { size: "sm", color: "currentColor" }),
    });
}
function s9(e) {
    let { row: t, selected: n } = e,
        l = s5[t.surface];
    return (0, a.jsxs)("span", {
        className: s3.Nl,
        children: [
            (0, a.jsx)(l, { className: s3.gr, size: "xs", color: "currentColor", "aria-hidden": !0 }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/semibold",
                color: n ? "text-strong" : "text-default",
                tag: "span",
                lineClamp: 1,
                children: t.title,
            }),
        ],
    });
}
function oe(e) {
    let { names: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: s3.Ip,
              children: t.map((e) =>
                  (0, a.jsx)(
                      "span",
                      {
                          className: s3.jw,
                          children: (0, a.jsx)(Q.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: `#${e}`,
                          }),
                      },
                      e,
                  ),
              ),
          });
}
let ot = "data-conjure-plan-preview-tight";
function on(e) {
    let { preview: t } = e,
        n = i.useRef(null),
        l = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = n.current,
                t = l.current;
            if (null == e || null == t) return;
            function r() {
                if (null == e || null == t) return;
                t.removeAttribute(ot);
                let n = t.offsetHeight;
                n > e.clientHeight && (t.setAttribute(ot, ""), (n = t.offsetHeight));
                let l = n > e.clientHeight ? e.clientHeight / n : 1;
                t.style.transform = l < 1 ? `scale(${l})` : "";
            }
            r();
            let a = new ResizeObserver(r);
            return (a.observe(e), a.observe(t), () => a.disconnect());
        }, []),
        (0, a.jsx)("div", {
            ref: n,
            className: s3.aM,
            children: (0, a.jsx)("div", {
                ref: l,
                className: s3.gp,
                "data-conjure-plan-preview-frame": "",
                children: t?.content,
            }),
        })
    );
}
function ol(e) {
    let { row: t, previews: n, commandNames: l } = e,
        r = s7(t, n);
    return (0, a.jsxs)("div", {
        className: s3.J0,
        children: [
            (0, a.jsxs)("div", {
                className: s3.uy,
                children: [
                    (0, a.jsx)(s4, { row: t }),
                    (0, a.jsxs)("div", {
                        className: s3.Qq,
                        children: [
                            (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: t.title }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                selectable: !0,
                                lineClamp: 3,
                                children: (0, a.jsx)(sX, { text: t.description, commandNames: l }),
                            }),
                            (0, a.jsx)(oe, { names: t.channelNames }),
                        ],
                    }),
                ],
            }),
            r?.content,
        ],
    });
}
function or(e) {
    let { rows: t, previews: n, label: l, cycling: r, commandNames: s } = e,
        u = i.useId(),
        { selectedIndex: c, select: d } = (function (e, t) {
            let n = (0, o.bG)([s2.Ay], () => s2.Ay.useReducedMotion),
                [l, r] = i.useState(0),
                [a, s] = i.useState(!1),
                u = t && !a && !n && e > 1;
            return (
                i.useEffect(() => {
                    if (!u) return;
                    let t = setInterval(() => r((t) => (t + 1) % e), 2500);
                    return () => clearInterval(t);
                }, [u, e]),
                {
                    selectedIndex: 0 === e ? 0 : l % e,
                    select: i.useCallback((e) => {
                        (s(!0), r(e));
                    }, []),
                }
            );
        })(t.length, r),
        m = t[c] ?? t[0];
    return (0, a.jsx)("div", {
        className: s3.xk,
        children: (0, a.jsxs)("div", {
            className: s3.QF,
            children: [
                (0, a.jsx)("div", {
                    role: "tablist",
                    "aria-orientation": "vertical",
                    "aria-label": l,
                    className: s3.C$,
                    children: t.map((e, t) => {
                        let l = t === c,
                            r = s7(e, n);
                        return (0, a.jsxs)(
                            eh.D,
                            {
                                role: "tab",
                                "aria-selected": l,
                                "aria-controls": u,
                                className: X()(s3.pc, { [s3.EV]: l }),
                                onClick: () => d(t),
                                children: [
                                    null != r
                                        ? (0, a.jsx)(s6, { preview: r, selected: l })
                                        : (0, a.jsx)(s8, { row: e, selected: l }),
                                    (0, a.jsxs)("span", {
                                        className: s3.b$,
                                        children: [
                                            (0, a.jsx)(s9, { row: e, selected: l }),
                                            (0, a.jsx)(Q.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                tag: "span",
                                                lineClamp: 3,
                                                children: (0, a.jsx)(sX, { text: e.description, commandNames: s }),
                                            }),
                                            (0, a.jsx)(oe, { names: e.channelNames }),
                                        ],
                                    }),
                                ],
                            },
                            e.surface,
                        );
                    }),
                }),
                (0, a.jsx)("div", {
                    id: u,
                    role: "tabpanel",
                    className: s3.nd,
                    children: (0, a.jsx)(on, { preview: s7(m, n) }),
                }),
            ],
        }),
    });
}
var oa = n(633075),
    oi = n(946356),
    os = n(58216),
    oo = n(27399);
function ou(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        r = i.useMemo(() => new oa.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oo.H,
              children: (0, a.jsx)(oi.A.Overlay, {
                  className: oo.w,
                  children: (0, a.jsx)(os.A, {
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
var oc = n(443863);
function od(e) {
    let { label: t, icon: n, children: l } = e;
    return (0, a.jsxs)("section", {
        className: oc.uW,
        children: [
            (0, a.jsxs)("span", {
                className: oc.a9,
                children: [
                    n,
                    (0, a.jsx)(Q.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                ],
            }),
            l,
        ],
    });
}
function om(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(od, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: oc.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: oc.jw,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function of(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = aY(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, aJ.R)({
                        items: [{ type: "IMAGE", url: e, alt: l }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, r, l]);
    return o
        ? null
        : (0, a.jsx)(eh.D, {
              className: oc.xX,
              onClick: c,
              "aria-label": A.intl.string(C.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: oc.sN, onError: u }) : null,
          });
}
function oh(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        { projectId: d, proposal: m, version: f, onApprove: h } = e,
        p = iV(m, n6.q7.AUTOMOD) ? m.automod : null,
        { botExchanges: x } =
            ((n = iV(m, n6.q7.APPLICATION_COMMANDS)),
            (l =
                iV(m, n6.q7.BOT) || n
                    ? null != m.bot
                        ? m.bot.interaction
                        : n && m.commands.some(i0)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : (function (e, t, n) {
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
                                                    kind:
                                                        "messages" !== t && n.trimStart().startsWith("/")
                                                            ? "command"
                                                            : "message",
                                                    user: n,
                                                    bot: l,
                                                },
                                            ];
                                  }),
                                  i = { kind: "message", user: n.message, bot: n.reply };
                              if ("messages" === t && 0 === a.length) return [i];
                              let s = e.commands.filter(i0).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (iZ(e)) {
                                              case iJ.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case iJ.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(i1),
                                  u = a.length > 0 ? i2([...a, ...o], !0) : i2("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(m, l, {
                              message: A.intl.string(C.default.J7qggf),
                              reply: A.intl.string(C.default.nqYtiy),
                              event: A.intl.string(C.default["05lU9W"]),
                          }),
                [m, l],
            )),
            { botInteraction: l, botExchanges: r }),
        v = (function (e, t) {
            let { widget_config: n, widget_preview: l = st } = t,
                r = (0, o.bG)([i8.default], () => i8.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(se);
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
                                                          ...sn(n),
                                                          ...(null != n.fallback ? { fallback: sn(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = i7.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[lr.m.WIDGET_TOP] || null == i[lr.m.WIDGET_BOTTOM]
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
                                                                    type: i7.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: i7.oG.NUMBER, value: a })
                                                                : (r[e] = { type: i7.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sl),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i9,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(d, m),
        j = iV(m, n6.q7.PROFILE_WIDGET) ? v : null,
        b = f?.superseded === !0,
        y = m.what_changed?.trim() ?? "",
        k =
            ((t = m.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === iB(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        w = {};
    (null != p &&
        p.examples.length > 0 &&
        (w.automod = {
            label: A.intl.string(C.default.z4ZKYG),
            icon: (0, a.jsx)(sM, {}),
            content: (0, a.jsx)(s_, { automod: p }),
        }),
        null != m.design_image &&
            (w.design = {
                label: A.intl.string(C.default.X15LLY),
                content: (0, a.jsx)(of, {
                    projectId: d,
                    design: m.design_image,
                    alt: A.intl.string(null == (s = iX(m)) ? C.default["3/aHX6"] : iH[s]),
                }),
            }),
        x.length > 0 &&
            (w.bot = {
                label: A.intl.string(C.default.sA1lTv),
                content: (0, a.jsx)(sV, { projectId: d, exchanges: x }),
            }),
        null != j && (w.widget = { label: A.intl.string(C.default.ove4zH), content: (0, a.jsx)(ou, { ...j }) }));
    let N = Object.keys(w),
        S =
            ((u = iV(m, n6.q7.BOT)),
            (c = m.commands.filter(i0).length),
            i5
                .filter((e) => iV(m, e) && !(u && e === n6.q7.APPLICATION_COMMANDS))
                .map((e) => {
                    let t = e === n6.q7.APP_CHANNEL ? (m.app_channel_names ?? []) : [],
                        n = t.length > 1,
                        l = e === n6.q7.BOT && c > 0 && iV(m, n6.q7.APPLICATION_COMMANDS),
                        r = A.intl.string(iK[e]),
                        a = A.intl.string(i3[e]);
                    n
                        ? ((r = A.intl.formatToPlainString(C.default["75EkE8"], { count: t.length })),
                          (a = A.intl.string(C.default.OMNwmi)))
                        : l && (a = A.intl.formatToPlainString(C.default.Xa5mPA, { count: c }));
                    let i = m.surface_descriptions?.[e]?.trim();
                    return (
                        null != i && "" !== i && (a = i),
                        {
                            surface: e,
                            title: r,
                            description: a,
                            channelNames: t,
                            preview:
                                N.find(
                                    (t) =>
                                        (function (e, t) {
                                            switch (t) {
                                                case "design":
                                                    return iX(e);
                                                case "widget":
                                                    return n6.q7.PROFILE_WIDGET;
                                                case "automod":
                                                    return n6.q7.AUTOMOD;
                                                case "bot":
                                                    return iV(e, n6.q7.BOT) ? n6.q7.BOT : n6.q7.APPLICATION_COMMANDS;
                                            }
                                        })(m, t) === e,
                                ) ?? null,
                        }
                    );
                })),
        E = N.filter((e) => !S.some((t) => t.preview === e));
    return (0, a.jsxs)(al, {
        title:
            b && null != f
                ? A.intl.formatToPlainString(C.default.YZ3qJs, { version: f.version })
                : A.intl.string(C.default["3b6e7o"]),
        meta: b ? (0, a.jsx)(an, { children: A.intl.string(C.default.hF2c41) }) : null,
        superseded: b,
        showLabel: A.intl.string(C.default.yD8EJS),
        hideLabel: A.intl.string(C.default.nSPGNb),
        className: S.length > 1 ? oc.WG : void 0,
        bodyClassName: oc.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== y
                ? (0, a.jsx)(od, {
                      label: A.intl.string(C.default.iNS4dl),
                      children: (0, a.jsx)(Q.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: (0, a.jsx)(sX, { text: y, commandNames: k }),
                      }),
                  })
                : null,
            (0, a.jsx)(Q.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: (0, a.jsx)(sX, { text: m.summary, commandNames: k }),
            }),
            S.length > 0
                ? (0, a.jsx)(od, {
                      label: A.intl.string(C.default.mrMYrN),
                      children:
                          1 === S.length
                              ? (0, a.jsx)(ol, { row: S[0], previews: w, commandNames: k })
                              : (0, a.jsx)(or, {
                                    rows: S,
                                    previews: w,
                                    label: A.intl.string(C.default.mrMYrN),
                                    cycling: !b,
                                    commandNames: k,
                                }),
                  })
                : null,
            E.map((e) => {
                let t = w[e];
                return null == t ? null : (0, a.jsx)(od, { label: t.label, icon: t.icon, children: t.content }, e);
            }),
            m.changes.length > 0
                ? (0, a.jsx)(od, {
                      label: A.intl.string(C.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: oc.p_,
                          children: m.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: oc.Aw,
                                      children: (0, a.jsx)(Q.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: (0, a.jsx)(sX, { text: e, commandNames: k }),
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            m.commands.length > 0
                ? (0, a.jsx)(od, {
                      label: A.intl.string(A.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: oc.p_,
                          children: m.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: oc.uX,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children:
                                                  "/" === iB(e)
                                                      ? (0, a.jsx)(sW, { name: e.name })
                                                      : `${iB(e)}${e.name}`,
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-muted",
                                              tag: "span",
                                              selectable: !0,
                                              children: e.description,
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            (0, a.jsx)(om, { label: A.intl.string(C.default["2UbW6r"]), names: m.bot_permissions ?? [] }),
            (0, a.jsx)(om, { label: A.intl.string(C.default["7TKfpj"]), names: m.privileged_intents ?? [] }),
            null == h || b
                ? null
                : (0, a.jsxs)("div", {
                      className: oc.o1,
                      children: [
                          (0, a.jsx)(et.$, {
                              variant: "primary",
                              size: "sm",
                              text: A.intl.string(C.default["6S+wRM"]),
                              onClick: h,
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: A.intl.string(C.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var op = n(289565);
function og(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: op.m, children: n })
        : (0, a.jsxs)("div", {
              className: op.Z,
              children: [
                  n,
                  (0, a.jsx)(eR.m, {
                      text: A.intl.string(A.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tl.K, {
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
function ox(e) {
    return null != e && e.status?.state === "unpublished";
}
let ov = new WeakMap();
function oj(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tv.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tv.B, {
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
                    ? (0, a.jsxs)(tv.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(Q.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: A.intl.string(C.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(F.Ay, { guild: l, size: F.Ay.Sizes.SMOL }),
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
function ob(e) {
    let { projectId: t } = e,
        n = (0, tm.Ay)(t);
    return null != n && ox(n) ? (0, a.jsx)(og, { children: (0, a.jsx)(oj, { publish: n }) }) : null;
}
var oy = n(989271);
function ok(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: X()(oy.nM, { [oy.f1]: s, [oy.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": A.intl.formatToPlainString(C.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: oy.jo,
                children: [
                    n
                        ? (0, a.jsx)(ne.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: oy.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: oy.G9,
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
function ow(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(ae, {
        title: A.intl.string(C.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                ok,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oN = n(530557),
    oC = n(872162);
function oA(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var oS = n(202723);
function oE(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tj.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oN.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => oA(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(oA(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = X()(oS.Lo, { [oS.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(Q.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: A.intl.string(C.default.CTxtdV),
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
                            children: A.intl.string(C.default.HCQvpO),
                        }),
                        (0, a.jsx)(oC.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: oS.Lo,
                      children: (0, a.jsx)(oC.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
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
                                className: oS.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: oS.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(sf.y, {
                                            size: "xs",
                                            color: ea.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: A.intl.string(C.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(oC.C, { label: A.intl.string(C.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: oS.Lo,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: A.intl.string(null != o ? C.default.O0QIqj : C.default.HCQvpO),
                        }),
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : A.intl.string(C.default.MPGSHL),
                        }),
                        (0, a.jsx)(oC.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: oS.sq,
                            children: (0, a.jsx)(et.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: A.intl.string(C.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var oI = n(919790),
    oM = n(971824),
    o_ = n(162052),
    oT = n(165648);
function oP(e) {
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
        x = i.useMemo(() => (0, r2.Jf)(n, l), [n, l]),
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
            className: ad.pj,
            "data-live": !1,
            children: (0, a.jsx)(r4.A, {
                glyph: (0, a.jsx)(ij.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: A.intl.string(C.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, r2.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = (0, ik.n)(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        S = (0, iA.k)(k);
    return (0, a.jsxs)("ol", {
        className: ad.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(r7.Ay, {
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
                let l = null != e.task.helperMark ? (0, ik.p)(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iS,
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
            (0, a.jsx)(iq, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ad.YO,
                      children: (0, a.jsx)(au, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oR(e) {
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
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => iy({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = S,
        T = (y ? k : void 0) ?? S.attachmentsHost,
        P = M && !y,
        R = null == u ? null : (0, a.jsx)(oI.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: ad.MT, children: R }),
        $ = j
            ? (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return A.intl.string(C.default.Mv5OmK);
                          case "queued":
                              return A.intl.string(C.default["Po/2mi"]);
                          case "restarting":
                              return A.intl.string(C.default.Vj0woh);
                          default:
                              return A.intl.string(C.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ad.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: ad.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ad.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oT.PT,
                                          children: ib.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === T && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(oh, { projectId: t, proposal: r, version: s, onApprove: v })
                : P
                  ? (0, a.jsxs)("div", {
                        className: X()(ad.ky, o_.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: X()(oT.PT, ad.cW),
                                children: ib.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: X()(ad.ky, o_.XR, { [oM.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(oE, {
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
                      className: X()(ad.ky, o_.XR),
                      children: (0, a.jsx)(ii, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != p ? (0, a.jsx)(ob, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(ow, { ideas: o, pickedIdeaIds: x, onPick: g }) : null,
            null != w ? (0, a.jsx)(iF, { proposal: w, onRestore: N }) : null,
            P ? null : $,
        ],
    });
}
var oL = n(146806),
    o$ = n(477262),
    oD = n(432017),
    oO = n(475358),
    oq = n(717400),
    oz = n(663341),
    oF = n(559647),
    oU = n(234320),
    oG = n(191023);
function oB(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(rt.p, {
        name: A.intl.string(C.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nX.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oG.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nX.OY,
                    children: (0, a.jsx)(ak.PencilIcon, {
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
            children: A.intl.string(C.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: rl.o1,
            onClick: () => {
                nB(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": A.intl.string(C.default.N852dj),
            children: (0, a.jsx)(lX.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function oK(e) {
    let { send: t } = e;
    return (0, a.jsxs)(rt.p, {
        compact: !0,
        name: A.intl.string(C.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: A.intl.string(C.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: rl.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aw.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: A.intl.string(C.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var oV = n(497437);
let oH = [
        {
            id: "add-images-videos",
            label: C.default["51+9lc"],
            icon: o$.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: C.default["10ljr2"],
            icon: oD.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: C.default.aotDee, icon: ec.H, accept: "" },
    ],
    oW = "text-md/normal",
    oX = null;
function oJ(e) {
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
                frontFrom: 1e3 * (0, oL._R)(m),
                frontTo: 1e3 * (0, oL._R)(h),
                backFrom: 1e3 * (0, oL.T)(m),
                backTo: 1e3 * (0, oL.T)(h),
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
    let N = "in" === b ? g.backFrom : g.frontFrom,
        S = "out" === b ? g.frontTo : g.backTo,
        E = (0, o.bG)([s2.Ay], () => s2.Ay.useReducedMotion),
        I = t === A.intl.string(C.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: X()(oV.VT, { [oV.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${N}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, S - N)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != b ? v % 2 : void 0,
            "data-wipe-kind": l ? (b ?? void 0) : void 0,
            children: (0, a.jsx)(oO.e, { shortcut: "tab", className: oV.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: oW,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: X()(oV.xM, { [oV.s2]: l }),
                onStart: w,
                onComplete: () => s(t),
            }),
            _(oV.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: oV.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: oW, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: oV.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: oW, tag: "span", className: oV.xM, children: t }),
                          _(oV.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oY = i.memo(function (e) {
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
            [y, k] = i.useState(() => ix.getDraft(t)),
            w = i.useCallback(
                (e) => {
                    (lJ.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), k(e));
                },
                [t],
            ),
            N = "" !== y.trim();
        i.useEffect(() => v?.(N), [N, v]);
        let [S, E] = i.useState(t);
        S !== t && (E(t), k(ix.getDraft(t)));
        let I = (0, o.bG)([s2.Ay], () => s2.Ay.isSubmitButtonEnabled),
            [M, _] = i.useState(!1);
        i.useEffect(() => {
            l || _(!1);
        }, [l]);
        let T = i.useRef(null),
            {
                drafts: P,
                addFiles: R,
                pasteFiles: L,
                removeDraft: $,
                settled: D,
                takeRefs: O,
            } = ra({ projectId: t, surface: "chat", onUploadFile: c }),
            q = nF.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && nO(n);
            }),
            z = "" !== y.trim() || P.length > 0 || p || q,
            F = n && z && D,
            [U, G] = i.useState(null);
        i.useEffect(() => {
            if (null == U) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => G(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [U]);
        let B = i.useCallback(() => {
                if (!F) return;
                let e = O(),
                    n = q
                        ? (function (e) {
                              let t = nG(e);
                              if (null == t || !nO(t)) return null;
                              let n = t.history.present,
                                  l = rK(e);
                              return (
                                  nB(e, (e) => ({ ...e, history: nI, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, x.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rF.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rK(e)),
                                              composite: (e) => rq(e, n),
                                              upload: (t) =>
                                                  (0, g.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, g.n6)(e, t.id),
                                              send: (n) => (0, x.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rG(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rF.delete(i),
                                                          window.setTimeout(() => {
                                                              (rG(i, null),
                                                                  null != s.thumbUrl &&
                                                                      URL.revokeObjectURL(s.thumbUrl));
                                                          }, 6e4)));
                                              },
                                          })));
                                  }
                              );
                          })(t)
                        : null;
                s(y, e.length > 0 ? e : void 0, n ?? void 0);
                let l = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == oX && (oX = document.createElement("canvas").getContext("2d"));
                    let i = oX;
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
                })(Y.current?.querySelector("textarea") ?? null, ec.current, y);
                ("" !== l && G(l), w(""));
            }, [F, q, t, y, s, O, w]),
            K = i.useCallback(
                (e) => {
                    (e.preventDefault(), B());
                },
                [B],
            ),
            V = i.useCallback(() => {
                null == u || M || (_(!0), u());
            }, [u, M]),
            H = null == f || "" !== y || !n || r || p ? null : f,
            W = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && l && null != u && !M) {
                        (e.preventDefault(), e.stopPropagation(), V());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), w(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), B());
                },
                [B, d, l, u, M, V, H, w],
            ),
            X = i.useCallback(
                (e) => {
                    n && L(e);
                },
                [n, L],
            );
        (0, oU.Vo)({
            event: eW.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return X(t);
            },
        });
        let J = i.useCallback(
                (e) => {
                    (R(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [R],
            ),
            Y = i.useRef(null),
            Q = i.useRef(null),
            Z = i.useCallback((e) => {
                let t = T.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [ee, et] = i.useState(0),
            [en, el] = i.useState(!1);
        i.useEffect(() => {
            if (0 === y.length) return void el(!1);
            let e = Y.current?.querySelector("textarea");
            if (null != e) {
                let t = o0(e);
                null != t && et(t);
            }
            el(!0);
            let t = setTimeout(() => el(!1), oQ);
            return () => clearTimeout(t);
        }, [y]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
            ea = en ? ` ${oV.EB}` : "",
            ei = r
                ? A.intl.string(C.default.qqlUiW)
                : n
                  ? p
                      ? A.intl.string(C.default.knUjL3)
                      : h
                        ? A.intl.string(C.default.IevBEw)
                        : A.intl.string(l ? C.default["0BJa/0"] : C.default.TEeU7z)
                  : A.intl.string(C.default.zZ9NgM),
            ec = i.useRef(0),
            ed = i.useRef(null),
            em = i.useCallback((e) => {
                if ((ed.current?.disconnect(), null == e)) return;
                ec.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    ec.current = e.clientWidth;
                });
                (t.observe(e), (ed.current = t));
            }, []),
            ef = i.useId(),
            eh = null != H,
            ep = U ?? H ?? ei,
            eg = "" === y && "" !== ep;
        return (0, a.jsxs)("form", {
            onSubmit: K,
            className: oV.DA,
            children: [
                P.length > 0 || q
                    ? (0, a.jsxs)("div", {
                          className: oV.lN,
                          children: [
                              P.map((e) => (0, a.jsx)(ri, { draft: e, onRemove: $ }, e.localId)),
                              q ? (0, a.jsx)(oB, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${oV.wg} ${oV.LP}${ea}`, style: er, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${oV.wg} ${oV.L3}${ea}`, style: er, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: oV.VA,
                    ref: Y,
                    children: [
                        (0, a.jsx)("input", {
                            ref: T,
                            type: "file",
                            multiple: !0,
                            onChange: J,
                            className: oV.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(es.Y, {
                            targetElementRef: Q,
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
                                            oH.map((e) =>
                                                (0, a.jsx)(
                                                    eu.Dr,
                                                    {
                                                        id: e.id,
                                                        label: A.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Z(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "import-project",
                                                      label: A.intl.string(C.default["p/k5i7"]),
                                                      iconLeft: oq.q,
                                                      leadingAccessory: { type: "icon", icon: oq.q },
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
                                    ref: Q,
                                    type: "button",
                                    className: `${oV.Y0} ${oV.nu}`,
                                    disabled: !n,
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(oz.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: oV.Qu,
                                    }),
                                });
                            },
                        }),
                        eg
                            ? (0, a.jsx)("div", {
                                  ref: em,
                                  className: oV.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(oJ, { text: ep, offering: eh && null == U, typed: null != U }),
                              })
                            : null,
                        (0, a.jsx)(lW.y, {
                            value: y,
                            onChange: (e) => w(e.currentTarget.value),
                            onKeyDown: W,
                            onPaste: X,
                            placeholder: eg ? "" : ei,
                            disabled: !n,
                            "aria-label": A.intl.string(C.default.ldNl9x),
                            "aria-describedby": eg ? ef : void 0,
                            rows: 1,
                            className: oV.jp,
                        }),
                        eg ? (0, a.jsx)(eK.A, { id: ef, children: ei }) : null,
                        (0, a.jsx)("div", {
                            className: oV.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: A.intl.string(C.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${oV.Y0} ${oV.$E}`,
                                              disabled: M,
                                              onClick: V,
                                              "aria-label": A.intl.string(C.default.wiguT0),
                                              children: (0, a.jsx)(ij.w, {
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
                                            className: `${oV.Y0} ${oV.$E}`,
                                            icon: (0, a.jsx)(eL.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        I
                            ? (0, a.jsxs)("div", {
                                  className: oV.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: oV.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: oV.rt,
                                          disabled: !F,
                                          "aria-label": A.intl.string(C.default.rxW2cl),
                                          children: (0, a.jsx)(oF.SendMessageIcon, {
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
    oQ = 1500,
    oZ = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function o0(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = o0.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (o0.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of oZ) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
o0.mirror = null;
var o1 = n(986109);
let o2 = i.createContext(null);
function o3(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(o2),
        [d, m] = i.useState(() => s2.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: X()(o1.xk, { [o1.g5]: d, [o1.Qo]: s, [o1.q3]: o }),
        children: n,
    });
}
let o5 = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n } = e;
            return null != t && n ? "card" : null;
        },
        dismissal: "app",
    },
    o7 = new Map();
function o6(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function o4(e, t) {
    return null != e && e > 0 && e < t;
}
let o8 = "ideas",
    o9 = "live_behind",
    ue = "conjureTipDismissals",
    ut = new Set(),
    un = new Set(),
    ul = 0;
function ur() {
    let e = tH.w.get(ue);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function ua(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return ut.has(((n = e.id), `${t}:${n}`));
        case "app":
            return ur().app[t]?.includes(e.id) === !0;
        case "forever":
            return ur().forever.includes(e.id);
    }
}
function ui(e) {
    return (un.add(e), () => un.delete(e));
}
let us = [12e4, 6e4];
var uo = n(292771);
function uu(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([s2.Ay], () => s2.Ay.useReducedMotion),
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
            className: uo.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: X()(uo.qd, e.leaving ? uo.dv : uo.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var uc = n(443865),
    ud = n(247171);
function um(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: X()(ud.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: X()(ud.gutter, ud[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: ud.content, children: i }),
        ],
    });
}
var uf = n(716502);
function uh(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(um, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: uf.Nr,
        children: (0, a.jsxs)("section", {
            className: uf.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: uf.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
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
function up(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: uf.DD,
        children: t,
    });
}
function ug(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: uf.rf,
        children: t,
    });
}
function ux(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: uf.o1, children: t });
}
let uv = {
    ...o5,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(uh, {
            icon: uc.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(up, { children: A.intl.string(C.default.OJlbhX) }),
                (0, a.jsx)(ug, { children: A.intl.string(C.default["3vJBni"]) }),
                (0, a.jsx)(ux, {
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: A.intl.string(C.default["U/bLzU"]),
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
var uj = n(830205);
function ub(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(um, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: uj.aK,
        children: (0, a.jsxs)("div", {
            className: uj.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: uj.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: uj.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: A.intl.string(A.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
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
var uy = n(95635);
let uk = [
    {
        id: o9,
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
                (null != t.publishCta && ox(n)) ||
                o4(e.messagesSinceShown(o9), 10)
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
                ? (0, a.jsx)(ub, {
                      icon: uy.UploadIcon,
                      onDismiss: l,
                      children: A.intl.format(C.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uv,
    {
        id: o8,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(o5) ||
                0 === e.messagesSinceShown(o5.id) ||
                o4(e.messagesSinceShown(o8), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(ub, {
                icon: uc.LightbulbIcon,
                onDismiss: l,
                children: A.intl.format(C.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var uw = n(817921);
function uN(e) {
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
                    ((s = (0, tm.Ay)(t)),
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
                        us,
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
                                        if ((0, r3.BL)(n)) return n;
                                        if (!(0, r3.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === o6(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = o7.get(`${t}:${e}`);
                            return null != l ? o6(n, l, u) : null;
                        },
                        isDismissed: (e) => ua(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(ui, () => ul);
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
                })(e, g, (e) => ua(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                o7.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || ua(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  ut.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = ur();
                                                  tH.w.set(
                                                      ue,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (ul++, un.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(uk, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(o3, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: uw.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(uu, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var uC = n(52133),
    uA = n(732159),
    uS = n(888366),
    uE = n(862026),
    uI = n(291192);
function uM(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, uE.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uI.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uI.Sp,
                children: [
                    (0, a.jsx)("span", { className: uI.q3 }),
                    (0, a.jsxs)("span", {
                        className: uI.g8,
                        children: [
                            (0, a.jsx)(uS.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uI.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uI.nM,
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
                                          (0, a.jsx)(aw.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tj.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uA.u, {
                                                                    ...t,
                                                                    title: A.intl.string(C.default["i+xjZM"]),
                                                                    subtitle: A.intl.string(C.default.fMBZmD),
                                                                    confirmText: A.intl.string(C.default.i5f3Uo),
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
function u_(e) {
    return (0, o.bG)([B.Ay, tN.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (tN.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uT = n(951465),
    uP = n(369455);
function uR(e) {
    let { projectId: t, notice: n } = e,
        l = u_(t),
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
                    ? C.default.ev23Cw
                    : n.update
                      ? C.default.gQzuLC
                      : null == r
                        ? C.default.MOrR29
                        : C.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(uL, { projectId: t, notice: n }) : null,
        ],
    });
}
function uL(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [l$.A, B.Ay],
                    () => {
                        let r = l$.A.getPublishStatus(e),
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
                      ? A.intl.format(C.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eh.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: uP.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, d.pX)(eW.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : A.intl.format(C.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = B.Ay.getProject(e),
                                        a = null == r ? null : (0, tm.KL)(r, l);
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
                                null != e && (0, uT.A)(e);
                            },
                        }),
              ],
          });
}
var u$ = n(940874);
n(775443);
var uD = n(616e3),
    uO = n(155899),
    uq = n(521981),
    uz = n(491182),
    uF = n(438729),
    uU = n(622868),
    uG = n(448368),
    uB = n(837528),
    uK = n(470964),
    uV = n(715628),
    uH = n(752636),
    uW = n(9842),
    uX = n(589022),
    uJ = n(967198),
    uY = n(531685);
let uQ = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uZ(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function u0(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function u1(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = u0(e, t),
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
    if (uZ(r) && uZ(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uZ(u0(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function u2(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([s2.Ay], () => s2.Ay.useReducedMotion),
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
                      for (; a > 0 && u1(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && uQ.has(e.charAt(l - 1));) l--;
                                    return uQ.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && u1(t, o);) o++;
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
var u3 = n(624479),
    u5 = n(890377),
    u7 = n(180227);
function u6(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: X()(u7.QE, { [u7.Rn]: t }),
              children: (0, a.jsx)(sO.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sO.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function u4(e) {
    return ts.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: A.intl.string(A.t.JrGD7E), icon: u3.CopyIcon, onClick: () => (0, ts.C)(e) }]
        : [];
}
function u8(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: A.intl.string(C.default.CXtLD2),
                          tooltip: A.intl.string(C.default.DOb1HM),
                          icon: u5.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: A.intl.string(C.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(u6, { groupStart: n, actions: [...r, ...u4(t)] });
}
function u9(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: A.intl.string(C.default.H8Jfhu), icon: rp.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nn.BugIcon, onClick: r }];
    return (0, a.jsx)(u6, { groupStart: n, actions: [...i, ...u4(t), ...s] });
}
let ce = (0, ss.createChannelRecord)({ id: "conjure-builder", type: eW.rbe.DM }),
    ct = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function cn(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: X()(u7.Yq, { [u7.x1]: t }), children: e });
}
function cl(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function cr(e, t, n) {
    let { content: l } = (0, uK.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: ce, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(uF.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, uV.A)(r, l);
}
function ca(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, uB.m)(e, ce, t.usernameProfile, l),
        u = (0, uB.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([uJ.A], () => uJ.A.getGuildId()),
        d = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uX.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function ci(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, uq.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: u7.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: u7.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 14,
                                      height: 14,
                                  }),
                                  l,
                              ],
                          }),
                          e,
                      ],
                  });
        }, [n, l]),
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, o.cf)(
            [t3.A],
            () => ({
                isReplyAuthorBlocked: t3.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t3.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, s$.X4)(n),
        m = (0, s$.X4)(t),
        f = ca(n);
    return (0, a.jsx)(uG.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: ce,
        referencedMessage: { state: uW.a.LOADED, message: n },
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
function cs(e) {
    let { message: t, author: n } = e,
        l = ca(t);
    return (0, a.jsx)(uU.Ay, {
        message: t,
        channel: ce,
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
function co(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e;
    i.useEffect(() => e7(l), [l]);
    let c = (0, o.bG)(
            [eQ.default],
            () => e5(l, null != l ? eQ.default.getUser(l) : null, eQ.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, s$.FT)(c, null), [c]),
        m = i.useMemo(() => ng(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, si.Ay)({ channelId: ce.id, content: f, author: c });
            return (0, sa.rh)({ ...e, timestamp: cl(n, e.timestamp), state: eW.cmJ.SENT });
        }, [f, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(cu, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories: r,
              groupStart: s,
              onQueuedAction: u,
          });
}
function cu(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = cr(t, l);
    return (0, a.jsx)(uz.A, {
        className: u7.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(cs, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: u7.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: u7.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: u7.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: u7.WO, children: u }),
                      ],
                  }),
        childrenAccessories: cn(i, "" !== l),
        childrenButtons: (0, a.jsx)(u8, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cc(e) {
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
        { text: m, revealing: f } = u2(t, { streaming: (0, o.bG)([uY.A], () => c && uY.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, s$.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, o.bG)(
            [eQ.default],
            () => e5(g, null != g ? eQ.default.getUser(g) : null, eQ.default.getCurrentUser()),
            [g],
        ),
        v = i.useMemo(() => (null == r ? null : ng(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, si.Ay)({ channelId: ce.id, content: v?.body ?? r.content, author: x });
            return (0, sa.rh)({ ...e, id: r.id, timestamp: cl(r.createdAt, e.timestamp), state: eW.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: ce.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, si.Ay)({ channelId: ce.id, content: "", author: ct })),
        k = i.useMemo(
            () =>
                (0, sa.rh)({
                    ...y,
                    timestamp: cl(n, y.timestamp),
                    state: eW.cmJ.SENT,
                    ...(null != b ? { type: eW.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, uH.A)({ message: k, channel: ce, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = cr(w, m, u7.OS);
    return (0, a.jsxs)("div", {
        className: u7.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(uz.A, {
                className: u7.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ci, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: cn(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: u7.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(sJ.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cd(e) {
    let { onSelect: t, onClose: n = eV.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          label: A.intl.string(C.default.H8Jfhu),
                          icon: rp.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eu.Dr, { id: "view-trace", label: "View Trace", icon: nn.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function cm(e) {
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
        j = null != v && null != g ? () => cf(v, g) : void 0,
        b =
            ((t =
                n1() && "assistant" === x.role && (0, r3.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [uD.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uD.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((nQ = { projectId: e, traceId: t }), [...nY])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(o3, {
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
                          void (0, eV.jA)(t, (e) => (0, a.jsx)(cd, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cc, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(u9, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(oR, {
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
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              cf(
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
function cf(e, t) {
    (0, uO.F)({ onConfirm: () => t(e) });
}
var ch = n(288539);
function cp(e, t, n) {
    return (0, a.jsx)(ch.A, { userId: e, content: `@${t}` }, n);
}
function cg(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e7(l), [l]);
            let r = (0, o.bG)([eQ.default], () => (null == l ? null : eQ.default.getUser(l)), [l]),
                a = (0, eZ.tx)(r),
                s = u_(e),
                u =
                    (0, o.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? A.intl.string(C.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? A.intl.format(C.default.Lwsrhg, { app: s, server: u })
                        : A.intl.format(C.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? A.intl.format(C.default.mT7EQG, { app: s, server: u })
                        : A.intl.format(C.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? A.intl.format(C.default["4LVIeo"], { app: s, server: u })
                        : A.intl.format(C.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? A.intl.format(C.default["4VQfid"], { channel: e, server: u })
                        : A.intl.format(C.default.RlMIJN, { channel: e, server: u, ...c });
                }
            }
        })(t, n, cp);
    return (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let cx = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rU.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = null != o.attachments && o.attachments.length > 0 ? o.attachments : null;
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(co, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != e || null != u
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != e ? (0, a.jsx)(oI.A, { projectId: l, attachments: e }) : null,
                                              null != u ? (0, a.jsx)(oK, { send: u }) : null,
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
                                    return (n) => (0, u$.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cc, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(oI.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, {
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
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cc, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(uR, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cc, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(cg, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(uM, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(o3, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oP, {
                            projectId: l,
                            steps: cv,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cm, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, uC.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, uC.A)(e.row, t.row, ["message"]) &&
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
                (0, uC.A)(e.replyTo, t.replyTo) &&
                (0, uC.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cv = [],
    cj = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cb = new WeakMap();
function cy(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function ck(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cw = i.memo(function (e) {
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
        N = i.useCallback((e) => {
            ((y.current = e), w(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, o.bG)([l$.A], () => l$.A.getPublishStatus(t)?.state ?? null),
        T = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id),
        P = i.useMemo(() => {
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
                                        let t = (0, r2.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cb.get(r);
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
                        let a = !(0, r3.BL)(e),
                            i = iy({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, r2.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, r2.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && cj.test(n.prose.content)) m = !0;
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
                                        turnActive: r5(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = cj.test(e.content ?? "");
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
                    (cb.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                    if ("unpublished" !== t) return null;
                    for (let t = e.length - 1; t >= 0; t--) if (null != e[t].publishCta) return e[t].id;
                    return null;
                })(n, _)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = ov.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), ov.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return cy(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : ck(e, t.endKey, t.end - 1) + 1,
                a = ck(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cy(e, a, r));
        })(R, L, g),
        O = i.useRef(D),
        q = i.useRef(R),
        z = i.useRef(P),
        F = i.useRef(null),
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
            F.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        K = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), cy(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cy(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cy(e, i, t.end) : null;
            })(q.current, O.current, {
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
                        let t = O.current;
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
                    (v(), $(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (v(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = q.current), cy(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, v, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && H(e);
    }, [P, H]),
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
            ((O.current = D), (q.current = R), (z.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = F.current;
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
        }, [P, R, D.start, D.end, h, p, B, K]));
    let J = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r3.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, r3.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        er = (0, o.bG)([tf.A], () => tf.A.getSettings(t)?.secrets, [t]),
        ea = i.useMemo(
            () =>
                (function (e, t) {
                    let n = null != t ? new Set(t.filter((e) => e.set).map((e) => e.name)) : null,
                        l = new Map(),
                        r = new Set(),
                        a = !1,
                        i = !1;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let s = e[t];
                        if (null == s) continue;
                        if ("user" === s.role) {
                            i =
                                i ||
                                (function (e) {
                                    let t = e.content.trim();
                                    return (
                                        t === A.intl.string(C.default.UGqnoV) || t === A.intl.string(C.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, r3.BL)(s)) continue;
                        let u = i;
                        for (let e of (u && null == n
                            ? l.set(s.render_id, "pending")
                            : u && null != n && o.every((e) => n.has(e.name))
                              ? l.set(s.render_id, "received")
                              : a
                                ? l.set(s.render_id, o.some((e) => r.has(e.name)) ? "superseded" : "inactive")
                                : l.set(s.render_id, "open"),
                        o))
                            r.add(e.name);
                        ((a = !0), (i = !1));
                    }
                    return l;
                })(n, er),
            [n, er],
        );
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: X()(o1.x7, o1.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: o1.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? C.default.Td4Sf4 : C.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: o1.x7,
            children: (0, a.jsx)(o3, { role: "assistant", children: (0, a.jsx)(cc, { content: A.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(o2.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: o1.x7,
            children: [
                P.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cx,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && S === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        cx,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: H,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Z.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === J ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                null != en && W
                    ? (0, a.jsx)(o3, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cc, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.string(C.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(uN, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cN = n(731084),
    cC = n(823376),
    cA = n(187447);
function cS(e) {
    let { activity: t, id: n } = e,
        l = (0, r1.j)(),
        { text: r, revealing: s } = u2(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cA.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rZ.Ch, {
                ref: o,
                className: cA.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: X()(oT.PT, cA.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: ib.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cE = n(53659);
function cI(e) {
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
        v = (0, cN.xu)({
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
        b = v === cN.kx["0"],
        [y, k] = i.useState(m ?? j),
        w = (0, r1.j)();
    (l || (0, cN.E4)(j, y) || (!w && !b)) && y !== j && k(j);
    let N = i.useRef(j);
    (i.useEffect(() => {
        N.current = j;
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
        ((I.current = b), !b && (0, cN.E8)(E.current) && k(N.current));
    }, [b]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((M.current = (0, cN.E8)(E.current) ? M.current + 1 : 0), k((0, cN.Ov)(M.current)))
                    : N.current !== E.current
                      ? k(N.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cN.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let _ = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = _ && null != T && g === T,
        R = i.useCallback(() => {
            _ && null != T && x((e) => (e === T ? null : T));
        }, [_, T]),
        L = i.useCallback(() => x(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: h,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(cS, { id: p, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: X()(cE.hF, _ && cE.Xd),
                "aria-label": A.intl.string(
                    r
                        ? C.default.qqlUiW
                        : v === C.default.j8tmjK
                          ? C.default.j8tmjK
                          : b
                            ? cN.kx["0"]
                            : C.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? p : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": A.intl.string(v),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cE.bl,
                        children: (0, a.jsx)(cC.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cE.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: w
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cN.vg,
                                  delay: null,
                                  className: cE.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cE.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var cM = n(85428),
    c_ = n(885574),
    cT = n(242779),
    cP = n(436804);
function cR(e) {
    return e.toLocaleString();
}
function cL(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cP.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cR((0, cT.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cR(n.input_tokens),
                    " in \xb7 ",
                    cR(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cR(n.cache_creation_input_tokens)} cache write \xb7 ${cR(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function c$(e) {
    let { project: t } = e,
        n = (0, cT.wU)(t.compaction),
        l = (0, cT.wU)(t.classifier),
        r = (0, cT.wV)(t.orchestrator, t.codegen),
        i = (0, cT.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: cP.si,
        role: "dialog",
        "aria-label": A.intl.string(C.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cP.Q$,
                children: (0, a.jsxs)("div", {
                    className: cP.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cR((0, cT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cL, { label: A.intl.string(C.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(cL, { label: A.intl.string(C.default.ANCEo3), usage: n }),
            (0, a.jsx)(cL, { label: A.intl.string(C.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cP.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(C.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cT.sj)(i) ? "\u2014" : `${Math.round(100 * (0, cT.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cD(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(c$, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: cP.Y$,
                "aria-label": A.intl.string(C.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(c_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var cO = n(997421);
function cq(e) {
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
        p = (0, n2.Zv)(t),
        g = (0, o.bG)([l$.A], () => l$.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, cN.E8)(e) || e === A.intl.string(C.default.mKK6wB) || e === A.intl.string(C.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, cN.uc)(f),
        y = null != s,
        k = s ?? (n ? l : void 0),
        w = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: cO.jf,
        children: [
            (0, a.jsxs)("div", {
                className: cO.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    w || u || p || g
                        ? (0, a.jsx)(cI, {
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
                    null != k ? (0, a.jsx)(cM.A, { startedAt: k }) : null,
                ],
            }),
            null != k ? (0, a.jsx)(cM.L, { startedAt: k }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: cO.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(cD, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": A.intl.formatToPlainString(C.default["tCo+ZM"], { status: (0, cN.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: cO.XF,
                      children: (0, cN.Db)(h),
                  }),
        ],
    });
}
let cz = ["wheel", "touchstart", "pointerdown", "keydown"];
var cF = n(698638),
    cU = n(608711);
let cG = [A.intl.string(C.default["9w+Chc"]), A.intl.string(C.default.WAvmdq), A.intl.string(C.default.SKsrzl)];
function cB(e) {
    var t;
    let n,
        l,
        { projectId: r, restoreState: s, onRestoreVersion: u, onImportProject: c } = e,
        d = (0, o.bG)([e0.A], () => e0.A.getMessages(r), [r]),
        m = (0, o.bG)([x.default], () => x.default.getConnState(r), [r]),
        h = (0, o.bG)([e0.A], () => e0.A.getProjectUsage(r), [r]),
        p = (0, o.bG)([e0.A], () => e0.A.getThinkingActivity(r), [r]),
        v = (0, o.bG)([e0.A], () => e0.A.isCompacting(r), [r]),
        j = (0, o.bG)([e0.A], () => e0.A.isSaving(r), [r]),
        b = (0, o.bG)([a9.A], () => a9.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        {
            stickToBottomRef: N,
            pinned: S,
            atBottom: E,
            unpin: I,
            releasePinHold: M,
            showsLatest: _,
            showsLatestRef: T,
            handleShowsLatestChange: P,
            updatePin: R,
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
                    for (let e of cz) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cz) t.removeEventListener(e, u);
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
        })(k),
        L = i.useCallback(() => {
            function e() {
                let e = y.current;
                if (null == e) return;
                let t = e.querySelector('[data-conjure-turn-status="true"][data-live="true"]'),
                    n = e.querySelectorAll('[data-conjure-turn-status="true"]'),
                    l = t ?? n[n.length - 1];
                if (null == l) return;
                let r = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
                l.scrollIntoView({ block: "center", behavior: r ? "auto" : "smooth" });
            }
            (M(), T.current ? e() : w.current?.showLatest(e));
        }, [M, T]),
        $ = i.useCallback(() => {
            (R(), w.current?.handleScroll());
        }, [R]);
    (i.useLayoutEffect(() => {
        let e = y.current;
        if (null == e) return;
        let t = k.current?.getScrollerNode(),
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
                r && (N.current ? k.current?.scrollToBottom() : w.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [N]),
        i.useEffect(() => {
            (0, x.ensureConnection)(r);
        }, [r]),
        (0, io.E1)(r, (0, r1.j)()));
    let D = nE(r),
        O = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: A.intl.format("channel" === s ? C.default["1cm4fj"] : C.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(r),
        q =
            ((n = (0, o.bG)([it.A], () => it.A.getFailure(r))),
            (l = i.useCallback(() => (0, il.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: A.intl.format(C.default.Up6Ssw, { reason: n }),
                      retry: { text: A.intl.string(C.default["ywA+ET"]), onClick: l },
                  }),
        z = (0, o.bG)([it.A], () => it.A.getSetupStartedAt(r), [r]),
        F = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(r, e, t);
            },
            [r],
        ),
        U = i.useCallback(
            (e, t, n) => {
                let l = n ?? F;
                0 === D.annotations.length
                    ? l(e, t)
                    : (l(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nc(e.comment)),
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
                                      a.push(`${t + 1}. ${nf(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: D.annotations, metaComment: e, context: D.context }),
                          t,
                      ),
                      nN(r));
            },
            [D, F, r],
        ),
        G = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rF)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, x.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rF.get(e);
                            (rF.delete(e), rG(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(r) ||
                e0.A.isThinking(r)) &&
                (0, x.interruptTurn)(r);
        }, [r]),
        B = i.useCallback((e) => re(r, e.implementation_prompt), [r]),
        [K, V] = (function (e) {
            let [t, n] = i.useState(() => iv(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iv(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        H = i.useCallback(() => F(A.intl.string(C.default["t5CN3+"])), [F]),
        W = i.useCallback((e, t, n) => re(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        X = i.useCallback((e) => (0, ie.X)(r, e), [r]),
        J = i.useCallback((e) => (0, g.vX)(r, e), [r]),
        Y = i.useCallback((e) => rr(r, "chat", Array.from(e), J), [r, J]),
        Z = i.useCallback(() => re(r, A.intl.string(C.default.Zc7gML)), [r]),
        ee = s?.status === "restoring",
        el = "open" === m && !ee,
        er = d[d.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, es] = i.useState(null),
        eo = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, ed] = i.useState(null),
        em =
            er?.appBuildRequest != null && null == eo && (0, r3.BL)(er) && er.appBuildRequest.id !== ec
                ? er.appBuildRequest
                : null,
        ef = i.useCallback(() => {
            null != em && ed(em.id);
        }, [em]),
        eh = (0, o.bG)([tf.A], () => tf.A.getSettings(r), [r]),
        [ep, eg] = i.useState(null),
        ex =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, r3.BL)(er) &&
            er.id !== ep &&
            ((t = er.settingsRequest),
            null != eh &&
                (t.keys ?? []).some((e) => {
                    let t = eh.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return eh.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = eh.values[e];
                    return null == n || "" === n;
                }))
                ? er
                : null,
        ev = ex?.settingsRequest ?? null,
        ej = i.useCallback(() => {
            null != ex && eg(ex.id);
        }, [ex]),
        eb = null != ev,
        [ey, ek] = i.useState(null),
        ew = eo?.id ?? em?.id ?? ex?.id;
    i.useLayoutEffect(() => {
        let e = k.current?.getScrollerNode(),
            t = ey?.firstElementChild;
        if (null == ey || null == e || !(0, lj.vq)(t, HTMLElement) || null == ew) return;
        function n() {
            N.current && k.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - ey.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [ey, ew, k, N]);
    let eN = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([e0.A], () => e0.A.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, o.bG)([e0.A], () => e0.A.isHistoryUnavailable(r), [r]),
            connState: m,
        }),
        eC = "loading" === eN && 0 === d.length,
        eA = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return cG[e % cG.length];
        }, [r]),
        eS = ea ? A.intl.string(C.default.Zc7gML) : "greeting" === eN && 0 === d.length ? eA : null,
        eE = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, r3.BL)(t)) return t;
            }
        }, [d]),
        eI = null != eE,
        eM = null != eE ? (0, is.S)(eE) : void 0,
        e_ = ea && el ? Z : void 0,
        eT = i.useCallback(() => re(r, A.intl.string(C.default.EMgIuY)), [r]),
        [eP, eL] = i.useState(null),
        [e$, eD] = i.useState(eI);
    (e$ !== eI && (eD(eI), eI || eL(null)),
        i.useEffect(() => {
            if (!eI) return;
            let e = k.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eL(null)
                        : eL(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eI, eE?.steps, _]));
    let eO = _ ? eP : "bottom",
        eq = i.useMemo(() => (null != eE ? (0, r7.b9)(eE.steps) : ""), [eE]),
        ez = i.useMemo(() => (null != eE ? ((0, r2.lt)(eE.steps) ?? eE.todos) : void 0), [eE]),
        eF = eE?.provisionalTodo,
        eU = null != eE && r5(eE),
        eG = i.useMemo(() => {
            var e;
            return null != eE ? ((e = eE.steps), (0, iA.k)((0, r2.Jf)(e, !0).tasks)) : void 0;
        }, [eE]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: cU.TE,
        children: [
            el
                ? (0, a.jsx)(r0.A, {
                      title: A.intl.string(C.default.gy7byi),
                      description: A.intl.string(C.default["dkv/WO"]),
                      icons: cF.ir,
                      onDrop: Y,
                  })
                : null,
            (0, a.jsx)(af, {
                onJumpToActivity: L,
                line: eq,
                placement: eI && "top" === eO ? "top" : null,
                todos: ez,
                todosLive: eU,
                provisionalTodo: eF,
                agents: eG,
            }),
            (0, a.jsxs)("div", {
                className: cU.JX,
                children: [
                    (0, a.jsx)(rZ.Ch, {
                        ref: k,
                        onScroll: $,
                        scrollbarGutter: eC ? "both-edges" : "stable",
                        className: [cU.N$, E ? null : cU.hB, eb ? cU.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(cw, {
                            projectId: r,
                            messages: d,
                            emptyState: eN,
                            floatingSettingsMessageId: ex?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? H : void 0,
                            draftHasText: K,
                            onApprovePlan: el ? eT : void 0,
                            onRestoreVersion: ee || eI ? void 0 : u,
                            scrollerRef: k,
                            stickToBottomRef: N,
                            pinned: S,
                            onUnpin: I,
                            handleRef: w,
                            onShowsLatestChange: P,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cU.NJ,
                        children: (0, a.jsx)(cq, {
                            projectId: r,
                            thinking: eI,
                            turnStartedAt: eM,
                            restoring: ee,
                            remixStartedAt: z,
                            recalling: eC,
                            thinkingActivity: p,
                            compacting: v,
                            saving: j,
                            projectUsage: h,
                            connState: m,
                        }),
                    }),
                    null == eo
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ek,
                              className: eb ? `${cU.B5} ${cU.J9}` : cU.B5,
                              children: (0, a.jsx)(
                                  a8,
                                  { projectId: r, clarification: eo, onSubmit: el ? W : void 0, onDismiss: eu },
                                  eo.id,
                              ),
                          }),
                    null == em
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ek,
                              className: cU.B5,
                              children: (0, a.jsx)(
                                  ab,
                                  { projectId: r, request: em, canSend: el, onDismiss: ef },
                                  em.id,
                              ),
                          }),
                    null == ev
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eo && null == em ? ek : void 0,
                              className: cU.B5,
                              children: (0, a.jsx)(ii, { projectId: r, request: ev, onDismiss: ej }, ex?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cU.Jx,
                children: [
                    (0, a.jsx)(af, {
                        onJumpToActivity: L,
                        line: eq,
                        placement: eI && "bottom" === eO ? "bottom" : null,
                        todos: ez,
                        todosLive: eU,
                        provisionalTodo: eF,
                        agents: eG,
                    }),
                    0 === D.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cU.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: A.intl.formatToPlainString(C.default["7b49dS"], {
                                          count: D.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: A.intl.string(C.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(et.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: A.intl.string(C.default["/zOv9+"]),
                                      onClick: () => nN(r),
                                  }),
                              ],
                          }),
                    null == q
                        ? null
                        : (0, a.jsx)("div", {
                              className: cU.qB,
                              children: (0, a.jsx)(t0.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: q.message,
                                  action: q.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cU.Db,
                              children: [
                                  (0, a.jsx)(t0.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: cU.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: A.intl.string(A.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tl.K, {
                                              "aria-label": A.intl.string(A.t.WAI6xu),
                                              icon: en.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(oY, {
                        projectId: r,
                        canSend: el,
                        running: eI,
                        restoring: ee,
                        onSend: U,
                        hasPendingContext: D.annotations.length > 0,
                        onInterrupt: el ? G : void 0,
                        onUploadFile: J,
                        onImport: c,
                        onApprove: e_,
                        suggestion: eS,
                        questionOpen: null != eo || null != em || null != ev,
                        modelSettings: b,
                        onModelSettingsChange: X,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var cK = n(761508),
    cV = n(933294),
    cH = n(207438),
    cW = n(683438);
function cX(e, t) {
    return String(e).padStart(t, "0");
}
var cJ = n(667931);
let cY = {
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
    cQ = { running: "Running", ok: "Done", error: "Failed" };
function cZ(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function c0(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function c1(e) {
    return cZ(Math.round(e));
}
function c2(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function c3(e) {
    return c1(e.count > 1 ? e.totalMs : e.end - e.start);
}
let c5 = ["Arguments", "Result", "Usage", "Details"];
function c7(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function c6(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c4(e) {
    let t = (0, cJ.bM)(e)?.end;
    return null != t ? cZ(t) : (0, cJ.lp)(e) ? "interrupted" : "still running";
}
function c8(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${cX(l.getHours(), 2)}:${cX(l.getMinutes(), 2)}:${cX(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${cX(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        c2(e.spans.length),
        (0, cJ.Sj)((0, cJ.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c9(e) {
    let t = (0, cJ.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cJ.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += de(r, "in")),
                (l.output += de(r, "out")),
                (l.cacheRead += de(r, "cache_read")),
                (l.cacheWrite += de(r, "cache_write")),
                (l.costUsd += de(r, "cost_usd"))));
    }
    let r = cJ.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function de(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var dt = n(738188),
    dn = n(430993),
    dl = n(364840),
    dr = n(224640),
    da = n(20742);
let di = { collapsed: new Set(), revealed: new Set() };
var ds = n(872892);
let du = {
    op: ds.Q,
    model: ds.i3,
    tool: ds.dH,
    setup: ds.kc,
    worktree: ds.Qx,
    sandbox: ds.QH,
    build: ds.F1,
    platform: ds.Op,
    other: ds.fv,
};
function dc(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      c2(t.calls, "model call"),
                      `${c0(t.input)} in`,
                      `${c0(t.output)} out`,
                      `${c0(t.cacheRead)} cache read`,
                      `${c0(t.cacheWrite)} cache write`,
                      c6(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: ds.M1,
        children: [
            (0, a.jsx)("div", {
                className: ds.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${ds.DJ} ${du[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: ds.o1,
                children: cJ.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${c1(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: ds.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${ds.nf} ${du[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: cY[e] }),
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
function dd(e) {
    return `conjure-perf-trace-${e}`;
}
function dm(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: ds.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${ds.p0} ${s + o > 85 ? ds.EU : ds.jh}`,
                children: i,
            }),
        ],
    });
}
function df(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eP._ : lA.a,
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
        id: dd(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${ds.$y} ${r ? ds.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: ds.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: ds.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: ds.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: ds.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${ds.nf} ${du[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: ds.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ds.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: ds.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(dt.WarningIcon, { size: "xs", color: "currentColor", className: ds.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dm, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${ds.M0} ${ds.Nh}`
                    : t.running
                      ? `${ds.M0} ${ds.rF}`
                      : `${ds.M0} ${du[t.category]}`,
                duration: c3(t),
            }),
        ],
    });
}
function dh(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dd(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${ds.$y} ${l ? ds.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: ds.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: ds.ai,
                        children: (0, a.jsx)(eP._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: ds.U9 }),
                    (0, a.jsx)("span", { className: `${ds.nf} ${ds.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: ds.MQ,
                        children: c2(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dm, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${ds.M0} ${ds.ab} ${ds.dL}`,
                duration: c1(t.totalMs),
            }),
        ],
    });
}
function dp(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: ds._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: ds.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${ds.nf} ${du[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [c7("Start", `+${c1(e.start)}`), c7("Duration", c3(e))];
                      e.count > 1
                          ? t.push(
                                c7("Calls", String(e.count)),
                                c7("Longest call", c1(e.maxMs)),
                                c7("Spread over", c1(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(c7("Self time", c1(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(c7("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(c7("Notes", l.join(", "))),
                          null != e.span.error && t.push(c7("Error", e.span.error)));
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
                              s = "cost_usd" === t ? c6(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), c7(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...c5.flatMap((e) => {
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
                                            className: ds.xd,
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
                                                            className: ds.vl,
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
function dg(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c9(t), [t]);
    return (0, a.jsx)(dc, { stats: n });
}
function dx(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cJ.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? di : (0, cJ.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cJ.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cJ.x7)(t)), l((n) => (0, cJ._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cJ.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cJ.IE)(t, e);
                        null != n && l((e) => (0, cJ.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cJ.IE)(t, e);
                        null != n && l((e) => (0, cJ.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cJ.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cJ.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cJ.hB)(t));
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
        f = (0, cJ.dj)(t),
        h = i.useMemo(() => (0, cJ.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(dd(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(dn.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: ds.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c4(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c8(t),
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
                                      children: `${c2(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(dg, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: ds.KE,
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
                        "aria-activedescendant": null == o ? void 0 : dd(o),
                        className: ds.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ds.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: ds.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: ds.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${ds.io} ${(e / f) * 100 > 85 ? ds.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : c1(e),
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
                                          df,
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
                                    : (0, a.jsx)(dh, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(dl.j, { children: (0, a.jsx)(dp, { node: s }) }),
        ],
    });
}
function dv(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([uD.A], () => uD.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(dr.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(da.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(dn.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dx, { trace: i }),
        ],
    });
}
let dj = { running: ds.Vf, ok: ds.mo, error: ds.Sr };
function db(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${ds.Om} ${dj[t]}`, role: "img", "aria-label": cQ[t] });
}
function dy(e, t) {
    (0, tj.openModal)((n) => (0, a.jsx)(dv, { ...n, projectId: e, traceId: t }));
}
function dk(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dy(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: ds.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: ds.sU,
                children: [
                    (0, a.jsx)(db, { status: (0, cJ.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: ds._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c4(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: c8(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dw(e) {
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
                console.error("[vibegrations] trace export failed", t, e);
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
            return (0, a.jsx)(tl.K, {
                ...e,
                buttonRef: l,
                icon: tr.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function dN(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([uD.A], () => uD.A.getTimingTraces(t), [t]),
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
                    let t = e.map(c9);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cJ.BF.map((e) => ({
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
              className: ds.Ie,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: ds.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: ds.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: ds.fH,
                              children: (0, a.jsx)(cW.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dw, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rZ.Ch, {
                      className: ds.XG,
                      children: [
                          (0, a.jsx)(dc, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: ds.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dk, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dC(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dA(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function dS(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dE(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dI(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dM(e) {
    return A.intl.string("preview" === e ? C.default["2yLYlG"] : C.default.eiAi57);
}
let d_ = ["all", "preview", "stable", "web"];
function dT(e) {
    switch (e.reason) {
        case "local":
            return A.intl.string(C.default.mUeKML);
        case "unconfigured":
            return A.intl.string(C.default.bGefb5);
        case "unauthorized":
            return A.intl.string(C.default.KLx6Bb);
        default:
            return null != e.detail
                ? A.intl.formatToPlainString(C.default.t09Q6q, { detail: e.detail })
                : A.intl.string(C.default["t+tG59"]);
    }
}
function dP(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : A.intl.formatToPlainString(C.default["XO/bN4"], {
              p50: dC(e.memory_p50_bytes ?? 0),
              p999: dC(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dR = {
    db: () => C.default["7l+DFG"],
    db_preview: () => C.default.FAuffi,
    runtime: () => C.default["Gkl+ab"],
    runtime_preview: () => C.default.ynpJzv,
    bot: () => C.default["5/i0cj"],
    bot_preview: () => C.default.m2jsnw,
};
var dL = n(911608),
    d$ = n(177427);
function dD(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d$.KE,
        children: [
            (0, a.jsx)("div", {
                className: d$.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(el.y, { type: el.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: A.intl.string(C.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: A.intl.formatToPlainString(C.default.INVO50, { time: dE(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: A.intl.string(C.default.oKEgiu), onClick: l }),
        ],
    });
}
function dO(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: d$.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: d$.Gf, children: t }),
            n,
        ],
    });
}
function dq(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: d$.N8,
        children: [
            (0, a.jsxs)("div", {
                className: d$.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: d$.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: d$.kS,
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
function dz(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: d$.N8,
        children: [
            (0, a.jsxs)("div", {
                className: d$.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dL.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? d$.dh : void 0,
            }),
        ],
    });
}
function dF(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dq, {
            label: A.intl.string(C.default.SXP7pD),
            value: A.intl.string(C.default.E5hKVi),
            hint: dT(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dq, {
            label: A.intl.string(C.default.SXP7pD),
            value: "\u2014",
            hint: A.intl.string(C.default.AGvoMJ),
        });
    let l = dP(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dq, { label: A.intl.string(C.default["H/X+FI"]), value: dA(n.cpu_ms) }),
            null != l && (0, a.jsx)(dq, { label: A.intl.string(C.default.lmFmMO), value: l }),
        ],
    });
}
function dU(e) {
    let { analytics: t } = e,
        n = A.intl.string(C.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(dO, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: dT(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dR[t] : null) ? A.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(dO, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: A.intl.string(C.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          dq,
                          {
                              label: n,
                              value: A.intl.formatToPlainString(C.default["w/2voO"], { cpu: dA(t.cpu_ms) }),
                              hint: dP(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var dG = n(678708),
    dB = n(414499),
    dK = n(714800),
    dV = n(81466),
    dH = n(424383),
    dW = n(816943),
    dX = n(268791),
    dJ = n(514042),
    dY = n(872351),
    dQ = n(708988),
    dZ = n(150934),
    d0 = n(417270);
let d1 = "Restart Agent",
    d2 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function d3(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function d5(e, t) {
    return { label: e, value: null != t && "" !== t ? dE(t) : "Unknown", icon: "calendar" };
}
function d7(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function d6(e, t, n, l) {
    let [r, a] = d2[n.status];
    return { label: e, value: `${d7(n.bytes)} of ${d7(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d4(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dE(e.at);
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
let d8 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d9(e) {
    let t = `container ${d3(e.local)} \xb7 remote ${d3(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d8[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${dS(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${dS(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${dS(n)} Ahead, ${dS(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let me = ["main", "wip"];
var mt = n(400154);
let mn = {
        checkout: dG.FolderIcon,
        edit: ak.PencilIcon,
        remote: dB.h,
        commits: dK.e,
        calendar: dV.CalendarIcon,
        save: dH.L,
        objects: ed.R,
        download: dW.$,
        size: dX.$,
        file: dJ.FileIcon,
    },
    ml = {
        ok: [sf.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [dt.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [lX.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dY.z, ea.A.colors.ICON_MUTED],
        behind: [dQ.M, ea.A.colors.ICON_MUTED],
    };
function mr(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([uD.A], () => uD.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cH.DK)(t), [t]),
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
                    `Updated ${dE(r)}`,
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
    return (0, a.jsxs)(dO, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: mt.Lj,
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
                    if (!e.running || null != e.localError) return [d4(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d4(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : dS(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = me.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d9))
                        : l.push(
                              { label: "Main", value: d3(e.heads.main), icon: "remote" },
                              { label: "WIP", value: d3(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? dS(e.commits) : "Unknown", icon: "commits" },
                            d5("Oldest Commit", e.oldest),
                            d5("Newest Commit", e.newest),
                            d4(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${dS(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${dS(t.loose)} loose (${dC(t.looseBytes)}) \xb7 ${dS(t.packed)} packed in ${n} (${dC(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${dS(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${dS(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                d6(
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
                                  d6("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = mn[r],
                        [o, u] = null != i ? ml[i] : [null, void 0];
                    return (0, a.jsx)(
                        dq,
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
function ma(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([uD.A], () => uD.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cH.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uD.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cH.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lJ.h.dispatch({
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
            let u = i.useCallback(() => (0, cH.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: d1,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eH.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: mt.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: mt.nM,
                children: [
                    (0, a.jsx)(dZ.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: d0.RetryIcon,
                        text: d1,
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
                            return `Restarted \xb7 new instance since ${dE(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dE(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function mi(e, t) {
    return (0, a.jsx)(dq, {
        label: e,
        value: A.intl.formatToPlainString(C.default.yHJxuP, { count: dS((0, cT.aM)(t)) }),
        hint: `${dS(t.input_tokens)} in \xb7 ${dS(t.output_tokens)} out \xb7 ${dS(t.cache_read_input_tokens)} cache read`,
    });
}
function ms(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([uD.A], () => uD.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([uD.A], () => uD.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([uD.A], () => uD.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([uD.A], () => uD.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, cH.Lj)(t), [t]),
        f = i.useCallback(() => (0, cH.Lj)(t, !0), [t]),
        h = (0, o.bG)([uD.A], () => uD.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([e0.A], () => e0.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, cH.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: mt.Mf,
        children: [
            (0, a.jsx)(dD, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(dO, {
                title: A.intl.string(C.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dq, {
                                      label: A.intl.string(C.default["9nqym2"]),
                                      value: dS((0, cT.a7)(x.cost_usd)),
                                      hint: A.intl.formatToPlainString(C.default.NCdUIh, { count: dS(x.turns) }),
                                  }),
                                  mi(A.intl.string(C.default.xtxP0e), x.orchestrator),
                                  mi(A.intl.string(C.default["9Sj3SX"]), x.codegen),
                                  mi(A.intl.string(C.default.ANCEo3), (0, cT.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dq, {
                                          label: A.intl.string(C.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${dS(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(dO, {
                title: A.intl.string(C.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: A.intl.string(C.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  mi(A.intl.string(C.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(dq, {
                                      label: A.intl.string(C.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, cT.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(dO, {
                title: A.intl.string(C.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dz, {
                                      label: A.intl.string(C.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: dS,
                                  }),
                                  (0, a.jsx)(dq, {
                                      label: A.intl.string(C.default.mRbSns),
                                      value: `${dS(u.tokensBefore)} \u{2192} ${dS(u.tokensAfter)}`,
                                      hint: A.intl.formatToPlainString(C.default.Vq3skS, {
                                          count: dS(u.retainedMessages),
                                          time: dE(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? A.intl.formatToPlainString(C.default.GMLCNv, { ceiling: dS(b) })
                                      : A.intl.string(C.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(dq, {
                            label: A.intl.string(C.default["4BX5KK"]),
                            value: `${dS(c.projected)} / ${dS(c.threshold)}`,
                            critical: !0,
                            hint: A.intl.formatToPlainString(C.default["6ngCax"], { time: dE(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: mt.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(C.default["1EiJeb"]),
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
                                    if ("idle" === e) return A.intl.string(C.default.wox6Ev);
                                    if ("pending" === e) return A.intl.string(C.default.OcPHQ1);
                                    let t = dE(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return A.intl.formatToPlainString(C.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? C.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? C.default.YZb4hK
                                              : C.default.ZoUSVK;
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
                                            text: A.intl.string(C.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: A.intl.string(C.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: mt.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(C.default["5qCjBu"]),
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
                                    if ("idle" === e) return A.intl.string(C.default.mlok8D);
                                    if ("pending" === e) return A.intl.string(C.default["1ugSyK"]);
                                    let t = dE(e.observedAt);
                                    return A.intl.formatToPlainString(
                                        "restarted" === e.outcome ? C.default["76mfqO"] : C.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(ma, { projectId: t }),
                ],
            }),
            (0, a.jsx)(mr, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(dO, {
                    title: A.intl.string(C.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dq, {
                                        label: A.intl.string(C.default.CLXHAs),
                                        value: dE(j.instance_since),
                                        hint: A.intl.string(C.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dq, { label: A.intl.string(C.default["8V8e1Z"]), value: dS(j.sockets) }),
                                    (0, a.jsx)(dq, {
                                        label: A.intl.string(C.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? A.intl.string(C.default.Wv025I)
                                            : A.intl.string(C.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(dq, {
                                            label: A.intl.string(C.default["3oUYnv"]),
                                            value: dS(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(dF, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(dO, {
                    title: A.intl.string(C.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dq, {
                            label: A.intl.string(C.default.IlDBN3),
                            value: dS(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dq, {
                            label: A.intl.string(C.default["ZdzKR+"]),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, { count: dS(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dq, {
                            label: A.intl.string(C.default.cIhN2W),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, {
                                count: dS(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dq, {
                            label: A.intl.string(C.default["+fOn/q"]),
                            value: dS(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(dq, { label: A.intl.string(C.default.kIHga0), value: dS(v.max_build_attempts) }),
                        (0, a.jsx)(dq, { label: A.intl.string(C.default.Iw03yW), value: dS(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mo = n(237528),
    mu = n(629584),
    mc = n(531893);
function md(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: mc.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: A.intl.string(C.default.h1SE6R),
              }),
          });
}
function mm(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: mc.qf,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: A.intl.string(C.default.h1SE6R),
                  }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: A.intl.string(C.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: mc.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mf(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: mc.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: A.intl.string(C.default.V7Ri8H),
              }),
          })
        : null;
}
var mh = n(109079);
let mp = i.memo(function (e) {
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
        className: mh.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: mh.Mt,
                selectable: !0,
                children: (function (e) {
                    let t = new Date(e);
                    if (Number.isNaN(t.getTime())) return e;
                    let n = String(t.getHours()).padStart(2, "0"),
                        l = String(t.getMinutes()).padStart(2, "0"),
                        r = String(t.getSeconds()).padStart(2, "0");
                    return `${n}:${l}:${r}`;
                })(n.ts),
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
                className: mh.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: mh.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: mh.Cq, children: (0, a.jsx)(mo.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: mh.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mo.v, { text: A.intl.string(C.default.TrC9c8), variant: "redLight" }),
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
                                      className: mh.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": A.intl.string(C.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(lA.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(eP._, {
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
                                                      "[\u2026]" === u.marker ? C.default.kUhyUv : C.default["N+fphl"],
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
                                          className: mh.dF,
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
function mg(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([cV.A], () => cV.A.getLogs(t), [t]),
        l = (0, o.bG)([cV.A], () => cV.A.getHistoryState(t, "logs")),
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
                d_.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dM(e);
                            case "web":
                                return A.intl.string(C.default.IVzfVV);
                            default:
                                return A.intl.string(C.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: mh.$F,
        children: [
            (0, a.jsxs)("div", {
                className: mh.y4,
                children: [
                    (0, a.jsx)(mu.I, {
                        look: "pill",
                        "aria-label": A.intl.string(C.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: mh.KT,
                        children: (0, a.jsx)(cW.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: A.intl.string(C.default["m2+37Y"]),
                            "aria-label": A.intl.string(C.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(md, { state: l }),
            (0, a.jsxs)(rZ.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: mh.sx,
                children: [
                    (0, a.jsx)(mf, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(mm, {
                              state: l,
                              emptyTitle: A.intl.string(C.default.S7qlPG),
                              emptyBody: A.intl.string(C.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: A.intl.string(C.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(mp, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mx(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(dO, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: A.intl.string(C.default.umcjif),
                      }),
        })
    );
}
function mv(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dq, {
                      label: A.intl.formatToPlainString(C.default["01ZMS4"], { env: dM(n) }),
                      value: ((t = l.connected), A.intl.string(t ? C.default.Wv025I : C.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dq, {
                      label: A.intl.string(C.default["z1dh+F"]),
                      value: dS(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dE(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dq, { label: A.intl.string(C.default.Iz5GnJ), value: dS(l.guild_count) }),
                  (0, a.jsx)(dq, {
                      label: A.intl.string(C.default["7UqtNv"]),
                      value: dS(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? A.intl.formatToPlainString(C.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dE(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dq, {
                          label: A.intl.string(C.default["x3+JXJ"]),
                          value: dS(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dq, { label: dM(n), value: A.intl.string(C.default.lTHQss) });
}
function mj(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dq, {
        label: dM(t),
        value: A.intl.formatToPlainString(C.default["Xq+wHT"], {
            requests: dS(n.requests),
            failures: dS(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? A.intl.formatToPlainString(C.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dE(n.last_failure.at),
                  })
                : A.intl.formatToPlainString(C.default["7KlGT6"], { time: dE(n.since) }),
    });
}
function mb(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dq, {
                label: A.intl.formatToPlainString(C.default["92gVTm"], { env: dM(t) }),
                value: dS(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dq,
                    {
                        label: A.intl.formatToPlainString(C.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? A.intl.formatToPlainString(C.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? A.intl.formatToPlainString(C.default.wxAWNv, { time: dE(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function my(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dq, {
        label: dM(t),
        value: A.intl.formatToPlainString(C.default.suAOj9, { calls: dS(n.calls), errors: dS(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mk(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(dO, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: A.intl.string(C.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(dO, {
        title: t,
        children: [
            (0, a.jsx)(dq, {
                label: A.intl.string(C.default.xtD4Zp),
                value: dS(n.requests),
                hint: A.intl.formatToPlainString(C.default["7KlGT6"], { time: dE(n.since) }),
            }),
            (0, a.jsx)(dq, { label: A.intl.string(C.default.gfRhR3), value: dS(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dz, {
                              label: A.intl.string(C.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dA,
                          }),
                          (0, a.jsx)(dq, {
                              label: A.intl.string(C.default.mSKImM),
                              value: dA(r),
                              hint: A.intl.formatToPlainString(C.default.JqMU05, {
                                  total: dA(n.cpu_ms_total),
                                  wall: dA(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dq, {
                      label: A.intl.string(C.default.LEJ5r3),
                      value: A.intl.string(C.default["2Ekb2b"]),
                      hint: A.intl.string(C.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dq, { label: A.intl.string(C.default.xvmL1D), value: dA(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dq, { label: A.intl.string(C.default["4sQYwH"]), value: dS(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dq, {
                label: A.intl.string(C.default.bQenOy),
                value: dS(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: A.intl.formatToPlainString(C.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dq, { label: A.intl.string(C.default.xgpn4Y), value: dI(n.build) }),
        ],
    });
}
function mw(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: A.intl.string(C.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: A.intl.string(C.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: A.intl.string(C.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(dO, {
        title: A.intl.string(C.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dq, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dq, {
                                  label: A.intl.formatToPlainString(C.default.u7kJJ4, { env: n }),
                                  value: dC(l.r2_bytes),
                                  hint: A.intl.formatToPlainString(
                                      l.r2_truncated ? C.default.lH0oQw : C.default.m9h02S,
                                      { count: dS(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dz, {
                                      label: A.intl.formatToPlainString(C.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dC,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mN(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mt.Mf,
        children: [
            (0, a.jsx)(dD, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mk, {
                            title: A.intl.string(C.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mk, {
                            title: A.intl.string(C.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mw, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mx, {
                                title: A.intl.string(C.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mv, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mx, {
                                title: A.intl.string(C.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mj, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mx, {
                                title: A.intl.string(C.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mb, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mx, {
                                title: A.intl.string(C.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(my, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dU, { analytics: t.analytics }),
                        (0, a.jsxs)(dO, {
                            title: A.intl.string(C.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dq, {
                                    label: A.intl.string(C.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dI(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dq, {
                                    label: A.intl.string(C.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dI(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mC = n(592465);
function mA(e) {
    let { projectId: t, onClose: n } = e,
        l = n1(),
        [r, s] = i.useState(() => (l && nQ?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([uD.A], () => uD.A.getStatus(t), [t]),
        d = (0, o.bG)([uD.A], () => uD.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cH.R7)(t), (0, cH.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nQ || nQ.projectId !== e) return null;
            let { traceId: t } = nQ;
            return ((nQ = null), t);
        })(t);
        return null != e && (dy(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        nZ(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, ts.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: uD.A.getStatus(t),
                        last_turn_usage: uD.A.getLastTurnUsage(t),
                        last_compaction: uD.A.getLastCompaction(t),
                        last_compaction_decline: uD.A.getLastCompactionDecline(t),
                        timing_traces: uD.A.getTimingTraces(t),
                        logs: cV.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: A.intl.string(C.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        p = A.intl.string(C.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mC.nd,
        "aria-label": p,
        children: [
            (0, a.jsxs)(lK.Ay, {
                "aria-label": p,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lK.Ay.Icon, {
                            icon: u3.CopyIcon,
                            tooltip: A.intl.string(C.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lK.Ay.Icon, { icon: en.P, tooltip: A.intl.string(A.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lK.Ay.ChannelIcon, { icon: nn.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lK.Ay.Title, { children: p }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mC.rf,
                children: [
                    (0, a.jsxs)(cK.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": A.intl.string(C.default.RvvWIh),
                        className: mC.vR,
                        children: [
                            (0, a.jsx)(cK.V.Item, { id: "logs", children: A.intl.string(C.default["+VRYCm"]) }),
                            (0, a.jsx)(cK.V.Item, { id: "worker", children: A.intl.string(C.default["50D0FZ"]) }),
                            (0, a.jsx)(cK.V.Item, { id: "agent", children: A.intl.string(C.default.UkbTK1) }),
                            l ? (0, a.jsx)(cK.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mg, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mN, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(dN, { projectId: t })
                            : (0, a.jsx)(ms, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var mS = n(365912),
    mE = n(873715);
function mI(e) {
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
let mM = Object.freeze({ x: -1, y: -1 });
function m_(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mI(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mT = n(192888);
function mP(e, t) {
    return (0, mT.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(m_, () => ({ status: "failed" }));
}
var mR = n(108308);
let mL = { x: 25, y: 21 };
function m$(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function mD(e, t, n, l) {
    let r = m$(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mO(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mq(e) {
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
function mz(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nE(u),
        m = (0, n2.Zv)(u),
        f = (0, tj.useHasAnyModalOpen)(),
        h = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        p = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(!1),
        [N, S] = i.useState(null),
        [E, I] = i.useState(!1),
        M = i.useRef(null),
        _ = i.useRef(null),
        T = i.useRef(null),
        [P, R] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, O] = i.useState(null),
        [q, z] = i.useState(null),
        F = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        V = c && !m && !f;
    null == D || (V && D.projectId === u) || O(null);
    let H = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != H) return () => l8(H, "design");
    }, [H]);
    let W = rd(r, V);
    i.useEffect(() => {
        if (!V || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void w(!0);
        (y(!0), w(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, mE.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    y(!1);
                    let n = "completed" === t.status ? mq(t.response) : null;
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
        if (rc(X.current, W)) return;
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
                    (0, mE.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !en.current) return;
                        let l = mq(e.response);
                        null != l && (j(l), nC(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = mI(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nb(u)).active &&
                                0 !== r.size &&
                                ny(u, {
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
                    (S(null), O(null), K(null), j(null));
                };
        }, [V]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        ee = i.useRef(!1),
        en = i.useRef(!1);
    i.useEffect(() => {
        ((en.current = V), V || ((J.current = null), (Y.current = null), (T.current = null), I(!1)));
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
                    mP(n, t).then((t) => {
                        if (((ee.current = !1), en.current)) {
                            if ("picked" !== t.status || mV(t.target, eo.current.rect, eo.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? S(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nd(t.target);
                                (R((t) => (mK(t, e) ? t : e)),
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
            let e = !F.current;
            (z({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), O(null));
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
            if (null == q) return;
            let e = setTimeout(() => z(null), mG);
            return () => clearTimeout(e);
        }, [q]));
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
                    (l8(u, "design"),
                    K(null),
                    (F.current = !1),
                    O({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nd(e) }));
            },
            [u],
        ),
        ec = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ea, y: (e.clientY - t.top) / ea }), [ea]),
        ed = i.useCallback(() => {
            let e = T.current;
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
                if (((T.current = { x: e.clientX, y: e.clientY }), ed(), I(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > mB || Math.abs(e.clientY - D.at.y) > mB) && (F.current = !0);
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
                        n = null != e && mV(e, W, ea) ? null : e;
                    if (null != n) {
                        let e = nd(n);
                        R((t) => (mK(t, e) ? t : e));
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
                null != e && mP(e, mM);
            };
    }, [eh, r]);
    let ep = i.useCallback(() => {
        (I(!1), S(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!V || !E || !ei || L || null != D || null != B) return;
        let e = T.current,
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
                if (null == N || null == W) return;
                let t = ec(e, W);
                eu(
                    N,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nu
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(N, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [N, W, ec, D, B, eu, er],
        ),
        ex = i.useCallback(() => {
            null != u && (S(null), null != nG(u) ? nK(u) : nN(u));
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
                lH.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        lH.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, lj.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mS.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == nG(eb.current)) && ey.current());
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
                    let n = null == N ? -1 : es.findIndex((e) => e.ref === N.ref);
                    S(es[(n + (t ? 1 : -1) + es.length) % es.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != N &&
                    (e.preventDefault(),
                    eu(N, nu, { x: (W?.left ?? 0) + N.rect.x * ea, y: (W?.top ?? 0) + N.rect.y * ea }));
            },
            [u, D, B, es, N, eu, ev, W, ea],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nc(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nd(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nh}${r}${np}${nf(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        er(),
                        S(null)));
            },
            [u, D, er],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && nc(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(l, p) &&
                        ny(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(n, p) &&
                        ny(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eE = c
            ? b
                ? A.intl.string(C.default["Eb/YV9"])
                : k
                  ? A.intl.string(C.default.FD30bh)
                  : A.intl.formatToPlainString(C.default.dTSqLF, { count: d.length })
            : "",
        eI = V && null != W,
        eM = E && null == B,
        e_ = D?.target ?? ef?.target ?? null,
        eT = D ?? q,
        eP = D ?? (q?.instant === !0 ? null : q),
        eR =
            null != ef && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = mO(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(mD(ef.target, ef.anchor, W, ea), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (ef?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = ef;
            mP(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [ef, r]),
        (0, lV.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: mR.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: mR.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: mR.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": A.intl.string(C.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: eg,
                                      onKeyDown: ew,
                                  }),
                                  null != N && null == N.marker && null == D && null == B
                                      ? (0, a.jsx)(mH, { box: m$(N, W, ea) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: mR.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mR.xz,
                                          "data-shown": null != N && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: mR.Ux,
                                              children: [
                                                  null == P
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mR.Tl, children: P.kind }),
                                                  null == P || "" === P.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mR.kh,
                                                            children: [" ", P.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: _,
                                      className: mR.Y,
                                      children: eM ? (0, a.jsx)("div", { className: mR.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mR.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mR.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: mR.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mR.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mR.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: mR.D0, style: m$(e_, W, ea), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = mD(e.target, e.anchor, W, ea),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mR.xL,
                                              style: { ...mO(n, W), width: 24, height: 24 },
                                              "aria-label": A.intl.formatToPlainString(C.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nm(e.target),
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
                                              children: (0, a.jsx)(mF, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(ro, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: W,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != D && nc(eT.draft),
                                            onChange: (e) => {
                                                null != D && O({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: er,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != ef && null != B && null != eR
                                      ? (0, a.jsxs)(mU, {
                                            point: eR,
                                            frame: W,
                                            authorId: ef.authorId,
                                            title: nm(ef.target),
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
                                                          label: A.intl.string(C.default.KCYqWL),
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
                                                          className: mR.aC,
                                                          children: ef.comment,
                                                      }),
                                                nA(ef, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: mR.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mR.nv,
                                                                            children: A.intl.string(C.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default.friIzR),
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
                                                                            text: A.intl.string(C.default.friIzR),
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
                                                                                  disabled: !nc(B.draft),
                                                                                  text: A.intl.string(C.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: A.intl.string(
                                                                                      C.default["6eW9lg"],
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
function mF(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eQ.default], () => eQ.default.getUser(t), [t]);
    return (0, a.jsx)(sh.eu, {
        src: null == n ? null : sx.Ay.getUserAvatarURL(n),
        size: sp._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function mU(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(mL);
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
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: y, top: k, "--custom-conjure-card-origin-x": `${w}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mR.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mR.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: mR.ip, children: (0, a.jsx)(mF, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: mR.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mR.zI, children: g }),
        ],
    });
}
let mG = 300,
    mB = 2;
function mK(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mV(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mH(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mR.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mW = n(659723),
    mX = n(697744),
    mJ = n(130324);
function mY(e) {
    let t = (0, mX.c)(),
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
    let r = (0, r1.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mQ(e) {
    let { className: t } = e,
        { Component: n, events: l } = mY(3e4);
    return (0, a.jsxs)("div", {
        className: X()(t, mJ.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: mJ.ol,
                children: A.intl.string(C.default.AyiQEp),
            }),
        ],
    });
}
var mZ = n(251363),
    m0 = n(944142),
    m1 = n(532247),
    m2 = n(501628);
function m3(e) {
    let { progress: t } = e,
        { Component: n } = mY(1500),
        l = n0.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: m2.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: m2.PM,
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
function m5(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([m0.A], () => (s ? m0.A.getLiveReload(t) : null), [s, t]),
        c = (0, lP.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = (function (e, t) {
            let n = (0, m1.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, m1.QP)(e, a) : null));
            let u = (0, o.bG)(
                    [lg.A],
                    () => {
                        let e = lg.A.getFrame(t);
                        return (0, lm.x1)(e) && e.data.proxyTicketRefreshing;
                    },
                    [t],
                ),
                c = i.useRef(u),
                d = i.useRef(!1);
            return (
                i.useEffect(() => {
                    ((c.current = u), u && (d.current = !0));
                }, [u]),
                i.useEffect(() => {
                    if (null == l) return;
                    function e() {
                        return r(null);
                    }
                    function n(n) {
                        null != n.target && n.target === (0, mZ.ow)(null, t) && e();
                    }
                    ((d.current = c.current), document.addEventListener("load", n, !0));
                    let a = window.setTimeout(() => {
                            d.current || e();
                        }, 4e3),
                        i = window.setTimeout(e, 15e3);
                    return () => {
                        (document.removeEventListener("load", n, !0), window.clearTimeout(a), window.clearTimeout(i));
                    };
                }, [l, t]),
                l
            );
        })(d, c),
        f = (0, m1.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eK.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: m2.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(m3, { progress: f }),
                  })
                : null,
        ],
    });
}
var m7 = n(343030),
    m6 = n(317608),
    m4 = n(338941),
    m8 = n(964404);
let m9 = { width: 1 / 0, height: 1 / 0 };
function fe(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m9;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var ft = n(702083);
function fn(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lR.A], () => ({
            mobile: lR.A.isBuilderPreviewMobile(),
            landscape: lR.A.isBuilderPreviewLandscape(),
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
        d = n ? fe(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: X()(ft.dw, { [ft.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: X()(ft.R9, { [ft.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var fl = n(347927);
function fr(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: X()(fl.Bf, l && fl.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: fl.Ux,
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
var fa = n(957272);
function fi(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, m4.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, lm.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = lg.A.getFrame(e);
                    if (null == t || lx.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT)) return;
                    let n = lg.A.getMainFrame()?.id === e;
                    t.intent === lm.sV.MAIN
                        ? (n || lT.A.promoteFrame(e), lT.A.resetFrameLayoutModes(e))
                        : n && lT.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = lg.A.getFrame(u)) &&
                        ((0, lm.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        m8.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === lm.sV.INLINE && lT.A.promoteFrame(u),
                              lT.A.updateFrameLayoutMode({ frameId: u, layoutMode: lm.y0.PIP }))
                            : e.intent === lm.sV.MAIN && lT.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === m4.n.Launched)
    ) {
        let e = (0, a.jsx)(m6.A, { frameId: s.id, level: m7.A.WithinAppContent, className: fa.Z7, overlay: r });
        return (0, ld.Q5)(n) ? (0, a.jsx)(fn, { children: e }) : e;
    }
    return (0, a.jsx)(fs, { state: o });
}
function fs(e) {
    let { state: t } = e;
    switch (t) {
        case m4.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: fa.qs,
                children: (0, a.jsx)(fr, {
                    title: A.intl.string(C.default["9kpdo7"]),
                    body: A.intl.string(C.default.iIA8Nj),
                }),
            });
        case m4.n.NoApplication:
            return (0, a.jsx)(mQ, { className: fa.qs });
        case m4.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: fa.qs,
                children: (0, a.jsx)(fr, {
                    title: A.intl.string(C.default["7k4GyN"]),
                    body: A.intl.string(C.default.zdIy3R),
                }),
            });
        case m4.n.Error:
            return (0, a.jsxs)("div", {
                className: fa.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: A.intl.string(C.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: fa.tj,
                        children: A.intl.string(C.default.e6GiAZ),
                    }),
                ],
            });
        case m4.n.AwaitingLaunch:
        case m4.n.Loading:
            return (0, a.jsx)("div", { className: fa.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var fo = n(308528),
    fu = n(334738),
    fc = n(688438),
    fd = n(355622),
    fm = n(365971),
    ff = n(703462);
function fh(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: ff.f,
        children: [
            (0, a.jsx)(sJ.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fp() {
    return (0, a.jsx)("div", { className: ff.f, children: (0, a.jsx)(el.y, {}) });
}
function fg(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, li.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([aN.A], () => {
            if (null == u) return null;
            let e = aN.A.getDMFromUserId(u);
            return null != e ? aN.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && fo.A.preload(eW.ME, t);
        }, [t]),
        (n = (0, o.bG)([uY.A], () => uY.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fm.Xg)();
            return (
                (0, fu.yl)(t, e),
                () => {
                    (0, fu.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            fo.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(fp, {})
        : null == u || f
          ? (0, a.jsx)(fh, { message: A.intl.string(C.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(fp, {})
            : (0, a.jsx)("div", {
                  className: ff.g,
                  children: (0, a.jsx)(fc.A, { channel: c, guild: null, chatInputType: fd.oU.SIDEBAR }, c.id),
              });
}
var fx = n(887909),
    fv = n(570962),
    fj = n(998475);
function fb(e) {
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
    } = (0, fx.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: fj.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: fj.rf,
                children: (0, a.jsx)(fv.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: fj.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: fj.z3,
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
                                className: X()(fj.Qs, c ? fj.cw : null, d ? fj.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: fj.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var fy = n(765671),
    fk = n(269094),
    fw = n(714917),
    fN = n(463660),
    fC = n(582063);
let fA = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fS() {
    (0, u.P0)({ text: A.intl.string(C.default.jj3abP), variant: "critical" });
}
function fE(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = A.intl.string(C.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(fI, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fC.m2,
                        children: (0, a.jsx)(eR.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tl.K, {
                                "aria-label": r,
                                icon: tn.SettingsIcon,
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
                accept: fA.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fA.includes(n.type)
                                ? n.size > p.aI
                                    ? (0, u.P0)({ text: A.intl.string(C.default.T8Spiu), variant: "critical" })
                                    : (0, fN.M$)(t, n).catch(fS)
                                : (0, u.P0)({ text: A.intl.string(C.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fI(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([fw.A], () => fw.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": A.intl.string(C.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eu.rX, {
                children: [
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: A.intl.string(C.default.uQpDky),
                        icon: aW.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: A.intl.string(C.default.AiAz8J),
                        icon: d0.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, fN.Og)(t).catch(fS));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.fP, {
                    id: "conjure-overlay-background-blur",
                    label: A.intl.string(C.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, fN.Y1)(t, !i) || fS();
                    },
                }),
            }),
        ],
    });
}
let fM = "/assets/7cec34541705c795.webp";
function f_(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, m4.A)({ applicationId: t, surface: lm.ZN });
    return (i.useEffect(() => {
        let e = (0, lm.VA)(t, lm.ZN);
        return () => (0, ls.r)(e);
    }, [t]),
    r.state !== m4.n.Launched)
        ? (0, a.jsx)(fs, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(fs, { state: m4.n.Loading })
          : (0, a.jsx)(fT, { lifecycle: r, projectId: n, size: l });
}
function fT(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, fy.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: fC.JH,
        children: [
            (0, a.jsx)(fP, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: fC.dw,
                children: (0, a.jsx)("div", {
                    className: fC.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(fk.A, { frame: t.frame, application: t.application, className: fC.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(fE, { projectId: n }) : null,
        ],
    });
}
function fP(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([fw.A], () => (null != t ? fw.A.getBackground(t) : null)),
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
                (0, fN.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(fM);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? fM : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: X()(fC.LO, { [fC.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var fR = n(409478),
    fL = n(652227);
function f$(e) {
    let {
        applicationId: t,
        previewApplicationId: n,
        surface: l,
        frameLaunchParams: r,
        previewReady: i,
        previewGate: s,
        availability: o,
        activeMode: u,
        widgetApplicationId: c,
        overlayWidgetSize: d = n4,
        projectId: m,
        frameOverlay: f,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: fL.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: fL.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(fb, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: fL.RG,
                      children: [
                          (0, n9.yf)(o, u)
                              ? (0, a.jsx)(fi, { applicationId: t, surface: l, launch: r, frameOverlay: f })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fL.qs,
                                        children: (0, a.jsx)(fr, {
                                            wide: !0,
                                            title: A.intl.string(C.default["08U+YO"]),
                                            body: A.intl.string(C.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fR.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(f_, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(fg, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(mQ, { className: fL.qs });
}
var fD = n(175841),
    fO = n(750506),
    fq = n(867193),
    fz = n(539197),
    fF = n(977020);
function fU(e) {
    let { projectId: t } = e,
        n = (0, fz.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fz.Ie)(e);
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
        className: fF.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [fz.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: X()(fF.hN, fF.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: X()(fF.hN, fF.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: X()(fF.UE, { [fF.SP]: n.shown, [fF.Vq]: n.pressed, [fF.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fG = n(417760);
function fB(e) {
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
        u = (0, n2.CU)(n),
        c = "controlling" === t,
        d = A.intl.string(c ? (u ? C.default["VJW/5P"] : C.default["+hD2Iz"]) : C.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(et.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: A.intl.string(C.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: X()(fG.M0, fG.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cC.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(fD.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: fG.ID, children: d }),
                  c ? (0, a.jsx)(eK.A, { children: A.intl.string(C.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: fG.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fG.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fG.sp,
                      children: [
                          (0, a.jsx)(fD.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cC.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fG.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: fG.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: fG.Rb,
                                            children: A.intl.string(C.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: fG.lC, children: m }) : null,
              ],
          });
}
function fK(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, n2.Zv)(null != n && n === l ? t : null),
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
        c = (0, tj.useHasAnyModalOpen)(),
        d = lw(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!ly(e)) return;
                let t = lb(e);
                null != t && (0, lv.sP)(t);
            })(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = ru(r());
            f((t) => (rc(t, e) ? t : e));
            let t = null == h ? null : ru(h);
            (x((e) => (rc(e, t) ? e : t)), null != h && (0, fq.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fq.C)(0));
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
        N = (function () {
            let [e] = i.useContext(fO.uY),
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
                      className: fG.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fG.QF,
                          children: (0, a.jsx)(fB, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, lV.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: fG.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? A.intl.string(C.default.oWcemF)
                                : "handoff" === u
                                  ? A.intl.string(C.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, lV.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fG.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fG.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(fU, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var fV = n(399503),
    fH = n(853555),
    fW = n(558960),
    fX = n(187645);
let fJ = new Map(),
    fY = !1;
function fQ() {
    let e = new Map();
    for (let t of new Set([...e0.A.getActivityOrderedProjectIds(), ...(0, n2.T7)()])) {
        if (!(e0.A.isThinking(t) || (0, n2.wK)(t))) continue;
        let n = (function (e) {
            let t = B.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, ld.Rc)(t);
            return (0, lm.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fJ]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fJ.delete(t),
            n.unregisterLookup(),
            fW.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        fJ.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fX.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fZ(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fJ.set(e, l),
                    (l.unregisterLookup = (0, fH.Ng)(e, () => (0, mZ.n5)(n, t))),
                    fW.A.registerFrameTarget(t, n, m7.A.Backstage, void 0));
            })(t, n);
    for (let e of fJ.values()) fZ(e.element);
}
function fZ(e) {
    let t = lR.A.isBuilderPreviewMobile();
    e.classList.toggle(fX.L, !t);
    let n = t ? fe(lR.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var f0 = n(873727),
    f1 = n(147248),
    f2 = n(418842),
    f3 = n(363195),
    f5 = n(818023);
let f7 = null;
var f6 = n(602853),
    f4 = n(517461),
    f8 = n(761929),
    f9 = n(487336);
function he(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, f6.r)(ea.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, f4.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, iu.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, f8.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: f8.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: f9.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: f9.Di, onPointerDown: p }),
            (0, a.jsx)("div", { ref: o, className: f9.kL, style: { width: f }, children: r }),
        ],
    });
}
var ht = n(541940);
function hn(e) {
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
        } = e,
        [h, p] = i.useState(null),
        g = (0, lP.A)(l, s),
        x = g?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([f3.A], () => (0, f0.x4)(f3.A.theme)),
            l = (0, o.bG)([f1.A], () => f1.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([s2.Ay], () => ({
                reducedMotion: s2.Ay.useReducedMotion,
                fontScale: (0, f0.U0)(),
                highContrast: s2.Ay.isHighContrastModeEnabled,
                forcedColors: s2.Ay.useForcedColors,
                underlineLinks: s2.Ay.alwaysShowLinkDecorations,
            })),
            d = n0.hH.useSetting(),
            m = (0, f2.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            p = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, mZ.n5)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++p.current,
                    baseTheme: n,
                    customTheme: (0, f0.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, mT.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, s, d, e, r, m, c]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            f.current ||
                ((f.current = !0),
                queueMicrotask(() => {
                    ((f.current = !1), h.current || v.current());
                }));
        }, []);
        (i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                j();
            }, [l, j]),
            i.useLayoutEffect(() => {
                (x(), j());
            }, [j, x]),
            i.useLayoutEffect(() => {
                let n = (0, mZ.n5)(e, t);
                null != n && n !== g.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mZ.n5)(e, t) && ((g.current = null), j());
                }
                return (document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0));
            }, [t, e, j]),
            i.useEffect(() => {
                let e = new MutationObserver(j);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [j]));
    })(h, x),
        i.useEffect(() => {
            if (null != t) return (0, fH.Ng)(t, () => (0, mZ.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, mZ.ow)(h, x), [h, x]),
        j = i.useCallback(() => (f ? (0, mZ.ow)(h, x) : h), [f, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: X()(ht.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(fK, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: p, className: ht.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(mz, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
            (0, a.jsx)(rX, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: v }),
        ],
    });
}
function hl(e) {
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
        widgetApplicationId: N,
        overlayWidgetSize: S,
    } = e;
    (0, fV.k)(t, N);
    let E = s.type === le.U.MAIN || (0, ld.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lR.A], () => ({
            mobile: lR.A.isBuilderPreviewMobile(),
            landscape: lR.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? f5.aX.LANDSCAPE : f5.aX.PORTRAIT), (f7 = e));
                else {
                    if (f7 !== e) return;
                    ((l = f5.aX.UNHANDLED), (f7 = null));
                }
                lJ.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let I = i.useRef(null),
        [M, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rY.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rY.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (E) return ((0, lL.HV)(l), () => (0, lL.HV)(null));
        }, [l, E]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                fY ||
                    ((fY = !0),
                    e0.A.addChangeListener(fQ),
                    B.Ay.addChangeListener(fQ),
                    lg.A.addChangeListener(fQ),
                    lR.A.addChangeListener(fQ),
                    (0, n2.W3)(fQ),
                    fQ()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            function t() {
                null != e && _(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => rQ(0), []));
    let T = Math.max(360, M - 320),
        P = d || E;
    return (0, a.jsx)("div", {
        ref: I,
        className: ht.LB,
        children: (0, a.jsx)(hn, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, n9.yf)(k, w),
            mainClassName: null == c ? void 0 : X()(ht.ez, { [ht.zt]: d }),
            content: (0, a.jsx)(f$, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: N,
                overlayWidgetSize: S,
                projectId: t,
                frameOverlay: (0, a.jsx)(m5, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && P
                    ? (0, a.jsx)(he, {
                          open: d,
                          maxWidth: T,
                          onWidthChange: rQ,
                          children: (0, a.jsx)("div", {
                              className: ht.cO,
                              children: g
                                  ? (0, a.jsx)(mA, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(mW.A, { projectId: t }),
                                            (0, a.jsx)(lK.Ay, {
                                                "aria-label": A.intl.string(A.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(lK.Ay.Icon, {
                                                                  icon: en.P,
                                                                  tooltip: A.intl.string(C.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lK.Ay.Title, {
                                                    children: A.intl.string(A.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: ht.cb,
                                                children: (0, a.jsx)(
                                                    cB,
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
function hr(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [p, g] = i.useState(!0),
        [v, b] = i.useState(!1),
        y = n1(),
        k = i.useCallback(() => g(!0), []),
        w = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: N, handleRestoreVersion: I } = (function (e, t) {
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
                                (0, n5.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, u.P0)({
                                                        text: A.intl.formatToPlainString(C.default.Z4n6LX, {
                                                            title: (0, n3.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, n7.c)(c, r);
                                                null != e && (0, u.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[vibegrations] version restore failed", c, e),
                                                (0, u.P0)({
                                                    text: A.intl.string(C.default["PSdo+w"]),
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
            integrationStatus: T,
            isPreviewApplicationLoading: P,
            checkingIntegration: R,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: D,
            installAuthorizeProps: O,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)([B.Ay], () => (null == r ? null : B.Ay.getIntegrationStatus(r)), [r]),
                { data: c, isLoading: d } = (0, li.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, n9.Qg)({
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
                        await (0, G.U1)(r, e.signal);
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
            let x = (0, lM.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lM.$)(e, x));
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
                              ...(0, l_.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        q = (0, o.bG)([l$.A], () => (null == _ ? void 0 : l$.A.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: z,
            activeMode: F,
            setMode: U,
            frameSurface: K,
            frameSurfaceOptions: V,
            setFrameSurface: H,
            appChannel: W,
            setAppChannel: J,
            frameLaunchParams: Y,
            widgetApplicationId: Z,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: r,
                    previewApplicationId: a,
                    declaredActivity: s,
                    previewSupportedSurfaces: u,
                    installScope: c,
                    ownerAuthorizationRevoked: d,
                    mainCardOnly: m = !1,
                    supportsOverlay: f = !1,
                    previewAppChannels: h = lf,
                } = e,
                [p, g] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, k] = i.useState(r);
            y !== r && (k(r), g(null), v(null), b(null));
            let w = null != a && a === r ? a : null,
                N = (0, o.bG)([lu.default], () => lu.default.getId()),
                { applicationWidgetConfig: C } = (0, la.A)(N, w ?? void 0),
                A = C?.surfaces,
                S = (0, n9.yZ)({
                    widgetTop: A?.[lr.m.WIDGET_TOP] != null,
                    widgetBottom: A?.[lr.m.WIDGET_BOTTOM] != null,
                    miniProfile: A?.[lr.m.MINI_PROFILE] != null,
                }),
                E = null != w && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, li.YY)(a ?? void 0),
                M = null != a && I?.bot?.id != null,
                { data: _, isLoading: T } = (0, li.YY)(r ?? void 0),
                P = s || (0, lo.X)(_),
                R = null != r && T && null == _,
                L = (0, n9.P5)(u, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != w,
                    botDmResolvable: M,
                }),
                $ = (0, n9.Xm)({ installScope: c, ...L, hasOverlay: f, ownerAuthorizationRevoked: d }),
                D = i.useMemo(() => (0, lc.hR)(u), [u]),
                O = (0, lc.PH)(x, D),
                q =
                    ((t = j),
                    (n = O),
                    (l = h),
                    n !== le.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                z = i.useMemo(() => (null == q ? void 0 : { customId: q }), [q]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, ld.Mm)(r)) {
                            let t = e.surface.type !== (0, lc.BR)(O),
                                n = (((0, lm.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== q;
                            (t || n) && (0, ls.r)(e.id);
                        }
                }, [r, O, q]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, n9.Qs)(p, $),
                    setMode: g,
                    frameSurface: O,
                    frameSurfaceOptions: D,
                    setFrameSurface: v,
                    appChannel: q,
                    setAppChannel: b,
                    frameLaunchParams: z,
                    widgetApplicationId: w,
                }
            );
        })({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(n6.q7.OVERLAY) === !0,
            previewAppChannels: q,
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
                : n4);
    ((0, n8.x)(_, (e) => {
        z.modes.includes(e) && U(e);
    }),
        nZ(_, () => {
            (g(!0), b(!0));
        }));
    let en = z.modes.includes("frame"),
        {
            previewTargetOptions: el,
            handleSelectPreviewTarget: er,
            mobilePreview: ea,
            mobilePreviewLabel: es,
            handleToggleMobilePreview: eo,
            landscapePreview: eu,
            rotatePreviewLabel: ec,
            handleRotatePreview: ed,
            previewSurface: em,
            previewFrame: ef,
            isRefreshing: eh,
            handleRefresh: ep,
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
                                          t === le.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([lR.A], () => lR.A.isBuilderPreviewMobile()),
                h = A.intl.string(f ? C.default.tKGF0Q : C.default.peqEOY),
                p = i.useCallback(() => (0, lL.GG)(!f), [f]),
                g = (0, o.bG)([lR.A], () => lR.A.isBuilderPreviewLandscape()),
                x = A.intl.string(g ? C.default.tunI2l : C.default.DoNdjA),
                v = i.useCallback(() => (0, lL.Lw)(!g), [g]),
                j = (0, ld.jS)(t),
                b = i.useMemo(() => (0, ld.Op)(j, l), [j, l]),
                y = (0, lP.A)(t?.preview_application_id ?? null, b),
                k = (0, lm.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lT.A.refreshProxyTicket(y.id);
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
            modes: z.modes,
            frameSurface: K,
            frameSurfaceOptions: V,
            previewAppChannels: q,
            setMode: U,
            setFrameSurface: H,
            setAppChannel: J,
        }),
        eg = p && !v,
        ex = A.intl.string(eg ? C.default.JD6Oit : C.default.xjJAQm),
        ev = i.useCallback(() => {
            if (v) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [v]),
        ej = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ek,
            designFeedbackLabel: eN,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = nE(e);
            i.useEffect(() => {
                null != e && l && !t && nN(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, n2.Zv)(e),
                s = A.intl.string(a ? C.default.Sme0T0 : l ? C.default.vn5Rzu : C.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nN(e);
                        (n(), nk(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, en, w),
        [eA] = i.useState(() => j.isPlatformEmbedded && (0, lI.qM)()),
        eS = null != nW(_);
    i.useEffect(() => {
        null != _ && eS && !en && nK(_);
    }, [_, eS, en]);
    let eE = i.useCallback(() => {
            null != _ &&
                (w(),
                (function (e) {
                    if (null != nG(e)) return;
                    let { byProject: t } = nF.getState();
                    nF.setState({ byProject: { ...t, [e]: nU } });
                })(_));
        }, [_, w]),
        eI = i.useCallback(() => {
            null != _ && nK(_);
        }, [_]),
        eM = eS ? A.intl.string(C.default.tuQ5f3) : eN,
        e_ = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eT = i.useCallback(() => b(!1), []),
        eP = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ef?.id), (0, x.closeConnection)(e), (0, ls.r)(t)), f());
        }, [c, ef?.id, f]),
        eL =
            ((r = i.useCallback(() => {
                null != c && (k(), (0, x.sendUserMessage)(c.id, A.intl.string(C.default.oU20rd)));
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
                                : (0, eH.A)({
                                      title: A.intl.formatToPlainString(C.default["Gm+u1+"], { name: c.name }),
                                      subtitle: A.intl.string(C.default.M7H3sJ),
                                      confirmText: A.intl.string(C.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          k();
                                          try {
                                              await S(t, e, A.intl.string(C.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: A.intl.string(C.default["Q+l4Hv"]),
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
        e$ = i.useCallback(() => {
            null != c && (0, tY.A)(c, h);
        }, [c, h]),
        eD = (0, n9.JR)(F, D)
            ? { type: "permissions", authorizeProps: O }
            : R && null == T
              ? { type: "checking" }
              : void 0,
        eO = (0, o.bG)([B.Ay], () => null != _ && B.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == c && m) || eO) && (0, d.bG)(eW.BVt.CHANNEL(h, eX.VV.CONJURE));
    }, [h, c, m, eO]);
    let {
            publishOptions: eq,
            publish: ez,
            publishing: eF,
            confirmation: eU,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lB,
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
                c = (0, tm.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(_, h, R || P),
        eG = (0, lD.L)(ez?.status ?? null),
        eB =
            null == ez
                ? null
                : (0, a.jsx)("div", {
                      className: t8.As,
                      children: (0, a.jsx)(eR.m, {
                          text: eG,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eF ? ha : null != eU ? ne.U : void 0,
                              disabled: ez.disabled,
                              onClick: () => ez.run("header"),
                              text: eU ?? ez.label,
                          }),
                      }),
                  }),
        eK = null == c ? void 0 : () => (0, th.A)(c.id, { guildId: h, isPreview: !0, publishOptions: eq }),
        eV = (0, a.jsx)(tZ, {
            title: c?.name ?? A.intl.string(C.default.G1WwgK),
            breadcrumb: { title: A.intl.string(C.default.uk6jhJ), onClick: f },
            project: c,
            onOpenProjectSettings: eK,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t8.FO,
                          children: [
                              (0, a.jsx)(lE, {
                                  targets: el,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(F, K, W),
                                  onChange: er,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === F
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: ea ? ho : hs,
                                                      tooltip: es,
                                                      "aria-label": es,
                                                      selected: ea,
                                                      onClick: eo,
                                                  })
                                                : null,
                                            ea && "frame" === F
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: hu,
                                                      tooltip: ec,
                                                      "aria-label": ec,
                                                      selected: eu,
                                                      onClick: ed,
                                                  })
                                                : null,
                                            (0, a.jsx)(nJ, {
                                                enabled: eA && !eS && !ek,
                                                onLongPress: eE,
                                                children: (0, a.jsx)(ei.A.Icon, {
                                                    ref: ey,
                                                    icon: nt.x,
                                                    iconClassName: t8.D8,
                                                    tooltip: eM,
                                                    "aria-label": eM,
                                                    selected: eS || eb,
                                                    disabled: ek && !eS,
                                                    onClick: eS ? eI : eC,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === F
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(ns.A, { frame: ef }),
                                            (0, a.jsx)(lN, { frame: ef, controlProjectId: c.id }),
                                        ],
                                    })
                                  : null,
                              (0, a.jsx)("div", { className: t8.YJ }),
                              y
                                  ? (0, a.jsx)(ei.A.Icon, {
                                        icon: nn.BugIcon,
                                        tooltip: A.intl.string(C.default.Mt5k9d),
                                        "aria-label": A.intl.string(C.default.Mt5k9d),
                                        selected: v,
                                        onClick: e_,
                                    })
                                  : null,
                              (0, a.jsx)(ei.A.Icon, {
                                  icon: tn.SettingsIcon,
                                  tooltip: A.intl.string(C.default.I2XSKe),
                                  "aria-label": A.intl.string(C.default.I2XSKe),
                                  onClick: eK,
                              }),
                              (0, a.jsx)(tM, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: h,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, B.PV)(c),
                                  canRemix: (0, B.H_)(c),
                                  onRefresh: (0, lm.x1)(ef) ? ep : void 0,
                                  isRefreshing: eh,
                                  onClose: eP,
                                  onExport: eL.onExport,
                                  onImport: eL.onImport,
                                  onRemix: e$,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tj.openModalLazy)(async () => {
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
                                              restoreDisabled: N?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tj.openModalLazy)(async () => {
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
                                      z.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== z.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: hi, tooltip: ex, "aria-label": ex, onClick: ev }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: X()(t8.nj, t4.T),
        children: [
            eL.importInput,
            (0, a.jsx)("main", {
                className: t8.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: t8.j5,
                              children: [
                                  eV,
                                  (0, a.jsxs)("div", {
                                      className: t8.sD,
                                      children: [
                                          (0, a.jsx)(ew.D, {
                                              variant: "heading-lg/semibold",
                                              children: A.intl.string(C.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: A.intl.string(C.default.fINulo),
                                          }),
                                          (0, a.jsx)(et.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: A.intl.string(C.default["WFJ/vb"]),
                                              onClick: () => (0, G.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tm.bI.Provider, {
                              value: eq,
                              children: (0, a.jsx)(
                                  hl,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: em,
                                      frameLaunchParams: Y,
                                      header: eV,
                                      chatOpen: p,
                                      onCloseChat: ej,
                                      chatHeaderAction: eB,
                                      debugOpen: y && v,
                                      onCloseDebug: eT,
                                      onRestoreVersion: I,
                                      onImportProject: (0, B.PV)(c) ? eL.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eD,
                                      availability: z,
                                      activeMode: F,
                                      widgetApplicationId: Z,
                                      overlayWidgetSize: ee,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function ha() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t8.Hv, itemClassName: t8.C5 });
}
function hi(e) {
    return (0, a.jsx)(nl.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hs(e) {
    return (0, a.jsx)(nr.u, { ...e, size: "custom", width: 20, height: 20 });
}
function ho(e) {
    return (0, a.jsx)(na.k, { ...e, size: "custom", width: 20, height: 20 });
}
function hu(e) {
    return (0, a.jsx)(ni.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hc(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, o.yK)([B.Ay], () => B.Ay.getOwnedProjects()),
        s = (0, o.yK)([m.Ay], () => m.Ay.getSelfMember(n)?.roles ?? [], [n]),
        p = (0, o.bG)(
            [f.A, h.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && h.A.can(eW.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [g, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [k, w] = i.useState(null),
        N = (0, V.z9)("VibegrationsScreen"),
        [I, M] = i.useState(null),
        T = (0, c.o)().get(K.f_) === U;
    i.useEffect(() => {
        M(null);
    }, [n, T]);
    let P = i.useMemo(() => (!T && N.some((e) => e.id === n) ? n : U), [N, n, T]),
        R = I ?? P,
        L = R === U ? "user" : "guild",
        $ = R === U ? n : R,
        [O, z] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, s, p]),
        i.useEffect(() => {
            (0, G.dm)(n, j);
        }, [n, j]));
    let F = i.useCallback(
            async (e, t, n) => {
                let l = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(l),
                    (0, x.stageModelSettings)(l, O ?? D),
                    e(l),
                    (0, d.pX)(eW.BVt.CHANNEL(t, eX.VV.CONJURE, l)),
                    v(""),
                    z(null));
            },
            [O],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? g).trim(),
                    n = q({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), w(null));
                    try {
                        await F((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [F, L, $, g, b],
        ),
        X = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), w(null));
                    try {
                        await F(
                            (t) => {
                                var n;
                                (0, x.sendUserMessage)(
                                    t,
                                    ((n = e.name),
                                    A.intl.formatToPlainString(C.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            $,
                            L,
                        );
                    } catch (e) {
                        w((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [F, L, $, b],
        ),
        J = i.useCallback(
            async (e, t) => {
                let n = await (0, G.gA)({ guild_id: t, install_scope: "guild" });
                return (
                    (0, x.ensureConnection)(n),
                    (0, x.stageModelSettings)(n, O ?? D),
                    (0, x.sendUserMessage)(n, (0, H.Wl)(e)),
                    n
                );
            },
            [O],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (B.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, G.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new _.DS((0, _.hj)(e), e.status);
            }
            ((0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE, t)),
                z(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eW.BVt.CHANNEL(t, eX.VV.CONJURE, e)), z(null));
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
                        (0, x.stageModelSettings)(r, O ?? D),
                        await S(r, e, A.intl.string(C.default["LUc7/5"])),
                        (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE, r)),
                        z(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: A.intl.string(C.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, O],
        ),
        el = i.useCallback(
            (e) => {
                (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE));
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
        ? (0, a.jsx)(hr, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t9, {
              projects: r,
              modelSettings: O,
              onModelSettingsChange: z,
              idea: g,
              guildId: n,
              submitting: b,
              createError: k,
              createDisabled: "idea" === (t = q({ idea: g, installScope: L, submitting: b })) || "submitting" === t,
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
              eligibleGuilds: N,
          });
}
