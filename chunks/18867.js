(n.r(t), n.d(t, { default: () => fw }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(17928),
    o = n(858899),
    u = n(458518),
    c = n(976860),
    d = n(696451),
    f = n(71393),
    m = n(576705),
    h = n(666476),
    g = n(989145),
    p = n(591277);
(n(323874), n(14289), n(35956));
var x = n(77729),
    v = n(723702),
    j = n(264572).Buffer;
async function b(e, t) {
    if (v.isPlatformEmbedded) {
        let n = j.from(await e.arrayBuffer());
        if ("function" == typeof x.A.fileManager.saveWithDialog2) await x.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await x.A.fileManager.saveWithDialog(n, t);
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
var y = n(382541);
class k extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function w(e, t) {
    let { ticket: n, baseUrl: l } = await (0, y.d)(e),
        r = new URLSearchParams({ ticket: n, name: t }),
        a = await fetch(`${l}/agent/export?${r}`);
    if (!a.ok) throw new k(a.status);
    return await a.blob();
}
var A = n(248675),
    N = n(660183);
async function S(e, t, n) {
    (0, p.Hc)(e);
    let l = await (0, g.vX)(e, t);
    (0, p.dv)(e, n, [l]);
}
function C(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, h.Oq)(e.size, t)
        ? null
        : N.intl.formatToPlainString(A.default.ThxcOX, { size: (0, h.sM)((0, h.Ju)(t)) });
}
async function E(e, t) {
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
        r = await w(e, l);
    await b(r, l);
}
function I(e) {
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
var M = n(639519),
    _ = n(361504);
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
    P = { main: T, subagent: T, thinking: ["low", "medium", "high", "xhigh", "max"] },
    R = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    L = { main: R, subagent: R, thinking: P.thinking },
    $ = { tier: "balanced", provider: "openai" },
    D = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function O(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var z = n(950305),
    F = n(548118);
let U = "user";
var q = n(371169),
    G = n(260498),
    B = n(941985),
    H = n(16619),
    K = n(952644);
n(321073);
var V = n(503698),
    W = n.n(V),
    J = n(97893),
    X = n(364522),
    Y = n(834730),
    Q = n(103557),
    Z = n(691885),
    ee = n(821609),
    et = n(789645),
    en = n(289873),
    el = n(152367),
    er = n(661531),
    ea = n(742589),
    ei = n(922016),
    es = n(980707),
    eo = n(477782),
    eu = n(81369),
    ec = n(664121);
let ed = [
    { value: "user", icon: z.UserIcon, nameMessage: A.default.s1TsXl },
    { value: "guild", icon: ec.R, nameMessage: A.default.LlLIJw },
];
function ef(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = I(i.useCallback((e) => n(e, "user"), [n])),
        s = I(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ei.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ei.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(es.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": N.intl.string(A.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eo.rX, {
                            label: N.intl.string(A.default.NyVn6T),
                            children: ed
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: N.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        eo.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(ee.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eu.H,
                        text: N.intl.string(A.default.NJGZA3),
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
var em = n(939249);
function eh(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(em.D, {
        "aria-disabled": l,
        "aria-label": n,
        className: t,
        onClick: l ? void 0 : r,
        children: i,
    });
}
var eg = n(865665),
    ep = n(373913);
let ex = { x: 5, y: 7 },
    ev = { x: 5, y: 4 };
function ej(e) {
    let { listClassName: t, radius: n, children: l } = e,
        [r, s] = i.useState(!1);
    return (0, a.jsxs)("div", {
        className: ep.n,
        onMouseEnter: () => s(!0),
        onMouseLeave: () => s(!1),
        children: [
            (0, a.jsx)("ol", { className: t, children: l }),
            r ? (0, a.jsx)(eg.C, { area: 64, radius: n, color: er.A.colors.TEXT_BRAND }) : null,
        ],
    });
}
var eb = n(864970),
    ey = n(707554),
    ek = n(297264),
    ew = n(770178),
    eA = n(765548),
    eN = n(595528),
    eS = n(885576),
    eC = n(662429);
let eE = "heading-xxl/semibold",
    eI = !1;
function eM() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eA.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, ew.w)(l, [], { fireOnMount: !0 }),
        o = (0, s.bG)([eN.A], () => eN.A.isConnected());
    i.useEffect(() => {
        if (!o || !t || eI) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((eI = !0), e.current?.play());
                }, 400));
        }
        let a = document.fonts;
        return (
            null == a ? r() : a.load("16px 'AI Visual Identity Glyphs'", "123456789ABC").then(r, r),
            () => {
                ((n = !0), window.clearTimeout(l));
            }
        );
    }, [o, t]);
    let u = (0, s.bG)([eS.A], () => eS.A.isIdle()),
        c = i.useRef(u);
    i.useEffect(() => {
        let t = c.current && !u;
        ((c.current = u), t && eI && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = N.intl.string(A.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eC.x,
        children: t
            ? (0, a.jsx)(ey.H, { children: (0, a.jsx)(eb.o, { ref: e, text: d, variant: eE, delay: null }) })
            : (0, a.jsx)(ek.D, { variant: eE, children: d }),
    });
}
var e_ = n(900797),
    eT = n(320448),
    eP = n(866665),
    eR = n(783977),
    eL = n(344587),
    e$ = n(534554),
    eD = n(392208),
    eO = n(837984),
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
function eq(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, f] = i.useState(!1),
        m = eU(d),
        h = eD.P.indexOf(t.tier),
        g = d ? e_.t : eT._,
        p = eD.P.map(e$.D0),
        x = (0, e$.Tc)(t.tier),
        { text: v, phase: j } = (0, eL.Q)(x);
    return (0, a.jsx)("div", {
        className: eF.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: W()(eF.t$, { [eF.Zr]: u && c, [eF.GF]: !u }),
            role: "dialog",
            "aria-label": N.intl.string(A.default["3E7Yc0"]),
            children: [
                m.mounted
                    ? (0, a.jsx)("div", {
                          className: W()(eF.Nr, eF.uO, { [eF.Zr]: d && m.entered, [eF.GF]: !d }),
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
                                    "aria-label": N.intl.string(A.default.eGqPbV),
                                    onClick: () => f((e) => !e),
                                    children: [
                                        (0, a.jsx)(Y.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: N.intl.string(A.default.aBPQxX),
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
                                (0, a.jsx)(Y.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: W()(eF.Z, { [eF.xQ]: "exit" === j, [eF.lm]: "enter" === j }),
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
                                        (0, a.jsx)(Y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: N.intl.string(A.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Y.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: N.intl.string(A.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eO.A, {
                                    activeIndex: h,
                                    stops: p,
                                    ariaLabel: N.intl.string(A.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = eD.P[e];
                                        null != n && n !== t.tier && s((0, e$.CM)((0, e$.j6)(t, n)));
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
function eG(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, f] = (0, ez.FT)(t, s),
        [m, h] = i.useState(!1),
        { mounted: g, entered: p } = eU(m);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eq, {
                settings: d,
                tiers: n ?? null,
                choices: l,
                disabled: r,
                onChange: f,
                placement: t,
                open: m,
                entered: p,
            });
        },
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, a.jsx)(eP.m, {
                text: N.intl.string(A.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(em.D, {
                    innerRef: c,
                    className: o ?? eF.hZ,
                    "aria-label": N.intl.string(A.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": m,
                    children: u ?? (0, a.jsx)(eR.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eB = n(536637),
    eH = n.n(eB),
    eK = n(140735),
    eV = n(442433),
    eW = n(314116),
    eJ = n(652215),
    eX = n(746080),
    eY = n(855793),
    eQ = n(434279),
    eZ = n(287809),
    e0 = n(427262),
    e1 = n(245179),
    e2 = n(803306);
let e3 = new Set(),
    e4 = new Map();
function e7(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function e6(e) {
    if (null == e || e3.has(e) || null != eZ.default.getUser(e)) return;
    let t = e4.get(e) ?? 0;
    t >= 3 ||
        (e4.set(e, t + 1),
        e3.add(e),
        e2
            .wz(e)
            .finally(() => e3.delete(e))
            .catch(() => {}));
}
var e5 = n(782603),
    e8 = n(780338),
    e9 = n(663417),
    te = n(70688),
    tt = n(173936),
    tn = n(473935),
    tl = n(625903),
    tr = n(408278),
    ta = n(365199),
    ti = n(7437),
    ts = n(147036),
    to = n(957565),
    tu = n(785389),
    tc = n(123917),
    td = n(860402);
let tf = new Set();
var tm = n(329356),
    th = n(442331),
    tg = n(616334),
    tp = n(189714),
    tx = n(733791),
    tv = n(189213),
    tj = n(331322),
    tb = n(192308),
    ty = n(664619),
    tk = n(706935);
function tw(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, u] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [f, m] = i.useState(null),
        h = "delete" === l,
        g = h ? (0, tx.fI)(n) : (0, tx.Kd)(n),
        p = h ? null : (0, tx.L4)(n),
        x = (0, tx.Mi)(n),
        v = h
            ? N.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName })
            : N.intl.formatToPlainString(A.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), m(null));
        let e = h ? (0, q.xx)(t.id) : (0, ty.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? m(N.intl.string(h ? A.default["0XDHob"] : A.default.PJ2Fkn))
            : (h || (0, o.P0)({ text: (0, tx.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tv.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tx.WX)((0, tk.tb)(A.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tx.J)(n) : N.intl.string(A.default["8OKM1N"]),
        "aria-label": v,
        notice: null == f ? void 0 : { message: f, type: "critical" },
        actions: [
            { text: N.intl.string(N.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: N.intl.string(h ? A.default.aC42bN : A.default.BGF8VT),
                variant: "critical-primary",
                loading: c,
                disabled: c,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(tj.B, {
            gap: 12,
            children: [
                g.length > 0 || null != p
                    ? (0, a.jsx)(tk.Ay, {
                          items: g,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: u, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != x ? (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: x }) : null,
            ],
        }),
    });
}
function tA(e) {
    (0, tb.openModal)((t) => (0, a.jsx)(tw, { ...t, ...e }));
}
var tN = n(552821);
let tS = [];
function tC(e) {
    (0, o.P0)({ text: e, variant: "critical" });
}
function tE(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: u,
            canRemix: c,
            onExport: d,
            onImport: f,
            onRemix: m,
            onConnectTool: h,
            onHistory: g,
            onRefresh: p,
            isRefreshing: x = !1,
            onClose: v,
            refreshApplicationId: j,
            previewProjectId: b,
            onCloseMenu: y,
        } = e,
        k = (0, tp.iI)(t),
        w = i.useContext(tm.bI),
        { pending: S, refresh: C } = (0, ti.A)(j ?? null),
        { pending: E, connect: I } = (function (e, t) {
            let [n, l] = i.useState(tf),
                r = i.useRef(tf),
                a = i.useCallback((e) => {
                    ((r.current = (0, tu.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, tu.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, td.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, tc.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, tu.rq)(l.error)
                                          ? N.intl.string(A.default["jCQ/1B"])
                                          : N.intl.string(A.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(b ?? null, tC),
        M = (0, s.bG)([th.A], () => (null == b ? tS : th.A.getDeclaredConnections(b))),
        _ = i.useMemo(() => (0, tu.Xl)(M), [M]),
        T = (0, tx.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: N.intl.string(A.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: N.intl.formatToPlainString(A.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: N.intl.formatToPlainString(A.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != j, refreshPending: S, offers: _, connectPending: E }),
        R = i.useMemo(() => new Map(M.map((e) => [e.type, e])), [M]),
        L = null != m && c,
        $ = u && null != f,
        D = L || null != d || $ || null != h || null != g,
        O = to.p5 && null != l,
        z = to.p5,
        F = k ? e5.BellIcon : e8.BellSlashIcon;
    return (0, a.jsxs)(es.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": N.intl.string(N.t.ogxXGq),
        onClose: y,
        onSelect: y,
        children: [
            null != p || null != v
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "refresh",
                                    icon: e9.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e9.RefreshIcon },
                                    label: N.intl.string(A.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "close",
                                    icon: te.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: te.DoorExitIcon },
                                    label: N.intl.string(A.default["/TlGcK"]),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, a.jsx)(eo.rX, {
                      children: P.map((e) =>
                          (0, a.jsx)(
                              eo.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void C();
                                      let t = null == e.connectionType ? null : R.get(e.connectionType);
                                      null != t && I(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(eo.rX, {
                children: (0, a.jsx)(eo.Dr, {
                    id: "mute",
                    label: N.intl.string(k ? A.default.s9rCuH : A.default["a+i/As"]),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, tp.$L)(t, !k),
                }),
            }),
            D
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(eo.Dr, { id: "remix", label: N.intl.string(A.default.XWgAfc), action: m })
                              : null,
                          null != d
                              ? (0, a.jsx)(eo.Dr, { id: "export", label: N.intl.string(A.default.WsEEP7), action: d })
                              : null,
                          $
                              ? (0, a.jsx)(eo.Dr, { id: "import", label: N.intl.string(A.default.rWGY3e), action: f })
                              : null,
                          null != h
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "connect-tool",
                                    label: N.intl.string(A.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "history",
                                    label: N.intl.string(A.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            z
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          O
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "copy-link",
                                    label: N.intl.string(N.t.WqhZss),
                                    icon: tt.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: tt.LinkIcon },
                                    action: () =>
                                        (0, to.C)((0, ts.n)(l, eX.VV.CONJURE, t), () =>
                                            (0, o.P0)({ text: N.intl.string(N.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eo.Dr, {
                              id: "copy-project-id",
                              label: N.intl.string(A.default["nm/zuU"]),
                              icon: tn.L,
                              leadingAccessory: { type: "icon", icon: tn.L },
                              action: () =>
                                  (0, to.C)(t, () =>
                                      (0, o.P0)({ text: N.intl.string(A.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            u || T?.canRemoveBot === !0
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          u
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "settings",
                                    label: N.intl.string(A.default.FzfmQ8),
                                    icon: tl.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tl.SettingsIcon },
                                    action: () =>
                                        (0, tg.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: w,
                                        }),
                                })
                              : null,
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "remove-from-server",
                                    label: N.intl.formatToPlainString(A.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = G.Ay.getProject(t);
                                        null != e && tA({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          u
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "delete",
                                    label: N.intl.string(N.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = G.Ay.getProject(t);
                                        if (null != e && null != T) tA({ project: e, target: T, action: "delete" });
                                        else
                                            (0, eW.A)({
                                                title: N.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: N.intl.string(A.default["0OmrVn"]),
                                                confirmText: N.intl.string(N.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, q.K)(t, () =>
                                                        (0, o.P0)({
                                                            text: N.intl.string(A.default["0XDHob"]),
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
    return (0, a.jsx)(ei.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ei.Y.Animation.NONE,
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
                        ? (0, a.jsx)(eP.m, {
                              text: N.intl.string(N.t["UKOtz+"]),
                              children: (0, a.jsx)(tr.K, {
                                  icon: ta.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": N.intl.string(N.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ea.A.Icon, {
                              icon: ta.MoreHorizontalIcon,
                              tooltip: N.intl.string(N.t["UKOtz+"]),
                              "aria-label": N.intl.string(N.t["UKOtz+"]),
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
    tT = n(286739);
function tP(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: W()(tT.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(t_.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: t_.DN.SIZE_16 }),
    });
}
var tR = n(217846),
    tL = n(941650);
function t$(e) {
    var t;
    let n,
        l,
        r,
        u,
        d,
        m,
        h,
        g,
        p,
        x,
        { project: v, guildId: j, onSelect: b, onRemix: y, shared: w = !1 } = e,
        M =
            ((n = v.id),
            (l = v.name),
            (r = i.useRef(!1)),
            (u = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, o.P0)({ text: N.intl.formatToPlainString(A.default.aN2JdD, { name: l }) }),
                    E(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, o.P0)({
                                    text:
                                        409 === (t = e instanceof k ? e.status : null)
                                            ? N.intl.string(A.default["9oqbEw"])
                                            : 404 === t
                                              ? N.intl.string(A.default["0W8uLq"])
                                              : N.intl.string(A.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: u,
                onImport: (d = I(
                    i.useCallback(
                        (e) => {
                            let t = C(e);
                            null != t
                                ? (0, o.P0)({ text: t, variant: "critical" })
                                : (0, eW.A)({
                                      title: N.intl.formatToPlainString(A.default["Gm+u1+"], { name: l }),
                                      subtitle: N.intl.string(A.default.M7H3sJ),
                                      confirmText: N.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, c.pX)(eJ.BVt.CHANNEL(j, eX.VV.CONJURE, n));
                                          try {
                                              await S(n, e, N.intl.string(A.default.Owerd3));
                                          } catch {
                                              (0, o.P0)({
                                                  text: N.intl.string(A.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, j],
                    ),
                )).open,
                importInput: d.input,
            }),
        _ =
            null == v.updated_at
                ? null
                : N.intl.formatToPlainString(A.default.AXydi3, { time: eH()(v.updated_at).fromNow() }),
        T = (0, eQ.wu)(v),
        P =
            (0, s.bG)([f.A], () => (null == T ? null : (f.A.getGuild(T)?.name ?? null)), [T]) ??
            N.intl.string(A.default["3QFps8"]),
        R = (0, s.bG)([G.Ay], () => G.Ay.isProjectDeleting(v.id), [v.id]),
        L =
            ((t = w ? v : null),
            (m = t?.id),
            (h = t?.owner_user_id),
            (g = (0, s.yK)(
                [e1.A],
                () =>
                    null == m
                        ? []
                        : [
                              ...new Set(
                                  e1.A.getMessages(m)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [m, h],
            )),
            i.useEffect(() => {
                null != h && (e6(h), g.forEach(e6));
            }, [h, g]),
            (p = (0, s.bG)([eZ.default], () => (null == h ? null : eZ.default.getUser(h)), [h])),
            (x = (0, s.yK)([eZ.default], () => g.map((e) => eZ.default.getUser(e)).filter((e) => null != e), [g])),
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
                                      ? N.intl.formatToPlainString(A.default.t5RWBS, { creator: e })
                                      : N.intl.formatToPlainString(A.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? N.intl.formatToPlainString(N.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? N.intl.formatToPlainString(N.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? N.intl.formatToPlainString(N.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : N.intl.formatToPlainString(N.t.xpU76u, {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                                count: n - 3,
                                                            }),
                                        });
                              })(
                                  (0, e0.mG)(p),
                                  x.map((e) => (0, e0.mG)(e)),
                              ),
                          },
                [p, x],
            )),
        $ = i.useId(),
        D = (0, a.jsx)(Y.E, { variant: "text-md/semibold", color: "text-strong", className: tL.j1, children: v.name }),
        O = {
            projectId: v.id,
            projectName: v.name,
            guildId: j,
            projectGuildId: v.guild_id,
            isOwner: (0, G.PV)(v),
            canRemix: (0, G.H_)(v),
            onRemix: y,
            onExport: M.onExport,
            onImport: M.onImport,
        };
    return (0, a.jsxs)("div", {
        className: W()(tL.OY, { [tL.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eY.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tR.a, { projectId: v.id }),
            (0, a.jsxs)(em.D, {
                className: tL.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eV.jA)(e, () => (0, a.jsx)(tE, { ...O, onCloseMenu: eV.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(tM.A, { project: v, size: "card", className: tL.VJ }),
                    (0, a.jsxs)("div", {
                        className: tL.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tL.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eP.m, { text: L.label, ariaHidden: !0, children: D }) : D,
                                    null == L || R ? null : (0, a.jsx)(tP, { creator: L, className: tL.rb }),
                                    R ? null : (0, a.jsx)(tR.n, { projectId: v.id, className: tL.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tL.h3,
                                children: [
                                    (0, a.jsx)(Y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tL.Wb,
                                        children: R ? N.intl.string(A.default.Yh5pAc) : P,
                                    }),
                                    null == _ || R
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tL.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tL.zM,
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
                className: tL.M2,
                children: R
                    ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tL.Pl,
                          children: [(0, a.jsx)(tI, { ...O, trigger: "iconButton" }), M.importInput],
                      }),
            }),
        ],
    });
}
var tD = n(246338);
let tO = "user",
    tz = "no-server",
    tF = new Map();
function tU(e) {
    return tF.get(e) ?? null;
}
function tq(e) {
    switch (e) {
        case "all":
        case tO:
        case tz:
            return null;
        default:
            return e;
    }
}
function tG(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tO:
            return "user" === e.install_scope;
        case tz:
            return null == (0, eQ.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tB = n(506774);
let tH = "VibegrationsProjectsPanelOpen";
function tK() {
    return tB.w.get(tH) ?? null;
}
function tV(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tW = n(95264),
    tJ = n(631417);
function tX(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = N.intl.string(A.default.FzfmQ8);
    return (0, a.jsx)(ea.A, {
        hideSearch: !0,
        toolbar: n,
        className: tJ.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tJ.QF,
            children: [
                (0, a.jsx)(el.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: er.A.colors.TEXT_STRONG,
                    className: tJ.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(ea.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(ea.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(eP.m, {
                          asContainer: !0,
                          text: s,
                          position: "bottom",
                          children: (0, a.jsx)(em.D, {
                              className: tJ.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tM.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ea.A.Title, { className: tJ.Qw, wrapperClassName: tJ.DD, children: t }),
            ],
        }),
    });
}
var tY = n(683071),
    tQ = n(47167),
    tZ = n(808728),
    t0 = n(994500);
let t1 = "conjuring-help";
var t2 = n(173114);
function t3() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, s.cf)([eZ.default, f.A, tZ.Ay, t0.A], () => {
                let e = eZ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eJ.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = tZ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tQ.m1)(t, eZ.default, t0.A) === t1;
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
                    ? (0, c.pX)(eJ.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, tc.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t2.l,
              children: (0, a.jsx)(tY.w, {
                  type: "info",
                  iconAlign: "center",
                  message: N.intl.format(A.default["6anmu1"], { channel: t1, onNavigate: t }),
                  role: "static",
              }),
          });
}
var t4 = n(606128),
    t7 = n(323140);
function t6(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: u,
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
            onStartTemplate: k,
            onSubmitTemplate: w,
            onCancelTemplate: S,
            onSkipTemplate: C,
            onImportNewProject: E,
            importing: I,
        } = e,
        [M, T] = i.useState(() => ({ guildId: r, filter: tU(r) })),
        R = (M.guildId === r ? M.filter : tU(r)) ?? r,
        O = i.useCallback(
            (e) => {
                (tF.set(r, e), T({ guildId: r, filter: e }));
            },
            [r],
        ),
        B = (0, s.yK)(
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
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: el.D, label: N.intl.string(A.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tO, leading: z.UserIcon, label: N.intl.string(A.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tz, leading: ec.R, label: N.intl.string(A.default["3QFps8"]) },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        K = (0, s.yK)(
            [G.Ay, f.A],
            () => {
                let e = tq(R);
                if (null != e) return G.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    G.Ay.hasFetchedGuildProjects(e.id) && t.push(...G.Ay.getSharedProjects(e.id));
                return t;
            },
            [R],
        );
    i.useEffect(() => {
        let e = tq(R);
        null == e || G.Ay.hasFetchedGuildProjects(e) || (0, q.hF)(e);
    }, [R]);
    let V = i.useMemo(
            () =>
                K.filter((e) => tG(e, R)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [K, R],
        ),
        ei = i.useMemo(
            () => [
                {
                    label: N.intl.string(A.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: U,
                            label: N.intl.string(A.default.UPLaGM),
                            leading: z.UserIcon,
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
                    .filter((e) => tG(e, R))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, R],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tD.Ot)(e, r)
                    ? v(e.id)
                    : (0, o.P0)({ text: N.intl.string(A.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = N.intl.string(A.default.ab1sMf),
        ed = [N.intl.string(A.default["9w+Chc"]), N.intl.string(A.default.WAvmdq), N.intl.string(A.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: N.intl.string(A.default.lGLnE8),
                description: N.intl.string(A.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: N.intl.string(A.default.uJKQTs),
                description: N.intl.string(A.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: N.intl.string(A.default.iF5Oru), description: N.intl.string(A.default.NbDDO6) },
        ],
        eg = i.useCallback(
            (e) => {
                if (null != e.wizard) {
                    var t;
                    return void ((t = {
                        template: e,
                        guildId: r,
                        eligibleGuilds: g,
                        onStart: (t) => k(e.name, t),
                        onSubmit: (t, n, l) => w(e, t, n, l),
                        onCancel: S,
                        onSkip: C,
                    }),
                    (0, tb.openModalLazy)(
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
            [g, r, S, y, C, k, w],
        ),
        ep = N.intl.string(A.default.zzYLlW),
        eb =
            (i.useEffect(() => {
                (0, q.b8)();
            }, []),
            (0, s.bG)([G.Ay], () => {
                let e = G.Ay.getMaxProjects();
                return null != e && G.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - G.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = N.intl.string(A.default["2XcV3x"]),
        ek = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ew = tq(R) ?? r,
        eA = (0, s.bG)([G.Ay], () => G.Ay.getGuildProjectsFetchState(ew), [ew]),
        eN = (0, s.bG)([G.Ay], () => G.Ay.getGuildProjectsFetchState(r), [r]),
        [eS, eC] = i.useState(tK),
        eE = i.useMemo(() => tB.w.get(tV(r)) ?? !1, [r]),
        eI = "success" === eN,
        e_ = (0, s.yK)([G.Ay], () => G.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tG(e, r)),
        eT = eS ?? (!!e_ || "error" === eN || (!eI && eE));
    i.useEffect(() => {
        eI && tB.w.set(tV(r), e_);
    }, [eI, e_, r]);
    let eP = i.useCallback((e) => {
            (tB.w.set(tH, e), eC(e));
        }, []),
        eR = i.useCallback(() => eP(!eT), [eP, eT]),
        eL = i.useCallback(() => eP(!1), [eP]),
        e$ = N.intl.string(A.default.kar7jh),
        eD = eT ? e$ : N.intl.string(A.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: W()(t7.nj, t7.a0, t4.T),
        children: (0, a.jsxs)("div", {
            className: t7.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t7.ps,
                    children: [
                        (0, a.jsx)(tX, {
                            title: N.intl.string(A.default.uk6jhJ),
                            actions: (0, a.jsx)(ea.A.Icon, {
                                icon: J.Z,
                                tooltip: eD,
                                "aria-label": eD,
                                selected: eT,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(X.Ip, {
                            className: t7.Yy,
                            children: (0, a.jsx)("div", {
                                className: t7.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: W()(t7.Qs, t7.Ix),
                                    children: [
                                        (0, a.jsx)(t3, {}),
                                        (0, a.jsx)(eM, {}),
                                        (0, a.jsxs)("section", {
                                            className: t7.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t7.G9,
                                                    children: [
                                                        (0, a.jsx)(Y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
                                                        }),
                                                        (0, a.jsx)(Y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: N.intl.string(A.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(ej, {
                                                    listClassName: t7.Aw,
                                                    radius: ex,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t7.EA,
                                                                children: (0, a.jsxs)(eh, {
                                                                    disabled: u,
                                                                    ariaLabel: N.intl.formatToPlainString(
                                                                        A.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: W()(t7.nx, t7.rz),
                                                                    onClick: () => eg(e),
                                                                    children: [
                                                                        (0, a.jsx)(Y.E, {
                                                                            className: t7.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Y.E, {
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
                                                        (0, a.jsx)(Y.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Y.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: N.intl.string(A.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(ej, {
                                                    listClassName: t7.Aw,
                                                    radius: ev,
                                                    children: ed.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t7.EA,
                                                                children: (0, a.jsx)(eh, {
                                                                    disabled: u,
                                                                    className: t7.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Y.E, {
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
                                className: W()(t7.Qs, t7.DA),
                                children: [
                                    (0, a.jsx)(Q.f, {
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
                                                children: (0, a.jsx)(Z.l, {
                                                    selectionMode: "single",
                                                    label: N.intl.string(A.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: N.intl.string(A.default.NyVn6T),
                                                    options: ei,
                                                    value: m,
                                                    onSelectionChange: h,
                                                    disabled: u,
                                                }),
                                            }),
                                            null != eb
                                                ? (0, a.jsx)(Y.E, {
                                                      variant: "text-sm/medium",
                                                      color: 0 === eb ? "text-feedback-warning" : "text-subtle",
                                                      children:
                                                          0 === eb
                                                              ? N.intl.string(A.default.s28pGG)
                                                              : N.intl.formatToPlainString(A.default.Wy5aK4, {
                                                                    count: eb,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eG, {
                                                settings: p ?? $,
                                                tiers: D,
                                                choices: (0, _.b)()
                                                    ? {
                                                          main: [...P.main, ...L.main],
                                                          subagent: [...P.subagent, ...L.subagent],
                                                          thinking: P.thinking,
                                                      }
                                                    : P,
                                                disabled: u,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)(ee.$, {
                                                variant: "primary",
                                                size: "md",
                                                text: N.intl.string(N.t.CumH4u),
                                                disabled: d,
                                                loading: u,
                                                onClick: () => b(),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    ],
                }),
                (0, a.jsxs)("aside", {
                    className: t7.pA,
                    hidden: !eT,
                    "aria-label": N.intl.string(A.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t7.IR,
                            children: [
                                (0, a.jsx)(Y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t7.RM,
                                    children: N.intl.string(A.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t7.Ss,
                                    children: [
                                        (0, a.jsx)(ef, { importing: I, onImport: E }),
                                        (0, a.jsx)(ea.A.Icon, {
                                            icon: et.P,
                                            tooltip: e$,
                                            "aria-label": e$,
                                            onClick: eL,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)(X.Ip, {
                            className: t7.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t7.Vw,
                                    children: (0, a.jsx)(Z.l, {
                                        selectionMode: "single",
                                        label: N.intl.string(A.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: R,
                                        onSelectionChange: O,
                                    }),
                                }),
                                (0, a.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t7.wE,
                                    children: N.intl.string(A.default.JQpNkh),
                                }),
                                ("unattempted" === eA || "loading" === eA) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t7.E8, children: (0, a.jsx)(en.y, {}) })
                                    : "error" === eA && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t7.E8,
                                            children: [
                                                (0, a.jsx)(Y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t7.JS,
                                                    children: N.intl.string(A.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(ee.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: N.intl.string(A.default["WFJ/vb"]),
                                                    onClick: () => (0, q.hF)(ew),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t7.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t7.ST,
                                                  children: [
                                                      (0, a.jsx)(el.D, { size: "lg", color: er.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t7.sI,
                                                          children: N.intl.string(A.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t7.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      t$,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tW.A)(e, r),
                                                      },
                                                      e.id,
                                                  ),
                                              ),
                                          }),
                                V.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t7.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t7.uc,
                                                  children: [
                                                      (0, a.jsx)(Y.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: N.intl.string(A.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: N.intl.string(A.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t7.Dq,
                                                  children: V.map((e) =>
                                                      (0, a.jsx)(
                                                          t$,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tW.A)(e, r),
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
var t5 = n(478016),
    t8 = n(604525),
    t9 = n(92446),
    ne = n(534890),
    nt = n(646270),
    nn = n(31300),
    nl = n(831453);
let nr = new Set(),
    na = null;
function ni(e, t) {
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
                nr.add(t),
                () => {
                    nr.delete(t);
                }
            );
        }, [e]));
}
var ns = n(885386);
function no() {
    return ns.Q_.useSetting() || !1;
}
var nu = n(573083);
let nc = Object.freeze({ x: 0.5, y: 0.5 });
function nd(e) {
    return "" !== e.trim();
}
function nf(e) {
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
    let { kind: t, name: n } = nf(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nh(e) {
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
let ng = "[vibegrations:selected] ",
    np = " \u2014 ";
function nx(e) {
    if (!e.startsWith(ng)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(ng.length),
        a = r.indexOf(np),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nv = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nj = new Map(),
    nb = new Set();
function ny(e) {
    return nj.get(e) ?? nv;
}
function nk(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nj.set(e, t) : nj.delete(e), [...nb]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function nw(e) {
    nj.has(e) && nk(e, nv);
}
function nA(e, t) {
    let n = ny(e);
    n.active && nk(e, { ...n, context: t });
}
function nN(e, t) {
    return null != t && e.authorId === t;
}
function nS(e) {
    return (
        nb.add(e),
        () => {
            nb.delete(e);
        }
    );
}
function nC(e) {
    let t = i.useCallback(() => (null == e ? nv : ny(e)), [e]);
    return i.useSyncExternalStore(nS, t, t);
}
var nE = n(128761),
    nI = n(12177),
    nM = n(967008),
    n_ = n(951178);
let nT = { width: 320, height: 240 };
var nP = n(855859),
    nR = n(238490),
    nL = n(991690),
    n$ = n(696645);
function nD(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function nO(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, n$.XV)(e.surface)
                : N.intl.formatToPlainString(A.default["6xVl+N"], {
                      surface: (0, n$.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return N.intl.string(A.default.y5GiL1);
        case "overlay":
            return N.intl.string(A.default["2940LX"]);
        case "bot":
            return N.intl.string(A.default.tjpaGN);
    }
}
var nz = n(598748),
    nF = n(294323),
    nU = n(627363),
    nq = n(457827),
    nG = n(25451),
    nB = n(280450),
    nH = n(373677),
    nK = n(754027),
    nV = n(165610);
let nW = [];
var nJ = n(86147),
    nX = n(729475),
    nY = n(91242),
    nQ = n(869146),
    nZ = n(475815),
    n0 = n(621466);
function n1(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function n2(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, n0.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function n3(e) {
    return (0, nZ.a3)(document, e);
}
function n4(e) {
    return i.useSyncExternalStore(n3, () => n2(e));
}
function n7(e) {
    let { frame: t, controlProjectId: n } = e,
        l = n4(t?.id ?? null),
        r = (0, nu.Zv)(n),
        i = (0, s.bG)(
            [nQ.A, nY.A],
            () => null != t && nQ.A.getWindowOpen(eJ.MLl.ACTIVITY_POPOUT) && nY.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, nV.x1)(t) || i || r) return null;
    let o = n1(t.id);
    if (null == o || !(0, nZ.Ub)(o)) return null;
    let u = N.intl.string(l ? N.t.Z7MyNB : N.t.OIDkcp);
    return (0, a.jsx)(ea.A.Icon, {
        tooltip: u,
        icon: l ? nJ.z : nX.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = n1((e = t.id))) && (0, nZ.Ub)(n) && (n2(e) ? (0, nZ.sP)(n) : (0, nZ.tl)(n));
        },
    });
}
var n6 = n(559106),
    n5 = n(847374),
    n8 = n(704745);
function n9(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let f = N.intl.string(A.default.I2ucou);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(es.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": f,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eo.rX, {
                    label: f,
                    children: t.map((e) => {
                        let t = nD(e);
                        return (0, a.jsx)(
                            eo.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: nO(e),
                                checked: t === nD(n),
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
            return (0, a.jsx)(n6.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: n8.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Y.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: N.intl.string(A.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Y.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: nO(n),
                        }),
                        (0, a.jsx)(n5.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var le = n(803101),
    lt = n(226178),
    ln = n(625180),
    ll = n(672929),
    lr = n(111534),
    la = n(513845),
    li = n(722701),
    ls = n(949616),
    lo = n(535466),
    lu = n(321032),
    lc = n(277085);
function ld(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, lo.Ay)(t),
        [c, d] = i.useState(n),
        [f, m] = i.useState(l),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lc.p)(b),
        k = h ?? u,
        w = f.trim();
    function S() {
        (r(), o());
    }
    async function C(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, tm.$l)(t, { name: b, icon: h, description: f }, { name: n, description: l });
        (j(!1), r) ? S() : x(N.intl.string(A.default.Fi7boI));
    }
    let E = "" === b ? n : b;
    return (0, a.jsx)("form", {
        onSubmit: C,
        children: (0, a.jsx)(tv.a, {
            transitionState: s,
            onClose: o,
            title: N.intl.string(A.default.OmOWDq),
            subtitle: N.intl.string(A.default.Gzmlyg),
            size: "sm",
            preview: (0, a.jsx)(lu.w, { iconURL: k, name: E, description: w }),
            actions: [
                { text: N.intl.string(A.default["bz/M68"]), variant: "secondary", onClick: S, disabled: v },
                {
                    text: N.intl.string(A.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != y,
                },
            ],
            children: (0, a.jsxs)(tj.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lu.r, {
                        iconURL: k,
                        canRemove: null != h,
                        onIconChange: (e) => {
                            (g(e), x(null));
                        },
                        name: c,
                        nameError: y,
                        onNameChange: d,
                        description: f,
                        onDescriptionChange: m,
                        previewName: E,
                        inlinePreview: !1,
                        disabled: v,
                    }),
                    null != p
                        ? (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: p })
                        : null,
                ],
            }),
        }),
    });
}
var lf = n(516288);
function lm(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lf.t)(t, n);
    return (0, a.jsx)(tv.a, {
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
let lh = {
    showPublishBlocked: function (e, t, n) {
        (0, tb.openModal)((l) => (0, a.jsx)(lm, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tb.openModal)(
                (t) =>
                    (0, a.jsx)(ld, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    openPublishNotes: n(951465).A,
    showError: (e) => (0, o.P0)({ text: e, variant: "critical" }),
};
var lg = n(58736),
    lp = n(308081),
    lx = n(73153);
function lv(e) {
    lx.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var lj = n(689175),
    lb = n(65593),
    ly = n(115982),
    lk = n(886540);
function lw(e) {
    return !(0, lk.BL)(e) && !0 !== e.stopRequested;
}
var lA = n(104317),
    lN = n(643278),
    lS = n(566424),
    lC = n(683063),
    lE = n(138212);
function lI(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: W()(lE.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: W()(lE.wx, null != n && lE.o5, i),
                children: [
                    (0, a.jsx)(Y.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var lM = n(148590);
function l_(e) {
    let { children: t } = e;
    return (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lT(e) {
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
        f = i.useId(),
        [m, h] = i.useState(!l),
        [g, p] = i.useState(l);
    g !== l && (p(l), h(!l));
    let x = i.useCallback(() => h((e) => !e), []),
        v = m ? n5.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(lI, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: lM.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(em.D, {
                                className: lM.L$,
                                onClick: x,
                                "aria-expanded": m,
                                "aria-controls": f,
                                "aria-label": m ? s : r,
                                children: (0, a.jsx)(v, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: m ? void 0 : lM.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: f, className: W()(lM.rf, o), hidden: !m, children: c })],
    });
}
var lP = n(883646);
let lR = [];
function lL(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: W()(lP.xL, {
            [lP.Vb]: "in_progress" === t,
            [lP.cT]: "completed" === t,
            [lP.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return N.intl.string(A.default.KvBdun);
                case "in_progress":
                    return N.intl.string(A.default["m5G9+S"]);
                case "unfinished":
                    return N.intl.string(A.default.lRpwhD);
                default:
                    return N.intl.string(A.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(en.y, {
                type: en.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lP.Qd,
                itemClassName: lP.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lP.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lP.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function l$(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lR), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [c, d] = i.useState(s),
        [f, m] = i.useState(!1);
    c !== s && (d(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && m(!1));
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
                    e = requestAnimationFrame(() => m(!0));
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
        className: lP.X6,
        "data-shown": n && f ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    lC.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lP.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: lP.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function lD(e) {
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
            ((t = (r ?? lR).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? lR) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lP.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: W()(lP.AS, { [lP.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lL, { status: n }),
                            (0, a.jsx)(Y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lP.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lP.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(l$, { agents: u.get(e.id) ?? lR, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lP.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lL, { status: "pending" }),
                          (0, a.jsx)(Y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lP.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lP.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lO(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = N.intl.formatToPlainString(A.default["P/I+JW"], { completed: o, total: u }),
        d = N.intl.formatToPlainString(A.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(lT, {
        title: N.intl.string(A.default.RtzECX),
        meta: (0, a.jsx)(l_, { children: c }),
        superseded: s,
        showLabel: N.intl.string(A.default.RKyN9q),
        hideLabel: N.intl.string(A.default.xydHoj),
        className: lP.Nr,
        bodyClassName: lP.rf,
        beforeBody: r && !s ? (0, a.jsx)(eK.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lD, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lz = n(308665),
    lF = n(59678),
    lU = n(903847);
function lq(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, f] = i.useState(n ?? "top"),
        [m, h] = i.useState(c),
        [g, p] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(c);
    (j !== c && (b(c), null != n ? (f(n), h(!0)) : (p(!1), v(!1))),
        i.useEffect(() => {
            if (c || !m) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [c, m]),
        i.useEffect(() => {
            if (!m || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [m, c]));
    let [y, k] = i.useState(!1),
        [w, S] = i.useState(!1),
        [C, E] = i.useState(x);
    (C !== x && (E(x), x ? k(!0) : S(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => k(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => S(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [y, x]));
    let I = null != l && l.length > 0,
        M = i.useCallback(() => v((e) => !e), []);
    return m
        ? (0, a.jsxs)("div", {
              className: lU.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: W()(lU.vK, { [lU.ho]: g && c, [lU.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: W()(lU.Rk, lF.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lS.A, {
                                        glyph: (0, a.jsx)(lz.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(em.D, {
                                    className: lU.pZ,
                                    onClick: u,
                                    "aria-label": N.intl.string(A.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: W()(lU.Rk, lF.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lS.A, {
                                            glyph: (0, a.jsx)(lz.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(eP.m, {
                                    text: N.intl.string(A.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(em.D, {
                                        className: lU.BO,
                                        onClick: M,
                                        "aria-expanded": x,
                                        "aria-label": N.intl.string(A.default.RtzECX),
                                        children: (0, a.jsx)(lN.ClipboardListIcon, {
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
                            className: W()(lU.vB, { [lU.pg]: x && w, [lU.ui]: !x }),
                            children: (0, a.jsx)(lO, {
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
var lG = n(658675),
    lB = n(22231),
    lH = n(826745),
    lK = n(123292),
    lV = n(734057);
let lW = {
        [eJ.rbe.GUILD_TEXT]: "text",
        [eJ.rbe.GUILD_VOICE]: "voice",
        [eJ.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eJ.rbe.GUILD_STAGE_VOICE]: "stage",
        [eJ.rbe.GUILD_FORUM]: "forum",
        [eJ.rbe.GUILD_MEDIA]: "media",
    },
    lJ = { channel: "#", role: "@", user: "@" },
    lX = {
        channel: [A.default["9+dfPT"], A.default.pGSJqE],
        role: [A.default["2VkCoD"], A.default.c8YlX8],
        user: [A.default.GZIAxl, A.default["4bptbQ"]],
    };
function lY(e, t) {
    return N.intl.string(lX[e][+!!t]);
}
var lQ = n(155078);
function lZ(e) {
    return e.options.some((e) => null != e.image);
}
let l0 = [];
function l1(e, t) {
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
var l2 = n(890497),
    l3 = n(300344),
    l4 = n(614733),
    l7 = n(904363),
    l6 = n(950902),
    l5 = n(384017);
function l8(e) {
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
            matchSorterOptions: f,
        } = e,
        m = !0 === n.multi_select,
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
                        let l = null == (n = lV.A.getChannel(t)?.type) ? void 0 : lW[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = eZ.default.getUser(t)?.username;
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
        matchSorterOptions: f,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: l5.YX,
        "data-conjure-clarification-picker": n.input,
        children: m
            ? (0, a.jsx)(l2.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(l2.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function l9(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, l3.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(l8, { ...l, guildId: t, options: r, placeholder: lY("channel", !0 === l.question.multi_select) });
}
function re(e) {
    let { guildId: t, ...n } = e,
        l = (0, l7.A)(t);
    return (0, a.jsx)(l8, { ...n, guildId: t, options: l, placeholder: lY("role", !0 === n.question.multi_select) });
}
function rt(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, l4.A)(t);
    return (0, a.jsx)(l8, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lY("user", !0 === n.question.multi_select),
    });
}
function rn(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, l6.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(l9, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(re, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(rt, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var rl = n(87221),
    rr = n(144228),
    ra = n(241326),
    ri = n(26430),
    rs = n(750943),
    ro = n(95477),
    ru = n(256905),
    rc = n(839214);
let rd = [],
    rf = 1,
    rm = (0, rc.D)(() => ({ draftsByProject: {} }));
function rh(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? rd;
}
function rg(e, t) {
    return rh(rm.getState(), e, t);
}
function rp(e, t, n) {
    let { draftsByProject: l } = rm.getState();
    rm.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function rx(e, t, n, l) {
    let r = rg(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (rp(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function rv(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function rj(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && rv(e, t.ref.id));
}
function rb(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = rm.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? rd) n ? rj(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    rm.setState({ draftsByProject: i });
}
function ry(e) {
    return N.intl.formatToPlainString(A.default.JZ59Bo, { size: (0, h.sM)((0, h.Ju)(e)) });
}
function rk(e, t) {
    let n = rg(e, t);
    if (0 !== n.length) {
        for (let t of n) rj(e, t);
        rp(e, t, rd);
    }
}
function rw(e, t) {
    let n = rg(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (rp(e, t, rd), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function rA(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = rg(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? rw(e, "chat") : [];
    (0, p.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function rN(e, t) {
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
(lx.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(rm.getState().draftsByProject)) rb(e, { deleteFromWorker: !0 });
}),
    lx.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        rb(t, { deleteFromWorker: !1 });
    }));
var rS = n(907702);
function rC(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = rN(t, n),
        [c, d] = i.useState(null),
        f = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: W()(rS.Gt, rS.b6),
              children: [
                  (0, a.jsx)(rl.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: N.intl.string(A.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: W()(rS.Gt, { [rS.iP]: !f }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: rS.Sl,
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
function rE(e) {
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
            onView: f,
            onArrow: m,
            onMeasured: h,
            onRemove: g,
        } = e,
        p = N.intl.formatToPlainString(A.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: W()(rS.Vs, { [rS.Q9]: s, [rS.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(em.D, {
                className: rS.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), m(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": N.intl.formatToPlainString(A.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: rS.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(rC, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: rS.Gt }),
                            (0, a.jsx)("span", {
                                className: rS.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lG.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rr.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Y.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: rS.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lQ.E)(t) : "")
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
                      className: rS.B4,
                      children: (0, a.jsx)(eP.m, {
                          text: N.intl.string(A.default.HQEXJM),
                          children: (0, a.jsx)(tr.K, {
                              icon: ra.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": N.intl.string(A.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: rS.B4,
                        children: (0, a.jsx)(eP.m, {
                            text: N.intl.string(A.default["4/eeDD"]),
                            children: (0, a.jsx)(tr.K, {
                                icon: ri._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => f(r),
                                "aria-label": p,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function rI(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: f } = l,
        m = f.length > 4 ? "gallery" : "row",
        h = i.useRef(null),
        p = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && f.some((e) => e.id === x) ? x : (f.find((e) => r.includes(e.id)) ?? f[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = f.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, g.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, ru.R)({
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
            [f, n],
        ),
        y = i.useCallback(
            (e, t) => {
                let n = (f.findIndex((t) => t.id === e.id) + t + f.length) % f.length,
                    l = f[n];
                (v(l.id), h.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, f],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: N.intl.string(A.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: rS.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: W()(rS.fF, "gallery" === m ? rS.nV : rS.nM, { [rS.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": m,
                "data-count": f.length,
                children: [
                    f.map((e) =>
                        (0, a.jsx)(
                            rE,
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
                              rE,
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
            (0, a.jsx)(rM, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: N.intl.string(/\bicons?\b/i.test(l.question) ? A.default.qU4WN6 : A.default.cbMDDB),
            }),
        ],
    });
}
function rM(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, f] = i.useState(""),
        m = r ? 0 : -1,
        p = n.busy;
    function x() {
        "" !== d.trim() &&
            null == p &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), f(""));
                },
                () => void 0,
            );
    }
    return (0, a.jsxs)("div", {
        className: rS.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rS.QJ,
                children: [
                    (0, a.jsx)(ee.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: rs.X,
                        text: s,
                        loading: "upload" === p,
                        disabled: l || "link" === p,
                        onClick: () => o.current?.click(),
                        tabIndex: m,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(ee.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: tt.LinkIcon,
                              text: N.intl.string(A.default["1TgOO+"]),
                              disabled: l || "upload" === p,
                              onClick: () => c(!0),
                              tabIndex: m,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: rS.Fg,
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
                                        (0, h.Oq)(a.size, r)
                                            ? (0, g.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: ry(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: rS.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: rS.Hs,
                              children: (0, a.jsx)(ro.k, {
                                  label: N.intl.string(A.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: N.intl.string(A.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => f(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), x())
                                          : "Escape" === e.key && (e.stopPropagation(), c(!1));
                                  },
                                  autoFocus: !0,
                                  type: "url",
                                  error: null == p && n.error?.source === "link" ? n.error.text : null,
                                  disabled: l,
                                  "data-conjure-own-image-link-input": !0,
                              }),
                          }),
                          (0, a.jsxs)("div", {
                              className: rS.gd,
                              children: [
                                  (0, a.jsx)(ee.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: N.intl.string(A.default.FbRbeM),
                                      loading: "link" === p,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lK.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: N.intl.string(A.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(Y.E, {
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
var r_ = n(29073);
function rT(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(em.D, {
        className: W()(l5.uK, { [l5.ue]: l, [l5.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": N.intl.formatToPlainString(c ? A.default["2p6UFz"] : A.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: l5.dy, children: (0, a.jsx)(lG.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: l5.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l5.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l5.l8,
                        children: (0, a.jsx)(Y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l5.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(Y.E, {
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
                ? (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: l5.rM,
                      children: N.intl.string(A.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rP(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return lZ(n)
        ? (0, a.jsx)(rI, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rT,
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
let rR = [],
    rL = [];
function r$(e) {
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
        className: W()(l5.Ge, l5.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l5.aK,
                      children: N.intl.string(A.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(rP, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: l1(o, u),
            }),
            lZ(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: l5.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l5.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lB.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: W()(l5.Pu, l5.es), children: c }),
                      ],
                  }),
        ],
    });
}
function rD(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [f, m] = i.useState({}),
        [h, p] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(0),
        [w, S] = i.useState(null),
        [C, E] = i.useState(null),
        [I, M] = i.useState(null),
        [_, T] = i.useState(!1),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        O = null == r,
        z = l.questions.length,
        F = Math.min(y, z - 1),
        U = l.questions[F],
        [q, G] = i.useState({ id: U.id, expanded: !1 }),
        B = q.id === U.id && q.expanded,
        [H, K] = i.useState(null),
        V = c[U.id] ?? "",
        J = !0 === U.multi_select,
        X = lZ(U),
        Q = J ? (f[U.id] ?? rR) : ((t = o[U.id]), t?.kind === "option" ? [t.optionId] : l0),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = N.intl.string(A.default.wTsP5l),
                d = i.useCallback((e) => l[e] ?? null, [l]),
                f = i.useCallback(
                    (e) => null != l[e.id] && (!0 === e.multi_select ? !0 === o[e.id] : t[e.id]?.kind === "image"),
                    [t, l, o],
                ),
                m = i.useCallback(
                    (e) => {
                        let t = l[e.id];
                        return null != t && !0 === o[e.id] ? { attachment: t.attachment, text: c } : void 0;
                    },
                    [c, l, o],
                ),
                h = i.useCallback(
                    (i, o) => {
                        let d = i.id,
                            m = !0 === i.multi_select,
                            h = l[d] ?? null;
                        if (o) return l1(h, f(i));
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
                                m ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === v ? { ...e, [d]: x(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: f(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (m ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: x(h) })));
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
                                                error: { source: "upload", text: N.intl.string(A.default["kUw/b1"]) },
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
                                                        : N.intl.string(A.default.l79PMc),
                                            },
                                        }),
                                        !1
                                    ),
                                )
                            ),
                        };
                    },
                    [c, t, l, e, f, n, a],
                );
            return { imageFor: d, selectedFor: f, multiPartFor: m, controlsFor: h };
        })(n, o, u),
        en = Z.imageFor(U.id),
        el = Z.selectedFor(U),
        { text: er, phase: ea } = (0, eL.Q)(U.question),
        ei = er === U.question,
        es = ei && H?.id === U.id && H.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            K((t) => (t?.id === U.id && t.truncated === e ? t : { id: U.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, U.id, B]);
    let eo = N.intl.string(B ? N.t.iTcuma : N.t.dcl9MQ),
        eu = i.useCallback(
            (e) => {
                if (null == r) return;
                let t = l.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                if ("" !== t) {
                    let n;
                    r(
                        t,
                        (n = l.questions.flatMap((t) => {
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
                            ? { clarification_id: l.id, answers: n }
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
                }
            },
            [l, r],
        ),
        ec = i.useCallback(
            (e, t) => {
                D.current += 1;
                let n = D.current;
                (S({ direction: t, moves: n }),
                    E({ question: U, draft: V, selected: Q, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    T(!0),
                    k(e));
            },
            [V, en, el, U, Q],
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
    let ef = w?.moves;
    i.useEffect(() => {
        if (null == ef) return;
        let e = setTimeout(() => E(null), 400),
            t = setTimeout(() => T(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [ef]);
    let eh = i.useCallback(
            (e) => {
                if (O) return;
                let t = { ...o, [U.id]: e };
                u(t);
                let n =
                    F < l.questions.length - 1
                        ? F + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, F);
                null == n ? eu(t) : ec(n, n < F ? "back" : "forward");
            },
            [o, l, O, F, U.id, eu, ec],
        ),
        eg = i.useCallback(() => {
            O || 0 === F || ec(F - 1, "back");
        }, [O, F, ec]),
        ep = F > 0 && !O,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [U.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                X ? O || u((e) => ({ ...e, [U.id]: t })) : eh(t);
            },
            [O, X, U.id, eh],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return J
                ? ((e = ev(U)),
                  (t = V.trim()),
                  (n = U.options.filter((e) => Q.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Q,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [V, J, ev, U, Q]),
        eb = h[U.id] ?? rL,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != U.input
                ? ((e = U.input),
                  (t = x[U.id]),
                  (n = V.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(lJ[e]) ? t.name : `${lJ[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [V, x, eb, U.id, U.input]),
        ek = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [U.id]: e })), v((e) => ({ ...e, [U.id]: t })));
            },
            [U.id],
        ),
        ew = i.useCallback(() => b(!0), []),
        eA = i.useCallback(() => b(!1), []),
        eN = Z.controlsFor(U, O),
        eS = i.useCallback(() => {
            if (null != ey) {
                "" !== ey.text && eh(ey);
                return;
            }
            if (null != ej) {
                "" !== ej.text && eh(ej);
                return;
            }
            let e = V.trim();
            "" !== e && eh({ kind: "custom", text: e });
        }, [V, ej, ey, eh]),
        [eC, eE] = i.useState(!1),
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
    let eT = i.useCallback(() => {
            null != s && (eM(!0), setTimeout(s, 150));
        }, [s]),
        eR = i.useMemo(
            () =>
                null != ey
                    ? "" !== ey.text
                        ? ey
                        : null
                    : null != ej
                      ? "" !== ej.text
                          ? ej
                          : null
                      : "" !== V.trim()
                        ? { kind: "custom", text: V.trim() }
                        : (o[U.id] ?? null),
            [o, V, ej, ey, U.id],
        ),
        e$ = null != eR && !O,
        eD = F === z - 1,
        eO = i.useCallback(() => {
            null == eR || O || eh(eR);
        }, [O, eR, eh]),
        ez = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, n0.vq)(e.target, HTMLTextAreaElement) ||
                    (0, n0.vq)(e.target, HTMLInputElement) ||
                    ((!(0, n0.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && e$ && (e.preventDefault(), eO())));
            },
            [ep, e$, eg, eO],
        ),
        eF = X
            ? null
            : (0, a.jsxs)("div", {
                  className: l5.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: l5.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lB.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lH.y, {
                          value: V,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [U.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eS());
                          },
                          placeholder: N.intl.string(A.default["tOC+tn"]),
                          "aria-label": N.intl.formatToPlainString(A.default["4JeYPB"], { question: U.question }),
                          disabled: O,
                          rows: 1,
                          className: l5.Pu,
                          "data-conjure-clarification-other": U.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: W()(l5.$O, { [l5.fI]: eC && !eI, [l5.Oh]: eI }),
        role: "dialog",
        "aria-label": U.question,
        "data-conjure-clarification": l.id,
        "data-state": O ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !_ ? "true" : void 0,
        "data-step": F,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: l5.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": _ ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: P,
                        className: l5.wx,
                        children: [
                            (0, a.jsx)(Y.E, {
                                ref: L,
                                tag: "span",
                                id: `${U.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: W()(r_.TK, l5.R_, { [l5.TB]: "exit" === ea, [l5.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: r_.Q7,
                                      children: (0, a.jsx)(eP.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tr.K, {
                                              icon: B ? e_.t : n5.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => G({ id: U.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${U.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(em.D, {
                                      className: W()(r_.gb, r_.Q7),
                                      onClick: eT,
                                      "aria-label": N.intl.string(A.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(et.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: l5.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: l5.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: l5.Ge,
                                    role: "group",
                                    "aria-labelledby": `${U.id}-label`,
                                    "data-direction": w?.direction,
                                    "data-parity": null == w ? void 0 : w.moves % 2,
                                    children: [
                                        J
                                            ? (0, a.jsx)(Y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l5.aK,
                                                  children: N.intl.string(A.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rP, {
                                            projectId: n,
                                            question: U,
                                            selected: Q,
                                            disabled: O,
                                            onPick: (e) =>
                                                J
                                                    ? m((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [U.id]:
                                                                  ((n = t[U.id] ?? rR),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  U.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eN,
                                        }),
                                        null != U.input
                                            ? (0, a.jsx)(rn, {
                                                  projectId: n,
                                                  question: U,
                                                  value: eb,
                                                  disabled: O,
                                                  onChange: ek,
                                                  onFocus: ew,
                                                  onBlur: eA,
                                                  fallback: !1 === U.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === U.allow_custom ? null : eF,
                                    ],
                                }),
                                null == C
                                    ? null
                                    : (0, a.jsx)(
                                          r$,
                                          {
                                              projectId: n,
                                              question: C.question,
                                              draft: C.draft,
                                              selected: C.selected,
                                              ownImage: C.ownImage,
                                              ownSelected: C.ownSelected,
                                              direction: C.direction,
                                              disabled: O,
                                          },
                                          C.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            z > 1 || J || X || null != U.input
                ? (0, a.jsxs)("div", {
                      className: r_.qr,
                      children: [
                          (0, a.jsx)(Y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  z > 1
                                      ? N.intl.formatToPlainString(A.default.yzYUjq, { index: F + 1, total: z })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: r_.zt,
                              children: [
                                  ep
                                      ? (0, a.jsx)(lK.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: N.intl.string(A.default.Pk5lfA),
                                            onClick: eg,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(ee.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: N.intl.string(eD ? N.t.geKm7t : A.default.w1nRmT),
                                      disabled: !e$,
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
var rO = n(557744),
    rz = n(223347),
    rF = n(572253),
    rU = n(411236);
function rq(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : N.intl.string(A.default.XuOf5s);
    return (0, a.jsx)(rF.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: !0,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: i, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(ee.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: i,
                disabled: !n,
                text: N.intl.string(A.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: rU.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Y.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: N.intl.string(A.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: rU.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: W()(r_.nd, r_.jx),
                      "aria-label": N.intl.string(A.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: r_.wx,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: r_.TK,
                                      children: N.intl.string(A.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(em.D, {
                                      className: W()(r_.gb, r_.Q7),
                                      onClick: l,
                                      "aria-label": N.intl.string(A.default["iq+Pte"]),
                                      children: (0, a.jsx)(et.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: rU.DQ,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: r,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: r_.qr,
                              children: (0, a.jsx)("div", { className: r_.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var rG = n(874421),
    rB = n(404373),
    rH = n(435558),
    rK = n.n(rH);
let rV = "VibegrationsComposerDrafts";
function rW() {
    return tB.w.get(rV) ?? {};
}
let rJ = new Map(),
    rX = rK().throttle(() => {
        if (0 === rJ.size) return;
        let e = rW();
        for (let [t, n] of rJ) "" === n ? delete e[t] : (e[t] = n);
        (rJ.clear(), tB.w.set(rV, e));
    }, 1e3);
class rY extends s.Ay.Store {
    getDraft(e) {
        let t = rJ.get(e);
        return null != t ? t : (rW()[e] ?? "");
    }
}
let rQ = new rY(lx.h, {
    LOGOUT: function () {
        return (rJ.clear(), rX.cancel(), tB.w.remove(rV), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rJ.set(t, n), rX(), "" === n && rX.flush(), !1);
    },
});
function rZ(e) {
    return "" !== rQ.getDraft(e).trim();
}
var r0 = n(29080),
    r1 = n(46054),
    r2 = n(615839);
function r3(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : N.intl.string(A.default.KcFvbo);
}
function r4(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, ly.B4)(r),
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
        f = u.filter((e) => e !== d),
        m = f.filter((e) => "message" === e.type).at(-1),
        h = !i && !s && "" !== a.trim();
    return {
        streamed: f,
        lastStreamedMessage: m,
        replyKey: d?.key,
        showsClosingMessage: h,
        closingContent: h ? a.trim() : "",
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, ly.Lf)(r) }),
    };
}
(n(134528), n(947204));
var r7 = n(62617);
let r6 = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    r5 = {
        snail: () => A.default.ABeVsS,
        goat: () => A.default.dhXay8,
        frog: () => A.default.SHeweG,
        bunny: () => A.default.FytFE1,
        cat: () => A.default["5c+sHs"],
        caterpillar: () => A.default["/FYcne"],
        butterfly: () => A.default["Ib/AxK"],
        dog: () => A.default.zDjBR1,
        spider: () => A.default["6sxyrN"],
        bee: () => A.default.cVtefg,
        bot: () => A.default.MjCw0v,
    },
    r8 = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        goat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        frog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        bunny: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        cat: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-pink-40)",
        },
        caterpillar: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-green-40)",
        },
        butterfly: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
        dog: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        spider: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-orange-40)",
        },
        bee: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-yellow-40)",
        },
        bot: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, r7.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, r7.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function r9(e) {
    return { ...r8[e], name: N.intl.string(r5[e]()) };
}
function ae(e) {
    return r6.includes(e) ? r9(e) : void 0;
}
function at(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % r6.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, r6[(t + n) % r6.length]);
            }),
            l
        );
    })(e))
        t.set(n, r9(l));
    return t;
}
var an = n(60160),
    al = n(16634);
function ar(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ly.SY)(n.steps),
        d = u
            ? null != c
                ? (0, ly.WQ)(c)
                : r3(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(r3(e));
                  switch (e.status) {
                      case "failed":
                          return N.intl.formatToPlainString(A.default.YrVgOf, { task: t });
                      case "cancelled":
                          return N.intl.formatToPlainString(A.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return N.intl.formatToPlainString(A.default["++9woZ"], {
                                  task: t,
                                  duration: (0, r2.MB)(e.durationMs),
                              });
                          return N.intl.formatToPlainString(A.default.nmI9Uh, { task: t });
                      default:
                          return N.intl.formatToPlainString(A.default.nmI9Uh, { task: t });
                  }
              })(o),
        f = u ? c : void 0,
        m =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== f || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: lF.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            al.A,
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
                                      className: lF.iq,
                                      children: (0, a.jsx)(an.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lS.A, {
        glyph: (0, a.jsx)(lC.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: r3(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lF.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: d,
        live: u,
        settled: !u,
        tint: r,
        detail: m,
        connected: !0,
        connectsDown: s,
    });
}
var aa = n(998445),
    ai = n(643210),
    as = n(648127),
    ao = n(372795),
    au = n(163897);
let ac = "conjure-browser-viewer";
function ad(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, s.yK)(
            [ai.A],
            () =>
                n.flatMap((e) => {
                    let n = ai.A.getTab(t, e);
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
        className: au.kR,
        "aria-label": N.intl.string(A.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(af, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function af(e) {
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
        u = (0, tb.useHasModalOpen)(ac),
        [c, d] = i.useState(!1),
        f = i.useCallback((e, t) => d(t), []),
        { ended: m } = l,
        h = (0, as.i)(l.session);
    return (0, a.jsxs)(em.D, {
        innerRef: s,
        className: W()(au.Nr, m && au.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tb.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: ac },
                )
            );
        },
        "aria-label": N.intl.formatToPlainString(A.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: au.Gt,
                children: [
                    (0, a.jsx)(ao.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || m,
                        className: au.Ji,
                        "aria-label": N.intl.formatToPlainString(A.default.rnwqXb, { name: h }),
                        onStateChange: f,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: au.qf,
                              children: (0, a.jsx)(aa.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    m
                        ? (0, a.jsx)("div", {
                              className: au.HS,
                              children: (0, a.jsx)(Y.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: N.intl.string(A.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: au.pG,
                children: [
                    (0, a.jsx)("span", { className: W()(au.W9, m && au.oM) }),
                    (0, a.jsx)(Y.E, {
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
var am = n(268409);
let ah = new WeakMap(),
    ag = new WeakMap();
function ap(e) {
    let { projectId: t, steps: n, tree: l, segment: r } = e,
        o = i.useMemo(
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
        u = (0, s.yK)(
            [e1.A],
            () => {
                if (0 === o.length) return o;
                let e = (function (e) {
                    let t = ah.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ag.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ag.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ah.set(e, n), n);
                })(e1.A.getMessages(t));
                return o.filter((t) => e.get(t) === n);
            },
            [o, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: am.h, children: (0, a.jsx)(ad, { projectId: t, sessionIds: u }) });
}
var ax = n(469393);
function av(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, nE.lG)(t.authored_at);
    return (0, a.jsx)(lI, {
        title: N.intl.string(A.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ax.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ax.z,
                    children: [
                        (0, a.jsx)(Y.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(ee.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(A.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var aj = n(323384),
    ab = n(983851),
    ay = n(794083),
    ak = n(687966),
    aw = n(632015),
    aA = n(231483),
    aN = n(430392),
    aS = n(633018),
    aC = n(885574);
let aE = {
    [n_.q7.APP_CHANNEL]: A.default.zrk93C,
    [n_.q7.VOICE_CHANNEL]: A.default.r5Ra0p,
    [n_.q7.ACTIVITY]: N.t.IC5Ann,
    [n_.q7.OVERLAY]: A.default.liTNf3,
    [n_.q7.PROFILE_WIDGET]: A.default["EswAi+"],
    [n_.q7.AUTOMOD]: A.default.DnWMLj,
    [n_.q7.BOT]: A.default.VFWfz1,
    [n_.q7.APPLICATION_COMMANDS]: A.default.w7JaEP,
};
function aI(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aM = {
        [n_.q7.APP_CHANNEL]: A.default["3/aHX6"],
        [n_.q7.VOICE_CHANNEL]: A.default["3/aHX6"],
        [n_.q7.ACTIVITY]: A.default["3/aHX6"],
        [n_.q7.OVERLAY]: A.default["rPpf5/"],
        [n_.q7.PROFILE_WIDGET]: null,
        [n_.q7.AUTOMOD]: null,
        [n_.q7.BOT]: null,
        [n_.q7.APPLICATION_COMMANDS]: null,
    },
    a_ = [n_.q7.OVERLAY, n_.q7.ACTIVITY, n_.q7.APP_CHANNEL, n_.q7.VOICE_CHANNEL];
var aT = n(176999),
    aP = (((l = {}).IMAGE = "image"), l),
    aR = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aL = n(773669);
let a$ = [],
    aD = {};
function aO(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function az(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aP.IMAGE,
        visibility: aR.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aF = n(127258),
    aU = n(587895),
    aq = n(320095),
    aG = n(963852),
    aB = n(95701),
    aH = n(889227),
    aK = n(155718);
let aV = ["command", "user_command", "message_command", "message"],
    aW = new Set([aK.kc.CHAT, aK.kc.USER, aK.kc.MESSAGE]);
function aJ(e) {
    return e.type ?? aK.kc.CHAT;
}
function aX(e) {
    return "launch" !== e.kind && aW.has(aJ(e));
}
function aY(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aQ(e, t) {
    let n = aV.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aY(e)), ...n.filter(aY)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aY(r) || l.push(r);
    }
    return aV.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let aZ = new aB.nA({ id: "1337", guild_id: "1337", type: eJ.rbe.GUILD_TEXT, name: "preview" });
function a0(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, s.bG)([eZ.default], () => eZ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e2.nj)(new aH.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let a1 = /^@\S+/;
var a2 = n(628284),
    a3 = n(97808),
    a4 = n(778712),
    a7 = n(809115),
    a6 = n(486020),
    a5 = n(200700);
let a8 = {
        alert: { label: () => N.intl.string(A.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => N.intl.string(A.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => N.intl.string(A.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => N.intl.string(A.default.RGzFNK), blockedStyle: !1 },
    },
    a9 = {
        blocked: { label: () => N.intl.string(A.default.YdnZ8q), tone: "red" },
        alert: { label: () => N.intl.string(A.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => N.intl.string(A.default.RGzFNK), tone: "green" },
    },
    ie = ["blocked", "alert", "allowed"],
    it = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var il = n(984097),
    ir = n(13673);
let ia = { blocked: aA.ShieldIcon, alert: e5.BellIcon, allowed: a2.y },
    ii = {
        blurple: { text: "text-brand", icon: er.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: er.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: er.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function is(e) {
    var t, n;
    let l,
        r,
        { example: i } = e,
        s =
            "" ===
            (r = [
                "timeout" !== (t = i).outcome || null == t.timeout_seconds
                    ? null
                    : N.intl.formatToPlainString(N.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, a5.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? N.intl.formatToPlainString(N.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? N.intl.formatToPlainString(N.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? N.intl.formatToPlainString(N.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? N.intl.formatToPlainString(N.t.opVZ9q, { mins: n / 60 })
                                          : N.intl.formatToPlainString(N.t["4zv/jq"], { secs: n })),
                      }),
                i.reason,
            ]
                .filter((e) => null != e && "" !== e)
                .join(" "))
                ? null
                : r;
    return null == s
        ? null
        : (0, a.jsx)(Y.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: s,
          });
}
function io(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = a8[n.outcome];
    return (0, a.jsxs)("li", {
        className: W()(il.nM, { [W()(il.HV, ir.DX)]: r }),
        children: [
            (0, a.jsx)(eK.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: il.my,
                children: (0, a.jsx)(a3.eu, {
                    src: (0, a6.AE)(void 0, void 0),
                    size: a4._3.SIZE_24,
                    "aria-label": N.intl.string(A.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: il.fw,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), r1.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(is, { example: n }),
                ],
            }),
        ],
    });
}
function iu(e) {
    let { group: t } = e,
        n = i.useId(),
        l = a9[t.section],
        r = ia[t.section],
        s = ii[l.tone];
    return (0, a.jsxs)("div", {
        className: il.uW,
        children: [
            (0, a.jsxs)("div", {
                className: il.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(Y.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: il.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: il.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(io, { example: e }, t)),
            }),
        ],
    });
}
function ic() {
    let { avatarSrc: e, eventHandlers: t } = (0, a7.a)(!0);
    return (0, a.jsx)("span", {
        className: il.Gy,
        ...t,
        children: (0, a.jsx)(a3.eu, { src: e, size: a4._3.SIZE_16, "aria-label": N.intl.string(N.t.hG1StD) }),
    });
}
function id(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: il.K1,
        children: ((t = n.examples),
        ie
            .map((e) => ({ section: e, examples: t.filter((t) => it[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(iu, { group: e }, e.section)),
    });
}
var im = n(460905),
    ih = n(110384),
    ig = n(763754),
    ip = n(217424),
    ix = n(194085),
    iv = n(20851),
    ij = n(692508),
    ib = n(798819);
function iy(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: W()(ib.item, ib.labelContainer, ib.colorDefault, {
            [ib.focused]: !0 === t.highlighted,
            [ib.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: ib.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: ib.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: W()(ib.label, ij.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: ib.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: ib.icon }),
                  })
                : null,
        ],
    });
}
function ik(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: W()(t, ij.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: N.intl.string(N.t["5IEsGx"]), icon: ih.W, muted: !0 }
                : { label: N.intl.string(N.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: W()(ib.menu, ij.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ib.scroller,
            children: [
                (0, a.jsx)(iy, { item: s }),
                (0, a.jsx)("div", { className: ib.separator }),
                (0, a.jsx)(iy, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iw = n(381941);
function iA() {}
function iN(e) {
    let t,
        n,
        l,
        r,
        o,
        u,
        c,
        d,
        f,
        m,
        h,
        { projectId: g, exchanges: p } = e,
        {
            items: x,
            botIcon: v,
            appIconSrc: j,
        } = ((t = (0, s.bG)([eZ.default], () => eZ.default.getCurrentUser())),
        (n = (0, s.bG)([G.Ay], () => G.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, s.bG)([aU.A], () => aU.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (o = n?.name ?? N.intl.string(A.default.JEYq8M)),
        (u = (0, s.bG)([eZ.default], () => (null != l ? eZ.default.getUser(l) : void 0), [l])),
        (d = a0("31337", o, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : d),
        (m = a0("31338", N.intl.string(A.default["9iAOsw"]), { discriminator: "0003" })),
        (h = a0("31339", (0, e0.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == h || null == f || null == m
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
                                      i = (0, aq.rh)({
                                          ...(0, aG.Ay)({
                                              channelId: aZ.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eJ.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eJ.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aF.G.APPLICATION_COMMAND,
                                                        user: (0, aG.Vi)(s),
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
                                              messageType: eJ.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eJ.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(a1, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              p,
                              { bot: f, currentUser: t, viewer: h, member: m },
                              {
                                  targetMessage: N.intl.string(A.default["y+QYes"]),
                                  memberMessage: N.intl.string(A.default.BUTRDc),
                              },
                          ),
                [p, f, t, h, m],
            ),
            botIcon: r,
            appIconSrc: r ?? f?.getAvatarURL(void 0, 80),
        });
    return 0 === x.length
        ? null
        : (0, a.jsx)("ol", {
              className: W()(ij.TE, `group-spacing-${iw.ES}`),
              children: x.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? ij.Rz : void 0,
                          children: [
                              (0, a.jsx)(iv.A, {
                                  message: n,
                                  channel: aZ,
                                  author: (0, ig.FT)(n.author, aZ),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(ip.A, { message: n, channel: aZ }) : void 0,
                                  usernameClassName: r?.target === "user" ? ij.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: ij.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(ix.Ay, {
                                            children: [
                                                (0, a.jsx)(ix.qv, {
                                                    label: N.intl.string(N.t.lfIHs4),
                                                    icon: im.n,
                                                    onClick: iA,
                                                }),
                                                (0, a.jsx)(ix.qv, {
                                                    label: N.intl.string(N.t["5IEsGx"]),
                                                    icon: ih.W,
                                                    onClick: iA,
                                                }),
                                                (0, a.jsx)(ix.qv, {
                                                    label: N.intl.string(N.t["UKOtz+"]),
                                                    icon: ta.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: iA,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? ij.ET : ij.je,
                                        inert: !0,
                                        children: (0, a.jsx)(ik, {
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
          });
}
var iS = n(633075),
    iC = n(946356),
    iE = n(58216),
    iI = n(27399);
function iM(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, s.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        r = i.useMemo(() => new iS.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iI.H,
              children: (0, a.jsx)(iC.A.Overlay, {
                  className: iI.w,
                  children: (0, a.jsx)(iE.A, {
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
var i_ = n(443863);
let iT = {
    [n_.q7.APP_CHANNEL]: aj.k,
    [n_.q7.VOICE_CHANNEL]: ab.H,
    [n_.q7.ACTIVITY]: ay.b,
    [n_.q7.OVERLAY]: ak.GameControllerIcon,
    [n_.q7.PROFILE_WIDGET]: aw.f,
    [n_.q7.AUTOMOD]: aA.ShieldIcon,
    [n_.q7.BOT]: aN.RobotIcon,
    [n_.q7.APPLICATION_COMMANDS]: aS.k,
};
function iP(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: i_.uW,
        children: [
            (0, a.jsxs)("span", {
                className: i_.a9,
                children: [
                    n,
                    (0, a.jsx)(Y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            r,
        ],
    });
}
function iR(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(eP.m, {
        text: t,
        children: (0, a.jsx)(em.D, {
            className: i_.bk,
            "aria-label": n,
            children: (0, a.jsx)(aC.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function iL(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(iP, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: i_.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: i_.jw,
                              children: (0, a.jsx)(Y.E, {
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
function i$(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: i_.K2,
        children: t
            .filter((e) => e in iT)
            .map((e) => {
                let t = iT[e];
                return (0, a.jsxs)(
                    "span",
                    {
                        className: i_.L6,
                        children: [
                            (0, a.jsx)(t, {
                                size: "custom",
                                width: 16,
                                height: 16,
                                color: "currentColor",
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                tag: "span",
                                children: N.intl.string(aE[e]),
                            }),
                        ],
                    },
                    e,
                );
            }),
    });
}
function iD(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = rN(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, ru.R)({
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
        : (0, a.jsx)(iP, {
              label: N.intl.string(A.default.X15LLY),
              info: (0, a.jsx)(iR, { text: N.intl.string(A.default.nR4B8P), label: N.intl.string(A.default.nc0SNY) }),
              children: (0, a.jsx)(em.D, {
                  className: i_.xX,
                  onClick: c,
                  "aria-label": N.intl.string(A.default.TvAPIm),
                  children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: i_.sN, onError: u }) : null,
              }),
          });
}
function iO(e) {
    let t,
        n,
        l,
        r,
        { projectId: o, proposal: u, version: c, onApprove: d } = e,
        f = aI(u, n_.q7.AUTOMOD) ? u.automod : null,
        { botExchanges: m } =
            ((t = aI(u, n_.q7.APPLICATION_COMMANDS)),
            (n =
                aI(u, n_.q7.BOT) || t
                    ? null != u.bot
                        ? u.bot.interaction
                        : t && u.commands.some(aX)
                          ? "commands"
                          : null
                    : null),
            (l = i.useMemo(
                () =>
                    null == n
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
                              let s = e.commands.filter(aX).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (aJ(e)) {
                                              case aK.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case aK.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(aY),
                                  u = a.length > 0 ? aQ([...a, ...o], !0) : aQ("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(u, n, {
                              message: N.intl.string(A.default.J7qggf),
                              reply: N.intl.string(A.default.nqYtiy),
                              event: N.intl.string(A.default["05lU9W"]),
                          }),
                [u, n],
            )),
            { botInteraction: n, botExchanges: l }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, s.bG)([aL.default], () => aL.default.locale),
                a = (0, s.bG)([G.Ay], () => {
                    let t = G.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                o = (function (e, t) {
                    let [n, l] = i.useState(aD);
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
                })(e, l?.images),
                u = i.useMemo(
                    () =>
                        null == n || null == l
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
                                                          ...aO(n),
                                                          ...(null != n.fallback ? { fallback: aO(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aT.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[nz.m.WIDGET_TOP] || null == i[nz.m.WIDGET_BOTTOM]
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
                                                                    type: aT.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aT.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aT.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(az),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: a$,
                                            },
                                        };
                              })(n, l, o, r),
                    [n, l, o, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(o, u),
        p = aI(u, n_.q7.PROFILE_WIDGET) ? h : null,
        x = c?.superseded === !0,
        v = u.what_changed?.trim() ?? "";
    return (0, a.jsxs)(lT, {
        title:
            x && null != c
                ? N.intl.formatToPlainString(A.default.YZ3qJs, { version: c.version })
                : N.intl.string(A.default["3b6e7o"]),
        meta: x
            ? (0, a.jsx)(l_, { children: N.intl.string(A.default.hF2c41) })
            : (0, a.jsx)(i$, { tags: u.supported_surfaces ?? [] }),
        superseded: x,
        showLabel: N.intl.string(A.default.yD8EJS),
        hideLabel: N.intl.string(A.default.nSPGNb),
        bodyClassName: i_.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== v
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(A.default.iNS4dl),
                      children: (0, a.jsx)(Y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: v,
                      }),
                  })
                : null,
            (0, a.jsx)(Y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: u.summary,
            }),
            null != f && f.examples.length > 0
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(A.default.z4ZKYG),
                      icon: (0, a.jsx)(ic, {}),
                      info: (0, a.jsx)(iR, {
                          text: N.intl.string(A.default.bo4MOx),
                          label: N.intl.string(A.default.VPLNot),
                      }),
                      children: (0, a.jsx)(id, { automod: f }),
                  })
                : null,
            null != u.design_image
                ? (0, a.jsx)(iD, {
                      projectId: o,
                      design: u.design_image,
                      alt: N.intl.string(null == (r = a_.find((e) => aI(u, e))) ? A.default["3/aHX6"] : aM[r]),
                  })
                : null,
            m.length > 0
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(A.default.sA1lTv),
                      info: (0, a.jsx)(iR, {
                          text: N.intl.string(A.default.NnmbJu),
                          label: N.intl.string(A.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(iN, { projectId: o, exchanges: m }),
                  })
                : null,
            null != p
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(A.default.ove4zH),
                      info: (0, a.jsx)(iR, {
                          text: N.intl.string(A.default.XcIrHx),
                          label: N.intl.string(A.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(iM, { ...p }),
                  })
                : null,
            u.changes.length > 0
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(A.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: i_.p_,
                          children: u.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: i_.Aw,
                                      children: (0, a.jsx)(Y.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: e,
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            u.commands.length > 0
                ? (0, a.jsx)(iP, {
                      label: N.intl.string(N.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: i_.p_,
                          children: u.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: i_.uX,
                                      children: [
                                          (0, a.jsxs)(Y.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: [
                                                  "launch" === e.kind || 4 === e.type
                                                      ? "\u21EA /"
                                                      : 2 === e.type || 3 === e.type
                                                        ? ""
                                                        : "/",
                                                  e.name,
                                              ],
                                          }),
                                          (0, a.jsx)(Y.E, {
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
            (0, a.jsx)(iL, { label: N.intl.string(A.default["2UbW6r"]), names: u.bot_permissions ?? [] }),
            (0, a.jsx)(iL, { label: N.intl.string(A.default["7TKfpj"]), names: u.privileged_intents ?? [] }),
            null == d || x
                ? null
                : (0, a.jsxs)("div", {
                      className: i_.o1,
                      children: [
                          (0, a.jsx)(ee.$, {
                              variant: "primary",
                              size: "sm",
                              text: N.intl.string(A.default["6S+wRM"]),
                              onClick: d,
                          }),
                          (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: N.intl.string(A.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
function iz(e) {
    return null != e && e.status?.state === "unpublished";
}
let iF = new WeakMap();
function iU(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, s.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tj.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tj.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(ee.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(tj.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(Y.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: N.intl.string(A.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(F.Ay, { guild: l, size: F.Ay.Sizes.SMOL }),
                              (0, a.jsx)(Y.E, {
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
function iq(e) {
    let { projectId: t } = e,
        n = (0, tm.Ay)(t);
    return null != n && iz(n) ? (0, a.jsx)(iU, { publish: n }) : null;
}
var iG = n(989271);
function iB(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(em.D, {
        className: W()(iG.nM, { [iG.f1]: s, [iG.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": N.intl.formatToPlainString(A.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: iG.jo,
                children: [
                    n
                        ? (0, a.jsx)(t5.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iG.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: iG.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(Y.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function iH(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(lI, {
        title: N.intl.string(A.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                iB,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function iK(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(tj.B, {
        align: "start",
        "data-conjure-ideas-offer": !0,
        children: (0, a.jsx)(ee.$, {
            variant: "secondary",
            size: "sm",
            disabled: null == t,
            onClick: t,
            text: N.intl.string(A.default["U/bLzU"]),
        }),
    });
}
var iV = n(530557),
    iW = n(872162);
function iJ(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var iX = n(202723);
function iY(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tb.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: iV.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => iJ(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(iJ(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        f = W()(iX.Lo, { [iX.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: f,
                  children: (0, a.jsx)(Y.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: N.intl.string(A.default.CTxtdV),
                  }),
              },
              s,
          )
        : "inactive" === s
          ? (0, a.jsxs)(
                "article",
                {
                    className: f,
                    children: [
                        (0, a.jsx)(Y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: N.intl.string(A.default.HCQvpO),
                        }),
                        (0, a.jsx)(iW.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: iX.Lo,
                      children: (0, a.jsx)(iW.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                  },
                  s,
              )
            : "received" === s
              ? (0, a.jsxs)(
                    "article",
                    {
                        className: f,
                        children: [
                            (0, a.jsxs)("div", {
                                className: iX.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: iX.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(a2.y, {
                                            size: "xs",
                                            color: er.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Y.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: N.intl.string(A.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(iW.C, { label: N.intl.string(A.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: iX.Lo,
                    children: [
                        (0, a.jsx)(Y.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: N.intl.string(null != o ? A.default.O0QIqj : A.default.HCQvpO),
                        }),
                        (0, a.jsx)(Y.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : N.intl.string(A.default.MPGSHL),
                        }),
                        (0, a.jsx)(iW.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: iX.sq,
                            children: (0, a.jsx)(ee.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: N.intl.string(A.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var iQ = n(919790),
    iZ = n(971824),
    i0 = n(162052),
    i1 = n(165648);
function i2(e) {
    let t = at(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? ae(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: r3(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function i3(e) {
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
            segment: f,
            hostsChecklist: m = !0,
            reportsDuration: h = !0,
            closed: g = !1,
            segmentDurationMs: p,
        } = e,
        x = i.useMemo(() => (0, ly.Jf)(n, l), [n, l]),
        v = i.useMemo(
            () =>
                null == f
                    ? x
                    : {
                          ...x,
                          steps: x.steps.filter((e) => e.segment === f),
                          tasks: x.tasks.filter((e) => e.task.segment === f),
                      },
            [x, f],
        );
    if (u)
        return (0, a.jsx)("ol", {
            className: lF.pj,
            "data-live": !1,
            children: (0, a.jsx)(lS.A, {
                glyph: (0, a.jsx)(r0.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: N.intl.string(A.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, ly.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = at(k.map((e) => e.taskId)),
        S = !g && (l || k.some((e) => "running" === e.task.status)),
        C = i2(k);
    return (0, a.jsxs)("ol", {
        className: lF.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(lA.Ay, {
                projectId: t,
                steps: v.steps,
                fallbackLabel: k.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                live: l,
                closed: g,
                durationMs: j,
                connectsDown: k.length > 0,
                tier: x.turn?.tier,
            }),
            k.map((e, n) => {
                let l = null != e.task.helperMark ? ae(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          ar,
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
            (0, a.jsx)(ap, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: lF.YO,
                      children: (0, a.jsx)(lO, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function i4(e) {
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
            secretRequestAwaiting: f,
            secretRequestStatus: m = "open",
            settingsRequest: h,
            publishCta: g,
            onPickIdea: p,
            pickedIdeaIds: x,
            onApprovePlan: v,
            sideReply: j = !1,
            sideReplyAcknowledges: b,
            hoistedProse: y = !1,
            hoistedAttachmentsHost: k,
            restoreProposal: w,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => r4({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: M, closingContent: _ } = C,
        T = (y ? k : void 0) ?? C.attachmentsHost,
        P = M && !y,
        R = null == u ? null : (0, a.jsx)(iQ.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: lF.MT, children: R }),
        $ = j
            ? (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return N.intl.string(A.default.Mv5OmK);
                          case "queued":
                              return N.intl.string(A.default["Po/2mi"]);
                          case "restarting":
                              return N.intl.string(A.default.Vj0woh);
                          default:
                              return N.intl.string(A.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lF.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: lF.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lF.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: i1.PT,
                                          children: r1.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(iO, { projectId: t, proposal: r, version: s, onApprove: v })
                : P
                  ? (0, a.jsxs)("div", {
                        className: W()(lF.ky, i0.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: W()(i1.PT, lF.cW),
                                children: r1.A.parse(_, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: W()(lF.ky, i0.XR, { [iZ.O]: null != f && "open" === m }),
                      children: (0, a.jsx)(iY, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: m,
                          awaiting: "open" === m ? f : void 0,
                      }),
                  })
                : null,
            null != h
                ? (0, a.jsx)("div", {
                      className: W()(lF.ky, i0.XR),
                      children: (0, a.jsx)(rq, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != g ? (0, a.jsx)(iq, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(iH, { ideas: o, pickedIdeaIds: x, onPick: p }) : null,
            null != w ? (0, a.jsx)(av, { proposal: w, onRestore: S }) : null,
            P ? null : $,
        ],
    });
}
var i7 = n(146806),
    i6 = n(477262),
    i5 = n(432017),
    i8 = n(475358),
    i9 = n(717400),
    se = n(663341),
    st = n(559647),
    sn = n(775602),
    sl = n(234320),
    sr = n(285796),
    sa = n(922329);
async function si(e) {
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
var ss = n(153171);
function so(e, t, n, l) {
    let r = rg(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: rf++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (rp(e, t, [
            ...rg(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void rx(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    rx(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  rx(e, t, n.localId, { status: "error", errorText: N.intl.string(A.default.E7dS5n) }),
                              h.o2 - 3e5,
                          )
                        : rv(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        rx(e, t, n.localId, { status: "error", errorText: N.intl.string(A.default["kUw/b1"]) }));
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
                        errorText: N.intl.formatToPlainString(A.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, h.Oq)(e.size, t))
                return "image/png" === t && e.size <= h.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await si(e).catch(() => null);
                              return null != n && (0, h.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: ry(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: ry(t) } };
            let a = h.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function su(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = rm.useState((e) => rh(e, t, n)),
        a = i.useCallback((e) => so(t, n, e, l), [t, n, l]),
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
                null != (r = (l = rg(t, n)).find((t) => t.localId === e)) &&
                    (rj(t, r),
                    rp(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => rw(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function sc(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(sa.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: ss.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: ss.o1,
                onClick: () => n(t.localId),
                "aria-label": N.intl.string(A.default.Slam9g),
                children: (0, a.jsx)(sr.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var sd = n(497437);
let sf = [
        {
            id: "add-images-videos",
            label: A.default["51+9lc"],
            icon: i6.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: A.default["10ljr2"],
            icon: i5.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: A.default.aotDee, icon: eu.H, accept: "" },
    ],
    sm = "text-md/normal",
    sh = null;
function sg(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, o] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [f, m] = i.useState(0),
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
            (g(i + a), m(s));
            let o = s + i,
                d = Math.max(n, l.offsetWidth) + a + i,
                f = 0 === d ? 1 : s / d,
                h = 0 === d ? 1 : o / d;
            x({
                frontFrom: 1e3 * (0, i7._R)(f),
                frontTo: 1e3 * (0, i7._R)(h),
                backFrom: 1e3 * (0, i7.T)(f),
                backTo: 1e3 * (0, i7.T)(h),
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
    let S = "in" === b ? p.backFrom : p.frontFrom,
        C = "out" === b ? p.frontTo : p.backTo,
        E = (0, s.bG)([sn.Ay], () => sn.Ay.useReducedMotion),
        I = t === N.intl.string(A.default.Zc7gML),
        M = r === t && I;
    function _(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: W()(sd.VT, { [sd.qk]: l }),
            style: l
                ? {
                      insetInlineStart: f,
                      "--custom-cap-wipe-delay": `${S}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, C - S)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && v > 0 && null != b ? v % 2 : void 0,
            "data-wipe-kind": l ? (b ?? void 0) : void 0,
            children: (0, a.jsx)(i8.e, { shortcut: "tab", className: sd.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eb.o, {
                text: t,
                variant: sm,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: W()(sd.xM, { [sd.s2]: l }),
                onStart: w,
                onComplete: () => o(t),
            }),
            _(sd.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: sd.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Y.E, { variant: sm, tag: "span", children: t }),
            }),
            M
                ? (0, a.jsxs)("span", {
                      className: sd.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Y.E, { variant: sm, tag: "span", className: sd.xM, children: t }),
                          _(sd.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sp = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                stopped: l,
                running: r,
                restoring: o = !1,
                onSend: u,
                onInterrupt: c,
                onUploadFile: d,
                onApprove: f,
                onImport: m,
                suggestion: h,
                questionOpen: g = !1,
                hasPendingContext: p = !1,
                onDraftHasTextChange: x,
                modelSettings: v,
                onModelSettingsChange: j,
            } = e,
            [b, y] = i.useState(() => rQ.getDraft(t)),
            k = i.useCallback(
                (e) => {
                    (lx.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), y(e));
                },
                [t],
            ),
            w = "" !== b.trim();
        i.useEffect(() => x?.(w), [w, x]);
        let [S, C] = i.useState(t);
        S !== t && (C(t), y(rQ.getDraft(t)));
        let E = (0, s.bG)([sn.Ay], () => sn.Ay.isSubmitButtonEnabled),
            [I, M] = i.useState(!1);
        i.useEffect(() => {
            r || M(!1);
        }, [r]);
        let _ = i.useRef(null),
            {
                drafts: T,
                addFiles: P,
                pasteFiles: R,
                removeDraft: L,
                settled: $,
                takeRefs: D,
            } = su({ projectId: t, surface: "chat", onUploadFile: d }),
            O = "" !== b.trim() || T.length > 0 || p,
            z = n && O && $,
            [F, U] = i.useState(null);
        i.useEffect(() => {
            if (null == F) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => U(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [F]);
        let q = i.useCallback(() => {
                if (!z) return;
                let e = D();
                u(b, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == sh && (sh = document.createElement("canvas").getContext("2d"));
                    let i = sh;
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
                        f = d.lastIndexOf(" ");
                    return (f > 0 ? d.slice(0, f) : d).trimEnd();
                })(J.current?.querySelector("textarea") ?? null, ea.current, b);
                ("" !== t && U(t), k(""));
            }, [z, b, u, D, k]),
            G = i.useCallback(
                (e) => {
                    (e.preventDefault(), q());
                },
                [q],
            ),
            B = i.useCallback(() => {
                null == c || I || (M(!0), c());
            }, [c, I]),
            H = null == h || "" !== b || !n || l || o || p ? null : h,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && r && null != c && !I) {
                        (e.preventDefault(), e.stopPropagation(), B());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != H) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), k(H));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != f && (e.preventDefault(), f());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
                },
                [q, f, r, c, I, B, H, k],
            ),
            V = i.useCallback(
                (e) => {
                    n && R(e);
                },
                [n, R],
            );
        (0, sl.Vo)({
            event: eJ.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return V(t);
            },
        });
        let W = i.useCallback(
                (e) => {
                    (P(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [P],
            ),
            J = i.useRef(null),
            X = i.useRef(null),
            Y = i.useCallback((e) => {
                let t = _.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [Q, Z] = i.useState(0),
            [ee, et] = i.useState(!1);
        i.useEffect(() => {
            if (0 === b.length) return void et(!1);
            let e = J.current?.querySelector("textarea");
            if (null != e) {
                let t = sj(e);
                null != t && Z(t);
            }
            et(!0);
            let t = setTimeout(() => et(!1), sx);
            return () => clearTimeout(t);
        }, [b]);
        let en = i.useMemo(() => ({ "--custom-glow-x": `${Q}px` }), [Q]),
            el = ee ? ` ${sd.EB}` : "",
            er = o
                ? N.intl.string(A.default.qqlUiW)
                : l
                  ? N.intl.string(A.default.mPB3eo)
                  : n
                    ? p
                        ? N.intl.string(A.default.knUjL3)
                        : g
                          ? N.intl.string(A.default.IevBEw)
                          : N.intl.string(r ? A.default["0BJa/0"] : A.default.TEeU7z)
                    : N.intl.string(A.default.zZ9NgM),
            ea = i.useRef(0),
            eu = i.useRef(null),
            ec = i.useCallback((e) => {
                if ((eu.current?.disconnect(), null == e)) return;
                ea.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    ea.current = e.clientWidth;
                });
                (t.observe(e), (eu.current = t));
            }, []),
            ed = i.useId(),
            ef = null != H,
            em = F ?? H ?? er,
            eh = "" === b && "" !== em;
        return (0, a.jsxs)("form", {
            onSubmit: G,
            className: sd.DA,
            children: [
                T.length > 0
                    ? (0, a.jsx)("div", {
                          className: sd.lN,
                          children: T.map((e) => (0, a.jsx)(sc, { draft: e, onRemove: L }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sd.wg} ${sd.LP}${el}`, style: en, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sd.wg} ${sd.L3}${el}`, style: en, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sd.VA,
                    ref: J,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: W,
                            className: sd.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(ei.Y, {
                            targetElementRef: X,
                            position: "top",
                            align: "left",
                            animation: ei.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(es.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": N.intl.string(N.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eo.rX, {
                                        children: [
                                            sf.map((e) =>
                                                (0, a.jsx)(
                                                    eo.Dr,
                                                    {
                                                        id: e.id,
                                                        label: N.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => Y(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eo.Dr, {
                                                      id: "import-project",
                                                      label: N.intl.string(A.default["p/k5i7"]),
                                                      iconLeft: i9.q,
                                                      leadingAccessory: { type: "icon", icon: i9.q },
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
                                    ref: X,
                                    type: "button",
                                    className: `${sd.Y0} ${sd.nu}`,
                                    disabled: !n,
                                    "aria-label": N.intl.string(N.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(se.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: sd.Qu,
                                    }),
                                });
                            },
                        }),
                        eh
                            ? (0, a.jsx)("div", {
                                  ref: ec,
                                  className: sd.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(sg, { text: em, offering: ef && null == F, typed: null != F }),
                              })
                            : null,
                        (0, a.jsx)(lH.y, {
                            value: b,
                            onChange: (e) => k(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: V,
                            placeholder: eh ? "" : er,
                            disabled: !n,
                            "aria-label": N.intl.string(A.default.ldNl9x),
                            "aria-describedby": eh ? ed : void 0,
                            rows: 1,
                            className: sd.jp,
                        }),
                        eh ? (0, a.jsx)(eK.A, { id: ed, children: er }) : null,
                        (0, a.jsx)("div", {
                            className: sd.Sz,
                            children:
                                r && null != c
                                    ? (0, a.jsx)(eP.m, {
                                          text: N.intl.string(A.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${sd.Y0} ${sd.$E}`,
                                              disabled: I,
                                              onClick: B,
                                              "aria-label": N.intl.string(A.default.wiguT0),
                                              children: (0, a.jsx)(r0.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : v?.tierSettings != null && null != j
                                      ? (0, a.jsx)(eG, {
                                            settings: v.tierSettings,
                                            tiers: v.tiers,
                                            choices: v.choices,
                                            disabled: !n,
                                            onChange: j,
                                            className: `${sd.Y0} ${sd.$E}`,
                                            icon: (0, a.jsx)(eR.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        E
                            ? (0, a.jsxs)("div", {
                                  className: sd.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sd.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sd.rt,
                                          disabled: !z,
                                          "aria-label": N.intl.string(A.default.rxW2cl),
                                          children: (0, a.jsx)(st.SendMessageIcon, {
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
    sx = 1500,
    sv = [
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
function sj(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = sj.mirror;
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
                (sj.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of sv) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
sj.mirror = null;
var sb = n(148087);
let sy = [6e4, 18e4, 6e5],
    sk = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: sy,
            clock: "persistent",
            eligible: (e) => {
                var t;
                let { publish: n, draftTyped: l, outdatedUpdating: r } = e;
                return r
                    ? n?.isUpdate === !0
                    : !l && null != (t = n) && t.isUpdate && null == t.disabledReason && !0 !== t.publishing;
            },
        },
        {
            key: "ideas",
            priority: 1,
            idleDelayMs: 6e4,
            clock: "visit",
            eligible: (e) => {
                var t;
                let { turn: n, publish: l, draftHasText: r } = e;
                return (
                    !r &&
                    l?.publishing !== !0 &&
                    "plan_implemented" === (t = n).kind &&
                    (0, lk.BL)(t) &&
                    !(null != n.publishCta && iz(l))
                );
            },
        },
    ];
function sw(e, t) {
    return {
        ...e,
        now: t,
        visitStartedAt: t,
        draftTyped: !1,
        lastActivityAt: null,
        lastMessageAt: null == e.messageAt ? null : Math.min(e.messageAt, t),
        seenAt: null,
        unseen: !1,
        hiddenAt: e.visible ? null : t,
        outdatedShown: !1,
        outdatedBackoff: 0,
        outdatedUpdating: !1,
    };
}
let sA = new Map();
function sN(e) {
    return (0, s.bG)([G.Ay, aU.A], () => {
        let t = G.Ay.getProject(e);
        return null == t ? "" : (aU.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function sS(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(sE, { projectId: t }) : (0, a.jsx)(sC, { projectId: t, notice: n });
}
function sC(e) {
    let { projectId: t, notice: n } = e,
        l = sN(t),
        r = (0, s.bG)([G.Ay, f.A], () => {
            let e = G.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (f.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsx)(Y.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: N.intl.format(
            !0 === n.channel_skipped
                ? A.default.ev23Cw
                : n.update
                  ? A.default.gQzuLC
                  : null == r
                    ? A.default.MOrR29
                    : A.default["/npn7F"],
            { name: l, server: r ?? "" },
        ),
    });
}
function sE(e) {
    let { projectId: t } = e,
        n = (0, tm.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(sI, {})
          : (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: N.intl.format(A.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), sA.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function sI() {
    let e = N.intl.string(A.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, s.bG)([sn.Ay], () => sn.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, sb.A)());
    return (0, a.jsxs)(Y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var sM = n(248798);
function s_(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function sT(e) {
    let { reminder: t, renderReminder: n } = e,
        l = (function (e) {
            let t,
                [n, l] = i.useState([]);
            (n.find((e) => !e.leaving)?.key ?? null) !== e &&
                l(
                    ((t = n.filter((t) => t.key !== e).map((e) => ({ ...e, leaving: !0 }))),
                    null != e ? [...t, { key: e, leaving: !1 }] : t),
                );
            let r = n.some((e) => e.leaving);
            return (
                i.useEffect(() => {
                    if (!r) return;
                    let e = setTimeout(() => l((e) => e.filter((e) => !e.leaving)), 180);
                    return () => clearTimeout(e);
                }, [r, n]),
                n
            );
        })(t),
        r = l.find((e) => !e.leaving)?.key ?? null,
        s = null == r && l.length > 0,
        o = i.useRef(null),
        u = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            let e = o.current;
            if (null == e || s) return;
            e.getBoundingClientRect();
            let t = u.current;
            if (null == t) {
                e.style.height = "0px";
                return;
            }
            s_(e, t);
            let n = new ResizeObserver(() => s_(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: o,
            className: W()(sM.NI, { [sM.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: sM.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : u,
                            "aria-hidden": e.leaving || void 0,
                            "data-conjure-entrance": !0,
                            className: W()(sM.qd, e.leaving ? sM.cu : sM.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var sP = n(52133),
    sR = n(732159),
    sL = n(888366),
    s$ = n(862026),
    sD = n(291192);
function sO(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, s$.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: sD.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: sD.Sp,
                children: [
                    (0, a.jsx)("span", { className: sD.q3 }),
                    (0, a.jsxs)("span", {
                        className: sD.g8,
                        children: [
                            (0, a.jsx)(sL.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Y.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: sD.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: sD.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(lK.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tb.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(sR.u, {
                                                                    ...t,
                                                                    title: N.intl.string(A.default["i+xjZM"]),
                                                                    subtitle: N.intl.string(A.default.fMBZmD),
                                                                    confirmText: N.intl.string(A.default.i5f3Uo),
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
                        ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
var sz = n(940874);
n(775443);
var sF = n(616e3),
    sU = n(155899),
    sq = n(521981),
    sG = n(491182),
    sB = n(438729),
    sH = n(622868),
    sK = n(448368),
    sV = n(837528),
    sW = n(470964),
    sJ = n(715628),
    sX = n(752636),
    sY = n(9842),
    sQ = n(589022),
    sZ = n(967198),
    s0 = n(531685);
let s1 = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function s2(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function s3(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function s4(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = s3(e, t),
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
    if (s2(r) && s2(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && s2(s3(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function s7(e, t) {
    let { streaming: n } = t,
        l = (0, s.bG)([sn.Ay], () => sn.Ay.useReducedMotion),
        r = n && !l,
        [a, o] = i.useState(() => ({ target: e, length: e.length })),
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
                      for (; a > 0 && s4(t, a);) a--;
                      return a;
                  })(u.target, e, u.length)
                : e.length,
        }),
        r || u.length === e.length || (u = { target: e, length: e.length }),
        u !== a && o(u));
    let c = r && u.length < e.length,
        d = i.useRef(u);
    i.useLayoutEffect(() => {
        d.current = u;
    });
    let f = i.useRef(0),
        m = i.useRef(0);
    (i.useEffect(() => {
        if (c)
            return (
                (m.current = 0),
                (f.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
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
                                    for (; l > t + 1 && n - l < 12 && s1.has(e.charAt(l - 1));) l--;
                                    return s1.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && s4(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && o({ target: e.target, length: l });
                    }
                    f.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(f.current)
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
                o({ target: e, length: e.length });
            }
        }, [c]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var s6 = n(624479),
    s5 = n(890377),
    s8 = n(744898),
    s9 = n(180227);
function oe(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: W()(s9.QE, { [s9.Rn]: t }),
              children: (0, a.jsx)(ix.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ix.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function ot(e) {
    return to.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: N.intl.string(N.t.JrGD7E), icon: s6.CopyIcon, onClick: () => (0, to.C)(e) }]
        : [];
}
function on(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: N.intl.string(A.default.CXtLD2),
                          tooltip: N.intl.string(A.default.DOb1HM),
                          icon: s5.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: N.intl.string(A.default.urZwpN),
                          icon: et.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oe, { groupStart: n, actions: [...r, ...ot(t)] });
}
function ol(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: N.intl.string(A.default.H8Jfhu), icon: s8.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: t9.BugIcon, onClick: r }];
    return (0, a.jsx)(oe, { groupStart: n, actions: [...i, ...ot(t), ...s] });
}
let or = (0, aB.createChannelRecord)({ id: "conjure-builder", type: eJ.rbe.DM }),
    oa = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oi(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: W()(s9.Yq, { [s9.x1]: t }), children: e });
}
function os(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function oo(e, t, n) {
    let { content: l } = (0, sW.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: or, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(sB.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, sJ.A)(r, l);
}
function ou(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        o = (0, sV.m)(e, or, t.usernameProfile, l),
        u = (0, sV.Jo)(t.avatarProfile, l),
        c = (0, s.bG)([sZ.A], () => sZ.A.getGuildId()),
        d = (0, s.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = eZ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(sQ.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: o,
        onPopoutRequestClose: r,
        renderPopout: f,
        guildId: c ?? void 0,
    };
}
function oc(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        o = i.useMemo(() => {
            let e = "" !== n.content ? (0, sq.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: s9.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: s9.Rj,
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
        { isReplyAuthorBlocked: u, isReplyAuthorIgnored: c } = (0, s.cf)(
            [t0.A],
            () => ({
                isReplyAuthorBlocked: t0.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t0.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, ig.X4)(n),
        f = (0, ig.X4)(t),
        m = ou(n);
    return (0, a.jsx)(sK.A, {
        repliedAuthor: d,
        baseAuthor: f,
        baseMessage: t,
        channel: or,
        referencedMessage: { state: sY.a.LOADED, message: n },
        content: o,
        compact: !1,
        isReplyAuthorBlocked: u,
        isReplyAuthorIgnored: c,
        isReplySpineClickable: null != r,
        showReplySpine: !0,
        renderPopout: m.renderPopout,
        showAvatarPopout: m.showAvatarPopout,
        showUsernamePopout: m.showUsernamePopout,
        onClickAvatar: m.onClickAvatar,
        onClickUsername: m.onClickUsername,
        onClickReply: r,
        onPopoutRequestClose: m.onPopoutRequestClose,
    });
}
function od(e) {
    let { message: t, author: n } = e,
        l = ou(t);
    return (0, a.jsx)(sH.Ay, {
        message: t,
        channel: or,
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
function of(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => e6(l), [l]);
    let c = (0, s.bG)(
            [eZ.default],
            () => e7(l, null != l ? eZ.default.getUser(l) : null, eZ.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, ig.FT)(c, null), [c]),
        f = i.useMemo(() => nx(t), [t]),
        m = f?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, aG.Ay)({ channelId: or.id, content: m, author: c });
            return (0, aq.rh)({ ...e, timestamp: os(n, e.timestamp), state: eJ.cmJ.SENT });
        }, [m, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(om, {
              message: h,
              author: d,
              content: m,
              selected: f?.label,
              accessories: r,
              groupStart: o,
              onQueuedAction: u,
          });
}
function om(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = oo(t, l);
    return (0, a.jsx)(sG.A, {
        className: s9.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(od, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: s9.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: s9.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: s9.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: s9.WO, children: u }),
                      ],
                  }),
        childrenAccessories: oi(i, "" !== l),
        childrenButtons: (0, a.jsx)(on, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function oh(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: o,
            groupStart: u = !0,
            streaming: c = !1,
            buttons: d,
        } = e,
        { text: f, revealing: m } = s7(t, { streaming: (0, s.bG)([s0.A], () => c && s0.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, ig.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s.bG)(
            [eZ.default],
            () => e7(p, null != p ? eZ.default.getUser(p) : null, eZ.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : nx(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aG.Ay)({ channelId: or.id, content: v?.body ?? r.content, author: x });
            return (0, aq.rh)({ ...e, id: r.id, timestamp: os(r.createdAt, e.timestamp), state: eJ.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: or.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aG.Ay)({ channelId: or.id, content: "", author: oa })),
        k = i.useMemo(
            () =>
                (0, aq.rh)({
                    ...y,
                    timestamp: os(n, y.timestamp),
                    state: eJ.cmJ.SENT,
                    ...(null != b ? { type: eJ.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", f), [k, f]),
        A = i.useMemo(
            () => (0, sX.A)({ message: k, channel: or, author: g, guildId: void 0, isGroupStart: u }),
            [k, g, u],
        ),
        N = oo(w, f, s9.OS);
    return (0, a.jsxs)("div", {
        className: s9.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(sG.A, {
                className: s9.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oc, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: o }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: oi(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: s9.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(aj.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var og = n(986109);
let op = i.createContext(null);
function ox(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(op),
        [d, f] = i.useState(() => sn.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
        m = i.useCallback((e) => {
            e.target === e.currentTarget && f(!0);
        }, []);
    return (0, a.jsx)("li", {
        onContextMenu: u,
        onAnimationEnd: d ? void 0 : m,
        "data-conjure-entrance": !0,
        "data-role": t,
        "data-conjure-message": r,
        "data-conjure-row-key": l,
        className: W()(og.xk, { [og.g5]: d, [og.Qo]: s, [og.q3]: o }),
        children: n,
    });
}
function ov(e) {
    let { onSelect: t, onClose: n = eV.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(es.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": N.intl.string(N.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eo.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eo.Dr, {
                          id: "restore-version",
                          label: N.intl.string(A.default.H8Jfhu),
                          icon: s8.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eo.Dr, { id: "view-trace", label: "View Trace", icon: t9.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oj(e) {
    let t,
        {
            row: n,
            projectId: l,
            replyTo: r,
            onJumpTo: i,
            planVersion: o,
            pickedIdeaIds: u,
            secretRequestAwaiting: c,
            secretRequestStatus: d,
            settingsFloating: f = !1,
            isNewest: m = !1,
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
        j = null != v && null != p ? () => ob(v, p) : void 0,
        b =
            ((t =
                no() && "assistant" === x.role && (0, lk.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, s.bG)(
                [sF.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : sF.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((na = { projectId: e, traceId: t }), [...nr])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(ox, {
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
                          void (0, eV.jA)(t, (e) => (0, a.jsx)(ov, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oh, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(ol, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(i4, {
                projectId: l,
                steps: x.steps,
                content: "",
                proposal: x.proposal,
                planVersion: o,
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
                settingsRequest: n.active || f ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: w,
                onRestoreProposal:
                    null != w && null != p && m
                        ? () =>
                              ob(
                                  {
                                      sha: w.sha,
                                      authorName: "",
                                      authorEmail: "",
                                      authoredAt: w.authored_at,
                                      subject: w.subject,
                                  },
                                  p,
                              )
                        : void 0,
            }),
        }),
    });
}
function ob(e, t) {
    (0, sU.F)({ onConfirm: () => t(e) });
}
var oy = n(288539);
function ok(e, t, n) {
    return (0, a.jsx)(oy.A, { userId: e, content: `@${t}` }, n);
}
function ow(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e6(l), [l]);
            let r = (0, s.bG)([eZ.default], () => (null == l ? null : eZ.default.getUser(l)), [l]),
                a = (0, e0.tx)(r),
                o = sN(e),
                u =
                    (0, s.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? N.intl.string(A.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? N.intl.format(A.default.Lwsrhg, { app: o, server: u })
                        : N.intl.format(A.default.qqePfT, { app: o, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? N.intl.format(A.default.mT7EQG, { app: o, server: u })
                        : N.intl.format(A.default["lA/crI"], { app: o, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? N.intl.format(A.default["4LVIeo"], { app: o, server: u })
                        : N.intl.format(A.default.YJOV6D, { app: o, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? N.intl.format(A.default["4VQfid"], { channel: e, server: u })
                        : N.intl.format(A.default.RlMIJN, { channel: e, server: u, ...c });
                }
            }
        })(t, n, ok);
    return (0, a.jsx)(Y.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let oA = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(of, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, a.jsx)(iQ.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, sz.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oh, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(iQ.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(i3, {
                            projectId: n,
                            steps: s.steps,
                            segment: t.segment,
                            active: t.active,
                            closed: t.closed,
                            segmentDurationMs: t.segmentDurationMs,
                            reportsDuration: t.reportsDuration,
                            hostsChecklist: t.hostsChecklist,
                            turnActive: t.turnActive,
                            checklistSuperseded: t.checklistSuperseded,
                            durationMs: null != s.finished_at ? s.finished_at - s.created_at : void 0,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "publishNotice":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oh, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(sS, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oh, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(ow, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, a.jsx)(sO, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(i3, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(ox, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(i3, {
                            projectId: n,
                            steps: oN,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oj, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, sP.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, sP.A)(e.row, t.row, ["message"]) &&
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
                (0, sP.A)(e.replyTo, t.replyTo) &&
                (0, sP.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oN = [],
    oS = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oC = new WeakMap();
function oE(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function oI(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let oM = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: o,
            draftHasText: u,
            onApprovePlan: c,
            floatingSettingsMessageId: d,
            liveClarificationId: f,
            onRestoreVersion: m,
            scrollerRef: h,
            stickToBottomRef: g,
            pinned: x,
            onUnpin: v,
            handleRef: j,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [k, w] = i.useState(null),
        S = i.useCallback((e) => {
            ((y.current = e), w(e));
        }, []),
        [C, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let M = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        _ = (0, s.bG)([li.A], () => li.A.getPublishStatus(t)?.state ?? null),
        T = (0, s.bG)([eZ.default], () => eZ.default.getCurrentUser()?.id),
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
                                        let t = (0, ly.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = oC.get(r);
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
                        let a = !(0, lk.BL)(e),
                            i = r4({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, ly.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, ly.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            f = !1;
                        for (let n of o) {
                            if (null != n.prose && oS.test(n.prose.content)) f = !0;
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
                                        turnActive: lw(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = oS.test(e.content ?? "");
                        if (
                            (!0 === e.interrupted || f || m
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
                            (i.showsClosingMessage && !m) ||
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
                    (oC.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                          let n = iF.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iF.set(t, n)), n);
                      })),
                f,
            );
        }, [n, _, f]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return oE(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : oI(e, t.endKey, t.end - 1) + 1,
                a = oI(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), oE(e, a, r));
        })(R, L, x),
        O = i.useRef(D),
        z = i.useRef(R),
        F = i.useRef(P),
        U = i.useRef(null),
        q = i.useRef(null),
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
            U.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        H = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), oE(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), oE(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? oE(e, i, t.end) : null;
            })(z.current, O.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, p.P6)(t) : null != n && $(n);
        }, [h, g, t]);
    i.useImperativeHandle(
        j,
        () => ({
            handleScroll() {
                (B(),
                    $((e) => {
                        let t = O.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    H());
            },
            recordAnchor: B,
            showLatest(e) {
                ((q.current = e ?? null), $(null));
            },
        }),
        [B, H],
    );
    let K = i.useRef(null),
        V = i.useCallback(
            (e) => {
                var n;
                let l;
                K.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (v(), $(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), M(e));
                    return;
                }
                let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, p.P6)(t) && (K.current = e);
                    return;
                }
                (v(),
                    (q.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            M(e));
                    }),
                    $(((n = z.current), oE(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [M, v, t],
        );
    (i.useEffect(() => {
        let e = K.current;
        null != e && V(e);
    }, [P, V]),
        i.useLayoutEffect(() => {
            if (null == k) return;
            let e = k.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), g.current ? h.current?.scrollToBottom() : B());
                });
            return (t.observe(k), () => t.disconnect());
        }, [k, B, h, g]));
    let J = null == D.endKey;
    (i.useEffect(() => b?.(J), [J, b]),
        i.useLayoutEffect(() => {
            ((O.current = D), (z.current = R), (F.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = U.current;
                if (g.current) h.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = q.current;
                ((q.current = null), l?.(), B(), H());
            }
            G.current = new Set(R);
        }, [P, R, D.start, D.end, h, g, B, H]));
    let X = n.at(-1),
        Q = (function (e, t, n) {
            var l;
            let r = (0, tm.Ay)(e),
                a = (0, sb.A)(),
                s = (function (e) {
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if (
                            "publish_notice" !== n.kind &&
                            "project_event" !== n.kind &&
                            "context_boundary" !== n.kind
                        ) {
                            if ("user" === n.role) return null;
                            if ((0, lk.BL)(n)) return n;
                            if (!(0, lk.B0)(e, t)) break;
                        }
                    }
                    return null;
                })(t),
                o = t.at(-1),
                u = {
                    projectId: e,
                    draftHasText: n,
                    publishing: r?.publishing === !0,
                    drift: r?.isUpdate === !0,
                    messageAt: null != o ? Math.max(o.created_at, o.finished_at ?? 0, o.settled_at ?? 0) : null,
                    visible: a,
                },
                [c, d] = i.useState(() => sw(u, Date.now())),
                f = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return sw(t, n());
                    if (
                        e.draftHasText === t.draftHasText &&
                        e.publishing === t.publishing &&
                        e.drift === t.drift &&
                        e.messageAt === t.messageAt &&
                        e.visible === t.visible
                    )
                        return e;
                    let l = n(),
                        r = { ...e, now: l };
                    if (
                        (e.draftHasText !== t.draftHasText &&
                            (r = {
                                ...r,
                                draftHasText: t.draftHasText,
                                draftTyped: t.draftHasText,
                                lastActivityAt: l,
                                outdatedUpdating: t.publishing && r.outdatedUpdating,
                            }),
                        e.publishing !== t.publishing)
                    ) {
                        let e = r.outdatedUpdating && (t.publishing || t.drift);
                        r = {
                            ...r,
                            publishing: t.publishing,
                            lastActivityAt: e ? r.lastActivityAt : l,
                            outdatedShown: !1,
                            outdatedBackoff: 0,
                            outdatedUpdating: t.publishing && r.outdatedUpdating,
                        };
                    }
                    if (
                        (e.drift !== t.drift &&
                            ((r = { ...r, drift: t.drift }),
                            t.drift || (r = { ...r, outdatedShown: !1, outdatedBackoff: 0 })),
                        e.messageAt !== t.messageAt)
                    ) {
                        let n = null == t.messageAt ? null : Math.min(t.messageAt, l);
                        ((r = (function (e) {
                            if (!e.outdatedShown || e.publishing) return e;
                            let t = Math.min(e.outdatedBackoff + 1, sy.length - 1);
                            return { ...e, outdatedShown: !1, outdatedBackoff: t };
                        })({ ...r, messageAt: t.messageAt, lastMessageAt: n })).publishing ||
                            (r = { ...r, outdatedUpdating: !1 }),
                            t.visible || null == e.messageAt || (r = { ...r, unseen: !0 }));
                    }
                    return (
                        e.visible !== t.visible &&
                            ((r = { ...r, visible: t.visible }),
                            t.visible
                                ? (l - (e.hiddenAt ?? l) >= 6e5
                                      ? (r = { ...r, visitStartedAt: l })
                                      : r.unseen && (r = { ...r, seenAt: l }),
                                  (r = { ...r, hiddenAt: null, unseen: !1 }))
                                : (r = { ...r, hiddenAt: l, unseen: !1 })),
                        r
                    );
                })(c, u, Date.now),
                m =
                    null == s ||
                    null != (l = s).awaitingUser ||
                    null != l.secretRequest ||
                    null != l.settingsRequest ||
                    (l.intake?.questions.length ?? 0) > 0
                        ? null
                        : {
                              turn: s,
                              publish: r,
                              draftHasText: n,
                              draftTyped: f.draftTyped && n,
                              outdatedUpdating: f.outdatedUpdating,
                          },
                { shown: h, nextDueAt: g } = (function (e, t) {
                    var n;
                    let l;
                    if (t.unseen) return { shown: null, nextDueAt: null };
                    let r = e.filter((e) => e.eligible).sort((e, t) => t.priority - e.priority)[0];
                    if (null == r) return { shown: null, nextDueAt: null };
                    let a =
                        ((l = Math.max(
                            0,
                            t.now -
                                ((n = r.clock),
                                Math.max(
                                    t.lastMessageAt ?? -1 / 0,
                                    t.lastActivityAt ?? -1 / 0,
                                    t.seenAt ?? -1 / 0,
                                    "visit" === n ? t.visitStartedAt : -1 / 0,
                                )),
                        )),
                        t.now + Math.max(0, r.idleDelayMs - l));
                    return a <= t.now ? { shown: r.key, nextDueAt: null } : { shown: null, nextDueAt: a };
                })(
                    sk.map((e) => ({
                        ...e,
                        idleDelayMs:
                            "outdated" === e.key && f.outdatedUpdating
                                ? 0
                                : (e.backoffDelaysMs?.[f.outdatedBackoff] ?? e.idleDelayMs),
                        eligible: null != m && e.eligible(m),
                    })),
                    f,
                );
            return (
                "outdated" !== h || f.outdatedShown ? f !== c && d(f) : d({ ...f, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        d((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let n = sA.get(e) ?? new Set();
                    return (
                        sA.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && sA.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == g) return;
                    let e = setTimeout(() => d((e) => ({ ...e, now: Date.now() })), Math.max(0, g - Date.now()));
                    return () => clearTimeout(e);
                }, [g, f.now]),
                h
            );
        })(t, n, !0 === u),
        Z = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(oh, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(sS, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: og.u$,
                            children: (0, a.jsx)(oh, {
                                content: N.intl.string(A.default.s96AWB),
                                accessories: (0, a.jsx)(iK, { onAsk: o }),
                            }),
                        });
                }
            },
            [t, o],
        ),
        ee = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, lk.BL)(n) || "plan_implemented" === n.kind) return null;
                            if (null != n.proposal) return n.render_id;
                        }
                    }
                    return null;
                })(n),
            [n],
        ),
        et = i.useMemo(
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
        el = i.useMemo(
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
        er = i.useMemo(
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
        ea =
            (X?.role !== "assistant" || null == X.awaitingUser || null == X.secretRequest
                ? null
                : (0, lk.BL)(X)
                  ? X.awaitingUser
                  : null) ?? void 0,
        ei = (0, s.bG)([th.A], () => th.A.getSettings(t)?.secrets, [t]),
        es = i.useMemo(
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
                                        t === N.intl.string(A.default.UGqnoV) || t === N.intl.string(A.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, lk.BL)(s)) continue;
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
                })(n, ei),
            [n, ei],
        );
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: W()(og.x7, og.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: og.Ub, children: (0, a.jsx)(en.y, {}) }),
            });
        let e = "unavailable" === l ? A.default.Td4Sf4 : A.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: og.x7,
            children: (0, a.jsx)(ox, { role: "assistant", children: (0, a.jsx)(oh, { content: N.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(op.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: S,
            className: og.x7,
            children: [
                P.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            oA,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && C === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === X;
                    return (0, a.jsx)(
                        oA,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: V,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
                            secretRequestStatus: es.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === ee ? c : void 0,
                            onRestoreVersion: m,
                        },
                        e.key,
                    );
                }),
                null != ea && J
                    ? (0, a.jsx)(ox, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oh, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: N.intl.string(A.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J
                    ? (0, a.jsx)("li", {
                          role: "none",
                          className: og.q3,
                          children: (0, a.jsx)(sT, { reminder: Q, renderReminder: Z }),
                      })
                    : null,
            ],
        }),
    });
});
var o_ = n(731084),
    oT = n(823376),
    oP = n(187447);
function oR(e) {
    let { activity: t, id: n } = e,
        l = (0, sb.A)(),
        { text: r, revealing: s } = s7(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: oP.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(lj.Ch, {
                ref: o,
                className: oP.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: W()(i1.PT, oP.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: r1.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var oL = n(53659);
function o$(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            recalling: s = !1,
            controlling: o = !1,
            publishPending: u = !1,
            spoken: c,
            onSpokenChange: d,
        } = e,
        f = i.useRef(null),
        m = i.useId(),
        [h, g] = i.useState(null),
        p = (0, o_.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            recalling: s,
            controlling: o,
            publishPending: u,
        }),
        x = N.intl.string(p),
        v = p === o_.kx["0"],
        [j, b] = i.useState(c ?? x),
        y = (0, sb.A)();
    (l || (0, o_.E4)(x, j) || (!y && !v)) && j !== x && b(x);
    let k = i.useRef(x);
    (i.useEffect(() => {
        k.current = x;
    }, [x]),
        i.useEffect(() => {
            d?.(j);
        }, [j, d]));
    let w = i.useRef(null),
        S = i.useRef(j);
    i.useEffect(() => {
        S.current = j;
    }, [j]);
    let C = i.useRef(v),
        E = i.useRef(0);
    (i.useEffect(() => {
        ((C.current = v), !v && (0, o_.E8)(S.current) && b(k.current));
    }, [v]),
        i.useEffect(() => {
            if (!y) return;
            let e = 0,
                t = 0;
            function n() {
                C.current
                    ? ((E.current = (0, o_.E8)(S.current) ? E.current + 1 : 0), b((0, o_.Ov)(E.current)))
                    : k.current !== S.current
                      ? b(k.current)
                      : w.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, o_.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [y]));
    let I = null != t && "" !== t.text,
        M = t?.session ?? null,
        _ = I && null != M && h === M,
        T = i.useCallback(() => {
            I && null != M && g((e) => (e === M ? null : M));
        }, [I, M]),
        P = i.useCallback(() => g(null), []);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: _,
        onRequestClose: P,
        renderPopout: () => (0, a.jsx)(oR, { id: m, activity: t }),
        children: () =>
            (0, a.jsxs)(em.D, {
                innerRef: f,
                className: W()(oL.hF, I && oL.Xd),
                "aria-label": N.intl.string(r ? A.default.qqlUiW : v ? o_.kx["0"] : A.default["Uuj/gh"]),
                "aria-expanded": _,
                "aria-describedby": _ ? m : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": N.intl.string(p),
                onClick: T,
                children: [
                    (0, a.jsx)("span", {
                        className: oL.bl,
                        children: (0, a.jsx)(oT.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: oL.xu,
                        "aria-hidden": !!o || !!v || void 0,
                        children: y
                            ? (0, a.jsx)(eb.o, {
                                  ref: w,
                                  text: j,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: o_.vg,
                                  delay: null,
                                  className: oL.yE,
                              })
                            : (0, a.jsx)(Y.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: oL.yE,
                                  children: j,
                              }),
                    }),
                ],
            }),
    });
}
var oD = n(85428),
    oO = n(242779),
    oz = n(436804);
function oF(e) {
    return e.toLocaleString();
}
function oU(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: oz.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: oz.mf,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [oF((0, oO.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    oF(n.input_tokens),
                    " in \xb7 ",
                    oF(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${oF(n.cache_creation_input_tokens)} cache write \xb7 ${oF(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function oq(e) {
    let { project: t } = e,
        n = (0, oO.wU)(t.compaction),
        l = (0, oO.wU)(t.classifier),
        r = (0, oO.wV)(t.orchestrator, t.codegen),
        i = (0, oO.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: oz.si,
        role: "dialog",
        "aria-label": N.intl.string(A.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: oz.Q$,
                children: (0, a.jsxs)("div", {
                    className: oz.mf,
                    children: [
                        (0, a.jsxs)(Y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [oF((0, oO.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(oU, { label: N.intl.string(A.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(oU, { label: N.intl.string(A.default.ANCEo3), usage: n }),
            (0, a.jsx)(oU, { label: N.intl.string(A.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: oz.mf,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: N.intl.string(A.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, oO.sj)(i) ? "\u2014" : `${Math.round(100 * (0, oO.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function oG(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(oq, { project: t }),
        children: (e) =>
            (0, a.jsx)(em.D, {
                innerRef: n,
                className: oz.Y$,
                "aria-label": N.intl.string(A.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(aC.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var oB = n(997421);
function oH(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            recalling: o = !1,
            thinkingActivity: u,
            compacting: c,
            saving: d,
            projectUsage: f,
            connState: m,
        } = e,
        h = (0, nu.Zv)(t),
        g = (0, s.bG)([li.A], () => li.A.getPublishStatus(t)?.publishing === !0, [t]),
        [p, x] = i.useState(null),
        v = i.useCallback((e) => x((0, o_.E8)(e) || e === N.intl.string(A.default.mKK6wB) ? null : e), []),
        j = null == f ? null : (0, o_.uc)(f),
        b = n && null != l;
    return (0, a.jsxs)("div", {
        className: oB.jf,
        children: [
            (0, a.jsxs)("div", {
                className: oB.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || r || o || h || !0 === d
                        ? (0, a.jsx)(o$, {
                              activity: u,
                              compacting: c,
                              saving: d,
                              restoring: r,
                              recalling: o,
                              controlling: h,
                              publishPending: g,
                              spoken: p,
                              onSpokenChange: v,
                          })
                        : null,
                    b ? (0, a.jsx)(oD.A, { startedAt: l }) : null,
                ],
            }),
            b ? (0, a.jsx)(oD.L, { startedAt: l }) : null,
            null == f || null == j
                ? null
                : (0, a.jsxs)("span", {
                      className: oB.BP,
                      children: [
                          (0, a.jsx)(Y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": j.aria,
                              children: j.text,
                          }),
                          (0, a.jsx)(oG, { project: f }),
                      ],
                  }),
            "open" === m
                ? null
                : (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === m ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": N.intl.formatToPlainString(A.default["tCo+ZM"], { status: (0, o_.Db)(m) }),
                      "data-conjure-conn": !0,
                      "data-state": m,
                      className: oB.XF,
                      children: (0, o_.Db)(m),
                  }),
        ],
    });
}
let oK = ["wheel", "touchstart", "pointerdown", "keydown"];
var oV = n(698638),
    oW = n(608711);
let oJ = [N.intl.string(A.default["9w+Chc"]), N.intl.string(A.default.WAvmdq), N.intl.string(A.default.SKsrzl)];
function oX(e) {
    var t;
    let { projectId: n, restoreState: l, onRestoreVersion: r, onImportProject: o } = e,
        u = (0, s.bG)([e1.A], () => e1.A.getMessages(n), [n]),
        c = (0, s.bG)([p.Ay], () => p.Ay.getConnState(n), [n]),
        d = (0, s.bG)([p.Ay], () => p.Ay.isChatStopped(n), [n]),
        m = (0, s.bG)([e1.A], () => e1.A.getProjectUsage(n), [n]),
        h = (0, s.bG)([e1.A], () => e1.A.getThinkingActivity(n), [n]),
        x = (0, s.bG)([e1.A], () => e1.A.isCompacting(n), [n]),
        v = (0, s.bG)([e1.A], () => e1.A.isSaving(n), [n]),
        j = (0, s.bG)([rO.A], () => rO.A.getModelSettings(n), [n]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: S,
            atBottom: C,
            unpin: E,
            releasePinHold: I,
            showsLatest: M,
            showsLatestRef: _,
            handleShowsLatestChange: T,
            updatePin: P,
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
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of oK) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of oK) t.removeEventListener(e, u);
                    };
                }
            }, [e, u]);
            let h = i.useCallback(() => {
                let n = e.current;
                if (null == n) return;
                let r = n.getDistanceFromBottom(),
                    i = !s.current && r < 32 && f.current;
                t.current = i;
                let o = r > 1 || !f.current;
                (a((e) => (!o === e ? e : !o)), l((e) => (e === i ? e : i)));
            }, [e]);
            return {
                stickToBottomRef: t,
                pinned: n,
                atBottom: r,
                unpin: o,
                releasePinHold: u,
                showsLatest: c,
                showsLatestRef: f,
                handleShowsLatestChange: m,
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
            (P(), k.current?.handleScroll());
        }, [P]);
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
            (0, p.Hc)(n);
        }, [n]),
        (0, rB.E1)(n));
    let $ = nC(n),
        D = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, s.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                o = t?.missingSurface ?? null;
            return null == o || r === e
                ? null
                : {
                      message: N.intl.format("channel" === o ? A.default["1cm4fj"] : A.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(n),
        O = i.useCallback(
            (e, t) => {
                (0, p.dv)(n, e, t);
            },
            [n],
        ),
        z = i.useCallback(
            (e, t) => {
                0 === $.annotations.length
                    ? O(e, t)
                    : (O(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nd(e.comment)),
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
                                      a.push(`${t + 1}. ${nh(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: $.annotations, metaComment: e, context: $.context }),
                          t,
                      ),
                      nw(n));
            },
            [$, O, n],
        ),
        F = i.useCallback(() => (0, p.fu)(n), [n]),
        U = i.useCallback((e) => rA(n, e.implementation_prompt), [n]),
        [q, G] = (function (e) {
            let [t, n] = i.useState(() => rZ(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? rZ(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(n),
        B = i.useCallback(() => O(N.intl.string(A.default["t5CN3+"])), [O]),
        H = i.useCallback((e, t, l) => rA(n, e, { clarificationAnswers: t, attachments: l }), [n]),
        K = i.useCallback((e) => (0, rz.X)(n, e), [n]),
        V = i.useCallback((e) => (0, g.vX)(n, e), [n]),
        W = i.useCallback((e) => so(n, "chat", Array.from(e), V), [n, V]),
        J = i.useCallback(() => rA(n, N.intl.string(A.default.Zc7gML)), [n]),
        X = l?.status === "restoring",
        Q = "open" === c && !d && !X,
        Z = u[u.length - 1],
        en = null != Z && "assistant" === Z.role && null != Z.proposal,
        [el, er] = i.useState(null),
        ea = Z?.clarification != null && Z.clarification.id !== el ? Z.clarification : null,
        ei = i.useCallback(() => {
            null != ea && er(ea.id);
        }, [ea]),
        es = (0, s.bG)([th.A], () => th.A.getSettings(n), [n]),
        [eo, eu] = i.useState(null),
        ec =
            null != Z &&
            "assistant" === Z.role &&
            null != Z.settingsRequest &&
            (0, lk.BL)(Z) &&
            Z.id !== eo &&
            ((t = Z.settingsRequest),
            null != es &&
                (t.keys ?? []).some((e) => {
                    let t = es.schema.find((t) => t.key === e);
                    if (null == t) return !1;
                    if ("secret" === t.type) return es.secrets.find((t) => t.name === e)?.set !== !0;
                    let n = es.values[e];
                    return null == n || "" === n;
                }))
                ? Z
                : null,
        ed = ec?.settingsRequest ?? null,
        ef = i.useCallback(() => {
            null != ec && eu(ec.id);
        }, [ec]),
        em = null != ed,
        [eh, eg] = i.useState(null),
        ep = ea?.id ?? ec?.id;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eh?.firstElementChild;
        if (null == eh || null == e || !(0, n0.vq)(t, HTMLElement) || null == ep) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eh.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eh, ep, y, w]);
    let ex = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, s.bG)([e1.A], () => e1.A.hasLoadedHistory(n), [n]),
            historyUnavailable: (0, s.bG)([e1.A], () => e1.A.isHistoryUnavailable(n), [n]),
            connState: c,
        }),
        ev = "loading" === ex && 0 === u.length,
        ej = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < n.length; t++) e = (31 * e + n.charCodeAt(t)) % 0x7fffffff;
            return oJ[e % oJ.length];
        }, [n]),
        eb = en ? N.intl.string(A.default.Zc7gML) : "greeting" === ex && 0 === u.length ? ej : null,
        ey = i.useMemo(() => {
            for (let e = u.length - 1; e >= 0; e--) {
                let t = u[e];
                if ("assistant" === t.role && !(0, lk.BL)(t)) return t;
            }
        }, [u]),
        ek = null != ey,
        ew = null != ey ? (0, rG.S)(ey) : void 0,
        eA = en && Q ? J : void 0,
        eN = i.useCallback(() => rA(n, N.intl.string(A.default.EMgIuY)), [n]),
        [eS, eC] = i.useState(null),
        [eE, eI] = i.useState(ek);
    (eE !== ek && (eI(ek), ek || eC(null)),
        i.useEffect(() => {
            if (!ek) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eC(null)
                        : eC(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [ek, ey?.steps, M]));
    let eM = M ? eS : "bottom",
        e_ = i.useMemo(() => (null != ey ? (0, lA.b9)(ey.steps) : ""), [ey]),
        eT = i.useMemo(() => (null != ey ? ((0, ly.lt)(ey.steps) ?? ey.todos) : void 0), [ey]),
        eR = ey?.provisionalTodo,
        eL = null != ey && lw(ey),
        e$ = i.useMemo(() => {
            var e;
            return null != ey ? ((e = ey.steps), i2((0, ly.Jf)(e, !0).tasks)) : void 0;
        }, [ey]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: oW.TE,
        children: [
            Q
                ? (0, a.jsx)(lb.A, {
                      title: N.intl.string(A.default.gy7byi),
                      description: N.intl.string(A.default["dkv/WO"]),
                      icons: oV.ir,
                      onDrop: W,
                  })
                : null,
            (0, a.jsx)(lq, {
                onJumpToActivity: R,
                line: e_,
                placement: ek && "top" === eM ? "top" : null,
                todos: eT,
                todosLive: eL,
                provisionalTodo: eR,
                agents: e$,
            }),
            (0, a.jsxs)("div", {
                className: oW.JX,
                children: [
                    (0, a.jsx)(lj.Ch, {
                        ref: y,
                        onScroll: L,
                        scrollbarGutter: ev ? "both-edges" : "stable",
                        className: [oW.N$, C ? null : oW.hB, em ? oW.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(oM, {
                            projectId: n,
                            messages: u,
                            emptyState: ex,
                            floatingSettingsMessageId: ec?.id,
                            liveClarificationId: ea?.id,
                            onPickIdea: Q ? U : void 0,
                            onAskForIdeas: Q ? B : void 0,
                            draftHasText: q,
                            onApprovePlan: Q ? eN : void 0,
                            onRestoreVersion: X || ek ? void 0 : r,
                            scrollerRef: y,
                            stickToBottomRef: w,
                            pinned: S,
                            onUnpin: E,
                            handleRef: k,
                            onShowsLatestChange: T,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: oW.NJ,
                        children: (0, a.jsx)(oH, {
                            projectId: n,
                            thinking: ek,
                            turnStartedAt: ew,
                            restoring: X,
                            recalling: ev,
                            thinkingActivity: h,
                            compacting: x,
                            saving: v,
                            projectUsage: m,
                            connState: c,
                        }),
                    }),
                    null == ea
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eg,
                              className: em ? `${oW.B5} ${oW.J9}` : oW.B5,
                              children: (0, a.jsx)(
                                  rD,
                                  { projectId: n, clarification: ea, onSubmit: Q ? H : void 0, onDismiss: ei },
                                  ea.id,
                              ),
                          }),
                    null == ed
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ea ? eg : void 0,
                              className: oW.B5,
                              children: (0, a.jsx)(rq, { projectId: n, request: ed, onDismiss: ef }, ec?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oW.Jx,
                children: [
                    (0, a.jsx)(lq, {
                        onJumpToActivity: R,
                        line: e_,
                        placement: ek && "bottom" === eM ? "bottom" : null,
                        todos: eT,
                        todosLive: eL,
                        provisionalTodo: eR,
                        agents: e$,
                    }),
                    0 === $.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: oW.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: N.intl.formatToPlainString(A.default["7b49dS"], {
                                          count: $.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: N.intl.string(A.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(ee.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: N.intl.string(A.default["/zOv9+"]),
                                      onClick: () => nw(n),
                                  }),
                              ],
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: oW.Db,
                              children: [
                                  (0, a.jsx)(tY.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: oW.jU,
                                      children: (0, a.jsx)(eP.m, {
                                          text: N.intl.string(N.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tr.K, {
                                              "aria-label": N.intl.string(N.t.WAI6xu),
                                              icon: et.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: D.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(sp, {
                        projectId: n,
                        canSend: Q,
                        stopped: d,
                        running: ek,
                        restoring: X,
                        onSend: z,
                        hasPendingContext: $.annotations.length > 0,
                        onInterrupt: Q ? F : void 0,
                        onUploadFile: V,
                        onImport: o,
                        onApprove: eA,
                        suggestion: eb,
                        questionOpen: null != ea || null != ed,
                        modelSettings: j,
                        onModelSettingsChange: K,
                        onDraftHasTextChange: G,
                    }),
                ],
            }),
        ],
    });
}
var oY = n(761508),
    oQ = n(933294),
    oZ = n(207438),
    o0 = n(683438);
function o1(e, t) {
    return String(e).padStart(t, "0");
}
var o2 = n(667931);
let o3 = {
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
    o4 = { running: "Running", ok: "Done", error: "Failed" };
function o7(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function o6(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function o5(e) {
    return o7(Math.round(e));
}
function o8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function o9(e) {
    return o5(e.count > 1 ? e.totalMs : e.end - e.start);
}
let ue = ["Arguments", "Result", "Usage", "Details"];
function ut(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function un(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function ul(e) {
    let t = (0, o2.bM)(e)?.end;
    return null != t ? o7(t) : (0, o2.lp)(e) ? "interrupted" : "still running";
}
function ur(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${o1(l.getHours(), 2)}:${o1(l.getMinutes(), 2)}:${o1(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${o1(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        o8(e.spans.length),
        (0, o2.Sj)((0, o2.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function ua(e) {
    let t = (0, o2.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, o2.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += ui(r, "in")),
                (l.output += ui(r, "out")),
                (l.cacheRead += ui(r, "cache_read")),
                (l.cacheWrite += ui(r, "cache_write")),
                (l.costUsd += ui(r, "cost_usd"))));
    }
    let r = o2.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function ui(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var us = n(738188),
    uo = n(430993),
    uu = n(364840),
    uc = n(224640),
    ud = n(20742);
let uf = { collapsed: new Set(), revealed: new Set() };
var um = n(872892);
let uh = {
    op: um.Q,
    model: um.i3,
    tool: um.dH,
    setup: um.kc,
    worktree: um.Qx,
    sandbox: um.QH,
    build: um.F1,
    platform: um.Op,
    other: um.fv,
};
function ug(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      o8(t.calls, "model call"),
                      `${o6(t.input)} in`,
                      `${o6(t.output)} out`,
                      `${o6(t.cacheRead)} cache read`,
                      `${o6(t.cacheWrite)} cache write`,
                      un(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: um.M1,
        children: [
            (0, a.jsx)("div", {
                className: um.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${um.DJ} ${uh[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: um.o1,
                children: o2.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${o5(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: um.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${um.nf} ${uh[e]}` }),
                                (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: o3[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(Y.E, {
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
                : (0, a.jsx)(Y.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function up(e) {
    return `conjure-perf-trace-${e}`;
}
function ux(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: um.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${um.p0} ${s + o > 85 ? um.EU : um.jh}`,
                children: i,
            }),
        ],
    });
}
function uv(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : n5.a,
        f = i.useCallback(
            (e) => {
                (e.shiftKey && u(t.key), s(t.key));
            },
            [t.key, u, s],
        ),
        m = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? u(t.key) : o(t.key));
            },
            [t.key, u, o],
        );
    return (0, a.jsxs)(em.D, {
        tag: "div",
        role: "treeitem",
        id: up(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${um.$y} ${r ? um.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: um.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(em.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: um.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: um.YJ }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: um.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${um.nf} ${uh[t.category]}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: um.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: um.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: um.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(us.WarningIcon, { size: "xs", color: "currentColor", className: um.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(ux, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${um.M0} ${um.Nh}`
                    : t.running
                      ? `${um.M0} ${um.rF}`
                      : `${um.M0} ${uh[t.category]}`,
                duration: o9(t),
            }),
        ],
    });
}
function uj(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(em.D, {
        tag: "div",
        role: "treeitem",
        id: up(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${um.$y} ${l ? um.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: um.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: um.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: um.U9 }),
                    (0, a.jsx)("span", { className: `${um.nf} ${um.dL}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: um.MQ,
                        children: o8(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(ux, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${um.M0} ${um.ab} ${um.dL}`,
                duration: o5(t.totalMs),
            }),
        ],
    });
}
function ub(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: um._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: um.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${um.nf} ${uh[t.category]}` }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [ut("Start", `+${o5(e.start)}`), ut("Duration", o9(e))];
                      e.count > 1
                          ? t.push(
                                ut("Calls", String(e.count)),
                                ut("Longest call", o5(e.maxMs)),
                                ut("Spread over", o5(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(ut("Self time", o5(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(ut("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(ut("Notes", l.join(", "))),
                          null != e.span.error && t.push(ut("Error", e.span.error)));
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
                              s = "cost_usd" === t ? un(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), ut(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...ue.flatMap((e) => {
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
                                      : (0, a.jsx)(Y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: um.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(Y.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(Y.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: um.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(Y.E, {
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
function uy(e) {
    let { trace: t } = e,
        n = i.useMemo(() => ua(t), [t]);
    return (0, a.jsx)(ug, { stats: n });
}
function uk(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, o2.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uf : (0, o2.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, o2.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, o2.x7)(t)), l((n) => (0, o2._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, o2.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, o2.IE)(t, e);
                        null != n && l((e) => (0, o2.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, o2.IE)(t, e);
                        null != n && l((e) => (0, o2.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, o2.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, o2.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, o2.hB)(t));
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
                expandAll: f,
                collapseAll: m,
                reset: h,
            };
        })(t),
        { rows: l, collapsed: r, selected: s, selectedKey: o, select: u, toggle: c, reveal: d, expandSubtree: f } = n,
        m = (0, o2.dj)(t),
        h = i.useMemo(() => (0, o2.nF)(m), [m]),
        g = h.length > 1 ? ((h[1] - h[0]) / m) * 100 : 100,
        p = i.useCallback(
            (e) => {
                let t,
                    n = l.findIndex((e) => e.key === o),
                    a = l[n];
                if ("ArrowDown" === e.key) t = l[Math.min(l.length - 1, n + 1)];
                else if ("ArrowUp" === e.key) t = l[Math.max(0, n - 1)];
                else if (null == a) return;
                else if ("smaller" === a.kind && ("ArrowRight" === e.key || "Enter" === e.key)) d(a.parentKey);
                else if ("node" === a.kind && "ArrowRight" === e.key && e.shiftKey) f(a.key);
                else if ("node" === a.kind && "ArrowRight" === e.key && r.has(a.key)) c(a.key);
                else {
                    if ("node" !== a.kind || "ArrowLeft" !== e.key || !(a.node.children.length > 0) || r.has(a.key))
                        return;
                    c(a.key);
                }
                (e.preventDefault(),
                    null != t && (u(t.key), document.getElementById(up(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(uo.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: um.z,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: ul(t),
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: ur(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(Y.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${o8(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(uy, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: um.KE,
                        children: [
                            (0, a.jsx)(ee.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Time sinks",
                                onClick: n.reset,
                            }),
                            (0, a.jsx)(ee.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(ee.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(Y.E, {
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
                        "aria-activedescendant": null == o ? void 0 : up(o),
                        className: um.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: um.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: um.So,
                                        children: (0, a.jsx)(Y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: um.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${um.io} ${(e / m) * 100 > 85 ? um.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : o5(e),
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
                                          uv,
                                          {
                                              node: e.node,
                                              extent: m,
                                              collapsed: r.has(e.key),
                                              selected: e.key === o,
                                              onSelect: u,
                                              onToggle: c,
                                              onExpandSubtree: f,
                                          },
                                          e.key,
                                      )
                                    : (0, a.jsx)(uj, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(uu.j, { children: (0, a.jsx)(ub, { node: s }) }),
        ],
    });
}
function uw(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, s.bG)([sF.A], () => sF.A.getTimingTrace(l, r), [l, r]),
        o = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(uc.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": o,
        children: [
            (0, a.jsx)(ud.rQ, { title: o }),
            null == i
                ? (0, a.jsx)(uo.c, {
                      children: (0, a.jsx)(Y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(uk, { trace: i }),
        ],
    });
}
let uA = { running: um.Vf, ok: um.mo, error: um.Sr };
function uN(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${um.Om} ${uA[t]}`, role: "img", "aria-label": o4[t] });
}
function uS(e, t) {
    (0, tb.openModal)((n) => (0, a.jsx)(uw, { ...n, projectId: e, traceId: t }));
}
function uC(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => uS(t, n.id), [t, n.id]);
    return (0, a.jsxs)(em.D, {
        className: um.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: um.sU,
                children: [
                    (0, a.jsx)(uN, { status: (0, o2.lQ)(n) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: um._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: ul(n),
                    }),
                ],
            }),
            (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: ur(n) }),
            null == l
                ? null
                : (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function uE(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            b(
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
    return (0, a.jsx)(ei.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(es.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(eo.rX, {
                    children: (0, a.jsx)(eo.Dr, {
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
            return (0, a.jsx)(tr.K, {
                ...e,
                buttonRef: l,
                icon: ta.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function uI(e) {
    let { projectId: t } = e,
        n = (0, s.yK)([sF.A], () => sF.A.getTimingTraces(t), [t]),
        [l, r] = i.useState(""),
        o = i.useMemo(() => {
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
        u = i.useMemo(() => [...o].reverse(), [o]),
        c = i.useMemo(
            () =>
                (function (e) {
                    let t = e.map(ua);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: o2.BF.map((e) => ({
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
                })(o),
            [o],
        );
    return 0 === n.length
        ? (0, a.jsxs)("div", {
              className: um.Ie,
              children: [
                  (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(Y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: "Turns and project operations over 100ms show up here as they run.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: um.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: um.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: um.fH,
                              children: (0, a.jsx)(o0.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(uE, { projectId: t, traces: o }),
                      ],
                  }),
                  (0, a.jsxs)(lj.Ch, {
                      className: um.XG,
                      children: [
                          (0, a.jsx)(ug, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: um.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(uC, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function uM(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function u_(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function uT(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function uP(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function uR(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function uL(e) {
    return N.intl.string("preview" === e ? A.default["2yLYlG"] : A.default.eiAi57);
}
let u$ = ["all", "preview", "stable", "web"];
function uD(e) {
    switch (e.reason) {
        case "local":
            return N.intl.string(A.default.mUeKML);
        case "unconfigured":
            return N.intl.string(A.default.bGefb5);
        case "unauthorized":
            return N.intl.string(A.default.KLx6Bb);
        default:
            return null != e.detail
                ? N.intl.formatToPlainString(A.default.t09Q6q, { detail: e.detail })
                : N.intl.string(A.default["t+tG59"]);
    }
}
function uO(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : N.intl.formatToPlainString(A.default["XO/bN4"], {
              p50: uM(e.memory_p50_bytes ?? 0),
              p999: uM(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let uz = {
    db: () => A.default["7l+DFG"],
    db_preview: () => A.default.FAuffi,
    runtime: () => A.default["Gkl+ab"],
    runtime_preview: () => A.default.ynpJzv,
    bot: () => A.default["5/i0cj"],
    bot_preview: () => A.default.m2jsnw,
};
var uF = n(911608),
    uU = n(177427);
function uq(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: uU.KE,
        children: [
            (0, a.jsx)("div", {
                className: uU.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(en.y, { type: en.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Y.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: N.intl.string(A.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Y.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: N.intl.formatToPlainString(A.default.INVO50, { time: uP(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(ee.$, { variant: "secondary", size: "sm", text: N.intl.string(A.default.oKEgiu), onClick: l }),
        ],
    });
}
function uG(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: uU.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Y.E, { variant: "text-xs/semibold", color: "text-muted", className: uU.Gf, children: t }),
            n,
        ],
    });
}
function uB(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: uU.N8,
        children: [
            (0, a.jsxs)("div", {
                className: uU.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: uU.kS,
                        children: [i, (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: uU.kS,
                        children: [
                            s,
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function uH(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: uU.N8,
        children: [
            (0, a.jsxs)("div", {
                className: uU.x7,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(uF.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? uU.dh : void 0,
            }),
        ],
    });
}
function uK(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(uB, {
            label: N.intl.string(A.default.SXP7pD),
            value: N.intl.string(A.default.E5hKVi),
            hint: uD(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(uB, {
            label: N.intl.string(A.default.SXP7pD),
            value: "\u2014",
            hint: N.intl.string(A.default.AGvoMJ),
        });
    let l = uO(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uB, { label: N.intl.string(A.default["H/X+FI"]), value: u_(n.cpu_ms) }),
            null != l && (0, a.jsx)(uB, { label: N.intl.string(A.default.lmFmMO), value: l }),
        ],
    });
}
function uV(e) {
    let { analytics: t } = e,
        n = N.intl.string(A.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(uG, {
            title: n,
            children: (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: uD(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? uz[t] : null) ? N.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(uG, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Y.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: N.intl.string(A.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          uB,
                          {
                              label: n,
                              value: N.intl.formatToPlainString(A.default["w/2voO"], { cpu: u_(t.cpu_ms) }),
                              hint: uO(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var uW = n(678708),
    uJ = n(414499),
    uX = n(714800),
    uY = n(81466),
    uQ = n(424383),
    uZ = n(816943),
    u0 = n(268791),
    u1 = n(514042),
    u2 = n(872351),
    u3 = n(708988),
    u4 = n(150934),
    u7 = n(417270);
let u6 = "Restart Agent",
    u5 = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function u8(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function u9(e, t) {
    return { label: e, value: null != t && "" !== t ? uP(t) : "Unknown", icon: "calendar" };
}
function ce(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function ct(e, t, n, l) {
    let [r, a] = u5[n.status];
    return { label: e, value: `${ce(n.bytes)} of ${ce(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function cn(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = uP(e.at);
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
let cl = { main: "Main vs Remote", wip: "WIP vs Remote" };
function cr(e) {
    let t = `container ${u8(e.local)} \xb7 remote ${u8(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: cl[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${uT(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${uT(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${uT(n)} Ahead, ${uT(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let ca = ["main", "wip"];
var ci = n(400154);
let cs = {
        checkout: uW.FolderIcon,
        edit: lB.PencilIcon,
        remote: uJ.h,
        commits: uX.e,
        calendar: uY.CalendarIcon,
        save: uQ.L,
        objects: ec.R,
        download: uZ.$,
        size: u0.$,
        file: u1.FileIcon,
    },
    co = {
        ok: [a2.y, er.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [us.WarningIcon, er.A.colors.ICON_FEEDBACK_WARNING],
        error: [sr.a, er.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [u2.z, er.A.colors.ICON_MUTED],
        behind: [u3.M, er.A.colors.ICON_MUTED],
    };
function cu(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, s.bG)([sF.A], () => sF.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, oZ.DK)(t), [t]),
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
                    `Updated ${uP(r)}`,
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
    return (0, a.jsxs)(uG, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: ci.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(Y.E, {
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
                    if (!e.running || null != e.localError) return [cn(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            cn(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : uT(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = ca.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(cr))
                        : l.push(
                              { label: "Main", value: u8(e.heads.main), icon: "remote" },
                              { label: "WIP", value: u8(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? uT(e.commits) : "Unknown", icon: "commits" },
                            u9("Oldest Commit", e.oldest),
                            u9("Newest Commit", e.newest),
                            cn(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${uT(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${uT(t.loose)} loose (${uM(t.looseBytes)}) \xb7 ${uT(t.packed)} packed in ${n} (${uM(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${uT(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${uT(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                ct(
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
                                  ct("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = cs[r],
                        [o, u] = null != i ? co[i] : [null, void 0];
                    return (0, a.jsx)(
                        uB,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: er.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function cc(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: o,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, s.bG)([sF.A], () => sF.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                o = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== o.current && ((o.current = a), (0, oZ.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = sF.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, oZ.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lx.h.dispatch({
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
            let u = i.useCallback(() => (0, oZ.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: u6,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eW.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: ci.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: ci.nM,
                children: [
                    (0, a.jsx)(u4.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: o,
                        disabled: l,
                    }),
                    (0, a.jsx)(ee.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: u7.RetryIcon,
                        text: u6,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(Y.E, {
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
                            return `Restarted \xb7 new instance since ${uP(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${uP(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function cd(e, t) {
    return (0, a.jsx)(uB, {
        label: e,
        value: N.intl.formatToPlainString(A.default.yHJxuP, { count: uT((0, oO.aM)(t)) }),
        hint: `${uT(t.input_tokens)} in \xb7 ${uT(t.output_tokens)} out \xb7 ${uT(t.cache_read_input_tokens)} cache read`,
    });
}
function cf(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        o = (0, s.bG)([sF.A], () => sF.A.getLastTurnUsage(t), [t]),
        u = (0, s.bG)([sF.A], () => sF.A.getLastCompaction(t), [t]),
        c = (0, s.bG)([sF.A], () => sF.A.getLastCompactionDecline(t), [t]),
        d = (0, s.bG)([sF.A], () => sF.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, oZ.Lj)(t), [t]),
        m = i.useCallback(() => (0, oZ.Lj)(t, !0), [t]),
        h = (0, s.bG)([sF.A], () => sF.A.getSandboxRestartState(t), [t]),
        g = (0, s.bG)([e1.A], () => e1.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, oZ.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: ci.Mf,
        children: [
            (0, a.jsx)(uq, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(uG, {
                title: N.intl.string(A.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: N.intl.string(A.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(uB, {
                                      label: N.intl.string(A.default["9nqym2"]),
                                      value: uT((0, oO.a7)(x.cost_usd)),
                                      hint: N.intl.formatToPlainString(A.default.NCdUIh, { count: uT(x.turns) }),
                                  }),
                                  cd(N.intl.string(A.default.xtxP0e), x.orchestrator),
                                  cd(N.intl.string(A.default["9Sj3SX"]), x.codegen),
                                  cd(N.intl.string(A.default.ANCEo3), (0, oO.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(uB, {
                                          label: N.intl.string(A.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${uT(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(uG, {
                title: N.intl.string(A.default.dZHPE5),
                children:
                    null == o
                        ? (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: N.intl.string(A.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  cd(N.intl.string(A.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(uB, {
                                      label: N.intl.string(A.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, oO.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(uG, {
                title: N.intl.string(A.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(uH, {
                                      label: N.intl.string(A.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: uT,
                                  }),
                                  (0, a.jsx)(uB, {
                                      label: N.intl.string(A.default.mRbSns),
                                      value: `${uT(u.tokensBefore)} \u{2192} ${uT(u.tokensAfter)}`,
                                      hint: N.intl.formatToPlainString(A.default.Vq3skS, {
                                          count: uT(u.retainedMessages),
                                          time: uP(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? N.intl.formatToPlainString(A.default.GMLCNv, { ceiling: uT(b) })
                                      : N.intl.string(A.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(uB, {
                            label: N.intl.string(A.default["4BX5KK"]),
                            value: `${uT(c.projected)} / ${uT(c.threshold)}`,
                            critical: !0,
                            hint: N.intl.formatToPlainString(A.default["6ngCax"], { time: uP(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: ci.Lj,
                        children: [
                            (0, a.jsx)(ee.$, {
                                variant: "secondary",
                                size: "sm",
                                text: N.intl.string(A.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: f,
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return N.intl.string(A.default.wox6Ev);
                                    if ("pending" === e) return N.intl.string(A.default.OcPHQ1);
                                    let t = uP(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return N.intl.formatToPlainString(A.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? A.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? A.default.YZb4hK
                                              : A.default.ZoUSVK;
                                    return N.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(ee.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: N.intl.string(A.default.ZxG2AI),
                                            onClick: m,
                                        }),
                                        (0, a.jsx)(Y.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: N.intl.string(A.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: ci.Lj,
                        children: [
                            (0, a.jsx)(ee.$, {
                                variant: "secondary",
                                size: "sm",
                                text: N.intl.string(A.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || g,
                                onClick: p,
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return N.intl.string(A.default.mlok8D);
                                    if ("pending" === e) return N.intl.string(A.default["1ugSyK"]);
                                    let t = uP(e.observedAt);
                                    return N.intl.formatToPlainString(
                                        "restarted" === e.outcome ? A.default["76mfqO"] : A.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(cc, { projectId: t }),
                ],
            }),
            (0, a.jsx)(cu, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(uG, {
                    title: N.intl.string(A.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(uB, {
                                        label: N.intl.string(A.default.CLXHAs),
                                        value: uP(j.instance_since),
                                        hint: N.intl.string(A.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(uB, { label: N.intl.string(A.default["8V8e1Z"]), value: uT(j.sockets) }),
                                    (0, a.jsx)(uB, {
                                        label: N.intl.string(A.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? N.intl.string(A.default.Wv025I)
                                            : N.intl.string(A.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(uB, {
                                            label: N.intl.string(A.default["3oUYnv"]),
                                            value: uT(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(uK, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(uG, {
                    title: N.intl.string(A.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(uB, {
                            label: N.intl.string(A.default.IlDBN3),
                            value: uT(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(uB, {
                            label: N.intl.string(A.default["ZdzKR+"]),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, { count: uT(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(uB, {
                            label: N.intl.string(A.default.cIhN2W),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, {
                                count: uT(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(uB, {
                            label: N.intl.string(A.default["+fOn/q"]),
                            value: uT(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(uB, { label: N.intl.string(A.default.kIHga0), value: uT(v.max_build_attempts) }),
                        (0, a.jsx)(uB, { label: N.intl.string(A.default.Iw03yW), value: uT(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var cm = n(237528),
    ch = n(629584),
    cg = n(531893);
function cp(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: cg.ut,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: N.intl.string(A.default.h1SE6R),
              }),
          });
}
function cx(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: cg.qf,
              children: [
                  (0, a.jsx)(Y.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: N.intl.string(A.default.h1SE6R),
                  }),
                  (0, a.jsx)(Y.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: N.intl.string(A.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: cg.qf,
              children: [
                  (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function cv(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: cg.ps,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: N.intl.string(A.default.V7Ri8H),
              }),
          })
        : null;
}
var cj = n(109079);
let cb = i.memo(function (e) {
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
        className: cj.vK,
        children: [
            (0, a.jsx)(Y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: cj.Mt,
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
            (0, a.jsx)(Y.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: cj.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: cj.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: cj.Cq, children: (0, a.jsx)(cm.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: cj.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(cm.v, { text: N.intl.string(A.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(Y.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(em.D, {
                                      className: cj.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": N.intl.string(A.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(n5.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(eT._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(Y.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  N.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? A.default.kUhyUv : A.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(Y.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: cj.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(Y.E, {
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
function cy(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([oQ.A], () => oQ.A.getLogs(t), [t]),
        l = (0, s.bG)([oQ.A], () => oQ.A.getHistoryState(t, "logs")),
        [r, o] = i.useState("all"),
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
        f = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && f.current?.scrollToBottom();
    }, [d]);
    let h = i.useCallback(() => {
            let e = f.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        g = i.useMemo(
            () =>
                u$.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return uL(e);
                            case "web":
                                return N.intl.string(A.default.IVzfVV);
                            default:
                                return N.intl.string(A.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: cj.$F,
        children: [
            (0, a.jsxs)("div", {
                className: cj.y4,
                children: [
                    (0, a.jsx)(ch.I, {
                        look: "pill",
                        "aria-label": N.intl.string(A.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => o(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: cj.KT,
                        children: (0, a.jsx)(o0.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: N.intl.string(A.default["m2+37Y"]),
                            "aria-label": N.intl.string(A.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(cp, { state: l }),
            (0, a.jsxs)(lj.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: cj.sx,
                children: [
                    (0, a.jsx)(cv, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(cx, {
                              state: l,
                              emptyTitle: N.intl.string(A.default.S7qlPG),
                              emptyBody: N.intl.string(A.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Y.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: N.intl.string(A.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(cb, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function ck(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(uG, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: N.intl.string(A.default.umcjif),
                      }),
        })
    );
}
function cw(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(uB, {
                      label: N.intl.formatToPlainString(A.default["01ZMS4"], { env: uL(n) }),
                      value: ((t = l.connected), N.intl.string(t ? A.default.Wv025I : A.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(uB, {
                      label: N.intl.string(A.default["z1dh+F"]),
                      value: uT(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${uP(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(uB, { label: N.intl.string(A.default.Iz5GnJ), value: uT(l.guild_count) }),
                  (0, a.jsx)(uB, {
                      label: N.intl.string(A.default["7UqtNv"]),
                      value: uT(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? N.intl.formatToPlainString(A.default.MasSly, {
                                    code: l.last_close_code,
                                    time: uP(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(uB, {
                          label: N.intl.string(A.default["x3+JXJ"]),
                          value: uT(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(uB, { label: uL(n), value: N.intl.string(A.default.lTHQss) });
}
function cA(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(uB, {
        label: uL(t),
        value: N.intl.formatToPlainString(A.default["Xq+wHT"], {
            requests: uT(n.requests),
            failures: uT(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? N.intl.formatToPlainString(A.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: uP(n.last_failure.at),
                  })
                : N.intl.formatToPlainString(A.default["7KlGT6"], { time: uP(n.since) }),
    });
}
function cN(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(uB, {
                label: N.intl.formatToPlainString(A.default["92gVTm"], { env: uL(t) }),
                value: uT(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    uB,
                    {
                        label: N.intl.formatToPlainString(A.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? N.intl.formatToPlainString(A.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? N.intl.formatToPlainString(A.default.wxAWNv, { time: uP(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function cS(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(uB, {
        label: uL(t),
        value: N.intl.formatToPlainString(A.default.suAOj9, { calls: uT(n.calls), errors: uT(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function cC(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(uG, {
            title: t,
            children: (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: N.intl.string(A.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(uG, {
        title: t,
        children: [
            (0, a.jsx)(uB, {
                label: N.intl.string(A.default.xtD4Zp),
                value: uT(n.requests),
                hint: N.intl.formatToPlainString(A.default["7KlGT6"], { time: uP(n.since) }),
            }),
            (0, a.jsx)(uB, { label: N.intl.string(A.default.gfRhR3), value: uT(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(uH, {
                              label: N.intl.string(A.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: u_,
                          }),
                          (0, a.jsx)(uB, {
                              label: N.intl.string(A.default.mSKImM),
                              value: u_(r),
                              hint: N.intl.formatToPlainString(A.default.JqMU05, {
                                  total: u_(n.cpu_ms_total),
                                  wall: u_(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(uB, {
                      label: N.intl.string(A.default.LEJ5r3),
                      value: N.intl.string(A.default["2Ekb2b"]),
                      hint: N.intl.string(A.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(uB, { label: N.intl.string(A.default.xvmL1D), value: u_(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(uB, { label: N.intl.string(A.default["4sQYwH"]), value: uT(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(uB, {
                label: N.intl.string(A.default.bQenOy),
                value: uT(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: N.intl.formatToPlainString(A.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(uB, { label: N.intl.string(A.default.xgpn4Y), value: uR(n.build) }),
        ],
    });
}
function cE(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: N.intl.string(A.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: N.intl.string(A.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: N.intl.string(A.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(uG, {
        title: N.intl.string(A.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(uB, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(uB, {
                                  label: N.intl.formatToPlainString(A.default.u7kJJ4, { env: n }),
                                  value: uM(l.r2_bytes),
                                  hint: N.intl.formatToPlainString(
                                      l.r2_truncated ? A.default.lH0oQw : A.default.m9h02S,
                                      { count: uT(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(uH, {
                                      label: N.intl.formatToPlainString(A.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: uM,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function cI(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: ci.Mf,
        children: [
            (0, a.jsx)(uq, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(cC, {
                            title: N.intl.string(A.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(cC, {
                            title: N.intl.string(A.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(cE, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ck, {
                                title: N.intl.string(A.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cw, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ck, {
                                title: N.intl.string(A.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cA, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ck, {
                                title: N.intl.string(A.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cN, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ck, {
                                title: N.intl.string(A.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cS, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(uV, { analytics: t.analytics }),
                        (0, a.jsxs)(uG, {
                            title: N.intl.string(A.default.fQMpFp),
                            children: [
                                (0, a.jsx)(uB, {
                                    label: N.intl.string(A.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? uR(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(uB, {
                                    label: N.intl.string(A.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? uR(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var cM = n(592465);
function c_(e) {
    let { projectId: t, onClose: n } = e,
        l = no(),
        [r, u] = i.useState(() => (l && na?.projectId === t ? "trace" : "logs")),
        c = (0, s.bG)([sF.A], () => sF.A.getStatus(t), [t]),
        d = (0, s.bG)([sF.A], () => sF.A.getFetchState(t), [t]),
        f = i.useCallback(() => {
            ((0, oZ.R7)(t), (0, oZ.DK)(t));
        }, [t]);
    (i.useEffect(() => f(), [f]), i.useEffect(() => (0, p.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == na || na.projectId !== e) return null;
            let { traceId: t } = na;
            return ((na = null), t);
        })(t);
        return null != e && (uS(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        ni(t, () => {
            m() && u("trace");
        }));
    let h = i.useCallback(() => {
            (0, to.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sF.A.getStatus(t),
                        last_turn_usage: sF.A.getLastTurnUsage(t),
                        last_compaction: sF.A.getLastCompaction(t),
                        last_compaction_decline: sF.A.getLastCompactionDecline(t),
                        timing_traces: sF.A.getTimingTraces(t),
                        logs: oQ.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, o.P0)({ text: N.intl.string(A.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = N.intl.string(A.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: cM.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(lg.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lg.Ay.Icon, {
                            icon: s6.CopyIcon,
                            tooltip: N.intl.string(A.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lg.Ay.Icon, { icon: et.P, tooltip: N.intl.string(N.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lg.Ay.ChannelIcon, { icon: t9.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lg.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cM.rf,
                children: [
                    (0, a.jsxs)(oY.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => u(e),
                        "aria-label": N.intl.string(A.default.RvvWIh),
                        className: cM.vR,
                        children: [
                            (0, a.jsx)(oY.V.Item, { id: "logs", children: N.intl.string(A.default["+VRYCm"]) }),
                            (0, a.jsx)(oY.V.Item, { id: "worker", children: N.intl.string(A.default["50D0FZ"]) }),
                            (0, a.jsx)(oY.V.Item, { id: "agent", children: N.intl.string(A.default.UkbTK1) }),
                            l ? (0, a.jsx)(oY.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(cy, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(cI, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === r && l
                            ? (0, a.jsx)(uI, { projectId: t })
                            : (0, a.jsx)(cf, { projectId: t, status: c, fetchState: d, onRefresh: f }),
                ],
            }),
        ],
    });
}
var cT = n(333007),
    cP = n(365912),
    cR = n(775121),
    cL = n(873715);
function c$(e) {
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
let cD = Object.freeze({ x: -1, y: -1 });
function cO(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = c$(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cz = n(470779);
function cF(e) {
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
            closing: f,
            onUploadFile: m,
        } = e,
        {
            drafts: h,
            addFiles: g,
            pasteFiles: p,
            removeDraft: x,
            settled: v,
            takeRefs: j,
        } = su({ projectId: t, surface: "design", onUploadFile: m }),
        b = i.useRef(null),
        y = (d || h.length > 0) && v && !f,
        k = i.useCallback(() => {
            if (!y) return;
            let e = j();
            u(e.length > 0 ? e : void 0);
        }, [y, j, u]),
        [w, S] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => S(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let C = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = C.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => I({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let M = E?.height ?? 44,
        _ = l.left + 8,
        T = l.top + 8,
        P = Math.max(n.x, _),
        R = Math.min(Math.max(n.y + 32 + 4, T), Math.max(T, l.top + l.height - M - 8));
    return (0, a.jsxs)("div", {
        ref: C,
        className: W()(cz.M0, { [cz.ho]: w && !f, [cz.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: b,
                type: "file",
                multiple: !0,
                className: cz.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(eP.m, {
                position: "bottom",
                text: N.intl.string(A.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: cz.tY,
                    onClick: () => b.current?.click(),
                    "aria-label": N.intl.string(A.default.lgvqSB),
                    children: (0, a.jsx)(eu.H, { size: "custom", color: "currentColor", className: cz.WW }),
                }),
            }),
            (0, a.jsx)(lH.y, {
                autoFocus: !0,
                rows: 1,
                className: cz.hF,
                value: s,
                placeholder: "" === r ? N.intl.string(A.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": N.intl.string(A.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: f ? void 0 : p,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), k());
                },
            }),
            h.length > 0
                ? (0, a.jsx)("div", {
                      className: cz.ZO,
                      children: h.map((e) => (0, a.jsx)(sc, { draft: e, onRemove: x }, e.localId)),
                  })
                : null,
        ],
    });
}
var cU = n(192888);
function cq(e, t) {
    return (0, cU.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(cO, () => ({ status: "failed" }));
}
var cG = n(108308);
let cB = { x: 25, y: 21 };
function cH(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function cK(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function cV(e, t, n, l) {
    let r = cK(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function cW(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function cJ(e) {
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
function cX(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: o } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nC(u),
        f = (0, nu.Zv)(u),
        m = (0, tb.useHasAnyModalOpen)(),
        h = (0, s.bG)([eZ.default], () => eZ.default.getCurrentUser()),
        x = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(null),
        [k, w] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(null),
        [M, _] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        R = i.useRef(null),
        [L, $] = i.useState(null),
        [D, O] = i.useState(!1),
        [z, F] = i.useState(null),
        [U, q] = i.useState(null),
        G = i.useRef(!1),
        [B, H] = i.useState(!1),
        [K, V] = i.useState(null),
        W = c && !f && !m;
    null == z || (W && z.projectId === u) || F(null);
    let J = z?.projectId ?? null;
    (i.useEffect(() => {
        if (null != J) return () => rk(J, "design");
    }, [J]),
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
                j((t) => (cH(t, e) ? t : e));
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
            if (null == t) return void C(!0);
            (w(!0), C(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, cL.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        w(!1);
                        let n = "completed" === t.status ? cJ(t.response) : null;
                        null == n ? C(!0) : (y(n), nA(u, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (w(!1), C(!0));
                    },
                ),
                () => {
                    e = !1;
                }
            );
        }, [W, r, u]));
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!W || null == v || null == u) return;
        if (null == b) {
            X.current = v;
            return;
        }
        if (cH(X.current, v)) return;
        let e = window.setTimeout(() => {
            let e = r();
            if (null == e) return;
            X.current = v;
            let t = [];
            for (let e = 0; e < d.length; e += 24) t.push(d.slice(e, e + 24));
            (0 === t.length && t.push([]),
                t.forEach((t, n) => {
                    let l = t.map((e) => ({
                        action: "locate",
                        target: { ref: e.target.ref, selector: e.target.path },
                    }));
                    (0, cL.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !el.current) return;
                        let l = cJ(e.response);
                        null != l && (y(l), nA(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = c$(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = ny(u)).active &&
                                0 !== r.size &&
                                nk(u, {
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
                    (I(null), F(null), V(null), y(null));
                };
        }, [W]));
    let Z = i.useRef(null),
        et = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = W), W || ((Z.current = null), (et.current = null), (R.current = null), _(!1)));
    }, [W]);
    let er = i.useCallback(
            function e() {
                if (en.current) return;
                let t = Z.current;
                if (null == t) return;
                Z.current = null;
                let n = r();
                null != n &&
                    ((en.current = !0),
                    cq(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || c2(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? I(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = nf(t.target);
                                ($((t) => (c1(t, e) ? t : e)),
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
            (q({ at: z.at, label: z.label, draft: z.draft, instant: e }), H(e), F(null));
        }, [z]);
    (i.useEffect(() => {
        if (!B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => H(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]),
        i.useEffect(() => {
            if (null == U) return;
            let e = setTimeout(() => q(null), cZ);
            return () => clearTimeout(e);
        }, [U]));
    let ei = null == b || null == v || b.viewport.width < 1 ? 1 : v.width / b.viewport.width,
        es = null != b || S,
        eo = i.useMemo(() => b?.elements ?? [], [b]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: v, scale: ei };
    }, [v, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (rk(u, "design"),
                    V(null),
                    (G.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nf(e) }));
            },
            [u],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        ef = i.useCallback(() => {
            let e = R.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ef);
    let em = i.useCallback(
            (e) => {
                if (null == v || null != K) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), ef(), _(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > c0 || Math.abs(e.clientY - z.at.y) > c0) && (G.current = !0);
                    return;
                }
                if (!es) return void I(null);
                let t = ed(e, v);
                if (D) {
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
                        n = null != e && c2(e, v, ei) ? null : e;
                    if (null != n) {
                        let e = nf(n);
                        $((t) => (c1(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (Z.current = n), er());
            },
            [v, ei, es, ed, D, eo, z, K, ef, er],
        ),
        eh = null == K ? null : d.find((e) => e.id === K.id),
        eg = W && (M || z?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && cq(e, cD);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (_(!1), I(null), (et.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !M || !es || D || null != z || null != K) return;
        let e = R.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (Z.current = l), er());
    }, [W, M, es, D, z, K, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != z || null != K) {
                    (ea(), V(null));
                    return;
                }
                if (null == E || null == v) return;
                let t = ed(e, v);
                ec(
                    E,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nc
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(E, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [E, v, ed, z, K, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (I(null), nw(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != z
                    ? ea()
                    : K?.confirmingRemove === !0
                      ? V({ ...K, confirmingRemove: !1 })
                      : null != K
                        ? V(null)
                        : ev());
        }, [u, z, K, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = ev));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                cR.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        cR.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            (0, n0.vq)(t) &&
                ek.current?.contains(t) !== !0 &&
                o?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, cP.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ey.current();
        }
    }, [W, o]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != z || null != K || 0 === eo.length) return;
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
                    ec(E, nc, { x: (v?.left ?? 0) + E.rect.x * ei, y: (v?.top ?? 0) + E.rect.y * ei }));
            },
            [u, z, K, eo, E, ec, ej, v, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == u ||
                    null == z ||
                    ((nd(z.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, p.dv)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nf(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${ng}${r}${np}${nh(e)}
${t.trim()}`;
                            })(z.target, z.draft),
                            e,
                        ),
                        ea(),
                        I(null)));
            },
            [u, z, ea],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eS = i.useCallback(() => {
            if (null != u && null != K && null != x && nd(K.draft)) {
                var e, t;
                let n, l;
                ((e = K.id),
                    (t = K.draft.trim()),
                    null != (l = (n = ny(u)).annotations.find((t) => t.id === e)) &&
                        nN(l, x) &&
                        nk(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...K, editing: !1 }));
            }
        }, [u, K, x]),
        eC = i.useCallback(() => {
            if (null != u && null != K && null != x) {
                var e;
                let t, n;
                ((e = K.id),
                    null != (n = (t = ny(u)).annotations.find((t) => t.id === e)) &&
                        nN(n, x) &&
                        nk(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [u, K, x]),
        eE = c
            ? k
                ? N.intl.string(A.default["Eb/YV9"])
                : S
                  ? N.intl.string(A.default.FD30bh)
                  : N.intl.formatToPlainString(A.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != v,
        eM = M && null == K,
        e_ = z?.target ?? eh?.target ?? null,
        eT = z ?? U,
        eP = z ?? (U?.instant === !0 ? null : U),
        eR =
            null != eh && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = cW(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(cV(eh.target, eh.anchor, v, ei), v)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            cq(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, cT.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: cG.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: cG.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: cG.MT,
                                      style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": N.intl.string(A.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: ew,
                                  }),
                                  null != E && null == E.marker && null == z && null == K
                                      ? (0, a.jsx)(c3, { box: cK(E, v, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: cG.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: cG.xz,
                                          "data-shown": null != E && null == K && null == z ? "" : void 0,
                                          "data-instant": B ? "" : void 0,
                                          children: (0, a.jsxs)(Y.E, {
                                              variant: "text-xs/medium",
                                              className: cG.Ux,
                                              children: [
                                                  null == L
                                                      ? null
                                                      : (0, a.jsx)("span", { className: cG.Tl, children: L.kind }),
                                                  null == L || "" === L.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: cG.kh,
                                                            children: [" ", L.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: cG.Y,
                                      children: eM ? (0, a.jsx)("div", { className: cG.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: cG.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: cG.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, a.jsxs)(Y.E, {
                                                    variant: "text-xs/medium",
                                                    className: cG.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: cG.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: cG.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: cG.D0, style: cK(e_, v, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = cV(e.target, e.anchor, v, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cG.xL,
                                              style: { ...cW(n, v), width: 24, height: 24 },
                                              "aria-label": N.intl.formatToPlainString(A.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nm(e.target),
                                              }),
                                              "aria-expanded": K?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == z && V(l);
                                              },
                                              onFocus: () => {
                                                  null == z && V(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), V(l));
                                              },
                                              children: (0, a.jsx)(cY, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(cF, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: v,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != z && nd(eT.draft),
                                            onChange: (e) => {
                                                null != z && F({ ...z, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eN,
                                            closing: null == z,
                                        }),
                                  null != eh && null != K && null != eR
                                      ? (0, a.jsxs)(cQ, {
                                            point: eR,
                                            frame: v,
                                            authorId: eh.authorId,
                                            title: nm(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                K.confirmingRemove ? V({ ...K, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                K.editing || K.confirmingRemove || V(null);
                                            },
                                            children: [
                                                K.editing
                                                    ? (0, a.jsx)(Q.f, {
                                                          autoFocus: !0,
                                                          label: N.intl.string(A.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: K.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => V({ ...K, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eS());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cG.aC,
                                                          children: eh.comment,
                                                      }),
                                                nN(eh, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: cG.eB,
                                                          children: K.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cG.nv,
                                                                            children: N.intl.string(A.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...K, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eC,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default.friIzR),
                                                                            onClick: () =>
                                                                                V({
                                                                                    ...K,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        K.editing
                                                                            ? (0, a.jsx)(ee.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nd(K.draft),
                                                                                  text: N.intl.string(A.default.iicRP9),
                                                                                  onClick: eS,
                                                                              })
                                                                            : (0, a.jsx)(ee.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: N.intl.string(
                                                                                      A.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      V({
                                                                                          ...K,
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
function cY(e) {
    let { authorId: t } = e,
        n = (0, s.bG)([eZ.default], () => eZ.default.getUser(t), [t]);
    return (0, a.jsx)(a3.eu, {
        src: null == n ? null : a6.Ay.getUserAvatarURL(n),
        size: a4._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function cQ(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(cB);
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
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: y, top: k, "--custom-conjure-card-origin-x": `${w}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: cG.Nr,
        style: N,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: cG.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: cG.ip, children: (0, a.jsx)(cY, { authorId: d }) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cG.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: cG.zI, children: p }),
        ],
    });
}
let cZ = 300,
    c0 = 2;
function c1(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function c2(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function c3(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: cG.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var c4 = n(659723),
    c7 = n(697744),
    c6 = n(130324);
function c5(e) {
    let t = (0, c7.c)(),
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
    let r = (0, sb.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function c8(e) {
    let { className: t } = e,
        { Component: n, events: l } = c5(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: c6.o,
                children: N.intl.string(A.default.AyiQEp),
            }),
        ],
    });
}
var c9 = n(251363),
    de = n(944142),
    dt = n(532247),
    dn = n(501628);
function dl(e) {
    let { progress: t } = e,
        { Component: n } = c5(1500),
        l = ns.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: dn.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: dn.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function dr(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        o = null != t && null != n && n === l,
        u = (0, s.bG)([de.A], () => (o ? de.A.getLiveReload(t) : null), [o, t]),
        c = (0, ll.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = (function (e, t) {
            let n = (0, dt.dv)(e),
                [l, r] = i.useState(null),
                [a, o] = i.useState(n);
            a !== n && (o(n), r(null == n ? (0, dt.QP)(e, a) : null));
            let u = (0, s.bG)(
                    [nY.A],
                    () => {
                        let e = nY.A.getFrame(t);
                        return (0, nV.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, c9.o)(null, t) && e();
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
        m = (0, dt.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eK.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: dn.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(dl, { progress: m }),
                  })
                : null,
        ],
    });
}
var da = n(343030),
    di = n(317608),
    ds = n(338941),
    du = n(964404);
let dc = { width: 1 / 0, height: 1 / 0 };
function dd(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dc;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var df = n(702083);
function dm(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, s.cf)([lr.A], () => ({
            mobile: lr.A.isBuilderPreviewMobile(),
            landscape: lr.A.isBuilderPreviewLandscape(),
        })),
        r = i.useRef(null),
        [o, u] = i.useState(null);
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
    let c = null != o && o.width > 0 ? o : null,
        d = n ? dd(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: W()(df.dw, { [df.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: W()(df.R9, { [df.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var dh = n(347927);
function dg(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: W()(dh.Bf, l && dh.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: dh.Ux,
                children: [
                    (0, a.jsx)(ek.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(Y.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var dp = n(957272);
function dx(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, ds.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, nV.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = nY.A.getFrame(e);
                    if (null == t || nQ.A.getWindowOpen(eJ.MLl.ACTIVITY_POPOUT)) return;
                    let n = nY.A.getMainFrame()?.id === e;
                    t.intent === nV.sV.MAIN
                        ? (n || ln.A.promoteFrame(e), ln.A.resetFrameLayoutModes(e))
                        : n && ln.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = nY.A.getFrame(u)) &&
                        ((0, nV.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        du.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === nV.sV.INLINE && ln.A.promoteFrame(u),
                              ln.A.updateFrameLayoutMode({ frameId: u, layoutMode: nV.y0.PIP }))
                            : e.intent === nV.sV.MAIN && ln.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === ds.n.Launched)
    ) {
        let e = (0, a.jsx)(di.A, { frameId: s.id, level: da.A.WithinAppContent, className: dp.Z7, overlay: r });
        return (0, nK.Q5)(n) ? (0, a.jsx)(dm, { children: e }) : e;
    }
    return (0, a.jsx)(dv, { state: o });
}
function dv(e) {
    let { state: t } = e;
    switch (t) {
        case ds.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: dp.qs,
                children: (0, a.jsx)(dg, {
                    title: N.intl.string(A.default["9kpdo7"]),
                    body: N.intl.string(A.default.iIA8Nj),
                }),
            });
        case ds.n.NoApplication:
            return (0, a.jsx)(c8, { className: dp.qs });
        case ds.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: dp.qs,
                children: (0, a.jsx)(dg, {
                    title: N.intl.string(A.default["7k4GyN"]),
                    body: N.intl.string(A.default.zdIy3R),
                }),
            });
        case ds.n.Error:
            return (0, a.jsxs)("div", {
                className: dp.qs,
                children: [
                    (0, a.jsx)(ek.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: N.intl.string(A.default.lTPbnG),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: dp.tj,
                        children: N.intl.string(A.default.e6GiAZ),
                    }),
                ],
            });
        case ds.n.AwaitingLaunch:
        case ds.n.Loading:
            return (0, a.jsx)("div", { className: dp.qs, children: (0, a.jsx)(en.y, {}) });
    }
}
var dj = n(308528),
    db = n(334738),
    dy = n(688438),
    dk = n(355622),
    dw = n(365971),
    dA = n(703462);
function dN(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: dA.f,
        children: [
            (0, a.jsx)(aj.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function dS() {
    return (0, a.jsx)("div", { className: dA.f, children: (0, a.jsx)(en.y, {}) });
}
function dC(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: o } = (0, nU.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, s.bG)([lV.A], () => {
            if (null == u) return null;
            let e = lV.A.getDMFromUserId(u);
            return null != e ? lV.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && dj.A.preload(eJ.ME, t);
        }, [t]),
        (n = (0, s.bG)([s0.A], () => s0.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, dw.Xg)();
            return (
                (0, db.yl)(t, e),
                () => {
                    (0, db.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, f] = i.useState(null),
        m = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            dj.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || f(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    o && null == r)
        ? (0, a.jsx)(dS, {})
        : null == u || m
          ? (0, a.jsx)(dN, { message: N.intl.string(A.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(dS, {})
            : (0, a.jsx)("div", {
                  className: dA.g,
                  children: (0, a.jsx)(dy.A, { channel: c, guild: null, chatInputType: dk.oU.SIDEBAR }, c.id),
              });
}
var dE = n(887909),
    dI = n(570962),
    dM = n(998475);
function d_(e) {
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
        obscured: f,
    } = (0, dE.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: dM.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: dM.rf,
                children: (0, a.jsx)(dI.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: dM.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: dM.z3,
                                      children: [
                                          (0, a.jsx)(ek.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(Y.E, {
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
                                className: W()(dM.Qs, c ? dM.cw : null, d ? dM.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: dM.o1,
                      children: s.map((e, t) => (0, a.jsx)(ee.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var dT = n(765671),
    dP = n(269094),
    dR = n(714917),
    dL = n(463660),
    d$ = n(582063);
let dD = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function dO() {
    (0, o.P0)({ text: N.intl.string(A.default.jj3abP), variant: "critical" });
}
function dz(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = N.intl.string(A.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ei.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(dF, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: d$.m2,
                        children: (0, a.jsx)(eP.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(tr.K, {
                                "aria-label": r,
                                icon: tl.SettingsIcon,
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
                accept: dD.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (dD.includes(n.type)
                                ? n.size > h.aI
                                    ? (0, o.P0)({ text: N.intl.string(A.default.T8Spiu), variant: "critical" })
                                    : (0, dL.M$)(t, n).catch(dO)
                                : (0, o.P0)({ text: N.intl.string(A.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function dF(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, s.bG)([dR.A], () => dR.A.getBackground(t)),
        i = r?.blur === !0,
        o = r?.imageEtag ?? null;
    return (0, a.jsxs)(es.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": N.intl.string(A.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eo.rX, {
                children: [
                    (0, a.jsx)(eo.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: N.intl.string(A.default.uQpDky),
                        icon: rs.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eo.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: N.intl.string(A.default.AiAz8J),
                        icon: u7.RetryIcon,
                        disabled: null == o,
                        action: () => {
                            (n(), (0, dL.Og)(t).catch(dO));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eo.rX, {
                children: (0, a.jsx)(eo.fP, {
                    id: "conjure-overlay-background-blur",
                    label: N.intl.string(A.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, dL.Y1)(t, !i) || dO();
                    },
                }),
            }),
        ],
    });
}
let dU = "/assets/7cec34541705c795.webp";
function dq(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, ds.A)({ applicationId: t, surface: nV.ZN });
    return (i.useEffect(() => {
        let e = (0, nV.VA)(t, nV.ZN);
        return () => (0, nq.r)(e);
    }, [t]),
    r.state !== ds.n.Launched)
        ? (0, a.jsx)(dv, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(dv, { state: ds.n.Loading })
          : (0, a.jsx)(dG, { lifecycle: r, projectId: n, size: l });
}
function dG(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, dT.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: d$.JH,
        children: [
            (0, a.jsx)(dB, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: d$.dw,
                children: (0, a.jsx)("div", {
                    className: d$.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(dP.A, { frame: t.frame, application: t.application, className: d$.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(dz, { projectId: n }) : null,
        ],
    });
}
function dB(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([dR.A], () => (null != t ? dR.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, o] = i.useState(null),
        [u, c] = i.useState(null),
        [d, f] = i.useState(!1);
    (i.useEffect(() => {
        if (null != n) return;
        let e = setTimeout(() => f(!0), 2e3);
        return () => clearTimeout(e);
    }, [n]),
        i.useEffect(() => {
            if (null == t || null == l) return;
            let e = !1;
            return (
                (0, dL.Mg)(t, l).then(
                    (t) => {
                        e || o(t);
                    },
                    () => {
                        e || o(dU);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let m = null != l ? r : null,
        h = null == l || (null != m && m === u) ? dU : m;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: W()(d$.LO, { [d$.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === m && c(m);
              },
          })
        : null;
}
var dH = n(409478),
    dK = n(652227);
function dV(e) {
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
        overlayWidgetSize: d = nT,
        projectId: f,
        frameOverlay: m,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: dK.q, children: (0, a.jsx)(en.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: dK.q,
                children: null == s.authorizeProps ? (0, a.jsx)(en.y, {}) : (0, a.jsx)(d_, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: dK.R,
                      children: [
                          (0, nR.yf)(o, u)
                              ? (0, a.jsx)(dx, { applicationId: t, surface: l, launch: r, frameOverlay: m })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: dK.q,
                                        children: (0, a.jsx)(dg, {
                                            wide: !0,
                                            title: N.intl.string(A.default["08U+YO"]),
                                            body: N.intl.string(A.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(dH.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(dq, { applicationId: t, projectId: f, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(dC, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(c8, { className: dK.q });
}
var dW = n(175841),
    dJ = n(750506),
    dX = n(867193),
    dY = n(539197),
    dQ = n(977020);
function dZ(e) {
    let { projectId: t } = e,
        n = (0, dY.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, dY.Ie)(e);
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
        className: dQ.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [dY.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: W()(dQ.hN, dQ.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: W()(dQ.hN, dQ.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: W()(dQ.UE, { [dQ.SP]: n.shown, [dQ.Vq]: n.pressed, [dQ.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var d0 = n(417760);
function d1(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function d2(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function d3(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: o } = (function (e) {
            let t = (0, s.bG)([e1.A], () => null != e && e1.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let o = i.useCallback(() => {
                null != e && (l(!0), (0, p.fu)(e));
            }, [e]);
            return { stop: t ? o : null, stopping: n };
        })(n),
        u = (0, nu.CU)(n),
        c = "controlling" === t,
        d = N.intl.string(c ? (u ? A.default["VJW/5P"] : A.default["+hD2Iz"]) : A.default["h+i1r9"]),
        f =
            null != r
                ? (0, a.jsx)(ee.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: N.intl.string(A.default.oU59sU),
                      loading: o,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: W()(d0.M0, d0.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(oT.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(dW.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "none", className: d0.ID, children: d }),
                  c ? (0, a.jsx)(eK.A, { children: N.intl.string(A.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: d0.lC, children: f }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: d0.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: d0.sp,
                      children: [
                          (0, a.jsx)(dW.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(oT.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: d0.f4,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: d0.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: d0.Rb,
                                            children: N.intl.string(A.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: d0.lC, children: f }) : null,
              ],
          });
}
function d4(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, nu.Zv)(null != n && n === l ? t : null),
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
        c = (0, tb.useHasAnyModalOpen)(),
        d = n4(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!n2(e)) return;
                let t = n1(e);
                null != t && (0, nZ.sP)(t);
            })(s);
    }, [o, d, s]);
    let [f, m] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = d1(r());
            m((t) => (d2(t, e) ? t : e));
            let t = null == h ? null : d1(h);
            (x((e) => (d2(e, t) ? e : t)), null != h && (0, dX.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, dX.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != f,
        b = j && "controlling" === u && !c,
        y = null != f && f.width < 420,
        k = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        w =
            null == f
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
                  })(f, p),
        S = (function () {
            let [e] = i.useContext(dJ.uY),
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
                      className: d0.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: d0.QF,
                          children: (0, a.jsx)(d3, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, cT.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: d0.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? N.intl.string(A.default.oWcemF)
                                : "handoff" === u
                                  ? N.intl.string(A.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, cT.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: d0.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: d0.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(dZ, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var d7 = n(399503),
    d6 = n(853555),
    d5 = n(558960),
    d8 = n(187645);
let d9 = new Map(),
    fe = !1;
function ft() {
    let e = new Map();
    for (let t of new Set([...e1.A.getActivityOrderedProjectIds(), ...(0, nu.T7)()])) {
        if (!e1.A.isThinking(t) && !(0, nu.wK)(t)) continue;
        let n = (function (e) {
            let t = G.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, nK.Rc)(t);
            return (0, nV.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...d9]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            d9.delete(t),
            n.unregisterLookup(),
            d5.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        d9.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = d8.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    fn(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (d9.set(e, l),
                    (l.unregisterLookup = (0, d6.Ng)(e, () => (0, c9.o)(n, t))),
                    d5.A.registerFrameTarget(t, n, da.A.Backstage, void 0));
            })(t, n);
    for (let e of d9.values()) fn(e.element);
}
function fn(e) {
    let t = lr.A.isBuilderPreviewMobile();
    e.classList.toggle(d8.L, !t);
    let n = t ? dd(lr.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var fl = n(873727),
    fr = n(147248),
    fa = n(418842),
    fi = n(363195),
    fs = n(818023);
let fo = null;
var fu = n(602853),
    fc = n(517461),
    fd = n(761929),
    ff = n(487336);
function fm(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, fu.r)(er.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, fc.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, rH.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, fd.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: fd.R.HORIZONTAL_LEFT,
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
        className: ff.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: ff.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: ff.kL, style: { width: m }, children: r }),
        ],
    });
}
var fh = n(541940);
function fg(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: f,
            showsFrame: m,
        } = e,
        [h, g] = i.useState(null),
        p = (0, ll.A)(l, o),
        x = p?.id ?? null;
    (!(function (e, t) {
        let n = (0, s.bG)([fi.A], () => (0, fl.x4)(fi.A.theme)),
            l = (0, s.bG)([fr.A], () => fr.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: o,
                forcedColors: u,
                underlineLinks: c,
            } = (0, s.cf)([sn.Ay], () => ({
                reducedMotion: sn.Ay.useReducedMotion,
                fontScale: (0, fl.U0)(),
                highContrast: sn.Ay.isHighContrastModeEnabled,
                forcedColors: sn.Ay.useForcedColors,
                underlineLinks: sn.Ay.alwaysShowLinkDecorations,
            })),
            d = ns.hH.useSetting(),
            f = (0, fa.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, c9.o)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, fl.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: o,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, cU.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, o, d, e, r, f, c]),
            v = i.useRef(x);
        i.useLayoutEffect(() => {
            v.current = x;
        });
        let j = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    ((m.current = !1), h.current || v.current());
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
                let n = (0, c9.o)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, c9.o)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, d6.Ng)(t, () => (0, c9.o)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, c9.o)(h, x), [h, x]),
        j = i.useCallback(() => (m ? (0, c9.o)(h, x) : h), [m, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: W()(fh.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(d4, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: g, className: fh.fm, children: d }),
                ],
            }),
            f,
            (0, a.jsx)(cX, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function fp(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: o,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        onCloseChat: f,
        chatHeaderAction: m,
        onRestoreVersion: h,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: S,
        overlayWidgetSize: C,
    } = e;
    (0, d7.k)(t, S);
    let E = o.type === nL.U.MAIN || (0, nK.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, s.cf)([lr.A], () => ({
            mobile: lr.A.isBuilderPreviewMobile(),
            landscape: lr.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fs.aX.LANDSCAPE : fs.aX.PORTRAIT), (fo = e));
                else {
                    if (fo !== e) return;
                    ((l = fs.aX.UNHANDLED), (fo = null));
                }
                lx.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let I = i.useRef(null),
        [M, _] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, lp.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, lp.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (E) return ((0, la.HV)(l), () => (0, la.HV)(null));
        }, [l, E]),
        i.useEffect(() => {
            null != t &&
                ((0, p.Hc)(t),
                fe ||
                    ((fe = !0),
                    e1.A.addChangeListener(ft),
                    G.Ay.addChangeListener(ft),
                    nY.A.addChangeListener(ft),
                    lr.A.addChangeListener(ft),
                    (0, nu.W3)(ft),
                    ft()));
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
        i.useLayoutEffect(() => () => lv(0), []));
    let T = Math.max(360, M - 320),
        P = d || E;
    return (0, a.jsx)("div", {
        ref: I,
        className: fh.LB,
        children: (0, a.jsx)(fg, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: c,
            showsFrame: (0, nR.yf)(k, w),
            mainClassName: null == c ? void 0 : W()(fh.ez, { [fh.zt]: d }),
            content: (0, a.jsx)(dV, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: S,
                overlayWidgetSize: C,
                projectId: t,
                frameOverlay: (0, a.jsx)(dr, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && P
                    ? (0, a.jsx)(fm, {
                          open: d,
                          maxWidth: T,
                          onWidthChange: lv,
                          children: (0, a.jsx)("div", {
                              className: fh.cO,
                              children: x
                                  ? (0, a.jsx)(c_, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(c4.A, { projectId: t }),
                                            (0, a.jsx)(lg.Ay, {
                                                "aria-label": N.intl.string(N.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        m,
                                                        null == f
                                                            ? null
                                                            : (0, a.jsx)(lg.Ay.Icon, {
                                                                  icon: et.P,
                                                                  tooltip: N.intl.string(A.default.JD6Oit),
                                                                  onClick: f,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lg.Ay.Title, {
                                                    children: N.intl.string(N.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: fh.cb,
                                                children: (0, a.jsx)(
                                                    oX,
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
function fx(e) {
    var t;
    let l,
        r,
        u,
        { project: d, projectsLoaded: f, onBack: m, guildId: h } = e,
        [g, x] = i.useState(!0),
        [v, j] = i.useState(!1),
        b = no(),
        y = i.useCallback(() => x(!0), []),
        k = i.useCallback(() => {
            (j(!1), x(!0));
        }, []),
        { restoreState: w, handleRestoreVersion: E } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(!0),
                u = i.useRef(!1);
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
                            if (null == e || u.current) return;
                            let c = e.id;
                            function d() {
                                return s.current && a.current === c;
                            }
                            ((u.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, nI.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, o.P0)({
                                                        text: N.intl.formatToPlainString(A.default.Z4n6LX, {
                                                            title: (0, nE.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, nM.c)(c, r);
                                                null != e && (0, o.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[vibegrations] version restore failed", c, e),
                                                (0, o.P0)({
                                                    text: N.intl.string(A.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        d() && (u.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(d, k),
        M = d?.id ?? null,
        {
            integrationStatus: _,
            isPreviewApplicationLoading: T,
            checkingIntegration: P,
            previewReady: R,
            hasFrame: L,
            needsPermissionReview: $,
            installAuthorizeProps: D,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                o = i.useRef(null);
            a.current = r;
            let u = (0, s.bG)([G.Ay], () => (null == r ? null : G.Ay.getIntegrationStatus(r)), [r]),
                { data: c, isLoading: d } = (0, nU.YY)(e?.preview_application_id ?? void 0),
                f = null != r && n !== r,
                m = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                g = (0, nR.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: m,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                p = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    o.current?.abort();
                    let e = new AbortController();
                    ((o.current = e), l(null));
                    try {
                        await (0, q.U1)(r, e.signal);
                    } catch {
                    } finally {
                        e.signal.aborted || o.current !== e || a.current !== r || l(r);
                    }
                }, [r]);
            i.useEffect(
                () => (
                    p(),
                    () => {
                        (o.current?.abort(), (o.current = null));
                    }
                ),
                [p],
            );
            let x = (0, le.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, le.$)(e, x));
                }, [x, e]),
                j = i.useCallback(async () => {
                    try {
                        await v();
                    } catch {}
                    await p();
                }, [p, v]),
                b = i.useMemo(() => {
                    let t = e?.preview_application_id;
                    return null == t || d || f
                        ? null
                        : {
                              ...(0, lt.i)({ applicationId: t, application: c ?? null, guildId: x }),
                              onClose: () => {
                                  j();
                              },
                          };
                }, [f, j, x, d, c, e?.preview_application_id]);
            return {
                integrationStatus: u,
                isPreviewApplicationLoading: d,
                checkingIntegration: f,
                previewReady: m,
                hasFrame: h,
                needsPermissionReview: g,
                installAuthorizeProps: b,
            };
        })(d, h),
        O = (0, s.bG)([li.A], () => (null == M ? void 0 : li.A.getPublishStatus(M)?.previewAppChannels), [M]),
        {
            availability: z,
            activeMode: F,
            setMode: U,
            frameSurface: B,
            frameSurfaceOptions: H,
            setFrameSurface: K,
            appChannel: V,
            setAppChannel: J,
            frameLaunchParams: X,
            widgetApplicationId: Q,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: r,
                    previewApplicationId: a,
                    declaredActivity: o,
                    previewSupportedSurfaces: u,
                    installScope: c,
                    ownerAuthorizationRevoked: d,
                    mainCardOnly: f = !1,
                    supportsOverlay: m = !1,
                    previewAppChannels: h = nW,
                } = e,
                [g, p] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, k] = i.useState(r);
            y !== r && (k(r), p(null), v(null), b(null));
            let w = null != a && a === r ? a : null,
                A = (0, s.bG)([nB.default], () => nB.default.getId()),
                { applicationWidgetConfig: N } = (0, nF.A)(A, w ?? void 0),
                S = N?.surfaces,
                C = (0, nR.yZ)({
                    widgetTop: S?.[nz.m.WIDGET_TOP] != null,
                    widgetBottom: S?.[nz.m.WIDGET_BOTTOM] != null,
                    miniProfile: S?.[nz.m.MINI_PROFILE] != null,
                }),
                E = null != w && (f ? C.hasMainCard : C.hasAny),
                { data: I } = (0, nU.YY)(a ?? void 0),
                M = null != a && I?.bot?.id != null,
                { data: _, isLoading: T } = (0, nU.YY)(r ?? void 0),
                P = o || (0, nG.X)(_),
                R = null != r && T && null == _,
                L = (0, nR.P5)(u, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: M },
                    widgetResolvable: null != w,
                    botDmResolvable: M,
                }),
                $ = (0, nR.Xm)({ installScope: c, ...L, hasOverlay: m, ownerAuthorizationRevoked: d }),
                D = i.useMemo(() => (0, nH.hR)(u), [u]),
                O = (0, nH.PH)(x, D),
                z =
                    ((t = j),
                    (n = O),
                    (l = h),
                    n !== nL.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                F = i.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, nK.Mm)(r)) {
                            let t = e.surface.type !== (0, nH.BR)(O),
                                n = (((0, nV.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (t || n) && (0, nq.r)(e.id);
                        }
                }, [r, O, z]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, nR.Qs)(g, $),
                    setMode: p,
                    frameSurface: O,
                    frameSurfaceOptions: D,
                    setFrameSurface: v,
                    appChannel: z,
                    setAppChannel: b,
                    frameLaunchParams: F,
                    widgetApplicationId: w,
                }
            );
        })({
            applicationId: d?.preview_application_id ?? null,
            previewApplicationId: d?.preview_application_id ?? null,
            declaredActivity: L,
            previewSupportedSurfaces: d?.preview_supported_surfaces,
            installScope: d?.install_scope ?? null,
            ownerAuthorizationRevoked: _?.owner_authorization_revoked === !0,
            supportsOverlay: d?.preview_supported_surfaces?.includes(n_.q7.OVERLAY) === !0,
            previewAppChannels: O,
        }),
        Z =
            ((t = (0, s.bG)(
                [e1.A],
                () =>
                    null == M
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(e1.A.getMessages(M)),
                [M],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : nT);
    ((0, nP.x)(M, (e) => {
        z.modes.includes(e) && U(e);
    }),
        ni(M, () => {
            (x(!0), j(!0));
        }));
    let et = z.modes.includes("frame"),
        {
            previewTargetOptions: en,
            handleSelectPreviewTarget: el,
            mobilePreview: er,
            mobilePreviewLabel: ei,
            handleToggleMobilePreview: es,
            landscapePreview: eo,
            rotatePreviewLabel: eu,
            handleRotatePreview: ec,
            previewSurface: ed,
            previewFrame: ef,
            isRefreshing: em,
            handleRefresh: eh,
        } = (function (e) {
            let {
                    project: t,
                    modes: n,
                    frameSurface: l,
                    frameSurfaceOptions: r,
                    previewAppChannels: a,
                    setMode: o,
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
                                          t === nL.U.APP_CHANNEL && n.length > 1
                                              ? n.map((n) => ({ mode: e, surface: t, appChannel: n }))
                                              : [{ mode: e, surface: t }],
                                      )
                                    : [{ mode: e }],
                            );
                        })(n, r, a),
                    [n, r, a],
                ),
                f = i.useCallback(
                    (e) => {
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && c?.(e.appChannel)), o(e.mode));
                    },
                    [c, u, o],
                ),
                m = (0, s.bG)([lr.A], () => lr.A.isBuilderPreviewMobile()),
                h = N.intl.string(m ? A.default.tKGF0Q : A.default.peqEOY),
                g = i.useCallback(() => (0, la.GG)(!m), [m]),
                p = (0, s.bG)([lr.A], () => lr.A.isBuilderPreviewLandscape()),
                x = N.intl.string(p ? A.default.tunI2l : A.default.DoNdjA),
                v = i.useCallback(() => (0, la.Lw)(!p), [p]),
                j = (0, nK.jS)(t),
                b = i.useMemo(() => (0, nK.Op)(j, l), [j, l]),
                y = (0, ll.A)(t?.preview_application_id ?? null, b),
                k = (0, nV.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || ln.A.refreshProxyTicket(y.id);
                }, [y, k]);
            return {
                previewTargetOptions: d,
                handleSelectPreviewTarget: f,
                mobilePreview: m,
                mobilePreviewLabel: h,
                handleToggleMobilePreview: g,
                landscapePreview: p,
                rotatePreviewLabel: x,
                handleRotatePreview: v,
                previewSurface: b,
                previewFrame: y,
                isRefreshing: k,
                handleRefresh: w,
            };
        })({
            project: d,
            modes: z.modes,
            frameSurface: B,
            frameSurfaceOptions: H,
            previewAppChannels: O,
            setMode: U,
            setFrameSurface: K,
            setAppChannel: J,
        }),
        eg = g && !v,
        ep = N.intl.string(eg ? A.default.JD6Oit : A.default.xjJAQm),
        ex = i.useCallback(() => {
            if (v) {
                (j(!1), x(!0));
                return;
            }
            x((e) => !e);
        }, [v]),
        ev = i.useCallback(() => x(!1), []),
        {
            designFeedbackActive: ej,
            designFeedbackToggleRef: eb,
            agentDrivingPreview: ey,
            designFeedbackLabel: ew,
            handleToggleDesignFeedback: eA,
        } = (function (e, t, n) {
            let { active: l } = nC(e);
            i.useEffect(() => {
                null != e && l && !t && nw(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nu.Zv)(e),
                s = N.intl.string(a ? A.default.Sme0T0 : l ? A.default.vn5Rzu : A.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        let t;
                        if (l) return void nw(e);
                        (n(), (t = ny(e)).active || nk(e, { ...t, active: !0 }));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(M, et, k),
        eN = i.useCallback(() => {
            j((e) => !e && (x(!0), !0));
        }, []),
        eS = i.useCallback(() => j(!1), []),
        eC = i.useCallback(() => {
            var e, t;
            (null != d && ((e = d.id), (t = ef?.id), (0, p.Bn)(e), (0, nq.r)(t)), m());
        }, [d, ef?.id, m]),
        eE =
            ((r = i.useCallback(() => {
                null != d && (y(), (0, p.dv)(d.id, N.intl.string(A.default.oU20rd)));
            }, [d, y])),
            {
                onExport: r,
                onImport: (u = I(
                    i.useCallback(
                        (e) => {
                            if (null == d) return;
                            let t = d.id,
                                n = C(e);
                            null != n
                                ? (0, o.P0)({ text: n, variant: "critical" })
                                : (0, eW.A)({
                                      title: N.intl.formatToPlainString(A.default["Gm+u1+"], { name: d.name }),
                                      subtitle: N.intl.string(A.default.M7H3sJ),
                                      confirmText: N.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          y();
                                          try {
                                              await S(t, e, N.intl.string(A.default.Owerd3));
                                          } catch {
                                              (0, o.P0)({
                                                  text: N.intl.string(A.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [d, y],
                    ),
                )).open,
                importInput: u.input,
            }),
        eI = i.useCallback(() => {
            null != d && (0, tW.A)(d, h);
        }, [d, h]),
        eM = (0, nR.JR)(F, $)
            ? { type: "permissions", authorizeProps: D }
            : P && null == _
              ? { type: "checking" }
              : void 0,
        e_ = (0, s.bG)([G.Ay], () => null != M && G.Ay.isProjectDeleting(M), [M]);
    i.useEffect(() => {
        ((null == d && f) || e_) && (0, c.bG)(eJ.BVt.CHANNEL(h, eX.VV.CONJURE));
    }, [h, d, f, e_]);
    let {
            publishOptions: eT,
            publish: eR,
            publishing: eL,
            confirmation: e$,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lh,
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
            let f = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: f };
        })(M, h, P || T),
        eD = (0, ls.L)(eR?.status ?? null),
        eO =
            null == eR
                ? null
                : (0, a.jsx)("div", {
                      className: t7.As,
                      children: (0, a.jsx)(eP.m, {
                          text: eD,
                          asContainer: !0,
                          children: (0, a.jsx)(ee.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eL ? fv : null != e$ ? t5.U : void 0,
                              disabled: eR.disabled,
                              onClick: () => eR.run("header"),
                              text: e$ ?? eR.label,
                          }),
                      }),
                  }),
        ez = null == d ? void 0 : () => (0, tg.A)(d.id, { guildId: h, isPreview: !0, publishOptions: eT }),
        eF = (0, a.jsx)(tX, {
            title: d?.name ?? N.intl.string(A.default.G1WwgK),
            breadcrumb: { title: N.intl.string(A.default.uk6jhJ), onClick: m },
            project: d,
            onOpenProjectSettings: ez,
            actions:
                null == d
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t7.FO,
                          children: [
                              (0, a.jsx)(n9, {
                                  targets: en,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(F, B, V),
                                  onChange: el,
                              }),
                              et
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === F
                                                ? (0, a.jsx)(ea.A.Icon, {
                                                      icon: er ? fy : fb,
                                                      tooltip: ei,
                                                      "aria-label": ei,
                                                      selected: er,
                                                      onClick: es,
                                                  })
                                                : null,
                                            er && "frame" === F
                                                ? (0, a.jsx)(ea.A.Icon, {
                                                      icon: fk,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            (0, a.jsx)(ea.A.Icon, {
                                                ref: eb,
                                                icon: t8.x,
                                                iconClassName: t7.D8,
                                                tooltip: ew,
                                                "aria-label": ew,
                                                selected: ej,
                                                disabled: ey,
                                                onClick: eA,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === F ? (0, a.jsx)(n7, { frame: ef, controlProjectId: d.id }) : null,
                              (0, a.jsx)("div", { className: t7.YJ }),
                              b
                                  ? (0, a.jsx)(ea.A.Icon, {
                                        icon: t9.BugIcon,
                                        tooltip: N.intl.string(A.default.Mt5k9d),
                                        "aria-label": N.intl.string(A.default.Mt5k9d),
                                        selected: v,
                                        onClick: eN,
                                    })
                                  : null,
                              (0, a.jsx)(ea.A.Icon, {
                                  icon: tl.SettingsIcon,
                                  tooltip: N.intl.string(A.default.I2XSKe),
                                  "aria-label": N.intl.string(A.default.I2XSKe),
                                  onClick: ez,
                              }),
                              (0, a.jsx)(tI, {
                                  projectId: d.id,
                                  projectName: d.name,
                                  guildId: h,
                                  projectGuildId: d.guild_id,
                                  isOwner: (0, G.PV)(d),
                                  canRemix: (0, G.H_)(d),
                                  onRefresh: (0, nV.x1)(ef) ? eh : void 0,
                                  isRefreshing: em,
                                  onClose: eC,
                                  onExport: eE.onExport,
                                  onImport: eE.onImport,
                                  onRemix: eI,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = d.id),
                                          void (0, tb.openModalLazy)(async () => {
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
                                              projectId: d.id,
                                              installScope: d.install_scope,
                                              restoreDisabled: w?.status === "restoring",
                                              onRestoreVersion: (e, t) => E(e, t, !0),
                                          }),
                                          void (0, tb.openModalLazy)(async () => {
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
                                          ? Q
                                          : null,
                                  previewProjectId: d.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(ea.A.Icon, { icon: fj, tooltip: ep, "aria-label": ep, onClick: ex }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: W()(t7.nj, t4.T),
        children: [
            eE.importInput,
            (0, a.jsx)("main", {
                className: t7.JX,
                children:
                    null == d
                        ? (0, a.jsxs)("div", {
                              className: t7.j5,
                              children: [
                                  eF,
                                  (0, a.jsxs)("div", {
                                      className: t7.sD,
                                      children: [
                                          (0, a.jsx)(ek.D, {
                                              variant: "heading-lg/semibold",
                                              children: N.intl.string(A.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Y.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: N.intl.string(A.default.fINulo),
                                          }),
                                          (0, a.jsx)(ee.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: N.intl.string(A.default["WFJ/vb"]),
                                              onClick: () => (0, q.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tm.bI.Provider, {
                              value: eT,
                              children: (0, a.jsx)(
                                  fp,
                                  {
                                      projectId: d.id,
                                      designFeedbackToggleRef: eb,
                                      applicationId: d.preview_application_id,
                                      previewApplicationId: d.preview_application_id,
                                      surface: ed,
                                      frameLaunchParams: X,
                                      header: eF,
                                      chatOpen: g,
                                      onCloseChat: ev,
                                      chatHeaderAction: eO,
                                      debugOpen: b && v,
                                      onCloseDebug: eS,
                                      onRestoreVersion: E,
                                      onImportProject: (0, G.PV)(d) ? eE.onImport : void 0,
                                      restoreState: w,
                                      previewReady: R,
                                      previewGate: eM,
                                      availability: z,
                                      activeMode: F,
                                      widgetApplicationId: Q,
                                      overlayWidgetSize: Z,
                                  },
                                  d.id,
                              ),
                          }),
            }),
        ],
    });
}
function fv() {
    return (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: t7.Hv, itemClassName: t7.C5 });
}
function fj(e) {
    return (0, a.jsx)(ne.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function fb(e) {
    return (0, a.jsx)(nt.u, { ...e, size: "custom", width: 20, height: 20 });
}
function fy(e) {
    return (0, a.jsx)(nn.k, { ...e, size: "custom", width: 20, height: 20 });
}
function fk(e) {
    return (0, a.jsx)(nl.H, { ...e, size: "custom", width: 20, height: 20 });
}
function fw(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, s.yK)([G.Ay], () => G.Ay.getOwnedProjects()),
        h = (0, s.yK)([d.Ay], () => d.Ay.getSelfMember(n)?.roles ?? [], [n]),
        g = (0, s.bG)(
            [f.A, m.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && m.A.can(eJ.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [x, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [k, w] = i.useState(null),
        E = (0, H.z9)("VibegrationsScreen"),
        [I, _] = i.useState(null),
        T = (0, u.o)().get(B.f_) === U;
    i.useEffect(() => {
        _(null);
    }, [n, T]);
    let P = i.useMemo(() => (!T && E.some((e) => e.id === n) ? n : U), [E, n, T]),
        R = I ?? P,
        L = R === U ? "user" : "guild",
        D = R === U ? n : R,
        [z, F] = i.useState(null);
    (i.useEffect(() => {
        (0, q.hF)(n);
    }, [n, h, g]),
        i.useEffect(() => {
            (0, q.dm)(n, j);
        }, [n, j]));
    let V = i.useCallback(
            async (e, t, n) => {
                let l = await (0, q.gA)({ guild_id: t, install_scope: n });
                ((0, p.Hc)(l),
                    (0, p.r2)(l, z ?? $),
                    e(l),
                    (0, c.pX)(eJ.BVt.CHANNEL(t, eX.VV.CONJURE, l)),
                    v(""),
                    F(null));
            },
            [z],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? x).trim(),
                    n = O({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), w(null));
                    try {
                        await V((e) => (0, p.dv)(e, t), D, L);
                    } catch (e) {
                        w((0, M.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [V, L, D, x, b],
        ),
        J = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), w(null));
                    try {
                        await V(
                            (t) => {
                                var n;
                                (0, p.dv)(
                                    t,
                                    ((n = e.name),
                                    N.intl.formatToPlainString(A.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            D,
                            L,
                        );
                    } catch (e) {
                        w((0, M.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [V, L, D, b],
        ),
        X = i.useCallback(
            async (e, t) => {
                let n = await (0, q.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, p.Hc)(n), (0, p.r2)(n, z ?? $), (0, p.dv)(n, (0, K.Wl)(e)), n);
            },
            [z],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (G.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, q.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new M.DS((0, M.hj)(e), e.status);
            }
            ((0, p.dv)(t, l, void 0, { templateId: e.id }), (0, c.pX)(eJ.BVt.CHANNEL(n, eX.VV.CONJURE, t)), F(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, q.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = G.Ay.getProject(e)?.guild_id ?? n;
                ((0, c.pX)(eJ.BVt.CHANNEL(t, eX.VV.CONJURE, e)), F(null));
            },
            [n],
        ),
        [ee, et] = i.useState(!1),
        en = i.useCallback(
            async (e, t) => {
                let l = C(e);
                if (null != l) return void (0, o.P0)({ text: l, variant: "critical" });
                et(!0);
                let r = null;
                try {
                    ((r = await (0, q.gA)({ guild_id: n, install_scope: t })),
                        (0, p.Hc)(r),
                        (0, p.r2)(r, z ?? $),
                        await S(r, e, N.intl.string(A.default["LUc7/5"])),
                        (0, c.pX)(eJ.BVt.CHANNEL(n, eX.VV.CONJURE, r)),
                        F(null));
                } catch {
                    (null != r && (await (0, q.xx)(r).catch(() => void 0)),
                        (0, o.P0)({ text: N.intl.string(A.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, z],
        ),
        el = i.useCallback(
            (e) => {
                (0, c.pX)(eJ.BVt.CHANNEL(n, eX.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, c.pX)(eJ.BVt.CHANNEL(n, eX.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (v(e), w(null));
        }, []),
        ei = (0, s.bG)(
            [G.Ay],
            () => {
                if (null == j) return null;
                let e = G.Ay.getProject(j);
                return null == e || (0, G.PV)(e) || e.guild_id === n ? e : null;
            },
            [j, n],
        ),
        es = (0, s.bG)([G.Ay], () => G.Ay.hasFetchedGuildProjects(n), [n]);
    return null != j
        ? (0, a.jsx)(fx, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t6, {
              projects: r,
              modelSettings: z,
              onModelSettingsChange: F,
              idea: x,
              guildId: n,
              submitting: b,
              createError: k,
              createDisabled: "idea" === (t = O({ idea: x, installScope: L, submitting: b })) || "submitting" === t,
              onSelectProject: el,
              onIdeaChange: ea,
              onCreate: W,
              onCreateFromTemplate: J,
              onStartTemplate: X,
              onSubmitTemplate: Y,
              onCancelTemplate: Q,
              onSkipTemplate: Z,
              onImportNewProject: en,
              importing: ee,
              conjureTarget: R,
              onConjureTargetChange: _,
              eligibleGuilds: E,
          });
}
