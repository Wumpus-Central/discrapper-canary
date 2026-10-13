(n.r(t), n.d(t, { default: () => m9 }));
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
var A = n(248675),
    C = n(660183);
async function S(e, t, n) {
    (0, x.ensureConnection)(e);
    let l = await (0, p.vX)(e, t);
    (0, x.sendUserMessage)(e, n, [l]);
}
function E(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, g.Oq)(e.size, t)
        ? null
        : C.intl.formatToPlainString(A.default.ThxcOX, { size: (0, g.sM)((0, g.Ju)(t)) });
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
function _(e) {
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
    O = { tier: "balanced", provider: "openai" },
    D = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
function F(e) {
    let { idea: t, installScope: n, submitting: l } = e;
    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
}
var z = n(950305),
    q = n(548118);
let G = "user";
var U = n(371169),
    B = n(260498),
    V = n(941985),
    K = n(16619),
    H = n(952644);
n(321073);
var W = n(503698),
    J = n.n(W),
    X = n(97893),
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
    { value: "user", icon: z.UserIcon, nameMessage: A.default.s1TsXl },
    { value: "guild", icon: ed.R, nameMessage: A.default.LlLIJw },
];
function ef(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = _(i.useCallback((e) => n(e, "user"), [n])),
        s = _(i.useCallback((e) => n(e, "guild"), [n])),
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
                        "aria-label": C.intl.string(A.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(eu.rX, {
                            label: C.intl.string(A.default.NyVn6T),
                            children: em
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: C.intl.string(e.nameMessage),
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
                        text: C.intl.string(A.default.NJGZA3),
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
    eA = n(765548),
    eC = n(595528),
    eS = n(885576),
    eE = n(662429);
let eI = "heading-xxl/semibold",
    e_ = !1;
function eM() {
    let e = i.useRef(null),
        [t, n] = i.useState(!0),
        l = (0, eA.A)((e) => {
            n(e.target.clientWidth >= 500);
        }),
        r = (0, eN.w)(l, [], { fireOnMount: !0 }),
        s = (0, o.bG)([eC.A], () => eC.A.isConnected());
    i.useEffect(() => {
        if (!s || !t || e_) return;
        let n = !1,
            l = 0;
        function r() {
            n ||
                (l = window.setTimeout(() => {
                    ((e_ = !0), e.current?.play());
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
        ((c.current = u), t && e_ && (e.current?.stop(), e.current?.play()));
    }, [u]);
    let d = C.intl.string(A.default["+5XyCR"]);
    return (0, a.jsx)("div", {
        ref: r,
        className: eE.x,
        children: t
            ? (0, a.jsx)(ew.H, { children: (0, a.jsx)(ey.o, { ref: e, text: d, variant: eI, delay: null }) })
            : (0, a.jsx)(ek.D, { variant: eI, children: d }),
    });
}
var eT = n(900797),
    eP = n(320448),
    eR = n(866665),
    eL = n(783977),
    e$ = n(344587),
    eO = n(534554),
    eD = n(392208),
    eF = n(837984),
    ez = n(359589),
    eq = n(254575);
function eG(e) {
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
        [d, m] = i.useState(!1),
        f = eG(d),
        h = eD.P.indexOf(t.tier),
        g = d ? eT.t : eP._,
        p = eD.P.map(eO.D0),
        x = (0, eO.Tc)(t.tier),
        { text: v, phase: j } = (0, e$.Q)(x);
    return (0, a.jsx)("div", {
        className: eq.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: J()(eq.t$, { [eq.Zr]: u && c, [eq.GF]: !u }),
            role: "dialog",
            "aria-label": C.intl.string(A.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: J()(eq.Nr, eq.uO, { [eq.Zr]: d && f.entered, [eq.GF]: !d }),
                          children: (0, a.jsx)(ez.bR, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
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
                                    "aria-label": C.intl.string(A.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: C.intl.string(A.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
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
                                    className: J()(eq.Z, { [eq.xQ]: "exit" === j, [eq.lm]: "enter" === j }),
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
                                            children: C.intl.string(A.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: C.intl.string(A.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(eF.A, {
                                    activeIndex: h,
                                    stops: p,
                                    ariaLabel: C.intl.string(A.default.aBPQxX),
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
        [d, m] = (0, ez.FT)(t, s),
        [f, h] = i.useState(!1),
        { mounted: g, entered: p } = eG(f);
    return (0, a.jsx)(es.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: g,
        onRequestClose: () => h(!1),
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(eU, {
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
                text: C.intl.string(A.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(eh.D, {
                    innerRef: c,
                    className: o ?? eq.hZ,
                    "aria-label": C.intl.string(A.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(eL.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var eV = n(140735),
    eK = n(442433),
    eH = n(314116),
    eW = n(652215),
    eJ = n(746080),
    eX = n(855793),
    eY = n(434279),
    eQ = n(287809),
    eZ = n(427262),
    e0 = n(245179),
    e1 = n(803306);
let e2 = new Set(),
    e3 = new Map();
function e7(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function e5(e) {
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
            ? C.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName })
            : C.intl.formatToPlainString(A.default.x6FvsZ, { app: n.appName });
    async function j() {
        (d(!0), f(null));
        let e = h ? (0, U.xx)(t.id) : (0, tb.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (d(!1), l?.ok !== !0)
            ? f(C.intl.string(h ? A.default["0XDHob"] : A.default.PJ2Fkn))
            : (h || (0, u.P0)({ text: (0, tp.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(tx.a, {
        ...r,
        role: "alertdialog",
        title: h ? v : (0, tp.WX)((0, ty.tb)(A.default.x6FvsZ, n.appName)),
        subtitle: h ? (0, tp.J)(n) : C.intl.string(A.default["8OKM1N"]),
        "aria-label": v,
        notice: null == m ? void 0 : { message: m, type: "critical" },
        actions: [
            { text: C.intl.string(C.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: C.intl.string(h ? A.default.aC42bN : A.default.BGF8VT),
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
var tN = n(552821);
let tA = [];
function tC(e) {
    (0, u.P0)({ text: e, variant: "critical" });
}
function tS(e) {
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
                                          ? C.intl.string(A.default["jCQ/1B"])
                                          : C.intl.string(A.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(b ?? null, tC),
        _ = (0, o.bG)([tf.A], () => (null == b ? tA : tf.A.getDeclaredConnections(b))),
        M = i.useMemo(() => (0, to.Xl)(_), [_]),
        T = (0, tp.Bs)(t),
        P = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: C.intl.string(A.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: C.intl.formatToPlainString(A.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: C.intl.formatToPlainString(A.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != j, refreshPending: N, offers: M, connectPending: E }),
        R = i.useMemo(() => new Map(_.map((e) => [e.type, e])), [_]),
        L = null != f && c,
        $ = s && null != m,
        O = L || null != d || $ || null != h || null != g,
        D = ts.p5 && null != l,
        F = ts.p5,
        z = w ? e6.BellIcon : e4.BellSlashIcon;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": C.intl.string(C.t.ogxXGq),
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
                                    label: C.intl.string(A.default["p4B/7M"]),
                                    disabled: x,
                                    action: p,
                                })
                              : null,
                          null != v
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "close",
                                    icon: e9.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: e9.DoorExitIcon },
                                    label: C.intl.string(A.default["/TlGcK"]),
                                    action: v,
                                })
                              : null,
                      ],
                  })
                : null,
            P.length > 0
                ? (0, a.jsx)(eu.rX, {
                      children: P.map((e) =>
                          (0, a.jsx)(
                              eu.Dr,
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
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.Dr, {
                    id: "mute",
                    label: C.intl.string(w ? A.default.s9rCuH : A.default["a+i/As"]),
                    icon: z,
                    leadingAccessory: { type: "icon", icon: z },
                    action: () => (0, tg.$L)(t, !w),
                }),
            }),
            O
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          L
                              ? (0, a.jsx)(eu.Dr, { id: "remix", label: C.intl.string(A.default.XWgAfc), action: f })
                              : null,
                          null != d
                              ? (0, a.jsx)(eu.Dr, { id: "export", label: C.intl.string(A.default.WsEEP7), action: d })
                              : null,
                          $
                              ? (0, a.jsx)(eu.Dr, { id: "import", label: C.intl.string(A.default.rWGY3e), action: m })
                              : null,
                          null != h
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "connect-tool",
                                    label: C.intl.string(A.default.yOIql5),
                                    action: h,
                                })
                              : null,
                          null != g
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "history",
                                    label: C.intl.string(A.default["3hIVou"]),
                                    action: g,
                                })
                              : null,
                      ],
                  })
                : null,
            F
                ? (0, a.jsxs)(eu.rX, {
                      children: [
                          D
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "copy-link",
                                    label: C.intl.string(C.t.WqhZss),
                                    icon: te.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: te.LinkIcon },
                                    action: () =>
                                        (0, ts.C)((0, ti.n)(l, eJ.VV.CONJURE, t), () =>
                                            (0, u.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(eu.Dr, {
                              id: "copy-project-id",
                              label: C.intl.string(A.default["nm/zuU"]),
                              icon: tt.L,
                              leadingAccessory: { type: "icon", icon: tt.L },
                              action: () =>
                                  (0, ts.C)(t, () =>
                                      (0, u.P0)({ text: C.intl.string(A.default.CmfaZG), variant: "success" }),
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
                                    label: C.intl.string(A.default.FzfmQ8),
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
                          T?.canRemoveBot === !0
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "remove-from-server",
                                    label: C.intl.formatToPlainString(A.default["3gKG2j"], { server: T.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        null != e && tk({ project: e, target: T, action: "remove" });
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(eu.Dr, {
                                    id: "delete",
                                    label: C.intl.string(C.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = B.Ay.getProject(t);
                                        if (null != e && null != T) tk({ project: e, target: T, action: "delete" });
                                        else
                                            (0, eH.A)({
                                                title: C.intl.formatToPlainString(A.default.CJBhb2, { name: n }),
                                                subtitle: C.intl.string(A.default["0OmrVn"]),
                                                confirmText: C.intl.string(C.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, U.K)(t, () =>
                                                        (0, u.P0)({
                                                            text: C.intl.string(A.default["0XDHob"]),
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
function tE(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: es.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(tS, { ...n, onCloseMenu: t });
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
                              text: C.intl.string(C.t["UKOtz+"]),
                              children: (0, a.jsx)(tl.K, {
                                  icon: tr.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": C.intl.string(C.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(ei.A.Icon, {
                              icon: tr.MoreHorizontalIcon,
                              tooltip: C.intl.string(C.t["UKOtz+"]),
                              "aria-label": C.intl.string(C.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var tI = n(497183),
    t_ = n(104171),
    tM = n(286739);
function tT(e) {
    let { creator: t, className: n } = e;
    return (0, a.jsx)("div", {
        className: J()(tM.c, n),
        "aria-hidden": !0,
        children: (0, a.jsx)(t_.Ay, { users: [t.creator, ...t.collaborators], max: 3, size: t_.DN.SIZE_16 }),
    });
}
var tP = n(217846),
    tR = n(536637),
    tL = n.n(tR),
    t$ = n(941650);
function tO(e) {
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
                    (0, u.P0)({ text: C.intl.formatToPlainString(A.default.aN2JdD, { name: l }) }),
                    I(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[vibegrations] project export failed", n, e),
                                (0, u.P0)({
                                    text:
                                        409 === (t = e instanceof k ? e.status : null)
                                            ? C.intl.string(A.default["9oqbEw"])
                                            : 404 === t
                                              ? C.intl.string(A.default["0W8uLq"])
                                              : C.intl.string(A.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: s,
                onImport: (c = _(
                    i.useCallback(
                        (e) => {
                            let t = E(e);
                            null != t
                                ? (0, u.P0)({ text: t, variant: "critical" })
                                : (0, eH.A)({
                                      title: C.intl.formatToPlainString(A.default["Gm+u1+"], { name: l }),
                                      subtitle: C.intl.string(A.default.M7H3sJ),
                                      confirmText: C.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, d.pX)(eW.BVt.CHANNEL(j, eJ.VV.CONJURE, n));
                                          try {
                                              await S(n, e, C.intl.string(A.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: C.intl.string(A.default["Q+l4Hv"]),
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
        M =
            null == v.updated_at
                ? null
                : C.intl.formatToPlainString(A.default.AXydi3, { time: tL()(v.updated_at).fromNow() }),
        T = (0, eY.wu)(v),
        P =
            (0, o.bG)([f.A], () => (null == T ? null : (f.A.getGuild(T)?.name ?? null)), [T]) ??
            C.intl.string(A.default["3QFps8"]),
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
                null != h && (e5(h), g.forEach(e5));
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
                                      ? C.intl.formatToPlainString(A.default.t5RWBS, { creator: e })
                                      : C.intl.formatToPlainString(A.default["b5uCe/"], {
                                            creator: e,
                                            collaborators:
                                                0 === (n = void 0 ?? t.length)
                                                    ? ""
                                                    : 1 === n
                                                      ? C.intl.formatToPlainString(C.t["8s9z8P"], { first: t[0] })
                                                      : 2 === n
                                                        ? C.intl.formatToPlainString(C.t["i0K/dw"], {
                                                              first: t[0],
                                                              second: t[1],
                                                          })
                                                        : 3 === n
                                                          ? C.intl.formatToPlainString(C.t["/KSOKY"], {
                                                                first: t[0],
                                                                second: t[1],
                                                                third: t[2],
                                                            })
                                                          : C.intl.formatToPlainString(C.t.xpU76u, {
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
        O = (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", className: t$.j1, children: v.name }),
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
        className: J()(t$.OY, { [t$.Wy]: R }),
        "aria-busy": R,
        children: [
            (0, a.jsx)(eX.Ay, { projectId: v.id }),
            R ? null : (0, a.jsx)(tP.a, { projectId: v.id }),
            (0, a.jsxs)(eh.D, {
                className: t$.W6,
                onClick: R ? void 0 : b,
                onContextMenu: function (e) {
                    R || (0, eK.jA)(e, () => (0, a.jsx)(tS, { ...D, onCloseMenu: eK.Z_ }));
                },
                tabIndex: R ? -1 : void 0,
                "aria-describedby": null != L ? $ : void 0,
                children: [
                    (0, a.jsx)(tI.A, { project: v, size: "card", className: t$.VJ }),
                    (0, a.jsxs)("div", {
                        className: t$.MM,
                        children: [
                            (0, a.jsxs)("div", {
                                className: t$.Ub,
                                children: [
                                    null != L ? (0, a.jsx)(eR.m, { text: L.label, ariaHidden: !0, children: O }) : O,
                                    null == L || R ? null : (0, a.jsx)(tT, { creator: L, className: t$.rb }),
                                    R ? null : (0, a.jsx)(tP.n, { projectId: v.id, className: t$.fs }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                className: t$.h3,
                                children: [
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        className: t$.Wb,
                                        children: R ? C.intl.string(A.default.Yh5pAc) : P,
                                    }),
                                    null == M || R
                                        ? null
                                        : (0, a.jsxs)(a.Fragment, {
                                              children: [
                                                  (0, a.jsx)("span", {
                                                      className: t$.cy,
                                                      "aria-hidden": !0,
                                                      children: "\u2022",
                                                  }),
                                                  (0, a.jsx)(Q.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: t$.zM,
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
            null != L ? (0, a.jsx)(eV.A, { id: $, children: L.label }) : null,
            (0, a.jsx)("div", {
                className: t$.M2,
                children: R
                    ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE })
                    : (0, a.jsxs)("div", {
                          className: t$.Pl,
                          children: [(0, a.jsx)(tE, { ...D, trigger: "iconButton" }), N.importInput],
                      }),
            }),
        ],
    });
}
var tD = n(246338);
let tF = "user",
    tz = "no-server",
    tq = new Map();
function tG(e) {
    return tq.get(e) ?? null;
}
function tU(e) {
    switch (e) {
        case "all":
        case tF:
        case tz:
            return null;
        default:
            return e;
    }
}
function tB(e, t) {
    switch (t) {
        case "all":
            return !0;
        case tF:
            return "user" === e.install_scope;
        case tz:
            return null == (0, eY.wu)(e);
        default:
            return e.guild_id === t || e.preview_guild_id === t;
    }
}
var tV = n(506774);
let tK = "VibegrationsProjectsPanelOpen";
function tH() {
    return tV.w.get(tK) ?? null;
}
function tW(e) {
    return `VibegrationsProjectsPanel:${e}`;
}
var tJ = n(95264),
    tX = n(631417);
function tY(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i } = e,
        s = C.intl.string(A.default.FzfmQ8);
    return (0, a.jsx)(ei.A, {
        hideSearch: !0,
        toolbar: n,
        className: tX.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: tX.QF,
            children: [
                (0, a.jsx)(er.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: ea.A.colors.TEXT_STRONG,
                    className: tX.Kk,
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
                              className: tX.FF,
                              onClick: i,
                              "aria-label": s,
                              children: (0, a.jsx)(tI.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(ei.A.Title, { className: tX.Qw, wrapperClassName: tX.DD, children: t }),
            ],
        }),
    });
}
var tQ = n(683071),
    tZ = n(47167),
    t0 = n(808728),
    t1 = n(994500);
let t2 = "conjuring-help";
var t3 = n(173114);
function t7() {
    let e = (function () {
            let {
                isStaff: e,
                guildId: t,
                channelId: n,
            } = (0, o.cf)([eQ.default, f.A, t0.Ay, t1.A], () => {
                let e = eQ.default.getCurrentUser()?.isStaff() ?? !1;
                if (!e) return { isStaff: e, guildId: null, channelId: null };
                for (let t of f.A.getGuildsArray()) {
                    if (!t.features.has(eW.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) continue;
                    let n = t0.Ay.getSelectableChannels(t.id).find((e) => {
                        let { channel: t } = e;
                        return (0, tZ.m1)(t, eQ.default, t1.A) === t2;
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
              className: t3.l,
              children: (0, a.jsx)(tQ.w, {
                  type: "info",
                  iconAlign: "center",
                  message: C.intl.format(A.default["6anmu1"], { channel: t2, onNavigate: t }),
                  role: "static",
              }),
          });
}
var t5 = n(606128),
    t6 = n(323140);
function t4(e) {
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
        [_, M] = i.useState(() => ({ guildId: r, filter: tG(r) })),
        P = (_.guildId === r ? _.filter : tG(r)) ?? r,
        L = i.useCallback(
            (e) => {
                (tq.set(r, e), M({ guildId: r, filter: e }));
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
        V = i.useMemo(
            () => [
                { id: "conjure-filter-all", value: "all", leading: er.D, label: C.intl.string(A.default["Xi/oIC"]) },
                { id: "conjure-filter-user", value: tF, leading: z.UserIcon, label: C.intl.string(A.default.kCSgmG) },
                { id: "conjure-filter-no-server", value: tz, leading: ed.R, label: C.intl.string(A.default["3QFps8"]) },
                ...F.map((e) => ({
                    id: `conjure-filter-guild-${e.id}`,
                    value: e.id,
                    leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                    label: e.name,
                })),
            ],
            [F],
        ),
        K = (0, o.yK)(
            [B.Ay, f.A],
            () => {
                let e = tU(P);
                if (null != e) return B.Ay.getSharedProjects(e);
                let t = [];
                for (let e of Object.values(f.A.getGuilds()))
                    B.Ay.hasFetchedGuildProjects(e.id) && t.push(...B.Ay.getSharedProjects(e.id));
                return t;
            },
            [P],
        );
    i.useEffect(() => {
        let e = tU(P);
        null == e || B.Ay.hasFetchedGuildProjects(e) || (0, U.hF)(e);
    }, [P]);
    let H = i.useMemo(
            () =>
                K.filter((e) => tB(e, P)).sort((e, t) =>
                    null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                ),
            [K, P],
        ),
        W = i.useMemo(
            () => [
                {
                    label: C.intl.string(A.default.NyVn6T),
                    options: [
                        {
                            id: "conjure-target-user",
                            value: G,
                            label: C.intl.string(A.default.UPLaGM),
                            leading: z.UserIcon,
                        },
                        ...g.map((e) => ({
                            id: `conjure-target-${e.id}`,
                            value: e.id,
                            label: e.name,
                            leading: (0, a.jsx)(q.Ay, { guild: e, size: q.Ay.Sizes.MINI, active: !0 }),
                        })),
                    ],
                },
            ],
            [g],
        ),
        es = i.useMemo(
            () =>
                t
                    .filter((e) => tB(e, P))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, P],
        ),
        eo = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, tD.Ot)(e, r)
                    ? v(e.id)
                    : (0, u.P0)({ text: C.intl.string(A.default["XUl/cs"]) });
            },
            [r, v],
        ),
        eu = C.intl.string(A.default.ab1sMf),
        ec = [C.intl.string(A.default["9w+Chc"]), C.intl.string(A.default.WAvmdq), C.intl.string(A.default.SKsrzl)],
        em = [
            {
                id: "moderation-bot",
                name: C.intl.string(A.default.lGLnE8),
                description: C.intl.string(A.default["pAC6k/"]),
                wizard: !0,
            },
            {
                id: "feature-showcase",
                name: C.intl.string(A.default.uJKQTs),
                description: C.intl.string(A.default["+dKy/B"]),
            },
            { id: "rust-sphere", name: C.intl.string(A.default.iF5Oru), description: C.intl.string(A.default.NbDDO6) },
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
        ep = C.intl.string(A.default.zzYLlW),
        ex =
            (i.useEffect(() => {
                (0, U.b8)();
            }, []),
            (0, o.bG)([B.Ay], () => {
                let e = B.Ay.getMaxProjects();
                return null != e && B.Ay.hasFetchedOwnedProjects()
                    ? Math.max(0, e - B.Ay.getOwnedProjects().length)
                    : null;
            })),
        ey = C.intl.string(A.default["2XcV3x"]),
        ew = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), d || b());
            },
            [d, b],
        ),
        ek = tU(P) ?? r,
        eN = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(ek), [ek]),
        eA = (0, o.bG)([B.Ay], () => B.Ay.getGuildProjectsFetchState(r), [r]),
        [eC, eS] = i.useState(tH),
        eE = i.useMemo(() => tV.w.get(tW(r)) ?? !1, [r]),
        eI = "success" === eA,
        e_ = (0, o.yK)([B.Ay], () => B.Ay.getSharedProjects(r), [r]).length > 0 || t.some((e) => tB(e, r)),
        eT = eC ?? (!!e_ || "error" === eA || (!eI && eE));
    i.useEffect(() => {
        eI && tV.w.set(tW(r), e_);
    }, [eI, e_, r]);
    let eP = i.useCallback((e) => {
            (tV.w.set(tK, e), eS(e));
        }, []),
        eR = i.useCallback(() => eP(!eT), [eP, eT]),
        eL = i.useCallback(() => eP(!1), [eP]),
        e$ = C.intl.string(A.default.kar7jh),
        eO = eT ? e$ : C.intl.string(A.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: J()(t6.nj, t6.a0, t5.T),
        children: (0, a.jsxs)("div", {
            className: t6.Yo,
            children: [
                (0, a.jsxs)("main", {
                    className: t6.ps,
                    children: [
                        (0, a.jsx)(tY, {
                            title: C.intl.string(A.default.uk6jhJ),
                            actions: (0, a.jsx)(ei.A.Icon, {
                                icon: X.Z,
                                tooltip: eO,
                                "aria-label": eO,
                                selected: eT,
                                onClick: eR,
                            }),
                        }),
                        (0, a.jsx)(Y.Ip, {
                            className: t6.Yy,
                            children: (0, a.jsx)("div", {
                                className: t6.Mo,
                                children: (0, a.jsxs)("section", {
                                    className: J()(t6.Qs, t6.Ix),
                                    children: [
                                        (0, a.jsx)(t7, {}),
                                        (0, a.jsx)(eM, {}),
                                        (0, a.jsxs)("section", {
                                            className: t6.WI,
                                            "aria-label": ep,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t6.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ep,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: C.intl.string(A.default["N88+Ld"]),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t6.Aw,
                                                    radius: ev,
                                                    children: em.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, a.jsxs)(eg, {
                                                                    disabled: s,
                                                                    ariaLabel: C.intl.formatToPlainString(
                                                                        A.default.jGyR6p,
                                                                        { name: e.name },
                                                                    ),
                                                                    className: J()(t6.nx, t6.rz),
                                                                    onClick: () => eh(e),
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t6.tG,
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            children: e.name,
                                                                        }),
                                                                        (0, a.jsx)(Q.E, {
                                                                            className: t6.BK,
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
                                            className: t6.WI,
                                            "aria-label": ey,
                                            children: [
                                                (0, a.jsxs)("div", {
                                                    className: t6.G9,
                                                    children: [
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-md/medium",
                                                            color: "text-strong",
                                                            children: ey,
                                                        }),
                                                        (0, a.jsx)(Q.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: C.intl.string(A.default.JnJOAn),
                                                        }),
                                                    ],
                                                }),
                                                (0, a.jsx)(eb, {
                                                    listClassName: t6.Aw,
                                                    radius: ej,
                                                    children: ec.map((e) =>
                                                        (0, a.jsx)(
                                                            "li",
                                                            {
                                                                className: t6.EA,
                                                                children: (0, a.jsx)(eg, {
                                                                    disabled: s,
                                                                    className: t6.nx,
                                                                    onClick: () => b(e),
                                                                    children: (0, a.jsx)(Q.E, {
                                                                        variant: "text-md/semibold",
                                                                        color: "text-strong",
                                                                        className: t6.un,
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
                            className: t6.Yl,
                            children: (0, a.jsxs)("div", {
                                className: J()(t6.Qs, t6.DA),
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
                                        className: t6.VP,
                                        children: [
                                            (0, a.jsx)("div", {
                                                className: t6.gH,
                                                children: (0, a.jsx)(ee.l, {
                                                    selectionMode: "single",
                                                    label: C.intl.string(A.default.NyVn6T),
                                                    hideLabel: !0,
                                                    placeholder: C.intl.string(A.default.NyVn6T),
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
                                                              ? C.intl.string(A.default.s28pGG)
                                                              : C.intl.formatToPlainString(A.default.Wy5aK4, {
                                                                    count: ex,
                                                                }),
                                                  })
                                                : null,
                                            (0, a.jsx)(eB, {
                                                settings: p ?? O,
                                                tiers: D,
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
                                                text: C.intl.string(C.t.CumH4u),
                                                disabled: d,
                                                loading: s,
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
                    className: t6.pA,
                    hidden: !eT,
                    "aria-label": C.intl.string(A.default.dWgSAa),
                    children: [
                        (0, a.jsxs)("div", {
                            className: t6.IR,
                            children: [
                                (0, a.jsx)(Q.E, {
                                    variant: "text-md/medium",
                                    color: "text-strong",
                                    className: t6.RM,
                                    children: C.intl.string(A.default.dWgSAa),
                                }),
                                (0, a.jsxs)("div", {
                                    className: t6.Ss,
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
                            className: t6.xe,
                            children: [
                                (0, a.jsx)("div", {
                                    className: t6.Vw,
                                    children: (0, a.jsx)(ee.l, {
                                        selectionMode: "single",
                                        label: C.intl.string(A.default.U6TqU9),
                                        hideLabel: !0,
                                        options: V,
                                        value: P,
                                        onSelectionChange: L,
                                    }),
                                }),
                                (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    className: t6.wE,
                                    children: C.intl.string(A.default.JQpNkh),
                                }),
                                ("unattempted" === eN || "loading" === eN) && 0 === es.length
                                    ? (0, a.jsx)("div", { className: t6.E8, children: (0, a.jsx)(el.y, {}) })
                                    : "error" === eN && 0 === es.length
                                      ? (0, a.jsxs)("div", {
                                            className: t6.E8,
                                            children: [
                                                (0, a.jsx)(Q.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    className: t6.JS,
                                                    children: C.intl.string(A.default.DJAPMO),
                                                }),
                                                (0, a.jsx)(et.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: C.intl.string(A.default["WFJ/vb"]),
                                                    onClick: () => (0, U.hF)(ek),
                                                }),
                                            ],
                                        })
                                      : 0 === es.length
                                        ? (0, a.jsx)("div", {
                                              className: t6.D1,
                                              children: (0, a.jsxs)("div", {
                                                  className: t6.ST,
                                                  children: [
                                                      (0, a.jsx)(er.D, { size: "lg", color: ea.A.colors.TEXT_SUBTLE }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          className: t6.sI,
                                                          children: C.intl.string(A.default["9/5sLV"]),
                                                      }),
                                                  ],
                                              }),
                                          })
                                        : (0, a.jsx)("div", {
                                              className: t6.Dq,
                                              children: es.map((e) =>
                                                  (0, a.jsx)(
                                                      tO,
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
                                          className: t6.qx,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: t6.uc,
                                                  children: [
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-md/medium",
                                                          color: "text-strong",
                                                          children: C.intl.string(A.default["wFi8+o"]),
                                                      }),
                                                      (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-subtle",
                                                          children: C.intl.string(A.default.dQ3U1J),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: t6.Dq,
                                                  children: H.map((e) =>
                                                      (0, a.jsx)(
                                                          tO,
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
var t8 = n(478016),
    t9 = n(604525),
    ne = n(92446),
    nt = n(534890),
    nn = n(646270),
    nl = n(31300),
    nr = n(831453),
    na = n(270593);
let ni = new Set(),
    ns = null;
function no(e, t) {
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
                ni.add(t),
                () => {
                    ni.delete(t);
                }
            );
        }, [e]));
}
var nu = n(885386);
function nc() {
    return nu.Q_.useSetting() || !1;
}
var nd = n(573083);
let nm = Object.freeze({ x: 0.5, y: 0.5 });
function nf(e) {
    return "" !== e.trim();
}
function nh(e) {
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
function ng(e) {
    let { kind: t, name: n } = nh(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function np(e) {
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
let nx = "[vibegrations:selected] ",
    nv = " \u2014 ";
function nj(e) {
    if (!e.startsWith(nx)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nx.length),
        a = r.indexOf(nv),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nb = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    ny = new Map(),
    nw = new Set();
function nk(e) {
    return ny.get(e) ?? nb;
}
function nN(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? ny.set(e, t) : ny.delete(e), [...nw]))
        try {
            n();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function nA(e) {
    ny.has(e) && nN(e, nb);
}
function nC(e, t) {
    let n = nk(e);
    n.active && nN(e, { ...n, context: t });
}
function nS(e, t) {
    return null != t && e.authorId === t;
}
function nE(e) {
    return (
        nw.add(e),
        () => {
            nw.delete(e);
        }
    );
}
function nI(e) {
    let t = i.useCallback(() => (null == e ? nb : nk(e)), [e]);
    return i.useSyncExternalStore(nE, t, t);
}
var n_ = n(128761),
    nM = n(12177),
    nT = n(967008);
(n(134528), n(947204));
var nP = n(886540),
    nR = n(951178);
let nL = { width: 320, height: 240 };
var n$ = n(855859),
    nO = n(238490),
    nD = n(991690),
    nF = n(696645);
function nz(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function nq(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, nF.XV)(e.surface)
                : C.intl.formatToPlainString(A.default["6xVl+N"], {
                      surface: (0, nF.XV)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return C.intl.string(A.default.y5GiL1);
        case "overlay":
            return C.intl.string(A.default["2940LX"]);
        case "bot":
            return C.intl.string(A.default.tjpaGN);
    }
}
var nG = n(598748),
    nU = n(294323),
    nB = n(627363),
    nV = n(457827),
    nK = n(25451),
    nH = n(280450),
    nW = n(373677),
    nJ = n(754027),
    nX = n(165610);
let nY = [];
var nQ = n(86147),
    nZ = n(729475),
    n0 = n(91242),
    n1 = n(869146),
    n2 = n(475815),
    n3 = n(621466);
function n7(e) {
    return null == e ? null : document.querySelector(`[data-frame-id="${CSS.escape(e)}"]`);
}
function n5(e) {
    let t, n;
    return (
        null != e &&
        ((n =
            (t = document).fullscreenElement ??
            t.webkitFullscreenElement ??
            t.mozFullScreenElement ??
            t.msFullscreenElement ??
            null),
        ((0, n3.vq)(n, Element) ? n.getAttribute("data-frame-id") : null) === e)
    );
}
function n6(e) {
    return (0, n2.a3)(document, e);
}
function n4(e) {
    return i.useSyncExternalStore(n6, () => n5(e));
}
function n8(e) {
    let { frame: t, controlProjectId: n } = e,
        l = n4(t?.id ?? null),
        r = (0, nd.Zv)(n),
        i = (0, o.bG)(
            [n1.A, n0.A],
            () => null != t && n1.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT) && n0.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, nX.x1)(t) || i || r) return null;
    let s = n7(t.id);
    if (null == s || !(0, n2.Ub)(s)) return null;
    let u = C.intl.string(l ? C.t.Z7MyNB : C.t.OIDkcp);
    return (0, a.jsx)(ei.A.Icon, {
        tooltip: u,
        icon: l ? nQ.z : nZ.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => {
            var e;
            let n;
            null != (n = n7((e = t.id))) && (0, n2.Ub)(n) && (n5(e) ? (0, n2.sP)(n) : (0, n2.tl)(n));
        },
    });
}
var n9 = n(559106),
    le = n(847374),
    lt = n(704745);
function ln(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = C.intl.string(A.default.I2ucou);
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
                        let t = nz(e);
                        return (0, a.jsx)(
                            eu.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: nq(e),
                                checked: t === nz(n),
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
            return (0, a.jsx)(n9.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lt.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: C.intl.string(A.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: nq(n),
                        }),
                        (0, a.jsx)(le.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var ll = n(803101),
    lr = n(226178),
    la = n(625180),
    li = n(672929),
    ls = n(111534),
    lo = n(513845),
    lu = n(722701),
    lc = n(949616),
    ld = n(535466),
    lm = n(321032),
    lf = n(277085);
function lh(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: o } = e,
        { iconURL: u } = (0, ld.Ay)(t),
        [c, d] = i.useState(n),
        [m, f] = i.useState(l),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        [v, j] = i.useState(!1),
        b = c.trim(),
        y = b === n ? null : (0, lf.p)(b),
        w = h ?? u;
    function k() {
        (r(), o());
    }
    async function N(e) {
        if ((e.preventDefault(), v || null != y)) return;
        (j(!0), x(null));
        let r = await (0, tm.$l)(t, { name: b, icon: h, description: m }, { name: n, description: l });
        (j(!1), r) ? k() : x(C.intl.string(A.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: N,
        children: (0, a.jsx)(tx.a, {
            transitionState: s,
            onClose: o,
            title: C.intl.string(A.default.OmOWDq),
            subtitle: C.intl.string(A.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: C.intl.string(A.default["bz/M68"]), variant: "secondary", onClick: k, disabled: v },
                {
                    text: C.intl.string(A.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: v,
                    disabled: null != y,
                },
            ],
            children: (0, a.jsxs)(tv.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(lm.r, {
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
var lg = n(516288);
function lp(e) {
    let { reason: t, message: n, onConfirm: l, transitionState: r, onClose: i } = e,
        s = (0, lg.t)(t, n);
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
let lx = {
    showPublishBlocked: function (e, t, n) {
        (0, tj.openModal)((l) => (0, a.jsx)(lp, { ...l, reason: e, message: t, onConfirm: n }));
    },
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tj.openModal)(
                (t) =>
                    (0, a.jsx)(lh, {
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
var lv = n(58736),
    lj = n(308081),
    lb = n(73153);
function ly(e) {
    lb.h.dispatch({ type: "CONJURE_CHAT_SIDEBAR_WIDTH_SET", width: e });
}
var lw = n(689175),
    lk = n(65593),
    lN = n(115982);
function lA(e) {
    return !(0, nP.BL)(e) && !0 !== e.stopRequested;
}
var lC = n(104317),
    lS = n(643278),
    lE = n(566424),
    lI = n(683063),
    l_ = n(138212);
function lM(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: J()(l_.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: J()(l_.wx, null != n && l_.o5, i),
                children: [
                    (0, a.jsx)(Q.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var lT = n(148590);
function lP(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function lR(e) {
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
        v = f ? le.a : eP._,
        j = null != n || l;
    return (0, a.jsxs)(lM, {
        ...d,
        title: t,
        trailing: j
            ? (0, a.jsxs)("span", {
                  className: lT.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(eh.D, {
                                className: lT.L$,
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
        headerClassName: f ? void 0 : lT.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: J()(lT.rf, o), hidden: !f, children: c })],
    });
}
var lL = n(883646);
let l$ = [];
function lO(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: J()(lL.xL, {
            [lL.Vb]: "in_progress" === t,
            [lL.cT]: "completed" === t,
            [lL.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return C.intl.string(A.default.KvBdun);
                case "in_progress":
                    return C.intl.string(A.default["m5G9+S"]);
                case "unfinished":
                    return C.intl.string(A.default.lRpwhD);
                default:
                    return C.intl.string(A.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(el.y, {
                type: el.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: lL.Qd,
                itemClassName: lL.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: lL.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: lL.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function lD(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : l$), [n, t]),
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
        className: lL.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    lI.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: lL.MA,
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
                      className: lL.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function lF(e) {
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
            ((t = (r ?? l$).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? l$) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: lL.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: J()(lL.AS, { [lL.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(lO, { status: n }),
                            (0, a.jsx)(Q.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: lL.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: lL.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(lD, { agents: u.get(e.id) ?? l$, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: lL.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(lO, { status: "pending" }),
                          (0, a.jsx)(Q.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: lL.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: lL.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function lz(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = C.intl.formatToPlainString(A.default["P/I+JW"], { completed: o, total: u }),
        d = C.intl.formatToPlainString(A.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(lR, {
        title: C.intl.string(A.default.RtzECX),
        meta: (0, a.jsx)(lP, { children: c }),
        superseded: s,
        showLabel: C.intl.string(A.default.RKyN9q),
        hideLabel: C.intl.string(A.default.xydHoj),
        className: lL.Nr,
        bodyClassName: lL.rf,
        beforeBody: r && !s ? (0, a.jsx)(eV.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(lF, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var lq = n(308665),
    lG = n(59678),
    lU = n(903847);
function lB(e) {
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
        _ = i.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: lU.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: J()(lU.vK, { [lU.ho]: g && c, [lU.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: J()(lU.Rk, lG.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(lE.A, {
                                        glyph: (0, a.jsx)(lq.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eh.D, {
                                    className: lU.pZ,
                                    onClick: u,
                                    "aria-label": C.intl.string(A.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: J()(lU.Rk, lG.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(lE.A, {
                                            glyph: (0, a.jsx)(lq.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          I
                              ? (0, a.jsx)(eR.m, {
                                    text: C.intl.string(A.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eh.D, {
                                        className: lU.BO,
                                        onClick: _,
                                        "aria-expanded": x,
                                        "aria-label": C.intl.string(A.default.RtzECX),
                                        children: (0, a.jsx)(lS.ClipboardListIcon, {
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
                            className: J()(lU.vB, { [lU.pg]: x && k, [lU.ui]: !x }),
                            children: (0, a.jsx)(lz, {
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
var lV = n(658675),
    lK = n(22231),
    lH = n(826745),
    lW = n(123292),
    lJ = n(734057);
let lX = {
        [eW.rbe.GUILD_TEXT]: "text",
        [eW.rbe.GUILD_VOICE]: "voice",
        [eW.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [eW.rbe.GUILD_STAGE_VOICE]: "stage",
        [eW.rbe.GUILD_FORUM]: "forum",
        [eW.rbe.GUILD_MEDIA]: "media",
    },
    lY = { channel: "#", role: "@", user: "@" },
    lQ = {
        channel: [A.default["9+dfPT"], A.default.pGSJqE],
        role: [A.default["2VkCoD"], A.default.c8YlX8],
        user: [A.default.GZIAxl, A.default["4bptbQ"]],
    };
function lZ(e, t) {
    return C.intl.string(lQ[e][+!!t]);
}
var l0 = n(155078);
function l1(e) {
    return e.options.some((e) => null != e.image);
}
let l2 = [];
function l3(e, t) {
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
var l7 = n(890497),
    l5 = n(300344),
    l6 = n(614733),
    l4 = n(904363),
    l8 = n(950902),
    l9 = n(384017);
function re(e) {
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
                        let l = null == (n = lJ.A.getChannel(t)?.type) ? void 0 : lX[n];
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
        className: l9.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(l7.Z, {
                  ...p,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(g(e), t),
              })
            : (0, a.jsx)(l7.Z, {
                  ...p,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : g([e]), t),
              }),
    });
}
function rt(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, l5.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(re, { ...l, guildId: t, options: r, placeholder: lZ("channel", !0 === l.question.multi_select) });
}
function rn(e) {
    let { guildId: t, ...n } = e,
        l = (0, l4.A)(t);
    return (0, a.jsx)(re, { ...n, guildId: t, options: l, placeholder: lZ("role", !0 === n.question.multi_select) });
}
function rl(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, l6.A)(t);
    return (0, a.jsx)(re, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: lZ("user", !0 === n.question.multi_select),
    });
}
function rr(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, l8.Tj)(t, !0);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(rt, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(rn, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(rl, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var ra = n(87221),
    ri = n(144228),
    rs = n(241326),
    ro = n(26430),
    ru = n(750943),
    rc = n(95477),
    rd = n(256905),
    rm = n(839214);
let rf = [],
    rh = 1,
    rg = (0, rm.D)(() => ({ draftsByProject: {} }));
function rp(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? rf;
}
function rx(e, t) {
    return rp(rg.getState(), e, t);
}
function rv(e, t, n) {
    let { draftsByProject: l } = rg.getState();
    rg.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function rj(e, t, n, l) {
    let r = rx(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (rv(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function rb(e, t) {
    (0, p.Vm)(e, t).catch((e) => {
        console.error("[vibegrations] attachment cleanup failed", e);
    });
}
function ry(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && rb(e, t.ref.id));
}
function rw(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = rg.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? rf) n ? ry(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    rg.setState({ draftsByProject: i });
}
function rk(e) {
    return C.intl.formatToPlainString(A.default.JZ59Bo, { size: (0, g.sM)((0, g.Ju)(e)) });
}
function rN(e, t) {
    let n = rx(e, t);
    if (0 !== n.length) {
        for (let t of n) ry(e, t);
        rv(e, t, rf);
    }
}
function rA(e, t) {
    let n = rx(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (rv(e, t, rf), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function rC(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = rx(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? rA(e, "chat") : [];
    (0, x.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
function rS(e, t) {
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
(lb.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(rg.getState().draftsByProject)) rw(e, { deleteFromWorker: !0 });
}),
    lb.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        rw(t, { deleteFromWorker: !1 });
    }));
var rE = n(907702);
function rI(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = rS(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: J()(rE.Gt, rE.b6),
              children: [
                  (0, a.jsx)(ra.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: C.intl.string(A.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: J()(rE.Gt, { [rE.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: rE.Sl,
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
function r_(e) {
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
        p = C.intl.formatToPlainString(A.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: J()(rE.Vs, { [rE.Q9]: s, [rE.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(eh.D, {
                className: rE.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": C.intl.formatToPlainString(A.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: rE.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(rI, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: h,
                                  })
                                : (0, a.jsx)("span", { className: rE.Gt }),
                            (0, a.jsx)("span", {
                                className: rE.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(lV.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(ri.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(Q.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: rE.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, l0.E)(t) : "")
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
                      className: rE.B4,
                      children: (0, a.jsx)(eR.m, {
                          text: C.intl.string(A.default.HQEXJM),
                          children: (0, a.jsx)(tl.K, {
                              icon: rs.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": C.intl.string(A.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: rE.B4,
                        children: (0, a.jsx)(eR.m, {
                            text: C.intl.string(A.default["4/eeDD"]),
                            children: (0, a.jsx)(tl.K, {
                                icon: ro._,
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
function rM(e) {
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
                            (0, rd.R)({
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
                      label: C.intl.string(A.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: rE.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: h,
                className: J()(rE.fF, "gallery" === f ? rE.nV : rE.nM, { [rE.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            r_,
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
                              r_,
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
            (0, a.jsx)(rT, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: C.intl.string(/\bicons?\b/i.test(l.question) ? A.default.qU4WN6 : A.default.cbMDDB),
            }),
        ],
    });
}
function rT(e) {
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
        className: rE.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: rE.QJ,
                children: [
                    (0, a.jsx)(et.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: ru.X,
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
                              text: C.intl.string(A.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: rE.Fg,
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
                                            : Promise.resolve({ errorText: rk(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: rE.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: rE.Hs,
                              children: (0, a.jsx)(rc.k, {
                                  label: C.intl.string(A.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: C.intl.string(A.default.AVhvn8),
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
                              className: rE.gd,
                              children: [
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: C.intl.string(A.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: x,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(lW.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: C.intl.string(A.default.eXZL4X),
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
var rP = n(29073);
function rR(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eh.D, {
        className: J()(l9.uK, { [l9.ue]: l, [l9.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": C.intl.formatToPlainString(c ? A.default["2p6UFz"] : A.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: l9.dy, children: (0, a.jsx)(lV.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: l9.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: l9.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l9.l8,
                        children: (0, a.jsx)(Q.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l9.ed,
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
                      className: l9.rM,
                      children: C.intl.string(A.default.zku6r1),
                  })
                : null,
        ],
    });
}
function rL(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return l1(n)
        ? (0, a.jsx)(rM, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      rR,
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
let r$ = [],
    rO = [];
function rD(e) {
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
        className: J()(l9.Ge, l9.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(Q.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: l9.aK,
                      children: C.intl.string(A.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(rL, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: l3(o, u),
            }),
            l1(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: l9.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: l9.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(lK.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: J()(l9.Pu, l9.es), children: c }),
                      ],
                  }),
        ],
    });
}
function rF(e) {
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
        [I, _] = i.useState(null),
        [M, T] = i.useState(!1),
        P = i.useRef(null),
        [R, L] = i.useState(null),
        $ = i.useRef(null),
        O = i.useRef(0),
        D = null == r,
        F = l.questions.length,
        z = Math.min(y, F - 1),
        q = l.questions[z],
        [G, U] = i.useState({ id: q.id, expanded: !1 }),
        B = G.id === q.id && G.expanded,
        [V, K] = i.useState(null),
        H = c[q.id] ?? "",
        W = !0 === q.multi_select,
        X = l1(q),
        Y = W ? (m[q.id] ?? r$) : ((t = o[q.id]), t?.kind === "option" ? [t.optionId] : l2),
        Z = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = C.intl.string(A.default.wTsP5l),
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
                        if (o) return l3(h, m(i));
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
                                                error: { source: "upload", text: C.intl.string(A.default["kUw/b1"]) },
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
                                                        : C.intl.string(A.default.l79PMc),
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
        es = ei && V?.id === q.id && V.truncated;
    i.useLayoutEffect(() => {
        if (null == R || B || !ei) return;
        function e() {
            if (null == R) return;
            let e = R.scrollHeight > R.clientHeight + 1;
            K((t) => (t?.id === q.id && t.truncated === e ? t : { id: q.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(R), () => t.disconnect());
    }, [ei, R, q.id, B]);
    let eo = C.intl.string(B ? C.t.iTcuma : C.t.dcl9MQ),
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
                (N({ direction: t, moves: n }),
                    E({ question: q, draft: H, selected: Y, ownImage: ee, ownSelected: el, direction: t, moves: n }),
                    T(!0),
                    w(e));
            },
            [H, ee, el, q, Y],
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
    let ef = i.useCallback(
            (e) => {
                if (D) return;
                let t = { ...o, [q.id]: e };
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
            [o, l, D, z, q.id, eu, ec],
        ),
        eg = i.useCallback(() => {
            D || 0 === z || ec(z - 1, "back");
        }, [D, z, ec]),
        ep = z > 0 && !D,
        ex = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [q.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                X ? D || u((e) => ({ ...e, [q.id]: t })) : ef(t);
            },
            [D, X, q.id, ef],
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
        eb = h[q.id] ?? rO,
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
                          ...eb.map((t) => (t.name.startsWith(lY[e]) ? t.name : `${lY[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [H, x, eb, q.id, q.input]),
        ew = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [q.id]: e })), v((e) => ({ ...e, [q.id]: t })));
            },
            [q.id],
        ),
        ek = i.useCallback(() => b(!0), []),
        eN = i.useCallback(() => b(!1), []),
        eA = Z.controlsFor(q, D),
        eC = i.useCallback(() => {
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
    let eM = i.useCallback(() => {
            null != s && (e_(!0), setTimeout(s, 150));
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
                        : (o[q.id] ?? null),
            [o, H, ej, ey, q.id],
        ),
        eL = null != eP && !D,
        eO = z === F - 1,
        eD = i.useCallback(() => {
            null == eP || D || ef(eP);
        }, [D, eP, ef]),
        eF = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, n3.vq)(e.target, HTMLTextAreaElement) ||
                    (0, n3.vq)(e.target, HTMLInputElement) ||
                    ((!(0, n3.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ep
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), eD())));
            },
            [ep, eL, eg, eD],
        ),
        ez = X
            ? null
            : (0, a.jsxs)("div", {
                  className: l9.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: l9.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(lK.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(lH.y, {
                          value: H,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [q.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eC());
                          },
                          placeholder: C.intl.string(A.default["tOC+tn"]),
                          "aria-label": C.intl.formatToPlainString(A.default["4JeYPB"], { question: q.question }),
                          disabled: D,
                          rows: 1,
                          className: l9.Pu,
                          "data-conjure-clarification-other": q.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: J()(l9.$O, { [l9.fI]: eS && !eI, [l9.Oh]: eI }),
        role: "dialog",
        "aria-label": q.question,
        "data-conjure-clarification": l.id,
        "data-state": D ? "inert" : "open",
        "data-question-expanded": B ? "true" : void 0,
        "data-picker-open": j && !M ? "true" : void 0,
        "data-step": z,
        tabIndex: -1,
        onKeyDown: eF,
        children: [
            (0, a.jsxs)("div", {
                className: l9.rf,
                style: null == I ? void 0 : { height: I.heading + I.rows },
                "data-moving": M ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: P,
                        className: l9.wx,
                        children: [
                            (0, a.jsx)(Q.E, {
                                ref: L,
                                tag: "span",
                                id: `${q.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: B ? void 0 : 5,
                                className: J()(rP.TK, l9.R_, { [l9.TB]: "exit" === ea, [l9.JU]: "enter" === ea }),
                                children: er,
                            }),
                            es || B
                                ? (0, a.jsx)("div", {
                                      className: rP.Q7,
                                      children: (0, a.jsx)(eR.m, {
                                          text: eo,
                                          children: (0, a.jsx)(tl.K, {
                                              icon: B ? eT.t : le.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => U({ id: q.id, expanded: !B }),
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
                                      className: J()(rP.gb, rP.Q7),
                                      onClick: eM,
                                      "aria-label": C.intl.string(A.default.qVXlk0),
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
                        className: l9.Cg,
                        style: null == I ? void 0 : { insetBlockStart: I.heading },
                        children: (0, a.jsxs)("div", {
                            className: l9.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: $,
                                    className: l9.Ge,
                                    role: "group",
                                    "aria-labelledby": `${q.id}-label`,
                                    "data-direction": k?.direction,
                                    "data-parity": null == k ? void 0 : k.moves % 2,
                                    children: [
                                        W
                                            ? (0, a.jsx)(Q.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: l9.aK,
                                                  children: C.intl.string(A.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(rL, {
                                            projectId: n,
                                            question: q,
                                            selected: Y,
                                            disabled: D,
                                            onPick: (e) =>
                                                W
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [q.id]:
                                                                  ((n = t[q.id] ?? r$),
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
                                            own: eA,
                                        }),
                                        null != q.input
                                            ? (0, a.jsx)(rr, {
                                                  projectId: n,
                                                  question: q,
                                                  value: eb,
                                                  disabled: D,
                                                  onChange: ew,
                                                  onFocus: ek,
                                                  onBlur: eN,
                                                  fallback: !1 === q.allow_custom ? ez : null,
                                              })
                                            : null,
                                        !1 === q.allow_custom ? null : ez,
                                    ],
                                }),
                                null == S
                                    ? null
                                    : (0, a.jsx)(
                                          rD,
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
            F > 1 || W || X || null != q.input
                ? (0, a.jsxs)("div", {
                      className: rP.qr,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  F > 1
                                      ? C.intl.formatToPlainString(A.default.yzYUjq, { index: z + 1, total: F })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: rP.zt,
                              children: [
                                  ep
                                      ? (0, a.jsx)(lW.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: C.intl.string(A.default.Pk5lfA),
                                            onClick: eg,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(et.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: C.intl.string(eO ? C.t.geKm7t : A.default.w1nRmT),
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
var rz = n(557744),
    rq = n(223347),
    rG = n(894443),
    rU = n(525530),
    rB = n(572253),
    rV = n(411236);
function rK(e) {
    let { projectId: t, request: n, onDismiss: l } = e,
        r = null != n.note && "" !== n.note ? n.note : C.intl.string(A.default.XuOf5s);
    return (0, a.jsx)(rB.A, {
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
                text: C.intl.string(A.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: rV.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: C.intl.string(A.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: r,
                          }),
                          t,
                          (0, a.jsx)("div", { className: rV.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: J()(rP.nd, rP.jx),
                      "aria-label": C.intl.string(A.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: rP.wx,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: rP.TK,
                                      children: C.intl.string(A.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(eh.D, {
                                      className: J()(rP.gb, rP.Q7),
                                      onClick: l,
                                      "aria-label": C.intl.string(A.default["iq+Pte"]),
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
                              className: rV.DQ,
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
                              className: rP.qr,
                              children: (0, a.jsx)("div", { className: rP.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var rH = n(874421),
    rW = n(404373),
    rJ = n(435558),
    rX = n.n(rJ);
let rY = "VibegrationsComposerDrafts";
function rQ() {
    return tV.w.get(rY) ?? {};
}
let rZ = new Map(),
    r0 = rX().throttle(() => {
        if (0 === rZ.size) return;
        let e = rQ();
        for (let [t, n] of rZ) "" === n ? delete e[t] : (e[t] = n);
        (rZ.clear(), tV.w.set(rY, e));
    }, 1e3);
class r1 extends o.Ay.Store {
    getDraft(e) {
        let t = rZ.get(e);
        return null != t ? t : (rQ()[e] ?? "");
    }
}
let r2 = new r1(lb.h, {
    LOGOUT: function () {
        return (rZ.clear(), r0.cancel(), tV.w.remove(rY), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (rZ.set(t, n), r0(), "" === n && r0.flush(), !1);
    },
});
function r3(e) {
    return "" !== r2.getDraft(e).trim();
}
var r7 = n(29080),
    r5 = n(46054);
function r6(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, lN.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, lN.Lf)(r) }),
    };
}
var r4 = n(520521),
    r8 = n(216306),
    r9 = n(60160),
    ae = n(16634),
    at = n(651438);
function an(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, lN.SY)(n.steps),
        d = u ? (0, at.Q)(n) : (0, r8.R)(o),
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
                                    className: lG.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            ae.A,
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
                                      className: lG.iq,
                                      children: (0, a.jsx)(r9.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(lE.A, {
        glyph: (0, a.jsx)(lI.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: (0, r8.O)(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: lG.nC,
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
var al = n(998445),
    ar = n(643210),
    aa = n(648127),
    ai = n(372795),
    as = n(163897);
let ao = "conjure-browser-viewer";
function au(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [ar.A],
            () =>
                n.flatMap((e) => {
                    let n = ar.A.getTab(t, e);
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
        className: as.kR,
        "aria-label": C.intl.string(A.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(ac, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function ac(e) {
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
        u = (0, tj.useHasModalOpen)(ao),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        h = (0, aa.i)(l.session);
    return (0, a.jsxs)(eh.D, {
        innerRef: s,
        className: J()(as.Nr, f && as.Xj),
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
                    { modalKey: ao },
                )
            );
        },
        "aria-label": C.intl.formatToPlainString(A.default.G3a822, { title: h }),
        children: [
            (0, a.jsxs)("div", {
                className: as.Gt,
                children: [
                    (0, a.jsx)(ai.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: as.Ji,
                        "aria-label": C.intl.formatToPlainString(A.default.rnwqXb, { name: h }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: as.qf,
                              children: (0, a.jsx)(al.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: as.HS,
                              children: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: C.intl.string(A.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: as.pG,
                children: [
                    (0, a.jsx)("span", { className: J()(as.W9, f && as.oM) }),
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
var ad = n(268409);
let am = new WeakMap(),
    af = new WeakMap();
function ah(e) {
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
                    let t = am.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = af.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), af.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (am.set(e, n), n);
                })(e0.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: ad.h, children: (0, a.jsx)(au, { projectId: t, sessionIds: u }) });
}
var ag = n(469393);
function ap(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, n_.lG)(t.authored_at);
    return (0, a.jsx)(lM, {
        title: C.intl.string(A.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: ag.r,
            children: [
                (0, a.jsxs)("div", {
                    className: ag.z,
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
                          text: C.intl.string(A.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var ax = n(377941),
    av = n.n(ax);
function aj(e) {
    return "launch" === e.kind || 4 === e.type ? "\u21EA /" : 2 === e.type || 3 === e.type ? "" : "/";
}
let ab = {
    [nR.q7.APP_CHANNEL]: A.default.zrk93C,
    [nR.q7.VOICE_CHANNEL]: A.default.r5Ra0p,
    [nR.q7.ACTIVITY]: C.t.IC5Ann,
    [nR.q7.OVERLAY]: A.default.liTNf3,
    [nR.q7.PROFILE_WIDGET]: A.default["EswAi+"],
    [nR.q7.AUTOMOD]: A.default.DnWMLj,
    [nR.q7.BOT]: A.default.VFWfz1,
    [nR.q7.APPLICATION_COMMANDS]: A.default.w7JaEP,
};
function ay(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let aw = {
        [nR.q7.APP_CHANNEL]: A.default["3/aHX6"],
        [nR.q7.VOICE_CHANNEL]: A.default["3/aHX6"],
        [nR.q7.ACTIVITY]: A.default["3/aHX6"],
        [nR.q7.OVERLAY]: A.default["rPpf5/"],
        [nR.q7.PROFILE_WIDGET]: null,
        [nR.q7.AUTOMOD]: null,
        [nR.q7.BOT]: null,
        [nR.q7.APPLICATION_COMMANDS]: null,
    },
    ak = [nR.q7.OVERLAY, nR.q7.ACTIVITY, nR.q7.APP_CHANNEL, nR.q7.VOICE_CHANNEL];
function aN(e) {
    return ak.find((t) => ay(e, t)) ?? null;
}
var aA = n(155718);
let aC = ["command", "user_command", "message_command", "message"],
    aS = new Set([aA.kc.CHAT, aA.kc.USER, aA.kc.MESSAGE]);
function aE(e) {
    return e.type ?? aA.kc.CHAT;
}
function aI(e) {
    return "launch" !== e.kind && aS.has(aE(e));
}
function a_(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function aM(e, t) {
    let n = aC.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !a_(e)), ...n.filter(a_)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || a_(r) || l.push(r);
    }
    return aC.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
let aT = {
        [nR.q7.APP_CHANNEL]: A.default.NBUCvF,
        [nR.q7.VOICE_CHANNEL]: A.default.vrwvp8,
        [nR.q7.ACTIVITY]: A.default.oMJF0T,
        [nR.q7.OVERLAY]: A.default.u06zRd,
        [nR.q7.PROFILE_WIDGET]: A.default.NZrNII,
        [nR.q7.AUTOMOD]: A.default["bu0/4I"],
        [nR.q7.BOT]: A.default.Crinff,
        [nR.q7.APPLICATION_COMMANDS]: A.default.M3ty0r,
    },
    aP = [
        nR.q7.APP_CHANNEL,
        nR.q7.ACTIVITY,
        nR.q7.OVERLAY,
        nR.q7.VOICE_CHANNEL,
        nR.q7.PROFILE_WIDGET,
        nR.q7.AUTOMOD,
        nR.q7.BOT,
        nR.q7.APPLICATION_COMMANDS,
    ];
var aR = n(176999),
    aL = (((l = {}).IMAGE = "image"), l),
    a$ = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    aO = n(773669);
let aD = [],
    aF = {};
function az(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function aq(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: aL.IMAGE,
        visibility: a$.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var aG = n(127258),
    aU = n(587895),
    aB = n(320095),
    aV = n(963852),
    aK = n(95701),
    aH = n(889227);
let aW = new aK.nA({ id: "1337", guild_id: "1337", type: eW.rbe.GUILD_TEXT, name: "preview" });
function aJ(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([eQ.default], () => eQ.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, e1.nj)(new aH.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let aX = /^@\S+/;
var aY = n(231483),
    aQ = n(628284),
    aZ = n(97808),
    a0 = n(778712),
    a1 = n(809115),
    a2 = n(486020),
    a3 = n(200700);
let a7 = {
        alert: { label: () => C.intl.string(A.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => C.intl.string(A.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => C.intl.string(A.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => C.intl.string(A.default.RGzFNK), blockedStyle: !1 },
    },
    a5 = {
        blocked: { label: () => C.intl.string(A.default.YdnZ8q), tone: "red" },
        alert: { label: () => C.intl.string(A.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => C.intl.string(A.default.RGzFNK), tone: "green" },
    },
    a6 = ["blocked", "alert", "allowed"],
    a4 = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
var a8 = n(984097),
    a9 = n(13673);
let ie = { blocked: aY.ShieldIcon, alert: e6.BellIcon, allowed: aQ.y },
    it = {
        blurple: { text: "text-brand", icon: ea.A.colors.TEXT_BRAND },
        red: { text: "text-feedback-critical", icon: ea.A.colors.TEXT_FEEDBACK_CRITICAL },
        green: { text: "text-feedback-positive", icon: ea.A.colors.TEXT_FEEDBACK_POSITIVE },
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
                    : C.intl.formatToPlainString(C.t["3LYql6"], {
                          duration:
                              ((n = t.timeout_seconds),
                              null != (l = (0, a3.getFriendlyDurationString)(n))
                                  ? l
                                  : n % 604800 == 0
                                    ? C.intl.formatToPlainString(C.t.EmoBD2, { weeks: n / 604800 })
                                    : n % 86400 == 0
                                      ? C.intl.formatToPlainString(C.t["k2UNz+"], { days: n / 86400 })
                                      : n % 3600 == 0
                                        ? C.intl.formatToPlainString(C.t.xCjYxK, { hours: n / 3600 })
                                        : n % 60 == 0
                                          ? C.intl.formatToPlainString(C.t.opVZ9q, { mins: n / 60 })
                                          : C.intl.formatToPlainString(C.t["4zv/jq"], { secs: n })),
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
function ir(e) {
    var t;
    let { example: n } = e,
        { label: l, blockedStyle: r } = a7[n.outcome];
    return (0, a.jsxs)("li", {
        className: J()(a8.nM, { [J()(a8.HV, a9.DX)]: r }),
        children: [
            (0, a.jsx)(eV.A, { children: `${l()}: ` }),
            (0, a.jsx)("span", {
                className: a8.my,
                children: (0, a.jsx)(aZ.eu, {
                    src: (0, a2.AE)(void 0, void 0),
                    size: a0._3.SIZE_24,
                    "aria-label": C.intl.string(A.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: a8.fw,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), r5.A.parseEmbedTitleWithoutLinks(t, !0)),
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
                    (0, a.jsx)(Q.E, {
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
        children: (0, a.jsx)(aZ.eu, { src: e, size: a0._3.SIZE_16, "aria-label": C.intl.string(C.t.hG1StD) }),
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
var io = n(276293),
    iu = n(460905),
    ic = n(110384),
    id = n(633018),
    im = n(763754),
    ih = n(217424),
    ig = n(194085),
    ip = n(20851),
    ix = n(692508),
    iv = n(798819);
function ij(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: J()(iv.item, iv.labelContainer, iv.colorDefault, {
            [iv.focused]: !0 === t.highlighted,
            [iv.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: iv.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: iv.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: J()(iv.label, ix.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: iv.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: iv.icon }),
                  })
                : null,
        ],
    });
}
function ib(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: J()(t, ix.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: C.intl.string(C.t["5IEsGx"]), icon: ic.W, muted: !0 }
                : { label: C.intl.string(C.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: J()(iv.menu, ix.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: iv.scroller,
            children: [
                (0, a.jsx)(ij, { item: s }),
                (0, a.jsx)("div", { className: iv.separator }),
                (0, a.jsx)(ij, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var iy = n(381941);
function iw() {}
function ik(e) {
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
        (r = (0, o.bG)([aU.A], () => aU.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? C.intl.string(A.default.JEYq8M)),
        (u = (0, o.bG)([eQ.default], () => (null != l ? eQ.default.getUser(l) : void 0), [l])),
        (d = aJ("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = aJ("31338", C.intl.string(A.default["9iAOsw"]), { discriminator: "0003" })),
        (h = aJ("31339", (0, eZ.mG)(t) ?? "", { enabled: null != t })),
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
                                      i = (0, aB.rh)({
                                          ...(0, aV.Ay)({
                                              channelId: aW.id,
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
                                                        type: aG.G.APPLICATION_COMMAND,
                                                        user: (0, aV.Vi)(s),
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
                                          (d(((l = t.user), l.trim().replace(aX, `<@${i.id}>`)), s),
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
                                  targetMessage: C.intl.string(A.default["y+QYes"]),
                                  memberMessage: C.intl.string(A.default.BUTRDc),
                              },
                          ),
                [p, m, t, h, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === x.length) return null;
    let b = aW.name;
    return (0, a.jsxs)("div", {
        className: ix.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: ix.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(io.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: b }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: J()(ix.TE, `group-spacing-${iy.ES}`),
                children: x.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? ix.Rz : void 0,
                            children: [
                                (0, a.jsx)(ip.A, {
                                    message: n,
                                    channel: aW,
                                    author: (0, im.FT)(n.author, aW),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (v ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(ih.A, { message: n, channel: aW }) : void 0,
                                    usernameClassName: r?.target === "user" ? ix.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: ix.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(ig.Ay, {
                                              children: [
                                                  (0, a.jsx)(ig.qv, {
                                                      label: C.intl.string(C.t.lfIHs4),
                                                      icon: iu.n,
                                                      onClick: iw,
                                                  }),
                                                  (0, a.jsx)(ig.qv, {
                                                      label: C.intl.string(C.t["5IEsGx"]),
                                                      icon: ic.W,
                                                      onClick: iw,
                                                  }),
                                                  (0, a.jsx)(ig.qv, {
                                                      label: C.intl.string(C.t["UKOtz+"]),
                                                      icon: tr.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: iw,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? ix.ET : ix.je,
                                          inert: !0,
                                          children: (0, a.jsx)(ib, {
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
                className: ix.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(id.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: C.intl.formatToPlainString(C.t["8lzR/R"], { channel: `#${b}` }),
                    }),
                ],
            }),
        ],
    });
}
var iN = n(332173);
function iA(e) {
    let { name: t } = e;
    return (0, a.jsxs)(iN.A, { children: ["/", t] });
}
function iC(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(av());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(iA, { name: e.name }, e.start) : e.text));
}
n(827669);
var iS = n(323384),
    iE = n(983851),
    iI = n(794083),
    i_ = n(687966),
    iM = n(26137),
    iT = n(430392),
    iP = n(775602),
    iR = n(838815);
let iL = {
    [nR.q7.APP_CHANNEL]: iS.k,
    [nR.q7.VOICE_CHANNEL]: iE.H,
    [nR.q7.ACTIVITY]: iI.b,
    [nR.q7.OVERLAY]: i_.GameControllerIcon,
    [nR.q7.PROFILE_WIDGET]: iM.r,
    [nR.q7.AUTOMOD]: aY.ShieldIcon,
    [nR.q7.BOT]: iT.RobotIcon,
    [nR.q7.APPLICATION_COMMANDS]: id.k,
};
function i$(e, t) {
    return null != e.preview ? (t[e.preview] ?? null) : null;
}
function iO(e) {
    let { preview: t, selected: n } = e;
    return (0, a.jsx)("span", {
        className: J()(iR.FF, { [iR.IM]: n }),
        "aria-hidden": !0,
        children: (0, a.jsx)("span", { className: iR.j8, inert: !0, children: t.content }),
    });
}
function iD(e) {
    let { row: t } = e,
        n = iL[t.surface];
    return (0, a.jsx)("span", {
        className: iR.oL,
        "aria-hidden": !0,
        children: (0, a.jsx)(n, { size: "sm", color: "currentColor" }),
    });
}
function iF(e) {
    let { row: t, selected: n } = e,
        l = iL[t.surface];
    return (0, a.jsxs)("span", {
        className: iR.Nl,
        children: [
            (0, a.jsx)(l, { className: iR.gr, size: "xs", color: "currentColor", "aria-hidden": !0 }),
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
function iz(e) {
    let { names: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsx)("div", {
              className: iR.Ip,
              children: t.map((e) =>
                  (0, a.jsx)(
                      "span",
                      {
                          className: iR.jw,
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
let iq = "data-conjure-plan-preview-tight";
function iG(e) {
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
                t.removeAttribute(iq);
                let n = t.offsetHeight;
                n > e.clientHeight && (t.setAttribute(iq, ""), (n = t.offsetHeight));
                let l = n > e.clientHeight ? e.clientHeight / n : 1;
                t.style.transform = l < 1 ? `scale(${l})` : "";
            }
            r();
            let a = new ResizeObserver(r);
            return (a.observe(e), a.observe(t), () => a.disconnect());
        }, []),
        (0, a.jsx)("div", {
            ref: n,
            className: iR.aM,
            children: (0, a.jsx)("div", {
                ref: l,
                className: iR.gp,
                "data-conjure-plan-preview-frame": "",
                children: t?.content,
            }),
        })
    );
}
function iU(e) {
    let { row: t, previews: n, commandNames: l } = e,
        r = i$(t, n);
    return (0, a.jsxs)("div", {
        className: iR.J0,
        children: [
            (0, a.jsxs)("div", {
                className: iR.uy,
                children: [
                    (0, a.jsx)(iD, { row: t }),
                    (0, a.jsxs)("div", {
                        className: iR.Qq,
                        children: [
                            (0, a.jsx)(Q.E, { variant: "text-md/semibold", color: "text-strong", children: t.title }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                selectable: !0,
                                lineClamp: 3,
                                children: (0, a.jsx)(iC, { text: t.description, commandNames: l }),
                            }),
                            (0, a.jsx)(iz, { names: t.channelNames }),
                        ],
                    }),
                ],
            }),
            r?.content,
        ],
    });
}
function iB(e) {
    let { rows: t, previews: n, label: l, cycling: r, commandNames: s } = e,
        u = i.useId(),
        { selectedIndex: c, select: d } = (function (e, t) {
            let n = (0, o.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
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
        className: iR.xk,
        children: (0, a.jsxs)("div", {
            className: iR.QF,
            children: [
                (0, a.jsx)("div", {
                    role: "tablist",
                    "aria-orientation": "vertical",
                    "aria-label": l,
                    className: iR.C$,
                    children: t.map((e, t) => {
                        let l = t === c,
                            r = i$(e, n);
                        return (0, a.jsxs)(
                            eh.D,
                            {
                                role: "tab",
                                "aria-selected": l,
                                "aria-controls": u,
                                className: J()(iR.pc, { [iR.EV]: l }),
                                onClick: () => d(t),
                                children: [
                                    null != r
                                        ? (0, a.jsx)(iO, { preview: r, selected: l })
                                        : (0, a.jsx)(iD, { row: e }),
                                    (0, a.jsxs)("span", {
                                        className: iR.b$,
                                        children: [
                                            (0, a.jsx)(iF, { row: e, selected: l }),
                                            (0, a.jsx)(Q.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                tag: "span",
                                                lineClamp: 3,
                                                children: (0, a.jsx)(iC, { text: e.description, commandNames: s }),
                                            }),
                                            (0, a.jsx)(iz, { names: e.channelNames }),
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
                    className: iR.nd,
                    children: (0, a.jsx)(iG, { preview: i$(m, n) }),
                }),
            ],
        }),
    });
}
var iV = n(633075),
    iK = n(946356),
    iH = n(58216),
    iW = n(27399);
function iJ(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        r = i.useMemo(() => new iV.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: iW.H,
              children: (0, a.jsx)(iK.A.Overlay, {
                  className: iW.w,
                  children: (0, a.jsx)(iH.A, {
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
var iX = n(443863);
function iY(e) {
    let { label: t, icon: n, children: l } = e;
    return (0, a.jsxs)("section", {
        className: iX.uW,
        children: [
            (0, a.jsxs)("span", {
                className: iX.a9,
                children: [
                    n,
                    (0, a.jsx)(Q.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                ],
            }),
            l,
        ],
    });
}
function iQ(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(iY, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: iX.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: iX.jw,
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
function iZ(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = rS(t, r),
        c = i.useCallback(() => {
            (0, p.PK)(t, r).then(
                (e) => {
                    (0, rd.R)({
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
              className: iX.xX,
              onClick: c,
              "aria-label": C.intl.string(A.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: iX.sN, onError: u }) : null,
          });
}
function i0(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        { projectId: d, proposal: m, version: f, onApprove: h } = e,
        g = ay(m, nR.q7.AUTOMOD) ? m.automod : null,
        { botExchanges: x } =
            ((n = ay(m, nR.q7.APPLICATION_COMMANDS)),
            (l =
                ay(m, nR.q7.BOT) || n
                    ? null != m.bot
                        ? m.bot.interaction
                        : n && m.commands.some(aI)
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
                              let s = e.commands.filter(aI).map((e) =>
                                      (function (e, t) {
                                          let n = e.description?.trim() ?? "",
                                              l = "" !== n ? n : t.reply;
                                          switch (aE(e)) {
                                              case aA.kc.USER:
                                                  return { kind: "user_command", user: e.name, bot: l };
                                              case aA.kc.MESSAGE:
                                                  return { kind: "message_command", user: e.name, bot: l };
                                              default:
                                                  return { kind: "command", user: `/${e.name}`, bot: l };
                                          }
                                      })(e, n),
                                  ),
                                  o = "messages" === t ? [] : s.filter(a_),
                                  u = a.length > 0 ? aM([...a, ...o], !0) : aM("both" === t ? [...s, i] : s, !1);
                              return u.length > 0 ? u : [r];
                          })(m, l, {
                              message: C.intl.string(A.default.J7qggf),
                              reply: C.intl.string(A.default.nqYtiy),
                              event: C.intl.string(A.default["05lU9W"]),
                          }),
                [m, l],
            )),
            { botInteraction: l, botExchanges: r }),
        v = (function (e, t) {
            let { widget_config: n, widget_preview: l } = t,
                r = (0, o.bG)([aO.default], () => aO.default.locale),
                a = (0, o.bG)([B.Ay], () => {
                    let t = B.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(aF);
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
                                                          ...az(n),
                                                          ...(null != n.fallback ? { fallback: az(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = aR.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[nG.m.WIDGET_TOP] || null == i[nG.m.WIDGET_BOTTOM]
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
                                                                    type: aR.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: aR.oG.NUMBER, value: a })
                                                                : (r[e] = { type: aR.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(aq),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: aD,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(d, m),
        j = ay(m, nR.q7.PROFILE_WIDGET) ? v : null,
        b = f?.superseded === !0,
        y = m.what_changed?.trim() ?? "",
        w =
            ((t = m.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === aj(e))
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
            label: C.intl.string(A.default.z4ZKYG),
            icon: (0, a.jsx)(ii, {}),
            content: (0, a.jsx)(is, { automod: g }),
        }),
        null != m.design_image &&
            (k.design = {
                label: C.intl.string(A.default.X15LLY),
                content: (0, a.jsx)(iZ, {
                    projectId: d,
                    design: m.design_image,
                    alt: C.intl.string(null == (s = aN(m)) ? A.default["3/aHX6"] : aw[s]),
                }),
            }),
        x.length > 0 &&
            (k.bot = {
                label: C.intl.string(A.default.sA1lTv),
                content: (0, a.jsx)(ik, { projectId: d, exchanges: x }),
            }),
        null != j && (k.widget = { label: C.intl.string(A.default.ove4zH), content: (0, a.jsx)(iJ, { ...j }) }));
    let N = Object.keys(k),
        S =
            ((u = ay(m, nR.q7.BOT)),
            (c = m.commands.filter(aI).length),
            aP
                .filter((e) => ay(m, e) && !(u && e === nR.q7.APPLICATION_COMMANDS))
                .map((e) => {
                    let t = e === nR.q7.APP_CHANNEL ? (m.app_channel_names ?? []) : [],
                        n = t.length > 1,
                        l = e === nR.q7.BOT && c > 0 && ay(m, nR.q7.APPLICATION_COMMANDS),
                        r = C.intl.string(ab[e]),
                        a = C.intl.string(aT[e]);
                    n
                        ? ((r = C.intl.formatToPlainString(A.default["75EkE8"], { count: t.length })),
                          (a = C.intl.string(A.default.OMNwmi)))
                        : l && (a = C.intl.formatToPlainString(A.default.Xa5mPA, { count: c }));
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
                                                    return aN(e);
                                                case "widget":
                                                    return nR.q7.PROFILE_WIDGET;
                                                case "automod":
                                                    return nR.q7.AUTOMOD;
                                                case "bot":
                                                    return ay(e, nR.q7.BOT) ? nR.q7.BOT : nR.q7.APPLICATION_COMMANDS;
                                            }
                                        })(m, t) === e,
                                ) ?? null,
                        }
                    );
                })),
        E = N.filter((e) => !S.some((t) => t.preview === e));
    return (0, a.jsxs)(lR, {
        title:
            b && null != f
                ? C.intl.formatToPlainString(A.default.YZ3qJs, { version: f.version })
                : C.intl.string(A.default["3b6e7o"]),
        meta: b ? (0, a.jsx)(lP, { children: C.intl.string(A.default.hF2c41) }) : null,
        superseded: b,
        showLabel: C.intl.string(A.default.yD8EJS),
        hideLabel: C.intl.string(A.default.nSPGNb),
        className: S.length > 1 ? iX.WG : void 0,
        bodyClassName: iX.rf,
        "data-conjure-plan-card": !0,
        children: [
            "" !== y
                ? (0, a.jsx)(iY, {
                      label: C.intl.string(A.default.iNS4dl),
                      children: (0, a.jsx)(Q.E, {
                          variant: "experimental/body-md/normal",
                          color: "text-default",
                          selectable: !0,
                          children: (0, a.jsx)(iC, { text: y, commandNames: w }),
                      }),
                  })
                : null,
            (0, a.jsx)(Q.E, {
                variant: "experimental/body-md/normal",
                color: "text-default",
                selectable: !0,
                children: (0, a.jsx)(iC, { text: m.summary, commandNames: w }),
            }),
            S.length > 0
                ? (0, a.jsx)(iY, {
                      label: C.intl.string(A.default.mrMYrN),
                      children:
                          1 === S.length
                              ? (0, a.jsx)(iU, { row: S[0], previews: k, commandNames: w })
                              : (0, a.jsx)(iB, {
                                    rows: S,
                                    previews: k,
                                    label: C.intl.string(A.default.mrMYrN),
                                    cycling: !b,
                                    commandNames: w,
                                }),
                  })
                : null,
            E.map((e) => {
                let t = k[e];
                return null == t ? null : (0, a.jsx)(iY, { label: t.label, icon: t.icon, children: t.content }, e);
            }),
            m.changes.length > 0
                ? (0, a.jsx)(iY, {
                      label: C.intl.string(A.default["5+mG1z"]),
                      children: (0, a.jsx)("ul", {
                          className: iX.p_,
                          children: m.changes.map((e, t) =>
                              (0, a.jsx)(
                                  "li",
                                  {
                                      className: iX.Aw,
                                      children: (0, a.jsx)(Q.E, {
                                          variant: "experimental/body-md/normal",
                                          color: "text-default",
                                          tag: "span",
                                          selectable: !0,
                                          children: (0, a.jsx)(iC, { text: e, commandNames: w }),
                                      }),
                                  },
                                  t,
                              ),
                          ),
                      }),
                  })
                : null,
            m.commands.length > 0
                ? (0, a.jsx)(iY, {
                      label: C.intl.string(C.t["0hKkS+"]),
                      children: (0, a.jsx)("ul", {
                          className: iX.p_,
                          children: m.commands.map((e, t) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: iX.uX,
                                      children: [
                                          (0, a.jsx)(Q.E, {
                                              variant: "experimental/body-md/medium",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children:
                                                  "/" === aj(e)
                                                      ? (0, a.jsx)(iA, { name: e.name })
                                                      : `${aj(e)}${e.name}`,
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
            (0, a.jsx)(iQ, { label: C.intl.string(A.default["2UbW6r"]), names: m.bot_permissions ?? [] }),
            (0, a.jsx)(iQ, { label: C.intl.string(A.default["7TKfpj"]), names: m.privileged_intents ?? [] }),
            null == h || b
                ? null
                : (0, a.jsxs)("div", {
                      className: iX.o1,
                      children: [
                          (0, a.jsx)(et.$, {
                              variant: "primary",
                              size: "sm",
                              text: C.intl.string(A.default["6S+wRM"]),
                              onClick: h,
                          }),
                          (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              tag: "span",
                              children: C.intl.string(A.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var i1 = n(289565);
function i2(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: i1.m, children: n })
        : (0, a.jsxs)("div", {
              className: i1.Z,
              children: [
                  n,
                  (0, a.jsx)(eR.m, {
                      text: C.intl.string(C.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(tl.K, {
                          "aria-label": C.intl.string(C.t.WAI6xu),
                          icon: en.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function i3(e) {
    return null != e && e.status?.state === "unpublished";
}
let i7 = new WeakMap();
function i5(e) {
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
                                  children: C.intl.string(A.default["+HGTlC"]),
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
function i6(e) {
    let { projectId: t } = e,
        n = (0, tm.Ay)(t);
    return null != n && i3(n) ? (0, a.jsx)(i2, { children: (0, a.jsx)(i5, { publish: n }) }) : null;
}
var i4 = n(989271);
function i8(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(eh.D, {
        className: J()(i4.nM, { [i4.f1]: s, [i4.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": C.intl.formatToPlainString(A.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: i4.jo,
                children: [
                    n
                        ? (0, a.jsx)(t8.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: i4.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(Q.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: i4.G9,
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
function i9(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(lM, {
        title: C.intl.string(A.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                i8,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var se = n(530557),
    st = n(872162);
function sn(e, t) {
    return { cardId: e, status: "pending" === t ? null : t };
}
var sl = n(202723);
function sr(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tj.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: se.R })), [r.fields]),
        d = (function (e, t) {
            let [n, l] = i.useState(() => sn(e, t));
            return n.cardId !== e || (null == n.status && "pending" !== t)
                ? (l(sn(e, t)), !1)
                : null != n.status && t !== n.status;
        })(l, s),
        m = J()(sl.Lo, { [sl.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(Q.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: C.intl.string(A.default.CTxtdV),
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
                            children: C.intl.string(A.default.HCQvpO),
                        }),
                        (0, a.jsx)(st.C, { label: C.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: sl.Lo,
                      children: (0, a.jsx)(st.C, { label: C.intl.string(A.default.HCQvpO), size: "xs", items: c }),
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
                                className: sl.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: sl.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(aQ.y, {
                                            size: "xs",
                                            color: ea.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(Q.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: C.intl.string(A.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(st.C, { label: C.intl.string(A.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: sl.Lo,
                    children: [
                        (0, a.jsx)(Q.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: C.intl.string(null != o ? A.default.O0QIqj : A.default.HCQvpO),
                        }),
                        (0, a.jsx)(Q.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : C.intl.string(A.default.MPGSHL),
                        }),
                        (0, a.jsx)(st.C, { label: C.intl.string(A.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: sl.sq,
                            children: (0, a.jsx)(et.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: C.intl.string(A.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var sa = n(919790),
    si = n(971824),
    ss = n(162052),
    so = n(165648);
function su(e) {
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
        x = i.useMemo(() => (0, lN.Jf)(n, l), [n, l]),
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
            className: lG.pj,
            "data-live": !1,
            children: (0, a.jsx)(lE.A, {
                glyph: (0, a.jsx)(r7.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: C.intl.string(A.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (p ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, lN.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let w = v.tasks,
        k = (0, r4.n)(w.map((e) => e.taskId)),
        N = !g && (l || w.some((e) => "running" === e.task.status)),
        S = (0, at.k)(w);
    return (0, a.jsxs)("ol", {
        className: lG.pj,
        "data-live": N,
        children: [
            (0, a.jsx)(lC.Ay, {
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
                let l = null != e.task.helperMark ? (0, r4.p)(e.task.helperMark) : void 0,
                    r = l ?? k.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          an,
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
            (0, a.jsx)(ah, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: lG.YO,
                      children: (0, a.jsx)(lz, { todos: b, provisional: d, agents: S, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function sc(e) {
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
            () => r6({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: E, lastStreamedMessage: I, showsClosingMessage: _, closingContent: M } = S,
        T = (y ? w : void 0) ?? S.attachmentsHost,
        P = _ && !y,
        R = null == u ? null : (0, a.jsx)(sa.A, { projectId: t, attachments: u }),
        L = null == R ? null : (0, a.jsx)("div", { className: lG.MT, children: R }),
        $ = j
            ? (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return C.intl.string(A.default.Mv5OmK);
                          case "queued":
                              return C.intl.string(A.default["Po/2mi"]);
                          case "restarting":
                              return C.intl.string(A.default.Vj0woh);
                          default:
                              return C.intl.string(A.default.gY3L8p);
                      }
                  })(b),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: lG.ue,
        children: [
            E.length > 0 && !y
                ? (0, a.jsx)("ol", {
                      className: lG.dO,
                      children: E.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: lG.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: so.PT,
                                          children: r5.A.parse(e.content, !0, {
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
                ? (0, a.jsx)(i0, { projectId: t, proposal: r, version: s, onApprove: v })
                : P
                  ? (0, a.jsxs)("div", {
                        className: J()(lG.ky, ss.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: J()(so.PT, lG.cW),
                                children: r5.A.parse(M, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === T ? L : null,
                            $,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: J()(lG.ky, ss.XR, { [si.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(sr, {
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
                      className: J()(lG.ky, ss.XR),
                      children: (0, a.jsx)(rK, { projectId: t, request: h }),
                  })
                : null,
            "standalone" !== T && ("closing" !== T || P) ? null : R,
            null != g ? (0, a.jsx)(i6, { projectId: t }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(i9, { ideas: o, pickedIdeaIds: x, onPick: p }) : null,
            null != k ? (0, a.jsx)(ap, { proposal: k, onRestore: N }) : null,
            P ? null : $,
        ],
    });
}
var sd = n(146806),
    sm = n(477262),
    sf = n(432017),
    sh = n(475358),
    sg = n(717400),
    sp = n(663341),
    sx = n(559647),
    sv = n(234320),
    sj = n(285796),
    sb = n(922329);
async function sy(e) {
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
var sw = n(153171);
function sk(e, t, n, l) {
    let r = rx(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: rh++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (rv(e, t, [
            ...rx(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void rj(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    rj(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  rj(e, t, n.localId, { status: "error", errorText: C.intl.string(A.default.E7dS5n) }),
                              g.o2 - 3e5,
                          )
                        : rb(e, a.id);
                },
                (l) => {
                    (console.error("[vibegrations] attachment upload failed", l),
                        rj(e, t, n.localId, { status: "error", errorText: C.intl.string(A.default["kUw/b1"]) }));
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
                        errorText: C.intl.formatToPlainString(A.default.Q0aCVZ, { count: 10 }),
                    },
                };
            if (!(0, g.Oq)(e.size, t))
                return "image/png" === t && e.size <= g.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await sy(e).catch(() => null);
                              return null != n && (0, g.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: rk(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: rk(t) } };
            let a = g.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function sN(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = rg.useState((e) => rp(e, t, n)),
        a = i.useCallback((e) => sk(t, n, e, l), [t, n, l]),
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
                null != (r = (l = rx(t, n)).find((t) => t.localId === e)) &&
                    (ry(t, r),
                    rv(
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
function sA(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(sb.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: sw.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: sw.o1,
                onClick: () => n(t.localId),
                "aria-label": C.intl.string(A.default.Slam9g),
                children: (0, a.jsx)(sj.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var sC = n(497437);
let sS = [
        {
            id: "add-images-videos",
            label: A.default["51+9lc"],
            icon: sm.s,
            accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
        },
        {
            id: "add-sounds",
            label: A.default["10ljr2"],
            icon: sf.T,
            accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
        },
        { id: "add-other-files", label: A.default.aotDee, icon: ec.H, accept: "" },
    ],
    sE = "text-md/normal",
    sI = null;
function s_(e) {
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
                frontFrom: 1e3 * (0, sd._R)(m),
                frontTo: 1e3 * (0, sd._R)(h),
                backFrom: 1e3 * (0, sd.T)(m),
                backTo: 1e3 * (0, sd.T)(h),
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
        E = (0, o.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
        I = t === C.intl.string(A.default.Zc7gML),
        _ = r === t && I;
    function M(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: J()(sC.VT, { [sC.qk]: l }),
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
            children: (0, a.jsx)(sh.e, { shortcut: "tab", className: sC.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ey.o, {
                text: t,
                variant: sE,
                delay: null,
                duration: 1e3,
                trailingWidth: h,
                className: J()(sC.xM, { [sC.s2]: l }),
                onStart: k,
                onComplete: () => s(t),
            }),
            M(sC.IS, n || (!E && "out" === b), u),
            (0, a.jsx)("span", {
                ref: c,
                className: sC.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(Q.E, { variant: sE, tag: "span", children: t }),
            }),
            _
                ? (0, a.jsxs)("span", {
                      className: sC.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(Q.E, { variant: sE, tag: "span", className: sC.xM, children: t }),
                          M(sC.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let sM = i.memo(function (e) {
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
                onDraftHasTextChange: p,
                modelSettings: x,
                onModelSettingsChange: v,
            } = e,
            [j, b] = i.useState(() => r2.getDraft(t)),
            y = i.useCallback(
                (e) => {
                    (lb.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }), b(e));
                },
                [t],
            ),
            w = "" !== j.trim();
        i.useEffect(() => p?.(w), [w, p]);
        let [k, N] = i.useState(t);
        k !== t && (N(t), b(r2.getDraft(t)));
        let S = (0, o.bG)([iP.Ay], () => iP.Ay.isSubmitButtonEnabled),
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
            } = sN({ projectId: t, surface: "chat", onUploadFile: c }),
            O = "" !== j.trim() || M.length > 0 || g,
            D = n && O && L,
            [F, z] = i.useState(null);
        i.useEffect(() => {
            if (null == F) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => z(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [F]);
        let q = i.useCallback(() => {
                if (!D) return;
                let e = $();
                s(j, e.length > 0 ? e : void 0);
                let t = (function (e, t, n) {
                    let l,
                        r,
                        a = n.split("\n", 1)[0] ?? "";
                    if (null == e || "" === a) return a;
                    null == sI && (sI = document.createElement("canvas").getContext("2d"));
                    let i = sI;
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
                ("" !== t && z(t), y(""));
            }, [D, j, s, $, y]),
            G = i.useCallback(
                (e) => {
                    (e.preventDefault(), q());
                },
                [q],
            ),
            U = i.useCallback(() => {
                null == u || E || (I(!0), u());
            }, [u, E]),
            B = null == f || "" !== j || !n || r || g ? null : f,
            V = i.useCallback(
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
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), q());
                },
                [q, d, l, u, E, U, B, y],
            ),
            K = i.useCallback(
                (e) => {
                    n && P(e);
                },
                [n, P],
            );
        (0, sv.Vo)({
            event: eW.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return K(t);
            },
        });
        let H = i.useCallback(
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
                let t = sR(e);
                null != t && Q(t);
            }
            ee(!0);
            let t = setTimeout(() => ee(!1), sT);
            return () => clearTimeout(t);
        }, [j]);
        let et = i.useMemo(() => ({ "--custom-glow-x": `${Y}px` }), [Y]),
            en = Z ? ` ${sC.EB}` : "",
            el = r
                ? C.intl.string(A.default.qqlUiW)
                : n
                  ? g
                      ? C.intl.string(A.default.knUjL3)
                      : h
                        ? C.intl.string(A.default.IevBEw)
                        : C.intl.string(l ? A.default["0BJa/0"] : A.default.TEeU7z)
                  : C.intl.string(A.default.zZ9NgM),
            er = i.useRef(0),
            ea = i.useRef(null),
            ei = i.useCallback((e) => {
                if ((ea.current?.disconnect(), null == e)) return;
                er.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    er.current = e.clientWidth;
                });
                (t.observe(e), (ea.current = t));
            }, []),
            ec = i.useId(),
            ed = null != B,
            em = F ?? B ?? el,
            ef = "" === j && "" !== em;
        return (0, a.jsxs)("form", {
            onSubmit: G,
            className: sC.DA,
            children: [
                M.length > 0
                    ? (0, a.jsx)("div", {
                          className: sC.lN,
                          children: M.map((e) => (0, a.jsx)(sA, { draft: e, onRemove: R }, e.localId)),
                      })
                    : null,
                (0, a.jsx)("span", { className: `${sC.wg} ${sC.LP}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${sC.wg} ${sC.L3}${en}`, style: et, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: sC.VA,
                    ref: W,
                    children: [
                        (0, a.jsx)("input", {
                            ref: _,
                            type: "file",
                            multiple: !0,
                            onChange: H,
                            className: sC.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(es.Y, {
                            targetElementRef: J,
                            position: "top",
                            align: "left",
                            animation: es.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eo.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": C.intl.string(C.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(eu.rX, {
                                        children: [
                                            sS.map((e) =>
                                                (0, a.jsx)(
                                                    eu.Dr,
                                                    {
                                                        id: e.id,
                                                        label: C.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => X(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(eu.Dr, {
                                                      id: "import-project",
                                                      label: C.intl.string(A.default["p/k5i7"]),
                                                      iconLeft: sg.q,
                                                      leadingAccessory: { type: "icon", icon: sg.q },
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
                                    className: `${sC.Y0} ${sC.nu}`,
                                    disabled: !n,
                                    "aria-label": C.intl.string(C.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(sp.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: sC.Qu,
                                    }),
                                });
                            },
                        }),
                        ef
                            ? (0, a.jsx)("div", {
                                  ref: ei,
                                  className: sC.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(s_, { text: em, offering: ed && null == F, typed: null != F }),
                              })
                            : null,
                        (0, a.jsx)(lH.y, {
                            value: j,
                            onChange: (e) => y(e.currentTarget.value),
                            onKeyDown: V,
                            onPaste: K,
                            placeholder: ef ? "" : el,
                            disabled: !n,
                            "aria-label": C.intl.string(A.default.ldNl9x),
                            "aria-describedby": ef ? ec : void 0,
                            rows: 1,
                            className: sC.jp,
                        }),
                        ef ? (0, a.jsx)(eV.A, { id: ec, children: el }) : null,
                        (0, a.jsx)("div", {
                            className: sC.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(eR.m, {
                                          text: C.intl.string(A.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${sC.Y0} ${sC.$E}`,
                                              disabled: E,
                                              onClick: U,
                                              "aria-label": C.intl.string(A.default.wiguT0),
                                              children: (0, a.jsx)(r7.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : x?.tierSettings != null && null != v
                                      ? (0, a.jsx)(eB, {
                                            settings: x.tierSettings,
                                            tiers: x.tiers,
                                            choices: x.choices,
                                            disabled: !n,
                                            onChange: v,
                                            className: `${sC.Y0} ${sC.$E}`,
                                            icon: (0, a.jsx)(eL.R, {
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
                                  className: sC.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: sC.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: sC.rt,
                                          disabled: !D,
                                          "aria-label": C.intl.string(A.default.rxW2cl),
                                          children: (0, a.jsx)(sx.SendMessageIcon, {
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
    sT = 1500,
    sP = [
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
function sR(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = sR.mirror;
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
                (sR.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of sP) t.style.setProperty(e, n.getPropertyValue(e));
    ((t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length)));
    let l = document.createElement("span");
    ((l.textContent = "\u200B"), t.appendChild(l));
    let r = l.offsetLeft;
    return ((t.textContent = ""), e.offsetLeft + r - e.scrollLeft);
}
sR.mirror = null;
var sL = n(986109);
let s$ = i.createContext(null);
function sO(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(s$),
        [d, m] = i.useState(() => iP.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: J()(sL.xk, { [sL.g5]: d, [sL.Qo]: s, [sL.q3]: o }),
        children: n,
    });
}
let sD = "conjureTipDismissals",
    sF = new Set(),
    sz = new Set(),
    sq = 0;
function sG() {
    let e = tV.w.get(sD);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function sU(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return sF.has(((n = e.id), `${t}:${n}`));
        case "app":
            return sG().app[t]?.includes(e.id) === !0;
        case "forever":
            return sG().forever.includes(e.id);
    }
}
function sB(e) {
    return (sz.add(e), () => sz.delete(e));
}
let sV = new Map();
function sK(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function sH(e, t) {
    return null != e && e > 0 && e < t;
}
var sW = n(148087),
    sJ = n(292771);
function sX(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
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
            className: sJ.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: J()(sJ.qd, e.leaving ? sJ.dv : sJ.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
let sY = { id: "ideas_intro", dismissal: "app" },
    sQ = "ideas",
    sZ = "live_behind";
var s0 = n(443865),
    s1 = n(247171);
function s2(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: J()(s1.row, r),
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: J()(s1.gutter, s1[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: s1.content, children: i }),
        ],
    });
}
var s3 = n(716502);
function s7(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(s2, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: s3.Nr,
        children: (0, a.jsxs)("section", {
            className: s3.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: s3.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: C.intl.string(C.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": C.intl.string(C.t.WAI6xu),
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
function s5(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: s3.DD,
        children: t,
    });
}
function s6(e) {
    let { children: t } = e;
    return (0, a.jsx)(Q.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: s3.rf,
        children: t,
    });
}
function s4(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: s3.o1, children: t });
}
let s8 = {
    ...sY,
    priority: 1,
    resolve: function (e) {
        let { turn: t, hasPublished: n } = e;
        return null != t && n ? "card" : null;
    },
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(s7, {
            icon: s0.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(s5, { children: C.intl.string(A.default.OJlbhX) }),
                (0, a.jsx)(s6, { children: C.intl.string(A.default["3vJBni"]) }),
                (0, a.jsx)(s4, {
                    children: (0, a.jsx)(et.$, {
                        variant: "primary",
                        size: "sm",
                        text: C.intl.string(A.default["U/bLzU"]),
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
var s9 = n(830205);
function oe(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(s2, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: s9.aK,
        children: (0, a.jsxs)("div", {
            className: s9.n8,
            children: [
                (0, a.jsx)(Q.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: s9.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: s9.X8,
                          children: (0, a.jsx)(eR.m, {
                              text: C.intl.string(C.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(tl.K, {
                                  "aria-label": C.intl.string(C.t.WAI6xu),
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
var ot = n(95635);
let on = [
        {
            id: sZ,
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
                    (null != t.publishCta && i3(n)) ||
                    sH(e.messagesSinceShown(sZ), 10)
                    ? null
                    : "hint";
            },
            render: (e, t) => {
                let {
                    context: { publish: n },
                    dismiss: l,
                } = t;
                return null != n
                    ? (0, a.jsx)(oe, {
                          icon: ot.UploadIcon,
                          onDismiss: l,
                          children: C.intl.format(A.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                      })
                    : null;
            },
            dismissal: "session",
        },
        s8,
        {
            id: sQ,
            priority: 1,
            resolve: function (e) {
                let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
                return null == t ||
                    n ||
                    !l ||
                    r < 6e4 ||
                    null == e.onAskForIdeas ||
                    !e.isDismissed(sY) ||
                    0 === e.messagesSinceShown(sY.id) ||
                    sH(e.messagesSinceShown(sQ), 25)
                    ? null
                    : "hint";
            },
            render: (e, t) => {
                let { context: n, dismiss: l } = t;
                return (0, a.jsx)(oe, {
                    icon: s0.LightbulbIcon,
                    onDismiss: l,
                    children: C.intl.format(A.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
                });
            },
            dismissal: "app",
        },
    ],
    ol = [12e4, 6e4];
var or = n(817921);
function oa(e) {
    var t;
    let n,
        l,
        r,
        s,
        u,
        c,
        d,
        m,
        { projectId: f, messages: h, draftHasText: g, onAskForIdeas: p } = e,
        x =
            ((n = (0, tm.Ay)(f)),
            (l = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()?.id)),
            (u = (function (e, t) {
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
                (s = null != (r = h.at(-1)) ? Math.max(r.created_at, r.finished_at ?? 0, r.settled_at ?? 0) : null),
                ol,
            )),
            (d =
                null ==
                    (c = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--) {
                            let n = e[t];
                            if (
                                "publish_notice" !== n.kind &&
                                "project_event" !== n.kind &&
                                "context_boundary" !== n.kind
                            ) {
                                if ("user" === n.role) return null;
                                if ((0, nP.BL)(n)) return n;
                                if (!(0, nP.B0)(e, t)) break;
                            }
                        }
                        return null;
                    })(h)) ||
                null != (t = c).awaitingUser ||
                null != t.secretRequest ||
                null != t.settingsRequest ||
                (t.intake?.questions.length ?? 0) > 0
                    ? null
                    : c),
            {
                projectId: f,
                turn: d,
                publish: n,
                draftHasText: g,
                idleMs: null != s ? Math.max(0, u - s) : 0,
                hasPublished:
                    null !=
                    (m = (function (e) {
                        for (let t = e.length - 1; t >= 0; t--)
                            if ("publish_notice" === e[t].kind) return e[t].created_at;
                        return null;
                    })(h)),
                publishedSinceLastMessage: null != m && 0 === sK(h, m, l),
                messagesSinceShown: (e) => {
                    let t = sV.get(`${f}:${e}`);
                    return null != t ? sK(h, t, l) : null;
                },
                isDismissed: (e) => sU(e, f),
                onAskForIdeas: p,
            });
    i.useSyncExternalStore(sB, () => sq);
    let { callout: v, hint: j } = (function (e, t, n) {
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
        })(on, x, (e) => sU(e, f)),
        b = [v, j].filter((e) => null != e);
    return (i.useEffect(() => {
        let e = Date.now();
        for (let { tip: t } of b)
            0 !== x.messagesSinceShown(t.id) &&
                (function (e, t, n) {
                    sV.set(`${e}:${t}`, n);
                })(f, t.id, e);
    }),
    0 === b.length)
        ? null
        : (0, a.jsx)(sO, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: or.X,
                  children: b.map((e) => {
                      let { tip: t, presentation: n } = e;
                      return (0, a.jsx)(
                          sX,
                          {
                              presentation: n,
                              render: (e) =>
                                  t.render(e, {
                                      context: x,
                                      dismiss:
                                          null != t.dismissal
                                              ? () =>
                                                    (function (e, t) {
                                                        if (!(null == e.dismissal || sU(e, t))) {
                                                            if ("session" === e.dismissal) {
                                                                var n;
                                                                sF.add(((n = e.id), `${t}:${n}`));
                                                            } else {
                                                                let n = sG();
                                                                tV.w.set(
                                                                    sD,
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
                                                            (sq++, sz.forEach((e) => e()));
                                                        }
                                                    })(t, f)
                                              : void 0,
                                  }),
                          },
                          t.id,
                      );
                  }),
              }),
          });
}
var oi = n(52133),
    os = n(732159),
    oo = n(888366),
    ou = n(862026),
    oc = n(291192);
function od(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, ou.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: oc.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: oc.Sp,
                children: [
                    (0, a.jsx)("span", { className: oc.q3 }),
                    (0, a.jsxs)("span", {
                        className: oc.g8,
                        children: [
                            (0, a.jsx)(oo.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(Q.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: oc.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: oc.nM,
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
                                          (0, a.jsx)(lW.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tj.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(os.u, {
                                                                    ...t,
                                                                    title: C.intl.string(A.default["i+xjZM"]),
                                                                    subtitle: C.intl.string(A.default.fMBZmD),
                                                                    confirmText: C.intl.string(A.default.i5f3Uo),
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
function om(e) {
    return (0, o.bG)([B.Ay, aU.A], () => {
        let t = B.Ay.getProject(e);
        return null == t ? "" : (aU.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var of = n(951465),
    oh = n(369455);
function og(e) {
    let { projectId: t, notice: n } = e,
        l = om(t),
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
            C.intl.format(
                !0 === n.channel_skipped
                    ? A.default.ev23Cw
                    : n.update
                      ? A.default.gQzuLC
                      : null == r
                        ? A.default.MOrR29
                        : A.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(op, { projectId: t, notice: n }) : null,
        ],
    });
}
function op(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(tm.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [lu.A, B.Ay],
                    () => {
                        let r = lu.A.getPublishStatus(e),
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
                      ? C.intl.format(A.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    eh.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: oh.Z,
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
                      : C.intl.format(A.default["6/zJpD"], {
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
                                null != e && (0, of.A)(e);
                            },
                        }),
              ],
          });
}
var ox = n(940874);
n(775443);
var ov = n(616e3),
    oj = n(155899),
    ob = n(521981),
    oy = n(491182),
    ow = n(438729),
    ok = n(622868),
    oN = n(448368),
    oA = n(837528),
    oC = n(470964),
    oS = n(715628),
    oE = n(752636),
    oI = n(9842),
    o_ = n(589022),
    oM = n(967198),
    oT = n(531685);
let oP = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function oR(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function oL(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function o$(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = oL(e, t),
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
    if (oR(r) && oR(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && oR(oL(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function oO(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([iP.Ay], () => iP.Ay.useReducedMotion),
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
                      for (; a > 0 && o$(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && oP.has(e.charAt(l - 1));) l--;
                                    return oP.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && o$(t, o);) o++;
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
var oD = n(624479),
    oF = n(890377),
    oz = n(744898),
    oq = n(180227);
function oG(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: J()(oq.QE, { [oq.Rn]: t }),
              children: (0, a.jsx)(ig.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          ig.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function oU(e) {
    return ts.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: C.intl.string(C.t.JrGD7E), icon: oD.CopyIcon, onClick: () => (0, ts.C)(e) }]
        : [];
}
function oB(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: C.intl.string(A.default.CXtLD2),
                          tooltip: C.intl.string(A.default.DOb1HM),
                          icon: oF.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: C.intl.string(A.default.urZwpN),
                          icon: en.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(oG, { groupStart: n, actions: [...r, ...oU(t)] });
}
function oV(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: C.intl.string(A.default.H8Jfhu), icon: oz.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: ne.BugIcon, onClick: r }];
    return (0, a.jsx)(oG, { groupStart: n, actions: [...i, ...oU(t), ...s] });
}
let oK = (0, aK.createChannelRecord)({ id: "conjure-builder", type: eW.rbe.DM }),
    oH = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function oW(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: J()(oq.Yq, { [oq.x1]: t }), children: e });
}
function oJ(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function oX(e, t, n) {
    let { content: l } = (0, oC.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: oK, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(ow.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, oS.A)(r, l);
}
function oY(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, oA.m)(e, oK, t.usernameProfile, l),
        u = (0, oA.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([oM.A], () => oM.A.getGuildId()),
        d = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = eQ.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(o_.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function oQ(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = "" !== n.content ? (0, ob.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null;
            return null == l
                ? e
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: oq.GV,
                              children: [
                                  (0, a.jsx)(t9.x, {
                                      className: oq.Rj,
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
            [t1.A],
            () => ({
                isReplyAuthorBlocked: t1.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: t1.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, im.X4)(n),
        m = (0, im.X4)(t),
        f = oY(n);
    return (0, a.jsx)(oN.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: oK,
        referencedMessage: { state: oI.a.LOADED, message: n },
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
function oZ(e) {
    let { message: t, author: n } = e,
        l = oY(t);
    return (0, a.jsx)(ok.Ay, {
        message: t,
        channel: oK,
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
function o0(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: u } = e;
    i.useEffect(() => e5(l), [l]);
    let c = (0, o.bG)(
            [eQ.default],
            () => e7(l, null != l ? eQ.default.getUser(l) : null, eQ.default.getCurrentUser()),
            [l],
        ),
        d = i.useMemo(() => (0, im.FT)(c, null), [c]),
        m = i.useMemo(() => nj(t), [t]),
        f = m?.body ?? t,
        h = i.useMemo(() => {
            if (null == c) return null;
            let e = (0, aV.Ay)({ channelId: oK.id, content: f, author: c });
            return (0, aB.rh)({ ...e, timestamp: oJ(n, e.timestamp), state: eW.cmJ.SENT });
        }, [f, c, n]);
    return null == h
        ? null
        : (0, a.jsx)(o1, {
              message: h,
              author: d,
              content: f,
              selected: m?.label,
              accessories: r,
              groupStart: s,
              onQueuedAction: u,
          });
}
function o1(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = oX(t, l);
    return (0, a.jsx)(oy.A, {
        className: oq.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(oZ, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: oq.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: oq.GV,
                              children: [
                                  (0, a.jsx)(t9.x, {
                                      className: oq.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: oq.WO, children: u }),
                      ],
                  }),
        childrenAccessories: oW(i, "" !== l),
        childrenButtons: (0, a.jsx)(oB, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function o2(e) {
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
        { text: m, revealing: f } = oO(t, { streaming: (0, o.bG)([oT.A], () => c && oT.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, im.FT)(null, null), []),
        g = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        p = r?.userId,
        x = (0, o.bG)(
            [eQ.default],
            () => e7(p, null != p ? eQ.default.getUser(p) : null, eQ.default.getCurrentUser()),
            [p],
        ),
        v = i.useMemo(() => (null == r ? null : nj(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, aV.Ay)({ channelId: oK.id, content: v?.body ?? r.content, author: x });
            return (0, aB.rh)({ ...e, id: r.id, timestamp: oJ(r.createdAt, e.timestamp), state: eW.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: oK.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, aV.Ay)({ channelId: oK.id, content: "", author: oH })),
        w = i.useMemo(
            () =>
                (0, aB.rh)({
                    ...y,
                    timestamp: oJ(n, y.timestamp),
                    state: eW.cmJ.SENT,
                    ...(null != b ? { type: eW.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        k = i.useMemo(() => w.set("content", m), [w, m]),
        N = i.useMemo(
            () => (0, oE.A)({ message: w, channel: oK, author: g, guildId: void 0, isGroupStart: u }),
            [w, g, u],
        ),
        A = oX(k, m, oq.OS);
    return (0, a.jsxs)("div", {
        className: oq.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(oy.A, {
                className: oq.yE,
                author: g,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(oQ, { baseMessage: w, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: A,
                childrenAccessories: oW(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: oq.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(iS.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function o3(e) {
    let { onSelect: t, onClose: n = eK.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": C.intl.string(C.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(eu.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(eu.Dr, {
                          id: "restore-version",
                          label: C.intl.string(A.default.H8Jfhu),
                          icon: oz.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(eu.Dr, { id: "view-trace", label: "View Trace", icon: ne.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function o7(e) {
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
        j = null != v && null != p ? () => o5(v, p) : void 0,
        b =
            ((t =
                nc() && "assistant" === x.role && (0, nP.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [ov.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : ov.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((ns = { projectId: e, traceId: t }), [...ni])) n(e);
                      })(l, b)
                : void 0,
        w = x.in_reply_to,
        k = x.restoreProposal;
    return (0, a.jsx)(sO, {
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
                          void (0, eK.jA)(t, (e) => (0, a.jsx)(o3, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(o2, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(oV, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != w && null != i ? () => i(w) : void 0,
            accessories: (0, a.jsx)(sc, {
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
                              o5(
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
function o5(e, t) {
    (0, oj.F)({ onConfirm: () => t(e) });
}
var o6 = n(288539);
function o4(e, t, n) {
    return (0, a.jsx)(o6.A, { userId: e, content: `@${t}` }, n);
}
function o8(e) {
    let { projectId: t, event: n } = e,
        l = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => e5(l), [l]);
            let r = (0, o.bG)([eQ.default], () => (null == l ? null : eQ.default.getUser(l)), [l]),
                a = (0, eZ.tx)(r),
                s = om(e),
                u =
                    (0, o.bG)([f.A], () => (null == t.guild_id ? null : f.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? C.intl.string(A.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? C.intl.format(A.default.Lwsrhg, { app: s, server: u })
                        : C.intl.format(A.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? C.intl.format(A.default.mT7EQG, { app: s, server: u })
                        : C.intl.format(A.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? C.intl.format(A.default["4LVIeo"], { app: s, server: u })
                        : C.intl.format(A.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? C.intl.format(A.default["4VQfid"], { channel: e, server: u })
                        : C.intl.format(A.default.RlMIJN, { channel: e, server: u, ...c });
                }
            }
        })(t, n, o4);
    return (0, a.jsx)(Q.E, { variant: "text-md/normal", color: "text-default", children: l });
}
let o9 = i.memo(
        function (e) {
            let { row: t, projectId: n, highlighted: l, currentUserId: r, ...i } = e,
                s = t.message;
            switch (t.kind) {
                case "user": {
                    let e = null != s.attachments && s.attachments.length > 0 ? s.attachments : null;
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "user",
                        anchorId: s.id,
                        highlighted: l,
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(o0, {
                            groupStart: t.groupStart,
                            content: s.content,
                            createdAt: s.created_at,
                            userId: s.user_id,
                            accessories: null != e ? (0, a.jsx)(sa.A, { projectId: n, attachments: e }) : void 0,
                            onQueuedAction: (function (e, t, n) {
                                if (
                                    "user" === t.role &&
                                    "queued" === t.disposition &&
                                    null != t.user_id &&
                                    t.user_id === n
                                )
                                    return (n) => (0, ox.tp)(e, t.id, n);
                            })(n, s, r),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(o2, {
                            groupStart: t.groupStart,
                            content: t.content,
                            streaming: t.streaming,
                            createdAt: s.created_at,
                            accessories:
                                t.hostsAttachments && null != s.attachments
                                    ? (0, a.jsx)(sa.A, { projectId: n, attachments: s.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(su, {
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
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(o2, {
                            groupStart: t.groupStart,
                            content: null == s.publishNotice ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(og, { projectId: n, notice: s.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        continuation: !t.groupStart,
                        children: (0, a.jsx)(o2, {
                            groupStart: t.groupStart,
                            content: null == s.projectEvent ? s.content : "",
                            createdAt: s.created_at,
                            accessories:
                                null == s.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(o8, { projectId: n, event: s.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children:
                            null == s.contextSwitch
                                ? null
                                : (0, a.jsx)(od, { projectId: n, contextSwitch: s.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(su, { projectId: n, interrupted: !0, steps: s.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(sO, {
                        rowKey: t.key,
                        role: "assistant",
                        children: (0, a.jsx)(su, {
                            projectId: n,
                            steps: ue,
                            active: !1,
                            checklistSuperseded: t.checklistSuperseded,
                            todos: s.todos,
                            provisionalTodo: s.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(o7, { row: t, projectId: n, ...i });
            }
        },
        function (e, t) {
            return (
                (0, oi.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, oi.A)(e.row, t.row, ["message"]) &&
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
                (0, oi.A)(e.replyTo, t.replyTo) &&
                (0, oi.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    ue = [],
    ut = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    un = new WeakMap();
function ul(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function ur(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let ua = i.memo(function (e) {
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
    let _ = i.useCallback((e) => {
            (E(e), window.clearTimeout(I.current), (I.current = window.setTimeout(() => E(null), 1600)));
        }, []),
        M = (0, o.bG)([lu.A], () => lu.A.getPublishStatus(t)?.state ?? null),
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
                                        let t = (0, lN.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = un.get(r);
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
                        let a = !(0, nP.BL)(e),
                            i = r6({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, lN.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, lN.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && ut.test(n.prose.content)) m = !0;
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
                        let f = ut.test(e.content ?? "");
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
                    (un.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                          let n = i7.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), i7.set(t, n)), n);
                      })),
                m,
            );
        }, [n, M, m]),
        R = i.useMemo(() => P.map((e) => e.key), [P]),
        [L, $] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return ul(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : ur(e, t.endKey, t.end - 1) + 1,
                a = ur(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), ul(e, a, r));
        })(R, L, p),
        D = i.useRef(O),
        F = i.useRef(R),
        z = i.useRef(P),
        q = i.useRef(null),
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
            q.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [h]),
        V = i.useCallback(() => {
            let e = h.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), ul(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), ul(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? ul(e, i, t.end) : null;
            })(F.current, D.current, {
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
                    V());
            },
            recordAnchor: B,
            showLatest(e) {
                ((G.current = e ?? null), $(null));
            },
        }),
        [B, V],
    );
    let K = i.useRef(null),
        H = i.useCallback(
            (e) => {
                var n;
                let l;
                K.current = null;
                let r = y.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (v(), $(D.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), _(e));
                    return;
                }
                let a = z.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, x.loadOlderHistory)(t) && (K.current = e);
                    return;
                }
                (v(),
                    (G.current = () => {
                        (y.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            _(e));
                    }),
                    $(((n = F.current), ul(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [_, v, t],
        );
    (i.useEffect(() => {
        let e = K.current;
        null != e && H(e);
    }, [P, H]),
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
            ((D.current = O), (F.current = R), (z.current = P));
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
                let l = G.current;
                ((G.current = null), l?.(), B(), V());
            }
            U.current = new Set(R);
        }, [P, R, O.start, O.end, h, g, B, V]));
    let X = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, nP.BL)(n) || "plan_implemented" === n.kind) return null;
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
                : (0, nP.BL)(et)
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
                                        t === C.intl.string(A.default.UGqnoV) || t === C.intl.string(A.default.sMQt5O)
                                    );
                                })(s);
                            continue;
                        }
                        let o = s.secretRequest?.fields ?? [];
                        if (0 === o.length || !(0, nP.BL)(s)) continue;
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
                className: J()(sL.x7, sL.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: sL.Ub, children: (0, a.jsx)(el.y, {}) }),
            });
        let e = "unavailable" === l ? A.default.Td4Sf4 : A.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: sL.x7,
            children: (0, a.jsx)(sO, { role: "assistant", children: (0, a.jsx)(o2, { content: C.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(s$.Provider, {
        value: U,
        children: (0, a.jsxs)("ol", {
            ref: N,
            className: sL.x7,
            children: [
                P.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            o9,
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
                        o9,
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
                            onApprovePlan: n.render_id === X ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                null != en && W
                    ? (0, a.jsx)(sO, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(o2, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.string(A.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                W ? (0, a.jsx)(oa, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var ui = n(731084),
    us = n(823376),
    uo = n(187447);
function uu(e) {
    let { activity: t, id: n } = e,
        l = (0, sW.A)(),
        { text: r, revealing: s } = oO(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: uo.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(lw.Ch, {
                ref: o,
                className: uo.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: J()(so.PT, uo.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: r5.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var uc = n(53659);
function ud(e) {
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
        v = (0, ui.xu)({
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
        j = C.intl.string(v),
        b = v === ui.kx["0"],
        [y, w] = i.useState(m ?? j),
        k = (0, sW.A)();
    (l || (0, ui.E4)(j, y) || (!k && !b)) && y !== j && w(j);
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
        _ = i.useRef(0);
    (i.useEffect(() => {
        ((I.current = b), !b && (0, ui.E8)(E.current) && w(N.current));
    }, [b]),
        i.useEffect(() => {
            if (!k) return;
            let e = 0,
                t = 0;
            function n() {
                I.current
                    ? ((_.current = (0, ui.E8)(E.current) ? _.current + 1 : 0), w((0, ui.Ov)(_.current)))
                    : N.current !== E.current
                      ? w(N.current)
                      : S.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, ui.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [k]));
    let M = null != t && "" !== t.text,
        T = t?.session ?? null,
        P = M && null != T && p === T,
        R = i.useCallback(() => {
            M && null != T && x((e) => (e === T ? null : T));
        }, [M, T]),
        L = i.useCallback(() => x(null), []);
    return (0, a.jsx)(es.Y, {
        targetElementRef: h,
        position: "top",
        align: "left",
        shouldShow: P,
        onRequestClose: L,
        renderPopout: () => (0, a.jsx)(uu, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(eh.D, {
                innerRef: h,
                className: J()(uc.hF, M && uc.Xd),
                "aria-label": C.intl.string(
                    r
                        ? A.default.qqlUiW
                        : v === A.default.j8tmjK
                          ? A.default.j8tmjK
                          : b
                            ? ui.kx["0"]
                            : A.default["Uuj/gh"],
                ),
                "aria-expanded": P,
                "aria-describedby": P ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": C.intl.string(v),
                onClick: R,
                children: [
                    (0, a.jsx)("span", {
                        className: uc.bl,
                        children: (0, a.jsx)(us.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: uc.xu,
                        "aria-hidden": !!u || !!b || void 0,
                        children: k
                            ? (0, a.jsx)(ey.o, {
                                  ref: S,
                                  text: y,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: ui.vg,
                                  delay: null,
                                  className: uc.yE,
                              })
                            : (0, a.jsx)(Q.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: uc.yE,
                                  children: y,
                              }),
                    }),
                ],
            }),
    });
}
var um = n(85428),
    uf = n(885574),
    uh = n(242779),
    ug = n(436804);
function up(e) {
    return e.toLocaleString();
}
function ux(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: ug.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: ug.mf,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [up((0, uh.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(Q.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    up(n.input_tokens),
                    " in \xb7 ",
                    up(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${up(n.cache_creation_input_tokens)} cache write \xb7 ${up(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function uv(e) {
    let { project: t } = e,
        n = (0, uh.wU)(t.compaction),
        l = (0, uh.wU)(t.classifier),
        r = (0, uh.wV)(t.orchestrator, t.codegen),
        i = (0, uh.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: ug.si,
        role: "dialog",
        "aria-label": C.intl.string(A.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: ug.Q$,
                children: (0, a.jsxs)("div", {
                    className: ug.mf,
                    children: [
                        (0, a.jsxs)(Q.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [up((0, uh.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(Q.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(ux, { label: C.intl.string(A.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(ux, { label: C.intl.string(A.default.ANCEo3), usage: n }),
            (0, a.jsx)(ux, { label: C.intl.string(A.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: ug.mf,
                children: [
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(A.default["8OUg09"]),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, uh.sj)(i) ? "\u2014" : `${Math.round(100 * (0, uh.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function uj(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(es.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(uv, { project: t }),
        children: (e) =>
            (0, a.jsx)(eh.D, {
                innerRef: n,
                className: ug.Y$,
                "aria-label": C.intl.string(A.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(uf.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var ub = n(997421);
function uy(e) {
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
        g = (0, nd.Zv)(t),
        p = (0, o.bG)([lu.A], () => lu.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, v] = i.useState(null),
        j = i.useCallback(
            (e) =>
                v(
                    (0, ui.E8)(e) || e === C.intl.string(A.default.mKK6wB) || e === C.intl.string(A.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        b = null == f ? null : (0, ui.uc)(f),
        y = null != s,
        w = s ?? (n ? l : void 0),
        k = n || r || y || !0 === m;
    return (0, a.jsxs)("div", {
        className: ub.jf,
        children: [
            (0, a.jsxs)("div", {
                className: ub.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    k || u || g || p
                        ? (0, a.jsx)(ud, {
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
                    null != w ? (0, a.jsx)(um.A, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(um.L, { startedAt: w }) : null,
            null == f || null == b
                ? null
                : (0, a.jsxs)("span", {
                      className: ub.BP,
                      children: [
                          (0, a.jsx)(Q.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": b.aria,
                              children: b.text,
                          }),
                          (0, a.jsx)(uj, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(Q.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": C.intl.formatToPlainString(A.default["tCo+ZM"], { status: (0, ui.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: ub.XF,
                      children: (0, ui.Db)(h),
                  }),
        ],
    });
}
let uw = ["wheel", "touchstart", "pointerdown", "keydown"];
var uk = n(698638),
    uN = n(608711);
let uA = [C.intl.string(A.default["9w+Chc"]), C.intl.string(A.default.WAvmdq), C.intl.string(A.default.SKsrzl)];
function uC(e) {
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
        b = (0, o.bG)([rz.A], () => rz.A.getModelSettings(r), [r]),
        y = i.useRef(null),
        w = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: N,
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
                    for (let e of uw) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of uw) t.removeEventListener(e, u);
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
                r && (N.current ? w.current?.scrollToBottom() : k.current?.recordAnchor());
            });
        return (r.observe(e), null != t && r.observe(t), () => r.disconnect());
    }, [N]),
        i.useEffect(() => {
            (0, x.ensureConnection)(r);
        }, [r]),
        (0, rW.E1)(r));
    let O = nI(r),
        D = (function (e) {
            let t = (0, tm.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([f.A], () => (null == n ? null : (f.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: C.intl.format("channel" === s ? A.default["1cm4fj"] : A.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(r),
        F =
            ((n = (0, o.bG)([rG.A], () => rG.A.getFailure(r))),
            (l = i.useCallback(() => (0, rU.CM)(r), [r])),
            null == n
                ? null
                : {
                      message: C.intl.format(A.default.Up6Ssw, { reason: n }),
                      retry: { text: C.intl.string(A.default["ywA+ET"]), onClick: l },
                  }),
        z = (0, o.bG)([rG.A], () => rG.A.getSetupStartedAt(r), [r]),
        q = i.useCallback(
            (e, t) => {
                (0, x.sendUserMessage)(r, e, t);
            },
            [r],
        ),
        G = i.useCallback(
            (e, t) => {
                0 === O.annotations.length
                    ? q(e, t)
                    : (q(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nf(e.comment)),
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
                                      a.push(`${t + 1}. ${np(e.target)}`),
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
            [O, q, r],
        ),
        U = i.useCallback(() => (0, x.interruptTurn)(r), [r]),
        B = i.useCallback((e) => rC(r, e.implementation_prompt), [r]),
        [V, K] = (function (e) {
            let [t, n] = i.useState(() => r3(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? r3(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(r),
        H = i.useCallback(() => q(C.intl.string(A.default["t5CN3+"])), [q]),
        W = i.useCallback((e, t, n) => rC(r, e, { clarificationAnswers: t, attachments: n }), [r]),
        J = i.useCallback((e) => (0, rq.X)(r, e), [r]),
        X = i.useCallback((e) => (0, p.vX)(r, e), [r]),
        Y = i.useCallback((e) => sk(r, "chat", Array.from(e), X), [r, X]),
        Z = i.useCallback(() => rC(r, C.intl.string(A.default.Zc7gML)), [r]),
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
            (0, nP.BL)(er) &&
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
        if (null == ex || null == e || !(0, n3.vq)(t, HTMLElement) || null == ej) return;
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
            return uA[e % uA.length];
        }, [r]),
        ek = ea ? C.intl.string(A.default.Zc7gML) : "greeting" === eb && 0 === d.length ? ew : null,
        eN = i.useMemo(() => {
            for (let e = d.length - 1; e >= 0; e--) {
                let t = d[e];
                if ("assistant" === t.role && !(0, nP.BL)(t)) return t;
            }
        }, [d]),
        eA = null != eN,
        eC = null != eN ? (0, rH.S)(eN) : void 0,
        eS = ea && el ? Z : void 0,
        eE = i.useCallback(() => rC(r, C.intl.string(A.default.EMgIuY)), [r]),
        [eI, e_] = i.useState(null),
        [eM, eT] = i.useState(eA);
    (eM !== eA && (eT(eA), eA || e_(null)),
        i.useEffect(() => {
            if (!eA) return;
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
        }, [eA, eN?.steps, M]));
    let eP = M ? eI : "bottom",
        eL = i.useMemo(() => (null != eN ? (0, lC.b9)(eN.steps) : ""), [eN]),
        e$ = i.useMemo(() => (null != eN ? ((0, lN.lt)(eN.steps) ?? eN.todos) : void 0), [eN]),
        eO = eN?.provisionalTodo,
        eD = null != eN && lA(eN),
        eF = i.useMemo(() => {
            var e;
            return null != eN ? ((e = eN.steps), (0, at.k)((0, lN.Jf)(e, !0).tasks)) : void 0;
        }, [eN]);
    return (0, a.jsxs)("section", {
        ref: y,
        "data-conjure-chat": !0,
        className: uN.TE,
        children: [
            el
                ? (0, a.jsx)(lk.A, {
                      title: C.intl.string(A.default.gy7byi),
                      description: C.intl.string(A.default["dkv/WO"]),
                      icons: uk.ir,
                      onDrop: Y,
                  })
                : null,
            (0, a.jsx)(lB, {
                onJumpToActivity: L,
                line: eL,
                placement: eA && "top" === eP ? "top" : null,
                todos: e$,
                todosLive: eD,
                provisionalTodo: eO,
                agents: eF,
            }),
            (0, a.jsxs)("div", {
                className: uN.JX,
                children: [
                    (0, a.jsx)(lw.Ch, {
                        ref: w,
                        onScroll: $,
                        scrollbarGutter: ey ? "both-edges" : "stable",
                        className: [uN.N$, E ? null : uN.hB, ep ? uN.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ua, {
                            projectId: r,
                            messages: d,
                            emptyState: eb,
                            floatingSettingsMessageId: ef?.id,
                            liveClarificationId: eo?.id,
                            onPickIdea: el ? B : void 0,
                            onAskForIdeas: el ? H : void 0,
                            draftHasText: V,
                            onApprovePlan: el ? eE : void 0,
                            onRestoreVersion: ee || eA ? void 0 : u,
                            scrollerRef: w,
                            stickToBottomRef: N,
                            pinned: S,
                            onUnpin: I,
                            handleRef: k,
                            onShowsLatestChange: P,
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: uN.NJ,
                        children: (0, a.jsx)(uy, {
                            projectId: r,
                            thinking: eA,
                            turnStartedAt: eC,
                            restoring: ee,
                            remixStartedAt: z,
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
                              className: ep ? `${uN.B5} ${uN.J9}` : uN.B5,
                              children: (0, a.jsx)(
                                  rF,
                                  { projectId: r, clarification: eo, onSubmit: el ? W : void 0, onDismiss: eu },
                                  eo.id,
                              ),
                          }),
                    null == eh
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == eo ? ev : void 0,
                              className: uN.B5,
                              children: (0, a.jsx)(rK, { projectId: r, request: eh, onDismiss: eg }, ef?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: uN.Jx,
                children: [
                    (0, a.jsx)(lB, {
                        onJumpToActivity: L,
                        line: eL,
                        placement: eA && "bottom" === eP ? "bottom" : null,
                        todos: e$,
                        todosLive: eD,
                        provisionalTodo: eO,
                        agents: eF,
                    }),
                    0 === O.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uN.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: C.intl.formatToPlainString(A.default["7b49dS"], {
                                          count: O.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: C.intl.string(A.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(et.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: C.intl.string(A.default["/zOv9+"]),
                                      onClick: () => nA(r),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: uN.qB,
                              children: (0, a.jsx)(tQ.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == D
                        ? null
                        : (0, a.jsxs)("div", {
                              className: uN.Db,
                              children: [
                                  (0, a.jsx)(tQ.w, { type: "warning", role: "status", message: D.message }),
                                  (0, a.jsx)("div", {
                                      className: uN.jU,
                                      children: (0, a.jsx)(eR.m, {
                                          text: C.intl.string(C.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(tl.K, {
                                              "aria-label": C.intl.string(C.t.WAI6xu),
                                              icon: en.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: D.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(sM, {
                        projectId: r,
                        canSend: el,
                        running: eA,
                        restoring: ee,
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
                        onDraftHasTextChange: K,
                    }),
                ],
            }),
        ],
    });
}
var uS = n(761508),
    uE = n(933294),
    uI = n(207438),
    u_ = n(683438);
function uM(e, t) {
    return String(e).padStart(t, "0");
}
var uT = n(667931);
let uP = {
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
    uR = { running: "Running", ok: "Done", error: "Failed" };
function uL(e) {
    return e < 1e3 ? `${e}ms` : `${(e / 1e3).toFixed(1)}s`;
}
function u$(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function uO(e) {
    return uL(Math.round(e));
}
function uD(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function uF(e) {
    return uO(e.count > 1 ? e.totalMs : e.end - e.start);
}
let uz = ["Arguments", "Result", "Usage", "Details"];
function uq(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function uG(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function uU(e) {
    let t = (0, uT.bM)(e)?.end;
    return null != t ? uL(t) : (0, uT.lp)(e) ? "interrupted" : "still running";
}
function uB(e) {
    return [
        (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
            if (e.length > 64) return null;
            let n = Date.parse(e);
            if (Number.isNaN(n)) return null;
            let l = new Date(n),
                r = `${uM(l.getHours(), 2)}:${uM(l.getMinutes(), 2)}:${uM(l.getSeconds(), 2)}`;
            return "millis" === t ? `${r}.${uM(l.getMilliseconds(), 3)}` : r;
        })(new Date(e.started_at).toISOString()) ?? "",
        uD(e.spans.length),
        (0, uT.Sj)((0, uT.bM)(e)?.attrs),
    ]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function uV(e) {
    let t = (0, uT.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, uT.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += uK(r, "in")),
                (l.output += uK(r, "out")),
                (l.cacheRead += uK(r, "cache_read")),
                (l.cacheWrite += uK(r, "cache_write")),
                (l.costUsd += uK(r, "cost_usd"))));
    }
    let r = uT.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function uK(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var uH = n(738188),
    uW = n(430993),
    uJ = n(364840),
    uX = n(224640),
    uY = n(20742);
let uQ = { collapsed: new Set(), revealed: new Set() };
var uZ = n(872892);
let u0 = {
    op: uZ.Q,
    model: uZ.i3,
    tool: uZ.dH,
    setup: uZ.kc,
    worktree: uZ.Qx,
    sandbox: uZ.QH,
    build: uZ.F1,
    platform: uZ.Op,
    other: uZ.fv,
};
function u1(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      uD(t.calls, "model call"),
                      `${u$(t.input)} in`,
                      `${u$(t.output)} out`,
                      `${u$(t.cacheRead)} cache read`,
                      `${u$(t.cacheWrite)} cache write`,
                      uG(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: uZ.M1,
        children: [
            (0, a.jsx)("div", {
                className: uZ.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${uZ.DJ} ${u0[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: uZ.o1,
                children: uT.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${uO(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: uZ.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${uZ.nf} ${u0[e]}` }),
                                (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: uP[e] }),
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
function u2(e) {
    return `conjure-perf-trace-${e}`;
}
function u3(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: uZ.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(Q.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${uZ.p0} ${s + o > 85 ? uZ.EU : uZ.jh}`,
                children: i,
            }),
        ],
    });
}
function u7(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? eP._ : le.a,
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
        id: u2(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${uZ.$y} ${r ? uZ.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: uZ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(eh.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: uZ.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: uZ.YJ }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: uZ.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${uZ.nf} ${u0[t.category]}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: uZ.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: uZ.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: uZ.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(uH.WarningIcon, { size: "xs", color: "currentColor", className: uZ.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(u3, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${uZ.M0} ${uZ.Nh}`
                    : t.running
                      ? `${uZ.M0} ${uZ.rF}`
                      : `${uZ.M0} ${u0[t.category]}`,
                duration: uF(t),
            }),
        ],
    });
}
function u5(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(eh.D, {
        tag: "div",
        role: "treeitem",
        id: u2(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${uZ.$y} ${l ? uZ.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: uZ.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: uZ.ai,
                        children: (0, a.jsx)(eP._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: uZ.U9 }),
                    (0, a.jsx)("span", { className: `${uZ.nf} ${uZ.dL}` }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: uZ.MQ,
                        children: uD(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(u3, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${uZ.M0} ${uZ.ab} ${uZ.dL}`,
                duration: uO(t.totalMs),
            }),
        ],
    });
}
function u6(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(Q.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: uZ._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: uZ.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${uZ.nf} ${u0[t.category]}` }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [uq("Start", `+${uO(e.start)}`), uq("Duration", uF(e))];
                      e.count > 1
                          ? t.push(
                                uq("Calls", String(e.count)),
                                uq("Longest call", uO(e.maxMs)),
                                uq("Spread over", uO(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(uq("Self time", uO(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(uq("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(uq("Notes", l.join(", "))),
                          null != e.span.error && t.push(uq("Error", e.span.error)));
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
                              s = "cost_usd" === t ? uG(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), uq(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...uz.flatMap((e) => {
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
                                            className: uZ.xd,
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
                                                            className: uZ.vl,
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
function u4(e) {
    let { trace: t } = e,
        n = i.useMemo(() => uV(t), [t]);
    return (0, a.jsx)(u1, { stats: n });
}
function u8(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, uT.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? uQ : (0, uT.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, uT.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, uT.x7)(t)), l((n) => (0, uT._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, uT.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, uT.IE)(t, e);
                        null != n && l((e) => (0, uT.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, uT.IE)(t, e);
                        null != n && l((e) => (0, uT.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, uT.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, uT.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, uT.hB)(t));
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
        f = (0, uT.dj)(t),
        h = i.useMemo(() => (0, uT.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(u2(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(uW.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: uZ.z,
                        children: [
                            (0, a.jsx)(Q.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: uU(t),
                            }),
                            (0, a.jsx)(Q.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: uB(t),
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
                                      children: `${uD(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(u4, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: uZ.KE,
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
                        "aria-activedescendant": null == o ? void 0 : u2(o),
                        className: uZ.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(g) },
                        onKeyDown: p,
                        children: [
                            (0, a.jsxs)("div", {
                                className: uZ.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: uZ.So,
                                        children: (0, a.jsx)(Q.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: uZ.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                Q.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${uZ.io} ${(e / f) * 100 > 85 ? uZ.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : uO(e),
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
                                          u7,
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
                                    : (0, a.jsx)(u5, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(uJ.j, { children: (0, a.jsx)(u6, { node: s }) }),
        ],
    });
}
function u9(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([ov.A], () => ov.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(uX.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(uY.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(uW.c, {
                      children: (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(u8, { trace: i }),
        ],
    });
}
let ce = { running: uZ.Vf, ok: uZ.mo, error: uZ.Sr };
function ct(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${uZ.Om} ${ce[t]}`, role: "img", "aria-label": uR[t] });
}
function cn(e, t) {
    (0, tj.openModal)((n) => (0, a.jsx)(u9, { ...n, projectId: e, traceId: t }));
}
function cl(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => cn(t, n.id), [t, n.id]);
    return (0, a.jsxs)(eh.D, {
        className: uZ.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: uZ.sU,
                children: [
                    (0, a.jsx)(ct, { status: (0, uT.lQ)(n) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: uZ._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: uU(n),
                    }),
                ],
            }),
            (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: uB(n) }),
            null == l
                ? null
                : (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function cr(e) {
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
function ca(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([ov.A], () => ov.A.getTimingTraces(t), [t]),
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
                    let t = e.map(uV);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: uT.BF.map((e) => ({
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
              className: uZ.Ie,
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
              className: uZ.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: uZ.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: uZ.fH,
                              children: (0, a.jsx)(u_.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(cr, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(lw.Ch, {
                      className: uZ.XG,
                      children: [
                          (0, a.jsx)(u1, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(Q.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: uZ.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(cl, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function ci(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function cs(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function co(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function cu(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function cc(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function cd(e) {
    return C.intl.string("preview" === e ? A.default["2yLYlG"] : A.default.eiAi57);
}
let cm = ["all", "preview", "stable", "web"];
function cf(e) {
    switch (e.reason) {
        case "local":
            return C.intl.string(A.default.mUeKML);
        case "unconfigured":
            return C.intl.string(A.default.bGefb5);
        case "unauthorized":
            return C.intl.string(A.default.KLx6Bb);
        default:
            return null != e.detail
                ? C.intl.formatToPlainString(A.default.t09Q6q, { detail: e.detail })
                : C.intl.string(A.default["t+tG59"]);
    }
}
function ch(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : C.intl.formatToPlainString(A.default["XO/bN4"], {
              p50: ci(e.memory_p50_bytes ?? 0),
              p999: ci(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let cg = {
    db: () => A.default["7l+DFG"],
    db_preview: () => A.default.FAuffi,
    runtime: () => A.default["Gkl+ab"],
    runtime_preview: () => A.default.ynpJzv,
    bot: () => A.default["5/i0cj"],
    bot_preview: () => A.default.m2jsnw,
};
var cp = n(911608),
    cx = n(177427);
function cv(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: cx.KE,
        children: [
            (0, a.jsx)("div", {
                className: cx.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(el.y, { type: el.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: C.intl.string(A.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(Q.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: C.intl.formatToPlainString(A.default.INVO50, { time: cu(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(et.$, { variant: "secondary", size: "sm", text: C.intl.string(A.default.oKEgiu), onClick: l }),
        ],
    });
}
function cj(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: cx.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(Q.E, { variant: "text-xs/semibold", color: "text-muted", className: cx.Gf, children: t }),
            n,
        ],
    });
}
function cb(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: cx.N8,
        children: [
            (0, a.jsxs)("div", {
                className: cx.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: cx.kS,
                        children: [i, (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: cx.kS,
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
function cy(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: cx.N8,
        children: [
            (0, a.jsxs)("div", {
                className: cx.x7,
                children: [
                    (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(cp.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? cx.dh : void 0,
            }),
        ],
    });
}
function cw(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(cb, {
            label: C.intl.string(A.default.SXP7pD),
            value: C.intl.string(A.default.E5hKVi),
            hint: cf(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(cb, {
            label: C.intl.string(A.default.SXP7pD),
            value: "\u2014",
            hint: C.intl.string(A.default.AGvoMJ),
        });
    let l = ch(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(cb, { label: C.intl.string(A.default["H/X+FI"]), value: cs(n.cpu_ms) }),
            null != l && (0, a.jsx)(cb, { label: C.intl.string(A.default.lmFmMO), value: l }),
        ],
    });
}
function ck(e) {
    let { analytics: t } = e,
        n = C.intl.string(A.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(cj, {
            title: n,
            children: (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: cf(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? cg[t] : null) ? C.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(cj, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(Q.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: C.intl.string(A.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          cb,
                          {
                              label: n,
                              value: C.intl.formatToPlainString(A.default["w/2voO"], { cpu: cs(t.cpu_ms) }),
                              hint: ch(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var cN = n(678708),
    cA = n(414499),
    cC = n(714800),
    cS = n(81466),
    cE = n(424383),
    cI = n(816943),
    c_ = n(268791),
    cM = n(514042),
    cT = n(872351),
    cP = n(708988),
    cR = n(150934),
    cL = n(417270);
let c$ = "Restart Agent",
    cO = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function cD(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function cF(e, t) {
    return { label: e, value: null != t && "" !== t ? cu(t) : "Unknown", icon: "calendar" };
}
function cz(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function cq(e, t, n, l) {
    let [r, a] = cO[n.status];
    return { label: e, value: `${cz(n.bytes)} of ${cz(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function cG(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = cu(e.at);
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
let cU = { main: "Main vs Remote", wip: "WIP vs Remote" };
function cB(e) {
    let t = `container ${cD(e.local)} \xb7 remote ${cD(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: cU[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${co(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${co(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${co(n)} Ahead, ${co(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let cV = ["main", "wip"];
var cK = n(400154);
let cH = {
        checkout: cN.FolderIcon,
        edit: lK.PencilIcon,
        remote: cA.h,
        commits: cC.e,
        calendar: cS.CalendarIcon,
        save: cE.L,
        objects: ed.R,
        download: cI.$,
        size: c_.$,
        file: cM.FileIcon,
    },
    cW = {
        ok: [aQ.y, ea.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [uH.WarningIcon, ea.A.colors.ICON_FEEDBACK_WARNING],
        error: [sj.a, ea.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [cT.z, ea.A.colors.ICON_MUTED],
        behind: [cP.M, ea.A.colors.ICON_MUTED],
    };
function cJ(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([ov.A], () => ov.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, uI.DK)(t), [t]),
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
                    `Updated ${cu(r)}`,
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
    return (0, a.jsxs)(cj, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: cK.Lj,
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
                    if (!e.running || null != e.localError) return [cG(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            cG(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : co(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = cV.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(cB))
                        : l.push(
                              { label: "Main", value: cD(e.heads.main), icon: "remote" },
                              { label: "WIP", value: cD(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? co(e.commits) : "Unknown", icon: "commits" },
                            cF("Oldest Commit", e.oldest),
                            cF("Newest Commit", e.newest),
                            cG(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${co(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${co(t.loose)} loose (${ci(t.looseBytes)}) \xb7 ${co(t.packed)} packed in ${n} (${ci(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${co(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${co(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                cq(
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
                                  cq("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = cH[r],
                        [o, u] = null != i ? cW[i] : [null, void 0];
                    return (0, a.jsx)(
                        cb,
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
function cX(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([ov.A], () => ov.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, uI.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = ov.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, uI.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                lb.h.dispatch({
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
            let u = i.useCallback(() => (0, uI.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: c$,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, eH.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: cK.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: cK.nM,
                children: [
                    (0, a.jsx)(cR.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(et.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: cL.RetryIcon,
                        text: c$,
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
                            return `Restarted \xb7 new instance since ${cu(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${cu(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function cY(e, t) {
    return (0, a.jsx)(cb, {
        label: e,
        value: C.intl.formatToPlainString(A.default.yHJxuP, { count: co((0, uh.aM)(t)) }),
        hint: `${co(t.input_tokens)} in \xb7 ${co(t.output_tokens)} out \xb7 ${co(t.cache_read_input_tokens)} cache read`,
    });
}
function cQ(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([ov.A], () => ov.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([ov.A], () => ov.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([ov.A], () => ov.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([ov.A], () => ov.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, uI.Lj)(t), [t]),
        f = i.useCallback(() => (0, uI.Lj)(t, !0), [t]),
        h = (0, o.bG)([ov.A], () => ov.A.getSandboxRestartState(t), [t]),
        g = (0, o.bG)([e0.A], () => e0.A.isThinking(t), [t]),
        p = i.useCallback(() => (0, uI.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        v = n?.agent?.limits ?? null,
        j = n?.agent?.session ?? null,
        b = u?.promptCeiling ?? v?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: cK.Mf,
        children: [
            (0, a.jsx)(cv, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(cj, {
                title: C.intl.string(A.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(A.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(cb, {
                                      label: C.intl.string(A.default["9nqym2"]),
                                      value: co((0, uh.a7)(x.cost_usd)),
                                      hint: C.intl.formatToPlainString(A.default.NCdUIh, { count: co(x.turns) }),
                                  }),
                                  cY(C.intl.string(A.default.xtxP0e), x.orchestrator),
                                  cY(C.intl.string(A.default["9Sj3SX"]), x.codegen),
                                  cY(C.intl.string(A.default.ANCEo3), (0, uh.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(cb, {
                                          label: C.intl.string(A.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${co(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(cj, {
                title: C.intl.string(A.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(A.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  cY(C.intl.string(A.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(cb, {
                                      label: C.intl.string(A.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, uh.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(cj, {
                title: C.intl.string(A.default.NbRk9a),
                children: [
                    null != u && null != b
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(cy, {
                                      label: C.intl.string(A.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: b,
                                      formatValue: co,
                                  }),
                                  (0, a.jsx)(cb, {
                                      label: C.intl.string(A.default.mRbSns),
                                      value: `${co(u.tokensBefore)} \u{2192} ${co(u.tokensAfter)}`,
                                      hint: C.intl.formatToPlainString(A.default.Vq3skS, {
                                          count: co(u.retainedMessages),
                                          time: cu(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(Q.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != b
                                      ? C.intl.formatToPlainString(A.default.GMLCNv, { ceiling: co(b) })
                                      : C.intl.string(A.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(cb, {
                            label: C.intl.string(A.default["4BX5KK"]),
                            value: `${co(c.projected)} / ${co(c.threshold)}`,
                            critical: !0,
                            hint: C.intl.formatToPlainString(A.default["6ngCax"], { time: cu(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: cK.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(A.default["1EiJeb"]),
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
                                    if ("idle" === e) return C.intl.string(A.default.wox6Ev);
                                    if ("pending" === e) return C.intl.string(A.default.OcPHQ1);
                                    let t = cu(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return C.intl.formatToPlainString(A.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? A.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? A.default.YZb4hK
                                              : A.default.ZoUSVK;
                                    return C.intl.formatToPlainString(n, {
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
                                            text: C.intl.string(A.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(Q.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: C.intl.string(A.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: cK.Lj,
                        children: [
                            (0, a.jsx)(et.$, {
                                variant: "secondary",
                                size: "sm",
                                text: C.intl.string(A.default["5qCjBu"]),
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
                                    if ("idle" === e) return C.intl.string(A.default.mlok8D);
                                    if ("pending" === e) return C.intl.string(A.default["1ugSyK"]);
                                    let t = cu(e.observedAt);
                                    return C.intl.formatToPlainString(
                                        "restarted" === e.outcome ? A.default["76mfqO"] : A.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(cX, { projectId: t }),
                ],
            }),
            (0, a.jsx)(cJ, { projectId: t }),
            (null != j || n?.analytics != null) &&
                (0, a.jsxs)(cj, {
                    title: C.intl.string(A.default.EsSzCS),
                    children: [
                        null != j &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(cb, {
                                        label: C.intl.string(A.default.CLXHAs),
                                        value: cu(j.instance_since),
                                        hint: C.intl.string(A.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(cb, { label: C.intl.string(A.default["8V8e1Z"]), value: co(j.sockets) }),
                                    (0, a.jsx)(cb, {
                                        label: C.intl.string(A.default["4pBzYW"]),
                                        value: j.turn_inflight
                                            ? C.intl.string(A.default.Wv025I)
                                            : C.intl.string(A.default["7/lsFY"]),
                                    }),
                                    j.queued_messages > 0 &&
                                        (0, a.jsx)(cb, {
                                            label: C.intl.string(A.default["3oUYnv"]),
                                            value: co(j.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(cw, { analytics: n.analytics }),
                    ],
                }),
            null != v &&
                (0, a.jsxs)(cj, {
                    title: C.intl.string(A.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(cb, {
                            label: C.intl.string(A.default.IlDBN3),
                            value: co(v.max_subagent_iterations),
                        }),
                        (0, a.jsx)(cb, {
                            label: C.intl.string(A.default["ZdzKR+"]),
                            value: C.intl.formatToPlainString(A.default.yHJxuP, { count: co(v.context_window_tokens) }),
                        }),
                        (0, a.jsx)(cb, {
                            label: C.intl.string(A.default.cIhN2W),
                            value: C.intl.formatToPlainString(A.default.yHJxuP, {
                                count: co(v.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(cb, {
                            label: C.intl.string(A.default["+fOn/q"]),
                            value: co(v.max_user_message_chars),
                        }),
                        (0, a.jsx)(cb, { label: C.intl.string(A.default.kIHga0), value: co(v.max_build_attempts) }),
                        (0, a.jsx)(cb, { label: C.intl.string(A.default.Iw03yW), value: co(v.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var cZ = n(237528),
    c0 = n(629584),
    c1 = n(531893);
function c2(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: c1.ut,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: C.intl.string(A.default.h1SE6R),
              }),
          });
}
function c3(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: c1.qf,
              children: [
                  (0, a.jsx)(Q.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: C.intl.string(A.default.h1SE6R),
                  }),
                  (0, a.jsx)(Q.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: C.intl.string(A.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: c1.qf,
              children: [
                  (0, a.jsx)(Q.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(Q.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function c7(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: c1.ps,
              children: (0, a.jsx)(Q.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: C.intl.string(A.default.V7Ri8H),
              }),
          })
        : null;
}
var c5 = n(109079);
let c6 = i.memo(function (e) {
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
        className: c5.vK,
        children: [
            (0, a.jsx)(Q.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: c5.Mt,
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
                className: c5.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: c5.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: c5.Cq, children: (0, a.jsx)(cZ.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: c5.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(cZ.v, { text: C.intl.string(A.default.TrC9c8), variant: "redLight" }),
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
                                      className: c5.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": C.intl.string(A.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(le.a, {
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
                                                  C.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? A.default.kUhyUv : A.default["N+fphl"],
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
                                          className: c5.dF,
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
function c4(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([uE.A], () => uE.A.getLogs(t), [t]),
        l = (0, o.bG)([uE.A], () => uE.A.getHistoryState(t, "logs")),
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
                cm.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return cd(e);
                            case "web":
                                return C.intl.string(A.default.IVzfVV);
                            default:
                                return C.intl.string(A.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: c5.$F,
        children: [
            (0, a.jsxs)("div", {
                className: c5.y4,
                children: [
                    (0, a.jsx)(c0.I, {
                        look: "pill",
                        "aria-label": C.intl.string(A.default.MhvyUU),
                        options: g,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: c5.KT,
                        children: (0, a.jsx)(u_.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: C.intl.string(A.default["m2+37Y"]),
                            "aria-label": C.intl.string(A.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(c2, { state: l }),
            (0, a.jsxs)(lw.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: c5.sx,
                children: [
                    (0, a.jsx)(c7, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(c3, {
                              state: l,
                              emptyTitle: C.intl.string(A.default.S7qlPG),
                              emptyBody: C.intl.string(A.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(Q.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: C.intl.string(A.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(c6, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function c8(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(cj, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(Q.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: C.intl.string(A.default.umcjif),
                      }),
        })
    );
}
function c9(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(cb, {
                      label: C.intl.formatToPlainString(A.default["01ZMS4"], { env: cd(n) }),
                      value: ((t = l.connected), C.intl.string(t ? A.default.Wv025I : A.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(cb, {
                      label: C.intl.string(A.default["z1dh+F"]),
                      value: co(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${cu(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(cb, { label: C.intl.string(A.default.Iz5GnJ), value: co(l.guild_count) }),
                  (0, a.jsx)(cb, {
                      label: C.intl.string(A.default["7UqtNv"]),
                      value: co(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? C.intl.formatToPlainString(A.default.MasSly, {
                                    code: l.last_close_code,
                                    time: cu(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(cb, {
                          label: C.intl.string(A.default["x3+JXJ"]),
                          value: co(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(cb, { label: cd(n), value: C.intl.string(A.default.lTHQss) });
}
function de(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(cb, {
        label: cd(t),
        value: C.intl.formatToPlainString(A.default["Xq+wHT"], {
            requests: co(n.requests),
            failures: co(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? C.intl.formatToPlainString(A.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: cu(n.last_failure.at),
                  })
                : C.intl.formatToPlainString(A.default["7KlGT6"], { time: cu(n.since) }),
    });
}
function dt(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(cb, {
                label: C.intl.formatToPlainString(A.default["92gVTm"], { env: cd(t) }),
                value: co(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    cb,
                    {
                        label: C.intl.formatToPlainString(A.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? C.intl.formatToPlainString(A.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? C.intl.formatToPlainString(A.default.wxAWNv, { time: cu(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function dn(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(cb, {
        label: cd(t),
        value: C.intl.formatToPlainString(A.default.suAOj9, { calls: co(n.calls), errors: co(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function dl(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(cj, {
            title: t,
            children: (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: C.intl.string(A.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(cj, {
        title: t,
        children: [
            (0, a.jsx)(cb, {
                label: C.intl.string(A.default.xtD4Zp),
                value: co(n.requests),
                hint: C.intl.formatToPlainString(A.default["7KlGT6"], { time: cu(n.since) }),
            }),
            (0, a.jsx)(cb, { label: C.intl.string(A.default.gfRhR3), value: co(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(cy, {
                              label: C.intl.string(A.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: cs,
                          }),
                          (0, a.jsx)(cb, {
                              label: C.intl.string(A.default.mSKImM),
                              value: cs(r),
                              hint: C.intl.formatToPlainString(A.default.JqMU05, {
                                  total: cs(n.cpu_ms_total),
                                  wall: cs(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(cb, {
                      label: C.intl.string(A.default.LEJ5r3),
                      value: C.intl.string(A.default["2Ekb2b"]),
                      hint: C.intl.string(A.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(cb, { label: C.intl.string(A.default.xvmL1D), value: cs(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(cb, { label: C.intl.string(A.default["4sQYwH"]), value: co(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(cb, {
                label: C.intl.string(A.default.bQenOy),
                value: co(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: C.intl.formatToPlainString(A.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(cb, { label: C.intl.string(A.default.xgpn4Y), value: cc(n.build) }),
        ],
    });
}
function dr(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: C.intl.string(A.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: C.intl.string(A.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: C.intl.string(A.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(cj, {
        title: C.intl.string(A.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(cb, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(cb, {
                                  label: C.intl.formatToPlainString(A.default.u7kJJ4, { env: n }),
                                  value: ci(l.r2_bytes),
                                  hint: C.intl.formatToPlainString(
                                      l.r2_truncated ? A.default.lH0oQw : A.default.m9h02S,
                                      { count: co(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(cy, {
                                      label: C.intl.formatToPlainString(A.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: ci,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function da(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: cK.Mf,
        children: [
            (0, a.jsx)(cv, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(dl, {
                            title: C.intl.string(A.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(dl, {
                            title: C.intl.string(A.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(dr, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(c8, {
                                title: C.intl.string(A.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(c9, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(c8, {
                                title: C.intl.string(A.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(de, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(c8, {
                                title: C.intl.string(A.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dt, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(c8, {
                                title: C.intl.string(A.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(dn, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(ck, { analytics: t.analytics }),
                        (0, a.jsxs)(cj, {
                            title: C.intl.string(A.default.fQMpFp),
                            children: [
                                (0, a.jsx)(cb, {
                                    label: C.intl.string(A.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? cc(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(cb, {
                                    label: C.intl.string(A.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? cc(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var di = n(592465);
function ds(e) {
    let { projectId: t, onClose: n } = e,
        l = nc(),
        [r, s] = i.useState(() => (l && ns?.projectId === t ? "trace" : "logs")),
        c = (0, o.bG)([ov.A], () => ov.A.getStatus(t), [t]),
        d = (0, o.bG)([ov.A], () => ov.A.getFetchState(t), [t]),
        m = i.useCallback(() => {
            ((0, uI.R7)(t), (0, uI.DK)(t));
        }, [t]);
    (i.useEffect(() => m(), [m]), i.useEffect(() => (0, x.subscribeDebugBacklog)(t), [t]));
    let f = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == ns || ns.projectId !== e) return null;
            let { traceId: t } = ns;
            return ((ns = null), t);
        })(t);
        return null != e && (cn(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        f();
    }, [f]),
        no(t, () => {
            f() && s("trace");
        }));
    let h = i.useCallback(() => {
            (0, ts.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: ov.A.getStatus(t),
                        last_turn_usage: ov.A.getLastTurnUsage(t),
                        last_compaction: ov.A.getLastCompaction(t),
                        last_compaction_decline: ov.A.getLastCompactionDecline(t),
                        timing_traces: ov.A.getTimingTraces(t),
                        logs: uE.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, u.P0)({ text: C.intl.string(A.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        g = C.intl.string(A.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: di.nd,
        "aria-label": g,
        children: [
            (0, a.jsxs)(lv.Ay, {
                "aria-label": g,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(lv.Ay.Icon, {
                            icon: oD.CopyIcon,
                            tooltip: C.intl.string(A.default.TkHqy2),
                            onClick: h,
                        }),
                        (0, a.jsx)(lv.Ay.Icon, { icon: en.P, tooltip: C.intl.string(C.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(lv.Ay.ChannelIcon, { icon: ne.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(lv.Ay.Title, { children: g }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: di.rf,
                children: [
                    (0, a.jsxs)(uS.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": C.intl.string(A.default.RvvWIh),
                        className: di.vR,
                        children: [
                            (0, a.jsx)(uS.V.Item, { id: "logs", children: C.intl.string(A.default["+VRYCm"]) }),
                            (0, a.jsx)(uS.V.Item, { id: "worker", children: C.intl.string(A.default["50D0FZ"]) }),
                            (0, a.jsx)(uS.V.Item, { id: "agent", children: C.intl.string(A.default.UkbTK1) }),
                            l ? (0, a.jsx)(uS.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(c4, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(da, { status: c, fetchState: d, onRefresh: m })
                          : "trace" === r && l
                            ? (0, a.jsx)(ca, { projectId: t })
                            : (0, a.jsx)(cQ, { projectId: t, status: c, fetchState: d, onRefresh: m }),
                ],
            }),
        ],
    });
}
var du = n(333007),
    dc = n(365912),
    dd = n(775121),
    dm = n(873715);
function df(e) {
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
let dh = Object.freeze({ x: -1, y: -1 });
function dg(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = df(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var dp = n(470779);
function dx(e) {
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
        } = sN({ projectId: t, surface: "design", onUploadFile: f }),
        b = i.useRef(null),
        y = (d || h.length > 0) && v && !m,
        w = i.useCallback(() => {
            if (!y) return;
            let e = j();
            u(e.length > 0 ? e : void 0);
        }, [y, j, u]),
        [k, N] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => N(!0));
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
        className: J()(dp.M0, { [dp.ho]: k && !m, [dp.ET]: m }),
        style: { left: P, top: R },
        "data-testid": "conjure-design-compose-bar",
        children: [
            (0, a.jsx)("input", {
                ref: b,
                type: "file",
                multiple: !0,
                className: dp.Fg,
                tabIndex: -1,
                "aria-hidden": !0,
                onChange: (e) => {
                    (g(Array.from(e.target.files ?? [])), (e.target.value = ""));
                },
            }),
            (0, a.jsx)(eR.m, {
                position: "bottom",
                text: C.intl.string(A.default.lgvqSB),
                ariaHidden: !0,
                children: (0, a.jsx)("button", {
                    type: "button",
                    className: dp.tY,
                    onClick: () => b.current?.click(),
                    "aria-label": C.intl.string(A.default.lgvqSB),
                    children: (0, a.jsx)(ec.H, { size: "custom", color: "currentColor", className: dp.WW }),
                }),
            }),
            (0, a.jsx)(lH.y, {
                autoFocus: !0,
                rows: 1,
                className: dp.hF,
                value: s,
                placeholder: "" === r ? C.intl.string(A.default.MPPV1Q) : `Edit ${r}`,
                "aria-label": C.intl.string(A.default.KCYqWL),
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
                      className: dp.ZO,
                      children: h.map((e) => (0, a.jsx)(sA, { draft: e, onRemove: x }, e.localId)),
                  })
                : null,
        ],
    });
}
var dv = n(192888);
function dj(e, t) {
    return (0, dv.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(dg, () => ({ status: "failed" }));
}
var db = n(108308);
let dy = { x: 25, y: 21 };
function dw(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function dk(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function dN(e, t, n, l) {
    let r = dk(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function dA(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function dC(e) {
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
function dS(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = nI(u),
        m = (0, nd.Zv)(u),
        f = (0, tj.useHasAnyModalOpen)(),
        h = (0, o.bG)([eQ.default], () => eQ.default.getCurrentUser()),
        g = h?.id ?? null,
        [v, j] = i.useState(null),
        [b, y] = i.useState(null),
        [w, k] = i.useState(!1),
        [N, S] = i.useState(!1),
        [E, I] = i.useState(null),
        [_, M] = i.useState(!1),
        T = i.useRef(null),
        P = i.useRef(null),
        R = i.useRef(null),
        [L, $] = i.useState(null),
        [O, D] = i.useState(!1),
        [F, z] = i.useState(null),
        [q, G] = i.useState(null),
        U = i.useRef(!1),
        [B, V] = i.useState(!1),
        [K, H] = i.useState(null),
        W = c && !m && !f;
    null == F || (W && F.projectId === u) || z(null);
    let J = F?.projectId ?? null;
    (i.useEffect(() => {
        if (null != J) return () => rN(J, "design");
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
                j((t) => (dw(t, e) ? t : e));
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
                (0, dm.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                    (t) => {
                        if (!e) return;
                        k(!1);
                        let n = "completed" === t.status ? dC(t.response) : null;
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
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!W || null == v || null == u) return;
        if (null == b) {
            X.current = v;
            return;
        }
        if (dw(X.current, v)) return;
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
                    (0, dm.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !el.current) return;
                        let l = dC(e.response);
                        null != l && (y(l), nC(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = df(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nk(u)).active &&
                                0 !== r.size &&
                                nN(u, {
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
                    (I(null), z(null), H(null), y(null));
                };
        }, [W]));
    let Y = i.useRef(null),
        ee = i.useRef(null),
        en = i.useRef(!1),
        el = i.useRef(!1);
    i.useEffect(() => {
        ((el.current = W), W || ((Y.current = null), (ee.current = null), (R.current = null), M(!1)));
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
                    dj(n, t).then((t) => {
                        if (((en.current = !1), el.current)) {
                            if ("picked" !== t.status || dP(t.target, eu.current.rect, eu.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? I(null)
                                    : "unsupported" === t.status && D(!0);
                            else {
                                let e = nh(t.target);
                                ($((t) => (dT(t, e) ? t : e)),
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
            if (null == F) return;
            let e = !U.current;
            (G({ at: F.at, label: F.label, draft: F.draft, instant: e }), V(e), z(null));
        }, [F]);
    (i.useEffect(() => {
        if (!B) return;
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => V(!1));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, [B]),
        i.useEffect(() => {
            if (null == q) return;
            let e = setTimeout(() => G(null), d_);
            return () => clearTimeout(e);
        }, [q]));
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
                    (rN(u, "design"),
                    H(null),
                    (U.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nh(e) }));
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
                if (null == v || null != K) return;
                if (((R.current = { x: e.clientX, y: e.clientY }), em(), M(!0), null != F)) {
                    (Math.abs(e.clientX - F.at.x) > dM || Math.abs(e.clientY - F.at.y) > dM) && (U.current = !0);
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
                        n = null != e && dP(e, v, ei) ? null : e;
                    if (null != n) {
                        let e = nh(n);
                        $((t) => (dT(t, e) ? t : e));
                    }
                    I((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = ee.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((ee.current = n), (Y.current = n), er());
            },
            [v, ei, es, ed, O, eo, F, K, em, er],
        ),
        eh = null == K ? null : d.find((e) => e.id === K.id),
        eg = W && (_ || F?.target.marker != null || eh?.target.marker != null);
    i.useEffect(() => {
        if (eg)
            return () => {
                let e = r();
                null != e && dj(e, dh);
            };
    }, [eg, r]);
    let ep = i.useCallback(() => {
        (M(!1), I(null), (ee.current = null), (Y.current = null));
    }, []);
    i.useEffect(() => {
        if (!W || !_ || !es || O || null != F || null != K) return;
        let e = R.current,
            { rect: t, scale: n } = eu.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((ee.current = l), (Y.current = l), er());
    }, [W, _, es, O, F, K, er]);
    let ex = i.useCallback(
            (e) => {
                if (null != F || null != K) {
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
                            ? nm
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(E, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [E, v, ed, F, K, ec, ea],
        ),
        ev = i.useCallback(() => {
            null != u && (I(null), nA(u));
        }, [u]),
        ej = i.useCallback(() => {
            null != u &&
                (null != F
                    ? ea()
                    : K?.confirmingRemove === !0
                      ? H({ ...K, confirmingRemove: !1 })
                      : null != K
                        ? H(null)
                        : ev());
        }, [u, F, K, ea, ev]),
        eb = i.useRef(ej),
        ey = i.useRef(ev);
    i.useLayoutEffect(() => {
        ((eb.current = ej), (ey.current = ev));
    });
    let ew = i.useRef(null);
    i.useEffect(() => {
        if (W)
            return (
                dd.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        dd.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), eb.current());
        }
        function t(e) {
            let t = e.target;
            (0, n3.vq)(t) &&
                ew.current?.contains(t) !== !0 &&
                s?.current?.contains(t) !== !0 &&
                !(function (e) {
                    try {
                        return ((0, dc.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) &&
                ey.current();
        }
    }, [W, s]);
    let ek = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ej());
                    return;
                }
                if (null != F || null != K || 0 === eo.length) return;
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
                    ec(E, nm, { x: (v?.left ?? 0) + E.rect.x * ei, y: (v?.top ?? 0) + E.rect.y * ei }));
            },
            [u, F, K, eo, E, ec, ej, v, ei],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == F ||
                    ((nf(F.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, x.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nh(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nx}${r}${nv}${np(e)}
${t.trim()}`;
                            })(F.target, F.draft),
                            e,
                        ),
                        ea(),
                        I(null)));
            },
            [u, F, ea],
        ),
        eA = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, p.vX)(u, e)), [u]),
        eC = i.useCallback(() => {
            if (null != u && null != K && null != g && nf(K.draft)) {
                var e, t;
                let n, l;
                ((e = K.id),
                    (t = K.draft.trim()),
                    null != (l = (n = nk(u)).annotations.find((t) => t.id === e)) &&
                        nS(l, g) &&
                        nN(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    H({ ...K, editing: !1 }));
            }
        }, [u, K, g]),
        eS = i.useCallback(() => {
            if (null != u && null != K && null != g) {
                var e;
                let t, n;
                ((e = K.id),
                    null != (n = (t = nk(u)).annotations.find((t) => t.id === e)) &&
                        nS(n, g) &&
                        nN(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    H(null));
            }
        }, [u, K, g]),
        eE = c
            ? w
                ? C.intl.string(A.default["Eb/YV9"])
                : N
                  ? C.intl.string(A.default.FD30bh)
                  : C.intl.formatToPlainString(A.default.dTSqLF, { count: d.length })
            : "",
        eI = W && null != v,
        e_ = _ && null == K,
        eM = F?.target ?? eh?.target ?? null,
        eT = F ?? q,
        eP = F ?? (q?.instant === !0 ? null : q),
        eR =
            null != eh && null != v
                ? (function (e, t) {
                      let { left: n, top: l } = dA(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(dN(eh.target, eh.anchor, v, ei), v)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (eh?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = eh;
            dj(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [eh, r]),
        (0, du.createPortal)(
            (0, a.jsxs)("div", {
                ref: ew,
                className: db.Li,
                children: [
                    (0, a.jsx)("div", {
                        className: db.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-design-announcer",
                        children: eE,
                    }),
                    eI
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)("div", {
                                      className: db.MT,
                                      style: { left: v.left, top: v.top, width: v.width, height: v.height },
                                      "data-plain-cursor": e_ ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": C.intl.string(A.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ef,
                                      onMouseLeave: ep,
                                      onClick: ex,
                                      onKeyDown: ek,
                                  }),
                                  null != E && null == E.marker && null == F && null == K
                                      ? (0, a.jsx)(dR, { box: dk(E, v, ei) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: T,
                                      className: db.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: db.xz,
                                          "data-shown": null != E && null == K && null == F ? "" : void 0,
                                          "data-instant": B ? "" : void 0,
                                          children: (0, a.jsxs)(Q.E, {
                                              variant: "text-xs/medium",
                                              className: db.Ux,
                                              children: [
                                                  null == L
                                                      ? null
                                                      : (0, a.jsx)("span", { className: db.Tl, children: L.kind }),
                                                  null == L || "" === L.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: db.kh,
                                                            children: [" ", L.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: P,
                                      className: db.Y,
                                      children: e_ ? (0, a.jsx)("div", { className: db.u }) : null,
                                  }),
                                  null == eP
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: db.aZ,
                                            style: {
                                                transform: `translate3d(${eP.at.x + 20}px, ${eP.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: db.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == F ? "" : void 0,
                                                children: (0, a.jsxs)(Q.E, {
                                                    variant: "text-xs/medium",
                                                    className: db.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: db.Tl,
                                                            children: eP.label.kind,
                                                        }),
                                                        "" === eP.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: db.kh,
                                                                  children: [" ", eP.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != eM && null == eM.marker
                                      ? (0, a.jsx)("div", { className: db.D0, style: dk(eM, v, ei), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = dN(e.target, e.anchor, v, ei),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: db.xL,
                                              style: { ...dA(n, v), width: 24, height: 24 },
                                              "aria-label": C.intl.formatToPlainString(A.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: ng(e.target),
                                              }),
                                              "aria-expanded": K?.id === e.id,
                                              "data-testid": "conjure-design-marker",
                                              onMouseEnter: () => {
                                                  null == F && H(l);
                                              },
                                              onFocus: () => {
                                                  null == F && H(l);
                                              },
                                              onClick: (e) => {
                                                  (e.stopPropagation(), ea(), H(l));
                                              },
                                              children: (0, a.jsx)(dE, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eT || null == u
                                      ? null
                                      : (0, a.jsx)(dx, {
                                            projectId: u,
                                            at: { x: eT.at.x + 20, y: eT.at.y + 20 },
                                            bounds: v,
                                            kind: eT.label.kind,
                                            value: eT.draft,
                                            canSubmit: null != F && nf(eT.draft),
                                            onChange: (e) => {
                                                null != F && z({ ...F, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: ea,
                                            onUploadFile: eA,
                                            closing: null == F,
                                        }),
                                  null != eh && null != K && null != eR
                                      ? (0, a.jsxs)(dI, {
                                            point: eR,
                                            frame: v,
                                            authorId: eh.authorId,
                                            title: ng(eh.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                K.confirmingRemove ? H({ ...K, confirmingRemove: !1 }) : H(null);
                                            },
                                            onMouseLeave: () => {
                                                K.editing || K.confirmingRemove || H(null);
                                            },
                                            children: [
                                                K.editing
                                                    ? (0, a.jsx)(Z.f, {
                                                          autoFocus: !0,
                                                          label: C.intl.string(A.default.KCYqWL),
                                                          hideLabel: !0,
                                                          value: K.draft,
                                                          maxLength: 1e3,
                                                          rows: 3,
                                                          onChange: (e) => H({ ...K, draft: e }),
                                                          onKeyDown: (e) => {
                                                              "Enter" !== e.key ||
                                                                  e.shiftKey ||
                                                                  (e.preventDefault(), eC());
                                                          },
                                                      })
                                                    : (0, a.jsx)(Q.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: db.aC,
                                                          children: eh.comment,
                                                      }),
                                                nS(eh, g)
                                                    ? (0, a.jsx)("div", {
                                                          className: db.eB,
                                                          children: K.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Q.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: db.nv,
                                                                            children: C.intl.string(A.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: C.intl.string(A.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                H({ ...K, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(et.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: C.intl.string(A.default.friIzR),
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
                                                                            text: C.intl.string(A.default.friIzR),
                                                                            onClick: () =>
                                                                                H({
                                                                                    ...K,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        K.editing
                                                                            ? (0, a.jsx)(et.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nf(K.draft),
                                                                                  text: C.intl.string(A.default.iicRP9),
                                                                                  onClick: eC,
                                                                              })
                                                                            : (0, a.jsx)(et.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: C.intl.string(
                                                                                      A.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      H({
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
function dE(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([eQ.default], () => eQ.default.getUser(t), [t]);
    return (0, a.jsx)(aZ.eu, {
        src: null == n ? null : a2.Ay.getUserAvatarURL(n),
        size: a0._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function dI(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: g, children: p } = e,
        x = i.useRef(null),
        v = i.useRef(null),
        [j, b] = i.useState(dy);
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
        A = { left: y, top: w, "--custom-conjure-card-origin-x": `${k}px`, "--custom-conjure-card-origin-y": `${N}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: db.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: g,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: db.MY,
                children: [
                    (0, a.jsx)("span", { ref: v, className: db.ip, children: (0, a.jsx)(dE, { authorId: d }) }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: db.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: db.zI, children: p }),
        ],
    });
}
let d_ = 300,
    dM = 2;
function dT(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function dP(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function dR(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: db.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var dL = n(659723),
    d$ = n(697744),
    dO = n(130324);
function dD(e) {
    let t = (0, d$.c)(),
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
    let r = (0, sW.A)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function dF(e) {
    let { className: t } = e,
        { Component: n, events: l } = dD(3e4);
    return (0, a.jsxs)("div", {
        className: J()(t, dO.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: dO.ol,
                children: C.intl.string(A.default.AyiQEp),
            }),
        ],
    });
}
var dz = n(251363),
    dq = n(944142),
    dG = n(532247),
    dU = n(501628);
function dB(e) {
    let { progress: t } = e,
        { Component: n } = dD(1500),
        l = nu.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: dU.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: dU.PM,
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
function dV(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([dq.A], () => (s ? dq.A.getLiveReload(t) : null), [s, t]),
        c = (0, li.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = (function (e, t) {
            let n = (0, dG.dv)(e),
                [l, r] = i.useState(null),
                [a, s] = i.useState(n);
            a !== n && (s(n), r(null == n ? (0, dG.QP)(e, a) : null));
            let u = (0, o.bG)(
                    [n0.A],
                    () => {
                        let e = n0.A.getFrame(t);
                        return (0, nX.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != n.target && n.target === (0, dz.ow)(null, t) && e();
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
        f = (0, dG.h_)(d, u?.step ?? null, m);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(eV.A, { tag: "div", role: "status", "aria-live": "polite", children: f?.title ?? "" }),
            null != f
                ? (0, a.jsx)("div", {
                      className: dU.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(dB, { progress: f }),
                  })
                : null,
        ],
    });
}
var dK = n(343030),
    dH = n(317608),
    dW = n(338941),
    dJ = n(964404);
let dX = { width: 1 / 0, height: 1 / 0 };
function dY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : dX;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var dQ = n(702083);
function dZ(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([ls.A], () => ({
            mobile: ls.A.isBuilderPreviewMobile(),
            landscape: ls.A.isBuilderPreviewLandscape(),
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
        d = n ? dY(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: J()(dQ.dw, { [dQ.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: J()(dQ.R9, { [dQ.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var d0 = n(347927);
function d1(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: J()(d0.Bf, l && d0.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: d0.Ux,
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
var d2 = n(957272);
function d3(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: s, state: o } = (0, dW.A)({ applicationId: t, surface: n, launch: l }),
        u = (0, nX.VA)(t, n);
    if (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = n0.A.getFrame(e);
                    if (null == t || n1.A.getWindowOpen(eW.MLl.ACTIVITY_POPOUT)) return;
                    let n = n0.A.getMainFrame()?.id === e;
                    t.intent === nX.sV.MAIN
                        ? (n || la.A.promoteFrame(e), la.A.resetFrameLayoutModes(e))
                        : n && la.A.clearMainFrameSlot();
                })(u),
                () => {
                    let e;
                    null != (e = n0.A.getFrame(u)) &&
                        ((0, nX.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        dJ.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === nX.sV.INLINE && la.A.promoteFrame(u),
                              la.A.updateFrameLayoutMode({ frameId: u, layoutMode: nX.y0.PIP }))
                            : e.intent === nX.sV.MAIN && la.A.demoteMainFrame(u));
                }
            ),
            [u],
        ),
        o === dW.n.Launched)
    ) {
        let e = (0, a.jsx)(dH.A, { frameId: s.id, level: dK.A.WithinAppContent, className: d2.Z7, overlay: r });
        return (0, nJ.Q5)(n) ? (0, a.jsx)(dZ, { children: e }) : e;
    }
    return (0, a.jsx)(d7, { state: o });
}
function d7(e) {
    let { state: t } = e;
    switch (t) {
        case dW.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: d2.qs,
                children: (0, a.jsx)(d1, {
                    title: C.intl.string(A.default["9kpdo7"]),
                    body: C.intl.string(A.default.iIA8Nj),
                }),
            });
        case dW.n.NoApplication:
            return (0, a.jsx)(dF, { className: d2.qs });
        case dW.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: d2.qs,
                children: (0, a.jsx)(d1, {
                    title: C.intl.string(A.default["7k4GyN"]),
                    body: C.intl.string(A.default.zdIy3R),
                }),
            });
        case dW.n.Error:
            return (0, a.jsxs)("div", {
                className: d2.qs,
                children: [
                    (0, a.jsx)(ek.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: C.intl.string(A.default.lTPbnG),
                    }),
                    (0, a.jsx)(Q.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: d2.tj,
                        children: C.intl.string(A.default.e6GiAZ),
                    }),
                ],
            });
        case dW.n.AwaitingLaunch:
        case dW.n.Loading:
            return (0, a.jsx)("div", { className: d2.qs, children: (0, a.jsx)(el.y, {}) });
    }
}
var d5 = n(308528),
    d6 = n(334738),
    d4 = n(688438),
    d8 = n(355622),
    d9 = n(365971),
    me = n(703462);
function mt(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: me.f,
        children: [
            (0, a.jsx)(iS.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(Q.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function mn() {
    return (0, a.jsx)("div", { className: me.f, children: (0, a.jsx)(el.y, {}) });
}
function ml(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, nB.YY)(l),
        u = r?.bot?.id ?? null,
        c = (0, o.bG)([lJ.A], () => {
            if (null == u) return null;
            let e = lJ.A.getDMFromUserId(u);
            return null != e ? lJ.A.getChannel(e) : null;
        });
    ((t = c?.id ?? null),
        i.useEffect(() => {
            null != t && d5.A.preload(eW.ME, t);
        }, [t]),
        (n = (0, o.bG)([oT.A], () => oT.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, d9.Xg)();
            return (
                (0, d6.yl)(t, e),
                () => {
                    (0, d6.dm)(t, e);
                }
            );
        }, [t, n]));
    let [d, m] = i.useState(null),
        f = null != u && d === u;
    return (i.useEffect(() => {
        if (null == u || null != c) return;
        let e = !1;
        return (
            d5.A.openPrivateChannel({ recipientIds: u, navigateToChannel: !1 }).catch(() => {
                e || m(u);
            }),
            () => {
                e = !0;
            }
        );
    }, [u, c]),
    s && null == r)
        ? (0, a.jsx)(mn, {})
        : null == u || f
          ? (0, a.jsx)(mt, { message: C.intl.string(A.default["VP/O8s"]) })
          : null == c
            ? (0, a.jsx)(mn, {})
            : (0, a.jsx)("div", {
                  className: me.g,
                  children: (0, a.jsx)(d4.A, { channel: c, guild: null, chatInputType: d8.oU.SIDEBAR }, c.id),
              });
}
var mr = n(887909),
    ma = n(570962),
    mi = n(998475);
function ms(e) {
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
    } = (0, mr.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: mi.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: mi.rf,
                children: (0, a.jsx)(ma.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: mi.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: mi.z3,
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
                                className: J()(mi.Qs, c ? mi.cw : null, d ? mi.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: mi.o1,
                      children: s.map((e, t) => (0, a.jsx)(et.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var mo = n(765671),
    mu = n(269094),
    mc = n(714917),
    md = n(463660),
    mm = n(582063);
let mf = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function mh() {
    (0, u.P0)({ text: C.intl.string(A.default.jj3abP), variant: "critical" });
}
function mg(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = C.intl.string(A.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(es.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(mp, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: mm.m2,
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
                accept: mf.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (mf.includes(n.type)
                                ? n.size > g.aI
                                    ? (0, u.P0)({ text: C.intl.string(A.default.T8Spiu), variant: "critical" })
                                    : (0, md.M$)(t, n).catch(mh)
                                : (0, u.P0)({ text: C.intl.string(A.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function mp(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([mc.A], () => mc.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eo.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": C.intl.string(A.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(eu.rX, {
                children: [
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: C.intl.string(A.default.uQpDky),
                        icon: ru.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(eu.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: C.intl.string(A.default.AiAz8J),
                        icon: cL.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, md.Og)(t).catch(mh));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(eu.rX, {
                children: (0, a.jsx)(eu.fP, {
                    id: "conjure-overlay-background-blur",
                    label: C.intl.string(A.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, md.Y1)(t, !i) || mh();
                    },
                }),
            }),
        ],
    });
}
let mx = "/assets/7cec34541705c795.webp";
function mv(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, dW.A)({ applicationId: t, surface: nX.ZN });
    return (i.useEffect(() => {
        let e = (0, nX.VA)(t, nX.ZN);
        return () => (0, nV.r)(e);
    }, [t]),
    r.state !== dW.n.Launched)
        ? (0, a.jsx)(d7, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(d7, { state: dW.n.Loading })
          : (0, a.jsx)(mj, { lifecycle: r, projectId: n, size: l });
}
function mj(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, mo.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: mm.JH,
        children: [
            (0, a.jsx)(mb, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: mm.dw,
                children: (0, a.jsx)("div", {
                    className: mm.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(mu.A, { frame: t.frame, application: t.application, className: mm.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(mg, { projectId: n }) : null,
        ],
    });
}
function mb(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([mc.A], () => (null != t ? mc.A.getBackground(t) : null)),
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
                (0, md.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(mx);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        h = null == l || (null != f && f === u) ? mx : f;
    return null != h && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: J()(mm.LO, { [mm.Ty]: n?.blur === !0 }),
              src: h,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  h === f && c(f);
              },
          })
        : null;
}
var my = n(409478),
    mw = n(652227);
function mk(e) {
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
        overlayWidgetSize: d = nL,
        projectId: m,
        frameOverlay: f,
    } = e;
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: mw.qs, children: (0, a.jsx)(el.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: mw.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(el.y, {}) : (0, a.jsx)(ms, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: mw.RG,
                      children: [
                          (0, nO.yf)(o, u)
                              ? (0, a.jsx)(d3, { applicationId: t, surface: l, launch: r, frameOverlay: f })
                              : null,
                          "widget" === u && null != c
                              ? "unavailable-authorization-revoked" === o.profileState
                                  ? (0, a.jsx)("div", {
                                        className: mw.qs,
                                        children: (0, a.jsx)(d1, {
                                            wide: !0,
                                            title: C.intl.string(A.default["08U+YO"]),
                                            body: C.intl.string(A.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(my.A, { applicationId: c })
                              : null,
                          "overlay" === u && o.modes.includes("overlay")
                              ? (0, a.jsx)(mv, { applicationId: t, projectId: m, size: d })
                              : null,
                          "bot" === u && null != n ? (0, a.jsx)(ml, { previewApplicationId: n }) : null,
                      ],
                  })
            : (0, a.jsx)(dF, { className: mw.qs });
}
var mN = n(175841),
    mA = n(750506),
    mC = n(867193),
    mS = n(539197),
    mE = n(977020);
function mI(e) {
    let { projectId: t } = e,
        n = (0, mS.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, mS.Ie)(e);
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
        className: mE.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [mS.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: J()(mE.hN, mE.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: J()(mE.hN, mE.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: J()(mE.UE, { [mE.SP]: n.shown, [mE.Vq]: n.pressed, [mE.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var m_ = n(417760);
function mM(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function mT(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function mP(e) {
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
        u = (0, nd.CU)(n),
        c = "controlling" === t,
        d = C.intl.string(c ? (u ? A.default["VJW/5P"] : A.default["+hD2Iz"]) : A.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(et.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: C.intl.string(A.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: J()(m_.M0, m_.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(us.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(mN.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(Q.E, { variant: "text-sm/semibold", color: "none", className: m_.ID, children: d }),
                  c ? (0, a.jsx)(eV.A, { children: C.intl.string(A.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: m_.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: m_.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: m_.sp,
                      children: [
                          (0, a.jsx)(mN.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(us.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: m_.f4,
                              children: [
                                  (0, a.jsx)(Q.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: m_.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(Q.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: m_.Rb,
                                            children: C.intl.string(A.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: m_.lC, children: m }) : null,
              ],
          });
}
function mR(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, nd.Zv)(null != n && n === l ? t : null),
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
        d = n4(s);
    i.useEffect(() => {
        o &&
            d &&
            null != s &&
            (function (e) {
                if (!n5(e)) return;
                let t = n7(e);
                null != t && (0, n2.sP)(t);
            })(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, g] = i.useState(null),
        [p, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = mM(r());
            f((t) => (mT(t, e) ? t : e));
            let t = null == h ? null : mM(h);
            (x((e) => (mT(e, t) ? e : t)), null != h && (0, mC.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, mC.C)(0));
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
            let [e] = i.useContext(mA.uY),
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
                      className: m_.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: m_.QF,
                          children: (0, a.jsx)(mP, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, du.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                        className: m_.y4,
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? C.intl.string(A.default.oWcemF)
                                : "handoff" === u
                                  ? C.intl.string(A.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, du.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: m_.ys,
                                  style: k,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: m_.om,
                                  style: w,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(mI, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var mL = n(399503),
    m$ = n(853555),
    mO = n(558960),
    mD = n(187645);
let mF = new Map(),
    mz = !1;
function mq() {
    let e = new Map();
    for (let t of new Set([...e0.A.getActivityOrderedProjectIds(), ...(0, nd.T7)()])) {
        if (!(e0.A.isThinking(t) || (0, nd.wK)(t))) continue;
        let n = (function (e) {
            let t = B.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, nJ.Rc)(t);
            return (0, nX.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...mF]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            mF.delete(t),
            n.unregisterLookup(),
            mO.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        mF.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = mD.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    mG(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (mF.set(e, l),
                    (l.unregisterLookup = (0, m$.Ng)(e, () => (0, dz.n5)(n, t))),
                    mO.A.registerFrameTarget(t, n, dK.A.Backstage, void 0));
            })(t, n);
    for (let e of mF.values()) mG(e.element);
}
function mG(e) {
    let t = ls.A.isBuilderPreviewMobile();
    e.classList.toggle(mD.L, !t);
    let n = t ? dY(ls.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var mU = n(873727),
    mB = n(147248),
    mV = n(418842),
    mK = n(363195),
    mH = n(818023);
let mW = null;
var mJ = n(602853),
    mX = n(517461),
    mY = n(761929),
    mQ = n(487336);
function mZ(e) {
    let { open: t, fullWidth: n = !1, maxWidth: l, onWidthChange: r, children: s } = e,
        o = (0, mJ.r)(ea.A.modules.chat.RESIZE_HANDLE_WIDTH),
        u = i.useRef(null),
        [c, d] = (0, mX.V)("VibegrationsChatSidebarWidth", 460),
        [m, f] = i.useState(c ?? 460),
        h = (0, rJ.clamp)(m, 360, l);
    i.useLayoutEffect(() => {
        r(t ? h + o : 0);
    }, [h, t, o, r]);
    let g = (0, mY.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: u,
            onElementResize: f,
            onElementResizeEnd: d,
            orientation: mY.R.HORIZONTAL_LEFT,
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
        className: J()(mQ.pz, { [mQ.yD]: n }),
        hidden: !t,
        children: [
            n ? null : (0, a.jsx)("div", { className: mQ.Di, onPointerDown: p }),
            (0, a.jsx)("div", {
                ref: u,
                className: J()(mQ.kL, { [mQ.bH]: n }),
                style: n ? void 0 : { width: h },
                children: s,
            }),
        ],
    });
}
var m0 = n(541940);
function m1(e) {
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
        p = (0, li.A)(l, s),
        x = p?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([mK.A], () => (0, mU.x4)(mK.A.theme)),
            l = (0, o.bG)([mB.A], () => mB.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([iP.Ay], () => ({
                reducedMotion: iP.Ay.useReducedMotion,
                fontScale: (0, mU.U0)(),
                highContrast: iP.Ay.isHighContrastModeEnabled,
                forcedColors: iP.Ay.useForcedColors,
                underlineLinks: iP.Ay.alwaysShowLinkDecorations,
            })),
            d = nu.hH.useSetting(),
            m = (0, mV.C)(),
            f = i.useRef(!1),
            h = i.useRef(!1),
            g = i.useRef(0),
            p = i.useRef(null),
            x = i.useCallback(() => {
                let l = (0, dz.ow)(e, t);
                if (null == l) return;
                p.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, mU.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                };
                (0, dv.W)(l, "set-env", i, {
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
                let n = (0, dz.ow)(e, t);
                null != n && n !== p.current && j();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, dz.ow)(e, t) && ((p.current = null), j());
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
            if (null != t) return (0, m$.Ng)(t, () => (0, dz.n5)(h, x));
        }, [t, h, x]));
    let v = i.useCallback(() => (0, dz.ow)(h, x), [h, x]),
        j = i.useCallback(() => (f ? (0, dz.ow)(h, x) : h), [f, h, x]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: J()(m0.Mh, c),
                children: [
                    u,
                    (0, a.jsx)(mR, {
                        projectId: t ?? null,
                        applicationId: l,
                        previewApplicationId: r,
                        resolveTarget: j,
                        frameId: x,
                    }),
                    (0, a.jsx)("div", { ref: g, className: m0.fm, children: d }),
                ],
            }),
            m,
            (0, a.jsx)(dS, {
                projectId: t ?? null,
                applicationId: l,
                previewApplicationId: r,
                resolveIframe: v,
                toggleRef: n,
            }),
        ],
    });
}
function m2(e) {
    let {
        projectId: t,
        designFeedbackToggleRef: n,
        applicationId: l,
        previewApplicationId: r,
        surface: s,
        frameLaunchParams: u,
        header: c,
        chatOpen: d,
        chatFullScreen: m = !1,
        onCloseChat: f,
        chatHeaderAction: h,
        onRestoreVersion: g,
        onImportProject: p,
        debugOpen: v = !1,
        onCloseDebug: j,
        restoreState: b,
        previewReady: y,
        previewGate: w,
        availability: k,
        activeMode: N,
        widgetApplicationId: S,
        overlayWidgetSize: E,
    } = e;
    (0, mL.k)(t, S);
    let I = s.type === nD.U.MAIN || (0, nJ.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([ls.A], () => ({
            mobile: ls.A.isBuilderPreviewMobile(),
            landscape: ls.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? mH.aX.LANDSCAPE : mH.aX.PORTRAIT), (mW = e));
                else {
                    if (mW !== e) return;
                    ((l = mH.aX.UNHANDLED), (mW = null));
                }
                lb.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(I ? l : null);
    let _ = i.useRef(null),
        [M, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, lj.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, lj.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (I) return ((0, lo.HV)(l), () => (0, lo.HV)(null));
        }, [l, I]),
        i.useEffect(() => {
            null != t &&
                ((0, x.ensureConnection)(t),
                mz ||
                    ((mz = !0),
                    e0.A.addChangeListener(mq),
                    B.Ay.addChangeListener(mq),
                    n0.A.addChangeListener(mq),
                    ls.A.addChangeListener(mq),
                    (0, nd.W3)(mq),
                    mq()));
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
        i.useLayoutEffect(() => () => ly(0), []));
    let P = Math.max(360, M - 320),
        R = d || I;
    return (0, a.jsx)("div", {
        ref: _,
        className: J()(m0.LB, { [m0.Ec]: m }),
        children: (0, a.jsx)(m1, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, nO.yf)(k, N),
            mainClassName: null == c ? void 0 : J()(m0.ez, { [m0.zt]: d && !m }),
            content: (0, a.jsx)(mk, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: y,
                previewGate: w,
                availability: k,
                activeMode: N,
                widgetApplicationId: S,
                overlayWidgetSize: E,
                projectId: t,
                frameOverlay: (0, a.jsx)(dV, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && R
                    ? (0, a.jsx)(mZ, {
                          open: d,
                          fullWidth: m,
                          maxWidth: P,
                          onWidthChange: ly,
                          children: (0, a.jsx)("div", {
                              className: m0.cO,
                              children: v
                                  ? (0, a.jsx)(ds, { projectId: t, onClose: j ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(dL.A, { projectId: t }),
                                            (0, a.jsx)(lv.Ay, {
                                                "aria-label": C.intl.string(C.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        h,
                                                        null == f
                                                            ? null
                                                            : (0, a.jsx)(lv.Ay.Icon, {
                                                                  icon: en.P,
                                                                  tooltip: C.intl.string(A.default.JD6Oit),
                                                                  onClick: f,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(lv.Ay.Title, {
                                                    children: C.intl.string(C.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: m0.cb,
                                                children: (0, a.jsx)(
                                                    uC,
                                                    {
                                                        projectId: t,
                                                        restoreState: b,
                                                        onRestoreVersion: g,
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
function m3(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: m, onBack: f, guildId: h } = e,
        [g, p] = i.useState(!0),
        [v, j] = i.useState(!1),
        b = nc(),
        y = i.useCallback(() => p(!0), []),
        w = i.useCallback(() => {
            (j(!1), p(!0));
        }, []),
        { restoreState: k, handleRestoreVersion: N } = (function (e, t) {
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
                                (0, nM.oB)(c, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    d() &&
                                                    (0, u.P0)({
                                                        text: C.intl.formatToPlainString(A.default.Z4n6LX, {
                                                            title: (0, n_.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, nT.c)(c, r);
                                                null != e && (0, u.P0)({ text: e, variant: "critical" });
                                            }
                                            d() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            d() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[vibegrations] version restore failed", c, e),
                                                (0, u.P0)({
                                                    text: C.intl.string(A.default["PSdo+w"]),
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
        I = c?.id ?? null,
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
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)([B.Ay], () => (null == r ? null : B.Ay.getIntegrationStatus(r)), [r]),
                { data: c, isLoading: d } = (0, nB.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                g = (0, nO.Qg)({
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
                        await (0, U.U1)(r, e.signal);
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
            let x = (0, ll.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, ll.$)(e, x));
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
                              ...(0, lr.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        D = (0, o.bG)(
            [e0.A],
            () =>
                null != I &&
                (function (e) {
                    let t = new Set([C.intl.string(A.default.EMgIuY), C.intl.string(A.default.Zc7gML)]),
                        n = !1;
                    for (let l of e) {
                        if ("plan_implemented" === l.kind) return !0;
                        if ("assistant" === l.role) null != l.proposal && (n = !0);
                        else if (n && t.has(l.content.trim())) return !0;
                    }
                    return !1;
                })(e0.A.getMessages(I)),
            [I],
        ),
        F = null != M && !R && !D,
        z = (0, o.bG)([lu.A], () => (null == I ? void 0 : lu.A.getPublishStatus(I)?.previewAppChannels), [I]),
        {
            availability: q,
            activeMode: G,
            setMode: V,
            frameSurface: K,
            frameSurfaceOptions: H,
            setFrameSurface: W,
            appChannel: X,
            setAppChannel: Y,
            frameLaunchParams: Z,
            widgetApplicationId: ee,
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
                    previewAppChannels: h = nY,
                } = e,
                [g, p] = i.useState(null),
                [x, v] = i.useState(null),
                [j, b] = i.useState(null),
                [y, w] = i.useState(r);
            y !== r && (w(r), p(null), v(null), b(null));
            let k = null != a && a === r ? a : null,
                N = (0, o.bG)([nH.default], () => nH.default.getId()),
                { applicationWidgetConfig: A } = (0, nU.A)(N, k ?? void 0),
                C = A?.surfaces,
                S = (0, nO.yZ)({
                    widgetTop: C?.[nG.m.WIDGET_TOP] != null,
                    widgetBottom: C?.[nG.m.WIDGET_BOTTOM] != null,
                    miniProfile: C?.[nG.m.MINI_PROFILE] != null,
                }),
                E = null != k && (m ? S.hasMainCard : S.hasAny),
                { data: I } = (0, nB.YY)(a ?? void 0),
                _ = null != a && I?.bot?.id != null,
                { data: M, isLoading: T } = (0, nB.YY)(r ?? void 0),
                P = s || (0, nK.X)(M),
                R = null != r && T && null == M,
                L = (0, nO.P5)(u, {
                    legacy: { hasFrame: P, hasProfileWidget: E, hasBotDm: _ },
                    widgetResolvable: null != k,
                    botDmResolvable: _,
                }),
                $ = (0, nO.Xm)({ installScope: c, ...L, hasOverlay: f, ownerAuthorizationRevoked: d }),
                O = i.useMemo(() => (0, nW.hR)(u), [u]),
                D = (0, nW.PH)(x, O),
                F =
                    ((t = j),
                    (n = D),
                    (l = h),
                    n !== nD.U.APP_CHANNEL || l.length < 2 ? null : null != t && l.includes(t) ? t : l[0]),
                z = i.useMemo(() => (null == F ? void 0 : { customId: F }), [F]);
            return (
                i.useEffect(() => {
                    if (null != r)
                        for (let e of (0, nJ.Mm)(r)) {
                            let t = e.surface.type !== (0, nW.BR)(D),
                                n = (((0, nX.x1)(e) ? e.data.launch.customId : e.launch?.customId) ?? null) !== F;
                            (t || n) && (0, nV.r)(e.id);
                        }
                }, [r, D, F]),
                {
                    availability: $,
                    isResolving: R,
                    activeMode: R ? null : (0, nO.Qs)(g, $),
                    setMode: p,
                    frameSurface: D,
                    frameSurfaceOptions: O,
                    setFrameSurface: v,
                    appChannel: F,
                    setAppChannel: b,
                    frameLaunchParams: z,
                    widgetApplicationId: k,
                }
            );
        })({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: L,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: M?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(nR.q7.OVERLAY) === !0,
            previewAppChannels: z,
        }),
        en =
            ((t = (0, o.bG)(
                [e0.A],
                () =>
                    null == I
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(e0.A.getMessages(I)),
                [I],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : nL);
    ((0, n$.x)(I, (e) => {
        q.modes.includes(e) && V(e);
    }),
        no(I, () => {
            (p(!0), j(!0));
        }));
    let el = q.modes.includes("frame"),
        {
            previewTargetOptions: er,
            handleSelectPreviewTarget: ea,
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
                                          t === nD.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([ls.A], () => ls.A.isBuilderPreviewMobile()),
                h = C.intl.string(f ? A.default.tKGF0Q : A.default.peqEOY),
                g = i.useCallback(() => (0, lo.GG)(!f), [f]),
                p = (0, o.bG)([ls.A], () => ls.A.isBuilderPreviewLandscape()),
                x = C.intl.string(p ? A.default.tunI2l : A.default.DoNdjA),
                v = i.useCallback(() => (0, lo.Lw)(!p), [p]),
                j = (0, nJ.jS)(t),
                b = i.useMemo(() => (0, nJ.Op)(j, l), [j, l]),
                y = (0, li.A)(t?.preview_application_id ?? null, b),
                w = (0, nX.x1)(y) && y.data.proxyTicketRefreshing,
                k = i.useCallback(() => {
                    null == y || w || la.A.refreshProxyTicket(y.id);
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
            frameSurfaceOptions: H,
            previewAppChannels: z,
            setMode: V,
            setFrameSurface: W,
            setAppChannel: Y,
        }),
        ex = g && !v,
        ev = C.intl.string(ex ? A.default.JD6Oit : A.default.xjJAQm),
        ej = i.useCallback(() => {
            if (v) {
                (j(!1), p(!0));
                return;
            }
            p((e) => !e);
        }, [v]),
        eb = i.useCallback(() => p(!1), []),
        {
            designFeedbackActive: ey,
            designFeedbackToggleRef: ew,
            agentDrivingPreview: eN,
            designFeedbackLabel: eA,
            handleToggleDesignFeedback: eC,
        } = (function (e, t, n) {
            let { active: l } = nI(e);
            i.useEffect(() => {
                null != e && l && !t && nA(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, nd.Zv)(e),
                s = C.intl.string(a ? A.default.Sme0T0 : l ? A.default.vn5Rzu : A.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        let t;
                        if (l) return void nA(e);
                        (n(), (t = nk(e)).active || nN(e, { ...t, active: !0 }));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(I, el, w),
        eS = i.useCallback(() => {
            j((e) => !e && (p(!0), !0));
        }, []),
        eE = i.useCallback(() => j(!1), []),
        eI = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = eh?.id), (0, x.closeConnection)(e), (0, nV.r)(t)), f());
        }, [c, eh?.id, f]),
        e_ =
            ((r = i.useCallback(() => {
                null != c && (y(), (0, x.sendUserMessage)(c.id, C.intl.string(A.default.oU20rd)));
            }, [c, y])),
            {
                onExport: r,
                onImport: (s = _(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = E(e);
                            null != n
                                ? (0, u.P0)({ text: n, variant: "critical" })
                                : (0, eH.A)({
                                      title: C.intl.formatToPlainString(A.default["Gm+u1+"], { name: c.name }),
                                      subtitle: C.intl.string(A.default.M7H3sJ),
                                      confirmText: C.intl.string(A.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          y();
                                          try {
                                              await S(t, e, C.intl.string(A.default.Owerd3));
                                          } catch {
                                              (0, u.P0)({
                                                  text: C.intl.string(A.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [c, y],
                    ),
                )).open,
                importInput: s.input,
            }),
        eM = i.useCallback(() => {
            null != c && (0, tJ.A)(c, h);
        }, [c, h]),
        eT = (0, nO.JR)(G, $)
            ? { type: "permissions", authorizeProps: O }
            : P && null == M
              ? { type: "checking" }
              : void 0,
        eP = (0, o.bG)([B.Ay], () => null != I && B.Ay.isProjectDeleting(I), [I]);
    i.useEffect(() => {
        ((null == c && m) || eP) && (0, d.bG)(eW.BVt.CHANNEL(h, eJ.VV.CONJURE));
    }, [h, c, m, eP]);
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
                        ...lx,
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
        })(I, h, P || T),
        eF = (0, lc.L)(e$?.status ?? null),
        ez =
            null == e$
                ? null
                : (0, a.jsx)("div", {
                      className: t6.As,
                      children: (0, a.jsx)(eR.m, {
                          text: eF,
                          asContainer: !0,
                          children: (0, a.jsx)(et.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eO ? m7 : null != eD ? t8.U : void 0,
                              disabled: e$.disabled,
                              onClick: () => e$.run("header"),
                              text: eD ?? e$.label,
                          }),
                      }),
                  }),
        eq = null == c ? void 0 : () => (0, th.A)(c.id, { guildId: h, isPreview: !0, publishOptions: eL }),
        eG = (0, a.jsx)(tY, {
            title: c?.name ?? C.intl.string(A.default.G1WwgK),
            breadcrumb: { title: C.intl.string(A.default.uk6jhJ), onClick: f },
            project: c,
            onOpenProjectSettings: eq,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: t6.FO,
                          children: [
                              (0, a.jsx)(ln, {
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
                                  })(G, K, X),
                                  onChange: ea,
                              }),
                              el
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === G
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: es ? m4 : m6,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: es,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            es && "frame" === G
                                                ? (0, a.jsx)(ei.A.Icon, {
                                                      icon: m8,
                                                      tooltip: ed,
                                                      "aria-label": ed,
                                                      selected: ec,
                                                      onClick: em,
                                                  })
                                                : null,
                                            (0, a.jsx)(ei.A.Icon, {
                                                ref: ew,
                                                icon: t9.x,
                                                iconClassName: t6.D8,
                                                tooltip: eA,
                                                "aria-label": eA,
                                                selected: ey,
                                                disabled: eN,
                                                onClick: eC,
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" === G
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(na.A, { frame: eh }),
                                            (0, a.jsx)(n8, { frame: eh, controlProjectId: c.id }),
                                        ],
                                    })
                                  : null,
                              (0, a.jsx)("div", { className: t6.YJ }),
                              b
                                  ? (0, a.jsx)(ei.A.Icon, {
                                        icon: ne.BugIcon,
                                        tooltip: C.intl.string(A.default.Mt5k9d),
                                        "aria-label": C.intl.string(A.default.Mt5k9d),
                                        selected: v,
                                        onClick: eS,
                                    })
                                  : null,
                              (0, a.jsx)(ei.A.Icon, {
                                  icon: tn.SettingsIcon,
                                  tooltip: C.intl.string(A.default.I2XSKe),
                                  "aria-label": C.intl.string(A.default.I2XSKe),
                                  onClick: eq,
                              }),
                              (0, a.jsx)(tE, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: h,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, B.PV)(c),
                                  canRemix: (0, B.H_)(c),
                                  onRefresh: (0, nX.x1)(eh) ? ep : void 0,
                                  isRefreshing: eg,
                                  onClose: eI,
                                  onExport: e_.onExport,
                                  onImport: e_.onImport,
                                  onRemix: eM,
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
                                              restoreDisabled: k?.status === "restoring",
                                              onRestoreVersion: (e, t) => N(e, t, !0),
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
                                          ? ee
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ex
                                  ? null
                                  : (0, a.jsx)(ei.A.Icon, { icon: m5, tooltip: ev, "aria-label": ev, onClick: ej }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: J()(t6.nj, t5.T),
        children: [
            e_.importInput,
            (0, a.jsx)("main", {
                className: t6.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: t6.j5,
                              children: [
                                  eG,
                                  (0, a.jsxs)("div", {
                                      className: t6.sD,
                                      children: [
                                          (0, a.jsx)(ek.D, {
                                              variant: "heading-lg/semibold",
                                              children: C.intl.string(A.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(Q.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: C.intl.string(A.default.fINulo),
                                          }),
                                          (0, a.jsx)(et.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: C.intl.string(A.default["WFJ/vb"]),
                                              onClick: () => (0, U.hF)(h),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(tm.bI.Provider, {
                              value: eL,
                              children: (0, a.jsx)(
                                  m2,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: ew,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: ef,
                                      frameLaunchParams: Z,
                                      header: eG,
                                      chatOpen: g,
                                      chatFullScreen: F && g,
                                      onCloseChat: eb,
                                      chatHeaderAction: ez,
                                      debugOpen: b && v,
                                      onCloseDebug: eE,
                                      onRestoreVersion: N,
                                      onImportProject: (0, B.PV)(c) ? e_.onImport : void 0,
                                      restoreState: k,
                                      previewReady: R,
                                      previewGate: eT,
                                      availability: q,
                                      activeMode: G,
                                      widgetApplicationId: ee,
                                      overlayWidgetSize: en,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function m7() {
    return (0, a.jsx)(el.y, { type: el.t.SPINNING_CIRCLE_SIMPLE, className: t6.Hv, itemClassName: t6.C5 });
}
function m5(e) {
    return (0, a.jsx)(nt.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function m6(e) {
    return (0, a.jsx)(nn.u, { ...e, size: "custom", width: 20, height: 20 });
}
function m4(e) {
    return (0, a.jsx)(nl.k, { ...e, size: "custom", width: 20, height: 20 });
}
function m8(e) {
    return (0, a.jsx)(nr.H, { ...e, size: "custom", width: 20, height: 20 });
}
function m9(e) {
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
        N = (0, K.z9)("VibegrationsScreen"),
        [I, _] = i.useState(null),
        T = (0, c.o)().get(V.f_) === G;
    i.useEffect(() => {
        _(null);
    }, [n, T]);
    let P = i.useMemo(() => (!T && N.some((e) => e.id === n) ? n : G), [N, n, T]),
        R = I ?? P,
        L = R === G ? "user" : "guild",
        $ = R === G ? n : R,
        [D, z] = i.useState(null);
    (i.useEffect(() => {
        (0, U.hF)(n);
    }, [n, s, g]),
        i.useEffect(() => {
            (0, U.dm)(n, j);
        }, [n, j]));
    let q = i.useCallback(
            async (e, t, n) => {
                let l = await (0, U.gA)({ guild_id: t, install_scope: n });
                ((0, x.ensureConnection)(l),
                    (0, x.stageModelSettings)(l, D ?? O),
                    e(l),
                    (0, d.pX)(eW.BVt.CHANNEL(t, eJ.VV.CONJURE, l)),
                    v(""),
                    z(null));
            },
            [D],
        ),
        W = i.useCallback(
            async (e) => {
                let t = (e ?? p).trim(),
                    n = F({ idea: t, installScope: L, submitting: b });
                if ("idea" !== n && "submitting" !== n) {
                    (null != e && v(e), y(!0), k(null));
                    try {
                        await q((e) => (0, x.sendUserMessage)(e, t), $, L);
                    } catch (e) {
                        k((0, M.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, p, b],
        ),
        J = i.useCallback(
            async (e) => {
                if (!b) {
                    (y(!0), k(null));
                    try {
                        await q(
                            (t) => {
                                var n;
                                (0, x.sendUserMessage)(
                                    t,
                                    ((n = e.name),
                                    C.intl.formatToPlainString(A.default["0PQip6"], { templateName: n })),
                                    void 0,
                                    { templateId: e.id },
                                );
                            },
                            $,
                            L,
                        );
                    } catch (e) {
                        k((0, M.mG)(e));
                    } finally {
                        y(!1);
                    }
                }
            },
            [q, L, $, b],
        ),
        X = i.useCallback(
            async (e, t) => {
                let n = await (0, U.gA)({ guild_id: t, install_scope: "guild" });
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
                let e = await (0, U.M7)(t, { guild_id: n, preview_guild_id: n });
                if (!e.ok) throw new M.DS((0, M.hj)(e), e.status);
            }
            ((0, x.sendUserMessage)(t, l, void 0, { templateId: e.id }),
                (0, d.pX)(eW.BVt.CHANNEL(n, eJ.VV.CONJURE, t)),
                z(null));
        }, []),
        Q = i.useCallback((e) => {
            (0, U.xx)(e).catch(() => void 0);
        }, []),
        Z = i.useCallback(
            (e) => {
                let t = B.Ay.getProject(e)?.guild_id ?? n;
                ((0, d.pX)(eW.BVt.CHANNEL(t, eJ.VV.CONJURE, e)), z(null));
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
                    ((r = await (0, U.gA)({ guild_id: n, install_scope: t })),
                        (0, x.ensureConnection)(r),
                        (0, x.stageModelSettings)(r, D ?? O),
                        await S(r, e, C.intl.string(A.default["LUc7/5"])),
                        (0, d.pX)(eW.BVt.CHANNEL(n, eJ.VV.CONJURE, r)),
                        z(null));
                } catch {
                    (null != r && (await (0, U.xx)(r).catch(() => void 0)),
                        (0, u.P0)({ text: C.intl.string(A.default["Q+l4Hv"]), variant: "critical" }));
                } finally {
                    et(!1);
                }
            },
            [n, D],
        ),
        el = i.useCallback(
            (e) => {
                (0, d.pX)(eW.BVt.CHANNEL(n, eJ.VV.CONJURE, e));
            },
            [n],
        ),
        er = i.useCallback(() => {
            (0, d.pX)(eW.BVt.CHANNEL(n, eJ.VV.CONJURE));
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
        ? (0, a.jsx)(m3, { project: ei, projectsLoaded: es, onBack: er, guildId: n }, j)
        : (0, a.jsx)(t4, {
              projects: r,
              modelSettings: D,
              onModelSettingsChange: z,
              idea: p,
              guildId: n,
              submitting: b,
              createError: w,
              createDisabled: "idea" === (t = F({ idea: p, installScope: L, submitting: b })) || "submitting" === t,
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
              eligibleGuilds: N,
          });
}
