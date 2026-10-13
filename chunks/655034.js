(n.r(t), n.d(t, { default: () => mX }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n(17928),
    o = n(858899),
    u = n(458518),
    c = n(976860),
    d = n(696451),
    m = n(71393),
    f = n(576705),
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
async function C(e, t, n) {
    (0, p.Hc)(e);
    let l = await (0, g.vX)(e, t);
    (0, p.dv)(e, n, [l]);
}
function S(e) {
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
    O = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function D(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var q = n(950305),
    F = n(548118);
let z = "user";
var G = n(371169),
    U = n(260498),
    B = n(941985),
    H = n(16619),
    V = n(952644);
n(321073);
var K = n(503698),
    W = n.n(K),
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
    { value: "user", icon: q.UserIcon, nameMessage: A.default.s1TsXl },
    { value: "guild", icon: ec.R, nameMessage: A.default.LlLIJw },
];
function em(e) {
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
var ef = n(939249);
function eh(e) {
    let { className: t, ariaLabel: n, disabled: l, onClick: r, children: i } = e;
    return (0, a.jsx)(ef.D, {
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
    eC = n(885576),
    eS = n(662429);
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
    let u = (0, s.bG)([eC.A], () => eC.A.isIdle()),
        c = i.useRef(u);
    i.useEffect(() => {
        let t = c.current && !u;
        ((c.current = u), t && eI && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = N.intl.string(A.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eS.x,
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
    eO = n(392208),
    eD = n(837984),
    eq = n(359589),
    eF = n(254575);
function ez(e) {
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
        f = ez(d),
        h = eO.P.indexOf(t.tier),
        g = d ? eM.t : eT._,
        p = eO.P.map(e$.D0),
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
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: W()(eF.Nr, eF.uO, { [eF.Zr]: d && f.entered, [eF.GF]: !d }),
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
                                    "aria-label": N.intl.string(A.default.eGqPbV),
                                    onClick: () => m((e) => !e),
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
                                (0, a.jsx)(eD.A, {
                                    activeIndex: h,
                                    stops: p,
                                    ariaLabel: N.intl.string(A.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = eO.P[e];
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
function eU(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, eq.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = ez(f);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: ei.Y.Animation.NONE,
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
            return (0, a.jsx)(eP.m, {
                text: N.intl.string(A.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(ef.D, {
                    innerRef: c,
                    className: o ?? eF.hZ,
                    "aria-label": N.intl.string(A.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eR.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eB = n(140735),
    eH = n(442433),
    eV = n(314116),
    eK = n(652215),
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
    tm = n(442331),
    tf = n(616334),
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
        [m, f] = i.useState(null),
        h = "delete" === l,
        g = h ? (0, tg.fI)(n) : (0, tg.Kd)(n),
        p = h ? null : (0, tg.L4)(n),
        x = (0, tg.Mi)(n),
        v = h
            ? N.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName })
            : N.intl.formatToPlainString(A.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, G.xx)(t.id) : (0, tj.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(N.intl.string(h ? A.default["0XDHob"] : A.default.PJ2Fkn))
            : (h || (0, o.P0)({ text: (0, tg.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tp.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tg.WX)((0, tb.tb)(A.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tg.J)(n) : N.intl.string(A.default["8OKM1N"]),
        "aria-label": v,
        notice: null == m ? void 0 : { message: m, type: "critical" },
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
function tC(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: u,
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
        w = (0, th.iI)(t),
        k = i.useContext(td.bI),
        { pending: C, refresh: S } = (0, tr.A)(j ?? null),
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
        _ = (0, s.bG)([tm.A], () => (null == b ? tA : tm.A.getDeclaredConnections(b))),
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
        })({ canRefresh: null != j, refreshPending: C, offers: M, connectPending: E }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        L = null != f && c,
        $ = u && null != m,
        O = L || null != d || $ || null != h || null != g,
        D = ti.p5 && null != l,
        q = ti.p5,
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
                                      if ("refresh" === e.kind) return void S();
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
            O
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(eo.Dr, { id: "remix", label: N.intl.string(A.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eo.Dr, { id: "export", label: N.intl.string(A.default.WsEEP7), action: d })
                              : null,
                          $
                              ? (0, a.jsx)(eo.Dr, { id: "import", label: N.intl.string(A.default.rWGY3e), action: m })
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
            q
                ? (0, a.jsxs)(eo.rX, {
                      children: [
                          D
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
                                        (0, tf.A)(t, {
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
                                        let e = U.Ay.getProject(t);
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
                                        let e = U.Ay.getProject(t);
                                        if (null != e && null != T) tw({ project: e, target: T, action: "delete" });
                                        else
                                            (0, eV.A)({
                                                title: N.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: N.intl.string(A.default["0OmrVn"]),
                                                confirmText: N.intl.string(N.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, G.K)(t, () =>
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
function tS(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ei.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tC, { ...n, onCloseMenu: t });
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
    tP = n(536637),
    tR = n.n(tP),
    tL = n(941650);
function t$(e) {
    var t;
    let n,
        l,
        r,
        u,
        d,
        f,
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
                            let t = S(e);
                            null != t
                                ? (0, o.P0)({ text: t, variant: "critical" })
                                : (0, eV.A)({
                                      title: N.intl.formatToPlainString(A.default["Gm+u1+"], { name: l }),
                                      subtitle: N.intl.string(A.default.M7H3sJ),
                                      confirmText: N.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, c.pX)(eK.BVt.CHANNEL(j, eW.VV.CONJURE, n));
                                          try {
                                              await C(n, e, N.intl.string(A.default.Owerd3));
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
        M =
            null == v.updated_at
                ? null
                : N.intl.formatToPlainString(A.default.AXydi3, { time: tR()(v.updated_at).fromNow() }),
        T = (0, eX.wu)(v),
        P =
            (0, s.bG)([m.A], () => (null == T ? null : (m.A.getGuild(T)?.name ?? null)), [T]) ??
            N.intl.string(A.default["3QFps8"]),
        R = (0, s.bG)([U.Ay], () => U.Ay.isProjectDeleting(v.id), [v.id]),
        L =
            ((t = k ? v : null),
            (f = t?.id),
            (h = t?.owner_user_id),
            (g = (0, s.yK)(
                [eZ.A],
                () =>
                    null == f
                        ? []
                        : [
                              ...new Set(
                                  eZ.A.getMessages(f)
                                      .flatMap((e) => (null != e.user_id && e.user_id !== h ? [e.user_id] : []))
                                      .reverse(),
                              ),
                          ],
                [f, h],
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
        O = (0, a.jsx)(Y.E, { variant: "text-md/semibold", color: "text-strong", className: tL.j1, children: v.name }),
        D = {
            projectId: v.id,
            projectName: v.name,
            guildId: j,
            projectGuildId: v.guild_id,
            isOwner: (0, U.PV)(v),
            canRemix: (0, U.H_)(v),
            onRemix: y,
            onExport: _.onExport,
            onImport: _.onImport,
        };
    return (0, a.jsxs)("div", {
        className: W()(tL.OY, { [tL.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eJ.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tT.a, { projectId: v.id }),
            (0, a.jsxs)(ef.D, {
                className: tL.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eH.jA)(e, () => (0, a.jsx)(tC, { ...D, onCloseMenu: eH.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(tE.A, { project: v, size: "card", className: tL.VJ }),
                    (0, a.jsxs)("div", {
                        className: tL.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: tL.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eP.m, { text: L.label, ariaHidden: !0, children: O }) : O,
                                    null == L || R ? null : (0, a.jsx)(tM, { creator: L, className: tL.rb }),
                                    R ? null : (0, a.jsx)(tT.n, { projectId: v.id, className: tL.fs }),
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
                                    null == M || R
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
                className: tL.M2,
                children: R
                    ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: tL.Pl,
                          children: [(0, a.jsx)(tS, { ...D, trigger: "iconButton" }), _.importInput],
                      }),
            }),
        ],
    });
}
var tO = n(246338);
let tD = "user",
    tq = "no-server",
    tF = new Map();
function tz(e) {
    return tF.get(e) ?? null;
}
function tG(e) {
    switch (e) {
        case "all":
        case tD:
        case tq:
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
        case tq:
            return null == (0, eX.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tB = n(506774);
let tH = "VibegrationsProjectsPanelOpen";
function tV() {
    return tB.w.get(tH) ?? null;
}
function tK(e) {
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
                          children: (0, a.jsx)(ef.D, {
                              className: tJ.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tE.A, { project: r, size: "header" }),
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
            } = (0, s.cf)([eY.default, m.A, tZ.Ay, t0.A], () => {
                let e = eY.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of m.A.getGuildsArray()) {
                    if (!t.features.has(eK.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = tZ.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tQ.m1)(t, eY.default, t0.A) === t1;
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
                    ? (0, c.pX)(eK.BVt.CHANNEL(e.guildId, e.channelId))
                    : (0, to.h)({ href: e.url, trusted: !0 }));
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
var t7 = n(606128),
    t5 = n(323140);
function t6(e) {
    let {
            projects: t,
            idea: l,
            guildId: r,
            submitting: u,
            createError: c,
            createDisabled: d,
            conjureTarget: f,
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
            onCancelTemplate: C,
            onSkipTemplate: S,
            onImportNewProject: E,
            importing: I,
        } = e,
        [_, T] = i.useState(() => ({ guildId: r, filter: tz(r) })),
        R = (_.guildId === r ? _.filter : tz(r)) ?? r,
        D = i.useCallback(
            (e) => {
                (tF.set(r, e), T({ guildId: r, filter: e }));
            },
            [r],
        ),
        B = (0, s.yK)(
            [m.A],
            () =>
                (function (e, t) {
                    let n = new Set([t]);
                    for (let t of e)
                        (null != t.guild_id && n.add(t.guild_id),
                            null != t.preview_guild_id && n.add(t.preview_guild_id));
                    let l = [];
                    for (let e of n) {
                        let t = m.A.getGuild(e);
                        null != t && l.push(t);
                    }
                    return l.sort((e, t) => e.name.localeCompare(t.name));
                })(t, r),
            [t, r],
        ),
        H = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: el.D, label: N.intl.string(A.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tD, leading: q.UserIcon, label: N.intl.string(A.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tq, leading: ec.R, label: N.intl.string(A.default["3QFps8"]) },
                ...B.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(F.Ay, { guild: e, size: F.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [B],
        ),
        V = (0, s.yK)(
            [U.Ay, m.A],
            () => {
                let e = tG(R);
                if (null != e) return U.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(m.A.getGuilds()))
                    U.Ay.hasFetchedGuildProjects(e.id) && t.push(...U.Ay.getSharedProjects(e.id));
                return t;
            },
            [R],
        );
    i.useEffect(() => {
        let e = tG(R);
        null == e || U.Ay.hasFetchedGuildProjects(e) || (0, G.hF)(e);
    }, [R]);
    let K = i.useMemo(
            () =>
                V.filter((e) => tU(e, R)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [V, R],
        ),
        ei = i.useMemo(
            () => [
                {
                    label: N.intl.string(A.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: z,
                            label: N.intl.string(A.default.UPLaGM),
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
                    .filter((e) => tU(e, R))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, R],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tO.Ot)(e, r)
                    ? v(e.id)
                    : (0, o.P0)({ text: N.intl.string(A.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = N.intl.string(A.default.ab1sMf),
        ed = [N.intl.string(A.default["9w+Chc"]), N.intl.string(A.default.WAvmdq), N.intl.string(A.default.SKsrzl)],
        ef = [
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
                        onCancel: C,
                        onSkip: S,
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
            [g, r, C, y, S, w, k],
        ),
        ep = N.intl.string(A.default.zzYLlW),
        eb =
            (i.useEffect(() => {
                (0, G.b8)();
            }, []),
            (0, s.bG)([U.Ay], () => {
                let e = U.Ay.getMaxProjects();
                return null != e && U.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - U.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = N.intl.string(A.default["2XcV3x"]),
        ew = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ek = tG(R) ?? r,
        eA = (0, s.bG)([U.Ay], () => U.Ay.getGuildProjectsFetchState(ek), [ek]),
        eN = (0, s.bG)([U.Ay], () => U.Ay.getGuildProjectsFetchState(r), [r]),
        [eC, eS] = i.useState(tV),
        eE = i.useMemo(() => tB.w.get(tK(r)) ?? !1, [r]),
        eI = "success" === eN,
        eM = (0, s.yK)([U.Ay], () => U.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tU(e, r)),
        eT = eC ?? (!!eM || "error" === eN || (!eI && eE));
    i.useEffect(() => {
        eI && tB.w.set(tK(r), eM);
    }, [eI, eM, r]);
    let eP = i.useCallback((e) => {
            (tB.w.set(tH, e), eS(e));
        }, []),
        eR = i.useCallback(() => eP(!eT), [eP, eT]),
        eL = i.useCallback(() => eP(!1), [eP]),
        e$ = N.intl.string(A.default.kar7jh),
        eO = eT ? e$ : N.intl.string(A.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: W()(t5.nj, t5.a0, t7.T),
        children: (0, a.jsxs)("div", {
            className: t5.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t5.ps,
                    children: [
                        (0, a.jsx)(tX, {
                            title: N.intl.string(A.default.uk6jhJ),
                            actions: (0, a.jsx)(ea.A.Icon, {
                                icon: J.Z,
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eT,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(X.Ip, {
                            className: t5.Yy,
                            children: (0, a.jsx)("div", {
                                className: t5.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: W()(t5.Qs, t5.Ix),
                                    children: [
                                        (0, a.jsx)(t3, {}),
                                        (0, a.jsx)(e_, {}),
                                        (0, a.jsxs)("section", {
                                            className: t5.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t5.G9,
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
                                                    listClassName: t5.Aw,
                                                    radius: ex,
                                                    children: ef.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t5.EA,
                                                                children: (0, a.jsxs)(eh, {
                                                                    disabled: u,
                                                                    ariaLabel: N.intl.formatToPlainString(
                                                                        A.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: W()(t5.nx, t5.rz),
                                                                    onClick: () => eg(e),
                                                                    children: [
                                                                        (0, a.jsx)(Y.E, {
                                                                            className: t5.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Y.E, {
                                                                            className: t5.BK,
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
                                            className: t5.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t5.G9,
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
                                                    listClassName: t5.Aw,
                                                    radius: ev,
                                                    children: ed.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t5.EA,
                                                                children: (0, a.jsx)(eh, {
                                                                    disabled: u,
                                                                    className: t5.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Y.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t5.un,
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
                            className: t5.Yl,
                            children: (0, a.jsxs)("div", {
                                className: W()(t5.Qs, t5.DA),
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
                                        className: t5.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t5.gH,
                                                children: (0, a.jsx)(Z.l, {
                                                    selectionMode: "single",
                                                    label: N.intl.string(A.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: N.intl.string(A.default.NyVn6T),
                                                    options: ei,
                                                    value: f,
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
                                            (0, a.jsx)(eU, {
                                                settings: p ?? $,
                                                tiers: O,
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
                    className: t5.pA,
                    hidden: !eT,
                    "aria-label": N.intl.string(A.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t5.IR,
                            children: [
                                (0, a.jsx)(Y.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t5.RM,
                                    children: N.intl.string(A.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t5.Ss,
                                    children: [
                                        (0, a.jsx)(em, { importing: I, onImport: E }),
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
                            className: t5.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t5.Vw,
                                    children: (0, a.jsx)(Z.l, {
                                        selectionMode: "single",
                                        label: N.intl.string(A.default.U6TqU9),
                                        hideLabel: !0,
                                        options: H,
                                        value: R,
                                        onSelectionChange: D,
                                    }),
                                }),
                                (0, a.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t5.wE,
                                    children: N.intl.string(A.default.JQpNkh),
                                }),
                                ("unattempted" === eA || "loading" === eA) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t5.E8, children: (0, a.jsx)(en.y, {}) })
                                    : "error" === eA && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t5.E8,
                                            children: [
                                                (0, a.jsx)(Y.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t5.JS,
                                                    children: N.intl.string(A.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(ee.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: N.intl.string(A.default["WFJ/vb"]),
                                                    onClick: () => (0, G.hF)(ek),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t5.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t5.ST,
                                                  children: [
                                                      (0, a.jsx)(el.D, { size: "lg", color: er.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t5.sI,
                                                          children: N.intl.string(A.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t5.Dq,
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
                                K.length > 0
                                    ? (0, a.jsxs)("div", {
                                          className: t5.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t5.uc,
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
                                                  className: t5.Dq,
                                                  children: K.map((e) =>
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
var t4 = n(478016),
    t8 = n(604525),
    t9 = n(92446),
    ne = n(534890),
    nt = n(646270),
    nn = n(31300),
    nl = n(831453),
    nr = n(270593);
let na = new Set(),
    ni = null;
function ns(e, t) {
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
                na.add(t),
                () => {
                    na.delete(t);
                }
            );
        }, [e]));
}
var no = n(885386);
function nu() {
    return no.Q_.useSetting() || !1;
}
var nc = n(573083);
let nd = Object.freeze({ x: 0.5, y: 0.5 });
function nm(e) {
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
function nh(e) {
    let { kind: t, name: n } = nf(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function ng(e) {
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
let np = "[vibegrations:selected] ",
    nx = " \u2014 ";
function nv(e) {
    if (!e.startsWith(np)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(np.length),
        a = r.indexOf(nx),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nj = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nb = new Map(),
    ny = new Set();
function nw(e) {
    return nb.get(e) ?? nj;
}
function nk(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nb.set(e, t) : nb.delete(e), [...ny]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function nA(e) {
    nb.has(e) && nk(e, nj);
}
function nN(e, t) {
    let n = nw(e);
    n.active && nk(e, { ...n, context: t });
}
function nC(e, t) {
    return null != t && e.authorId === t;
}
function nS(e) {
    return (
        ny.add(e),
        () => {
            ny.delete(e);
        }
    );
}
function nE(e) {
    let t = i.useCallback(() => (null == e ? nj : nw(e)), [e]);
    return i.useSyncExternalStore(nS, t, t);
}
var nI = n(128761),
    n_ = n(12177),
    nM = n(967008);
(n(134528), n(947204));
var nT = n(886540),
    nP = n(951178);
let nR = { width: 320, height: 240 };
var nL = n(855859),
    n$ = n(238490),
    nO = n(991690),
    nD = n(696645);
function nq(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function nF(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, nD.XV)(e.surface)
                : N.intl.formatToPlainString(A.default["6xVl+N"], {
                      surface: (0, nD.XV)(e.surface),
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
    nG = n(294323),
    nU = n(627363),
    nB = n(457827),
    nH = n(25451),
    nV = n(280450),
    nK = n(373677),
    nW = n(754027),
    nJ = n(165610);
let nX = [];
var nY = n(86147),
    nQ = n(729475),
    nZ = n(91242),
    n0 = n(869146),
    n1 = n(475815),
    n2 = n(621466);
function n3(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function n7(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, n2.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function n5(e) {
    return (0, n1.a3)(document, e);
}
function n6(e) {
    return i.useSyncExternalStore(n5, () => n7(e));
}
function n4(e) {
    let { frame: t, controlProjectId: n } = e,
        l = n6(t?.id ?? null),
        r = (0, nc.Zv)(n),
        i = (0, s.bG)(
            [n0.A, nZ.A],
            () => null != t && n0.A.getWindowOpen(eK.MLl.ACTIVITY_POPOUT) && nZ.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, nJ.x1)(t) || i || r) return null;
    let o = n3(t.id);
    if (null == o || !(0, n1.Ub)(o)) return null;
    let u = N.intl.string(l ? N.t.Z7MyNB : N.t.OIDkcp);
    return (0, a.jsx)(ea.A.Icon, {
        tooltip: u,
        icon: l ? nY.z : nQ.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = n3((e = t.id))) && (0, n1.Ub)(n) && (n7(e) ? (0, n1.sP)(n) : (0, n1.tl)(n));
        },
    });
}
var n8 = n(559106),
    n9 = n(847374),
    le = n(704745);
function lt(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = N.intl.string(A.default.I2ucou);
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
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(eo.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = nq(e);
                        return (0, a.jsx)(
                            eo.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: nF(e),
                                checked: t === nq(n),
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
            return (0, a.jsx)(n8.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: le.h,
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
                            children: nF(n),
                        }),
                        (0, a.jsx)(n9.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ln = n(803101),
    ll = n(226178),
    lr = n(625180),
    la = n(672929),
    li = n(111534),
    ls = n(513845),
    lo = n(722701),
    lu = n(949616),
    lc = n(535466),
    ld = n(321032),
    lm = n(277085);
function lf(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, lc.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lm.p)(b),
        w = h ?? u,
        k = m.trim();
    function C() {
        (r(), o());
    }
    async function S(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, td.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? C() : x(N.intl.string(A.default.Fi7boI));
    }
    let E = "" === b ? n : b;
    return (0, a.jsx)("form", {
        onSubmit: S,
        children: (0, a.jsx)(tp.a, {
            transitionState: s,
            onClose: o,
            title: N.intl.string(A.default.OmOWDq),
            subtitle: N.intl.string(A.default.Gzmlyg),
            size: "sm",
            preview: (0, a.jsx)(ld.w, { iconURL: w, name: E, description: k }),
            actions: [
                { text: N.intl.string(A.default["bz/M68"]), variant: "secondary", onClick: C, disabled: v },
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
                    (0, a.jsx)(ld.r, {
                        iconURL: w,
                        canRemove: null != h,
                        onIconChange: (e) => {
                            (g(e), x(null));
                        },
                        name: c,
                        nameError: y,
                        onNameChange: d,
                        description: m,
                        onDescriptionChange: f,
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
var lh = n(516288);
function lg(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lh.t)(t, n);
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
let lp = {
    showPublishBlocked: function (e, t, n) {
        (0, tv.openModal)((l) => (0, a.jsx)(lg, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tv.openModal)(
                (t) =>
                    (0, a.jsx)(lf, {
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
var lx = n(58736),
    lv = n(308081),
    lj = n(73153);
function lb(e) {
    lj.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var ly = n(689175),
    lw = n(65593),
    lk = n(115982);
function lA(e) {
    return !(0, nT.BL)(e) && !0 !== e.stopRequested;
}
var lN = n(104317),
    lC = n(643278),
    lS = n(566424),
    lE = n(683063),
    lI = n(138212);
function l_(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: W()(lI.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: W()(lI.wx, null != n && lI.o5, i),
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
function lT(e) {
    let { children: t } = e;
    return (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lP(e) {
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
        v = f ? n9.a : eT._,
        j = null != n || l;
    return (0, a.jsxs)(l_, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: lM.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(ef.D, {
                                className: lM.L$,
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
        headerClassName: f ? void 0 : lM.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: W()(lM.rf, o), hidden: !f, children: c })],
    });
}
var lR = n(883646);
let lL = [];
function l$(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: W()(lR.xL, {
            [lR.Vb]: "in_progress" === t,
            [lR.cT]: "completed" === t,
            [lR.GZ]: "unfinished" === t,
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
                className: lR.Qd,
                itemClassName: lR.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lR.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lR.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lO(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : lL), [n, t]),
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
        className: lR.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    lE.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lR.MA,
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
                      className: lR.qA,
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
            ((t = (r ?? lL).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? lL) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lR.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: W()(lR.AS, { [lR.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(l$, { status: n }),
                            (0, a.jsx)(Y.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lR.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lR.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lO, { agents: u.get(e.id) ?? lL, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lR.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(l$, { status: "pending" }),
                          (0, a.jsx)(Y.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lR.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lR.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lq(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = N.intl.formatToPlainString(A.default["P/I+JW"], { completed: o, total: u }),
        d = N.intl.formatToPlainString(A.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(lP, {
        title: N.intl.string(A.default.RtzECX),
        meta: (0, a.jsx)(lT, { children: c }),
        superseded: s,
        showLabel: N.intl.string(A.default.RKyN9q),
        hideLabel: N.intl.string(A.default.xydHoj),
        className: lR.Nr,
        bodyClassName: lR.rf,
        beforeBody: r && !s ? (0, a.jsx)(eB.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lD, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lF = n(308665),
    lz = n(59678),
    lG = n(903847);
function lU(e) {
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
        [k, C] = i.useState(!1),
        [S, E] = i.useState(x);
    (S !== x && (E(x), x ? w(!0) : C(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => w(!1), 150);
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
        _ = i.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: lG.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: W()(lG.vK, { [lG.ho]: g && c, [lG.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: W()(lG.Rk, lz.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lS.A, {
                                        glyph: (0, a.jsx)(lF.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(ef.D, {
                                    className: lG.pZ,
                                    onClick: u,
                                    "aria-label": N.intl.string(A.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: W()(lG.Rk, lz.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lS.A, {
                                            glyph: (0, a.jsx)(lF.Ay, {}),
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
                                    children: (0, a.jsx)(ef.D, {
                                        className: lG.BO,
                                        onClick: _,
                                        "aria-expanded": x,
                                        "aria-label": N.intl.string(A.default.RtzECX),
                                        children: (0, a.jsx)(lC.ClipboardListIcon, {
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
                            className: W()(lG.vB, { [lG.pg]: x && k, [lG.ui]: !x }),
                            children: (0, a.jsx)(lq, {
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
var lB = n(658675),
    lH = n(22231),
    lV = n(826745),
    lK = n(123292),
    lW = n(734057);
let lJ = {
        [eK.rbe.GUILD_TEXT]: "text",
        [eK.rbe.GUILD_VOICE]: "voice",
        [eK.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eK.rbe.GUILD_STAGE_VOICE]: "stage",
        [eK.rbe.GUILD_FORUM]: "forum",
        [eK.rbe.GUILD_MEDIA]: "media",
    },
    lX = { channel: "#", role: "@", user: "@" },
    lY = {
        channel: [A.default["9+dfPT"], A.default.pGSJqE],
        role: [A.default["2VkCoD"], A.default.c8YlX8],
        user: [A.default.GZIAxl, A.default["4bptbQ"]],
    };
function lQ(e, t) {
    return N.intl.string(lY[e][+!!t]);
}
var lZ = n(155078);
function l0(e) {
    return e.options.some((e) => null != e.image);
}
let l1 = [];
function l2(e, t) {
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
var l3 = n(890497),
    l7 = n(300344),
    l5 = n(614733),
    l6 = n(904363),
    l4 = n(950902),
    l8 = n(384017);
function l9(e) {
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
                        let l = null == (n = lW.A.getChannel(t)?.type) ? void 0 : lJ[n];
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
        matchSorterOptions: m,
        onFocus: s,
        onBlur: o,
        fullWidth: !0,
        maxOptionsVisible: 4,
        label: n.question,
        hideLabel: !0,
    };
    return (0, a.jsx)("div", {
        className: l8.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(l3.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(l3.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function re(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, l7.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(l9, { ...l, guildId: t, options: r, placeholder: lQ("channel", !0 === l.question.multi_select) });
}
function rt(e) {
    let { guildId: t, ...n } = e,
        l = (0, l6.A)(t);
    return (0, a.jsx)(l9, { ...n, guildId: t, options: l, placeholder: lQ("role", !0 === n.question.multi_select) });
}
function rn(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, l5.A)(t);
    return (0, a.jsx)(l9, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lQ("user", !0 === n.question.multi_select),
    });
}
function rl(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, l4.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(re, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(rt, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(rn, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var rr = n(87221),
    ra = n(144228),
    ri = n(241326),
    rs = n(26430),
    ro = n(750943),
    ru = n(95477),
    rc = n(256905),
    rd = n(839214);
let rm = [],
    rf = 1,
    rh = (0, rd.D)(() => ({ draftsByProject: {} }));
function rg(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? rm;
}
function rp(e, t) {
    return rg(rh.getState(), e, t);
}
function rx(e, t, n) {
    let { draftsByProject: l } = rh.getState();
    rh.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function rv(e, t, n, l) {
    let r = rp(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (rx(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function rj(e, t) {
    (0, g.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function rb(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && rj(e, t.ref.id));
}
function ry(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = rh.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? rm) n ? rb(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    rh.setState({ draftsByProject: i });
}
function rw(e) {
    return N.intl.formatToPlainString(A.default.JZ59Bo, { size: (0, h.sM)((0, h.Ju)(e)) });
}
function rk(e, t) {
    let n = rp(e, t);
    if (0 !== n.length) {
        for (let t of n) rb(e, t);
        rx(e, t, rm);
    }
}
function rA(e, t) {
    let n = rp(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (rx(e, t, rm), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function rN(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = rp(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? rA(e, "chat") : [];
    (0, p.dv)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function rC(e, t) {
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
(lj.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(rh.getState().draftsByProject)) ry(e, { deleteFromWorker: !0 });
}),
    lj.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        ry(t, { deleteFromWorker: !1 });
    }));
var rS = n(907702);
function rE(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = rC(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: W()(rS.Gt, rS.b6),
              children: [
                  (0, a.jsx)(rr.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: N.intl.string(A.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: W()(rS.Gt, { [rS.iP]: !m }),
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
function rI(e) {
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
        p = N.intl.formatToPlainString(A.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: W()(rS.Vs, { [rS.Q9]: s, [rS.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(ef.D, {
                className: rS.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
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
                                ? (0, a.jsx)(rE, {
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
                                    ? (0, a.jsx)(lB.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(ra.T, { checked: s, disabled: o }),
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
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, lZ.E)(t) : "")
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
                              icon: ri.TrashIcon,
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
                                icon: rs._,
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
function r_(e) {
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
                            (0, rc.R)({
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
                className: W()(rS.fF, "gallery" === f ? rS.nV : rS.nM, { [rS.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            rI,
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
                              rI,
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
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        p = n.busy;
    function x() {
        "" !== d.trim() &&
            null == p &&
            n.onLink(d.trim()).then(
                (e) => {
                    e && (c(!1), m(""));
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
                        icon: ro.X,
                        text: s,
                        loading: "upload" === p,
                        disabled: l || "link" === p,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
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
                              tabIndex: f,
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
                                            : Promise.resolve({ errorText: rw(r) })),
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
                              children: (0, a.jsx)(ru.k, {
                                  label: N.intl.string(A.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: N.intl.string(A.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
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
var rT = n(29073);
function rP(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(ef.D, {
        className: W()(l8.uK, { [l8.ue]: l, [l8.h4]: !0 === o }),
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
                ? (0, a.jsx)("span", { className: l8.dy, children: (0, a.jsx)(lB.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: l8.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l8.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l8.l8,
                        children: (0, a.jsx)(Y.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l8.ed,
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
                      className: l8.rM,
                      children: N.intl.string(A.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rR(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return l0(n)
        ? (0, a.jsx)(r_, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rP,
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
let rL = [],
    r$ = [];
function rO(e) {
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
        className: W()(l8.Ge, l8.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Y.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l8.aK,
                      children: N.intl.string(A.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(rR, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: l2(o, u),
            }),
            l0(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: l8.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l8.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lH.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: W()(l8.Pu, l8.es), children: c }),
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
        [m, f] = i.useState({}),
        [h, p] = i.useState({}),
        [x, v] = i.useState({}),
        [j, b] = i.useState(!1),
        [y, w] = i.useState(0),
        [k, C] = i.useState(null),
        [S, E] = i.useState(null),
        [I, _] = i.useState(null),
        [M, T] = i.useState(!1),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        O = i.useRef(0),
        D = null == r,
        q = l.questions.length,
        F = Math.min(y, q - 1),
        z = l.questions[F],
        [G, U] = i.useState({ id: z.id, expanded: !1 }),
        B = G.id === z.id && G.expanded,
        [H, V] = i.useState(null),
        K = c[z.id] ?? "",
        J = !0 === z.multi_select,
        X = l0(z),
        Q = J ? (m[z.id] ?? rL) : ((t = o[z.id]), t?.kind === "option" ? [t.optionId] : l1),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = N.intl.string(A.default.wTsP5l),
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
                        if (o) return l2(h, m(i));
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
                    [c, t, l, e, m, n, a],
                );
            return { imageFor: d, selectedFor: m, multiPartFor: f, controlsFor: h };
        })(n, o, u),
        en = Z.imageFor(z.id),
        el = Z.selectedFor(z),
        { text: er, phase: ea } = (0, eL.Q)(z.question),
        ei = er === z.question,
        es = ei && H?.id === z.id && H.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            V((t) => (t?.id === z.id && t.truncated === e ? t : { id: z.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, z.id, B]);
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
                O.current += 1;
                let n = O.current;
                (C({ direction: t, moves: n }),
                    E({ question: z, draft: K, selected: Q, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    T(!0),
                    w(e));
            },
            [K, en, el, z, Q],
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
    let em = k?.moves;
    i.useEffect(() => {
        if (null == em) return;
        let e = setTimeout(() => E(null), 400),
            t = setTimeout(() => T(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [em]);
    let eh = i.useCallback(
            (e) => {
                if (D) return;
                let t = { ...o, [z.id]: e };
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
            [o, l, D, F, z.id, eu, ec],
        ),
        eg = i.useCallback(() => {
            D || 0 === F || ec(F - 1, "back");
        }, [D, F, ec]),
        ep = F > 0 && !D,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [z.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                X ? D || u((e) => ({ ...e, [z.id]: t })) : eh(t);
            },
            [D, X, z.id, eh],
        ),
        { multiPartFor: ev } = Z,
        ej = i.useMemo(() => {
            var e;
            let t, n;
            return J
                ? ((e = ev(z)),
                  (t = K.trim()),
                  (n = z.options.filter((e) => Q.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: Q,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [K, J, ev, z, Q]),
        eb = h[z.id] ?? r$,
        ey = i.useMemo(() => {
            var e, t;
            let n;
            return null != z.input
                ? ((e = z.input),
                  (t = x[z.id]),
                  (n = K.trim()),
                  {
                      kind: "entities",
                      entities: eb,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...eb.map((t) => (t.name.startsWith(lX[e]) ? t.name : `${lX[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [K, x, eb, z.id, z.input]),
        ew = i.useCallback(
            (e, t) => {
                (p((t) => ({ ...t, [z.id]: e })), v((e) => ({ ...e, [z.id]: t })));
            },
            [z.id],
        ),
        ek = i.useCallback(() => b(!0), []),
        eA = i.useCallback(() => b(!1), []),
        eN = Z.controlsFor(z, D),
        eC = i.useCallback(() => {
            if (null != ey) {
                "" !== ey.text && eh(ey);
                return;
            }
            if (null != ej) {
                "" !== ej.text && eh(ej);
                return;
            }
            let e = K.trim();
            "" !== e && eh({ kind: "custom", text: e });
        }, [K, ej, ey, eh]),
        [eS, eE] = i.useState(!1),
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
                      : "" !== K.trim()
                        ? { kind: "custom", text: K.trim() }
                        : (o[z.id] ?? null),
            [o, K, ej, ey, z.id],
        ),
        e$ = null != eR && !D,
        eO = F === q - 1,
        eD = i.useCallback(() => {
            null == eR || D || eh(eR);
        }, [D, eR, eh]),
        eq = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, n2.vq)(e.target, HTMLTextAreaElement) ||
                    (0, n2.vq)(e.target, HTMLInputElement) ||
                    ((!(0, n2.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && e$ && (e.preventDefault(), eD())));
            },
            [ep, e$, eg, eD],
        ),
        eF = X
            ? null
            : (0, a.jsxs)("div", {
                  className: l8.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: l8.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lH.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lV.y, {
                          value: K,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [z.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eC());
                          },
                          placeholder: N.intl.string(A.default["tOC+tn"]),
                          "aria-label": N.intl.formatToPlainString(A.default["4JeYPB"], { question: z.question }),
                          disabled: D,
                          rows: 1,
                          className: l8.Pu,
                          "data-conjure-clarification-other": z.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: W()(l8.$O, { [l8.fI]: eS && !eI, [l8.Oh]: eI }),
        role: "dialog",
        "aria-label": z.question,
        "data-conjure-clarification": l.id,
        "data-state": D ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !M ? "true" : void 0,
        "data-step": F,
        tabIndex: -1,
        onKeyDown: eq,
        children: [
            (0, a.jsxs)("div", {
                className: l8.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": M ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: P,
                        className: l8.wx,
                        children: [
                            (0, a.jsx)(Y.E, {
                                ref: L,
                                tag: "span",
                                id: `${z.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: W()(rT.TK, l8.R_, { [l8.TB]: "exit" === ea, [l8.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: rT.Q7,
                                      children: (0, a.jsx)(eP.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tn.K, {
                                              icon: B ? eM.t : n9.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: z.id, expanded: !B }),
                                              "aria-label": eo,
                                              "aria-controls": `${z.id}-label`,
                                              "aria-expanded": B,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(ef.D, {
                                      className: W()(rT.gb, rT.Q7),
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
                        className: l8.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: l8.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: l8.Ge,
                                    role: "group",
                                    "aria-labelledby": `${z.id}-label`,
                                    "data-direction": k?.direction,
                                    "data-parity": null == k ? void 0 : k.moves % 2,
                                    children: [
                                        J
                                            ? (0, a.jsx)(Y.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l8.aK,
                                                  children: N.intl.string(A.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rR, {
                                            projectId: n,
                                            question: z,
                                            selected: Q,
                                            disabled: D,
                                            onPick: (e) =>
                                                J
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [z.id]:
                                                                  ((n = t[z.id] ?? rL),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  z.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ex(e),
                                            own: eN,
                                        }),
                                        null != z.input
                                            ? (0, a.jsx)(rl, {
                                                  projectId: n,
                                                  question: z,
                                                  value: eb,
                                                  disabled: D,
                                                  onChange: ew,
                                                  onFocus: ek,
                                                  onBlur: eA,
                                                  fallback: !1 === z.allow_custom ? eF : null,
                                              })
                                            : null,
                                        !1 === z.allow_custom ? null : eF,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          rO,
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
            q > 1 || J || X || null != z.input
                ? (0, a.jsxs)("div", {
                      className: rT.qr,
                      children: [
                          (0, a.jsx)(Y.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  q > 1
                                      ? N.intl.formatToPlainString(A.default.yzYUjq, { index: F + 1, total: q })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: rT.zt,
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
                                      text: N.intl.string(eO ? N.t.geKm7t : A.default.w1nRmT),
                                      disabled: !e$,
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
var rq = n(557744),
    rF = n(223347),
    rz = n(894443),
    rG = n(525530),
    rU = n(572253),
    rB = n(411236);
function rH(e) {
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
                      className: rB.Mk,
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
                          (0, a.jsx)("div", { className: rB.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: W()(rT.nd, rT.jx),
                      "aria-label": N.intl.string(A.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: rT.wx,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: rT.TK,
                                      children: N.intl.string(A.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(ef.D, {
                                      className: W()(rT.gb, rT.Q7),
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
                              className: rB.DQ,
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
                              className: rT.qr,
                              children: (0, a.jsx)("div", { className: rT.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var rV = n(874421),
    rK = n(404373),
    rW = n(435558),
    rJ = n.n(rW);
let rX = "VibegrationsComposerDrafts";
function rY() {
    return tB.w.get(rX) ?? {};
}
let rQ = new Map(),
    rZ = rJ().throttle(() => {
        if (0 === rQ.size) return;
        let e = rY();
        for (let [t, n] of rQ) "" === n ? delete e[t] : (e[t] = n);
        (rQ.clear(), tB.w.set(rX, e));
    }, 1e3);
class r0 extends s.Ay.Store {
    getDraft(e) {
        let t = rQ.get(e);
        return null != t ? t : (rY()[e] ?? "");
    }
}
let r1 = new r0(lj.h, {
    LOGOUT: function () {
        return (rQ.clear(), rZ.cancel(), tB.w.remove(rX), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rQ.set(t, n), rZ(), "" === n && rZ.flush(), !1);
    },
});
function r2(e) {
    return "" !== r1.getDraft(e).trim();
}
var r3 = n(29080),
    r7 = n(46054);
function r5(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, lk.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, lk.Lf)(r) }),
    };
}
var r6 = n(520521),
    r4 = n(216306),
    r8 = n(60160),
    r9 = n(16634),
    ae = n(651438);
function at(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, lk.SY)(n.steps),
        d = u ? (0, ae.Q)(n) : (0, r4.R)(o),
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
                                    className: lz.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            r9.A,
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
                                      className: lz.iq,
                                      children: (0, a.jsx)(r8.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lS.A, {
        glyph: (0, a.jsx)(lE.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, r4.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lz.nC,
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
var an = n(998445),
    al = n(643210),
    ar = n(648127),
    aa = n(372795),
    ai = n(163897);
let as = "conjure-browser-viewer";
function ao(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, s.yK)(
            [al.A],
            () =>
                n.flatMap((e) => {
                    let n = al.A.getTab(t, e);
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
        className: ai.kR,
        "aria-label": N.intl.string(A.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(au, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function au(e) {
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
        u = (0, tv.useHasModalOpen)(as),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, ar.i)(l.session);
    return (0, a.jsxs)(ef.D, {
        innerRef: s,
        className: W()(ai.Nr, f && ai.Xj),
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
                    { modalKey: as },
                )
            );
        },
        "aria-label": N.intl.formatToPlainString(A.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: ai.Gt,
                children: [
                    (0, a.jsx)(aa.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: ai.Ji,
                        "aria-label": N.intl.formatToPlainString(A.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: ai.qf,
                              children: (0, a.jsx)(an.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: ai.HS,
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
                className: ai.pG,
                children: [
                    (0, a.jsx)("span", { className: W()(ai.W9, f && ai.oM) }),
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
var ac = n(268409);
let ad = new WeakMap(),
    am = new WeakMap();
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
                    let t = ad.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = am.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), am.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (ad.set(e, n), n);
                })(eZ.A.getMessages(t));
                return o.filter((t) => e.get(t) === n);
            },
            [o, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: ac.h, children: (0, a.jsx)(ao, { projectId: t, sessionIds: u }) });
}
var ah = n(469393);
function ag(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, nI.lG)(t.authored_at);
    return (0, a.jsx)(l_, {
        title: N.intl.string(A.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ah.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ah.z,
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
let ap = {
    [nP.q7.APP_CHANNEL]: A.default.zrk93C,
    [nP.q7.VOICE_CHANNEL]: A.default.r5Ra0p,
    [nP.q7.ACTIVITY]: N.t.IC5Ann,
    [nP.q7.OVERLAY]: A.default.liTNf3,
    [nP.q7.PROFILE_WIDGET]: A.default["EswAi+"],
    [nP.q7.AUTOMOD]: A.default.DnWMLj,
    [nP.q7.BOT]: A.default.VFWfz1,
    [nP.q7.APPLICATION_COMMANDS]: A.default.w7JaEP,
};
function ax(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let av = {
        [nP.q7.APP_CHANNEL]: A.default["3/aHX6"],
        [nP.q7.VOICE_CHANNEL]: A.default["3/aHX6"],
        [nP.q7.ACTIVITY]: A.default["3/aHX6"],
        [nP.q7.OVERLAY]: A.default["rPpf5/"],
        [nP.q7.PROFILE_WIDGET]: null,
        [nP.q7.AUTOMOD]: null,
        [nP.q7.BOT]: null,
        [nP.q7.APPLICATION_COMMANDS]: null,
    },
    aj = [nP.q7.OVERLAY, nP.q7.ACTIVITY, nP.q7.APP_CHANNEL, nP.q7.VOICE_CHANNEL];
function ab(e) {
    return aj.find((t) => ax(e, t)) ?? null;
}
function ay(e) {
    return "launch" === e.kind || 4 === e.type ? "\u21EA /" : 2 === e.type || 3 === e.type ? "" : "/";
}
var aw = n(155718);
let ak = ["command", "user_command", "message_command", "message"],
    aA = new Set([aw.kc.CHAT, aw.kc.USER, aw.kc.MESSAGE]);
function aN(e) {
    return e.type ?? aw.kc.CHAT;
}
function aC(e) {
    return "launch" !== e.kind && aA.has(aN(e));
}
function aS(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aE(e, t) {
    let n = ak.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !aS(e)), ...n.filter(aS)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || aS(r) || l.push(r);
    }
    return ak.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let aI = {
        [nP.q7.APP_CHANNEL]: A.default.NBUCvF,
        [nP.q7.VOICE_CHANNEL]: A.default.vrwvp8,
        [nP.q7.ACTIVITY]: A.default.oMJF0T,
        [nP.q7.OVERLAY]: A.default.u06zRd,
        [nP.q7.PROFILE_WIDGET]: A.default.NZrNII,
        [nP.q7.AUTOMOD]: A.default["bu0/4I"],
        [nP.q7.BOT]: A.default.Crinff,
        [nP.q7.APPLICATION_COMMANDS]: A.default.M3ty0r,
    },
    a_ = [
        nP.q7.APP_CHANNEL,
        nP.q7.ACTIVITY,
        nP.q7.OVERLAY,
        nP.q7.VOICE_CHANNEL,
        nP.q7.PROFILE_WIDGET,
        nP.q7.AUTOMOD,
        nP.q7.BOT,
        nP.q7.APPLICATION_COMMANDS,
    ];
var aM = n(176999),
    aT = (((l = {}).IMAGE = "image"), l),
    aP = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aR = n(773669);
let aL = [],
    a$ = {};
function aO(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aD(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aT.IMAGE,
        visibility: aP.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aq = n(127258),
    aF = n(587895),
    az = n(320095),
    aG = n(963852),
    aU = n(95701),
    aB = n(889227);
let aH = new aU.nA({ id: "1337", guild_id: "1337", type: eK.rbe.GUILD_TEXT, name: "preview" });
function aV(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, s.bG)([eY.default], () => eY.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e0.nj)(new aB.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aK = /^@\S+/;
var aW = n(231483),
    aJ = n(628284),
    aX = n(97808),
    aY = n(778712),
    aQ = n(809115),
    aZ = n(486020),
    a0 = n(200700);
let a1 = {
        alert: { label: () => N.intl.string(A.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => N.intl.string(A.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => N.intl.string(A.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => N.intl.string(A.default.RGzFNK), blockedStyle: !1 },
    },
    a2 = {
        blocked: { label: () => N.intl.string(A.default.YdnZ8q), tone: "red" },
        alert: { label: () => N.intl.string(A.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => N.intl.string(A.default.RGzFNK), tone: "green" },
    },
    a3 = ["blocked", "alert", "allowed"],
    a7 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var a5 = n(984097),
    a6 = n(13673);
let a4 = { blocked: aW.ShieldIcon, alert: e5.BellIcon, allowed: aJ.y },
    a8 = {
        blurple: { text: "text-brand", icon: er.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: er.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: er.A.colors.TEXT_FEEDBACK_POSITIVE },
    };
function a9(e) {
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
                              null != (l = (0, a0.getFriendlyDurationString)(n))
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
function ie(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = a1[n.outcome];
    return (0, a.jsxs)("li", {
        className: W()(a5.nM, { [W()(a5.HV, a6.DX)]: r }),
        children: [
            (0, a.jsx)(eB.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: a5.my,
                children: (0, a.jsx)(aX.eu, {
                    src: (0, aZ.AE)(void 0, void 0),
                    size: aY._3.SIZE_24,
                    "aria-label": N.intl.string(A.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: a5.fw,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), r7.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    (0, a.jsx)(a9, { example: n }),
                ],
            }),
        ],
    });
}
function it(e) {
    let { group: t } = e,
        n = i.useId(),
        l = a2[t.section],
        r = a4[t.section],
        s = a8[l.tone];
    return (0, a.jsxs)("div", {
        className: a5.uW,
        children: [
            (0, a.jsxs)("div", {
                className: a5.bV,
                children: [
                    (0, a.jsx)(r, { size: "xs", color: s.icon, "aria-hidden": !0 }),
                    (0, a.jsx)(Y.E, {
                        id: n,
                        variant: "text-xs/semibold",
                        color: s.text,
                        className: a5.a9,
                        children: l.label(),
                    }),
                ],
            }),
            (0, a.jsx)("ul", {
                className: a5.Ge,
                "aria-labelledby": n,
                children: t.examples.map((e, t) => (0, a.jsx)(ie, { example: e }, t)),
            }),
        ],
    });
}
function il() {
    let { avatarSrc: e, eventHandlers: t } = (0, aQ.a)(!0);
    return (0, a.jsx)("span", {
        className: a5.Gy,
        ...t,
        children: (0, a.jsx)(aX.eu, { src: e, size: aY._3.SIZE_16, "aria-label": N.intl.string(N.t.hG1StD) }),
    });
}
function ir(e) {
    var t;
    let { automod: n } = e;
    return (0, a.jsx)("div", {
        className: a5.K1,
        children: ((t = n.examples),
        a3
            .map((e) => ({ section: e, examples: t.filter((t) => a7[t.outcome] === e) }))
            .filter((e) => e.examples.length > 0)).map((e) => (0, a.jsx)(it, { group: e }, e.section)),
    });
}
var ia = n(460905),
    ii = n(110384),
    is = n(763754),
    io = n(217424),
    iu = n(194085),
    ic = n(20851),
    id = n(692508),
    im = n(798819);
function ih(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: W()(im.item, im.labelContainer, im.colorDefault, {
            [im.focused]: !0 === t.highlighted,
            [im.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: im.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: im.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: W()(im.label, id.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: im.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: im.icon }),
                  })
                : null,
        ],
    });
}
function ig(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: W()(t, id.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: N.intl.string(N.t["5IEsGx"]), icon: ii.W, muted: !0 }
                : { label: N.intl.string(N.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: W()(im.menu, id.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: im.scroller,
            children: [
                (0, a.jsx)(ih, { item: s }),
                (0, a.jsx)("div", { className: im.separator }),
                (0, a.jsx)(ih, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var ip = n(381941);
function ix() {}
function iv(e) {
    let t,
        n,
        l,
        r,
        o,
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
        } = ((t = (0, s.bG)([eY.default], () => eY.default.getCurrentUser())),
        (n = (0, s.bG)([U.Ay], () => U.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, s.bG)([aF.A], () => aF.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (o = n?.name ?? N.intl.string(A.default.JEYq8M)),
        (u = (0, s.bG)([eY.default], () => (null != l ? eY.default.getUser(l) : void 0), [l])),
        (d = aV("31337", o, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = aV("31338", N.intl.string(A.default["9iAOsw"]), { discriminator: "0003" })),
        (h = aV("31339", (0, eQ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, az.rh)({
                                          ...(0, aG.Ay)({
                                              channelId: aH.id,
                                              content: e,
                                              author: t,
                                              type: l ?? eK.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: eK.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: aq.G.APPLICATION_COMMAND,
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
                                              messageType: eK.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: eK.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(aK, `<@${i.id}>`)), s),
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
                                  targetMessage: N.intl.string(A.default["y+QYes"]),
                                  memberMessage: N.intl.string(A.default.BUTRDc),
                              },
                          ),
                [p, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    return 0 === x.length
        ? null
        : (0, a.jsx)("ol", {
              className: W()(id.TE, `group-spacing-${ip.ES}`),
              children: x.map((e) => {
                  let { key: t, record: n, isCommandReply: l, menu: r } = e;
                  return (0, a.jsxs)(
                      "li",
                      {
                          className: null != r ? id.Rz : void 0,
                          children: [
                              (0, a.jsx)(ic.A, {
                                  message: n,
                                  channel: aH,
                                  author: (0, is.FT)(n.author, aH),
                                  isGroupStart: !0,
                                  avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                  childrenExecutedCommand: l ? (0, a.jsx)(io.A, { message: n, channel: aH }) : void 0,
                                  usernameClassName: r?.target === "user" ? id.Ct : void 0,
                                  disableInteraction: !0,
                              }),
                              r?.target === "message"
                                  ? (0, a.jsx)("div", {
                                        className: id.S3,
                                        inert: !0,
                                        "aria-hidden": !0,
                                        children: (0, a.jsxs)(iu.Ay, {
                                            children: [
                                                (0, a.jsx)(iu.qv, {
                                                    label: N.intl.string(N.t.lfIHs4),
                                                    icon: ia.n,
                                                    onClick: ix,
                                                }),
                                                (0, a.jsx)(iu.qv, {
                                                    label: N.intl.string(N.t["5IEsGx"]),
                                                    icon: ii.W,
                                                    onClick: ix,
                                                }),
                                                (0, a.jsx)(iu.qv, {
                                                    label: N.intl.string(N.t["UKOtz+"]),
                                                    icon: tl.MoreHorizontalIcon,
                                                    selected: !0,
                                                    onClick: ix,
                                                }),
                                            ],
                                        }),
                                    })
                                  : null,
                              null != r
                                  ? (0, a.jsx)("div", {
                                        className: "user" === r.target ? id.ET : id.je,
                                        inert: !0,
                                        children: (0, a.jsx)(ig, {
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
var ij = n(377941),
    ib = n.n(ij),
    iy = n(332173);
function iw(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iy.A, { children: ["/", t] });
}
function ik(e) {
    let { text: t, commandNames: n } = e,
        l = i.useMemo(() => {
            if (0 === n.length) return null;
            let e = [...n].sort((e, t) => t.length - e.length).map(ib());
            return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${e.join("|")})(?![\\w-])`, "gu");
        }, [n]);
    if (null == l) return t;
    let r = [],
        s = 0;
    for (let e of t.matchAll(l)) {
        let n = (e.index ?? 0) + e[1].length;
        (n > s && r.push(t.slice(s, n)), r.push((0, a.jsx)(iw, { name: e[2] }, n)), (s = n + 1 + e[2].length));
    }
    return 0 === r.length ? t : (s < t.length && r.push(t.slice(s)), r);
}
n(827669);
var iA = n(323384),
    iN = n(983851),
    iC = n(794083),
    iS = n(687966),
    iE = n(26137),
    iI = n(430392),
    i_ = n(633018),
    iM = n(775602),
    iT = n(838815);
let iP = {
    [nP.q7.APP_CHANNEL]: iA.k,
    [nP.q7.VOICE_CHANNEL]: iN.H,
    [nP.q7.ACTIVITY]: iC.b,
    [nP.q7.OVERLAY]: iS.GameControllerIcon,
    [nP.q7.PROFILE_WIDGET]: iE.r,
    [nP.q7.AUTOMOD]: aW.ShieldIcon,
    [nP.q7.BOT]: iI.RobotIcon,
    [nP.q7.APPLICATION_COMMANDS]: i_.k,
};
function iR(e, t) {
    return null != e.preview ? (t[e.preview] ?? null) : null;
}
function iL(e) {
    let { preview: t, selected: n } = e;
    return (0, a.jsx)("span", {
        className: W()(iT.FF, { [iT.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)("span", { className: iT.j8, inert: !0, children: t.content }),
    });
}
function i$(e) {
    let { row: t } = e,
        n = iP[t.surface];
    return (0, a.jsx)("span", {
        className: iT.oL,
        "aria-hidden": !0,
        children: (0, a.jsx)(n, { size: "sm", color: "currentColor" }),
    });
}
function iO(e) {
    let { row: t, selected: n } = e,
        l = iP[t.surface];
    return (0, a.jsxs)("span", {
        className: iT.Nl,
        children: [
            (0, a.jsx)(l, { className: iT.gr, size: "xs", color: "currentColor", "aria-hidden": !0 }),
            (0, a.jsx)(Y.E, {
                variant: "text-sm/semibold",
                color: n ? "text-strong" : "text-default",
                tag: "span",
                lineClamp: 1,
                children: t.title,
            }),
        ],
    });
}
function iD(e) {
    let { names: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: iT.Ip,
              children: t.map((e) =>
                  (0, a.jsx)(
                      "span",
                      {
                          className: iT.jw,
                          children: (0, a.jsx)(Y.E, {
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
function iq(e) {
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
                let n = t.offsetHeight,
                    l = n > e.clientHeight ? e.clientHeight / n : 1;
                t.style.transform = l < 1 ? `scale(${l})` : "";
            }
            r();
            let a = new ResizeObserver(r);
            return (a.observe(e), a.observe(t), () => a.disconnect());
        }, []),
        (0, a.jsx)("div", {
            ref: n,
            className: iT.aM,
            children: (0, a.jsx)("div", { ref: l, className: iT.gp, children: t?.content }),
        })
    );
}
function iF(e) {
    let { row: t, previews: n, commandNames: l } = e,
        r = iR(t, n);
    return (0, a.jsxs)("div", {
        className: iT.J0,
        children: [
            (0, a.jsxs)("div", {
                className: iT.uy,
                children: [
                    (0, a.jsx)(i$, { row: t }),
                    (0, a.jsxs)("div", {
                        className: iT.Qq,
                        children: [
                            (0, a.jsx)(Y.E, { variant: "text-md/semibold", color: "text-strong", children: t.title }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                selectable: !0,
                                children: (0, a.jsx)(ik, { text: t.description, commandNames: l }),
                            }),
                            (0, a.jsx)(iD, { names: t.channelNames }),
                        ],
                    }),
                ],
            }),
            r?.content,
        ],
    });
}
function iz(e) {
    let { rows: t, previews: n, label: l, cycling: r, commandNames: o } = e,
        u = i.useId(),
        { selectedIndex: c, select: d } = (function (e, t) {
            let n = (0, s.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
                [l, r] = i.useState(0),
                [a, o] = i.useState(!1),
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
                        (o(!0), r(e));
                    }, []),
                }
            );
        })(t.length, r),
        m = t[c] ?? t[0];
    return (0, a.jsx)("div", {
        className: iT.xk,
        children: (0, a.jsxs)("div", {
            className: iT.QF,
            children: [
                (0, a.jsx)("div", {
                    role: "tablist",
                    "aria-orientation": "vertical",
                    "aria-label": l,
                    className: iT.C$,
                    children: t.map((e, t) => {
                        let l = t === c,
                            r = iR(e, n);
                        return (0, a.jsxs)(
                            ef.D,
                            {
                                role: "tab",
                                "aria-selected": l,
                                "aria-controls": u,
                                className: W()(iT.pc, { [iT.EV]: l }),
                                onClick: () => d(t),
                                children: [
                                    null != r
                                        ? (0, a.jsx)(iL, { preview: r, selected: l })
                                        : (0, a.jsx)(i$, { row: e }),
                                    (0, a.jsxs)("span", {
                                        className: iT.b$,
                                        children: [
                                            (0, a.jsx)(iO, { row: e, selected: l }),
                                            (0, a.jsx)(Y.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                tag: "span",
                                                children: (0, a.jsx)(ik, { text: e.description, commandNames: o }),
                                            }),
                                            (0, a.jsx)(iD, { names: e.channelNames }),
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
                    className: iT.nd,
                    children: (0, a.jsx)(iq, { preview: iR(m, n) }),
                }),
            ],
        }),
    });
}
var iG = n(633075),
    iU = n(946356),
    iB = n(58216),
    iH = n(27399);
function iV(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        r = i.useMemo(() => new iG.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iH.H,
              children: (0, a.jsx)(iU.A.Overlay, {
                  className: iH.w,
                  children: (0, a.jsx)(iB.A, {
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
var iK = n(443863);
function iW(e) {
    let { label: t, icon: n, children: l } = e;
    return (0, a.jsxs)("section", {
        className: iK.uW,
        children: [
            (0, a.jsxs)("span", {
                className: iK.a9,
                children: [
                    n,
                    (0, a.jsx)(Y.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                ],
            }),
            l,
        ],
    });
}
function iJ(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(iW, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: iK.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: iK.jw,
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
function iX(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = rC(t, r),
        c = i.useCallback(() => {
            (0, g.PK)(t, r).then(
                (e) => {
                    (0, rc.R)({
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
        : (0, a.jsx)(ef.D, {
              className: iK.xX,
              onClick: c,
              "aria-label": N.intl.string(A.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: iK.sN, onError: u }) : null,
          });
}
function iY(e) {
    let t,
        n,
        l,
        r,
        o,
        u,
        { projectId: c, proposal: d, version: m, onApprove: f } = e,
        h = ax(d, nP.q7.AUTOMOD) ? d.automod : null,
        { botExchanges: p } =
            ((t = ax(d, nP.q7.APPLICATION_COMMANDS)),
            (n =
                ax(d, nP.q7.BOT) || t
                    ? null != d.bot
                        ? d.bot.interaction
                        : t && d.commands.some(aC)
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
                              let s = e.commands.filter(aC).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (aN(e)) {
                                              case aw.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case aw.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(aS),
                                  u = a.length > 0 ? aE([...a, ...o], !0) : aE("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(d, n, {
                              message: N.intl.string(A.default.J7qggf),
                              reply: N.intl.string(A.default.nqYtiy),
                              event: N.intl.string(A.default["05lU9W"]),
                          }),
                [d, n],
            )),
            { botInteraction: n, botExchanges: l }),
        x = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, s.bG)([aR.default], () => aR.default.locale),
                a = (0, s.bG)([U.Ay], () => {
                    let t = U.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                o = (function (e, t) {
                    let [n, l] = i.useState(a$);
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
                                  let a = aM.uW.safeParse(r);
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
                                                                    type: aM.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aM.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aM.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aD),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aL,
                                            },
                                        };
                              })(n, l, o, r),
                    [n, l, o, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(c, d),
        v = ax(d, nP.q7.PROFILE_WIDGET) ? x : null,
        j = m?.superseded === !0,
        b = d.what_changed?.trim() ?? "",
        y = i.useMemo(
            () =>
                d.commands
                    .filter((e) => "/" === ay(e))
                    .map((e) => {
                        let { name: t } = e;
                        return t;
                    }),
            [d.commands],
        ),
        w = {};
    (null != h &&
        h.examples.length > 0 &&
        (w.automod = {
            label: N.intl.string(A.default.z4ZKYG),
            icon: (0, a.jsx)(il, {}),
            content: (0, a.jsx)(ir, { automod: h }),
        }),
        null != d.design_image &&
            (w.design = {
                label: N.intl.string(A.default.X15LLY),
                content: (0, a.jsx)(iX, {
                    projectId: c,
                    design: d.design_image,
                    alt: N.intl.string(null == (r = ab(d)) ? A.default["3/aHX6"] : av[r]),
                }),
            }),
        p.length > 0 &&
            (w.bot = {
                label: N.intl.string(A.default.sA1lTv),
                content: (0, a.jsx)(iv, { projectId: c, exchanges: p }),
            }),
        null != v && (w.widget = { label: N.intl.string(A.default.ove4zH), content: (0, a.jsx)(iV, { ...v }) }));
    let k = Object.keys(w),
        C =
            ((o = ax(d, nP.q7.BOT)),
            (u = d.commands.filter(aC).length),
            a_
                .filter((e) => ax(d, e) && !(o && e === nP.q7.APPLICATION_COMMANDS))
                .map((e) => {
                    let t = e === nP.q7.APP_CHANNEL ? (d.app_channel_names ?? []) : [],
                        n = t.length > 1,
                        l = e === nP.q7.BOT && u > 0 && ax(d, nP.q7.APPLICATION_COMMANDS),
                        r = N.intl.string(ap[e]),
                        a = N.intl.string(aI[e]);
                    return (
                        n
                            ? ((r = N.intl.formatToPlainString(A.default["75EkE8"], { count: t.length })),
                              (a = N.intl.string(A.default.OMNwmi)))
                            : l && (a = N.intl.formatToPlainString(A.default.Xa5mPA, { count: u })),
                        {
                            surface: e,
                            title: r,
                            description: a,
                            channelNames: t,
                            preview:
                                k.find(
                                    (t) =>
                                        (function (e, t) {
                                            switch (t) {
                                                case "design":
                                                    return ab(e);
                                                case "widget":
                                                    return nP.q7.PROFILE_WIDGET;
                                                case "automod":
                                                    return nP.q7.AUTOMOD;
                                                case "bot":
                                                    return ax(e, nP.q7.BOT) ? nP.q7.BOT : nP.q7.APPLICATION_COMMANDS;
                                            }
                                        })(d, t) === e,
                                ) ?? null,
                        }
                    );
                })),
        S = k.filter((e) => !C.some((t) => t.preview === e));
    return (0, a.jsxs)(lP, {
        title:
            j && null != m
                ? N.intl.formatToPlainString(A.default.YZ3qJs, { version: m.version })
                : N.intl.string(A.default["3b6e7o"]),
        meta: j ? (0, a.jsx)(lT, { children: N.intl.string(A.default.hF2c41) }) : null,
        superseded: j,
        showLabel: N.intl.string(A.default.yD8EJS),
        hideLabel: N.intl.string(A.default.nSPGNb),
        className: C.length > 1 ? iK.WG : void 0,
        bodyClassName: iK.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== b
                ? (0, a.jsx)(iW, {
                      label: N.intl.string(A.default.iNS4dl),
                      children: (0, a.jsx)(Y.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: (0, a.jsx)(ik, { text: b, commandNames: y }),
                      }),
                  })
                : null,
            (0, a.jsx)(Y.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: (0, a.jsx)(ik, { text: d.summary, commandNames: y }),
            }),
            C.length > 0
                ? (0, a.jsx)(iW, {
                      label: N.intl.string(A.default.mrMYrN),
                      children:
                          1 === C.length
                              ? (0, a.jsx)(iF, { row: C[0], previews: w, commandNames: y })
                              : (0, a.jsx)(iz, {
                                    rows: C,
                                    previews: w,
                                    label: N.intl.string(A.default.mrMYrN),
                                    cycling: !j,
                                    commandNames: y,
                                }),
                  })
                : null,
            S.map((e) => {
                let t = w[e];
                return null == t ? null : (0, a.jsx)(iW, { label: t.label, icon: t.icon, children: t.content }, e);
            }),
            d.changes.length > 0
                ? (0, a.jsx)(iW, {
                      label: N.intl.string(A.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: iK.p_,
                          children: d.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: iK.Aw,
                                      children: (0, a.jsx)(Y.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: (0, a.jsx)(ik, { text: e, commandNames: y }),
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            d.commands.length > 0
                ? (0, a.jsx)(iW, {
                      label: N.intl.string(N.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: iK.p_,
                          children: d.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: iK.uX,
                                      children: [
                                          (0, a.jsx)(Y.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children:
                                                  "/" === ay(e)
                                                      ? (0, a.jsx)(iw, { name: e.name })
                                                      : `${ay(e)}${e.name}`,
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
            (0, a.jsx)(iJ, { label: N.intl.string(A.default["2UbW6r"]), names: d.bot_permissions ?? [] }),
            (0, a.jsx)(iJ, { label: N.intl.string(A.default["7TKfpj"]), names: d.privileged_intents ?? [] }),
            null == f || j
                ? null
                : (0, a.jsxs)("div", {
                      className: iK.o1,
                      children: [
                          (0, a.jsx)(ee.$, {
                              variant: "primary",
                              size: "sm",
                              text: N.intl.string(A.default["6S+wRM"]),
                              onClick: f,
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
function iQ(e) {
    return null != e && e.status?.state === "unpublished";
}
let iZ = new WeakMap();
function i0(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, s.bG)([m.A], () => (null == n ? null : m.A.getGuild(n)));
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
function i1(e) {
    let { projectId: t } = e,
        n = (0, td.Ay)(t);
    return null != n && iQ(n) ? (0, a.jsx)(i0, { publish: n }) : null;
}
var i2 = n(989271);
function i3(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(ef.D, {
        className: W()(i2.nM, { [i2.f1]: s, [i2.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": N.intl.formatToPlainString(A.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: i2.jo,
                children: [
                    n
                        ? (0, a.jsx)(t4.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: i2.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Y.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: i2.G9,
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
function i7(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(l_, {
        title: N.intl.string(A.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                i3,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
function i5(e) {
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
var i6 = n(530557),
    i4 = n(872162);
function i8(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var i9 = n(202723);
function se(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tv.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: i6.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => i8(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(i8(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = W()(i9.Lo, { [i9.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
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
                    className: m,
                    children: [
                        (0, a.jsx)(Y.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: N.intl.string(A.default.HCQvpO),
                        }),
                        (0, a.jsx)(i4.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: i9.Lo,
                      children: (0, a.jsx)(i4.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
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
                                className: i9.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: i9.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(aJ.y, {
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
                            (0, a.jsx)(i4.C, { label: N.intl.string(A.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: i9.Lo,
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
                        (0, a.jsx)(i4.C, { label: N.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: i9.sq,
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
var st = n(919790),
    sn = n(971824),
    sl = n(162052),
    sr = n(165648);
function sa(e) {
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
        x = i.useMemo(() => (0, lk.Jf)(n, l), [n, l]),
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
            className: lz.pj,
            "data-live": !1,
            children: (0, a.jsx)(lS.A, {
                glyph: (0, a.jsx)(r3.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: N.intl.string(A.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, lk.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = (0, r6.n)(w.map((e) => e.taskId)),
        C = !g && (l || w.some((e) => "running" === e.task.status)),
        S = (0, ae.k)(w);
    return (0, a.jsxs)("ol", {
        className: lz.pj,
        "data-live": C,
        children: [
            (0, a.jsx)(lN.Ay, {
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
                let l = null != e.task.helperMark ? (0, r6.p)(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          at,
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
            (0, a.jsx)(af, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: lz.YO,
                      children: (0, a.jsx)(lq, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function si(e) {
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
            onRestoreProposal: C,
        } = e,
        S = i.useMemo(
            () => r5({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: _, closingContent: M } = S,
        T = (y ? w : void 0) ?? S.attachmentsHost,
        P = _ && !y,
        R = null == u ? null : (0, a.jsx)(st.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: lz.MT, children: R }),
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
        className: lz.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: lz.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lz.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: sr.PT,
                                          children: r7.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(iY, { projectId: t, proposal: r, version: s, onApprove: v })
                : P
                  ? (0, a.jsxs)("div", {
                        className: W()(lz.ky, sl.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: W()(sr.PT, lz.cW),
                                children: r7.A.parse(M, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: W()(lz.ky, sl.XR, { [sn.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(se, {
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
                      className: W()(lz.ky, sl.XR),
                      children: (0, a.jsx)(rH, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != g ? (0, a.jsx)(i1, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(i7, { ideas: o, pickedIdeaIds: x, onPick: p }) : null,
            null != k ? (0, a.jsx)(ag, { proposal: k, onRestore: C }) : null,
            P ? null : $,
        ],
    });
}
var ss = n(146806),
    so = n(477262),
    su = n(432017),
    sc = n(475358),
    sd = n(717400),
    sm = n(663341),
    sf = n(559647),
    sh = n(234320),
    sg = n(285796),
    sp = n(922329);
async function sx(e) {
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
var sv = n(153171);
function sj(e, t, n, l) {
    let r = rp(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: rf++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (rx(e, t, [
            ...rp(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void rv(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    rv(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  rv(e, t, n.localId, { status: "error", errorText: N.intl.string(A.default.E7dS5n) }),
                              h.o2 - 3e5,
                          )
                        : rj(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        rv(e, t, n.localId, { status: "error", errorText: N.intl.string(A.default["kUw/b1"]) }));
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
                              let n = await sx(e).catch(() => null);
                              return null != n && (0, h.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: rw(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: rw(t) } };
            let a = h.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function sb(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = rh.useState((e) => rg(e, t, n)),
        a = i.useCallback((e) => sj(t, n, e, l), [t, n, l]),
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
                null != (r = (l = rp(t, n)).find((t) => t.localId === e)) &&
                    (rb(t, r),
                    rx(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => rA(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function sy(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(sp.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: sv.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: sv.o1,
                onClick: () => n(t.localId),
                "aria-label": N.intl.string(A.default.Slam9g),
                children: (0, a.jsx)(sg.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var sw = n(497437);
let sk = [
        {
            id: "add-images-videos",
            label: A.default["51+9lc"],
            icon: so.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: A.default["10ljr2"],
            icon: su.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: A.default.aotDee, icon: eu.H, accept: "" },
    ],
    sA = "text-md/normal",
    sN = null;
function sC(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, o] = i.useState(t),
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
                frontFrom: 1e3 * (0, ss._R)(m),
                frontTo: 1e3 * (0, ss._R)(h),
                backFrom: 1e3 * (0, ss.T)(m),
                backTo: 1e3 * (0, ss.T)(h),
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
    let C = "in" === b ? p.backFrom : p.frontFrom,
        S = "out" === b ? p.frontTo : p.backTo,
        E = (0, s.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
        I = t === N.intl.string(A.default.Zc7gML),
        _ = r === t && I;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: W()(sw.VT, { [sw.qk]: l }),
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
            children: (0, a.jsx)(sc.e, { shortcut: "tab", className: sw.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eb.o, {
                text: t,
                variant: sA,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: W()(sw.xM, { [sw.s2]: l }),
                onStart: k,
                onComplete: () => o(t),
            }),
            M(sw.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: sw.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Y.E, { variant: sA, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: sw.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Y.E, { variant: sA, tag: "span", className: sw.xM, children: t }),
                          M(sw.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sS = i.memo(function (e) {
        let {
                projectId: t,
                canSend: n,
                running: l,
                restoring: r = !1,
                onSend: o,
                onInterrupt: u,
                onUploadFile: c,
                onApprove: d,
                onImport: m,
                suggestion: f,
                questionOpen: h = !1,
                hasPendingContext: g = !1,
                onDraftHasTextChange: p,
                modelSettings: x,
                onModelSettingsChange: v,
            } = e,
            [j, b] = i.useState(() => r1.getDraft(t)),
            y = i.useCallback(
                (e) => {
                    (lj.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), b(e));
                },
                [t],
            ),
            w = "" !== j.trim();
        i.useEffect(() => p?.(w), [w, p]);
        let [k, C] = i.useState(t);
        k !== t && (C(t), b(r1.getDraft(t)));
        let S = (0, s.bG)([iM.Ay], () => iM.Ay.isSubmitButtonEnabled),
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
            } = sb({ projectId: t, surface: "chat", onUploadFile: c }),
            O = "" !== j.trim() || M.length > 0 || g,
            D = n && O && L,
            [q, F] = i.useState(null);
        i.useEffect(() => {
            if (null == q) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => F(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [q]);
        let z = i.useCallback(() => {
                if (!D) return;
                let e = $();
                o(j, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == sN && (sN = document.createElement("canvas").getContext("2d"));
                    let i = sN;
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
                })(W.current?.querySelector("textarea") ?? null, er.current, j);
                ("" !== t && F(t), y(""));
            }, [D, j, o, $, y]),
            G = i.useCallback(
                (e) => {
                    (e.preventDefault(), z());
                },
                [z],
            ),
            U = i.useCallback(() => {
                null == u || E || (I(!0), u());
            }, [u, E]),
            B = null == f || "" !== j || !n || r || g ? null : f,
            H = i.useCallback(
                (e) => {
                    if ("Escape" === e.key && l && null != u && !E) {
                        (e.preventDefault(), e.stopPropagation(), U());
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
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), z());
                },
                [z, d, l, u, E, U, B, y],
            ),
            V = i.useCallback(
                (e) => {
                    n && P(e);
                },
                [n, P],
            );
        (0, sh.Vo)({
            event: eK.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return V(t);
            },
        });
        let K = i.useCallback(
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
                let t = s_(e);
                null != t && Q(t);
            }
            ee(!0);
            let t = setTimeout(() => ee(!1), sE);
            return () => clearTimeout(t);
        }, [j]);
        let et = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            en = Z ? ` ${sw.EB}` : "",
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
            em = q ?? B ?? el,
            ef = "" === j && "" !== em;
        return (0, a.jsxs)("form", {
            onSubmit: G,
            className: sw.DA,
            children: [
                M.length > 0
                    ? (0, a.jsx)("div", {
                          className: sw.lN,
                          children: M.map((e) => (0, a.jsx)(sy, { draft: e, onRemove: R }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sw.wg} ${sw.LP}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sw.wg} ${sw.L3}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sw.VA,
                    ref: W,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: K,
                            className: sw.nY,
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
                                            sk.map((e) =>
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
                                            null != m
                                                ? (0, a.jsx)(eo.Dr, {
                                                      id: "import-project",
                                                      label: N.intl.string(A.default["p/k5i7"]),
                                                      iconLeft: sd.q,
                                                      leadingAccessory: { type: "icon", icon: sd.q },
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
                                    ref: J,
                                    type: "button",
                                    className: `${sw.Y0} ${sw.nu}`,
                                    disabled: !n,
                                    "aria-label": N.intl.string(N.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(sm.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: sw.Qu,
                                    }),
                                });
                            },
                        }),
                        ef
                            ? (0, a.jsx)("div", {
                                  ref: eu,
                                  className: sw.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(sC, { text: em, offering: ed && null == q, typed: null != q }),
                              })
                            : null,
                        (0, a.jsx)(lV.y, {
                            value: j,
                            onChange: (e) => y(e.currentTarget.value),
                            onKeyDown: H,
                            onPaste: V,
                            placeholder: ef ? "" : el,
                            disabled: !n,
                            "aria-label": N.intl.string(A.default.ldNl9x),
                            "aria-describedby": ef ? ec : void 0,
                            rows: 1,
                            className: sw.jp,
                        }),
                        ef ? (0, a.jsx)(eB.A, { id: ec, children: el }) : null,
                        (0, a.jsx)("div", {
                            className: sw.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eP.m, {
                                          text: N.intl.string(A.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${sw.Y0} ${sw.$E}`,
                                              disabled: E,
                                              onClick: U,
                                              "aria-label": N.intl.string(A.default.wiguT0),
                                              children: (0, a.jsx)(r3.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : x?.tierSettings != null && null != v
                                      ? (0, a.jsx)(eU, {
                                            settings: x.tierSettings,
                                            tiers: x.tiers,
                                            choices: x.choices,
                                            disabled: !n,
                                            onChange: v,
                                            className: `${sw.Y0} ${sw.$E}`,
                                            icon: (0, a.jsx)(eR.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        S
                            ? (0, a.jsxs)("div", {
                                  className: sw.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sw.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sw.rt,
                                          disabled: !D,
                                          "aria-label": N.intl.string(A.default.rxW2cl),
                                          children: (0, a.jsx)(sf.SendMessageIcon, {
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
    sE = 1500,
    sI = [
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
function s_(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = s_.mirror;
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
                (s_.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of sI) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
s_.mirror = null;
var sM = n(148087);
let sT = [6e4, 18e4, 6e5],
    sP = [
        {
            key: "outdated",
            priority: 2,
            idleDelayMs: 6e4,
            backoffDelaysMs: sT,
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
                    (0, nT.BL)(t) &&
                    !(null != n.publishCta && iQ(l))
                );
            },
        },
    ];
function sR(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if ("publish_notice" !== n.kind && "project_event" !== n.kind && "context_boundary" !== n.kind) {
            if ("user" === n.role) return null;
            if ((0, nT.BL)(n)) return n;
            if (!(0, nT.B0)(e, t)) break;
        }
    }
    return null;
}
function sL(e) {
    return (
        null != e.awaitingUser ||
        null != e.secretRequest ||
        null != e.settingsRequest ||
        (e.intake?.questions.length ?? 0) > 0
    );
}
function s$(e, t) {
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
let sO = new Map();
function sD(e) {
    return (0, s.bG)([U.Ay, aF.A], () => {
        let t = U.Ay.getProject(e);
        return null == t ? "" : (aF.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
function sq(e) {
    let { projectId: t, notice: n } = e;
    return "outdated" === n ? (0, a.jsx)(sz, { projectId: t }) : (0, a.jsx)(sF, { projectId: t, notice: n });
}
function sF(e) {
    let { projectId: t, notice: n } = e,
        l = sD(t),
        r = (0, s.bG)([U.Ay, m.A], () => {
            let e = U.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (m.A.getGuild(e.guild_id)?.name ?? null);
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
function sz(e) {
    let { projectId: t } = e,
        n = (0, td.Ay)(t),
        [l, r] = i.useState(!1);
    return null == n
        ? null
        : l && (n.publishing || !n.isUpdate)
          ? (0, a.jsx)(sG, {})
          : (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: N.intl.format(A.default.X8tdbS, {
                    action: n.label,
                    onUpdate: () => {
                        (r(!0), sO.get(t)?.forEach((e) => e()), n.run("outdated_notice"));
                    },
                }),
            });
}
function sG() {
    let e = N.intl.string(A.default.lexcBN),
        t = (function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = (0, s.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
                [n, l] = i.useState(1);
            return (
                i.useEffect(() => {
                    if (t || e) return;
                    let n = setInterval(() => l((e) => (e % 3) + 1), 400);
                    return () => clearInterval(n);
                }, [t, e]),
                ".".repeat(t ? 3 : n)
            );
        })(!(0, sM.A)());
    return (0, a.jsxs)(Y.E, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: [e, (0, a.jsx)("span", { "aria-hidden": !0, children: t })],
    });
}
var sU = n(248798);
function sB(e, t) {
    e.style.height = `${t.offsetHeight}px`;
}
function sH(e) {
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
            sB(e, t);
            let n = new ResizeObserver(() => sB(e, t));
            return (n.observe(t), () => n.disconnect());
        }, [r, s]),
        (0, a.jsx)("div", {
            ref: o,
            className: W()(sU.NI, { [sU.Jg]: null == r }),
            "aria-live": "polite",
            children: (0, a.jsx)("div", {
                className: sU.t$,
                children: l.map((e) =>
                    (0, a.jsx)(
                        "div",
                        {
                            ref: e.leaving ? void 0 : u,
                            "aria-hidden": e.leaving || void 0,
                            "data-conjure-entrance": !0,
                            className: W()(sU.qd, e.leaving ? sU.cu : sU.We),
                            children: n(e.key),
                        },
                        e.key,
                    ),
                ),
            }),
        })
    );
}
var sV = n(986109);
let sK = i.createContext(null);
function sW(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(sK),
        [d, m] = i.useState(() => iM.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: W()(sV.xk, { [sV.g5]: d, [sV.Qo]: s, [sV.q3]: o }),
        children: n,
    });
}
let sJ = "conjureTipDismissals",
    sX = new Set(),
    sY = new Set(),
    sQ = 0;
function sZ() {
    let e = tB.w.get(sJ);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function s0(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return sX.has(((n = e.id), `${t}:${n}`));
        case "app":
            return sZ().app[t]?.includes(e.id) === !0;
        case "forever":
            return sZ().forever.includes(e.id);
    }
}
function s1(e) {
    return (sY.add(e), () => sY.delete(e));
}
let s2 = [];
var s3 = n(292771);
function s7(e) {
    let { presentation: t, render: n } = e,
        l = (0, s.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
        [r, o] = i.useState([{ presentation: t, leaving: !1 }]),
        u = r.find((e) => !e.leaving)?.presentation;
    u !== t &&
        o([
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
            let e = setTimeout(() => o((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [h, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: s3.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: W()(s3.qd, e.leaving ? s3.dv : s3.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var s5 = n(817921);
function s6(e) {
    return 0 === s2.length ? null : (0, a.jsx)(s4, { ...e, tips: s2 });
}
function s4(e) {
    let t,
        n,
        l,
        { projectId: r, messages: s, draftHasText: o, tips: u } = e,
        c =
            ((t = (0, td.Ay)(r)),
            (l = null == (n = sR(s)) || sL(n) ? null : n),
            i.useMemo(() => ({ projectId: r, turn: l, publish: t, draftHasText: o }), [r, l, t, o]));
    i.useSyncExternalStore(s1, () => sQ);
    let { callout: d, hint: m } = (function (e, t, n) {
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
        })(u, c, (e) => s0(e, r)),
        f = [d, m].filter((e) => null != e);
    return 0 === f.length
        ? null
        : (0, a.jsx)(sW, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: s5.X,
                  children: f.map((e) => {
                      let { tip: t, presentation: n } = e;
                      return (0, a.jsx)(
                          s7,
                          {
                              presentation: n,
                              render: (e) =>
                                  t.render(e, {
                                      dismiss:
                                          null != t.dismissal
                                              ? () =>
                                                    (function (e, t) {
                                                        if (!(null == e.dismissal || s0(e, t))) {
                                                            if ("session" === e.dismissal) {
                                                                var n;
                                                                sX.add(((n = e.id), `${t}:${n}`));
                                                            } else {
                                                                let n = sZ();
                                                                tB.w.set(
                                                                    sJ,
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
                                                            (sQ++, sY.forEach((e) => e()));
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
var s8 = n(52133),
    s9 = n(732159),
    oe = n(888366),
    ot = n(862026),
    on = n(291192);
function ol(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ot.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: on.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: on.Sp,
                children: [
                    (0, a.jsx)("span", { className: on.q3 }),
                    (0, a.jsxs)("span", {
                        className: on.g8,
                        children: [
                            (0, a.jsx)(oe.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Y.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: on.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: on.nM,
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
                                                        void (0, tv.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(s9.u, {
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
var or = n(940874);
n(775443);
var oa = n(616e3),
    oi = n(155899),
    os = n(521981),
    oo = n(491182),
    ou = n(438729),
    oc = n(622868),
    od = n(448368),
    om = n(837528),
    of = n(470964),
    oh = n(715628),
    og = n(752636),
    op = n(9842),
    ox = n(589022),
    ov = n(967198),
    oj = n(531685);
let ob = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oy(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function ow(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function ok(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = ow(e, t),
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
    if (oy(r) && oy(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oy(ow(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oA(e, t) {
    let { streaming: n } = t,
        l = (0, s.bG)([iM.Ay], () => iM.Ay.useReducedMotion),
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
                      for (; a > 0 && ok(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && ob.has(e.charAt(l - 1));) l--;
                                    return ob.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && ok(t, o);) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && o({ target: e.target, length: l });
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
                o({ target: e, length: e.length });
            }
        }, [c]));
    let h = Math.min(u.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: r && h < e.length };
}
var oN = n(624479),
    oC = n(890377),
    oS = n(744898),
    oE = n(180227);
function oI(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: W()(oE.QE, { [oE.Rn]: t }),
              children: (0, a.jsx)(iu.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          iu.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function o_(e) {
    return ti.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: N.intl.string(N.t.JrGD7E), icon: oN.CopyIcon, onClick: () => (0, ti.C)(e) }]
        : [];
}
function oM(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: N.intl.string(A.default.CXtLD2),
                          tooltip: N.intl.string(A.default.DOb1HM),
                          icon: oC.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: N.intl.string(A.default.urZwpN),
                          icon: et.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oI, { groupStart: n, actions: [...r, ...o_(t)] });
}
function oT(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: N.intl.string(A.default.H8Jfhu), icon: oS.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: t9.BugIcon, onClick: r }];
    return (0, a.jsx)(oI, { groupStart: n, actions: [...i, ...o_(t), ...s] });
}
let oP = (0, aU.createChannelRecord)({ id: "conjure-builder", type: eK.rbe.DM }),
    oR = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oL(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: W()(oE.Yq, { [oE.x1]: t }), children: e });
}
function o$(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function oO(e, t, n) {
    let { content: l } = (0, of.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: oP, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ou.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, oh.A)(r, l);
}
function oD(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        o = (0, om.m)(e, oP, t.usernameProfile, l),
        u = (0, om.Jo)(t.avatarProfile, l),
        c = (0, s.bG)([ov.A], () => ov.A.getGuildId()),
        d = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eY.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(ox.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
            },
            [d, c, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: u,
        onClickUsername: o,
        onPopoutRequestClose: r,
        renderPopout: m,
        guildId: c ?? void 0,
    };
}
function oq(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        o = i.useMemo(() => {
            let e = "" !== n.content ? (0, os.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oE.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: oE.Rj,
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
        d = (0, is.X4)(n),
        m = (0, is.X4)(t),
        f = oD(n);
    return (0, a.jsx)(od.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: oP,
        referencedMessage: { state: op.a.LOADED, message: n },
        content: o,
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
function oF(e) {
    let { message: t, author: n } = e,
        l = oD(t);
    return (0, a.jsx)(oc.Ay, {
        message: t,
        channel: oP,
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
function oz(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: o, onQueuedAction: u } = e;
    i.useEffect(() => e7(l), [l]);
    let c = (0, s.bG)(
            [eY.default],
            () => e3(l, null != l ? eY.default.getUser(l) : null, eY.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, is.FT)(c, null), [c]),
        m = i.useMemo(() => nv(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, aG.Ay)({ channelId: oP.id, content: f, author: c });
            return (0, az.rh)({ ...e, timestamp: o$(n, e.timestamp), state: eK.cmJ.SENT });
        }, [f, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(oG, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories: r,
              groupStart: o,
              onQueuedAction: u,
          });
}
function oG(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = oO(t, l);
    return (0, a.jsx)(oo.A, {
        className: oE.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(oF, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: oE.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oE.GV,
                              children: [
                                  (0, a.jsx)(t8.x, {
                                      className: oE.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oE.WO, children: u }),
                      ],
                  }),
        childrenAccessories: oL(i, "" !== l),
        childrenButtons: (0, a.jsx)(oM, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function oU(e) {
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
        { text: m, revealing: f } = oA(t, { streaming: (0, s.bG)([oj.A], () => c && oj.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, is.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, s.bG)(
            [eY.default],
            () => e3(p, null != p ? eY.default.getUser(p) : null, eY.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : nv(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aG.Ay)({ channelId: oP.id, content: v?.body ?? r.content, author: x });
            return (0, az.rh)({ ...e, id: r.id, timestamp: o$(r.createdAt, e.timestamp), state: eK.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oP.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aG.Ay)({ channelId: oP.id, content: "", author: oR })),
        w = i.useMemo(
            () =>
                (0, az.rh)({
                    ...y,
                    timestamp: o$(n, y.timestamp),
                    state: eK.cmJ.SENT,
                    ...(null != b ? { type: eK.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        A = i.useMemo(
            () => (0, og.A)({ message: w, channel: oP, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        N = oO(k, m, oE.OS);
    return (0, a.jsxs)("div", {
        className: oE.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oo.A, {
                className: oE.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oq, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: o }),
                childrenHeader: A,
                childrenMessageContent: N,
                childrenAccessories: oL(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: oE.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(iA.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function oB(e) {
    let { onSelect: t, onClose: n = eH.Z_, onRestoreVersion: l, onViewTrace: r } = e;
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
                          icon: oS.e,
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
function oH(e) {
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
        j = null != v && null != p ? () => oV(v, p) : void 0,
        b =
            ((t =
                nu() && "assistant" === x.role && (0, nT.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, s.bG)(
                [oa.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : oa.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((ni = { projectId: e, traceId: t }), [...na])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(sW, {
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
                          void (0, eH.jA)(t, (e) => (0, a.jsx)(oB, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(oU, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oT, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(si, {
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
                settingsRequest: n.active || m ? void 0 : x.settingsRequest,
                publishCta: n.active ? null : x.publishCta,
                onPickIdea: h,
                onApprovePlan: g,
                restoreProposal: k,
                onRestoreProposal:
                    null != k && null != p && f
                        ? () =>
                              oV(
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
function oV(e, t) {
    (0, oi.F)({ onConfirm: () => t(e) });
}
var oK = n(288539);
function oW(e, t, n) {
    return (0, a.jsx)(oK.A, { userId: e, content: `@${t}` }, n);
}
function oJ(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e7(l), [l]);
            let r = (0, s.bG)([eY.default], () => (null == l ? null : eY.default.getUser(l)), [l]),
                a = (0, eQ.tx)(r),
                o = sD(e),
                u =
                    (0, s.bG)([m.A], () => (null == t.guild_id ? null : m.A.getGuild(t.guild_id)?.name), [
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
        })(t, n, oW);
    return (0, a.jsx)(Y.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let oX = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oz, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, a.jsx)(st.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, or.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oU, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(st.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, {
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
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oU, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(sq, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(oU, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(oJ, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, a.jsx)(ol, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sW, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(sa, {
                            projectId: n,
                            steps: oY,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(oH, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, s8.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, s8.A)(e.row, t.row, ["message"]) &&
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
                (0, s8.A)(e.replyTo, t.replyTo) &&
                (0, s8.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    oY = [],
    oQ = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    oZ = new WeakMap();
function o0(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function o1(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let o2 = i.memo(function (e) {
    let {
            projectId: t,
            messages: n,
            emptyState: l,
            onPickIdea: r,
            onAskForIdeas: o,
            draftHasText: u,
            onApprovePlan: c,
            floatingSettingsMessageId: d,
            liveClarificationId: m,
            onRestoreVersion: f,
            scrollerRef: h,
            stickToBottomRef: g,
            pinned: x,
            onUnpin: v,
            handleRef: j,
            onShowsLatestChange: b,
        } = e,
        y = i.useRef(null),
        [w, k] = i.useState(null),
        C = i.useCallback((e) => {
            ((y.current = e), k(e));
        }, []),
        [S, E] = i.useState(null),
        I = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(I.current), []);
    let _ = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        M = (0, s.bG)([lo.A], () => lo.A.getPublishStatus(t)?.state ?? null),
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
                                        let t = (0, lk.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = oZ.get(r);
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
                        let a = !(0, nT.BL)(e),
                            i = r5({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, lk.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, lk.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && oQ.test(n.prose.content)) m = !0;
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
                                        turnActive: lA(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = oQ.test(e.content ?? "");
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
                    (oZ.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                          let n = iZ.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), iZ.set(t, n)), n);
                      })),
                m,
            );
        }, [n, M, m]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return o0(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : o1(e, t.endKey, t.end - 1) + 1,
                a = o1(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), o0(e, a, r));
        })(R, L, x),
        D = i.useRef(O),
        q = i.useRef(R),
        F = i.useRef(P),
        z = i.useRef(null),
        G = i.useRef(null),
        U = i.useRef(new Set()),
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
            z.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        H = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), o0(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), o0(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? o0(e, i, t.end) : null;
            })(q.current, D.current, {
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
                        let t = D.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    H());
            },
            recordAnchor: B,
            showLatest(e) {
                ((G.current = e ?? null), $(null));
            },
        }),
        [B, H],
    );
    let V = i.useRef(null),
        K = i.useCallback(
            (e) => {
                var n;
                let l;
                V.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (v(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = F.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, p.P6)(t) && (V.current = e);
                    return;
                }
                (v(),
                    (G.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    $(((n = q.current), o0(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [_, v, t],
        );
    (i.useEffect(() => {
        let e = V.current;
        null != e && K(e);
    }, [P, K]),
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
    let J = null == O.endKey;
    (i.useEffect(() => b?.(J), [J, b]),
        i.useLayoutEffect(() => {
            ((D.current = O), (q.current = R), (F.current = P));
        }),
        i.useLayoutEffect(() => {
            let e = h.current?.getScrollerNode(),
                t = y.current;
            if (null != e && null != t) {
                let n = z.current;
                if (g.current) h.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = G.current;
                ((G.current = null), l?.(), B(), H());
            }
            U.current = new Set(R);
        }, [P, R, O.start, O.end, h, g, B, H]));
    let X = n.at(-1),
        Q = (function (e, t, n) {
            let l = (0, td.Ay)(e),
                r = (0, sM.A)(),
                a = sR(t),
                s = t.at(-1),
                o = {
                    projectId: e,
                    draftHasText: n,
                    publishing: l?.publishing === !0,
                    drift: l?.isUpdate === !0,
                    messageAt: null != s ? Math.max(s.created_at, s.finished_at ?? 0, s.settled_at ?? 0) : null,
                    visible: r,
                },
                [u, c] = i.useState(() => s$(o, Date.now())),
                d = (function (e, t, n) {
                    if (e.projectId !== t.projectId) return s$(t, n());
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
                            let t = Math.min(e.outdatedBackoff + 1, sT.length - 1);
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
                m =
                    null == a || sL(a)
                        ? null
                        : {
                              turn: a,
                              publish: l,
                              draftHasText: n,
                              draftTyped: d.draftTyped && n,
                              outdatedUpdating: d.outdatedUpdating,
                          },
                { shown: f, nextDueAt: h } = (function (e, t) {
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
                    sP.map((e) => ({
                        ...e,
                        idleDelayMs:
                            "outdated" === e.key && d.outdatedUpdating
                                ? 0
                                : (e.backoffDelaysMs?.[d.outdatedBackoff] ?? e.idleDelayMs),
                        eligible: null != m && e.eligible(m),
                    })),
                    d,
                );
            return (
                "outdated" !== f || d.outdatedShown ? d !== u && c(d) : c({ ...d, outdatedShown: !0 }),
                i.useEffect(() => {
                    function t() {
                        c((e) => ({ ...e, outdatedUpdating: !0 }));
                    }
                    let n = sO.get(e) ?? new Set();
                    return (
                        sO.set(e, n),
                        n.add(t),
                        () => {
                            (n.delete(t), 0 === n.size && sO.delete(e));
                        }
                    );
                }, [e]),
                i.useEffect(() => {
                    if (null == h) return;
                    let e = setTimeout(() => c((e) => ({ ...e, now: Date.now() })), Math.max(0, h - Date.now()));
                    return () => clearTimeout(e);
                }, [h, d.now]),
                f
            );
        })(t, n, !0 === u),
        Z = i.useCallback(
            (e) => {
                switch (e) {
                    case "outdated":
                        return (0, a.jsx)(oU, {
                            groupStart: !1,
                            content: "",
                            accessories: (0, a.jsx)(sq, { projectId: t, notice: "outdated" }),
                        });
                    case "ideas":
                        return (0, a.jsx)("div", {
                            className: sV.u$,
                            children: (0, a.jsx)(oU, {
                                content: N.intl.string(A.default.s96AWB),
                                accessories: (0, a.jsx)(i5, { onAsk: o }),
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
                            if (!(0, nT.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, nT.BL)(X)
                  ? X.awaitingUser
                  : null) ?? void 0,
        ei = (0, s.bG)([tm.A], () => tm.A.getSettings(t)?.secrets, [t]),
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
                        if (0 === o.length || !(0, nT.BL)(s)) continue;
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
                className: W()(sV.x7, sV.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: sV.Ub, children: (0, a.jsx)(en.y, {}) }),
            });
        let e = "unavailable" === l ? A.default.Td4Sf4 : A.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: sV.x7,
            children: (0, a.jsx)(sW, { role: "assistant", children: (0, a.jsx)(oU, { content: N.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(sK.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: sV.x7,
            children: [
                P.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            oX,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && S === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === X;
                    return (0, a.jsx)(
                        oX,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? er.get(n.in_reply_to) : void 0,
                            onJumpTo: K,
                            planVersion: et.get(n.render_id),
                            pickedIdeaIds: el.get(n.render_id),
                            secretRequestAwaiting: l ? ea : void 0,
                            secretRequestStatus: es.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === ee ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                null != ea && J
                    ? (0, a.jsx)(sW, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(oU, {
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
                          className: sV.q3,
                          children: (0, a.jsx)(sH, { reminder: Q, renderReminder: Z }),
                      })
                    : null,
                J ? (0, a.jsx)(s6, { projectId: t, messages: n, draftHasText: !0 === u }) : null,
            ],
        }),
    });
});
var o3 = n(731084),
    o7 = n(823376),
    o5 = n(187447);
function o6(e) {
    let { activity: t, id: n } = e,
        l = (0, sM.A)(),
        { text: r, revealing: s } = oA(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: o5.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(ly.Ch, {
                ref: o,
                className: o5.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: W()(sr.PT, o5.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: r7.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var o4 = n(53659);
function o8(e) {
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
            onSpokenChange: m,
        } = e,
        f = i.useRef(null),
        h = i.useId(),
        [g, p] = i.useState(null),
        x = (0, o3.xu)({
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
        j = x === o3.kx["0"],
        [b, y] = i.useState(d ?? v),
        w = (0, sM.A)();
    (l || (0, o3.E4)(v, b) || (!w && !j)) && b !== v && y(v);
    let k = i.useRef(v);
    (i.useEffect(() => {
        k.current = v;
    }, [v]),
        i.useEffect(() => {
            m?.(b);
        }, [b, m]));
    let C = i.useRef(null),
        S = i.useRef(b);
    i.useEffect(() => {
        S.current = b;
    }, [b]);
    let E = i.useRef(j),
        I = i.useRef(0);
    (i.useEffect(() => {
        ((E.current = j), !j && (0, o3.E8)(S.current) && y(k.current));
    }, [j]),
        i.useEffect(() => {
            if (!w) return;
            let e = 0,
                t = 0;
            function n() {
                E.current
                    ? ((I.current = (0, o3.E8)(S.current) ? I.current + 1 : 0), y((0, o3.Ov)(I.current)))
                    : k.current !== S.current
                      ? y(k.current)
                      : C.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, o3.FZ)),
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
        targetElementRef: f,
        position: "top",
        align: "left",
        shouldShow: T,
        onRequestClose: R,
        renderPopout: () => (0, a.jsx)(o6, { id: h, activity: t }),
        children: () =>
            (0, a.jsxs)(ef.D, {
                innerRef: f,
                className: W()(o4.hF, _ && o4.Xd),
                "aria-label": N.intl.string(
                    r
                        ? A.default.qqlUiW
                        : x === A.default.j8tmjK
                          ? A.default.j8tmjK
                          : j
                            ? o3.kx["0"]
                            : A.default["Uuj/gh"],
                ),
                "aria-expanded": T,
                "aria-describedby": T ? h : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": N.intl.string(x),
                onClick: P,
                children: [
                    (0, a.jsx)("span", {
                        className: o4.bl,
                        children: (0, a.jsx)(o7.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: o4.xu,
                        "aria-hidden": !!u || !!j || void 0,
                        children: w
                            ? (0, a.jsx)(eb.o, {
                                  ref: C,
                                  text: b,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: o3.vg,
                                  delay: null,
                                  className: o4.yE,
                              })
                            : (0, a.jsx)(Y.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: o4.yE,
                                  children: b,
                              }),
                    }),
                ],
            }),
    });
}
var o9 = n(85428),
    ue = n(885574),
    ut = n(242779),
    un = n(436804);
function ul(e) {
    return e.toLocaleString();
}
function ur(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: un.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: un.mf,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [ul((0, ut.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Y.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    ul(n.input_tokens),
                    " in \xb7 ",
                    ul(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${ul(n.cache_creation_input_tokens)} cache write \xb7 ${ul(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function ua(e) {
    let { project: t } = e,
        n = (0, ut.wU)(t.compaction),
        l = (0, ut.wU)(t.classifier),
        r = (0, ut.wV)(t.orchestrator, t.codegen),
        i = (0, ut.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: un.si,
        role: "dialog",
        "aria-label": N.intl.string(A.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: un.Q$,
                children: (0, a.jsxs)("div", {
                    className: un.mf,
                    children: [
                        (0, a.jsxs)(Y.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [ul((0, ut.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Y.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(ur, { label: N.intl.string(A.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(ur, { label: N.intl.string(A.default.ANCEo3), usage: n }),
            (0, a.jsx)(ur, { label: N.intl.string(A.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: un.mf,
                children: [
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: N.intl.string(A.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, ut.sj)(i) ? "\u2014" : `${Math.round(100 * (0, ut.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function ui(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ei.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(ua, { project: t }),
        children: (e) =>
            (0, a.jsx)(ef.D, {
                innerRef: n,
                className: un.Y$,
                "aria-label": N.intl.string(A.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(ue.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var us = n(997421);
function uo(e) {
    let {
            projectId: t,
            thinking: n,
            turnStartedAt: l,
            restoring: r = !1,
            remixStartedAt: o,
            recalling: u = !1,
            thinkingActivity: c,
            compacting: d,
            saving: m,
            projectUsage: f,
            connState: h,
        } = e,
        g = (0, nc.Zv)(t),
        p = (0, s.bG)([lo.A], () => lo.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, o3.E8)(e) || e === N.intl.string(A.default.mKK6wB) || e === N.intl.string(A.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, o3.uc)(f),
        y = null != o,
        w = o ?? (n ? l : void 0);
    return (0, a.jsxs)("div", {
        className: us.jf,
        children: [
            (0, a.jsxs)("div", {
                className: us.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    n || r || y || u || g || !0 === m
                        ? (0, a.jsx)(o8, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: y,
                              recalling: u,
                              controlling: g,
                              publishPending: p,
                              spoken: x,
                              onSpokenChange: j,
                          })
                        : null,
                    null != w ? (0, a.jsx)(o9.A, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(o9.L, { startedAt: w }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: us.BP,
                      children: [
                          (0, a.jsx)(Y.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(ui, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Y.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": N.intl.formatToPlainString(A.default["tCo+ZM"], { status: (0, o3.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: us.XF,
                      children: (0, o3.Db)(h),
                  }),
        ],
    });
}
let uu = ["wheel", "touchstart", "pointerdown", "keydown"];
var uc = n(698638),
    ud = n(608711);
let um = [N.intl.string(A.default["9w+Chc"]), N.intl.string(A.default.WAvmdq), N.intl.string(A.default.SKsrzl)];
function uf(e) {
    var t;
    let n,
        l,
        { projectId: r, restoreState: o, onRestoreVersion: u, onImportProject: c } = e,
        d = (0, s.bG)([eZ.A], () => eZ.A.getMessages(r), [r]),
        f = (0, s.bG)([p.Ay], () => p.Ay.getConnState(r), [r]),
        h = (0, s.bG)([eZ.A], () => eZ.A.getProjectUsage(r), [r]),
        x = (0, s.bG)([eZ.A], () => eZ.A.getThinkingActivity(r), [r]),
        v = (0, s.bG)([eZ.A], () => eZ.A.isCompacting(r), [r]),
        j = (0, s.bG)([eZ.A], () => eZ.A.isSaving(r), [r]),
        b = (0, s.bG)([rq.A], () => rq.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: C,
            pinned: S,
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
                m = i.useRef(!0),
                f = i.useCallback((e) => {
                    ((m.current = e), d(e));
                }, []);
            i.useLayoutEffect(() => {
                let t = e.current?.getScrollerNode();
                if (null != t) {
                    for (let e of uu) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of uu) t.removeEventListener(e, u);
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
                r && (C.current ? w.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [C]),
        i.useEffect(() => {
            (0, p.Hc)(r);
        }, [r]),
        (0, rK.E1)(r));
    let O = nE(r),
        D = (function (e) {
            let t = (0, td.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, s.bG)([m.A], () => (null == n ? null : (m.A.getGuild(n)?.name ?? null))),
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
        q =
            ((n = (0, s.bG)([rz.A], () => rz.A.getFailure(r))),
            (l = i.useCallback(() => (0, rG.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: N.intl.format(A.default.Up6Ssw, { reason: n }),
                      retry: { text: N.intl.string(A.default["ywA+ET"]), onClick: l },
                  }),
        F = (0, s.bG)([rz.A], () => rz.A.getSetupStartedAt(r), [r]),
        z = i.useCallback(
            (e, t) => {
                (0, p.dv)(r, e, t);
            },
            [r],
        ),
        G = i.useCallback(
            (e, t) => {
                0 === O.annotations.length
                    ? z(e, t)
                    : (z(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nm(e.comment)),
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
                                      a.push(`${t + 1}. ${ng(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: O.annotations, metaComment: e, context: O.context }),
                          t,
                      ),
                      nA(r));
            },
            [O, z, r],
        ),
        U = i.useCallback(() => (0, p.fu)(r), [r]),
        B = i.useCallback((e) => rN(r, e.implementation_prompt), [r]),
        [H, V] = (function (e) {
            let [t, n] = i.useState(() => r2(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? r2(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        K = i.useCallback(() => z(N.intl.string(A.default["t5CN3+"])), [z]),
        W = i.useCallback((e, t, n) => rN(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        J = i.useCallback((e) => (0, rF.X)(r, e), [r]),
        X = i.useCallback((e) => (0, g.vX)(r, e), [r]),
        Q = i.useCallback((e) => sj(r, "chat", Array.from(e), X), [r, X]),
        Z = i.useCallback(() => rN(r, N.intl.string(A.default.Zc7gML)), [r]),
        en = o?.status === "restoring",
        el = "open" === f && !en,
        er = d[d.length - 1],
        ea = null != er && "assistant" === er.role && null != er.proposal,
        [ei, es] = i.useState(null),
        eo = er?.clarification != null && er.clarification.id !== ei ? er.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        ec = (0, s.bG)([tm.A], () => tm.A.getSettings(r), [r]),
        [ed, em] = i.useState(null),
        ef =
            null != er &&
            "assistant" === er.role &&
            null != er.settingsRequest &&
            (0, nT.BL)(er) &&
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
        if (null == ex || null == e || !(0, n2.vq)(t, HTMLElement) || null == ej) return;
        function n() {
            C.current && w.current?.scrollToBottom();
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
    }, [ex, ej, w, C]);
    let eb = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, s.bG)([eZ.A], () => eZ.A.hasLoadedHistory(r), [r]),
            historyUnavailable: (0, s.bG)([eZ.A], () => eZ.A.isHistoryUnavailable(r), [r]),
            connState: f,
        }),
        ey = "loading" === eb && 0 === d.length,
        ew = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < r.length; t++) e = (31 * e + r.charCodeAt(t)) % 0x7fffffff;
            return um[e % um.length];
        }, [r]),
        ek = ea ? N.intl.string(A.default.Zc7gML) : "greeting" === eb && 0 === d.length ? ew : null,
        eA = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, nT.BL)(t)) return t;
            }
        }, [d]),
        eN = null != eA,
        eC = null != eA ? (0, rV.S)(eA) : void 0,
        eS = ea && el ? Z : void 0,
        eE = i.useCallback(() => rN(r, N.intl.string(A.default.EMgIuY)), [r]),
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
        eL = i.useMemo(() => (null != eA ? (0, lN.b9)(eA.steps) : ""), [eA]),
        e$ = i.useMemo(() => (null != eA ? ((0, lk.lt)(eA.steps) ?? eA.todos) : void 0), [eA]),
        eO = eA?.provisionalTodo,
        eD = null != eA && lA(eA),
        eq = i.useMemo(() => {
            var e;
            return null != eA ? ((e = eA.steps), (0, ae.k)((0, lk.Jf)(e, !0).tasks)) : void 0;
        }, [eA]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: ud.TE,
        children: [
            el
                ? (0, a.jsx)(lw.A, {
                      title: N.intl.string(A.default.gy7byi),
                      description: N.intl.string(A.default["dkv/WO"]),
                      icons: uc.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(lU, {
                onJumpToActivity: L,
                line: eL,
                placement: eN && "top" === eR ? "top" : null,
                todos: e$,
                todosLive: eD,
                provisionalTodo: eO,
                agents: eq,
            }),
            (0, a.jsxs)("div", {
                className: ud.JX,
                children: [
                    (0, a.jsx)(ly.Ch, {
                        ref: w,
                        onScroll: $,
                        scrollbarGutter: ey ? "both-edges" : "stable",
                        className: [ud.N$, E ? null : ud.hB, ep ? ud.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(o2, {
                            projectId: r,
                            messages: d,
                            emptyState: eb,
                            floatingSettingsMessageId: ef?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? K : void 0,
                            draftHasText: H,
                            onApprovePlan: el ? eE : void 0,
                            onRestoreVersion: en || eN ? void 0 : u,
                            scrollerRef: w,
                            stickToBottomRef: C,
                            pinned: S,
                            onUnpin: I,
                            handleRef: k,
                            onShowsLatestChange: P,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: ud.NJ,
                        children: (0, a.jsx)(uo, {
                            projectId: r,
                            thinking: eN,
                            turnStartedAt: eC,
                            restoring: en,
                            remixStartedAt: F,
                            recalling: ey,
                            thinkingActivity: x,
                            compacting: v,
                            saving: j,
                            projectUsage: h,
                            connState: f,
                        }),
                    }),
                    null == eo
                        ? null
                        : (0, a.jsx)("div", {
                              ref: ev,
                              className: ep ? `${ud.B5} ${ud.J9}` : ud.B5,
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
                              className: ud.B5,
                              children: (0, a.jsx)(rH, { projectId: r, request: eh, onDismiss: eg }, ef?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: ud.Jx,
                children: [
                    (0, a.jsx)(lU, {
                        onJumpToActivity: L,
                        line: eL,
                        placement: eN && "bottom" === eR ? "bottom" : null,
                        todos: e$,
                        todosLive: eD,
                        provisionalTodo: eO,
                        agents: eq,
                    }),
                    0 === O.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ud.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: N.intl.formatToPlainString(A.default["7b49dS"], {
                                          count: O.annotations.length,
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
                                      onClick: () => nA(r),
                                  }),
                              ],
                          }),
                    null == q
                        ? null
                        : (0, a.jsx)("div", {
                              className: ud.qB,
                              children: (0, a.jsx)(tY.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: q.message,
                                  action: q.retry,
                              }),
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: ud.Db,
                              children: [
                                  (0, a.jsx)(tY.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: ud.jU,
                                      children: (0, a.jsx)(eP.m, {
                                          text: N.intl.string(N.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tn.K, {
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
                    (0, a.jsx)(sS, {
                        projectId: r,
                        canSend: el,
                        running: eN,
                        restoring: en,
                        onSend: G,
                        hasPendingContext: O.annotations.length > 0,
                        onInterrupt: el ? U : void 0,
                        onUploadFile: X,
                        onImport: c,
                        onApprove: eS,
                        suggestion: ek,
                        questionOpen: null != eo || null != eh,
                        modelSettings: b,
                        onModelSettingsChange: J,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var uh = n(761508),
    ug = n(933294),
    up = n(207438),
    ux = n(683438);
function uv(e, t) {
    return String(e).padStart(t, "0");
}
var uj = n(667931);
let ub = {
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
    uy = { running: "Running", ok: "Done", error: "Failed" };
function uw(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function uk(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uA(e) {
    return uw(Math.round(e));
}
function uN(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uC(e) {
    return uA(e.count > 1 ? e.totalMs : e.end - e.start);
}
let uS = ["Arguments", "Result", "Usage", "Details"];
function uE(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uI(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function u_(e) {
    let t = (0, uj.bM)(e)?.end;
    return null != t ? uw(t) : (0, uj.lp)(e) ? "interrupted" : "still running";
}
function uM(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${uv(l.getHours(), 2)}:${uv(l.getMinutes(), 2)}:${uv(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${uv(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        uN(e.spans.length),
        (0, uj.Sj)((0, uj.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function uT(e) {
    let t = (0, uj.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, uj.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += uP(r, "in")),
                (l.output += uP(r, "out")),
                (l.cacheRead += uP(r, "cache_read")),
                (l.cacheWrite += uP(r, "cache_write")),
                (l.costUsd += uP(r, "cost_usd"))));
    }
    let r = uj.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function uP(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var uR = n(738188),
    uL = n(430993),
    u$ = n(364840),
    uO = n(224640),
    uD = n(20742);
let uq = { collapsed: new Set(), revealed: new Set() };
var uF = n(872892);
let uz = {
    op: uF.Q,
    model: uF.i3,
    tool: uF.dH,
    setup: uF.kc,
    worktree: uF.Qx,
    sandbox: uF.QH,
    build: uF.F1,
    platform: uF.Op,
    other: uF.fv,
};
function uG(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      uN(t.calls, "model call"),
                      `${uk(t.input)} in`,
                      `${uk(t.output)} out`,
                      `${uk(t.cacheRead)} cache read`,
                      `${uk(t.cacheWrite)} cache write`,
                      uI(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: uF.M1,
        children: [
            (0, a.jsx)("div", {
                className: uF.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${uF.DJ} ${uz[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: uF.o1,
                children: uj.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${uA(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: uF.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${uF.nf} ${uz[e]}` }),
                                (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: ub[e] }),
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
function uU(e) {
    return `conjure-perf-trace-${e}`;
}
function uB(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: uF.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Y.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${uF.p0} ${s + o > 85 ? uF.EU : uF.jh}`,
                children: i,
            }),
        ],
    });
}
function uH(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eT._ : n9.a,
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
    return (0, a.jsxs)(ef.D, {
        tag: "div",
        role: "treeitem",
        id: uU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${uF.$y} ${r ? uF.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: uF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(ef.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: uF.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: uF.YJ }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: uF.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${uF.nf} ${uz[t.category]}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: uF.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: uF.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Y.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: uF.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(uR.WarningIcon, { size: "xs", color: "currentColor", className: uF.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(uB, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${uF.M0} ${uF.Nh}`
                    : t.running
                      ? `${uF.M0} ${uF.rF}`
                      : `${uF.M0} ${uz[t.category]}`,
                duration: uC(t),
            }),
        ],
    });
}
function uV(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(ef.D, {
        tag: "div",
        role: "treeitem",
        id: uU(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${uF.$y} ${l ? uF.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: uF.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: uF.ai,
                        children: (0, a.jsx)(eT._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: uF.U9 }),
                    (0, a.jsx)("span", { className: `${uF.nf} ${uF.dL}` }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: uF.MQ,
                        children: uN(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(uB, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${uF.M0} ${uF.ab} ${uF.dL}`,
                duration: uA(t.totalMs),
            }),
        ],
    });
}
function uK(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Y.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: uF._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: uF.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${uF.nf} ${uz[t.category]}` }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [uE("Start", `+${uA(e.start)}`), uE("Duration", uC(e))];
                      e.count > 1
                          ? t.push(
                                uE("Calls", String(e.count)),
                                uE("Longest call", uA(e.maxMs)),
                                uE("Spread over", uA(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(uE("Self time", uA(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(uE("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(uE("Notes", l.join(", "))),
                          null != e.span.error && t.push(uE("Error", e.span.error)));
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
                              s = "cost_usd" === t ? uI(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), uE(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...uS.flatMap((e) => {
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
                                            className: uF.xd,
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
                                                            className: uF.vl,
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
function uW(e) {
    let { trace: t } = e,
        n = i.useMemo(() => uT(t), [t]);
    return (0, a.jsx)(uG, { stats: n });
}
function uJ(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, uj.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uq : (0, uj.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, uj.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, uj.x7)(t)), l((n) => (0, uj._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, uj.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, uj.IE)(t, e);
                        null != n && l((e) => (0, uj.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, uj.IE)(t, e);
                        null != n && l((e) => (0, uj.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, uj.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, uj.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, uj.hB)(t));
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
        f = (0, uj.dj)(t),
        h = i.useMemo(() => (0, uj.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(uU(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(uL.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: uF.z,
                        children: [
                            (0, a.jsx)(Y.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: u_(t),
                            }),
                            (0, a.jsx)(Y.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uM(t),
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
                                      children: `${uN(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(uW, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: uF.KE,
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
                        "aria-activedescendant": null == o ? void 0 : uU(o),
                        className: uF.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uF.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: uF.So,
                                        children: (0, a.jsx)(Y.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: uF.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Y.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${uF.io} ${(e / f) * 100 > 85 ? uF.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : uA(e),
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
                                          uH,
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
                                    : (0, a.jsx)(uV, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(u$.j, { children: (0, a.jsx)(uK, { node: s }) }),
        ],
    });
}
function uX(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, s.bG)([oa.A], () => oa.A.getTimingTrace(l, r), [l, r]),
        o = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(uO.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": o,
        children: [
            (0, a.jsx)(uD.rQ, { title: o }),
            null == i
                ? (0, a.jsx)(uL.c, {
                      children: (0, a.jsx)(Y.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(uJ, { trace: i }),
        ],
    });
}
let uY = { running: uF.Vf, ok: uF.mo, error: uF.Sr };
function uQ(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${uF.Om} ${uY[t]}`, role: "img", "aria-label": uy[t] });
}
function uZ(e, t) {
    (0, tv.openModal)((n) => (0, a.jsx)(uX, { ...n, projectId: e, traceId: t }));
}
function u0(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => uZ(t, n.id), [t, n.id]);
    return (0, a.jsxs)(ef.D, {
        className: uF.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: uF.sU,
                children: [
                    (0, a.jsx)(uQ, { status: (0, uj.lQ)(n) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: uF._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: u_(n),
                    }),
                ],
            }),
            (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uM(n) }),
            null == l
                ? null
                : (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function u1(e) {
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
function u2(e) {
    let { projectId: t } = e,
        n = (0, s.yK)([oa.A], () => oa.A.getTimingTraces(t), [t]),
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
                    let t = e.map(uT);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: uj.BF.map((e) => ({
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
              className: uF.Ie,
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
              className: uF.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: uF.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: uF.fH,
                              children: (0, a.jsx)(ux.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(u1, { projectId: t, traces: o }),
                      ],
                  }),
                  (0, a.jsxs)(ly.Ch, {
                      className: uF.XG,
                      children: [
                          (0, a.jsx)(uG, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Y.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: uF.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(u0, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function u3(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function u7(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function u5(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function u6(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function u4(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function u8(e) {
    return N.intl.string("preview" === e ? A.default["2yLYlG"] : A.default.eiAi57);
}
let u9 = ["all", "preview", "stable", "web"];
function ce(e) {
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
function ct(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : N.intl.formatToPlainString(A.default["XO/bN4"], {
              p50: u3(e.memory_p50_bytes ?? 0),
              p999: u3(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let cn = {
    db: () => A.default["7l+DFG"],
    db_preview: () => A.default.FAuffi,
    runtime: () => A.default["Gkl+ab"],
    runtime_preview: () => A.default.ynpJzv,
    bot: () => A.default["5/i0cj"],
    bot_preview: () => A.default.m2jsnw,
};
var cl = n(911608),
    cr = n(177427);
function ca(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: cr.KE,
        children: [
            (0, a.jsx)("div", {
                className: cr.IQ,
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
                                  children: N.intl.formatToPlainString(A.default.INVO50, { time: u6(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(ee.$, { variant: "secondary", size: "sm", text: N.intl.string(A.default.oKEgiu), onClick: l }),
        ],
    });
}
function ci(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: cr.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Y.E, { variant: "text-xs/semibold", color: "text-muted", className: cr.Gf, children: t }),
            n,
        ],
    });
}
function cs(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: cr.N8,
        children: [
            (0, a.jsxs)("div", {
                className: cr.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: cr.kS,
                        children: [i, (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: cr.kS,
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
function co(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: cr.N8,
        children: [
            (0, a.jsxs)("div", {
                className: cr.x7,
                children: [
                    (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(cl.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? cr.dh : void 0,
            }),
        ],
    });
}
function cu(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(cs, {
            label: N.intl.string(A.default.SXP7pD),
            value: N.intl.string(A.default.E5hKVi),
            hint: ce(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(cs, {
            label: N.intl.string(A.default.SXP7pD),
            value: "\u2014",
            hint: N.intl.string(A.default.AGvoMJ),
        });
    let l = ct(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(cs, { label: N.intl.string(A.default["H/X+FI"]), value: u7(n.cpu_ms) }),
            null != l && (0, a.jsx)(cs, { label: N.intl.string(A.default.lmFmMO), value: l }),
        ],
    });
}
function cc(e) {
    let { analytics: t } = e,
        n = N.intl.string(A.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(ci, {
            title: n,
            children: (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: ce(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? cn[t] : null) ? N.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(ci, {
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
                          cs,
                          {
                              label: n,
                              value: N.intl.formatToPlainString(A.default["w/2voO"], { cpu: u7(t.cpu_ms) }),
                              hint: ct(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var cd = n(678708),
    cm = n(414499),
    cf = n(714800),
    ch = n(81466),
    cg = n(424383),
    cp = n(816943),
    cx = n(268791),
    cv = n(514042),
    cj = n(872351),
    cb = n(708988),
    cy = n(150934),
    cw = n(417270);
let ck = "Restart Agent",
    cA = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function cN(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function cC(e, t) {
    return { label: e, value: null != t && "" !== t ? u6(t) : "Unknown", icon: "calendar" };
}
function cS(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function cE(e, t, n, l) {
    let [r, a] = cA[n.status];
    return { label: e, value: `${cS(n.bytes)} of ${cS(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function cI(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = u6(e.at);
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
let c_ = { main: "Main vs Remote", wip: "WIP vs Remote" };
function cM(e) {
    let t = `container ${cN(e.local)} \xb7 remote ${cN(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: c_[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${u5(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${u5(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${u5(n)} Ahead, ${u5(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let cT = ["main", "wip"];
var cP = n(400154);
let cR = {
        checkout: cd.FolderIcon,
        edit: lH.PencilIcon,
        remote: cm.h,
        commits: cf.e,
        calendar: ch.CalendarIcon,
        save: cg.L,
        objects: ec.R,
        download: cp.$,
        size: cx.$,
        file: cv.FileIcon,
    },
    cL = {
        ok: [aJ.y, er.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [uR.WarningIcon, er.A.colors.ICON_FEEDBACK_WARNING],
        error: [sg.a, er.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [cj.z, er.A.colors.ICON_MUTED],
        behind: [cb.M, er.A.colors.ICON_MUTED],
    };
function c$(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, s.bG)([oa.A], () => oa.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, up.DK)(t), [t]),
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
                    `Updated ${u6(r)}`,
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
    return (0, a.jsxs)(ci, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: cP.Lj,
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
                    if (!e.running || null != e.localError) return [cI(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            cI(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : u5(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = cT.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(cM))
                        : l.push(
                              { label: "Main", value: cN(e.heads.main), icon: "remote" },
                              { label: "WIP", value: cN(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? u5(e.commits) : "Unknown", icon: "commits" },
                            cC("Oldest Commit", e.oldest),
                            cC("Newest Commit", e.newest),
                            cI(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${u5(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${u5(t.loose)} loose (${u3(t.looseBytes)}) \xb7 ${u5(t.packed)} packed in ${n} (${u3(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${u5(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${u5(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                cE(
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
                                  cE("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = cR[r],
                        [o, u] = null != i ? cL[i] : [null, void 0];
                    return (0, a.jsx)(
                        cs,
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
function cO(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: o,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, s.bG)([oa.A], () => oa.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                o = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== o.current && ((o.current = a), (0, up.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = oa.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, up.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lj.h.dispatch({
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
            let u = i.useCallback(() => (0, up.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: ck,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eV.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: cP.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: cP.nM,
                children: [
                    (0, a.jsx)(cy.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: o,
                        disabled: l,
                    }),
                    (0, a.jsx)(ee.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: cw.RetryIcon,
                        text: ck,
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
                            return `Restarted \xb7 new instance since ${u6(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${u6(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function cD(e, t) {
    return (0, a.jsx)(cs, {
        label: e,
        value: N.intl.formatToPlainString(A.default.yHJxuP, { count: u5((0, ut.aM)(t)) }),
        hint: `${u5(t.input_tokens)} in \xb7 ${u5(t.output_tokens)} out \xb7 ${u5(t.cache_read_input_tokens)} cache read`,
    });
}
function cq(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        o = (0, s.bG)([oa.A], () => oa.A.getLastTurnUsage(t), [t]),
        u = (0, s.bG)([oa.A], () => oa.A.getLastCompaction(t), [t]),
        c = (0, s.bG)([oa.A], () => oa.A.getLastCompactionDecline(t), [t]),
        d = (0, s.bG)([oa.A], () => oa.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, up.Lj)(t), [t]),
        f = i.useCallback(() => (0, up.Lj)(t, !0), [t]),
        h = (0, s.bG)([oa.A], () => oa.A.getSandboxRestartState(t), [t]),
        g = (0, s.bG)([eZ.A], () => eZ.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, up.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: cP.Mf,
        children: [
            (0, a.jsx)(ca, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(ci, {
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
                                  (0, a.jsx)(cs, {
                                      label: N.intl.string(A.default["9nqym2"]),
                                      value: u5((0, ut.a7)(x.cost_usd)),
                                      hint: N.intl.formatToPlainString(A.default.NCdUIh, { count: u5(x.turns) }),
                                  }),
                                  cD(N.intl.string(A.default.xtxP0e), x.orchestrator),
                                  cD(N.intl.string(A.default["9Sj3SX"]), x.codegen),
                                  cD(N.intl.string(A.default.ANCEo3), (0, ut.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(cs, {
                                          label: N.intl.string(A.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${u5(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(ci, {
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
                                  cD(N.intl.string(A.default["7X3i9d"]), o.total),
                                  (0, a.jsx)(cs, {
                                      label: N.intl.string(A.default["8OUg09"]),
                                      value: `${Math.round((o.cache_hit_rate ?? (0, ut.CA)(o.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(ci, {
                title: N.intl.string(A.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(co, {
                                      label: N.intl.string(A.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: u5,
                                  }),
                                  (0, a.jsx)(cs, {
                                      label: N.intl.string(A.default.mRbSns),
                                      value: `${u5(u.tokensBefore)} \u{2192} ${u5(u.tokensAfter)}`,
                                      hint: N.intl.formatToPlainString(A.default.Vq3skS, {
                                          count: u5(u.retainedMessages),
                                          time: u6(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Y.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? N.intl.formatToPlainString(A.default.GMLCNv, { ceiling: u5(b) })
                                      : N.intl.string(A.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(cs, {
                            label: N.intl.string(A.default["4BX5KK"]),
                            value: `${u5(c.projected)} / ${u5(c.threshold)}`,
                            critical: !0,
                            hint: N.intl.formatToPlainString(A.default["6ngCax"], { time: u6(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: cP.Lj,
                        children: [
                            (0, a.jsx)(ee.$, {
                                variant: "secondary",
                                size: "sm",
                                text: N.intl.string(A.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
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
                                    let t = u6(e.observedAt);
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
                                            onClick: f,
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
                        className: cP.Lj,
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
                                    let t = u6(e.observedAt);
                                    return N.intl.formatToPlainString(
                                        "restarted" === e.outcome ? A.default["76mfqO"] : A.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(cO, { projectId: t }),
                ],
            }),
            (0, a.jsx)(c$, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(ci, {
                    title: N.intl.string(A.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(cs, {
                                        label: N.intl.string(A.default.CLXHAs),
                                        value: u6(j.instance_since),
                                        hint: N.intl.string(A.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(cs, { label: N.intl.string(A.default["8V8e1Z"]), value: u5(j.sockets) }),
                                    (0, a.jsx)(cs, {
                                        label: N.intl.string(A.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? N.intl.string(A.default.Wv025I)
                                            : N.intl.string(A.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(cs, {
                                            label: N.intl.string(A.default["3oUYnv"]),
                                            value: u5(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(cu, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(ci, {
                    title: N.intl.string(A.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(cs, {
                            label: N.intl.string(A.default.IlDBN3),
                            value: u5(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(cs, {
                            label: N.intl.string(A.default["ZdzKR+"]),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, { count: u5(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(cs, {
                            label: N.intl.string(A.default.cIhN2W),
                            value: N.intl.formatToPlainString(A.default.yHJxuP, {
                                count: u5(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(cs, {
                            label: N.intl.string(A.default["+fOn/q"]),
                            value: u5(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(cs, { label: N.intl.string(A.default.kIHga0), value: u5(v.max_build_attempts) }),
                        (0, a.jsx)(cs, { label: N.intl.string(A.default.Iw03yW), value: u5(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var cF = n(237528),
    cz = n(629584),
    cG = n(531893);
function cU(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: cG.ut,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: N.intl.string(A.default.h1SE6R),
              }),
          });
}
function cB(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: cG.qf,
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
              className: cG.qf,
              children: [
                  (0, a.jsx)(Y.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Y.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function cH(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: cG.ps,
              children: (0, a.jsx)(Y.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: N.intl.string(A.default.V7Ri8H),
              }),
          })
        : null;
}
var cV = n(109079);
let cK = i.memo(function (e) {
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
        className: cV.vK,
        children: [
            (0, a.jsx)(Y.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: cV.Mt,
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
                className: cV.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: cV.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: cV.Cq, children: (0, a.jsx)(cF.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: cV.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(cF.v, { text: N.intl.string(A.default.TrC9c8), variant: "redLight" }),
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
                                  (0, a.jsxs)(ef.D, {
                                      className: cV.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": N.intl.string(A.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(n9.a, {
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
                                          className: cV.dF,
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
function cW(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([ug.A], () => ug.A.getLogs(t), [t]),
        l = (0, s.bG)([ug.A], () => ug.A.getHistoryState(t, "logs")),
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
                u9.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return u8(e);
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
        className: cV.$F,
        children: [
            (0, a.jsxs)("div", {
                className: cV.y4,
                children: [
                    (0, a.jsx)(cz.I, {
                        look: "pill",
                        "aria-label": N.intl.string(A.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => o(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: cV.KT,
                        children: (0, a.jsx)(ux.I, {
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
            n.length > 0 && (0, a.jsx)(cU, { state: l }),
            (0, a.jsxs)(ly.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: cV.sx,
                children: [
                    (0, a.jsx)(cH, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(cB, {
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
                          : d.map((e) => (0, a.jsx)(cK, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function cJ(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(ci, {
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
function cX(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(cs, {
                      label: N.intl.formatToPlainString(A.default["01ZMS4"], { env: u8(n) }),
                      value: ((t = l.connected), N.intl.string(t ? A.default.Wv025I : A.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(cs, {
                      label: N.intl.string(A.default["z1dh+F"]),
                      value: u5(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${u6(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(cs, { label: N.intl.string(A.default.Iz5GnJ), value: u5(l.guild_count) }),
                  (0, a.jsx)(cs, {
                      label: N.intl.string(A.default["7UqtNv"]),
                      value: u5(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? N.intl.formatToPlainString(A.default.MasSly, {
                                    code: l.last_close_code,
                                    time: u6(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(cs, {
                          label: N.intl.string(A.default["x3+JXJ"]),
                          value: u5(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(cs, { label: u8(n), value: N.intl.string(A.default.lTHQss) });
}
function cY(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(cs, {
        label: u8(t),
        value: N.intl.formatToPlainString(A.default["Xq+wHT"], {
            requests: u5(n.requests),
            failures: u5(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? N.intl.formatToPlainString(A.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: u6(n.last_failure.at),
                  })
                : N.intl.formatToPlainString(A.default["7KlGT6"], { time: u6(n.since) }),
    });
}
function cQ(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(cs, {
                label: N.intl.formatToPlainString(A.default["92gVTm"], { env: u8(t) }),
                value: u5(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    cs,
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
                                  ? N.intl.formatToPlainString(A.default.wxAWNv, { time: u6(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function cZ(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(cs, {
        label: u8(t),
        value: N.intl.formatToPlainString(A.default.suAOj9, { calls: u5(n.calls), errors: u5(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function c0(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(ci, {
            title: t,
            children: (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: N.intl.string(A.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(ci, {
        title: t,
        children: [
            (0, a.jsx)(cs, {
                label: N.intl.string(A.default.xtD4Zp),
                value: u5(n.requests),
                hint: N.intl.formatToPlainString(A.default["7KlGT6"], { time: u6(n.since) }),
            }),
            (0, a.jsx)(cs, { label: N.intl.string(A.default.gfRhR3), value: u5(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(co, {
                              label: N.intl.string(A.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: u7,
                          }),
                          (0, a.jsx)(cs, {
                              label: N.intl.string(A.default.mSKImM),
                              value: u7(r),
                              hint: N.intl.formatToPlainString(A.default.JqMU05, {
                                  total: u7(n.cpu_ms_total),
                                  wall: u7(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(cs, {
                      label: N.intl.string(A.default.LEJ5r3),
                      value: N.intl.string(A.default["2Ekb2b"]),
                      hint: N.intl.string(A.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(cs, { label: N.intl.string(A.default.xvmL1D), value: u7(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(cs, { label: N.intl.string(A.default["4sQYwH"]), value: u5(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(cs, {
                label: N.intl.string(A.default.bQenOy),
                value: u5(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: N.intl.formatToPlainString(A.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(cs, { label: N.intl.string(A.default.xgpn4Y), value: u4(n.build) }),
        ],
    });
}
function c1(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: N.intl.string(A.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: N.intl.string(A.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: N.intl.string(A.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(ci, {
        title: N.intl.string(A.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(cs, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(cs, {
                                  label: N.intl.formatToPlainString(A.default.u7kJJ4, { env: n }),
                                  value: u3(l.r2_bytes),
                                  hint: N.intl.formatToPlainString(
                                      l.r2_truncated ? A.default.lH0oQw : A.default.m9h02S,
                                      { count: u5(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(co, {
                                      label: N.intl.formatToPlainString(A.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: u3,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function c2(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: cP.Mf,
        children: [
            (0, a.jsx)(ca, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(c0, {
                            title: N.intl.string(A.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(c0, {
                            title: N.intl.string(A.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(c1, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(cJ, {
                                title: N.intl.string(A.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cX, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(cJ, {
                                title: N.intl.string(A.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cY, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(cJ, {
                                title: N.intl.string(A.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cQ, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(cJ, {
                                title: N.intl.string(A.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(cZ, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(cc, { analytics: t.analytics }),
                        (0, a.jsxs)(ci, {
                            title: N.intl.string(A.default.fQMpFp),
                            children: [
                                (0, a.jsx)(cs, {
                                    label: N.intl.string(A.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? u4(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(cs, {
                                    label: N.intl.string(A.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? u4(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var c3 = n(592465);
function c7(e) {
    let { projectId: t, onClose: n } = e,
        l = nu(),
        [r, u] = i.useState(() => (l && ni?.projectId === t ? "trace" : "logs")),
        c = (0, s.bG)([oa.A], () => oa.A.getStatus(t), [t]),
        d = (0, s.bG)([oa.A], () => oa.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, up.R7)(t), (0, up.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, p.Rw)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ni || ni.projectId !== e) return null;
            let { traceId: t } = ni;
            return ((ni = null), t);
        })(t);
        return null != e && (uZ(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        ns(t, () => {
            f() && u("trace");
        }));
    let h = i.useCallback(() => {
            (0, ti.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: oa.A.getStatus(t),
                        last_turn_usage: oa.A.getLastTurnUsage(t),
                        last_compaction: oa.A.getLastCompaction(t),
                        last_compaction_decline: oa.A.getLastCompactionDecline(t),
                        timing_traces: oa.A.getTimingTraces(t),
                        logs: ug.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, o.P0)({ text: N.intl.string(A.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = N.intl.string(A.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: c3.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(lx.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lx.Ay.Icon, {
                            icon: oN.CopyIcon,
                            tooltip: N.intl.string(A.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lx.Ay.Icon, { icon: et.P, tooltip: N.intl.string(N.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lx.Ay.ChannelIcon, { icon: t9.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lx.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: c3.rf,
                children: [
                    (0, a.jsxs)(uh.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => u(e),
                        "aria-label": N.intl.string(A.default.RvvWIh),
                        className: c3.vR,
                        children: [
                            (0, a.jsx)(uh.V.Item, { id: "logs", children: N.intl.string(A.default["+VRYCm"]) }),
                            (0, a.jsx)(uh.V.Item, { id: "worker", children: N.intl.string(A.default["50D0FZ"]) }),
                            (0, a.jsx)(uh.V.Item, { id: "agent", children: N.intl.string(A.default.UkbTK1) }),
                            l ? (0, a.jsx)(uh.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(cW, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(c2, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(u2, { projectId: t })
                            : (0, a.jsx)(cq, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var c5 = n(333007),
    c6 = n(365912),
    c4 = n(775121),
    c8 = n(873715);
function c9(e) {
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
let de = Object.freeze({ x: -1, y: -1 });
function dt(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = c9(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var dn = n(470779);
function dl(e) {
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
        } = e,
        {
            drafts: h,
            addFiles: g,
            pasteFiles: p,
            removeDraft: x,
            settled: v,
            takeRefs: j,
        } = sb({ projectId: t, surface: "design", onUploadFile: f }),
        b = i.useRef(null),
        y = (d || h.length > 0) && v && !m,
        w = i.useCallback(() => {
            if (!y) return;
            let e = j();
            u(e.length > 0 ? e : void 0);
        }, [y, j, u]),
        [k, C] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => C(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let S = i.useRef(null),
        [E, I] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = S.current;
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
        ref: S,
        className: W()(dn.M0, { [dn.ho]: k && !m, [dn.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: b,
                type: "file",
                multiple: !0,
                className: dn.Fg,
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
                    className: dn.tY,
                    onClick: () => b.current?.click(),
                    "aria-label": N.intl.string(A.default.lgvqSB),
                    children: (0, a.jsx)(eu.H, { size: "custom", color: "currentColor", className: dn.WW }),
                }),
            }),
            (0, a.jsx)(lV.y, {
                autoFocus: !0,
                rows: 1,
                className: dn.hF,
                value: s,
                placeholder: "" === r ? N.intl.string(A.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": N.intl.string(A.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m ? void 0 : p,
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
                      className: dn.ZO,
                      children: h.map((e) => (0, a.jsx)(sy, { draft: e, onRemove: x }, e.localId)),
                  })
                : null,
        ],
    });
}
var dr = n(192888);
function da(e, t) {
    return (0, dr.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(dt, () => ({ status: "failed" }));
}
var di = n(108308);
let ds = { x: 25, y: 21 };
function du(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dc(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function dd(e, t, n, l) {
    let r = dc(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function dm(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function df(e) {
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
function dh(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: o } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nE(u),
        m = (0, nc.Zv)(u),
        f = (0, tv.useHasAnyModalOpen)(),
        h = (0, s.bG)([eY.default], () => eY.default.getCurrentUser()),
        x = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(null),
        [w, k] = i.useState(!1),
        [C, S] = i.useState(!1),
        [E, I] = i.useState(null),
        [_, M] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        R = i.useRef(null),
        [L, $] = i.useState(null),
        [O, D] = i.useState(!1),
        [q, F] = i.useState(null),
        [z, G] = i.useState(null),
        U = i.useRef(!1),
        [B, H] = i.useState(!1),
        [V, K] = i.useState(null),
        W = c && !m && !f;
    null == q || (W && q.projectId === u) || F(null);
    let J = q?.projectId ?? null;
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
                j((t) => (du(t, e) ? t : e));
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
                (0, c8.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? df(t.response) : null;
                        null == n ? S(!0) : (y(n), nN(u, { url: n.url, title: n.title, viewport: n.viewport }));
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
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!W || null == v || null == u) return;
        if (null == b) {
            X.current = v;
            return;
        }
        if (du(X.current, v)) return;
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
                    (0, c8.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !el.current) return;
                        let l = df(e.response);
                        null != l && (y(l), nN(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = c9(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nw(u)).active &&
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
                    (I(null), F(null), K(null), y(null));
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
                    da(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || db(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? I(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = nf(t.target);
                                ($((t) => (dj(t, e) ? t : e)),
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
            if (null == q) return;
            let e = !U.current;
            (G({ at: q.at, label: q.label, draft: q.draft, instant: e }), H(e), F(null));
        }, [q]);
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
            if (null == z) return;
            let e = setTimeout(() => G(null), dx);
            return () => clearTimeout(e);
        }, [z]));
    let ei = null == b || null == v || b.viewport.width < 1 ? 1 : v.width / b.viewport.width,
        es = null != b || C,
        eo = i.useMemo(() => b?.elements ?? [], [b]),
        eu = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        eu.current = { rect: v, scale: ei };
    }, [v, ei]);
    let ec = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (rk(u, "design"),
                    K(null),
                    (U.current = !1),
                    F({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nf(e) }));
            },
            [u],
        ),
        ed = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / ei, y: (e.clientY - t.top) / ei }), [ei]),
        em = i.useCallback(() => {
            let e = R.current;
            if (null == e) return;
            let t = T.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = P.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(em);
    let ef = i.useCallback(
            (e) => {
                if (null == v || null != V) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), em(), M(!0), null != q)) {
                    (Math.abs(e.clientX - q.at.x) > dv || Math.abs(e.clientY - q.at.y) > dv) && (U.current = !0);
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
                        n = null != e && db(e, v, ei) ? null : e;
                    if (null != n) {
                        let e = nf(n);
                        $((t) => (dj(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = et.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((et.current = n), (Z.current = n), er());
            },
            [v, ei, es, ed, O, eo, q, V, em, er],
        ),
        eh = null == V ? null : d.find((e) => e.id === V.id),
        eg = W && (_ || q?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && da(e, de);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (M(!1), I(null), (et.current = null), (Z.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !_ || !es || O || null != q || null != V) return;
        let e = R.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((et.current = l), (Z.current = l), er());
    }, [W, _, es, O, q, V, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != q || null != V) {
                    (ea(), K(null));
                    return;
                }
                if (null == E || null == v) return;
                let t = ed(e, v);
                ec(
                    E,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nd
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(E, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [E, v, ed, q, V, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (I(null), nA(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != q
                    ? ea()
                    : V?.confirmingRemove === !0
                      ? K({ ...V, confirmingRemove: !1 })
                      : null != V
                        ? K(null)
                        : ev());
        }, [u, q, V, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                c4.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        c4.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            (0, n2.vq)(t) &&
                ew.current?.contains(t) !== !0 &&
                o?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, c6.J$)(e), !0);
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
                if (null != q || null != V || 0 === eo.length) return;
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
                    ec(E, nd, { x: (v?.left ?? 0) + E.rect.x * ei, y: (v?.top ?? 0) + E.rect.y * ei }));
            },
            [u, q, V, eo, E, ec, ej, v, ei],
        ),
        eA = i.useCallback(
            (e) => {
                null == u ||
                    null == q ||
                    ((nm(q.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, p.dv)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nf(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${np}${r}${nx}${ng(e)}
${t.trim()}`;
                            })(q.target, q.draft),
                            e,
                        ),
                        ea(),
                        I(null)));
            },
            [u, q, ea],
        ),
        eN = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, g.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != V && null != x && nm(V.draft)) {
                var e, t;
                let n, l;
                ((e = V.id),
                    (t = V.draft.trim()),
                    null != (l = (n = nw(u)).annotations.find((t) => t.id === e)) &&
                        nC(l, x) &&
                        nk(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...V, editing: !1 }));
            }
        }, [u, V, x]),
        eS = i.useCallback(() => {
            if (null != u && null != V && null != x) {
                var e;
                let t, n;
                ((e = V.id),
                    null != (n = (t = nw(u)).annotations.find((t) => t.id === e)) &&
                        nC(n, x) &&
                        nk(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, V, x]),
        eE = c
            ? w
                ? N.intl.string(A.default["Eb/YV9"])
                : C
                  ? N.intl.string(A.default.FD30bh)
                  : N.intl.formatToPlainString(A.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != v,
        e_ = _ && null == V,
        eM = q?.target ?? eh?.target ?? null,
        eT = q ?? z,
        eP = q ?? (z?.instant === !0 ? null : z),
        eR =
            null != eh && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = dm(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(dd(eh.target, eh.anchor, v, ei), v)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            da(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, c5.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: di.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: di.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: di.MT,
                                      style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                      "data-plain-cursor": e_ ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": N.intl.string(A.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != E && null == E.marker && null == q && null == V
                                      ? (0, a.jsx)(dy, { box: dc(E, v, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: di.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: di.xz,
                                          "data-shown": null != E && null == V && null == q ? "" : void 0,
                                          "data-instant": B ? "" : void 0,
                                          children: (0, a.jsxs)(Y.E, {
                                              variant: "text-xs/medium",
                                              className: di.Ux,
                                              children: [
                                                  null == L
                                                      ? null
                                                      : (0, a.jsx)("span", { className: di.Tl, children: L.kind }),
                                                  null == L || "" === L.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: di.kh,
                                                            children: [" ", L.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: di.Y,
                                      children: e_ ? (0, a.jsx)("div", { className: di.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: di.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: di.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == q ? "" : void 0,
                                                children: (0, a.jsxs)(Y.E, {
                                                    variant: "text-xs/medium",
                                                    className: di.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: di.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: di.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: di.D0, style: dc(eM, v, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = dd(e.target, e.anchor, v, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: di.xL,
                                              style: { ...dm(n, v), width: 24, height: 24 },
                                              "aria-label": N.intl.formatToPlainString(A.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nh(e.target),
                                              }),
                                              "aria-expanded": V?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == q && K(l);
                                              },
                                              onFocus: () => {
                                                  null == q && K(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), K(l));
                                              },
                                              children: (0, a.jsx)(dg, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(dl, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: v,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != q && nm(eT.draft),
                                            onChange: (e) => {
                                                null != q && F({ ...q, draft: e });
                                            },
                                            onSubmit: eA,
                                            onDismiss: ea,
                                            onUploadFile: eN,
                                            closing: null == q,
                                        }),
                                  null != eh && null != V && null != eR
                                      ? (0, a.jsxs)(dp, {
                                            point: eR,
                                            frame: v,
                                            authorId: eh.authorId,
                                            title: nh(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                V.confirmingRemove ? K({ ...V, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                V.editing || V.confirmingRemove || K(null);
                                            },
                                            children: [
                                                V.editing
                                                    ? (0, a.jsx)(Q.f, {
                                                          autoFocus: !0,
                                                          label: N.intl.string(A.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: V.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => K({ ...V, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Y.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: di.aC,
                                                          children: eh.comment,
                                                      }),
                                                nC(eh, x)
                                                    ? (0, a.jsx)("div", {
                                                          className: di.eB,
                                                          children: V.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Y.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: di.nv,
                                                                            children: N.intl.string(A.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...V, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(ee.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: N.intl.string(A.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
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
                                                                                K({
                                                                                    ...V,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        V.editing
                                                                            ? (0, a.jsx)(ee.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nm(V.draft),
                                                                                  text: N.intl.string(A.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(ee.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: N.intl.string(
                                                                                      A.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
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
function dg(e) {
    let { authorId: t } = e,
        n = (0, s.bG)([eY.default], () => eY.default.getUser(t), [t]);
    return (0, a.jsx)(aX.eu, {
        src: null == n ? null : aZ.Ay.getUserAvatarURL(n),
        size: aY._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function dp(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(ds);
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
        className: di.Nr,
        style: N,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: di.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: di.ip, children: (0, a.jsx)(dg, { authorId: d }) }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: di.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: di.zI, children: p }),
        ],
    });
}
let dx = 300,
    dv = 2;
function dj(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function db(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function dy(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: di.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var dw = n(659723),
    dk = n(697744),
    dA = n(130324);
function dN(e) {
    let t = (0, dk.c)(),
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
    let r = (0, sM.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function dC(e) {
    let { className: t } = e,
        { Component: n, events: l } = dN(3e4);
    return (0, a.jsxs)("div", {
        className: W()(t, dA.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: dA.ol,
                children: N.intl.string(A.default.AyiQEp),
            }),
        ],
    });
}
var dS = n(251363),
    dE = n(944142),
    dI = n(532247),
    d_ = n(501628);
function dM(e) {
    let { progress: t } = e,
        { Component: n } = dN(1500),
        l = no.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: d_.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: d_.PM,
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
function dT(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        o = null != t && null != n && n === l,
        u = (0, s.bG)([dE.A], () => (o ? dE.A.getLiveReload(t) : null), [o, t]),
        c = (0, la.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = (function (e, t) {
            let n = (0, dI.dv)(e),
                [l, r] = i.useState(null),
                [a, o] = i.useState(n);
            a !== n && (o(n), r(null == n ? (0, dI.QP)(e, a) : null));
            let u = (0, s.bG)(
                    [nZ.A],
                    () => {
                        let e = nZ.A.getFrame(t);
                        return (0, nJ.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, dS.ow)(null, t) && e();
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
        f = (0, dI.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eB.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: d_.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(dM, { progress: f }),
                  })
                : null,
        ],
    });
}
var dP = n(343030),
    dR = n(317608),
    dL = n(338941),
    d$ = n(964404);
let dO = { width: 1 / 0, height: 1 / 0 };
function dD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dO;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var dq = n(702083);
function dF(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, s.cf)([li.A], () => ({
            mobile: li.A.isBuilderPreviewMobile(),
            landscape: li.A.isBuilderPreviewLandscape(),
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
        d = n ? dD(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: W()(dq.dw, { [dq.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: W()(dq.R9, { [dq.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var dz = n(347927);
function dG(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: W()(dz.Bf, l && dz.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: dz.Ux,
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
var dU = n(957272);
function dB(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, dL.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, nJ.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = nZ.A.getFrame(e);
                    if (null == t || n0.A.getWindowOpen(eK.MLl.ACTIVITY_POPOUT)) return;
                    let n = nZ.A.getMainFrame()?.id === e;
                    t.intent === nJ.sV.MAIN
                        ? (n || lr.A.promoteFrame(e), lr.A.resetFrameLayoutModes(e))
                        : n && lr.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = nZ.A.getFrame(u)) &&
                        ((0, nJ.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        d$.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === nJ.sV.INLINE && lr.A.promoteFrame(u),
                              lr.A.updateFrameLayoutMode({ frameId: u, layoutMode: nJ.y0.PIP }))
                            : e.intent === nJ.sV.MAIN && lr.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === dL.n.Launched)
    ) {
        let e = (0, a.jsx)(dR.A, { frameId: s.id, level: dP.A.WithinAppContent, className: dU.Z7, overlay: r });
        return (0, nW.Q5)(n) ? (0, a.jsx)(dF, { children: e }) : e;
    }
    return (0, a.jsx)(dH, { state: o });
}
function dH(e) {
    let { state: t } = e;
    switch (t) {
        case dL.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: dU.qs,
                children: (0, a.jsx)(dG, {
                    title: N.intl.string(A.default["9kpdo7"]),
                    body: N.intl.string(A.default.iIA8Nj),
                }),
            });
        case dL.n.NoApplication:
            return (0, a.jsx)(dC, { className: dU.qs });
        case dL.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: dU.qs,
                children: (0, a.jsx)(dG, {
                    title: N.intl.string(A.default["7k4GyN"]),
                    body: N.intl.string(A.default.zdIy3R),
                }),
            });
        case dL.n.Error:
            return (0, a.jsxs)("div", {
                className: dU.qs,
                children: [
                    (0, a.jsx)(ew.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: N.intl.string(A.default.lTPbnG),
                    }),
                    (0, a.jsx)(Y.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: dU.tj,
                        children: N.intl.string(A.default.e6GiAZ),
                    }),
                ],
            });
        case dL.n.AwaitingLaunch:
        case dL.n.Loading:
            return (0, a.jsx)("div", { className: dU.qs, children: (0, a.jsx)(en.y, {}) });
    }
}
var dV = n(308528),
    dK = n(334738),
    dW = n(688438),
    dJ = n(355622),
    dX = n(365971),
    dY = n(703462);
function dQ(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: dY.f,
        children: [
            (0, a.jsx)(iA.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Y.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function dZ() {
    return (0, a.jsx)("div", { className: dY.f, children: (0, a.jsx)(en.y, {}) });
}
function d0(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: o } = (0, nU.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, s.bG)([lW.A], () => {
            if (null == u) return null;
            let e = lW.A.getDMFromUserId(u);
            return null != e ? lW.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && dV.A.preload(eK.ME, t);
        }, [t]),
        (n = (0, s.bG)([oj.A], () => oj.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, dX.Xg)();
            return (
                (0, dK.yl)(t, e),
                () => {
                    (0, dK.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            dV.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    o && null == r)
        ? (0, a.jsx)(dZ, {})
        : null == u || f
          ? (0, a.jsx)(dQ, { message: N.intl.string(A.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(dZ, {})
            : (0, a.jsx)("div", {
                  className: dY.g,
                  children: (0, a.jsx)(dW.A, { channel: c, guild: null, chatInputType: dJ.oU.SIDEBAR }, c.id),
              });
}
var d1 = n(887909),
    d2 = n(570962),
    d3 = n(998475);
function d7(e) {
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
    } = (0, d1.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: d3.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: d3.rf,
                children: (0, a.jsx)(d2.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: d3.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: d3.z3,
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
                                className: W()(d3.Qs, c ? d3.cw : null, d ? d3.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: d3.o1,
                      children: s.map((e, t) => (0, a.jsx)(ee.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var d5 = n(765671),
    d6 = n(269094),
    d4 = n(714917),
    d8 = n(463660),
    d9 = n(582063);
let me = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mt() {
    (0, o.P0)({ text: N.intl.string(A.default.jj3abP), variant: "critical" });
}
function mn(e) {
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
                    return (0, a.jsx)(ml, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: d9.m2,
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
                accept: me.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (me.includes(n.type)
                                ? n.size > h.aI
                                    ? (0, o.P0)({ text: N.intl.string(A.default.T8Spiu), variant: "critical" })
                                    : (0, d8.M$)(t, n).catch(mt)
                                : (0, o.P0)({ text: N.intl.string(A.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function ml(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, s.bG)([d4.A], () => d4.A.getBackground(t)),
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
                        icon: ro.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eo.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: N.intl.string(A.default.AiAz8J),
                        icon: cw.RetryIcon,
                        disabled: null == o,
                        action: () => {
                            (n(), (0, d8.Og)(t).catch(mt));
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
                        (0, d8.Y1)(t, !i) || mt();
                    },
                }),
            }),
        ],
    });
}
let mr = "/assets/7cec34541705c795.webp";
function ma(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, dL.A)({ applicationId: t, surface: nJ.ZN });
    return (i.useEffect(() => {
        let e = (0, nJ.VA)(t, nJ.ZN);
        return () => (0, nB.r)(e);
    }, [t]),
    r.state !== dL.n.Launched)
        ? (0, a.jsx)(dH, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(dH, { state: dL.n.Loading })
          : (0, a.jsx)(mi, { lifecycle: r, projectId: n, size: l });
}
function mi(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, d5.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: d9.JH,
        children: [
            (0, a.jsx)(ms, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: d9.dw,
                children: (0, a.jsx)("div", {
                    className: d9.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(d6.A, { frame: t.frame, application: t.application, className: d9.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(mn, { projectId: n }) : null,
        ],
    });
}
function ms(e) {
    let { projectId: t } = e,
        n = (0, s.bG)([d4.A], () => (null != t ? d4.A.getBackground(t) : null)),
        l = n?.imageEtag ?? null,
        [r, o] = i.useState(null),
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
                (0, d8.Mg)(t, l).then(
                    (t) => {
                        e || o(t);
                    },
                    () => {
                        e || o(mr);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? mr : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: W()(d9.LO, { [d9.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var mo = n(409478),
    mu = n(652227);
function mc(e) {
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
        overlayWidgetSize: d = nR,
        projectId: m,
        frameOverlay: f,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mu.qs, children: (0, a.jsx)(en.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: mu.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(en.y, {}) : (0, a.jsx)(d7, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: mu.RG,
                      children: [
                          (0, n$.yf)(o, u)
                              ? (0, a.jsx)(dB, { applicationId: t, surface: l, launch: r, frameOverlay: f })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mu.qs,
                                        children: (0, a.jsx)(dG, {
                                            wide: !0,
                                            title: N.intl.string(A.default["08U+YO"]),
                                            body: N.intl.string(A.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(mo.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(ma, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(d0, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(dC, { className: mu.qs });
}
var md = n(175841),
    mm = n(750506),
    mf = n(867193),
    mh = n(539197),
    mg = n(977020);
function mp(e) {
    let { projectId: t } = e,
        n = (0, mh.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mh.Ie)(e);
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
        className: mg.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mh.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: W()(mg.hN, mg.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: W()(mg.hN, mg.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: W()(mg.UE, { [mg.SP]: n.shown, [mg.Vq]: n.pressed, [mg.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var mx = n(417760);
function mv(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function mj(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function mb(e) {
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
        u = (0, nc.CU)(n),
        c = "controlling" === t,
        d = N.intl.string(c ? (u ? A.default["VJW/5P"] : A.default["+hD2Iz"]) : A.default["h+i1r9"]),
        m =
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
              className: W()(mx.M0, mx.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(o7.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(md.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Y.E, { variant: "text-sm/semibold", color: "none", className: mx.ID, children: d }),
                  c ? (0, a.jsx)(eB.A, { children: N.intl.string(A.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: mx.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: mx.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: mx.sp,
                      children: [
                          (0, a.jsx)(md.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(o7.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: mx.f4,
                              children: [
                                  (0, a.jsx)(Y.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: mx.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Y.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: mx.Rb,
                                            children: N.intl.string(A.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: mx.lC, children: m }) : null,
              ],
          });
}
function my(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, nc.Zv)(null != n && n === l ? t : null),
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
        d = n6(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!n7(e)) return;
                let t = n3(e);
                null != t && (0, n1.sP)(t);
            })(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = mv(r());
            f((t) => (mj(t, e) ? t : e));
            let t = null == h ? null : mv(h);
            (x((e) => (mj(e, t) ? e : t)), null != h && (0, mf.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mf.C)(0));
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
        C = (function () {
            let [e] = i.useContext(mm.uY),
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
                      className: mx.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: mx.QF,
                          children: (0, a.jsx)(mb, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, c5.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: mx.y4,
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
                ? (0, c5.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: mx.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: mx.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mp, { projectId: t }),
                          ],
                      }),
                      C,
                  )
                : null,
        ],
    });
}
var mw = n(399503),
    mk = n(853555),
    mA = n(558960),
    mN = n(187645);
let mC = new Map(),
    mS = !1;
function mE() {
    let e = new Map();
    for (let t of new Set([...eZ.A.getActivityOrderedProjectIds(), ...(0, nc.T7)()])) {
        if (!(eZ.A.isThinking(t) || (0, nc.wK)(t))) continue;
        let n = (function (e) {
            let t = U.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, nW.Rc)(t);
            return (0, nJ.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mC]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mC.delete(t),
            n.unregisterLookup(),
            mA.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        mC.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mN.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mI(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mC.set(e, l),
                    (l.unregisterLookup = (0, mk.Ng)(e, () => (0, dS.n5)(n, t))),
                    mA.A.registerFrameTarget(t, n, dP.A.Backstage, void 0));
            })(t, n);
    for (let e of mC.values()) mI(e.element);
}
function mI(e) {
    let t = li.A.isBuilderPreviewMobile();
    e.classList.toggle(mN.L, !t);
    let n = t ? dD(li.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var m_ = n(873727),
    mM = n(147248),
    mT = n(418842),
    mP = n(363195),
    mR = n(818023);
let mL = null;
var m$ = n(602853),
    mO = n(517461),
    mD = n(761929),
    mq = n(487336);
function mF(e) {
    let { open: t, fullWidth: n = !1, maxWidth: l, onWidthChange: r, children: s } = e,
        o = (0, m$.r)(er.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [c, d] = (0, mO.V)("VibegrationsChatSidebarWidth", 460),
        [m, f] = i.useState(c ?? 460),
        h = (0, rW.clamp)(m, 360, l);
    i.useLayoutEffect(() => {
        r(t ? h + o : 0);
    }, [h, t, o, r]);
    let g = (0, mD.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: mD.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        p = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), g(e));
            },
            [g],
        );
    return (0, a.jsxs)("div", {
        className: W()(mq.pz, { [mq.yD]: n }),
        hidden: !t,
        children: [
            n ? null : (0, a.jsx)("div", { className: mq.Di, onPointerDown: p }),
            (0, a.jsx)("div", {
                ref: u,
                className: W()(mq.kL, { [mq.bH]: n }),
                style: n ? void 0 : { width: h },
                children: s,
            }),
        ],
    });
}
var mz = n(541940);
function mG(e) {
    let {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: u,
            mainClassName: c,
            content: d,
            sidebar: m,
            showsFrame: f,
        } = e,
        [h, g] = i.useState(null),
        p = (0, la.A)(l, o),
        x = p?.id ?? null;
    (!(function (e, t) {
        let n = (0, s.bG)([mP.A], () => (0, m_.x4)(mP.A.theme)),
            l = (0, s.bG)([mM.A], () => mM.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: o,
                forcedColors: u,
                underlineLinks: c,
            } = (0, s.cf)([iM.Ay], () => ({
                reducedMotion: iM.Ay.useReducedMotion,
                fontScale: (0, m_.U0)(),
                highContrast: iM.Ay.isHighContrastModeEnabled,
                forcedColors: iM.Ay.useForcedColors,
                underlineLinks: iM.Ay.alwaysShowLinkDecorations,
            })),
            d = no.hH.useSetting(),
            m = (0, mT.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, dS.ow)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, m_.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: o,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, dr.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, u, a, t, o, d, e, r, m, c]),
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
                let n = (0, dS.ow)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, dS.ow)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, mk.Ng)(t, () => (0, dS.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, dS.ow)(h, x), [h, x]),
        j = i.useCallback(() => (f ? (0, dS.ow)(h, x) : h), [f, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: W()(mz.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(my, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: g, className: mz.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(dh, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function mU(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: o,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        chatFullScreen: m = !1,
        onCloseChat: f,
        chatHeaderAction: h,
        onRestoreVersion: g,
        onImportProject: x,
        debugOpen: v = !1,
        onCloseDebug: j,
        restoreState: b,
        previewReady: y,
        previewGate: w,
        availability: k,
        activeMode: C,
        widgetApplicationId: S,
        overlayWidgetSize: E,
    } = e;
    (0, mw.k)(t, S);
    let I = o.type === nO.U.MAIN || (0, nW.Q5)(o);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, s.cf)([li.A], () => ({
            mobile: li.A.isBuilderPreviewMobile(),
            landscape: li.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mR.aX.LANDSCAPE : mR.aX.PORTRAIT), (mL = e));
                else {
                    if (mL !== e) return;
                    ((l = mR.aX.UNHANDLED), (mL = null));
                }
                lj.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(I ? l : null);
    let _ = i.useRef(null),
        [M, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, lv.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, lv.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (I) return ((0, ls.HV)(l), () => (0, ls.HV)(null));
        }, [l, I]),
        i.useEffect(() => {
            null != t &&
                ((0, p.Hc)(t),
                mS ||
                    ((mS = !0),
                    eZ.A.addChangeListener(mE),
                    U.Ay.addChangeListener(mE),
                    nZ.A.addChangeListener(mE),
                    li.A.addChangeListener(mE),
                    (0, nc.W3)(mE),
                    mE()));
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
        }, []),
        i.useLayoutEffect(() => () => lb(0), []));
    let P = Math.max(360, M - 320),
        R = d || I;
    return (0, a.jsx)("div", {
        ref: _,
        className: W()(mz.LB, { [mz.Ec]: m }),
        children: (0, a.jsx)(mG, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: o,
            header: c,
            showsFrame: (0, n$.yf)(k, C),
            mainClassName: null == c ? void 0 : W()(mz.ez, { [mz.zt]: d && !m }),
            content: (0, a.jsx)(mc, {
                applicationId: l,
                previewApplicationId: r,
                surface: o,
                frameLaunchParams: u,
                previewReady: y,
                previewGate: w,
                availability: k,
                activeMode: C,
                widgetApplicationId: S,
                overlayWidgetSize: E,
                projectId: t,
                frameOverlay: (0, a.jsx)(dT, { projectId: t, applicationId: l, previewApplicationId: r, surface: o }),
            }),
            sidebar:
                null != t && R
                    ? (0, a.jsx)(mF, {
                          open: d,
                          fullWidth: m,
                          maxWidth: P,
                          onWidthChange: lb,
                          children: (0, a.jsx)("div", {
                              className: mz.cO,
                              children: v
                                  ? (0, a.jsx)(c7, { projectId: t, onClose: j ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(dw.A, { projectId: t }),
                                            (0, a.jsx)(lx.Ay, {
                                                "aria-label": N.intl.string(N.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        h,
                                                        null == f
                                                            ? null
                                                            : (0, a.jsx)(lx.Ay.Icon, {
                                                                  icon: et.P,
                                                                  tooltip: N.intl.string(A.default.JD6Oit),
                                                                  onClick: f,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lx.Ay.Title, {
                                                    children: N.intl.string(N.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: mz.cb,
                                                children: (0, a.jsx)(
                                                    uf,
                                                    {
                                                        projectId: t,
                                                        restoreState: b,
                                                        onRestoreVersion: g,
                                                        onImportProject: x,
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
function mB(e) {
    var t;
    let l,
        r,
        u,
        { project: d, projectsLoaded: m, onBack: f, guildId: h } = e,
        [g, x] = i.useState(!0),
        [v, j] = i.useState(!1),
        b = nu(),
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
                                (0, n_.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, o.P0)({
                                                        text: N.intl.formatToPlainString(A.default.Z4n6LX, {
                                                            title: (0, nI.T4)(n.subject).short,
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
        })(d, w),
        _ = d?.id ?? null,
        {
            integrationStatus: M,
            isPreviewApplicationLoading: T,
            checkingIntegration: P,
            previewReady: R,
            hasFrame: L,
            needsPermissionReview: $,
            installAuthorizeProps: O,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                o = i.useRef(null);
            a.current = r;
            let u = (0, s.bG)([U.Ay], () => (null == r ? null : U.Ay.getIntegrationStatus(r)), [r]),
                { data: c, isLoading: d } = (0, nU.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                g = (0, n$.Qg)({
                    installScope: e?.install_scope ?? null,
                    previewReady: f,
                    integrationInstalled: u?.integration_installed ?? null,
                    botPermissionsChanged: u?.bot_permissions_changed === !0,
                }),
                p = i.useCallback(async () => {
                    if (null == r || a.current !== r) return;
                    o.current?.abort();
                    let e = new AbortController();
                    ((o.current = e), l(null));
                    try {
                        await (0, G.U1)(r, e.signal);
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
            let x = (0, ln.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ln.$)(e, x));
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
                              ...(0, ll.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(d, h),
        D = (0, s.bG)(
            [eZ.A],
            () =>
                null != _ &&
                (function (e) {
                    let t = new Set([N.intl.string(A.default.EMgIuY), N.intl.string(A.default.Zc7gML)]),
                        n = !1;
                    for (let l of e) {
                        if ("plan_implemented" === l.kind) return !0;
                        if ("assistant" === l.role) null != l.proposal && (n = !0);
                        else if (n && t.has(l.content.trim())) return !0;
                    }
                    return !1;
                })(eZ.A.getMessages(_)),
            [_],
        ),
        q = null != M && !R && !D,
        F = (0, s.bG)([lo.A], () => (null == _ ? void 0 : lo.A.getPublishStatus(_)?.previewAppChannels), [_]),
        {
            availability: z,
            activeMode: B,
            setMode: H,
            frameSurface: V,
            frameSurfaceOptions: K,
            setFrameSurface: J,
            appChannel: X,
            setAppChannel: Q,
            frameLaunchParams: Z,
            widgetApplicationId: et,
        } = (function (e) {
            var t, n, l;
            let {
                    applicationId: r,
                    previewApplicationId: a,
                    declaredActivity: o,
                    previewSupportedSurfaces: u,
                    installScope: c,
                    ownerAuthorizationRevoked: d,
                    mainCardOnly: m = !1,
                    supportsOverlay: f = !1,
                    previewAppChannels: h = nX,
                } = e,
                [g, p] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, w] = i.useState(r);
            y !== r && (w(r), p(null), v(null), b(null));
            let k = null != a && a === r ? a : null,
                A = (0, s.bG)([nV.default], () => nV.default.getId()),
                { applicationWidgetConfig: N } = (0, nG.A)(A, k ?? void 0),
                C = N?.surfaces,
                S = (0, n$.yZ)({
                    widgetTop: C?.[nz.m.WIDGET_TOP] != null,
                    widgetBottom: C?.[nz.m.WIDGET_BOTTOM] != null,
                    miniProfile: C?.[nz.m.MINI_PROFILE] != null,
                }),
                E = null != k && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, nU.YY)(a ?? void 0),
                _ = null != a && I?.bot?.id != null,
                { data: M, isLoading: T } = (0, nU.YY)(r ?? void 0),
                P = o || (0, nH.X)(M),
                R = null != r && T && null == M,
                L = (0, n$.P5)(u, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: _ },
                    widgetResolvable: null != k,
                    botDmResolvable: _,
                }),
                $ = (0, n$.Xm)({ installScope: c, ...L, hasOverlay: f, ownerAuthorizationRevoked: d }),
                O = i.useMemo(() => (0, nK.hR)(u), [u]),
                D = (0, nK.PH)(x, O),
                q =
                    ((t = j),
                    (n = D),
                    (l = h),
                    n !== nO.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                F = i.useMemo(() => (null == q ? void 0 : { customId: q }), [q]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, nW.Mm)(r)) {
                            let t = e.surface.type !== (0, nK.BR)(D),
                                n = (((0, nJ.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== q;
                            (t || n) && (0, nB.r)(e.id);
                        }
                }, [r, D, q]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, n$.Qs)(g, $),
                    setMode: p,
                    frameSurface: D,
                    frameSurfaceOptions: O,
                    setFrameSurface: v,
                    appChannel: q,
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
            supportsOverlay: d?.preview_supported_surfaces?.includes(nP.q7.OVERLAY) === !0,
            previewAppChannels: F,
        }),
        en =
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
                : nR);
    ((0, nL.x)(_, (e) => {
        z.modes.includes(e) && H(e);
    }),
        ns(_, () => {
            (x(!0), j(!0));
        }));
    let el = z.modes.includes("frame"),
        {
            previewTargetOptions: er,
            handleSelectPreviewTarget: ei,
            mobilePreview: es,
            mobilePreviewLabel: eo,
            handleToggleMobilePreview: eu,
            landscapePreview: ec,
            rotatePreviewLabel: ed,
            handleRotatePreview: em,
            previewSurface: ef,
            previewFrame: eh,
            isRefreshing: eg,
            handleRefresh: ep,
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
                                          t === nO.U.APP_CHANNEL && n.length > 1
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
                        ("frame" === e.mode && (u(e.surface), null != e.appChannel && c?.(e.appChannel)), o(e.mode));
                    },
                    [c, u, o],
                ),
                f = (0, s.bG)([li.A], () => li.A.isBuilderPreviewMobile()),
                h = N.intl.string(f ? A.default.tKGF0Q : A.default.peqEOY),
                g = i.useCallback(() => (0, ls.GG)(!f), [f]),
                p = (0, s.bG)([li.A], () => li.A.isBuilderPreviewLandscape()),
                x = N.intl.string(p ? A.default.tunI2l : A.default.DoNdjA),
                v = i.useCallback(() => (0, ls.Lw)(!p), [p]),
                j = (0, nW.jS)(t),
                b = i.useMemo(() => (0, nW.Op)(j, l), [j, l]),
                y = (0, la.A)(t?.preview_application_id ?? null, b),
                w = (0, nJ.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || lr.A.refreshProxyTicket(y.id);
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
            project: d,
            modes: z.modes,
            frameSurface: V,
            frameSurfaceOptions: K,
            previewAppChannels: F,
            setMode: H,
            setFrameSurface: J,
            setAppChannel: Q,
        }),
        ex = g && !v,
        ev = N.intl.string(ex ? A.default.JD6Oit : A.default.xjJAQm),
        ej = i.useCallback(() => {
            if (v) {
                (j(!1), x(!0));
                return;
            }
            x((e) => !e);
        }, [v]),
        eb = i.useCallback(() => x(!1), []),
        {
            designFeedbackActive: ey,
            designFeedbackToggleRef: ek,
            agentDrivingPreview: eA,
            designFeedbackLabel: eN,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = nE(e);
            i.useEffect(() => {
                null != e && l && !t && nA(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nc.Zv)(e),
                s = N.intl.string(a ? A.default.Sme0T0 : l ? A.default.vn5Rzu : A.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        let t;
                        if (l) return void nA(e);
                        (n(), (t = nw(e)).active || nk(e, { ...t, active: !0 }));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(_, el, w),
        eS = i.useCallback(() => {
            j((e) => !e && (x(!0), !0));
        }, []),
        eE = i.useCallback(() => j(!1), []),
        eI = i.useCallback(() => {
            var e, t;
            (null != d && ((e = d.id), (t = eh?.id), (0, p.Bn)(e), (0, nB.r)(t)), f());
        }, [d, eh?.id, f]),
        e_ =
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
                                n = S(e);
                            null != n
                                ? (0, o.P0)({ text: n, variant: "critical" })
                                : (0, eV.A)({
                                      title: N.intl.formatToPlainString(A.default["Gm+u1+"], { name: d.name }),
                                      subtitle: N.intl.string(A.default.M7H3sJ),
                                      confirmText: N.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          y();
                                          try {
                                              await C(t, e, N.intl.string(A.default.Owerd3));
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
        eM = i.useCallback(() => {
            null != d && (0, tW.A)(d, h);
        }, [d, h]),
        eT = (0, n$.JR)(B, $)
            ? { type: "permissions", authorizeProps: O }
            : P && null == M
              ? { type: "checking" }
              : void 0,
        eR = (0, s.bG)([U.Ay], () => null != _ && U.Ay.isProjectDeleting(_), [_]);
    i.useEffect(() => {
        ((null == d && m) || eR) && (0, c.bG)(eK.BVt.CHANNEL(h, eW.VV.CONJURE));
    }, [h, d, m, eR]);
    let {
            publishOptions: eL,
            publish: e$,
            publishing: eO,
            confirmation: eD,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...lp,
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
        })(_, h, P || T),
        eq = (0, lu.L)(e$?.status ?? null),
        eF =
            null == e$
                ? null
                : (0, a.jsx)("div", {
                      className: t5.As,
                      children: (0, a.jsx)(eP.m, {
                          text: eq,
                          asContainer: !0,
                          children: (0, a.jsx)(ee.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eO ? mH : null != eD ? t4.U : void 0,
                              disabled: e$.disabled,
                              onClick: () => e$.run("header"),
                              text: eD ?? e$.label,
                          }),
                      }),
                  }),
        ez = null == d ? void 0 : () => (0, tf.A)(d.id, { guildId: h, isPreview: !0, publishOptions: eL }),
        eG = (0, a.jsx)(tX, {
            title: d?.name ?? N.intl.string(A.default.G1WwgK),
            breadcrumb: { title: N.intl.string(A.default.uk6jhJ), onClick: f },
            project: d,
            onOpenProjectSettings: ez,
            actions:
                null == d
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t5.FO,
                          children: [
                              (0, a.jsx)(lt, {
                                  targets: er,
                                  target: (function (e, t) {
                                      let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                      return null == e
                                          ? null
                                          : "frame" !== e
                                            ? { mode: e }
                                            : null == n
                                              ? { mode: e, surface: t }
                                              : { mode: e, surface: t, appChannel: n };
                                  })(B, V, X),
                                  onChange: ei,
                              }),
                              el
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === B
                                                ? (0, a.jsx)(ea.A.Icon, {
                                                      icon: es ? mW : mK,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: es,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            es && "frame" === B
                                                ? (0, a.jsx)(ea.A.Icon, {
                                                      icon: mJ,
                                                      tooltip: ed,
                                                      "aria-label": ed,
                                                      selected: ec,
                                                      onClick: em,
                                                  })
                                                : null,
                                            (0, a.jsx)(ea.A.Icon, {
                                                ref: ek,
                                                icon: t8.x,
                                                iconClassName: t5.D8,
                                                tooltip: eN,
                                                "aria-label": eN,
                                                selected: ey,
                                                disabled: eA,
                                                onClick: eC,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === B
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(nr.A, { frame: eh }),
                                            (0, a.jsx)(n4, { frame: eh, controlProjectId: d.id }),
                                        ],
                                    })
                                  : null,
                              (0, a.jsx)("div", { className: t5.YJ }),
                              b
                                  ? (0, a.jsx)(ea.A.Icon, {
                                        icon: t9.BugIcon,
                                        tooltip: N.intl.string(A.default.Mt5k9d),
                                        "aria-label": N.intl.string(A.default.Mt5k9d),
                                        selected: v,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, a.jsx)(ea.A.Icon, {
                                  icon: tt.SettingsIcon,
                                  tooltip: N.intl.string(A.default.I2XSKe),
                                  "aria-label": N.intl.string(A.default.I2XSKe),
                                  onClick: ez,
                              }),
                              (0, a.jsx)(tS, {
                                  projectId: d.id,
                                  projectName: d.name,
                                  guildId: h,
                                  projectGuildId: d.guild_id,
                                  isOwner: (0, U.PV)(d),
                                  canRemix: (0, U.H_)(d),
                                  onRefresh: (0, nJ.x1)(eh) ? ep : void 0,
                                  isRefreshing: eg,
                                  onClose: eI,
                                  onExport: e_.onExport,
                                  onImport: e_.onImport,
                                  onRemix: eM,
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
                                          ? et
                                          : null,
                                  previewProjectId: d.id,
                              }),
                              ex
                                  ? null
                                  : (0, a.jsx)(ea.A.Icon, { icon: mV, tooltip: ev, "aria-label": ev, onClick: ej }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: W()(t5.nj, t7.T),
        children: [
            e_.importInput,
            (0, a.jsx)("main", {
                className: t5.JX,
                children:
                    null == d
                        ? (0, a.jsxs)("div", {
                              className: t5.j5,
                              children: [
                                  eG,
                                  (0, a.jsxs)("div", {
                                      className: t5.sD,
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
                                              onClick: () => (0, G.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(td.bI.Provider, {
                              value: eL,
                              children: (0, a.jsx)(
                                  mU,
                                  {
                                      projectId: d.id,
                                      designFeedbackToggleRef: ek,
                                      applicationId: d.preview_application_id,
                                      previewApplicationId: d.preview_application_id,
                                      surface: ef,
                                      frameLaunchParams: Z,
                                      header: eG,
                                      chatOpen: g,
                                      chatFullScreen: q && g,
                                      onCloseChat: eb,
                                      chatHeaderAction: eF,
                                      debugOpen: b && v,
                                      onCloseDebug: eE,
                                      onRestoreVersion: E,
                                      onImportProject: (0, U.PV)(d) ? e_.onImport : void 0,
                                      restoreState: k,
                                      previewReady: R,
                                      previewGate: eT,
                                      availability: z,
                                      activeMode: B,
                                      widgetApplicationId: et,
                                      overlayWidgetSize: en,
                                  },
                                  d.id,
                              ),
                          }),
            }),
        ],
    });
}
function mH() {
    return (0, a.jsx)(en.y, { type: en.t.SPINNING_CIRCLE_SIMPLE, className: t5.Hv, itemClassName: t5.C5 });
}
function mV(e) {
    return (0, a.jsx)(ne.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function mK(e) {
    return (0, a.jsx)(nt.u, { ...e, size: "custom", width: 20, height: 20 });
}
function mW(e) {
    return (0, a.jsx)(nn.k, { ...e, size: "custom", width: 20, height: 20 });
}
function mJ(e) {
    return (0, a.jsx)(nl.H, { ...e, size: "custom", width: 20, height: 20 });
}
function mX(e) {
    let t,
        { guildId: n, projectId: l } = e,
        r = (0, s.yK)([U.Ay], () => U.Ay.getOwnedProjects()),
        h = (0, s.yK)([d.Ay], () => d.Ay.getSelfMember(n)?.roles ?? [], [n]),
        g = (0, s.bG)(
            [m.A, f.A],
            () => {
                let e = m.A.getGuild(n);
                return null != e && f.A.can(eK.xBc.MANAGE_GUILD, e);
            },
            [n],
        ),
        [x, v] = i.useState(""),
        j = l ?? null,
        [b, y] = i.useState(!1),
        [w, k] = i.useState(null),
        E = (0, H.z9)("VibegrationsScreen"),
        [I, M] = i.useState(null),
        T = (0, u.o)().get(B.f_) === z;
    i.useEffect(() => {
        M(null);
    }, [n, T]);
    let P = i.useMemo(() => (!T && E.some((e) => e.id === n) ? n : z), [E, n, T]),
        R = I ?? P,
        L = R === z ? "user" : "guild",
        O = R === z ? n : R,
        [q, F] = i.useState(null);
    (i.useEffect(() => {
        (0, G.hF)(n);
    }, [n, h, g]),
        i.useEffect(() => {
            (0, G.dm)(n, j);
        }, [n, j]));
    let K = i.useCallback(
            async (e, t, n) => {
                let l = await (0, G.gA)({ guild_id: t, install_scope: n });
                ((0, p.Hc)(l),
                    (0, p.r2)(l, q ?? $),
                    e(l),
                    (0, c.pX)(eK.BVt.CHANNEL(t, eW.VV.CONJURE, l)),
                    v(""),
                    F(null));
            },
            [q],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? x).trim(),
                    n = D({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), k(null));
                    try {
                        await K((e) => (0, p.dv)(e, t), O, L);
                    } catch (e) {
                        k((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [K, L, O, x, b],
        ),
        J = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), k(null));
                    try {
                        await K(
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
                            O,
                            L,
                        );
                    } catch (e) {
                        k((0, _.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [K, L, O, b],
        ),
        X = i.useCallback(
            async (e, t) => {
                let n = await (0, G.gA)({ guild_id: t, install_scope: "guild" });
                return ((0, p.Hc)(n), (0, p.r2)(n, q ?? $), (0, p.dv)(n, (0, V.Wl)(e)), n);
            },
            [q],
        ),
        Y = i.useCallback(async (e, t, n, l) => {
            if (U.Ay.getProject(t)?.guild_id !== n) {
                let e = await (0, G.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new _.DS((0, _.hj)(e), e.status);
            }
            ((0, p.dv)(t, l, void 0, { templateId: e.id }), (0, c.pX)(eK.BVt.CHANNEL(n, eW.VV.CONJURE, t)), F(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, G.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = U.Ay.getProject(e)?.guild_id ?? n;
                ((0, c.pX)(eK.BVt.CHANNEL(t, eW.VV.CONJURE, e)), F(null));
            },
            [n],
        ),
        [ee, et] = i.useState(!1),
        en = i.useCallback(
            async (e, t) => {
                let l = S(e);
                if (null != l) return void (0, o.P0)({ text: l, variant: "critical" });
                et(!0);
                let r = null;
                try {
                    ((r = await (0, G.gA)({ guild_id: n, install_scope: t })),
                        (0, p.Hc)(r),
                        (0, p.r2)(r, q ?? $),
                        await C(r, e, N.intl.string(A.default["LUc7/5"])),
                        (0, c.pX)(eK.BVt.CHANNEL(n, eW.VV.CONJURE, r)),
                        F(null));
                } catch {
                    (null != r && (await (0, G.xx)(r).catch(() => void 0)),
                        (0, o.P0)({ text: N.intl.string(A.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, q],
        ),
        el = i.useCallback(
            (e) => {
                (0, c.pX)(eK.BVt.CHANNEL(n, eW.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, c.pX)(eK.BVt.CHANNEL(n, eW.VV.CONJURE));
        }, [n]),
        ea = i.useCallback((e) => {
            (v(e), k(null));
        }, []),
        ei = (0, s.bG)(
            [U.Ay],
            () => {
                if (null == j) return null;
                let e = U.Ay.getProject(j);
                return null == e || (0, U.PV)(e) || e.guild_id === n ? e : null;
            },
            [j, n],
        ),
        es = (0, s.bG)([U.Ay], () => U.Ay.hasFetchedGuildProjects(n), [n]);
    return null != j
        ? (0, a.jsx)(mB, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t6, {
              projects: r,
              modelSettings: q,
              onModelSettingsChange: F,
              idea: x,
              guildId: n,
              submitting: b,
              createError: w,
              createDisabled: "idea" === (t = D({ idea: x, installScope: L, submitting: b })) || "submitting" === t,
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
