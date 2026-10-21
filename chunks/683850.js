(n.r(t), n.d(t, { default: () => ps }));
var l,
    r,
    a = n(477900),
    i = n(582128),
    s = n.t(i, 2),
    o = n(17928),
    u = n(976860),
    c = n(696451),
    d = n(71393),
    m = n(576705),
    f = n(503698),
    h = n.n(f),
    p = n(97893),
    g = n(364522),
    x = n(297264),
    v = n(834730),
    j = n(65593),
    b = n(458518),
    y = n(742589),
    k = n(152367),
    w = n(661531),
    N = n(866665),
    C = n(939249),
    A = n(497183),
    S = n(261425),
    E = n(105292),
    I = n(631417);
function M(e) {
    let { title: t, actions: n, breadcrumb: l, project: r, onOpenProjectSettings: i, transparent: s = !1 } = e,
        o = E.intl.string(S.default.FzfmQ8);
    return (0, a.jsx)(y.A, {
        hideSearch: !0,
        transparent: s,
        toolbar: n,
        className: I.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: I.QF,
            children: [
                (0, a.jsx)(k.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: w.A.colors.ICON_STRONG,
                    className: I.Kk,
                }),
                null != l
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(y.A.Title, { onClick: l.onClick, children: l.title }),
                              (0, a.jsx)(y.A.Caret, {}),
                          ],
                      })
                    : null,
                null != r && null != i
                    ? (0, a.jsx)(N.m, {
                          asContainer: !0,
                          text: o,
                          position: "bottom",
                          children: (0, a.jsx)(C.D, {
                              className: I.FF,
                              onClick: i,
                              "aria-label": o,
                              children: (0, a.jsx)(A.A, { project: r, size: "header" }),
                          }),
                      })
                    : null,
                (0, a.jsx)(y.A.Title, { className: I.Qw, wrapperClassName: I.DD, children: t }),
            ],
        }),
    });
}
var _ = n(319481),
    P = n(639519),
    R = n(371169),
    T = n(361504);
let L = [
        { id: "claude-fable-5-1", label: "Claude Fable 5.1", provider: "anthropic" },
        { id: "claude-opus-5-5", label: "Claude Opus 5.5", provider: "anthropic" },
        { id: "claude-sonnet-5-5", label: "Claude Sonnet 5.5", provider: "anthropic" },
        { id: "claude-haiku-5-5", label: "Claude Haiku 5.5", provider: "anthropic" },
        { id: "gpt-6-astra", label: "GPT-6 Astra", provider: "openai", supports_fast: !0 },
        { id: "gpt-6.1-sol", label: "GPT-6.1 Sol", provider: "openai", supports_fast: !0 },
        { id: "gpt-6-luna", label: "GPT-6 Luna", provider: "openai", supports_fast: !0 },
        { id: "xai/grok-4.7", label: "Grok 4.7", provider: "xai" },
    ],
    $ = { main: L, subagent: L, thinking: ["low", "medium", "high", "xhigh", "max"] },
    D = [
        { id: "deepseek/deepseek-flash", label: "DeepSeek V4.1 Flash", provider: "deepseek" },
        { id: "moonshotai/kimi-k3", label: "Kimi K3", provider: "moonshotai" },
    ],
    z = { main: D, subagent: D, thinking: $.thinking },
    O = { tier: "balanced", provider: "openai" },
    F = {
        simple: { model: "gpt-6-luna", thinking: "high" },
        balanced: { model: "claude-sonnet-5-5", thinking: "high" },
        complex: { model: "claude-opus-5-5", thinking: "high" },
    };
var q = n(652215),
    U = n(746080);
async function G(e) {
    let { guildId: t, installScope: n, modelSettings: l, start: r } = e,
        a = await (0, R.gA)({ guild_id: t, install_scope: n });
    return (
        (0, _.ensureConnection)(a),
        (0, _.stageModelSettings)(a, l ?? O),
        await r(a),
        (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, a)),
        a
    );
}
var B = n(548118);
let K = "user";
var H = n(941985),
    V = n(16619),
    W = n(506774);
let X = "ConjureProjectsPanelOpen";
var J = n(89310),
    Z = n(821609),
    Y = n(775602),
    Q = n(486020),
    ee = n(687966),
    et = n(323384),
    en = n(632015),
    el = n(231483),
    er = n(430392);
let ea = {
    games: ee.GameControllerIcon,
    apps: et.k,
    profile_widget: en.f,
    automod: el.ShieldIcon,
    chat_bot: er.RobotIcon,
};
var ei = n(621466);
let es = "data-conjure-carousel-card";
var eo = n(19493);
let eu = i.memo(function (e) {
        let { inspiration: t, onCopyPrompt: n } = e,
            l = ea[t.category];
        return (0, a.jsxs)("li", {
            className: eo.AS,
            [es]: "",
            children: [
                (0, a.jsxs)("div", {
                    className: eo.rl,
                    children: [
                        (0, a.jsx)("img", {
                            className: eo.my,
                            src: (0, Q.AE)(void 0, t.authorAvatarSeed),
                            alt: "",
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            className: eo.Tq,
                            children: t.shortPrompt,
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: eo.Nr,
                    children: [
                        (0, a.jsxs)("div", {
                            className: eo.xn,
                            children: [
                                (0, a.jsx)("img", { className: eo.q_, src: t.image, alt: "" }),
                                (0, a.jsx)("div", {
                                    className: eo.o1,
                                    children: (0, a.jsx)(Z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: E.intl.string(S.default["6CQjTy"]),
                                        onClick: () => n(t.fullPrompt),
                                    }),
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: eo.qr,
                            children: [
                                (0, a.jsx)("div", {
                                    className: eo.Yl,
                                    "aria-hidden": !0,
                                    children: (0, a.jsx)(l, { size: "md", color: w.A.colors.ICON_STRONG }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: eo.PJ,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            color: "text-strong",
                                            lineClamp: 1,
                                            children: t.name,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-sm/normal",
                                            color: "text-subtle",
                                            lineClamp: 1,
                                            children: (function (e) {
                                                switch (e) {
                                                    case "games":
                                                        return E.intl.string(S.default["JU01/4"]);
                                                    case "apps":
                                                        return E.intl.string(S.default["bvcT/Q"]);
                                                    case "profile_widget":
                                                        return E.intl.string(S.default.GUb2zA);
                                                    case "automod":
                                                        return E.intl.string(S.default["+EKk4D"]);
                                                    case "chat_bot":
                                                        return E.intl.string(S.default.KBHZfO);
                                                }
                                            })(t.category),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }),
    ec = i.memo(function (e) {
        var t;
        let { inspirations: n, onCopyPrompt: l } = e,
            r = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
            s = i.useRef(null),
            u = i.useRef(null);
        return (
            (t = !r),
            i.useEffect(() => {
                let e = s.current,
                    n = u.current;
                if (null == e || null == n) return;
                let l = [],
                    r = [],
                    a = 1,
                    i = 0,
                    o = 1,
                    c = 0,
                    d = 0,
                    m = null,
                    f = !1,
                    h = !1,
                    p = document.hasFocus(),
                    g = !0;
                function x() {
                    null != e &&
                        null != n &&
                        ((r = (l = Array.from(n.querySelectorAll(`[${es}]`))).map(
                            (e) => e.offsetLeft + e.offsetWidth / 2,
                        )),
                        (a = l.length > 1 ? Math.abs(l[1].offsetLeft - l[0].offsetLeft) : 1),
                        (i = t ? a * l.length : 0),
                        (o = "rtl" === getComputedStyle(e).direction ? -1 : 1));
                }
                function v() {
                    if (null == e) return;
                    let t = e.scrollLeft + e.clientWidth / 2;
                    l.forEach((e, n) => {
                        var l;
                        let s,
                            u,
                            d = r[n] - t;
                        i > 0 && (d = ((((d - c * o + i / 2) % i) + i) % i) - i / 2);
                        let { angleDeg: m, dropPx: f } =
                            ((l = d / a),
                            (u =
                                (a / ((4 * Math.PI) / 180)) *
                                (1 - Math.cos(((s = Math.max(-12, Math.min(12, 4 * l))) * Math.PI) / 180))),
                            { angleDeg: s, dropPx: u });
                        (e.style.setProperty("--custom-conjure-home-carousel-shift", `${t + d - r[n]}px`),
                            e.style.setProperty("--custom-conjure-home-carousel-angle", `${m}deg`),
                            e.style.setProperty("--custom-conjure-home-carousel-drop", `${f}px`));
                    });
                }
                function j(e) {
                    (null != m && i > 0 && (c = (c + (30 * (e - m)) / 1e3) % i),
                        (m = e),
                        v(),
                        (d = requestAnimationFrame(j)));
                }
                function b() {
                    let e = t && !f && !h && p && g;
                    e && 0 === d
                        ? ((m = null), (d = requestAnimationFrame(j)))
                        : e || 0 === d || (cancelAnimationFrame(d), (d = 0));
                }
                function y() {
                    ((f = !0), b());
                }
                function k() {
                    ((f = !1), b());
                }
                function w() {
                    ((h = !0), b());
                }
                function N(t) {
                    ((h = (0, ei.vq)(t.relatedTarget, Node) && e?.contains(t.relatedTarget) === !0), b());
                }
                function C() {
                    ((p = !0), b());
                }
                function A() {
                    ((p = !1), b());
                }
                (x(), v(), b());
                let S = new ResizeObserver(() => {
                    (x(), v());
                });
                (S.observe(e), S.observe(n));
                let E = new IntersectionObserver((e) => {
                    let [t] = e;
                    ((g = t.isIntersecting), b());
                });
                return (
                    E.observe(e),
                    e.addEventListener("scroll", v, { passive: !0 }),
                    e.addEventListener("pointerenter", y),
                    e.addEventListener("pointerleave", k),
                    e.addEventListener("focusin", w),
                    e.addEventListener("focusout", N),
                    window.addEventListener("focus", C),
                    window.addEventListener("blur", A),
                    () => {
                        (cancelAnimationFrame(d),
                            S.disconnect(),
                            E.disconnect(),
                            e.removeEventListener("scroll", v),
                            e.removeEventListener("pointerenter", y),
                            e.removeEventListener("pointerleave", k),
                            e.removeEventListener("focusin", w),
                            e.removeEventListener("focusout", N),
                            window.removeEventListener("focus", C),
                            window.removeEventListener("blur", A));
                    }
                );
            }, [s, u, t]),
            (0, a.jsx)("section", {
                ref: s,
                className: r ? eo.vV : eo.Dk,
                "aria-label": E.intl.string(S.default.Qc4S39),
                children: (0, a.jsx)("ul", {
                    ref: u,
                    className: eo.u4,
                    children: n.map((e) => (0, a.jsx)(eu, { inspiration: e, onCopyPrompt: l }, e.id)),
                }),
            })
        );
    });
var ed = n(858899),
    em = n(789645),
    ef = n(265872),
    eh = n(980707),
    ep = n(477782),
    eg = n(81369),
    ex = n(666476),
    ev = n(989145);
(n(323874), n(14289), n(35956));
var ej = n(77729),
    eb = n(723702),
    ey = n(264572).Buffer;
async function ek(e, t) {
    if (eb.isPlatformEmbedded) {
        let n = ey.from(await e.arrayBuffer());
        if ("function" == typeof ej.A.fileManager.saveWithDialog2) await ej.A.fileManager.saveWithDialog2(n, t);
        else
            try {
                await ej.A.fileManager.saveWithDialog(n, t);
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
var ew = n(688954);
class eN extends Error {
    status;
    constructor(e) {
        (super(`export failed (${e})`), (this.status = e));
    }
}
async function eC(e, t) {
    let n = await (0, ew.h)(e, "/agent/export", { query: { name: t } });
    if (!n.ok) throw new eN(n.status);
    return await n.blob();
}
async function eA(e, t, n) {
    (0, _.ensureConnection)(e);
    let l = await (0, ev.vX)(e, t);
    (0, _.sendUserMessage)(e, n, [l]);
}
function eS(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, ex.Oq)(e.size, t)
        ? null
        : E.intl.formatToPlainString(S.default.ThxcOX, { size: (0, ex.sM)((0, ex.Ju)(t)) });
}
async function eE(e, t) {
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
        r = await eC(e, l);
    await ek(r, l);
}
function eI(e) {
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
var eM = n(950305),
    e_ = n(664121);
let eP = [
    { value: "user", icon: eM.UserIcon, nameMessage: S.default.s1TsXl },
    { value: "guild", icon: e_.R, nameMessage: S.default.LlLIJw },
];
function eR(e) {
    let { importing: t, onImport: n } = e,
        l = i.useRef(null),
        r = eI(i.useCallback((e) => n(e, "user"), [n])),
        s = eI(i.useCallback((e) => n(e, "guild"), [n])),
        o = { user: r.open, guild: s.open };
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ef.Y, {
                targetElementRef: l,
                position: "bottom",
                align: "right",
                animation: ef.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, a.jsx)(eh.W, {
                        "data-menu-migrated": !0,
                        navId: "conjure-import-scope",
                        "aria-label": E.intl.string(S.default.soVyD1),
                        onClose: t,
                        onSelect: t,
                        children: (0, a.jsx)(ep.rX, {
                            label: E.intl.string(S.default.NyVn6T),
                            children: eP
                                .map((e) => ({
                                    id: `install-scope-${e.value}`,
                                    scope: e.value,
                                    label: E.intl.string(e.nameMessage),
                                    icon: e.icon,
                                }))
                                .map((e) =>
                                    (0, a.jsx)(
                                        ep.Dr,
                                        { id: e.id, label: e.label, icon: e.icon, action: o[e.scope] },
                                        e.id,
                                    ),
                                ),
                        }),
                    });
                },
                children: (e, n) => {
                    let { isShown: r } = n;
                    return (0, a.jsx)(Z.$, {
                        ...e,
                        buttonRef: l,
                        variant: "secondary",
                        size: "sm",
                        icon: eg.H,
                        text: E.intl.string(S.default.NJGZA3),
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
var eT = n(418811),
    eL = n(246338),
    e$ = n(290076),
    eD = n(442433),
    ez = n(314116),
    eO = n(260498),
    eF = n(782603),
    eq = n(780338),
    eU = n(782134),
    eG = n(113494),
    eB = n(663417),
    eK = n(70688),
    eH = n(173936),
    eV = n(473935),
    eW = n(625903),
    eX = n(408278),
    eJ = n(365199),
    eZ = n(7437),
    eY = n(147036),
    eQ = n(957565),
    e0 = n(785389),
    e1 = n(123917),
    e2 = n(860402);
let e3 = new Set();
var e5 = n(329356),
    e4 = n(442331),
    e6 = n(616334);
n(321073);
var e7 = n(189714),
    e8 = n(733791),
    e9 = n(189213),
    te = n(331322),
    tt = n(192308),
    tn = n(664619),
    tl = n(706935);
function tr(e) {
    let { project: t, target: n, action: l, ...r } = e,
        [s, o] = i.useState(n.canRemovePreviewBot),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(null),
        f = "delete" === l,
        h = f ? (0, e8.fI)(n) : (0, e8.Kd)(n),
        p = f ? null : (0, e8.L4)(n),
        g = (0, e8.Mi)(n),
        x = f
            ? E.intl.formatToPlainString(S.default.CJBhb2, { name: n.projectName })
            : E.intl.formatToPlainString(S.default.x6FvsZ, { app: n.appName });
    async function j() {
        (c(!0), m(null));
        let e = f ? (0, R.xx)(t.id) : (0, tn.YI)(t.id, { alsoRemovePreviewBot: s }),
            l = await e.catch(() => null);
        (c(!1), l?.ok !== !0)
            ? m(E.intl.string(f ? S.default["0XDHob"] : S.default.PJ2Fkn))
            : (f || (0, ed.P0)({ text: (0, e8.p_)(n), variant: "success" }), r.onClose());
    }
    return (0, a.jsx)(e9.a, {
        ...r,
        role: "alertdialog",
        title: f ? x : (0, e8.WX)((0, tl.tb)(S.default.x6FvsZ, n.appName)),
        subtitle: f ? (0, e8.J)(n) : E.intl.string(S.default["8OKM1N"]),
        "aria-label": x,
        notice: null == d ? void 0 : { message: d, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: r.onClose },
            {
                text: E.intl.string(f ? S.default.aC42bN : S.default.BGF8VT),
                variant: "critical-primary",
                loading: u,
                disabled: u,
                onClick: () => {
                    j().catch(() => {});
                },
            },
        ],
        children: (0, a.jsxs)(te.B, {
            gap: 12,
            children: [
                h.length > 0 || null != p
                    ? (0, a.jsx)(tl.Ay, {
                          items: h,
                          optionalItem:
                              null == p
                                  ? void 0
                                  : { item: p, checked: s, onChange: o, disabled: !n.canRemovePreviewBot },
                      })
                    : null,
                null != g ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: g }) : null,
            ],
        }),
    });
}
function ta(e) {
    (0, tt.openModal)((t) => (0, a.jsx)(tr, { ...t, ...e }));
}
var ti = n(587895);
function ts(e) {
    let { project: t, ...n } = e,
        [l, r] = i.useState(!1),
        [s, u] = i.useState(null),
        c = (0, o.bG)([ti.A], () => ti.A.getApplication(t.application_id)?.name ?? t.name, [t.application_id, t.name]),
        d = E.intl.formatToPlainString(S.default.m8KWic, { app: c });
    async function m() {
        (r(!0), u(null));
        let e = await (0, tn.R_)(t.id);
        (r(!1), e)
            ? ((0, ed.P0)({ text: E.intl.formatToPlainString(S.default.b8LN7N, { app: c }), variant: "success" }),
              n.onClose())
            : u(E.intl.string(S.default["rE/0SD"]));
    }
    return (0, a.jsx)(e9.a, {
        ...n,
        role: "alertdialog",
        title: d,
        subtitle: E.intl.string(S.default.wve4kB),
        "aria-label": d,
        notice: null == s ? void 0 : { message: s, type: "critical", role: "alert" },
        actions: [
            { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: n.onClose },
            {
                text: E.intl.string(S.default.GqcQyH),
                variant: "critical-primary",
                loading: l,
                disabled: l,
                onClick: () => {
                    m().catch(() => {});
                },
            },
        ],
    });
}
var to = n(552821);
let tu = [];
function tc(e) {
    (0, ed.P0)({ text: e, variant: "critical" });
}
function td(e) {
    let {
            projectId: t,
            projectName: n,
            guildId: l,
            projectGuildId: r,
            isOwner: s,
            canRemix: u,
            onExport: c,
            onImport: d,
            onRemix: m,
            onConnectTool: f,
            onHistory: h,
            onRefresh: p,
            isRefreshing: g = !1,
            onTogglePreviewPaused: x,
            previewPaused: v = !1,
            previewPauseDisabled: j = !1,
            onClose: b,
            refreshApplicationId: y,
            previewProjectId: k,
            onCloseMenu: w,
        } = e,
        N = (0, e7.iI)(t),
        C = i.useContext(e5.bI),
        { pending: A, refresh: I } = (0, eZ.A)(y ?? null),
        { pending: M, connect: _ } = (function (e, t) {
            let [n, l] = i.useState(e3),
                r = i.useRef(e3),
                a = i.useCallback((e) => {
                    ((r.current = (0, e0.Q6)(r.current, e)), l(r.current));
                }, []);
            return {
                pending: n,
                connect: i.useCallback(
                    (n) => {
                        if (null == e) return;
                        let i = (0, e0.K9)(r.current, n.type);
                        async function s() {
                            let l = await (0, e2.JI)(e, n.type);
                            (a(n.type), "url" === l.type)
                                ? (0, e1.h)({ href: l.url, trusted: !1 })
                                : t(
                                      "setup" === (0, e0.rq)(l.error)
                                          ? E.intl.string(S.default["jCQ/1B"])
                                          : E.intl.string(S.default.POxkSh),
                                  );
                        }
                        null != i && ((r.current = i), l(i), s().catch(() => a(n.type)));
                    },
                    [t, e, a],
                ),
            };
        })(k ?? null, tc),
        P = (0, o.bG)([e4.A], () => (null == k ? tu : e4.A.getDeclaredConnections(k))),
        T = i.useMemo(() => (0, e0.Xl)(P), [P]),
        L = (0, e8.Bs)(t),
        $ = (0, e8.CU)(t) && s,
        D = (0, o.bG)(
            [eO.Ay],
            () => {
                let e = eO.Ay.getProject(t);
                return null != e && (0, eO.jf)(e);
            },
            [t],
        ),
        z = (function (e) {
            let { canRefresh: t, refreshPending: n, offers: l, connectPending: r } = e,
                a = [];
            for (let { connection: e, offer: i } of (t &&
                a.push({
                    id: "preview-refresh",
                    label: E.intl.string(S.default["/nOi5n"]),
                    kind: "refresh",
                    disabled: n,
                }),
            l))
                a.push(
                    "authorize" === i
                        ? {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.DEwmI5, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: r.has(e.type),
                          }
                        : {
                              id: `preview-connect-${e.type}`,
                              label: E.intl.formatToPlainString(S.default.GnHcWc, { label: e.label }),
                              kind: "connect",
                              connectionType: e.type,
                              disabled: !0,
                          },
                );
            return a;
        })({ canRefresh: null != y, refreshPending: A, offers: T, connectPending: M }),
        O = i.useMemo(() => new Map(P.map((e) => [e.type, e])), [P]),
        F = null != m && u,
        q = s && null != d,
        G = F || null != c || q || null != f || null != h,
        B = eQ.p5 && null != l,
        K = eQ.p5,
        H = N ? eF.BellIcon : eq.BellSlashIcon,
        V = v ? eU.PlayIcon : eG.PauseIcon;
    return (0, a.jsxs)(eh.W, {
        "data-menu-migrated": !0,
        navId: `conjure-project-actions-${t}`,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onClose: w,
        onSelect: w,
        children: [
            null != p || null != x || null != b
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          null != p
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "refresh",
                                    icon: eB.RefreshIcon,
                                    leadingAccessory: { type: "icon", icon: eB.RefreshIcon },
                                    label: E.intl.string(S.default["p4B/7M"]),
                                    disabled: g,
                                    action: p,
                                })
                              : null,
                          null != x
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "toggle-preview-paused",
                                    icon: V,
                                    leadingAccessory: { type: "icon", icon: V },
                                    label: E.intl.string(v ? S.default.ZKd2Cw : S.default.VHxerm),
                                    disabled: j,
                                    action: x,
                                })
                              : null,
                          null != b
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "close",
                                    icon: eK.DoorExitIcon,
                                    leadingAccessory: { type: "icon", icon: eK.DoorExitIcon },
                                    label: E.intl.string(S.default["/TlGcK"]),
                                    action: b,
                                })
                              : null,
                      ],
                  })
                : null,
            z.length > 0
                ? (0, a.jsx)(ep.rX, {
                      children: z.map((e) =>
                          (0, a.jsx)(
                              ep.Dr,
                              {
                                  id: e.id,
                                  label: e.label,
                                  disabled: e.disabled,
                                  dontCloseOnAction: !0,
                                  action: () => {
                                      if ("refresh" === e.kind) return void I();
                                      let t = null == e.connectionType ? null : O.get(e.connectionType);
                                      null != t && _(t);
                                  },
                              },
                              e.id,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)(ep.rX, {
                children: (0, a.jsx)(ep.Dr, {
                    id: "mute",
                    label: E.intl.string(N ? S.default.s9rCuH : S.default["a+i/As"]),
                    icon: H,
                    leadingAccessory: { type: "icon", icon: H },
                    action: () => (0, e7.$L)(t, !N),
                }),
            }),
            G
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          F
                              ? (0, a.jsx)(ep.Dr, { id: "remix", label: E.intl.string(S.default.XWgAfc), action: m })
                              : null,
                          null != c
                              ? (0, a.jsx)(ep.Dr, { id: "export", label: E.intl.string(S.default.WsEEP7), action: c })
                              : null,
                          q
                              ? (0, a.jsx)(ep.Dr, { id: "import", label: E.intl.string(S.default.rWGY3e), action: d })
                              : null,
                          null != f
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "connect-tool",
                                    label: E.intl.string(S.default.yOIql5),
                                    action: f,
                                })
                              : null,
                          null != h
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "history",
                                    label: E.intl.string(S.default["3hIVou"]),
                                    action: h,
                                })
                              : null,
                      ],
                  })
                : null,
            K
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          B
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "copy-link",
                                    label: E.intl.string(E.t.WqhZss),
                                    icon: eH.LinkIcon,
                                    leadingAccessory: { type: "icon", icon: eH.LinkIcon },
                                    action: () =>
                                        (0, eQ.C)((0, eY.n)(l, U.VV.CONJURE, t), () =>
                                            (0, ed.P0)({ text: E.intl.string(E.t["L/PwZf"]), variant: "success" }),
                                        ),
                                })
                              : null,
                          (0, a.jsx)(ep.Dr, {
                              id: "copy-project-id",
                              label: E.intl.string(S.default["nm/zuU"]),
                              icon: eV.L,
                              leadingAccessory: { type: "icon", icon: eV.L },
                              action: () =>
                                  (0, eQ.C)(t, () =>
                                      (0, ed.P0)({ text: E.intl.string(S.default.CmfaZG), variant: "success" }),
                                  ),
                          }),
                      ],
                  })
                : null,
            s || D || L?.canRemoveBot === !0
                ? (0, a.jsxs)(ep.rX, {
                      children: [
                          s || D
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "settings",
                                    label: E.intl.string(S.default.FzfmQ8),
                                    icon: eW.SettingsIcon,
                                    leadingAccessory: { type: "icon", icon: eW.SettingsIcon },
                                    action: () =>
                                        (0, e6.A)(t, {
                                            guildId: r ?? l,
                                            initialTab: "project",
                                            isPreview: !0,
                                            publishOptions: C,
                                        }),
                                })
                              : null,
                          L?.canRemoveBot === !0
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "remove-from-server",
                                    label: E.intl.formatToPlainString(S.default["3gKG2j"], { server: L.guildName }),
                                    color: "danger",
                                    action: () => {
                                        let e = eO.Ay.getProject(t);
                                        null != e && ta({ project: e, target: L, action: "remove" });
                                    },
                                })
                              : null,
                          $
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "unpublish",
                                    label: E.intl.string(S.default.jYAR58),
                                    color: "danger",
                                    action: () => {
                                        var e;
                                        let n = eO.Ay.getProject(t);
                                        null != n &&
                                            ((e = { project: n }),
                                            (0, tt.openModal)((t) => (0, a.jsx)(ts, { ...t, ...e })));
                                    },
                                })
                              : null,
                          s
                              ? (0, a.jsx)(ep.Dr, {
                                    id: "delete",
                                    label: E.intl.string(E.t.oyYWHE),
                                    color: "danger",
                                    action: () => {
                                        let e = eO.Ay.getProject(t);
                                        if (null != e && null != L) ta({ project: e, target: L, action: "delete" });
                                        else
                                            (0, ez.A)({
                                                title: E.intl.formatToPlainString(S.default.CJBhb2, { name: n }),
                                                subtitle: E.intl.string(S.default["0OmrVn"]),
                                                confirmText: E.intl.string(E.t.oyYWHE),
                                                variant: "critical",
                                                onConfirm: () => {
                                                    (0, R.K)(t, () =>
                                                        (0, ed.P0)({
                                                            text: E.intl.string(S.default["0XDHob"]),
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
function tm(e) {
    let { trigger: t = "header", ...n } = e,
        l = i.useRef(null);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, a.jsx)(td, { ...n, onCloseMenu: t });
        },
        children: (e, n) => {
            let { onClick: r } = e,
                { isShown: i } = n;
            return (0, a.jsx)("div", {
                ref: l,
                className: to.h,
                children:
                    "iconButton" === t
                        ? (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t["UKOtz+"]),
                              children: (0, a.jsx)(eX.K, {
                                  icon: eJ.MoreHorizontalIcon,
                                  size: "sm",
                                  variant: "icon-only",
                                  "aria-label": E.intl.string(E.t["UKOtz+"]),
                                  "aria-haspopup": "menu",
                                  "aria-expanded": i,
                                  onClick: r,
                              }),
                          })
                        : (0, a.jsx)(y.A.Icon, {
                              icon: eJ.MoreHorizontalIcon,
                              tooltip: E.intl.string(E.t["UKOtz+"]),
                              "aria-label": E.intl.string(E.t["UKOtz+"]),
                              "aria-haspopup": "menu",
                              "aria-expanded": i,
                              selected: i,
                              onClick: r,
                          }),
            });
        },
    });
}
var tf = n(95264);
function th(e, t) {
    let n,
        l,
        r,
        a,
        s,
        { onExport: o } =
            ((n = e.id),
            (l = e.name),
            (r = i.useRef(!1)),
            (a = i.useCallback(() => {
                r.current ||
                    ((r.current = !0),
                    (0, ed.P0)({ text: E.intl.formatToPlainString(S.default.aN2JdD, { name: l }) }),
                    eE(n, l)
                        .catch((e) => {
                            let t;
                            (console.error("[conjure] project export failed", n, e),
                                (0, ed.P0)({
                                    text:
                                        409 === (t = e instanceof eN ? e.status : null)
                                            ? E.intl.string(S.default["9oqbEw"])
                                            : 404 === t
                                              ? E.intl.string(S.default["0W8uLq"])
                                              : E.intl.string(S.default.N8753A),
                                    variant: "critical",
                                }));
                        })
                        .finally(() => {
                            r.current = !1;
                        }));
            }, [n, l])),
            {
                onExport: a,
                onImport: (s = eI(
                    i.useCallback(
                        (e) => {
                            let r = eS(e);
                            null != r
                                ? (0, ed.P0)({ text: r, variant: "critical" })
                                : (0, ez.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: l }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, n));
                                          try {
                                              await eA(n, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, ed.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
                                                  variant: "critical",
                                              });
                                          }
                                      },
                                  });
                        },
                        [n, l, t],
                    ),
                )).open,
                importInput: s.input,
            });
    return {
        projectId: e.id,
        projectName: e.name,
        guildId: t,
        projectGuildId: e.guild_id,
        isOwner: (0, eO.PV)(e),
        canRemix: (0, eO.H_)(e),
        onRemix: () => (0, tf.A)(e, t),
        onExport: o,
    };
}
function tp(e) {
    let { project: t, guildId: n } = e,
        l = th(t, n);
    return (0, a.jsx)(td, { ...l, onCloseMenu: eD.Z_ });
}
function tg(e) {
    let { project: t, guildId: n } = e,
        l = th(t, n);
    return (0, a.jsx)(tm, { ...l, trigger: "iconButton" });
}
var tx = n(638693);
class tv extends Error {}
function tj(e) {
    let { guildId: t, modelSettings: n, onClose: l } = e,
        r = i.useCallback(
            (e) => {
                "user" === e.install_scope || (0, eL.Ot)(e, t)
                    ? (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE, e.id))
                    : (0, eT.A)(e);
            },
            [t],
        ),
        s = i.useCallback((e) => (0, a.jsx)(tg, { project: e, guildId: t }), [t]),
        o = i.useCallback(
            (e, n) => {
                (0, eD.jA)(e, () => (0, a.jsx)(tp, { project: n, guildId: t }));
            },
            [t],
        ),
        [c, d] = i.useState(!1),
        m = i.useCallback(
            async (e, l) => {
                let r = eS(e);
                if (null != r) return void (0, ed.P0)({ text: r, variant: "critical" });
                d(!0);
                try {
                    await G({
                        guildId: t,
                        installScope: l,
                        modelSettings: n,
                        start: async (t) => {
                            try {
                                await eA(t, e, E.intl.string(S.default["LUc7/5"]));
                            } catch {
                                throw (await (0, R.xx)(t).catch(() => void 0), new tv());
                            }
                        },
                    });
                } catch (e) {
                    (0, ed.P0)({
                        text: e instanceof tv ? E.intl.string(S.default["Q+l4Hv"]) : (0, P.mG)(e),
                        variant: "critical",
                    });
                } finally {
                    d(!1);
                }
            },
            [t, n],
        ),
        f = E.intl.string(S.default.dWgSAa),
        h = E.intl.string(S.default.kar7jh);
    return (0, a.jsxs)("aside", {
        className: tx.pz,
        "aria-label": f,
        children: [
            (0, a.jsxs)("div", {
                className: tx.wx,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-strong", children: f }),
                    (0, a.jsxs)("div", {
                        className: tx.$s,
                        children: [
                            (0, a.jsx)(eR, { importing: c, onImport: m }),
                            (0, a.jsx)(y.A.Icon, { icon: em.P, tooltip: h, "aria-label": h, onClick: l }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(g.Ip, {
                className: tx.XG,
                children: (0, a.jsx)(e$.A, {
                    onSelect: r,
                    guildId: t,
                    renderProjectActions: s,
                    onProjectContextMenu: o,
                }),
            }),
        ],
    });
}
var tb = n(559106),
    ty = n(663341),
    tk = n(783977),
    tw = n(559647),
    tN = n(531685),
    tC = n(477262),
    tA = n(432017);
let tS = [
    {
        id: "add-images-videos",
        label: S.default["51+9lc"],
        icon: tC.s,
        accept: "image/*,video/*,.png,.jpg,.jpeg,.gif,.webp,.avif,.heic,.heif,.svg,.bmp,.mp4,.m4v,.mov,.webm,.mkv,.avi",
    },
    {
        id: "add-sounds",
        label: S.default["10ljr2"],
        icon: tA.T,
        accept: "audio/*,.mp3,.wav,.ogg,.oga,.opus,.m4a,.aac,.flac,.weba,.webm,.aif,.aiff,.mid,.midi",
    },
    { id: "add-other-files", label: S.default.aotDee, icon: eg.H, accept: "" },
];
var tE = n(289873),
    tI = n(285796),
    tM = n(73153),
    t_ = n(839214);
let tP = [],
    tR = 1,
    tT = (0, t_.D)(() => ({ draftsByProject: {} }));
function tL(e, t, n) {
    return e.draftsByProject[t]?.[n] ?? tP;
}
function t$(e, t) {
    return tL(tT.getState(), e, t);
}
function tD(e, t, n) {
    let { draftsByProject: l } = tT.getState();
    tT.setState({ draftsByProject: { ...l, [e]: { ...l[e], [t]: n } } });
}
function tz(e, t, n, l) {
    let r = t$(e, t);
    return (
        !!r.some((e) => e.localId === n) &&
        (tD(
            e,
            t,
            r.map((e) => (e.localId === n ? { ...e, ...l } : e)),
        ),
        !0)
    );
}
function tO(e, t) {
    (0, ev.Vm)(e, t).catch((e) => {
        console.error("[conjure] attachment cleanup failed", e);
    });
}
function tF(e, t) {
    (null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && tO(e, t.ref.id));
}
function tq(e, t) {
    let { deleteFromWorker: n } = t,
        { draftsByProject: l } = tT.getState(),
        r = l[e];
    if (null == r) return;
    for (let t of Object.values(r))
        for (let l of t ?? tP) n ? tF(e, l) : null != l.previewUrl && URL.revokeObjectURL(l.previewUrl);
    let { [e]: a, ...i } = l;
    tT.setState({ draftsByProject: i });
}
function tU(e) {
    return E.intl.formatToPlainString(S.default.JZ59Bo, { size: (0, ex.sM)((0, ex.Ju)(e)) });
}
function tG(e, t) {
    let n = t$(e, t);
    if (0 !== n.length) {
        for (let t of n) tF(e, t);
        tD(e, t, tP);
    }
}
function tB(e, t) {
    let n = t$(e, t);
    if (0 === n.length) return [];
    for (let e of n) null != e.previewUrl && URL.revokeObjectURL(e.previewUrl);
    return (tD(e, t, tP), n.flatMap((e) => (null != e.ref ? [e.ref] : [])));
}
function tK(e, t) {
    let { clarificationAnswers: n, attachments: l = [] } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = t$(e, "chat"),
        a = r.length > 0 && r.every((e) => "ready" === e.status) ? tB(e, "chat") : [];
    (0, _.sendUserMessage)(e, t, [...l, ...a], { clarificationAnswers: n });
}
(tM.h.subscribe("LOGOUT", () => {
    for (let e of Object.keys(tT.getState().draftsByProject)) tq(e, { deleteFromWorker: !0 });
}),
    tM.h.subscribe("CONJURE_PROJECT_DELETE_SUCCESS", (e) => {
        let { projectId: t } = e;
        tq(t, { deleteFromWorker: !1 });
    }));
var tH = n(922329);
async function tV(e) {
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
var tW = n(153171);
let tX = ex.lN;
function tJ(e, t, n, l) {
    let r = t$(e, t).length;
    !(function (e, t, n) {
        if (0 === n.length) return;
        let l = n.map((e) => {
            let { draft: t, upload: n } = e;
            return { draft: { ...t, localId: tR++ }, upload: n };
        });
        for (let { draft: n, upload: r } of (tD(e, t, [
            ...t$(e, t),
            ...l.map((e) => {
                let { draft: t } = e;
                return t;
            }),
        ]),
        l))
            r?.().then(
                (l) => {
                    if ("errorText" in l) return void tz(e, t, n.localId, { status: "error", errorText: l.errorText });
                    let { converted: r, ...a } = l;
                    tz(e, t, n.localId, { ...r, status: "ready", ref: a })
                        ? setTimeout(
                              () =>
                                  tz(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default.E7dS5n) }),
                              ex.o2 - 3e5,
                          )
                        : tO(e, a.id);
                },
                (l) => {
                    (console.error("[conjure] attachment upload failed", l),
                        tz(e, t, n.localId, { status: "error", errorText: E.intl.string(S.default["kUw/b1"]) }));
                },
            );
    })(
        e,
        t,
        n.map((e) => {
            let t = "" === e.type ? "application/octet-stream" : e.type,
                n = { name: e.name, contentType: t };
            if (r++ >= tX)
                return {
                    draft: {
                        ...n,
                        status: "error",
                        errorText: E.intl.formatToPlainString(S.default.Q0aCVZ, { count: tX }),
                    },
                };
            if (!(0, ex.Oq)(e.size, t))
                return "image/png" === t && e.size <= ex.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas
                    ? {
                          draft: { ...n, status: "uploading", previewUrl: URL.createObjectURL(e) },
                          upload: async () => {
                              let n = await tV(e).catch(() => null);
                              return null != n && (0, ex.Oq)(n.size, n.type)
                                  ? { ...(await l(n)), converted: { name: n.name, contentType: n.type } }
                                  : { errorText: tU(t) };
                          },
                      }
                    : { draft: { ...n, status: "error", errorText: tU(t) } };
            let a = ex.XB.has(t) ? URL.createObjectURL(e) : void 0;
            return { draft: { ...n, status: "uploading", previewUrl: a }, upload: () => l(e) };
        }),
    );
}
function tZ(e) {
    let { projectId: t, surface: n, onUploadFile: l } = e,
        r = tT.useState((e) => tL(e, t, n)),
        a = i.useCallback((e) => tJ(t, n, e, l), [t, n, l]),
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
                null != (r = (l = t$(t, n)).find((t) => t.localId === e)) &&
                    (tF(t, r),
                    tD(
                        t,
                        n,
                        l.filter((t) => t.localId !== e),
                    ));
            },
            [t, n],
        ),
        u = i.useCallback(() => tB(t, n), [t, n]);
    return {
        drafts: r,
        addFiles: a,
        pasteFiles: s,
        removeDraft: o,
        settled: r.every((e) => "ready" === e.status),
        takeRefs: u,
    };
}
function tY(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tH.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tW.o1,
                onClick: () => n(t.localId),
                "aria-label": E.intl.string(S.default.Slam9g),
                children: (0, a.jsx)(tI.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
var tQ = n(900797),
    t0 = n(320448),
    t1 = n(344587),
    t2 = n(534554),
    t3 = n(392208),
    t5 = n(822313),
    t4 = n(837984),
    t6 = n(359589),
    t7 = n(254575);
function t8(e) {
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
function t9(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, placement: o, open: u, entered: c } = e,
        [d, m] = i.useState(!1),
        f = t8(d),
        p = t3.P.indexOf(t.tier),
        g = d ? tQ.t : t0._,
        x = t3.P.map(t2.D0),
        j = (0, t2.Tc)(t.tier),
        { text: b, phase: y } = (0, t1.Q)(j);
    return (0, a.jsx)("div", {
        className: t7.qd,
        "data-placement": o ?? void 0,
        children: (0, a.jsxs)("div", {
            className: h()(t7.t$, { [t7.Zr]: u && c, [t7.GF]: !u }),
            role: "dialog",
            "aria-label": E.intl.string(S.default["3E7Yc0"]),
            children: [
                f.mounted
                    ? (0, a.jsx)("div", {
                          className: h()(t7.Nr, t7.uO, { [t7.Zr]: d && f.entered, [t7.GF]: !d }),
                          children: (0, a.jsx)(t6.b, { settings: t, tiers: n, choices: l, disabled: r, onChange: s }),
                      })
                    : null,
                (0, a.jsxs)("div", {
                    className: `${t7.Nr} ${t7.rF}`,
                    children: [
                        (0, a.jsxs)("div", {
                            className: t7.wx,
                            children: [
                                (0, a.jsxs)("button", {
                                    type: "button",
                                    className: t7.y6,
                                    "aria-expanded": d,
                                    "aria-label": E.intl.string(S.default.eGqPbV),
                                    onClick: () => m((e) => !e),
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-md/medium",
                                            color: "none",
                                            children: E.intl.string(S.default.aBPQxX),
                                        }),
                                        (0, a.jsx)(g, {
                                            size: "custom",
                                            width: 16,
                                            height: 16,
                                            color: "currentColor",
                                            className: t7.vg,
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(v.E, {
                                    tag: "span",
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    className: h()(t7.Z, { [t7.xQ]: "exit" === y, [t7.lm]: "enter" === y }),
                                    children: b,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: t7.hs,
                            children: [
                                (0, a.jsxs)("div", {
                                    className: t7.Nb,
                                    children: [
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default["/tlOR5"]),
                                        }),
                                        (0, a.jsx)(v.E, {
                                            tag: "span",
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: E.intl.string(S.default.FxoUwB),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)(t4.A, {
                                    activeIndex: p,
                                    stops: x,
                                    ariaLabel: E.intl.string(S.default.aBPQxX),
                                    disabled: r,
                                    onSelect: function (e) {
                                        let n = t3.P[e];
                                        null != n && n !== t.tier && s((0, t2.CM)((0, t2.j6)(t, n)));
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
function ne(e) {
    let { settings: t, tiers: n, choices: l, disabled: r, onChange: s, className: o, icon: u } = e,
        c = i.useRef(null),
        [d, m] = (0, t5.A)(t, s),
        [f, h] = i.useState(!1),
        { mounted: p, entered: g } = t8(f);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: c,
        position: "top",
        align: "right",
        shouldShow: p,
        onRequestClose: () => h(!1),
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { position: t } = e;
            return (0, a.jsx)(t9, {
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
            return (0, a.jsx)(N.m, {
                text: E.intl.string(S.default["k2JN/p"]),
                shouldShow: !n,
                ariaHidden: !0,
                children: (0, a.jsx)(C.D, {
                    innerRef: c,
                    className: o ?? t7.hZ,
                    "aria-label": E.intl.string(S.default["k2JN/p"]),
                    ...e,
                    onClick: () => h((e) => !e),
                    "aria-expanded": f,
                    children: u ?? (0, a.jsx)(tk.R, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
                }),
            });
        },
    });
}
var nt = n(847374),
    nn = n(122485);
function nl(e) {
    let { target: t, guilds: n, onChange: l, disabled: r, className: s } = e,
        [o, u] = i.useState(!1),
        c = i.useRef(null),
        d = i.useCallback(() => u(!1), []);
    o && r && u(!1);
    let m = E.intl.string(S.default.NyVn6T),
        f = E.intl.string(S.default.UPLaGM),
        h = t === K ? null : (n.find((e) => e.id === t) ?? null),
        p = h?.name ?? f;
    return (0, a.jsx)(ef.Y, {
        targetElementRef: c,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "left",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eh.W, {
                navId: "conjure-home-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsxs)(ep.rX, {
                    label: m,
                    children: [
                        (0, a.jsx)(ep.iD, {
                            id: "conjure-home-target-user",
                            group: "conjure-home-target",
                            label: f,
                            checked: t === K,
                            action: () => {
                                (l(K), d());
                            },
                        }),
                        n.map((e) =>
                            (0, a.jsx)(
                                ep.iD,
                                {
                                    id: `conjure-home-target-${e.id}`,
                                    group: "conjure-home-target",
                                    label: e.name,
                                    checked: t === e.id,
                                    action: () => {
                                        (l(e.id), d());
                                    },
                                },
                                e.id,
                            ),
                        ),
                    ],
                }),
            });
        },
        children: (e, t) => {
            let { onClick: n, ...l } = e,
                { isShown: i } = t;
            return (0, a.jsx)(tb.vN, {
                children: (0, a.jsxs)("button", {
                    ...l,
                    ref: c,
                    type: "button",
                    className: s,
                    disabled: r,
                    "aria-label": E.intl.formatToPlainString(S.default.Lyx6pW, { name: p }),
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: () => u((e) => !e),
                    children: [
                        (0, a.jsx)("span", {
                            className: nn.R,
                            "aria-hidden": !0,
                            children:
                                null != h
                                    ? (0, a.jsx)(B.Ay, { guild: h, size: B.Ay.Sizes.MINI, active: !0 })
                                    : (0, a.jsx)(eM.UserIcon, { size: "refresh_sm", color: "currentColor" }),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            lineClamp: 1,
                            className: nn.P,
                            children: p,
                        }),
                        (0, a.jsx)(nt.a, { size: "refresh_sm", color: "currentColor", "aria-hidden": !0 }),
                    ],
                }),
            });
        },
    });
}
var nr = n(200160),
    na = n(465410);
function ni(e) {
    let { prompts: t, paused: n, showCaret: l } = e,
        { index: r, length: s } = (function (e, t) {
            let [n, l] = i.useState({ index: 0, length: 0, phase: "typing" }),
                r = i.useRef(n.length);
            i.useLayoutEffect(() => {
                r.current = n.length;
            });
            let { index: a, phase: s } = n;
            return (
                i.useEffect(() => {
                    if (t) return;
                    let n = e[a].length;
                    if ("holding" === s) {
                        let e = window.setTimeout(() => l((e) => ({ ...e, phase: "deleting" })), 1400);
                        return () => window.clearTimeout(e);
                    }
                    let i = "typing" === s,
                        o = r.current,
                        u = performance.now(),
                        c = o,
                        d = 0,
                        m = 0;
                    return (
                        (d = requestAnimationFrame(function t(r) {
                            let s = Math.floor((r - u) / (i ? 14 : 4)),
                                f = i ? Math.min(n, o + s) : Math.max(0, o - s);
                            (f !== c && ((c = f), l((e) => ({ ...e, length: f }))),
                                i && f === n
                                    ? l((e) => ({ ...e, length: f, phase: "holding" }))
                                    : i || 0 !== f
                                      ? (d = requestAnimationFrame(t))
                                      : (m = window.setTimeout(
                                            () => l({ index: (a + 1) % e.length, length: 0, phase: "typing" }),
                                            250,
                                        )));
                        })),
                        () => {
                            (cancelAnimationFrame(d), window.clearTimeout(m));
                        }
                    );
                }, [e, t, a, s]),
                n
            );
        })(t, n);
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-muted",
        className: nr.RC,
        children: [t[r].slice(0, s), l ? (0, a.jsx)("span", { className: nr.OW }) : null],
    });
}
function ns(e) {
    let { prompts: t, paused: n } = e,
        l = (function (e, t) {
            let [n, l] = i.useState(0);
            return (
                i.useEffect(() => {
                    if (t || e < 2) return;
                    let n = window.setInterval(() => l((t) => (t + 1) % e), 2e3);
                    return () => window.clearInterval(n);
                }, [e, 2e3, t]),
                n
            );
        })(t.length, n);
    return (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-muted", className: nr.RC, children: t[l] });
}
function no(e) {
    let { boxFocused: t } = e,
        n = i.useMemo(
            () => [
                E.intl.string(S.default.J2o8Ae),
                E.intl.string(S.default["wn+Bzd"]),
                E.intl.string(S.default["6DCVy3"]),
                E.intl.string(S.default.iRbnRD),
                E.intl.string(S.default["p/zqml"]),
            ],
            [],
        ),
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        r = (0, o.bG)([tN.A], () => tN.A.isFocused()),
        s = t || !r;
    return (0, a.jsx)("div", {
        className: nr.qf,
        "aria-hidden": !0,
        children: l
            ? (0, a.jsx)(ns, { prompts: n, paused: s })
            : (0, a.jsx)(ni, { prompts: n, paused: s, showCaret: !t }),
    });
}
function nu(e) {
    let {
            idea: t,
            inputRef: n,
            onIdeaChange: l,
            onSubmit: r,
            submitting: s,
            submitDisabled: o,
            error: u,
            target: c,
            eligibleGuilds: d,
            onTargetChange: m,
            modelSettings: f,
            onModelSettingsChange: p,
            attachments: g,
        } = e,
        [x, j] = i.useState(!1),
        b = i.useRef(null),
        y = i.useId(),
        k = "" !== t,
        w = E.intl.string(E.t.d56gCa),
        N = i.useRef(null),
        C = i.useRef(null),
        { addFiles: A, pasteFiles: I, removeAttachment: M } = g,
        _ = i.useCallback((e) => {
            let t = N.current;
            null != t && ((t.accept = e), t.click());
        }, []),
        P = i.useCallback(
            (e) => {
                (A(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
            },
            [A],
        ),
        R = i.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || r());
            },
            [o, r],
        );
    return (0, a.jsxs)("div", {
        className: nr.kL,
        children: [
            (0, a.jsxs)("div", {
                ref: b,
                className: h()(nr.yk, { [nr.Sl]: null != u }),
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        className: nr.Ox,
                        children: [
                            (0, a.jsx)(tb.vN, {
                                ringTarget: b,
                                ringClassName: nr.Rg,
                                children: (0, a.jsx)("textarea", {
                                    ref: n,
                                    className: h()(nr.hF, na.dv),
                                    rows: 3,
                                    value: t,
                                    "aria-label": E.intl.string(S.default.cwrS1O),
                                    "aria-invalid": null != u,
                                    "aria-describedby": null != u ? y : void 0,
                                    onChange: (e) => l(e.currentTarget.value),
                                    onKeyDown: R,
                                    onPaste: (e) => I(e),
                                    onFocus: () => j(!0),
                                    onBlur: () => j(!1),
                                }),
                            }),
                            k ? null : (0, a.jsx)(no, { boxFocused: x }),
                        ],
                    }),
                    g.attachments.length > 0
                        ? (0, a.jsx)("div", {
                              className: nr.ZO,
                              children: g.attachments.map((e) => {
                                  let { draft: t } = e;
                                  return (0, a.jsx)(tY, { draft: t, onRemove: M }, t.localId);
                              }),
                          })
                        : null,
                    (0, a.jsxs)("div", {
                        className: nr.KE,
                        children: [
                            (0, a.jsx)("input", {
                                ref: N,
                                type: "file",
                                multiple: !0,
                                onChange: P,
                                className: nr.Fg,
                                tabIndex: -1,
                                "aria-hidden": !0,
                            }),
                            (0, a.jsx)(ef.Y, {
                                targetElementRef: C,
                                position: "top",
                                align: "left",
                                animation: ef.Y.Animation.NONE,
                                renderPopout: (e) => {
                                    let { closePopout: t } = e;
                                    return (0, a.jsx)(eh.W, {
                                        "data-menu-migrated": !0,
                                        navId: "conjure-home-attach",
                                        "aria-label": w,
                                        onClose: t,
                                        onSelect: t,
                                        children: (0, a.jsx)(ep.rX, {
                                            children: tS.map((e) =>
                                                (0, a.jsx)(
                                                    ep.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => _(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                        }),
                                    });
                                },
                                children: (e, t) => {
                                    let { isShown: n } = t;
                                    return (0, a.jsx)("button", {
                                        ...e,
                                        ref: C,
                                        type: "button",
                                        className: nr.gb,
                                        disabled: s,
                                        "aria-label": w,
                                        "aria-haspopup": "menu",
                                        "aria-expanded": n,
                                        children: (0, a.jsx)(ty.PlusLargeIcon, {
                                            size: "refresh_sm",
                                            color: "currentColor",
                                            className: nr.Xv,
                                        }),
                                    });
                                },
                            }),
                            (0, a.jsx)(nl, {
                                target: c,
                                guilds: d,
                                onChange: m,
                                disabled: s,
                                className: h()(nr.gb, nr.qU),
                            }),
                            (0, a.jsxs)("div", {
                                className: nr.Rc,
                                children: [
                                    (0, a.jsx)(ne, {
                                        settings: f ?? O,
                                        tiers: F,
                                        choices: (0, T.b)()
                                            ? {
                                                  main: [...$.main, ...z.main],
                                                  subagent: [...$.subagent, ...z.subagent],
                                                  thinking: $.thinking,
                                              }
                                            : $,
                                        disabled: s,
                                        onChange: p,
                                        className: nr.gb,
                                        icon: (0, a.jsx)(tk.R, { size: "refresh_sm", color: "currentColor" }),
                                    }),
                                    (0, a.jsx)(Z.$, {
                                        variant: "primary",
                                        size: "sm",
                                        icon: tw.SendMessageIcon,
                                        text: E.intl.string(S.default.bNtzxp),
                                        disabled: o,
                                        loading: s,
                                        onClick: r,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != u
                ? (0, a.jsx)(v.E, {
                      id: y,
                      variant: "text-sm/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: u,
                  })
                : null,
        ],
    });
}
var nc = n(628284),
    nd = n(369606),
    nm = n(926268),
    nf = n(406810),
    nh = n(707554),
    np = n(651346);
function ng(e) {
    let { className: t } = e;
    return (0, a.jsx)("span", { className: h()(np.n8, t) });
}
let nx = [
        {
            id: "apps",
            title: S.default["bvcT/Q"],
            description: S.default.ArcJqa,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: np.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: np.My,
                            children: [
                                (0, a.jsx)("span", { className: np._w }),
                                (0, a.jsx)("span", { className: np._w }),
                                (0, a.jsx)("span", { className: np._w }),
                            ],
                        }),
                        (0, a.jsx)(ng, { className: np.Lm }),
                        (0, a.jsx)("div", {
                            className: np.Oh,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: np.ZW,
                                        children: [
                                            (0, a.jsx)("span", { className: np.NU }),
                                            0 === e
                                                ? (0, a.jsx)(nc.y, {
                                                      size: "xs",
                                                      color: w.A.colors.ICON_BRAND,
                                                      className: np._6,
                                                  })
                                                : null,
                                            (0, a.jsx)(ng, { className: np.Eg }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                });
            },
        },
        {
            id: "games",
            title: S.default["JU01/4"],
            description: S.default.FXwLsv,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(np.x, np.jG),
                    children: [
                        (0, a.jsx)("span", { className: h()(np.gg, np.K1) }),
                        (0, a.jsx)("span", { className: h()(np.gg, np.W2) }),
                        (0, a.jsx)("span", { className: h()(np.Fs, np.A$) }),
                        (0, a.jsx)("span", { className: h()(np.Fs, np.eP) }),
                        (0, a.jsx)("span", { className: h()(np.Fs, np.kc) }),
                        (0, a.jsx)("span", { className: h()(np.Fs, np.OE) }),
                        (0, a.jsx)("span", { className: np.OC }),
                        (0, a.jsxs)("div", {
                            className: np.si,
                            children: [
                                (0, a.jsx)(nd.TrophyIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_WARNING }),
                                (0, a.jsx)(v.E, {
                                    variant: "text-xs/bold",
                                    color: "none",
                                    className: np.o9,
                                    children: 128,
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: np.KQ,
                            children: [
                                (0, a.jsx)(nm.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nm.HeartIcon, { size: "xxs", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsx)(nm.HeartIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "bots",
            title: S.default.KBHZfO,
            description: S.default.qNmKhG,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: np.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: np.$y,
                            children: [(0, a.jsx)("span", { className: np.m$ }), (0, a.jsx)(ng, { className: np.Md })],
                        }),
                        (0, a.jsxs)("div", {
                            className: np.iU,
                            children: [
                                (0, a.jsx)("span", {
                                    className: h()(np.my, np.FY),
                                    children: (0, a.jsx)(er.RobotIcon, {
                                        size: "xs",
                                        color: w.A.colors.ICON_OVERLAY_LIGHT,
                                    }),
                                }),
                                (0, a.jsxs)("div", {
                                    className: np.OS,
                                    children: [
                                        (0, a.jsxs)("div", {
                                            className: np.f9,
                                            children: [
                                                (0, a.jsx)(ng, { className: np.iE }),
                                                (0, a.jsx)(v.E, {
                                                    variant: "text-xs/bold",
                                                    color: "none",
                                                    className: np.AO,
                                                    children: E.intl.string(S.default.VlgiLf),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ng, { className: np.xs }),
                                        (0, a.jsx)(ng, { className: np.Md }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "profile-widgets",
            title: S.default.GUb2zA,
            description: S.default["v+F6qW"],
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: h()(np.x, np.ME),
                    children: [
                        (0, a.jsx)("span", { className: np.CK }),
                        (0, a.jsxs)("div", {
                            className: np.kI,
                            children: [
                                (0, a.jsx)("span", { className: h()(np.my, np.jU) }),
                                (0, a.jsx)(ng, { className: np.iE }),
                                (0, a.jsxs)("div", {
                                    className: np.Wy,
                                    children: [
                                        (0, a.jsx)("div", {
                                            className: np.M1,
                                            children: [0, 1].map((e) =>
                                                (0, a.jsxs)(
                                                    "div",
                                                    {
                                                        className: np.dJ,
                                                        children: [
                                                            (0, a.jsx)(ng, { className: np.cR }),
                                                            (0, a.jsx)(ng, { className: np.Zh }),
                                                        ],
                                                    },
                                                    e,
                                                ),
                                            ),
                                        }),
                                        (0, a.jsx)("div", {
                                            className: np.bW,
                                            children: [0, 1, 2, 3, 4, 5].map((e) =>
                                                (0, a.jsx)("span", { className: np.QR }, e),
                                            ),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "overlay-widgets",
            title: S.default.uVOH1p,
            description: S.default.zm7y9u,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: np.JH,
                    children: [
                        (0, a.jsx)("span", { className: np.rx }),
                        (0, a.jsx)("span", { className: np.ny }),
                        (0, a.jsx)("span", { className: np.ZH }),
                        (0, a.jsx)("div", {
                            className: np.$Y,
                            children: [0, 1, 2].map((e) =>
                                (0, a.jsxs)(
                                    "div",
                                    {
                                        className: np.fn,
                                        children: [
                                            (0, a.jsx)("span", { className: h()(np._h, { [np.zY]: 0 === e }) }),
                                            (0, a.jsx)(ng, { className: np.Av }),
                                        ],
                                    },
                                    e,
                                ),
                            ),
                        }),
                        (0, a.jsxs)("div", {
                            className: np.Y5,
                            children: [
                                (0, a.jsx)(nf.ClockIcon, { size: "xxs", color: w.A.colors.ICON_OVERLAY_LIGHT }),
                                (0, a.jsx)(ng, { className: np.jB }),
                            ],
                        }),
                    ],
                });
            },
        },
        {
            id: "automod",
            title: S.default["+EKk4D"],
            description: S.default.fpXK3z,
            Visual: function () {
                return (0, a.jsxs)("div", {
                    className: np.x,
                    children: [
                        (0, a.jsxs)("div", {
                            className: np.iU,
                            children: [
                                (0, a.jsx)("span", { className: np.my }),
                                (0, a.jsxs)("div", {
                                    className: np.OS,
                                    children: [
                                        (0, a.jsx)(ng, { className: np.iE }),
                                        (0, a.jsx)(ng, { className: h()(np.xs, np.pc) }),
                                        (0, a.jsx)(ng, { className: h()(np.Md, np.pc) }),
                                    ],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            className: np.jC,
                            children: [
                                (0, a.jsx)(el.ShieldIcon, { size: "sm", color: w.A.colors.ICON_FEEDBACK_CRITICAL }),
                                (0, a.jsxs)("div", {
                                    className: np.qQ,
                                    children: [
                                        (0, a.jsx)(ng, { className: h()(np.Md, np.k8) }),
                                        (0, a.jsx)(ng, { className: h()(np.nq, np.k8) }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            },
        },
    ],
    nv = i.memo(function () {
        let e = i.useId();
        return (0, a.jsx)("section", {
            className: np.GG,
            "aria-labelledby": e,
            children: (0, a.jsx)(nh.F, {
                component: (0, a.jsx)(x.D, {
                    id: e,
                    variant: "heading-lg/medium",
                    children: E.intl.string(S.default.IiQEVd),
                }),
                children: (0, a.jsx)("ul", {
                    className: np.Vg,
                    children: nx.map((e) => {
                        let { id: t, title: n, description: l, Visual: r } = e;
                        return (0, a.jsxs)(
                            "li",
                            {
                                className: np.Vs,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: np.Tn,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(r, {}),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: np.pG,
                                        children: [
                                            (0, a.jsx)(x.D, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: E.intl.string(n),
                                            }),
                                            (0, a.jsx)(v.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: E.intl.string(l),
                                            }),
                                        ],
                                    }),
                                ],
                            },
                            t,
                        );
                    }),
                }),
            }),
        });
    });
function nj(e) {
    return "" === e.type ? "application/octet-stream" : e.type;
}
let nb = 1;
function ny(e) {
    let t = nj(e),
        n = { localId: nb++, name: e.name, contentType: t };
    if (
        !(0, ex.Oq)(e.size, t) &&
        !("image/png" === t && e.size <= ex.km && "u" > typeof Worker && "u" > typeof OffscreenCanvas)
    )
        return { file: e, draft: { ...n, status: "error", errorText: tU(t) } };
    let l = ex.XB.has(t) ? URL.createObjectURL(e) : void 0;
    return { file: e, draft: { ...n, status: "ready", previewUrl: l } };
}
function nk(e) {
    null != e.draft.previewUrl && URL.revokeObjectURL(e.draft.previewUrl);
}
async function nw(e, t) {
    if ((0, ex.Oq)(t.size, nj(t))) return (0, ev.vX)(e, t);
    let n = await tV(t);
    if (null == n || !(0, ex.Oq)(n.size, n.type)) throw Error("attachment over its size limit");
    return (0, ev.vX)(e, n);
}
var nN = n(698638),
    nC = n(606128),
    nA = n(260024);
class nS extends Error {}
function nE(e) {
    let t,
        { guildId: n } = e,
        [l, r] = i.useState(""),
        [s, o] = i.useState(!1),
        [u, c] = i.useState(null),
        [d, m] = i.useState(null),
        [f, k] = i.useState(() => W.w.get(X) ?? null ?? !0),
        w = i.useRef(null),
        N = (0, V.z9)("ConjureHomePage"),
        C = i.useMemo(
            () => [
                {
                    id: "flappy",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.gtX7tS),
                    fullPrompt: E.intl.string(S.default["Sfa50+"]),
                    name: E.intl.string(S.default.Tbag5k),
                    image: "/assets/b43659b526f2e936.svg",
                    authorAvatarSeed: "1",
                },
                {
                    id: "raid-calendar",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.GNGB59),
                    fullPrompt: E.intl.string(S.default.lxwxNm),
                    name: E.intl.string(S.default["rzB/bE"]),
                    image: "/assets/1d701ea289cc99e6.svg",
                    authorAvatarSeed: "2",
                },
                {
                    id: "aram-widget",
                    category: "profile_widget",
                    shortPrompt: E.intl.string(S.default.RzNoHJ),
                    fullPrompt: E.intl.string(S.default.VfUFEt),
                    name: E.intl.string(S.default.RYGHMF),
                    image: "/assets/05c0d07952b2d93f.svg",
                    authorAvatarSeed: "3",
                },
                {
                    id: "trivia",
                    category: "games",
                    shortPrompt: E.intl.string(S.default.TGN39X),
                    fullPrompt: E.intl.string(S.default.gilNLG),
                    name: E.intl.string(S.default.vvwBlz),
                    image: "/assets/5813258afff68797.svg",
                    authorAvatarSeed: "4",
                },
                {
                    id: "spoilers-automod",
                    category: "automod",
                    shortPrompt: E.intl.string(S.default.Gw756q),
                    fullPrompt: E.intl.string(S.default["d/WMHR"]),
                    name: E.intl.string(S.default["v9+fAY"]),
                    image: "/assets/54b5cda688395473.svg",
                    authorAvatarSeed: "5",
                },
                {
                    id: "movie-night",
                    category: "apps",
                    shortPrompt: E.intl.string(S.default.u4UWGH),
                    fullPrompt: E.intl.string(S.default.ofBNNy),
                    name: E.intl.string(S.default.DQQdZL),
                    image: "/assets/fcb9220c49b6460a.svg",
                    authorAvatarSeed: "6",
                },
                {
                    id: "welcome-bot",
                    category: "chat_bot",
                    shortPrompt: E.intl.string(S.default["T3+H3J"]),
                    fullPrompt: E.intl.string(S.default.ryeSuC),
                    name: E.intl.string(S.default["3deXbx"]),
                    image: "/assets/56e489e9c5907add.svg",
                    authorAvatarSeed: "7",
                },
            ],
            [],
        ),
        A = (0, b.o)().get(H.f_) === K,
        I = `${n}:${A}`,
        [T, L] = i.useState(null),
        $ = T?.context === I ? T.target : null,
        D = i.useCallback((e) => L({ context: I, target: e }), [I]),
        z = i.useCallback((e) => e === K || N.some((t) => t.id === e), [N]),
        O = !A && z(n) ? n : K,
        F = null != $ && z($) ? $ : O,
        q = F === K ? "user" : "guild",
        U = F === K ? n : F,
        B = (function () {
            let [e, t] = i.useState([]),
                n = i.useRef(e);
            (i.useLayoutEffect(() => {
                n.current = e;
            }),
                i.useEffect(() => () => n.current.forEach(nk), []));
            let l = i.useCallback((e) => {
                    if (0 === e.length) return;
                    let l = e.map(ny);
                    ((n.current = [...n.current, ...l]), t(n.current));
                }, []),
                r = i.useCallback(
                    (e) => {
                        if (e.defaultPrevented) return;
                        let t = Array.from(e.clipboardData?.files ?? []);
                        0 !== t.length && (e.preventDefault(), l(t));
                    },
                    [l],
                ),
                a = i.useCallback((e) => {
                    let l = n.current.find((t) => t.draft.localId === e);
                    null != l && (nk(l), (n.current = n.current.filter((e) => e !== l)), t(n.current));
                }, []),
                s = i.useCallback(() => {
                    (n.current.forEach(nk), (n.current = []), t(n.current));
                }, []),
                o = i.useMemo(
                    () =>
                        (function (e) {
                            if (e.length <= ex.lN) return e;
                            let t = E.intl.formatToPlainString(S.default.Q0aCVZ, { count: ex.lN });
                            return e.map((e, n) =>
                                n < ex.lN || "error" === e.draft.status
                                    ? e
                                    : { ...e, draft: { ...e.draft, status: "error", errorText: t } },
                            );
                        })(e),
                    [e],
                );
            return {
                attachments: o,
                addFiles: l,
                pasteFiles: r,
                removeAttachment: a,
                clear: s,
                hasErrors: o.some((e) => "error" === e.draft.status),
            };
        })(),
        { attachments: Z, addFiles: Y, clear: Q } = B,
        ee =
            "idea" ===
                (t = (function (e) {
                    let { idea: t, installScope: n, submitting: l } = e;
                    return l ? "submitting" : "" === t.trim() ? "idea" : null == n ? "scope" : null;
                })({ idea: l, installScope: q, submitting: s })) ||
            "submitting" === t ||
            B.hasErrors,
        et = i.useCallback((e) => Y(Array.from(e)), [Y]);
    (0, J.p)(w);
    let en = i.useCallback((e) => {
            (r(e), c(null));
        }, []),
        el = i.useCallback(
            (e) => {
                en(e);
                let t = w.current;
                null != t && (t.focus(), t.setSelectionRange(e.length, e.length));
            },
            [en],
        ),
        er = i.useRef(!1),
        ea = i.useCallback(async () => {
            let e = l.trim();
            if ("" !== e && !er.current) {
                ((er.current = !0), o(!0), c(null));
                try {
                    await G({
                        guildId: U,
                        installScope: q,
                        modelSettings: d,
                        start: async (t) => {
                            let n = [];
                            if (Z.length > 0)
                                try {
                                    n = await Promise.all(
                                        Z.map((e) => {
                                            let { file: n } = e;
                                            return nw(t, n);
                                        }),
                                    );
                                } catch {
                                    throw (await (0, R.xx)(t).catch(() => void 0), new nS());
                                }
                            ((0, _.sendUserMessage)(t, e, n), Q());
                        },
                    });
                } catch (e) {
                    (c(e instanceof nS ? E.intl.string(S.default["903H7m"]) : (0, P.mG)(e)), (er.current = !1), o(!1));
                }
            }
        }, [l, q, d, U, Z, Q]),
        ei = i.useCallback((e) => {
            (W.w.set(X, e), k(e));
        }, []),
        es = i.useCallback(() => ei(!1), [ei]),
        eo = E.intl.string(f ? S.default.kar7jh : S.default.WSc5Y2);
    return (0, a.jsx)("div", {
        className: h()(nA.MY, nC.T),
        children: (0, a.jsxs)("div", {
            className: nA.Zp,
            children: [
                (0, a.jsxs)("main", {
                    className: nA.iW,
                    children: [
                        s
                            ? null
                            : (0, a.jsx)(j.A, {
                                  title: E.intl.string(S.default.gy7byi),
                                  description: E.intl.string(S.default["dkv/WO"]),
                                  icons: nN.ir,
                                  onDrop: et,
                              }),
                        (0, a.jsx)(M, {
                            title: E.intl.string(S.default.uk6jhJ),
                            transparent: !0,
                            actions: (0, a.jsx)(y.A.Icon, {
                                icon: p.Z,
                                color: "var(--icon-strong)",
                                className: nA.FW,
                                tooltip: eo,
                                "aria-label": eo,
                                selected: f,
                                onClick: () => ei(!f),
                            }),
                        }),
                        (0, a.jsx)(g.Ip, {
                            className: nA.XG,
                            children: (0, a.jsxs)("div", {
                                className: nA.Qs,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: nA.Lv,
                                        children: [
                                            (0, a.jsxs)("div", {
                                                className: nA.ZK,
                                                children: [
                                                    (0, a.jsx)(x.D, {
                                                        variant: "display-lg",
                                                        color: "text-strong",
                                                        className: nA.DD,
                                                        children: E.intl.string(S.default.doYpEy),
                                                    }),
                                                    (0, a.jsx)(v.E, {
                                                        variant: "text-md/normal",
                                                        color: "text-strong",
                                                        className: nA.VA,
                                                        children: E.intl.string(S.default.BH58fD),
                                                    }),
                                                ],
                                            }),
                                            (0, a.jsx)("div", {
                                                className: nA.ZK,
                                                children: (0, a.jsx)(nu, {
                                                    idea: l,
                                                    inputRef: w,
                                                    onIdeaChange: en,
                                                    onSubmit: ea,
                                                    submitting: s,
                                                    submitDisabled: ee,
                                                    error: u,
                                                    target: F,
                                                    eligibleGuilds: N,
                                                    onTargetChange: D,
                                                    modelSettings: d,
                                                    onModelSettingsChange: m,
                                                    attachments: B,
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, a.jsx)(ec, { inspirations: C, onCopyPrompt: el }),
                                    (0, a.jsx)(nv, {}),
                                ],
                            }),
                        }),
                    ],
                }),
                f ? (0, a.jsx)(tj, { guildId: n, modelSettings: d, onClose: es }) : null,
            ],
        }),
    });
}
var nI = n(478016),
    nM = n(604525),
    n_ = n(92446),
    nP = n(534890),
    nR = n(646270),
    nT = n(31300),
    nL = n(831453),
    n$ = n(270593);
let nD = Object.freeze({ x: 0.5, y: 0.5 });
function nz(e) {
    return "" !== e.trim();
}
function nO(e) {
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
function nF(e) {
    let { kind: t, name: n } = nO(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function nq(e) {
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
let nU = "[conjure:selected] ",
    nG = " \u2014 ";
function nB(e) {
    if (!e.startsWith(nU)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(nU.length),
        a = r.indexOf(nG),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
let nK = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    nH = new Map(),
    nV = new Set();
function nW(e) {
    return nH.get(e) ?? nK;
}
function nX(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? nH.set(e, t) : nH.delete(e), [...nV]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function nJ(e) {
    let t = nW(e);
    t.active || nX(e, { ...t, active: !0 });
}
function nZ(e) {
    let t = nW(e);
    t.active && nX(e, { ...t, active: !1 });
}
function nY(e) {
    nH.has(e) && nX(e, nK);
}
function nQ(e, t) {
    let n = nW(e);
    n.active && nX(e, { ...n, context: t });
}
function n0(e, t) {
    return null != t && e.authorId === t;
}
function n1(e) {
    return (
        nV.add(e),
        () => {
            nV.delete(e);
        }
    );
}
function n2(e) {
    let t = i.useCallback(() => (null == e ? nK : nW(e)), [e]);
    return i.useSyncExternalStore(n1, t, t);
}
(n(134528), n(947204));
let n3 = { past: [], present: [], future: [] };
function n5(e, t) {
    return { past: [...e.past, e.present], present: t, future: [] };
}
function n4(e, t, n) {
    return { x: e.x + t, y: e.y + n };
}
function n6(e, t, n) {
    switch (e.kind) {
        case "marker":
        case "erase":
            return { ...e, points: e.points.map((e) => n4(e, t, n)) };
        case "circle":
        case "square":
            return { ...e, from: n4(e.from, t, n), to: n4(e.to, t, n) };
        case "text":
            return { ...e, at: n4(e.at, t, n) };
    }
}
function n7(e) {
    return e.some((e) => "erase" !== e.kind);
}
function n8(e, t) {
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
function n9(e, t, n) {
    let l = n.x - t.x,
        r = n.y - t.y,
        a = l * l + r * r,
        i = 0 === a ? 0 : Math.max(0, Math.min(1, ((e.x - t.x) * l + (e.y - t.y) * r) / a));
    return Math.hypot(e.x - (t.x + i * l), e.y - (t.y + i * r));
}
function le(e, t) {
    return { x: e.x * t.width, y: e.y * t.height };
}
function lt(e, t) {
    switch (e.kind) {
        case "marker":
        case "erase": {
            let n = e.points.map((e) => le(e, t)),
                l = (e.width * t.width) / 2,
                r = n.map((e) => e.x),
                a = n.map((e) => e.y),
                i = Math.min(...r) - l,
                s = Math.min(...a) - l;
            return { x: i, y: s, width: Math.max(...r) + l - i, height: Math.max(...a) + l - s };
        }
        case "circle":
        case "square": {
            let n = le(e.from, t),
                l = le(e.to, t),
                r = (e.width * t.width) / 2;
            return {
                x: Math.min(n.x, l.x) - r,
                y: Math.min(n.y, l.y) - r,
                width: Math.abs(l.x - n.x) + 2 * r,
                height: Math.abs(l.y - n.y) + 2 * r,
            };
        }
        case "text": {
            let n = le(e.at, t),
                l = e.size * t.width;
            return { x: n.x, y: n.y, width: e.text.length * l * 0.6, height: l };
        }
    }
}
function ln(e) {
    return n7(e.history.present) && e.sketchDismissedFor !== e.history.present;
}
let ll = [3, 6, 12],
    lr = [10, 20, 40],
    la = (0, t_.D)(() => ({ byProject: {} })),
    li = {
        tool: "pick",
        lastShape: "circle",
        markerSize: 1,
        eraserSize: 1,
        colorId: "red",
        history: n3,
        sketchDismissedFor: null,
    };
function ls(e) {
    return la.getState().byProject[e] ?? null;
}
function lo(e, t) {
    let n = ls(e);
    if (null == n) return;
    let l = t(n);
    if (l === n) return;
    let { byProject: r } = la.getState();
    la.setState({ byProject: { ...r, [e]: l } });
}
function lu(e) {
    if (null == ls(e)) return;
    let { [e]: t, ...n } = la.getState().byProject;
    (la.setState({ byProject: n }), nY(e));
}
function lc(e, t) {
    null != ls(e) &&
        (lo(e, (e) =>
            e.tool === t ? e : { ...e, tool: t, lastShape: "circle" === t || "square" === t ? t : e.lastShape },
        ),
        "pick" === t ? nJ(e) : nZ(e));
}
function ld(e, t) {
    lo(e, (e) => {
        let n = (function (e, t) {
            switch (t.type) {
                case "commit":
                    return n5(e, [...e.present, t.shape]);
                case "move":
                    if ((0 === t.dx && 0 === t.dy) || !e.present.some((e) => e.id === t.id)) return e;
                    return n5(
                        e,
                        e.present.map((e) => (e.id === t.id ? n6(e, t.dx, t.dy) : e)),
                    );
                case "remove": {
                    let n = e.present.filter((e) => e.id !== t.id);
                    return n.length === e.present.length ? e : n5(e, n);
                }
                case "clear":
                    return 0 === e.present.length ? e : n5(e, []);
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
function lm(e) {
    return la.useState((t) => (null == e ? null : (t.byProject[e] ?? null)));
}
var lf = n(39416);
function lh(e) {
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
            className: lf.i5,
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
var lp = n(245179);
let lg = new Set(),
    lx = null;
function lv(e, t) {
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
                lg.add(t),
                () => {
                    lg.delete(t);
                }
            );
        }, [e]));
}
var lj = n(885386);
function lb() {
    return lj.Q_.useSetting() || !1;
}
var ly = n(573083),
    lk = n(128761),
    lw = n(12177),
    lN = n(744627),
    lC = n(513845),
    lA = n(802905),
    lS = n(951178);
let lE = { width: 320, height: 240 };
var lI = n(855859),
    lM = n(238490),
    l_ = n(991690),
    lP = n(696645);
function lR(e) {
    return "frame" !== e.mode
        ? e.mode
        : null == e.appChannel
          ? `frame-${e.surface}`
          : `frame-${e.surface}-${e.appChannel}`;
}
function lT(e) {
    switch (e.mode) {
        case "frame":
            return null == e.appChannel
                ? (0, lP.X)(e.surface)
                : E.intl.formatToPlainString(S.default["6xVl+N"], {
                      surface: (0, lP.X)(e.surface),
                      channel: e.appChannel,
                  });
        case "widget":
            return E.intl.string(S.default.y5GiL1);
        case "overlay":
            return E.intl.string(S.default["2940LX"]);
        case "bot":
            return E.intl.string(S.default.tjpaGN);
    }
}
var lL = n(939398),
    l$ = n(86147),
    lD = n(729475),
    lz = n(91242),
    lO = n(156548),
    lF = n(869146),
    lq = n(475815),
    lU = n(165610);
function lG(e) {
    let { frame: t, controlProjectId: n } = e,
        l = (0, lO.cR)(t?.id ?? null),
        r = (0, ly.Zv)(n),
        i = (0, o.bG)(
            [lF.A, lz.A],
            () => null != t && lF.A.getWindowOpen(q.MLl.ACTIVITY_POPOUT) && lz.A.getMainFrame()?.id === t.id,
            [t],
        );
    if (!(0, lU.x1)(t) || i || r) return null;
    let s = (0, lO.fl)(t.id);
    if (null == s || !(0, lq.Ub)(s)) return null;
    let u = E.intl.string(l ? E.t.Z7MyNB : E.t.OIDkcp);
    return (0, a.jsx)(y.A.Icon, {
        tooltip: u,
        icon: l ? l$.z : lD.T,
        "aria-label": u,
        role: "switch",
        "aria-checked": l,
        selected: l,
        onClick: () => (0, lO.U8)(t.id),
    });
}
var lB = n(704745);
function lK(e) {
    let { targets: t, target: n, onChange: l } = e,
        [r, s] = i.useState(!1),
        o = null != n && t.length > 1;
    r && !o && s(!1);
    let u = i.useCallback(() => s(!1), []),
        c = i.useCallback(() => s((e) => !e), []),
        d = i.useRef(null);
    if (!o) return null;
    let m = E.intl.string(S.default.I2ucou);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: d,
        shouldShow: r,
        onRequestClose: u,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: r } = e;
            return (0, a.jsx)(eh.W, {
                "data-menu-migrated": !0,
                navId: "conjure-preview-target",
                "aria-label": m,
                onClose: r,
                onSelect: r,
                children: (0, a.jsx)(ep.rX, {
                    label: m,
                    children: t.map((e) => {
                        let t = lR(e);
                        return (0, a.jsx)(
                            ep.iD,
                            {
                                id: `preview-target-${t}`,
                                group: "conjure-preview-target",
                                label: lT(e),
                                checked: t === lR(n),
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
            return (0, a.jsx)(tb.vN, {
                children: (0, a.jsxs)("button", {
                    ...r,
                    ref: d,
                    type: "button",
                    className: lB.h,
                    "aria-haspopup": "menu",
                    "aria-expanded": i,
                    onClick: c,
                    children: [
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default["N+VA1J"]),
                        }),
                        (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-sm/medium",
                            color: "none",
                            lineClamp: 1,
                            children: lT(n),
                        }),
                        (0, a.jsx)(nt.a, { size: "xs", color: "currentColor" }),
                    ],
                }),
            });
        },
    });
}
var lH = n(324641),
    lV = n(627363),
    lW = n(153207),
    lX = n(803101),
    lJ = n(226178),
    lZ = n(625180),
    lY = n(672929),
    lQ = n(111534),
    l0 = n(754027),
    l1 = n(457827),
    l2 = n(722701),
    l3 = n(949616),
    l5 = n(962998),
    l4 = n(535466),
    l6 = n(321032),
    l7 = n(277085);
let l8 = [];
var l9 = n(17813);
function re(e) {
    let { permissions: t } = e;
    return 0 === t.length
        ? null
        : (0, a.jsxs)(te.B, {
              gap: 8,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default["6U+4pJ"]),
                  }),
                  (0, a.jsx)(l9.A, { permissions: t }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.X8wPIB),
                  }),
              ],
          });
}
function rt(e) {
    let { projectId: t, name: n, description: l, onDone: r, transitionState: s, onClose: u } = e,
        { iconURL: c } = (0, l4.Ay)(t),
        [d, m] = i.useState(n),
        [f, h] = i.useState(l),
        [p, g] = i.useState(null),
        [x, j] = i.useState(null),
        [b, y] = i.useState(!1),
        k = d.trim(),
        w = k === n ? null : (0, l7.p)(k),
        N = p ?? c,
        C = (0, o.bG)([l2.A], () => l2.A.getPublishStatus(t)?.previewDevicePermissions ?? l8);
    function A() {
        (r(), u());
    }
    async function I(e) {
        if ((e.preventDefault(), b || null != w)) return;
        (y(!0), j(null));
        let r = await (0, e5.$l)(t, { name: k, icon: p, description: f }, { name: n, description: l });
        (y(!1), r) ? A() : j(E.intl.string(S.default.Fi7boI));
    }
    return (0, a.jsx)("form", {
        onSubmit: I,
        children: (0, a.jsx)(e9.a, {
            transitionState: s,
            onClose: u,
            title: E.intl.string(S.default.OmOWDq),
            subtitle: E.intl.string(S.default.Gzmlyg),
            size: "sm",
            actions: [
                { text: E.intl.string(S.default["bz/M68"]), variant: "secondary", onClick: A, disabled: b },
                {
                    text: E.intl.string(S.default.dyIV6M),
                    variant: "primary",
                    type: "submit",
                    loading: b,
                    disabled: null != w,
                },
            ],
            children: (0, a.jsxs)(te.B, {
                gap: 24,
                children: [
                    (0, a.jsx)(l6.r, {
                        iconURL: N,
                        onIconChange: (e) => {
                            (g(e), j(null));
                        },
                        name: d,
                        nameError: w,
                        onNameChange: m,
                        description: f,
                        onDescriptionChange: h,
                        disabled: b,
                    }),
                    (0, a.jsx)(re, { permissions: C }),
                    null != x
                        ? (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-feedback-critical", children: x })
                        : null,
                ],
            }),
        }),
    });
}
var rn = n(373540),
    rl = n(144228);
function rr(e) {
    let { options: t, onDone: n, transitionState: l, onClose: r } = e,
        [s, o] = i.useState(t.selected_destination_id),
        u = E.intl.string(S.default.lJrOGW);
    return (0, a.jsx)(e9.a, {
        transitionState: l,
        onClose: r,
        title: u,
        size: "sm",
        actions: [
            { text: E.intl.string(S.default.y83r6D), variant: "secondary", onClick: r },
            {
                text: E.intl.string(S.default.zh1Izp),
                variant: "primary",
                onClick: () => {
                    (n(s), r());
                },
            },
        ],
        children: (0, a.jsx)(rl.z, {
            label: u,
            options: t.destinations.map((e) => {
                let { id: t, label: n } = e;
                return { name: n, value: t };
            }),
            value: s,
            onChange: o,
        }),
    });
}
let ra = {
    showPublishBlocked: rn.A,
    promptFirstPublish: (e) =>
        new Promise((t) => {
            let n = !1;
            (0, tt.openModal)(
                (t) =>
                    (0, a.jsx)(rt, {
                        ...t,
                        ...e,
                        onDone: () => {
                            n = !0;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        }),
    promptPublishDestination: function (e) {
        return new Promise((t) => {
            let n = null;
            (0, tt.openModal)(
                (t) =>
                    (0, a.jsx)(rr, {
                        ...t,
                        options: e,
                        onDone: (e) => {
                            n = e;
                        },
                    }),
                { onCloseCallback: () => t(n) },
            );
        });
    },
    showError: (e) => (0, ed.P0)({ text: e, variant: "critical" }),
};
var ri = n(58736),
    rs = n(333007),
    ro = n(775121),
    ru = n(826745),
    rc = n(470779);
function rd(e) {
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
            anchor: p = "chip",
            allowAttachments: g = !0,
            placeholder: x,
            label: v,
        } = e,
        {
            drafts: j,
            addFiles: b,
            pasteFiles: y,
            removeDraft: k,
            settled: w,
            takeRefs: C,
        } = tZ({ projectId: t, surface: "design", onUploadFile: f }),
        A = i.useRef(null),
        I = (d || j.length > 0) && w && !m,
        M = i.useCallback(() => {
            if (!I) return;
            let e = C();
            u(e.length > 0 ? e : void 0);
        }, [I, C, u]),
        [_, P] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => P(!0));
            });
        return () => {
            (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
        };
    }, []);
    let R = i.useRef(null),
        [T, L] = i.useState(null);
    i.useLayoutEffect(() => {
        let e = R.current;
        if (null == e || "u" < typeof ResizeObserver) return;
        let t = new ResizeObserver(() => L({ height: e.offsetHeight }));
        return (t.observe(e), () => t.disconnect());
    }, []);
    let $ = T?.height ?? 44,
        D = l.left + 8,
        z = l.top + 8,
        O = Math.max(n.x, D),
        F = Math.min(Math.max("point" === p ? n.y : n.y + 32 + 4, z), Math.max(z, l.top + l.height - $ - 8));
    return (0, a.jsxs)("div", {
        ref: R,
        className: h()(rc.M0, { [rc.ho]: _ && !m, [rc.ET]: m }),
        style: { left: O, top: F },
        "data-testid": "conjure-design-compose-bar",
        children: [
            g
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)("input", {
                              ref: A,
                              type: "file",
                              multiple: !0,
                              className: rc.Fg,
                              tabIndex: -1,
                              "aria-hidden": !0,
                              onChange: (e) => {
                                  (b(Array.from(e.target.files ?? [])), (e.target.value = ""));
                              },
                          }),
                          (0, a.jsx)(N.m, {
                              position: "bottom",
                              text: E.intl.string(S.default.lgvqSB),
                              ariaHidden: !0,
                              children: (0, a.jsx)("button", {
                                  type: "button",
                                  className: rc.tY,
                                  onClick: () => A.current?.click(),
                                  "aria-label": E.intl.string(S.default.lgvqSB),
                                  children: (0, a.jsx)(eg.H, {
                                      size: "custom",
                                      color: "currentColor",
                                      className: rc.WW,
                                  }),
                              }),
                          }),
                      ],
                  })
                : null,
            (0, a.jsx)(ru.y, {
                autoFocus: !0,
                rows: 1,
                className: rc.hF,
                value: s,
                placeholder: x ?? ("" === r ? E.intl.string(S.default.MPPV1Q) : `Edit ${r}`),
                "aria-label": v ?? E.intl.string(S.default.KCYqWL),
                onChange: (e) => o(e.target.value),
                onPaste: m || !g ? void 0 : y,
                onKeyDown: (e) => {
                    if ("Escape" === e.key) {
                        (e.preventDefault(), e.stopPropagation(), c());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), M());
                },
            }),
            j.length > 0
                ? (0, a.jsx)("div", {
                      className: rc.ZO,
                      children: j.map((e) => (0, a.jsx)(tY, { draft: e, onRemove: k }, e.localId)),
                  })
                : null,
        ],
    });
}
function rm(e) {
    if (null == e) return null;
    let t = e.getBoundingClientRect();
    return t.width < 1 || t.height < 1 ? null : { left: t.left, top: t.top, width: t.width, height: t.height };
}
function rf(e, t) {
    return null == e || null == t
        ? e === t
        : e.left === t.left && e.top === t.top && e.width === t.width && e.height === t.height;
}
function rh(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        [n, l] = i.useState(() => (t ? rm(e()) : null));
    return (
        i.useEffect(() => {
            if (!t) return;
            function n() {
                let t = rm(e());
                l((e) => (rf(e, t) ? e : t));
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
var rp = n(876798),
    rg = n(48507),
    rx = n(193885),
    rv = n(744898),
    rj = n(803656),
    rb = n(241326),
    ry = n(972213);
function rk(e) {
    return e.resolve({ saturation: 1 }).hex();
}
function rw(e, t, n) {
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
let rN = rw("red", rk(w.A.unsafe_rawColors.RED_400), () => E.intl.string(S.default.tvXfjt)),
    rC = [
        rN,
        rw("yellow", rk(w.A.unsafe_rawColors.YELLOW_300), () => E.intl.string(S.default.FYuaJ1)),
        rw("green", rk(w.A.unsafe_rawColors.GREEN_360), () => E.intl.string(S.default["Vv+paS"])),
        rw("blue", rk(w.A.unsafe_rawColors.BLUE_345), () => E.intl.string(S.default.k9b1QJ)),
        rw("white", rk(w.A.unsafe_rawColors.WHITE), () => E.intl.string(S.default["1sOXwH"])),
    ];
function rA(e) {
    return rC.find((t) => t.id === e) ?? rN;
}
function rS(e) {
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
function rE(e) {
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
function rI(e) {
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
function rM(e) {
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
let r_ = ll.map((e) => rM(Math.min(16, e + 3))),
    rP = lr.map((e) => rM(Math.min(16, e / 2.5))),
    rR = [S.default.jZtZUr, S.default.cTQdD0, S.default.J3ucEg],
    rT = {
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
            label: () => E.intl.string(S.default.oIZQbm),
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
            label: () => E.intl.string(S.default.ARNVr7),
        },
    };
function rL(e) {
    let { icon: t, label: n, pressed: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)("span", {
            className: lf.z6,
            "data-active": l ? "" : void 0,
            children: (0, a.jsx)(rp.k, {
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
function r$(e) {
    let { icon: t, label: n, disabled: l, onClick: r } = e;
    return (0, a.jsx)(N.m, {
        text: n,
        position: "left",
        children: (0, a.jsx)(eX.K, {
            icon: t,
            size: "sm",
            variant: "icon-only",
            disabled: l,
            "aria-label": n,
            onClick: r,
        }),
    });
}
function rD(e) {
    let { label: t, trigger: n, children: l, direction: r } = e,
        [s, o] = i.useState(!1),
        u = i.useCallback(() => o(!1), []),
        c = i.useCallback(() => o((e) => !e), []);
    return (0, a.jsxs)("div", {
        className: lf.pr,
        onMouseEnter: () => o(!0),
        onMouseLeave: u,
        children: [
            n(c),
            s
                ? (0, a.jsx)("div", {
                      className: lf.mz,
                      "data-direction": r,
                      role: "group",
                      "aria-label": t,
                      children: l(u),
                  })
                : null,
        ],
    });
}
function rz(e) {
    let { projectId: t, state: n, onExit: l, onUndo: r, onRedo: i, onClear: s } = e,
        { tool: o, lastShape: u, markerSize: c, eraserSize: d, history: m } = n,
        f = rA(n.colorId),
        h = rT[u],
        p = E.intl.string(S.default.hUm825),
        g = E.intl.string(S.default.n5IA3a),
        x = E.intl.string(S.default.r5dX6t),
        v = E.intl.string(S.default.VfYqDq);
    return (0, a.jsxs)("div", {
        className: lf.t$,
        children: [
            (0, a.jsx)("div", {
                className: lf.NT,
                children: (0, a.jsx)(rL, {
                    icon: rE,
                    label: E.intl.string(S.default.YtyKcM),
                    pressed: "pick" === o,
                    onClick: () => lc(t, "pick"),
                }),
            }),
            (0, a.jsxs)("div", {
                className: lf.H$,
                role: "toolbar",
                "aria-orientation": "vertical",
                "aria-label": E.intl.string(S.default["0IAEFf"]),
                children: [
                    (0, a.jsx)(rL, {
                        icon: rS,
                        label: E.intl.string(S.default.qTOXqb),
                        pressed: "move" === o,
                        onClick: () => lc(t, "move"),
                    }),
                    (0, a.jsx)(rL, {
                        icon: rg.x,
                        label: E.intl.string(S.default.AGb8aK),
                        pressed: "text" === o,
                        onClick: () => lc(t, "text"),
                    }),
                    (0, a.jsx)(rD, {
                        label: p,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rL, {
                                icon: rx.V,
                                label: p,
                                pressed: "marker" === o,
                                onClick: () => {
                                    (lc(t, "marker"), e());
                                },
                            }),
                        children: (e) =>
                            r_.map((n, l) =>
                                (0, a.jsx)(
                                    rL,
                                    {
                                        icon: n,
                                        label: E.intl.string(rR[l]),
                                        pressed: "marker" === o && c === l,
                                        onClick: () => {
                                            (lo(t, (e) => ({ ...e, markerSize: l, tool: "marker" })), nZ(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rD, {
                        label: x,
                        direction: "row",
                        trigger: (e) =>
                            (0, a.jsx)(rL, {
                                icon: h.icon,
                                label: x,
                                pressed: "circle" === o || "square" === o,
                                onClick: () => {
                                    (lc(t, u), e());
                                },
                            }),
                        children: (e) =>
                            Object.keys(rT).map((n) =>
                                (0, a.jsx)(
                                    rL,
                                    {
                                        icon: rT[n].icon,
                                        label: rT[n].label(),
                                        pressed: o === n,
                                        onClick: () => {
                                            (lc(t, n), e());
                                        },
                                    },
                                    n,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rD, {
                        label: g,
                        direction: "column",
                        trigger: (e) =>
                            (0, a.jsx)(rL, {
                                icon: rI,
                                label: g,
                                pressed: "eraser" === o,
                                onClick: () => {
                                    (lc(t, "eraser"), e());
                                },
                            }),
                        children: (e) =>
                            rP.map((n, l) =>
                                (0, a.jsx)(
                                    rL,
                                    {
                                        icon: n,
                                        label: E.intl.string(rR[l]),
                                        pressed: "eraser" === o && d === l,
                                        onClick: () => {
                                            (lo(t, (e) => ({ ...e, eraserSize: l, tool: "eraser" })), nZ(t), e());
                                        },
                                    },
                                    l,
                                ),
                            ),
                    }),
                    (0, a.jsx)(rD, {
                        label: v,
                        direction: "row",
                        trigger: (e) => (0, a.jsx)(r$, { icon: f.icon, label: v, onClick: e }),
                        children: (e) =>
                            rC.map((n) =>
                                (0, a.jsx)(
                                    rL,
                                    {
                                        icon: n.icon,
                                        label: n.label(),
                                        pressed: n.id === f.id,
                                        onClick: () => {
                                            var l;
                                            ((l = n.id),
                                                lo(t, (e) => (e.colorId === l ? e : { ...e, colorId: l })),
                                                e());
                                        },
                                    },
                                    n.id,
                                ),
                            ),
                    }),
                    (0, a.jsx)("div", { className: lf.Gz, role: "separator" }),
                    (0, a.jsx)(r$, {
                        icon: rv.e,
                        label: E.intl.string((0, eb.isMac)() ? S.default["j/XmBQ"] : S.default.AeHDE6),
                        disabled: 0 === m.past.length,
                        onClick: r,
                    }),
                    (0, a.jsx)(r$, {
                        icon: rj.U,
                        label: E.intl.string((0, eb.isMac)() ? S.default.C7jhpn : S.default.pp16iB),
                        disabled: 0 === m.future.length,
                        onClick: i,
                    }),
                    (0, a.jsx)(r$, {
                        icon: rb.TrashIcon,
                        label: E.intl.string(S.default.wo5a0i),
                        disabled: 0 === m.present.length,
                        onClick: s,
                    }),
                    (0, a.jsx)("div", { className: lf.Gz, role: "separator" }),
                    (0, a.jsx)(r$, { icon: ry.XLargeIcon, label: E.intl.string(S.default.tuQ5f3), onClick: l }),
                ],
            }),
        ],
    });
}
let rO = w.A.unsafe_rawColors.BLACK.resolve({ saturation: 1 }).hex();
function rF(e, t, n) {
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
                    (e.strokeStyle = rO),
                    e.strokeText(n.text, l(n.at.x), r(n.at.y)),
                    e.fillText(n.text, l(n.at.x), r(n.at.y)));
            }
        }
    e.globalCompositeOperation = "source-over";
}
function rq(e) {
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
async function rU(e, t) {
    let n = await createImageBitmap(e);
    try {
        let e = { width: n.width, height: n.height },
            l = rq(e),
            r = rq(e);
        if (null == l || null == r) return null;
        return (rF(r.ctx, t, e), l.ctx.drawImage(n, 0, 0), l.ctx.drawImage(r.canvas, 0, 0), await l.toBlob());
    } finally {
        n.close();
    }
}
let rG = new Map(),
    rB = new Map(),
    rK = (0, t_.D)(() => ({ byMessageKey: {} }));
function rH(e, t) {
    let { [e]: n, ...l } = rK.getState().byMessageKey;
    rK.setState({ byMessageKey: null == t ? l : { ...l, [e]: t } });
}
function rV(e, t) {
    null == t ? rG.delete(e) : rG.set(e, t);
}
function rW(e) {
    return rG.get(e)?.() ?? Promise.resolve(null);
}
let rX = { dx: 0, dy: 0 },
    rJ = { v: "move", p: "pick", t: "text", m: "marker", o: "circle", r: "square", e: "eraser" },
    rZ = 1;
function rY(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r } = e,
        s = null != n && n === l ? t : null,
        o = lm(s),
        { active: u } = n2(s),
        c = (0, tt.useHasAnyModalOpen)();
    i.useEffect(() => {
        if (null != s) return () => lu(s);
    }, [s]);
    let d = o?.tool === "pick";
    return (i.useEffect(() => {
        null != s && d && !u && nJ(s);
    }, [s, d, u]),
    null == s || null == o || c)
        ? null
        : (0, a.jsx)(rQ, { projectId: s, state: o, resolveIframe: r });
}
function rQ(e) {
    let { projectId: t, state: n, resolveIframe: l } = e,
        r = rh(l),
        [s, o] = i.useState(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(0),
        [f, h] = i.useState(null),
        [p, g] = i.useState(rX),
        x = i.useRef(null),
        v = i.useRef(null),
        j = i.useRef(null),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        w = i.useRef(null),
        N = i.useRef(0),
        { tool: C, history: A } = n,
        I = rA(n.colorId),
        M = "pick" !== C,
        _ = "marker" === n.tool ? ll[n.markerSize] : "eraser" === n.tool ? lr[n.eraserSize] : null,
        P = "move" === C ? (A.present.find((e) => e.id === f) ?? null) : null,
        R = null != r;
    (i.useLayoutEffect(() => {
        m(v.current?.offsetWidth ?? 0);
    }, [R]),
        i.useLayoutEffect(() => {
            y.current = s;
        }, [s]));
    let T = i.useCallback(async () => {
        let e = l();
        if (null == e) return null;
        let t = await (0, lH.wn)(e);
        if (null != t) return t;
        function n() {
            c(!1);
        }
        (0, rs.flushSync)(() => c(!0));
        try {
            await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e())));
            let t = new Promise((e) => window.setTimeout(() => e(null), 5e3));
            return await Promise.race([(0, lH.fs)(e, n), t]);
        } finally {
            n();
        }
    }, [l]);
    i.useEffect(() => (rV(t, T), () => rV(t, null)), [t, T]);
    let L = i.useCallback(
        (e) => {
            ((w.current = null == e || null == r ? null : { x: e.clientX - r.left, y: e.clientY - r.top }),
                0 === N.current &&
                    (N.current = requestAnimationFrame(() => {
                        N.current = 0;
                        let e = k.current,
                            t = w.current;
                        null != e &&
                            (e.toggleAttribute("data-visible", null != t),
                            null != t && (e.style.transform = `translate(${t.x}px, ${t.y}px)`));
                    })));
        },
        [r],
    );
    i.useEffect(() => () => cancelAnimationFrame(N.current), []);
    let $ = i.useCallback(() => {
        let e = x.current;
        if (null == e || null == r) return;
        let t = window.devicePixelRatio,
            n = Math.round(r.width * t),
            l = Math.round(r.height * t);
        (e.width !== n && (e.width = n), e.height !== l && (e.height = l));
        let a = e.getContext("2d");
        if (null == a) return;
        (a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, n, l), a.setTransform(t, 0, 0, t, 0, 0));
        let i = b.current,
            s = null == i ? A.present : A.present.map((e) => (e.id === i.id ? n6(e, p.dx, p.dy) : e)),
            o = j.current;
        rF(a, null == o ? s : [...s, o], { width: r.width, height: r.height });
    }, [r, A.present, p]);
    i.useLayoutEffect($, [$]);
    let D = i.useCallback(
            (e) =>
                null == r ? { x: 0, y: 0 } : { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height },
            [r],
        ),
        z = i.useCallback(() => {
            let e = y.current;
            if (null == e || null == r) return;
            y.current = null;
            let n = {
                id: `mark-${rZ++}`,
                kind: "text",
                color: I.value,
                size: 20 / r.width,
                at: e.at,
                text: e.value.trim(),
            };
            (n8(n, r) && ld(t, { type: "commit", shape: n }), o(null));
        }, [t, I, r]),
        O = i.useCallback(() => {
            ((y.current = null), o(null));
        }, []),
        F = i.useCallback(
            (e) => {
                if (0 !== e.button || null == r) return;
                if (null != y.current) return void z();
                let t = D(e);
                switch (C) {
                    case "pick":
                        return;
                    case "move": {
                        let n = { x: t.x * r.width, y: t.y * r.height },
                            l = null == P ? null : lt(P, r),
                            a =
                                null != l && n.x >= l.x && n.x <= l.x + l.width && n.y >= l.y && n.y <= l.y + l.height
                                    ? P
                                    : (function (e, t, n) {
                                          for (let l = e.length - 1; l >= 0; l--)
                                              if (
                                                  (function (e, t, n) {
                                                      let l = le(t, n);
                                                      switch (e.kind) {
                                                          case "erase":
                                                              return !1;
                                                          case "marker": {
                                                              let t = 6 + (e.width * n.width) / 2,
                                                                  r = e.points.map((e) => le(e, n));
                                                              if (1 === r.length)
                                                                  return Math.hypot(l.x - r[0].x, l.y - r[0].y) <= t;
                                                              for (let e = 1; e < r.length; e++)
                                                                  if (n9(l, r[e - 1], r[e]) <= t) return !0;
                                                              return !1;
                                                          }
                                                          case "square": {
                                                              let t = le(e.from, n),
                                                                  r = le(e.to, n),
                                                                  a = 6 + (e.width * n.width) / 2,
                                                                  i = [t, { x: r.x, y: t.y }, r, { x: t.x, y: r.y }];
                                                              return i.some((e, t) => n9(l, e, i[(t + 1) % 4]) <= a);
                                                          }
                                                          case "circle": {
                                                              let t = le(e.from, n),
                                                                  r = le(e.to, n),
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
                                                              let t = lt(e, n);
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
                                      })(A.present, t, r);
                        if ((h(a?.id ?? null), null == a)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            e.currentTarget.toggleAttribute("data-dragging", !0),
                            (b.current = { id: a.id, origin: t }));
                        return;
                    }
                    case "text":
                        o({ at: t, value: "" });
                        return;
                    case "eraser":
                        if (!n7(A.present)) return;
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rZ++}`,
                                kind: "erase",
                                width: lr[n.eraserSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "marker":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rZ++}`,
                                kind: "marker",
                                color: I.value,
                                width: ll[n.markerSize] / r.width,
                                points: [t],
                            }));
                        break;
                    case "circle":
                    case "square":
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            (j.current = {
                                id: `mark-${rZ++}`,
                                kind: C,
                                color: I.value,
                                width: 4 / r.width,
                                from: t,
                                to: t,
                            }));
                }
                $();
            },
            [r, C, I, P, A.present, n.markerSize, n.eraserSize, D, z, $],
        ),
        q = i.useCallback(
            (e) => {
                L(e);
                let t = D(e),
                    n = b.current;
                if (null != n) return void g({ dx: t.x - n.origin.x, dy: t.y - n.origin.y });
                let l = j.current;
                null != l &&
                    ("marker" === l.kind || "erase" === l.kind
                        ? (j.current = { ...l, points: [...l.points, t] })
                        : ("circle" === l.kind || "square" === l.kind) && (j.current = { ...l, to: t }),
                    $());
            },
            [D, L, $],
        ),
        U = i.useCallback(() => {
            x.current?.removeAttribute("data-dragging");
            let e = b.current;
            if (null != e) {
                ((b.current = null), g(rX), ld(t, { type: "move", id: e.id, dx: p.dx, dy: p.dy }));
                return;
            }
            let n = j.current;
            ((j.current = null), null != n && null != r && n8(n, r) ? ld(t, { type: "commit", shape: n }) : $());
        }, [t, r, p, $]),
        G = i.useCallback(() => lu(t), [t]),
        B = i.useCallback(() => ld(t, { type: "undo" }), [t]),
        K = i.useCallback(() => ld(t, { type: "redo" }), [t]),
        H = i.useCallback(() => ld(t, { type: "clear" }), [t]),
        V = i.useRef({ tool: C, selected: P, exit: G, undo: B, redo: K });
    if (
        (i.useLayoutEffect(() => {
            V.current = { tool: C, selected: P, exit: G, undo: B, redo: K };
        }),
        i.useEffect(() => {
            function e(e) {
                if (
                    e.defaultPrevented ||
                    (0, ei.Cw)((0, ei.vq)(e.target, HTMLElement) ? e.target : null) ||
                    null != y.current
                )
                    return;
                let { tool: n, selected: l, exit: r, undo: a, redo: i } = V.current,
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
                    (e.preventDefault(), ld(t, { type: "remove", id: l.id }), h(null));
                    return;
                }
                if (e.shiftKey) return;
                let o = rJ[s];
                null != o && (e.preventDefault(), lc(t, o));
            }
            return (window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e));
        }, [t]),
        i.useEffect(() => {
            if (M) return (ro.A.disable(), () => ro.A.enable());
        }, [M]),
        null == r)
    )
        return null;
    let W = Math.max(8, r.left - d - 8),
        X = null == P ? null : lt(null == b.current ? P : n6(P, p.dx, p.dy), r);
    return (0, rs.createPortal)(
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)("div", {
                    className: lf.qe,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "aria-hidden": !0,
                }),
                (0, a.jsxs)("div", {
                    className: lf.Pw,
                    style: { left: r.left, top: r.top, width: r.width, height: r.height },
                    "data-testid": "conjure-edit-ink",
                    children: [
                        (0, a.jsx)("canvas", {
                            ref: x,
                            className: lf.Ji,
                            "data-tool": C,
                            "data-interactive": M && !u ? "" : void 0,
                            "aria-label": E.intl.string(S.default["qlgN+X"]),
                            onMouseDown: (e) => e.preventDefault(),
                            onPointerDown: F,
                            onPointerEnter: L,
                            onPointerLeave: () => L(null),
                            onPointerMove: q,
                            onPointerUp: U,
                            onPointerCancel: U,
                        }),
                        null == _ || u
                            ? null
                            : (0, a.jsx)("div", {
                                  ref: k,
                                  className: lf.V$,
                                  "data-tool": C,
                                  "data-color": I.id,
                                  style: { width: _, height: _ },
                                  "aria-hidden": !0,
                              }),
                        null == X
                            ? null
                            : (0, a.jsxs)("div", {
                                  className: lf.r1,
                                  style: { left: X.x, top: X.y, width: X.width, height: X.height },
                                  "aria-hidden": !0,
                                  children: [
                                      (0, a.jsx)("span", { className: lf.p$, "data-corner": "nw" }),
                                      (0, a.jsx)("span", { className: lf.p$, "data-corner": "ne" }),
                                      (0, a.jsx)("span", { className: lf.p$, "data-corner": "sw" }),
                                      (0, a.jsx)("span", { className: lf.p$, "data-corner": "se" }),
                                  ],
                              }),
                    ],
                }),
                null == s
                    ? null
                    : (0, a.jsx)(rd, {
                          projectId: t,
                          anchor: "point",
                          at: { x: r.left + s.at.x * r.width, y: r.top + s.at.y * r.height },
                          bounds: r,
                          kind: "",
                          placeholder: E.intl.string(S.default["8gX1lw"]),
                          label: E.intl.string(S.default["5W7SSZ"]),
                          allowAttachments: !1,
                          value: s.value,
                          onChange: (e) => o((t) => (null == t ? null : { ...t, value: e })),
                          onSubmit: z,
                          onUploadFile: (e) => (0, ev.vX)(t, e),
                          onDismiss: O,
                          canSubmit: "" !== s.value.trim(),
                          closing: !1,
                      }),
                (0, a.jsx)("div", {
                    ref: v,
                    className: lf.ej,
                    style: { left: W, top: r.top },
                    "data-conjure-edit-rail": "",
                    children: (0, a.jsx)(rz, { projectId: t, state: n, onExit: G, onUndo: B, onRedo: K, onClear: H }),
                }),
            ],
        }),
        document.body,
    );
}
var r0 = n(308081),
    r1 = n(689175),
    r2 = n(683071),
    r3 = n(218394),
    r5 = n(115982),
    r4 = n(886540);
function r6(e) {
    return !(0, r4.BL)(e) && !0 !== e.stopRequested;
}
var r7 = n(104317),
    r8 = n(643278),
    r9 = n(566424),
    ae = n(683063),
    at = n(140735),
    an = n(138212);
function al(e) {
    let { title: t, trailing: n, children: l, className: r, headerClassName: i, ...s } = e;
    return (0, a.jsxs)("section", {
        className: h()(an.Nr, r),
        ...s,
        children: [
            (0, a.jsxs)("header", {
                className: h()(an.wx, null != n && an.o5, i),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var ar = n(148590);
function aa(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-subtle", tag: "span", children: t });
}
function ai(e) {
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
        [f, p] = i.useState(!l),
        [g, x] = i.useState(l);
    g !== l && (x(l), p(!l));
    let v = i.useCallback(() => p((e) => !e), []),
        j = f ? nt.a : t0._,
        b = null != n || l;
    return (0, a.jsxs)(al, {
        ...d,
        title: t,
        trailing: b
            ? (0, a.jsxs)("span", {
                  className: ar.ZY,
                  children: [
                      n,
                      l
                          ? (0, a.jsx)(C.D, {
                                className: ar.L$,
                                onClick: v,
                                "aria-expanded": f,
                                "aria-controls": m,
                                "aria-label": f ? s : r,
                                children: (0, a.jsx)(j, { size: "xs", color: "currentColor" }),
                            })
                          : null,
                  ],
              })
            : void 0,
        headerClassName: f ? void 0 : ar.RG,
        "data-superseded": l ? "true" : void 0,
        children: [u, (0, a.jsx)("div", { id: m, className: h()(ar.rf, o), hidden: !f, children: c })],
    });
}
var as = n(883646);
let ao = [];
function au(e) {
    let { status: t } = e;
    return (0, a.jsxs)("span", {
        className: h()(as.xL, {
            [as.Vb]: "in_progress" === t,
            [as.cT]: "completed" === t,
            [as.GZ]: "unfinished" === t,
        }),
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return E.intl.string(S.default.KvBdun);
                case "in_progress":
                    return E.intl.string(S.default["m5G9+S"]);
                case "unfinished":
                    return E.intl.string(S.default.lRpwhD);
                default:
                    return E.intl.string(S.default.sPGeWi);
            }
        })(t),
        children: [
            (0, a.jsx)(tE.y, {
                type: tE.y.Type.SPINNING_CIRCLE_SIMPLE,
                className: as.Qd,
                itemClassName: as.xB,
                "aria-hidden": !0,
            }),
            (0, a.jsx)("svg", {
                className: as.L5,
                viewBox: "0 0 10.1668 10.1668",
                "aria-hidden": !0,
                focusable: "false",
                children: (0, a.jsx)("path", { className: as.Gr, d: "M1 5.52L3.92 9.17L9.17 1" }),
            }),
        ],
    });
}
function ac(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : ao), [n, t]),
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
        className: as.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            p.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    ae.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: as.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            g > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: as.qA,
                      children: `+${g}`,
                  })
                : null,
        ],
    });
}
function ad(e) {
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
            ((t = (r ?? ao).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
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
                    })(r ?? ao),
                [t],
            ));
    return (0, a.jsxs)("ul", {
        className: as.p_,
        children: [
            n.map((e) => {
                var t;
                let n = ((t = e.status), "completed" === t || s ? t : "unfinished");
                return (0, a.jsxs)(
                    "li",
                    {
                        className: h()(as.AS, { [as.J1]: "completed" === n }),
                        "data-arriving": o.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(au, { status: n }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "in_progress" === n || "pending" === n ? "text-default" : "text-subtle",
                                tag: "span",
                                className: as.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", {
                                    className: as.Qq,
                                    children:
                                        "in_progress" === n && null != e.activeForm && "" !== e.activeForm
                                            ? e.activeForm
                                            : e.text,
                                }),
                            }),
                            (0, a.jsx)(ac, { agents: u.get(e.id) ?? ao, active: "completed" !== n }),
                        ],
                    },
                    e.id,
                );
            }),
            null != l
                ? (0, a.jsxs)("li", {
                      className: as.AS,
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(au, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: as.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: as.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function am(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: r = !0, live: i = !0, superseded: s = !1 } = e,
        { completed: o, total: u } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    if (0 === u) return null;
    let c = E.intl.formatToPlainString(S.default["P/I+JW"], { completed: o, total: u }),
        d = E.intl.formatToPlainString(S.default["7tzwKB"], { completed: o, total: u });
    return (0, a.jsx)(ai, {
        title: E.intl.string(S.default.RtzECX),
        meta: (0, a.jsx)(aa, { children: c }),
        superseded: s,
        showLabel: E.intl.string(S.default.RKyN9q),
        hideLabel: E.intl.string(S.default.xydHoj),
        className: as.Nr,
        bodyClassName: as.rf,
        beforeBody: r && !s ? (0, a.jsx)(at.A, { role: "status", "aria-live": "polite", children: d }) : null,
        "data-conjure-todo-card": !0,
        children: (0, a.jsx)(ad, { todos: t, provisional: n, agents: l, live: i }),
    });
}
var af = n(308665),
    ah = n(59678),
    ap = n(903847);
function ag(e) {
    let { line: t, placement: n, todos: l, todosLive: r = !0, provisionalTodo: s, agents: o, onJumpToActivity: u } = e,
        c = null != n,
        [d, m] = i.useState(n ?? "top"),
        [f, p] = i.useState(c),
        [g, x] = i.useState(!1),
        [v, j] = i.useState(!1),
        [b, y] = i.useState(c);
    (b !== c && (y(c), null != n ? (m(n), p(!0)) : (x(!1), j(!1))),
        i.useEffect(() => {
            if (c || !f) return;
            let e = setTimeout(() => p(!1), 150);
            return () => clearTimeout(e);
        }, [c, f]),
        i.useEffect(() => {
            if (!f || !c) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [f, c]));
    let [k, w] = i.useState(!1),
        [A, I] = i.useState(!1),
        [M, _] = i.useState(v);
    (M !== v && (_(v), v ? w(!0) : I(!1)),
        i.useEffect(() => {
            if (v || !k) return;
            let e = setTimeout(() => w(!1), 150);
            return () => clearTimeout(e);
        }, [v, k]),
        i.useEffect(() => {
            if (!k || !v) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => I(!0));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [k, v]));
    let P = null != l && l.length > 0,
        R = i.useCallback(() => j((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: ap.qd,
              "data-placement": d,
              "data-conjure-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: h()(ap.vK, { [ap.ho]: g && c, [ap.ET]: !c }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: h()(ap.Rk, ah.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(r9.A, {
                                        glyph: (0, a.jsx)(af.Ay, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(C.D, {
                                    className: ap.pZ,
                                    onClick: u,
                                    "aria-label": E.intl.string(S.default.hEK6qu),
                                    children: (0, a.jsx)("ol", {
                                        className: h()(ap.Rk, ah.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(r9.A, {
                                            glyph: (0, a.jsx)(af.Ay, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          P
                              ? (0, a.jsx)(N.m, {
                                    text: E.intl.string(S.default.RtzECX),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(C.D, {
                                        className: ap.BO,
                                        onClick: R,
                                        "aria-expanded": v,
                                        "aria-label": E.intl.string(S.default.RtzECX),
                                        children: (0, a.jsx)(r8.ClipboardListIcon, {
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
                  k && P
                      ? (0, a.jsx)("div", {
                            className: h()(ap.vB, { [ap.pg]: v && A, [ap.ui]: !v }),
                            children: (0, a.jsx)(am, {
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
var ax = n(195880);
function av(e) {
    let t = (0, V.qh)("ConjureClarificationProjectPicker");
    return i.useMemo(
        () =>
            t
                .filter((t) => t.projectId !== e)
                .map((e) => ({ projectId: e.projectId, name: e.name, serverName: e.guildName })),
        [t, e],
    );
}
var aj = n(736553),
    ab = n(382541);
async function ay(e, t, n) {
    let l,
        { ticket: r, baseUrl: a } = await (0, ab.dv)(e),
        i = new aj.u();
    try {
        await new Promise((e, s) => {
            ((l = setTimeout(() => s(Error("Timed out sending the message")), 2e4)),
                i.open({
                    url: a,
                    ticket: r,
                    onEvent: (l) => {
                        if ("hello" === l.type)
                            try {
                                i.sendUserMessage(t, n);
                            } catch (e) {
                                s(e);
                            }
                        else
                            "user_message" === l.type && l.nonce === n
                                ? e()
                                : "step" === l.type &&
                                  "turn_result" === l.kind &&
                                  "error" === l.result &&
                                  null == l.turn_id &&
                                  s(Error(l.summary ?? "The message was refused"));
                    },
                    onClose: () => s(Error("Connection closed before the message was stored")),
                }));
        });
    } finally {
        (clearTimeout(l), i.close());
    }
}
var ak = n(890497),
    aw = n(103557),
    aN = n(29073),
    aC = n(590077);
function aA(e) {
    let { projectId: t, request: n, canSend: l, onDismiss: r, onSent: s } = e,
        o = (function (e, t, n, l, r) {
            let a = av(e),
                [s, o] = i.useState(null),
                [u, c] = i.useState([]),
                [d, m] = i.useState(t.prompt),
                [f, h] = i.useState(!1),
                [p, g] = i.useState(!1),
                x = i.useRef(new Map()),
                v = i.useRef(!1),
                j = i.useRef(!1),
                b = i.useMemo(() => a.filter((e) => !u.some((t) => t.target.projectId === e.projectId)), [a, u]),
                y = i.useMemo(
                    () => (null != t.project_ids ? t.project_ids : null != t.project_id ? [t.project_id] : []),
                    [t],
                ),
                k = i.useMemo(() => {
                    let e = s ?? y;
                    return b.filter((t) => e.includes(t.projectId)).map((e) => e.projectId);
                }, [s, y, b]),
                w = i.useMemo(() => b.filter((e) => k.includes(e.projectId)), [b, k]),
                N = i.useCallback((e) => {
                    o(e.slice(0, 10));
                }, []),
                C = d.trim(),
                A = n && !f && (w.length > 0 ? "" !== C : u.length > 0),
                I = i.useCallback(
                    (t) => {
                        j.current ||
                            ((j.current = !0),
                            h(!0),
                            null != r
                                ? r(t.map((e) => e.target))
                                : tK(
                                      e,
                                      (function (e) {
                                          let t = new Map();
                                          for (let { target: n, prompt: l } of e) t.set(l, [...(t.get(l) ?? []), n]);
                                          return Array.from(t, (e) => {
                                              let [t, n] = e,
                                                  l = n
                                                      .map((e) =>
                                                          E.intl.formatToPlainString(S.default.tcDZw9, {
                                                              name: e.name,
                                                              projectId: e.projectId,
                                                          }),
                                                      )
                                                      .join(", "),
                                                  r = E.intl.formatToPlainString(S.default.jZlNst, { targets: l });
                                              return `${r}

${t}`;
                                          }).join("\n\n");
                                      })(t),
                                  ));
                    },
                    [r, e],
                ),
                M = i.useCallback(() => {
                    let t, n;
                    if (!A) return;
                    if (0 === w.length) return void I(u);
                    (h(!0), g(!1));
                    let l =
                        ((t = eO.Ay.getProject(e)?.name ?? e),
                        (n = E.intl.formatToPlainString(S.default.ScoZLp, { name: t, projectId: e })),
                        `${C}

${n}`);
                    Promise.allSettled(
                        w.map((e) => {
                            let t = x.current.get(e.projectId);
                            return (
                                t?.content !== l &&
                                    ((t = { content: l, nonce: (0, ax.m)() }), x.current.set(e.projectId, t)),
                                ay(e.projectId, l, t.nonce)
                            );
                        }),
                    ).then((e) => {
                        let t = w.filter((t, n) => "fulfilled" === e[n].status),
                            n = [...u, ...t.map((e) => ({ target: e, prompt: C }))];
                        if (t.length === w.length || v.current) {
                            n.length > 0 && I(n);
                            return;
                        }
                        (c(n), o(w.filter((e) => !t.includes(e)).map((e) => e.projectId)), h(!1), g(!0));
                    });
                }, [A, I, u, e, w, C]),
                _ = i.useCallback(() => {
                    ((v.current = !0), u.length > 0 && !f && I(u), l());
                }, [I, u, l, f]);
            return {
                projects: b,
                targetIds: k,
                setTargetIds: N,
                prompt: d,
                setPrompt: m,
                sending: f,
                failed: p,
                canSubmit: A,
                submit: M,
                dismiss: _,
            };
        })(t, n, l, r, s),
        u = i.useMemo(
            () =>
                o.projects.map((e) => ({
                    id: e.projectId,
                    label: e.name,
                    value: e.projectId,
                    ...(null == e.serverName ? {} : { description: e.serverName }),
                })),
            [o.projects],
        ),
        c = `${n.id}-heading`;
    return (0, a.jsxs)("section", {
        className: h()(aN.nd, aN.jx),
        "aria-labelledby": c,
        "data-conjure-app-build-request": n.id,
        children: [
            (0, a.jsxs)("div", {
                className: aN.wx,
                children: [
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        id: c,
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        className: aN.TK,
                        children: n.summary,
                    }),
                    (0, a.jsx)(eX.K, {
                        icon: em.P,
                        size: "sm",
                        variant: "icon-only",
                        onClick: o.dismiss,
                        "aria-label": E.intl.string(S.default.KQUuAZ),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: aC.r,
                children: [
                    0 === u.length
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.TbbzW5),
                          })
                        : (0, a.jsx)(ak.Z, {
                              label: E.intl.string(S.default["29gr8j"]),
                              placeholder: E.intl.string(S.default.twlOb6),
                              options: u,
                              selectionMode: "multiple",
                              wrapTags: !0,
                              value: [...o.targetIds],
                              onSelectionChange: o.setTargetIds,
                              disabled: o.sending,
                              maxOptionsVisible: 4,
                              fullWidth: !0,
                          }),
                    (0, a.jsx)(aw.f, {
                        label: E.intl.string(S.default.XZNsDA),
                        value: o.prompt,
                        onChange: o.setPrompt,
                        maxLength: 4e3,
                        disabled: o.sending,
                        autosize: !0,
                        rows: 3,
                        maxRows: 8,
                        error: o.failed ? E.intl.string(S.default.kMZz8G) : null,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: aN.qr,
                children: (0, a.jsx)("div", {
                    className: aN.zt,
                    children: (0, a.jsx)(Z.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default.gG4j6o),
                        disabled: !o.canSubmit,
                        loading: o.sending,
                        onClick: o.submit,
                    }),
                }),
            }),
        ],
    });
}
var aS = n(658675),
    aE = n(22231),
    aI = n(123292),
    aM = n(734057),
    a_ = n(287809);
function aP(e) {
    return 0 === e.options.length && null == e.input;
}
let aR = {
        [q.rbe.GUILD_TEXT]: "text",
        [q.rbe.GUILD_VOICE]: "voice",
        [q.rbe.GUILD_ANNOUNCEMENT]: "announcement",
        [q.rbe.GUILD_STAGE_VOICE]: "stage",
        [q.rbe.GUILD_FORUM]: "forum",
        [q.rbe.GUILD_MEDIA]: "media",
    },
    aT = { channel: "#", role: "@", user: "@", project: "" },
    aL = {
        channel: [S.default["9+dfPT"], S.default.pGSJqE],
        role: [S.default["2VkCoD"], S.default.c8YlX8],
        user: [S.default.GZIAxl, S.default["4bptbQ"]],
        project: [S.default.twlOb6, S.default.twlOb6],
    };
function a$(e, t) {
    return E.intl.string(aL[e][+!!t]);
}
var aD = n(155078);
function az(e) {
    return e.options.some((e) => null != e.image);
}
let aO = [];
async function aF(e, t) {
    await (0, ew.h)(e, "/agent/linked-apps", { method: "PUT", json: { caller_project_id: t } });
}
function aq(e, t) {
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
var aU = n(300344),
    aG = n(614733),
    aB = n(904363),
    aK = n(950902),
    aH = n(384017);
function aV(e) {
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
                        let l = null == (n = aM.A.getChannel(t)?.type) ? void 0 : aR[n];
                        return { kind: e, ...(null == l ? {} : { channel_type: l }) };
                    }
                    if ("user" === e) {
                        let n = a_.default.getUser(t)?.username;
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
        className: aH.YX,
        "data-conjure-clarification-picker": n.input,
        children: f
            ? (0, a.jsx)(ak.Z, {
                  ...g,
                  selectionMode: "multiple",
                  wrapTags: !0,
                  value: h,
                  onSelectionChange: (e) => i(p(e), t),
              })
            : (0, a.jsx)(ak.Z, {
                  ...g,
                  selectionMode: "single",
                  clearable: !0,
                  value: h[0] ?? null,
                  onSelectionChange: (e) => i(null == e ? [] : p([e]), t),
              }),
    });
}
function aW(e) {
    let { guildId: t, fallback: n, ...l } = e,
        r = (0, aU.A)(t, l.question.channel_filter);
    return null == r
        ? n
        : (0, a.jsx)(aV, { ...l, guildId: t, options: r, placeholder: a$("channel", !0 === l.question.multi_select) });
}
function aX(e) {
    let { guildId: t, ...n } = e,
        l = (0, aB.A)(t);
    return (0, a.jsx)(aV, { ...n, guildId: t, options: l, placeholder: a$("role", !0 === n.question.multi_select) });
}
function aJ(e) {
    let { guildId: t, ...n } = e,
        { options: l, onQueryChange: r, matchSorterOptions: i } = (0, aG.A)(t);
    return (0, a.jsx)(aV, {
        ...n,
        guildId: t,
        options: l,
        onQueryChange: r,
        matchSorterOptions: i,
        placeholder: a$("user", !0 === n.question.multi_select),
    });
}
function aZ(e) {
    let { projectId: t, fallback: n, ...l } = e,
        r = av(t),
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
    return 0 === s.length ? n : (0, a.jsx)(aV, { ...l, options: s, placeholder: a$("project", !1) });
}
function aY(e) {
    let { projectId: t, fallback: n = null, ...l } = e,
        r = (0, aK.Tj)(t, !0);
    if ("project" === l.question.input) return (0, a.jsx)(aZ, { projectId: t, fallback: n, ...l }, l.question.id);
    if (null == r) return n;
    switch (l.question.input) {
        case "channel":
            return (0, a.jsx)(aW, { guildId: r, fallback: n, ...l }, l.question.id);
        case "role":
            return (0, a.jsx)(aX, { guildId: r, ...l }, l.question.id);
        case "user":
            return (0, a.jsx)(aJ, { guildId: r, ...l }, l.question.id);
        default:
            return n;
    }
}
var aQ = n(87221),
    a0 = n(26430),
    a1 = n(750943),
    a2 = n(95477),
    a3 = n(256905),
    a5 = n(490707),
    a4 = n(907702);
function a6(e) {
    let { projectId: t, attachmentId: n, alt: l, onMeasured: r } = e,
        { src: s, gone: o, handleError: u } = (0, a5._)(t, n),
        [c, d] = i.useState(null),
        m = null != s && c === s;
    return o
        ? (0, a.jsxs)("span", {
              className: h()(a4.Gt, a4.b6),
              children: [
                  (0, a.jsx)(aQ.D, { size: "md", color: "currentColor" }),
                  (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      children: E.intl.string(S.default.lhgD88),
                  }),
              ],
          })
        : (0, a.jsx)("span", {
              className: h()(a4.Gt, { [a4.iP]: !m }),
              children:
                  null != s
                      ? (0, a.jsx)("img", {
                            src: s,
                            alt: l,
                            className: a4.Sl,
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
function a7(e) {
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
            onMeasured: p,
            onRemove: g,
        } = e,
        x = E.intl.formatToPlainString(S.default.JGjZMs, { answer: r.label });
    return (0, a.jsxs)("div", {
        className: h()(a4.Vs, { [a4.Q9]: s, [a4.RX]: o }),
        "data-conjure-clarification-option": r.id,
        children: [
            (0, a.jsxs)(C.D, {
                className: a4.Up,
                "data-conjure-image-option-pick": !0,
                onClick: o ? void 0 : () => d(r),
                onKeyDown: (e) => {
                    if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                    let t = { ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 }[e.key];
                    null != t && (e.preventDefault(), f(r, t));
                },
                role: i ? "checkbox" : "radio",
                "aria-checked": s,
                "aria-label": E.intl.formatToPlainString(S.default.AQbxhf, { answer: r.label }),
                "aria-disabled": o,
                tabIndex: u && c ? 0 : -1,
                children: [
                    (0, a.jsxs)("span", {
                        className: a4.$_,
                        children: [
                            null != r.image
                                ? (0, a.jsx)(a6, {
                                      projectId: l,
                                      attachmentId: r.image.attachment_id,
                                      alt: r.label,
                                      onMeasured: p,
                                  })
                                : (0, a.jsx)("span", { className: a4.Gt }),
                            (0, a.jsx)("span", {
                                className: a4.q3,
                                "aria-hidden": !0,
                                children: i
                                    ? (0, a.jsx)(aS.P, { checked: s, disabled: o })
                                    : (0, a.jsx)(rl.T, { checked: s, disabled: o }),
                            }),
                        ],
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        className: a4.pG,
                        children:
                            "" !== (n = null != (t = r.image?.page_url ?? r.image?.url) ? (0, aD.E)(t) : "")
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
                      className: a4.B4,
                      children: (0, a.jsx)(N.m, {
                          text: E.intl.string(S.default.HQEXJM),
                          children: (0, a.jsx)(eX.K, {
                              icon: rb.TrashIcon,
                              size: "sm",
                              variant: "overlay-secondary",
                              onClick: g,
                              disabled: o,
                              "aria-label": E.intl.string(S.default.HQEXJM),
                              tabIndex: u ? 0 : -1,
                          }),
                      }),
                  })
                : null != r.image
                  ? (0, a.jsx)("span", {
                        className: a4.B4,
                        children: (0, a.jsx)(N.m, {
                            text: E.intl.string(S.default["4/eeDD"]),
                            children: (0, a.jsx)(eX.K, {
                                icon: a0._,
                                size: "sm",
                                variant: "overlay-secondary",
                                onClick: () => m(r),
                                "aria-label": x,
                                tabIndex: u && c ? 0 : -1,
                            }),
                        }),
                    })
                  : null,
        ],
    });
}
function a8(e) {
    var t;
    let { projectId: n, question: l, selectedIds: r, disabled: s, reachable: o = !0, onPick: u, own: c } = e,
        d = !0 === l.multi_select,
        { options: m } = l,
        f = m.length > 4 ? "gallery" : "row",
        p = i.useRef(null),
        g = i.useRef(new Map()),
        [x, v] = i.useState(null),
        j = null != x && m.some((e) => e.id === x) ? x : (m.find((e) => r.includes(e.id)) ?? m[0])?.id,
        b = i.useCallback(
            (e) => {
                let t = m.flatMap((e) => (null != e.image ? [{ ...e, image: e.image }] : [])),
                    l = t.findIndex((t) => t.id === e.id);
                l < 0 ||
                    Promise.all(t.map((e) => (0, ev.PK)(n, e.image.attachment_id))).then(
                        (e) => {
                            (0, a3.R)({
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
                (v(l.id), p.current?.querySelectorAll("[data-conjure-image-option-pick]")[n]?.focus(), d || s || u(l));
            },
            [s, d, u, m],
        ),
        k =
            null == c.image
                ? null
                : ((t = c.image),
                  {
                      id: `own:${t.attachment.id}`,
                      label: E.intl.string(S.default.SUdqCQ),
                      image: { attachment_id: t.attachment.id },
                  });
    return (0, a.jsxs)("div", {
        className: a4.Nz,
        "data-conjure-image-options": !0,
        children: [
            (0, a.jsxs)("div", {
                ref: p,
                className: h()(a4.fF, "gallery" === f ? a4.nV : a4.nM, { [a4.m3]: d }),
                role: d ? "group" : "radiogroup",
                "aria-labelledby": `${l.id}-label`,
                "data-layout": f,
                "data-count": m.length,
                children: [
                    m.map((e) =>
                        (0, a.jsx)(
                            a7,
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
                    null != k
                        ? (0, a.jsx)(
                              a7,
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
            (0, a.jsx)(a9, {
                projectId: n,
                own: c,
                disabled: s,
                reachable: o,
                uploadText: E.intl.string(/\bicons?\b/i.test(l.question) ? S.default.qU4WN6 : S.default.cbMDDB),
            }),
        ],
    });
}
function a9(e) {
    let { projectId: t, own: n, disabled: l, reachable: r, uploadText: s } = e,
        o = i.useRef(null),
        [u, c] = i.useState(!1),
        [d, m] = i.useState(""),
        f = r ? 0 : -1,
        h = n.busy;
    function p() {
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
        className: a4.ZV,
        "data-conjure-own-image-actions": !0,
        children: [
            (0, a.jsxs)("div", {
                className: a4.QJ,
                children: [
                    (0, a.jsx)(Z.$, {
                        variant: "secondary",
                        size: "sm",
                        icon: a1.X,
                        text: s,
                        loading: "upload" === h,
                        disabled: l || "link" === h,
                        onClick: () => o.current?.click(),
                        tabIndex: f,
                        "data-conjure-own-image-upload": !0,
                    }),
                    u
                        ? null
                        : (0, a.jsx)(Z.$, {
                              variant: "secondary",
                              size: "sm",
                              icon: eH.LinkIcon,
                              text: E.intl.string(S.default["1TgOO+"]),
                              disabled: l || "upload" === h,
                              onClick: () => c(!0),
                              tabIndex: f,
                              "data-conjure-own-image-link": !0,
                          }),
                    (0, a.jsx)("input", {
                        ref: o,
                        type: "file",
                        accept: "image/png,image/jpeg,image/gif,image/webp",
                        className: a4.Fg,
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
                                        (0, ex.Oq)(a.size, r)
                                            ? (0, ev.c9)(t, a, l, r)
                                            : Promise.resolve({ errorText: tU(r) })),
                                    ));
                        },
                    }),
                ],
            }),
            u
                ? (0, a.jsxs)("div", {
                      className: a4.vG,
                      children: [
                          (0, a.jsx)("div", {
                              className: a4.Hs,
                              children: (0, a.jsx)(a2.k, {
                                  label: E.intl.string(S.default.yoBuHE),
                                  hideLabel: !0,
                                  placeholder: E.intl.string(S.default.AVhvn8),
                                  value: d,
                                  onChange: (e) => m(e),
                                  onKeyDown: (e) => {
                                      "Enter" === e.key
                                          ? (e.preventDefault(), p())
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
                              className: a4.gd,
                              children: [
                                  (0, a.jsx)(Z.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(S.default.FbRbeM),
                                      loading: "link" === h,
                                      disabled: l || "" === d.trim(),
                                      onClick: p,
                                      "data-conjure-own-image-link-add": !0,
                                  }),
                                  (0, a.jsx)(aI.Q, {
                                      variant: "secondary",
                                      textVariant: "text-sm/medium",
                                      text: E.intl.string(S.default.eXZL4X),
                                      onClick: () => c(!1),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
            n.error?.source === "upload"
                ? (0, a.jsx)(v.E, {
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
function ie(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: s = !0, selected: o } = e,
        u = i.useId(),
        c = !0 === t.recommended,
        d = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(C.D, {
        className: h()(aH.uK, { [aH.ue]: l, [aH.h4]: !0 === o }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": E.intl.formatToPlainString(c ? S.default["2p6UFz"] : S.default.AQbxhf, { answer: t.label }),
        "aria-describedby": d ? u : void 0,
        "aria-disabled": l,
        role: null != o ? "checkbox" : void 0,
        "aria-checked": o,
        tabIndex: s ? 0 : -1,
        "data-conjure-clarification-option": t.id,
        "data-recommended": c ? "true" : void 0,
        children: [
            null != o
                ? (0, a.jsx)("span", { className: aH.dy, children: (0, a.jsx)(aS.P, { checked: o, disabled: l }) })
                : (0, a.jsx)("span", { className: aH.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: aH.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: aH.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: aH.ed,
                            children: t.label,
                        }),
                    }),
                    d
                        ? (0, a.jsx)(v.E, {
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
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: aH.rM,
                      children: E.intl.string(S.default.zku6r1),
                  })
                : null,
        ],
    });
}
function it(e) {
    let { projectId: t, question: n, selected: l, disabled: r, reachable: i = !0, onPick: s, own: o } = e,
        u = !0 === n.multi_select;
    return az(n)
        ? (0, a.jsx)(a8, { projectId: t, question: n, selectedIds: l, disabled: r, reachable: i, onPick: s, own: o })
        : (0, a.jsx)(a.Fragment, {
              children: n.options.map((e, t) =>
                  (0, a.jsx)(
                      ie,
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
let il = [],
    ir = [];
function ia(e) {
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
        className: h()(aH.Ge, aH.x1),
        "data-direction": i,
        "aria-hidden": !0,
        children: [
            d
                ? (0, a.jsx)(v.E, {
                      tag: "div",
                      variant: "text-xs/normal",
                      color: "text-muted",
                      className: aH.aK,
                      children: E.intl.string(S.default.tE8qbz),
                  })
                : null,
            (0, a.jsx)(it, {
                projectId: t,
                question: n,
                selected: r,
                disabled: s,
                onPick: () => void 0,
                reachable: !1,
                own: aq(o, u),
            }),
            az(n) || !1 === n.allow_custom
                ? null
                : (0, a.jsxs)("div", {
                      className: aH.Xy,
                      children: [
                          (0, a.jsx)("span", {
                              className: aH.Gy,
                              "aria-hidden": !0,
                              children: (0, a.jsx)(aE.PencilIcon, {
                                  size: "custom",
                                  width: 20,
                                  height: 20,
                                  color: "currentColor",
                              }),
                          }),
                          null == c ? null : (0, a.jsx)("span", { className: h()(aH.Pu, aH.es), children: c }),
                      ],
                  }),
        ],
    });
}
function ii(e) {
    var t;
    let { projectId: n, clarification: l, onSubmit: r, onDismiss: s } = e,
        [o, u] = i.useState({}),
        [c, d] = i.useState({}),
        [m, f] = i.useState({}),
        [p, g] = i.useState({}),
        [x, j] = i.useState({}),
        [b, y] = i.useState(!1),
        [k, w] = i.useState(0),
        [A, I] = i.useState(null),
        [M, _] = i.useState(null),
        [P, R] = i.useState(null),
        [T, L] = i.useState(!1),
        $ = i.useRef(null),
        [D, z] = i.useState(null),
        O = i.useRef(null),
        F = i.useRef(0),
        q = null == r,
        U = l.questions.length,
        G = Math.min(k, U - 1),
        B = l.questions[G],
        [K, H] = i.useState({ id: B.id, expanded: !1 }),
        V = K.id === B.id && K.expanded,
        [W, X] = i.useState(null),
        J = c[B.id] ?? "",
        Y = !0 === B.multi_select,
        Q = az(B),
        ee = Y ? (m[B.id] ?? il) : ((t = o[B.id]), t?.kind === "option" ? [t.optionId] : aO),
        et = (function (e, t, n) {
            let [l, r] = i.useState({}),
                [a, s] = i.useState({}),
                [o, u] = i.useState({}),
                c = E.intl.string(S.default.wTsP5l),
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
                        if (o) return aq(h, m(i));
                        function p(e) {
                            return s((t) => ({ ...t, [d]: e }));
                        }
                        function g(e) {
                            return { kind: "image", attachment: e.attachment, text: c };
                        }
                        let x = t[d];
                        function v(t) {
                            (r((n) => {
                                let l = n[d];
                                return (
                                    null != l && (0, ev.Vm)(e, l.attachment.id).catch(() => void 0), { ...n, [d]: t }
                                );
                            }),
                                p({ busy: null, error: null }),
                                f ? u((e) => ({ ...e, [d]: !0 })) : n((e) => (e[d] === x ? { ...e, [d]: g(t) } : e)));
                        }
                        return {
                            image: h,
                            selected: m(i),
                            busy: a[d]?.busy ?? null,
                            error: a[d]?.error ?? null,
                            onPick: () => {
                                null != h &&
                                    (f ? u((e) => ({ ...e, [d]: !0 !== e[d] })) : n((e) => ({ ...e, [d]: g(h) })));
                            },
                            onRemove: () => {
                                null != h &&
                                    ((0, ev.Vm)(e, h.attachment.id).catch(() => void 0),
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
                                                : v({ attachment: e });
                                        },
                                        () =>
                                            p({
                                                busy: null,
                                                error: { source: "upload", text: E.intl.string(S.default["kUw/b1"]) },
                                            }),
                                    ));
                            },
                            onLink: (t) => (
                                p({ busy: "link", error: null }),
                                (0, ev.gm)(e, t).then(
                                    (e) => (v({ attachment: e }), !0),
                                    (e) => (
                                        p({
                                            busy: null,
                                            error: {
                                                source: "link",
                                                text:
                                                    e instanceof Error && "" !== e.message
                                                        ? e.message
                                                        : E.intl.string(S.default.l79PMc),
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
        en = et.imageFor(B.id),
        el = et.selectedFor(B),
        { text: er, phase: ea } = (0, t1.Q)(B.question),
        es = er === B.question,
        eo = es && W?.id === B.id && W.truncated;
    i.useLayoutEffect(() => {
        if (null == D || V || !es) return;
        function e() {
            if (null == D) return;
            let e = D.scrollHeight > D.clientHeight + 1;
            X((t) => (t?.id === B.id && t.truncated === e ? t : { id: B.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return (t.observe(D), () => t.disconnect());
    }, [es, D, B.id, V]);
    let eu = E.intl.string(V ? E.t.iTcuma : E.t.dcl9MQ),
        ec = i.useCallback(
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
                            : Promise.allSettled(i.map((e) => aF(e, n))).then(t));
                }
            },
            [l, r, n],
        ),
        ed = i.useCallback(
            (e, t) => {
                F.current += 1;
                let n = F.current;
                (I({ direction: t, moves: n }),
                    _({ question: B, draft: J, selected: ee, ownImage: en, ownSelected: el, direction: t, moves: n }),
                    L(!0),
                    w(e));
            },
            [J, en, el, B, ee],
        ),
        ef = i.useCallback(() => {
            let e = $.current,
                t = O.current;
            null != e && null != t && R({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = $.current,
            t = O.current;
        if (null == e || null == t) return;
        ef();
        let n = new ResizeObserver(ef);
        return (n.observe(e), n.observe(t), () => n.disconnect());
    }, [ef]);
    let eh = A?.moves;
    i.useEffect(() => {
        if (null == eh) return;
        let e = setTimeout(() => _(null), 400),
            t = setTimeout(() => L(!1), 500);
        return () => {
            (clearTimeout(e), clearTimeout(t));
        };
    }, [eh]);
    let ep = i.useCallback(
            (e) => {
                if (q) return;
                let t = { ...o, [B.id]: e };
                u(t);
                let n =
                    G < l.questions.length - 1
                        ? G + 1
                        : (function (e, t, n) {
                              let { questions: l } = e;
                              for (let e = 1; e <= l.length; e++) {
                                  let r = (n + e) % l.length,
                                      a = t[l[r].id];
                                  if (null == a || "" === a.text.trim()) return r;
                              }
                              return null;
                          })(l, t, G);
                null == n ? ec(t) : ed(n, n < G ? "back" : "forward");
            },
            [o, l, q, G, B.id, ec, ed],
        ),
        eg = i.useCallback(() => {
            q || 0 === G || ed(G - 1, "back");
        }, [q, G, ed]),
        ex = G > 0 && !q,
        ej = i.useCallback(
            (e) => {
                d((e) => ({ ...e, [B.id]: "" }));
                let t = { kind: "option", optionId: e.id, text: e.label };
                Q ? q || u((e) => ({ ...e, [B.id]: t })) : ep(t);
            },
            [q, Q, B.id, ep],
        ),
        { multiPartFor: eb } = et,
        ey = i.useMemo(() => {
            var e;
            let t, n;
            return Y
                ? ((e = eb(B)),
                  (t = J.trim()),
                  (n = B.options.filter((e) => ee.includes(e.id)).map((e) => e.label)),
                  {
                      kind: "multi",
                      optionIds: ee,
                      ...("" === t ? {} : { custom: t }),
                      ...(null == e ? {} : { attachment: e.attachment }),
                      text: [...n, ...(null == e ? [] : [e.text]), ...("" === t ? [] : [t])].join(", "),
                  })
                : null;
        }, [J, Y, eb, B, ee]),
        ek = p[B.id] ?? ir,
        ew = i.useMemo(() => {
            var e, t;
            let n;
            return null != B.input
                ? ((e = B.input),
                  (t = x[B.id]),
                  (n = J.trim()),
                  {
                      kind: "entities",
                      entities: ek,
                      ...(null == t ? {} : { guildId: t }),
                      ...("" === n ? {} : { custom: n }),
                      text: [
                          ...ek.map((t) => (t.name.startsWith(aT[e]) ? t.name : `${aT[e]}${t.name}`)),
                          ...("" === n ? [] : [n]),
                      ].join(", "),
                  })
                : null;
        }, [J, x, ek, B.id, B.input]),
        eN = i.useCallback(
            (e, t) => {
                (g((t) => ({ ...t, [B.id]: e })), j((e) => ({ ...e, [B.id]: t })));
            },
            [B.id],
        ),
        eC = i.useCallback(() => y(!0), []),
        eA = i.useCallback(() => y(!1), []),
        eS = et.controlsFor(B, q),
        eE = i.useCallback(() => {
            if (null != ew) {
                "" !== ew.text && ep(ew);
                return;
            }
            if (null != ey) {
                "" !== ey.text && ep(ey);
                return;
            }
            let e = J.trim();
            "" !== e && ep({ kind: "custom", text: e });
        }, [J, ey, ew, ep]),
        [eI, eM] = i.useState(!1),
        [e_, eP] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => eM(!0));
            });
        return () => {
            (cancelAnimationFrame(t), cancelAnimationFrame(e));
        };
    }, []);
    let eR = i.useCallback(() => {
            null != s && (eP(!0), setTimeout(s, 150));
        }, [s]),
        eT = i.useMemo(
            () =>
                null != ew
                    ? "" !== ew.text
                        ? ew
                        : null
                    : null != ey
                      ? "" !== ey.text
                          ? ey
                          : null
                      : "" !== J.trim()
                        ? { kind: "custom", text: J.trim() }
                        : (o[B.id] ?? null),
            [o, J, ey, ew, B.id],
        ),
        eL = null != eT && !q,
        e$ = G === U - 1,
        eD = i.useCallback(() => {
            null == eT || q || ep(eT);
        }, [q, eT, ep]),
        ez = i.useCallback(
            (e) => {
                e.altKey ||
                    e.ctrlKey ||
                    e.metaKey ||
                    e.shiftKey ||
                    (0, ei.vq)(e.target, HTMLTextAreaElement) ||
                    (0, ei.vq)(e.target, HTMLInputElement) ||
                    ((!(0, ei.vq)(e.target, HTMLElement) || null == e.target.closest("[data-conjure-image-options]")) &&
                        ("ArrowLeft" === e.key && ex
                            ? (e.preventDefault(), eg())
                            : "ArrowRight" === e.key && eL && (e.preventDefault(), eD())));
            },
            [ex, eL, eg, eD],
        ),
        eO = Q
            ? null
            : (0, a.jsxs)("div", {
                  className: aH.Xy,
                  children: [
                      (0, a.jsx)("span", {
                          className: aH.Gy,
                          "aria-hidden": !0,
                          children: (0, a.jsx)(aE.PencilIcon, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                          }),
                      }),
                      (0, a.jsx)(ru.y, {
                          value: J,
                          onChange: (e) => {
                              let { value: t } = e.currentTarget;
                              d((e) => ({ ...e, [B.id]: t }));
                          },
                          onKeyDown: (e) => {
                              "Enter" !== e.key ||
                                  e.shiftKey ||
                                  e.nativeEvent.isComposing ||
                                  (e.preventDefault(), eE());
                          },
                          placeholder: E.intl.string(aP(B) ? S.default.yLN1x6 : S.default["tOC+tn"]),
                          "aria-label": E.intl.formatToPlainString(S.default["4JeYPB"], { question: B.question }),
                          disabled: q,
                          rows: 1,
                          className: aH.Pu,
                          "data-conjure-clarification-other": B.id,
                      }),
                  ],
              });
    return (0, a.jsxs)("section", {
        className: h()(aH.$O, { [aH.fI]: eI && !e_, [aH.Oh]: e_ }),
        role: "dialog",
        "aria-label": B.question,
        "data-conjure-clarification": l.id,
        "data-state": q ? "inert" : "open",
        "data-question-expanded": V ? "true" : void 0,
        "data-picker-open": b && !T ? "true" : void 0,
        "data-step": G,
        tabIndex: -1,
        onKeyDown: ez,
        children: [
            (0, a.jsxs)("div", {
                className: aH.rf,
                style: null == P ? void 0 : { height: P.heading + P.rows },
                "data-moving": T ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: $,
                        className: aH.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: z,
                                tag: "span",
                                id: `${B.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: V ? void 0 : 5,
                                className: h()(aN.TK, aH.R_, { [aH.TB]: "exit" === ea, [aH.JU]: "enter" === ea }),
                                children: er,
                            }),
                            eo || V
                                ? (0, a.jsx)("div", {
                                      className: aN.Q7,
                                      children: (0, a.jsx)(N.m, {
                                          text: eu,
                                          children: (0, a.jsx)(eX.K, {
                                              icon: V ? tQ.t : nt.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => H({ id: B.id, expanded: !V }),
                                              "aria-label": eu,
                                              "aria-controls": `${B.id}-label`,
                                              "aria-expanded": V,
                                          }),
                                      }),
                                  })
                                : null,
                            null == s
                                ? null
                                : (0, a.jsx)(C.D, {
                                      className: h()(aN.gb, aN.Q7),
                                      onClick: eR,
                                      "aria-label": E.intl.string(S.default.qVXlk0),
                                      "data-conjure-clarification-close": !0,
                                      children: (0, a.jsx)(em.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: aH.Cg,
                        style: null == P ? void 0 : { insetBlockStart: P.heading },
                        children: (0, a.jsxs)("div", {
                            className: aH.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: O,
                                    className: aH.Ge,
                                    role: "group",
                                    "aria-labelledby": `${B.id}-label`,
                                    "data-direction": A?.direction,
                                    "data-parity": null == A ? void 0 : A.moves % 2,
                                    children: [
                                        Y
                                            ? (0, a.jsx)(v.E, {
                                                  tag: "div",
                                                  variant: "text-xs/normal",
                                                  color: "text-muted",
                                                  className: aH.aK,
                                                  children: E.intl.string(S.default.tE8qbz),
                                              })
                                            : null,
                                        (0, a.jsx)(it, {
                                            projectId: n,
                                            question: B,
                                            selected: ee,
                                            disabled: q,
                                            onPick: (e) =>
                                                Y
                                                    ? f((t) => {
                                                          var n, l;
                                                          let r;
                                                          return {
                                                              ...t,
                                                              [B.id]:
                                                                  ((n = t[B.id] ?? il),
                                                                  (l = e.id),
                                                                  (r = n.includes(l)
                                                                      ? n.filter((e) => e !== l)
                                                                      : [...n, l]),
                                                                  B.options
                                                                      .filter((e) => r.includes(e.id))
                                                                      .map((e) => e.id)),
                                                          };
                                                      })
                                                    : ej(e),
                                            own: eS,
                                        }),
                                        null != B.input
                                            ? (0, a.jsx)(aY, {
                                                  projectId: n,
                                                  question: B,
                                                  value: ek,
                                                  disabled: q,
                                                  onChange: eN,
                                                  onFocus: eC,
                                                  onBlur: eA,
                                                  fallback: !1 === B.allow_custom ? eO : null,
                                              })
                                            : null,
                                        !1 === B.allow_custom ? null : eO,
                                    ],
                                }),
                                null == M
                                    ? null
                                    : (0, a.jsx)(
                                          ia,
                                          {
                                              projectId: n,
                                              question: M.question,
                                              draft: M.draft,
                                              selected: M.selected,
                                              ownImage: M.ownImage,
                                              ownSelected: M.ownSelected,
                                              direction: M.direction,
                                              disabled: q,
                                          },
                                          M.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            U > 1 || Y || Q || null != B.input || aP(B)
                ? (0, a.jsxs)("div", {
                      className: aN.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-conjure-clarification-progress": !0,
                              children:
                                  U > 1
                                      ? E.intl.formatToPlainString(S.default.yzYUjq, { index: G + 1, total: U })
                                      : null,
                          }),
                          (0, a.jsxs)("div", {
                              className: aN.zt,
                              children: [
                                  ex
                                      ? (0, a.jsx)(aI.Q, {
                                            variant: "secondary",
                                            textVariant: "text-sm/medium",
                                            text: E.intl.string(S.default.Pk5lfA),
                                            onClick: eg,
                                            "data-conjure-clarification-back": !0,
                                        })
                                      : null,
                                  (0, a.jsx)(Z.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: E.intl.string(e$ ? E.t.geKm7t : S.default.w1nRmT),
                                      disabled: !eL,
                                      onClick: eD,
                                      "data-conjure-clarification-next": !0,
                                      "data-submits": e$ ? "true" : void 0,
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var is = n(557744),
    io = n(223347),
    iu = n(894443),
    ic = n(525530);
function id(e, t) {
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
var im = n(572253),
    ih = n(411236);
function ip(e) {
    let { projectId: t, request: n, onDismiss: l, notifyAgent: r = !0 } = e,
        i = null != n.note && "" !== n.note ? n.note : E.intl.string(S.default.XuOf5s);
    return (0, a.jsx)(im.A, {
        projectId: t,
        scopeKeys: n.keys,
        notifyAgent: r,
        isPreview: !0,
        children: (e) => {
            let { fields: t, canSave: n, saving: r, submit: s } = e;
            function o(e) {
                (e.preventDefault(), s());
            }
            let u = (0, a.jsx)(Z.$, {
                variant: "primary",
                size: "sm",
                type: "submit",
                loading: r,
                disabled: !n,
                text: E.intl.string(S.default.A7dQd9),
            });
            return null == l
                ? (0, a.jsxs)("form", {
                      className: ih.Mk,
                      onSubmit: o,
                      children: [
                          (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-muted",
                              tag: "span",
                              children: E.intl.string(S.default["jZjP+I"]),
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: i,
                          }),
                          t,
                          (0, a.jsx)("div", { className: ih.p0, children: u }),
                      ],
                  })
                : (0, a.jsxs)("form", {
                      className: h()(aN.nd, aN.jx),
                      "aria-label": E.intl.string(S.default["jZjP+I"]),
                      onSubmit: o,
                      children: [
                          (0, a.jsxs)("div", {
                              className: aN.wx,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      tag: "span",
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      className: aN.TK,
                                      children: E.intl.string(S.default["jZjP+I"]),
                                  }),
                                  (0, a.jsx)(C.D, {
                                      className: h()(aN.gb, aN.Q7),
                                      onClick: l,
                                      "aria-label": E.intl.string(S.default["iq+Pte"]),
                                      children: (0, a.jsx)(em.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                          (0, a.jsxs)("div", {
                              className: ih.DQ,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      selectable: !0,
                                      children: i,
                                  }),
                                  t,
                              ],
                          }),
                          (0, a.jsx)("div", {
                              className: aN.qr,
                              children: (0, a.jsx)("div", { className: aN.zt, children: u }),
                          }),
                      ],
                  });
        },
    });
}
var ig = n(935208),
    ix = n(932111),
    iv = n(404373),
    ij = n(435558),
    ib = n.n(ij);
let iy = "ConjureComposerDrafts";
function ik() {
    return W.w.get(iy) ?? {};
}
let iw = new Map(),
    iN = ib().throttle(() => {
        if (0 === iw.size) return;
        let e = ik();
        for (let [t, n] of iw) "" === n ? delete e[t] : (e[t] = n);
        (iw.clear(), W.w.set(iy, e));
    }, 1e3);
class iC extends o.Ay.Store {
    getDraft(e) {
        let t = iw.get(e);
        return null != t ? t : (ik()[e] ?? "");
    }
}
let iA = new iC(tM.h, {
    LOGOUT: function () {
        return (iw.clear(), iN.cancel(), W.w.remove(iy), !1);
    },
    CONJURE_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return (iw.set(t, n), iN(), "" === n && iN.flush(), !1);
    },
});
function iS(e) {
    return "" !== iA.getDraft(e).trim();
}
var iE = n(29080);
function iI(e) {
    var t;
    let n,
        l,
        { steps: r, content: a, hasProposal: i, hasLiveClarification: s = !1, hasAttachments: o } = e,
        u = (0, r5.B4)(r),
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
        })({ hasAttachments: o, showsClosingMessage: h, endsOnStreamedMessage: (0, r5.Lf)(r) }),
    };
}
var iM = n(62617);
let i_ = ["snail", "goat", "frog", "bunny", "cat", "caterpillar", "butterfly", "dog", "spider", "bee", "bot"],
    iP = {
        snail: () => S.default.ABeVsS,
        goat: () => S.default.dhXay8,
        frog: () => S.default.SHeweG,
        bunny: () => S.default.FytFE1,
        cat: () => S.default["5c+sHs"],
        caterpillar: () => S.default["/FYcne"],
        butterfly: () => S.default["Ib/AxK"],
        dog: () => S.default.zDjBR1,
        spider: () => S.default["6sxyrN"],
        bee: () => S.default.cVtefg,
        bot: () => S.default.MjCw0v,
    },
    iR = {
        snail: {
            Illocon: function (e) {
                let { alt: t, ariaLabel: n, ariaHidden: l, role: r, size: s = 64 } = e,
                    o = i.useMemo(
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
                    className: (0, iM.Z)(),
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
                        () => (0, iM.H)({ width: s, height: s, intrinsicWidth: 64, intrinsicHeight: 64 }),
                        [s],
                    );
                return (0, a.jsx)("img", {
                    style: o,
                    src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
                    className: (0, iM.Z)(),
                    alt: t,
                    "aria-label": n,
                    "aria-hidden": l,
                    role: r ?? "img",
                });
            },
            tint: "var(--illo-purple-40)",
        },
    };
function iT(e) {
    return { ...iR[e], name: E.intl.string(iP[e]()) };
}
function iL(e) {
    return i_.includes(e) ? iT(e) : void 0;
}
function i$(e) {
    let t = new Map();
    for (let [n, l] of (function (e) {
        let t = 0,
            n = e[0] ?? "";
        for (let e = 0; e < n.length; e++) t = (31 * t + n.charCodeAt(e)) % i_.length;
        let l = new Map();
        return (
            e.forEach((e, n) => {
                l.set(e, i_[(t + n) % i_.length]);
            }),
            l
        );
    })(e))
        t.set(n, iT(l));
    return t;
}
var iD = n(615839);
function iz(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : E.intl.string(S.default.KcFvbo);
}
var iO = n(60160),
    iF = n(16634);
function iq(e) {
    let t = (0, r5.SY)(e.steps);
    return null != t ? (0, r5.WQ)(t) : iz(e.task);
}
function iU(e) {
    let t = i$(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? iL(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: iz(e.task),
                      todoId: e.task.todoId,
                      line: iq(e),
                  },
              ];
    });
}
function iG(e) {
    let { projectId: t, lane: n, Illocon: l, tint: r, name: i, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        c = (0, r5.SY)(n.steps),
        d = u
            ? iq(n)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(iz(e));
                  switch (e.status) {
                      case "failed":
                          return E.intl.formatToPlainString(S.default.YrVgOf, { task: t });
                      case "cancelled":
                          return E.intl.formatToPlainString(S.default.kWfWa6, { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return E.intl.formatToPlainString(S.default["++9woZ"], {
                                  task: t,
                                  duration: (0, iD.MB)(e.durationMs),
                              });
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                      default:
                          return E.intl.formatToPlainString(S.default.nmI9Uh, { task: t });
                  }
              })(o),
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
                                    className: ah.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            iF.A,
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
                                      className: ah.iq,
                                      children: (0, a.jsx)(iO.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(r9.A, {
        glyph: (0, a.jsx)(ae.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: i,
            body: iz(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: ah.nC,
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
var iB = n(998445),
    iK = n(643210),
    iH = n(648127),
    iV = n(372795),
    iW = n(163897);
let iX = "conjure-browser-viewer";
function iJ(e) {
    let { projectId: t, sessionIds: n } = e,
        l = (0, o.yK)(
            [iK.A],
            () =>
                n.flatMap((e) => {
                    let n = iK.A.getTab(t, e);
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
        className: iW.kR,
        "aria-label": E.intl.string(S.default.Uvkr1G),
        children: l.map((e) =>
            (0, a.jsx)("li", { children: (0, a.jsx)(iZ, { projectId: t, tab: e, sessionIds: r }) }, e.session.id),
        ),
    });
}
function iZ(e) {
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
        u = (0, tt.useHasModalOpen)(iX),
        [c, d] = i.useState(!1),
        m = i.useCallback((e, t) => d(t), []),
        { ended: f } = l,
        p = (0, iH.i)(l.session);
    return (0, a.jsxs)(C.D, {
        innerRef: s,
        className: h()(iW.Nr, f && iW.Xj),
        onClick: () => {
            var e;
            return (
                (e = l.session.id),
                void (0, tt.openModalLazy)(
                    async () => {
                        let { default: l } = await Promise.all([
                            n.e("459368"),
                            n.e("513843"),
                            n.e("501962"),
                            n.e("531527"),
                        ]).then(n.bind(n, 273594));
                        return (n) => (0, a.jsx)(l, { ...n, projectId: t, sessionId: e, sessionIds: r });
                    },
                    { modalKey: iX },
                )
            );
        },
        "aria-label": E.intl.formatToPlainString(S.default.G3a822, { title: p }),
        children: [
            (0, a.jsxs)("div", {
                className: iW.Gt,
                children: [
                    (0, a.jsx)(iV.A, {
                        projectId: t,
                        sessionId: l.session.id,
                        fps: 3,
                        drawWidth: 200,
                        paused: !o || u || f,
                        className: iW.Ji,
                        "aria-label": E.intl.formatToPlainString(S.default.rnwqXb, { name: p }),
                        onStateChange: m,
                    }),
                    c
                        ? null
                        : (0, a.jsx)("div", {
                              className: iW.qf,
                              children: (0, a.jsx)(iB.GlobeEarthIcon, { size: "md", color: "currentColor" }),
                          }),
                    f
                        ? (0, a.jsx)("div", {
                              className: iW.HS,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-xs/medium",
                                  color: "text-strong",
                                  children: E.intl.string(S.default.ocRH08),
                              }),
                          })
                        : null,
                ],
            }),
            (0, a.jsxs)("span", {
                className: iW.pG,
                children: [
                    (0, a.jsx)("span", { className: h()(iW.W9, f && iW.oM) }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-sm/medium",
                        color: "text-default",
                        lineClamp: 1,
                        children: p,
                    }),
                ],
            }),
        ],
    });
}
var iY = n(268409);
let iQ = new WeakMap(),
    i0 = new WeakMap();
function i1(e) {
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
            [lp.A],
            () => {
                if (0 === s.length) return s;
                let e = (function (e) {
                    let t = iQ.get(e);
                    if (null != t) return t;
                    let n = new Map();
                    for (let t of e)
                        for (let e of (function (e) {
                            let t = i0.get(e);
                            if (null == t) {
                                let n = [];
                                for (let t of e)
                                    if ("node" === t.kind) for (let e of t.node?.browser_sessions ?? []) n.push(e);
                                ((t = n), i0.set(e, t));
                            }
                            return t;
                        })(t.steps))
                            n.set(e, t.steps);
                    return (iQ.set(e, n), n);
                })(lp.A.getMessages(t));
                return s.filter((t) => e.get(t) === n);
            },
            [s, t, n],
        );
    return 0 === u.length
        ? null
        : (0, a.jsx)("li", { className: iY.h, children: (0, a.jsx)(iJ, { projectId: t, sessionIds: u }) });
}
var i2 = n(469393);
function i3(e) {
    let { proposal: t, onRestore: n } = e,
        l = (0, lk.lG)(t.authored_at);
    return (0, a.jsx)(al, {
        title: E.intl.string(S.default["t+b0rz"]),
        children: (0, a.jsxs)("div", {
            className: i2.r,
            children: [
                (0, a.jsxs)("div", {
                    className: i2.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: t.subject }),
                        null != l.relative
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  title: l.absolute ?? void 0,
                                  children: l.relative,
                              })
                            : null,
                    ],
                }),
                null != n
                    ? (0, a.jsx)(Z.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.H8Jfhu),
                          onClick: n,
                      })
                    : null,
            ],
        }),
    });
}
var i5 = n(155718);
function i4(e, t) {
    return e.supported_surfaces?.includes(t) === !0;
}
let i6 = ["command", "user_command", "message_command", "message"],
    i7 = new Set([i5.kc.CHAT, i5.kc.USER, i5.kc.MESSAGE]);
function i8(e) {
    return e.type ?? i5.kc.CHAT;
}
function i9(e) {
    return i7.has(i8(e));
}
function se(e) {
    return "user_command" === e.kind || "message_command" === e.kind;
}
function st(e, t) {
    let n = i6.flatMap((t) => e.find((e) => e.kind === t) ?? []),
        l = [...n.filter((e) => !se(e)), ...n.filter(se)].slice(0, 3);
    for (let r of t || 1 === n.length ? e : []) {
        if (l.length >= 3) break;
        l.includes(r) || se(r) || l.push(r);
    }
    return i6.flatMap((t) => e.filter((e) => e.kind === t && l.includes(e)));
}
function sn(e, t, n) {
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
    let s = e.commands.filter(i9).map((e) =>
            (function (e, t) {
                let n = e.description?.trim() ?? "",
                    l = "" !== n ? n : t.reply;
                switch (i8(e)) {
                    case i5.kc.USER:
                        return { kind: "user_command", user: e.name, bot: l };
                    case i5.kc.MESSAGE:
                        return { kind: "message_command", user: e.name, bot: l };
                    default:
                        return { kind: "command", user: `/${e.name}`, bot: l };
                }
            })(e, n),
        ),
        o = "messages" === t ? [] : s.filter(se),
        u = a.length > 0 ? st([...a, ...o], !0) : st("both" === t ? [...s, i] : s, !1);
    return u.length > 0 ? u : [r];
}
var sl = n(377941),
    sr = n.n(sl);
function sa(e) {
    let t = e.split("_").join(" ").toLowerCase();
    return 0 === t.length ? t : t[0].toUpperCase() + t.slice(1);
}
function si(e) {
    return e.type === i5.kc.PRIMARY_ENTRY_POINT
        ? "\u21EA /"
        : e.type === i5.kc.USER || e.type === i5.kc.MESSAGE
          ? ""
          : "/";
}
let ss = {
        [lS.q7.APP_CHANNEL]: S.default["3/aHX6"],
        [lS.q7.VOICE_CHANNEL]: S.default["3/aHX6"],
        [lS.q7.ACTIVITY]: S.default["3/aHX6"],
        [lS.q7.OVERLAY]: S.default["rPpf5/"],
        [lS.q7.PROFILE_WIDGET]: null,
        [lS.q7.AUTOMOD]: null,
        [lS.q7.BOT]: null,
        [lS.q7.APPLICATION_COMMANDS]: null,
    },
    so = [lS.q7.ACTIVITY, lS.q7.APP_CHANNEL, lS.q7.VOICE_CHANNEL, lS.q7.OVERLAY];
function su(e) {
    return so.find((t) => i4(e, t)) ?? null;
}
var sc = n(176999),
    sd = (((l = {}).IMAGE = "image"), l),
    sm = (((r = {}).PRIVATE = "private"), (r.PUBLIC = "public"), r),
    sf = n(598748),
    sh = n(773669);
let sp = [],
    sg = {},
    sx = {};
function sv(e) {
    return "custom_string" === e.value_type && "image" === e.presentation_type
        ? { ...e, value_type: "application_asset" }
        : e;
}
function sj(e) {
    return {
        key: e,
        asset_id: e,
        asset_type: sd.IMAGE,
        visibility: sm.PUBLIC,
        metadata: { width: 256, height: 256, content_type: "image/png", is_animated: !1 },
        updated_at: "",
    };
}
var sb = n(127258),
    sy = n(803306),
    sk = n(320095),
    sw = n(963852),
    sN = n(95701),
    sC = n(889227),
    sA = n(427262);
let sS = new sN.nA({ id: "1337", guild_id: "1337", type: q.rbe.GUILD_TEXT, name: "preview" });
function sE(e, t) {
    let {
            bot: n = !1,
            discriminator: l = "0000",
            enabled: r = !0,
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = (0, o.bG)([a_.default], () => a_.default.getUser(e), [e]);
    return (
        i.useEffect(() => {
            r && a?.username !== t && (0, sy.nj)(new sC.A({ id: e, username: t, discriminator: l, bot: n }));
        }, [r, a, e, t, l, n]),
        a
    );
}
let sI = /^@\S+/;
var sM = n(97808),
    s_ = n(778712),
    sP = n(46054),
    sR = n(200700);
let sT = {
        alert: { label: () => E.intl.string(S.default.Vi4cjL), blockedStyle: !1 },
        block: { label: () => E.intl.string(S.default.YdnZ8q), blockedStyle: !0 },
        timeout: { label: () => E.intl.string(S.default.QGrx9O), blockedStyle: !0 },
        allow: { label: () => E.intl.string(S.default.RGzFNK), blockedStyle: !1 },
    },
    sL = {
        blocked: { label: () => E.intl.string(S.default.YdnZ8q), tone: "red" },
        alert: { label: () => E.intl.string(S.default["8ockl9"]), tone: "blurple" },
        allowed: { label: () => E.intl.string(S.default.RGzFNK), tone: "green" },
    },
    s$ = ["blocked", "alert", "allowed"],
    sD = { block: "blocked", timeout: "blocked", alert: "alert", allow: "allowed" };
function sz(e) {
    var t, n;
    let l,
        r = [
            "timeout" !== (t = e).outcome || null == t.timeout_seconds
                ? null
                : E.intl.formatToPlainString(E.t["3LYql6"], {
                      duration:
                          ((n = t.timeout_seconds),
                          null != (l = (0, sR.getFriendlyDurationString)(n))
                              ? l
                              : n % 604800 == 0
                                ? E.intl.formatToPlainString(E.t.EmoBD2, { weeks: n / 604800 })
                                : n % 86400 == 0
                                  ? E.intl.formatToPlainString(E.t["k2UNz+"], { days: n / 86400 })
                                  : n % 3600 == 0
                                    ? E.intl.formatToPlainString(E.t.xCjYxK, { hours: n / 3600 })
                                    : n % 60 == 0
                                      ? E.intl.formatToPlainString(E.t.opVZ9q, { mins: n / 60 })
                                      : E.intl.formatToPlainString(E.t["4zv/jq"], { secs: n })),
                  }),
            e.reason,
        ]
            .filter((e) => null != e && "" !== e)
            .join(" ");
    return "" === r ? null : r;
}
var sO = n(984097),
    sF = n(13673);
let sq = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
function sU(e) {
    let { example: t } = e,
        n = sz(t);
    return null == n
        ? null
        : (0, a.jsx)(v.E, {
              variant: "text-xs/normal",
              color: "text-muted",
              lineClamp: 2,
              selectable: !0,
              children: n,
          });
}
let sG = ["glazedgamer", "sprinkles", "donutking"];
function sB(e) {
    var t;
    let { example: n, username: l, showReason: r } = e,
        { label: i, blockedStyle: s } = sT[n.outcome];
    return (0, a.jsxs)("li", {
        className: h()(sO.nM, { [h()(sO.HV, sF.DX)]: s }),
        children: [
            (0, a.jsx)(at.A, { children: `${i()}: ` }),
            (0, a.jsx)("span", {
                className: sO.my,
                children: (0, a.jsx)(sM.eu, {
                    src: (0, Q.AE)(void 0, void 0),
                    size: s_._3.SIZE_24,
                    "aria-label": E.intl.string(S.default["1yI0xV"]),
                }),
            }),
            (0, a.jsxs)("div", {
                className: sO.fw,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: l }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: ((t = n.content), sP.A.parseEmbedTitleWithoutLinks(t, !0)),
                    }),
                    r ? (0, a.jsx)(sU, { example: n }) : null,
                ],
            }),
        ],
    });
}
function sK(e) {
    let { group: t, firstIndex: n } = e,
        l = i.useId(),
        r = sL[t.section],
        s = new Set(t.examples.map(sz)),
        o = 1 === s.size ? t.examples.map(sz)[0] : null;
    return (0, a.jsxs)("div", {
        className: sO.UO,
        children: [
            (0, a.jsxs)("div", {
                className: sO.RZ,
                children: [
                    (0, a.jsx)(v.E, {
                        id: l,
                        variant: "text-xs/semibold",
                        color: sq[r.tone],
                        tag: "span",
                        children: r.label(),
                    }),
                    null != o
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/semibold",
                                      color: "text-muted",
                                      tag: "span",
                                      className: sO.IQ,
                                      "aria-hidden": !0,
                                      children: "\xb7",
                                  }),
                                  (0, a.jsx)(v.E, {
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
                className: sO.m7,
                "aria-labelledby": l,
                children: t.examples.map((e, t) =>
                    (0, a.jsx)(sB, { example: e, username: sG[(n + t) % sG.length], showReason: s.size > 1 }, t),
                ),
            }),
        ],
    });
}
function sH(e) {
    var t;
    let { automod: n } = e,
        l =
            ((t = n.examples),
            s$
                .map((e) => ({ section: e, examples: t.filter((t) => sD[t.outcome] === e) }))
                .filter((e) => e.examples.length > 0)),
        r = n.rule_name.trim();
    return (0, a.jsxs)("div", {
        className: sO.Nr,
        children: [
            "" !== r
                ? (0, a.jsx)("div", {
                      className: sO.hk,
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          lineClamp: 1,
                          children: r,
                      }),
                  })
                : null,
            l.map((e, t) =>
                (0, a.jsx)(
                    sK,
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
var sV = n(276293),
    sW = n(460905),
    sX = n(110384),
    sJ = n(633018),
    sZ = n(763754),
    sY = n(217424),
    sQ = n(194085),
    s0 = n(20851),
    s1 = n(692508),
    s2 = n(798819);
function s3(e) {
    let { item: t } = e,
        { iconLeft: n, icon: l } = t;
    return (0, a.jsxs)("div", {
        className: h()(s2.item, s2.labelContainer, s2.colorDefault, {
            [s2.focused]: !0 === t.highlighted,
            [s2.disabled]: !0 === t.muted,
        }),
        children: [
            null != n
                ? (0, a.jsx)("div", {
                      className: s2.iconContainerLeft,
                      children: (0, a.jsx)(n, { color: "currentColor", className: s2.icon }),
                  })
                : null,
            (0, a.jsx)("div", { className: h()(s2.label, s1.Gy), children: t.label }),
            null != l
                ? (0, a.jsx)("div", {
                      className: s2.iconContainer,
                      children: (0, a.jsx)(l, { color: "currentColor", className: s2.icon }),
                  })
                : null,
        ],
    });
}
function s5(e) {
    let { target: t, commandName: n, appIconSrc: l } = e,
        r = i.useMemo(
            () =>
                null != l
                    ? (e) => {
                          let { className: t } = e;
                          return (0, a.jsx)("img", { src: l, alt: "", className: h()(t, s1.ak) });
                      }
                    : void 0,
            [l],
        ),
        s =
            "message" === t
                ? { label: E.intl.string(E.t["5IEsGx"]), icon: sX.W, muted: !0 }
                : { label: E.intl.string(E.t.LYju5J), muted: !0 };
    return (0, a.jsx)("div", {
        className: h()(s2.menu, s1.MK),
        "aria-hidden": !0,
        children: (0, a.jsxs)("div", {
            className: s2.scroller,
            children: [
                (0, a.jsx)(s3, { item: s }),
                (0, a.jsx)("div", { className: s2.separator }),
                (0, a.jsx)(s3, { item: { label: n, iconLeft: r, highlighted: !0 } }),
            ],
        }),
    });
}
var s4 = n(381941);
function s6() {}
function s7(e) {
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
        p,
        { projectId: g, exchanges: x } = e,
        {
            items: j,
            botIcon: b,
            appIconSrc: y,
        } = ((t = (0, o.bG)([a_.default], () => a_.default.getCurrentUser())),
        (n = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(g))),
        (l = n?.application_id),
        (r = (0, o.bG)([ti.A], () => ti.A.getApplication(l)?.getIconURL(80) ?? null, [l])),
        (s = n?.name ?? E.intl.string(S.default.JEYq8M)),
        (u = (0, o.bG)([a_.default], () => (null != l ? a_.default.getUser(l) : void 0), [l])),
        (d = sE("31337", s, { bot: !0, enabled: !(c = u?.bot === !0) })),
        (m = c ? u : d),
        (f = sE("31338", E.intl.string(S.default["9iAOsw"]), { discriminator: "0003" })),
        (p = sE("31339", (0, sA.mG)(t) ?? "", { enabled: null != t })),
        {
            items: i.useMemo(
                () =>
                    null == t || null == p || null == m || null == f
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
                                      i = (0, sk.rh)({
                                          ...(0, sw.Ay)({
                                              channelId: sS.id,
                                              content: e,
                                              author: t,
                                              type: l ?? q.lAJ.DEFAULT,
                                          }),
                                          id: a,
                                          state: q.cmJ.SENT,
                                          ...(null != n
                                              ? {
                                                    interaction: {
                                                        id: a,
                                                        name: n,
                                                        type: sb.G.APPLICATION_COMMAND,
                                                        user: (0, sw.Vi)(s),
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
                                              messageType: q.lAJ.CHAT_INPUT_COMMAND,
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
                                                  messageType: q.lAJ.CONTEXT_MENU_COMMAND,
                                              }));
                                          break;
                                      }
                                      case "message":
                                          (d(((l = t.user), l.trim().replace(sI, `<@${i.id}>`)), s),
                                              d(((r = t.bot), r.includes("<@") ? r : `<@${o.id}> ${r}`), i));
                                          break;
                                      case "event":
                                          d(((a = t.bot), a.split(`@${u.username}`).join(`<@${u.id}>`)), i);
                                  }
                              return c;
                          })(
                              x,
                              { bot: m, currentUser: t, viewer: p, member: f },
                              {
                                  targetMessage: E.intl.string(S.default["y+QYes"]),
                                  memberMessage: E.intl.string(S.default.BUTRDc),
                              },
                          ),
                [x, m, t, p, f],
            ),
            botIcon: r,
            appIconSrc: r ?? m?.getAvatarURL(void 0, 80),
        });
    if (0 === j.length) return null;
    let k = sS.name;
    return (0, a.jsxs)("div", {
        className: s1.Ix,
        children: [
            (0, a.jsxs)("div", {
                className: s1.ZO,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sV.N, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", tag: "span", children: k }),
                ],
            }),
            (0, a.jsx)("ol", {
                className: h()(s1.TE, `group-spacing-${s4.ES}`),
                children: j.map((e) => {
                    let { key: t, record: n, isCommandReply: l, menu: r } = e;
                    return (0, a.jsxs)(
                        "li",
                        {
                            className: null != r ? s1.Rz : void 0,
                            children: [
                                (0, a.jsx)(s0.A, {
                                    message: n,
                                    channel: sS,
                                    author: (0, sZ.FT)(n.author, sS),
                                    isGroupStart: !0,
                                    avatarOverride: n.author.bot ? (b ?? void 0) : void 0,
                                    childrenExecutedCommand: l ? (0, a.jsx)(sY.A, { message: n, channel: sS }) : void 0,
                                    usernameClassName: r?.target === "user" ? s1.Ct : void 0,
                                    disableInteraction: !0,
                                }),
                                r?.target === "message"
                                    ? (0, a.jsx)("div", {
                                          className: s1.S3,
                                          inert: !0,
                                          "aria-hidden": !0,
                                          children: (0, a.jsxs)(sQ.Ay, {
                                              children: [
                                                  (0, a.jsx)(sQ.qv, {
                                                      label: E.intl.string(E.t.lfIHs4),
                                                      icon: sW.n,
                                                      onClick: s6,
                                                  }),
                                                  (0, a.jsx)(sQ.qv, {
                                                      label: E.intl.string(E.t["5IEsGx"]),
                                                      icon: sX.W,
                                                      onClick: s6,
                                                  }),
                                                  (0, a.jsx)(sQ.qv, {
                                                      label: E.intl.string(E.t["UKOtz+"]),
                                                      icon: eJ.MoreHorizontalIcon,
                                                      selected: !0,
                                                      onClick: s6,
                                                  }),
                                              ],
                                          }),
                                      })
                                    : null,
                                null != r
                                    ? (0, a.jsx)("div", {
                                          className: "user" === r.target ? s1.ET : s1.je,
                                          inert: !0,
                                          children: (0, a.jsx)(s5, {
                                              target: r.target,
                                              commandName: r.commandName,
                                              appIconSrc: y,
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
                className: s1.DA,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(sJ.k, { size: "sm", color: "currentColor" }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        tag: "span",
                        lineClamp: 1,
                        children: E.intl.formatToPlainString(E.t["8lzR/R"], { channel: `#${k}` }),
                    }),
                ],
            }),
        ],
    });
}
var s8 = n(332173);
function s9(e) {
    let { name: t } = e;
    return (0, a.jsxs)(s8.A, { children: ["/", t] });
}
function oe(e) {
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
                        let t = [...e].sort((e, t) => t.length - e.length).map(sr());
                        return RegExp(`(^|[\\s("'\u{201C}\u{2018}])/(${t.join("|")})(?![\\w-])`, "gu");
                    })(n),
                [n],
            ),
        );
    return null == l ? t : l.map((e) => ("command" === e.kind ? (0, a.jsx)(s9, { name: e.name }, e.start) : e.text));
}
n(827669);
var ot = n(757789),
    on = n(26137);
let ol = {
    frame: S.default.Z2bt4u,
    overlay_widget: S.default["0mGHfU"],
    user_widget: S.default.Jipr29,
    bot: S.default.EbvC13,
    commands: S.default.EbvC13,
    automod: S.default.tiMvei,
};
var or = n(573634);
let oa = {
    frame: ee.GameControllerIcon,
    overlay_widget: ot.V,
    user_widget: on.r,
    bot: er.RobotIcon,
    commands: er.RobotIcon,
    automod: el.ShieldIcon,
};
function oi(e) {
    let { caption: t, children: n, className: l } = e;
    return (0, a.jsxs)("div", {
        className: h()(or.e7, l),
        children: [(0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }), n],
    });
}
function os(e) {
    let { labels: t } = e;
    return (0, a.jsx)("ul", {
        className: or.Ip,
        children: t.map((e) =>
            (0, a.jsx)(
                "li",
                {
                    className: or.jw,
                    children: (0, a.jsx)(v.E, {
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
function oo(e) {
    let { name: t, description: n } = e;
    return (0, a.jsxs)("li", {
        className: or.lj,
        children: [
            (0, a.jsx)("span", {
                className: h()(or.Vo, or.G),
                children: (0, a.jsx)(et.k, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
            }),
            (0, a.jsxs)("div", {
                className: or.aV,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", lineClamp: 1, children: t }),
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function ou(e) {
    let { commands: t } = e;
    return (0, a.jsx)("ul", {
        className: or.wZ,
        children: t.map((e, t) => {
            let n = si(e),
                l = e.description?.trim() ?? "";
            return (0, a.jsx)(
                "li",
                {
                    children: (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        selectable: !0,
                        children: [
                            "/" === n
                                ? (0, a.jsx)(s9, { name: e.name })
                                : (0, a.jsx)(s8.A, { children: `${n}${e.name}` }),
                            "" !== l ? ` ${l}` : null,
                        ],
                    }),
                },
                t,
            );
        }),
    });
}
function oc(e) {
    let { bullets: t, commandNames: n } = e;
    return (0, a.jsx)("ul", {
        className: or.p_,
        children: t.map((e, t) =>
            (0, a.jsx)(
                "li",
                {
                    className: or.Aw,
                    children: (0, a.jsx)(v.E, {
                        variant: "text-md/normal",
                        color: "text-default",
                        tag: "span",
                        selectable: !0,
                        children: (0, a.jsx)(oe, { text: e, commandNames: n }),
                    }),
                },
                t,
            ),
        ),
    });
}
function od(e) {
    let { experience: t, bullets: n, preview: l, blocks: r, commandNames: i } = e,
        s = "frame" === t.kind && !0 !== t.game,
        o = s ? et.k : oa[t.kind],
        u = E.intl.string(s ? S.default.BM4Ymz : ol[t.kind]);
    return (0, a.jsxs)("section", {
        className: or.s9,
        "aria-label": u,
        children: [
            (0, a.jsxs)("div", {
                className: or.JQ,
                children: [
                    (0, a.jsx)("span", {
                        className: or.Vo,
                        children: (0, a.jsx)(o, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                    }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-strong", tag: "span", children: u }),
                ],
            }),
            null != l ? (0, a.jsx)("div", { className: or.VH, children: l }) : null,
            "automod" === t.kind && 1 === n.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      selectable: !0,
                      children: (0, a.jsx)(oe, { text: n[0], commandNames: i }),
                  })
                : n.length > 0
                  ? (0, a.jsx)(oc, { bullets: n, commandNames: i })
                  : null,
            r.length > 0 ? (0, a.jsx)("div", { className: or.PG, children: r }) : null,
        ],
    });
}
function om(e) {
    var t;
    let n,
        l,
        { appName: r, intro: s, proposal: o, renderPreview: u, commandNames: c } = e;
    return (0, a.jsxs)("div", {
        className: or.aN,
        children: [
            (0, a.jsxs)("div", {
                className: or.Lv,
                children: [(0, a.jsx)(x.D, { variant: "heading-lg/semibold", color: "text-strong", children: r }), s],
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
                                let n = t.map(sr()).join("|");
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
                            (0, a.jsx)("div", { className: or.yF, role: "separator" }),
                            (0, a.jsx)(od, {
                                experience: t,
                                bullets: n,
                                preview: u(t),
                                blocks: (function (e, t) {
                                    switch (t.kind) {
                                        case "frame":
                                            let n = (function (e, t) {
                                                if ("frame" !== t.kind) return null;
                                                let n = E.intl.string(S.default["6/3tGY"]),
                                                    l = [];
                                                if (t.surfaces.includes(lS.q7.APP_CHANNEL)) {
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
                                                    launchableAnywhere: t.surfaces.includes(lS.q7.ACTIVITY),
                                                    usableInVoice: t.surfaces.includes(lS.q7.VOICE_CHANNEL),
                                                };
                                            })(e, t);
                                            if (null == n) return [];
                                            let l = [];
                                            n.channels.length > 0 &&
                                                l.push(
                                                    (0, a.jsx)(
                                                        oi,
                                                        {
                                                            className: or.Iw,
                                                            caption: E.intl.formatToPlainString(S.default.w8F5sy, {
                                                                count: n.channels.length,
                                                            }),
                                                            children: (0, a.jsx)("ul", {
                                                                className: or.wZ,
                                                                "data-conjure-plan-channels": "",
                                                                children: n.channels.map((e) => {
                                                                    let { name: t, description: n } = e;
                                                                    return (0, a.jsx)(
                                                                        oo,
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
                                                ...(n.usableInVoice ? [E.intl.string(S.default["4oGg2h"])] : []),
                                                ...(n.launchableAnywhere ? [E.intl.string(S.default.BTGCfR)] : []),
                                            ];
                                            return (
                                                r.length > 0 &&
                                                    l.push(
                                                        (0, a.jsx)(
                                                            oi,
                                                            {
                                                                caption: E.intl.string(S.default.MY6UGJ),
                                                                children: (0, a.jsx)(os, { labels: r }),
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
                                                              oi,
                                                              {
                                                                  caption: E.intl.string(E.t["0hKkS+"]),
                                                                  children: (0, a.jsx)(ou, { commands: e.commands }),
                                                              },
                                                              "commands",
                                                          ),
                                                      ]),
                                                ...[
                                                    {
                                                        key: "permissions",
                                                        caption: S.default["2UbW6r"],
                                                        names: e.bot_permissions,
                                                    },
                                                    {
                                                        key: "intents",
                                                        caption: S.default["7TKfpj"],
                                                        names: e.privileged_intents,
                                                    },
                                                ]
                                                    .flatMap((e) => {
                                                        let { key: t, caption: n, names: l } = e;
                                                        return null != l && l.length > 0
                                                            ? [{ key: t, caption: E.intl.string(n), labels: l.map(sa) }]
                                                            : [];
                                                    })
                                                    .map((e) => {
                                                        let { key: t, caption: n, labels: l } = e;
                                                        return (0, a.jsx)(
                                                            oi,
                                                            { caption: n, children: (0, a.jsx)(os, { labels: l }) },
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
var of = n(633075),
    oh = n(946356),
    op = n(58216),
    og = n(27399);
function ox(e) {
    let { applicationId: t, rendererProps: n } = e,
        l = (0, o.bG)([a_.default], () => a_.default.getCurrentUser()),
        r = i.useMemo(() => new of.R({ applicationId: t }), [t]);
    return null == l
        ? null
        : (0, a.jsx)("div", {
              className: og.H,
              children: (0, a.jsx)(oh.A.Overlay, {
                  className: og.w,
                  children: (0, a.jsx)(op.A, {
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
var ov = n(443863);
function oj(e) {
    let { projectId: t, design: n, alt: l } = e,
        { id: r } = n,
        { src: s, gone: o, handleError: u } = (0, a5._)(t, r),
        c = i.useCallback(() => {
            (0, ev.PK)(t, r).then(
                (e) => {
                    (0, a3.R)({
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
        : (0, a.jsx)(C.D, {
              className: ov.xX,
              onClick: c,
              "aria-label": E.intl.string(S.default.TvAPIm),
              children: null != s ? (0, a.jsx)("img", { src: s, alt: l, className: ov.sN, onError: u }) : null,
          });
}
function ob(e) {
    var t;
    let n,
        l,
        r,
        s,
        { projectId: u, proposal: c, version: d, onApprove: m } = e,
        { botExchanges: f } =
            ((n = i4(c, lS.q7.APPLICATION_COMMANDS)),
            (l =
                i4(c, lS.q7.BOT) || n
                    ? null != c.bot
                        ? c.bot.interaction
                        : n && c.commands.some(i9)
                          ? "commands"
                          : null
                    : null),
            (r = i.useMemo(
                () =>
                    null == l
                        ? []
                        : sn(c, l, {
                              message: E.intl.string(S.default.J7qggf),
                              reply: E.intl.string(S.default.nqYtiy),
                              event: E.intl.string(S.default["05lU9W"]),
                          }),
                [c, l],
            )),
            { botInteraction: l, botExchanges: r }),
        h = (function (e, t) {
            let { widget_config: n, widget_preview: l = sx } = t,
                r = (0, o.bG)([sh.default], () => sh.default.locale),
                a = (0, o.bG)([eO.Ay], () => {
                    let t = eO.Ay.getProject(e);
                    return t?.preview_application_id ?? t?.application_id ?? null;
                }),
                s = (function (e, t) {
                    let [n, l] = i.useState(sg);
                    return (
                        i.useEffect(() => {
                            let n = Object.entries(t ?? {});
                            if (0 === n.length) return;
                            let r = !1;
                            return (
                                Promise.all(
                                    n.map((t) => {
                                        let [n, l] = t;
                                        return (0, ev.PK)(e, l.id).then(
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
                                                          ...sv(n),
                                                          ...(null != n.fallback ? { fallback: sv(n.fallback) } : {}),
                                                      };
                                                  t[n] = { fields: e };
                                              }
                                              return { layout: e.layout, components: t };
                                          })(n));
                                  let a = sc.uW.safeParse(r);
                                  if (!a.success) return null;
                                  let i = a.data;
                                  return null == i[sf.m.WIDGET_TOP] || null == i[sf.m.WIDGET_BOTTOM]
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
                                                                    type: sc.oG.MEDIA,
                                                                    media: { url: t, width: 256, height: 256 },
                                                                });
                                                        } else
                                                            "number" == typeof a
                                                                ? (r[e] = { type: sc.oG.NUMBER, value: a })
                                                                : (r[e] = { type: sc.oG.STRING, value: a });
                                                    return r;
                                                })(e, t, n),
                                                applicationAssets: Object.keys(n).map(sj),
                                                getApplicationAssetUrl: (e) => n[e.key] ?? "",
                                                localizedStrings: sp,
                                            },
                                        };
                              })(n, l, s, r),
                    [n, l, s, r],
                );
            return i.useMemo(() => (null == a || null == u ? null : { applicationId: a, rendererProps: u }), [a, u]);
        })(u, c),
        p = d?.superseded === !0,
        g = c.what_changed?.trim() ?? "",
        x =
            ((t = c.commands),
            i.useMemo(
                () =>
                    t
                        .filter((e) => "/" === si(e))
                        .map((e) => {
                            let { name: t } = e;
                            return t;
                        }),
                [t],
            )),
        j =
            null == (s = su(c))
                ? null
                : (c.experiences?.find((e) => {
                      let { surfaces: t } = e;
                      return t.includes(s);
                  })?.id ?? null),
        b = i.useMemo(
            () =>
                c.commands.some(i9)
                    ? sn({ ...c, bot: void 0 }, "commands", {
                          message: E.intl.string(S.default.J7qggf),
                          reply: E.intl.string(S.default.nqYtiy),
                          event: E.intl.string(S.default["05lU9W"]),
                      })
                    : [],
            [c],
        ),
        y = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(u)?.name, [u]),
        k =
            p && null != d
                ? E.intl.formatToPlainString(S.default.YZ3qJs, { version: d.version })
                : E.intl.string(S.default["3b6e7o"]),
        w = p ? (0, a.jsx)(aa, { children: E.intl.string(S.default.hF2c41) }) : null;
    return (0, a.jsxs)(ai, {
        title: k,
        meta: w,
        superseded: p,
        showLabel: E.intl.string(S.default.yD8EJS),
        hideLabel: E.intl.string(S.default.nSPGNb),
        bodyClassName: ov.rf,
        "data-conjure-plan-card": !0,
        children: [
            (0, a.jsx)("div", {
                className: ov.Qs,
                children: (0, a.jsx)(om, {
                    appName: y ?? c.experiences?.[0]?.name ?? "",
                    intro: (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/normal",
                                color: "text-default",
                                selectable: !0,
                                children: (0, a.jsx)(oe, { text: c.summary, commandNames: x }),
                            }),
                            "" !== g
                                ? (0, a.jsxs)("section", {
                                      className: ov.uW,
                                      children: [
                                          (0, a.jsx)(v.E, {
                                              variant: "text-xs/medium",
                                              color: "text-muted",
                                              tag: "span",
                                              children: E.intl.string(S.default.iNS4dl),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-default",
                                              selectable: !0,
                                              children: (0, a.jsx)(oe, { text: g, commandNames: x }),
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
                                    ? (0, a.jsx)(oj, {
                                          projectId: u,
                                          design: c.design_image,
                                          alt: E.intl.string(null == (t = su(c)) ? S.default["3/aHX6"] : ss[t]),
                                      })
                                    : null;
                            case "user_widget":
                                return null != h ? (0, a.jsx)(ox, { ...h }) : null;
                            case "automod":
                                return null != c.automod && c.automod.examples.length > 0
                                    ? (0, a.jsx)(sH, { automod: c.automod })
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
                                        (r = l.some((e) => "command" === e.kind || se(e))),
                                        0 === n.length || r ? l.slice(0, 3) : [...l.slice(0, 2), n[0]]
                                    );
                                })(e, f, b);
                                return t.length > 0 ? (0, a.jsx)(s7, { projectId: u, exchanges: t }) : null;
                            }
                        }
                    },
                    commandNames: x,
                }),
            }),
            null == m || p
                ? null
                : (0, a.jsxs)("div", {
                      className: ov.qr,
                      children: [
                          (0, a.jsx)(Z.$, {
                              variant: "primary",
                              size: "sm",
                              text: E.intl.string(S.default["6S+wRM"]),
                              onClick: m,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-subtle",
                              tag: "span",
                              children: E.intl.string(S.default.IZoqbR),
                          }),
                      ],
                  }),
        ],
    });
}
var oy = n(289565);
function ok(e) {
    let { onDismiss: t, children: n } = e;
    return null == t
        ? (0, a.jsx)("div", { className: oy.m, children: n })
        : (0, a.jsxs)("div", {
              className: oy.Z,
              children: [
                  n,
                  (0, a.jsx)(N.m, {
                      text: E.intl.string(E.t.WAI6xu),
                      asContainer: !0,
                      children: (0, a.jsx)(eX.K, {
                          "aria-label": E.intl.string(E.t.WAI6xu),
                          icon: em.P,
                          variant: "icon-only",
                          size: "sm",
                          onClick: t,
                      }),
                  }),
              ],
          });
}
function ow(e, t) {
    return null != t && ("new_ui" === e.reason ? !0 === t.newUiUnpublished : "unpublished" === t.state);
}
function oN(e, t) {
    return null != e && ow(t, e.status);
}
let oC = new WeakMap();
var oA = n(175841),
    oS = n(27232),
    oE = n(505930),
    oI = n(385081);
let oM = "conjurePublishRatings",
    o_ = [1, 2, 3, 4, 5],
    oP = new Set(),
    oR = 0;
function oT() {
    return W.w.get(oM) ?? {};
}
function oL(e, t) {
    return oT()[e]?.[t] ?? null;
}
function o$(e) {
    return (oP.add(e), () => oP.delete(e));
}
function oD(e) {
    let { rating: t, ...n } = e,
        [l, r] = i.useState(""),
        s = "" !== l.trim(),
        o = E.intl.string(S.default.IqkF07);
    return (0, a.jsx)(e9.a, {
        ...n,
        title: o,
        actions: [
            {
                variant: "primary",
                text: E.intl.string(S.default["sr+mUC"]),
                disabled: !s,
                onClick: function () {
                    let e;
                    ("" !== (e = l.trim().slice(0, 256)) && (0, oI.Fz)(t, e), n.onClose());
                },
            },
        ],
        children: (0, a.jsx)(aw.f, {
            label: o,
            hideLabel: !0,
            placeholder: E.intl.string(S.default.HMGKAV),
            value: l,
            onChange: r,
            rows: 4,
            maxLength: 256,
            showRemainingCharacterCount: !0,
        }),
    });
}
var oz = n(54100);
let oO = { 1: S.default.GhbsGA, 2: S.default.cm0nwU, 3: S.default.kGvlh2, 4: S.default.dVBSUg, 5: S.default.DKlgF7 };
function oF(e) {
    let { rating: t } = e;
    return (0, a.jsxs)("div", {
        className: oz.mo,
        role: "status",
        children: [
            (0, a.jsx)(oA.SparklesIcon, { size: "xs", color: "currentColor", className: oz.dQ, "aria-hidden": !0 }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/medium",
                color: "text-muted",
                children: E.intl.string(t <= 2 ? S.default["nIc9/M"] : 3 === t ? S.default.ausj8U : S.default.HilSjw),
            }),
        ],
    });
}
function oq(e) {
    let { projectId: t, turnId: n, cta: l, status: r } = e,
        s = (i.useSyncExternalStore(o$, () => oR), oL(t, n)),
        [o, u] = i.useState(null),
        [c, d] = i.useState(null),
        [m, f] = i.useState(!1),
        p = i.useId(),
        g = i.useId(),
        x = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (!m) return;
            let e = setTimeout(() => f(!1), 420);
            return () => clearTimeout(e);
        }, [m]),
        null != s && !m)
    )
        return (0, a.jsx)(oF, { rating: s });
    let j = null != s,
        b = j ? s : (c ?? o),
        y = j || (null == c && null != o);
    function k(e) {
        if (j) return;
        (u(e), d(null), f(!0));
        let i = (function (e) {
            let { projectId: t, turnId: n, rating: l, cta: r, status: a } = e;
            if (null != oL(t, n)) return null;
            let i = {
                projectId: t,
                turnId: n,
                rating: l,
                publishReason: r.reason ?? "first_publish",
                surface: a?.surface ?? r.surface,
            };
            (0, oI.gw)(i);
            let s = oT();
            return (W.w.set(oM, { ...s, [t]: { ...s[t], [n]: l } }), oR++, oP.forEach((e) => e()), i);
        })({ projectId: t, turnId: n, rating: e, cta: l, status: r });
        null != i && e <= 2 && (0, tt.openModal)((e) => (0, a.jsx)(oD, { ...e, rating: i }));
    }
    return (0, a.jsxs)("div", {
        className: oz.nM,
        onMouseLeave: () => d(null),
        children: [
            (0, a.jsxs)("span", {
                className: oz.WD,
                "aria-hidden": !0,
                children: [
                    (0, a.jsx)(v.E, {
                        id: g,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        className: h()(oz.Pf, { [oz.KH]: null == b }),
                        children: E.intl.string(S.default.mTV326),
                    }),
                    o_.map((e) =>
                        (0, a.jsx)(
                            v.E,
                            {
                                variant: "text-xs/medium",
                                color: "text-default",
                                className: h()(oz.Pf, { [oz.KH]: b === e }),
                                children: E.intl.string(oO[e]),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, a.jsx)("div", {
                role: "radiogroup",
                "aria-labelledby": g,
                className: oz.uf,
                children: o_.map((e) => {
                    let t = null != b && e <= b,
                        n = t ? oS.StarIcon : oE.y;
                    return (0, a.jsxs)(
                        "label",
                        {
                            className: oz.uK,
                            onMouseEnter: () => {
                                j || d(e);
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    type: "radio",
                                    name: p,
                                    value: e,
                                    checked: !1,
                                    onChange: () => {
                                        x.current ? u(e) : k(e);
                                    },
                                    onKeyDown: (t) => {
                                        ((x.current = t.key.startsWith("Arrow")),
                                            "Enter" === t.key && (t.preventDefault(), k(e)));
                                    },
                                    onKeyUp: () => {
                                        x.current = !1;
                                    },
                                    className: oz.hF,
                                    "aria-label": E.intl.formatToPlainString(S.default.NU7Dex, {
                                        rating: e,
                                        label: E.intl.string(oO[e]),
                                    }),
                                }),
                                (0, a.jsx)(
                                    "span",
                                    {
                                        className: h()(oz.d4, { [oz.cO]: t, [oz.Ng]: t && y }),
                                        children: (0, a.jsx)(n, {
                                            size: "xs",
                                            color: "currentColor",
                                            "aria-hidden": !0,
                                        }),
                                    },
                                    t && y ? `picked-${b}` : "idle",
                                ),
                            ],
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function oU(e) {
    let { publish: t } = e,
        n = t.guildId,
        l = (0, o.bG)([d.A], () => (null == n ? null : d.A.getGuild(n)));
    return (0, a.jsx)(te.B, {
        gap: 8,
        align: "start",
        children: (0, a.jsxs)(te.B, {
            direction: "horizontal",
            gap: 8,
            align: "center",
            children: [
                (0, a.jsx)(Z.$, {
                    variant: "primary",
                    size: "sm",
                    loading: t.publishing,
                    disabled: t.disabled,
                    onClick: () => t.run("card"),
                    text: t.label,
                }),
                null != l
                    ? (0, a.jsxs)(te.B, {
                          direction: "horizontal",
                          gap: 4,
                          align: "center",
                          children: [
                              (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default["+HGTlC"]),
                              }),
                              (0, a.jsx)(B.Ay, { guild: l, size: B.Ay.Sizes.SMOL }),
                              (0, a.jsx)(v.E, {
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
function oG(e) {
    let { projectId: t, turnId: n, cta: l } = e,
        r = (0, e5.Ay)(t);
    return null != r && oN(r, l)
        ? (0, a.jsx)(ok, {
              children: (0, a.jsxs)(te.B, {
                  gap: 12,
                  align: "start",
                  children: [
                      (0, a.jsx)(oU, { publish: r }),
                      null != n ? (0, a.jsx)(oq, { projectId: t, turnId: n, cta: l, status: r.status }) : null,
                  ],
              }),
          })
        : null;
}
var oB = n(303345),
    oK = n(44255),
    oH = n(416473),
    oV = n(289830);
function oW(e) {
    let { projectId: t, proposal: n, current: l } = e,
        r = (function (e, t, n) {
            let l = (0, o.bG)(
                    [eO.Ay],
                    () => {
                        let t = eO.Ay.getProject(e);
                        return null != t && (0, eO.jf)(t);
                    },
                    [e],
                ),
                [r, a] = i.useState("idle"),
                [s, u] = i.useState(null),
                c = i.useCallback(async () => {
                    (a("sending"), u(null));
                    try {
                        (await (0, oH.Du)(e, t.trigger), a("on"));
                    } catch (e) {
                        (u(e instanceof oB.A ? e.message : E.intl.string(S.default.EXceox)), a("error"));
                    }
                }, [e, t.trigger]),
                [d] = i.useState(() => Date.now()),
                m =
                    t.next_run_at > d
                        ? E.intl.formatToPlainString(S.default.orZDqY, { time: (0, oK.TP)(t.next_run_at) })
                        : null;
            return {
                summary: (0, oK.lD)(t.trigger),
                firstPublish: m,
                status: r,
                error: s,
                onTurnOn: l && n && "on" !== r ? c : void 0,
            };
        })(t, n, l);
    return (0, a.jsx)(al, {
        title: E.intl.string(S.default.ZtfX9V),
        children: (0, a.jsxs)("div", {
            className: oV.r,
            children: [
                (0, a.jsxs)("div", {
                    className: oV.z,
                    children: [
                        (0, a.jsx)(v.E, { variant: "text-md/medium", children: r.summary }),
                        null != r.firstPublish
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  children: r.firstPublish,
                              })
                            : null,
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: E.intl.string(S.default.cxNHma),
                        }),
                        "on" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  role: "status",
                                  children: E.intl.string(S.default.k4IRsm),
                              })
                            : null,
                        "error" === r.status
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-sm/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: r.error,
                              })
                            : null,
                    ],
                }),
                null != r.onTurnOn
                    ? (0, a.jsx)(Z.$, {
                          variant: "secondary",
                          size: "sm",
                          text: E.intl.string(S.default.EuhBSG),
                          loading: "sending" === r.status,
                          disabled: "sending" === r.status,
                          onClick: r.onTurnOn,
                      })
                    : null,
            ],
        }),
    });
}
var oX = n(989271);
function oJ(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        s = null == l;
    return (0, a.jsxs)(C.D, {
        className: h()(oX.nM, { [oX.f1]: s, [oX.CZ]: n }),
        onClick: s ? void 0 : () => l(t),
        "aria-label": E.intl.formatToPlainString(S.default.H8G39M, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": s,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: oX.jo,
                children: [
                    n
                        ? (0, a.jsx)(nI.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: oX.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: oX.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function oZ(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                (s((t) => new Set(t).add(e.id)), l?.(e));
            },
            [l],
        );
    return (0, a.jsx)(al, {
        title: E.intl.string(S.default["wx/o8Y"]),
        "data-conjure-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                oJ,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var oY = n(530557),
    oQ = n(872162),
    o0 = n(564963),
    o1 = n(202723);
function o2(e) {
    let { projectId: t, cardId: l, request: r, status: s, awaiting: o } = e,
        u = i.useCallback(() => {
            (0, tt.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("291953"), n.e("162827")]).then(n.bind(n, 615110));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: r });
            });
        }, [t, r]),
        c = i.useMemo(() => r.fields.map((e) => ({ id: e.name, label: e.label, icon: oY.R })), [r.fields]),
        d = (0, o0.bB)(l, s),
        m = h()(o1.Lo, { [o1.jY]: d });
    return "superseded" === s
        ? (0, a.jsx)(
              "article",
              {
                  className: m,
                  children: (0, a.jsx)(v.E, {
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      tag: "span",
                      children: E.intl.string(S.default.CTxtdV),
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
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: "text-muted",
                            tag: "span",
                            children: E.intl.string(S.default.HCQvpO),
                        }),
                        (0, a.jsx)(oQ.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                    ],
                },
                s,
            )
          : "pending" === s
            ? (0, a.jsx)(
                  "article",
                  {
                      className: o1.Lo,
                      children: (0, a.jsx)(oQ.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
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
                                className: o1.$h,
                                children: [
                                    (0, a.jsx)("span", {
                                        className: o1.c9,
                                        "aria-hidden": !0,
                                        children: (0, a.jsx)(nc.y, {
                                            size: "xs",
                                            color: w.A.colors.ICON_FEEDBACK_POSITIVE,
                                        }),
                                    }),
                                    (0, a.jsx)(v.E, {
                                        variant: "text-xs/semibold",
                                        color: "text-feedback-positive",
                                        tag: "span",
                                        children: E.intl.string(S.default.sfp7Up),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(oQ.C, { label: E.intl.string(S.default.sfp7Up), size: "xs", items: c }),
                        ],
                    },
                    s,
                )
              : (0, a.jsxs)("article", {
                    className: o1.Lo,
                    children: [
                        (0, a.jsx)(v.E, {
                            variant: "text-xs/semibold",
                            color: null != o ? "text-brand" : "text-muted",
                            tag: "span",
                            children: E.intl.string(null != o ? S.default.O0QIqj : S.default.HCQvpO),
                        }),
                        (0, a.jsx)(v.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            selectable: !0,
                            children: null != r.note && "" !== r.note ? r.note : E.intl.string(S.default.MPGSHL),
                        }),
                        (0, a.jsx)(oQ.C, { label: E.intl.string(S.default.HCQvpO), size: "xs", items: c }),
                        (0, a.jsx)("div", {
                            className: o1.sq,
                            children: (0, a.jsx)(Z.$, {
                                variant: "primary",
                                size: "sm",
                                onClick: u,
                                text: E.intl.string(S.default.EK8tKY),
                            }),
                        }),
                    ],
                });
}
var o3 = n(919790),
    o5 = n(908492),
    o4 = n(971824),
    o6 = n(162052),
    o7 = n(165648);
function o8(e) {
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
        x = i.useMemo(() => (0, r5.Jf)(n, l), [n, l]),
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
            className: ah.pj,
            "data-live": !1,
            children: (0, a.jsx)(r9.A, {
                glyph: (0, a.jsx)(iE.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: E.intl.string(S.default.oOmBdX),
                live: !1,
                settled: !0,
            }),
        });
    let j = l ? void 0 : (g ?? (h ? (x.turn?.durationMs ?? o) : void 0)),
        b = f ? ((0, r5.lt)(n) ?? c ?? null) : null,
        y = null != b && b.length > 0;
    if (0 === v.steps.length && 0 === v.tasks.length && !y) return null;
    let k = v.tasks,
        w = i$(k.map((e) => e.taskId)),
        N = !p && (l || k.some((e) => "running" === e.task.status)),
        C = iU(k);
    return (0, a.jsxs)("ol", {
        className: ah.pj,
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
                let l = null != e.task.helperMark ? iL(e.task.helperMark) : void 0,
                    r = l ?? w.get(e.taskId);
                return null == r
                    ? null
                    : (0, a.jsx)(
                          iG,
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
            (0, a.jsx)(i1, { projectId: t, steps: n, tree: x, segment: m }),
            y
                ? (0, a.jsx)("li", {
                      className: ah.YO,
                      children: (0, a.jsx)(am, { todos: b, provisional: d, agents: C, live: r, superseded: s }),
                  })
                : null,
        ],
    });
}
function o9(e) {
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
            settingsRequest: p,
            publishCta: g,
            turnId: x,
            onPickIdea: j,
            pickedIdeaIds: b,
            onApprovePlan: y,
            sideReply: k = !1,
            sideReplyAcknowledges: w,
            hoistedProse: N = !1,
            hoistedAttachmentsHost: C,
            restoreProposal: A,
            onRestoreProposal: I,
            publishScheduleProposal: M,
            publishScheduleProposalCurrent: _ = !1,
        } = e,
        P = i.useMemo(
            () => iI({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        { streamed: R, lastStreamedMessage: T, showsClosingMessage: L, closingContent: $ } = P,
        D = (N ? C : void 0) ?? P.attachmentsHost,
        z = L && !N,
        O = null == u ? null : (0, a.jsx)(o3.A, { projectId: t, attachments: u }),
        F = null == O ? null : (0, a.jsx)("div", { className: ah.MT, children: O }),
        q = k
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: (function (e) {
                      switch (e) {
                          case "steered":
                              return E.intl.string(S.default.Mv5OmK);
                          case "queued":
                              return E.intl.string(S.default["Po/2mi"]);
                          case "restarting":
                              return E.intl.string(S.default.Vj0woh);
                          default:
                              return E.intl.string(S.default.gY3L8p);
                      }
                  })(w),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: ah.ue,
        children: [
            R.length > 0 && !N
                ? (0, a.jsx)("ol", {
                      className: ah.dO,
                      children: R.filter((e) => "todos" !== e.type).map((e) =>
                          (0, a.jsxs)(
                              "li",
                              {
                                  className: ah.DV,
                                  children: [
                                      (0, a.jsx)("div", {
                                          className: o7.PT,
                                          children: (0, o5.U)(e.content, !0, {
                                              allowList: !0,
                                              allowHeading: !0,
                                              allowLinks: !0,
                                          }),
                                      }),
                                      "streamed" === D && e === T ? F : null,
                                  ],
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(ob, { projectId: t, proposal: r, version: s, onApprove: y })
                : z
                  ? (0, a.jsxs)("div", {
                        className: h()(ah.ky, o6.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: h()(o7.PT, ah.cW),
                                children: (0, o5.U)($, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === D ? F : null,
                            q,
                        ],
                    })
                  : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: h()(ah.ky, o6.XR, { [o4.O]: null != m && "open" === f }),
                      children: (0, a.jsx)(o2, {
                          projectId: t,
                          cardId: d ?? "",
                          request: c,
                          status: f,
                          awaiting: "open" === f ? m : void 0,
                      }),
                  })
                : null,
            null != p
                ? (0, a.jsx)("div", {
                      className: h()(ah.ky, o6.XR),
                      children: (0, a.jsx)(ip, { projectId: t, request: p }),
                  })
                : null,
            "standalone" !== D && ("closing" !== D || z) ? null : O,
            null != g ? (0, a.jsx)(oG, { projectId: t, turnId: x ?? null, cta: g }) : null,
            null != o && o.length > 0 ? (0, a.jsx)(oZ, { ideas: o, pickedIdeaIds: b, onPick: j }) : null,
            null != A ? (0, a.jsx)(i3, { proposal: A, onRestore: I }) : null,
            null != M ? (0, a.jsx)(oW, { projectId: t, proposal: M, current: _ }) : null,
            z ? null : q,
        ],
    });
}
var ue = n(864970),
    ut = n(146806),
    un = n(475358),
    ul = n(717400),
    ur = n(99677),
    ua = n(655098),
    ui = n(234320),
    us = n(191023);
function uo(e) {
    let { projectId: t } = e;
    return (0, a.jsx)(tH.p, {
        name: E.intl.string(S.default.xhFsEP),
        thumb: (0, a.jsxs)("span", {
            className: lf.PA,
            "aria-hidden": !0,
            children: [
                (0, a.jsx)(us.ImageIcon, { size: "sm", color: "currentColor" }),
                (0, a.jsx)("span", {
                    className: lf.OY,
                    children: (0, a.jsx)(aE.PencilIcon, {
                        size: "custom",
                        width: 10,
                        height: 10,
                        color: "currentColor",
                    }),
                }),
            ],
        }),
        subText: (0, a.jsx)(v.E, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: E.intl.string(S.default["9y+Dae"]),
        }),
        children: (0, a.jsx)("button", {
            type: "button",
            className: tW.o1,
            onClick: () => {
                lo(t, (e) => ({ ...e, sketchDismissedFor: e.history.present }));
            },
            "aria-label": E.intl.string(S.default.N852dj),
            children: (0, a.jsx)(tI.a, { size: "xs", color: "currentColor" }),
        }),
    });
}
function uu(e) {
    let { send: t } = e;
    return (0, a.jsxs)(tH.p, {
        compact: !0,
        name: E.intl.string(S.default.xhFsEP),
        thumbSrc: t.thumbUrl,
        subText:
            "failed" === t.status
                ? (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      children: E.intl.string(S.default["3PeGo2"]),
                  })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: tW.Rk }) : null,
            "failed" === t.status
                ? (0, a.jsx)(aI.Q, {
                      variant: "secondary",
                      textVariant: "text-sm/medium",
                      text: E.intl.string(S.default["WFJ/vb"]),
                      onClick: t.retry,
                  })
                : null,
        ],
    });
}
var uc = n(901173),
    ud = n(161431),
    um = n(280450),
    uf = n(503275),
    uh = n(659280),
    up = n(351906),
    ug = n(407653),
    ux = n(322915);
function uv(e) {
    let { id: t, projectId: n, suggestions: l, selectedIndex: r, onHover: i, onSelect: s } = e,
        u = (0, o.bG)([up.A], () => up.A.hidePersonalInformation ?? !1),
        c = `${t}-users`,
        d = `${t}-files`;
    if (0 === l.length) return null;
    let m = l.map((e, t) =>
            "user" === e.kind
                ? (0, a.jsx)(
                      uh.Ay.User,
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
                      uh.Ay.Generic,
                      {
                          index: t,
                          text: e.file.name,
                          icon: (0, a.jsx)(ug.A, { projectId: n, file: e.file, className: ux.Vk }),
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
    return (0, a.jsx)(uh.Ay, {
        id: t,
        className: ux.nx,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, a.jsxs)("div", {
            id: t,
            role: "listbox",
            "aria-label": E.intl.string(S.default.Vb3sUg),
            children: [
                h.length > 0
                    ? (0, a.jsx)(uj, { titleId: c, title: E.intl.string(S.default.Vb3sUg), children: h })
                    : null,
                p.length > 0
                    ? (0, a.jsx)(uj, { titleId: d, title: E.intl.string(S.default.zA5KLM), children: p })
                    : null,
            ],
        }),
    });
}
function uj(e) {
    let { titleId: t, title: n, children: l } = e;
    return (0, a.jsxs)("div", {
        role: "group",
        "aria-labelledby": t,
        children: [
            (0, a.jsx)(v.E, { id: t, variant: "text-xs/semibold", color: "text-muted", className: ux.Gf, children: n }),
            l,
        ],
    });
}
var ub = n(719442),
    uy = n(355622),
    uk = n(408018),
    uw = n(186306),
    uN = n(323350),
    uC = n(35277),
    uA = n(820066),
    uS = n(683167),
    uE = n(267102),
    uI = n(259691);
let uM = (0, sN.createChannelRecord)({ id: "1", type: q.rbe.DM });
function u_(e) {
    let t = uA.VW.end(e, []);
    return { anchor: t, focus: t };
}
function uP(e) {
    return (0, uN.WO)(uA.VW.richValue(e), { mode: "raw" });
}
function uR(e, t) {
    ((e.children = (0, uk.x7)(t)), (e.selection = u_(e)), e.onChange());
}
function uT(e) {
    let { attributes: t, children: n, element: l } = e;
    if ("hostInlineVoid" !== l.type) return null;
    let r = new RegExp(ix.$c.source).exec(l.raw)?.[1];
    return null == r
        ? null
        : (0, a.jsxs)("span", { ...t, contentEditable: !1, children: [(0, a.jsx)(uI.A, { attachmentId: r }), n] });
}
var uL = n(497437);
let u$ = "text-md/normal",
    uD = null;
function uz(e) {
    let { text: t, offering: n, typed: l } = e,
        [r, s] = i.useState(t),
        u = i.useRef(null),
        c = i.useRef(null),
        d = i.useRef(0),
        [m, f] = i.useState(0),
        [p, g] = i.useState(0),
        [x, j] = i.useState({ frontFrom: 1e3, frontTo: 1e3, backFrom: 1e3, backTo: 1e3 });
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
            j({
                frontFrom: 1e3 * (0, ut._R)(m),
                frontTo: 1e3 * (0, ut._R)(h),
                backFrom: 1e3 * (0, ut.T)(m),
                backTo: 1e3 * (0, ut.T)(h),
            });
        }
        let r = new ResizeObserver(l);
        return (l(), r.observe(e), r.observe(t), null != c.current && r.observe(c.current), () => r.disconnect());
    }, [t]),
        i.useEffect(() => {
            d.current = c.current?.offsetWidth ?? 0;
        }, [t]));
    let [b, y] = i.useState(0),
        [k, w] = i.useState(null),
        N = i.useRef(!1),
        C = i.useCallback(() => {
            (w(N.current ? (n ? "through" : "out") : n ? "in" : null), y((e) => e + 1));
        }, [n]);
    i.useEffect(() => {
        N.current = n;
    }, [n, t]);
    let A = "in" === k ? x.backFrom : x.frontFrom,
        I = "out" === k ? x.frontTo : x.backTo,
        M = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
        _ = t === E.intl.string(S.default.Zc7gML),
        P = r === t && _;
    function R(e, t, n) {
        let l = null != n;
        return (0, a.jsx)("span", {
            ref: n,
            className: h()(uL.VT, { [uL.qk]: l }),
            style: l
                ? {
                      insetInlineStart: m,
                      "--custom-cap-wipe-delay": `${A}ms`,
                      "--custom-cap-wipe-duration": `${Math.max(1, I - A)}ms`,
                  }
                : void 0,
            "data-revealed": t ? "" : void 0,
            "data-wipe": l && b > 0 && null != k ? b % 2 : void 0,
            "data-wipe-kind": l ? (k ?? void 0) : void 0,
            children: (0, a.jsx)(un.e, { shortcut: "tab", className: uL.xT, keyClassName: e }),
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ue.o, {
                text: t,
                variant: u$,
                delay: null,
                duration: 1e3,
                trailingWidth: p,
                className: h()(uL.xM, { [uL.s2]: l }),
                onStart: C,
                onComplete: () => s(t),
            }),
            R(uL.IS, n || (!M && "out" === k), u),
            (0, a.jsx)("span", {
                ref: c,
                className: uL.QI,
                "aria-hidden": !0,
                children: (0, a.jsx)(v.E, { variant: u$, tag: "span", children: t }),
            }),
            P
                ? (0, a.jsxs)("span", {
                      className: uL.rL,
                      "aria-hidden": !0,
                      children: [
                          (0, a.jsx)(v.E, { variant: u$, tag: "span", className: uL.xM, children: t }),
                          R(uL.IS, !0),
                      ],
                  })
                : null,
        ],
    });
}
let uO = i.memo(function (e) {
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
                onSendToOtherProjects: f,
                suggestion: p,
                questionOpen: g = !1,
                hasPendingContext: x = !1,
                onDraftHasTextChange: v,
                modelSettings: j,
                onModelSettingsChange: b,
            } = e,
            y = (function (e) {
                let t = i.useContext(uE.Ay),
                    [n] = i.useState(() => {
                        let n = (0, ub.ie)();
                        return (
                            (n.children = (0, uk.x7)(e)),
                            (n.selection = u_(n)),
                            (0, uS.a)({
                                editor: n,
                                chatInputType: uy.oU.GENERIC_RICH_TEXTAREA,
                                channel: uM,
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
                                    for (let [t, l] of uA.VW.nodes(e, { at: [], match: uA.l5.isText }))
                                        for (let e of t.text.matchAll(ix.$c)) {
                                            let t = e.index ?? 0;
                                            n.push({ raw: e[0], path: l, start: t, end: t + e[0].length });
                                        }
                                    (n.length > 0 &&
                                        uw.o.withMergedEntry(e, () =>
                                            uA.VW.withoutNormalizing(e, () => {
                                                for (let { raw: t, path: l, start: r, end: a } of n.reverse())
                                                    uC.b.textToVoid(
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
            })(iA.getDraft(t)),
            [k, w] = i.useState(() => uP(y)),
            C = i.useRef(k),
            [A, I] = i.useState(null),
            M = i.useCallback(() => {
                let e = uP(y);
                e !== C.current &&
                    ((C.current = e),
                    tM.h.dispatch({ type: "CONJURE_COMPOSER_DRAFT_SET", projectId: t, draft: e }),
                    w(e));
                I(
                    (function (e) {
                        let { selection: t } = e;
                        if (null == t || !uA.ZF.isCollapsed(t)) return null;
                        let [n] = uA.VW.node(e, t.anchor.path);
                        return uA.l5.isText(n) ? n.text.slice(0, t.anchor.offset) : null;
                    })(y),
                );
            }, [y, t]),
            P = i.useCallback((e) => uR(y, e), [y]),
            R = "" !== k.trim();
        i.useEffect(() => v?.(R), [R, v]);
        let T = i.useRef(t);
        i.useLayoutEffect(() => {
            T.current !== t && ((T.current = t), uR(y, iA.getDraft(t)));
        }, [y, t]);
        let L = (0, o.bG)([Y.Ay], () => Y.Ay.isSubmitButtonEnabled),
            [$, D] = i.useState(!1);
        i.useEffect(() => {
            l || D(!1);
        }, [l]);
        let z = i.useRef(null),
            {
                drafts: O,
                addFiles: F,
                pasteFiles: U,
                removeDraft: G,
                settled: B,
                takeRefs: K,
            } = tZ({ projectId: t, surface: "chat", onUploadFile: c }),
            H = la.useState((e) => {
                let n = null == t ? null : e.byProject[t];
                return null != n && ln(n);
            }),
            V = "" !== k.trim() || O.length > 0 || x || H,
            W = n && V && B,
            [X, J] = i.useState(null);
        i.useEffect(() => {
            if (null == X) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => J(null));
                });
            return () => {
                (cancelAnimationFrame(t), 0 !== e && cancelAnimationFrame(e));
            };
        }, [X]);
        let Z = (function (e) {
                var t;
                let n,
                    l,
                    r,
                    a,
                    s,
                    { creator: u, collaborators: c } =
                        ((t = (0, o.bG)([eO.Ay], () => eO.Ay.getProject(e), [e])),
                        (n = t?.id),
                        (l = t?.owner_user_id),
                        (r = (0, o.yK)(
                            [lp.A],
                            () =>
                                null == n
                                    ? []
                                    : [
                                          ...new Set(
                                              lp.A.getMessages(n)
                                                  .flatMap((e) =>
                                                      null != e.user_id && e.user_id !== l ? [e.user_id] : [],
                                                  )
                                                  .reverse(),
                                          ),
                                      ],
                            [n, l],
                        )),
                        i.useEffect(() => {
                            null != l && ((0, uf.Y_)(l), r.forEach(uf.Y_));
                        }, [l, r]),
                        (a = (0, o.bG)([a_.default], () => (null == l ? null : a_.default.getUser(l)), [l])),
                        (s = (0, o.yK)(
                            [a_.default],
                            () => r.map((e) => a_.default.getUser(e)).filter((e) => null != e),
                            [r],
                        )),
                        i.useMemo(() => ({ creator: a ?? null, collaborators: s }), [a, s])),
                    d = (0, o.bG)([um.default], () => um.default.getId());
                return i.useMemo(
                    () => [...(null != u ? [u] : []), ...c].filter((e) => e.id !== d && !e.bot),
                    [u, c, d],
                );
            })(t),
            Q = (0, ud.rU)(t),
            [ee, et] = i.useState(null),
            [en, el] = i.useState(0),
            er = i.useMemo(() => (null != A && n ? (0, uc.OG)(A, A.length) : null), [A, n]),
            ea = er?.start ?? null;
        i.useEffect(() => {
            null == ea ? et(null) : (0, ud.IP)(t);
        }, [ea, t]);
        let ei = ea === ee ? null : er,
            es = i.useMemo(() => (null == ei ? [] : (0, uc.l$)(Z, Q, ei.text)), [ei, Z, Q]),
            eo = ei?.text;
        i.useEffect(() => el(0), [eo]);
        let eu = es.length > 0,
            ec = Math.min(en, Math.max(0, es.length - 1)),
            ed = i.useId(),
            em = i.useCallback(
                (e) => {
                    let t = es[e];
                    null != ei &&
                        null != t &&
                        (function (e, t, n) {
                            let { selection: l } = e;
                            if (null == l) return;
                            let { path: r, offset: a } = l.anchor;
                            (uC.b.select(e, { anchor: { path: r, offset: t }, focus: { path: r, offset: a } }),
                                uC.b.insertText(e, `${n} `));
                        })(y, ei.start, "user" === t.kind ? `<@${t.user.id}>` : `<file:${t.file.id}>`);
                },
                [es, ei, y],
            ),
            eg = i.useCallback(() => {
                if (!W) return;
                let e = K(),
                    n = H
                        ? (function (e) {
                              let t = ls(e);
                              if (null == t || !ln(t)) return null;
                              let n = t.history.present,
                                  l = rW(e);
                              return (
                                  lo(e, (e) => ({ ...e, history: n3, sketchDismissedFor: null })),
                                  function (t) {
                                      let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                                          { nonce: a, messageKey: i } = (0, _.showUserMessage)(e, t, r),
                                          s = { projectId: e, nonce: a, job: null, thumbUrl: null };
                                      (rB.set(i, s),
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
                                              capture: (t) => (0 === t ? l : rW(e)),
                                              composite: (e) => rU(e, n),
                                              upload: (t) =>
                                                  (0, ev.vX)(e, new File([t], "sketch.webp", { type: t.type })),
                                              isStaged: (t) => (0, ev.n6)(e, t.id),
                                              send: (n) => (0, _.sendUserMessage)(e, t, [...r, n], { nonce: a }),
                                              update: (e, t) => {
                                                  (null != t &&
                                                      null == s.thumbUrl &&
                                                      (s.thumbUrl = URL.createObjectURL(t)),
                                                      rH(i, {
                                                          status: e,
                                                          thumbUrl: s.thumbUrl,
                                                          retry: () => s.job?.retry(),
                                                      }),
                                                      "sent" === e &&
                                                          (rB.delete(i),
                                                          window.setTimeout(() => {
                                                              (rH(i, null),
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
                    null == uD && (uD = document.createElement("canvas").getContext("2d"));
                    let i = uD;
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
                })(uq(eN.current), eL.current, (0, uc.Lj)(k));
                ("" !== l && J(l), P(""), et(null));
            }, [W, H, t, k, s, K, P]),
            ex = i.useCallback(
                (e) => {
                    (e.preventDefault(), eg());
                },
                [eg],
            ),
            ej = i.useCallback(() => {
                null == u || $ || (D(!0), u());
            }, [u, $]),
            eb = null == p || "" !== k || !n || r || x ? null : p,
            ey = i.useCallback(
                (e) => {
                    if (eu && !e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
                        let t = es.length;
                        if ("ArrowDown" === e.key || "ArrowUp" === e.key) {
                            (e.preventDefault(), el((ec + ("ArrowDown" === e.key ? 1 : t - 1)) % t));
                            return;
                        }
                        if ("Enter" === e.key || "Tab" === e.key) {
                            (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), em(ec));
                            return;
                        }
                        if ("Escape" === e.key) {
                            (e.preventDefault(), e.stopPropagation(), et(ei?.start ?? null));
                            return;
                        }
                    }
                    if ("Escape" === e.key && l && null != u && !$) {
                        (e.preventDefault(), e.stopPropagation(), ej());
                        return;
                    }
                    if ("Tab" === e.key && !e.shiftKey && null != eb) {
                        (e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), P(eb));
                        return;
                    }
                    if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                        null != d && (e.preventDefault(), d());
                        return;
                    }
                    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), eg());
                },
                [eg, d, l, u, $, ej, eb, P, eu, es.length, ec, em, ei],
            ),
            ek = i.useCallback(
                (e) => {
                    n && U(e);
                },
                [n, U],
            );
        (0, ui.Vo)({
            event: q.jej.GLOBAL_CLIPBOARD_PASTE,
            handler: (e) => {
                let { event: t } = e;
                return ek(t);
            },
        });
        let ew = i.useCallback(
                (e) => {
                    (F(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = ""));
                },
                [F],
            ),
            eN = i.useRef(null),
            eC = i.useRef(null),
            eA = i.useCallback(() => {
                let e = C.current;
                f?.((0, uc.Lj)(e), () => {
                    C.current === e && P("");
                });
            }, [f, P]),
            eS = i.useCallback((e) => {
                let t = z.current;
                null != t && ((t.accept = e), t.click());
            }, []),
            [eE, eI] = i.useState(0),
            [eM, e_] = i.useState(!1);
        i.useEffect(() => {
            if (0 === k.length) return void e_(!1);
            let e = uq(eN.current);
            if (null != e) {
                let t = (function (e) {
                    let t = e.ownerDocument.getSelection(),
                        n = e.closest("form");
                    if (null == n || null == t || 0 === t.rangeCount || !e.contains(t.anchorNode)) return null;
                    let l = t.getRangeAt(0).getBoundingClientRect();
                    return 0 === l.height ? null : l.left - n.getBoundingClientRect().left;
                })(e);
                null != t && eI(t);
            }
            e_(!0);
            let t = setTimeout(() => e_(!1), uF);
            return () => clearTimeout(t);
        }, [k]);
        let eP = i.useMemo(() => ({ "--custom-glow-x": `${eE}px` }), [eE]),
            eR = eM ? ` ${uL.EB}` : "",
            eT = r
                ? E.intl.string(S.default.qqlUiW)
                : n
                  ? x
                      ? E.intl.string(S.default.knUjL3)
                      : g
                        ? E.intl.string(S.default.IevBEw)
                        : E.intl.string(l ? S.default["0BJa/0"] : S.default.TEeU7z)
                  : E.intl.string(S.default.zZ9NgM),
            eL = i.useRef(0),
            e$ = i.useRef(null),
            eD = i.useCallback((e) => {
                if ((e$.current?.disconnect(), null == e)) return;
                eL.current = e.clientWidth;
                let t = new ResizeObserver(() => {
                    eL.current = e.clientWidth;
                });
                (t.observe(e), (e$.current = t));
            }, []),
            ez = i.useId(),
            eF = i.useId(),
            eq = null != eb,
            eU = X ?? eb ?? eT,
            eG = "" === k && "" !== eU;
        return (0, a.jsxs)("form", {
            onSubmit: ex,
            className: uL.DA,
            children: [
                eu
                    ? (0, a.jsx)(uv, {
                          id: ed,
                          projectId: t,
                          suggestions: es,
                          selectedIndex: ec,
                          onHover: el,
                          onSelect: em,
                      })
                    : null,
                O.length > 0 || H
                    ? (0, a.jsxs)("div", {
                          className: uL.lN,
                          children: [
                              O.map((e) => (0, a.jsx)(tY, { draft: e, onRemove: G }, e.localId)),
                              H ? (0, a.jsx)(uo, { projectId: t }) : null,
                          ],
                      })
                    : null,
                (0, a.jsx)("span", { className: `${uL.wg} ${uL.LP}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsx)("span", { className: `${uL.wg} ${uL.L3}${eR}`, style: eP, "aria-hidden": !0 }),
                (0, a.jsxs)("div", {
                    className: uL.VA,
                    ref: eN,
                    children: [
                        (0, a.jsx)("input", {
                            ref: z,
                            type: "file",
                            multiple: !0,
                            onChange: ew,
                            className: uL.nY,
                            tabIndex: -1,
                            "aria-hidden": !0,
                        }),
                        (0, a.jsx)(ef.Y, {
                            targetElementRef: eC,
                            position: "top",
                            align: "left",
                            animation: ef.Y.Animation.NONE,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, a.jsx)(eh.W, {
                                    "data-menu-migrated": !0,
                                    navId: "conjure-composer-attach",
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    onClose: t,
                                    onSelect: t,
                                    children: (0, a.jsxs)(ep.rX, {
                                        children: [
                                            tS.map((e) =>
                                                (0, a.jsx)(
                                                    ep.Dr,
                                                    {
                                                        id: e.id,
                                                        label: E.intl.string(e.label),
                                                        iconLeft: e.icon,
                                                        leadingAccessory: { type: "icon", icon: e.icon },
                                                        action: () => eS(e.accept),
                                                    },
                                                    e.id,
                                                ),
                                            ),
                                            null != m
                                                ? (0, a.jsx)(ep.Dr, {
                                                      id: "import-project",
                                                      label: E.intl.string(S.default["p/k5i7"]),
                                                      iconLeft: ul.q,
                                                      leadingAccessory: { type: "icon", icon: ul.q },
                                                      action: m,
                                                  })
                                                : null,
                                            null != f
                                                ? (0, a.jsx)(ep.Dr, {
                                                      id: "send-to-other-projects",
                                                      label: E.intl.string(S.default["5HmLrK"]),
                                                      iconLeft: ur.t,
                                                      leadingAccessory: { type: "icon", icon: ur.t },
                                                      action: eA,
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
                                    ref: eC,
                                    type: "button",
                                    className: `${uL.Y0} ${uL.nu}`,
                                    disabled: !n,
                                    "aria-label": E.intl.string(E.t.d56gCa),
                                    "aria-haspopup": "menu",
                                    "aria-expanded": l,
                                    children: (0, a.jsx)(ty.PlusLargeIcon, {
                                        size: "refresh_sm",
                                        color: "currentColor",
                                        className: uL.Qu,
                                    }),
                                });
                            },
                        }),
                        eG
                            ? (0, a.jsx)("div", {
                                  ref: eD,
                                  className: uL.ar,
                                  "aria-hidden": "true",
                                  children: (0, a.jsx)(uz, { text: eU, offering: eq && null == X, typed: null != X }),
                              })
                            : null,
                        (0, a.jsx)(at.A, { id: eF, children: E.intl.string(S.default.ldNl9x) }),
                        (0, a.jsx)(ix.Fu.Provider, {
                            value: t,
                            children: (0, a.jsx)(ua.A, {
                                editor: y,
                                containerClassName: h()(uL.sq, na.dv),
                                className: uL.jp,
                                readOnly: !n,
                                canFocus: n,
                                onChange: M,
                                onBlur: () => I(null),
                                onKeyDown: ey,
                                onPaste: ek,
                                renderExtraElement: uT,
                                "aria-labelledby": eF,
                                "aria-describedby": eG ? ez : void 0,
                                "aria-autocomplete": "list",
                                "aria-haspopup": "listbox",
                                "aria-expanded": eu,
                                "aria-controls": eu ? ed : void 0,
                                "aria-activedescendant": eu ? ((0, uh.aI)(ec) ?? void 0) : void 0,
                            }),
                        }),
                        eG ? (0, a.jsx)(at.A, { id: ez, children: eT }) : null,
                        (0, a.jsx)("div", {
                            className: uL.Sz,
                            children:
                                l && null != u
                                    ? (0, a.jsx)(N.m, {
                                          text: E.intl.string(S.default.wiguT0),
                                          ariaHidden: !0,
                                          children: (0, a.jsx)("button", {
                                              type: "button",
                                              className: `${uL.Y0} ${uL.$E}`,
                                              disabled: $,
                                              onClick: ej,
                                              "aria-label": E.intl.string(S.default.wiguT0),
                                              children: (0, a.jsx)(iE.w, {
                                                  size: "custom",
                                                  width: 20,
                                                  height: 20,
                                                  color: "currentColor",
                                              }),
                                          }),
                                      })
                                    : j?.tierSettings != null && null != b
                                      ? (0, a.jsx)(ne, {
                                            settings: j.tierSettings,
                                            tiers: j.tiers,
                                            choices: j.choices,
                                            disabled: !n,
                                            onChange: b,
                                            className: `${uL.Y0} ${uL.$E}`,
                                            icon: (0, a.jsx)(tk.R, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: "currentColor",
                                            }),
                                        })
                                      : null,
                        }),
                        L
                            ? (0, a.jsxs)("div", {
                                  className: uL.fF,
                                  children: [
                                      (0, a.jsx)("div", { className: uL.MT }),
                                      (0, a.jsx)("button", {
                                          type: "submit",
                                          className: uL.rt,
                                          disabled: !W,
                                          "aria-label": E.intl.string(S.default.rxW2cl),
                                          children: (0, a.jsx)(tw.SendMessageIcon, {
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
    uF = 1500;
function uq(e) {
    return e?.querySelector("[data-slate-editor]") ?? null;
}
var uU = n(709753),
    uG = n(540338),
    uB = n(986109);
let uK = i.createContext(null);
function uH(e) {
    let {
            role: t,
            children: n,
            rowKey: l,
            anchorId: r,
            highlighted: s = !1,
            continuation: o = !1,
            onContextMenu: u,
        } = e,
        c = i.useContext(uK),
        [d, m] = i.useState(() => Y.Ay.useReducedMotion || (null != l && c?.current.has(l) === !0)),
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
        className: h()(uB.xk, { [uB.g5]: d, [uB.Qo]: s, [uB.q3]: o }),
        children: n,
    });
}
let uV = {
        id: "ideas_intro",
        priority: 1,
        resolve: function (e) {
            let { turn: t, hasPublished: n, justRemixed: l } = e;
            return (null != t && n) || l ? "card" : null;
        },
        dismissal: "app",
    },
    uW = new Map();
function uX(e, t, n) {
    let l = 0;
    for (let r = e.length - 1; r >= 0 && e[r].created_at > t; r--) {
        let t = e[r];
        "user" === t.role && (null == t.user_id || t.user_id === n) && l++;
    }
    return l;
}
function uJ(e, t) {
    return null != e && e > 0 && e < t;
}
let uZ = "ideas",
    uY = "live_behind",
    uQ = "conjureTipDismissals",
    u0 = new Set(),
    u1 = new Set(),
    u2 = 0;
function u3() {
    let e = W.w.get(uQ);
    return { forever: e?.forever ?? [], app: e?.app ?? {} };
}
function u5(e, t) {
    switch (e.dismissal) {
        case void 0:
            return !1;
        case "session":
            var n;
            return u0.has(((n = e.id), `${t}:${n}`));
        case "app":
            return u3().app[t]?.includes(e.id) === !0;
        case "forever":
            return u3().forever.includes(e.id);
    }
}
function u4(e) {
    return (u1.add(e), () => u1.delete(e));
}
let u6 = [12e4, 6e4];
var u7 = n(292771);
function u8(e) {
    let { presentation: t, render: n } = e,
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
    let p = r.some((e) => e.leaving);
    return (
        i.useEffect(() => {
            if (!p) return;
            let e = setTimeout(() => s((e) => e.filter((e) => !e.leaving)), 260);
            return () => clearTimeout(e);
        }, [p, r]),
        (0, a.jsx)("div", {
            ref: c,
            className: u7.wg,
            children: r.map((e) =>
                (0, a.jsx)(
                    "div",
                    {
                        "data-tip-layer": e.leaving ? "leaving" : "active",
                        "aria-hidden": e.leaving || void 0,
                        className: h()(u7.qd, e.leaving ? u7.dv : u7.Hu),
                        children: n(e.presentation),
                    },
                    e.presentation,
                ),
            ),
        })
    );
}
var u9 = n(443865),
    ce = n(247171);
function ct(e) {
    let { icon: t, tone: n, firstLine: l, className: r, children: i } = e;
    return (0, a.jsxs)("div", {
        className: h()(ce.row, r),
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: l,
                color: "none",
                className: h()(ce.gutter, ce[n]),
                "aria-hidden": !0,
                children: (0, a.jsx)(t, { size: "sm", color: "currentColor", "data-conjure-tip-icon": !0 }),
            }),
            (0, a.jsx)("div", { className: ce.content, children: i }),
        ],
    });
}
var cn = n(716502);
function cl(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ct, {
        icon: t,
        tone: "brand",
        firstLine: "text-md/semibold",
        className: cn.Nr,
        children: (0, a.jsxs)("section", {
            className: cn.Qs,
            children: [
                l,
                null != n
                    ? (0, a.jsx)("div", {
                          className: cn.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eX.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: em.P,
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
function cr(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-md/semibold",
        color: "text-strong",
        className: cn.DD,
        children: t,
    });
}
function ca(e) {
    let { children: t } = e;
    return (0, a.jsx)(v.E, {
        tag: "div",
        variant: "text-sm/normal",
        color: "text-muted",
        className: cn.rf,
        children: t,
    });
}
function ci(e) {
    let { children: t } = e;
    return (0, a.jsx)("div", { className: cn.o1, children: t });
}
let cs = {
    ...uV,
    render: (e, t) => {
        let {
            context: { onAskForIdeas: n },
            dismiss: l,
        } = t;
        return (0, a.jsxs)(cl, {
            icon: u9.LightbulbIcon,
            onDismiss: l,
            children: [
                (0, a.jsx)(cr, { children: E.intl.string(S.default.OJlbhX) }),
                (0, a.jsx)(ca, { children: E.intl.string(S.default["3vJBni"]) }),
                (0, a.jsx)(ci, {
                    children: (0, a.jsx)(Z.$, {
                        variant: "primary",
                        size: "sm",
                        text: E.intl.string(S.default["U/bLzU"]),
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
var co = n(830205);
function cu(e) {
    let { icon: t, onDismiss: n, children: l } = e;
    return (0, a.jsx)(ct, {
        icon: t,
        tone: "muted",
        firstLine: "text-sm/normal",
        className: co.aK,
        children: (0, a.jsxs)("div", {
            className: co.n8,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "div",
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: co.Qq,
                    children: l,
                }),
                null != n
                    ? (0, a.jsx)("div", {
                          className: co.X8,
                          children: (0, a.jsx)(N.m, {
                              text: E.intl.string(E.t.WAI6xu),
                              asContainer: !0,
                              children: (0, a.jsx)(eX.K, {
                                  "aria-label": E.intl.string(E.t.WAI6xu),
                                  icon: em.P,
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
var cc = n(95635);
let cd = [
    {
        id: uY,
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
                (null != t.publishCta && oN(n, t.publishCta)) ||
                uJ(e.messagesSinceShown(uY), 10)
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
                ? (0, a.jsx)(cu, {
                      icon: cc.UploadIcon,
                      onDismiss: l,
                      children: E.intl.format(S.default.fWfeZ8, { onPublish: () => n.run("outdated_notice") }),
                  })
                : null;
        },
    },
    cs,
    {
        id: uZ,
        priority: 1,
        resolve: function (e) {
            let { turn: t, draftHasText: n, publishedSinceLastMessage: l, idleMs: r } = e;
            return null == t ||
                n ||
                !l ||
                r < 6e4 ||
                null == e.onAskForIdeas ||
                !e.isDismissed(uV) ||
                0 === e.messagesSinceShown(uV.id) ||
                uJ(e.messagesSinceShown(uZ), 25)
                ? null
                : "hint";
        },
        dismissal: "app",
        render: (e, t) => {
            let { context: n, dismiss: l } = t;
            return (0, a.jsx)(cu, {
                icon: u9.LightbulbIcon,
                onDismiss: l,
                children: E.intl.format(S.default.cjZvW9, { onInspire: () => n.onAskForIdeas?.() }),
            });
        },
    },
];
var cm = n(817921);
function cf(e) {
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
                    ((s = (0, e5.Ay)(t)),
                    (u = (0, o.bG)([a_.default], () => a_.default.getCurrentUser()?.id)),
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
                        u6,
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
                                        if ((0, r4.BL)(n)) return n;
                                        if (!(0, r4.B0)(e, t)) break;
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
                        publishedSinceLastMessage: null != p && 0 === uX(n, p, u),
                        messagesSinceShown: (e) => {
                            let l = uW.get(`${t}:${e}`);
                            return null != l ? uX(n, l, u) : null;
                        },
                        isDismissed: (e) => u5(e, t),
                        onAskForIdeas: r,
                    });
            i.useSyncExternalStore(u4, () => u2);
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
                })(e, g, (e) => u5(e, t)),
                j = [x, v].filter((e) => null != e);
            return (
                i.useEffect(() => {
                    let e = Date.now();
                    for (let { tip: n } of j)
                        0 !== g.messagesSinceShown(n.id) &&
                            (function (e, t, n) {
                                uW.set(`${e}:${t}`, n);
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
                                          if (!(null == e.dismissal || u5(e, t))) {
                                              if ("session" === e.dismissal) {
                                                  var n;
                                                  u0.add(((n = e.id), `${t}:${n}`));
                                              } else {
                                                  let n = u3();
                                                  W.w.set(
                                                      uQ,
                                                      "forever" === e.dismissal
                                                          ? { ...n, forever: [...n.forever, e.id] }
                                                          : {
                                                                ...n,
                                                                app: { ...n.app, [t]: [...(n.app[t] ?? []), e.id] },
                                                            },
                                                  );
                                              }
                                              (u2++, u1.forEach((e) => e()));
                                          }
                                      })(e.tip, t)
                                : void 0,
                    },
                }))
            );
        })(cd, t, n, l, r);
    return 0 === s.length
        ? null
        : (0, a.jsx)(uH, {
              role: "assistant",
              continuation: !0,
              children: (0, a.jsx)("div", {
                  className: cm.X,
                  children: s.map((e) => {
                      let { tip: t, presentation: n, options: l } = e;
                      return (0, a.jsx)(u8, { presentation: n, render: (e) => t.render(e, l) }, t.id);
                  }),
              }),
          });
}
var ch = n(52133),
    cp = n(732159),
    cg = n(888366),
    cx = n(862026),
    cv = n(291192);
function cj(e) {
    let { projectId: t, contextSwitch: n } = e,
        l = i.useId(),
        r = (0, cx.L)(t, n);
    if (null == r) return null;
    let { action: s } = r;
    return (0, a.jsxs)("div", {
        className: cv.Ac,
        role: "group",
        "aria-labelledby": l,
        children: [
            (0, a.jsxs)("div", {
                className: cv.Sp,
                children: [
                    (0, a.jsx)("span", { className: cv.q3 }),
                    (0, a.jsxs)("span", {
                        className: cv.g8,
                        children: [
                            (0, a.jsx)(cg.g, { size: "xs", color: "currentColor", "aria-hidden": !0 }),
                            (0, a.jsx)(v.E, {
                                id: l,
                                tag: "span",
                                variant: "text-xs/semibold",
                                color: "text-default",
                                children: r.label,
                            }),
                        ],
                    }),
                    (0, a.jsx)("span", { className: cv.q3 }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: cv.nM,
                role: "status",
                children: [
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: [
                            r.body,
                            null != s
                                ? (0, a.jsxs)(a.Fragment, {
                                      children: [
                                          " ",
                                          (0, a.jsx)(aI.Q, {
                                              text: s.text,
                                              textVariant: "text-sm/medium",
                                              disabled: s.disabled,
                                              onClick: () => {
                                                  var e;
                                                  return s.confirm
                                                      ? ((e = s.onPress),
                                                        void (0, tt.openModalLazy)(() =>
                                                            Promise.resolve((t) =>
                                                                (0, a.jsx)(cp.u, {
                                                                    ...t,
                                                                    title: E.intl.string(S.default["i+xjZM"]),
                                                                    subtitle: E.intl.string(S.default.fMBZmD),
                                                                    confirmText: E.intl.string(S.default.i5f3Uo),
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
                        ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: r.note })
                        : null,
                ],
            }),
        ],
    });
}
function cb(e) {
    return (0, o.bG)([eO.Ay, ti.A], () => {
        let t = eO.Ay.getProject(e);
        return null == t ? "" : (ti.A.getApplication(t.application_id)?.name ?? t.name);
    });
}
var cy = n(951465),
    ck = n(369455);
function cw(e) {
    let { projectId: t, notice: n } = e,
        l = cb(t),
        r = (0, o.bG)([eO.Ay, d.A], () => {
            let e = eO.Ay.getProject(t);
            return null == e || "user" === e.install_scope || null == e.guild_id
                ? null
                : (d.A.getGuild(e.guild_id)?.name ?? null);
        });
    return (0, a.jsxs)(v.E, {
        variant: "text-md/normal",
        color: "text-default",
        children: [
            E.intl.format(
                !0 === n.channel_skipped
                    ? S.default.ev23Cw
                    : n.update
                      ? S.default.gQzuLC
                      : null == r
                        ? S.default.MOrR29
                        : S.default["/npn7F"],
                { name: l, server: r ?? "" },
            ),
            n.update && null != n.published_revision ? (0, a.jsx)(cN, { projectId: t, notice: n }) : null,
        ],
    });
}
function cN(e) {
    let { projectId: t, notice: n } = e,
        l = (function (e, t) {
            let n = s.useContext(e5.bI)?.guildId ?? null,
                l = t.published_revision ?? null,
                { sent: r, canOffer: a } = (0, o.cf)(
                    [l2.A, eO.Ay],
                    () => {
                        let r = l2.A.getPublishStatus(e),
                            a = eO.Ay.getProject(e);
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
                                (0, eO.jf)(a),
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
                      ? E.intl.format(S.default["35VEu5"], {
                            sentHook: (e, t) =>
                                (0, a.jsx)(
                                    C.D,
                                    {
                                        tag: "a",
                                        role: "link",
                                        className: ck.Z,
                                        onClick: () =>
                                            (function (e) {
                                                let { guildId: t, channelId: n, messageId: l } = e;
                                                (0, u.pX)(q.BVt.CHANNEL(t, n, l));
                                            })(l.sent),
                                        children: e,
                                    },
                                    t,
                                ),
                        })
                      : E.intl.format(S.default["6/zJpD"], {
                            onSend: () => {
                                let e = (function (e, t) {
                                    let { publishedRevision: n, fallbackGuildId: l } = t,
                                        r = eO.Ay.getProject(e),
                                        a = null == r ? null : (0, e5.KL)(r, l);
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
                                null != e && (0, cy.A)(e);
                            },
                        }),
              ],
          });
}
var cC = n(940874),
    cA = n(565645),
    cS = n(187308),
    cE = n(981879);
function cI(e) {
    let { reaction: t } = e;
    return (0, a.jsx)("div", {
        className: cE.H,
        children: (0, a.jsx)(cA.A, {
            emojiId: t.emojiId,
            emojiName: t.emoji,
            animated: t.animated,
            shouldAnimate: !0,
            alt: (0, cS.pW)(t),
            size: "reaction",
        }),
    });
}
n(775443);
var cM = n(616e3),
    c_ = n(155899),
    cP = n(521981),
    cR = n(491182),
    cT = n(438729),
    cL = n(622868),
    c$ = n(448368),
    cD = n(837528),
    cz = n(470964),
    cO = n(715628),
    cF = n(752636),
    cq = n(9842),
    cU = n(589022),
    cG = n(994500),
    cB = n(967198);
let cK = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function cH(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function cV(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function cW(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let r = cV(e, t),
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
    if (cH(r) && cH(a)) {
        let n = 0,
            l = t;
        for (; n < 32 && cH(cV(e, l));) (n++, (l -= 2));
        return n % 2 == 1;
    }
    return !1;
}
function cX(e, t) {
    let { streaming: n } = t,
        l = (0, o.bG)([Y.Ay], () => Y.Ay.useReducedMotion),
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
                      for (; a > 0 && cW(t, a);) a--;
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
                                    for (; l > t + 1 && n - l < 12 && cK.has(e.charAt(l - 1));) l--;
                                    return cK.has(e.charAt(l - 1)) ? n : l;
                                })(t, r, Math.min(t.length, r + i));
                                let o = s;
                                for (; o < t.length && o - s < 32 && cW(t, o);) o++;
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
var cJ = n(624479),
    cZ = n(890377),
    cY = n(180227);
function cQ(e) {
    let { groupStart: t, actions: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)("div", {
              className: h()(cY.QE, { [cY.Rn]: t }),
              children: (0, a.jsx)(sQ.Ay, {
                  children: n.map((e) =>
                      (0, a.jsx)(
                          sQ.qv,
                          { label: e.label, tooltipText: e.tooltip, icon: e.icon, onClick: e.onClick },
                          e.id,
                      ),
                  ),
              }),
          });
}
function c0(e) {
    return eQ.p5 && 0 !== e.length
        ? [{ id: "copy-text", label: E.intl.string(E.t.JrGD7E), icon: cJ.CopyIcon, onClick: () => (0, eQ.C)(e) }]
        : [];
}
function c1(e) {
    let { content: t, groupStart: n, onQueuedAction: l } = e,
        r =
            null == l
                ? []
                : [
                      {
                          id: "steer",
                          label: E.intl.string(S.default.CXtLD2),
                          tooltip: E.intl.string(S.default.DOb1HM),
                          icon: cZ.V,
                          onClick: () => l("steer"),
                      },
                      {
                          id: "remove-from-queue",
                          label: E.intl.string(S.default.urZwpN),
                          icon: em.P,
                          onClick: () => l("cancel"),
                      },
                  ];
    return (0, a.jsx)(cQ, { groupStart: n, actions: [...r, ...c0(t)] });
}
function c2(e) {
    let { content: t, groupStart: n, onRestoreVersion: l, onViewTrace: r } = e,
        i =
            null == l
                ? []
                : [{ id: "restore-version", label: E.intl.string(S.default.H8Jfhu), icon: rv.e, onClick: l }],
        s = null == r ? [] : [{ id: "view-trace", label: "View Trace", icon: n_.BugIcon, onClick: r }];
    return (0, a.jsx)(cQ, { groupStart: n, actions: [...i, ...c0(t), ...s] });
}
let c3 = (0, sN.createChannelRecord)({ id: "conjure-builder", type: q.rbe.DM }),
    c5 = {
        id: "conjure-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function c4(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: h()(cY.Yq, { [cY.x1]: t }), children: e });
}
function c6(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
let c7 = { hideSimpleEmbedContent: !0, allowList: !0, allowHeading: !0, allowLinks: !0, previewLinkTarget: !0 };
function c8(e, t, n) {
    let { content: l } = (0, cz.A)(e, c7),
        r = i.useMemo(() => ((0, ix.aW)(e.content) ? (0, cP.z2)(o5.U, e, c7).content : null), [e]) ?? l,
        s = i.useMemo(() => ({ message: e, channel: c3, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(cT.Ay, { className: n, message: e, content: r, compact: !1 })
          : (0, cO.A)(s, r);
}
function c9(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, cD.m)(e, c3, t.usernameProfile, l),
        u = (0, cD.Jo)(t.avatarProfile, l),
        c = (0, o.bG)([cB.A], () => cB.A.getGuildId()),
        d = (0, o.bG)([a_.default], () => a_.default.getCurrentUser()),
        m = i.useCallback(
            (t) => {
                let n = a_.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(cU.A, { ...t, user: n, currentUser: d, guildId: c ?? void 0 });
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
function de(e) {
    let { baseMessage: t, referenced: n, selected: l, onJumpToReplied: r } = e,
        s = i.useMemo(() => {
            let e = { formatInline: !0, allowGameMentions: !0 },
                t =
                    "" === n.content
                        ? null
                        : (0, ix.aW)(n.content)
                          ? (0, cP.z2)(o5.U, n, e).content
                          : (0, cP.Ay)(n, e).content;
            return null == l
                ? t
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsxs)("span", {
                              className: cY.GV,
                              children: [
                                  (0, a.jsx)(nM.x, {
                                      className: cY.Rj,
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
            [cG.A],
            () => ({
                isReplyAuthorBlocked: cG.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: cG.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        d = (0, sZ.X4)(n),
        m = (0, sZ.X4)(t),
        f = c9(n);
    return (0, a.jsx)(c$.A, {
        repliedAuthor: d,
        baseAuthor: m,
        baseMessage: t,
        channel: c3,
        referencedMessage: { state: cq.a.LOADED, message: n },
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
function dt(e) {
    let { message: t, author: n } = e,
        l = c9(t);
    return (0, a.jsx)(cL.Ay, {
        message: t,
        channel: c3,
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
function dn(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s, onQueuedAction: o } = e,
        u = (0, uf.vm)(l),
        c = i.useMemo(() => (0, sZ.FT)(u, null), [u]),
        d = i.useMemo(() => nB(t), [t]),
        m = d?.body ?? t,
        f = (0, uc.Qu)(m),
        h = i.useMemo(() => {
            if (null == u) return null;
            let e = (0, sw.Ay)({ channelId: c3.id, content: m, author: u });
            return (0, sk.rh)({ ...e, timestamp: c6(n, e.timestamp), state: q.cmJ.SENT });
        }, [m, u, n]);
    return null == h
        ? null
        : (0, a.jsx)(
              dl,
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
function dl(e) {
    let { message: t, author: n, content: l, selected: r, accessories: i, groupStart: s = !0, onQueuedAction: o } = e,
        u = c8(t, l);
    return (0, a.jsx)(cR.A, {
        className: cY.yE,
        author: n,
        childrenHeader: s ? (0, a.jsx)(dt, { message: t, author: n }) : void 0,
        childrenMessageContent:
            null == r
                ? u
                : (0, a.jsxs)("div", {
                      className: cY.zq,
                      children: [
                          (0, a.jsxs)("span", {
                              className: cY.GV,
                              children: [
                                  (0, a.jsx)(nM.x, {
                                      className: cY.Rj,
                                      color: "currentColor",
                                      size: "custom",
                                      width: 16,
                                      height: 16,
                                  }),
                                  r,
                              ],
                          }),
                          (0, a.jsx)("span", { className: cY.WO, children: u }),
                      ],
                  }),
        childrenAccessories: c4(i, "" !== l),
        childrenButtons: (0, a.jsx)(c1, { content: l, groupStart: s, onQueuedAction: o }),
    });
}
function dr(e) {
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
        { text: m, revealing: f } = cX(t, { streaming: (0, o.bG)([tN.A], () => c && tN.A.isFocused(), [c]) }),
        h = i.useMemo(() => (0, sZ.FT)(null, null), []),
        p = i.useMemo(() => ({ ...h, nick: "Conjure", colorString: "var(--text-brand)" }), [h]),
        g = r?.userId,
        x = (0, uf.vm)(g),
        v = i.useMemo(() => (null == r ? null : nB(r.content)), [r]),
        j = i.useMemo(() => {
            if (null == r || null == x) return null;
            let e = (0, sw.Ay)({ channelId: c3.id, content: v?.body ?? r.content, author: x });
            return (0, sk.rh)({ ...e, id: r.id, timestamp: c6(r.createdAt, e.timestamp), state: q.cmJ.SENT });
        }, [r, v, x]),
        b = i.useMemo(() => (null == r ? void 0 : { channel_id: c3.id, message_id: r.id }), [r]),
        [y] = i.useState(() => (0, sw.Ay)({ channelId: c3.id, content: "", author: c5 })),
        k = i.useMemo(
            () =>
                (0, sk.rh)({
                    ...y,
                    timestamp: c6(n, y.timestamp),
                    state: q.cmJ.SENT,
                    ...(null != b ? { type: q.lAJ.REPLY, message_reference: b } : {}),
                }),
            [y, n, b],
        ),
        w = i.useMemo(() => k.set("content", m), [k, m]),
        N = i.useMemo(
            () => (0, cF.A)({ message: k, channel: c3, author: p, guildId: void 0, isGroupStart: u }),
            [k, p, u],
        ),
        C = c8(w, m, cY.OS);
    return (0, a.jsxs)("div", {
        className: cY.$4,
        "data-replying": null != j ? "true" : void 0,
        "data-conjure-revealing": f ? "true" : void 0,
        children: [
            (0, a.jsx)(cR.A, {
                className: cY.yE,
                author: p,
                childrenRepliedMessage:
                    null == j
                        ? null
                        : (0, a.jsx)(de, { baseMessage: k, referenced: j, selected: v?.label, onJumpToReplied: s }),
                childrenHeader: N,
                childrenMessageContent: C,
                childrenAccessories: c4(l, "" !== m),
                disableInteraction: !0,
            }),
            d,
            u
                ? (0, a.jsx)("span", {
                      className: cY.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(et.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
function da(e) {
    let { onSelect: t, onClose: n = eD.Z_, onRestoreVersion: l, onViewTrace: r } = e;
    return (0, a.jsx)(eh.W, {
        "data-menu-migrated": !0,
        navId: "conjure-turn-context",
        onClose: n,
        "aria-label": E.intl.string(E.t.ogxXGq),
        onSelect: t,
        children: (0, a.jsxs)(ep.rX, {
            children: [
                null != l
                    ? (0, a.jsx)(ep.Dr, {
                          id: "restore-version",
                          label: E.intl.string(S.default.H8Jfhu),
                          icon: rv.e,
                          action: l,
                      })
                    : null,
                null != r
                    ? (0, a.jsx)(ep.Dr, { id: "view-trace", label: "View Trace", icon: n_.BugIcon, action: r })
                    : null,
            ],
        }),
    });
}
function di(e) {
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
        j = null != v && null != g ? () => ds(v, g) : void 0,
        b =
            ((t =
                lb() && "assistant" === x.role && (0, r4.BL)(x)
                    ? (x.turn_id ?? x.steps.find((e) => null != e.turn_id)?.turn_id ?? x.id.replace(/^turn:/, ""))
                    : null),
            (0, o.bG)(
                [cM.A],
                () => {
                    let e =
                        null == t
                            ? null
                            : cM.A.getTimingTraces(l).findLast((e) => {
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
                          for (let n of ((lx = { projectId: e, traceId: t }), [...lg])) n(e);
                      })(l, b)
                : void 0,
        k = x.in_reply_to,
        w = x.restoreProposal;
    return (0, a.jsx)(uH, {
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
                          void (0, eD.jA)(t, (e) => (0, a.jsx)(da, { ...e, onRestoreVersion: n, onViewTrace: l }))
                      );
                  }
                : void 0,
        children: (0, a.jsx)(dr, {
            groupStart: n.groupStart,
            buttons: (0, a.jsx)(c2, {
                groupStart: n.groupStart,
                content: n.content,
                onRestoreVersion: j,
                onViewTrace: y,
            }),
            content: n.content,
            createdAt: x.created_at,
            replyTo: r,
            onJumpToReplied: null != k && null != i ? () => i(k) : void 0,
            accessories: (0, a.jsx)(o9, {
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
                turnId: (0, r4.lb)(x) ?? void 0,
                onPickIdea: h,
                onApprovePlan: p,
                restoreProposal: w,
                publishScheduleProposal: x.publishScheduleProposal,
                publishScheduleProposalCurrent: f,
                onRestoreProposal:
                    null != w && null != g && f
                        ? () =>
                              ds(
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
function ds(e, t) {
    (0, c_.F)({ onConfirm: () => t(e) });
}
var du = n(288539);
function dc(e, t, n) {
    return (0, a.jsx)(du.A, { userId: e, content: `@${t}` }, n);
}
function dd(e) {
    let t,
        { projectId: n, event: l } = e,
        r = (function (e, t, n) {
            let l = t.actor_user_id;
            i.useEffect(() => (0, uf.Y_)(l), [l]);
            let r = (0, o.bG)([a_.default], () => (null == l ? null : a_.default.getUser(l)), [l]),
                a = (0, sA.tx)(r),
                s = cb(e),
                u =
                    (0, o.bG)([d.A], () => (null == t.guild_id ? null : d.A.getGuild(t.guild_id)?.name), [
                        t.guild_id,
                    ]) ?? E.intl.string(S.default.R1tPlP),
                c = null == r || null == a ? null : { user: a, userHook: (e, t) => n(r.id, a, t) };
            switch (t.type) {
                case "app_removed":
                    return null == c
                        ? E.intl.format(S.default.Lwsrhg, { app: s, server: u })
                        : E.intl.format(S.default.qqePfT, { app: s, server: u, ...c });
                case "bot_removed":
                    return null == c
                        ? E.intl.format(S.default.mT7EQG, { app: s, server: u })
                        : E.intl.format(S.default["lA/crI"], { app: s, server: u, ...c });
                case "preview_bot_removed":
                    return null == c
                        ? E.intl.format(S.default["4LVIeo"], { app: s, server: u })
                        : E.intl.format(S.default.YJOV6D, { app: s, server: u, ...c });
                case "app_channel_deleted": {
                    let e = t.channel_name ?? "";
                    return null == c
                        ? E.intl.format(S.default["4VQfid"], { channel: e, server: u })
                        : E.intl.format(S.default.RlMIJN, { channel: e, server: u, ...c });
                }
                case "remixed":
                    return E.intl.format(S.default.mHCXtm, { source: t.source_name });
            }
        })(n, l, dc),
        s =
            ((t = "remixed" === l.type ? l.settings_keys : void 0),
            (0, o.bG)([e4.A], () => null != t && t.length > 0 && id({ keys: t }, e4.A.getSettings(n)), [t, n]) &&
            null != t
                ? { keys: t, note: E.intl.string(S.default.F2yVHg) }
                : null);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(v.E, { variant: "text-md/normal", color: "text-default", children: r }),
            null != s ? (0, a.jsx)(ip, { projectId: n, request: s, notifyAgent: !1 }) : null,
        ],
    });
}
let dm = i.memo(
        function (e) {
            var t;
            let { row: n, projectId: l, highlighted: r, currentUserId: i, ...s } = e,
                o = n.message,
                u =
                    ((t = "user" === n.kind ? o.id : null),
                    rK.useState((e) => (null == t ? null : (e.byMessageKey[t] ?? null))));
            switch (n.kind) {
                case "user": {
                    let e = (0, ix.DW)(o.attachments, o.content),
                        t = null != e && e.length > 0 ? e : null;
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "user",
                        anchorId: o.id,
                        highlighted: r,
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dn, {
                            groupStart: n.groupStart,
                            content: o.content,
                            createdAt: o.created_at,
                            userId: o.user_id,
                            accessories:
                                null != t || null != u || null != o.agentReaction
                                    ? (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              null != t ? (0, a.jsx)(o3.A, { projectId: l, attachments: t }) : null,
                                              null != u ? (0, a.jsx)(uu, { send: u }) : null,
                                              null != o.agentReaction
                                                  ? (0, a.jsx)(cI, { reaction: o.agentReaction })
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
                                    return (n) => (0, cC.tp)(e, t.id, n);
                            })(l, o, i),
                        }),
                    });
                }
                case "prose":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dr, {
                            groupStart: n.groupStart,
                            content: n.content,
                            streaming: n.streaming,
                            createdAt: o.created_at,
                            accessories:
                                n.hostsAttachments && null != o.attachments
                                    ? (0, a.jsx)(o3.A, { projectId: l, attachments: o.attachments })
                                    : void 0,
                        }),
                    });
                case "activity":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o8, {
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
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dr, {
                            groupStart: n.groupStart,
                            content: null == o.publishNotice ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.publishNotice
                                    ? void 0
                                    : (0, a.jsx)(cw, { projectId: l, notice: o.publishNotice }),
                        }),
                    });
                case "projectEvent":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        continuation: !n.groupStart,
                        children: (0, a.jsx)(dr, {
                            groupStart: n.groupStart,
                            content: null == o.projectEvent ? o.content : "",
                            createdAt: o.created_at,
                            accessories:
                                null == o.projectEvent
                                    ? void 0
                                    : (0, a.jsx)(dd, { projectId: l, event: o.projectEvent }),
                        }),
                    });
                case "contextBoundary":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children:
                            null == o.contextSwitch
                                ? null
                                : (0, a.jsx)(cj, { projectId: l, contextSwitch: o.contextSwitch }),
                    });
                case "interrupted":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o8, { projectId: l, interrupted: !0, steps: o.steps }),
                    });
                case "legacyTodos":
                    return (0, a.jsx)(uH, {
                        rowKey: n.key,
                        role: "assistant",
                        children: (0, a.jsx)(o8, {
                            projectId: l,
                            steps: df,
                            active: !1,
                            checklistSuperseded: n.checklistSuperseded,
                            todos: o.todos,
                            provisionalTodo: o.provisionalTodo,
                        }),
                    });
                case "closing":
                    return (0, a.jsx)(di, { row: n, projectId: l, ...s });
            }
        },
        function (e, t) {
            return (
                (0, ch.A)(e, t, ["row", "replyTo", "planVersion", "pickedIdeaIds"]) &&
                (0, ch.A)(e.row, t.row, ["message"]) &&
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
                (0, ch.A)(e.replyTo, t.replyTo) &&
                (0, ch.A)(e.planVersion, t.planVersion) &&
                (function (e, t) {
                    if (e === t) return !0;
                    if (null == e || null == t || e.size !== t.size) return !1;
                    for (let n of e) if (!t.has(n)) return !1;
                    return !0;
                })(e.pickedIdeaIds, t.pickedIdeaIds)
            );
        },
    ),
    df = [],
    dh = /^\s*sandbox operation\s+\S+\s+was interrupted\b/i,
    dp = new WeakMap();
function dg(e, t, n) {
    let l = Math.max(0, Math.min(e.length, n)),
        r = Math.max(0, Math.min(l, t));
    return { start: r, end: l, startKey: e[r] ?? null, endKey: l >= e.length ? null : (e[l - 1] ?? null) };
}
function dx(e, t, n) {
    if (null == t) return n;
    let l = e.indexOf(t);
    return -1 === l ? n : l;
}
let dv = i.memo(function (e) {
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
            scrollerRef: p,
            stickToBottomRef: g,
            pinned: x,
            onUnpin: j,
            handleRef: b,
            onShowsLatestChange: y,
        } = e,
        k = i.useRef(null),
        [w, N] = i.useState(null),
        C = i.useCallback((e) => {
            ((k.current = e), N(e));
        }, []),
        [A, I] = i.useState(null),
        M = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(M.current), []);
    let P = i.useCallback((e) => {
            (I(e), window.clearTimeout(M.current), (M.current = window.setTimeout(() => I(null), 1600)));
        }, []),
        R = (0, o.bG)([l2.A], () => l2.A.getPublishStatus(t)),
        T = (0, o.bG)([a_.default], () => a_.default.getCurrentUser()?.id),
        L = i.useMemo(() => {
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
                                        let t = (0, r5.lt)(e.steps);
                                        return null != t ? t : null != e.todos && e.todos.length > 0 ? e.todos : null;
                                    })(r) &&
                                (n && t.add(r.render_id), (n = !0));
                        }
                        return t;
                    })(e);
                for (let r of e) {
                    let e = l.has(r.render_id),
                        a = null != r.clarification && r.clarification.id === t,
                        i = dp.get(r);
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
                        let a = !(0, r4.BL)(e),
                            i = iI({
                                steps: e.steps,
                                content: e.content,
                                hasProposal: null != e.proposal,
                                hasLiveClarification: n,
                                hasAttachments: (e.attachments?.length ?? 0) > 0,
                            }),
                            s = i.lastStreamedMessage?.key,
                            o = (0, r5.C6)(e.steps, { turnActive: a }),
                            { lastWork: u, open: c } = (0, r5.CT)(o, { turnActive: a }),
                            d = o.at(-1)?.index,
                            m = !1;
                        for (let n of o) {
                            if (null != n.prose && dh.test(n.prose.content)) m = !0;
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
                                        turnActive: r6(e),
                                        checklistSuperseded: n.hasTodos && t,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        let f = dh.test(e.content ?? "");
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
                    (dp.set(r, { superseded: e, liveCard: a, planned: s }), n.push(...s));
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
                        if (null != l) return ow(l, t) ? e[n].id : null;
                    }
                    return null;
                })(n, R)),
                n.every((t) => null == t.publishCta || t.id === e)
                    ? n
                    : n.map((t) => {
                          if (null == t.publishCta || t.id === e) return t;
                          let n = oC.get(t);
                          return (null == n && ((n = { ...t, publishCta: null }), oC.set(t, n)), n);
                      })),
                m,
            );
        }, [n, R, m]),
        $ = i.useMemo(() => L.map((e) => e.key), [L]),
        [D, z] = i.useState(null),
        O = (function (e, t, n) {
            if (null == t) return dg(e, e.length - 60, e.length);
            let l = null == t.endKey,
                r = l ? e.length : dx(e, t.endKey, t.end - 1) + 1,
                a = dx(e, t.startKey, t.start);
            return (l && n && r - a > 120 && (a = r - 60), dg(e, a, r));
        })($, D, x),
        F = i.useRef(O),
        q = i.useRef($),
        U = i.useRef(L),
        G = i.useRef(null),
        B = i.useRef(null),
        K = i.useRef(new Set()),
        H = i.useCallback(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
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
            G.current = null != i && null != s ? { key: s, offset: i.getBoundingClientRect().top - n } : null;
        }, [p]),
        V = i.useCallback(() => {
            let e = p.current?.getScrollerNode();
            if (null == e) return;
            let n = (function (e, t, n) {
                let { nearTop: l, nearBottom: r, pinned: a } = n;
                if (r && null != t.endKey) {
                    let n;
                    return ((n = Math.min(e.length, t.end + 30)), dg(e, Math.max(t.start, n - 120), n));
                }
                if (!l) return null;
                if (0 === t.start) return "older";
                if (!a && !r) {
                    let n, l;
                    return ((n = t.start - 30), (l = Math.min(t.end, Math.max(n, 0) + 120)), dg(e, n, l));
                }
                let i = Math.max(t.start - 30, t.end - 120);
                return i < t.start ? dg(e, i, t.end) : null;
            })(q.current, F.current, {
                nearTop: e.scrollTop < 600,
                nearBottom: e.scrollHeight - e.clientHeight - e.scrollTop < 600,
                pinned: g.current,
            });
            "older" === n ? (0, _.loadOlderHistory)(t) : null != n && z(n);
        }, [p, g, t]);
    i.useImperativeHandle(
        b,
        () => ({
            handleScroll() {
                (H(),
                    z((e) => {
                        let t = F.current;
                        return null != e && e.startKey === t.startKey && e.endKey === t.endKey ? e : t;
                    }),
                    V());
            },
            recordAnchor: H,
            showLatest(e) {
                ((B.current = e ?? null), z(null));
            },
        }),
        [H, V],
    );
    let W = i.useRef(null),
        X = i.useCallback(
            (e) => {
                var n;
                let l;
                W.current = null;
                let r = k.current?.querySelector(`[data-conjure-message="${e}"]`);
                if (null != r) {
                    (j(), z(F.current), r.scrollIntoView({ block: "center", behavior: "smooth" }), P(e));
                    return;
                }
                let a = U.current.findIndex((t) => "user" === t.kind && t.message.id === e);
                if (-1 === a) {
                    (0, _.loadOlderHistory)(t) && (W.current = e);
                    return;
                }
                (j(),
                    (B.current = () => {
                        (k.current?.querySelector(`[data-conjure-message="${e}"]`)?.scrollIntoView({ block: "center" }),
                            P(e));
                    }),
                    z(((n = q.current), dg(n, (l = Math.max(0, a - 30)), l + 60))));
            },
            [P, j, t],
        );
    (i.useEffect(() => {
        let e = W.current;
        null != e && X(e);
    }, [L, X]),
        i.useLayoutEffect(() => {
            if (null == w) return;
            let e = w.getBoundingClientRect().height,
                t = new ResizeObserver((t) => {
                    let [n] = t,
                        l = n?.contentRect.height;
                    null != l && l !== e && ((e = l), g.current ? p.current?.scrollToBottom() : H());
                });
            return (t.observe(w), () => t.disconnect());
        }, [w, H, p, g]));
    let J = null == O.endKey;
    (i.useEffect(() => y?.(J), [J, y]),
        i.useLayoutEffect(() => {
            ((F.current = O), (q.current = $), (U.current = L));
        }),
        i.useLayoutEffect(() => {
            let e = p.current?.getScrollerNode(),
                t = k.current;
            if (null != e && null != t) {
                let n = G.current;
                if (g.current) p.current?.scrollToBottom();
                else if (null != n) {
                    let l = Array.from(t.querySelectorAll("[data-conjure-row-key]")).find(
                            (e) => e.dataset.conjureRowKey === n.key,
                        ),
                        r = null == l ? 0 : l.getBoundingClientRect().top - e.getBoundingClientRect().top - n.offset;
                    0 !== r && (e.scrollTop += r);
                }
                let l = B.current;
                ((B.current = null), l?.(), H(), V());
            }
            K.current = new Set($);
        }, [L, $, O.start, O.end, p, g, H, V]));
    let Z = i.useMemo(
            () =>
                (function (e) {
                    if (e.at(-1)?.role !== "assistant") return null;
                    for (let t = e.length - 1; t >= 0; t--) {
                        let n = e[t];
                        if ("assistant" === n.role) {
                            if (!(0, r4.BL)(n) || "plan_implemented" === n.kind) return null;
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
        Q = i.useMemo(
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
                : (0, r4.BL)(et)
                  ? et.awaitingUser
                  : null) ?? void 0,
        el = (0, o.bG)([e4.A], () => e4.A.getSettings(t)?.secrets, [t]),
        er = (0, uU.WT)(t),
        ea = i.useMemo(() => (0, o0.Mv)(n, el), [n, el]);
    if (0 === n.length) {
        if ("loading" === l)
            return (0, a.jsx)("ol", {
                className: h()(uB.x7, uB.jH),
                "aria-busy": !0,
                children: (0, a.jsx)("li", { className: uB.Ub, children: (0, a.jsx)(tE.y, {}) }),
            });
        let e = "unavailable" === l ? S.default.Td4Sf4 : S.default.V1QiNz;
        return (0, a.jsx)("ol", {
            className: uB.x7,
            children: (0, a.jsx)(uH, { role: "assistant", children: (0, a.jsx)(dr, { content: E.intl.string(e) }) }),
        });
    }
    return (0, a.jsx)(uK.Provider, {
        value: K,
        children: (0, a.jsxs)("ol", {
            ref: C,
            className: uB.x7,
            children: [
                L.slice(O.start, O.end).map((e) => {
                    let n = e.message;
                    if ("closing" !== e.kind)
                        return (0, a.jsx)(
                            dm,
                            {
                                row: e,
                                projectId: t,
                                highlighted: "user" === e.kind && A === n.id,
                                currentUserId: "user" === e.kind ? T : void 0,
                            },
                            e.key,
                        );
                    let l = n === et;
                    return (0, a.jsx)(
                        dm,
                        {
                            row: e,
                            projectId: t,
                            highlighted: !1,
                            replyTo: null != n.in_reply_to ? ee.get(n.in_reply_to) : void 0,
                            onJumpTo: X,
                            planVersion: Y.get(n.render_id),
                            pickedIdeaIds: Q.get(n.render_id),
                            secretRequestAwaiting: l ? en : void 0,
                            secretRequestStatus: ea.get(n.render_id),
                            settingsFloating: n.id === d,
                            isNewest: l,
                            onPickIdea: r,
                            onApprovePlan: n.render_id === Z ? c : void 0,
                            onRestoreVersion: f,
                        },
                        e.key,
                    );
                }),
                J
                    ? er.map((e) =>
                          (0, a.jsx)(
                              uH,
                              {
                                  role: "assistant",
                                  continuation: !0,
                                  children: (0, a.jsx)(dr, {
                                      groupStart: !1,
                                      content: "",
                                      accessories: (0, a.jsx)(uG.K, { projectId: t, approval: e }),
                                  }),
                              },
                              e.id,
                          ),
                      )
                    : null,
                null != en && J
                    ? (0, a.jsx)(uH, {
                          role: "assistant",
                          continuation: !0,
                          children: (0, a.jsx)(dr, {
                              groupStart: !1,
                              content: "",
                              accessories: (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.string(S.default.YR8A2v),
                              }),
                          }),
                      })
                    : null,
                J ? (0, a.jsx)(cf, { projectId: t, messages: n, draftHasText: !0 === u, onAskForIdeas: s }) : null,
            ],
        }),
    });
});
var dj = n(731084),
    db = n(823376),
    dy = n(187447);
function dk(e) {
    let { activity: t, id: n } = e,
        l = (0, r3.j)(),
        { text: r, revealing: s } = cX(t?.text ?? "", { streaming: l && null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [r]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: dy.jn,
            "data-conjure-thinking-panel": !0,
            children: (0, a.jsx)(r1.Ch, {
                ref: o,
                className: dy.Dq,
                "data-conjure-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: h()(o7.PT, dy.bb),
                    "data-conjure-revealing": s ? "true" : void 0,
                    children: sP.A.parse(r, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var dw = n(53659);
function dN(e) {
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
        p = i.useRef(null),
        g = i.useId(),
        [x, j] = i.useState(null),
        b = (0, dj.xu)({
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
        y = E.intl.string(b),
        k = b === dj.kx["0"],
        [w, N] = i.useState(m ?? y),
        A = (0, r3.j)();
    (l || (0, dj.E4)(y, w) || (!A && !k)) && w !== y && N(y);
    let I = i.useRef(y);
    (i.useEffect(() => {
        I.current = y;
    }, [y]),
        i.useEffect(() => {
            f?.(w);
        }, [w, f]));
    let M = i.useRef(null),
        _ = i.useRef(w);
    i.useEffect(() => {
        _.current = w;
    }, [w]);
    let P = i.useRef(k),
        R = i.useRef(0);
    (i.useEffect(() => {
        ((P.current = k), !k && (0, dj.E8)(_.current) && N(I.current));
    }, [k]),
        i.useEffect(() => {
            if (!A) return;
            let e = 0,
                t = 0;
            function n() {
                P.current
                    ? ((R.current = (0, dj.E8)(_.current) ? R.current + 1 : 0), N((0, dj.Ov)(R.current)))
                    : I.current !== _.current
                      ? N(I.current)
                      : M.current?.play();
            }
            return (
                (e = window.setTimeout(() => {
                    (n(), (t = window.setInterval(n, 2400)));
                }, dj.FZ)),
                () => {
                    (window.clearTimeout(e), window.clearInterval(t));
                }
            );
        }, [A]));
    let T = null != t && "" !== t.text,
        L = t?.session ?? null,
        $ = T && null != L && x === L,
        D = i.useCallback(() => {
            T && null != L && j((e) => (e === L ? null : L));
        }, [T, L]),
        z = i.useCallback(() => j(null), []);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: p,
        position: "top",
        align: "left",
        shouldShow: $,
        onRequestClose: z,
        renderPopout: () => (0, a.jsx)(dk, { id: g, activity: t }),
        children: () =>
            (0, a.jsxs)(C.D, {
                innerRef: p,
                className: h()(dw.hF, T && dw.Xd),
                "aria-label": E.intl.string(
                    r
                        ? S.default.qqlUiW
                        : b === S.default.j8tmjK
                          ? S.default.j8tmjK
                          : k
                            ? dj.kx["0"]
                            : S.default["Uuj/gh"],
                ),
                "aria-expanded": $,
                "aria-describedby": $ ? g : void 0,
                "data-conjure-thinking-trigger": !0,
                "data-conjure-activity": E.intl.string(b),
                onClick: D,
                children: [
                    (0, a.jsx)("span", {
                        className: dw.bl,
                        children: (0, a.jsx)(db.i, { size: 10, color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", {
                        className: dw.xu,
                        "aria-hidden": !!u || !!k || void 0,
                        children: A
                            ? (0, a.jsx)(ue.o, {
                                  ref: M,
                                  text: w,
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  duration: dj.vg,
                                  delay: null,
                                  className: dw.yE,
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/medium",
                                  color: "text-subtle",
                                  className: dw.yE,
                                  children: w,
                              }),
                    }),
                ],
            }),
    });
}
let dC = { second: 1e3, minute: 6e4 };
function dA(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "second",
        [n, l] = i.useState(() => Date.now());
    return (
        i.useEffect(() => {
            let n;
            if (null == e) return;
            let r = dC[t];
            return (
                !(function t() {
                    let a = Date.now();
                    (l(a), (n = setTimeout(t, r - ((((a - e) % r) + r) % r))));
                })(),
                () => clearTimeout(n)
            );
        }, [e, t]),
        null == e ? void 0 : Math.max(0, n - e)
    );
}
var dS = n(719374);
function dE(e) {
    let { startedAt: t, variant: n = "text-xs/medium" } = e,
        l = dA(t);
    return (0, a.jsx)(v.E, {
        tag: "span",
        variant: n,
        color: "text-muted",
        "aria-hidden": !0,
        className: dS.$,
        "data-conjure-turn-timer": !0,
        children: (0, iD.C7)(l),
    });
}
function dI(e) {
    let { startedAt: t } = e,
        n = dA(t, "minute");
    return (0, a.jsx)(at.A, { role: "timer", children: (0, iD.Us)(n) });
}
var dM = n(885574),
    d_ = n(242779),
    dP = n(436804);
function dR(e) {
    return e.toLocaleString();
}
function dT(e) {
    let { label: t, usage: n, cached: l = !0 } = e;
    return (0, a.jsxs)("div", {
        className: dP.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: dP.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [dR((0, d_.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    dR(n.input_tokens),
                    " in \xb7 ",
                    dR(n.output_tokens),
                    " out",
                    l
                        ? ` \xb7 ${dR(n.cache_creation_input_tokens)} cache write \xb7 ${dR(n.cache_read_input_tokens)} cache read`
                        : "",
                ],
            }),
        ],
    });
}
function dL(e) {
    let { project: t } = e,
        n = (0, d_.wU)(t.compaction),
        l = (0, d_.wU)(t.classifier),
        r = (0, d_.wV)(t.orchestrator, t.codegen),
        i = (0, d_.wV)(r, n);
    return (0, a.jsxs)("div", {
        className: dP.si,
        role: "dialog",
        "aria-label": E.intl.string(S.default.p5EGzq),
        children: [
            (0, a.jsx)("div", {
                className: dP.Q$,
                children: (0, a.jsxs)("div", {
                    className: dP.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [dR((0, d_.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(dT, { label: E.intl.string(S.default["9Sj3SX"]), usage: r }),
            (0, a.jsx)(dT, { label: E.intl.string(S.default.ANCEo3), usage: n }),
            (0, a.jsx)(dT, { label: E.intl.string(S.default.ugL6D4), usage: l, cached: !1 }),
            (0, a.jsxs)("div", {
                className: dP.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: E.intl.string(S.default["8OUg09"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, d_.sj)(i) ? "\u2014" : `${Math.round(100 * (0, d_.CA)(i))}%`,
                    }),
                ],
            }),
        ],
    });
}
function d$(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(ef.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(dL, { project: t }),
        children: (e) =>
            (0, a.jsx)(C.D, {
                innerRef: n,
                className: dP.Y$,
                "aria-label": E.intl.string(S.default.Z96gxQ),
                ...e,
                children: (0, a.jsx)(dM.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var dD = n(997421);
function dz(e) {
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
        p = (0, ly.Zv)(t),
        g = (0, o.bG)([l2.A], () => l2.A.getPublishStatus(t)?.publishing === !0, [t]),
        [x, j] = i.useState(null),
        b = i.useCallback(
            (e) =>
                j(
                    (0, dj.E8)(e) || e === E.intl.string(S.default.mKK6wB) || e === E.intl.string(S.default.j8tmjK)
                        ? null
                        : e,
                ),
            [],
        ),
        y = null == f ? null : (0, dj.uc)(f),
        k = null != s,
        w = s ?? (n ? l : void 0),
        N = n || r || k || !0 === m;
    return (0, a.jsxs)("div", {
        className: dD.jf,
        children: [
            (0, a.jsxs)("div", {
                className: dD.Xx,
                role: "status",
                "aria-live": "polite",
                "data-conjure-activity": !0,
                children: [
                    N || u || p || g
                        ? (0, a.jsx)(dN, {
                              activity: c,
                              compacting: d,
                              saving: m,
                              restoring: r,
                              remixing: k,
                              recalling: u,
                              controlling: p,
                              publishPending: g && N,
                              publishing: g,
                              spoken: x,
                              onSpokenChange: b,
                          })
                        : null,
                    null != w ? (0, a.jsx)(dE, { startedAt: w }) : null,
                ],
            }),
            null != w ? (0, a.jsx)(dI, { startedAt: w }) : null,
            null == f || null == y
                ? null
                : (0, a.jsxs)("span", {
                      className: dD.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": y.aria,
                              children: y.text,
                          }),
                          (0, a.jsx)(d$, { project: f }),
                      ],
                  }),
            "open" === h
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === h ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": E.intl.formatToPlainString(S.default["tCo+ZM"], { status: (0, dj.Db)(h) }),
                      "data-conjure-conn": !0,
                      "data-state": h,
                      className: dD.XF,
                      children: (0, dj.Db)(h),
                  }),
        ],
    });
}
let dO = ["wheel", "touchstart", "pointerdown", "keydown"];
var dF = n(608711);
let dq = [E.intl.string(S.default["9w+Chc"]), E.intl.string(S.default.WAvmdq), E.intl.string(S.default.SKsrzl)];
function dU(e) {
    let t,
        n,
        { projectId: l, restoreState: r, onRestoreVersion: s, onImportProject: u } = e,
        c = (0, o.bG)([lp.A], () => lp.A.getMessages(l), [l]),
        m = (0, o.bG)([_.default], () => _.default.getConnState(l), [l]),
        f = (0, o.bG)([lp.A], () => lp.A.getProjectUsage(l), [l]),
        h = (0, o.bG)([lp.A], () => lp.A.getThinkingActivity(l), [l]),
        p = (0, o.bG)([lp.A], () => lp.A.isCompacting(l), [l]),
        g = (0, o.bG)([lp.A], () => lp.A.isSaving(l), [l]),
        x = (0, o.bG)([is.A], () => is.A.getModelSettings(l), [l]),
        b = i.useRef(null),
        y = i.useRef(null),
        k = i.useRef(null),
        {
            stickToBottomRef: w,
            pinned: C,
            atBottom: A,
            unpin: I,
            releasePinHold: M,
            showsLatest: P,
            showsLatestRef: R,
            handleShowsLatestChange: T,
            updatePin: L,
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
                    for (let e of dO) t.addEventListener(e, u, { passive: !0 });
                    return () => {
                        for (let e of dO) t.removeEventListener(e, u);
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
        $ = i.useCallback(() => {
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
            (M(), R.current ? e() : k.current?.showLatest(e));
        }, [M, R]),
        D = i.useCallback(() => {
            (L(), k.current?.handleScroll());
        }, [L]);
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
            (0, _.ensureConnection)(l);
        }, [l]),
        (0, iv.E1)(l, (0, r3.j)()));
    let z = n2(l),
        O = (function (e) {
            let t = (0, e5.Ay)(e),
                n = t?.guildId ?? null,
                l = (0, o.bG)([d.A], () => (null == n ? null : (d.A.getGuild(n)?.name ?? null))),
                [r, a] = i.useState(null),
                s = t?.missingSurface ?? null;
            return null == s || r === e
                ? null
                : {
                      message: E.intl.format("channel" === s ? S.default["1cm4fj"] : S.default.Lm7IRC, {
                          server: l ?? "",
                      }),
                      onDismiss: () => a(e),
                  };
        })(l),
        F =
            ((t = (0, o.bG)([iu.A], () => iu.A.getFailure(l))),
            (n = i.useCallback(() => (0, ic.CM)(l), [l])),
            null == t
                ? null
                : {
                      message: E.intl.format(S.default.Up6Ssw, { reason: t }),
                      retry: { text: E.intl.string(S.default["ywA+ET"]), onClick: n },
                  }),
        q = (0, o.bG)([iu.A], () => iu.A.getSetupStartedAt(l), [l]),
        U = i.useCallback(
            (e, t) => {
                (0, _.sendUserMessage)(l, e, t);
            },
            [l],
        ),
        G = i.useCallback(
            (e, t, n) => {
                let r = n ?? U;
                0 === z.annotations.length
                    ? r(e, t)
                    : (r(
                          (function (e) {
                              let { annotations: t, metaComment: n, context: l } = e,
                                  r = t.filter((e) => nz(e.comment)),
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
                                      a.push(`${t + 1}. ${nq(e.target)}`),
                                      a.push(
                                          `   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`,
                                      ));
                              });
                              let i = n.trim();
                              return ("" !== i && (a.push(""), a.push(`Note for the whole batch: ${i}`)), a.join("\n"));
                          })({ annotations: z.annotations, metaComment: e, context: z.context }),
                          t,
                      ),
                      nY(l));
            },
            [z, U, l],
        ),
        B = i.useCallback(() => {
            (!(function (e) {
                let t = !1;
                for (let [n, l] of rB)
                    l.projectId === e &&
                        (l.job?.cancel(),
                        (0, _.withdrawUserMessage)(e, l.nonce),
                        (function (e) {
                            let t = rB.get(e);
                            (rB.delete(e), rH(e, null), t?.thumbUrl != null && URL.revokeObjectURL(t.thumbUrl));
                        })(n),
                        (t = !0));
                return t;
            })(l) ||
                lp.A.isThinking(l)) &&
                (0, _.interruptTurn)(l);
        }, [l]),
        K = i.useCallback((e) => tK(l, e.implementation_prompt), [l]),
        [H, V] = (function (e) {
            let [t, n] = i.useState(() => iS(e)),
                [l, r] = i.useState(e),
                a = l !== e,
                s = a ? iS(e) : t;
            return (a && (r(e), n(s)), [s, n]);
        })(l),
        W = i.useCallback(() => U(E.intl.string(S.default["t5CN3+"])), [U]),
        X = i.useCallback((e, t, n) => tK(l, e, { clarificationAnswers: t, attachments: n }), [l]),
        J = i.useCallback((e) => (0, io.X)(l, e), [l]),
        Y = i.useCallback((e) => (0, ev.vX)(l, e), [l]),
        Q = i.useCallback((e) => tJ(l, "chat", Array.from(e), Y), [l, Y]),
        ee = i.useCallback(() => tK(l, E.intl.string(S.default.Zc7gML)), [l]),
        et = r?.status === "restoring",
        en = "open" === m && !et,
        el = c[c.length - 1],
        er = null != el && "assistant" === el.role && null != el.proposal,
        [ea, es] = i.useState(null),
        eo = el?.clarification != null && el.clarification.id !== ea ? el.clarification : null,
        eu = i.useCallback(() => {
            null != eo && es(eo.id);
        }, [eo]),
        [ec, ef] = i.useState(null),
        eh = (function (e) {
            let [t, n] = i.useState(null),
                l = i.useRef(null),
                r = i.useCallback((e) => {
                    ((l.current = e), n(e));
                }, []),
                a = t?.projectId === e ? t : null,
                s = i.useCallback(
                    (t, n) =>
                        r({
                            projectId: e,
                            request: {
                                id: `manual:${e}:${Date.now()}`,
                                summary: E.intl.string(S.default["o2++BO"]),
                                prompt: t.trim().slice(0, 4e3),
                            },
                            clearComposer: n,
                        }),
                    [e, r],
                ),
                o = i.useCallback(() => r(null), [r]),
                u = i.useCallback(
                    (e) => {
                        let t = l.current;
                        t?.request.id === e && (t.clearComposer(), r(null));
                    },
                    [r],
                );
            return { request: a?.request ?? null, open: s, close: o, sent: u };
        })(l),
        ep = el?.appBuildRequest != null && (0, r4.BL)(el) && el.appBuildRequest.id !== ec ? el.appBuildRequest : null,
        eg = eh.request ?? (null == eo ? ep : null),
        ex = null == eh.request ? eo : null,
        ej = null != eg && eg === eh.request,
        { close: eb, sent: ey } = eh,
        ek = eh.request?.id,
        ew = i.useCallback(() => {
            ej ? eb() : null != eg && ef(eg.id);
        }, [eg, ej, eb]),
        eN = i.useCallback(
            (e) => {
                (null != ek && ey(ek),
                    (0, ed.P0)({
                        text: E.intl.formatToPlainString(S.default.RZO35O, { names: e.map((e) => e.name).join(", ") }),
                        variant: "success",
                    }));
            },
            [ek, ey],
        ),
        eC = (0, o.bG)([e4.A], () => e4.A.getSettings(l), [l]),
        [eA, eS] = i.useState(null),
        eE =
            null != el &&
            "assistant" === el.role &&
            null != el.settingsRequest &&
            (0, r4.BL)(el) &&
            el.id !== eA &&
            id(el.settingsRequest, eC)
                ? el
                : null,
        eI = null == eh.request ? eE : null,
        eM = eI?.settingsRequest ?? null,
        e_ = i.useCallback(() => {
            null != eE && eS(eE.id);
        }, [eE]),
        eP = null != eM,
        [eR, eT] = i.useState(null),
        eL = ex?.id ?? eg?.id ?? eI?.id,
        e$ = null != eo || null != eg || null != eE;
    i.useLayoutEffect(() => {
        let e = y.current?.getScrollerNode(),
            t = eR?.firstElementChild;
        if (null == eR || null == e || !(0, ei.vq)(t, HTMLElement) || null == eL) return;
        function n() {
            w.current && y.current?.scrollToBottom();
        }
        let l = new ResizeObserver(() => {
            let l = e.getBoundingClientRect().bottom - eR.getBoundingClientRect().top - t.offsetTop;
            (e.style.setProperty("--custom-conjure-docked-card-inset", `${Math.max(0, Math.round(l))}px`), n());
        });
        return (
            l.observe(t),
            l.observe(e, { box: "border-box" }),
            () => {
                (l.disconnect(), e.style.removeProperty("--custom-conjure-docked-card-inset"), n());
            }
        );
    }, [eR, eL, y, w]);
    let eD = (function (e) {
            let { historyLoaded: t, historyUnavailable: n, connState: l } = e;
            return n ? "unavailable" : t ? "greeting" : "failed" === l || "closed" === l ? "unavailable" : "loading";
        })({
            historyLoaded: (0, o.bG)([lp.A], () => lp.A.hasLoadedHistory(l), [l]),
            historyUnavailable: (0, o.bG)([lp.A], () => lp.A.isHistoryUnavailable(l), [l]),
            connState: m,
        }),
        ez = "loading" === eD && 0 === c.length,
        eO = i.useMemo(() => {
            let e = 0;
            for (let t = 0; t < l.length; t++) e = (31 * e + l.charCodeAt(t)) % 0x7fffffff;
            return dq[e % dq.length];
        }, [l]),
        eF = er ? E.intl.string(S.default.Zc7gML) : "greeting" === eD && 0 === c.length ? eO : null,
        eq = i.useMemo(() => {
            for (let e = c.length - 1; e >= 0; e--) {
                let t = c[e];
                if ("assistant" === t.role && !(0, r4.BL)(t)) return t;
            }
        }, [c]),
        eU = null != eq,
        eG =
            null != eq
                ? (function (e) {
                      let t = e.turn_id ?? e.steps.find((e) => null != e.turn_id)?.turn_id;
                      if (null != t && /^\d+$/.test(t)) {
                          let e = ig.default.extractTimestamp(t);
                          if (Number.isFinite(e) && e > 0) return e;
                      }
                      return e.created_at;
                  })(eq)
                : void 0,
        eB = er && en ? ee : void 0,
        eK = i.useCallback(() => tK(l, E.intl.string(S.default.EMgIuY)), [l]),
        [eH, eV] = i.useState(null),
        [eW, eJ] = i.useState(eU);
    (eW !== eU && (eJ(eU), eU || eV(null)),
        i.useEffect(() => {
            if (!eU) return;
            let e = y.current?.getScrollerNode(),
                t = e?.querySelector('[data-conjure-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? eV(null)
                        : eV(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return (n.observe(t), () => n.disconnect());
        }, [eU, eq?.steps, P]));
    let eZ = P ? eH : "bottom",
        eY = i.useMemo(() => (null != eq ? (0, r7.b9)(eq.steps) : ""), [eq]),
        eQ = i.useMemo(() => (null != eq ? ((0, r5.lt)(eq.steps) ?? eq.todos) : void 0), [eq]),
        e0 = eq?.provisionalTodo,
        e1 = null != eq && r6(eq),
        e2 = i.useMemo(() => {
            var e;
            return null != eq ? ((e = eq.steps), iU((0, r5.Jf)(e, !0).tasks)) : void 0;
        }, [eq]);
    return (0, a.jsxs)("section", {
        ref: b,
        "data-conjure-chat": !0,
        className: dF.TE,
        children: [
            en
                ? (0, a.jsx)(j.A, {
                      title: E.intl.string(S.default.gy7byi),
                      description: E.intl.string(S.default["dkv/WO"]),
                      icons: nN.ir,
                      onDrop: Q,
                  })
                : null,
            (0, a.jsx)(ag, {
                onJumpToActivity: $,
                line: eY,
                placement: eU && "top" === eZ ? "top" : null,
                todos: eQ,
                todosLive: e1,
                provisionalTodo: e0,
                agents: e2,
            }),
            (0, a.jsxs)("div", {
                className: dF.JX,
                children: [
                    (0, a.jsx)(r1.Ch, {
                        ref: y,
                        onScroll: D,
                        scrollbarGutter: ez ? "both-edges" : "stable",
                        className: [dF.N$, A ? null : dF.hB, eP ? dF.J9 : null].filter(Boolean).join(" "),
                        children: (0, a.jsx)(ix.Fu.Provider, {
                            value: l,
                            children: (0, a.jsx)(dv, {
                                projectId: l,
                                messages: c,
                                emptyState: eD,
                                floatingSettingsMessageId: eE?.id,
                                liveClarificationId: ex?.id,
                                onPickIdea: en ? K : void 0,
                                onAskForIdeas: en ? W : void 0,
                                draftHasText: H,
                                onApprovePlan: en ? eK : void 0,
                                onRestoreVersion: et || eU ? void 0 : s,
                                scrollerRef: y,
                                stickToBottomRef: w,
                                pinned: C,
                                onUnpin: I,
                                handleRef: k,
                                onShowsLatestChange: T,
                            }),
                        }),
                    }),
                    (0, a.jsx)("div", {
                        className: dF.NJ,
                        children: (0, a.jsx)(dz, {
                            projectId: l,
                            thinking: eU,
                            turnStartedAt: eG,
                            restoring: et,
                            remixStartedAt: q,
                            recalling: ez,
                            thinkingActivity: h,
                            compacting: p,
                            saving: g,
                            projectUsage: f,
                            connState: m,
                        }),
                    }),
                    null == ex
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: eP ? `${dF.B5} ${dF.J9}` : dF.B5,
                              children: (0, a.jsx)(
                                  ii,
                                  { projectId: l, clarification: ex, onSubmit: en ? X : void 0, onDismiss: eu },
                                  ex.id,
                              ),
                          }),
                    null == eg
                        ? null
                        : (0, a.jsx)("div", {
                              ref: eT,
                              className: dF.B5,
                              children: (0, a.jsx)(
                                  aA,
                                  { projectId: l, request: eg, canSend: en, onDismiss: ew, onSent: ej ? eN : void 0 },
                                  eg.id,
                              ),
                          }),
                    null == eM
                        ? null
                        : (0, a.jsx)("div", {
                              ref: null == ex && null == eg ? eT : void 0,
                              className: dF.B5,
                              children: (0, a.jsx)(ip, { projectId: l, request: eM, onDismiss: e_ }, eI?.id),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: dF.Jx,
                children: [
                    (0, a.jsx)(ag, {
                        onJumpToActivity: $,
                        line: eY,
                        placement: eU && "bottom" === eZ ? "bottom" : null,
                        todos: eQ,
                        todosLive: e1,
                        provisionalTodo: e0,
                        agents: e2,
                    }),
                    0 === z.annotations.length
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dF.g0,
                              "data-testid": "conjure-design-pending",
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      children: E.intl.formatToPlainString(S.default["7b49dS"], {
                                          count: z.annotations.length,
                                      }),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      children: E.intl.string(S.default["5zG+CR"]),
                                  }),
                                  (0, a.jsx)(Z.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: E.intl.string(S.default["/zOv9+"]),
                                      onClick: () => nY(l),
                                  }),
                              ],
                          }),
                    null == F
                        ? null
                        : (0, a.jsx)("div", {
                              className: dF.qB,
                              children: (0, a.jsx)(r2.w, {
                                  type: "critical",
                                  role: "alert",
                                  message: F.message,
                                  action: F.retry,
                              }),
                          }),
                    null == O
                        ? null
                        : (0, a.jsxs)("div", {
                              className: dF.Db,
                              children: [
                                  (0, a.jsx)(r2.w, { type: "warning", role: "status", message: O.message }),
                                  (0, a.jsx)("div", {
                                      className: dF.jU,
                                      children: (0, a.jsx)(N.m, {
                                          text: E.intl.string(E.t.WAI6xu),
                                          asContainer: !0,
                                          children: (0, a.jsx)(eX.K, {
                                              "aria-label": E.intl.string(E.t.WAI6xu),
                                              icon: em.P,
                                              variant: "color-mix",
                                              size: "md",
                                              onClick: O.onDismiss,
                                          }),
                                      }),
                                  }),
                              ],
                          }),
                    (0, a.jsx)(uO, {
                        projectId: l,
                        canSend: en,
                        running: eU,
                        restoring: et,
                        onSend: G,
                        hasPendingContext: z.annotations.length > 0,
                        onInterrupt: en ? B : void 0,
                        onUploadFile: Y,
                        onImport: u,
                        onSendToOtherProjects: e$ ? void 0 : eh.open,
                        onApprove: eB,
                        suggestion: eF,
                        questionOpen: e$,
                        modelSettings: x,
                        onModelSettingsChange: J,
                        onDraftHasTextChange: V,
                    }),
                ],
            }),
        ],
    });
}
var dG = n(761508),
    dB = n(933294),
    dK = n(207438),
    dH = n(683438);
function dV(e, t) {
    return String(e).padStart(t, "0");
}
function dW(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "seconds";
    if (e.length > 64) return null;
    let n = Date.parse(e);
    if (Number.isNaN(n)) return null;
    let l = new Date(n),
        r = `${dV(l.getHours(), 2)}:${dV(l.getMinutes(), 2)}:${dV(l.getSeconds(), 2)}`;
    return "millis" === t ? `${r}.${dV(l.getMilliseconds(), 3)}` : r;
}
var dX = n(667931);
let dJ = {
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
    dZ = { running: "Running", ok: "Done", error: "Failed" };
function dY(e) {
    if (e < 1e3) return String(e);
    if (e >= 1e6) return `${(e / 1e6).toFixed(1)}M`;
    let t = e / 1e3;
    return `${t < 10 ? t.toFixed(1) : Math.round(t)}k`;
}
function dQ(e) {
    var t;
    return (t = Math.round(e)) < 1e3 ? `${t}ms` : `${(t / 1e3).toFixed(1)}s`;
}
function d0(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return `${e} ${t}${1 === e ? "" : "s"}`;
}
function d1(e) {
    return dQ(e.count > 1 ? e.totalMs : e.end - e.start);
}
let d2 = ["Arguments", "Result", "Usage", "Details"];
function d3(e, t) {
    return { label: e, value: t, block: t.length > 80 || t.includes("\n") };
}
function d5(e) {
    return `$${e.toFixed(e < 1 ? 3 : 2)}`;
}
function d4(e) {
    let t = (0, dX.bM)(e)?.end;
    return null != t ? `${(t / 1e3).toFixed(2)}s` : (0, dX.lp)(e) ? "interrupted" : "still running";
}
function d6(e) {
    return [dW(new Date(e.started_at).toISOString()) ?? "", d0(e.spans.length), (0, dX.Sj)((0, dX.bM)(e)?.attrs)]
        .filter((e) => "" !== e)
        .join(" \xb7 ");
}
function d7(e) {
    let t = (0, dX.W7)(e),
        n = new Map(),
        l = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
    for (let r of e.spans) {
        let { service: e, category: a } = (0, dX.N5)(r);
        (n.set(a, (n.get(a) ?? 0) + (t.get(r.id) ?? 0)),
            "model" === e &&
                ((l.calls += 1),
                (l.input += d8(r, "in")),
                (l.output += d8(r, "out")),
                (l.cacheRead += d8(r, "cache_read")),
                (l.cacheWrite += d8(r, "cache_write")),
                (l.costUsd += d8(r, "cost_usd"))));
    }
    let r = dX.BF.map((e) => ({ category: e, ms: n.get(e) ?? 0 }));
    return { categories: r, busyMs: r.reduce((e, t) => e + t.ms, 0), model: l };
}
function d8(e, t) {
    let n = e.attrs?.[t];
    return "number" == typeof n ? n : 0;
}
var d9 = n(738188),
    me = n(430993),
    mt = n(364840),
    mn = n(224640),
    ml = n(20742);
let mr = { collapsed: new Set(), revealed: new Set() };
var ma = n(872892);
let mi = {
    op: ma.Q,
    model: ma.i3,
    tool: ma.dH,
    setup: ma.kc,
    worktree: ma.Qx,
    sandbox: ma.QH,
    build: ma.F1,
    platform: ma.Op,
    other: ma.fv,
};
function ms(e) {
    let { stats: t } = e,
        n = (function (e) {
            let { model: t } = e;
            return 0 === t.calls
                ? null
                : [
                      d0(t.calls, "model call"),
                      `${dY(t.input)} in`,
                      `${dY(t.output)} out`,
                      `${dY(t.cacheRead)} cache read`,
                      `${dY(t.cacheWrite)} cache write`,
                      d5(t.costUsd),
                  ].join(" \xb7 ");
        })(t);
    return (0, a.jsxs)("div", {
        className: ma.M1,
        children: [
            (0, a.jsx)("div", {
                className: ma.Fc,
                "aria-hidden": !0,
                children: t.categories.map((e) => {
                    let { category: t, ms: n } = e;
                    return 0 === n
                        ? null
                        : (0, a.jsx)(
                              "div",
                              {
                                  className: `${ma.DJ} ${mi[t]}`,
                                  style: { "--custom-conjure-perf-trace-weight": String(n) },
                              },
                              t,
                          );
                }),
            }),
            (0, a.jsx)("div", {
                className: ma.o1,
                children: dX.BF.map((e) => {
                    let n,
                        l =
                            0 === (n = t.categories.find((t) => t.category === e)?.ms ?? 0) || 0 === t.busyMs
                                ? null
                                : `${Math.round((n / t.busyMs) * 100)}% \xb7 ${dQ(n)}`;
                    return (0, a.jsxs)(
                        "span",
                        {
                            className: ma.fI,
                            children: [
                                (0, a.jsx)("span", { className: `${ma.nf} ${mi[e]}` }),
                                (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: dJ[e] }),
                                null == l
                                    ? null
                                    : (0, a.jsx)(v.E, {
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
                : (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      tabularNumbers: !0,
                      children: n,
                  }),
        ],
    });
}
function mo(e) {
    return `conjure-perf-trace-${e}`;
}
function mu(e) {
    let { start: t, end: n, extent: l, barClass: r, duration: i } = e,
        s = (t / l) * 100,
        o = ((n - t) / l) * 100;
    return (0, a.jsxs)("div", {
        className: ma.c1,
        style: { "--custom-conjure-perf-trace-left": String(s), "--custom-conjure-perf-trace-width": String(o) },
        children: [
            (0, a.jsx)("div", { className: r }),
            (0, a.jsx)(v.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                tabularNumbers: !0,
                className: `${ma.p0} ${s + o > 85 ? ma.EU : ma.jh}`,
                children: i,
            }),
        ],
    });
}
function mc(e) {
    let { node: t, extent: n, collapsed: l, selected: r, onSelect: s, onToggle: o, onExpandSubtree: u } = e,
        c = t.children.length > 0,
        d = l ? t0._ : nt.a,
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
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mo(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": c ? !l : void 0,
        "aria-selected": r,
        className: `${ma.$y} ${r ? ma.wQ : ""}`,
        onClick: m,
        children: [
            (0, a.jsxs)("div", {
                className: ma.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    c
                        ? (0, a.jsx)(C.D, {
                              tag: "span",
                              "aria-hidden": !0,
                              tabIndex: -1,
                              className: ma.ai,
                              onClick: f,
                              children: (0, a.jsx)(d, { size: "xs", color: "currentColor" }),
                          })
                        : (0, a.jsx)("span", { className: ma.YJ }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        tabularNumbers: !0,
                        className: ma.U9,
                        children: t.descendants > 0 ? t.descendants : "",
                    }),
                    (0, a.jsx)("span", { className: `${ma.nf} ${mi[t.category]}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-strong",
                        className: ma.eu,
                        children: t.service,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-default",
                        className: ma.MQ,
                        children: t.operation,
                    }),
                    t.count > 1
                        ? (0, a.jsx)(v.E, {
                              variant: "text-xs/semibold",
                              color: "text-default",
                              className: ma.qS,
                              children: `\xd7${t.count}`,
                          })
                        : null,
                    t.failed
                        ? (0, a.jsx)(d9.WarningIcon, { size: "xs", color: "currentColor", className: ma.ik })
                        : null,
                ],
            }),
            (0, a.jsx)(mu, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: t.failed
                    ? `${ma.M0} ${ma.Nh}`
                    : t.running
                      ? `${ma.M0} ${ma.rF}`
                      : `${ma.M0} ${mi[t.category]}`,
                duration: d1(t),
            }),
        ],
    });
}
function md(e) {
    let { row: t, extent: n, selected: l, onReveal: r } = e;
    return (0, a.jsxs)(C.D, {
        tag: "div",
        role: "treeitem",
        id: mo(t.key),
        tabIndex: -1,
        "aria-level": t.depth + 1,
        "aria-expanded": !1,
        "aria-selected": l,
        className: `${ma.$y} ${l ? ma.wQ : ""}`,
        onClick: () => r(t.parentKey),
        children: [
            (0, a.jsxs)("div", {
                className: ma.So,
                style: { "--custom-conjure-perf-trace-depth": String(t.depth) },
                children: [
                    (0, a.jsx)("span", {
                        className: ma.ai,
                        children: (0, a.jsx)(t0._, { size: "xs", color: "currentColor" }),
                    }),
                    (0, a.jsx)("span", { className: ma.U9 }),
                    (0, a.jsx)("span", { className: `${ma.nf} ${ma.dL}` }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: ma.MQ,
                        children: d0(t.count, "smaller span"),
                    }),
                ],
            }),
            (0, a.jsx)(mu, {
                start: t.start,
                end: t.end,
                extent: n,
                barClass: `${ma.M0} ${ma.ab} ${ma.dL}`,
                duration: dQ(t.totalMs),
            }),
        ],
    });
}
function mm(e) {
    let { node: t } = e;
    return null == t
        ? (0, a.jsx)(v.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: "Select a span to see its details.",
          })
        : (0, a.jsxs)("div", {
              className: ma._0,
              children: [
                  (0, a.jsxs)("div", {
                      className: ma.TQ,
                      children: [
                          (0, a.jsx)("span", { className: `${ma.nf} ${mi[t.category]}` }),
                          (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-strong", children: t.service }),
                          (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-default", children: t.operation }),
                      ],
                  }),
                  (function (e) {
                      let t = [d3("Start", `+${dQ(e.start)}`), d3("Duration", d1(e))];
                      e.count > 1
                          ? t.push(
                                d3("Calls", String(e.count)),
                                d3("Longest call", dQ(e.maxMs)),
                                d3("Spread over", dQ(e.end - e.start)),
                            )
                          : e.children.length > 0 && t.push(d3("Self time", dQ(e.selfMs)));
                      let n = e.span.waits_on;
                      null != n && t.push(d3("Waited on", `${n.span_name} in ${n.trace_name}`));
                      let l = [
                          e.parallel ? "ran in parallel with a sibling" : null,
                          e.running ? "still running" : null,
                          e.outlivedParent ? "outlived its parent" : null,
                      ].filter((e) => null != e);
                      (l.length > 0 && t.push(d3("Notes", l.join(", "))),
                          null != e.span.error && t.push(d3("Error", e.span.error)));
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
                              s = "cost_usd" === t ? d5(Number(n)) : String(n);
                          r.set(l, [...(r.get(l) ?? []), d3(t.replace(/_/g, " "), s)]);
                      }
                      return [
                          { title: null, rows: t },
                          ...d2.flatMap((e) => {
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
                                      : (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-strong",
                                            className: ma.xd,
                                            children: t,
                                        }),
                                  n.map((e) => {
                                      let { label: t, value: n, block: l } = e;
                                      return (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-muted",
                                                      children: t,
                                                  }),
                                                  l
                                                      ? (0, a.jsx)(v.E, {
                                                            variant: "code",
                                                            color: "text-default",
                                                            selectable: !0,
                                                            className: ma.vl,
                                                            children: n,
                                                        })
                                                      : (0, a.jsx)(v.E, {
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
function mf(e) {
    let { trace: t } = e,
        n = i.useMemo(() => d7(t), [t]);
    return (0, a.jsx)(ms, { stats: n });
}
function mh(e) {
    let { trace: t } = e,
        n = (function (e) {
            let t = i.useMemo(() => (null == e ? null : (0, dX.TK)(e)), [e]),
                [n, l] = i.useState(() => (null == t ? mr : (0, dX.hB)(t))),
                [r, a] = i.useState(null),
                s = i.useRef(null == t ? new Set() : (0, dX.x7)(t));
            i.useEffect(() => {
                if (null == t) return;
                let e = s.current;
                ((s.current = (0, dX.x7)(t)), l((n) => (0, dX._0)(n, t, e)));
            }, [t]);
            let o = i.useMemo(() => (null == t ? [] : (0, dX.wu)(t, n)), [t, n]),
                u = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dX.IE)(t, e);
                        null != n && l((e) => (0, dX.TN)(e, n));
                    },
                    [t],
                ),
                c = i.useCallback((e) => {
                    l((t) => ({ ...t, revealed: new Set(t.revealed).add(e) }));
                }, []),
                d = i.useCallback(
                    (e) => {
                        let n = null == t ? null : (0, dX.IE)(t, e);
                        null != n && l((e) => (0, dX.H$)(e, n));
                    },
                    [t],
                ),
                m = i.useCallback(() => {
                    null != t && l((0, dX.vH)(t));
                }, [t]),
                f = i.useCallback(() => {
                    null != t && l((0, dX.rQ)(t));
                }, [t]),
                h = i.useCallback(() => {
                    null != t && l((0, dX.hB)(t));
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
        f = (0, dX.dj)(t),
        h = i.useMemo(() => (0, dX.nF)(f), [f]),
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
                    null != t && (u(t.key), document.getElementById(mo(t.key))?.scrollIntoView({ block: "nearest" })));
            },
            [r, m, d, l, u, o, c],
        );
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)(me.c, {
                children: [
                    (0, a.jsxs)("div", {
                        className: ma.z,
                        children: [
                            (0, a.jsx)(v.E, {
                                variant: "text-md/semibold",
                                color: "text-strong",
                                tabularNumbers: !0,
                                children: d4(t),
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                tabularNumbers: !0,
                                children: d6(t),
                            }),
                            null == t.started_by
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      children: `Started by ${t.started_by.trace_name}`,
                                  }),
                            0 === t.dropped
                                ? null
                                : (0, a.jsx)(v.E, {
                                      variant: "text-sm/normal",
                                      color: "text-feedback-warning",
                                      children: `${d0(t.dropped)} not recorded`,
                                  }),
                        ],
                    }),
                    (0, a.jsx)(mf, { trace: t }),
                    (0, a.jsxs)("div", {
                        className: ma.KE,
                        children: [
                            (0, a.jsx)(Z.$, { size: "sm", variant: "secondary", text: "Time sinks", onClick: n.reset }),
                            (0, a.jsx)(Z.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Expand all",
                                onClick: n.expandAll,
                            }),
                            (0, a.jsx)(Z.$, {
                                size: "sm",
                                variant: "secondary",
                                text: "Collapse all",
                                onClick: n.collapseAll,
                            }),
                            (0, a.jsx)(v.E, {
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
                        "aria-activedescendant": null == o ? void 0 : mo(o),
                        className: ma.Zu,
                        style: { "--custom-conjure-perf-trace-step": String(p) },
                        onKeyDown: g,
                        children: [
                            (0, a.jsxs)("div", {
                                className: ma.t7,
                                "aria-hidden": !0,
                                children: [
                                    (0, a.jsx)("div", {
                                        className: ma.So,
                                        children: (0, a.jsx)(v.E, {
                                            variant: "text-xs/semibold",
                                            color: "text-muted",
                                            children: "Span",
                                        }),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: ma.c1,
                                        children: h.map((e) =>
                                            (0, a.jsx)(
                                                v.E,
                                                {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    tabularNumbers: !0,
                                                    className: `${ma.io} ${(e / f) * 100 > 85 ? ma.L5 : ""}`,
                                                    style: {
                                                        "--custom-conjure-perf-trace-left": String((e / f) * 100),
                                                    },
                                                    children: 0 === e ? "0" : dQ(e),
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
                                          mc,
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
                                    : (0, a.jsx)(md, { row: e, extent: f, selected: e.key === o, onReveal: d }, e.key),
                            ),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(mt.j, { children: (0, a.jsx)(mm, { node: s }) }),
        ],
    });
}
function mp(e) {
    let { transitionState: t, onClose: n, projectId: l, traceId: r } = e,
        i = (0, o.bG)([cM.A], () => cM.A.getTimingTrace(l, r), [l, r]),
        s = i?.name ?? "Perf Trace";
    return (0, a.jsxs)(mn.d, {
        transitionState: t,
        onClose: n,
        size: "xxl",
        maxHeight: "viewport",
        "aria-label": s,
        children: [
            (0, a.jsx)(ml.rQ, { title: s }),
            null == i
                ? (0, a.jsx)(me.c, {
                      children: (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: "This trace is no longer available.",
                      }),
                  })
                : (0, a.jsx)(mh, { trace: i }),
        ],
    });
}
let mg = { running: ma.Vf, ok: ma.mo, error: ma.Sr };
function mx(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", { className: `${ma.Om} ${mg[t]}`, role: "img", "aria-label": dZ[t] });
}
function mv(e, t) {
    (0, tt.openModal)((n) => (0, a.jsx)(mp, { ...n, projectId: e, traceId: t }));
}
function mj(e) {
    let { projectId: t, trace: n } = e,
        l = n.spans.find((e) => null != e.error)?.error,
        r = i.useCallback(() => mv(t, n.id), [t, n.id]);
    return (0, a.jsxs)(C.D, {
        className: ma.nM,
        onClick: r,
        children: [
            (0, a.jsxs)("div", {
                className: ma.sU,
                children: [
                    (0, a.jsx)(mx, { status: (0, dX.lQ)(n) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/semibold",
                        color: "text-default",
                        className: ma._k,
                        children: n.name,
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        tabularNumbers: !0,
                        children: d4(n),
                    }),
                ],
            }),
            (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", tabularNumbers: !0, children: d6(n) }),
            null == l
                ? null
                : (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: l }),
        ],
    });
}
function mb(e) {
    let { projectId: t, traces: n } = e,
        l = i.useRef(null),
        r = i.useCallback(() => {
            ek(
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
    return (0, a.jsx)(ef.Y, {
        targetElementRef: l,
        position: "bottom",
        align: "right",
        animation: ef.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: l } = e;
            return (0, a.jsx)(eh.W, {
                "data-menu-migrated": !0,
                navId: `conjure-traces-${t}`,
                "aria-label": "Trace actions",
                onClose: l,
                onSelect: l,
                children: (0, a.jsx)(ep.rX, {
                    children: (0, a.jsx)(ep.Dr, {
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
            return (0, a.jsx)(eX.K, {
                ...e,
                buttonRef: l,
                icon: eJ.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": "More",
                "aria-haspopup": "menu",
                "aria-expanded": n,
            });
        },
    });
}
function my(e) {
    let { projectId: t } = e,
        n = (0, o.yK)([cM.A], () => cM.A.getTimingTraces(t), [t]),
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
                    let t = e.map(d7);
                    function n(e) {
                        return t.reduce((t, n) => t + e(n), 0);
                    }
                    return {
                        categories: dX.BF.map((e) => ({
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
              className: ma.Ie,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: "No traces yet" }),
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children:
                          "Turns and project operations over 100ms show up here as they run. Periodic checks and live preview requests show up only when they take a second or fail.",
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: ma.nd,
              children: [
                  (0, a.jsxs)("div", {
                      className: ma.Ko,
                      children: [
                          (0, a.jsx)("div", {
                              className: ma.fH,
                              children: (0, a.jsx)(dH.I, {
                                  query: l,
                                  onChange: r,
                                  onClear: () => r(""),
                                  size: "sm",
                                  placeholder: "Search traces",
                                  "aria-label": "Search traces",
                              }),
                          }),
                          (0, a.jsx)(mb, { projectId: t, traces: s }),
                      ],
                  }),
                  (0, a.jsxs)(r1.Ch, {
                      className: ma.XG,
                      children: [
                          (0, a.jsx)(ms, { stats: c }),
                          0 === u.length
                              ? (0, a.jsx)(v.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: "No traces match this search.",
                                })
                              : (0, a.jsx)("ul", {
                                    className: ma.p_,
                                    "aria-label": "Traces",
                                    children: u.map((e) =>
                                        (0, a.jsx)(
                                            "li",
                                            { children: (0, a.jsx)(mj, { projectId: t, trace: e }) },
                                            e.id,
                                        ),
                                    ),
                                }),
                      ],
                  }),
              ],
          });
}
function mk(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let n = t / 1024;
    if (n < 1024) return `${n >= 100 ? Math.round(n) : n.toFixed(1)} MB`;
    let l = n / 1024;
    return `${l >= 100 ? Math.round(l) : l.toFixed(1)} GB`;
}
function mw(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function mN(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function mC(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let n = new Date();
    return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function mA(e) {
    let t = e.split("/").filter((e) => "" !== e),
        n = t[t.length - 1] ?? e;
    return n.length > 12 ? n.slice(0, 12) : n;
}
function mS(e) {
    return E.intl.string("preview" === e ? S.default["2yLYlG"] : S.default.eiAi57);
}
let mE = ["all", "preview", "stable", "web"];
function mI(e) {
    switch (e.reason) {
        case "local":
            return E.intl.string(S.default.mUeKML);
        case "unconfigured":
            return E.intl.string(S.default.bGefb5);
        case "unauthorized":
            return E.intl.string(S.default.KLx6Bb);
        default:
            return null != e.detail
                ? E.intl.formatToPlainString(S.default.t09Q6q, { detail: e.detail })
                : E.intl.string(S.default["t+tG59"]);
    }
}
function mM(e) {
    return null == e.memory_p50_bytes && null == e.memory_p999_bytes
        ? null
        : E.intl.formatToPlainString(S.default["XO/bN4"], {
              p50: mk(e.memory_p50_bytes ?? 0),
              p999: mk(e.memory_p999_bytes ?? e.memory_p50_bytes ?? 0),
          });
}
let m_ = {
    db: () => S.default["7l+DFG"],
    db_preview: () => S.default.FAuffi,
    runtime: () => S.default["Gkl+ab"],
    runtime_preview: () => S.default.ynpJzv,
    bot: () => S.default["5/i0cj"],
    bot_preview: () => S.default.m2jsnw,
};
var mP = n(911608),
    mR = n(177427);
function mT(e) {
    let { generatedAt: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: mR.KE,
        children: [
            (0, a.jsx)("div", {
                className: mR.IQ,
                children:
                    "loading" === n
                        ? (0, a.jsx)(tE.y, { type: tE.t.PULSING_ELLIPSIS })
                        : "failed" === n
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: E.intl.string(S.default.ZVByPX),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: E.intl.formatToPlainString(S.default.INVO50, { time: mC(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(Z.$, { variant: "secondary", size: "sm", text: E.intl.string(S.default.oKEgiu), onClick: l }),
        ],
    });
}
function mL(e) {
    let { title: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: mR.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: mR.Gf, children: t }),
            n,
        ],
    });
}
function m$(e) {
    let { label: t, value: n, hint: l, critical: r = !1, icon: i, state: s } = e;
    return (0, a.jsxs)("div", {
        className: mR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mR.x7,
                children: [
                    (0, a.jsxs)("span", {
                        className: mR.kS,
                        children: [i, (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t })],
                    }),
                    (0, a.jsxs)("span", {
                        className: mR.kS,
                        children: [
                            s,
                            (0, a.jsx)(v.E, {
                                variant: "text-sm/medium",
                                color: r ? "text-feedback-critical" : "text-default",
                                children: n,
                            }),
                        ],
                    }),
                ],
            }),
            null != l && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
        ],
    });
}
function mD(e) {
    let { label: t, used: n, max: l, formatValue: r } = e,
        i = l > 0 ? Math.min(1, Math.max(0, n / l)) : 0,
        s = i >= 0.9;
    return (0, a.jsxs)("div", {
        className: mR.N8,
        children: [
            (0, a.jsxs)("div", {
                className: mR.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${r(n)} / ${r(l)}`,
                    }),
                ],
            }),
            (0, a.jsx)(mP.z, {
                value: 100 * i,
                valueLabel: `${r(n)} of ${r(l)}`,
                "aria-label": t,
                className: s ? mR.dh : void 0,
            }),
        ],
    });
}
function mz(e) {
    let { analytics: t } = e;
    if ("ok" !== t.status)
        return (0, a.jsx)(m$, {
            label: E.intl.string(S.default.SXP7pD),
            value: E.intl.string(S.default.E5hKVi),
            hint: mI(t),
        });
    let n = t.objects?.find((e) => "agent" === e.role);
    if (null == n)
        return (0, a.jsx)(m$, {
            label: E.intl.string(S.default.SXP7pD),
            value: "\u2014",
            hint: E.intl.string(S.default.AGvoMJ),
        });
    let l = mM(n);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m$, { label: E.intl.string(S.default["H/X+FI"]), value: mw(n.cpu_ms) }),
            null != l && (0, a.jsx)(m$, { label: E.intl.string(S.default.lmFmMO), value: l }),
        ],
    });
}
function mO(e) {
    let { analytics: t } = e,
        n = E.intl.string(S.default.LoZwWn);
    if ("ok" !== t.status)
        return (0, a.jsx)(mL, {
            title: n,
            children: (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: mI(t) }),
        });
    let l = (t.objects ?? [])
        .map((e) => {
            var t;
            let n;
            return {
                object: e,
                label: null != (n = "agent" !== (t = e.role) ? m_[t] : null) ? E.intl.string(n()) : null,
            };
        })
        .filter((e) => null != e.label);
    return (0, a.jsx)(mL, {
        title: n,
        children:
            0 === l.length
                ? (0, a.jsx)(v.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default.AGvoMJ),
                  })
                : l.map((e) => {
                      let { object: t, label: n } = e;
                      return (0, a.jsx)(
                          m$,
                          {
                              label: n,
                              value: E.intl.formatToPlainString(S.default["w/2voO"], { cpu: mw(t.cpu_ms) }),
                              hint: mM(t) ?? void 0,
                          },
                          t.role,
                      );
                  }),
    });
}
var mF = n(678708),
    mq = n(414499),
    mU = n(714800),
    mG = n(81466),
    mB = n(424383),
    mK = n(816943),
    mH = n(268791),
    mV = n(514042),
    mW = n(872351),
    mX = n(708988),
    mJ = n(150934),
    mZ = n(417270);
let mY = "Restart Agent",
    mQ = { ok: ["OK", "ok"], near: ["Near the Limit", "warning"], over: ["Over the Limit", "error"] };
function m0(e) {
    return null != e && "" !== e ? e.slice(0, 12) : "None";
}
function m1(e, t) {
    return { label: e, value: null != t && "" !== t ? mC(t) : "Unknown", icon: "calendar" };
}
function m2(e) {
    for (let [t, n] of [
        ["GB", 1e9],
        ["MB", 1e6],
        ["KB", 1e3],
    ])
        if (e >= n) return `${Number((e / n).toFixed(1))} ${t}`;
    return `${e} B`;
}
function m3(e, t, n, l) {
    let [r, a] = mQ[n.status];
    return { label: e, value: `${m2(n.bytes)} of ${m2(n.max)} \xb7 ${r}`, hint: l, icon: t, state: a };
}
function m5(e) {
    if (null == e) return { label: "Last Save", value: "None since this agent instance started", icon: "save" };
    let t = mC(e.at);
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
let m4 = { main: "Main vs Remote", wip: "WIP vs Remote" };
function m6(e) {
    let t = `container ${m0(e.local)} \xb7 remote ${m0(e.remote)}`,
        n = e.ahead ?? 0,
        l = e.behind ?? 0,
        r = { label: m4[e.ref], icon: "remote", hint: t };
    switch (e.state) {
        case "in_sync":
            return { ...r, value: "In Sync", state: "ok" };
        case "ahead":
            return { ...r, value: `${mN(n)} Ahead`, hint: `${t} \xb7 not pushed yet`, state: "ahead" };
        case "behind":
            return { ...r, value: `${mN(l)} Behind`, state: "behind" };
        case "diverged":
            return { ...r, value: `Diverged (${mN(n)} Ahead, ${mN(l)} Behind)`, state: "error" };
        case "not_fetched":
            return { ...r, value: "Behind", hint: `${t} \xb7 the remote head isn't in the container`, state: "behind" };
        case "missing_remote":
            return { ...r, value: "Missing on Remote", state: "error" };
        case "missing_local":
            return { ...r, value: "Missing in Container", state: "warning" };
    }
}
let m7 = ["main", "wip"];
var m8 = n(400154);
let m9 = {
        checkout: mF.FolderIcon,
        edit: aE.PencilIcon,
        remote: mq.h,
        commits: mU.e,
        calendar: mG.CalendarIcon,
        save: mB.L,
        objects: e_.R,
        download: mK.$,
        size: mH.$,
        file: mV.FileIcon,
    },
    fe = {
        ok: [nc.y, w.A.colors.ICON_FEEDBACK_POSITIVE],
        warning: [d9.WarningIcon, w.A.colors.ICON_FEEDBACK_WARNING],
        error: [tI.a, w.A.colors.ICON_FEEDBACK_CRITICAL],
        ahead: [mW.z, w.A.colors.ICON_MUTED],
        behind: [mX.M, w.A.colors.ICON_MUTED],
    };
function ft(e) {
    let { projectId: t } = e,
        { state: n } = {
            state: (0, o.bG)([cM.A], () => cM.A.getGitInfoState(t), [t]),
            load: i.useCallback(() => (0, dK.DK)(t), [t]),
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
                    `Updated ${mC(r)}`,
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
    return (0, a.jsxs)(mL, {
        title: "Git",
        children: [
            (0, a.jsx)("div", {
                className: m8.Lj,
                children:
                    "" !== l.line &&
                    (0, a.jsx)(v.E, {
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
                    if (!e.running || null != e.localError) return [m5(e.lastSave)];
                    if (!e.checkout)
                        return [
                            { label: "Resume", value: "Never Cloned", icon: "checkout", state: "error" },
                            m5(e.lastSave),
                        ];
                    let l = [{ label: "Resume", value: "OK", icon: "checkout", state: "ok" }];
                    void 0 !== e.dirtyFiles &&
                        l.push({
                            label: "Uncommitted Files",
                            value: null == e.dirtyFiles ? "Unknown" : mN(e.dirtyFiles),
                            hint: null == e.dirtyFiles ? "git status didn't finish in time." : void 0,
                            icon: "edit",
                        });
                    let r = m7.flatMap((t) => e.comparisons?.find((e) => e.ref === t) ?? []);
                    (r.length > 0
                        ? l.push(...r.map(m6))
                        : l.push(
                              { label: "Main", value: m0(e.heads.main), icon: "remote" },
                              { label: "WIP", value: m0(e.heads.wip), icon: "remote" },
                          ),
                        l.push(
                            { label: "Commits", value: null != e.commits ? mN(e.commits) : "Unknown", icon: "commits" },
                            m1("Oldest Commit", e.oldest),
                            m1("Newest Commit", e.newest),
                            m5(e.lastSave),
                        ),
                        null != e.objects &&
                            l.push(
                                ((n = 1 === (t = e.objects).packs ? "1 pack" : `${mN(t.packs)} packs`),
                                {
                                    label: "Objects",
                                    value: `${mN(t.loose)} loose (${mk(t.looseBytes)}) \xb7 ${mN(t.packed)} packed in ${n} (${mk(t.packBytes)})`,
                                    hint: t.garbage > 0 ? `${mN(t.garbage)} garbage files` : void 0,
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
                                      value: `Yes \xb7 ${mN(e.missingObjects)} not downloaded`,
                                      hint: "Fetched on demand; this read never fetches.",
                                  }
                            : { ...t, value: "No" };
                    })(e);
                    return (
                        null != a && l.push(a),
                        null != e.localBytes &&
                            l.push(
                                m3(
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
                                  m3("Largest File", "file", e.largestFile, "Largest file version in the local copy."),
                              ),
                        l
                    );
                })(n.info).map((e) => {
                    let { label: t, value: n, hint: l, icon: r, state: i } = e,
                        s = m9[r],
                        [o, u] = null != i ? fe[i] : [null, void 0];
                    return (0, a.jsx)(
                        m$,
                        {
                            label: t,
                            value: n,
                            hint: l,
                            critical: "error" === i,
                            icon: (0, a.jsx)(s, { size: "xs", color: w.A.colors.ICON_MUTED }),
                            state: null != o ? (0, a.jsx)(o, { size: "xs", color: u }) : void 0,
                        },
                        t,
                    );
                }),
        ],
    });
}
function fn(e) {
    let { projectId: t } = e,
        {
            state: n,
            busy: l,
            clearAlarm: r,
            setClearAlarm: s,
            confirmCopy: u,
            restart: c,
        } = (function (e) {
            let t = (0, o.bG)([cM.A], () => cM.A.getRestartAgentState(e), [e]),
                [n, l] = i.useState(!1),
                r = "restarting" === t.phase ? t.startedAt : null,
                a = "restarted" === t.phase ? t.instanceSince : null,
                s = i.useRef(a);
            (i.useEffect(() => {
                null != a && a !== s.current && ((s.current = a), (0, dK.DK)(e));
            }, [e, a]),
                i.useEffect(() => {
                    if (null == r) return;
                    function t() {
                        let t = cM.A.getInstancePollRequestedAt(e);
                        (null != t && Date.now() - t < 1e4) || (0, dK.gX)(e);
                    }
                    t();
                    let n = setInterval(t, 2e3),
                        l = setTimeout(
                            () =>
                                tM.h.dispatch({
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
            let u = i.useCallback(() => (0, dK.VW)(e, n), [e, n]);
            return {
                state: t,
                busy: "pending" === t.phase || "restarting" === t.phase,
                clearAlarm: n,
                setClearAlarm: l,
                confirmCopy: {
                    title: "Restart Agent?",
                    body: `Ends this project's agent instance; the next request starts a new one. Lost: in-memory state and any running turn. Kept: saved data (conversation, settings, storage) and the container disk. ${n ? "The pending alarm is cleared, so scheduled wakeups wait until something sets it again." : "The pending alarm is kept."}`,
                    confirm: mY,
                },
                restart: u,
            };
        })(t),
        d = i.useCallback(() => {
            (0, ez.A)({ title: u.title, subtitle: u.body, confirmText: u.confirm, variant: "critical", onConfirm: c });
        }, [u, c]);
    return (0, a.jsxs)("div", {
        className: m8.Lj,
        children: [
            (0, a.jsxs)("div", {
                className: m8.nM,
                children: [
                    (0, a.jsx)(mJ.S, {
                        label: "Also Clear Alarm",
                        description: "Scheduled wakeups wait until something sets the alarm again.",
                        checked: r,
                        onChange: s,
                        disabled: l,
                    }),
                    (0, a.jsx)(Z.$, {
                        variant: "critical-secondary",
                        size: "sm",
                        icon: mZ.RetryIcon,
                        text: mY,
                        loading: l,
                        disabled: l,
                        onClick: d,
                    }),
                ],
            }),
            (0, a.jsx)(v.E, {
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
                            return `Restarted \xb7 new instance since ${mC(e.instanceSince)}`;
                        case "failed":
                            return `Failed: ${e.reason} \xb7 ${mC(e.observedAt)}`;
                    }
                })(n),
            }),
        ],
    });
}
function fl(e, t) {
    return (0, a.jsx)(m$, {
        label: e,
        value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mN((0, d_.aM)(t)) }),
        hint: `${mN(t.input_tokens)} in \xb7 ${mN(t.output_tokens)} out \xb7 ${mN(t.cache_read_input_tokens)} cache read`,
    });
}
function fr(e) {
    let { projectId: t, status: n, fetchState: l, onRefresh: r } = e,
        s = (0, o.bG)([cM.A], () => cM.A.getLastTurnUsage(t), [t]),
        u = (0, o.bG)([cM.A], () => cM.A.getLastCompaction(t), [t]),
        c = (0, o.bG)([cM.A], () => cM.A.getLastCompactionDecline(t), [t]),
        d = (0, o.bG)([cM.A], () => cM.A.getForceCompactionState(t), [t]),
        m = i.useCallback(() => (0, dK.Lj)(t), [t]),
        f = i.useCallback(() => (0, dK.Lj)(t, !0), [t]),
        h = (0, o.bG)([cM.A], () => cM.A.getSandboxRestartState(t), [t]),
        p = (0, o.bG)([lp.A], () => lp.A.isThinking(t), [t]),
        g = i.useCallback(() => (0, dK.bq)(t), [t]),
        x = n?.agent?.lifetime ?? null,
        j = n?.agent?.limits ?? null,
        b = n?.agent?.session ?? null,
        y = u?.promptCeiling ?? j?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: m8.Mf,
        children: [
            (0, a.jsx)(mT, { generatedAt: n?.generated_at ?? null, fetchState: l, onRefresh: r }),
            (0, a.jsx)(mL, {
                title: E.intl.string(S.default.JghNal),
                children:
                    null == x
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.s0U5Fv),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(m$, {
                                      label: E.intl.string(S.default["9nqym2"]),
                                      value: mN((0, d_.a7)(x.cost_usd)),
                                      hint: E.intl.formatToPlainString(S.default.NCdUIh, { count: mN(x.turns) }),
                                  }),
                                  fl(E.intl.string(S.default.xtxP0e), x.orchestrator),
                                  fl(E.intl.string(S.default["9Sj3SX"]), x.codegen),
                                  fl(E.intl.string(S.default.ANCEo3), (0, d_.wU)(x.compaction)),
                                  n?.agent?.outcomes != null &&
                                      Object.keys(n.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(m$, {
                                          label: E.intl.string(S.default.SQHm7C),
                                          value: Object.entries(n.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, n] = e,
                                                      [, l] = t;
                                                  return l - n;
                                              })
                                              .map((e) => {
                                                  let [t, n] = e;
                                                  return `${mN(n)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(mL, {
                title: E.intl.string(S.default.dZHPE5),
                children:
                    null == s
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.DfVjal),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  fl(E.intl.string(S.default["7X3i9d"]), s.total),
                                  (0, a.jsx)(m$, {
                                      label: E.intl.string(S.default["8OUg09"]),
                                      value: `${Math.round((s.cache_hit_rate ?? (0, d_.CA)(s.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(mL, {
                title: E.intl.string(S.default.NbRk9a),
                children: [
                    null != u && null != y
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(mD, {
                                      label: E.intl.string(S.default.Kw5wiQ),
                                      used: u.tokensAfter,
                                      max: y,
                                      formatValue: mN,
                                  }),
                                  (0, a.jsx)(m$, {
                                      label: E.intl.string(S.default.mRbSns),
                                      value: `${mN(u.tokensBefore)} \u{2192} ${mN(u.tokensAfter)}`,
                                      hint: E.intl.formatToPlainString(S.default.Vq3skS, {
                                          count: mN(u.retainedMessages),
                                          time: mC(u.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != y
                                      ? E.intl.formatToPlainString(S.default.GMLCNv, { ceiling: mN(y) })
                                      : E.intl.string(S.default.s0U5Fv),
                          }),
                    null != c &&
                        (0, a.jsx)(m$, {
                            label: E.intl.string(S.default["4BX5KK"]),
                            value: `${mN(c.projected)} / ${mN(c.threshold)}`,
                            critical: !0,
                            hint: E.intl.formatToPlainString(S.default["6ngCax"], { time: mC(c.observedAt) }),
                        }),
                    (0, a.jsxs)("div", {
                        className: m8.Lj,
                        children: [
                            (0, a.jsx)(Z.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["1EiJeb"]),
                                disabled: "pending" === d,
                                onClick: m,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof d && "compacted" !== d.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.wox6Ev);
                                    if ("pending" === e) return E.intl.string(S.default.OcPHQ1);
                                    let t = mC(e.observedAt);
                                    if ("compacted" === e.outcome)
                                        return E.intl.formatToPlainString(S.default.BhRjZZ, { time: t });
                                    let n =
                                        "declined" === e.outcome
                                            ? S.default["o/FKzF"]
                                            : "busy" === e.outcome
                                              ? S.default.YZb4hK
                                              : S.default.ZoUSVK;
                                    return E.intl.formatToPlainString(n, {
                                        reason: e.reason ?? "no reason given",
                                        time: t,
                                    });
                                })(d),
                            }),
                            "object" == typeof d &&
                                !0 === d.pendingTurn &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(Z.$, {
                                            variant: "critical-primary",
                                            size: "sm",
                                            text: E.intl.string(S.default.ZxG2AI),
                                            onClick: f,
                                        }),
                                        (0, a.jsx)(v.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            children: E.intl.string(S.default.V73vdN),
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: m8.Lj,
                        children: [
                            (0, a.jsx)(Z.$, {
                                variant: "secondary",
                                size: "sm",
                                text: E.intl.string(S.default["5qCjBu"]),
                                loading: "pending" === h,
                                disabled: "pending" === h || p,
                                onClick: g,
                            }),
                            (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                role: "status",
                                color:
                                    "object" == typeof h && "restarted" !== h.outcome
                                        ? "text-feedback-critical"
                                        : "text-muted",
                                children: (function (e) {
                                    if ("idle" === e) return E.intl.string(S.default.mlok8D);
                                    if ("pending" === e) return E.intl.string(S.default["1ugSyK"]);
                                    let t = mC(e.observedAt);
                                    return E.intl.formatToPlainString(
                                        "restarted" === e.outcome ? S.default["76mfqO"] : S.default.FiVRoT,
                                        { reason: e.reason ?? "", time: t },
                                    );
                                })(h),
                            }),
                        ],
                    }),
                    (0, a.jsx)(fn, { projectId: t }),
                ],
            }),
            (0, a.jsx)(ft, { projectId: t }),
            (null != b || n?.analytics != null) &&
                (0, a.jsxs)(mL, {
                    title: E.intl.string(S.default.EsSzCS),
                    children: [
                        null != b &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(m$, {
                                        label: E.intl.string(S.default.CLXHAs),
                                        value: mC(b.instance_since),
                                        hint: E.intl.string(S.default.UCwUEX),
                                    }),
                                    (0, a.jsx)(m$, { label: E.intl.string(S.default["8V8e1Z"]), value: mN(b.sockets) }),
                                    (0, a.jsx)(m$, {
                                        label: E.intl.string(S.default["4pBzYW"]),
                                        value: b.turn_inflight
                                            ? E.intl.string(S.default.Wv025I)
                                            : E.intl.string(S.default["7/lsFY"]),
                                    }),
                                    b.queued_messages > 0 &&
                                        (0, a.jsx)(m$, {
                                            label: E.intl.string(S.default["3oUYnv"]),
                                            value: mN(b.queued_messages),
                                        }),
                                ],
                            }),
                        n?.analytics != null && (0, a.jsx)(mz, { analytics: n.analytics }),
                    ],
                }),
            null != j &&
                (0, a.jsxs)(mL, {
                    title: E.intl.string(S.default["LEIhp/"]),
                    children: [
                        (0, a.jsx)(m$, {
                            label: E.intl.string(S.default.IlDBN3),
                            value: mN(j.max_subagent_iterations),
                        }),
                        (0, a.jsx)(m$, {
                            label: E.intl.string(S.default["ZdzKR+"]),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, { count: mN(j.context_window_tokens) }),
                        }),
                        (0, a.jsx)(m$, {
                            label: E.intl.string(S.default.cIhN2W),
                            value: E.intl.formatToPlainString(S.default.yHJxuP, {
                                count: mN(j.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(m$, {
                            label: E.intl.string(S.default["+fOn/q"]),
                            value: mN(j.max_user_message_chars),
                        }),
                        (0, a.jsx)(m$, { label: E.intl.string(S.default.kIHga0), value: mN(j.max_build_attempts) }),
                        (0, a.jsx)(m$, { label: E.intl.string(S.default.Iw03yW), value: mN(j.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var fa = n(237528),
    fi = n(629584),
    fs = n(531893);
function fo(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: fs.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: E.intl.string(S.default.h1SE6R),
              }),
          });
}
function fu(e) {
    let { state: t, emptyTitle: n, emptyBody: l } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: fs.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: E.intl.string(S.default.h1SE6R),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: E.intl.string(S.default["8SErdg"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: fs.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: n }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: l }),
              ],
          });
}
function fc(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: fs.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: E.intl.string(S.default.V7Ri8H),
              }),
          })
        : null;
}
var fd = n(109079);
let fm = i.memo(function (e) {
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
        className: fd.vK,
        children: [
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-subtle",
                className: fd.Mt,
                selectable: !0,
                children: dW(n.ts) ?? n.ts,
            }),
            (0, a.jsx)(v.E, {
                tag: "span",
                variant: "text-xxs/semibold",
                color:
                    "error" === (t = n.level)
                        ? "text-feedback-critical"
                        : "warn" === t
                          ? "text-feedback-warning"
                          : "text-muted",
                className: fd.dm,
                children: n.level,
            }),
            (0, a.jsxs)("div", {
                className: fd.t4,
                children: [
                    l &&
                        null != n.source &&
                        (0, a.jsx)("span", { className: fd.Cq, children: (0, a.jsx)(fa.v, { text: n.source }) }),
                    null != n.kind &&
                        (0, a.jsx)("span", {
                            className: fd.Cq,
                            title: n.build ?? void 0,
                            children: (0, a.jsx)(fa.v, { text: E.intl.string(S.default.TrC9c8), variant: "redLight" }),
                        }),
                    null != u
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  "" !== u.prefix &&
                                      (0, a.jsxs)(v.E, {
                                          tag: "span",
                                          variant: "text-xs/normal",
                                          color: c,
                                          selectable: !0,
                                          children: [u.prefix, " "],
                                      }),
                                  (0, a.jsxs)(C.D, {
                                      className: fd.Pq,
                                      "aria-expanded": r,
                                      "aria-controls": o,
                                      "aria-label": E.intl.string(S.default["9CTzyV"]),
                                      onClick: () => s((e) => !e),
                                      children: [
                                          r
                                              ? (0, a.jsx)(nt.a, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                })
                                              : (0, a.jsx)(t0._, {
                                                    size: "xs",
                                                    color: "currentColor",
                                                    "aria-hidden": !0,
                                                }),
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/medium",
                                              color: "none",
                                              children: [
                                                  u.marker,
                                                  " ",
                                                  E.intl.formatToPlainString(
                                                      "[\u2026]" === u.marker ? S.default.kUhyUv : S.default["N+fphl"],
                                                      { count: u.size },
                                                  ),
                                              ],
                                          }),
                                      ],
                                  }),
                                  r &&
                                      (0, a.jsx)(v.E, {
                                          tag: "div",
                                          variant: "text-xs/normal",
                                          color: c,
                                          className: fd.dF,
                                          selectable: !0,
                                          id: o,
                                          children: u.pretty,
                                      }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
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
function ff(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([dB.A], () => dB.A.getLogs(t), [t]),
        l = (0, o.bG)([dB.A], () => dB.A.getHistoryState(t, "logs")),
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
                mE.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                            case "stable":
                                return mS(e);
                            case "web":
                                return E.intl.string(S.default.IVzfVV);
                            default:
                                return E.intl.string(S.default["Um1/8L"]);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: fd.$F,
        children: [
            (0, a.jsxs)("div", {
                className: fd.y4,
                children: [
                    (0, a.jsx)(fi.I, {
                        look: "pill",
                        "aria-label": E.intl.string(S.default.MhvyUU),
                        options: p,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: fd.KT,
                        children: (0, a.jsx)(dH.I, {
                            query: u,
                            onChange: c,
                            onClear: () => c(""),
                            size: "sm",
                            placeholder: E.intl.string(S.default["m2+37Y"]),
                            "aria-label": E.intl.string(S.default["m2+37Y"]),
                        }),
                    }),
                ],
            }),
            n.length > 0 && (0, a.jsx)(fo, { state: l }),
            (0, a.jsxs)(r1.Ch, {
                ref: m,
                onScroll: h,
                overflow: "auto",
                className: fd.sx,
                children: [
                    (0, a.jsx)(fc, { state: l }),
                    0 === n.length
                        ? (0, a.jsx)(fu, {
                              state: l,
                              emptyTitle: E.intl.string(S.default.S7qlPG),
                              emptyBody: E.intl.string(S.default.nD0S9z),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: E.intl.string(S.default["4SIdrX"]),
                            })
                          : d.map((e) => (0, a.jsx)(fm, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function fh(e) {
    let { title: t, preview: n, stable: l, renderEnv: r } = e,
        s = [];
    return (
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("preview", n) }, "preview")),
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("stable", l) }, "stable")),
        (0, a.jsx)(mL, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: E.intl.string(S.default.umcjif),
                      }),
        })
    );
}
function fp(e) {
    var t;
    let { env: n, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(m$, {
                      label: E.intl.formatToPlainString(S.default["01ZMS4"], { env: mS(n) }),
                      value: ((t = l.connected), E.intl.string(t ? S.default.Wv025I : S.default["7/lsFY"])),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(m$, {
                      label: E.intl.string(S.default["z1dh+F"]),
                      value: mN(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${mC(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(m$, { label: E.intl.string(S.default.Iz5GnJ), value: mN(l.guild_count) }),
                  (0, a.jsx)(m$, {
                      label: E.intl.string(S.default["7UqtNv"]),
                      value: mN(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? E.intl.formatToPlainString(S.default.MasSly, {
                                    code: l.last_close_code,
                                    time: mC(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(m$, {
                          label: E.intl.string(S.default["x3+JXJ"]),
                          value: mN(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(m$, { label: mS(n), value: E.intl.string(S.default.lTHQss) });
}
function fg(e) {
    let { env: t, metrics: n } = e,
        l = n.status_4xx + n.status_5xx;
    return (0, a.jsx)(m$, {
        label: mS(t),
        value: E.intl.formatToPlainString(S.default["Xq+wHT"], {
            requests: mN(n.requests),
            failures: mN(l + n.errors),
        }),
        critical: n.errors + n.status_5xx > 0,
        hint:
            null != n.last_failure
                ? E.intl.formatToPlainString(S.default["o/ZBm4"], {
                      host: n.last_failure.host,
                      status: n.last_failure.status ?? "network",
                      time: mC(n.last_failure.at),
                  })
                : E.intl.formatToPlainString(S.default["7KlGT6"], { time: mC(n.since) }),
    });
}
function fx(e) {
    let { env: t, runtime: n } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(m$, {
                label: E.intl.formatToPlainString(S.default["92gVTm"], { env: mS(t) }),
                value: mN(n.connections),
            }),
            n.schedules.map((e) =>
                (0, a.jsx)(
                    m$,
                    {
                        label: E.intl.formatToPlainString(S.default.Dafaco, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? E.intl.formatToPlainString(S.default.ologm6, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? E.intl.formatToPlainString(S.default.wxAWNv, { time: mC(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function fv(e) {
    let { env: t, metrics: n } = e;
    return (0, a.jsx)(m$, {
        label: mS(t),
        value: E.intl.formatToPlainString(S.default.suAOj9, { calls: mN(n.calls), errors: mN(n.errors) }),
        critical: n.errors > 0,
        hint: n.last_model,
    });
}
function fj(e) {
    let { title: t, metrics: n, limits: l } = e;
    if (null == n || 0 === n.requests)
        return (0, a.jsx)(mL, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: E.intl.string(S.default["Noami/"]),
            }),
        });
    let r = n.cpu_ms_total / n.requests,
        i = n.cpu_ms_total > 0;
    return (0, a.jsxs)(mL, {
        title: t,
        children: [
            (0, a.jsx)(m$, {
                label: E.intl.string(S.default.xtD4Zp),
                value: mN(n.requests),
                hint: E.intl.formatToPlainString(S.default["7KlGT6"], { time: mC(n.since) }),
            }),
            (0, a.jsx)(m$, { label: E.intl.string(S.default.gfRhR3), value: mN(n.errors), critical: n.errors > 0 }),
            i
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(mD, {
                              label: E.intl.string(S.default.LEJ5r3),
                              used: n.cpu_ms_max,
                              max: l.cpu_ms_per_request,
                              formatValue: mw,
                          }),
                          (0, a.jsx)(m$, {
                              label: E.intl.string(S.default.mSKImM),
                              value: mw(r),
                              hint: E.intl.formatToPlainString(S.default.JqMU05, {
                                  total: mw(n.cpu_ms_total),
                                  wall: mw(n.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(m$, {
                      label: E.intl.string(S.default.LEJ5r3),
                      value: E.intl.string(S.default["2Ekb2b"]),
                      hint: E.intl.string(S.default.G0aq7i),
                  }),
            !i &&
                n.wall_ms_total > 0 &&
                (0, a.jsx)(m$, { label: E.intl.string(S.default.xvmL1D), value: mw(n.wall_ms_total) }),
            n.exceeded_cpu > 0 &&
                (0, a.jsx)(m$, { label: E.intl.string(S.default["4sQYwH"]), value: mN(n.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(m$, {
                label: E.intl.string(S.default.bQenOy),
                value: mN(n.exceeded_memory),
                critical: n.exceeded_memory > 0,
                hint: E.intl.formatToPlainString(S.default["5jIZwv"], { limit: `${l.memory_mb} MB` }),
            }),
            null != n.build && (0, a.jsx)(m$, { label: E.intl.string(S.default.xgpn4Y), value: mA(n.build) }),
        ],
    });
}
function fb(e) {
    let { status: t } = e,
        { stable: n, preview: l, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: E.intl.string(S.default.V5kbaH), metrics: n }]
            : [
                  { key: "preview", label: E.intl.string(S.default["2yLYlG"]), metrics: l },
                  { key: "stable", label: E.intl.string(S.default.eiAi57), metrics: n },
              ];
    return (0, a.jsx)(mL, {
        title: E.intl.string(S.default.mRt7MW),
        children: o.map((e) => {
            let { key: t, label: n, metrics: l } = e;
            return null == l
                ? (0, a.jsx)(m$, { label: n, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(m$, {
                                  label: E.intl.formatToPlainString(S.default.u7kJJ4, { env: n }),
                                  value: mk(l.r2_bytes),
                                  hint: E.intl.formatToPlainString(
                                      l.r2_truncated ? S.default.lH0oQw : S.default.m9h02S,
                                      { count: mN(l.r2_objects) },
                                  ),
                              }),
                              null != l.db_bytes &&
                                  (0, a.jsx)(mD, {
                                      label: E.intl.formatToPlainString(S.default.mnbPqt, { env: n }),
                                      used: l.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: mk,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function fy(e) {
    let { status: t, fetchState: n, onRefresh: l } = e;
    return (0, a.jsxs)("div", {
        className: m8.Mf,
        children: [
            (0, a.jsx)(mT, { generatedAt: t?.generated_at ?? null, fetchState: n, onRefresh: l }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(fj, {
                            title: E.intl.string(S.default.o5xzvl),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fj, {
                            title: E.intl.string(S.default.n2X3ZK),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(fb, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(fh, {
                                title: E.intl.string(S.default["7mahem"]),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fp, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(fh, {
                                title: E.intl.string(S.default.THneIO),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fg, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(fh, {
                                title: E.intl.string(S.default.vboq04),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fx, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(fh, {
                                title: E.intl.string(S.default.UzhuEq),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(fv, { env: e, metrics: t }),
                            }),
                        null != t.analytics && (0, a.jsx)(mO, { analytics: t.analytics }),
                        (0, a.jsxs)(mL, {
                            title: E.intl.string(S.default.fQMpFp),
                            children: [
                                (0, a.jsx)(m$, {
                                    label: E.intl.string(S.default["2yLYlG"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? mA(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(m$, {
                                    label: E.intl.string(S.default.eiAi57),
                                    value:
                                        null != t.deployments.stable_build ? mA(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var fk = n(592465);
function fw(e) {
    let { projectId: t, onClose: n } = e,
        l = lb(),
        [r, s] = i.useState(() => (l && lx?.projectId === t ? "trace" : "logs")),
        u = (0, o.bG)([cM.A], () => cM.A.getStatus(t), [t]),
        c = (0, o.bG)([cM.A], () => cM.A.getFetchState(t), [t]),
        d = i.useCallback(() => {
            ((0, dK.R7)(t), (0, dK.DK)(t));
        }, [t]);
    (i.useEffect(() => d(), [d]), i.useEffect(() => (0, _.subscribeDebugBacklog)(t), [t]));
    let m = i.useCallback(() => {
        if (!l) return !1;
        let e = (function (e) {
            if (null == lx || lx.projectId !== e) return null;
            let { traceId: t } = lx;
            return ((lx = null), t);
        })(t);
        return null != e && (mv(t, e), !0);
    }, [t, l]);
    (i.useEffect(() => {
        m();
    }, [m]),
        lv(t, () => {
            m() && s("trace");
        }));
    let f = i.useCallback(() => {
            (0, eQ.C)(
                JSON.stringify(
                    {
                        captured_at: new Date().toISOString(),
                        project_id: t,
                        status: cM.A.getStatus(t),
                        last_turn_usage: cM.A.getLastTurnUsage(t),
                        last_compaction: cM.A.getLastCompaction(t),
                        last_compaction_decline: cM.A.getLastCompactionDecline(t),
                        timing_traces: cM.A.getTimingTraces(t),
                        logs: dB.A.getLogs(t),
                    },
                    null,
                    2,
                ),
                () => (0, ed.P0)({ text: E.intl.string(S.default.wI6fhl), variant: "success" }),
            );
        }, [t]),
        h = E.intl.string(S.default["Q4FN+H"]);
    return (0, a.jsxs)("section", {
        className: fk.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(ri.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ri.Ay.Icon, {
                            icon: cJ.CopyIcon,
                            tooltip: E.intl.string(S.default.TkHqy2),
                            onClick: f,
                        }),
                        (0, a.jsx)(ri.Ay.Icon, { icon: em.P, tooltip: E.intl.string(E.t.cpT0Cq), onClick: n }),
                    ],
                }),
                children: [
                    (0, a.jsx)(ri.Ay.ChannelIcon, { icon: n_.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(ri.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: fk.rf,
                children: [
                    (0, a.jsxs)(dG.V, {
                        selectedItem: r,
                        type: "top",
                        onItemSelect: (e) => s(e),
                        "aria-label": E.intl.string(S.default.RvvWIh),
                        className: fk.vR,
                        children: [
                            (0, a.jsx)(dG.V.Item, { id: "logs", children: E.intl.string(S.default["+VRYCm"]) }),
                            (0, a.jsx)(dG.V.Item, { id: "worker", children: E.intl.string(S.default["50D0FZ"]) }),
                            (0, a.jsx)(dG.V.Item, { id: "agent", children: E.intl.string(S.default.UkbTK1) }),
                            l ? (0, a.jsx)(dG.V.Item, { id: "trace", children: "Trace" }) : null,
                        ],
                    }),
                    "logs" === r
                        ? (0, a.jsx)(ff, { projectId: t })
                        : "worker" === r
                          ? (0, a.jsx)(fy, { status: u, fetchState: c, onRefresh: d })
                          : "trace" === r && l
                            ? (0, a.jsx)(my, { projectId: t })
                            : (0, a.jsx)(fr, { projectId: t, status: u, fetchState: c, onRefresh: d }),
                ],
            }),
        ],
    });
}
var fN = n(365912),
    fC = n(873715);
function fA(e) {
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
let fS = Object.freeze({ x: -1, y: -1 });
function fE(e) {
    let t = Array.isArray(e?.results) ? e.results[0] : void 0;
    if (null == t) return { status: "failed" };
    if (t.ok) {
        let e = fA(t.element);
        return null == e ? { status: "failed" } : { status: "picked", target: e };
    }
    return "not_found" === t.code
        ? { status: "none" }
        : "invalid_command" === t.code
          ? { status: "unsupported" }
          : { status: "failed" };
}
var fI = n(192888);
function fM(e, t) {
    return (0, fI.W)(
        e,
        "control",
        { steps: [{ action: "inspect", x: t.x, y: t.y }], timeoutMs: 1500, passive: !0 },
        { timeoutMs: 5500, label: "inspect" },
    ).then(fE, () => ({ status: "failed" }));
}
var f_ = n(108308);
let fP = { x: 25, y: 21 };
function fR(e, t, n) {
    return {
        left: t.left + e.rect.x * n,
        top: t.top + e.rect.y * n,
        width: Math.max(e.rect.width * n, 1),
        height: Math.max(e.rect.height * n, 1),
    };
}
function fT(e, t, n, l) {
    let r = fR(e, n, l);
    return { x: r.left + r.width * t.x, y: r.top + r.height * t.y };
}
function fL(e, t) {
    return {
        left: Math.min(Math.max(e.x - 12, t.left), t.left + t.width - 24),
        top: Math.min(Math.max(e.y - 12, t.top), t.top + t.height - 24),
    };
}
function f$(e) {
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
function fD(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveIframe: r, toggleRef: s } = e,
        u = null != n && n === l ? t : null,
        { active: c, annotations: d } = n2(u),
        m = (0, ly.Zv)(u),
        f = (0, tt.useHasAnyModalOpen)(),
        h = (0, o.bG)([a_.default], () => a_.default.getCurrentUser()),
        p = h?.id ?? null,
        [g, x] = i.useState(null),
        [j, b] = i.useState(!1),
        [y, k] = i.useState(!1),
        [w, N] = i.useState(null),
        [C, A] = i.useState(!1),
        I = i.useRef(null),
        M = i.useRef(null),
        P = i.useRef(null),
        [R, T] = i.useState(null),
        [L, $] = i.useState(!1),
        [D, z] = i.useState(null),
        [O, F] = i.useState(null),
        q = i.useRef(!1),
        [U, G] = i.useState(!1),
        [B, K] = i.useState(null),
        H = c && !m && !f;
    null == D || (H && D.projectId === u) || z(null);
    let V = D?.projectId ?? null;
    i.useEffect(() => {
        if (null != V) return () => tG(V, "design");
    }, [V]);
    let W = rh(r, H);
    i.useEffect(() => {
        if (!H || null == u) return;
        let e = !0,
            t = r();
        if (null == t) return void k(!0);
        (b(!0), k(!1));
        let n = `design-feedback-${crypto.randomUUID()}`;
        return (
            (0, fC.J)(t, n, { steps: [{ action: "snapshot" }], timeoutMs: 8e3, passive: !0 }).then(
                (t) => {
                    if (!e) return;
                    b(!1);
                    let n = "completed" === t.status ? f$(t.response) : null;
                    null == n ? k(!0) : (x(n), nQ(u, { url: n.url, title: n.title, viewport: n.viewport }));
                },
                () => {
                    e && (b(!1), k(!0));
                },
            ),
            () => {
                e = !1;
            }
        );
    }, [H, r, u]);
    let X = i.useRef(null);
    (i.useEffect(() => {
        if (!H || null == W || null == u) return;
        if (null == g) {
            X.current = W;
            return;
        }
        if (rf(X.current, W)) return;
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
                    (0, fC.J)(e, `design-feedback-${crypto.randomUUID()}`, {
                        steps: l.length > 0 ? l : [{ action: "snapshot" }],
                        snapshot: 0 === n && l.length > 0,
                        timeoutMs: 8e3,
                        passive: !0,
                    }).then((e) => {
                        let n;
                        if ("completed" !== e.status || !ee.current) return;
                        let l = f$(e.response);
                        null != l && (x(l), nQ(u, { url: l.url, title: l.title, viewport: l.viewport }));
                        let r = new Map();
                        (e.response.results.forEach((e, n) => {
                            let l = t[n];
                            if (null == l || "locate" !== e.action || !e.ok) return;
                            let a = fA(e.element);
                            null != a && r.set(l.id, a);
                        }),
                            (n = nW(u)).active &&
                                0 !== r.size &&
                                nX(u, {
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
    }, [H, W, g, d, u, r]),
        i.useEffect(() => {
            if (!H)
                return () => {
                    (N(null), z(null), K(null), x(null));
                };
        }, [H]));
    let J = i.useRef(null),
        Y = i.useRef(null),
        Q = i.useRef(!1),
        ee = i.useRef(!1);
    i.useEffect(() => {
        ((ee.current = H), H || ((J.current = null), (Y.current = null), (P.current = null), A(!1)));
    }, [H]);
    let et = i.useCallback(
            function e() {
                if (Q.current) return;
                let t = J.current;
                if (null == t) return;
                J.current = null;
                let n = r();
                null != n &&
                    ((Q.current = !0),
                    fM(n, t).then((t) => {
                        if (((Q.current = !1), ee.current)) {
                            if ("picked" !== t.status || fG(t.target, es.current.rect, es.current.scale))
                                "picked" === t.status || "none" === t.status
                                    ? N(null)
                                    : "unsupported" === t.status && $(!0);
                            else {
                                let e = nO(t.target);
                                (T((t) => (fU(t, e) ? t : e)),
                                    N((e) => {
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
        en = i.useCallback(() => {
            if (null == D) return;
            let e = !q.current;
            (F({ at: D.at, label: D.label, draft: D.draft, instant: e }), G(e), z(null));
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
            if (null == O) return;
            let e = setTimeout(() => F(null), fF);
            return () => clearTimeout(e);
        }, [O]));
    let el = null == g || null == W || g.viewport.width < 1 ? 1 : W.width / g.viewport.width,
        er = null != g || y,
        ea = i.useMemo(() => g?.elements ?? [], [g]),
        es = i.useRef({ rect: null, scale: 1 });
    i.useLayoutEffect(() => {
        es.current = { rect: W, scale: el };
    }, [W, el]);
    let eo = i.useCallback(
            (e, t, n) => {
                null != u &&
                    (tG(u, "design"),
                    K(null),
                    (q.current = !1),
                    z({ projectId: u, target: e, anchor: t, draft: "", at: n, label: nO(e) }));
            },
            [u],
        ),
        eu = i.useCallback((e, t) => ({ x: (e.clientX - t.left) / el, y: (e.clientY - t.top) / el }), [el]),
        ec = i.useCallback(() => {
            let e = P.current;
            if (null == e) return;
            let t = I.current;
            null != t && (t.style.transform = `translate3d(${e.x + 20}px, ${e.y + 20}px, 0)`);
            let n = M.current;
            null != n && (n.style.transform = `translate3d(${e.x}px, ${e.y}px, 0)`);
        }, []);
    i.useLayoutEffect(ec);
    let ed = i.useCallback(
            (e) => {
                if (null == W || null != B) return;
                if (((P.current = { x: e.clientX, y: e.clientY }), ec(), A(!0), null != D)) {
                    (Math.abs(e.clientX - D.at.x) > fq || Math.abs(e.clientY - D.at.y) > fq) && (q.current = !0);
                    return;
                }
                if (!er) return void N(null);
                let t = eu(e, W);
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
                        })(ea, t.x, t.y),
                        n = null != e && fG(e, W, el) ? null : e;
                    if (null != n) {
                        let e = nO(n);
                        T((t) => (fU(t, e) ? t : e));
                    }
                    N((e) => (e?.ref === n?.ref ? e : n));
                    return;
                }
                let n = { x: Math.round(t.x), y: Math.round(t.y) },
                    l = Y.current;
                (null == l || l.x !== n.x || l.y !== n.y) && ((Y.current = n), (J.current = n), et());
            },
            [W, el, er, eu, L, ea, D, B, ec, et],
        ),
        em = null == B ? null : d.find((e) => e.id === B.id),
        ef = H && (C || D?.target.marker != null || em?.target.marker != null);
    i.useEffect(() => {
        if (ef)
            return () => {
                let e = r();
                null != e && fM(e, fS);
            };
    }, [ef, r]);
    let eh = i.useCallback(() => {
        (A(!1), N(null), (Y.current = null), (J.current = null));
    }, []);
    i.useEffect(() => {
        if (!H || !C || !er || L || null != D || null != B) return;
        let e = P.current,
            { rect: t, scale: n } = es.current;
        if (null == e || null == t) return;
        let l = { x: Math.round((e.x - t.left) / n), y: Math.round((e.y - t.top) / n) };
        ((Y.current = l), (J.current = l), et());
    }, [H, C, er, L, D, B, et]);
    let ep = i.useCallback(
            (e) => {
                if (null != D || null != B) {
                    (en(), K(null));
                    return;
                }
                if (null == w || null == W) return;
                let t = eu(e, W);
                eo(
                    w,
                    (function (e, t, n) {
                        let { x: l, y: r, width: a, height: i } = e.rect;
                        return a < 1 || i < 1
                            ? nD
                            : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - r) / i)) };
                    })(w, t.x, t.y),
                    { x: e.clientX, y: e.clientY },
                );
            },
            [w, W, eu, D, B, eo, en],
        ),
        eg = i.useCallback(() => {
            null != u && (N(null), null != ls(u) ? lu(u) : nY(u));
        }, [u]),
        ex = i.useCallback(() => {
            null != u &&
                (null != D
                    ? en()
                    : B?.confirmingRemove === !0
                      ? K({ ...B, confirmingRemove: !1 })
                      : null != B
                        ? K(null)
                        : eg());
        }, [u, D, B, en, eg]),
        ej = i.useRef(ex),
        eb = i.useRef(u),
        ey = i.useRef(eg);
    i.useLayoutEffect(() => {
        ((ej.current = ex), (eb.current = u), (ey.current = eg));
    });
    let ek = i.useRef(null);
    i.useEffect(() => {
        if (H)
            return (
                ro.A.disable(),
                window.addEventListener("keydown", e),
                document.addEventListener("mousedown", t),
                () => {
                    (window.removeEventListener("keydown", e),
                        document.removeEventListener("mousedown", t),
                        ro.A.enable());
                }
            );
        function e(e) {
            "Escape" === e.key && (e.preventDefault(), ej.current());
        }
        function t(e) {
            let t = e.target;
            !(0, ei.vq)(t) ||
                ek.current?.contains(t) === !0 ||
                s?.current?.contains(t) === !0 ||
                (function (e) {
                    try {
                        return ((0, fN.J$)(e), !0);
                    } catch {
                        return !1;
                    }
                })(t) ||
                ((null == eb.current || null == ls(eb.current)) && ey.current());
        }
    }, [H, s]);
    let ew = i.useCallback(
            (e) => {
                if (null == u) return;
                if ("Escape" === e.key) {
                    (e.preventDefault(), e.stopPropagation(), ex());
                    return;
                }
                if (null != D || null != B || 0 === ea.length) return;
                let t = "ArrowRight" === e.key || "ArrowDown" === e.key,
                    n = "ArrowLeft" === e.key || "ArrowUp" === e.key;
                if (t || n) {
                    e.preventDefault();
                    let n = null == w ? -1 : ea.findIndex((e) => e.ref === w.ref);
                    N(ea[(n + (t ? 1 : -1) + ea.length) % ea.length]);
                    return;
                }
                "Enter" === e.key &&
                    null != w &&
                    (e.preventDefault(),
                    eo(w, nD, { x: (W?.left ?? 0) + w.rect.x * el, y: (W?.top ?? 0) + w.rect.y * el }));
            },
            [u, D, B, ea, w, eo, ex, W, el],
        ),
        eN = i.useCallback(
            (e) => {
                null == u ||
                    null == D ||
                    ((nz(D.draft) || (e?.length ?? 0) !== 0) &&
                        ((0, _.sendUserMessage)(
                            u,
                            (function (e, t) {
                                let { kind: n, name: l } = nO(e),
                                    r = [n, l].filter((e) => "" !== e).join(": ");
                                return `${nU}${r}${nG}${nq(e)}
${t.trim()}`;
                            })(D.target, D.draft),
                            e,
                        ),
                        en(),
                        N(null)));
            },
            [u, D, en],
        ),
        eC = i.useCallback((e) => (null == u ? Promise.reject(Error("no project")) : (0, ev.vX)(u, e)), [u]),
        eA = i.useCallback(() => {
            if (null != u && null != B && null != p && nz(B.draft)) {
                var e, t;
                let n, l;
                ((e = B.id),
                    (t = B.draft.trim()),
                    null != (l = (n = nW(u)).annotations.find((t) => t.id === e)) &&
                        n0(l, p) &&
                        nX(u, { ...n, annotations: n.annotations.map((n) => (n.id === e ? { ...n, comment: t } : n)) }),
                    K({ ...B, editing: !1 }));
            }
        }, [u, B, p]),
        eS = i.useCallback(() => {
            if (null != u && null != B && null != p) {
                var e;
                let t, n;
                ((e = B.id),
                    null != (n = (t = nW(u)).annotations.find((t) => t.id === e)) &&
                        n0(n, p) &&
                        nX(u, { ...t, annotations: t.annotations.filter((t) => t.id !== e) }),
                    K(null));
            }
        }, [u, B, p]),
        eE = c
            ? j
                ? E.intl.string(S.default["Eb/YV9"])
                : y
                  ? E.intl.string(S.default.FD30bh)
                  : E.intl.formatToPlainString(S.default.dTSqLF, { count: d.length })
            : "",
        eI = H && null != W,
        eM = C && null == B,
        e_ = D?.target ?? em?.target ?? null,
        eP = D ?? O,
        eR = D ?? (O?.instant === !0 ? null : O),
        eT =
            null != em && null != W
                ? (function (e, t) {
                      let { left: n, top: l } = fL(e, t);
                      return { x: n + 12, y: l + 12 };
                  })(fT(em.target, em.anchor, W, el), W)
                : null;
    return (
        i.useEffect(() => {
            let e = r();
            if (em?.target.marker == null || null == e) return;
            let { target: t, anchor: n } = em;
            fM(e, { x: Math.round(t.rect.x + t.rect.width * n.x), y: Math.round(t.rect.y + t.rect.height * n.y) });
        }, [em, r]),
        (0, rs.createPortal)(
            (0, a.jsxs)("div", {
                ref: ek,
                className: f_.Li,
                children: [
                    (0, a.jsx)(at.A, {
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
                                      className: f_.MT,
                                      style: { left: W.left, top: W.top, width: W.width, height: W.height },
                                      "data-plain-cursor": eM ? void 0 : "",
                                      "data-testid": "conjure-design-surface",
                                      role: "application",
                                      "aria-label": E.intl.string(S.default["speb/9"]),
                                      tabIndex: 0,
                                      onMouseMove: ed,
                                      onMouseLeave: eh,
                                      onClick: ep,
                                      onKeyDown: ew,
                                  }),
                                  null != w && null == w.marker && null == D && null == B
                                      ? (0, a.jsx)(fB, { box: fR(w, W, el) })
                                      : null,
                                  (0, a.jsx)("div", {
                                      ref: I,
                                      className: f_.aZ,
                                      children: (0, a.jsx)("div", {
                                          className: f_.xz,
                                          "data-shown": null != w && null == B && null == D ? "" : void 0,
                                          "data-instant": U ? "" : void 0,
                                          children: (0, a.jsxs)(v.E, {
                                              variant: "text-xs/medium",
                                              className: f_.Ux,
                                              children: [
                                                  null == R
                                                      ? null
                                                      : (0, a.jsx)("span", { className: f_.Tl, children: R.kind }),
                                                  null == R || "" === R.name
                                                      ? null
                                                      : (0, a.jsxs)("span", {
                                                            className: f_.kh,
                                                            children: [" ", R.name],
                                                        }),
                                              ],
                                          }),
                                      }),
                                  }),
                                  (0, a.jsx)("div", {
                                      ref: M,
                                      className: f_.Y,
                                      children: eM ? (0, a.jsx)("div", { className: f_.u }) : null,
                                  }),
                                  null == eR
                                      ? null
                                      : (0, a.jsx)("div", {
                                            className: f_.aZ,
                                            style: {
                                                transform: `translate3d(${eR.at.x + 20}px, ${eR.at.y + 20}px, 0)`,
                                            },
                                            children: (0, a.jsx)("div", {
                                                className: f_.xz,
                                                "data-shown": "",
                                                "data-locked": "",
                                                "data-closing": null == D ? "" : void 0,
                                                children: (0, a.jsxs)(v.E, {
                                                    variant: "text-xs/medium",
                                                    className: f_.Ux,
                                                    children: [
                                                        (0, a.jsx)("span", {
                                                            className: f_.Tl,
                                                            children: eR.label.kind,
                                                        }),
                                                        "" === eR.label.name
                                                            ? null
                                                            : (0, a.jsxs)("span", {
                                                                  className: f_.kh,
                                                                  children: [" ", eR.label.name],
                                                              }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                  null != e_ && null == e_.marker
                                      ? (0, a.jsx)("div", { className: f_.D0, style: fR(e_, W, el), "aria-hidden": !0 })
                                      : null,
                                  d.map((e, t) => {
                                      let n = fT(e.target, e.anchor, W, el),
                                          l = { id: e.id, editing: !1, draft: e.comment, confirmingRemove: !1 };
                                      return (0, a.jsx)(
                                          "button",
                                          {
                                              type: "button",
                                              className: f_.xL,
                                              style: { ...fL(n, W), width: 24, height: 24 },
                                              "aria-label": E.intl.formatToPlainString(S.default.SxaIQA, {
                                                  index: t + 1,
                                                  target: nF(e.target),
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
                                                  (e.stopPropagation(), en(), K(l));
                                              },
                                              children: (0, a.jsx)(fz, { authorId: e.authorId }),
                                          },
                                          e.id,
                                      );
                                  }),
                                  null == eP || null == u
                                      ? null
                                      : (0, a.jsx)(rd, {
                                            projectId: u,
                                            at: { x: eP.at.x + 20, y: eP.at.y + 20 },
                                            bounds: W,
                                            kind: eP.label.kind,
                                            value: eP.draft,
                                            canSubmit: null != D && nz(eP.draft),
                                            onChange: (e) => {
                                                null != D && z({ ...D, draft: e });
                                            },
                                            onSubmit: eN,
                                            onDismiss: en,
                                            onUploadFile: eC,
                                            closing: null == D,
                                        }),
                                  null != em && null != B && null != eT
                                      ? (0, a.jsxs)(fO, {
                                            point: eT,
                                            frame: W,
                                            authorId: em.authorId,
                                            title: nF(em.target),
                                            testId: "conjure-design-popout",
                                            onDismiss: () => {
                                                B.confirmingRemove ? K({ ...B, confirmingRemove: !1 }) : K(null);
                                            },
                                            onMouseLeave: () => {
                                                B.editing || B.confirmingRemove || K(null);
                                            },
                                            children: [
                                                B.editing
                                                    ? (0, a.jsx)(aw.f, {
                                                          autoFocus: !0,
                                                          label: E.intl.string(S.default.KCYqWL),
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
                                                    : (0, a.jsx)(v.E, {
                                                          variant: "text-sm/normal",
                                                          color: "text-default",
                                                          className: f_.aC,
                                                          children: em.comment,
                                                      }),
                                                n0(em, p)
                                                    ? (0, a.jsx)("div", {
                                                          className: f_.eB,
                                                          children: B.confirmingRemove
                                                              ? (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(v.E, {
                                                                            variant: "text-xs/normal",
                                                                            color: "text-muted",
                                                                            className: f_.nv,
                                                                            children: E.intl.string(S.default.wOHvts),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default["W/HWvP"]),
                                                                            onClick: () =>
                                                                                K({ ...B, confirmingRemove: !1 }),
                                                                        }),
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "critical-primary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            "data-testid":
                                                                                "conjure-design-remove-confirm",
                                                                            onClick: eS,
                                                                        }),
                                                                    ],
                                                                })
                                                              : (0, a.jsxs)(a.Fragment, {
                                                                    children: [
                                                                        (0, a.jsx)(Z.$, {
                                                                            variant: "critical-secondary",
                                                                            size: "sm",
                                                                            text: E.intl.string(S.default.friIzR),
                                                                            onClick: () =>
                                                                                K({
                                                                                    ...B,
                                                                                    editing: !1,
                                                                                    confirmingRemove: !0,
                                                                                }),
                                                                        }),
                                                                        B.editing
                                                                            ? (0, a.jsx)(Z.$, {
                                                                                  variant: "primary",
                                                                                  size: "sm",
                                                                                  disabled: !nz(B.draft),
                                                                                  text: E.intl.string(S.default.iicRP9),
                                                                                  onClick: eA,
                                                                              })
                                                                            : (0, a.jsx)(Z.$, {
                                                                                  variant: "secondary",
                                                                                  size: "sm",
                                                                                  text: E.intl.string(
                                                                                      S.default["6eW9lg"],
                                                                                  ),
                                                                                  onClick: () =>
                                                                                      K({
                                                                                          ...B,
                                                                                          editing: !0,
                                                                                          draft: em.comment,
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
function fz(e) {
    let { authorId: t } = e,
        n = (0, o.bG)([a_.default], () => a_.default.getUser(t), [t]);
    return (0, a.jsx)(sM.eu, {
        src: null == n ? null : Q.Ay.getUserAvatarURL(n),
        size: s_._3.SIZE_16,
        "aria-hidden": !0,
    });
}
function fO(e) {
    let t,
        n,
        l,
        r,
        s,
        o,
        { point: u, frame: c, authorId: d, title: m, testId: f, onDismiss: h, onMouseLeave: p, children: g } = e,
        x = i.useRef(null),
        j = i.useRef(null),
        [b, y] = i.useState(fP);
    i.useLayoutEffect(() => {
        let e = x.current?.getBoundingClientRect(),
            t = j.current?.getBoundingClientRect();
        if (null == e || null == t || e.width < 1 || t.width < 1) return;
        let n = { x: t.left + t.width / 2 - e.left, y: t.top + t.height / 2 - e.top };
        y((e) => (0.5 > Math.abs(e.x - n.x) && 0.5 > Math.abs(e.y - n.y) ? e : n));
    }, []);
    let {
            left: k,
            top: w,
            originX: N,
            originY: C,
        } = ((n = Math.max((t = c.left + 8), c.left + c.width - 300 - 8)),
        (r = Math.max((l = c.top + 8), c.top + c.height - 160 - 8)),
        (s = Math.min(Math.max(u.x - b.x, t), n)),
        { left: s, top: (o = Math.min(Math.max(u.y - b.y, l), r)), originX: u.x - s, originY: u.y - o }),
        A = { left: k, top: w, "--custom-conjure-card-origin-x": `${N}px`, "--custom-conjure-card-origin-y": `${C}px` };
    return (0, a.jsxs)("div", {
        ref: x,
        className: f_.Nr,
        style: A,
        "data-testid": f,
        onMouseLeave: p,
        onKeyDown: (e) => {
            "Escape" === e.key && (e.preventDefault(), e.stopPropagation(), h());
        },
        children: [
            (0, a.jsxs)("div", {
                className: f_.MY,
                children: [
                    (0, a.jsx)("span", { ref: j, className: f_.ip, children: (0, a.jsx)(fz, { authorId: d }) }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        className: f_.Qc,
                        children: m,
                    }),
                ],
            }),
            (0, a.jsx)("div", { className: f_.zI, children: g }),
        ],
    });
}
let fF = 300,
    fq = 2;
function fU(e, t) {
    return null != e && e.kind === t.kind && e.name === t.name;
}
function fG(e, t, n) {
    if (null == t || n <= 0) return !1;
    let l = t.width / n,
        r = t.height / n;
    return !(l < 1) && !(r < 1) && e.rect.width >= 0.98 * l && e.rect.height >= 0.98 * r;
}
function fB(e) {
    let { box: t } = e;
    return (0, a.jsx)("div", { className: f_.Zt, style: t, "data-testid": "conjure-design-highlight" });
}
var fK = n(659723),
    fH = n(697744),
    fV = n(130324);
function fW(e) {
    let t = (0, fH.c)(),
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
    let r = (0, r3.j)();
    return (
        i.useEffect(() => {
            if (!r) return;
            let t = setInterval(n.onMouseEnter, e);
            return () => clearInterval(t);
        }, [n, e, r]),
        t
    );
}
function fX(e) {
    let { className: t } = e,
        { Component: n, events: l } = fW(3e4);
    return (0, a.jsxs)("div", {
        className: h()(t, fV.Ve),
        onMouseEnter: l.onMouseEnter,
        onMouseLeave: l.onMouseLeave,
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                className: fV.ol,
                children: E.intl.string(S.default.AyiQEp),
            }),
        ],
    });
}
var fJ = n(251363),
    fZ = n(944142),
    fY = n(532247),
    fQ = n(501628);
function f0(e) {
    let { progress: t } = e,
        { Component: n } = fW(1500),
        l = lj.Q_.useSetting();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-overlay-light)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "text-overlay-light", children: t.title }),
            (0, a.jsx)("div", {
                className: fQ.Ci,
                children: Array.from({ length: t.stepCount }, (e, n) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: fQ.PM,
                            "data-state": n < t.stepIndex ? "done" : n === t.stepIndex ? "current" : "todo",
                        },
                        n,
                    ),
                ),
            }),
            l && null != t.stepLabel
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-overlay-light", children: t.stepLabel })
                : null,
        ],
    });
}
function f1(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, surface: r } = e,
        s = null != t && null != n && n === l,
        u = (0, o.bG)([fZ.A], () => (s ? fZ.A.getLiveReload(t) : null), [s, t]),
        c = (0, lY.A)(n, r)?.id ?? null,
        d = u?.phase ?? null,
        m = u?.background === !0,
        f = (function (e, t, n) {
            let l = (0, fY.dv)(e),
                [r, a] = i.useState(null),
                [s, u] = i.useState(l),
                [c, d] = i.useState(t);
            s !== l && (u(l), d(t), a(null != l || c ? null : (0, fY.QP)(e, s)));
            let m = (0, o.bG)(
                    [lz.A],
                    () => {
                        let e = lz.A.getFrame(n);
                        return (0, lU.x1)(e) && e.data.proxyTicketRefreshing;
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
                        null != t.target && t.target === (0, fJ.ow)(null, n) && e();
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
        h = m ? null : (0, fY.h_)(d, u?.step ?? null, f);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(at.A, { tag: "div", role: "status", "aria-live": "polite", children: h?.title ?? "" }),
            null != h
                ? (0, a.jsx)("div", {
                      className: fQ.Lw,
                      "data-testid": "conjure-live-reload-overlay",
                      "aria-hidden": !0,
                      children: (0, a.jsx)(f0, { progress: h }),
                  })
                : null,
        ],
    });
}
var f2 = n(357858),
    f3 = n(343030),
    f5 = n(317608),
    f4 = n(35367),
    f6 = n(228946);
let f7 = { width: 1 / 0, height: 1 / 0 };
function f8(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f7;
    return { width: Math.min(e ? 844 : 390, t.width), height: Math.min(e ? 390 : 844, t.height) };
}
var f9 = n(702083);
function he(e) {
    let { children: t } = e,
        { mobile: n, landscape: l } = (0, o.cf)([lQ.A], () => ({
            mobile: lQ.A.isBuilderPreviewMobile(),
            landscape: lQ.A.isBuilderPreviewLandscape(),
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
        d = n ? f8(l, c ?? void 0) : null;
    return (0, a.jsx)("div", {
        ref: r,
        className: h()(f9.dw, { [f9.PQ]: null != d }),
        children: (0, a.jsx)("div", { className: h()(f9.R9, { [f9.Vg]: null != d }), style: d ?? void 0, children: t }),
    });
}
var ht = n(347927);
function hn(e) {
    let { title: t, body: n, wide: l = !1, children: r } = e;
    return (0, a.jsxs)("div", {
        className: h()(ht.Bf, l && ht.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: ht.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    null != n
                        ? (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n })
                        : null,
                ],
            }),
            r,
        ],
    });
}
var hl = n(957272);
function hr(e) {
    let { applicationId: t, surface: n, launch: l, frameOverlay: r } = e,
        { frame: i, state: s } = (0, f4.A)({ applicationId: t, surface: n, launch: l });
    if (((0, f6.A)(t, n), s === f4.n.Launched)) {
        let e = (0, a.jsx)(f5.A, { frameId: i.id, level: f3.A.WithinAppContent, className: hl.Z7, overlay: r });
        return (0, l0.Q5)(n) ? (0, a.jsx)(he, { children: e }) : e;
    }
    return (0, a.jsx)(ha, { state: s });
}
function ha(e) {
    let { state: t } = e;
    switch (t) {
        case f4.n.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: hl.qs,
                children: (0, a.jsx)(hn, {
                    title: E.intl.string(S.default["9kpdo7"]),
                    body: E.intl.string(S.default.iIA8Nj),
                }),
            });
        case f4.n.NoApplication:
            return (0, a.jsx)(fX, { className: hl.qs });
        case f4.n.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: hl.qs,
                children: (0, a.jsx)(hn, {
                    title: E.intl.string(S.default["7k4GyN"]),
                    body: E.intl.string(S.default.zdIy3R),
                }),
            });
        case f4.n.Error:
            return (0, a.jsxs)("div", {
                className: hl.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: E.intl.string(S.default.lTPbnG),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: hl.tj,
                        children: E.intl.string(S.default.e6GiAZ),
                    }),
                ],
            });
        case f4.n.AwaitingLaunch:
        case f4.n.Loading:
            return (0, a.jsx)("div", { className: hl.qs, children: (0, a.jsx)(tE.y, {}) });
    }
}
var hi = n(308528),
    hs = n(334738),
    ho = n(688438),
    hu = n(365971),
    hc = n(703462);
function hd(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: hc.f,
        children: [
            (0, a.jsx)(et.k, { size: "lg", color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function hm() {
    return (0, a.jsx)("div", { className: hc.f, children: (0, a.jsx)(tE.y, {}) });
}
function hf(e) {
    let t,
        n,
        { projectId: l, previewApplicationId: r } = e,
        [s, u] = i.useState(null),
        c = s?.previewApplicationId === r ? s.channelId : null,
        d = (0, o.bG)([aM.A], () => (null != c ? aM.A.getChannel(c) : null), [c]);
    ((t = d?.id ?? null),
        i.useEffect(() => {
            null != t && hi.A.preload(q.ME, t);
        }, [t]),
        (n = (0, o.bG)([tN.A], () => tN.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, hu.Xg)();
            return (
                (0, hs.yl)(t, e),
                () => {
                    (0, hs.dm)(t, e);
                }
            );
        }, [t, n]));
    let [m, f] = i.useState(null),
        h = m === r;
    return (i.useEffect(() => {
        if (null != d || h) return;
        let e = !1;
        return (
            (0, lC.CN)(l).then(
                (t) => {
                    e || u({ previewApplicationId: r, channelId: t });
                },
                () => {
                    e || f(r);
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [l, r, d, h]),
    h)
        ? (0, a.jsx)(hd, { message: E.intl.string(S.default["VP/O8s"]) })
        : null == d
          ? (0, a.jsx)(hm, {})
          : (0, a.jsx)("div", {
                className: hc.g,
                children: (0, a.jsx)(ho.A, { channel: d, guild: null, chatInputType: uy.oU.SIDEBAR }, d.id),
            });
}
var hh = n(887909),
    hp = n(570962),
    hg = n(998475);
function hx(e) {
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
    } = (0, hh.useOAuth2AuthorizeForm)({ ...e, hideCancel: !0 });
    return (0, a.jsxs)("section", {
        className: hg.Nr,
        "aria-label": t,
        children: [
            (0, a.jsx)("div", {
                className: hg.rf,
                children: (0, a.jsx)(hp.A, {
                    obscured: !0 === m,
                    children: (0, a.jsxs)("div", {
                        className: hg.Gq,
                        children: [
                            null != n
                                ? (0, a.jsxs)("div", {
                                      className: hg.z3,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/bold",
                                              color: "text-strong",
                                              children: n,
                                          }),
                                          null != l
                                              ? (0, a.jsx)(v.E, {
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
                                className: h()(hg.Qs, c ? hg.cw : null, d ? hg.pN : null),
                                children: [i, null == o ? u : null],
                            }),
                        ],
                    }),
                }),
            }),
            null != s && s.length > 0
                ? (0, a.jsx)("div", {
                      className: hg.o1,
                      children: s.map((e, t) => (0, a.jsx)(Z.$, { size: "md", ...e }, t)),
                  })
                : null,
        ],
    });
}
var hv = n(765671),
    hj = n(269094),
    hb = n(714917),
    hy = n(463660),
    hk = n(582063);
let hw = ["image/png", "image/jpeg", "image/gif", "image/webp"];
function hN() {
    (0, ed.P0)({ text: E.intl.string(S.default.jj3abP), variant: "critical" });
}
function hC(e) {
    let { projectId: t } = e,
        n = i.useRef(null),
        l = i.useRef(null),
        r = E.intl.string(S.default["xd/1IW"]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(ef.Y, {
                targetElementRef: n,
                align: "left",
                position: "bottom",
                renderPopout: (e) => {
                    let { closePopout: n } = e;
                    return (0, a.jsx)(hA, { projectId: t, onClose: n, onUpload: () => l.current?.click() });
                },
                children: (e) => {
                    let { onClick: t } = e;
                    return (0, a.jsx)("div", {
                        ref: n,
                        className: hk.m2,
                        children: (0, a.jsx)(N.m, {
                            position: "bottom",
                            text: r,
                            asContainer: !0,
                            children: (0, a.jsx)(eX.K, {
                                "aria-label": r,
                                icon: eW.SettingsIcon,
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
                accept: hw.join(","),
                hidden: !0,
                "aria-hidden": !0,
                tabIndex: -1,
                onChange: (e) => {
                    let n = e.currentTarget.files?.[0];
                    ((e.currentTarget.value = ""),
                        null != n &&
                            (hw.includes(n.type)
                                ? n.size > ex.aI
                                    ? (0, ed.P0)({ text: E.intl.string(S.default.T8Spiu), variant: "critical" })
                                    : (0, hy.M$)(t, n).catch(hN)
                                : (0, ed.P0)({ text: E.intl.string(S.default.AO7zpk), variant: "critical" })));
                },
            }),
        ],
    });
}
function hA(e) {
    let { projectId: t, onClose: n, onUpload: l } = e,
        r = (0, o.bG)([hb.A], () => hb.A.getBackground(t)),
        i = r?.blur === !0,
        s = r?.imageEtag ?? null;
    return (0, a.jsxs)(eh.W, {
        "data-menu-migrated": !0,
        navId: "conjure-overlay-background",
        "aria-label": E.intl.string(S.default["xd/1IW"]),
        onClose: n,
        onSelect: void 0,
        children: [
            (0, a.jsxs)(ep.rX, {
                children: [
                    (0, a.jsx)(ep.Dr, {
                        id: "conjure-overlay-background-upload",
                        label: E.intl.string(S.default.uQpDky),
                        icon: a1.X,
                        action: () => {
                            (n(), l());
                        },
                    }),
                    (0, a.jsx)(ep.Dr, {
                        id: "conjure-overlay-background-reset",
                        label: E.intl.string(S.default.AiAz8J),
                        icon: mZ.RetryIcon,
                        disabled: null == s,
                        action: () => {
                            (n(), (0, hy.Og)(t).catch(hN));
                        },
                    }),
                ],
            }),
            (0, a.jsx)(ep.rX, {
                children: (0, a.jsx)(ep.fP, {
                    id: "conjure-overlay-background-blur",
                    label: E.intl.string(S.default["hyN+kc"]),
                    checked: i,
                    action: () => {
                        (0, hy.Y1)(t, !i) || hN();
                    },
                }),
            }),
        ],
    });
}
let hS = "/assets/7cec34541705c795.webp";
function hE(e) {
    let { applicationId: t, projectId: n, size: l } = e,
        r = (0, f4.A)({ applicationId: t, surface: lU.ZN });
    return (i.useEffect(() => {
        let e = (0, lU.VA)(t, lU.ZN);
        return () => (0, l1.r)(e);
    }, [t]),
    r.state !== f4.n.Launched)
        ? (0, a.jsx)(ha, { state: r.state })
        : r.frame.data.proxyTicketRefreshing
          ? (0, a.jsx)(ha, { state: f4.n.Loading })
          : (0, a.jsx)(hI, { lifecycle: r, projectId: n, size: l });
}
function hI(e) {
    let { lifecycle: t, projectId: n, size: l } = e,
        { ref: r, width: i, height: s } = (0, hv.Ay)(),
        o = (function (e, t) {
            let { width: n, height: l } = e;
            return null == n || null == l || n <= 0 || l <= 0 ? 1 : Math.min(1, n / t.width, l / t.height);
        })({ width: i, height: s }, l);
    return (0, a.jsxs)("div", {
        className: hk.JH,
        children: [
            (0, a.jsx)(hM, { projectId: n }),
            (0, a.jsx)("div", {
                ref: r,
                className: hk.dw,
                children: (0, a.jsx)("div", {
                    className: hk.HL,
                    style: {
                        "--custom-conjure-overlay-widget-width": `${l.width}px`,
                        "--custom-conjure-overlay-widget-height": `${l.height}px`,
                        "--custom-conjure-overlay-widget-scale": String(o),
                    },
                    children: (0, a.jsx)(hj.A, { frame: t.frame, application: t.application, className: hk.Gt }),
                }),
            }),
            null != n ? (0, a.jsx)(hC, { projectId: n }) : null,
        ],
    });
}
function hM(e) {
    let { projectId: t } = e,
        n = (0, o.bG)([hb.A], () => (null != t ? hb.A.getBackground(t) : null)),
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
                (0, hy.Mg)(t, l).then(
                    (t) => {
                        e || s(t);
                    },
                    () => {
                        e || s(hS);
                    },
                ),
                () => {
                    e = !0;
                }
            );
        }, [t, l]));
    let f = null != l ? r : null,
        p = null == l || (null != f && f === u) ? hS : f;
    return null != p && (null == t || null != n || d)
        ? (0, a.jsx)("img", {
              className: h()(hk.LO, { [hk.Ty]: n?.blur === !0 }),
              src: p,
              alt: "",
              "aria-hidden": !0,
              onError: () => {
                  p === f && c(f);
              },
          })
        : null;
}
var h_ = n(409478),
    hP = n(652227);
function hR(e) {
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
            overlayWidgetSize: m = lE,
            projectId: f,
            frameOverlay: h,
            paused: p = !1,
            onResume: g,
        } = e,
        x = (0, o.bG)([iu.A], () => null != f && null != iu.A.getSetupStartedAt(f), [f]);
    return s?.type === "checking"
        ? (0, a.jsx)("div", { className: hP.qs, children: (0, a.jsx)(tE.y, {}) })
        : s?.type === "permissions"
          ? (0, a.jsx)("div", {
                className: hP.qs,
                children: null == s.authorizeProps ? (0, a.jsx)(tE.y, {}) : (0, a.jsx)(hx, { ...s.authorizeProps }),
            })
          : i
            ? null == t
                ? null
                : (0, a.jsxs)("div", {
                      className: hP.RG,
                      children: [
                          (0, lM.yf)(u, c)
                              ? p
                                  ? (0, a.jsx)(hT, { projectId: f, onResume: g })
                                  : (0, a.jsx)(hr, { applicationId: t, surface: l, launch: r, frameOverlay: h })
                              : null,
                          "widget" === c && null != d
                              ? "unavailable-authorization-revoked" === u.profileState
                                  ? (0, a.jsx)("div", {
                                        className: hP.qs,
                                        children: (0, a.jsx)(hn, {
                                            wide: !0,
                                            title: E.intl.string(S.default["08U+YO"]),
                                            body: E.intl.string(S.default.pKBfrc),
                                        }),
                                    })
                                  : (0, a.jsx)(h_.A, { applicationId: d })
                              : null,
                          "overlay" === c && u.modes.includes("overlay")
                              ? (0, a.jsx)(hE, { applicationId: t, projectId: f, size: m })
                              : null,
                          "bot" === c && null != n && null != f
                              ? (0, a.jsx)(hf, { projectId: f, previewApplicationId: n })
                              : null,
                      ],
                  })
            : x
              ? (0, a.jsx)("div", { className: hP.qs, children: (0, a.jsx)(tE.y, {}) })
              : (0, a.jsx)(fX, { className: hP.qs });
}
function hT(e) {
    let { projectId: t, onResume: n } = e;
    return (
        (0, f2.Pu)(t),
        (0, a.jsx)("div", {
            className: hP.qs,
            children: (0, a.jsx)(hn, {
                wide: !0,
                title: E.intl.string(S.default.MMWEH2),
                body: E.intl.string(S.default.iKSu55),
                children:
                    null != n
                        ? (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eU.PlayIcon,
                              text: E.intl.string(S.default.ZKd2Cw),
                              onClick: n,
                          })
                        : null,
            }),
        })
    );
}
var hL = n(750506),
    h$ = n(867193),
    hD = n(539197),
    hz = n(977020);
function hO(e) {
    let { projectId: t } = e,
        n = (0, hD.X2)(t),
        l = (function (e) {
            let [t, n] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    if (null == e) return;
                    function t() {
                        let t = (0, hD.Ie)(e);
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
        className: hz.$Q,
        style: { left: r, top: s, width: o, height: u, "--custom-conjure-cursor-scale": c },
        "aria-hidden": !0,
        [hD.t$]: "",
        children: [
            n.presses > 0
                ? (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)("div", { className: h()(hz.hN, hz.vW), style: d(n.pressX, n.pressY) }),
                              (0, a.jsx)("div", { className: h()(hz.hN, hz.A7), style: d(n.pressX, n.pressY) }),
                          ],
                      },
                      n.presses,
                  )
                : null,
            (0, a.jsx)("svg", {
                className: h()(hz.UE, { [hz.SP]: n.shown, [hz.Vq]: n.pressed, [hz.GP]: n.dipping }),
                style: d(n.x, n.y),
                width: "18",
                height: "24",
                viewBox: "0 0 18 24",
                children: (0, a.jsx)("path", { d: "M2 2 L2 20 L6.5 16 L9.5 23 L12.5 21.5 L9.5 15 L16 15 Z" }),
            }),
        ],
    });
}
var hF = n(417760);
function hq(e) {
    let { phase: t, projectId: n, compact: l } = e,
        { stop: r, stopping: s } = (function (e) {
            let t = (0, o.bG)([lp.A], () => null != e && lp.A.isThinking(e)),
                [n, l] = i.useState(!1),
                [r, a] = i.useState(t);
            (t !== r && (a(t), t || l(!1)),
                i.useEffect(() => {
                    if (!n) return;
                    let e = setTimeout(() => l(!1), 5e3);
                    return () => clearTimeout(e);
                }, [n]));
            let s = i.useCallback(() => {
                null != e && (l(!0), (0, _.interruptTurn)(e));
            }, [e]);
            return { stop: t ? s : null, stopping: n };
        })(n),
        u = (0, ly.CU)(n),
        c = "controlling" === t,
        d = E.intl.string(c ? (u ? S.default["VJW/5P"] : S.default["+hD2Iz"]) : S.default["h+i1r9"]),
        m =
            null != r
                ? (0, a.jsx)(Z.$, {
                      variant: "overlay-primary",
                      size: "sm",
                      text: E.intl.string(S.default.oU59sU),
                      loading: s,
                      onClick: r,
                      "data-testid": "conjure-control-stop",
                  })
                : null;
    return l
        ? (0, a.jsxs)("div", {
              className: h()(hF.M0, hF.oE),
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  c
                      ? (0, a.jsx)(db.i, { size: 12, color: "currentColor" })
                      : (0, a.jsx)(oA.SparklesIcon, { size: "sm", color: "currentColor" }),
                  (0, a.jsx)(v.E, { variant: "text-sm/semibold", color: "none", className: hF.ID, children: d }),
                  c ? (0, a.jsx)(at.A, { children: E.intl.string(S.default.fg1sor) }) : null,
                  c ? (0, a.jsx)("div", { className: hF.lC, children: m }) : null,
              ],
          })
        : (0, a.jsxs)("div", {
              className: hF.M0,
              "data-phase": t,
              "data-testid": "conjure-control-notice",
              children: [
                  (0, a.jsxs)("div", {
                      className: hF.sp,
                      children: [
                          (0, a.jsx)(oA.SparklesIcon, { size: "sm", color: "currentColor" }),
                          c ? (0, a.jsx)(db.i, { size: 12, color: "currentColor" }) : null,
                          (0, a.jsxs)("div", {
                              className: hF.f4,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-sm/semibold",
                                      color: "none",
                                      className: hF.w9,
                                      children: d,
                                  }),
                                  c
                                      ? (0, a.jsx)(v.E, {
                                            variant: "text-xs/medium",
                                            color: "none",
                                            className: hF.Rb,
                                            children: E.intl.string(S.default.fg1sor),
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
                  c ? (0, a.jsx)("div", { className: hF.lC, children: m }) : null,
              ],
          });
}
function hU(e) {
    let { projectId: t, applicationId: n, previewApplicationId: l, resolveTarget: r, frameId: s } = e,
        o = (0, ly.Zv)(null != n && n === l ? t : null),
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
        c = (0, tt.useHasAnyModalOpen)(),
        d = (0, lO.cR)(s);
    i.useEffect(() => {
        o && d && null != s && (0, lO.BL)(s);
    }, [o, d, s]);
    let [m, f] = i.useState(null),
        [h, p] = i.useState(null),
        [g, x] = i.useState(null),
        v = "idle" !== u;
    i.useEffect(() => {
        if (!v) return;
        function e() {
            let e = rm(r());
            f((t) => (rf(t, e) ? t : e));
            let t = null == h ? null : rm(h);
            (x((e) => (rf(e, t) ? e : t)), null != h && (0, h$.C)(h.getBoundingClientRect().height));
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
                    null != h && (0, h$.C)(0));
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
            let [e] = i.useContext(hL.uY),
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
                      className: hF.D,
                      "data-phase": u,
                      children: (0, a.jsx)("div", {
                          className: hF.QF,
                          children: (0, a.jsx)(hq, { phase: u, projectId: t, compact: y }),
                      }),
                  })
                : null,
            (0, rs.createPortal)(
                (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(at.A, {
                        tag: "div",
                        role: "status",
                        "aria-live": "polite",
                        "data-testid": "conjure-control-announcer",
                        children:
                            "controlling" === u
                                ? E.intl.string(S.default.oWcemF)
                                : "handoff" === u
                                  ? E.intl.string(S.default["h+i1r9"])
                                  : "",
                    }),
                }),
                document.body,
            ),
            b
                ? (0, rs.createPortal)(
                      (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: hF.ys,
                                  style: w,
                                  "data-testid": "conjure-control-glow",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", {
                                  className: hF.om,
                                  style: k,
                                  "data-testid": "conjure-control-block",
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)(hO, { projectId: t }),
                          ],
                      }),
                      N,
                  )
                : null,
        ],
    });
}
var hG = n(399503),
    hB = n(853555),
    hK = n(271982),
    hH = n(187645);
let hV = new Map(),
    hW = !1;
function hX() {
    let e = new Map();
    for (let t of new Set([...lp.A.getActivityOrderedProjectIds(), ...(0, ly.T7)()])) {
        if (!(lp.A.isThinking(t) || (0, ly.wK)(t)) || lA.A.isPaused(t)) continue;
        let n = (function (e) {
            let t = eO.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, l0.Rc)(t);
            return (0, lU.x1)(n) ? n.id : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, r] of [...hV]) {
        var t, n;
        e.get(l) !== r.frameId &&
            ((t = l),
            (n = r),
            hV.delete(t),
            n.unregisterLookup(),
            hK.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        hV.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = hH.t),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    hJ(n),
                    document.body.appendChild(n));
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                (hV.set(e, l),
                    (l.unregisterLookup = (0, hB.Ng)(e, () => (0, fJ.n5)(n, t))),
                    hK.A.registerFrameTarget(t, n, f3.A.Backstage, void 0));
            })(t, n);
    for (let e of hV.values()) hJ(e.element);
}
function hJ(e) {
    let t = lQ.A.isBuilderPreviewMobile();
    e.classList.toggle(hH.L, !t);
    let n = t ? f8(lQ.A.isBuilderPreviewLandscape()) : null;
    ((e.style.width = null != n ? `${n.width}px` : ""), (e.style.height = null != n ? `${n.height}px` : ""));
}
var hZ = n(873727),
    hY = n(147248),
    hQ = n(418842),
    h0 = n(363195),
    h1 = n(818023);
let h2 = null;
var h3 = n(517461),
    h5 = n(761929),
    h4 = n(487336);
function h6(e) {
    let { open: t, maxWidth: n, children: l } = e,
        r = i.useRef(null),
        [s, o] = (0, h3.V)("ConjureChatSidebarWidth", 460),
        [u, c] = i.useState(s ?? 460),
        d = (0, ij.clamp)(u, 360, n),
        m = (0, h5.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: r,
            onElementResize: c,
            onElementResizeEnd: o,
            orientation: h5.R.HORIZONTAL_LEFT,
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
        className: h4.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: h4.Di, onPointerDown: f }),
            (0, a.jsx)("div", { ref: r, className: h4.kL, style: { width: d }, children: l }),
        ],
    });
}
var h7 = n(541940);
function h8(e) {
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
            paused: p,
        } = e,
        [g, x] = i.useState(null),
        v = (0, lY.A)(l, s),
        j = v?.id ?? null;
    (!(function (e, t) {
        let n = (0, o.bG)([h0.A], () => (0, hZ.x4)(h0.A.theme)),
            l = (0, o.bG)([hY.A], () => hY.A.gradientPreset),
            {
                reducedMotion: r,
                fontScale: a,
                highContrast: s,
                forcedColors: u,
                underlineLinks: c,
            } = (0, o.cf)([Y.Ay], () => ({
                reducedMotion: Y.Ay.useReducedMotion,
                fontScale: (0, hZ.U0)(),
                highContrast: Y.Ay.isHighContrastModeEnabled,
                forcedColors: Y.Ay.useForcedColors,
                underlineLinks: Y.Ay.alwaysShowLinkDecorations,
            })),
            d = lj.hH.useSetting(),
            m = (0, hQ.C)(),
            f = (0, o.bG)(
                [lz.A, lQ.A],
                () =>
                    lQ.A.isBuilderPreviewMobile() &&
                    lz.A.getFrame(t)?.applicationId === lQ.A.getPhoneLensApplicationId()
                        ? "mobile"
                        : "desktop",
                [t],
            ),
            h = i.useRef(!1),
            p = i.useRef(!1),
            g = i.useRef(0),
            x = i.useRef(null),
            v = i.useCallback(() => {
                let l = (0, fJ.n5)(e, t);
                if (null == l) return;
                x.current = l;
                let i = {
                    revision: ++g.current,
                    baseTheme: n,
                    customTheme: (0, hZ.Lq)(),
                    uiDensity: m,
                    messageDisplayCompact: d,
                    fontScale: a,
                    reducedMotion: r,
                    highContrast: s,
                    forcedColors: u,
                    underlineLinks: c,
                    formFactor: f,
                };
                (0, fI.W)(l, "set-env", i, {
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
                let n = (0, fJ.n5)(e, t);
                null != n && n !== x.current && b();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, fJ.n5)(e, t) && ((x.current = null), b());
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
    })(g, j),
        i.useEffect(() => {
            if (null != t) return (0, hB.Ng)(t, () => (0, fJ.n5)(g, j));
        }, [t, g, j]));
    let b = i.useCallback(() => (0, fJ.ow)(g, j), [g, j]),
        y = i.useCallback(() => (f ? (0, fJ.ow)(g, j) : g), [f, g, j]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: h()(h7.Mh, c),
                children: [
                    u,
                    p
                        ? null
                        : (0, a.jsx)(hU, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveTarget: y,
                              frameId: j,
                          }),
                    (0, a.jsx)("div", { ref: x, className: h7.fm, children: d }),
                ],
            }),
            m,
            p
                ? null
                : (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(fD, {
                              projectId: t ?? null,
                              applicationId: l,
                              previewApplicationId: r,
                              resolveIframe: b,
                              toggleRef: n,
                          }),
                          (0, a.jsx)(rY, { projectId: t, applicationId: l, previewApplicationId: r, resolveIframe: b }),
                      ],
                  }),
        ],
    });
}
function h9(e) {
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
        onRestoreVersion: p,
        onImportProject: g,
        debugOpen: x = !1,
        onCloseDebug: v,
        restoreState: j,
        previewReady: b,
        previewGate: y,
        availability: k,
        activeMode: w,
        widgetApplicationId: N,
        overlayWidgetSize: C,
        previewPaused: A = !1,
        onResumePreview: I,
    } = e;
    (0, hG.k)(t, N);
    let M = s.type === l_.U.MAIN || (0, l0.Q5)(s);
    !(function (e) {
        let { mobile: t, landscape: n } = (0, o.cf)([lQ.A], () => ({
            mobile: lQ.A.isBuilderPreviewMobile(),
            landscape: lQ.A.isBuilderPreviewLandscape(),
        }));
        i.useEffect(() => {
            let l;
            if (null != e) {
                if (t) ((l = n ? h1.aX.LANDSCAPE : h1.aX.PORTRAIT), (h2 = e));
                else {
                    if (h2 !== e) return;
                    ((l = h1.aX.UNHANDLED), (h2 = null));
                }
                tM.h.dispatch({ type: "ACTIVITY_SCREEN_ORIENTATION_UPDATE", screenOrientation: l, applicationId: e });
            }
        }, [e, t, n]);
    })(M ? l : null);
    let P = i.useRef(null),
        [R, T] = i.useState(0);
    (i.useEffect(() => {
        if (null == t) return;
        (0, r0.T)(t);
        let e = setInterval(() => {
            "visible" === document.visibilityState && (0, r0.T)(t);
        }, 3e3);
        return () => clearInterval(e);
    }, [t]),
        i.useLayoutEffect(() => {
            if (M) return ((0, lC.HV)(l), () => (0, lC.HV)(null));
        }, [l, M]),
        i.useEffect(() => {
            null != t &&
                ((0, _.ensureConnection)(t),
                hW ||
                    ((hW = !0),
                    lp.A.addChangeListener(hX),
                    eO.Ay.addChangeListener(hX),
                    lz.A.addChangeListener(hX),
                    lQ.A.addChangeListener(hX),
                    lA.A.addChangeListener(hX),
                    (0, ly.W3)(hX),
                    hX()));
        }, [t]),
        i.useLayoutEffect(() => {
            let e = P.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return (n.observe(e), () => n.disconnect());
        }, []));
    let L = Math.max(360, R - 320),
        $ = d || M;
    return (0, a.jsx)("div", {
        ref: P,
        className: h7.LB,
        children: (0, a.jsx)(h8, {
            projectId: t,
            designFeedbackToggleRef: n,
            applicationId: l,
            previewApplicationId: r,
            surface: s,
            header: c,
            showsFrame: (0, lM.yf)(k, w),
            paused: A,
            mainClassName: null == c ? void 0 : h()(h7.ez, { [h7.zt]: d }),
            content: (0, a.jsx)(hR, {
                applicationId: l,
                previewApplicationId: r,
                surface: s,
                frameLaunchParams: u,
                previewReady: b,
                previewGate: y,
                availability: k,
                activeMode: w,
                widgetApplicationId: N,
                overlayWidgetSize: C,
                projectId: t,
                paused: A,
                onResume: I,
                frameOverlay: (0, a.jsx)(f1, { projectId: t, applicationId: l, previewApplicationId: r, surface: s }),
            }),
            sidebar:
                null != t && $
                    ? (0, a.jsx)(h6, {
                          open: d,
                          maxWidth: L,
                          children: (0, a.jsx)("div", {
                              className: h7.cO,
                              children: x
                                  ? (0, a.jsx)(fw, { projectId: t, onClose: v ?? (() => {}) }, t)
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(fK.A, { projectId: t }),
                                            (0, a.jsx)(ri.Ay, {
                                                "aria-label": E.intl.string(E.t["/VQax8"]),
                                                toolbar: (0, a.jsxs)(a.Fragment, {
                                                    children: [
                                                        f,
                                                        null == m
                                                            ? null
                                                            : (0, a.jsx)(ri.Ay.Icon, {
                                                                  icon: em.P,
                                                                  tooltip: E.intl.string(S.default.JD6Oit),
                                                                  onClick: m,
                                                              }),
                                                    ],
                                                }),
                                                children: (0, a.jsx)(ri.Ay.Title, {
                                                    children: E.intl.string(E.t["/VQax8"]),
                                                }),
                                            }),
                                            (0, a.jsx)("div", {
                                                className: h7.cb,
                                                children: (0, a.jsx)(
                                                    dU,
                                                    {
                                                        projectId: t,
                                                        restoreState: j,
                                                        onRestoreVersion: p,
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
var pe = n(323140);
function pt(e) {
    var t;
    let l,
        r,
        s,
        { project: c, projectsLoaded: d, onBack: m, guildId: f } = e,
        [p, g] = i.useState(!0),
        [j, b] = i.useState(!1),
        k = lb(),
        w = i.useCallback(() => g(!0), []),
        C = i.useCallback(() => {
            (b(!1), g(!0));
        }, []),
        { restoreState: A, handleRestoreVersion: I } = (function (e, t) {
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
                            let u = e.id;
                            function c() {
                                return s.current && a.current === u;
                            }
                            ((o.current = !0),
                                t(),
                                l({ entry: n, status: "restoring" }),
                                (0, lw.oB)(u, n.sha)
                                    .then(
                                        async () => {
                                            if (
                                                (i &&
                                                    c() &&
                                                    (0, ed.P0)({
                                                        text: E.intl.formatToPlainString(S.default.Z4n6LX, {
                                                            title: (0, lk.T4)(n.subject).short,
                                                        }),
                                                        variant: "success",
                                                    }),
                                                null != r)
                                            ) {
                                                let e = await (0, lN.c)(u, r);
                                                null != e && (0, ed.P0)({ text: e, variant: "critical" });
                                            }
                                            c() && l({ entry: n, status: "restored" });
                                        },
                                        (e) => {
                                            c() &&
                                                (l({ entry: n, status: "failed" }),
                                                console.error("[conjure] version restore failed", u, e),
                                                (0, ed.P0)({
                                                    text: E.intl.string(S.default["PSdo+w"]),
                                                    variant: "critical",
                                                }));
                                        },
                                    )
                                    .finally(() => {
                                        c() && (o.current = !1);
                                    }));
                        },
                        [e, t],
                    ),
                }
            );
        })(c, C),
        P = c?.id ?? null,
        {
            integrationStatus: T,
            isPreviewApplicationLoading: L,
            checkingIntegration: $,
            previewReady: D,
            hasFrame: z,
            needsPermissionReview: O,
            installAuthorizeProps: F,
        } = (function (e, t) {
            let [n, l] = i.useState(null),
                r = e?.id ?? null,
                a = i.useRef(r),
                s = i.useRef(null);
            a.current = r;
            let u = (0, o.bG)(
                    [eO.Ay, lW.A],
                    () => (null == r ? null : (eO.Ay.getIntegrationStatus(r) ?? lW.A.getIntegrationStatus(r))),
                    [r],
                ),
                { data: c, isLoading: d } = (0, lV.YY)(e?.preview_application_id ?? void 0),
                m = null != r && n !== r,
                f = u?.preview_ready === !0,
                h = u?.has_activity === !0,
                p = (0, lM.Qg)({
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
                        await ((0, R.CG)(r)?.catch(() => (0, R.U1)(r, e.signal)) ?? (0, R.U1)(r, e.signal));
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
            let x = (0, lX.a)(e ?? null, u ?? null, t),
                v = i.useCallback(async () => {
                    null != e && (await (0, lX.$)(e, x));
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
                              ...(0, lJ.i)({ applicationId: t, application: c ?? null, guildId: x }),
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
        })(c, f),
        G =
            (0, o.bG)([l2.A], () => (null == P ? void 0 : l2.A.getPublishStatus(P)?.previewAppChannels), [P]) ??
            T?.preview_app_channels,
        {
            availability: B,
            activeMode: K,
            setMode: H,
            frameSurface: V,
            frameSurfaceOptions: W,
            setFrameSurface: X,
            appChannel: J,
            setAppChannel: Y,
            frameLaunchParams: Q,
            widgetApplicationId: ee,
        } = (0, lL.p)({
            applicationId: c?.preview_application_id ?? null,
            previewApplicationId: c?.preview_application_id ?? null,
            declaredActivity: z,
            previewSupportedSurfaces: c?.preview_supported_surfaces,
            installScope: c?.install_scope ?? null,
            ownerAuthorizationRevoked: T?.owner_authorization_revoked === !0,
            supportsOverlay: c?.preview_supported_surfaces?.includes(lS.q7.OVERLAY) === !0,
            previewAppChannels: G,
        }),
        et =
            ((t = (0, o.bG)(
                [lp.A],
                () =>
                    null == P
                        ? null
                        : (function (e) {
                              for (let t = e.length - 1; t >= 0; t--) {
                                  let n = e[t].proposal?.overlay_widget;
                                  if (null != n) return n;
                              }
                              return null;
                          })(lp.A.getMessages(P)),
                [P],
            )),
            null != (l = t?.default_size) &&
            Number.isFinite(l.width) &&
            Number.isFinite(l.height) &&
            l.width > 0 &&
            l.height > 0
                ? l
                : lE);
    ((0, lI.x)(P, (e) => {
        B.modes.includes(e) && H(e);
    }),
        lv(P, () => {
            (g(!0), b(!0));
        }));
    let en = B.modes.includes("frame"),
        el = (0, o.bG)([lA.A], () => lA.A.isPaused(P), [P]),
        er = en && !el,
        {
            previewTargetOptions: ea,
            handleSelectPreviewTarget: ei,
            mobilePreview: es,
            mobilePreviewLabel: eo,
            handleToggleMobilePreview: eu,
            landscapePreview: ec,
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
                                          t === l_.U.APP_CHANNEL && n.length > 1
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
                f = (0, o.bG)([lQ.A], () => lQ.A.isBuilderPreviewMobile()),
                h = E.intl.string(f ? S.default.tKGF0Q : S.default.peqEOY),
                p = i.useCallback(() => (0, lC.GG)(!f), [f]),
                g = (0, o.bG)([lQ.A], () => lQ.A.isBuilderPreviewLandscape()),
                x = E.intl.string(g ? S.default.tunI2l : S.default.DoNdjA),
                v = i.useCallback(() => (0, lC.Lw)(!g), [g]),
                j = (0, l0.jS)(t),
                b = i.useMemo(() => (0, l0.Op)(j, l), [j, l]),
                y = (0, lY.A)(t?.preview_application_id ?? null, b),
                k = (0, lU.x1)(y) && y.data.proxyTicketRefreshing,
                w = i.useCallback(() => {
                    null == y || k || lZ.A.refreshProxyTicket(y.id);
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
            modes: B.modes,
            frameSurface: V,
            frameSurfaceOptions: W,
            previewAppChannels: G,
            setMode: H,
            setFrameSurface: X,
            setAppChannel: Y,
        }),
        ev = p && !j,
        ej = E.intl.string(ev ? S.default.JD6Oit : S.default.xjJAQm),
        ey = i.useCallback(() => {
            if (j) {
                (b(!1), g(!0));
                return;
            }
            g((e) => !e);
        }, [j]),
        ek = i.useCallback(() => g(!1), []),
        {
            designFeedbackActive: ew,
            designFeedbackToggleRef: eN,
            agentDrivingPreview: eC,
            designFeedbackLabel: eE,
            handleToggleDesignFeedback: eM,
        } = (function (e, t, n) {
            let { active: l } = n2(e);
            i.useEffect(() => {
                null != e && l && !t && nY(e);
            }, [e, l, t]);
            let r = i.useRef(null),
                a = (0, ly.Zv)(e),
                s = E.intl.string(a ? S.default.Sme0T0 : l ? S.default.vn5Rzu : S.default["cl/Jyl"]),
                o = i.useCallback(() => {
                    if (null != e) {
                        if (l) return void nY(e);
                        (n(), nJ(e));
                    }
                }, [e, l, n]);
            return {
                designFeedbackActive: l,
                designFeedbackToggleRef: r,
                agentDrivingPreview: a,
                designFeedbackLabel: s,
                handleToggleDesignFeedback: o,
            };
        })(P, er, C),
        [e_] = i.useState(() => eb.isPlatformEmbedded && (0, lH.qM)()),
        eP = null != lm(P);
    i.useEffect(() => {
        null != P && eP && !er && lu(P);
    }, [P, eP, er]);
    let eR = i.useCallback(() => {
            null != P &&
                (C(),
                (function (e) {
                    if (null != ls(e)) return;
                    let { byProject: t } = la.getState();
                    la.setState({ byProject: { ...t, [e]: li } });
                })(P));
        }, [P, C]),
        eT = i.useCallback(() => {
            null != P && lu(P);
        }, [P]),
        eL = eP ? E.intl.string(S.default.tuQ5f3) : eE,
        e$ = i.useCallback(() => {
            b((e) => !e && (g(!0), !0));
        }, []),
        eD = i.useCallback(() => b(!1), []),
        eF = i.useCallback(() => {
            null != P && (0, lC._j)(P);
        }, [P]),
        eq = i.useCallback(() => {
            null != P && (el ? (0, lC._j)(P) : (0, lC.di)(P, ep?.id));
        }, [P, el, ep?.id]),
        eU = i.useCallback(() => {
            var e, t;
            (null != c && ((e = c.id), (t = ep?.id), (0, _.closeConnection)(e), (0, l1.r)(t)), m());
        }, [c, ep?.id, m]),
        eG =
            ((r = i.useCallback(() => {
                null != c && (w(), (0, _.sendUserMessage)(c.id, E.intl.string(S.default.oU20rd)));
            }, [c, w])),
            {
                onExport: r,
                onImport: (s = eI(
                    i.useCallback(
                        (e) => {
                            if (null == c) return;
                            let t = c.id,
                                n = eS(e);
                            null != n
                                ? (0, ed.P0)({ text: n, variant: "critical" })
                                : (0, ez.A)({
                                      title: E.intl.formatToPlainString(S.default["Gm+u1+"], { name: c.name }),
                                      subtitle: E.intl.string(S.default.M7H3sJ),
                                      confirmText: E.intl.string(S.default.gFHykw),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          w();
                                          try {
                                              await eA(t, e, E.intl.string(S.default.Owerd3));
                                          } catch {
                                              (0, ed.P0)({
                                                  text: E.intl.string(S.default["Q+l4Hv"]),
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
        eB = i.useCallback(() => {
            null != c && (0, tf.A)(c, f);
        }, [c, f]),
        eK = (0, lM.JR)(K, O)
            ? { type: "permissions", authorizeProps: F }
            : $ && null == T
              ? { type: "checking" }
              : void 0,
        eH = (0, o.bG)([eO.Ay], () => null != P && eO.Ay.isProjectDeleting(P), [P]);
    i.useEffect(() => {
        ((null == c && d) || eH) && (0, u.bG)(q.BVt.CHANNEL(f, U.VV.CONJURE));
    }, [f, c, d, eH]);
    let {
            publishOptions: eV,
            publish: eX,
            publishing: eJ,
            confirmation: eZ,
        } = (function (e, t, n) {
            let [l, r] = i.useState(null),
                a = i.useRef(null),
                s = i.useCallback(() => {
                    (null != a.current && window.clearTimeout(a.current), (a.current = null));
                }, []);
            i.useEffect(() => s, [s]);
            let o = i.useMemo(
                    () => ({
                        ...ra,
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
                c = (0, e5.Ay)(e, u),
                d = c?.publishing === !0;
            i.useEffect(() => {
                d && (s(), r(null));
            }, [d, s]);
            let m = d ? null : l;
            return { publishOptions: u, publish: c, publishing: d, confirmation: m };
        })(P, f, $ || L),
        eY = (0, l3.L)(eX?.status ?? null),
        eQ =
            null == eX
                ? null
                : (0, a.jsx)("div", {
                      className: pe.As,
                      onMouseDown:
                          null == P || eX.disabled || eJ
                              ? void 0
                              : (e) => {
                                    0 === e.button && (0, l5.dx)(P);
                                },
                      children: (0, a.jsx)(N.m, {
                          text: eY,
                          asContainer: !0,
                          children: (0, a.jsx)(Z.$, {
                              size: "sm",
                              variant: "primary",
                              icon: eJ ? pn : null != eZ ? nI.U : void 0,
                              disabled: eX.disabled,
                              onClick: () => eX.run("header"),
                              text: eZ ?? eX.label,
                          }),
                      }),
                  }),
        e0 = null == c ? void 0 : () => (0, e6.A)(c.id, { guildId: f, isPreview: !0, publishOptions: eV }),
        e1 = (0, a.jsx)(M, {
            title: c?.name ?? E.intl.string(S.default.G1WwgK),
            breadcrumb: { title: E.intl.string(S.default.uk6jhJ), onClick: m },
            project: c,
            onOpenProjectSettings: e0,
            actions:
                null == c
                    ? null
                    : (0, a.jsxs)("div", {
                          className: pe.FO,
                          children: [
                              (0, a.jsx)(lK, {
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
                                  })(K, V, J),
                                  onChange: ei,
                              }),
                              en
                                  ? (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            "frame" === K
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: es ? pa : pr,
                                                      tooltip: eo,
                                                      "aria-label": eo,
                                                      selected: es,
                                                      onClick: eu,
                                                  })
                                                : null,
                                            es && "frame" === K
                                                ? (0, a.jsx)(y.A.Icon, {
                                                      icon: pi,
                                                      tooltip: em,
                                                      "aria-label": em,
                                                      selected: ec,
                                                      onClick: ef,
                                                  })
                                                : null,
                                            (0, a.jsx)(lh, {
                                                enabled: e_ && !eP && !eC && !el,
                                                onLongPress: eR,
                                                children: (0, a.jsx)(y.A.Icon, {
                                                    ref: eN,
                                                    icon: nM.x,
                                                    iconClassName: pe.D8,
                                                    tooltip: eL,
                                                    "aria-label": eL,
                                                    selected: eP || ew,
                                                    disabled: el || (eC && !eP),
                                                    onClick: eP ? eT : eM,
                                                }),
                                            }),
                                        ],
                                    })
                                  : null,
                              "frame" !== K || el
                                  ? null
                                  : (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)(n$.A, { frame: ep }),
                                            (0, a.jsx)(lG, { frame: ep, controlProjectId: c.id }),
                                        ],
                                    }),
                              (0, a.jsx)("div", { className: pe.YJ }),
                              k
                                  ? (0, a.jsx)(y.A.Icon, {
                                        icon: n_.BugIcon,
                                        tooltip: E.intl.string(S.default.Mt5k9d),
                                        "aria-label": E.intl.string(S.default.Mt5k9d),
                                        selected: j,
                                        onClick: e$,
                                    })
                                  : null,
                              (0, a.jsx)(y.A.Icon, {
                                  icon: eW.SettingsIcon,
                                  tooltip: E.intl.string(S.default.I2XSKe),
                                  "aria-label": E.intl.string(S.default.I2XSKe),
                                  onClick: e0,
                              }),
                              (0, a.jsx)(tm, {
                                  projectId: c.id,
                                  projectName: c.name,
                                  guildId: f,
                                  projectGuildId: c.guild_id,
                                  isOwner: (0, eO.PV)(c),
                                  canRemix: (0, eO.H_)(c),
                                  onRefresh: (0, lU.x1)(ep) ? ex : void 0,
                                  isRefreshing: eg,
                                  onTogglePreviewPaused: "frame" === K ? eq : void 0,
                                  previewPaused: el,
                                  previewPauseDisabled: !el && eC,
                                  onClose: eU,
                                  onExport: eG.onExport,
                                  onImport: eG.onImport,
                                  onRemix: eB,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = c.id),
                                          void (0, tt.openModalLazy)(async () => {
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
                                              restoreDisabled: A?.status === "restoring",
                                              onRestoreVersion: (e, t) => I(e, t, !0),
                                          }),
                                          void (0, tt.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  n.e("323079"),
                                                  n.e("437655"),
                                                  n.e("420238"),
                                                  n.e("586467"),
                                                  n.e("231782"),
                                                  n.e("526192"),
                                                  n.e("437578"),
                                              ]).then(n.bind(n, 209233));
                                              return (n) => (0, a.jsx)(t, { ...n, ...e });
                                          })
                                      );
                                  },
                                  refreshApplicationId:
                                      B.modes.includes("widget") &&
                                      "unavailable-authorization-revoked" !== B.profileState
                                          ? ee
                                          : null,
                                  previewProjectId: c.id,
                              }),
                              ev
                                  ? null
                                  : (0, a.jsx)(y.A.Icon, { icon: pl, tooltip: ej, "aria-label": ej, onClick: ey }),
                          ],
                      }),
        });
    return (0, a.jsxs)("div", {
        className: h()(pe.nj, nC.T),
        children: [
            eG.importInput,
            (0, a.jsx)("main", {
                className: pe.JX,
                children:
                    null == c
                        ? (0, a.jsxs)("div", {
                              className: pe.j5,
                              children: [
                                  e1,
                                  (0, a.jsxs)("div", {
                                      className: pe.sD,
                                      children: [
                                          (0, a.jsx)(x.D, {
                                              variant: "heading-lg/semibold",
                                              children: E.intl.string(S.default.G1WwgK),
                                          }),
                                          (0, a.jsx)(v.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: E.intl.string(S.default.fINulo),
                                          }),
                                          (0, a.jsx)(Z.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: E.intl.string(S.default["WFJ/vb"]),
                                              onClick: () => (0, R.hF)(f),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, a.jsx)(e5.bI.Provider, {
                              value: eV,
                              children: (0, a.jsx)(
                                  h9,
                                  {
                                      projectId: c.id,
                                      designFeedbackToggleRef: eN,
                                      applicationId: c.preview_application_id,
                                      previewApplicationId: c.preview_application_id,
                                      surface: eh,
                                      frameLaunchParams: Q,
                                      header: e1,
                                      chatOpen: p,
                                      onCloseChat: ek,
                                      chatHeaderAction: eQ,
                                      debugOpen: k && j,
                                      onCloseDebug: eD,
                                      onRestoreVersion: I,
                                      onImportProject: (0, eO.PV)(c) ? eG.onImport : void 0,
                                      restoreState: A,
                                      previewReady: D,
                                      previewGate: eK,
                                      availability: B,
                                      activeMode: K,
                                      widgetApplicationId: ee,
                                      overlayWidgetSize: et,
                                      previewPaused: el,
                                      onResumePreview: eF,
                                  },
                                  c.id,
                              ),
                          }),
            }),
        ],
    });
}
function pn() {
    return (0, a.jsx)(tE.y, { type: tE.t.SPINNING_CIRCLE_SIMPLE, className: pe.Hv, itemClassName: pe.C5 });
}
function pl(e) {
    return (0, a.jsx)(nP.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function pr(e) {
    return (0, a.jsx)(nR.u, { ...e, size: "custom", width: 20, height: 20 });
}
function pa(e) {
    return (0, a.jsx)(nT.k, { ...e, size: "custom", width: 20, height: 20 });
}
function pi(e) {
    return (0, a.jsx)(nL.H, { ...e, size: "custom", width: 20, height: 20 });
}
function ps(e) {
    let { guildId: t, projectId: n } = e,
        l = (0, o.yK)([c.Ay], () => c.Ay.getSelfMember(t)?.roles ?? [], [t]),
        r = (0, o.bG)(
            [d.A, m.A],
            () => {
                let e = d.A.getGuild(t);
                return null != e && m.A.can(q.xBc.MANAGE_GUILD, e);
            },
            [t],
        ),
        s = n ?? null;
    (i.useEffect(() => {
        (0, R.hF)(t);
    }, [t, l, r]),
        i.useEffect(() => {
            (0, R.dm)(t, s);
        }, [t, s]));
    let f = i.useCallback(() => {
            (0, u.pX)(q.BVt.CHANNEL(t, U.VV.CONJURE));
        }, [t]),
        h = (0, o.bG)(
            [eO.Ay],
            () => {
                if (null == s) return null;
                let e = eO.Ay.getProject(s);
                return null == e || (0, eO.PV)(e) || e.guild_id === t ? e : null;
            },
            [s, t],
        ),
        p = (0, o.bG)([eO.Ay], () => eO.Ay.hasFetchedGuildProjects(t), [t]);
    return null != s
        ? (0, a.jsx)(pt, { project: h, projectsLoaded: p, onBack: f, guildId: t }, s)
        : (0, a.jsx)(nE, { guildId: t });
}
