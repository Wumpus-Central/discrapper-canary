(n.r(t), n.d(t, { default: () => hi }));
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
    g = n(666476),
    p = n(989145),
    x = n(591277);
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
var w = n(382541);
class k extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function N(e, t) {
    let { ticket: n, baseUrl: l } = await (0, w.d)(e),
        r = new URLSearchParams({ ticket: n, name: t }),
        a = await fetch(`${l}/agent/export?${r}`);
    if (!a.ok) throw new k(a.status);
    return await a.blob();
}
var C = n(248675),
    A = n(660183);
async function S(e, t, n) {
    (0, x.ensureConnection)(e);
    let l = await (0, p.vX)(e, t);
    (0, x.sendUserMessage)(e, n, [l]);
}
function E(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, g.Oq)(e.size, t)
        ? null
        : A.intl.formatToPlainString(C.default.ThxcOX, { size: (0, g.sM)((0, g.Ju)(t)) });
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
    O = { tier: "balanced", provider: "openai" },
    D = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function z(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var q = n(950305),
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
    { value: "user", icon: q.UserIcon, nameMessage: C.default.s1TsXl },
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
function eg(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(eh.D, {
        "aria-disabled": l,
        "aria-label": n,
        className: t,
        onClick: l ? void 0 : r,
        children: i,
    });
}
var ep = n(865665),
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
            r ? (0, a.jsx)(ep.C, { area: 64, radius: n, color: ea.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var ey = n(864970),
    ew = n(707554),
    ek = n(297264),
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
            ? (0, a.jsx)(ew.H, { children: (0, a.jsx)(ey.o, { ref: e, text: d, variant: eI, delay: null }) })
            : (0, a.jsx)(ek.D, { variant: eI, children: d }),
    });
}
var eP = n(900797),
    eT = n(320448),
    eR = n(866665),
    eL = n(783977),
    e$ = n(344587),
    eO = n(534554),
    eD = n(392208),
    ez = n(837984),
    eq = n(359589),
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
        h = eD.P.indexOf(t.tier),
        g = d ? eP.t : eT._,
        p = eD.P.map(eO.D0),
        x = (0, eO.Tc)(t.tier),
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
                          children: (0, a.jsx)(eq.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
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
                                        (0, a.jsx)(g, {
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
                                (0, a.jsx)(ez.A, {
                                    activeIndex: h,
                                    stops: p,
                                    ariaLabel: A.intl.string(C.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = eD.P[e];
                                        null != n && n !== t.tier && s((0, eO.CM)((0, eO.j6)(t, n)));
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
        [d, m] = (0, eq.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = eU(f);
    return (0, a.jsx)(es.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
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
                entered: p,
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
    tg = n(189714),
    tp = n(733791),
    tx = n(189213),
    tv = n(331322),
    tj = n(192308),
    tb = n(664619),
    ty = n(706935);
function tw(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(null),
        h = "delete" === l,
        g = h ? (0, tp.fI)(n) : (0, tp.Kd)(n),
        p = h ? null : (0, tp.L4)(n),
        x = (0, tp.Mi)(n),
        v = h
            ? A.intl.formatToPlainString(C.default.CJBhb2, { name: n.projectName })
            : A.intl.formatToPlainString(C.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tb.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(A.intl.string(h ? C.default["0XDHob"] : C.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tp.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tx.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tp.WX)((0, ty.tb)(C.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tp.J)(n) : A.intl.string(C.default["8OKM1N"]),
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
                g.length > 0 || null != p
                    ? (0, a.jsx)(ty.Ay, {
                          items: g,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function tk(e) {
    (0, tj.openModal)((t) => (0, a.jsx)(tw, { ...t, ...e }));
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
            onHistory: g,
            onRefresh: p,
            isRefreshing: x = !1,
            onClose: v,
            refreshApplicationId: j,
            previewProjectId: b,
            onCloseMenu: y,
        } = e,
        w = (0, tg.iI)(t),
        k = i.useContext(tm.bI),
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
        P = (0, tp.Bs)(t),
        T = (0, tp.CU)(t) && s,
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
        O = s && null != m,
        D = $ || null != d || O || null != h || null != g,
        z = ts.p5 && null != l,
        q = ts.p5,
        F = w ? e6.BellIcon : e4.BellSlashIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": A.intl.string(A.t.ogxXGq),
        onClose: y,
        onSelect: y,
        children: [
            null != p || null != v
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "refresh",
                                    icon: e8.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e8.RefreshIcon },
                                    label: A.intl.string(C.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
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
                    label: A.intl.string(w ? C.default.s9rCuH : C.default["a+i/As"]),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, tg.$L)(t, !w),
                }),
            }),
            D
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          $
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: A.intl.string(C.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: A.intl.string(C.default.WsEEP7), action: d })
                              : null,
                          O
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: A.intl.string(C.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: A.intl.string(C.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: A.intl.string(C.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            q
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          z
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
            s || P?.canRemoveBot === !0
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
                                            publishOptions: k,
                                        }),
                                })
                              : null,
                          P?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: A.intl.formatToPlainString(C.default["3gKG2j"], { server: P.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tk({ project: e, target: P, action: "remove" });
                                    },
                                })
                              : null,
                          T
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
                                        if (null != e && null != P) tk({ project: e, target: P, action: "delete" });
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
    tP = n(104171),
    tT = n(286739);
function tR(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: X()(tT.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(tP.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: tP.DN.SIZE_16 }),
    });
}
var tL = n(217846),
    t$ = n(536637),
    tO = n.n(t$),
    tD = n(941650);
function tz(e) {
    var t;
    let n,
        l,
        r,
        s,
        c,
        m,
        h,
        g,
        p,
        x,
        { project: v, guildId: j, onSelect: b, onRemix: y, shared: w = !1 } = e,
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
                                        409 === (t = e instanceof k ? e.status : null)
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
                : A.intl.formatToPlainString(C.default.AXydi3, { time: tO()(v.updated_at).fromNow() }),
        P = (0, eY.wu)(v),
        T =
            (0, o.bG)([f.A], () => (null == P ? null : (f.A.getGuild(P)?.name ?? null)), [P]) ??
            A.intl.string(C.default["3QFps8"]),
        R = (0, o.bG)([B.Ay], () => B.Ay.isProjectDeleting(v.id), [v.id]),
        L =
            ((t = w ? v : null),
            (m = t?.id),
            (h = t?.owner_user_id),
            (g = (0, o.yK)(
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
                null != h && (e7(h), g.forEach(e7));
            }, [h, g]),
            (p = (0, o.bG)([eQ.default], () => (null == h ? null : eQ.default.getUser(h)), [h])),
            (x = (0, o.yK)([eQ.default], () => g.map((e) => eQ.default.getUser(e)).filter((e) => null != e), [g])),
            i.useMemo(
                () =>
                    null == p
                        ? null
                        : {
                              creator: p,
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
                                  (0, eZ.mG)(p),
                                  x.map((e) => (0, eZ.mG)(e)),
                              ),
                          },
                [p, x],
            )),
        $ = i.useId(),
        O = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: tD.j1, children: v.name }),
        D = {
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
        className: X()(tD.OY, { [tD.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eJ.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tL.a, { projectId: v.id }),
            (0, a.jsxs)(eh.D, {
                className: tD.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eV.jA)(e, () => (0, a.jsx)(tI, { ...D, onCloseMenu: eV.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(t_.A, { project: v, size: "card", className: tD.VJ }),
                    (0, a.jsxs)("div", {
                        className: tD.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tD.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eR.m, { text: L.label, ariaHidden: !0, children: O }) : O,
                                    null == L || R ? null : (0, a.jsx)(tR, { creator: L, className: tD.rb }),
                                    R ? null : (0, a.jsx)(tL.n, { projectId: v.id, className: tD.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tD.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tD.Wb,
                                        children: R ? A.intl.string(C.default.Yh5pAc) : T,
                                    }),
                                    null == _ || R
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
                className: tD.M2,
                children: R
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tD.Pl,
                          children: [(0, a.jsx)(tM, { ...D, trigger: "iconButton" }), N.importInput],
                      }),
            }),
        ],
    });
}
var tq = n(246338);
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
            eligibleGuilds: g,
            modelSettings: p,
            onModelSettingsChange: x,
            onSelectProject: v,
            onIdeaChange: j,
            onCreate: b,
            onCreateFromTemplate: y,
            onStartTemplate: w,
            onSubmitTemplate: k,
            onCancelTemplate: N,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, _] = i.useState(() => ({ guildId: r, filter: tB(r) })),
        T = (M.guildId === r ? M.filter : tB(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tG.set(r, e), _({ guildId: r, filter: e }));
            },
            [r],
        ),
        z = (0, o.yK)(
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
                { id: "conjure-filter-user", value: tF, leading: q.UserIcon, label: A.intl.string(C.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tU, leading: ed.R, label: A.intl.string(C.default["3QFps8"]) },
                ...z.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [z],
        ),
        V = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tK(T);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [T],
        );
    i.useEffect(() => {
        let e = tK(T);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [T]);
    let H = i.useMemo(
            () =>
                V.filter((e) => tV(e, T)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, T],
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
                            leading: q.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tV(e, T))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, T],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tq.Ot)(e, r)
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
                        eligibleGuilds: g,
                        onStart: (t) => w(e.name, t),
                        onSubmit: (t, n, l) => k(e, t, n, l),
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
            [g, r, N, y, S, w, k],
        ),
        ep = A.intl.string(C.default.zzYLlW),
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
        ew = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ek = tK(T) ?? r,
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ek), [ek]),
        eC = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eA, eS] = i.useState(tX),
        eE = i.useMemo(() => tH.w.get(tJ(r)) ?? !1, [r]),
        eI = "success" === eC,
        eM = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tV(e, r)),
        eP = eA ?? (!!eM || "error" === eC || (!eI && eE));
    i.useEffect(() => {
        eI && tH.w.set(tJ(r), eM);
    }, [eI, eM, r]);
    let eT = i.useCallback((e) => {
            (tH.w.set(tW, e), eS(e));
        }, []),
        eR = i.useCallback(() => eT(!eP), [eT, eP]),
        eL = i.useCallback(() => eT(!1), [eT]),
        e$ = A.intl.string(C.default.kar7jh),
        eO = eP ? e$ : A.intl.string(C.default.WSc5Y2);
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
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eP,
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
                                            "aria-label": ep,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t8.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
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
                                                                children: (0, a.jsxs)(eg, {
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
                                                                children: (0, a.jsx)(eg, {
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
                                        onKeyDown: ew,
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
                                                settings: p ?? O,
                                                tiers: D,
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
                                        children: A.intl.string(C.default.NvvCzX),
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t8.pA,
                    hidden: !eP,
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
                                        value: T,
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
                                                    onClick: () => (0, G.hF)(ek),
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
                                                      tz,
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
                                                          tz,
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
    ng = " \u2014 ";
function np(e) {
    if (!e.startsWith(nh)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nh.length),
        a = r.indexOf(ng),
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
function nw(e) {
    let t = nb(e);
    t.active || ny(e, { ...t, active: !0 });
}
function nk(e) {
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
function nP(e, t, n) {
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
function nT(e) {
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
function nO(e, t) {
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
function nD(e) {
    return nT(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let nz = [3, 6, 12],
    nq = [10, 20, 40],
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
        "pick" === t ? nw(e) : nk(e));
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
                        e.present.map((e) => (e.id === t.id ? nP(e, t.dx, t.dy) : e)),
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
    lg = n(729475),
    lp = n(91242),
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
function lw(e) {
    return (0, lv.a3)(document, e);
}
function lk(e) {
    return i.useSyncExternalStore(lw, () => ly(e));
}
function lN(e) {
    let { frame: t, controlProjectId: n } = e,
        l = lk(t?.id ?? null),
        r = (0, n2.Zv)(n),
        i = (0, o.bG)(
            [lx.A, lp.A],
            () => null != t && lx.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT) && lp.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lm.x1)(t) || i || r) return null;
    let s = lb(t.id);
    if (null == s || !(0, lv.Ub)(s)) return null;
    let u = A.intl.string(l ? A.t.Z7MyNB : A.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? lh.z : lg.T,
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
    lP = n(625180),
    lT = n(672929),
    lR = n(111534),
    lL = n(513845),
    l$ = n(722701),
    lO = n(949616),
    lD = n(535466),
    lz = n(321032),
    lq = n(277085);
function lF(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, lD.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lq.p)(b),
        w = h ?? u;
    function k() {
        (r(), o());
    }
    async function N(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, tm.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? k() : x(A.intl.string(C.default.Fi7boI));
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
                { text: A.intl.string(C.default["bz/M68"]), variant: "secondary", onClick: k, disabled: v },
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
                    (0, a.jsx)(lz.r, {
                        iconURL: w,
                        onIconChange: (e) => {
                            (g(e), x(null));
                        },
                        name: c,
                        nameError: y,
                        onNameChange: d,
                        description: m,
                        onDescriptionChange: f,
                        disabled: v,
                    }),
                    null != p
                        ? (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: p })
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
    (0, p.Vm)(e, t).catch((e) => {
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
    return A.intl.formatToPlainString(C.default.JZ59Bo, { size: (0, g.sM)((0, g.Ju)(e)) });
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
                              g.o2 - 3e5,
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
            if (!(0, g.Oq)(e.size, t))
                return "image/png" === t && e.size <= g.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await rn(e).catch(() => null);
                              return null != n && (0, g.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: l4(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: l4(t) } };
            let a = g.XB.has(t) ? URL.createObjectURL(e) : void 0;
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
            allowAttachments: g = !0,
            placeholder: p,
            label: x,
        } = e,
        {
            drafts: v,
            addFiles: j,
            pasteFiles: b,
            removeDraft: y,
            settled: w,
            takeRefs: k,
        } = ra({ projectId: t, surface: "design", onUploadFile: f }),
        N = i.useRef(null),
        S = (d || v.length > 0) && w && !m,
        E = i.useCallback(() => {
            if (!S) return;
            let e = k();
            u(e.length > 0 ? e : void 0);
        }, [S, k, u]),
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
        O = Math.max(n.x, L),
        D = Math.min(Math.max("point" === h ? n.y : n.y + 32 + 4, $), Math.max($, l.top + l.height - R - 8));
    return (0, a.jsxs)("div", {
        ref: _,
        className: X()(rs.M0, { [rs.ho]: I && !m, [rs.ET]: m }),
        style: { left: O, top: D },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
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
                placeholder: p ?? ("" === r ? A.intl.string(C.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": x ?? A.intl.string(C.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !g ? void 0 : b,
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
var ru = n(876798),
    rc = n(48507),
    rd = n(193885),
    rm = n(744898),
    rf = n(803656),
    rh = n(241326),
    rg = n(972213);
function rp(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rx(e, t, n) {
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
let rv = rx("red", rp(ea.A.unsafe_rawColors.RED_400), () => A.intl.string(C.default.tvXfjt)),
    rj = [
        rv,
        rx("yellow", rp(ea.A.unsafe_rawColors.YELLOW_300), () => A.intl.string(C.default.FYuaJ1)),
        rx("green", rp(ea.A.unsafe_rawColors.GREEN_360), () => A.intl.string(C.default["Vv+paS"])),
        rx("blue", rp(ea.A.unsafe_rawColors.BLUE_345), () => A.intl.string(C.default.k9b1QJ)),
        rx("white", rp(ea.A.unsafe_rawColors.WHITE), () => A.intl.string(C.default["1sOXwH"])),
    ];
function rb(e) {
    return rj.find((t) => t.id === e) ?? rv;
}
function ry(e) {
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
function rw(e) {
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
function rk(e) {
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
function rN(e) {
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
let rC = nz.map((e) => rN(Math.min(16, e + 3))),
    rA = nq.map((e) => rN(Math.min(16, e / 2.5))),
    rS = [C.default.jZtZUr, C.default.cTQdD0, C.default.J3ucEg],
    rE = {
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
function rI(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(eR.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: nX.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(ru.k, {
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
function rM(e) {
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
function r_(e) {
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
function rP(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rb(n.colorId),
        h = rE[u],
        g = A.intl.string(C.default.hUm825),
        p = A.intl.string(C.default.n5IA3a),
        x = A.intl.string(C.default.r5dX6t),
        v = A.intl.string(C.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: nX.t$,
        children: [
            (0, a.jsx)("div", {
                className: nX.NT,
                children: (0, a.jsx)(rI, {
                    icon: rw,
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
                    (0, a.jsx)(rI, {
                        icon: ry,
                        label: A.intl.string(C.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => nV(t, "move"),
                    }),
                    (0, a.jsx)(rI, {
                        icon: rc.x,
                        label: A.intl.string(C.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => nV(t, "text"),
                    }),
                    (0, a.jsx)(r_, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: rd.V,
                                label: g,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (nV(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            rC.map((n, l) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: n,
                                        label: A.intl.string(rS[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nk(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (nV(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rE).map((n) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: rE[n].icon,
                                        label: rE[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (nV(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rI, {
                                icon: rk,
                                label: p,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (nV(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rA.map((n, l) =>
                                (0, a.jsx)(
                                    rI,
                                    {
                                        icon: n,
                                        label: A.intl.string(rS[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (nB(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nk(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(r_, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(rM, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rj.map((n) =>
                                (0, a.jsx)(
                                    rI,
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
                    (0, a.jsx)(rM, {
                        icon: rm.e,
                        label: A.intl.string((0, j.isMac)() ? C.default["j/XmBQ"] : C.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(rM, {
                        icon: rf.U,
                        label: A.intl.string((0, j.isMac)() ? C.default.C7jhpn : C.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(rM, {
                        icon: rh.TrashIcon,
                        label: A.intl.string(C.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: nX.Gz, role: "separator" }),
                    (0, a.jsx)(rM, { icon: rg.XLargeIcon, label: A.intl.string(C.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rT = ea.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rR(e, t, n) {
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
                    (e.strokeStyle = rT),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rL(e) {
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
async function r$(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rL(e),
            r = rL(e);
        if (null == l || null == r) return null;
        return (rR(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rO = new Map(),
    rD = new Map(),
    rz = (0, no.D)(() => ({ byMessageKey: {} }));
function rq(e, t) {
    let { [e]: n, ...l } = rz.getState().byMessageKey;
    rz.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rF(e, t) {
    null == t ? rO.delete(e) : rO.set(e, t);
}
function rU(e) {
    return rO.get(e)?.() ?? Promise.resolve(null);
}
let rG = { dx: 0, dy: 0 },
    rB = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rK = 1;
function rV(e) {
    if (null == e) return null;
    let { left: t, top: n, width: l, height: r } = e.getBoundingClientRect();
    return l > 0 && r > 0 ? { left: t, top: n, width: l, height: r } : null;
}
function rH(e) {
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
        null != s && d && !u && nw(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rW, { projectId: s, state: o, resolveIframe: r });
}
function rW(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        [r, s] = i.useState(() => rV(l())),
        [o, u] = i.useState(null),
        [c, d] = i.useState(!1),
        [m, f] = i.useState(0),
        [h, g] = i.useState(null),
        [x, v] = i.useState(rG),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        N = i.useRef(null),
        S = i.useRef(null),
        E = i.useRef(0),
        { tool: I, history: M } = n,
        _ = rb(n.colorId),
        P = "pick" !== I,
        T = "marker" === n.tool ? nz[n.markerSize] : "eraser" === n.tool ? nq[n.eraserSize] : null,
        R = "move" === I ? (M.present.find((e) => e.id === h) ?? null) : null;
    i.useEffect(() => {
        function e() {
            let e = rV(l());
            s((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                (window.clearInterval(t), window.removeEventListener("resize", e));
            }
        );
    }, [l]);
    let L = null != r;
    (i.useLayoutEffect(() => {
        f(b.current?.offsetWidth ?? 0);
    }, [L]),
        i.useLayoutEffect(() => {
            k.current = o;
        }, [o]));
    let $ = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lI.wn)(e);
        if (null != t) return t;
        function n() {
            d(!1);
        }
        (0, lV.flushSync)(() => d(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lI.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rF(t, $), () => rF(t, null)), [t, $]);
    let O = i.useCallback(
        (e) => {
            ((S.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === E.current &&
                    (E.current = requestAnimationFrame(() => {
                        E.current = 0;
                        let e = N.current,
                            t = S.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(E.current), []);
    let D = i.useCallback(() => {
        let e = j.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = w.current,
            s = null == i ? M.present : M.present.map((e) => (e.id === i.id ? nP(e, x.dx, x.dy) : e)),
            o = y.current;
        rR(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, M.present, x]);
    i.useLayoutEffect(D, [D]);
    let z = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        q = i.useCallback(() => {
            let e = k.current;
            if (null == e || null == r) return;
            k.current = null;
            let n = {
                id: `mark-${rK++}`,
                kind: "text",
                color: _.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (nR(n, r) && nH(t, { type: "commit", shape: n }), u(null));
        }, [t, _, r]),
        F = i.useCallback(() => {
            ((k.current = null), u(null));
        }, []),
        U = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != k.current) return void q();
                let t = z(e);
                switch (I) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == R ? null : nO(R, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? R
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
                                                              let t = nO(e, n);
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
                                      })(M.present, t, r);
                        if ((g(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (w.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        u({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!nT(M.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (y.current = {
                                id: `mark-${rK++}`,
                                kind: "erase",
                                width: nq[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (y.current = {
                                id: `mark-${rK++}`,
                                kind: "marker",
                                color: _.value,
                                width: nz[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (y.current = {
                                id: `mark-${rK++}`,
                                kind: I,
                                color: _.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                D();
            },
            [r, I, _, R, M.present, n.markerSize, n.eraserSize, z, q, D],
        ),
        G = i.useCallback(
            (e) => {
                O(e);
                let t = z(e),
                    n = w.current;
                if (null != n) return void v({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = y.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (y.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (y.current = { ...l, to: t }),
                    D());
            },
            [z, O, D],
        ),
        B = i.useCallback(() => {
            j.current?.removeAttribute("data-dragging");
            let e = w.current;
            if (null != e) {
                ((w.current = null), v(rG), nH(t, { type: "move", id: e.id, dx: x.dx, dy: x.dy }));
                return;
            }
            let n = y.current;
            ((y.current = null), null != n && null != r && nR(n, r) ? nH(t, { type: "commit", shape: n }) : D());
        }, [t, r, x, D]),
        K = i.useCallback(() => nK(t), [t]),
        V = i.useCallback(() => nH(t, { type: "undo" }), [t]),
        H = i.useCallback(() => nH(t, { type: "redo" }), [t]),
        W = i.useCallback(() => nH(t, { type: "clear" }), [t]),
        X = i.useRef({ tool: I, selected: R, exit: K, undo: V, redo: H });
    if (
        (i.useLayoutEffect(() => {
            X.current = { tool: I, selected: R, exit: K, undo: V, redo: H };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, lj.Cw)((0, lj.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != k.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = X.current,
                    s = e.key.toLowerCase();
                if (e.metaKey || e.ctrlKey) {
                    if (e.altKey || ("z" !== s && "y" !== s)) return;
                    (e.preventDefault(), "y" === s || e.shiftKey ? i() : a());
                    return;
                }
                if (e.altKey) return;
                if ("Escape" === e.key) {
                    if ("pick" === n) return;
                    (e.preventDefault(), null != l ? g(null) : r());
                    return;
                }
                if (("Delete" === e.key || "Backspace" === e.key) && null != l) {
                    (e.preventDefault(), nH(t, { type: "remove", id: l.id }), g(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rB[s];
                null != o && (e.preventDefault(), nV(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (P) return (lH.A.disable(), () => lH.A.enable());
        }, [P]),
        null == r)
    )
        return null;
    let J = Math.max(8, r.left - m - 8),
        Y = null == R ? null : nO(null == w.current ? R : nP(R, x.dx, x.dy), r);
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
                            ref: j,
                            className: nX.Ji,
                            "data-tool": I,
                            "data-interactive": P && !c ? "" : void 0,
                            "aria-label": A.intl.string(C.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: U,
                            onPointerEnter: O,
                            onPointerLeave: () => O(null),
                            onPointerMove: G,
                            onPointerUp: B,
                            onPointerCancel: B,
                        }),
                        null == T || c
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: N,
                                  className: nX.V$,
                                  "data-tool": I,
                                  "data-color": _.id,
                                  style: { width: T, height: T },
                                  "aria-hidden": !0,
                              }),
                        null == Y
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: nX.r1,
                                  style: { left: Y.x, top: Y.y, width: Y.width, height: Y.height },
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
                null == o
                    ? null
                    : (0, a.jsx)(ro, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + o.at.x * r.width, y: r.top + o.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: A.intl.string(C.default["8gX1lw"]),
                          label: A.intl.string(C.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: o.value,
                          onChange: (e) => u((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: q,
                          onUploadFile: (e) => (0, p.vX)(t, e),
                          onDismiss: F,
                          canSubmit: "" !== o.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: b,
                    className: nX.ej,
                    style: { left: J, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rP, { projectId: t, state: n, onExit: K, onUndo: V, onRedo: H, onClear: W }),
                }),
            ],
        }),
        document.body,
    );
}
var rX = n(308081);
function rJ(e) {
    lJ.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var rY = n(689175),
    rQ = n(65593),
    rZ = n(115982),
    r0 = n(886540);
function r1(e) {
    return !(0, r0.BL)(e) && !0 !== e.stopRequested;
}
var r2 = n(104317),
    r3 = n(643278),
    r5 = n(566424),
    r7 = n(683063),
    r6 = n(138212);
function r4(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: X()(r6.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: X()(r6.wx, null != n && r6.o5, i),
                children: [
                    (0, a.jsx)(Q.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var r8 = n(148590);
function r9(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function ae(e) {
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
        [g, p] = i.useState(l);
    g !== l && (p(l), h(!l));
    let x = i.useCallback(() => h((e) => !e), []),
        v = f ? lA.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(r4, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: r8.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eh.D, {
                                className: r8.L$,
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
        headerClassName: f ? void 0 : r8.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: X()(r8.rf, o), hidden: !f, children: c })],
    });
}
var at = n(883646);
let an = [];
function al(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: X()(at.xL, {
            [at.Vb]: "in_progress" === t,
            [at.cT]: "completed" === t,
            [at.GZ]: "unfinished" === t,
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
                className: at.Qd,
                itemClassName: at.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: at.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: at.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ar(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : an), [n, t]),
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
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: at.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    r7.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: at.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: at.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function aa(e) {
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
            ((t = (r ?? an).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? an) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: at.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: X()(at.AS, { [at.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(al, { status: n }),
                            (0, a.jsx)(Q.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: at.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: at.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ar, { agents: u.get(e.id) ?? an, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: at.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(al, { status: "pending" }),
                          (0, a.jsx)(Q.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: at.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: at.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function ai(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = A.intl.formatToPlainString(C.default["P/I+JW"], { completed: o, total: u }),
        d = A.intl.formatToPlainString(C.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(ae, {
        title: A.intl.string(C.default.RtzECX),
        meta: (0, a.jsx)(r9, { children: c }),
        superseded: s,
        showLabel: A.intl.string(C.default.RKyN9q),
        hideLabel: A.intl.string(C.default.xydHoj),
        className: at.Nr,
        bodyClassName: at.rf,
        beforeBody: r && !s ? (0, a.jsx)(eK.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(aa, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var as = n(308665),
    ao = n(59678),
    au = n(903847);
function ac(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, h] = i.useState(c),
        [g, p] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    (j !== c && (b(c), null != n ? (m(n), h(!0)) : (p(!1), v(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [y, w] = i.useState(!1),
        [k, N] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? w(!0) : N(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => w(!1), 150);
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
              className: au.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: X()(au.vK, { [au.ho]: g && c, [au.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: X()(au.Rk, ao.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r5.A, {
                                        glyph: (0, a.jsx)(as.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eh.D, {
                                    className: au.pZ,
                                    onClick: u,
                                    "aria-label": A.intl.string(C.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: X()(au.Rk, ao.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r5.A, {
                                            glyph: (0, a.jsx)(as.Ay, {}),
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
                                        className: au.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": A.intl.string(C.default.RtzECX),
                                        children: (0, a.jsx)(r3.ClipboardListIcon, {
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
                            className: X()(au.vB, { [au.pg]: x && k, [au.ui]: !x }),
                            children: (0, a.jsx)(ai, {
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
var ad = n(658675),
    am = n(22231),
    af = n(123292),
    ah = n(734057);
let ag = {
        [eW.rbe.GUILD_TEXT]: "text",
        [eW.rbe.GUILD_VOICE]: "voice",
        [eW.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eW.rbe.GUILD_STAGE_VOICE]: "stage",
        [eW.rbe.GUILD_FORUM]: "forum",
        [eW.rbe.GUILD_MEDIA]: "media",
    },
    ap = { channel: "#", role: "@", user: "@", project: "" },
    ax = {
        channel: [C.default["9+dfPT"], C.default.pGSJqE],
        role: [C.default["2VkCoD"], C.default.c8YlX8],
        user: [C.default.GZIAxl, C.default["4bptbQ"]],
        project: [C.default.twlOb6, C.default.twlOb6],
    };
function av(e, t) {
    return A.intl.string(ax[e][+!!t]);
}
var aj = n(155078);
function ab(e) {
    return e.options.some((e) => null != e.image);
}
let ay = [];
async function aw(e, t) {
    let { ticket: n, baseUrl: l } = await (0, w.d)(e);
    await fetch(`${l}/agent/linked-apps?${new URLSearchParams({ ticket: n })}`, {
        method: "PUT",
        body: JSON.stringify({ caller_project_id: t }),
    });
}
function ak(e, t) {
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
var aN = n(890497),
    aC = n(300344),
    aA = n(614733),
    aS = n(904363),
    aE = n(950902),
    aI = n(384017);
function aM(e) {
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
    function g(e) {
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
                        let l = null == (n = ah.A.getChannel(t)?.type) ? void 0 : ag[n];
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
    let p = {
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
        className: aI.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(aN.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(aN.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function a_(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aC.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aM, { ...l, guildId: t, options: r, placeholder: av("channel", !0 === l.question.multi_select) });
}
function aP(e) {
    let { guildId: t, ...n } = e,
        l = (0, aS.A)(t);
    return (0, a.jsx)(aM, { ...n, guildId: t, options: l, placeholder: av("role", !0 === n.question.multi_select) });
}
function aT(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aA.A)(t);
    return (0, a.jsx)(aM, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: av("user", !0 === n.question.multi_select),
    });
}
function aR(e) {
    let t,
        { projectId: n, fallback: l, ...r } = e,
        s =
            ((t = (0, V.qh)("ConjureClarificationProjectPicker")),
            i.useMemo(
                () =>
                    t
                        .filter((e) => e.projectId !== n)
                        .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
                [t, n],
            )),
        o = i.useMemo(
            () =>
                s.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [s],
        );
    return 0 === o.length ? l : (0, a.jsx)(aM, { ...r, options: o, placeholder: av("project", !1) });
}
function aL(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aE.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aR, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(a_, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aP, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aT, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var a$ = n(87221),
    aO = n(144228),
    aD = n(26430),
    az = n(750943),
    aq = n(95477),
    aF = n(256905);
function aU(e, t) {
    let [n, l] = i.useState(null),
        [r, a] = i.useState(!1),
        [s, o] = i.useState(0);
    return (
        i.useEffect(() => {
            let n = !1;
            return (
                (0, p.PK)(e, t).then(
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
                    (0, p.n6)(e, t).then(
                        (e) => {
                            e && 0 === s ? o(1) : a(!0);
                        },
                        () => a(!0),
                    ));
            }, [e, t, s]),
        }
    );
}
var aG = n(907702);
function aB(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = aU(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: X()(aG.Gt, aG.b6),
              children: [
                  (0, a.jsx)(a$.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: A.intl.string(C.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: X()(aG.Gt, { [aG.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: aG.Sl,
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
function aK(e) {
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
            onRemove: g,
        } = e,
        p = A.intl.formatToPlainString(C.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: X()(aG.Vs, { [aG.Q9]: s, [aG.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: aG.Up,
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
                        className: aG.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(aB, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: aG.Gt }),
                            (0, a.jsx)("span", {
                                className: aG.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(ad.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(aO.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: aG.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aj.E)(t) : "")
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
            null != g
                ? (0, a.jsx)("span", {
                      className: aG.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: A.intl.string(C.default.HQEXJM),
                          children: (0, a.jsx)(tl.K, {
                              icon: rh.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": A.intl.string(C.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: aG.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: A.intl.string(C.default["4/eeDD"]),
                            children: (0, a.jsx)(tl.K, {
                                icon: aD._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": p,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function aV(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        g = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, p.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, aF.R)({
                                items: e.map((e, n) => {
                                    let l,
                                        r = g.current.get(t[n].id);
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
        w =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: A.intl.string(C.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: aG.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: X()(aG.fF, "gallery" === f ? aG.nV : aG.nM, { [aG.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            aK,
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
                                onMeasured: (t) => g.current.set(e.id, t),
                            },
                            e.id,
                        ),
                    ),
                    null != w
                        ? (0, a.jsx)(
                              aK,
                              {
                                  projectId: n,
                                  option: w,
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
                              w.id,
                          )
                        : null,
                ],
            }),
            (0, a.jsx)(aH, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: A.intl.string(/\bicons?\b/i.test(l.question) ? C.default.qU4WN6 : C.default.cbMDDB),
            }),
        ],
    });
}
function aH(e) {
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
        className: aG.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: aG.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: az.X,
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
                        className: aG.Fg,
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
                                        (0, g.Oq)(a.size, r)
                                            ? (0, p.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: l4(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: aG.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: aG.Hs,
                              children: (0, a.jsx)(aq.k, {
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
                              className: aG.gd,
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
                                  (0, a.jsx)(af.Q, {
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
var aW = n(29073);
function aX(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: X()(aI.uK, { [aI.ue]: l, [aI.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: aI.dy, children: (0, a.jsx)(ad.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aI.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aI.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aI.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aI.ed,
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
                      className: aI.rM,
                      children: A.intl.string(C.default.zku6r1),
                  })
                : null,
        ],
    });
}
function aJ(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return ab(n)
        ? (0, a.jsx)(aV, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      aX,
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
let aY = [],
    aQ = [];
function aZ(e) {
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
        className: X()(aI.Ge, aI.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aI.aK,
                      children: A.intl.string(C.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(aJ, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: ak(o, u),
            }),
            ab(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aI.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aI.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(am.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: X()(aI.Pu, aI.es), children: c }),
                      ],
                  }),
        ],
    });
}
function a0(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [h, g] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(0),
        [k, N] = i.useState(null),
        [S, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, P] = i.useState(!1),
        T = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        O = i.useRef(0),
        D = null == r,
        z = l.questions.length,
        q = Math.min(y, z - 1),
        F = l.questions[q],
        [U, G] = i.useState({ id: F.id, expanded: !1 }),
        B = U.id === F.id && U.expanded,
        [K, V] = i.useState(null),
        H = c[F.id] ?? "",
        W = !0 === F.multi_select,
        J = ab(F),
        Y = W ? (m[F.id] ?? aY) : ((t = o[F.id]), t?.kind === "option" ? [t.optionId] : ay),
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
                        if (o) return ak(h, m(i));
                        function g(e) {
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
                                    null != l && (0, p.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                g({ busy: null, error: null }),
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
                                    ((0, p.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                (g({ busy: "upload", error: null }),
                                    e.then(
                                        (e) => {
                                            "errorText" in e
                                                ? g({ busy: null, error: { source: "upload", text: e.errorText } })
                                                : j({ attachment: e });
                                        },
                                        () =>
                                            g({
                                                busy: null,
                                                error: { source: "upload", text: A.intl.string(C.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                g({ busy: "link", error: null }),
                                (0, p.gm)(e, t).then(
                                    (e) => (j({ attachment: e }), !0),
                                    (e) => (
                                        g({
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
                            : Promise.allSettled(i.map((e) => aw(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ec = i.useCallback(
            (e, t) => {
                O.current += 1;
                let n = O.current;
                (N({ direction: t, moves: n }),
                    E({ question: F, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    P(!0),
                    w(e));
            },
            [H, ee, el, F, Y],
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
    let em = k?.moves;
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
                if (D) return;
                let t = { ...o, [F.id]: e };
                u(t);
                let n =
                    q < l.questions.length - 1
                        ? q + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, q);
                null == n ? eu(t) : ec(n, n < q ? "back" : "forward");
            },
            [o, l, D, q, F.id, eu, ec],
        ),
        eg = i.useCallback(() => {
            D || 0 === q || ec(q - 1, "back");
        }, [D, q, ec]),
        ep = q > 0 && !D,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [F.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                J ? D || u((e) => ({ ...e, [F.id]: t })) : ef(t);
            },
            [D, J, F.id, ef],
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
        eb = h[F.id] ?? aQ,
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
                          ...eb.map((t) => (t.name.startsWith(ap[e]) ? t.name : `${ap[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, F.id, F.input]),
        ew = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [F.id]: e })), v((e) => ({ ...e, [F.id]: t })));
            },
            [F.id],
        ),
        ek = i.useCallback(() => b(!0), []),
        eN = i.useCallback(() => b(!1), []),
        eC = Z.controlsFor(F, D),
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
                        : (o[F.id] ?? null),
            [o, H, ej, ey, F.id],
        ),
        eL = null != eT && !D,
        eO = q === z - 1,
        eD = i.useCallback(() => {
            null == eT || D || ef(eT);
        }, [D, eT, ef]),
        ez = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, lj.vq)(e.target, HTMLTextAreaElement) ||
                    (0, lj.vq)(e.target, HTMLInputElement) ||
                    ((!(0, lj.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), eD())));
            },
            [ep, eL, eg, eD],
        ),
        eq = J
            ? null
            : (0, a.jsxs)("div", {
                  className: aI.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aI.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(am.PencilIcon, {
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
                          disabled: D,
                          rows: 1,
                          className: aI.Pu,
                          "data-conjure-clarification-other": F.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: X()(aI.$O, { [aI.fI]: eS && !eI, [aI.Oh]: eI }),
        role: "dialog",
        "aria-label": F.question,
        "data-conjure-clarification": l.id,
        "data-state": D ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !_ ? "true" : void 0,
        "data-step": q,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: aI.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: T,
                        className: aI.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${F.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: X()(aW.TK, aI.R_, { [aI.TB]: "exit" === ea, [aI.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: aW.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tl.K, {
                                              icon: B ? eP.t : lA.a,
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
                                      className: X()(aW.gb, aW.Q7),
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
                        className: aI.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: aI.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: aI.Ge,
                                    role: "group",
                                    "aria-labelledby": `${F.id}-label`,
                                    "data-direction": k?.direction,
                                    "data-parity": null == k ? void 0 : k.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aI.aK,
                                                  children: A.intl.string(C.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(aJ, {
                                            projectId: n,
                                            question: F,
                                            selected: Y,
                                            disabled: D,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [F.id]:
                                                                  ((n = t[F.id] ?? aY),
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
                                            ? (0, a.jsx)(aL, {
                                                  projectId: n,
                                                  question: F,
                                                  value: eb,
                                                  disabled: D,
                                                  onChange: ew,
                                                  onFocus: ek,
                                                  onBlur: eN,
                                                  fallback: !1 === F.allow_custom ? eq : null,
                                              })
                                            : null,
                                        !1 === F.allow_custom ? null : eq,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          aZ,
                                          {
                                              projectId: n,
                                              question: S.question,
                                              draft: S.draft,
                                              selected: S.selected,
                                              ownImage: S.ownImage,
                                              ownSelected: S.ownSelected,
                                              direction: S.direction,
                                              disabled: D,
                                          },
                                          S.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            z > 1 || W || J || null != F.input
                ? (0, a.jsxs)("div", {
                      className: aW.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  z > 1
                                      ? A.intl.formatToPlainString(C.default.yzYUjq, { index: q + 1, total: z })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aW.zt,
                              children: [
                                  ep
                                      ? (0, a.jsx)(af.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: A.intl.string(C.default.Pk5lfA),
                                            onClick: eg,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: A.intl.string(eO ? A.t.geKm7t : C.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: eD,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": eO ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var a1 = n(557744),
    a2 = n(223347),
    a3 = n(894443),
    a5 = n(525530),
    a7 = n(572253),
    a6 = n(411236);
function a4(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : A.intl.string(C.default.XuOf5s);
    return (0, a.jsx)(a7.A, {
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
                      className: a6.Mk,
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
                          (0, a.jsx)("div", { className: a6.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: X()(aW.nd, aW.jx),
                      "aria-label": A.intl.string(C.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aW.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aW.TK,
                                      children: A.intl.string(C.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: X()(aW.gb, aW.Q7),
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
                              className: a6.DQ,
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
                              className: aW.qr,
                              children: (0, a.jsx)("div", { className: aW.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var a8 = n(874421),
    a9 = n(404373),
    ie = n(435558),
    it = n.n(ie);
let il = "VibegrationsComposerDrafts";
function ir() {
    return tH.w.get(il) ?? {};
}
let ia = new Map(),
    ii = it().throttle(() => {
        if (0 === ia.size) return;
        let e = ir();
        for (let [t, n] of ia) "" === n ? delete e[t] : (e[t] = n);
        (ia.clear(), tH.w.set(il, e));
    }, 1e3);
class is extends o.Ay.Store {
    getDraft(e) {
        let t = ia.get(e);
        return null != t ? t : (ir()[e] ?? "");
    }
}
let io = new is(lJ.h, {
    LOGOUT: function () {
        return (ia.clear(), ii.cancel(), tH.w.remove(il), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (ia.set(t, n), ii(), "" === n && ii.flush(), !1);
    },
});
function iu(e) {
    return "" !== io.getDraft(e).trim();
}
var ic = n(29080),
    id = n(46054);
function im(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, rZ.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, rZ.Lf)(r) }),
    };
}
var ih = n(520521),
    ig = n(216306),
    ip = n(60160),
    ix = n(16634),
    iv = n(651438);
function ij(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, rZ.SY)(n.steps),
        d = u ? (0, iv.Q)(n) : (0, ig.R)(o),
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
                                    className: ao.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            ix.A,
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
                                      className: ao.iq,
                                      children: (0, a.jsx)(ip.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r5.A, {
        glyph: (0, a.jsx)(r7.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, ig.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ao.nC,
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
var ib = n(998445),
    iy = n(643210),
    iw = n(648127),
    ik = n(372795),
    iN = n(163897);
let iC = "conjure-browser-viewer";
function iA(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iy.A],
            () =>
                n.flatMap((e) => {
                    let n = iy.A.getTab(t, e);
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
        className: iN.kR,
        "aria-label": A.intl.string(C.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iS, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iS(e) {
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
        u = (0, tj.useHasModalOpen)(iC),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, iw.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: X()(iN.Nr, f && iN.Xj),
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
                    { modalKey: iC },
                )
            );
        },
        "aria-label": A.intl.formatToPlainString(C.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: iN.Gt,
                children: [
                    (0, a.jsx)(ik.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iN.Ji,
                        "aria-label": A.intl.formatToPlainString(C.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iN.qf,
                              children: (0, a.jsx)(ib.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iN.HS,
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
                className: iN.pG,
                children: [
                    (0, a.jsx)("span", { className: X()(iN.W9, f && iN.oM) }),
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
var iE = n(268409);
let iI = new WeakMap(),
    iM = new WeakMap();
function i_(e) {
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
                    let t = iI.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = iM.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), iM.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iI.set(e, n), n);
                })(e0.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iE.h, children: (0, a.jsx)(iA, { projectId: t, sessionIds: u }) });
}
var iP = n(469393);
function iT(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n3.lG)(t.authored_at);
    return (0, a.jsx)(r4, {
        title: A.intl.string(C.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: iP.r,
            children: [
                (0, a.jsxs)("div", {
                    className: iP.z,
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
var iR = n(377941),
    iL = n.n(iR);
function i$(e) {
    return "launch" === e.kind || 4 === e.type ? "\u21EA /" : 2 === e.type || 3 === e.type ? "" : "/";
}
let iO = {
    [n6.q7.APP_CHANNEL]: C.default.zrk93C,
    [n6.q7.VOICE_CHANNEL]: C.default.r5Ra0p,
    [n6.q7.ACTIVITY]: A.t.IC5Ann,
    [n6.q7.OVERLAY]: C.default.liTNf3,
    [n6.q7.PROFILE_WIDGET]: C.default["EswAi+"],
    [n6.q7.AUTOMOD]: C.default.DnWMLj,
    [n6.q7.BOT]: C.default.VFWfz1,
    [n6.q7.APPLICATION_COMMANDS]: C.default.w7JaEP,
};
function iD(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let iz = {
        [n6.q7.APP_CHANNEL]: C.default["3/aHX6"],
        [n6.q7.VOICE_CHANNEL]: C.default["3/aHX6"],
        [n6.q7.ACTIVITY]: C.default["3/aHX6"],
        [n6.q7.OVERLAY]: C.default["rPpf5/"],
        [n6.q7.PROFILE_WIDGET]: null,
        [n6.q7.AUTOMOD]: null,
        [n6.q7.BOT]: null,
        [n6.q7.APPLICATION_COMMANDS]: null,
    },
    iq = [n6.q7.OVERLAY, n6.q7.ACTIVITY, n6.q7.APP_CHANNEL, n6.q7.VOICE_CHANNEL];
function iF(e) {
    return iq.find((t) => iD(e, t)) ?? null;
}
var iU = n(155718);
let iG = ["command", "user_command", "message_command", "message"],
    iB = new Set([iU.kc.CHAT, iU.kc.USER, iU.kc.MESSAGE]);
function iK(e) {
    return e.type ?? iU.kc.CHAT;
}
function iV(e) {
    return "launch" !== e.kind && iB.has(iK(e));
}
function iH(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function iW(e, t) {
    let n = iG.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !iH(e)), ...n.filter(iH)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || iH(r) || l.push(r);
    }
    return iG.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let iX = {
        [n6.q7.APP_CHANNEL]: C.default.NBUCvF,
        [n6.q7.VOICE_CHANNEL]: C.default.vrwvp8,
        [n6.q7.ACTIVITY]: C.default.oMJF0T,
        [n6.q7.OVERLAY]: C.default.u06zRd,
        [n6.q7.PROFILE_WIDGET]: C.default.NZrNII,
        [n6.q7.AUTOMOD]: C.default["bu0/4I"],
        [n6.q7.BOT]: C.default.Crinff,
        [n6.q7.APPLICATION_COMMANDS]: C.default.M3ty0r,
    },
    iJ = [
        n6.q7.APP_CHANNEL,
        n6.q7.ACTIVITY,
        n6.q7.OVERLAY,
        n6.q7.VOICE_CHANNEL,
        n6.q7.PROFILE_WIDGET,
        n6.q7.AUTOMOD,
        n6.q7.BOT,
        n6.q7.APPLICATION_COMMANDS,
    ];
var iY = n(176999),
    iQ = (((l = {}).IMAGE = "image"), l),
    iZ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    i0 = n(773669);
let i1 = [],
    i2 = {},
    i3 = {};
function i5(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function i7(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: iQ.IMAGE,
        visibility: iZ.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var i6 = n(127258),
    i4 = n(320095),
    i8 = n(963852),
    i9 = n(95701),
    se = n(889227);
let st = new i9.nA({ id: "1337", guild_id: "1337", type: eW.rbe.GUILD_TEXT, name: "preview" });
function sn(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eQ.default], () => eQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e1.nj)(new se.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sl = /^@\S+/;
var sr = n(231483),
    sa = n(628284),
    si = n(97808),
    ss = n(778712),
    so = n(809115),
    su = n(486020),
    sc = n(200700);
let sd = {
        alert: { label: () => A.intl.string(C.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => A.intl.string(C.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => A.intl.string(C.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => A.intl.string(C.default.RGzFNK), blockedStyle: !1 },
    },
    sm = {
        blocked: { label: () => A.intl.string(C.default.YdnZ8q), tone: "red" },
        alert: { label: () => A.intl.string(C.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => A.intl.string(C.default.RGzFNK), tone: "green" },
    },
    sf = ["blocked", "alert", "allowed"],
    sh = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var sg = n(984097),
    sp = n(13673);
let sx = { blocked: sr.ShieldIcon, alert: e6.BellIcon, allowed: sa.y },
    sv = {
        blurple: { text: "text-brand", icon: ea.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: ea.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: ea.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function sj(e) {
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
                              null != (l = (0, sc.getFriendlyDurationString)(n))
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
function sb(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = sd[n.outcome];
    return (0, a.jsxs)("li", {
        className: X()(sg.nM, { [X()(sg.HV, sp.DX)]: r }),
        children: [
            (0, a.jsx)(eK.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: sg.my,
                children: (0, a.jsx)(si.eu, {
                    src: (0, su.AE)(void 0, void 0),
                    size: ss._3.SIZE_24,
                    "aria-label": A.intl.string(C.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sg.fw,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), id.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(sj, { example: n }),
                ],
            }),
        ],
    });
}
function sy(e) {
    let { group: t } = e,
        n = i.useId(),
        l = sm[t.section],
        r = sx[t.section],
        s = sv[l.tone];
    return (0, a.jsxs)("div", {
        className: sg.uW,
        children: [
            (0, a.jsxs)("div", {
                className: sg.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(Q.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: sg.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: sg.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(sb, { example: e }, t)),
            }),
        ],
    });
}
function sw() {
    let { avatarSrc: e, eventHandlers: t } = (0, so.a)(!0);
    return (0, a.jsx)("span", {
        className: sg.Gy,
        ...t,
        children: (0, a.jsx)(si.eu, { src: e, size: ss._3.SIZE_16, "aria-label": A.intl.string(A.t.hG1StD) }),
    });
}
function sk(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: sg.K1,
        children: ((t = n.examples),
        sf
            .map((e) => ({ section: e, examples: t.filter((t) => sh[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(sy, { group: e }, e.section)),
    });
}
var sN = n(276293),
    sC = n(460905),
    sA = n(110384),
    sS = n(633018),
    sE = n(763754),
    sI = n(217424),
    sM = n(194085),
    s_ = n(20851),
    sP = n(692508),
    sT = n(798819);
function sR(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: X()(sT.item, sT.labelContainer, sT.colorDefault, {
            [sT.focused]: !0 === t.highlighted,
            [sT.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: sT.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: sT.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: X()(sT.label, sP.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: sT.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: sT.icon }),
                  })
                : null,
        ],
    });
}
function sL(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: X()(t, sP.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: A.intl.string(A.t["5IEsGx"]), icon: sA.W, muted: !0 }
                : { label: A.intl.string(A.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: X()(sT.menu, sP.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: sT.scroller,
            children: [
                (0, a.jsx)(sR, { item: s }),
                (0, a.jsx)("div", { className: sT.separator }),
                (0, a.jsx)(sR, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var s$ = n(381941);
function sO() {}
function sD(e) {
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
        { projectId: g, exchanges: p } = e,
        {
            items: x,
            botIcon: v,
            appIconSrc: j,
        } = ((t = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser())),
        (n = (0, o.bG)([B.Ay], () => B.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([tN.A], () => tN.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? A.intl.string(C.default.JEYq8M)),
        (u = (0, o.bG)([eQ.default], () => (null != l ? eQ.default.getUser(l) : void 0), [l])),
        (d = sn("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sn("31338", A.intl.string(C.default["9iAOsw"]), { discriminator: "0003" })),
        (h = sn("31339", (0, eZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, i4.rh)({
                                          ...(0, i8.Ay)({
                                              channelId: st.id,
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
                                                        type: i6.G.APPLICATION_COMMAND,
                                                        user: (0, i8.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(sl, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: m, currentUser: t, viewer: h, member: f },
                              {
                                  targetMessage: A.intl.string(C.default["y+QYes"]),
                                  memberMessage: A.intl.string(C.default.BUTRDc),
                              },
                          ),
                [p, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = st.name;
    return (0, a.jsxs)("div", {
        className: sP.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: sP.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sN.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: X()(sP.TE, `group-spacing-${s$.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? sP.Rz : void 0,
                            children: [
                                (0, a.jsx)(s_.A, {
                                    message: n,
                                    channel: st,
                                    author: (0, sE.FT)(n.author, st),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sI.A, { message: n, channel: st }) : void 0,
                                    usernameClassName: r?.target === "user" ? sP.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: sP.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sM.Ay, {
                                              children: [
                                                  (0, a.jsx)(sM.qv, {
                                                      label: A.intl.string(A.t.lfIHs4),
                                                      icon: sC.n,
                                                      onClick: sO,
                                                  }),
                                                  (0, a.jsx)(sM.qv, {
                                                      label: A.intl.string(A.t["5IEsGx"]),
                                                      icon: sA.W,
                                                      onClick: sO,
                                                  }),
                                                  (0, a.jsx)(sM.qv, {
                                                      label: A.intl.string(A.t["UKOtz+"]),
                                                      icon: tr.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: sO,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? sP.ET : sP.je,
                                          inert: !0,
                                          children: (0, a.jsx)(sL, {
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
                className: sP.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sS.k, { size: "sm", color: "currentColor" }),
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
var sz = n(332173);
function sq(e) {
    let { name: t } = e;
    return (0, a.jsxs)(sz.A, { children: ["/", t] });
}
function sF(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(iL());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(sq, { name: e.name }, e.start) : e.text));
}
n(827669);
var sU = n(323384),
    sG = n(983851),
    sB = n(794083),
    sK = n(687966),
    sV = n(26137),
    sH = n(430392),
    sW = n(775602),
    sX = n(838815);
let sJ = {
    [n6.q7.APP_CHANNEL]: sU.k,
    [n6.q7.VOICE_CHANNEL]: sG.H,
    [n6.q7.ACTIVITY]: sB.b,
    [n6.q7.OVERLAY]: sK.GameControllerIcon,
    [n6.q7.PROFILE_WIDGET]: sV.r,
    [n6.q7.AUTOMOD]: sr.ShieldIcon,
    [n6.q7.BOT]: sH.RobotIcon,
    [n6.q7.APPLICATION_COMMANDS]: sS.k,
};
function sY(e, t) {
    return null != e.preview ? (t[e.preview] ?? null) : null;
}
function sQ(e) {
    let { preview: t, selected: n } = e;
    return (0, a.jsx)("span", {
        className: X()(sX.FF, { [sX.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)("span", { className: sX.j8, inert: !0, children: t.content }),
    });
}
function sZ(e) {
    let { row: t } = e,
        n = sJ[t.surface];
    return (0, a.jsx)("span", {
        className: sX.oL,
        "aria-hidden": !0,
        children: (0, a.jsx)(n, { size: "sm", color: "currentColor" }),
    });
}
function s0(e) {
    let { row: t, selected: n } = e,
        l = sJ[t.surface];
    return (0, a.jsx)("span", {
        className: X()(sX.FF, sX.KI, { [sX.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)(l, { size: "sm", color: "currentColor" }),
    });
}
function s1(e) {
    let { row: t, selected: n } = e,
        l = sJ[t.surface];
    return (0, a.jsxs)("span", {
        className: sX.Nl,
        children: [
            (0, a.jsx)(l, { className: sX.gr, size: "xs", color: "currentColor", "aria-hidden": !0 }),
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
function s2(e) {
    let { names: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: sX.Ip,
              children: t.map((e) =>
                  (0, a.jsx)(
                      "span",
                      {
                          className: sX.jw,
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
let s3 = "data-conjure-plan-preview-tight";
function s5(e) {
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
                t.removeAttribute(s3);
                let n = t.offsetHeight;
                n > e.clientHeight && (t.setAttribute(s3, ""), (n = t.offsetHeight));
                let l = n > e.clientHeight ? e.clientHeight / n : 1;
                t.style.transform = l < 1 ? `scale(${l})` : "";
            }
            r();
            let a = new ResizeObserver(r);
            return (a.observe(e), a.observe(t), () => a.disconnect());
        }, []),
        (0, a.jsx)("div", {
            ref: n,
            className: sX.aM,
            children: (0, a.jsx)("div", {
                ref: l,
                className: sX.gp,
                "data-conjure-plan-preview-frame": "",
                children: t?.content,
            }),
        })
    );
}
function s7(e) {
    let { row: t, previews: n, commandNames: l } = e,
        r = sY(t, n);
    return (0, a.jsxs)("div", {
        className: sX.J0,
        children: [
            (0, a.jsxs)("div", {
                className: sX.uy,
                children: [
                    (0, a.jsx)(sZ, { row: t }),
                    (0, a.jsxs)("div", {
                        className: sX.Qq,
                        children: [
                            (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: t.title }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                selectable: !0,
                                lineClamp: 3,
                                children: (0, a.jsx)(sF, { text: t.description, commandNames: l }),
                            }),
                            (0, a.jsx)(s2, { names: t.channelNames }),
                        ],
                    }),
                ],
            }),
            r?.content,
        ],
    });
}
function s6(e) {
    let { rows: t, previews: n, label: l, cycling: r, commandNames: s } = e,
        u = i.useId(),
        { selectedIndex: c, select: d } = (function (e, t) {
            let n = (0, o.bG)([sW.Ay], () => sW.Ay.useReducedMotion),
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
        className: sX.xk,
        children: (0, a.jsxs)("div", {
            className: sX.QF,
            children: [
                (0, a.jsx)("div", {
                    role: "tablist",
                    "aria-orientation": "vertical",
                    "aria-label": l,
                    className: sX.C$,
                    children: t.map((e, t) => {
                        let l = t === c,
                            r = sY(e, n);
                        return (0, a.jsxs)(
                            eh.D,
                            {
                                role: "tab",
                                "aria-selected": l,
                                "aria-controls": u,
                                className: X()(sX.pc, { [sX.EV]: l }),
                                onClick: () => d(t),
                                children: [
                                    null != r
                                        ? (0, a.jsx)(sQ, { preview: r, selected: l })
                                        : (0, a.jsx)(s0, { row: e, selected: l }),
                                    (0, a.jsxs)("span", {
                                        className: sX.b$,
                                        children: [
                                            (0, a.jsx)(s1, { row: e, selected: l }),
                                            (0, a.jsx)(Q.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                tag: "span",
                                                lineClamp: 3,
                                                children: (0, a.jsx)(sF, { text: e.description, commandNames: s }),
                                            }),
                                            (0, a.jsx)(s2, { names: e.channelNames }),
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
                    className: sX.nd,
                    children: (0, a.jsx)(s5, { preview: sY(m, n) }),
                }),
            ],
        }),
    });
}
var s4 = n(633075),
    s8 = n(946356),
    s9 = n(58216),
    oe = n(27399);
function ot(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        r = i.useMemo(() => new s4.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: oe.H,
              children: (0, a.jsx)(s8.A.Overlay, {
                  className: oe.w,
                  children: (0, a.jsx)(s9.A, {
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
var on = n(443863);
function ol(e) {
    let { label: t, icon: n, children: l } = e;
    return (0, a.jsxs)("section", {
        className: on.uW,
        children: [
            (0, a.jsxs)("span", {
                className: on.a9,
                children: [
                    n,
                    (0, a.jsx)(Q.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                ],
            }),
            l,
        ],
    });
}
function or(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(ol, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: on.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: on.jw,
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
function oa(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = aU(t, r),
        c = i.useCallback(() => {
            (0, p.PK)(t, r).then(
                (e) => {
                    (0, aF.R)({
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
              className: on.xX,
              onClick: c,
              "aria-label": A.intl.string(C.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: on.sN, onError: u }) : null,
          });
}
function oi(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        { projectId: d, proposal: m, version: f, onApprove: h } = e,
        g = iD(m, n6.q7.AUTOMOD) ? m.automod : null,
        { botExchanges: x } =
            ((n = iD(m, n6.q7.APPLICATION_COMMANDS)),
            (l =
                iD(m, n6.q7.BOT) || n
                    ? null != m.bot
                        ? m.bot.interaction
                        : n && m.commands.some(iV)
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
                              let s = e.commands.filter(iV).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (iK(e)) {
                                              case iU.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case iU.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(iH),
                                  u = a.length > 0 ? iW([...a, ...o], !0) : iW("both" === t ? [...s, i] : s, !1);
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
            let { widget_config: n, widget_preview: l = i3 } = t,
                r = (0, o.bG)([i0.default], () => i0.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(i2);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, p.PK)(e, l.id).then(
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
                                                          ...i5(n),
                                                          ...(null != n.fallback ? { fallback: i5(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = iY.uW.safeParse(r);
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
                                                                    type: iY.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: iY.oG.NUMBER, value: a })
                                                                : (r[e] = { type: iY.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(i7),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: i1,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(d, m),
        j = iD(m, n6.q7.PROFILE_WIDGET) ? v : null,
        b = f?.superseded === !0,
        y = m.what_changed?.trim() ?? "",
        w =
            ((t = m.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === i$(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        k = {};
    (null != g &&
        g.examples.length > 0 &&
        (k.automod = {
            label: A.intl.string(C.default.z4ZKYG),
            icon: (0, a.jsx)(sw, {}),
            content: (0, a.jsx)(sk, { automod: g }),
        }),
        null != m.design_image &&
            (k.design = {
                label: A.intl.string(C.default.X15LLY),
                content: (0, a.jsx)(oa, {
                    projectId: d,
                    design: m.design_image,
                    alt: A.intl.string(null == (s = iF(m)) ? C.default["3/aHX6"] : iz[s]),
                }),
            }),
        x.length > 0 &&
            (k.bot = {
                label: A.intl.string(C.default.sA1lTv),
                content: (0, a.jsx)(sD, { projectId: d, exchanges: x }),
            }),
        null != j && (k.widget = { label: A.intl.string(C.default.ove4zH), content: (0, a.jsx)(ot, { ...j }) }));
    let N = Object.keys(k),
        S =
            ((u = iD(m, n6.q7.BOT)),
            (c = m.commands.filter(iV).length),
            iJ
                .filter((e) => iD(m, e) && !(u && e === n6.q7.APPLICATION_COMMANDS))
                .map((e) => {
                    let t = e === n6.q7.APP_CHANNEL ? (m.app_channel_names ?? []) : [],
                        n = t.length > 1,
                        l = e === n6.q7.BOT && c > 0 && iD(m, n6.q7.APPLICATION_COMMANDS),
                        r = A.intl.string(iO[e]),
                        a = A.intl.string(iX[e]);
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
                                                    return iF(e);
                                                case "widget":
                                                    return n6.q7.PROFILE_WIDGET;
                                                case "automod":
                                                    return n6.q7.AUTOMOD;
                                                case "bot":
                                                    return iD(e, n6.q7.BOT) ? n6.q7.BOT : n6.q7.APPLICATION_COMMANDS;
                                            }
                                        })(m, t) === e,
                                ) ?? null,
                        }
                    );
                })),
        E = N.filter((e) => !S.some((t) => t.preview === e));
    return (0, a.jsxs)(ae, {
        title:
            b && null != f
                ? A.intl.formatToPlainString(C.default.YZ3qJs, { version: f.version })
                : A.intl.string(C.default["3b6e7o"]),
        meta: b ? (0, a.jsx)(r9, { children: A.intl.string(C.default.hF2c41) }) : null,
        superseded: b,
        showLabel: A.intl.string(C.default.yD8EJS),
        hideLabel: A.intl.string(C.default.nSPGNb),
        className: S.length > 1 ? on.WG : void 0,
        bodyClassName: on.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== y
                ? (0, a.jsx)(ol, {
                      label: A.intl.string(C.default.iNS4dl),
                      children: (0, a.jsx)(Q.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: (0, a.jsx)(sF, { text: y, commandNames: w }),
                      }),
                  })
                : null,
            (0, a.jsx)(Q.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: (0, a.jsx)(sF, { text: m.summary, commandNames: w }),
            }),
            S.length > 0
                ? (0, a.jsx)(ol, {
                      label: A.intl.string(C.default.mrMYrN),
                      children:
                          1 === S.length
                              ? (0, a.jsx)(s7, { row: S[0], previews: k, commandNames: w })
                              : (0, a.jsx)(s6, {
                                    rows: S,
                                    previews: k,
                                    label: A.intl.string(C.default.mrMYrN),
                                    cycling: !b,
                                    commandNames: w,
                                }),
                  })
                : null,
            E.map((e) => {
                let t = k[e];
                return null == t ? null : (0, a.jsx)(ol, { label: t.label, icon: t.icon, children: t.content }, e);
            }),
            m.changes.length > 0
                ? (0, a.jsx)(ol, {
                      label: A.intl.string(C.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: on.p_,
                          children: m.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: on.Aw,
                                      children: (0, a.jsx)(Q.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: (0, a.jsx)(sF, { text: e, commandNames: w }),
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            m.commands.length > 0
                ? (0, a.jsx)(ol, {
                      label: A.intl.string(A.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: on.p_,
                          children: m.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: on.uX,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children:
                                                  "/" === i$(e)
                                                      ? (0, a.jsx)(sq, { name: e.name })
                                                      : `${i$(e)}${e.name}`,
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
            (0, a.jsx)(or, { label: A.intl.string(C.default["2UbW6r"]), names: m.bot_permissions ?? [] }),
            (0, a.jsx)(or, { label: A.intl.string(C.default["7TKfpj"]), names: m.privileged_intents ?? [] }),
            null == h || b
                ? null
                : (0, a.jsxs)("div", {
                      className: on.o1,
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
var os = n(289565);
function oo(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: os.m, children: n })
        : (0, a.jsxs)("div", {
              className: os.Z,
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
function ou(e) {
    return null != e && e.status?.state === "unpublished";
}
let oc = new WeakMap();
function od(e) {
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
function om(e) {
    let { projectId: t } = e,
        n = (0, tm.Ay)(t);
    return null != n && ou(n) ? (0, a.jsx)(oo, { children: (0, a.jsx)(od, { publish: n }) }) : null;
}
var of = n(989271);
function oh(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: X()(of.nM, { [of.f1]: s, [of.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": A.intl.formatToPlainString(C.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: of.jo,
                children: [
                    n
                        ? (0, a.jsx)(ne.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: of.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: of.G9,
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
function og(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(r4, {
        title: A.intl.string(C.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                oh,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var op = n(530557),
    ox = n(872162);
function ov(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var oj = n(202723);
function ob(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tj.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: op.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => ov(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(ov(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = X()(oj.Lo, { [oj.jY]: d });
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
                        (0, a.jsx)(ox.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: oj.Lo,
                      children: (0, a.jsx)(ox.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
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
                                className: oj.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: oj.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(sa.y, {
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
                            (0, a.jsx)(ox.C, { label: A.intl.string(C.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: oj.Lo,
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
                        (0, a.jsx)(ox.C, { label: A.intl.string(C.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: oj.sq,
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
var oy = n(919790),
    ow = n(971824),
    ok = n(162052),
    oN = n(165648);
function oC(e) {
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
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, rZ.Jf)(n, l), [n, l]),
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
            className: ao.pj,
            "data-live": !1,
            children: (0, a.jsx)(r5.A, {
                glyph: (0, a.jsx)(ic.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: A.intl.string(C.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, rZ.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = (0, ih.n)(w.map((e) => e.taskId)),
        N = !g && (l || w.some((e) => "running" === e.task.status)),
        S = (0, iv.k)(w);
    return (0, a.jsxs)("ol", {
        className: ao.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(r2.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: w.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: w.length > 0,
                tier: x.turn?.tier,
            }),
            w.map((e, n) => {
                let l = null != e.task.helperMark ? (0, ih.p)(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          ij,
                          {
                              projectId: t,
                              lane: e,
                              Illocon: r.Illocon,
                              tint: r.tint,
                              name: null != l && null != e.task.helperName ? e.task.helperName : r.name,
                              connectsDown: n < w.length - 1,
                          },
                          e.taskId,
                      );
            }),
            (0, a.jsx)(i_, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ao.YO,
                      children: (0, a.jsx)(ai, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function oA(e) {
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
            publishCta: g,
            onPickIdea: p,
            pickedIdeaIds: x,
            onApprovePlan: v,
            sideReply: j = !1,
            sideReplyAcknowledges: b,
            hoistedProse: y = !1,
            hoistedAttachmentsHost: w,
            restoreProposal: k,
            onRestoreProposal: N,
        } = e,
        S = i.useMemo(
            () => im({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = S,
        P = (y ? w : void 0) ?? S.attachmentsHost,
        T = M && !y,
        R = null == u ? null : (0, a.jsx)(oy.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: ao.MT, children: R }),
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
        className: ao.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: ao.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ao.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: oN.PT,
                                          children: id.A.parse(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === P && e === I ? L : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(oi, { projectId: t, proposal: r, version: s, onApprove: v })
                : T
                  ? (0, a.jsxs)("div", {
                        className: X()(ao.ky, ok.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: X()(oN.PT, ao.cW),
                                children: id.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === P ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: X()(ao.ky, ok.XR, { [ow.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(ob, {
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
                      className: X()(ao.ky, ok.XR),
                      children: (0, a.jsx)(a4, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== P && ("closing" !== P || T) ? null : R,
            null != g ? (0, a.jsx)(om, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(og, { ideas: o, pickedIdeaIds: x, onPick: p }) : null,
            null != k ? (0, a.jsx)(iT, { proposal: k, onRestore: N }) : null,
            T ? null : $,
        ],
    });
}
var oS = n(146806),
    oE = n(477262),
    oI = n(432017),
    oM = n(475358),
    o_ = n(717400),
    oP = n(663341),
    oT = n(559647),
    oR = n(234320),
    oL = n(191023);
function o$(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(rt.p, {
        name: A.intl.string(C.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: nX.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(oL.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: nX.OY,
                    children: (0, a.jsx)(am.PencilIcon, {
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
function oO(e) {
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
                ? (0, a.jsx)(af.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: A.intl.string(C.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var oD = n(497437);
let oz = [
        {
            id: "add-images-videos",
            label: C.default["51+9lc"],
            icon: oE.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: C.default["10ljr2"],
            icon: oI.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: C.default.aotDee, icon: ec.H, accept: "" },
    ],
    oq = "text-md/normal",
    oF = null;
function oU(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [h, g] = i.useState(0),
        [p, x] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            (g(i + a), f(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                m = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            x({
                frontFrom: 1e3 * (0, oS._R)(m),
                frontTo: 1e3 * (0, oS._R)(h),
                backFrom: 1e3 * (0, oS.T)(m),
                backTo: 1e3 * (0, oS.T)(h),
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
        w = i.useRef(!1),
        k = i.useCallback(() => {
            (y(w.current ? (n ? "through" : "out") : n ? "in" : null), j((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        w.current = n;
    }, [n, t]);
    let N = "in" === b ? p.backFrom : p.frontFrom,
        S = "out" === b ? p.frontTo : p.backTo,
        E = (0, o.bG)([sW.Ay], () => sW.Ay.useReducedMotion),
        I = t === A.intl.string(C.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: X()(oD.VT, { [oD.qk]: l }),
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
            children: (0, a.jsx)(oM.e, { shortcut: "tab", className: oD.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: oq,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: X()(oD.xM, { [oD.s2]: l }),
                onStart: k,
                onComplete: () => s(t),
            }),
            _(oD.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: oD.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: oq, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: oD.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: oq, tag: "span", className: oD.xM, children: t }),
                          _(oD.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let oG = i.memo(function (e) {
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
                hasPendingContext: g = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            [y, w] = i.useState(() => io.getDraft(t)),
            k = i.useCallback(
                (e) => {
                    (lJ.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), w(e));
                },
                [t],
            ),
            N = "" !== y.trim();
        i.useEffect(() => v?.(N), [N, v]);
        let [S, E] = i.useState(t);
        S !== t && (E(t), w(io.getDraft(t)));
        let I = (0, o.bG)([sW.Ay], () => sW.Ay.isSubmitButtonEnabled),
            [M, _] = i.useState(!1);
        i.useEffect(() => {
            l || _(!1);
        }, [l]);
        let P = i.useRef(null),
            {
                drafts: T,
                addFiles: R,
                pasteFiles: L,
                removeDraft: $,
                settled: O,
                takeRefs: D,
            } = ra({ projectId: t, surface: "chat", onUploadFile: c }),
            z = nF.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && nD(n);
            }),
            q = "" !== y.trim() || T.length > 0 || g || z,
            F = n && q && O,
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
                let e = D(),
                    n = z
                        ? (function (e) {
                              let t = nG(e);
                              if (null == t || !nD(t)) return null;
                              let n = t.history.present,
                                  l = rU(e);
                              return (
                                  nB(e, (e) => ({ ...e, history: nI, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, x.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rD.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rU(e)),
                                              composite: (e) => r$(e, n),
                                              upload: (t) =>
                                                  (0, p.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, p.n6)(e, t.id),
                                              send: (n) => (0, x.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rq(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rD.delete(i),
                                                          window.setTimeout(() => {
                                                              (rq(i, null),
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
                    null == oF && (oF = document.createElement("canvas").getContext("2d"));
                    let i = oF;
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
                ("" !== l && G(l), k(""));
            }, [F, z, t, y, s, D, k]),
            K = i.useCallback(
                (e) => {
                    (e.preventDefault(), B());
                },
                [B],
            ),
            V = i.useCallback(() => {
                null == u || M || (_(!0), u());
            }, [u, M]),
            H = null == f || "" !== y || !n || r || g ? null : f,
            W = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && l && null != u && !M) {
                        (e.preventDefault(), e.stopPropagation(), V());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), B());
                },
                [B, d, l, u, M, V, H, k],
            ),
            X = i.useCallback(
                (e) => {
                    n && L(e);
                },
                [n, L],
            );
        (0, oR.Vo)({
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
                let t = P.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [ee, et] = i.useState(0),
            [en, el] = i.useState(!1);
        i.useEffect(() => {
            if (0 === y.length) return void el(!1);
            let e = Y.current?.querySelector("textarea");
            if (null != e) {
                let t = oV(e);
                null != t && et(t);
            }
            el(!0);
            let t = setTimeout(() => el(!1), oB);
            return () => clearTimeout(t);
        }, [y]);
        let er = i.useMemo(() => ({ "--custom-glow-x": `${ee}px` }), [ee]),
            ea = en ? ` ${oD.EB}` : "",
            ei = r
                ? A.intl.string(C.default.qqlUiW)
                : n
                  ? g
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
            eg = U ?? H ?? ei,
            ep = "" === y && "" !== eg;
        return (0, a.jsxs)("form", {
            onSubmit: K,
            className: oD.DA,
            children: [
                T.length > 0 || z
                    ? (0, a.jsxs)("div", {
                          className: oD.lN,
                          children: [
                              T.map((e) => (0, a.jsx)(ri, { draft: e, onRemove: $ }, e.localId)),
                              z ? (0, a.jsx)(o$, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${oD.wg} ${oD.LP}${ea}`, style: er, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${oD.wg} ${oD.L3}${ea}`, style: er, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: oD.VA,
                    ref: Y,
                    children: [
                        (0, a.jsx)("input", {
                            ref: P,
                            type: "file",
                            multiple: !0,
                            onChange: J,
                            className: oD.nY,
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
                                            oz.map((e) =>
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
                                                      iconLeft: o_.q,
                                                      leadingAccessory: { type: "icon", icon: o_.q },
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
                                    className: `${oD.Y0} ${oD.nu}`,
                                    disabled: !n,
                                    "aria-label": A.intl.string(A.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(oP.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: oD.Qu,
                                    }),
                                });
                            },
                        }),
                        ep
                            ? (0, a.jsx)("div", {
                                  ref: em,
                                  className: oD.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(oU, { text: eg, offering: eh && null == U, typed: null != U }),
                              })
                            : null,
                        (0, a.jsx)(lW.y, {
                            value: y,
                            onChange: (e) => k(e.currentTarget.value),
                            onKeyDown: W,
                            onPaste: X,
                            placeholder: ep ? "" : ei,
                            disabled: !n,
                            "aria-label": A.intl.string(C.default.ldNl9x),
                            "aria-describedby": ep ? ef : void 0,
                            rows: 1,
                            className: oD.jp,
                        }),
                        ep ? (0, a.jsx)(eK.A, { id: ef, children: ei }) : null,
                        (0, a.jsx)("div", {
                            className: oD.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: A.intl.string(C.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${oD.Y0} ${oD.$E}`,
                                              disabled: M,
                                              onClick: V,
                                              "aria-label": A.intl.string(C.default.wiguT0),
                                              children: (0, a.jsx)(ic.w, {
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
                                            className: `${oD.Y0} ${oD.$E}`,
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
                                  className: oD.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: oD.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: oD.rt,
                                          disabled: !F,
                                          "aria-label": A.intl.string(C.default.rxW2cl),
                                          children: (0, a.jsx)(oT.SendMessageIcon, {
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
    oB = 1500,
    oK = [
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
function oV(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = oV.mirror;
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
                (oV.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of oK) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
oV.mirror = null;
var oH = n(986109);
let oW = i.createContext(null);
function oX(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(oW),
        [d, m] = i.useState(() => sW.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: X()(oH.xk, { [oH.g5]: d, [oH.Qo]: s, [oH.q3]: o }),
        children: n,
    });
}
let oJ = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n } = e;
            return null != t && n ? "card" : null;
        },
        dismissal: "app",
    },
    oY = new Map();
function oQ(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function oZ(e, t) {
    return null != e && e > 0 && e < t;
}
let o0 = "ideas",
    o1 = "live_behind",
    o2 = "conjureTipDismissals",
    o3 = new Set(),
    o5 = new Set(),
    o7 = 0;
function o6() {
    let e = tH.w.get(o2);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function o4(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return o3.has(((n = e.id), `${t}:${n}`));
        case "app":
            return o6().app[t]?.includes(e.id) === !0;
        case "forever":
            return o6().forever.includes(e.id);
    }
}
function o8(e) {
    return (o5.add(e), () => o5.delete(e));
}
let o9 = [12e4, 6e4];
var ue = n(292771);
function ut(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([sW.Ay], () => sW.Ay.useReducedMotion),
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
        let g = f.current !== u;
        if (((f.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
        let p = i.width / Math.max(1, h.width);
        (a.animate(
            [
                {
                    transform: `translate(${i.left - h.left}px, ${i.top - h.top}px) scale(${p})`,
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
            className: ue.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: X()(ue.qd, e.leaving ? ue.dv : ue.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var un = n(443865),
    ul = n(247171);
function ur(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: X()(ul.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: X()(ul.gutter, ul[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: ul.content, children: i }),
        ],
    });
}
var ua = n(716502);
function ui(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ur, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: ua.Nr,
        children: (0, a.jsxs)("section", {
            className: ua.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: ua.X8,
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
function us(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: ua.DD,
        children: t,
    });
}
function uo(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: ua.rf,
        children: t,
    });
}
function uu(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: ua.o1, children: t });
}
let uc = {
    ...oJ,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(ui, {
            icon: un.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(us, { children: A.intl.string(C.default.OJlbhX) }),
                (0, a.jsx)(uo, { children: A.intl.string(C.default["3vJBni"]) }),
                (0, a.jsx)(uu, {
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
var ud = n(830205);
function um(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ur, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: ud.aK,
        children: (0, a.jsxs)("div", {
            className: ud.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: ud.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: ud.X8,
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
var uf = n(95635);
let uh = [
    {
        id: o1,
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
                (null != t.publishCta && ou(n)) ||
                oZ(e.messagesSinceShown(o1), 10)
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
                ? (0, a.jsx)(um, {
                      icon: uf.UploadIcon,
                      onDismiss: l,
                      children: A.intl.format(C.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    uc,
    {
        id: o0,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(oJ) ||
                0 === e.messagesSinceShown(oJ.id) ||
                oZ(e.messagesSinceShown(o0), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(um, {
                icon: un.LightbulbIcon,
                onDismiss: l,
                children: A.intl.format(C.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var ug = n(817921);
function up(e) {
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
                g,
                p =
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
                        o9,
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
                                        if ((0, r0.BL)(n)) return n;
                                        if (!(0, r0.B0)(e, t)) break;
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
                            (g = (function (e) {
                                for (let t = e.length - 1; t >= 0; t--)
                                    if ("publish_notice" === e[t].kind) return e[t].created_at;
                                return null;
                            })(n)),
                        publishedSinceLastMessage: null != g && 0 === oQ(n, g, u),
                        messagesSinceShown: (e) => {
                            let l = oY.get(`${t}:${e}`);
                            return null != l ? oQ(n, l, u) : null;
                        },
                        isDismissed: (e) => o4(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(o8, () => o7);
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
                })(e, p, (e) => o4(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== p.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                oY.set(`${e}:${t}`, n);
                            })(t, n.id, e);
                }),
                j.map((e) => ({
                    ...e,
                    options: {
                        context: p,
                        dismiss:
                            null != e.tip.dismissal
                                ? () =>
                                      (function (e, t) {
                                          if (!(null == e.dismissal || o4(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  o3.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = o6();
                                                  tH.w.set(
                                                      o2,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (o7++, o5.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(uh, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(oX, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: ug.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(ut, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ux = n(52133),
    uv = n(732159),
    uj = n(888366),
    ub = n(862026),
    uy = n(291192);
function uw(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ub.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: uy.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: uy.Sp,
                children: [
                    (0, a.jsx)("span", { className: uy.q3 }),
                    (0, a.jsxs)("span", {
                        className: uy.g8,
                        children: [
                            (0, a.jsx)(uj.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: uy.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uy.nM,
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
                                          (0, a.jsx)(af.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tj.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(uv.u, {
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
function uk(e) {
    return (0, o.bG)([B.Ay, tN.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (tN.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var uN = n(951465),
    uC = n(369455);
function uA(e) {
    let { projectId: t, notice: n } = e,
        l = uk(t),
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
            n.update && null != n.published_revision ? (0, a.jsx)(uS, { projectId: t, notice: n }) : null,
        ],
    });
}
function uS(e) {
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
                                        className: uC.Z,
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
                                null != e && (0, uN.A)(e);
                            },
                        }),
              ],
          });
}
var uE = n(940874);
n(775443);
var uI = n(616e3),
    uM = n(155899),
    u_ = n(521981),
    uP = n(491182),
    uT = n(438729),
    uR = n(622868),
    uL = n(448368),
    u$ = n(837528),
    uO = n(470964),
    uD = n(715628),
    uz = n(752636),
    uq = n(9842),
    uF = n(589022),
    uU = n(967198),
    uG = n(531685);
let uB = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function uK(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function uV(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function uH(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = uV(e, t),
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
    if (uK(r) && uK(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && uK(uV(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function uW(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([sW.Ay], () => sW.Ay.useReducedMotion),
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
                      for (; a > 0 && uH(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && uB.has(e.charAt(l - 1));) l--;
                                    return uB.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && uH(t, o);) o++;
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
var uX = n(624479),
    uJ = n(890377),
    uY = n(180227);
function uQ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: X()(uY.QE, { [uY.Rn]: t }),
              children: (0, a.jsx)(sM.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sM.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function uZ(e) {
    return ts.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: A.intl.string(A.t.JrGD7E), icon: uX.CopyIcon, onClick: () => (0, ts.C)(e) }]
        : [];
}
function u0(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: A.intl.string(C.default.CXtLD2),
                          tooltip: A.intl.string(C.default.DOb1HM),
                          icon: uJ.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: A.intl.string(C.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(uQ, { groupStart: n, actions: [...r, ...uZ(t)] });
}
function u1(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: A.intl.string(C.default.H8Jfhu), icon: rm.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: nn.BugIcon, onClick: r }];
    return (0, a.jsx)(uQ, { groupStart: n, actions: [...i, ...uZ(t), ...s] });
}
let u2 = (0, i9.createChannelRecord)({ id: "conjure-builder", type: eW.rbe.DM }),
    u3 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function u5(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: X()(uY.Yq, { [uY.x1]: t }), children: e });
}
function u7(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function u6(e, t, n) {
    let { content: l } = (0, uO.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: u2, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(uT.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, uD.A)(r, l);
}
function u4(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, u$.m)(e, u2, t.usernameProfile, l),
        u = (0, u$.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([uU.A], () => uU.A.getGuildId()),
        d = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(uF.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function u8(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, u_.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: uY.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: uY.Rj,
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
        d = (0, sE.X4)(n),
        m = (0, sE.X4)(t),
        f = u4(n);
    return (0, a.jsx)(uL.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: u2,
        referencedMessage: { state: uq.a.LOADED, message: n },
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
function u9(e) {
    let { message: t, author: n } = e,
        l = u4(t);
    return (0, a.jsx)(uR.Ay, {
        message: t,
        channel: u2,
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
function ce(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e;
    i.useEffect(() => e7(l), [l]);
    let c = (0, o.bG)(
            [eQ.default],
            () => e5(l, null != l ? eQ.default.getUser(l) : null, eQ.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, sE.FT)(c, null), [c]),
        m = i.useMemo(() => np(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, i8.Ay)({ channelId: u2.id, content: f, author: c });
            return (0, i4.rh)({ ...e, timestamp: u7(n, e.timestamp), state: eW.cmJ.SENT });
        }, [f, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(ct, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories: r,
              groupStart: s,
              onQueuedAction: u,
          });
}
function ct(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = u6(t, l);
    return (0, a.jsx)(uP.A, {
        className: uY.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(u9, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: uY.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: uY.GV,
                              children: [
                                  (0, a.jsx)(nt.x, {
                                      className: uY.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: uY.WO, children: u }),
                      ],
                  }),
        childrenAccessories: u5(i, "" !== l),
        childrenButtons: (0, a.jsx)(u0, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function cn(e) {
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
        { text: m, revealing: f } = uW(t, { streaming: (0, o.bG)([uG.A], () => c && uG.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sE.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, o.bG)(
            [eQ.default],
            () => e5(p, null != p ? eQ.default.getUser(p) : null, eQ.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : np(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, i8.Ay)({ channelId: u2.id, content: v?.body ?? r.content, author: x });
            return (0, i4.rh)({ ...e, id: r.id, timestamp: u7(r.createdAt, e.timestamp), state: eW.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: u2.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, i8.Ay)({ channelId: u2.id, content: "", author: u3 })),
        w = i.useMemo(
            () =>
                (0, i4.rh)({
                    ...y,
                    timestamp: u7(n, y.timestamp),
                    state: eW.cmJ.SENT,
                    ...(null != b ? { type: eW.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, uz.A)({ message: w, channel: u2, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        C = u6(k, m, uY.OS);
    return (0, a.jsxs)("div", {
        className: uY.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(uP.A, {
                className: uY.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(u8, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: u5(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: uY.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(sU.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function cl(e) {
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
                          icon: rm.e,
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
function cr(e) {
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
            onApprovePlan: g,
            onRestoreVersion: p,
        } = e,
        x = n.message,
        v =
            null != p
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
        j = null != v && null != p ? () => ca(v, p) : void 0,
        b =
            ((t =
                n1() && "assistant" === x.role && (0, r0.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [uI.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : uI.A.getTimingTraces(l).findLast((e) => {
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
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(oX, {
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
                          void (0, eV.jA)(t, (e) => (0, a.jsx)(cl, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(cn, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(u1, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(oA, {
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
                onApprovePlan: g,
                restoreProposal: k,
                onRestoreProposal:
                    null != k && null != p && f
                        ? () =>
                              ca(
                                  {
                                      sha: k.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: k.authored_at,
                                      subject: k.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function ca(e, t) {
    (0, uM.F)({ onConfirm: () => t(e) });
}
var ci = n(288539);
function cs(e, t, n) {
    return (0, a.jsx)(ci.A, { userId: e, content: `@${t}` }, n);
}
function co(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e7(l), [l]);
            let r = (0, o.bG)([eQ.default], () => (null == l ? null : eQ.default.getUser(l)), [l]),
                a = (0, eZ.tx)(r),
                s = uk(e),
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
        })(t, n, cs);
    return (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let cu = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rz.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = null != o.attachments && o.attachments.length > 0 ? o.attachments : null;
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(ce, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != e || null != u
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != e ? (0, a.jsx)(oy.A, { projectId: l, attachments: e }) : null,
                                              null != u ? (0, a.jsx)(oO, { send: u }) : null,
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
                                    return (n) => (0, uE.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cn, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(oy.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oC, {
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
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cn, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(uA, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(cn, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(co, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(uw, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oC, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(oX, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(oC, {
                            projectId: l,
                            steps: cc,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(cr, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ux.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ux.A)(e.row, t.row, ["message"]) &&
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
                (0, ux.A)(e.replyTo, t.replyTo) &&
                (0, ux.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    cc = [],
    cd = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    cm = new WeakMap();
function cf(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function ch(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let cg = i.memo(function (e) {
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
            stickToBottomRef: g,
            pinned: p,
            onUnpin: v,
            handleRef: j,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [w, k] = i.useState(null),
        N = i.useCallback((e) => {
            ((y.current = e), k(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, o.bG)([l$.A], () => l$.A.getPublishStatus(t)?.state ?? null),
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
                                        let t = (0, rZ.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = cm.get(r);
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
                        let a = !(0, r0.BL)(e),
                            i = im({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, rZ.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, rZ.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && cd.test(n.prose.content)) m = !0;
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
                                        turnActive: r1(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = cd.test(e.content ?? "");
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
                    (cm.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                          let n = oc.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oc.set(t, n)), n);
                      })),
                m,
            );
        }, [n, _, m]),
        R = i.useMemo(() => T.map((e) => e.key), [T]),
        [L, $] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return cf(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : ch(e, t.endKey, t.end - 1) + 1,
                a = ch(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), cf(e, a, r));
        })(R, L, p),
        D = i.useRef(O),
        z = i.useRef(R),
        q = i.useRef(T),
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
                    return ((n = Math.min(e.length, t.end + 30)), cf(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), cf(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? cf(e, i, t.end) : null;
            })(z.current, D.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, x.loadOlderHistory)(t) : null != n && $(n);
        }, [h, g, t]);
    i.useImperativeHandle(
        j,
        () => ({
            handleScroll() {
                (B(),
                    $((e) => {
                        let t = D.current;
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
                    (v(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = q.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (V.current = e);
                    return;
                }
                (v(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = z.current), cf(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, v, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && H(e);
    }, [T, H]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), g.current ? h.current?.scrollToBottom() : B());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, B, h, g]));
    let W = null == O.endKey;
    (i.useEffect(() => b?.(W), [W, b]),
        i.useLayoutEffect(() => {
            ((D.current = O), (z.current = R), (q.current = T));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = F.current;
                if (g.current) h.current?.scrollToBottom();
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
        }, [T, R, O.start, O.end, h, g, B, K]));
    let J = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r0.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, r0.BL)(et)
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
                        if (0 === o.length || !(0, r0.BL)(s)) continue;
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
                className: X()(oH.x7, oH.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: oH.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? C.default.Td4Sf4 : C.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: oH.x7,
            children: (0, a.jsx)(oX, { role: "assistant", children: (0, a.jsx)(cn, { content: A.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(oW.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: oH.x7,
            children: [
                T.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            cu,
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
                        cu,
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
                    ? (0, a.jsx)(oX, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(cn, {
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
                W ? (0, a.jsx)(up, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var cp = n(731084),
    cx = n(823376),
    cv = n(148087),
    cj = n(187447);
function cb(e) {
    let { activity: t, id: n } = e,
        l = (0, cv.A)(),
        { text: r, revealing: s } = uW(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: cj.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(rY.Ch, {
                ref: o,
                className: cj.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: X()(oN.PT, cj.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: id.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var cy = n(53659);
function cw(e) {
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
        g = i.useId(),
        [p, x] = i.useState(null),
        v = (0, cp.xu)({
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
        b = v === cp.kx["0"],
        [y, w] = i.useState(m ?? j),
        k = (0, cv.A)();
    (l || (0, cp.E4)(j, y) || (!k && !b)) && y !== j && w(j);
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
        ((I.current = b), !b && (0, cp.E8)(E.current) && w(N.current));
    }, [b]),
        i.useEffect(() => {
            if (!k) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((M.current = (0, cp.E8)(E.current) ? M.current + 1 : 0), w((0, cp.Ov)(M.current)))
                    : N.current !== E.current
                      ? w(N.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, cp.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [k]));
    let _ = null != t && "" !== t.text,
        P = t?.session ?? null,
        T = _ && null != P && p === P,
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
        renderPopout: () => (0, a.jsx)(cb, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: X()(cy.hF, _ && cy.Xd),
                "aria-label": A.intl.string(
                    r
                        ? C.default.qqlUiW
                        : v === C.default.j8tmjK
                          ? C.default.j8tmjK
                          : b
                            ? cp.kx["0"]
                            : C.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": A.intl.string(v),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: cy.bl,
                        children: (0, a.jsx)(cx.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: cy.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: k
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: cp.vg,
                                  delay: null,
                                  className: cy.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: cy.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var ck = n(85428),
    cN = n(885574),
    cC = n(242779),
    cA = n(436804);
function cS(e) {
    return e.toLocaleString();
}
function cE(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: cA.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: cA.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [cS((0, cC.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    cS(n.input_tokens),
                    " in \xb7 ",
                    cS(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${cS(n.cache_creation_input_tokens)} cache write \xb7 ${cS(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function cI(e) {
    let { project: t } = e,
        n = (0, cC.wU)(t.compaction),
        l = (0, cC.wU)(t.classifier),
        r = (0, cC.wV)(t.orchestrator, t.codegen),
        i = (0, cC.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: cA.si,
        role: "dialog",
        "aria-label": A.intl.string(C.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: cA.Q$,
                children: (0, a.jsxs)("div", {
                    className: cA.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [cS((0, cC.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(cE, { label: A.intl.string(C.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(cE, { label: A.intl.string(C.default.ANCEo3), usage: n }),
            (0, a.jsx)(cE, { label: A.intl.string(C.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: cA.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(C.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, cC.sj)(i) ? "\u2014" : `${Math.round(100 * (0, cC.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function cM(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(cI, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: cA.Y$,
                "aria-label": A.intl.string(C.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(cN.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var c_ = n(997421);
function cP(e) {
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
        g = (0, n2.Zv)(t),
        p = (0, o.bG)([l$.A], () => l$.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, cp.E8)(e) || e === A.intl.string(C.default.mKK6wB) || e === A.intl.string(C.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, cp.uc)(f),
        y = null != s,
        w = s ?? (n ? l : void 0),
        k = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: c_.jf,
        children: [
            (0, a.jsxs)("div", {
                className: c_.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    k || u || g || p
                        ? (0, a.jsx)(cw, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: y,
                              recalling: u,
                              controlling: g,
                              publishPending: p && k,
                              publishing: p,
                              spoken: x,
                              onSpokenChange: j,
                          })
                        : null,
                    null != w ? (0, a.jsx)(ck.A, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(ck.L, { startedAt: w }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: c_.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(cM, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": A.intl.formatToPlainString(C.default["tCo+ZM"], { status: (0, cp.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: c_.XF,
                      children: (0, cp.Db)(h),
                  }),
        ],
    });
}
let cT = ["wheel", "touchstart", "pointerdown", "keydown"];
var cR = n(698638),
    cL = n(608711);
let c$ = [A.intl.string(C.default["9w+Chc"]), A.intl.string(C.default.WAvmdq), A.intl.string(C.default.SKsrzl)];
function cO(e) {
    var t;
    let n,
        l,
        { projectId: r, restoreState: s, onRestoreVersion: u, onImportProject: c } = e,
        d = (0, o.bG)([e0.A], () => e0.A.getMessages(r), [r]),
        m = (0, o.bG)([x.default], () => x.default.getConnState(r), [r]),
        h = (0, o.bG)([e0.A], () => e0.A.getProjectUsage(r), [r]),
        g = (0, o.bG)([e0.A], () => e0.A.getThinkingActivity(r), [r]),
        v = (0, o.bG)([e0.A], () => e0.A.isCompacting(r), [r]),
        j = (0, o.bG)([e0.A], () => e0.A.isSaving(r), [r]),
        b = (0, o.bG)([a1.A], () => a1.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: N,
            pinned: S,
            atBottom: E,
            unpin: I,
            releasePinHold: M,
            showsLatest: _,
            showsLatestRef: P,
            handleShowsLatestChange: T,
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
                    for (let e of cT) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of cT) t.removeEventListener(e, u);
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
        })(w),
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
            (M(), P.current ? e() : k.current?.showLatest(e));
        }, [M, P]),
        $ = i.useCallback(() => {
            (R(), k.current?.handleScroll());
        }, [R]);
    (i.useLayoutEffect(() => {
        let e = y.current;
        if (null == e) return;
        let t = w.current?.getScrollerNode(),
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
                r && (N.current ? w.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [N]),
        i.useEffect(() => {
            (0, x.ensureConnection)(r);
        }, [r]),
        (0, a9.E1)(r));
    let O = nE(r),
        D = (function (e) {
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
        z =
            ((n = (0, o.bG)([a3.A], () => a3.A.getFailure(r))),
            (l = i.useCallback(() => (0, a5.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: A.intl.format(C.default.Up6Ssw, { reason: n }),
                      retry: { text: A.intl.string(C.default["ywA+ET"]), onClick: l },
                  }),
        q = (0, o.bG)([a3.A], () => a3.A.getSetupStartedAt(r), [r]),
        F = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(r, e, t);
            },
            [r],
        ),
        U = i.useCallback(
            (e, t, n) => {
                let l = n ?? F;
                0 === O.annotations.length
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
                          })({ annotations: O.annotations, metaComment: e, context: O.context }),
                          t,
                      ),
                      nN(r));
            },
            [O, F, r],
        ),
        G = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rD)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, x.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rD.get(e);
                            (rD.delete(e), rq(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(r) ||
                e0.A.isThinking(r)) &&
                (0, x.interruptTurn)(r);
        }, [r]),
        B = i.useCallback((e) => re(r, e.implementation_prompt), [r]),
        [K, V] = (function (e) {
            let [t, n] = i.useState(() => iu(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iu(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        H = i.useCallback(() => F(A.intl.string(C.default["t5CN3+"])), [F]),
        W = i.useCallback((e, t, n) => re(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        X = i.useCallback((e) => (0, a2.X)(r, e), [r]),
        J = i.useCallback((e) => (0, p.vX)(r, e), [r]),
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
        ec = (0, o.bG)([tf.A], () => tf.A.getSettings(r), [r]),
        [ed, em] = i.useState(null),
        ef =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, r0.BL)(er) &&
            er.id !== ed &&
            ((t = er.settingsRequest),
            null != ec &&
                (t.keys ?? []).some((e) => {
                    let t = ec.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return ec.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = ec.values[e];
                    return null == n || "" === n;
                }))
                ? er
                : null,
        eh = ef?.settingsRequest ?? null,
        eg = i.useCallback(() => {
            null != ef && em(ef.id);
        }, [ef]),
        ep = null != eh,
        [ex, ev] = i.useState(null),
        ej = eo?.id ?? ef?.id;
    i.useLayoutEffect(() => {
        let e = w.current?.getScrollerNode(),
            t = ex?.firstElementChild;
        if (null == ex || null == e || !(0, lj.vq)(t, HTMLElement) || null == ej) return;
        function n() {
            N.current && w.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - ex.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [ex, ej, w, N]);
    let eb = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([e0.A], () => e0.A.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, o.bG)([e0.A], () => e0.A.isHistoryUnavailable(r), [r]),
            connState: m,
        }),
        ey = "loading" === eb && 0 === d.length,
        ew = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return c$[e % c$.length];
        }, [r]),
        ek = ea ? A.intl.string(C.default.Zc7gML) : "greeting" === eb && 0 === d.length ? ew : null,
        eN = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, r0.BL)(t)) return t;
            }
        }, [d]),
        eC = null != eN,
        eA = null != eN ? (0, a8.S)(eN) : void 0,
        eS = ea && el ? Z : void 0,
        eE = i.useCallback(() => re(r, A.intl.string(C.default.EMgIuY)), [r]),
        [eI, eM] = i.useState(null),
        [e_, eP] = i.useState(eC);
    (e_ !== eC && (eP(eC), eC || eM(null)),
        i.useEffect(() => {
            if (!eC) return;
            let e = w.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eM(null)
                        : eM(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eC, eN?.steps, _]));
    let eT = _ ? eI : "bottom",
        eL = i.useMemo(() => (null != eN ? (0, r2.b9)(eN.steps) : ""), [eN]),
        e$ = i.useMemo(() => (null != eN ? ((0, rZ.lt)(eN.steps) ?? eN.todos) : void 0), [eN]),
        eO = eN?.provisionalTodo,
        eD = null != eN && r1(eN),
        ez = i.useMemo(() => {
            var e;
            return null != eN ? ((e = eN.steps), (0, iv.k)((0, rZ.Jf)(e, !0).tasks)) : void 0;
        }, [eN]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: cL.TE,
        children: [
            el
                ? (0, a.jsx)(rQ.A, {
                      title: A.intl.string(C.default.gy7byi),
                      description: A.intl.string(C.default["dkv/WO"]),
                      icons: cR.ir,
                      onDrop: Y,
                  })
                : null,
            (0, a.jsx)(ac, {
                onJumpToActivity: L,
                line: eL,
                placement: eC && "top" === eT ? "top" : null,
                todos: e$,
                todosLive: eD,
                provisionalTodo: eO,
                agents: ez,
            }),
            (0, a.jsxs)("div", {
                className: cL.JX,
                children: [
                    (0, a.jsx)(rY.Ch, {
                        ref: w,
                        onScroll: $,
                        scrollbarGutter: ey ? "both-edges" : "stable",
                        className: [cL.N$, E ? null : cL.hB, ep ? cL.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(cg, {
                            projectId: r,
                            messages: d,
                            emptyState: eb,
                            floatingSettingsMessageId: ef?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? H : void 0,
                            draftHasText: K,
                            onApprovePlan: el ? eE : void 0,
                            onRestoreVersion: ee || eC ? void 0 : u,
                            scrollerRef: w,
                            stickToBottomRef: N,
                            pinned: S,
                            onUnpin: I,
                            handleRef: k,
                            onShowsLatestChange: T,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: cL.NJ,
                        children: (0, a.jsx)(cP, {
                            projectId: r,
                            thinking: eC,
                            turnStartedAt: eA,
                            restoring: ee,
                            remixStartedAt: q,
                            recalling: ey,
                            thinkingActivity: g,
                            compacting: v,
                            saving: j,
                            projectUsage: h,
                            connState: m,
                        }),
                    }),
                    null == eo
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ev,
                              className: ep ? `${cL.B5} ${cL.J9}` : cL.B5,
                              children: (0, a.jsx)(
                                  a0,
                                  { projectId: r, clarification: eo, onSubmit: el ? W : void 0, onDismiss: eu },
                                  eo.id,
                              ),
                          }),
                    null == eh
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eo ? ev : void 0,
                              className: cL.B5,
                              children: (0, a.jsx)(a4, { projectId: r, request: eh, onDismiss: eg }, ef?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cL.Jx,
                children: [
                    (0, a.jsx)(ac, {
                        onJumpToActivity: L,
                        line: eL,
                        placement: eC && "bottom" === eT ? "bottom" : null,
                        todos: e$,
                        todosLive: eD,
                        provisionalTodo: eO,
                        agents: ez,
                    }),
                    0 === O.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cL.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: A.intl.formatToPlainString(C.default["7b49dS"], {
                                          count: O.annotations.length,
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
                    null == z
                        ? null
                        : (0, a.jsx)("div", {
                              className: cL.qB,
                              children: (0, a.jsx)(t0.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: z.message,
                                  action: z.retry,
                              }),
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: cL.Db,
                              children: [
                                  (0, a.jsx)(t0.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: cL.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: A.intl.string(A.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tl.K, {
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
                    (0, a.jsx)(oG, {
                        projectId: r,
                        canSend: el,
                        running: eC,
                        restoring: ee,
                        onSend: U,
                        hasPendingContext: O.annotations.length > 0,
                        onInterrupt: el ? G : void 0,
                        onUploadFile: J,
                        onImport: c,
                        onApprove: eS,
                        suggestion: ek,
                        questionOpen: null != eo || null != eh,
                        modelSettings: b,
                        onModelSettingsChange: X,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var cD = n(761508),
    cz = n(933294),
    cq = n(207438),
    cF = n(683438);
function cU(e, t) {
    return String(e).padStart(t, "0");
}
var cG = n(667931);
let cB = {
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
    cK = { running: "Running", ok: "Done", error: "Failed" };
function cV(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function cH(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function cW(e) {
    return cV(Math.round(e));
}
function cX(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function cJ(e) {
    return cW(e.count > 1 ? e.totalMs : e.end - e.start);
}
let cY = ["Arguments", "Result", "Usage", "Details"];
function cQ(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function cZ(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function c0(e) {
    let t = (0, cG.bM)(e)?.end;
    return null != t ? cV(t) : (0, cG.lp)(e) ? "interrupted" : "still running";
}
function c1(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${cU(l.getHours(), 2)}:${cU(l.getMinutes(), 2)}:${cU(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${cU(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        cX(e.spans.length),
        (0, cG.Sj)((0, cG.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function c2(e) {
    let t = (0, cG.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, cG.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += c3(r, "in")),
                (l.output += c3(r, "out")),
                (l.cacheRead += c3(r, "cache_read")),
                (l.cacheWrite += c3(r, "cache_write")),
                (l.costUsd += c3(r, "cost_usd"))));
    }
    let r = cG.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function c3(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var c5 = n(738188),
    c7 = n(430993),
    c6 = n(364840),
    c4 = n(224640),
    c8 = n(20742);
let c9 = { collapsed: new Set(), revealed: new Set() };
var de = n(872892);
let dt = {
    op: de.Q,
    model: de.i3,
    tool: de.dH,
    setup: de.kc,
    worktree: de.Qx,
    sandbox: de.QH,
    build: de.F1,
    platform: de.Op,
    other: de.fv,
};
function dn(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      cX(t.calls, "model call"),
                      `${cH(t.input)} in`,
                      `${cH(t.output)} out`,
                      `${cH(t.cacheRead)} cache read`,
                      `${cH(t.cacheWrite)} cache write`,
                      cZ(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: de.M1,
        children: [
            (0, a.jsx)("div", {
                className: de.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${de.DJ} ${dt[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: de.o1,
                children: cG.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${cW(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: de.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${de.nf} ${dt[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: cB[e] }),
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
function dl(e) {
    return `conjure-perf-trace-${e}`;
}
function dr(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: de.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${de.p0} ${s + o > 85 ? de.EU : de.jh}`,
                children: i,
            }),
        ],
    });
}
function da(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : lA.a,
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
        id: dl(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${de.$y} ${r ? de.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: de.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: de.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: de.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: de.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${de.nf} ${dt[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: de.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: de.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: de.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(c5.WarningIcon, { size: "xs", color: "currentColor", className: de.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(dr, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${de.M0} ${de.Nh}`
                    : t.running
                      ? `${de.M0} ${de.rF}`
                      : `${de.M0} ${dt[t.category]}`,
                duration: cJ(t),
            }),
        ],
    });
}
function di(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: dl(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${de.$y} ${l ? de.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: de.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: de.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: de.U9 }),
                    (0, a.jsx)("span", { className: `${de.nf} ${de.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: de.MQ,
                        children: cX(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(dr, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${de.M0} ${de.ab} ${de.dL}`,
                duration: cW(t.totalMs),
            }),
        ],
    });
}
function ds(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: de._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: de.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${de.nf} ${dt[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [cQ("Start", `+${cW(e.start)}`), cQ("Duration", cJ(e))];
                      e.count > 1
                          ? t.push(
                                cQ("Calls", String(e.count)),
                                cQ("Longest call", cW(e.maxMs)),
                                cQ("Spread over", cW(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(cQ("Self time", cW(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(cQ("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(cQ("Notes", l.join(", "))),
                          null != e.span.error && t.push(cQ("Error", e.span.error)));
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
                              s = "cost_usd" === t ? cZ(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), cQ(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...cY.flatMap((e) => {
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
                                            className: de.xd,
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
                                                            className: de.vl,
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
function du(e) {
    let { trace: t } = e,
        n = i.useMemo(() => c2(t), [t]);
    return (0, a.jsx)(dn, { stats: n });
}
function dc(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, cG.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? c9 : (0, cG.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, cG.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, cG.x7)(t)), l((n) => (0, cG._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, cG.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cG.IE)(t, e);
                        null != n && l((e) => (0, cG.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, cG.IE)(t, e);
                        null != n && l((e) => (0, cG.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, cG.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, cG.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, cG.hB)(t));
                }, [t]),
                g = o.find((e) => e.key === r);
            return {
                rows: o,
                collapsed: n.collapsed,
                selectedKey: r,
                selected: g?.kind === "node" ? g.node : null,
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
        f = (0, cG.dj)(t),
        h = i.useMemo(() => (0, cG.nF)(f), [f]),
        g = h.length > 1 ? ((h[1] - h[0]) / f) * 100 : 100,
        p = i.useCallback(
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
                    null != t && (u(t.key), document.getElementById(dl(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(c7.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: de.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: c0(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: c1(t),
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
                                      children: `${cX(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(du, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: de.KE,
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
                        "aria-activedescendant": null == o ? void 0 : dl(o),
                        className: de.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: de.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: de.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: de.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${de.io} ${(e / f) * 100 > 85 ? de.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : cW(e),
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
                                          da,
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
                                    : (0, a.jsx)(di, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(c6.j, { children: (0, a.jsx)(ds, { node: s }) }),
        ],
    });
}
function dd(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([uI.A], () => uI.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(c4.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(c8.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(c7.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(dc, { trace: i }),
        ],
    });
}
let dm = { running: de.Vf, ok: de.mo, error: de.Sr };
function df(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${de.Om} ${dm[t]}`, role: "img", "aria-label": cK[t] });
}
function dh(e, t) {
    (0, tj.openModal)((n) => (0, a.jsx)(dd, { ...n, projectId: e, traceId: t }));
}
function dg(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => dh(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: de.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: de.sU,
                children: [
                    (0, a.jsx)(df, { status: (0, cG.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: de._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: c0(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: c1(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function dp(e) {
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
function dx(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([uI.A], () => uI.A.getTimingTraces(t), [t]),
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
                    let t = e.map(c2);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: cG.BF.map((e) => ({
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
              className: de.Ie,
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
              className: de.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: de.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: de.fH,
                              children: (0, a.jsx)(cF.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(dp, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(rY.Ch, {
                      className: de.XG,
                      children: [
                          (0, a.jsx)(dn, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: de.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(dg, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function dv(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function dj(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function db(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function dy(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function dw(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function dk(e) {
    return A.intl.string("preview" === e ? C.default["2yLYlG"] : C.default.eiAi57);
}
let dN = ["all", "preview", "stable", "web"];
function dC(e) {
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
function dA(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : A.intl.formatToPlainString(C.default["XO/bN4"], {
              p50: dv(e.memory_p50_bytes ?? 0),
              p999: dv(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let dS = {
    db: () => C.default["7l+DFG"],
    db_preview: () => C.default.FAuffi,
    runtime: () => C.default["Gkl+ab"],
    runtime_preview: () => C.default.ynpJzv,
    bot: () => C.default["5/i0cj"],
    bot_preview: () => C.default.m2jsnw,
};
var dE = n(911608),
    dI = n(177427);
function dM(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: dI.KE,
        children: [
            (0, a.jsx)("div", {
                className: dI.IQ,
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
                                  children: A.intl.formatToPlainString(C.default.INVO50, { time: dy(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: A.intl.string(C.default.oKEgiu), onClick: l }),
        ],
    });
}
function d_(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: dI.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: dI.Gf, children: t }),
            n,
        ],
    });
}
function dP(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: dI.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dI.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: dI.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: dI.kS,
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
function dT(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: dI.N8,
        children: [
            (0, a.jsxs)("div", {
                className: dI.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(dE.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? dI.dh : void 0,
            }),
        ],
    });
}
function dR(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(dP, {
            label: A.intl.string(C.default.SXP7pD),
            value: A.intl.string(C.default.E5hKVi),
            hint: dC(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(dP, {
            label: A.intl.string(C.default.SXP7pD),
            value: "\u2014",
            hint: A.intl.string(C.default.AGvoMJ),
        });
    let l = dA(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dP, { label: A.intl.string(C.default["H/X+FI"]), value: dj(n.cpu_ms) }),
            null != l && (0, a.jsx)(dP, { label: A.intl.string(C.default.lmFmMO), value: l }),
        ],
    });
}
function dL(e) {
    let { analytics: t } = e,
        n = A.intl.string(C.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(d_, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: dC(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? dS[t] : null) ? A.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(d_, {
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
                          dP,
                          {
                              label: n,
                              value: A.intl.formatToPlainString(C.default["w/2voO"], { cpu: dj(t.cpu_ms) }),
                              hint: dA(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var d$ = n(678708),
    dO = n(414499),
    dD = n(714800),
    dz = n(81466),
    dq = n(424383),
    dF = n(816943),
    dU = n(268791),
    dG = n(514042),
    dB = n(872351),
    dK = n(708988),
    dV = n(150934),
    dH = n(417270);
let dW = "Restart Agent",
    dX = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function dJ(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function dY(e, t) {
    return { label: e, value: null != t && "" !== t ? dy(t) : "Unknown", icon: "calendar" };
}
function dQ(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function dZ(e, t, n, l) {
    let [r, a] = dX[n.status];
    return { label: e, value: `${dQ(n.bytes)} of ${dQ(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function d0(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = dy(e.at);
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
let d1 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function d2(e) {
    let t = `container ${dJ(e.local)} \xb7 remote ${dJ(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: d1[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${db(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${db(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${db(n)} Ahead, ${db(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let d3 = ["main", "wip"];
var d5 = n(400154);
let d7 = {
        checkout: d$.FolderIcon,
        edit: am.PencilIcon,
        remote: dO.h,
        commits: dD.e,
        calendar: dz.CalendarIcon,
        save: dq.L,
        objects: ed.R,
        download: dF.$,
        size: dU.$,
        file: dG.FileIcon,
    },
    d6 = {
        ok: [sa.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [c5.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [lX.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [dB.z, ea.A.colors.ICON_MUTED],
        behind: [dK.M, ea.A.colors.ICON_MUTED],
    };
function d4(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([uI.A], () => uI.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, cq.DK)(t), [t]),
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
                    `Updated ${dy(r)}`,
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
    return (0, a.jsxs)(d_, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: d5.Lj,
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
                    if (!e.running || null != e.localError) return [d0(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            d0(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : db(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = d3.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(d2))
                        : l.push(
                              { label: "Main", value: dJ(e.heads.main), icon: "remote" },
                              { label: "WIP", value: dJ(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? db(e.commits) : "Unknown", icon: "commits" },
                            dY("Oldest Commit", e.oldest),
                            dY("Newest Commit", e.newest),
                            d0(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${db(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${db(t.loose)} loose (${dv(t.looseBytes)}) \xb7 ${db(t.packed)} packed in ${n} (${dv(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${db(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${db(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                dZ(
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
                                  dZ("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = d7[r],
                        [o, u] = null != i ? d6[i] : [null, void 0];
                    return (0, a.jsx)(
                        dP,
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
function d8(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([uI.A], () => uI.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, cq.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = uI.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, cq.gX)(e);
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
            let u = i.useCallback(() => (0, cq.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: dW,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eH.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: d5.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: d5.nM,
                children: [
                    (0, a.jsx)(dV.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: dH.RetryIcon,
                        text: dW,
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
                            return `Restarted \xb7 new instance since ${dy(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${dy(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function d9(e, t) {
    return (0, a.jsx)(dP, {
        label: e,
        value: A.intl.formatToPlainString(C.default.yHJxuP, { count: db((0, cC.aM)(t)) }),
        hint: `${db(t.input_tokens)} in \xb7 ${db(t.output_tokens)} out \xb7 ${db(t.cache_read_input_tokens)} cache read`,
    });
}
function me(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([uI.A], () => uI.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([uI.A], () => uI.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([uI.A], () => uI.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([uI.A], () => uI.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, cq.Lj)(t), [t]),
        f = i.useCallback(() => (0, cq.Lj)(t, !0), [t]),
        h = (0, o.bG)([uI.A], () => uI.A.getSandboxRestartState(t), [t]),
        g = (0, o.bG)([e0.A], () => e0.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, cq.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: d5.Mf,
        children: [
            (0, a.jsx)(dM, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(d_, {
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
                                  (0, a.jsx)(dP, {
                                      label: A.intl.string(C.default["9nqym2"]),
                                      value: db((0, cC.a7)(x.cost_usd)),
                                      hint: A.intl.formatToPlainString(C.default.NCdUIh, { count: db(x.turns) }),
                                  }),
                                  d9(A.intl.string(C.default.xtxP0e), x.orchestrator),
                                  d9(A.intl.string(C.default["9Sj3SX"]), x.codegen),
                                  d9(A.intl.string(C.default.ANCEo3), (0, cC.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(dP, {
                                          label: A.intl.string(C.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${db(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(d_, {
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
                                  d9(A.intl.string(C.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(dP, {
                                      label: A.intl.string(C.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, cC.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(d_, {
                title: A.intl.string(C.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(dT, {
                                      label: A.intl.string(C.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: db,
                                  }),
                                  (0, a.jsx)(dP, {
                                      label: A.intl.string(C.default.mRbSns),
                                      value: `${db(u.tokensBefore)} \u{2192} ${db(u.tokensAfter)}`,
                                      hint: A.intl.formatToPlainString(C.default.Vq3skS, {
                                          count: db(u.retainedMessages),
                                          time: dy(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? A.intl.formatToPlainString(C.default.GMLCNv, { ceiling: db(b) })
                                      : A.intl.string(C.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(dP, {
                            label: A.intl.string(C.default["4BX5KK"]),
                            value: `${db(c.projected)} / ${db(c.threshold)}`,
                            critical: !0,
                            hint: A.intl.formatToPlainString(C.default["6ngCax"], { time: dy(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: d5.Lj,
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
                                    let t = dy(e.observedAt);
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
                        className: d5.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: A.intl.string(C.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: p,
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
                                    let t = dy(e.observedAt);
                                    return A.intl.formatToPlainString(
                                        "restarted" === e.outcome ? C.default["76mfqO"] : C.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(d8, { projectId: t }),
                ],
            }),
            (0, a.jsx)(d4, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(d_, {
                    title: A.intl.string(C.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(dP, {
                                        label: A.intl.string(C.default.CLXHAs),
                                        value: dy(j.instance_since),
                                        hint: A.intl.string(C.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(dP, { label: A.intl.string(C.default["8V8e1Z"]), value: db(j.sockets) }),
                                    (0, a.jsx)(dP, {
                                        label: A.intl.string(C.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? A.intl.string(C.default.Wv025I)
                                            : A.intl.string(C.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(dP, {
                                            label: A.intl.string(C.default["3oUYnv"]),
                                            value: db(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(dR, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(d_, {
                    title: A.intl.string(C.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(dP, {
                            label: A.intl.string(C.default.IlDBN3),
                            value: db(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(dP, {
                            label: A.intl.string(C.default["ZdzKR+"]),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, { count: db(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(dP, {
                            label: A.intl.string(C.default.cIhN2W),
                            value: A.intl.formatToPlainString(C.default.yHJxuP, {
                                count: db(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(dP, {
                            label: A.intl.string(C.default["+fOn/q"]),
                            value: db(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(dP, { label: A.intl.string(C.default.kIHga0), value: db(v.max_build_attempts) }),
                        (0, a.jsx)(dP, { label: A.intl.string(C.default.Iw03yW), value: db(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var mt = n(237528),
    mn = n(629584),
    ml = n(531893);
function mr(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: ml.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: A.intl.string(C.default.h1SE6R),
              }),
          });
}
function ma(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: ml.qf,
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
              className: ml.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function mi(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: ml.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: A.intl.string(C.default.V7Ri8H),
              }),
          })
        : null;
}
var ms = n(109079);
let mo = i.memo(function (e) {
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
        className: ms.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: ms.Mt,
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
                className: ms.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: ms.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: ms.Cq, children: (0, a.jsx)(mt.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: ms.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(mt.v, { text: A.intl.string(C.default.TrC9c8), variant: "redLight" }),
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
                                      className: ms.Pq,
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
                                          className: ms.dF,
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
function mu(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([cz.A], () => cz.A.getLogs(t), [t]),
        l = (0, o.bG)([cz.A], () => cz.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [u, c] = i.useState(""),
        d = i.useMemo(() => {
            let e = u.trim().toLowerCase();
            return n.filter((t) => {
                var n, l;
                return (
                    "string" == typeof (n = t.log).message &&
                    "string" == typeof n.level &&
                    "string" == typeof n.ts &&
                    ("all" === r ||
                        ("preview" === (l = t.log.source) || "stable" === l || "web" === l ? l : "other") === r) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
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
        g = i.useMemo(
            () =>
                dN.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return dk(e);
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
        className: ms.$F,
        children: [
            (0, a.jsxs)("div", {
                className: ms.y4,
                children: [
                    (0, a.jsx)(mn.I, {
                        look: "pill",
                        "aria-label": A.intl.string(C.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: ms.KT,
                        children: (0, a.jsx)(cF.I, {
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
            n.length > 0 && (0, a.jsx)(mr, { state: l }),
            (0, a.jsxs)(rY.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: ms.sx,
                children: [
                    (0, a.jsx)(mi, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(ma, {
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
                          : d.map((e) => (0, a.jsx)(mo, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function mc(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(d_, {
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
function md(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(dP, {
                      label: A.intl.formatToPlainString(C.default["01ZMS4"], { env: dk(n) }),
                      value: ((t = l.connected), A.intl.string(t ? C.default.Wv025I : C.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(dP, {
                      label: A.intl.string(C.default["z1dh+F"]),
                      value: db(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${dy(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(dP, { label: A.intl.string(C.default.Iz5GnJ), value: db(l.guild_count) }),
                  (0, a.jsx)(dP, {
                      label: A.intl.string(C.default["7UqtNv"]),
                      value: db(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? A.intl.formatToPlainString(C.default.MasSly, {
                                    code: l.last_close_code,
                                    time: dy(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(dP, {
                          label: A.intl.string(C.default["x3+JXJ"]),
                          value: db(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(dP, { label: dk(n), value: A.intl.string(C.default.lTHQss) });
}
function mm(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(dP, {
        label: dk(t),
        value: A.intl.formatToPlainString(C.default["Xq+wHT"], {
            requests: db(n.requests),
            failures: db(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? A.intl.formatToPlainString(C.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: dy(n.last_failure.at),
                  })
                : A.intl.formatToPlainString(C.default["7KlGT6"], { time: dy(n.since) }),
    });
}
function mf(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(dP, {
                label: A.intl.formatToPlainString(C.default["92gVTm"], { env: dk(t) }),
                value: db(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    dP,
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
                                  ? A.intl.formatToPlainString(C.default.wxAWNv, { time: dy(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function mh(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(dP, {
        label: dk(t),
        value: A.intl.formatToPlainString(C.default.suAOj9, { calls: db(n.calls), errors: db(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function mg(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(d_, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: A.intl.string(C.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(d_, {
        title: t,
        children: [
            (0, a.jsx)(dP, {
                label: A.intl.string(C.default.xtD4Zp),
                value: db(n.requests),
                hint: A.intl.formatToPlainString(C.default["7KlGT6"], { time: dy(n.since) }),
            }),
            (0, a.jsx)(dP, { label: A.intl.string(C.default.gfRhR3), value: db(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(dT, {
                              label: A.intl.string(C.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: dj,
                          }),
                          (0, a.jsx)(dP, {
                              label: A.intl.string(C.default.mSKImM),
                              value: dj(r),
                              hint: A.intl.formatToPlainString(C.default.JqMU05, {
                                  total: dj(n.cpu_ms_total),
                                  wall: dj(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(dP, {
                      label: A.intl.string(C.default.LEJ5r3),
                      value: A.intl.string(C.default["2Ekb2b"]),
                      hint: A.intl.string(C.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(dP, { label: A.intl.string(C.default.xvmL1D), value: dj(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(dP, { label: A.intl.string(C.default["4sQYwH"]), value: db(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(dP, {
                label: A.intl.string(C.default.bQenOy),
                value: db(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: A.intl.formatToPlainString(C.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(dP, { label: A.intl.string(C.default.xgpn4Y), value: dw(n.build) }),
        ],
    });
}
function mp(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: A.intl.string(C.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: A.intl.string(C.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: A.intl.string(C.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(d_, {
        title: A.intl.string(C.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(dP, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(dP, {
                                  label: A.intl.formatToPlainString(C.default.u7kJJ4, { env: n }),
                                  value: dv(l.r2_bytes),
                                  hint: A.intl.formatToPlainString(
                                      l.r2_truncated ? C.default.lH0oQw : C.default.m9h02S,
                                      { count: db(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(dT, {
                                      label: A.intl.formatToPlainString(C.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: dv,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function mx(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: d5.Mf,
        children: [
            (0, a.jsx)(dM, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(mg, {
                            title: A.intl.string(C.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mg, {
                            title: A.intl.string(C.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(mp, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(mc, {
                                title: A.intl.string(C.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(md, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(mc, {
                                title: A.intl.string(C.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mm, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(mc, {
                                title: A.intl.string(C.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mf, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(mc, {
                                title: A.intl.string(C.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(mh, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(dL, { analytics: t.analytics }),
                        (0, a.jsxs)(d_, {
                            title: A.intl.string(C.default.fQMpFp),
                            children: [
                                (0, a.jsx)(dP, {
                                    label: A.intl.string(C.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? dw(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(dP, {
                                    label: A.intl.string(C.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? dw(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var mv = n(592465);
function mj(e) {
    let { projectId: t, onClose: n } = e,
        l = n1(),
        [r, s] = i.useState(() => (l && nQ?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([uI.A], () => uI.A.getStatus(t), [t]),
        d = (0, o.bG)([uI.A], () => uI.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, cq.R7)(t), (0, cq.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == nQ || nQ.projectId !== e) return null;
            let { traceId: t } = nQ;
            return ((nQ = null), t);
        })(t);
        return null != e && (dh(t, e), !0);
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
                        status: uI.A.getStatus(t),
                        last_turn_usage: uI.A.getLastTurnUsage(t),
                        last_compaction: uI.A.getLastCompaction(t),
                        last_compaction_decline: uI.A.getLastCompactionDecline(t),
                        timing_traces: uI.A.getTimingTraces(t),
                        logs: cz.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: A.intl.string(C.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = A.intl.string(C.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: mv.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(lK.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lK.Ay.Icon, {
                            icon: uX.CopyIcon,
                            tooltip: A.intl.string(C.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lK.Ay.Icon, { icon: en.P, tooltip: A.intl.string(A.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lK.Ay.ChannelIcon, { icon: nn.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lK.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: mv.rf,
                children: [
                    (0, a.jsxs)(cD.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": A.intl.string(C.default.RvvWIh),
                        className: mv.vR,
                        children: [
                            (0, a.jsx)(cD.V.Item, { id: "logs", children: A.intl.string(C.default["+VRYCm"]) }),
                            (0, a.jsx)(cD.V.Item, { id: "worker", children: A.intl.string(C.default["50D0FZ"]) }),
                            (0, a.jsx)(cD.V.Item, { id: "agent", children: A.intl.string(C.default.UkbTK1) }),
                            l ? (0, a.jsx)(cD.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(mu, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(mx, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(dx, { projectId: t })
                            : (0, a.jsx)(me, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var mb = n(365912),
    my = n(873715);
function mw(e) {
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
let mk = Object.freeze({ x: -1, y: -1 });
function mN(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = mw(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var mC = n(192888);
function mA(e, t) {
    return (0, mC.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(mN, () => ({ status: "failed" }));
}
var mS = n(108308);
let mE = { x: 25, y: 21 };
function mI(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function mM(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function m_(e, t, n, l) {
    let r = mM(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function mP(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function mT(e) {
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
function mR(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nE(u),
        m = (0, n2.Zv)(u),
        f = (0, tj.useHasAnyModalOpen)(),
        h = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        g = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(null),
        [w, k] = i.useState(!1),
        [N, S] = i.useState(!1),
        [E, I] = i.useState(null),
        [M, _] = i.useState(!1),
        P = i.useRef(null),
        T = i.useRef(null),
        R = i.useRef(null),
        [L, $] = i.useState(null),
        [O, D] = i.useState(!1),
        [z, q] = i.useState(null),
        [F, U] = i.useState(null),
        G = i.useRef(!1),
        [B, K] = i.useState(!1),
        [V, H] = i.useState(null),
        W = c && !m && !f;
    null == z || (W && z.projectId === u) || q(null);
    let X = z?.projectId ?? null;
    (i.useEffect(() => {
        if (null != X) return () => l8(X, "design");
    }, [X]),
        i.useEffect(() => {
            if (!W) return;
            function e() {
                let e = (function (e) {
                    if (null == e) return null;
                    let t = e.getBoundingClientRect();
                    return t.width < 1 || t.height < 1
                        ? null
                        : { left: t.left, top: t.top, width: t.width, height: t.height };
                })(r());
                j((t) => (mI(t, e) ? t : e));
            }
            e();
            let t = window.setInterval(e, 250);
            return (
                window.addEventListener("resize", e),
                () => {
                    (window.clearInterval(t), window.removeEventListener("resize", e));
                }
            );
        }, [W, r]),
        i.useEffect(() => {
            if (!W || null == u) return;
            let e = !0,
                t = r();
            if (null == t) return void S(!0);
            (k(!0), S(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, my.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? mT(t.response) : null;
                        null == n ? S(!0) : (y(n), nC(u, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), S(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [W, r, u]));
    let J = i.useRef(null);
    (i.useEffect(() => {
        if (!W || null == v || null == u) return;
        if (null == b) {
            J.current = v;
            return;
        }
        if (mI(J.current, v)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            J.current = v;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, my.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !el.current) return;
                        let l = mT(e.response);
                        null != l && (y(l), nC(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = mw(e.element);
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
    }, [W, v, b, d, u, r]),
        i.useEffect(() => {
            if (!W)
                return () => {
                    (I(null), q(null), H(null), y(null));
                };
        }, [W]));
    let Y = i.useRef(null),
        ee = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = W), W || ((Y.current = null), (ee.current = null), (R.current = null), _(!1)));
    }, [W]);
    let er = i.useCallback(
            function e() {
                if (en.current) return;
                let t = Y.current;
                if (null == t) return;
                Y.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    mA(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || mq(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? I(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = nd(t.target);
                                ($((t) => (mz(t, e) ? t : e)),
                                    I((e) => {
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
        ea = i.useCallback(() => {
            if (null == z) return;
            let e = !G.current;
            (U({ at: z.at, label: z.label, draft: z.draft, instant: e }), K(e), q(null));
        }, [z]);
    (i.useEffect(() => {
        if (!B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => K(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]),
        i.useEffect(() => {
            if (null == F) return;
            let e = setTimeout(() => U(null), mO);
            return () => clearTimeout(e);
        }, [F]));
    let ei = null == b || null == v || b.viewport.width < 1 ? 1 : v.width / b.viewport.width,
        es = null != b || N,
        eo = i.useMemo(() => b?.elements ?? [], [b]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: v, scale: ei };
    }, [v, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (l8(u, "design"),
                    H(null),
                    (G.current = !1),
                    q({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nd(e) }));
            },
            [u],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        em = i.useCallback(() => {
            let e = R.current;
            if (null == e) return;
            let t = P.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = T.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(em);
    let ef = i.useCallback(
            (e) => {
                if (null == v || null != V) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), em(), _(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > mD || Math.abs(e.clientY - z.at.y) > mD) && (G.current = !0);
                    return;
                }
                if (!es) return void I(null);
                let t = ed(e, v);
                if (O) {
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
                        })(eo, t.x, t.y),
                        n = null != e && mq(e, v, ei) ? null : e;
                    if (null != n) {
                        let e = nd(n);
                        $((t) => (mz(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ee.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ee.current = n), (Y.current = n), er());
            },
            [v, ei, es, ed, O, eo, z, V, em, er],
        ),
        eh = null == V ? null : d.find((e) => e.id === V.id),
        eg = W && (M || z?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && mA(e, mk);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (_(!1), I(null), (ee.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !M || !es || O || null != z || null != V) return;
        let e = R.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ee.current = l), (Y.current = l), er());
    }, [W, M, es, O, z, V, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != z || null != V) {
                    (ea(), H(null));
                    return;
                }
                if (null == E || null == v) return;
                let t = ed(e, v);
                ec(
                    E,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nu
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(E, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [E, v, ed, z, V, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (I(null), null != nG(u) ? nK(u) : nN(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != z
                    ? ea()
                    : V?.confirmingRemove === !0
                      ? H({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? H(null)
                        : ev());
        }, [u, z, V, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(u),
        ew = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = u), (ew.current = ev));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (W)
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
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            !(0, lj.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, mb.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == ey.current || null == nG(ey.current)) && ew.current());
        }
    }, [W, s]);
    let eN = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != z || null != V || 0 === eo.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == E ? -1 : eo.findIndex((e) => e.ref === E.ref);
                    I(eo[(n + (t ? 1 : -1) + eo.length) % eo.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != E &&
                    (e.preventDefault(),
                    ec(E, nu, { x: (v?.left ?? 0) + E.rect.x * ei, y: (v?.top ?? 0) + E.rect.y * ei }));
            },
            [u, z, V, eo, E, ec, ej, v, ei],
        ),
        eC = i.useCallback(
            (e) => {
                null == u ||
                    null == z ||
                    ((nc(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nd(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nh}${r}${ng}${nf(e)}
${t.trim()}`;
                            })(z.target, z.draft),
                            e,
                        ),
                        ea(),
                        I(null)));
            },
            [u, z, ea],
        ),
        eA = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, p.vX)(u, e)), [u]),
        eS = i.useCallback(() => {
            if (null != u && null != V && null != g && nc(V.draft)) {
                var e, t;
                let n, l;
                ((e = V.id),
                    (t = V.draft.trim()),
                    null != (l = (n = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(l, g) &&
                        ny(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...V, editing: !1 }));
            }
        }, [u, V, g]),
        eE = i.useCallback(() => {
            if (null != u && null != V && null != g) {
                var e;
                let t, n;
                ((e = V.id),
                    null != (n = (t = nb(u)).annotations.find((t) => t.id === e)) &&
                        nA(n, g) &&
                        ny(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [u, V, g]),
        eI = c
            ? w
                ? A.intl.string(C.default["Eb/YV9"])
                : N
                  ? A.intl.string(C.default.FD30bh)
                  : A.intl.formatToPlainString(C.default.dTSqLF, { count: d.length })
            : "",
        eM = W && null != v,
        e_ = M && null == V,
        eP = z?.target ?? eh?.target ?? null,
        eT = z ?? F,
        eR = z ?? (F?.instant === !0 ? null : F),
        eL =
            null != eh && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = mP(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(m_(eh.target, eh.anchor, v, ei), v)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            mA(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, lV.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: mS.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: mS.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eI,
                    }),
                    eM
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: mS.MT,
                                      style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                      "data-plain-cursor": e_ ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": A.intl.string(C.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: eN,
                                  }),
                                  null != E && null == E.marker && null == z && null == V
                                      ? (0, a.jsx)(mF, { box: mM(E, v, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: mS.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: mS.xz,
                                          "data-shown": null != E && null == V && null == z ? "" : void 0,
                                          "data-instant": B ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: mS.Ux,
                                              children: [
                                                  null == L
                                                      ? null
                                                      : (0, a.jsx)("span", { className: mS.Tl, children: L.kind }),
                                                  null == L || "" === L.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: mS.kh,
                                                            children: [" ", L.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: mS.Y,
                                      children: e_ ? (0, a.jsx)("div", { className: mS.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: mS.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: mS.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: mS.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: mS.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: mS.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eP && null == eP.marker
                                      ? (0, a.jsx)("div", { className: mS.D0, style: mM(eP, v, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = m_(e.target, e.anchor, v, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: mS.xL,
                                              style: { ...mP(n, v), width: 24, height: 24 },
                                              "aria-label": A.intl.formatToPlainString(C.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nm(e.target),
                                              }),
                                              "aria-expanded": V?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == z && H(l);
                                              },
                                              onFocus: () => {
                                                  null == z && H(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), H(l));
                                              },
                                              children: (0, a.jsx)(mL, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(ro, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: v,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != z && nc(eT.draft),
                                            onChange: (e) => {
                                                null != z && q({ ...z, draft: e });
                                            },
                                            onSubmit: eC,
                                            onDismiss: ea,
                                            onUploadFile: eA,
                                            closing: null == z,
                                        }),
                                  null != eh && null != V && null != eL
                                      ? (0, a.jsxs)(m$, {
                                            point: eL,
                                            frame: v,
                                            authorId: eh.authorId,
                                            title: nm(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                V.confirmingRemove ? H({ ...V, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                V.editing || V.confirmingRemove || H(null);
                                            },
                                            children: [
                                                V.editing
                                                    ? (0, a.jsx)(Z.f, {
                                                          autoFocus: !0,
                                                          label: A.intl.string(C.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: V.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => H({ ...V, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eS());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: mS.aC,
                                                          children: eh.comment,
                                                      }),
                                                nA(eh, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: mS.eB,
                                                          children: V.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: mS.nv,
                                                                            children: A.intl.string(C.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...V, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: A.intl.string(C.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eE,
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
                                                                                H({
                                                                                    ...V,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        V.editing
                                                                            ? (0, a.jsx)(et.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nc(V.draft),
                                                                                  text: A.intl.string(C.default.iicRP9),
                                                                                  onClick: eS,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: A.intl.string(
                                                                                      C.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      H({
                                                                                          ...V,
                                                                                          editing: !0,
                                                                                          draft: eh.comment,
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
function mL(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eQ.default], () => eQ.default.getUser(t), [t]);
    return (0, a.jsx)(si.eu, {
        src: null == n ? null : su.Ay.getUserAvatarURL(n),
        size: ss._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function m$(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(mE);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = v.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        b((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: y,
            top: w,
            originX: k,
            originY: N,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        C = { left: y, top: w, "--custom-conjure-card-origin-x": `${k}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: mS.Nr,
        style: C,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: mS.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: mS.ip, children: (0, a.jsx)(mL, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: mS.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: mS.zI, children: p }),
        ],
    });
}
let mO = 300,
    mD = 2;
function mz(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function mq(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function mF(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: mS.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var mU = n(659723),
    mG = n(697744),
    mB = n(130324);
function mK(e) {
    let t = (0, mG.c)(),
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
    let r = (0, cv.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function mV(e) {
    let { className: t } = e,
        { Component: n, events: l } = mK(3e4);
    return (0, a.jsxs)("div", {
        className: X()(t, mB.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: mB.ol,
                children: A.intl.string(C.default.AyiQEp),
            }),
        ],
    });
}
var mH = n(251363),
    mW = n(944142),
    mX = n(532247),
    mJ = n(501628);
function mY(e) {
    let { progress: t } = e,
        { Component: n } = mK(1500),
        l = n0.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: mJ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: mJ.PM,
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
function mQ(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([mW.A], () => (s ? mW.A.getLiveReload(t) : null), [s, t]),
        c = (0, lT.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = (function (e, t) {
            let n = (0, mX.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, mX.QP)(e, a) : null));
            let u = (0, o.bG)(
                    [lp.A],
                    () => {
                        let e = lp.A.getFrame(t);
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
                        null != n.target && n.target === (0, mH.ow)(null, t) && e();
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
        f = (0, mX.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eK.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: mJ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(mY, { progress: f }),
                  })
                : null,
        ],
    });
}
var mZ = n(343030),
    m0 = n(317608),
    m1 = n(338941),
    m2 = n(964404);
let m3 = { width: 1 / 0, height: 1 / 0 };
function m5(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m3;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var m7 = n(702083);
function m6(e) {
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
        d = n ? m5(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: X()(m7.dw, { [m7.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: X()(m7.R9, { [m7.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var m4 = n(347927);
function m8(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: X()(m4.Bf, l && m4.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: m4.Ux,
                children: [
                    (0, a.jsx)(ek.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(Q.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var m9 = n(957272);
function fe(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, m1.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, lm.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = lp.A.getFrame(e);
                    if (null == t || lx.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT)) return;
                    let n = lp.A.getMainFrame()?.id === e;
                    t.intent === lm.sV.MAIN
                        ? (n || lP.A.promoteFrame(e), lP.A.resetFrameLayoutModes(e))
                        : n && lP.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = lp.A.getFrame(u)) &&
                        ((0, lm.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        m2.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === lm.sV.INLINE && lP.A.promoteFrame(u),
                              lP.A.updateFrameLayoutMode({ frameId: u, layoutMode: lm.y0.PIP }))
                            : e.intent === lm.sV.MAIN && lP.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === m1.n.Launched)
    ) {
        let e = (0, a.jsx)(m0.A, { frameId: s.id, level: mZ.A.WithinAppContent, className: m9.Z7, overlay: r });
        return (0, ld.Q5)(n) ? (0, a.jsx)(m6, { children: e }) : e;
    }
    return (0, a.jsx)(ft, { state: o });
}
function ft(e) {
    let { state: t } = e;
    switch (t) {
        case m1.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: m9.qs,
                children: (0, a.jsx)(m8, {
                    title: A.intl.string(C.default["9kpdo7"]),
                    body: A.intl.string(C.default.iIA8Nj),
                }),
            });
        case m1.n.NoApplication:
            return (0, a.jsx)(mV, { className: m9.qs });
        case m1.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: m9.qs,
                children: (0, a.jsx)(m8, {
                    title: A.intl.string(C.default["7k4GyN"]),
                    body: A.intl.string(C.default.zdIy3R),
                }),
            });
        case m1.n.Error:
            return (0, a.jsxs)("div", {
                className: m9.qs,
                children: [
                    (0, a.jsx)(ek.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: A.intl.string(C.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: m9.tj,
                        children: A.intl.string(C.default.e6GiAZ),
                    }),
                ],
            });
        case m1.n.AwaitingLaunch:
        case m1.n.Loading:
            return (0, a.jsx)("div", { className: m9.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var fn = n(308528),
    fl = n(334738),
    fr = n(688438),
    fa = n(355622),
    fi = n(365971),
    fs = n(703462);
function fo(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: fs.f,
        children: [
            (0, a.jsx)(sU.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function fu() {
    return (0, a.jsx)("div", { className: fs.f, children: (0, a.jsx)(el.y, {}) });
}
function fc(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, li.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([ah.A], () => {
            if (null == u) return null;
            let e = ah.A.getDMFromUserId(u);
            return null != e ? ah.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && fn.A.preload(eW.ME, t);
        }, [t]),
        (n = (0, o.bG)([uG.A], () => uG.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, fi.Xg)();
            return (
                (0, fl.yl)(t, e),
                () => {
                    (0, fl.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            fn.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(fu, {})
        : null == u || f
          ? (0, a.jsx)(fo, { message: A.intl.string(C.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(fu, {})
            : (0, a.jsx)("div", {
                  className: fs.g,
                  children: (0, a.jsx)(fr.A, { channel: c, guild: null, chatInputType: fa.oU.SIDEBAR }, c.id),
              });
}
var fd = n(887909),
    fm = n(570962),
    ff = n(998475);
function fh(e) {
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
    } = (0, fd.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: ff.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: ff.rf,
                children: (0, a.jsx)(fm.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: ff.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: ff.z3,
                                      children: [
                                          (0, a.jsx)(ek.D, {
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
                                className: X()(ff.Qs, c ? ff.cw : null, d ? ff.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: ff.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var fg = n(765671),
    fp = n(269094),
    fx = n(714917),
    fv = n(463660),
    fj = n(582063);
let fb = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function fy() {
    (0, u.P0)({ text: A.intl.string(C.default.jj3abP), variant: "critical" });
}
function fw(e) {
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
                    return (0, a.jsx)(fk, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: fj.m2,
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
                accept: fb.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (fb.includes(n.type)
                                ? n.size > g.aI
                                    ? (0, u.P0)({ text: A.intl.string(C.default.T8Spiu), variant: "critical" })
                                    : (0, fv.M$)(t, n).catch(fy)
                                : (0, u.P0)({ text: A.intl.string(C.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function fk(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([fx.A], () => fx.A.getBackground(t)),
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
                        icon: az.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: A.intl.string(C.default.AiAz8J),
                        icon: dH.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, fv.Og)(t).catch(fy));
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
                        (0, fv.Y1)(t, !i) || fy();
                    },
                }),
            }),
        ],
    });
}
let fN = "/assets/7cec34541705c795.webp";
function fC(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, m1.A)({ applicationId: t, surface: lm.ZN });
    return (i.useEffect(() => {
        let e = (0, lm.VA)(t, lm.ZN);
        return () => (0, ls.r)(e);
    }, [t]),
    r.state !== m1.n.Launched)
        ? (0, a.jsx)(ft, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(ft, { state: m1.n.Loading })
          : (0, a.jsx)(fA, { lifecycle: r, projectId: n, size: l });
}
function fA(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, fg.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: fj.JH,
        children: [
            (0, a.jsx)(fS, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: fj.dw,
                children: (0, a.jsx)("div", {
                    className: fj.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(fp.A, { frame: t.frame, application: t.application, className: fj.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(fw, { projectId: n }) : null,
        ],
    });
}
function fS(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([fx.A], () => (null != t ? fx.A.getBackground(t) : null)),
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
                (0, fv.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(fN);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? fN : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: X()(fj.LO, { [fj.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var fE = n(409478),
    fI = n(652227);
function fM(e) {
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
        ? (0, a.jsx)("div", { className: fI.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: fI.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(fh, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: fI.RG,
                      children: [
                          (0, n9.yf)(o, u)
                              ? (0, a.jsx)(fe, { applicationId: t, surface: l, launch: r, frameOverlay: f })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: fI.qs,
                                        children: (0, a.jsx)(m8, {
                                            wide: !0,
                                            title: A.intl.string(C.default["08U+YO"]),
                                            body: A.intl.string(C.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(fE.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(fC, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(fc, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(mV, { className: fI.qs });
}
var f_ = n(175841),
    fP = n(750506),
    fT = n(867193),
    fR = n(539197),
    fL = n(977020);
function f$(e) {
    let { projectId: t } = e,
        n = (0, fR.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, fR.Ie)(e);
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
        className: fL.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [fR.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: X()(fL.hN, fL.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: X()(fL.hN, fL.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: X()(fL.UE, { [fL.SP]: n.shown, [fL.Vq]: n.pressed, [fL.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fO = n(417760);
function fD(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function fz(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function fq(e) {
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
              className: X()(fO.M0, fO.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(cx.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(f_.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: fO.ID, children: d }),
                  c ? (0, a.jsx)(eK.A, { children: A.intl.string(C.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: fO.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fO.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fO.sp,
                      children: [
                          (0, a.jsx)(f_.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(cx.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fO.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: fO.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: fO.Rb,
                                            children: A.intl.string(C.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: fO.lC, children: m }) : null,
              ],
          });
}
function fF(e) {
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
        d = lk(s);
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
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = fD(r());
            f((t) => (fz(t, e) ? t : e));
            let t = null == h ? null : fD(h);
            (x((e) => (fz(e, t) ? e : t)), null != h && (0, fT.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, fT.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != m,
        b = j && "controlling" === u && !c,
        y = null != m && m.width < 420,
        w = null == m ? void 0 : { left: m.left, top: m.top, width: m.width, height: m.height },
        k =
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
                  })(m, p),
        N = (function () {
            let [e] = i.useContext(fP.uY),
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
                      ref: g,
                      className: fO.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fO.QF,
                          children: (0, a.jsx)(fq, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, lV.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: fO.y4,
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
                                  className: fO.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fO.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(f$, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var fU = n(399503),
    fG = n(853555),
    fB = n(558960),
    fK = n(187645);
let fV = new Map(),
    fH = !1;
function fW() {
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
    for (let [l, r] of [...fV]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fV.delete(t),
            n.unregisterLookup(),
            fB.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        fV.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fK.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fX(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fV.set(e, l),
                    (l.unregisterLookup = (0, fG.Ng)(e, () => (0, mH.n5)(n, t))),
                    fB.A.registerFrameTarget(t, n, mZ.A.Backstage, void 0));
            })(t, n);
    for (let e of fV.values()) fX(e.element);
}
function fX(e) {
    let t = lR.A.isBuilderPreviewMobile();
    e.classList.toggle(fK.L, !t);
    let n = t ? m5(lR.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var fJ = n(873727),
    fY = n(147248),
    fQ = n(418842),
    fZ = n(363195),
    f0 = n(818023);
let f1 = null;
var f2 = n(602853),
    f3 = n(517461),
    f5 = n(761929),
    f7 = n(487336);
function f6(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, f2.r)(ea.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, f3.V)("VibegrationsChatSidebarWidth", 460),
        [d, m] = i.useState(u ?? 460),
        f = (0, ie.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? f + s : 0);
    }, [f, t, s, l]);
    let h = (0, f5.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: c,
            orientation: f5.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: f7.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: f7.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: f7.kL, style: { width: f }, children: r }),
        ],
    });
}
var f4 = n(541940);
function f8(e) {
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
        [h, g] = i.useState(null),
        p = (0, lT.A)(l, s),
        x = p?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([fZ.A], () => (0, fJ.x4)(fZ.A.theme)),
            l = (0, o.bG)([fY.A], () => fY.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([sW.Ay], () => ({
                reducedMotion: sW.Ay.useReducedMotion,
                fontScale: (0, fJ.U0)(),
                highContrast: sW.Ay.isHighContrastModeEnabled,
                forcedColors: sW.Ay.useForcedColors,
                underlineLinks: sW.Ay.alwaysShowLinkDecorations,
            })),
            d = n0.hH.useSetting(),
            m = (0, fQ.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, mH.n5)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, fJ.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, mC.W)(l, "set-env", i, {
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
                let n = (0, mH.n5)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, mH.n5)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, fG.Ng)(t, () => (0, mH.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, mH.ow)(h, x), [h, x]),
        j = i.useCallback(() => (f ? (0, mH.ow)(h, x) : h), [f, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: X()(f4.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(fF, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: g, className: f4.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(mR, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
            (0, a.jsx)(rH, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: v }),
        ],
    });
}
function f9(e) {
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
        onImportProject: g,
        debugOpen: p = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: w,
        activeMode: k,
        widgetApplicationId: N,
        overlayWidgetSize: S,
    } = e;
    (0, fU.k)(t, N);
    let E = s.type === le.U.MAIN || (0, ld.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lR.A], () => ({
            mobile: lR.A.isBuilderPreviewMobile(),
            landscape: lR.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? f0.aX.LANDSCAPE : f0.aX.PORTRAIT), (f1 = e));
                else {
                    if (f1 !== e) return;
                    ((l = f0.aX.UNHANDLED), (f1 = null));
                }
                lJ.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let I = i.useRef(null),
        [M, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, rX.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, rX.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (E) return ((0, lL.HV)(l), () => (0, lL.HV)(null));
        }, [l, E]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                fH ||
                    ((fH = !0),
                    e0.A.addChangeListener(fW),
                    B.Ay.addChangeListener(fW),
                    lp.A.addChangeListener(fW),
                    lR.A.addChangeListener(fW),
                    (0, n2.W3)(fW),
                    fW()));
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
        i.useLayoutEffect(() => () => rJ(0), []));
    let P = Math.max(360, M - 320),
        T = d || E;
    return (0, a.jsx)("div", {
        ref: I,
        className: f4.LB,
        children: (0, a.jsx)(f8, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, n9.yf)(w, k),
            mainClassName: null == c ? void 0 : X()(f4.ez, { [f4.zt]: d }),
            content: (0, a.jsx)(fM, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: w,
                activeMode: k,
                widgetApplicationId: N,
                overlayWidgetSize: S,
                projectId: t,
                frameOverlay: (0, a.jsx)(mQ, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && T
                    ? (0, a.jsx)(f6, {
                          open: d,
                          maxWidth: P,
                          onWidthChange: rJ,
                          children: (0, a.jsx)("div", {
                              className: f4.cO,
                              children: p
                                  ? (0, a.jsx)(mj, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(mU.A, { projectId: t }),
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
                                                className: f4.cb,
                                                children: (0, a.jsx)(
                                                    cO,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: h,
                                                        onImportProject: g,
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
function he(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [g, p] = i.useState(!0),
        [v, b] = i.useState(!1),
        y = n1(),
        w = i.useCallback(() => p(!0), []),
        k = i.useCallback(() => {
            (b(!1), p(!0));
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
        })(c, k),
        _ = c?.id ?? null,
        {
            integrationStatus: P,
            isPreviewApplicationLoading: T,
            checkingIntegration: R,
            previewReady: L,
            hasFrame: $,
            needsPermissionReview: O,
            installAuthorizeProps: D,
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
                g = (0, n9.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                p = i.useCallback(async () => {
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
                    p(),
                    () => {
                        (s.current?.abort(), (s.current = null));
                    }
                ),
                [p],
            );
            let x = (0, lM.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lM.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await p();
                }, [p, v]),
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
                needsPermissionReview: g,
                installAuthorizeProps: b,
            };
        })(c, h),
        z = (0, o.bG)([l$.A], () => (null == _ ? void 0 : l$.A.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: q,
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
                [g, p] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, w] = i.useState(r);
            y !== r && (w(r), p(null), v(null), b(null));
            let k = null != a && a === r ? a : null,
                N = (0, o.bG)([lu.default], () => lu.default.getId()),
                { applicationWidgetConfig: C } = (0, la.A)(N, k ?? void 0),
                A = C?.surfaces,
                S = (0, n9.yZ)({
                    widgetTop: A?.[lr.m.WIDGET_TOP] != null,
                    widgetBottom: A?.[lr.m.WIDGET_BOTTOM] != null,
                    miniProfile: A?.[lr.m.MINI_PROFILE] != null,
                }),
                E = null != k && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, li.YY)(a ?? void 0),
                M = null != a && I?.bot?.id != null,
                { data: _, isLoading: P } = (0, li.YY)(r ?? void 0),
                T = s || (0, lo.X)(_),
                R = null != r && P && null == _,
                L = (0, n9.P5)(u, {
                    legacy: { hasFrame: T, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != k,
                    botDmResolvable: M,
                }),
                $ = (0, n9.Xm)({ installScope: c, ...L, hasOverlay: f, ownerAuthorizationRevoked: d }),
                O = i.useMemo(() => (0, lc.hR)(u), [u]),
                D = (0, lc.PH)(x, O),
                z =
                    ((t = j),
                    (n = D),
                    (l = h),
                    n !== le.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                q = i.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, ld.Mm)(r)) {
                            let t = e.surface.type !== (0, lc.BR)(D),
                                n = (((0, lm.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (t || n) && (0, ls.r)(e.id);
                        }
                }, [r, D, z]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, n9.Qs)(g, $),
                    setMode: p,
                    frameSurface: D,
                    frameSurfaceOptions: O,
                    setFrameSurface: v,
                    appChannel: z,
                    setAppChannel: b,
                    frameLaunchParams: q,
                    widgetApplicationId: k,
                }
            );
        })({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: $,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: P?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(n6.q7.OVERLAY) === !0,
            previewAppChannels: z,
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
        q.modes.includes(e) && U(e);
    }),
        nZ(_, () => {
            (p(!0), b(!0));
        }));
    let en = q.modes.includes("frame"),
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
            handleRefresh: eg,
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
                g = i.useCallback(() => (0, lL.GG)(!f), [f]),
                p = (0, o.bG)([lR.A], () => lR.A.isBuilderPreviewLandscape()),
                x = A.intl.string(p ? C.default.tunI2l : C.default.DoNdjA),
                v = i.useCallback(() => (0, lL.Lw)(!p), [p]),
                j = (0, ld.jS)(t),
                b = i.useMemo(() => (0, ld.Op)(j, l), [j, l]),
                y = (0, lT.A)(t?.preview_application_id ?? null, b),
                w = (0, lm.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || lP.A.refreshProxyTicket(y.id);
                }, [y, w]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: m,
                mobilePreview: f,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: g,
                landscapePreview: p,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: w,
                handleRefresh: k,
            };
        })({
            project: c,
            modes: q.modes,
            frameSurface: K,
            frameSurfaceOptions: V,
            previewAppChannels: z,
            setMode: U,
            setFrameSurface: H,
            setAppChannel: J,
        }),
        ep = g && !v,
        ex = A.intl.string(ep ? C.default.JD6Oit : C.default.xjJAQm),
        ev = i.useCallback(() => {
            if (v) {
                (b(!1), p(!0));
                return;
            }
            p((e) => !e);
        }, [v]),
        ej = i.useCallback(() => p(!1), []),
        {
            designFeedbackActive: eb,
            designFeedbackToggleRef: ey,
            agentDrivingPreview: ew,
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
                        (n(), nw(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, en, k),
        [eA] = i.useState(() => j.isPlatformEmbedded && (0, lI.qM)()),
        eS = null != nW(_);
    i.useEffect(() => {
        null != _ && eS && !en && nK(_);
    }, [_, eS, en]);
    let eE = i.useCallback(() => {
            null != _ &&
                (k(),
                (function (e) {
                    if (null != nG(e)) return;
                    let { byProject: t } = nF.getState();
                    nF.setState({ byProject: { ...t, [e]: nU } });
                })(_));
        }, [_, k]),
        eI = i.useCallback(() => {
            null != _ && nK(_);
        }, [_]),
        eM = eS ? A.intl.string(C.default.tuQ5f3) : eN,
        e_ = i.useCallback(() => {
            b((e) => !e && (p(!0), !0));
        }, []),
        eP = i.useCallback(() => b(!1), []),
        eT = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ef?.id), (0, x.closeConnection)(e), (0, ls.r)(t)), f());
        }, [c, ef?.id, f]),
        eL =
            ((r = i.useCallback(() => {
                null != c && (w(), (0, x.sendUserMessage)(c.id, A.intl.string(C.default.oU20rd)));
            }, [c, w])),
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
                                          w();
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
                        [c, w],
                    ),
                )).open,
                importInput: s.input,
            }),
        e$ = i.useCallback(() => {
            null != c && (0, tY.A)(c, h);
        }, [c, h]),
        eO = (0, n9.JR)(F, O)
            ? { type: "permissions", authorizeProps: D }
            : R && null == P
              ? { type: "checking" }
              : void 0,
        eD = (0, o.bG)([B.Ay], () => null != _ && B.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == c && m) || eD) && (0, d.bG)(eW.BVt.CHANNEL(h, eX.VV.CONJURE));
    }, [h, c, m, eD]);
    let {
            publishOptions: ez,
            publish: eq,
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
        })(_, h, R || T),
        eG = (0, lO.L)(eq?.status ?? null),
        eB =
            null == eq
                ? null
                : (0, a.jsx)("div", {
                      className: t8.As,
                      children: (0, a.jsx)(eR.m, {
                          text: eG,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eF ? ht : null != eU ? ne.U : void 0,
                              disabled: eq.disabled,
                              onClick: () => eq.run("header"),
                              text: eU ?? eq.label,
                          }),
                      }),
                  }),
        eK = null == c ? void 0 : () => (0, th.A)(c.id, { guildId: h, isPreview: !0, publishOptions: ez }),
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
                                                      icon: ea ? hr : hl,
                                                      tooltip: es,
                                                      "aria-label": es,
                                                      selected: ea,
                                                      onClick: eo,
                                                  })
                                                : null,
                                            ea && "frame" === F
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: ha,
                                                      tooltip: ec,
                                                      "aria-label": ec,
                                                      selected: eu,
                                                      onClick: ed,
                                                  })
                                                : null,
                                            (0, a.jsx)(nJ, {
                                                enabled: eA && !eS && !ew,
                                                onLongPress: eE,
                                                children: (0, a.jsx)(ei.A.Icon, {
                                                    ref: ey,
                                                    icon: nt.x,
                                                    iconClassName: t8.D8,
                                                    tooltip: eM,
                                                    "aria-label": eM,
                                                    selected: eS || eb,
                                                    disabled: ew && !eS,
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
                                  onRefresh: (0, lm.x1)(ef) ? eg : void 0,
                                  isRefreshing: eh,
                                  onClose: eT,
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
                                      q.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== q.profileState
                                          ? Z
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ep
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: hn, tooltip: ex, "aria-label": ex, onClick: ev }),
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
                                          (0, a.jsx)(ek.D, {
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
                              value: ez,
                              children: (0, a.jsx)(
                                  f9,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: ey,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: em,
                                      frameLaunchParams: Y,
                                      header: eV,
                                      chatOpen: g,
                                      onCloseChat: ej,
                                      chatHeaderAction: eB,
                                      debugOpen: y && v,
                                      onCloseDebug: eP,
                                      onRestoreVersion: I,
                                      onImportProject: (0, B.PV)(c) ? eL.onImport : void 0,
                                      restoreState: N,
                                      previewReady: L,
                                      previewGate: eO,
                                      availability: q,
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
function ht() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t8.Hv, itemClassName: t8.C5 });
}
function hn(e) {
    return (0, a.jsx)(nl.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function hl(e) {
    return (0, a.jsx)(nr.u, { ...e, size: "custom", width: 20, height: 20 });
}
function hr(e) {
    return (0, a.jsx)(na.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ha(e) {
    return (0, a.jsx)(ni.H, { ...e, size: "custom", width: 20, height: 20 });
}
function hi(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, o.yK)([B.Ay], () => B.Ay.getOwnedProjects()),
        s = (0, o.yK)([m.Ay], () => m.Ay.getSelfMember(n)?.roles ?? [], [n]),
        g = (0, o.bG)(
            [f.A, h.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && h.A.can(eW.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [p, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [w, k] = i.useState(null),
        N = (0, V.z9)("VibegrationsScreen"),
        [I, M] = i.useState(null),
        P = (0, c.o)().get(K.f_) === U;
    i.useEffect(() => {
        M(null);
    }, [n, P]);
    let T = i.useMemo(() => (!P && N.some((e) => e.id === n) ? n : U), [N, n, P]),
        R = I ?? T,
        L = R === U ? "user" : "guild",
        $ = R === U ? n : R,
        [D, q] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, s, g]),
        i.useEffect(() => {
            (0, G.dm)(n, j);
        }, [n, j]));
    let F = i.useCallback(
            async (e, t, n) => {
                let l = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(l),
                    (0, x.stageModelSettings)(l, D ?? O),
                    e(l),
                    (0, d.pX)(eW.BVt.CHANNEL(t, eX.VV.CONJURE, l)),
                    v(""),
                    q(null));
            },
            [D],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    n = z({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), k(null));
                    try {
                        await F((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        k((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [F, L, $, p, b],
        ),
        X = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), k(null));
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
                        k((0, _.mG)(e));
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
                    (0, x.stageModelSettings)(n, D ?? O),
                    (0, x.sendUserMessage)(n, (0, H.Wl)(e)),
                    n
                );
            },
            [D],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (B.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, G.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new _.DS((0, _.hj)(e), e.status);
            }
            ((0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE, t)),
                q(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eW.BVt.CHANNEL(t, eX.VV.CONJURE, e)), q(null));
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
                        (0, x.stageModelSettings)(r, D ?? O),
                        await S(r, e, A.intl.string(C.default["LUc7/5"])),
                        (0, d.pX)(eW.BVt.CHANNEL(n, eX.VV.CONJURE, r)),
                        q(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: A.intl.string(C.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, D],
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
            (v(e), k(null));
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
        ? (0, a.jsx)(he, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t9, {
              projects: r,
              modelSettings: D,
              onModelSettingsChange: q,
              idea: p,
              guildId: n,
              submitting: b,
              createError: w,
              createDisabled: "idea" === (t = z({ idea: p, installScope: L, submitting: b })) || "submitting" === t,
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
