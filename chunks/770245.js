(n.r(t), n.d(t, { default: () => fP }));
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
class w extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function k(e, t) {
    let { ticket: n, baseUrl: l } = await (0, y.d)(e),
        r = new URLSearchParams({ ticket: n, name: t }),
        a = await fetch(`${l}/agent/export?${r}`);
    if (!a.ok) throw new w(a.status);
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
        r = await k(e, l);
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
var _ = n(639519),
    M = n(361504);
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
let q = "user";
var U = n(371169),
    G = n(260498),
    B = n(941985),
    K = n(16619),
    H = n(952644);
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
    ew = n(297264),
    ek = n(770178),
    eA = n(765548),
    eN = n(595528),
    eS = n(885576),
    eC = n(662429);
let eE = "heading-xxl/semibold",
    eI = !1;
function e_() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eA.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, ek.w)(l, [], { fireOnMount: !0 }),
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
            : (0, a.jsx)(ew.D, { variant: eE, children: d }),
    });
}
var eM = n(900797),
    eT = n(320448),
    eP = n(866665),
    eR = n(783977),
    eL = n(344587),
    e$ = n(534554),
    eD = n(392208),
    eO = n(837984),
    ez = n(359589),
    eF = n(254575);
function eq(e) {
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
function eU(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, f] = i.useState(!1),
        m = eq(d),
        h = eD.P.indexOf(t.tier),
        g = d ? eM.t : eT._,
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
        { mounted: g, entered: p } = eq(m);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eU, {
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
var eB = n(140735),
    eK = n(442433),
    eH = n(314116),
    eV = n(652215),
    eW = n(746080),
    eJ = n(855793),
    eX = n(434279),
    eY = n(287809),
    eQ = n(427262),
    eZ = n(245179),
    e0 = n(803306);
let e1 = new Set(),
    e2 = new Map();
function e3(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function e7(e) {
    if (null == e || e1.has(e) || null != eY.default.getUser(e)) return;
    let t = e2.get(e) ?? 0;
    t >= 3 ||
        (e2.set(e, t + 1),
        e1.add(e),
        e0
            .wz(e)
            .finally(() => e1.delete(e))
            .catch(() => {}));
}
var e5 = n(782603),
    e6 = n(780338),
    e4 = n(663417),
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
    tf = n(442331),
    tm = n(616334),
    th = n(189714),
    tg = n(733791),
    tp = n(189213),
    tx = n(331322),
    tv = n(192308),
    tj = n(664619),
    tb = n(706935);
function ty(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, u] = i.useState(n.canRemovePreviewBot),
        [c, d] = i.useState(!1),
        [f, m] = i.useState(null),
        h = "delete" === l,
        g = h ? (0, tg.fI)(n) : (0, tg.Kd)(n),
        p = h ? null : (0, tg.L4)(n),
        x = (0, tg.Mi)(n),
        v = h
            ? N.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName })
            : N.intl.formatToPlainString(A.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), m(null));
        let e = h ? (0, U.xx)(t.id) : (0, tj.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? m(N.intl.string(h ? A.default["0XDHob"] : A.default.PJ2Fkn))
            : (h || (0, o.P0)({ text: (0, tg.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tp.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tg.WX)((0, tb.tb)(A.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tg.J)(n) : N.intl.string(A.default["8OKM1N"]),
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
        children: (0, a.jsxs)(tx.B, {
            gap: 12,
            children: [
                g.length > 0 || null != p
                    ? (0, a.jsx)(tb.Ay, {
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
function tw(e) {
    (0, tv.openModal)((t) => (0, a.jsx)(ty, { ...t, ...e }));
}
var tk = n(552821);
let tA = [];
function tN(e) {
    (0, o.P0)({ text: e, variant: "critical" });
}
function tS(e) {
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
        w = (0, th.iI)(t),
        k = i.useContext(td.bI),
        { pending: S, refresh: C } = (0, tr.A)(j ?? null),
        { pending: E, connect: I } = (function (e, t) {
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
                                          ? N.intl.string(A.default["jCQ/1B"])
                                          : N.intl.string(A.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(b ?? null, tN),
        _ = (0, s.bG)([tf.A], () => (null == b ? tA : tf.A.getDeclaredConnections(b))),
        M = i.useMemo(() => (0, ts.Xl)(_), [_]),
        T = (0, tg.Bs)(t),
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
        })({ canRefresh: null != j, refreshPending: S, offers: M, connectPending: E }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        L = null != m && c,
        $ = u && null != f,
        D = L || null != d || $ || null != h || null != g,
        O = ti.p5 && null != l,
        z = ti.p5,
        F = w ? e5.BellIcon : e6.BellSlashIcon;
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
                                    icon: e4.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: e4.RefreshIcon },
                                    label: N.intl.string(A.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eo.Dr, {
                                    id: "close",
                                    icon: e8.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e8.DoorExitIcon },
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
                    label: N.intl.string(w ? A.default.s9rCuH : A.default["a+i/As"]),
                    icon: F,
                    leadingAccessory: { type: "icon", icon: F },
                    action: () => (0, th.$L)(t, !w),
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
                                    icon: e9.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: e9.LinkIcon },
                                    action: () =>
                                        (0, ti.C)((0, ta.n)(l, eW.VV.CONJURE, t), () =>
                                            (0, o.P0)({ text: N.intl.string(N.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eo.Dr, {
                              id: "copy-project-id",
                              label: N.intl.string(A.default["nm/zuU"]),
                              icon: te.L,
                              leadingAccessory: { type: "icon", icon: te.L },
                              action: () =>
                                  (0, ti.C)(t, () =>
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
                                    icon: tt.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: tt.SettingsIcon },
                                    action: () =>
                                        (0, tm.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: k,
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
                                        null != e && tw({ project: e, target: T, action: "remove" });
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
                                        if (null != e && null != T) tw({ project: e, target: T, action: "delete" });
                                        else
                                            (0, eH.A)({
                                                title: N.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: N.intl.string(A.default["0OmrVn"]),
                                                confirmText: N.intl.string(N.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, U.K)(t, () =>
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
function tC(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tS, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: tk.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(eP.m, {
                              text: N.intl.string(N.t["UKOtz+"]),
                              children: (0, a.jsx)(tn.K, {
                                  icon: tl.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": N.intl.string(N.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ea.A.Icon, {
                              icon: tl.MoreHorizontalIcon,
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
var tE = n(497183),
    tI = n(104171),
    t_ = n(286739);
function tM(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: W()(t_.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(tI.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: tI.DN.SIZE_16 }),
    });
}
var tT = n(217846),
    tP = n(733123),
    tR = n(941650);
function tL(e) {
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
        { project: v, guildId: j, onSelect: b, onRemix: y, shared: k = !1 } = e,
        _ =
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
                                        409 === (t = e instanceof w ? e.status : null)
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
                                : (0, eH.A)({
                                      title: N.intl.formatToPlainString(A.default["Gm+u1+"], { name: l }),
                                      subtitle: N.intl.string(A.default.M7H3sJ),
                                      confirmText: N.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, c.pX)(eV.BVt.CHANNEL(j, eW.VV.CONJURE, n));
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
        M = (0, tP.A)(v),
        T = (0, eX.wu)(v),
        P =
            (0, s.bG)([f.A], () => (null == T ? null : (f.A.getGuild(T)?.name ?? null)), [T]) ??
            N.intl.string(A.default["3QFps8"]),
        R = (0, s.bG)([G.Ay], () => G.Ay.isProjectDeleting(v.id), [v.id]),
        L =
            ((t = k ? v : null),
            (m = t?.id),
            (h = t?.owner_user_id),
            (g = (0, s.yK)(
                [eZ.A],
                () =>
                    null == m
                        ? []
                        : [
                              ...new Set(
                                  eZ.A.getMessages(m)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [m, h],
            )),
            i.useEffect(() => {
                null != h && (e7(h), g.forEach(e7));
            }, [h, g]),
            (p = (0, s.bG)([eY.default], () => (null == h ? null : eY.default.getUser(h)), [h])),
            (x = (0, s.yK)([eY.default], () => g.map((e) => eY.default.getUser(e)).filter((e) => null != e), [g])),
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
                                  (0, eQ.mG)(p),
                                  x.map((e) => (0, eQ.mG)(e)),
                              ),
                          },
                [p, x],
            )),
        $ = i.useId(),
        D = (0, a.jsx)(Y.E, { variant: "text-md/semibold", color: "text-strong", className: tR.j1, children: v.name }),
        O = {
            projectId: v.id,
            projectName: v.name,
            guildId: j,
            projectGuildId: v.guild_id,
            isOwner: (0, G.PV)(v),
            canRemix: (0, G.H_)(v),
            onRemix: y,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, a.jsxs)("div", {
        className: W()(tR.OY, { [tR.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eJ.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tT.a, { projectId: v.id }),
            (0, a.jsxs)(em.D, {
                className: tR.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eK.jA)(e, () => (0, a.jsx)(tS, { ...O, onCloseMenu: eK.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(tE.A, { project: v, size: "card", className: tR.VJ }),
                    (0, a.jsxs)("div", {
                        className: tR.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tR.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eP.m, { text: L.label, ariaHidden: !0, children: D }) : D,
                                    null == L || R ? null : (0, a.jsx)(tM, { creator: L, className: tR.rb }),
                                    R ? null : (0, a.jsx)(tT.n, { projectId: v.id, className: tR.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: tR.h3,
                                children: [
                                    (0, a.jsx)(Y.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: tR.Wb,
                                        children: R ? N.intl.string(A.default.Yh5pAc) : P,
                                    }),
                                    null == M || R
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: tR.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Y.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: tR.zM,
                                                      children: M,
                                                  }),
                                              ],
                                          }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != L ? (0, a.jsx)(eB.A, { id: $, children: L.label }) : null,
            (0, a.jsx)("div", {
                className: tR.M2,
                children: R
                    ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tR.Pl,
                          children: [(0, a.jsx)(tC, { ...O, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
var t$ = n(246338);
let tD = "user",
    tO = "no-server",
    tz = new Map();
function tF(e) {
    return tz.get(e) ?? null;
}
function tq(e) {
    switch (e) {
        case "all":
        case tD:
        case tO:
            return null;
        default:
            return e;
    }
}
function tU(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tD:
            return "user" === e.install_scope;
        case tO:
            return null == (0, eX.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tG = n(506774);
let tB = "VibegrationsProjectsPanelOpen";
function tK() {
    return tG.w.get(tB) ?? null;
}
function tH(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tV = n(95264),
    tW = n(631417);
function tJ(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = N.intl.string(A.default.FzfmQ8);
    return (0, a.jsx)(ea.A, {
        hideSearch: !0,
        toolbar: n,
        className: tW.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tW.QF,
            children: [
                (0, a.jsx)(el.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: er.A.colors.TEXT_STRONG,
                    className: tW.Kk,
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
                              className: tW.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tE.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ea.A.Title, { className: tW.Qw, wrapperClassName: tW.DD, children: t }),
            ],
        }),
    });
}
var tX = n(683071),
    tY = n(47167),
    tQ = n(808728),
    tZ = n(994500);
let t0 = "conjuring-help";
var t1 = n(173114);
function t2() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, s.cf)([eY.default, f.A, tQ.Ay, tZ.A], () => {
                let e = eY.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eV.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = tQ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tY.m1)(t, eY.default, tZ.A) === t0;
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
                    ? (0, c.pX)(eV.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, to.h)({ href: e.url, trusted: !0 }));
        }, [e]);
    return null == e
        ? null
        : (0, a.jsx)("div", {
              className: t1.l,
              children: (0, a.jsx)(tX.w, {
                  type: "info",
                  iconAlign: "center",
                  message: N.intl.format(A.default["6anmu1"], { channel: t0, onNavigate: t }),
                  role: "static",
              }),
          });
}
var t3 = n(606128),
    t7 = n(323140);
function t5(e) {
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
            onStartTemplate: w,
            onSubmitTemplate: k,
            onCancelTemplate: S,
            onSkipTemplate: C,
            onImportNewProject: E,
            importing: I,
        } = e,
        [_, T] = i.useState(() => ({ guildId: r, filter: tF(r) })),
        R = (_.guildId === r ? _.filter : tF(r)) ?? r,
        O = i.useCallback(
            (e) => {
                (tz.set(r, e), T({ guildId: r, filter: e }));
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
        K = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: el.D, label: N.intl.string(A.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tD, leading: z.UserIcon, label: N.intl.string(A.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tO, leading: ec.R, label: N.intl.string(A.default["3QFps8"]) },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        H = (0, s.yK)(
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
        null == e || G.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [R]);
    let V = i.useMemo(
            () =>
                H.filter((e) => tU(e, R)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [H, R],
        ),
        ei = i.useMemo(
            () => [
                {
                    label: N.intl.string(A.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: q,
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
                    .filter((e) => tU(e, R))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, R],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, t$.Ot)(e, r)
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
                        onStart: (t) => w(e.name, t),
                        onSubmit: (t, n, l) => k(e, t, n, l),
                        onCancel: S,
                        onSkip: C,
                    }),
                    (0, tv.openModalLazy)(
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
            [g, r, S, y, C, w, k],
        ),
        ep = N.intl.string(A.default.zzYLlW),
        eb =
            (i.useEffect(() => {
                (0, U.b8)();
            }, []),
            (0, s.bG)([G.Ay], () => {
                let e = G.Ay.getMaxProjects();
                return null != e && G.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - G.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = N.intl.string(A.default["2XcV3x"]),
        ew = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ek = tq(R) ?? r,
        eA = (0, s.bG)([G.Ay], () => G.Ay.getGuildProjectsFetchState(ek), [ek]),
        eN = (0, s.bG)([G.Ay], () => G.Ay.getGuildProjectsFetchState(r), [r]),
        [eS, eC] = i.useState(tK),
        eE = i.useMemo(() => tG.w.get(tH(r)) ?? !1, [r]),
        eI = "success" === eN,
        eM = (0, s.yK)([G.Ay], () => G.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tU(e, r)),
        eT = eS ?? (!!eM || "error" === eN || (!eI && eE));
    i.useEffect(() => {
        eI && tG.w.set(tH(r), eM);
    }, [eI, eM, r]);
    let eP = i.useCallback((e) => {
            (tG.w.set(tB, e), eC(e));
        }, []),
        eR = i.useCallback(() => eP(!eT), [eP, eT]),
        eL = i.useCallback(() => eP(!1), [eP]),
        e$ = N.intl.string(A.default.kar7jh),
        eD = eT ? e$ : N.intl.string(A.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: W()(t7.nj, t7.a0, t3.T),
        children: (0, a.jsxs)("div", {
            className: t7.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t7.ps,
                    children: [
                        (0, a.jsx)(tJ, {
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
                                        (0, a.jsx)(t2, {}),
                                        (0, a.jsx)(e_, {}),
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
                                        onKeyDown: ew,
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
                                                choices: (0, M.b)()
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
                                        options: K,
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
                                                    onClick: () => (0, U.hF)(ek),
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
                                                      tL,
                                                      {
                                                          project: e,
                                                          guildId: r,
                                                          onSelect: () => eo(e),
                                                          onRemix: () => (0, tV.A)(e, r),
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
                                                          tL,
                                                          {
                                                              project: e,
                                                              guildId: r,
                                                              onSelect: () => eo(e),
                                                              onRemix: () => (0, tV.A)(e, r),
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
var t6 = n(478016),
    t4 = n(604525),
    t8 = n(92446),
    t9 = n(534890),
    ne = n(646270),
    nt = n(31300),
    nn = n(831453),
    nl = n(270593);
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
function nw(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nj.set(e, t) : nj.delete(e), [...nb]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function nk(e) {
    nj.has(e) && nw(e, nv);
}
function nA(e, t) {
    let n = ny(e);
    n.active && nw(e, { ...n, context: t });
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
    n_ = n(967008),
    nM = n(951178);
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
    nq = n(627363),
    nU = n(457827),
    nG = n(25451),
    nB = n(280450),
    nK = n(373677),
    nH = n(754027),
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
function n7(e) {
    return i.useSyncExternalStore(n3, () => n2(e));
}
function n5(e) {
    let { frame: t, controlProjectId: n } = e,
        l = n7(t?.id ?? null),
        r = (0, nu.Zv)(n),
        i = (0, s.bG)(
            [nQ.A, nY.A],
            () => null != t && nQ.A.getWindowOpen(eV.MLl.ACTIVITY_POPOUT) && nY.A.getMainFrame()?.id === t.id,
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
    n4 = n(847374),
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
                        (0, a.jsx)(n4.a, { size: "xs", color: "currentColor" }),
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
        w = h ?? u,
        k = f.trim();
    function S() {
        (r(), o());
    }
    async function C(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, td.$l)(t, { name: b, icon: h, description: f }, { name: n, description: l });
        (j(!1), r) ? S() : x(N.intl.string(A.default.Fi7boI));
    }
    let E = "" === b ? n : b;
    return (0, a.jsx)("form", {
        onSubmit: C,
        children: (0, a.jsx)(tp.a, {
            transitionState: s,
            onClose: o,
            title: N.intl.string(A.default.OmOWDq),
            subtitle: N.intl.string(A.default.Gzmlyg),
            size: "sm",
            preview: (0, a.jsx)(lu.w, { iconURL: w, name: E, description: k }),
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
            children: (0, a.jsxs)(tx.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lu.r, {
                        iconURL: w,
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
    return (0, a.jsx)(tp.a, {
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
        (0, tv.openModal)((l) => (0, a.jsx)(lm, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tv.openModal)(
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
    lw = n(886540);
function lk(e) {
    return !(0, lw.BL)(e) && !0 !== e.stopRequested;
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
var l_ = n(148590);
function lM(e) {
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
        v = m ? n4.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(lI, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: l_.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(em.D, {
                                className: l_.L$,
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
        headerClassName: m ? void 0 : l_.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: f, className: W()(l_.rf, o), hidden: !m, children: c })],
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
        meta: (0, a.jsx)(lM, { children: c }),
        superseded: s,
        showLabel: N.intl.string(A.default.RKyN9q),
        hideLabel: N.intl.string(A.default.xydHoj),
        className: lP.Nr,
        bodyClassName: lP.rf,
        beforeBody: r && !s ? (0, a.jsx)(eB.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lD, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lz = n(308665),
    lF = n(59678),
    lq = n(903847);
function lU(e) {
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
    let [y, w] = i.useState(!1),
        [k, S] = i.useState(!1),
        [C, E] = i.useState(x);
    (C !== x && (E(x), x ? w(!0) : S(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => w(!1), 150);
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
        _ = i.useCallback(() => v((e) => !e), []);
    return m
        ? (0, a.jsxs)("div", {
              className: lq.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: W()(lq.vK, { [lq.ho]: g && c, [lq.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: W()(lq.Rk, lF.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lS.A, {
                                        glyph: (0, a.jsx)(lz.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(em.D, {
                                    className: lq.pZ,
                                    onClick: u,
                                    "aria-label": N.intl.string(A.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: W()(lq.Rk, lF.pj),
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
                                        className: lq.BO,
                                        onClick: _,
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
                            className: W()(lq.vB, { [lq.pg]: x && k, [lq.ui]: !x }),
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
    lK = n(826745),
    lH = n(123292),
    lV = n(734057);
let lW = {
        [eV.rbe.GUILD_TEXT]: "text",
        [eV.rbe.GUILD_VOICE]: "voice",
        [eV.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eV.rbe.GUILD_STAGE_VOICE]: "stage",
        [eV.rbe.GUILD_FORUM]: "forum",
        [eV.rbe.GUILD_MEDIA]: "media",
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
    l7 = n(614733),
    l5 = n(904363),
    l6 = n(950902),
    l4 = n(384017);
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
                        let n = eY.default.getUser(t)?.username;
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
        className: l4.YX,
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
        l = (0, l5.A)(t);
    return (0, a.jsx)(l8, { ...n, guildId: t, options: l, placeholder: lY("role", !0 === n.question.multi_select) });
}
function rt(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, l7.A)(t);
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
function rw(e, t) {
    let n = rg(e, t);
    if (0 !== n.length) {
        for (let t of n) rj(e, t);
        rp(e, t, rd);
    }
}
function rk(e, t) {
    let n = rg(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (rp(e, t, rd), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function rA(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = rg(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? rk(e, "chat") : [];
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
                          children: (0, a.jsx)(tn.K, {
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
                            children: (0, a.jsx)(tn.K, {
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
        w =
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
                    null != w
                        ? (0, a.jsx)(
                              rE,
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
            (0, a.jsx)(r_, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: N.intl.string(/\bicons?\b/i.test(l.question) ? A.default.qU4WN6 : A.default.cbMDDB),
            }),
        ],
    });
}
function r_(e) {
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
                              icon: e9.LinkIcon,
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
                                  (0, a.jsx)(lH.Q, {
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
var rM = n(29073);
function rT(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(em.D, {
        className: W()(l4.uK, { [l4.ue]: l, [l4.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: l4.dy, children: (0, a.jsx)(lG.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: l4.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l4.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l4.l8,
                        children: (0, a.jsx)(Y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l4.ed,
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
                      className: l4.rM,
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
        className: W()(l4.Ge, l4.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l4.aK,
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
                      className: l4.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l4.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lB.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: W()(l4.Pu, l4.es), children: c }),
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
        [y, w] = i.useState(0),
        [k, S] = i.useState(null),
        [C, E] = i.useState(null),
        [I, _] = i.useState(null),
        [M, T] = i.useState(!1),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        D = i.useRef(0),
        O = null == r,
        z = l.questions.length,
        F = Math.min(y, z - 1),
        q = l.questions[F],
        [U, G] = i.useState({ id: q.id, expanded: !1 }),
        B = U.id === q.id && U.expanded,
        [K, H] = i.useState(null),
        V = c[q.id] ?? "",
        J = !0 === q.multi_select,
        X = lZ(q),
        Q = J ? (f[q.id] ?? rR) : ((t = o[q.id]), t?.kind === "option" ? [t.optionId] : l0),
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
        en = Z.imageFor(q.id),
        el = Z.selectedFor(q),
        { text: er, phase: ea } = (0, eL.Q)(q.question),
        ei = er === q.question,
        es = ei && K?.id === q.id && K.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            H((t) => (t?.id === q.id && t.truncated === e ? t : { id: q.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, q.id, B]);
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
                    E({ question: q, draft: V, selected: Q, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    T(!0),
                    w(e));
            },
            [V, en, el, q, Q],
        ),
        ed = i.useCallback(() => {
            let e = P.current,
                t = $.current;
            null != e && null != t && _({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = P.current,
            t = $.current;
        if (null == e || null == t) return;
        ed();
        let n = new ResizeObserver(ed);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ed]);
    let ef = k?.moves;
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
                let t = { ...o, [q.id]: e };
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
            [o, l, O, F, q.id, eu, ec],
        ),
        eg = i.useCallback(() => {
            O || 0 === F || ec(F - 1, "back");
        }, [O, F, ec]),
        ep = F > 0 && !O,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [q.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                X ? O || u((e) => ({ ...e, [q.id]: t })) : eh(t);
            },
            [O, X, q.id, eh],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return J
                ? ((e = ev(q)),
                  (t = V.trim()),
                  (n = q.options.filter((e) => Q.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Q,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [V, J, ev, q, Q]),
        eb = h[q.id] ?? rL,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != q.input
                ? ((e = q.input),
                  (t = x[q.id]),
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
        }, [V, x, eb, q.id, q.input]),
        ew = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [q.id]: e })), v((e) => ({ ...e, [q.id]: t })));
            },
            [q.id],
        ),
        ek = i.useCallback(() => b(!0), []),
        eA = i.useCallback(() => b(!1), []),
        eN = Z.controlsFor(q, O),
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
        [eI, e_] = i.useState(!1);
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
            null != s && (e_(!0), setTimeout(s, 150));
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
                        : (o[q.id] ?? null),
            [o, V, ej, ey, q.id],
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
                  className: l4.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: l4.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lB.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lK.y, {
                          value: V,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [q.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eS());
                          },
                          placeholder: N.intl.string(A.default["tOC+tn"]),
                          "aria-label": N.intl.formatToPlainString(A.default["4JeYPB"], { question: q.question }),
                          disabled: O,
                          rows: 1,
                          className: l4.Pu,
                          "data-conjure-clarification-other": q.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: W()(l4.$O, { [l4.fI]: eC && !eI, [l4.Oh]: eI }),
        role: "dialog",
        "aria-label": q.question,
        "data-conjure-clarification": l.id,
        "data-state": O ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !M ? "true" : void 0,
        "data-step": F,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: l4.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": M ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: P,
                        className: l4.wx,
                        children: [
                            (0, a.jsx)(Y.E, {
                                ref: L,
                                tag: "span",
                                id: `${q.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: W()(rM.TK, l4.R_, { [l4.TB]: "exit" === ea, [l4.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: rM.Q7,
                                      children: (0, a.jsx)(eP.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tn.K, {
                                              icon: B ? eM.t : n4.a,
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
                                : (0, a.jsx)(em.D, {
                                      className: W()(rM.gb, rM.Q7),
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
                        className: l4.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: l4.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: l4.Ge,
                                    role: "group",
                                    "aria-labelledby": `${q.id}-label`,
                                    "data-direction": k?.direction,
                                    "data-parity": null == k ? void 0 : k.moves % 2,
                                    children: [
                                        J
                                            ? (0, a.jsx)(Y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l4.aK,
                                                  children: N.intl.string(A.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rP, {
                                            projectId: n,
                                            question: q,
                                            selected: Q,
                                            disabled: O,
                                            onPick: (e) =>
                                                J
                                                    ? m((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [q.id]:
                                                                  ((n = t[q.id] ?? rR),
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
                                            ? (0, a.jsx)(rn, {
                                                  projectId: n,
                                                  question: q,
                                                  value: eb,
                                                  disabled: O,
                                                  onChange: ew,
                                                  onFocus: ek,
                                                  onBlur: eA,
                                                  fallback: !1 === q.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === q.allow_custom ? null : eF,
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
            z > 1 || J || X || null != q.input
                ? (0, a.jsxs)("div", {
                      className: rM.qr,
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
                              className: rM.zt,
                              children: [
                                  ep
                                      ? (0, a.jsx)(lH.Q, {
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
    rF = n(894443),
    rq = n(525530),
    rU = n(572253),
    rG = n(411236);
function rB(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : N.intl.string(A.default.XuOf5s);
    return (0, a.jsx)(rU.A, {
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
                      className: rG.Mk,
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
                          (0, a.jsx)("div", { className: rG.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: W()(rM.nd, rM.jx),
                      "aria-label": N.intl.string(A.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: rM.wx,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: rM.TK,
                                      children: N.intl.string(A.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(em.D, {
                                      className: W()(rM.gb, rM.Q7),
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
                              className: rG.DQ,
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
                              className: rM.qr,
                              children: (0, a.jsx)("div", { className: rM.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var rK = n(874421),
    rH = n(404373),
    rV = n(435558),
    rW = n.n(rV);
let rJ = "VibegrationsComposerDrafts";
function rX() {
    return tG.w.get(rJ) ?? {};
}
let rY = new Map(),
    rQ = rW().throttle(() => {
        if (0 === rY.size) return;
        let e = rX();
        for (let [t, n] of rY) "" === n ? delete e[t] : (e[t] = n);
        (rY.clear(), tG.w.set(rJ, e));
    }, 1e3);
class rZ extends s.Ay.Store {
    getDraft(e) {
        let t = rY.get(e);
        return null != t ? t : (rX()[e] ?? "");
    }
}
let r0 = new rZ(lx.h, {
    LOGOUT: function () {
        return (rY.clear(), rQ.cancel(), tG.w.remove(rJ), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rY.set(t, n), rQ(), "" === n && rQ.flush(), !1);
    },
});
function r1(e) {
    return "" !== r0.getDraft(e).trim();
}
var r2 = n(29080),
    r3 = n(46054);
function r7(e) {
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
var r5 = n(520521),
    r6 = n(216306),
    r4 = n(60160),
    r8 = n(16634),
    r9 = n(651438);
function ae(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, ly.SY)(n.steps),
        d = u ? (0, r9.Q)(n) : (0, r6.R)(o),
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
                                            r8.A,
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
                                      children: (0, a.jsx)(r4.A, { text: e, variant: "text-sm/normal" }),
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
            body: (0, r6.O)(o),
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
var at = n(998445),
    an = n(643210),
    al = n(648127),
    ar = n(372795),
    aa = n(163897);
let ai = "conjure-browser-viewer";
function as(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, s.yK)(
            [an.A],
            () =>
                n.flatMap((e) => {
                    let n = an.A.getTab(t, e);
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
        className: aa.kR,
        "aria-label": N.intl.string(A.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(ao, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ao(e) {
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
        u = (0, tv.useHasModalOpen)(ai),
        [c, d] = i.useState(!1),
        f = i.useCallback((e, t) => d(t), []),
        { ended: m } = l,
        h = (0, al.i)(l.session);
    return (0, a.jsxs)(em.D, {
        innerRef: s,
        className: W()(aa.Nr, m && aa.Xj),
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
                    { modalKey: ai },
                )
            );
        },
        "aria-label": N.intl.formatToPlainString(A.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: aa.Gt,
                children: [
                    (0, a.jsx)(ar.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || m,
                        className: aa.Ji,
                        "aria-label": N.intl.formatToPlainString(A.default.rnwqXb, { name: h }),
                        onStateChange: f,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: aa.qf,
                              children: (0, a.jsx)(at.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    m
                        ? (0, a.jsx)("div", {
                              className: aa.HS,
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
                className: aa.pG,
                children: [
                    (0, a.jsx)("span", { className: W()(aa.W9, m && aa.oM) }),
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
var au = n(268409);
let ac = new WeakMap(),
    ad = new WeakMap();
function af(e) {
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
            [eZ.A],
            () => {
                if (0 === o.length) return o;
                let e = (function (e) {
                    let t = ac.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = ad.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), ad.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ac.set(e, n), n);
                })(eZ.A.getMessages(t));
                return o.filter((t) => e.get(t) === n);
            },
            [o, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: au.h, children: (0, a.jsx)(as, { projectId: t, sessionIds: u }) });
}
var am = n(469393);
function ah(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, nE.lG)(t.authored_at);
    return (0, a.jsx)(lI, {
        title: N.intl.string(A.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: am.r,
            children: [
                (0, a.jsxs)("div", {
                    className: am.z,
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
var ag = n(323384),
    ap = n(983851),
    ax = n(794083),
    av = n(687966),
    aj = n(632015),
    ab = n(231483),
    ay = n(430392),
    aw = n(633018),
    ak = n(885574);
let aA = {
    [nM.q7.APP_CHANNEL]: A.default.zrk93C,
    [nM.q7.VOICE_CHANNEL]: A.default.r5Ra0p,
    [nM.q7.ACTIVITY]: N.t.IC5Ann,
    [nM.q7.OVERLAY]: A.default.liTNf3,
    [nM.q7.PROFILE_WIDGET]: A.default["EswAi+"],
    [nM.q7.AUTOMOD]: A.default.DnWMLj,
    [nM.q7.BOT]: A.default.VFWfz1,
    [nM.q7.APPLICATION_COMMANDS]: A.default.w7JaEP,
};
function aN(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aS = {
        [nM.q7.APP_CHANNEL]: A.default["3/aHX6"],
        [nM.q7.VOICE_CHANNEL]: A.default["3/aHX6"],
        [nM.q7.ACTIVITY]: A.default["3/aHX6"],
        [nM.q7.OVERLAY]: A.default["rPpf5/"],
        [nM.q7.PROFILE_WIDGET]: null,
        [nM.q7.AUTOMOD]: null,
        [nM.q7.BOT]: null,
        [nM.q7.APPLICATION_COMMANDS]: null,
    },
    aC = [nM.q7.OVERLAY, nM.q7.ACTIVITY, nM.q7.APP_CHANNEL, nM.q7.VOICE_CHANNEL];
var aE = n(176999),
    aI = (((l = {}).IMAGE = "image"), l),
    a_ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aM = n(773669);
let aT = [],
    aP = {};
function aR(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aL(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aI.IMAGE,
        visibility: a_.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var a$ = n(127258),
    aD = n(587895),
    aO = n(320095),
    az = n(963852),
    aF = n(95701),
    aq = n(889227),
    aU = n(155718);
let aG = ["command", "user_command", "message_command", "message"],
    aB = new Set([aU.kc.CHAT, aU.kc.USER, aU.kc.MESSAGE]);
function aK(e) {
    return e.type ?? aU.kc.CHAT;
}
function aH(e) {
    return "launch" !== e.kind && aB.has(aK(e));
}
function aV(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aW(e, t) {
    let n = aG.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aV(e)), ...n.filter(aV)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aV(r) || l.push(r);
    }
    return aG.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let aJ = new aF.nA({ id: "1337", guild_id: "1337", type: eV.rbe.GUILD_TEXT, name: "preview" });
function aX(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, s.bG)([eY.default], () => eY.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e0.nj)(new aq.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aY = /^@\S+/;
var aQ = n(628284),
    aZ = n(97808),
    a0 = n(778712),
    a1 = n(809115),
    a2 = n(486020),
    a3 = n(200700);
let a7 = {
        alert: { label: () => N.intl.string(A.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => N.intl.string(A.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => N.intl.string(A.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => N.intl.string(A.default.RGzFNK), blockedStyle: !1 },
    },
    a5 = {
        blocked: { label: () => N.intl.string(A.default.YdnZ8q), tone: "red" },
        alert: { label: () => N.intl.string(A.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => N.intl.string(A.default.RGzFNK), tone: "green" },
    },
    a6 = ["blocked", "alert", "allowed"],
    a4 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var a8 = n(984097),
    a9 = n(13673);
let ie = { blocked: ab.ShieldIcon, alert: e5.BellIcon, allowed: aQ.y },
    it = {
        blurple: { text: "text-brand", icon: er.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: er.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: er.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function il(e) {
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
                              null != (l = (0, a3.getFriendlyDurationString)(n))
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
function ir(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = a7[n.outcome];
    return (0, a.jsxs)("li", {
        className: W()(a8.nM, { [W()(a8.HV, a9.DX)]: r }),
        children: [
            (0, a.jsx)(eB.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: a8.my,
                children: (0, a.jsx)(aZ.eu, {
                    src: (0, a2.AE)(void 0, void 0),
                    size: a0._3.SIZE_24,
                    "aria-label": N.intl.string(A.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: a8.fw,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), r3.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(il, { example: n }),
                ],
            }),
        ],
    });
}
function ia(e) {
    let { group: t } = e,
        n = i.useId(),
        l = a5[t.section],
        r = ie[t.section],
        s = it[l.tone];
    return (0, a.jsxs)("div", {
        className: a8.uW,
        children: [
            (0, a.jsxs)("div", {
                className: a8.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(Y.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: a8.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: a8.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(ir, { example: e }, t)),
            }),
        ],
    });
}
function ii() {
    let { avatarSrc: e, eventHandlers: t } = (0, a1.a)(!0);
    return (0, a.jsx)("span", {
        className: a8.Gy,
        ...t,
        children: (0, a.jsx)(aZ.eu, { src: e, size: a0._3.SIZE_16, "aria-label": N.intl.string(N.t.hG1StD) }),
    });
}
function is(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: a8.K1,
        children: ((t = n.examples),
        a6
            .map((e) => ({ section: e, examples: t.filter((t) => a4[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(ia, { group: e }, e.section)),
    });
}
var io = n(460905),
    iu = n(110384),
    ic = n(763754),
    id = n(217424),
    im = n(194085),
    ih = n(20851),
    ig = n(692508),
    ip = n(798819);
function ix(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: W()(ip.item, ip.labelContainer, ip.colorDefault, {
            [ip.focused]: !0 === t.highlighted,
            [ip.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: ip.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: ip.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: W()(ip.label, ig.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: ip.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: ip.icon }),
                  })
                : null,
        ],
    });
}
function iv(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: W()(t, ig.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: N.intl.string(N.t["5IEsGx"]), icon: iu.W, muted: !0 }
                : { label: N.intl.string(N.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: W()(ip.menu, ig.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: ip.scroller,
            children: [
                (0, a.jsx)(ix, { item: s }),
                (0, a.jsx)("div", { className: ip.separator }),
                (0, a.jsx)(ix, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var ij = n(381941);
function ib() {}
function iy(e) {
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
        } = ((t = (0, s.bG)([eY.default], () => eY.default.getCurrentUser())),
        (n = (0, s.bG)([G.Ay], () => G.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, s.bG)([aD.A], () => aD.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (o = n?.name ?? N.intl.string(A.default.JEYq8M)),
        (u = (0, s.bG)([eY.default], () => (null != l ? eY.default.getUser(l) : void 0), [l])),
        (d = aX("31337", o, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (f = c ? u : d),
        (m = aX("31338", N.intl.string(A.default["9iAOsw"]), { discriminator: "0003" })),
        (h = aX("31339", (0, eQ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, aO.rh)({
                                          ...(0, az.Ay)({
                                              channelId: aJ.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eV.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eV.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: a$.G.APPLICATION_COMMAND,
                                                        user: (0, az.Vi)(s),
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
                                              messageType: eV.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eV.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aY, `<@${i.id}>`)), s),
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
              className: W()(ig.TE, `group-spacing-${ij.ES}`),
              children: x.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? ig.Rz : void 0,
                          children: [
                              (0, a.jsx)(ih.A, {
                                  message: n,
                                  channel: aJ,
                                  author: (0, ic.FT)(n.author, aJ),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(id.A, { message: n, channel: aJ }) : void 0,
                                  usernameClassName: r?.target === "user" ? ig.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: ig.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(im.Ay, {
                                            children: [
                                                (0, a.jsx)(im.qv, {
                                                    label: N.intl.string(N.t.lfIHs4),
                                                    icon: io.n,
                                                    onClick: ib,
                                                }),
                                                (0, a.jsx)(im.qv, {
                                                    label: N.intl.string(N.t["5IEsGx"]),
                                                    icon: iu.W,
                                                    onClick: ib,
                                                }),
                                                (0, a.jsx)(im.qv, {
                                                    label: N.intl.string(N.t["UKOtz+"]),
                                                    icon: tl.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: ib,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? ig.ET : ig.je,
                                        inert: !0,
                                        children: (0, a.jsx)(iv, {
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
var iw = n(633075),
    ik = n(946356),
    iA = n(58216),
    iN = n(27399);
function iS(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        r = i.useMemo(() => new iw.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iN.H,
              children: (0, a.jsx)(ik.A.Overlay, {
                  className: iN.w,
                  children: (0, a.jsx)(iA.A, {
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
var iC = n(443863);
let iE = {
    [nM.q7.APP_CHANNEL]: ag.k,
    [nM.q7.VOICE_CHANNEL]: ap.H,
    [nM.q7.ACTIVITY]: ax.b,
    [nM.q7.OVERLAY]: av.GameControllerIcon,
    [nM.q7.PROFILE_WIDGET]: aj.f,
    [nM.q7.AUTOMOD]: ab.ShieldIcon,
    [nM.q7.BOT]: ay.RobotIcon,
    [nM.q7.APPLICATION_COMMANDS]: aw.k,
};
function iI(e) {
    let { label: t, icon: n, info: l, children: r } = e;
    return (0, a.jsxs)("section", {
        className: iC.uW,
        children: [
            (0, a.jsxs)("span", {
                className: iC.a9,
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
function i_(e) {
    let { text: t, label: n } = e;
    return (0, a.jsx)(eP.m, {
        text: t,
        children: (0, a.jsx)(em.D, {
            className: iC.bk,
            "aria-label": n,
            children: (0, a.jsx)(ak.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function iM(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(iI, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: iC.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: iC.jw,
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
function iT(e) {
    let { tags: t } = e;
    return (0, a.jsx)("span", {
        className: iC.K2,
        children: t
            .filter((e) => e in iE)
            .map((e) => {
                let t = iE[e];
                return (0, a.jsxs)(
                    "span",
                    {
                        className: iC.L6,
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
                                children: N.intl.string(aA[e]),
                            }),
                        ],
                    },
                    e,
                );
            }),
    });
}
function iP(e) {
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
        : (0, a.jsx)(iI, {
              label: N.intl.string(A.default.X15LLY),
              info: (0, a.jsx)(i_, { text: N.intl.string(A.default.nR4B8P), label: N.intl.string(A.default.nc0SNY) }),
              children: (0, a.jsx)(em.D, {
                  className: iC.xX,
                  onClick: c,
                  "aria-label": N.intl.string(A.default.TvAPIm),
                  children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: iC.sN, onError: u }) : null,
              }),
          });
}
function iR(e) {
    let t,
        n,
        l,
        r,
        { projectId: o, proposal: u, version: c, onApprove: d } = e,
        f = aN(u, nM.q7.AUTOMOD) ? u.automod : null,
        { botExchanges: m } =
            ((t = aN(u, nM.q7.APPLICATION_COMMANDS)),
            (n =
                aN(u, nM.q7.BOT) || t
                    ? null != u.bot
                        ? u.bot.interaction
                        : t && u.commands.some(aH)
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
                              let s = e.commands.filter(aH).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (aK(e)) {
                                              case aU.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case aU.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(aV),
                                  u = a.length > 0 ? aW([...a, ...o], !0) : aW("both" === t ? [...s, i] : s, !1);
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
                r = (0, s.bG)([aM.default], () => aM.default.locale),
                a = (0, s.bG)([G.Ay], () => {
                    let t = G.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                o = (function (e, t) {
                    let [n, l] = i.useState(aP);
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
                                                          ...aR(n),
                                                          ...(null != n.fallback ? { fallback: aR(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aE.uW.safeParse(r);
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
                                                                    type: aE.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aE.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aE.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aL),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aT,
                                            },
                                        };
                              })(n, l, o, r),
                    [n, l, o, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(o, u),
        p = aN(u, nM.q7.PROFILE_WIDGET) ? h : null,
        x = c?.superseded === !0,
        v = u.what_changed?.trim() ?? "";
    return (0, a.jsxs)(lT, {
        title:
            x && null != c
                ? N.intl.formatToPlainString(A.default.YZ3qJs, { version: c.version })
                : N.intl.string(A.default["3b6e7o"]),
        meta: x
            ? (0, a.jsx)(lM, { children: N.intl.string(A.default.hF2c41) })
            : (0, a.jsx)(iT, { tags: u.supported_surfaces ?? [] }),
        superseded: x,
        showLabel: N.intl.string(A.default.yD8EJS),
        hideLabel: N.intl.string(A.default.nSPGNb),
        bodyClassName: iC.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== v
                ? (0, a.jsx)(iI, {
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
                ? (0, a.jsx)(iI, {
                      label: N.intl.string(A.default.z4ZKYG),
                      icon: (0, a.jsx)(ii, {}),
                      info: (0, a.jsx)(i_, {
                          text: N.intl.string(A.default.bo4MOx),
                          label: N.intl.string(A.default.VPLNot),
                      }),
                      children: (0, a.jsx)(is, { automod: f }),
                  })
                : null,
            null != u.design_image
                ? (0, a.jsx)(iP, {
                      projectId: o,
                      design: u.design_image,
                      alt: N.intl.string(null == (r = aC.find((e) => aN(u, e))) ? A.default["3/aHX6"] : aS[r]),
                  })
                : null,
            m.length > 0
                ? (0, a.jsx)(iI, {
                      label: N.intl.string(A.default.sA1lTv),
                      info: (0, a.jsx)(i_, {
                          text: N.intl.string(A.default.NnmbJu),
                          label: N.intl.string(A.default.KsqQJX),
                      }),
                      children: (0, a.jsx)(iy, { projectId: o, exchanges: m }),
                  })
                : null,
            null != p
                ? (0, a.jsx)(iI, {
                      label: N.intl.string(A.default.ove4zH),
                      info: (0, a.jsx)(i_, {
                          text: N.intl.string(A.default.XcIrHx),
                          label: N.intl.string(A.default["TwT+ht"]),
                      }),
                      children: (0, a.jsx)(iS, { ...p }),
                  })
                : null,
            u.changes.length > 0
                ? (0, a.jsx)(iI, {
                      label: N.intl.string(A.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: iC.p_,
                          children: u.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: iC.Aw,
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
                ? (0, a.jsx)(iI, {
                      label: N.intl.string(N.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: iC.p_,
                          children: u.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: iC.uX,
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
            (0, a.jsx)(iM, { label: N.intl.string(A.default["2UbW6r"]), names: u.bot_permissions ?? [] }),
            (0, a.jsx)(iM, { label: N.intl.string(A.default["7TKfpj"]), names: u.privileged_intents ?? [] }),
            null == d || x
                ? null
                : (0, a.jsxs)("div", {
                      className: iC.o1,
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
function iL(e) {
    return null != e && e.status?.state === "unpublished";
}
let i$ = new WeakMap();
function iD(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, s.bG)([f.A], () => (null == n ? null : f.A.getGuild(n)));
    return (0, a.jsx)(tx.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(tx.B, {
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
                    ? (0, a.jsxs)(tx.B, {
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
function iO(e) {
    let { projectId: t } = e,
        n = (0, td.Ay)(t);
    return null != n && iL(n) ? (0, a.jsx)(iD, { publish: n }) : null;
}
var iz = n(989271);
function iF(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(em.D, {
        className: W()(iz.nM, { [iz.f1]: s, [iz.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": N.intl.formatToPlainString(A.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: iz.jo,
                children: [
                    n
                        ? (0, a.jsx)(t6.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: iz.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: iz.G9,
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
function iq(e) {
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
                iF,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function iU(e) {
    let { onAsk: t } = e;
    return (0, a.jsx)(tx.B, {
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
var iG = n(530557),
    iB = n(872162);
function iK(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var iH = n(202723);
function iV(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: iG.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => iK(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(iK(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        f = W()(iH.Lo, { [iH.jY]: d });
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
                        (0, a.jsx)(iB.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: iH.Lo,
                      children: (0, a.jsx)(iB.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
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
                                className: iH.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: iH.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(aQ.y, {
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
                            (0, a.jsx)(iB.C, { label: N.intl.string(A.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: iH.Lo,
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
                        (0, a.jsx)(iB.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: iH.sq,
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
var iW = n(919790),
    iJ = n(971824),
    iX = n(162052),
    iY = n(165648);
function iQ(e) {
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
                glyph: (0, a.jsx)(r2.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: N.intl.string(A.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = m ? ((0, ly.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = (0, r5.n)(w.map((e) => e.taskId)),
        S = !g && (l || w.some((e) => "running" === e.task.status)),
        C = (0, r9.k)(w);
    return (0, a.jsxs)("ol", {
        className: lF.pj,
        "data-live": S,
        children: [
            (0, a.jsx)(lA.Ay, {
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
                let l = null != e.task.helperMark ? (0, r5.p)(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          ae,
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
            (0, a.jsx)(af, { projectId: t, steps: n, tree: x, segment: f }),
            y
                ? (0, a.jsx)("li", {
                      className: lF.YO,
                      children: (0, a.jsx)(lO, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function iZ(e) {
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
            hoistedAttachmentsHost: w,
            restoreProposal: k,
            onRestoreProposal: S,
        } = e,
        C = i.useMemo(
            () => r7({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: _, closingContent: M } = C,
        T = (y ? w : void 0) ?? C.attachmentsHost,
        P = _ && !y,
        R = null == u ? null : (0, a.jsx)(iW.A, { projectId: t, attachments: u }),
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
                                          className: iY.PT,
                                          children: r3.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(iR, { projectId: t, proposal: r, version: s, onApprove: v })
                : P
                  ? (0, a.jsxs)("div", {
                        className: W()(lF.ky, iX.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: W()(iY.PT, lF.cW),
                                children: r3.A.parse(M, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: W()(lF.ky, iX.XR, { [iJ.O]: null != f && "open" === m }),
                      children: (0, a.jsx)(iV, {
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
                      className: W()(lF.ky, iX.XR),
                      children: (0, a.jsx)(rB, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != g ? (0, a.jsx)(iO, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(iq, { ideas: o, pickedIdeaIds: x, onPick: p }) : null,
            null != k ? (0, a.jsx)(ah, { proposal: k, onRestore: S }) : null,
            P ? null : $,
        ],
    });
}
var i0 = n(146806),
    i1 = n(477262),
    i2 = n(432017),
    i3 = n(475358),
    i7 = n(717400),
    i5 = n(663341),
    i6 = n(559647),
    i4 = n(775602),
    i8 = n(234320),
    i9 = n(285796),
    se = n(922329);
async function st(e) {
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
var sn = n(153171);
function sl(e, t, n, l) {
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
                              let n = await st(e).catch(() => null);
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
function sr(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = rm.useState((e) => rh(e, t, n)),
        a = i.useCallback((e) => sl(t, n, e, l), [t, n, l]),
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
        u = i.useCallback(() => rk(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function sa(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(se.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: sn.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: sn.o1,
                onClick: () => n(t.localId),
                "aria-label": N.intl.string(A.default.Slam9g),
                children: (0, a.jsx)(i9.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var si = n(497437);
let ss = [
        {
            id: "add-images-videos",
            label: A.default["51+9lc"],
            icon: i1.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: A.default["10ljr2"],
            icon: i2.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: A.default.aotDee, icon: eu.H, accept: "" },
    ],
    so = "text-md/normal",
    su = null;
function sc(e) {
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
                frontFrom: 1e3 * (0, i0._R)(f),
                frontTo: 1e3 * (0, i0._R)(h),
                backFrom: 1e3 * (0, i0.T)(f),
                backTo: 1e3 * (0, i0.T)(h),
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
    let S = "in" === b ? p.backFrom : p.frontFrom,
        C = "out" === b ? p.frontTo : p.backTo,
        E = (0, s.bG)([i4.Ay], () => i4.Ay.useReducedMotion),
        I = t === N.intl.string(A.default.Zc7gML),
        _ = r === t && I;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: W()(si.VT, { [si.qk]: l }),
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
            children: (0, a.jsx)(i3.e, { shortcut: "tab", className: si.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eb.o, {
                text: t,
                variant: so,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: W()(si.xM, { [si.s2]: l }),
                onStart: k,
                onComplete: () => o(t),
            }),
            M(si.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: si.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Y.E, { variant: so, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: si.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Y.E, { variant: so, tag: "span", className: si.xM, children: t }),
                          M(si.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sd = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                running: l,
                restoring: r = !1,
                onSend: o,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: f,
                suggestion: m,
                questionOpen: h = !1,
                hasPendingContext: g = !1,
                onDraftHasTextChange: p,
                modelSettings: x,
                onModelSettingsChange: v,
            } = e,
            [j, b] = i.useState(() => r0.getDraft(t)),
            y = i.useCallback(
                (e) => {
                    (lx.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), b(e));
                },
                [t],
            ),
            w = "" !== j.trim();
        i.useEffect(() => p?.(w), [w, p]);
        let [k, S] = i.useState(t);
        k !== t && (S(t), b(r0.getDraft(t)));
        let C = (0, s.bG)([i4.Ay], () => i4.Ay.isSubmitButtonEnabled),
            [E, I] = i.useState(!1);
        i.useEffect(() => {
            l || I(!1);
        }, [l]);
        let _ = i.useRef(null),
            {
                drafts: M,
                addFiles: T,
                pasteFiles: P,
                removeDraft: R,
                settled: L,
                takeRefs: $,
            } = sr({ projectId: t, surface: "chat", onUploadFile: c }),
            D = "" !== j.trim() || M.length > 0 || g,
            O = n && D && L,
            [z, F] = i.useState(null);
        i.useEffect(() => {
            if (null == z) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => F(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [z]);
        let q = i.useCallback(() => {
                if (!O) return;
                let e = $();
                o(j, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == su && (su = document.createElement("canvas").getContext("2d"));
                    let i = su;
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
                })(W.current?.querySelector("textarea") ?? null, er.current, j);
                ("" !== t && F(t), y(""));
            }, [O, j, o, $, y]),
            U = i.useCallback(
                (e) => {
                    (e.preventDefault(), q());
                },
                [q],
            ),
            G = i.useCallback(() => {
                null == u || E || (I(!0), u());
            }, [u, E]),
            B = null == m || "" !== j || !n || r || g ? null : m,
            K = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && l && null != u && !E) {
                        (e.preventDefault(), e.stopPropagation(), G());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != B) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(B));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
                },
                [q, d, l, u, E, G, B, y],
            ),
            H = i.useCallback(
                (e) => {
                    n && P(e);
                },
                [n, P],
            );
        (0, i8.Vo)({
            event: eV.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return H(t);
            },
        });
        let V = i.useCallback(
                (e) => {
                    (T(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [T],
            ),
            W = i.useRef(null),
            J = i.useRef(null),
            X = i.useCallback((e) => {
                let t = _.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [Y, Q] = i.useState(0),
            [Z, ee] = i.useState(!1);
        i.useEffect(() => {
            if (0 === j.length) return void ee(!1);
            let e = W.current?.querySelector("textarea");
            if (null != e) {
                let t = sh(e);
                null != t && Q(t);
            }
            ee(!0);
            let t = setTimeout(() => ee(!1), sf);
            return () => clearTimeout(t);
        }, [j]);
        let et = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            en = Z ? ` ${si.EB}` : "",
            el = r
                ? N.intl.string(A.default.qqlUiW)
                : n
                  ? g
                      ? N.intl.string(A.default.knUjL3)
                      : h
                        ? N.intl.string(A.default.IevBEw)
                        : N.intl.string(l ? A.default["0BJa/0"] : A.default.TEeU7z)
                  : N.intl.string(A.default.zZ9NgM),
            er = i.useRef(0),
            ea = i.useRef(null),
            eu = i.useCallback((e) => {
                if ((ea.current?.disconnect(), null == e)) return;
                er.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    er.current = e.clientWidth;
                });
                (t.observe(e), (ea.current = t));
            }, []),
            ec = i.useId(),
            ed = null != B,
            ef = z ?? B ?? el,
            em = "" === j && "" !== ef;
        return (0, a.jsxs)("form", {
            onSubmit: U,
            className: si.DA,
            children: [
                M.length > 0
                    ? (0, a.jsx)("div", {
                          className: si.lN,
                          children: M.map((e) => (0, a.jsx)(sa, { draft: e, onRemove: R }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${si.wg} ${si.LP}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${si.wg} ${si.L3}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: si.VA,
                    ref: W,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: V,
                            className: si.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(ei.Y, {
                            targetElementRef: J,
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
                                            ss.map((e) =>
                                                (0, a.jsx)(
                                                    eo.Dr,
                                                    {
                                                        id: e.id,
                                                        label: N.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => X(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != f
                                                ? (0, a.jsx)(eo.Dr, {
                                                      id: "import-project",
                                                      label: N.intl.string(A.default["p/k5i7"]),
                                                      iconLeft: i7.q,
                                                      leadingAccessory: { type: "icon", icon: i7.q },
                                                      action: f,
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
                                    ref: J,
                                    type: "button",
                                    className: `${si.Y0} ${si.nu}`,
                                    disabled: !n,
                                    "aria-label": N.intl.string(N.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(i5.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: si.Qu,
                                    }),
                                });
                            },
                        }),
                        em
                            ? (0, a.jsx)("div", {
                                  ref: eu,
                                  className: si.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(sc, { text: ef, offering: ed && null == z, typed: null != z }),
                              })
                            : null,
                        (0, a.jsx)(lK.y, {
                            value: j,
                            onChange: (e) => y(e.currentTarget.value),
                            onKeyDown: K,
                            onPaste: H,
                            placeholder: em ? "" : el,
                            disabled: !n,
                            "aria-label": N.intl.string(A.default.ldNl9x),
                            "aria-describedby": em ? ec : void 0,
                            rows: 1,
                            className: si.jp,
                        }),
                        em ? (0, a.jsx)(eB.A, { id: ec, children: el }) : null,
                        (0, a.jsx)("div", {
                            className: si.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eP.m, {
                                          text: N.intl.string(A.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${si.Y0} ${si.$E}`,
                                              disabled: E,
                                              onClick: G,
                                              "aria-label": N.intl.string(A.default.wiguT0),
                                              children: (0, a.jsx)(r2.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : x?.tierSettings != null && null != v
                                      ? (0, a.jsx)(eG, {
                                            settings: x.tierSettings,
                                            tiers: x.tiers,
                                            choices: x.choices,
                                            disabled: !n,
                                            onChange: v,
                                            className: `${si.Y0} ${si.$E}`,
                                            icon: (0, a.jsx)(eR.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        C
                            ? (0, a.jsxs)("div", {
                                  className: si.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: si.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: si.rt,
                                          disabled: !O,
                                          "aria-label": N.intl.string(A.default.rxW2cl),
                                          children: (0, a.jsx)(i6.SendMessageIcon, {
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
    sf = 1500,
    sm = [
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
function sh(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = sh.mirror;
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
                (sh.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of sm) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
sh.mirror = null;
var sg = n(148087);
let sp = [6e4, 18e4, 6e5],
    sx = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: sp,
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
                    (0, lw.BL)(t) &&
                    !(null != n.publishCta && iL(l))
                );
            },
        },
    ];
function sv(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("publish_notice" !== n.kind && "project_event" !== n.kind && "context_boundary" !== n.kind) {
            if ("user" === n.role) return null;
            if ((0, lw.BL)(n)) return n;
            if (!(0, lw.B0)(e, t)) break;
        }
    }
    return null;
}
function sj(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0
    );
}
function sb(e, t) {
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
let sy = new Map();
function sw(e) {
    return (0, s.bG)([G.Ay, aD.A], () => {
        let t = G.Ay.getProject(e);
        return null == t ? "" : (aD.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function sk(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(sN, { projectId: t }) : (0, a.jsx)(sA, { projectId: t, notice: n });
}
function sA(e) {
    let { projectId: t, notice: n } = e,
        l = sw(t),
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
function sN(e) {
    let { projectId: t } = e,
        n = (0, td.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(sS, {})
          : (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: N.intl.format(A.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), sy.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function sS() {
    let e = N.intl.string(A.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, s.bG)([i4.Ay], () => i4.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, sg.A)());
    return (0, a.jsxs)(Y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var sC = n(248798);
function sE(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function sI(e) {
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
            sE(e, t);
            let n = new ResizeObserver(() => sE(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: o,
            className: W()(sC.NI, { [sC.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: sC.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : u,
                            "aria-hidden": e.leaving || void 0,
                            "data-conjure-entrance": !0,
                            className: W()(sC.qd, e.leaving ? sC.cu : sC.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var s_ = n(986109);
let sM = i.createContext(null);
function sT(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(sM),
        [d, f] = i.useState(() => i4.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: W()(s_.xk, { [s_.g5]: d, [s_.Qo]: s, [s_.q3]: o }),
        children: n,
    });
}
let sP = "conjureTipDismissals",
    sR = new Set(),
    sL = new Set(),
    s$ = 0;
function sD() {
    let e = tG.w.get(sP);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function sO(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return sR.has(((n = e.id), `${t}:${n}`));
        case "app":
            return sD().app[t]?.includes(e.id) === !0;
        case "forever":
            return sD().forever.includes(e.id);
    }
}
function sz(e) {
    return (sL.add(e), () => sL.delete(e));
}
let sF = [];
var sq = n(292771);
function sU(e) {
    let { presentation: t, render: n } = e,
        l = (0, s.bG)([i4.Ay], () => i4.Ay.useReducedMotion),
        [r, o] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        o([
            ...r.filter((e) => e.presentation !== t).map((e) => ({ ...e, leaving: !0 })),
            { presentation: t, leaving: !1 },
        ]);
    let c = i.useRef(null),
        d = i.useRef(null),
        f = i.useRef(null),
        m = i.useRef(u);
    i.useLayoutEffect(() => {
        let e,
            t,
            n = c.current;
        if (null == n) return;
        let r = n.querySelector('[data-tip-layer="active"]'),
            a = r?.querySelector("[data-conjure-tip-icon]"),
            i = d.current,
            s = f.current,
            o = r?.offsetHeight ?? 0,
            h =
                null != a
                    ? ((e = n.getBoundingClientRect()),
                      { left: (t = a.getBoundingClientRect()).left - e.left, top: t.top - e.top, width: t.width })
                    : null;
        ((d.current = h), (f.current = o));
        let g = m.current !== u;
        if (((m.current = u), !g || l || null == s || null == i || null == a || null == h)) return;
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
            let e = setTimeout(() => o((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: sq.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: W()(sq.qd, e.leaving ? sq.dv : sq.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var sG = n(817921);
function sB(e) {
    return 0 === sF.length ? null : (0, a.jsx)(sK, { ...e, tips: sF });
}
function sK(e) {
    let t,
        n,
        l,
        { projectId: r, messages: s, draftHasText: o, tips: u } = e,
        c =
            ((t = (0, td.Ay)(r)),
            (l = null == (n = sv(s)) || sj(n) ? null : n),
            i.useMemo(() => ({ projectId: r, turn: l, publish: t, draftHasText: o }), [r, l, t, o]));
    i.useSyncExternalStore(sz, () => s$);
    let { callout: d, hint: f } = (function (e, t, n) {
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
        })(u, c, (e) => sO(e, r)),
        m = [d, f].filter((e) => null != e);
    return 0 === m.length
        ? null
        : (0, a.jsx)(sT, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: sG.X,
                  children: m.map((e) => {
                      let { tip: t, presentation: n } = e;
                      return (0, a.jsx)(
                          sU,
                          {
                              presentation: n,
                              render: (e) =>
                                  t.render(e, {
                                      dismiss:
                                          null != t.dismissal
                                              ? () =>
                                                    (function (e, t) {
                                                        if (!(null == e.dismissal || sO(e, t))) {
                                                            if ("session" === e.dismissal) {
                                                                var n;
                                                                sR.add(((n = e.id), `${t}:${n}`));
                                                            } else {
                                                                let n = sD();
                                                                tG.w.set(
                                                                    sP,
                                                                    "forever" === e.dismissal
                                                                        ? { ...n, forever: [...n.forever, e.id] }
                                                                        : {
                                                                              ...n,
                                                                              app: {
                                                                                  ...n.app,
                                                                                  [t]: [...(n.app[t] ?? []), e.id],
                                                                              },
                                                                          },
                                                                );
                                                            }
                                                            (s$++, sL.forEach((e) => e()));
                                                        }
                                                    })(t, r)
                                              : void 0,
                                  }),
                          },
                          t.id,
                      );
                  }),
              }),
          });
}
var sH = n(52133),
    sV = n(732159),
    sW = n(888366),
    sJ = n(862026),
    sX = n(291192);
function sY(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, sJ.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: sX.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: sX.Sp,
                children: [
                    (0, a.jsx)("span", { className: sX.q3 }),
                    (0, a.jsxs)("span", {
                        className: sX.g8,
                        children: [
                            (0, a.jsx)(sW.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Y.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: sX.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: sX.nM,
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
                                          (0, a.jsx)(lH.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tv.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(sV.u, {
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
var sQ = n(940874);
n(775443);
var sZ = n(616e3),
    s0 = n(155899),
    s1 = n(521981),
    s2 = n(491182),
    s3 = n(438729),
    s7 = n(622868),
    s5 = n(448368),
    s6 = n(837528),
    s4 = n(470964),
    s8 = n(715628),
    s9 = n(752636),
    oe = n(9842),
    ot = n(589022),
    on = n(967198),
    ol = n(531685);
let or = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oa(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oi(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function os(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oi(e, t),
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
    if (oa(r) && oa(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oa(oi(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oo(e, t) {
    let { streaming: n } = t,
        l = (0, s.bG)([i4.Ay], () => i4.Ay.useReducedMotion),
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
                      for (; a > 0 && os(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && or.has(e.charAt(l - 1));) l--;
                                    return or.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && os(t, o);) o++;
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
var ou = n(624479),
    oc = n(890377),
    od = n(744898),
    of = n(180227);
function om(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: W()(of.QE, { [of.Rn]: t }),
              children: (0, a.jsx)(im.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          im.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oh(e) {
    return ti.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: N.intl.string(N.t.JrGD7E), icon: ou.CopyIcon, onClick: () => (0, ti.C)(e) }]
        : [];
}
function og(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: N.intl.string(A.default.CXtLD2),
                          tooltip: N.intl.string(A.default.DOb1HM),
                          icon: oc.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: N.intl.string(A.default.urZwpN),
                          icon: et.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(om, { groupStart: n, actions: [...r, ...oh(t)] });
}
function op(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: N.intl.string(A.default.H8Jfhu), icon: od.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: t8.BugIcon, onClick: r }];
    return (0, a.jsx)(om, { groupStart: n, actions: [...i, ...oh(t), ...s] });
}
let ox = (0, aF.createChannelRecord)({ id: "conjure-builder", type: eV.rbe.DM }),
    ov = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oj(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: W()(of.Yq, { [of.x1]: t }), children: e });
}
function ob(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function oy(e, t, n) {
    let { content: l } = (0, s4.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: ox, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(s3.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, s8.A)(r, l);
}
function ow(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        o = (0, s6.m)(e, ox, t.usernameProfile, l),
        u = (0, s6.Jo)(t.avatarProfile, l),
        c = (0, s.bG)([on.A], () => on.A.getGuildId()),
        d = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        f = i.useCallback(
            (t) => {
                let n = eY.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ot.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function ok(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        o = i.useMemo(() => {
            let e = "" !== n.content ? (0, s1.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: of.GV,
                              children: [
                                  (0, a.jsx)(t4.x, {
                                      className: of.Rj,
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
            [tZ.A],
            () => ({
                isReplyAuthorBlocked: tZ.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: tZ.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, ic.X4)(n),
        f = (0, ic.X4)(t),
        m = ow(n);
    return (0, a.jsx)(s5.A, {
        repliedAuthor: d,
        baseAuthor: f,
        baseMessage: t,
        channel: ox,
        referencedMessage: { state: oe.a.LOADED, message: n },
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
function oA(e) {
    let { message: t, author: n } = e,
        l = ow(t);
    return (0, a.jsx)(s7.Ay, {
        message: t,
        channel: ox,
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
function oN(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => e7(l), [l]);
    let c = (0, s.bG)(
            [eY.default],
            () => e3(l, null != l ? eY.default.getUser(l) : null, eY.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, ic.FT)(c, null), [c]),
        f = i.useMemo(() => nx(t), [t]),
        m = f?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, az.Ay)({ channelId: ox.id, content: m, author: c });
            return (0, aO.rh)({ ...e, timestamp: ob(n, e.timestamp), state: eV.cmJ.SENT });
        }, [m, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(oS, {
              message: h,
              author: d,
              content: m,
              selected: f?.label,
              accessories: r,
              groupStart: o,
              onQueuedAction: u,
          });
}
function oS(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = oy(t, l);
    return (0, a.jsx)(s2.A, {
        className: of.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(oA, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: of.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: of.GV,
                              children: [
                                  (0, a.jsx)(t4.x, {
                                      className: of.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: of.WO, children: u }),
                      ],
                  }),
        childrenAccessories: oj(i, "" !== l),
        childrenButtons: (0, a.jsx)(og, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function oC(e) {
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
        { text: f, revealing: m } = oo(t, { streaming: (0, s.bG)([ol.A], () => c && ol.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, ic.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s.bG)(
            [eY.default],
            () => e3(p, null != p ? eY.default.getUser(p) : null, eY.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : nx(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, az.Ay)({ channelId: ox.id, content: v?.body ?? r.content, author: x });
            return (0, aO.rh)({ ...e, id: r.id, timestamp: ob(r.createdAt, e.timestamp), state: eV.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: ox.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, az.Ay)({ channelId: ox.id, content: "", author: ov })),
        w = i.useMemo(
            () =>
                (0, aO.rh)({
                    ...y,
                    timestamp: ob(n, y.timestamp),
                    state: eV.cmJ.SENT,
                    ...(null != b ? { type: eV.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", f), [w, f]),
        A = i.useMemo(
            () => (0, s9.A)({ message: w, channel: ox, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        N = oy(k, f, of.OS);
    return (0, a.jsxs)("div", {
        className: of.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": m ? "true" : void 0,
        children: [
            (0, a.jsx)(s2.A, {
                className: of.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(ok, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: o }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: oj(l, "" !== f),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: of.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(ag.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function oE(e) {
    let { onSelect: t, onClose: n = eK.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          icon: od.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eo.Dr, { id: "view-trace", label: "View Trace", icon: t8.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function oI(e) {
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
        j = null != v && null != p ? () => o_(v, p) : void 0,
        b =
            ((t =
                no() && "assistant" === x.role && (0, lw.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, s.bG)(
                [sZ.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : sZ.A.getTimingTraces(l).findLast((e) => {
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
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(sT, {
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
                          void (0, eK.jA)(t, (e) => (0, a.jsx)(oE, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oC, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(op, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(iZ, {
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
                restoreProposal: k,
                onRestoreProposal:
                    null != k && null != p && m
                        ? () =>
                              o_(
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
function o_(e, t) {
    (0, s0.F)({ onConfirm: () => t(e) });
}
var oM = n(288539);
function oT(e, t, n) {
    return (0, a.jsx)(oM.A, { userId: e, content: `@${t}` }, n);
}
function oP(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e7(l), [l]);
            let r = (0, s.bG)([eY.default], () => (null == l ? null : eY.default.getUser(l)), [l]),
                a = (0, eQ.tx)(r),
                o = sw(e),
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
        })(t, n, oT);
    return (0, a.jsx)(Y.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let oR = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oN, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, a.jsx)(iW.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, sQ.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oC, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(iW.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iQ, {
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
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oC, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(sk, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oC, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(oP, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, a.jsx)(sY, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iQ, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sT, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(iQ, {
                            projectId: n,
                            steps: oL,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oI, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, sH.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, sH.A)(e.row, t.row, ["message"]) &&
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
                (0, sH.A)(e.replyTo, t.replyTo) &&
                (0, sH.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oL = [],
    o$ = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oD = new WeakMap();
function oO(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function oz(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let oF = i.memo(function (e) {
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
        [w, k] = i.useState(null),
        S = i.useCallback((e) => {
            ((y.current = e), k(e));
        }, []),
        [C, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let _ = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        M = (0, s.bG)([li.A], () => li.A.getPublishStatus(t)?.state ?? null),
        T = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()?.id),
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
                        i = oD.get(r);
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
                        let a = !(0, lw.BL)(e),
                            i = r7({
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
                            if (null != n.prose && o$.test(n.prose.content)) f = !0;
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
                                        turnActive: lk(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let m = o$.test(e.content ?? "");
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
                    (oD.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                })(n, M)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = i$.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), i$.set(t, n)), n);
                      })),
                f,
            );
        }, [n, M, f]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        D = (function (e, t, n) {
            if (null == t) return oO(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : oz(e, t.endKey, t.end - 1) + 1,
                a = oz(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), oO(e, a, r));
        })(R, L, x),
        O = i.useRef(D),
        z = i.useRef(R),
        F = i.useRef(P),
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
                    return ((n = Math.min(e.length, t.end + 30)), oO(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), oO(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? oO(e, i, t.end) : null;
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
                    K());
            },
            recordAnchor: B,
            showLatest(e) {
                ((U.current = e ?? null), $(null));
            },
        }),
        [B, K],
    );
    let H = i.useRef(null),
        V = i.useCallback(
            (e) => {
                var n;
                let l;
                H.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (v(), $(O.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, p.P6)(t) && (H.current = e);
                    return;
                }
                (v(),
                    (U.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    $(((n = z.current), oO(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [_, v, t],
        );
    (i.useEffect(() => {
        let e = H.current;
        null != e && V(e);
    }, [P, V]),
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
    let J = null == D.endKey;
    (i.useEffect(() => b?.(J), [J, b]),
        i.useLayoutEffect(() => {
            ((O.current = D), (z.current = R), (F.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = q.current;
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
        }, [P, R, D.start, D.end, h, g, B, K]));
    let X = n.at(-1),
        Q = (function (e, t, n) {
            let l = (0, td.Ay)(e),
                r = (0, sg.A)(),
                a = sv(t),
                s = t.at(-1),
                o = {
                    projectId: e,
                    draftHasText: n,
                    publishing: l?.publishing === !0,
                    drift: l?.isUpdate === !0,
                    messageAt: null != s ? Math.max(s.created_at, s.finished_at ?? 0, s.settled_at ?? 0) : null,
                    visible: r,
                },
                [u, c] = i.useState(() => sb(o, Date.now())),
                d = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return sb(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, sp.length - 1);
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
                })(u, o, Date.now),
                f =
                    null == a || sj(a)
                        ? null
                        : {
                              turn: a,
                              publish: l,
                              draftHasText: n,
                              draftTyped: d.draftTyped && n,
                              outdatedUpdating: d.outdatedUpdating,
                          },
                { shown: m, nextDueAt: h } = (function (e, t) {
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
                    sx.map((e) => ({
                        ...e,
                        idleDelayMs:
                            "outdated" === e.key && d.outdatedUpdating
                                ? 0
                                : (e.backoffDelaysMs?.[d.outdatedBackoff] ?? e.idleDelayMs),
                        eligible: null != f && e.eligible(f),
                    })),
                    d,
                );
            return (
                "outdated" !== m || d.outdatedShown ? d !== u && c(d) : c({ ...d, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        c((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let n = sy.get(e) ?? new Set();
                    return (
                        sy.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && sy.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == h) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, h - Date.now()));
                    return () => clearTimeout(e);
                }, [h, d.now]),
                m
            );
        })(t, n, !0 === u),
        Z = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(oC, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(sk, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: s_.u$,
                            children: (0, a.jsx)(oC, {
                                content: N.intl.string(A.default.s96AWB),
                                accessories: (0, a.jsx)(iU, { onAsk: o }),
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
                            if (!(0, lw.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, lw.BL)(X)
                  ? X.awaitingUser
                  : null) ?? void 0,
        ei = (0, s.bG)([tf.A], () => tf.A.getSettings(t)?.secrets, [t]),
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
                        if (0 === o.length || !(0, lw.BL)(s)) continue;
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
                className: W()(s_.x7, s_.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: s_.Ub, children: (0, a.jsx)(en.y, {}) }),
            });
        let e = "unavailable" === l ? A.default.Td4Sf4 : A.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: s_.x7,
            children: (0, a.jsx)(sT, { role: "assistant", children: (0, a.jsx)(oC, { content: N.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(sM.Provider, {
        value: G,
        children: (0, a.jsxs)("ol", {
            ref: S,
            className: s_.x7,
            children: [
                P.slice(D.start, D.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            oR,
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
                        oR,
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
                    ? (0, a.jsx)(sT, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oC, {
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
                          className: s_.q3,
                          children: (0, a.jsx)(sI, { reminder: Q, renderReminder: Z }),
                      })
                    : null,
                J ? (0, a.jsx)(sB, { projectId: t, messages: n, draftHasText: !0 === u }) : null,
            ],
        }),
    });
});
var oq = n(731084),
    oU = n(823376),
    oG = n(187447);
function oB(e) {
    let { activity: t, id: n } = e,
        l = (0, sg.A)(),
        { text: r, revealing: s } = oo(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: oG.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(lj.Ch, {
                ref: o,
                className: oG.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: W()(iY.PT, oG.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: r3.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var oK = n(53659);
function oH(e) {
    let {
            activity: t,
            compacting: n = !1,
            saving: l = !1,
            restoring: r = !1,
            remixing: s = !1,
            recalling: o = !1,
            controlling: u = !1,
            publishPending: c = !1,
            spoken: d,
            onSpokenChange: f,
        } = e,
        m = i.useRef(null),
        h = i.useId(),
        [g, p] = i.useState(null),
        x = (0, oq.xu)({
            activity: t,
            compacting: n,
            saving: l,
            restoring: r,
            remixing: s,
            recalling: o,
            controlling: u,
            publishPending: c,
        }),
        v = N.intl.string(x),
        j = x === oq.kx["0"],
        [b, y] = i.useState(d ?? v),
        w = (0, sg.A)();
    (l || (0, oq.E4)(v, b) || (!w && !j)) && b !== v && y(v);
    let k = i.useRef(v);
    (i.useEffect(() => {
        k.current = v;
    }, [v]),
        i.useEffect(() => {
            f?.(b);
        }, [b, f]));
    let S = i.useRef(null),
        C = i.useRef(b);
    i.useEffect(() => {
        C.current = b;
    }, [b]);
    let E = i.useRef(j),
        I = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = j), !j && (0, oq.E8)(C.current) && y(k.current));
    }, [j]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((I.current = (0, oq.E8)(C.current) ? I.current + 1 : 0), y((0, oq.Ov)(I.current)))
                    : k.current !== C.current
                      ? y(k.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, oq.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [w]));
    let _ = null != t && "" !== t.text,
        M = t?.session ?? null,
        T = _ && null != M && g === M,
        P = i.useCallback(() => {
            _ && null != M && p((e) => (e === M ? null : M));
        }, [_, M]),
        R = i.useCallback(() => p(null), []);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: m,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: R,
        renderPopout: () => (0, a.jsx)(oB, { id: h, activity: t }),
        children: () =>
            (0, a.jsxs)(em.D, {
                innerRef: m,
                className: W()(oK.hF, _ && oK.Xd),
                "aria-label": N.intl.string(
                    r
                        ? A.default.qqlUiW
                        : x === A.default.j8tmjK
                          ? A.default.j8tmjK
                          : j
                            ? oq.kx["0"]
                            : A.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? h : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": N.intl.string(x),
                onClick: P,
                children: [
                    (0, a.jsx)("span", {
                        className: oK.bl,
                        children: (0, a.jsx)(oU.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: oK.xu,
                        "aria-hidden": !!u || !!j || void 0,
                        children: w
                            ? (0, a.jsx)(eb.o, {
                                  ref: S,
                                  text: b,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: oq.vg,
                                  delay: null,
                                  className: oK.yE,
                              })
                            : (0, a.jsx)(Y.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: oK.yE,
                                  children: b,
                              }),
                    }),
                ],
            }),
    });
}
var oV = n(85428),
    oW = n(242779),
    oJ = n(436804);
function oX(e) {
    return e.toLocaleString();
}
function oY(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: oJ.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: oJ.mf,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [oX((0, oW.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    oX(n.input_tokens),
                    " in \xb7 ",
                    oX(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${oX(n.cache_creation_input_tokens)} cache write \xb7 ${oX(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function oQ(e) {
    let { project: t } = e,
        n = (0, oW.wU)(t.compaction),
        l = (0, oW.wU)(t.classifier),
        r = (0, oW.wV)(t.orchestrator, t.codegen),
        i = (0, oW.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: oJ.si,
        role: "dialog",
        "aria-label": N.intl.string(A.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: oJ.Q$,
                children: (0, a.jsxs)("div", {
                    className: oJ.mf,
                    children: [
                        (0, a.jsxs)(Y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [oX((0, oW.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(oY, { label: N.intl.string(A.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(oY, { label: N.intl.string(A.default.ANCEo3), usage: n }),
            (0, a.jsx)(oY, { label: N.intl.string(A.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: oJ.mf,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: N.intl.string(A.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, oW.sj)(i) ? "\u2014" : `${Math.round(100 * (0, oW.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function oZ(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(oQ, { project: t }),
        children: (e) =>
            (0, a.jsx)(em.D, {
                innerRef: n,
                className: oJ.Y$,
                "aria-label": N.intl.string(A.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(ak.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var o0 = n(997421);
function o1(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: o,
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: f,
            projectUsage: m,
            connState: h,
        } = e,
        g = (0, nu.Zv)(t),
        p = (0, s.bG)([li.A], () => li.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, oq.E8)(e) || e === N.intl.string(A.default.mKK6wB) || e === N.intl.string(A.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == m ? null : (0, oq.uc)(m),
        y = null != o,
        w = o ?? (n ? l : void 0);
    return (0, a.jsxs)("div", {
        className: o0.jf,
        children: [
            (0, a.jsxs)("div", {
                className: o0.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || r || y || u || g || !0 === f
                        ? (0, a.jsx)(oH, {
                              activity: c,
                              compacting: d,
                              saving: f,
                              restoring: r,
                              remixing: y,
                              recalling: u,
                              controlling: g,
                              publishPending: p,
                              spoken: x,
                              onSpokenChange: j,
                          })
                        : null,
                    null != w ? (0, a.jsx)(oV.A, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(oV.L, { startedAt: w }) : null,
            null == m || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: o0.BP,
                      children: [
                          (0, a.jsx)(Y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(oZ, { project: m }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": N.intl.formatToPlainString(A.default["tCo+ZM"], { status: (0, oq.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: o0.XF,
                      children: (0, oq.Db)(h),
                  }),
        ],
    });
}
let o2 = ["wheel", "touchstart", "pointerdown", "keydown"];
var o3 = n(698638),
    o7 = n(608711);
let o5 = [N.intl.string(A.default["9w+Chc"]), N.intl.string(A.default.WAvmdq), N.intl.string(A.default.SKsrzl)];
function o6(e) {
    var t;
    let n,
        l,
        { projectId: r, restoreState: o, onRestoreVersion: u, onImportProject: c } = e,
        d = (0, s.bG)([eZ.A], () => eZ.A.getMessages(r), [r]),
        m = (0, s.bG)([p.Ay], () => p.Ay.getConnState(r), [r]),
        h = (0, s.bG)([eZ.A], () => eZ.A.getProjectUsage(r), [r]),
        x = (0, s.bG)([eZ.A], () => eZ.A.getThinkingActivity(r), [r]),
        v = (0, s.bG)([eZ.A], () => eZ.A.isCompacting(r), [r]),
        j = (0, s.bG)([eZ.A], () => eZ.A.isSaving(r), [r]),
        b = (0, s.bG)([rO.A], () => rO.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: S,
            pinned: C,
            atBottom: E,
            unpin: I,
            releasePinHold: _,
            showsLatest: M,
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
                f = i.useRef(!0),
                m = i.useCallback((e) => {
                    ((f.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of o2) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of o2) t.removeEventListener(e, u);
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
            (_(), T.current ? e() : k.current?.showLatest(e));
        }, [_, T]),
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
                r && (S.current ? w.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [S]),
        i.useEffect(() => {
            (0, p.Hc)(r);
        }, [r]),
        (0, rH.E1)(r));
    let D = nC(r),
        O = (function (e) {
            let t = (0, td.Ay)(e),
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
        })(r),
        z =
            ((n = (0, s.bG)([rF.A], () => rF.A.getFailure(r))),
            (l = i.useCallback(() => (0, rq.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: N.intl.format(A.default.Up6Ssw, { reason: n }),
                      retry: { text: N.intl.string(A.default["ywA+ET"]), onClick: l },
                  }),
        F = (0, s.bG)([rF.A], () => rF.A.getSetupStartedAt(r), [r]),
        q = i.useCallback(
            (e, t) => {
                (0, p.dv)(r, e, t);
            },
            [r],
        ),
        U = i.useCallback(
            (e, t) => {
                0 === D.annotations.length
                    ? q(e, t)
                    : (q(
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
                          })({ annotations: D.annotations, metaComment: e, context: D.context }),
                          t,
                      ),
                      nk(r));
            },
            [D, q, r],
        ),
        G = i.useCallback(() => (0, p.fu)(r), [r]),
        B = i.useCallback((e) => rA(r, e.implementation_prompt), [r]),
        [K, H] = (function (e) {
            let [t, n] = i.useState(() => r1(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? r1(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        V = i.useCallback(() => q(N.intl.string(A.default["t5CN3+"])), [q]),
        W = i.useCallback((e, t, n) => rA(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        J = i.useCallback((e) => (0, rz.X)(r, e), [r]),
        X = i.useCallback((e) => (0, g.vX)(r, e), [r]),
        Q = i.useCallback((e) => sl(r, "chat", Array.from(e), X), [r, X]),
        Z = i.useCallback(() => rA(r, N.intl.string(A.default.Zc7gML)), [r]),
        en = o?.status === "restoring",
        el = "open" === m && !en,
        er = d[d.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, es] = i.useState(null),
        eo = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        ec = (0, s.bG)([tf.A], () => tf.A.getSettings(r), [r]),
        [ed, ef] = i.useState(null),
        em =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, lw.BL)(er) &&
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
        eh = em?.settingsRequest ?? null,
        eg = i.useCallback(() => {
            null != em && ef(em.id);
        }, [em]),
        ep = null != eh,
        [ex, ev] = i.useState(null),
        ej = eo?.id ?? em?.id;
    i.useLayoutEffect(() => {
        let e = w.current?.getScrollerNode(),
            t = ex?.firstElementChild;
        if (null == ex || null == e || !(0, n0.vq)(t, HTMLElement) || null == ej) return;
        function n() {
            S.current && w.current?.scrollToBottom();
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
    }, [ex, ej, w, S]);
    let eb = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, s.bG)([eZ.A], () => eZ.A.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, s.bG)([eZ.A], () => eZ.A.isHistoryUnavailable(r), [r]),
            connState: m,
        }),
        ey = "loading" === eb && 0 === d.length,
        ew = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return o5[e % o5.length];
        }, [r]),
        ek = ea ? N.intl.string(A.default.Zc7gML) : "greeting" === eb && 0 === d.length ? ew : null,
        eA = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, lw.BL)(t)) return t;
            }
        }, [d]),
        eN = null != eA,
        eS = null != eA ? (0, rK.S)(eA) : void 0,
        eC = ea && el ? Z : void 0,
        eE = i.useCallback(() => rA(r, N.intl.string(A.default.EMgIuY)), [r]),
        [eI, e_] = i.useState(null),
        [eM, eT] = i.useState(eN);
    (eM !== eN && (eT(eN), eN || e_(null)),
        i.useEffect(() => {
            if (!eN) return;
            let e = w.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? e_(null)
                        : e_(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eN, eA?.steps, M]));
    let eR = M ? eI : "bottom",
        eL = i.useMemo(() => (null != eA ? (0, lA.b9)(eA.steps) : ""), [eA]),
        e$ = i.useMemo(() => (null != eA ? ((0, ly.lt)(eA.steps) ?? eA.todos) : void 0), [eA]),
        eD = eA?.provisionalTodo,
        eO = null != eA && lk(eA),
        ez = i.useMemo(() => {
            var e;
            return null != eA ? ((e = eA.steps), (0, r9.k)((0, ly.Jf)(e, !0).tasks)) : void 0;
        }, [eA]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: o7.TE,
        children: [
            el
                ? (0, a.jsx)(lb.A, {
                      title: N.intl.string(A.default.gy7byi),
                      description: N.intl.string(A.default["dkv/WO"]),
                      icons: o3.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(lU, {
                onJumpToActivity: L,
                line: eL,
                placement: eN && "top" === eR ? "top" : null,
                todos: e$,
                todosLive: eO,
                provisionalTodo: eD,
                agents: ez,
            }),
            (0, a.jsxs)("div", {
                className: o7.JX,
                children: [
                    (0, a.jsx)(lj.Ch, {
                        ref: w,
                        onScroll: $,
                        scrollbarGutter: ey ? "both-edges" : "stable",
                        className: [o7.N$, E ? null : o7.hB, ep ? o7.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(oF, {
                            projectId: r,
                            messages: d,
                            emptyState: eb,
                            floatingSettingsMessageId: em?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? V : void 0,
                            draftHasText: K,
                            onApprovePlan: el ? eE : void 0,
                            onRestoreVersion: en || eN ? void 0 : u,
                            scrollerRef: w,
                            stickToBottomRef: S,
                            pinned: C,
                            onUnpin: I,
                            handleRef: k,
                            onShowsLatestChange: P,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: o7.NJ,
                        children: (0, a.jsx)(o1, {
                            projectId: r,
                            thinking: eN,
                            turnStartedAt: eS,
                            restoring: en,
                            remixStartedAt: F,
                            recalling: ey,
                            thinkingActivity: x,
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
                              className: ep ? `${o7.B5} ${o7.J9}` : o7.B5,
                              children: (0, a.jsx)(
                                  rD,
                                  { projectId: r, clarification: eo, onSubmit: el ? W : void 0, onDismiss: eu },
                                  eo.id,
                              ),
                          }),
                    null == eh
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eo ? ev : void 0,
                              className: o7.B5,
                              children: (0, a.jsx)(rB, { projectId: r, request: eh, onDismiss: eg }, em?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: o7.Jx,
                children: [
                    (0, a.jsx)(lU, {
                        onJumpToActivity: L,
                        line: eL,
                        placement: eN && "bottom" === eR ? "bottom" : null,
                        todos: e$,
                        todosLive: eO,
                        provisionalTodo: eD,
                        agents: ez,
                    }),
                    0 === D.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: o7.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: N.intl.formatToPlainString(A.default["7b49dS"], {
                                          count: D.annotations.length,
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
                                      onClick: () => nk(r),
                                  }),
                              ],
                          }),
                    null == z
                        ? null
                        : (0, a.jsx)("div", {
                              className: o7.qB,
                              children: (0, a.jsx)(tX.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: z.message,
                                  action: z.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: o7.Db,
                              children: [
                                  (0, a.jsx)(tX.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: o7.jU,
                                      children: (0, a.jsx)(eP.m, {
                                          text: N.intl.string(N.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tn.K, {
                                              "aria-label": N.intl.string(N.t.WAI6xu),
                                              icon: et.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(sd, {
                        projectId: r,
                        canSend: el,
                        running: eN,
                        restoring: en,
                        onSend: U,
                        hasPendingContext: D.annotations.length > 0,
                        onInterrupt: el ? G : void 0,
                        onUploadFile: X,
                        onImport: c,
                        onApprove: eC,
                        suggestion: ek,
                        questionOpen: null != eo || null != eh,
                        modelSettings: b,
                        onModelSettingsChange: J,
                        onDraftHasTextChange: H,
                    }),
                ],
            }),
        ],
    });
}
var o4 = n(761508),
    o8 = n(933294),
    o9 = n(207438),
    ue = n(683438);
function ut(e, t) {
    return String(e).padStart(t, "0");
}
var un = n(667931);
let ul = {
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
    ur = { running: "Running", ok: "Done", error: "Failed" };
function ua(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function ui(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function us(e) {
    return ua(Math.round(e));
}
function uo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uu(e) {
    return us(e.count > 1 ? e.totalMs : e.end - e.start);
}
let uc = ["Arguments", "Result", "Usage", "Details"];
function ud(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uf(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function um(e) {
    let t = (0, un.bM)(e)?.end;
    return null != t ? ua(t) : (0, un.lp)(e) ? "interrupted" : "still running";
}
function uh(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${ut(l.getHours(), 2)}:${ut(l.getMinutes(), 2)}:${ut(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${ut(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        uo(e.spans.length),
        (0, un.Sj)((0, un.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function ug(e) {
    let t = (0, un.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, un.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += up(r, "in")),
                (l.output += up(r, "out")),
                (l.cacheRead += up(r, "cache_read")),
                (l.cacheWrite += up(r, "cache_write")),
                (l.costUsd += up(r, "cost_usd"))));
    }
    let r = un.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function up(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var ux = n(738188),
    uv = n(430993),
    uj = n(364840),
    ub = n(224640),
    uy = n(20742);
let uw = { collapsed: new Set(), revealed: new Set() };
var uk = n(872892);
let uA = {
    op: uk.Q,
    model: uk.i3,
    tool: uk.dH,
    setup: uk.kc,
    worktree: uk.Qx,
    sandbox: uk.QH,
    build: uk.F1,
    platform: uk.Op,
    other: uk.fv,
};
function uN(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      uo(t.calls, "model call"),
                      `${ui(t.input)} in`,
                      `${ui(t.output)} out`,
                      `${ui(t.cacheRead)} cache read`,
                      `${ui(t.cacheWrite)} cache write`,
                      uf(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: uk.M1,
        children: [
            (0, a.jsx)("div", {
                className: uk.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${uk.DJ} ${uA[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: uk.o1,
                children: un.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${us(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: uk.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${uk.nf} ${uA[e]}` }),
                                (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: ul[e] }),
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
function uS(e) {
    return `conjure-perf-trace-${e}`;
}
function uC(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: uk.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${uk.p0} ${s + o > 85 ? uk.EU : uk.jh}`,
                children: i,
            }),
        ],
    });
}
function uE(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : n4.a,
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
        id: uS(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${uk.$y} ${r ? uk.wQ : ""}`,
        onClick: f,
        children: [
            (0, a.jsxs)("div", {
                className: uk.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(em.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: uk.ai,
                              onClick: m,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: uk.YJ }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: uk.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${uk.nf} ${uA[t.category]}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: uk.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: uk.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: uk.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(ux.WarningIcon, { size: "xs", color: "currentColor", className: uk.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(uC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${uk.M0} ${uk.Nh}`
                    : t.running
                      ? `${uk.M0} ${uk.rF}`
                      : `${uk.M0} ${uA[t.category]}`,
                duration: uu(t),
            }),
        ],
    });
}
function uI(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(em.D, {
        tag: "div",
        role: "treeitem",
        id: uS(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${uk.$y} ${l ? uk.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: uk.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: uk.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: uk.U9 }),
                    (0, a.jsx)("span", { className: `${uk.nf} ${uk.dL}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: uk.MQ,
                        children: uo(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(uC, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${uk.M0} ${uk.ab} ${uk.dL}`,
                duration: us(t.totalMs),
            }),
        ],
    });
}
function u_(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: uk._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: uk.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${uk.nf} ${uA[t.category]}` }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [ud("Start", `+${us(e.start)}`), ud("Duration", uu(e))];
                      e.count > 1
                          ? t.push(
                                ud("Calls", String(e.count)),
                                ud("Longest call", us(e.maxMs)),
                                ud("Spread over", us(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(ud("Self time", us(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(ud("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(ud("Notes", l.join(", "))),
                          null != e.span.error && t.push(ud("Error", e.span.error)));
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
                              s = "cost_usd" === t ? uf(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), ud(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...uc.flatMap((e) => {
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
                                            className: uk.xd,
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
                                                            className: uk.vl,
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
function uM(e) {
    let { trace: t } = e,
        n = i.useMemo(() => ug(t), [t]);
    return (0, a.jsx)(uN, { stats: n });
}
function uT(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, un.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uw : (0, un.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, un.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, un.x7)(t)), l((n) => (0, un._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, un.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, un.IE)(t, e);
                        null != n && l((e) => (0, un.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, un.IE)(t, e);
                        null != n && l((e) => (0, un.H$)(e, n));
                    },
                    [t],
                ),
                f = i.useCallback(() => {
                    null != t && l((0, un.vH)(t));
                }, [t]),
                m = i.useCallback(() => {
                    null != t && l((0, un.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, un.hB)(t));
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
        m = (0, un.dj)(t),
        h = i.useMemo(() => (0, un.nF)(m), [m]),
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
                    null != t && (u(t.key), document.getElementById(uS(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, f, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(uv.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: uk.z,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: um(t),
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uh(t),
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
                                      children: `${uo(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(uM, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: uk.KE,
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
                        "aria-activedescendant": null == o ? void 0 : uS(o),
                        className: uk.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uk.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: uk.So,
                                        children: (0, a.jsx)(Y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: uk.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${uk.io} ${(e / m) * 100 > 85 ? uk.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / m) * 100),
                                                    },
                                                    children: 0 === e ? "0" : us(e),
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
                                          uE,
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
                                    : (0, a.jsx)(uI, { row: e, extent: m, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(uj.j, { children: (0, a.jsx)(u_, { node: s }) }),
        ],
    });
}
function uP(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, s.bG)([sZ.A], () => sZ.A.getTimingTrace(l, r), [l, r]),
        o = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(ub.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": o,
        children: [
            (0, a.jsx)(uy.rQ, { title: o }),
            null == i
                ? (0, a.jsx)(uv.c, {
                      children: (0, a.jsx)(Y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(uT, { trace: i }),
        ],
    });
}
let uR = { running: uk.Vf, ok: uk.mo, error: uk.Sr };
function uL(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${uk.Om} ${uR[t]}`, role: "img", "aria-label": ur[t] });
}
function u$(e, t) {
    (0, tv.openModal)((n) => (0, a.jsx)(uP, { ...n, projectId: e, traceId: t }));
}
function uD(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => u$(t, n.id), [t, n.id]);
    return (0, a.jsxs)(em.D, {
        className: uk.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: uk.sU,
                children: [
                    (0, a.jsx)(uL, { status: (0, un.lQ)(n) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: uk._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: um(n),
                    }),
                ],
            }),
            (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uh(n) }),
            null == l
                ? null
                : (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function uO(e) {
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
function uz(e) {
    let { projectId: t } = e,
        n = (0, s.yK)([sZ.A], () => sZ.A.getTimingTraces(t), [t]),
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
                    let t = e.map(ug);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: un.BF.map((e) => ({
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
              className: uk.Ie,
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
              className: uk.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: uk.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: uk.fH,
                              children: (0, a.jsx)(ue.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(uO, { projectId: t, traces: o }),
                      ],
                  }),
                  (0, a.jsxs)(lj.Ch, {
                      className: uk.XG,
                      children: [
                          (0, a.jsx)(uN, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: uk.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(uD, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function uF(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function uq(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function uU(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function uG(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function uB(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function uK(e) {
    return N.intl.string("preview" === e ? A.default["2yLYlG"] : A.default.eiAi57);
}
let uH = ["all", "preview", "stable", "web"];
function uV(e) {
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
function uW(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : N.intl.formatToPlainString(A.default["XO/bN4"], {
              p50: uF(e.memory_p50_bytes ?? 0),
              p999: uF(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let uJ = {
    db: () => A.default["7l+DFG"],
    db_preview: () => A.default.FAuffi,
    runtime: () => A.default["Gkl+ab"],
    runtime_preview: () => A.default.ynpJzv,
    bot: () => A.default["5/i0cj"],
    bot_preview: () => A.default.m2jsnw,
};
var uX = n(911608),
    uY = n(177427);
function uQ(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: uY.KE,
        children: [
            (0, a.jsx)("div", {
                className: uY.IQ,
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
                                  children: N.intl.formatToPlainString(A.default.INVO50, { time: uG(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(ee.$, { variant: "secondary", size: "sm", text: N.intl.string(A.default.oKEgiu), onClick: l }),
        ],
    });
}
function uZ(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: uY.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Y.E, { variant: "text-xs/semibold", color: "text-muted", className: uY.Gf, children: t }),
            n,
        ],
    });
}
function u0(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: uY.N8,
        children: [
            (0, a.jsxs)("div", {
                className: uY.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: uY.kS,
                        children: [i, (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: uY.kS,
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
function u1(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: uY.N8,
        children: [
            (0, a.jsxs)("div", {
                className: uY.x7,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(uX.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? uY.dh : void 0,
            }),
        ],
    });
}
function u2(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(u0, {
            label: N.intl.string(A.default.SXP7pD),
            value: N.intl.string(A.default.E5hKVi),
            hint: uV(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(u0, {
            label: N.intl.string(A.default.SXP7pD),
            value: "\u2014",
            hint: N.intl.string(A.default.AGvoMJ),
        });
    let l = uW(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u0, { label: N.intl.string(A.default["H/X+FI"]), value: uq(n.cpu_ms) }),
            null != l && (0, a.jsx)(u0, { label: N.intl.string(A.default.lmFmMO), value: l }),
        ],
    });
}
function u3(e) {
    let { analytics: t } = e,
        n = N.intl.string(A.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(uZ, {
            title: n,
            children: (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: uV(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? uJ[t] : null) ? N.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(uZ, {
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
                          u0,
                          {
                              label: n,
                              value: N.intl.formatToPlainString(A.default["w/2voO"], { cpu: uq(t.cpu_ms) }),
                              hint: uW(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var u7 = n(678708),
    u5 = n(414499),
    u6 = n(714800),
    u4 = n(81466),
    u8 = n(424383),
    u9 = n(816943),
    ce = n(268791),
    ct = n(514042),
    cn = n(872351),
    cl = n(708988),
    cr = n(150934),
    ca = n(417270);
let ci = "Restart Agent",
    cs = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function co(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function cu(e, t) {
    return { label: e, value: null != t && "" !== t ? uG(t) : "Unknown", icon: "calendar" };
}
function cc(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function cd(e, t, n, l) {
    let [r, a] = cs[n.status];
    return { label: e, value: `${cc(n.bytes)} of ${cc(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function cf(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = uG(e.at);
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
let cm = { main: "Main vs Remote", wip: "WIP vs Remote" };
function ch(e) {
    let t = `container ${co(e.local)} \xb7 remote ${co(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: cm[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${uU(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${uU(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${uU(n)} Ahead, ${uU(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let cg = ["main", "wip"];
var cp = n(400154);
let cx = {
        checkout: u7.FolderIcon,
        edit: lB.PencilIcon,
        remote: u5.h,
        commits: u6.e,
        calendar: u4.CalendarIcon,
        save: u8.L,
        objects: ec.R,
        download: u9.$,
        size: ce.$,
        file: ct.FileIcon,
    },
    cv = {
        ok: [aQ.y, er.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [ux.WarningIcon, er.A.colors.ICON_FEEDBACK_WARNING],
        error: [i9.a, er.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [cn.z, er.A.colors.ICON_MUTED],
        behind: [cl.M, er.A.colors.ICON_MUTED],
    };
function cj(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, s.bG)([sZ.A], () => sZ.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, o9.DK)(t), [t]),
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
                    `Updated ${uG(r)}`,
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
    return (0, a.jsxs)(uZ, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: cp.Lj,
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
                    if (!e.running || null != e.localError) return [cf(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            cf(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : uU(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = cg.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(ch))
                        : l.push(
                              { label: "Main", value: co(e.heads.main), icon: "remote" },
                              { label: "WIP", value: co(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? uU(e.commits) : "Unknown", icon: "commits" },
                            cu("Oldest Commit", e.oldest),
                            cu("Newest Commit", e.newest),
                            cf(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${uU(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${uU(t.loose)} loose (${uF(t.looseBytes)}) \xb7 ${uU(t.packed)} packed in ${n} (${uF(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${uU(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${uU(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                cd(
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
                                  cd("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = cx[r],
                        [o, u] = null != i ? cv[i] : [null, void 0];
                    return (0, a.jsx)(
                        u0,
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
function cb(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: o,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, s.bG)([sZ.A], () => sZ.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                o = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== o.current && ((o.current = a), (0, o9.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = sZ.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, o9.gX)(e);
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
            let u = i.useCallback(() => (0, o9.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: ci,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eH.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: cp.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: cp.nM,
                children: [
                    (0, a.jsx)(cr.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: o,
                        disabled: l,
                    }),
                    (0, a.jsx)(ee.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: ca.RetryIcon,
                        text: ci,
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
                            return `Restarted \xb7 new instance since ${uG(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${uG(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function cy(e, t) {
    return (0, a.jsx)(u0, {
        label: e,
        value: N.intl.formatToPlainString(A.default.yHJxuP, { count: uU((0, oW.aM)(t)) }),
        hint: `${uU(t.input_tokens)} in \xb7 ${uU(t.output_tokens)} out \xb7 ${uU(t.cache_read_input_tokens)} cache read`,
    });
}
function cw(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        o = (0, s.bG)([sZ.A], () => sZ.A.getLastTurnUsage(t), [t]),
        u = (0, s.bG)([sZ.A], () => sZ.A.getLastCompaction(t), [t]),
        c = (0, s.bG)([sZ.A], () => sZ.A.getLastCompactionDecline(t), [t]),
        d = (0, s.bG)([sZ.A], () => sZ.A.getForceCompactionState(t), [t]),
        f = i.useCallback(() => (0, o9.Lj)(t), [t]),
        m = i.useCallback(() => (0, o9.Lj)(t, !0), [t]),
        h = (0, s.bG)([sZ.A], () => sZ.A.getSandboxRestartState(t), [t]),
        g = (0, s.bG)([eZ.A], () => eZ.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, o9.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: cp.Mf,
        children: [
            (0, a.jsx)(uQ, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(uZ, {
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
                                  (0, a.jsx)(u0, {
                                      label: N.intl.string(A.default["9nqym2"]),
                                      value: uU((0, oW.a7)(x.cost_usd)),
                                      hint: N.intl.formatToPlainString(A.default.NCdUIh, { count: uU(x.turns) }),
                                  }),
                                  cy(N.intl.string(A.default.xtxP0e), x.orchestrator),
                                  cy(N.intl.string(A.default["9Sj3SX"]), x.codegen),
                                  cy(N.intl.string(A.default.ANCEo3), (0, oW.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(u0, {
                                          label: N.intl.string(A.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${uU(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(uZ, {
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
                                  cy(N.intl.string(A.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(u0, {
                                      label: N.intl.string(A.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, oW.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(uZ, {
                title: N.intl.string(A.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(u1, {
                                      label: N.intl.string(A.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: uU,
                                  }),
                                  (0, a.jsx)(u0, {
                                      label: N.intl.string(A.default.mRbSns),
                                      value: `${uU(u.tokensBefore)} \u{2192} ${uU(u.tokensAfter)}`,
                                      hint: N.intl.formatToPlainString(A.default.Vq3skS, {
                                          count: uU(u.retainedMessages),
                                          time: uG(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? N.intl.formatToPlainString(A.default.GMLCNv, { ceiling: uU(b) })
                                      : N.intl.string(A.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(u0, {
                            label: N.intl.string(A.default["4BX5KK"]),
                            value: `${uU(c.projected)} / ${uU(c.threshold)}`,
                            critical: !0,
                            hint: N.intl.formatToPlainString(A.default["6ngCax"], { time: uG(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: cp.Lj,
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
                                    let t = uG(e.observedAt);
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
                        className: cp.Lj,
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
                                    let t = uG(e.observedAt);
                                    return N.intl.formatToPlainString(
                                        "restarted" === e.outcome ? A.default["76mfqO"] : A.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(cb, { projectId: t }),
                ],
            }),
            (0, a.jsx)(cj, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(uZ, {
                    title: N.intl.string(A.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u0, {
                                        label: N.intl.string(A.default.CLXHAs),
                                        value: uG(j.instance_since),
                                        hint: N.intl.string(A.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(u0, { label: N.intl.string(A.default["8V8e1Z"]), value: uU(j.sockets) }),
                                    (0, a.jsx)(u0, {
                                        label: N.intl.string(A.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? N.intl.string(A.default.Wv025I)
                                            : N.intl.string(A.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(u0, {
                                            label: N.intl.string(A.default["3oUYnv"]),
                                            value: uU(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(u2, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(uZ, {
                    title: N.intl.string(A.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(u0, {
                            label: N.intl.string(A.default.IlDBN3),
                            value: uU(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(u0, {
                            label: N.intl.string(A.default["ZdzKR+"]),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, { count: uU(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(u0, {
                            label: N.intl.string(A.default.cIhN2W),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, {
                                count: uU(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(u0, {
                            label: N.intl.string(A.default["+fOn/q"]),
                            value: uU(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(u0, { label: N.intl.string(A.default.kIHga0), value: uU(v.max_build_attempts) }),
                        (0, a.jsx)(u0, { label: N.intl.string(A.default.Iw03yW), value: uU(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var ck = n(237528),
    cA = n(629584),
    cN = n(531893);
function cS(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: cN.ut,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: N.intl.string(A.default.h1SE6R),
              }),
          });
}
function cC(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: cN.qf,
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
              className: cN.qf,
              children: [
                  (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function cE(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: cN.ps,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: N.intl.string(A.default.V7Ri8H),
              }),
          })
        : null;
}
var cI = n(109079);
let c_ = i.memo(function (e) {
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
        className: cI.vK,
        children: [
            (0, a.jsx)(Y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: cI.Mt,
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
                className: cI.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: cI.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: cI.Cq, children: (0, a.jsx)(ck.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: cI.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(ck.v, { text: N.intl.string(A.default.TrC9c8), variant: "redLight" }),
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
                                      className: cI.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": N.intl.string(A.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(n4.a, {
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
                                          className: cI.dF,
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
function cM(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([o8.A], () => o8.A.getLogs(t), [t]),
        l = (0, s.bG)([o8.A], () => o8.A.getHistoryState(t, "logs")),
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
                uH.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return uK(e);
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
        className: cI.$F,
        children: [
            (0, a.jsxs)("div", {
                className: cI.y4,
                children: [
                    (0, a.jsx)(cA.I, {
                        look: "pill",
                        "aria-label": N.intl.string(A.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => o(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: cI.KT,
                        children: (0, a.jsx)(ue.I, {
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
            n.length > 0 && (0, a.jsx)(cS, { state: l }),
            (0, a.jsxs)(lj.Ch, {
                ref: f,
                onScroll: h,
                overflow: "auto",
                className: cI.sx,
                children: [
                    (0, a.jsx)(cE, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(cC, {
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
                          : d.map((e) => (0, a.jsx)(c_, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function cT(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(uZ, {
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
function cP(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(u0, {
                      label: N.intl.formatToPlainString(A.default["01ZMS4"], { env: uK(n) }),
                      value: ((t = l.connected), N.intl.string(t ? A.default.Wv025I : A.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(u0, {
                      label: N.intl.string(A.default["z1dh+F"]),
                      value: uU(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${uG(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(u0, { label: N.intl.string(A.default.Iz5GnJ), value: uU(l.guild_count) }),
                  (0, a.jsx)(u0, {
                      label: N.intl.string(A.default["7UqtNv"]),
                      value: uU(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? N.intl.formatToPlainString(A.default.MasSly, {
                                    code: l.last_close_code,
                                    time: uG(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(u0, {
                          label: N.intl.string(A.default["x3+JXJ"]),
                          value: uU(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(u0, { label: uK(n), value: N.intl.string(A.default.lTHQss) });
}
function cR(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(u0, {
        label: uK(t),
        value: N.intl.formatToPlainString(A.default["Xq+wHT"], {
            requests: uU(n.requests),
            failures: uU(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? N.intl.formatToPlainString(A.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: uG(n.last_failure.at),
                  })
                : N.intl.formatToPlainString(A.default["7KlGT6"], { time: uG(n.since) }),
    });
}
function cL(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(u0, {
                label: N.intl.formatToPlainString(A.default["92gVTm"], { env: uK(t) }),
                value: uU(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    u0,
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
                                  ? N.intl.formatToPlainString(A.default.wxAWNv, { time: uG(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function c$(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(u0, {
        label: uK(t),
        value: N.intl.formatToPlainString(A.default.suAOj9, { calls: uU(n.calls), errors: uU(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function cD(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(uZ, {
            title: t,
            children: (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: N.intl.string(A.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(uZ, {
        title: t,
        children: [
            (0, a.jsx)(u0, {
                label: N.intl.string(A.default.xtD4Zp),
                value: uU(n.requests),
                hint: N.intl.formatToPlainString(A.default["7KlGT6"], { time: uG(n.since) }),
            }),
            (0, a.jsx)(u0, { label: N.intl.string(A.default.gfRhR3), value: uU(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(u1, {
                              label: N.intl.string(A.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: uq,
                          }),
                          (0, a.jsx)(u0, {
                              label: N.intl.string(A.default.mSKImM),
                              value: uq(r),
                              hint: N.intl.formatToPlainString(A.default.JqMU05, {
                                  total: uq(n.cpu_ms_total),
                                  wall: uq(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(u0, {
                      label: N.intl.string(A.default.LEJ5r3),
                      value: N.intl.string(A.default["2Ekb2b"]),
                      hint: N.intl.string(A.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(u0, { label: N.intl.string(A.default.xvmL1D), value: uq(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(u0, { label: N.intl.string(A.default["4sQYwH"]), value: uU(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(u0, {
                label: N.intl.string(A.default.bQenOy),
                value: uU(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: N.intl.formatToPlainString(A.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(u0, { label: N.intl.string(A.default.xgpn4Y), value: uB(n.build) }),
        ],
    });
}
function cO(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: N.intl.string(A.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: N.intl.string(A.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: N.intl.string(A.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(uZ, {
        title: N.intl.string(A.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(u0, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(u0, {
                                  label: N.intl.formatToPlainString(A.default.u7kJJ4, { env: n }),
                                  value: uF(l.r2_bytes),
                                  hint: N.intl.formatToPlainString(
                                      l.r2_truncated ? A.default.lH0oQw : A.default.m9h02S,
                                      { count: uU(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(u1, {
                                      label: N.intl.formatToPlainString(A.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: uF,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function cz(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: cp.Mf,
        children: [
            (0, a.jsx)(uQ, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(cD, {
                            title: N.intl.string(A.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(cD, {
                            title: N.intl.string(A.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(cO, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(cT, {
                                title: N.intl.string(A.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cP, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(cT, {
                                title: N.intl.string(A.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cR, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(cT, {
                                title: N.intl.string(A.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cL, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(cT, {
                                title: N.intl.string(A.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(c$, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(u3, { analytics: t.analytics }),
                        (0, a.jsxs)(uZ, {
                            title: N.intl.string(A.default.fQMpFp),
                            children: [
                                (0, a.jsx)(u0, {
                                    label: N.intl.string(A.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? uB(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(u0, {
                                    label: N.intl.string(A.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? uB(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var cF = n(592465);
function cq(e) {
    let { projectId: t, onClose: n } = e,
        l = no(),
        [r, u] = i.useState(() => (l && na?.projectId === t ? "trace" : "logs")),
        c = (0, s.bG)([sZ.A], () => sZ.A.getStatus(t), [t]),
        d = (0, s.bG)([sZ.A], () => sZ.A.getFetchState(t), [t]),
        f = i.useCallback(() => {
            ((0, o9.R7)(t), (0, o9.DK)(t));
        }, [t]);
    (i.useEffect(() => f(), [f]), i.useEffect(() => (0, p.Rw)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == na || na.projectId !== e) return null;
            let { traceId: t } = na;
            return ((na = null), t);
        })(t);
        return null != e && (u$(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        ni(t, () => {
            m() && u("trace");
        }));
    let h = i.useCallback(() => {
            (0, ti.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: sZ.A.getStatus(t),
                        last_turn_usage: sZ.A.getLastTurnUsage(t),
                        last_compaction: sZ.A.getLastCompaction(t),
                        last_compaction_decline: sZ.A.getLastCompactionDecline(t),
                        timing_traces: sZ.A.getTimingTraces(t),
                        logs: o8.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, o.P0)({ text: N.intl.string(A.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = N.intl.string(A.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: cF.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(lg.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lg.Ay.Icon, {
                            icon: ou.CopyIcon,
                            tooltip: N.intl.string(A.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lg.Ay.Icon, { icon: et.P, tooltip: N.intl.string(N.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lg.Ay.ChannelIcon, { icon: t8.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lg.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cF.rf,
                children: [
                    (0, a.jsxs)(o4.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => u(e),
                        "aria-label": N.intl.string(A.default.RvvWIh),
                        className: cF.vR,
                        children: [
                            (0, a.jsx)(o4.V.Item, { id: "logs", children: N.intl.string(A.default["+VRYCm"]) }),
                            (0, a.jsx)(o4.V.Item, { id: "worker", children: N.intl.string(A.default["50D0FZ"]) }),
                            (0, a.jsx)(o4.V.Item, { id: "agent", children: N.intl.string(A.default.UkbTK1) }),
                            l ? (0, a.jsx)(o4.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(cM, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(cz, { status: c, fetchState: d, onRefresh: f })
                          : "trace" === r && l
                            ? (0, a.jsx)(uz, { projectId: t })
                            : (0, a.jsx)(cw, { projectId: t, status: c, fetchState: d, onRefresh: f }),
                ],
            }),
        ],
    });
}
var cU = n(333007),
    cG = n(365912),
    cB = n(775121),
    cK = n(873715);
function cH(e) {
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
let cV = Object.freeze({ x: -1, y: -1 });
function cW(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = cH(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var cJ = n(470779);
function cX(e) {
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
        } = sr({ projectId: t, surface: "design", onUploadFile: m }),
        b = i.useRef(null),
        y = (d || h.length > 0) && v && !f,
        w = i.useCallback(() => {
            if (!y) return;
            let e = j();
            u(e.length > 0 ? e : void 0);
        }, [y, j, u]),
        [k, S] = i.useState(!1);
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
    let _ = E?.height ?? 44,
        M = l.left + 8,
        T = l.top + 8,
        P = Math.max(n.x, M),
        R = Math.min(Math.max(n.y + 32 + 4, T), Math.max(T, l.top + l.height - _ - 8));
    return (0, a.jsxs)("div", {
        ref: C,
        className: W()(cJ.M0, { [cJ.ho]: k && !f, [cJ.ET]: f }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: b,
                type: "file",
                multiple: !0,
                className: cJ.Fg,
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
                    className: cJ.tY,
                    onClick: () => b.current?.click(),
                    "aria-label": N.intl.string(A.default.lgvqSB),
                    children: (0, a.jsx)(eu.H, { size: "custom", color: "currentColor", className: cJ.WW }),
                }),
            }),
            (0, a.jsx)(lK.y, {
                autoFocus: !0,
                rows: 1,
                className: cJ.hF,
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
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), w());
                },
            }),
            h.length > 0
                ? (0, a.jsx)("div", {
                      className: cJ.ZO,
                      children: h.map((e) => (0, a.jsx)(sa, { draft: e, onRemove: x }, e.localId)),
                  })
                : null,
        ],
    });
}
var cY = n(192888);
function cQ(e, t) {
    return (0, cY.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(cW, () => ({ status: "failed" }));
}
var cZ = n(108308);
let c0 = { x: 25, y: 21 };
function c1(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function c2(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function c3(e, t, n, l) {
    let r = c2(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function c7(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function c5(e) {
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
function c6(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: o } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nC(u),
        f = (0, nu.Zv)(u),
        m = (0, tv.useHasAnyModalOpen)(),
        h = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        x = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(null),
        [w, k] = i.useState(!1),
        [S, C] = i.useState(!1),
        [E, I] = i.useState(null),
        [_, M] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        R = i.useRef(null),
        [L, $] = i.useState(null),
        [D, O] = i.useState(!1),
        [z, F] = i.useState(null),
        [q, U] = i.useState(null),
        G = i.useRef(!1),
        [B, K] = i.useState(!1),
        [H, V] = i.useState(null),
        W = c && !f && !m;
    null == z || (W && z.projectId === u) || F(null);
    let J = z?.projectId ?? null;
    (i.useEffect(() => {
        if (null != J) return () => rw(J, "design");
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
                j((t) => (c1(t, e) ? t : e));
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
            (k(!0), C(!1));
            let n = `design-feedback-${crypto.randomUUID()}`;
            return (
                (0, cK.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? c5(t.response) : null;
                        null == n ? C(!0) : (y(n), nA(u, { url: n.url, title: n.title, viewport: n.viewport }));
                    },
                    () => {
                        e && (k(!1), C(!0));
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
        if (c1(X.current, v)) return;
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
                    (0, cK.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !el.current) return;
                        let l = c5(e.response);
                        null != l && (y(l), nA(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = cH(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = ny(u)).active &&
                                0 !== r.size &&
                                nw(u, {
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
        ((el.current = W), W || ((Z.current = null), (et.current = null), (R.current = null), M(!1)));
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
                    cQ(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || dn(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? I(null)
                                    : "unsupported" === t.status && O(!0);
                            else {
                                let e = nf(t.target);
                                ($((t) => (dt(t, e) ? t : e)),
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
            (U({ at: z.at, label: z.label, draft: z.draft, instant: e }), K(e), F(null));
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
            if (null == q) return;
            let e = setTimeout(() => U(null), c9);
            return () => clearTimeout(e);
        }, [q]));
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
                    (rw(u, "design"),
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
                if (null == v || null != H) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), ef(), M(!0), null != z)) {
                    (Math.abs(e.clientX - z.at.x) > de || Math.abs(e.clientY - z.at.y) > de) && (G.current = !0);
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
                        n = null != e && dn(e, v, ei) ? null : e;
                    if (null != n) {
                        let e = nf(n);
                        $((t) => (dt(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (Z.current = n), er());
            },
            [v, ei, es, ed, D, eo, z, H, ef, er],
        ),
        eh = null == H ? null : d.find((e) => e.id === H.id),
        eg = W && (_ || z?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && cQ(e, cV);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (M(!1), I(null), (et.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !_ || !es || D || null != z || null != H) return;
        let e = R.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (Z.current = l), er());
    }, [W, _, es, D, z, H, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != z || null != H) {
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
            [E, v, ed, z, H, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (I(null), nk(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != z
                    ? ea()
                    : H?.confirmingRemove === !0
                      ? V({ ...H, confirmingRemove: !1 })
                      : null != H
                        ? V(null)
                        : ev());
        }, [u, z, H, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                cB.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        cB.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            (0, n0.vq)(t) &&
                ew.current?.contains(t) !== !0 &&
                o?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, cG.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ey.current();
        }
    }, [W, o]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != z || null != H || 0 === eo.length) return;
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
            [u, z, H, eo, E, ec, ej, v, ei],
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
            if (null != u && null != H && null != x && nd(H.draft)) {
                var e, t;
                let n, l;
                ((e = H.id),
                    (t = H.draft.trim()),
                    null != (l = (n = ny(u)).annotations.find((t) => t.id === e)) &&
                        nN(l, x) &&
                        nw(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    V({ ...H, editing: !1 }));
            }
        }, [u, H, x]),
        eC = i.useCallback(() => {
            if (null != u && null != H && null != x) {
                var e;
                let t, n;
                ((e = H.id),
                    null != (n = (t = ny(u)).annotations.find((t) => t.id === e)) &&
                        nN(n, x) &&
                        nw(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    V(null));
            }
        }, [u, H, x]),
        eE = c
            ? w
                ? N.intl.string(A.default["Eb/YV9"])
                : S
                  ? N.intl.string(A.default.FD30bh)
                  : N.intl.formatToPlainString(A.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != v,
        e_ = _ && null == H,
        eM = z?.target ?? eh?.target ?? null,
        eT = z ?? q,
        eP = z ?? (q?.instant === !0 ? null : q),
        eR =
            null != eh && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = c7(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(c3(eh.target, eh.anchor, v, ei), v)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            cQ(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, cU.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: cZ.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: cZ.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: cZ.MT,
                                      style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                      "data-plain-cursor": e_ ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": N.intl.string(A.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: em,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != E && null == E.marker && null == z && null == H
                                      ? (0, a.jsx)(dl, { box: c2(E, v, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: cZ.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: cZ.xz,
                                          "data-shown": null != E && null == H && null == z ? "" : void 0,
                                          "data-instant": B ? "" : void 0,
                                          children: (0, a.jsxs)(Y.E, {
                                              variant: "text-xs/medium",
                                              className: cZ.Ux,
                                              children: [
                                                  null == L
                                                      ? null
                                                      : (0, a.jsx)("span", { className: cZ.Tl, children: L.kind }),
                                                  null == L || "" === L.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: cZ.kh,
                                                            children: [" ", L.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: cZ.Y,
                                      children: e_ ? (0, a.jsx)("div", { className: cZ.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: cZ.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: cZ.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == z ? "" : void 0,
                                                children: (0, a.jsxs)(Y.E, {
                                                    variant: "text-xs/medium",
                                                    className: cZ.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: cZ.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: cZ.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: cZ.D0, style: c2(eM, v, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = c3(e.target, e.anchor, v, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: cZ.xL,
                                              style: { ...c7(n, v), width: 24, height: 24 },
                                              "aria-label": N.intl.formatToPlainString(A.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nm(e.target),
                                              }),
                                              "aria-expanded": H?.id === e.id,
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
                                              children: (0, a.jsx)(c4, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(cX, {
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
                                  null != eh && null != H && null != eR
                                      ? (0, a.jsxs)(c8, {
                                            point: eR,
                                            frame: v,
                                            authorId: eh.authorId,
                                            title: nm(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                H.confirmingRemove ? V({ ...H, confirmingRemove: !1 }) : V(null);
                                            },
                                            onMouseLeave: () => {
                                                H.editing || H.confirmingRemove || V(null);
                                            },
                                            children: [
                                                H.editing
                                                    ? (0, a.jsx)(Q.f, {
                                                          autoFocus: !0,
                                                          label: N.intl.string(A.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: H.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => V({ ...H, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eS());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: cZ.aC,
                                                          children: eh.comment,
                                                      }),
                                                nN(eh, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: cZ.eB,
                                                          children: H.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: cZ.nv,
                                                                            children: N.intl.string(A.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                V({ ...H, confirmingRemove: !1 }),
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
                                                                                    ...H,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        H.editing
                                                                            ? (0, a.jsx)(ee.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nd(H.draft),
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
                                                                                          ...H,
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
function c4(e) {
    let { authorId: t } = e,
        n = (0, s.bG)([eY.default], () => eY.default.getUser(t), [t]);
    return (0, a.jsx)(aZ.eu, {
        src: null == n ? null : a2.Ay.getUserAvatarURL(n),
        size: a0._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function c8(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: f, testId: m, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(c0);
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
            originY: A,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - j.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - j.y, l), r)), originX: u.x - s, originY: u.y - o }),
        N = { left: y, top: w, "--custom-conjure-card-origin-x": `${k}px`, "--custom-conjure-card-origin-y": `${A}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: cZ.Nr,
        style: N,
        "data-testid": m,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: cZ.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: cZ.ip, children: (0, a.jsx)(c4, { authorId: d }) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: cZ.Qc,
                        children: f,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: cZ.zI, children: p }),
        ],
    });
}
let c9 = 300,
    de = 2;
function dt(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function dn(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function dl(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: cZ.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var dr = n(659723),
    da = n(697744),
    di = n(130324);
function ds(e) {
    let t = (0, da.c)(),
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
    let r = (0, sg.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function du(e) {
    let { className: t } = e,
        { Component: n, events: l } = ds(3e4);
    return (0, a.jsxs)("div", {
        className: t,
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: di.o,
                children: N.intl.string(A.default.AyiQEp),
            }),
        ],
    });
}
var dc = n(251363),
    dd = n(944142),
    df = n(532247),
    dm = n(501628);
function dh(e) {
    let { progress: t } = e,
        { Component: n } = ds(1500),
        l = ns.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: dm.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: dm.PM,
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
function dg(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        o = null != t && null != n && n === l,
        u = (0, s.bG)([dd.A], () => (o ? dd.A.getLiveReload(t) : null), [o, t]),
        c = (0, ll.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        f = (function (e, t) {
            let n = (0, df.dv)(e),
                [l, r] = i.useState(null),
                [a, o] = i.useState(n);
            a !== n && (o(n), r(null == n ? (0, df.QP)(e, a) : null));
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
                        null != n.target && n.target === (0, dc.ow)(null, t) && e();
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
        m = (0, df.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eB.A, { tag: "div", role: "status", "aria-live": "polite", children: m?.title ?? "" }),
            null != m
                ? (0, a.jsx)("div", {
                      className: dm.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(dh, { progress: m }),
                  })
                : null,
        ],
    });
}
var dp = n(343030),
    dx = n(317608),
    dv = n(338941),
    dj = n(964404);
let db = { width: 1 / 0, height: 1 / 0 };
function dy(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : db;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var dw = n(702083);
function dk(e) {
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
        d = n ? dy(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: W()(dw.dw, { [dw.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: W()(dw.R9, { [dw.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var dA = n(347927);
function dN(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: W()(dA.Bf, l && dA.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: dA.Ux,
                children: [
                    (0, a.jsx)(ew.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(Y.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var dS = n(957272);
function dC(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, dv.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, nV.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = nY.A.getFrame(e);
                    if (null == t || nQ.A.getWindowOpen(eV.MLl.ACTIVITY_POPOUT)) return;
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
                        dj.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === nV.sV.INLINE && ln.A.promoteFrame(u),
                              ln.A.updateFrameLayoutMode({ frameId: u, layoutMode: nV.y0.PIP }))
                            : e.intent === nV.sV.MAIN && ln.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === dv.n.Launched)
    ) {
        let e = (0, a.jsx)(dx.A, { frameId: s.id, level: dp.A.WithinAppContent, className: dS.Z7, overlay: r });
        return (0, nH.Q5)(n) ? (0, a.jsx)(dk, { children: e }) : e;
    }
    return (0, a.jsx)(dE, { state: o });
}
function dE(e) {
    let { state: t } = e;
    switch (t) {
        case dv.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: dS.qs,
                children: (0, a.jsx)(dN, {
                    title: N.intl.string(A.default["9kpdo7"]),
                    body: N.intl.string(A.default.iIA8Nj),
                }),
            });
        case dv.n.NoApplication:
            return (0, a.jsx)(du, { className: dS.qs });
        case dv.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: dS.qs,
                children: (0, a.jsx)(dN, {
                    title: N.intl.string(A.default["7k4GyN"]),
                    body: N.intl.string(A.default.zdIy3R),
                }),
            });
        case dv.n.Error:
            return (0, a.jsxs)("div", {
                className: dS.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: N.intl.string(A.default.lTPbnG),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: dS.tj,
                        children: N.intl.string(A.default.e6GiAZ),
                    }),
                ],
            });
        case dv.n.AwaitingLaunch:
        case dv.n.Loading:
            return (0, a.jsx)("div", { className: dS.qs, children: (0, a.jsx)(en.y, {}) });
    }
}
var dI = n(308528),
    d_ = n(334738),
    dM = n(688438),
    dT = n(355622),
    dP = n(365971),
    dR = n(703462);
function dL(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: dR.f,
        children: [
            (0, a.jsx)(ag.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function d$() {
    return (0, a.jsx)("div", { className: dR.f, children: (0, a.jsx)(en.y, {}) });
}
function dD(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: o } = (0, nq.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, s.bG)([lV.A], () => {
            if (null == u) return null;
            let e = lV.A.getDMFromUserId(u);
            return null != e ? lV.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && dI.A.preload(eV.ME, t);
        }, [t]),
        (n = (0, s.bG)([ol.A], () => ol.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, dP.Xg)();
            return (
                (0, d_.yl)(t, e),
                () => {
                    (0, d_.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, f] = i.useState(null),
        m = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            dI.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || f(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    o && null == r)
        ? (0, a.jsx)(d$, {})
        : null == u || m
          ? (0, a.jsx)(dL, { message: N.intl.string(A.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(d$, {})
            : (0, a.jsx)("div", {
                  className: dR.g,
                  children: (0, a.jsx)(dM.A, { channel: c, guild: null, chatInputType: dT.oU.SIDEBAR }, c.id),
              });
}
var dO = n(887909),
    dz = n(570962),
    dF = n(998475);
function dq(e) {
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
    } = (0, dO.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: dF.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: dF.rf,
                children: (0, a.jsx)(dz.A, {
                    obscured: !0 === f,
                    children: (0, a.jsxs)("div", {
                        className: dF.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: dF.z3,
                                      children: [
                                          (0, a.jsx)(ew.D, {
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
                                className: W()(dF.Qs, c ? dF.cw : null, d ? dF.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: dF.o1,
                      children: s.map((e, t) => (0, a.jsx)(ee.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var dU = n(765671),
    dG = n(269094),
    dB = n(714917),
    dK = n(463660),
    dH = n(582063);
let dV = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function dW() {
    (0, o.P0)({ text: N.intl.string(A.default.jj3abP), variant: "critical" });
}
function dJ(e) {
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
                    return (0, a.jsx)(dX, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: dH.m2,
                        children: (0, a.jsx)(eP.m, {
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
                accept: dV.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (dV.includes(n.type)
                                ? n.size > h.aI
                                    ? (0, o.P0)({ text: N.intl.string(A.default.T8Spiu), variant: "critical" })
                                    : (0, dK.M$)(t, n).catch(dW)
                                : (0, o.P0)({ text: N.intl.string(A.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function dX(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, s.bG)([dB.A], () => dB.A.getBackground(t)),
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
                        icon: ca.RetryIcon,
                        disabled: null == o,
                        action: () => {
                            (n(), (0, dK.Og)(t).catch(dW));
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
                        (0, dK.Y1)(t, !i) || dW();
                    },
                }),
            }),
        ],
    });
}
let dY = "/assets/7cec34541705c795.webp";
function dQ(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, dv.A)({ applicationId: t, surface: nV.ZN });
    return (i.useEffect(() => {
        let e = (0, nV.VA)(t, nV.ZN);
        return () => (0, nU.r)(e);
    }, [t]),
    r.state !== dv.n.Launched)
        ? (0, a.jsx)(dE, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(dE, { state: dv.n.Loading })
          : (0, a.jsx)(dZ, { lifecycle: r, projectId: n, size: l });
}
function dZ(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, dU.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: dH.JH,
        children: [
            (0, a.jsx)(d0, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: dH.dw,
                children: (0, a.jsx)("div", {
                    className: dH.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(dG.A, { frame: t.frame, application: t.application, className: dH.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(dJ, { projectId: n }) : null,
        ],
    });
}
function d0(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([dB.A], () => (null != t ? dB.A.getBackground(t) : null)),
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
                (0, dK.Mg)(t, l).then(
                    (t) => {
                        e || o(t);
                    },
                    () => {
                        e || o(dY);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let m = null != l ? r : null,
        h = null == l || (null != m && m === u) ? dY : m;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: W()(dH.LO, { [dH.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === m && c(m);
              },
          })
        : null;
}
var d1 = n(409478),
    d2 = n(652227);
function d3(e) {
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
        ? (0, a.jsx)("div", { className: d2.q, children: (0, a.jsx)(en.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: d2.q,
                children: null == s.authorizeProps ? (0, a.jsx)(en.y, {}) : (0, a.jsx)(dq, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: d2.R,
                      children: [
                          (0, nR.yf)(o, u)
                              ? (0, a.jsx)(dC, { applicationId: t, surface: l, launch: r, frameOverlay: m })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: d2.q,
                                        children: (0, a.jsx)(dN, {
                                            wide: !0,
                                            title: N.intl.string(A.default["08U+YO"]),
                                            body: N.intl.string(A.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(d1.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(dQ, { applicationId: t, projectId: f, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(dD, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(du, { className: d2.q });
}
var d7 = n(175841),
    d5 = n(750506),
    d6 = n(867193),
    d4 = n(539197),
    d8 = n(977020);
function d9(e) {
    let { projectId: t } = e,
        n = (0, d4.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, d4.Ie)(e);
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
        className: d8.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [d4.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: W()(d8.hN, d8.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: W()(d8.hN, d8.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: W()(d8.UE, { [d8.SP]: n.shown, [d8.Vq]: n.pressed, [d8.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var fe = n(417760);
function ft(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function fn(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function fl(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: o } = (function (e) {
            let t = (0, s.bG)([eZ.A], () => null != e && eZ.A.isThinking(e)),
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
              className: W()(fe.M0, fe.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(oU.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(d7.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "none", className: fe.ID, children: d }),
                  c ? (0, a.jsx)(eB.A, { children: N.intl.string(A.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: fe.lC, children: f }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: fe.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: fe.sp,
                      children: [
                          (0, a.jsx)(d7.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(oU.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: fe.f4,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: fe.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: fe.Rb,
                                            children: N.intl.string(A.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: fe.lC, children: f }) : null,
              ],
          });
}
function fr(e) {
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
        c = (0, tv.useHasAnyModalOpen)(),
        d = n7(s);
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
            let e = ft(r());
            m((t) => (fn(t, e) ? t : e));
            let t = null == h ? null : ft(h);
            (x((e) => (fn(e, t) ? e : t)), null != h && (0, d6.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, d6.C)(0));
            }
        );
    }, [v, r, h]);
    let j = "idle" !== u && null != f,
        b = j && "controlling" === u && !c,
        y = null != f && f.width < 420,
        w = null == f ? void 0 : { left: f.left, top: f.top, width: f.width, height: f.height },
        k =
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
            let [e] = i.useContext(d5.uY),
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
                      className: fe.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: fe.QF,
                          children: (0, a.jsx)(fl, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, cU.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: fe.y4,
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
                ? (0, cU.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: fe.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: fe.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(d9, { projectId: t }),
                          ],
                      }),
                      S,
                  )
                : null,
        ],
    });
}
var fa = n(399503),
    fi = n(853555),
    fs = n(558960),
    fo = n(187645);
let fu = new Map(),
    fc = !1;
function fd() {
    let e = new Map();
    for (let t of new Set([...eZ.A.getActivityOrderedProjectIds(), ...(0, nu.T7)()])) {
        if (!(eZ.A.isThinking(t) || (0, nu.wK)(t))) continue;
        let n = (function (e) {
            let t = G.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, nH.Rc)(t);
            return (0, nV.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...fu]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            fu.delete(t),
            n.unregisterLookup(),
            fs.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        fu.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = fo.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    ff(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (fu.set(e, l),
                    (l.unregisterLookup = (0, fi.Ng)(e, () => (0, dc.n5)(n, t))),
                    fs.A.registerFrameTarget(t, n, dp.A.Backstage, void 0));
            })(t, n);
    for (let e of fu.values()) ff(e.element);
}
function ff(e) {
    let t = lr.A.isBuilderPreviewMobile();
    e.classList.toggle(fo.L, !t);
    let n = t ? dy(lr.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var fm = n(873727),
    fh = n(147248),
    fg = n(418842),
    fp = n(363195),
    fx = n(818023);
let fv = null;
var fj = n(602853),
    fb = n(517461),
    fy = n(761929),
    fw = n(487336);
function fk(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, fj.r)(er.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, c] = (0, fb.V)("VibegrationsChatSidebarWidth", 460),
        [d, f] = i.useState(u ?? 460),
        m = (0, rV.clamp)(d, 360, n);
    i.useLayoutEffect(() => {
        l(t ? m + s : 0);
    }, [m, t, s, l]);
    let h = (0, fy.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: f,
            onElementResizeEnd: c,
            orientation: fy.R.HORIZONTAL_LEFT,
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
        className: fw.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: fw.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: fw.kL, style: { width: m }, children: r }),
        ],
    });
}
var fA = n(541940);
function fN(e) {
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
        let n = (0, s.bG)([fp.A], () => (0, fm.x4)(fp.A.theme)),
            l = (0, s.bG)([fh.A], () => fh.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: o,
                forcedColors: u,
                underlineLinks: c,
            } = (0, s.cf)([i4.Ay], () => ({
                reducedMotion: i4.Ay.useReducedMotion,
                fontScale: (0, fm.U0)(),
                highContrast: i4.Ay.isHighContrastModeEnabled,
                forcedColors: i4.Ay.useForcedColors,
                underlineLinks: i4.Ay.alwaysShowLinkDecorations,
            })),
            d = ns.hH.useSetting(),
            f = (0, fg.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, dc.ow)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, fm.Lq)(),
                    uiDensity: f,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: o,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, cY.W)(l, "set-env", i, {
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
                let n = (0, dc.ow)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, dc.ow)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, fi.Ng)(t, () => (0, dc.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, dc.ow)(h, x), [h, x]),
        j = i.useCallback(() => (m ? (0, dc.ow)(h, x) : h), [m, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: W()(fA.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(fr, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: g, className: fA.fm, children: d }),
                ],
            }),
            f,
            (0, a.jsx)(c6, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function fS(e) {
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
        availability: w,
        activeMode: k,
        widgetApplicationId: S,
        overlayWidgetSize: C,
    } = e;
    (0, fa.k)(t, S);
    let E = o.type === nL.U.MAIN || (0, nH.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, s.cf)([lr.A], () => ({
            mobile: lr.A.isBuilderPreviewMobile(),
            landscape: lr.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? fx.aX.LANDSCAPE : fx.aX.PORTRAIT), (fv = e));
                else {
                    if (fv !== e) return;
                    ((l = fx.aX.UNHANDLED), (fv = null));
                }
                lx.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(E ? l : null);
    let I = i.useRef(null),
        [_, M] = i.useState(0);
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
                fc ||
                    ((fc = !0),
                    eZ.A.addChangeListener(fd),
                    G.Ay.addChangeListener(fd),
                    nY.A.addChangeListener(fd),
                    lr.A.addChangeListener(fd),
                    (0, nu.W3)(fd),
                    fd()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = I.current;
            if (null == e) return;
            function t() {
                null != e && M(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []),
        i.useLayoutEffect(() => () => lv(0), []));
    let T = Math.max(360, _ - 320),
        P = d || E;
    return (0, a.jsx)("div", {
        ref: I,
        className: fA.LB,
        children: (0, a.jsx)(fN, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: c,
            showsFrame: (0, nR.yf)(w, k),
            mainClassName: null == c ? void 0 : W()(fA.ez, { [fA.zt]: d }),
            content: (0, a.jsx)(d3, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: w,
                activeMode: k,
                widgetApplicationId: S,
                overlayWidgetSize: C,
                projectId: t,
                frameOverlay: (0, a.jsx)(dg, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && P
                    ? (0, a.jsx)(fk, {
                          open: d,
                          maxWidth: T,
                          onWidthChange: lv,
                          children: (0, a.jsx)("div", {
                              className: fA.cO,
                              children: x
                                  ? (0, a.jsx)(cq, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(dr.A, { projectId: t }),
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
                                                className: fA.cb,
                                                children: (0, a.jsx)(
                                                    o6,
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
function fC(e) {
    var t;
    let l,
        r,
        u,
        { project: d, projectsLoaded: f, onBack: m, guildId: h } = e,
        [g, x] = i.useState(!0),
        [v, j] = i.useState(!1),
        b = no(),
        y = i.useCallback(() => x(!0), []),
        w = i.useCallback(() => {
            (j(!1), x(!0));
        }, []),
        { restoreState: k, handleRestoreVersion: E } = (function (e, t) {
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
                                                let e = await (0, n_.c)(c, r);
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
        })(d, w),
        _ = d?.id ?? null,
        {
            integrationStatus: M,
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
                { data: c, isLoading: d } = (0, nq.YY)(e?.preview_application_id ?? void 0),
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
                        await (0, U.U1)(r, e.signal);
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
        O = (0, s.bG)([li.A], () => (null == _ ? void 0 : li.A.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: z,
            activeMode: F,
            setMode: q,
            frameSurface: B,
            frameSurfaceOptions: K,
            setFrameSurface: H,
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
                [y, w] = i.useState(r);
            y !== r && (w(r), p(null), v(null), b(null));
            let k = null != a && a === r ? a : null,
                A = (0, s.bG)([nB.default], () => nB.default.getId()),
                { applicationWidgetConfig: N } = (0, nF.A)(A, k ?? void 0),
                S = N?.surfaces,
                C = (0, nR.yZ)({
                    widgetTop: S?.[nz.m.WIDGET_TOP] != null,
                    widgetBottom: S?.[nz.m.WIDGET_BOTTOM] != null,
                    miniProfile: S?.[nz.m.MINI_PROFILE] != null,
                }),
                E = null != k && (f ? C.hasMainCard : C.hasAny),
                { data: I } = (0, nq.YY)(a ?? void 0),
                _ = null != a && I?.bot?.id != null,
                { data: M, isLoading: T } = (0, nq.YY)(r ?? void 0),
                P = o || (0, nG.X)(M),
                R = null != r && T && null == M,
                L = (0, nR.P5)(u, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: _ },
                    widgetResolvable: null != k,
                    botDmResolvable: _,
                }),
                $ = (0, nR.Xm)({ installScope: c, ...L, hasOverlay: m, ownerAuthorizationRevoked: d }),
                D = i.useMemo(() => (0, nK.hR)(u), [u]),
                O = (0, nK.PH)(x, D),
                z =
                    ((t = j),
                    (n = O),
                    (l = h),
                    n !== nL.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                F = i.useMemo(() => (null == z ? void 0 : { customId: z }), [z]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, nH.Mm)(r)) {
                            let t = e.surface.type !== (0, nK.BR)(O),
                                n = (((0, nV.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== z;
                            (t || n) && (0, nU.r)(e.id);
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
                    widgetApplicationId: k,
                }
            );
        })({
            applicationId: d?.preview_application_id ?? null,
            previewApplicationId: d?.preview_application_id ?? null,
            declaredActivity: L,
            previewSupportedSurfaces: d?.preview_supported_surfaces,
            installScope: d?.install_scope ?? null,
            ownerAuthorizationRevoked: M?.owner_authorization_revoked === !0,
            supportsOverlay: d?.preview_supported_surfaces?.includes(nM.q7.OVERLAY) === !0,
            previewAppChannels: O,
        }),
        Z =
            ((t = (0, s.bG)(
                [eZ.A],
                () =>
                    null == _
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(eZ.A.getMessages(_)),
                [_],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : nT);
    ((0, nP.x)(_, (e) => {
        z.modes.includes(e) && q(e);
    }),
        ni(_, () => {
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
                j = (0, nH.jS)(t),
                b = i.useMemo(() => (0, nH.Op)(j, l), [j, l]),
                y = (0, ll.A)(t?.preview_application_id ?? null, b),
                w = (0, nV.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || ln.A.refreshProxyTicket(y.id);
                }, [y, w]);
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
                isRefreshing: w,
                handleRefresh: k,
            };
        })({
            project: d,
            modes: z.modes,
            frameSurface: B,
            frameSurfaceOptions: K,
            previewAppChannels: O,
            setMode: q,
            setFrameSurface: H,
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
            designFeedbackLabel: ek,
            handleToggleDesignFeedback: eA,
        } = (function (e, t, n) {
            let { active: l } = nC(e);
            i.useEffect(() => {
                null != e && l && !t && nk(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nu.Zv)(e),
                s = N.intl.string(a ? A.default.Sme0T0 : l ? A.default.vn5Rzu : A.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        let t;
                        if (l) return void nk(e);
                        (n(), (t = ny(e)).active || nw(e, { ...t, active: !0 }));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, et, w),
        eN = i.useCallback(() => {
            j((e) => !e && (x(!0), !0));
        }, []),
        eS = i.useCallback(() => j(!1), []),
        eC = i.useCallback(() => {
            var e, t;
            (null != d && ((e = d.id), (t = ef?.id), (0, p.Bn)(e), (0, nU.r)(t)), m());
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
                                : (0, eH.A)({
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
            null != d && (0, tV.A)(d, h);
        }, [d, h]),
        e_ = (0, nR.JR)(F, $)
            ? { type: "permissions", authorizeProps: D }
            : P && null == M
              ? { type: "checking" }
              : void 0,
        eM = (0, s.bG)([G.Ay], () => null != _ && G.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == d && f) || eM) && (0, c.bG)(eV.BVt.CHANNEL(h, eW.VV.CONJURE));
    }, [h, d, f, eM]);
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
                c = (0, td.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let f = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: f };
        })(_, h, P || T),
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
                              icon: eL ? fE : null != e$ ? t6.U : void 0,
                              disabled: eR.disabled,
                              onClick: () => eR.run("header"),
                              text: e$ ?? eR.label,
                          }),
                      }),
                  }),
        ez = null == d ? void 0 : () => (0, tm.A)(d.id, { guildId: h, isPreview: !0, publishOptions: eT }),
        eF = (0, a.jsx)(tJ, {
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
                                                      icon: er ? fM : f_,
                                                      tooltip: ei,
                                                      "aria-label": ei,
                                                      selected: er,
                                                      onClick: es,
                                                  })
                                                : null,
                                            er && "frame" === F
                                                ? (0, a.jsx)(ea.A.Icon, {
                                                      icon: fT,
                                                      tooltip: eu,
                                                      "aria-label": eu,
                                                      selected: eo,
                                                      onClick: ec,
                                                  })
                                                : null,
                                            (0, a.jsx)(ea.A.Icon, {
                                                ref: eb,
                                                icon: t4.x,
                                                iconClassName: t7.D8,
                                                tooltip: ek,
                                                "aria-label": ek,
                                                selected: ej,
                                                disabled: ey,
                                                onClick: eA,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === F
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nl.A, { frame: ef }),
                                            (0, a.jsx)(n5, { frame: ef, controlProjectId: d.id }),
                                        ],
                                    })
                                  : null,
                              (0, a.jsx)("div", { className: t7.YJ }),
                              b
                                  ? (0, a.jsx)(ea.A.Icon, {
                                        icon: t8.BugIcon,
                                        tooltip: N.intl.string(A.default.Mt5k9d),
                                        "aria-label": N.intl.string(A.default.Mt5k9d),
                                        selected: v,
                                        onClick: eN,
                                    })
                                  : null,
                              (0, a.jsx)(ea.A.Icon, {
                                  icon: tt.SettingsIcon,
                                  tooltip: N.intl.string(A.default.I2XSKe),
                                  "aria-label": N.intl.string(A.default.I2XSKe),
                                  onClick: ez,
                              }),
                              (0, a.jsx)(tC, {
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
                                              projectId: d.id,
                                              installScope: d.install_scope,
                                              restoreDisabled: k?.status === "restoring",
                                              onRestoreVersion: (e, t) => E(e, t, !0),
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
                                      z.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== z.profileState
                                          ? Q
                                          : null,
                                  previewProjectId: d.id,
                              }),
                              eg
                                  ? null
                                  : (0, a.jsx)(ea.A.Icon, { icon: fI, tooltip: ep, "aria-label": ep, onClick: ex }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: W()(t7.nj, t3.T),
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
                                          (0, a.jsx)(ew.D, {
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
                                              onClick: () => (0, U.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(td.bI.Provider, {
                              value: eT,
                              children: (0, a.jsx)(
                                  fS,
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
                                      restoreState: k,
                                      previewReady: R,
                                      previewGate: e_,
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
function fE() {
    return (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: t7.Hv, itemClassName: t7.C5 });
}
function fI(e) {
    return (0, a.jsx)(t9.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function f_(e) {
    return (0, a.jsx)(ne.u, { ...e, size: "custom", width: 20, height: 20 });
}
function fM(e) {
    return (0, a.jsx)(nt.k, { ...e, size: "custom", width: 20, height: 20 });
}
function fT(e) {
    return (0, a.jsx)(nn.H, { ...e, size: "custom", width: 20, height: 20 });
}
function fP(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, s.yK)([G.Ay], () => G.Ay.getOwnedProjects()),
        h = (0, s.yK)([d.Ay], () => d.Ay.getSelfMember(n)?.roles ?? [], [n]),
        g = (0, s.bG)(
            [f.A, m.A],
            () => {
                let e = f.A.getGuild(n);
                return null != e && m.A.can(eV.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [x, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [w, k] = i.useState(null),
        E = (0, K.z9)("VibegrationsScreen"),
        [I, M] = i.useState(null),
        T = (0, u.o)().get(B.f_) === q;
    i.useEffect(() => {
        M(null);
    }, [n, T]);
    let P = i.useMemo(() => (!T && E.some((e) => e.id === n) ? n : q), [E, n, T]),
        R = I ?? P,
        L = R === q ? "user" : "guild",
        D = R === q ? n : R,
        [z, F] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(n);
    }, [n, h, g]),
        i.useEffect(() => {
            (0, U.dm)(n, j);
        }, [n, j]));
    let V = i.useCallback(
            async (e, t, n) => {
                let l = await (0, U.gA)({ guild_id: t, install_scope: n });
                ((0, p.Hc)(l),
                    (0, p.r2)(l, z ?? $),
                    e(l),
                    (0, c.pX)(eV.BVt.CHANNEL(t, eW.VV.CONJURE, l)),
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
                    (null != e && v(e), y(!0), k(null));
                    try {
                        await V((e) => (0, p.dv)(e, t), D, L);
                    } catch (e) {
                        k((0, _.mG)(e));
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
                    (y(!0), k(null));
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
                        k((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [V, L, D, b],
        ),
        X = i.useCallback(
            async (e, t) => {
                let n = await (0, U.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, p.Hc)(n), (0, p.r2)(n, z ?? $), (0, p.dv)(n, (0, H.Wl)(e)), n);
            },
            [z],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (G.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, U.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new _.DS((0, _.hj)(e), e.status);
            }
            ((0, p.dv)(t, l, void 0, { templateId: e.id }), (0, c.pX)(eV.BVt.CHANNEL(n, eW.VV.CONJURE, t)), F(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = G.Ay.getProject(e)?.guild_id ?? n;
                ((0, c.pX)(eV.BVt.CHANNEL(t, eW.VV.CONJURE, e)), F(null));
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
                    ((r = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, p.Hc)(r),
                        (0, p.r2)(r, z ?? $),
                        await S(r, e, N.intl.string(A.default["LUc7/5"])),
                        (0, c.pX)(eV.BVt.CHANNEL(n, eW.VV.CONJURE, r)),
                        F(null));
                } catch {
                    (null != r && (await (0, U.xx)(r).catch(() => void 0)),
                        (0, o.P0)({ text: N.intl.string(A.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, z],
        ),
        el = i.useCallback(
            (e) => {
                (0, c.pX)(eV.BVt.CHANNEL(n, eW.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, c.pX)(eV.BVt.CHANNEL(n, eW.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (v(e), k(null));
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
        ? (0, a.jsx)(fC, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t5, {
              projects: r,
              modelSettings: z,
              onModelSettingsChange: F,
              idea: x,
              guildId: n,
              submitting: b,
              createError: w,
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
              onConjureTargetChange: M,
              eligibleGuilds: E,
          });
}
